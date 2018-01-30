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

/***/ "./site lazy recursive ^\\.\\/.*\\/index\\.json$":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./components/button/index.json": [
		"./site/components/button/index.json",
		3
	],
	"./components/dialog/index.json": [
		"./site/components/dialog/index.json",
		2
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./site lazy recursive ^\\.\\/.*\\/index\\.json$";
module.exports = webpackAsyncContext;

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

// import axios from 'axios';

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
                var path, data;
                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                path = this.get('path');

                                path = path.slice(1, -1);
                                console.log('../../' + path + '/index.json');
                                _context.next = 5;
                                return __webpack_require__("./site lazy recursive ^\\.\\/.*\\/index\\.json$")("./" + path + '/index.json');

                            case 5:
                                data = _context.sent;

                                console.log(data);
                                this.set(data);

                            case 8:
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
                return h('article', null, [h('div', null, h('div', null, ['\n                    如果你发现文档有问题，请帮忙在\n                    ', h('a', { 'target': '_blank', 'href': function () {
                        try {
                            return ['https://github.com/Javey/javey.github.io/blob/master/intact/docs/' + self.get('title') + '.md'][0];
                        } catch (e) {
                            _e(e);
                        }
                    }.call(this) }, 'github'), '\n                    上修正该文档\n                '], 'edit-link'), 'article-head'), h('div', { 'innerHTML': function () {
                        try {
                            return [self.get('contents')][0];
                        } catch (e) {
                            _e(e);
                        }
                    }.call(this) })]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2J1dHRvbi9ncm91cC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2J1dHRvbi9ncm91cC52ZHQiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9idXR0b24vaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9idXR0b24vaW5kZXguc3R5bCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2J1dHRvbi9pbmRleC52ZHQiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy91dGlscy5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2J1dHRvbi9pbmRleC5zdHlsPzQwMTgiLCJ3ZWJwYWNrOi8vLy4vc2l0ZS9wYWdlcy9kb2N1bWVudC9pbmRleC5zdHlsPzliYTciLCJ3ZWJwYWNrOi8vLy4vc2l0ZS9wYWdlcy9sYXlvdXQuc3R5bD8yMTMyIiwid2VicGFjazovLy8uL3NpdGUgbGF6eSBeXFwuXFwvLipcXC9pbmRleFxcLmpzb24kIiwid2VicGFjazovLy8uL3NpdGUvcGFnZXMvZG9jdW1lbnQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc2l0ZS9wYWdlcy9kb2N1bWVudC9pbmRleC5zdHlsIiwid2VicGFjazovLy8uL3NpdGUvcGFnZXMvZG9jdW1lbnQvaW5kZXgudmR0Iiwid2VicGFjazovLy8uL3NpdGUvcGFnZXMvbGF5b3V0LmpzIiwid2VicGFjazovLy8uL3NpdGUvcGFnZXMvbGF5b3V0LnN0eWwiLCJ3ZWJwYWNrOi8vLy4vc2l0ZS9wYWdlcy9sYXlvdXQudmR0Il0sIm5hbWVzIjpbIkJ1dHRvbkdyb3VwIiwidGVtcGxhdGUiLCJ2ZXJ0aWNhbCIsInJhZGlvIiwidmFsdWUiLCJ1bmRlZmluZWQiLCJwcm9wVHlwZXMiLCJCb29sZWFuIiwib2JqIiwiX1ZkdCIsImJsb2NrcyIsIiRjYWxsZWUiLCJWZHQiLCJoIiwibWlzcyIsImhjIiwiaHUiLCJ3aWRnZXRzIiwiX2Jsb2NrcyIsIl9fYmxvY2tzIiwiX191IiwidXRpbHMiLCJleHRlbmQiLCJfZSIsImVycm9yIiwiX2NsYXNzTmFtZSIsImNsYXNzTmFtZSIsIl9fbyIsIk9wdGlvbnMiLCJfZ2V0TW9kZWwiLCJnZXRNb2RlbCIsIl9zZXRNb2RlbCIsInNldE1vZGVsIiwiX3NldENoZWNrYm94TW9kZWwiLCJzZXRDaGVja2JveE1vZGVsIiwiX2RldGVjdENoZWNrYm94Q2hlY2tlZCIsImRldGVjdENoZWNrYm94Q2hlY2tlZCIsIl9zZXRTZWxlY3RNb2RlbCIsInNldFNlbGVjdE1vZGVsIiwic2VsZiIsImRhdGEiLCJzY29wZSIsIkFuaW1hdGUiLCJwYXJlbnQiLCJfc3VwZXIiLCJnZXQiLCJzdHlsZSIsImNoaWxkcmVuIiwiZmx1aWQiLCJjbGFzc05hbWVPYmoiLCJlIiwiY2FsbCIsIm1hcCIsInZOb2RlIiwidGFnIiwicHJvcHMiLCJfdmFsdWUiLCJCdXR0b24iLCJ0eXBlIiwic2l6ZSIsImljb24iLCJjaXJjbGUiLCJsb2FkaW5nIiwiZGlzYWJsZWQiLCJodG1sVHlwZSIsInRhZ05hbWUiLCJuYW1lIiwicGFyZW50Vk5vZGUiLCJncm91cCIsInNldCIsInRyaWdnZXIiLCJTdHJpbmciLCJGdW5jdGlvbiIsInJlZiIsImtleSIsInJlc3QiLCJocmVmIiwiQXJyYXkiLCJpc0FycmF5IiwiZm9yRWFjaCIsImNoaWxkIiwiaW5kZXgiLCJpbmRleE9mIiwibGVuZ3RoIiwiX29uQ2xpY2siLCJhZGRTdHlsZSIsImtlYmFiQ2FzZSIsInByb3h5RXZlbnQiLCJpc1N0cmluZ09yTnVtYmVyIiwiaXNUZXh0Vk5vZGUiLCJpc1N0cmluZ09yTnVtYmVyTm90RW1wdHkiLCJnZXRUZXh0QnlDaGlsZHJlbiIsImZpbmRQYXJlbnRDb21wb25lbnQiLCJzdHJQYWQiLCJyYW5nZSIsImV4dHJhIiwiT2JqZWN0Iiwia2V5cyIsImpvaW4iLCJ0ZXN0IiwiX2NhY2hlIiwidXBwZXJjYXNlUGF0dGVybiIsIndvcmQiLCJyZXBsYWNlIiwiaXRlbSIsInRvTG93ZXJDYXNlIiwiY29tcG9uZW50IiwibyIsInJldCIsImlzT2JqZWN0IiwiQ29tcG9uZW50IiwiaW5zdGFuY2UiLCJpc1VudGlsIiwic3RyIiwicGFkIiwidG9TdHJpbmciLCJsIiwic3RhcnQiLCJlbmQiLCJhcHBseSIsInYiLCJpIiwicGF0aCIsInNsaWNlIiwiY29uc29sZSIsImxvZyIsIl9vYmoiLCJoYXNPd25Qcm9wZXJ0eSIsImFyZ3VtZW50cyIsImNvbnRlbnQiLCIkYm9yZGVyIiwiZWxlbWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJfdXBkYXRlQm9yZGVyIiwibmF2IiwidGl0bGUiLCJoZWFkZXIiLCJhY3RpdmUiLCJuYXZJbmRleCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUVxQkEsVyxXQUNoQixpQkFBT0MsUUFBUCxFOzs7Ozs7Ozs7OzttQ0FHVTtBQUNQLG1CQUFPO0FBQ0hDLDBCQUFVLEtBRFA7QUFFSEMsdUJBQU8sS0FGSjtBQUdIQyx1QkFBT0M7QUFISixhQUFQO0FBS0g7Ozs0QkFSYztBQUFFO0FBQWtCOzs7OzZCQVU1QkMsUyxHQUFZO0FBQ2ZKLGNBQVVLLE9BREs7QUFFZkosV0FBT0k7QUFGUSxDO2tCQVpGUCxXOzs7Ozs7Ozs7Ozs7Ozs7a0JDSE4sVUFBU1EsR0FBVCxFQUFjQyxJQUFkLEVBQW9CQyxNQUFwQixFQUE0QkMsT0FBNUIsRUFBcUM7QUFBQTs7QUFFcERGLGFBQVNBLE9BQU9HLEdBQWhCO0FBQ0FKLFlBQVFBLE1BQU0sRUFBZDtBQUNBRSxlQUFXQSxTQUFTLEVBQXBCO0FBQ0EsUUFBSUcsSUFBSUosS0FBS0ssSUFBTCxDQUFVRCxDQUFsQjtBQUFBLFFBQXFCRSxLQUFLTixLQUFLSyxJQUFMLENBQVVDLEVBQXBDO0FBQUEsUUFBd0NDLEtBQUtQLEtBQUtLLElBQUwsQ0FBVUUsRUFBdkQ7QUFBQSxRQUEyREMsVUFBVSxRQUFRLEtBQUtBLE9BQWIsSUFBd0IsRUFBN0Y7QUFB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SyxZQUFJSixPQUFPLElBQVg7QUFDQSxlQUFPN0IsT0FBT3VILE9BQVAsR0FBaUJ2SCxPQUFPdUgsT0FBUCxDQUFlOUUsSUFBZixDQUFvQixJQUFwQixFQUEwQixZQUFXO0FBQzdELG1CQUFPakMsUUFBUStHLE9BQVIsQ0FBZ0I5RSxJQUFoQixDQUFxQlosSUFBckIsRUFBMkJJLE1BQTNCLENBQVA7QUFDQyxTQUZ1QixDQUFqQixHQUVGekIsUUFBUStHLE9BQVIsQ0FBZ0I5RSxJQUFoQixDQUFxQixJQUFyQixFQUEyQlIsTUFBM0IsQ0FGTDtBQUdDLEtBTG9FLEtBSy9EeEIsU0FBUzhHLE9BQVQsQ0FBaUI5RSxJQUFqQixDQUFzQixJQUF0QixDQUxnRCxFQUtuQixpQkFMbUIsQ0FUaEMsQ0FBZixFQWNpRDFCLFdBQVcsWUFBVztBQUFDLFlBQUk7QUFBQyxtQkFBTyxtQkFBRSxnQkFBZ0IsSUFBbEIsSUFBeUJnQixNQUFNZixTQUEvQixFQUEyQ2UsTUFBTWYsU0FBakQsR0FBOEQsQ0FBOUQsQ0FBUDtBQUF3RSxTQUE3RSxDQUE4RSxPQUFNd0IsQ0FBTixFQUFTO0FBQUMzQixlQUFHMkIsQ0FBSDtBQUFNO0FBQUMsS0FBM0csQ0FBNEdDLElBQTVHLENBQWlILElBQWpILENBQVgsQ0FkakQsQ0FBUDtBQWVDLEM7O0FBNUNEIiwiZmlsZSI6InN0YXRpYy9jaHVuay9mMmMyNTI4MTlhZDNhY2I4YTNkYS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBJbnRhY3QgZnJvbSAnaW50YWN0JztcbmltcG9ydCB0ZW1wbGF0ZSBmcm9tICcuL2dyb3VwLnZkdCc7XG5pbXBvcnQgJy4vaW5kZXguc3R5bCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJ1dHRvbkdyb3VwIGV4dGVuZHMgSW50YWN0IHtcbiAgICBASW50YWN0LnRlbXBsYXRlKClcbiAgICBnZXQgdGVtcGxhdGUoKSB7IHJldHVybiB0ZW1wbGF0ZTsgfVxuXG4gICAgZGVmYXVsdHMoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB2ZXJ0aWNhbDogZmFsc2UsXG4gICAgICAgICAgICByYWRpbzogZmFsc2UsXG4gICAgICAgICAgICB2YWx1ZTogdW5kZWZpbmVkLFxuICAgICAgICB9O1xuICAgIH1cblxuICAgIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgICAgIHZlcnRpY2FsOiBCb29sZWFuLFxuICAgICAgICByYWRpbzogQm9vbGVhbixcbiAgICB9XG59XG5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvYnV0dG9uL2dyb3VwLmpzIiwiaW1wb3J0IEJ1dHRvbiBmcm9tICcuLyc7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihvYmosIF9WZHQsIGJsb2NrcywgJGNhbGxlZSkge1xuXG5fVmR0IHx8IChfVmR0ID0gVmR0KTtcbm9iaiB8fCAob2JqID0ge30pO1xuYmxvY2tzIHx8IChibG9ja3MgPSB7fSk7XG52YXIgaCA9IF9WZHQubWlzcy5oLCBoYyA9IF9WZHQubWlzcy5oYywgaHUgPSBfVmR0Lm1pc3MuaHUsIHdpZGdldHMgPSB0aGlzICYmIHRoaXMud2lkZ2V0cyB8fCB7fSwgX2Jsb2NrcyA9IHt9LCBfX2Jsb2NrcyA9IHt9LFxuX191ID0gX1ZkdC51dGlscywgZXh0ZW5kID0gX191LmV4dGVuZCwgX2UgPSBfX3UuZXJyb3IsIF9jbGFzc05hbWUgPSBfX3UuY2xhc3NOYW1lLFxuX19vID0gX191Lk9wdGlvbnMsIF9nZXRNb2RlbCA9IF9fby5nZXRNb2RlbCwgX3NldE1vZGVsID0gX19vLnNldE1vZGVsLFxuX3NldENoZWNrYm94TW9kZWwgPSBfX3Uuc2V0Q2hlY2tib3hNb2RlbCwgX2RldGVjdENoZWNrYm94Q2hlY2tlZCA9IF9fdS5kZXRlY3RDaGVja2JveENoZWNrZWQsXG5fc2V0U2VsZWN0TW9kZWwgPSBfX3Uuc2V0U2VsZWN0TW9kZWwsXG5zZWxmID0gdGhpcy5kYXRhLCBzY29wZSA9IG9iaiwgQW5pbWF0ZSA9IHNlbGYgJiYgc2VsZi5BbmltYXRlLCBwYXJlbnQgPSAoJGNhbGxlZSB8fCB7fSkuX3N1cGVyXG5cblxuY29uc3Qge1xuICAgIGNsYXNzTmFtZSwgdmVydGljYWwsIHN0eWxlLCBcbiAgICBjaGlsZHJlbiwgcmFkaW8sIHZhbHVlLCBmbHVpZFxufSA9IHNlbGYuZ2V0KCk7XG5cbmNvbnN0IGNsYXNzTmFtZU9iaiA9IHtcbiAgICAnay1idG5zJzogdHJ1ZSxcbiAgICAnay12ZXJ0aWNhbCc6IHZlcnRpY2FsLFxuICAgIFtjbGFzc05hbWVdOiBjbGFzc05hbWUsXG4gICAgJ2stZmx1aWQnOiBmbHVpZCxcbn07XG5cbnJldHVybiBoKCdkaXYnLCB7J3N0eWxlJzogZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW3N0eWxlIF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcyl9LCBmdW5jdGlvbigpIHt0cnkge3JldHVybiBbcmFkaW8gPyBjaGlsZHJlbi5tYXAodk5vZGUgPT4ge1xuICAgICAgICBpZiAodk5vZGUudGFnID09PSBCdXR0b24pIHtcbiAgICAgICAgICAgIHZOb2RlLnByb3BzLl92YWx1ZSA9IHZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB2Tm9kZTtcbiAgICB9KSA6IGNoaWxkcmVuXG5dWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpLCBfY2xhc3NOYW1lKGZ1bmN0aW9uKCkge3RyeSB7cmV0dXJuIFtjbGFzc05hbWVPYmogXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKSkpXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9idXR0b24vZ3JvdXAudmR0IiwiaW1wb3J0IEludGFjdCBmcm9tICdpbnRhY3QnO1xuaW1wb3J0IHRlbXBsYXRlIGZyb20gJy4vaW5kZXgudmR0JztcbmltcG9ydCBHcm91cCBmcm9tICcuL2dyb3VwJztcbmltcG9ydCAnLi9pbmRleC5zdHlsJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQnV0dG9uIGV4dGVuZHMgSW50YWN0IHtcbiAgICBASW50YWN0LnRlbXBsYXRlKClcbiAgICBnZXQgdGVtcGxhdGUoKSB7IHJldHVybiB0ZW1wbGF0ZTsgfVxuXG4gICAgZGVmYXVsdHMoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB0eXBlOiAnZGVmYXVsdCcsIC8vIHByaW1hcnkgfCB3YXJuaW5nIHwgZGFuZ2VyXG4gICAgICAgICAgICBzaXplOiAnZGVmYXVsdCcsIC8vIHNtYWxsIHwgbWluaVxuICAgICAgICAgICAgaWNvbjogZmFsc2UsXG4gICAgICAgICAgICBjaXJjbGU6IGZhbHNlLFxuICAgICAgICAgICAgbG9hZGluZzogZmFsc2UsXG4gICAgICAgICAgICBkaXNhYmxlZDogZmFsc2UsXG4gICAgICAgICAgICBmbHVpZDogZmFsc2UsXG4gICAgICAgICAgICBodG1sVHlwZTogJ2J1dHRvbicsXG4gICAgICAgICAgICB0YWdOYW1lOiAnYnV0dG9uJyxcbiAgICAgICAgICAgIHZhbHVlOiB1bmRlZmluZWQsXG4gICAgICAgICAgICBuYW1lOiB1bmRlZmluZWQsXG5cbiAgICAgICAgICAgIF92YWx1ZTogdW5kZWZpbmVkLFxuICAgICAgICB9O1xuICAgIH1cblxuICAgIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgc2l6ZTogU3RyaW5nLFxuICAgICAgICBpY29uOiBCb29sZWFuLFxuICAgICAgICBjaXJjbGU6IEJvb2xlYW4sXG4gICAgICAgIGxvYWRpbmc6IEJvb2xlYW4sXG4gICAgICAgIGRpc2FibGVkOiBCb29sZWFuLFxuICAgICAgICBmbHVpZDogQm9vbGVhbixcbiAgICAgICAgaHRtbFR5cGU6IFN0cmluZyxcbiAgICAgICAgdGFnTmFtZTogW1N0cmluZywgRnVuY3Rpb25dLFxuICAgICAgICBuYW1lOiBTdHJpbmcsXG4gICAgfVxuXG4gICAgX21vdW50KCkge1xuICAgICAgICBsZXQgcGFyZW50Vk5vZGUgPSB0aGlzLnBhcmVudFZOb2RlO1xuICAgICAgICBpZiAocGFyZW50Vk5vZGUpIHtcbiAgICAgICAgICAgIHBhcmVudFZOb2RlID0gcGFyZW50Vk5vZGUucGFyZW50Vk5vZGU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHBhcmVudFZOb2RlICYmIHBhcmVudFZOb2RlLnRhZyA9PT0gR3JvdXApIHtcbiAgICAgICAgICAgIHRoaXMuZ3JvdXAgPSBwYXJlbnRWTm9kZS5jaGlsZHJlbjtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHNob3dMb2FkaW5nKCkge1xuICAgICAgICB0aGlzLnNldCgnbG9hZGluZycsIHRydWUpO1xuICAgIH1cblxuICAgIGhpZGVMb2FkaW5nKCkge1xuICAgICAgICB0aGlzLnNldCgnbG9hZGluZycsIGZhbHNlKTtcbiAgICB9XG5cbiAgICBkaXNhYmxlKCkge1xuICAgICAgICB0aGlzLnNldCgnZGlzYWJsZWQnLCB0cnVlKTtcbiAgICB9XG5cbiAgICBlbmFibGUoKSB7XG4gICAgICAgIHRoaXMuc2V0KCdkaXNhYmxlZCcsIGZhbHNlKTtcbiAgICB9XG5cbiAgICBfb25DbGljayhlKSB7XG4gICAgICAgIGlmICh0aGlzLmdyb3VwKSB7XG4gICAgICAgICAgICB0aGlzLmdyb3VwLnNldCgndmFsdWUnLCB0aGlzLmdldCgndmFsdWUnKSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy50cmlnZ2VyKCdjbGljaycsIGUpO1xuICAgIH1cbn1cblxuZXhwb3J0IHtCdXR0b24sIEdyb3VwIGFzIEJ1dHRvbkdyb3VwfTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvYnV0dG9uL2luZGV4LmpzIiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTItMSEuLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTItMiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bHVzLWxvYWRlci9pbmRleC5qcz8/cmVmLS0yLTMhLi9pbmRleC5zdHlsXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4vLyBQcmVwYXJlIGNzc1RyYW5zZm9ybWF0aW9uXG52YXIgdHJhbnNmb3JtO1xuXG52YXIgb3B0aW9ucyA9IHt9XG5vcHRpb25zLnRyYW5zZm9ybSA9IHRyYW5zZm9ybVxuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG5cdC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdGlmKCFjb250ZW50LmxvY2Fscykge1xuXHRcdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz8/cmVmLS0yLTEhLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0yLTIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWx1cy1sb2FkZXIvaW5kZXguanM/P3JlZi0tMi0zIS4vaW5kZXguc3R5bFwiLCBmdW5jdGlvbigpIHtcblx0XHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tMi0xIS4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMi0yIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsdXMtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTItMyEuL2luZGV4LnN0eWxcIik7XG5cdFx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblx0XHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0XHR9KTtcblx0fVxuXHQvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vY29tcG9uZW50cy9idXR0b24vaW5kZXguc3R5bFxuLy8gbW9kdWxlIGlkID0gLi9jb21wb25lbnRzL2J1dHRvbi9pbmRleC5zdHlsXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7aXNTdHJpbmdPck51bWJlck5vdEVtcHR5fSBmcm9tICcuLi91dGlscyc7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihvYmosIF9WZHQsIGJsb2NrcywgJGNhbGxlZSkge1xuXG5fVmR0IHx8IChfVmR0ID0gVmR0KTtcbm9iaiB8fCAob2JqID0ge30pO1xuYmxvY2tzIHx8IChibG9ja3MgPSB7fSk7XG52YXIgaCA9IF9WZHQubWlzcy5oLCBoYyA9IF9WZHQubWlzcy5oYywgaHUgPSBfVmR0Lm1pc3MuaHUsIHdpZGdldHMgPSB0aGlzICYmIHRoaXMud2lkZ2V0cyB8fCB7fSwgX2Jsb2NrcyA9IHt9LCBfX2Jsb2NrcyA9IHt9LFxuX191ID0gX1ZkdC51dGlscywgZXh0ZW5kID0gX191LmV4dGVuZCwgX2UgPSBfX3UuZXJyb3IsIF9jbGFzc05hbWUgPSBfX3UuY2xhc3NOYW1lLFxuX19vID0gX191Lk9wdGlvbnMsIF9nZXRNb2RlbCA9IF9fby5nZXRNb2RlbCwgX3NldE1vZGVsID0gX19vLnNldE1vZGVsLFxuX3NldENoZWNrYm94TW9kZWwgPSBfX3Uuc2V0Q2hlY2tib3hNb2RlbCwgX2RldGVjdENoZWNrYm94Q2hlY2tlZCA9IF9fdS5kZXRlY3RDaGVja2JveENoZWNrZWQsXG5fc2V0U2VsZWN0TW9kZWwgPSBfX3Uuc2V0U2VsZWN0TW9kZWwsXG5zZWxmID0gdGhpcy5kYXRhLCBzY29wZSA9IG9iaiwgQW5pbWF0ZSA9IHNlbGYgJiYgc2VsZi5BbmltYXRlLCBwYXJlbnQgPSAoJGNhbGxlZSB8fCB7fSkuX3N1cGVyXG5cblxubGV0IHtcbiAgICB0eXBlLCBjbGFzc05hbWUsIHNpemUsIGljb24sIGNpcmNsZSwgcmVmLCBrZXksXG4gICAgdGFnTmFtZSwgaHRtbFR5cGUsIGZsdWlkLCBjaGlsZHJlbiwgbG9hZGluZyxcbiAgICB2YWx1ZSwgX3ZhbHVlLCBuYW1lLCAuLi5yZXN0XG59ID0gc2VsZi5nZXQoKTtcblxuY29uc3QgY2xhc3NOYW1lT2JqID0ge1xuICAgICdrLWJ0bic6IHRydWUsXG4gICAgW2BrLSR7dHlwZX1gXTogdHlwZSAhPT0gJ2RlZmF1bHQnLFxuICAgICdrLWJ0bi1pY29uJzogaWNvbixcbiAgICBbYGstJHtzaXplfWBdOiBzaXplICE9PSAnZGVmYXVsdCcsXG4gICAgW2NsYXNzTmFtZV06IGNsYXNzTmFtZSwgXG4gICAgJ2stY2lyY2xlJzogY2lyY2xlLFxuICAgICdrLWxvYWRpbmcnOiBsb2FkaW5nLFxuICAgICdrLWZsdWlkJzogZmx1aWQsXG4gICAgJ2stYWN0aXZlJzogdmFsdWUgIT09IHVuZGVmaW5lZCAmJiB2YWx1ZSA9PT0gX3ZhbHVlLFxufTtcblxuY29uc3QgQnV0dG9uID0gcHJvcHMgPT4ge1xuICAgIGlmIChwcm9wcy5ocmVmKSB7XG4gICAgICAgIHRhZ05hbWUgPSAnYSc7XG4gICAgfVxuICAgIGlmICh0YWdOYW1lID09PSAnYnV0dG9uJykge1xuICAgICAgICAvLyBzZXQgdHlwZSBvZiBodG1sIGJ1dHRvblxuICAgICAgICBwcm9wcy50eXBlID0gaHRtbFR5cGU7XG4gICAgfVxuICAgIC8vIGRpc2FibGUgYnV0dG9uIHdoZW4gbG9hZGluZ1xuICAgIGlmIChsb2FkaW5nKSBwcm9wcy5kaXNhYmxlZCA9IHRydWU7XG4gICAgcmV0dXJuIGgodGFnTmFtZSwgcHJvcHMsIHByb3BzLmNoaWxkcmVuKTtcbn07XG5cbi8vIGhhY2sgZm9yIGxvYWRpbmcgdHJhbnNpdGlvbiBvZiB3aWR0aFxuaWYgKCFpY29uICYmIEFycmF5LmlzQXJyYXkoY2hpbGRyZW4pKSB7XG4gICAgY2hpbGRyZW4uZm9yRWFjaCgoY2hpbGQsIGluZGV4KSA9PiB7XG4gICAgICAgIGlmIChjaGlsZCkge1xuICAgICAgICAgICAgaWYgKGNoaWxkLnR5cGUgPT09IDEgfHwgaXNTdHJpbmdPck51bWJlck5vdEVtcHR5KGNoaWxkKSkge1xuICAgICAgICAgICAgICAgIC8vIGlzIGEgdGV4dCBub2RlXG4gICAgICAgICAgICAgICAgLy8gd3JhcCB0ZXh0IG5vZGUgd2l0aCBzcGFuXG4gICAgICAgICAgICAgICAgY2hpbGRyZW5baW5kZXhdID0gaCgnc3BhbicsIG51bGwsIGZ1bmN0aW9uKCkge3RyeSB7cmV0dXJuIFtjaGlsZCBdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gd2hldGhlciB0aGUgaWNvbiBpcyBvbiB0aGUgbGVmdCBzaWRlIG9yIHJpZ2h0XG4gICAgICAgICAgICBpZiAoaW5kZXggPT09IDApIHtcbiAgICAgICAgICAgICAgICBpZiAoY2hpbGQuY2xhc3NOYW1lICYmIGNoaWxkLmNsYXNzTmFtZS5pbmRleE9mKCdpY29uJykgPiAtMSkge1xuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWVPYmpbJ2staWNvbi1sZWZ0J10gPSB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSBpZiAoaW5kZXggPT09IGNoaWxkcmVuLmxlbmd0aCAtIDEpIHtcbiAgICAgICAgICAgICAgICBpZiAoY2hpbGQuY2xhc3NOYW1lICYmIGNoaWxkLmNsYXNzTmFtZS5pbmRleE9mKCdpY29uJykgPiAtMSkge1xuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWVPYmpbJ2staWNvbi1yaWdodCddID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KTtcbn0gZWxzZSBpZiAoaXNTdHJpbmdPck51bWJlck5vdEVtcHR5KGNoaWxkcmVuKSkge1xuICAgIC8vIHdyYXAgdGV4dCBub2RlIHdpdGggc3BhblxuICAgIGNoaWxkcmVuID0gaCgnc3BhbicsIG51bGwsIGZ1bmN0aW9uKCkge3RyeSB7cmV0dXJuIFtjaGlsZHJlbiBdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpKVxufVxuXG5yZXR1cm4gaChCdXR0b24sIHsnY2xhc3NOYW1lJzogX2NsYXNzTmFtZShmdW5jdGlvbigpIHt0cnkge3JldHVybiBbY2xhc3NOYW1lT2JqIF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcykpLCAuLi5mdW5jdGlvbigpIHt0cnkge3JldHVybiBbcmVzdCBdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpLCAnZXYtY2xpY2snOiBmdW5jdGlvbigpIHt0cnkge3JldHVybiBbc2VsZi5fb25DbGljayBdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpLCAnY2hpbGRyZW4nOiBbJ1xcbiAgICAnLCBmdW5jdGlvbigpIHt0cnkge3JldHVybiBbbG9hZGluZyA/IFxuICAgICAgICBjbGFzc05hbWVPYmpbJ2staWNvbi1yaWdodCddID9cbiAgICAgICAgICAgIFtjaGlsZHJlbiwgaCgnaScsIG51bGwsIG51bGwsICdrLWljb24gaW9uLWxvYWQtYyBpY29uLWxvYWRpbmcnKV0gOlxuICAgICAgICAgICAgW2goJ2knLCBudWxsLCBudWxsLCAnay1pY29uIGlvbi1sb2FkLWMgaWNvbi1sb2FkaW5nJyksIGNoaWxkcmVuXSA6XG4gICAgICAgIGNoaWxkcmVuIFxuICAgIF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcyksICdcXG4gICAgJywgZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW3ZhbHVlICE9PSB1bmRlZmluZWQgXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKSA/IGgoJ2lucHV0Jywgeyd0eXBlJzogJ3JhZGlvJywgJ25hbWUnOiBmdW5jdGlvbigpIHt0cnkge3JldHVybiBbbmFtZSBdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpLCAnY2hlY2tlZCc6IGZ1bmN0aW9uKCkge3RyeSB7cmV0dXJuIFt2YWx1ZSA9PT0gX3ZhbHVlIF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcyl9KSA6IHVuZGVmaW5lZF0sICdfY29udGV4dCc6IHRoaXN9KVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvYnV0dG9uL2luZGV4LnZkdCIsImltcG9ydCBJbnRhY3QgZnJvbSAnaW50YWN0JztcblxuY29uc3QgdXRpbHMgPSBJbnRhY3QudXRpbHM7XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRTdHlsZShzdHlsZSwgZXh0cmEpIHtcbiAgICBpZiAoIXN0eWxlKSByZXR1cm4gZXh0cmE7XG4gICAgaWYgKCFleHRyYSkgcmV0dXJuIHN0eWxlO1xuICAgIGlmICh0eXBlb2Ygc3R5bGUgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIGV4dHJhID0gT2JqZWN0LmtleXMoZXh0cmEpLm1hcChrZXkgPT4gYCR7a2ViYWJDYXNlKGtleSl9OiAke2V4dHJhW2tleV19YCkuam9pbignOycpO1xuICAgICAgICBzdHlsZSA9IGAke3N0eWxlfSR7IXN0eWxlIHx8IC87XFxzKiQvLnRlc3Qoc3R5bGUpID8gJycgOiAnOyd9JHtleHRyYX1gO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHN0eWxlID0gey4uLnN0eWxlLCAuLi5leHRyYX07XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0eWxlO1xufVxuXG5jb25zdCBfY2FjaGUgPSB7fTtcbmNvbnN0IHVwcGVyY2FzZVBhdHRlcm4gPSAvW0EtWl0vZztcbmV4cG9ydCBmdW5jdGlvbiBrZWJhYkNhc2Uod29yZCkge1xuICAgIGlmICghX2NhY2hlW3dvcmRdKSB7XG4gICAgICAgIF9jYWNoZVt3b3JkXSA9IHdvcmQucmVwbGFjZSh1cHBlcmNhc2VQYXR0ZXJuLCAoaXRlbSkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIGAtJHtpdGVtLnRvTG93ZXJDYXNlKCl9YDtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiBfY2FjaGVbd29yZF07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwcm94eUV2ZW50KGNvbXBvbmVudCwgbmFtZSkge1xuICAgIHJldHVybiAoZSkgPT4gY29tcG9uZW50LnRyaWdnZXIobmFtZSwgZSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc1N0cmluZ09yTnVtYmVyKG8pIHtcbiAgICBjb25zdCB0eXBlID0gdHlwZW9mIG87XG4gICAgcmV0dXJuIHR5cGUgPT09ICdzdHJpbmcnIHx8IHR5cGUgPT09ICdudW1iZXInO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNUZXh0Vk5vZGUobykge1xuICAgIHJldHVybiBpc1N0cmluZ09yTnVtYmVyKG8pIHx8IG8udHlwZSA9PT0gMTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzU3RyaW5nT3JOdW1iZXJOb3RFbXB0eShvKSB7XG4gICAgY29uc3QgdHlwZSA9IHR5cGVvZiBvO1xuICAgIHJldHVybiB0eXBlID09PSAnc3RyaW5nJyAmJiAhL15cXHMrJC8udGVzdChvKSB8fCB0eXBlID09PSAnbnVtYmVyJztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFRleHRCeUNoaWxkcmVuKGNoaWxkcmVuKSB7XG4gICAgbGV0IHJldCA9ICcnO1xuICAgIGlmIChBcnJheS5pc0FycmF5KGNoaWxkcmVuKSkge1xuICAgICAgICBjaGlsZHJlbi5mb3JFYWNoKHZOb2RlID0+IHtcbiAgICAgICAgICAgIGlmIChpc1RleHRWTm9kZSh2Tm9kZSkpIHtcbiAgICAgICAgICAgICAgICByZXQgKz0gdk5vZGUuY2hpbGRyZW47XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0gZWxzZSBpZiAoaXNTdHJpbmdPck51bWJlcihjaGlsZHJlbikpIHtcbiAgICAgICAgcmV0ICs9IGNoaWxkcmVuO1xuICAgIH1cblxuICAgIHJldHVybiByZXQ7XG59XG5cblxuZXhwb3J0IGNvbnN0IGlzT2JqZWN0ID0gdXRpbHMuaXNPYmplY3Q7XG5cbmV4cG9ydCBmdW5jdGlvbiBmaW5kUGFyZW50Q29tcG9uZW50KENvbXBvbmVudCwgaW5zdGFuY2UsIGlzVW50aWwpIHtcbiAgICBsZXQgcmV0O1xuICAgIGxldCBwYXJlbnQgPSBpbnN0YW5jZS5wYXJlbnRWTm9kZTtcbiAgICB3aGlsZSAocGFyZW50KSB7XG4gICAgICAgIGlmIChwYXJlbnQudGFnID09PSBDb21wb25lbnQpIHtcbiAgICAgICAgICAgIHJldCA9IHBhcmVudC5jaGlsZHJlbjsgICAgICAgIFxuICAgICAgICAgICAgaWYgKGlzVW50aWwpIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIHBhcmVudCA9IHBhcmVudC5wYXJlbnRWTm9kZTtcbiAgICB9XG4gICAgcmV0dXJuIHJldDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN0clBhZChzdHIsIGxlbmd0aCwgcGFkKSB7XG4gICAgc3RyID0gc3RyLnRvU3RyaW5nKCk7XG4gICAgcGFkID0gcGFkID09PSB1bmRlZmluZWQgPyAnMCcgOiBwYWQ7XG4gICAgdmFyIGwgPSBzdHIubGVuZ3RoO1xuICAgIGlmIChsIDwgbGVuZ3RoKSB7XG4gICAgICAgIHN0ciA9IG5ldyBBcnJheShsZW5ndGggLSBsICsgMSkuam9pbihwYWQpICsgc3RyO1xuICAgIH1cbiAgICByZXR1cm4gc3RyO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmFuZ2Uoc3RhcnQsIGVuZCkge1xuICAgIHJldHVybiBBcnJheS5hcHBseShudWxsLCB7bGVuZ3RoOiBlbmQgLSBzdGFydCArIDF9KVxuICAgICAgICAubWFwKCh2LCBpKSA9PiBpICsgc3RhcnQpO1xufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy91dGlscy5qcyIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikodW5kZWZpbmVkKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5rLWJ0biB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBoZWlnaHQ6IDIuNTcxNDI4NTcxNDI4NTcycmVtO1xcbiAgbGluZS1oZWlnaHQ6IGNhbGMoMi41NzE0Mjg1NzE0Mjg1NzJyZW0gLSAycHgpO1xcbiAgcGFkZGluZzogMCAyLjI4NTcxNDI4NTcxNDI4NmVtO1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGNvbG9yOiAjNTk1OTU5O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGJvcmRlci1yYWRpdXM6IDJweDtcXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuMjVzIGVhc2UtaW4tb3V0O1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuMjVzIGVhc2UtaW4tb3V0O1xcbiAgYm9yZGVyOiAxcHggc29saWQgI2Q5ZDlkOTtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG59XFxuLmstYnRuOmhvdmVyIHtcXG4gIGJvcmRlci1jb2xvcjogIzI4OWFmNDtcXG4gIGNvbG9yOiAjMjg5YWY0O1xcbn1cXG4uay1idG4uay1wcmltYXJ5IHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMyODlhZjQ7XFxuICBjb2xvcjogI2ZmZjtcXG4gIGJvcmRlci1jb2xvcjogIzI4OWFmNDtcXG59XFxuLmstYnRuLmstcHJpbWFyeTpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTNhZWY2O1xcbiAgYm9yZGVyLWNvbG9yOiAjNTNhZWY2O1xcbn1cXG4uay1idG4uay13YXJuaW5nIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZjljMjg7XFxuICBjb2xvcjogI2ZmZjtcXG4gIGJvcmRlci1jb2xvcjogI2ZmOWMyODtcXG59XFxuLmstYnRuLmstd2FybmluZzpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZiMDUzO1xcbiAgYm9yZGVyLWNvbG9yOiAjZmZiMDUzO1xcbn1cXG4uay1idG4uay1kYW5nZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZlNDQ0NDtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgYm9yZGVyLWNvbG9yOiAjZmU0NDQ0O1xcbn1cXG4uay1idG4uay1kYW5nZXI6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZlNjk2OTtcXG4gIGJvcmRlci1jb2xvcjogI2ZlNjk2OTtcXG59XFxuLmstYnRuLmstYWN0aXZlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMyODlhZjQ7XFxuICBjb2xvcjogI2ZmZjtcXG4gIGJvcmRlci1jb2xvcjogIzI4OWFmNDtcXG59XFxuLmstYnRuLmstYWN0aXZlOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM1M2FlZjY7XFxuICBib3JkZXItY29sb3I6ICM1M2FlZjY7XFxufVxcbi5rLWJ0bltkaXNhYmxlZF0sXFxuLmstYnRuW2Rpc2FibGVkXTpob3ZlciB7XFxuICBjb2xvcjogIzk5OTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNkOWQ5ZDk7XFxuICBib3JkZXItY29sb3I6ICNkOWQ5ZDk7XFxuICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xcbn1cXG4uay1idG4uay1ub25lLFxcbi5rLWJ0bi5rLW5vbmU6aG92ZXIge1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxufVxcbi5rLWJ0bi5rLXNtYWxsIHtcXG4gIGZvbnQtc2l6ZTogMC44NTcxNDI4NTcxNDI4NTdyZW07XFxuICBoZWlnaHQ6IDIuMTQyODU3MTQyODU3MTQzcmVtO1xcbiAgcGFkZGluZzogMCAxLjA3MTQyODU3MTQyODU3MXJlbTtcXG4gIGxpbmUtaGVpZ2h0OiBjYWxjKDIuMTQyODU3MTQyODU3MTQzcmVtIC0gMnB4KTtcXG59XFxuLmstYnRuLmstc21hbGwuay1idG4taWNvbiB7XFxuICB3aWR0aDogMi4xNDI4NTcxNDI4NTcxNDNyZW07XFxufVxcbi5rLWJ0bi5rLW1pbmkge1xcbiAgZm9udC1zaXplOiAwLjg1NzE0Mjg1NzE0Mjg1N3JlbTtcXG4gIGhlaWdodDogMS44NTcxNDI4NTcxNDI4NTdyZW07XFxuICBwYWRkaW5nOiAwIDAuNzE0Mjg1NzE0Mjg1NzE0cmVtO1xcbiAgbGluZS1oZWlnaHQ6IGNhbGMoMS44NTcxNDI4NTcxNDI4NTdyZW0gLSAycHgpO1xcbn1cXG4uay1idG4uay1taW5pLmstYnRuLWljb24ge1xcbiAgd2lkdGg6IDEuODU3MTQyODU3MTQyODU3cmVtO1xcbn1cXG4uay1idG4gLmstaWNvbiB7XFxuICBmb250LXNpemU6IGluaGVyaXQ7XFxufVxcbi5rLWJ0biAuay1pY29uOmJlZm9yZSB7XFxuICBmb250LXNpemU6IGluaGVyaXQ7XFxufVxcbi5rLWJ0biAuay1pY29uICsgc3BhbiB7XFxuICBtYXJnaW4tbGVmdDogMC4zNTcxNDI4NTcxNDI4NTdlbTtcXG59XFxuLmstYnRuLmstaWNvbi1yaWdodCAuay1pY29uIHtcXG4gIG1hcmdpbi1sZWZ0OiAwLjM1NzE0Mjg1NzE0Mjg1N2VtO1xcbn1cXG4uay1idG4uay1idG4taWNvbiB7XFxuICB3aWR0aDogMi41NzE0Mjg1NzE0Mjg1NzJyZW07XFxuICBwYWRkaW5nOiAwO1xcbn1cXG4uay1idG4uay1idG4taWNvbiAuay1pY29uIHtcXG4gIG1hcmdpbjogMDtcXG4gIGZvbnQtc2l6ZTogMS4xNDI4NTcxNDI4NTcxNDNlbTtcXG59XFxuLmstYnRuLmstZmx1aWQge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG4uay1idG4uay1jaXJjbGUge1xcbiAgYm9yZGVyLXJhZGl1czogMS4yODU3MTQyODU3MTQyODZyZW07XFxufVxcbi5rLWJ0bi5rLWxvYWRpbmcsXFxuLmstYnRuLmstbG9hZGluZzpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbiAgY29sb3I6ICNhY2FjYWM7XFxuICBib3JkZXItY29sb3I6ICNlY2VjZWM7XFxufVxcbi5rLWJ0bi5rLWxvYWRpbmcgLmstaWNvbjpub3QoLmljb24tbG9hZGluZykge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuLmstYnRuLmstbG9hZGluZy5rLXByaW1hcnksXFxuLmstYnRuLmstbG9hZGluZy5rLXByaW1hcnk6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzk0Y2RmOTtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgYm9yZGVyLWNvbG9yOiAjOTRjZGY5O1xcbn1cXG4uay1idG4uay1sb2FkaW5nLmstd2FybmluZyxcXG4uay1idG4uay1sb2FkaW5nLmstd2FybmluZzpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZjZDkzO1xcbiAgY29sb3I6ICNmZmY7XFxuICBib3JkZXItY29sb3I6ICNmZmNkOTM7XFxufVxcbi5rLWJ0bi5rLWxvYWRpbmcuay1kYW5nZXIsXFxuLmstYnRuLmstbG9hZGluZy5rLWRhbmdlcjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmVhMmEyO1xcbiAgY29sb3I6ICNmZmY7XFxuICBib3JkZXItY29sb3I6ICNmZWEyYTI7XFxufVxcbi5rLWJ0bi5rLWxvYWRpbmcuay1hY3RpdmUsXFxuLmstYnRuLmstbG9hZGluZy5rLWFjdGl2ZTpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTRjZGY5O1xcbiAgY29sb3I6ICNmZmY7XFxuICBib3JkZXItY29sb3I6ICM5NGNkZjk7XFxufVxcbi5rLWJ0bi5rLWxvYWRpbmc6bm90KC5rLWJ0bi1pY29uKTpub3QoLmstaWNvbi1sZWZ0KTpub3QoLmstaWNvbi1yaWdodCkge1xcbiAgcGFkZGluZy1sZWZ0OiAzLjI4NTcxNDI4NTcxNDI4NmVtO1xcbn1cXG4uay1idG4uay1sb2FkaW5nOm5vdCguay1idG4taWNvbik6bm90KC5rLWljb24tbGVmdCk6bm90KC5rLWljb24tcmlnaHQpIC5pY29uLWxvYWRpbmcge1xcbiAgbWFyZ2luLWxlZnQ6IC0xZW07XFxufVxcbi5rLWJ0bi5rLWxvYWRpbmc6bm90KC5rLWJ0bi1pY29uKTpub3QoLmstaWNvbi1sZWZ0KTpub3QoLmstaWNvbi1yaWdodCkuay1zbWFsbCB7XFxuICBwYWRkaW5nLWxlZnQ6IDIuMDcxNDI4NTcxNDI4NTcxZW07XFxufVxcbi5rLWJ0bi5rLWxvYWRpbmc6bm90KC5rLWJ0bi1pY29uKTpub3QoLmstaWNvbi1sZWZ0KTpub3QoLmstaWNvbi1yaWdodCkuay1taW5pIHtcXG4gIHBhZGRpbmctbGVmdDogMS43MTQyODU3MTQyODU3MTRlbTtcXG59XFxuLmstYnRucyB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcbn1cXG4uay1idG5zIC5rLWJ0biB7XFxuICBtYXJnaW46IDAgIWltcG9ydGFudDtcXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxufVxcbi5rLWJ0bnMgLmstYnRuOmhvdmVyIHtcXG4gIHotaW5kZXg6IDE7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcbi5rLWJ0bnMuay1mbHVpZCB7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuLmstYnRuczpub3QoLmstdmVydGljYWwpID4gLmstYnRuOm5vdCg6Zmlyc3Qtb2YtdHlwZSkge1xcbiAgbWFyZ2luLWxlZnQ6IC0xcHggIWltcG9ydGFudDtcXG59XFxuLmstYnRuczpub3QoLmstdmVydGljYWwpID4gLmstYnRuOm5vdCg6Zmlyc3Qtb2YtdHlwZSk6bm90KDpsYXN0LW9mLXR5cGUpIHtcXG4gIGJvcmRlci1yYWRpdXM6IDA7XFxufVxcbi5rLWJ0bnM6bm90KC5rLXZlcnRpY2FsKSA+IC5rLWJ0bjpub3QoOm9ubHktb2YtdHlwZSk6Zmlyc3Qtb2YtdHlwZSB7XFxuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMDtcXG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAwO1xcbn1cXG4uay1idG5zOm5vdCguay12ZXJ0aWNhbCkgPiAuay1idG46bm90KDpvbmx5LW9mLXR5cGUpOmxhc3Qtb2YtdHlwZSB7XFxuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAwO1xcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMDtcXG59XFxuLmstYnRuczpub3QoLmstdmVydGljYWwpID4gLmstYnRuLmstcHJpbWFyeTpub3QoOmZpcnN0LW9mLXR5cGUpIHtcXG4gIGJvcmRlci1sZWZ0LWNvbG9yOiAjMTg5MmYzO1xcbn1cXG4uay1idG5zOm5vdCguay12ZXJ0aWNhbCkgPiAuay1idG4uay1wcmltYXJ5Om5vdCg6bGFzdC1vZi10eXBlKSB7XFxuICBib3JkZXItcmlnaHQtY29sb3I6ICMxODkyZjM7XFxufVxcbi5rLWJ0bnM6bm90KC5rLXZlcnRpY2FsKSA+IC5rLWJ0bi5rLXdhcm5pbmc6bm90KDpmaXJzdC1vZi10eXBlKSB7XFxuICBib3JkZXItbGVmdC1jb2xvcjogI2ZmOTQxNjtcXG59XFxuLmstYnRuczpub3QoLmstdmVydGljYWwpID4gLmstYnRuLmstd2FybmluZzpub3QoOmxhc3Qtb2YtdHlwZSkge1xcbiAgYm9yZGVyLXJpZ2h0LWNvbG9yOiAjZmY5NDE2O1xcbn1cXG4uay1idG5zOm5vdCguay12ZXJ0aWNhbCkgPiAuay1idG4uay1kYW5nZXI6bm90KDpmaXJzdC1vZi10eXBlKSB7XFxuICBib3JkZXItbGVmdC1jb2xvcjogI2ZlMzEzMTtcXG59XFxuLmstYnRuczpub3QoLmstdmVydGljYWwpID4gLmstYnRuLmstZGFuZ2VyOm5vdCg6bGFzdC1vZi10eXBlKSB7XFxuICBib3JkZXItcmlnaHQtY29sb3I6ICNmZTMxMzE7XFxufVxcbi5rLWJ0bnM6bm90KC5rLXZlcnRpY2FsKSA+IC5rLWJ0bi5rLWFjdGl2ZTpub3QoOmZpcnN0LW9mLXR5cGUpIHtcXG4gIGJvcmRlci1sZWZ0LWNvbG9yOiA7XFxufVxcbi5rLWJ0bnM6bm90KC5rLXZlcnRpY2FsKSA+IC5rLWJ0bi5rLWFjdGl2ZTpub3QoOmxhc3Qtb2YtdHlwZSkge1xcbiAgYm9yZGVyLXJpZ2h0LWNvbG9yOiA7XFxufVxcbi5rLWJ0bnM6bm90KC5rLXZlcnRpY2FsKS5rLWZsdWlkIHtcXG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG4uay1idG5zOm5vdCguay12ZXJ0aWNhbCkuay1mbHVpZCA+IC5rLWJ0biB7XFxuICAtd2Via2l0LWJveC1mbGV4OiAxO1xcbiAgICAgIC1tcy1mbGV4OiAxO1xcbiAgICAgICAgICBmbGV4OiAxO1xcbn1cXG4uay1idG5zLmstdmVydGljYWwgPiAuay1idG4ge1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcbi5rLWJ0bnMuay12ZXJ0aWNhbCA+IC5rLWJ0bjpub3QoLmstYnRuLWljb24pIHtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG4uay1idG5zLmstdmVydGljYWwgPiAuay1idG46bm90KDpmaXJzdC1vZi10eXBlKSB7XFxuICBtYXJnaW4tdG9wOiAtMXB4ICFpbXBvcnRhbnQ7XFxufVxcbi5rLWJ0bnMuay12ZXJ0aWNhbCA+IC5rLWJ0bjpub3QoOmZpcnN0LW9mLXR5cGUpOm5vdCg6bGFzdC1vZi10eXBlKSB7XFxuICBib3JkZXItcmFkaXVzOiAwO1xcbn1cXG4uay1idG5zLmstdmVydGljYWwgPiAuay1idG46bm90KDpvbmx5LW9mLXR5cGUpOmZpcnN0LW9mLXR5cGUge1xcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMDtcXG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAwO1xcbn1cXG4uay1idG5zLmstdmVydGljYWwgPiAuay1idG46bm90KDpvbmx5LW9mLXR5cGUpOmxhc3Qtb2YtdHlwZSB7XFxuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAwO1xcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDA7XFxufVxcbi5rLWJ0bnMuay12ZXJ0aWNhbCA+IC5rLWJ0bi5rLXByaW1hcnk6bm90KDpmaXJzdC1vZi10eXBlKSB7XFxuICBib3JkZXItdG9wLWNvbG9yOiAjMTg5MmYzO1xcbn1cXG4uay1idG5zLmstdmVydGljYWwgPiAuay1idG4uay1wcmltYXJ5Om5vdCg6bGFzdC1vZi10eXBlKSB7XFxuICBib3JkZXItYm90dG9tLWNvbG9yOiAjMTg5MmYzO1xcbn1cXG4uay1idG5zLmstdmVydGljYWwgPiAuay1idG4uay13YXJuaW5nOm5vdCg6Zmlyc3Qtb2YtdHlwZSkge1xcbiAgYm9yZGVyLXRvcC1jb2xvcjogI2ZmOTQxNjtcXG59XFxuLmstYnRucy5rLXZlcnRpY2FsID4gLmstYnRuLmstd2FybmluZzpub3QoOmxhc3Qtb2YtdHlwZSkge1xcbiAgYm9yZGVyLWJvdHRvbS1jb2xvcjogI2ZmOTQxNjtcXG59XFxuLmstYnRucy5rLXZlcnRpY2FsID4gLmstYnRuLmstZGFuZ2VyOm5vdCg6Zmlyc3Qtb2YtdHlwZSkge1xcbiAgYm9yZGVyLXRvcC1jb2xvcjogI2ZlMzEzMTtcXG59XFxuLmstYnRucy5rLXZlcnRpY2FsID4gLmstYnRuLmstZGFuZ2VyOm5vdCg6bGFzdC1vZi10eXBlKSB7XFxuICBib3JkZXItYm90dG9tLWNvbG9yOiAjZmUzMTMxO1xcbn1cXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyP3tcInVybFwiOnRydWV9IS4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2xpYj97XCJwbHVnaW5zXCI6W251bGxdfSEuL25vZGVfbW9kdWxlcy9zdHlsdXMtbG9hZGVyP3tcImluY2x1ZGUgY3NzXCI6dHJ1ZSxcInNvdXJjZU1hcFwiOmZhbHNlLFwiaW1wb3J0XCI6XCIvaG9tZS9qYXZleS9Xb3Jrc3BhY2Uva3BjL3N0eWxlcy90aGVtZXMva3N5dW4vaW5kZXguc3R5bFwifSEuL2NvbXBvbmVudHMvYnV0dG9uL2luZGV4LnN0eWxcbi8vIG1vZHVsZSBpZCA9IC4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/e1widXJsXCI6dHJ1ZX0hLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvbGliL2luZGV4LmpzP3tcInBsdWdpbnNcIjpbbnVsbF19IS4vbm9kZV9tb2R1bGVzL3N0eWx1cy1sb2FkZXIvaW5kZXguanM/e1wiaW5jbHVkZSBjc3NcIjp0cnVlLFwic291cmNlTWFwXCI6ZmFsc2UsXCJpbXBvcnRcIjpcIi9ob21lL2phdmV5L1dvcmtzcGFjZS9rcGMvc3R5bGVzL3RoZW1lcy9rc3l1bi9pbmRleC5zdHlsXCJ9IS4vY29tcG9uZW50cy9idXR0b24vaW5kZXguc3R5bFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKHVuZGVmaW5lZCk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIuZG9jdW1lbnQtcGFnZSB7XFxuICBwYWRkaW5nLXRvcDogOTVweDtcXG4gIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuLmRvY3VtZW50LXBhZ2UgLmNvbnRlbnQtd3JhcHBlci5maXhlZCB7XFxuICBtYXJnaW4tYm90dG9tOiAwO1xcbn1cXG4uZG9jdW1lbnQtcGFnZSAuY29udGVudC13cmFwcGVyLmZpeGVkIGFzaWRlIHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHRvcDogODBweDtcXG4gIGJhY2tncm91bmQ6ICNmZmY7XFxuICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDgwcHgpO1xcbiAgb3ZlcmZsb3c6IGF1dG87XFxuICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcbi5kb2N1bWVudC1wYWdlIC5jb250ZW50LXdyYXBwZXIuZml4ZWQgYXJ0aWNsZSB7XFxuICBtYXJnaW4tbGVmdDogMjAwcHg7XFxufVxcbi5kb2N1bWVudC1wYWdlIC5jb250ZW50LXdyYXBwZXIge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcXG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGJhY2tncm91bmQ6ICNmZmY7XFxuICBtYXJnaW46IDAgYXV0bztcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIC13ZWJraXQtYm94LXNoYWRvdzogMCAxcHggMXB4IHJnYmEoMCwwLDAsMC4wOCk7XFxuICAgICAgICAgIGJveC1zaGFkb3c6IDAgMXB4IDFweCByZ2JhKDAsMCwwLDAuMDgpO1xcbiAgbWluLWhlaWdodDogY2FsYygxMDAlIC0gMTVweCk7XFxufVxcbi5kb2N1bWVudC1wYWdlIC5jb250ZW50LXdyYXBwZXIgYXNpZGUge1xcbiAgd2lkdGg6IDIwMHB4O1xcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2VlZTtcXG59XFxuLmRvY3VtZW50LXBhZ2UgLmNvbnRlbnQtd3JhcHBlciAuYXNpZGUtd3JhcHBlciB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcbi5kb2N1bWVudC1wYWdlIC5jb250ZW50LXdyYXBwZXIgLmFzaWRlLXdyYXBwZXIgaDUge1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbiAgbWFyZ2luOiAyNXB4IDAgMTVweCAyMHB4O1xcbiAgY29sb3I6ICM5OTk7XFxufVxcbi5kb2N1bWVudC1wYWdlIC5jb250ZW50LXdyYXBwZXIgLmFzaWRlLXdyYXBwZXIgdWwge1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxufVxcbi5kb2N1bWVudC1wYWdlIC5jb250ZW50LXdyYXBwZXIgLmFzaWRlLXdyYXBwZXIgYSB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIGhlaWdodDogMzBweDtcXG4gIGxpbmUtaGVpZ2h0OiAzMHB4O1xcbiAgcGFkZGluZy1sZWZ0OiAyNXB4O1xcbiAgY29sb3I6ICMzMzM7XFxufVxcbi5kb2N1bWVudC1wYWdlIC5jb250ZW50LXdyYXBwZXIgLmFzaWRlLXdyYXBwZXIgYTpob3ZlciB7XFxuICBiYWNrZ3JvdW5kOiAjZjNmM2YzO1xcbn1cXG4uZG9jdW1lbnQtcGFnZSAuY29udGVudC13cmFwcGVyIC5hc2lkZS13cmFwcGVyIC5hY3RpdmUgPiBhIHtcXG4gIGNvbG9yOiAjZmU0NDQ0O1xcbn1cXG4uZG9jdW1lbnQtcGFnZSAuY29udGVudC13cmFwcGVyIC5hc2lkZS13cmFwcGVyIC5zdWItY2F0YWxvZ3Mge1xcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XFxuICBmb250LXNpemU6IDEycHg7XFxufVxcbi5kb2N1bWVudC1wYWdlIC5jb250ZW50LXdyYXBwZXIgLmFzaWRlLXdyYXBwZXIgLmFzaWRlLWJvcmRlciB7XFxuICBib3JkZXItcmlnaHQ6IDJweCBzb2xpZCAjZmU0NDQ0O1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgcmlnaHQ6IDA7XFxuICB0b3A6IDA7XFxufVxcbi5kb2N1bWVudC1wYWdlIC5jb250ZW50LXdyYXBwZXIgYXJ0aWNsZSB7XFxuICAtd2Via2l0LWJveC1mbGV4OiAxO1xcbiAgICAgIC1tcy1mbGV4OiAxO1xcbiAgICAgICAgICBmbGV4OiAxO1xcbiAgcGFkZGluZzogMTBweCAyMHB4O1xcbiAgb3ZlcmZsb3c6IGF1dG87XFxufVxcbi5kb2N1bWVudC1wYWdlIC5jb250ZW50LXdyYXBwZXIgLmFydGljbGUtaGVhZCAudGl0bGUge1xcbiAgcGFkZGluZzogMTBweCAwO1xcbiAgZm9udC1zaXplOiAyLjJlbTtcXG4gIGNvbG9yOiAjMDAwO1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbn1cXG4uZG9jdW1lbnQtcGFnZSAuY29udGVudC13cmFwcGVyIC5hcnRpY2xlLWhlYWQgLmVkaXQtbGluayB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBtYXJnaW4tbGVmdDogMjBweDtcXG4gIGNvbG9yOiAjOTk5O1xcbiAgZm9udC1zdHlsZTogaXRhbGljO1xcbn1cXG4uZG9jdW1lbnQtcGFnZSAuY29udGVudC13cmFwcGVyIGFydGljbGUgaDEge1xcbiAgcGFkZGluZzogMTBweCAwO1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlZWU7XFxuICBtYXJnaW46IDIwcHggMDtcXG59XFxuLmRvY3VtZW50LXBhZ2UgLmNvbnRlbnQtd3JhcHBlciBhcnRpY2xlIGgyLFxcbi5kb2N1bWVudC1wYWdlIC5jb250ZW50LXdyYXBwZXIgYXJ0aWNsZSBoMyB7XFxuICBwYWRkaW5nOiAxMHB4IDA7XFxuICBtYXJnaW46IDE1cHggMDtcXG59XFxuLmRvY3VtZW50LXBhZ2UgLmNvbnRlbnQtd3JhcHBlciBhcnRpY2xlIHAge1xcbiAgbGluZS1oZWlnaHQ6IDI1cHg7XFxufVxcbi5kb2N1bWVudC1wYWdlIC5jb250ZW50LXdyYXBwZXIgYXJ0aWNsZSAub3V0cHV0IHtcXG4gIHBhZGRpbmc6IDIwcHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjZWVlO1xcbiAgbWFyZ2luOiAyMHB4IDA7XFxufVxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXI/e1widXJsXCI6dHJ1ZX0hLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvbGliP3tcInBsdWdpbnNcIjpbbnVsbF19IS4vbm9kZV9tb2R1bGVzL3N0eWx1cy1sb2FkZXI/e1wiaW5jbHVkZSBjc3NcIjp0cnVlLFwic291cmNlTWFwXCI6ZmFsc2UsXCJpbXBvcnRcIjpcIi9ob21lL2phdmV5L1dvcmtzcGFjZS9rcGMvc3R5bGVzL3RoZW1lcy9rc3l1bi9pbmRleC5zdHlsXCJ9IS4vc2l0ZS9wYWdlcy9kb2N1bWVudC9pbmRleC5zdHlsXG4vLyBtb2R1bGUgaWQgPSAuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3tcInVybFwiOnRydWV9IS4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2xpYi9pbmRleC5qcz97XCJwbHVnaW5zXCI6W251bGxdfSEuL25vZGVfbW9kdWxlcy9zdHlsdXMtbG9hZGVyL2luZGV4LmpzP3tcImluY2x1ZGUgY3NzXCI6dHJ1ZSxcInNvdXJjZU1hcFwiOmZhbHNlLFwiaW1wb3J0XCI6XCIvaG9tZS9qYXZleS9Xb3Jrc3BhY2Uva3BjL3N0eWxlcy90aGVtZXMva3N5dW4vaW5kZXguc3R5bFwifSEuL3NpdGUvcGFnZXMvZG9jdW1lbnQvaW5kZXguc3R5bFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKHVuZGVmaW5lZCk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIuaGxqcyB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIG92ZXJmbG93LXg6IGF1dG87XFxuICBjb2xvcjogIzUyNTI1MjtcXG4gIHBhZGRpbmc6IDE1cHg7XFxuICAtd2Via2l0LXRleHQtc2l6ZS1hZGp1c3Q6IG5vbmU7XFxuICBtYXJnaW46IDA7XFxufVxcbi5obGpzLWRvY3R5cGUge1xcbiAgY29sb3I6ICM5OTk7XFxufVxcbi5obGpzLXRhZyB7XFxuICBjb2xvcjogIzNlNzZmNjtcXG59XFxuLmhsanMtYXR0cmlidXRlIHtcXG4gIGNvbG9yOiAjZTk2OTAwO1xcbn1cXG4uaGxqcy12YWx1ZSB7XFxuICBjb2xvcjogIzQyYjk4MztcXG59XFxuLmhsanMta2V5d29yZCB7XFxuICBjb2xvcjogI2U5NjkwMDtcXG59XFxuLmhsanMtc3RyaW5nIHtcXG4gIGNvbG9yOiAjNDJiOTgzO1xcbn1cXG4uaGxqcy1jb21tZW50IHtcXG4gIGNvbG9yOiAjYjNiM2IzO1xcbn1cXG4uaGxqcy1vcGVyYXRvciAuaGxqcy1jb21tZW50IHtcXG4gIGNvbG9yOiAjNTI1MjUyO1xcbn1cXG4uaGxqcy1yZWdleHAge1xcbiAgY29sb3I6ICNhZjdkZmY7XFxufVxcbi5obGpzLWJ1aWx0X2luIHtcXG4gIGNvbG9yOiAjMmRiN2Y1O1xcbn1cXG4uY3NzIC5obGpzLWNsYXNzIHtcXG4gIGNvbG9yOiAjZTk2OTAwO1xcbn1cXG4uY3NzIC5obGpzLW51bWJlcixcXG4uamF2YXNjcmlwdCAuaGxqcy1udW1iZXIge1xcbiAgY29sb3I6ICNmYzFlNzA7XFxufVxcbi5jc3MgLmhsanMtYXR0cmlidXRlIHtcXG4gIGNvbG9yOiAjYWY3ZGZmO1xcbn1cXG4uY3NzIC5obGpzLWltcG9ydGFudCB7XFxuICBjb2xvcjogI2QwNDtcXG59XFxuLmFjdGlvbnNjcmlwdCAuaGxqcy1saXRlcmFsLFxcbi5qYXZhc2NyaXB0IC5obGpzLWxpdGVyYWwge1xcbiAgY29sb3I6ICNmYzFlNzA7XFxufVxcbnByZSB7XFxuICBwYWRkaW5nOiAwO1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5jb2RlIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIGJhY2tncm91bmQ6ICNmN2Y3Zjc7XFxuICBmb250LWZhbWlseTogQ29uc29sYXMsIE1vbmFjbywgQW5kYWxlIE1vbm8sIFVidW50dSBNb25vLCBtb25vc3BhY2U7XFxuICBtYXJnaW46IDNweDtcXG4gIHBhZGRpbmc6IDFweCA1cHg7XFxuICBib3JkZXItcmFkaXVzOiAzcHg7XFxuICBjb2xvcjogIzY2NjtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNlZWU7XFxuICBsaW5lLWhlaWdodDogMjBweDtcXG59XFxuaHRtbCxcXG5ib2R5IHtcXG4gIG1hcmdpbjogMDtcXG4gIGNvbG9yOiAjMzMzO1xcbiAgYmFja2dyb3VuZDogI2VmZWZlZjtcXG4gIGhlaWdodDogMTAwJTtcXG59XFxuYSB7XFxuICBjb2xvcjogIzJkOGNmMDtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuaDEsXFxuaDIsXFxuaDMsXFxuaDQsXFxuaDUge1xcbiAgbWFyZ2luOiAwO1xcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXG4gIGNvbG9yOiAjMDAwO1xcbn1cXG5oMSB7XFxuICBmb250LXNpemU6IDJlbTtcXG59XFxuaDIge1xcbiAgZm9udC1zaXplOiAxLjhlbTtcXG59XFxuaDMge1xcbiAgZm9udC1zaXplOiAxLjVlbTtcXG59XFxuY29kZSB7XFxuICBjb2xvcjogI2M3MjU0ZTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmOWYyZjQ7XFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICBwYWRkaW5nOiAwIDVweDtcXG59XFxuYmxvY2txdW90ZSB7XFxuICBtYXJnaW46IDFlbSAwO1xcbiAgcGFkZGluZzogMXB4IDJlbTtcXG4gIGJhY2tncm91bmQ6ICNmOGY4Zjg7XFxuICBib3JkZXItcmFkaXVzOiAwIDNweCAzcHggMDtcXG4gIGJvcmRlci1sZWZ0OiAycHggc29saWQgI2ZlNDQ0NDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuYmxvY2txdW90ZTpiZWZvcmUge1xcbiAgY29udGVudDogJyEnO1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDUwJTtcXG4gIG1hcmdpbi10b3A6IC0xMHB4O1xcbiAgd2lkdGg6IDIwcHg7XFxuICBoZWlnaHQ6IDIwcHg7XFxuICBib3JkZXItcmFkaXVzOiAxMDAlO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgYmFja2dyb3VuZDogI2ZlNDQ0NDtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XFxuICBsZWZ0OiAtMTFweDtcXG59XFxuI3BhZ2UsXFxuLmFwcC13cmFwcGVyLFxcbi5tYWluLXdyYXBwZXIge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cXG4uaGVhZGVyLXdyYXBwZXIge1xcbiAgaGVpZ2h0OiA4MHB4O1xcbiAgbGluZS1oZWlnaHQ6IDgwcHg7XFxuICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMnB4IDVweCByZ2JhKDAsMCwwLDAuMDgpO1xcbiAgICAgICAgICBib3gtc2hhZG93OiAwIDJweCA1cHggcmdiYSgwLDAsMCwwLjA4KTtcXG4gIGJhY2tncm91bmQ6ICNmZmY7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB3aWR0aDogMTAwJTtcXG4gIHRvcDogMDtcXG4gIHotaW5kZXg6IDk5OTtcXG59XFxuLmhlYWRlci13cmFwcGVyIGhlYWRlciB7XFxuICB3aWR0aDogMTAwJTtcXG4gIG1hcmdpbjogMCBhdXRvO1xcbn1cXG4uaGVhZGVyLXdyYXBwZXIgLmxvZ28ge1xcbiAgZm9udC1zaXplOiAyNHB4O1xcbiAgY29sb3I6ICMzMzM7XFxuICBtYXJnaW4tbGVmdDogMjBweDtcXG59XFxuLmhlYWRlci13cmFwcGVyIG5hdiB7XFxuICBmbG9hdDogcmlnaHQ7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcbi5oZWFkZXItd3JhcHBlciBuYXYgYSB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBwYWRkaW5nOiAwIDIwcHg7XFxuICBjb2xvcjogIzMzMztcXG59XFxuLmhlYWRlci13cmFwcGVyIG5hdiBhLmFjdGl2ZSB7XFxuICBjb2xvcjogI2ZlNDQ0NDtcXG59XFxuLmhlYWRlci13cmFwcGVyIC5ib3JkZXIge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgYm90dG9tOiAwO1xcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNmZTQ0NDQ7XFxufVxcbi50cmFuc2l0aW9uIHtcXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDM1MG1zIGN1YmljLWJlemllcigwLjU1LCAwLCAwLjEsIDEpO1xcbiAgdHJhbnNpdGlvbjogYWxsIDM1MG1zIGN1YmljLWJlemllcigwLjU1LCAwLCAwLjEsIDEpO1xcbn1cXG4uYmx1ZSB7XFxuICBjb2xvcjogIzA5ZDtcXG59XFxuLnJlZCB7XFxuICBjb2xvcjogI2QwNDtcXG59XFxuLnllbGxvdyB7XFxuICBjb2xvcjogI2ZmYzQwMDtcXG59XFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlcj97XCJ1cmxcIjp0cnVlfSEuL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9saWI/e1wicGx1Z2luc1wiOltudWxsXX0hLi9ub2RlX21vZHVsZXMvc3R5bHVzLWxvYWRlcj97XCJpbmNsdWRlIGNzc1wiOnRydWUsXCJzb3VyY2VNYXBcIjpmYWxzZSxcImltcG9ydFwiOlwiL2hvbWUvamF2ZXkvV29ya3NwYWNlL2twYy9zdHlsZXMvdGhlbWVzL2tzeXVuL2luZGV4LnN0eWxcIn0hLi9zaXRlL3BhZ2VzL2xheW91dC5zdHlsXG4vLyBtb2R1bGUgaWQgPSAuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3tcInVybFwiOnRydWV9IS4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2xpYi9pbmRleC5qcz97XCJwbHVnaW5zXCI6W251bGxdfSEuL25vZGVfbW9kdWxlcy9zdHlsdXMtbG9hZGVyL2luZGV4LmpzP3tcImluY2x1ZGUgY3NzXCI6dHJ1ZSxcInNvdXJjZU1hcFwiOmZhbHNlLFwiaW1wb3J0XCI6XCIvaG9tZS9qYXZleS9Xb3Jrc3BhY2Uva3BjL3N0eWxlcy90aGVtZXMva3N5dW4vaW5kZXguc3R5bFwifSEuL3NpdGUvcGFnZXMvbGF5b3V0LnN0eWxcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIG1hcCA9IHtcblx0XCIuL2NvbXBvbmVudHMvYnV0dG9uL2luZGV4Lmpzb25cIjogW1xuXHRcdFwiLi9zaXRlL2NvbXBvbmVudHMvYnV0dG9uL2luZGV4Lmpzb25cIixcblx0XHQzXG5cdF0sXG5cdFwiLi9jb21wb25lbnRzL2RpYWxvZy9pbmRleC5qc29uXCI6IFtcblx0XHRcIi4vc2l0ZS9jb21wb25lbnRzL2RpYWxvZy9pbmRleC5qc29uXCIsXG5cdFx0MlxuXHRdXG59O1xuZnVuY3Rpb24gd2VicGFja0FzeW5jQ29udGV4dChyZXEpIHtcblx0dmFyIGlkcyA9IG1hcFtyZXFdO1xuXHRpZighaWRzKVxuXHRcdHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInLlwiKSk7XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fLmUoaWRzWzFdKS50aGVuKGZ1bmN0aW9uKCkge1xuXHRcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKGlkc1swXSk7XG5cdH0pO1xufTtcbndlYnBhY2tBc3luY0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uIHdlYnBhY2tBc3luY0NvbnRleHRLZXlzKCkge1xuXHRyZXR1cm4gT2JqZWN0LmtleXMobWFwKTtcbn07XG53ZWJwYWNrQXN5bmNDb250ZXh0LmlkID0gXCIuL3NpdGUgbGF6eSByZWN1cnNpdmUgXlxcXFwuXFxcXC8uKlxcXFwvaW5kZXhcXFxcLmpzb24kXCI7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tBc3luY0NvbnRleHQ7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zaXRlIGxhenkgXlxcLlxcLy4qXFwvaW5kZXhcXC5qc29uJFxuLy8gbW9kdWxlIGlkID0gLi9zaXRlIGxhenkgcmVjdXJzaXZlIF5cXC5cXC8uKlxcL2luZGV4XFwuanNvbiRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IEludGFjdCBmcm9tICdpbnRhY3QnO1xuaW1wb3J0IExheW91dCBmcm9tICcuLi9sYXlvdXQnO1xuaW1wb3J0IHRlbXBsYXRlIGZyb20gJy4vaW5kZXgudmR0JztcbmltcG9ydCAnLi9pbmRleC5zdHlsJztcbi8vIGltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgTGF5b3V0IHtcbiAgICBASW50YWN0LnRlbXBsYXRlKClcbiAgICBzdGF0aWMgdGVtcGxhdGUgPSB0ZW1wbGF0ZTtcblxuICAgIGFzeW5jIF9pbml0KCkge1xuICAgICAgICBsZXQgcGF0aCA9IHRoaXMuZ2V0KCdwYXRoJyk7XG4gICAgICAgIHBhdGggPSBwYXRoLnNsaWNlKDEsIC0xKTtcbiAgICAgICAgY29uc29sZS5sb2coYC4uLy4uLyR7cGF0aH0vaW5kZXguanNvbmApO1xuICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgaW1wb3J0KGAuLi8uLi8ke3BhdGh9L2luZGV4Lmpzb25gKTtcbiAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XG4gICAgICAgIHRoaXMuc2V0KGRhdGEpO1xuICAgIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NpdGUvcGFnZXMvZG9jdW1lbnQvaW5kZXguanMiLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tMi0xIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMi0yIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsdXMtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTItMyEuL2luZGV4LnN0eWxcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbi8vIFByZXBhcmUgY3NzVHJhbnNmb3JtYXRpb25cbnZhciB0cmFuc2Zvcm07XG5cbnZhciBvcHRpb25zID0ge31cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanNcIikoY29udGVudCwgb3B0aW9ucyk7XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcblx0Ly8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0aWYoIWNvbnRlbnQubG9jYWxzKSB7XG5cdFx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTItMSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTItMiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bHVzLWxvYWRlci9pbmRleC5qcz8/cmVmLS0yLTMhLi9pbmRleC5zdHlsXCIsIGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz8/cmVmLS0yLTEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0yLTIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWx1cy1sb2FkZXIvaW5kZXguanM/P3JlZi0tMi0zIS4vaW5kZXguc3R5bFwiKTtcblx0XHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXHRcdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHRcdH0pO1xuXHR9XG5cdC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zaXRlL3BhZ2VzL2RvY3VtZW50L2luZGV4LnN0eWxcbi8vIG1vZHVsZSBpZCA9IC4vc2l0ZS9wYWdlcy9kb2N1bWVudC9pbmRleC5zdHlsXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCBCdXR0b24gZnJvbSAnY29tcG9uZW50cy9idXR0b24nO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24ob2JqLCBfVmR0LCBibG9ja3MsICRjYWxsZWUpIHtcblxuX1ZkdCB8fCAoX1ZkdCA9IFZkdCk7XG5vYmogfHwgKG9iaiA9IHt9KTtcbmJsb2NrcyB8fCAoYmxvY2tzID0ge30pO1xudmFyIGggPSBfVmR0Lm1pc3MuaCwgaGMgPSBfVmR0Lm1pc3MuaGMsIGh1ID0gX1ZkdC5taXNzLmh1LCB3aWRnZXRzID0gdGhpcyAmJiB0aGlzLndpZGdldHMgfHwge30sIF9ibG9ja3MgPSB7fSwgX19ibG9ja3MgPSB7fSxcbl9fdSA9IF9WZHQudXRpbHMsIGV4dGVuZCA9IF9fdS5leHRlbmQsIF9lID0gX191LmVycm9yLCBfY2xhc3NOYW1lID0gX191LmNsYXNzTmFtZSxcbl9fbyA9IF9fdS5PcHRpb25zLCBfZ2V0TW9kZWwgPSBfX28uZ2V0TW9kZWwsIF9zZXRNb2RlbCA9IF9fby5zZXRNb2RlbCxcbl9zZXRDaGVja2JveE1vZGVsID0gX191LnNldENoZWNrYm94TW9kZWwsIF9kZXRlY3RDaGVja2JveENoZWNrZWQgPSBfX3UuZGV0ZWN0Q2hlY2tib3hDaGVja2VkLFxuX3NldFNlbGVjdE1vZGVsID0gX191LnNldFNlbGVjdE1vZGVsLFxuc2VsZiA9IHRoaXMuZGF0YSwgc2NvcGUgPSBvYmosIEFuaW1hdGUgPSBzZWxmICYmIHNlbGYuQW5pbWF0ZSwgcGFyZW50ID0gKCRjYWxsZWUgfHwge30pLl9zdXBlclxuXG5cbnJldHVybiAoZnVuY3Rpb24oKSB7XG4gICAgdmFyIF9vYmogPSB7J25hdkluZGV4JzogJ2RvY3VtZW50JywgJ2NsYXNzTmFtZSc6ICdkb2N1bWVudC1wYWdlJywgJ2NoaWxkcmVuJzogbnVsbH07XG4gICAgaWYgKF9vYmouaGFzT3duUHJvcGVydHkoXCJhcmd1bWVudHNcIikpIHtcbiAgICAgICAgZXh0ZW5kKF9vYmosIF9vYmouYXJndW1lbnRzID09PSB0cnVlID8gb2JqIDogX29iai5hcmd1bWVudHMpO1xuICAgICAgICBkZWxldGUgX29iai5hcmd1bWVudHM7XG4gICAgfVxuICAgIHJldHVybiBwYXJlbnQuY2FsbCh0aGlzLCBfb2JqLCBfVmR0LCBmdW5jdGlvbihibG9ja3MpIHtcbiAgICB2YXIgX2Jsb2NrcyA9IHt9LCBfX2Jsb2NrcyA9IGV4dGVuZCh7fSwgYmxvY2tzKTtcbiAgICByZXR1cm4gKF9ibG9ja3MuY29udGVudCA9IGZ1bmN0aW9uKHBhcmVudCkge3JldHVybiBoKCdhcnRpY2xlJywgbnVsbCwgW2goJ2RpdicsIG51bGwsIGgoJ2RpdicsIG51bGwsIFsnXFxuICAgICAgICAgICAgICAgICAgICDlpoLmnpzkvaDlj5HnjrDmlofmoaPmnInpl67popjvvIzor7fluK7lv5nlnKhcXG4gICAgICAgICAgICAgICAgICAgICcsIGgoJ2EnLCB7J3RhcmdldCc6ICdfYmxhbmsnLCAnaHJlZic6IGZ1bmN0aW9uKCkge3RyeSB7cmV0dXJuIFtgaHR0cHM6Ly9naXRodWIuY29tL0phdmV5L2phdmV5LmdpdGh1Yi5pby9ibG9iL21hc3Rlci9pbnRhY3QvZG9jcy8ke3NlbGYuZ2V0KCd0aXRsZScpfS5tZGAgXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKX0sICdnaXRodWInKSwgJ1xcbiAgICAgICAgICAgICAgICAgICAg5LiK5L+u5q2j6K+l5paH5qGjXFxuICAgICAgICAgICAgICAgICddLCAnZWRpdC1saW5rJyksICdhcnRpY2xlLWhlYWQnKSwgaCgnZGl2Jywgeydpbm5lckhUTUwnOiBmdW5jdGlvbigpIHt0cnkge3JldHVybiBbc2VsZi5nZXQoJ2NvbnRlbnRzJykgXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKX0pXSk7fSkgJiYgKF9fYmxvY2tzLmNvbnRlbnQgPSBmdW5jdGlvbihwYXJlbnQpIHtcbnZhciBzZWxmID0gdGhpcztcbnJldHVybiBibG9ja3MuY29udGVudCA/IGJsb2Nrcy5jb250ZW50LmNhbGwodGhpcywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gX2Jsb2Nrcy5jb250ZW50LmNhbGwoc2VsZiwgcGFyZW50KTtcbn0pIDogX2Jsb2Nrcy5jb250ZW50LmNhbGwodGhpcywgcGFyZW50KTtcbn0pICYmIF9fYmxvY2tzO1xufS5jYWxsKHRoaXMsIGJsb2NrcyksIHBhcmVudClcbn0pLmNhbGwodGhpcylcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zaXRlL3BhZ2VzL2RvY3VtZW50L2luZGV4LnZkdCIsImltcG9ydCBJbnRhY3QgZnJvbSAnaW50YWN0JztcbmltcG9ydCB0ZW1wbGF0ZSBmcm9tICcuL2xheW91dC52ZHQnO1xuaW1wb3J0ICcuL2xheW91dC5zdHlsJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBJbnRhY3Qge1xuICAgIEBJbnRhY3QudGVtcGxhdGUoKVxuICAgIHN0YXRpYyB0ZW1wbGF0ZSA9IHRlbXBsYXRlO1xuXG4gICAgX21vdW50KCkge1xuICAgICAgICB0aGlzLiRib3JkZXIgPSB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvcignLmJvcmRlcicpO1xuICAgICAgICB0aGlzLl91cGRhdGVCb3JkZXIoKTtcbiAgICB9XG5cbiAgICBfdXBkYXRlQm9yZGVyKCkge1xuICAgICAgICAvLyBjb25zdCAkbmF2ID0gdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hY3RpdmUnKTtcbiAgICAgICAgLy8gbGV0IHdpZHRoID0gMDtcbiAgICAgICAgLy8gbGV0IGxlZnQgPSAwO1xuICAgICAgICAvLyBpZiAoJG5hdikge1xuICAgICAgICAgICAgLy8gbGVmdCA9ICRuYXYucG9zaXRpb24oKS5sZWZ0O1xuICAgICAgICAgICAgLy8gd2lkdGggPSAkbmF2Lm91dGVyV2lkdGgoKTtcbiAgICAgICAgLy8gfVxuICAgICAgICAvLyB0aGlzLiRib3JkZXIuYWRkQ2xhc3MoJ3RyYW5zaXRpb24nKTtcbiAgICAgICAgLy8gdGhpcy4kYm9yZGVyLmNzcyh7d2lkdGg6IHdpZHRoLCBsZWZ0OiBsZWZ0fSk7XG4gICAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc2l0ZS9wYWdlcy9sYXlvdXQuanMiLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tMi0xIS4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMi0yIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsdXMtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTItMyEuL2xheW91dC5zdHlsXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4vLyBQcmVwYXJlIGNzc1RyYW5zZm9ybWF0aW9uXG52YXIgdHJhbnNmb3JtO1xuXG52YXIgb3B0aW9ucyA9IHt9XG5vcHRpb25zLnRyYW5zZm9ybSA9IHRyYW5zZm9ybVxuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG5cdC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdGlmKCFjb250ZW50LmxvY2Fscykge1xuXHRcdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz8/cmVmLS0yLTEhLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0yLTIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWx1cy1sb2FkZXIvaW5kZXguanM/P3JlZi0tMi0zIS4vbGF5b3V0LnN0eWxcIiwgZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTItMSEuLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTItMiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bHVzLWxvYWRlci9pbmRleC5qcz8/cmVmLS0yLTMhLi9sYXlvdXQuc3R5bFwiKTtcblx0XHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXHRcdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHRcdH0pO1xuXHR9XG5cdC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zaXRlL3BhZ2VzL2xheW91dC5zdHlsXG4vLyBtb2R1bGUgaWQgPSAuL3NpdGUvcGFnZXMvbGF5b3V0LnN0eWxcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IExpbmsgZnJvbSAnY29tcG9uZW50cy9saW5rJztcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKG9iaiwgX1ZkdCwgYmxvY2tzLCAkY2FsbGVlKSB7XG5cbl9WZHQgfHwgKF9WZHQgPSBWZHQpO1xub2JqIHx8IChvYmogPSB7fSk7XG5ibG9ja3MgfHwgKGJsb2NrcyA9IHt9KTtcbnZhciBoID0gX1ZkdC5taXNzLmgsIGhjID0gX1ZkdC5taXNzLmhjLCBodSA9IF9WZHQubWlzcy5odSwgd2lkZ2V0cyA9IHRoaXMgJiYgdGhpcy53aWRnZXRzIHx8IHt9LCBfYmxvY2tzID0ge30sIF9fYmxvY2tzID0ge30sXG5fX3UgPSBfVmR0LnV0aWxzLCBleHRlbmQgPSBfX3UuZXh0ZW5kLCBfZSA9IF9fdS5lcnJvciwgX2NsYXNzTmFtZSA9IF9fdS5jbGFzc05hbWUsXG5fX28gPSBfX3UuT3B0aW9ucywgX2dldE1vZGVsID0gX19vLmdldE1vZGVsLCBfc2V0TW9kZWwgPSBfX28uc2V0TW9kZWwsXG5fc2V0Q2hlY2tib3hNb2RlbCA9IF9fdS5zZXRDaGVja2JveE1vZGVsLCBfZGV0ZWN0Q2hlY2tib3hDaGVja2VkID0gX191LmRldGVjdENoZWNrYm94Q2hlY2tlZCxcbl9zZXRTZWxlY3RNb2RlbCA9IF9fdS5zZXRTZWxlY3RNb2RlbCxcbnNlbGYgPSB0aGlzLmRhdGEsIHNjb3BlID0gb2JqLCBBbmltYXRlID0gc2VsZiAmJiBzZWxmLkFuaW1hdGUsIHBhcmVudCA9ICgkY2FsbGVlIHx8IHt9KS5fc3VwZXJcblxuXG5jb25zdCBuYXYgPSBbXG4gICAge1xuICAgICAgICB0aXRsZTogJ+aVmeeoiycsXG4gICAgICAgIGhyZWY6ICdkb2N1bWVudCdcbiAgICB9LFxuICAgIHtcbiAgICAgICAgdGl0bGU6ICdBUEknLFxuICAgICAgICBocmVmOiAnYXBpJ1xuICAgIH0sXG4gICAgLy8ge1xuICAgICAgICAvLyB0aXRsZTogJ+ekuuS+iycsXG4gICAgICAgIC8vIGhyZWY6ICdleGFtcGxlcydcbiAgICAvLyB9XG5dO1xuXG5yZXR1cm4gaCgnZGl2JywgbnVsbCwgW2goJ2RpdicsIG51bGwsIGgoJ2hlYWRlcicsIG51bGwsIChfYmxvY2tzLmhlYWRlciA9IGZ1bmN0aW9uKHBhcmVudCkge3JldHVybiBbaChMaW5rLCB7J2NsYXNzTmFtZSc6ICdsb2dvJywgJ2hyZWYnOiAnLycsICdjaGlsZHJlbic6ICdLUEMnLCAnX2NvbnRleHQnOiB0aGlzfSksIGgoJ25hdicsIG51bGwsIFtfVmR0LnV0aWxzLm1hcChmdW5jdGlvbigpIHt0cnkge3JldHVybiBbbmF2IF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcyksIGZ1bmN0aW9uKHZhbHVlLCBrZXkpIHtcbnJldHVybiBoKExpbmssIHsnY2xhc3NOYW1lJzogX2NsYXNzTmFtZShmdW5jdGlvbigpIHt0cnkge3JldHVybiBbe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjdGl2ZTogdmFsdWUuaHJlZiA9PT0gc2NvcGUubmF2SW5kZXhcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKSksICdocmVmJzogZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW2AvJHt2YWx1ZS5ocmVmfWAgXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKSwgJ2NoaWxkcmVuJzogZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW3ZhbHVlLnRpdGxlIF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcyksICdfY29udGV4dCc6IHRoaXN9KTtcbn0sIHRoaXMpLCBoKCdkaXYnLCBudWxsLCBudWxsLCAnYm9yZGVyJyldKV07fSkgJiYgKF9fYmxvY2tzLmhlYWRlciA9IGZ1bmN0aW9uKHBhcmVudCkge1xudmFyIHNlbGYgPSB0aGlzO1xucmV0dXJuIGJsb2Nrcy5oZWFkZXIgPyBibG9ja3MuaGVhZGVyLmNhbGwodGhpcywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gX2Jsb2Nrcy5oZWFkZXIuY2FsbChzZWxmLCBwYXJlbnQpO1xufSkgOiBfYmxvY2tzLmhlYWRlci5jYWxsKHRoaXMsIHBhcmVudCk7XG59KSAmJiBfX2Jsb2Nrcy5oZWFkZXIuY2FsbCh0aGlzKSksICdoZWFkZXItd3JhcHBlcicpLCBoKCdkaXYnLCBudWxsLCAoX2Jsb2Nrcy5jb250ZW50ID0gZnVuY3Rpb24ocGFyZW50KSB7cmV0dXJuIG51bGw7fSkgJiYgKF9fYmxvY2tzLmNvbnRlbnQgPSBmdW5jdGlvbihwYXJlbnQpIHtcbnZhciBzZWxmID0gdGhpcztcbnJldHVybiBibG9ja3MuY29udGVudCA/IGJsb2Nrcy5jb250ZW50LmNhbGwodGhpcywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gX2Jsb2Nrcy5jb250ZW50LmNhbGwoc2VsZiwgcGFyZW50KTtcbn0pIDogX2Jsb2Nrcy5jb250ZW50LmNhbGwodGhpcywgcGFyZW50KTtcbn0pICYmIF9fYmxvY2tzLmNvbnRlbnQuY2FsbCh0aGlzKSwgJ2NvbnRlbnQtd3JhcHBlcicpXSwgX2NsYXNzTmFtZShmdW5jdGlvbigpIHt0cnkge3JldHVybiBbeydtYWluLXdyYXBwZXInOiB0cnVlLCBbc2NvcGUuY2xhc3NOYW1lXTogc2NvcGUuY2xhc3NOYW1lfSBdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpKSlcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zaXRlL3BhZ2VzL2xheW91dC52ZHQiXSwic291cmNlUm9vdCI6IiJ9