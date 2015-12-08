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
        bgColors: ["rgb(92,171,228)", "rgb(250,200,139)", "rgb(253,255,190)"],
        tooltips: ["总览", "商城系统", "商城专版"]
    };
    fullpageShow(o.bgColors, o.tooltips, $("#fullpage"));
    $("body").css("visibility","visible");
});