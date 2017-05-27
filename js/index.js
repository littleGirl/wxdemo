/// <reference path="jQuery.js" />
$(function () {
    var winHei = $(window).height();
    $("#mainContent").height(winHei);
    $("#animateimg").height(winHei * 4);
    $("#animateimg>div").height(winHei);
    $(".bg4_content").height(winHei - 100);
    

    
    var page = 1;//默认第一张图
    $("#arrowup").hide(); //第一张图时向上按钮不显示
    $("#arrowdown").css("bottom", "20px");
    $("#arrowdown>img").click(function () {
        var len = $("#animateimg").find("div").length;
        var $v_show = $("#animateimg");
        if (!$v_show.is(":animated")) {
            if (page == 3) {//如果是最后一页
                $("#arrowdown").hide();
                $("#arrowup").show();
                $v_show.animate({ top: '-=' + winHei }, "200");
                page = 4;
            } else {
                $v_show.animate({ top: '-=' + winHei }, "200");  //通过改变top值，达到每次换一个版面
                page++;
                $("#arrowup").show();
                $("#arrowdown").removeAttr("style"); 
            }
        }
    })
    $("#arrowup>img").click(function () {
        var len = $("#animateimg").find("div").length;
        var $v_show = $("#animateimg");
        if (!$v_show.is(":animated")) {
            if (page == 2) {//如果是第一张图片
                $("#arrowup").hide(); //第一张图时向上按钮不显示
                $("#arrowdown").css("bottom", "20px");
                $v_show.animate({ top: '+=' + winHei }, "200");
                page = 1;
            } else {
                $v_show.animate({ top: '+=' + winHei }, "200");  //通过改变top值，达到每次换一个版面
                page--;
                $("#arrowup").show();
                $("#arrowdown").removeAttr("style");
            }
        }
    })
})