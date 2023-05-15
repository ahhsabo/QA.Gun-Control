//
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
var count=0;
$(".on-off__btn img").on("click", function(){
    count++;
    console.log(count);
    if (count % 2 == 0){
    $(this).css("rotate","180deg");
    $("#span-LRF").css("background-color","#0DFF0B");
    }
    else{
        $(this).css("rotate","0deg");
        $("#span-LRF").css("background-color","gray");
    }

});

