# Sources & source tracking

## Primary source (everything in the chart comes from here unless marked)
- **`Medicine Prep X - ZeroTrace - Copy.pdf`** (PrepLadder Medicine notes, 890 pages, image-only scan).
  It was read page by page as rendered images. Every bubble and pathway carries its PDF page range, e.g. `Source: p.224–228`.
- **Topic list and order:** the four index photos (`WhatsApp Image 2026-10-11 …`). Per your instruction, every topic visible in them is in scope and the pen marks are ignored. The PDF has no built-in index, so topic boundaries were located from the page banners. Each topic ends on its MCQ page.

## Secondary references
- **Davidson's Principles and Practice of Medicine** and **Boloor's Comprehensive Medical Review** are **not present** in the working directory and were **not accessed**. Nothing in the chart claims to come from them.
- Instead of silently "correcting" the notes from memory, places where the notes look unclear, conflict with a standard guideline wording, or may be outdated are marked **⚠ VERIFY** with the reason. Each one is listed in `REVIEW-FLAGS.md`, so they can be checked in one sitting once those books are available.
- If a secondary reference is added later, any point taken from it is marked **SUPPLEMENT** with the book, edition and page.

## Rules followed
- No internet sources, no invented doses, thresholds, criteria or citations.
- Values are copied as printed in the notes. Where a value differs from a well-known guideline wording, it is kept as printed and flagged.
- Exam-relevant notes that cite another authority (e.g. "ADA 2023", "Harrison 21e", "ISPAD") are attributed in the bullet itself.
- Original notes and PDFs are never modified. All generated material lives in `medical-flowchart/`.

## Drug doses
- `data/doses.js` holds usual adult doses for every drug named in the chart, from standard references (BNF, Harrison, major guidelines). They are not in the notes and are shown as separate dose tags. Doses vary with renal and hepatic function, weight and local protocol, so always check before prescribing.
