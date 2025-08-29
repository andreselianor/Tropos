/*/ SCRIPT PARA INDEX /*/
// Se llama a la funcion setup CUANDO EL NAV ESTE CARGADO
document.addEventListener("DOMContentLoaded", setup);

// La funcion 'setup()' crea los elementos de las listas
function setup() {
    // Recoge la seccion de la agenda
    let root_agenda = document.getElementById("agenda");
    // Recoge los elementos del objeto javascript
    for (let element in agenda) {

        // Crea los titulos de cada elemento
        let node = document.createElement("li");
        node.textContent = agenda[element].title;
        root_agenda.appendChild(node);

        // Crea las descripciones de cada elemento
        let node_description = document.createElement("li");
        node_description.textContent = agenda[element].description;
        root_agenda.appendChild(node_description);
        
        // Da formato a la descripcion y añade un switch de encendido
        node_description.classList.add("description");
        let switcher = true;
        node.addEventListener('click', function () {
            if (switcher)
                node_description.style.display = "flex";
            else
                node_description.style.display = "none";
            switcher = !switcher;
        });
    };
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

function setup2() {
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