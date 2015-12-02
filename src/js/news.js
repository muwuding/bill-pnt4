$(document).ready(function(){

  //调整页面
  if($(window).width() > 1200){
    $("#wrap").css("padding-left",($(window).width()-1200)/2+230);
    $("body").show();
  }else{
    $("#wrap").css("padding-left",230);
    $("body").show();
  }

  //加载新闻
  var newsList = PNTNEWS || [];
  var len = newsList.length;
  var listWrap = $("#newsListWrap");
  var num = 6;//每页显示条数

  function changePage(n) {

    var itemHtml = '';
    var i = (n-1)*num;
    var max = (n*num > len) ? len : n*num;

    for(; i<max; i++){

      itemHtml += '<div class="news-item clearfix">' +
                      '<div class="item-img">' +
                        '<a href="news/20151203.html">' +
                          '<img src="' + newsList[i].imgUrl + '" alt="">' +
                        '</a>' +
                      '</div>' +
                      '<div class="item-content">' +
                        '<div class="news-title">' +
                          '<a href="' + newsList[i].linkUrl + '">' +
                            '<h1>' + newsList[i].title + '</h1>' +
                          '</a>' +
                        '</div>' +
                        '<div class="news-time">' + newsList[i].time + '</div>' +
                        '<div class="news-summary">' + newsList[i].summary + '</div>' +
                      '</div>' +
                    '</div>'; 
    }
    listWrap.empty().append(itemHtml);
  }

  //初始化加载第一页
  changePage(1);

  //新闻翻页
  $.jqPaginator('#pagination1', {
      totalPages: Math.ceil(len/num),
      visiblePages: 5,
      currentPage: 1,
      onPageChange: function (num, type) {
          changePage(num);
      }
  });
});