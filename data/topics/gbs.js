/* Guillain-Barré Syndrome. Primary source: PrepLadder notes PDF pp. 563–566.
   FAME (Brighton) and OAA are from the notes; others written for this chart. */
MF.addTopic({
  id: "gbs",
  title: "Guillain-Barré Syndrome",
  aka: ["GBS", "AIDP", "AMAN", "AMSAN", "Miller Fisher", "anti-GM1", "anti-GQ1b", "cytoalbuminologic dissociation", "albuminocytological dissociation", "Brighton criteria", "CIDP", "Campylobacter", "Wernicke encephalopathy"],
  oneLine: "Post-infective autoimmune polyradiculopathy: ascending symmetric flaccid paralysis with early distal areflexia → CSF albumino-cytological dissociation + prolonged F waves → IVIG or plasmapheresis (no steroids).",
  flow: ["Days–weeks after C. jejuni diarrhoea", "Ascending symmetric flaccid weakness · distal areflexia · CN VII", "Watch FVC / single-breath count", "LP (protein 100–1000, cells <50) · prolonged F waves", "IVIG = plasmapheresis · no steroids"],
  related: ["myasthenia", "meningitis-2", "resp-failure"],
  bubbles: [
    { type: "patho", title: "Pathogenesis", src: "p.563", items: [
      "Autoimmune ==polyradiculopathy== (nerve roots)",
      { chain: ["Infection", "Molecular-mimicry antibody (IgG anti-GM1 / anti-GQ1b)", "Complement attack", "==Patchy segmental demyelination==", "Conduction block → ascending symmetric flaccid paralysis"] },
      "Demyelination → recovery in **85%**",
      "Axonal degeneration (axon cut off from NMJ) → slow recovery"
    ]},
    { type: "etiology", title: "Triggers", src: "p.563", items: [
      { t: "M/c → ==Campylobacter jejuni== (food poisoning)", role: "hy" },
      "E. coli / coliforms in water",
      "Mycoplasma pneumoniae (walking pneumonia)",
      "CMV · herpes · EBV · HIV · ==Zika== (vertical → microcephaly) · hepatitis E (m/c acute viral hepatitis)",
      "Vaccines → influenza · old neural rabies vaccine · SARS-CoV-2",
      "↑ risk → lymphoma, SLE",
      { mnemonic: "Chicken, Cows, Colds & Clinics", t: "Campylobacter · coliforms · respiratory/viral infections · vaccines" }
    ]},
    { type: "diagnosis", title: "Subtypes", src: "p.563–564", wide: true, items: [
      { table: { head: ["Subtype", "Who / features", "Target", "Electro-dx"], rows: [
        { c: ["==AIDP==", "==M/c== · adults · motor + sensory + autonomic + CN VII · rapid recovery · ==IgG anti-GM1==", "Schwann cells", "Demyelination"], hl: true },
        ["AMAN", "Children, young adults · ==pure motor==", "Nodes of Ranvier", "Axonal degeneration"],
        ["AMSAN", "Adults · uncommon · motor + sensory", "Nodes of Ranvier", "Axonal degeneration"],
        ["==Miller Fisher== (<5%)", "Triad ==OAA==: Ophthalmoplegia · Areflexia ==without weakness== · Ataxia · CN III · ==anti-GQ1b==", "Schwann cells", "Either"]
      ]}},
      { mnemonic: "Miller Fisher = Fish eyes don't move", t: "OAA: ophthalmoplegia, areflexia (no weakness), ataxia" },
      { h: "Don't confuse — Wernicke encephalopathy (GOA)" },
      { t: "Global confusion · Ophthalmoplegia (CN VI) · Ataxia → ==IV thiamine + IV dextrose== (thiamine first)", node: "rx-dextrose", role: "first", why: "Wernicke: thiamine then dextrose" },
      { h: "Variants" },
      "Acute pharyngeal-cervico-brachial → ==anti-GT1a== · arm + pharyngeal weakness",
      "Multifocal motor neuropathy with conduction block → ==IgM anti-GM1==",
      { t: "==CIDP== → deterioration >9 weeks or >3 relapses → ==IVIG + steroids==", node: ["rx-ivig", "rx-steroids"], role: "first", why: "CIDP (steroids DO work here)" }
    ]},
    { type: "clinical", title: "Clinical picture", src: "p.564–565", items: [
      "Days–a week after recovery from C. jejuni → ==rubbery legs==",
      "Weakness progresses over **12 h – 28 days** → ==ascending symmetric flaccid paralysis==",
      { t: "Earliest → ==distal areflexia==", role: "hy" },
      "Truncal paralysis · quadriplegia · neck floppiness",
      { t: "M/c CN → ==CN VII (facial diplegia)==", role: "hy" },
      { t: "Bulbar palsy → no gag / cough → can't clear secretions → ==intubation==", role: "danger" },
      { t: "Diaphragm weakness → ↓ FVC, ↓ single-breath count → ventilation", node: "con-type2-resp-failure", role: "danger", why: "Neuromuscular respiratory failure", see: "resp-failure" },
      "Sensory → proprioception loss, aching neck/arms/shoulders",
      { t: "==Bladder & bowel SPARED== (vs cord lesion)", role: "hy" },
      "Autonomic → wild BP swings · arrhythmia · bradycardia · postural hypotension"
    ]},
    { type: "investigation", title: "Work-up", src: "p.565", items: [
      { table: { head: ["Test", "GBS finding", "Normal"], rows: [
        { c: ["LP — CSF protein", "==100–1000 mg/dL==", "15–45 mg/dL (notes)"], node: ["proc-lp", "lab-csf"], role: "dx", why: "GBS: raised CSF protein", hl: true },
        ["CSF cells", "Normal / <50 /µL → ==cytoalbuminologic dissociation==", "0–5 lymphocytes"],
        { c: ["Nerve conduction", "↑ latency (slow) · ==prolonged F-wave latency = earliest in AIDP==", "—"], node: "bed-ncs", role: "dx", why: "GBS electrodiagnosis" }
      ]}},
      { t: "CSF can be ==normal in the first 48 h==", role: "hy" },
      { t: "CSF pattern table", see: "meningitis-2" }
    ]},
    { type: "diagnosis", title: "Brighton criteria (level 1)", src: "p.565", items: [
      { mnemonic: "FAME (notes)", lines: [["F", "Flaccid bilateral limb weakness"], ["A", "Areflexia (ascending, symmetric) + cytoAlbuminologic dissociation"], ["M", "Monophasic illness — 12 h to 28 days"], ["E", "Electrodiagnostic demyelination"]] }
    ]},
    { type: "treatment", title: "Treatment flowchart", src: "p.565", steps: [
      { t: "Monitor FVC / single-breath count → ventilate if failing · manage autonomic swings", type: "emergency" },
      { decision: "Disease-modifying (either one)", branches: [
        { label: "TOC", steps: [{ t: "==IVIG==", node: "rx-ivig", role: "first", type: "treatment", why: "GBS treatment of choice" }] },
        { label: "Equally effective", steps: [{ t: "==Plasmapheresis (PLEX)==", node: "proc-plasmapheresis", role: "first", type: "treatment", why: "GBS alternative" }] }
      ]},
      { t: "Improvement shows after **>1 week** (delayed)", type: "followup" },
      { t: "==Glucocorticoids NOT useful==", node: "rx-steroids", role: "ci", type: "emergency", why: "Steroids don't help GBS (unlike CIDP)" },
      { t: "**85% full recovery**", type: "followup" },
      { mnemonic: "GBS: no Steroids, just Swap plasma or Supply IVIG" }
    ]},
    { type: "complication", title: "Cause of death", src: "p.565", items: [
      { t: "==Secondary pulmonary involvement==", role: "danger" },
      { table: { head: ["Cause"], rows: [["==Diaphragmatic paralysis (m/c)=="], ["AMAN subtype"], ["Pneumonia · atelectasis"], ["Pulmonary embolism"]] } }
    ]},
    { type: "mcq", title: "MCQ in the notes", src: "p.566", items: [
      { t: "Miller Fisher triad → ==areflexia without weakness, ataxia, ophthalmoplegia== (b)", role: "hy" }
    ]}
  ],
  sources: [
    "Primary: PrepLadder Medicine notes, PDF pp. 563–566 (Guillain-Barré Syndrome). FAME and OAA from the notes; others written for this chart.",
    "Davidson's / Boloor's not available — not used."
  ]
});
