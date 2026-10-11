/* Meningitis — Part 2 (work-up, LP, CSF, TB meningitis). Primary source: PrepLadder notes PDF pp. 542–548.
   "Wet, whacky, wobbly" is from the notes; others written for this chart. */
MF.addTopic({
  id: "meningitis-2",
  title: "Meningitis — Part 2",
  aka: ["Kernig", "Brudzinski", "lumbar puncture", "CSF analysis", "post-LP headache", "post dural puncture headache", "blood patch", "Quincke needle", "Sprotte needle", "TB meningitis", "normal pressure hydrocephalus", "Tuffier line"],
  oneLine: "Meningeal signs, when to image before LP, LP technique & complications, CSF patterns (bacterial · TB · viral · SAH · GBS), TB meningitis and treatment by cause.",
  flow: ["Kernig / Brudzinski +", "Red flags? → blood culture + antibiotics, CT first", "No red flags → LP STAT + dexamethasone + antibiotics <60 min", "Read CSF pattern", "Treat by cause (ceftriaxone+vanc · ATT+steroid · AmB+5FC · artesunate)"],
  related: ["meningitis-1", "raised-icp", "headache", "gbs", "tb"],
  bubbles: [
    { type: "clinical", title: "Meningeal irritation signs", src: "p.542", items: [
      "Can't follow commands · nuchal rigidity",
      { table: { head: ["Sign", "Test", "Positive"], rows: [
        ["==Kernig==", "Extend the knee (hip flexed)", "Hamstring spasm / pain (pus irritates nerve roots)"],
        ["==Brudzinski==", "Passively flex the neck", "Hips + knees flex"]
      ]}},
      { mnemonic: "Kernig = Knee · Brudzinski = Bend the neck" }
    ]},
    { type: "investigation", title: "Image before LP?", src: "p.542", items: [
      { t: "Always → ==blood culture== first", node: "lab-blood-culture", role: "init", why: "Bacterial meningitis work-up" },
      { mnemonic: "FFF-IITS", t: "image first — LP contraindicated", lines: [["F", "Focal neuro deficit"], ["F", "Focal seizures"], ["F", "Fundus — papilloedema"], ["I", "↑ ICP"], ["I", "Immunocompromised"], ["T", "Trauma"], ["S", "Space-occupying lesion"]] },
      { t: "Otherwise → ==guarded LP== (avoids foraminal herniation) → turbid CSF, PMN, Gram stain", node: "proc-lp", role: "dx", why: "Diagnostic LP", see: "raised-icp" },
      { t: "==Empirical antibiotics within 60 min of admission==", role: "emerg" }
    ]},
    { type: "emergency", title: "Suspected bacterial meningitis — flowchart", src: "p.543", steps: [
      { decision: "Immunocompromised · CNS disease · new seizure · papilloedema · ↓ consciousness · focal deficit · LP delayed?", branches: [
        { label: "No", steps: [
          { t: "Blood cultures + ==LP STAT==", node: ["lab-blood-culture", "proc-lp"], role: "init", type: "investigation", why: "Uncomplicated suspected meningitis" },
          { t: "==Dexamethasone + empirical antibiotics==", node: ["rx-dexamethasone", "rx-ceftriaxone"], role: "first", type: "emergency", why: "Bacterial meningitis initial therapy" },
          { t: "CSF consistent with bacterial meningitis → +ve Gram stain", node: "lab-csf", role: "confirm", type: "investigation", why: "Confirmation" }
        ]},
        { label: "Yes", steps: [
          { t: "Blood cultures STAT", node: "lab-blood-culture", role: "init", type: "investigation", why: "Before antibiotics" },
          { t: "==Dexamethasone + empirical antibiotics== (don't wait for CT)", node: ["rx-dexamethasone", "rx-ceftriaxone"], role: "first", type: "emergency", why: "Antibiotics before imaging" },
          { t: "CT head negative", node: "img-ncct-head", role: "init", type: "imaging", why: "Exclude mass / raised ICP before LP" },
          { t: "→ Perform LP", node: "proc-lp", role: "dx", type: "investigation", why: "LP after safe CT" }
        ]}
      ]}
    ]},
    { type: "investigation", title: "Lumbar puncture technique", src: "p.543–544", items: [
      { table: { head: ["Step", "Detail"], rows: [
        ["Site", "==L3–L4== > L4–L5"],
        ["Position", "Lateral decubitus, knee-chest (curves spine)"],
        ["Landmark", "==Tuffier line== (iliac crests) crosses ==L4 spine=="],
        ["Prep", "==Chlorhexidine== · local anaesthetic"],
        ["Needle", "Bevel up · ==cephalad 15°== · aim at umbilicus"]
      ]}},
      { mnemonic: "Skin, Sub, Supra, Inter, Flavum, Dura, Arachnoid", t: "layers pierced: skin → subcutaneous → supraspinous → interspinous → ligamentum flavum → dura → arachnoid" },
      { table: { caption: "Contraindications", head: ["C/I"], rows: [["==Raised ICP=="], ["Bleeding diathesis"], ["Kyphoscoliosis"], ["Local site infection"]] }, node: "proc-lp", role: "ci", why: "LP contraindications" },
      { mnemonic: "PICK", t: "Pressure ↑ · Infection at site · Coagulopathy · Kyphoscoliosis" },
      { table: { caption: "Needles", head: ["Quincke", "Sprotte"], rows: [
        ["Cutting double bevel → everts dural edges → ==leak → headache==", "Side hole · ==atraumatic== · fewer complications"]
      ]}},
      { table: { caption: "CSF safely removed", head: ["Purpose", "Volume"], rows: [["Diagnostic", "**20 mL**"], ["Therapeutic", "**30 mL**"]] } },
      { h: "CSF tubes (min 3, 4 for special)" },
      "1 sugar + protein · 2 cell count · 3 culture + Gram · 4 special (cryptococcal Ag ELISA, India ink, PCR for MTB)"
    ]},
    { type: "treatment", title: "Post-LP headache — flowchart", src: "p.544", steps: [
      { t: "Dura breached → fibres split → CSF leak", type: "patho" },
      { t: "==Strict bed rest== — 8–10 h supine", type: "treatment" },
      { t: "Analgesics → COX inhibitor (diclofenac)", node: "rx-nsaid", role: "first", type: "treatment", why: "Post-LP headache analgesia" },
      { t: "==DOC → IV caffeine==", node: "rx-caffeine", role: "first", type: "treatment", why: "Post-dural-puncture headache DOC" },
      { t: "Last resort → opioids (codeine — constipation) + laxatives, cough suppressants", role: "rescue", type: "treatment" },
      { t: "Refractory → ==low-volume (epidural) blood patch== seals the hole", role: "def", type: "treatment" },
      { t: "==Plenty of IV fluids → NOT useful== (MCQ)", role: "ci", type: "pearl" }
    ]},
    { type: "investigation", title: "CSF patterns", src: "p.545–546", wide: true, items: [
      { table: { head: ["Condition", "Pressure", "Cells", "Sugar", "Protein", "Look"], rows: [
        { c: ["**Normal**", "50–180 mm H₂O", "0–5 lymphocytes", ">0.6 of blood (>2/3)", "15–45 mg/dL", "Clear"], node: "lab-csf", role: "dx", why: "CSF reference values" },
        { c: ["**Bacterial**", "↑", "==>1000 PMN==", "==<0.6==", "↑", "Turbid"], hl: true },
        ["**Tuberculous**", "↑", "==>100 lymphocytes==", "<0.6", "↑↑ (==cobweb coagulum==)", "Cloudy"],
        ["**Viral**", "↑", "50–500 lymphocytes", "==Normal==", "↑", "Clear / turbid"],
        ["**SAH**", "↑", "RBC ++ (==xanthochromia==)", "Normal", "Normal", "Bloody"],
        ["**GBS**", "Normal", "Normal", "Normal", "↑", "Clear — ==albuminocytological dissociation=="]
      ]}},
      { mnemonic: "Bacteria eat sugar · TB eats sugar + makes cobwebs · Virus leaves sugar alone", t: "sugar is the key discriminator" },
      "CNS leukaemia → malignant cells in sediment",
      "Fungal → lymphocytes + eosinophils · ↓ sugar · ↑ protein → special studies",
      { t: "GBS CSF", see: "gbs" }
    ]},
    { type: "clinical", title: "Normal pressure hydrocephalus", src: "p.545", items: [
      { mnemonic: "Wet, Whacky, Wobbly (notes)", lines: [["Wet", "Urinary incontinence (ventricles press paracentral lobule)"], ["Whacky", "Dementia (grey matter pressed against calvarium)"], ["Wobbly", "==Magnetic gait== (frontal pressure) — m/c"]] },
      { t: "==LP removing 20–30 mL (Fisher / tap test) → improves gait==", node: "proc-lp", role: "first", why: "Therapeutic LP in NPH" }
    ]},
    { type: "diagnosis", title: "TB meningitis", src: "p.546", items: [
      "Case → 5-y PEM child · low fever 1 month · irritable, vomiting · now unrousable · GCS 9 · Kernig + Brudzinski · extensor plantars · papilloedema · CXR left hilar nodes",
      { table: { head: ["Test", "Finding"], rows: [
        { c: ["NCCT head", "↑ ICP · hydrocephalus · ==basal exudates=="], node: "img-ncct-head", role: "init", why: "TBM imaging" },
        { c: ["Guarded LP (after mannitol)", "==Cobweb coagulum== · ~1000 lymphocytes · sugar ↓ · protein ↑↑ (g/dL)"], node: ["proc-lp", "lab-csf"], role: "dx", why: "TBM CSF", hl: true },
        ["Mantoux", "Often ==false negative=="],
        { c: ["CXR + USG abdomen", "Disseminated TB (hepatosplenomegaly)"], node: "img-cxr", role: "dx", why: "Look for disseminated TB" },
        ["HIV status", "Always check"]
      ]}},
      { t: "Pulmonary TB", see: "tb" }
    ]},
    { type: "treatment", title: "TB meningitis treatment", src: "p.546", steps: [
      { t: "==ATT== → **12 months** children · **6 months** adults", node: "rx-att", role: "first", type: "treatment", why: "TB meningitis" },
      { t: "==Dexamethasone 6 weeks==, tapering → ↓ vasogenic oedema", node: "rx-dexamethasone", role: "adjunct", type: "treatment", why: "TBM vasogenic oedema" },
      { t: "Hydrocephalus → ==VP shunt==", node: "proc-vp-shunt", role: "def", type: "treatment", why: "TBM hydrocephalus" },
      { t: "Steroids for vasogenic oedema → TBM · NCC · brain tumour", node: "rx-steroids", role: "hy", type: "pearl", why: "Steroid-responsive cerebral oedema", see: "raised-icp" }
    ]},
    { type: "treatment", title: "Treatment by cause", src: "p.547", items: [
      { table: { head: ["Meningitis", "Treatment"], rows: [
        { c: ["Pyogenic, 3 months – 55 y", "==Ceftriaxone + vancomycin=="], node: ["rx-ceftriaxone", "rx-vancomycin"], role: "first", why: "Pyogenic meningitis" },
        { c: ["Tubercular", "==ATT + steroids=="], node: "rx-att", role: "first", why: "TB meningitis" },
        { c: ["Cryptococcal", "==Liposomal amphotericin B + 5-flucytosine=="], node: "rx-amphotericin", role: "first", why: "Cryptococcal meningitis" },
        { c: ["Cerebral malaria", "==Artesunate=="], node: "rx-artesunate", role: "first", why: "Cerebral malaria" }
      ]}}
    ]},
    { type: "mcq", title: "MCQs in the notes", src: "p.548", items: [
      { t: "Not useful in post-dural-puncture headache → ==plenty of IV fluids== (b)", role: "hy" },
      { t: "5-y PEM child, fever, focal seizures, meningeal signs, papilloedema → NOT to be done: ==lumbar puncture== (a)", node: "proc-lp", role: "ci", why: "MCQ: LP contraindicated with papilloedema / focal seizures" },
      { t: "70-y NPH → to improve gait: ==LP removing 20–30 mL CSF== (a)", node: "proc-lp", role: "first", why: "MCQ: tap test in NPH" }
    ]}
  ],
  sources: [
    "Primary: PrepLadder Medicine notes, PDF pp. 542–548 (Meningitis Part 2). 'Wet, whacky, wobbly' from the notes; others written for this chart.",
    "Davidson's / Boloor's not available — not used."
  ]
});
