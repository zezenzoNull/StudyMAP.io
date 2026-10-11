/* Pleural Effusion. Primary source: PrepLadder notes PDF pp. 804–810.
   PSM and RED are the notes' highlighted letters; other mnemonics written for this chart. */
MF.addTopic({
  id: "pleural-effusion",
  title: "Pleural Effusion",
  aka: ["hydrothorax", "Ellis curve", "meniscus sign", "Light's criteria", "transudate", "exudate", "thoracocentesis", "empyema", "malignant effusion", "chylothorax", "haemothorax", "Meigs syndrome", "trepopnoea", "platypnoea", "mesothelioma", "pleurodesis"],
  oneLine: "Detect (USG >50 mL · blunting >200 · clinical >300) → USG-guided tap (7–8th ICS, upper border of lower rib, ≤1500 mL) → Light's criteria → cause; empyema, malignant, chylous and bloody effusions.",
  flow: ["Stony dull, ↓ breath sounds, ↓ vocal fremitus", "CXR Ellis curve · USG (>50 mL)", "USG-guided tap → Light's criteria", "Transudate (CHF, nephrotic, cirrhosis) vs exudate (pneumonia, TB, cancer)", "Empyema → antibiotics + ICD · malignant → pleurodesis"],
  related: ["tb", "pneumothorax", "ra", "copd", "thyroid"],
  bubbles: [
    { type: "imaging", title: "Radiology & volumes", src: "p.804–805", items: [
      { table: { head: ["Shape", "Means"], rows: [
        { c: ["Concave + white + blunt CP angle", "==Ellis curve / meniscus sign== → effusion"], node: "img-cxr", role: "dx", why: "Effusion on CXR", hl: true },
        ["Convex", "==Empyema=="],
        ["Straight air–fluid line", "==Hydropneumothorax=="]
      ]}},
      { table: { caption: "How much fluid shows", head: ["Volume", "Detected by"], rows: [
        { c: [">50 mL", "==USG (best)== · CT · lateral decubitus X-ray"], node: "img-usg-chest", role: "ioc", why: "Minimal effusion" },
        ["**>200 mL**", "Blunting of CP angle (PA view)"],
        ["**>300 mL**", "==Clinical signs== (MCQ)"],
        ["**>500 mL**", "Hemidiaphragm obliterated"],
        ["**>1 L**", "==Contralateral tracheal shift=="]
      ]}},
      { mnemonic: "50 · 200 · 300 · 500 · 1000", t: "USG · blunting · clinical · diaphragm · trachea" }
    ]},
    { type: "definition", title: "Normal pleural fluid", src: "p.804", items: [
      { table: { head: ["Parameter", "Normal"], rows: [
        { c: ["Volume", "5–15 mL"], node: "lab-pleural-fluid", role: "dx", why: "Pleural fluid reference" },
        ["Colour", "Clear"],
        ["pH", "**7.60–7.64**"],
        ["Protein", "1–2 g/dL"],
        ["Glucose", "= plasma (↓ in inflammation)"],
        ["LDH", "<50% of plasma"]
      ]}}
    ]},
    { type: "clinical", title: "Signs", src: "p.805", items: [
      "Asymmetrical chest expansion · ==stony dullness== · ↓ vocal fremitus · ↓ / absent breath sounds",
      "Trachea → ==contralateral shift >1 L== (ipsilateral → collapse, pulmonary shunt)",
      "==Egophony== at the upper fluid level (E → A, goat-bleat bronchial breathing)",
      "Pleural rub → ==disappears on breath-holding== (pericardial rub persists)",
      { table: { caption: "Positional breathlessness", head: ["Term", "Worse when", "Cause"], rows: [["==Trepopnoea==", "Lateral decubitus", "Massive U/L effusion"], ["==Platypnoea==", "Upright / sitting", "Atrial myxoma · hepatopulmonary syndrome"], ["Orthopnoea", "Supine", "CHF"]] } }
    ]},
    { type: "investigation", title: "Thoracocentesis", src: "p.805–806", steps: [
      { t: "Indication → fluid separates lung from chest wall ==>10 mm==", type: "diagnosis" },
      { t: "Always ==USG-guided== → mark the largest pocket", node: "img-usg-chest", role: "init", type: "imaging", why: "Guides the tap" },
      { t: "Site → ==7–8th ICS between posterior axillary & mid-scapular line== (6–8 cm from spine) · not mid-axillary on right (liver)", node: "proc-pleural-tap", role: "dx", type: "investigation", why: "Safe tap site" },
      { t: "Chlorhexidine > povidone · local anaesthetic · needle along the ==upper border of the lower rib== (spares intercostal vessels)", type: "treatment" },
      { t: "Remove ==≤1500 mL per sitting== → more → ==re-expansion pulmonary oedema==", role: "danger", type: "emergency" }
    ]},
    { type: "diagnosis", title: "Transudate vs exudate", src: "p.806–807", wide: true, items: [
      { table: { head: ["", "Transudate", "Exudate"], rows: [
        ["Mechanism", "Starling imbalance (↑ hydrostatic / ↓ oncotic)", "Inflammation · ↑ permeability · fibrin-rich"],
        ["Causes", "CHF (LVF), constrictive pericarditis · nephrotic · cirrhosis · **P**eritoneal dialysis · **S**VC syndrome (oat-cell Ca) · **M**yxoedema", "Pneumonia (parapneumonic → empyema) · ==TB (India)== · lung adenocarcinoma · **R**A / CVD · **E**mbolism (PE) · **D**ressler · metapneumonic"]
      ]}},
      { mnemonic: "Transudate = PSM (notes) · Exudate = RED (notes)" },
      { t: "Myxoedema → myxoedema heart + lung", see: "thyroid" },
      { table: { caption: "Light's criteria — any ONE → exudate", head: ["Criterion", "Cut-off"], rows: [
        { c: ["PF : serum protein", "**>0.5**"], node: "lab-pleural-fluid", role: "dx", why: "Light's criteria" },
        ["PF : serum LDH", "**>0.6**"],
        { c: ["PF LDH", "**>2/3** upper limit of serum"], hl: true }
      ]}},
      { t: "Light's criteria misclassify ==25% of transudates as exudates==", role: "hy" },
      { mnemonic: "0.5 · 0.6 · 2/3" }
    ]},
    { type: "investigation", title: "Extra fluid tests", src: "p.807", items: [
      { table: { head: ["Finding", "Think"], rows: [
        ["Glucose ==<60 mg==", "Infection · malignancy · RA"],
        ["pH acidic (7.2) + Gram stain organisms (pneumococcus)", "==Empyema=="],
        { c: ["ADA ↑", "==TB== · malignancy"], node: "lab-ada", role: "dx", why: "TB effusion", see: "tb" },
        ["NT-proBNP ↑", "CHF → bilateral hydrothorax"],
        ["Culture", "Infection"],
        ["Amylase ↑", "==Oesophageal rupture (Boerhaave)== · pancreatitis"],
        ["Bloody", "TB · trauma · tumour (adenocarcinoma, mesothelioma)"],
        ["Cholesterol crystals (pseudochylous)", "TB · RA"]
      ]}}
    ]},
    { type: "treatment", title: "Empyema & malignant effusion", src: "p.807", steps: [
      { decision: "Type", branches: [
        { label: "Empyema (acidic, glucose <60, organisms)", steps: [
          { t: "Antibiotics", type: "treatment" },
          { t: "==ICD at 5th ICS, anterior to mid-axillary line (triangle of safety)== + intrapleural tPA + DNase", node: "proc-icd", role: "first", type: "treatment", why: "Empyema drainage" },
          { t: "Loculated → thoracoscopy + adhesiolysis → thoracotomy", role: "def", type: "treatment" }
        ]},
        { label: "Malignant (massive U/L, adenocarcinoma, trepopnoea)", steps: [{ t: "==Pleurodesis with doxycycline== · thoracoscopic pleural abrasion", node: "proc-pleurodesis", role: "first", type: "treatment", why: "Malignant effusion" }] }
      ]}
    ]},
    { type: "diagnosis", title: "Special effusions", src: "p.808–809", items: [
      { table: { head: ["Effusion", "Key facts", "Treatment"], rows: [
        ["Mesothelioma", "Pleural plaques + calcification · asbestos · up to 20 y after exposure", "—"],
        { c: ["==Chylothorax==", "Milky · ==TG >110 mg/dL== · thoracic-duct trauma (surgery), mediastinal tumour", "Octreotide · ICD · ==thoracic-duct ligation (main)=="], node: "rx-octreotide", role: "first", why: "Chylothorax" },
        ["Pseudochylothorax", "TB — milky from ==cholesterol==", "—"],
        { c: ["==Haemothorax==", "PF Hct ==>50%== of blood · intervene if drain ==>200 mL/h==", "Angiographic coil · thoracotomy"], role: "danger" },
        ["==Meigs syndrome==", "Ovarian fibroma / thecoma + ascites + ==right== effusion", "—"],
        ["Hepatic hydrothorax", "Cirrhotic ascites → effusion", "—"]
      ]}},
      { t: "Pulmonary embolism effusion → ==exudate==", role: "hy" }
    ]},
    { type: "mcq", title: "MCQs in the notes", src: "p.810", items: [
      { t: "Minimum for clinical detection → ==300 mL== (c)", role: "hy" },
      { t: "PF protein <0.5 and LDH <0.6 → ==CHF== (d)", role: "hy" },
      { t: "NOT malignant effusion → ==PF sugar >60 mg%== (d)", role: "hy" }
    ]}
  ],
  sources: [
    "Primary: PrepLadder Medicine notes, PDF pp. 804–810 (Pleural Effusion). PSM and RED are highlighted letters in the notes.",
    "Davidson's / Boloor's not available — not used."
  ]
});
