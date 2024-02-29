// Sample data for local books (replace with your actual data)
const localBooks = [
    { title: "ประวัติศาสตร์", code: "H103-43", shell:"100" ,description: " เป็นการค้นพบ ค้นหา รวบรวม จัดระเบียบและนำเสนอข้อมูลเกี่ยวกับเหตุการณ์ในอดีตประวัติศาสตร์" },
    { title: "กฎหมายการปกครอง", code: "L204-54", shell:"200", description: "กฎหมายปกครอง เป็น กฎหมายมหาชน ที่วางหลักเกณฑ์เกี่ยวกับการจัดระเบียบบริหารของรัฐ" },
    { title: "ปลูกกัญชา", code: "L303-54", shell:"300", description: "สิ่งสำคัญอย่างแรกเมื่ออยาก ปลูกกัญชา คือต้องรู้ก่อนว่า ต้องปลูกเพื่ออะไร เพื่อบริโภคในครัวเรือน หรือเพื่อทางการแพทย์ " },

    // Add more books as needed.
];


// Function to search books
function searchBooks() {
    const searchTerm = document.getElementById("searchInput").value.toLowerCase();

    // Filter books based on the search term
    const searchResults = localBooks.filter(book =>
        book.title.toLowerCase().includes(searchTerm) ||
        book.code.toLowerCase().includes(searchTerm) ||
        book.description.toLowerCase().includes(searchTerm)
    );

    displayResults(searchResults);
}

// Update the showBookDetails function

function showBookDetails(book) {
    const popup = document.createElement("div");
    popup.classList.add("book-popup");
    popup.innerHTML = `
        <h2>${book.title}</h2>
        <p>Code: ${book.code}</p>
        <p>Description: ${book.description}</p>
        <img src="./${book.shell}.png" width="500px" height="500px">
    `;
    
    // Append the popup to the body
    document.body.appendChild(popup);

    // Center the popup on the screen
    const centerX = window.innerWidth / 2 - popup.clientWidth / 2;
    const centerY = window.innerHeight / 2 - popup.clientHeight / 2;

    popup.style.top = `${centerY}px`;
    popup.style.left = `${centerX}px`;

    // Remove the popup when clicking outside of it
    document.addEventListener("click", (event) => {
        if (!popup.contains(event.target)) {
            document.body.removeChild(popup);
        }
    });
}



// Function to display search results
function displayResults(results) {
    const searchContainer = document.getElementById("searchContainer");
    const bookResultsDiv = document.getElementById("bookResults");

    if (results.length === 0) {
        bookResultsDiv.innerHTML = "<p>No results found.</p>";
        return;
    }
    
    //searchContainer.style.position = "fixed";
    searchContainer.style.top = "0";
    searchContainer.style.marginTop = "10%";
    searchContainer.style.left = "0";
    searchContainer.style.width = "100%";
    searchContainer.style.zIndex = "1000"; // Adjust the z-index if needed

    // Clear previous results
    bookResultsDiv.innerHTML = "";   

    results.forEach(book => {
        // Create HTML elements to display book information
        const bookElement = document.createElement("div");
        bookElement.innerHTML = `<h2>${book.title}</h2><p>Code: ${book.code}</p><p>Description: ${book.description}</p>`;

        // Add event listener for holding on the book result
        bookElement.addEventListener("mousedown", (event) => {
            showBookDetails(book);
            event.preventDefault(); // Prevent text selection on mouse hold
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
