/* ABG Analysis Simplified — Part 3 (mixed disorders, anion gap, delta ratio). Primary source: PrepLadder notes PDF pp. 837–843.
   DR. FUSE is from the notes; others written for this chart. */
MF.addTopic({
  id: "abg-3",
  title: "ABG Analysis Simplified — Part 3",
  aka: ["mixed acid-base disorder", "delta ratio", "anion gap", "HAGMA", "NAGMA", "DR FUSE", "type A lactic acidosis", "type B lactic acidosis", "Davenport diagram", "acid-base nomogram", "renal artery stenosis", "flash pulmonary oedema"],
  oneLine: "Mixed disorders (expected ≠ actual pCO₂), anion gap and delta ratio, NAGMA (DR. FUSE) vs HAGMA, lactic acidosis types, the Davenport nomogram and the classic mixed-disorder pairs.",
  flow: ["Metabolic acidosis → expected pCO₂ = HCO₃⁻ + 15", "Actual > expected → + respiratory acidosis · < → + respiratory alkalosis", "Anion gap → HAGMA vs NAGMA (DR. FUSE)", "Delta ratio = (AG − 12) ÷ (24 − HCO₃⁻)", "Normal pH with high AG → hidden mixed disorder"],
  related: ["abg-1", "abg-2", "dka-hhs", "copd"],
  bubbles: [
    { type: "diagnosis", title: "Mixed disorders — the rule", src: "p.837", items: [
      { table: { head: ["Actual vs expected pCO₂", "Meaning"], rows: [
        ["Equal", "Metabolic acidosis with appropriate respiratory compensation"],
        { c: ["==Actual > expected==", "==+ respiratory acidosis== (mixed)"], hl: true },
        ["Actual < expected", "+ respiratory alkalosis (mixed)"]
      ]}},
      { t: "Case 1 → 7.30 · 30 · 10: expected 25, actual 30 → ==metabolic acidosis + respiratory acidosis== (a)", node: "lab-abg", role: "dx", why: "Mixed disorder detection" }
    ]},
    { type: "investigation", title: "Anion gap & delta ratio", src: "p.838–839", items: [
      { t: "Anion gap = ==Na⁺ − (Cl⁻ + HCO₃⁻)==", node: "lab-anion-gap", role: "dx", why: "HAGMA vs NAGMA" },
      { t: "Delta ratio = ==(AG − 12) ÷ (24 − HCO₃⁻)==", role: "hy" },
      { table: { head: ["Delta ratio", "Meaning"], rows: [
        ["<0.4", "Pure NAGMA"],
        ["0.4–0.8", "HAGMA + NAGMA"],
        ["0.8–2", "Pure HAGMA"],
        { c: [">2", "==HAGMA + metabolic alkalosis=="], hl: true }
      ]}},
      { t: "Lowest band printed as '<4.0'", verify: "The delta-ratio table prints '<4.0' for pure NAGMA; the band continues to 0.4–0.8, so it should read <0.4." },
      { mnemonic: "0.4 · 0.8 · 2", t: "NAGMA · mixed · HAGMA · +alkalosis" },
      { t: "Case 3 → CKD + T2DM vomiting on empagliflozin, thiazide, ramipril: pH 7.4, pCO₂ 40, HCO₃ 22, Na 140, Cl 90 → AG 28, delta 8 → ==HAGMA + metabolic alkalosis== (a) — a normal pH can hide two disorders", role: "hy" }
    ]},
    { type: "etiology", title: "NAGMA vs HAGMA", src: "p.842", items: [
      { mnemonic: "DR. FUSE (notes)", t: "normal anion gap metabolic acidosis", lines: [["D", "Diarrhoea"], ["R", "Renal tubular acidosis"], ["F", "Fistula"], ["U-S-E", "Ureterosigmoidostomy"]] },
      { t: "HAGMA examples (notes) → lactic acidosis · chronic renal failure · methanol · DKA", see: "dka-hhs" },
      { table: { caption: "Lactic acidosis", head: ["Type", "Mechanism", "Examples"], rows: [
        ["==A==", "↓ tissue perfusion / O₂", "Cardiogenic shock (COVID myocarditis) · septic shock · ==cyanide=="],
        { c: ["==B==", "No hypoperfusion", "==Metformin=="], node: "rx-metformin", role: "danger", why: "Type B lactic acidosis" }
      ]}},
      { t: "Case 7 → Na 135, K 1.7, HCO₃ 9, Cl 116, pCO₂ 24, pH 7.25 → expected 24 (compensated), AG 10 → ==NAGMA== (a)", role: "hy" },
      { t: "Case 9 → nausea, dizziness, hyperventilation, NAGMA → ==RTA== (c)", role: "hy" }
    ]},
    { type: "mcq", title: "More cases", src: "p.837–843", wide: true, items: [
      { table: { head: ["#", "Scenario", "Answer"], rows: [
        { c: ["2", "Flash pulmonary oedema, RBG 243, urea 81, creat 1.5 · resp. + metabolic acidosis", "==Renal artery stenosis== (d) → severe HTN → LVF (oedema → CO₂ ↑) + ↓ perfusion / kidney damage"], hl: true },
        { c: ["4", "Acute vs chronic resp. acidosis in MND", "==↑ HCO₃⁻== (c) — diaphragm palsy → CO₂ ↑ → renal HCO₃⁻ retention"], see: "resp-failure" },
        ["5", "Match: 7.5/51/36 · 7.25/31/16 · 7.4/25/18 · 7.4/60/34", "==1-D, 2-C, 3-A, 4-B== (a)"],
        ["6", "pH 7.5, HCO₃ 30, pCO₂ 40, Na 130, Cl 90 (AG 10)", "==Vomiting== (d) → metabolic alkalosis"],
        { c: ["10", "NOT type A lactic acidosis", "==Metformin== (d) — type B"], node: "rx-metformin", role: "hy", why: "Type B lactic acidosis" },
        { c: ["11", "Cirrhosis, massive ascites, spironolactone + Lasix: 7.58 · 38 · 33, AG 16", "==Metabolic alkalosis + respiratory alkalosis== (b) — expected pCO₂ 48, actual 38"], node: "rx-spironolactone", why: "Diuretic metabolic alkalosis" }
      ]}}
    ]},
    { type: "diagnosis", title: "Classic mixed pairs", src: "p.843", items: [
      { table: { head: ["Mixed disorder", "Example"], rows: [
        ["Metabolic acidosis + respiratory acidosis", "Pulmonary oedema from CHF (↓ perfusion + severe oedema)"],
        ["Metabolic alkalosis + respiratory alkalosis", "Cirrhosis on diuretics (secondary aldosteronism + ascites-driven tachypnoea)"],
        ["Metabolic acidosis + metabolic alkalosis", "CKD with vomiting / diuretics"],
        ["HAGMA + NAGMA", "Toluene toxicity · diarrhoea + lactic acidosis"]
      ]}}
    ]},
    { type: "imaging", title: "Davenport (acid–base) nomogram", src: "p.841", items: [
      "Axes → arterial pH (x) vs plasma HCO₃⁻ (y) with pCO₂ isobars",
      { t: "MCQ: zones A and D → ==acute respiratory acidosis== and ==acute respiratory alkalosis== (c)", role: "hy" },
      "Other zones → chronic respiratory acidosis · metabolic alkalosis · chronic respiratory alkalosis · metabolic acidosis",
      "Mostly used by paramedical professionals"
    ]}
  ],
  sources: [
    "Primary: PrepLadder Medicine notes, PDF pp. 837–843 (ABG Part 3). DR. FUSE from the notes.",
    "Davidson's / Boloor's not available — not used."
  ]
});
