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
    let hashtagLink = window.location.hash //get page from hashtag in url 
    let pageID = hashtagLink.replace("#", "")

    if(pageID == ""){
        MODEL.changePage("home");
    } else if (pageID == "login"){
        MODEL.changePage(pageID, logInListener)
    } else if (pageID == "createrecipe"){
        MODEL.changePage(pageID)
    }else if (pageID == "recipes"){
        MODEL.changePage(pageID)
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

//login 
function logInListener() {
    $("#logBtn").on("click", function(e) {
        //store values
        let logem = $("#login_em").val()
        let logpw = $("#login_pw").val()
        
        if(logem == "") {
            Swal.fire({
                icon: 'error',
                title: 'Missing Content Error',
                text: 'Please Enter Email & Password',
              })
        } else if(logpw == "") {
            Swal.fire({
                icon: 'error',
                title: 'Missing Content Error',
                text: 'Please Enter Password',
              })
        } else if (logem && logpw != ""){
            $("#login_em").val("")
            $("#login_pw").val("")

        $("#login_nav").html('Logout')
  
        }
    })
}


$(document).ready(function () {
initApp()
initListeners();
show()
close()
logInListener()

});