// SCRIPT PARA LA WEBSITE 'LAZY TRADUCTOR'

// Variables de aplicacion
var main_window;
var list;
var list_element;

/*/ ■ Llamamos a la funcion display() cuando se ha cargado por completo el DOM      ■ /*/
document.addEventListener("DOMContentLoaded", function () {
    list = document.getElementById("words-list");
    for (let element in vocabulary) {
        list_element = document.createElement("li");
        list_element.innerText = element;
        list.appendChild(list_element);
        list_element.addEventListener('click', () => display(element));
    }
});

/*/ ■ La funcion display() pinta los elementos de la mainwindow                     ■ /*/
function display(element) {
    main_window = document.getElementById("traduction-window")
    main_window.innerHTML =
    `
    <p class="titles">aleman:</p><p class="element-word">${vocabulary[element].word}</p>
    <p class="titles">traduccion:</p><p class="element-traduction">${vocabulary[element].traduction}</p>
    <p class="titles">comentarios:</p><p class="element-comment">${vocabulary[element].comment}</p>
    `
}