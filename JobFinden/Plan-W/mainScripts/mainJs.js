window.onload = start;

function start() {
    let date = document.getElementById("current-date");
    date.innerText = getDate();

    setupForm();
}

function getDate() {
    let fecha = new Date();
    let fecha_completa = "" + fecha.getFullYear() + "-" + (fecha.getMonth() + 1) + "-" + fecha.getDate();
    return fecha_completa;
}

function setupForm() {
    document.getElementById('task-form').addEventListener('submit', async function (e) {
        e.preventDefault(); // evita recarga

        const result = {
            fecha: "",
            labora: false,
            infojobs: false,
            clece: false,
            eulen: false,
            adecco: false,
            adeccofundacion: false,
            portalento: false,
            portalentodigital: false,
            cocemfe: false
        }

        let fecha = new Date();
        let fecha_completa = "" + fecha.getFullYear() + "-" + (fecha.getMonth() + 1) + "-" + fecha.getDate();
        result.fecha = fecha_completa;

        let labora = document.getElementById("labora");
        if (labora.checked)
            result.labora = true;

        let infojobs = document.getElementById("infojobs");
        if (infojobs.checked)
            result.infojobs = true;

        let clece = document.getElementById("clece");
        if (clece.checked)
            result.clece = true;

        let eulen = document.getElementById("eulen");
        if (eulen.checked)
            result.eulen = true;

        let portalento = document.getElementById("portalento");
        if (portalento.checked)
            result.portalento = true;

        let portalentodigital = document.getElementById("portalentodigital");
        if (portalentodigital.checked)
            result.portalentodigital = true;

        let adecco = document.getElementById("adecco");
        if (adecco.checked)
            result.adecco = true;

        let adeccofundacion = document.getElementById("adeccofundacion");
        if (adeccofundacion.checked)
            result.adeccofundacion = true;

        let file = JSON.stringify(result, null, 2)

        try {
            const fileHandle = await window.showSaveFilePicker({
                suggestedName: `${fecha_completa}-dailyTasks.txt`,
                types: [{
                    description: 'Archivo de texto',
                    accept: { 'text/plain': ['.txt'] }
                }]
            });

            const writable = await fileHandle.createWritable();
            await writable.write(file);
            await writable.close();

            alert('Archivo guardado correctamente.');
        } catch (err) {
            console.error('Error al guardar el archivo:', err);
        }
    });
}

function navigate(element) {
    if (element == 'labora-button')
        window.open('https://puntlabora.gva.es/puntlabora/', '_blank');
    if (element == 'infojobs-button')
        window.open('https://www.infojobs.net/candidate/candidate-login/candidate-login.xhtml?dgv=7226723571516829252', '_blank');
    if (element == 'clece-button')
        window.open('https://canaldeempleo.es/CLECE/go/CLECE/910702/', '_blank');
    if (element == 'eulen-button')
        window.open('https://eulen.taleo.net/careersection/eul_career_site/jobsearch.ftl?lang=es&alt=1', '_blank');
    if (element == 'adecco-button')
        window.open('https://fundacionadecco.org/', '_blank');
    if (element == 'adeccof-button')
        window.open('https://foiberia.my.site.com/identity/s/login/?ec=302&startURL=%2Fidentity%2Fs%2F', '_blank');
    if (element == 'portalento-button')
        window.open('https://www.portalento.es/AreaPrivada/login.aspx', '_blank');
    if (element == 'portalentod-button')
        window.open('https://portalentodigital.fundaciononce.es/', '_blank');
    if (element == 'cocemfe-button')
        window.open('https://www.cocemfealicante.org/cominet/', '_blank');
    if (element == 'todos-button') {
        window.open('https://puntlabora.gva.es/puntlabora/', '_blank');
        window.open('https://www.infojobs.net/candidate/candidate-login/candidate-login.xhtml?dgv=7226723571516829252', '_blank');
        window.open('https://canaldeempleo.es/CLECE/go/CLECE/910702/', '_blank');
        window.open('https://eulen.taleo.net/careersection/eul_career_site/jobsearch.ftl?lang=es&alt=1', '_blank');
        window.open('https://fundacionadecco.org/', '_blank');
        window.open('https://foiberia.my.site.com/identity/s/login/?ec=302&startURL=%2Fidentity%2Fs%2F', '_blank');
        window.open('https://www.portalento.es/AreaPrivada/login.aspx', '_blank');
        window.open('https://portalentodigital.fundaciononce.es/', '_blank');
        window.open('https://www.cocemfealicante.org/cominet/', '_blank');
    }
}
