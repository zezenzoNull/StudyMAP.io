/* Text audit: flags lines that may read badly (OCR typos, cut-off words, unbalanced brackets, dangling fragments).
   node tools/text-audit.js > _work/text-audit.txt     — a reading list, nothing is changed. */
"use strict";
const fs = require("fs"), path = require("path"), vm = require("vm");
const root = path.join(__dirname, "..");
const MF = { shared: {}, topics: {}, manifest: [], glossary: {} };
MF.defineGlossary = (g) => Object.assign(MF.glossary, g);
MF.defineDrugs = () => {};
MF.defineShared = (l) => l.forEach((n) => (MF.shared[n.id] = n));
MF.addTopic = (t) => (MF.topics[t.id] = t);
MF.loadManifest = (l) => (MF.manifest = l);
const ctx = vm.createContext({ MF, window: { MF } });
const run = (f) => vm.runInContext(fs.readFileSync(path.join(root, f), "utf8"), ctx, { filename: f });
["data/glossary.js", "data/shared-nodes.js", "data/manifest.js"].forEach(run);
MF.manifest.filter((m) => m.status === "done").forEach((m) => run(m.file));

const lines = []; // [where, text]
const walk = (v, where) => {
  if (typeof v === "string") { if (v.length > 2 && !/^[a-z0-9-]+$/.test(v)) lines.push([where, v]); return; }
  if (Array.isArray(v)) return v.forEach((x, i) => walk(x, where + "[" + i + "]"));
  if (v && typeof v === "object") for (const k of Object.keys(v)) if (!["id", "node", "role", "type", "see", "src", "file", "kind", "glyph"].includes(k)) walk(v[k], where + "." + k);
};
Object.values(MF.topics).forEach((t) => walk(t, t.id));
Object.values(MF.shared).forEach((n) => walk(n, "shared:" + n.id));

const freq = new Map();
for (const [, s] of lines) for (const w of s.toLowerCase().match(/[a-z]{4,}/g) || []) freq.set(w, (freq.get(w) || 0) + 1);
const lev = (a, b) => {
  if (Math.abs(a.length - b.length) > 2) return 9;
  const d = Array.from({ length: a.length + 1 }, (_, i) => [i]);
  for (let j = 1; j <= b.length; j++) d[0][j] = j;
  for (let i = 1; i <= a.length; i++) for (let j = 1; j <= b.length; j++)
    d[i][j] = Math.min(d[i - 1][j] + 1, d[i][j - 1] + 1, d[i - 1][j - 1] + (a[i - 1] === b[j - 1] ? 0 : 1));
  return d[a.length][b.length];
};
const common = [...freq].filter(([, n]) => n >= 3).map(([w]) => w);
const typo = new Map();
for (const [w, n] of freq) {
  if (n > 1 || w.length < 6) continue;
  const near = common.find((c) => c !== w && c.length >= 6 && lev(w, c) <= (w.length > 9 ? 2 : 1) && !c.startsWith(w) && !w.startsWith(c) && !w.endsWith("s") );
  if (near) typo.set(w, near);
}
const out = [];
for (const [where, s] of lines) {
  const why = [];
  const opens = (s.match(/\(/g) || []).length, closes = (s.match(/\)/g) || []).length;
  if (opens !== closes) why.push("brackets " + opens + "/" + closes);
  if (/(^|\s)[a-z]{2,}-$|[,(—–:+]\s*$|\b(and|or|of|the|with|to|in|for|by)\s*$/i.test(s)) why.push("ends mid-phrase");
  if (/\b\w+\s*\?\s*\w+/.test(s) || /\?\?|…\s*$/.test(s)) why.push("question mark / ellipsis");
  for (const w of s.toLowerCase().match(/[a-z]{4,}/g) || []) if (typo.has(w)) why.push(`"${w}" ~ "${typo.get(w)}"?`);
  if (/\b([a-z]{3,}) \1\b/i.test(s)) why.push("repeated word");
  if (why.length) out.push(`${where}\n   ${s}\n   ⟶ ${why.join("; ")}`);
}
console.log(out.length + " flagged of " + lines.length + " strings\n");
console.log(out.join("\n"));
