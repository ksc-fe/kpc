require("source-map-support").install();
module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		4: 0
/******/ 	};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		// "0" is the signal for "already loaded"
/******/ 		if(installedChunks[chunkId] !== 0) {
/******/ 			var chunk = require("./chunk/" + {"0":"b2bc60805f40e50c7c80","1":"dd3460a7eda346a72ea8","2":"9f0d3a3bc6e831df5136","3":"f902d9eb661a38df82d2"}[chunkId] + ".js");
/******/ 			var moreModules = chunk.modules, chunkIds = chunk.ids;
/******/ 			for(var moduleId in moreModules) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 			for(var i = 0; i < chunkIds.length; i++)
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 		}
/******/ 		return Promise.resolve();
/******/ 	};
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// uncatched error handler for webpack runtime
/******/ 	__webpack_require__.oe = function(err) {
/******/ 		process.nextTick(function() {
/******/ 			throw err; // catch this error by using System.import().catch()
/******/ 		});
/******/ 	};
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./site/src/render.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/app/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return App; });
/* unused harmony export App */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_corejs2_core_js_object_get_own_property_descriptor__ = __webpack_require__("@babel/runtime-corejs2/core-js/object/get-own-property-descriptor");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_corejs2_core_js_object_get_own_property_descriptor___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_corejs2_core_js_object_get_own_property_descriptor__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_modules_es6_regexp_to_string__ = __webpack_require__("core-js/modules/es6.regexp.to-string");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_modules_es6_regexp_to_string___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_core_js_modules_es6_regexp_to_string__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_modules_es6_date_to_string__ = __webpack_require__("core-js/modules/es6.date.to-string");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_modules_es6_date_to_string___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_core_js_modules_es6_date_to_string__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__babel_runtime_corejs2_core_js_promise__ = __webpack_require__("@babel/runtime-corejs2/core-js/promise");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__babel_runtime_corejs2_core_js_promise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__babel_runtime_corejs2_core_js_promise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__babel_runtime_corejs2_helpers_createClass__ = __webpack_require__("@babel/runtime-corejs2/helpers/createClass");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__babel_runtime_corejs2_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__babel_runtime_corejs2_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__babel_runtime_corejs2_helpers_inheritsLoose__ = __webpack_require__("@babel/runtime-corejs2/helpers/inheritsLoose");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__babel_runtime_corejs2_helpers_inheritsLoose___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__babel_runtime_corejs2_helpers_inheritsLoose__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__babel_runtime_corejs2_helpers_defineProperty__ = __webpack_require__("@babel/runtime-corejs2/helpers/defineProperty");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__babel_runtime_corejs2_helpers_defineProperty___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__babel_runtime_corejs2_helpers_defineProperty__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__babel_runtime_corejs2_helpers_applyDecoratedDescriptor__ = __webpack_require__("@babel/runtime-corejs2/helpers/applyDecoratedDescriptor");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__babel_runtime_corejs2_helpers_applyDecoratedDescriptor___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__babel_runtime_corejs2_helpers_applyDecoratedDescriptor__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_intact__ = __webpack_require__("intact");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_intact___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_intact__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__index_vdt__ = __webpack_require__("./components/app/index.vdt");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__styles_kpc_styl__ = __webpack_require__("./styles/kpc.styl");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__styles_kpc_styl___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10__styles_kpc_styl__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__index_styl__ = __webpack_require__("./components/app/index.styl");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__index_styl___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11__index_styl__);









var _dec, _class, _class2, _temp;





var App = (_dec = __WEBPACK_IMPORTED_MODULE_8_intact___default.a.template(), (_class = (_temp = _class2 =
/*#__PURE__*/
function (_Intact) {
  __WEBPACK_IMPORTED_MODULE_5__babel_runtime_corejs2_helpers_inheritsLoose___default()(App, _Intact);

  function App() {
    return _Intact.apply(this, arguments) || this;
  }

  var _proto = App.prototype;

  _proto.defaults = function defaults() {
    return {
      view: undefined,
      container: undefined,
      loading: false,
      ssr: false
    };
  };

  _proto.showLoading = function showLoading() {
    this.set('loading', true, {
      async: true
    });
  };

  _proto.hideLoading = function hideLoading() {
    this.set('loading', false, {
      async: true
    });
  };

  _proto._init = function _init() {
    if (!this.get('ssr') && this.get('container')) {
      __WEBPACK_IMPORTED_MODULE_8_intact___default.a.mount(this, this.get('container'));
    }
  };

  _proto._render = function _render(Page, data, string) {
    var _this = this;

    this._current = Page;
    return new __WEBPACK_IMPORTED_MODULE_3__babel_runtime_corejs2_core_js_promise___default.a(function (resolve, reject) {
      var page = new Page(data);
      page.$app = _this; // for debug

      global.__page = page;

      var done = function done() {
        if (_this._current === Page) {
          _this.set('view', page);
        }

        if (string) {
          resolve(_this.toString());
        } else {
          resolve();
        }
      };

      if (page.inited) {
        done();
      } else {
        page.on('$inited', done);
      }
    });
  };

  _proto.render = function render(Page, data) {
    return this._render(Page, data, true);
  };

  _proto.load = function load(Page, data, cleanup) {
    var _this2 = this;

    this.showLoading();
    return this._render(Page, data, false).then(function () {
      if (_this2.get('ssr') && !_this2.rendered) {
        __WEBPACK_IMPORTED_MODULE_8_intact___default.a.hydrate(_this2, _this2.get('container'));
        cleanup && cleanup();
      }

      _this2.hideLoading();
    });
  };

  __WEBPACK_IMPORTED_MODULE_4__babel_runtime_corejs2_helpers_createClass___default()(App, [{
    key: "template",
    get: function get() {
      return __WEBPACK_IMPORTED_MODULE_9__index_vdt__["a" /* default */];
    }
  }]);

  return App;
}(__WEBPACK_IMPORTED_MODULE_8_intact___default.a), __WEBPACK_IMPORTED_MODULE_6__babel_runtime_corejs2_helpers_defineProperty___default()(_class2, "propTypes", {
  loading: Boolean
}), _temp), (__WEBPACK_IMPORTED_MODULE_7__babel_runtime_corejs2_helpers_applyDecoratedDescriptor___default()(_class.prototype, "template", [_dec], __WEBPACK_IMPORTED_MODULE_0__babel_runtime_corejs2_core_js_object_get_own_property_descriptor___default()(_class.prototype, "template"), _class.prototype)), _class));



/***/ }),

/***/ "./components/app/index.styl":
/***/ (function(module, exports, __webpack_require__) {

// removed by extract-text-webpack-plugin
    if(false) {
      // 1546398140697
      var cssReload = require("!../../node_modules/css-hot-loader/hotModuleReplacement.js")(module.id, {"fileMap":"{fileName}"});
      module.hot.dispose(cssReload);
      module.hot.accept(undefined, cssReload);
    }
  

/***/ }),

/***/ "./components/app/index.vdt":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__spin__ = __webpack_require__("./components/spin/index.js");

/* harmony default export */ __webpack_exports__["a"] = (function (obj, _Vdt, blocks, $callee) {
  _Vdt || (_Vdt = Vdt);
  obj || (obj = {});
  blocks || (blocks = {});
  var h = _Vdt.miss.h,
      hc = _Vdt.miss.hc,
      hu = _Vdt.miss.hu,
      widgets = this && this.widgets || {},
      _blocks = {},
      __blocks = {},
      __u = _Vdt.utils,
      extend = __u.extend,
      _e = __u.error,
      _className = __u.className,
      __slice = __u.slice,
      __noop = __u.noop,
      __m = __u.map,
      __o = __u.Options,
      _getModel = __o.getModel,
      _setModel = __o.setModel,
      _setCheckboxModel = __u.setCheckboxModel,
      _detectCheckboxChecked = __u.detectCheckboxChecked,
      _setSelectModel = __u.setSelectModel,
      self = this.data,
      $this = this,
      scope = obj,
      Animate = self && self.Animate,
      parent = ($callee || {})._super;
  return h('div', null, [function () {
    try {
      return self.get('view');
    } catch (e) {
      _e(e);
    }
  }.call($this), (_blocks['loading'] = function (parent) {
    return function () {
      try {
        return self.get('loading');
      } catch (e) {
        _e(e);
      }
    }.call($this) ? h(__WEBPACK_IMPORTED_MODULE_0__spin__["a" /* default */], {
      'key': 'loading',
      'center': function () {
        try {
          return true;
        } catch (e) {
          _e(e);
        }
      }.call($this),
      'size': 'large',
      '_context': $this
    }) : undefined;
  }) && (__blocks['loading'] = function (parent) {
    var args = arguments;
    return blocks['loading'] ? blocks['loading'].apply($this, [function () {
      return _blocks['loading'].apply($this, args);
    }].concat(__slice.call(args, 1))) : _blocks['loading'].apply($this, args);
  }) && __blocks['loading'].apply($this, [__noop])], 'k-app');
});

/***/ }),

/***/ "./components/spin/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Spin; });
/* unused harmony export Spin */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_corejs2_core_js_object_get_own_property_descriptor__ = __webpack_require__("@babel/runtime-corejs2/core-js/object/get-own-property-descriptor");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_corejs2_core_js_object_get_own_property_descriptor___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_corejs2_core_js_object_get_own_property_descriptor__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_corejs2_helpers_inheritsLoose__ = __webpack_require__("@babel/runtime-corejs2/helpers/inheritsLoose");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_corejs2_helpers_inheritsLoose___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__babel_runtime_corejs2_helpers_inheritsLoose__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__babel_runtime_corejs2_helpers_defineProperty__ = __webpack_require__("@babel/runtime-corejs2/helpers/defineProperty");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__babel_runtime_corejs2_helpers_defineProperty___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__babel_runtime_corejs2_helpers_defineProperty__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__babel_runtime_corejs2_helpers_applyDecoratedDescriptor__ = __webpack_require__("@babel/runtime-corejs2/helpers/applyDecoratedDescriptor");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__babel_runtime_corejs2_helpers_applyDecoratedDescriptor___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__babel_runtime_corejs2_helpers_applyDecoratedDescriptor__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_intact__ = __webpack_require__("intact");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_intact___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_intact__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__index_vdt__ = __webpack_require__("./components/spin/index.vdt");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__styles_kpc_styl__ = __webpack_require__("./styles/kpc.styl");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__styles_kpc_styl___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__styles_kpc_styl__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__index_styl__ = __webpack_require__("./components/spin/index.styl");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__index_styl___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__index_styl__);





var _dec, _class, _init, _class2, _temp;





var Spin = (_dec = __WEBPACK_IMPORTED_MODULE_4_intact___default.a.template(), (_class = (_temp = _class2 =
/*#__PURE__*/
function (_Intact) {
  __WEBPACK_IMPORTED_MODULE_1__babel_runtime_corejs2_helpers_inheritsLoose___default()(Spin, _Intact);

  function Spin() {
    return _Intact.apply(this, arguments) || this;
  }

  var _proto = Spin.prototype;

  _proto.defaults = function defaults() {
    return {
      size: 'default',
      center: false,
      overlay: false
    };
  };

  return Spin;
}(__WEBPACK_IMPORTED_MODULE_4_intact___default.a), __WEBPACK_IMPORTED_MODULE_2__babel_runtime_corejs2_helpers_defineProperty___default()(_class2, "template", __WEBPACK_IMPORTED_MODULE_5__index_vdt__["a" /* default */]), __WEBPACK_IMPORTED_MODULE_2__babel_runtime_corejs2_helpers_defineProperty___default()(_class2, "propTypes", {
  size: ['large', 'default', 'small', 'mini'],
  center: Boolean,
  overlay: Boolean
}), _temp), (__WEBPACK_IMPORTED_MODULE_3__babel_runtime_corejs2_helpers_applyDecoratedDescriptor___default()(_class, "template", [_dec], (_init = __WEBPACK_IMPORTED_MODULE_0__babel_runtime_corejs2_core_js_object_get_own_property_descriptor___default()(_class, "template"), _init = _init ? _init.value : undefined, {
  enumerable: true,
  configurable: true,
  writable: true,
  initializer: function initializer() {
    return _init;
  }
}), _class)), _class));



/***/ }),

/***/ "./components/spin/index.styl":
/***/ (function(module, exports, __webpack_require__) {

// removed by extract-text-webpack-plugin
    if(false) {
      // 1546398142609
      var cssReload = require("!../../node_modules/css-hot-loader/hotModuleReplacement.js")(module.id, {"fileMap":"{fileName}"});
      module.hot.dispose(cssReload);
      module.hot.accept(undefined, cssReload);
    }
  

/***/ }),

/***/ "./components/spin/index.vdt":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function (obj, _Vdt, blocks, $callee) {
  var _classNameObj;

  _Vdt || (_Vdt = Vdt);
  obj || (obj = {});
  blocks || (blocks = {});
  var h = _Vdt.miss.h,
      hc = _Vdt.miss.hc,
      hu = _Vdt.miss.hu,
      widgets = this && this.widgets || {},
      _blocks = {},
      __blocks = {},
      __u = _Vdt.utils,
      extend = __u.extend,
      _e = __u.error,
      _className = __u.className,
      __slice = __u.slice,
      __noop = __u.noop,
      __m = __u.map,
      __o = __u.Options,
      _getModel = __o.getModel,
      _setModel = __o.setModel,
      _setCheckboxModel = __u.setCheckboxModel,
      _detectCheckboxChecked = __u.detectCheckboxChecked,
      _setSelectModel = __u.setSelectModel,
      self = this.data,
      $this = this,
      scope = obj,
      Animate = self && self.Animate,
      parent = ($callee || {})._super;

  var _self$get = self.get(),
      size = _self$get.size,
      center = _self$get.center,
      style = _self$get.style,
      className = _self$get.className,
      overlay = _self$get.overlay;

  var classNameObj = (_classNameObj = {
    'k-spin': true
  }, _classNameObj["k-" + size] = size !== 'default', _classNameObj['k-center'] = !overlay && center, _classNameObj[className] = className, _classNameObj['k-overlay'] = overlay, _classNameObj);
  var canvas = h('div', null, (_blocks['canvas'] = function (parent) {
    return h('svg', {
      'viewBox': '0 0 120 120'
    }, h('circle', {
      'cx': '60',
      'cy': '60',
      'r': '57'
    }, null, 'k-circle'));
  }) && (__blocks['canvas'] = function (parent) {
    var args = arguments;
    return blocks['canvas'] ? blocks['canvas'].apply($this, [function () {
      return _blocks['canvas'].apply($this, args);
    }].concat(__slice.call(args, 1))) : _blocks['canvas'].apply($this, args);
  }) && __blocks['canvas'].apply($this, [__noop]), 'k-canvas');
  return h(Animate, {
    'className': _className(function () {
      try {
        return classNameObj;
      } catch (e) {
        _e(e);
      }
    }.call($this)),
    'a:transition': 'c-fade',
    'style': function () {
      try {
        return style;
      } catch (e) {
        _e(e);
      }
    }.call($this),
    'children': function () {
      try {
        return overlay;
      } catch (e) {
        _e(e);
      }
    }.call($this) ? h('div', null, function () {
      try {
        return canvas;
      } catch (e) {
        _e(e);
      }
    }.call($this), 'k-wrapper') : function () {
      try {
        return canvas;
      } catch (e) {
        _e(e);
      }
    }.call($this),
    '_context': $this
  });
});

/***/ }),

/***/ "./components/utils.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "get", function() { return get; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isNullOrUndefined", function() { return isNullOrUndefined; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isObject", function() { return isObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isFunction", function() { return isFunction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "noop", function() { return noop; });
/* harmony export (immutable) */ __webpack_exports__["addStyle"] = addStyle;
/* harmony export (immutable) */ __webpack_exports__["kebabCase"] = kebabCase;
/* harmony export (immutable) */ __webpack_exports__["proxyEvent"] = proxyEvent;
/* harmony export (immutable) */ __webpack_exports__["isStringOrNumber"] = isStringOrNumber;
/* harmony export (immutable) */ __webpack_exports__["isTextChildren"] = isTextChildren;
/* harmony export (immutable) */ __webpack_exports__["isTextVNode"] = isTextVNode;
/* harmony export (immutable) */ __webpack_exports__["isStringOrNumberNotEmpty"] = isStringOrNumberNotEmpty;
/* harmony export (immutable) */ __webpack_exports__["getTextByChildren"] = getTextByChildren;
/* harmony export (immutable) */ __webpack_exports__["findParentComponent"] = findParentComponent;
/* harmony export (immutable) */ __webpack_exports__["strPad"] = strPad;
/* harmony export (immutable) */ __webpack_exports__["range"] = range;
/* harmony export (immutable) */ __webpack_exports__["selectInput"] = selectInput;
/* harmony export (immutable) */ __webpack_exports__["_$"] = _$;
/* harmony export (immutable) */ __webpack_exports__["localize"] = localize;
/* harmony export (immutable) */ __webpack_exports__["getTransition"] = getTransition;
/* harmony export (immutable) */ __webpack_exports__["mapChildren"] = mapChildren;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "expandAnimationCallbacks", function() { return expandAnimationCallbacks; });
/* harmony export (immutable) */ __webpack_exports__["toggleArray"] = toggleArray;
/* harmony export (immutable) */ __webpack_exports__["isNumber"] = isNumber;
/* harmony export (immutable) */ __webpack_exports__["nextFrame"] = nextFrame;
/* harmony export (immutable) */ __webpack_exports__["throttle"] = throttle;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "browser", function() { return browser; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_corejs2_core_js_parse_int__ = __webpack_require__("@babel/runtime-corejs2/core-js/parse-int");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_corejs2_core_js_parse_int___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_corejs2_core_js_parse_int__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_modules_es6_regexp_split__ = __webpack_require__("core-js/modules/es6.regexp.split");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_modules_es6_regexp_split___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_core_js_modules_es6_regexp_split__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_modules_es6_regexp_to_string__ = __webpack_require__("core-js/modules/es6.regexp.to-string");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_modules_es6_regexp_to_string___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_core_js_modules_es6_regexp_to_string__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_modules_es6_date_to_string__ = __webpack_require__("core-js/modules/es6.date.to-string");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_modules_es6_date_to_string___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_core_js_modules_es6_date_to_string__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_modules_web_dom_iterable__ = __webpack_require__("core-js/modules/web.dom.iterable");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_modules_web_dom_iterable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_core_js_modules_web_dom_iterable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__babel_runtime_corejs2_core_js_array_is_array__ = __webpack_require__("@babel/runtime-corejs2/core-js/array/is-array");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__babel_runtime_corejs2_core_js_array_is_array___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__babel_runtime_corejs2_core_js_array_is_array__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_modules_es6_regexp_replace__ = __webpack_require__("core-js/modules/es6.regexp.replace");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_modules_es6_regexp_replace___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_core_js_modules_es6_regexp_replace__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__babel_runtime_corejs2_core_js_object_assign__ = __webpack_require__("@babel/runtime-corejs2/core-js/object/assign");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__babel_runtime_corejs2_core_js_object_assign___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__babel_runtime_corejs2_core_js_object_assign__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__babel_runtime_corejs2_core_js_object_keys__ = __webpack_require__("@babel/runtime-corejs2/core-js/object/keys");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__babel_runtime_corejs2_core_js_object_keys___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8__babel_runtime_corejs2_core_js_object_keys__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_intact__ = __webpack_require__("intact");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_intact___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_intact__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_babel_types__ = __webpack_require__("babel-types");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_babel_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_babel_types__);











var utils = __WEBPACK_IMPORTED_MODULE_9_intact___default.a.utils;
var get = utils.get,
    isNullOrUndefined = utils.isNullOrUndefined,
    isObject = utils.isObject,
    isFunction = utils.isFunction,
    noop = utils.noop;
var Types = __WEBPACK_IMPORTED_MODULE_9_intact___default.a.Vdt.miss.Types;

function addStyle(style, extra) {
  if (!style) return extra;
  if (!extra) return style;

  if (typeof style === 'string') {
    extra = __WEBPACK_IMPORTED_MODULE_8__babel_runtime_corejs2_core_js_object_keys___default()(extra).map(function (key) {
      return kebabCase(key) + ": " + extra[key];
    }).join(';');
    style = "" + style + (!style || /;\s*$/.test(style) ? '' : ';') + extra;
  } else {
    style = __WEBPACK_IMPORTED_MODULE_7__babel_runtime_corejs2_core_js_object_assign___default()({}, style, extra);
  }

  return style;
}
var _cache = {};
var uppercasePattern = /[A-Z]/g;
function kebabCase(word) {
  if (!_cache[word]) {
    _cache[word] = word.replace(uppercasePattern, function (item) {
      return "-" + item.toLowerCase();
    });
  }

  return _cache[word];
}
function proxyEvent(component, name) {
  return function (e) {
    return component.trigger(name, e);
  };
}
function isStringOrNumber(o) {
  var type = typeof o;
  return type === 'string' || type === 'number';
}
function isTextChildren(o) {
  return isStringOrNumber(o) || isTextVNode(o);
}
function isTextVNode(o) {
  return o && o.type === Types.Text;
}
function isStringOrNumberNotEmpty(o) {
  var type = typeof o;
  return type === 'string' && !/^\s+$/.test(o) || type === 'number';
}
function getTextByChildren(children) {
  var ret = '';

  if (__WEBPACK_IMPORTED_MODULE_5__babel_runtime_corejs2_core_js_array_is_array___default()(children)) {
    children.forEach(function (vNode) {
      ret += getTextByChildren(vNode);
    });
  } else if (isStringOrNumber(children)) {
    ret += children;
  } else if (isTextVNode(children)) {
    ret += children.children;
  }

  return ret.trim();
}
function findParentComponent(Component, instance, isUntil) {
  var ret;
  var parent = instance.parentVNode;

  while (parent) {
    var tag = parent.tag;

    if (tag && (tag === Component || tag.prototype instanceof Component)) {
      ret = parent.children;
      if (isUntil) break;
    }

    parent = parent.parentVNode;
  }

  return ret;
}
function strPad(str, length, pad) {
  str = str.toString();
  pad = pad === undefined ? '0' : pad;
  var l = str.length;

  if (l < length) {
    str = new Array(length - l + 1).join(pad) + str;
  }

  return str;
}
function range(start, end) {
  return Array.apply(null, {
    length: end - start + 1
  }).map(function (v, i) {
    return i + start;
  });
}
function selectInput(input) {
  if (input.select) {
    input.select();
  } else if (input.setSelectionRange) {
    // mobile safari
    input.focus();
    input.setSelectionRange(0, input.value.length);
  }
}
var i18n = {};
var valueRegexp = /\{([^\}\s]+)\}/g;
function _$(key, data) {
  var value = get(i18n, key);

  if (isNullOrUndefined(value)) {
    value = key;
  }

  if (data) {
    value = value.replace(valueRegexp, function (nouse, variable) {
      var suffix;
      var index = variable.indexOf(':');

      if (index > 0) {
        suffix = variable.substr(0, index);
        suffix = suffix.split('|');
        variable = variable.substr(index + 1);
        variable = get(data, variable);

        if (variable > 1) {
          return suffix.length > 1 ? suffix[1] : suffix[0];
        } else {
          return suffix.length > 1 ? suffix[0] : '';
        }
      } else {
        variable = get(data, variable);
        return isNullOrUndefined(variable) ? nouse : variable;
      }
    });
  }

  return value;
}
function localize(data) {
  if (!isObject(data)) {
    throw new Error("expect a object but got " + data);
  }

  i18n = data;
}
function getTransition(feedback) {
  var horizontal = feedback.horizontal;
  var vertical = feedback.vertical;

  if (feedback.important === 'horizontal') {
    if (horizontal === 'left') {
      return 'c-slideright';
    } else if (horizontal === 'right') {
      return 'c-slideleft';
    } else if (vertical === 'bottom') {
      return 'c-slideup';
    } else if (vertical === 'top') {
      return 'c-slidedown';
    }
  } else {
    if (vertical === 'bottom') {
      return 'c-slideup';
    } else if (vertical === 'top') {
      return 'c-slidedown';
    } else if (horizontal === 'left') {
      return 'c-slideright';
    } else if (horizontal === 'right') {
      return 'c-slideleft';
    }
  }

  return 'c-slidedown';
}
function mapChildren(children, callback) {
  var vNodes = [];

  function map(children) {
    if (!children) return;

    if (!__WEBPACK_IMPORTED_MODULE_5__babel_runtime_corejs2_core_js_array_is_array___default()(children)) {
      return vNodes.push(callback(children));
    }

    children.forEach(function (vNode) {
      if (__WEBPACK_IMPORTED_MODULE_5__babel_runtime_corejs2_core_js_array_is_array___default()(vNode)) {
        map(vNode);
      } else if (vNode) {
        vNodes.push(callback(vNode));
      }
    });
  }

  map(children);
  return vNodes;
}
var expandAnimationCallbacks = {
  'a:transition': 'c-expand',
  'ev-a:leaveStart': function evALeaveStart(el) {
    return el.style.height = el.clientHeight + 'px';
  },
  'ev-a:leave': function evALeave(el) {
    return el.style.height = 0;
  },
  'ev-a:enterStart': function evAEnterStart(el) {
    el._height = el.clientHeight + 'px';
    el.style.height = 0;
  },
  'ev-a:enter': function evAEnter(el) {
    return el.style.height = el._height;
  },
  'ev-a:enterEnd': function evAEnterEnd(el) {
    return el.style.height = '';
  }
};
function toggleArray(arr, value) {
  if (!__WEBPACK_IMPORTED_MODULE_5__babel_runtime_corejs2_core_js_array_is_array___default()(arr)) {
    return [value];
  } else {
    arr = arr.slice(0);
    var index = arr.indexOf(value);

    if (~index) {
      arr.splice(index, 1);
    } else {
      arr.push(value);
    }

    return arr;
  }
}
function isNumber(n) {
  return typeof n === 'number';
}
var raf;

if (typeof window !== 'undefined') {
  raf = window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : setTimeout;
}

function nextFrame(fn) {
  raf(fn);
}
function throttle(fn, delay) {
  var timer;
  return function () {
    var args = arguments;
    var context = this;
    clearTimeout(timer);
    timer = setTimeout(function () {
      fn.apply(context, args);
    }, delay);
  };
}
var browser = {};

if (typeof navigator !== 'undefined') {
  var ua = navigator.userAgent.toLowerCase();
  var index = ua.indexOf('msie ');

  if (~index) {
    browser.isIE = true;

    var version = __WEBPACK_IMPORTED_MODULE_0__babel_runtime_corejs2_core_js_parse_int___default()(ua.substring(index + 5, ua.indexOf('.', index)), 10);

    browser.version = version;
    browser.isIE8 = version === 8;
  } else if (~ua.indexOf('trident/')) {
    browser.isIE = true;
    var rv = ua.indexOf('rv:');
    browser.version = __WEBPACK_IMPORTED_MODULE_0__babel_runtime_corejs2_core_js_parse_int___default()(ua.substring(rv + 3, ua.indexOf('.', rv)), 10);
  } else if (~ua.indexOf('edge')) {
    browser.isEdge = true;
  } else if (~ua.indexOf('safari')) {
    if (~ua.indexOf('chrome')) {
      browser.isChrome = true;
    } else {
      browser.isSafari = true;
    }
  }
}

/***/ }),

/***/ "./node_modules/universal-router/main.mjs":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_corejs2_core_js_promise__ = __webpack_require__("@babel/runtime-corejs2/core-js/promise");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_corejs2_core_js_promise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_corejs2_core_js_promise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_corejs2_core_js_array_is_array__ = __webpack_require__("@babel/runtime-corejs2/core-js/array/is-array");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_corejs2_core_js_array_is_array___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__babel_runtime_corejs2_core_js_array_is_array__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_modules_es6_regexp_split__ = __webpack_require__("core-js/modules/es6.regexp.split");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_modules_es6_regexp_split___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_core_js_modules_es6_regexp_split__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_modules_es6_string_repeat__ = __webpack_require__("core-js/modules/es6.string.repeat");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_modules_es6_string_repeat___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_core_js_modules_es6_string_repeat__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_modules_es6_function_name__ = __webpack_require__("core-js/modules/es6.function.name");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_modules_es6_function_name___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_core_js_modules_es6_function_name__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_modules_web_dom_iterable__ = __webpack_require__("core-js/modules/web.dom.iterable");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_modules_web_dom_iterable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_core_js_modules_web_dom_iterable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_modules_es6_array_iterator__ = __webpack_require__("core-js/modules/es6.array.iterator");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_modules_es6_array_iterator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_core_js_modules_es6_array_iterator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__babel_runtime_corejs2_core_js_object_assign__ = __webpack_require__("@babel/runtime-corejs2/core-js/object/assign");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__babel_runtime_corejs2_core_js_object_assign___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__babel_runtime_corejs2_core_js_object_assign__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__babel_runtime_corejs2_core_js_map__ = __webpack_require__("@babel/runtime-corejs2/core-js/map");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__babel_runtime_corejs2_core_js_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8__babel_runtime_corejs2_core_js_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_path_to_regexp__ = __webpack_require__("path-to-regexp");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_path_to_regexp___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_path_to_regexp__);










/*! Universal Router | MIT License | https://www.kriasoft.com/universal-router/ */

/**
 * Universal Router (https://www.kriasoft.com/universal-router/)
 *
 * Copyright © 2015-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the Apache 2.0 license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

var hasOwnProperty = Object.prototype.hasOwnProperty;
var cache = new __WEBPACK_IMPORTED_MODULE_8__babel_runtime_corejs2_core_js_map___default.a();

function decodeParam(val) {
  try {
    return decodeURIComponent(val);
  } catch (err) {
    return val;
  }
}

function matchPath(route, pathname, parentKeys, parentParams) {
  var end = !route.children;
  var cacheKey = (route.path || '') + "|" + end;
  var regexp = cache.get(cacheKey);

  if (!regexp) {
    var keys = [];
    regexp = {
      keys: keys,
      pattern: __WEBPACK_IMPORTED_MODULE_9_path_to_regexp___default()(route.path || '', keys, {
        end: end
      })
    };
    cache.set(cacheKey, regexp);
  }

  var m = regexp.pattern.exec(pathname);

  if (!m) {
    return null;
  }

  var path = m[0];

  var params = __WEBPACK_IMPORTED_MODULE_7__babel_runtime_corejs2_core_js_object_assign___default()({}, parentParams);

  for (var i = 1; i < m.length; i += 1) {
    var key = regexp.keys[i - 1];
    var prop = key.name;
    var value = m[i];

    if (value !== undefined || !hasOwnProperty.call(params, prop)) {
      if (key.repeat) {
        params[prop] = value ? value.split(key.delimiter).map(decodeParam) : [];
      } else {
        params[prop] = value ? decodeParam(value) : value;
      }
    }
  }

  return {
    path: !end && path.charAt(path.length - 1) === '/' ? path.substr(1) : path,
    keys: parentKeys.concat(regexp.keys),
    params: params
  };
}
/**
 * Universal Router (https://www.kriasoft.com/universal-router/)
 *
 * Copyright © 2015-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the Apache 2.0 license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */


function matchRoute(route, baseUrl, pathname, parentKeys, parentParams) {
  var match;
  var childMatches;
  var childIndex = 0;
  return {
    next: function next() {
      if (!match) {
        match = matchPath(route, pathname, parentKeys, parentParams);

        if (match) {
          return {
            done: false,
            value: {
              route: route,
              baseUrl: baseUrl,
              path: match.path,
              keys: match.keys,
              params: match.params
            }
          };
        }
      }

      if (match && route.children) {
        while (childIndex < route.children.length) {
          if (!childMatches) {
            var childRoute = route.children[childIndex];
            childRoute.parent = route;
            childMatches = matchRoute(childRoute, baseUrl + match.path, pathname.substr(match.path.length), match.keys, match.params);
          }

          var childMatch = childMatches.next();

          if (!childMatch.done) {
            return {
              done: false,
              value: childMatch.value
            };
          }

          childMatches = null;
          childIndex += 1;
        }
      }

      return {
        done: true
      };
    }
  };
}
/**
 * Universal Router (https://www.kriasoft.com/universal-router/)
 *
 * Copyright © 2015-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the Apache 2.0 license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */


function resolveRoute(context, params) {
  if (typeof context.route.action === 'function') {
    return context.route.action(context, params);
  }

  return null;
}
/**
 * Universal Router (https://www.kriasoft.com/universal-router/)
 *
 * Copyright © 2015-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the Apache 2.0 license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */


function isChildRoute(parentRoute, childRoute) {
  var route = childRoute;

  while (route) {
    route = route.parent;

    if (route === parentRoute) {
      return true;
    }
  }

  return false;
}

var UniversalRouter =
/*#__PURE__*/
function () {
  function UniversalRouter(routes, options) {
    if (options === void 0) {
      options = {};
    }

    if (Object(routes) !== routes) {
      throw new TypeError('Invalid routes');
    }

    this.baseUrl = options.baseUrl || '';
    this.resolveRoute = options.resolveRoute || resolveRoute;
    this.context = __WEBPACK_IMPORTED_MODULE_7__babel_runtime_corejs2_core_js_object_assign___default()({
      router: this
    }, options.context);
    this.root = __WEBPACK_IMPORTED_MODULE_1__babel_runtime_corejs2_core_js_array_is_array___default()(routes) ? {
      path: '',
      children: routes,
      parent: null
    } : routes;
    this.root.parent = null;
  }

  var _proto = UniversalRouter.prototype;

  _proto.resolve = function resolve(pathnameOrContext) {
    var context = __WEBPACK_IMPORTED_MODULE_7__babel_runtime_corejs2_core_js_object_assign___default()({}, this.context, typeof pathnameOrContext === 'string' ? {
      pathname: pathnameOrContext
    } : pathnameOrContext);

    var match = matchRoute(this.root, this.baseUrl, context.pathname.substr(this.baseUrl.length), [], null);
    var resolve = this.resolveRoute;
    var matches = null;
    var nextMatches = null;

    function next(resume, parent) {
      if (parent === void 0) {
        parent = matches.value.route;
      }

      matches = nextMatches || match.next();
      nextMatches = null;

      if (!resume) {
        if (matches.done || !isChildRoute(parent, matches.value.route)) {
          nextMatches = matches;
          return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_corejs2_core_js_promise___default.a.resolve(null);
        }
      }

      if (matches.done) {
        return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_corejs2_core_js_promise___default.a.reject(__WEBPACK_IMPORTED_MODULE_7__babel_runtime_corejs2_core_js_object_assign___default()(new Error('Page not found'), {
          context: context,
          status: 404,
          statusCode: 404
        }));
      }

      return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_corejs2_core_js_promise___default.a.resolve(resolve(__WEBPACK_IMPORTED_MODULE_7__babel_runtime_corejs2_core_js_object_assign___default()({}, context, matches.value), matches.value.params)).then(function (result) {
        if (result !== null && result !== undefined) {
          return result;
        }

        return next(resume, parent);
      });
    }

    context.next = next;
    return next(true, this.root);
  };

  return UniversalRouter;
}();

UniversalRouter.pathToRegexp = __WEBPACK_IMPORTED_MODULE_9_path_to_regexp___default.a;
UniversalRouter.matchPath = matchPath;
UniversalRouter.matchRoute = matchRoute;
UniversalRouter.resolveRoute = resolveRoute;
/* harmony default export */ __webpack_exports__["a"] = (UniversalRouter);

/***/ }),

/***/ "./site/src/main.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(Intact) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_kpc_components_utils__ = __webpack_require__("./components/utils.js");
 // import en from 'kpc/i18n/en-US';
// localize(en);

Intact.Vdt.configure('delimiters', ['{{', '}}']);
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("intact")))

/***/ }),

/***/ "./site/src/render.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_modules_es6_regexp_to_string__ = __webpack_require__("core-js/modules/es6.regexp.to-string");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_modules_es6_regexp_to_string___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_core_js_modules_es6_regexp_to_string__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_modules_es6_date_to_string__ = __webpack_require__("core-js/modules/es6.date.to-string");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_modules_es6_date_to_string___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_core_js_modules_es6_date_to_string__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__main__ = __webpack_require__("./site/src/main.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__router__ = __webpack_require__("./site/src/router/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_kpc_components_app__ = __webpack_require__("./components/app/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_node_style_loader_collect__ = __webpack_require__("node-style-loader/collect");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_node_style_loader_collect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_node_style_loader_collect__);






/* harmony default export */ __webpack_exports__["default"] = (function (path) {
  return __WEBPACK_IMPORTED_MODULE_3__router__["a" /* default */].resolve({
    pathname: path
  }).then(function (_ref) {
    var Page = _ref.Page,
        data = _ref.data;
    var $app = new __WEBPACK_IMPORTED_MODULE_4_kpc_components_app__["a" /* default */]();
    return $app.render(Page, data).then(function () {
      return {
        content: $app.toString(),
        style: Object(__WEBPACK_IMPORTED_MODULE_5_node_style_loader_collect__["collectInitial"])()
      };
    }).catch(function (e) {
      console.log(e.stack);
    });
  });
});

/***/ }),

/***/ "./site/src/router/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_corejs2_regenerator__ = __webpack_require__("@babel/runtime-corejs2/regenerator");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_corejs2_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_corejs2_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_regenerator_runtime_runtime__ = __webpack_require__("regenerator-runtime/runtime");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_regenerator_runtime_runtime___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_regenerator_runtime_runtime__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__babel_runtime_corejs2_helpers_asyncToGenerator__ = __webpack_require__("@babel/runtime-corejs2/helpers/asyncToGenerator");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__babel_runtime_corejs2_helpers_asyncToGenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__babel_runtime_corejs2_helpers_asyncToGenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_universal_router__ = __webpack_require__("./node_modules/universal-router/main.mjs");



 // const routes = require.context('./', false, /\.router.js$/).keys().map(key => {
// return {
// path: ``
// }
// })

/* harmony default export */ __webpack_exports__["a"] = (new __WEBPACK_IMPORTED_MODULE_3_universal_router__["a" /* default */]([{
  path: /^\/(kpc\/)?$/,
  action: function () {
    var _action = __WEBPACK_IMPORTED_MODULE_2__babel_runtime_corejs2_helpers_asyncToGenerator___default()(
    /*#__PURE__*/
    __WEBPACK_IMPORTED_MODULE_0__babel_runtime_corejs2_regenerator___default.a.mark(function _callee() {
      return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_corejs2_regenerator___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return __webpack_require__.e/* import() */(3).then(__webpack_require__.bind(null, "./site/src/pages/index/index.js"));

            case 2:
              _context.t0 = _context.sent.default;
              return _context.abrupt("return", {
                Page: _context.t0
              });

            case 4:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this);
    }));

    function action() {
      return _action.apply(this, arguments);
    }

    return action;
  }()
}, {
  path: /^(?:\/kpc)?(\/docs\/design\/.*)$/,
  action: function () {
    var _action2 = __WEBPACK_IMPORTED_MODULE_2__babel_runtime_corejs2_helpers_asyncToGenerator___default()(
    /*#__PURE__*/
    __WEBPACK_IMPORTED_MODULE_0__babel_runtime_corejs2_regenerator___default.a.mark(function _callee2(context) {
      return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_corejs2_regenerator___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return __webpack_require__.e/* import() */(0).then(__webpack_require__.bind(null, "./site/src/pages/design/index.js"));

            case 2:
              _context2.t0 = _context2.sent.default;
              _context2.t1 = {
                path: context.params[0]
              };
              return _context2.abrupt("return", {
                Page: _context2.t0,
                data: _context2.t1
              });

            case 5:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, this);
    }));

    function action(_x) {
      return _action2.apply(this, arguments);
    }

    return action;
  }()
}, {
  path: /^(?:\/kpc)?(\/docs\/blogs\/.*)$/,
  action: function () {
    var _action3 = __WEBPACK_IMPORTED_MODULE_2__babel_runtime_corejs2_helpers_asyncToGenerator___default()(
    /*#__PURE__*/
    __WEBPACK_IMPORTED_MODULE_0__babel_runtime_corejs2_regenerator___default.a.mark(function _callee3(context) {
      return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_corejs2_regenerator___default.a.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return __webpack_require__.e/* import() */(1).then(__webpack_require__.bind(null, "./site/src/pages/blog/index.js"));

            case 2:
              _context3.t0 = _context3.sent.default;
              _context3.t1 = {
                path: context.params[0]
              };
              return _context3.abrupt("return", {
                Page: _context3.t0,
                data: _context3.t1
              });

            case 5:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, this);
    }));

    function action(_x2) {
      return _action3.apply(this, arguments);
    }

    return action;
  }()
}, {
  path: /(.*)/,
  action: function () {
    var _action4 = __WEBPACK_IMPORTED_MODULE_2__babel_runtime_corejs2_helpers_asyncToGenerator___default()(
    /*#__PURE__*/
    __WEBPACK_IMPORTED_MODULE_0__babel_runtime_corejs2_regenerator___default.a.mark(function _callee4(context) {
      return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_corejs2_regenerator___default.a.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _context4.next = 2;
              return __webpack_require__.e/* import() */(2).then(__webpack_require__.bind(null, "./site/src/pages/document/index.js"));

            case 2:
              _context4.t0 = _context4.sent.default;
              _context4.t1 = {
                path: context.params[0]
              };
              return _context4.abrupt("return", {
                Page: _context4.t0,
                data: _context4.t1
              });

            case 5:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4, this);
    }));

    function action(_x3) {
      return _action4.apply(this, arguments);
    }

    return action;
  }()
}]));

/***/ }),

/***/ "./styles/kpc.styl":
/***/ (function(module, exports, __webpack_require__) {

// removed by extract-text-webpack-plugin
    if(false) {
      // 1546398143140
      var cssReload = require("!../node_modules/css-hot-loader/hotModuleReplacement.js")(module.id, {"fileMap":"{fileName}"});
      module.hot.dispose(cssReload);
      module.hot.accept(undefined, cssReload);
    }
  

/***/ }),

/***/ "@babel/runtime-corejs2/core-js/array/from":
/***/ (function(module, exports) {

module.exports = require("@babel/runtime-corejs2/core-js/array/from");

/***/ }),

/***/ "@babel/runtime-corejs2/core-js/array/is-array":
/***/ (function(module, exports) {

module.exports = require("@babel/runtime-corejs2/core-js/array/is-array");

/***/ }),

/***/ "@babel/runtime-corejs2/core-js/json/stringify":
/***/ (function(module, exports) {

module.exports = require("@babel/runtime-corejs2/core-js/json/stringify");

/***/ }),

/***/ "@babel/runtime-corejs2/core-js/map":
/***/ (function(module, exports) {

module.exports = require("@babel/runtime-corejs2/core-js/map");

/***/ }),

/***/ "@babel/runtime-corejs2/core-js/number/is-nan":
/***/ (function(module, exports) {

module.exports = require("@babel/runtime-corejs2/core-js/number/is-nan");

/***/ }),

/***/ "@babel/runtime-corejs2/core-js/object/assign":
/***/ (function(module, exports) {

module.exports = require("@babel/runtime-corejs2/core-js/object/assign");

/***/ }),

/***/ "@babel/runtime-corejs2/core-js/object/get-own-property-descriptor":
/***/ (function(module, exports) {

module.exports = require("@babel/runtime-corejs2/core-js/object/get-own-property-descriptor");

/***/ }),

/***/ "@babel/runtime-corejs2/core-js/object/keys":
/***/ (function(module, exports) {

module.exports = require("@babel/runtime-corejs2/core-js/object/keys");

/***/ }),

/***/ "@babel/runtime-corejs2/core-js/parse-float":
/***/ (function(module, exports) {

module.exports = require("@babel/runtime-corejs2/core-js/parse-float");

/***/ }),

/***/ "@babel/runtime-corejs2/core-js/parse-int":
/***/ (function(module, exports) {

module.exports = require("@babel/runtime-corejs2/core-js/parse-int");

/***/ }),

/***/ "@babel/runtime-corejs2/core-js/promise":
/***/ (function(module, exports) {

module.exports = require("@babel/runtime-corejs2/core-js/promise");

/***/ }),

/***/ "@babel/runtime-corejs2/core-js/set":
/***/ (function(module, exports) {

module.exports = require("@babel/runtime-corejs2/core-js/set");

/***/ }),

/***/ "@babel/runtime-corejs2/helpers/applyDecoratedDescriptor":
/***/ (function(module, exports) {

module.exports = require("@babel/runtime-corejs2/helpers/applyDecoratedDescriptor");

/***/ }),

/***/ "@babel/runtime-corejs2/helpers/asyncToGenerator":
/***/ (function(module, exports) {

module.exports = require("@babel/runtime-corejs2/helpers/asyncToGenerator");

/***/ }),

/***/ "@babel/runtime-corejs2/helpers/construct":
/***/ (function(module, exports) {

module.exports = require("@babel/runtime-corejs2/helpers/construct");

/***/ }),

/***/ "@babel/runtime-corejs2/helpers/createClass":
/***/ (function(module, exports) {

module.exports = require("@babel/runtime-corejs2/helpers/createClass");

/***/ }),

/***/ "@babel/runtime-corejs2/helpers/defineProperty":
/***/ (function(module, exports) {

module.exports = require("@babel/runtime-corejs2/helpers/defineProperty");

/***/ }),

/***/ "@babel/runtime-corejs2/helpers/inheritsLoose":
/***/ (function(module, exports) {

module.exports = require("@babel/runtime-corejs2/helpers/inheritsLoose");

/***/ }),

/***/ "@babel/runtime-corejs2/helpers/objectWithoutPropertiesLoose":
/***/ (function(module, exports) {

module.exports = require("@babel/runtime-corejs2/helpers/objectWithoutPropertiesLoose");

/***/ }),

/***/ "@babel/runtime-corejs2/regenerator":
/***/ (function(module, exports) {

module.exports = require("@babel/runtime-corejs2/regenerator");

/***/ }),

/***/ "babel-types":
/***/ (function(module, exports) {

module.exports = require("babel-types");

/***/ }),

/***/ "chroma-js":
/***/ (function(module, exports) {

module.exports = require("chroma-js");

/***/ }),

/***/ "core-js/modules/es6.array.find":
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es6.array.find");

/***/ }),

/***/ "core-js/modules/es6.array.find-index":
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es6.array.find-index");

/***/ }),

/***/ "core-js/modules/es6.array.iterator":
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es6.array.iterator");

/***/ }),

/***/ "core-js/modules/es6.array.sort":
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es6.array.sort");

/***/ }),

/***/ "core-js/modules/es6.date.to-string":
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es6.date.to-string");

/***/ }),

/***/ "core-js/modules/es6.function.name":
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es6.function.name");

/***/ }),

/***/ "core-js/modules/es6.number.constructor":
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es6.number.constructor");

/***/ }),

/***/ "core-js/modules/es6.regexp.constructor":
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es6.regexp.constructor");

/***/ }),

/***/ "core-js/modules/es6.regexp.match":
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es6.regexp.match");

/***/ }),

/***/ "core-js/modules/es6.regexp.replace":
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es6.regexp.replace");

/***/ }),

/***/ "core-js/modules/es6.regexp.search":
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es6.regexp.search");

/***/ }),

/***/ "core-js/modules/es6.regexp.split":
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es6.regexp.split");

/***/ }),

/***/ "core-js/modules/es6.regexp.to-string":
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es6.regexp.to-string");

/***/ }),

/***/ "core-js/modules/es6.string.fixed":
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es6.string.fixed");

/***/ }),

/***/ "core-js/modules/es6.string.includes":
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es6.string.includes");

/***/ }),

/***/ "core-js/modules/es6.string.iterator":
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es6.string.iterator");

/***/ }),

/***/ "core-js/modules/es6.string.repeat":
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es6.string.repeat");

/***/ }),

/***/ "core-js/modules/es7.array.includes":
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es7.array.includes");

/***/ }),

/***/ "core-js/modules/web.dom.iterable":
/***/ (function(module, exports) {

module.exports = require("core-js/modules/web.dom.iterable");

/***/ }),

/***/ "downloadjs":
/***/ (function(module, exports) {

module.exports = require("downloadjs");

/***/ }),

/***/ "enquire.js":
/***/ (function(module, exports) {

module.exports = require("enquire.js");

/***/ }),

/***/ "intact":
/***/ (function(module, exports) {

module.exports = require("intact");

/***/ }),

/***/ "mermaid":
/***/ (function(module, exports) {

module.exports = require("mermaid");

/***/ }),

/***/ "node-style-loader/collect":
/***/ (function(module, exports) {

module.exports = require("node-style-loader/collect");

/***/ }),

/***/ "path-to-regexp":
/***/ (function(module, exports) {

module.exports = require("path-to-regexp");

/***/ }),

/***/ "regenerator-runtime/runtime":
/***/ (function(module, exports) {

module.exports = require("regenerator-runtime/runtime");

/***/ }),

/***/ "resize-observer-polyfill":
/***/ (function(module, exports) {

module.exports = require("resize-observer-polyfill");

/***/ })

/******/ });