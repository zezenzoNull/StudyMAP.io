"""Fast pass: OCR only the top banner of every page to find where each topic starts.
Writes _work/headers.tsv (page<TAB>banner text). Resumable via _work/headers/ cache."""
import sys, os, pymupdf
from rapidocr_onnxruntime import RapidOCR
pdf, outdir, wi, wn = sys.argv[1], sys.argv[2], int(sys.argv[3]), int(sys.argv[4])
os.makedirs(outdir, exist_ok=True)
doc = pymupdf.open(pdf); ocr = RapidOCR()
for i in range(wi, doc.page_count, wn):
    out = os.path.join(outdir, f"h-{i+1:03d}.txt")
    if os.path.exists(out): continue
    r = doc[i].rect
    clip = pymupdf.Rect(0, 0, r.width, r.height * 0.16)
    png = doc[i].get_pixmap(dpi=110, clip=clip).tobytes("png")
    res, _ = ocr(png)
    with open(out, "w", encoding="utf-8") as f:
        f.write(" | ".join(x[1] for x in (res or [])))
