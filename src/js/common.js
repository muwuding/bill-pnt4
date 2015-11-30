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
});

