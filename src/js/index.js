/*产品切换动画*/
function productSwiper() {
    var box = $("#productBox");
    var items = box.find(".pnt-container-cell");
    var i = {};

    /*盒子宽度*/
    box.width(items.length*390+(items.length-1)*15);

    /*切换显示规则*/
    if(items.length > 3){
        $("#J_swiper_page").show();
    }else{
        $("#J_swiper_page").hide();
    }

    /*底部圆点动画*/
    $("#J_swiper_page").on("click", "li", function () {

        if(3 * parseInt($(this).attr("num")) < items.length - 3){
            var num = parseInt($(this).attr("num"));
            box.animate({
                left: "-" + num * (items.outerWidth() + 15) * 3 - (num > 0 ? 15 : 0) + "px"
            }, 500)
        }else {
            box.animate({
                left: "-" + (items.length - 3) * (15 + items.outerWidth()) + "px"
            }, 500);
        }
    
        $(this).addClass("action").siblings().removeClass("action")
    });

    /*增加圆点*/
    for (var j = 0, k = ""; j < Math.ceil(items.length / 3);){
        k += 0 == j ? '<li class="action" num="' + j + '"></li>' :'<li num="' + j + '"></li>', j++;
    } 

    $("#J_swiper_page").html(k);

    box.on('mouseenter',function () {

        clearTimeout(i);
        var a = parseInt($("#J_swiper_page>li.action").attr("num")),
            b = items.length;

        return 3 >= b ? void 0 : ($("#J_swiper_prev,#J_swiper_next").show(), 0 == a ? $("#J_swiper_prev").hide() : a ==
            Math.ceil(b / 3) - 1 ? $("#J_swiper_next").hide() : void 0)
    }).on('mouseleave',function () {
        i = setTimeout(function () {
            $("#J_swiper_prev,#J_swiper_next").hide()
        }, 100)
    });

    $("#J_swiper_next,#J_swiper_prev").on('mouseenter',function () {
        clearTimeout(i)
    }).on('click',function () {
        "J_swiper_prev" == $(this).attr("id") ? $("#J_swiper_page>li.action").prev().click() : "J_swiper_next" == $(
            this).attr("id") && $("#J_swiper_page>li.action").next().click();
        var a = parseInt($("#J_swiper_page>li.action").attr("num")),
            b = items.length;
        return 3 >= b ? void 0 : ($("#J_swiper_prev,#J_swiper_next").show(), 0 == a ? $("#J_swiper_prev").hide() : a ==
            Math.ceil(b / 3) - 1 ? $("#J_swiper_next").hide() : void 0)
    });
}

//新闻标题字数
function lengthLimit(str,n) {

    if(str.length > n){
        return str.substr(0,n) + '...';
    }else{
        return str;
    }
}

//加载新闻列表
function addNews() {
    var newsList = PNTNEWS || [];
    var len = newsList.length;
    var listWrap = $("#pntNewsRow");
    var htmls = '<div class="pnt-news-icon"></div>';

    for(var i=0; i<3; i++){
        htmls += '<div class="pnt-news-item clearfix">' +
                    '<span></span>' +
                    '<a href="' + newsList[i].linkUrl + '">[' + newsList[i].time.substr(5,5) + ']' + lengthLimit(newsList[i].title,17) + '</a>' +
                 '</div>';
    }

    htmls += '<div class="pnt-news-more"><a href="news.html">更多>></a></div>';

    $("#pntNewsRow").empty().append(htmls);
}

$(window).on("load", function () {
    $(".flexslider").flexslider({
        directionNav: !1,
        animation: "slide",
        start: function () {
            $("body").addClass("loaded"), $(".footer").css("visibility", "visible"), $(".flexslider").find("img").each(function () {
                var i = $(this),
                    s = i.data("src");
                s && (this.src = s)
            })
        }
    });

    productSwiper();
    addNews();
});