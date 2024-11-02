const searchBar = document.querySelector('.search-bar input');
const homePage = document.getElementById('homePage');
const platformPage = document.getElementById('platformPage');
const swipeHandle = document.getElementById('swipeHandle');
const homeButton = document.getElementById('homeButton');
let isInPlatform = false;

function performSearch() {
    const query = document.getElementById("searchQuery").value;
    const engine = document.getElementById("searchEngine").value;

    if (query.trim() !== "") {
        window.location.href = engine + encodeURIComponent(query);
    } else {
        alert("Please enter a search query.");
    }
}

searchBar.addEventListener('focus', () => {
    searchBar.placeholder = '';
});

searchBar.addEventListener('blur', () => {
    searchBar.placeholder = 'Search...';
});

swipeHandle.addEventListener('click', () => {
    if (!isInPlatform) {
        platformPage.style.transform = 'translateY(0)';
        homePage.style.transform = 'translateY(-30%)';
        homeButton.classList.add('visible');
        isInPlatform = true;
    }
});

homeButton.addEventListener('click', () => {
    if (isInPlatform) {
        platformPage.style.transform = 'translateY(100%)';
        homePage.style.transform = 'translateY(0)';
        homeButton.classList.remove('visible');
        isInPlatform = false;
    }
});

let startY = 0;
let currentY = 0;

swipeHandle.addEventListener('touchstart', (e) => {
    startY = e.touches[0].clientY;
    currentY = startY;
});

swipeHandle.addEventListener('touchmove', (e) => {
    currentY = e.touches[0].clientY;
    const diff = startY - currentY;
    
    if (!isInPlatform && diff > 0) {
        const percentage = Math.min(100, (diff / 200) * 100);
        platformPage.style.transform = `translateY(${100 - percentage}%)`;
        homePage.style.transform = `translateY(-${percentage * 0.3}%)`;
    }
});

swipeHandle.addEventListener('touchend', () => {
    const diff = startY - currentY;
    
    if (!isInPlatform && diff > 50) {
        platformPage.style.transform = 'translateY(0)';
        homePage.style.transform = 'translateY(-30%)';
        homeButton.classList.add('visible');
        isInPlatform = true;
    } else if (!isInPlatform) {
        platformPage.style.transform = 'translateY(100%)';
        homePage.style.transform = 'translateY(0)';
    }
});