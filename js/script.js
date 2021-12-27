$(function(){
    $(".close").on("click", function(){
        $("#popup").fadeOut();
    });
    $(".view").on("click", function(){
        $("#popup").fadeIn();
    });
});