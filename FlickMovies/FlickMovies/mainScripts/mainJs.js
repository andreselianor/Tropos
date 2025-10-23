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
        window.open("../../FlickMovies.html", "_self");
    if (page == 'international')
        window.open("FlickMovies/mainPages/page_internacional.html", "_self");
}