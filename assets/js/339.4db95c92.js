(window.webpackJsonp=window.webpackJsonp||[]).push([[339],{993:function(t,o,p){"use strict";p.r(o);var n=p(28),s=Object(n.a)({},(function(){var t=this,o=t.$createElement,p=t._self._c||o;return p("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[p("p",[t._v("sync.Map syncMap 同步map")]),t._v(" "),p("ul",[p("li",[p("p",[t._v("参考 https://www.cnblogs.com/zhangboyu/p/7456687.html")])]),t._v(" "),p("li",[p("p",[t._v("优点：是官方出的，是亲儿子；通过读写分离，降低锁时间来提高效率；")])]),t._v(" "),p("li",[p("p",[t._v("缺点：不适用于大量写的场景，这样会导致read map读不到数据而进一步加锁读取，同时dirty map也会一直晋升为read map，整体性能较差。")])]),t._v(" "),p("li",[p("p",[t._v("适用场景：大量读，少量写")])]),t._v(" "),p("li",[p("p",[t._v("源码分析: 为什么这么写? 乐观锁机制,相比悲观锁,读效率更高,缺点是复杂\n/Users/hfb/projects/go/gopath/src_only_mod_copy/gopl.io/a_for_test/go_map_sync_src/main.go")])])])])}),[],!1,null,null,null);o.default=s.exports}}]);