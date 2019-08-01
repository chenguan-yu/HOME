window.onload = function () {
    var windwo_w = document.documentElement.clientWidth || document.body.clientWidth;
    var ui_u = 320;
    var b = (windwo_w / ui_u) * 100;
    document.documentElement.style.fontSize = b + "px";
}

$(".one_li").tap(function(){
    $(".quyu").toggle();
    // $(".one_li").removeClass(".color");
}) 

$(".two_li").tap(function(){
    $(".jiage").toggle();
    // $(".one_li").removeClass(".color");
}) 

$(".three_li").tap(function(){
    $(".fangxing").toggle();
    // $(".one_li").removeClass(".color");
}) 
$(".four_li").tap(function(){
    $(".gengduo").toggle();
    // $(".one_li").removeClass(".color");
}) 