/* Scleroderma & Sjögren Syndrome. Primary source: PrepLadder notes PDF pp. 656–662.
   SySTEMIC-ITR and USE AB are from the notes; others written for this chart. */
MF.addTopic({
  id: "scleroderma-sjogren",
  title: "Scleroderma & Sjögren Syndrome",
  aka: ["systemic sclerosis", "SSc", "CREST", "dcSSc", "lcSSc", "anti-topoisomerase", "Scl-70", "anti-centromere", "RNA polymerase III", "scleroderma renal crisis", "Raynaud", "Sjögren", "sicca", "Schirmer test", "anti-Ro", "MCTD"],
  oneLine: "Systemic sclerosis (SySTEMIC-ITR; diffuse = anti-topoisomerase, limited/CREST = anti-centromere; renal crisis → ACEi, no steroids; ILD/PAH kill) and Sjögren (sicca, anti-Ro/La, lip biopsy IOC, USE AB criteria).",
  flow: ["Raynaud + tight shiny skin / dry eyes + mouth", "ANA screen → topoisomerase (diffuse) · centromere (CREST) · RNA pol III (renal crisis)", "Watch ILD (NSIP) · PAH · renal crisis (onion-skin)", "Renal crisis → ACE inhibitor · steroids C/I", "Sjögren: Schirmer · anti-Ro · lip biopsy → pilocarpine, HCQ"],
  related: ["sle", "ra", "ild", "thyroid"],
  bubbles: [
    { type: "clinical", title: "Systemic sclerosis — SySTEMIC-ITR (notes)", src: "p.656", wide: true, items: [
      "F : M ≈ **4.6 : 1** · ANA + (screen)",
      { table: { head: ["Letter", "Feature", "Detail"], rows: [
        ["**S**", "Sclerodactyly", "Lost IP-joint creases (subcutaneous fibrosis) · ischaemic digital ulcers"],
        ["**S**", "Skin thickening", "Waxy, taut → flexion contractures · salt-and-pepper skin · microstomia"],
        ["**T**", "Telangiectasia", "More telangiectasia → ↑ HTN risk"],
        ["**E**", "Oesophageal dysmotility", "↓ LES tone (fibrosis) → GERD, micro-aspiration"],
        ["**M**", "Malabsorption", "Gut fibrosis → ↓ motility"],
        { c: ["**I**", "ILD", "==NSIP > UIP== · pulmonary fibrosis + PAH = ==leading cause of death=="], node: ["img-hrct", "con-pah"], role: "danger", why: "SSc lung disease", hl: true },
        ["**C**", "Calcinosis cutis", "Calcium hydroxyapatite in skin"],
        { c: ["**I**", "Immunology", "==Anti-topoisomerase (IOC)=="], node: "lab-ena", role: "ioc", why: "SSc IOC antibody" },
        ["**T**", "Tendon friction rub", "Fibrosis + calcification → audible creak"],
        { c: ["**R**", "Raynaud", "White → blue → red"], node: "con-raynaud", role: "dx", why: "Raynaud in SSc" }
      ]}, add: "Standard teaching: the hypertension linked with many telangiectasias is PULMONARY hypertension → numerous mat-like telangiectasias (face, lips, palms) mark the vasculopathy of limited SSc and its PAH risk. Gut vascular ectasias (incl. gastric antral vascular ectasia, 'watermelon stomach') can bleed → iron-deficiency anaemia. · Standard explanation: smooth-muscle atrophy and fibrosis of the small bowel → stasis (even pseudo-obstruction) → small-intestinal bacterial overgrowth → bloating, diarrhoea, steatorrhoea and B12 deficiency. Treated with rotating courses of antibiotics plus prokinetics." }
    ]},
    { type: "patho", title: "Organ pathology", src: "p.657", items: [
      { table: { head: ["Organ", "Pathology"], rows: [
        ["Vessels", "==Endothelial–mesenchymal transition== (vessel fibrosis)"],
        ["Skin", "Thick dermis (↓ wrinkles), atrophic adnexa"],
        { c: ["Lungs — ILD", "NSIP · ↓ DLCO · ==FEV₁/FVC >0.8== (restrictive)"], node: "bed-pft", role: "dx", why: "Restrictive ILD in SSc", see: "ild" },
        { c: ["Lungs — PAH", "Loud P2 · ↓ DLCO · functional TR · ==Graham Steell murmur== · Rx bosentan, ambrisentan"], node: "con-pah", role: "dx", why: "SSc PAH" },
        ["Kidney — renal crisis", "Fibrinoid necrosis · ==onion-skinning== · ↓ GFR → RAAS → HTN"],
        ["Heart", "Myocardial fibrosis · sick sinus · atherosclerotic CVD · pericarditis"],
        ["Muscle", "Tendon-sheath fibrosis → ==tendon friction rub=="]
      ]}}
    ]},
    { type: "investigation", title: "Antibodies in systemic sclerosis", src: "p.658", wide: true, items: [
      { table: { head: ["Antibody", "IF pattern", "Meaning"], rows: [
        { c: ["==Anti-topoisomerase (ATA)== — IOC", "Homogeneous", "==Diffuse cutaneous SSc=="], node: "lab-ena", role: "ioc", why: "Diffuse SSc", hl: true },
        { c: ["==Anti-centromere (ACA)==", "Discrete speckled", "==Limited cutaneous / CREST=="], node: "lab-ana", role: "dx", why: "CREST pattern" },
        { c: ["Anti-RNA polymerase III", "Speckled nucleoplasmic", "↑ ==scleroderma renal crisis== risk"], role: "danger" },
        ["U3 RNP", "—", "Fibrillarin"],
        ["U1 RNP", "—", "==MCTD== (lcSSc + SLE + PM + RA)"],
        ["Ku", "—", "SLE + myositis overlap"],
        ["Th/To · PM/Scl · U11/U12", "—", "—"]
      ]}, add: "Standard teaching: Th/To and PM/Scl, like anti-U3 RNP (= anti-fibrillarin), give a NUCLEOLAR ANA pattern · Th/To → limited skin disease but ILD and PAH · PM/Scl → polymyositis–scleroderma overlap · U11/U12 RNP → severe, progressive ILD · U3 RNP → diffuse disease with PAH and myositis, commoner in men and people of African ancestry." },
      "Overlap syndrome → ≥2 well-defined CTDs in one patient",
      { t: "ANA patterns", see: "sle" }
    ]},
    { type: "diagnosis", title: "Spectrum of disease", src: "p.659", items: [
      { table: { head: ["", "Diffuse (dcSSc)", "Limited / CREST", "SSc sine scleroderma"], rows: [
        ["Skin", "Distal → proximal → face", "Raynaud precedes sclerodactyly by years", "==No skin thickening=="],
        ["Organs", "==ILD, renal==", "Calcinosis · Raynaud · oEsophagus · Sclerodactyly · Telangiectasia", "—"],
        { c: ["Antibody", "==Anti-topoisomerase==", "==Anti-centromere==", "—"], hl: true }
      ]}, add: "Standard definition: diffuse disease = skin thickening proximal to the elbows/knees or on the trunk, usually starting within about a year of Raynaud; limited disease stays distal to the elbows/knees (face and neck can be involved). So face involvement does not separate the two." },
      { mnemonic: "CREST = Calcinosis · Raynaud · oEsophagus · Sclerodactyly · Telangiectasia", t: "Centromere = CREST" }
    ]},
    { type: "clinical", title: "Raynaud phenomenon", src: "p.659", items: [
      "Sites → fingertips, nose, ear lobes, toes · triggers → cold, emotion, vibration",
      { chain: ["White (vasoconstriction)", "Blue (deoxy-Hb)", "Red (vasodilatation)"], node: "con-raynaud", why: "Raynaud colour sequence" },
      { mnemonic: "W-B-R = 'White, Blue, Red — like a flag going up'" },
      { table: { head: ["", "Primary (disease)", "Secondary (phenomenon)"], rows: [
        ["Cause", "Idiopathic", "SSc · hypothyroidism · cryoglobulinaemia, polycythaemia · vibration (hammer hand, crane operator) · cisplatin"],
        ["Nail-fold capillaroscopy", "Normal hairpin capillaries", "==Capillary loss, dilatation, haemorrhage=="]
      ]}},
      { t: "Hypothyroidism", see: "thyroid" }
    ]},
    { type: "emergency", title: "Scleroderma renal crisis", src: "p.660", steps: [
      { t: "Accelerated HTN + AKI · anti-RNA pol III · leathery tendon rubs · anaemia + thrombocytopenia", type: "clinical" },
      { t: "Biopsy → ==onion-skinning== · smear → ==schistocytes==", node: ["proc-renal-biopsy", "lab-cbc"], role: "dx", type: "investigation", why: "Renal crisis findings" },
      { t: "==ACE inhibitor== (treatment of choice)", add: "Standard teaching: start a short-acting ACE inhibitor (e.g. captopril) at once and increase the dose rapidly until BP is back to baseline → keep it going even if creatinine rises or dialysis is needed, because kidney function can recover over many months. Add a calcium-channel blocker if BP stays high despite the maximal ACE inhibitor dose.", node: "rx-acei", role: "first", type: "emergency", why: "Scleroderma renal crisis" },
      { t: "==Steroids contraindicated== — worsen renal crisis", node: "rx-steroids", role: "ci", type: "emergency", why: "Steroids precipitate SRC" }
    ]},
    { type: "treatment", title: "SSc management", src: "p.660", items: [
      "No drug alters natural history",
      { table: { head: ["Problem", "Drug"], rows: [
        { c: ["Disease / skin", "Cyclophosphamide · methotrexate · tocilizumab · rituximab"], node: "rx-methotrexate", role: "first", why: "SSc immunosuppression" },
        { c: ["ILD", "==Nintedanib=="], node: "rx-antifibrotic", role: "first", why: "SSc-ILD" },
        { c: ["HTN / renal", "==ACE inhibitor=="], node: "rx-acei", role: "first", why: "SSc hypertension" },
        { c: ["Raynaud", "CCB · prazosin · sildenafil · topical GTN · IV prostaglandin"], node: "rx-ccb", role: "first", why: "Raynaud treatment" }
      ]}, add: "Standard teaching: first-line SSc-ILD treatment is immunosuppression → mycophenolate mofetil (or IV cyclophosphamide), with tocilizumab or rituximab as alternatives; nintedanib slows FVC decline and is often added when fibrosis progresses. Lung transplantation is for end-stage disease, and autologous stem-cell transplantation for selected early, rapidly progressive diffuse disease." },
      { t: "Cancer risk ↑ (lung, oesophagus) → ↑ ESR", add: "Standard teaching: the excess cancers are lung (especially with ILD) and oesophageal adenocarcinoma via reflux-induced Barrett's oesophagus. Anti-RNA polymerase III disease may start close in time to a cancer diagnosis (notably breast), so these patients need careful age-appropriate cancer screening. A raised ESR is a non-specific clue, not a screening test.", role: "hy" }
    ]},
    { type: "clinical", title: "Sjögren syndrome", src: "p.660–661", items: [
      "==Lymphocytic infiltration of exocrine glands== · F : M 10–20 : 1 · HLA-DR3, DRw52",
      { t: "B-cell hyperactivity → ↑ ==lymphoma==, myeloma", add: "Standard teaching: the typical tumour is extranodal marginal-zone (MALT) B-cell non-Hodgkin lymphoma, most often in the parotid. Warning signs → persistent parotid swelling, lymphadenopathy, splenomegaly, purpura/cryoglobulinaemia, low C4 and a monoclonal band.", role: "danger" },
      { table: { head: ["Feature", "Detail"], rows: [
        ["Sicca", "Dry eyes (keratoconjunctivitis) · dry mouth · dry vagina"],
        ["Glands", "Bilateral parotid enlargement"],
        ["General", "Fatigue, low fever · Raynaud · small-joint arthritis · ILD"],
        { c: ["Kidney", "==RTA type 1== (urine pH >5.5, normal AG) · MPGN"], role: "hy" },
        ["Teeth", "Caries (S. mutans) from low saliva"]
      ]}},
      { t: "Antibodies → ==anti-Ro 52 / Ro 60 (SS-A), La (SS-B)==", node: "lab-ena", role: "dx", why: "Sjögren antibodies" }
    ]},
    { type: "investigation", title: "Sjögren work-up — USE AB (notes)", src: "p.661", items: [
      { table: { head: ["Letter", "Test", "Positive"], rows: [
        ["**U**", "Unstimulated salivary flow", "<0.1 mL/min"],
        ["**S**", "==Schirmer test==", "<5 mm in 5 min (one eye)"],
        ["**E**", "Eye stain (lissamine green / rose bengal)", "Score >5 · van Bijsterveld >4"],
        { c: ["**A**", "Anti-Ro antibody", "+"], node: "lab-ena", role: "confirm", why: "Sjögren serology" },
        { c: ["**B**", "==Labial minor salivary gland biopsy== (IOC)", "Lymphoid infiltrate"], role: "ioc", hl: true }
      ]}},
      { t: "Need ==1 of U/S/E== + ==1 of A/B==", add: "Standard teaching (2016 ACR/EULAR criteria): lip biopsy with focus score ≥1 (≥1 focus of ≥50 lymphocytes per 4 mm² of gland) and anti-Ro each score 3, while Schirmer, ocular staining and unstimulated salivary flow score 1 each → total ≥4 in a patient with sicca symptoms = Sjögren, so A + B alone also qualifies (anti-La alone no longer counts). First exclude head–neck radiotherapy, active hepatitis C, AIDS, sarcoidosis, amyloidosis, graft-versus-host disease and IgG4-related disease.", role: "hy" }
    ]},
    { type: "treatment", title: "Sjögren treatment", src: "p.661", items: [
      "Methylcellulose eye drops",
      "==Cevimeline, pilocarpine== → ↑ salivary flow",
      { t: "Hydroxychloroquine", node: "rx-hcq", role: "first", why: "Sjögren systemic disease" },
      { t: "Soda bicarbonate → RTA type 1", add: "Standard teaching: potassium citrate (or bicarbonate plus potassium supplements) is preferred, because distal RTA comes with hypokalaemia (→ weakness, even hypokalaemic periodic paralysis) and citrate also reduces stones and nephrocalcinosis. The underlying kidney lesion is tubulointerstitial nephritis.", node: "rx-bicarbonate", role: "first", why: "Distal RTA" },
      { t: "Glucocorticoids · rituximab", node: "rx-steroids", role: "second", why: "Severe extraglandular Sjögren" }
    ]},
    { type: "mcq", title: "MCQ in the notes", src: "p.662", items: [
      { t: "Raynaud, skin thickening, telangiectasia, rising BP, ↓ GFR → TOC ==ACE inhibitor== (c)", node: "rx-acei", role: "first", why: "MCQ: scleroderma renal crisis" }
    ]}
  ],
  sources: [
    "Primary: PrepLadder Medicine notes, PDF pp. 656–662 (Scleroderma & Sjögren). SySTEMIC-ITR and USE AB from the notes.",
    "Davidson's / Boloor's not available — not used."
  ]
});
