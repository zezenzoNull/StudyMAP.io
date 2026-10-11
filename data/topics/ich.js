/* Intracranial Haemorrhage. Primary source: PrepLadder notes PDF pp. 622–627.
   ICH score letters (GIIIA) are highlighted in the notes; other mnemonics written for this chart. */
MF.addTopic({
  id: "ich",
  title: "Intracranial Hemorrhage",
  aka: ["intracerebral haemorrhage", "ICH", "putamen", "pontine haemorrhage", "ICH score", "extradural haemorrhage", "EDH", "subdural haemorrhage", "SDH", "lucid interval", "diffuse axonal injury", "cerebral amyloid angiopathy", "andexanet", "idarucizumab"],
  oneLine: "Hypertensive putaminal bleed (no lysis, BP <140, reverse anticoagulants), pontine bleed, ICH score; EDH vs SDH vs DAI vs SAH by source and CT shape; surgical options.",
  flow: ["Sudden deficit ± coma · NCCT hyperdensity", "Shape → ICH (ill-defined) · EDH (biconvex) · SDH (crescent) · SAH (star)", "No thrombolysis · BP <140 (nicardipine) · reverse anticoagulant", "ICP monitor (EVD) · CPP 60–80", "Evacuate: craniotomy (EDH, acute SDH) · burr hole (chronic SDH)"],
  related: ["stroke", "tia-stroke-int", "sah", "raised-icp"],
  bubbles: [
    { type: "definition", title: "Anatomy & causes", src: "p.622", items: [
      "Caudate → chorea · internal capsule → corticospinal tract · lentiform nucleus = globus pallidus + ==putamen==",
      { t: "M/c ICH site → ==putamen== · ICH = 10% of strokes", role: "hy" },
      { table: { head: ["Cause", "Note"], rows: [
        { c: ["==Hypertension (m/c)==", "Hypertensive crisis → penetrating lenticulostriate branches"], hl: true },
        { c: ["Anticoagulants", "Warfarin / apixaban / dabigatran toxicity"], node: "rx-anticoag", role: "danger", why: "Anticoagulant-associated ICH" },
        ["Drugs", "Cocaine (vasoconstriction) · methamphetamine"],
        ["AVM", "—"],
        ["Elderly lobar bleed (no HTN/DM/smoking)", "==Cerebral amyloid angiopathy== (Aβ, APOE)"],
        ["Trauma", "—"],
        ["Moyamoya (young)", "Puff of smoke on angiography"]
      ]}}
    ]},
    { type: "clinical", title: "Case & pontine bleed", src: "p.622–623", items: [
      "50-y hypertensive banker in a meeting → face deviation, slurred speech, right arm + leg weakness over 1 h · eyes deviate ==left== · NCCT left hyperdensity → ==left putaminal ICH==",
      { t: "Cortical lesion → eyes look ==towards== the lesion · brainstem → ==away==", role: "hy" },
      { mnemonic: "Pontine bleed = 'Coma, Quads, Pins, Sweats'", lines: [["Coma", "Deep coma (reticular activating system)"], ["Quads", "Quadriplegia (bilateral corticospinal)"], ["Pins", "==Pinpoint pupils <1 mm=="], ["Sweats", "HTN + ==hyperhidrosis=="]] },
      { t: "Heroin overdose also pinpoint → but ==no sweating, respiratory depression==", role: "hy", see: "raised-icp" }
    ]},
    { type: "diagnosis", title: "ICH score (0–6)", src: "p.623", items: [
      { table: { head: ["Item", "Points"], rows: [
        ["**G**CS 5–12", "1"],
        ["**G**CS 3–4", "2"],
        ["**I**nfratentorial origin", "1"],
        ["**I**ntraventricular extension", "1"],
        ["Hema**t**oma >30 cc", "1"],
        ["**A**ge >80", "1"]
      ]}},
      { mnemonic: "GIIVA — GCS · Infratentorial · Intraventricular · Volume >30 · Age >80", t: "higher = worse prognosis" },
      { t: "Neonatal intraventricular bleed → birth injury (forceps) · shrill cry, bulging fontanelle → ==IOC skull USG==", add: "Neonatal intraventricular haemorrhage is mainly a disease of PRETERM babies (<32 weeks): bleeding from the fragile germinal matrix in the first 72 h, often silent → routine cranial USG screening. Forceps / birth trauma in term babies causes subdural or subgaleal bleeds instead.", role: "hy" }
    ]},
    { type: "emergency", title: "ICH management — flowchart", src: "p.623–624", steps: [
      { t: "==No role for alteplase / tenecteplase==", node: "rx-thrombolysis", role: "ci", type: "emergency", why: "Thrombolysis contraindicated in haemorrhage" },
      { t: "Hypertensive crisis (>220/120 + end-organ damage) → target ==<140 mmHg== with ==nicardipine (DOC)== / labetalol", add: "INTERACT2 / AHA 2022: if systolic BP is 150–220 mmHg, lower it to about 140 mmHg within an hour and keep it steady (between 130 and 150); avoid dropping below 130 mmHg.", node: "rx-antihypertensive-iv", role: "emerg", type: "emergency", why: "ICH BP control" },
      { decision: "On an anticoagulant?", branches: [
        { label: "Warfarin", steps: [{ t: "==PCC + vitamin K== > FFP", add: "Four-factor PCC 25–50 IU/kg + IV vitamin K 10 mg, aiming for INR <1.4 within hours. Unfractionated heparin → protamine. Platelet transfusion does NOT help ICH on antiplatelet drugs (PATCH trial) unless surgery is planned.", node: "rx-reversal", role: "emerg", type: "emergency", why: "Warfarin reversal" }] },
        { label: "Apixaban", steps: [{ t: "==Andexanet alfa==", node: "rx-reversal", role: "emerg", type: "emergency", why: "Factor Xa inhibitor reversal" }] },
        { label: "Dabigatran", steps: [{ t: "==Idarucizumab==", node: "rx-reversal", role: "emerg", type: "emergency", why: "Dabigatran reversal" }] }
      ]},
      { t: "Raised ICP → ICP monitor (==ventriculostomy best==) · target CPP ==60–80== · ==mannitol not recommended==", add: "Surgery: cerebellar haemorrhage >3 cm, or any cerebellar bleed with brainstem compression or hydrocephalus → urgent evacuation. Supratentorial clot removal is mainly for superficial lobar bleeds in a deteriorating patient (minimally invasive evacuation is being studied).", node: ["proc-evd", "rx-mannitol"], role: "first", type: "treatment", why: "ICH ICP management", see: "raised-icp" },
      { t: "Cardiac hypertensive crisis → nitroglycerin (don't mix up)", role: "hy", type: "pearl" },
      { mnemonic: "Warfarin→PCC · Apixaban→Andexanet · Dabigatran→iDarucizumab" }
    ]},
    { type: "clinical", title: "Extradural haemorrhage", src: "p.624–625", items: [
      "Case → 25-y biker, no helmet, head hits road → brief LOC → ==lucid interval== → GCS 8 · NCCT ==lenticular (biconvex) hyperdensity==",
      { t: "Source → ==middle meningeal artery== (ECA branch)", role: "hy" },
      { t: "Treat → ==rapid craniotomy== + ligate bleeder · burr hole at ==pterion== if posturing", node: "proc-craniotomy", role: "def", why: "EDH evacuation" },
      { t: "No CT? → burr hole on the side of the ==Hutchinson pupil== (I/L mid-dilated, sluggish)", node: "con-cn3-palsy", role: "emerg", why: "Expanding haematoma compresses CN III" }
    ]},
    { type: "clinical", title: "Subdural haemorrhage", src: "p.625–626", items: [
      "Case → 70-y obese diabetic slips, bumps forehead · next day irritable, drowsy · 2 weeks later unrousable, GCS 8, brisk DTR, extensor plantars · NCCT ==crescentic hypodensity== → ==chronic SDH==",
      { t: "Source → ==cortical bridging veins==", role: "hy" },
      { table: { caption: "Age of blood on CT", head: ["Age", "Look"], rows: [["7–10 days", "White (hyperdense)"], [">14 days", "Black spots (mixed)"], [">28 days", "Black (hypodense)"]] }, add: "Standard CT ageing of subdural blood: ACUTE (<3 days) = hyperdense (white) · SUBACUTE (3 days–3 weeks) = isodense — easy to miss — · CHRONIC (>3 weeks) = hypodense (dark), often with mixed density from re-bleeds." },
      "Lucid interval → acute SDH and EDH",
      { table: { caption: "Treatment", head: ["Type", "Treatment"], rows: [
        ["Small SDH", "May need no surgery"],
        { c: ["Acute SDH, ↓ GCS", "==Emergency craniotomy=="], node: "proc-craniotomy", role: "emerg", why: "Acute SDH deterioration" },
        { c: ["Chronic SDH", "==Burr hole with drains=="], node: "proc-craniotomy", role: "def", why: "Chronic SDH" }
      ]}},
      "Burr hole can be done in any CNS bleed"
    ]},
    { type: "clinical", title: "Diffuse axonal injury", src: "p.626", items: [
      "25-y polytrauma, 3 days, GCS 8 → NCCT ==punctate hyperdensities at grey–white junction==",
      { t: "DAI = ==≥4 microbleeds== · CT may be normal → ==IOC MRI head==", node: "img-mri-brain", role: "ioc", why: "Diffuse axonal injury IOC" }
    ]},
    { type: "diagnosis", title: "CNS bleeds — compare", src: "p.626", wide: true, items: [
      { table: { head: ["Bleed", "Source", "CT"], rows: [
        { c: ["Intracerebral", "Lenticulostriate branches", "Ill-defined (putamen)"], node: "img-ncct-head", role: "dx", why: "ICH CT appearance" },
        { c: ["==Extradural==", "==Middle meningeal artery==", "==Biconvex / lenticular== hyperdensity"], hl: true },
        ["==Subdural==", "==Cortical bridging veins==", "==Crescentic== — hyper (acute), hypo (chronic)"],
        { c: ["Subarachnoid", "MCA (per notes)", "==Star of death== / Sylvian fissure blood"], see: "sah" }
      ]}, add: "Non-traumatic SAH comes from a ruptured berry aneurysm of the circle of Willis (m/c anterior communicating artery); trauma is the commonest cause overall." },
      { mnemonic: "Epidural = Egg (biconvex) from an Artery · Subdural = Sickle (crescent) from Veins" }
    ]},
    { type: "mcq", title: "MCQ in the notes", src: "p.627", items: [
      { t: "Leading cause of lobar haemorrhage in the elderly → ==cerebral amyloid angiopathy== (a)", role: "hy" }
    ]}
  ],
  sources: [
    "Primary: PrepLadder Medicine notes, PDF pp. 622–627 (Intracranial Hemorrhage).",
    "Davidson's / Boloor's not available — not used."
  ]
});
