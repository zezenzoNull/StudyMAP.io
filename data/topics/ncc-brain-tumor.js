/* Neurocysticercosis & Brain Tumours. Primary source: PrepLadder notes PDF pp. 614–621.
   HIS and "I'm sure outside contact" are from the notes; others written for this chart. */
MF.addTopic({
  id: "ncc-brain-tumor",
  title: "Neurocysticercosis & Brain Tumors",
  aka: ["NCC", "Taenia solium", "cysticercosis", "scolex", "ring enhancing lesion", "starry sky", "tuberculoma", "MR spectroscopy", "albendazole", "meningioma", "glioblastoma", "craniopharyngioma", "medulloblastoma", "brain metastasis", "NF-2", "VHL"],
  oneLine: "NCC: eggs (not pork larvae) → brain cysts → leading acquired epilepsy in India; Gd-MRI scolex, MRS vs tuberculoma, dexamethasone → albendazole + AEDs. Brain tumours: who's commonest, signs, syndromes, treatment.",
  flow: ["Seizures + subcutaneous nodules (pork / fecal-oral)", "Gd-MRI: scolex (absolute) · ring lesions · starry sky", "EITB · MRS (amino acid vs lipid) · fundus · X-ray rice grains", "Dexamethasone → 48–72 h → albendazole 8 d / praziquantel", "AED up to 2 years · VP shunt if ↑ ICP"],
  related: ["epilepsy", "raised-icp", "meningitis-2", "headache"],
  bubbles: [
    { type: "etiology", title: "Life cycle — eggs vs larvae", src: "p.614", items: [
      "Taenia solium (3 m) lives in the ==upper jejunum== · proglottids carry up to 10,000 eggs",
      { table: { head: ["Swallowed", "Result"], rows: [
        { c: ["==Eggs== (faeco-oral, autoinfection, leafy vegetables in contaminated soil)", "Cross gut → blood → muscle / BBB → ==(neuro)cysticercosis=="], hl: true },
        ["==Larvae== (semi-cooked pork)", "==Intestinal tapeworm== only (larvae can't cross the gut)"]
      ]}},
      { mnemonic: "Eggs → Everywhere (cysts) · Pork larvae → Paunch (tapeworm)" },
      { t: "Intermediate host → pig · autoinfection → dirty nails, no hand-washing", add: "In taeniasis the pig is the intermediate host and man the definitive host; in CYSTICERCOSIS the human becomes an accidental, dead-end intermediate host by swallowing eggs (faecal–oral or autoinfection)." },
      { t: "==Leading cause of acquired epilepsy / seizures in India== · leading cause of intracranial calcification", role: "hy", see: "epilepsy" }
    ]},
    { type: "clinical", title: "Types & case", src: "p.615", items: [
      { table: { head: ["Type", "Site", "Result"], rows: [
        ["Cellulose (parenchymal)", "Brain parenchyma", "Cerebritis, seizures"],
        ["Racemose", "Subarachnoid, meninges, ventricles", "Hydrocephalus, arachnoiditis"],
        ["Extraneural", "Muscle, heart, skin, retina", "Lumps all over the body"]
      ]}},
      "Case → 30-y slum rickshaw puller · GTCS / focal seizures · GCS 15 · papilloedema · pea-sized nodules on limbs and back",
      { chain: ["Parasite in brain", "Immune reaction", "Vasogenic oedema", "Seizures"] },
      { t: "Albendazole kills cyst → ==calcification== → can become an epileptogenic focus", role: "hy" }
    ]},
    { type: "investigation", title: "Work-up", src: "p.615", wide: true, items: [
      { table: { head: ["Test", "Finding", "Role"], rows: [
        { c: ["==Gadolinium MRI==", "==Scolex inside cyst== (absolute) · ring-enhancing lesion + oedema", "==IOC=="], node: "img-mri-brain", role: "ioc", why: "NCC imaging of choice", hl: true },
        { c: ["CSF / serum EITB", "Antibodies & antigens", "Major criterion"], node: "lab-eitb", role: "confirm", why: "NCC serology" },
        { c: ["MR spectroscopy", "NCC ==amino-acid peak== · tuberculoma ==lipid peak==", "Differentiate"], node: "img-mrs", role: "dx", why: "NCC vs tuberculoma" },
        ["Fundus", "Subretinal cysticerci · papilloedema", "—"],
        { c: ["X-ray limbs", "==Rice-grain calcification== (dead cysts in muscle)", "Extraneural"], node: "img-xray", role: "dx", why: "Muscle cysticercosis" },
        { c: ["NCCT head", "==Starry-sky appearance==", "—"], node: "img-ncct-head", role: "dx", why: "Multiple NCC lesions" }
      ]}},
      { table: { caption: "MRI stages (several coexist)", head: ["Stage", "Look"], rows: [["Vesicular", "Dark cyst"], ["Colloidal vesicular", "Developing scolex → ring enhancement, oedema, ==symptomatic=="], ["Granular nodular", "Shrinking nodule"], ["Nodular calcified", "Bright dot"]] } },
      { mnemonic: "V-C-G-N: Vesicle → Colloid → Granule → Nodule (calcified)" }
    ]},
    { type: "diagnosis", title: "Diagnostic criteria", src: "p.617", items: [
      { mnemonic: "HIS (notes) — absolute", lines: [["H", "Histology of parasite in brain / cord"], ["I", "Imaging: scolex in cyst"], ["S", "Subretinal cysticercosis"]] },
      { mnemonic: "I'm Sure Outside Contact (notes) — major", lines: [["I", "Immunology — EITB antibodies"], ["O", "Cysticercosis Outside CNS"], ["C", "Household Contact with T. solium"]] },
      "Minor → clinical features · living in endemic area",
      "Confirmative imaging → cyst resolves spontaneously / after cysticidal drug",
      { t: "Diagnosis = ==1 absolute + 2 major==", add: "Del Brutto (2001): DEFINITIVE NCC = one absolute criterion alone, OR two major + one minor + one epidemiological criterion. PROBABLE = one major + two minor, or one major + one minor + one epidemiological, or three minor + one epidemiological.", role: "hy" },
      { table: { caption: "Starry sky elsewhere", head: ["Test", "Disease"], rows: [["CT/MRI head", "NCC"], ["Kidney biopsy", "Post-streptococcal GN"], ["USG liver", "Acute viral hepatitis"], ["Lymph-node biopsy", "Burkitt lymphoma"], ["Echo / cardiac MRI", "Restrictive cardiomyopathy (amyloidosis)"]] } }
    ]},
    { type: "diagnosis", title: "Cysticercus granuloma vs tuberculoma", src: "p.618", items: [
      { table: { head: ["", "Cysticercus granuloma", "Tuberculoma"], rows: [
        ["Shape", "==Round==", "Irregular"],
        ["Nature", "Cystic", "Solid"],
        { c: ["Size", "==≤20 mm==, ring or scolex", "==>20 mm=="], hl: true },
        ["Oedema", "Not enough for midline shift / deficit", "Severe perifocal + focal deficit"],
        ["MRS", "Amino-acid peak", "Lipid peak"]
      ]}}
    ]},
    { type: "treatment", title: "NCC treatment flowchart", src: "p.618", steps: [
      { t: "Vasogenic oedema → ==IV dexamethasone==", node: "rx-dexamethasone", role: "first", type: "treatment", why: "NCC oedema (also blunts reaction to dying cysts)" },
      { t: "After ==48–72 h== of dexamethasone → ==albendazole 8 days== (praziquantel if >1 lesion)", add: "Albendazole 15 mg/kg/day (max 1200 mg) for 10–14 days in most guidelines; for >2 viable cysts give albendazole + praziquantel together. Do NOT give cysticidal drugs for calcified-only lesions or cysticercal encephalitis (massive oedema — steroids only), and examine the fundus first: killing an eye cyst can cause blindness.", node: "rx-albendazole", role: "first", type: "treatment", why: "NCC cysticidal therapy" },
      { t: "AEDs → GTCS valproate · focal carbamazepine / lamotrigine → taper up to ==2 years==", node: ["rx-valproate", "rx-antiepileptic"], role: "first", type: "treatment", why: "NCC seizures" },
      { t: "↑↑ ICP → ==VP shunt==", node: "proc-vp-shunt", role: "def", type: "treatment", why: "NCC hydrocephalus" },
      { t: "Hydatid cyst → albendazole for 28 days (don't mix up)", role: "hy", type: "pearl" },
      { mnemonic: "Steroid first, then kill, then protect (AED 2 y)" }
    ]},
    { type: "definition", title: "Brain tumours — the commonest", src: "p.618–620", items: [
      { table: { head: ["Question", "Answer"], rows: [
        { c: ["M/c brain tumour", "==Metastasis== (oat-cell lung Ca)"], hl: true },
        ["Site of metastasis", "==Grey–white junction=="],
        ["Sources", "Oat-cell lung > breast > malignant melanoma"],
        ["Highest propensity to spread to brain", "==Malignant melanoma=="],
        ["M/c primary", "==Meningioma=="],
        ["Incidence", "Secondaries > meningioma > glioma"],
        ["Worst prognosis (adult)", "==Grade IV glioma (GBM)== — butterfly glioma"],
        ["Fried-egg cells (stereotactic biopsy)", "==Oligodendroglioma=="],
        ["Leptomeningeal / extradural cord spread", "==Ca breast== → CSF cytology, MRI spine"]
      ]}},
      { h: "Meningioma" },
      "Arachnoid cap cells · ↑ after cranial radiation · calcifies",
      { t: "NCCT → well-defined hyperdense lesion with ==dural tail sign==", node: "img-ncct-head", role: "dx", why: "Meningioma sign" },
      "NF-2 (chr 22q, merlin) → bilateral vestibular schwannoma + meningioma · NF-1 → optic glioma",
      "M/c radiation tumours in adults → papillary thyroid Ca, meningioma"
    ]},
    { type: "clinical", title: "Features, tests & treatment", src: "p.619", items: [
      "Impaired cognition · early-morning holocephalic headache (↑ ICP) · migraine-like",
      "Personality change (frontal) · aphasia · arm weakness · ± seizures",
      { t: "IOC → ==gadolinium MRI== (shows vasogenic oedema)", node: "img-mri-brain", role: "ioc", why: "Brain tumour IOC" },
      { t: "MRS → necrosis vs progression", node: "img-mrs", role: "dx", why: "Post-treatment change vs tumour" },
      { table: { head: ["Tumour", "Treatment"], rows: [
        ["Metastasis", "Whole-brain radiation (WBRT) / stereotactic radiosurgery"],
        ["Astrocytoma", "==Temozolomide== · procarbazine, lomustine, vincristine"],
        { c: ["Oedema", "Steroids"], node: "rx-steroids", role: "adjunct", why: "Tumour vasogenic oedema", see: "raised-icp" }
      ]}, add: "Glioblastoma standard (Stupp protocol): maximal safe resection → radiotherapy 60 Gy with daily temozolomide → 6 cycles of adjuvant temozolomide; MGMT-promoter methylation predicts a better response. Median survival is still only ~15 months. PCV (procarbazine, lomustine, vincristine) is used for oligodendrogliomas." }
    ]},
    { type: "diagnosis", title: "Syndromes & paediatric tumours", src: "p.620", items: [
      { table: { head: ["Syndrome", "Tumour"], rows: [
        ["==Cowden==", "Cerebellar ganglioblastoma"],
        ["==VHL==", "Cerebellar ==haemangioblastoma== (from vessels)"],
        ["Turcot", "Medulloblastoma"],
        ["Gardner", "Medulloblastoma + osteomas"],
        ["NF-1", "Optic glioma"],
        ["NF-2", "Meningioma"],
        ["Tuberous sclerosis", "Subependymal astrocytoma"]
      ]}, add: "The Cowden-syndrome lesion is a dysplastic gangliocytoma of the cerebellum (Lhermitte–Duclos disease), caused by PTEN mutation." },
      { table: { caption: "Paediatric", head: ["Question", "Answer"], rows: [
        ["M/c benign · supratentorial", "==Craniopharyngioma=="],
        ["M/c malignant", "==Medulloblastoma== (craniospinal spread)"],
        ["Worst prognosis", "Brainstem glioma"]
      ]}, add: "Overall, the commonest childhood brain tumour is pilocytic astrocytoma (usually cerebellar, benign); most childhood brain tumours are infratentorial, while most adult ones are supratentorial." },
      { h: "Craniopharyngioma" },
      "Rathke's pouch · bimodal (children, ~60 y) · suprasellar ==calcified== cyst",
      "Visual deficit · ==central diabetes insipidus== (polyuria, polydipsia) · headache"
    ]},
    { type: "mcq", title: "MCQs in the notes", src: "p.621", items: [
      { t: "55-y, headaches, focal seizures, lumps all over, single ring lesion → next best ==CSF EITB for cysticerci== (a)", node: "lab-eitb", role: "confirm", why: "MCQ: NCC confirmation" },
      { t: "TS → subependymal astrocytoma · VHL → cerebellar haemangioblastoma · Cowden → cerebellar ganglioblastoma (d)", role: "hy" }
    ]}
  ],
  sources: [
    "Primary: PrepLadder Medicine notes, PDF pp. 614–621 (Neurocysticercosis & Brain Tumors). HIS and 'I'm sure outside contact' from the notes.",
    "Davidson's / Boloor's not available — not used."
  ]
});
