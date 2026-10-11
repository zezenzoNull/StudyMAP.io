/* Acronym expansion engine — shared by the browser app (app/app.js) and the Node tools (tools/validate.js).
   MFExpand.text(raw, { glossary, topic, seen, marker })
     raw      : source text (before HTML escaping)
     topic    : current topic id, for acronyms whose meaning depends on the topic
     seen     : optional Set — when given, each acronym is expanded only the first time it appears in that scope
     marker   : true → wrap full forms in \u0001 … \u0002 so the caller can style them after escaping
   An acronym already followed by its own full form in brackets, or preceded by it, is left alone. */
(function (root) {
  "use strict";
  let cacheFor = null, cacheRe = null;
  const reEsc = (s) => s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

  function regexFor(glossary) {
    if (cacheFor === glossary && cacheRe) return cacheRe;
    const keys = Object.keys(glossary).filter((k) => k.trim() === k).sort((a, b) => b.length - a.length);
    // key, then an optional numeric suffix carried into the full form (IL-5, COVID-19, GLP-1, IGF-1, HNF-1α)
    cacheRe = new RegExp("(?<![A-Za-z0-9])(" + keys.map(reEsc).join("|") + ")(-\\d+[A-Za-zα-ω]?)?(?![A-Za-z0-9₀-₉⁺⁻])", "g");
    cacheFor = glossary;
    return cacheRe;
  }

  function meaning(glossary, key, topic) {
    const v = glossary[key];
    if (v === null || v === undefined) return null;
    if (typeof v === "string") return v;
    if (topic && Object.prototype.hasOwnProperty.call(v, topic)) return v[topic];
    return v._ === undefined ? null : v._;
  }

  function text(raw, opts) {
    const o = opts || {};
    const g = o.glossary || (root.MF && root.MF.glossary) || {};
    if (!raw || !Object.keys(g).length) return String(raw == null ? "" : raw);
    const s = String(raw);
    return s.replace(regexFor(g), (m, key, suffix, offset) => {
      const full = meaning(g, key, o.topic);
      if (!full) return m;
      const after = s.slice(offset + m.length, offset + m.length + 60);
      const before = s.slice(Math.max(0, offset - 70), offset).toLowerCase();
      const head = full.toLowerCase().replace(/[^a-z0-9 ]/g, "").slice(0, 6);
      // already explained right here → leave it
      const br = after.match(/^\s*\(([^)]*)\)/);
      if (br && br[1].toLowerCase().replace(/[^a-z0-9 ]/g, "").startsWith(head)) return m;
      if (before.includes(full.toLowerCase())) return m;
      const id = key + (suffix || "");
      if (o.seen) { if (o.seen.has(id)) return m; o.seen.add(id); }
      const ff = full + (suffix || "");
      return o.marker ? m + "\u0001" + ff + "\u0002" : m + " (" + ff + ")";
    });
  }

  root.MFExpand = { text, meaning };
})(typeof window !== "undefined" ? window : globalThis);
