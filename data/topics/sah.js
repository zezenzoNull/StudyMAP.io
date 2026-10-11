/* Subarachnoid Haemorrhage. Primary source: PrepLadder notes PDF pp. 599–603.
   Mnemonics are memory aids written for this chart. */
MF.addTopic({
  id: "sah",
  title: "Subarachnoid Hemorrhage",
  aka: ["SAH", "berry aneurysm", "thunderclap headache", "star of death", "xanthochromia", "Hunt-Hess", "WFNS", "nimodipine", "vasospasm", "coiling", "cerebral salt wasting", "three tube test"],
  oneLine: "Thunderclap headache + nuchal rigidity → NCCT (star of death) → angiography → coil (TOC) · nimodipine for vasospasm · watch rebleed, hydrocephalus, salt wasting.",
  flow: ["Worst headache of life + neck stiffness ± CN III", "NCCT head → blood in cisterns / Sylvian fissure", "Cerebral angiography (next) · guarded LP if CT negative", "Airway · BP · nimodipine · phenytoin", "Endovascular coiling (TOC) > clip"],
  related: ["headache", "stroke", "ich", "raised-icp", "meningitis-2"],
  bubbles: [
    { type: "definition", title: "Berry aneurysm facts", src: "p.599–600", items: [
      "Blood in ==basal cisterns== → meningeal irritation → nuchal rigidity",
      "Defect → ==internal elastic lamina== degeneration (aneurysm neck)",
      { table: { head: ["Fact", "Answer"], rows: [
        { c: ["M/c site", "==Junction of anterior communicating + anterior cerebral artery=="], hl: true },
        ["Ptosis present", "==Posterior communicating== aneurysm → CN III"],
        ["Greatest rupture risk", "==>8 mm, top of basilar== (PCom per notes)"],
        ["Giant aneurysm", ">2.5 cm · terminal ICA, MCA bifurcation"],
        ["Mycotic aneurysm", "==S. aureus== endocarditis"],
        ["Mirror aneurysms", "20%"]
      ]}},
      { table: { caption: "Baseline numbers", head: ["", "Value"], rows: [["Mortality", "**35%**"], ["Rebleed risk", "**20%**"], ["Rupture <10 mm", "0.1%"], ["Rupture >10 mm", "0.5–1%"]] }, add: "Re-bleeding is highest in the first 24 hours (≈4–14%) and carries ~50% mortality — the reason the aneurysm is secured as early as possible, ideally within 24–72 h." },
      { t: "Notes list both 'PCom' and 'top of basilar' for greatest rupture risk", add: "Both are counted as high-risk in the ISUIA / PHASES data: posterior-circulation aneurysms (including the basilar tip) and posterior communicating aneurysms rupture more often than anterior-circulation ones, and size >7 mm raises the risk further.", verify: "The notes write '>8 mm, posterior communicating artery (top of basilar artery)'. These are different sites; check which your exam expects." }
    ]},
    { type: "etiology", title: "Causes", src: "p.599–600", items: [
      { t: "M/c cause of SAH → ==trauma== (not aneurysm!)", role: "hy" },
      "Non-traumatic → ruptured ==berry aneurysm==",
      "AVM · dural AV fistula",
      "Mycotic aneurysm (acute bacterial endocarditis)",
      "Extension of hypertensive intracerebral bleed",
      "Idiopathic"
    ]},
    { type: "clinical", title: "Clinical picture", src: "p.600–601", items: [
      "Case → 25-y woman wakes 5 am with explosive headache · paracetamol fails · BP 160/100 · left ptosis · nuchal rigidity · seizures + stupor by 10:30",
      { t: "==Thunderclap — 'worst headache of my life'== · short history + neck stiffness", role: "danger" },
      { chain: ["Intense pain", "BNP release", "Natriuresis (Na⁺ <125)", "Seizures"], node: "lab-sodium", role: "monitor", why: "Cerebral salt wasting" },
      { t: "= ==Cerebral salt wasting== (hypovolaemic hyponatraemia)", role: "hy" },
      { table: { caption: "Location → feature", head: ["Aneurysm", "Feature"], rows: [
        ["Anterior communicating", "==Abulia== · aphasia (Broca)"],
        { c: ["Posterior communicating", "==Ptosis, CN III palsy=="], node: "con-cn3-palsy", role: "dx", why: "PCom aneurysm compresses CN III" },
        ["Internal carotid (cavernous sinus)", "==CN VI palsy=="],
        ["PICA / AICA", "Occipital headache"],
        ["MCA", "Temporal headache"]
      ]}},
      { t: "Headache red flags", see: "headache" }
    ]},
    { type: "investigation", title: "Work-up", src: "p.601", wide: true, items: [
      { table: { head: ["Test", "Finding", "Role"], rows: [
        { c: ["==NCCT head==", "Blood in Sylvian / interhemispheric fissure · ==star of death==", "==Initial=="], node: "img-ncct-head", role: "init", why: "SAH first test", hl: true },
        { c: ["==Invasive cerebral angiography== > CTA", "Cause, site, mirror aneurysm", "==Next best== → coil"], node: "img-angio", role: "ioc", why: "SAH next step" },
        { c: ["Guarded LP", "Bloody CSF · ==xanthochromia== (appears >12–24 h, peaks 48 h, lasts ~4 weeks)", "CT-negative suspicion"], node: ["proc-lp", "lab-csf"], role: "confirm", why: "CT-negative SAH" },
        { c: ["ECG", "==T-wave inversion== (catecholamine surge → coronary spasm)", "Monitor"], node: "bed-ecg", role: "dx", why: "Neurogenic ECG changes" },
        { c: ["Electrolytes", "==Na⁺ ↓==", "Salt wasting"], node: "lab-sodium", role: "monitor", why: "Cerebral salt wasting" }
      ]}, add: "NCCT within 6 h of headache onset is almost 100% sensitive; sensitivity falls with time, so if CT is negative after 6 h do an LP at least 12 h after onset to look for xanthochromia (by spectrophotometry)." },
      { t: "Bloody CSF → SAH vs traumatic tap → ==3-tube test==: traumatic tap clears in later tubes; SAH stays uniformly bloody", role: "hy" }
    ]},
    { type: "diagnosis", title: "Severity grading", src: "p.602", wide: true, items: [
      { table: { head: ["Grade", "Hunt–Hess", "WFNS"], rows: [
        ["1", "Mild headache, normal mental status", "GCS 15, no motor deficit"],
        ["2", "Severe headache, normal mentation, ± CN deficit", "GCS ==13–14==, no motor deficit"],
        ["3", "Somnolent / confused, ± CN or mild motor deficit", "GCS 13–14 ==with== motor deficit"],
        ["4", "Stupor, moderate–severe motor deficit, ± posturing", "GCS 7–12"],
        { c: ["5", "Coma, posturing or flaccid", "GCS 3–6"], hl: true }
      ]}},
      { mnemonic: "WFNS: 15 · 13-14 · 13-14+motor · 7-12 · 3-6" }
    ]},
    { type: "emergency", title: "SAH management — flowchart", src: "p.602", steps: [
      { t: "==Secure the airway== — 1st step in unconscious brain injury", type: "emergency" },
      { t: "BP >220/130 + end-organ damage → ==nicardipine== > labetalol", add: "Current AHA guidance: until the aneurysm is secured, keep systolic BP below ~160 mmHg (avoid big swings); afterwards allow higher pressures because vasospasm is the danger.", node: "rx-antihypertensive-iv", role: "emerg", type: "emergency", why: "SAH blood pressure control" },
      { t: "Strict bed rest (prevent re-rupture)", type: "treatment" },
      { t: "==Nimodipine== → prevents vasospasm (initial drug)", add: "Dose: nimodipine 60 mg orally / via NG tube every 4 hours for 21 days (smaller, more frequent doses if it causes hypotension). It improves outcome by reducing delayed cerebral ischaemia rather than visibly reversing angiographic spasm. Keep the patient euvolaemic.", node: "rx-ccb", role: "first", type: "treatment", why: "SAH: prevents vasospasm / delayed ischaemia" },
      { t: "Prophylactic anticonvulsant → ==phenytoin==", add: "Current guidance does not recommend routine long-term seizure prophylaxis: phenytoin has been linked to worse cognitive outcome. If prophylaxis is used, a short course (≈3–7 days) of levetiracetam is preferred; treat actual seizures normally.", node: "rx-antiepileptic", role: "prevent", type: "treatment", why: "Seizure prophylaxis in SAH" },
      { t: "Secure the aneurysm → ==TOC endovascular coiling== > craniotomy + clip", node: "proc-coiling", role: "def", type: "treatment", why: "SAH definitive treatment" },
      { t: "Hyponatraemic seizures → ==3% saline==", node: "rx-hypertonic-saline", role: "emerg", type: "emergency", why: "Severe hyponatraemia" },
      { t: "DVT prevention → pneumatic compression · ==enoxaparin after 48 h==", node: ["proc-pneumatic-compression", "rx-anticoag"], role: "prevent", type: "treatment", why: "SAH DVT prophylaxis" },
      { mnemonic: "A-B-C-N-P-C", t: "Airway · BP (nicardipine) · bed rest · Nimodipine · Phenytoin · Coil" }
    ]},
    { type: "complication", title: "Delayed neurological deficits", src: "p.601–602", items: [
      { table: { head: ["Complication", "Management"], rows: [
        ["Re-rupture", "Strict bed rest · secure aneurysm"],
        { c: ["Hydrocephalus", "==External ventricular drain=="], node: "proc-evd", role: "first", why: "SAH hydrocephalus" },
        { c: ["==Delayed cerebral ischaemia== (vasospasm — leading delayed killer)", "Detect → transcranial Doppler, CTA/CTP · prevent → ==nimodipine== · persistent → intra-arterial vasodilator, balloon"], node: ["img-tcd", "rx-ccb"], role: "first", why: "Vasospasm detection and prevention", hl: true },
        { c: ["Hyponatraemia", "==Cerebral salt wasting== (hypovolaemic)"], node: "lab-sodium", role: "monitor", why: "SAH hyponatraemia" }
      ]}, add: "Cerebral salt wasting is HYPOvolaemic (true salt and water loss), so treat with isotonic or hypertonic saline ± fludrocortisone — never fluid restriction, which is the SIADH treatment and can precipitate vasospasm and infarction here. Vasospasm typically appears on days 3–14 (peak ~day 7); established delayed ischaemia → induced hypertension with euvolaemia, then intra-arterial vasodilators / angioplasty." },
      { mnemonic: "4 R's after SAH: Rebleed · Raised pressure (hydrocephalus) · Reduced flow (vasospasm) · Reduced sodium" }
    ]},
    { type: "mcq", title: "MCQs in the notes", src: "p.603", items: [
      { t: "30-y, sudden headache + nuchal rigidity 12 h, CT blood in Sylvian fissure, BP 160/100 → next step ==cerebral angiography== (a)", node: "img-angio", role: "ioc", why: "MCQ: next step after CT-proven SAH" },
      { t: "NOT correct about SAH → ==m/c cause is berry aneurysm== (d) — m/c is trauma", role: "hy" }
    ]}
  ],
  sources: [
    "Primary: PrepLadder Medicine notes, PDF pp. 599–603 (Subarachnoid Hemorrhage). Mnemonics written for this chart.",
    "Davidson's / Boloor's not available — not used."
  ]
});
