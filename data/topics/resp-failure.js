/* Respiratory Failure. Primary source: PrepLadder notes PDF pp. 787–788.
   Mnemonics are memory aids written for this chart. */
MF.addTopic({
  id: "resp-failure",
  title: "Respiratory Failure",
  aka: ["type 1 respiratory failure", "type 2 respiratory failure", "hypoxaemic", "hypercapnic", "type 3 perioperative atelectasis", "type 4 shock", "ARDS", "flail chest", "incentive spirometry"],
  oneLine: "Four types: 1 hypoxaemic (pCO₂ N/↓), 2 hypercapnic (pCO₂ ↑), 3 perioperative atelectasis, 4 shock (muscle hypoperfusion) — causes and management of each.",
  flow: ["ABG: pO₂ ↓ — what is pCO₂?", "N/↓ → type 1 (ARDS, pneumonia…) · ↑ → type 2 (COPD, NM weakness…)", "Post-op basal collapse → type 3", "Shock → type 4 → intubate + IPPV, noradrenaline"],
  related: ["copd", "asthma", "gbs", "myasthenia", "abg-1"],
  bubbles: [
    { type: "definition", title: "Four types at a glance", src: "p.787–788", wide: true, items: [
      { t: "One of the leading causes of ICU admission", role: "hy" },
      { table: { head: ["Type", "Gas", "Cause", "Key management"], rows: [
        { c: ["**1 — hypoxaemic**", "pO₂ ↓ · pCO₂ ==N / ↓==", "ARDS (sepsis, pneumonia, pancreatitis, TRALI) · CHF · fat embolism · pneumonia · massive hydrothorax · primary spontaneous pneumothorax", "Oxygen · treat cause"], node: "lab-abg", role: "dx", why: "Type 1 pattern" },
        { c: ["**2 — hypercapnic**", "pO₂ ↓ · pCO₂ ==↑==", "AECOPD · life-threatening asthma (silent chest) · ==flail chest== (≥3 ribs, >2 sites → paradoxical breathing) · diaphragm palsy · massive PE", "Ventilate (NIV / IPPV)"], node: ["lab-abg", "con-type2-resp-failure"], role: "dx", why: "Type 2 pattern", hl: true },
        ["**3 — perioperative**", "—", "==Atelectasis== after GA (↓ FRC → basal collapse)", "O₂ · physio · upright · analgesia ± NIV · prevent with ==incentive spirometry=="],
        { c: ["**4 — shock**", "—", "Respiratory muscle hypoperfusion (normally <5% of cardiac output) — cardiogenic shock → lactic acidosis", "==Intubation + IPPV== · opiates · non-BZD sedation · ==noradrenaline== for hypotension"], node: ["proc-ippv", "rx-vasopressor"], role: "emerg", why: "Type 4 failure" }
      ]}},
      { mnemonic: "1 Oxygen low · 2 CO₂ too · 3 post-op collapse · 4 shock" },
      { t: "Cardiogenic shock with BP ~70/50 → ==dobutamine contraindicated== · vasodilators worsen it", role: "ci" }
    ]},
    { type: "etiology", title: "Diaphragmatic paralysis (type 2)", src: "p.788", items: [
      { mnemonic: "GT CAD-HH", lines: [["G", "Guillain–Barré"], ["T", "Transverse myelitis"], ["C", "Cervical spine fracture C3–C5"], ["A", "ALS"], ["D", "Duchenne muscular dystrophy"], ["H", "Hypothyroidism"], ["H", "Hypokalaemia"]] },
      { t: "GBS", see: "gbs" },
      { t: "Myasthenic crisis", see: "myasthenia" }
    ]},
    { type: "mcq", title: "MCQ in the notes", src: "p.788", items: [
      { t: "Obese 60-y after total knee replacement → ==type 3 respiratory failure== (c)", role: "hy" }
    ]}
  ],
  sources: [
    "Primary: PrepLadder Medicine notes, PDF pp. 787–788 (Respiratory Failure). Mnemonics written for this chart.",
    "Davidson's / Boloor's not available — not used."
  ]
});
