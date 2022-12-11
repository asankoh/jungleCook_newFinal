/**
 * When the user clicks on a link, the function will load the page with the same name as the link's ID.
 * @param pageID - The ID of the page you want to load.
 */
 export function changePage(pageID, callback, callback2){
    if(pageID == "" || pageID == "home") {
        $.get(`pages/home.html`, function(data) {
            $("#app").html(data) 
        })
} else if (pageID == "login") { //account login page
    $.get(`pages/login.html`, function(data) {
        $("#app").html(data) 
        callback()
        callback2()
    })  

} else if (pageID == "recipes") { //account login page
    $.get(`pages/recipes.html`, function(data) {
        $("#app").html(data) 
        callback()
    })  

} else if (pageID == "createrecipe") { //account login page
    $.get(`pages/createRecipe.html`, function(data) {
        $("#app").html(data) 
        callback()
    })  
 
}else if (pageID == "yourrecipe") { //account login page
    $.get(`pages/yourrecipeburger.html`, function(data) {
        $("#app").html(data) 
        callback()
    })   

}
}

export var loginStatus = 1

// the purpose of this function is to let the user know whether if they are logged in or not. if status = 1 then they aren't logged in. if status = 2 then they are logged in 
export function setLoginStatus(status) {
    loginStatus = status
}