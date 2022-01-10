
let search = document.getElementById("search")
let button = document.getElementById("search_img")


button.onclick = function () {
    if(search.className == "visually-hidden"){
        search.className = "";}
        else {
            search.className = "visually-hidden"
        }
    }
