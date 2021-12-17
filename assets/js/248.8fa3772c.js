(window.webpackJsonp=window.webpackJsonp||[]).push([[248],{688:function(t,i,a){"use strict";a.r(i);var e=a(28),n=function(t){t.options.__data__block__={mermaid_382ee1c1:"sequenceDiagram\nparticipant 本地app1(服务器逻辑)\nparticipant 阿里云服务器\nparticipant 本地web2\nparticipant 远程web2\nloop \n    本地app1(服务器逻辑)->>阿里云服务器:1.1.连接作为shopid服务器/api/wsbind/:shopid\n    阿里云服务器->>本地app1(服务器逻辑):1.2.{需要token信息}\n    本地app1(服务器逻辑)->>阿里云服务器:1.3.{当前token信息}\n    阿里云服务器->>本地app1(服务器逻辑):1.4.成功成为shopid处理服务器\nend\n",mermaid_382ee1c4:"sequenceDiagram\nparticipant 微信web\nparticipant 七牛CDN(先不走以防被攻击)\nparticipant 阿里云服务器\nparticipant LibDclGo\nparticipant FileDirApp1\nparticipant 本地web1\nparticipant 本地app1(服务器逻辑)\nloop \n    微信web->>阿里云服务器:1.1.获取https://myweb.com/:shopid/index.html\n    阿里云服务器->>本地app1(服务器逻辑):1.2.获取shopid/index.html\n    本地app1(服务器逻辑)->>LibDclGo:1.3.获取get/index.html\n    LibDclGo->>LibDclGo:1.4通过端口号找到FileDirApp1\n    LibDclGo->>FileDirApp1:1.5.获取get/index.html\n    FileDirApp1->>LibDclGo:1.6.返回文件\n    LibDclGo->>本地app1(服务器逻辑):1.7.返回文件\n    本地app1(服务器逻辑)->>阿里云服务器:1.8.返回文件\n    阿里云服务器->>微信web:1.9.返回文件\nend\n",mermaid_382ee1c7:"sequenceDiagram\nparticipant 微信web\nparticipant 七牛CDN(先不走以防被攻击)\nparticipant 阿里云服务器\nparticipant LibDclGo\nparticipant FileDirApp1\nparticipant 本地web1\nparticipant 本地app1(服务器逻辑)\nloop \n    微信web->>阿里云服务器:1.1.尝试连接https://myweb.com/:shopid/wxconn\n    阿里云服务器->>本地app1(服务器逻辑):1.2.获取/webapi/wsconn\n    本地app1(服务器逻辑)->>阿里云服务器:1.3{已连入}\n    阿里云服务器->>微信web:1.4{已连入}\nend\n"}},p=Object(e.a)({},(function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v("版本")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("时间")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("作者")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("备注")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("1.0.1")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("2020-12-16")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("何发宝")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("初稿")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}}),t._v(" "),a("td",{staticStyle:{"text-align":"left"}}),t._v(" "),a("td",{staticStyle:{"text-align":"left"}}),t._v(" "),a("td",{staticStyle:{"text-align":"left"}})])])]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("绑定自己为ws长连接到阿里云服务器(处理:长连接,文件)")])]),t._v(" "),a("Mermaid",{attrs:{id:"mermaid_382ee1c1",graph:t.$dataBlock.mermaid_382ee1c1}}),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("微信web 获取当前店家使用的插件信息(index.html`版本不同,每个店家都`)")])]),t._v(" "),a("Mermaid",{attrs:{id:"mermaid_382ee1c4",graph:t.$dataBlock.mermaid_382ee1c4}}),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("微信web ws长连接")])]),t._v(" "),a("Mermaid",{attrs:{id:"mermaid_382ee1c7",graph:t.$dataBlock.mermaid_382ee1c7}})],1)}),[],!1,null,null,null);"function"==typeof n&&n(p);i.default=p.exports}}]);