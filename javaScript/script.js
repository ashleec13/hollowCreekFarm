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








