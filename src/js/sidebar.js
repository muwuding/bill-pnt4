function createSidebar(dir) {
  var link1 = "http://b.qq.com/webc.htm?new=0&sid=2508935692&o=http://www.4pnt.com/&q=7', '_blank', 'height=502, width=644,toolbar=no,scrollbars=no,menubar=no,status=no');";
  var link2 = "http://b.qq.com/webc.htm?new=0&sid=2022034472&o=http://www.4pnt.com/&q=7', '_blank', 'height=502, width=644,toolbar=no,scrollbars=no,menubar=no,status=no');";
  var html = '<div class="sidemenu-container">' +
        '<div class="sidemenu-contact">' +
          '<span class="iconfont icon-kefubu"></span>' +
          '<div class="sidemenu-tip">联系我们</div>' + 
        '</div>' +
        '<div class="sidemenu-content-wrapper">' +
          '<ul>' +
            '<li>' +
              '<p>在线咨询</p>' +
              '<ul>' +
                '<li>' +
                  '<a href="javascript:void(0);" onclick="javascript:window.open(' + link1 +');"><img src="' + dir + 'images/index_icon_12.png" alt="" width="18" height="18"><span style="margin: 0 10px;">华东</span><span>Jason</span></a>' +
                '</li>' +
                '<li>' +
                  '<a href="javascript:void(0);" onclick="javascript:window.open(' + link2 +');"><img src="' + dir + 'images/index_icon_12.png" alt="" width="18" height="18"><span style="margin: 0 10px;">华南</span><span>Grady</span></a>' +
                '</li>' +
              '</ul>' +
            '</li>' +
            '<li>' +
              '<p>微信公众号</p>' +
              '<ul>' +
                '<li>' +
                  '<img src="' + dir + 'images/common_weixin_4pnt.jpg" alt="驼铃 com4pnt" title="驼铃 com4pnt" width="140">' +
                '</li>' +
              '</ul>' +
            '</li>' +
            '<li>' +
              '<p>邮件</p>' +
              '<ul>' +
                '<li>' +
                  '<a href="mailto:camelbell@4pnt.com">camelbell@4pnt.com</a>' +
                '</li>' +
              '</ul>' +
            '</li>' +
          '</ul>' +
        '</div>' +
      '</div>';

      document.writeln(html);
}