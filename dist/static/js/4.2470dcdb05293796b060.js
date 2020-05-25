webpackJsonp([4],{

/***/ "EEYi":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./node_modules/vue-markdown-loader/lib/markdown-compiler.js?raw!./examples/docs/dialog.md
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
/* harmony default export */ var dialog = ({
  data: function data() {
    return {
      show: false,
      title: '标题'
    };
  },
  methods: {
    showAlert: function showAlert() {
      this.$dialog.alert({
        title: 'Alert！',
        content: '警告content!!是否继续?'
      }).then(function (res) {
        alert(res);
      }).catch(function (rej) {
        alert(rej);
      });
    },
    showConfirm: function showConfirm() {
      this.$dialog.confirm({
        title: 'Alert！',
        content: '确认content!!是否继续?'
      }).then(function (res) {
        alert(res);
      }).catch(function (rej) {
        alert(rej);
      });
    }
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-1f7dc959","hasScoped":false,"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./node_modules/vue-markdown-loader/lib/markdown-compiler.js?raw!./examples/docs/dialog.md
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',[_c('h3',[_vm._v("提示(alert)")]),_vm._v(" "),_c('hr'),_vm._v(" "),_c('div',{staticClass:"demon-block"},[_c('yj-button',{nativeOn:{"click":function($event){return _vm.showAlert($event)}}},[_vm._v("alert")])],1),_vm._v(" "),_c('demo-block',[_c('div',{attrs:{"slot":"desc"},slot:"desc"},[_c('div',{staticClass:"demon-block"},[_c('yj-button',{nativeOn:{"click":function($event){return _vm.showAlert($event)}}},[_vm._v("alert")])],1)]),_c('div',{attrs:{"slot":"highlight"},slot:"highlight"},[_c('pre',{pre:true},[_c('code',{pre:true,attrs:{"v-pre":"","class":"language-html"}},[_c('span',{pre:true,attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{pre:true,attrs:{"class":"hljs-name"}},[_vm._v("div")]),_vm._v(" "),_c('span',{pre:true,attrs:{"class":"hljs-attr"}},[_vm._v("class")]),_vm._v("="),_c('span',{pre:true,attrs:{"class":"hljs-string"}},[_vm._v("\"demon-block\"")]),_vm._v(">")]),_vm._v("\n    "),_c('span',{pre:true,attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{pre:true,attrs:{"class":"hljs-name"}},[_vm._v("yj-button")]),_vm._v(" "),_c('span',{pre:true,attrs:{"class":"hljs-attr"}},[_vm._v("@click.native")]),_vm._v("="),_c('span',{pre:true,attrs:{"class":"hljs-string"}},[_vm._v("\"showAlert\"")]),_vm._v(">")]),_vm._v("alert"),_c('span',{pre:true,attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{pre:true,attrs:{"class":"hljs-name"}},[_vm._v("yj-button")]),_vm._v(">")]),_vm._v("\n"),_c('span',{pre:true,attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{pre:true,attrs:{"class":"hljs-name"}},[_vm._v("div")]),_vm._v(">")]),_vm._v("\n"),_c('span',{pre:true,attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{pre:true,attrs:{"class":"hljs-name"}},[_vm._v("script")]),_vm._v(">")]),_c('span',{pre:true,attrs:{"class":"javascript"}},[_vm._v("\n"),_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_vm._v("export")]),_vm._v(" "),_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_vm._v("default")]),_vm._v(" {\n   data(){\n     "),_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_vm._v("return")]),_vm._v("{\n       "),_c('span',{pre:true,attrs:{"class":"hljs-attr"}},[_vm._v("show")]),_vm._v(":"),_c('span',{pre:true,attrs:{"class":"hljs-literal"}},[_vm._v("false")]),_vm._v(",\n       "),_c('span',{pre:true,attrs:{"class":"hljs-attr"}},[_vm._v("title")]),_vm._v(":"),_c('span',{pre:true,attrs:{"class":"hljs-string"}},[_vm._v("'标题'")]),_vm._v("\n     }\n  },\n  "),_c('span',{pre:true,attrs:{"class":"hljs-attr"}},[_vm._v("methods")]),_vm._v(":{\n    showAlert(){\n      "),_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_vm._v("this")]),_vm._v(".$dialog.alert({\n        "),_c('span',{pre:true,attrs:{"class":"hljs-attr"}},[_vm._v("title")]),_vm._v(":"),_c('span',{pre:true,attrs:{"class":"hljs-string"}},[_vm._v("'Alert！'")]),_vm._v(",\n        "),_c('span',{pre:true,attrs:{"class":"hljs-attr"}},[_vm._v("content")]),_vm._v(":"),_c('span',{pre:true,attrs:{"class":"hljs-string"}},[_vm._v("'警告content!!是否继续?'")]),_vm._v("\n      }).then("),_c('span',{pre:true,attrs:{"class":"hljs-function"}},[_c('span',{pre:true,attrs:{"class":"hljs-params"}},[_vm._v("res")]),_vm._v(" =>")]),_vm._v(" {\n        alert(res)\n      }).catch("),_c('span',{pre:true,attrs:{"class":"hljs-function"}},[_c('span',{pre:true,attrs:{"class":"hljs-params"}},[_vm._v("rej")]),_vm._v(" =>")]),_vm._v(" {\n        alert(rej)\n      })\n    }\n  }\n}\n")]),_c('span',{pre:true,attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{pre:true,attrs:{"class":"hljs-name"}},[_vm._v("script")]),_vm._v(">")]),_vm._v("\n\n")])])])]),_vm._v(" "),_c('h3',[_vm._v("确认提示(confrim)")]),_vm._v(" "),_c('hr'),_vm._v(" "),_c('div',{staticClass:"demon-block"},[_c('yj-button',{nativeOn:{"click":function($event){return _vm.showConfirm($event)}}},[_vm._v("confirm")])],1),_vm._v(" "),_c('demo-block',[_c('div',{attrs:{"slot":"desc"},slot:"desc"},[_c('div',{staticClass:"demon-block"},[_c('yj-button',{nativeOn:{"click":function($event){return _vm.showConfirm($event)}}},[_vm._v("alert")])],1)]),_c('div',{attrs:{"slot":"highlight"},slot:"highlight"},[_c('pre',{pre:true},[_c('code',{pre:true,attrs:{"v-pre":"","class":"language-html"}},[_c('span',{pre:true,attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{pre:true,attrs:{"class":"hljs-name"}},[_vm._v("div")]),_vm._v(" "),_c('span',{pre:true,attrs:{"class":"hljs-attr"}},[_vm._v("class")]),_vm._v("="),_c('span',{pre:true,attrs:{"class":"hljs-string"}},[_vm._v("\"demon-block\"")]),_vm._v(">")]),_vm._v("\n    "),_c('span',{pre:true,attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{pre:true,attrs:{"class":"hljs-name"}},[_vm._v("yj-button")]),_vm._v(" "),_c('span',{pre:true,attrs:{"class":"hljs-attr"}},[_vm._v("@click.native")]),_vm._v("="),_c('span',{pre:true,attrs:{"class":"hljs-string"}},[_vm._v("\"showConfirm\"")]),_vm._v(">")]),_vm._v("alert"),_c('span',{pre:true,attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{pre:true,attrs:{"class":"hljs-name"}},[_vm._v("yj-button")]),_vm._v(">")]),_vm._v("\n"),_c('span',{pre:true,attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{pre:true,attrs:{"class":"hljs-name"}},[_vm._v("div")]),_vm._v(">")]),_vm._v("\n"),_c('span',{pre:true,attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{pre:true,attrs:{"class":"hljs-name"}},[_vm._v("script")]),_vm._v(">")]),_c('span',{pre:true,attrs:{"class":"javascript"}},[_vm._v("\n"),_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_vm._v("export")]),_vm._v(" "),_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_vm._v("default")]),_vm._v(" {\n   data(){\n     "),_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_vm._v("return")]),_vm._v("{\n       "),_c('span',{pre:true,attrs:{"class":"hljs-attr"}},[_vm._v("show")]),_vm._v(":"),_c('span',{pre:true,attrs:{"class":"hljs-literal"}},[_vm._v("false")]),_vm._v(",\n       "),_c('span',{pre:true,attrs:{"class":"hljs-attr"}},[_vm._v("title")]),_vm._v(":"),_c('span',{pre:true,attrs:{"class":"hljs-string"}},[_vm._v("'标题'")]),_vm._v("\n     }\n  },\n  "),_c('span',{pre:true,attrs:{"class":"hljs-attr"}},[_vm._v("methods")]),_vm._v(":{\n    showConfirm(){\n      "),_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_vm._v("this")]),_vm._v(".$dialog.confirm({\n        "),_c('span',{pre:true,attrs:{"class":"hljs-attr"}},[_vm._v("title")]),_vm._v(":"),_c('span',{pre:true,attrs:{"class":"hljs-string"}},[_vm._v("'Alert！'")]),_vm._v(",\n        "),_c('span',{pre:true,attrs:{"class":"hljs-attr"}},[_vm._v("content")]),_vm._v(":"),_c('span',{pre:true,attrs:{"class":"hljs-string"}},[_vm._v("'确认content!!是否继续?'")]),_vm._v("\n      }).then("),_c('span',{pre:true,attrs:{"class":"hljs-function"}},[_c('span',{pre:true,attrs:{"class":"hljs-params"}},[_vm._v("res")]),_vm._v(" =>")]),_vm._v(" {\n        alert(res)\n      }).catch("),_c('span',{pre:true,attrs:{"class":"hljs-function"}},[_c('span',{pre:true,attrs:{"class":"hljs-params"}},[_vm._v("rej")]),_vm._v(" =>")]),_vm._v(" {\n        alert(rej)\n      })\n    }\n  }\n}\n")]),_c('span',{pre:true,attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{pre:true,attrs:{"class":"hljs-name"}},[_vm._v("script")]),_vm._v(">")]),_vm._v("\n\n")])])])]),_vm._v(" "),_c('h3',[_vm._v("prop")]),_vm._v(" "),_vm._m(0),_vm._v(" "),_c('h3',[_vm._v("Event")]),_vm._v(" "),_vm._m(1)],1)}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('table',{staticClass:"table"},[_c('thead',[_c('tr',[_c('th',[_vm._v("参数")]),_vm._v(" "),_c('th',[_vm._v("说明")]),_vm._v(" "),_c('th',[_vm._v("类型")]),_vm._v(" "),_c('th',[_vm._v("可选值")]),_vm._v(" "),_c('th',[_vm._v("默认值")])])]),_vm._v(" "),_c('tbody',[_c('tr',[_c('td',[_vm._v("title")]),_vm._v(" "),_c('td',[_vm._v("标题")]),_vm._v(" "),_c('td',[_vm._v("String")]),_vm._v(" "),_c('td',[_vm._v("—")]),_vm._v(" "),_c('td',[_vm._v("''")])]),_vm._v(" "),_c('tr',[_c('td',[_vm._v("content")]),_vm._v(" "),_c('td',[_vm._v("消息内容")]),_vm._v(" "),_c('td',[_vm._v("String/Html/VNode")]),_vm._v(" "),_c('td',[_vm._v("—")]),_vm._v(" "),_c('td',[_vm._v("''")])]),_vm._v(" "),_c('tr',[_c('td',[_vm._v("showClose")]),_vm._v(" "),_c('td',[_vm._v("是否显示关闭按钮")]),_vm._v(" "),_c('td',[_vm._v("Boolean")]),_vm._v(" "),_c('td',[_vm._v("—")]),_vm._v(" "),_c('td',[_vm._v("true")])])])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('table',{staticClass:"table"},[_c('thead',[_c('tr',[_c('th',[_vm._v("事件名称")]),_vm._v(" "),_c('th',[_vm._v("说明")]),_vm._v(" "),_c('th',[_vm._v("回调参数")])])]),_vm._v(" "),_c('tbody',[_c('tr',[_c('td',[_vm._v("onclick")]),_vm._v(" "),_c('td',[_vm._v("点击按钮时触发")]),_vm._v(" "),_c('td',[_vm._v("—")])])])])}]
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var docs_dialog = (esExports);
// CONCATENATED MODULE: ./node_modules/vue-loader!./node_modules/vue-markdown-loader/lib/markdown-compiler.js?raw!./examples/docs/dialog.md
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
  dialog,
  docs_dialog,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var markdown_compilerraw_examples_docs_dialog = __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "dbIc":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("EEYi");

/***/ })

});
//# sourceMappingURL=4.2470dcdb05293796b060.js.map