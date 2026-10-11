/* Topic order = book order of the exam-scope topics (from the index photos; pen marks ignored).
   pages = PDF page range in "Medicine Prep X - ZeroTrace - Copy.pdf" (last page of each range is the MCQ page).
   status: pending | in-progress | done | skipped (removed from exam scope by the user on 2026-10-11).
   file is loaded only when status is in-progress or done. */
MF.loadManifest([
  // Endocrinology
  { id: "dm-1",           no: 36,  system: "Endocrinology", title: "Diabetes Mellitus — Part 1",                     pages: [223, 230], status: "done",    file: "data/topics/dm-1.js" },
  { id: "dm-2",           no: 37,  system: "Endocrinology", title: "Diabetes Mellitus — Part 2",                     pages: [231, 241], status: "done", file: "data/topics/dm-2.js" },
  { id: "dka-hhs",        no: 38,  system: "Endocrinology", title: "Diabetic Ketoacidosis & Hyperosmolar Coma",      pages: [242, 248], status: "done", file: "data/topics/dka-hhs.js" },
  { id: "adrenal",        no: 39,  system: "Endocrinology", title: "Diseases of the Adrenal Gland",                  pages: [249, 259], status: "done", file: "data/topics/adrenal.js" },
  { id: "cushing",        no: 40,  system: "Endocrinology", title: "Cushing Syndrome",                               pages: [260, 263], status: "done", file: "data/topics/cushing.js" },
  { id: "thyroid",        no: 41,  system: "Endocrinology", title: "Diseases of Thyroid",                            pages: [264, 273], status: "done", file: "data/topics/thyroid.js" },
  { id: "pnet",           no: 42,  system: "Endocrinology", title: "Pancreatic Neuroendocrine Tumors",               pages: [274, 279], status: "done", file: "data/topics/pnet.js" },
  { id: "parathyroid",    no: 43,  system: "Endocrinology", title: "Disorders of Parathyroid Gland",                 pages: [280, 288], status: "done", file: "data/topics/parathyroid.js" },
  { id: "men",            no: 44,  system: "Endocrinology", title: "Multiple Endocrine Neoplasia",                   pages: [289, 292], status: "skipped", file: "data/topics/men.js" },
  { id: "ant-pituitary",  no: 45,  system: "Endocrinology", title: "Diseases of Anterior Pituitary",                 pages: [293, 297], status: "done", file: "data/topics/ant-pituitary.js" },
  // Neurology
  { id: "stroke",         no: null, system: "Neurology", title: "Stroke",                                           pages: [497, 505], status: "done", file: "data/topics/stroke.js" },
  { id: "headache",       no: null, system: "Neurology", title: "Headache & Migraine",                              pages: [506, 514], status: "done", file: "data/topics/headache.js" },
  { id: "epilepsy",       no: null, system: "Neurology", title: "Epilepsy & EEG",                                   pages: [515, 526], status: "done", file: "data/topics/epilepsy.js" },
  { id: "raised-icp",     no: null, system: "Neurology", title: "Raised ICP & Brain Death",                         pages: [527, 535], status: "done", file: "data/topics/raised-icp.js" },
  { id: "meningitis-1",   no: null, system: "Neurology", title: "Meningitis — Part 1",                              pages: [536, 541], status: "done", file: "data/topics/meningitis-1.js" },
  { id: "meningitis-2",   no: null, system: "Neurology", title: "Meningitis — Part 2",                              pages: [542, 548], status: "done", file: "data/topics/meningitis-2.js" },
  { id: "parkinson",      no: null, system: "Neurology", title: "Parkinsonism & Parkinson's Disease",               pages: [549, 556], status: "done", file: "data/topics/parkinson.js" },
  { id: "myasthenia",     no: null, system: "Neurology", title: "Myasthenia Gravis",                                pages: [557, 562], status: "done", file: "data/topics/myasthenia.js" },
  { id: "gbs",            no: null, system: "Neurology", title: "Guillain-Barré Syndrome",                          pages: [563, 566], status: "done", file: "data/topics/gbs.js" },
  { id: "alzheimer",      no: null, system: "Neurology", title: "Alzheimer's Disease",                              pages: [567, 573], status: "done", file: "data/topics/alzheimer.js" },
  { id: "channelopathies",no: null, system: "Neurology", title: "Channelopathies",                                  pages: [595, 598], status: "skipped", file: "data/topics/channelopathies.js" },
  { id: "sah",            no: null, system: "Neurology", title: "Subarachnoid Hemorrhage",                          pages: [599, 603], status: "done", file: "data/topics/sah.js" },
  { id: "tia-stroke-int", no: null, system: "Neurology", title: "TIA & Stroke Interventions",                       pages: [604, 613], status: "done", file: "data/topics/tia-stroke-int.js" },
  { id: "ncc-brain-tumor",no: null, system: "Neurology", title: "Neurocysticercosis & Brain Tumors",                pages: [614, 621], status: "done", file: "data/topics/ncc-brain-tumor.js" },
  { id: "ich",            no: null, system: "Neurology", title: "Intracranial Hemorrhage",                          pages: [622, 627], status: "done", file: "data/topics/ich.js" },
  // Rheumatology
  { id: "sle",            no: null, system: "Rheumatology", title: "Systemic Lupus Erythematosus",                  pages: [628, 636], status: "done", file: "data/topics/sle.js" },
  { id: "ra",             no: null, system: "Rheumatology", title: "Rheumatoid Arthritis",                          pages: [637, 642], status: "done", file: "data/topics/ra.js" },
  { id: "crystal",        no: null, system: "Rheumatology", title: "Crystal Arthropathy",                           pages: [643, 647], status: "done", file: "data/topics/crystal.js" },
  { id: "osteoarthritis", no: null, system: "Rheumatology", title: "Osteoarthritis",                             pages: [637, 645], status: "done", file: "data/topics/osteoarthritis.js", note: "No dedicated chapter: OA points are spread through the RA and Crystal Arthropathy chapters." },
  { id: "vasculitis",     no: null, system: "Rheumatology", title: "Vasculitis",                                    pages: [648, 655], status: "skipped", file: "data/topics/vasculitis.js" },
  { id: "scleroderma-sjogren", no: null, system: "Rheumatology", title: "Scleroderma & Sjögren Syndrome",           pages: [656, 662], status: "done", file: "data/topics/scleroderma-sjogren.js" },
  { id: "sarcoidosis",    no: null, system: "Rheumatology", title: "Sarcoidosis",                                   pages: [663, 669], status: "done", file: "data/topics/sarcoidosis.js" },
  { id: "igg4",           no: null, system: "Rheumatology", title: "IgG4-Related Disease",                          pages: [670, 672], status: "skipped", file: "data/topics/igg4.js" },
  // Respiratory
  { id: "asthma",         no: 121, system: "Respiratory", title: "Bronchial Asthma",                                pages: [770, 778], status: "done", file: "data/topics/asthma.js" },
  { id: "copd",           no: 122, system: "Respiratory", title: "COPD",                                            pages: [779, 786], status: "done", file: "data/topics/copd.js" },
  { id: "resp-failure",   no: 123, system: "Respiratory", title: "Respiratory Failure",                             pages: [787, 788], status: "done", file: "data/topics/resp-failure.js" },
  { id: "tb",             no: 124, system: "Respiratory", title: "Tuberculosis",                                    pages: [789, 796], status: "done", file: "data/topics/tb.js" },
  { id: "ild",            no: 125, system: "Respiratory", title: "Interstitial Lung Disease",                       pages: [797, 800], status: "done", file: "data/topics/ild.js" },
  { id: "pap",            no: 126, system: "Respiratory", title: "Pulmonary Alveolar Proteinosis",                  pages: [801, 803], status: "skipped", file: "data/topics/pap.js" },
  { id: "pleural-effusion", no: 127, system: "Respiratory", title: "Pleural Effusion",                              pages: [804, 810], status: "done", file: "data/topics/pleural-effusion.js" },
  { id: "pneumothorax",   no: 128, system: "Respiratory", title: "Pneumothorax",                                    pages: [811, 816], status: "done", file: "data/topics/pneumothorax.js" },
  { id: "pft",            no: 129, system: "Respiratory", title: "Flow Volume Curve, Spirometry & DLCO",            pages: [817, 820], status: "skipped", file: "data/topics/pft.js" },
  { id: "abg-1",          no: 130, system: "Respiratory", title: "ABG Analysis Simplified — Part 1",                pages: [821, 825], status: "done", file: "data/topics/abg-1.js" },
  { id: "abg-2",          no: 131, system: "Respiratory", title: "ABG Analysis Simplified — Part 2",                pages: [826, 836], status: "done", file: "data/topics/abg-2.js" },
  { id: "abg-3",          no: 132, system: "Respiratory", title: "ABG Analysis Simplified — Part 3",                pages: [837, 843], status: "done", file: "data/topics/abg-3.js" },
  // Infectious diseases
  { id: "fuo",            no: 133, system: "Infectious Diseases", title: "Fever of Unknown Origin",                 pages: [844, 853], status: "skipped", file: "data/topics/fuo.js" },
  { id: "dengue",         no: 134, system: "Infectious Diseases", title: "Dengue Fever",                            pages: [854, 859], status: "skipped", file: "data/topics/dengue.js" },
  { id: "nipah-zika-mpox",no: 135, system: "Infectious Diseases", title: "Nipah, Zika & Monkeypox",                 pages: [860, 864], status: "skipped", file: "data/topics/nipah-zika-mpox.js" },
  { id: "pcp",            no: 136, system: "Infectious Diseases", title: "Pneumocystis jirovecii",                  pages: [865, 868], status: "skipped", file: "data/topics/pcp.js" },
  { id: "aspergillosis",  no: 137, system: "Infectious Diseases", title: "Aspergillosis",                           pages: [869, 872], status: "skipped", file: "data/topics/aspergillosis.js" },
  { id: "aids",           no: 138, system: "Infectious Diseases", title: "AIDS",                                    pages: [873, 884], status: "skipped", file: "data/topics/aids.js" },
  { id: "covid",          no: 139, system: "Infectious Diseases", title: "SARS-CoV-2 / COVID-19",                   pages: [885, 890], status: "skipped", file: "data/topics/covid.js" }
]);
