$(function () {

    // 1. 정방향 슬라이드 적용 (버튼기호 ">", Next)

    $("#btnNext>span").click(function () {

        $("#shuttleFrame").animate({
                "margin-left": "-100px"
            },
            200,
            "swing",
            function () {
                $(".slideBox:first-child").insertAfter(".slideBox:last-child");
                $("#shuttleFrame").css({
                    "margin-left": "0"
                });
            });
    });

    // 1. 정방향 슬라이드 적용 (버튼기호 ">", Next)



    // 2. 역방향 슬라이드 적용 (버튼기호 "<", Prev)

    $("#btnPrev>span").click(function () {

        $(".slideBox:last-child").insertBefore(".slideBox:first-child");
        $("#shuttleFrame").css({
            "margin-left": "-100px"
        });
        // 슬라이드가 돌아가기 전에 미리 적용 되어야 함

        $("#shuttleFrame").animate({
                "margin-left": "0"
            },
            200,
            "swing");
    });

    // 2. 역방향 슬라이드 적용 (버튼기호 "<", Prev)






});
