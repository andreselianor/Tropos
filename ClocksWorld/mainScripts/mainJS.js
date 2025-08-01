/*/ SCRIPT PARA EL WEBSITE 'CLOCKS WORLD' /*/

/*/ ■ Carga completa del arbol de contenidos                            ■ /*/
/*/ ■ Entonces ejecuta la funcion setup                                 ■ /*/
document.addEventListener("DOMContentLoaded", setup);

var UTC;
var GMT;
var UTC_Hour;
var UTC_Minutes;
var desfase;
var cities_db;

/*/ ■ Funcion setup() que carga la informacion horaria                  ■ /*/
function setup() {
    GMT = new Date();
    UTC_Hour = GMT.getHours() - 2;
    UTC_Minutes = GMT.getMinutes();
    desfase = 0;

    /*/ ■ la funcion 'setTime' define los distintos relojes             ■ /*/
    /*/ ■ setTime('ciudad', GMT Hora, GMT Minutos, Desfase de GMT)      ■ /*/
    setTime();

    // El boton 'REFRESCA' la pagina
    document.getElementById("button_reload").addEventListener("click", () => window.location.reload());
}


/*/ ■ Se pintan los distintos relojes                      ■ /*/
function setTime() {
    for (const [city, offset, remark] of cities) {
        let hour = UTC_Hour + offset;
        let minutes = UTC_Minutes;
        if (hour < 10) {
            hour = "0" + hour;
        }
        if (minutes < 10) {
            minutes = "0" + minutes;
        }
        let time = `${hour} : ${minutes}`;
        let clock = document.getElementById(`${city}`);

        let sign;
        if (offset > 0)
            sign = "+";
        else
            sign = "";
        if (remark) {
            document.getElementById(`${city}`).style.backgroundColor = "lightsalmon";
        }
        clock.innerHTML = `<b>${city}</b><br><i class='utc'>UTC ${sign}${offset}</i><br>${time}`;
    };
}



