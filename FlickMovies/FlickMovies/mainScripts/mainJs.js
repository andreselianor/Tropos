function displaySection() {
    Array.from(document.getElementsByTagName('section')).forEach(element => element.style.display = "flex");
}

function navigate(number){
    window.open("https://www.netflix.com/browse/genre/" + number, "_blank");
}