/*/ JOB FINDEN WEBSITE /*/
// CLOUD functions
var labora_switch = true;
var infojobs_switch = true;
var eulen_switch = true;
var clece_switch = true;
var adecco_switch = true;
var adeccof_switch = true;
var portalento_switch = true;
var portalentod_switch = true;
function switchCloud(corporation) {
    // cloud labora
    if (corporation == 'labora') {
        let labora = document.getElementsByClassName("container_buttons_labora")[0];
        if (labora_switch) {
            labora.style.display = "flex";
        }
        else {
            labora.style.display = "none";
        }
        labora_switch = !labora_switch;
    }

    // cloud infojobs
    if (corporation == 'infojobs') {
        let infojobs = document.getElementsByClassName("container_buttons_infojobs")[0];
        if (infojobs_switch) {
            infojobs.style.display = "flex";
        }
        else {
            infojobs.style.display = "none";
        }
        infojobs_switch = !infojobs_switch;
    }

    // cloud eulen
    if (corporation == 'eulen') {
        let eulen = document.getElementsByClassName("container_buttons_eulen")[0];
        if (eulen_switch) {
            eulen.style.display = "flex";
        }
        else {
            eulen.style.display = "none";
        }
        eulen_switch = !eulen_switch;
    }

    // cloud clece
    if (corporation == 'clece') {
        let clece = document.getElementsByClassName("container_buttons_clece")[0];
        if (clece_switch) {
            clece.style.display = "flex";
        }
        else {
            clece.style.display = "none";
        }
        clece_switch = !clece_switch;
    }

    // cloud adecco
    if (corporation == 'adecco') {
        let adecco = document.getElementsByClassName("container_buttons_adecco")[0];
        if (adecco_switch) {
            adecco.style.display = "flex";
        }
        else {
            adecco.style.display = "none";
        }
        adecco_switch = !adecco_switch;
    }

    // cloud adeccof
    if (corporation == 'adeccof') {
        let adeccof = document.getElementsByClassName("container_buttons_adeccof")[0];
        if (adeccof_switch) {
            adeccof.style.display = "flex";
        }
        else {
            adeccof.style.display = "none";
        }
        adeccof_switch = !adeccof_switch;
    }

    // cloud portalento
    if (corporation == 'portalento') {
        let portalento = document.getElementsByClassName("container_buttons_portalento")[0];
        if (portalento_switch) {
            portalento.style.display = "flex";
        }
        else {
            portalento.style.display = "none";
        }
        portalento_switch = !portalento_switch;
    }

    // cloud portalentod
    if (corporation == 'portalentod') {
        let portalentod = document.getElementsByClassName("container_buttons_portalentod")[0];
        if (portalentod_switch) {
            portalentod.style.display = "flex";
        }
        else {
            portalentod.style.display = "none";
        }
        portalentod_switch = !portalentod_switch;
    }
}


// LIST functions
var labora_agenda_switch = true;
var infojobs_agenda_switch = true;
var eulen_agenda_switch = true;
var clece_agenda_switch = true;
var adecco_agenda_switch = true;
var adeccof_agenda_switch = true;
var portalento_agenda_switch = true;
var portalentod_agenda_switch = true;
function displayAgenda(corporation, switcher) {
    // list elements
    // labora
    if (corporation == 'labora') {
        let agenda_list = document.getElementById("labora_list");
        let image = document.getElementById("labora_image");
        if (labora_agenda_switch) {
            agenda_list.innerHTML = "";
            image.style.opacity = "0.5";
            agenda.labora.forEach(function (element) {
                let node = document.createElement("li")
                node.textContent = element;
                agenda_list.appendChild(node);
            });
        }
        else {
            agenda_list.innerHTML = "";
            image.style.opacity = "1.0";
        }
    }

    // infojobs
    if (corporation == 'infojobs') {
        let agenda_list = document.getElementById("infojobs_list");
        let image = document.getElementById("infojobs_image");
        if (infojobs_agenda_switch) {
            agenda_list.innerHTML = "";
            image.style.opacity = "0.5";
            agenda.infojobs.forEach(function (element) {
                let node = document.createElement("li")
                node.textContent = element;
                agenda_list.appendChild(node);
            });
        }
        else {
            agenda_list.innerHTML = "";
            image.style.opacity = "1.0";
        }
    }

    
    // eulen
    if (corporation == 'eulen') {
        let agenda_list = document.getElementById("eulen_list");
        let image = document.getElementById("eulen_image");
        if (eulen_agenda_switch) {
            agenda_list.innerHTML = "";
            image.style.opacity = "0.5";
            agenda.eulen.forEach(function (element) {
                let node = document.createElement("li")
                node.textContent = element;
                agenda_list.appendChild(node);
            });
        }
        else {
            agenda_list.innerHTML = "";
            image.style.opacity = "1.0";
        }
    }


    // clece
    if (corporation == 'clece') {
        let agenda_list = document.getElementById("clece_list");
        let image = document.getElementById("clece_image");
        if (clece_agenda_switch) {
            agenda_list.innerHTML = "";
            image.style.opacity = "0.5";
            agenda.clece.forEach(function (element) {
                let node = document.createElement("li")
                node.textContent = element;
                agenda_list.appendChild(node);
            });
        }
        else {
            agenda_list.innerHTML = "";
            image.style.opacity = "1.0";
        }
    }

    // adecco
    if (corporation == 'adecco') {
        let agenda_list = document.getElementById("adecco_list");
        let image = document.getElementById("adecco_image");
        if (adecco_agenda_switch) {
            agenda_list.innerHTML = "";
            image.style.opacity = "0.5";
            agenda.adecco.forEach(function (element) {
                let node = document.createElement("li")
                node.textContent = element;
                agenda_list.appendChild(node);
            });
        }
        else {
            agenda_list.innerHTML = "";
            image.style.opacity = "1.0";
        }
    }

    // adeccof
    if (corporation == 'adeccof') {
        let agenda_list = document.getElementById("adeccof_list");
        let image = document.getElementById("adeccof_image");
        if (adeccof_agenda_switch) {
            agenda_list.innerHTML = "";
            image.style.opacity = "0.5";
            agenda.adeccof.forEach(function (element) {
                let node = document.createElement("li")
                node.textContent = element;
                agenda_list.appendChild(node);
            });
        }
        else {
            agenda_list.innerHTML = "";
            image.style.opacity = "1.0";
        }
    }

    
    // portalento
    if (corporation == 'portalento') {
        let agenda_list = document.getElementById("portalento_list");
        let image = document.getElementById("portalento_image");
        if (portalento_agenda_switch) {
            agenda_list.innerHTML = "";
            image.style.opacity = "0.5";
            agenda.portalento.forEach(function (element) {
                let node = document.createElement("li")
                node.textContent = element;
                agenda_list.appendChild(node);
            });
        }
        else {
            agenda_list.innerHTML = "";
            image.style.opacity = "1.0";
        }
    }


    // portalentod
    if (corporation == 'portalentod') {
        let agenda_list = document.getElementById("portalentod_list");
        let image = document.getElementById("portalentod_image");
        if (portalentod_agenda_switch) {
            agenda_list.innerHTML = "";
            image.style.opacity = "0.5";
            agenda.portalentod.forEach(function (element) {
                let node = document.createElement("li")
                node.textContent = element;
                agenda_list.appendChild(node);
            });
        }
        else {
            agenda_list.innerHTML = "";
            image.style.opacity = "1.0";
        }
    }

    // switchers
    if (switcher == 'labora_agenda_switch')
        labora_agenda_switch = !labora_agenda_switch;
    if (switcher == 'infojobs_agenda_switch')
        infojobs_agenda_switch = !infojobs_agenda_switch;
    if (switcher == 'eulen_agenda_switch')
        eulen_agenda_switch = !eulen_agenda_switch;
    if (switcher == 'clece_agenda_switch')
        clece_agenda_switch = !clece_agenda_switch;
    if (switcher == 'adecco_agenda_switch')
        adecco_agenda_switch = !adecco_agenda_switch;
    if (switcher == 'adeccof_agenda_switch')
        adeccof_agenda_switch = !adeccof_agenda_switch;
    if (switcher == 'portalento_agenda_switch')
        portalento_agenda_switch = !portalento_agenda_switch;
    if (switcher == 'portalentod_agenda_switch')
        portalentod_agenda_switch = !portalentod_agenda_switch;

}