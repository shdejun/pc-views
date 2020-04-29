webpackJsonp([2],{

/***/ "7V1f":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.function.name.js
var es_function_name = __webpack_require__("YY9M");
var es_function_name_default = /*#__PURE__*/__webpack_require__.n(es_function_name);

// EXTERNAL MODULE: ./packages/popup/index.js + 3 modules
var popup = __webpack_require__("ph7M");

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./node_modules/vue-markdown-loader/lib/markdown-compiler.js?raw!./examples/docs/popup.md

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var docs_popup = ({
  data: function data() {
    return {
      show: false,
      title: '标题'
    };
  },
  methods: {
    testPopup: function testPopup() {
      this.$popup(popup["a" /* default */]);
    },
    handlerActionSheet: function handlerActionSheet() {
      this.show = !this.show;
    },
    onSelected: function onSelected(item) {
      alert(item.name);
    }
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-0cbd5328","hasScoped":false,"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./node_modules/vue-markdown-loader/lib/markdown-compiler.js?raw!./examples/docs/popup.md
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',[_c('h3',[_vm._v("基本用法")]),_vm._v(" "),_c('hr'),_vm._v(" "),_c('div',{staticClass:"demon-block"},[_c('div',[_vm._v("这是个对话框")]),_vm._v(" "),_c('el-button',{on:{"click":_vm.testPopup}},[_vm._v("这是个bt")])],1),_vm._v(" "),_c('hr'),_vm._v(" "),_c('p',[_vm._v("基础用法\n通过v-model控制显示和隐藏")]),_vm._v(" "),_c('demo-block',[_c('div',{attrs:{"slot":"desc"},slot:"desc"},[_c('div',{staticClass:"demon-block"},[_c('yj-button',{attrs:{"type":"primary"},nativeOn:{"click":function($event){return _vm.handlerActionSheet($event)}}},[_vm._v("弹出菜单")]),_vm._v(" "),_c('action-sheet',{model:{value:(_vm.show),callback:function ($$v) {_vm.show=$$v},expression:"show"}})],1)]),_c('div',{attrs:{"slot":"highlight"},slot:"highlight"},[_c('pre',{pre:true},[_c('code',{pre:true,attrs:{"v-pre":"","class":"language-html"}},[_vm._v(" "),_c('span',{pre:true,attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{pre:true,attrs:{"class":"hljs-name"}},[_vm._v("div")]),_vm._v(" "),_c('span',{pre:true,attrs:{"class":"hljs-attr"}},[_vm._v("class")]),_vm._v("="),_c('span',{pre:true,attrs:{"class":"hljs-string"}},[_vm._v("\"demon-block\"")]),_vm._v(">")]),_vm._v("\n  "),_c('span',{pre:true,attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{pre:true,attrs:{"class":"hljs-name"}},[_vm._v("yj-button")]),_vm._v(" "),_c('span',{pre:true,attrs:{"class":"hljs-attr"}},[_vm._v("@click.native")]),_vm._v("="),_c('span',{pre:true,attrs:{"class":"hljs-string"}},[_vm._v("\"handlerActionSheet\"")]),_vm._v(" "),_c('span',{pre:true,attrs:{"class":"hljs-attr"}},[_vm._v("type")]),_vm._v("="),_c('span',{pre:true,attrs:{"class":"hljs-string"}},[_vm._v("\"primary\"")]),_vm._v(">")]),_vm._v("弹出菜单"),_c('span',{pre:true,attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{pre:true,attrs:{"class":"hljs-name"}},[_vm._v("yj-button")]),_vm._v(">")]),_vm._v("\n  "),_c('span',{pre:true,attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{pre:true,attrs:{"class":"hljs-name"}},[_vm._v("action-sheet")]),_vm._v(" "),_c('span',{pre:true,attrs:{"class":"hljs-attr"}},[_vm._v("v-model")]),_vm._v("="),_c('span',{pre:true,attrs:{"class":"hljs-string"}},[_vm._v("\"show\"")]),_vm._v(">")]),_c('span',{pre:true,attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{pre:true,attrs:{"class":"hljs-name"}},[_vm._v("action-sheet")]),_vm._v(">")]),_vm._v("\n"),_c('span',{pre:true,attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{pre:true,attrs:{"class":"hljs-name"}},[_vm._v("div")]),_vm._v(">")]),_vm._v("\n"),_c('span',{pre:true,attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{pre:true,attrs:{"class":"hljs-name"}},[_vm._v("script")]),_vm._v(">")]),_c('span',{pre:true,attrs:{"class":"javascript"}},[_vm._v("\n"),_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_vm._v("export")]),_vm._v(" "),_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_vm._v("default")]),_vm._v(" {\n   data(){\n     "),_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_vm._v("return")]),_vm._v("{\n       "),_c('span',{pre:true,attrs:{"class":"hljs-attr"}},[_vm._v("show")]),_vm._v(":"),_c('span',{pre:true,attrs:{"class":"hljs-literal"}},[_vm._v("false")]),_vm._v("\n     }\n  },\n  "),_c('span',{pre:true,attrs:{"class":"hljs-attr"}},[_vm._v("methods")]),_vm._v(":{\n    handlerActionSheet(){\n      "),_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_vm._v("this")]),_vm._v(".show = "),_c('span',{pre:true,attrs:{"class":"hljs-literal"}},[_vm._v("true")]),_vm._v("\n    }\n  }\n}\n")]),_c('span',{pre:true,attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{pre:true,attrs:{"class":"hljs-name"}},[_vm._v("script")]),_vm._v(">")]),_vm._v("\n\n")])])])]),_vm._v(" "),_c('h3',[_vm._v("prop")]),_vm._v(" "),_vm._m(0),_vm._v(" "),_c('h3',[_vm._v("Event")]),_vm._v(" "),_vm._m(1)],1)}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('table',{staticClass:"table"},[_c('thead',[_c('tr',[_c('th',[_vm._v("参数")]),_vm._v(" "),_c('th',[_vm._v("说明")]),_vm._v(" "),_c('th',[_vm._v("类型")]),_vm._v(" "),_c('th',[_vm._v("可选值")]),_vm._v(" "),_c('th',[_vm._v("默认值")])])]),_vm._v(" "),_c('tbody',[_c('tr',[_c('td',[_vm._v("type")]),_vm._v(" "),_c('td',[_vm._v("类型，可选值为 primary info warning danger")]),_vm._v(" "),_c('td',[_vm._v("String")]),_vm._v(" "),_c('td',[_vm._v("—")]),_vm._v(" "),_c('td',[_vm._v("default")])])])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('table',{staticClass:"table"},[_c('thead',[_c('tr',[_c('th',[_vm._v("事件名称")]),_vm._v(" "),_c('th',[_vm._v("说明")]),_vm._v(" "),_c('th',[_vm._v("回调参数")])])]),_vm._v(" "),_c('tbody',[_c('tr',[_c('td',[_vm._v("onclick")]),_vm._v(" "),_c('td',[_vm._v("点击按钮时触发")]),_vm._v(" "),_c('td',[_vm._v("—")])])])])}]
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var markdown_compilerraw_examples_docs_popup = (esExports);
// CONCATENATED MODULE: ./node_modules/vue-loader!./node_modules/vue-markdown-loader/lib/markdown-compiler.js?raw!./examples/docs/popup.md
var normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  docs_popup,
  markdown_compilerraw_examples_docs_popup,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var lib_markdown_compilerraw_examples_docs_popup = __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "wlvd":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("7V1f");

/***/ })

});
//# sourceMappingURL=2.e35483f5f097943dcdfc.js.map