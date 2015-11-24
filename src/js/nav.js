function createNav(dir) {
    var html = '<ul>'+
                '<li class="website-logo">'+
                    '<a href="' + dir + 'index.html">'+
                        '<img src="' + dir + 'images/common_logo.png" alt="4PNT">'+
                    '</a>'+
                '</li>'+
                '<li>'+
                    '<a href="' + dir + 'index.html" class="nav-title">首页</a>'+
                '</li>'+ 
                '<li>'+
                    '<span class="nav-title">解决方案</span>'+
                    '<div class="subnav-wrapper">'+
                        '<span class="iconfont icon-tuolinglogo"></span>'+
                        '<ul class="subnav subnav-solution">'+
                            '<li class="default" style="margin-top:-30px;">'+
                                '<h2 class="nav-group-title"  style="padding-top:30px;">'+
                                    '<span class="iconfont icon-shengchanlian"></span>跨境电子商务'+
                                '</h2>'+
                                '<div class="subnav-solution-content">'+
                                    '<a href="' + dir + 'solutions/hwcy.html">跨境电商综合服务平台</a>'+
                                    '<a href="' + dir + 'solutions/hwcy.html">跨境电商公共服务平台</a>'+
                                    '<a href="' + dir + 'solutions/hwcy.html">海外仓仓配物流</a>'+
                                    '<a href="' + dir + 'solutions/hwcy.html">B2B2C进口电商</a>'+
                                    '<a href="' + dir + 'solutions/hwcy.html">B2B2C进口物流</a>'+
                                    '<a href="' + dir + 'solutions/hwcy.html">跨境电商全程物流</a>'+
                                    '<a href="' + dir + 'solutions/hwcy.html">跨境电商商城</a>'+
                                '</div>'+
                            '</li>'+
                            '<li>'+
                                '<h2 class="nav-group-title"><span class="iconfont icon-unie63c"></span>内贸电子商务</h2>'+
                                '<div class="subnav-solution-content">'+
                                    '<a href="' + dir + 'solutions/hwcy.html">电商供应链与物流</a>'+
                                    '<a href="' + dir + 'solutions/hwcy.html">电商仓仓配物流</a>'+
                                    '<a href="' + dir + 'solutions/hwcy.html">电子商务商城</a>'+
                                '</div>'+
                            '</li>'+
                            '<li>'+
                                '<h2 class="nav-group-title"><span class="iconfont icon-shuziwuliu"></span>智慧物流</h2>'+
                                '<div class="subnav-solution-content">'+
                                    '<a href="' + dir + 'solutions/hwcy.html">综合物流</a>'+
                                    '<a href="' + dir + 'solutions/hwcy.html">仓储配送</a>'+
                                    '<a href="' + dir + 'solutions/hwcy.html">公路运输</a>'+
                                    '<a href="' + dir + 'solutions/hwcy.html">多式联运</a>'+
                                    '<a href="' + dir + 'solutions/hwcy.html">保税物流</a>'+
                                    '<a href="' + dir + 'solutions/hwcy.html">电商物流</a>'+
                                '</div>'+
                            '</li>'+
                            '<li>'+
                                '<h2 class="nav-group-title"><span class="iconfont icon-iconxianlufeiji"></span>智慧园区</h2>'+
                                '<div class="subnav-solution-content">'+
                                    '<a href="' + dir + 'solutions/hwcy.html">商贸物流园/城/市场</a>'+
                                    '<a href="' + dir + 'solutions/hwcy.html">电商产业园</a>'+
                                '</div>'+
                            '</li>'+
                        '</ul>'+
                    '</div>'+
                '</li>'+
                '<li>'+
                    '<span class="nav-title">产品</span>'+
                    '<div class="subnav-wrapper">'+
                        '<span class="iconfont icon-tuolinglogo"></span>'+
                        '<ul class="subnav subnav-solution">'+
                            '<li class="default" style="margin-top:-30px;">'+
                                '<h2 class="nav-group-title"  style="padding-top:30px;">'+
                                    '<span class="iconfont icon-gouwu"></span>电子商务商城系统'+
                                '</h2>'+
                                '<div class="subnav-solution-content">'+
                                    '<a href="' + dir + 'products/template.html">电子商务商城系统总览</a>'+
                                    '<a href="' + dir + 'products/template.html">B2C商城系统</a>'+
                                    '<a href="' + dir + 'products/template.html">B2B2C商城系统</a>'+
                                    '<a href="' + dir + 'products/template.html">B2B分销商城</a>'+
                                '</div>'+
                            '</li>'+
                            '<li>'+
                                '<h2 class="nav-group-title">'+
                                    '<span class="iconfont icon-gouwu"></span>电子商务运营管理系统产品套件'+
                                '</h2>'+
                                '<div class="subnav-solution-content">'+
                                    '<a href="' + dir + 'products/erp.html">电子商务运营管理系统总览</a>'+
                                    '<a href="' + dir + 'products/erp.html?map=2">电商供应链管理系统</a>'+
                                    '<a href="' + dir + 'products/erp.html?map=3">电商物流仓配管理系统</a>'+
                                    '<a href="' + dir + 'products/erp.html?map=4">跨境电商物流头程集货管理系统</a>'+
                                    '<a href="' + dir + 'products/erp.html?map=5">跨境电商物流运输管理系统</a>'+
                                    '<a href="' + dir + 'products/erp.html?map=6">跨境电商关务管理系统</a>'+
                                    '<a href="' + dir + 'products/erp.html?map=7">费用核算与结算管理系统</a>'+
                                '</div>'+
                            '</li>'+
                            '<li>'+
                                '<h2 class="nav-group-title"><span class="iconfont icon-shiliangzhinengduixiang4"></span>物流运营管理系统产品套件</h2>'+
                                '<div class="subnav-solution-content">'+
                                    '<a href="' + dir + 'products/ewms.html">物流运营管理系统总览</a>'+
                                    '<a href="' + dir + 'products/ewms.html?map=2">业务委托管理系统</a>'+
                                    '<a href="' + dir + 'products/ewms.html?map=3">物流计划管理系统</a>'+
                                    '<a href="' + dir + 'products/ewms.html?map=4">公路运输管理系统</a>'+
                                    '<a href="' + dir + 'products/ewms.html?map=5">仓库管理系统</a>'+
                                    '<a href="' + dir + 'products/ewms.html?map=6">海空铁运输管理系统</a>'+
                                    '<a href="' + dir + 'products/ewms.html?map=7">关务管理系统</a>'+
                                    '<a href="' + dir + 'products/ewms.html?map=8">车务管理系统</a>'+
                                    '<a href="' + dir + 'products/ewms.html?map=9">计费与结算管理系统</a>'+
                                '</div>'+
                            '</li>'+
                            '<li>'+
                                '<h2 class="nav-group-title"><span class="iconfont icon-daibanyewu"></span>配套软硬件产品</h2>'+
                                '<div class="subnav-solution-content">'+
                                    '<a href="' + dir + 'products/mc.html">移动手持数据终端</a>'+
                                    '<a href="' + dir + 'products/template.html">蓝牙电子称</a>'+
                                '</div>'+
                            '</li>'+
                        '</ul>'+
                    '</div>'+
                '</li>'+
                '<li>'+
                    '<span class="nav-title">服务</span>'+
                    '<div class="subnav-wrapper">'+
                        '<ul class="subnav service-subnav">'+
                            '<li>'+
                                '<img src="' + dir + 'images/nav_service_1.png" alt="IT解决方案服务">'+
                                '<a href="' + dir + 'products/erp.html">IT解决方案服务</a>'+
                                '<p>4PNT专注电子商务与物流领域，为客户提供电子商务与物流业务应用系统规划与实施服务。</p>'+
                            '</li>'+
                            '<li>'+
                                '<img src="' + dir + 'images/nav_service_2.png" alt="IT运维服务">'+
                                '<a href="' + dir + 'products/erp.html">IT运维与运营服务</a>'+
                                '<p>4PNT为客户提供应用系统的托管与日常运维服务，同时为园区类（如物流园区、商贸市场，及电商产业园等）客户提供应用系统合作运营服务。</p>'+
                            '</li>'+
                            '<li>'+
                                '<img src="' + dir + 'images/nav_service_3.png" alt="驼铃云服务">'+
                                '<a href="' + dir + 'products/erp.html">驼铃云服务</a>'+
                                '<p>4PNT驼铃云平台为电子商务生态成员（包括卖家、买家、物流服务商、增值服务提供商等）提供saas业务应用系统、资源共享、业务撮合、供应链融资等云服务。</p>'+
                            '</li>'+
                        '</ul>'+
                    '</div>'+
                '</li>'+
                '<li>'+
                    '<a href="' + dir + 'tuoling.html" class="nav-title">驼铃云</a>'+
                '</li>'+
                '<li>'+
                    '<a href="' + dir + 'aboutus.html" class="nav-title">关于我们</a>'+
                '</li> '+
            '</ul>';

            document.writeln(html);
}
