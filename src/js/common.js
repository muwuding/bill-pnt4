$(function(){

    var timer;

    $("#navbar > li").on("mouseenter",function(){

        var $this = $(this);
        clearTimeout(timer);

        timer = setTimeout(function(){
            $(".subnav-wrapper").removeClass("active");
            $this.find(".subnav-wrapper").addClass("active");
        },250);
        
    }).on("mouseleave",function(){
        $(".subnav-wrapper").removeClass("active");
    });
});

