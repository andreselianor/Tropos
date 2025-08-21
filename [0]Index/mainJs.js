/*/ SCRIPT PARA INDEX /*/
// Se llama a la funcion setup CUANDO EL NAV ESTE CARGADO
document.addEventListener("DOMContentLoaded", setup);

// La funcion 'setup()' crea los elementos de las listas
function setup() {
    let root_websites = document.getElementById("websites");
    websites.forEach(function (element) {
        let node = document.createElement("li");
        node.textContent = element;
        root_websites.appendChild(node);
    });
    let root_agenda = document.getElementById("agenda");
    agenda.forEach(function (element) {
        let node = document.createElement("li");
        node.textContent = element;
        root_agenda.appendChild(node);
    });
}

// Refresca los elementos del NAV
function displayNav(element) {
    // Oculta todos los elementos del nav
    let allNav = document.querySelectorAll('ul')
    allNav.forEach(nav => nav.style.visibility = "hidden");

    // Visibiliza el elemento del nav que pasa por parametros
    let visibleNav = document.getElementById(element);
    visibleNav.style.visibility = "visible";
}