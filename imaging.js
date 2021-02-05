populate("input, select");
setListener("input, select");
addDateCheck();


toggleSelect("#usid", "#usRow", ["Abdomen", "Abdiment and Pelvis-Trans Abdominal/Trans Vaginal", "Breast", "Pelvic Trans Abdominal/Trans Vaginal", "Renal (kidney both)"])
toggleSelect("#ctid", "#ctRow", ["Abdomen", "Abdomen & Pelvis", "CT Angio", "KUB", "TAP", "Thorax", "Urogram"])
toggleSelect("#mriid", "#mriRow", ["Abdomen", "MRCP", "Pelvis"])
toggleSelect("#otherimageid", "#otherimageRow", ["Yes"])

