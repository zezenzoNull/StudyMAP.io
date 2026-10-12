/* Crystal Arthropathy. Primary source: PrepLadder notes PDF pp. 643–647.
   Mnemonics are memory aids written for this chart. */
MF.addTopic({
  id: "crystal",
  title: "Crystal Arthropathy",
  aka: ["gout", "podagra", "tophi", "pseudogout", "CPPD", "monosodium urate", "negatively birefringent", "allopurinol", "febuxostat", "colchicine", "pegloticase", "Martel sign", "double contour sign", "synovial fluid analysis", "saturnine gout"],
  oneLine: "Acute gout (thiazide / purine trigger, 1st MTP) → joint aspiration IOC (needle, −ve birefringent) → NSAID / colchicine; urate-lowering by over-producer vs under-excretor; pseudogout; synovial fluid table.",
  flow: ["Hot red 1st MTP (podagra) · thiazide / alcohol / meat", "Joint aspiration (IOC): needle, negatively birefringent", "Serum urate may be normal in a flare", "Ice + indomethacin/naproxen → colchicine (no aspirin, no allopurinol now)", "≥2 flares/y or tophi → allopurinol / febuxostat · uricosurics"],
  related: ["ra", "osteoarthritis", "dm-2"],
  bubbles: [
    { type: "clinical", title: "Acute gout", src: "p.643", items: [
      "Case → post-menopausal hypertensive woman on ==thiazides== → fever + excruciating pain at base of big toe (==podagra==)",
      { mnemonic: "Thiazides raise 'GLUC'", t: "side effects", lines: [["G", "Glucose ↑"], ["L", "Lipids ↑"], ["U", "Uric acid ↑ (triggers gout)"], ["C", "Calcium ↑ · K⁺ ↓ · Mg²⁺ ↓"]] },
      { t: "M/c joint → ==1st metatarsophalangeal== (notes print 'metacarpophalangeal')", verify: "Notes say '1st metacarpophalangeal joint'; podagra is the 1st METATARSOphalangeal joint (as the notes say elsewhere). Treat as a typo.", add: "Standard teaching: gout most often starts at the 1st metatarsophalangeal joint (base of the big toe), and 'podagra' means gout at this joint. Arthritis of the 2nd–3rd hand MCP joints is instead a clue to haemochromatosis arthropathy." },
      "Other → ankle, knee · middle-aged man after alcohol + meat binge (purines)",
      { t: "==Tophi== (ear lobes, IP joints) → chronic / acute-on-chronic gout", role: "hy" },
      "Nephrolithiasis",
      { t: "Coexists with OA → Heberden (DIP), Bouchard (PIP) nodes", see: "osteoarthritis" }
    ]},
    { type: "investigation", title: "Work-up", src: "p.643–644", wide: true, items: [
      { table: { head: ["Test", "Finding", "Role"], rows: [
        { c: ["==Joint aspiration==", "Turbid / chalky · ~5000 PMN/mm³ · ==needle-shaped, negatively birefringent== crystals", "==IOC / first test=="], node: "proc-synovial-fluid", role: ["ioc", "init"], why: "Gout diagnosis", hl: true },
        { c: ["Serum uric acid", "==Can be normal in a flare== (urate moves into joint)", "Not diagnostic"], node: "lab-uric-acid", role: "monitor", why: "Gout: serum urate unreliable in flare" },
        { c: ["24-h urinary uric acid", "Over-producer vs under-excretor", "Picks the drug"], node: "lab-uric-acid", role: "dx", why: "Choose urate-lowering drug" },
        ["Urine microscopy", "Nephrolithiasis", "—"],
        { c: ["Kidney function", "Deranged → dose-adjust drugs", "—"], node: "lab-renal", role: "monitor", why: "Dose adjustment" },
        { c: ["Lipids · LFT", "↑ → rule out syndrome X", "—"], node: ["lab-lipid", "lab-lft"], role: "dx", why: "Metabolic syndrome screen" },
        { c: ["X-ray", "==Martel sign== (overhanging edge, acute-on-chronic)", "—"], node: "img-xray", role: "dx", why: "Chronic gout erosions" },
        ["USG joint", "==Double-contour sign==", "—"]
      ]}}
    ]},
    { type: "emergency", title: "Acute gout — treatment flowchart", src: "p.644", steps: [
      { t: "Ice packs", type: "treatment" },
      { t: "==Indomethacin (DOC)== / naproxen · allergic → COX-2 inhibitor or steroids", node: ["rx-nsaid", "rx-steroids"], role: "first", type: "treatment", why: "Acute gout first line" },
      { t: "==Colchicine== → after 2–3 days once swelling settles · S/E ==diarrhoea==", add: "Standard teaching: colchicine is a first-line flare drug in its own right (alongside NSAIDs or steroids), not a later step, and works best started early (within 12–36 h of onset). A low dose (e.g. 0.5 mg 2–3 times daily) works as well as a high dose with less diarrhoea. Reduce or avoid it in CKD and with clarithromycin, ciclosporin or other strong CYP3A4 / P-glycoprotein inhibitors.", node: "rx-colchicine", role: "second", type: "treatment", why: "Acute gout" },
      { t: "==Aspirin and allopurinol contraindicated in an acute attack==", add: "Standard teaching: allopurinol is traditionally not started during a flare (ACR 2020 now allows it under anti-inflammatory cover), but if already taken it is continued unchanged, because a sudden shift in urate prolongs the attack. Aspirin is avoided because low doses reduce renal urate excretion; low-dose aspirin taken for heart protection is continued.", node: "rx-xoi", role: "ci", type: "emergency", why: "Don't start urate-lowering during a flare" },
      { mnemonic: "Ice, Indomethacin, then Colchicine — never Aspirin or Allopurinol in the fire" }
    ]},
    { type: "treatment", title: "Urate-lowering therapy", src: "p.644–645", steps: [
      { t: "Start if ==≥2 flares/year with tophi== · chronic gout with renal damage / stones", add: "Standard teaching: these are separate indications, not a combined one: ≥2 flares/year, OR any tophus, OR erosions on X-ray, OR stones / renal damage (EULAR offers it to anyone with recurrent flares). Treat to target: serum urate <6 mg/dL (<360 µmol/L), or <5 mg/dL (<300 µmol/L) with tophi or severe disease, continued long term.", type: "diagnosis" },
      { t: "First → weight + purine control · adjust diuretic (switch to CCB) · 24-h urinary uric acid", add: "Standard teaching: allopurinol is first-line for almost everyone, over-producer or under-excretor, so the 24-h urine no longer routinely picks the drug; classically a high urinary urate rules out uricosurics (stone risk). Losartan (mildly uricosuric) is a good antihypertensive choice alongside a CCB, and beer, spirits and fructose-sweetened drinks should be cut down.", node: "lab-uric-acid", role: "dx", type: "investigation", why: "Choose urate-lowering drug" },
      { decision: "Over-producer or under-excretor?", branches: [
        { label: "Over-producer", steps: [
          { t: "==Allopurinol== (xanthine oxidase inhibitor) · Asians → ==HLA-B*5801 PCR first== · S/E granulomatous hepatitis, ==SJS/TEN==", add: "Start low, go slow: 100 mg daily (less in CKD), raised every 2–4 weeks until the urate target is reached. Give low-dose colchicine (or NSAID) cover for the first 3–6 months to prevent flares as urate falls. Avoid with azathioprine / 6-mercaptopurine: xanthine oxidase breaks them down, so the combination causes marrow suppression.", node: "rx-xoi", role: "first", type: "treatment", why: "Urate over-production" },
          { t: "==Febuxostat== → no CKD dose change · ==black box: CVD risk==", node: "rx-xoi", role: "second", type: "treatment", why: "Alternative XOI" }
        ]},
        { label: "Under-excretor (normal KFT)", steps: [{ t: "==Probenecid== · benzbromarone (hepatotoxic) · lesinurad", node: "rx-uricosuric", role: "first", type: "treatment", why: "Urate under-excretion" }] },
        { label: "Severe refractory chronic", steps: [{ t: "==Pegloticase== IV every 2 weeks → uric acid → soluble allantoin", add: "Screen for G6PD deficiency first (risk of haemolysis and methaemoglobinaemia). Anti-drug antibodies cause infusion reactions and loss of effect → premedicate with antihistamine + steroid, check urate before each infusion and stop if it rises above 6 mg/dL; methotrexate given alongside reduces antibody formation.", role: "rescue", type: "treatment" }] }
      ]},
      { t: "==Saturnine gout== → lead poisoning (wine stored in lead vessels)", role: "hy", type: "pearl" }
    ]},
    { type: "diagnosis", title: "Crystals & pseudogout", src: "p.644–645", items: [
      { table: { head: ["Crystal", "Shape", "Birefringence", "Disease"], rows: [
        { c: ["Monosodium urate", "==Needle==", "==Negative==", "Gout"], hl: true },
        ["Calcium pyrophosphate", "==Rhomboid==", "==Positive==", "Pseudogout"],
        ["Calcium apatite", "Needle (electron microscopy)", "—", "—"]
      ]}, add: "Standard teaching: basic calcium phosphate (hydroxyapatite) crystals are not birefringent and too small to see singly by light microscopy; clumps stain with alizarin red, and single crystals need electron microscopy. They cause calcific tendinitis / periarthritis (supraspinatus commonest) and the destructive 'Milwaukee shoulder' of older women." },
      { mnemonic: "Gout = Needles go Negative · Pseudogout = Positive rhomboids (P-P)" },
      { t: "Pseudogout → m/c ==knee== · treat with ==steroids==", add: "Standard teaching: acute pseudogout is treated like gout → aspirate (relieves pain, excludes sepsis), ice, NSAID or low-dose colchicine, and intra-articular steroid once infection is excluded; no drug dissolves calcium pyrophosphate crystals. X-ray → chondrocalcinosis (knee menisci, wrist triangular fibrocartilage). In younger patients look for haemochromatosis, hyperparathyroidism and hypomagnesaemia.", node: "rx-steroids", role: "first", why: "Pseudogout" }
    ]},
    { type: "investigation", title: "Synovial fluid table", src: "p.645–646", wide: true, items: [
      { table: { head: ["Type", "Colour", "Clarity", "Viscosity", "WBC/mm³", "Neutrophils", "Gram", "Crystals"], rows: [
        { c: ["**Normal**", "Colourless", "Translucent", "↑", "<200", "<25%", "−", "−"], node: "proc-synovial-fluid", role: "dx", why: "Synovial fluid reference" },
        ["Non-inflammatory", "Straw / yellow", "Translucent", "↑", "200–2000", "<25%", "−", "−"],
        { c: ["Inflammatory (gout, RA)", "Yellow", "Cloudy", "↓", "2000–50,000", ">50%", "−", "==+=="], hl: true },
        ["Septic (children)", "Yellow / green", "Opaque", "↓", "==>50,000==", ">75%", "==+==", "−"],
        ["Haemarthrosis", "Red / xanthochromic", "Bloody", "Variable", "200–2000", "50–75%", "−", "−"]
      ]}, add: "Standard teaching: urate / calcium pyrophosphate crystals are found only in crystal arthritis (gout, pseudogout); RA, reactive and psoriatic arthritis give the same inflammatory picture without crystals. Crystals don't exclude infection (the two can coexist), so every hot-joint aspirate also goes for Gram stain and culture." },
      { mnemonic: "200 · 2000 · 50,000", t: "normal → non-inflammatory → inflammatory → septic" }
    ]},
    { type: "mcq", title: "MCQ in the notes", src: "p.647", items: [
      { t: "Pseudogout in the knee → ==rhomboid rectangular crystals== (b)", role: "hy" }
    ]}
  ],
  sources: [
    "Primary: PrepLadder Medicine notes, PDF pp. 643–647 (Crystal Arthropathy). Mnemonics written for this chart.",
    "Davidson's / Boloor's not available — not used."
  ]
});
