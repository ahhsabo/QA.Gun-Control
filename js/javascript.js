//Quy trình bao gồm:
//1. Chọn chế độ : STAB / SERV
//2. Bật công tắc MOVE (di chuyển được RJ)
//3. Chọn chế độ bắn: đơn / loạt / liên thanh
//4. Bật công tắc LRF (laze)
//5. Bấm nút trắng trên LJ (đo cự li đến mục tiêu)  
//6. Xoay RJ (di chuyển được trạm vũ trí)
//7. ZOOM (tới gần mục tiêu)
//8. Bấm Auto Focus (tự động lấy nét)
//9. Bật công tắc Fire (cho phép bắn)
//10. Bật công tắc CHRG (nạp đạn)
//11. Bấm khai hỏa 

const _FireProcess = ["modeAct", "MOV", "modeFire", "LRF", "btnWhite", "btnSpin", "ZOOM", "AutoFocus", "btnFire", "CHRG", "fire"];
var INDEX = -1;
var MODE = "F2";

//TRỢ GIÚP
var countF1 = 0;
function myFunctionF1() {
    countF1++;
    console.log(countF1);
    if (countF1 % 2 == 0) {
        $("#manualBtn").css("display", "none");
        $("#space").css("display", "block");
        $(this).css("border", "2px solid black");
    }
    else {
        $("#manualBtn").css("display", "block");
        $("#space").css("display", "none");
        $(this).css("border", "2px solid limegreen");
    }
}

//BTN-LEFT
$(".btn-left img").on("click", function () {
    if (MODE == "F3") {
        INDEX++;
        console.log(INDEX);
        if ($(this).data("name") == _FireProcess[0] && INDEX == 1) {
            INDEX--;
            return;
        }
        if ($(this).data("name") != _FireProcess[0] || INDEX != 0) {
            INDEX--;
            alert("Thao tác sai. Vui lòng thử lại!");
            return;
        }
    }
});

//Stab
var countStab = 0;
$("#stab").on("click", function () {
    countStab++;
    if (countStab % 2 == 0) {
        $(this).css("filter", "brightness(100%)");
    }
    else {
        $(this).css("filter", "brightness(200%)");
        $("#desig").css("filter", "brightness(100%)");
        $("#serv").css("filter", "brightness(100%)");
        countDesig = 0;
        countServ = 0;
    }
});
//Desig
var countDesig = 0;
$("#desig").on("click", function () {
    countDesig++;
    if (countDesig % 2 == 0) {
        $(this).css("filter", "brightness(100%)");
    }
    else {
        $(this).css("filter", "brightness(200%)");
        $("#stab").css("filter", "brightness(100%)");
        $("#serv").css("filter", "brightness(100%)");
        countStab = 0;
        countServ = 0;
    }
});
//Serv
var countServ = 0;
$("#serv").on("click", function () {
    countServ++;
    if (countServ % 2 == 0) {
        $(this).css("filter", "brightness(100%)");
    }
    else {
        $(this).css("filter", "brightness(200%)");
        $("#desig").css("filter", "brightness(100%)");
        $("#stab").css("filter", "brightness(100%)");
        countDesig = 0;
        countStab = 0;
    }
});
//btn-right
//SCTR
var countSctr = 0;
$("#sctr").on("click", function () {
    countSctr++;
    if (countSctr % 2 == 0) {
        $(this).css("filter", "brightness(100%)");
    }
    else {
        $(this).css("filter", "brightness(200%)");
    }
});
//Sinc
var countSinc = 0;
$("#sinc").on("click", function () {
    countSinc++;
    if (countSinc % 2 == 0) {
        $(this).css("filter", "brightness(100%)");
    }
    else {
        $(this).css("filter", "brightness(200%)");
    }
});
//Aimtrgt
var countAimtrgt = 0;
$("#aimtrgt").on("click", function () {
    countAimtrgt++;
    if (countAimtrgt % 2 == 0) {
        $(this).css("filter", "brightness(100%)");
    }
    else {
        $(this).css("filter", "brightness(200%)");
    }
});
//btn auto-focus
var count__AutoFocus = 0;
$("#autofocus-btn").on("click", function () {
    if (MODE == "F3") {
        INDEX++;
        console.log(INDEX);
        if ($(this).data("name") != _FireProcess[7] || INDEX != 7) {
            INDEX--;
            alert("Thao tác sai. Vui lòng thử lại!");
            return;
        }
    }

    count__AutoFocus++;
    if (count__AutoFocus % 2 == 0) {
        $(this).css("filter", "brightness(100%)");
    }
    else {
        $(this).css("filter", "brightness(200%)");
    }
});


//Fire-mode
$("#center-btn h5").on("click", function () {
    if (MODE == "F3") {
        INDEX++;
        console.log(INDEX);

        if ($(this).data("name") == _FireProcess[2] && INDEX ==3) {
            INDEX--;
            return;
        }    
        if ($(this).data("name") != _FireProcess[2] || INDEX != 2) {
            INDEX--;
            alert("Thao tác sai. Vui lòng thử lại!");
            return;
        }
    }

});
$("#SNLG").on("click", function () {
    $("#fire-mode__btn").css("rotate", "-45deg");
});

$("#CONT").on("click", function () {
    $("#fire-mode__btn").css("rotate", "45deg");
});

$("#BRST").on("click", function () {
    $("#fire-mode__btn").css("rotate", "0deg");
});




//LRF
var count__LRF = 0;
$(".on-off__LRF img").on("click", function () {
    if (MODE == "F3") {
        INDEX++;
        console.log(INDEX);
        if ($(this).data("name") != _FireProcess[3] || INDEX != 3) {
            INDEX--;
            alert("Thao tác sai. Vui lòng thử lại!");
            return;
        }
    }           

    count__LRF++;
    if (count__LRF % 2 == 0) {
        $(this).css("rotate", "0deg");
        $("#span-LRF").css("background-color", "gray");
        $(".on-off__btn").removeClass("active");
    }
    else {
        $(this).css("rotate", "180deg");
        $("#span-LRF").css("background-color", "#0DFF0B");
        $(".on-off__btn").addClass("active");
    }
});




//OVER
var countOVER = 0;
$(".on-off__OVER img").on("click", function () {
    countOVER++;
    if (countOVER % 2 == 0) {
        $(this).css("rotate", "0deg");
        $("#span-OVER").css("background-color", "gray");
        $(".on-off__btn").removeClass("active");
    }
    else {
        $(this).css("rotate", "180deg");
        $("#span-OVER").css("background-color", "#0DFF0B");
        $(".on-off__btn").addClass("active");
    }
});

//MOVE
var countMOVE = 0;
$(".on-off__MOVE img").on("click", function () {
    if (MODE == "F3") {
       
        INDEX++;
        console.log(INDEX);
        if ($(this).data("name") != _FireProcess[1] || INDEX != 1) {
            INDEX--;

            alert("Thao tác sai. Vui lòng thử lại!");
            return;
        }
    }

    countMOVE++;
    if (countMOVE % 2 == 0) {
        $(this).css("rotate", "0deg");
        $("#span-MOVE").css("background-color", "gray");
        $(".on-off__btn").removeClass("active");
    }
    else {
        $(this).css("rotate", "180deg");
        $("#span-MOVE").css("background-color", "#0DFF0B");
        $(".on-off__btn").addClass("active");
    }
});

//FIRE btnFire
var count__btnFire = 0;
$(".on-off__FIRE img").on("click", function () {
    if (MODE == "F3") {
        INDEX++;
        console.log(INDEX);
        if ($(this).data("name") != _FireProcess[8] || INDEX != 8) {
            INDEX--;
            alert("Thao tác sai. Vui lòng thử lại!");
            return;
        }
    }

    count__btnFire++;
    if (count__btnFire % 2 == 0) {
        $(this).css("rotate", "0deg");
        $("#span-FIRE").css("background-color", "gray");
        $(".on-off__btn").removeClass("active");
    }
    else {
        $(this).css("rotate", "180deg");
        $("#span-FIRE").css("background-color", "#FF562F");
        $(".on-off__btn").addClass("active");
    }
});

//CHRG
var countCHRG = 0;
$(".on-off__CHRG img").on("click", function () {
    if (MODE == "F3") {
        INDEX++;
        console.log(INDEX);
        if ($(this).data("name") != _FireProcess[9] || INDEX != 9) {
            INDEX--;
            alert("Thao tác sai. Vui lòng thử lại!");
            return;
        }
    }

    countCHRG++;
    if (countCHRG % 2 == 0) {
        $(this).css("rotate", "0deg");
    }
    else {
        $(this).css("rotate", "180deg");
    }
});


//FOC   
$("#plusFOC span").on("click", function () {
    $("#plusFOC span").css("filter", "brightness(150%)");
    setTimeout(function () {
        $("#plusFOC span").css("filter", "brightness(100%)");
    }, 200);
});
$("#minusFOC span").on("click", function () {
    $("#minusFOC span").css("filter", "brightness(150%)");
    setTimeout(function () {
        $("#minusFOC span").css("filter", "brightness(100%)");
    }, 200);
});

//CCD&ID 
var countplusCCD = 0;
$("#plusCCD span").on("click", function () {
    countplusCCD++;
    if (countplusCCD % 2 == 0) {
        $("#plusCCD span").css("filter", "brightness(100%)");

    }
    else {
        $("#plusCCD span").css("filter", "brightness(150%)");
        $("#minusCCD span").css("filter", "brightness(100%)");
        countminusCCD = 0;
    }

});
var countminusCCD = 0;
$("#minusCCD span").on("click", function () {
    countminusCCD++;
    if (countminusCCD % 2 == 0) {
        $("#minusCCD span").css("filter", "brightness(100%)");

    }
    else {
        $("#minusCCD span").css("filter", "brightness(150%)");
        $("#plusCCD span").css("filter", "brightness(100%)");
        countplusCCD = 0;
    }

});

//ZOOM  
$(".span-btn").on("click", function () {
    if (MODE == "F3") {
        INDEX++;
        console.log(INDEX);
        if ($(this).data("name") == _FireProcess[6] && INDEX == 7) {
            INDEX--;
            return;
        }

        if ($(this).data("name") != _FireProcess[6] || INDEX != 6) {
            INDEX--;
            alert("Thao tác sai. Vui lòng thử lại!");
            return;
        }
    }

});


$("#plusZOOM span").on("click", function () {
    $("#plusZOOM span").css("filter", "brightness(150%)");
    setTimeout(function () {
        $("#plusZOOM span").css("filter", "brightness(100%)");
    }, 200);
});
$("#minusZOOM span").on("click", function () {
    $("#minusZOOM span").css("filter", "brightness(150%)");
    setTimeout(function () {
        $("#minusZOOM span").css("filter", "brightness(100%)");
    }, 200);
});

//LEDTEST
var countLEDTEST = 0;
$(".on-off__LEDTEST img").on("click", function () {
    countLEDTEST++;
    if (countLEDTEST % 2 == 0) {
        $(this).css("rotate", "0deg");
    }
    else {
        $(this).css("rotate", "180deg");
    }
});

// RIGHT JOYSTICK
//click pluss/minus
$(".btn-RJ").on("click", function () {
    if (MODE == "F3") {
        INDEX++;
        console.log(INDEX);
        if ($(this).data("name") == _FireProcess[5] && INDEX == 6) {
            INDEX--;
            return;
        }

        if ($(this).data("name") != _FireProcess[5] || INDEX != 5) {
            INDEX--;
            alert("Thao tác sai. Vui lòng thử lại!");
            return;
        }
    }
});

//minus
$("#btnRJ__l").on("click", function () {
    $("#btnRJ__l").css("filter", "brightness(0.6)");
    setTimeout(function () {
        $("#btnRJ__l").css("filter", "brightness(0.15)");
    }, 200);
});

var current_rotation = 0;
document.getElementById("btnRJ__l").addEventListener('click', function () {
    current_rotation -= 10;
    document.querySelector(".rotate").style.transform = 'rotate(' + current_rotation + 'deg)';
});

//plus
$("#btnRJ__r").on("click", function () {
    $("#btnRJ__r").css("filter", "brightness(0.6)");
    setTimeout(function () {
        $("#btnRJ__r").css("filter", "brightness(0.15)");
    }, 200);
});

document.getElementById("btnRJ__r").addEventListener('click', function () {
    current_rotation += 10;
    document.querySelector(".rotate").style.transform = 'rotate(' + current_rotation + 'deg)';
});

//ButtonWhite
$("#btnWhite").on("click", function () {
    if (MODE == "F3") {
        INDEX++;
        console.log(INDEX);
        if ($(this).data("name") == _FireProcess[4] && INDEX == 5) {
            INDEX--;
            return;
        }

        if ($(this).data("name") != _FireProcess[4] || INDEX != 4) {
            INDEX--;
            alert("Thao tác sai. Vui lòng thử lại!");
            return;
        }

    }

    $(this).css("margin-top", "-19px");
    setTimeout(function () {
        $("#btnWhite").css("margin-top", "-23px");
    }, 200);
});

//Khai hoả
$("#btnFire").on("click", function () {
    if (MODE == "F3") {
        INDEX++;
        if ($(this).data("name") == _FireProcess[10] && INDEX == 11) {
            INDEX--;
            return;
        }
        if ($(this).data("name") != _FireProcess[10] || INDEX != 10) {
           INDEX--;
        }  
    }

    $(this).css("margin-top", "26px");
    $(this).css("margin-left", "175px");
    setTimeout(function () {
        $("#btnFire").css("margin-top", "22px");
        $("#btnFire").css("margin-left", "177px");
    }, 200);
});

$(".modeBtn").on('click', 'input[type="checkbox"]', function () {
    $('input[type="checkbox"]').not(this).prop('checked', false);
});

var countF3 = 0; 
function myFunctionF3() {
    countF3++;
    if(countF3 % 2 == 0){
        MODE = "F2";
    }
    else{
        MODE = "F3";
    } 
    console.log(MODE);
   if($( ".on-off__btn" ).hasClass( "active" )){
    MODE ="F2";
    alert("Vui lòng tắt hết nút bấm trước khi bắt đầu");
    countF3 = 0;
}
}


function myFunctionF2() {
    MODE = "F2";
    console.log(MODE);
    countF3 = 0;
}