/* Medicine Master Flowchart — rendering engine.
   Data files call MF.defineShared([...]) and MF.addTopic({...}); data/manifest.js calls MF.loadManifest([...]).
   No dependencies; works from file:// by injecting <script> tags.
   Safety: every data string is passed through esc() before it reaches markup; setHTML() is the only HTML sink. */
(function () {
  "use strict";

  // ---------- Vocabulary (single source for colours, labels, legend) ----------
  const TYPES = {
    definition:   { label: "Definition",              icon: "D",  cls: "c-def",  note: "Definitions, classifications, core concepts" },
    etiology:     { label: "Etiology & Risk factors", icon: "E",  cls: "c-eti",  note: "Causes, risk factors, classifications of cause" },
    patho:        { label: "Pathophysiology",         icon: "P",  cls: "c-pat",  note: "Mechanisms" },
    clinical:     { label: "Clinical features",       icon: "C",  cls: "c-cli",  note: "Symptoms, signs, presentations" },
    investigation:{ label: "Investigations",          icon: "Ix", cls: "c-inv",  note: "Laboratory and bedside tests" },
    imaging:      { label: "Imaging",                 icon: "Im", cls: "c-img",  note: "Imaging modalities and findings" },
    diagnosis:    { label: "Diagnosis",               icon: "Dx", cls: "c-dx",   note: "Criteria, essential findings, differentials" },
    emergency:    { label: "Emergency",               icon: "!",  cls: "c-emg",  note: "Emergencies, danger signs, urgent steps" },
    treatment:    { label: "Management & Treatment",  icon: "Rx", cls: "c-tx",   note: "Treatment and management" },
    complication: { label: "Complications",           icon: "Cx", cls: "c-cx",   note: "Complications and precautions" },
    pearl:        { label: "Exam pearls",             icon: "★",  cls: "c-cx",   note: "High-yield points and traps" },
    followup:     { label: "Follow-up & Special",     icon: "F",  cls: "c-fu",   note: "Monitoring, prevention, prognosis, special groups" },
    mcq:          { label: "Practice questions from notes",          icon: "Q",  cls: "c-cx",   note: "Practice questions in the notes" },
    shared:       { label: "Shared / Cross-reference",icon: "⇄",  cls: "c-sh",   note: "Shared nodes, cross-references, navigation" }
  };
  const ROLES = {
    init:    "Initial test",     screen: "Screening",     confirm: "Confirmatory",  gold: "Gold standard",
    ioc:     "Investigation of choice",   emerg:  "Emergency",     first:   "First-line",    second: "Second-line",
    rescue:  "Rescue",           def:    "Definitive",    ci:      "Contraindicated", monitor: "Monitoring",
    adjunct: "Adjunct",          prevent:"Prevention",    dx:      "Diagnostic",    danger: "Danger sign",
    hy:      "High-yield"
  };
  const ROLE_GROUP = { // drives badge colour family
    init: "inv", screen: "inv", confirm: "inv", gold: "inv", ioc: "inv", dx: "inv", monitor: "inv",
    first: "tx", second: "tx", rescue: "tx", def: "tx", adjunct: "tx", prevent: "tx",
    emerg: "emg", danger: "emg", ci: "emg", hy: "cx"
  };
  const KINDS = {
    lab:       { label: "Laboratory test",           cls: "k-lab" },
    imaging:   { label: "Imaging modality",          cls: "k-img" },
    bedside:   { label: "Bedside / functional test", cls: "k-lab" },
    procedure: { label: "Procedure / biopsy",        cls: "k-lab" },
    drug:      { label: "Drug / drug class",         cls: "k-drug" },
    protocol:  { label: "Management protocol",       cls: "k-prot" },
    emergency: { label: "Emergency protocol",        cls: "k-emg" },
    concept:   { label: "Shared concept / sign",     cls: "k-con" }
  };

  // ---------- Registry ----------
  const MF = (window.MF = { shared: {}, topics: {}, manifest: [], usage: {}, index: [], TYPES, ROLES, KINDS });
  MF.glossary = {};
  MF.defineGlossary = (g) => Object.assign(MF.glossary, g);
  MF.drugs = [];
  MF.defineDrugs = (list) => MF.drugs.push(...list);
  const xp = (raw) => (window.MFExpand ? window.MFExpand.text(raw, { glossary: MF.glossary, topic: MF._topic, marker: true }) : String(raw));
  MF.defineShared = (list) => list.forEach((n) => (MF.shared[n.id] = n));
  MF.addTopic = (t) => (MF.topics[t.id] = t);

  MF.build = (document.currentScript && document.currentScript.dataset.build) || String(Date.now());
  MF.loadManifest = function (list) {
    MF.manifest = list;
    if (window.MF_PRELOADED) return boot();
    const files = list.filter((m) => m.file && (m.status === "done" || m.status === "in-progress")).map((m) => m.file);
    (function next(i) {
      if (i >= files.length) return boot();
      const s = document.createElement("script");
      s.src = files[i] + "?v=" + MF.build;
      s.onload = () => next(i + 1);
      s.onerror = () => { console.error("Failed to load", files[i]); next(i + 1); };
      document.body.appendChild(s);
    })(0);
  };

  // ---------- Helpers ----------
  const $ = (sel, el = document) => el.querySelector(sel);
  const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  // Single HTML sink. Parses in the element's own context so SVG children stay SVG.
  function setHTML(el, html) {
    const r = document.createRange();
    r.selectNodeContents(el);
    el.replaceChildren(r.createContextualFragment(html));
  }
  // Inline markup on escaped text:
  //   **bold**   ==notes high-yield (pink)==   ++key term (teal)++   ->  ^sup^  ~sub~   {N:lab-id} = that lab's normal value
  const normalOf = (id) => { const n = MF.shared[id]; return n && n.normal ? n.normal + (n.normalStd ? " †" : "") : "—"; };
  const fmt = (s) => esc(xp(String(s).replace(/\{N:([\w-]+)\}/g, (m, id) => normalOf(id))))
    .replace(/([^]*)/g, ' <span class="ff">($1)</span>')
    .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
    .replace(/==(.+?)==/g, '<mark class="hy">$1</mark>')
    .replace(/\+\+(.+?)\+\+/g, '<span class="kw">$1</span>')
    .replace(/-&gt;/g, "→").replace(/&lt;-/g, "←")
    .replace(/\^(\S+?)\^/g, "<sup>$1</sup>")
    .replace(/~(\S+?)~/g, "<sub>$1</sub>");
  const ex = (s) => esc(xp(String(s == null ? "" : s))).replace(/\u0001([^\u0002]*)\u0002/g, ' <span class="ff">($1)</span>');
  const exPlain = (s) => (window.MFExpand ? window.MFExpand.text(String(s == null ? "" : s), { glossary: MF.glossary, topic: MF._topic }) : String(s));
  const KIND_ICON = { lab: "⚗", imaging: "◉", bedside: "✚", procedure: "✂", drug: "℞", protocol: "▶", emergency: "⚠", concept: "◆" };
  const nodeName = (n) => n.short || String(n.label).split(" (")[0];
  const asItem = (it) => (typeof it === "string" ? { t: it } : it);
  const asRow = (r) => (Array.isArray(r) ? { c: r } : r);
  const nodesOf = (it) => (it.node ? [].concat(it.node) : []);
  const plain = (s) => exPlain(String(s || "").replace(/\{N:([\w-]+)\}/g, "").replace(/\*\*|==|\+\+|\^|~/g, ""));
  const itemText = (it) => it.t || (it.table ? (it.table.caption || "") : "") || (it.mnemonic ? it.mnemonic + " " + (it.lines || []).map((l) => l.join(" ")).join(" ") : "") || (it.chain ? it.chain.join(" → ") : "") || it.h || "";

  function roleBadge(r) {
    if (!r) return "";
    return [].concat(r).map((x) => `<span class="role r-${ROLE_GROUP[x] || "sh"}" title="${esc(ROLES[x] || x)}">${esc(ROLES[x] || x)}</span>`).join("");
  }
  function chip(id, opts = {}) {
    const n = MF.shared[id];
    if (!n) return `<span class="chip k-missing" title="Missing shared node: ${esc(id)}">⚠ ${esc(id)}</span>`;
    const k = KINDS[n.kind] || KINDS.concept;
    const uses = (MF.usage[id] || []).length;
    const tu = sharedness(id);
    const norm = n.normal ? ` · Normal: ${exPlain(n.normal)}${n.normalStd ? " (standard reference, not in notes)" : ""}` : "";
    return `<a class="chip ${k.cls}" href="#/node/${esc(id)}" title="${esc(exPlain(n.label) + norm)} — shared by ${tu} topic(s), ${uses} link(s). Click to compare its role in every disease.">` +
      `<span class="glyph">${KIND_ICON[n.kind] || "◆"}</span><span class="clabel">${ex(opts.label || nodeName(n))}</span><span class="shr">⇄${tu}</span></a>`;
  }
  const tags = (it) => [
    it.role ? roleBadge(it.role) : "",
    ...nodesOf(it).map((n) => chip(n, { compact: true })),
    it.see ? `<a class="xref" href="#/topic/${esc(it.see)}">see ${ex(titleOf(it.see))} →</a>` : "",
    it.sup ? `<span class="supp" title="${esc(it.sup)}">SUPPLEMENT</span>` : "",
    it.verify ? `<span class="verify" title="${esc(it.verify)}">⚠ VERIFY</span>` : "",
    it.src ? `<span class="src">${esc(it.src)}</span>` : ""
  ].filter(Boolean).join(" ");
  // it.add = wording added to complete a terse or unclear note line; the note's own text stays exactly as printed.
  const ADD_SRC = "Standard textbook teaching (Davidson's / Boloor's level), added to complete the note — not page-checked against those books.";
  const addNote = (it) => (it.add ? `<div class="add-note"><span class="supp" title="${esc(it.addSrc || ADD_SRC)}">SUPPLEMENT</span> ${fmt(it.add)}<div class="add-src">${esc(it.addSrc || ADD_SRC)}</div></div>` : "");
  const notes = (it) => (it.verify ? `<div class="verify-note">⚠ ${fmt(it.verify)}</div>` : "") + (it.sup ? `<div class="supp-note">${fmt(it.sup)}</div>` : "") + addNote(it);

  function tableHTML(tb, anchor) {
    const head = tb.head ? `<thead><tr>${tb.head.map((h) => `<th>${fmt(h)}</th>`).join("")}</tr></thead>` : "";
    const body = tb.rows.map((raw, i) => {
      const r = asRow(raw);
      const emg = r.role && [].concat(r.role).some((x) => ROLE_GROUP[x] === "emg");
      const tg = tags(r);
      return `<tr id="${esc(anchor)}-r${i}" class="${r.hl ? "hl" : ""}${emg ? " emg" : ""}">${r.c.map((c, j) => `<td${tb.head && j > 0 ? ` data-h="${esc(plain(tb.head[j]))}"` : ""}>${fmt(c)}${j === 0 && tg ? `<div class="ctags">${tg}</div>` : ""}</td>`).join("")}</tr>`;
    }).join("");
    return `<div class="mini-wrap${tb.head && tb.head.length > 2 ? " stackable" : ""}">${tb.caption ? `<div class="mini-cap">${fmt(tb.caption)}</div>` : ""}<table class="mini${tb.key ? " key" : ""}">${head}<tbody>${body}</tbody></table></div>`;
  }
  function itemHTML(raw, anchor) {
    const it = asItem(raw);
    const id = esc(anchor);
    const tg = tags(it);
    if (it.h) return `<li id="${id}" class="li-h">${fmt(it.h)}${tg ? " " + tg : ""}</li>`;
    if (it.table) return `<li id="${id}" class="li-block">${tableHTML(it.table, anchor)}${tg ? `<div class="ctags">${tg}</div>` : ""}${notes(it)}</li>`;
    if (it.mnemonic) return `<li id="${id}" class="li-block"><div class="mn"><div class="mn-h"><span class="mn-badge">MNEMONIC</span> <b>${fmt(it.mnemonic)}</b>${it.t ? ` — ${fmt(it.t)}` : ""}</div>` +
      `${it.lines ? `<div class="mn-lines">${it.lines.map((l) => `<div class="mn-row"><span class="mn-k">${fmt(l[0])}</span><span class="mn-v">${fmt(l[1])}</span></div>`).join("")}</div>` : ""}</div>${addNote(it)}</li>`;
    if (it.chain) return `<li id="${id}" class="li-block"><div class="chain">${it.chain.map((c) => `<span class="ch">${fmt(c)}</span>`).join('<span class="cha">→</span>')}</div>${tg ? `<div class="ctags">${tg}</div>` : ""}${notes(it)}</li>`;
    const sub = it.sub && it.sub.length ? `<ul>${it.sub.map((s, i) => itemHTML(s, anchor + "-" + i)).join("")}</ul>` : "";
    const emg = it.role && [].concat(it.role).some((r) => ROLE_GROUP[r] === "emg");
    return `<li id="${id}"${emg ? ' class="li-emg"' : ""}><span class="txt">${fmt(it.t || "")}</span>${tg ? " " + tg : ""}${notes(it)}${sub}</li>`;
  }
  const titleOf = (id) => (MF.topics[id] || MF.manifest.find((x) => x.id === id) || { title: id }).title;

  // ---------- Usage + search index ----------
  // Anchors produced here must match the ids rendered by itemHTML / tableHTML / stepsHTML.
  function walkItems(items, fn, path) {
    (items || []).forEach((raw, i) => {
      const it = asItem(raw);
      const p = path + "-" + i;
      fn(it, p);
      if (it.table) it.table.rows.forEach((r, k) => { const row = asRow(r); fn(Object.assign({}, row, { t: row.c.join(" · ") }), p + "-r" + k); });
      if (it.sub) walkItems(it.sub, fn, p);
    });
  }
  function walkSteps(steps, fn, path) {
    (steps || []).forEach((st, i) => {
      const p = path + "-" + i;
      fn(st, p);
      (st.items || []).forEach((x, k) => walkItems([x], fn, p + "-i" + k));
      (st.branches || []).forEach((b, j) => walkSteps(b.steps, fn, p + "-b" + j));
    });
  }
  function buildIndexes() {
    MF.usage = {}; MF.index = [];
    const use = (id, rec) => (MF.usage[id] = MF.usage[id] || []).push(rec);
    const record = (t, where) => (it, anchor) => {
      const txt = itemText(it) || it.decision || "";
      nodesOf(it).forEach((n) => use(n, { topic: t.id, anchor, role: it.role, why: it.why || txt, where }));
      if (txt) MF.index.push({ text: plain(txt) + " " + plain(it.why), topic: t.id, anchor, where, label: plain(txt) });
    };
    orderedTopics().forEach((t) => {
      MF.index.push({ text: t.title + " " + (t.aka || []).join(" ") + " " + plain(t.oneLine), topic: t.id, anchor: "", where: "Topic", label: t.title });
      (t.bubbles || []).forEach((b, bi) => {
        const where = b.title || (TYPES[b.type] || TYPES.shared).label;
        walkItems(b.items, record(t, where), `b${bi}`);
        walkSteps(b.steps, record(t, where + " (flowchart)"), `b${bi}s`);
      });
      (t.pathways || []).forEach((pw, pi) => {
        MF.index.push({ text: pw.title, topic: t.id, anchor: `pw${pi}`, where: "Pathway", label: pw.title });
        walkSteps(pw.steps, record(t, "Pathway: " + pw.title), `pw${pi}`);
      });
    });
    Object.values(MF.shared).forEach((n) => MF.index.push({ text: n.label + " " + (n.glyph || "") + " " + plain(n.desc), node: n.id, where: "Shared node", label: n.label }));
  }
  const orderedTopics = () => MF.manifest.map((m) => MF.topics[m.id]).filter(Boolean);
  const sharedness = (id) => new Set((MF.usage[id] || []).map((u) => u.topic)).size;
  function topNodes(t, max) {
    const seen = new Map();
    Object.entries(MF.usage).forEach(([id, uses]) => uses.forEach((u) => { if (u.topic === t.id) seen.set(id, (seen.get(id) || 0) + 1); }));
    return [...seen.entries()].sort((a, b) => sharedness(b[0]) - sharedness(a[0]) || b[1] - a[1]).slice(0, max).map((x) => x[0]);
  }

  // ---------- Views ----------
  const view = () => $("#view");
  const legendStrip = () =>
    `<div class="legend-strip">${["definition","etiology","patho","clinical","investigation","imaging","diagnosis","emergency","treatment","complication","followup","shared"]
      .map((k) => `<span class="lg ${TYPES[k].cls}"><b>${TYPES[k].icon}</b> ${TYPES[k].label}</span>`).join("")}<a href="#/legend">full legend →</a></div>`;

  function renderMaster() {
    MF._topic = null;
    const systems = [];
    MF.manifest.filter((m) => m.status !== "skipped").forEach((m) => { let s = systems.find((x) => x.name === m.system); if (!s) systems.push((s = { name: m.system, items: [] })); s.items.push(m); });
    const done = MF.manifest.filter((m) => m.status === "done").length;
    const inScope = MF.manifest.filter((m) => m.status !== "skipped").length;
    setHTML(view(), `
      <section class="page">
        <h1>Master chart</h1>
        <p class="lede">${done} of ${inScope} exam-scope topics charted, in book order, grouped by system. Grey-bordered ⇄ chips are <b>shared nodes</b>: one investigation, drug or protocol used by several diseases. Click a chip to compare its role disease by disease.</p>
        ${legendStrip()}
        <div class="systems">
        ${systems.map((s) => `
          <div class="system">
            <h2>${esc(s.name)}</h2>
            <ol class="topic-flow">
              ${s.items.map((m) => {
                const t = MF.topics[m.id];
                const nodes = t ? topNodes(t, 8) : [];
                return `<li class="tcard st-${esc(m.status)}">
                  ${t ? `<a class="tt" href="#/topic/${esc(m.id)}">${ex(m.title)}</a>` : `<span class="tt">${ex(m.title)}</span>`}
                  <span class="meta">#${esc(m.no ?? "")} · PDF p.${m.pages ? m.pages.join("–") : "?"} · <span class="status">${esc(m.status)}</span></span>
                  ${t && t.oneLine ? `<div class="one">${fmt(t.oneLine)}</div>` : ""}
                  ${nodes.length ? `<div class="chips">${nodes.map((n) => chip(n)).join("")}</div>` : ""}
                </li>`;
              }).join("")}
            </ol>
          </div>`).join("")}
        </div>
      </section>`);
    window.scrollTo(0, 0);
  }

  function renderTopic(id, hl) {
    const t = MF.topics[id];
    MF._topic = id;
    if (!t) return setHTML(view(), `<section class="page"><h1>Not charted yet</h1><p>“${ex(titleOf(id))}” has no chart yet. <a href="#/progress">See progress</a> · <a href="#/">Back to master</a></p></section>`);
    const m = MF.manifest.find((x) => x.id === id) || {};
    const idx = MF.manifest.findIndex((x) => x.id === id);
    const prev = MF.manifest.slice(0, idx).reverse().find((x) => MF.topics[x.id]);
    const next = MF.manifest.slice(idx + 1).find((x) => MF.topics[x.id]);
    const nodes = topNodes(t, 999);
    setHTML(view(), `
      <section class="page topic">
        <div class="crumbs"><a href="#/">Master</a> › ${esc(m.system || "")} › <b>${ex(t.title)}</b></div>
        <div class="topic-head">
          <div>
            <h1>${ex(t.title)}</h1>
            <div class="meta">Book #${esc(m.no ?? "")} · Source: PrepLadder notes, PDF p.${m.pages ? m.pages.join("–") : "?"} · status: ${esc(m.status || "")}</div>
            ${t.oneLine ? `<p class="lede">${fmt(t.oneLine)}</p>` : ""}
          </div>
          <div class="pn">${prev ? `<a href="#/topic/${esc(prev.id)}">← ${esc(prev.title)}</a>` : ""}${next ? `<a href="#/topic/${esc(next.id)}">${esc(next.title)} →</a>` : ""}</div>
        </div>
        ${t.flow ? `<div class="spine-flow" aria-label="Clinical sequence">${t.flow.map((s) => `<span class="sf">${fmt(s)}</span>`).join('<span class="sfa">→</span>')}</div>` : ""}
        ${legendStrip()}
        <div class="bubbles" id="bubbles">
          ${(t.bubbles || []).map((b, bi) => {
            const ty = TYPES[b.type] || TYPES.shared;
            return `<article class="bubble ${ty.cls}${b.wide || b.steps ? " wide" : ""}${b.steps ? " has-flow" : ""}" id="b${bi}">
              <header><span class="num">${bi + 1}</span><span class="ico">${ty.icon}</span><span class="bt">${ex(b.title || ty.label)}</span><span class="tylabel">${esc(ty.label.toUpperCase())}</span></header>
              ${b.items && b.items.length ? `<ul>${b.items.map((it, i) => itemHTML(it, `b${bi}-${i}`)).join("")}</ul>` : ""}
              ${b.note ? `<p class="pwnote">${fmt(b.note)}</p>` : ""}
              ${b.steps ? `<div class="bflow">${stepsHTML(b.steps, `b${bi}s`)}</div>` : ""}
              ${b.src ? `<footer class="bsrc">Source: ${esc(b.src)}</footer>` : ""}
            </article>`;
          }).join("")}
          <svg class="arrows" id="arrows" aria-hidden="true"></svg>
        </div>
        ${(t.pathways || []).length ? `<h2 class="sec">Clinical pathways</h2><div class="pathways">${t.pathways.map((pw, pi) => pathwayHTML(pw, pi)).join("")}</div>` : ""}
        ${nodes.length ? `<h2 class="sec">Shared nodes used in this topic</h2><div class="chips big">${nodes.map((n) => chip(n, { label: MF.shared[n] && MF.shared[n].label })).join("")}</div>` : ""}
        ${t.related && t.related.length ? `<h2 class="sec">Related topics</h2><div class="chips">${t.related.map((r) => `<a class="xref" href="#/topic/${esc(r)}">${ex(titleOf(r))} →</a>`).join(" ")}</div>` : ""}
        ${t.sources ? `<h2 class="sec">Sources for this topic</h2><ul class="srclist">${t.sources.map((s) => `<li>${fmt(s)}</li>`).join("")}</ul>` : ""}
      </section>`);
    requestAnimationFrame(() => { drawArrows(); if (hl) flash(hl); else window.scrollTo(0, 0); });
  }

  function pathwayHTML(pw, pi) {
    const ty = TYPES[pw.type] || TYPES.treatment;
    return `<article class="pathway ${ty.cls}" id="pw${pi}">
      <header><span class="ico">${ty.icon}</span> ${ex(pw.title)}<span class="tylabel">${esc(ty.label.toUpperCase())} PATHWAY</span></header>
      ${pw.note ? `<p class="pwnote">${fmt(pw.note)}</p>` : ""}
      ${stepsHTML(pw.steps, `pw${pi}`)}
      ${pw.src ? `<footer class="bsrc">Source: ${esc(pw.src)}</footer>` : ""}
    </article>`;
  }
  function stepsHTML(steps, path) {
    return `<ol class="steps">${(steps || []).map((st, i) => {
      const a = `${path}-${i}`;
      const ty = TYPES[st.type] || null;
      if (st.branches) {
        return `<li class="step decision" id="${a}"><div class="dbox">${fmt(st.decision || "")}</div>
          <div class="branches">${st.branches.map((b, j) => `<div class="branch"><div class="blabel">${fmt(b.label)}</div>${stepsHTML(b.steps, `${a}-b${j}`)}</div>`).join("")}</div></li>`;
      }
      if (st.mnemonic || st.table) return `<li class="step step-block" id="${a}"><ul class="block-ul">${itemHTML(st, a + "-m")}</ul></li>`;
      return `<li class="step ${ty ? ty.cls : ""}" id="${a}"><div class="sbox">
        ${ty ? `<span class="stype" title="${esc(ty.label)}">${ty.icon}</span>` : ""}${st.chain ? `<div class="chain">${st.chain.map((c) => `<span class="ch">${fmt(c)}</span>`).join('<span class="cha">→</span>')}</div>` : `<span class="txt">${fmt(st.t || "")}</span>`} ${roleBadge(st.role)} ${nodesOf(st).map((n) => chip(n, { compact: true })).join("")}
        ${addNote(st)}${st.items ? `<ul>${st.items.map((x, k) => itemHTML(x, `${a}-i${k}-0`)).join("")}</ul>` : ""}
      </div></li>`;
    }).join("")}</ol>`;
  }

  // ---------- Flow arrows between consecutive bubbles (1 → 2 → 3 …) ----------
  // Grid layout: elbow arrows routed through the grid gutters.
  // Free layout (app/layout.js puts .mf-free on #bubbles): a smooth cubic Bézier between the closest facing sides.
  const r1 = (v) => Math.round(v * 10) / 10;
  function elbowPaths(boxes) {
    const paths = [];
    for (let i = 0; i < boxes.length - 1; i++) {
      const a = boxes[i], b = boxes[i + 1];
      if (Math.abs(a.y - b.y) < 4 && b.x > a.x) { // same row: straight right
        const y = a.y + 21; paths.push(`M${a.x + a.w} ${y} L${b.x - 2} ${y}`);
      } else { // next row: down, across the gutter, down
        const rowBottom = Math.max(...boxes.filter((c) => Math.abs(c.y - a.y) < 4).map((c) => c.y + c.h));
        const gy = (rowBottom + b.y) / 2, ax = a.x + a.w / 2, bx = b.x + b.w / 2;
        paths.push(`M${ax} ${a.y + a.h} L${ax} ${gy} L${bx} ${gy} L${bx} ${b.y - 2}`);
      }
    }
    return paths;
  }
  // Side midpoints of a box with their outward normals.
  const sides = (r) => [
    { x: r.x + r.w / 2, y: r.y, nx: 0, ny: -1 },       // top
    { x: r.x + r.w, y: r.y + r.h / 2, nx: 1, ny: 0 },  // right
    { x: r.x + r.w / 2, y: r.y + r.h, nx: 0, ny: 1 },  // bottom
    { x: r.x, y: r.y + r.h / 2, nx: -1, ny: 0 }        // left
  ];
  const within = (p, r) => p.x > r.x + 1 && p.x < r.x + r.w - 1 && p.y > r.y + 1 && p.y < r.y + r.h - 1;
  const bezAt = (p, c1, c2, q, t) => {
    const u = 1 - t, a = u * u * u, b = 3 * u * u * t, c = 3 * u * t * t, d = t * t * t;
    return { x: a * p.x + b * c1.x + c * c2.x + d * q.x, y: a * p.y + b * c1.y + c * c2.y + d * q.y };
  };
  // Best curve from box a to box b: shortest pair of side midpoints that face each other, control points
  // perpendicular to those sides, penalised when the curve would run under the source (most), the target or
  // another bubble. opts.avoid = side of a where the previous arrow arrives, so in and out do not share a point.
  function curveBetween(a, b, opts) {
    const o = opts || {}, others = o.others || [];
    let best = null;
    sides(a).forEach((p, ia) => sides(b).forEach((q, ib) => {
      const dx = q.x - p.x, dy = q.y - p.y, dist = Math.hypot(dx, dy) || 1;
      const k = Math.max(26, Math.min(170, dist * 0.45));
      const c1 = { x: p.x + p.nx * k, y: p.y + p.ny * k }, c2 = { x: q.x + q.nx * k, y: q.y + q.ny * k };
      let cost = dist + (ia === o.avoid ? 250 : 0);
      if (dx * p.nx + dy * p.ny <= 0) cost += 4000;   // target is behind the side it would leave from
      if (dx * q.nx + dy * q.ny >= 0) cost += 4000;   // source is behind the side it would enter
      for (let i = 1; i < 20; i++) {
        const s = bezAt(p, c1, c2, q, i / 20);
        if (within(s, a)) cost += 600;
        if (within(s, b)) cost += 300;
        for (let j = 0; j < others.length; j++) if (within(s, others[j])) { cost += 25; break; }
      }
      if (!best || cost < best.cost) best = { cost, p, q, c1, c2, ia, ib };
    }));
    let { p, c1 } = best;
    const { q, c2, ia, ib } = best;
    if (ia === o.avoid) { // still the best side: start beside the incoming arrow head, not on it
      const t = { x: -p.ny * 18, y: p.nx * 18 };
      p = { x: p.x + t.x, y: p.y + t.y }; c1 = { x: c1.x + t.x, y: c1.y + t.y };
    }
    const e = { x: q.x + q.nx * 2, y: q.y + q.ny * 2 }; // stop just outside so the head shows
    return { d: `M${r1(p.x)} ${r1(p.y)} C${r1(c1.x)} ${r1(c1.y)}, ${r1(c2.x)} ${r1(c2.y)}, ${r1(e.x)} ${r1(e.y)}`, from: p, to: q, fromSide: ia, toSide: ib, cost: best.cost };
  }
  const SVGNS = "http://www.w3.org/2000/svg";
  const svgEl = (tag, attrs) => {
    const e = document.createElementNS(SVGNS, tag);
    Object.keys(attrs).forEach((k) => e.setAttribute(k, attrs[k]));
    return e;
  };
  function drawArrows() {
    const wrap = $("#bubbles"), svg = $("#arrows");
    if (!wrap || !svg) return;
    const z = currentZoom(), free = wrap.classList.contains("mf-free");
    svg.setAttribute("width", 0); svg.setAttribute("height", 0); // measure the bubbles, not last time's overlay
    const W = wrap.clientWidth, H = wrap.scrollHeight;
    svg.setAttribute("width", W); svg.setAttribute("height", H); svg.setAttribute("viewBox", `0 0 ${W} ${H}`);
    const base = wrap.getBoundingClientRect();
    const boxes = [...wrap.querySelectorAll(".bubble")].map((el) => {
      const r = el.getBoundingClientRect();
      return { x: (r.left - base.left) / z, y: (r.top - base.top) / z, w: r.width / z, h: r.height / z };
    });
    const ds = [];
    if (free) {
      let arrive = -1;
      for (let i = 0; i < boxes.length - 1; i++) {
        const c = curveBetween(boxes[i], boxes[i + 1], { avoid: arrive, others: boxes.filter((_, k) => k !== i && k !== i + 1) });
        ds.push(c.d);
        arrive = c.toSide;
      }
    } else ds.push(...elbowPaths(boxes));
    svg.dataset.mode = free ? "free" : "grid";
    // Paths are reused between frames so a drag redraw does not restart the theme's dash animation.
    if (!svg.querySelector("marker#ah")) {
      const marker = svgEl("marker", { id: "ah", viewBox: "0 0 10 10", refX: "9", refY: "5", markerWidth: "7", markerHeight: "7", orient: "auto-start-reverse" });
      marker.appendChild(svgEl("path", { d: "M0 0 L10 5 L0 10 z", class: "ahead" }));
      const defs = svgEl("defs", {});
      defs.appendChild(marker);
      svg.replaceChildren(defs);
    }
    const lines = [...svg.querySelectorAll("path.flowline")];
    while (lines.length < ds.length) lines.push(svg.appendChild(svgEl("path", { class: "flowline", "marker-end": "url(#ah)" })));
    while (lines.length > ds.length) lines.pop().remove();
    ds.forEach((d, i) => { if (lines[i].getAttribute("d") !== d) lines[i].setAttribute("d", d); });
  }
  // One redraw per frame at most, whoever asks (resize, zoom, ResizeObserver, layout.js drags).
  let arrowFrame = 0, bubbleRO = null;
  function scheduleArrows() {
    if (arrowFrame) return;
    arrowFrame = requestAnimationFrame(() => { arrowFrame = 0; drawArrows(); });
  }
  // Content that changes size after render (fonts loading, images, a resized window) keeps the arrows attached.
  function watchBubbles() {
    if (bubbleRO) bubbleRO.disconnect();
    bubbleRO = null;
    const wrap = $("#bubbles");
    if (!wrap || !window.ResizeObserver) return;
    bubbleRO = new ResizeObserver(scheduleArrows);
    bubbleRO.observe(wrap);
    wrap.querySelectorAll(".bubble").forEach((b) => bubbleRO.observe(b));
  }
  MF.drawArrows = drawArrows;
  MF.scheduleArrows = scheduleArrows;
  MF.arrowGeometry = { curveBetween, elbowPaths };

  function renderNode(id) {
    MF._topic = null;
    const n = MF.shared[id];
    if (!n) return setHTML(view(), `<section class="page"><h1>Unknown shared node</h1><p>${esc(id)}</p></section>`);
    const byTopic = {};
    (MF.usage[id] || []).forEach((u) => (byTopic[u.topic] = byTopic[u.topic] || []).push(u));
    setHTML(view(), `
      <section class="page">
        <div class="crumbs"><a href="#/shared">Shared nodes</a> › <b>${ex(n.label)}</b></div>
        <h1>${chip(id, { label: n.label })}</h1>
        <div class="meta">${esc((KINDS[n.kind] || {}).label || n.kind)} · used in ${Object.keys(byTopic).length} topic(s)</div>
        ${n.normal ? `<p class="normal-line"><b>Normal:</b> ${esc(n.normal)}${n.normalStd ? ' <span class="std">† standard reference range — not printed in the notes</span>' : ""}</p>` : ""}
        ${n.desc ? `<p class="lede">${fmt(n.desc)}</p>` : ""}
        <p class="caution">Same test or drug ≠ same indication. Each row gives the <b>disease-specific</b> role and reason — read them separately; nothing here is interchangeable across diseases.</p>
        <table class="usage"><thead><tr><th>Topic</th><th>Role</th><th>Disease-specific indication / finding</th><th>Where</th></tr></thead><tbody>
        ${Object.entries(byTopic).map(([tid, list]) => list.map((u, i) => `<tr>
            ${i === 0 ? `<td rowspan="${list.length}"><a href="#/topic/${esc(tid)}">${ex(titleOf(tid))}</a></td>` : ""}
            <td>${roleBadge(u.role) || "—"}</td><td>${fmt(u.why || "")}</td>
            <td><a href="#/topic/${esc(tid)}/${esc(u.anchor)}">${ex(u.where)} ↗</a></td></tr>`).join("")).join("")}
        </tbody></table>
      </section>`);
    window.scrollTo(0, 0);
  }

  function renderShared() {
    const groups = {};
    Object.values(MF.shared).forEach((n) => (groups[n.kind] = groups[n.kind] || []).push(n));
    setHTML(view(), `<section class="page"><h1>Shared nodes</h1>
      <p class="lede">Reusable investigations, imaging, drugs and protocols. The number after ⇄ is how many topics link to the node; most widely shared first.</p>
      ${Object.keys(KINDS).filter((k) => groups[k]).map((k) => `<h2 class="sec">${esc(KINDS[k].label)}</h2><div class="chips big">${groups[k].sort((a, b) => sharedness(b.id) - sharedness(a.id) || a.label.localeCompare(b.label)).map((n) => chip(n.id, { label: n.label })).join("")}</div>`).join("")}
    </section>`);
    window.scrollTo(0, 0);
  }

  // Bipartite map: topics (left) and shared nodes linked by at least 2 topics (right).
  function renderConnections() {
    const topics = orderedTopics();
    const nodes = Object.keys(MF.usage).filter((id) => sharedness(id) >= 2 && MF.shared[id])
      .sort((a, b) => (MF.shared[a].kind || "").localeCompare(MF.shared[b].kind || "") || sharedness(b) - sharedness(a));
    const rowH = 26, top = 30, W = 1100, lx = 10, rx = 760, lw = 320;
    const H = top + Math.max(topics.length, nodes.length, 1) * rowH + 20;
    const ty = (i) => top + i * rowH;
    const kcls = (id) => (KINDS[MF.shared[id].kind] || {}).cls || "";
    let edges = "";
    nodes.forEach((id, j) => {
      const ts = new Set(MF.usage[id].map((u) => u.topic));
      topics.forEach((t, i) => {
        if (!ts.has(t.id)) return;
        const y1 = ty(i) + 10, y2 = ty(j) + 10, x1 = lx + lw, x2 = rx;
        edges += `<path class="edge ${kcls(id)}" data-t="${esc(t.id)}" data-n="${esc(id)}" d="M${x1} ${y1} C${x1 + 180} ${y1}, ${x2 - 180} ${y2}, ${x2} ${y2}"/>`;
      });
    });
    setHTML(view(), `<section class="page"><h1>Connections map</h1>
      <p class="lede">Every charted topic (left) linked to the shared nodes used by two or more topics (right). Hover either side to highlight its links; click to open.</p>
      ${nodes.length ? "" : `<p class="caution">No node is shared by two topics yet — this map fills in as topics are charted.</p>`}
      <div class="mapwrap"><svg class="map" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">
        <text x="${lx}" y="16" class="mh">TOPICS</text><text x="${rx}" y="16" class="mh">SHARED NODES (⇄ = topics)</text>
        ${edges}
        ${topics.map((t, i) => `<a href="#/topic/${esc(t.id)}"><g class="mt" data-t="${esc(t.id)}"><rect x="${lx}" y="${ty(i)}" width="${lw}" height="20" rx="5"/><text x="${lx + 8}" y="${ty(i) + 14}">${esc(exPlain(t.title))}</text></g></a>`).join("")}
        ${nodes.map((id, j) => `<a href="#/node/${esc(id)}"><g class="mn ${kcls(id)}" data-n="${esc(id)}"><rect x="${rx}" y="${ty(j)}" width="330" height="20" rx="10"/><text x="${rx + 10}" y="${ty(j) + 14}">${esc(exPlain(MF.shared[id].label))}  ⇄${sharedness(id)}</text></g></a>`).join("")}
      </svg></div></section>`);
    const svg = $(".map");
    svg.addEventListener("mouseover", (e) => {
      const g = e.target.closest("g[data-t],g[data-n]");
      svg.classList.toggle("focus", !!g);
      svg.querySelectorAll(".on").forEach((x) => x.classList.remove("on"));
      if (!g) return;
      g.classList.add("on");
      const sel = g.dataset.t ? `path[data-t="${g.dataset.t}"]` : `path[data-n="${g.dataset.n}"]`;
      svg.querySelectorAll(sel).forEach((p) => {
        p.classList.add("on");
        svg.querySelector(`g[data-n="${p.dataset.n}"]`).classList.add("on");
        svg.querySelector(`g[data-t="${p.dataset.t}"]`).classList.add("on");
      });
    });
    window.scrollTo(0, 0);
  }

  function renderLegend() {
    setHTML(view(), `<section class="page"><h1>Legend</h1>
      <p class="lede">Colour is never the only signal: every bubble also carries an icon letter and an UPPERCASE type label, so the chart still reads in greyscale and with colour-vision deficiency.</p>
      <h2 class="sec">Bubble colours</h2>
      <table class="usage"><tbody>${Object.values(TYPES).map((t) => `<tr><td><span class="lg ${t.cls}"><b>${t.icon}</b> ${esc(t.label)}</span></td><td>${esc(t.note)}</td></tr>`).join("")}</tbody></table>
      <h2 class="sec">Role badges (text labels on investigations and treatments)</h2>
      <div class="chips">${Object.keys(ROLES).map((r) => roleBadge(r)).join(" ")}</div>
      <p>Teal family = diagnostic role · Dark-green family = treatment line · Red = emergency, danger sign or contraindication · Yellow = high-yield.</p>
      <h2 class="sec">Shared-node chips</h2>
      <p>Each shared investigation, drug or protocol has <b>one fixed chip</b> (same glyph, colour family and pill shape everywhere it appears). The ⇄ number counts the topics linked to it. Click a chip for its comparison table.</p>
      <div class="chips big">${Object.values(KINDS).map((k) => `<span class="chip ${k.cls}"><span class="glyph">◆</span><span class="clabel">${esc(k.label)}</span></span>`).join("")}</div>
      <h2 class="sec">Text marks and connectors</h2>
      <ul class="srclist">
        <li><mark class="hy">Pink highlight</mark> = text highlighted as high-yield in the PrepLadder notes.</li>
        <li><strong>Bold</strong> = key value, threshold or drug of choice. <span class="kw">Teal term</span> = key word to anchor recall.</li>
        <li><span class="mn-badge">MNEMONIC</span> dashed purple box = memory aid written for this chart (not from the notes).</li>
        <li>Small coloured tables inside bubbles = compare-at-a-glance; a <span style="background:#fff4c2">yellow row</span> is the one to remember.</li>
        <li><b>†</b> after a normal value = standard reference range not printed in the notes; values without † are from the notes (page given).</li>
        <li>Coloured chain boxes joined by → = mechanism or sequence in one line.</li>
        <li>Grey arrows between numbered bubbles = reading order of the clinical approach (1 → 2 → 3 …).</li>
        <li>Pathway boxes joined by ↓ = sequence; a dashed diamond-style box splits into side-by-side branches (decision point).</li>
        <li>Red-edged list items = emergency, danger sign or contraindication.</li>
        <li><span class="supp">SUPPLEMENT</span> = not in the primary notes; the source is shown beneath it. <span class="verify">⚠ VERIFY</span> = unclear in the source, conflicting or possibly outdated — check before relying on it.</li>
        <li>Grey page tags (e.g. p.242) = PDF page of the notes the point came from.</li>
      </ul></section>`);
    window.scrollTo(0, 0);
  }

  function renderProgress() {
    const counts = {};
    MF.manifest.forEach((m) => (counts[m.status] = (counts[m.status] || 0) + 1));
    setHTML(view(), `<section class="page"><h1>Progress</h1>
      <p class="lede">Done ${counts.done || 0} · In progress ${counts["in-progress"] || 0} · Pending ${counts.pending || 0} · Skipped (out of scope) ${counts.skipped || 0}</p>
      <table class="usage"><thead><tr><th>#</th><th>Topic</th><th>System</th><th>PDF pages</th><th>Status</th></tr></thead><tbody>
      ${MF.manifest.map((m) => `<tr class="st-${esc(m.status)}"><td>${esc(m.no ?? "")}</td><td>${MF.topics[m.id] ? `<a href="#/topic/${esc(m.id)}">${ex(m.title)}</a>` : ex(m.title)}</td><td>${esc(m.system)}</td><td>${m.pages ? m.pages.join("–") : "?"}</td><td><span class="status">${esc(m.status)}</span></td></tr>`).join("")}
      </tbody></table></section>`);
    window.scrollTo(0, 0);
  }

  // ---------- Search ----------
  function search(q) {
    const box = $("#results");
    q = q.trim().toLowerCase();
    if (q.length < 2) { box.hidden = true; return; }
    const terms = q.split(/\s+/);
    const hits = MF.index.filter((e) => terms.every((w) => e.text.toLowerCase().includes(w))).slice(0, 60);
    box.hidden = false;
    setHTML(box, hits.length ? hits.map((h) => {
      const href = h.node ? `#/node/${h.node}` : `#/topic/${h.topic}${h.anchor ? "/" + h.anchor : ""}`;
      const where = h.node ? "Shared node" : `${titleOf(h.topic)} › ${h.where}`;
      return `<a href="${esc(href)}"><span class="rw">${ex(where)}</span><span class="rl">${ex(h.label.slice(0, 200))}</span></a>`;
    }).join("") : `<div class="none">No matches for “${esc(q)}”.</div>`);
  }
  function flash(anchor) {
    const el = document.getElementById(anchor);
    if (!el) return;
    el.scrollIntoView({ block: "center" });
    el.classList.add("flash");
    setTimeout(() => el.classList.remove("flash"), 2400);
  }

  // ---------- Zoom ----------
  const ZK = "mf-zoom";
  const currentZoom = () => parseFloat(view().style.zoom || 1) || 1;
  MF.currentZoom = currentZoom;
  // A zoomed page keeps the screen's width: its own px width is scaled by the zoom in every engine
  // (Chrome's standard zoom and Safari's legacy zoom alike), so text re-wraps instead of running off a phone.
  function fitZoom() {
    const v = view(), z = parseFloat(v.style.zoom || 1) || 1;
    v.style.width = z === 1 ? "" : (document.documentElement.clientWidth / z).toFixed(2) + "px";
  }
  function setZoom(z) {
    z = Math.min(2, Math.max(0.5, Math.round(z * 10) / 10));
    view().style.zoom = z;
    fitZoom();
    $("#zoomVal").textContent = Math.round(z * 100) + "%";
    try { localStorage.setItem(ZK, z); } catch (e) { /* storage unavailable */ }
    scheduleArrows();
  }

  // ---------- Router ----------
  // After every render, "mf:render" { detail: { view, id, anchor } } lets add-on modules (app/layout.js …) enhance the page.
  const VIEWS = { topic: renderTopic, node: renderNode, shared: renderShared, connections: renderConnections, legend: renderLegend, progress: renderProgress };
  function route() {
    $("#results").hidden = true;
    const h = decodeURIComponent(location.hash.replace(/^#\/?/, "")).split("/");
    document.querySelectorAll(".topnav a").forEach((a) => a.classList.toggle("active", a.getAttribute("href") === "#/" + (h[0] || "")));
    const name = Object.prototype.hasOwnProperty.call(VIEWS, h[0]) ? h[0] : "master";
    if (name === "topic") renderTopic(h[1], h[2]);
    else if (name === "node") renderNode(h[1]);
    else if (name === "master") renderMaster();
    else VIEWS[name]();
    watchBubbles();
    document.dispatchEvent(new CustomEvent("mf:render", { detail: { view: name, id: name === "master" ? null : h[1] || null, anchor: h[2] || null } }));
  }

  function boot() {
    buildIndexes();
    let z = 1;
    try { z = parseFloat(localStorage.getItem(ZK)) || 1; } catch (e) { /* storage unavailable */ }
    setZoom(z);
    window.addEventListener("hashchange", route);
    const setTB = () => document.documentElement.style.setProperty("--tb", ($(".topbar") ? $(".topbar").offsetHeight + 4 : 56) + "px");
    setTB();
    window.addEventListener("resize", () => { setTB(); fitZoom(); scheduleArrows(); });
    const s = $("#search");
    s.addEventListener("input", () => search(s.value));
    s.addEventListener("keydown", (e) => { if (e.key === "Escape") { s.value = ""; search(""); } });
    document.addEventListener("keydown", (e) => { if (e.key === "/" && document.activeElement !== s) { e.preventDefault(); s.focus(); } });
    document.addEventListener("click", (e) => { if (!e.target.closest("#results,#search")) $("#results").hidden = true; });
    $("#zoomIn").onclick = () => setZoom(currentZoom() + 0.1);
    $("#zoomOut").onclick = () => setZoom(currentZoom() - 0.1);
    route();
  }
})();
