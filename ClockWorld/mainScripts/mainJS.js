/*/ SCRIPT PARA EL WEBSITE 'CLOCKS WORLD' /*/

/*/ ■ Carga completa del arbol de contenidos                            ■ /*/
/*/ ■ Entonces ejecuta la funcion setup                                 ■ /*/
document.addEventListener("DOMContentLoaded", setup);

var UTC;
var GMT_Hour;
var GMT_Minutes;
var desfase;
var cities_db;


/*/ ■ Funcion setup() que carga la informacion horaria                  ■ /*/
function setup() {
    UTC = new Date();
    GMT_Hour = UTC.getHours() - 2;
    GMT_Minutes = UTC.getMinutes();
    desfase = 0;

    //getDatabase();
    setTime();

    /*/ ■ la funcion 'setTime' define los distintos relojes             ■ /*/
    /*/ ■ setTime('ciudad', GMT Hora, GMT Minutos, Desfase de GMT)      ■ /*/

    // // UK GMT +0
    // desfase = 0;
    // setTime("londres", GMT_Hour, GMT_Minutes, desfase);

    // // MADRID GMT +2
    // desfase = 2;
    // setTime("madrid", GMT_Hour, GMT_Minutes, desfase);

    // // NEW YORK GMT -4
    // desfase = -4;
    // setTime("new york", GMT_Hour, GMT_Minutes, desfase);

    // // BUENOS AIRES GMT -3
    // desfase = -3;
    // setTime("buenos aires", GMT_Hour, GMT_Minutes, desfase);

    // // SEATTLE GMT -7
    // desfase = -7;
    // setTime("seattle", GMT_Hour, GMT_Minutes, desfase);

    // // JOHANNESBURGO GMT +2
    // desfase = 2;
    // setTime("johannesburgo", GMT_Hour, GMT_Minutes, desfase);

    // // MOSCÚ GMT +3
    // desfase = 3;
    // setTime("moscu", GMT_Hour, GMT_Minutes, desfase);

    // // PEKÍN GMT +8
    // desfase = 8;
    // setTime("pekin", GMT_Hour, GMT_Minutes, desfase);

    // // TOKIO GMT +9
    // desfase = 9;
    // setTime("tokio", GMT_Hour, GMT_Minutes, desfase);

    // // SHANGHÁI GMT +8
    // desfase = 8;
    // setTime("shangai", GMT_Hour, GMT_Minutes, desfase);

    // // SINGAPUR GMT +8
    // desfase = 8;
    // setTime("singapur", GMT_Hour, GMT_Minutes, desfase);

    // // TAIWÁN GMT +8
    // desfase = 8;
    // setTime("taiwan", GMT_Hour, GMT_Minutes, desfase);

    // // SIDNEY GMT +10
    // desfase = 10;
    // setTime("sidney", GMT_Hour, GMT_Minutes, desfase);

    // // SANTIAGO DE CHILE GMT -4
    // desfase = -4;
    // setTime("santiago", GMT_Hour, GMT_Minutes, desfase);

    // // DUBÁI GMT +4
    // desfase = 4;
    // setTime("dubai", GMT_Hour, GMT_Minutes, desfase);

    // // NUEVA DELHI GMT +5
    // desfase = 5;
    // setTime("nueva delhi", GMT_Hour, GMT_Minutes, desfase);

    // El boton REFRESCA la pagina
    document.getElementById("button_reload").addEventListener("click", () => window.location.reload());
}

/*/ ■ Se pintan los distintos relojes                      ■ /*/
// function setTime(country, hour, minutes, desfase) {
//     let time = `${hour + desfase} : ${minutes}`;
//     let clock = document.getElementById(`${country}`);

//     let sign;
//     if (desfase > 0)
//         sign = "+";
//     else
//         sign = "";
//     clock.innerHTML = `<b>${country}</b><br><i class='gmt'>GMT ${sign}${desfase}</i><br>${time}`;
// }

// async function getDatabase() {
//     await fetch("mainResources/database/db_cities.js")
//         .then(response => response.text())
//         .then(data => cities_db = data)
// }

function setTime() {
    for (const [city, offset] of cities) {
        let time = `${GMT_Hour + offset} : ${GMT_Minutes}`;
        let clock = document.getElementById(`${city}`);

        let sign;
        if (offset > 0)
            sign = "+";
        else
            sign = "";
        clock.innerHTML = `<b>${city}</b><br><i class='gmt'>GMT ${sign}${offset}</i><br>${time}`;
    };
}



