function displaySection() {
    Array.from(document.getElementsByTagName('section')).forEach(element => element.style.display = "flex");
}

var cloud_switch = true;
function cloud() {
    if (cloud_switch)
        Array.from(document.getElementsByTagName('section')).forEach(element => element.style.display = "none");
    else
        Array.from(document.getElementsByTagName('section')).forEach(element => element.style.display = "flex");
    cloud_switch = !cloud_switch;

}

function navigate(number) {
    window.open("https://www.netflix.com/browse/genre/" + number, "_blank");
}

function navigatePage(page) {
    if (page == 'main')
        window.open("./page_index.html", "_self");
    if (page == 'international')
        window.open("./page_internacional.html", "_self");
    if (page == 'terror')
        window.open("./page_terror.html", "_self");
    if (page == 'accion')
        window.open("./page_accion.html", "_self");
    if (page == 'belica')
        window.open("./page_belica.html", "_self");
    if (page == 'comedia')
        window.open("./page_comedia.html", "_self");
    if (page == 'drama')
        window.open("./page_drama.html", "_self");
    if (page == 'anime')
        window.open("./page_anime.html", "_self");
    if (page == 'aventuras')
        window.open("./page_aventuras.html", "_self");
    if (page == 'scifi')
        window.open("./page_scifi.html", "_self");
}

function navigateIndexPage(page) {
    if (page == 'main')
        window.open("./page_index.html", "_self");
    if (page == 'international')
        window.open("FlickMovies/mainPages/page_internacional.html", "_self");
    if (page == 'terror')
        window.open("FlickMovies/mainPages/page_terror.html", "_self");
    if (page == 'accion')
        window.open("FlickMovies/mainPages/page_accion.html", "_self");
    if (page == 'belica')
        window.open("FlickMovies/mainPages/page_belica.html", "_self");
    if (page == 'comedia')
        window.open("FlickMovies/mainPages/page_comedia.html", "_self");
    if (page == 'drama')
        window.open("FlickMovies/mainPages/page_drama.html", "_self");
    if (page == 'anime')
        window.open("FlickMovies/mainPages/page_anime.html", "_self");
    if (page == 'aventuras')
        window.open("FlickMovies/mainPages/page_aventuras.html", "_self");
    if (page == 'scifi')
        window.open("FlickMovies/mainPages/page_scifi.html", "_self");
}