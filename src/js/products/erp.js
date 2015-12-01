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
        bgColors: ["rgb(92,171,228)", "rgb(250,200,139)", "rgb(253,255,190)", "rgb(152,255,249)",
                "rgb(109,253,156)","rgb(240,173,157)","rgb(223,178,217)","rgb(230,199,153)"],
        tooltips: ["电商ERP", "系统总览", "供应链管理", "仓配管理", "集货管理", "物流运输","关务管理","费用核算"]
    };
    fullpageShow(o.bgColors, o.tooltips, $("#fullpage"));
    $("body").show();
});