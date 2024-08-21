// scripts.js

document.addEventListener('DOMContentLoaded', function() {
    // Add any necessary JavaScript here for interactivity or enhancements
    // Example: smooth scrolling for navigation links
    document.querySelectorAll('nav ul li a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});





document.addEventListener('DOMContentLoaded', function() {
    const audioPlayer = document.getElementById('musicPlayer');
    const sources = audioPlayer.getElementsByTagName('source');
    let currentIndex = 0;

    // ฟังก์ชันเพื่อเล่นเพลงถัดไป
    function playNext() {
        currentIndex = (currentIndex + 1) % sources.length;
        audioPlayer.src = sources[currentIndex].src;
        audioPlayer.load();
        audioPlayer.play();
    }

    // เมื่อเพลงจบ ให้เล่นเพลงถัดไป
    audioPlayer.addEventListener('ended', playNext);

    // เริ่มเล่นเพลงแรกเมื่อโหลดหน้าเว็บ
    audioPlayer.src = sources[currentIndex].src;
    audioPlayer.play().catch(error => {
        console.log("Autoplay was prevented:", error);
    });
});








document.addEventListener('DOMContentLoaded', function() {
    const scrollToTopBtn = document.getElementById('scrollToTopBtn');

    window.addEventListener('scroll', function() {
        if (window.scrollY > 300) {
            scrollToTopBtn.classList.add('show');
        } else {
            scrollToTopBtn.classList.remove('show');
        }
    });

    scrollToTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});








document.addEventListener('DOMContentLoaded', function() {
    const newsItems = document.querySelectorAll('.news-item p');

    newsItems.forEach(item => {
        let maxLength = 120; // Adjust as necessary

        if (item.textContent.length > maxLength) {
            item.textContent = item.textContent.slice(0, maxLength) + '...';
        }
    });
});
