var orihuela_switch = true;
var orihuela_ida_switch = true;
var orihuela_vuelta_switch = true;

function displayButtons(city) {
    if (orihuela_switch) {
        let city_display_ida = document.getElementById(`button_${city}_ida`);
        let city_display_vuelta = document.getElementById(`button_${city}_vuelta`);
        city_display_ida.style.display = "flex";
        city_display_vuelta.style.display = "flex";
    }

    orihuela_switch = !orihuela_switch;
}

function displayIda(city) {
    let city_display_ida = document.getElementById(`${city}_ida`);
    if (orihuela_ida_switch) {
        city_display_ida.style.display = "flex";
    }
    else {
        city_display_ida.style.display = "none";
    }

    orihuela_ida_switch = !orihuela_ida_switch;
}

function displayVuelta(city) {
    let city_display_vuelta = document.getElementById(`${city}_vuelta`);
    if (orihuela_vuelta_switch) {
        city_display_vuelta.style.display = "flex";
    }
    else {
        city_display_vuelta.style.display = "none";
    }

    orihuela_vuelta_switch = !orihuela_vuelta_switch;
}