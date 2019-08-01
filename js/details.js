window.onload = function () {
    var windwo_w = document.documentElement.clientWidth || document.body.clientWidth;
    var ui_u = 320;
    var b = (windwo_w / ui_u) * 100;
    document.documentElement.style.fontSize = b + "px";
}


var map = new BMap.Map("container"); // 创建地图实例  
var point = new BMap.Point(116.404, 39.915); // 创建点坐标  
map.centerAndZoom(point, 15); // 初始化地图，设置中心点坐标和地图级别
map.enableScrollWheelZoom(true);