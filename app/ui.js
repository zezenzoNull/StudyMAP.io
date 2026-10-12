/* Medicine Master Flowchart — UI layer: theme, icons and motion.
   Builds DOM with createElement / createElementNS / textContent only (no HTML strings).
   Safe to load in <head> (theme is applied at once, DOM work waits for DOMContentLoaded) or at the end of <body>.

   Theme   Dark (neo) is the default; the light "paper" theme is <html data-theme="light">. A choice made with the
           toolbar button is kept in localStorage "mf-theme"; until the user chooses, the OS prefers-color-scheme is
           followed. ?theme=light|dark sets and keeps the theme, ?theme=auto forgets the choice.
   Icons   window.MF_ICONS (data/icons.js), if present, becomes <span class="mi mi-NAME" aria-hidden="true">, drawn as a
           CSS mask so it takes the surrounding text colour. Without the file every page still works (letters stay).
   Motion  Bubbles, pathways and cards fade in once as they enter the screen (staggered); the arrow into a bubble
           draws itself; sequence badges pop; the notes' high-yield marks get an ink sweep; mnemonic key letters
           cascade; pages fade in. Arrows flow only while their bubble is hovered, focused or tapped (3 cycles).
           All of it is off under prefers-reduced-motion, html[data-motion="reduce"], ?motion=off and in print.
           Bubbles themselves are never transformed (only opacity, plus a rise on their children), so the arrows that
           app.js measures stay true and nothing is left behind for the drag/resize layout to fight with.
   Hooks   Re-runs on the "mf:render" document event from app.js and, as a fallback, on DOM changes inside #view. */
(function () {
  "use strict";
  const doc = document, root = doc.documentElement;
  const mm = (q) => (window.matchMedia ? window.matchMedia(q) : null);
  const onMq = (mq, fn) => { if (!mq) return; if (mq.addEventListener) mq.addEventListener("change", fn); else if (mq.addListener) mq.addListener(fn); };
  const mqLight = mm("(prefers-color-scheme: light)");
  const mqReduce = mm("(prefers-reduced-motion: reduce)");
  const mqPhone = mm("(max-width: 700px)");
  const store = {
    get(k) { try { return window.localStorage.getItem(k); } catch (e) { return null; } },
    set(k, v) { try { if (v == null) window.localStorage.removeItem(k); else window.localStorage.setItem(k, v); } catch (e) { /* storage unavailable */ } }
  };
  let params = null;
  try { params = new URLSearchParams(location.search); } catch (e) { params = null; }
  const param = (k) => (params ? params.get(k) : null);
  const ready = (fn) => (doc.readyState === "loading" ? doc.addEventListener("DOMContentLoaded", fn, { once: true }) : fn());

  // ======================================================== Theme
  const TK = "mf-theme";
  const THEME_BG = { dark: "#0c1220", light: "#f5f2ea" };
  const qTheme = param("theme");
  if (qTheme === "light" || qTheme === "dark") store.set(TK, qTheme);
  else if (qTheme === "auto") store.set(TK, null);
  if (param("motion") === "off") root.dataset.motion = "reduce";

  const chosen = () => { const v = store.get(TK); return v === "light" || v === "dark" ? v : null; };
  const currentTheme = () => chosen() || (mqLight && mqLight.matches ? "light" : "dark");

  function setMeta(name, content) {
    let m = doc.querySelector('meta[name="' + name + '"]');
    if (!m) {
      if (!doc.head) return;
      m = doc.createElement("meta");
      m.setAttribute("name", name);
      doc.head.appendChild(m);
    }
    m.setAttribute("content", content);
  }
  function applyTheme(t) {
    root.dataset.theme = t;
    setMeta("theme-color", THEME_BG[t]);
    setMeta("color-scheme", t);
    syncToggle();
  }
  applyTheme(currentTheme());
  onMq(mqLight, () => { if (!chosen()) applyTheme(currentTheme()); });
  window.addEventListener("storage", (e) => { if (e.key === TK) applyTheme(currentTheme()); });

  const SVGNS = "http://www.w3.org/2000/svg";
  function svgEl(tag, attrs) {
    const e = doc.createElementNS(SVGNS, tag);
    Object.keys(attrs).forEach((k) => e.setAttribute(k, String(attrs[k])));
    return e;
  }
  // Shows the theme you switch TO: a sun in the dark theme, a moon in the paper theme.
  function themeGlyph() {
    const s = svgEl("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": 1.8, "stroke-linecap": "round", "stroke-linejoin": "round", "aria-hidden": "true", focusable: "false" });
    const sun = svgEl("g", { class: "ic-sun" });
    sun.appendChild(svgEl("circle", { cx: 12, cy: 12, r: 4.2 }));
    [[12, 2.5, 12, 4.5], [12, 19.5, 12, 21.5], [2.5, 12, 4.5, 12], [19.5, 12, 21.5, 12], [5.3, 5.3, 6.7, 6.7], [17.3, 17.3, 18.7, 18.7], [5.3, 18.7, 6.7, 17.3], [17.3, 6.7, 18.7, 5.3]]
      .forEach((l) => sun.appendChild(svgEl("line", { x1: l[0], y1: l[1], x2: l[2], y2: l[3] })));
    const moon = svgEl("path", { class: "ic-moon", d: "M20 14.6A8.2 8.2 0 0 1 9.4 4a8.2 8.2 0 1 0 10.6 10.6Z" });
    s.append(sun, moon);
    return s;
  }
  function syncToggle() {
    const b = doc.getElementById("themeBtn");
    if (!b) return;
    const next = currentTheme() === "dark" ? "light" : "dark";
    const label = next === "light"
      ? "Switch to the light paper theme (easier for long reading in a lit room)"
      : "Switch to the dark theme (easier in a dim room or at night)";
    b.setAttribute("aria-label", label);
    b.title = label;
  }
  function mountToggle() {
    const tools = doc.querySelector(".topbar .tools");
    if (!tools || doc.getElementById("themeBtn")) return;
    const b = doc.createElement("button");
    b.type = "button";
    b.id = "themeBtn";
    b.className = "theme-btn";
    b.appendChild(themeGlyph());
    b.addEventListener("click", () => {
      const t = currentTheme() === "dark" ? "light" : "dark";
      store.set(TK, t);
      applyTheme(t);
    });
    tools.appendChild(b);
    syncToggle();
  }

  // ======================================================== Icons
  const ICONS = () => (window.MF_ICONS && window.MF_ICONS.svg ? window.MF_ICONS : null);
  let iconSheet = null;
  const madeIcon = new Set();
  // One CSS rule per icon (made on first use), so spans carry only a class instead of a long inline data URI.
  function iconClass(name) {
    const I = ICONS();
    if (!I || !name || !I.svg[name]) return null;
    const cls = "mi-" + String(name).replace(/[^A-Za-z0-9_-]/g, "_");
    if (!madeIcon.has(cls)) {
      if (!iconSheet) {
        const st = doc.createElement("style");
        st.id = "mf-icon-rules";
        (doc.head || root).appendChild(st);
        iconSheet = st.sheet;
      }
      const url = 'url("data:image/svg+xml;utf8,' + encodeURIComponent(I.svg[name]) + '")';
      try { iconSheet.insertRule("." + cls + "{--mi:" + url + "}", iconSheet.cssRules.length); } catch (e) { return null; }
      madeIcon.add(cls);
    }
    return cls;
  }
  function icon(name) {
    const cls = iconClass(name);
    if (!cls) return null;
    const s = doc.createElement("span");
    s.className = "mi " + cls;
    s.setAttribute("aria-hidden", "true");
    return s;
  }
  const pick = (group, key) => { const I = ICONS(); return I && I[group] && key != null ? I[group][key] : null; };

  let codeToType = null;
  function typeOfCode(code) {
    if (!codeToType) {
      codeToType = {};
      const T = (window.MF && window.MF.TYPES) || {};
      Object.keys(T).forEach((k) => { if (!(T[k].icon in codeToType)) codeToType[T[k].icon] = k; });
      if (!Object.keys(codeToType).length) codeToType = null;
      if (!codeToType) return null;
    }
    return codeToType[String(code || "").trim()] || null;
  }
  const KIND_BY_CLASS = { "k-lab": "lab", "k-img": "imaging", "k-drug": "drug", "k-prot": "protocol", "k-emg": "emergency", "k-con": "concept" };
  function chipKind(chip) {
    const MF = window.MF || {};
    const href = chip.getAttribute("href") || "";
    const m = /^#\/node\/(.+)$/.exec(href);
    if (m) {
      let id = m[1];
      try { id = decodeURIComponent(id); } catch (e) { /* keep raw */ }
      const n = MF.shared && MF.shared[id];
      if (n && n.kind) return n.kind;
    }
    const lab = chip.querySelector(".clabel");
    if (lab && MF.KINDS) {
      const t = lab.textContent.trim();
      const k = Object.keys(MF.KINDS).find((x) => MF.KINDS[x].label === t);
      if (k) return k;
    }
    const c = Object.keys(KIND_BY_CLASS).find((x) => chip.classList.contains(x));
    return c ? KIND_BY_CLASS[c] : null;
  }
  const topicIdFromHref = (href) => { const m = /^#\/topic\/([^/]+)/.exec(href || ""); if (!m) return null; try { return decodeURIComponent(m[1]); } catch (e) { return m[1]; } };
  const currentTopicId = () => topicIdFromHref(location.hash.replace(/^#\/?/, "#/"));
  const SECTION_ICON = { "clinical pathways": ["extras", "pathway"], "sources for this topic": ["extras", "sources"], "shared nodes used in this topic": ["types", "shared"] };

  // Moves the bare title text of a pathway header into <span class="bt"> so it can sit on its own line.
  function wrapPathwayTitle(h) {
    if (h.querySelector(".bt")) return;
    const ico = h.querySelector(".ico"), ty = h.querySelector(".tylabel");
    const nodes = [];
    for (let n = ico ? ico.nextSibling : h.firstChild; n && n !== ty; n = n.nextSibling) nodes.push(n);
    if (!nodes.some((x) => x.textContent.trim())) return;
    const bt = doc.createElement("span");
    bt.className = "bt";
    h.insertBefore(bt, ty || null);
    nodes.forEach((x) => bt.appendChild(x));
    const f = bt.firstChild;
    if (f && f.nodeType === 3) f.textContent = f.textContent.replace(/^\s+/, "");
  }
  function prependIcon(el, name) {
    const ic = icon(name);
    if (ic) el.insertBefore(ic, el.firstChild);
    return ic;
  }

  function enhance(scope) {
    scope = scope || doc;
    scope.querySelectorAll(".pathway > header:not([data-ui])").forEach(wrapPathwayTitle);
    const I = ICONS();
    if (!I) { scope.querySelectorAll(".pathway > header:not([data-ui])").forEach((h) => (h.dataset.ui = "1")); return; }

    // bubble and pathway headers: type icon after the sequence number (the letter code hides when the icon is there)
    scope.querySelectorAll(".bubble > header:not([data-ui]), .pathway > header:not([data-ui])").forEach((h) => {
      h.dataset.ui = "1";
      const ico = h.querySelector(".ico");
      const ic = icon(pick("types", typeOfCode(ico && ico.textContent)));
      if (!ic) return;
      const num = h.querySelector(".num");
      h.insertBefore(ic, num ? num.nextSibling : h.firstChild);
      h.classList.add("has-mi");
    });
    // shared-node chips: kind icon in the coloured glyph cell
    scope.querySelectorAll(".chip:not([data-ui])").forEach((c) => {
      c.dataset.ui = "1";
      const g = c.querySelector(".glyph");
      const ic = g && icon(pick("kinds", chipKind(c)));
      if (ic) g.replaceChildren(ic);
    });
    scope.querySelectorAll(".mn-badge:not([data-ui])").forEach((b) => { b.dataset.ui = "1"; prependIcon(b, pick("extras", "mnemonic")); });
    scope.querySelectorAll(".supp:not([data-ui])").forEach((b) => { b.dataset.ui = "1"; prependIcon(b, pick("extras", "supplement")); });
    scope.querySelectorAll(".verify:not([data-ui])").forEach((b) => {
      b.dataset.ui = "1";
      const ic = icon(pick("extras", "verify"));
      if (!ic) return;
      if (b.childNodes.length === 1 && b.firstChild.nodeType === 3) b.firstChild.textContent = b.firstChild.textContent.replace(/^\s*⚠️?\s*/, "");
      b.insertBefore(ic, b.firstChild);
    });
    scope.querySelectorAll(".normal-line:not([data-ui])").forEach((p) => { p.dataset.ui = "1"; prependIcon(p, pick("extras", "normal")); });
    // legend chips: icon before the letter code
    scope.querySelectorAll(".lg:not([data-ui])").forEach((l) => {
      l.dataset.ui = "1";
      const b = l.querySelector("b");
      prependIcon(l, pick("types", typeOfCode(b && b.textContent)));
    });
    // topic title
    scope.querySelectorAll(".page.topic h1:not([data-ui])").forEach((h) => {
      h.dataset.ui = "1";
      const ic = icon(pick("topics", currentTopicId()));
      if (!ic) return;
      const tile = doc.createElement("span");
      tile.className = "h1-ico";
      tile.setAttribute("aria-hidden", "true");
      tile.appendChild(ic);
      h.insertBefore(tile, h.firstChild);
    });
    // master: system headings and topic cards
    scope.querySelectorAll(".system:not([data-ui])").forEach((s) => {
      s.dataset.ui = "1";
      const h = s.querySelector("h2");
      if (!h) return;
      const name = h.textContent.trim();
      const ic = icon(pick("systems", name));
      if (ic) {
        const tile = doc.createElement("span");
        tile.className = "sys-ico";
        tile.setAttribute("aria-hidden", "true");
        tile.appendChild(ic);
        h.insertBefore(tile, h.firstChild);
      }
      const n = s.querySelectorAll(".topic-flow > li").length;
      if (n) {
        const cnt = doc.createElement("span");
        cnt.className = "sys-count";
        cnt.textContent = n + (n === 1 ? " topic" : " topics");
        h.appendChild(cnt);
      }
    });
    scope.querySelectorAll(".tcard:not([data-ui])").forEach((c) => {
      c.dataset.ui = "1";
      const tt = c.querySelector(".tt");
      const ic = tt && icon(pick("topics", topicIdFromHref(tt.getAttribute("href"))));
      if (!ic) return;
      const head = doc.createElement("div");
      head.className = "tc-head";
      const tile = doc.createElement("span");
      tile.className = "tc-ico";
      tile.setAttribute("aria-hidden", "true");
      tile.appendChild(ic);
      c.insertBefore(head, tt);
      head.append(tile, tt);
    });
    // section headings
    scope.querySelectorAll("h2.sec:not([data-ui])").forEach((h) => {
      h.dataset.ui = "1";
      const t = h.textContent.trim();
      const map = SECTION_ICON[t.toLowerCase()];
      let name = map ? pick(map[0], map[1]) : null;
      if (!name && window.MF && window.MF.KINDS) {
        const k = Object.keys(window.MF.KINDS).find((x) => window.MF.KINDS[x].label === t);
        if (k) name = pick("kinds", k);
      }
      if (name) prependIcon(h, name);
    });
  }
  function mountSearchIcon() {
    const s = doc.getElementById("search");
    if (!s || !s.parentNode || (s.parentElement && s.parentElement.classList.contains("search-box"))) return;
    const ic = icon(pick("extras", "search"));
    if (!ic) return;
    const w = doc.createElement("span");
    w.className = "search-box";
    s.parentNode.insertBefore(w, s);
    w.append(ic, s);
  }

  // ======================================================== Motion
  const motionOK = () => !(mqReduce && mqReduce.matches) && root.dataset.motion !== "reduce" && "IntersectionObserver" in window;
  const syncMotionClass = () => root.classList.toggle("mf-motion", motionOK());
  syncMotionClass();

  let pageEl = null, io = null, safety = 0, anyEntry = false, drawn = new Set(), liveIdx = -1;
  const REVEAL = "#bubbles > .bubble, .pathways > .pathway, .topic-flow > .tcard";
  const bubbleList = () => Array.prototype.slice.call(doc.querySelectorAll("#bubbles > .bubble"));
  const arrowPaths = () => { const svg = doc.getElementById("arrows"); return svg ? Array.prototype.slice.call(svg.querySelectorAll("path.flowline")) : []; };
  const ends = (p, i) => {
    const num = (v) => { const m = v == null ? null : /(\d+)\s*$/.exec(v); return m ? +m[1] : null; };
    const to = num(p.getAttribute("data-to")), from = num(p.getAttribute("data-from"));
    return { from: from == null ? (to == null ? i : to - 1) : from, to: to == null ? i + 1 : to };
  };
  const keyOf = (e) => e.from + ">" + e.to;
  const byDom = (a, b) => (a.compareDocumentPosition(b) & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : 1);

  function onPage(page) {
    if (io) io.disconnect();
    io = null;
    clearTimeout(safety);
    pageEl = page;
    drawn = new Set();
    anyEntry = false;
    liveIdx = -1;
    syncMotionClass();
    if (!motionOK()) return;
    const view = doc.getElementById("view");
    if (view) {
      if (view.classList.contains("view-in")) { view.classList.remove("view-in"); void view.offsetWidth; }
      view.classList.add("view-in");
    }
    // a jump to a specific line (search hit, "used in" link): show the whole page at once
    if (location.hash.replace(/^#\/?/, "").split("/").filter(Boolean).length > 2) return;
    const items = Array.prototype.slice.call(page.querySelectorAll(REVEAL));
    if (!items.length) return;
    items.forEach((el) => el.classList.add("pre"));
    io = new IntersectionObserver(onIntersect, { threshold: [0, 0.02, 0.05, 0.1, 0.15], rootMargin: "0px 0px -8% 0px" });
    items.forEach((el) => io.observe(el));
    safety = setTimeout(safetyReveal, 1500);
  }
  function onIntersect(entries) {
    anyEntry = true;
    const due = entries.filter((e) => e.isIntersecting && (e.intersectionRatio >= 0.15 || e.intersectionRect.height >= 100) && e.target.classList.contains("pre"))
      .map((e) => e.target).sort(byDom);
    due.forEach((el, k) => { if (io) io.unobserve(el); reveal(el, Math.min(k, 6)); });
  }
  // Never leave information hidden: after 1.5 s, everything on or above the screen is shown (all of it if the
  // observer never reported).
  function safetyReveal() {
    if (!pageEl) return;
    const vh = window.innerHeight || root.clientHeight;
    let k = 0;
    Array.prototype.slice.call(pageEl.querySelectorAll(".pre")).forEach((el) => {
      if (anyEntry && el.getBoundingClientRect().top >= vh) return;
      if (io) io.unobserve(el);
      reveal(el, Math.min(k++, 6));
    });
  }
  function reveal(el, step) {
    if (!el.classList.contains("pre")) return;
    el.classList.remove("pre");
    if (!motionOK()) return;
    el.classList.add("rv");
    if (step) el.classList.add("rd" + step);
    if (!el.classList.contains("tcard")) markAccents(el);
    if (el.classList.contains("bubble")) setTimeout(() => drawInto(el), step * 45);
    setTimeout(() => clearReveal(el), step * 45 + 1100);
  }
  function markAccents(el) {
    Array.prototype.slice.call(el.querySelectorAll("mark.hy"), 0, 4).forEach((m, i) => { m.classList.add("sw"); if (i) m.classList.add("sw" + i); });
    Array.prototype.slice.call(el.querySelectorAll(".mn-k"), 0, 8).forEach((m, i) => { m.classList.add("cas"); if (i) m.classList.add("k" + i); });
  }
  function clearReveal(el) {
    el.classList.remove("rv", "rd1", "rd2", "rd3", "rd4", "rd5", "rd6");
    el.querySelectorAll(".sw").forEach((m) => m.classList.remove("sw", "sw1", "sw2", "sw3"));
    el.querySelectorAll(".cas").forEach((m) => m.classList.remove("cas", "k1", "k2", "k3", "k4", "k5", "k6", "k7"));
  }
  function revealAllNow() {
    clearTimeout(safety);
    if (io) io.disconnect();
    io = null;
    doc.querySelectorAll(".pre").forEach((el) => el.classList.remove("pre"));
    doc.querySelectorAll(".rv").forEach(clearReveal);
    arrowPaths().forEach((p, i) => {
      drawn.add(keyOf(ends(p, i)));
      p.classList.remove("await", "drawing", "run");
      p.style.removeProperty("--len");
    });
  }

  // Connector draw-in: the arrow into bubble N draws when bubble N appears; redraws (resize, zoom, font swap) stay static.
  function animatePath(p, key) {
    drawn.add(key);
    p.classList.remove("await");
    let len = 0;
    try { len = p.getTotalLength(); } catch (e) { len = 0; }
    if (!len || !motionOK()) return;
    p.style.setProperty("--len", len.toFixed(1));
    p.classList.add("drawing");
    const done = () => { p.classList.remove("drawing"); p.style.removeProperty("--len"); };
    p.addEventListener("animationend", done, { once: true });
    setTimeout(done, 900);
  }
  function drawInto(b) {
    const idx = bubbleList().indexOf(b);
    if (idx < 0) return;
    arrowPaths().forEach((p, i) => {
      const e = ends(p, i), key = keyOf(e);
      if (e.to === idx && !drawn.has(key)) animatePath(p, key);
    });
  }
  function syncArrows() {
    const paths = arrowPaths();
    if (!paths.length) return;
    const list = bubbleList(), moving = root.classList.contains("mf-motion");
    paths.forEach((p, i) => {
      const e = ends(p, i), key = keyOf(e);
      if (!moving || drawn.has(key)) return;
      const b = list[e.to];
      if (b && b.classList.contains("pre")) p.classList.add("await");
      else if (b && b.classList.contains("rv")) animatePath(p, key);
      else drawn.add(key);
    });
    applyLive(false);
  }

  // Flow on intent: the arrows into and out of the hovered / focused / tapped bubble.
  function applyLive(restart) {
    arrowPaths().forEach((p, i) => {
      const e = ends(p, i);
      const on = liveIdx >= 0 && (e.to === liveIdx || e.from === liveIdx);
      p.classList.toggle("live", on);
      if (!on) { p.classList.remove("run"); return; }
      if (restart && motionOK() && !p.classList.contains("drawing")) {
        p.classList.remove("run");
        void p.getBoundingClientRect();
        p.classList.add("run");
      }
    });
  }
  function setLive(idx) {
    if (idx === liveIdx) return;
    liveIdx = idx;
    applyLive(true);
  }
  const bubbleIndexOf = (node) => {
    const b = node && node.closest ? node.closest("#bubbles > .bubble") : null;
    return b ? bubbleList().indexOf(b) : -1;
  };
  let lastPointer = "mouse";
  doc.addEventListener("pointerdown", (e) => { lastPointer = e.pointerType || "mouse"; }, true);
  doc.addEventListener("pointerover", (e) => { if (e.pointerType === "mouse" || e.pointerType === "pen") setLive(bubbleIndexOf(e.target)); });
  doc.addEventListener("focusin", (e) => { const i = bubbleIndexOf(e.target); if (i >= 0) setLive(i); });
  doc.addEventListener("focusout", (e) => { if (bubbleIndexOf(e.relatedTarget) < 0 && lastPointer !== "touch") setLive(-1); });
  doc.addEventListener("click", (e) => {
    if (lastPointer !== "touch") return;
    const h = e.target.closest && e.target.closest("#bubbles > .bubble > header");
    if (!h) return;
    const i = bubbleIndexOf(h);
    setLive(i === liveIdx ? -1 : i);
  });

  // Play mode: each new card gets the badge pop, ink sweep and letter cascade (the player does its own slide-in).
  let cardObs = null;
  function watchPlayer() {
    new MutationObserver(() => {
      const card = doc.querySelector(".pl-ov .pl-card");
      if (!card || card === (cardObs && cardObs.card)) return;
      if (cardObs) cardObs.disconnect();
      cardObs = new MutationObserver(() => playCard(card));
      cardObs.card = card;
      cardObs.observe(card, { childList: true });
      playCard(card);
    }).observe(doc.body, { childList: true });
  }
  function playCard(card) {
    const n = card.firstElementChild;
    if (!n) return;
    n.classList.remove("pre", "rv", "rd1", "rd2", "rd3", "rd4", "rd5", "rd6");
    n.querySelectorAll(".pre").forEach((x) => x.classList.remove("pre"));
    if (!motionOK() || !(n.classList.contains("bubble") || n.classList.contains("pathway"))) return;
    clearReveal(n);
    void n.offsetWidth;
    n.classList.add("rv");
    markAccents(n);
    setTimeout(() => clearReveal(n), 1100);
  }

  // ======================================================== Phone top bar: slides away on scroll down, back on scroll up
  let lastY = 0, scrollTick = false;
  function onScroll() {
    if (scrollTick) return;
    scrollTick = true;
    requestAnimationFrame(() => {
      scrollTick = false;
      const tb = doc.querySelector(".topbar");
      if (!tb) return;
      const y = window.scrollY || root.scrollTop || 0;
      const res = doc.getElementById("results");
      const busy = doc.activeElement && doc.activeElement.id === "search" || (res && !res.hidden);
      if (!mqPhone || !mqPhone.matches || busy || y < tb.offsetHeight) { tb.classList.remove("tb-hidden"); lastY = y; return; }
      const d = y - lastY;
      if (Math.abs(d) < 8) return;
      tb.classList.toggle("tb-hidden", d > 0);
      lastY = y;
    });
  }

  // ======================================================== Wiring
  let viewObs = null;
  function handleRender() {
    const view = doc.getElementById("view");
    if (!view) return;
    enhance(view);
    const page = view.querySelector(".page");
    if (page && page !== pageEl) onPage(page);
    syncArrows();
    if (viewObs) viewObs.takeRecords(); // our own icon insertions need no second pass
  }
  function watchView() {
    const view = doc.getElementById("view");
    if (!view || viewObs) return;
    viewObs = new MutationObserver((recs) => {
      let page = false, arrows = false, added = false;
      recs.forEach((r) => {
        if (r.target === view) page = true;
        else if (r.target.closest && r.target.closest("#arrows, svg.arrows")) arrows = true;
        else if (r.addedNodes.length) added = true;
      });
      if (page || added) handleRender();
      else if (arrows) syncArrows();
    });
    viewObs.observe(view, { childList: true, subtree: true });
  }
  let redrawQueued = false;
  function redrawArrows() { // app.js redraws arrows and re-measures the top bar on resize
    if (redrawQueued) return;
    redrawQueued = true;
    requestAnimationFrame(() => { redrawQueued = false; window.dispatchEvent(new Event("resize")); });
  }

  doc.addEventListener("mf:render", handleRender);
  onMq(mqReduce, () => { syncMotionClass(); if (!motionOK()) revealAllNow(); });
  window.addEventListener("beforeprint", revealAllNow);
  window.addEventListener("scroll", onScroll, { passive: true });

  ready(() => {
    mountToggle();
    mountSearchIcon();
    watchView();
    watchPlayer();
    handleRender();
    if (doc.fonts) {
      if (doc.fonts.ready) doc.fonts.ready.then(redrawArrows);
      if (doc.fonts.addEventListener) doc.fonts.addEventListener("loadingdone", redrawArrows);
    }
  });
  // data/icons.js may load after this file: decorate whatever was rendered without icons once it arrives
  window.addEventListener("load", () => { mountSearchIcon(); handleRender(); });

  window.MFUI = { applyTheme: (t) => { store.set(TK, t === "light" || t === "dark" ? t : null); applyTheme(currentTheme()); }, theme: currentTheme, enhance, revealAll: revealAllNow };
})();
