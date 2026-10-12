/* ABG Analysis Simplified — Part 2 (ABG vs VBG + 21 worked cases). Primary source: PrepLadder notes PDF pp. 826–836.
   Mnemonics are memory aids written for this chart. */
MF.addTopic({
  id: "abg-2",
  title: "ABG Analysis Simplified — Part 2",
  aka: ["VBG", "venous blood gas", "expected pCO2", "HCO3 + 15", "metabolic acidosis", "metabolic alkalosis", "mixed disorder", "anion gap", "ethylene glycol", "aspirin toxicity", "acute pancreatitis ABG"],
  oneLine: "ABG vs VBG, when ABG is mandatory, and a stepwise method (pH → primary change → expected pCO₂ = HCO₃⁻ + 15 → anion gap → mixed disorder) applied to 21 exam cases.",
  flow: ["pH → acidaemia / alkalaemia", "Primary change: which value explains the pH?", "Metabolic: expected pCO₂ = HCO₃⁻ + 15 · respiratory: 1–2–4 rule", "Mismatch → second (mixed) disorder", "Anion gap = Na⁺ − (Cl⁻ + HCO₃⁻) → cause"],
  related: ["abg-1", "abg-3", "dka-hhs", "copd"],
  bubbles: [
    { type: "investigation", title: "ABG vs VBG", src: "p.826", items: [
      { table: { head: ["Parameter", "ABG", "VBG", "Difference"], rows: [
        { c: ["pH", "7.35–7.45", "7.30–7.40", "VBG ~0.03–0.05 lower"], node: "lab-abg", role: "dx", why: "ABG reference ranges" },
        ["pCO₂", "35–45", "40–50", "VBG ~5–10 higher"],
        { c: ["pO₂", "80–100", "==30–50==", "Much lower in VBG"], hl: true },
        ["HCO₃⁻", "22–26", "22–26", "Minimal"],
        ["Base excess", "−2 to +2", "−2 to +2", "Minimal"],
        { c: ["Lactate (mmol/L)", "0.5–2.0", "0.5–2.0", "Minimal"], node: "lab-lactate", why: "Lactate reference" }
      ]}},
      "VBG is fine for metabolic acidosis / general acid–base",
      { h: "ABG is a MUST in" },
      "Respiratory failure · severe hypoxaemia · ARDS (PaO₂/FiO₂) · mechanical ventilation · severe haemodynamic instability",
      "CO₂ retention (COPD — VBG overestimates PaCO₂)",
      { t: "==CO poisoning → ABG with co-oximetry== (carboxyhaemoglobin)", role: "hy" }
    ]},
    { type: "diagnosis", title: "The method — flowchart", src: "p.826–827", steps: [
      { t: "**1. pH** → <7.35 acidaemia · >7.45 alkalaemia", node: "lab-abg", role: "dx", type: "investigation", why: "Step 1" },
      { t: "**2. Primary change** → the value moving in the direction that explains the pH (ROME)", type: "diagnosis" },
      { decision: "Primary metabolic or respiratory?", branches: [
        { label: "Metabolic", steps: [{ t: "==Expected pCO₂ = HCO₃⁻ + 15== → matches actual = compensated; doesn't = mixed", add: "Standard formula for metabolic acidosis is Winter's: expected pCO₂ = 1.5 × HCO₃⁻ + 8 (± 2). The +15 shortcut agrees for HCO₃⁻ of about 10–40 but overestimates below 10. In case 6 (HCO₃⁻ 6.2) Winter's gives ~17 ± 2, so a pCO₂ of 16 is appropriate compensation · compensation for metabolic alkalosis is less predictable, and pCO₂ rarely rises above ~55 mmHg.", type: "diagnosis" }] },
        { label: "Respiratory", steps: [{ t: "Per 10 mmHg CO₂: acidosis HCO₃⁻ +1 acute / +4 chronic · alkalosis −2 / −4", type: "diagnosis", see: "abg-1" }] }
      ]},
      { t: "**3. Anion gap** = Na⁺ − (Cl⁻ + HCO₃⁻) → high AG vs normal AG", node: "lab-anion-gap", role: "dx", type: "investigation", why: "Classifies metabolic acidosis", see: "abg-3" },
      { mnemonic: "pH → Primary → +15 → Gap" }
    ]},
    { type: "mcq", title: "Metabolic cases", src: "p.826–830", wide: true, items: [
      { table: { head: ["#", "Scenario", "Values (pH · pCO₂ · HCO₃⁻)", "Answer"], rows: [
        { c: ["1", "Alcoholic, epigastric pain, amylase 400, lipase 250, Na 132, Cl 92", "7.30 · 31 · 16 (expected 31)", "==HAGMA (AG 24) with compensatory respiratory alkalosis== — acute pancreatitis"], node: "lab-anion-gap", role: "dx", why: "Case: pancreatitis HAGMA", hl: true },
        ["2", "—", "7.20 · 27 · 12 (expected 27)", "Partially compensated metabolic acidosis"],
        ["3", "—", "7.30 · 32 · 17 (expected 32)", "Partially compensated metabolic acidosis (b)"],
        ["4", "—", "7.25 · 23 · 8 (expected 23)", "Metabolic acidosis + compensatory respiratory alkalosis (a)"],
        ["5", "Which cause?", "7.30 · 30 · 15", "==Renal vein thrombosis → AKI== (c) — pyloric stenosis & Cushing give alkalosis; AECB gives ↑ CO₂"],
        { c: ["6", "18-mo after cough syrup, no urine, Ca-oxalate crystals, urine pH 5", "7.19 · 16 · 6.2", "==Ethylene glycol → acute tubular necrosis== (b)"], role: "danger" },
        ["7", "Post-op NG tube draining 900 mL coffee-ground", "7.57 · 45 · 30 (expected 45)", "==Metabolic alkalosis, partially compensated== (d)"],
        ["8", "—", "7.52 · 48 · 33 (expected 48)", "Metabolic alkalosis, partially compensated (d)"],
        { c: ["9", "Cushing — which shows compensation?", "PaCO₂ 48", "==PaCO₂ 48== (d) — respiratory compensation of metabolic alkalosis"], see: "cushing" }
      ]}, add: "Standard teaching: in cases 2–4 the actual pCO₂ equals the expected value → a simple metabolic acidosis with appropriate respiratory compensation. 'Partially compensated' only means the pH is still abnormal. Compensation almost never brings the pH back to normal, so a normal pH with abnormal pCO₂ and HCO₃⁻ points to a mixed disorder. · Alcohol dehydrogenase converts ethylene glycol to glycolate and oxalate → high-AG metabolic acidosis with a raised osmolar gap, calcium-oxalate crystals in the urine and acute tubular necrosis · treat with fomepizole (or ethanol), bicarbonate and haemodialysis. Contaminated cough syrups usually contain diethylene glycol, which causes a similar acidosis with AKI. · Mechanism: NG drainage removes gastric HCl → metabolic alkalosis. Volume depletion, hypochloraemia and hypokalaemia keep it going · it is chloride-responsive (urine Cl⁻ low, <20 mmol/L) → corrects with 0.9% saline + KCl. Contrast case 9: in Cushing's / mineralocorticoid excess the alkalosis is chloride-resistant (urine Cl⁻ high) and does not respond to saline." }
    ]},
    { type: "mcq", title: "Respiratory & mixed cases", src: "p.830–836", wide: true, items: [
      { table: { head: ["#", "Scenario", "Answer / key point"], rows: [
        ["10", "Post-op, IV analgesia 2-hourly, RR 8, drowsy", "==Respiratory acidosis== (a) · inadequate analgesia → pain → alkalosis"],
        ["11", "Aspirin overdose", "==Respiratory alkalosis== (c) — stimulates respiratory centre"],
        { c: ["12", "Resp. alkalosis + circumoral twitching + weakness", "==Calcium + potassium== (c) — ↓ ionised Ca, K⁺ shifts in"], node: ["lab-calcium", "lab-potassium"], role: "dx", why: "Electrolytes in respiratory alkalosis" },
        ["13", "Classic sign of respiratory alkalosis", "==Chvostek sign== (b) · Hoover's sign = functional weakness test"],
        ["14", "pCO₂ 25, pH 7.50, HCO₃ 19 — NOT a cause", "==PaO₂/FiO₂ <100 (severe ARDS)== (b) — causes CO₂ retention"],
        ["15", "On ventilator: 7.56 · 29 · 23", "Primary ==respiratory alkalosis== (uncompensated, HCO₃⁻ normal)"],
        { c: ["16", "Respiratory acidosis from brain trauma", "==K⁺ 6.0== (a) — H⁺ in, K⁺ out → hyperkalaemia"], node: "lab-potassium", role: "dx", why: "Acidosis shifts K⁺ out of cells" },
        ["17", "Partially compensated resp. acidosis", "==PaCO₂ 53, pH 7.23, HCO₃ 28== (b)"],
        ["18", "NOT a cause of respiratory acidosis", "==Hyperventilation== (d) · PE: alkalosis early → acidosis if fatigued"],
        { c: ["19", "COPD, SpO₂ 85%: 7.20 · 60 · 34", "==BiPAP== (a) — chronic resp. acidosis with renal compensation"], node: "proc-niv", role: "emerg", why: "Hypercapnic COPD", see: "copd" },
        { c: ["20", "Post-caesarean, morphine infusion, AFLP: 7.16 · 50 · 15", "==Respiratory + metabolic acidosis== (HCO₃⁻ should rise, but falls)"], hl: true },
        ["21", "Decompensated HF on Lasix: 7.58 · 21 · 32, Na 127", "==Respiratory alkalosis + metabolic alkalosis== (diuretic)"]
      ]}, add: "Standard explanation: repeated IV opioid doses depress the respiratory centre → slow, shallow breathing (RR 8, drowsy) → CO₂ retention → acute respiratory acidosis · treat with naloxone, oxygen and airway support, and review the opioid dosing. The second half of the line is the contrast: under-treated pain makes the patient hyperventilate → respiratory alkalosis. · Salicylates first stimulate the respiratory centre → respiratory alkalosis. They then uncouple oxidative phosphorylation → high-AG metabolic acidosis, so adults typically show a mixed respiratory alkalosis + metabolic acidosis (children often show the acidosis earlier). Treatment: activated charcoal if early, IV sodium bicarbonate to alkalinise the urine, and haemodialysis for severe poisoning. · Standard teaching: hypoxaemia from early or moderate ARDS drives hyperventilation → respiratory alkalosis. CO₂ retention appears only in very severe disease, with respiratory-muscle fatigue, or with permissive hypercapnia during lung-protective ventilation. The values given (low pCO₂, high pH, mildly low HCO₃⁻) are a respiratory alkalosis with some renal compensation. · Standard teaching: the high HCO₃⁻ shows chronic CO₂ retention, but a pH of 7.20 means a new rise on top → acute-on-chronic respiratory acidosis. NIV (BiPAP) is indicated in a COPD exacerbation with pH ≤7.35 and pCO₂ ≥45 mmHg, especially if this persists despite optimal medical treatment · give controlled oxygen to a target SpO₂ of 88–92%. · Mechanism: the morphine infusion depresses breathing → CO₂ retention (respiratory acidosis), while AFLP causes acute liver failure ± AKI → lactic acidosis (metabolic acidosis). Both lower the pH, hence 7.16. For HCO₃⁻ 15 the expected pCO₂ is ~30, so a pCO₂ of 50 confirms the combined disorder. · Mechanism: furosemide → volume contraction with Cl⁻ and K⁺ loss → metabolic alkalosis, while pulmonary congestion and hypoxaemia drive hyperventilation → respiratory alkalosis. For HCO₃⁻ 32 the expected pCO₂ is ~47, so a pCO₂ of 21 confirms the second disorder. Both disorders push the pH up, hence 7.58." },
      { mnemonic: "When the 'compensating' value moves the WRONG way → two disorders", t: "cases 20 & 21" }
    ]}
  ],
  sources: [
    "Primary: PrepLadder Medicine notes, PDF pp. 826–836 (ABG Part 2). Mnemonics written for this chart.",
    "Davidson's / Boloor's not available — not used."
  ]
});
