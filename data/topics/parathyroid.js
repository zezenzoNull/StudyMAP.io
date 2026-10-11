/* Disorders of Parathyroid Gland. Primary source: PrepLadder notes PDF pp. 280–288.
   "Stones, bones, groans & moans" and "HAS MILK-Intoxication" are from the notes; other mnemonics written for this chart. */
MF.addTopic({
  id: "parathyroid",
  title: "Disorders of Parathyroid Gland",
  aka: ["hyperparathyroidism", "hypoparathyroidism", "hypercalcaemia", "hypocalcaemia", "tetany", "Trousseau", "Chvostek", "pseudohypoparathyroidism", "rickets", "osteoporosis", "DEXA", "sestamibi", "calcium"],
  oneLine: "Calcium control (PTH · FGF-23 · calcitonin), primary vs secondary hyperparathyroidism, hypercalcaemic crisis, hypoparathyroidism & tetany, pseudo-hypoPTH, rickets, osteoporosis.",
  flow: ["Ca²⁺ · PO₄ · ALP · PTH pattern", "↑ Ca + ↑ PTH → adenoma → sestamibi → resect", "↓ Ca + ↑ PTH + ↑ PO₄ → CKD", "Crisis: NS → NS + furosemide → zoledronate", "Tetany: IV 10% calcium gluconate"],
  related: ["thyroid", "adrenal", "dm-2"],
  bubbles: [
    { type: "definition", title: "Calcium control", src: "p.280", items: [
      { table: { head: ["Hormone (source)", "Actions"], rows: [
        { c: ["**PTH** (parathyroid)", "Bone: resorption → Ca ↑ · Kidney: PCT → ==PO₄ wasting==, DCT → Ca reabsorbed (via CaSR)"], hl: true },
        ["**FGF-23** (osteocytes)", "Lowers phosphate (kidney, gut) · ==inhibits PTH release=="],
        ["**Calcitonin** (thyroid C cells)", "Limited role · blocks osteoclasts (osteoporosis) · ↑ urinary Ca loss (hypercalcaemic crisis)"]
      ]}},
      "==Ca²⁺ and PO₄ move in opposite directions== under PTH",
      { t: "Bone-turnover marker → ==serum alkaline phosphatase (SAP)== (liver, bone, placenta)", node: "lab-alp", role: "monitor", why: "Bone turnover" },
      { table: { caption: "Bone SAP in disease", head: ["SAP", "Conditions"], rows: [
        ["↑", "Rickets · osteomalacia · hyperparathyroidism (1° or 2°)"],
        ["↓", "Hypophosphatasia"],
        ["Normal", "Hypoparathyroidism · osteoporosis · multiple myeloma"],
        { c: ["**Disproportionately ↑**", "==Paget disease=="], hl: true }
      ]}}
    ]},
    { type: "pearl", title: "One-liners", src: "p.281", items: [
      { t: "M/c cause of **symptomatic** hypercalcaemia → ==malignancy (squamous cell Ca lung)==", role: "hy" },
      { t: "M/c cause of **asymptomatic** hypercalcaemia → ==parathyroid adenoma==", role: "hy" },
      { t: "Dangerous hypercalcaemia → 1st line ==normal saline==", node: "rx-normal-saline", role: "first", why: "First-line for dangerous hypercalcaemia" },
      { t: "Dangerous hypermagnesaemia → ==calcium gluconate==", node: "rx-calcium-gluconate", role: "first", why: "Antagonises hypermagnesaemia" },
      { t: "Tetany → ==calcium gluconate==", node: "rx-calcium-gluconate", role: "first", why: "First-line for tetany" },
      { t: "Normal calcium → **9–11 mg/dL**", node: "lab-calcium", role: "hy", why: "Reference calcium (notes)" }
    ]},
    { type: "clinical", title: "Primary hyperparathyroidism", src: "p.281", items: [
      { t: "Leading cause → ==parathyroid adenoma== (inferior parathyroid)", role: "hy" },
      "Associated → MEN 1, MEN 2A",
      "Calcium can rise to ~15 mg/dL",
      { mnemonic: "Stones, Bones, Groans, Moans (notes)", lines: [["Stones", "Kidney stones · nephrocalcinosis → abdominal pain"], ["Bones", "Bone pain"], ["Groans", "Constipation (sphincter spasm) · abdominal pain"], ["Moans", "==Psychic moans== — depression, psychosis"]] },
      "Proximal muscle weakness",
      { t: "Ca **>15 mg/dL** → ==systolic cardiac arrest==", role: "danger" }
    ]},
    { type: "investigation", title: "Calcium disorders — lab patterns", src: "p.281, 283–286", wide: true, items: [
      { table: { head: ["Disease (cause)", "Ca²⁺", "PO₄", "SAP", "PTH"], rows: [
        { c: ["**1° hyperPTH** (adenoma)", "↑", "↓", "↑", "==↑↑=="], node: "lab-pth", role: "dx", why: "Primary hyperparathyroidism", hl: true },
        { c: ["**2° hyperPTH** (CKD)", "↓", "↑", "↑", "↑↑"], node: "lab-renal", role: "dx", why: "CKD-driven secondary hyperparathyroidism" },
        ["**HypoPTH** (autoimmune)", "↓", "↑", "Normal", "↓"],
        ["**Pseudo-hypoPTH** (GNAS)", "↓", "↑", "Normal", "↑ (resistance)"],
        ["**Pseudo-pseudo-hypoPTH**", "Normal", "Normal", "Normal", "Normal"],
        { c: ["**Nutritional rickets**", "↓", "↓", "↑", "↑"], node: "lab-vitd", role: "dx", why: "Vitamin D3 low in rickets" },
        { c: ["**Osteoporosis**", "Normal", "Normal", "Normal", "—"], node: "img-dexa", role: "ioc", why: "Osteoporosis needs DEXA, labs are normal" }
      ]}},
      { table: { caption: "Normal values", head: ["Test", "Normal"], rows: [
        { c: ["Calcium", "{N:lab-calcium}"], node: "lab-calcium", why: "Calcium reference" },
        { c: ["Phosphate", "{N:lab-phosphate}"], node: "lab-phosphate", why: "Phosphate reference" },
        { c: ["SAP", "{N:lab-alp}"], node: "lab-alp", why: "ALP reference" },
        { c: ["PTH", "{N:lab-pth}"], node: "lab-pth", why: "PTH reference" },
        { c: ["25-OH vitamin D", "{N:lab-vitd}"], node: "lab-vitd", why: "Vitamin D reference" }
      ]}},
      { mnemonic: "Primary = Ca Up · Secondary = Ca Sinks", t: "both have high PTH; calcium tells them apart" }
    ]},
    { type: "investigation", title: "Primary hyperPTH — work-up", src: "p.281", items: [
      { t: "Ca ↑ · PO₄ ↓ · SAP ↑ · ==PTH tremendously ↑==", node: ["lab-calcium", "lab-pth"], role: "dx", why: "Primary hyperparathyroidism pattern" },
      { t: "==IOC imaging → Tc-99m sestamibi SPECT/CT==", node: "img-sestamibi", role: "ioc", why: "Localises parathyroid adenoma" },
      { t: "X-ray hand → ==subperiosteal resorption of phalanges==", node: "img-xray", role: "dx", why: "Bone sign of hyperparathyroidism" },
      { t: "Don't confuse → Tc-99m ==pertechnetate== scan = Meckel diverticulum", role: "hy" },
      { t: "Treatment → ==resect the tumour==", role: "def" }
    ]},
    { type: "etiology", title: "Causes of hypercalcaemia", src: "p.282", items: [
      { mnemonic: "HAS MILK-Intoxication (notes)", lines: [["H", "Humoral hypercalcaemia of malignancy — squamous cell Ca lung / breast"], ["A", "Adenoma (parathyroid)"], ["S", "Sarcoidosis — granulomas make 1α-hydroxylase → vit D3 ↑ → steroids work"], ["MILK", "Milk-alkali syndrome — antacid abuse, thiazides, lithium"], ["I", "Intoxication with vitamin D3 → steroids work"]] },
      { h: "Others" },
      "Jansen disease → PTHR1 gain of function",
      "Familial hypocalciuric hypercalcaemia → CaSR (parathyroid + kidney) faulty → PTH ↑, Ca reabsorption ↑",
      { h: "Steroid-responsive hypercalcaemia" },
      { mnemonic: "VS MLL", t: "Vitamin D intoxication · Sarcoidosis · Myeloma · Leukaemia · Lymphoma" },
      { t: "Steroids", node: "rx-steroids", role: "first", why: "Steroid-responsive hypercalcaemia (granulomas, haematological)" }
    ]},
    { type: "emergency", title: "Hypercalcaemic crisis — flowchart", src: "p.282", steps: [
      { t: "Dangerous hypercalcaemia (risk of arrest >15 mg/dL)", node: "em-hypercalcemia", role: "emerg", type: "emergency", why: "Entry to hypercalcaemic crisis protocol" },
      { t: "==1st line: normal saline==", node: "rx-normal-saline", role: "first", type: "emergency", why: "Hypercalcaemic crisis first line" },
      { t: "Then ==NS + furosemide drip== → Ca²⁺ lost in urine", node: "rx-furosemide", role: "adjunct", type: "treatment", why: "Calciuresis after rehydration" },
      { t: "==DOC: IV zoledronate== (onset 1–2 days, full effect ~3 weeks)", node: "rx-bisphosphonate", role: "def", type: "treatment", why: "Hypercalcaemic crisis DOC" },
      { decision: "Extra options", branches: [
        { label: "Need fast effect", steps: [{ t: "**Calcitonin nasal spray** — rapid onset, tachyphylaxis", node: "rx-calcitonin", role: "adjunct", type: "treatment", why: "Rapid but short-lived" }] },
        { label: "Osteoclast block", steps: [{ t: "**Denosumab SC** → binds RANK ligand", node: "rx-denosumab", role: "adjunct", type: "treatment", why: "Anti-resorptive in hypercalcaemia" }] },
        { label: "Others", steps: [{ t: "Oral phosphate · **steroids**", node: "rx-steroids", role: "adjunct", type: "treatment", why: "Steroid-responsive causes" }] }
      ]},
      { mnemonic: "Salt → Spout → Zole", t: "saline · furosemide · zoledronate" }
    ]},
    { type: "etiology", title: "Secondary hyperparathyroidism", src: "p.282–283", items: [
      { t: "M/c cause → ==CKD== (diabetic nephropathy)", see: "dm-2" },
      { chain: ["CKD", "↓ vitamin D3 (kidney makes it)", "Ca ↓", "PTH ↑", "PO₄ ↑ (low eGFR)", "SAP ↑"] },
      "Presents → bone pain, pathological fractures",
      { table: { head: ["Test", "Result"], rows: [
        ["Ca²⁺", "↓"], ["PO₄", "↑"], ["SAP", "↑"], ["PTH", "↑↑"],
        { c: ["Vitamin D3", "↓"], node: "lab-vitd", role: "dx", why: "Low vitamin D in CKD" },
        { c: ["eGFR / creatinine", "~30 mL/min · ↑"], node: "lab-renal", role: "dx", why: "CKD" }
      ]}}
    ]},
    { type: "treatment", title: "Secondary hyperPTH — treatment", src: "p.283", steps: [
      { t: "Calcium + vitamin D3", node: "rx-vitd", role: "first", type: "treatment", why: "Secondary hyperparathyroidism of CKD" },
      { t: "==Cinacalcet== → calcimimetic on parathyroid CaSR → ↓ PTH release", node: "rx-cinacalcet", role: "second", type: "treatment", why: "Lowers PTH in CKD" },
      { t: "==Kidney transplant → definitive==", role: "def", type: "treatment" }
    ]},
    { type: "etiology", title: "Hypoparathyroidism — causes", src: "p.283", items: [
      { mnemonic: "A-A-T-D-R", lines: [["A", "Autoimmune destruction"], ["A", "APS type 1 (± Addison, ± Candida) — AIRE gene, chr 21"], ["T", "==Post total thyroidectomy== (m/c case)"], ["D", "DiGeorge — chr 22: thymus fails (↓ CMI) + parathyroid fails (Ca ↓)"], ["R", "Radiation to head & neck"]] },
      { t: "APS type 1", node: "con-aps", why: "APS-1 includes hypoparathyroidism" },
      { t: "Tetany death → ==laryngospasm==", role: "danger" }
    ]},
    { type: "clinical", title: "Hypocalcaemia & tetany", src: "p.283–284", items: [
      "Case → 3 days after total thyroidectomy: ==perioral and periungual paraesthesia==",
      { table: { head: ["Sign", "How", "Shows"], rows: [
        { c: ["==Trousseau==", "BP cuff at SBP + 20 mmHg for 3 min", "==Carpopedal spasm (obstetrician hand)== — median nerve irritability"], hl: true },
        ["==Chvostek==", "Tap anterior border of parotid", "==Circum-oral twitching== — facial nerve irritability"]
      ]}},
      { mnemonic: "Trousseau = Tourniquet · Chvostek = Cheek", t: "which sign is which" },
      { t: "Trousseau **syndrome** (different!) → migratory thrombophlebitis → lung, pancreas, stomach Ca", role: "hy" },
      { h: "Chronic hypoPTH" },
      "==Basal ganglia calcification== → dystonia · oculogyric crisis · hemiballismus",
      "Cataracts · abnormal dentition"
    ]},
    { type: "investigation", title: "Hypocalcaemia — work-up", src: "p.284", items: [
      { table: { head: ["Test", "Finding", "Normal"], rows: [
        { c: ["ECG", "==Prolonged QT==", "QT 360–440 ms (notes)"], node: "bed-ecg", role: "dx", why: "Hypocalcaemia prolongs QT (Ca inversely related to QT)", hl: true },
        { c: ["Ionised + serum Ca", "↓", "{N:lab-calcium}"], node: "lab-calcium", role: "dx", why: "Hypocalcaemia" },
        { c: ["Serum albumin", "Normal (true hypocalcaemia)", "{N:lab-albumin}"], node: "lab-albumin", role: "dx", why: "Excludes low-albumin pseudo-hypocalcaemia" },
        { c: ["Phosphate", "↑", "{N:lab-phosphate}"], node: "lab-phosphate", role: "dx", why: "Raised in hypoparathyroidism" },
        ["SAP", "Normal", "{N:lab-alp}"],
        { c: ["PTH", "↓", "{N:lab-pth}"], node: "lab-pth", role: "dx", why: "Low in hypoparathyroidism" }
      ]}}
    ]},
    { type: "emergency", title: "Tetany / hypoPTH — treatment flowchart", src: "p.284", steps: [
      { decision: "Acute or chronic?", branches: [
        { label: "Acute tetany", steps: [{ t: "==IV 10% calcium gluconate over 10 minutes==", node: ["em-tetany", "rx-calcium-gluconate"], role: "emerg", type: "emergency", why: "Emergency management of tetany" }] },
        { label: "Post-surgical hypoPTH", steps: [{ t: "==Teriparatide SC==", node: "rx-teriparatide", role: "first", type: "treatment", why: "Surgically induced hypoparathyroidism" }] },
        { label: "Chronic", steps: [{ t: "Calcium + vitamin D supplements", node: "rx-vitd", role: "first", type: "treatment", why: "Hypoparathyroidism maintenance" }] }
      ]}
    ]},
    { type: "diagnosis", title: "Pseudo & pseudo-pseudo hypoPTH", src: "p.285", items: [
      { table: { head: ["", "Hypo-PTH", "Pseudo-hypoPTH", "Pseudo-pseudo"], rows: [
        ["PTH", "↓", "==↑ (resistance)==", "Normal"],
        ["Cause", "Autoimmune", "==GNAS gene, chr 20== — inactive GPCR", "Same gene, kidney spared"],
        ["Inheritance", "—", "==Maternal== (imprinting)", "==Paternal=="],
        ["PO₄", "↑", "↑", "Normal"],
        ["Picture", "Neurological", "==AHO==", "AHO"],
        ["Urinary cAMP", "—", "Low", "—"],
        ["Treatment", "Ca + vit D", "No definitive treatment", "—"]
      ]}},
      { mnemonic: "Mum gives Pseudo · Pop gives Pseudo-pseudo", t: "imprinting rule" },
      { h: "Albright hereditary osteodystrophy (AHO)" },
      "Short stature · obesity · low IQ",
      "Brachydactyly → short 4th & 5th metacarpals / metatarsals",
      "==Knuckle-knuckle-dimple-dimple = Archibald sign=="
    ]},
    { type: "treatment", title: "Rickets", src: "p.286–287", items: [
      { t: "**Nutritional:** Ca ↓ (PTH ↑) · PO₄ ↓ · SAP ↑ · vit D3 ↓ → treat ==6 lakh IU vitamin D3==", node: "rx-vitd", role: "first", why: "Nutritional rickets" },
      { table: { caption: "Vitamin D-dependent rickets", head: ["", "Type 1", "Type 2"], rows: [
        ["Defect", "1α-hydroxylase gene → no active vit D", "End-organ resistance to vit D3"],
        ["Treatment", "Vitamin D3", "==IV calcium infusion=="]
      ]}},
      { verify: "Type 1 VDDR is usually treated with calcitriol (active vitamin D), since 1α-hydroxylation is the missing step; notes say 'vitamin D3'. Verify.", t: "Type 1 treatment as printed: vitamin D3" }
    ]},
    { type: "diagnosis", title: "Osteoporosis", src: "p.286", items: [
      "Post-menopausal woman with ==severe low back pain and bone pain==",
      "Ca · PO₄ · SAP all ==normal==",
      { t: "==IOC → DEXA scan==", node: "img-dexa", role: "ioc", why: "Osteoporosis diagnosis" },
      { t: "T-score ≤ **−2.5 SD** · Z-score ≤ −2.5 SD (as printed)", verify: "The −2.5 cut-off belongs to the T-score; Z-score ≤ −2.0 is the usual 'below expected for age' cut-off. Verify." }
    ]},
    { type: "treatment", title: "Osteoporosis — drugs", src: "p.286", items: [
      { table: { head: ["Drug", "Watch for"], rows: [
        { c: ["==Bisphosphonates== (zoledronate, risedronate)", "GERD · >3–5 y → ==atypical (chalk-stick) femur fracture, osteonecrosis of jaw=="], node: "rx-bisphosphonate", role: "first", why: "Osteoporosis first-line" },
        { c: ["Calcitonin nasal spray", "—"], node: "rx-calcitonin", role: "second", why: "Osteoporosis option" },
        { c: ["Teriparatide", "==Osteosarcoma risk=="], node: "rx-teriparatide", role: "second", why: "Anabolic osteoporosis therapy" },
        { c: ["Denosumab", "Notes: 'osteoclasts ↑, osteoblasts normal'"], node: "rx-denosumab", role: "second", why: "Osteoporosis anti-resorptive", verify: "Denosumab blocks RANKL, so osteoclast activity goes DOWN; the notes' '↑' looks like a typo." }
      ]}},
      { t: "Cinacalcet → ==not effective== in osteoporosis (MCQ)", node: "rx-cinacalcet", role: "ci", why: "Calcimimetic has no role in osteoporosis" }
    ]},
    { type: "mcq", title: "MCQs in the notes", src: "p.288", items: [
      { t: "Renal colic, constipation, rib pain + **low Ca, high PO₄, high PTH** → ==CKD with metabolic bone disease== (c)", node: "lab-pth", role: "dx", why: "MCQ: secondary hyperparathyroidism" },
      { t: "Post-menopausal fragility fractures, normal labs → NOT effective: ==cinacalcet== (b)", node: "rx-cinacalcet", role: "ci", why: "MCQ: cinacalcet has no osteoporosis role" }
    ]}
  ],
  sources: [
    "Primary: PrepLadder Medicine notes, PDF pp. 280–288 (Disorders of Parathyroid Gland). 'Stones, bones, groans & moans' and 'HAS MILK-Intoxication' from the notes.",
    "† = standard reference range not printed in the notes. Davidson's / Boloor's not available — not used."
  ]
});
