/* Importing the model.js file. */
import * as MODEL from "./model.js";

/**
 * When a user clicks on a link in the navigation bar, the function will log the id of the link to the
 * console.
 */

var ingredCnt = 3;
var stepCnt = 3;

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
        MODEL.changePage(pageID, logInListener, signupListener, logOutListener, close, show)
    } else if (pageID == "createrecipe"){
        MODEL.changePage(pageID, addIngredListener, )
    }else if (pageID == "recipes"){
        MODEL.changePage(pageID)
    }else if (pageID == "yourrecipe"){
    MODEL.changePage(pageID, alertListener, addIngredListener)
    }else{
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

            MODEL.setLoginStatus(2)

        $(".mainMenu").html(`<li><a href="#home">Home</a></li>
        <li><a href="#recipes">Browse</a></li>
        <li><a href="#createrecipe">Create Recipe</a></li>
        <li><a href="#yourrecipe">Your Recipes</a></li>
        <li><a href="#login"><button  onclick="logIn" id="login_nav">Logout</button></a></li>
        <div class="closeMenu"><i class="fa-sharp fa-solid fa-xmark"></i></div>
        `)
        }
    })
}

function logOutListener() {
    $("#login_nav").on("click", () => {
        MODEL.setLoginStatus(1)
        $(".mainMenu").html(`<li><a href="#home">Home</a></li>
        <li><a href="#recipes">Browse</a></li>
        <li><a href="#createrecipe">Create Recipe</a></li>
        <li><a href="#login"><button  onclick="logIn" id="login_nav">Login</button></a></li>`)
        

    })
}


function signupListener(){
    $("#signupBtn").on("click", (e) =>{
        let fn = $("#fName").val()
        let ln = $("#lName").val()
        let em = $("#email").val()
        let pw = $("#password").val()

        if(fn == ""){
            Swal.fire({
                icon: 'error',
                title: 'Missing Content Error',
                text: 'Please Enter First Name',
              })
        } else if (ln == ""){
            Swal.fire({
                icon: 'error',
                title: 'Missing Content Error',
                text: 'Please Enter Last Name',
              })
        } else if (em == ""){
            Swal.fire({
                icon: 'error',
                title: 'Missing Content Error',
                text: 'Please Enter Email ',
              })
        } else if (pw == ""){
            Swal.fire({
                icon: 'error',
                title: 'Missing Content Error',
                text: 'Please Enter Password',
              })
        } else{
            Swal.fire(
                'Good job!',
                'Thanks for Signing Up!',
                'success'
              )

              MODEL.setLoginStatus(2)


            $("#fName").val("") 
            $("#lName").val("") 
            $("#email").val("") 
            $("#password").val("") 
        
        }

        
    })

    
}

function alertListener (){
if (MODEL.loginStatus == 1){
    Swal.fire({
        icon: 'error',
        title: 'Access Limit Error',
        text: 'Please Login to access page',
      }).then(function() {
        window.location.href = '#login';
    });
}
}

function addIngredListener(){
$(".addBtn").on("click", (e) => {
    $(".formHolder .addIngredients").append(`<input type="text" placeholder = "Ingredient #${ingredCnt + 1}"id="ingred${ingredCnt}">`)
    ingredCnt++;
})

$(".addStepBtn").on("click", (e)=>{
    $(".formHolder .addInstruction").append(`<input type="text" placeholder = "Instructions   #${stepCnt + 1}"id="step${stepCnt}">`)
    stepCnt++;
})

$(".createRecipeBtn").on("click", (e) =>{
    e.preventDefault()
   
    let recipeObj = {
        name: "",
        image: "",
        description: "",
        time: "",
        servings: "",
        steps: [],
        ingredients: [],
    }

    recipeObj.name = $("#recipe_name").val()
    recipeObj.description = $("#recipe_desc").val()
    recipeObj.time = $("#recipe_time").val()
    recipeObj.servings = $("#recipe_size").val()

    MODEL.addRecipe(recipeObj)
    Swal.fire({
        icon: 'Success',
        title: 'Recipe Added',
        text: 'Congrats, you created a new recipe!',
      }).then(function() {
        window.location.hash = 'yourrecipe';
    }); 


})

}



$(document).ready(function () {
initApp()
initListeners();
show()
close()
});