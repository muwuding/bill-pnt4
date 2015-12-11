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
});

