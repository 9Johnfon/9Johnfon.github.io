const questions = [
    // EMC
    {
        id: 1,
        category: "emc",
        number: "3",
        question: "Crash Airway Algorithm คืออะไร?",
        answer: "ขั้นตอนจัดการทางเดินหายใจในภาวะ crash/ arrest",
        explanation: "ใช้ในภาวะฉุกเฉินที่ควรรู้ sequence การเปิดทางหายใจ",
        options: [
            "A. Oral then Nasal",
            "B. Awake then Asleep",
            "C. Crash Airway Algorithm",
            "D. Intubation only"
        ]
    },
    {
        id: 2,
        category: "emc",
        number: "4",
        question: "Ramped Position ใช้ในกรณีใด?",
        answer: " patient obese / difficult airway / aspiration risk",
        explanation: " ear to sternal notch alignment เพื่อ intubation ง่ายขึ้น",
        options: [
            "A. Trendelenburg",
            "B. Ramped Position",
            "C. Semi-Fowler",
            "D. High Fowler"
        ]
    },
    {
        id: 3,
        category: "emc",
        number: "6",
        question: "ข้อใดไม่สามารถแพร่กระจายผ่านด็อตเลท?",
        answer: "Hepatitis (ไขerditis)",
        explanation: "Hepatitis เป็นเชื้อไวรัสที่แพร่ผ่านทางเลือด/น้ำลาย ไม่ใช่ลม",
        options: [
            "A. Influenza",
            "B. COVID-19",
            "C. Hepatitis",
            "D. Measles"
        ]
    },
    {
        id: 4,
        category: "emc",
        number: "16",
        question: "INITIAL → FIRST → DETAILED → REFINE THE DIFFERENTIAL DIAGNOSIS → ONGOING (I F D R O) คือขั้นตอนอะไร?",
        answer: "Clinical Reasoning / Diagnostic Process",
        explanation: "กระบวนการวินิจฉัย differential อย่างเป็นระบบ",
        options: [
            "A. Primary Survey",
            "B. Secondary Survey",
            "C. Clinical Reasoning Process",
            "D. Disaster Triage"
        ]
    },
    {
        id: 5,
        category: "emc",
        number: "26",
        question: "ชาย 35 ปี อาการอะไร? (เลือกข้อที่ถูก)",
        answer: "E (ตาม context ของข้อ 26 — ชาย 35 ปี)",
        explanation: "ต้องดู case detail เพิ่มเติม แต่คำตอบคือ E",
        options: [
            "A. A",
            "B. B",
            "C. C",
            "D. D",
            "E. E"
        ]
    },
    {
        id: 6,
        category: "emc",
        number: "28",
        question: "ข้อ 28 ควรให้อะไร?",
        answer: "ASA (Aspirin / มาตรฐานการปฐมพยาบาล)",
        explanation: "ในกรณี chest pain / suspected ACS ให้ ASA ทันที",
        options: [
            "A. Oxygen",
            "B. Aspirin (ASA)",
            "C. Nitroglycerin",
            "D. Morphine"
        ]
    },
    {
        id: 7,
        category: "emc",
        number: "30",
        question: "SpO2 < 94% ต้องทำอะไร?",
        answer: "ให้ O2 / ตรวจสอบ airway",
        explanation: "SpO2 ต่ำกว่าปกติ ต้องให้ O2 และตรวจสอบการหายใจ",
        options: [
            "A. Observe only",
            "B. Give O2",
            "C. Intubate immediately",
            "D. Give IV fluids"
        ]
    },
    {
        id: 8,
        category: "emc",
        number: "38",
        question: "Permissive Hypertension คืออะไร?",
        answer: " deliberately allows elevated BP to maintain perfusion",
        explanation: "ใน stroke/trauma บางกรณี ไม่อยู่ให้ BP ต่ำมาก เพื่อให้เลือด courantric",
        options: [
            "A. aggressively lower BP",
            "B. Maintain normal BP",
            "C. Allow mild HTN for perfusion",
            "D. Give fluids only"
        ]
    },
    {
        id: 9,
        category: "emc",
        number: "41",
        question: "ข้อ 41 ส่งต่อ รพ จี้ ต้องทำอย่างไร?",
        answer: "E (ส่งต่อ รพ จี้)",
        explanation: "กรณีที่ต้องส่งต่อ รพ จี้ per protocol",
        options: [
            "A. ดูแลต่อ",
            "B. ส่งต่อ รพ ใกล้",
            "C. стволаเอง",
            "D. รอญาติ",
            "E. ส่งต่อ รพ จี้"
        ]
    },

    // Disaster
    {
        id: 10,
        category: "disaster",
        number: "3",
        question: "ข้อใดถูกต้องเกี่ยวกับ disaster?",
        answer: "D. สามารถบรรเทาได้ ( mitigable )",
        explanation: "Mitigation เป็น phase ที่สามารถบรรเทาผลกระทบได้",
        options: [
            "A. ไม่สามารถป้องกัน",
            "B. ไม่สามารถบรรเทา",
            "C. เฉพาะ natural disaster",
            "D. สามารถบรรเทาได้"
        ]
    },
    {
        id: 11,
        category: "disaster",
        number: "14",
        question: "Scene design ของ MMIMS ใน MCI — ตรงกับข้อใด?",
        answer: "Triage in inner codon",
        explanation: "MMIMS: start triage from inner cordon",
        options: [
            "A. Triage at entrance",
            "B. Hot zone triage",
            "C. Triage in inner codon",
            "D. Triage after decon"
        ]
    },
    {
        id: 12,
        category: "disaster",
        number: "16",
        question: "รักษาตามหลักการ MIMMS — ข้อไหนถูก?",
        answer: "A. สีแดงนำส่งก่อน",
        explanation: "แดง = immediate = นำส่งก่อน",
        options: [
            "A. สีแดงนำส่งก่อน",
            "B. เหลืองนำส่งก่อน",
            "C. เขียวนำส่งก่อน",
            "D. ดำนำส่งก่อน"
        ]
    },
    {
        id: 13,
        category: "disaster",
        number: "24",
        question: "Triage Sort ใช้เกณฑ์ข้อใด?",
        answer: "GCS / SBP / RR",
        explanation: "Triage Sort ใช้ GCS, SBP, RR ในการประเมิน",
        options: [
            "A. HR + BP + RR",
            "B. GCS + SBP + RR",
            "C. SpO2 + HR + BP",
            "D. Age + GCS + RR"
        ]
    },
    {
        id: 14,
        category: "disaster",
        number: "54",
        question: "ข้อใดถูกต้องตาม OHCA?",
        answer: "High quality CPR",
        explanation: "OHCA protocol คยอดคือ high quality CPR",
        options: [
            "A. Defibrillate immediately",
            "B. High quality CPR",
            "C. Give epinephrine first",
            "D. Transport immediately"
        ]
    },

    // ETC
    {
        id: 15,
        category: "etc",
        number: "14",
        question: "SCBA ถึงอุโมงค์ ผู้ป่วยหายใจตื้น ควรทำอันดับแรก?",
        answer: "Assess airway + give O2",
        explanation: "ก่อนอื่น assess airway และให้ O2",
        options: [
            "A. Evacuate immediately",
            "B. Assess airway give O2",
            "C. Check vital signs only",
            "D. Give fluids"
        ]
    },
    {
        id: 16,
        category: "etc",
        number: "15",
        question: "Pt. ติดในถ้ำมืดแคบ หลังเคลื่อนย้ายออกมา: หนาวสั่น ซีด ตัวเย็น ควรทำอย่างไรเป็นอันดับแรก?",
        answer: "Warm pt / prevent hypothermia",
        explanation: "Hypothermia in cave rescue เป็นอันตราย ต้อง warmth ก่อน",
        options: [
            "A. Give fluids",
            "B. Warm the patient",
            "C. Check airway",
            "D. Transport immediately"
        ]
    },
    {
        id: 17,
        category: "etc",
        number: "24",
        question: "แนวแรงข้อใด ทำให้เกิดการบาดเจ็บรุนแรง?",
        answer: "Rollover",
        explanation: "Rollover ใน MVA เป็น mechanism ที่รุนแรง",
        options: [
            "A. Rear-end",
            "B. Side swipe",
            "C. Rollover",
            "D. Fender bender"
        ]
    },
    {
        id: 18,
        category: "etc",
        number: "32",
        question: "จักยานยนต์ ล้ม: cool clammy skin, BP 92/60, PR 128, RR 22 — เป็นภาวะช็อคแบบใด?",
        answer: "Hemorrhagic Shock (Hypovolemic Shock)",
        explanation: " cooled clammy skin + hypotension + tachycardia = hypovolemic shock",
        options: [
            "A. Cardiogenic Shock",
            "B. Neurogenic Shock",
            "C. Septic Shock",
            "D. Hemorrhagic Shock (Hypovolemic Shock)"
        ]
    },
    {
        id: 19,
        category: "etc",
        number: "41",
        question: "B. Lateral Compression — เกี่ยวข้องกับอะไร?",
        answer: " pelvic fracture / compression injury mechanism",
        explanation: "Lateral compression mechanism เกิด pelvic injury",
        options: [
            "A. Head injury",
            "B. Lateral Compression",
            "C. Chest trauma",
            "D. Spinal injury"
        ]
    }
];
