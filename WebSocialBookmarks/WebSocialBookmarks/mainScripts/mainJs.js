/*/ MAIN SCRIPT FOR SOCIALMEDIABOOKMARKS /*/
window.onload = setup;

// urls
const URL_Facebook = "https://www.facebook.com";
const URL_Instagram = "https://www.instagram.com";
const URL_Flickr = "https://www.flickr.com";
const URL_Pinterest = "https://www.pinterest.com";
const URL_Deviantart = "https://www.deviantart.com";
const URL_Vinted = "https://www.vinted.es";
const URL_Tinder = "https://www.tinder.es";
const URL_Meetic = "https://www.meetic.com";

// variables
var path = URL_Facebook;
var logos_path = "./WebSocialBookmarks/mainResources/logos/";
var logos = ["facebook_logo.png", "instagram_logo.png", "flickr_logo.png", "pinterest_logo.png", "deviantart_logo.png", "vinted_logo.png", "tinder_logo.png","meetic_logo.png"];

// main function
function setup() {
    document.getElementById("facebook").addEventListener('click', function () {
        document.getElementById("image-container").src = logos_path + logos[0];
        path = URL_Facebook;
    });
    document.getElementById("instagram").addEventListener('click', function () {
        document.getElementById("image-container").src = logos_path + logos[1];
        path = URL_Instagram;
    });
    document.getElementById("flickr").addEventListener('click', function () {
        document.getElementById("image-container").src = logos_path + logos[2];
        path = URL_Flickr;
    });

    document.getElementById("pinterest").addEventListener('click', function () {
        document.getElementById("image-container").src = logos_path + logos[3];
        path = URL_Pinterest;
    });

    document.getElementById("deviantart").addEventListener('click', function () {
        document.getElementById("image-container").src = logos_path + logos[4];
        path = URL_Deviantart;
    });

    document.getElementById("vinted").addEventListener('click', function () {
        document.getElementById("image-container").src = logos_path + logos[5];
        path = URL_Vinted;
    });

    document.getElementById("tinder").addEventListener('click', function () {
        document.getElementById("image-container").src = logos_path + logos[6];
        path = URL_Tinder;
    });

    document.getElementById("meetic").addEventListener('click', function () {
        document.getElementById("image-container").src = logos_path + logos[7];
        path = URL_Meetic;
    });

    // main event listener
    document.getElementById("image-container").addEventListener('click', function () { window.open(path, "_blank") });
}