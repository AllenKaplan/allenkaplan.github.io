(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{368:function(t,e,r){var content=r(395);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(8).default)("7b1857d8",content,!0,{sourceMap:!1})},394:function(t,e,r){"use strict";r(368)},395:function(t,e,r){(e=r(7)(!1)).push([t.i,".blogTitle{font-size:72pt;text-align:center}.blogSubtitle{text-align:center;font-size:24pt}",""]),t.exports=e},416:function(t,e,r){"use strict";r.r(e);r(40),r(86);var n=r(18),c=r(376),l=r.n(c),o={data:function(){return{articles:[],userName:"AllenKaplan",containerStyle:{display:"flex",flexDirection:"column",gap:"20px"}}},methods:{getArticles:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",l.a.get("https://dev.to/api/articles?username=".concat(t.userName)));case 1:case"end":return e.stop()}}),e)})))()}},created:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getArticles();case 2:t.articles=e.sent.data.filter((function(article){return"article"===article.type_of}));case 3:case"end":return e.stop()}}),e)})))()}},f=(r(394),r(74)),v=r(103),d=r.n(v),m=r(173),x=r(359),_=r(349),h=r(347),w=r(160),C=r(134),component=Object(f.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-container",[r("h1",{staticClass:"blogTitle"},[t._v("BLOG")]),t._v(" "),r("p",{staticClass:"blogSubtitle"},[r("a",{attrs:{href:"https://dev.to/allenkaplan"}},[t._v(" Articles from my dev.to blog")])]),t._v(" "),r("div",{staticClass:"container",style:t.containerStyle},t._l(t.articles,(function(article){return r("v-card",{key:article.id,staticClass:"mx-auto",attrs:{"max-width":"344"}},[r("a",{attrs:{href:article.url,target:"_blank"}},[r("v-img",{attrs:{src:article.cover_image}})],1),t._v(" "),r("v-card-text",[r("v-card-title",[t._v("\n          "+t._s(article.title)+"\n        ")])],1),t._v(" "),r("v-card-actions",{staticClass:"pt-0"},[r("v-btn",{attrs:{text:"",color:"teal accent-4",target:"_blank",href:article.url}},[t._v("\n          Read "),r("v-icon",[t._v("external-link")])],1)],1)],1)})),1)])}),[],!1,null,null,null);e.default=component.exports;d()(component,{VBtn:m.a,VCard:x.a,VCardActions:_.a,VCardText:_.b,VCardTitle:_.c,VContainer:h.a,VIcon:w.a,VImg:C.a})}}]);