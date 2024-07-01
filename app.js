// Sample data for local books (replace with your actual data)
const localBooks = [
   // { title: "ประวัติศาสตร์", code: "H103-43", shell:"100", local:"Shell 100 ตู้ที่ 3 ชั้น 4 ล๊อค 3", description: " เป็นการค้นพบ ค้นหา รวบรวม จัดระเบียบและนำเสนอข้อมูลเกี่ยวกับเหตุการณ์ในอดีตประวัติศาสตร์" },
    // Add more books as needed.
    // { title: "", lecturer: "", description: "",video: "", url: "" },
    { title: "ตรวจร่างกาย(1) ทางจักษุวิทยา", lecturer: "ผศ.นพ.ภัคพล สุวรรณชาติ", description: "26/6/2567 เป็นบทแรกของวิชาการตรวจสุขภาพในเรื่องของตา การวัดระกับสายตา",video: "https://youtu.be/ZfhKYfA6Fxo", url: "https://drive.google.com/file/d/17u2y0d6HRSlNmsR6oMcT_R6THT79JEuc/view" },
    { title: "พยาธิวิทยา(1) Intro Patho", lecturer: "อ.ดร.จงกลณี ธนาไสย์", description: "บทนำพยาธิวิทยา",video: "https://youtu.be/bG3Suu_nfpw", url: "https://drive.google.com/file/d/1tQWKaWDUKNAQySp1zB0quNyJj_MvgCij/view?usp=drive_link" },
    { title: "หัตถการทางการแพทย์ฉุกเฉิน(2) เรื่อง ยา", lecturer: "อ.นฉพ.จันทนา ศรีพราว", description: "Medication Administration",video: "https://www.youtube.com/watch?v=PXtrkAWK25Q", url: "https://drive.google.com/file/d/1soVKz_4t-B4-ZZCu8oIygeB9FegyUUxE/view?usp=drive_link" },
    { title: "อาการวิทยา(2) กระดูก", lecturer: "อ.นพ.กิตติธัส", description: "อาการวิทยาทางกระดูก การปวดของข้อกระดูก",video: "https://youtu.be/0Jj7jkW_wzg?si=N6VpHFphzLfrp-rK", url: "https://drive.google.com/file/d/1RPD1vHyguN6ynav3uz5HrFB8loZ-tCwE/view?usp=drive_link" },
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

    if (searchTerm === "สอบ") {
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
