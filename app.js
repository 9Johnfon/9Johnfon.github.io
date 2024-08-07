// Sample data for local books (replace with your actual data)
const localBooks = [
    // { title: "ประวัติศาสตร์", code: "H103-43", shell:"100", local:"Shell 100 ตู้ที่ 3 ชั้น 4 ล๊อค 3", description: " เป็นการค้นพบ ค้นหา รวบรวม จัดระเบียบและนำเสนอข้อมูลเกี่ยวกับเหตุการณ์ในอดีตประวัติศาสตร์" },
     // Add more books as needed.
     // { title: "", lecturer: "", description: "",video: "", url: "" },
     { title: "ตรวจร่างกาย(1) ทางจักษุวิทยา", lecturer: "ผศ.นพ.ภัคพล สุวรรณชาติ", description: "26/6/2567 เป็นบทแรกของวิชาการตรวจสุขภาพในเรื่องของตา การวัดระกับสายตา",video: "https://youtu.be/ZfhKYfA6Fxo", url: "https://drive.google.com/file/d/17u2y0d6HRSlNmsR6oMcT_R6THT79JEuc/view" },
     { title: "พยาธิวิทยา(1) Intro Patho", lecturer: "อ.ดร.จงกลณี ธนาไสย์", description: "บทนำพยาธิวิทยา phato",video: "https://youtu.be/bG3Suu_nfpw", url: "https://drive.google.com/file/d/1tQWKaWDUKNAQySp1zB0quNyJj_MvgCij/view?usp=drive_link" },
     { title: "หัตถการทางการแพทย์ฉุกเฉิน(2) เรื่อง ยา", lecturer: "อ.นฉพ.จันทนา ศรีพราว", description: "Medication Administration การบริหารยา การอ่านฉลากยา หลัก 10R",video: "https://www.youtube.com/watch?v=PXtrkAWK25Q", url: "https://drive.google.com/file/d/1soVKz_4t-B4-ZZCu8oIygeB9FegyUUxE/view?usp=drive_link" },
     { title: "อาการวิทยา(2) กระดูก", lecturer: "อ.นพ.กิตติธัส", description: "อาการวิทยาทางกระดูก การปวดของข้อกระดูก",video: "https://youtu.be/0Jj7jkW_wzg?si=N6VpHFphzLfrp-rK", url: "https://drive.google.com/file/d/1RPD1vHyguN6ynav3uz5HrFB8loZ-tCwE/view?usp=drive_link" },
     { title: "พยาธิวิทยา(2) ภาวะติดเชื้อ", lecturer: "อ.ดร.จงกลณี ธนาไสย์", description: "Phathology of Infection หลักการ ชนิด โรค อุบัติใหม่",video: "https://youtu.be/vnJzCj8cbdk?si=npmMDERPCkZoeXVI", url: "" },
     { title: "หัตถการทางการแพทย์ฉุกเฉิน(3) เรื่อง การให้สารนํ้าในหลอดเลือดดำ (IV)", lecturer: "อ.ตั๋ว", description: "การให้สารนํ้าทางหลอดเลือดดำ IV",video: "https://youtu.be/boziUt6yRpQ?si=_7JfUTMOXS2t-RBv", url: "" },
     { title: "หัตถการทางการแพทย์ฉุกเฉิน(4) เรื่อง suction", lecturer: "อาจารย์", description: "การดูดเสมหะ suction",video: "https://youtu.be/Ie90Nwn8Yhg?si=udM8bFmsAYIA-b4_", url: "" },
     { title: "ตรวจร่างกาย(2) เรื่อง กระดูก", lecturer: "อาจารย์", description: "การตรวจโรจ วินิจฉัยข้อกระดูก",video: "https://youtu.be/8PbsmlDmsV8?si=rWIMZpP68zvo4OeP", url: "" },
     { title: "พยาธิวิทยา(3) Hemodynamic", lecturer: "อาจารย์", description: "phato hemodynamics, ภาวะซ๊อค, ภาวะขาดเลือด",video: "https://youtu.be/mSOATkP9o-4?si=Nej5umk_NUG4-TG_", url: "" },
     { title: "เวชจริยศาสตร์(1) หลักการและทฤษฎีทางเวชจริยศาสตร์", lecturer: "อาจารย์", description: "หลักการและทฤษฎีทางเวชจริยศาสตร์",video: "https://youtu.be/C24YlsiNDHs?si=-BZtkt0vO0sByxIy", url: "" },
     { title: "Biochem(1) buffer", lecturer: "อาจารย์", description: "buffer",video: "https://youtu.be/lqXpNIEbDI8?si=YZKjsirEdPWXU2Jw", url: "" },
     { title: "อาการวิทยา(3) หู คอ จมูก", lecturer: "อาจารย์", description: "การดูแลผู้ป่วยด้าน โสต ศอ นาสิก หู คอ จมูก",video: "https://youtu.be/MWUgNzJ5Jns?si=dgtdL0tP_rP_oyDa", url: "" },
     { title: "ตรวจร่างกาย(4) ทางเดินอาหาร IG", lecturer: "อาจารย์", description: "การตรวจร่างกาย ระบบทางเดินอาหาร GI",video: "https://youtu.be/8cIlyNW-9NM", url: "" },
     { title: "พยาธิวิทยา(4) Temp BT โรคจากสิ่งแวดล้อม", lecturer: "อาจารย์", description: "Phato อุณหภูมิ โรคที่เกี่ยวกับสิ่งแวดล้อม แมลงสาบกัดต่อย",video: "https://youtu.be/NFTsKGXnpes?si=WJ4KBXfVVH6lSaUo ", url: "" },
     { title: "เวชจริยศาสตร์(2) ความเที่ยงธรรม", lecturer: "อาจารย์", description: "ความเที่ยงธรรม และ เสมอภาค",video: "https://youtu.be/ge2N7n_SML4?si=7ajiKdntvY1R0DCK", url: "" },
    { title: "Biochem(2) คา์โบไฮเดรท", lecturer: "อาจารย์", description: "การจำแนกคาร์โบไฮเดรท",video: "https://youtu.be/T09jWOd1ISg?si=XYgFxO815xe3bl1x", url: "" },
    { title: "หัตถการทางการแพทย์ฉุกเฉิน(5) เรื่อง การให้เลือดและสารประกอบทางหลอดเลือดดำ IV", lecturer: "อาจารย์", description: "การให้เลือดและสารประกอบทางหลอดเลือดดำ IV",video: "https://youtu.be/VOoH4H4WvCE?si=KP5xIVzPoKAl16uX", url: "" },

    { title: "เวชจริยศาสตร์(3) เจริญพันธุ์ HIV", lecturer: "อาจารย์", description: "อนามัยเจริญพันธุ์ เจริญพันธุ์ HIV",video: "https://youtu.be/WEDuFklmrhs", url: "" },
    { title: "Biochem(3) วิตามินและเกลือแร่", lecturer: "อาจารย์", description: "วิตามินและเกลือแร่",video: "https://youtu.be/DDFNE2sSukA", url: "" },
    { title: "หัตถการทางการแพทย์ฉุกเฉิน(6) เรื่อง NG", lecturer: "อาจารย์", description: "NG",video: "https://youtu.be/rpjLp2x7i2I", url: "" },
    { title: "หัตถการทางการแพทย์ฉุกเฉิน(7) เรื่อง การเก็บสิ่งส่งตรวจทางห้องปฏิบัติการ", lecturer: "อาจารย์", description: "การเก็บสิ่งส่งตรวจทางห้องปฏิบัติการ LAB",video: "https://youtu.be/MyfFWdEdqxs", url: "" },
    { title: "ตรวจร่างกาย(5) สูติศาสตร์", lecturer: "อาจารย์", description: "หลักการและวิธีการปฏิบัติในการตรวจทางสูติศาสตร์ ตรวจครรภ์",video: "https://youtu.be/Qm8c1mDZ_yM", url: "" },
    { title: "เวชจริยศาสตร์(4) พื้นฐานทางชีววิทยากับพฤติกรรมมนุษย์", lecturer: "อาจารย์", description: "พื้นฐานทางชีววิทยากับพฤติกรรมมนุษย์",video: "https://youtu.be/jllWUGSUQKw", url: "" },
    { title: "ตรวจร่างกาย(6) สัญญานชีพ", lecturer: "อาจารย์", description: "การตรวจสัญญานชีพ",video: "https://youtu.be/-A3EOBg0yQw", url: "" },
    { title: "พยาธิวิทยา(5) โรคสืบเนื่องมาจากระบบภูมิคุ้มกัน", lecturer: "อาจารย์", description: "โรคสืบเนื่องมาจากระบบภูมิคุ้มกัน Disease",video: "https://youtu.be/bco7rApKhs0", url: "" },
    { title: "Biochem(4) Chemistry of Lipid", lecturer: "อาจารย์", description: "Chemistry of Lipid",video: "https://youtu.be/GC26jWpjTdw", url: "" },
    { title: "ตรวจร่างกาย(7) การตรวจทางห้องปฏิบัติการ", lecturer: "อาจารย์", description: "การการอ่านผลตรวจทางห้องปฏิบัติการ",video: "https://youtu.be/4gclWqYIcHo", url: "" }
 ];
 
 // Function to search books
 function searchBooks() {
     const searchTerm = document.getElementById("searchInput").value.toLowerCase();
 
     // Filter books based on the search term
     const searchResults = localBooks.filter(book =>
         book.title.toLowerCase().includes(searchTerm) ||
         book.lecturer.toLowerCase().includes(searchTerm) || 
         book.description.toLowerCase().includes(searchTerm)
     );
 
     displayResults(searchResults);
 
     if (searchTerm === "สอบอะไรวะ") {
         window.open("https://9johnfon.github.io/FinalTermWeb/AnatomyLecture.html","_self");
     };
 }
 
 
 function showBookDetails(book) {
     const existingPopup = document.querySelector(".book-popup");
 
     if (existingPopup) {
         document.body.removeChild(existingPopup);
     }
 
     const popup = document.createElement("div");
     popup.classList.add("book-popup");
 
     const googleDriveVideo = book.url ? `<iframe width="560" height="315" src="https://drive.google.com/file/d/${getGoogleDriveID(book.url)}/preview" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>` : '';
 
     popup.innerHTML = `
         <h2>${book.title}</h2>
         <p>Description: ${book.description}</p>
         <p>${googleDriveVideo}</p>
         ${book.video ? `<p><a class="orange-button" href="${book.video}" target="_blank">ไปที่วิดีโอ</a></p>` : ''}
     `;
 
     document.body.appendChild(popup);
 
     const centerX = window.innerWidth / 2 - popup.clientWidth / 2;
     const centerY = window.innerHeight / 2 - popup.clientHeight / 2;
 
     popup.style.top = `${centerY}px`;
     popup.style.left = `${centerX}px`;
 
     function closePopup() {
         document.body.removeChild(popup);
         document.removeEventListener("click", closePopup);
     }
 
     document.addEventListener("click", (event) => {
         if (!popup.contains(event.target)) {
             closePopup();
         }
     });
 
     popup.addEventListener("click", (event) => {
         event.stopPropagation();
     });
 }
 
 function getGoogleDriveID(url) {
     const match = url.match(/\/d\/([a-zA-Z0-9_-]+)/);
     return match ? match[1] : '';
 }
 
 // Function to display search results
 function displayResults(results) {
     const searchContainer = document.getElementById("searchContainer");
     const bookResultsDiv = document.getElementById("bookResults");
 
     if (results.length === 0) {
         bookResultsDiv.innerHTML = "<p>No results found.</p>";
         searchContainer.style.margin = "0";
         searchContainer.style.padding = "0";
         searchContainer.style.position = "relative";
         searchContainer.style.zIndex = "1000"; // Adjust the z-index if needed    
         return;
     }
     
     searchContainer.style.bottom = "15%";
     searchContainer.style.position = "relative";
     searchContainer.style.zIndex = "1000"; // Adjust the z-index if needed
 
     // Clear previous results
     bookResultsDiv.innerHTML = "";   
 
     results.forEach(book => {
         // Create HTML elements to display book information
         const bookElement = document.createElement("div");
         bookElement.innerHTML = `<h2>${book.title}</h2><p>Lecturer: ${book.lecturer}</p><p>Description: ${book.description}</p>`;
 
         // Add event listener for click on the book result
         bookElement.addEventListener("click", (event) => {
             showBookDetails(book);
             event.preventDefault();
             event.stopPropagation(); // Stop the event from propagating to parent elements
         });
 
         // Append book element to the results div
         bookResultsDiv.appendChild(bookElement);
     });
 }
 
 // Function to handle key press
 function handleKeyPress(event) {
     if (event.key === "Enter") {
         searchBooks();
     }
 }
 
 // Additional event listener for touch devices
 document.addEventListener("touchstart", (event) => {
     // Assuming you have a button or element with ID "myButton" to trigger the search
     if (event.target.id === "myButton") {
         searchBooks();
     }
 });
 
 // Function to initialize the page with all books
 function initializePage() {
     displayResults(localBooks);
 }
 
 // Call initializePage when the window loads
 window.onload = initializePage;
