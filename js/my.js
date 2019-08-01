window.onload = function () {
    var windwo_w = document.documentElement.clientWidth || document.body.clientWidth;
    var ui_u = 320;
    var b = (windwo_w / ui_u) * 100;
    document.documentElement.style.fontSize = b + "px";
}