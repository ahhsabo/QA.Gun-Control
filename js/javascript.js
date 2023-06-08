// Quy trình bao gồm:
// 1. Chọn chế độ : STAB / SERV / DESIGN
// 2. Bật công tắc LRF (laze) để cho phép đo k/cach
// 3. Bật công tắc MOVE (di chuyển được cần phải)
// 4. Chọn chế độ bắn: đơn / loạt / liên thanh
// 5. Giữ côn phải và chi chuyển nút trên cần phải (di chuyển được trạm vũ trí)
// 6. Giữ tay côn trái để khoá mục tiêu
// 7. Bật công tắc Fire (cho phép bắn)
// 8. Bật công tắc CHRG (nạp đạn)
// 9. Bấm khai hỏa
//                        0        1      2         3          4            5        6          7         
const _FireProcess = ["modeAct", "LRF", "MOV", "modeFire","coneRight", "coneLeft", "btnFire", "CHRG",];
var INDEX = -1;
var MODE = "F2";
var sound = new Audio('img/gun12.7mm.mp3');
//TRỢ GIÚP
var countF1 = 0;
function myFunctionF1() {
    countF1++;
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

//LEDTEST
var countLEDTEST = 0;
$(".on-off__LEDTEST img").on("click", function () {
    countLEDTEST++;
    if (countLEDTEST % 2 == 0) {
        $(this).css("rotate", "0deg");
        //STAB
        if (countStab % 2 == 1) {
            $("#stab").css("filter", "brightness(200%)");
            $("#desig").css("filter", "brightness(100%)");
            $("#serv").css("filter", "brightness(100%)");
        }
        else {
            $("#stab").css("filter", "brightness(100%)");
        }
        //DESIGN
        if (countDesig % 2 == 1) {
            $("#stab").css("filter", "brightness(100%)");
            $("#desig").css("filter", "brightness(200%)");
            $("#serv").css("filter", "brightness(100%)");
        }
        else {
            $("#desig").css("filter", "brightness(100%)");
        }
        //SERV
        if (countServ % 2 == 1) {
            $("#stab").css("filter", "brightness(100%)");
            $("#desig").css("filter", "brightness(100%)");
            $("#serv").css("filter", "brightness(200%)");
        }
        else {
            $("#serv").css("filter", "brightness(100%)");
        }
        //SCTR
        if (countSctr % 2 == 1) {
            $("#sctr").css("filter", "brightness(200%)");
        }
        else {
            $("#sctr").css("filter", "brightness(100%)");
        }
        //SINC
        if (countSinc % 2 == 1) {
            $("#sinc").css("filter", "brightness(200%)");
        }
        else {
            $("#sinc").css("filter", "brightness(100%)");
        }
        //AIM
        if (countAimtrgt % 2 == 1) {
            $("#aimtrgt").css("filter", "brightness(200%)");
        }
        else {
            $("#aimtrgt").css("filter", "brightness(100%)");
        }
        //LRF
        if (count__LRF % 2 == 0) {
            $("#span-LRF").css("background-color", "gray");
        }
        else {
            $("#span-LRF").css("background-color", "#0DFF0B");
        }
        //OVER
        if (countOVER % 2 == 0) {
            $("#span-OVER").css("background-color", "gray");
        }
        else {
            $("#span-OVER").css("background-color", "#0DFF0B");
        }
        //MOVE
        if (countMOVE % 2 == 0) {
            $("#span-MOVE").css("background-color", "gray");
        }
        else {
            $("#span-MOVE").css("background-color", "#0DFF0B");
        }
        //FIRE
        if (count__btnFire % 2 == 0) {
            $("#span-FIRE").css("background-color", "gray");
        }
        else {
            $("#span-FIRE").css("background-color", "#FF562F");
        }
        //AUTOFOCUS
        if (count__AutoFocus % 2 != 0) {
            $("#autofocus-btn").css("filter", "brightness(200%)");
        }
        else {
            $("#autofocus-btn").css("filter", "brightness(100%)");
        }
        // $(".led").css("filter", "brightness(100%)");
        // $(".led1").css("background-color", "gray");
        // $(".led2").css("background-color", "gray");
    }
    else {
        $(this).css("rotate", "180deg");
        $(".led").css("filter", "brightness(200%)");
        $(".led2").css("background-color", "#FF562F");
        $(".led1").css("background-color", "#0DFF0B");

    }
});

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
    count__AutoFocus++;
    if (count__AutoFocus % 2 != 0) {
        $(this).css("filter", "brightness(200%)");
        $("#screenUser").css("filter", "blur(0px)");
        $("#screenUser1").css("filter", "blur(0px)");
        $("#screenUser2").css("filter", "blur(0px)");
        $("#screenUser12").css("filter", "blur(0px)");

    }
    else {
        $(this).css("filter", "brightness(100%)");
        $("#screenUser").css("filter", "blur(1px)");
        $("#screenUser1").css("filter", "blur(1px)");
        $("#screenUser2").css("filter", "blur(1px)");
        $("#screenUser12").css("filter", "blur(1px)");
    }
});


//Fire-mode
$("#center-btn h5").on("click", function () {
    if (MODE == "F3") {
        INDEX++;
        console.log(INDEX);

        if ($(this).data("name") == _FireProcess[3] && INDEX == 4) {
            INDEX--;
            return;
        }
        if ($(this).data("name") != _FireProcess[3] || INDEX != 3) {
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
        if ($(this).data("name") != _FireProcess[1] || INDEX != 1) {
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
        if ($(this).data("name") != _FireProcess[2] || INDEX != 2) {
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
        if ($(this).data("name") != _FireProcess[6] || INDEX != 6) {
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
        if ($(this).data("name") != _FireProcess[7] || INDEX != 7) {
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
        $("#screenUser").css("filter", "grayscale(0)");
        $("#screenUser1").css("filter", "grayscale(0)");
        $("#screenUser2").css("filter", "grayscale(0)");
        $("#screenUser12").css("filter", "grayscale(0)");
    }
    else {
        $("#plusCCD span").css("filter", "brightness(150%)");
        $("#minusCCD span").css("filter", "brightness(100%)");
        $("#screenUser").css("filter", "grayscale(0)");
        $("#screenUser1").css("filter", "grayscale(0)");
        $("#screenUser2").css("filter", "grayscale(0)");
        $("#screenUser12").css("filter", "grayscale(0)");
        countminusCCD = 0;
    }

});
var countminusCCD = 0;
$("#minusCCD span").on("click", function () {
    countminusCCD++;
    if (countminusCCD % 2 == 0) {
        $("#minusCCD span").css("filter", "brightness(100%)");
        $("#screenUser").css("filter", "grayscale(0)");
        $("#screenUser1").css("filter", "grayscale(0)");
        $("#screenUser2").css("filter", "grayscale(0)");
        $("#screenUser12").css("filter", "grayscale(0)");
    }
    else {
        $("#minusCCD span").css("filter", "brightness(150%)");
        $("#plusCCD span").css("filter", "brightness(100%)");
        $("#screenUser").css("filter", "grayscale(1)");
        $("#screenUser1").css("filter", "grayscale(1)");
        $("#screenUser2").css("filter", "grayscale(1)");
        $("#screenUser12").css("filter", "grayscale(1)");
        countplusCCD = 0;
    }

});


var zoomFocus = 1;
//ZOOM  
$("#plusZOOM span").on("click", function () {
    zoomFocus = zoomFocus + 0.05;
    $("#plusZOOM span").css("filter", "brightness(150%)");
    if (zoomFocus >= 0.7 && zoomFocus <= 3) {
        $(".screenUser").css("scale", zoomFocus + "");
    }
    setTimeout(function () {
        $("#plusZOOM span").css("filter", "brightness(100%)");
    }, 200);
});
$("#minusZOOM span").on("click", function () {
    zoomFocus = zoomFocus - 0.05;
    $("#minusZOOM span").css("filter", "brightness(150%)");
    if (zoomFocus >= 0.7 && zoomFocus <= 3) {
        $(".screenUser").css("scale", zoomFocus + "");
    }
    setTimeout(function () {
        $("#minusZOOM span").css("filter", "brightness(100%)");
    }, 200);
});



// LEFT JOYSTICK
var countConeLeft = 0;
$("#coneLeft").on("click", function () {
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
    countConeLeft++;
    if (countConeLeft % 2 != 0) {
        $(this).css("margin", "16px 0 0 63px");
        $(this).css("height", "54px");
        $(this).css("width", "44px");
        $(this).css("rotate", "4deg");
        $(".CrossHair").addClass("d-none");
        $(".noCrossHair").removeClass("d-none");
    }
    else {
        $("#coneLeft").css("margin", "12px 0 0 43px");
        $("#coneLeft").css("height", "53px");
        $("#coneLeft").css("width", "63px");
        $("#coneLeft").css("rotate", "0deg");
        $(".noCrossHair").addClass("d-none");
        $(".CrossHair").removeClass("d-none");
    }
});

//ButtonWhite
$("#btnWhite").on("click", function () {
    if ((countStab % 2 != 0)) {
        $(this).css("margin-top", "103px");
        $(this).css("margin-left", "18px");
        $("#coneLeft").css("margin-top", "14px");
        $("#coneLeft").css("margin-left", "43px");
        setTimeout(function () {
            $("#btnWhite").css("margin-top", "105px");
            $("#btnWhite").css("margin-left", "16px");
            $("#coneLeft").css("margin-top", "12px");
            $("#coneLeft").css("margin-left", "43px");
        }, 200);
    }
});

//Khai hoả
var countBullet = 0;
$("#btnFirered").on("click", function () {
    if(count__btnFire % 2 == 1){
    countBullet++;
    $(this).css("margin-top", "30px");
    $(this).css("margin-left", "27px");
    $(".vetdan").removeClass('d-none');
    sound.play();
    setTimeout(function () {
        $("#btnFirered").css("margin-top", "26px");
        $("#btnFirered").css("margin-left", "30px");
    }, 200);
    setTimeout(function () {
        $(".vetdan").addClass('d-none');
    }, 150);

    // vị trí X có %
    var screenX_percent = $("#screenUser").css("background-position-x");
    // vị trí Y có %
    var screenY_percent = $("#screenUser").css("background-position-y");
    // vị trí X k có %
    var screenX = +screenX_percent.split('%')[0];
    // vị trí Y k có %
    var screenY = +screenY_percent.split('%')[0];

    if (((screenX <= 51 && screenX >= 49 && screenY >= 69 && screenY <= 71) ||(screenX <= 50 && screenX >= 49 && screenY >= 68 && screenY <= 69)) && countBullet == 4) {
        $("#screenUser").addClass('d-none');
        $("#screenUser1").removeClass('d-none');
        $("#screenUser1").addClass('fired');
        $("#screenUser2").addClass('d-none');
        $("#screenUser12").addClass('d-none');
    }

    if ((screenX=49 && screenY==24 || screenX == 50 && screenY == 24 || screenX ==51 && screenY == 24|| screenX == 49 && screenY == 23) && countBullet == 4) {
        $("#screenUser").addClass('d-none');
        $("#screenUser1").addClass('d-none');
        $("#screenUser2").removeClass('d-none');
        $("#screenUser2").addClass('fired');
        $("#screenUser12").addClass('d-none');
    }

    if ($("#screenUser2").hasClass('fired') && $("#screenUser1").hasClass('fired')) {
        $("#screenUser").addClass('d-none');
        $("#screenUser1").addClass('d-none');
        $("#screenUser2").addClass('d-none');
        $("#screenUser12").removeClass('d-none');
    }
}
});

//A S W D
$("#left-LJ").on("click", function () {
    if (countMOVE % 2 != 0) {
        xFocus--;
        if (xFocus < 200) {
            xFocus++;
            return false;
        }
        $("#left-LJ").css("background", "radial-gradient(black, transparent)");
        $(".focusEnemy").css("margin-left", xFocus + "px");
        setTimeout(function () {
            $("#left-LJ").css("background", "white");
        }, 200);
    }
});

$("#down-LJ").on("click", function () {
    if (countMOVE % 2 != 0) {
        yFocus++;
        if (yFocus > -595) {
            yFocus--;
            return false;
        }
        $("#down-LJ").css("background", "radial-gradient(black, transparent)");
        $(".focusEnemy").css("margin-top", yFocus + "px");
        setTimeout(function () {
            $("#down-LJ").css("background", "white");
        }, 200);
    }
})
$("#right-LJ").on("click", function () {
    if (countMOVE % 2 != 0) {
        xFocus++;
        if (xFocus > 460) {
            xFocus--;
            return false;
        }
        $("#right-LJ").css("background", "radial-gradient(black, transparent)");
        $(".focusEnemy").css("margin-left", xFocus + "px");
        setTimeout(function () {
            $("#right-LJ").css("background", "white");
        }, 200);
    }
})
$("#up-LJ").on("click", function () {
    if (countMOVE % 2 != 0) {
        yFocus--;
        if (yFocus < -795) {
            yFocus++;
            return false;
        }
        $("#up-LJ").css("background", "radial-gradient(black, transparent)");
        $(".focusEnemy").css("margin-top", yFocus + "px");
        setTimeout(function () {
            $("#up-LJ").css("background", "white");
        }, 200);
    }
})



// RIGHT JOYSTICK
var countConeRight = 0;
$("#coneRight").on("click", function () {
    countConeRight++;
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
    if (countConeRight % 2 != 0) {
        kdConeRight = 1;
        $(this).css("margin", "138px 0 0 63px");
        $(this).css("height", "54px");
        $(this).css("width", "44px");
        $(this).css("rotate", "4deg");
    }
    else {
        kdConeRight = 0;
        $("#coneRight").css("margin", "134px 0 0 44px");
        $("#coneRight").css("height", "53px");
        $("#coneRight").css("width", "63px");
        $("#coneRight").css("rotate", "0deg");
    }
});
$("#left-RJ").on("click", function () {
    countBullet = 0;
    if (countConeRight % 2 != 0) {
        xScreen--;
        if (xScreen < 0) {
            xScreen++;
            return false;
        }
        $("#left-RJ").css("background", "radial-gradient(black, transparent)");
        $(".screenUser").css("background-position-x", xScreen + "%");
        setTimeout(function () {
            $("#left-RJ").css("background", "white");
        }, 200);
        return false;
    }
})
$("#up-RJ").on("click", function () {
    countBullet = 0;
    if (countConeRight % 2 != 0) {
        yScreen--;
        if (yScreen < 0) {
            yScreen++;
            return false;
        }
        $("#up-RJ").css("background", "radial-gradient(black, transparent)");
        $(".screenUser").css("background-position-y", yScreen + "%");
        setTimeout(function () {
            $("#up-RJ").css("background", "white");
        }, 200);
        return false;
    }
})
$("#right-RJ").on("click", function () {
    countBullet = 0;
    if (countConeRight % 2 != 0) {
        xScreen++;
        if (xScreen > 100) {
            xScreen--;
            return false;
        }
        $("#right-RJ").css("background", "radial-gradient(black, transparent)");
        $(".screenUser").css("background-position-x", xScreen + "%");
        setTimeout(function () {
            $("#right-RJ").css("background", "white");
        }, 200);
        return false;
    }
})
$("#down-RJ").on("click", function () {
    countBullet = 0;
    if (countConeRight % 2 != 0) {
        yScreen++;
        if (yScreen > 100) {
            yScreen--;
            return false;
        }
        $("#down-RJ").css("background", "radial-gradient(black, transparent)");
        $(".screenUser").css("background-position-y", yScreen + "%");
        setTimeout(function () {
            $("#down-RJ").css("background", "white");
        }, 200);
        return false;
    }
})

//just click 1 btn
$(".modeBtn").on('click', 'input[type="radio"]', function () {
    $('input[type="radio"]').not(this).prop('checked', false);
});


//MODE
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
    if ($(".on-off__btn").hasClass("active")) {
        MODE = "F2";
        alert("Vui lòng tắt hết nút bấm trước khi bắt đầu");
        $('#F3').css("background-color", "white");
        $('#F3').css("border", "2px solid black");
        $('#F2').css("background-color", "#14da1e");
        $('#F2').css("border", "3px solid #478bfb");
        countF3 = 0;
    }
};
function myFunctionF2() {
    MODE = "F2";
    countF3 = 0;
    $('#F3').css("background-color", "white");
    $('#F3').css("border", "2px solid black");
    $('#F2').css("background-color", "#14da1e");
    $('#F2').css("border", "3px solid #478bfb");
};



//KEYBOARD BTN
var xScreen = 50;
var yScreen = 50;
var xFocus = 330;
var yFocus = -695;
var kdConeLeft = 0;
var kdConeRight = 0;
document.addEventListener('keydown', function (event) {
    if (event.code == 'KeyA') {
        if (countMOVE % 2 != 0) {
            xFocus--;
            if (xFocus < 200) {
                xFocus++;
                return false;
            }
            $("#left-LJ").css("background", "radial-gradient(black, transparent)");
            $(".focusEnemy").css("margin-left", xFocus + "px");
            setTimeout(function () {
                $("#left-LJ").css("background", "white");
            }, 200);
        }
    }
    if (event.code == 'KeyS') {
        if (countMOVE % 2 != 0) {
            yFocus++;
            if (yFocus > -595) {
                yFocus--;
                return false;
            }
            $("#down-LJ").css("background", "radial-gradient(black, transparent)");
            $(".focusEnemy").css("margin-top", yFocus + "px");
            setTimeout(function () {
                $("#down-LJ").css("background", "white");
            }, 200);
        }
    }
    if (event.code == 'KeyD') {
        if (countMOVE % 2 != 0) {
            xFocus++;
            if (xFocus > 460) {
                xFocus--;
                return false;
            }
            $("#right-LJ").css("background", "radial-gradient(black, transparent)");
            $(".focusEnemy").css("margin-left", xFocus + "px");
            setTimeout(function () {
                $("#right-LJ").css("background", "white");
            }, 200);
        }
    }
    if (event.code == 'KeyW') {
        if (countMOVE % 2 != 0) {
            yFocus--;
            if (yFocus < -795) {
                yFocus++;
                return false;
            }
            $("#up-LJ").css("background", "radial-gradient(black, transparent)");
            $(".focusEnemy").css("margin-top", yFocus + "px");
            setTimeout(function () {
                $("#up-LJ").css("background", "white");
            }, 200);
        }
    }

    if (event.code == 'KeyF' && count__btnFire % 2 == 1) {
        countBullet++;
        $("#btnFirered").css("margin-top", "30px");
        $("#btnFirered").css("margin-left", "27px");
        $(".vetdan").removeClass('d-none');
        setTimeout(function () {
            $(".vetdan").addClass('d-none');
        }, 150);
        sound.play();
        setTimeout(function () {
            $("#btnFirered").css("margin-top", "26px");
            $("#btnFirered").css("margin-left", "30px");
        }, 200);

        // vị trí X có %
    var screenX_percent = $("#screenUser").css("background-position-x");
    // vị trí Y có %
    var screenY_percent = $("#screenUser").css("background-position-y");
    // vị trí X k có %
    var screenX = +screenX_percent.split('%')[0];
    // vị trí Y k có %
    var screenY = +screenY_percent.split('%')[0];

    if (((screenX <= 51 && screenX >= 49 && screenY >= 69 && screenY <= 71) ||(screenX <= 50 && screenX >= 49 && screenY >= 68 && screenY <= 69)) && countBullet == 4) {
        $("#screenUser").addClass('d-none');
        $("#screenUser1").removeClass('d-none');
        $("#screenUser1").addClass('fired');
        $("#screenUser2").addClass('d-none');
        $("#screenUser12").addClass('d-none');
    }

    if ((screenX=49 && screenY==24 || screenX == 50 && screenY == 24 || screenX ==51 && screenY == 24|| screenX == 49 && screenY == 23) && countBullet == 4) {
        $("#screenUser").addClass('d-none');
        $("#screenUser1").addClass('d-none');
        $("#screenUser2").removeClass('d-none');
        $("#screenUser2").addClass('fired');
        $("#screenUser12").addClass('d-none');
    }

    if ($("#screenUser2").hasClass('fired') && $("#screenUser1").hasClass('fired')) {
        $("#screenUser").addClass('d-none');
        $("#screenUser1").addClass('d-none');
        $("#screenUser2").addClass('d-none');
        $("#screenUser12").removeClass('d-none');
    }
    }

    if (event.code == 'Space') {
        if (MODE == "F3") {
            INDEX++;
            console.log(INDEX);
            if ($("#coneLeft").data("name") == _FireProcess[5] && INDEX == 6) {
                INDEX--;
                return;
            }

            if ($("#coneLeft").data("name") != _FireProcess[5] || INDEX != 5) {
                INDEX--;
                alert("Thao tác sai. Vui lòng thử lại!");
                return;
            }
        }
        countConeLeft++;
        if (countConeLeft % 2 != 0) {
            $("#coneLeft").css("margin", "16px 0 0 63px");
            $("#coneLeft").css("height", "54px");
            $("#coneLeft").css("width", "44px");
            $("#coneLeft").css("rotate", "4deg");
            $(".CrossHair").addClass("d-none");
            $(".noCrossHair").removeClass("d-none");
        }
        else {
            $("#coneLeft").css("margin", "12px 0 0 43px");
            $("#coneLeft").css("height", "53px");
            $("#coneLeft").css("width", "63px");
            $("#coneLeft").css("rotate", "0deg");
            $(".noCrossHair").addClass("d-none");
            $(".CrossHair").removeClass("d-none");
        }
        return false;
    }

    if (event.code == 'KeyR') {
        if ((countStab % 2 != 0 && countConeLeft % 2 != 0)) {
            $("#btnWhite").css("margin-top", "103px");
            $("#btnWhite").css("margin-left", "18px");
            $("#coneLeft").css("margin-top", "18px");
            $("#coneLeft").css("margin-left", "63px");
            setTimeout(function () {
                $("#btnWhite").css("margin-top", "105px");
                $("#btnWhite").css("margin-left", "16px");
                $("#coneLeft").css("margin-top", "16px");
                $("#coneLeft").css("margin-left", "63px");
            }, 200);
        }
        else if ((countStab % 2 != 0 && countConeLeft % 2 == 0)) {
            $("#btnWhite").css("margin-top", "103px");
            $("#btnWhite").css("margin-left", "18px");
            $("#coneLeft").css("margin-top", "14px");
            $("#coneLeft").css("margin-left", "43px");
            setTimeout(function () {
                $("#btnWhite").css("margin-top", "105px");
                $("#btnWhite").css("margin-left", "16px");
                $("#coneLeft").css("margin-top", "12px");
                $("#coneLeft").css("margin-left", "43px");
            }, 200);
        }
        return false;
    }

    if (event.code == 'KeyL') {
        kdConeRight++;
        if (MODE == "F3") {
            INDEX++;
            console.log(INDEX);
            if ($("#coneRight").data("name") == _FireProcess[4] && INDEX == 5) {
                INDEX--;
                return;
            }
    
            if ($("#coneRight").data("name") != _FireProcess[4] || INDEX != 4) {
                INDEX--;
                alert("Thao tác sai. Vui lòng thử lại!");
                return;
            }
        }
        if (kdConeRight % 2 != 0) {
            countConeRight = 1;
            $("#coneRight").css("margin", "138px 0 0 63px");
            $("#coneRight").css("height", "54px");
            $("#coneRight").css("width", "44px");
            $("#coneRight").css("rotate", "4deg");
        }
        else {
            countConeRight = 0;
            $("#coneRight").css("margin", "134px 0 0 44px");
            $("#coneRight").css("height", "53px");
            $("#coneRight").css("width", "63px");
            $("#coneRight").css("rotate", "0deg");
        }
        return false;
    }
});


$(document).keydown(function (e) {
    if (countConeRight % 2 != 0 || kdConeRight % 2 != 0) {
        if (e.which == 37) {
            countBullet = 0;
            xScreen--;
            if (xScreen < 0) {
                xScreen++;
                return false;
            }
            $("#left-RJ").css("background", "radial-gradient(black, transparent)");
            $(".screenUser").css("background-position-x", xScreen + "%");
            setTimeout(function () {
                $("#left-RJ").css("background", "white");

            }, 200);
            return false;
        }
        if (e.which == 38) {
            countBullet = 0;
            yScreen--;
            if (yScreen < 0) {
                yScreen++;
                return false;
            }
            $("#up-RJ").css("background", "radial-gradient(black, transparent)");
            $(".screenUser").css("background-position-y", yScreen + "%");
            setTimeout(function () {
                $("#up-RJ").css("background", "white");
            }, 200);
            return false;
        }
        if (e.which == 39) {
            countBullet = 0;
            xScreen++;
            if (xScreen > 100) {
                xScreen--;
                return false;
            }
            $("#right-RJ").css("background", "radial-gradient(black, transparent)");
            $(".screenUser").css("background-position-x", xScreen + "%");
            setTimeout(function () {
                $("#right-RJ").css("background", "white");
            }, 200);
            return false;
        }
        if (e.which == 40) {
            countBullet = 0;
            yScreen++;
            if (yScreen > 100) {
                yScreen--;
                return false;
            }
            $("#down-RJ").css("background", "radial-gradient(black, transparent)");
            $(".screenUser").css("background-position-y", yScreen + "%");
            setTimeout(function () {
                $("#down-RJ").css("background", "white");
            }, 200);
            return false;
        }
    }

});

