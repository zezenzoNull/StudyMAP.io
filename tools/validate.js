#!/usr/bin/env node
/* Validates the chart data and regenerates PROGRESS.md.
   Checks: manifest ids unique; every non-pending topic file loads and registers its id;
   every shared-node reference exists; every role/type is known; every `see`/`related` points to a manifest topic;
   unused shared nodes are reported. Exit code 1 on any error.
   Usage: node tools/validate.js */
"use strict";
const fs = require("fs"), path = require("path"), vm = require("vm");
const root = path.join(__dirname, "..");
const errors = [], warnings = [];

// Minimal MF stub with the same vocabulary as app/app.js (parsed from it, so there is one source of truth).
const appSrc = fs.readFileSync(path.join(root, "app/app.js"), "utf8");
const keysOf = (name) => {
  const m = appSrc.match(new RegExp("const " + name + " = \\{([\\s\\S]*?)\\n  \\};"));
  return new Set([...m[1].matchAll(/(?:^|[\s{,])([a-z]+)\s*:/g)].map((x) => x[1]));
};
const TYPES = keysOf("TYPES"), ROLES = keysOf("ROLES"), KINDS = keysOf("KINDS");

const MF = { shared: {}, topics: {}, manifest: [] };
MF.defineShared = (list) => list.forEach((n) => {
  if (MF.shared[n.id]) errors.push(`Duplicate shared node id: ${n.id}`);
  if (!KINDS.has(n.kind)) errors.push(`Shared node ${n.id}: unknown kind "${n.kind}"`);
  MF.shared[n.id] = n;
});
MF.addTopic = (t) => { if (MF.topics[t.id]) errors.push(`Duplicate topic id: ${t.id}`); MF.topics[t.id] = t; };
MF.loadManifest = (list) => (MF.manifest = list);
const ctx = vm.createContext({ MF, window: { MF } });
const run = (rel) => vm.runInContext(fs.readFileSync(path.join(root, rel), "utf8"), ctx, { filename: rel });

run("data/shared-nodes.js");
run("data/manifest.js");
const ids = new Set();
MF.manifest.forEach((m) => {
  if (ids.has(m.id)) errors.push(`Duplicate manifest id: ${m.id}`);
  ids.add(m.id);
  if (m.status === "done" || m.status === "in-progress") {
    if (!m.file || !fs.existsSync(path.join(root, m.file))) return errors.push(`${m.id}: file missing (${m.file})`);
    try { run(m.file); } catch (e) { return errors.push(`${m.id}: ${m.file} failed to load: ${e.message}`); }
    if (!MF.topics[m.id]) errors.push(`${m.id}: ${m.file} did not register topic id "${m.id}"`);
  }
});

const used = new Set();
const skipped = new Set(MF.manifest.filter((m) => m.status === "skipped").map((m) => m.id));
const checkItem = (tid, where, raw) => {
  const it = typeof raw === "string" ? { t: raw } : raw;
  if (!it || (it.t === undefined && !it.decision && !it.branches && !it.table && !it.mnemonic && !it.chain && !it.h)) errors.push(`${tid} ${where}: item without text`);
  if (it.table) {
    if (!Array.isArray(it.table.rows) || !it.table.rows.length) errors.push(`${tid} ${where}: table without rows`);
    const w = it.table.head ? it.table.head.length : null;
    (it.table.rows || []).forEach((r, k) => { const row = Array.isArray(r) ? { c: r } : r;
      if (!Array.isArray(row.c)) return errors.push(`${tid} ${where}.r${k}: table row without cells`);
      if (w && row.c.length !== w) errors.push(`${tid} ${where}.r${k}: row has ${row.c.length} cells, header has ${w}`);
      checkItem(tid, `${where}.r${k}`, Object.assign({}, row, { t: row.c.join(" ") })); });
  }
  if (it.mnemonic && it.lines && !it.lines.every((l) => Array.isArray(l) && l.length === 2)) errors.push(`${tid} ${where}: mnemonic lines must be [key, meaning] pairs`);
  [].concat(it.node || []).forEach((n) => { used.add(n); if (!MF.shared[n]) errors.push(`${tid} ${where}: unknown shared node "${n}"`); });
  [].concat(it.role || []).forEach((r) => { if (!ROLES.has(r)) errors.push(`${tid} ${where}: unknown role "${r}"`); });
  if (it.node && !it.why) warnings.push(`${tid} ${where}: shared node "${it.node}" linked without a disease-specific "why"`);
  if (it.see && !ids.has(it.see)) errors.push(`${tid} ${where}: see → unknown topic "${it.see}"`);
  if (it.see && skipped.has(it.see)) errors.push(`${tid} ${where}: see → skipped (out-of-scope) topic "${it.see}"`);
  if (it.type && !TYPES.has(it.type)) errors.push(`${tid} ${where}: unknown step type "${it.type}"`);
  (it.sub || []).forEach((s, i) => checkItem(tid, `${where}.${i}`, s));
  (it.items || []).forEach((s, i) => checkItem(tid, `${where}.i${i}`, s));
  (it.branches || []).forEach((b, j) => (b.steps || []).forEach((s, i) => checkItem(tid, `${where}.b${j}.${i}`, s)));
};
Object.values(MF.topics).forEach((t) => {
  if (!t.title) errors.push(`${t.id}: missing title`);
  (t.bubbles || []).forEach((b, bi) => {
    if (!TYPES.has(b.type)) errors.push(`${t.id} bubble ${bi + 1}: unknown type "${b.type}"`);
    if ((!b.items || !b.items.length) && (!b.steps || !b.steps.length)) errors.push(`${t.id} bubble ${bi + 1}: empty`);
    (b.steps || []).forEach((s, i) => checkItem(t.id, `bubble ${bi + 1} flow.${i}`, s));
    if (!b.src) warnings.push(`${t.id} bubble ${bi + 1} (${b.title || b.type}): no source page`);
    (b.items || []).forEach((it, i) => checkItem(t.id, `bubble ${bi + 1}.${i}`, it));
  });
  (t.pathways || []).forEach((p, pi) => {
    if (p.type && !TYPES.has(p.type)) errors.push(`${t.id} pathway ${pi + 1}: unknown type "${p.type}"`);
    (p.steps || []).forEach((s, i) => checkItem(t.id, `pathway ${pi + 1}.${i}`, s));
  });
  (t.related || []).forEach((r) => { if (!ids.has(r)) errors.push(`${t.id}: related → unknown topic "${r}"`); if (skipped.has(r)) errors.push(`${t.id}: related → skipped topic "${r}"`); });
});


// Shared-node reach
const reach = {};
Object.values(MF.topics).forEach((t) => {
  const walk = (raw) => { const it = typeof raw === "string" ? {} : raw; [].concat(it.node || []).forEach((n) => (reach[n] = reach[n] || new Set()).add(t.id));
    (it.sub || []).forEach(walk); (it.items || []).forEach(walk); (it.branches || []).forEach((b) => (b.steps || []).forEach(walk));
    if (it.table) it.table.rows.forEach((r) => walk(Array.isArray(r) ? {} : r)); };
  (t.bubbles || []).forEach((b) => { (b.items || []).forEach(walk); (b.steps || []).forEach(walk); });
  (t.pathways || []).forEach((p) => (p.steps || []).forEach(walk));
});
const crossLinked = Object.entries(reach).filter(([, s]) => s.size >= 2).length;
Object.keys(MF.shared).filter((n) => !reach[n] && !used.has(n)).forEach((n) => warnings.push(`Shared node "${n}" is defined but not used yet`));

// PROGRESS.md
const by = (s) => MF.manifest.filter((m) => m.status === s);
const line = (m) => `| ${m.no ?? ""} | ${m.title} | ${m.system} | ${m.pages ? m.pages.join("–") : "?"} | ${m.status} |`;
fs.writeFileSync(path.join(root, "PROGRESS.md"),
`# Progress tracker

_Generated by \`node tools/validate.js\` — do not edit by hand; change \`data/manifest.js\` instead._

**Done:** ${by("done").length} · **In progress:** ${by("in-progress").length} · **Pending:** ${by("pending").length} · **Skipped (out of scope):** ${by("skipped").length} · **In scope:** ${MF.manifest.length - by("skipped").length}
**Shared nodes:** ${Object.keys(MF.shared).length} defined · ${crossLinked} linked across ≥2 topics
**Last validation:** ${errors.length} error(s), ${warnings.length} warning(s)

| Book # | Topic | System | PDF pages | Status |
|---|---|---|---|---|
${MF.manifest.map(line).join("\n")}
`);

// REVIEW-FLAGS.md: every ⚠ VERIFY and SUPPLEMENT item, so they can be checked against Davidson / Boloor in one pass.
const flags = [];
const scan = (t, where, raw) => {
  const it = typeof raw === "string" ? {} : raw;
  const txt = String(it.t || it.decision || "").replace(/\*\*|==/g, "");
  if (it.verify) flags.push(`| ${t.title} | ${where} | VERIFY | ${txt.replace(/\|/g, "/")} | ${it.verify.replace(/\|/g, "/")} |`);
  if (it.sup) flags.push(`| ${t.title} | ${where} | SUPPLEMENT | ${txt.replace(/\|/g, "/")} | ${it.sup.replace(/\|/g, "/")} |`);
  (it.sub || []).forEach((s) => scan(t, where, s)); (it.items || []).forEach((s) => scan(t, where, s));
  if (it.table) it.table.rows.forEach((r) => { if (!Array.isArray(r)) scan(t, where, Object.assign({}, r, { t: r.c.join(" / ") })); });
  (it.branches || []).forEach((b) => (b.steps || []).forEach((s) => scan(t, where, s)));
};
MF.manifest.forEach((m) => { const t = MF.topics[m.id]; if (!t) return;
  (t.bubbles || []).forEach((b) => [...(b.items || []), ...(b.steps || [])].forEach((it) => scan(t, `${b.title || b.type} (${b.src || "?"})`, it)));
  (t.pathways || []).forEach((p) => (p.steps || []).forEach((s) => scan(t, `Pathway: ${p.title}`, s))); });
fs.writeFileSync(path.join(root, "REVIEW-FLAGS.md"),
`# Review flags

_Generated by \`node tools/validate.js\`._ Items the chart marks **⚠ VERIFY** (unclear, conflicting or possibly outdated in the notes) or **SUPPLEMENT** (not from the primary notes). Check these against Davidson's / Boloor's when available.

| Topic | Bubble (PDF page) | Flag | Point | Reason |
|---|---|---|---|---|
${flags.join("\n") || "| — | — | — | none | — |"}
`);

warnings.forEach((w) => console.log("warn: " + w));
errors.forEach((e) => console.log("ERROR: " + e));
console.log(`\n${Object.keys(MF.topics).length} topics loaded · ${Object.keys(MF.shared).length} shared nodes (${crossLinked} cross-linked) · ${errors.length} errors · ${warnings.length} warnings`);
process.exit(errors.length ? 1 : 0);
