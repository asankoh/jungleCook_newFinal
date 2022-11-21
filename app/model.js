/**
 * When the user clicks on a link, the function will load the page with the same name as the link's ID.
 * @param pageID - The ID of the page you want to load.
 */
 export function changePage(pageID){
    $.get(`pages/${pageID}.html`, function (data){
        console.log(data)
        $("#app").html(data);
    });
}