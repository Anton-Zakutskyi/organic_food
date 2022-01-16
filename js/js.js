
let search = document.getElementById("search")
let button = document.getElementById("search_img")


button.onclick = function () {
    if(search.className == "visually-hidden"){
        search.className = "";}
        else {
            search.className = "visually-hidden"
        }
    }

$(document).ready(function(){
    $(".owl-carousel").owlCarousel();
});

$('.owl-carousel').owlCarousel({
    loop:true,
    margin:0,
    dots: true,
    nav:true,
    navText: [ '', ' ' ],

    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})



