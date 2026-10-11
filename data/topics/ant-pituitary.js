/* Diseases of Anterior Pituitary (+ endocrinology image-based questions). Primary source: PrepLadder notes PDF pp. 293–297.
   Mnemonics are memory aids written for this chart. */
MF.addTopic({
  id: "ant-pituitary",
  title: "Diseases of Anterior Pituitary",
  aka: ["acromegaly", "GH", "IGF-1", "Sheehan syndrome", "Simmonds disease", "hypopituitarism", "GH deficiency", "prolactinoma", "galactorrhoea", "confirmatory endocrine tests"],
  oneLine: "Acromegaly (IGF-1 → OGTT fails to suppress GH → MRI → SRL / TSS / pegvisomant), Sheehan & Simmonds, GH deficiency, prolactinoma, and the confirmatory-test table for all endocrine disorders.",
  flow: ["Spade hands / galactorrhoea / post-partum failure", "Screen: IGF-1 · prolactin · pituitary hormones", "Confirm: OGTT GH suppression · arginine test", "MRI head → adenoma", "SRL → TSS → pegvisomant · cabergoline · replace hormones"],
  related: ["cushing", "thyroid", "adrenal", "dm-1"],
  bubbles: [
    { type: "etiology", title: "Acromegaly — causes", src: "p.293", items: [
      "GH excess **after puberty** (before puberty → gigantism)",
      { t: "M/c → ==somatotroph adenoma== (GH ↑)", role: "hy" },
      "Mixed mammo-somatotroph adenoma → GH + prolactin (galactorrhoea, hypogonadism)",
      "Hypothalamic hamartoma / choristoma → lost GH inhibition",
      "Extra-pituitary GHRH → carcinoid tumour",
      "Extra-pituitary GH · ectopic pituitary tissue (nasopharynx) · pancreatic tumour"
    ]},
    { type: "clinical", title: "Acromegaly — features", src: "p.293–294", items: [
      { mnemonic: "Big Hands, Big Face, Big Heart", t: "the three things that grow" },
      { h: "Hands & feet" },
      "==Spade-like hands== · gloves, rings, shoes get bigger · thick fingers",
      { t: "Heel pad ↑ → indirect marker of soft-tissue growth (X-ray >25 mm)", node: "img-xray", role: "dx", why: "Heel-pad thickness >25 mm in acromegaly" },
      { h: "Face" },
      "Frontal bossing · coarse face · big nose · macroglossia",
      "==Prognathism== → gaps between lower incisors",
      "Hyperhidrosis · oily skin (↑ sebum)",
      { t: "==Height stays the same== (epiphyses fused)", role: "hy" },
      { h: "Systemic" },
      { t: "==Cardiomyopathy → CHF / arrhythmia = m/c cause of death== (life expectancy ↓ 10 y)", role: "danger" },
      "Stroke · OSA → systemic & pulmonary HTN",
      "Arthropathy · kyphosis · carpal tunnel syndrome · weight ↑",
      "↑ Colonic polyps and cancer",
      { t: "Prediabetic sugars → FPG 100–125 · 2-h PG 140–199", node: "lab-fpg", role: "dx", why: "GH is anti-insulin → impaired glucose" },
      "Galactorrhoea",
      { t: "± ==Bitemporal hemianopia== (macroadenoma >10 mm)", node: "con-bitemporal", role: "danger", why: "Pituitary macroadenoma compresses the chiasm" },
      { h: "Causes of galactorrhoea" },
      { mnemonic: "PAC-HA", lines: [["P", "Prolactinoma"], ["A", "Antipsychotics"], ["C", "Chronic renal failure"], ["H", "Hypothyroidism (primary)"], ["A", "Acromegaly"]] }
    ]},
    { type: "investigation", title: "Acromegaly — work-up", src: "p.294", items: [
      { table: { head: ["Test", "Acromegaly", "Normal", "Role"], rows: [
        { c: ["IGF-1", "↑", "{N:lab-igf1}", "==Screening=="], node: "lab-igf1", role: "screen", why: "Acromegaly screen" },
        { c: ["==75 g OGTT → GH==", "==Fails to suppress==", "{N:bed-gh-ogtt}", "==IOC=="], node: "bed-gh-ogtt", role: "ioc", why: "Acromegaly confirmation (IOC)", hl: true },
        { c: ["Prolactin", "↑ in mixed adenoma", "{N:lab-prolactin}", "Co-secretion"], node: "lab-prolactin", role: "dx", why: "Mixed GH-prolactin adenoma" },
        { c: ["MRI head", "Adenoma (macro >10 mm → field defect)", "—", "Localise"], node: "img-mri-brain", role: "dx", why: "Localise GH-secreting adenoma" },
        { c: ["X-ray foot", "Heel pad **>25 mm**", "—", "Soft tissue"], node: "img-xray", role: "dx", why: "Heel-pad thickness" }
      ]}},
      { mnemonic: "IGF Identifies · OGTT Obligates", t: "IGF-1 screens, OGTT confirms" }
    ]},
    { type: "treatment", title: "Acromegaly treatment flowchart", src: "p.294", steps: [
      { t: "==1st line: somatostatin receptor ligand== → lanreotide (SST2) · pasireotide (SST5) — shrinks tumour pre-op", node: "rx-ssa", role: "first", type: "treatment", why: "Acromegaly first line (pre-operative shrinkage)" },
      { t: "==Trans-sphenoidal surgery==", node: "proc-tss", role: "def", type: "treatment", why: "Acromegaly definitive surgery" },
      { decision: "Recurrence or poor SRL response?", branches: [
        { label: "Yes", steps: [{ t: "==Pegvisomant== — blocks GH receptors", node: "rx-pegvisomant", role: "second", type: "treatment", why: "Recurrent / SRL-resistant acromegaly" }] },
        { label: "No", steps: [{ t: "Follow up IGF-1", node: "lab-igf1", role: "monitor", type: "followup", why: "Acromegaly follow-up" }] }
      ]}
    ]},
    { type: "etiology", title: "Sheehan & Simmonds", src: "p.294–295", items: [
      { table: { head: ["", "Sheehan syndrome", "Simmonds disease"], rows: [
        ["Cause", "==Post-partum haemorrhage== → anterior pituitary infarction", "==Non-obstetric== damage: AVM rupture · HTN · sickle cell · trauma"],
        ["Course", "Chronic > acute", "Panhypopituitarism — all 6 hormones ↓"]
      ]}},
      { t: "Sheehan's adrenal side", see: "adrenal" }
    ]},
    { type: "clinical", title: "Sheehan — hormone by hormone", src: "p.295", items: [
      { table: { head: ["Hormone ↓", "Result"], rows: [
        { c: ["==GH (1st to fall)==", "Hypoglycaemia → emotional lability"], hl: true },
        ["ACTH", "Cortisol ↓ → hypoglycaemia"],
        ["LH / FSH", "==Secondary amenorrhoea / infertility=="],
        { c: ["TSH", "2° hypothyroidism → weight gain, constipation, alopecia"], see: "thyroid" },
        ["Prolactin", "==Failure of lactation== (first clue after delivery)"]
      ]}},
      { mnemonic: "GH Goes first · Lactation Lost", t: "Sheehan order" },
      { t: "MRI head → damaged pituitary · prolactin ↓", node: ["img-mri-brain", "lab-prolactin"], role: "dx", why: "Sheehan: damaged gland, low prolactin" }
    ]},
    { type: "treatment", title: "Sheehan — hormone replacement", src: "p.295", steps: [
      { t: "==1st: dexamethasone== (replace cortisol)", node: "rx-dexamethasone", role: "first", type: "treatment", why: "Sheehan: cortisol replacement first" },
      { t: "Levothyroxine for ↓ TSH, T4, T3", node: "rx-levothyroxine", role: "first", type: "treatment", why: "Secondary hypothyroidism" },
      { t: "Combined OCP → oestrogen (prevents osteoporosis) + progesterone (withdrawal bleed) · men → testosterone", node: "rx-hrt", role: "first", type: "treatment", why: "Gonadotrophin deficiency" },
      { t: "==Fludrocortisone NOT needed== (aldosterone is RAAS-driven, not ACTH)", node: "rx-fludrocortisone", role: "ci", type: "pearl", why: "Pituitary failure spares aldosterone" },
      { mnemonic: "Steroid before Thyroxine", t: "always replace cortisol first (thyroxine alone can precipitate crisis)" }
    ]},
    { type: "diagnosis", title: "GH deficiency (isolated hypopituitarism)", src: "p.295–296", items: [
      "Only GH ↓",
      { mnemonic: "3 S's", lines: [["S", "==Short stature (<3rd centile)=="], ["S", "Shrill voice"], ["S", "Sweet doll-like face"]] },
      { table: { head: ["Test", "Note"], rows: [
        { c: ["==Insulin challenge test==", "No GH rise despite low sugar · ==risky (hypoglycaemia)=="], node: "bed-gh-stim", role: "dx", why: "GH deficiency: provocation test" },
        { c: ["==Arginine challenge test==", "==Safer== → confirmatory"], node: "bed-gh-stim", role: "confirm", why: "GH deficiency confirmation (safer)", hl: true }
      ]}},
      { t: "Treat → ==recombinant GH injection till puberty==", node: "rx-gh", role: "first", why: "GH deficiency" }
    ]},
    { type: "investigation", title: "Confirmatory tests — all endocrine diseases", src: "p.296", wide: true, items: [
      { table: { head: ["Disorder", "Confirmatory test"], rows: [
        { c: ["Acromegaly", "Glucose challenge (OGTT GH suppression)"], node: "bed-gh-ogtt", role: "confirm", why: "Acromegaly confirmation" },
        { c: ["Conn syndrome", "Saline infusion / salt loading"], node: "bed-saline-infusion", role: "confirm", why: "Conn confirmation", see: "adrenal" },
        { c: ["Addison disease", "==ACTH stimulation / cosyntropin=="], node: "bed-acth-stim", role: "confirm", why: "Addison confirmation" },
        ["Diabetes insipidus", "Water deprivation · loss of pituitary bright spot on MRI"],
        ["SIADH", "Water loading test"],
        { c: ["Hypopituitarism (GH)", "Arginine challenge"], node: "bed-gh-stim", role: "confirm", why: "GH deficiency confirmation" },
        { c: ["Cushing disease", "Midnight salivary cortisol / low-dose DST"], node: ["lab-salivary-cortisol", "bed-ldst"], role: "confirm", why: "Cushing confirmation", see: "cushing" },
        { c: ["Phaeochromocytoma", "Plasma free metanephrines"], node: "lab-metanephrines", role: "confirm", why: "Phaeo confirmation" }
      ]}},
      { mnemonic: "Excess → try to SUPPRESS · Deficiency → try to STIMULATE", t: "the logic behind every confirmatory test" }
    ]},
    { type: "diagnosis", title: "Prolactinoma", src: "p.296", items: [
      { t: "M/c ==functioning== pituitary tumour → prolactinoma", role: "hy" },
      "M/c pituitary tumour overall → non-functioning adenoma",
      { chain: ["Prolactin ↑", "Dopamine-like brake on LH/FSH", "Anovulation"] },
      "Features → anovulation · 2° amenorrhoea / infertility · visual deficits · headache",
      { table: { head: ["Test", "Finding", "Normal"], rows: [
        { c: ["Serum prolactin", "==>200 µg/L suggestive==", "{N:lab-prolactin}"], node: "lab-prolactin", role: "dx", why: "Prolactinoma: >200 µg/L", hl: true },
        { c: ["MRI head", "Pituitary adenoma", "—"], node: "img-mri-brain", role: "dx", why: "Localises prolactinoma" }
      ]}}
    ]},
    { type: "treatment", title: "Prolactinoma treatment", src: "p.296", steps: [
      { decision: "Wants pregnancy?", branches: [
        { label: "No", steps: [{ t: "==Cabergoline== (long-acting dopamine agonist)", node: "rx-dopamine-agonist", role: "first", type: "treatment", why: "Prolactinoma first line" }] },
        { label: "Yes", steps: [{ t: "==Bromocriptine==", node: "rx-dopamine-agonist", role: "first", type: "treatment", why: "Prolactinoma when pregnancy desired" }] }
      ]},
      { mnemonic: "Cabergoline = Common · Bromocriptine = Baby", t: "drug choice" }
    ]},
    { type: "mcq", title: "MCQs & image-based questions (notes)", src: "p.296–297", items: [
      { t: "Prolactin level indicating prolactinoma → ==>200 µg/L== (d)", node: "lab-prolactin", role: "dx", why: "MCQ" },
      { t: "Cushing image (stairs, weight gain, striae, ↑ midnight cortisol) → NOT correct: ==hyperkalaemia== (c) — Cushing gives hypokalaemic alkalosis", see: "cushing", role: "hy" },
      "Hypokalaemic alkalosis → Conn · Liddle · Cushing",
      { t: "25-y man, spade hands, prognathism → best diagnosed by ==OGTT== (a); IGF-1 is the screen", node: "bed-gh-ogtt", role: "ioc", why: "MCQ: acromegaly diagnosis" }
    ]}
  ],
  sources: [
    "Primary: PrepLadder Medicine notes, PDF pp. 293–297 (Diseases of Anterior Pituitary + Endocrinology image-based questions).",
    "† = standard reference range not printed in the notes. Davidson's / Boloor's not available — not used."
  ]
});
