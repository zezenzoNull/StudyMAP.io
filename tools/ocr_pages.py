"""OCR selected PDF pages (local RapidOCR) into _work/ocr/page-NNN.txt. Usage: python ocr_pages.py <pdf> <first> <last>"""
import sys, os, pymupdf
from rapidocr_onnxruntime import RapidOCR
pdf, a, b = sys.argv[1], int(sys.argv[2]), int(sys.argv[3])
out = os.path.join(os.path.dirname(__file__), "..", "_work", "ocr"); os.makedirs(out, exist_ok=True)
doc = pymupdf.open(pdf); ocr = RapidOCR()
for n in range(a, b + 1):
    f = os.path.join(out, f"page-{n:03d}.txt")
    if os.path.exists(f): continue
    res, _ = ocr(doc[n - 1].get_pixmap(dpi=110).tobytes("png"))
    open(f, "w", encoding="utf-8").write("\n".join(x[1] for x in (res or [])))
