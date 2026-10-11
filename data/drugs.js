/* Drug names shown in CAPITALS everywhere in the chart (rendering only — the topic files keep their original wording).
   Generic drug names only: drug classes ("statins", "β-blockers") and body substances in their physiological sense
   ("dopamine deficiency", "cortisol", "thyroxine", "glucagon", "calcitonin" — a tumour marker here, "vasopressin" = ADH)
   are deliberately not listed. Longer names win over shorter ones,
   so "sodium valproate" is matched before "valproate". Add a name here and it is capitalised on every page. */
MF.defineDrugs([
  // diabetes
  "insulin", "insulin glargine", "glargine", "glulisine", "detemir", "degludec", "lispro", "aspart", "metformin",
  "glipizide", "glimepiride", "glibenclamide", "glyburide", "gliclazide", "semaglutide", "liraglutide", "dulaglutide", "exenatide",
  "lixisenatide", "tirzepatide", "empagliflozin", "canagliflozin", "dapagliflozin", "ertugliflozin", "pioglitazone",
  "rosiglitazone", "linagliptin", "sitagliptin", "saxagliptin", "vildagliptin", "nateglinide", "repaglinide", "acarbose",
  "voglibose", "miglitol", "pramlintide", "dextrose",
  // lipids, heart, BP
  "atorvastatin", "rosuvastatin", "simvastatin", "fenofibrate", "ezetimibe", "alirocumab", "evolocumab", "inclisiran",
  "niacin", "finerenone", "metoprolol", "propranolol", "timolol", "esmolol", "labetalol", "ramipril", "enalapril",
  "lisinopril", "captopril", "candesartan", "losartan", "telmisartan", "nicardipine", "clevidipine", "nimodipine",
  "amlodipine", "nifedipine", "verapamil", "diltiazem", "hydralazine", "prazosin", "nitroglycerin", "sodium nitroprusside",
  "nitroprusside", "phenoxybenzamine", "phentolamine", "midodrine", "furosemide", "spironolactone", "eplerenone",
  "amiloride", "hydrochlorothiazide", "chlorthalidone", "acetazolamide", "mannitol", "adenosine", "procainamide",
  "dobutamine", "phenylephrine", "atropine",
  // blood
  "heparin", "enoxaparin", "warfarin", "apixaban", "rivaroxaban", "dabigatran", "edoxaban", "alteplase", "tenecteplase",
  "aspirin", "clopidogrel", "ticagrelor", "prasugrel", "andexanet alfa", "idarucizumab", "vitamin K", "tranexamic acid",
  // endocrine
  "hydrocortisone", "fludrocortisone", "dexamethasone", "prednisolone", "prednisone", "methylprednisolone", "budesonide",
  "octreotide", "lanreotide", "pasireotide", "mitotane", "metyrapone", "ketoconazole", "osilodrostat", "etomidate",
  "mifepristone", "propylthiouracil", "carbimazole", "methimazole", "potassium iodide", "levothyroxine", "liothyronine",
  "cholestyramine", "diazoxide", "everolimus", "telotristat", "calcium gluconate", "zoledronate", "zoledronic acid",
  "risedronate", "alendronate", "ibandronate", "pamidronate", "denosumab", "teriparatide", "abaloparatide",
  "romosozumab", "cinacalcet", "calcitriol", "pegvisomant", "cabergoline", "bromocriptine", 
  "desmopressin", "cosyntropin", "tolvaptan",
  // fluids & electrolytes
  "sodium bicarbonate", "magnesium sulphate", "magnesium sulfate", "potassium chloride",
  // neurology & psychiatry
  "sumatriptan", "rizatriptan", "eletriptan", "zolmitriptan", "paracetamol", "acetaminophen", "ibuprofen", "naproxen",
  "indomethacin", "erenumab", "galcanezumab", "fremanezumab", "eptinezumab", "rimegepant", "ubrogepant", "atogepant",
  "lasmiditan", "dihydroergotamine", "ergotamine", "flunarizine", "cinnarizine", "amitriptyline", "venlafaxine",
  "duloxetine", "gabapentin", "pregabalin", "topiramate", "sodium valproate", "valproate", "valproic acid", "lamotrigine",
  "levetiracetam", "carbamazepine", "oxcarbazepine", "phenytoin", "fosphenytoin", "phenobarbital", "phenobarbitone",
  "pentobarbital", "thiopentone", "ethosuximide", "vigabatrin", "zonisamide", "lacosamide", "clobazam", "clonazepam",
  "lorazepam", "midazolam", "diazepam", "propofol", "ketamine", "morphine", "codeine", "lithium", "caffeine",
  "levodopa", "carbidopa", "benserazide", "amantadine", "istradefylline", "selegiline", "rasagiline", "safinamide",
  "entacapone", "opicapone", "tolcapone", "ropinirole", "pramipexole", "rotigotine", "apomorphine", "benzhexol",
  "trihexyphenidyl", "tetrabenazine", "haloperidol", "chlorpromazine", "metoclopramide", "pyridostigmine",
  "neostigmine", "edrophonium", "amifampridine", "donepezil", "rivastigmine", "galantamine", "memantine", "tacrine",
  "aducanumab", "lecanemab", "donanemab", "riluzole", "edaravone", "thiamine", "pyridoxine", 
  "botulinum toxin", "temozolomide", "lomustine", "procarbazine", "vincristine", "bevacizumab", "albendazole",
  "praziquantel",
  // infection
  "ceftriaxone", "cefotaxime", "vancomycin", "ampicillin", "acyclovir", "aciclovir", "amphotericin B", "amphotericin",
  "flucytosine", "fluconazole", "voriconazole", "ciprofloxacin", "moxifloxacin", "levofloxacin", "doxycycline",
  "azithromycin", "erythromycin", "rifampicin", "isoniazid", "pyrazinamide", "ethambutol", "streptomycin",
  "bedaquiline", "pretomanid", "linezolid", "delamanid", "clofazimine", "cycloserine", "ethionamide",
  "nitrofurantoin", "artesunate", "miltefosine", "cotrimoxazole", "co-trimoxazole", "chlorhexidine",
  // rheumatology & immunology
  "hydroxychloroquine", "mycophenolate", "tacrolimus", "cyclosporine", "ciclosporin", "cyclophosphamide",
  "azathioprine", "belimumab", "anifrolumab", "rituximab", "eculizumab", "efgartigimod", "methotrexate",
  "sulfasalazine", "leflunomide", "tocilizumab", "sarilumab", "abatacept", "adalimumab", "infliximab", "etanercept",
  "certolizumab", "golimumab", "tofacitinib", "baricitinib", "upadacitinib", "filgotinib", "colchicine",
  "allopurinol", "febuxostat", "probenecid", "benzbromarone", "lesinurad", "pegloticase", "rasburicase", "anakinra",
  "canakinumab", "nintedanib", "pirfenidone", "pilocarpine", "cevimeline", "bosentan", "sildenafil", "iloprost",
  "epoprostenol", "penicillamine", "dapsone", "thalidomide",
  // lungs
  "salbutamol", "albuterol", "terbutaline", "levalbuterol", "formoterol", "salmeterol", "indacaterol", "olodaterol",
  "vilanterol", "fluticasone", "beclomethasone", "ciclesonide", "mometasone", "ipratropium", "tiotropium",
  "umeclidinium", "glycopyrronium", "aclidinium", "revefenacin", "theophylline", "aminophylline", "montelukast",
  "zafirlukast", "zileuton", "omalizumab", "mepolizumab", "reslizumab", "benralizumab", "dupilumab", "tezepelumab",
  "roflumilast", "ensifentrine", "varenicline", "bupropion", "nicotine replacement", "alpha-1 antitrypsin",
  "adrenaline injection", "epinephrine injection", "methacholine",
  // misc
  "filgrastim", "cisplatin", "lidocaine", "octreotide LAR", "cisapride", "3,4-diaminopyridine",
]);
