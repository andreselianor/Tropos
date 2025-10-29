/*/ SCRIPT PARA INDEX /*/
// Se llama a la funcion setup CUANDO EL NAV ESTE CARGADO
document.addEventListener("DOMContentLoaded", setup);
document.addEventListener("DOMContentLoaded", setupProjects);

// La funcion 'setup()' crea los elementos de las listas
function setup() {
    // Recoge la seccion de la agenda
    let root_agenda = document.getElementById("agenda");
    // Recoge los elementos del objeto javascript
    for (let element in agenda) {

        // Crea los titulos de cada elemento
        let node = document.createElement("li");
        node.textContent = agenda[element].title;
        if (agenda[element].weight == "bold")
            node.classList.add("bold");
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

// La funcion 'setup()' crea los elementos de las listas
function setupProjects() {
    // Recoge la seccion de la agenda
    let root_agenda = document.getElementById("proyectos");
    // Recoge los elementos del objeto javascript
    for (let element in projects) {

        // Crea los titulos de cada elemento
        let node = document.createElement("li");
        node.textContent = projects[element].title;
        if (projects[element].weight == "bold")
            node.classList.add("bold");
        if (projects[element].decoration == "strike")
            node.classList.add("strike");
        root_agenda.appendChild(node);

        // Crea las descripciones de cada elemento
        let node_description = document.createElement("li");
        node_description.textContent = projects[element].description;
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
    let agendaElements = document.getElementById("content_agenda");
    let projectsElements = document.getElementById("content_proyectos");
    let websitesElements = document.getElementById("content_websites");

    agendaElements.style.display = "none";
    projectsElements.style.display = "none";
    websitesElements.style.display = "none";

    // Visibiliza el elemento del nav que pasa por parametros
    let visibleContent = document.getElementById(element);
    visibleContent.style.display = "inline-flex";
}
