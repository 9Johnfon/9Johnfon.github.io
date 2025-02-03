// Sample data for local books (replace with your actual data)

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


 // Function to toggle slide menu
function toggleMenu() {
    const menu = document.getElementById('slideMenu');
    menu.classList.toggle('open'); // Toggle the 'open' class to slide the menu in and out
}