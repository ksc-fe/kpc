webpackJsonp([0],{

/***/ "./components/button/group.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _desc, _value, _class, _class2, _temp;

var _intact = __webpack_require__("./node_modules/intact-vue/src/index.js");

var _intact2 = _interopRequireDefault(_intact);

var _group = __webpack_require__("./components/button/group.vdt");

var _group2 = _interopRequireDefault(_group);

__webpack_require__("./components/button/index.styl");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

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

var ButtonGroup = (_dec = _intact2.default.template(), (_class = (_temp = _class2 = function (_Intact) {
    _inherits(ButtonGroup, _Intact);

    function ButtonGroup() {
        _classCallCheck(this, ButtonGroup);

        return _possibleConstructorReturn(this, (ButtonGroup.__proto__ || Object.getPrototypeOf(ButtonGroup)).apply(this, arguments));
    }

    _createClass(ButtonGroup, [{
        key: 'defaults',
        value: function defaults() {
            return {
                vertical: false,
                radio: false,
                value: undefined
            };
        }
    }, {
        key: 'template',
        get: function get() {
            return _group2.default;
        }
    }]);

    return ButtonGroup;
}(_intact2.default), _class2.propTypes = {
    vertical: Boolean,
    radio: Boolean
}, _temp), (_applyDecoratedDescriptor(_class.prototype, 'template', [_dec], Object.getOwnPropertyDescriptor(_class.prototype, 'template'), _class.prototype)), _class));
exports.default = ButtonGroup;
module.exports = exports['default'];

/***/ }),

/***/ "./components/button/group.vdt":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

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
        __o = __u.Options,
        _getModel = __o.getModel,
        _setModel = __o.setModel,
        _setCheckboxModel = __u.setCheckboxModel,
        _detectCheckboxChecked = __u.detectCheckboxChecked,
        _setSelectModel = __u.setSelectModel,
        self = this.data,
        scope = obj,
        Animate = self && self.Animate,
        parent = ($callee || {})._super;

    var _self$get = self.get(),
        className = _self$get.className,
        vertical = _self$get.vertical,
        style = _self$get.style,
        children = _self$get.children,
        radio = _self$get.radio,
        value = _self$get.value,
        fluid = _self$get.fluid;

    var classNameObj = (_classNameObj = {
        'k-btns': true,
        'k-vertical': vertical
    }, _defineProperty(_classNameObj, className, className), _defineProperty(_classNameObj, 'k-fluid', fluid), _classNameObj);

    return h('div', { 'style': function () {
            try {
                return [style][0];
            } catch (e) {
                _e(e);
            }
        }.call(this) }, function () {
        try {
            return [radio ? children.map(function (vNode) {
                if (vNode.tag === _2.default) {
                    vNode.props._value = value;
                }
                return vNode;
            }) : children][0];
        } catch (e) {
            _e(e);
        }
    }.call(this), _className(function () {
        try {
            return [classNameObj][0];
        } catch (e) {
            _e(e);
        }
    }.call(this)));
};

var _ = __webpack_require__("./components/button/index.js");

var _2 = _interopRequireDefault(_);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

module.exports = exports['default'];

/***/ }),

/***/ "./components/button/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ButtonGroup = exports.Button = exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _desc, _value, _class, _class2, _temp;

var _intact = __webpack_require__("./node_modules/intact-vue/src/index.js");

var _intact2 = _interopRequireDefault(_intact);

var _index = __webpack_require__("./components/button/index.vdt");

var _index2 = _interopRequireDefault(_index);

var _group = __webpack_require__("./components/button/group.js");

var _group2 = _interopRequireDefault(_group);

__webpack_require__("./components/button/index.styl");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

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

var Button = (_dec = _intact2.default.template(), (_class = (_temp = _class2 = function (_Intact) {
    _inherits(Button, _Intact);

    function Button() {
        _classCallCheck(this, Button);

        return _possibleConstructorReturn(this, (Button.__proto__ || Object.getPrototypeOf(Button)).apply(this, arguments));
    }

    _createClass(Button, [{
        key: 'defaults',
        value: function defaults() {
            return {
                type: 'default', // primary | warning | danger
                size: 'default', // small | mini
                icon: false,
                circle: false,
                loading: false,
                disabled: false,
                fluid: false,
                htmlType: 'button',
                tagName: 'button',
                value: undefined,
                name: undefined,

                _value: undefined
            };
        }
    }, {
        key: '_mount',
        value: function _mount() {
            var parentVNode = this.parentVNode;
            if (parentVNode) {
                parentVNode = parentVNode.parentVNode;
            }
            if (parentVNode && parentVNode.tag === _group2.default) {
                this.group = parentVNode.children;
            }
        }
    }, {
        key: 'showLoading',
        value: function showLoading() {
            this.set('loading', true);
        }
    }, {
        key: 'hideLoading',
        value: function hideLoading() {
            this.set('loading', false);
        }
    }, {
        key: 'disable',
        value: function disable() {
            this.set('disabled', true);
        }
    }, {
        key: 'enable',
        value: function enable() {
            this.set('disabled', false);
        }
    }, {
        key: '_onClick',
        value: function _onClick(e) {
            if (this.group) {
                this.group.set('value', this.get('value'));
            }
            this.trigger('click', e);
        }
    }, {
        key: 'template',
        get: function get() {
            return _index2.default;
        }
    }]);

    return Button;
}(_intact2.default), _class2.propTypes = {
    type: String,
    size: String,
    icon: Boolean,
    circle: Boolean,
    loading: Boolean,
    disabled: Boolean,
    fluid: Boolean,
    htmlType: String,
    tagName: [String, Function],
    name: String
}, _temp), (_applyDecoratedDescriptor(_class.prototype, 'template', [_dec], Object.getOwnPropertyDescriptor(_class.prototype, 'template'), _class.prototype)), _class));
exports.default = Button;
exports.Button = Button;
exports.ButtonGroup = _group2.default;

/***/ }),

/***/ "./components/button/index.styl":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("./node_modules/css-loader/index.js?{\"url\":true}!./node_modules/postcss-loader/lib/index.js?{\"plugins\":[null]}!./node_modules/stylus-loader/index.js?{\"include css\":true,\"sourceMap\":false,\"import\":\"/home/javey/Workspace/kpc/styles/themes/ksyun/index.styl\"}!./components/button/index.styl");
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__("./node_modules/style-loader/lib/addStyles.js")(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(true) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("./node_modules/css-loader/index.js?{\"url\":true}!./node_modules/postcss-loader/lib/index.js?{\"plugins\":[null]}!./node_modules/stylus-loader/index.js?{\"include css\":true,\"sourceMap\":false,\"import\":\"/home/javey/Workspace/kpc/styles/themes/ksyun/index.styl\"}!./components/button/index.styl", function() {
			var newContent = __webpack_require__("./node_modules/css-loader/index.js?{\"url\":true}!./node_modules/postcss-loader/lib/index.js?{\"plugins\":[null]}!./node_modules/stylus-loader/index.js?{\"include css\":true,\"sourceMap\":false,\"import\":\"/home/javey/Workspace/kpc/styles/themes/ksyun/index.styl\"}!./components/button/index.styl");
			if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./components/button/index.vdt":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = function (obj, _Vdt, blocks, $callee) {
    var _classNameObj,
        _this = this;

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
        scope = obj,
        Animate = self && self.Animate,
        parent = ($callee || {})._super;

    var _self$get = self.get(),
        type = _self$get.type,
        className = _self$get.className,
        size = _self$get.size,
        icon = _self$get.icon,
        circle = _self$get.circle,
        ref = _self$get.ref,
        key = _self$get.key,
        tagName = _self$get.tagName,
        htmlType = _self$get.htmlType,
        fluid = _self$get.fluid,
        children = _self$get.children,
        loading = _self$get.loading,
        value = _self$get.value,
        _value = _self$get._value,
        name = _self$get.name,
        rest = _objectWithoutProperties(_self$get, ['type', 'className', 'size', 'icon', 'circle', 'ref', 'key', 'tagName', 'htmlType', 'fluid', 'children', 'loading', 'value', '_value', 'name']);

    var classNameObj = (_classNameObj = {
        'k-btn': true
    }, _defineProperty(_classNameObj, 'k-' + type, type !== 'default'), _defineProperty(_classNameObj, 'k-btn-icon', icon), _defineProperty(_classNameObj, 'k-' + size, size !== 'default'), _defineProperty(_classNameObj, className, className), _defineProperty(_classNameObj, 'k-circle', circle), _defineProperty(_classNameObj, 'k-loading', loading), _defineProperty(_classNameObj, 'k-fluid', fluid), _defineProperty(_classNameObj, 'k-active', value !== undefined && value === _value), _classNameObj);

    var Button = function Button(props) {
        if (props.href) {
            tagName = 'a';
        }
        if (tagName === 'button') {
            // set type of html button
            props.type = htmlType;
        }
        // disable button when loading
        if (loading) props.disabled = true;
        return h(tagName, props, props.children);
    };

    // hack for loading transition of width
    if (!icon && Array.isArray(children)) {
        children.forEach(function (child, index) {
            if (child) {
                if (child.type === 1 || (0, _utils.isStringOrNumberNotEmpty)(child)) {
                    // is a text node
                    // wrap text node with span
                    children[index] = h('span', null, function () {
                        try {
                            return [child][0];
                        } catch (e) {
                            _e(e);
                        }
                    }.call(_this));
                }
                // whether the icon is on the left side or right
                if (index === 0) {
                    if (child.className && child.className.indexOf('icon') > -1) {
                        classNameObj['k-icon-left'] = true;
                    }
                } else if (index === children.length - 1) {
                    if (child.className && child.className.indexOf('icon') > -1) {
                        classNameObj['k-icon-right'] = true;
                    }
                }
            }
        });
    } else if ((0, _utils.isStringOrNumberNotEmpty)(children)) {
        // wrap text node with span
        children = h('span', null, function () {
            try {
                return [children][0];
            } catch (e) {
                _e(e);
            }
        }.call(this));
    }

    return h(Button, _extends({ 'className': _className(function () {
            try {
                return [classNameObj][0];
            } catch (e) {
                _e(e);
            }
        }.call(this)) }, function () {
        try {
            return [rest][0];
        } catch (e) {
            _e(e);
        }
    }.call(this), { 'ev-click': function () {
            try {
                return [self._onClick][0];
            } catch (e) {
                _e(e);
            }
        }.call(this), 'children': ['\n    ', function () {
            try {
                return [loading ? classNameObj['k-icon-right'] ? [children, h('i', null, null, 'k-icon ion-load-c icon-loading')] : [h('i', null, null, 'k-icon ion-load-c icon-loading'), children] : children][0];
            } catch (e) {
                _e(e);
            }
        }.call(this), '\n    ', function () {
            try {
                return [value !== undefined][0];
            } catch (e) {
                _e(e);
            }
        }.call(this) ? h('input', { 'type': 'radio', 'name': function () {
                try {
                    return [name][0];
                } catch (e) {
                    _e(e);
                }
            }.call(this), 'checked': function () {
                try {
                    return [value === _value][0];
                } catch (e) {
                    _e(e);
                }
            }.call(this) }) : undefined], '_context': this }));
};

var _utils = __webpack_require__("./components/utils.js");

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

module.exports = exports['default'];

/***/ }),

/***/ "./components/utils.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.isObject = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

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

var _intact = __webpack_require__("./node_modules/intact-vue/src/index.js");

var _intact2 = _interopRequireDefault(_intact);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var utils = _intact2.default.utils;

function addStyle(style, extra) {
    if (!style) return extra;
    if (!extra) return style;
    if (typeof style === 'string') {
        extra = Object.keys(extra).map(function (key) {
            return kebabCase(key) + ': ' + extra[key];
        }).join(';');
        style = '' + style + (!style || /;\s*$/.test(style) ? '' : ';') + extra;
    } else {
        style = _extends({}, style, extra);
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
    var type = typeof o === 'undefined' ? 'undefined' : _typeof(o);
    return type === 'string' || type === 'number';
}

function isTextVNode(o) {
    return isStringOrNumber(o) || o.type === 1;
}

function isStringOrNumberNotEmpty(o) {
    var type = typeof o === 'undefined' ? 'undefined' : _typeof(o);
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

var isObject = exports.isObject = utils.isObject;

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

/***/ }),

/***/ "./node_modules/axios/index.js":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./node_modules/axios/lib/axios.js");

/***/ }),

/***/ "./node_modules/axios/lib/adapters/xhr.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

var utils = __webpack_require__("./node_modules/axios/lib/utils.js");
var settle = __webpack_require__("./node_modules/axios/lib/core/settle.js");
var buildURL = __webpack_require__("./node_modules/axios/lib/helpers/buildURL.js");
var parseHeaders = __webpack_require__("./node_modules/axios/lib/helpers/parseHeaders.js");
var isURLSameOrigin = __webpack_require__("./node_modules/axios/lib/helpers/isURLSameOrigin.js");
var createError = __webpack_require__("./node_modules/axios/lib/core/createError.js");
var btoa = (typeof window !== 'undefined' && window.btoa && window.btoa.bind(window)) || __webpack_require__("./node_modules/axios/lib/helpers/btoa.js");

module.exports = function xhrAdapter(config) {
  return new Promise(function dispatchXhrRequest(resolve, reject) {
    var requestData = config.data;
    var requestHeaders = config.headers;

    if (utils.isFormData(requestData)) {
      delete requestHeaders['Content-Type']; // Let the browser set it
    }

    var request = new XMLHttpRequest();
    var loadEvent = 'onreadystatechange';
    var xDomain = false;

    // For IE 8/9 CORS support
    // Only supports POST and GET calls and doesn't returns the response headers.
    // DON'T do this for testing b/c XMLHttpRequest is mocked, not XDomainRequest.
    if (process.env.NODE_ENV !== 'test' &&
        typeof window !== 'undefined' &&
        window.XDomainRequest && !('withCredentials' in request) &&
        !isURLSameOrigin(config.url)) {
      request = new window.XDomainRequest();
      loadEvent = 'onload';
      xDomain = true;
      request.onprogress = function handleProgress() {};
      request.ontimeout = function handleTimeout() {};
    }

    // HTTP basic authentication
    if (config.auth) {
      var username = config.auth.username || '';
      var password = config.auth.password || '';
      requestHeaders.Authorization = 'Basic ' + btoa(username + ':' + password);
    }

    request.open(config.method.toUpperCase(), buildURL(config.url, config.params, config.paramsSerializer), true);

    // Set the request timeout in MS
    request.timeout = config.timeout;

    // Listen for ready state
    request[loadEvent] = function handleLoad() {
      if (!request || (request.readyState !== 4 && !xDomain)) {
        return;
      }

      // The request errored out and we didn't get a response, this will be
      // handled by onerror instead
      // With one exception: request that using file: protocol, most browsers
      // will return status as 0 even though it's a successful request
      if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf('file:') === 0)) {
        return;
      }

      // Prepare the response
      var responseHeaders = 'getAllResponseHeaders' in request ? parseHeaders(request.getAllResponseHeaders()) : null;
      var responseData = !config.responseType || config.responseType === 'text' ? request.responseText : request.response;
      var response = {
        data: responseData,
        // IE sends 1223 instead of 204 (https://github.com/axios/axios/issues/201)
        status: request.status === 1223 ? 204 : request.status,
        statusText: request.status === 1223 ? 'No Content' : request.statusText,
        headers: responseHeaders,
        config: config,
        request: request
      };

      settle(resolve, reject, response);

      // Clean up request
      request = null;
    };

    // Handle low level network errors
    request.onerror = function handleError() {
      // Real errors are hidden from us by the browser
      // onerror should only fire if it's a network error
      reject(createError('Network Error', config, null, request));

      // Clean up request
      request = null;
    };

    // Handle timeout
    request.ontimeout = function handleTimeout() {
      reject(createError('timeout of ' + config.timeout + 'ms exceeded', config, 'ECONNABORTED',
        request));

      // Clean up request
      request = null;
    };

    // Add xsrf header
    // This is only done if running in a standard browser environment.
    // Specifically not if we're in a web worker, or react-native.
    if (utils.isStandardBrowserEnv()) {
      var cookies = __webpack_require__("./node_modules/axios/lib/helpers/cookies.js");

      // Add xsrf header
      var xsrfValue = (config.withCredentials || isURLSameOrigin(config.url)) && config.xsrfCookieName ?
          cookies.read(config.xsrfCookieName) :
          undefined;

      if (xsrfValue) {
        requestHeaders[config.xsrfHeaderName] = xsrfValue;
      }
    }

    // Add headers to the request
    if ('setRequestHeader' in request) {
      utils.forEach(requestHeaders, function setRequestHeader(val, key) {
        if (typeof requestData === 'undefined' && key.toLowerCase() === 'content-type') {
          // Remove Content-Type if data is undefined
          delete requestHeaders[key];
        } else {
          // Otherwise add header to the request
          request.setRequestHeader(key, val);
        }
      });
    }

    // Add withCredentials to request if needed
    if (config.withCredentials) {
      request.withCredentials = true;
    }

    // Add responseType to request if needed
    if (config.responseType) {
      try {
        request.responseType = config.responseType;
      } catch (e) {
        // Expected DOMException thrown by browsers not compatible XMLHttpRequest Level 2.
        // But, this can be suppressed for 'json' type as it can be parsed by default 'transformResponse' function.
        if (config.responseType !== 'json') {
          throw e;
        }
      }
    }

    // Handle progress if needed
    if (typeof config.onDownloadProgress === 'function') {
      request.addEventListener('progress', config.onDownloadProgress);
    }

    // Not all browsers support upload events
    if (typeof config.onUploadProgress === 'function' && request.upload) {
      request.upload.addEventListener('progress', config.onUploadProgress);
    }

    if (config.cancelToken) {
      // Handle cancellation
      config.cancelToken.promise.then(function onCanceled(cancel) {
        if (!request) {
          return;
        }

        request.abort();
        reject(cancel);
        // Clean up request
        request = null;
      });
    }

    if (requestData === undefined) {
      requestData = null;
    }

    // Send the request
    request.send(requestData);
  });
};

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/axios/lib/axios.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__("./node_modules/axios/lib/utils.js");
var bind = __webpack_require__("./node_modules/axios/lib/helpers/bind.js");
var Axios = __webpack_require__("./node_modules/axios/lib/core/Axios.js");
var defaults = __webpack_require__("./node_modules/axios/lib/defaults.js");

/**
 * Create an instance of Axios
 *
 * @param {Object} defaultConfig The default config for the instance
 * @return {Axios} A new instance of Axios
 */
function createInstance(defaultConfig) {
  var context = new Axios(defaultConfig);
  var instance = bind(Axios.prototype.request, context);

  // Copy axios.prototype to instance
  utils.extend(instance, Axios.prototype, context);

  // Copy context to instance
  utils.extend(instance, context);

  return instance;
}

// Create the default instance to be exported
var axios = createInstance(defaults);

// Expose Axios class to allow class inheritance
axios.Axios = Axios;

// Factory for creating new instances
axios.create = function create(instanceConfig) {
  return createInstance(utils.merge(defaults, instanceConfig));
};

// Expose Cancel & CancelToken
axios.Cancel = __webpack_require__("./node_modules/axios/lib/cancel/Cancel.js");
axios.CancelToken = __webpack_require__("./node_modules/axios/lib/cancel/CancelToken.js");
axios.isCancel = __webpack_require__("./node_modules/axios/lib/cancel/isCancel.js");

// Expose all/spread
axios.all = function all(promises) {
  return Promise.all(promises);
};
axios.spread = __webpack_require__("./node_modules/axios/lib/helpers/spread.js");

module.exports = axios;

// Allow use of default import syntax in TypeScript
module.exports.default = axios;


/***/ }),

/***/ "./node_modules/axios/lib/cancel/Cancel.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * A `Cancel` is an object that is thrown when an operation is canceled.
 *
 * @class
 * @param {string=} message The message.
 */
function Cancel(message) {
  this.message = message;
}

Cancel.prototype.toString = function toString() {
  return 'Cancel' + (this.message ? ': ' + this.message : '');
};

Cancel.prototype.__CANCEL__ = true;

module.exports = Cancel;


/***/ }),

/***/ "./node_modules/axios/lib/cancel/CancelToken.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Cancel = __webpack_require__("./node_modules/axios/lib/cancel/Cancel.js");

/**
 * A `CancelToken` is an object that can be used to request cancellation of an operation.
 *
 * @class
 * @param {Function} executor The executor function.
 */
function CancelToken(executor) {
  if (typeof executor !== 'function') {
    throw new TypeError('executor must be a function.');
  }

  var resolvePromise;
  this.promise = new Promise(function promiseExecutor(resolve) {
    resolvePromise = resolve;
  });

  var token = this;
  executor(function cancel(message) {
    if (token.reason) {
      // Cancellation has already been requested
      return;
    }

    token.reason = new Cancel(message);
    resolvePromise(token.reason);
  });
}

/**
 * Throws a `Cancel` if cancellation has been requested.
 */
CancelToken.prototype.throwIfRequested = function throwIfRequested() {
  if (this.reason) {
    throw this.reason;
  }
};

/**
 * Returns an object that contains a new `CancelToken` and a function that, when called,
 * cancels the `CancelToken`.
 */
CancelToken.source = function source() {
  var cancel;
  var token = new CancelToken(function executor(c) {
    cancel = c;
  });
  return {
    token: token,
    cancel: cancel
  };
};

module.exports = CancelToken;


/***/ }),

/***/ "./node_modules/axios/lib/cancel/isCancel.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function isCancel(value) {
  return !!(value && value.__CANCEL__);
};


/***/ }),

/***/ "./node_modules/axios/lib/core/Axios.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var defaults = __webpack_require__("./node_modules/axios/lib/defaults.js");
var utils = __webpack_require__("./node_modules/axios/lib/utils.js");
var InterceptorManager = __webpack_require__("./node_modules/axios/lib/core/InterceptorManager.js");
var dispatchRequest = __webpack_require__("./node_modules/axios/lib/core/dispatchRequest.js");

/**
 * Create a new instance of Axios
 *
 * @param {Object} instanceConfig The default config for the instance
 */
function Axios(instanceConfig) {
  this.defaults = instanceConfig;
  this.interceptors = {
    request: new InterceptorManager(),
    response: new InterceptorManager()
  };
}

/**
 * Dispatch a request
 *
 * @param {Object} config The config specific for this request (merged with this.defaults)
 */
Axios.prototype.request = function request(config) {
  /*eslint no-param-reassign:0*/
  // Allow for axios('example/url'[, config]) a la fetch API
  if (typeof config === 'string') {
    config = utils.merge({
      url: arguments[0]
    }, arguments[1]);
  }

  config = utils.merge(defaults, this.defaults, { method: 'get' }, config);
  config.method = config.method.toLowerCase();

  // Hook up interceptors middleware
  var chain = [dispatchRequest, undefined];
  var promise = Promise.resolve(config);

  this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
    chain.unshift(interceptor.fulfilled, interceptor.rejected);
  });

  this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
    chain.push(interceptor.fulfilled, interceptor.rejected);
  });

  while (chain.length) {
    promise = promise.then(chain.shift(), chain.shift());
  }

  return promise;
};

// Provide aliases for supported request methods
utils.forEach(['delete', 'get', 'head', 'options'], function forEachMethodNoData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function(url, config) {
    return this.request(utils.merge(config || {}, {
      method: method,
      url: url
    }));
  };
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function(url, data, config) {
    return this.request(utils.merge(config || {}, {
      method: method,
      url: url,
      data: data
    }));
  };
});

module.exports = Axios;


/***/ }),

/***/ "./node_modules/axios/lib/core/InterceptorManager.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__("./node_modules/axios/lib/utils.js");

function InterceptorManager() {
  this.handlers = [];
}

/**
 * Add a new interceptor to the stack
 *
 * @param {Function} fulfilled The function to handle `then` for a `Promise`
 * @param {Function} rejected The function to handle `reject` for a `Promise`
 *
 * @return {Number} An ID used to remove interceptor later
 */
InterceptorManager.prototype.use = function use(fulfilled, rejected) {
  this.handlers.push({
    fulfilled: fulfilled,
    rejected: rejected
  });
  return this.handlers.length - 1;
};

/**
 * Remove an interceptor from the stack
 *
 * @param {Number} id The ID that was returned by `use`
 */
InterceptorManager.prototype.eject = function eject(id) {
  if (this.handlers[id]) {
    this.handlers[id] = null;
  }
};

/**
 * Iterate over all the registered interceptors
 *
 * This method is particularly useful for skipping over any
 * interceptors that may have become `null` calling `eject`.
 *
 * @param {Function} fn The function to call for each interceptor
 */
InterceptorManager.prototype.forEach = function forEach(fn) {
  utils.forEach(this.handlers, function forEachHandler(h) {
    if (h !== null) {
      fn(h);
    }
  });
};

module.exports = InterceptorManager;


/***/ }),

/***/ "./node_modules/axios/lib/core/createError.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var enhanceError = __webpack_require__("./node_modules/axios/lib/core/enhanceError.js");

/**
 * Create an Error with the specified message, config, error code, request and response.
 *
 * @param {string} message The error message.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The created error.
 */
module.exports = function createError(message, config, code, request, response) {
  var error = new Error(message);
  return enhanceError(error, config, code, request, response);
};


/***/ }),

/***/ "./node_modules/axios/lib/core/dispatchRequest.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__("./node_modules/axios/lib/utils.js");
var transformData = __webpack_require__("./node_modules/axios/lib/core/transformData.js");
var isCancel = __webpack_require__("./node_modules/axios/lib/cancel/isCancel.js");
var defaults = __webpack_require__("./node_modules/axios/lib/defaults.js");
var isAbsoluteURL = __webpack_require__("./node_modules/axios/lib/helpers/isAbsoluteURL.js");
var combineURLs = __webpack_require__("./node_modules/axios/lib/helpers/combineURLs.js");

/**
 * Throws a `Cancel` if cancellation has been requested.
 */
function throwIfCancellationRequested(config) {
  if (config.cancelToken) {
    config.cancelToken.throwIfRequested();
  }
}

/**
 * Dispatch a request to the server using the configured adapter.
 *
 * @param {object} config The config that is to be used for the request
 * @returns {Promise} The Promise to be fulfilled
 */
module.exports = function dispatchRequest(config) {
  throwIfCancellationRequested(config);

  // Support baseURL config
  if (config.baseURL && !isAbsoluteURL(config.url)) {
    config.url = combineURLs(config.baseURL, config.url);
  }

  // Ensure headers exist
  config.headers = config.headers || {};

  // Transform request data
  config.data = transformData(
    config.data,
    config.headers,
    config.transformRequest
  );

  // Flatten headers
  config.headers = utils.merge(
    config.headers.common || {},
    config.headers[config.method] || {},
    config.headers || {}
  );

  utils.forEach(
    ['delete', 'get', 'head', 'post', 'put', 'patch', 'common'],
    function cleanHeaderConfig(method) {
      delete config.headers[method];
    }
  );

  var adapter = config.adapter || defaults.adapter;

  return adapter(config).then(function onAdapterResolution(response) {
    throwIfCancellationRequested(config);

    // Transform response data
    response.data = transformData(
      response.data,
      response.headers,
      config.transformResponse
    );

    return response;
  }, function onAdapterRejection(reason) {
    if (!isCancel(reason)) {
      throwIfCancellationRequested(config);

      // Transform response data
      if (reason && reason.response) {
        reason.response.data = transformData(
          reason.response.data,
          reason.response.headers,
          config.transformResponse
        );
      }
    }

    return Promise.reject(reason);
  });
};


/***/ }),

/***/ "./node_modules/axios/lib/core/enhanceError.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Update an Error with the specified config, error code, and response.
 *
 * @param {Error} error The error to update.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The error.
 */
module.exports = function enhanceError(error, config, code, request, response) {
  error.config = config;
  if (code) {
    error.code = code;
  }
  error.request = request;
  error.response = response;
  return error;
};


/***/ }),

/***/ "./node_modules/axios/lib/core/settle.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var createError = __webpack_require__("./node_modules/axios/lib/core/createError.js");

/**
 * Resolve or reject a Promise based on response status.
 *
 * @param {Function} resolve A function that resolves the promise.
 * @param {Function} reject A function that rejects the promise.
 * @param {object} response The response.
 */
module.exports = function settle(resolve, reject, response) {
  var validateStatus = response.config.validateStatus;
  // Note: status is not exposed by XDomainRequest
  if (!response.status || !validateStatus || validateStatus(response.status)) {
    resolve(response);
  } else {
    reject(createError(
      'Request failed with status code ' + response.status,
      response.config,
      null,
      response.request,
      response
    ));
  }
};


/***/ }),

/***/ "./node_modules/axios/lib/core/transformData.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__("./node_modules/axios/lib/utils.js");

/**
 * Transform the data for a request or a response
 *
 * @param {Object|String} data The data to be transformed
 * @param {Array} headers The headers for the request or response
 * @param {Array|Function} fns A single function or Array of functions
 * @returns {*} The resulting transformed data
 */
module.exports = function transformData(data, headers, fns) {
  /*eslint no-param-reassign:0*/
  utils.forEach(fns, function transform(fn) {
    data = fn(data, headers);
  });

  return data;
};


/***/ }),

/***/ "./node_modules/axios/lib/defaults.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

var utils = __webpack_require__("./node_modules/axios/lib/utils.js");
var normalizeHeaderName = __webpack_require__("./node_modules/axios/lib/helpers/normalizeHeaderName.js");

var DEFAULT_CONTENT_TYPE = {
  'Content-Type': 'application/x-www-form-urlencoded'
};

function setContentTypeIfUnset(headers, value) {
  if (!utils.isUndefined(headers) && utils.isUndefined(headers['Content-Type'])) {
    headers['Content-Type'] = value;
  }
}

function getDefaultAdapter() {
  var adapter;
  if (typeof XMLHttpRequest !== 'undefined') {
    // For browsers use XHR adapter
    adapter = __webpack_require__("./node_modules/axios/lib/adapters/xhr.js");
  } else if (typeof process !== 'undefined') {
    // For node use HTTP adapter
    adapter = __webpack_require__("./node_modules/axios/lib/adapters/xhr.js");
  }
  return adapter;
}

var defaults = {
  adapter: getDefaultAdapter(),

  transformRequest: [function transformRequest(data, headers) {
    normalizeHeaderName(headers, 'Content-Type');
    if (utils.isFormData(data) ||
      utils.isArrayBuffer(data) ||
      utils.isBuffer(data) ||
      utils.isStream(data) ||
      utils.isFile(data) ||
      utils.isBlob(data)
    ) {
      return data;
    }
    if (utils.isArrayBufferView(data)) {
      return data.buffer;
    }
    if (utils.isURLSearchParams(data)) {
      setContentTypeIfUnset(headers, 'application/x-www-form-urlencoded;charset=utf-8');
      return data.toString();
    }
    if (utils.isObject(data)) {
      setContentTypeIfUnset(headers, 'application/json;charset=utf-8');
      return JSON.stringify(data);
    }
    return data;
  }],

  transformResponse: [function transformResponse(data) {
    /*eslint no-param-reassign:0*/
    if (typeof data === 'string') {
      try {
        data = JSON.parse(data);
      } catch (e) { /* Ignore */ }
    }
    return data;
  }],

  timeout: 0,

  xsrfCookieName: 'XSRF-TOKEN',
  xsrfHeaderName: 'X-XSRF-TOKEN',

  maxContentLength: -1,

  validateStatus: function validateStatus(status) {
    return status >= 200 && status < 300;
  }
};

defaults.headers = {
  common: {
    'Accept': 'application/json, text/plain, */*'
  }
};

utils.forEach(['delete', 'get', 'head'], function forEachMethodNoData(method) {
  defaults.headers[method] = {};
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  defaults.headers[method] = utils.merge(DEFAULT_CONTENT_TYPE);
});

module.exports = defaults;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/axios/lib/helpers/bind.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function bind(fn, thisArg) {
  return function wrap() {
    var args = new Array(arguments.length);
    for (var i = 0; i < args.length; i++) {
      args[i] = arguments[i];
    }
    return fn.apply(thisArg, args);
  };
};


/***/ }),

/***/ "./node_modules/axios/lib/helpers/btoa.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// btoa polyfill for IE<10 courtesy https://github.com/davidchambers/Base64.js

var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';

function E() {
  this.message = 'String contains an invalid character';
}
E.prototype = new Error;
E.prototype.code = 5;
E.prototype.name = 'InvalidCharacterError';

function btoa(input) {
  var str = String(input);
  var output = '';
  for (
    // initialize result and counter
    var block, charCode, idx = 0, map = chars;
    // if the next str index does not exist:
    //   change the mapping table to "="
    //   check if d has no fractional digits
    str.charAt(idx | 0) || (map = '=', idx % 1);
    // "8 - idx % 1 * 8" generates the sequence 2, 4, 6, 8
    output += map.charAt(63 & block >> 8 - idx % 1 * 8)
  ) {
    charCode = str.charCodeAt(idx += 3 / 4);
    if (charCode > 0xFF) {
      throw new E();
    }
    block = block << 8 | charCode;
  }
  return output;
}

module.exports = btoa;


/***/ }),

/***/ "./node_modules/axios/lib/helpers/buildURL.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__("./node_modules/axios/lib/utils.js");

function encode(val) {
  return encodeURIComponent(val).
    replace(/%40/gi, '@').
    replace(/%3A/gi, ':').
    replace(/%24/g, '$').
    replace(/%2C/gi, ',').
    replace(/%20/g, '+').
    replace(/%5B/gi, '[').
    replace(/%5D/gi, ']');
}

/**
 * Build a URL by appending params to the end
 *
 * @param {string} url The base of the url (e.g., http://www.google.com)
 * @param {object} [params] The params to be appended
 * @returns {string} The formatted url
 */
module.exports = function buildURL(url, params, paramsSerializer) {
  /*eslint no-param-reassign:0*/
  if (!params) {
    return url;
  }

  var serializedParams;
  if (paramsSerializer) {
    serializedParams = paramsSerializer(params);
  } else if (utils.isURLSearchParams(params)) {
    serializedParams = params.toString();
  } else {
    var parts = [];

    utils.forEach(params, function serialize(val, key) {
      if (val === null || typeof val === 'undefined') {
        return;
      }

      if (utils.isArray(val)) {
        key = key + '[]';
      }

      if (!utils.isArray(val)) {
        val = [val];
      }

      utils.forEach(val, function parseValue(v) {
        if (utils.isDate(v)) {
          v = v.toISOString();
        } else if (utils.isObject(v)) {
          v = JSON.stringify(v);
        }
        parts.push(encode(key) + '=' + encode(v));
      });
    });

    serializedParams = parts.join('&');
  }

  if (serializedParams) {
    url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams;
  }

  return url;
};


/***/ }),

/***/ "./node_modules/axios/lib/helpers/combineURLs.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Creates a new URL by combining the specified URLs
 *
 * @param {string} baseURL The base URL
 * @param {string} relativeURL The relative URL
 * @returns {string} The combined URL
 */
module.exports = function combineURLs(baseURL, relativeURL) {
  return relativeURL
    ? baseURL.replace(/\/+$/, '') + '/' + relativeURL.replace(/^\/+/, '')
    : baseURL;
};


/***/ }),

/***/ "./node_modules/axios/lib/helpers/cookies.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__("./node_modules/axios/lib/utils.js");

module.exports = (
  utils.isStandardBrowserEnv() ?

  // Standard browser envs support document.cookie
  (function standardBrowserEnv() {
    return {
      write: function write(name, value, expires, path, domain, secure) {
        var cookie = [];
        cookie.push(name + '=' + encodeURIComponent(value));

        if (utils.isNumber(expires)) {
          cookie.push('expires=' + new Date(expires).toGMTString());
        }

        if (utils.isString(path)) {
          cookie.push('path=' + path);
        }

        if (utils.isString(domain)) {
          cookie.push('domain=' + domain);
        }

        if (secure === true) {
          cookie.push('secure');
        }

        document.cookie = cookie.join('; ');
      },

      read: function read(name) {
        var match = document.cookie.match(new RegExp('(^|;\\s*)(' + name + ')=([^;]*)'));
        return (match ? decodeURIComponent(match[3]) : null);
      },

      remove: function remove(name) {
        this.write(name, '', Date.now() - 86400000);
      }
    };
  })() :

  // Non standard browser env (web workers, react-native) lack needed support.
  (function nonStandardBrowserEnv() {
    return {
      write: function write() {},
      read: function read() { return null; },
      remove: function remove() {}
    };
  })()
);


/***/ }),

/***/ "./node_modules/axios/lib/helpers/isAbsoluteURL.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Determines whether the specified URL is absolute
 *
 * @param {string} url The URL to test
 * @returns {boolean} True if the specified URL is absolute, otherwise false
 */
module.exports = function isAbsoluteURL(url) {
  // A URL is considered absolute if it begins with "<scheme>://" or "//" (protocol-relative URL).
  // RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed
  // by any combination of letters, digits, plus, period, or hyphen.
  return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(url);
};


/***/ }),

/***/ "./node_modules/axios/lib/helpers/isURLSameOrigin.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__("./node_modules/axios/lib/utils.js");

module.exports = (
  utils.isStandardBrowserEnv() ?

  // Standard browser envs have full support of the APIs needed to test
  // whether the request URL is of the same origin as current location.
  (function standardBrowserEnv() {
    var msie = /(msie|trident)/i.test(navigator.userAgent);
    var urlParsingNode = document.createElement('a');
    var originURL;

    /**
    * Parse a URL to discover it's components
    *
    * @param {String} url The URL to be parsed
    * @returns {Object}
    */
    function resolveURL(url) {
      var href = url;

      if (msie) {
        // IE needs attribute set twice to normalize properties
        urlParsingNode.setAttribute('href', href);
        href = urlParsingNode.href;
      }

      urlParsingNode.setAttribute('href', href);

      // urlParsingNode provides the UrlUtils interface - http://url.spec.whatwg.org/#urlutils
      return {
        href: urlParsingNode.href,
        protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, '') : '',
        host: urlParsingNode.host,
        search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, '') : '',
        hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, '') : '',
        hostname: urlParsingNode.hostname,
        port: urlParsingNode.port,
        pathname: (urlParsingNode.pathname.charAt(0) === '/') ?
                  urlParsingNode.pathname :
                  '/' + urlParsingNode.pathname
      };
    }

    originURL = resolveURL(window.location.href);

    /**
    * Determine if a URL shares the same origin as the current location
    *
    * @param {String} requestURL The URL to test
    * @returns {boolean} True if URL shares the same origin, otherwise false
    */
    return function isURLSameOrigin(requestURL) {
      var parsed = (utils.isString(requestURL)) ? resolveURL(requestURL) : requestURL;
      return (parsed.protocol === originURL.protocol &&
            parsed.host === originURL.host);
    };
  })() :

  // Non standard browser envs (web workers, react-native) lack needed support.
  (function nonStandardBrowserEnv() {
    return function isURLSameOrigin() {
      return true;
    };
  })()
);


/***/ }),

/***/ "./node_modules/axios/lib/helpers/normalizeHeaderName.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__("./node_modules/axios/lib/utils.js");

module.exports = function normalizeHeaderName(headers, normalizedName) {
  utils.forEach(headers, function processHeader(value, name) {
    if (name !== normalizedName && name.toUpperCase() === normalizedName.toUpperCase()) {
      headers[normalizedName] = value;
      delete headers[name];
    }
  });
};


/***/ }),

/***/ "./node_modules/axios/lib/helpers/parseHeaders.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__("./node_modules/axios/lib/utils.js");

// Headers whose duplicates are ignored by node
// c.f. https://nodejs.org/api/http.html#http_message_headers
var ignoreDuplicateOf = [
  'age', 'authorization', 'content-length', 'content-type', 'etag',
  'expires', 'from', 'host', 'if-modified-since', 'if-unmodified-since',
  'last-modified', 'location', 'max-forwards', 'proxy-authorization',
  'referer', 'retry-after', 'user-agent'
];

/**
 * Parse headers into an object
 *
 * ```
 * Date: Wed, 27 Aug 2014 08:58:49 GMT
 * Content-Type: application/json
 * Connection: keep-alive
 * Transfer-Encoding: chunked
 * ```
 *
 * @param {String} headers Headers needing to be parsed
 * @returns {Object} Headers parsed into an object
 */
module.exports = function parseHeaders(headers) {
  var parsed = {};
  var key;
  var val;
  var i;

  if (!headers) { return parsed; }

  utils.forEach(headers.split('\n'), function parser(line) {
    i = line.indexOf(':');
    key = utils.trim(line.substr(0, i)).toLowerCase();
    val = utils.trim(line.substr(i + 1));

    if (key) {
      if (parsed[key] && ignoreDuplicateOf.indexOf(key) >= 0) {
        return;
      }
      if (key === 'set-cookie') {
        parsed[key] = (parsed[key] ? parsed[key] : []).concat([val]);
      } else {
        parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
      }
    }
  });

  return parsed;
};


/***/ }),

/***/ "./node_modules/axios/lib/helpers/spread.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Syntactic sugar for invoking a function and expanding an array for arguments.
 *
 * Common use case would be to use `Function.prototype.apply`.
 *
 *  ```js
 *  function f(x, y, z) {}
 *  var args = [1, 2, 3];
 *  f.apply(null, args);
 *  ```
 *
 * With `spread` this example can be re-written.
 *
 *  ```js
 *  spread(function(x, y, z) {})([1, 2, 3]);
 *  ```
 *
 * @param {Function} callback
 * @returns {Function}
 */
module.exports = function spread(callback) {
  return function wrap(arr) {
    return callback.apply(null, arr);
  };
};


/***/ }),

/***/ "./node_modules/axios/lib/utils.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var bind = __webpack_require__("./node_modules/axios/lib/helpers/bind.js");
var isBuffer = __webpack_require__("./node_modules/is-buffer/index.js");

/*global toString:true*/

// utils is a library of generic helper functions non-specific to axios

var toString = Object.prototype.toString;

/**
 * Determine if a value is an Array
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Array, otherwise false
 */
function isArray(val) {
  return toString.call(val) === '[object Array]';
}

/**
 * Determine if a value is an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an ArrayBuffer, otherwise false
 */
function isArrayBuffer(val) {
  return toString.call(val) === '[object ArrayBuffer]';
}

/**
 * Determine if a value is a FormData
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an FormData, otherwise false
 */
function isFormData(val) {
  return (typeof FormData !== 'undefined') && (val instanceof FormData);
}

/**
 * Determine if a value is a view on an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
 */
function isArrayBufferView(val) {
  var result;
  if ((typeof ArrayBuffer !== 'undefined') && (ArrayBuffer.isView)) {
    result = ArrayBuffer.isView(val);
  } else {
    result = (val) && (val.buffer) && (val.buffer instanceof ArrayBuffer);
  }
  return result;
}

/**
 * Determine if a value is a String
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a String, otherwise false
 */
function isString(val) {
  return typeof val === 'string';
}

/**
 * Determine if a value is a Number
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Number, otherwise false
 */
function isNumber(val) {
  return typeof val === 'number';
}

/**
 * Determine if a value is undefined
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if the value is undefined, otherwise false
 */
function isUndefined(val) {
  return typeof val === 'undefined';
}

/**
 * Determine if a value is an Object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Object, otherwise false
 */
function isObject(val) {
  return val !== null && typeof val === 'object';
}

/**
 * Determine if a value is a Date
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Date, otherwise false
 */
function isDate(val) {
  return toString.call(val) === '[object Date]';
}

/**
 * Determine if a value is a File
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a File, otherwise false
 */
function isFile(val) {
  return toString.call(val) === '[object File]';
}

/**
 * Determine if a value is a Blob
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Blob, otherwise false
 */
function isBlob(val) {
  return toString.call(val) === '[object Blob]';
}

/**
 * Determine if a value is a Function
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Function, otherwise false
 */
function isFunction(val) {
  return toString.call(val) === '[object Function]';
}

/**
 * Determine if a value is a Stream
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Stream, otherwise false
 */
function isStream(val) {
  return isObject(val) && isFunction(val.pipe);
}

/**
 * Determine if a value is a URLSearchParams object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a URLSearchParams object, otherwise false
 */
function isURLSearchParams(val) {
  return typeof URLSearchParams !== 'undefined' && val instanceof URLSearchParams;
}

/**
 * Trim excess whitespace off the beginning and end of a string
 *
 * @param {String} str The String to trim
 * @returns {String} The String freed of excess whitespace
 */
function trim(str) {
  return str.replace(/^\s*/, '').replace(/\s*$/, '');
}

/**
 * Determine if we're running in a standard browser environment
 *
 * This allows axios to run in a web worker, and react-native.
 * Both environments support XMLHttpRequest, but not fully standard globals.
 *
 * web workers:
 *  typeof window -> undefined
 *  typeof document -> undefined
 *
 * react-native:
 *  navigator.product -> 'ReactNative'
 */
function isStandardBrowserEnv() {
  if (typeof navigator !== 'undefined' && navigator.product === 'ReactNative') {
    return false;
  }
  return (
    typeof window !== 'undefined' &&
    typeof document !== 'undefined'
  );
}

/**
 * Iterate over an Array or an Object invoking a function for each item.
 *
 * If `obj` is an Array callback will be called passing
 * the value, index, and complete array for each item.
 *
 * If 'obj' is an Object callback will be called passing
 * the value, key, and complete object for each property.
 *
 * @param {Object|Array} obj The object to iterate
 * @param {Function} fn The callback to invoke for each item
 */
function forEach(obj, fn) {
  // Don't bother if no value provided
  if (obj === null || typeof obj === 'undefined') {
    return;
  }

  // Force an array if not already something iterable
  if (typeof obj !== 'object') {
    /*eslint no-param-reassign:0*/
    obj = [obj];
  }

  if (isArray(obj)) {
    // Iterate over array values
    for (var i = 0, l = obj.length; i < l; i++) {
      fn.call(null, obj[i], i, obj);
    }
  } else {
    // Iterate over object keys
    for (var key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        fn.call(null, obj[key], key, obj);
      }
    }
  }
}

/**
 * Accepts varargs expecting each argument to be an object, then
 * immutably merges the properties of each object and returns result.
 *
 * When multiple objects contain the same key the later object in
 * the arguments list will take precedence.
 *
 * Example:
 *
 * ```js
 * var result = merge({foo: 123}, {foo: 456});
 * console.log(result.foo); // outputs 456
 * ```
 *
 * @param {Object} obj1 Object to merge
 * @returns {Object} Result of all merge properties
 */
function merge(/* obj1, obj2, obj3, ... */) {
  var result = {};
  function assignValue(val, key) {
    if (typeof result[key] === 'object' && typeof val === 'object') {
      result[key] = merge(result[key], val);
    } else {
      result[key] = val;
    }
  }

  for (var i = 0, l = arguments.length; i < l; i++) {
    forEach(arguments[i], assignValue);
  }
  return result;
}

/**
 * Extends object a by mutably adding to it the properties of object b.
 *
 * @param {Object} a The object to be extended
 * @param {Object} b The object to copy properties from
 * @param {Object} thisArg The object to bind function to
 * @return {Object} The resulting value of object a
 */
function extend(a, b, thisArg) {
  forEach(b, function assignValue(val, key) {
    if (thisArg && typeof val === 'function') {
      a[key] = bind(val, thisArg);
    } else {
      a[key] = val;
    }
  });
  return a;
}

module.exports = {
  isArray: isArray,
  isArrayBuffer: isArrayBuffer,
  isBuffer: isBuffer,
  isFormData: isFormData,
  isArrayBufferView: isArrayBufferView,
  isString: isString,
  isNumber: isNumber,
  isObject: isObject,
  isUndefined: isUndefined,
  isDate: isDate,
  isFile: isFile,
  isBlob: isBlob,
  isFunction: isFunction,
  isStream: isStream,
  isURLSearchParams: isURLSearchParams,
  isStandardBrowserEnv: isStandardBrowserEnv,
  forEach: forEach,
  merge: merge,
  extend: extend,
  trim: trim
};


/***/ }),

/***/ "./node_modules/css-loader/index.js?{\"url\":true}!./node_modules/postcss-loader/lib/index.js?{\"plugins\":[null]}!./node_modules/stylus-loader/index.js?{\"include css\":true,\"sourceMap\":false,\"import\":\"/home/javey/Workspace/kpc/styles/themes/ksyun/index.styl\"}!./components/button/index.styl":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(undefined);
// imports


// module
exports.push([module.i, ".k-btn {\n  cursor: pointer;\n  display: inline-block;\n  height: 2.571428571428572rem;\n  line-height: calc(2.571428571428572rem - 2px);\n  padding: 0 2.285714285714286em;\n  outline: none;\n  border: none;\n  color: #595959;\n  background-color: #fff;\n  text-align: center;\n  border-radius: 2px;\n  -webkit-transition: all 0.25s ease-in-out;\n  transition: all 0.25s ease-in-out;\n  border: 1px solid #d9d9d9;\n  font-size: 1rem;\n}\n.k-btn:hover {\n  border-color: #289af4;\n  color: #289af4;\n}\n.k-btn.k-primary {\n  background-color: #289af4;\n  color: #fff;\n  border-color: #289af4;\n}\n.k-btn.k-primary:hover {\n  background-color: #53aef6;\n  border-color: #53aef6;\n}\n.k-btn.k-warning {\n  background-color: #ff9c28;\n  color: #fff;\n  border-color: #ff9c28;\n}\n.k-btn.k-warning:hover {\n  background-color: #ffb053;\n  border-color: #ffb053;\n}\n.k-btn.k-danger {\n  background-color: #fe4444;\n  color: #fff;\n  border-color: #fe4444;\n}\n.k-btn.k-danger:hover {\n  background-color: #fe6969;\n  border-color: #fe6969;\n}\n.k-btn.k-active {\n  background-color: #289af4;\n  color: #fff;\n  border-color: #289af4;\n}\n.k-btn.k-active:hover {\n  background-color: #53aef6;\n  border-color: #53aef6;\n}\n.k-btn[disabled],\n.k-btn[disabled]:hover {\n  color: #999;\n  background-color: #d9d9d9;\n  border-color: #d9d9d9;\n  cursor: not-allowed;\n}\n.k-btn.k-none,\n.k-btn.k-none:hover {\n  border: none;\n  background-color: transparent;\n}\n.k-btn.k-small {\n  font-size: 0.857142857142857rem;\n  height: 2.142857142857143rem;\n  padding: 0 1.071428571428571rem;\n  line-height: calc(2.142857142857143rem - 2px);\n}\n.k-btn.k-small.k-btn-icon {\n  width: 2.142857142857143rem;\n}\n.k-btn.k-mini {\n  font-size: 0.857142857142857rem;\n  height: 1.857142857142857rem;\n  padding: 0 0.714285714285714rem;\n  line-height: calc(1.857142857142857rem - 2px);\n}\n.k-btn.k-mini.k-btn-icon {\n  width: 1.857142857142857rem;\n}\n.k-btn .k-icon {\n  font-size: inherit;\n}\n.k-btn .k-icon:before {\n  font-size: inherit;\n}\n.k-btn .k-icon + span {\n  margin-left: 0.357142857142857em;\n}\n.k-btn.k-icon-right .k-icon {\n  margin-left: 0.357142857142857em;\n}\n.k-btn.k-btn-icon {\n  width: 2.571428571428572rem;\n  padding: 0;\n}\n.k-btn.k-btn-icon .k-icon {\n  margin: 0;\n  font-size: 1.142857142857143em;\n}\n.k-btn.k-fluid {\n  width: 100%;\n  padding: 0;\n}\n.k-btn.k-circle {\n  border-radius: 1.285714285714286rem;\n}\n.k-btn.k-loading,\n.k-btn.k-loading:hover {\n  background-color: #fff;\n  color: #acacac;\n  border-color: #ececec;\n}\n.k-btn.k-loading .k-icon:not(.icon-loading) {\n  display: none;\n}\n.k-btn.k-loading.k-primary,\n.k-btn.k-loading.k-primary:hover {\n  background-color: #94cdf9;\n  color: #fff;\n  border-color: #94cdf9;\n}\n.k-btn.k-loading.k-warning,\n.k-btn.k-loading.k-warning:hover {\n  background-color: #ffcd93;\n  color: #fff;\n  border-color: #ffcd93;\n}\n.k-btn.k-loading.k-danger,\n.k-btn.k-loading.k-danger:hover {\n  background-color: #fea2a2;\n  color: #fff;\n  border-color: #fea2a2;\n}\n.k-btn.k-loading.k-active,\n.k-btn.k-loading.k-active:hover {\n  background-color: #94cdf9;\n  color: #fff;\n  border-color: #94cdf9;\n}\n.k-btn.k-loading:not(.k-btn-icon):not(.k-icon-left):not(.k-icon-right) {\n  padding-left: 3.285714285714286em;\n}\n.k-btn.k-loading:not(.k-btn-icon):not(.k-icon-left):not(.k-icon-right) .icon-loading {\n  margin-left: -1em;\n}\n.k-btn.k-loading:not(.k-btn-icon):not(.k-icon-left):not(.k-icon-right).k-small {\n  padding-left: 2.071428571428571em;\n}\n.k-btn.k-loading:not(.k-btn-icon):not(.k-icon-left):not(.k-icon-right).k-mini {\n  padding-left: 1.714285714285714em;\n}\n.k-btns {\n  display: inline-block;\n  vertical-align: middle;\n}\n.k-btns .k-btn {\n  margin: 0 !important;\n  vertical-align: middle;\n}\n.k-btns .k-btn:hover {\n  z-index: 1;\n  position: relative;\n}\n.k-btns.k-fluid {\n  width: 100%;\n}\n.k-btns:not(.k-vertical) > .k-btn:not(:first-of-type) {\n  margin-left: -1px !important;\n}\n.k-btns:not(.k-vertical) > .k-btn:not(:first-of-type):not(:last-of-type) {\n  border-radius: 0;\n}\n.k-btns:not(.k-vertical) > .k-btn:not(:only-of-type):first-of-type {\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0;\n}\n.k-btns:not(.k-vertical) > .k-btn:not(:only-of-type):last-of-type {\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0;\n}\n.k-btns:not(.k-vertical) > .k-btn.k-primary:not(:first-of-type) {\n  border-left-color: #1892f3;\n}\n.k-btns:not(.k-vertical) > .k-btn.k-primary:not(:last-of-type) {\n  border-right-color: #1892f3;\n}\n.k-btns:not(.k-vertical) > .k-btn.k-warning:not(:first-of-type) {\n  border-left-color: #ff9416;\n}\n.k-btns:not(.k-vertical) > .k-btn.k-warning:not(:last-of-type) {\n  border-right-color: #ff9416;\n}\n.k-btns:not(.k-vertical) > .k-btn.k-danger:not(:first-of-type) {\n  border-left-color: #fe3131;\n}\n.k-btns:not(.k-vertical) > .k-btn.k-danger:not(:last-of-type) {\n  border-right-color: #fe3131;\n}\n.k-btns:not(.k-vertical) > .k-btn.k-active:not(:first-of-type) {\n  border-left-color: ;\n}\n.k-btns:not(.k-vertical) > .k-btn.k-active:not(:last-of-type) {\n  border-right-color: ;\n}\n.k-btns:not(.k-vertical).k-fluid {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n}\n.k-btns:not(.k-vertical).k-fluid > .k-btn {\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n}\n.k-btns.k-vertical > .k-btn {\n  display: block;\n}\n.k-btns.k-vertical > .k-btn:not(.k-btn-icon) {\n  width: 100%;\n}\n.k-btns.k-vertical > .k-btn:not(:first-of-type) {\n  margin-top: -1px !important;\n}\n.k-btns.k-vertical > .k-btn:not(:first-of-type):not(:last-of-type) {\n  border-radius: 0;\n}\n.k-btns.k-vertical > .k-btn:not(:only-of-type):first-of-type {\n  border-bottom-left-radius: 0;\n  border-bottom-right-radius: 0;\n}\n.k-btns.k-vertical > .k-btn:not(:only-of-type):last-of-type {\n  border-top-left-radius: 0;\n  border-top-right-radius: 0;\n}\n.k-btns.k-vertical > .k-btn.k-primary:not(:first-of-type) {\n  border-top-color: #1892f3;\n}\n.k-btns.k-vertical > .k-btn.k-primary:not(:last-of-type) {\n  border-bottom-color: #1892f3;\n}\n.k-btns.k-vertical > .k-btn.k-warning:not(:first-of-type) {\n  border-top-color: #ff9416;\n}\n.k-btns.k-vertical > .k-btn.k-warning:not(:last-of-type) {\n  border-bottom-color: #ff9416;\n}\n.k-btns.k-vertical > .k-btn.k-danger:not(:first-of-type) {\n  border-top-color: #fe3131;\n}\n.k-btns.k-vertical > .k-btn.k-danger:not(:last-of-type) {\n  border-bottom-color: #fe3131;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?{\"url\":true}!./node_modules/postcss-loader/lib/index.js?{\"plugins\":[null]}!./node_modules/stylus-loader/index.js?{\"include css\":true,\"sourceMap\":false,\"import\":\"/home/javey/Workspace/kpc/styles/themes/ksyun/index.styl\"}!./site/pages/document/index.styl":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(undefined);
// imports


// module
exports.push([module.i, ".document-page {\n  padding-top: 95px;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n}\n.document-page .content-wrapper.fixed {\n  margin-bottom: 0;\n}\n.document-page .content-wrapper.fixed aside {\n  position: fixed;\n  top: 80px;\n  background: #fff;\n  height: calc(100% - 80px);\n  overflow: auto;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n}\n.document-page .content-wrapper.fixed article {\n  margin-left: 200px;\n}\n.document-page .content-wrapper {\n  width: 100%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  background: #fff;\n  margin: 0 auto;\n  border-radius: 5px;\n  -webkit-box-shadow: 0 1px 1px rgba(0,0,0,0.08);\n          box-shadow: 0 1px 1px rgba(0,0,0,0.08);\n  min-height: calc(100% - 15px);\n}\n.document-page .content-wrapper aside {\n  width: 200px;\n  border-right: 1px solid #eee;\n}\n.document-page .content-wrapper .aside-wrapper {\n  position: relative;\n}\n.document-page .content-wrapper .aside-wrapper h5 {\n  font-size: 16px;\n  margin: 25px 0 15px 20px;\n  color: #999;\n}\n.document-page .content-wrapper .aside-wrapper ul {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n.document-page .content-wrapper .aside-wrapper a {\n  display: block;\n  height: 30px;\n  line-height: 30px;\n  padding-left: 25px;\n  color: #333;\n}\n.document-page .content-wrapper .aside-wrapper a:hover {\n  background: #f3f3f3;\n}\n.document-page .content-wrapper .aside-wrapper .active > a {\n  color: #fe4444;\n}\n.document-page .content-wrapper .aside-wrapper .sub-catalogs {\n  margin-left: 10px;\n  font-size: 12px;\n}\n.document-page .content-wrapper .aside-wrapper .aside-border {\n  border-right: 2px solid #fe4444;\n  position: absolute;\n  right: 0;\n  top: 0;\n}\n.document-page .content-wrapper article {\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  padding: 10px 20px;\n  overflow: auto;\n}\n.document-page .content-wrapper .article-head .title {\n  padding: 10px 0;\n  font-size: 2.2em;\n  color: #000;\n  display: inline-block;\n}\n.document-page .content-wrapper .article-head .edit-link {\n  display: inline-block;\n  margin-left: 20px;\n  color: #999;\n  font-style: italic;\n}\n.document-page .content-wrapper article h1 {\n  padding: 10px 0;\n  border-bottom: 1px solid #eee;\n  margin: 20px 0;\n}\n.document-page .content-wrapper article h2,\n.document-page .content-wrapper article h3 {\n  padding: 10px 0;\n  margin: 15px 0;\n}\n.document-page .content-wrapper article p {\n  line-height: 25px;\n}\n.document-page .content-wrapper article .output {\n  padding: 20px;\n  border: 1px solid #eee;\n  margin: 20px 0;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?{\"url\":true}!./node_modules/postcss-loader/lib/index.js?{\"plugins\":[null]}!./node_modules/stylus-loader/index.js?{\"include css\":true,\"sourceMap\":false,\"import\":\"/home/javey/Workspace/kpc/styles/themes/ksyun/index.styl\"}!./site/pages/layout.styl":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(undefined);
// imports


// module
exports.push([module.i, ".hljs {\n  display: block;\n  overflow-x: auto;\n  color: #525252;\n  padding: 15px;\n  -webkit-text-size-adjust: none;\n  margin: 0;\n}\n.hljs-doctype {\n  color: #999;\n}\n.hljs-tag {\n  color: #3e76f6;\n}\n.hljs-attribute {\n  color: #e96900;\n}\n.hljs-value {\n  color: #42b983;\n}\n.hljs-keyword {\n  color: #e96900;\n}\n.hljs-string {\n  color: #42b983;\n}\n.hljs-comment {\n  color: #b3b3b3;\n}\n.hljs-operator .hljs-comment {\n  color: #525252;\n}\n.hljs-regexp {\n  color: #af7dff;\n}\n.hljs-built_in {\n  color: #2db7f5;\n}\n.css .hljs-class {\n  color: #e96900;\n}\n.css .hljs-number,\n.javascript .hljs-number {\n  color: #fc1e70;\n}\n.css .hljs-attribute {\n  color: #af7dff;\n}\n.css .hljs-important {\n  color: #d04;\n}\n.actionscript .hljs-literal,\n.javascript .hljs-literal {\n  color: #fc1e70;\n}\npre {\n  padding: 0;\n  margin: 0;\n}\ncode {\n  display: inline-block;\n  background: #f7f7f7;\n  font-family: Consolas, Monaco, Andale Mono, Ubuntu Mono, monospace;\n  margin: 3px;\n  padding: 1px 5px;\n  border-radius: 3px;\n  color: #666;\n  border: 1px solid #eee;\n  line-height: 20px;\n}\nhtml,\nbody {\n  margin: 0;\n  color: #333;\n  background: #efefef;\n  height: 100%;\n}\na {\n  color: #2d8cf0;\n  text-decoration: none;\n  cursor: pointer;\n}\nh1,\nh2,\nh3,\nh4,\nh5 {\n  margin: 0;\n  font-weight: normal;\n  color: #000;\n}\nh1 {\n  font-size: 2em;\n}\nh2 {\n  font-size: 1.8em;\n}\nh3 {\n  font-size: 1.5em;\n}\ncode {\n  color: #c7254e;\n  background-color: #f9f2f4;\n  border-radius: 4px;\n  padding: 0 5px;\n}\nblockquote {\n  margin: 1em 0;\n  padding: 1px 2em;\n  background: #f8f8f8;\n  border-radius: 0 3px 3px 0;\n  border-left: 2px solid #fe4444;\n  position: relative;\n}\nblockquote:before {\n  content: '!';\n  display: block;\n  position: absolute;\n  top: 50%;\n  margin-top: -10px;\n  width: 20px;\n  height: 20px;\n  border-radius: 100%;\n  text-align: center;\n  background: #fe4444;\n  color: #fff;\n  line-height: 20px;\n  left: -11px;\n}\n#page,\n.app-wrapper,\n.main-wrapper {\n  height: 100%;\n}\n.header-wrapper {\n  height: 80px;\n  line-height: 80px;\n  -webkit-box-shadow: 0 2px 5px rgba(0,0,0,0.08);\n          box-shadow: 0 2px 5px rgba(0,0,0,0.08);\n  background: #fff;\n  position: fixed;\n  width: 100%;\n  top: 0;\n  z-index: 999;\n}\n.header-wrapper header {\n  width: 100%;\n  margin: 0 auto;\n}\n.header-wrapper .logo {\n  font-size: 24px;\n  color: #333;\n  margin-left: 20px;\n}\n.header-wrapper nav {\n  float: right;\n  position: relative;\n}\n.header-wrapper nav a {\n  display: inline-block;\n  padding: 0 20px;\n  color: #333;\n}\n.header-wrapper nav a.active {\n  color: #fe4444;\n}\n.header-wrapper .border {\n  position: absolute;\n  bottom: 0;\n  border-bottom: 2px solid #fe4444;\n}\n.transition {\n  -webkit-transition: all 350ms cubic-bezier(0.55, 0, 0.1, 1);\n  transition: all 350ms cubic-bezier(0.55, 0, 0.1, 1);\n}\n.blue {\n  color: #09d;\n}\n.red {\n  color: #d04;\n}\n.yellow {\n  color: #ffc400;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/is-buffer/index.js":
/***/ (function(module, exports) {

/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
 * @license  MIT
 */

// The _isBuffer check is for Safari 5-7 support, because it's missing
// Object.prototype.constructor. Remove this eventually
module.exports = function (obj) {
  return obj != null && (isBuffer(obj) || isSlowBuffer(obj) || !!obj._isBuffer)
}

function isBuffer (obj) {
  return !!obj.constructor && typeof obj.constructor.isBuffer === 'function' && obj.constructor.isBuffer(obj)
}

// For Node v0.10 support. Remove this eventually.
function isSlowBuffer (obj) {
  return typeof obj.readFloatLE === 'function' && typeof obj.slice === 'function' && isBuffer(obj.slice(0, 0))
}


/***/ }),

/***/ "./site recursive ^\\.\\/.*\\/index\\.json$":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./components/button/index.json": "./site/components/button/index.json",
	"./components/dialog/index.json": "./site/components/dialog/index.json"
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./site recursive ^\\.\\/.*\\/index\\.json$";

/***/ }),

/***/ "./site/components/button/index.json":
/***/ (function(module, exports) {

module.exports = {"setting":{"title":"按钮","category":"组件","order":0},"catalogs":[],"contents":"<h1 id='header-%E7%A4%BA%E4%BE%8B'>示例</h1><pre><code class=\"hljs js\">console.<span class=\"hljs-built_in\">log</span>(<span class=\"hljs-number\">1</span>);\n</code></pre>\n","codes":[{"language":"js","content":"console.log(1);"}],"sideBars":{"组件":[{"title":"按钮","path":"components/button/index.md","children":[{"title":"示例","path":"#header-%E7%A4%BA%E4%BE%8B","level":1,"content":"<h1 id='header-%E7%A4%BA%E4%BE%8B'>示例</h1>","text":"示例","children":[]}]}]}}

/***/ }),

/***/ "./site/components/dialog/index.json":
/***/ (function(module, exports) {

module.exports = {"catalogs":[],"contents":"","codes":[],"sideBars":{"组件":[{"title":"按钮","path":"components/button/index.md","children":[{"title":"示例","path":"#header-%E7%A4%BA%E4%BE%8B","level":1,"content":"<h1 id='header-%E7%A4%BA%E4%BE%8B'>示例</h1>","text":"示例","children":[]}]}]}}

/***/ }),

/***/ "./site/pages/document/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _desc, _value, _class, _init, _class2, _temp;

var _intact = __webpack_require__("./node_modules/intact-vue/src/index.js");

var _intact2 = _interopRequireDefault(_intact);

var _layout = __webpack_require__("./site/pages/layout.js");

var _layout2 = _interopRequireDefault(_layout);

var _index = __webpack_require__("./site/pages/document/index.vdt");

var _index2 = _interopRequireDefault(_index);

__webpack_require__("./site/pages/document/index.styl");

var _axios = __webpack_require__("./node_modules/axios/index.js");

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

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

var _default = (_dec = _intact2.default.template(), (_class = (_temp = _class2 = function (_Layout) {
    _inherits(_default, _Layout);

    function _default() {
        _classCallCheck(this, _default);

        return _possibleConstructorReturn(this, (_default.__proto__ || Object.getPrototypeOf(_default)).apply(this, arguments));
    }

    _createClass(_default, [{
        key: '_init',
        value: function () {
            var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                var data, path;
                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                data = void 0;

                                if (!process.node) {
                                    _context.next = 8;
                                    break;
                                }

                                path = this.get('path');

                                path = path.trim('/');
                                console.log('../../' + path + '/index.json');
                                data = __webpack_require__("./site recursive ^\\.\\/.*\\/index\\.json$")("./" + path + '/index.json');
                                _context.next = 12;
                                break;

                            case 8:
                                _context.next = 10;
                                return _axios2.default.get(this.get('path') + 'index.json');

                            case 10:
                                data = _context.sent;

                                data = data.data;

                            case 12:
                                console.log(data);

                            case 13:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));

            function _init() {
                return _ref.apply(this, arguments);
            }

            return _init;
        }()
    }]);

    return _default;
}(_layout2.default), _class2.template = _index2.default, _temp), (_applyDecoratedDescriptor(_class, 'template', [_dec], (_init = Object.getOwnPropertyDescriptor(_class, 'template'), _init = _init ? _init.value : undefined, {
    enumerable: true,
    configurable: true,
    writable: true,
    initializer: function initializer() {
        return _init;
    }
}), _class)), _class));

exports.default = _default;
module.exports = exports['default'];
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("./node_modules/process/browser.js")))

/***/ }),

/***/ "./site/pages/document/index.styl":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("./node_modules/css-loader/index.js?{\"url\":true}!./node_modules/postcss-loader/lib/index.js?{\"plugins\":[null]}!./node_modules/stylus-loader/index.js?{\"include css\":true,\"sourceMap\":false,\"import\":\"/home/javey/Workspace/kpc/styles/themes/ksyun/index.styl\"}!./site/pages/document/index.styl");
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__("./node_modules/style-loader/lib/addStyles.js")(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(true) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("./node_modules/css-loader/index.js?{\"url\":true}!./node_modules/postcss-loader/lib/index.js?{\"plugins\":[null]}!./node_modules/stylus-loader/index.js?{\"include css\":true,\"sourceMap\":false,\"import\":\"/home/javey/Workspace/kpc/styles/themes/ksyun/index.styl\"}!./site/pages/document/index.styl", function() {
			var newContent = __webpack_require__("./node_modules/css-loader/index.js?{\"url\":true}!./node_modules/postcss-loader/lib/index.js?{\"plugins\":[null]}!./node_modules/stylus-loader/index.js?{\"include css\":true,\"sourceMap\":false,\"import\":\"/home/javey/Workspace/kpc/styles/themes/ksyun/index.styl\"}!./site/pages/document/index.styl");
			if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./site/pages/document/index.vdt":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

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
        scope = obj,
        Animate = self && self.Animate,
        parent = ($callee || {})._super;

    return function () {
        var _obj = { 'navIndex': 'document', 'className': 'document-page', 'children': null };
        if (_obj.hasOwnProperty("arguments")) {
            extend(_obj, _obj.arguments === true ? obj : _obj.arguments);
            delete _obj.arguments;
        }
        return parent.call(this, _obj, _Vdt, function (blocks) {
            var _blocks = {},
                __blocks = extend({}, blocks);
            return (_blocks.content = function (parent) {
                return h(_button2.default, { 'children': 'Hello', '_context': this });
            }) && (__blocks.content = function (parent) {
                var self = this;
                return blocks.content ? blocks.content.call(this, function () {
                    return _blocks.content.call(self, parent);
                }) : _blocks.content.call(this, parent);
            }) && __blocks;
        }.call(this, blocks), parent);
    }.call(this);
};

var _button = __webpack_require__("./components/button/index.js");

var _button2 = _interopRequireDefault(_button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = exports['default'];

/***/ }),

/***/ "./site/pages/layout.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _desc, _value, _class, _init, _class2, _temp;

var _intact = __webpack_require__("./node_modules/intact-vue/src/index.js");

var _intact2 = _interopRequireDefault(_intact);

var _layout = __webpack_require__("./site/pages/layout.vdt");

var _layout2 = _interopRequireDefault(_layout);

__webpack_require__("./site/pages/layout.styl");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

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

var _default = (_dec = _intact2.default.template(), (_class = (_temp = _class2 = function (_Intact) {
    _inherits(_default, _Intact);

    function _default() {
        _classCallCheck(this, _default);

        return _possibleConstructorReturn(this, (_default.__proto__ || Object.getPrototypeOf(_default)).apply(this, arguments));
    }

    _createClass(_default, [{
        key: '_mount',
        value: function _mount() {
            this.$border = this.element.querySelector('.border');
            this._updateBorder();
        }
    }, {
        key: '_updateBorder',
        value: function _updateBorder() {
            // const $nav = this.element.querySelector('.active');
            // let width = 0;
            // let left = 0;
            // if ($nav) {
            // left = $nav.position().left;
            // width = $nav.outerWidth();
            // }
            // this.$border.addClass('transition');
            // this.$border.css({width: width, left: left});
        }
    }]);

    return _default;
}(_intact2.default), _class2.template = _layout2.default, _temp), (_applyDecoratedDescriptor(_class, 'template', [_dec], (_init = Object.getOwnPropertyDescriptor(_class, 'template'), _init = _init ? _init.value : undefined, {
    enumerable: true,
    configurable: true,
    writable: true,
    initializer: function initializer() {
        return _init;
    }
}), _class)), _class));

exports.default = _default;
module.exports = exports['default'];

/***/ }),

/***/ "./site/pages/layout.styl":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("./node_modules/css-loader/index.js?{\"url\":true}!./node_modules/postcss-loader/lib/index.js?{\"plugins\":[null]}!./node_modules/stylus-loader/index.js?{\"include css\":true,\"sourceMap\":false,\"import\":\"/home/javey/Workspace/kpc/styles/themes/ksyun/index.styl\"}!./site/pages/layout.styl");
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__("./node_modules/style-loader/lib/addStyles.js")(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(true) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("./node_modules/css-loader/index.js?{\"url\":true}!./node_modules/postcss-loader/lib/index.js?{\"plugins\":[null]}!./node_modules/stylus-loader/index.js?{\"include css\":true,\"sourceMap\":false,\"import\":\"/home/javey/Workspace/kpc/styles/themes/ksyun/index.styl\"}!./site/pages/layout.styl", function() {
			var newContent = __webpack_require__("./node_modules/css-loader/index.js?{\"url\":true}!./node_modules/postcss-loader/lib/index.js?{\"plugins\":[null]}!./node_modules/stylus-loader/index.js?{\"include css\":true,\"sourceMap\":false,\"import\":\"/home/javey/Workspace/kpc/styles/themes/ksyun/index.styl\"}!./site/pages/layout.styl");
			if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./site/pages/layout.vdt":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

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
        scope = obj,
        Animate = self && self.Animate,
        parent = ($callee || {})._super;

    var nav = [{
        title: '教程',
        href: 'document'
    }, {
        title: 'API',
        href: 'api'
    }];

    return h('div', null, [h('div', null, h('header', null, (_blocks.header = function (parent) {
        return [h(_link2.default, { 'className': 'logo', 'href': '/', 'children': 'KPC', '_context': this }), h('nav', null, [_Vdt.utils.map(function () {
            try {
                return [nav][0];
            } catch (e) {
                _e(e);
            }
        }.call(this), function (value, key) {
            return h(_link2.default, { 'className': _className(function () {
                    try {
                        return [{
                            active: value.href === scope.navIndex
                        }][0];
                    } catch (e) {
                        _e(e);
                    }
                }.call(this)), 'href': function () {
                    try {
                        return ['/' + value.href][0];
                    } catch (e) {
                        _e(e);
                    }
                }.call(this), 'children': function () {
                    try {
                        return [value.title][0];
                    } catch (e) {
                        _e(e);
                    }
                }.call(this), '_context': this });
        }, this), h('div', null, null, 'border')])];
    }) && (__blocks.header = function (parent) {
        var self = this;
        return blocks.header ? blocks.header.call(this, function () {
            return _blocks.header.call(self, parent);
        }) : _blocks.header.call(this, parent);
    }) && __blocks.header.call(this)), 'header-wrapper'), h('div', null, (_blocks.content = function (parent) {
        return null;
    }) && (__blocks.content = function (parent) {
        var self = this;
        return blocks.content ? blocks.content.call(this, function () {
            return _blocks.content.call(self, parent);
        }) : _blocks.content.call(this, parent);
    }) && __blocks.content.call(this), 'content-wrapper')], _className(function () {
        try {
            return [_defineProperty({ 'main-wrapper': true }, scope.className, scope.className)][0];
        } catch (e) {
            _e(e);
        }
    }.call(this)));
};

var _link = __webpack_require__("./components/link/index.js");

var _link2 = _interopRequireDefault(_link);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

module.exports = exports['default'];

/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2J1dHRvbi9ncm91cC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2J1dHRvbi9ncm91cC52ZHQiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9idXR0b24vaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9idXR0b24vaW5kZXguc3R5bCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2J1dHRvbi9pbmRleC52ZHQiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy91dGlscy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXhpb3MvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9hZGFwdGVycy94aHIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9heGlvcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NhbmNlbC9DYW5jZWwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jYW5jZWwvQ2FuY2VsVG9rZW4uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jYW5jZWwvaXNDYW5jZWwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jb3JlL0F4aW9zLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY29yZS9JbnRlcmNlcHRvck1hbmFnZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jb3JlL2NyZWF0ZUVycm9yLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY29yZS9kaXNwYXRjaFJlcXVlc3QuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jb3JlL2VuaGFuY2VFcnJvci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NvcmUvc2V0dGxlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY29yZS90cmFuc2Zvcm1EYXRhLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvZGVmYXVsdHMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL2JpbmQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL2J0b2EuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL2J1aWxkVVJMLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9jb21iaW5lVVJMcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvY29va2llcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvaXNBYnNvbHV0ZVVSTC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvaXNVUkxTYW1lT3JpZ2luLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9ub3JtYWxpemVIZWFkZXJOYW1lLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9wYXJzZUhlYWRlcnMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL3NwcmVhZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL3V0aWxzLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvYnV0dG9uL2luZGV4LnN0eWw/NDAxOCIsIndlYnBhY2s6Ly8vLi9zaXRlL3BhZ2VzL2RvY3VtZW50L2luZGV4LnN0eWw/OWJhNyIsIndlYnBhY2s6Ly8vLi9zaXRlL3BhZ2VzL2xheW91dC5zdHlsPzIxMzIiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2lzLWJ1ZmZlci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zaXRlIF5cXC5cXC8uKlxcL2luZGV4XFwuanNvbiQiLCJ3ZWJwYWNrOi8vLy4vc2l0ZS9jb21wb25lbnRzL2J1dHRvbi9pbmRleC5qc29uIiwid2VicGFjazovLy8uL3NpdGUvY29tcG9uZW50cy9kaWFsb2cvaW5kZXguanNvbiIsIndlYnBhY2s6Ly8vLi9zaXRlL3BhZ2VzL2RvY3VtZW50L2luZGV4LmpzIiwid2VicGFjazovLy8uL3NpdGUvcGFnZXMvZG9jdW1lbnQvaW5kZXguc3R5bCIsIndlYnBhY2s6Ly8vLi9zaXRlL3BhZ2VzL2RvY3VtZW50L2luZGV4LnZkdCIsIndlYnBhY2s6Ly8vLi9zaXRlL3BhZ2VzL2xheW91dC5qcyIsIndlYnBhY2s6Ly8vLi9zaXRlL3BhZ2VzL2xheW91dC5zdHlsIiwid2VicGFjazovLy8uL3NpdGUvcGFnZXMvbGF5b3V0LnZkdCJdLCJuYW1lcyI6WyJCdXR0b25Hcm91cCIsInRlbXBsYXRlIiwidmVydGljYWwiLCJyYWRpbyIsInZhbHVlIiwidW5kZWZpbmVkIiwicHJvcFR5cGVzIiwiQm9vbGVhbiIsIm9iaiIsIl9WZHQiLCJibG9ja3MiLCIkY2FsbGVlIiwiVmR0IiwiaCIsIm1pc3MiLCJoYyIsImh1Iiwid2lkZ2V0cyIsIl9ibG9ja3MiLCJfX2Jsb2NrcyIsIl9fdSIsInV0aWxzIiwiZXh0ZW5kIiwiX2UiLCJlcnJvciIsIl9jbGFzc05hbWUiLCJjbGFzc05hbWUiLCJfX28iLCJPcHRpb25zIiwiX2dldE1vZGVsIiwiZ2V0TW9kZWwiLCJfc2V0TW9kZWwiLCJzZXRNb2RlbCIsIl9zZXRDaGVja2JveE1vZGVsIiwic2V0Q2hlY2tib3hNb2RlbCIsIl9kZXRlY3RDaGVja2JveENoZWNrZWQiLCJkZXRlY3RDaGVja2JveENoZWNrZWQiLCJfc2V0U2VsZWN0TW9kZWwiLCJzZXRTZWxlY3RNb2RlbCIsInNlbGYiLCJkYXRhIiwic2NvcGUiLCJBbmltYXRlIiwicGFyZW50IiwiX3N1cGVyIiwiZ2V0Iiwic3R5bGUiLCJjaGlsZHJlbiIsImZsdWlkIiwiY2xhc3NOYW1lT2JqIiwiZSIsImNhbGwiLCJtYXAiLCJ2Tm9kZSIsInRhZyIsInByb3BzIiwiX3ZhbHVlIiwiQnV0dG9uIiwidHlwZSIsInNpemUiLCJpY29uIiwiY2lyY2xlIiwibG9hZGluZyIsImRpc2FibGVkIiwiaHRtbFR5cGUiLCJ0YWdOYW1lIiwibmFtZSIsInBhcmVudFZOb2RlIiwiZ3JvdXAiLCJzZXQiLCJ0cmlnZ2VyIiwiU3RyaW5nIiwiRnVuY3Rpb24iLCJyZWYiLCJrZXkiLCJyZXN0IiwiaHJlZiIsIkFycmF5IiwiaXNBcnJheSIsImZvckVhY2giLCJjaGlsZCIsImluZGV4IiwiaW5kZXhPZiIsImxlbmd0aCIsIl9vbkNsaWNrIiwiYWRkU3R5bGUiLCJrZWJhYkNhc2UiLCJwcm94eUV2ZW50IiwiaXNTdHJpbmdPck51bWJlciIsImlzVGV4dFZOb2RlIiwiaXNTdHJpbmdPck51bWJlck5vdEVtcHR5IiwiZ2V0VGV4dEJ5Q2hpbGRyZW4iLCJmaW5kUGFyZW50Q29tcG9uZW50Iiwic3RyUGFkIiwicmFuZ2UiLCJleHRyYSIsIk9iamVjdCIsImtleXMiLCJqb2luIiwidGVzdCIsIl9jYWNoZSIsInVwcGVyY2FzZVBhdHRlcm4iLCJ3b3JkIiwicmVwbGFjZSIsIml0ZW0iLCJ0b0xvd2VyQ2FzZSIsImNvbXBvbmVudCIsIm8iLCJyZXQiLCJpc09iamVjdCIsIkNvbXBvbmVudCIsImluc3RhbmNlIiwiaXNVbnRpbCIsInN0ciIsInBhZCIsInRvU3RyaW5nIiwibCIsInN0YXJ0IiwiZW5kIiwiYXBwbHkiLCJ2IiwiaSIsInByb2Nlc3MiLCJub2RlIiwicGF0aCIsInRyaW0iLCJjb25zb2xlIiwibG9nIiwicmVxdWlyZSIsIl9vYmoiLCJoYXNPd25Qcm9wZXJ0eSIsImFyZ3VtZW50cyIsImNvbnRlbnQiLCIkYm9yZGVyIiwiZWxlbWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJfdXBkYXRlQm9yZGVyIiwibmF2IiwidGl0bGUiLCJoZWFkZXIiLCJhY3RpdmUiLCJuYXZJbmRleCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUVxQkEsVyxXQUNoQixpQkFBT0MsUUFBUCxFOzs7Ozs7Ozs7OzttQ0FHVTtBQUNQLG1CQUFPO0FBQ0hDLDBCQUFVLEtBRFA7QUFFSEMsdUJBQU8sS0FGSjtBQUdIQyx1QkFBT0M7QUFISixhQUFQO0FBS0g7Ozs0QkFSYztBQUFFO0FBQWtCOzs7OzZCQVU1QkMsUyxHQUFZO0FBQ2ZKLGNBQVVLLE9BREs7QUFFZkosV0FBT0k7QUFGUSxDO2tCQVpGUCxXOzs7Ozs7Ozs7Ozs7Ozs7a0JDSE4sVUFBU1EsR0FBVCxFQUFjQyxJQUFkLEVBQW9CQyxNQUFwQixFQUE0QkMsT0FBNUIsRUFBcUM7QUFBQTs7QUFFcERGLGFBQVNBLE9BQU9HLEdBQWhCO0FBQ0FKLFlBQVFBLE1BQU0sRUFBZDtBQUNBRSxlQUFXQSxTQUFTLEVBQXBCO0FBQ0EsUUFBSUcsSUFBSUosS0FBS0ssSUFBTCxDQUFVRCxDQUFsQjtBQUFBLFFBQXFCRSxLQUFLTixLQUFLSyxJQUFMLENBQVVDLEVBQXBDO0FBQUEsUUFBd0NDLEtBQUtQLEtBQUtLLElBQUwsQ0FBVUUsRUFBdkQ7QUFBQSxRQUEyREMsVUFBVSxRQUFRLEtBQUtBLE9BQWIsSUFBd0IsRUFBN0Y7QUFBQSxRQUFpR0MsVUFBVSxFQUEzRztBQUFBLFFBQStHQyxXQUFXLEVBQTFIO0FBQUEsUUFDQUMsTUFBTVgsS0FBS1ksS0FEWDtBQUFBLFFBQ2tCQyxTQUFTRixJQUFJRSxNQUQvQjtBQUFBLFFBQ3VDQyxLQUFLSCxJQUFJSSxLQURoRDtBQUFBLFFBQ3VEQyxhQUFhTCxJQUFJTSxTQUR4RTtBQUFBLFFBRUFDLE1BQU1QLElBQUlRLE9BRlY7QUFBQSxRQUVtQkMsWUFBWUYsSUFBSUcs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Ozs7Ozs7QUMxRkQsMEU7Ozs7Ozs7OytDQ0FBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsNENBQTRDO0FBQzVDOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7Ozs7Ozs7Ozs7QUNuTEE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FB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akssWUFBSUosT0FBTyxJQUFYO0FBQ0EsZUFBTzdCLE9BQU8wSCxPQUFQLEdBQWlCMUgsT0FBTzBILE9BQVAsQ0FBZWpGLElBQWYsQ0FBb0IsSUFBcEIsRUFBMEIsWUFBVztBQUM3RCxtQkFBT2pDLFFBQVFrSCxPQUFSLENBQWdCakYsSUFBaEIsQ0FBcUJaLElBQXJCLEVBQTJCSSxNQUEzQixDQUFQO0FBQ0MsU0FGdUIsQ0FBakIsR0FFRnpCLFFBQVFrSCxPQUFSLENBQWdCakYsSUFBaEIsQ0FBcUIsSUFBckIsRUFBMkJSLE1BQTNCLENBRkw7QUFHQyxLQUxvRSxLQUsvRHhCLFNBQVNpSCxPQUFULENBQWlCakYsSUFBakIsQ0FBc0IsSUFBdEIsQ0FMZ0QsRUFLbkIsaUJBTG1CLENBVGhDLENBQWYsRUFjaUQxQixXQUFXLFlBQVc7QUFBQyxZQUFJO0FBQUMsbUJBQU8sbUJBQUUsZ0JBQWdCLElBQWxCLElBQXlCZ0IsTUFBTWYsU0FBL0IsRUFBMkNlLE1BQU1mLFNBQWpELEdBQThELENBQTlELENBQVA7QUFBd0UsU0FBN0UsQ0FBOEUsT0FBTXdCLENBQU4sRUFBUztBQUFDM0IsZUFBRzJCLENBQUg7QUFBTTtBQUFDLEtBQTNHLENBQTRHQyxJQUE1RyxDQUFpSCxJQUFqSCxDQUFYLENBZGpELENBQVA7QUFlQyxDOztBQTVDRCIsImZpbGUiOiJzdGF0aWMvY2h1bmsvNjA1NzIyZjU0ZTcwMmIzMmE4ZmIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSW50YWN0IGZyb20gJ2ludGFjdCc7XG5pbXBvcnQgdGVtcGxhdGUgZnJvbSAnLi9ncm91cC52ZHQnO1xuaW1wb3J0ICcuL2luZGV4LnN0eWwnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCdXR0b25Hcm91cCBleHRlbmRzIEludGFjdCB7XG4gICAgQEludGFjdC50ZW1wbGF0ZSgpXG4gICAgZ2V0IHRlbXBsYXRlKCkgeyByZXR1cm4gdGVtcGxhdGU7IH1cblxuICAgIGRlZmF1bHRzKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdmVydGljYWw6IGZhbHNlLFxuICAgICAgICAgICAgcmFkaW86IGZhbHNlLFxuICAgICAgICAgICAgdmFsdWU6IHVuZGVmaW5lZCxcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgICAgICB2ZXJ0aWNhbDogQm9vbGVhbixcbiAgICAgICAgcmFkaW86IEJvb2xlYW4sXG4gICAgfVxufVxuXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL2J1dHRvbi9ncm91cC5qcyIsImltcG9ydCBCdXR0b24gZnJvbSAnLi8nO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24ob2JqLCBfVmR0LCBibG9ja3MsICRjYWxsZWUpIHtcblxuX1ZkdCB8fCAoX1ZkdCA9IFZkdCk7XG5vYmogfHwgKG9iaiA9IHt9KTtcbmJsb2NrcyB8fCAoYmxvY2tzID0ge30pO1xudmFyIGggPSBfVmR0Lm1pc3MuaCwgaGMgPSBfVmR0Lm1pc3MuaGMsIGh1ID0gX1ZkdC5taXNzLmh1LCB3aWRnZXRzID0gdGhpcyAmJiB0aGlzLndpZGdldHMgfHwge30sIF9ibG9ja3MgPSB7fSwgX19ibG9ja3MgPSB7fSxcbl9fdSA9IF9WZHQudXRpbHMsIGV4dGVuZCA9IF9fdS5leHRlbmQsIF9lID0gX191LmVycm9yLCBfY2xhc3NOYW1lID0gX191LmNsYXNzTmFtZSxcbl9fbyA9IF9fdS5PcHRpb25zLCBfZ2V0TW9kZWwgPSBfX28uZ2V0TW9kZWwsIF9zZXRNb2RlbCA9IF9fby5zZXRNb2RlbCxcbl9zZXRDaGVja2JveE1vZGVsID0gX191LnNldENoZWNrYm94TW9kZWwsIF9kZXRlY3RDaGVja2JveENoZWNrZWQgPSBfX3UuZGV0ZWN0Q2hlY2tib3hDaGVja2VkLFxuX3NldFNlbGVjdE1vZGVsID0gX191LnNldFNlbGVjdE1vZGVsLFxuc2VsZiA9IHRoaXMuZGF0YSwgc2NvcGUgPSBvYmosIEFuaW1hdGUgPSBzZWxmICYmIHNlbGYuQW5pbWF0ZSwgcGFyZW50ID0gKCRjYWxsZWUgfHwge30pLl9zdXBlclxuXG5cbmNvbnN0IHtcbiAgICBjbGFzc05hbWUsIHZlcnRpY2FsLCBzdHlsZSwgXG4gICAgY2hpbGRyZW4sIHJhZGlvLCB2YWx1ZSwgZmx1aWRcbn0gPSBzZWxmLmdldCgpO1xuXG5jb25zdCBjbGFzc05hbWVPYmogPSB7XG4gICAgJ2stYnRucyc6IHRydWUsXG4gICAgJ2stdmVydGljYWwnOiB2ZXJ0aWNhbCxcbiAgICBbY2xhc3NOYW1lXTogY2xhc3NOYW1lLFxuICAgICdrLWZsdWlkJzogZmx1aWQsXG59O1xuXG5yZXR1cm4gaCgnZGl2JywgeydzdHlsZSc6IGZ1bmN0aW9uKCkge3RyeSB7cmV0dXJuIFtzdHlsZSBdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpfSwgZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW3JhZGlvID8gY2hpbGRyZW4ubWFwKHZOb2RlID0+IHtcbiAgICAgICAgaWYgKHZOb2RlLnRhZyA9PT0gQnV0dG9uKSB7XG4gICAgICAgICAgICB2Tm9kZS5wcm9wcy5fdmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdk5vZGU7XG4gICAgfSkgOiBjaGlsZHJlblxuXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKSwgX2NsYXNzTmFtZShmdW5jdGlvbigpIHt0cnkge3JldHVybiBbY2xhc3NOYW1lT2JqIF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcykpKVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvYnV0dG9uL2dyb3VwLnZkdCIsImltcG9ydCBJbnRhY3QgZnJvbSAnaW50YWN0JztcbmltcG9ydCB0ZW1wbGF0ZSBmcm9tICcuL2luZGV4LnZkdCc7XG5pbXBvcnQgR3JvdXAgZnJvbSAnLi9ncm91cCc7XG5pbXBvcnQgJy4vaW5kZXguc3R5bCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJ1dHRvbiBleHRlbmRzIEludGFjdCB7XG4gICAgQEludGFjdC50ZW1wbGF0ZSgpXG4gICAgZ2V0IHRlbXBsYXRlKCkgeyByZXR1cm4gdGVtcGxhdGU7IH1cblxuICAgIGRlZmF1bHRzKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdHlwZTogJ2RlZmF1bHQnLCAvLyBwcmltYXJ5IHwgd2FybmluZyB8IGRhbmdlclxuICAgICAgICAgICAgc2l6ZTogJ2RlZmF1bHQnLCAvLyBzbWFsbCB8IG1pbmlcbiAgICAgICAgICAgIGljb246IGZhbHNlLFxuICAgICAgICAgICAgY2lyY2xlOiBmYWxzZSxcbiAgICAgICAgICAgIGxvYWRpbmc6IGZhbHNlLFxuICAgICAgICAgICAgZGlzYWJsZWQ6IGZhbHNlLFxuICAgICAgICAgICAgZmx1aWQ6IGZhbHNlLFxuICAgICAgICAgICAgaHRtbFR5cGU6ICdidXR0b24nLFxuICAgICAgICAgICAgdGFnTmFtZTogJ2J1dHRvbicsXG4gICAgICAgICAgICB2YWx1ZTogdW5kZWZpbmVkLFxuICAgICAgICAgICAgbmFtZTogdW5kZWZpbmVkLFxuXG4gICAgICAgICAgICBfdmFsdWU6IHVuZGVmaW5lZCxcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgIHNpemU6IFN0cmluZyxcbiAgICAgICAgaWNvbjogQm9vbGVhbixcbiAgICAgICAgY2lyY2xlOiBCb29sZWFuLFxuICAgICAgICBsb2FkaW5nOiBCb29sZWFuLFxuICAgICAgICBkaXNhYmxlZDogQm9vbGVhbixcbiAgICAgICAgZmx1aWQ6IEJvb2xlYW4sXG4gICAgICAgIGh0bWxUeXBlOiBTdHJpbmcsXG4gICAgICAgIHRhZ05hbWU6IFtTdHJpbmcsIEZ1bmN0aW9uXSxcbiAgICAgICAgbmFtZTogU3RyaW5nLFxuICAgIH1cblxuICAgIF9tb3VudCgpIHtcbiAgICAgICAgbGV0IHBhcmVudFZOb2RlID0gdGhpcy5wYXJlbnRWTm9kZTtcbiAgICAgICAgaWYgKHBhcmVudFZOb2RlKSB7XG4gICAgICAgICAgICBwYXJlbnRWTm9kZSA9IHBhcmVudFZOb2RlLnBhcmVudFZOb2RlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChwYXJlbnRWTm9kZSAmJiBwYXJlbnRWTm9kZS50YWcgPT09IEdyb3VwKSB7XG4gICAgICAgICAgICB0aGlzLmdyb3VwID0gcGFyZW50Vk5vZGUuY2hpbGRyZW47XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzaG93TG9hZGluZygpIHtcbiAgICAgICAgdGhpcy5zZXQoJ2xvYWRpbmcnLCB0cnVlKTtcbiAgICB9XG5cbiAgICBoaWRlTG9hZGluZygpIHtcbiAgICAgICAgdGhpcy5zZXQoJ2xvYWRpbmcnLCBmYWxzZSk7XG4gICAgfVxuXG4gICAgZGlzYWJsZSgpIHtcbiAgICAgICAgdGhpcy5zZXQoJ2Rpc2FibGVkJywgdHJ1ZSk7XG4gICAgfVxuXG4gICAgZW5hYmxlKCkge1xuICAgICAgICB0aGlzLnNldCgnZGlzYWJsZWQnLCBmYWxzZSk7XG4gICAgfVxuXG4gICAgX29uQ2xpY2soZSkge1xuICAgICAgICBpZiAodGhpcy5ncm91cCkge1xuICAgICAgICAgICAgdGhpcy5ncm91cC5zZXQoJ3ZhbHVlJywgdGhpcy5nZXQoJ3ZhbHVlJykpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMudHJpZ2dlcignY2xpY2snLCBlKTtcbiAgICB9XG59XG5cbmV4cG9ydCB7QnV0dG9uLCBHcm91cCBhcyBCdXR0b25Hcm91cH07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL2J1dHRvbi9pbmRleC5qcyIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz8/cmVmLS0yLTEhLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0yLTIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWx1cy1sb2FkZXIvaW5kZXguanM/P3JlZi0tMi0zIS4vaW5kZXguc3R5bFwiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuLy8gUHJlcGFyZSBjc3NUcmFuc2Zvcm1hdGlvblxudmFyIHRyYW5zZm9ybTtcblxudmFyIG9wdGlvbnMgPSB7fVxub3B0aW9ucy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1cbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuXHQvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuXHRpZighY29udGVudC5sb2NhbHMpIHtcblx0XHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tMi0xIS4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMi0yIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsdXMtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTItMyEuL2luZGV4LnN0eWxcIiwgZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTItMSEuLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTItMiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bHVzLWxvYWRlci9pbmRleC5qcz8/cmVmLS0yLTMhLi9pbmRleC5zdHlsXCIpO1xuXHRcdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cdFx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdFx0fSk7XG5cdH1cblx0Ly8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2NvbXBvbmVudHMvYnV0dG9uL2luZGV4LnN0eWxcbi8vIG1vZHVsZSBpZCA9IC4vY29tcG9uZW50cy9idXR0b24vaW5kZXguc3R5bFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQge2lzU3RyaW5nT3JOdW1iZXJOb3RFbXB0eX0gZnJvbSAnLi4vdXRpbHMnO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24ob2JqLCBfVmR0LCBibG9ja3MsICRjYWxsZWUpIHtcblxuX1ZkdCB8fCAoX1ZkdCA9IFZkdCk7XG5vYmogfHwgKG9iaiA9IHt9KTtcbmJsb2NrcyB8fCAoYmxvY2tzID0ge30pO1xudmFyIGggPSBfVmR0Lm1pc3MuaCwgaGMgPSBfVmR0Lm1pc3MuaGMsIGh1ID0gX1ZkdC5taXNzLmh1LCB3aWRnZXRzID0gdGhpcyAmJiB0aGlzLndpZGdldHMgfHwge30sIF9ibG9ja3MgPSB7fSwgX19ibG9ja3MgPSB7fSxcbl9fdSA9IF9WZHQudXRpbHMsIGV4dGVuZCA9IF9fdS5leHRlbmQsIF9lID0gX191LmVycm9yLCBfY2xhc3NOYW1lID0gX191LmNsYXNzTmFtZSxcbl9fbyA9IF9fdS5PcHRpb25zLCBfZ2V0TW9kZWwgPSBfX28uZ2V0TW9kZWwsIF9zZXRNb2RlbCA9IF9fby5zZXRNb2RlbCxcbl9zZXRDaGVja2JveE1vZGVsID0gX191LnNldENoZWNrYm94TW9kZWwsIF9kZXRlY3RDaGVja2JveENoZWNrZWQgPSBfX3UuZGV0ZWN0Q2hlY2tib3hDaGVja2VkLFxuX3NldFNlbGVjdE1vZGVsID0gX191LnNldFNlbGVjdE1vZGVsLFxuc2VsZiA9IHRoaXMuZGF0YSwgc2NvcGUgPSBvYmosIEFuaW1hdGUgPSBzZWxmICYmIHNlbGYuQW5pbWF0ZSwgcGFyZW50ID0gKCRjYWxsZWUgfHwge30pLl9zdXBlclxuXG5cbmxldCB7XG4gICAgdHlwZSwgY2xhc3NOYW1lLCBzaXplLCBpY29uLCBjaXJjbGUsIHJlZiwga2V5LFxuICAgIHRhZ05hbWUsIGh0bWxUeXBlLCBmbHVpZCwgY2hpbGRyZW4sIGxvYWRpbmcsXG4gICAgdmFsdWUsIF92YWx1ZSwgbmFtZSwgLi4ucmVzdFxufSA9IHNlbGYuZ2V0KCk7XG5cbmNvbnN0IGNsYXNzTmFtZU9iaiA9IHtcbiAgICAnay1idG4nOiB0cnVlLFxuICAgIFtgay0ke3R5cGV9YF06IHR5cGUgIT09ICdkZWZhdWx0JyxcbiAgICAnay1idG4taWNvbic6IGljb24sXG4gICAgW2BrLSR7c2l6ZX1gXTogc2l6ZSAhPT0gJ2RlZmF1bHQnLFxuICAgIFtjbGFzc05hbWVdOiBjbGFzc05hbWUsIFxuICAgICdrLWNpcmNsZSc6IGNpcmNsZSxcbiAgICAnay1sb2FkaW5nJzogbG9hZGluZyxcbiAgICAnay1mbHVpZCc6IGZsdWlkLFxuICAgICdrLWFjdGl2ZSc6IHZhbHVlICE9PSB1bmRlZmluZWQgJiYgdmFsdWUgPT09IF92YWx1ZSxcbn07XG5cbmNvbnN0IEJ1dHRvbiA9IHByb3BzID0+IHtcbiAgICBpZiAocHJvcHMuaHJlZikge1xuICAgICAgICB0YWdOYW1lID0gJ2EnO1xuICAgIH1cbiAgICBpZiAodGFnTmFtZSA9PT0gJ2J1dHRvbicpIHtcbiAgICAgICAgLy8gc2V0IHR5cGUgb2YgaHRtbCBidXR0b25cbiAgICAgICAgcHJvcHMudHlwZSA9IGh0bWxUeXBlO1xuICAgIH1cbiAgICAvLyBkaXNhYmxlIGJ1dHRvbiB3aGVuIGxvYWRpbmdcbiAgICBpZiAobG9hZGluZykgcHJvcHMuZGlzYWJsZWQgPSB0cnVlO1xuICAgIHJldHVybiBoKHRhZ05hbWUsIHByb3BzLCBwcm9wcy5jaGlsZHJlbik7XG59O1xuXG4vLyBoYWNrIGZvciBsb2FkaW5nIHRyYW5zaXRpb24gb2Ygd2lkdGhcbmlmICghaWNvbiAmJiBBcnJheS5pc0FycmF5KGNoaWxkcmVuKSkge1xuICAgIGNoaWxkcmVuLmZvckVhY2goKGNoaWxkLCBpbmRleCkgPT4ge1xuICAgICAgICBpZiAoY2hpbGQpIHtcbiAgICAgICAgICAgIGlmIChjaGlsZC50eXBlID09PSAxIHx8IGlzU3RyaW5nT3JOdW1iZXJOb3RFbXB0eShjaGlsZCkpIHtcbiAgICAgICAgICAgICAgICAvLyBpcyBhIHRleHQgbm9kZVxuICAgICAgICAgICAgICAgIC8vIHdyYXAgdGV4dCBub2RlIHdpdGggc3BhblxuICAgICAgICAgICAgICAgIGNoaWxkcmVuW2luZGV4XSA9IGgoJ3NwYW4nLCBudWxsLCBmdW5jdGlvbigpIHt0cnkge3JldHVybiBbY2hpbGQgXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIHdoZXRoZXIgdGhlIGljb24gaXMgb24gdGhlIGxlZnQgc2lkZSBvciByaWdodFxuICAgICAgICAgICAgaWYgKGluZGV4ID09PSAwKSB7XG4gICAgICAgICAgICAgICAgaWYgKGNoaWxkLmNsYXNzTmFtZSAmJiBjaGlsZC5jbGFzc05hbWUuaW5kZXhPZignaWNvbicpID4gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lT2JqWydrLWljb24tbGVmdCddID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGluZGV4ID09PSBjaGlsZHJlbi5sZW5ndGggLSAxKSB7XG4gICAgICAgICAgICAgICAgaWYgKGNoaWxkLmNsYXNzTmFtZSAmJiBjaGlsZC5jbGFzc05hbWUuaW5kZXhPZignaWNvbicpID4gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lT2JqWydrLWljb24tcmlnaHQnXSA9IHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSk7XG59IGVsc2UgaWYgKGlzU3RyaW5nT3JOdW1iZXJOb3RFbXB0eShjaGlsZHJlbikpIHtcbiAgICAvLyB3cmFwIHRleHQgbm9kZSB3aXRoIHNwYW5cbiAgICBjaGlsZHJlbiA9IGgoJ3NwYW4nLCBudWxsLCBmdW5jdGlvbigpIHt0cnkge3JldHVybiBbY2hpbGRyZW4gXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKSlcbn1cblxucmV0dXJuIGgoQnV0dG9uLCB7J2NsYXNzTmFtZSc6IF9jbGFzc05hbWUoZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW2NsYXNzTmFtZU9iaiBdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpKSwgLi4uZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW3Jlc3QgXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKSwgJ2V2LWNsaWNrJzogZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW3NlbGYuX29uQ2xpY2sgXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKSwgJ2NoaWxkcmVuJzogWydcXG4gICAgJywgZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW2xvYWRpbmcgPyBcbiAgICAgICAgY2xhc3NOYW1lT2JqWydrLWljb24tcmlnaHQnXSA/XG4gICAgICAgICAgICBbY2hpbGRyZW4sIGgoJ2knLCBudWxsLCBudWxsLCAnay1pY29uIGlvbi1sb2FkLWMgaWNvbi1sb2FkaW5nJyldIDpcbiAgICAgICAgICAgIFtoKCdpJywgbnVsbCwgbnVsbCwgJ2staWNvbiBpb24tbG9hZC1jIGljb24tbG9hZGluZycpLCBjaGlsZHJlbl0gOlxuICAgICAgICBjaGlsZHJlbiBcbiAgICBdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpLCAnXFxuICAgICcsIGZ1bmN0aW9uKCkge3RyeSB7cmV0dXJuIFt2YWx1ZSAhPT0gdW5kZWZpbmVkIF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcykgPyBoKCdpbnB1dCcsIHsndHlwZSc6ICdyYWRpbycsICduYW1lJzogZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW25hbWUgXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKSwgJ2NoZWNrZWQnOiBmdW5jdGlvbigpIHt0cnkge3JldHVybiBbdmFsdWUgPT09IF92YWx1ZSBdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpfSkgOiB1bmRlZmluZWRdLCAnX2NvbnRleHQnOiB0aGlzfSlcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL2J1dHRvbi9pbmRleC52ZHQiLCJpbXBvcnQgSW50YWN0IGZyb20gJ2ludGFjdCc7XG5cbmNvbnN0IHV0aWxzID0gSW50YWN0LnV0aWxzO1xuXG5leHBvcnQgZnVuY3Rpb24gYWRkU3R5bGUoc3R5bGUsIGV4dHJhKSB7XG4gICAgaWYgKCFzdHlsZSkgcmV0dXJuIGV4dHJhO1xuICAgIGlmICghZXh0cmEpIHJldHVybiBzdHlsZTtcbiAgICBpZiAodHlwZW9mIHN0eWxlID09PSAnc3RyaW5nJykge1xuICAgICAgICBleHRyYSA9IE9iamVjdC5rZXlzKGV4dHJhKS5tYXAoa2V5ID0+IGAke2tlYmFiQ2FzZShrZXkpfTogJHtleHRyYVtrZXldfWApLmpvaW4oJzsnKTtcbiAgICAgICAgc3R5bGUgPSBgJHtzdHlsZX0keyFzdHlsZSB8fCAvO1xccyokLy50ZXN0KHN0eWxlKSA/ICcnIDogJzsnfSR7ZXh0cmF9YDtcbiAgICB9IGVsc2Uge1xuICAgICAgICBzdHlsZSA9IHsuLi5zdHlsZSwgLi4uZXh0cmF9O1xuICAgIH1cblxuICAgIHJldHVybiBzdHlsZTtcbn1cblxuY29uc3QgX2NhY2hlID0ge307XG5jb25zdCB1cHBlcmNhc2VQYXR0ZXJuID0gL1tBLVpdL2c7XG5leHBvcnQgZnVuY3Rpb24ga2ViYWJDYXNlKHdvcmQpIHtcbiAgICBpZiAoIV9jYWNoZVt3b3JkXSkge1xuICAgICAgICBfY2FjaGVbd29yZF0gPSB3b3JkLnJlcGxhY2UodXBwZXJjYXNlUGF0dGVybiwgKGl0ZW0pID0+IHtcbiAgICAgICAgICAgIHJldHVybiBgLSR7aXRlbS50b0xvd2VyQ2FzZSgpfWA7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gX2NhY2hlW3dvcmRdO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcHJveHlFdmVudChjb21wb25lbnQsIG5hbWUpIHtcbiAgICByZXR1cm4gKGUpID0+IGNvbXBvbmVudC50cmlnZ2VyKG5hbWUsIGUpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNTdHJpbmdPck51bWJlcihvKSB7XG4gICAgY29uc3QgdHlwZSA9IHR5cGVvZiBvO1xuICAgIHJldHVybiB0eXBlID09PSAnc3RyaW5nJyB8fCB0eXBlID09PSAnbnVtYmVyJztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzVGV4dFZOb2RlKG8pIHtcbiAgICByZXR1cm4gaXNTdHJpbmdPck51bWJlcihvKSB8fCBvLnR5cGUgPT09IDE7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc1N0cmluZ09yTnVtYmVyTm90RW1wdHkobykge1xuICAgIGNvbnN0IHR5cGUgPSB0eXBlb2YgbztcbiAgICByZXR1cm4gdHlwZSA9PT0gJ3N0cmluZycgJiYgIS9eXFxzKyQvLnRlc3QobykgfHwgdHlwZSA9PT0gJ251bWJlcic7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRUZXh0QnlDaGlsZHJlbihjaGlsZHJlbikge1xuICAgIGxldCByZXQgPSAnJztcbiAgICBpZiAoQXJyYXkuaXNBcnJheShjaGlsZHJlbikpIHtcbiAgICAgICAgY2hpbGRyZW4uZm9yRWFjaCh2Tm9kZSA9PiB7XG4gICAgICAgICAgICBpZiAoaXNUZXh0Vk5vZGUodk5vZGUpKSB7XG4gICAgICAgICAgICAgICAgcmV0ICs9IHZOb2RlLmNoaWxkcmVuO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9IGVsc2UgaWYgKGlzU3RyaW5nT3JOdW1iZXIoY2hpbGRyZW4pKSB7XG4gICAgICAgIHJldCArPSBjaGlsZHJlbjtcbiAgICB9XG5cbiAgICByZXR1cm4gcmV0O1xufVxuXG5cbmV4cG9ydCBjb25zdCBpc09iamVjdCA9IHV0aWxzLmlzT2JqZWN0O1xuXG5leHBvcnQgZnVuY3Rpb24gZmluZFBhcmVudENvbXBvbmVudChDb21wb25lbnQsIGluc3RhbmNlLCBpc1VudGlsKSB7XG4gICAgbGV0IHJldDtcbiAgICBsZXQgcGFyZW50ID0gaW5zdGFuY2UucGFyZW50Vk5vZGU7XG4gICAgd2hpbGUgKHBhcmVudCkge1xuICAgICAgICBpZiAocGFyZW50LnRhZyA9PT0gQ29tcG9uZW50KSB7XG4gICAgICAgICAgICByZXQgPSBwYXJlbnQuY2hpbGRyZW47ICAgICAgICBcbiAgICAgICAgICAgIGlmIChpc1VudGlsKSBicmVhaztcbiAgICAgICAgfVxuICAgICAgICBwYXJlbnQgPSBwYXJlbnQucGFyZW50Vk5vZGU7XG4gICAgfVxuICAgIHJldHVybiByZXQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdHJQYWQoc3RyLCBsZW5ndGgsIHBhZCkge1xuICAgIHN0ciA9IHN0ci50b1N0cmluZygpO1xuICAgIHBhZCA9IHBhZCA9PT0gdW5kZWZpbmVkID8gJzAnIDogcGFkO1xuICAgIHZhciBsID0gc3RyLmxlbmd0aDtcbiAgICBpZiAobCA8IGxlbmd0aCkge1xuICAgICAgICBzdHIgPSBuZXcgQXJyYXkobGVuZ3RoIC0gbCArIDEpLmpvaW4ocGFkKSArIHN0cjtcbiAgICB9XG4gICAgcmV0dXJuIHN0cjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJhbmdlKHN0YXJ0LCBlbmQpIHtcbiAgICByZXR1cm4gQXJyYXkuYXBwbHkobnVsbCwge2xlbmd0aDogZW5kIC0gc3RhcnQgKyAxfSlcbiAgICAgICAgLm1hcCgodiwgaSkgPT4gaSArIHN0YXJ0KTtcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvdXRpbHMuanMiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vbGliL2F4aW9zJyk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvYXhpb3MvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IC4vbm9kZV9tb2R1bGVzL2F4aW9zL2luZGV4LmpzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcblxudmFyIHV0aWxzID0gcmVxdWlyZSgnLi8uLi91dGlscycpO1xudmFyIHNldHRsZSA9IHJlcXVpcmUoJy4vLi4vY29yZS9zZXR0bGUnKTtcbnZhciBidWlsZFVSTCA9IHJlcXVpcmUoJy4vLi4vaGVscGVycy9idWlsZFVSTCcpO1xudmFyIHBhcnNlSGVhZGVycyA9IHJlcXVpcmUoJy4vLi4vaGVscGVycy9wYXJzZUhlYWRlcnMnKTtcbnZhciBpc1VSTFNhbWVPcmlnaW4gPSByZXF1aXJlKCcuLy4uL2hlbHBlcnMvaXNVUkxTYW1lT3JpZ2luJyk7XG52YXIgY3JlYXRlRXJyb3IgPSByZXF1aXJlKCcuLi9jb3JlL2NyZWF0ZUVycm9yJyk7XG52YXIgYnRvYSA9ICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB3aW5kb3cuYnRvYSAmJiB3aW5kb3cuYnRvYS5iaW5kKHdpbmRvdykpIHx8IHJlcXVpcmUoJy4vLi4vaGVscGVycy9idG9hJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24geGhyQWRhcHRlcihjb25maWcpIHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIGRpc3BhdGNoWGhyUmVxdWVzdChyZXNvbHZlLCByZWplY3QpIHtcbiAgICB2YXIgcmVxdWVzdERhdGEgPSBjb25maWcuZGF0YTtcbiAgICB2YXIgcmVxdWVzdEhlYWRlcnMgPSBjb25maWcuaGVhZGVycztcblxuICAgIGlmICh1dGlscy5pc0Zvcm1EYXRhKHJlcXVlc3REYXRhKSkge1xuICAgICAgZGVsZXRlIHJlcXVlc3RIZWFkZXJzWydDb250ZW50LVR5cGUnXTsgLy8gTGV0IHRoZSBicm93c2VyIHNldCBpdFxuICAgIH1cblxuICAgIHZhciByZXF1ZXN0ID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG4gICAgdmFyIGxvYWRFdmVudCA9ICdvbnJlYWR5c3RhdGVjaGFuZ2UnO1xuICAgIHZhciB4RG9tYWluID0gZmFsc2U7XG5cbiAgICAvLyBGb3IgSUUgOC85IENPUlMgc3VwcG9ydFxuICAgIC8vIE9ubHkgc3VwcG9ydHMgUE9TVCBhbmQgR0VUIGNhbGxzIGFuZCBkb2Vzbid0IHJldHVybnMgdGhlIHJlc3BvbnNlIGhlYWRlcnMuXG4gICAgLy8gRE9OJ1QgZG8gdGhpcyBmb3IgdGVzdGluZyBiL2MgWE1MSHR0cFJlcXVlc3QgaXMgbW9ja2VkLCBub3QgWERvbWFpblJlcXVlc3QuXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAndGVzdCcgJiZcbiAgICAgICAgdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiZcbiAgICAgICAgd2luZG93LlhEb21haW5SZXF1ZXN0ICYmICEoJ3dpdGhDcmVkZW50aWFscycgaW4gcmVxdWVzdCkgJiZcbiAgICAgICAgIWlzVVJMU2FtZU9yaWdpbihjb25maWcudXJsKSkge1xuICAgICAgcmVxdWVzdCA9IG5ldyB3aW5kb3cuWERvbWFpblJlcXVlc3QoKTtcbiAgICAgIGxvYWRFdmVudCA9ICdvbmxvYWQnO1xuICAgICAgeERvbWFpbiA9IHRydWU7XG4gICAgICByZXF1ZXN0Lm9ucHJvZ3Jlc3MgPSBmdW5jdGlvbiBoYW5kbGVQcm9ncmVzcygpIHt9O1xuICAgICAgcmVxdWVzdC5vbnRpbWVvdXQgPSBmdW5jdGlvbiBoYW5kbGVUaW1lb3V0KCkge307XG4gICAgfVxuXG4gICAgLy8gSFRUUCBiYXNpYyBhdXRoZW50aWNhdGlvblxuICAgIGlmIChjb25maWcuYXV0aCkge1xuICAgICAgdmFyIHVzZXJuYW1lID0gY29uZmlnLmF1dGgudXNlcm5hbWUgfHwgJyc7XG4gICAgICB2YXIgcGFzc3dvcmQgPSBjb25maWcuYXV0aC5wYXNzd29yZCB8fCAnJztcbiAgICAgIHJlcXVlc3RIZWFkZXJzLkF1dGhvcml6YXRpb24gPSAnQmFzaWMgJyArIGJ0b2EodXNlcm5hbWUgKyAnOicgKyBwYXNzd29yZCk7XG4gICAgfVxuXG4gICAgcmVxdWVzdC5vcGVuKGNvbmZpZy5tZXRob2QudG9VcHBlckNhc2UoKSwgYnVpbGRVUkwoY29uZmlnLnVybCwgY29uZmlnLnBhcmFtcywgY29uZmlnLnBhcmFtc1NlcmlhbGl6ZXIpLCB0cnVlKTtcblxuICAgIC8vIFNldCB0aGUgcmVxdWVzdCB0aW1lb3V0IGluIE1TXG4gICAgcmVxdWVzdC50aW1lb3V0ID0gY29uZmlnLnRpbWVvdXQ7XG5cbiAgICAvLyBMaXN0ZW4gZm9yIHJlYWR5IHN0YXRlXG4gICAgcmVxdWVzdFtsb2FkRXZlbnRdID0gZnVuY3Rpb24gaGFuZGxlTG9hZCgpIHtcbiAgICAgIGlmICghcmVxdWVzdCB8fCAocmVxdWVzdC5yZWFkeVN0YXRlICE9PSA0ICYmICF4RG9tYWluKSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIC8vIFRoZSByZXF1ZXN0IGVycm9yZWQgb3V0IGFuZCB3ZSBkaWRuJ3QgZ2V0IGEgcmVzcG9uc2UsIHRoaXMgd2lsbCBiZVxuICAgICAgLy8gaGFuZGxlZCBieSBvbmVycm9yIGluc3RlYWRcbiAgICAgIC8vIFdpdGggb25lIGV4Y2VwdGlvbjogcmVxdWVzdCB0aGF0IHVzaW5nIGZpbGU6IHByb3RvY29sLCBtb3N0IGJyb3dzZXJzXG4gICAgICAvLyB3aWxsIHJldHVybiBzdGF0dXMgYXMgMCBldmVuIHRob3VnaCBpdCdzIGEgc3VjY2Vzc2Z1bCByZXF1ZXN0XG4gICAgICBpZiAocmVxdWVzdC5zdGF0dXMgPT09IDAgJiYgIShyZXF1ZXN0LnJlc3BvbnNlVVJMICYmIHJlcXVlc3QucmVzcG9uc2VVUkwuaW5kZXhPZignZmlsZTonKSA9PT0gMCkpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICAvLyBQcmVwYXJlIHRoZSByZXNwb25zZVxuICAgICAgdmFyIHJlc3BvbnNlSGVhZGVycyA9ICdnZXRBbGxSZXNwb25zZUhlYWRlcnMnIGluIHJlcXVlc3QgPyBwYXJzZUhlYWRlcnMocmVxdWVzdC5nZXRBbGxSZXNwb25zZUhlYWRlcnMoKSkgOiBudWxsO1xuICAgICAgdmFyIHJlc3BvbnNlRGF0YSA9ICFjb25maWcucmVzcG9uc2VUeXBlIHx8IGNvbmZpZy5yZXNwb25zZVR5cGUgPT09ICd0ZXh0JyA/IHJlcXVlc3QucmVzcG9uc2VUZXh0IDogcmVxdWVzdC5yZXNwb25zZTtcbiAgICAgIHZhciByZXNwb25zZSA9IHtcbiAgICAgICAgZGF0YTogcmVzcG9uc2VEYXRhLFxuICAgICAgICAvLyBJRSBzZW5kcyAxMjIzIGluc3RlYWQgb2YgMjA0IChodHRwczovL2dpdGh1Yi5jb20vYXhpb3MvYXhpb3MvaXNzdWVzLzIwMSlcbiAgICAgICAgc3RhdHVzOiByZXF1ZXN0LnN0YXR1cyA9PT0gMTIyMyA/IDIwNCA6IHJlcXVlc3Quc3RhdHVzLFxuICAgICAgICBzdGF0dXNUZXh0OiByZXF1ZXN0LnN0YXR1cyA9PT0gMTIyMyA/ICdObyBDb250ZW50JyA6IHJlcXVlc3Quc3RhdHVzVGV4dCxcbiAgICAgICAgaGVhZGVyczogcmVzcG9uc2VIZWFkZXJzLFxuICAgICAgICBjb25maWc6IGNvbmZpZyxcbiAgICAgICAgcmVxdWVzdDogcmVxdWVzdFxuICAgICAgfTtcblxuICAgICAgc2V0dGxlKHJlc29sdmUsIHJlamVjdCwgcmVzcG9uc2UpO1xuXG4gICAgICAvLyBDbGVhbiB1cCByZXF1ZXN0XG4gICAgICByZXF1ZXN0ID0gbnVsbDtcbiAgICB9O1xuXG4gICAgLy8gSGFuZGxlIGxvdyBsZXZlbCBuZXR3b3JrIGVycm9yc1xuICAgIHJlcXVlc3Qub25lcnJvciA9IGZ1bmN0aW9uIGhhbmRsZUVycm9yKCkge1xuICAgICAgLy8gUmVhbCBlcnJvcnMgYXJlIGhpZGRlbiBmcm9tIHVzIGJ5IHRoZSBicm93c2VyXG4gICAgICAvLyBvbmVycm9yIHNob3VsZCBvbmx5IGZpcmUgaWYgaXQncyBhIG5ldHdvcmsgZXJyb3JcbiAgICAgIHJlamVjdChjcmVhdGVFcnJvcignTmV0d29yayBFcnJvcicsIGNvbmZpZywgbnVsbCwgcmVxdWVzdCkpO1xuXG4gICAgICAvLyBDbGVhbiB1cCByZXF1ZXN0XG4gICAgICByZXF1ZXN0ID0gbnVsbDtcbiAgICB9O1xuXG4gICAgLy8gSGFuZGxlIHRpbWVvdXRcbiAgICByZXF1ZXN0Lm9udGltZW91dCA9IGZ1bmN0aW9uIGhhbmRsZVRpbWVvdXQoKSB7XG4gICAgICByZWplY3QoY3JlYXRlRXJyb3IoJ3RpbWVvdXQgb2YgJyArIGNvbmZpZy50aW1lb3V0ICsgJ21zIGV4Y2VlZGVkJywgY29uZmlnLCAnRUNPTk5BQk9SVEVEJyxcbiAgICAgICAgcmVxdWVzdCkpO1xuXG4gICAgICAvLyBDbGVhbiB1cCByZXF1ZXN0XG4gICAgICByZXF1ZXN0ID0gbnVsbDtcbiAgICB9O1xuXG4gICAgLy8gQWRkIHhzcmYgaGVhZGVyXG4gICAgLy8gVGhpcyBpcyBvbmx5IGRvbmUgaWYgcnVubmluZyBpbiBhIHN0YW5kYXJkIGJyb3dzZXIgZW52aXJvbm1lbnQuXG4gICAgLy8gU3BlY2lmaWNhbGx5IG5vdCBpZiB3ZSdyZSBpbiBhIHdlYiB3b3JrZXIsIG9yIHJlYWN0LW5hdGl2ZS5cbiAgICBpZiAodXRpbHMuaXNTdGFuZGFyZEJyb3dzZXJFbnYoKSkge1xuICAgICAgdmFyIGNvb2tpZXMgPSByZXF1aXJlKCcuLy4uL2hlbHBlcnMvY29va2llcycpO1xuXG4gICAgICAvLyBBZGQgeHNyZiBoZWFkZXJcbiAgICAgIHZhciB4c3JmVmFsdWUgPSAoY29uZmlnLndpdGhDcmVkZW50aWFscyB8fCBpc1VSTFNhbWVPcmlnaW4oY29uZmlnLnVybCkpICYmIGNvbmZpZy54c3JmQ29va2llTmFtZSA/XG4gICAgICAgICAgY29va2llcy5yZWFkKGNvbmZpZy54c3JmQ29va2llTmFtZSkgOlxuICAgICAgICAgIHVuZGVmaW5lZDtcblxuICAgICAgaWYgKHhzcmZWYWx1ZSkge1xuICAgICAgICByZXF1ZXN0SGVhZGVyc1tjb25maWcueHNyZkhlYWRlck5hbWVdID0geHNyZlZhbHVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIEFkZCBoZWFkZXJzIHRvIHRoZSByZXF1ZXN0XG4gICAgaWYgKCdzZXRSZXF1ZXN0SGVhZGVyJyBpbiByZXF1ZXN0KSB7XG4gICAgICB1dGlscy5mb3JFYWNoKHJlcXVlc3RIZWFkZXJzLCBmdW5jdGlvbiBzZXRSZXF1ZXN0SGVhZGVyKHZhbCwga2V5KSB7XG4gICAgICAgIGlmICh0eXBlb2YgcmVxdWVzdERhdGEgPT09ICd1bmRlZmluZWQnICYmIGtleS50b0xvd2VyQ2FzZSgpID09PSAnY29udGVudC10eXBlJykge1xuICAgICAgICAgIC8vIFJlbW92ZSBDb250ZW50LVR5cGUgaWYgZGF0YSBpcyB1bmRlZmluZWRcbiAgICAgICAgICBkZWxldGUgcmVxdWVzdEhlYWRlcnNba2V5XTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvLyBPdGhlcndpc2UgYWRkIGhlYWRlciB0byB0aGUgcmVxdWVzdFxuICAgICAgICAgIHJlcXVlc3Quc2V0UmVxdWVzdEhlYWRlcihrZXksIHZhbCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cblxuICAgIC8vIEFkZCB3aXRoQ3JlZGVudGlhbHMgdG8gcmVxdWVzdCBpZiBuZWVkZWRcbiAgICBpZiAoY29uZmlnLndpdGhDcmVkZW50aWFscykge1xuICAgICAgcmVxdWVzdC53aXRoQ3JlZGVudGlhbHMgPSB0cnVlO1xuICAgIH1cblxuICAgIC8vIEFkZCByZXNwb25zZVR5cGUgdG8gcmVxdWVzdCBpZiBuZWVkZWRcbiAgICBpZiAoY29uZmlnLnJlc3BvbnNlVHlwZSkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgcmVxdWVzdC5yZXNwb25zZVR5cGUgPSBjb25maWcucmVzcG9uc2VUeXBlO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBFeHBlY3RlZCBET01FeGNlcHRpb24gdGhyb3duIGJ5IGJyb3dzZXJzIG5vdCBjb21wYXRpYmxlIFhNTEh0dHBSZXF1ZXN0IExldmVsIDIuXG4gICAgICAgIC8vIEJ1dCwgdGhpcyBjYW4gYmUgc3VwcHJlc3NlZCBmb3IgJ2pzb24nIHR5cGUgYXMgaXQgY2FuIGJlIHBhcnNlZCBieSBkZWZhdWx0ICd0cmFuc2Zvcm1SZXNwb25zZScgZnVuY3Rpb24uXG4gICAgICAgIGlmIChjb25maWcucmVzcG9uc2VUeXBlICE9PSAnanNvbicpIHtcbiAgICAgICAgICB0aHJvdyBlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gSGFuZGxlIHByb2dyZXNzIGlmIG5lZWRlZFxuICAgIGlmICh0eXBlb2YgY29uZmlnLm9uRG93bmxvYWRQcm9ncmVzcyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgcmVxdWVzdC5hZGRFdmVudExpc3RlbmVyKCdwcm9ncmVzcycsIGNvbmZpZy5vbkRvd25sb2FkUHJvZ3Jlc3MpO1xuICAgIH1cblxuICAgIC8vIE5vdCBhbGwgYnJvd3NlcnMgc3VwcG9ydCB1cGxvYWQgZXZlbnRzXG4gICAgaWYgKHR5cGVvZiBjb25maWcub25VcGxvYWRQcm9ncmVzcyA9PT0gJ2Z1bmN0aW9uJyAmJiByZXF1ZXN0LnVwbG9hZCkge1xuICAgICAgcmVxdWVzdC51cGxvYWQuYWRkRXZlbnRMaXN0ZW5lcigncHJvZ3Jlc3MnLCBjb25maWcub25VcGxvYWRQcm9ncmVzcyk7XG4gICAgfVxuXG4gICAgaWYgKGNvbmZpZy5jYW5jZWxUb2tlbikge1xuICAgICAgLy8gSGFuZGxlIGNhbmNlbGxhdGlvblxuICAgICAgY29uZmlnLmNhbmNlbFRva2VuLnByb21pc2UudGhlbihmdW5jdGlvbiBvbkNhbmNlbGVkKGNhbmNlbCkge1xuICAgICAgICBpZiAoIXJlcXVlc3QpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICByZXF1ZXN0LmFib3J0KCk7XG4gICAgICAgIHJlamVjdChjYW5jZWwpO1xuICAgICAgICAvLyBDbGVhbiB1cCByZXF1ZXN0XG4gICAgICAgIHJlcXVlc3QgPSBudWxsO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWYgKHJlcXVlc3REYXRhID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHJlcXVlc3REYXRhID0gbnVsbDtcbiAgICB9XG5cbiAgICAvLyBTZW5kIHRoZSByZXF1ZXN0XG4gICAgcmVxdWVzdC5zZW5kKHJlcXVlc3REYXRhKTtcbiAgfSk7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2FkYXB0ZXJzL3hoci5qc1xuLy8gbW9kdWxlIGlkID0gLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2FkYXB0ZXJzL3hoci5qc1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG5cbnZhciB1dGlscyA9IHJlcXVpcmUoJy4vdXRpbHMnKTtcbnZhciBiaW5kID0gcmVxdWlyZSgnLi9oZWxwZXJzL2JpbmQnKTtcbnZhciBBeGlvcyA9IHJlcXVpcmUoJy4vY29yZS9BeGlvcycpO1xudmFyIGRlZmF1bHRzID0gcmVxdWlyZSgnLi9kZWZhdWx0cycpO1xuXG4vKipcbiAqIENyZWF0ZSBhbiBpbnN0YW5jZSBvZiBBeGlvc1xuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBkZWZhdWx0Q29uZmlnIFRoZSBkZWZhdWx0IGNvbmZpZyBmb3IgdGhlIGluc3RhbmNlXG4gKiBAcmV0dXJuIHtBeGlvc30gQSBuZXcgaW5zdGFuY2Ugb2YgQXhpb3NcbiAqL1xuZnVuY3Rpb24gY3JlYXRlSW5zdGFuY2UoZGVmYXVsdENvbmZpZykge1xuICB2YXIgY29udGV4dCA9IG5ldyBBeGlvcyhkZWZhdWx0Q29uZmlnKTtcbiAgdmFyIGluc3RhbmNlID0gYmluZChBeGlvcy5wcm90b3R5cGUucmVxdWVzdCwgY29udGV4dCk7XG5cbiAgLy8gQ29weSBheGlvcy5wcm90b3R5cGUgdG8gaW5zdGFuY2VcbiAgdXRpbHMuZXh0ZW5kKGluc3RhbmNlLCBBeGlvcy5wcm90b3R5cGUsIGNvbnRleHQpO1xuXG4gIC8vIENvcHkgY29udGV4dCB0byBpbnN0YW5jZVxuICB1dGlscy5leHRlbmQoaW5zdGFuY2UsIGNvbnRleHQpO1xuXG4gIHJldHVybiBpbnN0YW5jZTtcbn1cblxuLy8gQ3JlYXRlIHRoZSBkZWZhdWx0IGluc3RhbmNlIHRvIGJlIGV4cG9ydGVkXG52YXIgYXhpb3MgPSBjcmVhdGVJbnN0YW5jZShkZWZhdWx0cyk7XG5cbi8vIEV4cG9zZSBBeGlvcyBjbGFzcyB0byBhbGxvdyBjbGFzcyBpbmhlcml0YW5jZVxuYXhpb3MuQXhpb3MgPSBBeGlvcztcblxuLy8gRmFjdG9yeSBmb3IgY3JlYXRpbmcgbmV3IGluc3RhbmNlc1xuYXhpb3MuY3JlYXRlID0gZnVuY3Rpb24gY3JlYXRlKGluc3RhbmNlQ29uZmlnKSB7XG4gIHJldHVybiBjcmVhdGVJbnN0YW5jZSh1dGlscy5tZXJnZShkZWZhdWx0cywgaW5zdGFuY2VDb25maWcpKTtcbn07XG5cbi8vIEV4cG9zZSBDYW5jZWwgJiBDYW5jZWxUb2tlblxuYXhpb3MuQ2FuY2VsID0gcmVxdWlyZSgnLi9jYW5jZWwvQ2FuY2VsJyk7XG5heGlvcy5DYW5jZWxUb2tlbiA9IHJlcXVpcmUoJy4vY2FuY2VsL0NhbmNlbFRva2VuJyk7XG5heGlvcy5pc0NhbmNlbCA9IHJlcXVpcmUoJy4vY2FuY2VsL2lzQ2FuY2VsJyk7XG5cbi8vIEV4cG9zZSBhbGwvc3ByZWFkXG5heGlvcy5hbGwgPSBmdW5jdGlvbiBhbGwocHJvbWlzZXMpIHtcbiAgcmV0dXJuIFByb21pc2UuYWxsKHByb21pc2VzKTtcbn07XG5heGlvcy5zcHJlYWQgPSByZXF1aXJlKCcuL2hlbHBlcnMvc3ByZWFkJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gYXhpb3M7XG5cbi8vIEFsbG93IHVzZSBvZiBkZWZhdWx0IGltcG9ydCBzeW50YXggaW4gVHlwZVNjcmlwdFxubW9kdWxlLmV4cG9ydHMuZGVmYXVsdCA9IGF4aW9zO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2F4aW9zLmpzXG4vLyBtb2R1bGUgaWQgPSAuL25vZGVfbW9kdWxlcy9heGlvcy9saWIvYXhpb3MuanNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuXG4vKipcbiAqIEEgYENhbmNlbGAgaXMgYW4gb2JqZWN0IHRoYXQgaXMgdGhyb3duIHdoZW4gYW4gb3BlcmF0aW9uIGlzIGNhbmNlbGVkLlxuICpcbiAqIEBjbGFzc1xuICogQHBhcmFtIHtzdHJpbmc9fSBtZXNzYWdlIFRoZSBtZXNzYWdlLlxuICovXG5mdW5jdGlvbiBDYW5jZWwobWVzc2FnZSkge1xuICB0aGlzLm1lc3NhZ2UgPSBtZXNzYWdlO1xufVxuXG5DYW5jZWwucHJvdG90eXBlLnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gIHJldHVybiAnQ2FuY2VsJyArICh0aGlzLm1lc3NhZ2UgPyAnOiAnICsgdGhpcy5tZXNzYWdlIDogJycpO1xufTtcblxuQ2FuY2VsLnByb3RvdHlwZS5fX0NBTkNFTF9fID0gdHJ1ZTtcblxubW9kdWxlLmV4cG9ydHMgPSBDYW5jZWw7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY2FuY2VsL0NhbmNlbC5qc1xuLy8gbW9kdWxlIGlkID0gLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NhbmNlbC9DYW5jZWwuanNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgQ2FuY2VsID0gcmVxdWlyZSgnLi9DYW5jZWwnKTtcblxuLyoqXG4gKiBBIGBDYW5jZWxUb2tlbmAgaXMgYW4gb2JqZWN0IHRoYXQgY2FuIGJlIHVzZWQgdG8gcmVxdWVzdCBjYW5jZWxsYXRpb24gb2YgYW4gb3BlcmF0aW9uLlxuICpcbiAqIEBjbGFzc1xuICogQHBhcmFtIHtGdW5jdGlvbn0gZXhlY3V0b3IgVGhlIGV4ZWN1dG9yIGZ1bmN0aW9uLlxuICovXG5mdW5jdGlvbiBDYW5jZWxUb2tlbihleGVjdXRvcikge1xuICBpZiAodHlwZW9mIGV4ZWN1dG9yICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignZXhlY3V0b3IgbXVzdCBiZSBhIGZ1bmN0aW9uLicpO1xuICB9XG5cbiAgdmFyIHJlc29sdmVQcm9taXNlO1xuICB0aGlzLnByb21pc2UgPSBuZXcgUHJvbWlzZShmdW5jdGlvbiBwcm9taXNlRXhlY3V0b3IocmVzb2x2ZSkge1xuICAgIHJlc29sdmVQcm9taXNlID0gcmVzb2x2ZTtcbiAgfSk7XG5cbiAgdmFyIHRva2VuID0gdGhpcztcbiAgZXhlY3V0b3IoZnVuY3Rpb24gY2FuY2VsKG1lc3NhZ2UpIHtcbiAgICBpZiAodG9rZW4ucmVhc29uKSB7XG4gICAgICAvLyBDYW5jZWxsYXRpb24gaGFzIGFscmVhZHkgYmVlbiByZXF1ZXN0ZWRcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0b2tlbi5yZWFzb24gPSBuZXcgQ2FuY2VsKG1lc3NhZ2UpO1xuICAgIHJlc29sdmVQcm9taXNlKHRva2VuLnJlYXNvbik7XG4gIH0pO1xufVxuXG4vKipcbiAqIFRocm93cyBhIGBDYW5jZWxgIGlmIGNhbmNlbGxhdGlvbiBoYXMgYmVlbiByZXF1ZXN0ZWQuXG4gKi9cbkNhbmNlbFRva2VuLnByb3RvdHlwZS50aHJvd0lmUmVxdWVzdGVkID0gZnVuY3Rpb24gdGhyb3dJZlJlcXVlc3RlZCgpIHtcbiAgaWYgKHRoaXMucmVhc29uKSB7XG4gICAgdGhyb3cgdGhpcy5yZWFzb247XG4gIH1cbn07XG5cbi8qKlxuICogUmV0dXJucyBhbiBvYmplY3QgdGhhdCBjb250YWlucyBhIG5ldyBgQ2FuY2VsVG9rZW5gIGFuZCBhIGZ1bmN0aW9uIHRoYXQsIHdoZW4gY2FsbGVkLFxuICogY2FuY2VscyB0aGUgYENhbmNlbFRva2VuYC5cbiAqL1xuQ2FuY2VsVG9rZW4uc291cmNlID0gZnVuY3Rpb24gc291cmNlKCkge1xuICB2YXIgY2FuY2VsO1xuICB2YXIgdG9rZW4gPSBuZXcgQ2FuY2VsVG9rZW4oZnVuY3Rpb24gZXhlY3V0b3IoYykge1xuICAgIGNhbmNlbCA9IGM7XG4gIH0pO1xuICByZXR1cm4ge1xuICAgIHRva2VuOiB0b2tlbixcbiAgICBjYW5jZWw6IGNhbmNlbFxuICB9O1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBDYW5jZWxUb2tlbjtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jYW5jZWwvQ2FuY2VsVG9rZW4uanNcbi8vIG1vZHVsZSBpZCA9IC4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jYW5jZWwvQ2FuY2VsVG9rZW4uanNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGlzQ2FuY2VsKHZhbHVlKSB7XG4gIHJldHVybiAhISh2YWx1ZSAmJiB2YWx1ZS5fX0NBTkNFTF9fKTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY2FuY2VsL2lzQ2FuY2VsLmpzXG4vLyBtb2R1bGUgaWQgPSAuL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY2FuY2VsL2lzQ2FuY2VsLmpzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcblxudmFyIGRlZmF1bHRzID0gcmVxdWlyZSgnLi8uLi9kZWZhdWx0cycpO1xudmFyIHV0aWxzID0gcmVxdWlyZSgnLi8uLi91dGlscycpO1xudmFyIEludGVyY2VwdG9yTWFuYWdlciA9IHJlcXVpcmUoJy4vSW50ZXJjZXB0b3JNYW5hZ2VyJyk7XG52YXIgZGlzcGF0Y2hSZXF1ZXN0ID0gcmVxdWlyZSgnLi9kaXNwYXRjaFJlcXVlc3QnKTtcblxuLyoqXG4gKiBDcmVhdGUgYSBuZXcgaW5zdGFuY2Ugb2YgQXhpb3NcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gaW5zdGFuY2VDb25maWcgVGhlIGRlZmF1bHQgY29uZmlnIGZvciB0aGUgaW5zdGFuY2VcbiAqL1xuZnVuY3Rpb24gQXhpb3MoaW5zdGFuY2VDb25maWcpIHtcbiAgdGhpcy5kZWZhdWx0cyA9IGluc3RhbmNlQ29uZmlnO1xuICB0aGlzLmludGVyY2VwdG9ycyA9IHtcbiAgICByZXF1ZXN0OiBuZXcgSW50ZXJjZXB0b3JNYW5hZ2VyKCksXG4gICAgcmVzcG9uc2U6IG5ldyBJbnRlcmNlcHRvck1hbmFnZXIoKVxuICB9O1xufVxuXG4vKipcbiAqIERpc3BhdGNoIGEgcmVxdWVzdFxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWcgVGhlIGNvbmZpZyBzcGVjaWZpYyBmb3IgdGhpcyByZXF1ZXN0IChtZXJnZWQgd2l0aCB0aGlzLmRlZmF1bHRzKVxuICovXG5BeGlvcy5wcm90b3R5cGUucmVxdWVzdCA9IGZ1bmN0aW9uIHJlcXVlc3QoY29uZmlnKSB7XG4gIC8qZXNsaW50IG5vLXBhcmFtLXJlYXNzaWduOjAqL1xuICAvLyBBbGxvdyBmb3IgYXhpb3MoJ2V4YW1wbGUvdXJsJ1ssIGNvbmZpZ10pIGEgbGEgZmV0Y2ggQVBJXG4gIGlmICh0eXBlb2YgY29uZmlnID09PSAnc3RyaW5nJykge1xuICAgIGNvbmZpZyA9IHV0aWxzLm1lcmdlKHtcbiAgICAgIHVybDogYXJndW1lbnRzWzBdXG4gICAgfSwgYXJndW1lbnRzWzFdKTtcbiAgfVxuXG4gIGNvbmZpZyA9IHV0aWxzLm1lcmdlKGRlZmF1bHRzLCB0aGlzLmRlZmF1bHRzLCB7IG1ldGhvZDogJ2dldCcgfSwgY29uZmlnKTtcbiAgY29uZmlnLm1ldGhvZCA9IGNvbmZpZy5tZXRob2QudG9Mb3dlckNhc2UoKTtcblxuICAvLyBIb29rIHVwIGludGVyY2VwdG9ycyBtaWRkbGV3YXJlXG4gIHZhciBjaGFpbiA9IFtkaXNwYXRjaFJlcXVlc3QsIHVuZGVmaW5lZF07XG4gIHZhciBwcm9taXNlID0gUHJvbWlzZS5yZXNvbHZlKGNvbmZpZyk7XG5cbiAgdGhpcy5pbnRlcmNlcHRvcnMucmVxdWVzdC5mb3JFYWNoKGZ1bmN0aW9uIHVuc2hpZnRSZXF1ZXN0SW50ZXJjZXB0b3JzKGludGVyY2VwdG9yKSB7XG4gICAgY2hhaW4udW5zaGlmdChpbnRlcmNlcHRvci5mdWxmaWxsZWQsIGludGVyY2VwdG9yLnJlamVjdGVkKTtcbiAgfSk7XG5cbiAgdGhpcy5pbnRlcmNlcHRvcnMucmVzcG9uc2UuZm9yRWFjaChmdW5jdGlvbiBwdXNoUmVzcG9uc2VJbnRlcmNlcHRvcnMoaW50ZXJjZXB0b3IpIHtcbiAgICBjaGFpbi5wdXNoKGludGVyY2VwdG9yLmZ1bGZpbGxlZCwgaW50ZXJjZXB0b3IucmVqZWN0ZWQpO1xuICB9KTtcblxuICB3aGlsZSAoY2hhaW4ubGVuZ3RoKSB7XG4gICAgcHJvbWlzZSA9IHByb21pc2UudGhlbihjaGFpbi5zaGlmdCgpLCBjaGFpbi5zaGlmdCgpKTtcbiAgfVxuXG4gIHJldHVybiBwcm9taXNlO1xufTtcblxuLy8gUHJvdmlkZSBhbGlhc2VzIGZvciBzdXBwb3J0ZWQgcmVxdWVzdCBtZXRob2RzXG51dGlscy5mb3JFYWNoKFsnZGVsZXRlJywgJ2dldCcsICdoZWFkJywgJ29wdGlvbnMnXSwgZnVuY3Rpb24gZm9yRWFjaE1ldGhvZE5vRGF0YShtZXRob2QpIHtcbiAgLyplc2xpbnQgZnVuYy1uYW1lczowKi9cbiAgQXhpb3MucHJvdG90eXBlW21ldGhvZF0gPSBmdW5jdGlvbih1cmwsIGNvbmZpZykge1xuICAgIHJldHVybiB0aGlzLnJlcXVlc3QodXRpbHMubWVyZ2UoY29uZmlnIHx8IHt9LCB7XG4gICAgICBtZXRob2Q6IG1ldGhvZCxcbiAgICAgIHVybDogdXJsXG4gICAgfSkpO1xuICB9O1xufSk7XG5cbnV0aWxzLmZvckVhY2goWydwb3N0JywgJ3B1dCcsICdwYXRjaCddLCBmdW5jdGlvbiBmb3JFYWNoTWV0aG9kV2l0aERhdGEobWV0aG9kKSB7XG4gIC8qZXNsaW50IGZ1bmMtbmFtZXM6MCovXG4gIEF4aW9zLnByb3RvdHlwZVttZXRob2RdID0gZnVuY3Rpb24odXJsLCBkYXRhLCBjb25maWcpIHtcbiAgICByZXR1cm4gdGhpcy5yZXF1ZXN0KHV0aWxzLm1lcmdlKGNvbmZpZyB8fCB7fSwge1xuICAgICAgbWV0aG9kOiBtZXRob2QsXG4gICAgICB1cmw6IHVybCxcbiAgICAgIGRhdGE6IGRhdGFcbiAgICB9KSk7XG4gIH07XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBBeGlvcztcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jb3JlL0F4aW9zLmpzXG4vLyBtb2R1bGUgaWQgPSAuL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY29yZS9BeGlvcy5qc1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG5cbnZhciB1dGlscyA9IHJlcXVpcmUoJy4vLi4vdXRpbHMnKTtcblxuZnVuY3Rpb24gSW50ZXJjZXB0b3JNYW5hZ2VyKCkge1xuICB0aGlzLmhhbmRsZXJzID0gW107XG59XG5cbi8qKlxuICogQWRkIGEgbmV3IGludGVyY2VwdG9yIHRvIHRoZSBzdGFja1xuICpcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZ1bGZpbGxlZCBUaGUgZnVuY3Rpb24gdG8gaGFuZGxlIGB0aGVuYCBmb3IgYSBgUHJvbWlzZWBcbiAqIEBwYXJhbSB7RnVuY3Rpb259IHJlamVjdGVkIFRoZSBmdW5jdGlvbiB0byBoYW5kbGUgYHJlamVjdGAgZm9yIGEgYFByb21pc2VgXG4gKlxuICogQHJldHVybiB7TnVtYmVyfSBBbiBJRCB1c2VkIHRvIHJlbW92ZSBpbnRlcmNlcHRvciBsYXRlclxuICovXG5JbnRlcmNlcHRvck1hbmFnZXIucHJvdG90eXBlLnVzZSA9IGZ1bmN0aW9uIHVzZShmdWxmaWxsZWQsIHJlamVjdGVkKSB7XG4gIHRoaXMuaGFuZGxlcnMucHVzaCh7XG4gICAgZnVsZmlsbGVkOiBmdWxmaWxsZWQsXG4gICAgcmVqZWN0ZWQ6IHJlamVjdGVkXG4gIH0pO1xuICByZXR1cm4gdGhpcy5oYW5kbGVycy5sZW5ndGggLSAxO1xufTtcblxuLyoqXG4gKiBSZW1vdmUgYW4gaW50ZXJjZXB0b3IgZnJvbSB0aGUgc3RhY2tcbiAqXG4gKiBAcGFyYW0ge051bWJlcn0gaWQgVGhlIElEIHRoYXQgd2FzIHJldHVybmVkIGJ5IGB1c2VgXG4gKi9cbkludGVyY2VwdG9yTWFuYWdlci5wcm90b3R5cGUuZWplY3QgPSBmdW5jdGlvbiBlamVjdChpZCkge1xuICBpZiAodGhpcy5oYW5kbGVyc1tpZF0pIHtcbiAgICB0aGlzLmhhbmRsZXJzW2lkXSA9IG51bGw7XG4gIH1cbn07XG5cbi8qKlxuICogSXRlcmF0ZSBvdmVyIGFsbCB0aGUgcmVnaXN0ZXJlZCBpbnRlcmNlcHRvcnNcbiAqXG4gKiBUaGlzIG1ldGhvZCBpcyBwYXJ0aWN1bGFybHkgdXNlZnVsIGZvciBza2lwcGluZyBvdmVyIGFueVxuICogaW50ZXJjZXB0b3JzIHRoYXQgbWF5IGhhdmUgYmVjb21lIGBudWxsYCBjYWxsaW5nIGBlamVjdGAuXG4gKlxuICogQHBhcmFtIHtGdW5jdGlvbn0gZm4gVGhlIGZ1bmN0aW9uIHRvIGNhbGwgZm9yIGVhY2ggaW50ZXJjZXB0b3JcbiAqL1xuSW50ZXJjZXB0b3JNYW5hZ2VyLnByb3RvdHlwZS5mb3JFYWNoID0gZnVuY3Rpb24gZm9yRWFjaChmbikge1xuICB1dGlscy5mb3JFYWNoKHRoaXMuaGFuZGxlcnMsIGZ1bmN0aW9uIGZvckVhY2hIYW5kbGVyKGgpIHtcbiAgICBpZiAoaCAhPT0gbnVsbCkge1xuICAgICAgZm4oaCk7XG4gICAgfVxuICB9KTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gSW50ZXJjZXB0b3JNYW5hZ2VyO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NvcmUvSW50ZXJjZXB0b3JNYW5hZ2VyLmpzXG4vLyBtb2R1bGUgaWQgPSAuL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY29yZS9JbnRlcmNlcHRvck1hbmFnZXIuanNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgZW5oYW5jZUVycm9yID0gcmVxdWlyZSgnLi9lbmhhbmNlRXJyb3InKTtcblxuLyoqXG4gKiBDcmVhdGUgYW4gRXJyb3Igd2l0aCB0aGUgc3BlY2lmaWVkIG1lc3NhZ2UsIGNvbmZpZywgZXJyb3IgY29kZSwgcmVxdWVzdCBhbmQgcmVzcG9uc2UuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IG1lc3NhZ2UgVGhlIGVycm9yIG1lc3NhZ2UuXG4gKiBAcGFyYW0ge09iamVjdH0gY29uZmlnIFRoZSBjb25maWcuXG4gKiBAcGFyYW0ge3N0cmluZ30gW2NvZGVdIFRoZSBlcnJvciBjb2RlIChmb3IgZXhhbXBsZSwgJ0VDT05OQUJPUlRFRCcpLlxuICogQHBhcmFtIHtPYmplY3R9IFtyZXF1ZXN0XSBUaGUgcmVxdWVzdC5cbiAqIEBwYXJhbSB7T2JqZWN0fSBbcmVzcG9uc2VdIFRoZSByZXNwb25zZS5cbiAqIEByZXR1cm5zIHtFcnJvcn0gVGhlIGNyZWF0ZWQgZXJyb3IuXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gY3JlYXRlRXJyb3IobWVzc2FnZSwgY29uZmlnLCBjb2RlLCByZXF1ZXN0LCByZXNwb25zZSkge1xuICB2YXIgZXJyb3IgPSBuZXcgRXJyb3IobWVzc2FnZSk7XG4gIHJldHVybiBlbmhhbmNlRXJyb3IoZXJyb3IsIGNvbmZpZywgY29kZSwgcmVxdWVzdCwgcmVzcG9uc2UpO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jb3JlL2NyZWF0ZUVycm9yLmpzXG4vLyBtb2R1bGUgaWQgPSAuL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY29yZS9jcmVhdGVFcnJvci5qc1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG5cbnZhciB1dGlscyA9IHJlcXVpcmUoJy4vLi4vdXRpbHMnKTtcbnZhciB0cmFuc2Zvcm1EYXRhID0gcmVxdWlyZSgnLi90cmFuc2Zvcm1EYXRhJyk7XG52YXIgaXNDYW5jZWwgPSByZXF1aXJlKCcuLi9jYW5jZWwvaXNDYW5jZWwnKTtcbnZhciBkZWZhdWx0cyA9IHJlcXVpcmUoJy4uL2RlZmF1bHRzJyk7XG52YXIgaXNBYnNvbHV0ZVVSTCA9IHJlcXVpcmUoJy4vLi4vaGVscGVycy9pc0Fic29sdXRlVVJMJyk7XG52YXIgY29tYmluZVVSTHMgPSByZXF1aXJlKCcuLy4uL2hlbHBlcnMvY29tYmluZVVSTHMnKTtcblxuLyoqXG4gKiBUaHJvd3MgYSBgQ2FuY2VsYCBpZiBjYW5jZWxsYXRpb24gaGFzIGJlZW4gcmVxdWVzdGVkLlxuICovXG5mdW5jdGlvbiB0aHJvd0lmQ2FuY2VsbGF0aW9uUmVxdWVzdGVkKGNvbmZpZykge1xuICBpZiAoY29uZmlnLmNhbmNlbFRva2VuKSB7XG4gICAgY29uZmlnLmNhbmNlbFRva2VuLnRocm93SWZSZXF1ZXN0ZWQoKTtcbiAgfVxufVxuXG4vKipcbiAqIERpc3BhdGNoIGEgcmVxdWVzdCB0byB0aGUgc2VydmVyIHVzaW5nIHRoZSBjb25maWd1cmVkIGFkYXB0ZXIuXG4gKlxuICogQHBhcmFtIHtvYmplY3R9IGNvbmZpZyBUaGUgY29uZmlnIHRoYXQgaXMgdG8gYmUgdXNlZCBmb3IgdGhlIHJlcXVlc3RcbiAqIEByZXR1cm5zIHtQcm9taXNlfSBUaGUgUHJvbWlzZSB0byBiZSBmdWxmaWxsZWRcbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBkaXNwYXRjaFJlcXVlc3QoY29uZmlnKSB7XG4gIHRocm93SWZDYW5jZWxsYXRpb25SZXF1ZXN0ZWQoY29uZmlnKTtcblxuICAvLyBTdXBwb3J0IGJhc2VVUkwgY29uZmlnXG4gIGlmIChjb25maWcuYmFzZVVSTCAmJiAhaXNBYnNvbHV0ZVVSTChjb25maWcudXJsKSkge1xuICAgIGNvbmZpZy51cmwgPSBjb21iaW5lVVJMcyhjb25maWcuYmFzZVVSTCwgY29uZmlnLnVybCk7XG4gIH1cblxuICAvLyBFbnN1cmUgaGVhZGVycyBleGlzdFxuICBjb25maWcuaGVhZGVycyA9IGNvbmZpZy5oZWFkZXJzIHx8IHt9O1xuXG4gIC8vIFRyYW5zZm9ybSByZXF1ZXN0IGRhdGFcbiAgY29uZmlnLmRhdGEgPSB0cmFuc2Zvcm1EYXRhKFxuICAgIGNvbmZpZy5kYXRhLFxuICAgIGNvbmZpZy5oZWFkZXJzLFxuICAgIGNvbmZpZy50cmFuc2Zvcm1SZXF1ZXN0XG4gICk7XG5cbiAgLy8gRmxhdHRlbiBoZWFkZXJzXG4gIGNvbmZpZy5oZWFkZXJzID0gdXRpbHMubWVyZ2UoXG4gICAgY29uZmlnLmhlYWRlcnMuY29tbW9uIHx8IHt9LFxuICAgIGNvbmZpZy5oZWFkZXJzW2NvbmZpZy5tZXRob2RdIHx8IHt9LFxuICAgIGNvbmZpZy5oZWFkZXJzIHx8IHt9XG4gICk7XG5cbiAgdXRpbHMuZm9yRWFjaChcbiAgICBbJ2RlbGV0ZScsICdnZXQnLCAnaGVhZCcsICdwb3N0JywgJ3B1dCcsICdwYXRjaCcsICdjb21tb24nXSxcbiAgICBmdW5jdGlvbiBjbGVhbkhlYWRlckNvbmZpZyhtZXRob2QpIHtcbiAgICAgIGRlbGV0ZSBjb25maWcuaGVhZGVyc1ttZXRob2RdO1xuICAgIH1cbiAgKTtcblxuICB2YXIgYWRhcHRlciA9IGNvbmZpZy5hZGFwdGVyIHx8IGRlZmF1bHRzLmFkYXB0ZXI7XG5cbiAgcmV0dXJuIGFkYXB0ZXIoY29uZmlnKS50aGVuKGZ1bmN0aW9uIG9uQWRhcHRlclJlc29sdXRpb24ocmVzcG9uc2UpIHtcbiAgICB0aHJvd0lmQ2FuY2VsbGF0aW9uUmVxdWVzdGVkKGNvbmZpZyk7XG5cbiAgICAvLyBUcmFuc2Zvcm0gcmVzcG9uc2UgZGF0YVxuICAgIHJlc3BvbnNlLmRhdGEgPSB0cmFuc2Zvcm1EYXRhKFxuICAgICAgcmVzcG9uc2UuZGF0YSxcbiAgICAgIHJlc3BvbnNlLmhlYWRlcnMsXG4gICAgICBjb25maWcudHJhbnNmb3JtUmVzcG9uc2VcbiAgICApO1xuXG4gICAgcmV0dXJuIHJlc3BvbnNlO1xuICB9LCBmdW5jdGlvbiBvbkFkYXB0ZXJSZWplY3Rpb24ocmVhc29uKSB7XG4gICAgaWYgKCFpc0NhbmNlbChyZWFzb24pKSB7XG4gICAgICB0aHJvd0lmQ2FuY2VsbGF0aW9uUmVxdWVzdGVkKGNvbmZpZyk7XG5cbiAgICAgIC8vIFRyYW5zZm9ybSByZXNwb25zZSBkYXRhXG4gICAgICBpZiAocmVhc29uICYmIHJlYXNvbi5yZXNwb25zZSkge1xuICAgICAgICByZWFzb24ucmVzcG9uc2UuZGF0YSA9IHRyYW5zZm9ybURhdGEoXG4gICAgICAgICAgcmVhc29uLnJlc3BvbnNlLmRhdGEsXG4gICAgICAgICAgcmVhc29uLnJlc3BvbnNlLmhlYWRlcnMsXG4gICAgICAgICAgY29uZmlnLnRyYW5zZm9ybVJlc3BvbnNlXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIFByb21pc2UucmVqZWN0KHJlYXNvbik7XG4gIH0pO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jb3JlL2Rpc3BhdGNoUmVxdWVzdC5qc1xuLy8gbW9kdWxlIGlkID0gLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NvcmUvZGlzcGF0Y2hSZXF1ZXN0LmpzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcblxuLyoqXG4gKiBVcGRhdGUgYW4gRXJyb3Igd2l0aCB0aGUgc3BlY2lmaWVkIGNvbmZpZywgZXJyb3IgY29kZSwgYW5kIHJlc3BvbnNlLlxuICpcbiAqIEBwYXJhbSB7RXJyb3J9IGVycm9yIFRoZSBlcnJvciB0byB1cGRhdGUuXG4gKiBAcGFyYW0ge09iamVjdH0gY29uZmlnIFRoZSBjb25maWcuXG4gKiBAcGFyYW0ge3N0cmluZ30gW2NvZGVdIFRoZSBlcnJvciBjb2RlIChmb3IgZXhhbXBsZSwgJ0VDT05OQUJPUlRFRCcpLlxuICogQHBhcmFtIHtPYmplY3R9IFtyZXF1ZXN0XSBUaGUgcmVxdWVzdC5cbiAqIEBwYXJhbSB7T2JqZWN0fSBbcmVzcG9uc2VdIFRoZSByZXNwb25zZS5cbiAqIEByZXR1cm5zIHtFcnJvcn0gVGhlIGVycm9yLlxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGVuaGFuY2VFcnJvcihlcnJvciwgY29uZmlnLCBjb2RlLCByZXF1ZXN0LCByZXNwb25zZSkge1xuICBlcnJvci5jb25maWcgPSBjb25maWc7XG4gIGlmIChjb2RlKSB7XG4gICAgZXJyb3IuY29kZSA9IGNvZGU7XG4gIH1cbiAgZXJyb3IucmVxdWVzdCA9IHJlcXVlc3Q7XG4gIGVycm9yLnJlc3BvbnNlID0gcmVzcG9uc2U7XG4gIHJldHVybiBlcnJvcjtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY29yZS9lbmhhbmNlRXJyb3IuanNcbi8vIG1vZHVsZSBpZCA9IC4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jb3JlL2VuaGFuY2VFcnJvci5qc1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG5cbnZhciBjcmVhdGVFcnJvciA9IHJlcXVpcmUoJy4vY3JlYXRlRXJyb3InKTtcblxuLyoqXG4gKiBSZXNvbHZlIG9yIHJlamVjdCBhIFByb21pc2UgYmFzZWQgb24gcmVzcG9uc2Ugc3RhdHVzLlxuICpcbiAqIEBwYXJhbSB7RnVuY3Rpb259IHJlc29sdmUgQSBmdW5jdGlvbiB0aGF0IHJlc29sdmVzIHRoZSBwcm9taXNlLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gcmVqZWN0IEEgZnVuY3Rpb24gdGhhdCByZWplY3RzIHRoZSBwcm9taXNlLlxuICogQHBhcmFtIHtvYmplY3R9IHJlc3BvbnNlIFRoZSByZXNwb25zZS5cbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBzZXR0bGUocmVzb2x2ZSwgcmVqZWN0LCByZXNwb25zZSkge1xuICB2YXIgdmFsaWRhdGVTdGF0dXMgPSByZXNwb25zZS5jb25maWcudmFsaWRhdGVTdGF0dXM7XG4gIC8vIE5vdGU6IHN0YXR1cyBpcyBub3QgZXhwb3NlZCBieSBYRG9tYWluUmVxdWVzdFxuICBpZiAoIXJlc3BvbnNlLnN0YXR1cyB8fCAhdmFsaWRhdGVTdGF0dXMgfHwgdmFsaWRhdGVTdGF0dXMocmVzcG9uc2Uuc3RhdHVzKSkge1xuICAgIHJlc29sdmUocmVzcG9uc2UpO1xuICB9IGVsc2Uge1xuICAgIHJlamVjdChjcmVhdGVFcnJvcihcbiAgICAgICdSZXF1ZXN0IGZhaWxlZCB3aXRoIHN0YXR1cyBjb2RlICcgKyByZXNwb25zZS5zdGF0dXMsXG4gICAgICByZXNwb25zZS5jb25maWcsXG4gICAgICBudWxsLFxuICAgICAgcmVzcG9uc2UucmVxdWVzdCxcbiAgICAgIHJlc3BvbnNlXG4gICAgKSk7XG4gIH1cbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY29yZS9zZXR0bGUuanNcbi8vIG1vZHVsZSBpZCA9IC4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jb3JlL3NldHRsZS5qc1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG5cbnZhciB1dGlscyA9IHJlcXVpcmUoJy4vLi4vdXRpbHMnKTtcblxuLyoqXG4gKiBUcmFuc2Zvcm0gdGhlIGRhdGEgZm9yIGEgcmVxdWVzdCBvciBhIHJlc3BvbnNlXG4gKlxuICogQHBhcmFtIHtPYmplY3R8U3RyaW5nfSBkYXRhIFRoZSBkYXRhIHRvIGJlIHRyYW5zZm9ybWVkXG4gKiBAcGFyYW0ge0FycmF5fSBoZWFkZXJzIFRoZSBoZWFkZXJzIGZvciB0aGUgcmVxdWVzdCBvciByZXNwb25zZVxuICogQHBhcmFtIHtBcnJheXxGdW5jdGlvbn0gZm5zIEEgc2luZ2xlIGZ1bmN0aW9uIG9yIEFycmF5IG9mIGZ1bmN0aW9uc1xuICogQHJldHVybnMgeyp9IFRoZSByZXN1bHRpbmcgdHJhbnNmb3JtZWQgZGF0YVxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIHRyYW5zZm9ybURhdGEoZGF0YSwgaGVhZGVycywgZm5zKSB7XG4gIC8qZXNsaW50IG5vLXBhcmFtLXJlYXNzaWduOjAqL1xuICB1dGlscy5mb3JFYWNoKGZucywgZnVuY3Rpb24gdHJhbnNmb3JtKGZuKSB7XG4gICAgZGF0YSA9IGZuKGRhdGEsIGhlYWRlcnMpO1xuICB9KTtcblxuICByZXR1cm4gZGF0YTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY29yZS90cmFuc2Zvcm1EYXRhLmpzXG4vLyBtb2R1bGUgaWQgPSAuL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY29yZS90cmFuc2Zvcm1EYXRhLmpzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcblxudmFyIHV0aWxzID0gcmVxdWlyZSgnLi91dGlscycpO1xudmFyIG5vcm1hbGl6ZUhlYWRlck5hbWUgPSByZXF1aXJlKCcuL2hlbHBlcnMvbm9ybWFsaXplSGVhZGVyTmFtZScpO1xuXG52YXIgREVGQVVMVF9DT05URU5UX1RZUEUgPSB7XG4gICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJ1xufTtcblxuZnVuY3Rpb24gc2V0Q29udGVudFR5cGVJZlVuc2V0KGhlYWRlcnMsIHZhbHVlKSB7XG4gIGlmICghdXRpbHMuaXNVbmRlZmluZWQoaGVhZGVycykgJiYgdXRpbHMuaXNVbmRlZmluZWQoaGVhZGVyc1snQ29udGVudC1UeXBlJ10pKSB7XG4gICAgaGVhZGVyc1snQ29udGVudC1UeXBlJ10gPSB2YWx1ZTtcbiAgfVxufVxuXG5mdW5jdGlvbiBnZXREZWZhdWx0QWRhcHRlcigpIHtcbiAgdmFyIGFkYXB0ZXI7XG4gIGlmICh0eXBlb2YgWE1MSHR0cFJlcXVlc3QgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgLy8gRm9yIGJyb3dzZXJzIHVzZSBYSFIgYWRhcHRlclxuICAgIGFkYXB0ZXIgPSByZXF1aXJlKCcuL2FkYXB0ZXJzL3hocicpO1xuICB9IGVsc2UgaWYgKHR5cGVvZiBwcm9jZXNzICE9PSAndW5kZWZpbmVkJykge1xuICAgIC8vIEZvciBub2RlIHVzZSBIVFRQIGFkYXB0ZXJcbiAgICBhZGFwdGVyID0gcmVxdWlyZSgnLi9hZGFwdGVycy9odHRwJyk7XG4gIH1cbiAgcmV0dXJuIGFkYXB0ZXI7XG59XG5cbnZhciBkZWZhdWx0cyA9IHtcbiAgYWRhcHRlcjogZ2V0RGVmYXVsdEFkYXB0ZXIoKSxcblxuICB0cmFuc2Zvcm1SZXF1ZXN0OiBbZnVuY3Rpb24gdHJhbnNmb3JtUmVxdWVzdChkYXRhLCBoZWFkZXJzKSB7XG4gICAgbm9ybWFsaXplSGVhZGVyTmFtZShoZWFkZXJzLCAnQ29udGVudC1UeXBlJyk7XG4gICAgaWYgKHV0aWxzLmlzRm9ybURhdGEoZGF0YSkgfHxcbiAgICAgIHV0aWxzLmlzQXJyYXlCdWZmZXIoZGF0YSkgfHxcbiAgICAgIHV0aWxzLmlzQnVmZmVyKGRhdGEpIHx8XG4gICAgICB1dGlscy5pc1N0cmVhbShkYXRhKSB8fFxuICAgICAgdXRpbHMuaXNGaWxlKGRhdGEpIHx8XG4gICAgICB1dGlscy5pc0Jsb2IoZGF0YSlcbiAgICApIHtcbiAgICAgIHJldHVybiBkYXRhO1xuICAgIH1cbiAgICBpZiAodXRpbHMuaXNBcnJheUJ1ZmZlclZpZXcoZGF0YSkpIHtcbiAgICAgIHJldHVybiBkYXRhLmJ1ZmZlcjtcbiAgICB9XG4gICAgaWYgKHV0aWxzLmlzVVJMU2VhcmNoUGFyYW1zKGRhdGEpKSB7XG4gICAgICBzZXRDb250ZW50VHlwZUlmVW5zZXQoaGVhZGVycywgJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZDtjaGFyc2V0PXV0Zi04Jyk7XG4gICAgICByZXR1cm4gZGF0YS50b1N0cmluZygpO1xuICAgIH1cbiAgICBpZiAodXRpbHMuaXNPYmplY3QoZGF0YSkpIHtcbiAgICAgIHNldENvbnRlbnRUeXBlSWZVbnNldChoZWFkZXJzLCAnYXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04Jyk7XG4gICAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkoZGF0YSk7XG4gICAgfVxuICAgIHJldHVybiBkYXRhO1xuICB9XSxcblxuICB0cmFuc2Zvcm1SZXNwb25zZTogW2Z1bmN0aW9uIHRyYW5zZm9ybVJlc3BvbnNlKGRhdGEpIHtcbiAgICAvKmVzbGludCBuby1wYXJhbS1yZWFzc2lnbjowKi9cbiAgICBpZiAodHlwZW9mIGRhdGEgPT09ICdzdHJpbmcnKSB7XG4gICAgICB0cnkge1xuICAgICAgICBkYXRhID0gSlNPTi5wYXJzZShkYXRhKTtcbiAgICAgIH0gY2F0Y2ggKGUpIHsgLyogSWdub3JlICovIH1cbiAgICB9XG4gICAgcmV0dXJuIGRhdGE7XG4gIH1dLFxuXG4gIHRpbWVvdXQ6IDAsXG5cbiAgeHNyZkNvb2tpZU5hbWU6ICdYU1JGLVRPS0VOJyxcbiAgeHNyZkhlYWRlck5hbWU6ICdYLVhTUkYtVE9LRU4nLFxuXG4gIG1heENvbnRlbnRMZW5ndGg6IC0xLFxuXG4gIHZhbGlkYXRlU3RhdHVzOiBmdW5jdGlvbiB2YWxpZGF0ZVN0YXR1cyhzdGF0dXMpIHtcbiAgICByZXR1cm4gc3RhdHVzID49IDIwMCAmJiBzdGF0dXMgPCAzMDA7XG4gIH1cbn07XG5cbmRlZmF1bHRzLmhlYWRlcnMgPSB7XG4gIGNvbW1vbjoge1xuICAgICdBY2NlcHQnOiAnYXBwbGljYXRpb24vanNvbiwgdGV4dC9wbGFpbiwgKi8qJ1xuICB9XG59O1xuXG51dGlscy5mb3JFYWNoKFsnZGVsZXRlJywgJ2dldCcsICdoZWFkJ10sIGZ1bmN0aW9uIGZvckVhY2hNZXRob2ROb0RhdGEobWV0aG9kKSB7XG4gIGRlZmF1bHRzLmhlYWRlcnNbbWV0aG9kXSA9IHt9O1xufSk7XG5cbnV0aWxzLmZvckVhY2goWydwb3N0JywgJ3B1dCcsICdwYXRjaCddLCBmdW5jdGlvbiBmb3JFYWNoTWV0aG9kV2l0aERhdGEobWV0aG9kKSB7XG4gIGRlZmF1bHRzLmhlYWRlcnNbbWV0aG9kXSA9IHV0aWxzLm1lcmdlKERFRkFVTFRfQ09OVEVOVF9UWVBFKTtcbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGRlZmF1bHRzO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2RlZmF1bHRzLmpzXG4vLyBtb2R1bGUgaWQgPSAuL25vZGVfbW9kdWxlcy9heGlvcy9saWIvZGVmYXVsdHMuanNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGJpbmQoZm4sIHRoaXNBcmcpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIHdyYXAoKSB7XG4gICAgdmFyIGFyZ3MgPSBuZXcgQXJyYXkoYXJndW1lbnRzLmxlbmd0aCk7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcmdzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBhcmdzW2ldID0gYXJndW1lbnRzW2ldO1xuICAgIH1cbiAgICByZXR1cm4gZm4uYXBwbHkodGhpc0FyZywgYXJncyk7XG4gIH07XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvYmluZC5qc1xuLy8gbW9kdWxlIGlkID0gLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvYmluZC5qc1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG5cbi8vIGJ0b2EgcG9seWZpbGwgZm9yIElFPDEwIGNvdXJ0ZXN5IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXZpZGNoYW1iZXJzL0Jhc2U2NC5qc1xuXG52YXIgY2hhcnMgPSAnQUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVphYmNkZWZnaGlqa2xtbm9wcXJzdHV2d3h5ejAxMjM0NTY3ODkrLz0nO1xuXG5mdW5jdGlvbiBFKCkge1xuICB0aGlzLm1lc3NhZ2UgPSAnU3RyaW5nIGNvbnRhaW5zIGFuIGludmFsaWQgY2hhcmFjdGVyJztcbn1cbkUucHJvdG90eXBlID0gbmV3IEVycm9yO1xuRS5wcm90b3R5cGUuY29kZSA9IDU7XG5FLnByb3RvdHlwZS5uYW1lID0gJ0ludmFsaWRDaGFyYWN0ZXJFcnJvcic7XG5cbmZ1bmN0aW9uIGJ0b2EoaW5wdXQpIHtcbiAgdmFyIHN0ciA9IFN0cmluZyhpbnB1dCk7XG4gIHZhciBvdXRwdXQgPSAnJztcbiAgZm9yIChcbiAgICAvLyBpbml0aWFsaXplIHJlc3VsdCBhbmQgY291bnRlclxuICAgIHZhciBibG9jaywgY2hhckNvZGUsIGlkeCA9IDAsIG1hcCA9IGNoYXJzO1xuICAgIC8vIGlmIHRoZSBuZXh0IHN0ciBpbmRleCBkb2VzIG5vdCBleGlzdDpcbiAgICAvLyAgIGNoYW5nZSB0aGUgbWFwcGluZyB0YWJsZSB0byBcIj1cIlxuICAgIC8vICAgY2hlY2sgaWYgZCBoYXMgbm8gZnJhY3Rpb25hbCBkaWdpdHNcbiAgICBzdHIuY2hhckF0KGlkeCB8IDApIHx8IChtYXAgPSAnPScsIGlkeCAlIDEpO1xuICAgIC8vIFwiOCAtIGlkeCAlIDEgKiA4XCIgZ2VuZXJhdGVzIHRoZSBzZXF1ZW5jZSAyLCA0LCA2LCA4XG4gICAgb3V0cHV0ICs9IG1hcC5jaGFyQXQoNjMgJiBibG9jayA+PiA4IC0gaWR4ICUgMSAqIDgpXG4gICkge1xuICAgIGNoYXJDb2RlID0gc3RyLmNoYXJDb2RlQXQoaWR4ICs9IDMgLyA0KTtcbiAgICBpZiAoY2hhckNvZGUgPiAweEZGKSB7XG4gICAgICB0aHJvdyBuZXcgRSgpO1xuICAgIH1cbiAgICBibG9jayA9IGJsb2NrIDw8IDggfCBjaGFyQ29kZTtcbiAgfVxuICByZXR1cm4gb3V0cHV0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJ0b2E7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9idG9hLmpzXG4vLyBtb2R1bGUgaWQgPSAuL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9idG9hLmpzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcblxudmFyIHV0aWxzID0gcmVxdWlyZSgnLi8uLi91dGlscycpO1xuXG5mdW5jdGlvbiBlbmNvZGUodmFsKSB7XG4gIHJldHVybiBlbmNvZGVVUklDb21wb25lbnQodmFsKS5cbiAgICByZXBsYWNlKC8lNDAvZ2ksICdAJykuXG4gICAgcmVwbGFjZSgvJTNBL2dpLCAnOicpLlxuICAgIHJlcGxhY2UoLyUyNC9nLCAnJCcpLlxuICAgIHJlcGxhY2UoLyUyQy9naSwgJywnKS5cbiAgICByZXBsYWNlKC8lMjAvZywgJysnKS5cbiAgICByZXBsYWNlKC8lNUIvZ2ksICdbJykuXG4gICAgcmVwbGFjZSgvJTVEL2dpLCAnXScpO1xufVxuXG4vKipcbiAqIEJ1aWxkIGEgVVJMIGJ5IGFwcGVuZGluZyBwYXJhbXMgdG8gdGhlIGVuZFxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSB1cmwgVGhlIGJhc2Ugb2YgdGhlIHVybCAoZS5nLiwgaHR0cDovL3d3dy5nb29nbGUuY29tKVxuICogQHBhcmFtIHtvYmplY3R9IFtwYXJhbXNdIFRoZSBwYXJhbXMgdG8gYmUgYXBwZW5kZWRcbiAqIEByZXR1cm5zIHtzdHJpbmd9IFRoZSBmb3JtYXR0ZWQgdXJsXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gYnVpbGRVUkwodXJsLCBwYXJhbXMsIHBhcmFtc1NlcmlhbGl6ZXIpIHtcbiAgLyplc2xpbnQgbm8tcGFyYW0tcmVhc3NpZ246MCovXG4gIGlmICghcGFyYW1zKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuXG4gIHZhciBzZXJpYWxpemVkUGFyYW1zO1xuICBpZiAocGFyYW1zU2VyaWFsaXplcikge1xuICAgIHNlcmlhbGl6ZWRQYXJhbXMgPSBwYXJhbXNTZXJpYWxpemVyKHBhcmFtcyk7XG4gIH0gZWxzZSBpZiAodXRpbHMuaXNVUkxTZWFyY2hQYXJhbXMocGFyYW1zKSkge1xuICAgIHNlcmlhbGl6ZWRQYXJhbXMgPSBwYXJhbXMudG9TdHJpbmcoKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgcGFydHMgPSBbXTtcblxuICAgIHV0aWxzLmZvckVhY2gocGFyYW1zLCBmdW5jdGlvbiBzZXJpYWxpemUodmFsLCBrZXkpIHtcbiAgICAgIGlmICh2YWwgPT09IG51bGwgfHwgdHlwZW9mIHZhbCA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBpZiAodXRpbHMuaXNBcnJheSh2YWwpKSB7XG4gICAgICAgIGtleSA9IGtleSArICdbXSc7XG4gICAgICB9XG5cbiAgICAgIGlmICghdXRpbHMuaXNBcnJheSh2YWwpKSB7XG4gICAgICAgIHZhbCA9IFt2YWxdO1xuICAgICAgfVxuXG4gICAgICB1dGlscy5mb3JFYWNoKHZhbCwgZnVuY3Rpb24gcGFyc2VWYWx1ZSh2KSB7XG4gICAgICAgIGlmICh1dGlscy5pc0RhdGUodikpIHtcbiAgICAgICAgICB2ID0gdi50b0lTT1N0cmluZygpO1xuICAgICAgICB9IGVsc2UgaWYgKHV0aWxzLmlzT2JqZWN0KHYpKSB7XG4gICAgICAgICAgdiA9IEpTT04uc3RyaW5naWZ5KHYpO1xuICAgICAgICB9XG4gICAgICAgIHBhcnRzLnB1c2goZW5jb2RlKGtleSkgKyAnPScgKyBlbmNvZGUodikpO1xuICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICBzZXJpYWxpemVkUGFyYW1zID0gcGFydHMuam9pbignJicpO1xuICB9XG5cbiAgaWYgKHNlcmlhbGl6ZWRQYXJhbXMpIHtcbiAgICB1cmwgKz0gKHVybC5pbmRleE9mKCc/JykgPT09IC0xID8gJz8nIDogJyYnKSArIHNlcmlhbGl6ZWRQYXJhbXM7XG4gIH1cblxuICByZXR1cm4gdXJsO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL2J1aWxkVVJMLmpzXG4vLyBtb2R1bGUgaWQgPSAuL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9idWlsZFVSTC5qc1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG5cbi8qKlxuICogQ3JlYXRlcyBhIG5ldyBVUkwgYnkgY29tYmluaW5nIHRoZSBzcGVjaWZpZWQgVVJMc1xuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBiYXNlVVJMIFRoZSBiYXNlIFVSTFxuICogQHBhcmFtIHtzdHJpbmd9IHJlbGF0aXZlVVJMIFRoZSByZWxhdGl2ZSBVUkxcbiAqIEByZXR1cm5zIHtzdHJpbmd9IFRoZSBjb21iaW5lZCBVUkxcbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBjb21iaW5lVVJMcyhiYXNlVVJMLCByZWxhdGl2ZVVSTCkge1xuICByZXR1cm4gcmVsYXRpdmVVUkxcbiAgICA/IGJhc2VVUkwucmVwbGFjZSgvXFwvKyQvLCAnJykgKyAnLycgKyByZWxhdGl2ZVVSTC5yZXBsYWNlKC9eXFwvKy8sICcnKVxuICAgIDogYmFzZVVSTDtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9jb21iaW5lVVJMcy5qc1xuLy8gbW9kdWxlIGlkID0gLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvY29tYmluZVVSTHMuanNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuLy4uL3V0aWxzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gKFxuICB1dGlscy5pc1N0YW5kYXJkQnJvd3NlckVudigpID9cblxuICAvLyBTdGFuZGFyZCBicm93c2VyIGVudnMgc3VwcG9ydCBkb2N1bWVudC5jb29raWVcbiAgKGZ1bmN0aW9uIHN0YW5kYXJkQnJvd3NlckVudigpIHtcbiAgICByZXR1cm4ge1xuICAgICAgd3JpdGU6IGZ1bmN0aW9uIHdyaXRlKG5hbWUsIHZhbHVlLCBleHBpcmVzLCBwYXRoLCBkb21haW4sIHNlY3VyZSkge1xuICAgICAgICB2YXIgY29va2llID0gW107XG4gICAgICAgIGNvb2tpZS5wdXNoKG5hbWUgKyAnPScgKyBlbmNvZGVVUklDb21wb25lbnQodmFsdWUpKTtcblxuICAgICAgICBpZiAodXRpbHMuaXNOdW1iZXIoZXhwaXJlcykpIHtcbiAgICAgICAgICBjb29raWUucHVzaCgnZXhwaXJlcz0nICsgbmV3IERhdGUoZXhwaXJlcykudG9HTVRTdHJpbmcoKSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodXRpbHMuaXNTdHJpbmcocGF0aCkpIHtcbiAgICAgICAgICBjb29raWUucHVzaCgncGF0aD0nICsgcGF0aCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodXRpbHMuaXNTdHJpbmcoZG9tYWluKSkge1xuICAgICAgICAgIGNvb2tpZS5wdXNoKCdkb21haW49JyArIGRvbWFpbik7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoc2VjdXJlID09PSB0cnVlKSB7XG4gICAgICAgICAgY29va2llLnB1c2goJ3NlY3VyZScpO1xuICAgICAgICB9XG5cbiAgICAgICAgZG9jdW1lbnQuY29va2llID0gY29va2llLmpvaW4oJzsgJyk7XG4gICAgICB9LFxuXG4gICAgICByZWFkOiBmdW5jdGlvbiByZWFkKG5hbWUpIHtcbiAgICAgICAgdmFyIG1hdGNoID0gZG9jdW1lbnQuY29va2llLm1hdGNoKG5ldyBSZWdFeHAoJyhefDtcXFxccyopKCcgKyBuYW1lICsgJyk9KFteO10qKScpKTtcbiAgICAgICAgcmV0dXJuIChtYXRjaCA/IGRlY29kZVVSSUNvbXBvbmVudChtYXRjaFszXSkgOiBudWxsKTtcbiAgICAgIH0sXG5cbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKG5hbWUpIHtcbiAgICAgICAgdGhpcy53cml0ZShuYW1lLCAnJywgRGF0ZS5ub3coKSAtIDg2NDAwMDAwKTtcbiAgICAgIH1cbiAgICB9O1xuICB9KSgpIDpcblxuICAvLyBOb24gc3RhbmRhcmQgYnJvd3NlciBlbnYgKHdlYiB3b3JrZXJzLCByZWFjdC1uYXRpdmUpIGxhY2sgbmVlZGVkIHN1cHBvcnQuXG4gIChmdW5jdGlvbiBub25TdGFuZGFyZEJyb3dzZXJFbnYoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHdyaXRlOiBmdW5jdGlvbiB3cml0ZSgpIHt9LFxuICAgICAgcmVhZDogZnVuY3Rpb24gcmVhZCgpIHsgcmV0dXJuIG51bGw7IH0sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfSkoKVxuKTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL2Nvb2tpZXMuanNcbi8vIG1vZHVsZSBpZCA9IC4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL2Nvb2tpZXMuanNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuXG4vKipcbiAqIERldGVybWluZXMgd2hldGhlciB0aGUgc3BlY2lmaWVkIFVSTCBpcyBhYnNvbHV0ZVxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSB1cmwgVGhlIFVSTCB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB0aGUgc3BlY2lmaWVkIFVSTCBpcyBhYnNvbHV0ZSwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gaXNBYnNvbHV0ZVVSTCh1cmwpIHtcbiAgLy8gQSBVUkwgaXMgY29uc2lkZXJlZCBhYnNvbHV0ZSBpZiBpdCBiZWdpbnMgd2l0aCBcIjxzY2hlbWU+Oi8vXCIgb3IgXCIvL1wiIChwcm90b2NvbC1yZWxhdGl2ZSBVUkwpLlxuICAvLyBSRkMgMzk4NiBkZWZpbmVzIHNjaGVtZSBuYW1lIGFzIGEgc2VxdWVuY2Ugb2YgY2hhcmFjdGVycyBiZWdpbm5pbmcgd2l0aCBhIGxldHRlciBhbmQgZm9sbG93ZWRcbiAgLy8gYnkgYW55IGNvbWJpbmF0aW9uIG9mIGxldHRlcnMsIGRpZ2l0cywgcGx1cywgcGVyaW9kLCBvciBoeXBoZW4uXG4gIHJldHVybiAvXihbYS16XVthLXpcXGRcXCtcXC1cXC5dKjopP1xcL1xcLy9pLnRlc3QodXJsKTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9pc0Fic29sdXRlVVJMLmpzXG4vLyBtb2R1bGUgaWQgPSAuL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9pc0Fic29sdXRlVVJMLmpzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcblxudmFyIHV0aWxzID0gcmVxdWlyZSgnLi8uLi91dGlscycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IChcbiAgdXRpbHMuaXNTdGFuZGFyZEJyb3dzZXJFbnYoKSA/XG5cbiAgLy8gU3RhbmRhcmQgYnJvd3NlciBlbnZzIGhhdmUgZnVsbCBzdXBwb3J0IG9mIHRoZSBBUElzIG5lZWRlZCB0byB0ZXN0XG4gIC8vIHdoZXRoZXIgdGhlIHJlcXVlc3QgVVJMIGlzIG9mIHRoZSBzYW1lIG9yaWdpbiBhcyBjdXJyZW50IGxvY2F0aW9uLlxuICAoZnVuY3Rpb24gc3RhbmRhcmRCcm93c2VyRW52KCkge1xuICAgIHZhciBtc2llID0gLyhtc2llfHRyaWRlbnQpL2kudGVzdChuYXZpZ2F0b3IudXNlckFnZW50KTtcbiAgICB2YXIgdXJsUGFyc2luZ05vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gICAgdmFyIG9yaWdpblVSTDtcblxuICAgIC8qKlxuICAgICogUGFyc2UgYSBVUkwgdG8gZGlzY292ZXIgaXQncyBjb21wb25lbnRzXG4gICAgKlxuICAgICogQHBhcmFtIHtTdHJpbmd9IHVybCBUaGUgVVJMIHRvIGJlIHBhcnNlZFxuICAgICogQHJldHVybnMge09iamVjdH1cbiAgICAqL1xuICAgIGZ1bmN0aW9uIHJlc29sdmVVUkwodXJsKSB7XG4gICAgICB2YXIgaHJlZiA9IHVybDtcblxuICAgICAgaWYgKG1zaWUpIHtcbiAgICAgICAgLy8gSUUgbmVlZHMgYXR0cmlidXRlIHNldCB0d2ljZSB0byBub3JtYWxpemUgcHJvcGVydGllc1xuICAgICAgICB1cmxQYXJzaW5nTm9kZS5zZXRBdHRyaWJ1dGUoJ2hyZWYnLCBocmVmKTtcbiAgICAgICAgaHJlZiA9IHVybFBhcnNpbmdOb2RlLmhyZWY7XG4gICAgICB9XG5cbiAgICAgIHVybFBhcnNpbmdOb2RlLnNldEF0dHJpYnV0ZSgnaHJlZicsIGhyZWYpO1xuXG4gICAgICAvLyB1cmxQYXJzaW5nTm9kZSBwcm92aWRlcyB0aGUgVXJsVXRpbHMgaW50ZXJmYWNlIC0gaHR0cDovL3VybC5zcGVjLndoYXR3Zy5vcmcvI3VybHV0aWxzXG4gICAgICByZXR1cm4ge1xuICAgICAgICBocmVmOiB1cmxQYXJzaW5nTm9kZS5ocmVmLFxuICAgICAgICBwcm90b2NvbDogdXJsUGFyc2luZ05vZGUucHJvdG9jb2wgPyB1cmxQYXJzaW5nTm9kZS5wcm90b2NvbC5yZXBsYWNlKC86JC8sICcnKSA6ICcnLFxuICAgICAgICBob3N0OiB1cmxQYXJzaW5nTm9kZS5ob3N0LFxuICAgICAgICBzZWFyY2g6IHVybFBhcnNpbmdOb2RlLnNlYXJjaCA/IHVybFBhcnNpbmdOb2RlLnNlYXJjaC5yZXBsYWNlKC9eXFw/LywgJycpIDogJycsXG4gICAgICAgIGhhc2g6IHVybFBhcnNpbmdOb2RlLmhhc2ggPyB1cmxQYXJzaW5nTm9kZS5oYXNoLnJlcGxhY2UoL14jLywgJycpIDogJycsXG4gICAgICAgIGhvc3RuYW1lOiB1cmxQYXJzaW5nTm9kZS5ob3N0bmFtZSxcbiAgICAgICAgcG9ydDogdXJsUGFyc2luZ05vZGUucG9ydCxcbiAgICAgICAgcGF0aG5hbWU6ICh1cmxQYXJzaW5nTm9kZS5wYXRobmFtZS5jaGFyQXQoMCkgPT09ICcvJykgP1xuICAgICAgICAgICAgICAgICAgdXJsUGFyc2luZ05vZGUucGF0aG5hbWUgOlxuICAgICAgICAgICAgICAgICAgJy8nICsgdXJsUGFyc2luZ05vZGUucGF0aG5hbWVcbiAgICAgIH07XG4gICAgfVxuXG4gICAgb3JpZ2luVVJMID0gcmVzb2x2ZVVSTCh3aW5kb3cubG9jYXRpb24uaHJlZik7XG5cbiAgICAvKipcbiAgICAqIERldGVybWluZSBpZiBhIFVSTCBzaGFyZXMgdGhlIHNhbWUgb3JpZ2luIGFzIHRoZSBjdXJyZW50IGxvY2F0aW9uXG4gICAgKlxuICAgICogQHBhcmFtIHtTdHJpbmd9IHJlcXVlc3RVUkwgVGhlIFVSTCB0byB0ZXN0XG4gICAgKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiBVUkwgc2hhcmVzIHRoZSBzYW1lIG9yaWdpbiwgb3RoZXJ3aXNlIGZhbHNlXG4gICAgKi9cbiAgICByZXR1cm4gZnVuY3Rpb24gaXNVUkxTYW1lT3JpZ2luKHJlcXVlc3RVUkwpIHtcbiAgICAgIHZhciBwYXJzZWQgPSAodXRpbHMuaXNTdHJpbmcocmVxdWVzdFVSTCkpID8gcmVzb2x2ZVVSTChyZXF1ZXN0VVJMKSA6IHJlcXVlc3RVUkw7XG4gICAgICByZXR1cm4gKHBhcnNlZC5wcm90b2NvbCA9PT0gb3JpZ2luVVJMLnByb3RvY29sICYmXG4gICAgICAgICAgICBwYXJzZWQuaG9zdCA9PT0gb3JpZ2luVVJMLmhvc3QpO1xuICAgIH07XG4gIH0pKCkgOlxuXG4gIC8vIE5vbiBzdGFuZGFyZCBicm93c2VyIGVudnMgKHdlYiB3b3JrZXJzLCByZWFjdC1uYXRpdmUpIGxhY2sgbmVlZGVkIHN1cHBvcnQuXG4gIChmdW5jdGlvbiBub25TdGFuZGFyZEJyb3dzZXJFbnYoKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIGlzVVJMU2FtZU9yaWdpbigpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH07XG4gIH0pKClcbik7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9pc1VSTFNhbWVPcmlnaW4uanNcbi8vIG1vZHVsZSBpZCA9IC4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL2lzVVJMU2FtZU9yaWdpbi5qc1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG5cbnZhciB1dGlscyA9IHJlcXVpcmUoJy4uL3V0aWxzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gbm9ybWFsaXplSGVhZGVyTmFtZShoZWFkZXJzLCBub3JtYWxpemVkTmFtZSkge1xuICB1dGlscy5mb3JFYWNoKGhlYWRlcnMsIGZ1bmN0aW9uIHByb2Nlc3NIZWFkZXIodmFsdWUsIG5hbWUpIHtcbiAgICBpZiAobmFtZSAhPT0gbm9ybWFsaXplZE5hbWUgJiYgbmFtZS50b1VwcGVyQ2FzZSgpID09PSBub3JtYWxpemVkTmFtZS50b1VwcGVyQ2FzZSgpKSB7XG4gICAgICBoZWFkZXJzW25vcm1hbGl6ZWROYW1lXSA9IHZhbHVlO1xuICAgICAgZGVsZXRlIGhlYWRlcnNbbmFtZV07XG4gICAgfVxuICB9KTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9ub3JtYWxpemVIZWFkZXJOYW1lLmpzXG4vLyBtb2R1bGUgaWQgPSAuL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9ub3JtYWxpemVIZWFkZXJOYW1lLmpzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcblxudmFyIHV0aWxzID0gcmVxdWlyZSgnLi8uLi91dGlscycpO1xuXG4vLyBIZWFkZXJzIHdob3NlIGR1cGxpY2F0ZXMgYXJlIGlnbm9yZWQgYnkgbm9kZVxuLy8gYy5mLiBodHRwczovL25vZGVqcy5vcmcvYXBpL2h0dHAuaHRtbCNodHRwX21lc3NhZ2VfaGVhZGVyc1xudmFyIGlnbm9yZUR1cGxpY2F0ZU9mID0gW1xuICAnYWdlJywgJ2F1dGhvcml6YXRpb24nLCAnY29udGVudC1sZW5ndGgnLCAnY29udGVudC10eXBlJywgJ2V0YWcnLFxuICAnZXhwaXJlcycsICdmcm9tJywgJ2hvc3QnLCAnaWYtbW9kaWZpZWQtc2luY2UnLCAnaWYtdW5tb2RpZmllZC1zaW5jZScsXG4gICdsYXN0LW1vZGlmaWVkJywgJ2xvY2F0aW9uJywgJ21heC1mb3J3YXJkcycsICdwcm94eS1hdXRob3JpemF0aW9uJyxcbiAgJ3JlZmVyZXInLCAncmV0cnktYWZ0ZXInLCAndXNlci1hZ2VudCdcbl07XG5cbi8qKlxuICogUGFyc2UgaGVhZGVycyBpbnRvIGFuIG9iamVjdFxuICpcbiAqIGBgYFxuICogRGF0ZTogV2VkLCAyNyBBdWcgMjAxNCAwODo1ODo0OSBHTVRcbiAqIENvbnRlbnQtVHlwZTogYXBwbGljYXRpb24vanNvblxuICogQ29ubmVjdGlvbjoga2VlcC1hbGl2ZVxuICogVHJhbnNmZXItRW5jb2Rpbmc6IGNodW5rZWRcbiAqIGBgYFxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBoZWFkZXJzIEhlYWRlcnMgbmVlZGluZyB0byBiZSBwYXJzZWRcbiAqIEByZXR1cm5zIHtPYmplY3R9IEhlYWRlcnMgcGFyc2VkIGludG8gYW4gb2JqZWN0XG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gcGFyc2VIZWFkZXJzKGhlYWRlcnMpIHtcbiAgdmFyIHBhcnNlZCA9IHt9O1xuICB2YXIga2V5O1xuICB2YXIgdmFsO1xuICB2YXIgaTtcblxuICBpZiAoIWhlYWRlcnMpIHsgcmV0dXJuIHBhcnNlZDsgfVxuXG4gIHV0aWxzLmZvckVhY2goaGVhZGVycy5zcGxpdCgnXFxuJyksIGZ1bmN0aW9uIHBhcnNlcihsaW5lKSB7XG4gICAgaSA9IGxpbmUuaW5kZXhPZignOicpO1xuICAgIGtleSA9IHV0aWxzLnRyaW0obGluZS5zdWJzdHIoMCwgaSkpLnRvTG93ZXJDYXNlKCk7XG4gICAgdmFsID0gdXRpbHMudHJpbShsaW5lLnN1YnN0cihpICsgMSkpO1xuXG4gICAgaWYgKGtleSkge1xuICAgICAgaWYgKHBhcnNlZFtrZXldICYmIGlnbm9yZUR1cGxpY2F0ZU9mLmluZGV4T2Yoa2V5KSA+PSAwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGlmIChrZXkgPT09ICdzZXQtY29va2llJykge1xuICAgICAgICBwYXJzZWRba2V5XSA9IChwYXJzZWRba2V5XSA/IHBhcnNlZFtrZXldIDogW10pLmNvbmNhdChbdmFsXSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBwYXJzZWRba2V5XSA9IHBhcnNlZFtrZXldID8gcGFyc2VkW2tleV0gKyAnLCAnICsgdmFsIDogdmFsO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIHBhcnNlZDtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9wYXJzZUhlYWRlcnMuanNcbi8vIG1vZHVsZSBpZCA9IC4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL3BhcnNlSGVhZGVycy5qc1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG5cbi8qKlxuICogU3ludGFjdGljIHN1Z2FyIGZvciBpbnZva2luZyBhIGZ1bmN0aW9uIGFuZCBleHBhbmRpbmcgYW4gYXJyYXkgZm9yIGFyZ3VtZW50cy5cbiAqXG4gKiBDb21tb24gdXNlIGNhc2Ugd291bGQgYmUgdG8gdXNlIGBGdW5jdGlvbi5wcm90b3R5cGUuYXBwbHlgLlxuICpcbiAqICBgYGBqc1xuICogIGZ1bmN0aW9uIGYoeCwgeSwgeikge31cbiAqICB2YXIgYXJncyA9IFsxLCAyLCAzXTtcbiAqICBmLmFwcGx5KG51bGwsIGFyZ3MpO1xuICogIGBgYFxuICpcbiAqIFdpdGggYHNwcmVhZGAgdGhpcyBleGFtcGxlIGNhbiBiZSByZS13cml0dGVuLlxuICpcbiAqICBgYGBqc1xuICogIHNwcmVhZChmdW5jdGlvbih4LCB5LCB6KSB7fSkoWzEsIDIsIDNdKTtcbiAqICBgYGBcbiAqXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFja1xuICogQHJldHVybnMge0Z1bmN0aW9ufVxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIHNwcmVhZChjYWxsYmFjaykge1xuICByZXR1cm4gZnVuY3Rpb24gd3JhcChhcnIpIHtcbiAgICByZXR1cm4gY2FsbGJhY2suYXBwbHkobnVsbCwgYXJyKTtcbiAgfTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9zcHJlYWQuanNcbi8vIG1vZHVsZSBpZCA9IC4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL3NwcmVhZC5qc1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG5cbnZhciBiaW5kID0gcmVxdWlyZSgnLi9oZWxwZXJzL2JpbmQnKTtcbnZhciBpc0J1ZmZlciA9IHJlcXVpcmUoJ2lzLWJ1ZmZlcicpO1xuXG4vKmdsb2JhbCB0b1N0cmluZzp0cnVlKi9cblxuLy8gdXRpbHMgaXMgYSBsaWJyYXJ5IG9mIGdlbmVyaWMgaGVscGVyIGZ1bmN0aW9ucyBub24tc3BlY2lmaWMgdG8gYXhpb3NcblxudmFyIHRvU3RyaW5nID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZztcblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhbiBBcnJheVxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGFuIEFycmF5LCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNBcnJheSh2YWwpIHtcbiAgcmV0dXJuIHRvU3RyaW5nLmNhbGwodmFsKSA9PT0gJ1tvYmplY3QgQXJyYXldJztcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhbiBBcnJheUJ1ZmZlclxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGFuIEFycmF5QnVmZmVyLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNBcnJheUJ1ZmZlcih2YWwpIHtcbiAgcmV0dXJuIHRvU3RyaW5nLmNhbGwodmFsKSA9PT0gJ1tvYmplY3QgQXJyYXlCdWZmZXJdJztcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIEZvcm1EYXRhXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYW4gRm9ybURhdGEsIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0Zvcm1EYXRhKHZhbCkge1xuICByZXR1cm4gKHR5cGVvZiBGb3JtRGF0YSAhPT0gJ3VuZGVmaW5lZCcpICYmICh2YWwgaW5zdGFuY2VvZiBGb3JtRGF0YSk7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSB2aWV3IG9uIGFuIEFycmF5QnVmZmVyXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYSB2aWV3IG9uIGFuIEFycmF5QnVmZmVyLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNBcnJheUJ1ZmZlclZpZXcodmFsKSB7XG4gIHZhciByZXN1bHQ7XG4gIGlmICgodHlwZW9mIEFycmF5QnVmZmVyICE9PSAndW5kZWZpbmVkJykgJiYgKEFycmF5QnVmZmVyLmlzVmlldykpIHtcbiAgICByZXN1bHQgPSBBcnJheUJ1ZmZlci5pc1ZpZXcodmFsKTtcbiAgfSBlbHNlIHtcbiAgICByZXN1bHQgPSAodmFsKSAmJiAodmFsLmJ1ZmZlcikgJiYgKHZhbC5idWZmZXIgaW5zdGFuY2VvZiBBcnJheUJ1ZmZlcik7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIFN0cmluZ1xuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGEgU3RyaW5nLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNTdHJpbmcodmFsKSB7XG4gIHJldHVybiB0eXBlb2YgdmFsID09PSAnc3RyaW5nJztcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIE51bWJlclxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGEgTnVtYmVyLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNOdW1iZXIodmFsKSB7XG4gIHJldHVybiB0eXBlb2YgdmFsID09PSAnbnVtYmVyJztcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyB1bmRlZmluZWRcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB0aGUgdmFsdWUgaXMgdW5kZWZpbmVkLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNVbmRlZmluZWQodmFsKSB7XG4gIHJldHVybiB0eXBlb2YgdmFsID09PSAndW5kZWZpbmVkJztcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhbiBPYmplY3RcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhbiBPYmplY3QsIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc09iamVjdCh2YWwpIHtcbiAgcmV0dXJuIHZhbCAhPT0gbnVsbCAmJiB0eXBlb2YgdmFsID09PSAnb2JqZWN0Jztcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIERhdGVcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhIERhdGUsIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0RhdGUodmFsKSB7XG4gIHJldHVybiB0b1N0cmluZy5jYWxsKHZhbCkgPT09ICdbb2JqZWN0IERhdGVdJztcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIEZpbGVcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhIEZpbGUsIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0ZpbGUodmFsKSB7XG4gIHJldHVybiB0b1N0cmluZy5jYWxsKHZhbCkgPT09ICdbb2JqZWN0IEZpbGVdJztcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIEJsb2JcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhIEJsb2IsIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0Jsb2IodmFsKSB7XG4gIHJldHVybiB0b1N0cmluZy5jYWxsKHZhbCkgPT09ICdbb2JqZWN0IEJsb2JdJztcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIEZ1bmN0aW9uXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYSBGdW5jdGlvbiwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzRnVuY3Rpb24odmFsKSB7XG4gIHJldHVybiB0b1N0cmluZy5jYWxsKHZhbCkgPT09ICdbb2JqZWN0IEZ1bmN0aW9uXSc7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSBTdHJlYW1cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhIFN0cmVhbSwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzU3RyZWFtKHZhbCkge1xuICByZXR1cm4gaXNPYmplY3QodmFsKSAmJiBpc0Z1bmN0aW9uKHZhbC5waXBlKTtcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIFVSTFNlYXJjaFBhcmFtcyBvYmplY3RcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhIFVSTFNlYXJjaFBhcmFtcyBvYmplY3QsIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc1VSTFNlYXJjaFBhcmFtcyh2YWwpIHtcbiAgcmV0dXJuIHR5cGVvZiBVUkxTZWFyY2hQYXJhbXMgIT09ICd1bmRlZmluZWQnICYmIHZhbCBpbnN0YW5jZW9mIFVSTFNlYXJjaFBhcmFtcztcbn1cblxuLyoqXG4gKiBUcmltIGV4Y2VzcyB3aGl0ZXNwYWNlIG9mZiB0aGUgYmVnaW5uaW5nIGFuZCBlbmQgb2YgYSBzdHJpbmdcbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gc3RyIFRoZSBTdHJpbmcgdG8gdHJpbVxuICogQHJldHVybnMge1N0cmluZ30gVGhlIFN0cmluZyBmcmVlZCBvZiBleGNlc3Mgd2hpdGVzcGFjZVxuICovXG5mdW5jdGlvbiB0cmltKHN0cikge1xuICByZXR1cm4gc3RyLnJlcGxhY2UoL15cXHMqLywgJycpLnJlcGxhY2UoL1xccyokLywgJycpO1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiB3ZSdyZSBydW5uaW5nIGluIGEgc3RhbmRhcmQgYnJvd3NlciBlbnZpcm9ubWVudFxuICpcbiAqIFRoaXMgYWxsb3dzIGF4aW9zIHRvIHJ1biBpbiBhIHdlYiB3b3JrZXIsIGFuZCByZWFjdC1uYXRpdmUuXG4gKiBCb3RoIGVudmlyb25tZW50cyBzdXBwb3J0IFhNTEh0dHBSZXF1ZXN0LCBidXQgbm90IGZ1bGx5IHN0YW5kYXJkIGdsb2JhbHMuXG4gKlxuICogd2ViIHdvcmtlcnM6XG4gKiAgdHlwZW9mIHdpbmRvdyAtPiB1bmRlZmluZWRcbiAqICB0eXBlb2YgZG9jdW1lbnQgLT4gdW5kZWZpbmVkXG4gKlxuICogcmVhY3QtbmF0aXZlOlxuICogIG5hdmlnYXRvci5wcm9kdWN0IC0+ICdSZWFjdE5hdGl2ZSdcbiAqL1xuZnVuY3Rpb24gaXNTdGFuZGFyZEJyb3dzZXJFbnYoKSB7XG4gIGlmICh0eXBlb2YgbmF2aWdhdG9yICE9PSAndW5kZWZpbmVkJyAmJiBuYXZpZ2F0b3IucHJvZHVjdCA9PT0gJ1JlYWN0TmF0aXZlJykge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICByZXR1cm4gKFxuICAgIHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmXG4gICAgdHlwZW9mIGRvY3VtZW50ICE9PSAndW5kZWZpbmVkJ1xuICApO1xufVxuXG4vKipcbiAqIEl0ZXJhdGUgb3ZlciBhbiBBcnJheSBvciBhbiBPYmplY3QgaW52b2tpbmcgYSBmdW5jdGlvbiBmb3IgZWFjaCBpdGVtLlxuICpcbiAqIElmIGBvYmpgIGlzIGFuIEFycmF5IGNhbGxiYWNrIHdpbGwgYmUgY2FsbGVkIHBhc3NpbmdcbiAqIHRoZSB2YWx1ZSwgaW5kZXgsIGFuZCBjb21wbGV0ZSBhcnJheSBmb3IgZWFjaCBpdGVtLlxuICpcbiAqIElmICdvYmonIGlzIGFuIE9iamVjdCBjYWxsYmFjayB3aWxsIGJlIGNhbGxlZCBwYXNzaW5nXG4gKiB0aGUgdmFsdWUsIGtleSwgYW5kIGNvbXBsZXRlIG9iamVjdCBmb3IgZWFjaCBwcm9wZXJ0eS5cbiAqXG4gKiBAcGFyYW0ge09iamVjdHxBcnJheX0gb2JqIFRoZSBvYmplY3QgdG8gaXRlcmF0ZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gZm4gVGhlIGNhbGxiYWNrIHRvIGludm9rZSBmb3IgZWFjaCBpdGVtXG4gKi9cbmZ1bmN0aW9uIGZvckVhY2gob2JqLCBmbikge1xuICAvLyBEb24ndCBib3RoZXIgaWYgbm8gdmFsdWUgcHJvdmlkZWRcbiAgaWYgKG9iaiA9PT0gbnVsbCB8fCB0eXBlb2Ygb2JqID09PSAndW5kZWZpbmVkJykge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8vIEZvcmNlIGFuIGFycmF5IGlmIG5vdCBhbHJlYWR5IHNvbWV0aGluZyBpdGVyYWJsZVxuICBpZiAodHlwZW9mIG9iaiAhPT0gJ29iamVjdCcpIHtcbiAgICAvKmVzbGludCBuby1wYXJhbS1yZWFzc2lnbjowKi9cbiAgICBvYmogPSBbb2JqXTtcbiAgfVxuXG4gIGlmIChpc0FycmF5KG9iaikpIHtcbiAgICAvLyBJdGVyYXRlIG92ZXIgYXJyYXkgdmFsdWVzXG4gICAgZm9yICh2YXIgaSA9IDAsIGwgPSBvYmoubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICBmbi5jYWxsKG51bGwsIG9ialtpXSwgaSwgb2JqKTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgLy8gSXRlcmF0ZSBvdmVyIG9iamVjdCBrZXlzXG4gICAgZm9yICh2YXIga2V5IGluIG9iaikge1xuICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSkpIHtcbiAgICAgICAgZm4uY2FsbChudWxsLCBvYmpba2V5XSwga2V5LCBvYmopO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4vKipcbiAqIEFjY2VwdHMgdmFyYXJncyBleHBlY3RpbmcgZWFjaCBhcmd1bWVudCB0byBiZSBhbiBvYmplY3QsIHRoZW5cbiAqIGltbXV0YWJseSBtZXJnZXMgdGhlIHByb3BlcnRpZXMgb2YgZWFjaCBvYmplY3QgYW5kIHJldHVybnMgcmVzdWx0LlxuICpcbiAqIFdoZW4gbXVsdGlwbGUgb2JqZWN0cyBjb250YWluIHRoZSBzYW1lIGtleSB0aGUgbGF0ZXIgb2JqZWN0IGluXG4gKiB0aGUgYXJndW1lbnRzIGxpc3Qgd2lsbCB0YWtlIHByZWNlZGVuY2UuXG4gKlxuICogRXhhbXBsZTpcbiAqXG4gKiBgYGBqc1xuICogdmFyIHJlc3VsdCA9IG1lcmdlKHtmb286IDEyM30sIHtmb286IDQ1Nn0pO1xuICogY29uc29sZS5sb2cocmVzdWx0LmZvbyk7IC8vIG91dHB1dHMgNDU2XG4gKiBgYGBcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqMSBPYmplY3QgdG8gbWVyZ2VcbiAqIEByZXR1cm5zIHtPYmplY3R9IFJlc3VsdCBvZiBhbGwgbWVyZ2UgcHJvcGVydGllc1xuICovXG5mdW5jdGlvbiBtZXJnZSgvKiBvYmoxLCBvYmoyLCBvYmozLCAuLi4gKi8pIHtcbiAgdmFyIHJlc3VsdCA9IHt9O1xuICBmdW5jdGlvbiBhc3NpZ25WYWx1ZSh2YWwsIGtleSkge1xuICAgIGlmICh0eXBlb2YgcmVzdWx0W2tleV0gPT09ICdvYmplY3QnICYmIHR5cGVvZiB2YWwgPT09ICdvYmplY3QnKSB7XG4gICAgICByZXN1bHRba2V5XSA9IG1lcmdlKHJlc3VsdFtrZXldLCB2YWwpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXN1bHRba2V5XSA9IHZhbDtcbiAgICB9XG4gIH1cblxuICBmb3IgKHZhciBpID0gMCwgbCA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICBmb3JFYWNoKGFyZ3VtZW50c1tpXSwgYXNzaWduVmFsdWUpO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbi8qKlxuICogRXh0ZW5kcyBvYmplY3QgYSBieSBtdXRhYmx5IGFkZGluZyB0byBpdCB0aGUgcHJvcGVydGllcyBvZiBvYmplY3QgYi5cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gYSBUaGUgb2JqZWN0IHRvIGJlIGV4dGVuZGVkXG4gKiBAcGFyYW0ge09iamVjdH0gYiBUaGUgb2JqZWN0IHRvIGNvcHkgcHJvcGVydGllcyBmcm9tXG4gKiBAcGFyYW0ge09iamVjdH0gdGhpc0FyZyBUaGUgb2JqZWN0IHRvIGJpbmQgZnVuY3Rpb24gdG9cbiAqIEByZXR1cm4ge09iamVjdH0gVGhlIHJlc3VsdGluZyB2YWx1ZSBvZiBvYmplY3QgYVxuICovXG5mdW5jdGlvbiBleHRlbmQoYSwgYiwgdGhpc0FyZykge1xuICBmb3JFYWNoKGIsIGZ1bmN0aW9uIGFzc2lnblZhbHVlKHZhbCwga2V5KSB7XG4gICAgaWYgKHRoaXNBcmcgJiYgdHlwZW9mIHZhbCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgYVtrZXldID0gYmluZCh2YWwsIHRoaXNBcmcpO1xuICAgIH0gZWxzZSB7XG4gICAgICBhW2tleV0gPSB2YWw7XG4gICAgfVxuICB9KTtcbiAgcmV0dXJuIGE7XG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBpc0FycmF5OiBpc0FycmF5LFxuICBpc0FycmF5QnVmZmVyOiBpc0FycmF5QnVmZmVyLFxuICBpc0J1ZmZlcjogaXNCdWZmZXIsXG4gIGlzRm9ybURhdGE6IGlzRm9ybURhdGEsXG4gIGlzQXJyYXlCdWZmZXJWaWV3OiBpc0FycmF5QnVmZmVyVmlldyxcbiAgaXNTdHJpbmc6IGlzU3RyaW5nLFxuICBpc051bWJlcjogaXNOdW1iZXIsXG4gIGlzT2JqZWN0OiBpc09iamVjdCxcbiAgaXNVbmRlZmluZWQ6IGlzVW5kZWZpbmVkLFxuICBpc0RhdGU6IGlzRGF0ZSxcbiAgaXNGaWxlOiBpc0ZpbGUsXG4gIGlzQmxvYjogaXNCbG9iLFxuICBpc0Z1bmN0aW9uOiBpc0Z1bmN0aW9uLFxuICBpc1N0cmVhbTogaXNTdHJlYW0sXG4gIGlzVVJMU2VhcmNoUGFyYW1zOiBpc1VSTFNlYXJjaFBhcmFtcyxcbiAgaXNTdGFuZGFyZEJyb3dzZXJFbnY6IGlzU3RhbmRhcmRCcm93c2VyRW52LFxuICBmb3JFYWNoOiBmb3JFYWNoLFxuICBtZXJnZTogbWVyZ2UsXG4gIGV4dGVuZDogZXh0ZW5kLFxuICB0cmltOiB0cmltXG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL3V0aWxzLmpzXG4vLyBtb2R1bGUgaWQgPSAuL25vZGVfbW9kdWxlcy9heGlvcy9saWIvdXRpbHMuanNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSh1bmRlZmluZWQpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLmstYnRuIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIGhlaWdodDogMi41NzE0Mjg1NzE0Mjg1NzJyZW07XFxuICBsaW5lLWhlaWdodDogY2FsYygyLjU3MTQyODU3MTQyODU3MnJlbSAtIDJweCk7XFxuICBwYWRkaW5nOiAwIDIuMjg1NzE0Mjg1NzE0Mjg2ZW07XFxuICBvdXRsaW5lOiBub25lO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgY29sb3I6ICM1OTU5NTk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4yNXMgZWFzZS1pbi1vdXQ7XFxuICB0cmFuc2l0aW9uOiBhbGwgMC4yNXMgZWFzZS1pbi1vdXQ7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjZDlkOWQ5O1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbn1cXG4uay1idG46aG92ZXIge1xcbiAgYm9yZGVyLWNvbG9yOiAjMjg5YWY0O1xcbiAgY29sb3I6ICMyODlhZjQ7XFxufVxcbi5rLWJ0bi5rLXByaW1hcnkge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI4OWFmNDtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgYm9yZGVyLWNvbG9yOiAjMjg5YWY0O1xcbn1cXG4uay1idG4uay1wcmltYXJ5OmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM1M2FlZjY7XFxuICBib3JkZXItY29sb3I6ICM1M2FlZjY7XFxufVxcbi5rLWJ0bi5rLXdhcm5pbmcge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmOWMyODtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgYm9yZGVyLWNvbG9yOiAjZmY5YzI4O1xcbn1cXG4uay1idG4uay13YXJuaW5nOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmIwNTM7XFxuICBib3JkZXItY29sb3I6ICNmZmIwNTM7XFxufVxcbi5rLWJ0bi5rLWRhbmdlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmU0NDQ0O1xcbiAgY29sb3I6ICNmZmY7XFxuICBib3JkZXItY29sb3I6ICNmZTQ0NDQ7XFxufVxcbi5rLWJ0bi5rLWRhbmdlcjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmU2OTY5O1xcbiAgYm9yZGVyLWNvbG9yOiAjZmU2OTY5O1xcbn1cXG4uay1idG4uay1hY3RpdmUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI4OWFmNDtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgYm9yZGVyLWNvbG9yOiAjMjg5YWY0O1xcbn1cXG4uay1idG4uay1hY3RpdmU6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzUzYWVmNjtcXG4gIGJvcmRlci1jb2xvcjogIzUzYWVmNjtcXG59XFxuLmstYnRuW2Rpc2FibGVkXSxcXG4uay1idG5bZGlzYWJsZWRdOmhvdmVyIHtcXG4gIGNvbG9yOiAjOTk5O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Q5ZDlkOTtcXG4gIGJvcmRlci1jb2xvcjogI2Q5ZDlkOTtcXG4gIGN1cnNvcjogbm90LWFsbG93ZWQ7XFxufVxcbi5rLWJ0bi5rLW5vbmUsXFxuLmstYnRuLmstbm9uZTpob3ZlciB7XFxuICBib3JkZXI6IG5vbmU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG59XFxuLmstYnRuLmstc21hbGwge1xcbiAgZm9udC1zaXplOiAwLjg1NzE0Mjg1NzE0Mjg1N3JlbTtcXG4gIGhlaWdodDogMi4xNDI4NTcxNDI4NTcxNDNyZW07XFxuICBwYWRkaW5nOiAwIDEuMDcxNDI4NTcxNDI4NTcxcmVtO1xcbiAgbGluZS1oZWlnaHQ6IGNhbGMoMi4xNDI4NTcxNDI4NTcxNDNyZW0gLSAycHgpO1xcbn1cXG4uay1idG4uay1zbWFsbC5rLWJ0bi1pY29uIHtcXG4gIHdpZHRoOiAyLjE0Mjg1NzE0Mjg1NzE0M3JlbTtcXG59XFxuLmstYnRuLmstbWluaSB7XFxuICBmb250LXNpemU6IDAuODU3MTQyODU3MTQyODU3cmVtO1xcbiAgaGVpZ2h0OiAxLjg1NzE0Mjg1NzE0Mjg1N3JlbTtcXG4gIHBhZGRpbmc6IDAgMC43MTQyODU3MTQyODU3MTRyZW07XFxuICBsaW5lLWhlaWdodDogY2FsYygxLjg1NzE0Mjg1NzE0Mjg1N3JlbSAtIDJweCk7XFxufVxcbi5rLWJ0bi5rLW1pbmkuay1idG4taWNvbiB7XFxuICB3aWR0aDogMS44NTcxNDI4NTcxNDI4NTdyZW07XFxufVxcbi5rLWJ0biAuay1pY29uIHtcXG4gIGZvbnQtc2l6ZTogaW5oZXJpdDtcXG59XFxuLmstYnRuIC5rLWljb246YmVmb3JlIHtcXG4gIGZvbnQtc2l6ZTogaW5oZXJpdDtcXG59XFxuLmstYnRuIC5rLWljb24gKyBzcGFuIHtcXG4gIG1hcmdpbi1sZWZ0OiAwLjM1NzE0Mjg1NzE0Mjg1N2VtO1xcbn1cXG4uay1idG4uay1pY29uLXJpZ2h0IC5rLWljb24ge1xcbiAgbWFyZ2luLWxlZnQ6IDAuMzU3MTQyODU3MTQyODU3ZW07XFxufVxcbi5rLWJ0bi5rLWJ0bi1pY29uIHtcXG4gIHdpZHRoOiAyLjU3MTQyODU3MTQyODU3MnJlbTtcXG4gIHBhZGRpbmc6IDA7XFxufVxcbi5rLWJ0bi5rLWJ0bi1pY29uIC5rLWljb24ge1xcbiAgbWFyZ2luOiAwO1xcbiAgZm9udC1zaXplOiAxLjE0Mjg1NzE0Mjg1NzE0M2VtO1xcbn1cXG4uay1idG4uay1mbHVpZCB7XFxuICB3aWR0aDogMTAwJTtcXG4gIHBhZGRpbmc6IDA7XFxufVxcbi5rLWJ0bi5rLWNpcmNsZSB7XFxuICBib3JkZXItcmFkaXVzOiAxLjI4NTcxNDI4NTcxNDI4NnJlbTtcXG59XFxuLmstYnRuLmstbG9hZGluZyxcXG4uay1idG4uay1sb2FkaW5nOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxuICBjb2xvcjogI2FjYWNhYztcXG4gIGJvcmRlci1jb2xvcjogI2VjZWNlYztcXG59XFxuLmstYnRuLmstbG9hZGluZyAuay1pY29uOm5vdCguaWNvbi1sb2FkaW5nKSB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG4uay1idG4uay1sb2FkaW5nLmstcHJpbWFyeSxcXG4uay1idG4uay1sb2FkaW5nLmstcHJpbWFyeTpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTRjZGY5O1xcbiAgY29sb3I6ICNmZmY7XFxuICBib3JkZXItY29sb3I6ICM5NGNkZjk7XFxufVxcbi5rLWJ0bi5rLWxvYWRpbmcuay13YXJuaW5nLFxcbi5rLWJ0bi5rLWxvYWRpbmcuay13YXJuaW5nOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmNkOTM7XFxuICBjb2xvcjogI2ZmZjtcXG4gIGJvcmRlci1jb2xvcjogI2ZmY2Q5MztcXG59XFxuLmstYnRuLmstbG9hZGluZy5rLWRhbmdlcixcXG4uay1idG4uay1sb2FkaW5nLmstZGFuZ2VyOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZWEyYTI7XFxuICBjb2xvcjogI2ZmZjtcXG4gIGJvcmRlci1jb2xvcjogI2ZlYTJhMjtcXG59XFxuLmstYnRuLmstbG9hZGluZy5rLWFjdGl2ZSxcXG4uay1idG4uay1sb2FkaW5nLmstYWN0aXZlOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM5NGNkZjk7XFxuICBjb2xvcjogI2ZmZjtcXG4gIGJvcmRlci1jb2xvcjogIzk0Y2RmOTtcXG59XFxuLmstYnRuLmstbG9hZGluZzpub3QoLmstYnRuLWljb24pOm5vdCguay1pY29uLWxlZnQpOm5vdCguay1pY29uLXJpZ2h0KSB7XFxuICBwYWRkaW5nLWxlZnQ6IDMuMjg1NzE0Mjg1NzE0Mjg2ZW07XFxufVxcbi5rLWJ0bi5rLWxvYWRpbmc6bm90KC5rLWJ0bi1pY29uKTpub3QoLmstaWNvbi1sZWZ0KTpub3QoLmstaWNvbi1yaWdodCkgLmljb24tbG9hZGluZyB7XFxuICBtYXJnaW4tbGVmdDogLTFlbTtcXG59XFxuLmstYnRuLmstbG9hZGluZzpub3QoLmstYnRuLWljb24pOm5vdCguay1pY29uLWxlZnQpOm5vdCguay1pY29uLXJpZ2h0KS5rLXNtYWxsIHtcXG4gIHBhZGRpbmctbGVmdDogMi4wNzE0Mjg1NzE0Mjg1NzFlbTtcXG59XFxuLmstYnRuLmstbG9hZGluZzpub3QoLmstYnRuLWljb24pOm5vdCguay1pY29uLWxlZnQpOm5vdCguay1pY29uLXJpZ2h0KS5rLW1pbmkge1xcbiAgcGFkZGluZy1sZWZ0OiAxLjcxNDI4NTcxNDI4NTcxNGVtO1xcbn1cXG4uay1idG5zIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxufVxcbi5rLWJ0bnMgLmstYnRuIHtcXG4gIG1hcmdpbjogMCAhaW1wb3J0YW50O1xcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXG59XFxuLmstYnRucyAuay1idG46aG92ZXIge1xcbiAgei1pbmRleDogMTtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuLmstYnRucy5rLWZsdWlkIHtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG4uay1idG5zOm5vdCguay12ZXJ0aWNhbCkgPiAuay1idG46bm90KDpmaXJzdC1vZi10eXBlKSB7XFxuICBtYXJnaW4tbGVmdDogLTFweCAhaW1wb3J0YW50O1xcbn1cXG4uay1idG5zOm5vdCguay12ZXJ0aWNhbCkgPiAuay1idG46bm90KDpmaXJzdC1vZi10eXBlKTpub3QoOmxhc3Qtb2YtdHlwZSkge1xcbiAgYm9yZGVyLXJhZGl1czogMDtcXG59XFxuLmstYnRuczpub3QoLmstdmVydGljYWwpID4gLmstYnRuOm5vdCg6b25seS1vZi10eXBlKTpmaXJzdC1vZi10eXBlIHtcXG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAwO1xcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDA7XFxufVxcbi5rLWJ0bnM6bm90KC5rLXZlcnRpY2FsKSA+IC5rLWJ0bjpub3QoOm9ubHktb2YtdHlwZSk6bGFzdC1vZi10eXBlIHtcXG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDA7XFxuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAwO1xcbn1cXG4uay1idG5zOm5vdCguay12ZXJ0aWNhbCkgPiAuay1idG4uay1wcmltYXJ5Om5vdCg6Zmlyc3Qtb2YtdHlwZSkge1xcbiAgYm9yZGVyLWxlZnQtY29sb3I6ICMxODkyZjM7XFxufVxcbi5rLWJ0bnM6bm90KC5rLXZlcnRpY2FsKSA+IC5rLWJ0bi5rLXByaW1hcnk6bm90KDpsYXN0LW9mLXR5cGUpIHtcXG4gIGJvcmRlci1yaWdodC1jb2xvcjogIzE4OTJmMztcXG59XFxuLmstYnRuczpub3QoLmstdmVydGljYWwpID4gLmstYnRuLmstd2FybmluZzpub3QoOmZpcnN0LW9mLXR5cGUpIHtcXG4gIGJvcmRlci1sZWZ0LWNvbG9yOiAjZmY5NDE2O1xcbn1cXG4uay1idG5zOm5vdCguay12ZXJ0aWNhbCkgPiAuay1idG4uay13YXJuaW5nOm5vdCg6bGFzdC1vZi10eXBlKSB7XFxuICBib3JkZXItcmlnaHQtY29sb3I6ICNmZjk0MTY7XFxufVxcbi5rLWJ0bnM6bm90KC5rLXZlcnRpY2FsKSA+IC5rLWJ0bi5rLWRhbmdlcjpub3QoOmZpcnN0LW9mLXR5cGUpIHtcXG4gIGJvcmRlci1sZWZ0LWNvbG9yOiAjZmUzMTMxO1xcbn1cXG4uay1idG5zOm5vdCguay12ZXJ0aWNhbCkgPiAuay1idG4uay1kYW5nZXI6bm90KDpsYXN0LW9mLXR5cGUpIHtcXG4gIGJvcmRlci1yaWdodC1jb2xvcjogI2ZlMzEzMTtcXG59XFxuLmstYnRuczpub3QoLmstdmVydGljYWwpID4gLmstYnRuLmstYWN0aXZlOm5vdCg6Zmlyc3Qtb2YtdHlwZSkge1xcbiAgYm9yZGVyLWxlZnQtY29sb3I6IDtcXG59XFxuLmstYnRuczpub3QoLmstdmVydGljYWwpID4gLmstYnRuLmstYWN0aXZlOm5vdCg6bGFzdC1vZi10eXBlKSB7XFxuICBib3JkZXItcmlnaHQtY29sb3I6IDtcXG59XFxuLmstYnRuczpub3QoLmstdmVydGljYWwpLmstZmx1aWQge1xcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XFxuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcbi5rLWJ0bnM6bm90KC5rLXZlcnRpY2FsKS5rLWZsdWlkID4gLmstYnRuIHtcXG4gIC13ZWJraXQtYm94LWZsZXg6IDE7XFxuICAgICAgLW1zLWZsZXg6IDE7XFxuICAgICAgICAgIGZsZXg6IDE7XFxufVxcbi5rLWJ0bnMuay12ZXJ0aWNhbCA+IC5rLWJ0biB7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuLmstYnRucy5rLXZlcnRpY2FsID4gLmstYnRuOm5vdCguay1idG4taWNvbikge1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcbi5rLWJ0bnMuay12ZXJ0aWNhbCA+IC5rLWJ0bjpub3QoOmZpcnN0LW9mLXR5cGUpIHtcXG4gIG1hcmdpbi10b3A6IC0xcHggIWltcG9ydGFudDtcXG59XFxuLmstYnRucy5rLXZlcnRpY2FsID4gLmstYnRuOm5vdCg6Zmlyc3Qtb2YtdHlwZSk6bm90KDpsYXN0LW9mLXR5cGUpIHtcXG4gIGJvcmRlci1yYWRpdXM6IDA7XFxufVxcbi5rLWJ0bnMuay12ZXJ0aWNhbCA+IC5rLWJ0bjpub3QoOm9ubHktb2YtdHlwZSk6Zmlyc3Qtb2YtdHlwZSB7XFxuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAwO1xcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDA7XFxufVxcbi5rLWJ0bnMuay12ZXJ0aWNhbCA+IC5rLWJ0bjpub3QoOm9ubHktb2YtdHlwZSk6bGFzdC1vZi10eXBlIHtcXG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDA7XFxuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMDtcXG59XFxuLmstYnRucy5rLXZlcnRpY2FsID4gLmstYnRuLmstcHJpbWFyeTpub3QoOmZpcnN0LW9mLXR5cGUpIHtcXG4gIGJvcmRlci10b3AtY29sb3I6ICMxODkyZjM7XFxufVxcbi5rLWJ0bnMuay12ZXJ0aWNhbCA+IC5rLWJ0bi5rLXByaW1hcnk6bm90KDpsYXN0LW9mLXR5cGUpIHtcXG4gIGJvcmRlci1ib3R0b20tY29sb3I6ICMxODkyZjM7XFxufVxcbi5rLWJ0bnMuay12ZXJ0aWNhbCA+IC5rLWJ0bi5rLXdhcm5pbmc6bm90KDpmaXJzdC1vZi10eXBlKSB7XFxuICBib3JkZXItdG9wLWNvbG9yOiAjZmY5NDE2O1xcbn1cXG4uay1idG5zLmstdmVydGljYWwgPiAuay1idG4uay13YXJuaW5nOm5vdCg6bGFzdC1vZi10eXBlKSB7XFxuICBib3JkZXItYm90dG9tLWNvbG9yOiAjZmY5NDE2O1xcbn1cXG4uay1idG5zLmstdmVydGljYWwgPiAuay1idG4uay1kYW5nZXI6bm90KDpmaXJzdC1vZi10eXBlKSB7XFxuICBib3JkZXItdG9wLWNvbG9yOiAjZmUzMTMxO1xcbn1cXG4uay1idG5zLmstdmVydGljYWwgPiAuay1idG4uay1kYW5nZXI6bm90KDpsYXN0LW9mLXR5cGUpIHtcXG4gIGJvcmRlci1ib3R0b20tY29sb3I6ICNmZTMxMzE7XFxufVxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXI/e1widXJsXCI6dHJ1ZX0hLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvbGliP3tcInBsdWdpbnNcIjpbbnVsbF19IS4vbm9kZV9tb2R1bGVzL3N0eWx1cy1sb2FkZXI/e1wiaW5jbHVkZSBjc3NcIjp0cnVlLFwic291cmNlTWFwXCI6ZmFsc2UsXCJpbXBvcnRcIjpcIi9ob21lL2phdmV5L1dvcmtzcGFjZS9rcGMvc3R5bGVzL3RoZW1lcy9rc3l1bi9pbmRleC5zdHlsXCJ9IS4vY29tcG9uZW50cy9idXR0b24vaW5kZXguc3R5bFxuLy8gbW9kdWxlIGlkID0gLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz97XCJ1cmxcIjp0cnVlfSEuL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9saWIvaW5kZXguanM/e1wicGx1Z2luc1wiOltudWxsXX0hLi9ub2RlX21vZHVsZXMvc3R5bHVzLWxvYWRlci9pbmRleC5qcz97XCJpbmNsdWRlIGNzc1wiOnRydWUsXCJzb3VyY2VNYXBcIjpmYWxzZSxcImltcG9ydFwiOlwiL2hvbWUvamF2ZXkvV29ya3NwYWNlL2twYy9zdHlsZXMvdGhlbWVzL2tzeXVuL2luZGV4LnN0eWxcIn0hLi9jb21wb25lbnRzL2J1dHRvbi9pbmRleC5zdHlsXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikodW5kZWZpbmVkKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5kb2N1bWVudC1wYWdlIHtcXG4gIHBhZGRpbmctdG9wOiA5NXB4O1xcbiAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG4uZG9jdW1lbnQtcGFnZSAuY29udGVudC13cmFwcGVyLmZpeGVkIHtcXG4gIG1hcmdpbi1ib3R0b206IDA7XFxufVxcbi5kb2N1bWVudC1wYWdlIC5jb250ZW50LXdyYXBwZXIuZml4ZWQgYXNpZGUge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgdG9wOiA4MHB4O1xcbiAgYmFja2dyb3VuZDogI2ZmZjtcXG4gIGhlaWdodDogY2FsYygxMDAlIC0gODBweCk7XFxuICBvdmVyZmxvdzogYXV0bztcXG4gIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuLmRvY3VtZW50LXBhZ2UgLmNvbnRlbnQtd3JhcHBlci5maXhlZCBhcnRpY2xlIHtcXG4gIG1hcmdpbi1sZWZ0OiAyMDBweDtcXG59XFxuLmRvY3VtZW50LXBhZ2UgLmNvbnRlbnQtd3JhcHBlciB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYmFja2dyb3VuZDogI2ZmZjtcXG4gIG1hcmdpbjogMCBhdXRvO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDFweCAxcHggcmdiYSgwLDAsMCwwLjA4KTtcXG4gICAgICAgICAgYm94LXNoYWRvdzogMCAxcHggMXB4IHJnYmEoMCwwLDAsMC4wOCk7XFxuICBtaW4taGVpZ2h0OiBjYWxjKDEwMCUgLSAxNXB4KTtcXG59XFxuLmRvY3VtZW50LXBhZ2UgLmNvbnRlbnQtd3JhcHBlciBhc2lkZSB7XFxuICB3aWR0aDogMjAwcHg7XFxuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjZWVlO1xcbn1cXG4uZG9jdW1lbnQtcGFnZSAuY29udGVudC13cmFwcGVyIC5hc2lkZS13cmFwcGVyIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuLmRvY3VtZW50LXBhZ2UgLmNvbnRlbnQtd3JhcHBlciAuYXNpZGUtd3JhcHBlciBoNSB7XFxuICBmb250LXNpemU6IDE2cHg7XFxuICBtYXJnaW46IDI1cHggMCAxNXB4IDIwcHg7XFxuICBjb2xvcjogIzk5OTtcXG59XFxuLmRvY3VtZW50LXBhZ2UgLmNvbnRlbnQtd3JhcHBlciAuYXNpZGUtd3JhcHBlciB1bCB7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG59XFxuLmRvY3VtZW50LXBhZ2UgLmNvbnRlbnQtd3JhcHBlciAuYXNpZGUtd3JhcHBlciBhIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgaGVpZ2h0OiAzMHB4O1xcbiAgbGluZS1oZWlnaHQ6IDMwcHg7XFxuICBwYWRkaW5nLWxlZnQ6IDI1cHg7XFxuICBjb2xvcjogIzMzMztcXG59XFxuLmRvY3VtZW50LXBhZ2UgLmNvbnRlbnQtd3JhcHBlciAuYXNpZGUtd3JhcHBlciBhOmhvdmVyIHtcXG4gIGJhY2tncm91bmQ6ICNmM2YzZjM7XFxufVxcbi5kb2N1bWVudC1wYWdlIC5jb250ZW50LXdyYXBwZXIgLmFzaWRlLXdyYXBwZXIgLmFjdGl2ZSA+IGEge1xcbiAgY29sb3I6ICNmZTQ0NDQ7XFxufVxcbi5kb2N1bWVudC1wYWdlIC5jb250ZW50LXdyYXBwZXIgLmFzaWRlLXdyYXBwZXIgLnN1Yi1jYXRhbG9ncyB7XFxuICBtYXJnaW4tbGVmdDogMTBweDtcXG4gIGZvbnQtc2l6ZTogMTJweDtcXG59XFxuLmRvY3VtZW50LXBhZ2UgLmNvbnRlbnQtd3JhcHBlciAuYXNpZGUtd3JhcHBlciAuYXNpZGUtYm9yZGVyIHtcXG4gIGJvcmRlci1yaWdodDogMnB4IHNvbGlkICNmZTQ0NDQ7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICByaWdodDogMDtcXG4gIHRvcDogMDtcXG59XFxuLmRvY3VtZW50LXBhZ2UgLmNvbnRlbnQtd3JhcHBlciBhcnRpY2xlIHtcXG4gIC13ZWJraXQtYm94LWZsZXg6IDE7XFxuICAgICAgLW1zLWZsZXg6IDE7XFxuICAgICAgICAgIGZsZXg6IDE7XFxuICBwYWRkaW5nOiAxMHB4IDIwcHg7XFxuICBvdmVyZmxvdzogYXV0bztcXG59XFxuLmRvY3VtZW50LXBhZ2UgLmNvbnRlbnQtd3JhcHBlciAuYXJ0aWNsZS1oZWFkIC50aXRsZSB7XFxuICBwYWRkaW5nOiAxMHB4IDA7XFxuICBmb250LXNpemU6IDIuMmVtO1xcbiAgY29sb3I6ICMwMDA7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxufVxcbi5kb2N1bWVudC1wYWdlIC5jb250ZW50LXdyYXBwZXIgLmFydGljbGUtaGVhZCAuZWRpdC1saW5rIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xcbiAgY29sb3I6ICM5OTk7XFxuICBmb250LXN0eWxlOiBpdGFsaWM7XFxufVxcbi5kb2N1bWVudC1wYWdlIC5jb250ZW50LXdyYXBwZXIgYXJ0aWNsZSBoMSB7XFxuICBwYWRkaW5nOiAxMHB4IDA7XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2VlZTtcXG4gIG1hcmdpbjogMjBweCAwO1xcbn1cXG4uZG9jdW1lbnQtcGFnZSAuY29udGVudC13cmFwcGVyIGFydGljbGUgaDIsXFxuLmRvY3VtZW50LXBhZ2UgLmNvbnRlbnQtd3JhcHBlciBhcnRpY2xlIGgzIHtcXG4gIHBhZGRpbmc6IDEwcHggMDtcXG4gIG1hcmdpbjogMTVweCAwO1xcbn1cXG4uZG9jdW1lbnQtcGFnZSAuY29udGVudC13cmFwcGVyIGFydGljbGUgcCB7XFxuICBsaW5lLWhlaWdodDogMjVweDtcXG59XFxuLmRvY3VtZW50LXBhZ2UgLmNvbnRlbnQtd3JhcHBlciBhcnRpY2xlIC5vdXRwdXQge1xcbiAgcGFkZGluZzogMjBweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNlZWU7XFxuICBtYXJnaW46IDIwcHggMDtcXG59XFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlcj97XCJ1cmxcIjp0cnVlfSEuL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9saWI/e1wicGx1Z2luc1wiOltudWxsXX0hLi9ub2RlX21vZHVsZXMvc3R5bHVzLWxvYWRlcj97XCJpbmNsdWRlIGNzc1wiOnRydWUsXCJzb3VyY2VNYXBcIjpmYWxzZSxcImltcG9ydFwiOlwiL2hvbWUvamF2ZXkvV29ya3NwYWNlL2twYy9zdHlsZXMvdGhlbWVzL2tzeXVuL2luZGV4LnN0eWxcIn0hLi9zaXRlL3BhZ2VzL2RvY3VtZW50L2luZGV4LnN0eWxcbi8vIG1vZHVsZSBpZCA9IC4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/e1widXJsXCI6dHJ1ZX0hLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvbGliL2luZGV4LmpzP3tcInBsdWdpbnNcIjpbbnVsbF19IS4vbm9kZV9tb2R1bGVzL3N0eWx1cy1sb2FkZXIvaW5kZXguanM/e1wiaW5jbHVkZSBjc3NcIjp0cnVlLFwic291cmNlTWFwXCI6ZmFsc2UsXCJpbXBvcnRcIjpcIi9ob21lL2phdmV5L1dvcmtzcGFjZS9rcGMvc3R5bGVzL3RoZW1lcy9rc3l1bi9pbmRleC5zdHlsXCJ9IS4vc2l0ZS9wYWdlcy9kb2N1bWVudC9pbmRleC5zdHlsXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikodW5kZWZpbmVkKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5obGpzIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgb3ZlcmZsb3cteDogYXV0bztcXG4gIGNvbG9yOiAjNTI1MjUyO1xcbiAgcGFkZGluZzogMTVweDtcXG4gIC13ZWJraXQtdGV4dC1zaXplLWFkanVzdDogbm9uZTtcXG4gIG1hcmdpbjogMDtcXG59XFxuLmhsanMtZG9jdHlwZSB7XFxuICBjb2xvcjogIzk5OTtcXG59XFxuLmhsanMtdGFnIHtcXG4gIGNvbG9yOiAjM2U3NmY2O1xcbn1cXG4uaGxqcy1hdHRyaWJ1dGUge1xcbiAgY29sb3I6ICNlOTY5MDA7XFxufVxcbi5obGpzLXZhbHVlIHtcXG4gIGNvbG9yOiAjNDJiOTgzO1xcbn1cXG4uaGxqcy1rZXl3b3JkIHtcXG4gIGNvbG9yOiAjZTk2OTAwO1xcbn1cXG4uaGxqcy1zdHJpbmcge1xcbiAgY29sb3I6ICM0MmI5ODM7XFxufVxcbi5obGpzLWNvbW1lbnQge1xcbiAgY29sb3I6ICNiM2IzYjM7XFxufVxcbi5obGpzLW9wZXJhdG9yIC5obGpzLWNvbW1lbnQge1xcbiAgY29sb3I6ICM1MjUyNTI7XFxufVxcbi5obGpzLXJlZ2V4cCB7XFxuICBjb2xvcjogI2FmN2RmZjtcXG59XFxuLmhsanMtYnVpbHRfaW4ge1xcbiAgY29sb3I6ICMyZGI3ZjU7XFxufVxcbi5jc3MgLmhsanMtY2xhc3Mge1xcbiAgY29sb3I6ICNlOTY5MDA7XFxufVxcbi5jc3MgLmhsanMtbnVtYmVyLFxcbi5qYXZhc2NyaXB0IC5obGpzLW51bWJlciB7XFxuICBjb2xvcjogI2ZjMWU3MDtcXG59XFxuLmNzcyAuaGxqcy1hdHRyaWJ1dGUge1xcbiAgY29sb3I6ICNhZjdkZmY7XFxufVxcbi5jc3MgLmhsanMtaW1wb3J0YW50IHtcXG4gIGNvbG9yOiAjZDA0O1xcbn1cXG4uYWN0aW9uc2NyaXB0IC5obGpzLWxpdGVyYWwsXFxuLmphdmFzY3JpcHQgLmhsanMtbGl0ZXJhbCB7XFxuICBjb2xvcjogI2ZjMWU3MDtcXG59XFxucHJlIHtcXG4gIHBhZGRpbmc6IDA7XFxuICBtYXJnaW46IDA7XFxufVxcbmNvZGUge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgYmFja2dyb3VuZDogI2Y3ZjdmNztcXG4gIGZvbnQtZmFtaWx5OiBDb25zb2xhcywgTW9uYWNvLCBBbmRhbGUgTW9ubywgVWJ1bnR1IE1vbm8sIG1vbm9zcGFjZTtcXG4gIG1hcmdpbjogM3B4O1xcbiAgcGFkZGluZzogMXB4IDVweDtcXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcXG4gIGNvbG9yOiAjNjY2O1xcbiAgYm9yZGVyOiAxcHggc29saWQgI2VlZTtcXG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xcbn1cXG5odG1sLFxcbmJvZHkge1xcbiAgbWFyZ2luOiAwO1xcbiAgY29sb3I6ICMzMzM7XFxuICBiYWNrZ3JvdW5kOiAjZWZlZmVmO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5hIHtcXG4gIGNvbG9yOiAjMmQ4Y2YwO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5oMSxcXG5oMixcXG5oMyxcXG5oNCxcXG5oNSB7XFxuICBtYXJnaW46IDA7XFxuICBmb250LXdlaWdodDogbm9ybWFsO1xcbiAgY29sb3I6ICMwMDA7XFxufVxcbmgxIHtcXG4gIGZvbnQtc2l6ZTogMmVtO1xcbn1cXG5oMiB7XFxuICBmb250LXNpemU6IDEuOGVtO1xcbn1cXG5oMyB7XFxuICBmb250LXNpemU6IDEuNWVtO1xcbn1cXG5jb2RlIHtcXG4gIGNvbG9yOiAjYzcyNTRlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y5ZjJmNDtcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gIHBhZGRpbmc6IDAgNXB4O1xcbn1cXG5ibG9ja3F1b3RlIHtcXG4gIG1hcmdpbjogMWVtIDA7XFxuICBwYWRkaW5nOiAxcHggMmVtO1xcbiAgYmFja2dyb3VuZDogI2Y4ZjhmODtcXG4gIGJvcmRlci1yYWRpdXM6IDAgM3B4IDNweCAwO1xcbiAgYm9yZGVyLWxlZnQ6IDJweCBzb2xpZCAjZmU0NDQ0O1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5ibG9ja3F1b3RlOmJlZm9yZSB7XFxuICBjb250ZW50OiAnISc7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogNTAlO1xcbiAgbWFyZ2luLXRvcDogLTEwcHg7XFxuICB3aWR0aDogMjBweDtcXG4gIGhlaWdodDogMjBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kOiAjZmU0NDQ0O1xcbiAgY29sb3I6ICNmZmY7XFxuICBsaW5lLWhlaWdodDogMjBweDtcXG4gIGxlZnQ6IC0xMXB4O1xcbn1cXG4jcGFnZSxcXG4uYXBwLXdyYXBwZXIsXFxuLm1haW4td3JhcHBlciB7XFxuICBoZWlnaHQ6IDEwMCU7XFxufVxcbi5oZWFkZXItd3JhcHBlciB7XFxuICBoZWlnaHQ6IDgwcHg7XFxuICBsaW5lLWhlaWdodDogODBweDtcXG4gIC13ZWJraXQtYm94LXNoYWRvdzogMCAycHggNXB4IHJnYmEoMCwwLDAsMC4wOCk7XFxuICAgICAgICAgIGJveC1zaGFkb3c6IDAgMnB4IDVweCByZ2JhKDAsMCwwLDAuMDgpO1xcbiAgYmFja2dyb3VuZDogI2ZmZjtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgdG9wOiAwO1xcbiAgei1pbmRleDogOTk5O1xcbn1cXG4uaGVhZGVyLXdyYXBwZXIgaGVhZGVyIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgbWFyZ2luOiAwIGF1dG87XFxufVxcbi5oZWFkZXItd3JhcHBlciAubG9nbyB7XFxuICBmb250LXNpemU6IDI0cHg7XFxuICBjb2xvcjogIzMzMztcXG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xcbn1cXG4uaGVhZGVyLXdyYXBwZXIgbmF2IHtcXG4gIGZsb2F0OiByaWdodDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuLmhlYWRlci13cmFwcGVyIG5hdiBhIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIHBhZGRpbmc6IDAgMjBweDtcXG4gIGNvbG9yOiAjMzMzO1xcbn1cXG4uaGVhZGVyLXdyYXBwZXIgbmF2IGEuYWN0aXZlIHtcXG4gIGNvbG9yOiAjZmU0NDQ0O1xcbn1cXG4uaGVhZGVyLXdyYXBwZXIgLmJvcmRlciB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBib3R0b206IDA7XFxuICBib3JkZXItYm90dG9tOiAycHggc29saWQgI2ZlNDQ0NDtcXG59XFxuLnRyYW5zaXRpb24ge1xcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMzUwbXMgY3ViaWMtYmV6aWVyKDAuNTUsIDAsIDAuMSwgMSk7XFxuICB0cmFuc2l0aW9uOiBhbGwgMzUwbXMgY3ViaWMtYmV6aWVyKDAuNTUsIDAsIDAuMSwgMSk7XFxufVxcbi5ibHVlIHtcXG4gIGNvbG9yOiAjMDlkO1xcbn1cXG4ucmVkIHtcXG4gIGNvbG9yOiAjZDA0O1xcbn1cXG4ueWVsbG93IHtcXG4gIGNvbG9yOiAjZmZjNDAwO1xcbn1cXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyP3tcInVybFwiOnRydWV9IS4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2xpYj97XCJwbHVnaW5zXCI6W251bGxdfSEuL25vZGVfbW9kdWxlcy9zdHlsdXMtbG9hZGVyP3tcImluY2x1ZGUgY3NzXCI6dHJ1ZSxcInNvdXJjZU1hcFwiOmZhbHNlLFwiaW1wb3J0XCI6XCIvaG9tZS9qYXZleS9Xb3Jrc3BhY2Uva3BjL3N0eWxlcy90aGVtZXMva3N5dW4vaW5kZXguc3R5bFwifSEuL3NpdGUvcGFnZXMvbGF5b3V0LnN0eWxcbi8vIG1vZHVsZSBpZCA9IC4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/e1widXJsXCI6dHJ1ZX0hLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvbGliL2luZGV4LmpzP3tcInBsdWdpbnNcIjpbbnVsbF19IS4vbm9kZV9tb2R1bGVzL3N0eWx1cy1sb2FkZXIvaW5kZXguanM/e1wiaW5jbHVkZSBjc3NcIjp0cnVlLFwic291cmNlTWFwXCI6ZmFsc2UsXCJpbXBvcnRcIjpcIi9ob21lL2phdmV5L1dvcmtzcGFjZS9rcGMvc3R5bGVzL3RoZW1lcy9rc3l1bi9pbmRleC5zdHlsXCJ9IS4vc2l0ZS9wYWdlcy9sYXlvdXQuc3R5bFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKiFcbiAqIERldGVybWluZSBpZiBhbiBvYmplY3QgaXMgYSBCdWZmZXJcbiAqXG4gKiBAYXV0aG9yICAgRmVyb3NzIEFib3VraGFkaWplaCA8ZmVyb3NzQGZlcm9zcy5vcmc+IDxodHRwOi8vZmVyb3NzLm9yZz5cbiAqIEBsaWNlbnNlICBNSVRcbiAqL1xuXG4vLyBUaGUgX2lzQnVmZmVyIGNoZWNrIGlzIGZvciBTYWZhcmkgNS03IHN1cHBvcnQsIGJlY2F1c2UgaXQncyBtaXNzaW5nXG4vLyBPYmplY3QucHJvdG90eXBlLmNvbnN0cnVjdG9yLiBSZW1vdmUgdGhpcyBldmVudHVhbGx5XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChvYmopIHtcbiAgcmV0dXJuIG9iaiAhPSBudWxsICYmIChpc0J1ZmZlcihvYmopIHx8IGlzU2xvd0J1ZmZlcihvYmopIHx8ICEhb2JqLl9pc0J1ZmZlcilcbn1cblxuZnVuY3Rpb24gaXNCdWZmZXIgKG9iaikge1xuICByZXR1cm4gISFvYmouY29uc3RydWN0b3IgJiYgdHlwZW9mIG9iai5jb25zdHJ1Y3Rvci5pc0J1ZmZlciA9PT0gJ2Z1bmN0aW9uJyAmJiBvYmouY29uc3RydWN0b3IuaXNCdWZmZXIob2JqKVxufVxuXG4vLyBGb3IgTm9kZSB2MC4xMCBzdXBwb3J0LiBSZW1vdmUgdGhpcyBldmVudHVhbGx5LlxuZnVuY3Rpb24gaXNTbG93QnVmZmVyIChvYmopIHtcbiAgcmV0dXJuIHR5cGVvZiBvYmoucmVhZEZsb2F0TEUgPT09ICdmdW5jdGlvbicgJiYgdHlwZW9mIG9iai5zbGljZSA9PT0gJ2Z1bmN0aW9uJyAmJiBpc0J1ZmZlcihvYmouc2xpY2UoMCwgMCkpXG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9pcy1idWZmZXIvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IC4vbm9kZV9tb2R1bGVzL2lzLWJ1ZmZlci9pbmRleC5qc1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgbWFwID0ge1xuXHRcIi4vY29tcG9uZW50cy9idXR0b24vaW5kZXguanNvblwiOiBcIi4vc2l0ZS9jb21wb25lbnRzL2J1dHRvbi9pbmRleC5qc29uXCIsXG5cdFwiLi9jb21wb25lbnRzL2RpYWxvZy9pbmRleC5qc29uXCI6IFwiLi9zaXRlL2NvbXBvbmVudHMvZGlhbG9nL2luZGV4Lmpzb25cIlxufTtcbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0KHJlcSkge1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyh3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSk7XG59O1xuZnVuY3Rpb24gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSkge1xuXHR2YXIgaWQgPSBtYXBbcmVxXTtcblx0aWYoIShpZCArIDEpKSAvLyBjaGVjayBmb3IgbnVtYmVyIG9yIHN0cmluZ1xuXHRcdHRocm93IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIicuXCIpO1xuXHRyZXR1cm4gaWQ7XG59O1xud2VicGFja0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0S2V5cygpIHtcblx0cmV0dXJuIE9iamVjdC5rZXlzKG1hcCk7XG59O1xud2VicGFja0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZTtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0NvbnRleHQ7XG53ZWJwYWNrQ29udGV4dC5pZCA9IFwiLi9zaXRlIHJlY3Vyc2l2ZSBeXFxcXC5cXFxcLy4qXFxcXC9pbmRleFxcXFwuanNvbiRcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NpdGUgXlxcLlxcLy4qXFwvaW5kZXhcXC5qc29uJFxuLy8gbW9kdWxlIGlkID0gLi9zaXRlIHJlY3Vyc2l2ZSBeXFwuXFwvLipcXC9pbmRleFxcLmpzb24kXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0ge1wic2V0dGluZ1wiOntcInRpdGxlXCI6XCLmjInpkq5cIixcImNhdGVnb3J5XCI6XCLnu4Tku7ZcIixcIm9yZGVyXCI6MH0sXCJjYXRhbG9nc1wiOltdLFwiY29udGVudHNcIjpcIjxoMSBpZD0naGVhZGVyLSVFNyVBNCVCQSVFNCVCRSU4Qic+56S65L6LPC9oMT48cHJlPjxjb2RlIGNsYXNzPVxcXCJobGpzIGpzXFxcIj5jb25zb2xlLjxzcGFuIGNsYXNzPVxcXCJobGpzLWJ1aWx0X2luXFxcIj5sb2c8L3NwYW4+KDxzcGFuIGNsYXNzPVxcXCJobGpzLW51bWJlclxcXCI+MTwvc3Bhbj4pO1xcbjwvY29kZT48L3ByZT5cXG5cIixcImNvZGVzXCI6W3tcImxhbmd1YWdlXCI6XCJqc1wiLFwiY29udGVudFwiOlwiY29uc29sZS5sb2coMSk7XCJ9XSxcInNpZGVCYXJzXCI6e1wi57uE5Lu2XCI6W3tcInRpdGxlXCI6XCLmjInpkq5cIixcInBhdGhcIjpcImNvbXBvbmVudHMvYnV0dG9uL2luZGV4Lm1kXCIsXCJjaGlsZHJlblwiOlt7XCJ0aXRsZVwiOlwi56S65L6LXCIsXCJwYXRoXCI6XCIjaGVhZGVyLSVFNyVBNCVCQSVFNCVCRSU4QlwiLFwibGV2ZWxcIjoxLFwiY29udGVudFwiOlwiPGgxIGlkPSdoZWFkZXItJUU3JUE0JUJBJUU0JUJFJThCJz7npLrkvos8L2gxPlwiLFwidGV4dFwiOlwi56S65L6LXCIsXCJjaGlsZHJlblwiOltdfV19XX19XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zaXRlL2NvbXBvbmVudHMvYnV0dG9uL2luZGV4Lmpzb25cbi8vIG1vZHVsZSBpZCA9IC4vc2l0ZS9jb21wb25lbnRzL2J1dHRvbi9pbmRleC5qc29uXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0ge1wiY2F0YWxvZ3NcIjpbXSxcImNvbnRlbnRzXCI6XCJcIixcImNvZGVzXCI6W10sXCJzaWRlQmFyc1wiOntcIue7hOS7tlwiOlt7XCJ0aXRsZVwiOlwi5oyJ6ZKuXCIsXCJwYXRoXCI6XCJjb21wb25lbnRzL2J1dHRvbi9pbmRleC5tZFwiLFwiY2hpbGRyZW5cIjpbe1widGl0bGVcIjpcIuekuuS+i1wiLFwicGF0aFwiOlwiI2hlYWRlci0lRTclQTQlQkElRTQlQkUlOEJcIixcImxldmVsXCI6MSxcImNvbnRlbnRcIjpcIjxoMSBpZD0naGVhZGVyLSVFNyVBNCVCQSVFNCVCRSU4Qic+56S65L6LPC9oMT5cIixcInRleHRcIjpcIuekuuS+i1wiLFwiY2hpbGRyZW5cIjpbXX1dfV19fVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc2l0ZS9jb21wb25lbnRzL2RpYWxvZy9pbmRleC5qc29uXG4vLyBtb2R1bGUgaWQgPSAuL3NpdGUvY29tcG9uZW50cy9kaWFsb2cvaW5kZXguanNvblxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgSW50YWN0IGZyb20gJ2ludGFjdCc7XG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uL2xheW91dCc7XG5pbXBvcnQgdGVtcGxhdGUgZnJvbSAnLi9pbmRleC52ZHQnO1xuaW1wb3J0ICcuL2luZGV4LnN0eWwnO1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBMYXlvdXQge1xuICAgIEBJbnRhY3QudGVtcGxhdGUoKVxuICAgIHN0YXRpYyB0ZW1wbGF0ZSA9IHRlbXBsYXRlO1xuXG4gICAgYXN5bmMgX2luaXQoKSB7XG4gICAgICAgIGxldCBkYXRhO1xuICAgICAgICBpZiAocHJvY2Vzcy5ub2RlKSB7XG4gICAgICAgICAgICBsZXQgcGF0aCA9IHRoaXMuZ2V0KCdwYXRoJyk7XG4gICAgICAgICAgICBwYXRoID0gcGF0aC50cmltKCcvJyk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhgLi4vLi4vJHtwYXRofS9pbmRleC5qc29uYCk7XG4gICAgICAgICAgICBkYXRhID0gcmVxdWlyZShgLi4vLi4vJHtwYXRofS9pbmRleC5qc29uYCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBkYXRhID0gYXdhaXQgYXhpb3MuZ2V0KGAke3RoaXMuZ2V0KCdwYXRoJyl9aW5kZXguanNvbmApO1xuICAgICAgICAgICAgZGF0YSA9IGRhdGEuZGF0YTtcbiAgICAgICAgfVxuICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcbiAgICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zaXRlL3BhZ2VzL2RvY3VtZW50L2luZGV4LmpzIiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTItMSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTItMiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bHVzLWxvYWRlci9pbmRleC5qcz8/cmVmLS0yLTMhLi9pbmRleC5zdHlsXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4vLyBQcmVwYXJlIGNzc1RyYW5zZm9ybWF0aW9uXG52YXIgdHJhbnNmb3JtO1xuXG52YXIgb3B0aW9ucyA9IHt9XG5vcHRpb25zLnRyYW5zZm9ybSA9IHRyYW5zZm9ybVxuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG5cdC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdGlmKCFjb250ZW50LmxvY2Fscykge1xuXHRcdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz8/cmVmLS0yLTEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0yLTIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWx1cy1sb2FkZXIvaW5kZXguanM/P3JlZi0tMi0zIS4vaW5kZXguc3R5bFwiLCBmdW5jdGlvbigpIHtcblx0XHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tMi0xIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMi0yIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsdXMtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTItMyEuL2luZGV4LnN0eWxcIik7XG5cdFx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblx0XHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0XHR9KTtcblx0fVxuXHQvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc2l0ZS9wYWdlcy9kb2N1bWVudC9pbmRleC5zdHlsXG4vLyBtb2R1bGUgaWQgPSAuL3NpdGUvcGFnZXMvZG9jdW1lbnQvaW5kZXguc3R5bFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgQnV0dG9uIGZyb20gJ2NvbXBvbmVudHMvYnV0dG9uJztcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKG9iaiwgX1ZkdCwgYmxvY2tzLCAkY2FsbGVlKSB7XG5cbl9WZHQgfHwgKF9WZHQgPSBWZHQpO1xub2JqIHx8IChvYmogPSB7fSk7XG5ibG9ja3MgfHwgKGJsb2NrcyA9IHt9KTtcbnZhciBoID0gX1ZkdC5taXNzLmgsIGhjID0gX1ZkdC5taXNzLmhjLCBodSA9IF9WZHQubWlzcy5odSwgd2lkZ2V0cyA9IHRoaXMgJiYgdGhpcy53aWRnZXRzIHx8IHt9LCBfYmxvY2tzID0ge30sIF9fYmxvY2tzID0ge30sXG5fX3UgPSBfVmR0LnV0aWxzLCBleHRlbmQgPSBfX3UuZXh0ZW5kLCBfZSA9IF9fdS5lcnJvciwgX2NsYXNzTmFtZSA9IF9fdS5jbGFzc05hbWUsXG5fX28gPSBfX3UuT3B0aW9ucywgX2dldE1vZGVsID0gX19vLmdldE1vZGVsLCBfc2V0TW9kZWwgPSBfX28uc2V0TW9kZWwsXG5fc2V0Q2hlY2tib3hNb2RlbCA9IF9fdS5zZXRDaGVja2JveE1vZGVsLCBfZGV0ZWN0Q2hlY2tib3hDaGVja2VkID0gX191LmRldGVjdENoZWNrYm94Q2hlY2tlZCxcbl9zZXRTZWxlY3RNb2RlbCA9IF9fdS5zZXRTZWxlY3RNb2RlbCxcbnNlbGYgPSB0aGlzLmRhdGEsIHNjb3BlID0gb2JqLCBBbmltYXRlID0gc2VsZiAmJiBzZWxmLkFuaW1hdGUsIHBhcmVudCA9ICgkY2FsbGVlIHx8IHt9KS5fc3VwZXJcblxuXG5yZXR1cm4gKGZ1bmN0aW9uKCkge1xuICAgIHZhciBfb2JqID0geyduYXZJbmRleCc6ICdkb2N1bWVudCcsICdjbGFzc05hbWUnOiAnZG9jdW1lbnQtcGFnZScsICdjaGlsZHJlbic6IG51bGx9O1xuICAgIGlmIChfb2JqLmhhc093blByb3BlcnR5KFwiYXJndW1lbnRzXCIpKSB7XG4gICAgICAgIGV4dGVuZChfb2JqLCBfb2JqLmFyZ3VtZW50cyA9PT0gdHJ1ZSA/IG9iaiA6IF9vYmouYXJndW1lbnRzKTtcbiAgICAgICAgZGVsZXRlIF9vYmouYXJndW1lbnRzO1xuICAgIH1cbiAgICByZXR1cm4gcGFyZW50LmNhbGwodGhpcywgX29iaiwgX1ZkdCwgZnVuY3Rpb24oYmxvY2tzKSB7XG4gICAgdmFyIF9ibG9ja3MgPSB7fSwgX19ibG9ja3MgPSBleHRlbmQoe30sIGJsb2Nrcyk7XG4gICAgcmV0dXJuIChfYmxvY2tzLmNvbnRlbnQgPSBmdW5jdGlvbihwYXJlbnQpIHtyZXR1cm4gaChCdXR0b24sIHsnY2hpbGRyZW4nOiAnSGVsbG8nLCAnX2NvbnRleHQnOiB0aGlzfSk7fSkgJiYgKF9fYmxvY2tzLmNvbnRlbnQgPSBmdW5jdGlvbihwYXJlbnQpIHtcbnZhciBzZWxmID0gdGhpcztcbnJldHVybiBibG9ja3MuY29udGVudCA/IGJsb2Nrcy5jb250ZW50LmNhbGwodGhpcywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gX2Jsb2Nrcy5jb250ZW50LmNhbGwoc2VsZiwgcGFyZW50KTtcbn0pIDogX2Jsb2Nrcy5jb250ZW50LmNhbGwodGhpcywgcGFyZW50KTtcbn0pICYmIF9fYmxvY2tzO1xufS5jYWxsKHRoaXMsIGJsb2NrcyksIHBhcmVudClcbn0pLmNhbGwodGhpcylcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zaXRlL3BhZ2VzL2RvY3VtZW50L2luZGV4LnZkdCIsImltcG9ydCBJbnRhY3QgZnJvbSAnaW50YWN0JztcbmltcG9ydCB0ZW1wbGF0ZSBmcm9tICcuL2xheW91dC52ZHQnO1xuaW1wb3J0ICcuL2xheW91dC5zdHlsJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBJbnRhY3Qge1xuICAgIEBJbnRhY3QudGVtcGxhdGUoKVxuICAgIHN0YXRpYyB0ZW1wbGF0ZSA9IHRlbXBsYXRlO1xuXG4gICAgX21vdW50KCkge1xuICAgICAgICB0aGlzLiRib3JkZXIgPSB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvcignLmJvcmRlcicpO1xuICAgICAgICB0aGlzLl91cGRhdGVCb3JkZXIoKTtcbiAgICB9XG5cbiAgICBfdXBkYXRlQm9yZGVyKCkge1xuICAgICAgICAvLyBjb25zdCAkbmF2ID0gdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hY3RpdmUnKTtcbiAgICAgICAgLy8gbGV0IHdpZHRoID0gMDtcbiAgICAgICAgLy8gbGV0IGxlZnQgPSAwO1xuICAgICAgICAvLyBpZiAoJG5hdikge1xuICAgICAgICAgICAgLy8gbGVmdCA9ICRuYXYucG9zaXRpb24oKS5sZWZ0O1xuICAgICAgICAgICAgLy8gd2lkdGggPSAkbmF2Lm91dGVyV2lkdGgoKTtcbiAgICAgICAgLy8gfVxuICAgICAgICAvLyB0aGlzLiRib3JkZXIuYWRkQ2xhc3MoJ3RyYW5zaXRpb24nKTtcbiAgICAgICAgLy8gdGhpcy4kYm9yZGVyLmNzcyh7d2lkdGg6IHdpZHRoLCBsZWZ0OiBsZWZ0fSk7XG4gICAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc2l0ZS9wYWdlcy9sYXlvdXQuanMiLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tMi0xIS4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMi0yIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsdXMtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTItMyEuL2xheW91dC5zdHlsXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4vLyBQcmVwYXJlIGNzc1RyYW5zZm9ybWF0aW9uXG52YXIgdHJhbnNmb3JtO1xuXG52YXIgb3B0aW9ucyA9IHt9XG5vcHRpb25zLnRyYW5zZm9ybSA9IHRyYW5zZm9ybVxuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG5cdC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdGlmKCFjb250ZW50LmxvY2Fscykge1xuXHRcdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz8/cmVmLS0yLTEhLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0yLTIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWx1cy1sb2FkZXIvaW5kZXguanM/P3JlZi0tMi0zIS4vbGF5b3V0LnN0eWxcIiwgZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTItMSEuLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTItMiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bHVzLWxvYWRlci9pbmRleC5qcz8/cmVmLS0yLTMhLi9sYXlvdXQuc3R5bFwiKTtcblx0XHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXHRcdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHRcdH0pO1xuXHR9XG5cdC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zaXRlL3BhZ2VzL2xheW91dC5zdHlsXG4vLyBtb2R1bGUgaWQgPSAuL3NpdGUvcGFnZXMvbGF5b3V0LnN0eWxcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IExpbmsgZnJvbSAnY29tcG9uZW50cy9saW5rJztcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKG9iaiwgX1ZkdCwgYmxvY2tzLCAkY2FsbGVlKSB7XG5cbl9WZHQgfHwgKF9WZHQgPSBWZHQpO1xub2JqIHx8IChvYmogPSB7fSk7XG5ibG9ja3MgfHwgKGJsb2NrcyA9IHt9KTtcbnZhciBoID0gX1ZkdC5taXNzLmgsIGhjID0gX1ZkdC5taXNzLmhjLCBodSA9IF9WZHQubWlzcy5odSwgd2lkZ2V0cyA9IHRoaXMgJiYgdGhpcy53aWRnZXRzIHx8IHt9LCBfYmxvY2tzID0ge30sIF9fYmxvY2tzID0ge30sXG5fX3UgPSBfVmR0LnV0aWxzLCBleHRlbmQgPSBfX3UuZXh0ZW5kLCBfZSA9IF9fdS5lcnJvciwgX2NsYXNzTmFtZSA9IF9fdS5jbGFzc05hbWUsXG5fX28gPSBfX3UuT3B0aW9ucywgX2dldE1vZGVsID0gX19vLmdldE1vZGVsLCBfc2V0TW9kZWwgPSBfX28uc2V0TW9kZWwsXG5fc2V0Q2hlY2tib3hNb2RlbCA9IF9fdS5zZXRDaGVja2JveE1vZGVsLCBfZGV0ZWN0Q2hlY2tib3hDaGVja2VkID0gX191LmRldGVjdENoZWNrYm94Q2hlY2tlZCxcbl9zZXRTZWxlY3RNb2RlbCA9IF9fdS5zZXRTZWxlY3RNb2RlbCxcbnNlbGYgPSB0aGlzLmRhdGEsIHNjb3BlID0gb2JqLCBBbmltYXRlID0gc2VsZiAmJiBzZWxmLkFuaW1hdGUsIHBhcmVudCA9ICgkY2FsbGVlIHx8IHt9KS5fc3VwZXJcblxuXG5jb25zdCBuYXYgPSBbXG4gICAge1xuICAgICAgICB0aXRsZTogJ+aVmeeoiycsXG4gICAgICAgIGhyZWY6ICdkb2N1bWVudCdcbiAgICB9LFxuICAgIHtcbiAgICAgICAgdGl0bGU6ICdBUEknLFxuICAgICAgICBocmVmOiAnYXBpJ1xuICAgIH0sXG4gICAgLy8ge1xuICAgICAgICAvLyB0aXRsZTogJ+ekuuS+iycsXG4gICAgICAgIC8vIGhyZWY6ICdleGFtcGxlcydcbiAgICAvLyB9XG5dO1xuXG5yZXR1cm4gaCgnZGl2JywgbnVsbCwgW2goJ2RpdicsIG51bGwsIGgoJ2hlYWRlcicsIG51bGwsIChfYmxvY2tzLmhlYWRlciA9IGZ1bmN0aW9uKHBhcmVudCkge3JldHVybiBbaChMaW5rLCB7J2NsYXNzTmFtZSc6ICdsb2dvJywgJ2hyZWYnOiAnLycsICdjaGlsZHJlbic6ICdLUEMnLCAnX2NvbnRleHQnOiB0aGlzfSksIGgoJ25hdicsIG51bGwsIFtfVmR0LnV0aWxzLm1hcChmdW5jdGlvbigpIHt0cnkge3JldHVybiBbbmF2IF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcyksIGZ1bmN0aW9uKHZhbHVlLCBrZXkpIHtcbnJldHVybiBoKExpbmssIHsnY2xhc3NOYW1lJzogX2NsYXNzTmFtZShmdW5jdGlvbigpIHt0cnkge3JldHVybiBbe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjdGl2ZTogdmFsdWUuaHJlZiA9PT0gc2NvcGUubmF2SW5kZXhcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKSksICdocmVmJzogZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW2AvJHt2YWx1ZS5ocmVmfWAgXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKSwgJ2NoaWxkcmVuJzogZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW3ZhbHVlLnRpdGxlIF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcyksICdfY29udGV4dCc6IHRoaXN9KTtcbn0sIHRoaXMpLCBoKCdkaXYnLCBudWxsLCBudWxsLCAnYm9yZGVyJyldKV07fSkgJiYgKF9fYmxvY2tzLmhlYWRlciA9IGZ1bmN0aW9uKHBhcmVudCkge1xudmFyIHNlbGYgPSB0aGlzO1xucmV0dXJuIGJsb2Nrcy5oZWFkZXIgPyBibG9ja3MuaGVhZGVyLmNhbGwodGhpcywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gX2Jsb2Nrcy5oZWFkZXIuY2FsbChzZWxmLCBwYXJlbnQpO1xufSkgOiBfYmxvY2tzLmhlYWRlci5jYWxsKHRoaXMsIHBhcmVudCk7XG59KSAmJiBfX2Jsb2Nrcy5oZWFkZXIuY2FsbCh0aGlzKSksICdoZWFkZXItd3JhcHBlcicpLCBoKCdkaXYnLCBudWxsLCAoX2Jsb2Nrcy5jb250ZW50ID0gZnVuY3Rpb24ocGFyZW50KSB7cmV0dXJuIG51bGw7fSkgJiYgKF9fYmxvY2tzLmNvbnRlbnQgPSBmdW5jdGlvbihwYXJlbnQpIHtcbnZhciBzZWxmID0gdGhpcztcbnJldHVybiBibG9ja3MuY29udGVudCA/IGJsb2Nrcy5jb250ZW50LmNhbGwodGhpcywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gX2Jsb2Nrcy5jb250ZW50LmNhbGwoc2VsZiwgcGFyZW50KTtcbn0pIDogX2Jsb2Nrcy5jb250ZW50LmNhbGwodGhpcywgcGFyZW50KTtcbn0pICYmIF9fYmxvY2tzLmNvbnRlbnQuY2FsbCh0aGlzKSwgJ2NvbnRlbnQtd3JhcHBlcicpXSwgX2NsYXNzTmFtZShmdW5jdGlvbigpIHt0cnkge3JldHVybiBbeydtYWluLXdyYXBwZXInOiB0cnVlLCBbc2NvcGUuY2xhc3NOYW1lXTogc2NvcGUuY2xhc3NOYW1lfSBdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpKSlcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zaXRlL3BhZ2VzL2xheW91dC52ZHQiXSwic291cmNlUm9vdCI6IiJ9