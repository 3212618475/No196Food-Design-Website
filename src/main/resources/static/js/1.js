
/* ################################    jqury    ################################ */

$(document).ready(function(){
/*############################头部右边####################################*/
$(".HD .header .header_deng ul li").hover(
    function(){
    $(this).css("background-color","#ffe4c4");
    $(this).find("a").css( "text-decoration","underline");}
    ,function(){
    $(this).css("background-color","#89b4cebd");
    $(this).find("a").css( "text-decoration","none")
});
/*############################导航部分####################################*/
$(".DH .daohang ul li").hover(
    function(){
        $(this).css("background-color","#89b4cebd")//覆盖改变颜色
    },function(){
        $(this).css("background-color","#FFFFFF")
    });


    /************* 更多食材变色 *************/
    $(".CT .content .content_c2 .food_material1 .more a").hover(function(){
        $(this).css({
            "color":"red",
            "text-decoration":"underline"
        });
    },function(){
        $(this).css({
            "color":"#3B3B3B",
            "text-decoration":"none"
        });
    });

    $(".food_material2 .food_up .food_u").mouseover(function(){
        $(this).toggleClass("food_p1");//检查每个元素中指定的类。如果不存在则添加类，如果已设置则删除之。这就是所谓的切换效果
        $(this).find("a").toggleClass("food_p2");
        var index=$(this).index();
        $(".food_d").eq(index).css("display","block");
        $(".food_d").eq(index).siblings().css("display","none");
    });

    $(".food_material2 .food_up .food_u").mouseout(function(){
        $(this).toggleClass("food_p1");
        $(this).find("a").toggleClass("food_p2");
    });

/************* 美食栏 *************/
    // $(".cookbook .book2  ul .cook2").hover(function(){//美食栏鼠标事件
    //     $(this).find(".cook221").css("display","none");
    //     $(this).find(".cook222").css("display","block");
    // },function(){
    //     $(this).find(".cook222").css("display","none");
    //     $(this).find(".cook221").css("display","block");
    // });

    //美食栏优化滑动动画
    $(".cookbook .book2  ul .cook2").on("mouseenter", function () {
        var _this = $(this);
        _this.find("div.cook221").stop().animate({marginTop: "-60px"}, 400, function () {
        });
    });
    //鼠标离开
    $(".cookbook .book2  ul .cook2").on("mouseleave", function () {
        var _this = $(this);
        _this.find("div.cook221").stop().animate({marginTop: "0px"}, 400, function () {
        });
    });

    /***底部链接栏效果****/
    /*****鼠标覆盖变红***/
    $(".BM .bottom .bot_s dd a").hover(function(){
        $(this).css ({
            "color":"red",
            "text-decoration":"underline"
        });
    },function(){
        $(this).css({
            "color":"dimgrey",
            "text-decoration":"none"
        });
    });
/*****鼠标覆盖变红***/
    $(".BM .bottom .bot_t .bot_t1 li").hover(function(){
        $(this).css("background-color","#cc3333") ;
    },function(){
        $(this).css("background-color","#3B3B3B");
    });

});

//onmouseover事件
function change1(lun,y){
    lun.index=y;
    var Time=document.getElementsByClassName("ctime2");
    var time2=Time[0].getElementsByClassName("time_2");
    for(var i=0;i<time2.length;i++){
        time2[i].style.color="black";
        time2[i].style.borderTop="3px solid black";
    }
    lun.style.color="#FF5151";
    lun.style.borderTop="3px solid #FF5151";

    var CTime=document.getElementsByClassName("ctime1");
    var time1=CTime[0].getElementsByClassName("time_1");
    for(var k=0;k<time1.length;k++){
        time1[k].style.display="none";
    }
    time1[lun.index].style.display="block";
}


var sign=false;//false代表没开夜间模式
function dakemode() {
    if(!sign){
        $("body").css("background-color", "rgba(7,4,0,0.56)")
        sign=true;
    }else{
        $("body").css("background-color","#ffe4c4");
        sign=false;
    }
}

$(function () {
    var t = null;
    t = setTimeout(time, 1000);//開始运行
    function time() {
        clearTimeout(t);//清除定时器
        dt = new Date();
        var year = dt.getFullYear();
        var month = dt.getMonth() + 1;//(0-11,0代表1月)
        var date = dt.getDate();//获取天
        var num = dt.getDay();//获取星期
        var weekday = ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"];
        var hour = dt.getHours();//获取时
        var minute = dt.getMinutes();//获取分
        var second = dt.getSeconds();//获取秒
        //分秒时间是一位数字，在数字前补0。
        date = extra(date);
        month = extra(month);
        minute = extra(minute);
        second = extra(second);
        document.getElementById("start").innerHTML=year + " 年 " + month + " 月 " + date + " 日 " + hour + "：" + minute + "：" + second + " " + weekday[num];
        t = setTimeout(time, 1000); //设定定时器，循环运行
    }
});
//补位函数。
function extra(x) {
    //如果传入数字小于10，数字前补一位0。
    if (x < 10) {
        return "0" + x;
    } else {
        return x;
    }
}


$(function(){
    var index = 0;//用来表示显示第几张图片，初始显示第一张图片
    var length = $(".slider>ul>li").length;//表示列表项的数目
    $(".arrow-right").click(function(){
        index++;
        if(index == length){index=0;}
        $(".slider>ul>li").eq(index).fadeIn().siblings().fadeOut();
    });
    $(".arrow-left").click(function(){
        index--;
        if(index == -1){index=length-1;}
        $(".slider>ul>li").eq(index).fadeIn().siblings().fadeOut();
    });
});


$(function () {
    $('.hotSP span').hover(function () {
        var index = $(this).index();
        $(this).addClass('isSelect').siblings().removeClass('isSelect');
        $(this).parent().next().find('.articleContent').hide().eq(index).show();
    });
})