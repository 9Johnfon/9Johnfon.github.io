// Sample data for local books (replace with your actual data)
const localBooks = [
    { title: "ประวัติศาสตร์", code: "H103-43", shell:"100", local:"Shell 100 ตู้ที่ 3 ชั้น 4 ล๊อค 3", description: " เป็นการค้นพบ ค้นหา รวบรวม จัดระเบียบและนำเสนอข้อมูลเกี่ยวกับเหตุการณ์ในอดีตประวัติศาสตร์" },
    { title: "กฎหมายการปกครอง", code: "L204-54", shell:"200", local:"Shell 200 ตู้ที่ 4 ชั้น 5 ล๊อค 4", description: "กฎหมายปกครอง เป็น กฎหมายมหาชน ที่วางหลักเกณฑ์เกี่ยวกับการจัดระเบียบบริหารของรัฐ" },
    { title: "กฎหมายการปกครอง 2", code: "L204-52", shell:"200", local:"Shell 200 ตู้ที่ 4 ชั้น 5 ล๊อค 2", description: "กฎหมายปกครอง 2 เป็น กฎหมายมหาชน ที่วางหลักเกณฑ์เกี่ยวกับการจัดระเบียบบริหารของรัฐ" },
    { title: "ปลูกกัญชา", code: "P303-54", shell:"300", local:"Shell 300 ตู้ที่ 3 ชั้น 5 ล๊อค 4", description: "สิ่งสำคัญอย่างแรกเมื่ออยาก ปลูกกัญชา คือต้องรู้ก่อนว่า ต้องปลูกเพื่ออะไร เพื่อบริโภคในครัวเรือน หรือเพื่อทางการแพทย์ " },
    { title: "ปลูกผม", code: "P303-53", shell:"300", local:"Shell 300 ตู้ที่ 3 ชั้น 5 ล๊อค 3", description: "สิ่งสำคัญอย่างแรกเมื่ออยาก ปลูกผม คือต้องรู้ก่อนว่า ต้องปลูกเพื่ออะไร เพื่อบริโภคในครัวเรือน หรือเพื่อทางการแพทย์ " },
    // Add more books as needed.
];

// Function to search books
function searchBooks() {
    const searchTerm = document.getElementById("searchInput").value.toLowerCase();

    // Filter books based on the search term
    const searchResults = localBooks.filter(book =>
        book.title.toLowerCase().includes(searchTerm) ||
        book.code.toLowerCase().includes(searchTerm) ||
        book.description.toLowerCase().includes(searchTerm) ||
        book.shell.toLowerCase().includes(searchTerm)
    );

    displayResults(searchResults);
}

// Function to show book details
function showBookDetails(book) {
    const popup = document.createElement("div");
    popup.classList.add("book-popup");
    popup.innerHTML = `
        <h2>${book.title}</h2>
        <p>Code: ${book.code}</p>
        <p>Location: ${book.local}</p>
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

    // Function to close the popup
    function closePopup() {
        document.body.removeChild(popup);
        // Remove the event listener after closing the popup
        document.removeEventListener("click", closePopup);
    }

    // Add event listener to close the popup when clicking outside of it
    document.addEventListener("click", (event) => {
        if (!popup.contains(event.target)) {
            closePopup();
        }
    });

    // Prevent propagation of click events from the popup
    popup.addEventListener("click", (event) => {
        event.stopPropagation();
    });
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
        bookElement.innerHTML = `<h2>${book.title}</h2><p>Code: ${book.code}</p><p>Location: ${book.local}</p><p>Description: ${book.description}</p>`;

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
