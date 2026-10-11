#!/usr/bin/env node
/* Acronym coverage checker.
   Loads all chart data, walks every displayed string and lists acronym-like tokens.
   Usage:
     node tools/acronyms.js            → tokens NOT covered by data/glossary.js (should be empty)
     node tools/acronyms.js --all      → every acronym-like token with its count */
"use strict";
const fs = require("fs"), path = require("path"), vm = require("vm");
const root = path.join(__dirname, "..");
const MF = { shared: {}, topics: {}, manifest: [], glossary: {} };
MF.defineShared = (l) => l.forEach((n) => (MF.shared[n.id] = n));
MF.addTopic = (t) => (MF.topics[t.id] = t);
MF.loadManifest = (l) => (MF.manifest = l);
MF.defineGlossary = (g) => Object.assign(MF.glossary, g);
const ctx = vm.createContext({ MF, window: { MF } });
const run = (rel) => fs.existsSync(path.join(root, rel)) && vm.runInContext(fs.readFileSync(path.join(root, rel), "utf8"), ctx, { filename: rel });
run("data/glossary.js"); run("data/shared-nodes.js"); run("data/manifest.js");
MF.manifest.filter((m) => m.status === "done").forEach((m) => run(m.file));

// Keys whose values are never shown as prose.
const SKIP = new Set(["id", "node", "role", "type", "see", "related", "kind", "glyph", "file", "status", "system", "src", "aka", "pages", "no", "anchor", "normalStd", "hl", "wide", "key", "sources"]);
const strings = [];
const walk = (v, key) => {
  if (SKIP.has(key)) return;
  if (typeof v === "string") return strings.push(v);
  if (Array.isArray(v)) return v.forEach((x, i) => (key === "lines" ? walk(x[1], "line") : walk(x, key)));
  if (v && typeof v === "object") Object.entries(v).forEach(([k, x]) => walk(x, k === "mnemonic" ? "mnemonic" : k));
};
Object.values(MF.topics).forEach((t) => walk(t, ""));
Object.values(MF.shared).forEach((n) => walk(n, ""));
MF.manifest.forEach((m) => walk(m.title, "title"));

// Acronym-like: ≥2 capitals in a token (ACTH, HbA1c, IgG4, T2DM), lower-then-capital (eGFR, mTOR), gas symbols (pCO₂), or slash shorthand (m/c, C/I).
const TOK = /(?<![A-Za-z0-9])(?:[A-Za-z0-9₀-₉⁺⁻]*[A-Z][A-Za-z0-9₀-₉⁺⁻]*[A-Z][A-Za-z0-9₀-₉⁺⁻]*|[a-z]+[A-Z][A-Za-z0-9₀-₉]*|[A-Za-z]\/[A-Za-z]{1,2})(?![A-Za-z0-9])/g;
const counts = {};
strings.forEach((s) => String(s).replace(/\{N:[\w-]+\}/g, "").replace(/\*\*|==|\+\+/g, " ").replace(TOK, (t) => ((counts[t] = (counts[t] || 0) + 1), t)));
const keys = new Set(Object.keys(MF.glossary));
const IGNORE = new Set(Object.keys(MF.glossary).filter((k) => MF.glossary[k] === null)); // glossary null = deliberately not expanded
const rows = Object.entries(counts).sort((a, b) => b[1] - a[1]);
const all = process.argv.includes("--all");
const missing = rows.filter(([t]) => !keys.has(t));
(all ? rows : missing).forEach(([t, n]) => console.log(n + "\t" + t));
if (!all) console.log(`\n${missing.length} acronym-like token(s) not in data/glossary.js · ${keys.size - IGNORE.size} expansions defined`);
process.exit(!all && missing.length ? 1 : 0);
