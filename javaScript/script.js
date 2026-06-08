const sign = document.getElementById("sign");

function updateStoreSign() {
    const now = new Date();
    const hour = now.getHours();

    const isOpen = hour >= 9 && hour < 18;

    if (isOpen) {
        sign.classList.remove("flipped");
    } else {
        sign.classList.add("flipped");
    }
}

updateStoreSign();

// Check every minute
setInterval(updateStoreSign, 60000)





document.addEventListener("DOMContentLoaded", function() {
    // Variables for HTML elements
    const grid = document.getElementById("rosterList");
    const searchInput = document.getElementById("playerSearch");
    const posFilter = document.getElementById("posFilter");


