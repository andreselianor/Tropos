
window.onload = start;
function start() {
    let image1 = document.getElementById("covers");
    let madonna = document.getElementsByClassName("Madonna_cover")[0];
    let mozart = document.getElementsByClassName("Mozart_cover")[0];
    let count = 0;
    let boolean1 = true;
    image1.addEventListener('click', function () {
        if (boolean1) {
            mozart.style.left = '0px';
        }
        else {
            mozart.style.left = '350px';
        }
        boolean1 = !boolean1;
    })

    let backbutton = document.getElementById("back");
    backbutton.addEventListener('click', function () {
        count--;
        if (count <= 0)
            count = 0;
        if (count >= 1)
            count = 0;
        madonna.setAttribute('src', "./MashUps/mainResources/covers/" + covers.madonna[count]);
        mozart.setAttribute('src', "./MashUps/mainResources/covers/" + covers.mozart[count]);
    });
    let nextbutton = document.getElementById("next");
    nextbutton.addEventListener('click', function () {
        count++;
        if (count <= 0)
            count = 0;
        if (count >= 3)
            count = 0;
        madonna.setAttribute('src', "./MashUps/mainResources/covers/" + covers.madonna[count]);        
        mozart.setAttribute('src', "./MashUps/mainResources/covers/" + covers.mozart[count]);
    });
}