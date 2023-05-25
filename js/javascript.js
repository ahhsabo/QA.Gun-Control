//Quy trình bao gồm:
//1. Chọn chế độ : STAB / SERV / DESIGN
//2. Bật công tắc MOVE (di chuyển được RJ)
//3. Chọn chế độ bắn: đơn / loạt / liên thanh
//4. Bật công tắc LRF (laze)
//5. Bấm nút trắng trên cần trái (đo cự li đến mục tiêu)  
//6. Xoay núm xoay trên cần phải (di chuyển được trạm vũ trí)
//7. ZOOM (tới gần mục tiêu)
//8. Bấm Auto Focus (tự động lấy nét)
//9. Bật công tắc Fire (cho phép bắn)
//10. Bật công tắc CHRG (nạp đạn)
//11. Bấm khai hỏa 

const _FireProcess = ["modeAct", "MOV", "modeFire", "LRF", "btnWhite", "ZOOM", "AutoFocus", "btnFire", "CHRG",];
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
        if ($(this).data("name") != _FireProcess[6] || INDEX != 6) {
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

        if ($(this).data("name") == _FireProcess[2] && INDEX == 3) {
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
        if ($(this).data("name") != _FireProcess[7] || INDEX != 7) {
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
        if ($(this).data("name") != _FireProcess[8] || INDEX != 8) {
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
$("#btnFirered").on("click", function () {
    $(this).css("margin-top", "26px");
    $(this).css("margin-left", "175px");
    setTimeout(function () {
        $("#btnFirered").css("margin-top", "22px");
        $("#btnFirered").css("margin-left", "177px");
    }, 200);

});

$(".modeBtn").on('click', 'input[type="radio"]', function () {
    $('input[type="radio"]').not(this).prop('checked', false);
});

var countF3 = 0;
function myFunctionF3() {
    countF3++;
    if (countF3 % 2 == 0) {
        MODE = "F2";
        $('#F3').css("background-color", "white");
        $('#F3').css("border", "2px solid black");
        $('#F2').css("background-color", "#14da1e");
        $('#F2').css("border", "3px solid #478bfb");
    }
    else {
        MODE = "F3";
        $('#F2').css("background-color", "white");
        $('#F2').css("border", "2px solid black");
        $('#F3').css("background-color", "#14da1e");
        $('#F3').css("border", "3px solid #478bfb");
    }
    console.log(MODE);
    if ($(".on-off__btn").hasClass("active")) {
        MODE = "F2";
        alert("Vui lòng tắt hết nút bấm trước khi bắt đầu");
        $('#F3').css("background-color", "white");
        $('#F3').css("border", "2px solid black");
        $('#F2').css("background-color", "#14da1e");
        $('#F2').css("border", "3px solid #478bfb");
        countF3 = 0;
    }
}


function myFunctionF2() {
    MODE = "F2";
    console.log(MODE);
    countF3 = 0;
    $('#F3').css("background-color", "white");
    $('#F3').css("border", "2px solid black");
    $('#F2').css("background-color", "#14da1e");
    $('#F2').css("border", "3px solid #478bfb");
}

document.addEventListener('keydown', function (event) {
    if (event.code == 'KeyA') {
        $("#left-LJ").css("background", "radial-gradient(black, transparent)");
        setTimeout(function () {
            $("#left-LJ").css("background", "white");
        }, 200);
    }
    if (event.code == 'KeyS') {
        $("#down-LJ").css("background", "radial-gradient(black, transparent)");
        setTimeout(function () {
            $("#down-LJ").css("background", "white");
        }, 200);
    }
    if (event.code == 'KeyD') {
        $("#right-LJ").css("background", "radial-gradient(black, transparent)");
        setTimeout(function () {
            $("#right-LJ").css("background", "white");
        }, 200);
    }
    if (event.code == 'KeyW') {
        $("#up-LJ").css("background", "radial-gradient(black, transparent)");
        setTimeout(function () {
            $("#up-LJ").css("background", "white");
        }, 200);
    }

    if (event.code == 'KeyF') {
        $("#btnFirered").css("margin-top", "26px");
        $("#btnFirered").css("margin-left", "175px");
        setTimeout(function () {
            $("#btnFirered").css("margin-top", "22px");
            $("#btnFirered").css("margin-left", "177px");
        }, 200);
    }

    if (event.code == 'KeyL') {
        if (MODE == "F3") {
            INDEX++;
            console.log(INDEX);
            if ($("#btnWhite").data("name") == _FireProcess[4] && INDEX == 5) {
                INDEX--;
                return;
            }
    
            if ($("#btnWhite").data("name") != _FireProcess[4] || INDEX != 4) {
                INDEX--;
                alert("Thao tác sai. Vui lòng thử lại!");
                return;
            }
    
        }
    
        $(this).css("margin-top", "-19px");
        setTimeout(function () {
            $("#btnWhite").css("margin-top", "-23px");
        }, 200);
    }
    

});


$(document).keydown(function (e) {
    if (e.which == 37) {
        $("#left-RJ").css("background", "radial-gradient(black, transparent)");
        setTimeout(function () {
            $("#left-RJ").css("background", "white");
        }, 200);
        return false;
    }
    if (e.which == 38) {
        $("#up-RJ").css("background", "radial-gradient(black, transparent)");
        setTimeout(function () {
            $("#up-RJ").css("background", "white");
        }, 200);
        return false;
    }
    if (e.which == 39) {
        $("#right-RJ").css("background", "radial-gradient(black, transparent)");
        setTimeout(function () {
            $("#right-RJ").css("background", "white");
        }, 200);
        return false;
    }
    if (e.which == 40) {
        $("#down-RJ").css("background", "radial-gradient(black, transparent)");
        setTimeout(function () {
            $("#down-RJ").css("background", "white");
        }, 200);
        return false;
    }


    if (e.which == 13) {
        $("#btnFirered").css("margin-top", "26px");
        $("#btnFirered").css("margin-left", "175px");
        setTimeout(function () {
            $("#btnFirered").css("margin-top", "22px");
            $("#btnFirered").css("margin-left", "177px");
        }, 200);
        return false;
    }
});