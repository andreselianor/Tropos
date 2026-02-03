var orihuela_switch = true;
var orihuela_ida_switch = true;
var orihuela_vuelta_switch = true;

var santapola_switch = true;
var santapola_ida_switch = true;
var santapola_vuelta_switch = true;

var torrevieja_switch = true;
var torrevieja_ida_switch = true;
var torrevieja_vuelta_switch = true;

function displayButtons(city) {
    let city_display_ida = document.getElementById(`button_${city}_ida`);
    let city_display_vuelta = document.getElementById(`button_${city}_vuelta`);
    let city_ida = document.getElementById(`${city}_ida`);
    let city_vuelta = document.getElementById(`${city}_vuelta`);
    if (city == 'orihuela') {
        if (orihuela_switch) {
            city_display_ida.style.display = "flex";
            city_display_vuelta.style.display = "flex";
        }
        else {
            console.log(city_ida)
            city_display_ida.style.display = "none";
            city_display_vuelta.style.display = "none";
            city_ida.style.display = "none";
            city_vuelta.style.display = "none";
        }
        orihuela_switch = !orihuela_switch;
    }
    if (city == 'santapola') {
        if (santapola_switch) {
            city_display_ida.style.display = "flex";
            city_display_vuelta.style.display = "flex";
        }
        else {
            city_display_ida.style.display = "none";
            city_display_vuelta.style.display = "none";
            city_ida.style.display = "none";
            city_vuelta.style.display = "none";
        }
        santapola_switch = !santapola_switch;
    }
    if (city == 'torrevieja') {
        if (torrevieja_switch) {
            city_display_ida.style.display = "flex";
            city_display_vuelta.style.display = "flex";
        }
        else {
            city_display_ida.style.display = "none";
            city_display_vuelta.style.display = "none";
            city_ida.style.display = "none";
            city_vuelta.style.display = "none";
        }
        torrevieja_switch = !torrevieja_switch;
    }
}

function displayIda(city) {
    let city_display_ida = document.getElementById(`${city}_ida`);
    if (city == 'orihuela') {
        if (orihuela_ida_switch) {
            city_display_ida.style.display = "flex";
        }
        else {
            city_display_ida.style.display = "none";
        }
        orihuela_ida_switch = !orihuela_ida_switch;
    }
    if (city == 'santapola') {
        if (santapola_ida_switch) {
            city_display_ida.style.display = "flex";
        }
        else {
            city_display_ida.style.display = "none";
        }
        santapola_ida_switch = !santapola_ida_switch;
    }
    if (city == 'torrevieja') {
        if (torrevieja_ida_switch) {
            city_display_ida.style.display = "flex";
        }
        else {
            city_display_ida.style.display = "none";
        }
        torrevieja_ida_switch = !torrevieja_ida_switch;
    }
}

function displayVuelta(city) {
    let city_display_vuelta = document.getElementById(`${city}_vuelta`);
    if (city == 'orihuela') {
        if (orihuela_vuelta_switch) {
            city_display_vuelta.style.display = "flex";
        }
        else {
            city_display_vuelta.style.display = "none";
        }
        orihuela_vuelta_switch = !orihuela_vuelta_switch;
    }
    if (city == 'santapola') {
        if (santapola_vuelta_switch) {
            city_display_vuelta.style.display = "flex";
        }
        else {
            city_display_vuelta.style.display = "none";
        }
        santapola_vuelta_switch = !santapola_vuelta_switch;
    }
    if (city == 'torrevieja') {
        if (torrevieja_vuelta_switch) {
            city_display_vuelta.style.display = "flex";
        }
        else {
            city_display_vuelta.style.display = "none";
        }
        torrevieja_vuelta_switch = !torreviejaa_vuelta_switch;
    }
}
