/* Pancreatic Neuroendocrine Tumors. Primary source: PrepLadder notes PDF pp. 274–279.
   CAPE-IAS, 4D, DDG, WDHA and DM-CL mnemonics are from the notes. */
MF.addTopic({
  id: "pnet",
  title: "Pancreatic Neuroendocrine Tumors",
  aka: ["PNET", "insulinoma", "glucagonoma", "somatostatinoma", "VIPoma", "WDHA", "Whipple triad", "72-hour fast", "hypoglycaemia differentials", "secretory diarrhoea"],
  oneLine: "Insulinoma (Whipple triad → 72-h fast → Ga-68 PET → diazoxide/surgery), glucagonoma (4 D's), somatostatinoma (DDG), VIPoma (WDHA) and the hypoglycaemia differential.",
  flow: ["Hypoglycaemia <54 or a NET syndrome", "Whipple triad → 72-h fasting test", "Ga-68 DOTATATE PET/CT > EUS > SRS", "Small meals + diazoxide · somatostatin analogues · surgery", "Malignant → everolimus · PRRT"],
  related: ["dm-2", "adrenal", "thyroid"],
  bubbles: [
    { type: "definition", title: "Big picture", src: "p.274", items: [
      { t: "M/c **functioning** PNET → ==insulinoma==", role: "hy" },
      { t: "M/c **non-functioning** PNET → ==PP-oma (pancreatic polypeptide)==", role: "hy" },
      "PP-oma → abdominal pain · obstructive jaundice · weight loss",
      { table: { caption: "Hypoglycaemia levels", head: ["Level", "Glucose"], rows: [
        ["1", "55–70 mg/dL"],
        { c: ["2", "==<54 mg/dL== (cut-off)"], hl: true },
        ["3", "Any value + needs assistance"]
      ]}},
      "Counter-regulatory hormones ↑ → glucagon · cortisol · catecholamines · growth hormone"
    ]},
    { type: "emergency", title: "Symptomatic hypoglycaemia — treat", src: "p.274", steps: [
      { decision: "Can swallow / IV access?", branches: [
        { label: "Conscious, can swallow", steps: [{ t: "**Oral glucose**", type: "treatment" }] },
        { label: "IV access", steps: [{ t: "==IV 25–50% dextrose==", node: ["rx-dextrose", "em-hypoglycemia"], role: "emerg", type: "emergency", why: "Symptomatic hypoglycaemia rescue" }] },
        { label: "No IV access", steps: [{ t: "==Glucagon SC==", node: "rx-glucagon", role: "rescue", type: "emergency", why: "Hypoglycaemia without IV access" }] }
      ]}
    ]},
    { type: "diagnosis", title: "Hypoglycaemia differentials", src: "p.274", items: [
      { mnemonic: "CAPE-IAS (notes)", lines: [["C", "CKD — insulin is cleared by the kidney · CLD"], ["A", "Alcoholic liver disease"], ["P", "Poor nutrition"], ["E", "Extra-pancreatic tumour — leukaemia / lymphoma"], ["I", "==Insulinoma=="], ["A·S", "Abuse of Sulfonylureas / insulin"]] }
    ]},
    { type: "clinical", title: "Insulinoma — features", src: "p.274–275", items: [
      { mnemonic: "Whipple's triad", lines: [["1", "Symptoms of hypoglycaemia (emotional outburst)"], ["2", "Blood sugar ==<45 mg/dL=="], ["3", "==Immediate relief with IV glucose=="]] },
      "Eats often → **weight gain** (insulin ↑)",
      "Emotional lability · mood swings · ↓ concentration",
      "Palpitations + diaphoresis (sympathetic)",
      { table: { head: ["Fact", "Value"], rows: [
        ["Malignant", "**5–15%**"],
        ["Size at diagnosis", "~**2 cm**"],
        ["Site", "Head, neck, tail of pancreas"],
        ["Association", "MEN 1"]
      ]}},
      { t: "In MEN 1 the commoner pancreatic tumour is ==ZES (gastrinoma) > insulinoma==", role: "hy" }
    ]},
    { type: "investigation", title: "Insulinoma — work-up", src: "p.275", wide: true, items: [
      { h: "72-hour fasting test" },
      { table: { head: ["Parameter", "Insulinoma", "Normal (fasting)"], rows: [
        { c: ["Random blood sugar", "↓", "{N:lab-rbs}"], node: "bed-72h-fast", role: "gold", why: "Provokes fasting hypoglycaemia" },
        { c: ["RIA insulin", "==↑==", "Suppressed in hypoglycaemia †"], node: "lab-insulin", role: "dx", why: "Inappropriately high insulin" },
        { c: ["RIA C-peptide", "==↑==", "{N:lab-cpeptide}"], node: "lab-cpeptide", role: "dx", why: "Endogenous insulin (vs injected)", hl: true },
        { c: ["Proinsulin", "↑", "{N:lab-proinsulin}"], node: "lab-proinsulin", role: "dx", why: "Raised in insulinoma" },
        ["Insulin : glucagon ratio", "**>0.3**", "<0.3 (notes)"],
        { c: ["Plasma β-OH butyrate", "**Low**", "{N:lab-bohb}"], node: "lab-bohb", role: "dx", why: "Insulin suppresses ketogenesis" },
        { c: ["Urine sulfonylureas", "Negative", "{N:lab-urine-su}"], node: "lab-urine-su", role: "dx", why: "Excludes factitious hypoglycaemia" }
      ]}},
      { mnemonic: "Injected insulin = C-peptide Crashes", t: "insulinoma & sulfonylurea → C-peptide ↑; exogenous insulin → C-peptide ↓" },
      { h: "Imaging (best → least)" },
      { t: "==Ga-68 DOTATATE PET/CT== > endoscopic ultrasound > somatostatin-receptor scintigraphy", node: ["img-ga68-dotatate", "img-eus"], role: "ioc", why: "Insulinoma localisation" }
    ]},
    { type: "treatment", title: "Insulinoma treatment flowchart", src: "p.275", steps: [
      { t: "**Frequent small meals**", type: "treatment" },
      { t: "==DOC: diazoxide== → opens K⁺ channels → β-cell hyperpolarised → ↓ insulin release", node: "rx-diazoxide", role: "first", type: "treatment", why: "Insulinoma DOC" },
      { t: "Lanreotide → ↓ GH and sugar → can ==worsen== symptoms", role: "ci", type: "complication" },
      { decision: "Malignant?", branches: [
        { label: "Yes", steps: [{ t: "mTOR inhibitor ==everolimus== · radiolabelled somatostatin", node: ["rx-everolimus", "rx-prrt"], role: "first", type: "treatment", why: "Malignant insulinoma" }] },
        { label: "No", steps: [{ t: "Medical control as above", type: "treatment" }] }
      ]}
    ]},
    { type: "clinical", title: "Glucagonoma", src: "p.276–277", items: [
      { mnemonic: "4 D's (notes)", lines: [["D", "Diabetes mellitus + ==migratory necrolytic erythema=="], ["D", "Dermatitis"], ["D", "==Deep vein thrombosis=="], ["D", "Depression"]] },
      { table: { head: ["Feature", "Value"], rows: [
        ["Size", "**5–10 cm**"],
        ["Site", "==Tail of pancreas=="],
        ["Metastasis", "Common (++)"],
        { c: ["Plasma glucagon", "**>1000 pg/mL**"], verify: "Notes print 'plasma glucose levels >1000 pg/mL' — pg/mL is a glucagon unit, so this is glucagon. Treat as a typo." },
        { c: ["Imaging", "MRI / CT abdomen → tumour ± metastasis"], node: "img-ct-abdomen", role: "dx", why: "Glucagonoma localisation" }
      ]}},
      { t: "Treat → radiolabelled somatostatin analogues · debulking surgery", node: "rx-prrt", role: "first", why: "Glucagonoma" },
      { h: "Migratory necrolytic erythema — causes" },
      "Glucagonoma · myeloproliferative disorders · malnutrition · short bowel syndrome",
      { h: "Other DM skin signs (notes)" },
      "Necrobiosis lipoidica → reddish-brown shin lesion with central clearing · T1DM",
      { t: "Acanthosis nigricans → velvety dark plaques, neck/axilla · metabolic syndrome", node: "con-acanthosis", why: "Skin marker of insulin resistance" }
    ]},
    { type: "clinical", title: "Somatostatinoma & VIPoma", src: "p.277", items: [
      { table: { head: ["", "Somatostatinoma", "VIPoma"], rows: [
        ["Mnemonic", "==DDG== (notes)", "==WDHA== (notes)"],
        ["Features", "**D**iabetes (insulin blocked) · **D**iarrhoea/steatorrhoea (amylase blocked) · **G**allstones/sludge (CCK blocked) · hypochlorhydria", "**W**atery **D**iarrhoea — pancreatic cholera, ==rice-water stool== · **H**ypokalaemia · **A**chlorhydria · flushing"],
        ["Source", "—", "VIP (28 amino acids) from pancreatic F cells, carcinoid"],
        { c: ["Treatment", "—", "==Octreotide=="], node: "rx-octreotide", role: "first", why: "VIPoma symptom control", hl: true }
      ]}},
      { t: "VIPoma diarrhoea → ==stool osmotic gap <50 = secretory==", role: "hy" }
    ]},
    { type: "diagnosis", title: "Secretory vs osmotic diarrhoea", src: "p.277", items: [
      { t: "Stool osmotic gap = **290 − 2 (Na⁺ + K⁺)**", role: "hy" },
      { table: { head: ["Gap", "Type"], rows: [
        { c: ["**<50**", "==Secretory=="], hl: true },
        ["**>100**", "Osmotic"]
      ]}},
      { mnemonic: "DM-CL (notes)", t: "causes of secretory diarrhoea", lines: [["D", "Diabetic diarrhoea"], ["M", "Medullary thyroid Ca (calcitonin, VIP)"], ["C", "Carcinoid · cholera · pancreatic cholera (VIPoma)"], ["L", "Laxative abuse"]] }
    ]},
    { type: "pearl", title: "Neuroectodermal tumours (notes)", src: "p.278", items: [
      "Primitive neuroectodermal tumour (pNET) → e.g. ==neuroblastoma==",
      "Peripheral PNET (ppNET) → medulloblastoma, Ewing sarcoma",
      { t: "Don't confuse pNET (neuroectodermal) with PNET (pancreatic NET)", role: "hy" }
    ]},
    { type: "mcq", title: "MCQs in the notes", src: "p.279", items: [
      { t: "Watery diarrhoea, dehydration, hypokalaemia, achlorhydria → ==VIPoma== (c) [NEET PG]", role: "hy" },
      { t: "Dermatitis, diarrhoea, DM, DVT → ==glucagonoma== (a) [FMGE]", role: "hy" }
    ]}
  ],
  sources: [
    "Primary: PrepLadder Medicine notes, PDF pp. 274–279 (Pancreatic Neuroendocrine Tumors). CAPE-IAS, 4 D's, DDG, WDHA, DM-CL mnemonics from the notes.",
    "† = standard reference range not printed in the notes. Davidson's / Boloor's not available — not used."
  ]
});
