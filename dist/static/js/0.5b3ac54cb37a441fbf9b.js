webpackJsonp([0],{

/***/ "YY9M":
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__("q0qZ");
var defineProperty = __webpack_require__("1rEs").f;

var FunctionPrototype = Function.prototype;
var FunctionPrototypeToString = FunctionPrototype.toString;
var nameRE = /^\s*function ([^ (]*)/;
var NAME = 'name';

// Function instances `.name` property
// https://tc39.github.io/ecma262/#sec-function-instances-name
if (DESCRIPTORS && !(NAME in FunctionPrototype)) {
  defineProperty(FunctionPrototype, NAME, {
    configurable: true,
    get: function () {
      try {
        return FunctionPrototypeToString.call(this).match(nameRE)[1];
      } catch (error) {
        return '';
      }
    }
  });
}


/***/ })

});
//# sourceMappingURL=0.5b3ac54cb37a441fbf9b.js.map