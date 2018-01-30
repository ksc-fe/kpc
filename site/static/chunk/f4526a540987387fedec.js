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
exports.push([module.i, "", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?{\"url\":true}!./node_modules/postcss-loader/lib/index.js?{\"plugins\":[null]}!./node_modules/stylus-loader/index.js?{\"include css\":true,\"sourceMap\":false,\"import\":\"/home/javey/Workspace/kpc/styles/themes/ksyun/index.styl\"}!./site/pages/layout.styl":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(undefined);
// imports


// module
exports.push([module.i, "html,\nbody {\n  margin: 0;\n  color: #333;\n  background: #efefef;\n  height: 100%;\n}\na {\n  color: #2d8cf0;\n  text-decoration: none;\n  cursor: pointer;\n}\nh1,\nh2,\nh3,\nh4,\nh5 {\n  margin: 0;\n  font-weight: normal;\n  color: #000;\n}\nh1 {\n  font-size: 2em;\n}\nh2 {\n  font-size: 1.8em;\n}\nh3 {\n  font-size: 1.5em;\n}\ncode {\n  color: #c7254e;\n  background-color: #f9f2f4;\n  border-radius: 4px;\n  padding: 0 5px;\n}\nblockquote {\n  margin: 1em 0;\n  padding: 1px 2em;\n  background: #f8f8f8;\n  border-radius: 0 3px 3px 0;\n  border-left: 2px solid #fe4444;\n  position: relative;\n}\nblockquote:before {\n  content: '!';\n  display: block;\n  position: absolute;\n  top: 50%;\n  margin-top: -10px;\n  width: 20px;\n  height: 20px;\n  border-radius: 100%;\n  text-align: center;\n  background: #fe4444;\n  color: #fff;\n  line-height: 20px;\n  left: -11px;\n}\n#page,\n.app-wrapper,\n.main-wrapper {\n  height: 100%;\n}\n.header-wrapper {\n  height: 80px;\n  line-height: 80px;\n  -webkit-box-shadow: 0 2px 5px rgba(0,0,0,0.08);\n          box-shadow: 0 2px 5px rgba(0,0,0,0.08);\n  background: #fff;\n  position: fixed;\n  width: 100%;\n  top: 0;\n  z-index: 999;\n}\n.header-wrapper header {\n  width: width;\n  margin: 0 auto;\n}\n.header-wrapper .logo {\n  font-size: 24px;\n  color: #333;\n  margin-left: 20px;\n}\n.header-wrapper nav {\n  float: right;\n  position: relative;\n}\n.header-wrapper nav a {\n  display: inline-block;\n  padding: 0 20px;\n  color: #333;\n}\n.header-wrapper nav a.active {\n  color: #fe4444;\n}\n.header-wrapper .border {\n  position: absolute;\n  bottom: 0;\n  border-bottom: 2px solid #fe4444;\n}\n.transition {\n  -webkit-transition: all 350ms cubic-bezier(0.55, 0, 0.1, 1);\n  transition: all 350ms cubic-bezier(0.55, 0, 0.1, 1);\n}\n.blue {\n  color: #09d;\n}\n.red {\n  color: #d04;\n}\n.yellow {\n  color: #ffc400;\n}\n", ""]);

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

/***/ "./site/pages/document/index.js":
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

var _layout = __webpack_require__("./site/pages/layout.js");

var _layout2 = _interopRequireDefault(_layout);

var _index = __webpack_require__("./site/pages/document/index.vdt");

var _index2 = _interopRequireDefault(_index);

__webpack_require__("./site/pages/document/index.styl");

var _axios = __webpack_require__("./node_modules/axios/index.js");

var _axios2 = _interopRequireDefault(_axios);

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

var _default = (_dec = _intact2.default.template(), (_class = (_temp = _class2 = function (_Layout) {
    _inherits(_default, _Layout);

    function _default() {
        _classCallCheck(this, _default);

        return _possibleConstructorReturn(this, (_default.__proto__ || Object.getPrototypeOf(_default)).apply(this, arguments));
    }

    _createClass(_default, [{
        key: '_init',
        value: function _init() {
            return _axios2.default.get('/' + this.get('path') + 'index.json').then(function (data) {
                console.log(data);
            });
        }
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
            this.$border = $(this.element).find('.border');
            this._updateBorder();
        }
    }, {
        key: '_updateBorder',
        value: function _updateBorder() {
            var $nav = $(this.element).find('.active');
            var width = 0;
            var left = 0;
            if ($nav.length) {
                left = $nav.position().left;
                width = $nav.outerWidth();
            }
            this.$border.addClass('transition');
            this.$border.css({ width: width, left: left });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2J1dHRvbi9ncm91cC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2J1dHRvbi9ncm91cC52ZHQiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9idXR0b24vaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9idXR0b24vaW5kZXguc3R5bCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2J1dHRvbi9pbmRleC52ZHQiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy91dGlscy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXhpb3MvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9hZGFwdGVycy94aHIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9heGlvcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NhbmNlbC9DYW5jZWwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jYW5jZWwvQ2FuY2VsVG9rZW4uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jYW5jZWwvaXNDYW5jZWwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jb3JlL0F4aW9zLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY29yZS9JbnRlcmNlcHRvck1hbmFnZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jb3JlL2NyZWF0ZUVycm9yLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY29yZS9kaXNwYXRjaFJlcXVlc3QuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jb3JlL2VuaGFuY2VFcnJvci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NvcmUvc2V0dGxlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY29yZS90cmFuc2Zvcm1EYXRhLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvZGVmYXVsdHMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL2JpbmQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL2J0b2EuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL2J1aWxkVVJMLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9jb21iaW5lVVJMcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvY29va2llcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvaXNBYnNvbHV0ZVVSTC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvaXNVUkxTYW1lT3JpZ2luLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9ub3JtYWxpemVIZWFkZXJOYW1lLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9wYXJzZUhlYWRlcnMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL3NwcmVhZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL3V0aWxzLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvYnV0dG9uL2luZGV4LnN0eWw/NDAxOCIsIndlYnBhY2s6Ly8vLi9zaXRlL3BhZ2VzL2RvY3VtZW50L2luZGV4LnN0eWw/OWJhNyIsIndlYnBhY2s6Ly8vLi9zaXRlL3BhZ2VzL2xheW91dC5zdHlsPzIxMzIiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2lzLWJ1ZmZlci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zaXRlL3BhZ2VzL2RvY3VtZW50L2luZGV4LmpzIiwid2VicGFjazovLy8uL3NpdGUvcGFnZXMvZG9jdW1lbnQvaW5kZXguc3R5bCIsIndlYnBhY2s6Ly8vLi9zaXRlL3BhZ2VzL2RvY3VtZW50L2luZGV4LnZkdCIsIndlYnBhY2s6Ly8vLi9zaXRlL3BhZ2VzL2xheW91dC5qcyIsIndlYnBhY2s6Ly8vLi9zaXRlL3BhZ2VzL2xheW91dC5zdHlsIiwid2VicGFjazovLy8uL3NpdGUvcGFnZXMvbGF5b3V0LnZkdCJdLCJuYW1lcyI6WyJCdXR0b25Hcm91cCIsInRlbXBsYXRlIiwidmVydGljYWwiLCJyYWRpbyIsInZhbHVlIiwidW5kZWZpbmVkIiwicHJvcFR5cGVzIiwiQm9vbGVhbiIsIm9iaiIsIl9WZHQiLCJibG9ja3MiLCIkY2FsbGVlIiwiVmR0IiwiaCIsIm1pc3MiLCJoYyIsImh1Iiwid2lkZ2V0cyIsIl9ibG9ja3MiLCJfX2Jsb2NrcyIsIl9fdSIsInV0aWxzIiwiZXh0ZW5kIiwiX2UiLCJlcnJvciIsIl9jbGFzc05hbWUiLCJjbGFzc05hbWUiLCJfX28iLCJPcHRpb25zIiwiX2dldE1vZGVsIiwiZ2V0TW9kZWwiLCJfc2V0TW9kZWwiLCJzZXRNb2RlbCIsIl9zZXRDaGVja2JveE1vZGVsIiwic2V0Q2hlY2tib3hNb2RlbCIsIl9kZXRlY3RDaGVja2JveENoZWNrZWQiLCJkZXRlY3RDaGVja2JveENoZWNrZWQiLCJfc2V0U2VsZWN0TW9kZWwiLCJzZXRTZWxlY3RNb2RlbCIsInNlbGYiLCJkYXRhIiwic2NvcGUiLCJBbmltYXRlIiwicGFyZW50IiwiX3N1cGVyIiwiZ2V0Iiwic3R5bGUiLCJjaGlsZHJlbiIsImZsdWlkIiwiY2xhc3NOYW1lT2JqIiwiZSIsImNhbGwiLCJtYXAiLCJ2Tm9kZSIsInRhZyIsInByb3BzIiwiX3ZhbHVlIiwiQnV0dG9uIiwidHlwZSIsInNpemUiLCJpY29uIiwiY2lyY2xlIiwibG9hZGluZyIsImRpc2FibGVkIiwiaHRtbFR5cGUiLCJ0YWdOYW1lIiwibmFtZSIsInBhcmVudFZOb2RlIiwiZ3JvdXAiLCJzZXQiLCJ0cmlnZ2VyIiwiU3RyaW5nIiwiRnVuY3Rpb24iLCJyZWYiLCJrZXkiLCJyZXN0IiwiaHJlZiIsIkFycmF5IiwiaXNBcnJheSIsImZvckVhY2giLCJjaGlsZCIsImluZGV4IiwiaW5kZXhPZiIsImxlbmd0aCIsIl9vbkNsaWNrIiwiYWRkU3R5bGUiLCJrZWJhYkNhc2UiLCJwcm94eUV2ZW50IiwiaXNTdHJpbmdPck51bWJlciIsImlzVGV4dFZOb2RlIiwiaXNTdHJpbmdPck51bWJlck5vdEVtcHR5IiwiZ2V0VGV4dEJ5Q2hpbGRyZW4iLCJmaW5kUGFyZW50Q29tcG9uZW50Iiwic3RyUGFkIiwicmFuZ2UiLCJleHRyYSIsIk9iamVjdCIsImtleXMiLCJqb2luIiwidGVzdCIsIl9jYWNoZSIsInVwcGVyY2FzZVBhdHRlcm4iLCJ3b3JkIiwicmVwbGFjZSIsIml0ZW0iLCJ0b0xvd2VyQ2FzZSIsImNvbXBvbmVudCIsIm8iLCJyZXQiLCJpc09iamVjdCIsIkNvbXBvbmVudCIsImluc3RhbmNlIiwiaXNVbnRpbCIsInN0ciIsInBhZCIsInRvU3RyaW5nIiwibCIsInN0YXJ0IiwiZW5kIiwiYXBwbHkiLCJ2IiwiaSIsInRoZW4iLCJjb25zb2xlIiwibG9nIiwiX29iaiIsImhhc093blByb3BlcnR5IiwiYXJndW1lbnRzIiwiY29udGVudCIsIiRib3JkZXIiLCIkIiwiZWxlbWVudCIsImZpbmQiLCJfdXBkYXRlQm9yZGVyIiwiJG5hdiIsIndpZHRoIiwibGVmdCIsInBvc2l0aW9uIiwib3V0ZXJXaWR0aCIsImFkZENsYXNzIiwiY3NzIiwibmF2IiwidGl0bGUiLCJoZWFkZXIiLCJhY3RpdmUiLCJuYXZJbmRleCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNB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QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7Ozs7Ozs7Ozs7QUNuTEE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLFlBQVksTUFBTTtBQUNsQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7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SDtBQUFNO0FBQUMsS0FBM0csQ0FBNEdDLElBQTVHLENBQWlILElBQWpILENBQVgsQ0FkakQsQ0FBUDtBQWVDLEM7O0FBNUNEIiwiZmlsZSI6InN0YXRpYy9jaHVuay9mNDUyNmE1NDA5ODczODdmZWRlYy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBJbnRhY3QgZnJvbSAnaW50YWN0JztcbmltcG9ydCB0ZW1wbGF0ZSBmcm9tICcuL2dyb3VwLnZkdCc7XG5pbXBvcnQgJy4vaW5kZXguc3R5bCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJ1dHRvbkdyb3VwIGV4dGVuZHMgSW50YWN0IHtcbiAgICBASW50YWN0LnRlbXBsYXRlKClcbiAgICBnZXQgdGVtcGxhdGUoKSB7IHJldHVybiB0ZW1wbGF0ZTsgfVxuXG4gICAgZGVmYXVsdHMoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB2ZXJ0aWNhbDogZmFsc2UsXG4gICAgICAgICAgICByYWRpbzogZmFsc2UsXG4gICAgICAgICAgICB2YWx1ZTogdW5kZWZpbmVkLFxuICAgICAgICB9O1xuICAgIH1cblxuICAgIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgICAgIHZlcnRpY2FsOiBCb29sZWFuLFxuICAgICAgICByYWRpbzogQm9vbGVhbixcbiAgICB9XG59XG5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvYnV0dG9uL2dyb3VwLmpzIiwiaW1wb3J0IEJ1dHRvbiBmcm9tICcuLyc7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihvYmosIF9WZHQsIGJsb2NrcywgJGNhbGxlZSkge1xuXG5fVmR0IHx8IChfVmR0ID0gVmR0KTtcbm9iaiB8fCAob2JqID0ge30pO1xuYmxvY2tzIHx8IChibG9ja3MgPSB7fSk7XG52YXIgaCA9IF9WZHQubWlzcy5oLCBoYyA9IF9WZHQubWlzcy5oYywgaHUgPSBfVmR0Lm1pc3MuaHUsIHdpZGdldHMgPSB0aGlzICYmIHRoaXMud2lkZ2V0cyB8fCB7fSwgX2Jsb2NrcyA9IHt9LCBfX2Jsb2NrcyA9IHt9LFxuX191ID0gX1ZkdC51dGlscywgZXh0ZW5kID0gX191LmV4dGVuZCwgX2UgPSBfX3UuZXJyb3IsIF9jbGFzc05hbWUgPSBfX3UuY2xhc3NOYW1lLFxuX19vID0gX191Lk9wdGlvbnMsIF9nZXRNb2RlbCA9IF9fby5nZXRNb2RlbCwgX3NldE1vZGVsID0gX19vLnNldE1vZGVsLFxuX3NldENoZWNrYm94TW9kZWwgPSBfX3Uuc2V0Q2hlY2tib3hNb2RlbCwgX2RldGVjdENoZWNrYm94Q2hlY2tlZCA9IF9fdS5kZXRlY3RDaGVja2JveENoZWNrZWQsXG5fc2V0U2VsZWN0TW9kZWwgPSBfX3Uuc2V0U2VsZWN0TW9kZWwsXG5zZWxmID0gdGhpcy5kYXRhLCBzY29wZSA9IG9iaiwgQW5pbWF0ZSA9IHNlbGYgJiYgc2VsZi5BbmltYXRlLCBwYXJlbnQgPSAoJGNhbGxlZSB8fCB7fSkuX3N1cGVyXG5cblxuY29uc3Qge1xuICAgIGNsYXNzTmFtZSwgdmVydGljYWwsIHN0eWxlLCBcbiAgICBjaGlsZHJlbiwgcmFkaW8sIHZhbHVlLCBmbHVpZFxufSA9IHNlbGYuZ2V0KCk7XG5cbmNvbnN0IGNsYXNzTmFtZU9iaiA9IHtcbiAgICAnay1idG5zJzogdHJ1ZSxcbiAgICAnay12ZXJ0aWNhbCc6IHZlcnRpY2FsLFxuICAgIFtjbGFzc05hbWVdOiBjbGFzc05hbWUsXG4gICAgJ2stZmx1aWQnOiBmbHVpZCxcbn07XG5cbnJldHVybiBoKCdkaXYnLCB7J3N0eWxlJzogZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW3N0eWxlIF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcyl9LCBmdW5jdGlvbigpIHt0cnkge3JldHVybiBbcmFkaW8gPyBjaGlsZHJlbi5tYXAodk5vZGUgPT4ge1xuICAgICAgICBpZiAodk5vZGUudGFnID09PSBCdXR0b24pIHtcbiAgICAgICAgICAgIHZOb2RlLnByb3BzLl92YWx1ZSA9IHZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB2Tm9kZTtcbiAgICB9KSA6IGNoaWxkcmVuXG5dWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpLCBfY2xhc3NOYW1lKGZ1bmN0aW9uKCkge3RyeSB7cmV0dXJuIFtjbGFzc05hbWVPYmogXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKSkpXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9idXR0b24vZ3JvdXAudmR0IiwiaW1wb3J0IEludGFjdCBmcm9tICdpbnRhY3QnO1xuaW1wb3J0IHRlbXBsYXRlIGZyb20gJy4vaW5kZXgudmR0JztcbmltcG9ydCBHcm91cCBmcm9tICcuL2dyb3VwJztcbmltcG9ydCAnLi9pbmRleC5zdHlsJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQnV0dG9uIGV4dGVuZHMgSW50YWN0IHtcbiAgICBASW50YWN0LnRlbXBsYXRlKClcbiAgICBnZXQgdGVtcGxhdGUoKSB7IHJldHVybiB0ZW1wbGF0ZTsgfVxuXG4gICAgZGVmYXVsdHMoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB0eXBlOiAnZGVmYXVsdCcsIC8vIHByaW1hcnkgfCB3YXJuaW5nIHwgZGFuZ2VyXG4gICAgICAgICAgICBzaXplOiAnZGVmYXVsdCcsIC8vIHNtYWxsIHwgbWluaVxuICAgICAgICAgICAgaWNvbjogZmFsc2UsXG4gICAgICAgICAgICBjaXJjbGU6IGZhbHNlLFxuICAgICAgICAgICAgbG9hZGluZzogZmFsc2UsXG4gICAgICAgICAgICBkaXNhYmxlZDogZmFsc2UsXG4gICAgICAgICAgICBmbHVpZDogZmFsc2UsXG4gICAgICAgICAgICBodG1sVHlwZTogJ2J1dHRvbicsXG4gICAgICAgICAgICB0YWdOYW1lOiAnYnV0dG9uJyxcbiAgICAgICAgICAgIHZhbHVlOiB1bmRlZmluZWQsXG4gICAgICAgICAgICBuYW1lOiB1bmRlZmluZWQsXG5cbiAgICAgICAgICAgIF92YWx1ZTogdW5kZWZpbmVkLFxuICAgICAgICB9O1xuICAgIH1cblxuICAgIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgc2l6ZTogU3RyaW5nLFxuICAgICAgICBpY29uOiBCb29sZWFuLFxuICAgICAgICBjaXJjbGU6IEJvb2xlYW4sXG4gICAgICAgIGxvYWRpbmc6IEJvb2xlYW4sXG4gICAgICAgIGRpc2FibGVkOiBCb29sZWFuLFxuICAgICAgICBmbHVpZDogQm9vbGVhbixcbiAgICAgICAgaHRtbFR5cGU6IFN0cmluZyxcbiAgICAgICAgdGFnTmFtZTogW1N0cmluZywgRnVuY3Rpb25dLFxuICAgICAgICBuYW1lOiBTdHJpbmcsXG4gICAgfVxuXG4gICAgX21vdW50KCkge1xuICAgICAgICBsZXQgcGFyZW50Vk5vZGUgPSB0aGlzLnBhcmVudFZOb2RlO1xuICAgICAgICBpZiAocGFyZW50Vk5vZGUpIHtcbiAgICAgICAgICAgIHBhcmVudFZOb2RlID0gcGFyZW50Vk5vZGUucGFyZW50Vk5vZGU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHBhcmVudFZOb2RlICYmIHBhcmVudFZOb2RlLnRhZyA9PT0gR3JvdXApIHtcbiAgICAgICAgICAgIHRoaXMuZ3JvdXAgPSBwYXJlbnRWTm9kZS5jaGlsZHJlbjtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHNob3dMb2FkaW5nKCkge1xuICAgICAgICB0aGlzLnNldCgnbG9hZGluZycsIHRydWUpO1xuICAgIH1cblxuICAgIGhpZGVMb2FkaW5nKCkge1xuICAgICAgICB0aGlzLnNldCgnbG9hZGluZycsIGZhbHNlKTtcbiAgICB9XG5cbiAgICBkaXNhYmxlKCkge1xuICAgICAgICB0aGlzLnNldCgnZGlzYWJsZWQnLCB0cnVlKTtcbiAgICB9XG5cbiAgICBlbmFibGUoKSB7XG4gICAgICAgIHRoaXMuc2V0KCdkaXNhYmxlZCcsIGZhbHNlKTtcbiAgICB9XG5cbiAgICBfb25DbGljayhlKSB7XG4gICAgICAgIGlmICh0aGlzLmdyb3VwKSB7XG4gICAgICAgICAgICB0aGlzLmdyb3VwLnNldCgndmFsdWUnLCB0aGlzLmdldCgndmFsdWUnKSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy50cmlnZ2VyKCdjbGljaycsIGUpO1xuICAgIH1cbn1cblxuZXhwb3J0IHtCdXR0b24sIEdyb3VwIGFzIEJ1dHRvbkdyb3VwfTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvYnV0dG9uL2luZGV4LmpzIiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTItMSEuLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTItMiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bHVzLWxvYWRlci9pbmRleC5qcz8/cmVmLS0yLTMhLi9pbmRleC5zdHlsXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4vLyBQcmVwYXJlIGNzc1RyYW5zZm9ybWF0aW9uXG52YXIgdHJhbnNmb3JtO1xuXG52YXIgb3B0aW9ucyA9IHt9XG5vcHRpb25zLnRyYW5zZm9ybSA9IHRyYW5zZm9ybVxuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG5cdC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdGlmKCFjb250ZW50LmxvY2Fscykge1xuXHRcdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz8/cmVmLS0yLTEhLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0yLTIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWx1cy1sb2FkZXIvaW5kZXguanM/P3JlZi0tMi0zIS4vaW5kZXguc3R5bFwiLCBmdW5jdGlvbigpIHtcblx0XHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tMi0xIS4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMi0yIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsdXMtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTItMyEuL2luZGV4LnN0eWxcIik7XG5cdFx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblx0XHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0XHR9KTtcblx0fVxuXHQvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vY29tcG9uZW50cy9idXR0b24vaW5kZXguc3R5bFxuLy8gbW9kdWxlIGlkID0gLi9jb21wb25lbnRzL2J1dHRvbi9pbmRleC5zdHlsXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7aXNTdHJpbmdPck51bWJlck5vdEVtcHR5fSBmcm9tICcuLi91dGlscyc7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihvYmosIF9WZHQsIGJsb2NrcywgJGNhbGxlZSkge1xuXG5fVmR0IHx8IChfVmR0ID0gVmR0KTtcbm9iaiB8fCAob2JqID0ge30pO1xuYmxvY2tzIHx8IChibG9ja3MgPSB7fSk7XG52YXIgaCA9IF9WZHQubWlzcy5oLCBoYyA9IF9WZHQubWlzcy5oYywgaHUgPSBfVmR0Lm1pc3MuaHUsIHdpZGdldHMgPSB0aGlzICYmIHRoaXMud2lkZ2V0cyB8fCB7fSwgX2Jsb2NrcyA9IHt9LCBfX2Jsb2NrcyA9IHt9LFxuX191ID0gX1ZkdC51dGlscywgZXh0ZW5kID0gX191LmV4dGVuZCwgX2UgPSBfX3UuZXJyb3IsIF9jbGFzc05hbWUgPSBfX3UuY2xhc3NOYW1lLFxuX19vID0gX191Lk9wdGlvbnMsIF9nZXRNb2RlbCA9IF9fby5nZXRNb2RlbCwgX3NldE1vZGVsID0gX19vLnNldE1vZGVsLFxuX3NldENoZWNrYm94TW9kZWwgPSBfX3Uuc2V0Q2hlY2tib3hNb2RlbCwgX2RldGVjdENoZWNrYm94Q2hlY2tlZCA9IF9fdS5kZXRlY3RDaGVja2JveENoZWNrZWQsXG5fc2V0U2VsZWN0TW9kZWwgPSBfX3Uuc2V0U2VsZWN0TW9kZWwsXG5zZWxmID0gdGhpcy5kYXRhLCBzY29wZSA9IG9iaiwgQW5pbWF0ZSA9IHNlbGYgJiYgc2VsZi5BbmltYXRlLCBwYXJlbnQgPSAoJGNhbGxlZSB8fCB7fSkuX3N1cGVyXG5cblxubGV0IHtcbiAgICB0eXBlLCBjbGFzc05hbWUsIHNpemUsIGljb24sIGNpcmNsZSwgcmVmLCBrZXksXG4gICAgdGFnTmFtZSwgaHRtbFR5cGUsIGZsdWlkLCBjaGlsZHJlbiwgbG9hZGluZyxcbiAgICB2YWx1ZSwgX3ZhbHVlLCBuYW1lLCAuLi5yZXN0XG59ID0gc2VsZi5nZXQoKTtcblxuY29uc3QgY2xhc3NOYW1lT2JqID0ge1xuICAgICdrLWJ0bic6IHRydWUsXG4gICAgW2BrLSR7dHlwZX1gXTogdHlwZSAhPT0gJ2RlZmF1bHQnLFxuICAgICdrLWJ0bi1pY29uJzogaWNvbixcbiAgICBbYGstJHtzaXplfWBdOiBzaXplICE9PSAnZGVmYXVsdCcsXG4gICAgW2NsYXNzTmFtZV06IGNsYXNzTmFtZSwgXG4gICAgJ2stY2lyY2xlJzogY2lyY2xlLFxuICAgICdrLWxvYWRpbmcnOiBsb2FkaW5nLFxuICAgICdrLWZsdWlkJzogZmx1aWQsXG4gICAgJ2stYWN0aXZlJzogdmFsdWUgIT09IHVuZGVmaW5lZCAmJiB2YWx1ZSA9PT0gX3ZhbHVlLFxufTtcblxuY29uc3QgQnV0dG9uID0gcHJvcHMgPT4ge1xuICAgIGlmIChwcm9wcy5ocmVmKSB7XG4gICAgICAgIHRhZ05hbWUgPSAnYSc7XG4gICAgfVxuICAgIGlmICh0YWdOYW1lID09PSAnYnV0dG9uJykge1xuICAgICAgICAvLyBzZXQgdHlwZSBvZiBodG1sIGJ1dHRvblxuICAgICAgICBwcm9wcy50eXBlID0gaHRtbFR5cGU7XG4gICAgfVxuICAgIC8vIGRpc2FibGUgYnV0dG9uIHdoZW4gbG9hZGluZ1xuICAgIGlmIChsb2FkaW5nKSBwcm9wcy5kaXNhYmxlZCA9IHRydWU7XG4gICAgcmV0dXJuIGgodGFnTmFtZSwgcHJvcHMsIHByb3BzLmNoaWxkcmVuKTtcbn07XG5cbi8vIGhhY2sgZm9yIGxvYWRpbmcgdHJhbnNpdGlvbiBvZiB3aWR0aFxuaWYgKCFpY29uICYmIEFycmF5LmlzQXJyYXkoY2hpbGRyZW4pKSB7XG4gICAgY2hpbGRyZW4uZm9yRWFjaCgoY2hpbGQsIGluZGV4KSA9PiB7XG4gICAgICAgIGlmIChjaGlsZCkge1xuICAgICAgICAgICAgaWYgKGNoaWxkLnR5cGUgPT09IDEgfHwgaXNTdHJpbmdPck51bWJlck5vdEVtcHR5KGNoaWxkKSkge1xuICAgICAgICAgICAgICAgIC8vIGlzIGEgdGV4dCBub2RlXG4gICAgICAgICAgICAgICAgLy8gd3JhcCB0ZXh0IG5vZGUgd2l0aCBzcGFuXG4gICAgICAgICAgICAgICAgY2hpbGRyZW5baW5kZXhdID0gaCgnc3BhbicsIG51bGwsIGZ1bmN0aW9uKCkge3RyeSB7cmV0dXJuIFtjaGlsZCBdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gd2hldGhlciB0aGUgaWNvbiBpcyBvbiB0aGUgbGVmdCBzaWRlIG9yIHJpZ2h0XG4gICAgICAgICAgICBpZiAoaW5kZXggPT09IDApIHtcbiAgICAgICAgICAgICAgICBpZiAoY2hpbGQuY2xhc3NOYW1lICYmIGNoaWxkLmNsYXNzTmFtZS5pbmRleE9mKCdpY29uJykgPiAtMSkge1xuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWVPYmpbJ2staWNvbi1sZWZ0J10gPSB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSBpZiAoaW5kZXggPT09IGNoaWxkcmVuLmxlbmd0aCAtIDEpIHtcbiAgICAgICAgICAgICAgICBpZiAoY2hpbGQuY2xhc3NOYW1lICYmIGNoaWxkLmNsYXNzTmFtZS5pbmRleE9mKCdpY29uJykgPiAtMSkge1xuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWVPYmpbJ2staWNvbi1yaWdodCddID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KTtcbn0gZWxzZSBpZiAoaXNTdHJpbmdPck51bWJlck5vdEVtcHR5KGNoaWxkcmVuKSkge1xuICAgIC8vIHdyYXAgdGV4dCBub2RlIHdpdGggc3BhblxuICAgIGNoaWxkcmVuID0gaCgnc3BhbicsIG51bGwsIGZ1bmN0aW9uKCkge3RyeSB7cmV0dXJuIFtjaGlsZHJlbiBdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpKVxufVxuXG5yZXR1cm4gaChCdXR0b24sIHsnY2xhc3NOYW1lJzogX2NsYXNzTmFtZShmdW5jdGlvbigpIHt0cnkge3JldHVybiBbY2xhc3NOYW1lT2JqIF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcykpLCAuLi5mdW5jdGlvbigpIHt0cnkge3JldHVybiBbcmVzdCBdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpLCAnZXYtY2xpY2snOiBmdW5jdGlvbigpIHt0cnkge3JldHVybiBbc2VsZi5fb25DbGljayBdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpLCAnY2hpbGRyZW4nOiBbJ1xcbiAgICAnLCBmdW5jdGlvbigpIHt0cnkge3JldHVybiBbbG9hZGluZyA/IFxuICAgICAgICBjbGFzc05hbWVPYmpbJ2staWNvbi1yaWdodCddID9cbiAgICAgICAgICAgIFtjaGlsZHJlbiwgaCgnaScsIG51bGwsIG51bGwsICdrLWljb24gaW9uLWxvYWQtYyBpY29uLWxvYWRpbmcnKV0gOlxuICAgICAgICAgICAgW2goJ2knLCBudWxsLCBudWxsLCAnay1pY29uIGlvbi1sb2FkLWMgaWNvbi1sb2FkaW5nJyksIGNoaWxkcmVuXSA6XG4gICAgICAgIGNoaWxkcmVuIFxuICAgIF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcyksICdcXG4gICAgJywgZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW3ZhbHVlICE9PSB1bmRlZmluZWQgXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKSA/IGgoJ2lucHV0Jywgeyd0eXBlJzogJ3JhZGlvJywgJ25hbWUnOiBmdW5jdGlvbigpIHt0cnkge3JldHVybiBbbmFtZSBdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpLCAnY2hlY2tlZCc6IGZ1bmN0aW9uKCkge3RyeSB7cmV0dXJuIFt2YWx1ZSA9PT0gX3ZhbHVlIF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcyl9KSA6IHVuZGVmaW5lZF0sICdfY29udGV4dCc6IHRoaXN9KVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvYnV0dG9uL2luZGV4LnZkdCIsImltcG9ydCBJbnRhY3QgZnJvbSAnaW50YWN0JztcblxuY29uc3QgdXRpbHMgPSBJbnRhY3QudXRpbHM7XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRTdHlsZShzdHlsZSwgZXh0cmEpIHtcbiAgICBpZiAoIXN0eWxlKSByZXR1cm4gZXh0cmE7XG4gICAgaWYgKCFleHRyYSkgcmV0dXJuIHN0eWxlO1xuICAgIGlmICh0eXBlb2Ygc3R5bGUgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIGV4dHJhID0gT2JqZWN0LmtleXMoZXh0cmEpLm1hcChrZXkgPT4gYCR7a2ViYWJDYXNlKGtleSl9OiAke2V4dHJhW2tleV19YCkuam9pbignOycpO1xuICAgICAgICBzdHlsZSA9IGAke3N0eWxlfSR7IXN0eWxlIHx8IC87XFxzKiQvLnRlc3Qoc3R5bGUpID8gJycgOiAnOyd9JHtleHRyYX1gO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHN0eWxlID0gey4uLnN0eWxlLCAuLi5leHRyYX07XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0eWxlO1xufVxuXG5jb25zdCBfY2FjaGUgPSB7fTtcbmNvbnN0IHVwcGVyY2FzZVBhdHRlcm4gPSAvW0EtWl0vZztcbmV4cG9ydCBmdW5jdGlvbiBrZWJhYkNhc2Uod29yZCkge1xuICAgIGlmICghX2NhY2hlW3dvcmRdKSB7XG4gICAgICAgIF9jYWNoZVt3b3JkXSA9IHdvcmQucmVwbGFjZSh1cHBlcmNhc2VQYXR0ZXJuLCAoaXRlbSkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIGAtJHtpdGVtLnRvTG93ZXJDYXNlKCl9YDtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiBfY2FjaGVbd29yZF07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwcm94eUV2ZW50KGNvbXBvbmVudCwgbmFtZSkge1xuICAgIHJldHVybiAoZSkgPT4gY29tcG9uZW50LnRyaWdnZXIobmFtZSwgZSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc1N0cmluZ09yTnVtYmVyKG8pIHtcbiAgICBjb25zdCB0eXBlID0gdHlwZW9mIG87XG4gICAgcmV0dXJuIHR5cGUgPT09ICdzdHJpbmcnIHx8IHR5cGUgPT09ICdudW1iZXInO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNUZXh0Vk5vZGUobykge1xuICAgIHJldHVybiBpc1N0cmluZ09yTnVtYmVyKG8pIHx8IG8udHlwZSA9PT0gMTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzU3RyaW5nT3JOdW1iZXJOb3RFbXB0eShvKSB7XG4gICAgY29uc3QgdHlwZSA9IHR5cGVvZiBvO1xuICAgIHJldHVybiB0eXBlID09PSAnc3RyaW5nJyAmJiAhL15cXHMrJC8udGVzdChvKSB8fCB0eXBlID09PSAnbnVtYmVyJztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFRleHRCeUNoaWxkcmVuKGNoaWxkcmVuKSB7XG4gICAgbGV0IHJldCA9ICcnO1xuICAgIGlmIChBcnJheS5pc0FycmF5KGNoaWxkcmVuKSkge1xuICAgICAgICBjaGlsZHJlbi5mb3JFYWNoKHZOb2RlID0+IHtcbiAgICAgICAgICAgIGlmIChpc1RleHRWTm9kZSh2Tm9kZSkpIHtcbiAgICAgICAgICAgICAgICByZXQgKz0gdk5vZGUuY2hpbGRyZW47XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0gZWxzZSBpZiAoaXNTdHJpbmdPck51bWJlcihjaGlsZHJlbikpIHtcbiAgICAgICAgcmV0ICs9IGNoaWxkcmVuO1xuICAgIH1cblxuICAgIHJldHVybiByZXQ7XG59XG5cblxuZXhwb3J0IGNvbnN0IGlzT2JqZWN0ID0gdXRpbHMuaXNPYmplY3Q7XG5cbmV4cG9ydCBmdW5jdGlvbiBmaW5kUGFyZW50Q29tcG9uZW50KENvbXBvbmVudCwgaW5zdGFuY2UsIGlzVW50aWwpIHtcbiAgICBsZXQgcmV0O1xuICAgIGxldCBwYXJlbnQgPSBpbnN0YW5jZS5wYXJlbnRWTm9kZTtcbiAgICB3aGlsZSAocGFyZW50KSB7XG4gICAgICAgIGlmIChwYXJlbnQudGFnID09PSBDb21wb25lbnQpIHtcbiAgICAgICAgICAgIHJldCA9IHBhcmVudC5jaGlsZHJlbjsgICAgICAgIFxuICAgICAgICAgICAgaWYgKGlzVW50aWwpIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIHBhcmVudCA9IHBhcmVudC5wYXJlbnRWTm9kZTtcbiAgICB9XG4gICAgcmV0dXJuIHJldDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN0clBhZChzdHIsIGxlbmd0aCwgcGFkKSB7XG4gICAgc3RyID0gc3RyLnRvU3RyaW5nKCk7XG4gICAgcGFkID0gcGFkID09PSB1bmRlZmluZWQgPyAnMCcgOiBwYWQ7XG4gICAgdmFyIGwgPSBzdHIubGVuZ3RoO1xuICAgIGlmIChsIDwgbGVuZ3RoKSB7XG4gICAgICAgIHN0ciA9IG5ldyBBcnJheShsZW5ndGggLSBsICsgMSkuam9pbihwYWQpICsgc3RyO1xuICAgIH1cbiAgICByZXR1cm4gc3RyO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmFuZ2Uoc3RhcnQsIGVuZCkge1xuICAgIHJldHVybiBBcnJheS5hcHBseShudWxsLCB7bGVuZ3RoOiBlbmQgLSBzdGFydCArIDF9KVxuICAgICAgICAubWFwKCh2LCBpKSA9PiBpICsgc3RhcnQpO1xufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy91dGlscy5qcyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9saWIvYXhpb3MnKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9heGlvcy9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gLi9ub2RlX21vZHVsZXMvYXhpb3MvaW5kZXguanNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuLy4uL3V0aWxzJyk7XG52YXIgc2V0dGxlID0gcmVxdWlyZSgnLi8uLi9jb3JlL3NldHRsZScpO1xudmFyIGJ1aWxkVVJMID0gcmVxdWlyZSgnLi8uLi9oZWxwZXJzL2J1aWxkVVJMJyk7XG52YXIgcGFyc2VIZWFkZXJzID0gcmVxdWlyZSgnLi8uLi9oZWxwZXJzL3BhcnNlSGVhZGVycycpO1xudmFyIGlzVVJMU2FtZU9yaWdpbiA9IHJlcXVpcmUoJy4vLi4vaGVscGVycy9pc1VSTFNhbWVPcmlnaW4nKTtcbnZhciBjcmVhdGVFcnJvciA9IHJlcXVpcmUoJy4uL2NvcmUvY3JlYXRlRXJyb3InKTtcbnZhciBidG9hID0gKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHdpbmRvdy5idG9hICYmIHdpbmRvdy5idG9hLmJpbmQod2luZG93KSkgfHwgcmVxdWlyZSgnLi8uLi9oZWxwZXJzL2J0b2EnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiB4aHJBZGFwdGVyKGNvbmZpZykge1xuICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gZGlzcGF0Y2hYaHJSZXF1ZXN0KHJlc29sdmUsIHJlamVjdCkge1xuICAgIHZhciByZXF1ZXN0RGF0YSA9IGNvbmZpZy5kYXRhO1xuICAgIHZhciByZXF1ZXN0SGVhZGVycyA9IGNvbmZpZy5oZWFkZXJzO1xuXG4gICAgaWYgKHV0aWxzLmlzRm9ybURhdGEocmVxdWVzdERhdGEpKSB7XG4gICAgICBkZWxldGUgcmVxdWVzdEhlYWRlcnNbJ0NvbnRlbnQtVHlwZSddOyAvLyBMZXQgdGhlIGJyb3dzZXIgc2V0IGl0XG4gICAgfVxuXG4gICAgdmFyIHJlcXVlc3QgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcbiAgICB2YXIgbG9hZEV2ZW50ID0gJ29ucmVhZHlzdGF0ZWNoYW5nZSc7XG4gICAgdmFyIHhEb21haW4gPSBmYWxzZTtcblxuICAgIC8vIEZvciBJRSA4LzkgQ09SUyBzdXBwb3J0XG4gICAgLy8gT25seSBzdXBwb3J0cyBQT1NUIGFuZCBHRVQgY2FsbHMgYW5kIGRvZXNuJ3QgcmV0dXJucyB0aGUgcmVzcG9uc2UgaGVhZGVycy5cbiAgICAvLyBET04nVCBkbyB0aGlzIGZvciB0ZXN0aW5nIGIvYyBYTUxIdHRwUmVxdWVzdCBpcyBtb2NrZWQsIG5vdCBYRG9tYWluUmVxdWVzdC5cbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICd0ZXN0JyAmJlxuICAgICAgICB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJlxuICAgICAgICB3aW5kb3cuWERvbWFpblJlcXVlc3QgJiYgISgnd2l0aENyZWRlbnRpYWxzJyBpbiByZXF1ZXN0KSAmJlxuICAgICAgICAhaXNVUkxTYW1lT3JpZ2luKGNvbmZpZy51cmwpKSB7XG4gICAgICByZXF1ZXN0ID0gbmV3IHdpbmRvdy5YRG9tYWluUmVxdWVzdCgpO1xuICAgICAgbG9hZEV2ZW50ID0gJ29ubG9hZCc7XG4gICAgICB4RG9tYWluID0gdHJ1ZTtcbiAgICAgIHJlcXVlc3Qub25wcm9ncmVzcyA9IGZ1bmN0aW9uIGhhbmRsZVByb2dyZXNzKCkge307XG4gICAgICByZXF1ZXN0Lm9udGltZW91dCA9IGZ1bmN0aW9uIGhhbmRsZVRpbWVvdXQoKSB7fTtcbiAgICB9XG5cbiAgICAvLyBIVFRQIGJhc2ljIGF1dGhlbnRpY2F0aW9uXG4gICAgaWYgKGNvbmZpZy5hdXRoKSB7XG4gICAgICB2YXIgdXNlcm5hbWUgPSBjb25maWcuYXV0aC51c2VybmFtZSB8fCAnJztcbiAgICAgIHZhciBwYXNzd29yZCA9IGNvbmZpZy5hdXRoLnBhc3N3b3JkIHx8ICcnO1xuICAgICAgcmVxdWVzdEhlYWRlcnMuQXV0aG9yaXphdGlvbiA9ICdCYXNpYyAnICsgYnRvYSh1c2VybmFtZSArICc6JyArIHBhc3N3b3JkKTtcbiAgICB9XG5cbiAgICByZXF1ZXN0Lm9wZW4oY29uZmlnLm1ldGhvZC50b1VwcGVyQ2FzZSgpLCBidWlsZFVSTChjb25maWcudXJsLCBjb25maWcucGFyYW1zLCBjb25maWcucGFyYW1zU2VyaWFsaXplciksIHRydWUpO1xuXG4gICAgLy8gU2V0IHRoZSByZXF1ZXN0IHRpbWVvdXQgaW4gTVNcbiAgICByZXF1ZXN0LnRpbWVvdXQgPSBjb25maWcudGltZW91dDtcblxuICAgIC8vIExpc3RlbiBmb3IgcmVhZHkgc3RhdGVcbiAgICByZXF1ZXN0W2xvYWRFdmVudF0gPSBmdW5jdGlvbiBoYW5kbGVMb2FkKCkge1xuICAgICAgaWYgKCFyZXF1ZXN0IHx8IChyZXF1ZXN0LnJlYWR5U3RhdGUgIT09IDQgJiYgIXhEb21haW4pKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgLy8gVGhlIHJlcXVlc3QgZXJyb3JlZCBvdXQgYW5kIHdlIGRpZG4ndCBnZXQgYSByZXNwb25zZSwgdGhpcyB3aWxsIGJlXG4gICAgICAvLyBoYW5kbGVkIGJ5IG9uZXJyb3IgaW5zdGVhZFxuICAgICAgLy8gV2l0aCBvbmUgZXhjZXB0aW9uOiByZXF1ZXN0IHRoYXQgdXNpbmcgZmlsZTogcHJvdG9jb2wsIG1vc3QgYnJvd3NlcnNcbiAgICAgIC8vIHdpbGwgcmV0dXJuIHN0YXR1cyBhcyAwIGV2ZW4gdGhvdWdoIGl0J3MgYSBzdWNjZXNzZnVsIHJlcXVlc3RcbiAgICAgIGlmIChyZXF1ZXN0LnN0YXR1cyA9PT0gMCAmJiAhKHJlcXVlc3QucmVzcG9uc2VVUkwgJiYgcmVxdWVzdC5yZXNwb25zZVVSTC5pbmRleE9mKCdmaWxlOicpID09PSAwKSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIC8vIFByZXBhcmUgdGhlIHJlc3BvbnNlXG4gICAgICB2YXIgcmVzcG9uc2VIZWFkZXJzID0gJ2dldEFsbFJlc3BvbnNlSGVhZGVycycgaW4gcmVxdWVzdCA/IHBhcnNlSGVhZGVycyhyZXF1ZXN0LmdldEFsbFJlc3BvbnNlSGVhZGVycygpKSA6IG51bGw7XG4gICAgICB2YXIgcmVzcG9uc2VEYXRhID0gIWNvbmZpZy5yZXNwb25zZVR5cGUgfHwgY29uZmlnLnJlc3BvbnNlVHlwZSA9PT0gJ3RleHQnID8gcmVxdWVzdC5yZXNwb25zZVRleHQgOiByZXF1ZXN0LnJlc3BvbnNlO1xuICAgICAgdmFyIHJlc3BvbnNlID0ge1xuICAgICAgICBkYXRhOiByZXNwb25zZURhdGEsXG4gICAgICAgIC8vIElFIHNlbmRzIDEyMjMgaW5zdGVhZCBvZiAyMDQgKGh0dHBzOi8vZ2l0aHViLmNvbS9heGlvcy9heGlvcy9pc3N1ZXMvMjAxKVxuICAgICAgICBzdGF0dXM6IHJlcXVlc3Quc3RhdHVzID09PSAxMjIzID8gMjA0IDogcmVxdWVzdC5zdGF0dXMsXG4gICAgICAgIHN0YXR1c1RleHQ6IHJlcXVlc3Quc3RhdHVzID09PSAxMjIzID8gJ05vIENvbnRlbnQnIDogcmVxdWVzdC5zdGF0dXNUZXh0LFxuICAgICAgICBoZWFkZXJzOiByZXNwb25zZUhlYWRlcnMsXG4gICAgICAgIGNvbmZpZzogY29uZmlnLFxuICAgICAgICByZXF1ZXN0OiByZXF1ZXN0XG4gICAgICB9O1xuXG4gICAgICBzZXR0bGUocmVzb2x2ZSwgcmVqZWN0LCByZXNwb25zZSk7XG5cbiAgICAgIC8vIENsZWFuIHVwIHJlcXVlc3RcbiAgICAgIHJlcXVlc3QgPSBudWxsO1xuICAgIH07XG5cbiAgICAvLyBIYW5kbGUgbG93IGxldmVsIG5ldHdvcmsgZXJyb3JzXG4gICAgcmVxdWVzdC5vbmVycm9yID0gZnVuY3Rpb24gaGFuZGxlRXJyb3IoKSB7XG4gICAgICAvLyBSZWFsIGVycm9ycyBhcmUgaGlkZGVuIGZyb20gdXMgYnkgdGhlIGJyb3dzZXJcbiAgICAgIC8vIG9uZXJyb3Igc2hvdWxkIG9ubHkgZmlyZSBpZiBpdCdzIGEgbmV0d29yayBlcnJvclxuICAgICAgcmVqZWN0KGNyZWF0ZUVycm9yKCdOZXR3b3JrIEVycm9yJywgY29uZmlnLCBudWxsLCByZXF1ZXN0KSk7XG5cbiAgICAgIC8vIENsZWFuIHVwIHJlcXVlc3RcbiAgICAgIHJlcXVlc3QgPSBudWxsO1xuICAgIH07XG5cbiAgICAvLyBIYW5kbGUgdGltZW91dFxuICAgIHJlcXVlc3Qub250aW1lb3V0ID0gZnVuY3Rpb24gaGFuZGxlVGltZW91dCgpIHtcbiAgICAgIHJlamVjdChjcmVhdGVFcnJvcigndGltZW91dCBvZiAnICsgY29uZmlnLnRpbWVvdXQgKyAnbXMgZXhjZWVkZWQnLCBjb25maWcsICdFQ09OTkFCT1JURUQnLFxuICAgICAgICByZXF1ZXN0KSk7XG5cbiAgICAgIC8vIENsZWFuIHVwIHJlcXVlc3RcbiAgICAgIHJlcXVlc3QgPSBudWxsO1xuICAgIH07XG5cbiAgICAvLyBBZGQgeHNyZiBoZWFkZXJcbiAgICAvLyBUaGlzIGlzIG9ubHkgZG9uZSBpZiBydW5uaW5nIGluIGEgc3RhbmRhcmQgYnJvd3NlciBlbnZpcm9ubWVudC5cbiAgICAvLyBTcGVjaWZpY2FsbHkgbm90IGlmIHdlJ3JlIGluIGEgd2ViIHdvcmtlciwgb3IgcmVhY3QtbmF0aXZlLlxuICAgIGlmICh1dGlscy5pc1N0YW5kYXJkQnJvd3NlckVudigpKSB7XG4gICAgICB2YXIgY29va2llcyA9IHJlcXVpcmUoJy4vLi4vaGVscGVycy9jb29raWVzJyk7XG5cbiAgICAgIC8vIEFkZCB4c3JmIGhlYWRlclxuICAgICAgdmFyIHhzcmZWYWx1ZSA9IChjb25maWcud2l0aENyZWRlbnRpYWxzIHx8IGlzVVJMU2FtZU9yaWdpbihjb25maWcudXJsKSkgJiYgY29uZmlnLnhzcmZDb29raWVOYW1lID9cbiAgICAgICAgICBjb29raWVzLnJlYWQoY29uZmlnLnhzcmZDb29raWVOYW1lKSA6XG4gICAgICAgICAgdW5kZWZpbmVkO1xuXG4gICAgICBpZiAoeHNyZlZhbHVlKSB7XG4gICAgICAgIHJlcXVlc3RIZWFkZXJzW2NvbmZpZy54c3JmSGVhZGVyTmFtZV0gPSB4c3JmVmFsdWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gQWRkIGhlYWRlcnMgdG8gdGhlIHJlcXVlc3RcbiAgICBpZiAoJ3NldFJlcXVlc3RIZWFkZXInIGluIHJlcXVlc3QpIHtcbiAgICAgIHV0aWxzLmZvckVhY2gocmVxdWVzdEhlYWRlcnMsIGZ1bmN0aW9uIHNldFJlcXVlc3RIZWFkZXIodmFsLCBrZXkpIHtcbiAgICAgICAgaWYgKHR5cGVvZiByZXF1ZXN0RGF0YSA9PT0gJ3VuZGVmaW5lZCcgJiYga2V5LnRvTG93ZXJDYXNlKCkgPT09ICdjb250ZW50LXR5cGUnKSB7XG4gICAgICAgICAgLy8gUmVtb3ZlIENvbnRlbnQtVHlwZSBpZiBkYXRhIGlzIHVuZGVmaW5lZFxuICAgICAgICAgIGRlbGV0ZSByZXF1ZXN0SGVhZGVyc1trZXldO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIE90aGVyd2lzZSBhZGQgaGVhZGVyIHRvIHRoZSByZXF1ZXN0XG4gICAgICAgICAgcmVxdWVzdC5zZXRSZXF1ZXN0SGVhZGVyKGtleSwgdmFsKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgLy8gQWRkIHdpdGhDcmVkZW50aWFscyB0byByZXF1ZXN0IGlmIG5lZWRlZFxuICAgIGlmIChjb25maWcud2l0aENyZWRlbnRpYWxzKSB7XG4gICAgICByZXF1ZXN0LndpdGhDcmVkZW50aWFscyA9IHRydWU7XG4gICAgfVxuXG4gICAgLy8gQWRkIHJlc3BvbnNlVHlwZSB0byByZXF1ZXN0IGlmIG5lZWRlZFxuICAgIGlmIChjb25maWcucmVzcG9uc2VUeXBlKSB7XG4gICAgICB0cnkge1xuICAgICAgICByZXF1ZXN0LnJlc3BvbnNlVHlwZSA9IGNvbmZpZy5yZXNwb25zZVR5cGU7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIEV4cGVjdGVkIERPTUV4Y2VwdGlvbiB0aHJvd24gYnkgYnJvd3NlcnMgbm90IGNvbXBhdGlibGUgWE1MSHR0cFJlcXVlc3QgTGV2ZWwgMi5cbiAgICAgICAgLy8gQnV0LCB0aGlzIGNhbiBiZSBzdXBwcmVzc2VkIGZvciAnanNvbicgdHlwZSBhcyBpdCBjYW4gYmUgcGFyc2VkIGJ5IGRlZmF1bHQgJ3RyYW5zZm9ybVJlc3BvbnNlJyBmdW5jdGlvbi5cbiAgICAgICAgaWYgKGNvbmZpZy5yZXNwb25zZVR5cGUgIT09ICdqc29uJykge1xuICAgICAgICAgIHRocm93IGU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBIYW5kbGUgcHJvZ3Jlc3MgaWYgbmVlZGVkXG4gICAgaWYgKHR5cGVvZiBjb25maWcub25Eb3dubG9hZFByb2dyZXNzID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICByZXF1ZXN0LmFkZEV2ZW50TGlzdGVuZXIoJ3Byb2dyZXNzJywgY29uZmlnLm9uRG93bmxvYWRQcm9ncmVzcyk7XG4gICAgfVxuXG4gICAgLy8gTm90IGFsbCBicm93c2VycyBzdXBwb3J0IHVwbG9hZCBldmVudHNcbiAgICBpZiAodHlwZW9mIGNvbmZpZy5vblVwbG9hZFByb2dyZXNzID09PSAnZnVuY3Rpb24nICYmIHJlcXVlc3QudXBsb2FkKSB7XG4gICAgICByZXF1ZXN0LnVwbG9hZC5hZGRFdmVudExpc3RlbmVyKCdwcm9ncmVzcycsIGNvbmZpZy5vblVwbG9hZFByb2dyZXNzKTtcbiAgICB9XG5cbiAgICBpZiAoY29uZmlnLmNhbmNlbFRva2VuKSB7XG4gICAgICAvLyBIYW5kbGUgY2FuY2VsbGF0aW9uXG4gICAgICBjb25maWcuY2FuY2VsVG9rZW4ucHJvbWlzZS50aGVuKGZ1bmN0aW9uIG9uQ2FuY2VsZWQoY2FuY2VsKSB7XG4gICAgICAgIGlmICghcmVxdWVzdCkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHJlcXVlc3QuYWJvcnQoKTtcbiAgICAgICAgcmVqZWN0KGNhbmNlbCk7XG4gICAgICAgIC8vIENsZWFuIHVwIHJlcXVlc3RcbiAgICAgICAgcmVxdWVzdCA9IG51bGw7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZiAocmVxdWVzdERhdGEgPT09IHVuZGVmaW5lZCkge1xuICAgICAgcmVxdWVzdERhdGEgPSBudWxsO1xuICAgIH1cblxuICAgIC8vIFNlbmQgdGhlIHJlcXVlc3RcbiAgICByZXF1ZXN0LnNlbmQocmVxdWVzdERhdGEpO1xuICB9KTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9heGlvcy9saWIvYWRhcHRlcnMveGhyLmpzXG4vLyBtb2R1bGUgaWQgPSAuL25vZGVfbW9kdWxlcy9heGlvcy9saWIvYWRhcHRlcnMveGhyLmpzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcblxudmFyIHV0aWxzID0gcmVxdWlyZSgnLi91dGlscycpO1xudmFyIGJpbmQgPSByZXF1aXJlKCcuL2hlbHBlcnMvYmluZCcpO1xudmFyIEF4aW9zID0gcmVxdWlyZSgnLi9jb3JlL0F4aW9zJyk7XG52YXIgZGVmYXVsdHMgPSByZXF1aXJlKCcuL2RlZmF1bHRzJyk7XG5cbi8qKlxuICogQ3JlYXRlIGFuIGluc3RhbmNlIG9mIEF4aW9zXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IGRlZmF1bHRDb25maWcgVGhlIGRlZmF1bHQgY29uZmlnIGZvciB0aGUgaW5zdGFuY2VcbiAqIEByZXR1cm4ge0F4aW9zfSBBIG5ldyBpbnN0YW5jZSBvZiBBeGlvc1xuICovXG5mdW5jdGlvbiBjcmVhdGVJbnN0YW5jZShkZWZhdWx0Q29uZmlnKSB7XG4gIHZhciBjb250ZXh0ID0gbmV3IEF4aW9zKGRlZmF1bHRDb25maWcpO1xuICB2YXIgaW5zdGFuY2UgPSBiaW5kKEF4aW9zLnByb3RvdHlwZS5yZXF1ZXN0LCBjb250ZXh0KTtcblxuICAvLyBDb3B5IGF4aW9zLnByb3RvdHlwZSB0byBpbnN0YW5jZVxuICB1dGlscy5leHRlbmQoaW5zdGFuY2UsIEF4aW9zLnByb3RvdHlwZSwgY29udGV4dCk7XG5cbiAgLy8gQ29weSBjb250ZXh0IHRvIGluc3RhbmNlXG4gIHV0aWxzLmV4dGVuZChpbnN0YW5jZSwgY29udGV4dCk7XG5cbiAgcmV0dXJuIGluc3RhbmNlO1xufVxuXG4vLyBDcmVhdGUgdGhlIGRlZmF1bHQgaW5zdGFuY2UgdG8gYmUgZXhwb3J0ZWRcbnZhciBheGlvcyA9IGNyZWF0ZUluc3RhbmNlKGRlZmF1bHRzKTtcblxuLy8gRXhwb3NlIEF4aW9zIGNsYXNzIHRvIGFsbG93IGNsYXNzIGluaGVyaXRhbmNlXG5heGlvcy5BeGlvcyA9IEF4aW9zO1xuXG4vLyBGYWN0b3J5IGZvciBjcmVhdGluZyBuZXcgaW5zdGFuY2VzXG5heGlvcy5jcmVhdGUgPSBmdW5jdGlvbiBjcmVhdGUoaW5zdGFuY2VDb25maWcpIHtcbiAgcmV0dXJuIGNyZWF0ZUluc3RhbmNlKHV0aWxzLm1lcmdlKGRlZmF1bHRzLCBpbnN0YW5jZUNvbmZpZykpO1xufTtcblxuLy8gRXhwb3NlIENhbmNlbCAmIENhbmNlbFRva2VuXG5heGlvcy5DYW5jZWwgPSByZXF1aXJlKCcuL2NhbmNlbC9DYW5jZWwnKTtcbmF4aW9zLkNhbmNlbFRva2VuID0gcmVxdWlyZSgnLi9jYW5jZWwvQ2FuY2VsVG9rZW4nKTtcbmF4aW9zLmlzQ2FuY2VsID0gcmVxdWlyZSgnLi9jYW5jZWwvaXNDYW5jZWwnKTtcblxuLy8gRXhwb3NlIGFsbC9zcHJlYWRcbmF4aW9zLmFsbCA9IGZ1bmN0aW9uIGFsbChwcm9taXNlcykge1xuICByZXR1cm4gUHJvbWlzZS5hbGwocHJvbWlzZXMpO1xufTtcbmF4aW9zLnNwcmVhZCA9IHJlcXVpcmUoJy4vaGVscGVycy9zcHJlYWQnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBheGlvcztcblxuLy8gQWxsb3cgdXNlIG9mIGRlZmF1bHQgaW1wb3J0IHN5bnRheCBpbiBUeXBlU2NyaXB0XG5tb2R1bGUuZXhwb3J0cy5kZWZhdWx0ID0gYXhpb3M7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9heGlvcy9saWIvYXhpb3MuanNcbi8vIG1vZHVsZSBpZCA9IC4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9heGlvcy5qc1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG5cbi8qKlxuICogQSBgQ2FuY2VsYCBpcyBhbiBvYmplY3QgdGhhdCBpcyB0aHJvd24gd2hlbiBhbiBvcGVyYXRpb24gaXMgY2FuY2VsZWQuXG4gKlxuICogQGNsYXNzXG4gKiBAcGFyYW0ge3N0cmluZz19IG1lc3NhZ2UgVGhlIG1lc3NhZ2UuXG4gKi9cbmZ1bmN0aW9uIENhbmNlbChtZXNzYWdlKSB7XG4gIHRoaXMubWVzc2FnZSA9IG1lc3NhZ2U7XG59XG5cbkNhbmNlbC5wcm90b3R5cGUudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgcmV0dXJuICdDYW5jZWwnICsgKHRoaXMubWVzc2FnZSA/ICc6ICcgKyB0aGlzLm1lc3NhZ2UgOiAnJyk7XG59O1xuXG5DYW5jZWwucHJvdG90eXBlLl9fQ0FOQ0VMX18gPSB0cnVlO1xuXG5tb2R1bGUuZXhwb3J0cyA9IENhbmNlbDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jYW5jZWwvQ2FuY2VsLmpzXG4vLyBtb2R1bGUgaWQgPSAuL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY2FuY2VsL0NhbmNlbC5qc1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG5cbnZhciBDYW5jZWwgPSByZXF1aXJlKCcuL0NhbmNlbCcpO1xuXG4vKipcbiAqIEEgYENhbmNlbFRva2VuYCBpcyBhbiBvYmplY3QgdGhhdCBjYW4gYmUgdXNlZCB0byByZXF1ZXN0IGNhbmNlbGxhdGlvbiBvZiBhbiBvcGVyYXRpb24uXG4gKlxuICogQGNsYXNzXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBleGVjdXRvciBUaGUgZXhlY3V0b3IgZnVuY3Rpb24uXG4gKi9cbmZ1bmN0aW9uIENhbmNlbFRva2VuKGV4ZWN1dG9yKSB7XG4gIGlmICh0eXBlb2YgZXhlY3V0b3IgIT09ICdmdW5jdGlvbicpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdleGVjdXRvciBtdXN0IGJlIGEgZnVuY3Rpb24uJyk7XG4gIH1cblxuICB2YXIgcmVzb2x2ZVByb21pc2U7XG4gIHRoaXMucHJvbWlzZSA9IG5ldyBQcm9taXNlKGZ1bmN0aW9uIHByb21pc2VFeGVjdXRvcihyZXNvbHZlKSB7XG4gICAgcmVzb2x2ZVByb21pc2UgPSByZXNvbHZlO1xuICB9KTtcblxuICB2YXIgdG9rZW4gPSB0aGlzO1xuICBleGVjdXRvcihmdW5jdGlvbiBjYW5jZWwobWVzc2FnZSkge1xuICAgIGlmICh0b2tlbi5yZWFzb24pIHtcbiAgICAgIC8vIENhbmNlbGxhdGlvbiBoYXMgYWxyZWFkeSBiZWVuIHJlcXVlc3RlZFxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRva2VuLnJlYXNvbiA9IG5ldyBDYW5jZWwobWVzc2FnZSk7XG4gICAgcmVzb2x2ZVByb21pc2UodG9rZW4ucmVhc29uKTtcbiAgfSk7XG59XG5cbi8qKlxuICogVGhyb3dzIGEgYENhbmNlbGAgaWYgY2FuY2VsbGF0aW9uIGhhcyBiZWVuIHJlcXVlc3RlZC5cbiAqL1xuQ2FuY2VsVG9rZW4ucHJvdG90eXBlLnRocm93SWZSZXF1ZXN0ZWQgPSBmdW5jdGlvbiB0aHJvd0lmUmVxdWVzdGVkKCkge1xuICBpZiAodGhpcy5yZWFzb24pIHtcbiAgICB0aHJvdyB0aGlzLnJlYXNvbjtcbiAgfVxufTtcblxuLyoqXG4gKiBSZXR1cm5zIGFuIG9iamVjdCB0aGF0IGNvbnRhaW5zIGEgbmV3IGBDYW5jZWxUb2tlbmAgYW5kIGEgZnVuY3Rpb24gdGhhdCwgd2hlbiBjYWxsZWQsXG4gKiBjYW5jZWxzIHRoZSBgQ2FuY2VsVG9rZW5gLlxuICovXG5DYW5jZWxUb2tlbi5zb3VyY2UgPSBmdW5jdGlvbiBzb3VyY2UoKSB7XG4gIHZhciBjYW5jZWw7XG4gIHZhciB0b2tlbiA9IG5ldyBDYW5jZWxUb2tlbihmdW5jdGlvbiBleGVjdXRvcihjKSB7XG4gICAgY2FuY2VsID0gYztcbiAgfSk7XG4gIHJldHVybiB7XG4gICAgdG9rZW46IHRva2VuLFxuICAgIGNhbmNlbDogY2FuY2VsXG4gIH07XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IENhbmNlbFRva2VuO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NhbmNlbC9DYW5jZWxUb2tlbi5qc1xuLy8gbW9kdWxlIGlkID0gLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NhbmNlbC9DYW5jZWxUb2tlbi5qc1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gaXNDYW5jZWwodmFsdWUpIHtcbiAgcmV0dXJuICEhKHZhbHVlICYmIHZhbHVlLl9fQ0FOQ0VMX18pO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jYW5jZWwvaXNDYW5jZWwuanNcbi8vIG1vZHVsZSBpZCA9IC4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jYW5jZWwvaXNDYW5jZWwuanNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgZGVmYXVsdHMgPSByZXF1aXJlKCcuLy4uL2RlZmF1bHRzJyk7XG52YXIgdXRpbHMgPSByZXF1aXJlKCcuLy4uL3V0aWxzJyk7XG52YXIgSW50ZXJjZXB0b3JNYW5hZ2VyID0gcmVxdWlyZSgnLi9JbnRlcmNlcHRvck1hbmFnZXInKTtcbnZhciBkaXNwYXRjaFJlcXVlc3QgPSByZXF1aXJlKCcuL2Rpc3BhdGNoUmVxdWVzdCcpO1xuXG4vKipcbiAqIENyZWF0ZSBhIG5ldyBpbnN0YW5jZSBvZiBBeGlvc1xuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBpbnN0YW5jZUNvbmZpZyBUaGUgZGVmYXVsdCBjb25maWcgZm9yIHRoZSBpbnN0YW5jZVxuICovXG5mdW5jdGlvbiBBeGlvcyhpbnN0YW5jZUNvbmZpZykge1xuICB0aGlzLmRlZmF1bHRzID0gaW5zdGFuY2VDb25maWc7XG4gIHRoaXMuaW50ZXJjZXB0b3JzID0ge1xuICAgIHJlcXVlc3Q6IG5ldyBJbnRlcmNlcHRvck1hbmFnZXIoKSxcbiAgICByZXNwb25zZTogbmV3IEludGVyY2VwdG9yTWFuYWdlcigpXG4gIH07XG59XG5cbi8qKlxuICogRGlzcGF0Y2ggYSByZXF1ZXN0XG4gKlxuICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZyBUaGUgY29uZmlnIHNwZWNpZmljIGZvciB0aGlzIHJlcXVlc3QgKG1lcmdlZCB3aXRoIHRoaXMuZGVmYXVsdHMpXG4gKi9cbkF4aW9zLnByb3RvdHlwZS5yZXF1ZXN0ID0gZnVuY3Rpb24gcmVxdWVzdChjb25maWcpIHtcbiAgLyplc2xpbnQgbm8tcGFyYW0tcmVhc3NpZ246MCovXG4gIC8vIEFsbG93IGZvciBheGlvcygnZXhhbXBsZS91cmwnWywgY29uZmlnXSkgYSBsYSBmZXRjaCBBUElcbiAgaWYgKHR5cGVvZiBjb25maWcgPT09ICdzdHJpbmcnKSB7XG4gICAgY29uZmlnID0gdXRpbHMubWVyZ2Uoe1xuICAgICAgdXJsOiBhcmd1bWVudHNbMF1cbiAgICB9LCBhcmd1bWVudHNbMV0pO1xuICB9XG5cbiAgY29uZmlnID0gdXRpbHMubWVyZ2UoZGVmYXVsdHMsIHRoaXMuZGVmYXVsdHMsIHsgbWV0aG9kOiAnZ2V0JyB9LCBjb25maWcpO1xuICBjb25maWcubWV0aG9kID0gY29uZmlnLm1ldGhvZC50b0xvd2VyQ2FzZSgpO1xuXG4gIC8vIEhvb2sgdXAgaW50ZXJjZXB0b3JzIG1pZGRsZXdhcmVcbiAgdmFyIGNoYWluID0gW2Rpc3BhdGNoUmVxdWVzdCwgdW5kZWZpbmVkXTtcbiAgdmFyIHByb21pc2UgPSBQcm9taXNlLnJlc29sdmUoY29uZmlnKTtcblxuICB0aGlzLmludGVyY2VwdG9ycy5yZXF1ZXN0LmZvckVhY2goZnVuY3Rpb24gdW5zaGlmdFJlcXVlc3RJbnRlcmNlcHRvcnMoaW50ZXJjZXB0b3IpIHtcbiAgICBjaGFpbi51bnNoaWZ0KGludGVyY2VwdG9yLmZ1bGZpbGxlZCwgaW50ZXJjZXB0b3IucmVqZWN0ZWQpO1xuICB9KTtcblxuICB0aGlzLmludGVyY2VwdG9ycy5yZXNwb25zZS5mb3JFYWNoKGZ1bmN0aW9uIHB1c2hSZXNwb25zZUludGVyY2VwdG9ycyhpbnRlcmNlcHRvcikge1xuICAgIGNoYWluLnB1c2goaW50ZXJjZXB0b3IuZnVsZmlsbGVkLCBpbnRlcmNlcHRvci5yZWplY3RlZCk7XG4gIH0pO1xuXG4gIHdoaWxlIChjaGFpbi5sZW5ndGgpIHtcbiAgICBwcm9taXNlID0gcHJvbWlzZS50aGVuKGNoYWluLnNoaWZ0KCksIGNoYWluLnNoaWZ0KCkpO1xuICB9XG5cbiAgcmV0dXJuIHByb21pc2U7XG59O1xuXG4vLyBQcm92aWRlIGFsaWFzZXMgZm9yIHN1cHBvcnRlZCByZXF1ZXN0IG1ldGhvZHNcbnV0aWxzLmZvckVhY2goWydkZWxldGUnLCAnZ2V0JywgJ2hlYWQnLCAnb3B0aW9ucyddLCBmdW5jdGlvbiBmb3JFYWNoTWV0aG9kTm9EYXRhKG1ldGhvZCkge1xuICAvKmVzbGludCBmdW5jLW5hbWVzOjAqL1xuICBBeGlvcy5wcm90b3R5cGVbbWV0aG9kXSA9IGZ1bmN0aW9uKHVybCwgY29uZmlnKSB7XG4gICAgcmV0dXJuIHRoaXMucmVxdWVzdCh1dGlscy5tZXJnZShjb25maWcgfHwge30sIHtcbiAgICAgIG1ldGhvZDogbWV0aG9kLFxuICAgICAgdXJsOiB1cmxcbiAgICB9KSk7XG4gIH07XG59KTtcblxudXRpbHMuZm9yRWFjaChbJ3Bvc3QnLCAncHV0JywgJ3BhdGNoJ10sIGZ1bmN0aW9uIGZvckVhY2hNZXRob2RXaXRoRGF0YShtZXRob2QpIHtcbiAgLyplc2xpbnQgZnVuYy1uYW1lczowKi9cbiAgQXhpb3MucHJvdG90eXBlW21ldGhvZF0gPSBmdW5jdGlvbih1cmwsIGRhdGEsIGNvbmZpZykge1xuICAgIHJldHVybiB0aGlzLnJlcXVlc3QodXRpbHMubWVyZ2UoY29uZmlnIHx8IHt9LCB7XG4gICAgICBtZXRob2Q6IG1ldGhvZCxcbiAgICAgIHVybDogdXJsLFxuICAgICAgZGF0YTogZGF0YVxuICAgIH0pKTtcbiAgfTtcbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IEF4aW9zO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NvcmUvQXhpb3MuanNcbi8vIG1vZHVsZSBpZCA9IC4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jb3JlL0F4aW9zLmpzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcblxudmFyIHV0aWxzID0gcmVxdWlyZSgnLi8uLi91dGlscycpO1xuXG5mdW5jdGlvbiBJbnRlcmNlcHRvck1hbmFnZXIoKSB7XG4gIHRoaXMuaGFuZGxlcnMgPSBbXTtcbn1cblxuLyoqXG4gKiBBZGQgYSBuZXcgaW50ZXJjZXB0b3IgdG8gdGhlIHN0YWNrXG4gKlxuICogQHBhcmFtIHtGdW5jdGlvbn0gZnVsZmlsbGVkIFRoZSBmdW5jdGlvbiB0byBoYW5kbGUgYHRoZW5gIGZvciBhIGBQcm9taXNlYFxuICogQHBhcmFtIHtGdW5jdGlvbn0gcmVqZWN0ZWQgVGhlIGZ1bmN0aW9uIHRvIGhhbmRsZSBgcmVqZWN0YCBmb3IgYSBgUHJvbWlzZWBcbiAqXG4gKiBAcmV0dXJuIHtOdW1iZXJ9IEFuIElEIHVzZWQgdG8gcmVtb3ZlIGludGVyY2VwdG9yIGxhdGVyXG4gKi9cbkludGVyY2VwdG9yTWFuYWdlci5wcm90b3R5cGUudXNlID0gZnVuY3Rpb24gdXNlKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpIHtcbiAgdGhpcy5oYW5kbGVycy5wdXNoKHtcbiAgICBmdWxmaWxsZWQ6IGZ1bGZpbGxlZCxcbiAgICByZWplY3RlZDogcmVqZWN0ZWRcbiAgfSk7XG4gIHJldHVybiB0aGlzLmhhbmRsZXJzLmxlbmd0aCAtIDE7XG59O1xuXG4vKipcbiAqIFJlbW92ZSBhbiBpbnRlcmNlcHRvciBmcm9tIHRoZSBzdGFja1xuICpcbiAqIEBwYXJhbSB7TnVtYmVyfSBpZCBUaGUgSUQgdGhhdCB3YXMgcmV0dXJuZWQgYnkgYHVzZWBcbiAqL1xuSW50ZXJjZXB0b3JNYW5hZ2VyLnByb3RvdHlwZS5lamVjdCA9IGZ1bmN0aW9uIGVqZWN0KGlkKSB7XG4gIGlmICh0aGlzLmhhbmRsZXJzW2lkXSkge1xuICAgIHRoaXMuaGFuZGxlcnNbaWRdID0gbnVsbDtcbiAgfVxufTtcblxuLyoqXG4gKiBJdGVyYXRlIG92ZXIgYWxsIHRoZSByZWdpc3RlcmVkIGludGVyY2VwdG9yc1xuICpcbiAqIFRoaXMgbWV0aG9kIGlzIHBhcnRpY3VsYXJseSB1c2VmdWwgZm9yIHNraXBwaW5nIG92ZXIgYW55XG4gKiBpbnRlcmNlcHRvcnMgdGhhdCBtYXkgaGF2ZSBiZWNvbWUgYG51bGxgIGNhbGxpbmcgYGVqZWN0YC5cbiAqXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmbiBUaGUgZnVuY3Rpb24gdG8gY2FsbCBmb3IgZWFjaCBpbnRlcmNlcHRvclxuICovXG5JbnRlcmNlcHRvck1hbmFnZXIucHJvdG90eXBlLmZvckVhY2ggPSBmdW5jdGlvbiBmb3JFYWNoKGZuKSB7XG4gIHV0aWxzLmZvckVhY2godGhpcy5oYW5kbGVycywgZnVuY3Rpb24gZm9yRWFjaEhhbmRsZXIoaCkge1xuICAgIGlmIChoICE9PSBudWxsKSB7XG4gICAgICBmbihoKTtcbiAgICB9XG4gIH0pO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBJbnRlcmNlcHRvck1hbmFnZXI7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY29yZS9JbnRlcmNlcHRvck1hbmFnZXIuanNcbi8vIG1vZHVsZSBpZCA9IC4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jb3JlL0ludGVyY2VwdG9yTWFuYWdlci5qc1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG5cbnZhciBlbmhhbmNlRXJyb3IgPSByZXF1aXJlKCcuL2VuaGFuY2VFcnJvcicpO1xuXG4vKipcbiAqIENyZWF0ZSBhbiBFcnJvciB3aXRoIHRoZSBzcGVjaWZpZWQgbWVzc2FnZSwgY29uZmlnLCBlcnJvciBjb2RlLCByZXF1ZXN0IGFuZCByZXNwb25zZS5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gbWVzc2FnZSBUaGUgZXJyb3IgbWVzc2FnZS5cbiAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWcgVGhlIGNvbmZpZy5cbiAqIEBwYXJhbSB7c3RyaW5nfSBbY29kZV0gVGhlIGVycm9yIGNvZGUgKGZvciBleGFtcGxlLCAnRUNPTk5BQk9SVEVEJykuXG4gKiBAcGFyYW0ge09iamVjdH0gW3JlcXVlc3RdIFRoZSByZXF1ZXN0LlxuICogQHBhcmFtIHtPYmplY3R9IFtyZXNwb25zZV0gVGhlIHJlc3BvbnNlLlxuICogQHJldHVybnMge0Vycm9yfSBUaGUgY3JlYXRlZCBlcnJvci5cbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBjcmVhdGVFcnJvcihtZXNzYWdlLCBjb25maWcsIGNvZGUsIHJlcXVlc3QsIHJlc3BvbnNlKSB7XG4gIHZhciBlcnJvciA9IG5ldyBFcnJvcihtZXNzYWdlKTtcbiAgcmV0dXJuIGVuaGFuY2VFcnJvcihlcnJvciwgY29uZmlnLCBjb2RlLCByZXF1ZXN0LCByZXNwb25zZSk7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NvcmUvY3JlYXRlRXJyb3IuanNcbi8vIG1vZHVsZSBpZCA9IC4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jb3JlL2NyZWF0ZUVycm9yLmpzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcblxudmFyIHV0aWxzID0gcmVxdWlyZSgnLi8uLi91dGlscycpO1xudmFyIHRyYW5zZm9ybURhdGEgPSByZXF1aXJlKCcuL3RyYW5zZm9ybURhdGEnKTtcbnZhciBpc0NhbmNlbCA9IHJlcXVpcmUoJy4uL2NhbmNlbC9pc0NhbmNlbCcpO1xudmFyIGRlZmF1bHRzID0gcmVxdWlyZSgnLi4vZGVmYXVsdHMnKTtcbnZhciBpc0Fic29sdXRlVVJMID0gcmVxdWlyZSgnLi8uLi9oZWxwZXJzL2lzQWJzb2x1dGVVUkwnKTtcbnZhciBjb21iaW5lVVJMcyA9IHJlcXVpcmUoJy4vLi4vaGVscGVycy9jb21iaW5lVVJMcycpO1xuXG4vKipcbiAqIFRocm93cyBhIGBDYW5jZWxgIGlmIGNhbmNlbGxhdGlvbiBoYXMgYmVlbiByZXF1ZXN0ZWQuXG4gKi9cbmZ1bmN0aW9uIHRocm93SWZDYW5jZWxsYXRpb25SZXF1ZXN0ZWQoY29uZmlnKSB7XG4gIGlmIChjb25maWcuY2FuY2VsVG9rZW4pIHtcbiAgICBjb25maWcuY2FuY2VsVG9rZW4udGhyb3dJZlJlcXVlc3RlZCgpO1xuICB9XG59XG5cbi8qKlxuICogRGlzcGF0Y2ggYSByZXF1ZXN0IHRvIHRoZSBzZXJ2ZXIgdXNpbmcgdGhlIGNvbmZpZ3VyZWQgYWRhcHRlci5cbiAqXG4gKiBAcGFyYW0ge29iamVjdH0gY29uZmlnIFRoZSBjb25maWcgdGhhdCBpcyB0byBiZSB1c2VkIGZvciB0aGUgcmVxdWVzdFxuICogQHJldHVybnMge1Byb21pc2V9IFRoZSBQcm9taXNlIHRvIGJlIGZ1bGZpbGxlZFxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGRpc3BhdGNoUmVxdWVzdChjb25maWcpIHtcbiAgdGhyb3dJZkNhbmNlbGxhdGlvblJlcXVlc3RlZChjb25maWcpO1xuXG4gIC8vIFN1cHBvcnQgYmFzZVVSTCBjb25maWdcbiAgaWYgKGNvbmZpZy5iYXNlVVJMICYmICFpc0Fic29sdXRlVVJMKGNvbmZpZy51cmwpKSB7XG4gICAgY29uZmlnLnVybCA9IGNvbWJpbmVVUkxzKGNvbmZpZy5iYXNlVVJMLCBjb25maWcudXJsKTtcbiAgfVxuXG4gIC8vIEVuc3VyZSBoZWFkZXJzIGV4aXN0XG4gIGNvbmZpZy5oZWFkZXJzID0gY29uZmlnLmhlYWRlcnMgfHwge307XG5cbiAgLy8gVHJhbnNmb3JtIHJlcXVlc3QgZGF0YVxuICBjb25maWcuZGF0YSA9IHRyYW5zZm9ybURhdGEoXG4gICAgY29uZmlnLmRhdGEsXG4gICAgY29uZmlnLmhlYWRlcnMsXG4gICAgY29uZmlnLnRyYW5zZm9ybVJlcXVlc3RcbiAgKTtcblxuICAvLyBGbGF0dGVuIGhlYWRlcnNcbiAgY29uZmlnLmhlYWRlcnMgPSB1dGlscy5tZXJnZShcbiAgICBjb25maWcuaGVhZGVycy5jb21tb24gfHwge30sXG4gICAgY29uZmlnLmhlYWRlcnNbY29uZmlnLm1ldGhvZF0gfHwge30sXG4gICAgY29uZmlnLmhlYWRlcnMgfHwge31cbiAgKTtcblxuICB1dGlscy5mb3JFYWNoKFxuICAgIFsnZGVsZXRlJywgJ2dldCcsICdoZWFkJywgJ3Bvc3QnLCAncHV0JywgJ3BhdGNoJywgJ2NvbW1vbiddLFxuICAgIGZ1bmN0aW9uIGNsZWFuSGVhZGVyQ29uZmlnKG1ldGhvZCkge1xuICAgICAgZGVsZXRlIGNvbmZpZy5oZWFkZXJzW21ldGhvZF07XG4gICAgfVxuICApO1xuXG4gIHZhciBhZGFwdGVyID0gY29uZmlnLmFkYXB0ZXIgfHwgZGVmYXVsdHMuYWRhcHRlcjtcblxuICByZXR1cm4gYWRhcHRlcihjb25maWcpLnRoZW4oZnVuY3Rpb24gb25BZGFwdGVyUmVzb2x1dGlvbihyZXNwb25zZSkge1xuICAgIHRocm93SWZDYW5jZWxsYXRpb25SZXF1ZXN0ZWQoY29uZmlnKTtcblxuICAgIC8vIFRyYW5zZm9ybSByZXNwb25zZSBkYXRhXG4gICAgcmVzcG9uc2UuZGF0YSA9IHRyYW5zZm9ybURhdGEoXG4gICAgICByZXNwb25zZS5kYXRhLFxuICAgICAgcmVzcG9uc2UuaGVhZGVycyxcbiAgICAgIGNvbmZpZy50cmFuc2Zvcm1SZXNwb25zZVxuICAgICk7XG5cbiAgICByZXR1cm4gcmVzcG9uc2U7XG4gIH0sIGZ1bmN0aW9uIG9uQWRhcHRlclJlamVjdGlvbihyZWFzb24pIHtcbiAgICBpZiAoIWlzQ2FuY2VsKHJlYXNvbikpIHtcbiAgICAgIHRocm93SWZDYW5jZWxsYXRpb25SZXF1ZXN0ZWQoY29uZmlnKTtcblxuICAgICAgLy8gVHJhbnNmb3JtIHJlc3BvbnNlIGRhdGFcbiAgICAgIGlmIChyZWFzb24gJiYgcmVhc29uLnJlc3BvbnNlKSB7XG4gICAgICAgIHJlYXNvbi5yZXNwb25zZS5kYXRhID0gdHJhbnNmb3JtRGF0YShcbiAgICAgICAgICByZWFzb24ucmVzcG9uc2UuZGF0YSxcbiAgICAgICAgICByZWFzb24ucmVzcG9uc2UuaGVhZGVycyxcbiAgICAgICAgICBjb25maWcudHJhbnNmb3JtUmVzcG9uc2VcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QocmVhc29uKTtcbiAgfSk7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NvcmUvZGlzcGF0Y2hSZXF1ZXN0LmpzXG4vLyBtb2R1bGUgaWQgPSAuL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY29yZS9kaXNwYXRjaFJlcXVlc3QuanNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuXG4vKipcbiAqIFVwZGF0ZSBhbiBFcnJvciB3aXRoIHRoZSBzcGVjaWZpZWQgY29uZmlnLCBlcnJvciBjb2RlLCBhbmQgcmVzcG9uc2UuXG4gKlxuICogQHBhcmFtIHtFcnJvcn0gZXJyb3IgVGhlIGVycm9yIHRvIHVwZGF0ZS5cbiAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWcgVGhlIGNvbmZpZy5cbiAqIEBwYXJhbSB7c3RyaW5nfSBbY29kZV0gVGhlIGVycm9yIGNvZGUgKGZvciBleGFtcGxlLCAnRUNPTk5BQk9SVEVEJykuXG4gKiBAcGFyYW0ge09iamVjdH0gW3JlcXVlc3RdIFRoZSByZXF1ZXN0LlxuICogQHBhcmFtIHtPYmplY3R9IFtyZXNwb25zZV0gVGhlIHJlc3BvbnNlLlxuICogQHJldHVybnMge0Vycm9yfSBUaGUgZXJyb3IuXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gZW5oYW5jZUVycm9yKGVycm9yLCBjb25maWcsIGNvZGUsIHJlcXVlc3QsIHJlc3BvbnNlKSB7XG4gIGVycm9yLmNvbmZpZyA9IGNvbmZpZztcbiAgaWYgKGNvZGUpIHtcbiAgICBlcnJvci5jb2RlID0gY29kZTtcbiAgfVxuICBlcnJvci5yZXF1ZXN0ID0gcmVxdWVzdDtcbiAgZXJyb3IucmVzcG9uc2UgPSByZXNwb25zZTtcbiAgcmV0dXJuIGVycm9yO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jb3JlL2VuaGFuY2VFcnJvci5qc1xuLy8gbW9kdWxlIGlkID0gLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NvcmUvZW5oYW5jZUVycm9yLmpzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcblxudmFyIGNyZWF0ZUVycm9yID0gcmVxdWlyZSgnLi9jcmVhdGVFcnJvcicpO1xuXG4vKipcbiAqIFJlc29sdmUgb3IgcmVqZWN0IGEgUHJvbWlzZSBiYXNlZCBvbiByZXNwb25zZSBzdGF0dXMuXG4gKlxuICogQHBhcmFtIHtGdW5jdGlvbn0gcmVzb2x2ZSBBIGZ1bmN0aW9uIHRoYXQgcmVzb2x2ZXMgdGhlIHByb21pc2UuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSByZWplY3QgQSBmdW5jdGlvbiB0aGF0IHJlamVjdHMgdGhlIHByb21pc2UuXG4gKiBAcGFyYW0ge29iamVjdH0gcmVzcG9uc2UgVGhlIHJlc3BvbnNlLlxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIHNldHRsZShyZXNvbHZlLCByZWplY3QsIHJlc3BvbnNlKSB7XG4gIHZhciB2YWxpZGF0ZVN0YXR1cyA9IHJlc3BvbnNlLmNvbmZpZy52YWxpZGF0ZVN0YXR1cztcbiAgLy8gTm90ZTogc3RhdHVzIGlzIG5vdCBleHBvc2VkIGJ5IFhEb21haW5SZXF1ZXN0XG4gIGlmICghcmVzcG9uc2Uuc3RhdHVzIHx8ICF2YWxpZGF0ZVN0YXR1cyB8fCB2YWxpZGF0ZVN0YXR1cyhyZXNwb25zZS5zdGF0dXMpKSB7XG4gICAgcmVzb2x2ZShyZXNwb25zZSk7XG4gIH0gZWxzZSB7XG4gICAgcmVqZWN0KGNyZWF0ZUVycm9yKFxuICAgICAgJ1JlcXVlc3QgZmFpbGVkIHdpdGggc3RhdHVzIGNvZGUgJyArIHJlc3BvbnNlLnN0YXR1cyxcbiAgICAgIHJlc3BvbnNlLmNvbmZpZyxcbiAgICAgIG51bGwsXG4gICAgICByZXNwb25zZS5yZXF1ZXN0LFxuICAgICAgcmVzcG9uc2VcbiAgICApKTtcbiAgfVxufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jb3JlL3NldHRsZS5qc1xuLy8gbW9kdWxlIGlkID0gLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NvcmUvc2V0dGxlLmpzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcblxudmFyIHV0aWxzID0gcmVxdWlyZSgnLi8uLi91dGlscycpO1xuXG4vKipcbiAqIFRyYW5zZm9ybSB0aGUgZGF0YSBmb3IgYSByZXF1ZXN0IG9yIGEgcmVzcG9uc2VcbiAqXG4gKiBAcGFyYW0ge09iamVjdHxTdHJpbmd9IGRhdGEgVGhlIGRhdGEgdG8gYmUgdHJhbnNmb3JtZWRcbiAqIEBwYXJhbSB7QXJyYXl9IGhlYWRlcnMgVGhlIGhlYWRlcnMgZm9yIHRoZSByZXF1ZXN0IG9yIHJlc3BvbnNlXG4gKiBAcGFyYW0ge0FycmF5fEZ1bmN0aW9ufSBmbnMgQSBzaW5nbGUgZnVuY3Rpb24gb3IgQXJyYXkgb2YgZnVuY3Rpb25zXG4gKiBAcmV0dXJucyB7Kn0gVGhlIHJlc3VsdGluZyB0cmFuc2Zvcm1lZCBkYXRhXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gdHJhbnNmb3JtRGF0YShkYXRhLCBoZWFkZXJzLCBmbnMpIHtcbiAgLyplc2xpbnQgbm8tcGFyYW0tcmVhc3NpZ246MCovXG4gIHV0aWxzLmZvckVhY2goZm5zLCBmdW5jdGlvbiB0cmFuc2Zvcm0oZm4pIHtcbiAgICBkYXRhID0gZm4oZGF0YSwgaGVhZGVycyk7XG4gIH0pO1xuXG4gIHJldHVybiBkYXRhO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jb3JlL3RyYW5zZm9ybURhdGEuanNcbi8vIG1vZHVsZSBpZCA9IC4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jb3JlL3RyYW5zZm9ybURhdGEuanNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuL3V0aWxzJyk7XG52YXIgbm9ybWFsaXplSGVhZGVyTmFtZSA9IHJlcXVpcmUoJy4vaGVscGVycy9ub3JtYWxpemVIZWFkZXJOYW1lJyk7XG5cbnZhciBERUZBVUxUX0NPTlRFTlRfVFlQRSA9IHtcbiAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnXG59O1xuXG5mdW5jdGlvbiBzZXRDb250ZW50VHlwZUlmVW5zZXQoaGVhZGVycywgdmFsdWUpIHtcbiAgaWYgKCF1dGlscy5pc1VuZGVmaW5lZChoZWFkZXJzKSAmJiB1dGlscy5pc1VuZGVmaW5lZChoZWFkZXJzWydDb250ZW50LVR5cGUnXSkpIHtcbiAgICBoZWFkZXJzWydDb250ZW50LVR5cGUnXSA9IHZhbHVlO1xuICB9XG59XG5cbmZ1bmN0aW9uIGdldERlZmF1bHRBZGFwdGVyKCkge1xuICB2YXIgYWRhcHRlcjtcbiAgaWYgKHR5cGVvZiBYTUxIdHRwUmVxdWVzdCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAvLyBGb3IgYnJvd3NlcnMgdXNlIFhIUiBhZGFwdGVyXG4gICAgYWRhcHRlciA9IHJlcXVpcmUoJy4vYWRhcHRlcnMveGhyJyk7XG4gIH0gZWxzZSBpZiAodHlwZW9mIHByb2Nlc3MgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgLy8gRm9yIG5vZGUgdXNlIEhUVFAgYWRhcHRlclxuICAgIGFkYXB0ZXIgPSByZXF1aXJlKCcuL2FkYXB0ZXJzL2h0dHAnKTtcbiAgfVxuICByZXR1cm4gYWRhcHRlcjtcbn1cblxudmFyIGRlZmF1bHRzID0ge1xuICBhZGFwdGVyOiBnZXREZWZhdWx0QWRhcHRlcigpLFxuXG4gIHRyYW5zZm9ybVJlcXVlc3Q6IFtmdW5jdGlvbiB0cmFuc2Zvcm1SZXF1ZXN0KGRhdGEsIGhlYWRlcnMpIHtcbiAgICBub3JtYWxpemVIZWFkZXJOYW1lKGhlYWRlcnMsICdDb250ZW50LVR5cGUnKTtcbiAgICBpZiAodXRpbHMuaXNGb3JtRGF0YShkYXRhKSB8fFxuICAgICAgdXRpbHMuaXNBcnJheUJ1ZmZlcihkYXRhKSB8fFxuICAgICAgdXRpbHMuaXNCdWZmZXIoZGF0YSkgfHxcbiAgICAgIHV0aWxzLmlzU3RyZWFtKGRhdGEpIHx8XG4gICAgICB1dGlscy5pc0ZpbGUoZGF0YSkgfHxcbiAgICAgIHV0aWxzLmlzQmxvYihkYXRhKVxuICAgICkge1xuICAgICAgcmV0dXJuIGRhdGE7XG4gICAgfVxuICAgIGlmICh1dGlscy5pc0FycmF5QnVmZmVyVmlldyhkYXRhKSkge1xuICAgICAgcmV0dXJuIGRhdGEuYnVmZmVyO1xuICAgIH1cbiAgICBpZiAodXRpbHMuaXNVUkxTZWFyY2hQYXJhbXMoZGF0YSkpIHtcbiAgICAgIHNldENvbnRlbnRUeXBlSWZVbnNldChoZWFkZXJzLCAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkO2NoYXJzZXQ9dXRmLTgnKTtcbiAgICAgIHJldHVybiBkYXRhLnRvU3RyaW5nKCk7XG4gICAgfVxuICAgIGlmICh1dGlscy5pc09iamVjdChkYXRhKSkge1xuICAgICAgc2V0Q29udGVudFR5cGVJZlVuc2V0KGhlYWRlcnMsICdhcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTgnKTtcbiAgICAgIHJldHVybiBKU09OLnN0cmluZ2lmeShkYXRhKTtcbiAgICB9XG4gICAgcmV0dXJuIGRhdGE7XG4gIH1dLFxuXG4gIHRyYW5zZm9ybVJlc3BvbnNlOiBbZnVuY3Rpb24gdHJhbnNmb3JtUmVzcG9uc2UoZGF0YSkge1xuICAgIC8qZXNsaW50IG5vLXBhcmFtLXJlYXNzaWduOjAqL1xuICAgIGlmICh0eXBlb2YgZGF0YSA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGRhdGEgPSBKU09OLnBhcnNlKGRhdGEpO1xuICAgICAgfSBjYXRjaCAoZSkgeyAvKiBJZ25vcmUgKi8gfVxuICAgIH1cbiAgICByZXR1cm4gZGF0YTtcbiAgfV0sXG5cbiAgdGltZW91dDogMCxcblxuICB4c3JmQ29va2llTmFtZTogJ1hTUkYtVE9LRU4nLFxuICB4c3JmSGVhZGVyTmFtZTogJ1gtWFNSRi1UT0tFTicsXG5cbiAgbWF4Q29udGVudExlbmd0aDogLTEsXG5cbiAgdmFsaWRhdGVTdGF0dXM6IGZ1bmN0aW9uIHZhbGlkYXRlU3RhdHVzKHN0YXR1cykge1xuICAgIHJldHVybiBzdGF0dXMgPj0gMjAwICYmIHN0YXR1cyA8IDMwMDtcbiAgfVxufTtcblxuZGVmYXVsdHMuaGVhZGVycyA9IHtcbiAgY29tbW9uOiB7XG4gICAgJ0FjY2VwdCc6ICdhcHBsaWNhdGlvbi9qc29uLCB0ZXh0L3BsYWluLCAqLyonXG4gIH1cbn07XG5cbnV0aWxzLmZvckVhY2goWydkZWxldGUnLCAnZ2V0JywgJ2hlYWQnXSwgZnVuY3Rpb24gZm9yRWFjaE1ldGhvZE5vRGF0YShtZXRob2QpIHtcbiAgZGVmYXVsdHMuaGVhZGVyc1ttZXRob2RdID0ge307XG59KTtcblxudXRpbHMuZm9yRWFjaChbJ3Bvc3QnLCAncHV0JywgJ3BhdGNoJ10sIGZ1bmN0aW9uIGZvckVhY2hNZXRob2RXaXRoRGF0YShtZXRob2QpIHtcbiAgZGVmYXVsdHMuaGVhZGVyc1ttZXRob2RdID0gdXRpbHMubWVyZ2UoREVGQVVMVF9DT05URU5UX1RZUEUpO1xufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gZGVmYXVsdHM7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9heGlvcy9saWIvZGVmYXVsdHMuanNcbi8vIG1vZHVsZSBpZCA9IC4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9kZWZhdWx0cy5qc1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gYmluZChmbiwgdGhpc0FyZykge1xuICByZXR1cm4gZnVuY3Rpb24gd3JhcCgpIHtcbiAgICB2YXIgYXJncyA9IG5ldyBBcnJheShhcmd1bWVudHMubGVuZ3RoKTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFyZ3MubGVuZ3RoOyBpKyspIHtcbiAgICAgIGFyZ3NbaV0gPSBhcmd1bWVudHNbaV07XG4gICAgfVxuICAgIHJldHVybiBmbi5hcHBseSh0aGlzQXJnLCBhcmdzKTtcbiAgfTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9iaW5kLmpzXG4vLyBtb2R1bGUgaWQgPSAuL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9iaW5kLmpzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcblxuLy8gYnRvYSBwb2x5ZmlsbCBmb3IgSUU8MTAgY291cnRlc3kgaHR0cHM6Ly9naXRodWIuY29tL2RhdmlkY2hhbWJlcnMvQmFzZTY0LmpzXG5cbnZhciBjaGFycyA9ICdBQkNERUZHSElKS0xNTk9QUVJTVFVWV1hZWmFiY2RlZmdoaWprbG1ub3BxcnN0dXZ3eHl6MDEyMzQ1Njc4OSsvPSc7XG5cbmZ1bmN0aW9uIEUoKSB7XG4gIHRoaXMubWVzc2FnZSA9ICdTdHJpbmcgY29udGFpbnMgYW4gaW52YWxpZCBjaGFyYWN0ZXInO1xufVxuRS5wcm90b3R5cGUgPSBuZXcgRXJyb3I7XG5FLnByb3RvdHlwZS5jb2RlID0gNTtcbkUucHJvdG90eXBlLm5hbWUgPSAnSW52YWxpZENoYXJhY3RlckVycm9yJztcblxuZnVuY3Rpb24gYnRvYShpbnB1dCkge1xuICB2YXIgc3RyID0gU3RyaW5nKGlucHV0KTtcbiAgdmFyIG91dHB1dCA9ICcnO1xuICBmb3IgKFxuICAgIC8vIGluaXRpYWxpemUgcmVzdWx0IGFuZCBjb3VudGVyXG4gICAgdmFyIGJsb2NrLCBjaGFyQ29kZSwgaWR4ID0gMCwgbWFwID0gY2hhcnM7XG4gICAgLy8gaWYgdGhlIG5leHQgc3RyIGluZGV4IGRvZXMgbm90IGV4aXN0OlxuICAgIC8vICAgY2hhbmdlIHRoZSBtYXBwaW5nIHRhYmxlIHRvIFwiPVwiXG4gICAgLy8gICBjaGVjayBpZiBkIGhhcyBubyBmcmFjdGlvbmFsIGRpZ2l0c1xuICAgIHN0ci5jaGFyQXQoaWR4IHwgMCkgfHwgKG1hcCA9ICc9JywgaWR4ICUgMSk7XG4gICAgLy8gXCI4IC0gaWR4ICUgMSAqIDhcIiBnZW5lcmF0ZXMgdGhlIHNlcXVlbmNlIDIsIDQsIDYsIDhcbiAgICBvdXRwdXQgKz0gbWFwLmNoYXJBdCg2MyAmIGJsb2NrID4+IDggLSBpZHggJSAxICogOClcbiAgKSB7XG4gICAgY2hhckNvZGUgPSBzdHIuY2hhckNvZGVBdChpZHggKz0gMyAvIDQpO1xuICAgIGlmIChjaGFyQ29kZSA+IDB4RkYpIHtcbiAgICAgIHRocm93IG5ldyBFKCk7XG4gICAgfVxuICAgIGJsb2NrID0gYmxvY2sgPDwgOCB8IGNoYXJDb2RlO1xuICB9XG4gIHJldHVybiBvdXRwdXQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYnRvYTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL2J0b2EuanNcbi8vIG1vZHVsZSBpZCA9IC4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL2J0b2EuanNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuLy4uL3V0aWxzJyk7XG5cbmZ1bmN0aW9uIGVuY29kZSh2YWwpIHtcbiAgcmV0dXJuIGVuY29kZVVSSUNvbXBvbmVudCh2YWwpLlxuICAgIHJlcGxhY2UoLyU0MC9naSwgJ0AnKS5cbiAgICByZXBsYWNlKC8lM0EvZ2ksICc6JykuXG4gICAgcmVwbGFjZSgvJTI0L2csICckJykuXG4gICAgcmVwbGFjZSgvJTJDL2dpLCAnLCcpLlxuICAgIHJlcGxhY2UoLyUyMC9nLCAnKycpLlxuICAgIHJlcGxhY2UoLyU1Qi9naSwgJ1snKS5cbiAgICByZXBsYWNlKC8lNUQvZ2ksICddJyk7XG59XG5cbi8qKlxuICogQnVpbGQgYSBVUkwgYnkgYXBwZW5kaW5nIHBhcmFtcyB0byB0aGUgZW5kXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHVybCBUaGUgYmFzZSBvZiB0aGUgdXJsIChlLmcuLCBodHRwOi8vd3d3Lmdvb2dsZS5jb20pXG4gKiBAcGFyYW0ge29iamVjdH0gW3BhcmFtc10gVGhlIHBhcmFtcyB0byBiZSBhcHBlbmRlZFxuICogQHJldHVybnMge3N0cmluZ30gVGhlIGZvcm1hdHRlZCB1cmxcbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBidWlsZFVSTCh1cmwsIHBhcmFtcywgcGFyYW1zU2VyaWFsaXplcikge1xuICAvKmVzbGludCBuby1wYXJhbS1yZWFzc2lnbjowKi9cbiAgaWYgKCFwYXJhbXMpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG5cbiAgdmFyIHNlcmlhbGl6ZWRQYXJhbXM7XG4gIGlmIChwYXJhbXNTZXJpYWxpemVyKSB7XG4gICAgc2VyaWFsaXplZFBhcmFtcyA9IHBhcmFtc1NlcmlhbGl6ZXIocGFyYW1zKTtcbiAgfSBlbHNlIGlmICh1dGlscy5pc1VSTFNlYXJjaFBhcmFtcyhwYXJhbXMpKSB7XG4gICAgc2VyaWFsaXplZFBhcmFtcyA9IHBhcmFtcy50b1N0cmluZygpO1xuICB9IGVsc2Uge1xuICAgIHZhciBwYXJ0cyA9IFtdO1xuXG4gICAgdXRpbHMuZm9yRWFjaChwYXJhbXMsIGZ1bmN0aW9uIHNlcmlhbGl6ZSh2YWwsIGtleSkge1xuICAgICAgaWYgKHZhbCA9PT0gbnVsbCB8fCB0eXBlb2YgdmFsID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGlmICh1dGlscy5pc0FycmF5KHZhbCkpIHtcbiAgICAgICAga2V5ID0ga2V5ICsgJ1tdJztcbiAgICAgIH1cblxuICAgICAgaWYgKCF1dGlscy5pc0FycmF5KHZhbCkpIHtcbiAgICAgICAgdmFsID0gW3ZhbF07XG4gICAgICB9XG5cbiAgICAgIHV0aWxzLmZvckVhY2godmFsLCBmdW5jdGlvbiBwYXJzZVZhbHVlKHYpIHtcbiAgICAgICAgaWYgKHV0aWxzLmlzRGF0ZSh2KSkge1xuICAgICAgICAgIHYgPSB2LnRvSVNPU3RyaW5nKCk7XG4gICAgICAgIH0gZWxzZSBpZiAodXRpbHMuaXNPYmplY3QodikpIHtcbiAgICAgICAgICB2ID0gSlNPTi5zdHJpbmdpZnkodik7XG4gICAgICAgIH1cbiAgICAgICAgcGFydHMucHVzaChlbmNvZGUoa2V5KSArICc9JyArIGVuY29kZSh2KSk7XG4gICAgICB9KTtcbiAgICB9KTtcblxuICAgIHNlcmlhbGl6ZWRQYXJhbXMgPSBwYXJ0cy5qb2luKCcmJyk7XG4gIH1cblxuICBpZiAoc2VyaWFsaXplZFBhcmFtcykge1xuICAgIHVybCArPSAodXJsLmluZGV4T2YoJz8nKSA9PT0gLTEgPyAnPycgOiAnJicpICsgc2VyaWFsaXplZFBhcmFtcztcbiAgfVxuXG4gIHJldHVybiB1cmw7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvYnVpbGRVUkwuanNcbi8vIG1vZHVsZSBpZCA9IC4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL2J1aWxkVVJMLmpzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcblxuLyoqXG4gKiBDcmVhdGVzIGEgbmV3IFVSTCBieSBjb21iaW5pbmcgdGhlIHNwZWNpZmllZCBVUkxzXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IGJhc2VVUkwgVGhlIGJhc2UgVVJMXG4gKiBAcGFyYW0ge3N0cmluZ30gcmVsYXRpdmVVUkwgVGhlIHJlbGF0aXZlIFVSTFxuICogQHJldHVybnMge3N0cmluZ30gVGhlIGNvbWJpbmVkIFVSTFxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGNvbWJpbmVVUkxzKGJhc2VVUkwsIHJlbGF0aXZlVVJMKSB7XG4gIHJldHVybiByZWxhdGl2ZVVSTFxuICAgID8gYmFzZVVSTC5yZXBsYWNlKC9cXC8rJC8sICcnKSArICcvJyArIHJlbGF0aXZlVVJMLnJlcGxhY2UoL15cXC8rLywgJycpXG4gICAgOiBiYXNlVVJMO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL2NvbWJpbmVVUkxzLmpzXG4vLyBtb2R1bGUgaWQgPSAuL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9jb21iaW5lVVJMcy5qc1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG5cbnZhciB1dGlscyA9IHJlcXVpcmUoJy4vLi4vdXRpbHMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSAoXG4gIHV0aWxzLmlzU3RhbmRhcmRCcm93c2VyRW52KCkgP1xuXG4gIC8vIFN0YW5kYXJkIGJyb3dzZXIgZW52cyBzdXBwb3J0IGRvY3VtZW50LmNvb2tpZVxuICAoZnVuY3Rpb24gc3RhbmRhcmRCcm93c2VyRW52KCkge1xuICAgIHJldHVybiB7XG4gICAgICB3cml0ZTogZnVuY3Rpb24gd3JpdGUobmFtZSwgdmFsdWUsIGV4cGlyZXMsIHBhdGgsIGRvbWFpbiwgc2VjdXJlKSB7XG4gICAgICAgIHZhciBjb29raWUgPSBbXTtcbiAgICAgICAgY29va2llLnB1c2gobmFtZSArICc9JyArIGVuY29kZVVSSUNvbXBvbmVudCh2YWx1ZSkpO1xuXG4gICAgICAgIGlmICh1dGlscy5pc051bWJlcihleHBpcmVzKSkge1xuICAgICAgICAgIGNvb2tpZS5wdXNoKCdleHBpcmVzPScgKyBuZXcgRGF0ZShleHBpcmVzKS50b0dNVFN0cmluZygpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh1dGlscy5pc1N0cmluZyhwYXRoKSkge1xuICAgICAgICAgIGNvb2tpZS5wdXNoKCdwYXRoPScgKyBwYXRoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh1dGlscy5pc1N0cmluZyhkb21haW4pKSB7XG4gICAgICAgICAgY29va2llLnB1c2goJ2RvbWFpbj0nICsgZG9tYWluKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChzZWN1cmUgPT09IHRydWUpIHtcbiAgICAgICAgICBjb29raWUucHVzaCgnc2VjdXJlJyk7XG4gICAgICAgIH1cblxuICAgICAgICBkb2N1bWVudC5jb29raWUgPSBjb29raWUuam9pbignOyAnKTtcbiAgICAgIH0sXG5cbiAgICAgIHJlYWQ6IGZ1bmN0aW9uIHJlYWQobmFtZSkge1xuICAgICAgICB2YXIgbWF0Y2ggPSBkb2N1bWVudC5jb29raWUubWF0Y2gobmV3IFJlZ0V4cCgnKF58O1xcXFxzKikoJyArIG5hbWUgKyAnKT0oW147XSopJykpO1xuICAgICAgICByZXR1cm4gKG1hdGNoID8gZGVjb2RlVVJJQ29tcG9uZW50KG1hdGNoWzNdKSA6IG51bGwpO1xuICAgICAgfSxcblxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUobmFtZSkge1xuICAgICAgICB0aGlzLndyaXRlKG5hbWUsICcnLCBEYXRlLm5vdygpIC0gODY0MDAwMDApO1xuICAgICAgfVxuICAgIH07XG4gIH0pKCkgOlxuXG4gIC8vIE5vbiBzdGFuZGFyZCBicm93c2VyIGVudiAod2ViIHdvcmtlcnMsIHJlYWN0LW5hdGl2ZSkgbGFjayBuZWVkZWQgc3VwcG9ydC5cbiAgKGZ1bmN0aW9uIG5vblN0YW5kYXJkQnJvd3NlckVudigpIHtcbiAgICByZXR1cm4ge1xuICAgICAgd3JpdGU6IGZ1bmN0aW9uIHdyaXRlKCkge30sXG4gICAgICByZWFkOiBmdW5jdGlvbiByZWFkKCkgeyByZXR1cm4gbnVsbDsgfSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9KSgpXG4pO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvY29va2llcy5qc1xuLy8gbW9kdWxlIGlkID0gLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvY29va2llcy5qc1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG5cbi8qKlxuICogRGV0ZXJtaW5lcyB3aGV0aGVyIHRoZSBzcGVjaWZpZWQgVVJMIGlzIGFic29sdXRlXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHVybCBUaGUgVVJMIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHRoZSBzcGVjaWZpZWQgVVJMIGlzIGFic29sdXRlLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBpc0Fic29sdXRlVVJMKHVybCkge1xuICAvLyBBIFVSTCBpcyBjb25zaWRlcmVkIGFic29sdXRlIGlmIGl0IGJlZ2lucyB3aXRoIFwiPHNjaGVtZT46Ly9cIiBvciBcIi8vXCIgKHByb3RvY29sLXJlbGF0aXZlIFVSTCkuXG4gIC8vIFJGQyAzOTg2IGRlZmluZXMgc2NoZW1lIG5hbWUgYXMgYSBzZXF1ZW5jZSBvZiBjaGFyYWN0ZXJzIGJlZ2lubmluZyB3aXRoIGEgbGV0dGVyIGFuZCBmb2xsb3dlZFxuICAvLyBieSBhbnkgY29tYmluYXRpb24gb2YgbGV0dGVycywgZGlnaXRzLCBwbHVzLCBwZXJpb2QsIG9yIGh5cGhlbi5cbiAgcmV0dXJuIC9eKFthLXpdW2EtelxcZFxcK1xcLVxcLl0qOik/XFwvXFwvL2kudGVzdCh1cmwpO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL2lzQWJzb2x1dGVVUkwuanNcbi8vIG1vZHVsZSBpZCA9IC4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL2lzQWJzb2x1dGVVUkwuanNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuLy4uL3V0aWxzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gKFxuICB1dGlscy5pc1N0YW5kYXJkQnJvd3NlckVudigpID9cblxuICAvLyBTdGFuZGFyZCBicm93c2VyIGVudnMgaGF2ZSBmdWxsIHN1cHBvcnQgb2YgdGhlIEFQSXMgbmVlZGVkIHRvIHRlc3RcbiAgLy8gd2hldGhlciB0aGUgcmVxdWVzdCBVUkwgaXMgb2YgdGhlIHNhbWUgb3JpZ2luIGFzIGN1cnJlbnQgbG9jYXRpb24uXG4gIChmdW5jdGlvbiBzdGFuZGFyZEJyb3dzZXJFbnYoKSB7XG4gICAgdmFyIG1zaWUgPSAvKG1zaWV8dHJpZGVudCkvaS50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpO1xuICAgIHZhciB1cmxQYXJzaW5nTm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgICB2YXIgb3JpZ2luVVJMO1xuXG4gICAgLyoqXG4gICAgKiBQYXJzZSBhIFVSTCB0byBkaXNjb3ZlciBpdCdzIGNvbXBvbmVudHNcbiAgICAqXG4gICAgKiBAcGFyYW0ge1N0cmluZ30gdXJsIFRoZSBVUkwgdG8gYmUgcGFyc2VkXG4gICAgKiBAcmV0dXJucyB7T2JqZWN0fVxuICAgICovXG4gICAgZnVuY3Rpb24gcmVzb2x2ZVVSTCh1cmwpIHtcbiAgICAgIHZhciBocmVmID0gdXJsO1xuXG4gICAgICBpZiAobXNpZSkge1xuICAgICAgICAvLyBJRSBuZWVkcyBhdHRyaWJ1dGUgc2V0IHR3aWNlIHRvIG5vcm1hbGl6ZSBwcm9wZXJ0aWVzXG4gICAgICAgIHVybFBhcnNpbmdOb2RlLnNldEF0dHJpYnV0ZSgnaHJlZicsIGhyZWYpO1xuICAgICAgICBocmVmID0gdXJsUGFyc2luZ05vZGUuaHJlZjtcbiAgICAgIH1cblxuICAgICAgdXJsUGFyc2luZ05vZGUuc2V0QXR0cmlidXRlKCdocmVmJywgaHJlZik7XG5cbiAgICAgIC8vIHVybFBhcnNpbmdOb2RlIHByb3ZpZGVzIHRoZSBVcmxVdGlscyBpbnRlcmZhY2UgLSBodHRwOi8vdXJsLnNwZWMud2hhdHdnLm9yZy8jdXJsdXRpbHNcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGhyZWY6IHVybFBhcnNpbmdOb2RlLmhyZWYsXG4gICAgICAgIHByb3RvY29sOiB1cmxQYXJzaW5nTm9kZS5wcm90b2NvbCA/IHVybFBhcnNpbmdOb2RlLnByb3RvY29sLnJlcGxhY2UoLzokLywgJycpIDogJycsXG4gICAgICAgIGhvc3Q6IHVybFBhcnNpbmdOb2RlLmhvc3QsXG4gICAgICAgIHNlYXJjaDogdXJsUGFyc2luZ05vZGUuc2VhcmNoID8gdXJsUGFyc2luZ05vZGUuc2VhcmNoLnJlcGxhY2UoL15cXD8vLCAnJykgOiAnJyxcbiAgICAgICAgaGFzaDogdXJsUGFyc2luZ05vZGUuaGFzaCA/IHVybFBhcnNpbmdOb2RlLmhhc2gucmVwbGFjZSgvXiMvLCAnJykgOiAnJyxcbiAgICAgICAgaG9zdG5hbWU6IHVybFBhcnNpbmdOb2RlLmhvc3RuYW1lLFxuICAgICAgICBwb3J0OiB1cmxQYXJzaW5nTm9kZS5wb3J0LFxuICAgICAgICBwYXRobmFtZTogKHVybFBhcnNpbmdOb2RlLnBhdGhuYW1lLmNoYXJBdCgwKSA9PT0gJy8nKSA/XG4gICAgICAgICAgICAgICAgICB1cmxQYXJzaW5nTm9kZS5wYXRobmFtZSA6XG4gICAgICAgICAgICAgICAgICAnLycgKyB1cmxQYXJzaW5nTm9kZS5wYXRobmFtZVxuICAgICAgfTtcbiAgICB9XG5cbiAgICBvcmlnaW5VUkwgPSByZXNvbHZlVVJMKHdpbmRvdy5sb2NhdGlvbi5ocmVmKTtcblxuICAgIC8qKlxuICAgICogRGV0ZXJtaW5lIGlmIGEgVVJMIHNoYXJlcyB0aGUgc2FtZSBvcmlnaW4gYXMgdGhlIGN1cnJlbnQgbG9jYXRpb25cbiAgICAqXG4gICAgKiBAcGFyYW0ge1N0cmluZ30gcmVxdWVzdFVSTCBUaGUgVVJMIHRvIHRlc3RcbiAgICAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIFVSTCBzaGFyZXMgdGhlIHNhbWUgb3JpZ2luLCBvdGhlcndpc2UgZmFsc2VcbiAgICAqL1xuICAgIHJldHVybiBmdW5jdGlvbiBpc1VSTFNhbWVPcmlnaW4ocmVxdWVzdFVSTCkge1xuICAgICAgdmFyIHBhcnNlZCA9ICh1dGlscy5pc1N0cmluZyhyZXF1ZXN0VVJMKSkgPyByZXNvbHZlVVJMKHJlcXVlc3RVUkwpIDogcmVxdWVzdFVSTDtcbiAgICAgIHJldHVybiAocGFyc2VkLnByb3RvY29sID09PSBvcmlnaW5VUkwucHJvdG9jb2wgJiZcbiAgICAgICAgICAgIHBhcnNlZC5ob3N0ID09PSBvcmlnaW5VUkwuaG9zdCk7XG4gICAgfTtcbiAgfSkoKSA6XG5cbiAgLy8gTm9uIHN0YW5kYXJkIGJyb3dzZXIgZW52cyAod2ViIHdvcmtlcnMsIHJlYWN0LW5hdGl2ZSkgbGFjayBuZWVkZWQgc3VwcG9ydC5cbiAgKGZ1bmN0aW9uIG5vblN0YW5kYXJkQnJvd3NlckVudigpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gaXNVUkxTYW1lT3JpZ2luKCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfTtcbiAgfSkoKVxuKTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL2lzVVJMU2FtZU9yaWdpbi5qc1xuLy8gbW9kdWxlIGlkID0gLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvaXNVUkxTYW1lT3JpZ2luLmpzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcblxudmFyIHV0aWxzID0gcmVxdWlyZSgnLi4vdXRpbHMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBub3JtYWxpemVIZWFkZXJOYW1lKGhlYWRlcnMsIG5vcm1hbGl6ZWROYW1lKSB7XG4gIHV0aWxzLmZvckVhY2goaGVhZGVycywgZnVuY3Rpb24gcHJvY2Vzc0hlYWRlcih2YWx1ZSwgbmFtZSkge1xuICAgIGlmIChuYW1lICE9PSBub3JtYWxpemVkTmFtZSAmJiBuYW1lLnRvVXBwZXJDYXNlKCkgPT09IG5vcm1hbGl6ZWROYW1lLnRvVXBwZXJDYXNlKCkpIHtcbiAgICAgIGhlYWRlcnNbbm9ybWFsaXplZE5hbWVdID0gdmFsdWU7XG4gICAgICBkZWxldGUgaGVhZGVyc1tuYW1lXTtcbiAgICB9XG4gIH0pO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL25vcm1hbGl6ZUhlYWRlck5hbWUuanNcbi8vIG1vZHVsZSBpZCA9IC4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL25vcm1hbGl6ZUhlYWRlck5hbWUuanNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuLy4uL3V0aWxzJyk7XG5cbi8vIEhlYWRlcnMgd2hvc2UgZHVwbGljYXRlcyBhcmUgaWdub3JlZCBieSBub2RlXG4vLyBjLmYuIGh0dHBzOi8vbm9kZWpzLm9yZy9hcGkvaHR0cC5odG1sI2h0dHBfbWVzc2FnZV9oZWFkZXJzXG52YXIgaWdub3JlRHVwbGljYXRlT2YgPSBbXG4gICdhZ2UnLCAnYXV0aG9yaXphdGlvbicsICdjb250ZW50LWxlbmd0aCcsICdjb250ZW50LXR5cGUnLCAnZXRhZycsXG4gICdleHBpcmVzJywgJ2Zyb20nLCAnaG9zdCcsICdpZi1tb2RpZmllZC1zaW5jZScsICdpZi11bm1vZGlmaWVkLXNpbmNlJyxcbiAgJ2xhc3QtbW9kaWZpZWQnLCAnbG9jYXRpb24nLCAnbWF4LWZvcndhcmRzJywgJ3Byb3h5LWF1dGhvcml6YXRpb24nLFxuICAncmVmZXJlcicsICdyZXRyeS1hZnRlcicsICd1c2VyLWFnZW50J1xuXTtcblxuLyoqXG4gKiBQYXJzZSBoZWFkZXJzIGludG8gYW4gb2JqZWN0XG4gKlxuICogYGBgXG4gKiBEYXRlOiBXZWQsIDI3IEF1ZyAyMDE0IDA4OjU4OjQ5IEdNVFxuICogQ29udGVudC1UeXBlOiBhcHBsaWNhdGlvbi9qc29uXG4gKiBDb25uZWN0aW9uOiBrZWVwLWFsaXZlXG4gKiBUcmFuc2Zlci1FbmNvZGluZzogY2h1bmtlZFxuICogYGBgXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IGhlYWRlcnMgSGVhZGVycyBuZWVkaW5nIHRvIGJlIHBhcnNlZFxuICogQHJldHVybnMge09iamVjdH0gSGVhZGVycyBwYXJzZWQgaW50byBhbiBvYmplY3RcbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBwYXJzZUhlYWRlcnMoaGVhZGVycykge1xuICB2YXIgcGFyc2VkID0ge307XG4gIHZhciBrZXk7XG4gIHZhciB2YWw7XG4gIHZhciBpO1xuXG4gIGlmICghaGVhZGVycykgeyByZXR1cm4gcGFyc2VkOyB9XG5cbiAgdXRpbHMuZm9yRWFjaChoZWFkZXJzLnNwbGl0KCdcXG4nKSwgZnVuY3Rpb24gcGFyc2VyKGxpbmUpIHtcbiAgICBpID0gbGluZS5pbmRleE9mKCc6Jyk7XG4gICAga2V5ID0gdXRpbHMudHJpbShsaW5lLnN1YnN0cigwLCBpKSkudG9Mb3dlckNhc2UoKTtcbiAgICB2YWwgPSB1dGlscy50cmltKGxpbmUuc3Vic3RyKGkgKyAxKSk7XG5cbiAgICBpZiAoa2V5KSB7XG4gICAgICBpZiAocGFyc2VkW2tleV0gJiYgaWdub3JlRHVwbGljYXRlT2YuaW5kZXhPZihrZXkpID49IDApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgaWYgKGtleSA9PT0gJ3NldC1jb29raWUnKSB7XG4gICAgICAgIHBhcnNlZFtrZXldID0gKHBhcnNlZFtrZXldID8gcGFyc2VkW2tleV0gOiBbXSkuY29uY2F0KFt2YWxdKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHBhcnNlZFtrZXldID0gcGFyc2VkW2tleV0gPyBwYXJzZWRba2V5XSArICcsICcgKyB2YWwgOiB2YWw7XG4gICAgICB9XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gcGFyc2VkO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL3BhcnNlSGVhZGVycy5qc1xuLy8gbW9kdWxlIGlkID0gLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvcGFyc2VIZWFkZXJzLmpzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcblxuLyoqXG4gKiBTeW50YWN0aWMgc3VnYXIgZm9yIGludm9raW5nIGEgZnVuY3Rpb24gYW5kIGV4cGFuZGluZyBhbiBhcnJheSBmb3IgYXJndW1lbnRzLlxuICpcbiAqIENvbW1vbiB1c2UgY2FzZSB3b3VsZCBiZSB0byB1c2UgYEZ1bmN0aW9uLnByb3RvdHlwZS5hcHBseWAuXG4gKlxuICogIGBgYGpzXG4gKiAgZnVuY3Rpb24gZih4LCB5LCB6KSB7fVxuICogIHZhciBhcmdzID0gWzEsIDIsIDNdO1xuICogIGYuYXBwbHkobnVsbCwgYXJncyk7XG4gKiAgYGBgXG4gKlxuICogV2l0aCBgc3ByZWFkYCB0aGlzIGV4YW1wbGUgY2FuIGJlIHJlLXdyaXR0ZW4uXG4gKlxuICogIGBgYGpzXG4gKiAgc3ByZWFkKGZ1bmN0aW9uKHgsIHksIHopIHt9KShbMSwgMiwgM10pO1xuICogIGBgYFxuICpcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259XG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gc3ByZWFkKGNhbGxiYWNrKSB7XG4gIHJldHVybiBmdW5jdGlvbiB3cmFwKGFycikge1xuICAgIHJldHVybiBjYWxsYmFjay5hcHBseShudWxsLCBhcnIpO1xuICB9O1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL3NwcmVhZC5qc1xuLy8gbW9kdWxlIGlkID0gLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvc3ByZWFkLmpzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcblxudmFyIGJpbmQgPSByZXF1aXJlKCcuL2hlbHBlcnMvYmluZCcpO1xudmFyIGlzQnVmZmVyID0gcmVxdWlyZSgnaXMtYnVmZmVyJyk7XG5cbi8qZ2xvYmFsIHRvU3RyaW5nOnRydWUqL1xuXG4vLyB1dGlscyBpcyBhIGxpYnJhcnkgb2YgZ2VuZXJpYyBoZWxwZXIgZnVuY3Rpb25zIG5vbi1zcGVjaWZpYyB0byBheGlvc1xuXG52YXIgdG9TdHJpbmcgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nO1xuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGFuIEFycmF5XG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYW4gQXJyYXksIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0FycmF5KHZhbCkge1xuICByZXR1cm4gdG9TdHJpbmcuY2FsbCh2YWwpID09PSAnW29iamVjdCBBcnJheV0nO1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGFuIEFycmF5QnVmZmVyXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYW4gQXJyYXlCdWZmZXIsIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0FycmF5QnVmZmVyKHZhbCkge1xuICByZXR1cm4gdG9TdHJpbmcuY2FsbCh2YWwpID09PSAnW29iamVjdCBBcnJheUJ1ZmZlcl0nO1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGEgRm9ybURhdGFcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhbiBGb3JtRGF0YSwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzRm9ybURhdGEodmFsKSB7XG4gIHJldHVybiAodHlwZW9mIEZvcm1EYXRhICE9PSAndW5kZWZpbmVkJykgJiYgKHZhbCBpbnN0YW5jZW9mIEZvcm1EYXRhKTtcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIHZpZXcgb24gYW4gQXJyYXlCdWZmZXJcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhIHZpZXcgb24gYW4gQXJyYXlCdWZmZXIsIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0FycmF5QnVmZmVyVmlldyh2YWwpIHtcbiAgdmFyIHJlc3VsdDtcbiAgaWYgKCh0eXBlb2YgQXJyYXlCdWZmZXIgIT09ICd1bmRlZmluZWQnKSAmJiAoQXJyYXlCdWZmZXIuaXNWaWV3KSkge1xuICAgIHJlc3VsdCA9IEFycmF5QnVmZmVyLmlzVmlldyh2YWwpO1xuICB9IGVsc2Uge1xuICAgIHJlc3VsdCA9ICh2YWwpICYmICh2YWwuYnVmZmVyKSAmJiAodmFsLmJ1ZmZlciBpbnN0YW5jZW9mIEFycmF5QnVmZmVyKTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGEgU3RyaW5nXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYSBTdHJpbmcsIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc1N0cmluZyh2YWwpIHtcbiAgcmV0dXJuIHR5cGVvZiB2YWwgPT09ICdzdHJpbmcnO1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGEgTnVtYmVyXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYSBOdW1iZXIsIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc051bWJlcih2YWwpIHtcbiAgcmV0dXJuIHR5cGVvZiB2YWwgPT09ICdudW1iZXInO1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIHVuZGVmaW5lZFxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHRoZSB2YWx1ZSBpcyB1bmRlZmluZWQsIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc1VuZGVmaW5lZCh2YWwpIHtcbiAgcmV0dXJuIHR5cGVvZiB2YWwgPT09ICd1bmRlZmluZWQnO1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGFuIE9iamVjdFxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGFuIE9iamVjdCwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzT2JqZWN0KHZhbCkge1xuICByZXR1cm4gdmFsICE9PSBudWxsICYmIHR5cGVvZiB2YWwgPT09ICdvYmplY3QnO1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGEgRGF0ZVxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGEgRGF0ZSwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzRGF0ZSh2YWwpIHtcbiAgcmV0dXJuIHRvU3RyaW5nLmNhbGwodmFsKSA9PT0gJ1tvYmplY3QgRGF0ZV0nO1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGEgRmlsZVxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGEgRmlsZSwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzRmlsZSh2YWwpIHtcbiAgcmV0dXJuIHRvU3RyaW5nLmNhbGwodmFsKSA9PT0gJ1tvYmplY3QgRmlsZV0nO1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGEgQmxvYlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGEgQmxvYiwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzQmxvYih2YWwpIHtcbiAgcmV0dXJuIHRvU3RyaW5nLmNhbGwodmFsKSA9PT0gJ1tvYmplY3QgQmxvYl0nO1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGEgRnVuY3Rpb25cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhIEZ1bmN0aW9uLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNGdW5jdGlvbih2YWwpIHtcbiAgcmV0dXJuIHRvU3RyaW5nLmNhbGwodmFsKSA9PT0gJ1tvYmplY3QgRnVuY3Rpb25dJztcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIFN0cmVhbVxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGEgU3RyZWFtLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNTdHJlYW0odmFsKSB7XG4gIHJldHVybiBpc09iamVjdCh2YWwpICYmIGlzRnVuY3Rpb24odmFsLnBpcGUpO1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGEgVVJMU2VhcmNoUGFyYW1zIG9iamVjdFxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGEgVVJMU2VhcmNoUGFyYW1zIG9iamVjdCwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzVVJMU2VhcmNoUGFyYW1zKHZhbCkge1xuICByZXR1cm4gdHlwZW9mIFVSTFNlYXJjaFBhcmFtcyAhPT0gJ3VuZGVmaW5lZCcgJiYgdmFsIGluc3RhbmNlb2YgVVJMU2VhcmNoUGFyYW1zO1xufVxuXG4vKipcbiAqIFRyaW0gZXhjZXNzIHdoaXRlc3BhY2Ugb2ZmIHRoZSBiZWdpbm5pbmcgYW5kIGVuZCBvZiBhIHN0cmluZ1xuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBzdHIgVGhlIFN0cmluZyB0byB0cmltXG4gKiBAcmV0dXJucyB7U3RyaW5nfSBUaGUgU3RyaW5nIGZyZWVkIG9mIGV4Y2VzcyB3aGl0ZXNwYWNlXG4gKi9cbmZ1bmN0aW9uIHRyaW0oc3RyKSB7XG4gIHJldHVybiBzdHIucmVwbGFjZSgvXlxccyovLCAnJykucmVwbGFjZSgvXFxzKiQvLCAnJyk7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIHdlJ3JlIHJ1bm5pbmcgaW4gYSBzdGFuZGFyZCBicm93c2VyIGVudmlyb25tZW50XG4gKlxuICogVGhpcyBhbGxvd3MgYXhpb3MgdG8gcnVuIGluIGEgd2ViIHdvcmtlciwgYW5kIHJlYWN0LW5hdGl2ZS5cbiAqIEJvdGggZW52aXJvbm1lbnRzIHN1cHBvcnQgWE1MSHR0cFJlcXVlc3QsIGJ1dCBub3QgZnVsbHkgc3RhbmRhcmQgZ2xvYmFscy5cbiAqXG4gKiB3ZWIgd29ya2VyczpcbiAqICB0eXBlb2Ygd2luZG93IC0+IHVuZGVmaW5lZFxuICogIHR5cGVvZiBkb2N1bWVudCAtPiB1bmRlZmluZWRcbiAqXG4gKiByZWFjdC1uYXRpdmU6XG4gKiAgbmF2aWdhdG9yLnByb2R1Y3QgLT4gJ1JlYWN0TmF0aXZlJ1xuICovXG5mdW5jdGlvbiBpc1N0YW5kYXJkQnJvd3NlckVudigpIHtcbiAgaWYgKHR5cGVvZiBuYXZpZ2F0b3IgIT09ICd1bmRlZmluZWQnICYmIG5hdmlnYXRvci5wcm9kdWN0ID09PSAnUmVhY3ROYXRpdmUnKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHJldHVybiAoXG4gICAgdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiZcbiAgICB0eXBlb2YgZG9jdW1lbnQgIT09ICd1bmRlZmluZWQnXG4gICk7XG59XG5cbi8qKlxuICogSXRlcmF0ZSBvdmVyIGFuIEFycmF5IG9yIGFuIE9iamVjdCBpbnZva2luZyBhIGZ1bmN0aW9uIGZvciBlYWNoIGl0ZW0uXG4gKlxuICogSWYgYG9iamAgaXMgYW4gQXJyYXkgY2FsbGJhY2sgd2lsbCBiZSBjYWxsZWQgcGFzc2luZ1xuICogdGhlIHZhbHVlLCBpbmRleCwgYW5kIGNvbXBsZXRlIGFycmF5IGZvciBlYWNoIGl0ZW0uXG4gKlxuICogSWYgJ29iaicgaXMgYW4gT2JqZWN0IGNhbGxiYWNrIHdpbGwgYmUgY2FsbGVkIHBhc3NpbmdcbiAqIHRoZSB2YWx1ZSwga2V5LCBhbmQgY29tcGxldGUgb2JqZWN0IGZvciBlYWNoIHByb3BlcnR5LlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fEFycmF5fSBvYmogVGhlIG9iamVjdCB0byBpdGVyYXRlXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmbiBUaGUgY2FsbGJhY2sgdG8gaW52b2tlIGZvciBlYWNoIGl0ZW1cbiAqL1xuZnVuY3Rpb24gZm9yRWFjaChvYmosIGZuKSB7XG4gIC8vIERvbid0IGJvdGhlciBpZiBubyB2YWx1ZSBwcm92aWRlZFxuICBpZiAob2JqID09PSBudWxsIHx8IHR5cGVvZiBvYmogPT09ICd1bmRlZmluZWQnKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLy8gRm9yY2UgYW4gYXJyYXkgaWYgbm90IGFscmVhZHkgc29tZXRoaW5nIGl0ZXJhYmxlXG4gIGlmICh0eXBlb2Ygb2JqICE9PSAnb2JqZWN0Jykge1xuICAgIC8qZXNsaW50IG5vLXBhcmFtLXJlYXNzaWduOjAqL1xuICAgIG9iaiA9IFtvYmpdO1xuICB9XG5cbiAgaWYgKGlzQXJyYXkob2JqKSkge1xuICAgIC8vIEl0ZXJhdGUgb3ZlciBhcnJheSB2YWx1ZXNcbiAgICBmb3IgKHZhciBpID0gMCwgbCA9IG9iai5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgIGZuLmNhbGwobnVsbCwgb2JqW2ldLCBpLCBvYmopO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICAvLyBJdGVyYXRlIG92ZXIgb2JqZWN0IGtleXNcbiAgICBmb3IgKHZhciBrZXkgaW4gb2JqKSB7XG4gICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KSkge1xuICAgICAgICBmbi5jYWxsKG51bGwsIG9ialtrZXldLCBrZXksIG9iaik7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi8qKlxuICogQWNjZXB0cyB2YXJhcmdzIGV4cGVjdGluZyBlYWNoIGFyZ3VtZW50IHRvIGJlIGFuIG9iamVjdCwgdGhlblxuICogaW1tdXRhYmx5IG1lcmdlcyB0aGUgcHJvcGVydGllcyBvZiBlYWNoIG9iamVjdCBhbmQgcmV0dXJucyByZXN1bHQuXG4gKlxuICogV2hlbiBtdWx0aXBsZSBvYmplY3RzIGNvbnRhaW4gdGhlIHNhbWUga2V5IHRoZSBsYXRlciBvYmplY3QgaW5cbiAqIHRoZSBhcmd1bWVudHMgbGlzdCB3aWxsIHRha2UgcHJlY2VkZW5jZS5cbiAqXG4gKiBFeGFtcGxlOlxuICpcbiAqIGBgYGpzXG4gKiB2YXIgcmVzdWx0ID0gbWVyZ2Uoe2ZvbzogMTIzfSwge2ZvbzogNDU2fSk7XG4gKiBjb25zb2xlLmxvZyhyZXN1bHQuZm9vKTsgLy8gb3V0cHV0cyA0NTZcbiAqIGBgYFxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmoxIE9iamVjdCB0byBtZXJnZVxuICogQHJldHVybnMge09iamVjdH0gUmVzdWx0IG9mIGFsbCBtZXJnZSBwcm9wZXJ0aWVzXG4gKi9cbmZ1bmN0aW9uIG1lcmdlKC8qIG9iajEsIG9iajIsIG9iajMsIC4uLiAqLykge1xuICB2YXIgcmVzdWx0ID0ge307XG4gIGZ1bmN0aW9uIGFzc2lnblZhbHVlKHZhbCwga2V5KSB7XG4gICAgaWYgKHR5cGVvZiByZXN1bHRba2V5XSA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIHZhbCA9PT0gJ29iamVjdCcpIHtcbiAgICAgIHJlc3VsdFtrZXldID0gbWVyZ2UocmVzdWx0W2tleV0sIHZhbCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlc3VsdFtrZXldID0gdmFsO1xuICAgIH1cbiAgfVxuXG4gIGZvciAodmFyIGkgPSAwLCBsID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgIGZvckVhY2goYXJndW1lbnRzW2ldLCBhc3NpZ25WYWx1ZSk7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuLyoqXG4gKiBFeHRlbmRzIG9iamVjdCBhIGJ5IG11dGFibHkgYWRkaW5nIHRvIGl0IHRoZSBwcm9wZXJ0aWVzIG9mIG9iamVjdCBiLlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBhIFRoZSBvYmplY3QgdG8gYmUgZXh0ZW5kZWRcbiAqIEBwYXJhbSB7T2JqZWN0fSBiIFRoZSBvYmplY3QgdG8gY29weSBwcm9wZXJ0aWVzIGZyb21cbiAqIEBwYXJhbSB7T2JqZWN0fSB0aGlzQXJnIFRoZSBvYmplY3QgdG8gYmluZCBmdW5jdGlvbiB0b1xuICogQHJldHVybiB7T2JqZWN0fSBUaGUgcmVzdWx0aW5nIHZhbHVlIG9mIG9iamVjdCBhXG4gKi9cbmZ1bmN0aW9uIGV4dGVuZChhLCBiLCB0aGlzQXJnKSB7XG4gIGZvckVhY2goYiwgZnVuY3Rpb24gYXNzaWduVmFsdWUodmFsLCBrZXkpIHtcbiAgICBpZiAodGhpc0FyZyAmJiB0eXBlb2YgdmFsID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBhW2tleV0gPSBiaW5kKHZhbCwgdGhpc0FyZyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFba2V5XSA9IHZhbDtcbiAgICB9XG4gIH0pO1xuICByZXR1cm4gYTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIGlzQXJyYXk6IGlzQXJyYXksXG4gIGlzQXJyYXlCdWZmZXI6IGlzQXJyYXlCdWZmZXIsXG4gIGlzQnVmZmVyOiBpc0J1ZmZlcixcbiAgaXNGb3JtRGF0YTogaXNGb3JtRGF0YSxcbiAgaXNBcnJheUJ1ZmZlclZpZXc6IGlzQXJyYXlCdWZmZXJWaWV3LFxuICBpc1N0cmluZzogaXNTdHJpbmcsXG4gIGlzTnVtYmVyOiBpc051bWJlcixcbiAgaXNPYmplY3Q6IGlzT2JqZWN0LFxuICBpc1VuZGVmaW5lZDogaXNVbmRlZmluZWQsXG4gIGlzRGF0ZTogaXNEYXRlLFxuICBpc0ZpbGU6IGlzRmlsZSxcbiAgaXNCbG9iOiBpc0Jsb2IsXG4gIGlzRnVuY3Rpb246IGlzRnVuY3Rpb24sXG4gIGlzU3RyZWFtOiBpc1N0cmVhbSxcbiAgaXNVUkxTZWFyY2hQYXJhbXM6IGlzVVJMU2VhcmNoUGFyYW1zLFxuICBpc1N0YW5kYXJkQnJvd3NlckVudjogaXNTdGFuZGFyZEJyb3dzZXJFbnYsXG4gIGZvckVhY2g6IGZvckVhY2gsXG4gIG1lcmdlOiBtZXJnZSxcbiAgZXh0ZW5kOiBleHRlbmQsXG4gIHRyaW06IHRyaW1cbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9heGlvcy9saWIvdXRpbHMuanNcbi8vIG1vZHVsZSBpZCA9IC4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi91dGlscy5qc1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKHVuZGVmaW5lZCk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIuay1idG4ge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgaGVpZ2h0OiAyLjU3MTQyODU3MTQyODU3MnJlbTtcXG4gIGxpbmUtaGVpZ2h0OiBjYWxjKDIuNTcxNDI4NTcxNDI4NTcycmVtIC0gMnB4KTtcXG4gIHBhZGRpbmc6IDAgMi4yODU3MTQyODU3MTQyODZlbTtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBib3JkZXI6IG5vbmU7XFxuICBjb2xvcjogIzU5NTk1OTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBib3JkZXItcmFkaXVzOiAycHg7XFxuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjI1cyBlYXNlLWluLW91dDtcXG4gIHRyYW5zaXRpb246IGFsbCAwLjI1cyBlYXNlLWluLW91dDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNkOWQ5ZDk7XFxuICBmb250LXNpemU6IDFyZW07XFxufVxcbi5rLWJ0bjpob3ZlciB7XFxuICBib3JkZXItY29sb3I6ICMyODlhZjQ7XFxuICBjb2xvcjogIzI4OWFmNDtcXG59XFxuLmstYnRuLmstcHJpbWFyeSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjg5YWY0O1xcbiAgY29sb3I6ICNmZmY7XFxuICBib3JkZXItY29sb3I6ICMyODlhZjQ7XFxufVxcbi5rLWJ0bi5rLXByaW1hcnk6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzUzYWVmNjtcXG4gIGJvcmRlci1jb2xvcjogIzUzYWVmNjtcXG59XFxuLmstYnRuLmstd2FybmluZyB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY5YzI4O1xcbiAgY29sb3I6ICNmZmY7XFxuICBib3JkZXItY29sb3I6ICNmZjljMjg7XFxufVxcbi5rLWJ0bi5rLXdhcm5pbmc6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmYjA1MztcXG4gIGJvcmRlci1jb2xvcjogI2ZmYjA1MztcXG59XFxuLmstYnRuLmstZGFuZ2VyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZTQ0NDQ7XFxuICBjb2xvcjogI2ZmZjtcXG4gIGJvcmRlci1jb2xvcjogI2ZlNDQ0NDtcXG59XFxuLmstYnRuLmstZGFuZ2VyOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZTY5Njk7XFxuICBib3JkZXItY29sb3I6ICNmZTY5Njk7XFxufVxcbi5rLWJ0bi5rLWFjdGl2ZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjg5YWY0O1xcbiAgY29sb3I6ICNmZmY7XFxuICBib3JkZXItY29sb3I6ICMyODlhZjQ7XFxufVxcbi5rLWJ0bi5rLWFjdGl2ZTpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTNhZWY2O1xcbiAgYm9yZGVyLWNvbG9yOiAjNTNhZWY2O1xcbn1cXG4uay1idG5bZGlzYWJsZWRdLFxcbi5rLWJ0bltkaXNhYmxlZF06aG92ZXIge1xcbiAgY29sb3I6ICM5OTk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDlkOWQ5O1xcbiAgYm9yZGVyLWNvbG9yOiAjZDlkOWQ5O1xcbiAgY3Vyc29yOiBub3QtYWxsb3dlZDtcXG59XFxuLmstYnRuLmstbm9uZSxcXG4uay1idG4uay1ub25lOmhvdmVyIHtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbn1cXG4uay1idG4uay1zbWFsbCB7XFxuICBmb250LXNpemU6IDAuODU3MTQyODU3MTQyODU3cmVtO1xcbiAgaGVpZ2h0OiAyLjE0Mjg1NzE0Mjg1NzE0M3JlbTtcXG4gIHBhZGRpbmc6IDAgMS4wNzE0Mjg1NzE0Mjg1NzFyZW07XFxuICBsaW5lLWhlaWdodDogY2FsYygyLjE0Mjg1NzE0Mjg1NzE0M3JlbSAtIDJweCk7XFxufVxcbi5rLWJ0bi5rLXNtYWxsLmstYnRuLWljb24ge1xcbiAgd2lkdGg6IDIuMTQyODU3MTQyODU3MTQzcmVtO1xcbn1cXG4uay1idG4uay1taW5pIHtcXG4gIGZvbnQtc2l6ZTogMC44NTcxNDI4NTcxNDI4NTdyZW07XFxuICBoZWlnaHQ6IDEuODU3MTQyODU3MTQyODU3cmVtO1xcbiAgcGFkZGluZzogMCAwLjcxNDI4NTcxNDI4NTcxNHJlbTtcXG4gIGxpbmUtaGVpZ2h0OiBjYWxjKDEuODU3MTQyODU3MTQyODU3cmVtIC0gMnB4KTtcXG59XFxuLmstYnRuLmstbWluaS5rLWJ0bi1pY29uIHtcXG4gIHdpZHRoOiAxLjg1NzE0Mjg1NzE0Mjg1N3JlbTtcXG59XFxuLmstYnRuIC5rLWljb24ge1xcbiAgZm9udC1zaXplOiBpbmhlcml0O1xcbn1cXG4uay1idG4gLmstaWNvbjpiZWZvcmUge1xcbiAgZm9udC1zaXplOiBpbmhlcml0O1xcbn1cXG4uay1idG4gLmstaWNvbiArIHNwYW4ge1xcbiAgbWFyZ2luLWxlZnQ6IDAuMzU3MTQyODU3MTQyODU3ZW07XFxufVxcbi5rLWJ0bi5rLWljb24tcmlnaHQgLmstaWNvbiB7XFxuICBtYXJnaW4tbGVmdDogMC4zNTcxNDI4NTcxNDI4NTdlbTtcXG59XFxuLmstYnRuLmstYnRuLWljb24ge1xcbiAgd2lkdGg6IDIuNTcxNDI4NTcxNDI4NTcycmVtO1xcbiAgcGFkZGluZzogMDtcXG59XFxuLmstYnRuLmstYnRuLWljb24gLmstaWNvbiB7XFxuICBtYXJnaW46IDA7XFxuICBmb250LXNpemU6IDEuMTQyODU3MTQyODU3MTQzZW07XFxufVxcbi5rLWJ0bi5rLWZsdWlkIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgcGFkZGluZzogMDtcXG59XFxuLmstYnRuLmstY2lyY2xlIHtcXG4gIGJvcmRlci1yYWRpdXM6IDEuMjg1NzE0Mjg1NzE0Mjg2cmVtO1xcbn1cXG4uay1idG4uay1sb2FkaW5nLFxcbi5rLWJ0bi5rLWxvYWRpbmc6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG4gIGNvbG9yOiAjYWNhY2FjO1xcbiAgYm9yZGVyLWNvbG9yOiAjZWNlY2VjO1xcbn1cXG4uay1idG4uay1sb2FkaW5nIC5rLWljb246bm90KC5pY29uLWxvYWRpbmcpIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcbi5rLWJ0bi5rLWxvYWRpbmcuay1wcmltYXJ5LFxcbi5rLWJ0bi5rLWxvYWRpbmcuay1wcmltYXJ5OmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM5NGNkZjk7XFxuICBjb2xvcjogI2ZmZjtcXG4gIGJvcmRlci1jb2xvcjogIzk0Y2RmOTtcXG59XFxuLmstYnRuLmstbG9hZGluZy5rLXdhcm5pbmcsXFxuLmstYnRuLmstbG9hZGluZy5rLXdhcm5pbmc6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmY2Q5MztcXG4gIGNvbG9yOiAjZmZmO1xcbiAgYm9yZGVyLWNvbG9yOiAjZmZjZDkzO1xcbn1cXG4uay1idG4uay1sb2FkaW5nLmstZGFuZ2VyLFxcbi5rLWJ0bi5rLWxvYWRpbmcuay1kYW5nZXI6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZlYTJhMjtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgYm9yZGVyLWNvbG9yOiAjZmVhMmEyO1xcbn1cXG4uay1idG4uay1sb2FkaW5nLmstYWN0aXZlLFxcbi5rLWJ0bi5rLWxvYWRpbmcuay1hY3RpdmU6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzk0Y2RmOTtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgYm9yZGVyLWNvbG9yOiAjOTRjZGY5O1xcbn1cXG4uay1idG4uay1sb2FkaW5nOm5vdCguay1idG4taWNvbik6bm90KC5rLWljb24tbGVmdCk6bm90KC5rLWljb24tcmlnaHQpIHtcXG4gIHBhZGRpbmctbGVmdDogMy4yODU3MTQyODU3MTQyODZlbTtcXG59XFxuLmstYnRuLmstbG9hZGluZzpub3QoLmstYnRuLWljb24pOm5vdCguay1pY29uLWxlZnQpOm5vdCguay1pY29uLXJpZ2h0KSAuaWNvbi1sb2FkaW5nIHtcXG4gIG1hcmdpbi1sZWZ0OiAtMWVtO1xcbn1cXG4uay1idG4uay1sb2FkaW5nOm5vdCguay1idG4taWNvbik6bm90KC5rLWljb24tbGVmdCk6bm90KC5rLWljb24tcmlnaHQpLmstc21hbGwge1xcbiAgcGFkZGluZy1sZWZ0OiAyLjA3MTQyODU3MTQyODU3MWVtO1xcbn1cXG4uay1idG4uay1sb2FkaW5nOm5vdCguay1idG4taWNvbik6bm90KC5rLWljb24tbGVmdCk6bm90KC5rLWljb24tcmlnaHQpLmstbWluaSB7XFxuICBwYWRkaW5nLWxlZnQ6IDEuNzE0Mjg1NzE0Mjg1NzE0ZW07XFxufVxcbi5rLWJ0bnMge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXG59XFxuLmstYnRucyAuay1idG4ge1xcbiAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7XFxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcbn1cXG4uay1idG5zIC5rLWJ0bjpob3ZlciB7XFxuICB6LWluZGV4OiAxO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG4uay1idG5zLmstZmx1aWQge1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcbi5rLWJ0bnM6bm90KC5rLXZlcnRpY2FsKSA+IC5rLWJ0bjpub3QoOmZpcnN0LW9mLXR5cGUpIHtcXG4gIG1hcmdpbi1sZWZ0OiAtMXB4ICFpbXBvcnRhbnQ7XFxufVxcbi5rLWJ0bnM6bm90KC5rLXZlcnRpY2FsKSA+IC5rLWJ0bjpub3QoOmZpcnN0LW9mLXR5cGUpOm5vdCg6bGFzdC1vZi10eXBlKSB7XFxuICBib3JkZXItcmFkaXVzOiAwO1xcbn1cXG4uay1idG5zOm5vdCguay12ZXJ0aWNhbCkgPiAuay1idG46bm90KDpvbmx5LW9mLXR5cGUpOmZpcnN0LW9mLXR5cGUge1xcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDA7XFxuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMDtcXG59XFxuLmstYnRuczpub3QoLmstdmVydGljYWwpID4gLmstYnRuOm5vdCg6b25seS1vZi10eXBlKTpsYXN0LW9mLXR5cGUge1xcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMDtcXG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDA7XFxufVxcbi5rLWJ0bnM6bm90KC5rLXZlcnRpY2FsKSA+IC5rLWJ0bi5rLXByaW1hcnk6bm90KDpmaXJzdC1vZi10eXBlKSB7XFxuICBib3JkZXItbGVmdC1jb2xvcjogIzE4OTJmMztcXG59XFxuLmstYnRuczpub3QoLmstdmVydGljYWwpID4gLmstYnRuLmstcHJpbWFyeTpub3QoOmxhc3Qtb2YtdHlwZSkge1xcbiAgYm9yZGVyLXJpZ2h0LWNvbG9yOiAjMTg5MmYzO1xcbn1cXG4uay1idG5zOm5vdCguay12ZXJ0aWNhbCkgPiAuay1idG4uay13YXJuaW5nOm5vdCg6Zmlyc3Qtb2YtdHlwZSkge1xcbiAgYm9yZGVyLWxlZnQtY29sb3I6ICNmZjk0MTY7XFxufVxcbi5rLWJ0bnM6bm90KC5rLXZlcnRpY2FsKSA+IC5rLWJ0bi5rLXdhcm5pbmc6bm90KDpsYXN0LW9mLXR5cGUpIHtcXG4gIGJvcmRlci1yaWdodC1jb2xvcjogI2ZmOTQxNjtcXG59XFxuLmstYnRuczpub3QoLmstdmVydGljYWwpID4gLmstYnRuLmstZGFuZ2VyOm5vdCg6Zmlyc3Qtb2YtdHlwZSkge1xcbiAgYm9yZGVyLWxlZnQtY29sb3I6ICNmZTMxMzE7XFxufVxcbi5rLWJ0bnM6bm90KC5rLXZlcnRpY2FsKSA+IC5rLWJ0bi5rLWRhbmdlcjpub3QoOmxhc3Qtb2YtdHlwZSkge1xcbiAgYm9yZGVyLXJpZ2h0LWNvbG9yOiAjZmUzMTMxO1xcbn1cXG4uay1idG5zOm5vdCguay12ZXJ0aWNhbCkgPiAuay1idG4uay1hY3RpdmU6bm90KDpmaXJzdC1vZi10eXBlKSB7XFxuICBib3JkZXItbGVmdC1jb2xvcjogO1xcbn1cXG4uay1idG5zOm5vdCguay12ZXJ0aWNhbCkgPiAuay1idG4uay1hY3RpdmU6bm90KDpsYXN0LW9mLXR5cGUpIHtcXG4gIGJvcmRlci1yaWdodC1jb2xvcjogO1xcbn1cXG4uay1idG5zOm5vdCguay12ZXJ0aWNhbCkuay1mbHVpZCB7XFxuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcXG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xcbiAgZGlzcGxheTogZmxleDtcXG59XFxuLmstYnRuczpub3QoLmstdmVydGljYWwpLmstZmx1aWQgPiAuay1idG4ge1xcbiAgLXdlYmtpdC1ib3gtZmxleDogMTtcXG4gICAgICAtbXMtZmxleDogMTtcXG4gICAgICAgICAgZmxleDogMTtcXG59XFxuLmstYnRucy5rLXZlcnRpY2FsID4gLmstYnRuIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG4uay1idG5zLmstdmVydGljYWwgPiAuay1idG46bm90KC5rLWJ0bi1pY29uKSB7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuLmstYnRucy5rLXZlcnRpY2FsID4gLmstYnRuOm5vdCg6Zmlyc3Qtb2YtdHlwZSkge1xcbiAgbWFyZ2luLXRvcDogLTFweCAhaW1wb3J0YW50O1xcbn1cXG4uay1idG5zLmstdmVydGljYWwgPiAuay1idG46bm90KDpmaXJzdC1vZi10eXBlKTpub3QoOmxhc3Qtb2YtdHlwZSkge1xcbiAgYm9yZGVyLXJhZGl1czogMDtcXG59XFxuLmstYnRucy5rLXZlcnRpY2FsID4gLmstYnRuOm5vdCg6b25seS1vZi10eXBlKTpmaXJzdC1vZi10eXBlIHtcXG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDA7XFxuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMDtcXG59XFxuLmstYnRucy5rLXZlcnRpY2FsID4gLmstYnRuOm5vdCg6b25seS1vZi10eXBlKTpsYXN0LW9mLXR5cGUge1xcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMDtcXG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAwO1xcbn1cXG4uay1idG5zLmstdmVydGljYWwgPiAuay1idG4uay1wcmltYXJ5Om5vdCg6Zmlyc3Qtb2YtdHlwZSkge1xcbiAgYm9yZGVyLXRvcC1jb2xvcjogIzE4OTJmMztcXG59XFxuLmstYnRucy5rLXZlcnRpY2FsID4gLmstYnRuLmstcHJpbWFyeTpub3QoOmxhc3Qtb2YtdHlwZSkge1xcbiAgYm9yZGVyLWJvdHRvbS1jb2xvcjogIzE4OTJmMztcXG59XFxuLmstYnRucy5rLXZlcnRpY2FsID4gLmstYnRuLmstd2FybmluZzpub3QoOmZpcnN0LW9mLXR5cGUpIHtcXG4gIGJvcmRlci10b3AtY29sb3I6ICNmZjk0MTY7XFxufVxcbi5rLWJ0bnMuay12ZXJ0aWNhbCA+IC5rLWJ0bi5rLXdhcm5pbmc6bm90KDpsYXN0LW9mLXR5cGUpIHtcXG4gIGJvcmRlci1ib3R0b20tY29sb3I6ICNmZjk0MTY7XFxufVxcbi5rLWJ0bnMuay12ZXJ0aWNhbCA+IC5rLWJ0bi5rLWRhbmdlcjpub3QoOmZpcnN0LW9mLXR5cGUpIHtcXG4gIGJvcmRlci10b3AtY29sb3I6ICNmZTMxMzE7XFxufVxcbi5rLWJ0bnMuay12ZXJ0aWNhbCA+IC5rLWJ0bi5rLWRhbmdlcjpub3QoOmxhc3Qtb2YtdHlwZSkge1xcbiAgYm9yZGVyLWJvdHRvbS1jb2xvcjogI2ZlMzEzMTtcXG59XFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlcj97XCJ1cmxcIjp0cnVlfSEuL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9saWI/e1wicGx1Z2luc1wiOltudWxsXX0hLi9ub2RlX21vZHVsZXMvc3R5bHVzLWxvYWRlcj97XCJpbmNsdWRlIGNzc1wiOnRydWUsXCJzb3VyY2VNYXBcIjpmYWxzZSxcImltcG9ydFwiOlwiL2hvbWUvamF2ZXkvV29ya3NwYWNlL2twYy9zdHlsZXMvdGhlbWVzL2tzeXVuL2luZGV4LnN0eWxcIn0hLi9jb21wb25lbnRzL2J1dHRvbi9pbmRleC5zdHlsXG4vLyBtb2R1bGUgaWQgPSAuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3tcInVybFwiOnRydWV9IS4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2xpYi9pbmRleC5qcz97XCJwbHVnaW5zXCI6W251bGxdfSEuL25vZGVfbW9kdWxlcy9zdHlsdXMtbG9hZGVyL2luZGV4LmpzP3tcImluY2x1ZGUgY3NzXCI6dHJ1ZSxcInNvdXJjZU1hcFwiOmZhbHNlLFwiaW1wb3J0XCI6XCIvaG9tZS9qYXZleS9Xb3Jrc3BhY2Uva3BjL3N0eWxlcy90aGVtZXMva3N5dW4vaW5kZXguc3R5bFwifSEuL2NvbXBvbmVudHMvYnV0dG9uL2luZGV4LnN0eWxcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSh1bmRlZmluZWQpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlcj97XCJ1cmxcIjp0cnVlfSEuL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9saWI/e1wicGx1Z2luc1wiOltudWxsXX0hLi9ub2RlX21vZHVsZXMvc3R5bHVzLWxvYWRlcj97XCJpbmNsdWRlIGNzc1wiOnRydWUsXCJzb3VyY2VNYXBcIjpmYWxzZSxcImltcG9ydFwiOlwiL2hvbWUvamF2ZXkvV29ya3NwYWNlL2twYy9zdHlsZXMvdGhlbWVzL2tzeXVuL2luZGV4LnN0eWxcIn0hLi9zaXRlL3BhZ2VzL2RvY3VtZW50L2luZGV4LnN0eWxcbi8vIG1vZHVsZSBpZCA9IC4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/e1widXJsXCI6dHJ1ZX0hLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvbGliL2luZGV4LmpzP3tcInBsdWdpbnNcIjpbbnVsbF19IS4vbm9kZV9tb2R1bGVzL3N0eWx1cy1sb2FkZXIvaW5kZXguanM/e1wiaW5jbHVkZSBjc3NcIjp0cnVlLFwic291cmNlTWFwXCI6ZmFsc2UsXCJpbXBvcnRcIjpcIi9ob21lL2phdmV5L1dvcmtzcGFjZS9rcGMvc3R5bGVzL3RoZW1lcy9rc3l1bi9pbmRleC5zdHlsXCJ9IS4vc2l0ZS9wYWdlcy9kb2N1bWVudC9pbmRleC5zdHlsXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikodW5kZWZpbmVkKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcImh0bWwsXFxuYm9keSB7XFxuICBtYXJnaW46IDA7XFxuICBjb2xvcjogIzMzMztcXG4gIGJhY2tncm91bmQ6ICNlZmVmZWY7XFxuICBoZWlnaHQ6IDEwMCU7XFxufVxcbmEge1xcbiAgY29sb3I6ICMyZDhjZjA7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbmgxLFxcbmgyLFxcbmgzLFxcbmg0LFxcbmg1IHtcXG4gIG1hcmdpbjogMDtcXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxuICBjb2xvcjogIzAwMDtcXG59XFxuaDEge1xcbiAgZm9udC1zaXplOiAyZW07XFxufVxcbmgyIHtcXG4gIGZvbnQtc2l6ZTogMS44ZW07XFxufVxcbmgzIHtcXG4gIGZvbnQtc2l6ZTogMS41ZW07XFxufVxcbmNvZGUge1xcbiAgY29sb3I6ICNjNzI1NGU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjlmMmY0O1xcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgcGFkZGluZzogMCA1cHg7XFxufVxcbmJsb2NrcXVvdGUge1xcbiAgbWFyZ2luOiAxZW0gMDtcXG4gIHBhZGRpbmc6IDFweCAyZW07XFxuICBiYWNrZ3JvdW5kOiAjZjhmOGY4O1xcbiAgYm9yZGVyLXJhZGl1czogMCAzcHggM3B4IDA7XFxuICBib3JkZXItbGVmdDogMnB4IHNvbGlkICNmZTQ0NDQ7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcbmJsb2NrcXVvdGU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6ICchJztcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiA1MCU7XFxuICBtYXJnaW4tdG9wOiAtMTBweDtcXG4gIHdpZHRoOiAyMHB4O1xcbiAgaGVpZ2h0OiAyMHB4O1xcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGJhY2tncm91bmQ6ICNmZTQ0NDQ7XFxuICBjb2xvcjogI2ZmZjtcXG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xcbiAgbGVmdDogLTExcHg7XFxufVxcbiNwYWdlLFxcbi5hcHAtd3JhcHBlcixcXG4ubWFpbi13cmFwcGVyIHtcXG4gIGhlaWdodDogMTAwJTtcXG59XFxuLmhlYWRlci13cmFwcGVyIHtcXG4gIGhlaWdodDogODBweDtcXG4gIGxpbmUtaGVpZ2h0OiA4MHB4O1xcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDJweCA1cHggcmdiYSgwLDAsMCwwLjA4KTtcXG4gICAgICAgICAgYm94LXNoYWRvdzogMCAycHggNXB4IHJnYmEoMCwwLDAsMC4wOCk7XFxuICBiYWNrZ3JvdW5kOiAjZmZmO1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgd2lkdGg6IDEwMCU7XFxuICB0b3A6IDA7XFxuICB6LWluZGV4OiA5OTk7XFxufVxcbi5oZWFkZXItd3JhcHBlciBoZWFkZXIge1xcbiAgd2lkdGg6IHdpZHRoO1xcbiAgbWFyZ2luOiAwIGF1dG87XFxufVxcbi5oZWFkZXItd3JhcHBlciAubG9nbyB7XFxuICBmb250LXNpemU6IDI0cHg7XFxuICBjb2xvcjogIzMzMztcXG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xcbn1cXG4uaGVhZGVyLXdyYXBwZXIgbmF2IHtcXG4gIGZsb2F0OiByaWdodDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuLmhlYWRlci13cmFwcGVyIG5hdiBhIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIHBhZGRpbmc6IDAgMjBweDtcXG4gIGNvbG9yOiAjMzMzO1xcbn1cXG4uaGVhZGVyLXdyYXBwZXIgbmF2IGEuYWN0aXZlIHtcXG4gIGNvbG9yOiAjZmU0NDQ0O1xcbn1cXG4uaGVhZGVyLXdyYXBwZXIgLmJvcmRlciB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBib3R0b206IDA7XFxuICBib3JkZXItYm90dG9tOiAycHggc29saWQgI2ZlNDQ0NDtcXG59XFxuLnRyYW5zaXRpb24ge1xcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMzUwbXMgY3ViaWMtYmV6aWVyKDAuNTUsIDAsIDAuMSwgMSk7XFxuICB0cmFuc2l0aW9uOiBhbGwgMzUwbXMgY3ViaWMtYmV6aWVyKDAuNTUsIDAsIDAuMSwgMSk7XFxufVxcbi5ibHVlIHtcXG4gIGNvbG9yOiAjMDlkO1xcbn1cXG4ucmVkIHtcXG4gIGNvbG9yOiAjZDA0O1xcbn1cXG4ueWVsbG93IHtcXG4gIGNvbG9yOiAjZmZjNDAwO1xcbn1cXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyP3tcInVybFwiOnRydWV9IS4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2xpYj97XCJwbHVnaW5zXCI6W251bGxdfSEuL25vZGVfbW9kdWxlcy9zdHlsdXMtbG9hZGVyP3tcImluY2x1ZGUgY3NzXCI6dHJ1ZSxcInNvdXJjZU1hcFwiOmZhbHNlLFwiaW1wb3J0XCI6XCIvaG9tZS9qYXZleS9Xb3Jrc3BhY2Uva3BjL3N0eWxlcy90aGVtZXMva3N5dW4vaW5kZXguc3R5bFwifSEuL3NpdGUvcGFnZXMvbGF5b3V0LnN0eWxcbi8vIG1vZHVsZSBpZCA9IC4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/e1widXJsXCI6dHJ1ZX0hLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvbGliL2luZGV4LmpzP3tcInBsdWdpbnNcIjpbbnVsbF19IS4vbm9kZV9tb2R1bGVzL3N0eWx1cy1sb2FkZXIvaW5kZXguanM/e1wiaW5jbHVkZSBjc3NcIjp0cnVlLFwic291cmNlTWFwXCI6ZmFsc2UsXCJpbXBvcnRcIjpcIi9ob21lL2phdmV5L1dvcmtzcGFjZS9rcGMvc3R5bGVzL3RoZW1lcy9rc3l1bi9pbmRleC5zdHlsXCJ9IS4vc2l0ZS9wYWdlcy9sYXlvdXQuc3R5bFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKiFcbiAqIERldGVybWluZSBpZiBhbiBvYmplY3QgaXMgYSBCdWZmZXJcbiAqXG4gKiBAYXV0aG9yICAgRmVyb3NzIEFib3VraGFkaWplaCA8ZmVyb3NzQGZlcm9zcy5vcmc+IDxodHRwOi8vZmVyb3NzLm9yZz5cbiAqIEBsaWNlbnNlICBNSVRcbiAqL1xuXG4vLyBUaGUgX2lzQnVmZmVyIGNoZWNrIGlzIGZvciBTYWZhcmkgNS03IHN1cHBvcnQsIGJlY2F1c2UgaXQncyBtaXNzaW5nXG4vLyBPYmplY3QucHJvdG90eXBlLmNvbnN0cnVjdG9yLiBSZW1vdmUgdGhpcyBldmVudHVhbGx5XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChvYmopIHtcbiAgcmV0dXJuIG9iaiAhPSBudWxsICYmIChpc0J1ZmZlcihvYmopIHx8IGlzU2xvd0J1ZmZlcihvYmopIHx8ICEhb2JqLl9pc0J1ZmZlcilcbn1cblxuZnVuY3Rpb24gaXNCdWZmZXIgKG9iaikge1xuICByZXR1cm4gISFvYmouY29uc3RydWN0b3IgJiYgdHlwZW9mIG9iai5jb25zdHJ1Y3Rvci5pc0J1ZmZlciA9PT0gJ2Z1bmN0aW9uJyAmJiBvYmouY29uc3RydWN0b3IuaXNCdWZmZXIob2JqKVxufVxuXG4vLyBGb3IgTm9kZSB2MC4xMCBzdXBwb3J0LiBSZW1vdmUgdGhpcyBldmVudHVhbGx5LlxuZnVuY3Rpb24gaXNTbG93QnVmZmVyIChvYmopIHtcbiAgcmV0dXJuIHR5cGVvZiBvYmoucmVhZEZsb2F0TEUgPT09ICdmdW5jdGlvbicgJiYgdHlwZW9mIG9iai5zbGljZSA9PT0gJ2Z1bmN0aW9uJyAmJiBpc0J1ZmZlcihvYmouc2xpY2UoMCwgMCkpXG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9pcy1idWZmZXIvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IC4vbm9kZV9tb2R1bGVzL2lzLWJ1ZmZlci9pbmRleC5qc1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgSW50YWN0IGZyb20gJ2ludGFjdCc7XG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uL2xheW91dCc7XG5pbXBvcnQgdGVtcGxhdGUgZnJvbSAnLi9pbmRleC52ZHQnO1xuaW1wb3J0ICcuL2luZGV4LnN0eWwnO1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBMYXlvdXQge1xuICAgIEBJbnRhY3QudGVtcGxhdGUoKVxuICAgIHN0YXRpYyB0ZW1wbGF0ZSA9IHRlbXBsYXRlO1xuXG4gICAgX2luaXQoKSB7XG4gICAgICAgIHJldHVybiBheGlvcy5nZXQoYC8ke3RoaXMuZ2V0KCdwYXRoJyl9aW5kZXguanNvbmApLnRoZW4oZGF0YSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc2l0ZS9wYWdlcy9kb2N1bWVudC9pbmRleC5qcyIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz8/cmVmLS0yLTEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0yLTIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWx1cy1sb2FkZXIvaW5kZXguanM/P3JlZi0tMi0zIS4vaW5kZXguc3R5bFwiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuLy8gUHJlcGFyZSBjc3NUcmFuc2Zvcm1hdGlvblxudmFyIHRyYW5zZm9ybTtcblxudmFyIG9wdGlvbnMgPSB7fVxub3B0aW9ucy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1cbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuXHQvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuXHRpZighY29udGVudC5sb2NhbHMpIHtcblx0XHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tMi0xIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMi0yIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsdXMtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTItMyEuL2luZGV4LnN0eWxcIiwgZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTItMSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTItMiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bHVzLWxvYWRlci9pbmRleC5qcz8/cmVmLS0yLTMhLi9pbmRleC5zdHlsXCIpO1xuXHRcdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cdFx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdFx0fSk7XG5cdH1cblx0Ly8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NpdGUvcGFnZXMvZG9jdW1lbnQvaW5kZXguc3R5bFxuLy8gbW9kdWxlIGlkID0gLi9zaXRlL3BhZ2VzL2RvY3VtZW50L2luZGV4LnN0eWxcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IEJ1dHRvbiBmcm9tICdjb21wb25lbnRzL2J1dHRvbic7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihvYmosIF9WZHQsIGJsb2NrcywgJGNhbGxlZSkge1xuXG5fVmR0IHx8IChfVmR0ID0gVmR0KTtcbm9iaiB8fCAob2JqID0ge30pO1xuYmxvY2tzIHx8IChibG9ja3MgPSB7fSk7XG52YXIgaCA9IF9WZHQubWlzcy5oLCBoYyA9IF9WZHQubWlzcy5oYywgaHUgPSBfVmR0Lm1pc3MuaHUsIHdpZGdldHMgPSB0aGlzICYmIHRoaXMud2lkZ2V0cyB8fCB7fSwgX2Jsb2NrcyA9IHt9LCBfX2Jsb2NrcyA9IHt9LFxuX191ID0gX1ZkdC51dGlscywgZXh0ZW5kID0gX191LmV4dGVuZCwgX2UgPSBfX3UuZXJyb3IsIF9jbGFzc05hbWUgPSBfX3UuY2xhc3NOYW1lLFxuX19vID0gX191Lk9wdGlvbnMsIF9nZXRNb2RlbCA9IF9fby5nZXRNb2RlbCwgX3NldE1vZGVsID0gX19vLnNldE1vZGVsLFxuX3NldENoZWNrYm94TW9kZWwgPSBfX3Uuc2V0Q2hlY2tib3hNb2RlbCwgX2RldGVjdENoZWNrYm94Q2hlY2tlZCA9IF9fdS5kZXRlY3RDaGVja2JveENoZWNrZWQsXG5fc2V0U2VsZWN0TW9kZWwgPSBfX3Uuc2V0U2VsZWN0TW9kZWwsXG5zZWxmID0gdGhpcy5kYXRhLCBzY29wZSA9IG9iaiwgQW5pbWF0ZSA9IHNlbGYgJiYgc2VsZi5BbmltYXRlLCBwYXJlbnQgPSAoJGNhbGxlZSB8fCB7fSkuX3N1cGVyXG5cblxucmV0dXJuIChmdW5jdGlvbigpIHtcbiAgICB2YXIgX29iaiA9IHsnbmF2SW5kZXgnOiAnZG9jdW1lbnQnLCAnY2xhc3NOYW1lJzogJ2RvY3VtZW50LXBhZ2UnLCAnY2hpbGRyZW4nOiBudWxsfTtcbiAgICBpZiAoX29iai5oYXNPd25Qcm9wZXJ0eShcImFyZ3VtZW50c1wiKSkge1xuICAgICAgICBleHRlbmQoX29iaiwgX29iai5hcmd1bWVudHMgPT09IHRydWUgPyBvYmogOiBfb2JqLmFyZ3VtZW50cyk7XG4gICAgICAgIGRlbGV0ZSBfb2JqLmFyZ3VtZW50cztcbiAgICB9XG4gICAgcmV0dXJuIHBhcmVudC5jYWxsKHRoaXMsIF9vYmosIF9WZHQsIGZ1bmN0aW9uKGJsb2Nrcykge1xuICAgIHZhciBfYmxvY2tzID0ge30sIF9fYmxvY2tzID0gZXh0ZW5kKHt9LCBibG9ja3MpO1xuICAgIHJldHVybiAoX2Jsb2Nrcy5jb250ZW50ID0gZnVuY3Rpb24ocGFyZW50KSB7cmV0dXJuIGgoQnV0dG9uLCB7J2NoaWxkcmVuJzogJ0hlbGxvJywgJ19jb250ZXh0JzogdGhpc30pO30pICYmIChfX2Jsb2Nrcy5jb250ZW50ID0gZnVuY3Rpb24ocGFyZW50KSB7XG52YXIgc2VsZiA9IHRoaXM7XG5yZXR1cm4gYmxvY2tzLmNvbnRlbnQgPyBibG9ja3MuY29udGVudC5jYWxsKHRoaXMsIGZ1bmN0aW9uKCkge1xucmV0dXJuIF9ibG9ja3MuY29udGVudC5jYWxsKHNlbGYsIHBhcmVudCk7XG59KSA6IF9ibG9ja3MuY29udGVudC5jYWxsKHRoaXMsIHBhcmVudCk7XG59KSAmJiBfX2Jsb2Nrcztcbn0uY2FsbCh0aGlzLCBibG9ja3MpLCBwYXJlbnQpXG59KS5jYWxsKHRoaXMpXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc2l0ZS9wYWdlcy9kb2N1bWVudC9pbmRleC52ZHQiLCJpbXBvcnQgSW50YWN0IGZyb20gJ2ludGFjdCc7XG5pbXBvcnQgdGVtcGxhdGUgZnJvbSAnLi9sYXlvdXQudmR0JztcbmltcG9ydCAnLi9sYXlvdXQuc3R5bCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgSW50YWN0IHtcbiAgICBASW50YWN0LnRlbXBsYXRlKClcbiAgICBzdGF0aWMgdGVtcGxhdGUgPSB0ZW1wbGF0ZTtcblxuICAgIF9tb3VudCgpIHtcbiAgICAgICAgdGhpcy4kYm9yZGVyID0gJCh0aGlzLmVsZW1lbnQpLmZpbmQoJy5ib3JkZXInKTtcbiAgICAgICAgdGhpcy5fdXBkYXRlQm9yZGVyKCk7XG4gICAgfVxuXG4gICAgX3VwZGF0ZUJvcmRlcigpIHtcbiAgICAgICAgY29uc3QgJG5hdiA9ICQodGhpcy5lbGVtZW50KS5maW5kKCcuYWN0aXZlJyk7XG4gICAgICAgIGxldCB3aWR0aCA9IDA7XG4gICAgICAgIGxldCBsZWZ0ID0gMDtcbiAgICAgICAgaWYgKCRuYXYubGVuZ3RoKSB7XG4gICAgICAgICAgICBsZWZ0ID0gJG5hdi5wb3NpdGlvbigpLmxlZnQ7XG4gICAgICAgICAgICB3aWR0aCA9ICRuYXYub3V0ZXJXaWR0aCgpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuJGJvcmRlci5hZGRDbGFzcygndHJhbnNpdGlvbicpO1xuICAgICAgICB0aGlzLiRib3JkZXIuY3NzKHt3aWR0aDogd2lkdGgsIGxlZnQ6IGxlZnR9KTtcbiAgICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zaXRlL3BhZ2VzL2xheW91dC5qcyIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz8/cmVmLS0yLTEhLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0yLTIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWx1cy1sb2FkZXIvaW5kZXguanM/P3JlZi0tMi0zIS4vbGF5b3V0LnN0eWxcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbi8vIFByZXBhcmUgY3NzVHJhbnNmb3JtYXRpb25cbnZhciB0cmFuc2Zvcm07XG5cbnZhciBvcHRpb25zID0ge31cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanNcIikoY29udGVudCwgb3B0aW9ucyk7XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcblx0Ly8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0aWYoIWNvbnRlbnQubG9jYWxzKSB7XG5cdFx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTItMSEuLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTItMiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bHVzLWxvYWRlci9pbmRleC5qcz8/cmVmLS0yLTMhLi9sYXlvdXQuc3R5bFwiLCBmdW5jdGlvbigpIHtcblx0XHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tMi0xIS4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMi0yIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsdXMtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTItMyEuL2xheW91dC5zdHlsXCIpO1xuXHRcdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cdFx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdFx0fSk7XG5cdH1cblx0Ly8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NpdGUvcGFnZXMvbGF5b3V0LnN0eWxcbi8vIG1vZHVsZSBpZCA9IC4vc2l0ZS9wYWdlcy9sYXlvdXQuc3R5bFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgTGluayBmcm9tICdjb21wb25lbnRzL2xpbmsnO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24ob2JqLCBfVmR0LCBibG9ja3MsICRjYWxsZWUpIHtcblxuX1ZkdCB8fCAoX1ZkdCA9IFZkdCk7XG5vYmogfHwgKG9iaiA9IHt9KTtcbmJsb2NrcyB8fCAoYmxvY2tzID0ge30pO1xudmFyIGggPSBfVmR0Lm1pc3MuaCwgaGMgPSBfVmR0Lm1pc3MuaGMsIGh1ID0gX1ZkdC5taXNzLmh1LCB3aWRnZXRzID0gdGhpcyAmJiB0aGlzLndpZGdldHMgfHwge30sIF9ibG9ja3MgPSB7fSwgX19ibG9ja3MgPSB7fSxcbl9fdSA9IF9WZHQudXRpbHMsIGV4dGVuZCA9IF9fdS5leHRlbmQsIF9lID0gX191LmVycm9yLCBfY2xhc3NOYW1lID0gX191LmNsYXNzTmFtZSxcbl9fbyA9IF9fdS5PcHRpb25zLCBfZ2V0TW9kZWwgPSBfX28uZ2V0TW9kZWwsIF9zZXRNb2RlbCA9IF9fby5zZXRNb2RlbCxcbl9zZXRDaGVja2JveE1vZGVsID0gX191LnNldENoZWNrYm94TW9kZWwsIF9kZXRlY3RDaGVja2JveENoZWNrZWQgPSBfX3UuZGV0ZWN0Q2hlY2tib3hDaGVja2VkLFxuX3NldFNlbGVjdE1vZGVsID0gX191LnNldFNlbGVjdE1vZGVsLFxuc2VsZiA9IHRoaXMuZGF0YSwgc2NvcGUgPSBvYmosIEFuaW1hdGUgPSBzZWxmICYmIHNlbGYuQW5pbWF0ZSwgcGFyZW50ID0gKCRjYWxsZWUgfHwge30pLl9zdXBlclxuXG5cbmNvbnN0IG5hdiA9IFtcbiAgICB7XG4gICAgICAgIHRpdGxlOiAn5pWZ56iLJyxcbiAgICAgICAgaHJlZjogJ2RvY3VtZW50J1xuICAgIH0sXG4gICAge1xuICAgICAgICB0aXRsZTogJ0FQSScsXG4gICAgICAgIGhyZWY6ICdhcGknXG4gICAgfSxcbiAgICAvLyB7XG4gICAgICAgIC8vIHRpdGxlOiAn56S65L6LJyxcbiAgICAgICAgLy8gaHJlZjogJ2V4YW1wbGVzJ1xuICAgIC8vIH1cbl07XG5cbnJldHVybiBoKCdkaXYnLCBudWxsLCBbaCgnZGl2JywgbnVsbCwgaCgnaGVhZGVyJywgbnVsbCwgKF9ibG9ja3MuaGVhZGVyID0gZnVuY3Rpb24ocGFyZW50KSB7cmV0dXJuIFtoKExpbmssIHsnY2xhc3NOYW1lJzogJ2xvZ28nLCAnaHJlZic6ICcvJywgJ2NoaWxkcmVuJzogJ0tQQycsICdfY29udGV4dCc6IHRoaXN9KSwgaCgnbmF2JywgbnVsbCwgW19WZHQudXRpbHMubWFwKGZ1bmN0aW9uKCkge3RyeSB7cmV0dXJuIFtuYXYgXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKSwgZnVuY3Rpb24odmFsdWUsIGtleSkge1xucmV0dXJuIGgoTGluaywgeydjbGFzc05hbWUnOiBfY2xhc3NOYW1lKGZ1bmN0aW9uKCkge3RyeSB7cmV0dXJuIFt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWN0aXZlOiB2YWx1ZS5ocmVmID09PSBzY29wZS5uYXZJbmRleFxuICAgICAgICAgICAgICAgICAgICAgICAgfSBdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpKSwgJ2hyZWYnOiBmdW5jdGlvbigpIHt0cnkge3JldHVybiBbYC8ke3ZhbHVlLmhyZWZ9YCBdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpLCAnY2hpbGRyZW4nOiBmdW5jdGlvbigpIHt0cnkge3JldHVybiBbdmFsdWUudGl0bGUgXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKSwgJ19jb250ZXh0JzogdGhpc30pO1xufSwgdGhpcyksIGgoJ2RpdicsIG51bGwsIG51bGwsICdib3JkZXInKV0pXTt9KSAmJiAoX19ibG9ja3MuaGVhZGVyID0gZnVuY3Rpb24ocGFyZW50KSB7XG52YXIgc2VsZiA9IHRoaXM7XG5yZXR1cm4gYmxvY2tzLmhlYWRlciA/IGJsb2Nrcy5oZWFkZXIuY2FsbCh0aGlzLCBmdW5jdGlvbigpIHtcbnJldHVybiBfYmxvY2tzLmhlYWRlci5jYWxsKHNlbGYsIHBhcmVudCk7XG59KSA6IF9ibG9ja3MuaGVhZGVyLmNhbGwodGhpcywgcGFyZW50KTtcbn0pICYmIF9fYmxvY2tzLmhlYWRlci5jYWxsKHRoaXMpKSwgJ2hlYWRlci13cmFwcGVyJyksIGgoJ2RpdicsIG51bGwsIChfYmxvY2tzLmNvbnRlbnQgPSBmdW5jdGlvbihwYXJlbnQpIHtyZXR1cm4gbnVsbDt9KSAmJiAoX19ibG9ja3MuY29udGVudCA9IGZ1bmN0aW9uKHBhcmVudCkge1xudmFyIHNlbGYgPSB0aGlzO1xucmV0dXJuIGJsb2Nrcy5jb250ZW50ID8gYmxvY2tzLmNvbnRlbnQuY2FsbCh0aGlzLCBmdW5jdGlvbigpIHtcbnJldHVybiBfYmxvY2tzLmNvbnRlbnQuY2FsbChzZWxmLCBwYXJlbnQpO1xufSkgOiBfYmxvY2tzLmNvbnRlbnQuY2FsbCh0aGlzLCBwYXJlbnQpO1xufSkgJiYgX19ibG9ja3MuY29udGVudC5jYWxsKHRoaXMpLCAnY29udGVudC13cmFwcGVyJyldLCBfY2xhc3NOYW1lKGZ1bmN0aW9uKCkge3RyeSB7cmV0dXJuIFt7J21haW4td3JhcHBlcic6IHRydWUsIFtzY29wZS5jbGFzc05hbWVdOiBzY29wZS5jbGFzc05hbWV9IF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcykpKVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NpdGUvcGFnZXMvbGF5b3V0LnZkdCJdLCJzb3VyY2VSb290IjoiIn0=