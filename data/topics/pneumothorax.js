/* Pneumothorax. Primary source: PrepLadder notes PDF pp. 811–816.
   TENSION is from the notes; other mnemonics written for this chart. */
MF.addTopic({
  id: "pneumothorax",
  title: "Pneumothorax",
  aka: ["tension pneumothorax", "primary spontaneous pneumothorax", "secondary pneumothorax", "traumatic pneumothorax", "deep sulcus sign", "Light index", "needle decompression", "triangle of safety", "ICD", "underwater seal", "pneumomediastinum", "Hamman crunch", "Boerhaave", "barcode sign", "obstructive shock"],
  oneLine: "Absent lung markings / deep sulcus → tension (TENSION signs, obstructive shock) needs a 14G needle then ICD in the triangle of safety; primary → aspirate, secondary → tube; pneumomediastinum.",
  flow: ["Sudden pleuritic pain + dyspnoea · absent breath sounds", "CXR absent markings / deep sulcus (supine) · USG barcode", "Tension? → 14G needle (adult 5th ICS AAL) → ICD → underwater seal", "Primary → needle aspiration · secondary → tube thoracostomy", "Prevent recurrence: VATS bleb stapling / pleurodesis"],
  related: ["pleural-effusion", "copd", "ild", "resp-failure"],
  bubbles: [
    { type: "imaging", title: "Imaging", src: "p.811, 813", items: [
      { table: { head: ["Finding", "Meaning"], rows: [
        { c: ["==Absent lung markings==, hyperlucent side ± mediastinal shift", "Pneumothorax"], node: "img-cxr", role: "dx", why: "Pneumothorax CXR", hl: true },
        ["==Deep sulcus sign==", "Only on a ==supine== film"],
        { c: ["USG ==barcode / stratosphere sign==", "Pneumothorax"], node: "img-usg-chest", role: "dx", why: "Pneumothorax on USG" },
        ["CXR ==continuous diaphragm sign== (air below heart)", "Pneumomediastinum"]
      ]}},
      "==Light index== → % lung collapsed = 100 × [1 − (lung diameter³ ÷ hemithorax diameter³)] · >2 cm = large"
    ]},
    { type: "patho", title: "Tension pneumothorax", src: "p.812", items: [
      "Causes → mechanical ventilation (high pressures) · aggressive resuscitation (rib #) · trauma",
      "Normal pleural pressure → ==−2 to −6 cm H₂O== · tension = pleural pressure positive throughout the cycle",
      { chain: ["Hole (penetrating / ventilator)", "Positive-pressure air in pleura", "SVC & IVC kink", "↓ venous return", "BP ↓↓", "==Obstructive shock=="] },
      { table: { caption: "Obstructive shock / PEA — tell apart", head: ["", "Tension pneumothorax", "Cardiac tamponade"], rows: [
        ["Shared", "Unrecordable BP · ↑ JVP · pulsus paradoxus", "Same"],
        { c: ["Clincher", "==Absent breath sounds==", "==Muffled S1, S2=="], hl: true }
      ]}}
    ]},
    { type: "clinical", title: "TENSION signs (notes)", src: "p.812", items: [
      "Sudden dyspnoea, ↓ SpO₂, altered mentation",
      { mnemonic: "TENSION (notes)", lines: [["T", "Tracheal shift (contralateral)"], ["E", "PEA"], ["N", "Neck veins distended / ↑ JVP"], ["S", "Shift of apex beat (contralateral)"], ["I", "Increased percussion note + ↓ vocal fremitus"], ["O", "Obstructive shock"], ["N", "No breath sounds on affected side"]] },
      { t: "Untreated pneumothorax → ==no air-lifting by helicopter==", role: "ci" }
    ]},
    { type: "emergency", title: "Tension pneumothorax — flowchart", src: "p.813–814", steps: [
      { t: "Confirmed on CXR / USG", node: "em-tension-ptx", role: "emerg", type: "emergency", why: "Entry to tension pneumothorax protocol" },
      { decision: "Step 1 — wide-bore (14G) needle", branches: [
        { label: "Adult", steps: [{ t: "==5th ICS anterior to mid-axillary line== (ATLS) · Harrison: 2nd ICS", node: "proc-needle-decompression", role: "emerg", type: "emergency", why: "Adult needle decompression" }] },
        { label: "Child", steps: [{ t: "==2nd ICS mid-clavicular line==", node: "proc-needle-decompression", role: "emerg", type: "emergency", why: "Paediatric needle decompression" }] }
      ]},
      { t: "**Step 2** → ==ICD in triangle of safety== (28–32 Fr usual · 32–36 Fr if haemothorax / large body)", node: "proc-icd", role: "def", type: "treatment", why: "Definitive drainage" },
      { t: "Triangle of safety → anterior: lateral border ==pectoralis major== · posterior: ==latissimus dorsi== · inferior: ==5th rib==", type: "pearl" },
      { t: "Tube tip → pneumothorax ==upwards== · haemothorax upwards + posterior", type: "pearl" },
      { t: "**Step 3** → ==underwater seal drain== (Pleur-evac)", type: "treatment" },
      { mnemonic: "Needle → Tube → Seal" }
    ]},
    { type: "investigation", title: "Underwater seal drain", src: "p.814", items: [
      { table: { head: ["System", "Look for"], rows: [["Dry", "Orange pressure knob · ==intermittent bubbling== = air leaving"], ["Wet", "Water-seal ==tidaling== · column ~2 cm · bubbling intermittent, not continuous"]] } },
      { table: { caption: "Troubleshooting", head: ["Sign", "Means"], rows: [
        { c: ["==Continuous bubbling==", "Air leak · ==bronchopleural fistula=="], role: "danger" },
        ["Bubbling stops", "Tube kinked / malpositioned · or lung re-expanded"]
      ]}}
    ]},
    { type: "diagnosis", title: "Types & treatment", src: "p.814–815", wide: true, items: [
      { table: { head: ["Type", "Cause", "Treatment", "Prevent recurrence"], rows: [
        { c: ["==Primary spontaneous==", "No lung disease · ruptured ==apical blebs== · occasional smoker", "==Needle aspiration==", "Thoracoscopic bleb stapling · pleural abrasion"], node: "proc-needle-decompression", role: "first", why: "Primary spontaneous pneumothorax", hl: true },
        { c: ["Secondary", "COPD (bullae) · COVID-19 · ILD · ==S. aureus pneumatocele==", "==Tube thoracostomy==", "VATS bleb stapling"], node: "proc-icd", role: "first", why: "Secondary pneumothorax", see: "copd" },
        { c: ["Traumatic / iatrogenic", "Stab · subclavian line · thoracocentesis · transthoracic biopsy", "O₂ (small) · aspiration (>2 cm) · tube if cyanosed · ==thoracotomy if haemothorax >1500 mL or 200 mL/h × 4 h==", "—"], node: ["rx-oxygen", "proc-icd"], role: "first", why: "Traumatic pneumothorax" }
      ]}},
      { t: "LAM cysts → spontaneous pneumothorax", see: "ild" }
    ]},
    { type: "clinical", title: "Pneumomediastinum", src: "p.815–816", items: [
      { t: "Cause → ==Boerhaave syndrome== (oesophageal rupture — instrumentation, alcoholic vomiting) · trauma", role: "hy" },
      { mnemonic: "Mackler triad = 'VCS'", lines: [["V", "Vomiting"], ["C", "Chest pain — substernal (chemical mediastinitis)"], ["S", "Subcutaneous emphysema (crepitus neck)"]] },
      { t: "Auscultation → ==Hamman crunch== (walking-on-snow crunch with heartbeat)", role: "hy" },
      "Signs → Naclerio V sign · spinnaker-sail sign",
      { t: "Treat → high-concentration O₂", node: "rx-oxygen", role: "first", why: "Pneumomediastinum" },
      { t: "Pleural amylase ↑ in Boerhaave", see: "pleural-effusion" }
    ]},
    { type: "mcq", title: "MCQ in the notes", src: "p.816", items: [
      { t: "40-y occasional smoker, large primary spontaneous pneumothorax → ==needle aspiration of air== (b)", node: "proc-needle-decompression", role: "first", why: "MCQ" }
    ]}
  ],
  sources: [
    "Primary: PrepLadder Medicine notes, PDF pp. 811–816 (Pneumothorax). TENSION from the notes.",
    "Davidson's / Boloor's not available — not used."
  ]
});
