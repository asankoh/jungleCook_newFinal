/**
 * When the user clicks on a link, the function will load the page with the same name as the link's ID.
 * @param pageID - The ID of the page you want to load.
 */
 export function changePage(pageID, callback){
    if(pageID == "" || pageID == "home") {
        $.get(`pages/home.html`, function(data) {
            $("#app").html(data) 
        })
} else if (pageID == "login") { //account login page
    $.get(`pages/login.html`, function(data) {
        $("#app").html(data) 
        callback()
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
 
} 
}