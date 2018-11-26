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
/******/ 			var chunk = require("./chunk/" + {"0":"b09450b50c0e140a7987","1":"47536c8fe6441b46df29","2":"262b2919db76f6a4890e","3":"6ec4d7e9bca100373847"}[chunkId] + ".js");
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
/******/ 	__webpack_require__.p = "/kpc/";
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


exports.__esModule = true;
exports.App = exports.default = undefined;

var _getOwnPropertyDescriptor = __webpack_require__("babel-runtime/core-js/object/get-own-property-descriptor");

var _getOwnPropertyDescriptor2 = _interopRequireDefault(_getOwnPropertyDescriptor);

var _promise = __webpack_require__("babel-runtime/core-js/promise");

var _promise2 = _interopRequireDefault(_promise);

var _classCallCheck2 = __webpack_require__("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__("babel-runtime/helpers/possibleConstructorReturn");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__("babel-runtime/helpers/inherits");

var _inherits3 = _interopRequireDefault(_inherits2);

var _dec, _desc, _value, _class, _class2, _temp;

var _intact = __webpack_require__("intact");

var _intact2 = _interopRequireDefault(_intact);

var _index = __webpack_require__("./components/app/index.vdt");

var _index2 = _interopRequireDefault(_index);

__webpack_require__("./styles/kpc.styl");

__webpack_require__("./components/app/index.styl");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
    var desc = {};
    Object['ke' + 'ys'](descriptor).forEach(function (key) {
        desc[key] = descriptor[key];
    });
    desc.enumerable = !!desc.enumerable;
    desc.configurable = !!desc.configurable;

    if ('value' in desc || desc.initializer) {
        desc.writable = true;
    }

    desc = decorators.slice().reverse().reduce(function (desc, decorator) {
        return decorator(target, property, desc) || desc;
    }, desc);

    if (context && desc.initializer !== void 0) {
        desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
        desc.initializer = undefined;
    }

    if (desc.initializer === void 0) {
        Object['define' + 'Property'](target, property, desc);
        desc = null;
    }

    return desc;
}

var App = (_dec = _intact2.default.template(), (_class = (_temp = _class2 = function (_Intact) {
    (0, _inherits3.default)(App, _Intact);

    function App() {
        (0, _classCallCheck3.default)(this, App);
        return (0, _possibleConstructorReturn3.default)(this, _Intact.apply(this, arguments));
    }

    App.prototype.defaults = function defaults() {
        return {
            view: undefined,
            container: undefined,
            loading: false,
            ssr: false
        };
    };

    App.prototype.showLoading = function showLoading() {
        this.set('loading', true, { async: true });
    };

    App.prototype.hideLoading = function hideLoading() {
        this.set('loading', false, { async: true });
    };

    App.prototype._init = function _init() {
        if (!this.get('ssr') && this.get('container')) {
            _intact2.default.mount(this, this.get('container'));
        }
    };

    App.prototype._render = function _render(Page, data, string) {
        var _this2 = this;

        this._current = Page;
        return new _promise2.default(function (resolve, reject) {
            var page = new Page(data);
            page.$app = _this2;

            // for debug
            global.__page = page;

            var done = function done() {
                if (_this2._current === Page) {
                    _this2.set('view', page);
                }
                if (string) {
                    resolve(_this2.toString());
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

    App.prototype.render = function render(Page, data) {
        return this._render(Page, data, true);
    };

    App.prototype.load = function load(Page, data, cleanup) {
        var _this3 = this;

        this.showLoading();
        return this._render(Page, data, false).then(function () {
            if (_this3.get('ssr') && !_this3.rendered) {
                _intact2.default.hydrate(_this3, _this3.get('container'));
                cleanup && cleanup();
            }
            _this3.hideLoading();
        });
    };

    (0, _createClass3.default)(App, [{
        key: 'template',
        get: function get() {
            return _index2.default;
        }
    }]);
    return App;
}(_intact2.default), _class2.propTypes = {
    loading: Boolean
}, _temp), (_applyDecoratedDescriptor(_class.prototype, 'template', [_dec], (0, _getOwnPropertyDescriptor2.default)(_class.prototype, 'template'), _class.prototype)), _class));
exports.default = App;
exports.App = App;

/***/ }),

/***/ "./components/app/index.styl":
/***/ (function(module, exports, __webpack_require__) {

// removed by extract-text-webpack-plugin
    if(false) {
      // 1543202239848
      var cssReload = require("!../../node_modules/css-hot-loader/hotModuleReplacement.js")(module.id, {"fileMap":"{fileName}"});
      module.hot.dispose(cssReload);
      module.hot.accept(undefined, cssReload);
    }
  

/***/ }),

/***/ "./components/app/index.vdt":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

exports.default = function (obj, _Vdt, blocks, $callee) {
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
        }.call($this) ? h(_spin2.default, {
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
};

var _spin = __webpack_require__("./components/spin/index.js");

var _spin2 = _interopRequireDefault(_spin);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = exports['default'];

/***/ }),

/***/ "./components/spin/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.Spin = exports.default = undefined;

var _getOwnPropertyDescriptor = __webpack_require__("babel-runtime/core-js/object/get-own-property-descriptor");

var _getOwnPropertyDescriptor2 = _interopRequireDefault(_getOwnPropertyDescriptor);

var _classCallCheck2 = __webpack_require__("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__("babel-runtime/helpers/possibleConstructorReturn");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__("babel-runtime/helpers/inherits");

var _inherits3 = _interopRequireDefault(_inherits2);

var _dec, _desc, _value, _class, _init, _class2, _temp;

var _intact = __webpack_require__("intact");

var _intact2 = _interopRequireDefault(_intact);

var _index = __webpack_require__("./components/spin/index.vdt");

var _index2 = _interopRequireDefault(_index);

__webpack_require__("./styles/kpc.styl");

__webpack_require__("./components/spin/index.styl");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
    var desc = {};
    Object['ke' + 'ys'](descriptor).forEach(function (key) {
        desc[key] = descriptor[key];
    });
    desc.enumerable = !!desc.enumerable;
    desc.configurable = !!desc.configurable;

    if ('value' in desc || desc.initializer) {
        desc.writable = true;
    }

    desc = decorators.slice().reverse().reduce(function (desc, decorator) {
        return decorator(target, property, desc) || desc;
    }, desc);

    if (context && desc.initializer !== void 0) {
        desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
        desc.initializer = undefined;
    }

    if (desc.initializer === void 0) {
        Object['define' + 'Property'](target, property, desc);
        desc = null;
    }

    return desc;
}

var Spin = (_dec = _intact2.default.template(), (_class = (_temp = _class2 = function (_Intact) {
    (0, _inherits3.default)(Spin, _Intact);

    function Spin() {
        (0, _classCallCheck3.default)(this, Spin);
        return (0, _possibleConstructorReturn3.default)(this, _Intact.apply(this, arguments));
    }

    Spin.prototype.defaults = function defaults() {
        return {
            size: 'default',
            center: false,
            overlay: false
        };
    };

    return Spin;
}(_intact2.default), _class2.template = _index2.default, _class2.propTypes = {
    size: ['large', 'default', 'small', 'mini'],
    center: Boolean,
    overlay: Boolean
}, _temp), (_applyDecoratedDescriptor(_class, 'template', [_dec], (_init = (0, _getOwnPropertyDescriptor2.default)(_class, 'template'), _init = _init ? _init.value : undefined, {
    enumerable: true,
    configurable: true,
    writable: true,
    initializer: function initializer() {
        return _init;
    }
}), _class)), _class));
exports.default = Spin;
exports.Spin = Spin;

/***/ }),

/***/ "./components/spin/index.styl":
/***/ (function(module, exports, __webpack_require__) {

// removed by extract-text-webpack-plugin
    if(false) {
      // 1543202242363
      var cssReload = require("!../../node_modules/css-hot-loader/hotModuleReplacement.js")(module.id, {"fileMap":"{fileName}"});
      module.hot.dispose(cssReload);
      module.hot.accept(undefined, cssReload);
    }
  

/***/ }),

/***/ "./components/spin/index.vdt":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

exports.default = function (obj, _Vdt, blocks, $callee) {
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
    }, _classNameObj['k-' + size] = size !== 'default', _classNameObj['k-center'] = !overlay && center, _classNameObj[className] = className, _classNameObj['k-overlay'] = overlay, _classNameObj);

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
};

module.exports = exports['default'];

/***/ }),

/***/ "./components/utils.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.expandAnimationCallbacks = exports.noop = exports.isFunction = exports.isObject = exports.isNullOrUndefined = exports.get = undefined;

var _typeof2 = __webpack_require__("babel-runtime/helpers/typeof");

var _typeof3 = _interopRequireDefault(_typeof2);

var _extends2 = __webpack_require__("babel-runtime/helpers/extends");

var _extends3 = _interopRequireDefault(_extends2);

var _keys = __webpack_require__("babel-runtime/core-js/object/keys");

var _keys2 = _interopRequireDefault(_keys);

exports.addStyle = addStyle;
exports.kebabCase = kebabCase;
exports.proxyEvent = proxyEvent;
exports.isStringOrNumber = isStringOrNumber;
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

var _intact = __webpack_require__("intact");

var _intact2 = _interopRequireDefault(_intact);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var utils = _intact2.default.utils;
var get = utils.get,
    isNullOrUndefined = utils.isNullOrUndefined,
    isObject = utils.isObject,
    isFunction = utils.isFunction,
    noop = utils.noop;
exports.get = get;
exports.isNullOrUndefined = isNullOrUndefined;
exports.isObject = isObject;
exports.isFunction = isFunction;
exports.noop = noop;
function addStyle(style, extra) {
    if (!style) return extra;
    if (!extra) return style;
    if (typeof style === 'string') {
        extra = (0, _keys2.default)(extra).map(function (key) {
            return kebabCase(key) + ': ' + extra[key];
        }).join(';');
        style = '' + style + (!style || /;\s*$/.test(style) ? '' : ';') + extra;
    } else {
        style = (0, _extends3.default)({}, style, extra);
    }

    return style;
}

var _cache = {};
var uppercasePattern = /[A-Z]/g;
function kebabCase(word) {
    if (!_cache[word]) {
        _cache[word] = word.replace(uppercasePattern, function (item) {
            return '-' + item.toLowerCase();
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
    var type = typeof o === 'undefined' ? 'undefined' : (0, _typeof3.default)(o);
    return type === 'string' || type === 'number';
}

function isTextVNode(o) {
    return isStringOrNumber(o) || o.type === 1;
}

function isStringOrNumberNotEmpty(o) {
    var type = typeof o === 'undefined' ? 'undefined' : (0, _typeof3.default)(o);
    return type === 'string' && !/^\s+$/.test(o) || type === 'number';
}

function getTextByChildren(children) {
    var ret = '';
    if (Array.isArray(children)) {
        children.forEach(function (vNode) {
            if (isTextVNode(vNode)) {
                ret += vNode.children;
            }
        });
    } else if (isStringOrNumber(children)) {
        ret += children;
    }

    return ret;
}

function findParentComponent(Component, instance, isUntil) {
    var ret = void 0;
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
    return Array.apply(null, { length: end - start + 1 }).map(function (v, i) {
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
            var suffix = void 0;
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
        throw new Error('expect a object but got ' + data);
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
        if (!Array.isArray(children)) {
            return vNodes.push(callback(children));
        }
        children.forEach(function (vNode) {
            if (Array.isArray(vNode)) {
                map(vNode);
            } else if (vNode) {
                vNodes.push(callback(vNode));
            }
        });
    }

    map(children);

    return vNodes;
}

var expandAnimationCallbacks = exports.expandAnimationCallbacks = {
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
    if (!Array.isArray(arr)) {
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

/***/ }),

/***/ "./node_modules/universal-router/main.mjs":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _promise = __webpack_require__("babel-runtime/core-js/promise");

var _promise2 = _interopRequireDefault(_promise);

var _classCallCheck2 = __webpack_require__("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _assign = __webpack_require__("babel-runtime/core-js/object/assign");

var _assign2 = _interopRequireDefault(_assign);

var _map = __webpack_require__("babel-runtime/core-js/map");

var _map2 = _interopRequireDefault(_map);

var _pathToRegexp = __webpack_require__("path-to-regexp");

var _pathToRegexp2 = _interopRequireDefault(_pathToRegexp);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Universal Router (https://www.kriasoft.com/universal-router/)
 *
 * Copyright © 2015-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the Apache 2.0 license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

var hasOwnProperty = Object.prototype.hasOwnProperty; /*! Universal Router | MIT License | https://www.kriasoft.com/universal-router/ */

var cache = new _map2.default();

function decodeParam(val) {
  try {
    return decodeURIComponent(val);
  } catch (err) {
    return val;
  }
}

function matchPath(route, pathname, parentKeys, parentParams) {
  var end = !route.children;
  var cacheKey = (route.path || '') + '|' + end;
  var regexp = cache.get(cacheKey);

  if (!regexp) {
    var keys = [];
    regexp = {
      keys: keys,
      pattern: (0, _pathToRegexp2.default)(route.path || '', keys, { end: end })
    };
    cache.set(cacheKey, regexp);
  }

  var m = regexp.pattern.exec(pathname);
  if (!m) {
    return null;
  }

  var path = m[0];
  var params = (0, _assign2.default)({}, parentParams);

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
  var match = void 0;
  var childMatches = void 0;
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

      return { done: true };
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

var UniversalRouter = function () {
  function UniversalRouter(routes) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    (0, _classCallCheck3.default)(this, UniversalRouter);

    if (Object(routes) !== routes) {
      throw new TypeError('Invalid routes');
    }

    this.baseUrl = options.baseUrl || '';
    this.resolveRoute = options.resolveRoute || resolveRoute;
    this.context = (0, _assign2.default)({ router: this }, options.context);
    this.root = Array.isArray(routes) ? { path: '', children: routes, parent: null } : routes;
    this.root.parent = null;
  }

  UniversalRouter.prototype.resolve = function resolve(pathnameOrContext) {
    var context = (0, _assign2.default)({}, this.context, typeof pathnameOrContext === 'string' ? { pathname: pathnameOrContext } : pathnameOrContext);
    var match = matchRoute(this.root, this.baseUrl, context.pathname.substr(this.baseUrl.length), [], null);
    var resolve = this.resolveRoute;
    var matches = null;
    var nextMatches = null;

    function next(resume) {
      var parent = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : matches.value.route;

      matches = nextMatches || match.next();
      nextMatches = null;

      if (!resume) {
        if (matches.done || !isChildRoute(parent, matches.value.route)) {
          nextMatches = matches;
          return _promise2.default.resolve(null);
        }
      }

      if (matches.done) {
        return _promise2.default.reject((0, _assign2.default)(new Error('Page not found'), { context: context, status: 404, statusCode: 404 }));
      }

      return _promise2.default.resolve(resolve((0, _assign2.default)({}, context, matches.value), matches.value.params)).then(function (result) {
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

UniversalRouter.pathToRegexp = _pathToRegexp2.default;
UniversalRouter.matchPath = matchPath;
UniversalRouter.matchRoute = matchRoute;
UniversalRouter.resolveRoute = resolveRoute;

exports.default = UniversalRouter;
//# sourceMappingURL=main.mjs.map

module.exports = exports['default'];

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


exports.__esModule = true;

exports.default = function (path) {
    return _router2.default.resolve({ pathname: path }).then(function (_ref) {
        var Page = _ref.Page,
            data = _ref.data;

        var $app = new _app2.default();
        return $app.render(Page, data).then(function () {
            return {
                content: $app.toString(),
                style: (0, _collect.collectInitial)()
            };
        }).catch(function (e) {
            console.log(e.stack);
        });
    });
};

__webpack_require__("./site/src/main.js");

var _router = __webpack_require__("./site/src/router/index.js");

var _router2 = _interopRequireDefault(_router);

var _app = __webpack_require__("./components/app/index.js");

var _app2 = _interopRequireDefault(_app);

var _collect = __webpack_require__("node-style-loader/collect");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = exports['default'];

/***/ }),

/***/ "./site/src/router/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _regenerator = __webpack_require__("babel-runtime/regenerator");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__("babel-runtime/helpers/asyncToGenerator");

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _universalRouter = __webpack_require__("./node_modules/universal-router/main.mjs");

var _universalRouter2 = _interopRequireDefault(_universalRouter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// const routes = require.context('./', false, /\.router.js$/).keys().map(key => {
// return {
// path: ``
// }
// })

exports.default = new _universalRouter2.default([{
    path: /^\/(kpc\/)?$/,
    action: function () {
        var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
            return _regenerator2.default.wrap(function _callee$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            _context.next = 2;
                            return __webpack_require__.e/* import() */(3).then(__webpack_require__.bind(null, "./site/src/pages/index/index.js"));

                        case 2:
                            _context.t0 = _context.sent;
                            return _context.abrupt('return', {
                                Page: _context.t0
                            });

                        case 4:
                        case 'end':
                            return _context.stop();
                    }
                }
            }, _callee, undefined);
        }));

        return function action() {
            return _ref.apply(this, arguments);
        };
    }()
}, {
    path: /^(?:\/kpc)?(\/docs\/design\/.*)$/,
    action: function () {
        var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(context) {
            return _regenerator2.default.wrap(function _callee2$(_context2) {
                while (1) {
                    switch (_context2.prev = _context2.next) {
                        case 0:
                            _context2.next = 2;
                            return __webpack_require__.e/* import() */(0).then(__webpack_require__.bind(null, "./site/src/pages/design/index.js"));

                        case 2:
                            _context2.t0 = _context2.sent;
                            _context2.t1 = {
                                path: context.params[0]
                            };
                            return _context2.abrupt('return', {
                                Page: _context2.t0,
                                data: _context2.t1
                            });

                        case 5:
                        case 'end':
                            return _context2.stop();
                    }
                }
            }, _callee2, undefined);
        }));

        return function action(_x) {
            return _ref2.apply(this, arguments);
        };
    }()
}, {
    path: /^(?:\/kpc)?(\/docs\/blogs\/.*)$/,
    action: function () {
        var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3(context) {
            return _regenerator2.default.wrap(function _callee3$(_context3) {
                while (1) {
                    switch (_context3.prev = _context3.next) {
                        case 0:
                            _context3.next = 2;
                            return __webpack_require__.e/* import() */(1).then(__webpack_require__.bind(null, "./site/src/pages/blog/index.js"));

                        case 2:
                            _context3.t0 = _context3.sent;
                            _context3.t1 = {
                                path: context.params[0]
                            };
                            return _context3.abrupt('return', {
                                Page: _context3.t0,
                                data: _context3.t1
                            });

                        case 5:
                        case 'end':
                            return _context3.stop();
                    }
                }
            }, _callee3, undefined);
        }));

        return function action(_x2) {
            return _ref3.apply(this, arguments);
        };
    }()
}, {
    path: /(.*)/,
    action: function () {
        var _ref4 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee4(context) {
            return _regenerator2.default.wrap(function _callee4$(_context4) {
                while (1) {
                    switch (_context4.prev = _context4.next) {
                        case 0:
                            _context4.next = 2;
                            return __webpack_require__.e/* import() */(2).then(__webpack_require__.bind(null, "./site/src/pages/document/index.js"));

                        case 2:
                            _context4.t0 = _context4.sent;
                            _context4.t1 = {
                                path: context.params[0]
                            };
                            return _context4.abrupt('return', {
                                Page: _context4.t0,
                                data: _context4.t1
                            });

                        case 5:
                        case 'end':
                            return _context4.stop();
                    }
                }
            }, _callee4, undefined);
        }));

        return function action(_x3) {
            return _ref4.apply(this, arguments);
        };
    }()
}]);
module.exports = exports['default'];

/***/ }),

/***/ "./styles/kpc.styl":
/***/ (function(module, exports, __webpack_require__) {

// removed by extract-text-webpack-plugin
    if(false) {
      // 1543202245791
      var cssReload = require("!../node_modules/css-hot-loader/hotModuleReplacement.js")(module.id, {"fileMap":"{fileName}"});
      module.hot.dispose(cssReload);
      module.hot.accept(undefined, cssReload);
    }
  

/***/ }),

/***/ "babel-runtime/core-js/array/from":
/***/ (function(module, exports) {

module.exports = require("babel-runtime/core-js/array/from");

/***/ }),

/***/ "babel-runtime/core-js/json/stringify":
/***/ (function(module, exports) {

module.exports = require("babel-runtime/core-js/json/stringify");

/***/ }),

/***/ "babel-runtime/core-js/map":
/***/ (function(module, exports) {

module.exports = require("babel-runtime/core-js/map");

/***/ }),

/***/ "babel-runtime/core-js/number/is-nan":
/***/ (function(module, exports) {

module.exports = require("babel-runtime/core-js/number/is-nan");

/***/ }),

/***/ "babel-runtime/core-js/object/assign":
/***/ (function(module, exports) {

module.exports = require("babel-runtime/core-js/object/assign");

/***/ }),

/***/ "babel-runtime/core-js/object/get-own-property-descriptor":
/***/ (function(module, exports) {

module.exports = require("babel-runtime/core-js/object/get-own-property-descriptor");

/***/ }),

/***/ "babel-runtime/core-js/object/keys":
/***/ (function(module, exports) {

module.exports = require("babel-runtime/core-js/object/keys");

/***/ }),

/***/ "babel-runtime/core-js/promise":
/***/ (function(module, exports) {

module.exports = require("babel-runtime/core-js/promise");

/***/ }),

/***/ "babel-runtime/core-js/set":
/***/ (function(module, exports) {

module.exports = require("babel-runtime/core-js/set");

/***/ }),

/***/ "babel-runtime/helpers/asyncToGenerator":
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/asyncToGenerator");

/***/ }),

/***/ "babel-runtime/helpers/classCallCheck":
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/classCallCheck");

/***/ }),

/***/ "babel-runtime/helpers/createClass":
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/createClass");

/***/ }),

/***/ "babel-runtime/helpers/extends":
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/extends");

/***/ }),

/***/ "babel-runtime/helpers/inherits":
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/inherits");

/***/ }),

/***/ "babel-runtime/helpers/objectWithoutProperties":
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/objectWithoutProperties");

/***/ }),

/***/ "babel-runtime/helpers/possibleConstructorReturn":
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/possibleConstructorReturn");

/***/ }),

/***/ "babel-runtime/helpers/typeof":
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/typeof");

/***/ }),

/***/ "babel-runtime/regenerator":
/***/ (function(module, exports) {

module.exports = require("babel-runtime/regenerator");

/***/ }),

/***/ "chroma-js":
/***/ (function(module, exports) {

module.exports = require("chroma-js");

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

/***/ })

/******/ });