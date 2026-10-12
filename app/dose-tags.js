/* Drug doses next to drug names (data/doses.js → MF.doses).
   app.js renders every drug name as <span class="drug" data-drug="…">. After each render ("mf:render") this module:
   - adds a small 💊 dose tag after the FIRST mention of each drug inside a bubble / pathway / flowchart step block,
   - gives every mention a tooltip, and a tap / click popover with the full dose (Esc or a tap elsewhere closes it),
   - adds a "Doses" switch to the top bar (remembered in localStorage "mf-doses"; on by default).
   Chips, legend pills, topic cards and search results stay clean (no tags inside them).
   No HTML strings: DOM is built with createElement / textContent. */
(function () {
  "use strict";
  const KEY = "mf-doses";
  const NOTE = "Usual adult dose — standard references (BNF / Harrison / guidelines), not from the notes. Check renal / hepatic function and local protocol.";
  const SKIP = ".chip, .lg, .tcard, .results, .xref, .pl-tile, .pn, .crumbs, a";
  const SCOPE = ".bubble, .pathway, .mn, .page";
  const doc = document, root = doc.documentElement;
  const store = {
    get() { try { return localStorage.getItem(KEY); } catch (e) { return null; } },
    set(v) { try { localStorage.setItem(KEY, v); } catch (e) { /* storage unavailable */ } }
  };
  const on = () => store.get() !== "off";
  const doseOf = (el) => {
    const d = window.MF && MF.doses ? MF.doses[el.dataset.drug] : null;
    return d || null;
  };
  // The inline tag shows the dose variant that fits where the drug is mentioned (e.g. INSULIN on the DKA page →
  // "DKA: regular insulin IV 0.05–0.1 U/kg/h"); variants are " · "-separated and start with their indication words.
  // The full list lives in the popover.
  const words = (s) => (String(s).toLowerCase().match(/[a-z0-9₀-₉]{2,}/g) || []).filter((w) => !/^\d+$/.test(w));
  const STOP = new Set(["mg", "kg", "iv", "sc", "im", "od", "bd", "tds", "qds", "then", "with", "for", "and", "the", "max", "per", "day", "days", "dose", "doses", "oral", "orally", "usual", "adult", "child", "up", "to", "of", "in", "or", "by", "once", "daily", "weekly", "hourly", "min", "µg", "mmol", "level", "egfr", "crcl", "nasal", "start", "loading", "load", "low", "high", "maintenance", "treatment", "prophylaxis", "acute", "severe", "if", "at", "no"]);
  function pickVariant(d, context) {
    const parts = d.split(" · ");
    if (parts.length === 1) return { text: parts[0], more: false };
    let best = 0, bestScore = 0;
    parts.forEach((p, i) => {
      const label = p.split(/[:\d]/)[0];          // indication words before the first number / colon
      const ws = words(label).filter((w) => !STOP.has(w));
      const score = ws.reduce((n, w) => n + (context.has(w) ? (w.length <= 4 ? 3 : 2) : 0), 0);
      if (score > bestScore) { best = i; bestScore = score; }
    });
    return { text: parts[best], more: true };
  }
  const short = (d, context) => {
    const v = pickVariant(d, context || new Set());
    const t = v.text.length > 90 ? v.text.slice(0, 88).replace(/\s+\S*$/, "") + " …" : v.text;
    return t + (v.more && !t.endsWith("…") ? " …" : "");
  };
  function contextFor(scope) {
    const id = (location.hash.match(/^#\/topic\/([^/]+)/) || [])[1];
    const t = id && window.MF && MF.topics ? MF.topics[id] : null;
    const bits = [scope ? scope.textContent : ""];
    if (t) bits.push(t.title || "", (t.aka || []).join(" "), t.oneLine || "");
    return new Set(words(bits.join(" ")));
  }
  const mk = (tag, cls, text) => {
    const e = doc.createElement(tag);
    if (cls) e.className = cls;
    if (text != null) e.textContent = text;
    return e;
  };
  const pillIcon = () => {
    const i = window.MFUI && MFUI.icon ? MFUI.icon("medicines") || MFUI.icon("pills-2") : null;
    return i || mk("span", "dose-glyph", "℞");
  };

  function decorate(view) {
    const scopes = new Map(); // scope element → Set of drugs already tagged there
    const contexts = new Map(); // scope element → its word set (topic + bubble text)
    view.querySelectorAll("span.drug").forEach((el) => {
      if (el.dataset.doseDone) return;
      const d = doseOf(el);
      el.dataset.doseDone = "1";
      if (!d) return;
      el.title = el.textContent + " — " + d;
      if (el.closest(SKIP)) return; // inside chips / links: tooltip only, the click still navigates
      el.classList.add("has-dose");
      el.tabIndex = 0;
      el.setAttribute("role", "button");
      el.setAttribute("aria-label", el.textContent + ": show dose");
      const scope = el.closest(SCOPE) || view;
      let seen = scopes.get(scope);
      if (!seen) { seen = new Set(); scopes.set(scope, seen); }
      if (seen.has(el.dataset.drug)) return;
      seen.add(el.dataset.drug);
      const tag = mk("span", "dose-tag");
      tag.title = d + "\n" + NOTE;
      tag.dataset.drug = el.dataset.drug;
      tag.setAttribute("role", "button");
      tag.tabIndex = 0;
      tag.appendChild(pillIcon());
      if (!contexts.has(scope)) contexts.set(scope, contextFor(scope === view ? null : scope));
      tag.appendChild(mk("span", "dose-t", short(d, contexts.get(scope))));
      // place it after any highlight / bold wrapper, so the pink high-yield mark does not run around the tag
      let at = el;
      while (at.parentElement && at.parentElement.matches("mark, strong, b, em, .kw, sup, sub")) at = at.parentElement;
      at.after(tag);
    });
  }

  // ---------- popover ----------
  let pop = null, popFor = null;
  function closePop() {
    if (pop) pop.remove();
    pop = null; popFor = null;
  }
  function openPop(anchor) {
    const key = anchor.dataset.drug, d = window.MF && MF.doses ? MF.doses[key] : null;
    if (!d) return;
    if (popFor === anchor) return closePop();
    closePop();
    pop = mk("div", "dose-pop");
    pop.setAttribute("role", "dialog");
    const head = mk("div", "dose-pop-h");
    head.appendChild(pillIcon());
    head.appendChild(mk("b", null, key.toUpperCase()));
    const x = mk("button", "dose-pop-x", "×");
    x.type = "button";
    x.setAttribute("aria-label", "Close");
    x.addEventListener("click", closePop);
    head.appendChild(x);
    pop.appendChild(head);
    const ul = mk("ul", "dose-pop-l");
    d.split(" · ").forEach((part) => ul.appendChild(mk("li", null, part)));
    pop.appendChild(ul);
    pop.appendChild(mk("div", "dose-pop-n", NOTE));
    doc.body.appendChild(pop);
    popFor = anchor;
    // place under the anchor, kept inside the viewport
    const r = anchor.getBoundingClientRect(), pw = Math.min(360, innerWidth - 16);
    pop.style.width = pw + "px";
    const left = Math.max(8, Math.min(innerWidth - pw - 8, r.left));
    const below = r.bottom + 8, ph = pop.offsetHeight;
    const top = below + ph > innerHeight - 8 && r.top - ph - 8 > 8 ? r.top - ph - 8 : below;
    pop.style.left = left + scrollX + "px";
    pop.style.top = top + scrollY + "px";
    x.focus({ preventScroll: true });
  }
  doc.addEventListener("click", (e) => {
    const t = e.target.closest(".dose-tag, span.drug.has-dose");
    if (t && !t.closest(".chip, a")) { e.preventDefault(); openPop(t); return; }
    if (pop && !e.target.closest(".dose-pop")) closePop();
  });
  doc.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closePop();
    if ((e.key === "Enter" || e.key === " ") && e.target.matches && e.target.matches(".dose-tag, span.drug.has-dose")) { e.preventDefault(); openPop(e.target); }
  });
  window.addEventListener("hashchange", closePop);
  window.addEventListener("resize", closePop);

  // ---------- top-bar switch ----------
  function apply() {
    root.classList.toggle("no-doses", !on());
    const b = doc.getElementById("doseBtn");
    if (b) {
      b.setAttribute("aria-pressed", on() ? "true" : "false");
      b.title = on() ? "Hide drug doses" : "Show drug doses";
    }
  }
  function mountSwitch() {
    const tools = doc.querySelector(".topbar .tools");
    if (!tools || doc.getElementById("doseBtn")) return;
    const b = mk("button", "theme-btn dose-btn");
    b.type = "button";
    b.id = "doseBtn";
    b.setAttribute("aria-label", "Show or hide drug doses");
    b.appendChild(pillIcon());
    b.addEventListener("click", () => { store.set(KEY, on() ? "off" : "on"); apply(); closePop(); });
    const theme = doc.getElementById("themeBtn");
    if (theme) tools.insertBefore(b, theme); else tools.appendChild(b);
    apply();
  }

  function run() {
    const view = doc.getElementById("view");
    if (!view) return;
    mountSwitch();
    decorate(view);
  }
  doc.addEventListener("mf:render", () => { closePop(); run(); });
  window.addEventListener("load", run);
  apply();
  window.MFDoses = { refresh: run };
})();
