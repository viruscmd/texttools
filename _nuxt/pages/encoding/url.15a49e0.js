(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{258:function(t,e,n){"use strict";n.r(e);n(77);var c={data:function(){return{inputStr:"",encode:!0}},computed:{base64:function(){return this.inputStr?this.encode?this.inputStr.split("\n").map((function(t){return encodeURI(t)})).join("\n"):this.inputStr.split("\n").map((function(t){return decodeURI(t)})).join("\n"):""}}},o=n(14),component=Object(o.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h1",{staticClass:"title"},[t._v("URL Encode")]),t._v(" "),n("hr"),t._v(" "),n("div",{staticClass:"columns is-multiline"},[n("div",{staticClass:"column is-full"},[n("h2",{staticClass:"subtitle"},[t._v("Your Text")]),t._v(" "),n("b-input",{attrs:{type:"textarea",placeholder:"Type something here and watch the magic..."},model:{value:t.inputStr,callback:function(e){t.inputStr=e},expression:"inputStr"}}),t._v(" "),t._m(0)],1),t._v(" "),n("div",{staticClass:"column is-full"},[n("b-switch",{model:{value:t.encode,callback:function(e){t.encode=e},expression:"encode"}},[t._v("Encode/Decode")])],1),t._v(" "),n("div",{staticClass:"column is-full"},[n("output-area",{attrs:{output:t.base64,title:t.encode?"Encoded":"Decoded"}})],1)])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("small",[this._v("Learn about "),e("a",{attrs:{href:"https://en.wikipedia.org/wiki/Percent-encoding"}},[this._v("URL Encoding")]),this._v(".\n            ")])}],!1,null,null,null);e.default=component.exports}}]);