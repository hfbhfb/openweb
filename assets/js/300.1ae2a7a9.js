(window.webpackJsonp=window.webpackJsonp||[]).push([[300],{948:function(t,s,a){"use strict";a.r(s);var n=a(28),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("ul",[a("li",[a("p",[t._v("项目地址 cd /Users/hfb/projects/third-module/elk/logstash-7.15.0")]),t._v(" "),a("ul",[a("li",[t._v("logstash(helloworld)")]),t._v(" "),a("li",[t._v("bin/logstash -e 'input { stdin { } } output { stdout {} }'")])])]),t._v(" "),a("li",[a("p",[t._v("检测配置文件")]),t._v(" "),a("ul",[a("li",[t._v("./bin/logstash -f config/first-pipeline.yml --config.test_and_exit")])])]),t._v(" "),a("li",[a("p",[t._v("运行")]),t._v(" "),a("ul",[a("li",[t._v("./bin/logstash -f config/first-pipeline.yml --config.reload.automatic")]),t._v(" "),a("li",[t._v("使用grok进行过滤  可以过滤出nginx日志的时间,路径,文件大小,请求(get/post等等)")]),t._v(" "),a("li",[t._v("./bin/logstash -f config/first-grok.yml --config.reload.automatic")]),t._v(" "),a("li",[t._v("过滤日志文件的geoip(ip转成物理地理信息)")]),t._v(" "),a("li",[t._v("./bin/logstash -f config/first-geoip.yml --config.reload.automatic")]),t._v(" "),a("li",[t._v("把文件信息导出到es(elasticsearch)进行分析 (1:shards 1:replicas)")]),t._v(" "),a("li",[t._v("./bin/logstash -f config/first-geoip.yml --config.reload.automatic\n*查看 curl -XGET 'localhost:9200/logstash-2021.11.15-000001/_search?pretty&q=response=200'")])])]),t._v(" "),a("li",[a("p",[t._v("从filebeat里拿数据(已经把数据推到5044)")])])]),t._v(" "),a("div",{staticClass:"language-yml line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-yml"}},[a("code",[t._v("input "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    beats "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        port ="),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")]),t._v(' "5044"\n    '),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\noutput "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    stdout "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" codec ="),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")]),t._v(" rubydebug "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br")])]),a("ul",[a("li",[t._v("官方新手教程 https://www.elastic.co/guide/en/logstash/current/first-event.html")]),t._v(" "),a("li",[t._v("依赖项目 filebeat(https://github.com/elastic/beats/tree/master/filebeat) (使用的是go语言写的)")])]),t._v(" "),a("img",{staticStyle:{zoom:"90%"},attrs:{src:"minilet/image-20211115083057837.png",alt:"image-20211115083057837"}})])}),[],!1,null,null,null);s.default=e.exports}}]);