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

// JavaScript required for hamburger menu.
const mainMenu = document.querySelector('.mainMenu')
const closeMenu = document.querySelector('.closeMenu')
const openMenu = document.querySelector('.openMenu')

openMenu.addEventListener('click', show)
closeMenu.addEventListener('click', close)


function show(){
    mainMenu.style.display = 'flex';
    mainMenu.style.top = '0';
    
}

function close(){
    mainMenu.style.top = '-100%'
}

$(document).ready(function () {
initApp()
initListeners();
show()
close()

});