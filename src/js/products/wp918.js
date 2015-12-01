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
        bgColors: ["rgb(210,210,210)", "rgb(152,255,249)", "rgb(109,253,156)", "rgb(161,206,239)", "rgb(223,178,217)"],
        tooltips: ["WP918", "高性能", "人性化设计", "高可靠性", "高配置"]
    };
    fullpageShow(o.bgColors, o.tooltips, $("#fullpage"));
    $("body").css("visibility","visible");
});