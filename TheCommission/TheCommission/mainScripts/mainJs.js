document.addEventListener("DOMContentLoaded", start);
const picture_array = [
    "./TheCommission/mainResources/pictures/2025-08-06.png",
    "./TheCommission/mainResources/pictures/2025-08-10.png",
    "./TheCommission/mainResources/pictures/2025-08-14.png",
    "./TheCommission/mainResources/pictures/2025-08-30.png",
    "./TheCommission/mainResources/pictures/2025-08-31.png",
    "./TheCommission/mainResources/pictures/2025-09-02.png",
    "./TheCommission/mainResources/pictures/2025-09-12.png",
    "./TheCommission/mainResources/pictures/2025-09-17.png"
]

function start() {
    let counter = 0;
    let picture = document.getElementsByClassName("picture")[0];
    let text = document.getElementsByClassName("paragraph")[0];
    let picture_event = document.getElementById("picture_container");
    picture_event.addEventListener('click', function () {
        counter++;
        if (counter < 0)
            counter = 0;
        if (counter >= picture_array.length)
            counter = 0;
        picture.setAttribute('src', picture_array[counter]);
        text.textContent = picture_array[counter].substring(39, 49);
    })
}

var navSwitch = true;
function switchNav() {
    let nav = document.getElementById("nav");
    if (navSwitch)
        nav.style.display = "flex"
    else
        nav.style.display = "none"
    navSwitch = !navSwitch;
}