/* Systemic Lupus Erythematosus (+ APS). Primary source: PrepLadder notes PDF pp. 628–636.
   SONAR (SLICC) and SHIP are from the notes; other mnemonics written for this chart. */
MF.addTopic({
  id: "sle",
  title: "Systemic Lupus Erythematosus",
  aka: ["SLE", "lupus", "SLICC", "EULAR/ACR 2019", "ANA", "anti-dsDNA", "anti-Smith", "anti-Ro", "lupus nephritis", "drug-induced lupus", "antiphospholipid syndrome", "APS", "ANA patterns", "livedo reticularis", "Libman-Sacks"],
  oneLine: "Type III hypersensitivity: SLICC (SONAR) and EULAR/ACR (ANA ≥1:80 entry, ≥10 points, kidney weighted most); antibody table; nephritis classes; pregnancy; APS.",
  flow: ["Young woman: malar rash, arthritis, serositis, ulcers", "ANA ≥1:80 (entry) → anti-dsDNA / anti-Sm · ↓ C3/C4", "EULAR/ACR ≥10 points (≥1 clinical)", "UPCR · biopsy → nephritis class", "HCQ ± low-dose steroid → organ threat: high steroid + MMF/CYC · APS: aspirin + LMWH"],
  related: ["ra", "scleroderma-sjogren", "tia-stroke-int", "epilepsy"],
  bubbles: [
    { type: "definition", title: "Big picture", src: "p.628", items: [
      "==Type III hypersensitivity== → ↑ autophagy, NETosis (neutrophil traps damage vessels, esp. kidney)",
      { table: { head: ["Fact", "Value"], rows: [
        ["F : M", "**5.5–6.5 : 1**"],
        ["Gene", "==TREX-1 (X chromosome)== · severe in Klinefelter (47 XXY)"],
        ["M/c system", "==Musculoskeletal=="],
        { c: ["Highest EULAR/ACR weight", "==Kidney (lupus nephritis)=="], hl: true },
        ["Diagnosis", "==≥10 points== over 7 clinical + 3 immunological domains"],
        ["Entry criterion", "ANA ==≥1:80 on Hep-2 cells== (notes print 'ANCA')"]
      ]}, add: "Standard teaching: TREX1 (a DNA-clearing exonuclease gene) is on chromosome 3 and is a rare single-gene cause. The strongest single-gene risk is inherited early-complement deficiency (C1q > C4 > C2), and HLA-DR2/DR3 are the common associations. The X-chromosome link is gene dosage (e.g. TLR7 escaping X-inactivation), so men with Klinefelter (XXY) have a risk close to that of women." },
      { t: "Entry criterion printed as '+ve ANCA'", verify: "Typo: the EULAR/ACR entry criterion is ANA ≥1:80 (as the notes' own table on p.631 says), not ANCA." },
      "Malar rash → nose, cheeks, ear lobes · photosensitive (vs ==malar flush== of mitral stenosis)"
    ]},
    { type: "diagnosis", title: "SLICC criteria — SONAR (notes)", src: "p.628–630", wide: true, items: [
      "≥4 features with ≥1 clinical + ≥1 immunological",
      { table: { head: ["Letter", "Feature", "Detail"], rows: [
        ["**S**", "Synovitis", "≥2 joints · soft-tissue swelling · small-joint tenderness · knee"],
        ["**S**", "Serositis", "Lung → pleuritis (rub), shrinking lung · heart → ==pericarditis (ST ↑)== · Libman–Sacks (mitral) · myocarditis · accelerated atherosclerosis"],
        ["**S**", "Skin", "SCLE (photosensitive, ==anti-Ro==, malar rash) · discoid (==atrophic scarring==) · panniculitis"],
        ["**O**", "Oral / nasal ulcers", "==No genital ulcers== (Behçet has both)"],
        ["**N**", "Non-scarring alopecia", "—"],
        ["**N**", "Neurological", "Headache · seizures (lupus cerebritis) · myelopathy · neuropathy · depression / psychosis → ==anti-ribosomal P=="],
        { c: ["**A**", "Autoimmune haemolytic anaemia", "Coombs + · spherocytes · leuco/lympho/thrombocytopenia → steroids"], node: "lab-coombs", role: "dx", why: "SLE haemolysis" },
        { c: ["**R**", "Renal", "UPCR ==>0.5== (normal <0.2) · RBC casts · biopsy ==wire-loop==, class III/IV, ==full-house IF== · ↓ GFR, renin ↑, HTN"], node: ["lab-upcr", "proc-renal-biopsy"], role: "dx", why: "Lupus nephritis", hl: true }
      ]}, add: "Standard grouping: the malar (butterfly) rash is ACUTE cutaneous lupus and spares the nasolabial folds. Subacute cutaneous lupus (SCLE) is a non-scarring annular or psoriasiform photosensitive rash on the upper trunk and arms, linked to anti-Ro. Discoid lupus is chronic cutaneous lupus, and it scars. · Diffuse thinning or fragile, easily broken hairs at the frontal hairline ('lupus hair') that grow back once the disease is controlled. This is unlike discoid lupus of the scalp, which leaves permanent scarring alopecia." },
      "Pericardial vs pleural rub → hold breath → persists = pericarditis",
      { t: "M/c anaemia in SLE → ==anaemia of chronic disease== (normocytic normochromic)", role: "hy" }
    ]},
    { type: "investigation", title: "Autoantibodies", src: "p.630, 632", wide: true, items: [
      { table: { head: ["Antibody", "Meaning"], rows: [
        { c: ["==ANA==", "==Most sensitive== · best screen · entry ≥1:80"], node: "lab-ana", role: "screen", why: "SLE screening" },
        { c: ["Anti-dsDNA", "High titres specific · ==tracks disease activity=="], node: "lab-dsdna", role: "monitor", why: "SLE activity" },
        { c: ["==Anti-Smith==", "==Most specific=="], node: "lab-ena", role: "confirm", why: "Most specific for SLE", hl: true },
        ["Anti-C1q", ">60% · ==severity of lupus nephritis=="],
        ["Anti-Ro", "==Photosensitivity== · crosses placenta → ==neonatal lupus, complete heart block=="],
        { c: ["Anti-La / lupus anticoagulant", "dRVVT clot → placental infarction · false + VDRL"], node: "lab-apl", role: "dx", why: "APS work-up" },
        ["==Anti-histone==", "Drug-induced lupus (brain + kidney spared, good prognosis)"],
        ["Anti-erythrocyte / platelet", "Haemolysis / bleeding, petechiae"],
        ["Anti-neuronal / ribosomal-P", "Cerebritis / neuropsychiatric"]
      ]}, add: "Standard teaching: these are two different antibodies. Anti-La (SS-B) goes with anti-Ro (Sjögren's, neonatal lupus, congenital heart block). Lupus anticoagulant is an antiphospholipid antibody that prolongs phospholipid-dependent clotting tests (aPTT, dRVVT) in the tube but causes thrombosis in the patient, and the false-positive VDRL comes from anticardiolipin." },
      { t: "Complement ↓ (C3, C4, CH50)", node: "lab-complement", role: "dx", why: "Active SLE consumes complement" },
      { mnemonic: "SHIP (notes)", t: "drug-induced lupus", lines: [["S", "Sulfonamides"], ["H", "Hydralazine"], ["I", "Isoniazid"], ["P", "==Procainamide (m/c)== — used in WPW"]] },
      { mnemonic: "ANA Alerts · Smith Signs · dsDNA Dances with activity" }
    ]},
    { type: "diagnosis", title: "EULAR/ACR 2019 points", src: "p.631", wide: true, items: [
      { chain: ["ANA ≥1:80 (ever)", "Add highest criterion per domain", "≥1 clinical + ≥10 points", "Classify SLE"] },
      { table: { head: ["Clinical domain", "Points", "Immunology domain", "Points"], rows: [
        ["Fever", "2", "aPL (aCL / anti-β2GP1 / LA)", "2"],
        ["Leucopenia · thrombocytopenia · AIHA", "3 · 4 · 4", "Low C3 **or** C4 · low C3 **and** C4", "3 · 4"],
        ["Delirium · psychosis · seizure", "2 · 3 · 5", "Anti-dsDNA **or** anti-Sm", "==6=="],
        ["Alopecia · oral ulcers · SCLE/discoid · acute cutaneous", "2 · 2 · 4 · 6", "", ""],
        ["Effusion · acute pericarditis", "5 · 6", "", ""],
        ["Joint involvement", "6", "", ""],
        { c: ["Proteinuria >0.5 g/24 h · class II/V · ==class III/IV==", "4 · 8 · ==10==", "", ""], hl: true }
      ]}},
      { t: "Class III/IV nephritis alone = 10 points", role: "hy" }
    ]},
    { type: "complication", title: "Mortality & lupus nephritis treatment", src: "p.630", items: [
      { table: { head: ["When", "Leading cause of death"], rows: [["After 45 y", "==Accelerated atherosclerosis=="], ["1st decade of diagnosis", "==Nephritis + infection=="]] } },
      { table: { caption: "Nephritis class → treatment", head: ["Class", "Treatment"], rows: [
        ["I & II", "Monitor progression"],
        { c: ["III (focal) · IV (diffuse) · V (membranous)", "==Tacrolimus + mycophenolate=="], node: "rx-mycophenolate", role: "first", why: "Lupus nephritis III-V", hl: true },
        ["VI", "Dialysis / transplant"]
      ]}, add: "Standard teaching (EULAR/KDIGO): induction for class III/IV (and class V with heavy proteinuria) = glucocorticoids (IV methylprednisolone pulses → tapering oral prednisolone) + mycophenolate OR low-dose IV cyclophosphamide. A calcineurin inhibitor (tacrolimus/voclosporin) or belimumab can be added. Maintenance = mycophenolate (or azathioprine) for years, with hydroxychloroquine and an ACE inhibitor/ARB throughout." }
    ]},
    { type: "treatment", title: "SLE treatment flowchart", src: "p.632–633", steps: [
      { decision: "Situation", branches: [
        { label: "Not organ-threatening", steps: [
          { t: "==Low-dose glucocorticoids== (+ hydroxychloroquine)", add: "Standard teaching (EULAR 2023): hydroxychloroquine is for EVERY patient unless contraindicated (≤5 mg/kg/day by real body weight, with regular retinal screening for toxicity). Glucocorticoids are kept to the lowest dose and tapered to ≤5 mg/day prednisolone or stopped, with methotrexate or azathioprine as the usual steroid-sparers.", node: ["rx-steroids", "rx-hcq"], role: "first", type: "treatment", why: "Mild SLE" },
          { t: "Steroid toxicity → ==belimumab==", node: "rx-belimumab", role: "second", type: "treatment", why: "Steroid-sparing" }
        ]},
        { label: "Life / organ-threatening", steps: [{ t: "==High-dose steroids + mycophenolate / cyclophosphamide==", node: ["rx-steroids", "rx-mycophenolate"], role: "first", type: "treatment", why: "Severe SLE" }] },
        { label: "Nephritis III, IV, V", steps: [{ t: "==Mycophenolate + tacrolimus==", node: "rx-mycophenolate", role: "first", type: "treatment", why: "Lupus nephritis" }] },
        { label: "Pregnancy (active)", steps: [
          { t: "==Hydroxychloroquine + prednisolone==", node: "rx-hcq", role: "first", type: "treatment", why: "SLE in pregnancy" },
          { t: "Steroids not 1st line → placental ==11β-dehydrogenase== inactivates them + fetal risk", add: "Standard teaching: placental 11β-hydroxysteroid dehydrogenase type 2 inactivates prednisolone, so little reaches the fetus. That is why low-dose prednisolone is the steroid of choice for MATERNAL lupus activity in pregnancy, while dexamethasone/betamethasone escape the enzyme and are used only when the fetus is the target. Azathioprine and tacrolimus are pregnancy-safe add-ons; mycophenolate, cyclophosphamide and methotrexate must be stopped before conception.", type: "pearl" }
        ]},
        { label: "APS (thrombosis / placental infarction)", steps: [{ t: "==Low-dose aspirin + LMWH (enoxaparin)==", add: "Standard teaching: aspirin + prophylactic LMWH is the regimen for OBSTETRIC APS. After a thrombosis, APS needs long-term warfarin (target INR 2–3) rather than a DOAC, especially in triple-positive or arterial disease, and warfarin is switched to therapeutic LMWH + aspirin in pregnancy. Catastrophic APS → heparin + high-dose steroids + plasma exchange and/or IVIG.", node: "rx-lmwh-aspirin", role: "first", type: "treatment", why: "APS in pregnancy" }] }
      ]}
    ]},
    { type: "investigation", title: "ANA patterns", src: "p.633–634", items: [
      { table: { head: ["Pattern", "Antibody", "Disease", "Memory hook (notes)"], rows: [
        ["Homogeneous", "dsDNA, histone", "SLE, drug-induced", "Diffuse histone haze"],
        ["Speckled", "Sm, RNP, SSA/SSB", "SLE, Sjögren, MCTD", "Specks for Sm + SSA"],
        ["Nucleolar", "Fibrillarin, PM/Scl", "Diffuse systemic sclerosis", "Nucleoli = Scleroli"],
        { c: ["Centromere", "Anti-centromere", "==CREST==", "C = CREST, Centromere"], hl: true },
        ["Rim (peripheral)", "dsDNA", "Active SLE", "Rim = DNA ring"]
      ]}, node: "lab-ana", role: "dx", why: "ANA immunofluorescence patterns" },
      { t: "Systemic sclerosis", see: "scleroderma-sjogren" }
    ]},
    { type: "diagnosis", title: "Antiphospholipid syndrome", src: "p.634–636", items: [
      "Antibody-driven thrombophilia → endothelial apoptosis → clotting · primary or with SLE",
      { t: "Catastrophic APS → ==≥3 organs==", role: "danger" },
      { h: "Suspect when" },
      "Stroke <55 y",
      "DVT → Budd–Chiari, PE",
      { t: "Pregnancy loss → unexplained fetal death >10 wk · preterm <34 wk (pre-eclampsia, PIH) · >3 consecutive miscarriages", add: "Standard (Sydney) wording: ≥1 unexplained death of a morphologically normal fetus at ≥10 weeks · ≥1 premature birth before 34 weeks due to severe pre-eclampsia/eclampsia or placental insufficiency · ≥3 unexplained consecutive miscarriages BEFORE 10 weeks." },
      { t: "Work-up → lupus anticoagulant (==dilute Russell viper venom test==; aPTT ↑, kaolin clotting time ↑) · anticardiolipin ELISA · β2-glycoprotein ELISA", node: "lab-apl", role: "dx", why: "APS diagnosis" },
      { table: { head: ["", "2006 Sapporo (Sydney)", "2023 ACR/EULAR"], rows: [
        ["Purpose", "Diagnosis + classification", "Classification (research)"],
        ["Entry", "None", "≥1 positive aPL within 3 y"],
        ["Clinical", "Thrombosis · pregnancy morbidity", "6 domains: macro- / microvascular, obstetric, valve, haematologic, neuro"],
        ["Labs", "LA · aCL · anti-β2GP1 — ==2 positives 12 weeks apart==", "LA + solid-phase ELISA"]
      ]}, add: "Standard 2023 list: macrovascular venous (VTE) · macrovascular arterial (stroke counts here) · microvascular · obstetric · cardiac valve · haematological (thrombocytopenia). There is no separate neurological domain. APS is classified only with ≥3 points from the clinical domains AND ≥3 points from the laboratory domains." },
      { t: "Livedo reticularis (fishnet) → SLE · APS · PAN · cryoglobulinaemia", node: "con-livedo", why: "Livedo differential" },
      { t: "Hypercoagulable stroke", see: "tia-stroke-int" }
    ]},
    { type: "mcq", title: "MCQ in the notes", src: "p.636", items: [
      { t: "Incorrect about SLE antibodies → ==lupus anticoagulant decreases risk of nephritis== (d)", role: "hy" }
    ]}
  ],
  sources: [
    "Primary: PrepLadder Medicine notes, PDF pp. 628–636 (SLE + APS). SONAR and SHIP from the notes.",
    "Davidson's / Boloor's not available — not used."
  ]
});
