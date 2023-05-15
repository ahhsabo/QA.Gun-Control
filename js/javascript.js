//var
    var ledMode = document.getElementsByClassName("led-mode");
    var btnLed = document.getElementsByClassName("btn-led");

 
//
$(document).on("click", ".led-mode", function () {
    alert("hêlo");
});
//btn-left
$(".btn-left img").on("click", function() {
    $( this ).css("filter","brightness(200%)");
});
//btn-right
$(".btn-right img").on("click", function() {
    $( this ).css("filter","brightness(200%)");
});
//btn auto-focus
$("#autofocus-btn").on("click", function() {
    $(this).css("filter","brightness(200%)");
});

//Fire-mode
$("#SNLG").on("click", function(){
    $("#fire-mode__btn").css("rotate","-45deg");
});

$("#CONT").on("click", function(){
    $("#fire-mode__btn").css("rotate","45deg");
});

$("#BRST").on("click", function(){
    $("#fire-mode__btn").css("rotate","0deg");  
});

// $(".on-off-btn").on("click", function(){
//     $(".on-off-btn").css("rotate","90deg");;
// });