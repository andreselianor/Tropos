
let currentColumn = 0;
const totalColumns = 4;

let startX = 0;
let isDown = false;
var slider;

window.onload = function () {
    slider = document.querySelector('#slider');


    // --- MOUSE ---
    slider.addEventListener('mousedown', (e) => {
        isDown = true;
        startX = e.clientX;
    });

    slider.addEventListener('mouseup', (e) => {
        if (!isDown) return;
        isDown = false;
        handleSwipe(e.clientX);
    });

    // --- TOUCH ---
    slider.addEventListener('touchstart', (e) => {
        isDown = true;
        startX = e.touches[0].clientX;
    });

    slider.addEventListener('touchend', (e) => {
        if (!isDown) return;
        isDown = false;
        const endX = e.changedTouches[0].clientX;
        handleSwipe(endX);
    });
}

// --- FUNCIÓN COMÚN ---
function handleSwipe(endX) {
    const diff = endX - startX;

    if (diff < -50 && currentColumn < totalColumns - 1) {
        currentColumn++;
    } else if (diff > 50 && currentColumn > 0) {
        currentColumn--;
    }

    slider.style.transform = `translateX(-${currentColumn * 300}px)`;
    slider.style.transition = 'transform 0.3s ease';
}