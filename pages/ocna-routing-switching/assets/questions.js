/* =========================================================
   OCNA Routing & Switching — 40 practice questions
   Mirrors the real exam: 40 Qs / 60 min / pass 65%
   Every question is based on the official training slides (242 pages).
   ========================================================= */

const QUESTIONS = [
  {
    "t": "Ch.1 Overview",
    "q": "What does OCNA stand for?",
    "q_th": "OCNA ย่อมาจากอะไร?",
    "c": [
      "Omada Certified Network Administrator",
      "Optical Carrier Network Adapter",
      "Open Core Network Architecture",
      "Omada Cloud Network Access"
    ],
    "c_th": [
      "Omada Certified Network Administrator",
      "Optical Carrier Network Adapter",
      "Open Core Network Architecture",
      "Omada Cloud Network Access"
    ],
    "a": 0,
    "e": "OCNA = Omada Certified Network Administrator, TP-Link's entry-level certification for Omada products.",
    "e_th": "OCNA = Omada Certified Network Administrator คือใบรับรองระดับเริ่มต้นของ TP-Link สำหรับผลิตภัณฑ์ Omada"
  },
  {
    "t": "Ch.1 Overview",
    "q": "Which device is part of the OCNA student kit used to build the lab topology?",
    "q_th": "อุปกรณ์ใดเป็นส่วนหนึ่งของ student kit ที่ใช้สร้าง topology ภาคปฏิบัติ?",
    "c": [
      "SG6654XHP campus switch",
      "ER8411 10G VPN Gateway",
      "SG2008P PoE switch",
      "EAP783 tri-band AP"
    ],
    "c_th": [
      "สวิตช์ campus SG6654XHP",
      "เกตเวย์ ER8411 10G VPN",
      "สวิตช์ PoE SG2008P",
      "AP สามย่านความถี่ EAP783"
    ],
    "a": 2,
    "e": "Student kit = OC200 + EAP653 + EAP650-Outdoor + SG2008P + ER605.",
    "e_th": "ชุดนักเรียน = OC200 + EAP653 + EAP650-Outdoor + SG2008P + ER605"
  },
  {
    "t": "Ch.2 Network Fundamentals",
    "q": "In the OSI model, which PDU is used at the Transport layer?",
    "q_th": "ในโมเดล OSI PDU ของชั้น Transport คืออะไร?",
    "c": [
      "Bit",
      "Frame",
      "Packet",
      "Segment"
    ],
    "c_th": [
      "Bit",
      "Frame",
      "Packet",
      "Segment"
    ],
    "a": 3,
    "e": "PDU by layer: Physical = Bit, Data Link = Frame, Network = Packet, Transport = Segment, upper layers = Data.",
    "e_th": "PDU ตามชั้น: Physical = Bit, Data Link = Frame, Network = Packet, Transport = Segment, ชั้นบน = Data"
  },
  {
    "t": "Ch.2 Network Fundamentals",
    "q": "Which protocol pair correctly matches service and port number?",
    "q_th": "คู่โปรโตคอลกับพอร์ตใดถูกต้อง?",
    "c": [
      "HTTP — 443",
      "HTTPS — 80",
      "DNS — 53",
      "SNMP — 161/TCP"
    ],
    "c_th": [
      "HTTP — 443",
      "HTTPS — 80",
      "DNS — 53",
      "SNMP — 161/TCP"
    ],
    "a": 2,
    "e": "DNS uses port 53 (UDP/TCP). HTTP = 80, HTTPS = 443, SNMP = 161 over UDP (not TCP).",
    "e_th": "DNS ใช้พอร์ต 53 (UDP/TCP) ส่วน HTTP = 80, HTTPS = 443, SNMP = 161 ผ่าน UDP (ไม่ใช่ TCP)"
  },
  {
    "t": "Ch.2 Network Fundamentals",
    "q": "Which address range is a private IPv4 range defined in RFC1918?",
    "q_th": "ช่วง address ใดเป็น private IPv4 ตาม RFC1918?",
    "c": [
      "11.0.0.0/8",
      "172.16.0.0/12",
      "192.169.0.0/16",
      "8.8.8.0/24"
    ],
    "c_th": [
      "11.0.0.0/8",
      "172.16.0.0/12",
      "192.169.0.0/16",
      "8.8.8.0/24"
    ],
    "a": 1,
    "e": "RFC1918 private ranges: 10.0.0.0/8, 172.16.0.0–172.31.255.255 (= 172.16.0.0/12), 192.168.0.0/16.",
    "e_th": "Private ตาม RFC1918: 10.0.0.0/8, 172.16.0.0–172.31.255.255 (= 172.16.0.0/12), 192.168.0.0/16"
  },
  {
    "t": "Ch.2 Network Fundamentals",
    "q": "Which statement about ARP and NDP is correct?",
    "q_th": "ข้อใดกล่าวถูกต้องเกี่ยวกับ ARP และ NDP?",
    "c": [
      "ARP resolves IPv6 to MAC using ICMPv6",
      "NDP resolves IPv4 to MAC using broadcast",
      "ARP resolves IPv4 to MAC; NDP resolves IPv6 to MAC using ICMPv6 messages",
      "Both protocols use broadcast exclusively"
    ],
    "c_th": [
      "ARP แปลง IPv6 เป็น MAC โดยใช้ ICMPv6",
      "NDP แปลง IPv4 เป็น MAC โดยใช้ broadcast",
      "ARP แปลง IPv4 เป็น MAC ส่วน NDP แปลง IPv6 เป็น MAC ด้วย ICMPv6",
      "ทั้งสองโปรโตคอลใช้แต่ broadcast"
    ],
    "a": 2,
    "e": "ARP = IPv4→MAC (broadcast request, unicast reply). NDP = IPv6→MAC using ICMPv6 messages — NOT broadcast.",
    "e_th": "ARP = IPv4→MAC (broadcast request, unicast reply) ส่วน NDP = IPv6→MAC ด้วยข้อความ ICMPv6 ไม่ใช่ broadcast"
  },
  {
    "t": "Ch.2 Network Fundamentals",
    "q": "Which transmission type delivers a packet to the nearest node in a group and is IPv6-only?",
    "q_th": "การส่งประเภทใดส่งไปยัง node ที่ใกล้ที่สุดในกลุ่ม และมีเฉพาะใน IPv6?",
    "c": [
      "Unicast",
      "Multicast",
      "Broadcast",
      "Anycast"
    ],
    "c_th": [
      "Unicast",
      "Multicast",
      "Broadcast",
      "Anycast"
    ],
    "a": 3,
    "e": "Anycast = one-to-nearest, IPv6 only (DNS, CDN). Broadcast = one-to-all, IPv4 only.",
    "e_th": "Anycast = ส่งหาใกล้สุด มีเฉพาะ IPv6 (DNS, CDN) ส่วน Broadcast = ส่งทั้งหมด มีเฉพาะ IPv4"
  },
  {
    "t": "Ch.2 Network Fundamentals",
    "q": "An IPv6 address block of consecutive zeros may be compressed with '::' how many times?",
    "q_th": "บล็อกศูนย์ติดกันใน IPv6 address บีบด้วย '::' ได้กี่ครั้ง?",
    "c": [
      "Once only, at the longest run of zeros",
      "Up to three times",
      "Unlimited times",
      "Never — '::' is not valid"
    ],
    "c_th": [
      "ครั้งเดียว ที่จุดศูนย์ติดกันยาวที่สุด",
      "ได้ถึงสามครั้ง",
      "ไม่จำกัด",
      "ใช้ไม่ได้ — '::' ไม่ถูกต้อง"
    ],
    "a": 0,
    "e": "'::' compresses the longest consecutive zero run and can appear only once in an IPv6 address.",
    "e_th": "'::' บีบช่วงศูนย์ติดกันที่ยาวที่สุด และใช้ได้เพียงครั้งเดียวต่อหนึ่ง IPv6 address"
  },
  {
    "t": "Ch.3 Network Design",
    "q": "In a typical enterprise topology, which device aggregates traffic from multiple access switches toward the core?",
    "q_th": "ใน topology องค์กรทั่วไป อุปกรณ์ใดรวมทราฟฟิกจาก access switch หลายตัวส่งขึ้น core?",
    "c": [
      "Access point",
      "Aggregation switch",
      "IDF",
      "End client"
    ],
    "c_th": [
      "Access point",
      "สวิตช์ aggregation",
      "IDF",
      "ไคลเอนต์"
    ],
    "a": 1,
    "e": "Hierarchy: Gateway → Core → Aggregation (gathers access switches) → Access switch/AP (end users, PoE).",
    "e_th": "ลำดับชั้น: Gateway → Core → Aggregation (รวม access switch) → Access switch/AP (ผู้ใช้, PoE)"
  },
  {
    "t": "Ch.3 Network Design",
    "q": "Which PoE standard supplies up to 30W and is typical for Wi-Fi 6 APs?",
    "q_th": "มาตรฐาน PoE ใดจ่ายไฟสูงสุด 30W และใช้กับ Wi-Fi 6 AP?",
    "c": [
      "802.3af",
      "802.3at (PoE+)",
      "802.3bt Type 3",
      "802.3bt Type 4"
    ],
    "c_th": [
      "802.3af",
      "802.3at (PoE+)",
      "802.3bt Type 3",
      "802.3bt Type 4"
    ],
    "a": 1,
    "e": "802.3at (PoE+) = 30W for Wi-Fi 6 APs/PTZ cameras; af = 15.4W; bt Type 3 = 60W; bt Type 4 = 90W.",
    "e_th": "802.3at (PoE+) = 30W ใช้กับ Wi-Fi 6 AP/กล้อง PTZ ส่วน af = 15.4W, bt Type 3 = 60W, bt Type 4 = 90W"
  },
  {
    "t": "Ch.3 Network Design",
    "q": "What is the correct order of the four phases in standard PoE power-up?",
    "q_th": "ลำดับ 4 ขั้นตอนของการเปิดไฟ PoE มาตรฐานที่ถูกต้องคือ?",
    "c": [
      "Classification, Detection, Monitoring, Power On",
      "Detection, Classification, Power On, Monitoring & Adjusting",
      "Power On, Detection, Classification, Monitoring",
      "Negotiation, Discovery, Power On, Shaping"
    ],
    "c_th": [
      "Classification, Detection, Monitoring, Power On",
      "Detection, Classification, Power On, Monitoring & Adjusting",
      "Power On, Detection, Classification, Monitoring",
      "Negotiation, Discovery, Power On, Shaping"
    ],
    "a": 1,
    "e": "PSE: Detection → Classification (class 0–8) → Power On (44–57V) → Monitoring & Adjusting (cuts power when PD disconnects).",
    "e_th": "PSE: Detection → Classification (class 0–8) → Power On (44–57V) → Monitoring & Adjusting (ตัดไฟเมื่อ PD ถอด)"
  },
  {
    "t": "Ch.3 Network Design",
    "q": "Why is the total PoE budget of a switch not equal to per-port power × number of ports?",
    "q_th": "ทำไม PoE budget ทั้งเครื่องจึงไม่เท่ากับ กำลังต่อพอร์ต × จำนวนพอร์ต?",
    "c": [
      "Because PoE standards forbid it",
      "Because not all ports run PDs at full power at the same time",
      "Because the budget only counts the first 24 ports",
      "Because ports share a fixed 15.4W each"
    ],
    "c_th": [
      "เพราะมาตรฐาน PoE ห้ามไว้",
      "เพราะไม่ใช่ทุกพอร์ตที่มี PD ใช้ไฟเต็มพร้อมกัน",
      "เพราะนับเฉพาะ 24 พอร์ตแรก",
      "เพราะทุกพอร์ตได้ 15.4W เท่ากัน"
    ],
    "a": 1,
    "e": "Design rule: whole-device budget < per-port × port count, because simultaneous full load is unrealistic.",
    "e_th": "กฎออกแบบ: งบทั้งเครื่อง < ต่อพอร์ต × จำนวนพอร์ต เพราะโหลดเต็มพร้อมกันเป็นไปไม่ได้จริง"
  },
  {
    "t": "Ch.4 Switching Basics",
    "q": "How does a switch build its MAC address table?",
    "q_th": "สวิตช์สร้าง MAC address table อย่างไร?",
    "c": [
      "By inspecting the destination MAC of incoming frames",
      "By inspecting the source MAC of incoming frames and recording port + VLAN",
      "By reading the IP header of each packet",
      "By receiving a table from the router"
    ],
    "c_th": [
      "ดู destination MAC ของเฟรมขาเข้า",
      "ดู source MAC ของเฟรมขาเข้า แล้วบันทึกพอร์ต + VLAN",
      "อ่าน IP header ของทุกแพ็กเกต",
      "รับตารางมาจากเราเตอร์"
    ],
    "a": 1,
    "e": "The switch checks the SOURCE MAC and records which port/VLAN it arrived on — that forms the MAC Address Table.",
    "e_th": "สวิตช์ดู source MAC แล้วบันทึกว่าเข้าทางพอร์ต/VLAN ใด จึงเป็น MAC Address Table"
  },
  {
    "t": "Ch.4 Switching Basics",
    "q": "What does a switch do when the destination MAC matches no entry in the MAC table?",
    "q_th": "เมื่อ destination MAC ไม่ตรงกับรายการใดใน MAC table สวิตช์ทำอย่างไร?",
    "c": [
      "Drop the frame",
      "Flood it to every port except the ingress port",
      "Send it back to the sender",
      "Rewrite the destination MAC"
    ],
    "c_th": [
      "ทิ้งเฟรม",
      "ส่งแบบ flooding ออกทุกพอร์ตยกเว้นพอร์ตขาเข้า",
      "ส่งกลับไปหาผู้ส่ง",
      "เขียน destination MAC ใหม่"
    ],
    "a": 1,
    "e": "Unknown unicast → flooding to all ports except the port it came in on.",
    "e_th": "Unknown unicast → flooding ออกทุกพอร์ตยกเว้นพอร์ตที่เฟรมเข้ามา"
  },
  {
    "t": "Ch.4 Switching Basics",
    "q": "What is the ingress rule (PVID) behavior for an untagged frame arriving on a port with PVID = 10?",
    "q_th": "กฎฝั่งขาเข้า (PVID) ทำอย่างไรกับเฟรมไม่ติด tag ที่เข้าพอร์ตที่ตั้ง PVID = 10?",
    "c": [
      "The frame is dropped",
      "The frame is tagged with VLAN 10 and forwarded if VLAN 10 is allowed",
      "The frame is tagged with VLAN 1",
      "The frame passes unchanged as untagged"
    ],
    "c_th": [
      "เฟรมถูกทิ้ง",
      "เฟรมถูกติด tag VLAN 10 แล้วส่งต่อถ้า VLAN 10 อนุญาต",
      "เฟรมถูกติด tag VLAN 1",
      "เฟรมผ่านไปโดยไม่เปลี่ยน (ไม่ติด tag)"
    ],
    "a": 1,
    "e": "Ingress: untagged frame → tagged with the PVID's VLAN ID; already-tagged frames pass if that VLAN is allowed on the port.",
    "e_th": "ขาเข้า: เฟรมไม่ติด tag → ติด tag ด้วย VLAN ของ PVID ส่วนเฟรมที่ติด tag อยู่แล้วจะผ่านถ้า VLAN นั้นอนุญาตบนพอร์ต"
  },
  {
    "t": "Ch.4 Switching Basics",
    "q": "How is the STP root bridge elected?",
    "q_th": "Root bridge ของ STP ถูกเลือกอย่างไร?",
    "c": [
      "The switch with the highest MAC address",
      "The switch with the lowest bridge ID (priority + MAC)",
      "The switch with the most ports",
      "The switch with the fastest CPU"
    ],
    "c_th": [
      "สวิตช์ที่มี MAC address สูงสุด",
      "สวิตช์ที่มี bridge ID ต่ำสุด (priority + MAC)",
      "สวิตช์ที่มีพอร์ตมากสุด",
      "สวิตช์ที่มี CPU เร็วสุด"
    ],
    "a": 1,
    "e": "Bridge ID = bridge priority + MAC address; lowest wins. Priority default 32768, steps of 4096; ties broken by lower MAC.",
    "e_th": "Bridge ID = priority + MAC ต่ำสุดชนะ โดย priority เริ่มต้น 32768 ทีละ 4096 ถ้าเท่ากันดู MAC ต่ำกว่า"
  },
  {
    "t": "Ch.4 Switching Basics",
    "q": "Switch A: priority 32768, MAC 00:00:00:00:00:01. Switch B: priority 4096. Switch C: priority 4096, MAC 00:00:00:00:00:23. Which becomes root?",
    "q_th": "สวิตช์ A: priority 32768, MAC ...:01 | B: priority 4096 | C: priority 4096, MAC ...:23 — สวิตช์ใดเป็น root?",
    "c": [
      "Switch A",
      "Switch B",
      "Switch C",
      "All three become root"
    ],
    "c_th": [
      "สวิตช์ A",
      "สวิตช์ B",
      "สวิตช์ C",
      "ทั้งสามเป็น root"
    ],
    "a": 1,
    "e": "Compare priority first: 4096 (B and C) beats 32768 (A). Between B and C with equal priority, B's MAC (…1D in the slide) is lower than C's (…23), so B wins.",
    "e_th": "เทียบ priority ก่อน: 4096 (B และ C) ต่ำกว่า 32768 (A) แล้ว B กับ C priority เท่ากัน จึงเทียบ MAC — ของ B ต่ำกว่า C ดังนั้น B ชนะ"
  },
  {
    "t": "Ch.4 Switching Basics",
    "q": "Which statement about STP versions is correct?",
    "q_th": "ข้อใดกล่าวถูกต้องเกี่ยวกับเวอร์ชันของ STP?",
    "c": [
      "RSTP is IEEE 802.1D and MSTP is 802.1w",
      "STP is 802.1D, RSTP is 802.1w (faster convergence), MSTP is 802.1s",
      "MSTP is 802.1D and STP is 802.1s",
      "All three versions are defined by 802.1Q"
    ],
    "c_th": [
      "RSTP คือ IEEE 802.1D และ MSTP คือ 802.1w",
      "STP คือ 802.1D, RSTP คือ 802.1w (ลู่เร็วขึ้น), MSTP คือ 802.1s",
      "MSTP คือ 802.1D และ STP คือ 802.1s",
      "ทั้งสามเวอร์ชันนิยามโดย 802.1Q"
    ],
    "a": 1,
    "e": "STP = 802.1D (original), RSTP = 802.1w (rapid, most used), MSTP = 802.1s (multiple instances).",
    "e_th": "STP = 802.1D (ดั้งเดิม), RSTP = 802.1w (เร็ว นิยมสุด), MSTP = 802.1s (หลาย instance)"
  },
  {
    "t": "Ch.4 Switching Basics",
    "q": "What is the best practice for enabling loop protection in an Omada network?",
    "q_th": "แนวทางที่ดีที่สุดในการเปิดป้องกัน loop ในเครือข่าย Omada คือ?",
    "c": [
      "Enable Loopback Detection on all ports including inter-switch links",
      "Enable STP on ports linking switches, and Loopback Detection only on ports linking end clients",
      "Enable ERPS on every access port",
      "Disable all redundant links"
    ],
    "c_th": [
      "เปิด Loopback Detection ทุกพอร์ต รวมพอร์ตต่อสวิตช์ด้วย",
      "เปิด STP บนพอร์ตต่อสวิตช์ และเปิด Loopback Detection เฉพาะพอร์ตต่อลูกค้าปลายทาง",
      "เปิด ERPS ทุก access port",
      "ปิดลิงก์ซ้ำซ้อนทั้งหมด"
    ],
    "a": 1,
    "e": "STP only works between Omada switches; Loopback Detection suits end clients but can wrongly block ports — so each is used where it fits.",
    "e_th": "STP ทำงานระหว่างสวิตช์ Omada เท่านั้น ส่วน Loopback Detection เหมาะกับลูกค้าปลายทางแต่อาจบล็อกผิดพอร์ต จึงใช้แยกตามจุดที่เหมาะสม"
  },
  {
    "t": "Ch.4 Switching Basics",
    "q": "ERPS provides loop protection with what recovery time, and on which switches is it supported?",
    "q_th": "ERPS ป้องกัน loop ด้วยเวลาฟื้นตัวเท่าใด และรองรับบนสวิตช์รุ่นใด?",
    "c": [
      "Sub-50 ms, SG3XXX and above",
      "About 30–50 s, all Omada switches",
      "Sub-50 ms, only SG6XXX",
      "1 second, DS series only"
    ],
    "c_th": [
      "ต่ำกว่า 50 มิลลิวินาที, SG3XXX ขึ้นไป",
      "ประมาณ 30–50 วินาที, สวิตช์ Omada ทุกรุ่น",
      "ต่ำกว่า 50 มิลลิวินาที, เฉพาะ SG6XXX",
      "1 วินาที, เฉพาะซีรีส์ DS"
    ],
    "a": 0,
    "e": "ERPS (ITU-T) = telecommunication-grade sub-50 ms ring protection, faster than RSTP but more complex; supported on SG3XXX series and above.",
    "e_th": "ERPS (ITU-T) = ป้องกันวงแหวนระดับโทรคมนาคม ต่ำกว่า 50 มิลลิวินาที เร็วกว่า RSTP แต่ตั้งค่าซับซ้อนกว่า รองรับตั้งแต่ SG3XXX ขึ้นไป"
  },
  {
    "t": "Ch.5 Routing Basics",
    "q": "Which fields are contained in a routing table entry?",
    "q_th": "รายการใน routing table ประกอบด้วยฟิลด์ใดบ้าง?",
    "c": [
      "Destination, Next Hop, Metric",
      "Source MAC, Destination MAC, VLAN",
      "SSID, BSSID, Channel",
      "Port, Protocol, State"
    ],
    "c_th": [
      "Destination, Next Hop, Metric",
      "Source MAC, Destination MAC, VLAN",
      "SSID, BSSID, Channel",
      "Port, Protocol, State"
    ],
    "a": 0,
    "e": "Routing table = Destination (target network), Next Hop (next router IP), Metric (route preference/cost).",
    "e_th": "Routing table = Destination (เครือข่ายปลายทาง), Next Hop (IP เราเตอร์ถัดไป), Metric (ความชอบ/ค่าเส้นทาง)"
  },
  {
    "t": "Ch.5 Routing Basics",
    "q": "A network has 6 routers fully meshed. How many static route entries are needed so every pair can reach each other (per the slide's example logic)?",
    "q_th": "เครือข่ายมีเราเตอร์ 6 ตัวเชื่อมถึงกันหมด ต้องสร้าง static route กี่รายการให้ทุกคู่เข้าถึงกันได้ (ตามตัวอย่างในสไลด์)?",
    "c": [
      "6 entries",
      "12 entries",
      "24 entries",
      "30 entries"
    ],
    "c_th": [
      "6 รายการ",
      "12 รายการ",
      "24 รายการ",
      "30 รายการ"
    ],
    "a": 1,
    "e": "The slide's example: 3 existing + 3 new routers → 12 static entries across gateways — static entries explode as the network grows.",
    "e_th": "ตัวอย่างในสไลด์: เดิม 3 + ใหม่ 3 เราเตอร์ → 12 รายการ static ทั่ว gateway — static เพิ่มมหาศาลเมื่อเครือข่ายขยาย"
  },
  {
    "t": "Ch.5 Routing Basics",
    "q": "RIP is unsuitable for large networks mainly because of which limitation?",
    "q_th": "ทำไม RIP จึงไม่เหมาะกับเครือข่ายขนาดใหญ่?",
    "c": [
      "It requires too much bandwidth for link-state updates",
      "Its maximum hop count is 15 and convergence is slow",
      "It cannot carry IPv4 routes",
      "It needs a full topology map"
    ],
    "c_th": [
      "ใช้แบนด์วิดท์มากเกินไปสำหรับ link-state update",
      "จำกัด hop count สูงสุด 15 และลู่ช้า",
      "ส่ง route IPv4 ไม่ได้",
      "ต้องมีแผนที่โครงข่ายทั้งหมด"
    ],
    "a": 1,
    "e": "RIP = distance-vector, hop count max 15 (16 = unreachable), slow convergence, and it doesn't know the full topology.",
    "e_th": "RIP = distance-vector, hop count สูงสุด 15 (16 = ไปไม่ถึง), ลู่ช้า และไม่รู้โครงข่ายทั้งหมด"
  },
  {
    "t": "Ch.5 Routing Basics",
    "q": "With reference bandwidth 100 Mbps, what is the OSPF cost of a 20 Mbps link?",
    "q_th": "ถ้า reference bandwidth = 100 Mbps ค่า OSPF cost ของลิงก์ 20 Mbps เท่าใด?",
    "c": [
      "1",
      "4",
      "5",
      "20"
    ],
    "c_th": [
      "1",
      "4",
      "5",
      "20"
    ],
    "a": 2,
    "e": "Cost = Reference Bandwidth / Link Bandwidth = 100/20 = 5.",
    "e_th": "Cost = Reference Bandwidth / Link Bandwidth = 100/20 = 5"
  },
  {
    "t": "Ch.5 Routing Basics",
    "q": "A topology has Path 1 = 1 hop of 20 Mbps, Path 2 = 3 hops of 100 Mbps each. Which path do OSPF and RIP choose respectively (reference 100 Mbps)?",
    "q_th": "เส้นทาง 1 = 1 hop ความเร็ว 20 Mbps, เส้นทาง 2 = 3 hop ความเร็ว 100 Mbps — OSPF กับ RIP เลือกเส้นทางใดตามลำดับ (reference 100 Mbps)?",
    "c": [
      "OSPF: Path 1; RIP: Path 2",
      "OSPF: Path 2 (cost 3 < 5); RIP: Path 1 (fewer hops)",
      "Both choose Path 2",
      "Both choose Path 1"
    ],
    "c_th": [
      "OSPF: เส้นทาง 1; RIP: เส้นทาง 2",
      "OSPF: เส้นทาง 2 (cost 3 < 5); RIP: เส้นทาง 1 (hop น้อยกว่า)",
      "ทั้งคู่เลือกเส้นทาง 2",
      "ทั้งคู่เลือกเส้นทาง 1"
    ],
    "a": 1,
    "e": "OSPF cost: Path 1 = 100/20 = 5; Path 2 = 1+1+1 = 3 → OSPF picks Path 2. RIP counts hops: 1 < 3 → RIP picks Path 1.",
    "e_th": "OSPF cost: เส้นทาง 1 = 100/20 = 5; เส้นทาง 2 = 1+1+1 = 3 → OSPF เลือกเส้นทาง 2. RIP นับ hop: 1 < 3 → RIP เลือกเส้นทาง 1"
  },
  {
    "t": "Ch.6 Services",
    "q": "What is the correct DHCP message sequence (DORA)?",
    "q_th": "ลำดับข้อความ DHCP (DORA) ที่ถูกต้องคือ?",
    "c": [
      "Discover → Offer → Request → ACK",
      "Offer → Discover → ACK → Request",
      "Request → Offer → Discover → ACK",
      "Discover → Request → Offer → ACK"
    ],
    "c_th": [
      "Discover → Offer → Request → ACK",
      "Offer → Discover → ACK → Request",
      "Request → Offer → Discover → ACK",
      "Discover → Request → Offer → ACK"
    ],
    "a": 0,
    "e": "DORA: client broadcasts Discover, server replies Offer, client sends Request, server confirms with ACK.",
    "e_th": "DORA: ไคลเอนต์ broadcast Discover → เซิร์ฟเวอร์ Offer → ไคลเอนต์ Request → เซิร์ฟเวอร์ ACK ยืนยัน"
  },
  {
    "t": "Ch.6 Services",
    "q": "What is the purpose of a DHCP Relay?",
    "q_th": "DHCP Relay ใช้ทำอะไร?",
    "c": [
      "To speed up DHCP responses on the same subnet",
      "To let clients on one subnet obtain IPs from a DHCP server on another subnet",
      "To assign static IPs to servers",
      "To encrypt DHCP messages"
    ],
    "c_th": [
      "เพื่อเร่งการตอบ DHCP ใน subnet เดียวกัน",
      "เพื่อให้ไคลเอนต์ subnet หนึ่งได้ IP จาก DHCP server อีก subnet",
      "เพื่อแจก IP คงที่ให้เซิร์ฟเวอร์",
      "เพื่อเข้ารหัสข้อความ DHCP"
    ],
    "a": 1,
    "e": "Relay agent forwards the client's broadcast Discover/Request as unicast to a DHCP server in a different subnet (and relays Offer/ACK back).",
    "e_th": "Relay agent ส่ง Discover/Request แบบ broadcast ของไคลเอนต์ไปเป็น unicast ถึง DHCP server ใน subnet อื่น (และส่ง Offer/ACK กลับ)"
  },
  {
    "t": "Ch.6 Services",
    "q": "In Stateless DHCPv6, where does the client get its default gateway?",
    "q_th": "ใน Stateless DHCPv6 ไคลเอนต์ได้ default gateway มาจากไหน?",
    "c": [
      "From the DHCPv6 server",
      "From the RA (Router Advertisement)",
      "From SLAAC only",
      "From DNS"
    ],
    "c_th": [
      "จาก DHCPv6 server",
      "จาก RA (Router Advertisement)",
      "จาก SLAAC เท่านั้น",
      "จาก DNS"
    ],
    "a": 1,
    "e": "Whether stateful or stateless, the IPv6 default gateway always comes from RA; stateful/stateless differ only in how the address is produced.",
    "e_th": "ไม่ว่า stateful หรือ stateless default gateway ของ IPv6 ได้จาก RA เสมอ ต่างกันแค่วิธีสร้าง address"
  },
  {
    "t": "Ch.6 Services",
    "q": "mDNS resolves names ending in what suffix and uses which multicast address (IPv4)?",
    "q_th": "mDNS ใช้ชื่อลงท้ายด้วยอะไร และใช้มัลติคาสต์ address ใด (IPv4)?",
    "c": [
      ".local — 224.0.0.251",
      ".mDNS — 224.0.0.9",
      ".local — 224.0.0.5",
      ".lan — 239.255.255.250"
    ],
    "c_th": [
      ".local — 224.0.0.251",
      ".mDNS — 224.0.0.9",
      ".local — 224.0.0.5",
      ".lan — 239.255.255.250"
    ],
    "a": 0,
    "e": "mDNS = zero-config discovery with .local names, multicast 224.0.0.251 (IPv4) / FF02::FB (IPv6), no central DNS server.",
    "e_th": "mDNS = ค้นหาแบบ zero-config ใช้ชื่อ .local มัลติคาสต์ 224.0.0.251 (IPv4) / FF02::FB (IPv6) ไม่ต้องใช้ DNS server"
  },
  {
    "t": "Ch.6 Services",
    "q": "Traffic policing and traffic shaping both control speed. How do they differ?",
    "q_th": "Traffic policing กับ traffic shaping ต่างกันอย่างไร?",
    "c": [
      "Policing buffers excess packets; shaping drops them",
      "Policing drops packets over the limit; shaping buffers them to smooth the rate",
      "Both drop excess packets immediately",
      "Both only apply to WAN links"
    ],
    "c_th": [
      "Policing บัฟเฟอร์แพ็กเกตส่วนเกิน; shaping ทิ้ง",
      "Policing ทิ้งแพ็กเกตที่เกินลิมิต; shaping บัฟเฟอร์เพื่อให้ราบเรียบ",
      "ทั้งคู่ทิ้งแพ็กเกตส่วนเกินทันที",
      "ทั้งคู่ใช้เฉพาะลิงก์ WAN"
    ],
    "a": 1,
    "e": "Policing = drop over-limit traffic; shaping = buffer over-limit traffic to regulate the rate.",
    "e_th": "Policing = ทิ้งทราฟฟิกที่เกินลิมิต ส่วน shaping = บัฟเฟอร์ทราฟฟิกที่เกินเพื่อคุมอัตราให้ราบเรียบ"
  },
  {
    "t": "Ch.7 Network Security",
    "q": "In IPsec, what distinguishes Transport Mode from Tunnel Mode?",
    "q_th": "ใน IPsec Transport Mode ต่างจาก Tunnel Mode อย่างไร?",
    "c": [
      "Transport Mode has one IP header (payload encrypted); Tunnel Mode encapsulates the original IP header (two IP headers)",
      "Transport Mode is for wireless only",
      "Tunnel Mode encrypts only the Ethernet header",
      "There is no difference"
    ],
    "c_th": [
      "Transport Mode มี IP header เดียว (เข้ารหัส payload); Tunnel Mode ครอบหัว IP เดิม (สอง IP header)",
      "Transport Mode ใช้กับ Wi-Fi เท่านั้น",
      "Tunnel Mode เข้ารหัสแค่ Ethernet header",
      "ไม่มีความแตกต่าง"
    ],
    "a": 0,
    "e": "Transport = single-layer encapsulation (original IP header kept). Tunnel = dual-layer, original IP header encapsulated — used for site-to-site.",
    "e_th": "Transport = ห่อชั้นเดียว (คงหัว IP เดิม) ส่วน Tunnel = ห่อสองชั้น ครอบหัว IP เดิม — ใช้ใน site-to-site"
  },
  {
    "t": "Ch.7 Network Security",
    "q": "Why must L2TP be combined with IPsec?",
    "q_th": "ทำไม L2TP จึงต้องใช้คู่กับ IPsec?",
    "c": [
      "Because L2TP is too fast without IPsec",
      "Because L2TP tunnels data without encryption — IPsec provides the encryption",
      "Because IPsec handles tunneling and L2TP handles routing",
      "Because L2TP only supports IPv6"
    ],
    "c_th": [
      "เพราะ L2TP เร็วเกินไปถ้าไม่มี IPsec",
      "เพราะ L2TP สร้างอุโมงค์โดยไม่เข้ารหัส — IPsec เป็นตัวเข้ารหัส",
      "เพราะ IPsec ทำ tunneling และ L2TP ทำ routing",
      "เพราะ L2TP รองรับเฉพาะ IPv6"
    ],
    "a": 1,
    "e": "L2TP = tunneling only (data vulnerable); IPsec adds encryption → 'L2TP over IPsec'.",
    "e_th": "L2TP = ทำอุโมงค์อย่างเดียว (ข้อมูลเปิดเผยได้) ส่วน IPsec เพิ่มการเข้ารหัส → 'L2TP over IPsec'"
  },
  {
    "t": "Ch.7 Network Security",
    "q": "Which statement about WireGuard is correct?",
    "q_th": "ข้อใดกล่าวถูกต้องเกี่ยวกับ WireGuard?",
    "c": [
      "It is an old protocol with weak MPPE encryption",
      "It is lightweight with modern encryption and 30–40% higher throughput than IPsec",
      "It requires browser access only",
      "It tunnels but never encrypts"
    ],
    "c_th": [
      "เป็นโปรโตคอลรุ่นเก่าที่เข้ารหัส MPPE อ่อนแอ",
      "เบา เข้ารหัสทันสมัย และมี throughput สูงกว่า IPsec 30–40%",
      "ใช้ผ่านเบราว์เซอร์เท่านั้น",
      "ทำอุโมงค์แต่ไม่เข้ารหัส"
    ],
    "a": 1,
    "e": "WireGuard = modern, lightweight, high throughput (30–40% > IPsec), uses public/private key pairs between 'peers'. Weak MPPE describes PPTP.",
    "e_th": "WireGuard = ทันสมัย เบา ทะลุสูง (มากกว่า IPsec 30–40%) ใช้คู่กุญแจ public/private ระหว่าง peer ส่วนข้อความ MPPE อ่อนแอคือ PPTP"
  },
  {
    "t": "Ch.7 Network Security",
    "q": "A TCP SYN packet arrives for the first time. Which gateway ACL session state matches it?",
    "q_th": "แพ็กเกต TCP SYN เข้ามาเป็นครั้งแรก จะตรงกับสถานะ session ใดของ gateway ACL?",
    "c": [
      "Established",
      "Related",
      "New",
      "Invalid"
    ],
    "c_th": [
      "Established",
      "Related",
      "New",
      "Invalid"
    ],
    "a": 2,
    "e": "New = initial connection (SYN); Established = bidirectional seen (e.g. SYN+ACK); Related = sub-connections (FTP data); Invalid = unexpected behavior.",
    "e_th": "New = การเชื่อมต่อเริ่มต้น (SYN); Established = เห็นสองทางแล้ว (เช่น SYN+ACK); Related = การเชื่อมต่อย่อย (FTP data); Invalid = พฤติกรรมผิดปกติ"
  },
  {
    "t": "Ch.7 Network Security",
    "q": "Which attack does IP-MAC Binding (and switch IMPB) primarily defend against?",
    "q_th": "IP-MAC Binding (และ IMPB ของสวิตช์) ป้องกันการโจมตีประเภทใดเป็นหลัก?",
    "c": [
      "DDoS amplification",
      "ARP spoofing",
      "DNS cache poisoning",
      "SQL injection"
    ],
    "c_th": [
      "DDoS amplification",
      "ARP spoofing",
      "DNS cache poisoning",
      "SQL injection"
    ],
    "a": 1,
    "e": "ARP spoofing sends fake ARP messages to bind the attacker's MAC to a legit IP; IP-MAC binding stops it. IMPB adds VLAN + port binding (standalone mode, Q1 2025).",
    "e_th": "ARP spoofing ส่ง ARP ปลอมผูก MAC ของผู้โจมตีกับ IP ของเครื่องจริง ซึ่ง IP-MAC binding กันได้ ส่วน IMPB เพิ่มการผูก VLAN + พอร์ต (เฉพาะ standalone, ณ Q1 2025)"
  },
  {
    "t": "Ch.8 Troubleshooting",
    "q": "A PC receives the IP 169.254.10.20. What does this indicate?",
    "q_th": "พีซีได้ IP 169.254.10.20 แสดงว่าอย่างไร?",
    "c": [
      "It has a valid public IP",
      "DHCP failed — the client self-assigned an APIPA address",
      "The DNS server is unreachable",
      "The port is in loopback"
    ],
    "c_th": [
      "ได้ public IP ที่ใช้งานได้",
      "DHCP ล้มเหลว — ไคลเอนต์ตั้ง APIPA address เอง",
      "ต่อถึง DNS server ไม่ได้",
      "พอร์ตอยู่ในสถานะ loopback"
    ],
    "a": 1,
    "e": "169.254.x.x = APIPA/self-assigned → DHCP problem: check cable, NIC set to DHCP (not Static), VLAN egress untagged, DHCP service enabled, address pool size.",
    "e_th": "169.254.x.x = APIPA ที่ตั้งเอง → มีปัญหา DHCP: ตรวจสาย, การ์ดตั้งเป็น DHCP (ไม่ใช่ Static), VLAN egress ต้อง untagged, เปิด DHCP service, ขนาด address pool"
  },
  {
    "t": "Ch.8 Troubleshooting",
    "q": "Some websites load while others never open, and LAN communication is fine. What should be checked FIRST along with server status?",
    "q_th": "เข้าบางเว็บได้บางเว็บไม่ได้ ทั้งที่ LAN ปกติ นอกจากสถานะเซิร์ฟเวอร์ ควรตรวจสอบอะไร?",
    "c": [
      "Reflash the switch firmware",
      "ACL / URL filtering rules and DNS resolution (try 8.8.8.8)",
      "Replace all Ethernet cables",
      "Disable STP on every port"
    ],
    "c_th": [
      "Flash firmware สวิตช์ใหม่",
      "กฎ ACL / URL filtering และการ resolve DNS (ลอง 8.8.8.8)",
      "เปลี่ยนสาย Ethernet ทั้งหมด",
      "ปิด STP ทุกพอร์ต"
    ],
    "a": 1,
    "e": "Checks: is the site down (test other PC/phone)? Any ACL/URL filtering? DNS — nslookup, then public DNS 8.8.8.8/8.8.4.4 (private sites need private DNS).",
    "e_th": "ตรวจสอบ: เว็บล่มไหม (ลองเครื่องอื่น/มือถือ) มี rule ACL/URL filtering ไหม DNS — nslookup แล้วลอง public DNS 8.8.8.8/8.8.4.4 (เว็บส่วนตัวต้องใช้ private DNS)"
  },
  {
    "t": "Ch.8 Troubleshooting",
    "q": "Several port LEDs on a switch are flashing quickly at the same time. What is the most likely problem?",
    "q_th": "LED ของพอร์ตสวิตช์หลายพอร์ตกระพริบเร็วพร้อมกัน ปัญหาที่เป็นไปได้มากที่สุดคือ?",
    "c": [
      "A network loop",
      "DHCP exhaustion",
      "A DNS failure",
      "An STP root change"
    ],
    "c_th": [
      "มี loop ในเครือข่าย",
      "DHCP address หมด",
      "DNS ล่ม",
      "STP root เปลี่ยน"
    ],
    "a": 0,
    "e": "Fast simultaneous LED flashing = broadcast storm from a loop → unplug the offending cable, then enable loop prevention (STP / Loopback Detection).",
    "e_th": "LED กระพริบเร็วพร้อมกัน = broadcast storm จาก loop → ถอดสายที่ทำให้เกิด loop แล้วเปิด loop prevention (STP / Loopback Detection)"
  },
  {
    "t": "Ch.8 Troubleshooting",
    "q": "Which is the recommended troubleshooting strategy?",
    "q_th": "กลยุทธ์การแก้ปัญหาที่แนะนำคือข้อใด?",
    "c": [
      "Change every setting at once to save time",
      "Split the network into parts (ISP → Gateway → Switches → Clients) and make only one change at a time",
      "Replace all hardware immediately",
      "Reset the controller before checking anything"
    ],
    "c_th": [
      "เปลี่ยนทุกอย่างพร้อมกันเพื่อความรวดเร็ว",
      "แบ่งเครือข่ายเป็นส่วน ๆ (ISP → Gateway → Switches → Clients) และเปลี่ยนทีละอย่างเดียว",
      "เปลี่ยนฮาร์ดแวร์ทั้งหมดทันที",
      "รีเซ็ต controller ก่อนตรวจอย่างอื่น"
    ],
    "a": 1,
    "e": "Two rules: localize by splitting into parts; verify by changing only one thing per test.",
    "e_th": "สองกฎ: หาจุดเสียโดยแบ่งเป็นส่วน ๆ และยืนยันผลโดยเปลี่ยนทีละอย่างเดียวต่อการทดสอบหนึ่งครั้ง"
  },
  {
    "t": "Ch.8 Troubleshooting",
    "q": "Which tool combination is available for troubleshooting a device adopted by the Omada Controller?",
    "q_th": "มีเครื่องมือใดบ้างสำหรับแก้ปัญหาอุปกรณ์ที่ adopt โดย Omada Controller?",
    "c": [
      "Network Check (Ping, Traceroute, ARP Table) + Terminal CLI + Packet Capture",
      "Only a full CLI with write access",
      "Only physical port swapping",
      "mDNS discovery only"
    ],
    "c_th": [
      "Network Check (Ping, Traceroute, ARP Table) + Terminal CLI + Packet Capture",
      "เฉพาะ CLI แบบมีสิทธิ์เขียนเต็มรูปแบบ",
      "เฉพาะการสลับพอร์ตทางกายภาพ",
      "เฉพาะ mDNS discovery"
    ],
    "a": 0,
    "e": "Controller provides Ping/Traceroute/ARP Table, a read-only terminal (or SSH/Telnet from PC), and packet capture via WiShark (adapter → start → filter).",
    "e_th": "Controller มี Ping/Traceroute/ARP Table, เทอร์มินัลอ่านอย่างเดียว (หรือ SSH/Telnet จากพีซี) และ packet capture ด้วย Wireshark (เลือก adapter → เริ่ม → กรอง)"
  }
];
