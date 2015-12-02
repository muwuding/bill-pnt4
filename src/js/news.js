$(document).ready(function(){

  var newsList = PNTNEWS || [];
  var len = newsList.length;
  var listWrap = $("#newsListWrap");

  for(var i=0; i<len; i++){

    var itemHtml = '<div class="news-item clearfix">' +
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

    listWrap.append(itemHtml);
  }
});