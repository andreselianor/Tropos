/*/ SCRIPT FOR EUROPEAN COMMISSION /*/
const pictures = {
    foreign: [
        "./TheCommission/mainResources/commissioners/foreign/pictures/2025-08-06.png",
        "./TheCommission/mainResources/commissioners/foreign/pictures/2025-08-10.png",
        "./TheCommission/mainResources/commissioners/foreign/pictures/2025-08-14.png",
        "./TheCommission/mainResources/commissioners/foreign/pictures/2025-08-30.png",
        "./TheCommission/mainResources/commissioners/foreign/pictures/2025-08-31.png",
        "./TheCommission/mainResources/commissioners/foreign/pictures/2025-09-02.png",
        "./TheCommission/mainResources/commissioners/foreign/pictures/2025-09-12.png",
        "./TheCommission/mainResources/commissioners/foreign/pictures/2025-09-17.png"
    ],
    mediterranean: [
        "./TheCommission/mainResources/commissioners/mediterranean/pictures/2025-09-23.png"
    ]
}

window.onload = function () {
    display('foreign');
}

function display(commission) {
    let counter = 0;
    let picture = document.getElementsByClassName("picture")[0];
    let text = document.getElementsByClassName("paragraph")[0];
    let picture_event = document.getElementById("picture_container");

    picture.src = pictures[commission][0];
    if (commission == "mediterranean")
        text.textContent = "Dubravka Šuica";
    else if (commission == "foreign")
        text.textContent = pictures[commission][0].substring(61, 71);

    picture_event.addEventListener('click', function () {
        counter++;
        if (counter < 0)
            counter = 0;
        if (counter >= pictures[commission].length)
            counter = 0;
        picture.src = pictures[commission][counter];
        text.textContent = pictures[commission][counter].substring(61, 71);
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