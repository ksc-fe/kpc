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
/******/ 			var chunk = require("./chunk/" + {"0":"4a072d882b30d8113200","1":"d7bee87fcf5a775d258f","2":"a6e3dabf4a6343ef0179"}[chunkId] + ".js");
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
      // 1527587871408
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
    path: /^\/(kpc\/)?design\/?$/,
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
      // 1527587873778
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgZDdmMWMzZTc1ZWQ3OGUyOGFiY2YiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9hcHAvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9hcHAvaW5kZXguc3R5bCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2FwcC9pbmRleC52ZHQiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy91dGlscy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdW5pdmVyc2FsLXJvdXRlci9tYWluLm1qcyIsIndlYnBhY2s6Ly8vLi9zaXRlL3NyYy9tYWluLmpzIiwid2VicGFjazovLy8uL3NpdGUvc3JjL3JlbmRlci5qcyIsIndlYnBhY2s6Ly8vLi9zaXRlL3NyYy9yb3V0ZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3R5bGVzL2twYy5zdHlsIiwid2VicGFjazovLy9leHRlcm5hbCBcImJhYmVsLXJ1bnRpbWUvY29yZS1qcy9qc29uL3N0cmluZ2lmeVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImJhYmVsLXJ1bnRpbWUvY29yZS1qcy9tYXBcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJiYWJlbC1ydW50aW1lL2NvcmUtanMvbnVtYmVyL2lzLW5hblwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImJhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3QvYXNzaWduXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9nZXQtb3duLXByb3BlcnR5LWRlc2NyaXB0b3JcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJiYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L2tleXNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJiYWJlbC1ydW50aW1lL2NvcmUtanMvcHJvbWlzZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImJhYmVsLXJ1bnRpbWUvaGVscGVycy9hc3luY1RvR2VuZXJhdG9yXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYmFiZWwtcnVudGltZS9oZWxwZXJzL2NsYXNzQ2FsbENoZWNrXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYmFiZWwtcnVudGltZS9oZWxwZXJzL2NyZWF0ZUNsYXNzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYmFiZWwtcnVudGltZS9oZWxwZXJzL2V4dGVuZHNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJiYWJlbC1ydW50aW1lL2hlbHBlcnMvaW5oZXJpdHNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJiYWJlbC1ydW50aW1lL2hlbHBlcnMvb2JqZWN0V2l0aG91dFByb3BlcnRpZXNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJiYWJlbC1ydW50aW1lL2hlbHBlcnMvcG9zc2libGVDb25zdHJ1Y3RvclJldHVyblwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImJhYmVsLXJ1bnRpbWUvaGVscGVycy90eXBlb2ZcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJiYWJlbC1ydW50aW1lL3JlZ2VuZXJhdG9yXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiaW50YWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibm9kZS1zdHlsZS1sb2FkZXIvY2xpZW50Q2xlYW51cFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5vZGUtc3R5bGUtbG9hZGVyL2NvbGxlY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwYXRoLXRvLXJlZ2V4cFwiIl0sIm5hbWVzIjpbInNlcnZlclN0eWxlQ2xlYW51cCIsInJlcXVpcmUiLCJBcHAiLCJJbnRhY3QiLCJ0ZW1wbGF0ZSIsImRlZmF1bHRzIiwidmlldyIsInVuZGVmaW5lZCIsImNvbnRhaW5lciIsImxvYWRpbmciLCJzaG93TG9hZGluZyIsInNldCIsImhpZGVMb2FkaW5nIiwiX2luaXQiLCJtb3VudCIsImdldCIsInJlbmRlciIsIlBhZ2UiLCJkYXRhIiwiX2N1cnJlbnQiLCJyZXNvbHZlIiwicmVqZWN0IiwicGFnZSIsInByb2Nlc3MiLCJicm93c2VyIiwid2luZG93IiwiX19wYWdlIiwiJGFwcCIsImRvbmUiLCJpbml0ZWQiLCJvbiIsImxvYWQiLCJ0aGVuIiwicmVuZGVyZWQiLCJoeWRyYXRlIiwib2JqIiwiX1ZkdCIsImJsb2NrcyIsIiRjYWxsZWUiLCJWZHQiLCJoIiwibWlzcyIsImhjIiwiaHUiLCJ3aWRnZXRzIiwiX2Jsb2NrcyIsIl9fYmxvY2tzIiwiX191IiwidXRpbHMiLCJleHRlbmQiLCJfZSIsImVycm9yIiwiX2NsYXNzTmFtZSIsImNsYXNzTmFtZSIsIl9fbyIsIk9wdGlvbnMiLCJfZ2V0TW9kZWwiLCJnZXRNb2RlbCIsIl9zZXRNb2RlbCIsInNldE1vZGVsIiwiX3NldENoZWNrYm94TW9kZWwiLCJzZXRDaGVja2JveE1vZGVsIiwiX2RldGVjdENoZWNrYm94Q2hlY2tlZCIsImRldGVjdENoZWNrYm94Q2hlY2tlZCIsIl9zZXRTZWxlY3RNb2RlbCIsInNldFNlbGVjdE1vZGVsIiwic2VsZiIsIiR0aGlzIiwic2NvcGUiLCJBbmltYXRlIiwicGFyZW50IiwiX3N1cGVyIiwiZSIsImNhbGwiLCJhZGRTdHlsZSIsImtlYmFiQ2FzZSIsInByb3h5RXZlbnQiLCJpc1N0cmluZ09yTnVtYmVyIiwiaXNUZXh0Vk5vZGUiLCJpc1N0cmluZ09yTnVtYmVyTm90RW1wdHkiLCJnZXRUZXh0QnlDaGlsZHJlbiIsImZpbmRQYXJlbnRDb21wb25lbnQiLCJzdHJQYWQiLCJyYW5nZSIsInNlbGVjdElucHV0IiwiXyQiLCJsb2NhbGl6ZSIsImdldFRyYW5zaXRpb24iLCJpc051bGxPclVuZGVmaW5lZCIsImlzT2JqZWN0Iiwic3R5bGUiLCJleHRyYSIsIm1hcCIsImtleSIsImpvaW4iLCJ0ZXN0IiwiX2NhY2hlIiwidXBwZXJjYXNlUGF0dGVybiIsIndvcmQiLCJyZXBsYWNlIiwiaXRlbSIsInRvTG93ZXJDYXNlIiwiY29tcG9uZW50IiwibmFtZSIsInRyaWdnZXIiLCJvIiwidHlwZSIsImNoaWxkcmVuIiwicmV0IiwiQXJyYXkiLCJpc0FycmF5IiwiZm9yRWFjaCIsInZOb2RlIiwiQ29tcG9uZW50IiwiaW5zdGFuY2UiLCJpc1VudGlsIiwicGFyZW50Vk5vZGUiLCJ0YWciLCJzdHIiLCJsZW5ndGgiLCJwYWQiLCJ0b1N0cmluZyIsImwiLCJzdGFydCIsImVuZCIsImFwcGx5IiwidiIsImkiLCJpbnB1dCIsInNlbGVjdCIsInNldFNlbGVjdGlvblJhbmdlIiwiZm9jdXMiLCJ2YWx1ZSIsImkxOG4iLCJ2YWx1ZVJlZ2V4cCIsIm5vdXNlIiwidmFyaWFibGUiLCJzdWZmaXgiLCJpbmRleCIsImluZGV4T2YiLCJzdWJzdHIiLCJzcGxpdCIsIkVycm9yIiwiZmVlZGJhY2siLCJob3Jpem9udGFsIiwidmVydGljYWwiLCJpbXBvcnRhbnQiLCJoYXNPd25Qcm9wZXJ0eSIsIk9iamVjdCIsInByb3RvdHlwZSIsImNhY2hlIiwiZGVjb2RlUGFyYW0iLCJ2YWwiLCJkZWNvZGVVUklDb21wb25lbnQiLCJlcnIiLCJtYXRjaFBhdGgiLCJyb3V0ZSIsInBhdGhuYW1lIiwicGFyZW50S2V5cyIsInBhcmVudFBhcmFtcyIsImNhY2hlS2V5IiwicGF0aCIsInJlZ2V4cCIsImtleXMiLCJwYXR0ZXJuIiwibSIsImV4ZWMiLCJwYXJhbXMiLCJwcm9wIiwicmVwZWF0IiwiZGVsaW1pdGVyIiwiY2hhckF0IiwiY29uY2F0IiwibWF0Y2hSb3V0ZSIsImJhc2VVcmwiLCJtYXRjaCIsImNoaWxkTWF0Y2hlcyIsImNoaWxkSW5kZXgiLCJuZXh0IiwiY2hpbGRSb3V0ZSIsImNoaWxkTWF0Y2giLCJyZXNvbHZlUm91dGUiLCJjb250ZXh0IiwiYWN0aW9uIiwiaXNDaGlsZFJvdXRlIiwicGFyZW50Um91dGUiLCJVbml2ZXJzYWxSb3V0ZXIiLCJyb3V0ZXMiLCJvcHRpb25zIiwiVHlwZUVycm9yIiwicm91dGVyIiwicm9vdCIsInBhdGhuYW1lT3JDb250ZXh0IiwibWF0Y2hlcyIsIm5leHRNYXRjaGVzIiwicmVzdW1lIiwic3RhdHVzIiwic3RhdHVzQ29kZSIsInJlc3VsdCIsInBhdGhUb1JlZ2V4cCIsImNvbmZpZ3VyZSIsImNvbnRlbnQiLCJjYXRjaCIsImNvbnNvbGUiLCJsb2ciLCJzdGFjayIsIlJvdXRlciJdLCJtYXBwaW5ncyI6Ijs7O0FBQUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOENBQXNDLGlGQUFpRjtBQUN2SDtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUFrQixxQkFBcUI7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esc0JBQWM7QUFDZCxZQUFJO0FBQ0o7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3pGQTs7OztBQUNBOzs7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBLElBQUlBLDJCQUFKO0FBQ0EsSUFBSSxJQUFKLEVBQWlCO0FBQ2JBLHlCQUFxQixtQkFBQUMsQ0FBUSxpQ0FBUixDQUFyQjtBQUNIOztJQUVvQkMsRyxXQUNoQkMsaUJBQU9DLFFBQVAsRTs7Ozs7Ozs7a0JBR0RDLFEsdUJBQVc7QUFDUCxlQUFPO0FBQ0hDLGtCQUFNQyxTQURIO0FBRUhDLHVCQUFXRCxTQUZSO0FBR0hFLHFCQUFTO0FBSE4sU0FBUDtBQUtILEs7O2tCQUVEQyxXLDBCQUFjO0FBQ1YsYUFBS0MsR0FBTCxDQUFTLFNBQVQsRUFBb0IsSUFBcEI7QUFDSCxLOztrQkFFREMsVywwQkFBYztBQUNWLGFBQUtELEdBQUwsQ0FBUyxTQUFULEVBQW9CLEtBQXBCO0FBQ0gsSzs7a0JBRURFLEssb0JBQVE7QUFDSixZQUFJLEtBQUosRUFBcUM7QUFDakNWLDZCQUFPVyxLQUFQLENBQWEsSUFBYixFQUFtQixLQUFLQyxHQUFMLENBQVMsV0FBVCxDQUFuQjtBQUNIO0FBQ0osSzs7a0JBRURDLE0sbUJBQU9DLEksRUFBTUMsSSxFQUFNO0FBQUE7O0FBQ2YsYUFBS0MsUUFBTCxHQUFnQkYsSUFBaEI7QUFDQSxlQUFPLHNCQUFZLFVBQUNHLE9BQUQsRUFBVUMsTUFBVixFQUFxQjtBQUNwQyxnQkFBSSxLQUFKLEVBQWtDLE9BQU9BLFFBQVA7O0FBRWxDLGdCQUFNQyxPQUFPLElBQUlMLElBQUosQ0FBU0MsSUFBVCxDQUFiO0FBQ0E7QUFDQSxnQkFBSUssUUFBUUMsT0FBWixFQUFxQjtBQUNqQkMsdUJBQU9DLE1BQVAsR0FBZ0JKLElBQWhCO0FBQ0g7QUFDREEsaUJBQUtLLElBQUwsR0FBWSxNQUFaOztBQUVBLGdCQUFNQyxPQUFPLFNBQVBBLElBQU8sR0FBTTtBQUNmLG9CQUFJLE9BQUtULFFBQUwsS0FBa0JGLElBQXRCLEVBQTRCO0FBQ3hCLDJCQUFLTixHQUFMLENBQVMsTUFBVCxFQUFpQlcsSUFBakI7QUFDSDtBQUNERjtBQUNILGFBTEQ7O0FBT0EsZ0JBQUlFLEtBQUtPLE1BQVQsRUFBaUI7QUFDYkQ7QUFDSCxhQUZELE1BRU87QUFDSE4scUJBQUtRLEVBQUwsQ0FBUSxTQUFSLEVBQW1CRixJQUFuQjtBQUNIO0FBQ0osU0F0Qk0sQ0FBUDtBQXVCSCxLOztrQkFFREcsSSxpQkFBS2QsSSxFQUFNQyxJLEVBQU07QUFBQTs7QUFDYixlQUFPLEtBQUtGLE1BQUwsQ0FBWUMsSUFBWixFQUFrQkMsSUFBbEIsRUFBd0JjLElBQXhCLENBQTZCLFlBQU07QUFDdEMsZ0JBQUksUUFBZVQsUUFBUUMsT0FBdkIsSUFBa0MsQ0FBQyxPQUFLUyxRQUE1QyxFQUFzRDtBQUNsRDlCLGlDQUFPK0IsT0FBUCxDQUFlLE1BQWYsRUFBcUIsT0FBS25CLEdBQUwsQ0FBUyxXQUFULENBQXJCO0FBQ0FmO0FBQ0g7QUFDSixTQUxNLENBQVA7QUFNSCxLOzs7OzRCQTFEYztBQUFFLG1CQUFPSSxlQUFQO0FBQWtCOzs7RUFGTkQsZ0I7a0JBQVpELEc7UUErRGJBLEcsR0FBQUEsRzs7Ozs7OztBQ3pFUjtBQUNBO0FBQ0E7QUFDQSx3R0FBd0csWUFBWSxTQUFTLEVBQUU7QUFDL0g7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O2tCQ0xlLFVBQVNpQyxHQUFULEVBQWNDLElBQWQsRUFBb0JDLE1BQXBCLEVBQTRCQyxPQUE1QixFQUFxQztBQUNwREYsV0FBU0EsT0FBT0csR0FBaEI7QUFDQUosVUFBUUEsTUFBTSxFQUFkO0FBQ0FFLGFBQVdBLFNBQVMsRUFBcEI7QUFDQSxNQUFJRyxJQUFJSixLQUFLSyxJQUFMLENBQVVELENBQWxCO0FBQUEsTUFBcUJFLEtBQUtOLEtBQUtLLElBQUwsQ0FBVUMsRUFBcEM7QUFBQSxNQUF3Q0MsS0FBS1AsS0FBS0ssSUFBTCxDQUFVRSxFQUF2RDtBQUFBLE1BQTJEQyxVQUFVLFFBQVEsS0FBS0EsT0FBYixJQUF3QixFQUE3RjtBQUFBLE1BQWlHQyxVQUFVLEVBQTNHO0FBQUEsTUFBK0dDLFdBQVcsRUFBMUg7QUFBQSxNQUNBQyxNQUFNWCxLQUFLWSxLQURYO0FBQUEsTUFDa0JDLFNBQVNGLElBQUlFLE1BRC9CO0FBQUEsTUFDdUNDLEtBQUtILElBQUlJLEtBRGhEO0FBQUEsTUFDdURDLGFBQWFMLElBQUlNLFNBRHhFO0FBQUEsTUFFQUMsTUFBTVAsSUFBSVEsT0FGVjtBQUFBLE1BRW1CQyxZQUFZRixJQUFJRyxRQUZuQztBQUFBLE1BRTZDQyxZQUFZSixJQUFJSyxRQUY3RDtBQUFBLE1BR0FDLG9CQUFvQmIsSUFBSWMsZ0JBSHhCO0FBQUEsTUFHMENDLHlCQUF5QmYsSUFBSWdCLHFCQUh2RTtBQUFBLE1BSUFDLGtCQUFrQmpCLElBQUlrQixjQUp0QjtBQUFBLE1BS0FDLE9BQU8sS0FBS2hELElBTFo7QUFBQSxNQUtrQmlELFFBQVEsSUFMMUI7QUFBQSxNQUtnQ0MsUUFBUWpDLEdBTHhDO0FBQUEsTUFLNkNrQyxVQUFVSCxRQUFRQSxLQUFLRyxPQUxwRTtBQUFBLE1BSzZFQyxTQUFTLENBQUNoQyxXQUFXLEVBQVosRUFBZ0JpQyxNQUx0RztBQU1BLFNBQU8vQixFQUFFLEtBQUYsRUFBUyxJQUFULEVBQWUsQ0FBQyxRQUFELEVBQVcsWUFBVztBQUFDLFFBQUk7QUFBQyxhQUFPLENBQUMwQixLQUFLbkQsR0FBTCxDQUFTLE1BQVQsQ0FBRCxFQUFvQixDQUFwQixDQUFQO0FBQThCLEtBQW5DLENBQW9DLE9BQU15RCxDQUFOLEVBQVM7QUFBQ3RCLFNBQUdzQixDQUFIO0FBQU07QUFBQyxHQUFqRSxDQUFrRUMsSUFBbEUsQ0FBdUUsSUFBdkUsQ0FBWCxFQUF5RixRQUF6RixFQUFtRyxDQUFDNUIsUUFBUSxTQUFSLElBQXFCLFVBQVN5QixNQUFULEVBQWlCO0FBQUMsV0FBTyxZQUFXO0FBQUMsVUFBSTtBQUFDLGVBQU8sQ0FBQ0osS0FBS25ELEdBQUwsQ0FBUyxTQUFULENBQUQsRUFBdUIsQ0FBdkIsQ0FBUDtBQUFpQyxPQUF0QyxDQUF1QyxPQUFNeUQsQ0FBTixFQUFTO0FBQUN0QixXQUFHc0IsQ0FBSDtBQUFNO0FBQUMsS0FBcEUsQ0FBcUVDLElBQXJFLENBQTBFLElBQTFFLElBQWtGakMsRUFBRTZCLE9BQUYsRUFBVyxFQUFDLE9BQU8sU0FBUixFQUFtQixnQkFBZ0IsTUFBbkMsRUFBMkMsYUFBYSxlQUF4RCxFQUF5RSxZQUFZLElBQXJGLEVBQTJGLFlBQVlGLEtBQXZHLEVBQVgsQ0FBbEYsR0FBOE01RCxTQUFyTjtBQUFnTyxHQUF4USxNQUE4UXVDLFNBQVMsU0FBVCxJQUFzQixVQUFTd0IsTUFBVCxFQUFpQjtBQUM5YSxRQUFJSixPQUFPLElBQVg7QUFDQSxXQUFPN0IsT0FBTyxTQUFQLElBQW9CQSxPQUFPLFNBQVAsRUFBa0JvQyxJQUFsQixDQUF1QixJQUF2QixFQUE2QixZQUFXO0FBQ25FLGFBQU81QixRQUFRLFNBQVIsRUFBbUI0QixJQUFuQixDQUF3QlAsSUFBeEIsRUFBOEJJLE1BQTlCLENBQVA7QUFDQyxLQUYwQixDQUFwQixHQUVGekIsUUFBUSxTQUFSLEVBQW1CNEIsSUFBbkIsQ0FBd0IsSUFBeEIsRUFBOEJILE1BQTlCLENBRkw7QUFHQyxHQUx3SCxLQUtuSHhCLFNBQVMsU0FBVCxFQUFvQjJCLElBQXBCLENBQXlCLElBQXpCLENBTGdCLENBQWYsRUFLZ0MsT0FMaEMsQ0FBUDtBQU1DLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1FDWmVDLFEsR0FBQUEsUTtRQWVBQyxTLEdBQUFBLFM7UUFTQUMsVSxHQUFBQSxVO1FBSUFDLGdCLEdBQUFBLGdCO1FBS0FDLFcsR0FBQUEsVztRQUlBQyx3QixHQUFBQSx3QjtRQUtBQyxpQixHQUFBQSxpQjtRQWdCQUMsbUIsR0FBQUEsbUI7UUFhQUMsTSxHQUFBQSxNO1FBVUFDLEssR0FBQUEsSztRQUtBQyxXLEdBQUFBLFc7UUFZQUMsRSxHQUFBQSxFO1FBNkJBQyxRLEdBQUFBLFE7UUFPQUMsYSxHQUFBQSxhOztBQTNJaEI7Ozs7OztBQUVBLElBQU12QyxRQUFRN0MsaUJBQU82QyxLQUFyQjtJQUNPakMsRyxHQUFvQ2lDLEssQ0FBcENqQyxHO0lBQUt5RSxpQixHQUErQnhDLEssQ0FBL0J3QyxpQjtJQUFtQkMsUSxHQUFZekMsSyxDQUFaeUMsUTtBQUV4QixTQUFTZixRQUFULENBQWtCZ0IsS0FBbEIsRUFBeUJDLEtBQXpCLEVBQWdDO0FBQ25DLFFBQUksQ0FBQ0QsS0FBTCxFQUFZLE9BQU9DLEtBQVA7QUFDWixRQUFJLENBQUNBLEtBQUwsRUFBWSxPQUFPRCxLQUFQO0FBQ1osUUFBSSxPQUFPQSxLQUFQLEtBQWlCLFFBQXJCLEVBQStCO0FBQzNCQyxnQkFBUSxvQkFBWUEsS0FBWixFQUFtQkMsR0FBbkIsQ0FBdUI7QUFBQSxtQkFBVWpCLFVBQVVrQixHQUFWLENBQVYsVUFBNkJGLE1BQU1FLEdBQU4sQ0FBN0I7QUFBQSxTQUF2QixFQUFrRUMsSUFBbEUsQ0FBdUUsR0FBdkUsQ0FBUjtBQUNBSixxQkFBV0EsS0FBWCxJQUFtQixDQUFDQSxLQUFELElBQVUsUUFBUUssSUFBUixDQUFhTCxLQUFiLENBQVYsR0FBZ0MsRUFBaEMsR0FBcUMsR0FBeEQsSUFBOERDLEtBQTlEO0FBQ0gsS0FIRCxNQUdPO0FBQ0hELDJDQUFZQSxLQUFaLEVBQXNCQyxLQUF0QjtBQUNIOztBQUVELFdBQU9ELEtBQVA7QUFDSDs7QUFFRCxJQUFNTSxTQUFTLEVBQWY7QUFDQSxJQUFNQyxtQkFBbUIsUUFBekI7QUFDTyxTQUFTdEIsU0FBVCxDQUFtQnVCLElBQW5CLEVBQXlCO0FBQzVCLFFBQUksQ0FBQ0YsT0FBT0UsSUFBUCxDQUFMLEVBQW1CO0FBQ2ZGLGVBQU9FLElBQVAsSUFBZUEsS0FBS0MsT0FBTCxDQUFhRixnQkFBYixFQUErQixVQUFDRyxJQUFELEVBQVU7QUFDcEQseUJBQVdBLEtBQUtDLFdBQUwsRUFBWDtBQUNILFNBRmMsQ0FBZjtBQUdIO0FBQ0QsV0FBT0wsT0FBT0UsSUFBUCxDQUFQO0FBQ0g7O0FBRU0sU0FBU3RCLFVBQVQsQ0FBb0IwQixTQUFwQixFQUErQkMsSUFBL0IsRUFBcUM7QUFDeEMsV0FBTyxVQUFDL0IsQ0FBRDtBQUFBLGVBQU84QixVQUFVRSxPQUFWLENBQWtCRCxJQUFsQixFQUF3Qi9CLENBQXhCLENBQVA7QUFBQSxLQUFQO0FBQ0g7O0FBRU0sU0FBU0ssZ0JBQVQsQ0FBMEI0QixDQUExQixFQUE2QjtBQUNoQyxRQUFNQyxjQUFjRCxDQUFkLHVEQUFjQSxDQUFkLENBQU47QUFDQSxXQUFPQyxTQUFTLFFBQVQsSUFBcUJBLFNBQVMsUUFBckM7QUFDSDs7QUFFTSxTQUFTNUIsV0FBVCxDQUFxQjJCLENBQXJCLEVBQXdCO0FBQzNCLFdBQU81QixpQkFBaUI0QixDQUFqQixLQUF1QkEsRUFBRUMsSUFBRixLQUFXLENBQXpDO0FBQ0g7O0FBRU0sU0FBUzNCLHdCQUFULENBQWtDMEIsQ0FBbEMsRUFBcUM7QUFDeEMsUUFBTUMsY0FBY0QsQ0FBZCx1REFBY0EsQ0FBZCxDQUFOO0FBQ0EsV0FBT0MsU0FBUyxRQUFULElBQXFCLENBQUMsUUFBUVgsSUFBUixDQUFhVSxDQUFiLENBQXRCLElBQXlDQyxTQUFTLFFBQXpEO0FBQ0g7O0FBRU0sU0FBUzFCLGlCQUFULENBQTJCMkIsUUFBM0IsRUFBcUM7QUFDeEMsUUFBSUMsTUFBTSxFQUFWO0FBQ0EsUUFBSUMsTUFBTUMsT0FBTixDQUFjSCxRQUFkLENBQUosRUFBNkI7QUFDekJBLGlCQUFTSSxPQUFULENBQWlCLGlCQUFTO0FBQ3RCLGdCQUFJakMsWUFBWWtDLEtBQVosQ0FBSixFQUF3QjtBQUNwQkosdUJBQU9JLE1BQU1MLFFBQWI7QUFDSDtBQUNKLFNBSkQ7QUFLSCxLQU5ELE1BTU8sSUFBSTlCLGlCQUFpQjhCLFFBQWpCLENBQUosRUFBZ0M7QUFDbkNDLGVBQU9ELFFBQVA7QUFDSDs7QUFFRCxXQUFPQyxHQUFQO0FBQ0g7O0FBR00sU0FBUzNCLG1CQUFULENBQTZCZ0MsU0FBN0IsRUFBd0NDLFFBQXhDLEVBQWtEQyxPQUFsRCxFQUEyRDtBQUM5RCxRQUFJUCxZQUFKO0FBQ0EsUUFBSXRDLFNBQVM0QyxTQUFTRSxXQUF0QjtBQUNBLFdBQU85QyxNQUFQLEVBQWU7QUFDWCxZQUFJQSxPQUFPK0MsR0FBUCxLQUFlSixTQUFuQixFQUE4QjtBQUMxQkwsa0JBQU10QyxPQUFPcUMsUUFBYjtBQUNBLGdCQUFJUSxPQUFKLEVBQWE7QUFDaEI7QUFDRDdDLGlCQUFTQSxPQUFPOEMsV0FBaEI7QUFDSDtBQUNELFdBQU9SLEdBQVA7QUFDSDs7QUFFTSxTQUFTMUIsTUFBVCxDQUFnQm9DLEdBQWhCLEVBQXFCQyxNQUFyQixFQUE2QkMsR0FBN0IsRUFBa0M7QUFDckNGLFVBQU1BLElBQUlHLFFBQUosRUFBTjtBQUNBRCxVQUFNQSxRQUFRakgsU0FBUixHQUFvQixHQUFwQixHQUEwQmlILEdBQWhDO0FBQ0EsUUFBSUUsSUFBSUosSUFBSUMsTUFBWjtBQUNBLFFBQUlHLElBQUlILE1BQVIsRUFBZ0I7QUFDWkQsY0FBTSxJQUFJVCxLQUFKLENBQVVVLFNBQVNHLENBQVQsR0FBYSxDQUF2QixFQUEwQjVCLElBQTFCLENBQStCMEIsR0FBL0IsSUFBc0NGLEdBQTVDO0FBQ0g7QUFDRCxXQUFPQSxHQUFQO0FBQ0g7O0FBRU0sU0FBU25DLEtBQVQsQ0FBZXdDLEtBQWYsRUFBc0JDLEdBQXRCLEVBQTJCO0FBQzlCLFdBQU9mLE1BQU1nQixLQUFOLENBQVksSUFBWixFQUFrQixFQUFDTixRQUFRSyxNQUFNRCxLQUFOLEdBQWMsQ0FBdkIsRUFBbEIsRUFDRi9CLEdBREUsQ0FDRSxVQUFDa0MsQ0FBRCxFQUFJQyxDQUFKO0FBQUEsZUFBVUEsSUFBSUosS0FBZDtBQUFBLEtBREYsQ0FBUDtBQUVIOztBQUVNLFNBQVN2QyxXQUFULENBQXFCNEMsS0FBckIsRUFBNEI7QUFDL0IsUUFBSUEsTUFBTUMsTUFBVixFQUFrQjtBQUNkRCxjQUFNQyxNQUFOO0FBQ0gsS0FGRCxNQUVPLElBQUlELE1BQU1FLGlCQUFWLEVBQTZCO0FBQ2hDO0FBQ0FGLGNBQU1HLEtBQU47QUFDQUgsY0FBTUUsaUJBQU4sQ0FBd0IsQ0FBeEIsRUFBMkJGLE1BQU1JLEtBQU4sQ0FBWWIsTUFBdkM7QUFDSDtBQUNKOztBQUVELElBQUljLE9BQU8sRUFBWDtBQUNBLElBQU1DLGNBQWMsaUJBQXBCO0FBQ08sU0FBU2pELEVBQVQsQ0FBWVEsR0FBWixFQUFpQjNFLElBQWpCLEVBQXVCO0FBQzFCLFFBQUlrSCxRQUFRckgsSUFBSXNILElBQUosRUFBVXhDLEdBQVYsQ0FBWjtBQUNBLFFBQUlMLGtCQUFrQjRDLEtBQWxCLENBQUosRUFBOEI7QUFDMUJBLGdCQUFRdkMsR0FBUjtBQUNIOztBQUVELFFBQUkzRSxJQUFKLEVBQVU7QUFDTmtILGdCQUFRQSxNQUFNakMsT0FBTixDQUFjbUMsV0FBZCxFQUEyQixVQUFDQyxLQUFELEVBQVFDLFFBQVIsRUFBcUI7QUFDcEQsZ0JBQUlDLGVBQUo7QUFDQSxnQkFBTUMsUUFBUUYsU0FBU0csT0FBVCxDQUFpQixHQUFqQixDQUFkO0FBQ0EsZ0JBQUlELFFBQVEsQ0FBWixFQUFlO0FBQ1hELHlCQUFTRCxTQUFTSSxNQUFULENBQWdCLENBQWhCLEVBQW1CRixLQUFuQixDQUFUO0FBQ0FELHlCQUFTQSxPQUFPSSxLQUFQLENBQWEsR0FBYixDQUFUO0FBQ0FMLDJCQUFXQSxTQUFTSSxNQUFULENBQWdCRixRQUFRLENBQXhCLENBQVg7QUFDQUYsMkJBQVd6SCxJQUFJRyxJQUFKLEVBQVVzSCxRQUFWLENBQVg7QUFDQSxvQkFBSUEsV0FBVyxDQUFmLEVBQWtCO0FBQ2QsMkJBQU9DLE9BQU9sQixNQUFQLEdBQWdCLENBQWhCLEdBQW9Ca0IsT0FBTyxDQUFQLENBQXBCLEdBQWdDQSxPQUFPLENBQVAsQ0FBdkM7QUFDSCxpQkFGRCxNQUVPO0FBQ0gsMkJBQU9BLE9BQU9sQixNQUFQLEdBQWdCLENBQWhCLEdBQW9Ca0IsT0FBTyxDQUFQLENBQXBCLEdBQWdDLEVBQXZDO0FBQ0g7QUFDSixhQVZELE1BVU87QUFDSEQsMkJBQVd6SCxJQUFJRyxJQUFKLEVBQVVzSCxRQUFWLENBQVg7QUFDQSx1QkFBT2hELGtCQUFrQmdELFFBQWxCLElBQThCRCxLQUE5QixHQUFzQ0MsUUFBN0M7QUFDSDtBQUNKLFNBakJPLENBQVI7QUFrQkg7O0FBRUQsV0FBT0osS0FBUDtBQUNIO0FBQ00sU0FBUzlDLFFBQVQsQ0FBa0JwRSxJQUFsQixFQUF3QjtBQUMzQixRQUFJLENBQUN1RSxTQUFTdkUsSUFBVCxDQUFMLEVBQXFCO0FBQ2pCLGNBQU0sSUFBSTRILEtBQUosOEJBQXFDNUgsSUFBckMsQ0FBTjtBQUNIO0FBQ0RtSCxXQUFPbkgsSUFBUDtBQUNIOztBQUVNLFNBQVNxRSxhQUFULENBQXVCd0QsUUFBdkIsRUFBaUM7QUFDcEMsUUFBTUMsYUFBYUQsU0FBU0MsVUFBNUI7QUFDQSxRQUFNQyxXQUFXRixTQUFTRSxRQUExQjtBQUNBLFFBQUlGLFNBQVNHLFNBQVQsS0FBc0IsWUFBMUIsRUFBd0M7QUFDcEMsWUFBSUYsZUFBZSxNQUFuQixFQUEyQjtBQUN2QixtQkFBTyxZQUFQO0FBQ0gsU0FGRCxNQUVPLElBQUlBLGVBQWUsT0FBbkIsRUFBNEI7QUFDL0IsbUJBQU8sV0FBUDtBQUNILFNBRk0sTUFFQSxJQUFJQyxhQUFhLFFBQWpCLEVBQTJCO0FBQzlCLG1CQUFPLFNBQVA7QUFDSCxTQUZNLE1BRUEsSUFBSUEsYUFBYSxLQUFqQixFQUF3QjtBQUMzQixtQkFBTyxXQUFQO0FBQ0g7QUFDSixLQVZELE1BVU87QUFDSCxZQUFJQSxhQUFhLFFBQWpCLEVBQTJCO0FBQ3ZCLG1CQUFPLFNBQVA7QUFDSCxTQUZELE1BRU8sSUFBSUEsYUFBYSxLQUFqQixFQUF3QjtBQUMzQixtQkFBTyxXQUFQO0FBQ0gsU0FGTSxNQUVBLElBQUlELGVBQWUsTUFBbkIsRUFBMkI7QUFDOUIsbUJBQU8sWUFBUDtBQUNILFNBRk0sTUFFQSxJQUFJQSxlQUFlLE9BQW5CLEVBQTRCO0FBQy9CLG1CQUFPLFdBQVA7QUFDSDtBQUNKO0FBQ0QsV0FBTyxXQUFQO0FBQ0gsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xLRDs7Ozs7O0FBRUE7Ozs7Ozs7OztJQVNRRyxjLEdBQW1CQyxPQUFPQyxTLENBQTFCRixjLEVBYlI7O0FBY0EsSUFBTUcsUUFBUSxtQkFBZDs7QUFFQSxTQUFTQyxXQUFULENBQXFCQyxHQUFyQixFQUEwQjtBQUN4QixNQUFJO0FBQ0YsV0FBT0MsbUJBQW1CRCxHQUFuQixDQUFQO0FBQ0QsR0FGRCxDQUVFLE9BQU9FLEdBQVAsRUFBWTtBQUNaLFdBQU9GLEdBQVA7QUFDRDtBQUNGOztBQUVELFNBQVNHLFNBQVQsQ0FBbUJDLEtBQW5CLEVBQTBCQyxRQUExQixFQUFvQ0MsVUFBcEMsRUFBZ0RDLFlBQWhELEVBQThEO0FBQzVELE1BQU1uQyxNQUFNLENBQUNnQyxNQUFNakQsUUFBbkI7QUFDQSxNQUFNcUQsWUFBY0osTUFBTUssSUFBTixJQUFjLEVBQTVCLFVBQWtDckMsR0FBeEM7QUFDQSxNQUFJc0MsU0FBU1osTUFBTXZJLEdBQU4sQ0FBVWlKLFFBQVYsQ0FBYjs7QUFFQSxNQUFJLENBQUNFLE1BQUwsRUFBYTtBQUNYLFFBQU1DLE9BQU8sRUFBYjtBQUNBRCxhQUFTO0FBQ1BDLGdCQURPO0FBRVBDLGVBQVMsNEJBQWFSLE1BQU1LLElBQU4sSUFBYyxFQUEzQixFQUErQkUsSUFBL0IsRUFBcUMsRUFBRXZDLFFBQUYsRUFBckM7QUFGRixLQUFUO0FBSUEwQixVQUFNM0ksR0FBTixDQUFVcUosUUFBVixFQUFvQkUsTUFBcEI7QUFDRDs7QUFFRCxNQUFNRyxJQUFJSCxPQUFPRSxPQUFQLENBQWVFLElBQWYsQ0FBb0JULFFBQXBCLENBQVY7QUFDQSxNQUFJLENBQUNRLENBQUwsRUFBUTtBQUNOLFdBQU8sSUFBUDtBQUNEOztBQUVELE1BQU1KLE9BQU9JLEVBQUUsQ0FBRixDQUFiO0FBQ0EsTUFBTUUsU0FBUyxzQkFBYyxFQUFkLEVBQWtCUixZQUFsQixDQUFmOztBQUVBLE9BQUssSUFBSWhDLElBQUksQ0FBYixFQUFnQkEsSUFBSXNDLEVBQUU5QyxNQUF0QixFQUE4QlEsS0FBSyxDQUFuQyxFQUFzQztBQUNwQyxRQUFNbEMsTUFBTXFFLE9BQU9DLElBQVAsQ0FBWXBDLElBQUksQ0FBaEIsQ0FBWjtBQUNBLFFBQU15QyxPQUFPM0UsSUFBSVUsSUFBakI7QUFDQSxRQUFNNkIsUUFBUWlDLEVBQUV0QyxDQUFGLENBQWQ7QUFDQSxRQUFJSyxVQUFVN0gsU0FBVixJQUF1QixDQUFDNEksZUFBZTFFLElBQWYsQ0FBb0I4RixNQUFwQixFQUE0QkMsSUFBNUIsQ0FBNUIsRUFBK0Q7QUFDN0QsVUFBSTNFLElBQUk0RSxNQUFSLEVBQWdCO0FBQ2RGLGVBQU9DLElBQVAsSUFBZXBDLFFBQVFBLE1BQU1TLEtBQU4sQ0FBWWhELElBQUk2RSxTQUFoQixFQUEyQjlFLEdBQTNCLENBQStCMkQsV0FBL0IsQ0FBUixHQUFzRCxFQUFyRTtBQUNELE9BRkQsTUFFTztBQUNMZ0IsZUFBT0MsSUFBUCxJQUFlcEMsUUFBUW1CLFlBQVluQixLQUFaLENBQVIsR0FBNkJBLEtBQTVDO0FBQ0Q7QUFDRjtBQUNGOztBQUVELFNBQU87QUFDTDZCLFVBQU0sQ0FBQ3JDLEdBQUQsSUFBUXFDLEtBQUtVLE1BQUwsQ0FBWVYsS0FBSzFDLE1BQUwsR0FBYyxDQUExQixNQUFpQyxHQUF6QyxHQUErQzBDLEtBQUtyQixNQUFMLENBQVksQ0FBWixDQUEvQyxHQUFnRXFCLElBRGpFO0FBRUxFLFVBQU1MLFdBQVdjLE1BQVgsQ0FBa0JWLE9BQU9DLElBQXpCLENBRkQ7QUFHTEk7QUFISyxHQUFQO0FBS0Q7O0FBRUQ7Ozs7Ozs7OztBQVNBLFNBQVNNLFVBQVQsQ0FBb0JqQixLQUFwQixFQUEyQmtCLE9BQTNCLEVBQW9DakIsUUFBcEMsRUFBOENDLFVBQTlDLEVBQTBEQyxZQUExRCxFQUF3RTtBQUN0RSxNQUFJZ0IsY0FBSjtBQUNBLE1BQUlDLHFCQUFKO0FBQ0EsTUFBSUMsYUFBYSxDQUFqQjs7QUFFQSxTQUFPO0FBQ0xDLFFBREssa0JBQ0U7QUFDTCxVQUFJLENBQUNILEtBQUwsRUFBWTtBQUNWQSxnQkFBUXBCLFVBQVVDLEtBQVYsRUFBaUJDLFFBQWpCLEVBQTJCQyxVQUEzQixFQUF1Q0MsWUFBdkMsQ0FBUjs7QUFFQSxZQUFJZ0IsS0FBSixFQUFXO0FBQ1QsaUJBQU87QUFDTG5KLGtCQUFNLEtBREQ7QUFFTHdHLG1CQUFPO0FBQ0x3QiwwQkFESztBQUVMa0IsOEJBRks7QUFHTGIsb0JBQU1jLE1BQU1kLElBSFA7QUFJTEUsb0JBQU1ZLE1BQU1aLElBSlA7QUFLTEksc0JBQVFRLE1BQU1SO0FBTFQ7QUFGRixXQUFQO0FBVUQ7QUFDRjs7QUFFRCxVQUFJUSxTQUFTbkIsTUFBTWpELFFBQW5CLEVBQTZCO0FBQzNCLGVBQU9zRSxhQUFhckIsTUFBTWpELFFBQU4sQ0FBZVksTUFBbkMsRUFBMkM7QUFDekMsY0FBSSxDQUFDeUQsWUFBTCxFQUFtQjtBQUNqQixnQkFBTUcsYUFBYXZCLE1BQU1qRCxRQUFOLENBQWVzRSxVQUFmLENBQW5CO0FBQ0FFLHVCQUFXN0csTUFBWCxHQUFvQnNGLEtBQXBCOztBQUVBb0IsMkJBQWVILFdBQVdNLFVBQVgsRUFBdUJMLFVBQVVDLE1BQU1kLElBQXZDLEVBQTZDSixTQUFTakIsTUFBVCxDQUFnQm1DLE1BQU1kLElBQU4sQ0FBVzFDLE1BQTNCLENBQTdDLEVBQWlGd0QsTUFBTVosSUFBdkYsRUFBNkZZLE1BQU1SLE1BQW5HLENBQWY7QUFDRDs7QUFFRCxjQUFNYSxhQUFhSixhQUFhRSxJQUFiLEVBQW5CO0FBQ0EsY0FBSSxDQUFDRSxXQUFXeEosSUFBaEIsRUFBc0I7QUFDcEIsbUJBQU87QUFDTEEsb0JBQU0sS0FERDtBQUVMd0cscUJBQU9nRCxXQUFXaEQ7QUFGYixhQUFQO0FBSUQ7O0FBRUQ0Qyx5QkFBZSxJQUFmO0FBQ0FDLHdCQUFjLENBQWQ7QUFDRDtBQUNGOztBQUVELGFBQU8sRUFBRXJKLE1BQU0sSUFBUixFQUFQO0FBQ0Q7QUExQ0ksR0FBUDtBQTRDRDs7QUFFRDs7Ozs7Ozs7O0FBU0EsU0FBU3lKLFlBQVQsQ0FBc0JDLE9BQXRCLEVBQStCZixNQUEvQixFQUF1QztBQUNyQyxNQUFJLE9BQU9lLFFBQVExQixLQUFSLENBQWMyQixNQUFyQixLQUFnQyxVQUFwQyxFQUFnRDtBQUM5QyxXQUFPRCxRQUFRMUIsS0FBUixDQUFjMkIsTUFBZCxDQUFxQkQsT0FBckIsRUFBOEJmLE1BQTlCLENBQVA7QUFDRDs7QUFFRCxTQUFPLElBQVA7QUFDRDs7QUFFRDs7Ozs7Ozs7O0FBU0EsU0FBU2lCLFlBQVQsQ0FBc0JDLFdBQXRCLEVBQW1DTixVQUFuQyxFQUErQztBQUM3QyxNQUFJdkIsUUFBUXVCLFVBQVo7QUFDQSxTQUFPdkIsS0FBUCxFQUFjO0FBQ1pBLFlBQVFBLE1BQU10RixNQUFkO0FBQ0EsUUFBSXNGLFVBQVU2QixXQUFkLEVBQTJCO0FBQ3pCLGFBQU8sSUFBUDtBQUNEO0FBQ0Y7QUFDRCxTQUFPLEtBQVA7QUFDRDs7SUFFS0MsZTtBQUNKLDJCQUFZQyxNQUFaLEVBQWtDO0FBQUEsUUFBZEMsT0FBYyx1RUFBSixFQUFJO0FBQUE7O0FBQ2hDLFFBQUl4QyxPQUFPdUMsTUFBUCxNQUFtQkEsTUFBdkIsRUFBK0I7QUFDN0IsWUFBTSxJQUFJRSxTQUFKLENBQWMsZ0JBQWQsQ0FBTjtBQUNEOztBQUVELFNBQUtmLE9BQUwsR0FBZWMsUUFBUWQsT0FBUixJQUFtQixFQUFsQztBQUNBLFNBQUtPLFlBQUwsR0FBb0JPLFFBQVFQLFlBQVIsSUFBd0JBLFlBQTVDO0FBQ0EsU0FBS0MsT0FBTCxHQUFlLHNCQUFjLEVBQUVRLFFBQVEsSUFBVixFQUFkLEVBQWdDRixRQUFRTixPQUF4QyxDQUFmO0FBQ0EsU0FBS1MsSUFBTCxHQUFZbEYsTUFBTUMsT0FBTixDQUFjNkUsTUFBZCxJQUF3QixFQUFFMUIsTUFBTSxFQUFSLEVBQVl0RCxVQUFVZ0YsTUFBdEIsRUFBOEJySCxRQUFRLElBQXRDLEVBQXhCLEdBQXVFcUgsTUFBbkY7QUFDQSxTQUFLSSxJQUFMLENBQVV6SCxNQUFWLEdBQW1CLElBQW5CO0FBQ0Q7OzRCQUVEbEQsTyxvQkFBUTRLLGlCLEVBQW1CO0FBQ3pCLFFBQU1WLFVBQVUsc0JBQWMsRUFBZCxFQUFrQixLQUFLQSxPQUF2QixFQUFnQyxPQUFPVSxpQkFBUCxLQUE2QixRQUE3QixHQUF3QyxFQUFFbkMsVUFBVW1DLGlCQUFaLEVBQXhDLEdBQTBFQSxpQkFBMUcsQ0FBaEI7QUFDQSxRQUFNakIsUUFBUUYsV0FBVyxLQUFLa0IsSUFBaEIsRUFBc0IsS0FBS2pCLE9BQTNCLEVBQW9DUSxRQUFRekIsUUFBUixDQUFpQmpCLE1BQWpCLENBQXdCLEtBQUtrQyxPQUFMLENBQWF2RCxNQUFyQyxDQUFwQyxFQUFrRixFQUFsRixFQUFzRixJQUF0RixDQUFkO0FBQ0EsUUFBTW5HLFVBQVUsS0FBS2lLLFlBQXJCO0FBQ0EsUUFBSVksVUFBVSxJQUFkO0FBQ0EsUUFBSUMsY0FBYyxJQUFsQjs7QUFFQSxhQUFTaEIsSUFBVCxDQUFjaUIsTUFBZCxFQUFvRDtBQUFBLFVBQTlCN0gsTUFBOEIsdUVBQXJCMkgsUUFBUTdELEtBQVIsQ0FBY3dCLEtBQU87O0FBQ2xEcUMsZ0JBQVVDLGVBQWVuQixNQUFNRyxJQUFOLEVBQXpCO0FBQ0FnQixvQkFBYyxJQUFkOztBQUVBLFVBQUksQ0FBQ0MsTUFBTCxFQUFhO0FBQ1gsWUFBSUYsUUFBUXJLLElBQVIsSUFBZ0IsQ0FBQzRKLGFBQWFsSCxNQUFiLEVBQXFCMkgsUUFBUTdELEtBQVIsQ0FBY3dCLEtBQW5DLENBQXJCLEVBQWdFO0FBQzlEc0Msd0JBQWNELE9BQWQ7QUFDQSxpQkFBTyxrQkFBUTdLLE9BQVIsQ0FBZ0IsSUFBaEIsQ0FBUDtBQUNEO0FBQ0Y7O0FBRUQsVUFBSTZLLFFBQVFySyxJQUFaLEVBQWtCO0FBQ2hCLGVBQU8sa0JBQVFQLE1BQVIsQ0FBZSxzQkFBYyxJQUFJeUgsS0FBSixDQUFVLGdCQUFWLENBQWQsRUFBMkMsRUFBRXdDLGdCQUFGLEVBQVdjLFFBQVEsR0FBbkIsRUFBd0JDLFlBQVksR0FBcEMsRUFBM0MsQ0FBZixDQUFQO0FBQ0Q7O0FBRUQsYUFBTyxrQkFBUWpMLE9BQVIsQ0FBZ0JBLFFBQVEsc0JBQWMsRUFBZCxFQUFrQmtLLE9BQWxCLEVBQTJCVyxRQUFRN0QsS0FBbkMsQ0FBUixFQUFtRDZELFFBQVE3RCxLQUFSLENBQWNtQyxNQUFqRSxDQUFoQixFQUEwRnZJLElBQTFGLENBQStGLGtCQUFVO0FBQzlHLFlBQUlzSyxXQUFXLElBQVgsSUFBbUJBLFdBQVcvTCxTQUFsQyxFQUE2QztBQUMzQyxpQkFBTytMLE1BQVA7QUFDRDs7QUFFRCxlQUFPcEIsS0FBS2lCLE1BQUwsRUFBYTdILE1BQWIsQ0FBUDtBQUNELE9BTk0sQ0FBUDtBQU9EOztBQUVEZ0gsWUFBUUosSUFBUixHQUFlQSxJQUFmOztBQUVBLFdBQU9BLEtBQUssSUFBTCxFQUFXLEtBQUthLElBQWhCLENBQVA7QUFDRCxHOzs7OztBQUdITCxnQkFBZ0JhLFlBQWhCLEdBQStCQSxzQkFBL0I7QUFDQWIsZ0JBQWdCL0IsU0FBaEIsR0FBNEJBLFNBQTVCO0FBQ0ErQixnQkFBZ0JiLFVBQWhCLEdBQTZCQSxVQUE3QjtBQUNBYSxnQkFBZ0JMLFlBQWhCLEdBQStCQSxZQUEvQjs7a0JBRWVLLGU7QUFDZjs7Ozs7Ozs7Ozs7O0FDM05BOztBQUNBOztBQUVBOztBQUVBdkwsT0FBT29DLEdBQVAsQ0FBV2lLLFNBQVgsQ0FBcUIsWUFBckIsRUFBbUMsQ0FBQyxJQUFELEVBQU8sSUFBUCxDQUFuQyxFOzs7Ozs7Ozs7Ozs7O2tCQ0FlLFVBQVN2QyxJQUFULEVBQWU7QUFDMUIsV0FBTzZCLGlCQUFPMUssT0FBUCxDQUFlLEVBQUN5SSxVQUFVSSxJQUFYLEVBQWYsRUFBaUNqSSxJQUFqQyxDQUFzQyxnQkFBa0I7QUFBQSxZQUFoQmYsSUFBZ0IsUUFBaEJBLElBQWdCO0FBQUEsWUFBVkMsSUFBVSxRQUFWQSxJQUFVOztBQUMzRCxZQUFNUyxPQUFPLElBQUl6QixhQUFKLEVBQWI7QUFDQSxlQUFPeUIsS0FBS1gsTUFBTCxDQUFZQyxJQUFaLEVBQWtCQyxJQUFsQixFQUF3QmMsSUFBeEIsQ0FBNkIsWUFBTTtBQUN0QyxtQkFBTztBQUNIeUsseUJBQVM5SyxLQUFLOEYsUUFBTCxFQUROO0FBRUgvQix1QkFBTztBQUZKLGFBQVA7QUFJSCxTQUxNLEVBS0pnSCxLQUxJLENBS0UsYUFBSztBQUNWQyxvQkFBUUMsR0FBUixDQUFZcEksRUFBRXFJLEtBQWQ7QUFDSCxTQVBNLENBQVA7QUFRSCxLQVZNLENBQVA7QUFXSCxDOztBQWpCRDs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0hBOzs7Ozs7QUFFQTtBQUNJO0FBQ0k7QUFDSjtBQUNKOztrQkFFZSxJQUFJQyx5QkFBSixDQUFXLENBQ3RCO0FBQ0k3QyxVQUFNLGNBRFY7QUFFSXNCO0FBQUEsNEZBQVE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUNBQ2dCLDhHQURoQjs7QUFBQTtBQUFBO0FBQUE7QUFDSXRLLG9DQURKO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FBUjs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZKLENBRHNCLEVBT3RCO0FBQ0lnSixVQUFNLHVCQURWO0FBRUlzQjtBQUFBLDZGQUFRO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1DQUNnQiwrR0FEaEI7O0FBQUE7QUFBQTtBQUFBO0FBQ0l0SyxvQ0FESjtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQVI7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGSixDQVBzQixFQWF0QjtBQUNJZ0osVUFBTSxNQURWO0FBRUlzQjtBQUFBLDZGQUFRLGtCQUFPRCxPQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1DQUVZLGlIQUZaOztBQUFBO0FBQUE7QUFBQSwyQ0FHTTtBQUNGckIsc0NBQU1xQixRQUFRZixNQUFSLENBQWUsQ0FBZjtBQURKLDZCQUhOO0FBQUE7QUFFQXRKLG9DQUZBO0FBR0FDLG9DQUhBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FBUjs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZKLENBYnNCLENBQVgsQzs7Ozs7Ozs7QUNSZjtBQUNBO0FBQ0E7QUFDQSxxR0FBcUcsWUFBWSxTQUFTLEVBQUU7QUFDNUg7QUFDQTtBQUNBOzs7Ozs7OztBQ05BLGlFOzs7Ozs7O0FDQUEsc0Q7Ozs7Ozs7QUNBQSxnRTs7Ozs7OztBQ0FBLGdFOzs7Ozs7O0FDQUEscUY7Ozs7Ozs7QUNBQSw4RDs7Ozs7OztBQ0FBLDBEOzs7Ozs7O0FDQUEsbUU7Ozs7Ozs7QUNBQSxpRTs7Ozs7OztBQ0FBLDhEOzs7Ozs7O0FDQUEsMEQ7Ozs7Ozs7QUNBQSwyRDs7Ozs7OztBQ0FBLDBFOzs7Ozs7O0FDQUEsNEU7Ozs7Ozs7QUNBQSx5RDs7Ozs7OztBQ0FBLHNEOzs7Ozs7O0FDQUEsbUM7Ozs7Ozs7QUNBQSw0RDs7Ozs7OztBQ0FBLHNEOzs7Ozs7O0FDQUEsMkMiLCJmaWxlIjoicmVuZGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBjaHVua3NcbiBcdC8vIFwiMFwiIG1lYW5zIFwiYWxyZWFkeSBsb2FkZWRcIlxuIFx0dmFyIGluc3RhbGxlZENodW5rcyA9IHtcbiBcdFx0MzogMFxuIFx0fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG4gXHQvLyBUaGlzIGZpbGUgY29udGFpbnMgb25seSB0aGUgZW50cnkgY2h1bmsuXG4gXHQvLyBUaGUgY2h1bmsgbG9hZGluZyBmdW5jdGlvbiBmb3IgYWRkaXRpb25hbCBjaHVua3NcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZSA9IGZ1bmN0aW9uIHJlcXVpcmVFbnN1cmUoY2h1bmtJZCkge1xuIFx0XHQvLyBcIjBcIiBpcyB0aGUgc2lnbmFsIGZvciBcImFscmVhZHkgbG9hZGVkXCJcbiBcdFx0aWYoaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdICE9PSAwKSB7XG4gXHRcdFx0dmFyIGNodW5rID0gcmVxdWlyZShcIi4vY2h1bmsvXCIgKyB7XCIwXCI6XCI0YTA3MmQ4ODJiMzBkODExMzIwMFwiLFwiMVwiOlwiZDdiZWU4N2ZjZjVhNzc1ZDI1OGZcIixcIjJcIjpcImE2ZTNkYWJmNGE2MzQzZWYwMTc5XCJ9W2NodW5rSWRdICsgXCIuanNcIik7XG4gXHRcdFx0dmFyIG1vcmVNb2R1bGVzID0gY2h1bmsubW9kdWxlcywgY2h1bmtJZHMgPSBjaHVuay5pZHM7XG4gXHRcdFx0Zm9yKHZhciBtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuIFx0XHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdFx0fVxuIFx0XHRcdGZvcih2YXIgaSA9IDA7IGkgPCBjaHVua0lkcy5sZW5ndGg7IGkrKylcbiBcdFx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkc1tpXV0gPSAwO1xuIFx0XHR9XG4gXHRcdHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcbiBcdH07XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL2twYy9cIjtcblxuIFx0Ly8gdW5jYXRjaGVkIGVycm9yIGhhbmRsZXIgZm9yIHdlYnBhY2sgcnVudGltZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vZSA9IGZ1bmN0aW9uKGVycikge1xuIFx0XHRwcm9jZXNzLm5leHRUaWNrKGZ1bmN0aW9uKCkge1xuIFx0XHRcdHRocm93IGVycjsgLy8gY2F0Y2ggdGhpcyBlcnJvciBieSB1c2luZyBTeXN0ZW0uaW1wb3J0KCkuY2F0Y2goKVxuIFx0XHR9KTtcbiBcdH07XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NpdGUvc3JjL3JlbmRlci5qc1wiKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCBkN2YxYzNlNzVlZDc4ZTI4YWJjZiIsImltcG9ydCBJbnRhY3QgZnJvbSAnaW50YWN0JztcbmltcG9ydCB0ZW1wbGF0ZSBmcm9tICcuL2luZGV4LnZkdCc7XG5pbXBvcnQgJy4uLy4uL3N0eWxlcy9rcGMuc3R5bCc7XG5pbXBvcnQgJy4vaW5kZXguc3R5bCc7XG5cbmxldCBzZXJ2ZXJTdHlsZUNsZWFudXA7XG5pZiAocHJvY2Vzcy5zc3IpIHtcbiAgICBzZXJ2ZXJTdHlsZUNsZWFudXAgPSByZXF1aXJlKCdub2RlLXN0eWxlLWxvYWRlci9jbGllbnRDbGVhbnVwJyk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFwcCBleHRlbmRzIEludGFjdCB7XG4gICAgQEludGFjdC50ZW1wbGF0ZSgpXG4gICAgZ2V0IHRlbXBsYXRlKCkgeyByZXR1cm4gdGVtcGxhdGU7IH1cblxuICAgIGRlZmF1bHRzKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdmlldzogdW5kZWZpbmVkLFxuICAgICAgICAgICAgY29udGFpbmVyOiB1bmRlZmluZWQsXG4gICAgICAgICAgICBsb2FkaW5nOiBmYWxzZSxcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBzaG93TG9hZGluZygpIHtcbiAgICAgICAgdGhpcy5zZXQoJ2xvYWRpbmcnLCB0cnVlKTtcbiAgICB9XG5cbiAgICBoaWRlTG9hZGluZygpIHtcbiAgICAgICAgdGhpcy5zZXQoJ2xvYWRpbmcnLCBmYWxzZSk7XG4gICAgfVxuXG4gICAgX2luaXQoKSB7XG4gICAgICAgIGlmICghcHJvY2Vzcy5zc3IgJiYgcHJvY2Vzcy5icm93c2VyKSB7XG4gICAgICAgICAgICBJbnRhY3QubW91bnQodGhpcywgdGhpcy5nZXQoJ2NvbnRhaW5lcicpKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJlbmRlcihQYWdlLCBkYXRhKSB7XG4gICAgICAgIHRoaXMuX2N1cnJlbnQgPSBQYWdlO1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgaWYgKCFwcm9jZXNzLnNzciAmJiBwcm9jZXNzLm5vZGUpIHJldHVybiByZWplY3QoKTtcblxuICAgICAgICAgICAgY29uc3QgcGFnZSA9IG5ldyBQYWdlKGRhdGEpO1xuICAgICAgICAgICAgLy8gZm9yIGRlYnVnXG4gICAgICAgICAgICBpZiAocHJvY2Vzcy5icm93c2VyKSB7XG4gICAgICAgICAgICAgICAgd2luZG93Ll9fcGFnZSA9IHBhZ2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBwYWdlLiRhcHAgPSB0aGlzO1xuXG4gICAgICAgICAgICBjb25zdCBkb25lID0gKCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLl9jdXJyZW50ID09PSBQYWdlKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0KCd2aWV3JywgcGFnZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgaWYgKHBhZ2UuaW5pdGVkKSB7XG4gICAgICAgICAgICAgICAgZG9uZSgpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBwYWdlLm9uKCckaW5pdGVkJywgZG9uZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGxvYWQoUGFnZSwgZGF0YSkge1xuICAgICAgICByZXR1cm4gdGhpcy5yZW5kZXIoUGFnZSwgZGF0YSkudGhlbigoKSA9PiB7XG4gICAgICAgICAgICBpZiAocHJvY2Vzcy5zc3IgJiYgcHJvY2Vzcy5icm93c2VyICYmICF0aGlzLnJlbmRlcmVkKSB7XG4gICAgICAgICAgICAgICAgSW50YWN0Lmh5ZHJhdGUodGhpcywgdGhpcy5nZXQoJ2NvbnRhaW5lcicpKTtcbiAgICAgICAgICAgICAgICBzZXJ2ZXJTdHlsZUNsZWFudXAoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxufVxuXG5leHBvcnQge0FwcH07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL2FwcC9pbmRleC5qcyIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG4gICAgaWYobW9kdWxlLmhvdCkge1xuICAgICAgLy8gMTUyNzU4Nzg3MTQwOFxuICAgICAgdmFyIGNzc1JlbG9hZCA9IHJlcXVpcmUoXCIhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1ob3QtbG9hZGVyL2hvdE1vZHVsZVJlcGxhY2VtZW50LmpzXCIpKG1vZHVsZS5pZCwge1wiZmlsZU1hcFwiOlwie2ZpbGVOYW1lfVwifSk7XG4gICAgICBtb2R1bGUuaG90LmRpc3Bvc2UoY3NzUmVsb2FkKTtcbiAgICAgIG1vZHVsZS5ob3QuYWNjZXB0KHVuZGVmaW5lZCwgY3NzUmVsb2FkKTtcbiAgICB9XG4gIFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vY29tcG9uZW50cy9hcHAvaW5kZXguc3R5bFxuLy8gbW9kdWxlIGlkID0gLi9jb21wb25lbnRzL2FwcC9pbmRleC5zdHlsXG4vLyBtb2R1bGUgY2h1bmtzID0gMyIsIlxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24ob2JqLCBfVmR0LCBibG9ja3MsICRjYWxsZWUpIHtcbl9WZHQgfHwgKF9WZHQgPSBWZHQpO1xub2JqIHx8IChvYmogPSB7fSk7XG5ibG9ja3MgfHwgKGJsb2NrcyA9IHt9KTtcbnZhciBoID0gX1ZkdC5taXNzLmgsIGhjID0gX1ZkdC5taXNzLmhjLCBodSA9IF9WZHQubWlzcy5odSwgd2lkZ2V0cyA9IHRoaXMgJiYgdGhpcy53aWRnZXRzIHx8IHt9LCBfYmxvY2tzID0ge30sIF9fYmxvY2tzID0ge30sXG5fX3UgPSBfVmR0LnV0aWxzLCBleHRlbmQgPSBfX3UuZXh0ZW5kLCBfZSA9IF9fdS5lcnJvciwgX2NsYXNzTmFtZSA9IF9fdS5jbGFzc05hbWUsXG5fX28gPSBfX3UuT3B0aW9ucywgX2dldE1vZGVsID0gX19vLmdldE1vZGVsLCBfc2V0TW9kZWwgPSBfX28uc2V0TW9kZWwsXG5fc2V0Q2hlY2tib3hNb2RlbCA9IF9fdS5zZXRDaGVja2JveE1vZGVsLCBfZGV0ZWN0Q2hlY2tib3hDaGVja2VkID0gX191LmRldGVjdENoZWNrYm94Q2hlY2tlZCxcbl9zZXRTZWxlY3RNb2RlbCA9IF9fdS5zZXRTZWxlY3RNb2RlbCxcbnNlbGYgPSB0aGlzLmRhdGEsICR0aGlzID0gdGhpcywgc2NvcGUgPSBvYmosIEFuaW1hdGUgPSBzZWxmICYmIHNlbGYuQW5pbWF0ZSwgcGFyZW50ID0gKCRjYWxsZWUgfHwge30pLl9zdXBlclxucmV0dXJuIGgoJ2RpdicsIG51bGwsIFsnXFxuICAgICcsIGZ1bmN0aW9uKCkge3RyeSB7cmV0dXJuIFtzZWxmLmdldCgndmlldycpIF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcyksICdcXG4gICAgJywgKF9ibG9ja3NbXCJsb2FkaW5nXCJdID0gZnVuY3Rpb24ocGFyZW50KSB7cmV0dXJuIGZ1bmN0aW9uKCkge3RyeSB7cmV0dXJuIFtzZWxmLmdldCgnbG9hZGluZycpIF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcykgPyBoKEFuaW1hdGUsIHsna2V5JzogJ2xvYWRpbmcnLCAnYTp0cmFuc2l0aW9uJzogJ2ZhZGUnLCAnY2xhc3NOYW1lJzogJ2stYXBwLWxvYWRpbmcnLCAnY2hpbGRyZW4nOiBudWxsLCAnX2NvbnRleHQnOiAkdGhpc30pIDogdW5kZWZpbmVkO30pICYmIChfX2Jsb2Nrc1tcImxvYWRpbmdcIl0gPSBmdW5jdGlvbihwYXJlbnQpIHtcbnZhciBzZWxmID0gdGhpcztcbnJldHVybiBibG9ja3NbXCJsb2FkaW5nXCJdID8gYmxvY2tzW1wibG9hZGluZ1wiXS5jYWxsKHRoaXMsIGZ1bmN0aW9uKCkge1xucmV0dXJuIF9ibG9ja3NbXCJsb2FkaW5nXCJdLmNhbGwoc2VsZiwgcGFyZW50KTtcbn0pIDogX2Jsb2Nrc1tcImxvYWRpbmdcIl0uY2FsbCh0aGlzLCBwYXJlbnQpO1xufSkgJiYgX19ibG9ja3NbXCJsb2FkaW5nXCJdLmNhbGwodGhpcyldLCAnay1hcHAnKVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvYXBwL2luZGV4LnZkdCIsImltcG9ydCBJbnRhY3QgZnJvbSAnaW50YWN0JztcblxuY29uc3QgdXRpbHMgPSBJbnRhY3QudXRpbHM7XG5jb25zdCB7Z2V0LCBpc051bGxPclVuZGVmaW5lZCwgaXNPYmplY3R9ID0gdXRpbHM7XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRTdHlsZShzdHlsZSwgZXh0cmEpIHtcbiAgICBpZiAoIXN0eWxlKSByZXR1cm4gZXh0cmE7XG4gICAgaWYgKCFleHRyYSkgcmV0dXJuIHN0eWxlO1xuICAgIGlmICh0eXBlb2Ygc3R5bGUgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIGV4dHJhID0gT2JqZWN0LmtleXMoZXh0cmEpLm1hcChrZXkgPT4gYCR7a2ViYWJDYXNlKGtleSl9OiAke2V4dHJhW2tleV19YCkuam9pbignOycpO1xuICAgICAgICBzdHlsZSA9IGAke3N0eWxlfSR7IXN0eWxlIHx8IC87XFxzKiQvLnRlc3Qoc3R5bGUpID8gJycgOiAnOyd9JHtleHRyYX1gO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHN0eWxlID0gey4uLnN0eWxlLCAuLi5leHRyYX07XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0eWxlO1xufVxuXG5jb25zdCBfY2FjaGUgPSB7fTtcbmNvbnN0IHVwcGVyY2FzZVBhdHRlcm4gPSAvW0EtWl0vZztcbmV4cG9ydCBmdW5jdGlvbiBrZWJhYkNhc2Uod29yZCkge1xuICAgIGlmICghX2NhY2hlW3dvcmRdKSB7XG4gICAgICAgIF9jYWNoZVt3b3JkXSA9IHdvcmQucmVwbGFjZSh1cHBlcmNhc2VQYXR0ZXJuLCAoaXRlbSkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIGAtJHtpdGVtLnRvTG93ZXJDYXNlKCl9YDtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiBfY2FjaGVbd29yZF07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwcm94eUV2ZW50KGNvbXBvbmVudCwgbmFtZSkge1xuICAgIHJldHVybiAoZSkgPT4gY29tcG9uZW50LnRyaWdnZXIobmFtZSwgZSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc1N0cmluZ09yTnVtYmVyKG8pIHtcbiAgICBjb25zdCB0eXBlID0gdHlwZW9mIG87XG4gICAgcmV0dXJuIHR5cGUgPT09ICdzdHJpbmcnIHx8IHR5cGUgPT09ICdudW1iZXInO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNUZXh0Vk5vZGUobykge1xuICAgIHJldHVybiBpc1N0cmluZ09yTnVtYmVyKG8pIHx8IG8udHlwZSA9PT0gMTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzU3RyaW5nT3JOdW1iZXJOb3RFbXB0eShvKSB7XG4gICAgY29uc3QgdHlwZSA9IHR5cGVvZiBvO1xuICAgIHJldHVybiB0eXBlID09PSAnc3RyaW5nJyAmJiAhL15cXHMrJC8udGVzdChvKSB8fCB0eXBlID09PSAnbnVtYmVyJztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFRleHRCeUNoaWxkcmVuKGNoaWxkcmVuKSB7XG4gICAgbGV0IHJldCA9ICcnO1xuICAgIGlmIChBcnJheS5pc0FycmF5KGNoaWxkcmVuKSkge1xuICAgICAgICBjaGlsZHJlbi5mb3JFYWNoKHZOb2RlID0+IHtcbiAgICAgICAgICAgIGlmIChpc1RleHRWTm9kZSh2Tm9kZSkpIHtcbiAgICAgICAgICAgICAgICByZXQgKz0gdk5vZGUuY2hpbGRyZW47XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0gZWxzZSBpZiAoaXNTdHJpbmdPck51bWJlcihjaGlsZHJlbikpIHtcbiAgICAgICAgcmV0ICs9IGNoaWxkcmVuO1xuICAgIH1cblxuICAgIHJldHVybiByZXQ7XG59XG5cblxuZXhwb3J0IGZ1bmN0aW9uIGZpbmRQYXJlbnRDb21wb25lbnQoQ29tcG9uZW50LCBpbnN0YW5jZSwgaXNVbnRpbCkge1xuICAgIGxldCByZXQ7XG4gICAgbGV0IHBhcmVudCA9IGluc3RhbmNlLnBhcmVudFZOb2RlO1xuICAgIHdoaWxlIChwYXJlbnQpIHtcbiAgICAgICAgaWYgKHBhcmVudC50YWcgPT09IENvbXBvbmVudCkge1xuICAgICAgICAgICAgcmV0ID0gcGFyZW50LmNoaWxkcmVuOyAgICAgICAgXG4gICAgICAgICAgICBpZiAoaXNVbnRpbCkgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgcGFyZW50ID0gcGFyZW50LnBhcmVudFZOb2RlO1xuICAgIH1cbiAgICByZXR1cm4gcmV0O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3RyUGFkKHN0ciwgbGVuZ3RoLCBwYWQpIHtcbiAgICBzdHIgPSBzdHIudG9TdHJpbmcoKTtcbiAgICBwYWQgPSBwYWQgPT09IHVuZGVmaW5lZCA/ICcwJyA6IHBhZDtcbiAgICB2YXIgbCA9IHN0ci5sZW5ndGg7XG4gICAgaWYgKGwgPCBsZW5ndGgpIHtcbiAgICAgICAgc3RyID0gbmV3IEFycmF5KGxlbmd0aCAtIGwgKyAxKS5qb2luKHBhZCkgKyBzdHI7XG4gICAgfVxuICAgIHJldHVybiBzdHI7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByYW5nZShzdGFydCwgZW5kKSB7XG4gICAgcmV0dXJuIEFycmF5LmFwcGx5KG51bGwsIHtsZW5ndGg6IGVuZCAtIHN0YXJ0ICsgMX0pXG4gICAgICAgIC5tYXAoKHYsIGkpID0+IGkgKyBzdGFydCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzZWxlY3RJbnB1dChpbnB1dCkge1xuICAgIGlmIChpbnB1dC5zZWxlY3QpIHtcbiAgICAgICAgaW5wdXQuc2VsZWN0KCk7XG4gICAgfSBlbHNlIGlmIChpbnB1dC5zZXRTZWxlY3Rpb25SYW5nZSkge1xuICAgICAgICAvLyBtb2JpbGUgc2FmYXJpXG4gICAgICAgIGlucHV0LmZvY3VzKCk7XG4gICAgICAgIGlucHV0LnNldFNlbGVjdGlvblJhbmdlKDAsIGlucHV0LnZhbHVlLmxlbmd0aCk7XG4gICAgfVxufVxuXG5sZXQgaTE4biA9IHt9O1xuY29uc3QgdmFsdWVSZWdleHAgPSAvXFx7KFteXFx9XFxzXSspXFx9L2c7XG5leHBvcnQgZnVuY3Rpb24gXyQoa2V5LCBkYXRhKSB7XG4gICAgbGV0IHZhbHVlID0gZ2V0KGkxOG4sIGtleSk7XG4gICAgaWYgKGlzTnVsbE9yVW5kZWZpbmVkKHZhbHVlKSkge1xuICAgICAgICB2YWx1ZSA9IGtleTtcbiAgICB9XG5cbiAgICBpZiAoZGF0YSkge1xuICAgICAgICB2YWx1ZSA9IHZhbHVlLnJlcGxhY2UodmFsdWVSZWdleHAsIChub3VzZSwgdmFyaWFibGUpID0+IHtcbiAgICAgICAgICAgIGxldCBzdWZmaXg7XG4gICAgICAgICAgICBjb25zdCBpbmRleCA9IHZhcmlhYmxlLmluZGV4T2YoJzonKTtcbiAgICAgICAgICAgIGlmIChpbmRleCA+IDApIHtcbiAgICAgICAgICAgICAgICBzdWZmaXggPSB2YXJpYWJsZS5zdWJzdHIoMCwgaW5kZXgpO1xuICAgICAgICAgICAgICAgIHN1ZmZpeCA9IHN1ZmZpeC5zcGxpdCgnfCcpO1xuICAgICAgICAgICAgICAgIHZhcmlhYmxlID0gdmFyaWFibGUuc3Vic3RyKGluZGV4ICsgMSk7XG4gICAgICAgICAgICAgICAgdmFyaWFibGUgPSBnZXQoZGF0YSwgdmFyaWFibGUpO1xuICAgICAgICAgICAgICAgIGlmICh2YXJpYWJsZSA+IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHN1ZmZpeC5sZW5ndGggPiAxID8gc3VmZml4WzFdIDogc3VmZml4WzBdO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBzdWZmaXgubGVuZ3RoID4gMSA/IHN1ZmZpeFswXSA6ICcnO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdmFyaWFibGUgPSBnZXQoZGF0YSwgdmFyaWFibGUpO1xuICAgICAgICAgICAgICAgIHJldHVybiBpc051bGxPclVuZGVmaW5lZCh2YXJpYWJsZSkgPyBub3VzZSA6IHZhcmlhYmxlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmFsdWU7XG59XG5leHBvcnQgZnVuY3Rpb24gbG9jYWxpemUoZGF0YSkge1xuICAgIGlmICghaXNPYmplY3QoZGF0YSkpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBleHBlY3QgYSBvYmplY3QgYnV0IGdvdCAke2RhdGF9YCk7XG4gICAgfVxuICAgIGkxOG4gPSBkYXRhO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0VHJhbnNpdGlvbihmZWVkYmFjaykge1xuICAgIGNvbnN0IGhvcml6b250YWwgPSBmZWVkYmFjay5ob3Jpem9udGFsO1xuICAgIGNvbnN0IHZlcnRpY2FsID0gZmVlZGJhY2sudmVydGljYWw7XG4gICAgaWYgKGZlZWRiYWNrLmltcG9ydGFudD09PSAnaG9yaXpvbnRhbCcpIHtcbiAgICAgICAgaWYgKGhvcml6b250YWwgPT09ICdsZWZ0Jykge1xuICAgICAgICAgICAgcmV0dXJuICdzbGlkZXJpZ2h0JztcbiAgICAgICAgfSBlbHNlIGlmIChob3Jpem9udGFsID09PSAncmlnaHQnKSB7XG4gICAgICAgICAgICByZXR1cm4gJ3NsaWRlbGVmdCc7XG4gICAgICAgIH0gZWxzZSBpZiAodmVydGljYWwgPT09ICdib3R0b20nKSB7XG4gICAgICAgICAgICByZXR1cm4gJ3NsaWRldXAnO1xuICAgICAgICB9IGVsc2UgaWYgKHZlcnRpY2FsID09PSAndG9wJykge1xuICAgICAgICAgICAgcmV0dXJuICdzbGlkZWRvd24nO1xuICAgICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKHZlcnRpY2FsID09PSAnYm90dG9tJykge1xuICAgICAgICAgICAgcmV0dXJuICdzbGlkZXVwJztcbiAgICAgICAgfSBlbHNlIGlmICh2ZXJ0aWNhbCA9PT0gJ3RvcCcpIHtcbiAgICAgICAgICAgIHJldHVybiAnc2xpZGVkb3duJztcbiAgICAgICAgfSBlbHNlIGlmIChob3Jpem9udGFsID09PSAnbGVmdCcpIHtcbiAgICAgICAgICAgIHJldHVybiAnc2xpZGVyaWdodCc7XG4gICAgICAgIH0gZWxzZSBpZiAoaG9yaXpvbnRhbCA9PT0gJ3JpZ2h0Jykge1xuICAgICAgICAgICAgcmV0dXJuICdzbGlkZWxlZnQnO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiAnc2xpZGVkb3duJztcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvdXRpbHMuanMiLCIvKiEgVW5pdmVyc2FsIFJvdXRlciB8IE1JVCBMaWNlbnNlIHwgaHR0cHM6Ly93d3cua3JpYXNvZnQuY29tL3VuaXZlcnNhbC1yb3V0ZXIvICovXG5cbmltcG9ydCBwYXRoVG9SZWdleHAgZnJvbSAncGF0aC10by1yZWdleHAnO1xuXG4vKipcbiAqIFVuaXZlcnNhbCBSb3V0ZXIgKGh0dHBzOi8vd3d3LmtyaWFzb2Z0LmNvbS91bml2ZXJzYWwtcm91dGVyLylcbiAqXG4gKiBDb3B5cmlnaHQgwqkgMjAxNS1wcmVzZW50IEtyaWFzb2Z0LCBMTEMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIDIuMCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRS50eHQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG5jb25zdCB7IGhhc093blByb3BlcnR5IH0gPSBPYmplY3QucHJvdG90eXBlO1xuY29uc3QgY2FjaGUgPSBuZXcgTWFwKCk7XG5cbmZ1bmN0aW9uIGRlY29kZVBhcmFtKHZhbCkge1xuICB0cnkge1xuICAgIHJldHVybiBkZWNvZGVVUklDb21wb25lbnQodmFsKTtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgcmV0dXJuIHZhbDtcbiAgfVxufVxuXG5mdW5jdGlvbiBtYXRjaFBhdGgocm91dGUsIHBhdGhuYW1lLCBwYXJlbnRLZXlzLCBwYXJlbnRQYXJhbXMpIHtcbiAgY29uc3QgZW5kID0gIXJvdXRlLmNoaWxkcmVuO1xuICBjb25zdCBjYWNoZUtleSA9IGAke3JvdXRlLnBhdGggfHwgJyd9fCR7ZW5kfWA7XG4gIGxldCByZWdleHAgPSBjYWNoZS5nZXQoY2FjaGVLZXkpO1xuXG4gIGlmICghcmVnZXhwKSB7XG4gICAgY29uc3Qga2V5cyA9IFtdO1xuICAgIHJlZ2V4cCA9IHtcbiAgICAgIGtleXMsXG4gICAgICBwYXR0ZXJuOiBwYXRoVG9SZWdleHAocm91dGUucGF0aCB8fCAnJywga2V5cywgeyBlbmQgfSlcbiAgICB9O1xuICAgIGNhY2hlLnNldChjYWNoZUtleSwgcmVnZXhwKTtcbiAgfVxuXG4gIGNvbnN0IG0gPSByZWdleHAucGF0dGVybi5leGVjKHBhdGhuYW1lKTtcbiAgaWYgKCFtKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBjb25zdCBwYXRoID0gbVswXTtcbiAgY29uc3QgcGFyYW1zID0gT2JqZWN0LmFzc2lnbih7fSwgcGFyZW50UGFyYW1zKTtcblxuICBmb3IgKGxldCBpID0gMTsgaSA8IG0ubGVuZ3RoOyBpICs9IDEpIHtcbiAgICBjb25zdCBrZXkgPSByZWdleHAua2V5c1tpIC0gMV07XG4gICAgY29uc3QgcHJvcCA9IGtleS5uYW1lO1xuICAgIGNvbnN0IHZhbHVlID0gbVtpXTtcbiAgICBpZiAodmFsdWUgIT09IHVuZGVmaW5lZCB8fCAhaGFzT3duUHJvcGVydHkuY2FsbChwYXJhbXMsIHByb3ApKSB7XG4gICAgICBpZiAoa2V5LnJlcGVhdCkge1xuICAgICAgICBwYXJhbXNbcHJvcF0gPSB2YWx1ZSA/IHZhbHVlLnNwbGl0KGtleS5kZWxpbWl0ZXIpLm1hcChkZWNvZGVQYXJhbSkgOiBbXTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHBhcmFtc1twcm9wXSA9IHZhbHVlID8gZGVjb2RlUGFyYW0odmFsdWUpIDogdmFsdWU7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBwYXRoOiAhZW5kICYmIHBhdGguY2hhckF0KHBhdGgubGVuZ3RoIC0gMSkgPT09ICcvJyA/IHBhdGguc3Vic3RyKDEpIDogcGF0aCxcbiAgICBrZXlzOiBwYXJlbnRLZXlzLmNvbmNhdChyZWdleHAua2V5cyksXG4gICAgcGFyYW1zXG4gIH07XG59XG5cbi8qKlxuICogVW5pdmVyc2FsIFJvdXRlciAoaHR0cHM6Ly93d3cua3JpYXNvZnQuY29tL3VuaXZlcnNhbC1yb3V0ZXIvKVxuICpcbiAqIENvcHlyaWdodCDCqSAyMDE1LXByZXNlbnQgS3JpYXNvZnQsIExMQy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgMi4wIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFLnR4dCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbmZ1bmN0aW9uIG1hdGNoUm91dGUocm91dGUsIGJhc2VVcmwsIHBhdGhuYW1lLCBwYXJlbnRLZXlzLCBwYXJlbnRQYXJhbXMpIHtcbiAgbGV0IG1hdGNoO1xuICBsZXQgY2hpbGRNYXRjaGVzO1xuICBsZXQgY2hpbGRJbmRleCA9IDA7XG5cbiAgcmV0dXJuIHtcbiAgICBuZXh0KCkge1xuICAgICAgaWYgKCFtYXRjaCkge1xuICAgICAgICBtYXRjaCA9IG1hdGNoUGF0aChyb3V0ZSwgcGF0aG5hbWUsIHBhcmVudEtleXMsIHBhcmVudFBhcmFtcyk7XG5cbiAgICAgICAgaWYgKG1hdGNoKSB7XG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGRvbmU6IGZhbHNlLFxuICAgICAgICAgICAgdmFsdWU6IHtcbiAgICAgICAgICAgICAgcm91dGUsXG4gICAgICAgICAgICAgIGJhc2VVcmwsXG4gICAgICAgICAgICAgIHBhdGg6IG1hdGNoLnBhdGgsXG4gICAgICAgICAgICAgIGtleXM6IG1hdGNoLmtleXMsXG4gICAgICAgICAgICAgIHBhcmFtczogbWF0Y2gucGFyYW1zXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWF0Y2ggJiYgcm91dGUuY2hpbGRyZW4pIHtcbiAgICAgICAgd2hpbGUgKGNoaWxkSW5kZXggPCByb3V0ZS5jaGlsZHJlbi5sZW5ndGgpIHtcbiAgICAgICAgICBpZiAoIWNoaWxkTWF0Y2hlcykge1xuICAgICAgICAgICAgY29uc3QgY2hpbGRSb3V0ZSA9IHJvdXRlLmNoaWxkcmVuW2NoaWxkSW5kZXhdO1xuICAgICAgICAgICAgY2hpbGRSb3V0ZS5wYXJlbnQgPSByb3V0ZTtcblxuICAgICAgICAgICAgY2hpbGRNYXRjaGVzID0gbWF0Y2hSb3V0ZShjaGlsZFJvdXRlLCBiYXNlVXJsICsgbWF0Y2gucGF0aCwgcGF0aG5hbWUuc3Vic3RyKG1hdGNoLnBhdGgubGVuZ3RoKSwgbWF0Y2gua2V5cywgbWF0Y2gucGFyYW1zKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBjb25zdCBjaGlsZE1hdGNoID0gY2hpbGRNYXRjaGVzLm5leHQoKTtcbiAgICAgICAgICBpZiAoIWNoaWxkTWF0Y2guZG9uZSkge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgZG9uZTogZmFsc2UsXG4gICAgICAgICAgICAgIHZhbHVlOiBjaGlsZE1hdGNoLnZhbHVlXG4gICAgICAgICAgICB9O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGNoaWxkTWF0Y2hlcyA9IG51bGw7XG4gICAgICAgICAgY2hpbGRJbmRleCArPSAxO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB7IGRvbmU6IHRydWUgfTtcbiAgICB9XG4gIH07XG59XG5cbi8qKlxuICogVW5pdmVyc2FsIFJvdXRlciAoaHR0cHM6Ly93d3cua3JpYXNvZnQuY29tL3VuaXZlcnNhbC1yb3V0ZXIvKVxuICpcbiAqIENvcHlyaWdodCDCqSAyMDE1LXByZXNlbnQgS3JpYXNvZnQsIExMQy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgMi4wIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFLnR4dCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbmZ1bmN0aW9uIHJlc29sdmVSb3V0ZShjb250ZXh0LCBwYXJhbXMpIHtcbiAgaWYgKHR5cGVvZiBjb250ZXh0LnJvdXRlLmFjdGlvbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHJldHVybiBjb250ZXh0LnJvdXRlLmFjdGlvbihjb250ZXh0LCBwYXJhbXMpO1xuICB9XG5cbiAgcmV0dXJuIG51bGw7XG59XG5cbi8qKlxuICogVW5pdmVyc2FsIFJvdXRlciAoaHR0cHM6Ly93d3cua3JpYXNvZnQuY29tL3VuaXZlcnNhbC1yb3V0ZXIvKVxuICpcbiAqIENvcHlyaWdodCDCqSAyMDE1LXByZXNlbnQgS3JpYXNvZnQsIExMQy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgMi4wIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFLnR4dCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbmZ1bmN0aW9uIGlzQ2hpbGRSb3V0ZShwYXJlbnRSb3V0ZSwgY2hpbGRSb3V0ZSkge1xuICBsZXQgcm91dGUgPSBjaGlsZFJvdXRlO1xuICB3aGlsZSAocm91dGUpIHtcbiAgICByb3V0ZSA9IHJvdXRlLnBhcmVudDtcbiAgICBpZiAocm91dGUgPT09IHBhcmVudFJvdXRlKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufVxuXG5jbGFzcyBVbml2ZXJzYWxSb3V0ZXIge1xuICBjb25zdHJ1Y3Rvcihyb3V0ZXMsIG9wdGlvbnMgPSB7fSkge1xuICAgIGlmIChPYmplY3Qocm91dGVzKSAhPT0gcm91dGVzKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdJbnZhbGlkIHJvdXRlcycpO1xuICAgIH1cblxuICAgIHRoaXMuYmFzZVVybCA9IG9wdGlvbnMuYmFzZVVybCB8fCAnJztcbiAgICB0aGlzLnJlc29sdmVSb3V0ZSA9IG9wdGlvbnMucmVzb2x2ZVJvdXRlIHx8IHJlc29sdmVSb3V0ZTtcbiAgICB0aGlzLmNvbnRleHQgPSBPYmplY3QuYXNzaWduKHsgcm91dGVyOiB0aGlzIH0sIG9wdGlvbnMuY29udGV4dCk7XG4gICAgdGhpcy5yb290ID0gQXJyYXkuaXNBcnJheShyb3V0ZXMpID8geyBwYXRoOiAnJywgY2hpbGRyZW46IHJvdXRlcywgcGFyZW50OiBudWxsIH0gOiByb3V0ZXM7XG4gICAgdGhpcy5yb290LnBhcmVudCA9IG51bGw7XG4gIH1cblxuICByZXNvbHZlKHBhdGhuYW1lT3JDb250ZXh0KSB7XG4gICAgY29uc3QgY29udGV4dCA9IE9iamVjdC5hc3NpZ24oe30sIHRoaXMuY29udGV4dCwgdHlwZW9mIHBhdGhuYW1lT3JDb250ZXh0ID09PSAnc3RyaW5nJyA/IHsgcGF0aG5hbWU6IHBhdGhuYW1lT3JDb250ZXh0IH0gOiBwYXRobmFtZU9yQ29udGV4dCk7XG4gICAgY29uc3QgbWF0Y2ggPSBtYXRjaFJvdXRlKHRoaXMucm9vdCwgdGhpcy5iYXNlVXJsLCBjb250ZXh0LnBhdGhuYW1lLnN1YnN0cih0aGlzLmJhc2VVcmwubGVuZ3RoKSwgW10sIG51bGwpO1xuICAgIGNvbnN0IHJlc29sdmUgPSB0aGlzLnJlc29sdmVSb3V0ZTtcbiAgICBsZXQgbWF0Y2hlcyA9IG51bGw7XG4gICAgbGV0IG5leHRNYXRjaGVzID0gbnVsbDtcblxuICAgIGZ1bmN0aW9uIG5leHQocmVzdW1lLCBwYXJlbnQgPSBtYXRjaGVzLnZhbHVlLnJvdXRlKSB7XG4gICAgICBtYXRjaGVzID0gbmV4dE1hdGNoZXMgfHwgbWF0Y2gubmV4dCgpO1xuICAgICAgbmV4dE1hdGNoZXMgPSBudWxsO1xuXG4gICAgICBpZiAoIXJlc3VtZSkge1xuICAgICAgICBpZiAobWF0Y2hlcy5kb25lIHx8ICFpc0NoaWxkUm91dGUocGFyZW50LCBtYXRjaGVzLnZhbHVlLnJvdXRlKSkge1xuICAgICAgICAgIG5leHRNYXRjaGVzID0gbWF0Y2hlcztcbiAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKG51bGwpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtYXRjaGVzLmRvbmUpIHtcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KE9iamVjdC5hc3NpZ24obmV3IEVycm9yKCdQYWdlIG5vdCBmb3VuZCcpLCB7IGNvbnRleHQsIHN0YXR1czogNDA0LCBzdGF0dXNDb2RlOiA0MDQgfSkpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHJlc29sdmUoT2JqZWN0LmFzc2lnbih7fSwgY29udGV4dCwgbWF0Y2hlcy52YWx1ZSksIG1hdGNoZXMudmFsdWUucGFyYW1zKSkudGhlbihyZXN1bHQgPT4ge1xuICAgICAgICBpZiAocmVzdWx0ICE9PSBudWxsICYmIHJlc3VsdCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBuZXh0KHJlc3VtZSwgcGFyZW50KTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGNvbnRleHQubmV4dCA9IG5leHQ7XG5cbiAgICByZXR1cm4gbmV4dCh0cnVlLCB0aGlzLnJvb3QpO1xuICB9XG59XG5cblVuaXZlcnNhbFJvdXRlci5wYXRoVG9SZWdleHAgPSBwYXRoVG9SZWdleHA7XG5Vbml2ZXJzYWxSb3V0ZXIubWF0Y2hQYXRoID0gbWF0Y2hQYXRoO1xuVW5pdmVyc2FsUm91dGVyLm1hdGNoUm91dGUgPSBtYXRjaFJvdXRlO1xuVW5pdmVyc2FsUm91dGVyLnJlc29sdmVSb3V0ZSA9IHJlc29sdmVSb3V0ZTtcblxuZXhwb3J0IGRlZmF1bHQgVW5pdmVyc2FsUm91dGVyO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9bWFpbi5tanMubWFwXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvdW5pdmVyc2FsLXJvdXRlci9tYWluLm1qcyIsImltcG9ydCB7bG9jYWxpemV9IGZyb20gJ2twYy9jb21wb25lbnRzL3V0aWxzJztcbi8vIGltcG9ydCBlbiBmcm9tICdrcGMvaTE4bi9lbi1VUyc7XG5cbi8vIGxvY2FsaXplKGVuKTtcblxuSW50YWN0LlZkdC5jb25maWd1cmUoJ2RlbGltaXRlcnMnLCBbJ3t7JywgJ319J10pO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc2l0ZS9zcmMvbWFpbi5qcyIsImltcG9ydCAnLi9tYWluJztcbmltcG9ydCByb3V0ZXIgZnJvbSAnLi9yb3V0ZXInO1xuaW1wb3J0IEFwcCBmcm9tICdrcGMvY29tcG9uZW50cy9hcHAnO1xuaW1wb3J0IHtjb2xsZWN0SW5pdGlhbH0gZnJvbSAnbm9kZS1zdHlsZS1sb2FkZXIvY29sbGVjdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKHBhdGgpIHtcbiAgICByZXR1cm4gcm91dGVyLnJlc29sdmUoe3BhdGhuYW1lOiBwYXRofSkudGhlbigoe1BhZ2UsIGRhdGF9KSA9PiB7XG4gICAgICAgIGNvbnN0ICRhcHAgPSBuZXcgQXBwKCk7XG4gICAgICAgIHJldHVybiAkYXBwLnJlbmRlcihQYWdlLCBkYXRhKS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgY29udGVudDogJGFwcC50b1N0cmluZygpLFxuICAgICAgICAgICAgICAgIHN0eWxlOiBjb2xsZWN0SW5pdGlhbCgpLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfSkuY2F0Y2goZSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlLnN0YWNrKTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG59XG5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NpdGUvc3JjL3JlbmRlci5qcyIsImltcG9ydCBSb3V0ZXIgZnJvbSAndW5pdmVyc2FsLXJvdXRlcic7XG5cbi8vIGNvbnN0IHJvdXRlcyA9IHJlcXVpcmUuY29udGV4dCgnLi8nLCBmYWxzZSwgL1xcLnJvdXRlci5qcyQvKS5rZXlzKCkubWFwKGtleSA9PiB7XG4gICAgLy8gcmV0dXJuIHtcbiAgICAgICAgLy8gcGF0aDogYGBcbiAgICAvLyB9XG4vLyB9KVxuXG5leHBvcnQgZGVmYXVsdCBuZXcgUm91dGVyKFtcbiAgICB7XG4gICAgICAgIHBhdGg6IC9eXFwvKGtwY1xcLyk/JC8sXG4gICAgICAgIGFjdGlvbjogYXN5bmMgKCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHtQYWdlOiBhd2FpdCBpbXBvcnQoJy4uL3BhZ2VzL2luZGV4Jyl9XG4gICAgICAgIH1cbiAgICB9LFxuICAgIHtcbiAgICAgICAgcGF0aDogL15cXC8oa3BjXFwvKT9kZXNpZ25cXC8/JC8sXG4gICAgICAgIGFjdGlvbjogYXN5bmMgKCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHtQYWdlOiBhd2FpdCBpbXBvcnQoJy4uL3BhZ2VzL2Rlc2lnbicpfVxuICAgICAgICB9XG4gICAgfSxcbiAgICB7XG4gICAgICAgIHBhdGg6IC8oLiopLyxcbiAgICAgICAgYWN0aW9uOiBhc3luYyAoY29udGV4dCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBQYWdlOiBhd2FpdCBpbXBvcnQoJy4uL3BhZ2VzL2RvY3VtZW50JyksXG4gICAgICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICAgICAgICBwYXRoOiBjb250ZXh0LnBhcmFtc1swXVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICB9LFxuXSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zaXRlL3NyYy9yb3V0ZXIvaW5kZXguanMiLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuICAgIGlmKG1vZHVsZS5ob3QpIHtcbiAgICAgIC8vIDE1Mjc1ODc4NzM3NzhcbiAgICAgIHZhciBjc3NSZWxvYWQgPSByZXF1aXJlKFwiIS4uL25vZGVfbW9kdWxlcy9jc3MtaG90LWxvYWRlci9ob3RNb2R1bGVSZXBsYWNlbWVudC5qc1wiKShtb2R1bGUuaWQsIHtcImZpbGVNYXBcIjpcIntmaWxlTmFtZX1cIn0pO1xuICAgICAgbW9kdWxlLmhvdC5kaXNwb3NlKGNzc1JlbG9hZCk7XG4gICAgICBtb2R1bGUuaG90LmFjY2VwdCh1bmRlZmluZWQsIGNzc1JlbG9hZCk7XG4gICAgfVxuICBcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3N0eWxlcy9rcGMuc3R5bFxuLy8gbW9kdWxlIGlkID0gLi9zdHlsZXMva3BjLnN0eWxcbi8vIG1vZHVsZSBjaHVua3MgPSAzIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYmFiZWwtcnVudGltZS9jb3JlLWpzL2pzb24vc3RyaW5naWZ5XCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiYmFiZWwtcnVudGltZS9jb3JlLWpzL2pzb24vc3RyaW5naWZ5XCJcbi8vIG1vZHVsZSBpZCA9IGJhYmVsLXJ1bnRpbWUvY29yZS1qcy9qc29uL3N0cmluZ2lmeVxuLy8gbW9kdWxlIGNodW5rcyA9IDMiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJiYWJlbC1ydW50aW1lL2NvcmUtanMvbWFwXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiYmFiZWwtcnVudGltZS9jb3JlLWpzL21hcFwiXG4vLyBtb2R1bGUgaWQgPSBiYWJlbC1ydW50aW1lL2NvcmUtanMvbWFwXG4vLyBtb2R1bGUgY2h1bmtzID0gMyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImJhYmVsLXJ1bnRpbWUvY29yZS1qcy9udW1iZXIvaXMtbmFuXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiYmFiZWwtcnVudGltZS9jb3JlLWpzL251bWJlci9pcy1uYW5cIlxuLy8gbW9kdWxlIGlkID0gYmFiZWwtcnVudGltZS9jb3JlLWpzL251bWJlci9pcy1uYW5cbi8vIG1vZHVsZSBjaHVua3MgPSAzIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9hc3NpZ25cIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJiYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L2Fzc2lnblwiXG4vLyBtb2R1bGUgaWQgPSBiYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L2Fzc2lnblxuLy8gbW9kdWxlIGNodW5rcyA9IDMiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJiYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L2dldC1vd24tcHJvcGVydHktZGVzY3JpcHRvclwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImJhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3QvZ2V0LW93bi1wcm9wZXJ0eS1kZXNjcmlwdG9yXCJcbi8vIG1vZHVsZSBpZCA9IGJhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3QvZ2V0LW93bi1wcm9wZXJ0eS1kZXNjcmlwdG9yXG4vLyBtb2R1bGUgY2h1bmtzID0gMyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImJhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3Qva2V5c1wiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImJhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3Qva2V5c1wiXG4vLyBtb2R1bGUgaWQgPSBiYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L2tleXNcbi8vIG1vZHVsZSBjaHVua3MgPSAzIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYmFiZWwtcnVudGltZS9jb3JlLWpzL3Byb21pc2VcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJiYWJlbC1ydW50aW1lL2NvcmUtanMvcHJvbWlzZVwiXG4vLyBtb2R1bGUgaWQgPSBiYWJlbC1ydW50aW1lL2NvcmUtanMvcHJvbWlzZVxuLy8gbW9kdWxlIGNodW5rcyA9IDMiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJiYWJlbC1ydW50aW1lL2hlbHBlcnMvYXN5bmNUb0dlbmVyYXRvclwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImJhYmVsLXJ1bnRpbWUvaGVscGVycy9hc3luY1RvR2VuZXJhdG9yXCJcbi8vIG1vZHVsZSBpZCA9IGJhYmVsLXJ1bnRpbWUvaGVscGVycy9hc3luY1RvR2VuZXJhdG9yXG4vLyBtb2R1bGUgY2h1bmtzID0gMyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImJhYmVsLXJ1bnRpbWUvaGVscGVycy9jbGFzc0NhbGxDaGVja1wiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImJhYmVsLXJ1bnRpbWUvaGVscGVycy9jbGFzc0NhbGxDaGVja1wiXG4vLyBtb2R1bGUgaWQgPSBiYWJlbC1ydW50aW1lL2hlbHBlcnMvY2xhc3NDYWxsQ2hlY2tcbi8vIG1vZHVsZSBjaHVua3MgPSAzIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYmFiZWwtcnVudGltZS9oZWxwZXJzL2NyZWF0ZUNsYXNzXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiYmFiZWwtcnVudGltZS9oZWxwZXJzL2NyZWF0ZUNsYXNzXCJcbi8vIG1vZHVsZSBpZCA9IGJhYmVsLXJ1bnRpbWUvaGVscGVycy9jcmVhdGVDbGFzc1xuLy8gbW9kdWxlIGNodW5rcyA9IDMiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJiYWJlbC1ydW50aW1lL2hlbHBlcnMvZXh0ZW5kc1wiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImJhYmVsLXJ1bnRpbWUvaGVscGVycy9leHRlbmRzXCJcbi8vIG1vZHVsZSBpZCA9IGJhYmVsLXJ1bnRpbWUvaGVscGVycy9leHRlbmRzXG4vLyBtb2R1bGUgY2h1bmtzID0gMyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImJhYmVsLXJ1bnRpbWUvaGVscGVycy9pbmhlcml0c1wiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImJhYmVsLXJ1bnRpbWUvaGVscGVycy9pbmhlcml0c1wiXG4vLyBtb2R1bGUgaWQgPSBiYWJlbC1ydW50aW1lL2hlbHBlcnMvaW5oZXJpdHNcbi8vIG1vZHVsZSBjaHVua3MgPSAzIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYmFiZWwtcnVudGltZS9oZWxwZXJzL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiYmFiZWwtcnVudGltZS9oZWxwZXJzL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzXCJcbi8vIG1vZHVsZSBpZCA9IGJhYmVsLXJ1bnRpbWUvaGVscGVycy9vYmplY3RXaXRob3V0UHJvcGVydGllc1xuLy8gbW9kdWxlIGNodW5rcyA9IDMiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJiYWJlbC1ydW50aW1lL2hlbHBlcnMvcG9zc2libGVDb25zdHJ1Y3RvclJldHVyblwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImJhYmVsLXJ1bnRpbWUvaGVscGVycy9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuXCJcbi8vIG1vZHVsZSBpZCA9IGJhYmVsLXJ1bnRpbWUvaGVscGVycy9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuXG4vLyBtb2R1bGUgY2h1bmtzID0gMyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImJhYmVsLXJ1bnRpbWUvaGVscGVycy90eXBlb2ZcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJiYWJlbC1ydW50aW1lL2hlbHBlcnMvdHlwZW9mXCJcbi8vIG1vZHVsZSBpZCA9IGJhYmVsLXJ1bnRpbWUvaGVscGVycy90eXBlb2Zcbi8vIG1vZHVsZSBjaHVua3MgPSAzIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYmFiZWwtcnVudGltZS9yZWdlbmVyYXRvclwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImJhYmVsLXJ1bnRpbWUvcmVnZW5lcmF0b3JcIlxuLy8gbW9kdWxlIGlkID0gYmFiZWwtcnVudGltZS9yZWdlbmVyYXRvclxuLy8gbW9kdWxlIGNodW5rcyA9IDMiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJpbnRhY3RcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJpbnRhY3RcIlxuLy8gbW9kdWxlIGlkID0gaW50YWN0XG4vLyBtb2R1bGUgY2h1bmtzID0gMyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5vZGUtc3R5bGUtbG9hZGVyL2NsaWVudENsZWFudXBcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJub2RlLXN0eWxlLWxvYWRlci9jbGllbnRDbGVhbnVwXCJcbi8vIG1vZHVsZSBpZCA9IG5vZGUtc3R5bGUtbG9hZGVyL2NsaWVudENsZWFudXBcbi8vIG1vZHVsZSBjaHVua3MgPSAzIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibm9kZS1zdHlsZS1sb2FkZXIvY29sbGVjdFwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcIm5vZGUtc3R5bGUtbG9hZGVyL2NvbGxlY3RcIlxuLy8gbW9kdWxlIGlkID0gbm9kZS1zdHlsZS1sb2FkZXIvY29sbGVjdFxuLy8gbW9kdWxlIGNodW5rcyA9IDMiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwYXRoLXRvLXJlZ2V4cFwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcInBhdGgtdG8tcmVnZXhwXCJcbi8vIG1vZHVsZSBpZCA9IHBhdGgtdG8tcmVnZXhwXG4vLyBtb2R1bGUgY2h1bmtzID0gMyJdLCJzb3VyY2VSb290IjoiIn0=