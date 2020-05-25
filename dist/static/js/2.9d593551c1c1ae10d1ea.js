webpackJsonp([2],{

/***/ "NbD9":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("THo1");

/***/ }),

/***/ "THo1":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-7e5852eb","hasScoped":false,"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./node_modules/vue-markdown-loader/lib/markdown-compiler.js?raw!./examples/docs/start.md
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _vm._m(0)}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',[_c('h1',[_vm._v("快速上手")]),_vm._v(" "),_c('hr'),_vm._v(" "),_c('h2',[_vm._v("使用前准备")]),_vm._v(" "),_c('blockquote',[_c('p',[_vm._v("在使用之前，推荐学习 "),_c('code',{pre:true,attrs:{"class":"code_inline"}},[_vm._v("Vue")]),_vm._v(" 和 "),_c('code',{pre:true,attrs:{"class":"code_inline"}},[_vm._v("ES2015")]),_vm._v(" ，并正确配置 "),_c('code',{pre:true,attrs:{"class":"code_inline"}},[_vm._v("Node.js")]),_vm._v(" v6.x 或以上版本")])]),_vm._v(" "),_c('p',[_c('code',{pre:true,attrs:{"class":"code_inline"}},[_vm._v("xview")]),_vm._v(" 基于 "),_c('code',{pre:true,attrs:{"class":"code_inline"}},[_vm._v("Vue.js")]),_vm._v(" 2.x+ 版本开发，所以有必要了解以下基础知识：")]),_vm._v(" "),_c('ul',[_c('li',[_c('a',{attrs:{"href":"https://cn.vuejs.org/v2/guide/components.html"}},[_vm._v("Vue 组件")])]),_vm._v(" "),_c('li',[_c('a',{attrs:{"href":"https://cn.vuejs.org/v2/guide/single-file-components.html"}},[_vm._v("单文件组件")])])]),_vm._v(" "),_c('h2',[_vm._v("基于模板工程开发")]),_vm._v(" "),_c('blockquote',[_c('p',[_c('code',{pre:true,attrs:{"class":"code_inline"}},[_vm._v("Vue.js")]),_vm._v(" 提供一个官方命令行工具 "),_c('code',{pre:true,attrs:{"class":"code_inline"}},[_vm._v("vue-cli")]),_vm._v("，可用于快速搭建大型单页应用。该工具提供开箱即用的构建工具配置，带来现代化的前端开发流程。只需几分钟即可创建并启动一个带热重载、保存时静态检查以及可用于生产环境的构建配置的项目。")])]),_vm._v(" "),_c('pre',{pre:true},[_c('code',{pre:true,attrs:{"v-pre":"","class":"language-bash"}},[_vm._v("> npm i -g vue-cli\n> mkdir my-project && "),_c('span',{pre:true,attrs:{"class":"hljs-built_in"}},[_vm._v("cd")]),_vm._v(" my-project\n> vue init webpack\n> npm i && npm i element-ui\n")])]),_vm._v(" "),_c('h2',[_vm._v("标准开发")]),_vm._v(" "),_c('p',[_vm._v("实际项目中，往往会使用 "),_c('code',{pre:true,attrs:{"class":"code_inline"}},[_vm._v("webpack")]),_vm._v("，"),_c('code',{pre:true,attrs:{"class":"code_inline"}},[_vm._v("rollup")]),_vm._v(" 或者 "),_c('code',{pre:true,attrs:{"class":"code_inline"}},[_vm._v("gulp")]),_vm._v(" 的工作流，大多可以做到按需加载页面用到的组件，所以不推荐直接使用 "),_c('code',{pre:true,attrs:{"class":"code_inline"}},[_vm._v("<script>")]),_vm._v(" 标签全局引入的方式使用。")]),_vm._v(" "),_c('h3',[_vm._v("全局组件使用")]),_vm._v(" "),_c('p',[_vm._v("可以在项目的入口文件中引入所有组件或所需组件")]),_vm._v(" "),_c('pre',{pre:true},[_c('code',{pre:true,attrs:{"v-pre":"","class":"language-js"}},[_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_vm._v("import")]),_vm._v(" xview "),_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_vm._v("from")]),_vm._v(" "),_c('span',{pre:true,attrs:{"class":"hljs-string"}},[_vm._v("'xview'")]),_vm._v(" "),_c('span',{pre:true,attrs:{"class":"hljs-comment"}},[_vm._v("// 引入组件库")]),_vm._v("\n"),_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_vm._v("import")]),_vm._v(" "),_c('span',{pre:true,attrs:{"class":"hljs-string"}},[_vm._v("'../node_modules/xview/packages/theme-default/lib/index.css'")]),_vm._v(" "),_c('span',{pre:true,attrs:{"class":"hljs-comment"}},[_vm._v("// 引入样式库")]),_vm._v("\n\nVue.use(xview)\n")])]),_vm._v(" "),_c('h3',[_vm._v("单个组件按需使用")]),_vm._v(" "),_c('p',[_vm._v("可以局部注册所需的组件，适用于与其他框架组合使用的场景")]),_vm._v(" "),_c('pre',{pre:true},[_c('code',{pre:true,attrs:{"v-pre":"","class":"language-js"}},[_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_vm._v("import")]),_vm._v(" { xButton } "),_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_vm._v("from")]),_vm._v(" "),_c('span',{pre:true,attrs:{"class":"hljs-string"}},[_vm._v("'xview'")]),_vm._v("\n\n"),_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_vm._v("export")]),_vm._v(" "),_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_vm._v("default")]),_vm._v(" {\n  "),_c('span',{pre:true,attrs:{"class":"hljs-attr"}},[_vm._v("components")]),_vm._v(": {\n    xButton\n  }\n}\n")])]),_vm._v(" "),_c('p',[_vm._v("在模板中，用 "),_c('code',{pre:true,attrs:{"class":"code_inline"}},[_vm._v("<x-button></x-button>")]),_vm._v(" 自定义标签的方式使用组件")]),_vm._v(" "),_c('pre',{pre:true},[_c('code',{pre:true,attrs:{"v-pre":"","class":"language-html"}},[_c('span',{pre:true,attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{pre:true,attrs:{"class":"hljs-name"}},[_vm._v("template")]),_vm._v(">")]),_vm._v("\n  "),_c('span',{pre:true,attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{pre:true,attrs:{"class":"hljs-name"}},[_vm._v("div")]),_vm._v(">")]),_vm._v("\n    "),_c('span',{pre:true,attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{pre:true,attrs:{"class":"hljs-name"}},[_vm._v("x-button")]),_vm._v(">")]),_vm._v("这是一个按钮"),_c('span',{pre:true,attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{pre:true,attrs:{"class":"hljs-name"}},[_vm._v("x-button")]),_vm._v(">")]),_vm._v("\n  "),_c('span',{pre:true,attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{pre:true,attrs:{"class":"hljs-name"}},[_vm._v("div")]),_vm._v(">")]),_vm._v("\n"),_c('span',{pre:true,attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{pre:true,attrs:{"class":"hljs-name"}},[_vm._v("template")]),_vm._v(">")]),_vm._v("\n")])]),_vm._v(" "),_c('h2',[_vm._v("自定义主题")]),_vm._v(" "),_c('p',[_c('code',{pre:true,attrs:{"class":"code_inline"}},[_vm._v("xview")]),_vm._v(" 各个组件的样式变量都存放在 "),_c('code',{pre:true,attrs:{"class":"code_inline"}},[_vm._v("xview/packages/theme-defualt/common/var.css")]),_vm._v(" 文件中。用户可根据实际需要，自定义组件的样式")])])}]
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var start = (esExports);
// CONCATENATED MODULE: ./node_modules/vue-loader!./node_modules/vue-markdown-loader/lib/markdown-compiler.js?raw!./examples/docs/start.md
var normalizeComponent = __webpack_require__("VU/8")
/* script */
var __vue_script__ = null
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
  __vue_script__,
  start,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var docs_start = __webpack_exports__["default"] = (Component.exports);


/***/ })

});
//# sourceMappingURL=2.9d593551c1c1ae10d1ea.js.map