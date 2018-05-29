require("source-map-support").install();
module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		3: 0
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
/******/ 			var chunk = require("./chunk/" + {"0":"eab236163c88a46820d0","1":"f4b0b12158a89da91e3f","2":"ab6f542ff53400d9e524"}[chunkId] + ".js");
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

var _dec, _desc, _value, _class;

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

var serverStyleCleanup = void 0;
if (true) {
    serverStyleCleanup = __webpack_require__("node-style-loader/clientCleanup");
}

var App = (_dec = _intact2.default.template(), (_class = function (_Intact) {
    (0, _inherits3.default)(App, _Intact);

    function App() {
        (0, _classCallCheck3.default)(this, App);
        return (0, _possibleConstructorReturn3.default)(this, _Intact.apply(this, arguments));
    }

    App.prototype.defaults = function defaults() {
        return {
            view: undefined,
            container: undefined,
            loading: false
        };
    };

    App.prototype.showLoading = function showLoading() {
        this.set('loading', true);
    };

    App.prototype.hideLoading = function hideLoading() {
        this.set('loading', false);
    };

    App.prototype._init = function _init() {
        if (false) {
            _intact2.default.mount(this, this.get('container'));
        }
    };

    App.prototype.render = function render(Page, data) {
        var _this2 = this;

        this._current = Page;
        return new _promise2.default(function (resolve, reject) {
            if (false) return reject();

            var page = new Page(data);
            // for debug
            if (process.browser) {
                window.__page = page;
            }
            page.$app = _this2;

            var done = function done() {
                if (_this2._current === Page) {
                    _this2.set('view', page);
                }
                resolve();
            };

            if (page.inited) {
                done();
            } else {
                page.on('$inited', done);
            }
        });
    };

    App.prototype.load = function load(Page, data) {
        var _this3 = this;

        return this.render(Page, data).then(function () {
            if (true && process.browser && !_this3.rendered) {
                _intact2.default.hydrate(_this3, _this3.get('container'));
                serverStyleCleanup();
            }
        });
    };

    (0, _createClass3.default)(App, [{
        key: 'template',
        get: function get() {
            return _index2.default;
        }
    }]);
    return App;
}(_intact2.default), (_applyDecoratedDescriptor(_class.prototype, 'template', [_dec], (0, _getOwnPropertyDescriptor2.default)(_class.prototype, 'template'), _class.prototype)), _class));
exports.default = App;
exports.App = App;

/***/ }),

/***/ "./components/app/index.styl":
/***/ (function(module, exports, __webpack_require__) {

// removed by extract-text-webpack-plugin
    if(false) {
      // 1527576676828
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
  return h('div', null, ['\n    ', function () {
    try {
      return [self.get('view')][0];
    } catch (e) {
      _e(e);
    }
  }.call(this), '\n    ', (_blocks["loading"] = function (parent) {
    return function () {
      try {
        return [self.get('loading')][0];
      } catch (e) {
        _e(e);
      }
    }.call(this) ? h(Animate, { 'key': 'loading', 'a:transition': 'fade', 'className': 'k-app-loading', 'children': null, '_context': $this }) : undefined;
  }) && (__blocks["loading"] = function (parent) {
    var self = this;
    return blocks["loading"] ? blocks["loading"].call(this, function () {
      return _blocks["loading"].call(self, parent);
    }) : _blocks["loading"].call(this, parent);
  }) && __blocks["loading"].call(this)], 'k-app');
};

module.exports = exports['default'];

/***/ }),

/***/ "./components/utils.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

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

var _intact = __webpack_require__("intact");

var _intact2 = _interopRequireDefault(_intact);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var utils = _intact2.default.utils;
var get = utils.get,
    isNullOrUndefined = utils.isNullOrUndefined,
    isObject = utils.isObject;
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
        if (parent.tag === Component) {
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
            return 'slideright';
        } else if (horizontal === 'right') {
            return 'slideleft';
        } else if (vertical === 'bottom') {
            return 'slideup';
        } else if (vertical === 'top') {
            return 'slidedown';
        }
    } else {
        if (vertical === 'bottom') {
            return 'slideup';
        } else if (vertical === 'top') {
            return 'slidedown';
        } else if (horizontal === 'left') {
            return 'slideright';
        } else if (horizontal === 'right') {
            return 'slideleft';
        }
    }
    return 'slidedown';
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
                            return __webpack_require__.e/* import() */(1).then(__webpack_require__.bind(null, "./site/src/pages/index/index.js"));

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
    path: '/design',
    action: function () {
        var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2() {
            return _regenerator2.default.wrap(function _callee2$(_context2) {
                while (1) {
                    switch (_context2.prev = _context2.next) {
                        case 0:
                            _context2.next = 2;
                            return __webpack_require__.e/* import() */(2).then(__webpack_require__.bind(null, "./site/src/pages/design/index.js"));

                        case 2:
                            _context2.t0 = _context2.sent;
                            return _context2.abrupt('return', {
                                Page: _context2.t0
                            });

                        case 4:
                        case 'end':
                            return _context2.stop();
                    }
                }
            }, _callee2, undefined);
        }));

        return function action() {
            return _ref2.apply(this, arguments);
        };
    }()
}, {
    path: /(.*)/,
    action: function () {
        var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3(context) {
            return _regenerator2.default.wrap(function _callee3$(_context3) {
                while (1) {
                    switch (_context3.prev = _context3.next) {
                        case 0:
                            _context3.next = 2;
                            return __webpack_require__.e/* import() */(0).then(__webpack_require__.bind(null, "./site/src/pages/document/index.js"));

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

        return function action(_x) {
            return _ref3.apply(this, arguments);
        };
    }()
}]);
module.exports = exports['default'];

/***/ }),

/***/ "./styles/kpc.styl":
/***/ (function(module, exports, __webpack_require__) {

// removed by extract-text-webpack-plugin
    if(false) {
      // 1527576679292
      var cssReload = require("!../node_modules/css-hot-loader/hotModuleReplacement.js")(module.id, {"fileMap":"{fileName}"});
      module.hot.dispose(cssReload);
      module.hot.accept(undefined, cssReload);
    }
  

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

/***/ "intact":
/***/ (function(module, exports) {

module.exports = require("intact");

/***/ }),

/***/ "node-style-loader/clientCleanup":
/***/ (function(module, exports) {

module.exports = require("node-style-loader/clientCleanup");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNWFhMjhiNzg5YTk4ZjU1YWQ1ZjQiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9hcHAvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9hcHAvaW5kZXguc3R5bCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2FwcC9pbmRleC52ZHQiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy91dGlscy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdW5pdmVyc2FsLXJvdXRlci9tYWluLm1qcyIsIndlYnBhY2s6Ly8vLi9zaXRlL3NyYy9tYWluLmpzIiwid2VicGFjazovLy8uL3NpdGUvc3JjL3JlbmRlci5qcyIsIndlYnBhY2s6Ly8vLi9zaXRlL3NyYy9yb3V0ZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3R5bGVzL2twYy5zdHlsIiwid2VicGFjazovLy9leHRlcm5hbCBcImJhYmVsLXJ1bnRpbWUvY29yZS1qcy9qc29uL3N0cmluZ2lmeVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImJhYmVsLXJ1bnRpbWUvY29yZS1qcy9tYXBcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJiYWJlbC1ydW50aW1lL2NvcmUtanMvbnVtYmVyL2lzLW5hblwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImJhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3QvYXNzaWduXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9nZXQtb3duLXByb3BlcnR5LWRlc2NyaXB0b3JcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJiYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L2tleXNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJiYWJlbC1ydW50aW1lL2NvcmUtanMvcHJvbWlzZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImJhYmVsLXJ1bnRpbWUvaGVscGVycy9hc3luY1RvR2VuZXJhdG9yXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYmFiZWwtcnVudGltZS9oZWxwZXJzL2NsYXNzQ2FsbENoZWNrXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYmFiZWwtcnVudGltZS9oZWxwZXJzL2NyZWF0ZUNsYXNzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYmFiZWwtcnVudGltZS9oZWxwZXJzL2V4dGVuZHNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJiYWJlbC1ydW50aW1lL2hlbHBlcnMvaW5oZXJpdHNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJiYWJlbC1ydW50aW1lL2hlbHBlcnMvb2JqZWN0V2l0aG91dFByb3BlcnRpZXNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJiYWJlbC1ydW50aW1lL2hlbHBlcnMvcG9zc2libGVDb25zdHJ1Y3RvclJldHVyblwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImJhYmVsLXJ1bnRpbWUvaGVscGVycy90eXBlb2ZcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJiYWJlbC1ydW50aW1lL3JlZ2VuZXJhdG9yXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiaW50YWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibm9kZS1zdHlsZS1sb2FkZXIvY2xpZW50Q2xlYW51cFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5vZGUtc3R5bGUtbG9hZGVyL2NvbGxlY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwYXRoLXRvLXJlZ2V4cFwiIl0sIm5hbWVzIjpbInNlcnZlclN0eWxlQ2xlYW51cCIsInJlcXVpcmUiLCJBcHAiLCJJbnRhY3QiLCJ0ZW1wbGF0ZSIsImRlZmF1bHRzIiwidmlldyIsInVuZGVmaW5lZCIsImNvbnRhaW5lciIsImxvYWRpbmciLCJzaG93TG9hZGluZyIsInNldCIsImhpZGVMb2FkaW5nIiwiX2luaXQiLCJtb3VudCIsImdldCIsInJlbmRlciIsIlBhZ2UiLCJkYXRhIiwiX2N1cnJlbnQiLCJyZXNvbHZlIiwicmVqZWN0IiwicGFnZSIsInByb2Nlc3MiLCJicm93c2VyIiwid2luZG93IiwiX19wYWdlIiwiJGFwcCIsImRvbmUiLCJpbml0ZWQiLCJvbiIsImxvYWQiLCJ0aGVuIiwicmVuZGVyZWQiLCJoeWRyYXRlIiwib2JqIiwiX1ZkdCIsImJsb2NrcyIsIiRjYWxsZWUiLCJWZHQiLCJoIiwibWlzcyIsImhjIiwiaHUiLCJ3aWRnZXRzIiwiX2Jsb2NrcyIsIl9fYmxvY2tzIiwiX191IiwidXRpbHMiLCJleHRlbmQiLCJfZSIsImVycm9yIiwiX2NsYXNzTmFtZSIsImNsYXNzTmFtZSIsIl9fbyIsIk9wdGlvbnMiLCJfZ2V0TW9kZWwiLCJnZXRNb2RlbCIsIl9zZXRNb2RlbCIsInNldE1vZGVsIiwiX3NldENoZWNrYm94TW9kZWwiLCJzZXRDaGVja2JveE1vZGVsIiwiX2RldGVjdENoZWNrYm94Q2hlY2tlZCIsImRldGVjdENoZWNrYm94Q2hlY2tlZCIsIl9zZXRTZWxlY3RNb2RlbCIsInNldFNlbGVjdE1vZGVsIiwic2VsZiIsIiR0aGlzIiwic2NvcGUiLCJBbmltYXRlIiwicGFyZW50IiwiX3N1cGVyIiwiZSIsImNhbGwiLCJhZGRTdHlsZSIsImtlYmFiQ2FzZSIsInByb3h5RXZlbnQiLCJpc1N0cmluZ09yTnVtYmVyIiwiaXNUZXh0Vk5vZGUiLCJpc1N0cmluZ09yTnVtYmVyTm90RW1wdHkiLCJnZXRUZXh0QnlDaGlsZHJlbiIsImZpbmRQYXJlbnRDb21wb25lbnQiLCJzdHJQYWQiLCJyYW5nZSIsInNlbGVjdElucHV0IiwiXyQiLCJsb2NhbGl6ZSIsImdldFRyYW5zaXRpb24iLCJpc051bGxPclVuZGVmaW5lZCIsImlzT2JqZWN0Iiwic3R5bGUiLCJleHRyYSIsIm1hcCIsImtleSIsImpvaW4iLCJ0ZXN0IiwiX2NhY2hlIiwidXBwZXJjYXNlUGF0dGVybiIsIndvcmQiLCJyZXBsYWNlIiwiaXRlbSIsInRvTG93ZXJDYXNlIiwiY29tcG9uZW50IiwibmFtZSIsInRyaWdnZXIiLCJvIiwidHlwZSIsImNoaWxkcmVuIiwicmV0IiwiQXJyYXkiLCJpc0FycmF5IiwiZm9yRWFjaCIsInZOb2RlIiwiQ29tcG9uZW50IiwiaW5zdGFuY2UiLCJpc1VudGlsIiwicGFyZW50Vk5vZGUiLCJ0YWciLCJzdHIiLCJsZW5ndGgiLCJwYWQiLCJ0b1N0cmluZyIsImwiLCJzdGFydCIsImVuZCIsImFwcGx5IiwidiIsImkiLCJpbnB1dCIsInNlbGVjdCIsInNldFNlbGVjdGlvblJhbmdlIiwiZm9jdXMiLCJ2YWx1ZSIsImkxOG4iLCJ2YWx1ZVJlZ2V4cCIsIm5vdXNlIiwidmFyaWFibGUiLCJzdWZmaXgiLCJpbmRleCIsImluZGV4T2YiLCJzdWJzdHIiLCJzcGxpdCIsIkVycm9yIiwiZmVlZGJhY2siLCJob3Jpem9udGFsIiwidmVydGljYWwiLCJpbXBvcnRhbnQiLCJoYXNPd25Qcm9wZXJ0eSIsIk9iamVjdCIsInByb3RvdHlwZSIsImNhY2hlIiwiZGVjb2RlUGFyYW0iLCJ2YWwiLCJkZWNvZGVVUklDb21wb25lbnQiLCJlcnIiLCJtYXRjaFBhdGgiLCJyb3V0ZSIsInBhdGhuYW1lIiwicGFyZW50S2V5cyIsInBhcmVudFBhcmFtcyIsImNhY2hlS2V5IiwicGF0aCIsInJlZ2V4cCIsImtleXMiLCJwYXR0ZXJuIiwibSIsImV4ZWMiLCJwYXJhbXMiLCJwcm9wIiwicmVwZWF0IiwiZGVsaW1pdGVyIiwiY2hhckF0IiwiY29uY2F0IiwibWF0Y2hSb3V0ZSIsImJhc2VVcmwiLCJtYXRjaCIsImNoaWxkTWF0Y2hlcyIsImNoaWxkSW5kZXgiLCJuZXh0IiwiY2hpbGRSb3V0ZSIsImNoaWxkTWF0Y2giLCJyZXNvbHZlUm91dGUiLCJjb250ZXh0IiwiYWN0aW9uIiwiaXNDaGlsZFJvdXRlIiwicGFyZW50Um91dGUiLCJVbml2ZXJzYWxSb3V0ZXIiLCJyb3V0ZXMiLCJvcHRpb25zIiwiVHlwZUVycm9yIiwicm91dGVyIiwicm9vdCIsInBhdGhuYW1lT3JDb250ZXh0IiwibWF0Y2hlcyIsIm5leHRNYXRjaGVzIiwicmVzdW1lIiwic3RhdHVzIiwic3RhdHVzQ29kZSIsInJlc3VsdCIsInBhdGhUb1JlZ2V4cCIsImNvbmZpZ3VyZSIsImNvbnRlbnQiLCJjYXRjaCIsImNvbnNvbGUiLCJsb2ciLCJzdGFjayIsIlJvdXRlciJdLCJtYXBwaW5ncyI6Ijs7O0FBQUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOENBQXNDLGlGQUFpRjtBQUN2SDtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUFrQixxQkFBcUI7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esc0JBQWM7QUFDZCxZQUFJO0FBQ0o7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3pGQTs7OztBQUNBOzs7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBLElBQUlBLDJCQUFKO0FBQ0EsSUFBSSxJQUFKLEVBQWlCO0FBQ2JBLHlCQUFxQixtQkFBQUMsQ0FBUSxpQ0FBUixDQUFyQjtBQUNIOztJQUVvQkMsRyxXQUNoQkMsaUJBQU9DLFFBQVAsRTs7Ozs7Ozs7a0JBR0RDLFEsdUJBQVc7QUFDUCxlQUFPO0FBQ0hDLGtCQUFNQyxTQURIO0FBRUhDLHVCQUFXRCxTQUZSO0FB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WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGNodW5rc1xuIFx0Ly8gXCIwXCIgbWVhbnMgXCJhbHJlYWR5IGxvYWRlZFwiXG4gXHR2YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuIFx0XHQzOiAwXG4gXHR9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cbiBcdC8vIFRoaXMgZmlsZSBjb250YWlucyBvbmx5IHRoZSBlbnRyeSBjaHVuay5cbiBcdC8vIFRoZSBjaHVuayBsb2FkaW5nIGZ1bmN0aW9uIGZvciBhZGRpdGlvbmFsIGNodW5rc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5lID0gZnVuY3Rpb24gcmVxdWlyZUVuc3VyZShjaHVua0lkKSB7XG4gXHRcdC8vIFwiMFwiIGlzIHRoZSBzaWduYWwgZm9yIFwiYWxyZWFkeSBsb2FkZWRcIlxuIFx0XHRpZihpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gIT09IDApIHtcbiBcdFx0XHR2YXIgY2h1bmsgPSByZXF1aXJlKFwiLi9jaHVuay9cIiArIHtcIjBcIjpcImVhYjIzNjE2M2M4OGE0NjgyMGQwXCIsXCIxXCI6XCJmNGIwYjEyMTU4YTg5ZGE5MWUzZlwiLFwiMlwiOlwiYWI2ZjU0MmZmNTM0MDBkOWU1MjRcIn1bY2h1bmtJZF0gKyBcIi5qc1wiKTtcbiBcdFx0XHR2YXIgbW9yZU1vZHVsZXMgPSBjaHVuay5tb2R1bGVzLCBjaHVua0lkcyA9IGNodW5rLmlkcztcbiBcdFx0XHRmb3IodmFyIG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG4gXHRcdFx0XHRtb2R1bGVzW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0XHR9XG4gXHRcdFx0Zm9yKHZhciBpID0gMDsgaSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKVxuIFx0XHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRzW2ldXSA9IDA7XG4gXHRcdH1cbiBcdFx0cmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xuIFx0fTtcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIva3BjL1wiO1xuXG4gXHQvLyB1bmNhdGNoZWQgZXJyb3IgaGFuZGxlciBmb3Igd2VicGFjayBydW50aW1lXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm9lID0gZnVuY3Rpb24oZXJyKSB7XG4gXHRcdHByb2Nlc3MubmV4dFRpY2soZnVuY3Rpb24oKSB7XG4gXHRcdFx0dGhyb3cgZXJyOyAvLyBjYXRjaCB0aGlzIGVycm9yIGJ5IHVzaW5nIFN5c3RlbS5pbXBvcnQoKS5jYXRjaCgpXG4gXHRcdH0pO1xuIFx0fTtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc2l0ZS9zcmMvcmVuZGVyLmpzXCIpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDVhYTI4Yjc4OWE5OGY1NWFkNWY0IiwiaW1wb3J0IEludGFjdCBmcm9tICdpbnRhY3QnO1xuaW1wb3J0IHRlbXBsYXRlIGZyb20gJy4vaW5kZXgudmR0JztcbmltcG9ydCAnLi4vLi4vc3R5bGVzL2twYy5zdHlsJztcbmltcG9ydCAnLi9pbmRleC5zdHlsJztcblxubGV0IHNlcnZlclN0eWxlQ2xlYW51cDtcbmlmIChwcm9jZXNzLnNzcikge1xuICAgIHNlcnZlclN0eWxlQ2xlYW51cCA9IHJlcXVpcmUoJ25vZGUtc3R5bGUtbG9hZGVyL2NsaWVudENsZWFudXAnKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXBwIGV4dGVuZHMgSW50YWN0IHtcbiAgICBASW50YWN0LnRlbXBsYXRlKClcbiAgICBnZXQgdGVtcGxhdGUoKSB7IHJldHVybiB0ZW1wbGF0ZTsgfVxuXG4gICAgZGVmYXVsdHMoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB2aWV3OiB1bmRlZmluZWQsXG4gICAgICAgICAgICBjb250YWluZXI6IHVuZGVmaW5lZCxcbiAgICAgICAgICAgIGxvYWRpbmc6IGZhbHNlLFxuICAgICAgICB9O1xuICAgIH1cblxuICAgIHNob3dMb2FkaW5nKCkge1xuICAgICAgICB0aGlzLnNldCgnbG9hZGluZycsIHRydWUpO1xuICAgIH1cblxuICAgIGhpZGVMb2FkaW5nKCkge1xuICAgICAgICB0aGlzLnNldCgnbG9hZGluZycsIGZhbHNlKTtcbiAgICB9XG5cbiAgICBfaW5pdCgpIHtcbiAgICAgICAgaWYgKCFwcm9jZXNzLnNzciAmJiBwcm9jZXNzLmJyb3dzZXIpIHtcbiAgICAgICAgICAgIEludGFjdC5tb3VudCh0aGlzLCB0aGlzLmdldCgnY29udGFpbmVyJykpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmVuZGVyKFBhZ2UsIGRhdGEpIHtcbiAgICAgICAgdGhpcy5fY3VycmVudCA9IFBhZ2U7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICBpZiAoIXByb2Nlc3Muc3NyICYmIHByb2Nlc3Mubm9kZSkgcmV0dXJuIHJlamVjdCgpO1xuXG4gICAgICAgICAgICBjb25zdCBwYWdlID0gbmV3IFBhZ2UoZGF0YSk7XG4gICAgICAgICAgICAvLyBmb3IgZGVidWdcbiAgICAgICAgICAgIGlmIChwcm9jZXNzLmJyb3dzZXIpIHtcbiAgICAgICAgICAgICAgICB3aW5kb3cuX19wYWdlID0gcGFnZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHBhZ2UuJGFwcCA9IHRoaXM7XG5cbiAgICAgICAgICAgIGNvbnN0IGRvbmUgPSAoKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuX2N1cnJlbnQgPT09IFBhZ2UpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXQoJ3ZpZXcnLCBwYWdlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICBpZiAocGFnZS5pbml0ZWQpIHtcbiAgICAgICAgICAgICAgICBkb25lKCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHBhZ2Uub24oJyRpbml0ZWQnLCBkb25lKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgbG9hZChQYWdlLCBkYXRhKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlbmRlcihQYWdlLCBkYXRhKS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgIGlmIChwcm9jZXNzLnNzciAmJiBwcm9jZXNzLmJyb3dzZXIgJiYgIXRoaXMucmVuZGVyZWQpIHtcbiAgICAgICAgICAgICAgICBJbnRhY3QuaHlkcmF0ZSh0aGlzLCB0aGlzLmdldCgnY29udGFpbmVyJykpO1xuICAgICAgICAgICAgICAgIHNlcnZlclN0eWxlQ2xlYW51cCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG59XG5cbmV4cG9ydCB7QXBwfTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvYXBwL2luZGV4LmpzIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cbiAgICBpZihtb2R1bGUuaG90KSB7XG4gICAgICAvLyAxNTI3NTc2Njc2ODI4XG4gICAgICB2YXIgY3NzUmVsb2FkID0gcmVxdWlyZShcIiEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWhvdC1sb2FkZXIvaG90TW9kdWxlUmVwbGFjZW1lbnQuanNcIikobW9kdWxlLmlkLCB7XCJmaWxlTWFwXCI6XCJ7ZmlsZU5hbWV9XCJ9KTtcbiAgICAgIG1vZHVsZS5ob3QuZGlzcG9zZShjc3NSZWxvYWQpO1xuICAgICAgbW9kdWxlLmhvdC5hY2NlcHQodW5kZWZpbmVkLCBjc3NSZWxvYWQpO1xuICAgIH1cbiAgXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9jb21wb25lbnRzL2FwcC9pbmRleC5zdHlsXG4vLyBtb2R1bGUgaWQgPSAuL2NvbXBvbmVudHMvYXBwL2luZGV4LnN0eWxcbi8vIG1vZHVsZSBjaHVua3MgPSAzIiwiXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihvYmosIF9WZHQsIGJsb2NrcywgJGNhbGxlZSkge1xuX1ZkdCB8fCAoX1ZkdCA9IFZkdCk7XG5vYmogfHwgKG9iaiA9IHt9KTtcbmJsb2NrcyB8fCAoYmxvY2tzID0ge30pO1xudmFyIGggPSBfVmR0Lm1pc3MuaCwgaGMgPSBfVmR0Lm1pc3MuaGMsIGh1ID0gX1ZkdC5taXNzLmh1LCB3aWRnZXRzID0gdGhpcyAmJiB0aGlzLndpZGdldHMgfHwge30sIF9ibG9ja3MgPSB7fSwgX19ibG9ja3MgPSB7fSxcbl9fdSA9IF9WZHQudXRpbHMsIGV4dGVuZCA9IF9fdS5leHRlbmQsIF9lID0gX191LmVycm9yLCBfY2xhc3NOYW1lID0gX191LmNsYXNzTmFtZSxcbl9fbyA9IF9fdS5PcHRpb25zLCBfZ2V0TW9kZWwgPSBfX28uZ2V0TW9kZWwsIF9zZXRNb2RlbCA9IF9fby5zZXRNb2RlbCxcbl9zZXRDaGVja2JveE1vZGVsID0gX191LnNldENoZWNrYm94TW9kZWwsIF9kZXRlY3RDaGVja2JveENoZWNrZWQgPSBfX3UuZGV0ZWN0Q2hlY2tib3hDaGVja2VkLFxuX3NldFNlbGVjdE1vZGVsID0gX191LnNldFNlbGVjdE1vZGVsLFxuc2VsZiA9IHRoaXMuZGF0YSwgJHRoaXMgPSB0aGlzLCBzY29wZSA9IG9iaiwgQW5pbWF0ZSA9IHNlbGYgJiYgc2VsZi5BbmltYXRlLCBwYXJlbnQgPSAoJGNhbGxlZSB8fCB7fSkuX3N1cGVyXG5yZXR1cm4gaCgnZGl2JywgbnVsbCwgWydcXG4gICAgJywgZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW3NlbGYuZ2V0KCd2aWV3JykgXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKSwgJ1xcbiAgICAnLCAoX2Jsb2Nrc1tcImxvYWRpbmdcIl0gPSBmdW5jdGlvbihwYXJlbnQpIHtyZXR1cm4gZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW3NlbGYuZ2V0KCdsb2FkaW5nJykgXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKSA/IGgoQW5pbWF0ZSwgeydrZXknOiAnbG9hZGluZycsICdhOnRyYW5zaXRpb24nOiAnZmFkZScsICdjbGFzc05hbWUnOiAnay1hcHAtbG9hZGluZycsICdjaGlsZHJlbic6IG51bGwsICdfY29udGV4dCc6ICR0aGlzfSkgOiB1bmRlZmluZWQ7fSkgJiYgKF9fYmxvY2tzW1wibG9hZGluZ1wiXSA9IGZ1bmN0aW9uKHBhcmVudCkge1xudmFyIHNlbGYgPSB0aGlzO1xucmV0dXJuIGJsb2Nrc1tcImxvYWRpbmdcIl0gPyBibG9ja3NbXCJsb2FkaW5nXCJdLmNhbGwodGhpcywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gX2Jsb2Nrc1tcImxvYWRpbmdcIl0uY2FsbChzZWxmLCBwYXJlbnQpO1xufSkgOiBfYmxvY2tzW1wibG9hZGluZ1wiXS5jYWxsKHRoaXMsIHBhcmVudCk7XG59KSAmJiBfX2Jsb2Nrc1tcImxvYWRpbmdcIl0uY2FsbCh0aGlzKV0sICdrLWFwcCcpXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9hcHAvaW5kZXgudmR0IiwiaW1wb3J0IEludGFjdCBmcm9tICdpbnRhY3QnO1xuXG5jb25zdCB1dGlscyA9IEludGFjdC51dGlscztcbmNvbnN0IHtnZXQsIGlzTnVsbE9yVW5kZWZpbmVkLCBpc09iamVjdH0gPSB1dGlscztcblxuZXhwb3J0IGZ1bmN0aW9uIGFkZFN0eWxlKHN0eWxlLCBleHRyYSkge1xuICAgIGlmICghc3R5bGUpIHJldHVybiBleHRyYTtcbiAgICBpZiAoIWV4dHJhKSByZXR1cm4gc3R5bGU7XG4gICAgaWYgKHR5cGVvZiBzdHlsZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgZXh0cmEgPSBPYmplY3Qua2V5cyhleHRyYSkubWFwKGtleSA9PiBgJHtrZWJhYkNhc2Uoa2V5KX06ICR7ZXh0cmFba2V5XX1gKS5qb2luKCc7Jyk7XG4gICAgICAgIHN0eWxlID0gYCR7c3R5bGV9JHshc3R5bGUgfHwgLztcXHMqJC8udGVzdChzdHlsZSkgPyAnJyA6ICc7J30ke2V4dHJhfWA7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgc3R5bGUgPSB7Li4uc3R5bGUsIC4uLmV4dHJhfTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3R5bGU7XG59XG5cbmNvbnN0IF9jYWNoZSA9IHt9O1xuY29uc3QgdXBwZXJjYXNlUGF0dGVybiA9IC9bQS1aXS9nO1xuZXhwb3J0IGZ1bmN0aW9uIGtlYmFiQ2FzZSh3b3JkKSB7XG4gICAgaWYgKCFfY2FjaGVbd29yZF0pIHtcbiAgICAgICAgX2NhY2hlW3dvcmRdID0gd29yZC5yZXBsYWNlKHVwcGVyY2FzZVBhdHRlcm4sIChpdGVtKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gYC0ke2l0ZW0udG9Mb3dlckNhc2UoKX1gO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIF9jYWNoZVt3b3JkXTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHByb3h5RXZlbnQoY29tcG9uZW50LCBuYW1lKSB7XG4gICAgcmV0dXJuIChlKSA9PiBjb21wb25lbnQudHJpZ2dlcihuYW1lLCBlKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzU3RyaW5nT3JOdW1iZXIobykge1xuICAgIGNvbnN0IHR5cGUgPSB0eXBlb2YgbztcbiAgICByZXR1cm4gdHlwZSA9PT0gJ3N0cmluZycgfHwgdHlwZSA9PT0gJ251bWJlcic7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc1RleHRWTm9kZShvKSB7XG4gICAgcmV0dXJuIGlzU3RyaW5nT3JOdW1iZXIobykgfHwgby50eXBlID09PSAxO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNTdHJpbmdPck51bWJlck5vdEVtcHR5KG8pIHtcbiAgICBjb25zdCB0eXBlID0gdHlwZW9mIG87XG4gICAgcmV0dXJuIHR5cGUgPT09ICdzdHJpbmcnICYmICEvXlxccyskLy50ZXN0KG8pIHx8IHR5cGUgPT09ICdudW1iZXInO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0VGV4dEJ5Q2hpbGRyZW4oY2hpbGRyZW4pIHtcbiAgICBsZXQgcmV0ID0gJyc7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkoY2hpbGRyZW4pKSB7XG4gICAgICAgIGNoaWxkcmVuLmZvckVhY2godk5vZGUgPT4ge1xuICAgICAgICAgICAgaWYgKGlzVGV4dFZOb2RlKHZOb2RlKSkge1xuICAgICAgICAgICAgICAgIHJldCArPSB2Tm9kZS5jaGlsZHJlbjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSBlbHNlIGlmIChpc1N0cmluZ09yTnVtYmVyKGNoaWxkcmVuKSkge1xuICAgICAgICByZXQgKz0gY2hpbGRyZW47XG4gICAgfVxuXG4gICAgcmV0dXJuIHJldDtcbn1cblxuXG5leHBvcnQgZnVuY3Rpb24gZmluZFBhcmVudENvbXBvbmVudChDb21wb25lbnQsIGluc3RhbmNlLCBpc1VudGlsKSB7XG4gICAgbGV0IHJldDtcbiAgICBsZXQgcGFyZW50ID0gaW5zdGFuY2UucGFyZW50Vk5vZGU7XG4gICAgd2hpbGUgKHBhcmVudCkge1xuICAgICAgICBpZiAocGFyZW50LnRhZyA9PT0gQ29tcG9uZW50KSB7XG4gICAgICAgICAgICByZXQgPSBwYXJlbnQuY2hpbGRyZW47ICAgICAgICBcbiAgICAgICAgICAgIGlmIChpc1VudGlsKSBicmVhaztcbiAgICAgICAgfVxuICAgICAgICBwYXJlbnQgPSBwYXJlbnQucGFyZW50Vk5vZGU7XG4gICAgfVxuICAgIHJldHVybiByZXQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdHJQYWQoc3RyLCBsZW5ndGgsIHBhZCkge1xuICAgIHN0ciA9IHN0ci50b1N0cmluZygpO1xuICAgIHBhZCA9IHBhZCA9PT0gdW5kZWZpbmVkID8gJzAnIDogcGFkO1xuICAgIHZhciBsID0gc3RyLmxlbmd0aDtcbiAgICBpZiAobCA8IGxlbmd0aCkge1xuICAgICAgICBzdHIgPSBuZXcgQXJyYXkobGVuZ3RoIC0gbCArIDEpLmpvaW4ocGFkKSArIHN0cjtcbiAgICB9XG4gICAgcmV0dXJuIHN0cjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJhbmdlKHN0YXJ0LCBlbmQpIHtcbiAgICByZXR1cm4gQXJyYXkuYXBwbHkobnVsbCwge2xlbmd0aDogZW5kIC0gc3RhcnQgKyAxfSlcbiAgICAgICAgLm1hcCgodiwgaSkgPT4gaSArIHN0YXJ0KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNlbGVjdElucHV0KGlucHV0KSB7XG4gICAgaWYgKGlucHV0LnNlbGVjdCkge1xuICAgICAgICBpbnB1dC5zZWxlY3QoKTtcbiAgICB9IGVsc2UgaWYgKGlucHV0LnNldFNlbGVjdGlvblJhbmdlKSB7XG4gICAgICAgIC8vIG1vYmlsZSBzYWZhcmlcbiAgICAgICAgaW5wdXQuZm9jdXMoKTtcbiAgICAgICAgaW5wdXQuc2V0U2VsZWN0aW9uUmFuZ2UoMCwgaW5wdXQudmFsdWUubGVuZ3RoKTtcbiAgICB9XG59XG5cbmxldCBpMThuID0ge307XG5jb25zdCB2YWx1ZVJlZ2V4cCA9IC9cXHsoW15cXH1cXHNdKylcXH0vZztcbmV4cG9ydCBmdW5jdGlvbiBfJChrZXksIGRhdGEpIHtcbiAgICBsZXQgdmFsdWUgPSBnZXQoaTE4biwga2V5KTtcbiAgICBpZiAoaXNOdWxsT3JVbmRlZmluZWQodmFsdWUpKSB7XG4gICAgICAgIHZhbHVlID0ga2V5O1xuICAgIH1cblxuICAgIGlmIChkYXRhKSB7XG4gICAgICAgIHZhbHVlID0gdmFsdWUucmVwbGFjZSh2YWx1ZVJlZ2V4cCwgKG5vdXNlLCB2YXJpYWJsZSkgPT4ge1xuICAgICAgICAgICAgbGV0IHN1ZmZpeDtcbiAgICAgICAgICAgIGNvbnN0IGluZGV4ID0gdmFyaWFibGUuaW5kZXhPZignOicpO1xuICAgICAgICAgICAgaWYgKGluZGV4ID4gMCkge1xuICAgICAgICAgICAgICAgIHN1ZmZpeCA9IHZhcmlhYmxlLnN1YnN0cigwLCBpbmRleCk7XG4gICAgICAgICAgICAgICAgc3VmZml4ID0gc3VmZml4LnNwbGl0KCd8Jyk7XG4gICAgICAgICAgICAgICAgdmFyaWFibGUgPSB2YXJpYWJsZS5zdWJzdHIoaW5kZXggKyAxKTtcbiAgICAgICAgICAgICAgICB2YXJpYWJsZSA9IGdldChkYXRhLCB2YXJpYWJsZSk7XG4gICAgICAgICAgICAgICAgaWYgKHZhcmlhYmxlID4gMSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gc3VmZml4Lmxlbmd0aCA+IDEgPyBzdWZmaXhbMV0gOiBzdWZmaXhbMF07XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHN1ZmZpeC5sZW5ndGggPiAxID8gc3VmZml4WzBdIDogJyc7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB2YXJpYWJsZSA9IGdldChkYXRhLCB2YXJpYWJsZSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGlzTnVsbE9yVW5kZWZpbmVkKHZhcmlhYmxlKSA/IG5vdXNlIDogdmFyaWFibGU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiB2YWx1ZTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBsb2NhbGl6ZShkYXRhKSB7XG4gICAgaWYgKCFpc09iamVjdChkYXRhKSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYGV4cGVjdCBhIG9iamVjdCBidXQgZ290ICR7ZGF0YX1gKTtcbiAgICB9XG4gICAgaTE4biA9IGRhdGE7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRUcmFuc2l0aW9uKGZlZWRiYWNrKSB7XG4gICAgY29uc3QgaG9yaXpvbnRhbCA9IGZlZWRiYWNrLmhvcml6b250YWw7XG4gICAgY29uc3QgdmVydGljYWwgPSBmZWVkYmFjay52ZXJ0aWNhbDtcbiAgICBpZiAoZmVlZGJhY2suaW1wb3J0YW50PT09ICdob3Jpem9udGFsJykge1xuICAgICAgICBpZiAoaG9yaXpvbnRhbCA9PT0gJ2xlZnQnKSB7XG4gICAgICAgICAgICByZXR1cm4gJ3NsaWRlcmlnaHQnO1xuICAgICAgICB9IGVsc2UgaWYgKGhvcml6b250YWwgPT09ICdyaWdodCcpIHtcbiAgICAgICAgICAgIHJldHVybiAnc2xpZGVsZWZ0JztcbiAgICAgICAgfSBlbHNlIGlmICh2ZXJ0aWNhbCA9PT0gJ2JvdHRvbScpIHtcbiAgICAgICAgICAgIHJldHVybiAnc2xpZGV1cCc7XG4gICAgICAgIH0gZWxzZSBpZiAodmVydGljYWwgPT09ICd0b3AnKSB7XG4gICAgICAgICAgICByZXR1cm4gJ3NsaWRlZG93bic7XG4gICAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgICBpZiAodmVydGljYWwgPT09ICdib3R0b20nKSB7XG4gICAgICAgICAgICByZXR1cm4gJ3NsaWRldXAnO1xuICAgICAgICB9IGVsc2UgaWYgKHZlcnRpY2FsID09PSAndG9wJykge1xuICAgICAgICAgICAgcmV0dXJuICdzbGlkZWRvd24nO1xuICAgICAgICB9IGVsc2UgaWYgKGhvcml6b250YWwgPT09ICdsZWZ0Jykge1xuICAgICAgICAgICAgcmV0dXJuICdzbGlkZXJpZ2h0JztcbiAgICAgICAgfSBlbHNlIGlmIChob3Jpem9udGFsID09PSAncmlnaHQnKSB7XG4gICAgICAgICAgICByZXR1cm4gJ3NsaWRlbGVmdCc7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuICdzbGlkZWRvd24nO1xufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy91dGlscy5qcyIsIi8qISBVbml2ZXJzYWwgUm91dGVyIHwgTUlUIExpY2Vuc2UgfCBodHRwczovL3d3dy5rcmlhc29mdC5jb20vdW5pdmVyc2FsLXJvdXRlci8gKi9cblxuaW1wb3J0IHBhdGhUb1JlZ2V4cCBmcm9tICdwYXRoLXRvLXJlZ2V4cCc7XG5cbi8qKlxuICogVW5pdmVyc2FsIFJvdXRlciAoaHR0cHM6Ly93d3cua3JpYXNvZnQuY29tL3VuaXZlcnNhbC1yb3V0ZXIvKVxuICpcbiAqIENvcHlyaWdodCDCqSAyMDE1LXByZXNlbnQgS3JpYXNvZnQsIExMQy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgMi4wIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFLnR4dCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbmNvbnN0IHsgaGFzT3duUHJvcGVydHkgfSA9IE9iamVjdC5wcm90b3R5cGU7XG5jb25zdCBjYWNoZSA9IG5ldyBNYXAoKTtcblxuZnVuY3Rpb24gZGVjb2RlUGFyYW0odmFsKSB7XG4gIHRyeSB7XG4gICAgcmV0dXJuIGRlY29kZVVSSUNvbXBvbmVudCh2YWwpO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICByZXR1cm4gdmFsO1xuICB9XG59XG5cbmZ1bmN0aW9uIG1hdGNoUGF0aChyb3V0ZSwgcGF0aG5hbWUsIHBhcmVudEtleXMsIHBhcmVudFBhcmFtcykge1xuICBjb25zdCBlbmQgPSAhcm91dGUuY2hpbGRyZW47XG4gIGNvbnN0IGNhY2hlS2V5ID0gYCR7cm91dGUucGF0aCB8fCAnJ318JHtlbmR9YDtcbiAgbGV0IHJlZ2V4cCA9IGNhY2hlLmdldChjYWNoZUtleSk7XG5cbiAgaWYgKCFyZWdleHApIHtcbiAgICBjb25zdCBrZXlzID0gW107XG4gICAgcmVnZXhwID0ge1xuICAgICAga2V5cyxcbiAgICAgIHBhdHRlcm46IHBhdGhUb1JlZ2V4cChyb3V0ZS5wYXRoIHx8ICcnLCBrZXlzLCB7IGVuZCB9KVxuICAgIH07XG4gICAgY2FjaGUuc2V0KGNhY2hlS2V5LCByZWdleHApO1xuICB9XG5cbiAgY29uc3QgbSA9IHJlZ2V4cC5wYXR0ZXJuLmV4ZWMocGF0aG5hbWUpO1xuICBpZiAoIW0pIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIGNvbnN0IHBhdGggPSBtWzBdO1xuICBjb25zdCBwYXJhbXMgPSBPYmplY3QuYXNzaWduKHt9LCBwYXJlbnRQYXJhbXMpO1xuXG4gIGZvciAobGV0IGkgPSAxOyBpIDwgbS5sZW5ndGg7IGkgKz0gMSkge1xuICAgIGNvbnN0IGtleSA9IHJlZ2V4cC5rZXlzW2kgLSAxXTtcbiAgICBjb25zdCBwcm9wID0ga2V5Lm5hbWU7XG4gICAgY29uc3QgdmFsdWUgPSBtW2ldO1xuICAgIGlmICh2YWx1ZSAhPT0gdW5kZWZpbmVkIHx8ICFoYXNPd25Qcm9wZXJ0eS5jYWxsKHBhcmFtcywgcHJvcCkpIHtcbiAgICAgIGlmIChrZXkucmVwZWF0KSB7XG4gICAgICAgIHBhcmFtc1twcm9wXSA9IHZhbHVlID8gdmFsdWUuc3BsaXQoa2V5LmRlbGltaXRlcikubWFwKGRlY29kZVBhcmFtKSA6IFtdO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcGFyYW1zW3Byb3BdID0gdmFsdWUgPyBkZWNvZGVQYXJhbSh2YWx1ZSkgOiB2YWx1ZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4ge1xuICAgIHBhdGg6ICFlbmQgJiYgcGF0aC5jaGFyQXQocGF0aC5sZW5ndGggLSAxKSA9PT0gJy8nID8gcGF0aC5zdWJzdHIoMSkgOiBwYXRoLFxuICAgIGtleXM6IHBhcmVudEtleXMuY29uY2F0KHJlZ2V4cC5rZXlzKSxcbiAgICBwYXJhbXNcbiAgfTtcbn1cblxuLyoqXG4gKiBVbml2ZXJzYWwgUm91dGVyIChodHRwczovL3d3dy5rcmlhc29mdC5jb20vdW5pdmVyc2FsLXJvdXRlci8pXG4gKlxuICogQ29weXJpZ2h0IMKpIDIwMTUtcHJlc2VudCBLcmlhc29mdCwgTExDLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSAyLjAgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UudHh0IGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuZnVuY3Rpb24gbWF0Y2hSb3V0ZShyb3V0ZSwgYmFzZVVybCwgcGF0aG5hbWUsIHBhcmVudEtleXMsIHBhcmVudFBhcmFtcykge1xuICBsZXQgbWF0Y2g7XG4gIGxldCBjaGlsZE1hdGNoZXM7XG4gIGxldCBjaGlsZEluZGV4ID0gMDtcblxuICByZXR1cm4ge1xuICAgIG5leHQoKSB7XG4gICAgICBpZiAoIW1hdGNoKSB7XG4gICAgICAgIG1hdGNoID0gbWF0Y2hQYXRoKHJvdXRlLCBwYXRobmFtZSwgcGFyZW50S2V5cywgcGFyZW50UGFyYW1zKTtcblxuICAgICAgICBpZiAobWF0Y2gpIHtcbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgZG9uZTogZmFsc2UsXG4gICAgICAgICAgICB2YWx1ZToge1xuICAgICAgICAgICAgICByb3V0ZSxcbiAgICAgICAgICAgICAgYmFzZVVybCxcbiAgICAgICAgICAgICAgcGF0aDogbWF0Y2gucGF0aCxcbiAgICAgICAgICAgICAga2V5czogbWF0Y2gua2V5cyxcbiAgICAgICAgICAgICAgcGFyYW1zOiBtYXRjaC5wYXJhbXNcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtYXRjaCAmJiByb3V0ZS5jaGlsZHJlbikge1xuICAgICAgICB3aGlsZSAoY2hpbGRJbmRleCA8IHJvdXRlLmNoaWxkcmVuLmxlbmd0aCkge1xuICAgICAgICAgIGlmICghY2hpbGRNYXRjaGVzKSB7XG4gICAgICAgICAgICBjb25zdCBjaGlsZFJvdXRlID0gcm91dGUuY2hpbGRyZW5bY2hpbGRJbmRleF07XG4gICAgICAgICAgICBjaGlsZFJvdXRlLnBhcmVudCA9IHJvdXRlO1xuXG4gICAgICAgICAgICBjaGlsZE1hdGNoZXMgPSBtYXRjaFJvdXRlKGNoaWxkUm91dGUsIGJhc2VVcmwgKyBtYXRjaC5wYXRoLCBwYXRobmFtZS5zdWJzdHIobWF0Y2gucGF0aC5sZW5ndGgpLCBtYXRjaC5rZXlzLCBtYXRjaC5wYXJhbXMpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGNvbnN0IGNoaWxkTWF0Y2ggPSBjaGlsZE1hdGNoZXMubmV4dCgpO1xuICAgICAgICAgIGlmICghY2hpbGRNYXRjaC5kb25lKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICBkb25lOiBmYWxzZSxcbiAgICAgICAgICAgICAgdmFsdWU6IGNoaWxkTWF0Y2gudmFsdWVcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgY2hpbGRNYXRjaGVzID0gbnVsbDtcbiAgICAgICAgICBjaGlsZEluZGV4ICs9IDE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHsgZG9uZTogdHJ1ZSB9O1xuICAgIH1cbiAgfTtcbn1cblxuLyoqXG4gKiBVbml2ZXJzYWwgUm91dGVyIChodHRwczovL3d3dy5rcmlhc29mdC5jb20vdW5pdmVyc2FsLXJvdXRlci8pXG4gKlxuICogQ29weXJpZ2h0IMKpIDIwMTUtcHJlc2VudCBLcmlhc29mdCwgTExDLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSAyLjAgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UudHh0IGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuZnVuY3Rpb24gcmVzb2x2ZVJvdXRlKGNvbnRleHQsIHBhcmFtcykge1xuICBpZiAodHlwZW9mIGNvbnRleHQucm91dGUuYWN0aW9uID09PSAnZnVuY3Rpb24nKSB7XG4gICAgcmV0dXJuIGNvbnRleHQucm91dGUuYWN0aW9uKGNvbnRleHQsIHBhcmFtcyk7XG4gIH1cblxuICByZXR1cm4gbnVsbDtcbn1cblxuLyoqXG4gKiBVbml2ZXJzYWwgUm91dGVyIChodHRwczovL3d3dy5rcmlhc29mdC5jb20vdW5pdmVyc2FsLXJvdXRlci8pXG4gKlxuICogQ29weXJpZ2h0IMKpIDIwMTUtcHJlc2VudCBLcmlhc29mdCwgTExDLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSAyLjAgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UudHh0IGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuZnVuY3Rpb24gaXNDaGlsZFJvdXRlKHBhcmVudFJvdXRlLCBjaGlsZFJvdXRlKSB7XG4gIGxldCByb3V0ZSA9IGNoaWxkUm91dGU7XG4gIHdoaWxlIChyb3V0ZSkge1xuICAgIHJvdXRlID0gcm91dGUucGFyZW50O1xuICAgIGlmIChyb3V0ZSA9PT0gcGFyZW50Um91dGUpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfVxuICByZXR1cm4gZmFsc2U7XG59XG5cbmNsYXNzIFVuaXZlcnNhbFJvdXRlciB7XG4gIGNvbnN0cnVjdG9yKHJvdXRlcywgb3B0aW9ucyA9IHt9KSB7XG4gICAgaWYgKE9iamVjdChyb3V0ZXMpICE9PSByb3V0ZXMpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0ludmFsaWQgcm91dGVzJyk7XG4gICAgfVxuXG4gICAgdGhpcy5iYXNlVXJsID0gb3B0aW9ucy5iYXNlVXJsIHx8ICcnO1xuICAgIHRoaXMucmVzb2x2ZVJvdXRlID0gb3B0aW9ucy5yZXNvbHZlUm91dGUgfHwgcmVzb2x2ZVJvdXRlO1xuICAgIHRoaXMuY29udGV4dCA9IE9iamVjdC5hc3NpZ24oeyByb3V0ZXI6IHRoaXMgfSwgb3B0aW9ucy5jb250ZXh0KTtcbiAgICB0aGlzLnJvb3QgPSBBcnJheS5pc0FycmF5KHJvdXRlcykgPyB7IHBhdGg6ICcnLCBjaGlsZHJlbjogcm91dGVzLCBwYXJlbnQ6IG51bGwgfSA6IHJvdXRlcztcbiAgICB0aGlzLnJvb3QucGFyZW50ID0gbnVsbDtcbiAgfVxuXG4gIHJlc29sdmUocGF0aG5hbWVPckNvbnRleHQpIHtcbiAgICBjb25zdCBjb250ZXh0ID0gT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5jb250ZXh0LCB0eXBlb2YgcGF0aG5hbWVPckNvbnRleHQgPT09ICdzdHJpbmcnID8geyBwYXRobmFtZTogcGF0aG5hbWVPckNvbnRleHQgfSA6IHBhdGhuYW1lT3JDb250ZXh0KTtcbiAgICBjb25zdCBtYXRjaCA9IG1hdGNoUm91dGUodGhpcy5yb290LCB0aGlzLmJhc2VVcmwsIGNvbnRleHQucGF0aG5hbWUuc3Vic3RyKHRoaXMuYmFzZVVybC5sZW5ndGgpLCBbXSwgbnVsbCk7XG4gICAgY29uc3QgcmVzb2x2ZSA9IHRoaXMucmVzb2x2ZVJvdXRlO1xuICAgIGxldCBtYXRjaGVzID0gbnVsbDtcbiAgICBsZXQgbmV4dE1hdGNoZXMgPSBudWxsO1xuXG4gICAgZnVuY3Rpb24gbmV4dChyZXN1bWUsIHBhcmVudCA9IG1hdGNoZXMudmFsdWUucm91dGUpIHtcbiAgICAgIG1hdGNoZXMgPSBuZXh0TWF0Y2hlcyB8fCBtYXRjaC5uZXh0KCk7XG4gICAgICBuZXh0TWF0Y2hlcyA9IG51bGw7XG5cbiAgICAgIGlmICghcmVzdW1lKSB7XG4gICAgICAgIGlmIChtYXRjaGVzLmRvbmUgfHwgIWlzQ2hpbGRSb3V0ZShwYXJlbnQsIG1hdGNoZXMudmFsdWUucm91dGUpKSB7XG4gICAgICAgICAgbmV4dE1hdGNoZXMgPSBtYXRjaGVzO1xuICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUobnVsbCk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1hdGNoZXMuZG9uZSkge1xuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoT2JqZWN0LmFzc2lnbihuZXcgRXJyb3IoJ1BhZ2Ugbm90IGZvdW5kJyksIHsgY29udGV4dCwgc3RhdHVzOiA0MDQsIHN0YXR1c0NvZGU6IDQwNCB9KSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUocmVzb2x2ZShPYmplY3QuYXNzaWduKHt9LCBjb250ZXh0LCBtYXRjaGVzLnZhbHVlKSwgbWF0Y2hlcy52YWx1ZS5wYXJhbXMpKS50aGVuKHJlc3VsdCA9PiB7XG4gICAgICAgIGlmIChyZXN1bHQgIT09IG51bGwgJiYgcmVzdWx0ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG5leHQocmVzdW1lLCBwYXJlbnQpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgY29udGV4dC5uZXh0ID0gbmV4dDtcblxuICAgIHJldHVybiBuZXh0KHRydWUsIHRoaXMucm9vdCk7XG4gIH1cbn1cblxuVW5pdmVyc2FsUm91dGVyLnBhdGhUb1JlZ2V4cCA9IHBhdGhUb1JlZ2V4cDtcblVuaXZlcnNhbFJvdXRlci5tYXRjaFBhdGggPSBtYXRjaFBhdGg7XG5Vbml2ZXJzYWxSb3V0ZXIubWF0Y2hSb3V0ZSA9IG1hdGNoUm91dGU7XG5Vbml2ZXJzYWxSb3V0ZXIucmVzb2x2ZVJvdXRlID0gcmVzb2x2ZVJvdXRlO1xuXG5leHBvcnQgZGVmYXVsdCBVbml2ZXJzYWxSb3V0ZXI7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1tYWluLm1qcy5tYXBcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy91bml2ZXJzYWwtcm91dGVyL21haW4ubWpzIiwiaW1wb3J0IHtsb2NhbGl6ZX0gZnJvbSAna3BjL2NvbXBvbmVudHMvdXRpbHMnO1xuLy8gaW1wb3J0IGVuIGZyb20gJ2twYy9pMThuL2VuLVVTJztcblxuLy8gbG9jYWxpemUoZW4pO1xuXG5JbnRhY3QuVmR0LmNvbmZpZ3VyZSgnZGVsaW1pdGVycycsIFsne3snLCAnfX0nXSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zaXRlL3NyYy9tYWluLmpzIiwiaW1wb3J0ICcuL21haW4nO1xuaW1wb3J0IHJvdXRlciBmcm9tICcuL3JvdXRlcic7XG5pbXBvcnQgQXBwIGZyb20gJ2twYy9jb21wb25lbnRzL2FwcCc7XG5pbXBvcnQge2NvbGxlY3RJbml0aWFsfSBmcm9tICdub2RlLXN0eWxlLWxvYWRlci9jb2xsZWN0JztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24ocGF0aCkge1xuICAgIHJldHVybiByb3V0ZXIucmVzb2x2ZSh7cGF0aG5hbWU6IHBhdGh9KS50aGVuKCh7UGFnZSwgZGF0YX0pID0+IHtcbiAgICAgICAgY29uc3QgJGFwcCA9IG5ldyBBcHAoKTtcbiAgICAgICAgcmV0dXJuICRhcHAucmVuZGVyKFBhZ2UsIGRhdGEpLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBjb250ZW50OiAkYXBwLnRvU3RyaW5nKCksXG4gICAgICAgICAgICAgICAgc3R5bGU6IGNvbGxlY3RJbml0aWFsKCksXG4gICAgICAgICAgICB9O1xuICAgICAgICB9KS5jYXRjaChlID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGUuc3RhY2spO1xuICAgICAgICB9KTtcbiAgICB9KTtcbn1cblxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc2l0ZS9zcmMvcmVuZGVyLmpzIiwiaW1wb3J0IFJvdXRlciBmcm9tICd1bml2ZXJzYWwtcm91dGVyJztcblxuLy8gY29uc3Qgcm91dGVzID0gcmVxdWlyZS5jb250ZXh0KCcuLycsIGZhbHNlLCAvXFwucm91dGVyLmpzJC8pLmtleXMoKS5tYXAoa2V5ID0+IHtcbiAgICAvLyByZXR1cm4ge1xuICAgICAgICAvLyBwYXRoOiBgYFxuICAgIC8vIH1cbi8vIH0pXG5cbmV4cG9ydCBkZWZhdWx0IG5ldyBSb3V0ZXIoW1xuICAgIHtcbiAgICAgICAgcGF0aDogL15cXC8oa3BjXFwvKT8kLyxcbiAgICAgICAgYWN0aW9uOiBhc3luYyAoKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4ge1BhZ2U6IGF3YWl0IGltcG9ydCgnLi4vcGFnZXMvaW5kZXgnKX1cbiAgICAgICAgfVxuICAgIH0sXG4gICAge1xuICAgICAgICBwYXRoOiAnL2Rlc2lnbicsXG4gICAgICAgIGFjdGlvbjogYXN5bmMgKCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHtQYWdlOiBhd2FpdCBpbXBvcnQoJy4uL3BhZ2VzL2Rlc2lnbicpfVxuICAgICAgICB9XG4gICAgfSxcbiAgICB7XG4gICAgICAgIHBhdGg6IC8oLiopLyxcbiAgICAgICAgYWN0aW9uOiBhc3luYyAoY29udGV4dCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBQYWdlOiBhd2FpdCBpbXBvcnQoJy4uL3BhZ2VzL2RvY3VtZW50JyksXG4gICAgICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICAgICAgICBwYXRoOiBjb250ZXh0LnBhcmFtc1swXVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICB9LFxuXSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zaXRlL3NyYy9yb3V0ZXIvaW5kZXguanMiLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuICAgIGlmKG1vZHVsZS5ob3QpIHtcbiAgICAgIC8vIDE1Mjc1NzY2NzkyOTJcbiAgICAgIHZhciBjc3NSZWxvYWQgPSByZXF1aXJlKFwiIS4uL25vZGVfbW9kdWxlcy9jc3MtaG90LWxvYWRlci9ob3RNb2R1bGVSZXBsYWNlbWVudC5qc1wiKShtb2R1bGUuaWQsIHtcImZpbGVNYXBcIjpcIntmaWxlTmFtZX1cIn0pO1xuICAgICAgbW9kdWxlLmhvdC5kaXNwb3NlKGNzc1JlbG9hZCk7XG4gICAgICBtb2R1bGUuaG90LmFjY2VwdCh1bmRlZmluZWQsIGNzc1JlbG9hZCk7XG4gICAgfVxuICBcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3N0eWxlcy9rcGMuc3R5bFxuLy8gbW9kdWxlIGlkID0gLi9zdHlsZXMva3BjLnN0eWxcbi8vIG1vZHVsZSBjaHVua3MgPSAzIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYmFiZWwtcnVudGltZS9jb3JlLWpzL2pzb24vc3RyaW5naWZ5XCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiYmFiZWwtcnVudGltZS9jb3JlLWpzL2pzb24vc3RyaW5naWZ5XCJcbi8vIG1vZHVsZSBpZCA9IGJhYmVsLXJ1bnRpbWUvY29yZS1qcy9qc29uL3N0cmluZ2lmeVxuLy8gbW9kdWxlIGNodW5rcyA9IDMiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJiYWJlbC1ydW50aW1lL2NvcmUtanMvbWFwXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiYmFiZWwtcnVudGltZS9jb3JlLWpzL21hcFwiXG4vLyBtb2R1bGUgaWQgPSBiYWJlbC1ydW50aW1lL2NvcmUtanMvbWFwXG4vLyBtb2R1bGUgY2h1bmtzID0gMyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImJhYmVsLXJ1bnRpbWUvY29yZS1qcy9udW1iZXIvaXMtbmFuXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiYmFiZWwtcnVudGltZS9jb3JlLWpzL251bWJlci9pcy1uYW5cIlxuLy8gbW9kdWxlIGlkID0gYmFiZWwtcnVudGltZS9jb3JlLWpzL251bWJlci9pcy1uYW5cbi8vIG1vZHVsZSBjaHVua3MgPSAzIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9hc3NpZ25cIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJiYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L2Fzc2lnblwiXG4vLyBtb2R1bGUgaWQgPSBiYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L2Fzc2lnblxuLy8gbW9kdWxlIGNodW5rcyA9IDMiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJiYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L2dldC1vd24tcHJvcGVydHktZGVzY3JpcHRvclwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImJhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3QvZ2V0LW93bi1wcm9wZXJ0eS1kZXNjcmlwdG9yXCJcbi8vIG1vZHVsZSBpZCA9IGJhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3QvZ2V0LW93bi1wcm9wZXJ0eS1kZXNjcmlwdG9yXG4vLyBtb2R1bGUgY2h1bmtzID0gMyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImJhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3Qva2V5c1wiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImJhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3Qva2V5c1wiXG4vLyBtb2R1bGUgaWQgPSBiYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L2tleXNcbi8vIG1vZHVsZSBjaHVua3MgPSAzIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYmFiZWwtcnVudGltZS9jb3JlLWpzL3Byb21pc2VcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJiYWJlbC1ydW50aW1lL2NvcmUtanMvcHJvbWlzZVwiXG4vLyBtb2R1bGUgaWQgPSBiYWJlbC1ydW50aW1lL2NvcmUtanMvcHJvbWlzZVxuLy8gbW9kdWxlIGNodW5rcyA9IDMiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJiYWJlbC1ydW50aW1lL2hlbHBlcnMvYXN5bmNUb0dlbmVyYXRvclwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImJhYmVsLXJ1bnRpbWUvaGVscGVycy9hc3luY1RvR2VuZXJhdG9yXCJcbi8vIG1vZHVsZSBpZCA9IGJhYmVsLXJ1bnRpbWUvaGVscGVycy9hc3luY1RvR2VuZXJhdG9yXG4vLyBtb2R1bGUgY2h1bmtzID0gMyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImJhYmVsLXJ1bnRpbWUvaGVscGVycy9jbGFzc0NhbGxDaGVja1wiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImJhYmVsLXJ1bnRpbWUvaGVscGVycy9jbGFzc0NhbGxDaGVja1wiXG4vLyBtb2R1bGUgaWQgPSBiYWJlbC1ydW50aW1lL2hlbHBlcnMvY2xhc3NDYWxsQ2hlY2tcbi8vIG1vZHVsZSBjaHVua3MgPSAzIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYmFiZWwtcnVudGltZS9oZWxwZXJzL2NyZWF0ZUNsYXNzXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiYmFiZWwtcnVudGltZS9oZWxwZXJzL2NyZWF0ZUNsYXNzXCJcbi8vIG1vZHVsZSBpZCA9IGJhYmVsLXJ1bnRpbWUvaGVscGVycy9jcmVhdGVDbGFzc1xuLy8gbW9kdWxlIGNodW5rcyA9IDMiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJiYWJlbC1ydW50aW1lL2hlbHBlcnMvZXh0ZW5kc1wiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImJhYmVsLXJ1bnRpbWUvaGVscGVycy9leHRlbmRzXCJcbi8vIG1vZHVsZSBpZCA9IGJhYmVsLXJ1bnRpbWUvaGVscGVycy9leHRlbmRzXG4vLyBtb2R1bGUgY2h1bmtzID0gMyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImJhYmVsLXJ1bnRpbWUvaGVscGVycy9pbmhlcml0c1wiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImJhYmVsLXJ1bnRpbWUvaGVscGVycy9pbmhlcml0c1wiXG4vLyBtb2R1bGUgaWQgPSBiYWJlbC1ydW50aW1lL2hlbHBlcnMvaW5oZXJpdHNcbi8vIG1vZHVsZSBjaHVua3MgPSAzIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYmFiZWwtcnVudGltZS9oZWxwZXJzL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiYmFiZWwtcnVudGltZS9oZWxwZXJzL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzXCJcbi8vIG1vZHVsZSBpZCA9IGJhYmVsLXJ1bnRpbWUvaGVscGVycy9vYmplY3RXaXRob3V0UHJvcGVydGllc1xuLy8gbW9kdWxlIGNodW5rcyA9IDMiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJiYWJlbC1ydW50aW1lL2hlbHBlcnMvcG9zc2libGVDb25zdHJ1Y3RvclJldHVyblwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImJhYmVsLXJ1bnRpbWUvaGVscGVycy9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuXCJcbi8vIG1vZHVsZSBpZCA9IGJhYmVsLXJ1bnRpbWUvaGVscGVycy9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuXG4vLyBtb2R1bGUgY2h1bmtzID0gMyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImJhYmVsLXJ1bnRpbWUvaGVscGVycy90eXBlb2ZcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJiYWJlbC1ydW50aW1lL2hlbHBlcnMvdHlwZW9mXCJcbi8vIG1vZHVsZSBpZCA9IGJhYmVsLXJ1bnRpbWUvaGVscGVycy90eXBlb2Zcbi8vIG1vZHVsZSBjaHVua3MgPSAzIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYmFiZWwtcnVudGltZS9yZWdlbmVyYXRvclwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImJhYmVsLXJ1bnRpbWUvcmVnZW5lcmF0b3JcIlxuLy8gbW9kdWxlIGlkID0gYmFiZWwtcnVudGltZS9yZWdlbmVyYXRvclxuLy8gbW9kdWxlIGNodW5rcyA9IDMiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJpbnRhY3RcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJpbnRhY3RcIlxuLy8gbW9kdWxlIGlkID0gaW50YWN0XG4vLyBtb2R1bGUgY2h1bmtzID0gMyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5vZGUtc3R5bGUtbG9hZGVyL2NsaWVudENsZWFudXBcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJub2RlLXN0eWxlLWxvYWRlci9jbGllbnRDbGVhbnVwXCJcbi8vIG1vZHVsZSBpZCA9IG5vZGUtc3R5bGUtbG9hZGVyL2NsaWVudENsZWFudXBcbi8vIG1vZHVsZSBjaHVua3MgPSAzIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibm9kZS1zdHlsZS1sb2FkZXIvY29sbGVjdFwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcIm5vZGUtc3R5bGUtbG9hZGVyL2NvbGxlY3RcIlxuLy8gbW9kdWxlIGlkID0gbm9kZS1zdHlsZS1sb2FkZXIvY29sbGVjdFxuLy8gbW9kdWxlIGNodW5rcyA9IDMiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwYXRoLXRvLXJlZ2V4cFwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcInBhdGgtdG8tcmVnZXhwXCJcbi8vIG1vZHVsZSBpZCA9IHBhdGgtdG8tcmVnZXhwXG4vLyBtb2R1bGUgY2h1bmtzID0gMyJdLCJzb3VyY2VSb290IjoiIn0=