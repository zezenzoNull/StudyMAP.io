/* ABG Analysis Simplified — Part 1 (respiratory disorders). Primary source: PrepLadder notes PDF pp. 821–825.
   ROME and DEPRESO are from the notes; others written for this chart. */
MF.addTopic({
  id: "abg-1",
  title: "ABG Analysis Simplified — Part 1",
  aka: ["ABG", "arterial blood gas", "respiratory acidosis", "respiratory alkalosis", "ROME", "DEPRESO", "compensation", "Allen test", "modified Allen test", "radial artery puncture", "heparin"],
  oneLine: "Normal ABG values, ROME, compensation rules (acute 1 vs chronic 4 mEq per 10 mmHg CO₂), causes and features of respiratory acidosis (DEPRESO) and alkalosis, Allen test and sampling.",
  flow: ["pH: acidaemia (<7.35) or alkalaemia (>7.45)?", "ROME: pCO₂ moves opposite to pH → respiratory", "Acute vs chronic: HCO₃⁻ change per 10 mmHg CO₂", "Fully (pH normal) / partially / uncompensated?", "Treat cause · avoid rapid CO₂ washout"],
  related: ["abg-2", "abg-3", "copd", "asthma", "resp-failure"],
  bubbles: [
    { type: "definition", title: "Normal values & ROME", src: "p.821", items: [
      { table: { head: ["Parameter", "Normal"], rows: [
        { c: ["pH", "**7.35–7.45**"], node: "lab-abg", role: "dx", why: "ABG reference", hl: true },
        ["pO₂", "**75–100 mmHg**"],
        ["pCO₂", "**35–45 mmHg**"],
        ["HCO₃⁻", "**22–26 mEq/L**"]
      ]}},
      { mnemonic: "ROME (notes)", t: "Respiratory Opposite · Metabolic Equal", lines: [["R-O", "Respiratory: pH and pCO₂ move Opposite"], ["M-E", "Metabolic: pH, pCO₂ and HCO₃⁻ move in the same (Equal) direction"]] },
      { table: { caption: "Partially compensated patterns", head: ["pH", "pCO₂", "HCO₃⁻", "Disorder"], rows: [
        ["↓", "↓", "↓", "Metabolic acidosis"],
        ["↑", "↑", "↑", "Metabolic alkalosis"],
        ["↓", "↑", "↑", "Respiratory acidosis"],
        ["↑", "↓", "↓", "Respiratory alkalosis"]
      ]}}
    ]},
    { type: "patho", title: "Compensation numbers", src: "p.821–822", items: [
      { chain: ["CO₂ + H₂O", "H₂CO₃", "H⁺ + HCO₃⁻"] },
      { table: { head: ["Per 10 mmHg change in CO₂", "Acute", "Chronic"], rows: [
        ["Respiratory acidosis (CO₂ ↑)", "HCO₃⁻ ↑ **1**", "HCO₃⁻ ↑ **4**"],
        { c: ["Respiratory alkalosis (CO₂ ↓)", "HCO₃⁻ ↓ **2**", "HCO₃⁻ ↓ **4**"], hl: true }
      ]}},
      { mnemonic: "Acidosis 1-4 · Alkalosis 2-4", t: "acute → chronic, mEq of HCO₃⁻ per 10 mmHg CO₂" },
      "Kidney compensates at the PCT → reabsorbs (acidosis) or wastes (alkalosis) HCO₃⁻"
    ]},
    { type: "etiology", title: "Respiratory acidosis — DEPRESO (notes)", src: "p.821–822", items: [
      { mnemonic: "DEPRESO (notes)", lines: [["D", "Drugs — morphine, sedatives, anaesthetics"], ["D", "Disease of NMJ — polio, ALS, myasthenic crisis, muscular dystrophy"], ["E", "Edema & V/P imbalance — severe ARDS"], ["P", "Pneumoconiosis · barotrauma"], ["R", "Respiratory obstruction (foreign body)"], ["S", "Spasm — life-threatening asthma, AECOPD"], ["O", "Obesity — OSAHS, Pickwickian (obesity hypoventilation)"]] },
      { t: "Myasthenic crisis", see: "myasthenia" },
      { t: "AECOPD", see: "copd" }
    ]},
    { type: "clinical", title: "Respiratory acidosis — features & treatment", src: "p.822", items: [
      { table: { head: ["Acute", "Chronic"], rows: [["Anxiety · confusion · hallucinations", "↑↑ daytime somnolence · ==asterixis (flapping tremor)== · ↑ ICP → papilloedema"]] } },
      { t: "Treat → ==elective intubation + IPPV==", node: "proc-ippv", role: "first", why: "Severe respiratory acidosis" },
      { t: "==Avoid aggressive CO₂ washout== → lost cerebral vasodilatation → ↓ perfusion → dizziness, seizures", role: "ci" }
    ]},
    { type: "clinical", title: "Respiratory alkalosis", src: "p.822–823", items: [
      "Seen in → anxiety, pneumonia, acute heart failure",
      { mnemonic: "CHAMPS", t: "causes", lines: [["C", "CNS — pain, anxiety, hysteria, fever, CVA"], ["H", "Heart failure — pulmonary oedema · HAPE"], ["A", "Altitude"], ["M", "Miscellaneous — sepsis, heat"], ["P", "Pulmonary embolism (↑ dead space)"], ["S", "Shock-free chest trauma — haemothorax"]] },
      { h: "Features (CO₂ ↓ = cerebral vasoconstriction)" },
      "Dizziness, vertigo",
      "Intracellular shift of Na⁺, K⁺, PO₄ → ==arrhythmias==",
      { t: "↑ protein binding of Ca²⁺ → ↓ ionised Ca → ==tetany==", see: "parathyroid" },
      "Treat → ==paper-bag rebreathing==",
      { t: "M/c acid–base disorder in ICU → ==chronic respiratory alkalosis==", role: "hy" },
      { t: "==Pregnancy== → progesterone lowers pCO₂ 5–10 mmHg → chronic respiratory alkalosis", role: "hy" }
    ]},
    { type: "investigation", title: "Taking the sample", src: "p.823", items: [
      { h: "Modified Allen test" },
      "Checks ulnar collateral flow (superficial palmar arch) before radial puncture / cannulation or radial harvest for CABG",
      { chain: ["Make a fist", "Compress radial + ulnar", "Open → pale palm", "Release ulnar only", "Pink flush = collateral OK"] },
      "Alternatives → colour Doppler · plethysmography · MRI",
      { table: { head: ["Must-do", "Detail"], rows: [
        ["Site", "==Radial artery== (between FCR tendon and styloid)"],
        ["After", "Press 5 min (prevent haematoma)"],
        ["Kit", "3 mL pre-heparinised syringe (2 mL sample) · rubber stopper · rolled towel · ice bag"]
      ]}},
      { t: "==Excess heparin → falsely low pH and low HCO₃⁻==", role: "hy" }
    ]},
    { type: "mcq", title: "Practice cases (notes)", src: "p.824–825", wide: true, items: [
      { table: { head: ["Case", "pH · pCO₂ · HCO₃⁻", "Answer"], rows: [
        ["Unconscious beggar", "7.25 · 60 · 26", "Uncompensated respiratory acidosis"],
        ["ALS, morning headaches", "7.37 · 57 · 34", "==Fully compensated chronic respiratory acidosis=="],
        ["Myasthenia crisis", "7.30 · 68 · 28", "Partially compensated resp. acidosis (or + metabolic alkalosis)"],
        ["Inhalant abuse", "7.25 · 17 · 2", "Partially compensated metabolic acidosis"],
        ["3-y severe asthma, tremors", "7.35 · 72 · 38", "Fully compensated respiratory acidosis (chronic)"],
        ["Sick ER patient", "7.46 · 49 · 34", "Partially compensated metabolic alkalosis"],
        ["Everest climber 6000 m", "7.55 · 12 · 20", "Partially compensated respiratory alkalosis"],
        ["Pneumonia, rusty sputum", "7.54 · 25 · 22", "Uncompensated respiratory alkalosis"],
        ["pH 7.6", "7.60 · 31 · 25", "Uncompensated respiratory alkalosis"],
        ["Anxious pre-op, hyperventilating", "7.51 · 22 · 25", "Uncompensated respiratory alkalosis"],
        { c: ["Haemothorax", "7.42 · 25 · 18", "==Respiratory alkalosis, fully compensated== (d)"], hl: true },
        ["—", "7.56 · 20 · 20", "Respiratory alkalosis, partially compensated (c)"]
      ]}, node: "lab-abg", role: "dx", why: "ABG interpretation practice" },
      { mnemonic: "pH normal = Fully · pH abnormal + other value moving = Partially · other value normal = Uncompensated" }
    ]}
  ],
  sources: [
    "Primary: PrepLadder Medicine notes, PDF pp. 821–825 (ABG Part 1). ROME and DEPRESO from the notes.",
    "Davidson's / Boloor's not available — not used."
  ]
});
