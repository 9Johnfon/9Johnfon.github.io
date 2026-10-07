/* =========================================================
   OCNA — Routing & Switching : Study Data (from official
   TP-Link training slides v1.1.0, 242 pages)
   EN original + TH translation
   ========================================================= */

const EXAM_META = {
  code: "OCNA",
  title: "Routing & Switching",
  title_th: "เราเตอร์ & สวิตช์ (Omada)",
  chapters: 8,
  questions: 40,
  minutes: 60,
  pass: 65,
  note_en: "Real OCNA exam: 40 questions, 60 minutes, pass at 65%, in English. This simulator mirrors that format, built from the official training slides.",
  note_th: "ข้อสอบจริง OCNA: 40 ข้อ / 60 นาที / ผ่าน 65% / ภาษาอังกฤษ — แบบจำลองนี้สร้างจากสไลด์ฝึกสอนทางการ 242 หน้า"
};

const SUMMARY = [
  {
    id: "ch1",
    icon: "🎓",
    title_en: "Ch.1 OCNA R&S Overview",
    title_th: "บทที่ 1 — ภาพรวม OCNA",
    body_en: [
      "OCNA = Omada Certified Network Administrator (Routing & Switching), TP-Link's entry-level certification for the Omada ecosystem.",
      "The course is organized into 8 chapters: Overview, Network Fundamentals, Network Design, Switching Basics, Routing Basics, Services, Network Security, Troubleshooting.",
      "Student kit: OC200 ×1 + EAP653 ×1 + EAP650-Outdoor ×1 + SG2008P ×1 + ER605 ×1 to build a basic Omada topology for labs.",
      "Laptop preparation: run the OC200 web interface in a browser, plus tools like Discover Utility, PuTTY and iPerf."
    ],
    body_th: [
      "OCNA = Omada Certified Network Administrator (Routing & Switching) คือใบรับรองระดับเริ่มต้นของ TP-Link สำหรับระบบ Omada",
      "คอร์สอบาวน์ 8 บท: Overview, Network Fundamentals, Network Design, Switching Basics, Routing Basics, Services, Network Security, Troubleshooting",
      "ชุดอุปกรณ์นักเรียน: OC200 ×1 + EAP653 ×1 + EAP650-Outdoor ×1 + SG2008P ×1 + ER605 ×1 ใช้สร้าง topology พื้นฐานสำหรับแล็บ",
      "เตรียมแล็ปท็อป: เปิด OC200 Web Interface ผ่านเบราว์เซอร์ พร้อมเครื่องมือ Discover Utility, PuTTY และ iPerf"
    ]
  },
  {
    id: "ch2",
    icon: "🌐",
    title_en: "Ch.2 Network Fundamentals",
    title_th: "บทที่ 2 — พื้นฐานเครือข่าย",
    body_en: [
      "OSI has 7 layers; PDUs grow larger up the stack: Bit (L1) → Frame (L2) → Packet (L3) → Segment (L4) → Data (L5–7).",
      "TCP/IP originally has 4 layers; in practice the Network Access layer is split into Data Link + Physical (5-layer view). Protocols: HTTP/POP3/SMTP (App), TCP/UDP (Transport), IP/ICMP (Network), Ethernet/802.11 (L1/L2).",
      "Encapsulation: app data → +app header → +transport header (TCP/UDP) → +network header (IP) → +data-link header → bits on the medium.",
      "Physical media: twisted pair (cheap, short), coaxial (legacy), fiber (fast, long, expensive), wireless (convenient, interference).",
      "IEEE 802.3 naming: 100BASE-TX = 100 Mbps (802.3u), 1000BASE-T = 1 Gbps (802.3ab), 1000BASE-X fiber (802.3z), 10GBASE-T (802.3an), 10GBASE-SR/LR fiber (802.3ae). 'Base' = baseband; T = twisted pair, SX/LX = short/long-range fiber.",
      "Data Link: local delivery only. MAC = 48-bit; first 24 bits = OUI (manufacturer). L2 switch and APs forward by MAC.",
      "Network layer: end-to-end delivery + logical addressing. Protocols: IP, ICMP (ping), ARP (IP→MAC), IGMP (multicast groups).",
      "IPv4 = 32-bit dotted decimal. Network ID = IP AND mask; Host ID = IP − network ID. /24 → mask 255.255.255.0.",
      "RFC1918 private ranges: A 10.0.0.0/8, B 172.16.0.0–172.31.255.255, C 192.168.0.0/16 (home LANs). Public IPs are globally routable.",
      "NAT lets many private hosts share one public IP (PAT = port-based). Outbound creates a NAT entry; inbound to a server needs Port Forwarding. One-to-one NAT maps 1 public : 1 private (no port translation, internet-initiated access allowed).",
      "IPv6 = 128-bit hexadecimal. Rules: drop leading zeros per block, compress consecutive zero blocks with '::' (only once). Typical prefix /64.",
      "Transmission types: Unicast = one-to-one, Multicast = one-to-many, Broadcast = one-to-all (IPv4 only), Anycast = one-to-nearest (IPv6 only).",
      "ARP resolves IPv4→MAC via broadcast request/unicast reply; NDP does the same for IPv6 using ICMPv6 messages (not broadcast).",
      "TCP is connection-oriented (3-way handshake, reliable, ordered); UDP is connectionless (fast, no guarantee). TCP for web/email/FTP; UDP for video/VoIP/gaming.",
      "Port ranges: 0–1023 well-known, 1024–49151 registered, 49152–65535 dynamic. Common: FTP 21, SSH 22, HTTP 80, HTTPS 443, SNMP 161/UDP, DNS 53, DHCP 67 server / 68 client.",
      "Interfaces: RJ-45 (8 pins, twisted pair), SFP (hot-swappable fiber/copper modules), wireless adapter (e.g. 802.11be Wi-Fi 7). Logical: loopback (always up, router ID), VLAN interface (L3 per VLAN), LAG (aggregate links)."
    ],
    body_th: [
      "OSI มี 7 ชั้น PDU เปลี่ยนชื่อตามชั้น: Bit (L1) → Frame (L2) → Packet (L3) → Segment (L4) → Data (L5–7)",
      "TCP/IP เดิมมี 4 ชั้น แต่ในการใช้งานจริงแบ่ง Network Access ออกเป็น Data Link + Physical (มุมมอง 5 ชั้น) โปรโตคอล: HTTP/POP3/SMTP, TCP/UDP, IP/ICMP, Ethernet/802.11",
      "Encapsulation: ข้อมูลแอป → ติดหัวแอป → ติดหัว transport (TCP/UDP) → ติดหัว network (IP) → ติดหัว data-link → บิตบนสื่อ",
      "สื่อทางกายภาพ: twisted pair (ถูก ระยะสั้น), coaxial (รุ่นเก่า), fiber (เร็ว ไกล แพง), wireless (สะดวก มีสัญญาณรบกวน)",
      "ชื่อ IEEE 802.3: 100BASE-TX = 100 Mbps (802.3u), 1000BASE-T = 1 Gbps (802.3ab), fiber 1 Gbps (802.3z), 10GBASE-T (802.3an), fiber 10G (802.3ae) — 'Base' คือ baseband, T = twisted pair, SX/LX = fiber ระยะใกล้/ไกล",
      "Data Link ดูแลการส่งใน LAN เท่านั้น MAC = 48 บิต โดย 24 บิตแรกคือ OUI (รหัสผู้ผลิต) อุปกรณ์ L2 คือสวิตช์และ AP",
      "Network layer ดูแล end-to-end + logical addressing โปรโตคอล: IP, ICMP (ping), ARP (IP→MAC), IGMP (multicast)",
      "IPv4 = 32 บิต Network ID = IP บิต AND กับ mask ส่วน Host ID = IP − network ID และ /24 คือ 255.255.255.0",
      "Private IP (RFC1918): คลาส A 10.0.0.0/8, คลาส B 172.16.0.0–172.31.255.255, คลาส C 192.168.0.0/16 ส่วน Public IP ใช้ข้ามอินเทอร์เน็ตได้",
      "NAT ให้อุปกรณ์หลายเครื่องใช้ public IP เดียว (PAT แยกด้วยพอร์ต) การเข้าออกภายนอกสร้าง NAT entry แต่การรับจากข้างนอกเข้า server ต้องใช้ Port Forwarding ส่วน One-to-one NAT คือ 1 public ต่อ 1 private ไม่แปลงพอร์ต",
      "IPv6 = 128 บิต hex ตัดเลขศูนย์นำหน้าบล็อกได้ และบีบบล็อกศูนย์ติดกันด้วย '::' ได้แค่หนึ่งครั้ง ปกติใช้ /64",
      "ประเภทการส่ง: Unicast ต่อหนึ่ง, Multicast ต่อหลายกลุ่มที่สมัคร, Broadcast ทั้ง subnet (IPv4 เท่านั้น), Anycast ใกล้สุด (IPv6 เท่านั้น)",
      "ARP แปลง IPv4→MAC ด้วย broadcast request + unicast reply ส่วน NDP ทำแบบเดียวกันกับ IPv6 โดยใช้ ICMPv6 (ไม่ใช่ broadcast)",
      "TCP มีการเชื่อมต่อ (3-way handshake, เชื่อถือได้, เรียงลำดับ) ส่วน UDP ไม่มี (เร็ว, ไม่รับประกัน) TCP ใช้กับเว็บ/เมล/FTP, UDP ใช้กับวิดีโอ/VoIP/เกม",
      "ช่วงพอร์ต: 0–1023 well-known, 1024–49151 registered, 49152–65535 พอร์ตชั่วคราว พอร์ตสำคัญ: FTP 21, SSH 22, HTTP 80, HTTPS 443, SNMP 161/UDP, DNS 53, DHCP 67 เซิร์ฟเวอร์ / 68 ไคลเอนต์",
      "อินเทอร์เฟซ: RJ-45 (8 พิน), SFP (เสียบเปลี่ยนร้อนได้), wireless adapter (เช่น Wi-Fi 7 802.11be) แบบตรรกะ: loopback (ไม่ดับ ใช้เป็น router ID), VLAN interface (L3 ต่อ VLAN), LAG (รวมลิงก์)"
    ]
  },
  {
    id: "ch3",
    icon: "🏗️",
    title_en: "Ch.3 Network Design",
    title_th: "บทที่ 3 — การออกแบบเครือข่าย",
    body_en: [
      "Typical enterprise topology: Gateway (dual ISP, VPN/NAT/security) → Core switch (backbone, high throughput) → Aggregation switch (gathers access switches) → Access switch (end users, PoE) / Access Point.",
      "MDF (Main Distribution Frame) = main hub in the central equipment room (gateway + core). IDF = sub-distribution on each floor/building (aggregation + access switches).",
      "Power: AC for enterprise devices, DC (-48V) preferred in data centers. Redundant PSU = high availability; hot-swappable PSU can be changed while running (e.g. SG6654XHP + PSM900-AC to reach full 1440W PoE budget).",
      "PoE = power + data over one cable. PSE (PoE switch / injector) feeds PD (AP, IP camera, IP phone).",
      "PoE standards (IEEE 802.3, backward compatible): 802.3af = 15.4W, 802.3at (PoE+) = 30W (Wi-Fi 6 APs, PTZ), 802.3bt Type 3 = 60W, 802.3bt Type 4 = 90W (digital signage). af/at use 2 pairs, bt uses 4 pairs.",
      "Standard PoE phases: Detection → Classification (class 0–8) → Power On (44–57V) → Monitoring & Adjusting (cut off if PD disconnects).",
      "Passive (non-standard) PoE applies fixed 24V/48V with no negotiation → risk of damaging devices, no overload protection.",
      "PoE budget design: total device budget ≠ per-port budget × number of ports — not every port runs at full power simultaneously.",
      "Omada product tiers: Gateways (wired/Wi-Fi/4G/3-in-1/outdoor/DSL); Switches = Unmanaged DS (plug & play) → Agile ES → Access/Aggregation SG2XXX/SG3XXX → Campus SG5XXX/SG6XXX (advanced L2/L3, HA)."
    ],
    body_th: [
      "Topology องค์กรทั่วไป: Gateway (2 ISP, VPN/NAT/ความปลอดภัย) → Core switch (กระดูกสันหลัง รับส่งสูง) → Aggregation switch (รวมทราฟฟิกจาก access) → Access switch (ผู้ใช้, PoE) / Access Point",
      "MDF = ศูนย์กลางหลักในห้องอุปกรณ์กลาง (gateway + core) ส่วน IDF คือจุดแจกย่อยตามตึก/ชั้น (aggregation + access)",
      "ไฟเลี้ยง: AC สำหรับอุปกรณ์องค์กร, DC (-48V) นิยมใน data center PSU ซ้ำซ้อนช่วยให้ทำงานต่อเนื่อง และแบบ hot-swappable เปลี่ยนขณะทำงานได้ (เช่น SG6654XHP + PSM900-AC ครบ 1440W PoE)",
      "PoE = ไฟ + ข้อมูลผ่านสายเดียว PSE (สวิตช์/ injector) ป้อนไฟให้ PD (AP, IP camera, IP phone)",
      "มาตรฐาน PoE (IEEE 802.3, ใช้ย้อนหลังได้): 802.3af = 15.4W, 802.3at (PoE+) = 30W (Wi-Fi 6 AP, PTZ), 802.3bt Type 3 = 60W, 802.3bt Type 4 = 90W — af/at ใช้ 2 คู่สาย, bt ใช้ 4 คู่สาย",
      "ขั้น PoE มาตรฐาน: Detection → Classification (class 0–8) → Power On (44–57V) → Monitoring & Adjusting (ตัดไฟทันทีเมื่อ PD ถอด)",
      "Passive PoE (ไม่มาตรฐาน) จ่ายไฟคงที่ 24V/48V ไม่มีการเจรจา → เสี่ยงทำอุปกรณ์เสีย ไม่มีป้องกันโหลดเกิน",
      "การออกแบบ PoE budget: งบทั้งเครื่อง ≠ งบต่อพอร์ต × จำนวนพอร์ต เพราะไม่ใช่ทุกพอร์ตใช้ไฟเต็มพร้อมกัน",
      "สายผลิตภัณฑ์ Omada: Gateway (wired/Wi-Fi/4G/3-in-1/outdoor/DSL); สวิตช์ Unmanaged DS → Agile ES → Access/Aggregation SG2XXX/SG3XXX → Campus SG5XXX/SG6XXX (L2/L3 ขั้นสูง, HA)"
    ]
  },
  {
    id: "ch4",
    icon: "🔀",
    title_en: "Ch.4 Switching Basics",
    title_th: "บทที่ 4 — พื้นฐานการสวิตช์",
    body_en: [
      "The switch learns by checking the SOURCE MAC of incoming frames and records MAC + port + VLAN → MAC Address Table.",
      "Known destination → unicast forwarding. Unknown destination → flooding to every port except the ingress port (unknown unicast).",
      "VLAN divides broadcast domains to avoid broadcast storms and separate departments — one broadcast domain per VLAN.",
      "Tagging: frames inside/between switches must be tagged; end devices (PC/AP) only handle untagged frames, so tags are removed on egress to them.",
      "Ingress rule = PVID: an untagged frame entering the port gets tagged with the PVID's VLAN ID (already-tagged frames pass if that VLAN is allowed). Egress rule = tagged or untagged per VLAN per port.",
      "Loop harm: a redundant link makes broadcast frames circulate forever → broadcast storm can crash the network quickly.",
      "Loopback Detection: port periodically sends detection frames (interval 1–1000 s); receiving its own frame back = loop → block port temporarily. Limitation: only reacts after a loop exists, may block the wrong port — must be fixed manually.",
      "STP: elect a 'root' and block redundant branches for a loop-free tree. Root = lowest Bridge ID = bridge priority + MAC address.",
      "Bridge priority: 0–65535, in steps of 4096, default 32768 (smaller = higher priority). Ties broken by lower MAC address.",
      "STP roles: every port on the root bridge = Designated; each non-root switch's lowest-cost port = Root Port; the loser of a segment comparison = Blocked.",
      "Root path cost sums hop costs; higher speed = lower cost (e.g. 10 Mbps = 2,000,000; 100 Mbps = 200,000; 1 Gbps = 20,000; 10 Gbps = 2,000).",
      "STP versions: STP = IEEE 802.1D, RSTP = 802.1w (faster convergence, most used), MSTP = 802.1s (instances = flexible design for multiple VLANs).",
      "ERPS (ITU-T): ring-network loop protection with telecom-grade sub-50 ms recovery; user pre-defines the redundant link; supported on SG3XXX and above.",
      "Best practice: enable STP on ports linking switches; enable Loopback Detection only on ports linking end clients.",
      "Port isolation: keeps devices in the same VLAN from talking to each other while the uplink (Internet) still works — no need for one VLAN per client.",
      "LAG combines physical links into one logical link: more throughput, redundancy, hash-based load balancing. Static LAG (immediate) vs LACP (negotiates with peer, dynamic).",
      "IGMP Snooping: switch snoops IGMP Query/Report/Leave to build a multicast table and forward only to needed ports. Set IGMP Snooping Querier on ONLY the switch directly attached to the multicast source (Omada has no querier election).",
      "LLDP: Layer-2 neighbor discovery — periodically sends LLDPDU (name, MAC, IP, port) and builds the neighbor table; topology maps in Omada Controller come from LLDP. Devices without LLDP are 'transparent' in the table.",
      "LLDP-MED extends LLDP — common use: negotiate PoE power class and VLAN tags for IP phones.",
      "AAA = Authentication (verify identity) / Authorization (what you may access) / Accounting (record activity).",
      "Roles: Supplicant (PC/IP phone requests) → Authenticator (access switch wraps credentials) → Authentication Server (Omada Controller / RADIUS server decides).",
      "RADIUS protocol (ports 1812 auth / 1813 accounting) + EAP framework implement AAA; Omada uses 802.1X and MAB.",
      "802.1X = client actively submits credentials (PCs); MAB = for dumb terminals (printer, smart plug) — the switch submits the device's MAC as the credential."
    ],
    body_th: [
      "สวิตช์เรียนรู้จาก source MAC ของเฟรมที่เข้ามา แล้วบันทึก MAC + พอร์ต + VLAN → เป็น MAC Address Table",
      "เจอปลายทาง → ส่งแบบ unicast ถ้าไม่เจอ → flooding ออกทุกพอร์ตยกเว้นพอร์ตที่รับเข้า (unknown unicast)",
      "VLAN แบ่ง broadcast domain กัน broadcast storm และแยกแผนก — หนึ่ง VLAN เท่ากับหนึ่ง broadcast domain",
      "การติด tag: เฟรมใน/ระหว่างสวิตช์ต้องติด tag แต่อุปกรณ์ปลายทาง (PC/AP) รับเฉพาะเฟรมไม่ติด tag จึงต้องถอด tag ตอนส่งออก",
      "Ingress rule = PVID: เฟรมไม่ติด tag ที่เข้าพอร์ตจะถูกติด tag ด้วย VLAN ของ PVID ส่วน Egress rule กำหนดว่าส่งออกเป็น tagged หรือ untagged ตาม VLAN",
      "ผลของ loop: ลิงก์ซ้ำซ้อนทำให้เฟรม broadcast วนไม่จบ → broadcast storm ทำให้เครือข่ายล่มได้เร็ว",
      "Loopback Detection: พอร์ตส่งเฟรมตรวจเป็นระยะ (เว้น 1–1000 วินาที) ถ้ารับของตัวเองกลับมา = มี loop → บล็อกพอร์ตชั่วคราว ข้อจำกัด: ทำงานเมื่อเกิด loop แล้ว อาจบล็อกพอร์ตผิด และต้องแก้มือ",
      "STP: เลือก 'root' แล้วตัดกิ่งที่ซ้ำซ้อน ได้โครงข่ายไร้ loop แบบต้นไม้ โดย root = Bridge ID ต่ำสุด = priority + MAC",
      "Bridge priority: 0–65535 ทีละ 4096 ค่าเริ่มต้น 32768 (ยิ่งน้อยยิ่งสูง) ถ้าเท่ากันใช้ MAC ต่ำสุดตัดสิน",
      "บทบาท STP: ทุกพอร์ตบน root = Designated, พอร์ต cost ต่ำสุดของสวิตช์ที่ไม่ใช่ root = Root Port ส่วนพอร์ตที่แพ้เปรียบเทียบใน segment = Blocked",
      "Root path cost บวกค่าทุก hop ยิ่งความเร็วสูงยิ่ง cost ต่ำ (เช่น 10 Mbps = 2,000,000; 100 Mbps = 200,000; 1 Gbps = 20,000; 10 Gbps = 2,000)",
      "เวอร์ชัน STP: STP = IEEE 802.1D, RSTP = 802.1w (ลู่เร็ว นิยมสุด), MSTP = 802.1s (มี instance รองรับหลาย VLAN ยืดหยุ่น)",
      "ERPS (ITU-T): ป้องกัน loop บนวงแหวน ฟื้นตัวระดับโทรคมนาคมต่ำกว่า 50 มิลลิวินาที ผู้ใช้กำหนดลิงก์สำรองเอง รองรับตั้งแต่ SG3XXX ขึ้นไป",
      "แนวทางปฏิบัติ: เปิด STP บนพอร์ตที่ต่อสวิตช์ด้วยกัน เปิด Loopback Detection เฉพาะพอร์ตที่ต่อลูกค้าปลายทาง",
      "Port Isolation: ให้อุปกรณ์ใน VLAN เดียวกันคุยกันไม่ได้ แต่ยังออกอินเทอร์เน็ตได้ — ไม่ต้องสร้าง VLAN แยกทีละเครื่อง",
      "LAG รวมลิงก์กายภาพเป็นลิงก์ตรรกะเดียว: เพิ่ม bandwidth, redundancy, load balance ตาม hash — Static LAG (ทันที) vs LACP (เจรจากับปลายทาง)",
      "IGMP Snooping: สวิตช์ดักฟัง IGMP Query/Report/Leave สร้าง multicast table ส่งเฉพาะพอร์ตที่ต้องการ และตั้ง Querier เฉพาะสวิตช์ที่ต่อ source โดยตรง (Omada เลือก querier อัตโนมัติไม่ได้)",
      "LLDP: ค้นหาเพื่อนบ้านระดับ L2 ส่ง LLDPDU (ชื่อ, MAC, IP, พอร์ต) ตามคาบ แล้วสร้าง neighbor table — topology บน Omada Controller มาจาก LLDP แต่อุปกรณ์ไม่รองรับ LLDP จะโปร่งใสในตาราง",
      "LLDP-MED ต่อยอด LLDP ใช้บ่อยสุด: ตกลง PoE class และ VLAN tag ให้ IP Phone",
      "AAA = Authentication (ยืนยันตัวตน) / Authorization (สิทธิ์เข้าถึง) / Accounting (บันทึกกิจกรรม)",
      "บทบาท: Supplicant (PC/IP Phone ขอเข้า) → Authenticator (access switch รวบรวม credentials) → Authentication Server (Omada Controller/RADIUS ตัดสิน)",
      "RADIUS (พอร์ต 1812 auth / 1813 accounting) + EAP framework ใช้ทำ AAA ส่วน Omada ใช้ 802.1X และ MAB",
      "802.1X = ไคลเอนต์ส่ง credentials เอง (พีซี) ส่วน MAB = สำหรับอุปกรณ์ไม่มีจอ (เครื่องพิมพ์, สวิตช์อัจฉริยะ) โดยสวิตช์ส่ง MAC ของอุปกรณ์เป็น credentials"
    ]
  },
  {
    id: "ch5",
    icon: "🧭",
    title_en: "Ch.5 Routing Basics",
    title_th: "บทที่ 5 — พื้นฐานการเราเตอร์",
    body_en: [
      "Routers consult the routing table to forward by destination IP. Table entries: Destination (network/host), Next Hop (IP of the next router), Metric (cost/preference for priority).",
      "Static routing = admin manually sets a fixed path; no automatic updates on topology change.",
      "Static pros: simple, secure, low bandwidth/CPU overhead, precise control. Cons: poor scalability, high maintenance (added/deleted one by one) — fits small/home networks, stub default routes, temp backup paths.",
      "Dynamic routing auto-discovers routes and reroutes around failed links in real time — needed because static entries explode (6 routers → 12 entries) and don't adapt to outages.",
      "Protocol comparison: OSPF = medium/large, fast convergence, complex config; RIP = small networks, simple but 15-hop limit & slow; BGP = Internet/ISP policy control; IS-IS = ISP/data-center backbones.",
      "RIP is distance-vector: cost = hop count, max 15 (16 = unreachable), so unusable on networks with >15 routers; it does NOT know the full topology — only next hop + distance.",
      "OSPF is link-state and uses real link quality: Cost = Reference Bandwidth / Link Bandwidth (default reference 100 Mbps → 100/20 = 5 for a 20 Mbps link).",
      "Example: Path 1 = one 20 Mbps hop (cost 5); Path 2 = three 100 Mbps hops (cost 1+1+1=3) → OSPF picks Path 2, while RIP picks Path 1 (fewer hops).",
      "Policy routing matches source, destination AND protocol of traffic to forward by custom rules — for traffic distribution/prioritization.",
      "3 routing types: Static (simple, low overhead, small stable networks) / Policy (granular control, traffic prioritization) / Dynamic (automatic, large complex networks)."
    ],
    body_th: [
      "เราเตอร์ดู routing table เพื่อส่งต่อตาม destination IP โดยมี: Destination (เครือข่ายปลายทาง), Next Hop (IP เราเตอร์ถัดไป), Metric (ค่าใช้จ่าย/ลำดับความชอบ)",
      "Static routing = ผู้ดูแลกำหนดเส้นทางเอง ไม่อัพเดทอัตโนมัติเมื่อเครือข่ายเปลี่ยน",
      "ข้อดี static: ง่าย ปลอดภัย ประหยัด bandwidth/CPU ควบคุมได้ละเอียด ข้อเสีย: ขยายยาก ดูแลเยอะ (เพิ่ม/ลบทีละรายการ) — เหมาะกับบ้าน/องค์กรเล็ก, stub network, ทางสำรองชั่วคราว",
      "Dynamic routing ค้นหาเส้นทางเองและเปลี่ยนเส้นทางทันทีเมื่อ link ล่ม — เพราะ static เพิ่มงานเร็วมาก (6 เราเตอร์ = 12 รายการ) และปรับตัวตาม link ที่ล่มไม่ได้",
      "เปรียบเทียบ: OSPF = กลาง–ใหญ่ ลู่เร็ว ตั้งค่าซับซ้อน; RIP = เครือข่ายเล็ก ง่ายแต่จำกัด 15 hop และช้า; BGP = อินเทอร์เน็ต/ISP; IS-IS = แกน ISP/data center",
      "RIP เป็น distance-vector: ค่าเส้นทาง = hop count สูงสุด 15 (16 = ไปไม่ถึง) ใช้กับเครือข่าย >15 เราเตอร์ไม่ได้ และไม่รู้โครงข่ายเต็ม — รู้แค่ next hop + ระยะทาง",
      "OSPF เป็น link-state ใช้คุณภาพลิงก์จริง: Cost = Reference Bandwidth / Link Bandwidth (ค่าอ้างอิงเริ่มต้น 100 Mbps → ลิงก์ 20 Mbps = 100/20 = 5)",
      "ตัวอย่าง: เส้นทาง 1 = 20 Mbps หนึ่ง hop (cost 5); เส้นทาง 2 = 100 Mbps สาม hop (cost 1+1+1=3) → OSPF เลือกเส้นทาง 2 แต่ RIP เลือกเส้นทาง 1 (hop น้อยกว่า)",
      "Policy routing จับคู่ source, destination และ protocol ของทราฟฟิกเพื่อส่งตามกฎเฉพาะ — ใช้กระจาย/จัดลำดับทราฟฟิก",
      "3 ประเภท: Static (ง่าย ต้นทุนต่ำ เครือข่ายเล็กนิ่ง) / Policy (ควบคุมละเอียด จัดลำดับทราฟฟิก) / Dynamic (ปรับอัตโนมัติ เครือข่ายใหญ่ซับซ้อน)"
    ]
  },
  {
    id: "ch6",
    icon: "🛠️",
    title_en: "Ch.6 Services (DHCP / DNS / QoS / SSH)",
    title_th: "บทที่ 6 — บริการเครือข่าย",
    body_en: [
      "DHCP auto-assigns temporary IPs + options (gateway, DNS, NTP…). DORA: Discover (client broadcast) → Offer → Request → ACK.",
      "DHCP Relay lets clients on one subnet get IPs from a DHCP server on another subnet — the relay agent forwards the broadcasts as unicast.",
      "DHCPv6: Stateful assigns addresses via DHCPv6 (Solicit → Advertise → Request → Reply); Stateless only gives other params after SLAAC makes the address. IMPORTANT: the default gateway always comes from RA, not DHCPv6.",
      "DNS turns domain names into IP addresses. Public resolvers: Google 8.8.8.8/8.8.4.4, Cloudflare 1.1.1.1/1.0.0.1, Quad9 9.9.9.9 (blocks malicious domains).",
      "DDNS auto-updates the record when the public IP is dynamic — for home CCTV/NAS/game servers without a static IP.",
      "mDNS = zero-config discovery on the local network using '.local' names and multicast 224.0.0.251 (IPv4) / FF02::FB (IPv6); no central DNS server (macOS Bonjour, Linux Avahi).",
      "QoS prioritizes/classifies/shapes traffic. Gateway QoS handles LAN→WAN; Switch QoS handles traffic inside the LAN.",
      "QoS mechanisms: Classification & Marking, Congestion Management (queues), Congestion Avoidance (Tail Drop, RED, WRED), Traffic Policing (drop over-limit) vs Traffic Shaping (buffer over-limit).",
      "DiffServ is the most common QoS model — per-hop behavior instead of end-to-end reservations; marks packets into traffic classes TC-0…TC-7.",
      "Omada switches have 8 queues TC-0…TC-7; higher value = higher forwarding priority.",
      "Ingress priority modes: Port Priority (by port only), 802.1p (only tagged frames), DSCP (only IP packets).",
      "Schedulers: SP = highest queue takes all bandwidth; WRR = bandwidth split by weights; SP+WRR = drain SP queues first then WRR by weight.",
      "SSH = Secure Shell, encrypted remote login/commands/file transfer, default port 22."
    ],
    body_th: [
      "DHCP แจก IP ชั่วคราว + ตัวเลือก (gateway, DNS, NTP) ลำดับ DORA: Discover (broadcast) → Offer → Request → ACK",
      "DHCP Relay ให้ไคลเอนต์ subnet หนึ่งได้ IP จาก DHCP server อีก subnet โดย relay agent ส่ง broadcast ต่อเป็น unicast",
      "DHCPv6: Stateful แจก address ผ่าน DHCPv6 (Solicit → Advertise → Request → Reply) ส่วน Stateless ให้เฉพาะ parameter อื่นหลัง SLAAC สร้าง address — ที่สำคัญ: default gateway ได้จาก RA เสมอ ไม่ใช่ DHCPv6",
      "DNS แปลงชื่อโดเมนเป็น IP Public resolver: Google 8.8.8.8/8.8.4.4, Cloudflare 1.1.1.1/1.0.0.1, Quad9 9.9.9.9 (บล็อกโดเมนอันตราย)",
      "DDNS อัปเดต record อัตโนมัติเมื่อ public IP เปลี่ยน — เหมาะกับ CCTV/NAS เกมเซิร์ฟเวอร์ที่ไม่มี static IP",
      "mDNS = ค้นหากันเองใน LAN ใช้ชื่อ '.local' และมัลติคาสต์ 224.0.0.251 (IPv4) / FF02::FB (IPv6) ไม่ต้องมี DNS server (macOS Bonjour, Linux Avahi)",
      "QoS จัดลำดับ/จำแนก/ควบคุมทราฟฟิก Gateway QoS ดูแลทิศ LAN→WAN ส่วน Switch QoS ดูแลใน LAN",
      "กลไก QoS: Classification & Marking, Congestion Management (คิว), Congestion Avoidance (Tail Drop, RED, WRED), Traffic Policing (ทิ้งเมื่อเกิน) vs Traffic Shaping (บัฟเฟอร์เมื่อเกิน)",
      "DiffServ คือโมเดล QoS ที่นิยมสุด — ทำงานต่อ hop แทนการจอง end-to-end แบ่งทราฟฟิกเป็น class TC-0…TC-7",
      "สวิตช์ Omada มี 8 คิว TC-0…TC-7 ยิ่งค่าสูงยิ่งส่งก่อน",
      "โหมดลำดับความสำคัญขาเข้า: Port Priority (ดูเฉพาะพอร์ต), 802.1p (เฉพาะเฟรมติด tag), DSCP (เฉพาะ IP packet)",
      "Scheduler: SP = คิวสูงสุดใช้แบนด์วิดท์ทั้งหมด, WRR = แบ่งตามน้ำหนัก, SP+WRR = ส่ง SP ก่อนแล้วจึง WRR ตามน้ำหนัก",
      "SSH = Secure Shell รีโมตเข้าสู่อุปกรณ์แบบเข้ารหัส (คำสั่ง/ถ่ายโอนไฟล์) พอร์ตเริ่มต้น 22"
    ]
  },
  {
    id: "ch7",
    icon: "🔐",
    title_en: "Ch.7 Network Security",
    title_th: "บทที่ 7 — ความปลอดภัยเครือข่าย",
    body_en: [
      "Omada security toolbox: MAC filtering, RADIUS/802.1X auth, guest isolation (VLAN + captive portal), IP-MAC binding, ACL, URL filtering, VPN, SPI firewall + anti-DDoS, DPI + IPS/IDS.",
      "VPN = encrypted tunnel over the public Internet; protects data (encryption/encapsulation) and reaches private resources remotely.",
      "IPsec modes: Transport = 1 IP header (payload only); Tunnel = 2 IP headers (original IP header encapsulated) — tunnel is used site-to-site.",
      "Site-to-Site VPN: LAN-to-LAN tunnel (both routers must enter each other's subnet). Client-to-Site: VPN client gets routes from the server-assigned IP (traveling staff).",
      "Protocol matrix: IPsec = high security, complex; L2TP = wide support but NO native encryption → pair with IPsec (L2TP tunnels, IPsec encrypts); PPTP = easy/fast but weak; OpenVPN = SSL/TLS, flexible; SSL VPN = browser-based, per-user resource policies, Full Mode routes all traffic; WireGuard = lightweight, 30–40% higher throughput than IPsec.",
      "OpenVPN default port 1194; .ovpn profile carries server, cipher (e.g. AES-256), certificates (CA + client) and routing rules; mutual certificate authentication.",
      "Switch ACL types (standalone): MAC ACL (L2 fields), IP ACL (L3; +L4 ports if TCP/UDP), Combined ACL (L2+L3+L4), IPv6 ACL, Packet Content ACL (hex match, 4 chunks × 4 bytes within first 128 bytes). Controller mode = Combined ACL only.",
      "Gateway ACL is STATEFUL (switch ACLs are stateless): directions WAN IN / LAN→WAN / LAN→LAN / VPN IN / ALL; states New (SYN) / Established (SYN+ACK seen) / Related (sub-connections e.g. FTP data) / Invalid.",
      "MAC Filtering = allow list or deny list by MAC; randomized MAC addresses in modern OS make it less effective.",
      "URL Filtering blocks/allows sites by keyword or URL path — parental control, productivity, public Wi-Fi.",
      "ARP spoofing = fake ARP messages mapping attacker MAC to a legit IP → IP-MAC Binding stops it. Switch IMPB additionally binds VLAN + port (standalone mode only, as of Q1 2025).",
      "Firewall: State Timeouts close idle TCP/UDP/ICMP sessions; options = Broadcast Ping, ICMP redirects, SYN Cookies (anti-SYN-flood).",
      "IDS = detects and alerts; IPS = actively blocks threats in real time (packet drop / session kill).",
      "DPI inspects packet PAYLOAD (not just headers) → application control/QoS, usage monitoring, zero-trust app policies. All Omada gateways support DPI."
    ],
    body_th: [
      "ชุดเครื่องมือความปลอดภัย Omada: MAC filtering, RADIUS/802.1X, guest isolation (VLAN + captive portal), IP-MAC binding, ACL, URL filtering, VPN, SPI firewall + anti-DDoS, DPI + IPS/IDS",
      "VPN = อุโมงค์เข้ารหัสผ่านอินเทอร์เน็ตสาธารณะ ช่วยทั้งปกป้องข้อมูลและเข้าถึงทรัพยากรภายในจากภายนอก",
      "IPsec modes: Transport = มี IP header เดียว (เข้ารหัส payload); Tunnel = สอง IP header (ครอบหัวเดิม) — แบบ tunnel ใช้ใน site-to-site",
      "Site-to-Site VPN: อุโมงค์ LAN-to-LAN (เราเตอร์ทั้งสองฝั่งต้องใส่ subnet ของอีกฝั่ง) Client-to-Site: ไคลเอนต์ได้ route จาก IP ที่เซิร์ฟเวอร์แจก (ใช้เวลาเดินทาง)",
      "ตารางโปรโตคอล: IPsec = ปลอดภัยสูง ตั้งยาก; L2TP = รองรับกว้างแต่ไม่เข้ารหัสเอง → ต้องคู่กับ IPsec (L2TP ทำอุโมงค์, IPsec เข้ารหัส); PPTP = ง่าย/เร็วแต่อ่อนแอ; OpenVPN = SSL/TLS ยืดหยุ่น; SSL VPN = ผ่านเบราว์เซอร์ กำหนดสิทธิ์รายบุคคล Full Mode ส่งทราฟฟิกทั้งหมด; WireGuard = เบา เร็วกว่า IPsec 30–40%",
      "OpenVPN พอร์ตเริ่มต้น 1194 ไฟล์ .ovpn มี server, cipher (เช่น AES-256), ใบรับรอง (CA + client) และ rule ต่าง ๆ ยืนยันตัวตนแบบแลกเปลี่ยนใบรับรอง",
      "ประเภท Switch ACL (standalone): MAC ACL (ข้อมูล L2), IP ACL (L3; ถ้าเลือก TCP/UDP เพิ่ม L4 ได้), Combined ACL (L2+L3+L4), IPv6 ACL, Packet Content ACL (จับคู่ hex 4 ส่วน × 4 ไบต์ใน 128 ไบต์แรก) โหมด Controller = เฉพาะ Combined ACL",
      "Gateway ACL เป็นแบบ stateful (Switch ACL ไม่มีสถานะ): ทิศทาง WAN IN / LAN→WAN / LAN→LAN / VPN IN / ALL; สถานะ New (SYN) / Established (เห็น SYN+ACK แล้ว) / Related (การเชื่อมต่อย่อย เช่น FTP data) / Invalid",
      "MAC Filtering = กำหนด allow list หรือ deny list ด้วย MAC แต่ MAC สุ่มใน OS รุ่นใหม่ทำให้ใช้ได้ผลน้อยลง",
      "URL Filtering บล็อก/อนุญาตเว็บตาม keyword หรือ URL path — คุมลูก เพิ่มผลผลิต ควบคุม Wi-Fi สาธารณะ",
      "ARP spoofing = ส่ง ARP ปลอมผูก MAC ผู้โจมตีกับ IP ของเครื่องถูกต้อง → IP-MAC Binding ป้องกัน ส่วน IMPB ของสวิตช์ผูกเพิ่ม VLAN + พอร์ต (รองรับเฉพาะ standalone, ณ Q1 2025)",
      "Firewall: State Timeouts ปิด session ที่ค้าง (TCP/UDP/ICMP); ตัวเลือก Broadcast Ping, ICMP redirects, SYN Cookies (กัน SYN flood)",
      "IDS = ตรวจจับและแจ้งเตือน ส่วน IPS = บล็อกภัยคุกคามทันที (โยนแพ็กเกต / ตัด session)",
      "DPI ตรวจ payload ของแพ็กเกต (ไม่ใช่แค่หัว) → ควบคุมแอป/QoS, นับการใช้งาน, นโยบาย zero-trust — Gateway ทุกรุ่นของ Omada รองรับ DPI"
    ]
  },
  {
    id: "ch8",
    icon: "🩹",
    title_en: "Ch.8 Troubleshooting",
    title_th: "บทที่ 8 — การแก้ปัญหา",
    body_en: [
      "Tools: Controller Network Check (Ping, Traceroute, ARP Table), Terminal/CLI (read-only via controller; or SSH/Telnet from your PC), Packet Capture with WiShark (choose adapter → start → filter).",
      "Strategy 1: split the network into parts (ISP → Gateway → Switches → Clients) and localize the fault.",
      "Strategy 2: make only ONE change at a time, then verify.",
      "Per part: ISP = contact provider / test line directly; Gateway & Switches = swap port or device; Clients = test another client in place of the faulty one.",
      "Very slow / no connection: reseat or replace cable → check port LED / try another port → look for a loop (several port LEDs flashing fast together) and unplug, then enable loop prevention.",
      "Client gets 169.254.x.x = DHCP failed (APIPA). Checks: cable/connection, is the NIC set to DHCP (not Manual/Static)?, is the port's VLAN egress rule untagged?, is DHCP service enabled on the server?, is the address pool exhausted?, do other clients succeed?",
      "Some websites unreachable but others fine: check if the site is down (other PC/phone), check ACL / URL Filtering rules, verify DNS — nslookup, then try public DNS 8.8.8.8 / 8.8.4.4 (private sites need private DNS)."
    ],
    body_th: [
      "เครื่องมือ: Controller Network Check (Ping, Traceroute, ARP Table), Terminal/CLI (ดูได้อย่างเดียวผ่าน controller; หรือ SSH/Telnet จากพีซี), Packet Capture ด้วย Wireshark (เลือก adapter → เริ่ม → กรอง)",
      "กลยุทธ์ 1: แบ่งเครือข่ายเป็นส่วน ๆ (ISP → Gateway → Switches → Clients) แล้วหาว่าส่วนไหนมีปัญหา",
      "กลยุทธ์ 2: เปลี่ยนแปลงทีละอย่างเดียว แล้วทดสอบทุกครั้ง",
      "รายส่วน: ISP = ติดต่อผู้ให้บริการ/ทดสอบสายตรง; Gateway & Switches = เปลี่ยนพอร์ตหรือเปลี่ยนอุปกรณ์; Clients = ลองเครื่องอื่นแทนเครื่องที่มีปัญหา",
      "เน็ตช้ามาก/ไม่ต่อ: เช็คว่าสายหลวมหรือเสีย → เปลี่ยนสาย; เช็ค LED พอร์ต/เปลี่ยนพอร์ต; ถ้าหลายพอร์ตกระพริบเร็วพร้อมกัน = มี loop → ถอดสาย แล้วเปิด loop prevention",
      "ได้ IP 169.254.x.x = DHCP ล้มเหลว (APIPA) ตรวจสอบ: สาย/การเชื่อมต่อ, การ์ดตั้งเป็น DHCP หรือไม่ (ไม่ใช่ Manual/Static), VLAN egress rule ของพอร์ตเป็น untagged ไหม, เปิด DHCP service แล้วหรือยัง, address pool หมดไหม, เครื่องอื่นได้ไหม",
      "เข้าบางเว็บไม่ได้แต่เว็บอื่นปกติ: เช็คว่าเว็บล่มหรือไม่ (ลองเครื่องอื่น/มือถือ), เช็ค rule ACL / URL Filtering, ตรวจสอบ DNS — nslookup แล้วลอง public DNS 8.8.8.8 / 8.8.4.4 (เว็บส่วนตัวต้องตั้ง private DNS)"
    ]
  }
];
