/* Tuberculosis. Primary source: PrepLadder notes PDF pp. 789–796.
   BLL (group A) is from the notes; others written for this chart. */
MF.addTopic({
  id: "tb",
  title: "Tuberculosis",
  aka: ["TB", "pulmonary TB", "extrapulmonary TB", "pleural TB", "Pott's disease", "Ghon focus", "Ranke complex", "miliary TB", "Puhl lesion", "Assmann focus", "massive haemoptysis", "Rasmussen aneurysm", "CBNAAT", "GeneXpert", "LAM", "HRZE", "MDR-TB", "BPaLM", "bedaquiline"],
  oneLine: "M/c infectious killer: extrapulmonary sites (pleural ADA, CBNAAT biopsy IOC), primary vs post-primary lung TB, massive haemoptysis, NTEP diagnostic algorithm (smear/CXR → CBNAAT), HRZE regimen and MDR (BPaLM).",
  flow: ["Cough >2 weeks · evening fever · weight loss", "Sputum smear + CXR → CBNAAT (MTB + Rif)", "Rif sensitive → 2HRZE + 4HRE (56 + 112 doses)", "Rif resistant → BPaLM (≥14 y)", "Extrapulmonary: pleural/LN/bone biopsy IOC · CNS 1 y + dexamethasone"],
  related: ["meningitis-2", "pleural-effusion", "adrenal", "sarcoidosis", "ild"],
  bubbles: [
    { type: "definition", title: "Big picture", src: "p.789", items: [
      { t: "==M/c infectious disease== and ==top infectious cause of death== in the world", role: "hy" },
      { t: "Haemoptysis source → ==bronchial artery== → ==bronchial artery embolisation==", node: "proc-bae", role: "first", why: "TB haemoptysis" },
      "HIV biomarker of active TB → ==urinary lateral-flow LAM== (LAM blocks phagosome–lysosome fusion)",
      "Virulence factors → ==LAM + cord factor==",
      { t: "M/c extrapulmonary site → ==TB cervical lymphadenitis==", role: "hy" }
    ]},
    { type: "clinical", title: "Extrapulmonary TB", src: "p.789–791", wide: true, items: [
      { table: { head: ["Site", "Key facts", "IOC"], rows: [
        { c: ["==Pleural==", "Fever, pleuritic pain, ==stony dull== · CXR blunt CP angle, ==Ellis curve / meniscus== · tap: straw/haemorrhagic, ==exudate== (protein >0.5, LDH >0.6), ↓ sugar, ↓ pH, lymphocytes, ==ADA >40 U/mL (supportive)==", "==Pleural biopsy CBNAAT== > fluid CBNAAT"], node: ["proc-pleural-tap", "lab-ada", "lab-cbnaat"], role: "dx", why: "Pleural TB work-up", see: "pleural-effusion", hl: true },
        ["Tubercular ascites", "==SAAG <1.1==", "—"],
        ["Pericardial", "Constrictive pericarditis · diastolic ==pericardial knock / shudder==", "—"],
        { c: ["TB meningitis", "==Cobweb coagulum==, lymphocytes, ==CSF protein >1 g==, Rich focus", "—"], node: "lab-csf", role: "dx", why: "TBM CSF", see: "meningitis-2" },
        ["Lymph node", "Ghon focus in ==tonsil== · cervical → ==cold abscess== · posterior cervical > supraclavicular (Troisier / Virchow) · DD ==Kikuchi== (histiocytic)", "==Excision biopsy== (FNAC first) · ATT + anti-gravity drainage"],
        ["Upper airway", "Swallowed sputum → larynx, pharynx, epiglottis", "—"],
        ["Genitourinary", "==Sterile pyuria in acidic urine== · 3 morning samples · ==putty kidney==, ureteric strictures · F → fallopian tube · M → epididymis", "—"],
        { c: ["==Skeletal (Pott)==", "Spine > hip > knee · ==2 adjacent vertebrae== · ==gibbus== · lower thoracic / upper lumbar · paraplegia + psoas abscess", "==Bone biopsy== > abscess aspirate · TB hip → synovial biopsy"], node: "img-mri-spine", role: "dx", why: "MRI spine in Pott's (joint space ↓)" },
        ["GI", "Swallowed sputum > M. bovis milk · ==ileocaecal stricture== (RIF lump) · MR enterography · barium ==obtuse ileocaecal angle==", "—"],
        { c: ["Others", "Adrenal → ==Addison== · congenital → ==liver first== · fungal ball (aspergilloma, air crescent)", "—"], see: "adrenal" }
      ]}, add: "Troisier's sign (an enlarged left supraclavicular Virchow's node) classically points to abdominal, especially gastric, cancer, so it is a differential here rather than a TB sign. TB nodes progress: lymphadenitis → matted nodes (periadenitis) → caseation → cold abscess → collar-stud abscess → discharging sinus. · These are Light's criteria ratios: pleural/serum protein >0.5 and pleural/serum LDH >0.6 (or pleural LDH >⅔ of the upper normal serum value). TB fluid typically has very few mesothelial cells." },
      "Dowager's hump (thoracic kyphosis) → osteoporosis, not TB"
    ]},
    { type: "patho", title: "Pulmonary TB — primary vs post-primary", src: "p.791–792", wide: true, items: [
      { chain: ["==Ghon focus== (lower upper lobe / upper middle lobe)", "Lymphangitis", "Lymphadenopathy = ==Ghon complex==", "Calcified = ==Ranke complex== (good immunity)"], add: "Standard wording: the Ghon focus is a subpleural lesion in the lower part of the upper lobe or the upper part of the lower lobe, i.e. the well-ventilated mid-lung just under the pleura." },
      { table: { head: ["", "Primary progressive", "Post-primary (adult)"], rows: [
        ["Who", "Poor immunity", "Reactivation from Ranke complex"],
        ["Spread", "Effusion · nodes compress airway (ball-valve collapse) · cavity · bronchiectasis sicca · ==tree-in-bud== (HRCT, endobronchial) · ==miliary (snowstorm)==", "Supraclavicular → ==Puhl lesion== · infraclavicular → ==Assmann focus=="],
        ["Site", "—", "==Apical / posterior segments of upper lobe=="],
        ["Features", "—", "Low fever with ==evening rise== · cough >2 wk · weight + appetite loss · night sweats · haemoptysis · clubbing rare"]
      ]}, add: "Standard teaching: reactivation usually starts from dormant bacilli seeded to the lung apices during the primary bacteraemia (Simon foci), where high oxygen tension favours growth, hence the apical site of post-primary TB. Exogenous reinfection is the other route in high-burden countries." },
      { t: "Snowstorm CXR → silicosis · chickenpox pneumonia · alveolar proteinosis · miliary TB", node: "img-cxr", role: "hy", why: "Snowstorm differential" },
      { mnemonic: "Puhl = Peak (supraclavicular) · Assmann = Armpit level (infraclavicular)" }
    ]},
    { type: "emergency", title: "Massive haemoptysis", src: "p.792", items: [
      { t: "Leading cause → ==TB== · source → ==bronchial artery==", role: "hy" },
      { t: "Definition → ==>600 mL/24 h== or ==>150 mL in one episode==", role: "danger" },
      { t: "Treat → ==bronchial artery embolisation==", add: "Standard sequence: secure the airway and lie the patient bleeding side down (protects the good lung), resuscitate and correct clotting, then find the source with CT angiography / bronchoscopy before embolising. Surgical resection if embolisation fails or bleeding recurs.", node: "proc-bae", role: "emerg", why: "Massive haemoptysis" },
      "==Rasmussen aneurysm== → dilated ==pulmonary== artery in a cavity ruptures",
      { mnemonic: "600 a day or 150 at once" }
    ]},
    { type: "investigation", title: "Diagnostic algorithm (NTEP)", src: "p.792–793", wide: true, steps: [
      { t: "Presumptive TB: cough >2 weeks ± symptoms (offer HIV testing to all)", type: "clinical" },
      { t: "Sputum smear + CXR", node: ["lab-afb", "img-cxr"], role: "init", type: "investigation", why: "First TB tests" },
      { decision: "Result", branches: [
        { label: "Smear + and CXR suggestive", steps: [{ t: "Microbiologically confirmed TB (CBNAAT for Rif if PMDT/high MDR)", add: "Standard teaching (current NTEP): universal drug-susceptibility testing. Every microbiologically confirmed patient gets a rifampicin-resistance test (CBNAAT / Truenat) whatever the risk group, and if Rif-sensitive, a line probe assay for isoniazid resistance.", type: "diagnosis" }] },
        { label: "Any discordance / negative but high suspicion / PLHIV", steps: [{ t: "==CBNAAT==", node: "lab-cbnaat", role: "confirm", type: "investigation", why: "Confirms MTB + rifampicin resistance" }] }
      ]},
      { decision: "CBNAAT", branches: [
        { label: "MTB + Rif sensitive", steps: [{ t: "Confirmed TB → HRZE", type: "diagnosis" }] },
        { label: "Rif indeterminate", steps: [{ t: "Repeat on 2nd sample → still → liquid culture / LPA", type: "investigation" }] },
        { label: "Rif resistant", steps: [{ t: "Manage as Rif-resistant (BPaLM)", type: "treatment" }] },
        { label: "MTB not detected", steps: [{ t: "Alternative diagnosis / specialist / clinically diagnosed TB", type: "diagnosis" }] }
      ]}
    ]},
    { type: "investigation", title: "Tests & turnaround", src: "p.793–794", items: [
      { table: { head: ["Test", "TAT", "Use"], rows: [
        { c: ["ZN stain", "Same day (~1 h)", "AFB · low sensitivity"], node: "lab-afb", role: "screen", why: "Smear" },
        { c: ["==CBNAAT (GeneXpert)==", "==2–3 h==", "==MTB + rifampicin resistance=="], node: "lab-cbnaat", role: "confirm", why: "Rapid molecular", hl: true },
        ["Line probe assay", "24–48 h", "MTB + 1st-line resistance"],
        ["Liquid culture (MGIT 960)", "7–14 days", "==Most sensitive== for growth (O₂-depletion fluorescence)"],
        ["Solid culture (LJ)", "4–8 weeks", "Isolation + DST"],
        ["Immunochromatographic assay", "~15 min", "Rapid confirmation from culture"]
      ]}},
      { t: "High MDR setting → >5% of samples MDR · BACTEC → measures CO₂ released", add: "The older radiometric BACTEC 460 measured ¹⁴CO₂ released from ¹⁴C-labelled palmitic acid. The current BACTEC MGIT 960 instead detects O₂ use by fluorescence, as in the table above." }
    ]},
    { type: "treatment", title: "Drug-sensitive TB", src: "p.794", wide: true, items: [
      { table: { head: ["Drug", "mg/kg", "Action", "Cidal?", "Liver", "Resistance gene", "Main S/E"], rows: [
        { c: ["**H** isoniazid", "5", "Mycolic acid synthesis", "Cidal", "+", "katG, inhA", "==Peripheral neuritis=="], node: "rx-att", role: "first", why: "First-line ATT" },
        ["**R** rifampicin", "10", "RNA polymerase", "Cidal", "+", "rpoB", "==Orange urine==, flu-like"],
        { c: ["**Z** pyrazinamide", "25", "Pyrazinoic acid · membrane transporter", "Cidal", "==+++==", "pncA", "==Hyperuricaemia=="], hl: true },
        ["**E** ethambutol", "15", "Arabinogalactan (cell wall)", "==Static==", "−", "embB", "==Optic neuritis=="]
      ]}, add: "Standard explanation: pyrazinamide is a prodrug that bacterial pyrazinamidase converts to pyrazinoic acid. It works only at acid pH, so it kills semi-dormant bacilli inside macrophages and in acidic inflamed lesions. This sterilising action in the first 2 months is what lets treatment be shortened to 6 months." },
      { mnemonic: "5-10-25-15 (H-R-Z-E) · Neuritis-Orange-Uric-Eyes" },
      { table: { head: ["Phase", "Regimen", "Doses"], rows: [["Intensive", "2 HRZE", "**56**"], ["Continuation", "4 HRE (notes print 4HRZE)", "**112**"]] } },
      { t: "Continuation phase printed as '4HRZE'", verify: "NTEP continuation phase is 4 months of H-R-E (pyrazinamide stops after the intensive phase). Verify.", add: "Standard teaching confirms this: NTEP gives pyrazinamide only in the 2-month intensive phase. WHO's standard continuation phase is 4HR. NTEP keeps ethambutol in it because isoniazid resistance is common, so rifampicin is never left unprotected." },
      { t: "CNS TB → ==1 year== + ==dexamethasone 6–8 weeks==", node: "rx-dexamethasone", role: "adjunct", why: "CNS TB" },
      "Intra-ocular TB → 9 months + steroid drops"
    ]},
    { type: "treatment", title: "Drug-resistant TB", src: "p.795", items: [
      { table: { head: ["Type", "Resistant to"], rows: [["==MDR==", "INH + rifampicin"], ["Pre-XDR", "MDR + fluoroquinolone"], ["XDR", "MDR + FQ + ≥1 group A drug"]] } },
      { table: { head: ["Group A — BLL (notes)", "Group B", "Group C"], rows: [
        ["**B**edaquiline (ATP synthase · ==C/I QT >500 ms==)", "Cycloserine", "Delamanid · meropenem · PAS"],
        ["**L**inezolid (protein synthesis)", "Clofazimine (==red-brown skin==)", "Ethionamide · ethambutol · pyrazinamide"],
        ["**L**evo / moxifloxacin (DNA gyrase)", "", ""]
      ]}},
      { t: "Polymorphic VT drugs → cisapride · astemizole · erythromycin · bedaquiline", role: "danger" },
      { h: "BPaLM — 1st choice for MDR/RR-TB ≥14 y (any FQ / HIV status)" },
      { table: { head: ["Drug", "Dose"], rows: [
        { c: ["Bedaquiline", "400 mg OD × 2 wk → 200 mg 3×/wk to wk 26/39"], node: "rx-mdr-tb", role: "first", why: "BPaLM" },
        ["Pretomanid", "200 mg daily"],
        ["Linezolid", "600 mg OD"],
        ["Moxifloxacin", "400 mg OD"],
        ["Pyridoxine", "50 mg (16–29 kg) · 100 mg (≥30 kg)"]
      ]}, add: "Standard teaching (WHO): if fluoroquinolone resistance is confirmed (pre-XDR-TB), moxifloxacin is dropped and the rest is given as BPaL. This is how BPaLM covers 'any FQ status'." }
    ]},
    { type: "mcq", title: "MCQ in the notes", src: "p.796", items: [
      { t: "NOT a pleural TB finding → ==decreased ADA== (d)", node: "lab-ada", role: "dx", why: "MCQ: ADA is raised in TB" }
    ]}
  ],
  sources: [
    "Primary: PrepLadder Medicine notes, PDF pp. 789–796 (Tuberculosis). BLL from the notes.",
    "Davidson's / Boloor's not available — not used."
  ]
});
