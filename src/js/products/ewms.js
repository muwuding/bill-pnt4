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
    })

    var n = parseInt(getUrlParam("map"));
    var len = $("#fullpage .section").length;

    if(n > 0 && n <= len){
        $.fn.fullpage.moveTo(n,0);
    }
}
$(function () {
    var o = {
        bgColors: ["rgb(240,72,72)", "rgb(230,199,153)", "rgb(251,199,139)", "rgb(253,255,190)", "rgb(152,255,249)",
                   "rgb(109,253,156)", "rgb(161,206,239)", "rgb(223,178,217)", "rgb(240,173,157)", "rgb(210,210,210)"],
        tooltips: ["物流运营管理系统","物流运营管理系统总览", "业务委托管理系统", "物流计划管理系统", "公路运输管理系统", "仓库管理系统",
                   "海空铁运输管理系统","关务管理系统","车务管理系统","计费与结算管理系统"]
    };
    fullpageShow(o.bgColors, o.tooltips, $("#fullpage"));
    $("body").show();
});