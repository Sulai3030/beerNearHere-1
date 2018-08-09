$(document).ready(function(){
    // Add smooth scrolling to all links
    $("#yes21").click(function() {
        $('html, body').animate({
            scrollTop: $("#page2").offset().top
        }, 2000);
    });

    $("#submitYourName").click(function() {
        $('html, body').animate({
            scrollTop: $("#page3").offset().top
        }, 2000);
    });

    $("#nextPage").click(function() {
        $('html, body').animate({
            scrollTop: $("#page4").offset().top
        }, 2000);
    });

    $("#beerPreferences").click(function() {
        $('html, body').animate({
            scrollTop: $("#page5").offset().top
        }, 2000);
    });
});