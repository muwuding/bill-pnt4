$(function(){

    var timer;

    $("#navbar > li").on("mouseenter",function(){

        var $this = $(this);
        clearTimeout(timer);

        timer = setTimeout(function(){
            $(".subnav-wrapper").removeClass("active");
            $this.find(".subnav-wrapper").addClass("active").slideDown();
        },350);

    }).on("mouseleave",function(){
        clearTimeout(timer);
        $(".subnav-wrapper").removeClass("active");
    });

    //回到顶部
    var goTopHtml = '<div class="goto-top" style="display:none;">回到顶部</div>';
    $("body").append(goTopHtml);

    $(document).on("click",".goto-top",function() {
        $("html,body").animate({scrollTop: 0}, 250);
    });
});

$(window).scroll(function() {

    var gotoTop = $(".goto-top");

    if( $(document).scrollTop() > 500) {
        gotoTop.show();
    } else {
        gotoTop.hide();
    }

    //百度统计
    var _hmt = _hmt || [];
    (function() {
      var hm = document.createElement("script");
      hm.src = "//hm.baidu.com/hm.js?2e34f30a32566257f2cd08206678777f";
      var s = document.getElementsByTagName("script")[0];
      s.parentNode.insertBefore(hm, s);
    })();
});

