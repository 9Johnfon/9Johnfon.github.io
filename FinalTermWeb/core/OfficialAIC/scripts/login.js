var pssw = localStorage.getItem("pssw");
var currentPage = window.location.href;
if (pssw == null && !(currentPage.includes("login.html"))) {
        window.location.href = 'login.html';
};
