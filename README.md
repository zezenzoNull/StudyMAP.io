# Medicine Master Flowchart

An interconnected, colour-coded revision flowchart built from the PrepLadder Medicine notes in the parent folder
(`Medicine Prep X - ZeroTrace - Copy.pdf`). It covers the exam-scope topics from the index photos, in book order.

## Open it
**Online:** https://zezenzonull.github.io/StudyMAP.io/ (GitHub Pages) — works on phones too; tap **▶ Play** on any topic for a guided walkthrough.

**Offline:** double-click **`index.html`**. It runs offline in any modern browser (Edge, Chrome, Firefox) with no install or internet needed.

## Navigate
| Where | What you get |
|---|---|
| **Master** | All topics by system, in book order, with status and each topic's most-shared nodes |
| **Topic page** | Numbered bubbles (1 → 2 → 3 …) joined by flow arrows, then clinical pathways with decision branches, then the topic's shared nodes |
| **⇄ chips** | A shared investigation, drug or protocol. Click one to see **every disease that uses it, with its role and the disease-specific reason** |
| **Connections** | Map of all topics ↔ shared nodes used by two or more topics; hover to highlight |
| **Shared nodes** | Every reusable node, grouped by kind, most widely shared first |
| **Legend** | Colours, icons, role badges and marks |
| **Progress** | Done, in-progress and pending topics |

- **Search:** press `/`, type any words (e.g. `hba1c lada`) and click a result. It jumps to the exact bullet and highlights it.
- **Zoom:** use the − / + buttons at the top right. The setting is remembered.
- **Print:** the browser's print dialog works, and bubbles won't split across pages.

## Marks you will see
- <mark>pink</mark> = highlighted as high-yield in the notes · **bold** = key value or drug of choice
- Role badges: *Inv. of choice, Initial test, Confirmatory, 1st-line, 2nd-line, Definitive, Emergency, Contraindicated …*
- **⚠ VERIFY** = unclear, conflicting or possibly outdated in the notes. All of them are listed in `REVIEW-FLAGS.md`.
- Drug names are in CAPITALS. A 💊 tag after a drug's first mention in each bubble shows the usual adult dose (`data/doses.js`, standard references, not the notes); tap a drug name for all its doses. The ℞ button in the top bar turns the tags off.
- **Move / resize:** drag a bubble's header to move it and its corner to resize; arrows follow. Layout is saved per topic (↺ Reset / ⤢ Tidy). On phones, tap ✥ Arrange first.
- **SUPPLEMENT** = not from the primary notes; its source is printed beneath it.
- `p.242` tags = PDF page of the notes each bubble came from.

See `LEGEND.md` for the full colour system and `SOURCES.md` for the source rules.

## Project layout
```
index.html               entry point
app/app.js               rendering engine (views, search, links, arrows) — no dependencies
app/styles.css           colour tokens and layout
data/manifest.js         topic order, PDF page ranges, status
data/shared-nodes.js     reusable investigations / drugs / protocols / concepts
data/topics/<id>.js      one file per topic (pure data)
tools/validate.js        link checker → regenerates PROGRESS.md and REVIEW-FLAGS.md
tools/ocr_pdf.py, find_headers.py   local OCR helpers for the image-only PDF
PROGRESS.md · REVIEW-FLAGS.md · LEGEND.md · SOURCES.md
```

## Add or extend a topic
1. Copy the shape of `data/topics/dm-1.js` into `data/topics/<id>.js` (the id must match `data/manifest.js`).
2. Bubble `type` is one of: `definition etiology patho clinical investigation imaging diagnosis emergency treatment complication pearl followup mcq`.
3. A bullet can be a plain string or an object, for example:
   `{ t: "HbA1c — ==IOC==", node: "lab-hba1c", role: ["ioc","monitor"], why: "disease-specific reason", src: "p.225" }`.
   Other fields: `sub: [...]` (nested bullets), `see: "<topic-id>"` (cross-link), `verify: "…"`, `sup: "source …"`.
4. To link a shared test or drug, use its id from `data/shared-nodes.js`, or add a new entry there.
   Always give a `why`, because the same drug is never assumed to mean the same thing in two diseases.
5. Set the topic's `status` in `data/manifest.js` to `done`, then run:
   ```
   node tools/validate.js
   ```
   It must report 0 errors. It also rewrites `PROGRESS.md` and `REVIEW-FLAGS.md`.
