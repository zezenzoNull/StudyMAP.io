"""Resumable local OCR of the notes PDF -> one text file per page (RapidOCR, offline).
Usage: python ocr_pdf.py <pdf> <outdir> <worker_index> <worker_count>"""
import sys, os, pymupdf
from rapidocr_onnxruntime import RapidOCR

pdf, outdir, wi, wn = sys.argv[1], sys.argv[2], int(sys.argv[3]), int(sys.argv[4])
doc = pymupdf.open(pdf)
ocr = RapidOCR()
for i in range(wi, doc.page_count, wn):
    out = os.path.join(outdir, f"page-{i+1:03d}.txt")
    if os.path.exists(out):
        continue
    png = doc[i].get_pixmap(dpi=150).tobytes("png")
    res, _ = ocr(png)
    lines = [r[1] for r in (res or [])]
    with open(out + ".tmp", "w", encoding="utf-8") as f:
        f.write("\n".join(lines))
    os.replace(out + ".tmp", out)
