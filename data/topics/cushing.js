/* Cushing Syndrome. Primary source: PrepLadder notes PDF pp. 260–263.
   COP-HAS-ID mnemonic is from the notes; others were written for this chart. */
MF.addTopic({
  id: "cushing",
  title: "Cushing Syndrome",
  aka: ["hypercortisolism", "Cushing disease", "ectopic ACTH", "dexamethasone suppression test", "Nelson syndrome", "IPSS"],
  oneLine: "Too much cortisol: screen (UFC · overnight DST · midnight salivary cortisol) → ACTH level splits pituitary / ectopic vs adrenal → surgery or blockers.",
  flow: ["Moon face · striae · proximal myopathy", "Screen: 24-h UFC · 1 mg DST · midnight salivary cortisol (IOC)", "Plasma ACTH: >15 dependent · <5 independent", "Localise: MRI · CRH · HDDST · IPSS · CT", "TSS · adrenalectomy · mitotane · blockers"],
  related: ["adrenal", "dm-1", "ant-pituitary"],
  bubbles: [
    { type: "definition", title: "Physiology & definition", src: "p.260", items: [
      "Cortisol is released in **pulses** with a diurnal rhythm",
      "Peak → **6 am – 12 pm** (75% of daily cortisol made in the morning)",
      "Lowest → **midnight (12 am)**",
      { t: "==Earliest sign of Cushing → loss of diurnal variation==", role: "hy" },
      { mnemonic: "Morning high, Midnight low", t: "Cushing = midnight stays high (hence midnight salivary cortisol)" }
    ]},
    { type: "etiology", title: "Causes", src: "p.260", items: [
      { t: "M/c overall → ==iatrogenic steroids== (exogenous)", node: "rx-steroids", why: "Exogenous steroids are the m/c cause of Cushing syndrome", role: "hy" },
      { t: "M/c ACTH-dependent → ==pituitary adenoma = Cushing disease== (endogenous)", role: "hy" },
      { table: { head: ["Cause", "Cortisol", "ACTH", "Note"], rows: [
        ["Iatrogenic steroids", "↑", "↓ (feedback)", "M/c overall"],
        { c: ["Pituitary adenoma (Cushing **disease**)", "↑", "↑", "F:M = 4:1 · m/c ACTH-dependent"], hl: true },
        ["Ectopic ACTH", "↑", "↑↑", "Carcinoid (bronchus, pancreas) · ==oat-cell lung Ca== · medullary thyroid Ca · phaeo"],
        ["Adrenal adenoma", "↑", "↓", "Autonomous · ACTH-independent"]
      ]}},
      { mnemonic: "Disease = Head · Syndrome = Anywhere", t: "Cushing DISEASE is only the pituitary cause" }
    ]},
    { type: "clinical", title: "Clinical features", src: "p.261", items: [
      { mnemonic: "COP-HAS-ID (notes)", lines: [["C", "Central adiposity (centripetal obesity)"], ["O", "Osteoporosis"], ["P", "Proximal myopathy — can't climb stairs"], ["H", "Hirsutism"], ["A", "Amenorrhoea"], ["S", "==Striae purplish >1 cm==, thin skin"], ["I", "Impaired glucose tolerance"], ["D", "Diastolic hypertension"]] },
      { h: "Look" },
      "Moon face · facial plethora",
      "Buffalo hump (dorso-cervical fat pad)",
      "Easy bruising",
      { h: "Why each happens" },
      { table: { head: ["Feature", "Mechanism"], rows: [
        { c: ["Sugar ↑ (FBS >126)", "Cortisol + insulin resistance"], node: "lab-fpg", role: "dx", why: "Steroid-induced hyperglycaemia" },
        ["HTN + ==hypokalaemic alkalosis==", "Cortisol activates ENaC → salt/water ↑, K⁺/H⁺ lost"],
        ["Hirsutism, amenorrhoea", "Cortisol on sex-steroid receptors (androgen effect)"],
        { c: ["Hyperpigmentation ± (knuckles, scars)", "Only with ==ectopic ACTH== (carcinoid)"], hl: true },
        { c: ["DVT / PE", "==Hypercoagulable state=="], node: "con-hypercoag", role: "danger", why: "Cushing raises thrombosis risk" },
        ["Infections", "Eosinopenia + immune suppression"]
      ]}},
      { t: "Notes add: 'HTN with hypokalemic acidosis is seen in Conn's syndrome'", verify: "Conn's gives hypokalaemic ALKALOSIS (as the adrenal chapter states). 'Acidosis' here looks like a typo." }
    ]},
    { type: "investigation", title: "Work-up — screen & confirm", src: "p.261", wide: true, items: [
      { table: { head: ["Test", "Cushing result", "Normal", "Role"], rows: [
        { c: ["24-h urinary free cortisol", "==↑ ≥2×==", "{N:lab-ufc}", "Screen"], node: "lab-ufc", role: "screen", why: "Cushing screen (≥2× rise)" },
        { c: ["Overnight DST — 1 mg dexa at 11 pm", "8 am cortisol **>50 nmol/L**", "{N:bed-dst-1mg}", "Screen"], node: "bed-dst-1mg", role: "screen", why: "Failure to suppress = Cushing" },
        { c: ["==Midnight salivary cortisol==", "**>5 nmol/L**", "{N:lab-salivary-cortisol}", "==IOC=="], node: "lab-salivary-cortisol", role: "ioc", why: "IOC for Cushing syndrome (loss of midnight nadir)", hl: true },
        { c: ["Low-dose DST — 0.5 mg 6-hrly × 2 d", "Cortisol **>50 nmol/L**", "{N:bed-ldst}", "Confirm if still unclear"], node: "bed-ldst", role: "confirm", why: "Confirms Cushing syndrome" },
        { c: ["Plasma ACTH", ">15 → dependent · <5 → independent", "{N:lab-acth}", "==Splits the cause=="], node: "lab-acth", role: "dx", why: "ACTH-dependent vs independent" }
      ]}},
      { mnemonic: "2× · 50 · 5", t: "UFC ≥2× · DST cortisol >50 nmol/L · salivary >5 nmol/L" }
    ]},
    { type: "diagnosis", title: "Localisation flowchart", src: "p.262", steps: [
      { t: "Cushing confirmed → **plasma ACTH**", node: "lab-acth", role: "dx", type: "investigation", why: "Decides the branch" },
      { decision: "ACTH level?", branches: [
        { label: "<5 pg/mL → ACTH-independent", steps: [
          { t: "Unenhanced CT abdomen", node: "img-ct-abdomen", role: "ioc", type: "imaging", why: "Finds the adrenal adenoma" },
          { t: "Adrenal adenoma", type: "diagnosis" }
        ]},
        { label: ">15 pg/mL → ACTH-dependent", steps: [
          { t: "==MRI pituitary== (first test)", node: "img-mri-brain", role: "init", type: "imaging", why: "First test in ACTH-dependent Cushing (MCQ)" },
          { t: "CRH test (100 µg IV → ACTH ↑ >40% at 15 min) + high-dose DST (2 mg 6-hrly × 2 d → cortisol ↓ >50%)", node: ["bed-crh", "bed-hddst"], role: "dx", type: "investigation", why: "Pituitary vs ectopic source" },
          { decision: "CRH + HDDST result", branches: [
            { label: "Both + (40% spike, 50% suppression)", steps: [{ t: "==Cushing disease== (pituitary)", type: "diagnosis" }] },
            { label: "Equivocal", steps: [{ t: "==IPSS==: central : peripheral ACTH >2 → pituitary", node: "proc-ipss", role: "confirm", type: "investigation", why: "Resolves equivocal pituitary vs ectopic" }] },
            { label: "Both −", steps: [{ t: "==Ectopic source== → MRI abdomen / CT to find it", node: "img-ct-abdomen", role: "dx", type: "imaging", why: "Search for ectopic ACTH tumour" }] }
          ]}
        ]}
      ]}
    ]},
    { type: "treatment", title: "Treatment flowchart", src: "p.262", steps: [
      { decision: "Source?", branches: [
        { label: "Adrenal adenoma", steps: [{ t: "**Unilateral / bilateral adrenalectomy**", role: "def", type: "treatment" }] },
        { label: "Adrenocortical carcinoma", steps: [{ t: "==Mitotane==", node: "rx-mitotane", role: "first", type: "treatment", why: "Adrenocortical carcinoma" }] },
        { label: "Cushing disease (pituitary)", steps: [{ t: "==Trans-sphenoidal surgery==", node: "proc-tss", role: "def", type: "treatment", why: "Cushing disease (incl. after equivocal tests + IPSS)" }] },
        { label: "Ectopic with metastasis", steps: [
          { t: "Block cortisol synthesis:", node: "rx-steroidogenesis-inh", role: "first", type: "treatment", why: "Inoperable / metastatic ectopic ACTH", items: [
            "Metyrapone — 11β-hydroxylase (oral)",
            "Ketoconazole (oral)",
            "Osilodrostat — aldosterone synthase (oral)",
            "Etomidate infusion (IV)"
          ]}
        ]}
      ]},
      { t: "After **bilateral adrenalectomy** → watch for Nelson syndrome (next)", type: "complication" }
    ]},
    { type: "complication", title: "Nelson syndrome", src: "p.262", items: [
      { chain: ["Bilateral adrenalectomy", "No cortisol feedback", "ACTH ↑↑ (MSH-like)", "==Hyperpigmentation== (knuckles, creases, oral mucosa)"] },
      { t: "Intra-op → ==IV hydrocortisone== (prevents Addisonian crisis)", node: ["rx-hydrocortisone", "em-adrenal-crisis"], role: "emerg", why: "Prevents adrenal crisis after bilateral adrenalectomy" },
      { t: "Post-op → ==oral hydrocortisone lifelong==", node: "rx-hydrocortisone", role: "first", why: "Replacement after bilateral adrenalectomy" },
      "Shows up at follow-up visits"
    ]},
    { type: "mcq", title: "MCQ in the notes", src: "p.263", items: [
      { t: "First investigation for ACTH-dependent Cushing → ==MRI head== (d)", node: "img-mri-brain", role: "init", why: "MCQ: first test in ACTH-dependent Cushing" }
    ]}
  ],
  sources: [
    "Primary: PrepLadder Medicine notes, PDF pp. 260–263 (Cushing Syndrome). COP-HAS-ID mnemonic from the notes.",
    "† = standard reference range not printed in the notes. Davidson's / Boloor's not available — not used."
  ]
});
