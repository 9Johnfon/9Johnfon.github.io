/* =========================================================
   OCNA Routing & Switching — True/False Quiz (จากไฟล์จริง)
   Source: OCNA R_S_Slides_v1.1.0_EN_Rev.250430.pdf (242 หน้า)
   30 ข้อ จริง/เท็จ 100% อิงเนื้อหาในไฟล์
   ========================================================= */

const OCNA_TF = {
  source: "OCNA R_S_Slides_v1.1.0_EN_Rev.250430.pdf (TP-Link, 2025, 242 หน้า)",
  total: 30,
  passing: 65, // 65%
  questions: [
    // ===== บทที่ 1: ภาพรวม OCNA =====
    {
      no: 1, chapter: "บทที่ 1 — ภาพรวม OCNA",
      q_th: "OCNA ย่อมาจาก Omada Certified Network Administrator",
      q_en: "OCNA stands for Omada Certified Network Administrator",
      ans: true,
      explain_th: "OCNA = Omada Certified Network Administrator (TP-Link's entry-level certification)"
    },
    {
      no: 2, chapter: "บทที่ 1 — ภาพรวม OCNA",
      q_th: "OCNA คือใบรับรองระดับสูง (expert) ของ TP-Link",
      q_en: "OCNA is a senior-level certification for TP-Link",
      ans: false,
      explain_th: "OCNA คือใบรับรองระดับเริ่มต้น (entry-level) ของ TP-Link"
    },
    {
      no: 3, chapter: "บทที่ 1 — ภาพรวม OCNA",
      q_th: "ชุดนักเรียน (student kit) OCNA ประกอบด้วย OC200 ×1 และ EAP653 ×1",
      q_en: "The OCNA student kit contains OC200 ×1 and EAP653 ×1",
      ans: true,
      explain_th: "Student kit = OC200 + EAP653 + EAP650-Outdoor + SG2008P + ER605"
    },

    // ===== บทที่ 2: พื้นฐานเครือข่าย =====
    {
      no: 4, chapter: "บทที่ 2 — พื้นฐานเครือข่าย",
      q_th: "โมเดล OSI มี 7 ชั้น",
      q_en: "The OSI model has 7 layers",
      ans: true,
      explain_th: "OSI (Open System Interconnection) Networking Model มี 7 ชั้น"
    },
    {
      no: 5, chapter: "บทที่ 2 — พื้นฐานเครือข่าย",
      q_th: "PDU (Protocol Data Unit) จะเล็กลงเรื่อย ๆ เมื่อเพิ่มชั้นตามลำดับ",
      q_en: "PDU gets smaller as the network layer increases from Layer 1 to Layer 7",
      ans: false,
      explain_th: "PDU กลายเป็นใหญ่และซับซ้อนขึ้น (larger and more complex) เมื่อเพิ่มชั้น"
    },
    {
      no: 6, chapter: "บทที่ 2 — พื้นฐานเครือข่าย",
      q_th: "ในโมเดล TCP/IP มี 4 ชั้น หรือ 5 ชั้นขึ้นกับการนำไปใช้",
      q_en: "TCP/IP model has 4 layers, or 5 layers when the Network Access layer is split",
      ans: true,
      explain_th: "TCP/IP เดิมมี 4 ชั้น แต่ในทางปฏิบัติแบ่ง Network Access ออกเป็น Data Link + Physical → 5 ชั้น"
    },
    {
      no: 7, chapter: "บทที่ 2 — พื้นฐานเครือข่าย",
      q_th: "สื่อแบบ Fiber Optic สะดวกในการใช้ และไม่เสี่ยงต่อสัญญาณรบกวน",
      q_en: "Fiber Optic is convenient and not prone to interference",
      ans: false,
      explain_th: "Wireless คือ สะดวก แต่เสี่ยงต่อสัญญาณรบกวน (interference) ส่วน Fiber คือ เร็ว ไกล แพง"
    },
    {
      no: 8, chapter: "บทที่ 2 — พื้นฐานเครือข่าย",
      q_th: "IEEE 802.3ab หมายถึง 1000BASE-T ซึ่งใช้สื่อ twisted pair CAT5e",
      q_en: "IEEE 802.3ab (1000BASE-T) uses twisted pair CAT5e",
      ans: true,
      explain_th: "802.3ab = 1000BASE-T = 1 Gbps = Twisted Pair (CAT5e)"
    },
    {
      no: 9, chapter: "บทที่ 2 — พื้นฐานเครือข่าย",
      q_th: "ที่อยู่ MAC เป็นหมายเลขฮาร์ดแวร์ 64 บิต",
      q_en: "MAC address is a unique 64-bit hardware address",
      ans: false,
      explain_th: "MAC address คือ 48-bit (6 ไบต์) ไม่ใช่ 64 บิต"
    },
    {
      no: 10, chapter: "บทที่ 2 — พื้นฐานเครือข่าย",
      q_th: "ARP ใช้ในการแปลง IPv4 เป็น MAC address",
      q_en: "ARP is used to resolve IPv4 to MAC address",
      ans: true,
      explain_th: "ARP = Address Resolution Protocol, แปลง IPv4 → MAC"
    },

    // ===== บทที่ 3: การออกแบบเครือข่าย =====
    {
      no: 11, chapter: "บทที่ 3 — การออกแบบเครือข่าย",
      q_th: "MDF (Main Distribution Frame) คือจุดแจกย่อยตามตึกหรือชั้น",
      q_en: "MDF (Main Distribution Frame) is the sub-distribution point on each floor",
      ans: false,
      explain_th: "MDF = ศูนย์กลางหลักในห้องอุปกรณ์กลาง (gateway + core) IDF = จุดแจกย่อยตามตึก/ชั้น"
    },
    {
      no: 12, chapter: "บทที่ 3 — การออกแบบเครือข่าย",
      q_th: "ในขบวน PoE 802.3af อนุญาตให้ใช้กำลังไฟฟ้าได้สูงสุด 15.4W",
      q_en: "IEEE 802.3af PoE standard allows maximum power of 15.4W",
      ans: true,
      explain_th: "802.3af = 15.4W, 802.3at (PoE+) = 30W, 802.3bt Type 3 = 60W, Type 4 = 90W"
    },
    {
      no: 13, chapter: "บทที่ 3 — การออกแบบเครือข่าย",
      q_th: "PoE budget รวม = ผลรวมกำลังของพอร์ตทั้งหมด × จำนวนพอร์ต",
      q_en: "PoE budget total = sum of port power budget × number of ports",
      ans: false,
      explain_th: "PoE budget รวม ≠ งบต่อพอร์ต × พอร์ต เพราะไม่ใช่ทุกพอร์ตใช้ไฟเต็มพร้อมกัน"
    },


    // ===== บทที่ 4: พื้นฐานการสวิตช์ =====
    {
      no: 14, chapter: "บทที่ 4 — พื้นฐานการสวิตช์",
      q_th: "สวิตช์ (L2 switch) เรียนรู้ MAC address โดยดู source MAC ของเฟรมที่เข้ามา",
      q_en: "A switch learns MAC addresses by examining the SOURCE MAC of incoming frames",
      ans: true,
      explain_th: "สวิตช์บันทึก MAC + port + VLAN จาก source MAC ของเฟรมที่เข้ามา"
    },
    {
      no: 15, chapter: "บทที่ 4 — พื้นฐานการสวิตช์",
      q_th: "VLAN แบ่ง broadcast domain และใช้ในการแยกแผนก",
      q_en: "VLAN divides broadcast domains to separate departments",
      ans: true,
      explain_th: "VLAN = 1 broadcast domain ต่อ 1 VLAN ใช้แยกแผนก"
    },
    {
      no: 16, chapter: "บทที่ 4 — พื้นฐานการสวิตช์",
      q_th: "STP (Spanning Tree Protocol) เลือก root bridge โดยใช้ lowest Bridge ID = bridge priority + MAC address",
      q_en: "STP selects root bridge using the lowest Bridge ID (bridge priority + MAC address)",
      ans: true,
      explain_th: "Root = lowest Bridge ID = bridge priority + MAC address"
    },
    {
      no: 17, chapter: "บทที่ 4 — พื้นฐานการสวิตช์",
      q_th: "ค่า Root path cost ยิ่งความเร็วของลิงก์สูงกว่า ค่าก็จะยิ่งสูง",
      q_en: "Root path cost increases as link bandwidth increases",
      ans: false,
      explain_th: "Root path cost ยิ่งความเร็วสูง ยิ่ง cost ต่ำ (10Mbps=2,000,000, 1Gbps=20,000, 10Gbps=2,000)"
    },
    {
      no: 18, chapter: "บทที่ 4 — พื้นฐานการสวิตช์",
      q_th: "LLDP คือ Layer-2 neighbor discovery ที่สวิตช์ส่ง LLDPDU อย่างสม่ำเสมอ",
      q_en: "LLDP is Layer-2 neighbor discovery where switches periodically send LLDPDU",
      ans: true,
      explain_th: "LLDP = Layer-2 discovery, ส่ง LLDPDU ตามคาบเพื่อสร้าง neighbor table"
    },


    // ===== บทที่ 5: พื้นฐานการเราเตอร์ =====
    {
      no: 19, chapter: "บทที่ 5 — พื้นฐานการเราเตอร์",
      q_th: "Static routing ต้องปรับเปลี่ยนด้วยมือ และไม่อัพเดทอัตโนมัติเมื่อโครงข่ายเปลี่ยน",
      q_en: "Static routing must be configured manually and does not automatically update when topology changes",
      ans: true,
      explain_th: "Static routing = admin กำหนดเอง ไม่อัพเดทอัตโนมัติ"
    },
    {
      no: 20, chapter: "บทที่ 5 — พื้นฐานการเราเตอร์",
      q_th: "RIP รู้โครงข่ายเต็มรูปแบบ (full topology) และเหมาะกับเครือข่ายขนาดใหญ่",
      q_en: "RIP knows the full topology and is suitable for large networks",
      ans: false,
      explain_th: "RIP ไม่รู้โครงข่ายเต็ม เห็นแค่ next hop + distance; เหมาะกับเครือข่ายเล็ก มีlimit 15 hop"
    },
    {
      no: 21, chapter: "บทที่ 5 — พื้นฐานการเราเตอร์",
      q_th: "OSPF โดยค่าเริ่มต้นใช้ reference bandwidth 100 Mbps ดังนั้น link 20 Mbps จะมี cost = 100/20 = 5",
      q_en: "OSPF default reference bandwidth is 100 Mbps, so a 20 Mbps link has cost = 100/20 = 5",
      ans: true,
      explain_th: "OSPF: Cost = Reference Bandwidth / Link Bandwidth. Default ref 100 Mbps → 20 Mbps = 100/20 = 5"
    },
    {
      no: 22, chapter: "บทที่ 5 — พื้นฐานการเราเตอร์",
      q_th: "BGP ใช้ควบคุมนโยบายระหว่าง ISP และ backbone ของอินเทอร์เน็ต",
      q_en: "BGP is used for policy control between ISPs and internet backbones",
      ans: true,
      explain_th: "BGP = Border Gateway Protocol, ใช้ควบคุมนโยบายระหว่าง ISP และ internet backbone"
    },

    // ===== บทที่ 6: บริการเครือข่าย =====
    {
      no: 23, chapter: "บทที่ 6 — บริการเครือข่าย",
      q_th: "DHCPv6 แบบ Stateless จะแจกที่อยู่ IP ให้เท่านั้น โดยไม่แจกพารามิเตอร์อื่น",
      q_en: "DHCPv6 Stateless only assigns IP addresses, without other parameters",
      ans: true,
      explain_th: "DHCPv6 Stateful = แจก address + parameter, Stateless = แจกเฉพาะ parameter หลัง SLAAC"
    },
    {
      no: 24, chapter: "บทที่ 6 — บริการเครือข่าย",
      q_th: "DNS ใช้พอร์ต 53 (UDP/TCP) ในการแปลงชื่อโดเมนเป็น IP",
      q_en: "DNS uses port 53 (UDP/TCP) to convert domain names to IP addresses",
      ans: true,
      explain_th: "DNS ใช้ UDP/TCP port 53"
    },
    {
      no: 25, chapter: "บทที่ 6 — บริการเครือข่าย",
      q_th: "mDNS ต้องการเซิร์ฟเวอร์ DNS ศูนย์กลางในการค้นหาบนเครือข่าย",
      q_en: "mDNS requires a central DNS server for local network discovery",
      ans: false,
      explain_th: "mDNS = zero-config, ไม่ต้องมีเซิร์ฟเวอร์ DNS ศูนย์กลาง ใช้ multicast 224.0.0.251"
    },
    {
      no: 26, chapter: "บทที่ 6 — บริการเครือข่าย",
      q_th: "SSH (Secure Shell) คือการรีโมตเข้าสู่อุปกรณ์แบบเข้ารหัส พอร์ตเริ่มต้น 22",
      q_en: "SSH (Secure Shell) is an encrypted remote login service with default port 22",
      ans: true,
      explain_th: "SSH = 22, ใช้สำหรับ remote login/commands/file transfer แบบเข้ารหัส"
    },

    // ===== บทที่ 7: ความปลอดภัยเครือข่าย =====
    {
      no: 27, chapter: "บทที่ 7 — ความปลอดภัยเครือข่าย",
      q_th: "IPsec และ L2TP ต้องใช้ร่วมกัน (L2TP tunnel + IPsec encryption) เพราะ L2TP ไม่ได้เข้ารหัสเอง",
      q_en: "IPsec must be used with L2TP (L2TP tunnel + IPsec encryption) because L2TP does not encrypt itself",
      ans: true,
      explain_th: "L2TP = wide support but NO native encryption → pair with IPsec"
    },
    {
      no: 28, chapter: "บทที่ 7 — ความปลอดภัยเครือข่าย",
      q_th: "DDNS (Dynamic DNS) ช่วยอัปเดต record อัตโนมัติเมื่อ public IP เปลี่ยน",
      q_en: "DDNS auto-updates the record when the public IP is dynamic",
      ans: true,
      explain_th: "DDNS = Dynamic DNS, auto-update when public IP changes (for home CCTV/NAS)"
    },
    {
      no: 29, chapter: "บทที่ 7 — ความปลอดภัยเครือข่าย",
      q_th: "IDS (Intrusion Detection System) และ IPS (Intrusion Prevention System) ทำงานแบบเดียวกัน",
      q_en: "IDS (Intrusion Detection System) and IPS (Intrusion Prevention System) work exactly the same",
      ans: false,
      explain_th: "IDS = ตรวจจับและแจ้งเตือน, IPS = บล็อกภัยคุกคามทันที (active blocking)"
    },
    {
      no: 30, chapter: "บทที่ 7 — ความปลอดภัยเครือข่าย",
      q_th: "DPI (Deep Packet Inspection) ตรวจสอบเฉพาะหัวของแพ็กเก็ต (header only)",
      q_en: "DPI (Deep Packet Inspection) inspects only packet header (not payload)",
      ans: false,
      explain_th: "DPI ตรวจ payload/เนื้อหาแพ็กเก็ต (ไม่ใช่แค่ header) → application control, QoS, zero-trust"
    }
  ]
};
