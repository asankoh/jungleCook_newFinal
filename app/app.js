/* Importing the model.js file. */
import * as MODEL from "./model.js";

/**
 * When a user clicks on a link in the navigation bar, the function will log the id of the link to the
 * console.
 */
function initListeners() {
    $("nav a").click((e) => {
        let btnID = e.currentTarget.id;
        console.log("click" + btnID);
    }); 
} 

/**
 * If the hash tag is empty, change the page to home, otherwise change the page to the hash tag.
 */
function route(){
    let hashTag = window.location.hash;
    let pageID = hashTag.replace("#", "");

    if(pageID == ""){
        MODEL.changePage("home");
    } else{
        MODEL.changePage(pageID)
    }
}


/**
 * When the hash changes, call the route function.
 */
function initApp(){
    $(window).on("hashchange", route);
    route();
}

$(document).ready(function () {
initApp()
initListeners();
});