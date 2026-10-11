"""List acronym-like tokens in all chart data (string literals), with counts. Usage: python scan_acronyms.py"""
import re, io, glob, collections, os
root = os.path.join(os.path.dirname(__file__), "..")
files = [os.path.join(root, "data", "shared-nodes.js"), os.path.join(root, "data", "manifest.js")] + glob.glob(os.path.join(root, "data", "topics", "*.js"))
lit = re.compile(r'"((?:[^"\]|\.)*)"')
# token: letters/digits/sub-superscripts with >=2 capitals, or lower+capital mix (eGFR, mTOR, HbA1c, pCO2), or slash shorthands
tok = re.compile(r"(?<![A-Za-z0-9])(?:[A-Za-z0-9₀-₉⁺⁻-]*[A-Z][A-Za-z0-9₀-₉⁺⁻]*[A-Z][A-Za-z0-9₀-₉⁺⁻-]*|[a-z]+[A-Z][A-Za-z0-9₀-₉]*|[pP][a-zA-Z]?[A-Z]{1,2}[O₀-₉0-9]+|[A-Za-z]/[A-Za-z]{1,2})(?![A-Za-z0-9])")
skipkeys = re.compile(r'^\s*(id|node|role|type|see|related|kind|glyph|file|status|system|src)\s*:')
c = collections.Counter()
for f in files:
    for line in io.open(f, encoding="utf-8"):
        if re.search(r'\b(id|node|see|related|file|glyph)\s*:', line) and not re.search(r'\b(t|label|desc|c|h|title|oneLine|why|verify|decision|mnemonic|lines|caption|head)\s*:', line):
            continue
        for m in lit.finditer(line):
            s = m.group(1)
            if re.fullmatch(r"[a-z0-9-]+", s): continue  # ids
            for t in tok.findall(s):
                c[t.strip("-")] += 1
for t, n in sorted(c.items(), key=lambda x: (-x[1], x[0])):
    print(n, t)
