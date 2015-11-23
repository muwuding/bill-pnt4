

var solutions = {

  //调整页面margin
  adjustWrapMargin: function() {

    if($(window).width() > 1200){
      $("#wrap").css("padding-left",($(window).width()-1200)/2+260);
      $("body").show();
    }else{
      $("#wrap").css("padding-left",260);
      $("body").show();
    }
  },

  //点击tabs滚动到对应位置
  clickTabsEasing : function() {

    var $dom = $("html, body");
    var $links = $("#tabs a");
    var href;

    $links.bind("click",function() {
      href = $(this).attr("href");
      $dom.animate({
        scrollTop: $(href).offset().top
      },{duration:800,easing:'easeOutExpo'}, function () {
        window.location.hash = href;
      });
      return false;
    });
  },

  //左侧菜单
  clickMenu: function(){

    var lists = $("#menu .wrap-list");
    var boxs = $(".list-box");
    lists.on("click",".list-title",function(){

      if($(this).attr("status") == "on"){
        return;
      };

      $(".list-title").removeClass("current");
      $(this).addClass("current");
      boxs.hide();
      $(this).next(".list-box").show();
    });
  },

  //tabs定位
  tabsPosition: function() {
    var top = $("#tabs").offset().top;
    var scrollTop = $(window).scrollTop();

    console.log(top + "," + scrollTop);

    if(scrollTop >= 557){
      $("#tabs").css("position","fixed");
    }else{
      $("#tabs").css("position","static");
    }
  }
};

$(document).ready(function(){

  solutions.adjustWrapMargin();
  solutions.clickTabsEasing();
  solutions.clickMenu();
  solutions.tabsPosition();

});

$(window).resize(solutions.adjustWrapMargin);

$(window).scroll(solutions.tabsPosition);