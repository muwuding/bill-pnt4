function getUrlParam(name) {
    var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)'),
        r = window.location.search.substr(1).match(reg);

    if(r != null) return unescape(r[2]); return null;
}

function fullpageShow(o, l, g) {
    var i = {
        bgColors: o,
        tooltips: l
    };
    g.fullpage({
        navigation: !0,
        navigationTooltips: i.tooltips,
        easing: "linear",
        sectionsColor: i.bgColors
    });

    var n = parseInt(getUrlParam("map"));
    var len = $("#fullpage .section").length;

    if(n > 0 && n <= len){
        $.fn.fullpage.moveTo(n,0);
    }
}
$(function () {
    var o = {
        bgColors: ["rgb(70,214,117)", "rgb(250,200,139)", "rgb(253,255,190)","rgb(240,173,157)"],
        tooltips: ["总览", "多系统", "多版本","商城专版"]
    };
    fullpageShow(o.bgColors, o.tooltips, $("#fullpage"));
    $("body").css("visibility","visible");
});