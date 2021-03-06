

var solutions = {

  //调整页面margin
  adjustWrapMargin: function() {

    if($(window).width() > 1200){
      $("#wrap").css("padding-left",($(window).width()-1200)/2+230);
      $("body").show();
    }else{
      $("#wrap").css("padding-left",230);
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
      },{duration:800,easing:'easeOutExpo'}, function() {});
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

    if(scrollTop >= 557){
      $("#tabs").css("position","fixed");
    }else{
      $("#tabs").css("position","static");
    }
  },

  //锚点切换
  tabsToggle : function() {
    $("#tabs a").on("click",function() {
      $(this).siblings("a").removeClass("current");
      $(this).addClass("current");
    });
  },

  //ie锚点调整位置
  hashPosition : function() {

    if(location.hash){
       var target = $(location.hash);
       if(target.length==1){
           var top = target.offset().top-44;
           if(top > 0){
               $('html,body').animate({scrollTop:top}, 1000);
           }
       }
    }
  },

  //左侧菜单焦点
  leftMenuActive : function() {
    var as = $("#menu a");
    var url = window.location.href;
    var len = as.length;

    for(var i=0; i<len; i++){
      var $this = as.eq(i);
      var href = $this.attr("href") !== "#" ? $this.attr("href") : null;
      if(href && (url.indexOf(href)>-1)){
        $this.addClass("current");
        $this.parent().show();
        $this.parent().siblings(".list-title").addClass("current");
      }
    }
  }
};

$(document).ready(function(){

  solutions.adjustWrapMargin();
  solutions.clickTabsEasing();
  solutions.clickMenu();
  solutions.tabsPosition();
  solutions.tabsToggle();
  solutions.hashPosition();
  solutions.leftMenuActive();
});

$(window).resize(solutions.adjustWrapMargin);

$(window).scroll(solutions.tabsPosition);