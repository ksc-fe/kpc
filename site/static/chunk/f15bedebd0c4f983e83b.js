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

/***/ "./site/pages recursive ^\\.\\/\\.\\..*\\/index\\.json$":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "./site/pages recursive ^\\.\\/\\.\\..*\\/index\\.json$";

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
                var data;
                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                data = void 0;

                                if (!process.node) {
                                    _context.next = 5;
                                    break;
                                }

                                data = !(function webpackMissingModule() { var e = new Error("Cannot find module \"..\""); e.code = 'MODULE_NOT_FOUND'; throw e; }());
                                _context.next = 9;
                                break;

                            case 5:
                                _context.next = 7;
                                return _axios2.default.get(this.get('path') + 'index.json');

                            case 7:
                                data = _context.sent;

                                data = data.data;

                            case 9:
                                console.log(data);

                            case 10:
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2J1dHRvbi9ncm91cC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2J1dHRvbi9ncm91cC52ZHQiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9idXR0b24vaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9idXR0b24vaW5kZXguc3R5bCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2J1dHRvbi9pbmRleC52ZHQiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy91dGlscy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXhpb3MvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9hZGFwdGVycy94aHIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9heGlvcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NhbmNlbC9DYW5jZWwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jYW5jZWwvQ2FuY2VsVG9rZW4uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jYW5jZWwvaXNDYW5jZWwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jb3JlL0F4aW9zLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY29yZS9JbnRlcmNlcHRvck1hbmFnZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jb3JlL2NyZWF0ZUVycm9yLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY29yZS9kaXNwYXRjaFJlcXVlc3QuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jb3JlL2VuaGFuY2VFcnJvci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NvcmUvc2V0dGxlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY29yZS90cmFuc2Zvcm1EYXRhLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvZGVmYXVsdHMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL2JpbmQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL2J0b2EuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL2J1aWxkVVJMLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9jb21iaW5lVVJMcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvY29va2llcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvaXNBYnNvbHV0ZVVSTC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvaXNVUkxTYW1lT3JpZ2luLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9ub3JtYWxpemVIZWFkZXJOYW1lLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9wYXJzZUhlYWRlcnMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL3NwcmVhZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL3V0aWxzLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvYnV0dG9uL2luZGV4LnN0eWw/NDAxOCIsIndlYnBhY2s6Ly8vLi9zaXRlL3BhZ2VzL2RvY3VtZW50L2luZGV4LnN0eWw/OWJhNyIsIndlYnBhY2s6Ly8vLi9zaXRlL3BhZ2VzL2xheW91dC5zdHlsPzIxMzIiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2lzLWJ1ZmZlci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zaXRlL3BhZ2VzIF5cXC5cXC9cXC5cXC4uKlxcL2luZGV4XFwuanNvbiQiLCJ3ZWJwYWNrOi8vLy4vc2l0ZS9wYWdlcy9kb2N1bWVudC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zaXRlL3BhZ2VzL2RvY3VtZW50L2luZGV4LnN0eWwiLCJ3ZWJwYWNrOi8vLy4vc2l0ZS9wYWdlcy9kb2N1bWVudC9pbmRleC52ZHQiLCJ3ZWJwYWNrOi8vLy4vc2l0ZS9wYWdlcy9sYXlvdXQuanMiLCJ3ZWJwYWNrOi8vLy4vc2l0ZS9wYWdlcy9sYXlvdXQuc3R5bCIsIndlYnBhY2s6Ly8vLi9zaXRlL3BhZ2VzL2xheW91dC52ZHQiXSwibmFtZXMiOlsiQnV0dG9uR3JvdXAiLCJ0ZW1wbGF0ZSIsInZlcnRpY2FsIiwicmFkaW8iLCJ2YWx1ZSIsInVuZGVmaW5lZCIsInByb3BUeXBlcyIsIkJvb2xlYW4iLCJvYmoiLCJfVmR0IiwiYmxvY2tzIiwiJGNhbGxlZSIsIlZkdCIsImgiLCJtaXNzIiwiaGMiLCJodSIsIndpZGdldHMiLCJfYmxvY2tzIiwiX19ibG9ja3MiLCJfX3UiLCJ1dGlscyIsImV4dGVuZCIsIl9lIiwiZXJyb3IiLCJfY2xhc3NOYW1lIiwiY2xhc3NOYW1lIiwiX19vIiwiT3B0aW9ucyIsIl9nZXRNb2RlbCIsImdldE1vZGVsIiwiX3NldE1vZGVsIiwic2V0TW9kZWwiLCJfc2V0Q2hlY2tib3hNb2RlbCIsInNldENoZWNrYm94TW9kZWwiLCJfZGV0ZWN0Q2hlY2tib3hDaGVja2VkIiwiZGV0ZWN0Q2hlY2tib3hDaGVja2VkIiwiX3NldFNlbGVjdE1vZGVsIiwic2V0U2VsZWN0TW9kZWwiLCJzZWxmIiwiZGF0YSIsInNjb3BlIiwiQW5pbWF0ZSIsInBhcmVudCIsIl9zdXBlciIsImdldCIsInN0eWxlIiwiY2hpbGRyZW4iLCJmbHVpZCIsImNsYXNzTmFtZU9iaiIsImUiLCJjYWxsIiwibWFwIiwidk5vZGUiLCJ0YWciLCJwcm9wcyIsIl92YWx1ZSIsIkJ1dHRvbiIsInR5cGUiLCJzaXplIiwiaWNvbiIsImNpcmNsZSIsImxvYWRpbmciLCJkaXNhYmxlZCIsImh0bWxUeXBlIiwidGFnTmFtZSIsIm5hbWUiLCJwYXJlbnRWTm9kZSIsImdyb3VwIiwic2V0IiwidHJpZ2dlciIsIlN0cmluZyIsIkZ1bmN0aW9uIiwicmVmIiwia2V5IiwicmVzdCIsImhyZWYiLCJBcnJheSIsImlzQXJyYXkiLCJmb3JFYWNoIiwiY2hpbGQiLCJpbmRleCIsImluZGV4T2YiLCJsZW5ndGgiLCJfb25DbGljayIsImFkZFN0eWxlIiwia2ViYWJDYXNlIiwicHJveHlFdmVudCIsImlzU3RyaW5nT3JOdW1iZXIiLCJpc1RleHRWTm9kZSIsImlzU3RyaW5nT3JOdW1iZXJOb3RFbXB0eSIsImdldFRleHRCeUNoaWxkcmVuIiwiZmluZFBhcmVudENvbXBvbmVudCIsInN0clBhZCIsInJhbmdlIiwiZXh0cmEiLCJPYmplY3QiLCJrZXlzIiwiam9pbiIsInRlc3QiLCJfY2FjaGUiLCJ1cHBlcmNhc2VQYXR0ZXJuIiwid29yZCIsInJlcGxhY2UiLCJpdGVtIiwidG9Mb3dlckNhc2UiLCJjb21wb25lbnQiLCJvIiwicmV0IiwiaXNPYmplY3QiLCJDb21wb25lbnQiLCJpbnN0YW5jZSIsImlzVW50aWwiLCJzdHIiLCJwYWQiLCJ0b1N0cmluZyIsImwiLCJzdGFydCIsImVuZCIsImFwcGx5IiwidiIsImkiLCJwcm9jZXNzIiwibm9kZSIsImNvbnNvbGUiLCJsb2ciLCJfb2JqIiwiaGFzT3duUHJvcGVydHkiLCJhcmd1bWVudHMiLCJjb250ZW50IiwiJGJvcmRlciIsImVsZW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiX3VwZGF0ZUJvcmRlciIsIm5hdiIsInRpdGxlIiwiaGVhZGVyIiwiYWN0aXZlIiwibmF2SW5kZXgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FB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QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIOzs7Ozs7Ozs7O0FDbkxBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixZQUFZLE1BQU07QUFDbEI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7Ozs7Ozs7O0FDbkRBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxRQUFRO0FBQ25CO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7Ozs7Ozs7O0FDbEJBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxTQUFTO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7O0FDeERBOztBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7O0FDSkE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBLGlEQUFpRCxnQkFBZ0I7QUFDakU7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0RBQWdEO0FBQ2hEO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBLGdEQUFnRDtBQUNoRDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxDQUFDOztBQUVEOzs7Ozs7Ozs7QUM5RUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsU0FBUztBQUNwQixXQUFXLFNBQVM7QUFDcEI7QUFDQSxZQUFZLE9BQU87QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxTQUFTO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTs7Ozs7Ozs7O0FDbkRBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixXQUFXLE9BQU87QUFDbEIsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsT0FBTztBQUNsQixXQUFXLE9BQU87QUFDbEIsYUFBYSxNQUFNO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7OztBQ2pCQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsYUFBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsK0JBQStCO0FBQy9CLHVDQUF1QztBQUN2QztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEdBQUc7QUFDSDs7Ozs7Ozs7O0FDckZBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsTUFBTTtBQUNqQixXQUFXLE9BQU87QUFDbEIsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsT0FBTztBQUNsQixXQUFXLE9BQU87QUFDbEIsYUFBYSxNQUFNO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7QUNwQkE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxTQUFTO0FBQ3BCLFdBQVcsU0FBUztBQUNwQixXQUFXLE9BQU87QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7O0FDekJBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsY0FBYztBQUN6QixXQUFXLE1BQU07QUFDakIsV0FBVyxlQUFlO0FBQzFCLGFBQWEsRUFBRTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7Ozs7Ozs7OzsrQ0NuQkE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3RUFBd0U7QUFDeEU7QUFDQTtBQUNBO0FBQ0EsdURBQXVEO0FBQ3ZEO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU8sWUFBWTtBQUNuQjtBQUNBO0FBQ0EsR0FBRzs7QUFFSDs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBLENBQUM7O0FBRUQ7Ozs7Ozs7Ozs7QUMzRkE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLGlCQUFpQjtBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7QUNWQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7QUNuQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsT0FBTztBQUNsQixhQUFhLE9BQU87QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7QUNuRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsT0FBTztBQUNsQixhQUFhLE9BQU87QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7QUNiQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsd0NBQXdDO0FBQ3hDLE9BQU87O0FBRVA7QUFDQSwwREFBMEQsd0JBQXdCO0FBQ2xGO0FBQ0EsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDO0FBQ2hDLDZCQUE2QixhQUFhLEVBQUU7QUFDNUM7QUFDQTtBQUNBLEdBQUc7QUFDSDs7Ozs7Ozs7O0FDcERBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixhQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7OztBQ2JBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGNBQWMsT0FBTztBQUNyQixnQkFBZ0I7QUFDaEI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxjQUFjLE9BQU87QUFDckIsZ0JBQWdCLFFBQVE7QUFDeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOzs7Ozs7Ozs7QUNuRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOzs7Ozs7Ozs7QUNYQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLGFBQWEsT0FBTztBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUJBQWlCLGVBQWU7O0FBRWhDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7Ozs7Ozs7OztBQ3BEQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCO0FBQy9CO0FBQ0E7QUFDQSxXQUFXLFNBQVM7QUFDcEIsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7O0FDMUJBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLGFBQWEsUUFBUTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsYUFBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixhQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLGFBQWEsUUFBUTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixhQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLGFBQWEsUUFBUTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsYUFBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixhQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLGFBQWEsUUFBUTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsYUFBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixhQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLGFBQWEsUUFBUTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsYUFBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixhQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLGFBQWEsT0FBTztBQUNwQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLGFBQWE7QUFDeEIsV0FBVyxTQUFTO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxtQ0FBbUMsT0FBTztBQUMxQztBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsU0FBUyxHQUFHLFNBQVM7QUFDNUMsMkJBQTJCO0FBQzNCO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsYUFBYSxPQUFPO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUEsdUNBQXVDLE9BQU87QUFDOUM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsT0FBTztBQUNsQixXQUFXLE9BQU87QUFDbEIsWUFBWSxPQUFPO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQzlTQTtBQUNBOzs7QUFHQTtBQUNBLGlDQUFrQyxvQkFBb0IsMEJBQTBCLGlDQUFpQyxrREFBa0QsbUNBQW1DLGtCQUFrQixpQkFBaUIsbUJBQW1CLDJCQUEyQix1QkFBdUIsdUJBQXVCLDhDQUE4QyxzQ0FBc0MsOEJBQThCLG9CQUFvQixHQUFHLGdCQUFnQiwwQkFBMEIsbUJBQW1CLEdBQUcsb0JBQW9CLDhCQUE4QixnQkFBZ0IsMEJBQTBCLEdBQUcsMEJBQTBCLDhCQUE4QiwwQkFBMEIsR0FBRyxvQkFBb0IsOEJBQThCLGdCQUFnQiwwQkFBMEIsR0FBRywwQkFBMEIsOEJBQThCLDBCQUEwQixHQUFHLG1CQUFtQiw4QkFBOEIsZ0JBQWdCLDBCQUEwQixHQUFHLHlCQUF5Qiw4QkFBOEIsMEJBQTBCLEdBQUcsbUJBQW1CLDhCQUE4QixnQkFBZ0IsMEJBQTBCLEdBQUcseUJBQXlCLDhCQUE4QiwwQkFBMEIsR0FBRyw2Q0FBNkMsZ0JBQWdCLDhCQUE4QiwwQkFBMEIsd0JBQXdCLEdBQUcsdUNBQXVDLGlCQUFpQixrQ0FBa0MsR0FBRyxrQkFBa0Isb0NBQW9DLGlDQUFpQyxvQ0FBb0Msa0RBQWtELEdBQUcsNkJBQTZCLGdDQUFnQyxHQUFHLGlCQUFpQixvQ0FBb0MsaUNBQWlDLG9DQUFvQyxrREFBa0QsR0FBRyw0QkFBNEIsZ0NBQWdDLEdBQUcsa0JBQWtCLHVCQUF1QixHQUFHLHlCQUF5Qix1QkFBdUIsR0FBRyx5QkFBeUIscUNBQXFDLEdBQUcsK0JBQStCLHFDQUFxQyxHQUFHLHFCQUFxQixnQ0FBZ0MsZUFBZSxHQUFHLDZCQUE2QixjQUFjLG1DQUFtQyxHQUFHLGtCQUFrQixnQkFBZ0IsZUFBZSxHQUFHLG1CQUFtQix3Q0FBd0MsR0FBRyw2Q0FBNkMsMkJBQTJCLG1CQUFtQiwwQkFBMEIsR0FBRywrQ0FBK0Msa0JBQWtCLEdBQUcsaUVBQWlFLDhCQUE4QixnQkFBZ0IsMEJBQTBCLEdBQUcsaUVBQWlFLDhCQUE4QixnQkFBZ0IsMEJBQTBCLEdBQUcsK0RBQStELDhCQUE4QixnQkFBZ0IsMEJBQTBCLEdBQUcsK0RBQStELDhCQUE4QixnQkFBZ0IsMEJBQTBCLEdBQUcsMEVBQTBFLHNDQUFzQyxHQUFHLHdGQUF3RixzQkFBc0IsR0FBRyxrRkFBa0Ysc0NBQXNDLEdBQUcsaUZBQWlGLHNDQUFzQyxHQUFHLFdBQVcsMEJBQTBCLDJCQUEyQixHQUFHLGtCQUFrQix5QkFBeUIsMkJBQTJCLEdBQUcsd0JBQXdCLGVBQWUsdUJBQXVCLEdBQUcsbUJBQW1CLGdCQUFnQixHQUFHLHlEQUF5RCxpQ0FBaUMsR0FBRyw0RUFBNEUscUJBQXFCLEdBQUcsc0VBQXNFLCtCQUErQixrQ0FBa0MsR0FBRyxxRUFBcUUsOEJBQThCLGlDQUFpQyxHQUFHLG1FQUFtRSwrQkFBK0IsR0FBRyxrRUFBa0UsZ0NBQWdDLEdBQUcsbUVBQW1FLCtCQUErQixHQUFHLGtFQUFrRSxnQ0FBZ0MsR0FBRyxrRUFBa0UsK0JBQStCLEdBQUcsaUVBQWlFLGdDQUFnQyxHQUFHLGtFQUFrRSx3QkFBd0IsR0FBRyxpRUFBaUUseUJBQXlCLEdBQUcsb0NBQW9DLHlCQUF5Qix5QkFBeUIsa0JBQWtCLEdBQUcsNkNBQTZDLHdCQUF3QixvQkFBb0Isb0JBQW9CLEdBQUcsK0JBQStCLG1CQUFtQixHQUFHLGdEQUFnRCxnQkFBZ0IsR0FBRyxtREFBbUQsZ0NBQWdDLEdBQUcsc0VBQXNFLHFCQUFxQixHQUFHLGdFQUFnRSxpQ0FBaUMsa0NBQWtDLEdBQUcsK0RBQStELDhCQUE4QiwrQkFBK0IsR0FBRyw2REFBNkQsOEJBQThCLEdBQUcsNERBQTRELGlDQUFpQyxHQUFHLDZEQUE2RCw4QkFBOEIsR0FBRyw0REFBNEQsaUNBQWlDLEdBQUcsNERBQTRELDhCQUE4QixHQUFHLDJEQUEyRCxpQ0FBaUMsR0FBRzs7QUFFdDNNOzs7Ozs7OztBQ1BBO0FBQ0E7OztBQUdBO0FBQ0EseUNBQTBDLHNCQUFzQixtQ0FBbUMsbUNBQW1DLEdBQUcseUNBQXlDLHFCQUFxQixHQUFHLCtDQUErQyxvQkFBb0IsY0FBYyxxQkFBcUIsOEJBQThCLG1CQUFtQixtQ0FBbUMsbUNBQW1DLEdBQUcsaURBQWlELHVCQUF1QixHQUFHLG1DQUFtQyxnQkFBZ0IseUJBQXlCLHlCQUF5QixrQkFBa0IscUJBQXFCLG1CQUFtQix1QkFBdUIsbURBQW1ELG1EQUFtRCxrQ0FBa0MsR0FBRyx5Q0FBeUMsaUJBQWlCLGlDQUFpQyxHQUFHLGtEQUFrRCx1QkFBdUIsR0FBRyxxREFBcUQsb0JBQW9CLDZCQUE2QixnQkFBZ0IsR0FBRyxxREFBcUQscUJBQXFCLGNBQWMsZUFBZSxHQUFHLG9EQUFvRCxtQkFBbUIsaUJBQWlCLHNCQUFzQix1QkFBdUIsZ0JBQWdCLEdBQUcsMERBQTBELHdCQUF3QixHQUFHLDhEQUE4RCxtQkFBbUIsR0FBRyxnRUFBZ0Usc0JBQXNCLG9CQUFvQixHQUFHLGdFQUFnRSxvQ0FBb0MsdUJBQXVCLGFBQWEsV0FBVyxHQUFHLDJDQUEyQyx3QkFBd0Isb0JBQW9CLG9CQUFvQix1QkFBdUIsbUJBQW1CLEdBQUcsd0RBQXdELG9CQUFvQixxQkFBcUIsZ0JBQWdCLDBCQUEwQixHQUFHLDREQUE0RCwwQkFBMEIsc0JBQXNCLGdCQUFnQix1QkFBdUIsR0FBRyw4Q0FBOEMsb0JBQW9CLGtDQUFrQyxtQkFBbUIsR0FBRywyRkFBMkYsb0JBQW9CLG1CQUFtQixHQUFHLDZDQUE2QyxzQkFBc0IsR0FBRyxtREFBbUQsa0JBQWtCLDJCQUEyQixtQkFBbUIsR0FBRzs7QUFFOW5GOzs7Ozs7OztBQ1BBO0FBQ0E7OztBQUdBO0FBQ0EsZ0NBQWlDLG1CQUFtQixxQkFBcUIsbUJBQW1CLGtCQUFrQixtQ0FBbUMsY0FBYyxHQUFHLGlCQUFpQixnQkFBZ0IsR0FBRyxhQUFhLG1CQUFtQixHQUFHLG1CQUFtQixtQkFBbUIsR0FBRyxlQUFlLG1CQUFtQixHQUFHLGlCQUFpQixtQkFBbUIsR0FBRyxnQkFBZ0IsbUJBQW1CLEdBQUcsaUJBQWlCLG1CQUFtQixHQUFHLGdDQUFnQyxtQkFBbUIsR0FBRyxnQkFBZ0IsbUJBQW1CLEdBQUcsa0JBQWtCLG1CQUFtQixHQUFHLG9CQUFvQixtQkFBbUIsR0FBRyxnREFBZ0QsbUJBQW1CLEdBQUcsd0JBQXdCLG1CQUFtQixHQUFHLHdCQUF3QixnQkFBZ0IsR0FBRywyREFBMkQsbUJBQW1CLEdBQUcsT0FBTyxlQUFlLGNBQWMsR0FBRyxRQUFRLDBCQUEwQix3QkFBd0IsdUVBQXVFLGdCQUFnQixxQkFBcUIsdUJBQXVCLGdCQUFnQiwyQkFBMkIsc0JBQXNCLEdBQUcsZUFBZSxjQUFjLGdCQUFnQix3QkFBd0IsaUJBQWlCLEdBQUcsS0FBSyxtQkFBbUIsMEJBQTBCLG9CQUFvQixHQUFHLDBCQUEwQixjQUFjLHdCQUF3QixnQkFBZ0IsR0FBRyxNQUFNLG1CQUFtQixHQUFHLE1BQU0scUJBQXFCLEdBQUcsTUFBTSxxQkFBcUIsR0FBRyxRQUFRLG1CQUFtQiw4QkFBOEIsdUJBQXVCLG1CQUFtQixHQUFHLGNBQWMsa0JBQWtCLHFCQUFxQix3QkFBd0IsK0JBQStCLG1DQUFtQyx1QkFBdUIsR0FBRyxxQkFBcUIsaUJBQWlCLG1CQUFtQix1QkFBdUIsYUFBYSxzQkFBc0IsZ0JBQWdCLGlCQUFpQix3QkFBd0IsdUJBQXVCLHdCQUF3QixnQkFBZ0Isc0JBQXNCLGdCQUFnQixHQUFHLHdDQUF3QyxpQkFBaUIsR0FBRyxtQkFBbUIsaUJBQWlCLHNCQUFzQixtREFBbUQsbURBQW1ELHFCQUFxQixvQkFBb0IsZ0JBQWdCLFdBQVcsaUJBQWlCLEdBQUcsMEJBQTBCLGdCQUFnQixtQkFBbUIsR0FBRyx5QkFBeUIsb0JBQW9CLGdCQUFnQixzQkFBc0IsR0FBRyx1QkFBdUIsaUJBQWlCLHVCQUF1QixHQUFHLHlCQUF5QiwwQkFBMEIsb0JBQW9CLGdCQUFnQixHQUFHLGdDQUFnQyxtQkFBbUIsR0FBRywyQkFBMkIsdUJBQXVCLGNBQWMscUNBQXFDLEdBQUcsZUFBZSxnRUFBZ0Usd0RBQXdELEdBQUcsU0FBUyxnQkFBZ0IsR0FBRyxRQUFRLGdCQUFnQixHQUFHLFdBQVcsbUJBQW1CLEdBQUc7O0FBRXY4Rjs7Ozs7Ozs7QUNQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDcEJBO0FBQ0E7QUFDQTtBQUNBLHVDQUF1QyxXQUFXO0FBQ2xEO0FBQ0E7QUFDQSxrRjs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ05BOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O3VCQUdLLGlCQUFPcEgsUUFBUCxFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJT3VDLG9DOztxQ0FDQWtGLFFBQVFDLEk7Ozs7O0FBQ1JuRix1Q0FBTyw4SEFBUDs7Ozs7O3VDQUVhLGdCQUFNSyxHQUFOLENBQWEsS0FBS0EsR0FBTCxDQUFTLE1BQVQsQ0FBYixnQjs7O0FBQWJMLG9DOztBQUNBQSx1Q0FBT0EsS0FBS0EsSUFBWjs7O0FBRUpvRix3Q0FBUUMsR0FBUixDQUFZckYsSUFBWjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs2QkFWR3ZDLFE7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1JYOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLGdDQUFnQyxVQUFVLEVBQUU7QUFDNUMsQzs7Ozs7Ozs7Ozs7Ozs7a0JDeEJlLFVBQVNPLEdBQVQsRUFBY0MsSUFBZCxFQUFvQkMsTUFBcEIsRUFBNEJDLE9BQTVCLEVBQXFDOztBQUVwREYsYUFBU0EsT0FBT0csR0FBaEI7QUFDQUosWUFBUUEsTUFBTSxFQUFkO0FBQ0FFLGVBQVdBLFNBQVMsRUFBcEI7QUFDQSxRQUFJRyxJQUFJSixLQUFLSyxJQUFMLENBQVVELENBQWxCO0FBQUEsUUFBcUJFLEtBQUtOLEtBQUtLLElBQUwsQ0FBVUMsRUFBcEM7QUFBQSxRQUF3Q0MsS0FBS1AsS0FBS0ssSUFBTCxDQUFVRSxFQUF2RDtBQUFBLFFBQTJEQyxVQUFVLFFBQVEsS0FBS0EsT0FBYixJQUF3QixFQUE3RjtBQUFBLFFBQWlHQyxVQUFVLEVBQTNHO0FBQUEsUUFBK0dDLFdBQVcsRUFBMUg7QUFBQSxRQUNBQyxNQUFNWCxLQUFLWSxLQURYO0FBQUEsUUFDa0JDLFNBQVNGLElBQUlFLE1BRC9CO0FBQUEsUUFDdUNDLEtBQUtILElBQUlJLEtBRGhEO0FBQUEsUUFDdURDLGFBQWFMLElBQUlNLFNBRHhFO0FBQUEsUUFFQUMsTUFBTVAsSUFBSVEsT0FGVjtBQUFBLFFBRW1CQyxZQUFZRixJQUFJRyxRQUZuQztBQUFBLFFBRTZDQyxZQUFZSixJQUFJSyxRQUY3RDtBQUFBLFFBR0FDLG9CQUFvQmIsSUFBSWMsZ0JBSHhCO0FBQUEsUUFHMENDLHlCQUF5QmYsSUFBSWdCLHFCQUh2RTtBQUFBLFFBSUFDLGtCQUFrQmpCLElBQUlrQixjQUp0QjtBQUFBLFFBS0FDLE9BQU8sS0FBS0MsSUFMWjtBQUFBLFFBS2tCQyxRQUFRakMsR0FMMUI7QUFBQSxRQUsrQmtDLFVBQVVILFFBQVFBLEtBQUtHLE9BTHREO0FBQUEsUUFLK0RDLFNBQVMsQ0FBQ2hDLFdBQVcsRUFBWixFQUFnQmlDLE1BTHhGOztBQVFBLFdBQVEsWUFBVztBQUNmLFlBQUlrRixPQUFPLEVBQUMsWUFBWSxVQUFiLEVBQXlCLGFBQWEsZUFBdEMsRUFBdUQsWUFBWSxJQUFuRSxFQUFYO0FBQ0EsWUFBSUEsS0FBS0MsY0FBTCxDQUFvQixXQUFwQixDQUFKLEVBQXNDO0FBQ2xDekcsbUJBQU93RyxJQUFQLEVBQWFBLEtBQUtFLFNBQUwsS0FBbUIsSUFBbkIsR0FBMEJ4SCxHQUExQixHQUFnQ3NILEtBQUtFLFNBQWxEO0FBQ0EsbUJBQU9GLEtBQUtFLFNBQVo7QUFDSDtBQUNELGVBQU9yRixPQUFPUSxJQUFQLENBQVksSUFBWixFQUFrQjJFLElBQWxCLEVBQXdCckgsSUFBeEIsRUFBOEIsVUFBU0MsTUFBVCxFQUFpQjtBQUN0RCxnQkFBSVEsVUFBVSxFQUFkO0FBQUEsZ0JBQWtCQyxXQUFXRyxPQUFPLEVBQVAsRUFBV1osTUFBWCxDQUE3QjtBQUNBLG1CQUFPLENBQUNRLFFBQVErRyxPQUFSLEdBQWtCLFVBQVN0RixNQUFULEVBQWlCO0FBQUMsdUJBQU85QixvQkFBVSxFQUFDLFlBQVksT0FBYixFQUFzQixZQUFZLElBQWxDLEVBQVYsQ0FBUDtBQUEyRCxhQUFoRyxNQUFzR00sU0FBUzhHLE9BQVQsR0FBbUIsVUFBU3RGLE1BQVQsRUFBaUI7QUFDckosb0JBQUlKLE9BQU8sSUFBWDtBQUNBLHVCQUFPN0IsT0FBT3VILE9BQVAsR0FBaUJ2SCxPQUFPdUgsT0FBUCxDQUFlOUUsSUFBZixDQUFvQixJQUFwQixFQUEwQixZQUFXO0FBQzdELDJCQUFPakMsUUFBUStHLE9BQVIsQ0FBZ0I5RSxJQUFoQixDQUFxQlosSUFBckIsRUFBMkJJLE1BQTNCLENBQVA7QUFDQyxpQkFGdUIsQ0FBakIsR0FFRnpCLFFBQVErRyxPQUFSLENBQWdCOUUsSUFBaEIsQ0FBcUIsSUFBckIsRUFBMkJSLE1BQTNCLENBRkw7QUFHQyxhQUxVLEtBS0x4QixRQUxGO0FBTUgsU0FSd0MsQ0FRdkNnQyxJQVJ1QyxDQVFsQyxJQVJrQyxFQVE1QnpDLE1BUjRCLENBQTlCLEVBUVdpQyxNQVJYLENBQVA7QUFTSCxLQWZNLENBZUpRLElBZkksQ0FlQyxJQWZELENBQVA7QUFnQkMsQzs7QUE5QkQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozt1QkFHSyxpQkFBT2xELFFBQVAsRTs7Ozs7Ozs7Ozs7aUNBR1E7QUFDTCxpQkFBS2lJLE9BQUwsR0FBZSxLQUFLQyxPQUFMLENBQWFDLGFBQWIsQ0FBMkIsU0FBM0IsQ0FBZjtBQUNBLGlCQUFLQyxhQUFMO0FBQ0g7Ozt3Q0FFZTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0k7QUFDQTtBQUNKO0FBQ0E7QUFDQTtBQUNIOzs7OzZCQWpCTXBJLFE7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTlg7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsZ0NBQWdDLFVBQVUsRUFBRTtBQUM1QyxDOzs7Ozs7Ozs7Ozs7OztrQkN4QmUsVUFBU08sR0FBVCxFQUFjQyxJQUFkLEVBQW9CQyxNQUFwQixFQUE0QkMsT0FBNUIsRUFBcUM7O0FBRXBERixhQUFTQSxPQUFPRyxHQUFoQjtBQUNBSixZQUFRQSxNQUFNLEVBQWQ7QUFDQUUsZUFBV0EsU0FBUyxFQUFwQjtBQUNBLFFBQUlHLElBQUlKLEtBQUtLLElBQUwsQ0FBVUQsQ0FBbEI7QUFBQSxRQUFxQkUsS0FBS04sS0FBS0ssSUFBTCxDQUFVQyxFQUFwQztBQUFBLFFBQXdDQyxLQUFLUCxLQUFLSyxJQUFMLENBQVVFLEVBQXZEO0FBQUEsUUFBMkRDLFVBQVUsUUFBUSxLQUFLQSxPQUFiLElBQXdCLEVBQTdGO0FBQUEsUUFBaUdDLFVBQVUsRUFBM0c7QUFBQSxRQUErR0MsV0FBVyxFQUExSDtBQUFBLFFBQ0FDLE1BQU1YLEtBQUtZLEtBRFg7QUFBQSxRQUNrQkMsU0FBU0YsSUFBSUUsTUFEL0I7QUFBQSxRQUN1Q0MsS0FBS0gsSUFBSUksS0FEaEQ7QUFBQSxRQUN1REMsYUFBYUwsSUFBSU0sU0FEeEU7QUFBQSxRQUVBQyxNQUFNUCxJQUFJUSxPQUZWO0FBQUEsUUFFbUJDLFlBQVlGLElBQUlHLFFBRm5DO0FBQUEsUUFFNkNDLFlBQVlKLElBQUlLLFFBRjdEO0FBQUEsUUFHQUMsb0JBQW9CYixJQUFJYyxnQkFIeEI7QUFBQSxRQUcwQ0MseUJBQXlCZixJQUFJZ0IscUJBSHZFO0FBQUEsUUFJQUMsa0JBQWtCakIsSUFBSWtCLGNBSnRCO0FBQUEsUUFLQUMsT0FBTyxLQUFLQyxJQUxaO0FBQUEsUUFLa0JDLFFBQVFqQyxHQUwxQjtBQUFBLFFBSytCa0MsVUFBVUgsUUFBUUEsS0FBS0csT0FMdEQ7QUFBQSxRQUsrREMsU0FBUyxDQUFDaEMsV0FBVyxFQUFaLEVBQWdCaUMsTUFMeEY7O0FBUUEsUUFBTTBGLE1BQU0sQ0FDUjtBQUNJQyxlQUFPLElBRFg7QUFFSTNELGNBQU07QUFGVixLQURRLEVBS1I7QUFDSTJELGVBQU8sS0FEWDtBQUVJM0QsY0FBTTtBQUZWLEtBTFEsQ0FBWjs7QUFlQSxXQUFPL0QsRUFBRSxLQUFGLEVBQVMsSUFBVCxFQUFlLENBQUNBLEVBQUUsS0FBRixFQUFTLElBQVQsRUFBZUEsRUFBRSxRQUFGLEVBQVksSUFBWixFQUFrQixDQUFDSyxRQUFRc0gsTUFBUixHQUFpQixVQUFTN0YsTUFBVCxFQUFpQjtBQUFDLGVBQU8sQ0FBQzlCLGtCQUFRLEVBQUMsYUFBYSxNQUFkLEVBQXNCLFFBQVEsR0FBOUIsRUFBbUMsWUFBWSxLQUEvQyxFQUFzRCxZQUFZLElBQWxFLEVBQVIsQ0FBRCxFQUFtRkEsRUFBRSxLQUFGLEVBQVMsSUFBVCxFQUFlLENBQUNKLEtBQUtZLEtBQUwsQ0FBVytCLEdBQVgsQ0FBZSxZQUFXO0FBQUMsZ0JBQUk7QUFBQyx1QkFBTyxDQUFDa0YsR0FBRCxFQUFPLENBQVAsQ0FBUDtBQUFpQixhQUF0QixDQUF1QixPQUFNcEYsQ0FBTixFQUFTO0FBQUMzQixtQkFBRzJCLENBQUg7QUFBTTtBQUFDLFNBQXBELENBQXFEQyxJQUFyRCxDQUEwRCxJQUExRCxDQUFmLEVBQWdGLFVBQVMvQyxLQUFULEVBQWdCc0UsR0FBaEIsRUFBcUI7QUFDM1MsbUJBQU83RCxrQkFBUSxFQUFDLGFBQWFZLFdBQVcsWUFBVztBQUFDLHdCQUFJO0FBQUMsK0JBQU8sQ0FBQztBQUNyQ2dILG9DQUFRckksTUFBTXdFLElBQU4sS0FBZW5DLE1BQU1pRztBQURRLHlCQUFELEVBRXBDLENBRm9DLENBQVA7QUFFMUIscUJBRnFCLENBRXBCLE9BQU14RixDQUFOLEVBQVM7QUFBQzNCLDJCQUFHMkIsQ0FBSDtBQUFNO0FBQUMsaUJBRlQsQ0FFVUMsSUFGVixDQUVlLElBRmYsQ0FBWCxDQUFkLEVBRWdELFFBQVEsWUFBVztBQUFDLHdCQUFJO0FBQUMsK0JBQU8sT0FBSy9DLE1BQU13RSxJQUFYLEVBQW9CLENBQXBCLENBQVA7QUFBOEIscUJBQW5DLENBQW9DLE9BQU0xQixDQUFOLEVBQVM7QUFBQzNCLDJCQUFHMkIsQ0FBSDtBQUFNO0FBQUMsaUJBQWpFLENBQWtFQyxJQUFsRSxDQUF1RSxJQUF2RSxDQUZ4RCxFQUVzSSxZQUFZLFlBQVc7QUFBQyx3QkFBSTtBQUFDLCtCQUFPLENBQUMvQyxNQUFNbUksS0FBUCxFQUFlLENBQWYsQ0FBUDtBQUF5QixxQkFBOUIsQ0FBK0IsT0FBTXJGLENBQU4sRUFBUztBQUFDM0IsMkJBQUcyQixDQUFIO0FBQU07QUFBQyxpQkFBNUQsQ0FBNkRDLElBQTdELENBQWtFLElBQWxFLENBRmxKLEVBRTJOLFlBQVksSUFGdk8sRUFBUixDQUFQO0FBR0MsU0FKcU0sRUFJbk0sSUFKbU0sQ0FBRCxFQUkzTHRDLEVBQUUsS0FBRixFQUFTLElBQVQsRUFBZSxJQUFmLEVBQXFCLFFBQXJCLENBSjJMLENBQWYsQ0FBbkYsQ0FBUDtBQUkvQyxLQUpXLE1BSUxNLFNBQVNxSCxNQUFULEdBQWtCLFVBQVM3RixNQUFULEVBQWlCO0FBQ3RGLFlBQUlKLE9BQU8sSUFBWDtBQUNBLGVBQU83QixPQUFPOEgsTUFBUCxHQUFnQjlILE9BQU84SCxNQUFQLENBQWNyRixJQUFkLENBQW1CLElBQW5CLEVBQXlCLFlBQVc7QUFDM0QsbUJBQU9qQyxRQUFRc0gsTUFBUixDQUFlckYsSUFBZixDQUFvQlosSUFBcEIsRUFBMEJJLE1BQTFCLENBQVA7QUFDQyxTQUZzQixDQUFoQixHQUVGekIsUUFBUXNILE1BQVIsQ0FBZXJGLElBQWYsQ0FBb0IsSUFBcEIsRUFBMEJSLE1BQTFCLENBRkw7QUFHQyxLQVR1RCxLQVNsRHhCLFNBQVNxSCxNQUFULENBQWdCckYsSUFBaEIsQ0FBcUIsSUFBckIsQ0FUZ0MsQ0FBZixFQVNZLGdCQVRaLENBQUQsRUFTZ0N0QyxFQUFFLEtBQUYsRUFBUyxJQUFULEVBQWUsQ0FBQ0ssUUFBUStHLE9BQVIsR0FBa0IsVUFBU3RGLE1BQVQsRUFBaUI7QUFBQyxlQUFPLElBQVA7QUFBYSxLQUFsRCxNQUF3RHhCLFNBQVM4RyxPQUFULEdBQW1CLFVBQVN0RixNQUFULEVBQWlCO0FBQ2pLLFlBQUlKLE9BQU8sSUFBWDtBQUNBLGVBQU83QixPQUFPdUgsT0FBUCxHQUFpQnZILE9BQU91SCxPQUFQLENBQWU5RSxJQUFmLENBQW9CLElBQXBCLEVBQTBCLFlBQVc7QUFDN0QsbUJBQU9qQyxRQUFRK0csT0FBUixDQUFnQjlFLElBQWhCLENBQXFCWixJQUFyQixFQUEyQkksTUFBM0IsQ0FBUDtBQUNDLFNBRnVCLENBQWpCLEdBRUZ6QixRQUFRK0csT0FBUixDQUFnQjlFLElBQWhCLENBQXFCLElBQXJCLEVBQTJCUixNQUEzQixDQUZMO0FBR0MsS0FMb0UsS0FLL0R4QixTQUFTOEcsT0FBVCxDQUFpQjlFLElBQWpCLENBQXNCLElBQXRCLENBTGdELEVBS25CLGlCQUxtQixDQVRoQyxDQUFmLEVBY2lEMUIsV0FBVyxZQUFXO0FBQUMsWUFBSTtBQUFDLG1CQUFPLG1CQUFFLGdCQUFnQixJQUFsQixJQUF5QmdCLE1BQU1mLFNBQS9CLEVBQTJDZSxNQUFNZixTQUFqRCxHQUE4RCxDQUE5RCxDQUFQO0FBQXdFLFNBQTdFLENBQThFLE9BQU13QixDQUFOLEVBQVM7QUFBQzNCLGVBQUcyQixDQUFIO0FBQU07QUFBQyxLQUEzRyxDQUE0R0MsSUFBNUcsQ0FBaUgsSUFBakgsQ0FBWCxDQWRqRCxDQUFQO0FBZUMsQzs7QUE1Q0QiLCJmaWxlIjoic3RhdGljL2NodW5rL2YxNWJlZGViZDBjNGY5ODNlODNiLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEludGFjdCBmcm9tICdpbnRhY3QnO1xuaW1wb3J0IHRlbXBsYXRlIGZyb20gJy4vZ3JvdXAudmR0JztcbmltcG9ydCAnLi9pbmRleC5zdHlsJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQnV0dG9uR3JvdXAgZXh0ZW5kcyBJbnRhY3Qge1xuICAgIEBJbnRhY3QudGVtcGxhdGUoKVxuICAgIGdldCB0ZW1wbGF0ZSgpIHsgcmV0dXJuIHRlbXBsYXRlOyB9XG5cbiAgICBkZWZhdWx0cygpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHZlcnRpY2FsOiBmYWxzZSxcbiAgICAgICAgICAgIHJhZGlvOiBmYWxzZSxcbiAgICAgICAgICAgIHZhbHVlOiB1bmRlZmluZWQsXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICAgICAgdmVydGljYWw6IEJvb2xlYW4sXG4gICAgICAgIHJhZGlvOiBCb29sZWFuLFxuICAgIH1cbn1cblxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9idXR0b24vZ3JvdXAuanMiLCJpbXBvcnQgQnV0dG9uIGZyb20gJy4vJztcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKG9iaiwgX1ZkdCwgYmxvY2tzLCAkY2FsbGVlKSB7XG5cbl9WZHQgfHwgKF9WZHQgPSBWZHQpO1xub2JqIHx8IChvYmogPSB7fSk7XG5ibG9ja3MgfHwgKGJsb2NrcyA9IHt9KTtcbnZhciBoID0gX1ZkdC5taXNzLmgsIGhjID0gX1ZkdC5taXNzLmhjLCBodSA9IF9WZHQubWlzcy5odSwgd2lkZ2V0cyA9IHRoaXMgJiYgdGhpcy53aWRnZXRzIHx8IHt9LCBfYmxvY2tzID0ge30sIF9fYmxvY2tzID0ge30sXG5fX3UgPSBfVmR0LnV0aWxzLCBleHRlbmQgPSBfX3UuZXh0ZW5kLCBfZSA9IF9fdS5lcnJvciwgX2NsYXNzTmFtZSA9IF9fdS5jbGFzc05hbWUsXG5fX28gPSBfX3UuT3B0aW9ucywgX2dldE1vZGVsID0gX19vLmdldE1vZGVsLCBfc2V0TW9kZWwgPSBfX28uc2V0TW9kZWwsXG5fc2V0Q2hlY2tib3hNb2RlbCA9IF9fdS5zZXRDaGVja2JveE1vZGVsLCBfZGV0ZWN0Q2hlY2tib3hDaGVja2VkID0gX191LmRldGVjdENoZWNrYm94Q2hlY2tlZCxcbl9zZXRTZWxlY3RNb2RlbCA9IF9fdS5zZXRTZWxlY3RNb2RlbCxcbnNlbGYgPSB0aGlzLmRhdGEsIHNjb3BlID0gb2JqLCBBbmltYXRlID0gc2VsZiAmJiBzZWxmLkFuaW1hdGUsIHBhcmVudCA9ICgkY2FsbGVlIHx8IHt9KS5fc3VwZXJcblxuXG5jb25zdCB7XG4gICAgY2xhc3NOYW1lLCB2ZXJ0aWNhbCwgc3R5bGUsIFxuICAgIGNoaWxkcmVuLCByYWRpbywgdmFsdWUsIGZsdWlkXG59ID0gc2VsZi5nZXQoKTtcblxuY29uc3QgY2xhc3NOYW1lT2JqID0ge1xuICAgICdrLWJ0bnMnOiB0cnVlLFxuICAgICdrLXZlcnRpY2FsJzogdmVydGljYWwsXG4gICAgW2NsYXNzTmFtZV06IGNsYXNzTmFtZSxcbiAgICAnay1mbHVpZCc6IGZsdWlkLFxufTtcblxucmV0dXJuIGgoJ2RpdicsIHsnc3R5bGUnOiBmdW5jdGlvbigpIHt0cnkge3JldHVybiBbc3R5bGUgXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKX0sIGZ1bmN0aW9uKCkge3RyeSB7cmV0dXJuIFtyYWRpbyA/IGNoaWxkcmVuLm1hcCh2Tm9kZSA9PiB7XG4gICAgICAgIGlmICh2Tm9kZS50YWcgPT09IEJ1dHRvbikge1xuICAgICAgICAgICAgdk5vZGUucHJvcHMuX3ZhbHVlID0gdmFsdWU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHZOb2RlO1xuICAgIH0pIDogY2hpbGRyZW5cbl1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcyksIF9jbGFzc05hbWUoZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW2NsYXNzTmFtZU9iaiBdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpKSlcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL2J1dHRvbi9ncm91cC52ZHQiLCJpbXBvcnQgSW50YWN0IGZyb20gJ2ludGFjdCc7XG5pbXBvcnQgdGVtcGxhdGUgZnJvbSAnLi9pbmRleC52ZHQnO1xuaW1wb3J0IEdyb3VwIGZyb20gJy4vZ3JvdXAnO1xuaW1wb3J0ICcuL2luZGV4LnN0eWwnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCdXR0b24gZXh0ZW5kcyBJbnRhY3Qge1xuICAgIEBJbnRhY3QudGVtcGxhdGUoKVxuICAgIGdldCB0ZW1wbGF0ZSgpIHsgcmV0dXJuIHRlbXBsYXRlOyB9XG5cbiAgICBkZWZhdWx0cygpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHR5cGU6ICdkZWZhdWx0JywgLy8gcHJpbWFyeSB8IHdhcm5pbmcgfCBkYW5nZXJcbiAgICAgICAgICAgIHNpemU6ICdkZWZhdWx0JywgLy8gc21hbGwgfCBtaW5pXG4gICAgICAgICAgICBpY29uOiBmYWxzZSxcbiAgICAgICAgICAgIGNpcmNsZTogZmFsc2UsXG4gICAgICAgICAgICBsb2FkaW5nOiBmYWxzZSxcbiAgICAgICAgICAgIGRpc2FibGVkOiBmYWxzZSxcbiAgICAgICAgICAgIGZsdWlkOiBmYWxzZSxcbiAgICAgICAgICAgIGh0bWxUeXBlOiAnYnV0dG9uJyxcbiAgICAgICAgICAgIHRhZ05hbWU6ICdidXR0b24nLFxuICAgICAgICAgICAgdmFsdWU6IHVuZGVmaW5lZCxcbiAgICAgICAgICAgIG5hbWU6IHVuZGVmaW5lZCxcblxuICAgICAgICAgICAgX3ZhbHVlOiB1bmRlZmluZWQsXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICBzaXplOiBTdHJpbmcsXG4gICAgICAgIGljb246IEJvb2xlYW4sXG4gICAgICAgIGNpcmNsZTogQm9vbGVhbixcbiAgICAgICAgbG9hZGluZzogQm9vbGVhbixcbiAgICAgICAgZGlzYWJsZWQ6IEJvb2xlYW4sXG4gICAgICAgIGZsdWlkOiBCb29sZWFuLFxuICAgICAgICBodG1sVHlwZTogU3RyaW5nLFxuICAgICAgICB0YWdOYW1lOiBbU3RyaW5nLCBGdW5jdGlvbl0sXG4gICAgICAgIG5hbWU6IFN0cmluZyxcbiAgICB9XG5cbiAgICBfbW91bnQoKSB7XG4gICAgICAgIGxldCBwYXJlbnRWTm9kZSA9IHRoaXMucGFyZW50Vk5vZGU7XG4gICAgICAgIGlmIChwYXJlbnRWTm9kZSkge1xuICAgICAgICAgICAgcGFyZW50Vk5vZGUgPSBwYXJlbnRWTm9kZS5wYXJlbnRWTm9kZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocGFyZW50Vk5vZGUgJiYgcGFyZW50Vk5vZGUudGFnID09PSBHcm91cCkge1xuICAgICAgICAgICAgdGhpcy5ncm91cCA9IHBhcmVudFZOb2RlLmNoaWxkcmVuO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc2hvd0xvYWRpbmcoKSB7XG4gICAgICAgIHRoaXMuc2V0KCdsb2FkaW5nJywgdHJ1ZSk7XG4gICAgfVxuXG4gICAgaGlkZUxvYWRpbmcoKSB7XG4gICAgICAgIHRoaXMuc2V0KCdsb2FkaW5nJywgZmFsc2UpO1xuICAgIH1cblxuICAgIGRpc2FibGUoKSB7XG4gICAgICAgIHRoaXMuc2V0KCdkaXNhYmxlZCcsIHRydWUpO1xuICAgIH1cblxuICAgIGVuYWJsZSgpIHtcbiAgICAgICAgdGhpcy5zZXQoJ2Rpc2FibGVkJywgZmFsc2UpO1xuICAgIH1cblxuICAgIF9vbkNsaWNrKGUpIHtcbiAgICAgICAgaWYgKHRoaXMuZ3JvdXApIHtcbiAgICAgICAgICAgIHRoaXMuZ3JvdXAuc2V0KCd2YWx1ZScsIHRoaXMuZ2V0KCd2YWx1ZScpKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnRyaWdnZXIoJ2NsaWNrJywgZSk7XG4gICAgfVxufVxuXG5leHBvcnQge0J1dHRvbiwgR3JvdXAgYXMgQnV0dG9uR3JvdXB9O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9idXR0b24vaW5kZXguanMiLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tMi0xIS4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMi0yIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsdXMtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTItMyEuL2luZGV4LnN0eWxcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbi8vIFByZXBhcmUgY3NzVHJhbnNmb3JtYXRpb25cbnZhciB0cmFuc2Zvcm07XG5cbnZhciBvcHRpb25zID0ge31cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanNcIikoY29udGVudCwgb3B0aW9ucyk7XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcblx0Ly8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0aWYoIWNvbnRlbnQubG9jYWxzKSB7XG5cdFx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTItMSEuLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTItMiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bHVzLWxvYWRlci9pbmRleC5qcz8/cmVmLS0yLTMhLi9pbmRleC5zdHlsXCIsIGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz8/cmVmLS0yLTEhLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0yLTIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWx1cy1sb2FkZXIvaW5kZXguanM/P3JlZi0tMi0zIS4vaW5kZXguc3R5bFwiKTtcblx0XHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXHRcdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHRcdH0pO1xuXHR9XG5cdC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9jb21wb25lbnRzL2J1dHRvbi9pbmRleC5zdHlsXG4vLyBtb2R1bGUgaWQgPSAuL2NvbXBvbmVudHMvYnV0dG9uL2luZGV4LnN0eWxcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHtpc1N0cmluZ09yTnVtYmVyTm90RW1wdHl9IGZyb20gJy4uL3V0aWxzJztcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKG9iaiwgX1ZkdCwgYmxvY2tzLCAkY2FsbGVlKSB7XG5cbl9WZHQgfHwgKF9WZHQgPSBWZHQpO1xub2JqIHx8IChvYmogPSB7fSk7XG5ibG9ja3MgfHwgKGJsb2NrcyA9IHt9KTtcbnZhciBoID0gX1ZkdC5taXNzLmgsIGhjID0gX1ZkdC5taXNzLmhjLCBodSA9IF9WZHQubWlzcy5odSwgd2lkZ2V0cyA9IHRoaXMgJiYgdGhpcy53aWRnZXRzIHx8IHt9LCBfYmxvY2tzID0ge30sIF9fYmxvY2tzID0ge30sXG5fX3UgPSBfVmR0LnV0aWxzLCBleHRlbmQgPSBfX3UuZXh0ZW5kLCBfZSA9IF9fdS5lcnJvciwgX2NsYXNzTmFtZSA9IF9fdS5jbGFzc05hbWUsXG5fX28gPSBfX3UuT3B0aW9ucywgX2dldE1vZGVsID0gX19vLmdldE1vZGVsLCBfc2V0TW9kZWwgPSBfX28uc2V0TW9kZWwsXG5fc2V0Q2hlY2tib3hNb2RlbCA9IF9fdS5zZXRDaGVja2JveE1vZGVsLCBfZGV0ZWN0Q2hlY2tib3hDaGVja2VkID0gX191LmRldGVjdENoZWNrYm94Q2hlY2tlZCxcbl9zZXRTZWxlY3RNb2RlbCA9IF9fdS5zZXRTZWxlY3RNb2RlbCxcbnNlbGYgPSB0aGlzLmRhdGEsIHNjb3BlID0gb2JqLCBBbmltYXRlID0gc2VsZiAmJiBzZWxmLkFuaW1hdGUsIHBhcmVudCA9ICgkY2FsbGVlIHx8IHt9KS5fc3VwZXJcblxuXG5sZXQge1xuICAgIHR5cGUsIGNsYXNzTmFtZSwgc2l6ZSwgaWNvbiwgY2lyY2xlLCByZWYsIGtleSxcbiAgICB0YWdOYW1lLCBodG1sVHlwZSwgZmx1aWQsIGNoaWxkcmVuLCBsb2FkaW5nLFxuICAgIHZhbHVlLCBfdmFsdWUsIG5hbWUsIC4uLnJlc3Rcbn0gPSBzZWxmLmdldCgpO1xuXG5jb25zdCBjbGFzc05hbWVPYmogPSB7XG4gICAgJ2stYnRuJzogdHJ1ZSxcbiAgICBbYGstJHt0eXBlfWBdOiB0eXBlICE9PSAnZGVmYXVsdCcsXG4gICAgJ2stYnRuLWljb24nOiBpY29uLFxuICAgIFtgay0ke3NpemV9YF06IHNpemUgIT09ICdkZWZhdWx0JyxcbiAgICBbY2xhc3NOYW1lXTogY2xhc3NOYW1lLCBcbiAgICAnay1jaXJjbGUnOiBjaXJjbGUsXG4gICAgJ2stbG9hZGluZyc6IGxvYWRpbmcsXG4gICAgJ2stZmx1aWQnOiBmbHVpZCxcbiAgICAnay1hY3RpdmUnOiB2YWx1ZSAhPT0gdW5kZWZpbmVkICYmIHZhbHVlID09PSBfdmFsdWUsXG59O1xuXG5jb25zdCBCdXR0b24gPSBwcm9wcyA9PiB7XG4gICAgaWYgKHByb3BzLmhyZWYpIHtcbiAgICAgICAgdGFnTmFtZSA9ICdhJztcbiAgICB9XG4gICAgaWYgKHRhZ05hbWUgPT09ICdidXR0b24nKSB7XG4gICAgICAgIC8vIHNldCB0eXBlIG9mIGh0bWwgYnV0dG9uXG4gICAgICAgIHByb3BzLnR5cGUgPSBodG1sVHlwZTtcbiAgICB9XG4gICAgLy8gZGlzYWJsZSBidXR0b24gd2hlbiBsb2FkaW5nXG4gICAgaWYgKGxvYWRpbmcpIHByb3BzLmRpc2FibGVkID0gdHJ1ZTtcbiAgICByZXR1cm4gaCh0YWdOYW1lLCBwcm9wcywgcHJvcHMuY2hpbGRyZW4pO1xufTtcblxuLy8gaGFjayBmb3IgbG9hZGluZyB0cmFuc2l0aW9uIG9mIHdpZHRoXG5pZiAoIWljb24gJiYgQXJyYXkuaXNBcnJheShjaGlsZHJlbikpIHtcbiAgICBjaGlsZHJlbi5mb3JFYWNoKChjaGlsZCwgaW5kZXgpID0+IHtcbiAgICAgICAgaWYgKGNoaWxkKSB7XG4gICAgICAgICAgICBpZiAoY2hpbGQudHlwZSA9PT0gMSB8fCBpc1N0cmluZ09yTnVtYmVyTm90RW1wdHkoY2hpbGQpKSB7XG4gICAgICAgICAgICAgICAgLy8gaXMgYSB0ZXh0IG5vZGVcbiAgICAgICAgICAgICAgICAvLyB3cmFwIHRleHQgbm9kZSB3aXRoIHNwYW5cbiAgICAgICAgICAgICAgICBjaGlsZHJlbltpbmRleF0gPSBoKCdzcGFuJywgbnVsbCwgZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW2NoaWxkIF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcykpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyB3aGV0aGVyIHRoZSBpY29uIGlzIG9uIHRoZSBsZWZ0IHNpZGUgb3IgcmlnaHRcbiAgICAgICAgICAgIGlmIChpbmRleCA9PT0gMCkge1xuICAgICAgICAgICAgICAgIGlmIChjaGlsZC5jbGFzc05hbWUgJiYgY2hpbGQuY2xhc3NOYW1lLmluZGV4T2YoJ2ljb24nKSA+IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZU9ialsnay1pY29uLWxlZnQnXSA9IHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIGlmIChpbmRleCA9PT0gY2hpbGRyZW4ubGVuZ3RoIC0gMSkge1xuICAgICAgICAgICAgICAgIGlmIChjaGlsZC5jbGFzc05hbWUgJiYgY2hpbGQuY2xhc3NOYW1lLmluZGV4T2YoJ2ljb24nKSA+IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZU9ialsnay1pY29uLXJpZ2h0J10gPSB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0pO1xufSBlbHNlIGlmIChpc1N0cmluZ09yTnVtYmVyTm90RW1wdHkoY2hpbGRyZW4pKSB7XG4gICAgLy8gd3JhcCB0ZXh0IG5vZGUgd2l0aCBzcGFuXG4gICAgY2hpbGRyZW4gPSBoKCdzcGFuJywgbnVsbCwgZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW2NoaWxkcmVuIF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcykpXG59XG5cbnJldHVybiBoKEJ1dHRvbiwgeydjbGFzc05hbWUnOiBfY2xhc3NOYW1lKGZ1bmN0aW9uKCkge3RyeSB7cmV0dXJuIFtjbGFzc05hbWVPYmogXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKSksIC4uLmZ1bmN0aW9uKCkge3RyeSB7cmV0dXJuIFtyZXN0IF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcyksICdldi1jbGljayc6IGZ1bmN0aW9uKCkge3RyeSB7cmV0dXJuIFtzZWxmLl9vbkNsaWNrIF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcyksICdjaGlsZHJlbic6IFsnXFxuICAgICcsIGZ1bmN0aW9uKCkge3RyeSB7cmV0dXJuIFtsb2FkaW5nID8gXG4gICAgICAgIGNsYXNzTmFtZU9ialsnay1pY29uLXJpZ2h0J10gP1xuICAgICAgICAgICAgW2NoaWxkcmVuLCBoKCdpJywgbnVsbCwgbnVsbCwgJ2staWNvbiBpb24tbG9hZC1jIGljb24tbG9hZGluZycpXSA6XG4gICAgICAgICAgICBbaCgnaScsIG51bGwsIG51bGwsICdrLWljb24gaW9uLWxvYWQtYyBpY29uLWxvYWRpbmcnKSwgY2hpbGRyZW5dIDpcbiAgICAgICAgY2hpbGRyZW4gXG4gICAgXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKSwgJ1xcbiAgICAnLCBmdW5jdGlvbigpIHt0cnkge3JldHVybiBbdmFsdWUgIT09IHVuZGVmaW5lZCBdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpID8gaCgnaW5wdXQnLCB7J3R5cGUnOiAncmFkaW8nLCAnbmFtZSc6IGZ1bmN0aW9uKCkge3RyeSB7cmV0dXJuIFtuYW1lIF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcyksICdjaGVja2VkJzogZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW3ZhbHVlID09PSBfdmFsdWUgXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKX0pIDogdW5kZWZpbmVkXSwgJ19jb250ZXh0JzogdGhpc30pXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9idXR0b24vaW5kZXgudmR0IiwiaW1wb3J0IEludGFjdCBmcm9tICdpbnRhY3QnO1xuXG5jb25zdCB1dGlscyA9IEludGFjdC51dGlscztcblxuZXhwb3J0IGZ1bmN0aW9uIGFkZFN0eWxlKHN0eWxlLCBleHRyYSkge1xuICAgIGlmICghc3R5bGUpIHJldHVybiBleHRyYTtcbiAgICBpZiAoIWV4dHJhKSByZXR1cm4gc3R5bGU7XG4gICAgaWYgKHR5cGVvZiBzdHlsZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgZXh0cmEgPSBPYmplY3Qua2V5cyhleHRyYSkubWFwKGtleSA9PiBgJHtrZWJhYkNhc2Uoa2V5KX06ICR7ZXh0cmFba2V5XX1gKS5qb2luKCc7Jyk7XG4gICAgICAgIHN0eWxlID0gYCR7c3R5bGV9JHshc3R5bGUgfHwgLztcXHMqJC8udGVzdChzdHlsZSkgPyAnJyA6ICc7J30ke2V4dHJhfWA7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgc3R5bGUgPSB7Li4uc3R5bGUsIC4uLmV4dHJhfTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3R5bGU7XG59XG5cbmNvbnN0IF9jYWNoZSA9IHt9O1xuY29uc3QgdXBwZXJjYXNlUGF0dGVybiA9IC9bQS1aXS9nO1xuZXhwb3J0IGZ1bmN0aW9uIGtlYmFiQ2FzZSh3b3JkKSB7XG4gICAgaWYgKCFfY2FjaGVbd29yZF0pIHtcbiAgICAgICAgX2NhY2hlW3dvcmRdID0gd29yZC5yZXBsYWNlKHVwcGVyY2FzZVBhdHRlcm4sIChpdGVtKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gYC0ke2l0ZW0udG9Mb3dlckNhc2UoKX1gO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIF9jYWNoZVt3b3JkXTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHByb3h5RXZlbnQoY29tcG9uZW50LCBuYW1lKSB7XG4gICAgcmV0dXJuIChlKSA9PiBjb21wb25lbnQudHJpZ2dlcihuYW1lLCBlKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzU3RyaW5nT3JOdW1iZXIobykge1xuICAgIGNvbnN0IHR5cGUgPSB0eXBlb2YgbztcbiAgICByZXR1cm4gdHlwZSA9PT0gJ3N0cmluZycgfHwgdHlwZSA9PT0gJ251bWJlcic7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc1RleHRWTm9kZShvKSB7XG4gICAgcmV0dXJuIGlzU3RyaW5nT3JOdW1iZXIobykgfHwgby50eXBlID09PSAxO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNTdHJpbmdPck51bWJlck5vdEVtcHR5KG8pIHtcbiAgICBjb25zdCB0eXBlID0gdHlwZW9mIG87XG4gICAgcmV0dXJuIHR5cGUgPT09ICdzdHJpbmcnICYmICEvXlxccyskLy50ZXN0KG8pIHx8IHR5cGUgPT09ICdudW1iZXInO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0VGV4dEJ5Q2hpbGRyZW4oY2hpbGRyZW4pIHtcbiAgICBsZXQgcmV0ID0gJyc7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkoY2hpbGRyZW4pKSB7XG4gICAgICAgIGNoaWxkcmVuLmZvckVhY2godk5vZGUgPT4ge1xuICAgICAgICAgICAgaWYgKGlzVGV4dFZOb2RlKHZOb2RlKSkge1xuICAgICAgICAgICAgICAgIHJldCArPSB2Tm9kZS5jaGlsZHJlbjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSBlbHNlIGlmIChpc1N0cmluZ09yTnVtYmVyKGNoaWxkcmVuKSkge1xuICAgICAgICByZXQgKz0gY2hpbGRyZW47XG4gICAgfVxuXG4gICAgcmV0dXJuIHJldDtcbn1cblxuXG5leHBvcnQgY29uc3QgaXNPYmplY3QgPSB1dGlscy5pc09iamVjdDtcblxuZXhwb3J0IGZ1bmN0aW9uIGZpbmRQYXJlbnRDb21wb25lbnQoQ29tcG9uZW50LCBpbnN0YW5jZSwgaXNVbnRpbCkge1xuICAgIGxldCByZXQ7XG4gICAgbGV0IHBhcmVudCA9IGluc3RhbmNlLnBhcmVudFZOb2RlO1xuICAgIHdoaWxlIChwYXJlbnQpIHtcbiAgICAgICAgaWYgKHBhcmVudC50YWcgPT09IENvbXBvbmVudCkge1xuICAgICAgICAgICAgcmV0ID0gcGFyZW50LmNoaWxkcmVuOyAgICAgICAgXG4gICAgICAgICAgICBpZiAoaXNVbnRpbCkgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgcGFyZW50ID0gcGFyZW50LnBhcmVudFZOb2RlO1xuICAgIH1cbiAgICByZXR1cm4gcmV0O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3RyUGFkKHN0ciwgbGVuZ3RoLCBwYWQpIHtcbiAgICBzdHIgPSBzdHIudG9TdHJpbmcoKTtcbiAgICBwYWQgPSBwYWQgPT09IHVuZGVmaW5lZCA/ICcwJyA6IHBhZDtcbiAgICB2YXIgbCA9IHN0ci5sZW5ndGg7XG4gICAgaWYgKGwgPCBsZW5ndGgpIHtcbiAgICAgICAgc3RyID0gbmV3IEFycmF5KGxlbmd0aCAtIGwgKyAxKS5qb2luKHBhZCkgKyBzdHI7XG4gICAgfVxuICAgIHJldHVybiBzdHI7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByYW5nZShzdGFydCwgZW5kKSB7XG4gICAgcmV0dXJuIEFycmF5LmFwcGx5KG51bGwsIHtsZW5ndGg6IGVuZCAtIHN0YXJ0ICsgMX0pXG4gICAgICAgIC5tYXAoKHYsIGkpID0+IGkgKyBzdGFydCk7XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL3V0aWxzLmpzIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2xpYi9heGlvcycpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2F4aW9zL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAuL25vZGVfbW9kdWxlcy9heGlvcy9pbmRleC5qc1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG5cbnZhciB1dGlscyA9IHJlcXVpcmUoJy4vLi4vdXRpbHMnKTtcbnZhciBzZXR0bGUgPSByZXF1aXJlKCcuLy4uL2NvcmUvc2V0dGxlJyk7XG52YXIgYnVpbGRVUkwgPSByZXF1aXJlKCcuLy4uL2hlbHBlcnMvYnVpbGRVUkwnKTtcbnZhciBwYXJzZUhlYWRlcnMgPSByZXF1aXJlKCcuLy4uL2hlbHBlcnMvcGFyc2VIZWFkZXJzJyk7XG52YXIgaXNVUkxTYW1lT3JpZ2luID0gcmVxdWlyZSgnLi8uLi9oZWxwZXJzL2lzVVJMU2FtZU9yaWdpbicpO1xudmFyIGNyZWF0ZUVycm9yID0gcmVxdWlyZSgnLi4vY29yZS9jcmVhdGVFcnJvcicpO1xudmFyIGJ0b2EgPSAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93LmJ0b2EgJiYgd2luZG93LmJ0b2EuYmluZCh3aW5kb3cpKSB8fCByZXF1aXJlKCcuLy4uL2hlbHBlcnMvYnRvYScpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIHhockFkYXB0ZXIoY29uZmlnKSB7XG4gIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiBkaXNwYXRjaFhoclJlcXVlc3QocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgdmFyIHJlcXVlc3REYXRhID0gY29uZmlnLmRhdGE7XG4gICAgdmFyIHJlcXVlc3RIZWFkZXJzID0gY29uZmlnLmhlYWRlcnM7XG5cbiAgICBpZiAodXRpbHMuaXNGb3JtRGF0YShyZXF1ZXN0RGF0YSkpIHtcbiAgICAgIGRlbGV0ZSByZXF1ZXN0SGVhZGVyc1snQ29udGVudC1UeXBlJ107IC8vIExldCB0aGUgYnJvd3NlciBzZXQgaXRcbiAgICB9XG5cbiAgICB2YXIgcmVxdWVzdCA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuICAgIHZhciBsb2FkRXZlbnQgPSAnb25yZWFkeXN0YXRlY2hhbmdlJztcbiAgICB2YXIgeERvbWFpbiA9IGZhbHNlO1xuXG4gICAgLy8gRm9yIElFIDgvOSBDT1JTIHN1cHBvcnRcbiAgICAvLyBPbmx5IHN1cHBvcnRzIFBPU1QgYW5kIEdFVCBjYWxscyBhbmQgZG9lc24ndCByZXR1cm5zIHRoZSByZXNwb25zZSBoZWFkZXJzLlxuICAgIC8vIERPTidUIGRvIHRoaXMgZm9yIHRlc3RpbmcgYi9jIFhNTEh0dHBSZXF1ZXN0IGlzIG1vY2tlZCwgbm90IFhEb21haW5SZXF1ZXN0LlxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Rlc3QnICYmXG4gICAgICAgIHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmXG4gICAgICAgIHdpbmRvdy5YRG9tYWluUmVxdWVzdCAmJiAhKCd3aXRoQ3JlZGVudGlhbHMnIGluIHJlcXVlc3QpICYmXG4gICAgICAgICFpc1VSTFNhbWVPcmlnaW4oY29uZmlnLnVybCkpIHtcbiAgICAgIHJlcXVlc3QgPSBuZXcgd2luZG93LlhEb21haW5SZXF1ZXN0KCk7XG4gICAgICBsb2FkRXZlbnQgPSAnb25sb2FkJztcbiAgICAgIHhEb21haW4gPSB0cnVlO1xuICAgICAgcmVxdWVzdC5vbnByb2dyZXNzID0gZnVuY3Rpb24gaGFuZGxlUHJvZ3Jlc3MoKSB7fTtcbiAgICAgIHJlcXVlc3Qub250aW1lb3V0ID0gZnVuY3Rpb24gaGFuZGxlVGltZW91dCgpIHt9O1xuICAgIH1cblxuICAgIC8vIEhUVFAgYmFzaWMgYXV0aGVudGljYXRpb25cbiAgICBpZiAoY29uZmlnLmF1dGgpIHtcbiAgICAgIHZhciB1c2VybmFtZSA9IGNvbmZpZy5hdXRoLnVzZXJuYW1lIHx8ICcnO1xuICAgICAgdmFyIHBhc3N3b3JkID0gY29uZmlnLmF1dGgucGFzc3dvcmQgfHwgJyc7XG4gICAgICByZXF1ZXN0SGVhZGVycy5BdXRob3JpemF0aW9uID0gJ0Jhc2ljICcgKyBidG9hKHVzZXJuYW1lICsgJzonICsgcGFzc3dvcmQpO1xuICAgIH1cblxuICAgIHJlcXVlc3Qub3Blbihjb25maWcubWV0aG9kLnRvVXBwZXJDYXNlKCksIGJ1aWxkVVJMKGNvbmZpZy51cmwsIGNvbmZpZy5wYXJhbXMsIGNvbmZpZy5wYXJhbXNTZXJpYWxpemVyKSwgdHJ1ZSk7XG5cbiAgICAvLyBTZXQgdGhlIHJlcXVlc3QgdGltZW91dCBpbiBNU1xuICAgIHJlcXVlc3QudGltZW91dCA9IGNvbmZpZy50aW1lb3V0O1xuXG4gICAgLy8gTGlzdGVuIGZvciByZWFkeSBzdGF0ZVxuICAgIHJlcXVlc3RbbG9hZEV2ZW50XSA9IGZ1bmN0aW9uIGhhbmRsZUxvYWQoKSB7XG4gICAgICBpZiAoIXJlcXVlc3QgfHwgKHJlcXVlc3QucmVhZHlTdGF0ZSAhPT0gNCAmJiAheERvbWFpbikpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICAvLyBUaGUgcmVxdWVzdCBlcnJvcmVkIG91dCBhbmQgd2UgZGlkbid0IGdldCBhIHJlc3BvbnNlLCB0aGlzIHdpbGwgYmVcbiAgICAgIC8vIGhhbmRsZWQgYnkgb25lcnJvciBpbnN0ZWFkXG4gICAgICAvLyBXaXRoIG9uZSBleGNlcHRpb246IHJlcXVlc3QgdGhhdCB1c2luZyBmaWxlOiBwcm90b2NvbCwgbW9zdCBicm93c2Vyc1xuICAgICAgLy8gd2lsbCByZXR1cm4gc3RhdHVzIGFzIDAgZXZlbiB0aG91Z2ggaXQncyBhIHN1Y2Nlc3NmdWwgcmVxdWVzdFxuICAgICAgaWYgKHJlcXVlc3Quc3RhdHVzID09PSAwICYmICEocmVxdWVzdC5yZXNwb25zZVVSTCAmJiByZXF1ZXN0LnJlc3BvbnNlVVJMLmluZGV4T2YoJ2ZpbGU6JykgPT09IDApKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgLy8gUHJlcGFyZSB0aGUgcmVzcG9uc2VcbiAgICAgIHZhciByZXNwb25zZUhlYWRlcnMgPSAnZ2V0QWxsUmVzcG9uc2VIZWFkZXJzJyBpbiByZXF1ZXN0ID8gcGFyc2VIZWFkZXJzKHJlcXVlc3QuZ2V0QWxsUmVzcG9uc2VIZWFkZXJzKCkpIDogbnVsbDtcbiAgICAgIHZhciByZXNwb25zZURhdGEgPSAhY29uZmlnLnJlc3BvbnNlVHlwZSB8fCBjb25maWcucmVzcG9uc2VUeXBlID09PSAndGV4dCcgPyByZXF1ZXN0LnJlc3BvbnNlVGV4dCA6IHJlcXVlc3QucmVzcG9uc2U7XG4gICAgICB2YXIgcmVzcG9uc2UgPSB7XG4gICAgICAgIGRhdGE6IHJlc3BvbnNlRGF0YSxcbiAgICAgICAgLy8gSUUgc2VuZHMgMTIyMyBpbnN0ZWFkIG9mIDIwNCAoaHR0cHM6Ly9naXRodWIuY29tL2F4aW9zL2F4aW9zL2lzc3Vlcy8yMDEpXG4gICAgICAgIHN0YXR1czogcmVxdWVzdC5zdGF0dXMgPT09IDEyMjMgPyAyMDQgOiByZXF1ZXN0LnN0YXR1cyxcbiAgICAgICAgc3RhdHVzVGV4dDogcmVxdWVzdC5zdGF0dXMgPT09IDEyMjMgPyAnTm8gQ29udGVudCcgOiByZXF1ZXN0LnN0YXR1c1RleHQsXG4gICAgICAgIGhlYWRlcnM6IHJlc3BvbnNlSGVhZGVycyxcbiAgICAgICAgY29uZmlnOiBjb25maWcsXG4gICAgICAgIHJlcXVlc3Q6IHJlcXVlc3RcbiAgICAgIH07XG5cbiAgICAgIHNldHRsZShyZXNvbHZlLCByZWplY3QsIHJlc3BvbnNlKTtcblxuICAgICAgLy8gQ2xlYW4gdXAgcmVxdWVzdFxuICAgICAgcmVxdWVzdCA9IG51bGw7XG4gICAgfTtcblxuICAgIC8vIEhhbmRsZSBsb3cgbGV2ZWwgbmV0d29yayBlcnJvcnNcbiAgICByZXF1ZXN0Lm9uZXJyb3IgPSBmdW5jdGlvbiBoYW5kbGVFcnJvcigpIHtcbiAgICAgIC8vIFJlYWwgZXJyb3JzIGFyZSBoaWRkZW4gZnJvbSB1cyBieSB0aGUgYnJvd3NlclxuICAgICAgLy8gb25lcnJvciBzaG91bGQgb25seSBmaXJlIGlmIGl0J3MgYSBuZXR3b3JrIGVycm9yXG4gICAgICByZWplY3QoY3JlYXRlRXJyb3IoJ05ldHdvcmsgRXJyb3InLCBjb25maWcsIG51bGwsIHJlcXVlc3QpKTtcblxuICAgICAgLy8gQ2xlYW4gdXAgcmVxdWVzdFxuICAgICAgcmVxdWVzdCA9IG51bGw7XG4gICAgfTtcblxuICAgIC8vIEhhbmRsZSB0aW1lb3V0XG4gICAgcmVxdWVzdC5vbnRpbWVvdXQgPSBmdW5jdGlvbiBoYW5kbGVUaW1lb3V0KCkge1xuICAgICAgcmVqZWN0KGNyZWF0ZUVycm9yKCd0aW1lb3V0IG9mICcgKyBjb25maWcudGltZW91dCArICdtcyBleGNlZWRlZCcsIGNvbmZpZywgJ0VDT05OQUJPUlRFRCcsXG4gICAgICAgIHJlcXVlc3QpKTtcblxuICAgICAgLy8gQ2xlYW4gdXAgcmVxdWVzdFxuICAgICAgcmVxdWVzdCA9IG51bGw7XG4gICAgfTtcblxuICAgIC8vIEFkZCB4c3JmIGhlYWRlclxuICAgIC8vIFRoaXMgaXMgb25seSBkb25lIGlmIHJ1bm5pbmcgaW4gYSBzdGFuZGFyZCBicm93c2VyIGVudmlyb25tZW50LlxuICAgIC8vIFNwZWNpZmljYWxseSBub3QgaWYgd2UncmUgaW4gYSB3ZWIgd29ya2VyLCBvciByZWFjdC1uYXRpdmUuXG4gICAgaWYgKHV0aWxzLmlzU3RhbmRhcmRCcm93c2VyRW52KCkpIHtcbiAgICAgIHZhciBjb29raWVzID0gcmVxdWlyZSgnLi8uLi9oZWxwZXJzL2Nvb2tpZXMnKTtcblxuICAgICAgLy8gQWRkIHhzcmYgaGVhZGVyXG4gICAgICB2YXIgeHNyZlZhbHVlID0gKGNvbmZpZy53aXRoQ3JlZGVudGlhbHMgfHwgaXNVUkxTYW1lT3JpZ2luKGNvbmZpZy51cmwpKSAmJiBjb25maWcueHNyZkNvb2tpZU5hbWUgP1xuICAgICAgICAgIGNvb2tpZXMucmVhZChjb25maWcueHNyZkNvb2tpZU5hbWUpIDpcbiAgICAgICAgICB1bmRlZmluZWQ7XG5cbiAgICAgIGlmICh4c3JmVmFsdWUpIHtcbiAgICAgICAgcmVxdWVzdEhlYWRlcnNbY29uZmlnLnhzcmZIZWFkZXJOYW1lXSA9IHhzcmZWYWx1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBBZGQgaGVhZGVycyB0byB0aGUgcmVxdWVzdFxuICAgIGlmICgnc2V0UmVxdWVzdEhlYWRlcicgaW4gcmVxdWVzdCkge1xuICAgICAgdXRpbHMuZm9yRWFjaChyZXF1ZXN0SGVhZGVycywgZnVuY3Rpb24gc2V0UmVxdWVzdEhlYWRlcih2YWwsIGtleSkge1xuICAgICAgICBpZiAodHlwZW9mIHJlcXVlc3REYXRhID09PSAndW5kZWZpbmVkJyAmJiBrZXkudG9Mb3dlckNhc2UoKSA9PT0gJ2NvbnRlbnQtdHlwZScpIHtcbiAgICAgICAgICAvLyBSZW1vdmUgQ29udGVudC1UeXBlIGlmIGRhdGEgaXMgdW5kZWZpbmVkXG4gICAgICAgICAgZGVsZXRlIHJlcXVlc3RIZWFkZXJzW2tleV07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLy8gT3RoZXJ3aXNlIGFkZCBoZWFkZXIgdG8gdGhlIHJlcXVlc3RcbiAgICAgICAgICByZXF1ZXN0LnNldFJlcXVlc3RIZWFkZXIoa2V5LCB2YWwpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICAvLyBBZGQgd2l0aENyZWRlbnRpYWxzIHRvIHJlcXVlc3QgaWYgbmVlZGVkXG4gICAgaWYgKGNvbmZpZy53aXRoQ3JlZGVudGlhbHMpIHtcbiAgICAgIHJlcXVlc3Qud2l0aENyZWRlbnRpYWxzID0gdHJ1ZTtcbiAgICB9XG5cbiAgICAvLyBBZGQgcmVzcG9uc2VUeXBlIHRvIHJlcXVlc3QgaWYgbmVlZGVkXG4gICAgaWYgKGNvbmZpZy5yZXNwb25zZVR5cGUpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHJlcXVlc3QucmVzcG9uc2VUeXBlID0gY29uZmlnLnJlc3BvbnNlVHlwZTtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gRXhwZWN0ZWQgRE9NRXhjZXB0aW9uIHRocm93biBieSBicm93c2VycyBub3QgY29tcGF0aWJsZSBYTUxIdHRwUmVxdWVzdCBMZXZlbCAyLlxuICAgICAgICAvLyBCdXQsIHRoaXMgY2FuIGJlIHN1cHByZXNzZWQgZm9yICdqc29uJyB0eXBlIGFzIGl0IGNhbiBiZSBwYXJzZWQgYnkgZGVmYXVsdCAndHJhbnNmb3JtUmVzcG9uc2UnIGZ1bmN0aW9uLlxuICAgICAgICBpZiAoY29uZmlnLnJlc3BvbnNlVHlwZSAhPT0gJ2pzb24nKSB7XG4gICAgICAgICAgdGhyb3cgZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIC8vIEhhbmRsZSBwcm9ncmVzcyBpZiBuZWVkZWRcbiAgICBpZiAodHlwZW9mIGNvbmZpZy5vbkRvd25sb2FkUHJvZ3Jlc3MgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHJlcXVlc3QuYWRkRXZlbnRMaXN0ZW5lcigncHJvZ3Jlc3MnLCBjb25maWcub25Eb3dubG9hZFByb2dyZXNzKTtcbiAgICB9XG5cbiAgICAvLyBOb3QgYWxsIGJyb3dzZXJzIHN1cHBvcnQgdXBsb2FkIGV2ZW50c1xuICAgIGlmICh0eXBlb2YgY29uZmlnLm9uVXBsb2FkUHJvZ3Jlc3MgPT09ICdmdW5jdGlvbicgJiYgcmVxdWVzdC51cGxvYWQpIHtcbiAgICAgIHJlcXVlc3QudXBsb2FkLmFkZEV2ZW50TGlzdGVuZXIoJ3Byb2dyZXNzJywgY29uZmlnLm9uVXBsb2FkUHJvZ3Jlc3MpO1xuICAgIH1cblxuICAgIGlmIChjb25maWcuY2FuY2VsVG9rZW4pIHtcbiAgICAgIC8vIEhhbmRsZSBjYW5jZWxsYXRpb25cbiAgICAgIGNvbmZpZy5jYW5jZWxUb2tlbi5wcm9taXNlLnRoZW4oZnVuY3Rpb24gb25DYW5jZWxlZChjYW5jZWwpIHtcbiAgICAgICAgaWYgKCFyZXF1ZXN0KSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgcmVxdWVzdC5hYm9ydCgpO1xuICAgICAgICByZWplY3QoY2FuY2VsKTtcbiAgICAgICAgLy8gQ2xlYW4gdXAgcmVxdWVzdFxuICAgICAgICByZXF1ZXN0ID0gbnVsbDtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlmIChyZXF1ZXN0RGF0YSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXF1ZXN0RGF0YSA9IG51bGw7XG4gICAgfVxuXG4gICAgLy8gU2VuZCB0aGUgcmVxdWVzdFxuICAgIHJlcXVlc3Quc2VuZChyZXF1ZXN0RGF0YSk7XG4gIH0pO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9hZGFwdGVycy94aHIuanNcbi8vIG1vZHVsZSBpZCA9IC4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9hZGFwdGVycy94aHIuanNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuL3V0aWxzJyk7XG52YXIgYmluZCA9IHJlcXVpcmUoJy4vaGVscGVycy9iaW5kJyk7XG52YXIgQXhpb3MgPSByZXF1aXJlKCcuL2NvcmUvQXhpb3MnKTtcbnZhciBkZWZhdWx0cyA9IHJlcXVpcmUoJy4vZGVmYXVsdHMnKTtcblxuLyoqXG4gKiBDcmVhdGUgYW4gaW5zdGFuY2Ugb2YgQXhpb3NcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gZGVmYXVsdENvbmZpZyBUaGUgZGVmYXVsdCBjb25maWcgZm9yIHRoZSBpbnN0YW5jZVxuICogQHJldHVybiB7QXhpb3N9IEEgbmV3IGluc3RhbmNlIG9mIEF4aW9zXG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZUluc3RhbmNlKGRlZmF1bHRDb25maWcpIHtcbiAgdmFyIGNvbnRleHQgPSBuZXcgQXhpb3MoZGVmYXVsdENvbmZpZyk7XG4gIHZhciBpbnN0YW5jZSA9IGJpbmQoQXhpb3MucHJvdG90eXBlLnJlcXVlc3QsIGNvbnRleHQpO1xuXG4gIC8vIENvcHkgYXhpb3MucHJvdG90eXBlIHRvIGluc3RhbmNlXG4gIHV0aWxzLmV4dGVuZChpbnN0YW5jZSwgQXhpb3MucHJvdG90eXBlLCBjb250ZXh0KTtcblxuICAvLyBDb3B5IGNvbnRleHQgdG8gaW5zdGFuY2VcbiAgdXRpbHMuZXh0ZW5kKGluc3RhbmNlLCBjb250ZXh0KTtcblxuICByZXR1cm4gaW5zdGFuY2U7XG59XG5cbi8vIENyZWF0ZSB0aGUgZGVmYXVsdCBpbnN0YW5jZSB0byBiZSBleHBvcnRlZFxudmFyIGF4aW9zID0gY3JlYXRlSW5zdGFuY2UoZGVmYXVsdHMpO1xuXG4vLyBFeHBvc2UgQXhpb3MgY2xhc3MgdG8gYWxsb3cgY2xhc3MgaW5oZXJpdGFuY2VcbmF4aW9zLkF4aW9zID0gQXhpb3M7XG5cbi8vIEZhY3RvcnkgZm9yIGNyZWF0aW5nIG5ldyBpbnN0YW5jZXNcbmF4aW9zLmNyZWF0ZSA9IGZ1bmN0aW9uIGNyZWF0ZShpbnN0YW5jZUNvbmZpZykge1xuICByZXR1cm4gY3JlYXRlSW5zdGFuY2UodXRpbHMubWVyZ2UoZGVmYXVsdHMsIGluc3RhbmNlQ29uZmlnKSk7XG59O1xuXG4vLyBFeHBvc2UgQ2FuY2VsICYgQ2FuY2VsVG9rZW5cbmF4aW9zLkNhbmNlbCA9IHJlcXVpcmUoJy4vY2FuY2VsL0NhbmNlbCcpO1xuYXhpb3MuQ2FuY2VsVG9rZW4gPSByZXF1aXJlKCcuL2NhbmNlbC9DYW5jZWxUb2tlbicpO1xuYXhpb3MuaXNDYW5jZWwgPSByZXF1aXJlKCcuL2NhbmNlbC9pc0NhbmNlbCcpO1xuXG4vLyBFeHBvc2UgYWxsL3NwcmVhZFxuYXhpb3MuYWxsID0gZnVuY3Rpb24gYWxsKHByb21pc2VzKSB7XG4gIHJldHVybiBQcm9taXNlLmFsbChwcm9taXNlcyk7XG59O1xuYXhpb3Muc3ByZWFkID0gcmVxdWlyZSgnLi9oZWxwZXJzL3NwcmVhZCcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGF4aW9zO1xuXG4vLyBBbGxvdyB1c2Ugb2YgZGVmYXVsdCBpbXBvcnQgc3ludGF4IGluIFR5cGVTY3JpcHRcbm1vZHVsZS5leHBvcnRzLmRlZmF1bHQgPSBheGlvcztcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9heGlvcy5qc1xuLy8gbW9kdWxlIGlkID0gLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2F4aW9zLmpzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcblxuLyoqXG4gKiBBIGBDYW5jZWxgIGlzIGFuIG9iamVjdCB0aGF0IGlzIHRocm93biB3aGVuIGFuIG9wZXJhdGlvbiBpcyBjYW5jZWxlZC5cbiAqXG4gKiBAY2xhc3NcbiAqIEBwYXJhbSB7c3RyaW5nPX0gbWVzc2FnZSBUaGUgbWVzc2FnZS5cbiAqL1xuZnVuY3Rpb24gQ2FuY2VsKG1lc3NhZ2UpIHtcbiAgdGhpcy5tZXNzYWdlID0gbWVzc2FnZTtcbn1cblxuQ2FuY2VsLnByb3RvdHlwZS50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICByZXR1cm4gJ0NhbmNlbCcgKyAodGhpcy5tZXNzYWdlID8gJzogJyArIHRoaXMubWVzc2FnZSA6ICcnKTtcbn07XG5cbkNhbmNlbC5wcm90b3R5cGUuX19DQU5DRUxfXyA9IHRydWU7XG5cbm1vZHVsZS5leHBvcnRzID0gQ2FuY2VsO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NhbmNlbC9DYW5jZWwuanNcbi8vIG1vZHVsZSBpZCA9IC4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jYW5jZWwvQ2FuY2VsLmpzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcblxudmFyIENhbmNlbCA9IHJlcXVpcmUoJy4vQ2FuY2VsJyk7XG5cbi8qKlxuICogQSBgQ2FuY2VsVG9rZW5gIGlzIGFuIG9iamVjdCB0aGF0IGNhbiBiZSB1c2VkIHRvIHJlcXVlc3QgY2FuY2VsbGF0aW9uIG9mIGFuIG9wZXJhdGlvbi5cbiAqXG4gKiBAY2xhc3NcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGV4ZWN1dG9yIFRoZSBleGVjdXRvciBmdW5jdGlvbi5cbiAqL1xuZnVuY3Rpb24gQ2FuY2VsVG9rZW4oZXhlY3V0b3IpIHtcbiAgaWYgKHR5cGVvZiBleGVjdXRvciAhPT0gJ2Z1bmN0aW9uJykge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ2V4ZWN1dG9yIG11c3QgYmUgYSBmdW5jdGlvbi4nKTtcbiAgfVxuXG4gIHZhciByZXNvbHZlUHJvbWlzZTtcbiAgdGhpcy5wcm9taXNlID0gbmV3IFByb21pc2UoZnVuY3Rpb24gcHJvbWlzZUV4ZWN1dG9yKHJlc29sdmUpIHtcbiAgICByZXNvbHZlUHJvbWlzZSA9IHJlc29sdmU7XG4gIH0pO1xuXG4gIHZhciB0b2tlbiA9IHRoaXM7XG4gIGV4ZWN1dG9yKGZ1bmN0aW9uIGNhbmNlbChtZXNzYWdlKSB7XG4gICAgaWYgKHRva2VuLnJlYXNvbikge1xuICAgICAgLy8gQ2FuY2VsbGF0aW9uIGhhcyBhbHJlYWR5IGJlZW4gcmVxdWVzdGVkXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdG9rZW4ucmVhc29uID0gbmV3IENhbmNlbChtZXNzYWdlKTtcbiAgICByZXNvbHZlUHJvbWlzZSh0b2tlbi5yZWFzb24pO1xuICB9KTtcbn1cblxuLyoqXG4gKiBUaHJvd3MgYSBgQ2FuY2VsYCBpZiBjYW5jZWxsYXRpb24gaGFzIGJlZW4gcmVxdWVzdGVkLlxuICovXG5DYW5jZWxUb2tlbi5wcm90b3R5cGUudGhyb3dJZlJlcXVlc3RlZCA9IGZ1bmN0aW9uIHRocm93SWZSZXF1ZXN0ZWQoKSB7XG4gIGlmICh0aGlzLnJlYXNvbikge1xuICAgIHRocm93IHRoaXMucmVhc29uO1xuICB9XG59O1xuXG4vKipcbiAqIFJldHVybnMgYW4gb2JqZWN0IHRoYXQgY29udGFpbnMgYSBuZXcgYENhbmNlbFRva2VuYCBhbmQgYSBmdW5jdGlvbiB0aGF0LCB3aGVuIGNhbGxlZCxcbiAqIGNhbmNlbHMgdGhlIGBDYW5jZWxUb2tlbmAuXG4gKi9cbkNhbmNlbFRva2VuLnNvdXJjZSA9IGZ1bmN0aW9uIHNvdXJjZSgpIHtcbiAgdmFyIGNhbmNlbDtcbiAgdmFyIHRva2VuID0gbmV3IENhbmNlbFRva2VuKGZ1bmN0aW9uIGV4ZWN1dG9yKGMpIHtcbiAgICBjYW5jZWwgPSBjO1xuICB9KTtcbiAgcmV0dXJuIHtcbiAgICB0b2tlbjogdG9rZW4sXG4gICAgY2FuY2VsOiBjYW5jZWxcbiAgfTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gQ2FuY2VsVG9rZW47XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY2FuY2VsL0NhbmNlbFRva2VuLmpzXG4vLyBtb2R1bGUgaWQgPSAuL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY2FuY2VsL0NhbmNlbFRva2VuLmpzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBpc0NhbmNlbCh2YWx1ZSkge1xuICByZXR1cm4gISEodmFsdWUgJiYgdmFsdWUuX19DQU5DRUxfXyk7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NhbmNlbC9pc0NhbmNlbC5qc1xuLy8gbW9kdWxlIGlkID0gLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NhbmNlbC9pc0NhbmNlbC5qc1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG5cbnZhciBkZWZhdWx0cyA9IHJlcXVpcmUoJy4vLi4vZGVmYXVsdHMnKTtcbnZhciB1dGlscyA9IHJlcXVpcmUoJy4vLi4vdXRpbHMnKTtcbnZhciBJbnRlcmNlcHRvck1hbmFnZXIgPSByZXF1aXJlKCcuL0ludGVyY2VwdG9yTWFuYWdlcicpO1xudmFyIGRpc3BhdGNoUmVxdWVzdCA9IHJlcXVpcmUoJy4vZGlzcGF0Y2hSZXF1ZXN0Jyk7XG5cbi8qKlxuICogQ3JlYXRlIGEgbmV3IGluc3RhbmNlIG9mIEF4aW9zXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IGluc3RhbmNlQ29uZmlnIFRoZSBkZWZhdWx0IGNvbmZpZyBmb3IgdGhlIGluc3RhbmNlXG4gKi9cbmZ1bmN0aW9uIEF4aW9zKGluc3RhbmNlQ29uZmlnKSB7XG4gIHRoaXMuZGVmYXVsdHMgPSBpbnN0YW5jZUNvbmZpZztcbiAgdGhpcy5pbnRlcmNlcHRvcnMgPSB7XG4gICAgcmVxdWVzdDogbmV3IEludGVyY2VwdG9yTWFuYWdlcigpLFxuICAgIHJlc3BvbnNlOiBuZXcgSW50ZXJjZXB0b3JNYW5hZ2VyKClcbiAgfTtcbn1cblxuLyoqXG4gKiBEaXNwYXRjaCBhIHJlcXVlc3RcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gY29uZmlnIFRoZSBjb25maWcgc3BlY2lmaWMgZm9yIHRoaXMgcmVxdWVzdCAobWVyZ2VkIHdpdGggdGhpcy5kZWZhdWx0cylcbiAqL1xuQXhpb3MucHJvdG90eXBlLnJlcXVlc3QgPSBmdW5jdGlvbiByZXF1ZXN0KGNvbmZpZykge1xuICAvKmVzbGludCBuby1wYXJhbS1yZWFzc2lnbjowKi9cbiAgLy8gQWxsb3cgZm9yIGF4aW9zKCdleGFtcGxlL3VybCdbLCBjb25maWddKSBhIGxhIGZldGNoIEFQSVxuICBpZiAodHlwZW9mIGNvbmZpZyA9PT0gJ3N0cmluZycpIHtcbiAgICBjb25maWcgPSB1dGlscy5tZXJnZSh7XG4gICAgICB1cmw6IGFyZ3VtZW50c1swXVxuICAgIH0sIGFyZ3VtZW50c1sxXSk7XG4gIH1cblxuICBjb25maWcgPSB1dGlscy5tZXJnZShkZWZhdWx0cywgdGhpcy5kZWZhdWx0cywgeyBtZXRob2Q6ICdnZXQnIH0sIGNvbmZpZyk7XG4gIGNvbmZpZy5tZXRob2QgPSBjb25maWcubWV0aG9kLnRvTG93ZXJDYXNlKCk7XG5cbiAgLy8gSG9vayB1cCBpbnRlcmNlcHRvcnMgbWlkZGxld2FyZVxuICB2YXIgY2hhaW4gPSBbZGlzcGF0Y2hSZXF1ZXN0LCB1bmRlZmluZWRdO1xuICB2YXIgcHJvbWlzZSA9IFByb21pc2UucmVzb2x2ZShjb25maWcpO1xuXG4gIHRoaXMuaW50ZXJjZXB0b3JzLnJlcXVlc3QuZm9yRWFjaChmdW5jdGlvbiB1bnNoaWZ0UmVxdWVzdEludGVyY2VwdG9ycyhpbnRlcmNlcHRvcikge1xuICAgIGNoYWluLnVuc2hpZnQoaW50ZXJjZXB0b3IuZnVsZmlsbGVkLCBpbnRlcmNlcHRvci5yZWplY3RlZCk7XG4gIH0pO1xuXG4gIHRoaXMuaW50ZXJjZXB0b3JzLnJlc3BvbnNlLmZvckVhY2goZnVuY3Rpb24gcHVzaFJlc3BvbnNlSW50ZXJjZXB0b3JzKGludGVyY2VwdG9yKSB7XG4gICAgY2hhaW4ucHVzaChpbnRlcmNlcHRvci5mdWxmaWxsZWQsIGludGVyY2VwdG9yLnJlamVjdGVkKTtcbiAgfSk7XG5cbiAgd2hpbGUgKGNoYWluLmxlbmd0aCkge1xuICAgIHByb21pc2UgPSBwcm9taXNlLnRoZW4oY2hhaW4uc2hpZnQoKSwgY2hhaW4uc2hpZnQoKSk7XG4gIH1cblxuICByZXR1cm4gcHJvbWlzZTtcbn07XG5cbi8vIFByb3ZpZGUgYWxpYXNlcyBmb3Igc3VwcG9ydGVkIHJlcXVlc3QgbWV0aG9kc1xudXRpbHMuZm9yRWFjaChbJ2RlbGV0ZScsICdnZXQnLCAnaGVhZCcsICdvcHRpb25zJ10sIGZ1bmN0aW9uIGZvckVhY2hNZXRob2ROb0RhdGEobWV0aG9kKSB7XG4gIC8qZXNsaW50IGZ1bmMtbmFtZXM6MCovXG4gIEF4aW9zLnByb3RvdHlwZVttZXRob2RdID0gZnVuY3Rpb24odXJsLCBjb25maWcpIHtcbiAgICByZXR1cm4gdGhpcy5yZXF1ZXN0KHV0aWxzLm1lcmdlKGNvbmZpZyB8fCB7fSwge1xuICAgICAgbWV0aG9kOiBtZXRob2QsXG4gICAgICB1cmw6IHVybFxuICAgIH0pKTtcbiAgfTtcbn0pO1xuXG51dGlscy5mb3JFYWNoKFsncG9zdCcsICdwdXQnLCAncGF0Y2gnXSwgZnVuY3Rpb24gZm9yRWFjaE1ldGhvZFdpdGhEYXRhKG1ldGhvZCkge1xuICAvKmVzbGludCBmdW5jLW5hbWVzOjAqL1xuICBBeGlvcy5wcm90b3R5cGVbbWV0aG9kXSA9IGZ1bmN0aW9uKHVybCwgZGF0YSwgY29uZmlnKSB7XG4gICAgcmV0dXJuIHRoaXMucmVxdWVzdCh1dGlscy5tZXJnZShjb25maWcgfHwge30sIHtcbiAgICAgIG1ldGhvZDogbWV0aG9kLFxuICAgICAgdXJsOiB1cmwsXG4gICAgICBkYXRhOiBkYXRhXG4gICAgfSkpO1xuICB9O1xufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gQXhpb3M7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY29yZS9BeGlvcy5qc1xuLy8gbW9kdWxlIGlkID0gLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NvcmUvQXhpb3MuanNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuLy4uL3V0aWxzJyk7XG5cbmZ1bmN0aW9uIEludGVyY2VwdG9yTWFuYWdlcigpIHtcbiAgdGhpcy5oYW5kbGVycyA9IFtdO1xufVxuXG4vKipcbiAqIEFkZCBhIG5ldyBpbnRlcmNlcHRvciB0byB0aGUgc3RhY2tcbiAqXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdWxmaWxsZWQgVGhlIGZ1bmN0aW9uIHRvIGhhbmRsZSBgdGhlbmAgZm9yIGEgYFByb21pc2VgXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSByZWplY3RlZCBUaGUgZnVuY3Rpb24gdG8gaGFuZGxlIGByZWplY3RgIGZvciBhIGBQcm9taXNlYFxuICpcbiAqIEByZXR1cm4ge051bWJlcn0gQW4gSUQgdXNlZCB0byByZW1vdmUgaW50ZXJjZXB0b3IgbGF0ZXJcbiAqL1xuSW50ZXJjZXB0b3JNYW5hZ2VyLnByb3RvdHlwZS51c2UgPSBmdW5jdGlvbiB1c2UoZnVsZmlsbGVkLCByZWplY3RlZCkge1xuICB0aGlzLmhhbmRsZXJzLnB1c2goe1xuICAgIGZ1bGZpbGxlZDogZnVsZmlsbGVkLFxuICAgIHJlamVjdGVkOiByZWplY3RlZFxuICB9KTtcbiAgcmV0dXJuIHRoaXMuaGFuZGxlcnMubGVuZ3RoIC0gMTtcbn07XG5cbi8qKlxuICogUmVtb3ZlIGFuIGludGVyY2VwdG9yIGZyb20gdGhlIHN0YWNrXG4gKlxuICogQHBhcmFtIHtOdW1iZXJ9IGlkIFRoZSBJRCB0aGF0IHdhcyByZXR1cm5lZCBieSBgdXNlYFxuICovXG5JbnRlcmNlcHRvck1hbmFnZXIucHJvdG90eXBlLmVqZWN0ID0gZnVuY3Rpb24gZWplY3QoaWQpIHtcbiAgaWYgKHRoaXMuaGFuZGxlcnNbaWRdKSB7XG4gICAgdGhpcy5oYW5kbGVyc1tpZF0gPSBudWxsO1xuICB9XG59O1xuXG4vKipcbiAqIEl0ZXJhdGUgb3ZlciBhbGwgdGhlIHJlZ2lzdGVyZWQgaW50ZXJjZXB0b3JzXG4gKlxuICogVGhpcyBtZXRob2QgaXMgcGFydGljdWxhcmx5IHVzZWZ1bCBmb3Igc2tpcHBpbmcgb3ZlciBhbnlcbiAqIGludGVyY2VwdG9ycyB0aGF0IG1heSBoYXZlIGJlY29tZSBgbnVsbGAgY2FsbGluZyBgZWplY3RgLlxuICpcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZuIFRoZSBmdW5jdGlvbiB0byBjYWxsIGZvciBlYWNoIGludGVyY2VwdG9yXG4gKi9cbkludGVyY2VwdG9yTWFuYWdlci5wcm90b3R5cGUuZm9yRWFjaCA9IGZ1bmN0aW9uIGZvckVhY2goZm4pIHtcbiAgdXRpbHMuZm9yRWFjaCh0aGlzLmhhbmRsZXJzLCBmdW5jdGlvbiBmb3JFYWNoSGFuZGxlcihoKSB7XG4gICAgaWYgKGggIT09IG51bGwpIHtcbiAgICAgIGZuKGgpO1xuICAgIH1cbiAgfSk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IEludGVyY2VwdG9yTWFuYWdlcjtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jb3JlL0ludGVyY2VwdG9yTWFuYWdlci5qc1xuLy8gbW9kdWxlIGlkID0gLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NvcmUvSW50ZXJjZXB0b3JNYW5hZ2VyLmpzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcblxudmFyIGVuaGFuY2VFcnJvciA9IHJlcXVpcmUoJy4vZW5oYW5jZUVycm9yJyk7XG5cbi8qKlxuICogQ3JlYXRlIGFuIEVycm9yIHdpdGggdGhlIHNwZWNpZmllZCBtZXNzYWdlLCBjb25maWcsIGVycm9yIGNvZGUsIHJlcXVlc3QgYW5kIHJlc3BvbnNlLlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBtZXNzYWdlIFRoZSBlcnJvciBtZXNzYWdlLlxuICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZyBUaGUgY29uZmlnLlxuICogQHBhcmFtIHtzdHJpbmd9IFtjb2RlXSBUaGUgZXJyb3IgY29kZSAoZm9yIGV4YW1wbGUsICdFQ09OTkFCT1JURUQnKS5cbiAqIEBwYXJhbSB7T2JqZWN0fSBbcmVxdWVzdF0gVGhlIHJlcXVlc3QuXG4gKiBAcGFyYW0ge09iamVjdH0gW3Jlc3BvbnNlXSBUaGUgcmVzcG9uc2UuXG4gKiBAcmV0dXJucyB7RXJyb3J9IFRoZSBjcmVhdGVkIGVycm9yLlxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGNyZWF0ZUVycm9yKG1lc3NhZ2UsIGNvbmZpZywgY29kZSwgcmVxdWVzdCwgcmVzcG9uc2UpIHtcbiAgdmFyIGVycm9yID0gbmV3IEVycm9yKG1lc3NhZ2UpO1xuICByZXR1cm4gZW5oYW5jZUVycm9yKGVycm9yLCBjb25maWcsIGNvZGUsIHJlcXVlc3QsIHJlc3BvbnNlKTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY29yZS9jcmVhdGVFcnJvci5qc1xuLy8gbW9kdWxlIGlkID0gLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NvcmUvY3JlYXRlRXJyb3IuanNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuLy4uL3V0aWxzJyk7XG52YXIgdHJhbnNmb3JtRGF0YSA9IHJlcXVpcmUoJy4vdHJhbnNmb3JtRGF0YScpO1xudmFyIGlzQ2FuY2VsID0gcmVxdWlyZSgnLi4vY2FuY2VsL2lzQ2FuY2VsJyk7XG52YXIgZGVmYXVsdHMgPSByZXF1aXJlKCcuLi9kZWZhdWx0cycpO1xudmFyIGlzQWJzb2x1dGVVUkwgPSByZXF1aXJlKCcuLy4uL2hlbHBlcnMvaXNBYnNvbHV0ZVVSTCcpO1xudmFyIGNvbWJpbmVVUkxzID0gcmVxdWlyZSgnLi8uLi9oZWxwZXJzL2NvbWJpbmVVUkxzJyk7XG5cbi8qKlxuICogVGhyb3dzIGEgYENhbmNlbGAgaWYgY2FuY2VsbGF0aW9uIGhhcyBiZWVuIHJlcXVlc3RlZC5cbiAqL1xuZnVuY3Rpb24gdGhyb3dJZkNhbmNlbGxhdGlvblJlcXVlc3RlZChjb25maWcpIHtcbiAgaWYgKGNvbmZpZy5jYW5jZWxUb2tlbikge1xuICAgIGNvbmZpZy5jYW5jZWxUb2tlbi50aHJvd0lmUmVxdWVzdGVkKCk7XG4gIH1cbn1cblxuLyoqXG4gKiBEaXNwYXRjaCBhIHJlcXVlc3QgdG8gdGhlIHNlcnZlciB1c2luZyB0aGUgY29uZmlndXJlZCBhZGFwdGVyLlxuICpcbiAqIEBwYXJhbSB7b2JqZWN0fSBjb25maWcgVGhlIGNvbmZpZyB0aGF0IGlzIHRvIGJlIHVzZWQgZm9yIHRoZSByZXF1ZXN0XG4gKiBAcmV0dXJucyB7UHJvbWlzZX0gVGhlIFByb21pc2UgdG8gYmUgZnVsZmlsbGVkXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gZGlzcGF0Y2hSZXF1ZXN0KGNvbmZpZykge1xuICB0aHJvd0lmQ2FuY2VsbGF0aW9uUmVxdWVzdGVkKGNvbmZpZyk7XG5cbiAgLy8gU3VwcG9ydCBiYXNlVVJMIGNvbmZpZ1xuICBpZiAoY29uZmlnLmJhc2VVUkwgJiYgIWlzQWJzb2x1dGVVUkwoY29uZmlnLnVybCkpIHtcbiAgICBjb25maWcudXJsID0gY29tYmluZVVSTHMoY29uZmlnLmJhc2VVUkwsIGNvbmZpZy51cmwpO1xuICB9XG5cbiAgLy8gRW5zdXJlIGhlYWRlcnMgZXhpc3RcbiAgY29uZmlnLmhlYWRlcnMgPSBjb25maWcuaGVhZGVycyB8fCB7fTtcblxuICAvLyBUcmFuc2Zvcm0gcmVxdWVzdCBkYXRhXG4gIGNvbmZpZy5kYXRhID0gdHJhbnNmb3JtRGF0YShcbiAgICBjb25maWcuZGF0YSxcbiAgICBjb25maWcuaGVhZGVycyxcbiAgICBjb25maWcudHJhbnNmb3JtUmVxdWVzdFxuICApO1xuXG4gIC8vIEZsYXR0ZW4gaGVhZGVyc1xuICBjb25maWcuaGVhZGVycyA9IHV0aWxzLm1lcmdlKFxuICAgIGNvbmZpZy5oZWFkZXJzLmNvbW1vbiB8fCB7fSxcbiAgICBjb25maWcuaGVhZGVyc1tjb25maWcubWV0aG9kXSB8fCB7fSxcbiAgICBjb25maWcuaGVhZGVycyB8fCB7fVxuICApO1xuXG4gIHV0aWxzLmZvckVhY2goXG4gICAgWydkZWxldGUnLCAnZ2V0JywgJ2hlYWQnLCAncG9zdCcsICdwdXQnLCAncGF0Y2gnLCAnY29tbW9uJ10sXG4gICAgZnVuY3Rpb24gY2xlYW5IZWFkZXJDb25maWcobWV0aG9kKSB7XG4gICAgICBkZWxldGUgY29uZmlnLmhlYWRlcnNbbWV0aG9kXTtcbiAgICB9XG4gICk7XG5cbiAgdmFyIGFkYXB0ZXIgPSBjb25maWcuYWRhcHRlciB8fCBkZWZhdWx0cy5hZGFwdGVyO1xuXG4gIHJldHVybiBhZGFwdGVyKGNvbmZpZykudGhlbihmdW5jdGlvbiBvbkFkYXB0ZXJSZXNvbHV0aW9uKHJlc3BvbnNlKSB7XG4gICAgdGhyb3dJZkNhbmNlbGxhdGlvblJlcXVlc3RlZChjb25maWcpO1xuXG4gICAgLy8gVHJhbnNmb3JtIHJlc3BvbnNlIGRhdGFcbiAgICByZXNwb25zZS5kYXRhID0gdHJhbnNmb3JtRGF0YShcbiAgICAgIHJlc3BvbnNlLmRhdGEsXG4gICAgICByZXNwb25zZS5oZWFkZXJzLFxuICAgICAgY29uZmlnLnRyYW5zZm9ybVJlc3BvbnNlXG4gICAgKTtcblxuICAgIHJldHVybiByZXNwb25zZTtcbiAgfSwgZnVuY3Rpb24gb25BZGFwdGVyUmVqZWN0aW9uKHJlYXNvbikge1xuICAgIGlmICghaXNDYW5jZWwocmVhc29uKSkge1xuICAgICAgdGhyb3dJZkNhbmNlbGxhdGlvblJlcXVlc3RlZChjb25maWcpO1xuXG4gICAgICAvLyBUcmFuc2Zvcm0gcmVzcG9uc2UgZGF0YVxuICAgICAgaWYgKHJlYXNvbiAmJiByZWFzb24ucmVzcG9uc2UpIHtcbiAgICAgICAgcmVhc29uLnJlc3BvbnNlLmRhdGEgPSB0cmFuc2Zvcm1EYXRhKFxuICAgICAgICAgIHJlYXNvbi5yZXNwb25zZS5kYXRhLFxuICAgICAgICAgIHJlYXNvbi5yZXNwb25zZS5oZWFkZXJzLFxuICAgICAgICAgIGNvbmZpZy50cmFuc2Zvcm1SZXNwb25zZVxuICAgICAgICApO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBQcm9taXNlLnJlamVjdChyZWFzb24pO1xuICB9KTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY29yZS9kaXNwYXRjaFJlcXVlc3QuanNcbi8vIG1vZHVsZSBpZCA9IC4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jb3JlL2Rpc3BhdGNoUmVxdWVzdC5qc1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG5cbi8qKlxuICogVXBkYXRlIGFuIEVycm9yIHdpdGggdGhlIHNwZWNpZmllZCBjb25maWcsIGVycm9yIGNvZGUsIGFuZCByZXNwb25zZS5cbiAqXG4gKiBAcGFyYW0ge0Vycm9yfSBlcnJvciBUaGUgZXJyb3IgdG8gdXBkYXRlLlxuICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZyBUaGUgY29uZmlnLlxuICogQHBhcmFtIHtzdHJpbmd9IFtjb2RlXSBUaGUgZXJyb3IgY29kZSAoZm9yIGV4YW1wbGUsICdFQ09OTkFCT1JURUQnKS5cbiAqIEBwYXJhbSB7T2JqZWN0fSBbcmVxdWVzdF0gVGhlIHJlcXVlc3QuXG4gKiBAcGFyYW0ge09iamVjdH0gW3Jlc3BvbnNlXSBUaGUgcmVzcG9uc2UuXG4gKiBAcmV0dXJucyB7RXJyb3J9IFRoZSBlcnJvci5cbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBlbmhhbmNlRXJyb3IoZXJyb3IsIGNvbmZpZywgY29kZSwgcmVxdWVzdCwgcmVzcG9uc2UpIHtcbiAgZXJyb3IuY29uZmlnID0gY29uZmlnO1xuICBpZiAoY29kZSkge1xuICAgIGVycm9yLmNvZGUgPSBjb2RlO1xuICB9XG4gIGVycm9yLnJlcXVlc3QgPSByZXF1ZXN0O1xuICBlcnJvci5yZXNwb25zZSA9IHJlc3BvbnNlO1xuICByZXR1cm4gZXJyb3I7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NvcmUvZW5oYW5jZUVycm9yLmpzXG4vLyBtb2R1bGUgaWQgPSAuL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY29yZS9lbmhhbmNlRXJyb3IuanNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgY3JlYXRlRXJyb3IgPSByZXF1aXJlKCcuL2NyZWF0ZUVycm9yJyk7XG5cbi8qKlxuICogUmVzb2x2ZSBvciByZWplY3QgYSBQcm9taXNlIGJhc2VkIG9uIHJlc3BvbnNlIHN0YXR1cy5cbiAqXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSByZXNvbHZlIEEgZnVuY3Rpb24gdGhhdCByZXNvbHZlcyB0aGUgcHJvbWlzZS5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IHJlamVjdCBBIGZ1bmN0aW9uIHRoYXQgcmVqZWN0cyB0aGUgcHJvbWlzZS5cbiAqIEBwYXJhbSB7b2JqZWN0fSByZXNwb25zZSBUaGUgcmVzcG9uc2UuXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gc2V0dGxlKHJlc29sdmUsIHJlamVjdCwgcmVzcG9uc2UpIHtcbiAgdmFyIHZhbGlkYXRlU3RhdHVzID0gcmVzcG9uc2UuY29uZmlnLnZhbGlkYXRlU3RhdHVzO1xuICAvLyBOb3RlOiBzdGF0dXMgaXMgbm90IGV4cG9zZWQgYnkgWERvbWFpblJlcXVlc3RcbiAgaWYgKCFyZXNwb25zZS5zdGF0dXMgfHwgIXZhbGlkYXRlU3RhdHVzIHx8IHZhbGlkYXRlU3RhdHVzKHJlc3BvbnNlLnN0YXR1cykpIHtcbiAgICByZXNvbHZlKHJlc3BvbnNlKTtcbiAgfSBlbHNlIHtcbiAgICByZWplY3QoY3JlYXRlRXJyb3IoXG4gICAgICAnUmVxdWVzdCBmYWlsZWQgd2l0aCBzdGF0dXMgY29kZSAnICsgcmVzcG9uc2Uuc3RhdHVzLFxuICAgICAgcmVzcG9uc2UuY29uZmlnLFxuICAgICAgbnVsbCxcbiAgICAgIHJlc3BvbnNlLnJlcXVlc3QsXG4gICAgICByZXNwb25zZVxuICAgICkpO1xuICB9XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NvcmUvc2V0dGxlLmpzXG4vLyBtb2R1bGUgaWQgPSAuL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY29yZS9zZXR0bGUuanNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuLy4uL3V0aWxzJyk7XG5cbi8qKlxuICogVHJhbnNmb3JtIHRoZSBkYXRhIGZvciBhIHJlcXVlc3Qgb3IgYSByZXNwb25zZVxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fFN0cmluZ30gZGF0YSBUaGUgZGF0YSB0byBiZSB0cmFuc2Zvcm1lZFxuICogQHBhcmFtIHtBcnJheX0gaGVhZGVycyBUaGUgaGVhZGVycyBmb3IgdGhlIHJlcXVlc3Qgb3IgcmVzcG9uc2VcbiAqIEBwYXJhbSB7QXJyYXl8RnVuY3Rpb259IGZucyBBIHNpbmdsZSBmdW5jdGlvbiBvciBBcnJheSBvZiBmdW5jdGlvbnNcbiAqIEByZXR1cm5zIHsqfSBUaGUgcmVzdWx0aW5nIHRyYW5zZm9ybWVkIGRhdGFcbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiB0cmFuc2Zvcm1EYXRhKGRhdGEsIGhlYWRlcnMsIGZucykge1xuICAvKmVzbGludCBuby1wYXJhbS1yZWFzc2lnbjowKi9cbiAgdXRpbHMuZm9yRWFjaChmbnMsIGZ1bmN0aW9uIHRyYW5zZm9ybShmbikge1xuICAgIGRhdGEgPSBmbihkYXRhLCBoZWFkZXJzKTtcbiAgfSk7XG5cbiAgcmV0dXJuIGRhdGE7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NvcmUvdHJhbnNmb3JtRGF0YS5qc1xuLy8gbW9kdWxlIGlkID0gLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NvcmUvdHJhbnNmb3JtRGF0YS5qc1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG5cbnZhciB1dGlscyA9IHJlcXVpcmUoJy4vdXRpbHMnKTtcbnZhciBub3JtYWxpemVIZWFkZXJOYW1lID0gcmVxdWlyZSgnLi9oZWxwZXJzL25vcm1hbGl6ZUhlYWRlck5hbWUnKTtcblxudmFyIERFRkFVTFRfQ09OVEVOVF9UWVBFID0ge1xuICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCdcbn07XG5cbmZ1bmN0aW9uIHNldENvbnRlbnRUeXBlSWZVbnNldChoZWFkZXJzLCB2YWx1ZSkge1xuICBpZiAoIXV0aWxzLmlzVW5kZWZpbmVkKGhlYWRlcnMpICYmIHV0aWxzLmlzVW5kZWZpbmVkKGhlYWRlcnNbJ0NvbnRlbnQtVHlwZSddKSkge1xuICAgIGhlYWRlcnNbJ0NvbnRlbnQtVHlwZSddID0gdmFsdWU7XG4gIH1cbn1cblxuZnVuY3Rpb24gZ2V0RGVmYXVsdEFkYXB0ZXIoKSB7XG4gIHZhciBhZGFwdGVyO1xuICBpZiAodHlwZW9mIFhNTEh0dHBSZXF1ZXN0ICE9PSAndW5kZWZpbmVkJykge1xuICAgIC8vIEZvciBicm93c2VycyB1c2UgWEhSIGFkYXB0ZXJcbiAgICBhZGFwdGVyID0gcmVxdWlyZSgnLi9hZGFwdGVycy94aHInKTtcbiAgfSBlbHNlIGlmICh0eXBlb2YgcHJvY2VzcyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAvLyBGb3Igbm9kZSB1c2UgSFRUUCBhZGFwdGVyXG4gICAgYWRhcHRlciA9IHJlcXVpcmUoJy4vYWRhcHRlcnMvaHR0cCcpO1xuICB9XG4gIHJldHVybiBhZGFwdGVyO1xufVxuXG52YXIgZGVmYXVsdHMgPSB7XG4gIGFkYXB0ZXI6IGdldERlZmF1bHRBZGFwdGVyKCksXG5cbiAgdHJhbnNmb3JtUmVxdWVzdDogW2Z1bmN0aW9uIHRyYW5zZm9ybVJlcXVlc3QoZGF0YSwgaGVhZGVycykge1xuICAgIG5vcm1hbGl6ZUhlYWRlck5hbWUoaGVhZGVycywgJ0NvbnRlbnQtVHlwZScpO1xuICAgIGlmICh1dGlscy5pc0Zvcm1EYXRhKGRhdGEpIHx8XG4gICAgICB1dGlscy5pc0FycmF5QnVmZmVyKGRhdGEpIHx8XG4gICAgICB1dGlscy5pc0J1ZmZlcihkYXRhKSB8fFxuICAgICAgdXRpbHMuaXNTdHJlYW0oZGF0YSkgfHxcbiAgICAgIHV0aWxzLmlzRmlsZShkYXRhKSB8fFxuICAgICAgdXRpbHMuaXNCbG9iKGRhdGEpXG4gICAgKSB7XG4gICAgICByZXR1cm4gZGF0YTtcbiAgICB9XG4gICAgaWYgKHV0aWxzLmlzQXJyYXlCdWZmZXJWaWV3KGRhdGEpKSB7XG4gICAgICByZXR1cm4gZGF0YS5idWZmZXI7XG4gICAgfVxuICAgIGlmICh1dGlscy5pc1VSTFNlYXJjaFBhcmFtcyhkYXRhKSkge1xuICAgICAgc2V0Q29udGVudFR5cGVJZlVuc2V0KGhlYWRlcnMsICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQ7Y2hhcnNldD11dGYtOCcpO1xuICAgICAgcmV0dXJuIGRhdGEudG9TdHJpbmcoKTtcbiAgICB9XG4gICAgaWYgKHV0aWxzLmlzT2JqZWN0KGRhdGEpKSB7XG4gICAgICBzZXRDb250ZW50VHlwZUlmVW5zZXQoaGVhZGVycywgJ2FwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtOCcpO1xuICAgICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KGRhdGEpO1xuICAgIH1cbiAgICByZXR1cm4gZGF0YTtcbiAgfV0sXG5cbiAgdHJhbnNmb3JtUmVzcG9uc2U6IFtmdW5jdGlvbiB0cmFuc2Zvcm1SZXNwb25zZShkYXRhKSB7XG4gICAgLyplc2xpbnQgbm8tcGFyYW0tcmVhc3NpZ246MCovXG4gICAgaWYgKHR5cGVvZiBkYXRhID09PSAnc3RyaW5nJykge1xuICAgICAgdHJ5IHtcbiAgICAgICAgZGF0YSA9IEpTT04ucGFyc2UoZGF0YSk7XG4gICAgICB9IGNhdGNoIChlKSB7IC8qIElnbm9yZSAqLyB9XG4gICAgfVxuICAgIHJldHVybiBkYXRhO1xuICB9XSxcblxuICB0aW1lb3V0OiAwLFxuXG4gIHhzcmZDb29raWVOYW1lOiAnWFNSRi1UT0tFTicsXG4gIHhzcmZIZWFkZXJOYW1lOiAnWC1YU1JGLVRPS0VOJyxcblxuICBtYXhDb250ZW50TGVuZ3RoOiAtMSxcblxuICB2YWxpZGF0ZVN0YXR1czogZnVuY3Rpb24gdmFsaWRhdGVTdGF0dXMoc3RhdHVzKSB7XG4gICAgcmV0dXJuIHN0YXR1cyA+PSAyMDAgJiYgc3RhdHVzIDwgMzAwO1xuICB9XG59O1xuXG5kZWZhdWx0cy5oZWFkZXJzID0ge1xuICBjb21tb246IHtcbiAgICAnQWNjZXB0JzogJ2FwcGxpY2F0aW9uL2pzb24sIHRleHQvcGxhaW4sICovKidcbiAgfVxufTtcblxudXRpbHMuZm9yRWFjaChbJ2RlbGV0ZScsICdnZXQnLCAnaGVhZCddLCBmdW5jdGlvbiBmb3JFYWNoTWV0aG9kTm9EYXRhKG1ldGhvZCkge1xuICBkZWZhdWx0cy5oZWFkZXJzW21ldGhvZF0gPSB7fTtcbn0pO1xuXG51dGlscy5mb3JFYWNoKFsncG9zdCcsICdwdXQnLCAncGF0Y2gnXSwgZnVuY3Rpb24gZm9yRWFjaE1ldGhvZFdpdGhEYXRhKG1ldGhvZCkge1xuICBkZWZhdWx0cy5oZWFkZXJzW21ldGhvZF0gPSB1dGlscy5tZXJnZShERUZBVUxUX0NPTlRFTlRfVFlQRSk7XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBkZWZhdWx0cztcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9kZWZhdWx0cy5qc1xuLy8gbW9kdWxlIGlkID0gLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2RlZmF1bHRzLmpzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBiaW5kKGZuLCB0aGlzQXJnKSB7XG4gIHJldHVybiBmdW5jdGlvbiB3cmFwKCkge1xuICAgIHZhciBhcmdzID0gbmV3IEFycmF5KGFyZ3VtZW50cy5sZW5ndGgpO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXJncy5sZW5ndGg7IGkrKykge1xuICAgICAgYXJnc1tpXSA9IGFyZ3VtZW50c1tpXTtcbiAgICB9XG4gICAgcmV0dXJuIGZuLmFwcGx5KHRoaXNBcmcsIGFyZ3MpO1xuICB9O1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL2JpbmQuanNcbi8vIG1vZHVsZSBpZCA9IC4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL2JpbmQuanNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuXG4vLyBidG9hIHBvbHlmaWxsIGZvciBJRTwxMCBjb3VydGVzeSBodHRwczovL2dpdGh1Yi5jb20vZGF2aWRjaGFtYmVycy9CYXNlNjQuanNcblxudmFyIGNoYXJzID0gJ0FCQ0RFRkdISUpLTE1OT1BRUlNUVVZXWFlaYWJjZGVmZ2hpamtsbW5vcHFyc3R1dnd4eXowMTIzNDU2Nzg5Ky89JztcblxuZnVuY3Rpb24gRSgpIHtcbiAgdGhpcy5tZXNzYWdlID0gJ1N0cmluZyBjb250YWlucyBhbiBpbnZhbGlkIGNoYXJhY3Rlcic7XG59XG5FLnByb3RvdHlwZSA9IG5ldyBFcnJvcjtcbkUucHJvdG90eXBlLmNvZGUgPSA1O1xuRS5wcm90b3R5cGUubmFtZSA9ICdJbnZhbGlkQ2hhcmFjdGVyRXJyb3InO1xuXG5mdW5jdGlvbiBidG9hKGlucHV0KSB7XG4gIHZhciBzdHIgPSBTdHJpbmcoaW5wdXQpO1xuICB2YXIgb3V0cHV0ID0gJyc7XG4gIGZvciAoXG4gICAgLy8gaW5pdGlhbGl6ZSByZXN1bHQgYW5kIGNvdW50ZXJcbiAgICB2YXIgYmxvY2ssIGNoYXJDb2RlLCBpZHggPSAwLCBtYXAgPSBjaGFycztcbiAgICAvLyBpZiB0aGUgbmV4dCBzdHIgaW5kZXggZG9lcyBub3QgZXhpc3Q6XG4gICAgLy8gICBjaGFuZ2UgdGhlIG1hcHBpbmcgdGFibGUgdG8gXCI9XCJcbiAgICAvLyAgIGNoZWNrIGlmIGQgaGFzIG5vIGZyYWN0aW9uYWwgZGlnaXRzXG4gICAgc3RyLmNoYXJBdChpZHggfCAwKSB8fCAobWFwID0gJz0nLCBpZHggJSAxKTtcbiAgICAvLyBcIjggLSBpZHggJSAxICogOFwiIGdlbmVyYXRlcyB0aGUgc2VxdWVuY2UgMiwgNCwgNiwgOFxuICAgIG91dHB1dCArPSBtYXAuY2hhckF0KDYzICYgYmxvY2sgPj4gOCAtIGlkeCAlIDEgKiA4KVxuICApIHtcbiAgICBjaGFyQ29kZSA9IHN0ci5jaGFyQ29kZUF0KGlkeCArPSAzIC8gNCk7XG4gICAgaWYgKGNoYXJDb2RlID4gMHhGRikge1xuICAgICAgdGhyb3cgbmV3IEUoKTtcbiAgICB9XG4gICAgYmxvY2sgPSBibG9jayA8PCA4IHwgY2hhckNvZGU7XG4gIH1cbiAgcmV0dXJuIG91dHB1dDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBidG9hO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvYnRvYS5qc1xuLy8gbW9kdWxlIGlkID0gLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvYnRvYS5qc1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG5cbnZhciB1dGlscyA9IHJlcXVpcmUoJy4vLi4vdXRpbHMnKTtcblxuZnVuY3Rpb24gZW5jb2RlKHZhbCkge1xuICByZXR1cm4gZW5jb2RlVVJJQ29tcG9uZW50KHZhbCkuXG4gICAgcmVwbGFjZSgvJTQwL2dpLCAnQCcpLlxuICAgIHJlcGxhY2UoLyUzQS9naSwgJzonKS5cbiAgICByZXBsYWNlKC8lMjQvZywgJyQnKS5cbiAgICByZXBsYWNlKC8lMkMvZ2ksICcsJykuXG4gICAgcmVwbGFjZSgvJTIwL2csICcrJykuXG4gICAgcmVwbGFjZSgvJTVCL2dpLCAnWycpLlxuICAgIHJlcGxhY2UoLyU1RC9naSwgJ10nKTtcbn1cblxuLyoqXG4gKiBCdWlsZCBhIFVSTCBieSBhcHBlbmRpbmcgcGFyYW1zIHRvIHRoZSBlbmRcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gdXJsIFRoZSBiYXNlIG9mIHRoZSB1cmwgKGUuZy4sIGh0dHA6Ly93d3cuZ29vZ2xlLmNvbSlcbiAqIEBwYXJhbSB7b2JqZWN0fSBbcGFyYW1zXSBUaGUgcGFyYW1zIHRvIGJlIGFwcGVuZGVkXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBUaGUgZm9ybWF0dGVkIHVybFxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGJ1aWxkVVJMKHVybCwgcGFyYW1zLCBwYXJhbXNTZXJpYWxpemVyKSB7XG4gIC8qZXNsaW50IG5vLXBhcmFtLXJlYXNzaWduOjAqL1xuICBpZiAoIXBhcmFtcykge1xuICAgIHJldHVybiB1cmw7XG4gIH1cblxuICB2YXIgc2VyaWFsaXplZFBhcmFtcztcbiAgaWYgKHBhcmFtc1NlcmlhbGl6ZXIpIHtcbiAgICBzZXJpYWxpemVkUGFyYW1zID0gcGFyYW1zU2VyaWFsaXplcihwYXJhbXMpO1xuICB9IGVsc2UgaWYgKHV0aWxzLmlzVVJMU2VhcmNoUGFyYW1zKHBhcmFtcykpIHtcbiAgICBzZXJpYWxpemVkUGFyYW1zID0gcGFyYW1zLnRvU3RyaW5nKCk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIHBhcnRzID0gW107XG5cbiAgICB1dGlscy5mb3JFYWNoKHBhcmFtcywgZnVuY3Rpb24gc2VyaWFsaXplKHZhbCwga2V5KSB7XG4gICAgICBpZiAodmFsID09PSBudWxsIHx8IHR5cGVvZiB2YWwgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgaWYgKHV0aWxzLmlzQXJyYXkodmFsKSkge1xuICAgICAgICBrZXkgPSBrZXkgKyAnW10nO1xuICAgICAgfVxuXG4gICAgICBpZiAoIXV0aWxzLmlzQXJyYXkodmFsKSkge1xuICAgICAgICB2YWwgPSBbdmFsXTtcbiAgICAgIH1cblxuICAgICAgdXRpbHMuZm9yRWFjaCh2YWwsIGZ1bmN0aW9uIHBhcnNlVmFsdWUodikge1xuICAgICAgICBpZiAodXRpbHMuaXNEYXRlKHYpKSB7XG4gICAgICAgICAgdiA9IHYudG9JU09TdHJpbmcoKTtcbiAgICAgICAgfSBlbHNlIGlmICh1dGlscy5pc09iamVjdCh2KSkge1xuICAgICAgICAgIHYgPSBKU09OLnN0cmluZ2lmeSh2KTtcbiAgICAgICAgfVxuICAgICAgICBwYXJ0cy5wdXNoKGVuY29kZShrZXkpICsgJz0nICsgZW5jb2RlKHYpKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgc2VyaWFsaXplZFBhcmFtcyA9IHBhcnRzLmpvaW4oJyYnKTtcbiAgfVxuXG4gIGlmIChzZXJpYWxpemVkUGFyYW1zKSB7XG4gICAgdXJsICs9ICh1cmwuaW5kZXhPZignPycpID09PSAtMSA/ICc/JyA6ICcmJykgKyBzZXJpYWxpemVkUGFyYW1zO1xuICB9XG5cbiAgcmV0dXJuIHVybDtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9idWlsZFVSTC5qc1xuLy8gbW9kdWxlIGlkID0gLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvYnVpbGRVUkwuanNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuXG4vKipcbiAqIENyZWF0ZXMgYSBuZXcgVVJMIGJ5IGNvbWJpbmluZyB0aGUgc3BlY2lmaWVkIFVSTHNcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gYmFzZVVSTCBUaGUgYmFzZSBVUkxcbiAqIEBwYXJhbSB7c3RyaW5nfSByZWxhdGl2ZVVSTCBUaGUgcmVsYXRpdmUgVVJMXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBUaGUgY29tYmluZWQgVVJMXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gY29tYmluZVVSTHMoYmFzZVVSTCwgcmVsYXRpdmVVUkwpIHtcbiAgcmV0dXJuIHJlbGF0aXZlVVJMXG4gICAgPyBiYXNlVVJMLnJlcGxhY2UoL1xcLyskLywgJycpICsgJy8nICsgcmVsYXRpdmVVUkwucmVwbGFjZSgvXlxcLysvLCAnJylcbiAgICA6IGJhc2VVUkw7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvY29tYmluZVVSTHMuanNcbi8vIG1vZHVsZSBpZCA9IC4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL2NvbWJpbmVVUkxzLmpzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcblxudmFyIHV0aWxzID0gcmVxdWlyZSgnLi8uLi91dGlscycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IChcbiAgdXRpbHMuaXNTdGFuZGFyZEJyb3dzZXJFbnYoKSA/XG5cbiAgLy8gU3RhbmRhcmQgYnJvd3NlciBlbnZzIHN1cHBvcnQgZG9jdW1lbnQuY29va2llXG4gIChmdW5jdGlvbiBzdGFuZGFyZEJyb3dzZXJFbnYoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHdyaXRlOiBmdW5jdGlvbiB3cml0ZShuYW1lLCB2YWx1ZSwgZXhwaXJlcywgcGF0aCwgZG9tYWluLCBzZWN1cmUpIHtcbiAgICAgICAgdmFyIGNvb2tpZSA9IFtdO1xuICAgICAgICBjb29raWUucHVzaChuYW1lICsgJz0nICsgZW5jb2RlVVJJQ29tcG9uZW50KHZhbHVlKSk7XG5cbiAgICAgICAgaWYgKHV0aWxzLmlzTnVtYmVyKGV4cGlyZXMpKSB7XG4gICAgICAgICAgY29va2llLnB1c2goJ2V4cGlyZXM9JyArIG5ldyBEYXRlKGV4cGlyZXMpLnRvR01UU3RyaW5nKCkpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHV0aWxzLmlzU3RyaW5nKHBhdGgpKSB7XG4gICAgICAgICAgY29va2llLnB1c2goJ3BhdGg9JyArIHBhdGgpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHV0aWxzLmlzU3RyaW5nKGRvbWFpbikpIHtcbiAgICAgICAgICBjb29raWUucHVzaCgnZG9tYWluPScgKyBkb21haW4pO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHNlY3VyZSA9PT0gdHJ1ZSkge1xuICAgICAgICAgIGNvb2tpZS5wdXNoKCdzZWN1cmUnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGRvY3VtZW50LmNvb2tpZSA9IGNvb2tpZS5qb2luKCc7ICcpO1xuICAgICAgfSxcblxuICAgICAgcmVhZDogZnVuY3Rpb24gcmVhZChuYW1lKSB7XG4gICAgICAgIHZhciBtYXRjaCA9IGRvY3VtZW50LmNvb2tpZS5tYXRjaChuZXcgUmVnRXhwKCcoXnw7XFxcXHMqKSgnICsgbmFtZSArICcpPShbXjtdKiknKSk7XG4gICAgICAgIHJldHVybiAobWF0Y2ggPyBkZWNvZGVVUklDb21wb25lbnQobWF0Y2hbM10pIDogbnVsbCk7XG4gICAgICB9LFxuXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZShuYW1lKSB7XG4gICAgICAgIHRoaXMud3JpdGUobmFtZSwgJycsIERhdGUubm93KCkgLSA4NjQwMDAwMCk7XG4gICAgICB9XG4gICAgfTtcbiAgfSkoKSA6XG5cbiAgLy8gTm9uIHN0YW5kYXJkIGJyb3dzZXIgZW52ICh3ZWIgd29ya2VycywgcmVhY3QtbmF0aXZlKSBsYWNrIG5lZWRlZCBzdXBwb3J0LlxuICAoZnVuY3Rpb24gbm9uU3RhbmRhcmRCcm93c2VyRW52KCkge1xuICAgIHJldHVybiB7XG4gICAgICB3cml0ZTogZnVuY3Rpb24gd3JpdGUoKSB7fSxcbiAgICAgIHJlYWQ6IGZ1bmN0aW9uIHJlYWQoKSB7IHJldHVybiBudWxsOyB9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH0pKClcbik7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9jb29raWVzLmpzXG4vLyBtb2R1bGUgaWQgPSAuL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9jb29raWVzLmpzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcblxuLyoqXG4gKiBEZXRlcm1pbmVzIHdoZXRoZXIgdGhlIHNwZWNpZmllZCBVUkwgaXMgYWJzb2x1dGVcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gdXJsIFRoZSBVUkwgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdGhlIHNwZWNpZmllZCBVUkwgaXMgYWJzb2x1dGUsIG90aGVyd2lzZSBmYWxzZVxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGlzQWJzb2x1dGVVUkwodXJsKSB7XG4gIC8vIEEgVVJMIGlzIGNvbnNpZGVyZWQgYWJzb2x1dGUgaWYgaXQgYmVnaW5zIHdpdGggXCI8c2NoZW1lPjovL1wiIG9yIFwiLy9cIiAocHJvdG9jb2wtcmVsYXRpdmUgVVJMKS5cbiAgLy8gUkZDIDM5ODYgZGVmaW5lcyBzY2hlbWUgbmFtZSBhcyBhIHNlcXVlbmNlIG9mIGNoYXJhY3RlcnMgYmVnaW5uaW5nIHdpdGggYSBsZXR0ZXIgYW5kIGZvbGxvd2VkXG4gIC8vIGJ5IGFueSBjb21iaW5hdGlvbiBvZiBsZXR0ZXJzLCBkaWdpdHMsIHBsdXMsIHBlcmlvZCwgb3IgaHlwaGVuLlxuICByZXR1cm4gL14oW2Etel1bYS16XFxkXFwrXFwtXFwuXSo6KT9cXC9cXC8vaS50ZXN0KHVybCk7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvaXNBYnNvbHV0ZVVSTC5qc1xuLy8gbW9kdWxlIGlkID0gLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvaXNBYnNvbHV0ZVVSTC5qc1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG5cbnZhciB1dGlscyA9IHJlcXVpcmUoJy4vLi4vdXRpbHMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSAoXG4gIHV0aWxzLmlzU3RhbmRhcmRCcm93c2VyRW52KCkgP1xuXG4gIC8vIFN0YW5kYXJkIGJyb3dzZXIgZW52cyBoYXZlIGZ1bGwgc3VwcG9ydCBvZiB0aGUgQVBJcyBuZWVkZWQgdG8gdGVzdFxuICAvLyB3aGV0aGVyIHRoZSByZXF1ZXN0IFVSTCBpcyBvZiB0aGUgc2FtZSBvcmlnaW4gYXMgY3VycmVudCBsb2NhdGlvbi5cbiAgKGZ1bmN0aW9uIHN0YW5kYXJkQnJvd3NlckVudigpIHtcbiAgICB2YXIgbXNpZSA9IC8obXNpZXx0cmlkZW50KS9pLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCk7XG4gICAgdmFyIHVybFBhcnNpbmdOb2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICAgIHZhciBvcmlnaW5VUkw7XG5cbiAgICAvKipcbiAgICAqIFBhcnNlIGEgVVJMIHRvIGRpc2NvdmVyIGl0J3MgY29tcG9uZW50c1xuICAgICpcbiAgICAqIEBwYXJhbSB7U3RyaW5nfSB1cmwgVGhlIFVSTCB0byBiZSBwYXJzZWRcbiAgICAqIEByZXR1cm5zIHtPYmplY3R9XG4gICAgKi9cbiAgICBmdW5jdGlvbiByZXNvbHZlVVJMKHVybCkge1xuICAgICAgdmFyIGhyZWYgPSB1cmw7XG5cbiAgICAgIGlmIChtc2llKSB7XG4gICAgICAgIC8vIElFIG5lZWRzIGF0dHJpYnV0ZSBzZXQgdHdpY2UgdG8gbm9ybWFsaXplIHByb3BlcnRpZXNcbiAgICAgICAgdXJsUGFyc2luZ05vZGUuc2V0QXR0cmlidXRlKCdocmVmJywgaHJlZik7XG4gICAgICAgIGhyZWYgPSB1cmxQYXJzaW5nTm9kZS5ocmVmO1xuICAgICAgfVxuXG4gICAgICB1cmxQYXJzaW5nTm9kZS5zZXRBdHRyaWJ1dGUoJ2hyZWYnLCBocmVmKTtcblxuICAgICAgLy8gdXJsUGFyc2luZ05vZGUgcHJvdmlkZXMgdGhlIFVybFV0aWxzIGludGVyZmFjZSAtIGh0dHA6Ly91cmwuc3BlYy53aGF0d2cub3JnLyN1cmx1dGlsc1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgaHJlZjogdXJsUGFyc2luZ05vZGUuaHJlZixcbiAgICAgICAgcHJvdG9jb2w6IHVybFBhcnNpbmdOb2RlLnByb3RvY29sID8gdXJsUGFyc2luZ05vZGUucHJvdG9jb2wucmVwbGFjZSgvOiQvLCAnJykgOiAnJyxcbiAgICAgICAgaG9zdDogdXJsUGFyc2luZ05vZGUuaG9zdCxcbiAgICAgICAgc2VhcmNoOiB1cmxQYXJzaW5nTm9kZS5zZWFyY2ggPyB1cmxQYXJzaW5nTm9kZS5zZWFyY2gucmVwbGFjZSgvXlxcPy8sICcnKSA6ICcnLFxuICAgICAgICBoYXNoOiB1cmxQYXJzaW5nTm9kZS5oYXNoID8gdXJsUGFyc2luZ05vZGUuaGFzaC5yZXBsYWNlKC9eIy8sICcnKSA6ICcnLFxuICAgICAgICBob3N0bmFtZTogdXJsUGFyc2luZ05vZGUuaG9zdG5hbWUsXG4gICAgICAgIHBvcnQ6IHVybFBhcnNpbmdOb2RlLnBvcnQsXG4gICAgICAgIHBhdGhuYW1lOiAodXJsUGFyc2luZ05vZGUucGF0aG5hbWUuY2hhckF0KDApID09PSAnLycpID9cbiAgICAgICAgICAgICAgICAgIHVybFBhcnNpbmdOb2RlLnBhdGhuYW1lIDpcbiAgICAgICAgICAgICAgICAgICcvJyArIHVybFBhcnNpbmdOb2RlLnBhdGhuYW1lXG4gICAgICB9O1xuICAgIH1cblxuICAgIG9yaWdpblVSTCA9IHJlc29sdmVVUkwod2luZG93LmxvY2F0aW9uLmhyZWYpO1xuXG4gICAgLyoqXG4gICAgKiBEZXRlcm1pbmUgaWYgYSBVUkwgc2hhcmVzIHRoZSBzYW1lIG9yaWdpbiBhcyB0aGUgY3VycmVudCBsb2NhdGlvblxuICAgICpcbiAgICAqIEBwYXJhbSB7U3RyaW5nfSByZXF1ZXN0VVJMIFRoZSBVUkwgdG8gdGVzdFxuICAgICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgVVJMIHNoYXJlcyB0aGUgc2FtZSBvcmlnaW4sIG90aGVyd2lzZSBmYWxzZVxuICAgICovXG4gICAgcmV0dXJuIGZ1bmN0aW9uIGlzVVJMU2FtZU9yaWdpbihyZXF1ZXN0VVJMKSB7XG4gICAgICB2YXIgcGFyc2VkID0gKHV0aWxzLmlzU3RyaW5nKHJlcXVlc3RVUkwpKSA/IHJlc29sdmVVUkwocmVxdWVzdFVSTCkgOiByZXF1ZXN0VVJMO1xuICAgICAgcmV0dXJuIChwYXJzZWQucHJvdG9jb2wgPT09IG9yaWdpblVSTC5wcm90b2NvbCAmJlxuICAgICAgICAgICAgcGFyc2VkLmhvc3QgPT09IG9yaWdpblVSTC5ob3N0KTtcbiAgICB9O1xuICB9KSgpIDpcblxuICAvLyBOb24gc3RhbmRhcmQgYnJvd3NlciBlbnZzICh3ZWIgd29ya2VycywgcmVhY3QtbmF0aXZlKSBsYWNrIG5lZWRlZCBzdXBwb3J0LlxuICAoZnVuY3Rpb24gbm9uU3RhbmRhcmRCcm93c2VyRW52KCkge1xuICAgIHJldHVybiBmdW5jdGlvbiBpc1VSTFNhbWVPcmlnaW4oKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9O1xuICB9KSgpXG4pO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvaXNVUkxTYW1lT3JpZ2luLmpzXG4vLyBtb2R1bGUgaWQgPSAuL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9pc1VSTFNhbWVPcmlnaW4uanNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuLi91dGlscycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIG5vcm1hbGl6ZUhlYWRlck5hbWUoaGVhZGVycywgbm9ybWFsaXplZE5hbWUpIHtcbiAgdXRpbHMuZm9yRWFjaChoZWFkZXJzLCBmdW5jdGlvbiBwcm9jZXNzSGVhZGVyKHZhbHVlLCBuYW1lKSB7XG4gICAgaWYgKG5hbWUgIT09IG5vcm1hbGl6ZWROYW1lICYmIG5hbWUudG9VcHBlckNhc2UoKSA9PT0gbm9ybWFsaXplZE5hbWUudG9VcHBlckNhc2UoKSkge1xuICAgICAgaGVhZGVyc1tub3JtYWxpemVkTmFtZV0gPSB2YWx1ZTtcbiAgICAgIGRlbGV0ZSBoZWFkZXJzW25hbWVdO1xuICAgIH1cbiAgfSk7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvbm9ybWFsaXplSGVhZGVyTmFtZS5qc1xuLy8gbW9kdWxlIGlkID0gLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvbm9ybWFsaXplSGVhZGVyTmFtZS5qc1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG5cbnZhciB1dGlscyA9IHJlcXVpcmUoJy4vLi4vdXRpbHMnKTtcblxuLy8gSGVhZGVycyB3aG9zZSBkdXBsaWNhdGVzIGFyZSBpZ25vcmVkIGJ5IG5vZGVcbi8vIGMuZi4gaHR0cHM6Ly9ub2RlanMub3JnL2FwaS9odHRwLmh0bWwjaHR0cF9tZXNzYWdlX2hlYWRlcnNcbnZhciBpZ25vcmVEdXBsaWNhdGVPZiA9IFtcbiAgJ2FnZScsICdhdXRob3JpemF0aW9uJywgJ2NvbnRlbnQtbGVuZ3RoJywgJ2NvbnRlbnQtdHlwZScsICdldGFnJyxcbiAgJ2V4cGlyZXMnLCAnZnJvbScsICdob3N0JywgJ2lmLW1vZGlmaWVkLXNpbmNlJywgJ2lmLXVubW9kaWZpZWQtc2luY2UnLFxuICAnbGFzdC1tb2RpZmllZCcsICdsb2NhdGlvbicsICdtYXgtZm9yd2FyZHMnLCAncHJveHktYXV0aG9yaXphdGlvbicsXG4gICdyZWZlcmVyJywgJ3JldHJ5LWFmdGVyJywgJ3VzZXItYWdlbnQnXG5dO1xuXG4vKipcbiAqIFBhcnNlIGhlYWRlcnMgaW50byBhbiBvYmplY3RcbiAqXG4gKiBgYGBcbiAqIERhdGU6IFdlZCwgMjcgQXVnIDIwMTQgMDg6NTg6NDkgR01UXG4gKiBDb250ZW50LVR5cGU6IGFwcGxpY2F0aW9uL2pzb25cbiAqIENvbm5lY3Rpb246IGtlZXAtYWxpdmVcbiAqIFRyYW5zZmVyLUVuY29kaW5nOiBjaHVua2VkXG4gKiBgYGBcbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gaGVhZGVycyBIZWFkZXJzIG5lZWRpbmcgdG8gYmUgcGFyc2VkXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBIZWFkZXJzIHBhcnNlZCBpbnRvIGFuIG9iamVjdFxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIHBhcnNlSGVhZGVycyhoZWFkZXJzKSB7XG4gIHZhciBwYXJzZWQgPSB7fTtcbiAgdmFyIGtleTtcbiAgdmFyIHZhbDtcbiAgdmFyIGk7XG5cbiAgaWYgKCFoZWFkZXJzKSB7IHJldHVybiBwYXJzZWQ7IH1cblxuICB1dGlscy5mb3JFYWNoKGhlYWRlcnMuc3BsaXQoJ1xcbicpLCBmdW5jdGlvbiBwYXJzZXIobGluZSkge1xuICAgIGkgPSBsaW5lLmluZGV4T2YoJzonKTtcbiAgICBrZXkgPSB1dGlscy50cmltKGxpbmUuc3Vic3RyKDAsIGkpKS50b0xvd2VyQ2FzZSgpO1xuICAgIHZhbCA9IHV0aWxzLnRyaW0obGluZS5zdWJzdHIoaSArIDEpKTtcblxuICAgIGlmIChrZXkpIHtcbiAgICAgIGlmIChwYXJzZWRba2V5XSAmJiBpZ25vcmVEdXBsaWNhdGVPZi5pbmRleE9mKGtleSkgPj0gMCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBpZiAoa2V5ID09PSAnc2V0LWNvb2tpZScpIHtcbiAgICAgICAgcGFyc2VkW2tleV0gPSAocGFyc2VkW2tleV0gPyBwYXJzZWRba2V5XSA6IFtdKS5jb25jYXQoW3ZhbF0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcGFyc2VkW2tleV0gPSBwYXJzZWRba2V5XSA/IHBhcnNlZFtrZXldICsgJywgJyArIHZhbCA6IHZhbDtcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiBwYXJzZWQ7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvcGFyc2VIZWFkZXJzLmpzXG4vLyBtb2R1bGUgaWQgPSAuL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9wYXJzZUhlYWRlcnMuanNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuXG4vKipcbiAqIFN5bnRhY3RpYyBzdWdhciBmb3IgaW52b2tpbmcgYSBmdW5jdGlvbiBhbmQgZXhwYW5kaW5nIGFuIGFycmF5IGZvciBhcmd1bWVudHMuXG4gKlxuICogQ29tbW9uIHVzZSBjYXNlIHdvdWxkIGJlIHRvIHVzZSBgRnVuY3Rpb24ucHJvdG90eXBlLmFwcGx5YC5cbiAqXG4gKiAgYGBganNcbiAqICBmdW5jdGlvbiBmKHgsIHksIHopIHt9XG4gKiAgdmFyIGFyZ3MgPSBbMSwgMiwgM107XG4gKiAgZi5hcHBseShudWxsLCBhcmdzKTtcbiAqICBgYGBcbiAqXG4gKiBXaXRoIGBzcHJlYWRgIHRoaXMgZXhhbXBsZSBjYW4gYmUgcmUtd3JpdHRlbi5cbiAqXG4gKiAgYGBganNcbiAqICBzcHJlYWQoZnVuY3Rpb24oeCwgeSwgeikge30pKFsxLCAyLCAzXSk7XG4gKiAgYGBgXG4gKlxuICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2tcbiAqIEByZXR1cm5zIHtGdW5jdGlvbn1cbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBzcHJlYWQoY2FsbGJhY2spIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIHdyYXAoYXJyKSB7XG4gICAgcmV0dXJuIGNhbGxiYWNrLmFwcGx5KG51bGwsIGFycik7XG4gIH07XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvc3ByZWFkLmpzXG4vLyBtb2R1bGUgaWQgPSAuL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9zcHJlYWQuanNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgYmluZCA9IHJlcXVpcmUoJy4vaGVscGVycy9iaW5kJyk7XG52YXIgaXNCdWZmZXIgPSByZXF1aXJlKCdpcy1idWZmZXInKTtcblxuLypnbG9iYWwgdG9TdHJpbmc6dHJ1ZSovXG5cbi8vIHV0aWxzIGlzIGEgbGlicmFyeSBvZiBnZW5lcmljIGhlbHBlciBmdW5jdGlvbnMgbm9uLXNwZWNpZmljIHRvIGF4aW9zXG5cbnZhciB0b1N0cmluZyA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmc7XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYW4gQXJyYXlcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhbiBBcnJheSwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzQXJyYXkodmFsKSB7XG4gIHJldHVybiB0b1N0cmluZy5jYWxsKHZhbCkgPT09ICdbb2JqZWN0IEFycmF5XSc7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYW4gQXJyYXlCdWZmZXJcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhbiBBcnJheUJ1ZmZlciwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzQXJyYXlCdWZmZXIodmFsKSB7XG4gIHJldHVybiB0b1N0cmluZy5jYWxsKHZhbCkgPT09ICdbb2JqZWN0IEFycmF5QnVmZmVyXSc7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSBGb3JtRGF0YVxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGFuIEZvcm1EYXRhLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNGb3JtRGF0YSh2YWwpIHtcbiAgcmV0dXJuICh0eXBlb2YgRm9ybURhdGEgIT09ICd1bmRlZmluZWQnKSAmJiAodmFsIGluc3RhbmNlb2YgRm9ybURhdGEpO1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGEgdmlldyBvbiBhbiBBcnJheUJ1ZmZlclxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGEgdmlldyBvbiBhbiBBcnJheUJ1ZmZlciwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzQXJyYXlCdWZmZXJWaWV3KHZhbCkge1xuICB2YXIgcmVzdWx0O1xuICBpZiAoKHR5cGVvZiBBcnJheUJ1ZmZlciAhPT0gJ3VuZGVmaW5lZCcpICYmIChBcnJheUJ1ZmZlci5pc1ZpZXcpKSB7XG4gICAgcmVzdWx0ID0gQXJyYXlCdWZmZXIuaXNWaWV3KHZhbCk7XG4gIH0gZWxzZSB7XG4gICAgcmVzdWx0ID0gKHZhbCkgJiYgKHZhbC5idWZmZXIpICYmICh2YWwuYnVmZmVyIGluc3RhbmNlb2YgQXJyYXlCdWZmZXIpO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSBTdHJpbmdcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhIFN0cmluZywgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzU3RyaW5nKHZhbCkge1xuICByZXR1cm4gdHlwZW9mIHZhbCA9PT0gJ3N0cmluZyc7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSBOdW1iZXJcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhIE51bWJlciwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzTnVtYmVyKHZhbCkge1xuICByZXR1cm4gdHlwZW9mIHZhbCA9PT0gJ251bWJlcic7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgdW5kZWZpbmVkXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdGhlIHZhbHVlIGlzIHVuZGVmaW5lZCwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzVW5kZWZpbmVkKHZhbCkge1xuICByZXR1cm4gdHlwZW9mIHZhbCA9PT0gJ3VuZGVmaW5lZCc7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYW4gT2JqZWN0XG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYW4gT2JqZWN0LCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNPYmplY3QodmFsKSB7XG4gIHJldHVybiB2YWwgIT09IG51bGwgJiYgdHlwZW9mIHZhbCA9PT0gJ29iamVjdCc7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSBEYXRlXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYSBEYXRlLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNEYXRlKHZhbCkge1xuICByZXR1cm4gdG9TdHJpbmcuY2FsbCh2YWwpID09PSAnW29iamVjdCBEYXRlXSc7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSBGaWxlXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYSBGaWxlLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNGaWxlKHZhbCkge1xuICByZXR1cm4gdG9TdHJpbmcuY2FsbCh2YWwpID09PSAnW29iamVjdCBGaWxlXSc7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSBCbG9iXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYSBCbG9iLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNCbG9iKHZhbCkge1xuICByZXR1cm4gdG9TdHJpbmcuY2FsbCh2YWwpID09PSAnW29iamVjdCBCbG9iXSc7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSBGdW5jdGlvblxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGEgRnVuY3Rpb24sIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0Z1bmN0aW9uKHZhbCkge1xuICByZXR1cm4gdG9TdHJpbmcuY2FsbCh2YWwpID09PSAnW29iamVjdCBGdW5jdGlvbl0nO1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGEgU3RyZWFtXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYSBTdHJlYW0sIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc1N0cmVhbSh2YWwpIHtcbiAgcmV0dXJuIGlzT2JqZWN0KHZhbCkgJiYgaXNGdW5jdGlvbih2YWwucGlwZSk7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSBVUkxTZWFyY2hQYXJhbXMgb2JqZWN0XG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYSBVUkxTZWFyY2hQYXJhbXMgb2JqZWN0LCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNVUkxTZWFyY2hQYXJhbXModmFsKSB7XG4gIHJldHVybiB0eXBlb2YgVVJMU2VhcmNoUGFyYW1zICE9PSAndW5kZWZpbmVkJyAmJiB2YWwgaW5zdGFuY2VvZiBVUkxTZWFyY2hQYXJhbXM7XG59XG5cbi8qKlxuICogVHJpbSBleGNlc3Mgd2hpdGVzcGFjZSBvZmYgdGhlIGJlZ2lubmluZyBhbmQgZW5kIG9mIGEgc3RyaW5nXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IHN0ciBUaGUgU3RyaW5nIHRvIHRyaW1cbiAqIEByZXR1cm5zIHtTdHJpbmd9IFRoZSBTdHJpbmcgZnJlZWQgb2YgZXhjZXNzIHdoaXRlc3BhY2VcbiAqL1xuZnVuY3Rpb24gdHJpbShzdHIpIHtcbiAgcmV0dXJuIHN0ci5yZXBsYWNlKC9eXFxzKi8sICcnKS5yZXBsYWNlKC9cXHMqJC8sICcnKTtcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgd2UncmUgcnVubmluZyBpbiBhIHN0YW5kYXJkIGJyb3dzZXIgZW52aXJvbm1lbnRcbiAqXG4gKiBUaGlzIGFsbG93cyBheGlvcyB0byBydW4gaW4gYSB3ZWIgd29ya2VyLCBhbmQgcmVhY3QtbmF0aXZlLlxuICogQm90aCBlbnZpcm9ubWVudHMgc3VwcG9ydCBYTUxIdHRwUmVxdWVzdCwgYnV0IG5vdCBmdWxseSBzdGFuZGFyZCBnbG9iYWxzLlxuICpcbiAqIHdlYiB3b3JrZXJzOlxuICogIHR5cGVvZiB3aW5kb3cgLT4gdW5kZWZpbmVkXG4gKiAgdHlwZW9mIGRvY3VtZW50IC0+IHVuZGVmaW5lZFxuICpcbiAqIHJlYWN0LW5hdGl2ZTpcbiAqICBuYXZpZ2F0b3IucHJvZHVjdCAtPiAnUmVhY3ROYXRpdmUnXG4gKi9cbmZ1bmN0aW9uIGlzU3RhbmRhcmRCcm93c2VyRW52KCkge1xuICBpZiAodHlwZW9mIG5hdmlnYXRvciAhPT0gJ3VuZGVmaW5lZCcgJiYgbmF2aWdhdG9yLnByb2R1Y3QgPT09ICdSZWFjdE5hdGl2ZScpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgcmV0dXJuIChcbiAgICB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJlxuICAgIHR5cGVvZiBkb2N1bWVudCAhPT0gJ3VuZGVmaW5lZCdcbiAgKTtcbn1cblxuLyoqXG4gKiBJdGVyYXRlIG92ZXIgYW4gQXJyYXkgb3IgYW4gT2JqZWN0IGludm9raW5nIGEgZnVuY3Rpb24gZm9yIGVhY2ggaXRlbS5cbiAqXG4gKiBJZiBgb2JqYCBpcyBhbiBBcnJheSBjYWxsYmFjayB3aWxsIGJlIGNhbGxlZCBwYXNzaW5nXG4gKiB0aGUgdmFsdWUsIGluZGV4LCBhbmQgY29tcGxldGUgYXJyYXkgZm9yIGVhY2ggaXRlbS5cbiAqXG4gKiBJZiAnb2JqJyBpcyBhbiBPYmplY3QgY2FsbGJhY2sgd2lsbCBiZSBjYWxsZWQgcGFzc2luZ1xuICogdGhlIHZhbHVlLCBrZXksIGFuZCBjb21wbGV0ZSBvYmplY3QgZm9yIGVhY2ggcHJvcGVydHkuXG4gKlxuICogQHBhcmFtIHtPYmplY3R8QXJyYXl9IG9iaiBUaGUgb2JqZWN0IHRvIGl0ZXJhdGVcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZuIFRoZSBjYWxsYmFjayB0byBpbnZva2UgZm9yIGVhY2ggaXRlbVxuICovXG5mdW5jdGlvbiBmb3JFYWNoKG9iaiwgZm4pIHtcbiAgLy8gRG9uJ3QgYm90aGVyIGlmIG5vIHZhbHVlIHByb3ZpZGVkXG4gIGlmIChvYmogPT09IG51bGwgfHwgdHlwZW9mIG9iaiA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvLyBGb3JjZSBhbiBhcnJheSBpZiBub3QgYWxyZWFkeSBzb21ldGhpbmcgaXRlcmFibGVcbiAgaWYgKHR5cGVvZiBvYmogIT09ICdvYmplY3QnKSB7XG4gICAgLyplc2xpbnQgbm8tcGFyYW0tcmVhc3NpZ246MCovXG4gICAgb2JqID0gW29ial07XG4gIH1cblxuICBpZiAoaXNBcnJheShvYmopKSB7XG4gICAgLy8gSXRlcmF0ZSBvdmVyIGFycmF5IHZhbHVlc1xuICAgIGZvciAodmFyIGkgPSAwLCBsID0gb2JqLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgZm4uY2FsbChudWxsLCBvYmpbaV0sIGksIG9iaik7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIC8vIEl0ZXJhdGUgb3ZlciBvYmplY3Qga2V5c1xuICAgIGZvciAodmFyIGtleSBpbiBvYmopIHtcbiAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpKSB7XG4gICAgICAgIGZuLmNhbGwobnVsbCwgb2JqW2tleV0sIGtleSwgb2JqKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLyoqXG4gKiBBY2NlcHRzIHZhcmFyZ3MgZXhwZWN0aW5nIGVhY2ggYXJndW1lbnQgdG8gYmUgYW4gb2JqZWN0LCB0aGVuXG4gKiBpbW11dGFibHkgbWVyZ2VzIHRoZSBwcm9wZXJ0aWVzIG9mIGVhY2ggb2JqZWN0IGFuZCByZXR1cm5zIHJlc3VsdC5cbiAqXG4gKiBXaGVuIG11bHRpcGxlIG9iamVjdHMgY29udGFpbiB0aGUgc2FtZSBrZXkgdGhlIGxhdGVyIG9iamVjdCBpblxuICogdGhlIGFyZ3VtZW50cyBsaXN0IHdpbGwgdGFrZSBwcmVjZWRlbmNlLlxuICpcbiAqIEV4YW1wbGU6XG4gKlxuICogYGBganNcbiAqIHZhciByZXN1bHQgPSBtZXJnZSh7Zm9vOiAxMjN9LCB7Zm9vOiA0NTZ9KTtcbiAqIGNvbnNvbGUubG9nKHJlc3VsdC5mb28pOyAvLyBvdXRwdXRzIDQ1NlxuICogYGBgXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IG9iajEgT2JqZWN0IHRvIG1lcmdlXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXN1bHQgb2YgYWxsIG1lcmdlIHByb3BlcnRpZXNcbiAqL1xuZnVuY3Rpb24gbWVyZ2UoLyogb2JqMSwgb2JqMiwgb2JqMywgLi4uICovKSB7XG4gIHZhciByZXN1bHQgPSB7fTtcbiAgZnVuY3Rpb24gYXNzaWduVmFsdWUodmFsLCBrZXkpIHtcbiAgICBpZiAodHlwZW9mIHJlc3VsdFtrZXldID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgdmFsID09PSAnb2JqZWN0Jykge1xuICAgICAgcmVzdWx0W2tleV0gPSBtZXJnZShyZXN1bHRba2V5XSwgdmFsKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVzdWx0W2tleV0gPSB2YWw7XG4gICAgfVxuICB9XG5cbiAgZm9yICh2YXIgaSA9IDAsIGwgPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgZm9yRWFjaChhcmd1bWVudHNbaV0sIGFzc2lnblZhbHVlKTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG4vKipcbiAqIEV4dGVuZHMgb2JqZWN0IGEgYnkgbXV0YWJseSBhZGRpbmcgdG8gaXQgdGhlIHByb3BlcnRpZXMgb2Ygb2JqZWN0IGIuXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IGEgVGhlIG9iamVjdCB0byBiZSBleHRlbmRlZFxuICogQHBhcmFtIHtPYmplY3R9IGIgVGhlIG9iamVjdCB0byBjb3B5IHByb3BlcnRpZXMgZnJvbVxuICogQHBhcmFtIHtPYmplY3R9IHRoaXNBcmcgVGhlIG9iamVjdCB0byBiaW5kIGZ1bmN0aW9uIHRvXG4gKiBAcmV0dXJuIHtPYmplY3R9IFRoZSByZXN1bHRpbmcgdmFsdWUgb2Ygb2JqZWN0IGFcbiAqL1xuZnVuY3Rpb24gZXh0ZW5kKGEsIGIsIHRoaXNBcmcpIHtcbiAgZm9yRWFjaChiLCBmdW5jdGlvbiBhc3NpZ25WYWx1ZSh2YWwsIGtleSkge1xuICAgIGlmICh0aGlzQXJnICYmIHR5cGVvZiB2YWwgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGFba2V5XSA9IGJpbmQodmFsLCB0aGlzQXJnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYVtrZXldID0gdmFsO1xuICAgIH1cbiAgfSk7XG4gIHJldHVybiBhO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgaXNBcnJheTogaXNBcnJheSxcbiAgaXNBcnJheUJ1ZmZlcjogaXNBcnJheUJ1ZmZlcixcbiAgaXNCdWZmZXI6IGlzQnVmZmVyLFxuICBpc0Zvcm1EYXRhOiBpc0Zvcm1EYXRhLFxuICBpc0FycmF5QnVmZmVyVmlldzogaXNBcnJheUJ1ZmZlclZpZXcsXG4gIGlzU3RyaW5nOiBpc1N0cmluZyxcbiAgaXNOdW1iZXI6IGlzTnVtYmVyLFxuICBpc09iamVjdDogaXNPYmplY3QsXG4gIGlzVW5kZWZpbmVkOiBpc1VuZGVmaW5lZCxcbiAgaXNEYXRlOiBpc0RhdGUsXG4gIGlzRmlsZTogaXNGaWxlLFxuICBpc0Jsb2I6IGlzQmxvYixcbiAgaXNGdW5jdGlvbjogaXNGdW5jdGlvbixcbiAgaXNTdHJlYW06IGlzU3RyZWFtLFxuICBpc1VSTFNlYXJjaFBhcmFtczogaXNVUkxTZWFyY2hQYXJhbXMsXG4gIGlzU3RhbmRhcmRCcm93c2VyRW52OiBpc1N0YW5kYXJkQnJvd3NlckVudixcbiAgZm9yRWFjaDogZm9yRWFjaCxcbiAgbWVyZ2U6IG1lcmdlLFxuICBleHRlbmQ6IGV4dGVuZCxcbiAgdHJpbTogdHJpbVxufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi91dGlscy5qc1xuLy8gbW9kdWxlIGlkID0gLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL3V0aWxzLmpzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikodW5kZWZpbmVkKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5rLWJ0biB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBoZWlnaHQ6IDIuNTcxNDI4NTcxNDI4NTcycmVtO1xcbiAgbGluZS1oZWlnaHQ6IGNhbGMoMi41NzE0Mjg1NzE0Mjg1NzJyZW0gLSAycHgpO1xcbiAgcGFkZGluZzogMCAyLjI4NTcxNDI4NTcxNDI4NmVtO1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGNvbG9yOiAjNTk1OTU5O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGJvcmRlci1yYWRpdXM6IDJweDtcXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuMjVzIGVhc2UtaW4tb3V0O1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuMjVzIGVhc2UtaW4tb3V0O1xcbiAgYm9yZGVyOiAxcHggc29saWQgI2Q5ZDlkOTtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG59XFxuLmstYnRuOmhvdmVyIHtcXG4gIGJvcmRlci1jb2xvcjogIzI4OWFmNDtcXG4gIGNvbG9yOiAjMjg5YWY0O1xcbn1cXG4uay1idG4uay1wcmltYXJ5IHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMyODlhZjQ7XFxuICBjb2xvcjogI2ZmZjtcXG4gIGJvcmRlci1jb2xvcjogIzI4OWFmNDtcXG59XFxuLmstYnRuLmstcHJpbWFyeTpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTNhZWY2O1xcbiAgYm9yZGVyLWNvbG9yOiAjNTNhZWY2O1xcbn1cXG4uay1idG4uay13YXJuaW5nIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZjljMjg7XFxuICBjb2xvcjogI2ZmZjtcXG4gIGJvcmRlci1jb2xvcjogI2ZmOWMyODtcXG59XFxuLmstYnRuLmstd2FybmluZzpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZiMDUzO1xcbiAgYm9yZGVyLWNvbG9yOiAjZmZiMDUzO1xcbn1cXG4uay1idG4uay1kYW5nZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZlNDQ0NDtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgYm9yZGVyLWNvbG9yOiAjZmU0NDQ0O1xcbn1cXG4uay1idG4uay1kYW5nZXI6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZlNjk2OTtcXG4gIGJvcmRlci1jb2xvcjogI2ZlNjk2OTtcXG59XFxuLmstYnRuLmstYWN0aXZlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMyODlhZjQ7XFxuICBjb2xvcjogI2ZmZjtcXG4gIGJvcmRlci1jb2xvcjogIzI4OWFmNDtcXG59XFxuLmstYnRuLmstYWN0aXZlOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM1M2FlZjY7XFxuICBib3JkZXItY29sb3I6ICM1M2FlZjY7XFxufVxcbi5rLWJ0bltkaXNhYmxlZF0sXFxuLmstYnRuW2Rpc2FibGVkXTpob3ZlciB7XFxuICBjb2xvcjogIzk5OTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNkOWQ5ZDk7XFxuICBib3JkZXItY29sb3I6ICNkOWQ5ZDk7XFxuICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xcbn1cXG4uay1idG4uay1ub25lLFxcbi5rLWJ0bi5rLW5vbmU6aG92ZXIge1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxufVxcbi5rLWJ0bi5rLXNtYWxsIHtcXG4gIGZvbnQtc2l6ZTogMC44NTcxNDI4NTcxNDI4NTdyZW07XFxuICBoZWlnaHQ6IDIuMTQyODU3MTQyODU3MTQzcmVtO1xcbiAgcGFkZGluZzogMCAxLjA3MTQyODU3MTQyODU3MXJlbTtcXG4gIGxpbmUtaGVpZ2h0OiBjYWxjKDIuMTQyODU3MTQyODU3MTQzcmVtIC0gMnB4KTtcXG59XFxuLmstYnRuLmstc21hbGwuay1idG4taWNvbiB7XFxuICB3aWR0aDogMi4xNDI4NTcxNDI4NTcxNDNyZW07XFxufVxcbi5rLWJ0bi5rLW1pbmkge1xcbiAgZm9udC1zaXplOiAwLjg1NzE0Mjg1NzE0Mjg1N3JlbTtcXG4gIGhlaWdodDogMS44NTcxNDI4NTcxNDI4NTdyZW07XFxuICBwYWRkaW5nOiAwIDAuNzE0Mjg1NzE0Mjg1NzE0cmVtO1xcbiAgbGluZS1oZWlnaHQ6IGNhbGMoMS44NTcxNDI4NTcxNDI4NTdyZW0gLSAycHgpO1xcbn1cXG4uay1idG4uay1taW5pLmstYnRuLWljb24ge1xcbiAgd2lkdGg6IDEuODU3MTQyODU3MTQyODU3cmVtO1xcbn1cXG4uay1idG4gLmstaWNvbiB7XFxuICBmb250LXNpemU6IGluaGVyaXQ7XFxufVxcbi5rLWJ0biAuay1pY29uOmJlZm9yZSB7XFxuICBmb250LXNpemU6IGluaGVyaXQ7XFxufVxcbi5rLWJ0biAuay1pY29uICsgc3BhbiB7XFxuICBtYXJnaW4tbGVmdDogMC4zNTcxNDI4NTcxNDI4NTdlbTtcXG59XFxuLmstYnRuLmstaWNvbi1yaWdodCAuay1pY29uIHtcXG4gIG1hcmdpbi1sZWZ0OiAwLjM1NzE0Mjg1NzE0Mjg1N2VtO1xcbn1cXG4uay1idG4uay1idG4taWNvbiB7XFxuICB3aWR0aDogMi41NzE0Mjg1NzE0Mjg1NzJyZW07XFxuICBwYWRkaW5nOiAwO1xcbn1cXG4uay1idG4uay1idG4taWNvbiAuay1pY29uIHtcXG4gIG1hcmdpbjogMDtcXG4gIGZvbnQtc2l6ZTogMS4xNDI4NTcxNDI4NTcxNDNlbTtcXG59XFxuLmstYnRuLmstZmx1aWQge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG4uay1idG4uay1jaXJjbGUge1xcbiAgYm9yZGVyLXJhZGl1czogMS4yODU3MTQyODU3MTQyODZyZW07XFxufVxcbi5rLWJ0bi5rLWxvYWRpbmcsXFxuLmstYnRuLmstbG9hZGluZzpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbiAgY29sb3I6ICNhY2FjYWM7XFxuICBib3JkZXItY29sb3I6ICNlY2VjZWM7XFxufVxcbi5rLWJ0bi5rLWxvYWRpbmcgLmstaWNvbjpub3QoLmljb24tbG9hZGluZykge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuLmstYnRuLmstbG9hZGluZy5rLXByaW1hcnksXFxuLmstYnRuLmstbG9hZGluZy5rLXByaW1hcnk6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzk0Y2RmOTtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgYm9yZGVyLWNvbG9yOiAjOTRjZGY5O1xcbn1cXG4uay1idG4uay1sb2FkaW5nLmstd2FybmluZyxcXG4uay1idG4uay1sb2FkaW5nLmstd2FybmluZzpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZjZDkzO1xcbiAgY29sb3I6ICNmZmY7XFxuICBib3JkZXItY29sb3I6ICNmZmNkOTM7XFxufVxcbi5rLWJ0bi5rLWxvYWRpbmcuay1kYW5nZXIsXFxuLmstYnRuLmstbG9hZGluZy5rLWRhbmdlcjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmVhMmEyO1xcbiAgY29sb3I6ICNmZmY7XFxuICBib3JkZXItY29sb3I6ICNmZWEyYTI7XFxufVxcbi5rLWJ0bi5rLWxvYWRpbmcuay1hY3RpdmUsXFxuLmstYnRuLmstbG9hZGluZy5rLWFjdGl2ZTpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTRjZGY5O1xcbiAgY29sb3I6ICNmZmY7XFxuICBib3JkZXItY29sb3I6ICM5NGNkZjk7XFxufVxcbi5rLWJ0bi5rLWxvYWRpbmc6bm90KC5rLWJ0bi1pY29uKTpub3QoLmstaWNvbi1sZWZ0KTpub3QoLmstaWNvbi1yaWdodCkge1xcbiAgcGFkZGluZy1sZWZ0OiAzLjI4NTcxNDI4NTcxNDI4NmVtO1xcbn1cXG4uay1idG4uay1sb2FkaW5nOm5vdCguay1idG4taWNvbik6bm90KC5rLWljb24tbGVmdCk6bm90KC5rLWljb24tcmlnaHQpIC5pY29uLWxvYWRpbmcge1xcbiAgbWFyZ2luLWxlZnQ6IC0xZW07XFxufVxcbi5rLWJ0bi5rLWxvYWRpbmc6bm90KC5rLWJ0bi1pY29uKTpub3QoLmstaWNvbi1sZWZ0KTpub3QoLmstaWNvbi1yaWdodCkuay1zbWFsbCB7XFxuICBwYWRkaW5nLWxlZnQ6IDIuMDcxNDI4NTcxNDI4NTcxZW07XFxufVxcbi5rLWJ0bi5rLWxvYWRpbmc6bm90KC5rLWJ0bi1pY29uKTpub3QoLmstaWNvbi1sZWZ0KTpub3QoLmstaWNvbi1yaWdodCkuay1taW5pIHtcXG4gIHBhZGRpbmctbGVmdDogMS43MTQyODU3MTQyODU3MTRlbTtcXG59XFxuLmstYnRucyB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcbn1cXG4uay1idG5zIC5rLWJ0biB7XFxuICBtYXJnaW46IDAgIWltcG9ydGFudDtcXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxufVxcbi5rLWJ0bnMgLmstYnRuOmhvdmVyIHtcXG4gIHotaW5kZXg6IDE7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcbi5rLWJ0bnMuay1mbHVpZCB7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuLmstYnRuczpub3QoLmstdmVydGljYWwpID4gLmstYnRuOm5vdCg6Zmlyc3Qtb2YtdHlwZSkge1xcbiAgbWFyZ2luLWxlZnQ6IC0xcHggIWltcG9ydGFudDtcXG59XFxuLmstYnRuczpub3QoLmstdmVydGljYWwpID4gLmstYnRuOm5vdCg6Zmlyc3Qtb2YtdHlwZSk6bm90KDpsYXN0LW9mLXR5cGUpIHtcXG4gIGJvcmRlci1yYWRpdXM6IDA7XFxufVxcbi5rLWJ0bnM6bm90KC5rLXZlcnRpY2FsKSA+IC5rLWJ0bjpub3QoOm9ubHktb2YtdHlwZSk6Zmlyc3Qtb2YtdHlwZSB7XFxuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMDtcXG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAwO1xcbn1cXG4uay1idG5zOm5vdCguay12ZXJ0aWNhbCkgPiAuay1idG46bm90KDpvbmx5LW9mLXR5cGUpOmxhc3Qtb2YtdHlwZSB7XFxuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAwO1xcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMDtcXG59XFxuLmstYnRuczpub3QoLmstdmVydGljYWwpID4gLmstYnRuLmstcHJpbWFyeTpub3QoOmZpcnN0LW9mLXR5cGUpIHtcXG4gIGJvcmRlci1sZWZ0LWNvbG9yOiAjMTg5MmYzO1xcbn1cXG4uay1idG5zOm5vdCguay12ZXJ0aWNhbCkgPiAuay1idG4uay1wcmltYXJ5Om5vdCg6bGFzdC1vZi10eXBlKSB7XFxuICBib3JkZXItcmlnaHQtY29sb3I6ICMxODkyZjM7XFxufVxcbi5rLWJ0bnM6bm90KC5rLXZlcnRpY2FsKSA+IC5rLWJ0bi5rLXdhcm5pbmc6bm90KDpmaXJzdC1vZi10eXBlKSB7XFxuICBib3JkZXItbGVmdC1jb2xvcjogI2ZmOTQxNjtcXG59XFxuLmstYnRuczpub3QoLmstdmVydGljYWwpID4gLmstYnRuLmstd2FybmluZzpub3QoOmxhc3Qtb2YtdHlwZSkge1xcbiAgYm9yZGVyLXJpZ2h0LWNvbG9yOiAjZmY5NDE2O1xcbn1cXG4uay1idG5zOm5vdCguay12ZXJ0aWNhbCkgPiAuay1idG4uay1kYW5nZXI6bm90KDpmaXJzdC1vZi10eXBlKSB7XFxuICBib3JkZXItbGVmdC1jb2xvcjogI2ZlMzEzMTtcXG59XFxuLmstYnRuczpub3QoLmstdmVydGljYWwpID4gLmstYnRuLmstZGFuZ2VyOm5vdCg6bGFzdC1vZi10eXBlKSB7XFxuICBib3JkZXItcmlnaHQtY29sb3I6ICNmZTMxMzE7XFxufVxcbi5rLWJ0bnM6bm90KC5rLXZlcnRpY2FsKSA+IC5rLWJ0bi5rLWFjdGl2ZTpub3QoOmZpcnN0LW9mLXR5cGUpIHtcXG4gIGJvcmRlci1sZWZ0LWNvbG9yOiA7XFxufVxcbi5rLWJ0bnM6bm90KC5rLXZlcnRpY2FsKSA+IC5rLWJ0bi5rLWFjdGl2ZTpub3QoOmxhc3Qtb2YtdHlwZSkge1xcbiAgYm9yZGVyLXJpZ2h0LWNvbG9yOiA7XFxufVxcbi5rLWJ0bnM6bm90KC5rLXZlcnRpY2FsKS5rLWZsdWlkIHtcXG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG4uay1idG5zOm5vdCguay12ZXJ0aWNhbCkuay1mbHVpZCA+IC5rLWJ0biB7XFxuICAtd2Via2l0LWJveC1mbGV4OiAxO1xcbiAgICAgIC1tcy1mbGV4OiAxO1xcbiAgICAgICAgICBmbGV4OiAxO1xcbn1cXG4uay1idG5zLmstdmVydGljYWwgPiAuay1idG4ge1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcbi5rLWJ0bnMuay12ZXJ0aWNhbCA+IC5rLWJ0bjpub3QoLmstYnRuLWljb24pIHtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG4uay1idG5zLmstdmVydGljYWwgPiAuay1idG46bm90KDpmaXJzdC1vZi10eXBlKSB7XFxuICBtYXJnaW4tdG9wOiAtMXB4ICFpbXBvcnRhbnQ7XFxufVxcbi5rLWJ0bnMuay12ZXJ0aWNhbCA+IC5rLWJ0bjpub3QoOmZpcnN0LW9mLXR5cGUpOm5vdCg6bGFzdC1vZi10eXBlKSB7XFxuICBib3JkZXItcmFkaXVzOiAwO1xcbn1cXG4uay1idG5zLmstdmVydGljYWwgPiAuay1idG46bm90KDpvbmx5LW9mLXR5cGUpOmZpcnN0LW9mLXR5cGUge1xcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMDtcXG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAwO1xcbn1cXG4uay1idG5zLmstdmVydGljYWwgPiAuay1idG46bm90KDpvbmx5LW9mLXR5cGUpOmxhc3Qtb2YtdHlwZSB7XFxuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAwO1xcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDA7XFxufVxcbi5rLWJ0bnMuay12ZXJ0aWNhbCA+IC5rLWJ0bi5rLXByaW1hcnk6bm90KDpmaXJzdC1vZi10eXBlKSB7XFxuICBib3JkZXItdG9wLWNvbG9yOiAjMTg5MmYzO1xcbn1cXG4uay1idG5zLmstdmVydGljYWwgPiAuay1idG4uay1wcmltYXJ5Om5vdCg6bGFzdC1vZi10eXBlKSB7XFxuICBib3JkZXItYm90dG9tLWNvbG9yOiAjMTg5MmYzO1xcbn1cXG4uay1idG5zLmstdmVydGljYWwgPiAuay1idG4uay13YXJuaW5nOm5vdCg6Zmlyc3Qtb2YtdHlwZSkge1xcbiAgYm9yZGVyLXRvcC1jb2xvcjogI2ZmOTQxNjtcXG59XFxuLmstYnRucy5rLXZlcnRpY2FsID4gLmstYnRuLmstd2FybmluZzpub3QoOmxhc3Qtb2YtdHlwZSkge1xcbiAgYm9yZGVyLWJvdHRvbS1jb2xvcjogI2ZmOTQxNjtcXG59XFxuLmstYnRucy5rLXZlcnRpY2FsID4gLmstYnRuLmstZGFuZ2VyOm5vdCg6Zmlyc3Qtb2YtdHlwZSkge1xcbiAgYm9yZGVyLXRvcC1jb2xvcjogI2ZlMzEzMTtcXG59XFxuLmstYnRucy5rLXZlcnRpY2FsID4gLmstYnRuLmstZGFuZ2VyOm5vdCg6bGFzdC1vZi10eXBlKSB7XFxuICBib3JkZXItYm90dG9tLWNvbG9yOiAjZmUzMTMxO1xcbn1cXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyP3tcInVybFwiOnRydWV9IS4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2xpYj97XCJwbHVnaW5zXCI6W251bGxdfSEuL25vZGVfbW9kdWxlcy9zdHlsdXMtbG9hZGVyP3tcImluY2x1ZGUgY3NzXCI6dHJ1ZSxcInNvdXJjZU1hcFwiOmZhbHNlLFwiaW1wb3J0XCI6XCIvaG9tZS9qYXZleS9Xb3Jrc3BhY2Uva3BjL3N0eWxlcy90aGVtZXMva3N5dW4vaW5kZXguc3R5bFwifSEuL2NvbXBvbmVudHMvYnV0dG9uL2luZGV4LnN0eWxcbi8vIG1vZHVsZSBpZCA9IC4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/e1widXJsXCI6dHJ1ZX0hLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvbGliL2luZGV4LmpzP3tcInBsdWdpbnNcIjpbbnVsbF19IS4vbm9kZV9tb2R1bGVzL3N0eWx1cy1sb2FkZXIvaW5kZXguanM/e1wiaW5jbHVkZSBjc3NcIjp0cnVlLFwic291cmNlTWFwXCI6ZmFsc2UsXCJpbXBvcnRcIjpcIi9ob21lL2phdmV5L1dvcmtzcGFjZS9rcGMvc3R5bGVzL3RoZW1lcy9rc3l1bi9pbmRleC5zdHlsXCJ9IS4vY29tcG9uZW50cy9idXR0b24vaW5kZXguc3R5bFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKHVuZGVmaW5lZCk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIuZG9jdW1lbnQtcGFnZSB7XFxuICBwYWRkaW5nLXRvcDogOTVweDtcXG4gIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuLmRvY3VtZW50LXBhZ2UgLmNvbnRlbnQtd3JhcHBlci5maXhlZCB7XFxuICBtYXJnaW4tYm90dG9tOiAwO1xcbn1cXG4uZG9jdW1lbnQtcGFnZSAuY29udGVudC13cmFwcGVyLmZpeGVkIGFzaWRlIHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHRvcDogODBweDtcXG4gIGJhY2tncm91bmQ6ICNmZmY7XFxuICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDgwcHgpO1xcbiAgb3ZlcmZsb3c6IGF1dG87XFxuICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcbi5kb2N1bWVudC1wYWdlIC5jb250ZW50LXdyYXBwZXIuZml4ZWQgYXJ0aWNsZSB7XFxuICBtYXJnaW4tbGVmdDogMjAwcHg7XFxufVxcbi5kb2N1bWVudC1wYWdlIC5jb250ZW50LXdyYXBwZXIge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcXG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGJhY2tncm91bmQ6ICNmZmY7XFxuICBtYXJnaW46IDAgYXV0bztcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIC13ZWJraXQtYm94LXNoYWRvdzogMCAxcHggMXB4IHJnYmEoMCwwLDAsMC4wOCk7XFxuICAgICAgICAgIGJveC1zaGFkb3c6IDAgMXB4IDFweCByZ2JhKDAsMCwwLDAuMDgpO1xcbiAgbWluLWhlaWdodDogY2FsYygxMDAlIC0gMTVweCk7XFxufVxcbi5kb2N1bWVudC1wYWdlIC5jb250ZW50LXdyYXBwZXIgYXNpZGUge1xcbiAgd2lkdGg6IDIwMHB4O1xcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2VlZTtcXG59XFxuLmRvY3VtZW50LXBhZ2UgLmNvbnRlbnQtd3JhcHBlciAuYXNpZGUtd3JhcHBlciB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcbi5kb2N1bWVudC1wYWdlIC5jb250ZW50LXdyYXBwZXIgLmFzaWRlLXdyYXBwZXIgaDUge1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbiAgbWFyZ2luOiAyNXB4IDAgMTVweCAyMHB4O1xcbiAgY29sb3I6ICM5OTk7XFxufVxcbi5kb2N1bWVudC1wYWdlIC5jb250ZW50LXdyYXBwZXIgLmFzaWRlLXdyYXBwZXIgdWwge1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxufVxcbi5kb2N1bWVudC1wYWdlIC5jb250ZW50LXdyYXBwZXIgLmFzaWRlLXdyYXBwZXIgYSB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIGhlaWdodDogMzBweDtcXG4gIGxpbmUtaGVpZ2h0OiAzMHB4O1xcbiAgcGFkZGluZy1sZWZ0OiAyNXB4O1xcbiAgY29sb3I6ICMzMzM7XFxufVxcbi5kb2N1bWVudC1wYWdlIC5jb250ZW50LXdyYXBwZXIgLmFzaWRlLXdyYXBwZXIgYTpob3ZlciB7XFxuICBiYWNrZ3JvdW5kOiAjZjNmM2YzO1xcbn1cXG4uZG9jdW1lbnQtcGFnZSAuY29udGVudC13cmFwcGVyIC5hc2lkZS13cmFwcGVyIC5hY3RpdmUgPiBhIHtcXG4gIGNvbG9yOiAjZmU0NDQ0O1xcbn1cXG4uZG9jdW1lbnQtcGFnZSAuY29udGVudC13cmFwcGVyIC5hc2lkZS13cmFwcGVyIC5zdWItY2F0YWxvZ3Mge1xcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XFxuICBmb250LXNpemU6IDEycHg7XFxufVxcbi5kb2N1bWVudC1wYWdlIC5jb250ZW50LXdyYXBwZXIgLmFzaWRlLXdyYXBwZXIgLmFzaWRlLWJvcmRlciB7XFxuICBib3JkZXItcmlnaHQ6IDJweCBzb2xpZCAjZmU0NDQ0O1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgcmlnaHQ6IDA7XFxuICB0b3A6IDA7XFxufVxcbi5kb2N1bWVudC1wYWdlIC5jb250ZW50LXdyYXBwZXIgYXJ0aWNsZSB7XFxuICAtd2Via2l0LWJveC1mbGV4OiAxO1xcbiAgICAgIC1tcy1mbGV4OiAxO1xcbiAgICAgICAgICBmbGV4OiAxO1xcbiAgcGFkZGluZzogMTBweCAyMHB4O1xcbiAgb3ZlcmZsb3c6IGF1dG87XFxufVxcbi5kb2N1bWVudC1wYWdlIC5jb250ZW50LXdyYXBwZXIgLmFydGljbGUtaGVhZCAudGl0bGUge1xcbiAgcGFkZGluZzogMTBweCAwO1xcbiAgZm9udC1zaXplOiAyLjJlbTtcXG4gIGNvbG9yOiAjMDAwO1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbn1cXG4uZG9jdW1lbnQtcGFnZSAuY29udGVudC13cmFwcGVyIC5hcnRpY2xlLWhlYWQgLmVkaXQtbGluayB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBtYXJnaW4tbGVmdDogMjBweDtcXG4gIGNvbG9yOiAjOTk5O1xcbiAgZm9udC1zdHlsZTogaXRhbGljO1xcbn1cXG4uZG9jdW1lbnQtcGFnZSAuY29udGVudC13cmFwcGVyIGFydGljbGUgaDEge1xcbiAgcGFkZGluZzogMTBweCAwO1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlZWU7XFxuICBtYXJnaW46IDIwcHggMDtcXG59XFxuLmRvY3VtZW50LXBhZ2UgLmNvbnRlbnQtd3JhcHBlciBhcnRpY2xlIGgyLFxcbi5kb2N1bWVudC1wYWdlIC5jb250ZW50LXdyYXBwZXIgYXJ0aWNsZSBoMyB7XFxuICBwYWRkaW5nOiAxMHB4IDA7XFxuICBtYXJnaW46IDE1cHggMDtcXG59XFxuLmRvY3VtZW50LXBhZ2UgLmNvbnRlbnQtd3JhcHBlciBhcnRpY2xlIHAge1xcbiAgbGluZS1oZWlnaHQ6IDI1cHg7XFxufVxcbi5kb2N1bWVudC1wYWdlIC5jb250ZW50LXdyYXBwZXIgYXJ0aWNsZSAub3V0cHV0IHtcXG4gIHBhZGRpbmc6IDIwcHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjZWVlO1xcbiAgbWFyZ2luOiAyMHB4IDA7XFxufVxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXI/e1widXJsXCI6dHJ1ZX0hLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvbGliP3tcInBsdWdpbnNcIjpbbnVsbF19IS4vbm9kZV9tb2R1bGVzL3N0eWx1cy1sb2FkZXI/e1wiaW5jbHVkZSBjc3NcIjp0cnVlLFwic291cmNlTWFwXCI6ZmFsc2UsXCJpbXBvcnRcIjpcIi9ob21lL2phdmV5L1dvcmtzcGFjZS9rcGMvc3R5bGVzL3RoZW1lcy9rc3l1bi9pbmRleC5zdHlsXCJ9IS4vc2l0ZS9wYWdlcy9kb2N1bWVudC9pbmRleC5zdHlsXG4vLyBtb2R1bGUgaWQgPSAuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3tcInVybFwiOnRydWV9IS4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2xpYi9pbmRleC5qcz97XCJwbHVnaW5zXCI6W251bGxdfSEuL25vZGVfbW9kdWxlcy9zdHlsdXMtbG9hZGVyL2luZGV4LmpzP3tcImluY2x1ZGUgY3NzXCI6dHJ1ZSxcInNvdXJjZU1hcFwiOmZhbHNlLFwiaW1wb3J0XCI6XCIvaG9tZS9qYXZleS9Xb3Jrc3BhY2Uva3BjL3N0eWxlcy90aGVtZXMva3N5dW4vaW5kZXguc3R5bFwifSEuL3NpdGUvcGFnZXMvZG9jdW1lbnQvaW5kZXguc3R5bFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKHVuZGVmaW5lZCk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIuaGxqcyB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIG92ZXJmbG93LXg6IGF1dG87XFxuICBjb2xvcjogIzUyNTI1MjtcXG4gIHBhZGRpbmc6IDE1cHg7XFxuICAtd2Via2l0LXRleHQtc2l6ZS1hZGp1c3Q6IG5vbmU7XFxuICBtYXJnaW46IDA7XFxufVxcbi5obGpzLWRvY3R5cGUge1xcbiAgY29sb3I6ICM5OTk7XFxufVxcbi5obGpzLXRhZyB7XFxuICBjb2xvcjogIzNlNzZmNjtcXG59XFxuLmhsanMtYXR0cmlidXRlIHtcXG4gIGNvbG9yOiAjZTk2OTAwO1xcbn1cXG4uaGxqcy12YWx1ZSB7XFxuICBjb2xvcjogIzQyYjk4MztcXG59XFxuLmhsanMta2V5d29yZCB7XFxuICBjb2xvcjogI2U5NjkwMDtcXG59XFxuLmhsanMtc3RyaW5nIHtcXG4gIGNvbG9yOiAjNDJiOTgzO1xcbn1cXG4uaGxqcy1jb21tZW50IHtcXG4gIGNvbG9yOiAjYjNiM2IzO1xcbn1cXG4uaGxqcy1vcGVyYXRvciAuaGxqcy1jb21tZW50IHtcXG4gIGNvbG9yOiAjNTI1MjUyO1xcbn1cXG4uaGxqcy1yZWdleHAge1xcbiAgY29sb3I6ICNhZjdkZmY7XFxufVxcbi5obGpzLWJ1aWx0X2luIHtcXG4gIGNvbG9yOiAjMmRiN2Y1O1xcbn1cXG4uY3NzIC5obGpzLWNsYXNzIHtcXG4gIGNvbG9yOiAjZTk2OTAwO1xcbn1cXG4uY3NzIC5obGpzLW51bWJlcixcXG4uamF2YXNjcmlwdCAuaGxqcy1udW1iZXIge1xcbiAgY29sb3I6ICNmYzFlNzA7XFxufVxcbi5jc3MgLmhsanMtYXR0cmlidXRlIHtcXG4gIGNvbG9yOiAjYWY3ZGZmO1xcbn1cXG4uY3NzIC5obGpzLWltcG9ydGFudCB7XFxuICBjb2xvcjogI2QwNDtcXG59XFxuLmFjdGlvbnNjcmlwdCAuaGxqcy1saXRlcmFsLFxcbi5qYXZhc2NyaXB0IC5obGpzLWxpdGVyYWwge1xcbiAgY29sb3I6ICNmYzFlNzA7XFxufVxcbnByZSB7XFxuICBwYWRkaW5nOiAwO1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5jb2RlIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIGJhY2tncm91bmQ6ICNmN2Y3Zjc7XFxuICBmb250LWZhbWlseTogQ29uc29sYXMsIE1vbmFjbywgQW5kYWxlIE1vbm8sIFVidW50dSBNb25vLCBtb25vc3BhY2U7XFxuICBtYXJnaW46IDNweDtcXG4gIHBhZGRpbmc6IDFweCA1cHg7XFxuICBib3JkZXItcmFkaXVzOiAzcHg7XFxuICBjb2xvcjogIzY2NjtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNlZWU7XFxuICBsaW5lLWhlaWdodDogMjBweDtcXG59XFxuaHRtbCxcXG5ib2R5IHtcXG4gIG1hcmdpbjogMDtcXG4gIGNvbG9yOiAjMzMzO1xcbiAgYmFja2dyb3VuZDogI2VmZWZlZjtcXG4gIGhlaWdodDogMTAwJTtcXG59XFxuYSB7XFxuICBjb2xvcjogIzJkOGNmMDtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuaDEsXFxuaDIsXFxuaDMsXFxuaDQsXFxuaDUge1xcbiAgbWFyZ2luOiAwO1xcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXG4gIGNvbG9yOiAjMDAwO1xcbn1cXG5oMSB7XFxuICBmb250LXNpemU6IDJlbTtcXG59XFxuaDIge1xcbiAgZm9udC1zaXplOiAxLjhlbTtcXG59XFxuaDMge1xcbiAgZm9udC1zaXplOiAxLjVlbTtcXG59XFxuY29kZSB7XFxuICBjb2xvcjogI2M3MjU0ZTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmOWYyZjQ7XFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICBwYWRkaW5nOiAwIDVweDtcXG59XFxuYmxvY2txdW90ZSB7XFxuICBtYXJnaW46IDFlbSAwO1xcbiAgcGFkZGluZzogMXB4IDJlbTtcXG4gIGJhY2tncm91bmQ6ICNmOGY4Zjg7XFxuICBib3JkZXItcmFkaXVzOiAwIDNweCAzcHggMDtcXG4gIGJvcmRlci1sZWZ0OiAycHggc29saWQgI2ZlNDQ0NDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuYmxvY2txdW90ZTpiZWZvcmUge1xcbiAgY29udGVudDogJyEnO1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDUwJTtcXG4gIG1hcmdpbi10b3A6IC0xMHB4O1xcbiAgd2lkdGg6IDIwcHg7XFxuICBoZWlnaHQ6IDIwcHg7XFxuICBib3JkZXItcmFkaXVzOiAxMDAlO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgYmFja2dyb3VuZDogI2ZlNDQ0NDtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XFxuICBsZWZ0OiAtMTFweDtcXG59XFxuI3BhZ2UsXFxuLmFwcC13cmFwcGVyLFxcbi5tYWluLXdyYXBwZXIge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cXG4uaGVhZGVyLXdyYXBwZXIge1xcbiAgaGVpZ2h0OiA4MHB4O1xcbiAgbGluZS1oZWlnaHQ6IDgwcHg7XFxuICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMnB4IDVweCByZ2JhKDAsMCwwLDAuMDgpO1xcbiAgICAgICAgICBib3gtc2hhZG93OiAwIDJweCA1cHggcmdiYSgwLDAsMCwwLjA4KTtcXG4gIGJhY2tncm91bmQ6ICNmZmY7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB3aWR0aDogMTAwJTtcXG4gIHRvcDogMDtcXG4gIHotaW5kZXg6IDk5OTtcXG59XFxuLmhlYWRlci13cmFwcGVyIGhlYWRlciB7XFxuICB3aWR0aDogMTAwJTtcXG4gIG1hcmdpbjogMCBhdXRvO1xcbn1cXG4uaGVhZGVyLXdyYXBwZXIgLmxvZ28ge1xcbiAgZm9udC1zaXplOiAyNHB4O1xcbiAgY29sb3I6ICMzMzM7XFxuICBtYXJnaW4tbGVmdDogMjBweDtcXG59XFxuLmhlYWRlci13cmFwcGVyIG5hdiB7XFxuICBmbG9hdDogcmlnaHQ7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcbi5oZWFkZXItd3JhcHBlciBuYXYgYSB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBwYWRkaW5nOiAwIDIwcHg7XFxuICBjb2xvcjogIzMzMztcXG59XFxuLmhlYWRlci13cmFwcGVyIG5hdiBhLmFjdGl2ZSB7XFxuICBjb2xvcjogI2ZlNDQ0NDtcXG59XFxuLmhlYWRlci13cmFwcGVyIC5ib3JkZXIge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgYm90dG9tOiAwO1xcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNmZTQ0NDQ7XFxufVxcbi50cmFuc2l0aW9uIHtcXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDM1MG1zIGN1YmljLWJlemllcigwLjU1LCAwLCAwLjEsIDEpO1xcbiAgdHJhbnNpdGlvbjogYWxsIDM1MG1zIGN1YmljLWJlemllcigwLjU1LCAwLCAwLjEsIDEpO1xcbn1cXG4uYmx1ZSB7XFxuICBjb2xvcjogIzA5ZDtcXG59XFxuLnJlZCB7XFxuICBjb2xvcjogI2QwNDtcXG59XFxuLnllbGxvdyB7XFxuICBjb2xvcjogI2ZmYzQwMDtcXG59XFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlcj97XCJ1cmxcIjp0cnVlfSEuL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9saWI/e1wicGx1Z2luc1wiOltudWxsXX0hLi9ub2RlX21vZHVsZXMvc3R5bHVzLWxvYWRlcj97XCJpbmNsdWRlIGNzc1wiOnRydWUsXCJzb3VyY2VNYXBcIjpmYWxzZSxcImltcG9ydFwiOlwiL2hvbWUvamF2ZXkvV29ya3NwYWNlL2twYy9zdHlsZXMvdGhlbWVzL2tzeXVuL2luZGV4LnN0eWxcIn0hLi9zaXRlL3BhZ2VzL2xheW91dC5zdHlsXG4vLyBtb2R1bGUgaWQgPSAuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3tcInVybFwiOnRydWV9IS4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2xpYi9pbmRleC5qcz97XCJwbHVnaW5zXCI6W251bGxdfSEuL25vZGVfbW9kdWxlcy9zdHlsdXMtbG9hZGVyL2luZGV4LmpzP3tcImluY2x1ZGUgY3NzXCI6dHJ1ZSxcInNvdXJjZU1hcFwiOmZhbHNlLFwiaW1wb3J0XCI6XCIvaG9tZS9qYXZleS9Xb3Jrc3BhY2Uva3BjL3N0eWxlcy90aGVtZXMva3N5dW4vaW5kZXguc3R5bFwifSEuL3NpdGUvcGFnZXMvbGF5b3V0LnN0eWxcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyohXG4gKiBEZXRlcm1pbmUgaWYgYW4gb2JqZWN0IGlzIGEgQnVmZmVyXG4gKlxuICogQGF1dGhvciAgIEZlcm9zcyBBYm91a2hhZGlqZWggPGZlcm9zc0BmZXJvc3Mub3JnPiA8aHR0cDovL2Zlcm9zcy5vcmc+XG4gKiBAbGljZW5zZSAgTUlUXG4gKi9cblxuLy8gVGhlIF9pc0J1ZmZlciBjaGVjayBpcyBmb3IgU2FmYXJpIDUtNyBzdXBwb3J0LCBiZWNhdXNlIGl0J3MgbWlzc2luZ1xuLy8gT2JqZWN0LnByb3RvdHlwZS5jb25zdHJ1Y3Rvci4gUmVtb3ZlIHRoaXMgZXZlbnR1YWxseVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAob2JqKSB7XG4gIHJldHVybiBvYmogIT0gbnVsbCAmJiAoaXNCdWZmZXIob2JqKSB8fCBpc1Nsb3dCdWZmZXIob2JqKSB8fCAhIW9iai5faXNCdWZmZXIpXG59XG5cbmZ1bmN0aW9uIGlzQnVmZmVyIChvYmopIHtcbiAgcmV0dXJuICEhb2JqLmNvbnN0cnVjdG9yICYmIHR5cGVvZiBvYmouY29uc3RydWN0b3IuaXNCdWZmZXIgPT09ICdmdW5jdGlvbicgJiYgb2JqLmNvbnN0cnVjdG9yLmlzQnVmZmVyKG9iailcbn1cblxuLy8gRm9yIE5vZGUgdjAuMTAgc3VwcG9ydC4gUmVtb3ZlIHRoaXMgZXZlbnR1YWxseS5cbmZ1bmN0aW9uIGlzU2xvd0J1ZmZlciAob2JqKSB7XG4gIHJldHVybiB0eXBlb2Ygb2JqLnJlYWRGbG9hdExFID09PSAnZnVuY3Rpb24nICYmIHR5cGVvZiBvYmouc2xpY2UgPT09ICdmdW5jdGlvbicgJiYgaXNCdWZmZXIob2JqLnNsaWNlKDAsIDApKVxufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvaXMtYnVmZmVyL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAuL25vZGVfbW9kdWxlcy9pcy1idWZmZXIvaW5kZXguanNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZnVuY3Rpb24gd2VicGFja0VtcHR5Q29udGV4dChyZXEpIHtcblx0dGhyb3cgbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJy5cIik7XG59XG53ZWJwYWNrRW1wdHlDb250ZXh0LmtleXMgPSBmdW5jdGlvbigpIHsgcmV0dXJuIFtdOyB9O1xud2VicGFja0VtcHR5Q29udGV4dC5yZXNvbHZlID0gd2VicGFja0VtcHR5Q29udGV4dDtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0VtcHR5Q29udGV4dDtcbndlYnBhY2tFbXB0eUNvbnRleHQuaWQgPSBcIi4vc2l0ZS9wYWdlcyByZWN1cnNpdmUgXlxcXFwuXFxcXC9cXFxcLlxcXFwuLipcXFxcL2luZGV4XFxcXC5qc29uJFwiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc2l0ZS9wYWdlcyBeXFwuXFwvXFwuXFwuLipcXC9pbmRleFxcLmpzb24kXG4vLyBtb2R1bGUgaWQgPSAuL3NpdGUvcGFnZXMgcmVjdXJzaXZlIF5cXC5cXC9cXC5cXC4uKlxcL2luZGV4XFwuanNvbiRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IEludGFjdCBmcm9tICdpbnRhY3QnO1xuaW1wb3J0IExheW91dCBmcm9tICcuLi9sYXlvdXQnO1xuaW1wb3J0IHRlbXBsYXRlIGZyb20gJy4vaW5kZXgudmR0JztcbmltcG9ydCAnLi9pbmRleC5zdHlsJztcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgTGF5b3V0IHtcbiAgICBASW50YWN0LnRlbXBsYXRlKClcbiAgICBzdGF0aWMgdGVtcGxhdGUgPSB0ZW1wbGF0ZTtcblxuICAgIGFzeW5jIF9pbml0KCkge1xuICAgICAgICBsZXQgZGF0YTtcbiAgICAgICAgaWYgKHByb2Nlc3Mubm9kZSkge1xuICAgICAgICAgICAgZGF0YSA9IHJlcXVpcmUoYC4uLy4uJHt0aGlzLmdldCgncGF0aCcpfS9pbmRleC5qc29uYCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBkYXRhID0gYXdhaXQgYXhpb3MuZ2V0KGAke3RoaXMuZ2V0KCdwYXRoJyl9aW5kZXguanNvbmApO1xuICAgICAgICAgICAgZGF0YSA9IGRhdGEuZGF0YTtcbiAgICAgICAgfVxuICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcbiAgICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zaXRlL3BhZ2VzL2RvY3VtZW50L2luZGV4LmpzIiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTItMSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTItMiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bHVzLWxvYWRlci9pbmRleC5qcz8/cmVmLS0yLTMhLi9pbmRleC5zdHlsXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4vLyBQcmVwYXJlIGNzc1RyYW5zZm9ybWF0aW9uXG52YXIgdHJhbnNmb3JtO1xuXG52YXIgb3B0aW9ucyA9IHt9XG5vcHRpb25zLnRyYW5zZm9ybSA9IHRyYW5zZm9ybVxuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG5cdC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdGlmKCFjb250ZW50LmxvY2Fscykge1xuXHRcdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz8/cmVmLS0yLTEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0yLTIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWx1cy1sb2FkZXIvaW5kZXguanM/P3JlZi0tMi0zIS4vaW5kZXguc3R5bFwiLCBmdW5jdGlvbigpIHtcblx0XHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tMi0xIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMi0yIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsdXMtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTItMyEuL2luZGV4LnN0eWxcIik7XG5cdFx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblx0XHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0XHR9KTtcblx0fVxuXHQvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc2l0ZS9wYWdlcy9kb2N1bWVudC9pbmRleC5zdHlsXG4vLyBtb2R1bGUgaWQgPSAuL3NpdGUvcGFnZXMvZG9jdW1lbnQvaW5kZXguc3R5bFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgQnV0dG9uIGZyb20gJ2NvbXBvbmVudHMvYnV0dG9uJztcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKG9iaiwgX1ZkdCwgYmxvY2tzLCAkY2FsbGVlKSB7XG5cbl9WZHQgfHwgKF9WZHQgPSBWZHQpO1xub2JqIHx8IChvYmogPSB7fSk7XG5ibG9ja3MgfHwgKGJsb2NrcyA9IHt9KTtcbnZhciBoID0gX1ZkdC5taXNzLmgsIGhjID0gX1ZkdC5taXNzLmhjLCBodSA9IF9WZHQubWlzcy5odSwgd2lkZ2V0cyA9IHRoaXMgJiYgdGhpcy53aWRnZXRzIHx8IHt9LCBfYmxvY2tzID0ge30sIF9fYmxvY2tzID0ge30sXG5fX3UgPSBfVmR0LnV0aWxzLCBleHRlbmQgPSBfX3UuZXh0ZW5kLCBfZSA9IF9fdS5lcnJvciwgX2NsYXNzTmFtZSA9IF9fdS5jbGFzc05hbWUsXG5fX28gPSBfX3UuT3B0aW9ucywgX2dldE1vZGVsID0gX19vLmdldE1vZGVsLCBfc2V0TW9kZWwgPSBfX28uc2V0TW9kZWwsXG5fc2V0Q2hlY2tib3hNb2RlbCA9IF9fdS5zZXRDaGVja2JveE1vZGVsLCBfZGV0ZWN0Q2hlY2tib3hDaGVja2VkID0gX191LmRldGVjdENoZWNrYm94Q2hlY2tlZCxcbl9zZXRTZWxlY3RNb2RlbCA9IF9fdS5zZXRTZWxlY3RNb2RlbCxcbnNlbGYgPSB0aGlzLmRhdGEsIHNjb3BlID0gb2JqLCBBbmltYXRlID0gc2VsZiAmJiBzZWxmLkFuaW1hdGUsIHBhcmVudCA9ICgkY2FsbGVlIHx8IHt9KS5fc3VwZXJcblxuXG5yZXR1cm4gKGZ1bmN0aW9uKCkge1xuICAgIHZhciBfb2JqID0geyduYXZJbmRleCc6ICdkb2N1bWVudCcsICdjbGFzc05hbWUnOiAnZG9jdW1lbnQtcGFnZScsICdjaGlsZHJlbic6IG51bGx9O1xuICAgIGlmIChfb2JqLmhhc093blByb3BlcnR5KFwiYXJndW1lbnRzXCIpKSB7XG4gICAgICAgIGV4dGVuZChfb2JqLCBfb2JqLmFyZ3VtZW50cyA9PT0gdHJ1ZSA/IG9iaiA6IF9vYmouYXJndW1lbnRzKTtcbiAgICAgICAgZGVsZXRlIF9vYmouYXJndW1lbnRzO1xuICAgIH1cbiAgICByZXR1cm4gcGFyZW50LmNhbGwodGhpcywgX29iaiwgX1ZkdCwgZnVuY3Rpb24oYmxvY2tzKSB7XG4gICAgdmFyIF9ibG9ja3MgPSB7fSwgX19ibG9ja3MgPSBleHRlbmQoe30sIGJsb2Nrcyk7XG4gICAgcmV0dXJuIChfYmxvY2tzLmNvbnRlbnQgPSBmdW5jdGlvbihwYXJlbnQpIHtyZXR1cm4gaChCdXR0b24sIHsnY2hpbGRyZW4nOiAnSGVsbG8nLCAnX2NvbnRleHQnOiB0aGlzfSk7fSkgJiYgKF9fYmxvY2tzLmNvbnRlbnQgPSBmdW5jdGlvbihwYXJlbnQpIHtcbnZhciBzZWxmID0gdGhpcztcbnJldHVybiBibG9ja3MuY29udGVudCA/IGJsb2Nrcy5jb250ZW50LmNhbGwodGhpcywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gX2Jsb2Nrcy5jb250ZW50LmNhbGwoc2VsZiwgcGFyZW50KTtcbn0pIDogX2Jsb2Nrcy5jb250ZW50LmNhbGwodGhpcywgcGFyZW50KTtcbn0pICYmIF9fYmxvY2tzO1xufS5jYWxsKHRoaXMsIGJsb2NrcyksIHBhcmVudClcbn0pLmNhbGwodGhpcylcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zaXRlL3BhZ2VzL2RvY3VtZW50L2luZGV4LnZkdCIsImltcG9ydCBJbnRhY3QgZnJvbSAnaW50YWN0JztcbmltcG9ydCB0ZW1wbGF0ZSBmcm9tICcuL2xheW91dC52ZHQnO1xuaW1wb3J0ICcuL2xheW91dC5zdHlsJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBJbnRhY3Qge1xuICAgIEBJbnRhY3QudGVtcGxhdGUoKVxuICAgIHN0YXRpYyB0ZW1wbGF0ZSA9IHRlbXBsYXRlO1xuXG4gICAgX21vdW50KCkge1xuICAgICAgICB0aGlzLiRib3JkZXIgPSB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvcignLmJvcmRlcicpO1xuICAgICAgICB0aGlzLl91cGRhdGVCb3JkZXIoKTtcbiAgICB9XG5cbiAgICBfdXBkYXRlQm9yZGVyKCkge1xuICAgICAgICAvLyBjb25zdCAkbmF2ID0gdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hY3RpdmUnKTtcbiAgICAgICAgLy8gbGV0IHdpZHRoID0gMDtcbiAgICAgICAgLy8gbGV0IGxlZnQgPSAwO1xuICAgICAgICAvLyBpZiAoJG5hdikge1xuICAgICAgICAgICAgLy8gbGVmdCA9ICRuYXYucG9zaXRpb24oKS5sZWZ0O1xuICAgICAgICAgICAgLy8gd2lkdGggPSAkbmF2Lm91dGVyV2lkdGgoKTtcbiAgICAgICAgLy8gfVxuICAgICAgICAvLyB0aGlzLiRib3JkZXIuYWRkQ2xhc3MoJ3RyYW5zaXRpb24nKTtcbiAgICAgICAgLy8gdGhpcy4kYm9yZGVyLmNzcyh7d2lkdGg6IHdpZHRoLCBsZWZ0OiBsZWZ0fSk7XG4gICAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc2l0ZS9wYWdlcy9sYXlvdXQuanMiLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tMi0xIS4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMi0yIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsdXMtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTItMyEuL2xheW91dC5zdHlsXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4vLyBQcmVwYXJlIGNzc1RyYW5zZm9ybWF0aW9uXG52YXIgdHJhbnNmb3JtO1xuXG52YXIgb3B0aW9ucyA9IHt9XG5vcHRpb25zLnRyYW5zZm9ybSA9IHRyYW5zZm9ybVxuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG5cdC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdGlmKCFjb250ZW50LmxvY2Fscykge1xuXHRcdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz8/cmVmLS0yLTEhLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0yLTIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWx1cy1sb2FkZXIvaW5kZXguanM/P3JlZi0tMi0zIS4vbGF5b3V0LnN0eWxcIiwgZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTItMSEuLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTItMiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bHVzLWxvYWRlci9pbmRleC5qcz8/cmVmLS0yLTMhLi9sYXlvdXQuc3R5bFwiKTtcblx0XHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXHRcdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHRcdH0pO1xuXHR9XG5cdC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zaXRlL3BhZ2VzL2xheW91dC5zdHlsXG4vLyBtb2R1bGUgaWQgPSAuL3NpdGUvcGFnZXMvbGF5b3V0LnN0eWxcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IExpbmsgZnJvbSAnY29tcG9uZW50cy9saW5rJztcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKG9iaiwgX1ZkdCwgYmxvY2tzLCAkY2FsbGVlKSB7XG5cbl9WZHQgfHwgKF9WZHQgPSBWZHQpO1xub2JqIHx8IChvYmogPSB7fSk7XG5ibG9ja3MgfHwgKGJsb2NrcyA9IHt9KTtcbnZhciBoID0gX1ZkdC5taXNzLmgsIGhjID0gX1ZkdC5taXNzLmhjLCBodSA9IF9WZHQubWlzcy5odSwgd2lkZ2V0cyA9IHRoaXMgJiYgdGhpcy53aWRnZXRzIHx8IHt9LCBfYmxvY2tzID0ge30sIF9fYmxvY2tzID0ge30sXG5fX3UgPSBfVmR0LnV0aWxzLCBleHRlbmQgPSBfX3UuZXh0ZW5kLCBfZSA9IF9fdS5lcnJvciwgX2NsYXNzTmFtZSA9IF9fdS5jbGFzc05hbWUsXG5fX28gPSBfX3UuT3B0aW9ucywgX2dldE1vZGVsID0gX19vLmdldE1vZGVsLCBfc2V0TW9kZWwgPSBfX28uc2V0TW9kZWwsXG5fc2V0Q2hlY2tib3hNb2RlbCA9IF9fdS5zZXRDaGVja2JveE1vZGVsLCBfZGV0ZWN0Q2hlY2tib3hDaGVja2VkID0gX191LmRldGVjdENoZWNrYm94Q2hlY2tlZCxcbl9zZXRTZWxlY3RNb2RlbCA9IF9fdS5zZXRTZWxlY3RNb2RlbCxcbnNlbGYgPSB0aGlzLmRhdGEsIHNjb3BlID0gb2JqLCBBbmltYXRlID0gc2VsZiAmJiBzZWxmLkFuaW1hdGUsIHBhcmVudCA9ICgkY2FsbGVlIHx8IHt9KS5fc3VwZXJcblxuXG5jb25zdCBuYXYgPSBbXG4gICAge1xuICAgICAgICB0aXRsZTogJ+aVmeeoiycsXG4gICAgICAgIGhyZWY6ICdkb2N1bWVudCdcbiAgICB9LFxuICAgIHtcbiAgICAgICAgdGl0bGU6ICdBUEknLFxuICAgICAgICBocmVmOiAnYXBpJ1xuICAgIH0sXG4gICAgLy8ge1xuICAgICAgICAvLyB0aXRsZTogJ+ekuuS+iycsXG4gICAgICAgIC8vIGhyZWY6ICdleGFtcGxlcydcbiAgICAvLyB9XG5dO1xuXG5yZXR1cm4gaCgnZGl2JywgbnVsbCwgW2goJ2RpdicsIG51bGwsIGgoJ2hlYWRlcicsIG51bGwsIChfYmxvY2tzLmhlYWRlciA9IGZ1bmN0aW9uKHBhcmVudCkge3JldHVybiBbaChMaW5rLCB7J2NsYXNzTmFtZSc6ICdsb2dvJywgJ2hyZWYnOiAnLycsICdjaGlsZHJlbic6ICdLUEMnLCAnX2NvbnRleHQnOiB0aGlzfSksIGgoJ25hdicsIG51bGwsIFtfVmR0LnV0aWxzLm1hcChmdW5jdGlvbigpIHt0cnkge3JldHVybiBbbmF2IF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcyksIGZ1bmN0aW9uKHZhbHVlLCBrZXkpIHtcbnJldHVybiBoKExpbmssIHsnY2xhc3NOYW1lJzogX2NsYXNzTmFtZShmdW5jdGlvbigpIHt0cnkge3JldHVybiBbe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjdGl2ZTogdmFsdWUuaHJlZiA9PT0gc2NvcGUubmF2SW5kZXhcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKSksICdocmVmJzogZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW2AvJHt2YWx1ZS5ocmVmfWAgXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKSwgJ2NoaWxkcmVuJzogZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW3ZhbHVlLnRpdGxlIF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcyksICdfY29udGV4dCc6IHRoaXN9KTtcbn0sIHRoaXMpLCBoKCdkaXYnLCBudWxsLCBudWxsLCAnYm9yZGVyJyldKV07fSkgJiYgKF9fYmxvY2tzLmhlYWRlciA9IGZ1bmN0aW9uKHBhcmVudCkge1xudmFyIHNlbGYgPSB0aGlzO1xucmV0dXJuIGJsb2Nrcy5oZWFkZXIgPyBibG9ja3MuaGVhZGVyLmNhbGwodGhpcywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gX2Jsb2Nrcy5oZWFkZXIuY2FsbChzZWxmLCBwYXJlbnQpO1xufSkgOiBfYmxvY2tzLmhlYWRlci5jYWxsKHRoaXMsIHBhcmVudCk7XG59KSAmJiBfX2Jsb2Nrcy5oZWFkZXIuY2FsbCh0aGlzKSksICdoZWFkZXItd3JhcHBlcicpLCBoKCdkaXYnLCBudWxsLCAoX2Jsb2Nrcy5jb250ZW50ID0gZnVuY3Rpb24ocGFyZW50KSB7cmV0dXJuIG51bGw7fSkgJiYgKF9fYmxvY2tzLmNvbnRlbnQgPSBmdW5jdGlvbihwYXJlbnQpIHtcbnZhciBzZWxmID0gdGhpcztcbnJldHVybiBibG9ja3MuY29udGVudCA/IGJsb2Nrcy5jb250ZW50LmNhbGwodGhpcywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gX2Jsb2Nrcy5jb250ZW50LmNhbGwoc2VsZiwgcGFyZW50KTtcbn0pIDogX2Jsb2Nrcy5jb250ZW50LmNhbGwodGhpcywgcGFyZW50KTtcbn0pICYmIF9fYmxvY2tzLmNvbnRlbnQuY2FsbCh0aGlzKSwgJ2NvbnRlbnQtd3JhcHBlcicpXSwgX2NsYXNzTmFtZShmdW5jdGlvbigpIHt0cnkge3JldHVybiBbeydtYWluLXdyYXBwZXInOiB0cnVlLCBbc2NvcGUuY2xhc3NOYW1lXTogc2NvcGUuY2xhc3NOYW1lfSBdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpKSlcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zaXRlL3BhZ2VzL2xheW91dC52ZHQiXSwic291cmNlUm9vdCI6IiJ9