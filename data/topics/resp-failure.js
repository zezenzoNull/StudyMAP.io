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
      ]}, add: "Standard cut-offs: respiratory failure = PaO₂ < 8 kPa (60 mmHg) breathing air; type 2 also has PaCO₂ > 6 kPa (45 mmHg). Type 1 is a gas-exchange failure (V/Q mismatch, shunt) → pCO₂ stays normal or low because extra ventilation of the healthier alveoli clears CO₂ easily but cannot add much O₂ (flat top of the O₂ dissociation curve). · Standard steps: titrate O₂ to SpO₂ 94–98% → high-flow nasal O₂ or CPAP if still hypoxaemic → intubation with PEEP if that fails. In ARDS ventilate lung-protectively: tidal volume 6 mL/kg predicted body weight, plateau pressure ≤ 30 cmH₂O, prone positioning when severe (PaO₂/FiO₂ < 150). · Standard (ATLS) definition: flail chest = ≥3 adjacent ribs each broken in ≥2 places, so the segment loses bony continuity; the hypoxaemia comes mainly from the underlying lung contusion and pain-limited breathing → good analgesia (epidural or nerve block), O₂, ventilate if failing. Standard teaching: PE usually gives type 1 failure with a low pCO₂ — pCO₂ rises only in massive PE (large dead space) or exhaustion. · Standard AECOPD steps: controlled O₂ by Venturi mask to SpO₂ 88–92% (high-flow O₂ worsens CO₂ retention) → NIV (BiPAP) if pH < 7.35 with pCO₂ > 6.5 kPa despite optimal medical treatment → intubation + IPPV if NIV fails, consciousness falls or the airway is unsafe. Acute asthma is different: aim for SpO₂ 94–98%, and a normal or rising pCO₂ marks life-threatening / near-fatal asthma → ICU for intubation. In GBS / myasthenia track FVC and intubate electively as it nears 20 mL/kg, before the ABG worsens. · Standard teaching: the gas pattern is usually type 1 (pO₂ ↓, pCO₂ N/↓) → after GA the FRC falls below closing capacity, so basal airways close → shunt; obesity, lying supine and upper-abdominal / thoracic incisions make it worse. pCO₂ rises if opioids or residual anaesthetic / neuromuscular block depress ventilation. · Standard teaching: no fixed gas pattern, as the lungs may be normal → lactic acidosis with a compensatory low pCO₂ at first; a normal or rising pCO₂ despite the acidosis means the under-perfused respiratory muscles are tiring → ventilate early. pO₂ also falls if cardiogenic shock causes pulmonary oedema. · Standard explanation (Harrison's): in shock, pulmonary oedema, lactic acidosis and anaemia make breathing hard work, so the respiratory muscles can take up to 40% of cardiac output → intubation + ventilation rests them and sends that flow back to vital organs while the shock is treated. · Meaning: once ventilated, use analgesia-first sedation → an opioid (e.g. fentanyl) plus, if needed, propofol or dexmedetomidine rather than benzodiazepines, which prolong ventilation and raise delirium risk. Propofol and dexmedetomidine also lower BP (dexmedetomidine also slows the heart), so titrate carefully in shock." },
      { mnemonic: "1 Oxygen low · 2 CO₂ too · 3 post-op collapse · 4 shock" },
      { t: "Cardiogenic shock with BP ~70/50 → ==dobutamine contraindicated== · vasodilators worsen it", add: "Standard teaching: at this BP dobutamine is avoided as the first or only drug because its β₂ vasodilation drops pressure further → noradrenaline restores BP first, and dobutamine is added afterwards for low cardiac output once systolic BP is supported. Nitrates and other vasodilators are withheld while systolic BP is < 90 mmHg.", role: "ci" }
    ]},
    { type: "etiology", title: "Diaphragmatic paralysis (type 2)", src: "p.788", items: [
      { mnemonic: "GT CAD-HH", add: "Clinical clue: bilateral diaphragm palsy → orthopnoea and paradoxical inward movement of the abdomen on inspiration, with vital capacity falling sharply on lying flat. Unilateral palsy (often phrenic nerve injury from cardiac surgery or a tumour) is usually silent, shows a raised hemidiaphragm on CXR and is confirmed by the fluoroscopic sniff test.", lines: [["G", "Guillain–Barré"], ["T", "Transverse myelitis"], ["C", "Cervical spine fracture C3–C5"], ["A", "ALS"], ["D", "Duchenne muscular dystrophy"], ["H", "Hypothyroidism"], ["H", "Hypokalaemia"]] },
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
