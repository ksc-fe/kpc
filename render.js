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
/******/ 			var chunk = require("./chunk/" + {"0":"abc3e863abf0460de541","1":"0af912f10237ee3b3f6e","2":"de02004a17af52af6923","3":"7f64dda384fa41d266f9"}[chunkId] + ".js");
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
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("@babel/runtime-corejs2/helpers/interopRequireDefault");

exports.__esModule = true;
exports.App = exports.default = void 0;

var _getOwnPropertyDescriptor = _interopRequireDefault(__webpack_require__("@babel/runtime-corejs2/core-js/object/get-own-property-descriptor"));

__webpack_require__("core-js/modules/es6.regexp.to-string");

__webpack_require__("core-js/modules/es6.date.to-string");

var _promise = _interopRequireDefault(__webpack_require__("@babel/runtime-corejs2/core-js/promise"));

var _createClass2 = _interopRequireDefault(__webpack_require__("@babel/runtime-corejs2/helpers/createClass"));

var _inheritsLoose2 = _interopRequireDefault(__webpack_require__("@babel/runtime-corejs2/helpers/inheritsLoose"));

var _defineProperty2 = _interopRequireDefault(__webpack_require__("@babel/runtime-corejs2/helpers/defineProperty"));

var _applyDecoratedDescriptor2 = _interopRequireDefault(__webpack_require__("@babel/runtime-corejs2/helpers/applyDecoratedDescriptor"));

var _intact = _interopRequireDefault(__webpack_require__("intact"));

var _index = _interopRequireDefault(__webpack_require__("./components/app/index.vdt"));

__webpack_require__("./styles/kpc.styl");

__webpack_require__("./components/app/index.styl");

var _dec, _class, _class2, _temp;

var App = (_dec = _intact.default.template(), (_class = (_temp = _class2 =
/*#__PURE__*/
function (_Intact) {
  (0, _inheritsLoose2.default)(App, _Intact);

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
      _intact.default.mount(this, this.get('container'));
    }
  };

  _proto._render = function _render(Page, data, string) {
    var _this = this;

    this._current = Page;
    return new _promise.default(function (resolve, reject) {
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
        _intact.default.hydrate(_this2, _this2.get('container'));

        cleanup && cleanup();
      }

      _this2.hideLoading();
    });
  };

  (0, _createClass2.default)(App, [{
    key: "template",
    get: function get() {
      return _index.default;
    }
  }]);
  return App;
}(_intact.default), (0, _defineProperty2.default)(_class2, "propTypes", {
  loading: Boolean
}), _temp), ((0, _applyDecoratedDescriptor2.default)(_class.prototype, "template", [_dec], (0, _getOwnPropertyDescriptor.default)(_class.prototype, "template"), _class.prototype)), _class));
exports.App = exports.default = App;

/***/ }),

/***/ "./components/app/index.styl":
/***/ (function(module, exports, __webpack_require__) {

// removed by extract-text-webpack-plugin
    if(false) {
      // 1547713991546
      var cssReload = require("!../../node_modules/css-hot-loader/hotModuleReplacement.js")(module.id, {"fileMap":"{fileName}"});
      module.hot.dispose(cssReload);
      module.hot.accept(undefined, cssReload);
    }
  

/***/ }),

/***/ "./components/app/index.vdt":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("@babel/runtime-corejs2/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = _default;

var _spin = _interopRequireDefault(__webpack_require__("./components/spin/index.js"));

function _default(obj, _Vdt, blocks, $callee) {
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
    }.call($this) ? h(_spin.default, {
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
}

/***/ }),

/***/ "./components/spin/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("@babel/runtime-corejs2/helpers/interopRequireDefault");

exports.__esModule = true;
exports.Spin = exports.default = void 0;

var _getOwnPropertyDescriptor = _interopRequireDefault(__webpack_require__("@babel/runtime-corejs2/core-js/object/get-own-property-descriptor"));

var _inheritsLoose2 = _interopRequireDefault(__webpack_require__("@babel/runtime-corejs2/helpers/inheritsLoose"));

var _defineProperty2 = _interopRequireDefault(__webpack_require__("@babel/runtime-corejs2/helpers/defineProperty"));

var _applyDecoratedDescriptor2 = _interopRequireDefault(__webpack_require__("@babel/runtime-corejs2/helpers/applyDecoratedDescriptor"));

var _intact = _interopRequireDefault(__webpack_require__("intact"));

var _index = _interopRequireDefault(__webpack_require__("./components/spin/index.vdt"));

__webpack_require__("./styles/kpc.styl");

__webpack_require__("./components/spin/index.styl");

var _dec, _class, _init, _class2, _temp;

var Spin = (_dec = _intact.default.template(), (_class = (_temp = _class2 =
/*#__PURE__*/
function (_Intact) {
  (0, _inheritsLoose2.default)(Spin, _Intact);

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
}(_intact.default), (0, _defineProperty2.default)(_class2, "template", _index.default), (0, _defineProperty2.default)(_class2, "propTypes", {
  size: ['large', 'default', 'small', 'mini'],
  center: Boolean,
  overlay: Boolean
}), _temp), ((0, _applyDecoratedDescriptor2.default)(_class, "template", [_dec], (_init = (0, _getOwnPropertyDescriptor.default)(_class, "template"), _init = _init ? _init.value : undefined, {
  enumerable: true,
  configurable: true,
  writable: true,
  initializer: function initializer() {
    return _init;
  }
}), _class)), _class));
exports.Spin = exports.default = Spin;

/***/ }),

/***/ "./components/spin/index.styl":
/***/ (function(module, exports, __webpack_require__) {

// removed by extract-text-webpack-plugin
    if(false) {
      // 1547714005520
      var cssReload = require("!../../node_modules/css-hot-loader/hotModuleReplacement.js")(module.id, {"fileMap":"{fileName}"});
      module.hot.dispose(cssReload);
      module.hot.accept(undefined, cssReload);
    }
  

/***/ }),

/***/ "./components/spin/index.vdt":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = _default;

function _default(obj, _Vdt, blocks, $callee) {
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
}

/***/ }),

/***/ "./components/utils.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("@babel/runtime-corejs2/helpers/interopRequireDefault");

exports.__esModule = true;
exports.addStyle = addStyle;
exports.kebabCase = kebabCase;
exports.proxyEvent = proxyEvent;
exports.isStringOrNumber = isStringOrNumber;
exports.isTextChildren = isTextChildren;
exports.isTextVNode = isTextVNode;
exports.isStringOrNumberNotEmpty = isStringOrNumberNotEmpty;
exports.getTextByChildren = getTextByChildren;
exports.findParentComponent = findParentComponent;
exports.strPad = strPad;
exports.range = range;
exports.selectInput = selectInput;
exports._$ = _$;
exports.localize = localize;
exports.getTransition = getTransition;
exports.mapChildren = mapChildren;
exports.toggleArray = toggleArray;
exports.isNumber = isNumber;
exports.nextFrame = nextFrame;
exports.throttle = throttle;
exports.browser = exports.expandAnimationCallbacks = exports.noop = exports.isFunction = exports.isObject = exports.isNullOrUndefined = exports.get = void 0;

var _parseInt2 = _interopRequireDefault(__webpack_require__("@babel/runtime-corejs2/core-js/parse-int"));

__webpack_require__("core-js/modules/es6.regexp.split");

__webpack_require__("core-js/modules/es6.regexp.to-string");

__webpack_require__("core-js/modules/es6.date.to-string");

__webpack_require__("core-js/modules/web.dom.iterable");

var _isArray = _interopRequireDefault(__webpack_require__("@babel/runtime-corejs2/core-js/array/is-array"));

__webpack_require__("core-js/modules/es6.regexp.replace");

var _assign = _interopRequireDefault(__webpack_require__("@babel/runtime-corejs2/core-js/object/assign"));

var _keys = _interopRequireDefault(__webpack_require__("@babel/runtime-corejs2/core-js/object/keys"));

var _intact = _interopRequireDefault(__webpack_require__("intact"));

var _babelTypes = __webpack_require__("babel-types");

var utils = _intact.default.utils;
var get = utils.get,
    isNullOrUndefined = utils.isNullOrUndefined,
    isObject = utils.isObject,
    isFunction = utils.isFunction,
    noop = utils.noop;
exports.noop = noop;
exports.isFunction = isFunction;
exports.isObject = isObject;
exports.isNullOrUndefined = isNullOrUndefined;
exports.get = get;
var Types = _intact.default.Vdt.miss.Types;

function addStyle(style, extra) {
  if (!style) return extra;
  if (!extra) return style;

  if (typeof style === 'string') {
    extra = (0, _keys.default)(extra).map(function (key) {
      return kebabCase(key) + ": " + extra[key];
    }).join(';');
    style = "" + style + (!style || /;\s*$/.test(style) ? '' : ';') + extra;
  } else {
    style = (0, _assign.default)({}, style, extra);
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

  if ((0, _isArray.default)(children)) {
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

    if (!(0, _isArray.default)(children)) {
      return vNodes.push(callback(children));
    }

    children.forEach(function (vNode) {
      if ((0, _isArray.default)(vNode)) {
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
exports.expandAnimationCallbacks = expandAnimationCallbacks;

function toggleArray(arr, value) {
  if (!(0, _isArray.default)(arr)) {
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
exports.browser = browser;

if (typeof navigator !== 'undefined') {
  var ua = navigator.userAgent.toLowerCase();
  var index = ua.indexOf('msie ');

  if (~index) {
    browser.isIE = true;
    var version = (0, _parseInt2.default)(ua.substring(index + 5, ua.indexOf('.', index)), 10);
    browser.version = version;
    browser.isIE8 = version === 8;
  } else if (~ua.indexOf('trident/')) {
    browser.isIE = true;
    var rv = ua.indexOf('rv:');
    browser.version = (0, _parseInt2.default)(ua.substring(rv + 3, ua.indexOf('.', rv)), 10);
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
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("@babel/runtime-corejs2/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _promise = _interopRequireDefault(__webpack_require__("@babel/runtime-corejs2/core-js/promise"));

var _isArray = _interopRequireDefault(__webpack_require__("@babel/runtime-corejs2/core-js/array/is-array"));

__webpack_require__("core-js/modules/es6.regexp.split");

__webpack_require__("core-js/modules/es6.string.repeat");

__webpack_require__("core-js/modules/es6.function.name");

__webpack_require__("core-js/modules/web.dom.iterable");

__webpack_require__("core-js/modules/es6.array.iterator");

var _assign = _interopRequireDefault(__webpack_require__("@babel/runtime-corejs2/core-js/object/assign"));

var _map = _interopRequireDefault(__webpack_require__("@babel/runtime-corejs2/core-js/map"));

var _pathToRegexp = _interopRequireDefault(__webpack_require__("path-to-regexp"));

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
var cache = new _map.default();

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
      pattern: (0, _pathToRegexp.default)(route.path || '', keys, {
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
  var params = (0, _assign.default)({}, parentParams);

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
    this.context = (0, _assign.default)({
      router: this
    }, options.context);
    this.root = (0, _isArray.default)(routes) ? {
      path: '',
      children: routes,
      parent: null
    } : routes;
    this.root.parent = null;
  }

  var _proto = UniversalRouter.prototype;

  _proto.resolve = function resolve(pathnameOrContext) {
    var context = (0, _assign.default)({}, this.context, typeof pathnameOrContext === 'string' ? {
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
          return _promise.default.resolve(null);
        }
      }

      if (matches.done) {
        return _promise.default.reject((0, _assign.default)(new Error('Page not found'), {
          context: context,
          status: 404,
          statusCode: 404
        }));
      }

      return _promise.default.resolve(resolve((0, _assign.default)({}, context, matches.value), matches.value.params)).then(function (result) {
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

UniversalRouter.pathToRegexp = _pathToRegexp.default;
UniversalRouter.matchPath = matchPath;
UniversalRouter.matchRoute = matchRoute;
UniversalRouter.resolveRoute = resolveRoute;
var _default = UniversalRouter;
exports.default = _default;

/***/ }),

/***/ "./site/src/main.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(Intact) {

var _utils = __webpack_require__("./components/utils.js");

// import en from 'kpc/i18n/en-US';
// localize(en);
Intact.Vdt.configure('delimiters', ['{{', '}}']);
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("intact")))

/***/ }),

/***/ "./site/src/render.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("@babel/runtime-corejs2/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = _default;

__webpack_require__("core-js/modules/es6.regexp.to-string");

__webpack_require__("core-js/modules/es6.date.to-string");

__webpack_require__("./site/src/main.js");

var _router = _interopRequireDefault(__webpack_require__("./site/src/router/index.js"));

var _app = _interopRequireDefault(__webpack_require__("./components/app/index.js"));

var _collect = __webpack_require__("node-style-loader/collect");

function _default(path) {
  return _router.default.resolve({
    pathname: path
  }).then(function (_ref) {
    var Page = _ref.Page,
        data = _ref.data;
    var $app = new _app.default();
    return $app.render(Page, data).then(function () {
      return {
        content: $app.toString(),
        style: (0, _collect.collectInitial)()
      };
    }).catch(function (e) {
      console.log(e.stack);
    });
  });
}

/***/ }),

/***/ "./site/src/router/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("@babel/runtime-corejs2/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _regenerator = _interopRequireDefault(__webpack_require__("@babel/runtime-corejs2/regenerator"));

__webpack_require__("regenerator-runtime/runtime");

var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__("@babel/runtime-corejs2/helpers/asyncToGenerator"));

var _universalRouter = _interopRequireDefault(__webpack_require__("./node_modules/universal-router/main.mjs"));

// const routes = require.context('./', false, /\.router.js$/).keys().map(key => {
// return {
// path: ``
// }
// })
var _default = new _universalRouter.default([{
  path: /^\/(kpc\/)?$/,
  action: function () {
    var _action = (0, _asyncToGenerator2.default)(
    /*#__PURE__*/
    _regenerator.default.mark(function _callee() {
      return _regenerator.default.wrap(function _callee$(_context) {
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
    var _action2 = (0, _asyncToGenerator2.default)(
    /*#__PURE__*/
    _regenerator.default.mark(function _callee2(context) {
      return _regenerator.default.wrap(function _callee2$(_context2) {
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
    var _action3 = (0, _asyncToGenerator2.default)(
    /*#__PURE__*/
    _regenerator.default.mark(function _callee3(context) {
      return _regenerator.default.wrap(function _callee3$(_context3) {
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
    var _action4 = (0, _asyncToGenerator2.default)(
    /*#__PURE__*/
    _regenerator.default.mark(function _callee4(context) {
      return _regenerator.default.wrap(function _callee4$(_context4) {
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
}]);

exports.default = _default;

/***/ }),

/***/ "./styles/kpc.styl":
/***/ (function(module, exports, __webpack_require__) {

// removed by extract-text-webpack-plugin
    if(false) {
      // 1547714007508
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

/***/ "@babel/runtime-corejs2/helpers/interopRequireDefault":
/***/ (function(module, exports) {

module.exports = require("@babel/runtime-corejs2/helpers/interopRequireDefault");

/***/ }),

/***/ "@babel/runtime-corejs2/helpers/interopRequireWildcard":
/***/ (function(module, exports) {

module.exports = require("@babel/runtime-corejs2/helpers/interopRequireWildcard");

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