/*/ SCRIPT FOR 'GIVE ME THIEFS'                                 /*/
/*/ This script returns a valid number of random thiefs from the
    Radiohead album 'Hail to the thief'.                         /*/

/*/ ■ displayThiefs()                                      ■ Displays a number of tags from the cover album /*/
function displayThiefs() {
    var result_text = document.getElementById("thiefs");
    result_text.innerHTML = "";
    var count = document.getElementById("input_text").value;
    count = parseInt(count);
    for (let i = 0; i < count; i++) {
        let thief = getRandomThief();
        let result = document.createElement("p");
        result.innerHTML = thief;
        result.classList.add("thiefs-element");
        result_text.appendChild(result);
    }
}
/*/ ■ getRandomThief()                                      ■ Returns 1 random thief from the 'tags.js' script /*/
function getRandomThief() {
    let random = Math.floor(Math.random() * (tags.length - 1));
    return tags[random];
}