# Bundled assets

Everything in this folder is local. The app makes no runtime CDN or network requests. These files work from `file://`, on GitHub Pages and inside the single-file iPhone bundle.

## Icons: Health Icons

- Source: Health Icons, outline style. Site: https://healthicons.org. Repository: https://github.com/resolvetosavelives/healthicons
- Licence: Health Icons are released as CC0 1.0 (public domain dedication) / MIT. No attribution is required, but we credit the project here anyway.
- Files: `icons/*.svg`, 70 icons in all (about 194 KB). They were downloaded from
  `raw.githubusercontent.com/resolvetosavelives/healthicons/main/public/icons/svg/outline/<category>/<name>.svg`.
- Sanitizing: we removed the XML declarations, comments and metadata. We also removed any script, event attribute, external href, inline style and the root `width`/`height`, and we kept the `viewBox`. Only svg, g, path, circle, ellipse, rect, line, polyline and polygon elements are allowed. Fills and strokes are set to `currentColor`.
- The same markup is embedded in `data/icons.js` as `window.MF_ICONS.svg`. Keys are the file names without `.svg`. That file also maps app concepts to icon names in `types`, `kinds`, `systems`, `topics` and `extras`.
- Usage: `<span class="mi" style="--mi:url('data:image/svg+xml;utf8,<encoded svg>')">` with
  `.mi { mask: var(--mi) center/contain no-repeat; background: currentColor }`. The icon takes the colour of the surrounding text.

Icon names:
alert-triangle, ambulance, animal-pig, asthma-inhaler, autoimmune-disease, bacteria, biochemistry-laboratory, biopsy, blood-drop, blood-pressure, blood-vessel, book, calendar, chart-line, confused, diabetes-measure, diagnostics, dna, dry-mouth, electricity, endocrinology, enzyme, foot, headache, health-worker_form, height, hospitalized, i-documents_accepted, i-exam_multiple_choice, info, interoperability, intravenous-drip, joints, kidneys, lungs, lymph-nodes, magic-wand, magnifying-glass, medicines, miner-worker, nerve, neurology, orthopaedics, overweight, oxygen-tank, pancreas, pancreatic-cancer, paved-road, pills-2, positive, rheumatology, running-water, skeleton, skull, sleepy, smoking, spine, star-large, stent, stethoscope, symptom, syringe, tb, test-tubes, thyroid, ventilator, video, walk-supported, xray, yes.

## Fonts

| Family | Styles / weights | Licence | Links |
|---|---|---|---|
| Lexend | normal, variable 300–800 | SIL Open Font License 1.1 | https://fonts.google.com/specimen/Lexend, https://github.com/googlefonts/lexend |
| Atkinson Hyperlegible Next | normal + italic, variable 200–800 | SIL Open Font License 1.1 | https://fonts.google.com/specimen/Atkinson+Hyperlegible+Next, https://www.brailleinstitute.org/freefont/ |

OFL text: https://openfontlicense.org/open-font-license-official-text/

The files were downloaded from Google Fonts (fonts.gstatic.com) as woff2. Only the latin and latin-ext subsets are included. Google Fonts has no separate greek subset for either family, so Greek letters such as α, β, γ and μ fall back to the system font.

| File | Bytes |
|---|---|
| `fonts/lexend-latin.woff2` | 39,680 |
| `fonts/lexend-latin-ext.woff2` | 34,476 |
| `fonts/atkinson-next-latin.woff2` | 33,996 |
| `fonts/atkinson-next-latin-ext.woff2` | 19,092 |
| `fonts/atkinson-next-italic-latin.woff2` | 37,644 |
| `fonts/atkinson-next-italic-latin-ext.woff2` | 20,132 |
| `fonts.css` | 249,986 |

`fonts.css` holds one `@font-face` rule per file. Each rule embeds its file as a base64 `data:` URI, because Chrome blocks font fetches from `file://`. Each rule also sets the matching `unicode-range` and weight range, plus `font-display: swap`. The `.woff2` files in `fonts/` are the source copies. The page needs only `fonts.css`.

Font-family names to use in CSS: `'Lexend'` and `'Atkinson Hyperlegible Next'`.
