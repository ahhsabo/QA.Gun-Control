//
//btn-left
var countBTNL=0;
$(".btn-left img").on("click", function() {
    countBTNL++;
    if (countBTNL % 2 == 0){
    $(this).css("filter","brightness(100%)");
    }
    else{
        $(this).css("filter","brightness(200%)");
    }
});
//btn-right
var countBTNR=0;
$(".btn-right img").on("click", function() {
    countBTNR++;
    if (countBTNR % 2 == 0){
    $(this).css("filter","brightness(100%)");
    }
    else{
        $(this).css("filter","brightness(200%)");
    }
});

//btn auto-focus
var countAFOCUS=0;
$("#autofocus-btn").on("click", function() {
    countAFOCUS++;
    if (countAFOCUS % 2 == 0){
    $(this).css("filter","brightness(100%)");
    }
    else{
        $(this).css("filter","brightness(200%)");
    }
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

//LRF
var countLRF=0;
$(".on-off__LRF img").on("click", function(){
    countLRF++;
    if (countLRF % 2 == 0){
        $(this).css("rotate","0deg");
        $("#span-LRF").css("background-color","gray");
    }
    else{
        $(this).css("rotate","180deg");
        $("#span-LRF").css("background-color","#0DFF0B");
    }  
});

//OVER
var countOVER=0;
$(".on-off__OVER img").on("click", function(){
    countOVER++;
    if (countOVER % 2 == 0){
        $(this).css("rotate","0deg");
        $("#span-OVER").css("background-color","gray");
    }
    else{
        $(this).css("rotate","180deg");
        $("#span-OVER").css("background-color","#0DFF0B");
    }  
});

//MOVE
var countMOVE=0;
$(".on-off__MOVE img").on("click", function(){
    countMOVE++;
    if (countMOVE % 2 == 0){
        $(this).css("rotate","0deg");
        $("#span-MOVE").css("background-color","gray");
    }
    else{
        $(this).css("rotate","180deg");
        $("#span-MOVE").css("background-color","#0DFF0B");
    }  
});

//FIRE
var countFIRE=0;
$(".on-off__FIRE img").on("click", function(){
    countFIRE++;
    if (countFIRE % 2 == 0){
        $(this).css("rotate","0deg");
        $("#span-FIRE").css("background-color","gray");
    }
    else{
        $(this).css("rotate","180deg");
        $("#span-FIRE").css("background-color","#FF562F");
    }  
});