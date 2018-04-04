webpackJsonp([1],{

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
                value: undefined,
                radio: false, // @deprecated: use checkType instead of
                checkType: 'none' // radio | checkbox | none
            };
        }
    }, {
        key: '_init',
        value: function _init() {
            if (this.get('radio')) {
                this.set('checkType', 'radio', { silent: true });
            }
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

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

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
        value = _self$get.value,
        fluid = _self$get.fluid,
        checkType = _self$get.checkType;

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
            return [checkType !== 'none' ? __u.map(children ? Array.isArray(children) ? children : [children] : children, function (vNode) {
                if (vNode.tag === _2.default) {
                    vNode.props = _extends({}, vNode.props, {
                        _value: value,
                        _checkType: checkType
                    });
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

var _dec, _desc, _value2, _class, _class2, _temp;

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
                tagProps: undefined,
                value: undefined,
                name: undefined,

                _value: undefined,
                _checkType: 'none'
            };
        }
    }, {
        key: '_mount',
        value: function _mount() {
            var parentVNode = this.parentVNode;

            while (parentVNode && parentVNode.tag !== _group2.default) {
                parentVNode = parentVNode.parentVNode;
            }

            if (parentVNode) {
                this.group = parentVNode.children;

                this.set({
                    _checkType: this.group.get('checkType'),
                    _value: this.group.get('value')
                });
            }
        }
    }, {
        key: '_beforeUpdate',
        value: function _beforeUpdate() {
            if (this.group) {
                this.set({
                    _checkType: this.group.get('checkType'),
                    _value: this.group.get('value')
                }, { silent: true });
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
                var _get = this.get(),
                    _checkType = _get._checkType,
                    value = _get.value,
                    _value = _get._value;

                if (_checkType === 'radio') {
                    this.group.set('value', value);
                } else if (_checkType === 'checkbox') {
                    if (!Array.isArray(_value)) {
                        _value = [];
                    }
                    _value = _value.slice(0);
                    var index = _value.indexOf(value);
                    if (!~index) {
                        _value.push(value);
                    } else {
                        _value.splice(index, 1);
                    }
                    this.group.set('value', _value);
                }
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
var content = __webpack_require__("./node_modules/css-loader/index.js?{\"url\":true}!./node_modules/postcss-loader/lib/index.js?{\"plugins\":[null]}!./node_modules/stylus-loader/index.js?{\"include css\":true,\"sourceMap\":false}!./components/button/index.styl");
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
		module.hot.accept("./node_modules/css-loader/index.js?{\"url\":true}!./node_modules/postcss-loader/lib/index.js?{\"plugins\":[null]}!./node_modules/stylus-loader/index.js?{\"include css\":true,\"sourceMap\":false}!./components/button/index.styl", function() {
			var newContent = __webpack_require__("./node_modules/css-loader/index.js?{\"url\":true}!./node_modules/postcss-loader/lib/index.js?{\"plugins\":[null]}!./node_modules/stylus-loader/index.js?{\"include css\":true,\"sourceMap\":false}!./components/button/index.styl");
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
        tagProps = _self$get.tagProps,
        _checkType = _self$get._checkType,
        rest = _objectWithoutProperties(_self$get, ['type', 'className', 'size', 'icon', 'circle', 'ref', 'key', 'tagName', 'htmlType', 'fluid', 'children', 'loading', 'value', '_value', 'name', 'tagProps', '_checkType']);

    var checked = value !== undefined ? _checkType === 'radio' ? value === _value : _checkType === 'checkbox' ? Array.isArray(_value) && !!~_value.indexOf(value) : false : false;

    var classNameObj = (_classNameObj = {
        'k-btn': true
    }, _defineProperty(_classNameObj, 'k-' + type, type !== 'default'), _defineProperty(_classNameObj, 'k-btn-icon', icon), _defineProperty(_classNameObj, 'k-' + size, size !== 'default'), _defineProperty(_classNameObj, className, className), _defineProperty(_classNameObj, 'k-circle', circle), _defineProperty(_classNameObj, 'k-loading', loading), _defineProperty(_classNameObj, 'k-fluid', fluid), _defineProperty(_classNameObj, 'k-active', checked), _classNameObj);

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
    }.call(this), function () {
        try {
            return [tagProps][0];
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
                return [_checkType !== 'none'][0];
            } catch (e) {
                _e(e);
            }
        }.call(this) ? h('input', { 'type': function () {
                try {
                    return [_checkType][0];
                } catch (e) {
                    _e(e);
                }
            }.call(this), 'name': function () {
                try {
                    return [name][0];
                } catch (e) {
                    _e(e);
                }
            }.call(this), 'checked': function () {
                try {
                    return [checked][0];
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

/***/ "./components/table/index.styl":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("./node_modules/css-loader/index.js?{\"url\":true}!./node_modules/postcss-loader/lib/index.js?{\"plugins\":[null]}!./node_modules/stylus-loader/index.js?{\"include css\":true,\"sourceMap\":false}!./components/table/index.styl");
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
		module.hot.accept("./node_modules/css-loader/index.js?{\"url\":true}!./node_modules/postcss-loader/lib/index.js?{\"plugins\":[null]}!./node_modules/stylus-loader/index.js?{\"include css\":true,\"sourceMap\":false}!./components/table/index.styl", function() {
			var newContent = __webpack_require__("./node_modules/css-loader/index.js?{\"url\":true}!./node_modules/postcss-loader/lib/index.js?{\"plugins\":[null]}!./node_modules/stylus-loader/index.js?{\"include css\":true,\"sourceMap\":false}!./components/table/index.styl");
			if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

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
exports.selectInput = selectInput;

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

function selectInput(input) {
    if (input.select) {
        input.select();
    } else if (input.setSelectionRange) {
        // mobile safari
        input.focus();
        input.setSelectionRange(0, input.value.length);
    }
}

/***/ }),

/***/ "./node_modules/css-loader/index.js?{\"url\":true}!./node_modules/postcss-loader/lib/index.js?{\"plugins\":[null]}!./node_modules/stylus-loader/index.js?{\"include css\":true,\"sourceMap\":false}!./components/button/index.styl":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".k-btn {\n  cursor: pointer;\n  display: inline-block;\n  height: 2.571428571428572rem;\n  line-height: calc(2.571428571428572rem - 2px);\n  padding: 0 1.428571428571429rem;\n  outline: none;\n  border: none;\n  color: #595959;\n  background-color: #fff;\n  text-align: center;\n  border-radius: 2px;\n  -webkit-transition: all 0.25s ease-in-out;\n  transition: all 0.25s ease-in-out;\n  border: 1px solid #cad0dd;\n  font-size: 1rem;\n}\n.k-btn:hover {\n  border-color: #0a5eee;\n  color: #0a5eee;\n}\n.k-btn.k-primary {\n  background-color: #0a5eee;\n  color: #fff;\n  border-color: #0a5eee;\n}\n.k-btn.k-primary:hover {\n  background-color: #367df7;\n  border-color: #367df7;\n}\n.k-btn.k-warning {\n  background-color: #ff8a00;\n  color: #fff;\n  border-color: #ff8a00;\n}\n.k-btn.k-warning:hover {\n  background-color: #ffa133;\n  border-color: #ffa133;\n}\n.k-btn.k-danger {\n  background-color: #db2828;\n  color: #fff;\n  border-color: #db2828;\n}\n.k-btn.k-danger:hover {\n  background-color: #e25353;\n  border-color: #e25353;\n}\n.k-btn.k-active {\n  background-color: #0a5eee;\n  color: #fff;\n  border-color: #0a5eee;\n}\n.k-btn.k-active:hover {\n  background-color: #367df7;\n  border-color: #367df7;\n}\n.k-btn[disabled],\n.k-btn[disabled]:hover {\n  color: #999;\n  background-color: #f7f7f7;\n  border-color: #d9d9d9;\n  cursor: not-allowed;\n}\n.k-btn.k-none,\n.k-btn.k-none:hover {\n  border: none;\n  background-color: transparent;\n}\n.k-btn.k-small {\n  font-size: 0.857142857142857rem;\n  height: 2.142857142857143rem;\n  padding: 0 1.071428571428571rem;\n  line-height: calc(2.142857142857143rem - 2px);\n}\n.k-btn.k-small.k-btn-icon {\n  width: 2.142857142857143rem;\n}\n.k-btn.k-mini {\n  font-size: 0.857142857142857rem;\n  height: 1.857142857142857rem;\n  padding: 0 0.714285714285714rem;\n  line-height: calc(1.857142857142857rem - 2px);\n}\n.k-btn.k-mini.k-btn-icon {\n  width: 1.857142857142857rem;\n}\n.k-btn .k-icon {\n  font-size: inherit;\n}\n.k-btn .k-icon:before {\n  font-size: inherit;\n}\n.k-btn .k-icon + span {\n  margin-left: 0.357142857142857em;\n}\n.k-btn.k-icon-right .k-icon {\n  margin-left: 0.357142857142857em;\n}\n.k-btn.k-btn-icon {\n  width: 2.571428571428572rem;\n  padding: 0;\n}\n.k-btn.k-btn-icon .k-icon {\n  margin: 0;\n  font-size: 1.142857142857143em;\n}\n.k-btn.k-fluid {\n  width: 100%;\n  padding: 0;\n}\n.k-btn.k-circle {\n  border-radius: 1.285714285714286rem;\n}\n.k-btn.k-loading,\n.k-btn.k-loading:hover {\n  background-color: #fff;\n  color: #acacac;\n  border-color: #e4e8ee;\n}\n.k-btn.k-loading .k-icon:not(.icon-loading) {\n  display: none;\n}\n.k-btn.k-loading.k-primary,\n.k-btn.k-loading.k-primary:hover {\n  background-color: #81aefa;\n  color: #fff;\n  border-color: #81aefa;\n}\n.k-btn.k-loading.k-warning,\n.k-btn.k-loading.k-warning:hover {\n  background-color: #ffc480;\n  color: #fff;\n  border-color: #ffc480;\n}\n.k-btn.k-loading.k-danger,\n.k-btn.k-loading.k-danger:hover {\n  background-color: #ed9494;\n  color: #fff;\n  border-color: #ed9494;\n}\n.k-btn.k-loading.k-active,\n.k-btn.k-loading.k-active:hover {\n  background-color: #81aefa;\n  color: #fff;\n  border-color: #81aefa;\n}\n.k-btn.k-loading:not(.k-btn-icon):not(.k-icon-left):not(.k-icon-right) {\n  padding-left: 2.428571428571429em;\n}\n.k-btn.k-loading:not(.k-btn-icon):not(.k-icon-left):not(.k-icon-right) .icon-loading {\n  margin-left: -1em;\n}\n.k-btn.k-loading:not(.k-btn-icon):not(.k-icon-left):not(.k-icon-right).k-small {\n  padding-left: 2.071428571428571em;\n}\n.k-btn.k-loading:not(.k-btn-icon):not(.k-icon-left):not(.k-icon-right).k-mini {\n  padding-left: 1.714285714285714em;\n}\n.k-btn input {\n  position: absolute;\n}\n.k-btns {\n  display: inline-block;\n  vertical-align: middle;\n}\n.k-btns .k-btn {\n  margin: 0;\n  vertical-align: middle;\n}\n.k-btns .k-btn:hover {\n  z-index: 1;\n  position: relative;\n}\n.k-btns.k-fluid {\n  width: 100%;\n}\n.k-btns:not(.k-vertical) > .k-btn:not(:first-of-type) {\n  margin-left: -1px;\n}\n.k-btns:not(.k-vertical) > .k-btn:not(:first-of-type):not(:last-of-type) {\n  border-radius: 0;\n}\n.k-btns:not(.k-vertical) > .k-btn:not(:only-of-type):first-of-type {\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0;\n}\n.k-btns:not(.k-vertical) > .k-btn:not(:only-of-type):last-of-type {\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0;\n}\n.k-btns:not(.k-vertical) > .k-btn.k-primary:not(:first-of-type) {\n  border-left-color: #0958e0;\n}\n.k-btns:not(.k-vertical) > .k-btn.k-primary:not(:last-of-type) {\n  border-right-color: #0958e0;\n}\n.k-btns:not(.k-vertical) > .k-btn.k-warning:not(:first-of-type) {\n  border-left-color: #f08200;\n}\n.k-btns:not(.k-vertical) > .k-btn.k-warning:not(:last-of-type) {\n  border-right-color: #f08200;\n}\n.k-btns:not(.k-vertical) > .k-btn.k-danger:not(:first-of-type) {\n  border-left-color: #d12323;\n}\n.k-btns:not(.k-vertical) > .k-btn.k-danger:not(:last-of-type) {\n  border-right-color: #d12323;\n}\n.k-btns:not(.k-vertical) > .k-tooltip:not(:first-of-type) .k-btn {\n  margin-left: -1px;\n}\n.k-btns:not(.k-vertical) > .k-tooltip:not(:first-of-type):not(last-of-type) .k-btn {\n  border-radius: 0;\n}\n.k-btns:not(.k-vertical) > .k-tooltip:not(:only-of-type):first-of-type .k-btn {\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0;\n}\n.k-btns:not(.k-vertical) > .k-tooltip:not(:only-of-type):last-of-type .k-btn {\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0;\n}\n.k-btns:not(.k-vertical) > .k-tooltip:not(:first-of-type) .k-btn.k-primary {\n  border-left-color: #0958e0;\n}\n.k-btns:not(.k-vertical) > .k-tooltip:not(:last-of-type) .k-btn.k-primary {\n  border-right-color: #0958e0;\n}\n.k-btns:not(.k-vertical) > .k-tooltip:not(:first-of-type) .k-btn.k-warning {\n  border-left-color: #f08200;\n}\n.k-btns:not(.k-vertical) > .k-tooltip:not(:last-of-type) .k-btn.k-warning {\n  border-right-color: #f08200;\n}\n.k-btns:not(.k-vertical) > .k-tooltip:not(:first-of-type) .k-btn.k-danger {\n  border-left-color: #d12323;\n}\n.k-btns:not(.k-vertical) > .k-tooltip:not(:last-of-type) .k-btn.k-danger {\n  border-right-color: #d12323;\n}\n.k-btns:not(.k-vertical).k-fluid {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n}\n.k-btns:not(.k-vertical).k-fluid > .k-btn,\n.k-btns:not(.k-vertical).k-fluid > .k-tooltip {\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n}\n.k-btns:not(.k-vertical).k-fluid > .k-tooltip .k-btn {\n  width: 100%;\n}\n.k-btns.k-vertical > .k-btn {\n  display: block;\n}\n.k-btns.k-vertical > .k-btn:not(.k-btn-icon) {\n  width: 100%;\n}\n.k-btns.k-vertical > .k-btn:not(:first-of-type) {\n  margin-top: -1px;\n}\n.k-btns.k-vertical > .k-btn:not(:first-of-type):not(:last-of-type) {\n  border-radius: 0;\n}\n.k-btns.k-vertical > .k-btn:not(:only-of-type):first-of-type {\n  border-bottom-left-radius: 0;\n  border-bottom-right-radius: 0;\n}\n.k-btns.k-vertical > .k-btn:not(:only-of-type):last-of-type {\n  border-top-left-radius: 0;\n  border-top-right-radius: 0;\n}\n.k-btns.k-vertical > .k-btn.k-primary:not(:first-of-type) {\n  border-top-color: #0958e0;\n}\n.k-btns.k-vertical > .k-btn.k-primary:not(:last-of-type) {\n  border-bottom-color: #0958e0;\n}\n.k-btns.k-vertical > .k-btn.k-warning:not(:first-of-type) {\n  border-top-color: #f08200;\n}\n.k-btns.k-vertical > .k-btn.k-warning:not(:last-of-type) {\n  border-bottom-color: #f08200;\n}\n.k-btns.k-vertical > .k-btn.k-danger:not(:first-of-type) {\n  border-top-color: #d12323;\n}\n.k-btns.k-vertical > .k-btn.k-danger:not(:last-of-type) {\n  border-bottom-color: #d12323;\n}\n.k-btns.k-vertical > .k-tooltip {\n  display: block;\n}\n.k-btns.k-vertical > .k-tooltip .k-btn:not(.k-btn-icon) {\n  width: 100%;\n}\n.k-btns.k-vertical > .k-tooltip:not(:first-of-type) {\n  margin-top: -1px;\n}\n.k-btns.k-vertical > .k-tooltip:not(:first-of-type):not(:last-of-type) .k-btn {\n  border-radius: 0;\n}\n.k-btns.k-vertical > .k-tooltip:not(:only-of-type):first-of-type .k-btn {\n  border-bottom-left-radius: 0;\n  border-bottom-right-radius: 0;\n}\n.k-btns.k-vertical > .k-tooltip:not(:only-of-type):last-of-type .k-btn {\n  border-top-left-radius: 0;\n  border-top-right-radius: 0;\n}\n.k-btns.k-vertical > .k-tooltip:not(:first-of-type) .k-btn.k-primary {\n  border-top-color: #0958e0;\n}\n.k-btns.k-vertical > .k-tooltip:not(:last-of-type) .k-btn.k-primary {\n  border-bottom-color: #0958e0;\n}\n.k-btns.k-vertical > .k-tooltip:not(:first-of-type) .k-btn.k-warning {\n  border-top-color: #f08200;\n}\n.k-btns.k-vertical > .k-tooltip:not(:last-of-type) .k-btn.k-warning {\n  border-bottom-color: #f08200;\n}\n.k-btns.k-vertical > .k-tooltip:not(:first-of-type) .k-btn.k-danger {\n  border-top-color: #d12323;\n}\n.k-btns.k-vertical > .k-tooltip:not(:last-of-type) .k-btn.k-danger {\n  border-bottom-color: #d12323;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?{\"url\":true}!./node_modules/postcss-loader/lib/index.js?{\"plugins\":[null]}!./node_modules/stylus-loader/index.js?{\"include css\":true,\"sourceMap\":false}!./components/table/index.styl":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".k-table {\n  font-size: 0.857142857142857rem;\n  table-layout: fixed;\n  width: 100%;\n  background: #fff;\n  border-collapse: collapse;\n  border-spacing: 0;\n  color: #595959;\n}\n.k-table thead {\n  font-size: 1.166666666666667em;\n  color: #3f3f3f;\n  border-bottom: 1px solid #f0f0f0;\n}\n.k-table th {\n  padding: 0.785714285714286rem 0.357142857142857rem 0.785714285714286rem 0.857142857142857rem;\n  text-align: left;\n  font-weight: normal;\n  position: relative;\n  background: -webkit-gradient(linear, left top, left bottom, from(#fff), to(#fafafa));\n  background: linear-gradient(to bottom, #fff, #fafafa);\n}\n.k-table .k-th {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n}\n.k-table .k-sortable {\n  cursor: pointer;\n}\n.k-table .k-sort {\n  margin-left: 0.625em;\n}\n.k-table .k-sort .k-icon {\n  font-size: 0.75em;\n}\n.k-table .k-resize {\n  height: 100%;\n  width: 0.3125em;\n  position: absolute;\n  top: 0;\n  left: 0;\n  cursor: ew-resize;\n}\n.k-table tbody tr {\n  border-bottom: 1px solid #f0f0f0;\n}\n.k-table tbody tr:hover {\n  background: #f4f8fb;\n}\n.k-table td {\n  padding: 0.857142857142857rem 0.357142857142857rem 0.857142857142857rem 0.857142857142857rem;\n  word-break: break-word;\n}\n.k-table .k-th-check {\n  width: 2.142857142857143rem;\n}\n.k-table .k-th-check .k-checkbox {\n  vertical-align: 3px;\n}\n.k-table .k-no-data {\n  text-align: center;\n}\n.k-table-wrapper {\n  overflow: auto;\n  border-top: 1px solid #f0f0f0;\n}\n.k-table-wrapper .k-fixed {\n  position: relative;\n  z-index: 1;\n  border-bottom: 1px solid #f0f0f0;\n  background: -webkit-gradient(linear, left top, left bottom, from(#fff), to(#fafafa));\n  background: linear-gradient(to bottom, #fff, #fafafa);\n}\n.k-table-wrapper .k-fixed thead {\n  border: none;\n}\n.k-table-wrapper .k-scroll {\n  overflow-y: auto;\n  overflow-x: hidden;\n}\n.k-table-wrapper .k-scroll table {\n  margin-top: -44px;\n}\n.k-table-wrapper.k-border .k-fixed,\n.k-table-wrapper.k-border thead th {\n  background: #f7f7f7;\n}\n.k-table-wrapper.k-border .k-fixed,\n.k-table-wrapper.k-border .k-table {\n  border-left: 1px solid #f0f0f0;\n  border-right: 1px solid #f0f0f0;\n}\n.k-table-wrapper.k-border .k-fixed .k-table {\n  border: none;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?{\"url\":true}!./node_modules/postcss-loader/lib/index.js?{\"plugins\":[null]}!./node_modules/stylus-loader/index.js?{\"include css\":true,\"sourceMap\":false}!./site/src/pages/document/index.styl":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".document-page {\n  padding-top: 95px;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n}\n.document-page .content-wrapper.fixed {\n  margin-bottom: 0;\n}\n.document-page .content-wrapper.fixed aside {\n  position: fixed;\n  top: 80px;\n  background: #fff;\n  height: calc(100% - 80px);\n  overflow: auto;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n}\n.document-page .content-wrapper.fixed article {\n  margin-left: 300px;\n}\n.document-page .content-wrapper {\n  width: 100%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  background: #fff;\n  margin: 0 auto;\n  border-radius: 5px;\n  -webkit-box-shadow: 0 1px 1px rgba(0,0,0,0.08);\n          box-shadow: 0 1px 1px rgba(0,0,0,0.08);\n  min-height: calc(100% - 15px);\n}\n.document-page .content-wrapper aside {\n  width: 300px;\n  border-right: 1px solid #eee;\n}\n.document-page .content-wrapper .aside-wrapper {\n  position: relative;\n}\n.document-page .content-wrapper .aside-wrapper h5 {\n  font-size: 16px;\n  margin: 25px 0 15px 20px;\n  color: #999;\n}\n.document-page .content-wrapper .aside-wrapper ul {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n.document-page .content-wrapper .aside-wrapper a {\n  display: block;\n  height: 30px;\n  line-height: 30px;\n  padding-left: 25px;\n  color: #333;\n}\n.document-page .content-wrapper .aside-wrapper a:hover {\n  background: #f3f3f3;\n}\n.document-page .content-wrapper .aside-wrapper .active > a {\n  color: #0a5eee;\n}\n.document-page .content-wrapper .aside-wrapper .sub-catalogs {\n  margin-left: 10px;\n  font-size: 12px;\n}\n.document-page .content-wrapper .aside-wrapper .aside-border {\n  border-right: 2px solid #0a5eee;\n  position: absolute;\n  right: 0;\n  top: 0;\n}\n.document-page .content-wrapper article {\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  padding: 10px 20px;\n  overflow: auto;\n}\n.document-page .content-wrapper .article-head .title {\n  padding: 10px 0;\n  font-size: 2.2em;\n  color: #000;\n  display: inline-block;\n}\n.document-page .content-wrapper .article-head .edit-link {\n  display: inline-block;\n  margin-left: 20px;\n  color: #999;\n  font-style: italic;\n}\n.document-page .content-wrapper article h1 {\n  padding: 10px 0;\n  border-bottom: 1px solid #eee;\n  margin: 20px 0;\n}\n.document-page .content-wrapper article h2,\n.document-page .content-wrapper article h3 {\n  padding: 10px 0;\n  margin: 15px 0;\n}\n.document-page .content-wrapper article p {\n  line-height: 25px;\n}\n.document-page .content-wrapper article .output {\n  padding: 20px;\n  border: 1px solid #eee;\n  margin: 20px 0;\n}\n.document-page .api .k-table-wrapper thead th:first-of-type {\n  width: 150px;\n}\n.document-page .api .k-table-wrapper thead th:nth-child(2) {\n  width: 50%;\n}\n.document-page .example {\n  border: 1px solid #eee;\n  padding: 0 20px 20px 20px;\n  margin-bottom: 20px;\n}\n.document-page .example-opera {\n  padding: 30px 0;\n}\n.document-page .example-desc {\n  padding: 15px 5px;\n  border-bottom: 1px solid #eee;\n  border-top: 1px solid #eee;\n  position: relative;\n}\n.document-page .example-desc .title {\n  position: absolute;\n  top: -9px;\n  left: 15px;\n  background: #fff;\n  padding: 0 10px;\n}\n.document-page .example-code code {\n  border: none;\n  border-radius: 0;\n}\n.document-page ol {\n  list-style: decimal;\n  padding-left: 40px;\n}\n.document-page ol li {\n  list-style: decimal;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?{\"url\":true}!./node_modules/postcss-loader/lib/index.js?{\"plugins\":[null]}!./node_modules/stylus-loader/index.js?{\"include css\":true,\"sourceMap\":false}!./site/src/pages/layout.styl":
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__("./node_modules/css-loader/lib/url/escape.js");
exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".hljs {\n  display: block;\n  overflow-x: auto;\n  color: #525252;\n  padding: 15px;\n  -webkit-text-size-adjust: none;\n  margin: 0;\n}\n.hljs-doctype {\n  color: #999;\n}\n.hljs-tag {\n  color: #3e76f6;\n}\n.hljs-attribute {\n  color: #e96900;\n}\n.hljs-value {\n  color: #42b983;\n}\n.hljs-keyword {\n  color: #e96900;\n}\n.hljs-string {\n  color: #42b983;\n}\n.hljs-comment {\n  color: #b3b3b3;\n}\n.hljs-operator .hljs-comment {\n  color: #525252;\n}\n.hljs-regexp {\n  color: #af7dff;\n}\n.hljs-built_in {\n  color: #2db7f5;\n}\n.css .hljs-class {\n  color: #e96900;\n}\n.css .hljs-number,\n.javascript .hljs-number {\n  color: #fc1e70;\n}\n.css .hljs-attribute {\n  color: #af7dff;\n}\n.css .hljs-important {\n  color: #d04;\n}\n.actionscript .hljs-literal,\n.javascript .hljs-literal {\n  color: #fc1e70;\n}\npre {\n  padding: 0;\n  margin: 0;\n}\ncode {\n  display: inline-block;\n  background: #f7f7f7;\n  font-family: Consolas, Monaco, Andale Mono, Ubuntu Mono, monospace;\n  margin: 3px;\n  padding: 1px 5px;\n  border-radius: 3px;\n  color: #666;\n  border: 1px solid #eee;\n  line-height: 20px;\n}\n/*! normalize.css v7.0.0 | MIT License | github.com/necolas/normalize.css */\n\n/* Document\n   ========================================================================== */\n\n/**\n * 1. Correct the line height in all browsers.\n * 2. Prevent adjustments of font size after orientation changes in\n *    IE on Windows Phone and in iOS.\n */\n\nhtml {\n  line-height: 1.15; /* 1 */\n  -ms-text-size-adjust: 100%; /* 2 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n}\n\n/* Sections\n   ========================================================================== */\n\n/**\n * Remove the margin in all browsers (opinionated).\n */\n\nbody {\n  margin: 0;\n}\n\n/**\n * Add the correct display in IE 9-.\n */\n\narticle,\naside,\nfooter,\nheader,\nnav,\nsection {\n  display: block;\n}\n\n/**\n * Correct the font size and margin on `h1` elements within `section` and\n * `article` contexts in Chrome, Firefox, and Safari.\n */\n\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0;\n}\n\n/* Grouping content\n   ========================================================================== */\n\n/**\n * Add the correct display in IE 9-.\n * 1. Add the correct display in IE.\n */\n\nfigcaption,\nfigure,\nmain { /* 1 */\n  display: block;\n}\n\n/**\n * Add the correct margin in IE 8.\n */\n\nfigure {\n  margin: 1em 40px;\n}\n\n/**\n * 1. Add the correct box sizing in Firefox.\n * 2. Show the overflow in Edge and IE.\n */\n\nhr {\n  -webkit-box-sizing: content-box;\n          box-sizing: content-box; /* 1 */\n  height: 0; /* 1 */\n  overflow: visible; /* 2 */\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\npre {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/* Text-level semantics\n   ========================================================================== */\n\n/**\n * 1. Remove the gray background on active links in IE 10.\n * 2. Remove gaps in links underline in iOS 8+ and Safari 8+.\n */\n\na {\n  background-color: transparent; /* 1 */\n  -webkit-text-decoration-skip: objects; /* 2 */\n}\n\n/**\n * 1. Remove the bottom border in Chrome 57- and Firefox 39-.\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n */\n\nabbr[title] {\n  border-bottom: none; /* 1 */\n  text-decoration: underline; /* 2 */\n  -webkit-text-decoration: underline dotted;\n          text-decoration: underline dotted; /* 2 */\n}\n\n/**\n * Prevent the duplicate application of `bolder` by the next rule in Safari 6.\n */\n\nb,\nstrong {\n  font-weight: inherit;\n}\n\n/**\n * Add the correct font weight in Chrome, Edge, and Safari.\n */\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\ncode,\nkbd,\nsamp {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/**\n * Add the correct font style in Android 4.3-.\n */\n\ndfn {\n  font-style: italic;\n}\n\n/**\n * Add the correct background and color in IE 9-.\n */\n\nmark {\n  background-color: #ff0;\n  color: #000;\n}\n\n/**\n * Add the correct font size in all browsers.\n */\n\nsmall {\n  font-size: 80%;\n}\n\n/**\n * Prevent `sub` and `sup` elements from affecting the line height in\n * all browsers.\n */\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/* Embedded content\n   ========================================================================== */\n\n/**\n * Add the correct display in IE 9-.\n */\n\naudio,\nvideo {\n  display: inline-block;\n}\n\n/**\n * Add the correct display in iOS 4-7.\n */\n\naudio:not([controls]) {\n  display: none;\n  height: 0;\n}\n\n/**\n * Remove the border on images inside links in IE 10-.\n */\n\nimg {\n  border-style: none;\n}\n\n/**\n * Hide the overflow in IE.\n */\n\nsvg:not(:root) {\n  overflow: hidden;\n}\n\n/* Forms\n   ========================================================================== */\n\n/**\n * 1. Change the font styles in all browsers (opinionated).\n * 2. Remove the margin in Firefox and Safari.\n */\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: sans-serif; /* 1 */\n  font-size: 100%; /* 1 */\n  line-height: 1.15; /* 1 */\n  margin: 0; /* 2 */\n}\n\n/**\n * Show the overflow in IE.\n * 1. Show the overflow in Edge.\n */\n\nbutton,\ninput { /* 1 */\n  overflow: visible;\n}\n\n/**\n * Remove the inheritance of text transform in Edge, Firefox, and IE.\n * 1. Remove the inheritance of text transform in Firefox.\n */\n\nbutton,\nselect { /* 1 */\n  text-transform: none;\n}\n\n/**\n * 1. Prevent a WebKit bug where (2) destroys native `audio` and `video`\n *    controls in Android 4.\n * 2. Correct the inability to style clickable types in iOS and Safari.\n */\n\nbutton,\nhtml [type=\"button\"], /* 1 */\n[type=\"reset\"],\n[type=\"submit\"] {\n  -webkit-appearance: button; /* 2 */\n}\n\n/**\n * Remove the inner border and padding in Firefox.\n */\n\nbutton::-moz-focus-inner,\n[type=\"button\"]::-moz-focus-inner,\n[type=\"reset\"]::-moz-focus-inner,\n[type=\"submit\"]::-moz-focus-inner {\n  border-style: none;\n  padding: 0;\n}\n\n/**\n * Restore the focus styles unset by the previous rule.\n */\n\nbutton:-moz-focusring,\n[type=\"button\"]:-moz-focusring,\n[type=\"reset\"]:-moz-focusring,\n[type=\"submit\"]:-moz-focusring {\n  outline: 1px dotted ButtonText;\n}\n\n/**\n * Correct the padding in Firefox.\n */\n\nfieldset {\n  padding: 0.35em 0.75em 0.625em;\n}\n\n/**\n * 1. Correct the text wrapping in Edge and IE.\n * 2. Correct the color inheritance from `fieldset` elements in IE.\n * 3. Remove the padding so developers are not caught out when they zero out\n *    `fieldset` elements in all browsers.\n */\n\nlegend {\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box; /* 1 */\n  color: inherit; /* 2 */\n  display: table; /* 1 */\n  max-width: 100%; /* 1 */\n  padding: 0; /* 3 */\n  white-space: normal; /* 1 */\n}\n\n/**\n * 1. Add the correct display in IE 9-.\n * 2. Add the correct vertical alignment in Chrome, Firefox, and Opera.\n */\n\nprogress {\n  display: inline-block; /* 1 */\n  vertical-align: baseline; /* 2 */\n}\n\n/**\n * Remove the default vertical scrollbar in IE.\n */\n\ntextarea {\n  overflow: auto;\n}\n\n/**\n * 1. Add the correct box sizing in IE 10-.\n * 2. Remove the padding in IE 10-.\n */\n\n[type=\"checkbox\"],\n[type=\"radio\"] {\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box; /* 1 */\n  padding: 0; /* 2 */\n}\n\n/**\n * Correct the cursor style of increment and decrement buttons in Chrome.\n */\n\n[type=\"number\"]::-webkit-inner-spin-button,\n[type=\"number\"]::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/**\n * 1. Correct the odd appearance in Chrome and Safari.\n * 2. Correct the outline style in Safari.\n */\n\n[type=\"search\"] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n\n/**\n * Remove the inner padding and cancel buttons in Chrome and Safari on macOS.\n */\n\n[type=\"search\"]::-webkit-search-cancel-button,\n[type=\"search\"]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/**\n * 1. Correct the inability to style clickable types in iOS and Safari.\n * 2. Change font properties to `inherit` in Safari.\n */\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n\n/* Interactive\n   ========================================================================== */\n\n/*\n * Add the correct display in IE 9-.\n * 1. Add the correct display in Edge, IE, and Firefox.\n */\n\ndetails, /* 1 */\nmenu {\n  display: block;\n}\n\n/*\n * Add the correct display in all browsers.\n */\n\nsummary {\n  display: list-item;\n}\n\n/* Scripting\n   ========================================================================== */\n\n/**\n * Add the correct display in IE 9-.\n */\n\ncanvas {\n  display: inline-block;\n}\n\n/**\n * Add the correct display in IE.\n */\n\ntemplate {\n  display: none;\n}\n\n/* Hidden\n   ========================================================================== */\n\n/**\n * Add the correct display in IE 10-.\n */\n\n[hidden] {\n  display: none;\n}\n\n*,\n*:before,\n*:after {\n  -webkit-box-sizing: inherit;\n          box-sizing: inherit;\n}\nhtml {\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n}\ninput {\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  color: #595959;\n}\nul,\nol,\nli {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\ninput:focus,\nselect:focus {\n  outline: none;\n}\nhtml,\nbody,\n#app {\n  height: 100%;\n}\nhtml {\n  font-size: 0.875em;\n}\nbody {\n  font-family: 'Microsoft YaHei';\n  margin: 0;\n  padding: 0;\n  color: #595959;\n}\nh1,\nh2,\nh3,\nh4,\nh5 {\n  font-family: 'Microsoft YaHei';\n  margin: 0;\n  font-weight: bold;\n  padding: 0;\n}\nh1 {\n  min-height: 1rem;\n}\nh1 {\n  font-size: 2rem;\n}\nh1:first-child {\n  margin-top: 0;\n}\nh1:last-child {\n  margin-bottom: 0;\n}\nh2 {\n  font-size: 1.714285714285714rem;\n}\nh2:first-child {\n  margin-top: 0;\n}\nh2:last-child {\n  margin-bottom: 0;\n}\nh3 {\n  font-size: 1.285714285714286rem;\n}\nh3:first-child {\n  margin-top: 0;\n}\nh3:last-child {\n  margin-bottom: 0;\n}\nh4 {\n  font-size: 1.071428571428571rem;\n}\nh4:first-child {\n  margin-top: 0;\n}\nh4:last-child {\n  margin-bottom: 0;\n}\nh5 {\n  font-size: 1rem;\n}\nh5:first-child {\n  margin-top: 0;\n}\nh5:last-child {\n  margin-bottom: 0;\n}\na {\n  color: #4183c4;\n  text-decoration: none;\n  cursor: pointer;\n  outline: none;\n}\na:hover {\n  color: #195d9f;\n  text-decoration: none;\n}\ncode,\nkbd,\npre,\nsamp {\n  font-family: Consolas, Menlo, Courier, monospace;\n}\nlabel {\n  -webkit-tap-highlight-color: rgba(0,0,0,0);\n}\n.fade-enter,\n.fade-leave {\n  opacity: 0;\n}\n.fade-enter-active,\n.fade-leave-active {\n  -webkit-transition: opacity 0.25s ease-in-out;\n  transition: opacity 0.25s ease-in-out;\n}\n.fade-move {\n  -webkit-transition: -webkit-transform 0.25s ease-in-out;\n  transition: -webkit-transform 0.25s ease-in-out;\n  transition: transform 0.25s ease-in-out;\n  transition: transform 0.25s ease-in-out, -webkit-transform 0.25s ease-in-out;\n}\n.dropdown-enter,\n.dropdown-leave {\n  opacity: 0;\n  -webkit-transform: scaleY(0.8);\n      -ms-transform: scaleY(0.8);\n          transform: scaleY(0.8);\n}\n.dropdown-enter-active,\n.dropdown-leave-active {\n  -webkit-transform-origin: center top 0px;\n      -ms-transform-origin: center top 0px;\n          transform-origin: center top 0px;\n  -webkit-transition: opacity 0.25s ease-in-out, -webkit-transform 0.25s ease-in-out;\n  transition: opacity 0.25s ease-in-out, -webkit-transform 0.25s ease-in-out;\n  transition: opacity 0.25s ease-in-out, transform 0.25s ease-in-out;\n  transition: opacity 0.25s ease-in-out, transform 0.25s ease-in-out, -webkit-transform 0.25s ease-in-out;\n}\n@-webkit-keyframes rotate {\n  0% {\n    -webkit-transform-origin: 50% 50%;\n            transform-origin: 50% 50%;\n    -webkit-transform: rotate(0);\n            transform: rotate(0);\n  }\n  100% {\n    -webkit-transform-origin: 50% 50%;\n            transform-origin: 50% 50%;\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n@keyframes rotate {\n  0% {\n    -webkit-transform-origin: 50% 50%;\n            transform-origin: 50% 50%;\n    -webkit-transform: rotate(0);\n            transform: rotate(0);\n  }\n  100% {\n    -webkit-transform-origin: 50% 50%;\n            transform-origin: 50% 50%;\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n@font-face {\n  font-family: \"k-icon\";\n  src: url(" + escape(__webpack_require__("./styles/fonts/iconfont.eot?t=1506585686967")) + "); /* IE9*/\n  src: url(" + escape(__webpack_require__("./styles/fonts/iconfont.eot?t=1506585686967")) + "#iefix) format('embedded-opentype'), url(\"data:application/x-font-woff;charset=utf-8;base64,d09GRgABAAAAABWsAAsAAAAAHiQAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABHU1VCAAABCAAAADMAAABCsP6z7U9TLzIAAAE8AAAARAAAAFZW/UhdY21hcAAAAYAAAACzAAACfM9XLWxnbHlmAAACNAAAEMwAABYsnQ/m32hlYWQAABMAAAAAMQAAADYQ0t7XaGhlYQAAEzQAAAAgAAAAJAmtBXBobXR4AAATVAAAACMAAABQUhb//WxvY2EAABN4AAAAKgAAACpE2ECGbWF4cAAAE6QAAAAfAAAAIAE+AiNuYW1lAAATxAAAAUsAAAJVmFHnc3Bvc3QAABUQAAAAmQAAANFup3SIeJxjYGRgYOBikGPQYWB0cfMJYeBgYGGAAJAMY05meiJQDMoDyrGAaQ4gZoOIAgCKIwNPAHicY2BkkWacwMDKwMHUyXSGgYGhH0IzvmYwYuRgYGBiYGVmwAoC0lxTGBwYKp4JMzf8b2CIYd7L0A8UZgTJAQDgiQvveJzFkcsRwjAMRJ9D+IQEAsmFIqiHWnLmRKWqgHtYWbpQQeR5Xlnj32iBPbATT9FC+VDweKtaan3HudZbXlqfNBrpYp3N61qzYn3NPErd8ahZo7OtXjhwVK3TPT0DF66M3LgzMWvbgc2ibPf0fwx1/uZKXWFJ9EVLvO+WuGeWuG+WuJ+WqO9YIgewRF5giVzBEvfZ+gDXIfDf2SXA9RrgOga43gJc7wGuU4DrHDD/AFLzMJMAeJxtOAlwHNWV/f7va3ruq3s0M5qrpenRSBodo5mxDjQaaWzJ8inZxhhbtmyDQRyxZLwGjC3LBmMXR4AEc8WC7G4qLpOqZStZYCuwLAs2x+IEdje1ZShCIJssFRa2tkKRTYLV3vd7ZHBS67G633///fff9d97vzmB4y5+RF+kIc7PZbgOrsqt5TgQmyHlIvWQNLpypBmCSSGoBVzU0I2kpKdy9ArQUmJA7Sx2pTVREt3gghjkk51FI0cMKHT1k17oVOsB6iLhdb7GqI8+CErIiB01R8lfQTCuR939rebylnKgM+GXb3X4fHU+332yKAgyIbzbBTdrqk2wKaL5PcEdDr4YbyJxcNQZ4ZWbnImIb/vxrm/UN2o2gLk58EcSrlNlb9iL/w+EVb+vTvI45VDYqTcE4NZf2UN+R336Pzj8x6Oun9Bz9ArOjdomuTaOE5I5KHi7iii7qnld0Jj0JkFPpY1CP/RCUA/mIV0sNRbVOEiGUDToiQvvavG4Rg0tDhC/cI4GLnxKuz71qgCq99Of/ezCN8VgkLytNkpL+rsWem1EhbhGBLZm4UstXobfmndp3ue92sAxGEaqnyL5K97n3uKVmnwf8hwtcQmui1vDTaEn0m4QJRc0o4WD3oDKzKqhMGq+s9TPJKdpIwfokzTTohfUYqlYghy0QVpPiUFVi0EAHRQM4IIy9ANlaGkRjSwDNUalHJCSz5uozy4rkTN2j8f+Ls1fkQ7X25ySZFOKWt34gOO0SxEdj9qXXpWKwgj0d0k87/CAM9PekXV67ILAFwfiks3hBnCv2rx5lWTz2G3SphsApmhOdtSFEvkkeBxmxeFJ5uOhOhvlvQp1BheC/uBQA7W7YaPioA2Ddar5g8Eb4jzSeuTQ2HXjIRkhQuI3wZOCx+GVcydfOZnjnTaHRyg+OzP9LCej3V6g/0YnuFXck9wXMA4/IECcREX7FQtdRqnYxuyY/gqQDGbWOFr2EhAMaBK+1TKoXwElzTIarikiiICB5Gg0No9QM4hGyg3I1EgzNggU0oWuUroNkBzdUFwE2Fpkija/BKlSULT2hVQbcpFEHd/pMkooiTUA+Rj4Lpbi+GdB+U4EtZL1Vt0oJkpYg4IBSVNZmCCvGmR0aKpWE73DYlHTYtESBjNFhwXqqZo19JTOtOpgPFJ/apFeKOUXbcKsoZakRY2boQahqF2oKRP0ks69UOy0dr2ktvZneluiXm7JFDMlaldSO0tMQ9SZhSVGtFZTn5kf32ggjPdFqBnSKQkth0pLIhsaCAWZ5KrFDPdVJQxtAzmhFC4wXFBLWnQDJXtl2i4ohyJ6K7EdtImV5uYhQTlgg7aGyGE730LlGUr3yLRVUGYjqSyx3a6IQ83ZKi9SMmsjbanIrCK0U3nZrCy4swGJNK+u8hLJFSW+sj5NJCMqyPv1vxB5AcSZ5Kws1mckkhkb5OX2dlnoX9sBYqjXKdj2RG+SgABQAaQZ8+cSP5RtHuIlSm5XSLMexk1aedsMoTM2vpmX+bmoniPKAUIlfrAlO8Bjvjxog1Y9fIjaKIqz16Jsx8FsWG8jtlkyVhNZhnY9Mktl2mFpxrTHwaL6hKDU2ZYhRnnARnINkSO4AdpgDyVogxxSzkLYsgLuTKvN2dMbDIyzKC7Yr++VgPLintQsjmIZEZrGB3kJtI4QkWh5rIOgoi4q8rdEUFNKgKcgTYcOIcaVDYrQsmYplYiaj0j0kfUVXorkVZSmuroFRDXrQpazoWm2AaCNQLopsscmOPs0iXSs7Ud717VrslAZyxApU8+L/Gxyj8j4703tl4VoRiR/WxwGGC4WhgkZLiSy2YFsFrZqWiDQLSp3KaRFj+xW+AqVd4rCDpkWBOW2iN5EbPsUsaKGgoEeUbmbOTs6pwhtaA5R3CNCUVD2hVMpokwr4mY0QyDjFuTbk1OiLIvT+l2yEDNEkttc5m2qFo5KdHA0DWKmXpAPJCclkGSQJo1rZcHVFxYhNzQiyE676nSGUA/zh+KMwLZoE5S5iN4OtrsVsScQ1LSKqOyTAJr0yG2KUABxhyDsEGFAUHZH9BYA6agidgcw8IdEZQbpUqnwPjtfhNv2CGDJG0mlkGpaEapqc6BHUO5CohY9utsmDFjMdgpFnumeAWmfIgwy3XsF5W4Jg+awwreBsEcQVjLd6g0ht6VfkDRUTeQHV6QB+CaM9YOJSZFHJwnbM9dKgrs3gnCuupyXfW6nz+OR+cGVBpL6Mx5mq+tFjJhVqd0iRoN4feJ2WXQ3+QRjRUWQPR6f0+2z8SNDOSKF+1yC7Zr0NmQtbUscwO0zQnoUoyQaxg6BL1+NNEYMd4eRQs3HhZE3gHl5IMtRVvTpL2kb18CNcBs4rjFHsTUpsfKHySCN6UDCvIDZoavYiWnURSCF2aUfE1beqomMICBibcVVnTGCBEKt0CK1NyBCPD8xmk6PTuQbdadD0pzh6NjNhNw8Nn4z8UX8xvIJuL9Bdzpl1RWOjLOZcZz3R3w4c93EcgNf5qcuH5L6ZUgvn7h+YjlaU+HVsBPPD71pvLYGKVxdbKpB4bWwg8q1HXDG6fM5u2qMGL+qzwUNjNp83+VD1UWsi3P093SOC2BHkefK3Di3FWtiSjKKpU5NDKLyRZYZpRxcniahhsJxV5ohESVdNi0soiz7iTqWVVWwJmpEZHMxt379NZlGIOvLHelsQTztPHa4tQ+grzXHngtfQkfzuuJaNaanE4GxJZtaOj9u7SNkcRr+Zvsxx2mxtz3R2LdOaMruWLe+FSKtVwBc0Wo9yZHgt7IgSVJ5PYFIx+1VYWJ/FlcvkvSZH/bs1L+dvqEcHFhTCVSnMw/oO5+5tHmute9OcsdWOnok7wGyqleGpm8FKpfNLvaJc/R97MMoJ3F27BY58DZ6wZv0fvV+2rwDjpp30OcW/kjEhT9CxbyviJFz2jwGQ+b9ZnkY9sPvzB6YRX4J5PcG/Sc6itxkzsN5uTouzKU4nTOw527hWrkCV+R6uF700ABG6nLsY1ZzV3Ibuc3cFm6S246d4A3cN7jdHOfPS1pQN6RCMh80JL1QMmheKwX1klHQ80FJ0wtaqbHEXpJRyDeWgklNSgYNRAV1ROWDjaUkzhWSWCpxuVHSvHlEeyXkYfhLho48St68IeW9hlbQpZdPVM54zlThvx8afN3zevm452z1ROXsVgQfHHzN/H11/qOPnhr8yJzfBXV2u/nxLpLA4UeINv/XAXW7dpkfOzzzlS2ddvuWqanJF56aLH/2p0Ny1trgxIPI/7WyOX+G8Xe7Xy8/NPjaqer8plNPDU407tpkt0/sakLw+0vnrzqEMGK2zlc+iOKmn0xNgfrCUx+U4WrERBwOCE5Nmf/1Y8Sg7Z1o+x/Sn9LV6McA9vxZPAd93FK072ZuFzfDHeCOsfsOJ6mcVuRKaQ66sAvxYn8jsc66izU12FFgv8V+adYLBkUJsf5gmnVBhooXoALSYGPiRRJsxkT/pbZbKrJ+0Kj9YtDIUOyHfXiNn6rlQLD6Jvy5sA141fxSEIC+egYEQTAvmNs867Zfu0FpdbuK3d1Fj88BzfWRTFxzr954Y6R+42q3Fp9kiJh37I1I/cSYrz4+uX2dR9lwzOthK1xu6dZ4a0L3J9TwptmFhTo14W9ItCais3+ZzNcn/EZA2zpHfKGA4U9EO5PaHF0lmOarZ8w/oBjSmVeBmMU1IwFqvkLUnqwgaku6l2AnV1lWgDfFQKxktHnI4wHxR8TTZpQWPnyb4fIV798HxLept5IvvQX9NDCypr9HBTSbtVoU8oVlS0J+p31pd2N96uj3o43dS+3OQGjz3eZIVHXYrlqaCjc+8mJYX3qVzaFGrn3k0t3tPnqcHsST08ut5Cbw7pYymIuMLqtT7LQazSBLSZJIU1Z3GQzEiIW27jj9tGDRp2kqR77K6BQvukjW2U/wqgu/W7+m2tPVB/H47pEV3xsdmY4loK/QXV27bqRS3h6OuqOZULgnVjk8GOsJhzJRN0Qi28uV4cK2FYaxYtsN20YzmdFtheaVfYlE38oNq9hr1d5qzzVbzm0Yt9glYtMjo+Mbzm25pqdKX4paqxs3Tm7Nti4PL1kSXt6a3Tq5sXEYd4tEF56weC6yXmHAu8htw9e80S4E7XKMfkEPcQ4ux3I71qd+qNUnKw4tQzSw5F3EHM9GGOkqx/J9WoQvXQHwR/3+J8B/6J5A6F9PnDN/I8DxGR9Ave/OeZDA/daH0CqQ+SPeGJwKuOBhl9/vMm/CdccDSv8XT5x4y++58MbRd0pKwO+XBj4/+Zb5n24eEh888T9lyW/Jdz/9HGuQzg1jBcardRrrJ7qkzC4kaXbbSKW7cIC4APuQoINFs4jBm4FFE6it6FykIeWWNXGbT1M6DnWcb2vD5/M2zSc/P/TM0MDA+cTaZvNky9o4gkPPVGWfZuv8mizksz2fWJv9bTJuC3nltrbziG1re87mC9meGxhABucTCfM7yTiuPD8woGg+Wy53vnORRlOeSyQuxeNhnqDdi9wQt5bFI9ZVF8XLBwu4PMZTqZhjtxyqY7ixDmIxRmNYJqww9GN1TbIbiZbsZ60G3rD6CV7KUtRSNUdQbZW4d25Zfsfm9qamh7btuHHssTu314uuZFwKje0+VL36u7NDmVXX9a86teqqO1NSPOkSM/NTW8ZDPvOMLxTyQZ8v9JITnPPOVBgc807d5dSdTzqwk3c+6QR6SI9OzD285vptW+43MrlN+4Y9MafT07dz1KjsP3nl4MEb12j19am5Kz1OR8yz6/GMboJXA9BS7HHWmXQ+hjmePc17nY7HHak6cDzuTKJtLl68eI/wDv0HrHVJrG7deFbTDejTkq+BJVJMkTyIvCQizLdgYKK/G/zo1RwU+iEfA/iq+4oB+dWC+c3dovgStUN1eshmu8V8wLz4E/PNKQWUKeiG70K3BZpny8LJ6VseFef3znzb/HxkB9Dty5btoDC5z/nZr1FamHvc/PWN9/t0/y8/ocflF/7OH/c++xL847M+fP/YvPGWR6WT03sfFp8wf0N2jCzbTsnk8PId7IxdNC/O8Bx9ACv5IMawxHyFZwpF7MAHGzGf83jzZffUNKYaaMPWimfuzgeZwwuWxxvwsssuwCr953Oqy2Xca/7o1pZOHmg8rRIQeksPwaNP656MPCyGL6xjJN2Be2H1Posm1qhaJObU043uJnmZFH6nQUz7WqejR/MHq6JfE2MBWPNo5a+Tx7MeKfhqMA7bGEG1Dim6DlUFvyqEvfLaxxhFS40CHcN6HdRtDuujhme0DbMreoszsBhiohAtAIdWhcTuGTpjEGQ9ceMi7GLH9TKYcO+Zv8DikXzvPUhiDfvFey8Dx/MXuZdfvohv4LrckVjEnWxPwH4LgkRH4iV3JB72MGju8pXIqYQrXr6MA5zxhN3usCeUTIb+H4gD1OcUjdPDXD3q4b2UZ9iXAkwieMRw7MUjhw0+UV/n7XyW5833eQd7IGznz8piryCvoNm3a2NoQ4J/qRH+5MJ5Ee9N0mLefZreTI9wPuzhOKA5Vm+8lq+91hm3vtixTysujHl/DMO84M0B3fmZLer0ES0eOK3EwvzCH9yB0w6/3asQaXGGLIElDkFyqBf2efxEdVPtAycfiME6EvRc+OQDl90ftJlv2gXJrtJ7PH7O0nmOxujVTGfwltjHFzxk7KsK1BJpHKyvg53q1zr/XPhznenKC/++qDQqzBSvKU0zgiyjyv8H++sMn3icY2BkYGAAYiaDANt4fpuvDNwsDCBw9dPZMBj9/9//QtYLzHuBXA4GJpAoAEFvDVAAAAB4nGNgZGBgbvjfwBDDevf/v///WC8wAEVQgAgAxccIJnicY2FgYGB+ycDAAqRZ/KE0EZj17v//LAz//6GLAwDHqAZhAAAAAAAAdgDGAWIEbgTuBYoFsgZwB1QH4AgwCJwJKgmSCgAKaAqcCuILFgAAeJxjYGRgYBBhEmdQYAABJiDmAkIGhv9gPgMAD7kBZAB4nF2QO04DMRCG/80LsUEUIGhoLAqEQNk8OtJQREpqUqRPNt689iWvEykF5+EAnIADcAAarsABaPizOyASWx598/sfz8gAzvAJB8W64CnYQY1ZwSUc4Uq4TP1auEK+Fa6iDk+4xv0g7OIej8J1nGPJF5zKMbM7PAs7OMGLcAmneBUuU38TrpDfhau4xIdwjfqXsIsRvoXruHGe3J7RY6unarJVCz+JgyS27qqxw6GercOxKZIijrTJFkms2l6rEAY61ua3PtvMOtYGKjBJpPp8SIdholKTLLVvvbm1abfZDET3/CTiOD0YaIxhGadQmGDLuICPBDGCPFr6Vmj8qUN6Z1gjZJ3Zu/nPI7oMMua7TKHNz2/tOQZ0xLnrsH+GDTt0qFrOoHgMKyJSXybS7B6SFdL8bknFp+5hnlel6KLJHRz4vbx39AM8X2cCAHicbctbDoIwEEbh/lDaer9vxB2VMipRZ0g7BJeviT76vZ4cU5mvufnviAo1LBo4eATMMMcCS6ywxgZb7LDHAUecDF5NJqbJl4HinbIvpNrzNSRhpqRnN7Yj6+innjuZikvEKmXWRu6mvtNbeEiK2gvbVkT9b3P0GiSre0aOV/KZLpnKzT4lUx1LCuUTY/sg21FJxrwBbJEw7wAAAA==\") format('woff'), url(" + escape(__webpack_require__("./styles/fonts/iconfont.ttf?t=1506585686967")) + ") format('truetype'), url(" + escape(__webpack_require__("./styles/fonts/iconfont.svg?t=1506585686967")) + "#k-icon) format('svg'); /* iOS 4.1- */\n}\n.k-icon {\n  font-family: \"k-icon\";\n/* font-size:16px; */\n  font-size: 1.142857142857143rem;\n  font-style: normal;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n.icon-renew:before {\n  content: \"\\E601\";\n}\n.icon-speaker:before {\n  content: \"\\E602\";\n}\n.icon-setting:before {\n  content: \"\\E603\";\n}\n.icon-connect2:before {\n  content: \"\\E604\";\n}\n.icon-ubuntu:before {\n  content: \"\\E605\";\n}\n.icon-windows:before {\n  content: \"\\E606\";\n}\n.icon-centos:before {\n  content: \"\\E607\";\n}\n.icon-bandwidth:before {\n  content: \"\\E608\";\n}\n.icon-location:before {\n  content: \"\\E609\";\n}\n.icon-boot:before {\n  content: \"\\E60B\";\n}\n.icon-connect:before {\n  content: \"\\E60C\";\n}\n.icon-export:before {\n  content: \"\\E60D\";\n}\n.icon-manage:before {\n  content: \"\\E60E\";\n}\n.icon-refresh:before {\n  content: \"\\E60F\";\n}\n.icon-more:before {\n  content: \"\\E610\";\n}\n.icon-asc:before {\n  content: \"\\E611\";\n}\n.icon-sortable:before {\n  content: \"\\E612\";\n}\n.icon-desc:before {\n  content: \"\\E613\";\n}\n@charset \"UTF-8\";\n/*\n  Ionicons, v2.0.0\n  Created by Ben Sperry for the Ionic Framework, http://ionicons.com/\n  https://twitter.com/benjsperry  https://twitter.com/ionicframework\n  MIT License: https://github.com/driftyco/ionicons\n\n  Android-style icons originally built by Google’s\n  Material Design Icons: https://github.com/google/material-design-icons\n  used under CC BY http://creativecommons.org/licenses/by/4.0/\n  Modified icons to fit ionicon’s grid from original.\n*/\n@font-face {\n  font-family: \"Ionicons\";\n  src: url(" + escape(__webpack_require__("./styles/fonts/ionicons.eot?v=2.0.0")) + ");\n  src: url(" + escape(__webpack_require__("./styles/fonts/ionicons.eot?v=2.0.0")) + "#iefix) format(\"embedded-opentype\"), url(" + escape(__webpack_require__("./styles/fonts/ionicons.ttf?v=2.0.0")) + ") format(\"truetype\"), url(" + escape(__webpack_require__("./styles/fonts/ionicons.woff?v=2.0.0")) + ") format(\"woff\"), url(" + escape(__webpack_require__("./styles/fonts/ionicons.svg?v=2.0.0")) + "#Ionicons) format(\"svg\");\n  font-weight: normal;\n  font-style: normal;\n}\n.ion,\n.ionicons,\n.ion-alert:before,\n.ion-alert-circled:before,\n.ion-android-add:before,\n.ion-android-add-circle:before,\n.ion-android-alarm-clock:before,\n.ion-android-alert:before,\n.ion-android-apps:before,\n.ion-android-archive:before,\n.ion-android-arrow-back:before,\n.ion-android-arrow-down:before,\n.ion-android-arrow-dropdown:before,\n.ion-android-arrow-dropdown-circle:before,\n.ion-android-arrow-dropleft:before,\n.ion-android-arrow-dropleft-circle:before,\n.ion-android-arrow-dropright:before,\n.ion-android-arrow-dropright-circle:before,\n.ion-android-arrow-dropup:before,\n.ion-android-arrow-dropup-circle:before,\n.ion-android-arrow-forward:before,\n.ion-android-arrow-up:before,\n.ion-android-attach:before,\n.ion-android-bar:before,\n.ion-android-bicycle:before,\n.ion-android-boat:before,\n.ion-android-bookmark:before,\n.ion-android-bulb:before,\n.ion-android-bus:before,\n.ion-android-calendar:before,\n.ion-android-call:before,\n.ion-android-camera:before,\n.ion-android-cancel:before,\n.ion-android-car:before,\n.ion-android-cart:before,\n.ion-android-chat:before,\n.ion-android-checkbox:before,\n.ion-android-checkbox-blank:before,\n.ion-android-checkbox-outline:before,\n.ion-android-checkbox-outline-blank:before,\n.ion-android-checkmark-circle:before,\n.ion-android-clipboard:before,\n.ion-android-close:before,\n.ion-android-cloud:before,\n.ion-android-cloud-circle:before,\n.ion-android-cloud-done:before,\n.ion-android-cloud-outline:before,\n.ion-android-color-palette:before,\n.ion-android-compass:before,\n.ion-android-contact:before,\n.ion-android-contacts:before,\n.ion-android-contract:before,\n.ion-android-create:before,\n.ion-android-delete:before,\n.ion-android-desktop:before,\n.ion-android-document:before,\n.ion-android-done:before,\n.ion-android-done-all:before,\n.ion-android-download:before,\n.ion-android-drafts:before,\n.ion-android-exit:before,\n.ion-android-expand:before,\n.ion-android-favorite:before,\n.ion-android-favorite-outline:before,\n.ion-android-film:before,\n.ion-android-folder:before,\n.ion-android-folder-open:before,\n.ion-android-funnel:before,\n.ion-android-globe:before,\n.ion-android-hand:before,\n.ion-android-hangout:before,\n.ion-android-happy:before,\n.ion-android-home:before,\n.ion-android-image:before,\n.ion-android-laptop:before,\n.ion-android-list:before,\n.ion-android-locate:before,\n.ion-android-lock:before,\n.ion-android-mail:before,\n.ion-android-map:before,\n.ion-android-menu:before,\n.ion-android-microphone:before,\n.ion-android-microphone-off:before,\n.ion-android-more-horizontal:before,\n.ion-android-more-vertical:before,\n.ion-android-navigate:before,\n.ion-android-notifications:before,\n.ion-android-notifications-none:before,\n.ion-android-notifications-off:before,\n.ion-android-open:before,\n.ion-android-options:before,\n.ion-android-people:before,\n.ion-android-person:before,\n.ion-android-person-add:before,\n.ion-android-phone-landscape:before,\n.ion-android-phone-portrait:before,\n.ion-android-pin:before,\n.ion-android-plane:before,\n.ion-android-playstore:before,\n.ion-android-print:before,\n.ion-android-radio-button-off:before,\n.ion-android-radio-button-on:before,\n.ion-android-refresh:before,\n.ion-android-remove:before,\n.ion-android-remove-circle:before,\n.ion-android-restaurant:before,\n.ion-android-sad:before,\n.ion-android-search:before,\n.ion-android-send:before,\n.ion-android-settings:before,\n.ion-android-share:before,\n.ion-android-share-alt:before,\n.ion-android-star:before,\n.ion-android-star-half:before,\n.ion-android-star-outline:before,\n.ion-android-stopwatch:before,\n.ion-android-subway:before,\n.ion-android-sunny:before,\n.ion-android-sync:before,\n.ion-android-textsms:before,\n.ion-android-time:before,\n.ion-android-train:before,\n.ion-android-unlock:before,\n.ion-android-upload:before,\n.ion-android-volume-down:before,\n.ion-android-volume-mute:before,\n.ion-android-volume-off:before,\n.ion-android-volume-up:before,\n.ion-android-walk:before,\n.ion-android-warning:before,\n.ion-android-watch:before,\n.ion-android-wifi:before,\n.ion-aperture:before,\n.ion-archive:before,\n.ion-arrow-down-a:before,\n.ion-arrow-down-b:before,\n.ion-arrow-down-c:before,\n.ion-arrow-expand:before,\n.ion-arrow-graph-down-left:before,\n.ion-arrow-graph-down-right:before,\n.ion-arrow-graph-up-left:before,\n.ion-arrow-graph-up-right:before,\n.ion-arrow-left-a:before,\n.ion-arrow-left-b:before,\n.ion-arrow-left-c:before,\n.ion-arrow-move:before,\n.ion-arrow-resize:before,\n.ion-arrow-return-left:before,\n.ion-arrow-return-right:before,\n.ion-arrow-right-a:before,\n.ion-arrow-right-b:before,\n.ion-arrow-right-c:before,\n.ion-arrow-shrink:before,\n.ion-arrow-swap:before,\n.ion-arrow-up-a:before,\n.ion-arrow-up-b:before,\n.ion-arrow-up-c:before,\n.ion-asterisk:before,\n.ion-at:before,\n.ion-backspace:before,\n.ion-backspace-outline:before,\n.ion-bag:before,\n.ion-battery-charging:before,\n.ion-battery-empty:before,\n.ion-battery-full:before,\n.ion-battery-half:before,\n.ion-battery-low:before,\n.ion-beaker:before,\n.ion-beer:before,\n.ion-bluetooth:before,\n.ion-bonfire:before,\n.ion-bookmark:before,\n.ion-bowtie:before,\n.ion-briefcase:before,\n.ion-bug:before,\n.ion-calculator:before,\n.ion-calendar:before,\n.ion-camera:before,\n.ion-card:before,\n.ion-cash:before,\n.ion-chatbox:before,\n.ion-chatbox-working:before,\n.ion-chatboxes:before,\n.ion-chatbubble:before,\n.ion-chatbubble-working:before,\n.ion-chatbubbles:before,\n.ion-checkmark:before,\n.ion-checkmark-circled:before,\n.ion-checkmark-round:before,\n.ion-chevron-down:before,\n.ion-chevron-left:before,\n.ion-chevron-right:before,\n.ion-chevron-up:before,\n.ion-clipboard:before,\n.ion-clock:before,\n.ion-close:before,\n.ion-close-circled:before,\n.ion-close-round:before,\n.ion-closed-captioning:before,\n.ion-cloud:before,\n.ion-code:before,\n.ion-code-download:before,\n.ion-code-working:before,\n.ion-coffee:before,\n.ion-compass:before,\n.ion-compose:before,\n.ion-connection-bars:before,\n.ion-contrast:before,\n.ion-crop:before,\n.ion-cube:before,\n.ion-disc:before,\n.ion-document:before,\n.ion-document-text:before,\n.ion-drag:before,\n.ion-earth:before,\n.ion-easel:before,\n.ion-edit:before,\n.ion-egg:before,\n.ion-eject:before,\n.ion-email:before,\n.ion-email-unread:before,\n.ion-erlenmeyer-flask:before,\n.ion-erlenmeyer-flask-bubbles:before,\n.ion-eye:before,\n.ion-eye-disabled:before,\n.ion-female:before,\n.ion-filing:before,\n.ion-film-marker:before,\n.ion-fireball:before,\n.ion-flag:before,\n.ion-flame:before,\n.ion-flash:before,\n.ion-flash-off:before,\n.ion-folder:before,\n.ion-fork:before,\n.ion-fork-repo:before,\n.ion-forward:before,\n.ion-funnel:before,\n.ion-gear-a:before,\n.ion-gear-b:before,\n.ion-grid:before,\n.ion-hammer:before,\n.ion-happy:before,\n.ion-happy-outline:before,\n.ion-headphone:before,\n.ion-heart:before,\n.ion-heart-broken:before,\n.ion-help:before,\n.ion-help-buoy:before,\n.ion-help-circled:before,\n.ion-home:before,\n.ion-icecream:before,\n.ion-image:before,\n.ion-images:before,\n.ion-information:before,\n.ion-information-circled:before,\n.ion-ionic:before,\n.ion-ios-alarm:before,\n.ion-ios-alarm-outline:before,\n.ion-ios-albums:before,\n.ion-ios-albums-outline:before,\n.ion-ios-americanfootball:before,\n.ion-ios-americanfootball-outline:before,\n.ion-ios-analytics:before,\n.ion-ios-analytics-outline:before,\n.ion-ios-arrow-back:before,\n.ion-ios-arrow-down:before,\n.ion-ios-arrow-forward:before,\n.ion-ios-arrow-left:before,\n.ion-ios-arrow-right:before,\n.ion-ios-arrow-thin-down:before,\n.ion-ios-arrow-thin-left:before,\n.ion-ios-arrow-thin-right:before,\n.ion-ios-arrow-thin-up:before,\n.ion-ios-arrow-up:before,\n.ion-ios-at:before,\n.ion-ios-at-outline:before,\n.ion-ios-barcode:before,\n.ion-ios-barcode-outline:before,\n.ion-ios-baseball:before,\n.ion-ios-baseball-outline:before,\n.ion-ios-basketball:before,\n.ion-ios-basketball-outline:before,\n.ion-ios-bell:before,\n.ion-ios-bell-outline:before,\n.ion-ios-body:before,\n.ion-ios-body-outline:before,\n.ion-ios-bolt:before,\n.ion-ios-bolt-outline:before,\n.ion-ios-book:before,\n.ion-ios-book-outline:before,\n.ion-ios-bookmarks:before,\n.ion-ios-bookmarks-outline:before,\n.ion-ios-box:before,\n.ion-ios-box-outline:before,\n.ion-ios-briefcase:before,\n.ion-ios-briefcase-outline:before,\n.ion-ios-browsers:before,\n.ion-ios-browsers-outline:before,\n.ion-ios-calculator:before,\n.ion-ios-calculator-outline:before,\n.ion-ios-calendar:before,\n.ion-ios-calendar-outline:before,\n.ion-ios-camera:before,\n.ion-ios-camera-outline:before,\n.ion-ios-cart:before,\n.ion-ios-cart-outline:before,\n.ion-ios-chatboxes:before,\n.ion-ios-chatboxes-outline:before,\n.ion-ios-chatbubble:before,\n.ion-ios-chatbubble-outline:before,\n.ion-ios-checkmark:before,\n.ion-ios-checkmark-empty:before,\n.ion-ios-checkmark-outline:before,\n.ion-ios-circle-filled:before,\n.ion-ios-circle-outline:before,\n.ion-ios-clock:before,\n.ion-ios-clock-outline:before,\n.ion-ios-close:before,\n.ion-ios-close-empty:before,\n.ion-ios-close-outline:before,\n.ion-ios-cloud:before,\n.ion-ios-cloud-download:before,\n.ion-ios-cloud-download-outline:before,\n.ion-ios-cloud-outline:before,\n.ion-ios-cloud-upload:before,\n.ion-ios-cloud-upload-outline:before,\n.ion-ios-cloudy:before,\n.ion-ios-cloudy-night:before,\n.ion-ios-cloudy-night-outline:before,\n.ion-ios-cloudy-outline:before,\n.ion-ios-cog:before,\n.ion-ios-cog-outline:before,\n.ion-ios-color-filter:before,\n.ion-ios-color-filter-outline:before,\n.ion-ios-color-wand:before,\n.ion-ios-color-wand-outline:before,\n.ion-ios-compose:before,\n.ion-ios-compose-outline:before,\n.ion-ios-contact:before,\n.ion-ios-contact-outline:before,\n.ion-ios-copy:before,\n.ion-ios-copy-outline:before,\n.ion-ios-crop:before,\n.ion-ios-crop-strong:before,\n.ion-ios-download:before,\n.ion-ios-download-outline:before,\n.ion-ios-drag:before,\n.ion-ios-email:before,\n.ion-ios-email-outline:before,\n.ion-ios-eye:before,\n.ion-ios-eye-outline:before,\n.ion-ios-fastforward:before,\n.ion-ios-fastforward-outline:before,\n.ion-ios-filing:before,\n.ion-ios-filing-outline:before,\n.ion-ios-film:before,\n.ion-ios-film-outline:before,\n.ion-ios-flag:before,\n.ion-ios-flag-outline:before,\n.ion-ios-flame:before,\n.ion-ios-flame-outline:before,\n.ion-ios-flask:before,\n.ion-ios-flask-outline:before,\n.ion-ios-flower:before,\n.ion-ios-flower-outline:before,\n.ion-ios-folder:before,\n.ion-ios-folder-outline:before,\n.ion-ios-football:before,\n.ion-ios-football-outline:before,\n.ion-ios-game-controller-a:before,\n.ion-ios-game-controller-a-outline:before,\n.ion-ios-game-controller-b:before,\n.ion-ios-game-controller-b-outline:before,\n.ion-ios-gear:before,\n.ion-ios-gear-outline:before,\n.ion-ios-glasses:before,\n.ion-ios-glasses-outline:before,\n.ion-ios-grid-view:before,\n.ion-ios-grid-view-outline:before,\n.ion-ios-heart:before,\n.ion-ios-heart-outline:before,\n.ion-ios-help:before,\n.ion-ios-help-empty:before,\n.ion-ios-help-outline:before,\n.ion-ios-home:before,\n.ion-ios-home-outline:before,\n.ion-ios-infinite:before,\n.ion-ios-infinite-outline:before,\n.ion-ios-information:before,\n.ion-ios-information-empty:before,\n.ion-ios-information-outline:before,\n.ion-ios-ionic-outline:before,\n.ion-ios-keypad:before,\n.ion-ios-keypad-outline:before,\n.ion-ios-lightbulb:before,\n.ion-ios-lightbulb-outline:before,\n.ion-ios-list:before,\n.ion-ios-list-outline:before,\n.ion-ios-location:before,\n.ion-ios-location-outline:before,\n.ion-ios-locked:before,\n.ion-ios-locked-outline:before,\n.ion-ios-loop:before,\n.ion-ios-loop-strong:before,\n.ion-ios-medical:before,\n.ion-ios-medical-outline:before,\n.ion-ios-medkit:before,\n.ion-ios-medkit-outline:before,\n.ion-ios-mic:before,\n.ion-ios-mic-off:before,\n.ion-ios-mic-outline:before,\n.ion-ios-minus:before,\n.ion-ios-minus-empty:before,\n.ion-ios-minus-outline:before,\n.ion-ios-monitor:before,\n.ion-ios-monitor-outline:before,\n.ion-ios-moon:before,\n.ion-ios-moon-outline:before,\n.ion-ios-more:before,\n.ion-ios-more-outline:before,\n.ion-ios-musical-note:before,\n.ion-ios-musical-notes:before,\n.ion-ios-navigate:before,\n.ion-ios-navigate-outline:before,\n.ion-ios-nutrition:before,\n.ion-ios-nutrition-outline:before,\n.ion-ios-paper:before,\n.ion-ios-paper-outline:before,\n.ion-ios-paperplane:before,\n.ion-ios-paperplane-outline:before,\n.ion-ios-partlysunny:before,\n.ion-ios-partlysunny-outline:before,\n.ion-ios-pause:before,\n.ion-ios-pause-outline:before,\n.ion-ios-paw:before,\n.ion-ios-paw-outline:before,\n.ion-ios-people:before,\n.ion-ios-people-outline:before,\n.ion-ios-person:before,\n.ion-ios-person-outline:before,\n.ion-ios-personadd:before,\n.ion-ios-personadd-outline:before,\n.ion-ios-photos:before,\n.ion-ios-photos-outline:before,\n.ion-ios-pie:before,\n.ion-ios-pie-outline:before,\n.ion-ios-pint:before,\n.ion-ios-pint-outline:before,\n.ion-ios-play:before,\n.ion-ios-play-outline:before,\n.ion-ios-plus:before,\n.ion-ios-plus-empty:before,\n.ion-ios-plus-outline:before,\n.ion-ios-pricetag:before,\n.ion-ios-pricetag-outline:before,\n.ion-ios-pricetags:before,\n.ion-ios-pricetags-outline:before,\n.ion-ios-printer:before,\n.ion-ios-printer-outline:before,\n.ion-ios-pulse:before,\n.ion-ios-pulse-strong:before,\n.ion-ios-rainy:before,\n.ion-ios-rainy-outline:before,\n.ion-ios-recording:before,\n.ion-ios-recording-outline:before,\n.ion-ios-redo:before,\n.ion-ios-redo-outline:before,\n.ion-ios-refresh:before,\n.ion-ios-refresh-empty:before,\n.ion-ios-refresh-outline:before,\n.ion-ios-reload:before,\n.ion-ios-reverse-camera:before,\n.ion-ios-reverse-camera-outline:before,\n.ion-ios-rewind:before,\n.ion-ios-rewind-outline:before,\n.ion-ios-rose:before,\n.ion-ios-rose-outline:before,\n.ion-ios-search:before,\n.ion-ios-search-strong:before,\n.ion-ios-settings:before,\n.ion-ios-settings-strong:before,\n.ion-ios-shuffle:before,\n.ion-ios-shuffle-strong:before,\n.ion-ios-skipbackward:before,\n.ion-ios-skipbackward-outline:before,\n.ion-ios-skipforward:before,\n.ion-ios-skipforward-outline:before,\n.ion-ios-snowy:before,\n.ion-ios-speedometer:before,\n.ion-ios-speedometer-outline:before,\n.ion-ios-star:before,\n.ion-ios-star-half:before,\n.ion-ios-star-outline:before,\n.ion-ios-stopwatch:before,\n.ion-ios-stopwatch-outline:before,\n.ion-ios-sunny:before,\n.ion-ios-sunny-outline:before,\n.ion-ios-telephone:before,\n.ion-ios-telephone-outline:before,\n.ion-ios-tennisball:before,\n.ion-ios-tennisball-outline:before,\n.ion-ios-thunderstorm:before,\n.ion-ios-thunderstorm-outline:before,\n.ion-ios-time:before,\n.ion-ios-time-outline:before,\n.ion-ios-timer:before,\n.ion-ios-timer-outline:before,\n.ion-ios-toggle:before,\n.ion-ios-toggle-outline:before,\n.ion-ios-trash:before,\n.ion-ios-trash-outline:before,\n.ion-ios-undo:before,\n.ion-ios-undo-outline:before,\n.ion-ios-unlocked:before,\n.ion-ios-unlocked-outline:before,\n.ion-ios-upload:before,\n.ion-ios-upload-outline:before,\n.ion-ios-videocam:before,\n.ion-ios-videocam-outline:before,\n.ion-ios-volume-high:before,\n.ion-ios-volume-low:before,\n.ion-ios-wineglass:before,\n.ion-ios-wineglass-outline:before,\n.ion-ios-world:before,\n.ion-ios-world-outline:before,\n.ion-ipad:before,\n.ion-iphone:before,\n.ion-ipod:before,\n.ion-jet:before,\n.ion-key:before,\n.ion-knife:before,\n.ion-laptop:before,\n.ion-leaf:before,\n.ion-levels:before,\n.ion-lightbulb:before,\n.ion-link:before,\n.ion-load-a:before,\n.ion-load-b:before,\n.ion-load-c:before,\n.ion-load-d:before,\n.ion-location:before,\n.ion-lock-combination:before,\n.ion-locked:before,\n.ion-log-in:before,\n.ion-log-out:before,\n.ion-loop:before,\n.ion-magnet:before,\n.ion-male:before,\n.ion-man:before,\n.ion-map:before,\n.ion-medkit:before,\n.ion-merge:before,\n.ion-mic-a:before,\n.ion-mic-b:before,\n.ion-mic-c:before,\n.ion-minus:before,\n.ion-minus-circled:before,\n.ion-minus-round:before,\n.ion-model-s:before,\n.ion-monitor:before,\n.ion-more:before,\n.ion-mouse:before,\n.ion-music-note:before,\n.ion-navicon:before,\n.ion-navicon-round:before,\n.ion-navigate:before,\n.ion-network:before,\n.ion-no-smoking:before,\n.ion-nuclear:before,\n.ion-outlet:before,\n.ion-paintbrush:before,\n.ion-paintbucket:before,\n.ion-paper-airplane:before,\n.ion-paperclip:before,\n.ion-pause:before,\n.ion-person:before,\n.ion-person-add:before,\n.ion-person-stalker:before,\n.ion-pie-graph:before,\n.ion-pin:before,\n.ion-pinpoint:before,\n.ion-pizza:before,\n.ion-plane:before,\n.ion-planet:before,\n.ion-play:before,\n.ion-playstation:before,\n.ion-plus:before,\n.ion-plus-circled:before,\n.ion-plus-round:before,\n.ion-podium:before,\n.ion-pound:before,\n.ion-power:before,\n.ion-pricetag:before,\n.ion-pricetags:before,\n.ion-printer:before,\n.ion-pull-request:before,\n.ion-qr-scanner:before,\n.ion-quote:before,\n.ion-radio-waves:before,\n.ion-record:before,\n.ion-refresh:before,\n.ion-reply:before,\n.ion-reply-all:before,\n.ion-ribbon-a:before,\n.ion-ribbon-b:before,\n.ion-sad:before,\n.ion-sad-outline:before,\n.ion-scissors:before,\n.ion-search:before,\n.ion-settings:before,\n.ion-share:before,\n.ion-shuffle:before,\n.ion-skip-backward:before,\n.ion-skip-forward:before,\n.ion-social-android:before,\n.ion-social-android-outline:before,\n.ion-social-angular:before,\n.ion-social-angular-outline:before,\n.ion-social-apple:before,\n.ion-social-apple-outline:before,\n.ion-social-bitcoin:before,\n.ion-social-bitcoin-outline:before,\n.ion-social-buffer:before,\n.ion-social-buffer-outline:before,\n.ion-social-chrome:before,\n.ion-social-chrome-outline:before,\n.ion-social-codepen:before,\n.ion-social-codepen-outline:before,\n.ion-social-css3:before,\n.ion-social-css3-outline:before,\n.ion-social-designernews:before,\n.ion-social-designernews-outline:before,\n.ion-social-dribbble:before,\n.ion-social-dribbble-outline:before,\n.ion-social-dropbox:before,\n.ion-social-dropbox-outline:before,\n.ion-social-euro:before,\n.ion-social-euro-outline:before,\n.ion-social-facebook:before,\n.ion-social-facebook-outline:before,\n.ion-social-foursquare:before,\n.ion-social-foursquare-outline:before,\n.ion-social-freebsd-devil:before,\n.ion-social-github:before,\n.ion-social-github-outline:before,\n.ion-social-google:before,\n.ion-social-google-outline:before,\n.ion-social-googleplus:before,\n.ion-social-googleplus-outline:before,\n.ion-social-hackernews:before,\n.ion-social-hackernews-outline:before,\n.ion-social-html5:before,\n.ion-social-html5-outline:before,\n.ion-social-instagram:before,\n.ion-social-instagram-outline:before,\n.ion-social-javascript:before,\n.ion-social-javascript-outline:before,\n.ion-social-linkedin:before,\n.ion-social-linkedin-outline:before,\n.ion-social-markdown:before,\n.ion-social-nodejs:before,\n.ion-social-octocat:before,\n.ion-social-pinterest:before,\n.ion-social-pinterest-outline:before,\n.ion-social-python:before,\n.ion-social-reddit:before,\n.ion-social-reddit-outline:before,\n.ion-social-rss:before,\n.ion-social-rss-outline:before,\n.ion-social-sass:before,\n.ion-social-skype:before,\n.ion-social-skype-outline:before,\n.ion-social-snapchat:before,\n.ion-social-snapchat-outline:before,\n.ion-social-tumblr:before,\n.ion-social-tumblr-outline:before,\n.ion-social-tux:before,\n.ion-social-twitch:before,\n.ion-social-twitch-outline:before,\n.ion-social-twitter:before,\n.ion-social-twitter-outline:before,\n.ion-social-usd:before,\n.ion-social-usd-outline:before,\n.ion-social-vimeo:before,\n.ion-social-vimeo-outline:before,\n.ion-social-whatsapp:before,\n.ion-social-whatsapp-outline:before,\n.ion-social-windows:before,\n.ion-social-windows-outline:before,\n.ion-social-wordpress:before,\n.ion-social-wordpress-outline:before,\n.ion-social-yahoo:before,\n.ion-social-yahoo-outline:before,\n.ion-social-yen:before,\n.ion-social-yen-outline:before,\n.ion-social-youtube:before,\n.ion-social-youtube-outline:before,\n.ion-soup-can:before,\n.ion-soup-can-outline:before,\n.ion-speakerphone:before,\n.ion-speedometer:before,\n.ion-spoon:before,\n.ion-star:before,\n.ion-stats-bars:before,\n.ion-steam:before,\n.ion-stop:before,\n.ion-thermometer:before,\n.ion-thumbsdown:before,\n.ion-thumbsup:before,\n.ion-toggle:before,\n.ion-toggle-filled:before,\n.ion-transgender:before,\n.ion-trash-a:before,\n.ion-trash-b:before,\n.ion-trophy:before,\n.ion-tshirt:before,\n.ion-tshirt-outline:before,\n.ion-umbrella:before,\n.ion-university:before,\n.ion-unlocked:before,\n.ion-upload:before,\n.ion-usb:before,\n.ion-videocamera:before,\n.ion-volume-high:before,\n.ion-volume-low:before,\n.ion-volume-medium:before,\n.ion-volume-mute:before,\n.ion-wand:before,\n.ion-waterdrop:before,\n.ion-wifi:before,\n.ion-wineglass:before,\n.ion-woman:before,\n.ion-wrench:before,\n.ion-xbox:before {\n/* font-size: 16px; */\n  font-size: 1.142857142857143rem;\n  display: inline-block;\n  font-family: \"Ionicons\";\n  speak: none;\n  font-style: normal;\n  font-weight: normal;\n  font-variant: normal;\n  text-transform: none;\n  text-rendering: auto;\n/* line-height: 1;  */\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n.ion-alert:before {\n  content: \"\\F101\";\n}\n.ion-alert-circled:before {\n  content: \"\\F100\";\n}\n.ion-android-add:before {\n  content: \"\\F2C7\";\n}\n.ion-android-add-circle:before {\n  content: \"\\F359\";\n}\n.ion-android-alarm-clock:before {\n  content: \"\\F35A\";\n}\n.ion-android-alert:before {\n  content: \"\\F35B\";\n}\n.ion-android-apps:before {\n  content: \"\\F35C\";\n}\n.ion-android-archive:before {\n  content: \"\\F2C9\";\n}\n.ion-android-arrow-back:before {\n  content: \"\\F2CA\";\n}\n.ion-android-arrow-down:before {\n  content: \"\\F35D\";\n}\n.ion-android-arrow-dropdown:before {\n  content: \"\\F35F\";\n}\n.ion-android-arrow-dropdown-circle:before {\n  content: \"\\F35E\";\n}\n.ion-android-arrow-dropleft:before {\n  content: \"\\F361\";\n}\n.ion-android-arrow-dropleft-circle:before {\n  content: \"\\F360\";\n}\n.ion-android-arrow-dropright:before {\n  content: \"\\F363\";\n}\n.ion-android-arrow-dropright-circle:before {\n  content: \"\\F362\";\n}\n.ion-android-arrow-dropup:before {\n  content: \"\\F365\";\n}\n.ion-android-arrow-dropup-circle:before {\n  content: \"\\F364\";\n}\n.ion-android-arrow-forward:before {\n  content: \"\\F30F\";\n}\n.ion-android-arrow-up:before {\n  content: \"\\F366\";\n}\n.ion-android-attach:before {\n  content: \"\\F367\";\n}\n.ion-android-bar:before {\n  content: \"\\F368\";\n}\n.ion-android-bicycle:before {\n  content: \"\\F369\";\n}\n.ion-android-boat:before {\n  content: \"\\F36A\";\n}\n.ion-android-bookmark:before {\n  content: \"\\F36B\";\n}\n.ion-android-bulb:before {\n  content: \"\\F36C\";\n}\n.ion-android-bus:before {\n  content: \"\\F36D\";\n}\n.ion-android-calendar:before {\n  content: \"\\F2D1\";\n}\n.ion-android-call:before {\n  content: \"\\F2D2\";\n}\n.ion-android-camera:before {\n  content: \"\\F2D3\";\n}\n.ion-android-cancel:before {\n  content: \"\\F36E\";\n}\n.ion-android-car:before {\n  content: \"\\F36F\";\n}\n.ion-android-cart:before {\n  content: \"\\F370\";\n}\n.ion-android-chat:before {\n  content: \"\\F2D4\";\n}\n.ion-android-checkbox:before {\n  content: \"\\F374\";\n}\n.ion-android-checkbox-blank:before {\n  content: \"\\F371\";\n}\n.ion-android-checkbox-outline:before {\n  content: \"\\F373\";\n}\n.ion-android-checkbox-outline-blank:before {\n  content: \"\\F372\";\n}\n.ion-android-checkmark-circle:before {\n  content: \"\\F375\";\n}\n.ion-android-clipboard:before {\n  content: \"\\F376\";\n}\n.ion-android-close:before {\n  content: \"\\F2D7\";\n}\n.ion-android-cloud:before {\n  content: \"\\F37A\";\n}\n.ion-android-cloud-circle:before {\n  content: \"\\F377\";\n}\n.ion-android-cloud-done:before {\n  content: \"\\F378\";\n}\n.ion-android-cloud-outline:before {\n  content: \"\\F379\";\n}\n.ion-android-color-palette:before {\n  content: \"\\F37B\";\n}\n.ion-android-compass:before {\n  content: \"\\F37C\";\n}\n.ion-android-contact:before {\n  content: \"\\F2D8\";\n}\n.ion-android-contacts:before {\n  content: \"\\F2D9\";\n}\n.ion-android-contract:before {\n  content: \"\\F37D\";\n}\n.ion-android-create:before {\n  content: \"\\F37E\";\n}\n.ion-android-delete:before {\n  content: \"\\F37F\";\n}\n.ion-android-desktop:before {\n  content: \"\\F380\";\n}\n.ion-android-document:before {\n  content: \"\\F381\";\n}\n.ion-android-done:before {\n  content: \"\\F383\";\n}\n.ion-android-done-all:before {\n  content: \"\\F382\";\n}\n.ion-android-download:before {\n  content: \"\\F2DD\";\n}\n.ion-android-drafts:before {\n  content: \"\\F384\";\n}\n.ion-android-exit:before {\n  content: \"\\F385\";\n}\n.ion-android-expand:before {\n  content: \"\\F386\";\n}\n.ion-android-favorite:before {\n  content: \"\\F388\";\n}\n.ion-android-favorite-outline:before {\n  content: \"\\F387\";\n}\n.ion-android-film:before {\n  content: \"\\F389\";\n}\n.ion-android-folder:before {\n  content: \"\\F2E0\";\n}\n.ion-android-folder-open:before {\n  content: \"\\F38A\";\n}\n.ion-android-funnel:before {\n  content: \"\\F38B\";\n}\n.ion-android-globe:before {\n  content: \"\\F38C\";\n}\n.ion-android-hand:before {\n  content: \"\\F2E3\";\n}\n.ion-android-hangout:before {\n  content: \"\\F38D\";\n}\n.ion-android-happy:before {\n  content: \"\\F38E\";\n}\n.ion-android-home:before {\n  content: \"\\F38F\";\n}\n.ion-android-image:before {\n  content: \"\\F2E4\";\n}\n.ion-android-laptop:before {\n  content: \"\\F390\";\n}\n.ion-android-list:before {\n  content: \"\\F391\";\n}\n.ion-android-locate:before {\n  content: \"\\F2E9\";\n}\n.ion-android-lock:before {\n  content: \"\\F392\";\n}\n.ion-android-mail:before {\n  content: \"\\F2EB\";\n}\n.ion-android-map:before {\n  content: \"\\F393\";\n}\n.ion-android-menu:before {\n  content: \"\\F394\";\n}\n.ion-android-microphone:before {\n  content: \"\\F2EC\";\n}\n.ion-android-microphone-off:before {\n  content: \"\\F395\";\n}\n.ion-android-more-horizontal:before {\n  content: \"\\F396\";\n}\n.ion-android-more-vertical:before {\n  content: \"\\F397\";\n}\n.ion-android-navigate:before {\n  content: \"\\F398\";\n}\n.ion-android-notifications:before {\n  content: \"\\F39B\";\n}\n.ion-android-notifications-none:before {\n  content: \"\\F399\";\n}\n.ion-android-notifications-off:before {\n  content: \"\\F39A\";\n}\n.ion-android-open:before {\n  content: \"\\F39C\";\n}\n.ion-android-options:before {\n  content: \"\\F39D\";\n}\n.ion-android-people:before {\n  content: \"\\F39E\";\n}\n.ion-android-person:before {\n  content: \"\\F3A0\";\n}\n.ion-android-person-add:before {\n  content: \"\\F39F\";\n}\n.ion-android-phone-landscape:before {\n  content: \"\\F3A1\";\n}\n.ion-android-phone-portrait:before {\n  content: \"\\F3A2\";\n}\n.ion-android-pin:before {\n  content: \"\\F3A3\";\n}\n.ion-android-plane:before {\n  content: \"\\F3A4\";\n}\n.ion-android-playstore:before {\n  content: \"\\F2F0\";\n}\n.ion-android-print:before {\n  content: \"\\F3A5\";\n}\n.ion-android-radio-button-off:before {\n  content: \"\\F3A6\";\n}\n.ion-android-radio-button-on:before {\n  content: \"\\F3A7\";\n}\n.ion-android-refresh:before {\n  content: \"\\F3A8\";\n}\n.ion-android-remove:before {\n  content: \"\\F2F4\";\n}\n.ion-android-remove-circle:before {\n  content: \"\\F3A9\";\n}\n.ion-android-restaurant:before {\n  content: \"\\F3AA\";\n}\n.ion-android-sad:before {\n  content: \"\\F3AB\";\n}\n.ion-android-search:before {\n  content: \"\\F2F5\";\n}\n.ion-android-send:before {\n  content: \"\\F2F6\";\n}\n.ion-android-settings:before {\n  content: \"\\F2F7\";\n}\n.ion-android-share:before {\n  content: \"\\F2F8\";\n}\n.ion-android-share-alt:before {\n  content: \"\\F3AC\";\n}\n.ion-android-star:before {\n  content: \"\\F2FC\";\n}\n.ion-android-star-half:before {\n  content: \"\\F3AD\";\n}\n.ion-android-star-outline:before {\n  content: \"\\F3AE\";\n}\n.ion-android-stopwatch:before {\n  content: \"\\F2FD\";\n}\n.ion-android-subway:before {\n  content: \"\\F3AF\";\n}\n.ion-android-sunny:before {\n  content: \"\\F3B0\";\n}\n.ion-android-sync:before {\n  content: \"\\F3B1\";\n}\n.ion-android-textsms:before {\n  content: \"\\F3B2\";\n}\n.ion-android-time:before {\n  content: \"\\F3B3\";\n}\n.ion-android-train:before {\n  content: \"\\F3B4\";\n}\n.ion-android-unlock:before {\n  content: \"\\F3B5\";\n}\n.ion-android-upload:before {\n  content: \"\\F3B6\";\n}\n.ion-android-volume-down:before {\n  content: \"\\F3B7\";\n}\n.ion-android-volume-mute:before {\n  content: \"\\F3B8\";\n}\n.ion-android-volume-off:before {\n  content: \"\\F3B9\";\n}\n.ion-android-volume-up:before {\n  content: \"\\F3BA\";\n}\n.ion-android-walk:before {\n  content: \"\\F3BB\";\n}\n.ion-android-warning:before {\n  content: \"\\F3BC\";\n}\n.ion-android-watch:before {\n  content: \"\\F3BD\";\n}\n.ion-android-wifi:before {\n  content: \"\\F305\";\n}\n.ion-aperture:before {\n  content: \"\\F313\";\n}\n.ion-archive:before {\n  content: \"\\F102\";\n}\n.ion-arrow-down-a:before {\n  content: \"\\F103\";\n}\n.ion-arrow-down-b:before {\n  content: \"\\F104\";\n}\n.ion-arrow-down-c:before {\n  content: \"\\F105\";\n}\n.ion-arrow-expand:before {\n  content: \"\\F25E\";\n}\n.ion-arrow-graph-down-left:before {\n  content: \"\\F25F\";\n}\n.ion-arrow-graph-down-right:before {\n  content: \"\\F260\";\n}\n.ion-arrow-graph-up-left:before {\n  content: \"\\F261\";\n}\n.ion-arrow-graph-up-right:before {\n  content: \"\\F262\";\n}\n.ion-arrow-left-a:before {\n  content: \"\\F106\";\n}\n.ion-arrow-left-b:before {\n  content: \"\\F107\";\n}\n.ion-arrow-left-c:before {\n  content: \"\\F108\";\n}\n.ion-arrow-move:before {\n  content: \"\\F263\";\n}\n.ion-arrow-resize:before {\n  content: \"\\F264\";\n}\n.ion-arrow-return-left:before {\n  content: \"\\F265\";\n}\n.ion-arrow-return-right:before {\n  content: \"\\F266\";\n}\n.ion-arrow-right-a:before {\n  content: \"\\F109\";\n}\n.ion-arrow-right-b:before {\n  content: \"\\F10A\";\n}\n.ion-arrow-right-c:before {\n  content: \"\\F10B\";\n}\n.ion-arrow-shrink:before {\n  content: \"\\F267\";\n}\n.ion-arrow-swap:before {\n  content: \"\\F268\";\n}\n.ion-arrow-up-a:before {\n  content: \"\\F10C\";\n}\n.ion-arrow-up-b:before {\n  content: \"\\F10D\";\n}\n.ion-arrow-up-c:before {\n  content: \"\\F10E\";\n}\n.ion-asterisk:before {\n  content: \"\\F314\";\n}\n.ion-at:before {\n  content: \"\\F10F\";\n}\n.ion-backspace:before {\n  content: \"\\F3BF\";\n}\n.ion-backspace-outline:before {\n  content: \"\\F3BE\";\n}\n.ion-bag:before {\n  content: \"\\F110\";\n}\n.ion-battery-charging:before {\n  content: \"\\F111\";\n}\n.ion-battery-empty:before {\n  content: \"\\F112\";\n}\n.ion-battery-full:before {\n  content: \"\\F113\";\n}\n.ion-battery-half:before {\n  content: \"\\F114\";\n}\n.ion-battery-low:before {\n  content: \"\\F115\";\n}\n.ion-beaker:before {\n  content: \"\\F269\";\n}\n.ion-beer:before {\n  content: \"\\F26A\";\n}\n.ion-bluetooth:before {\n  content: \"\\F116\";\n}\n.ion-bonfire:before {\n  content: \"\\F315\";\n}\n.ion-bookmark:before {\n  content: \"\\F26B\";\n}\n.ion-bowtie:before {\n  content: \"\\F3C0\";\n}\n.ion-briefcase:before {\n  content: \"\\F26C\";\n}\n.ion-bug:before {\n  content: \"\\F2BE\";\n}\n.ion-calculator:before {\n  content: \"\\F26D\";\n}\n.ion-calendar:before {\n  content: \"\\F117\";\n}\n.ion-camera:before {\n  content: \"\\F118\";\n}\n.ion-card:before {\n  content: \"\\F119\";\n}\n.ion-cash:before {\n  content: \"\\F316\";\n}\n.ion-chatbox:before {\n  content: \"\\F11B\";\n}\n.ion-chatbox-working:before {\n  content: \"\\F11A\";\n}\n.ion-chatboxes:before {\n  content: \"\\F11C\";\n}\n.ion-chatbubble:before {\n  content: \"\\F11E\";\n}\n.ion-chatbubble-working:before {\n  content: \"\\F11D\";\n}\n.ion-chatbubbles:before {\n  content: \"\\F11F\";\n}\n.ion-checkmark:before {\n  content: \"\\F122\";\n}\n.ion-checkmark-circled:before {\n  content: \"\\F120\";\n}\n.ion-checkmark-round:before {\n  content: \"\\F121\";\n}\n.ion-chevron-down:before {\n  content: \"\\F123\";\n}\n.ion-chevron-left:before {\n  content: \"\\F124\";\n}\n.ion-chevron-right:before {\n  content: \"\\F125\";\n}\n.ion-chevron-up:before {\n  content: \"\\F126\";\n}\n.ion-clipboard:before {\n  content: \"\\F127\";\n}\n.ion-clock:before {\n  content: \"\\F26E\";\n}\n.ion-close:before {\n  content: \"\\F12A\";\n}\n.ion-close-circled:before {\n  content: \"\\F128\";\n}\n.ion-close-round:before {\n  content: \"\\F129\";\n}\n.ion-closed-captioning:before {\n  content: \"\\F317\";\n}\n.ion-cloud:before {\n  content: \"\\F12B\";\n}\n.ion-code:before {\n  content: \"\\F271\";\n}\n.ion-code-download:before {\n  content: \"\\F26F\";\n}\n.ion-code-working:before {\n  content: \"\\F270\";\n}\n.ion-coffee:before {\n  content: \"\\F272\";\n}\n.ion-compass:before {\n  content: \"\\F273\";\n}\n.ion-compose:before {\n  content: \"\\F12C\";\n}\n.ion-connection-bars:before {\n  content: \"\\F274\";\n}\n.ion-contrast:before {\n  content: \"\\F275\";\n}\n.ion-crop:before {\n  content: \"\\F3C1\";\n}\n.ion-cube:before {\n  content: \"\\F318\";\n}\n.ion-disc:before {\n  content: \"\\F12D\";\n}\n.ion-document:before {\n  content: \"\\F12F\";\n}\n.ion-document-text:before {\n  content: \"\\F12E\";\n}\n.ion-drag:before {\n  content: \"\\F130\";\n}\n.ion-earth:before {\n  content: \"\\F276\";\n}\n.ion-easel:before {\n  content: \"\\F3C2\";\n}\n.ion-edit:before {\n  content: \"\\F2BF\";\n}\n.ion-egg:before {\n  content: \"\\F277\";\n}\n.ion-eject:before {\n  content: \"\\F131\";\n}\n.ion-email:before {\n  content: \"\\F132\";\n}\n.ion-email-unread:before {\n  content: \"\\F3C3\";\n}\n.ion-erlenmeyer-flask:before {\n  content: \"\\F3C5\";\n}\n.ion-erlenmeyer-flask-bubbles:before {\n  content: \"\\F3C4\";\n}\n.ion-eye:before {\n  content: \"\\F133\";\n}\n.ion-eye-disabled:before {\n  content: \"\\F306\";\n}\n.ion-female:before {\n  content: \"\\F278\";\n}\n.ion-filing:before {\n  content: \"\\F134\";\n}\n.ion-film-marker:before {\n  content: \"\\F135\";\n}\n.ion-fireball:before {\n  content: \"\\F319\";\n}\n.ion-flag:before {\n  content: \"\\F279\";\n}\n.ion-flame:before {\n  content: \"\\F31A\";\n}\n.ion-flash:before {\n  content: \"\\F137\";\n}\n.ion-flash-off:before {\n  content: \"\\F136\";\n}\n.ion-folder:before {\n  content: \"\\F139\";\n}\n.ion-fork:before {\n  content: \"\\F27A\";\n}\n.ion-fork-repo:before {\n  content: \"\\F2C0\";\n}\n.ion-forward:before {\n  content: \"\\F13A\";\n}\n.ion-funnel:before {\n  content: \"\\F31B\";\n}\n.ion-gear-a:before {\n  content: \"\\F13D\";\n}\n.ion-gear-b:before {\n  content: \"\\F13E\";\n}\n.ion-grid:before {\n  content: \"\\F13F\";\n}\n.ion-hammer:before {\n  content: \"\\F27B\";\n}\n.ion-happy:before {\n  content: \"\\F31C\";\n}\n.ion-happy-outline:before {\n  content: \"\\F3C6\";\n}\n.ion-headphone:before {\n  content: \"\\F140\";\n}\n.ion-heart:before {\n  content: \"\\F141\";\n}\n.ion-heart-broken:before {\n  content: \"\\F31D\";\n}\n.ion-help:before {\n  content: \"\\F143\";\n}\n.ion-help-buoy:before {\n  content: \"\\F27C\";\n}\n.ion-help-circled:before {\n  content: \"\\F142\";\n}\n.ion-home:before {\n  content: \"\\F144\";\n}\n.ion-icecream:before {\n  content: \"\\F27D\";\n}\n.ion-image:before {\n  content: \"\\F147\";\n}\n.ion-images:before {\n  content: \"\\F148\";\n}\n.ion-information:before {\n  content: \"\\F14A\";\n}\n.ion-information-circled:before {\n  content: \"\\F149\";\n}\n.ion-ionic:before {\n  content: \"\\F14B\";\n}\n.ion-ios-alarm:before {\n  content: \"\\F3C8\";\n}\n.ion-ios-alarm-outline:before {\n  content: \"\\F3C7\";\n}\n.ion-ios-albums:before {\n  content: \"\\F3CA\";\n}\n.ion-ios-albums-outline:before {\n  content: \"\\F3C9\";\n}\n.ion-ios-americanfootball:before {\n  content: \"\\F3CC\";\n}\n.ion-ios-americanfootball-outline:before {\n  content: \"\\F3CB\";\n}\n.ion-ios-analytics:before {\n  content: \"\\F3CE\";\n}\n.ion-ios-analytics-outline:before {\n  content: \"\\F3CD\";\n}\n.ion-ios-arrow-back:before {\n  content: \"\\F3CF\";\n}\n.ion-ios-arrow-down:before {\n  content: \"\\F3D0\";\n}\n.ion-ios-arrow-forward:before {\n  content: \"\\F3D1\";\n}\n.ion-ios-arrow-left:before {\n  content: \"\\F3D2\";\n}\n.ion-ios-arrow-right:before {\n  content: \"\\F3D3\";\n}\n.ion-ios-arrow-thin-down:before {\n  content: \"\\F3D4\";\n}\n.ion-ios-arrow-thin-left:before {\n  content: \"\\F3D5\";\n}\n.ion-ios-arrow-thin-right:before {\n  content: \"\\F3D6\";\n}\n.ion-ios-arrow-thin-up:before {\n  content: \"\\F3D7\";\n}\n.ion-ios-arrow-up:before {\n  content: \"\\F3D8\";\n}\n.ion-ios-at:before {\n  content: \"\\F3DA\";\n}\n.ion-ios-at-outline:before {\n  content: \"\\F3D9\";\n}\n.ion-ios-barcode:before {\n  content: \"\\F3DC\";\n}\n.ion-ios-barcode-outline:before {\n  content: \"\\F3DB\";\n}\n.ion-ios-baseball:before {\n  content: \"\\F3DE\";\n}\n.ion-ios-baseball-outline:before {\n  content: \"\\F3DD\";\n}\n.ion-ios-basketball:before {\n  content: \"\\F3E0\";\n}\n.ion-ios-basketball-outline:before {\n  content: \"\\F3DF\";\n}\n.ion-ios-bell:before {\n  content: \"\\F3E2\";\n}\n.ion-ios-bell-outline:before {\n  content: \"\\F3E1\";\n}\n.ion-ios-body:before {\n  content: \"\\F3E4\";\n}\n.ion-ios-body-outline:before {\n  content: \"\\F3E3\";\n}\n.ion-ios-bolt:before {\n  content: \"\\F3E6\";\n}\n.ion-ios-bolt-outline:before {\n  content: \"\\F3E5\";\n}\n.ion-ios-book:before {\n  content: \"\\F3E8\";\n}\n.ion-ios-book-outline:before {\n  content: \"\\F3E7\";\n}\n.ion-ios-bookmarks:before {\n  content: \"\\F3EA\";\n}\n.ion-ios-bookmarks-outline:before {\n  content: \"\\F3E9\";\n}\n.ion-ios-box:before {\n  content: \"\\F3EC\";\n}\n.ion-ios-box-outline:before {\n  content: \"\\F3EB\";\n}\n.ion-ios-briefcase:before {\n  content: \"\\F3EE\";\n}\n.ion-ios-briefcase-outline:before {\n  content: \"\\F3ED\";\n}\n.ion-ios-browsers:before {\n  content: \"\\F3F0\";\n}\n.ion-ios-browsers-outline:before {\n  content: \"\\F3EF\";\n}\n.ion-ios-calculator:before {\n  content: \"\\F3F2\";\n}\n.ion-ios-calculator-outline:before {\n  content: \"\\F3F1\";\n}\n.ion-ios-calendar:before {\n  content: \"\\F3F4\";\n}\n.ion-ios-calendar-outline:before {\n  content: \"\\F3F3\";\n}\n.ion-ios-camera:before {\n  content: \"\\F3F6\";\n}\n.ion-ios-camera-outline:before {\n  content: \"\\F3F5\";\n}\n.ion-ios-cart:before {\n  content: \"\\F3F8\";\n}\n.ion-ios-cart-outline:before {\n  content: \"\\F3F7\";\n}\n.ion-ios-chatboxes:before {\n  content: \"\\F3FA\";\n}\n.ion-ios-chatboxes-outline:before {\n  content: \"\\F3F9\";\n}\n.ion-ios-chatbubble:before {\n  content: \"\\F3FC\";\n}\n.ion-ios-chatbubble-outline:before {\n  content: \"\\F3FB\";\n}\n.ion-ios-checkmark:before {\n  content: \"\\F3FF\";\n}\n.ion-ios-checkmark-empty:before {\n  content: \"\\F3FD\";\n}\n.ion-ios-checkmark-outline:before {\n  content: \"\\F3FE\";\n}\n.ion-ios-circle-filled:before {\n  content: \"\\F400\";\n}\n.ion-ios-circle-outline:before {\n  content: \"\\F401\";\n}\n.ion-ios-clock:before {\n  content: \"\\F403\";\n}\n.ion-ios-clock-outline:before {\n  content: \"\\F402\";\n}\n.ion-ios-close:before {\n  content: \"\\F406\";\n}\n.ion-ios-close-empty:before {\n  content: \"\\F404\";\n}\n.ion-ios-close-outline:before {\n  content: \"\\F405\";\n}\n.ion-ios-cloud:before {\n  content: \"\\F40C\";\n}\n.ion-ios-cloud-download:before {\n  content: \"\\F408\";\n}\n.ion-ios-cloud-download-outline:before {\n  content: \"\\F407\";\n}\n.ion-ios-cloud-outline:before {\n  content: \"\\F409\";\n}\n.ion-ios-cloud-upload:before {\n  content: \"\\F40B\";\n}\n.ion-ios-cloud-upload-outline:before {\n  content: \"\\F40A\";\n}\n.ion-ios-cloudy:before {\n  content: \"\\F410\";\n}\n.ion-ios-cloudy-night:before {\n  content: \"\\F40E\";\n}\n.ion-ios-cloudy-night-outline:before {\n  content: \"\\F40D\";\n}\n.ion-ios-cloudy-outline:before {\n  content: \"\\F40F\";\n}\n.ion-ios-cog:before {\n  content: \"\\F412\";\n}\n.ion-ios-cog-outline:before {\n  content: \"\\F411\";\n}\n.ion-ios-color-filter:before {\n  content: \"\\F414\";\n}\n.ion-ios-color-filter-outline:before {\n  content: \"\\F413\";\n}\n.ion-ios-color-wand:before {\n  content: \"\\F416\";\n}\n.ion-ios-color-wand-outline:before {\n  content: \"\\F415\";\n}\n.ion-ios-compose:before {\n  content: \"\\F418\";\n}\n.ion-ios-compose-outline:before {\n  content: \"\\F417\";\n}\n.ion-ios-contact:before {\n  content: \"\\F41A\";\n}\n.ion-ios-contact-outline:before {\n  content: \"\\F419\";\n}\n.ion-ios-copy:before {\n  content: \"\\F41C\";\n}\n.ion-ios-copy-outline:before {\n  content: \"\\F41B\";\n}\n.ion-ios-crop:before {\n  content: \"\\F41E\";\n}\n.ion-ios-crop-strong:before {\n  content: \"\\F41D\";\n}\n.ion-ios-download:before {\n  content: \"\\F420\";\n}\n.ion-ios-download-outline:before {\n  content: \"\\F41F\";\n}\n.ion-ios-drag:before {\n  content: \"\\F421\";\n}\n.ion-ios-email:before {\n  content: \"\\F423\";\n}\n.ion-ios-email-outline:before {\n  content: \"\\F422\";\n}\n.ion-ios-eye:before {\n  content: \"\\F425\";\n}\n.ion-ios-eye-outline:before {\n  content: \"\\F424\";\n}\n.ion-ios-fastforward:before {\n  content: \"\\F427\";\n}\n.ion-ios-fastforward-outline:before {\n  content: \"\\F426\";\n}\n.ion-ios-filing:before {\n  content: \"\\F429\";\n}\n.ion-ios-filing-outline:before {\n  content: \"\\F428\";\n}\n.ion-ios-film:before {\n  content: \"\\F42B\";\n}\n.ion-ios-film-outline:before {\n  content: \"\\F42A\";\n}\n.ion-ios-flag:before {\n  content: \"\\F42D\";\n}\n.ion-ios-flag-outline:before {\n  content: \"\\F42C\";\n}\n.ion-ios-flame:before {\n  content: \"\\F42F\";\n}\n.ion-ios-flame-outline:before {\n  content: \"\\F42E\";\n}\n.ion-ios-flask:before {\n  content: \"\\F431\";\n}\n.ion-ios-flask-outline:before {\n  content: \"\\F430\";\n}\n.ion-ios-flower:before {\n  content: \"\\F433\";\n}\n.ion-ios-flower-outline:before {\n  content: \"\\F432\";\n}\n.ion-ios-folder:before {\n  content: \"\\F435\";\n}\n.ion-ios-folder-outline:before {\n  content: \"\\F434\";\n}\n.ion-ios-football:before {\n  content: \"\\F437\";\n}\n.ion-ios-football-outline:before {\n  content: \"\\F436\";\n}\n.ion-ios-game-controller-a:before {\n  content: \"\\F439\";\n}\n.ion-ios-game-controller-a-outline:before {\n  content: \"\\F438\";\n}\n.ion-ios-game-controller-b:before {\n  content: \"\\F43B\";\n}\n.ion-ios-game-controller-b-outline:before {\n  content: \"\\F43A\";\n}\n.ion-ios-gear:before {\n  content: \"\\F43D\";\n}\n.ion-ios-gear-outline:before {\n  content: \"\\F43C\";\n}\n.ion-ios-glasses:before {\n  content: \"\\F43F\";\n}\n.ion-ios-glasses-outline:before {\n  content: \"\\F43E\";\n}\n.ion-ios-grid-view:before {\n  content: \"\\F441\";\n}\n.ion-ios-grid-view-outline:before {\n  content: \"\\F440\";\n}\n.ion-ios-heart:before {\n  content: \"\\F443\";\n}\n.ion-ios-heart-outline:before {\n  content: \"\\F442\";\n}\n.ion-ios-help:before {\n  content: \"\\F446\";\n}\n.ion-ios-help-empty:before {\n  content: \"\\F444\";\n}\n.ion-ios-help-outline:before {\n  content: \"\\F445\";\n}\n.ion-ios-home:before {\n  content: \"\\F448\";\n}\n.ion-ios-home-outline:before {\n  content: \"\\F447\";\n}\n.ion-ios-infinite:before {\n  content: \"\\F44A\";\n}\n.ion-ios-infinite-outline:before {\n  content: \"\\F449\";\n}\n.ion-ios-information:before {\n  content: \"\\F44D\";\n}\n.ion-ios-information-empty:before {\n  content: \"\\F44B\";\n}\n.ion-ios-information-outline:before {\n  content: \"\\F44C\";\n}\n.ion-ios-ionic-outline:before {\n  content: \"\\F44E\";\n}\n.ion-ios-keypad:before {\n  content: \"\\F450\";\n}\n.ion-ios-keypad-outline:before {\n  content: \"\\F44F\";\n}\n.ion-ios-lightbulb:before {\n  content: \"\\F452\";\n}\n.ion-ios-lightbulb-outline:before {\n  content: \"\\F451\";\n}\n.ion-ios-list:before {\n  content: \"\\F454\";\n}\n.ion-ios-list-outline:before {\n  content: \"\\F453\";\n}\n.ion-ios-location:before {\n  content: \"\\F456\";\n}\n.ion-ios-location-outline:before {\n  content: \"\\F455\";\n}\n.ion-ios-locked:before {\n  content: \"\\F458\";\n}\n.ion-ios-locked-outline:before {\n  content: \"\\F457\";\n}\n.ion-ios-loop:before {\n  content: \"\\F45A\";\n}\n.ion-ios-loop-strong:before {\n  content: \"\\F459\";\n}\n.ion-ios-medical:before {\n  content: \"\\F45C\";\n}\n.ion-ios-medical-outline:before {\n  content: \"\\F45B\";\n}\n.ion-ios-medkit:before {\n  content: \"\\F45E\";\n}\n.ion-ios-medkit-outline:before {\n  content: \"\\F45D\";\n}\n.ion-ios-mic:before {\n  content: \"\\F461\";\n}\n.ion-ios-mic-off:before {\n  content: \"\\F45F\";\n}\n.ion-ios-mic-outline:before {\n  content: \"\\F460\";\n}\n.ion-ios-minus:before {\n  content: \"\\F464\";\n}\n.ion-ios-minus-empty:before {\n  content: \"\\F462\";\n}\n.ion-ios-minus-outline:before {\n  content: \"\\F463\";\n}\n.ion-ios-monitor:before {\n  content: \"\\F466\";\n}\n.ion-ios-monitor-outline:before {\n  content: \"\\F465\";\n}\n.ion-ios-moon:before {\n  content: \"\\F468\";\n}\n.ion-ios-moon-outline:before {\n  content: \"\\F467\";\n}\n.ion-ios-more:before {\n  content: \"\\F46A\";\n}\n.ion-ios-more-outline:before {\n  content: \"\\F469\";\n}\n.ion-ios-musical-note:before {\n  content: \"\\F46B\";\n}\n.ion-ios-musical-notes:before {\n  content: \"\\F46C\";\n}\n.ion-ios-navigate:before {\n  content: \"\\F46E\";\n}\n.ion-ios-navigate-outline:before {\n  content: \"\\F46D\";\n}\n.ion-ios-nutrition:before {\n  content: \"\\F470\";\n}\n.ion-ios-nutrition-outline:before {\n  content: \"\\F46F\";\n}\n.ion-ios-paper:before {\n  content: \"\\F472\";\n}\n.ion-ios-paper-outline:before {\n  content: \"\\F471\";\n}\n.ion-ios-paperplane:before {\n  content: \"\\F474\";\n}\n.ion-ios-paperplane-outline:before {\n  content: \"\\F473\";\n}\n.ion-ios-partlysunny:before {\n  content: \"\\F476\";\n}\n.ion-ios-partlysunny-outline:before {\n  content: \"\\F475\";\n}\n.ion-ios-pause:before {\n  content: \"\\F478\";\n}\n.ion-ios-pause-outline:before {\n  content: \"\\F477\";\n}\n.ion-ios-paw:before {\n  content: \"\\F47A\";\n}\n.ion-ios-paw-outline:before {\n  content: \"\\F479\";\n}\n.ion-ios-people:before {\n  content: \"\\F47C\";\n}\n.ion-ios-people-outline:before {\n  content: \"\\F47B\";\n}\n.ion-ios-person:before {\n  content: \"\\F47E\";\n}\n.ion-ios-person-outline:before {\n  content: \"\\F47D\";\n}\n.ion-ios-personadd:before {\n  content: \"\\F480\";\n}\n.ion-ios-personadd-outline:before {\n  content: \"\\F47F\";\n}\n.ion-ios-photos:before {\n  content: \"\\F482\";\n}\n.ion-ios-photos-outline:before {\n  content: \"\\F481\";\n}\n.ion-ios-pie:before {\n  content: \"\\F484\";\n}\n.ion-ios-pie-outline:before {\n  content: \"\\F483\";\n}\n.ion-ios-pint:before {\n  content: \"\\F486\";\n}\n.ion-ios-pint-outline:before {\n  content: \"\\F485\";\n}\n.ion-ios-play:before {\n  content: \"\\F488\";\n}\n.ion-ios-play-outline:before {\n  content: \"\\F487\";\n}\n.ion-ios-plus:before {\n  content: \"\\F48B\";\n}\n.ion-ios-plus-empty:before {\n  content: \"\\F489\";\n}\n.ion-ios-plus-outline:before {\n  content: \"\\F48A\";\n}\n.ion-ios-pricetag:before {\n  content: \"\\F48D\";\n}\n.ion-ios-pricetag-outline:before {\n  content: \"\\F48C\";\n}\n.ion-ios-pricetags:before {\n  content: \"\\F48F\";\n}\n.ion-ios-pricetags-outline:before {\n  content: \"\\F48E\";\n}\n.ion-ios-printer:before {\n  content: \"\\F491\";\n}\n.ion-ios-printer-outline:before {\n  content: \"\\F490\";\n}\n.ion-ios-pulse:before {\n  content: \"\\F493\";\n}\n.ion-ios-pulse-strong:before {\n  content: \"\\F492\";\n}\n.ion-ios-rainy:before {\n  content: \"\\F495\";\n}\n.ion-ios-rainy-outline:before {\n  content: \"\\F494\";\n}\n.ion-ios-recording:before {\n  content: \"\\F497\";\n}\n.ion-ios-recording-outline:before {\n  content: \"\\F496\";\n}\n.ion-ios-redo:before {\n  content: \"\\F499\";\n}\n.ion-ios-redo-outline:before {\n  content: \"\\F498\";\n}\n.ion-ios-refresh:before {\n  content: \"\\F49C\";\n}\n.ion-ios-refresh-empty:before {\n  content: \"\\F49A\";\n}\n.ion-ios-refresh-outline:before {\n  content: \"\\F49B\";\n}\n.ion-ios-reload:before {\n  content: \"\\F49D\";\n}\n.ion-ios-reverse-camera:before {\n  content: \"\\F49F\";\n}\n.ion-ios-reverse-camera-outline:before {\n  content: \"\\F49E\";\n}\n.ion-ios-rewind:before {\n  content: \"\\F4A1\";\n}\n.ion-ios-rewind-outline:before {\n  content: \"\\F4A0\";\n}\n.ion-ios-rose:before {\n  content: \"\\F4A3\";\n}\n.ion-ios-rose-outline:before {\n  content: \"\\F4A2\";\n}\n.ion-ios-search:before {\n  content: \"\\F4A5\";\n}\n.ion-ios-search-strong:before {\n  content: \"\\F4A4\";\n}\n.ion-ios-settings:before {\n  content: \"\\F4A7\";\n}\n.ion-ios-settings-strong:before {\n  content: \"\\F4A6\";\n}\n.ion-ios-shuffle:before {\n  content: \"\\F4A9\";\n}\n.ion-ios-shuffle-strong:before {\n  content: \"\\F4A8\";\n}\n.ion-ios-skipbackward:before {\n  content: \"\\F4AB\";\n}\n.ion-ios-skipbackward-outline:before {\n  content: \"\\F4AA\";\n}\n.ion-ios-skipforward:before {\n  content: \"\\F4AD\";\n}\n.ion-ios-skipforward-outline:before {\n  content: \"\\F4AC\";\n}\n.ion-ios-snowy:before {\n  content: \"\\F4AE\";\n}\n.ion-ios-speedometer:before {\n  content: \"\\F4B0\";\n}\n.ion-ios-speedometer-outline:before {\n  content: \"\\F4AF\";\n}\n.ion-ios-star:before {\n  content: \"\\F4B3\";\n}\n.ion-ios-star-half:before {\n  content: \"\\F4B1\";\n}\n.ion-ios-star-outline:before {\n  content: \"\\F4B2\";\n}\n.ion-ios-stopwatch:before {\n  content: \"\\F4B5\";\n}\n.ion-ios-stopwatch-outline:before {\n  content: \"\\F4B4\";\n}\n.ion-ios-sunny:before {\n  content: \"\\F4B7\";\n}\n.ion-ios-sunny-outline:before {\n  content: \"\\F4B6\";\n}\n.ion-ios-telephone:before {\n  content: \"\\F4B9\";\n}\n.ion-ios-telephone-outline:before {\n  content: \"\\F4B8\";\n}\n.ion-ios-tennisball:before {\n  content: \"\\F4BB\";\n}\n.ion-ios-tennisball-outline:before {\n  content: \"\\F4BA\";\n}\n.ion-ios-thunderstorm:before {\n  content: \"\\F4BD\";\n}\n.ion-ios-thunderstorm-outline:before {\n  content: \"\\F4BC\";\n}\n.ion-ios-time:before {\n  content: \"\\F4BF\";\n}\n.ion-ios-time-outline:before {\n  content: \"\\F4BE\";\n}\n.ion-ios-timer:before {\n  content: \"\\F4C1\";\n}\n.ion-ios-timer-outline:before {\n  content: \"\\F4C0\";\n}\n.ion-ios-toggle:before {\n  content: \"\\F4C3\";\n}\n.ion-ios-toggle-outline:before {\n  content: \"\\F4C2\";\n}\n.ion-ios-trash:before {\n  content: \"\\F4C5\";\n}\n.ion-ios-trash-outline:before {\n  content: \"\\F4C4\";\n}\n.ion-ios-undo:before {\n  content: \"\\F4C7\";\n}\n.ion-ios-undo-outline:before {\n  content: \"\\F4C6\";\n}\n.ion-ios-unlocked:before {\n  content: \"\\F4C9\";\n}\n.ion-ios-unlocked-outline:before {\n  content: \"\\F4C8\";\n}\n.ion-ios-upload:before {\n  content: \"\\F4CB\";\n}\n.ion-ios-upload-outline:before {\n  content: \"\\F4CA\";\n}\n.ion-ios-videocam:before {\n  content: \"\\F4CD\";\n}\n.ion-ios-videocam-outline:before {\n  content: \"\\F4CC\";\n}\n.ion-ios-volume-high:before {\n  content: \"\\F4CE\";\n}\n.ion-ios-volume-low:before {\n  content: \"\\F4CF\";\n}\n.ion-ios-wineglass:before {\n  content: \"\\F4D1\";\n}\n.ion-ios-wineglass-outline:before {\n  content: \"\\F4D0\";\n}\n.ion-ios-world:before {\n  content: \"\\F4D3\";\n}\n.ion-ios-world-outline:before {\n  content: \"\\F4D2\";\n}\n.ion-ipad:before {\n  content: \"\\F1F9\";\n}\n.ion-iphone:before {\n  content: \"\\F1FA\";\n}\n.ion-ipod:before {\n  content: \"\\F1FB\";\n}\n.ion-jet:before {\n  content: \"\\F295\";\n}\n.ion-key:before {\n  content: \"\\F296\";\n}\n.ion-knife:before {\n  content: \"\\F297\";\n}\n.ion-laptop:before {\n  content: \"\\F1FC\";\n}\n.ion-leaf:before {\n  content: \"\\F1FD\";\n}\n.ion-levels:before {\n  content: \"\\F298\";\n}\n.ion-lightbulb:before {\n  content: \"\\F299\";\n}\n.ion-link:before {\n  content: \"\\F1FE\";\n}\n.ion-load-a:before {\n  content: \"\\F29A\";\n}\n.ion-load-b:before {\n  content: \"\\F29B\";\n}\n.ion-load-c:before {\n  content: \"\\F29C\";\n}\n.ion-load-d:before {\n  content: \"\\F29D\";\n}\n.ion-location:before {\n  content: \"\\F1FF\";\n}\n.ion-lock-combination:before {\n  content: \"\\F4D4\";\n}\n.ion-locked:before {\n  content: \"\\F200\";\n}\n.ion-log-in:before {\n  content: \"\\F29E\";\n}\n.ion-log-out:before {\n  content: \"\\F29F\";\n}\n.ion-loop:before {\n  content: \"\\F201\";\n}\n.ion-magnet:before {\n  content: \"\\F2A0\";\n}\n.ion-male:before {\n  content: \"\\F2A1\";\n}\n.ion-man:before {\n  content: \"\\F202\";\n}\n.ion-map:before {\n  content: \"\\F203\";\n}\n.ion-medkit:before {\n  content: \"\\F2A2\";\n}\n.ion-merge:before {\n  content: \"\\F33F\";\n}\n.ion-mic-a:before {\n  content: \"\\F204\";\n}\n.ion-mic-b:before {\n  content: \"\\F205\";\n}\n.ion-mic-c:before {\n  content: \"\\F206\";\n}\n.ion-minus:before {\n  content: \"\\F209\";\n}\n.ion-minus-circled:before {\n  content: \"\\F207\";\n}\n.ion-minus-round:before {\n  content: \"\\F208\";\n}\n.ion-model-s:before {\n  content: \"\\F2C1\";\n}\n.ion-monitor:before {\n  content: \"\\F20A\";\n}\n.ion-more:before {\n  content: \"\\F20B\";\n}\n.ion-mouse:before {\n  content: \"\\F340\";\n}\n.ion-music-note:before {\n  content: \"\\F20C\";\n}\n.ion-navicon:before {\n  content: \"\\F20E\";\n}\n.ion-navicon-round:before {\n  content: \"\\F20D\";\n}\n.ion-navigate:before {\n  content: \"\\F2A3\";\n}\n.ion-network:before {\n  content: \"\\F341\";\n}\n.ion-no-smoking:before {\n  content: \"\\F2C2\";\n}\n.ion-nuclear:before {\n  content: \"\\F2A4\";\n}\n.ion-outlet:before {\n  content: \"\\F342\";\n}\n.ion-paintbrush:before {\n  content: \"\\F4D5\";\n}\n.ion-paintbucket:before {\n  content: \"\\F4D6\";\n}\n.ion-paper-airplane:before {\n  content: \"\\F2C3\";\n}\n.ion-paperclip:before {\n  content: \"\\F20F\";\n}\n.ion-pause:before {\n  content: \"\\F210\";\n}\n.ion-person:before {\n  content: \"\\F213\";\n}\n.ion-person-add:before {\n  content: \"\\F211\";\n}\n.ion-person-stalker:before {\n  content: \"\\F212\";\n}\n.ion-pie-graph:before {\n  content: \"\\F2A5\";\n}\n.ion-pin:before {\n  content: \"\\F2A6\";\n}\n.ion-pinpoint:before {\n  content: \"\\F2A7\";\n}\n.ion-pizza:before {\n  content: \"\\F2A8\";\n}\n.ion-plane:before {\n  content: \"\\F214\";\n}\n.ion-planet:before {\n  content: \"\\F343\";\n}\n.ion-play:before {\n  content: \"\\F215\";\n}\n.ion-playstation:before {\n  content: \"\\F30A\";\n}\n.ion-plus:before {\n  content: \"\\F218\";\n}\n.ion-plus-circled:before {\n  content: \"\\F216\";\n}\n.ion-plus-round:before {\n  content: \"\\F217\";\n}\n.ion-podium:before {\n  content: \"\\F344\";\n}\n.ion-pound:before {\n  content: \"\\F219\";\n}\n.ion-power:before {\n  content: \"\\F2A9\";\n}\n.ion-pricetag:before {\n  content: \"\\F2AA\";\n}\n.ion-pricetags:before {\n  content: \"\\F2AB\";\n}\n.ion-printer:before {\n  content: \"\\F21A\";\n}\n.ion-pull-request:before {\n  content: \"\\F345\";\n}\n.ion-qr-scanner:before {\n  content: \"\\F346\";\n}\n.ion-quote:before {\n  content: \"\\F347\";\n}\n.ion-radio-waves:before {\n  content: \"\\F2AC\";\n}\n.ion-record:before {\n  content: \"\\F21B\";\n}\n.ion-refresh:before {\n  content: \"\\F21C\";\n}\n.ion-reply:before {\n  content: \"\\F21E\";\n}\n.ion-reply-all:before {\n  content: \"\\F21D\";\n}\n.ion-ribbon-a:before {\n  content: \"\\F348\";\n}\n.ion-ribbon-b:before {\n  content: \"\\F349\";\n}\n.ion-sad:before {\n  content: \"\\F34A\";\n}\n.ion-sad-outline:before {\n  content: \"\\F4D7\";\n}\n.ion-scissors:before {\n  content: \"\\F34B\";\n}\n.ion-search:before {\n  content: \"\\F21F\";\n}\n.ion-settings:before {\n  content: \"\\F2AD\";\n}\n.ion-share:before {\n  content: \"\\F220\";\n}\n.ion-shuffle:before {\n  content: \"\\F221\";\n}\n.ion-skip-backward:before {\n  content: \"\\F222\";\n}\n.ion-skip-forward:before {\n  content: \"\\F223\";\n}\n.ion-social-android:before {\n  content: \"\\F225\";\n}\n.ion-social-android-outline:before {\n  content: \"\\F224\";\n}\n.ion-social-angular:before {\n  content: \"\\F4D9\";\n}\n.ion-social-angular-outline:before {\n  content: \"\\F4D8\";\n}\n.ion-social-apple:before {\n  content: \"\\F227\";\n}\n.ion-social-apple-outline:before {\n  content: \"\\F226\";\n}\n.ion-social-bitcoin:before {\n  content: \"\\F2AF\";\n}\n.ion-social-bitcoin-outline:before {\n  content: \"\\F2AE\";\n}\n.ion-social-buffer:before {\n  content: \"\\F229\";\n}\n.ion-social-buffer-outline:before {\n  content: \"\\F228\";\n}\n.ion-social-chrome:before {\n  content: \"\\F4DB\";\n}\n.ion-social-chrome-outline:before {\n  content: \"\\F4DA\";\n}\n.ion-social-codepen:before {\n  content: \"\\F4DD\";\n}\n.ion-social-codepen-outline:before {\n  content: \"\\F4DC\";\n}\n.ion-social-css3:before {\n  content: \"\\F4DF\";\n}\n.ion-social-css3-outline:before {\n  content: \"\\F4DE\";\n}\n.ion-social-designernews:before {\n  content: \"\\F22B\";\n}\n.ion-social-designernews-outline:before {\n  content: \"\\F22A\";\n}\n.ion-social-dribbble:before {\n  content: \"\\F22D\";\n}\n.ion-social-dribbble-outline:before {\n  content: \"\\F22C\";\n}\n.ion-social-dropbox:before {\n  content: \"\\F22F\";\n}\n.ion-social-dropbox-outline:before {\n  content: \"\\F22E\";\n}\n.ion-social-euro:before {\n  content: \"\\F4E1\";\n}\n.ion-social-euro-outline:before {\n  content: \"\\F4E0\";\n}\n.ion-social-facebook:before {\n  content: \"\\F231\";\n}\n.ion-social-facebook-outline:before {\n  content: \"\\F230\";\n}\n.ion-social-foursquare:before {\n  content: \"\\F34D\";\n}\n.ion-social-foursquare-outline:before {\n  content: \"\\F34C\";\n}\n.ion-social-freebsd-devil:before {\n  content: \"\\F2C4\";\n}\n.ion-social-github:before {\n  content: \"\\F233\";\n}\n.ion-social-github-outline:before {\n  content: \"\\F232\";\n}\n.ion-social-google:before {\n  content: \"\\F34F\";\n}\n.ion-social-google-outline:before {\n  content: \"\\F34E\";\n}\n.ion-social-googleplus:before {\n  content: \"\\F235\";\n}\n.ion-social-googleplus-outline:before {\n  content: \"\\F234\";\n}\n.ion-social-hackernews:before {\n  content: \"\\F237\";\n}\n.ion-social-hackernews-outline:before {\n  content: \"\\F236\";\n}\n.ion-social-html5:before {\n  content: \"\\F4E3\";\n}\n.ion-social-html5-outline:before {\n  content: \"\\F4E2\";\n}\n.ion-social-instagram:before {\n  content: \"\\F351\";\n}\n.ion-social-instagram-outline:before {\n  content: \"\\F350\";\n}\n.ion-social-javascript:before {\n  content: \"\\F4E5\";\n}\n.ion-social-javascript-outline:before {\n  content: \"\\F4E4\";\n}\n.ion-social-linkedin:before {\n  content: \"\\F239\";\n}\n.ion-social-linkedin-outline:before {\n  content: \"\\F238\";\n}\n.ion-social-markdown:before {\n  content: \"\\F4E6\";\n}\n.ion-social-nodejs:before {\n  content: \"\\F4E7\";\n}\n.ion-social-octocat:before {\n  content: \"\\F4E8\";\n}\n.ion-social-pinterest:before {\n  content: \"\\F2B1\";\n}\n.ion-social-pinterest-outline:before {\n  content: \"\\F2B0\";\n}\n.ion-social-python:before {\n  content: \"\\F4E9\";\n}\n.ion-social-reddit:before {\n  content: \"\\F23B\";\n}\n.ion-social-reddit-outline:before {\n  content: \"\\F23A\";\n}\n.ion-social-rss:before {\n  content: \"\\F23D\";\n}\n.ion-social-rss-outline:before {\n  content: \"\\F23C\";\n}\n.ion-social-sass:before {\n  content: \"\\F4EA\";\n}\n.ion-social-skype:before {\n  content: \"\\F23F\";\n}\n.ion-social-skype-outline:before {\n  content: \"\\F23E\";\n}\n.ion-social-snapchat:before {\n  content: \"\\F4EC\";\n}\n.ion-social-snapchat-outline:before {\n  content: \"\\F4EB\";\n}\n.ion-social-tumblr:before {\n  content: \"\\F241\";\n}\n.ion-social-tumblr-outline:before {\n  content: \"\\F240\";\n}\n.ion-social-tux:before {\n  content: \"\\F2C5\";\n}\n.ion-social-twitch:before {\n  content: \"\\F4EE\";\n}\n.ion-social-twitch-outline:before {\n  content: \"\\F4ED\";\n}\n.ion-social-twitter:before {\n  content: \"\\F243\";\n}\n.ion-social-twitter-outline:before {\n  content: \"\\F242\";\n}\n.ion-social-usd:before {\n  content: \"\\F353\";\n}\n.ion-social-usd-outline:before {\n  content: \"\\F352\";\n}\n.ion-social-vimeo:before {\n  content: \"\\F245\";\n}\n.ion-social-vimeo-outline:before {\n  content: \"\\F244\";\n}\n.ion-social-whatsapp:before {\n  content: \"\\F4F0\";\n}\n.ion-social-whatsapp-outline:before {\n  content: \"\\F4EF\";\n}\n.ion-social-windows:before {\n  content: \"\\F247\";\n}\n.ion-social-windows-outline:before {\n  content: \"\\F246\";\n}\n.ion-social-wordpress:before {\n  content: \"\\F249\";\n}\n.ion-social-wordpress-outline:before {\n  content: \"\\F248\";\n}\n.ion-social-yahoo:before {\n  content: \"\\F24B\";\n}\n.ion-social-yahoo-outline:before {\n  content: \"\\F24A\";\n}\n.ion-social-yen:before {\n  content: \"\\F4F2\";\n}\n.ion-social-yen-outline:before {\n  content: \"\\F4F1\";\n}\n.ion-social-youtube:before {\n  content: \"\\F24D\";\n}\n.ion-social-youtube-outline:before {\n  content: \"\\F24C\";\n}\n.ion-soup-can:before {\n  content: \"\\F4F4\";\n}\n.ion-soup-can-outline:before {\n  content: \"\\F4F3\";\n}\n.ion-speakerphone:before {\n  content: \"\\F2B2\";\n}\n.ion-speedometer:before {\n  content: \"\\F2B3\";\n}\n.ion-spoon:before {\n  content: \"\\F2B4\";\n}\n.ion-star:before {\n  content: \"\\F24E\";\n}\n.ion-stats-bars:before {\n  content: \"\\F2B5\";\n}\n.ion-steam:before {\n  content: \"\\F30B\";\n}\n.ion-stop:before {\n  content: \"\\F24F\";\n}\n.ion-thermometer:before {\n  content: \"\\F2B6\";\n}\n.ion-thumbsdown:before {\n  content: \"\\F250\";\n}\n.ion-thumbsup:before {\n  content: \"\\F251\";\n}\n.ion-toggle:before {\n  content: \"\\F355\";\n}\n.ion-toggle-filled:before {\n  content: \"\\F354\";\n}\n.ion-transgender:before {\n  content: \"\\F4F5\";\n}\n.ion-trash-a:before {\n  content: \"\\F252\";\n}\n.ion-trash-b:before {\n  content: \"\\F253\";\n}\n.ion-trophy:before {\n  content: \"\\F356\";\n}\n.ion-tshirt:before {\n  content: \"\\F4F7\";\n}\n.ion-tshirt-outline:before {\n  content: \"\\F4F6\";\n}\n.ion-umbrella:before {\n  content: \"\\F2B7\";\n}\n.ion-university:before {\n  content: \"\\F357\";\n}\n.ion-unlocked:before {\n  content: \"\\F254\";\n}\n.ion-upload:before {\n  content: \"\\F255\";\n}\n.ion-usb:before {\n  content: \"\\F2B8\";\n}\n.ion-videocamera:before {\n  content: \"\\F256\";\n}\n.ion-volume-high:before {\n  content: \"\\F257\";\n}\n.ion-volume-low:before {\n  content: \"\\F258\";\n}\n.ion-volume-medium:before {\n  content: \"\\F259\";\n}\n.ion-volume-mute:before {\n  content: \"\\F25A\";\n}\n.ion-wand:before {\n  content: \"\\F358\";\n}\n.ion-waterdrop:before {\n  content: \"\\F25B\";\n}\n.ion-wifi:before {\n  content: \"\\F25C\";\n}\n.ion-wineglass:before {\n  content: \"\\F2B9\";\n}\n.ion-woman:before {\n  content: \"\\F25D\";\n}\n.ion-wrench:before {\n  content: \"\\F2BA\";\n}\n.ion-xbox:before {\n  content: \"\\F30C\";\n}\n.icon-loading:before {\n  -webkit-animation: rotate 1s infinite linear;\n          animation: rotate 1s infinite linear;\n}\n.c-ellipsis {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.c-clearfix {\n  zoom: 1;\n}\n.c-clearfix:after {\n  display: table;\n  clear: both;\n  content: '';\n  height: 0;\n}\n.c-middle {\n  display: inline-block;\n  vertical-align: middle;\n}\n.c-center {\n  text-align: center;\n}\nhtml,\nbody {\n  margin: 0;\n  color: #333;\n  background: #efefef;\n  height: 100%;\n}\na {\n  color: #2d8cf0;\n  text-decoration: none;\n  cursor: pointer;\n}\nh1,\nh2,\nh3,\nh4,\nh5 {\n  margin: 0;\n  font-weight: normal;\n  color: #000;\n}\nh1 {\n  font-size: 2em;\n}\nh2 {\n  font-size: 1.8em;\n}\nh3 {\n  font-size: 1.5em;\n}\ncode {\n  border-radius: 4px;\n  padding: 0 5px;\n}\nblockquote {\n  margin: 1em 0;\n  padding: 1px 2em;\n  background: #f8f8f8;\n  border-radius: 0 3px 3px 0;\n  border-left: 2px solid #db2828;\n  position: relative;\n  line-height: 2em;\n}\nblockquote:before {\n  content: '!';\n  display: block;\n  position: absolute;\n  top: 50%;\n  margin-top: -10px;\n  width: 20px;\n  height: 20px;\n  border-radius: 100%;\n  text-align: center;\n  background: #db2828;\n  color: #fff;\n  line-height: 20px;\n  left: -11px;\n}\n#page,\n.app-wrapper,\n.main-wrapper {\n  height: 100%;\n}\n.header-wrapper {\n  height: 80px;\n  line-height: 80px;\n  -webkit-box-shadow: 0 2px 5px rgba(0,0,0,0.08);\n          box-shadow: 0 2px 5px rgba(0,0,0,0.08);\n  background: #fff;\n  position: fixed;\n  width: 100%;\n  top: 0;\n  z-index: 999;\n}\n.header-wrapper header {\n  width: 100%;\n  margin: 0 auto;\n}\n.header-wrapper .logo {\n  font-size: 24px;\n  color: #333;\n  margin-left: 20px;\n}\n.header-wrapper nav {\n  float: right;\n  position: relative;\n}\n.header-wrapper nav a {\n  display: inline-block;\n  padding: 0 20px;\n  color: #333;\n}\n.header-wrapper nav a.active {\n  color: #0a5eee;\n}\n.header-wrapper .border {\n  position: absolute;\n  bottom: 0;\n  border-bottom: 2px solid #0a5eee;\n}\n.transition {\n  -webkit-transition: all 350ms cubic-bezier(0.55, 0, 0.1, 1);\n  transition: all 350ms cubic-bezier(0.55, 0, 0.1, 1);\n}\n.blue {\n  color: #09d;\n}\n.red {\n  color: #d04;\n}\n.yellow {\n  color: #ffc400;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/lib/url/escape.js":
/***/ (function(module, exports) {

module.exports = function escape(url) {
    // If url is already wrapped in quotes, remove them
    if (/^['"].*['"]$/.test(url)) {
        url = url.slice(1, -1);
    }
    // Should url be wrapped?
    // See https://drafts.csswg.org/css-values-3/#urls
    if (/["'() \t\n]/.test(url)) {
        return '"' + url.replace(/"/g, '\\"').replace(/\n/g, '\\n') + '"'
    }

    return url
}


/***/ }),

/***/ "./site lazy recursive ^\\.\\/.*\\/index\\.js$":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./components/breadcrumb/demos/basic/index.js": [
		"./site/components/breadcrumb/demos/basic/index.js",
		118,
		214
	],
	"./components/breadcrumb/demos/separator/index.js": [
		"./site/components/breadcrumb/demos/separator/index.js",
		118,
		181
	],
	"./components/breadcrumb/index.js": [
		"./site/components/breadcrumb/index.js",
		118,
		137
	],
	"./components/button/demos/basic/index.js": [
		"./site/components/button/demos/basic/index.js",
		118,
		180
	],
	"./components/button/demos/disabled/index.js": [
		"./site/components/button/demos/disabled/index.js",
		118,
		213
	],
	"./components/button/demos/group/index.js": [
		"./site/components/button/demos/group/index.js",
		118,
		179
	],
	"./components/button/demos/icon/index.js": [
		"./site/components/button/demos/icon/index.js",
		118,
		178
	],
	"./components/button/demos/loading/index.js": [
		"./site/components/button/demos/loading/index.js",
		118,
		177
	],
	"./components/button/demos/size/index.js": [
		"./site/components/button/demos/size/index.js",
		118,
		176
	],
	"./components/button/demos/tagName/index.js": [
		"./site/components/button/demos/tagName/index.js",
		118,
		212
	],
	"./components/button/index.js": [
		"./site/components/button/index.js",
		118,
		119
	],
	"./components/checkbox/demos/basic/index.js": [
		"./site/components/checkbox/demos/basic/index.js",
		118,
		175
	],
	"./components/checkbox/demos/group/index.js": [
		"./site/components/checkbox/demos/group/index.js",
		118,
		174
	],
	"./components/checkbox/demos/value/index.js": [
		"./site/components/checkbox/demos/value/index.js",
		118,
		173
	],
	"./components/checkbox/index.js": [
		"./site/components/checkbox/index.js",
		118,
		130
	],
	"./components/datepicker/demos/basic/index.js": [
		"./site/components/datepicker/demos/basic/index.js",
		118,
		172
	],
	"./components/datepicker/demos/clearable/index.js": [
		"./site/components/datepicker/demos/clearable/index.js",
		118,
		211
	],
	"./components/datepicker/demos/datetime/index.js": [
		"./site/components/datepicker/demos/datetime/index.js",
		118,
		171
	],
	"./components/datepicker/demos/disabledDate/index.js": [
		"./site/components/datepicker/demos/disabledDate/index.js",
		118,
		210
	],
	"./components/datepicker/demos/maxMin/index.js": [
		"./site/components/datepicker/demos/maxMin/index.js",
		118,
		170
	],
	"./components/datepicker/demos/multiple/index.js": [
		"./site/components/datepicker/demos/multiple/index.js",
		118,
		209
	],
	"./components/datepicker/index.js": [
		"./site/components/datepicker/index.js",
		118,
		123
	],
	"./components/dialog/demos/basic/index.js": [
		"./site/components/dialog/demos/basic/index.js",
		118,
		208
	],
	"./components/dialog/demos/block/index.js": [
		"./site/components/dialog/demos/block/index.js",
		118,
		207
	],
	"./components/dialog/demos/events/index.js": [
		"./site/components/dialog/demos/events/index.js",
		118,
		206
	],
	"./components/dialog/demos/extends/index.js": [
		"./site/components/dialog/demos/extends/index.js",
		118,
		169
	],
	"./components/dialog/index.js": [
		"./site/components/dialog/index.js",
		118,
		131
	],
	"./components/dropdown/demos/basic/index.js": [
		"./site/components/dropdown/demos/basic/index.js",
		118,
		205
	],
	"./components/dropdown/demos/disabled/index.js": [
		"./site/components/dropdown/demos/disabled/index.js",
		118,
		168
	],
	"./components/dropdown/demos/nested/index.js": [
		"./site/components/dropdown/demos/nested/index.js",
		118,
		167
	],
	"./components/dropdown/demos/position/index.js": [
		"./site/components/dropdown/demos/position/index.js",
		118,
		166
	],
	"./components/dropdown/demos/trigger/index.js": [
		"./site/components/dropdown/demos/trigger/index.js",
		118,
		165
	],
	"./components/dropdown/index.js": [
		"./site/components/dropdown/index.js",
		118,
		122
	],
	"./components/editable/demos/basic/index.js": [
		"./site/components/editable/demos/basic/index.js",
		118,
		164
	],
	"./components/editable/demos/validate/index.js": [
		"./site/components/editable/demos/validate/index.js",
		118,
		204
	],
	"./components/editable/index.js": [
		"./site/components/editable/index.js",
		118,
		136
	],
	"./components/form/demos/basic/index.js": [
		"./site/components/form/demos/basic/index.js",
		118,
		138
	],
	"./components/form/demos/custom/index.js": [
		"./site/components/form/demos/custom/index.js",
		118,
		163
	],
	"./components/form/demos/label/index.js": [
		"./site/components/form/demos/label/index.js",
		118,
		203
	],
	"./components/form/demos/variable/index.js": [
		"./site/components/form/demos/variable/index.js",
		118,
		202
	],
	"./components/form/index.js": [
		"./site/components/form/index.js",
		118,
		126
	],
	"./components/grid/demos/basic/index.js": [
		"./site/components/grid/demos/basic/index.js",
		118,
		162
	],
	"./components/grid/demos/gutter/index.js": [
		"./site/components/grid/demos/gutter/index.js",
		118,
		161
	],
	"./components/grid/index.js": [
		"./site/components/grid/index.js",
		118,
		132
	],
	"./components/input/demos/autowidth/index.js": [
		"./site/components/input/demos/autowidth/index.js",
		118,
		201
	],
	"./components/input/demos/basic/index.js": [
		"./site/components/input/demos/basic/index.js",
		118,
		160
	],
	"./components/input/demos/blocks/index.js": [
		"./site/components/input/demos/blocks/index.js",
		118,
		159
	],
	"./components/input/demos/clearable/index.js": [
		"./site/components/input/demos/clearable/index.js",
		118,
		158
	],
	"./components/input/demos/size/index.js": [
		"./site/components/input/demos/size/index.js",
		118,
		157
	],
	"./components/input/demos/textarea/index.js": [
		"./site/components/input/demos/textarea/index.js",
		118,
		200
	],
	"./components/input/index.js": [
		"./site/components/input/index.js",
		118,
		120
	],
	"./components/message/demos/basic/index.js": [
		"./site/components/message/demos/basic/index.js",
		118,
		199
	],
	"./components/message/demos/custom/index.js": [
		"./site/components/message/demos/custom/index.js",
		118,
		198
	],
	"./components/message/demos/duration/index.js": [
		"./site/components/message/demos/duration/index.js",
		118,
		197
	],
	"./components/message/index.js": [
		"./site/components/message/index.js",
		118,
		135
	],
	"./components/pagination/demos/basic/index.js": [
		"./site/components/pagination/demos/basic/index.js",
		118,
		156
	],
	"./components/pagination/demos/counts/index.js": [
		"./site/components/pagination/demos/counts/index.js",
		118,
		155
	],
	"./components/pagination/demos/current/index.js": [
		"./site/components/pagination/demos/current/index.js",
		118,
		196
	],
	"./components/pagination/demos/goto/index.js": [
		"./site/components/pagination/demos/goto/index.js",
		118,
		195
	],
	"./components/pagination/demos/size/index.js": [
		"./site/components/pagination/demos/size/index.js",
		118,
		154
	],
	"./components/pagination/index.js": [
		"./site/components/pagination/index.js",
		118,
		125
	],
	"./components/progress/demos/basic/index.js": [
		"./site/components/progress/demos/basic/index.js",
		118,
		194
	],
	"./components/progress/demos/children/index.js": [
		"./site/components/progress/demos/children/index.js",
		118,
		153
	],
	"./components/progress/demos/circle/index.js": [
		"./site/components/progress/demos/circle/index.js",
		118,
		193
	],
	"./components/progress/demos/size/index.js": [
		"./site/components/progress/demos/size/index.js",
		118,
		152
	],
	"./components/progress/demos/status/index.js": [
		"./site/components/progress/demos/status/index.js",
		118,
		151
	],
	"./components/progress/index.js": [
		"./site/components/progress/index.js",
		118,
		124
	],
	"./components/radio/demos/basic/index.js": [
		"./site/components/radio/demos/basic/index.js",
		118,
		150
	],
	"./components/radio/demos/group/index.js": [
		"./site/components/radio/demos/group/index.js",
		118,
		149
	],
	"./components/radio/demos/value/index.js": [
		"./site/components/radio/demos/value/index.js",
		118,
		148
	],
	"./components/radio/index.js": [
		"./site/components/radio/index.js",
		118,
		129
	],
	"./components/select/demos/basic/index.js": [
		"./site/components/select/demos/basic/index.js",
		118,
		192
	],
	"./components/select/demos/clearable/index.js": [
		"./site/components/select/demos/clearable/index.js",
		118,
		191
	],
	"./components/select/demos/custom/index.js": [
		"./site/components/select/demos/custom/index.js",
		118,
		190
	],
	"./components/select/demos/disabled/index.js": [
		"./site/components/select/demos/disabled/index.js",
		118,
		189
	],
	"./components/select/demos/filterable/index.js": [
		"./site/components/select/demos/filterable/index.js",
		118,
		188
	],
	"./components/select/demos/group/index.js": [
		"./site/components/select/demos/group/index.js",
		118,
		187
	],
	"./components/select/demos/multiple/index.js": [
		"./site/components/select/demos/multiple/index.js",
		118,
		186
	],
	"./components/select/demos/size/index.js": [
		"./site/components/select/demos/size/index.js",
		118,
		147
	],
	"./components/select/index.js": [
		"./site/components/select/index.js",
		118,
		121
	],
	"./components/slider/demos/basic/index.js": [
		"./site/components/slider/demos/basic/index.js",
		118,
		146
	],
	"./components/slider/demos/disabled/index.js": [
		"./site/components/slider/demos/disabled/index.js",
		118,
		145
	],
	"./components/slider/demos/range/index.js": [
		"./site/components/slider/demos/range/index.js",
		118,
		185
	],
	"./components/slider/demos/step/index.js": [
		"./site/components/slider/demos/step/index.js",
		118,
		144
	],
	"./components/slider/index.js": [
		"./site/components/slider/index.js",
		118,
		127
	],
	"./components/spinner/demos/basic/index.js": [
		"./site/components/spinner/demos/basic/index.js",
		118,
		143
	],
	"./components/spinner/demos/size/index.js": [
		"./site/components/spinner/demos/size/index.js",
		118,
		142
	],
	"./components/spinner/demos/step/index.js": [
		"./site/components/spinner/demos/step/index.js",
		118,
		141
	],
	"./components/spinner/index.js": [
		"./site/components/spinner/index.js",
		118,
		128
	],
	"./components/steps/demos/basic/index.js": [
		"./site/components/steps/demos/basic/index.js",
		118,
		140
	],
	"./components/steps/demos/error/index.js": [
		"./site/components/steps/demos/error/index.js",
		118,
		184
	],
	"./components/steps/index.js": [
		"./site/components/steps/index.js",
		118,
		134
	],
	"./components/table/index.js": [
		"./site/components/table/index.js",
		118,
		182
	],
	"./components/transfer/demos/basic/index.js": [
		"./site/components/transfer/demos/basic/index.js",
		118,
		183
	],
	"./components/transfer/demos/label/index.js": [
		"./site/components/transfer/demos/label/index.js",
		118,
		139
	],
	"./components/transfer/index.js": [
		"./site/components/transfer/index.js",
		118,
		133
	],
	"./src/components/article/index.js": [
		"./site/src/components/article/index.js",
		118
	],
	"./src/pages/document/index.js": [
		"./site/src/pages/document/index.js"
	],
	"./src/pages/index/index.js": [
		"./site/src/pages/index/index.js",
		0
	],
	"./src/router/index.js": [
		"./site/src/router/index.js"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./site lazy recursive ^\\.\\/.*\\/index\\.js$";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./site lazy recursive ^\\.\\/.*\\/index\\.json$":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./components/breadcrumb/demos/basic/index.json": [
		"./site/components/breadcrumb/demos/basic/index.json",
		118
	],
	"./components/breadcrumb/demos/separator/index.json": [
		"./site/components/breadcrumb/demos/separator/index.json",
		118
	],
	"./components/breadcrumb/index.json": [
		"./site/components/breadcrumb/index.json",
		234
	],
	"./components/button/demos/basic/index.json": [
		"./site/components/button/demos/basic/index.json",
		118
	],
	"./components/button/demos/disabled/index.json": [
		"./site/components/button/demos/disabled/index.json",
		118
	],
	"./components/button/demos/group/index.json": [
		"./site/components/button/demos/group/index.json",
		118
	],
	"./components/button/demos/icon/index.json": [
		"./site/components/button/demos/icon/index.json",
		118
	],
	"./components/button/demos/loading/index.json": [
		"./site/components/button/demos/loading/index.json",
		118
	],
	"./components/button/demos/size/index.json": [
		"./site/components/button/demos/size/index.json",
		118
	],
	"./components/button/demos/tagName/index.json": [
		"./site/components/button/demos/tagName/index.json",
		118
	],
	"./components/button/index.json": [
		"./site/components/button/index.json",
		233
	],
	"./components/checkbox/demos/basic/index.json": [
		"./site/components/checkbox/demos/basic/index.json",
		118
	],
	"./components/checkbox/demos/group/index.json": [
		"./site/components/checkbox/demos/group/index.json",
		118
	],
	"./components/checkbox/demos/value/index.json": [
		"./site/components/checkbox/demos/value/index.json",
		118
	],
	"./components/checkbox/index.json": [
		"./site/components/checkbox/index.json",
		232
	],
	"./components/datepicker/demos/basic/index.json": [
		"./site/components/datepicker/demos/basic/index.json",
		118
	],
	"./components/datepicker/demos/clearable/index.json": [
		"./site/components/datepicker/demos/clearable/index.json",
		118
	],
	"./components/datepicker/demos/datetime/index.json": [
		"./site/components/datepicker/demos/datetime/index.json",
		118
	],
	"./components/datepicker/demos/disabledDate/index.json": [
		"./site/components/datepicker/demos/disabledDate/index.json",
		118
	],
	"./components/datepicker/demos/maxMin/index.json": [
		"./site/components/datepicker/demos/maxMin/index.json",
		118
	],
	"./components/datepicker/demos/multiple/index.json": [
		"./site/components/datepicker/demos/multiple/index.json",
		118
	],
	"./components/datepicker/index.json": [
		"./site/components/datepicker/index.json",
		231
	],
	"./components/dialog/demos/basic/index.json": [
		"./site/components/dialog/demos/basic/index.json",
		118
	],
	"./components/dialog/demos/block/index.json": [
		"./site/components/dialog/demos/block/index.json",
		118
	],
	"./components/dialog/demos/events/index.json": [
		"./site/components/dialog/demos/events/index.json",
		118
	],
	"./components/dialog/demos/extends/index.json": [
		"./site/components/dialog/demos/extends/index.json",
		118
	],
	"./components/dialog/index.json": [
		"./site/components/dialog/index.json",
		230
	],
	"./components/dropdown/demos/basic/index.json": [
		"./site/components/dropdown/demos/basic/index.json",
		118
	],
	"./components/dropdown/demos/disabled/index.json": [
		"./site/components/dropdown/demos/disabled/index.json",
		118
	],
	"./components/dropdown/demos/nested/index.json": [
		"./site/components/dropdown/demos/nested/index.json",
		118
	],
	"./components/dropdown/demos/position/index.json": [
		"./site/components/dropdown/demos/position/index.json",
		118
	],
	"./components/dropdown/demos/trigger/index.json": [
		"./site/components/dropdown/demos/trigger/index.json",
		118
	],
	"./components/dropdown/index.json": [
		"./site/components/dropdown/index.json",
		229
	],
	"./components/editable/demos/basic/index.json": [
		"./site/components/editable/demos/basic/index.json",
		118
	],
	"./components/editable/demos/validate/index.json": [
		"./site/components/editable/demos/validate/index.json",
		118
	],
	"./components/editable/index.json": [
		"./site/components/editable/index.json",
		228
	],
	"./components/form/demos/basic/index.json": [
		"./site/components/form/demos/basic/index.json",
		118
	],
	"./components/form/demos/custom/index.json": [
		"./site/components/form/demos/custom/index.json",
		118
	],
	"./components/form/demos/label/index.json": [
		"./site/components/form/demos/label/index.json",
		118
	],
	"./components/form/demos/variable/index.json": [
		"./site/components/form/demos/variable/index.json",
		118
	],
	"./components/form/index.json": [
		"./site/components/form/index.json",
		227
	],
	"./components/grid/demos/basic/index.json": [
		"./site/components/grid/demos/basic/index.json",
		118
	],
	"./components/grid/demos/gutter/index.json": [
		"./site/components/grid/demos/gutter/index.json",
		118
	],
	"./components/grid/index.json": [
		"./site/components/grid/index.json",
		226
	],
	"./components/input/demos/autowidth/index.json": [
		"./site/components/input/demos/autowidth/index.json",
		118
	],
	"./components/input/demos/basic/index.json": [
		"./site/components/input/demos/basic/index.json",
		118
	],
	"./components/input/demos/blocks/index.json": [
		"./site/components/input/demos/blocks/index.json",
		118
	],
	"./components/input/demos/clearable/index.json": [
		"./site/components/input/demos/clearable/index.json",
		118
	],
	"./components/input/demos/size/index.json": [
		"./site/components/input/demos/size/index.json",
		118
	],
	"./components/input/demos/textarea/index.json": [
		"./site/components/input/demos/textarea/index.json",
		118
	],
	"./components/input/index.json": [
		"./site/components/input/index.json",
		225
	],
	"./components/message/demos/basic/index.json": [
		"./site/components/message/demos/basic/index.json",
		118
	],
	"./components/message/demos/custom/index.json": [
		"./site/components/message/demos/custom/index.json",
		118
	],
	"./components/message/demos/duration/index.json": [
		"./site/components/message/demos/duration/index.json",
		118
	],
	"./components/message/index.json": [
		"./site/components/message/index.json",
		224
	],
	"./components/pagination/demos/basic/index.json": [
		"./site/components/pagination/demos/basic/index.json",
		118
	],
	"./components/pagination/demos/counts/index.json": [
		"./site/components/pagination/demos/counts/index.json",
		118
	],
	"./components/pagination/demos/current/index.json": [
		"./site/components/pagination/demos/current/index.json",
		118
	],
	"./components/pagination/demos/goto/index.json": [
		"./site/components/pagination/demos/goto/index.json",
		118
	],
	"./components/pagination/demos/size/index.json": [
		"./site/components/pagination/demos/size/index.json",
		118
	],
	"./components/pagination/index.json": [
		"./site/components/pagination/index.json",
		223
	],
	"./components/progress/demos/basic/index.json": [
		"./site/components/progress/demos/basic/index.json",
		118
	],
	"./components/progress/demos/children/index.json": [
		"./site/components/progress/demos/children/index.json",
		118
	],
	"./components/progress/demos/circle/index.json": [
		"./site/components/progress/demos/circle/index.json",
		118
	],
	"./components/progress/demos/size/index.json": [
		"./site/components/progress/demos/size/index.json",
		118
	],
	"./components/progress/demos/status/index.json": [
		"./site/components/progress/demos/status/index.json",
		118
	],
	"./components/progress/index.json": [
		"./site/components/progress/index.json",
		222
	],
	"./components/radio/demos/basic/index.json": [
		"./site/components/radio/demos/basic/index.json",
		118
	],
	"./components/radio/demos/group/index.json": [
		"./site/components/radio/demos/group/index.json",
		118
	],
	"./components/radio/demos/value/index.json": [
		"./site/components/radio/demos/value/index.json",
		118
	],
	"./components/radio/index.json": [
		"./site/components/radio/index.json",
		221
	],
	"./components/select/demos/basic/index.json": [
		"./site/components/select/demos/basic/index.json",
		118
	],
	"./components/select/demos/clearable/index.json": [
		"./site/components/select/demos/clearable/index.json",
		118
	],
	"./components/select/demos/custom/index.json": [
		"./site/components/select/demos/custom/index.json",
		118
	],
	"./components/select/demos/disabled/index.json": [
		"./site/components/select/demos/disabled/index.json",
		118
	],
	"./components/select/demos/filterable/index.json": [
		"./site/components/select/demos/filterable/index.json",
		118
	],
	"./components/select/demos/group/index.json": [
		"./site/components/select/demos/group/index.json",
		118
	],
	"./components/select/demos/multiple/index.json": [
		"./site/components/select/demos/multiple/index.json",
		118
	],
	"./components/select/demos/size/index.json": [
		"./site/components/select/demos/size/index.json",
		118
	],
	"./components/select/index.json": [
		"./site/components/select/index.json",
		220
	],
	"./components/slider/demos/basic/index.json": [
		"./site/components/slider/demos/basic/index.json",
		118
	],
	"./components/slider/demos/disabled/index.json": [
		"./site/components/slider/demos/disabled/index.json",
		118
	],
	"./components/slider/demos/range/index.json": [
		"./site/components/slider/demos/range/index.json",
		118
	],
	"./components/slider/demos/step/index.json": [
		"./site/components/slider/demos/step/index.json",
		118
	],
	"./components/slider/index.json": [
		"./site/components/slider/index.json",
		219
	],
	"./components/spinner/demos/basic/index.json": [
		"./site/components/spinner/demos/basic/index.json",
		118
	],
	"./components/spinner/demos/size/index.json": [
		"./site/components/spinner/demos/size/index.json",
		118
	],
	"./components/spinner/demos/step/index.json": [
		"./site/components/spinner/demos/step/index.json",
		118
	],
	"./components/spinner/index.json": [
		"./site/components/spinner/index.json",
		218
	],
	"./components/steps/demos/basic/index.json": [
		"./site/components/steps/demos/basic/index.json",
		118
	],
	"./components/steps/demos/error/index.json": [
		"./site/components/steps/demos/error/index.json",
		118
	],
	"./components/steps/index.json": [
		"./site/components/steps/index.json",
		217
	],
	"./components/table/index.json": [
		"./site/components/table/index.json",
		216
	],
	"./components/transfer/demos/basic/index.json": [
		"./site/components/transfer/demos/basic/index.json",
		118
	],
	"./components/transfer/demos/label/index.json": [
		"./site/components/transfer/demos/label/index.json",
		118
	],
	"./components/transfer/index.json": [
		"./site/components/transfer/index.json",
		215
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

/***/ "./site/src/pages/document/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _dec, _desc, _value, _class, _init, _class2, _temp;

var _intact = __webpack_require__("./node_modules/intact-vue/src/index.js");

var _intact2 = _interopRequireDefault(_intact);

var _layout = __webpack_require__("./site/src/pages/layout.js");

var _layout2 = _interopRequireDefault(_layout);

var _index = __webpack_require__("./site/src/pages/document/index.vdt");

var _index2 = _interopRequireDefault(_index);

__webpack_require__("./site/src/pages/document/index.styl");

__webpack_require__("./components/table/index.styl");

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
            var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
                var path, data, Article;
                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                path = this.get('path');

                                path = path.slice(1, -1);
                                _context.next = 4;
                                return __webpack_require__("./site lazy recursive ^\\.\\/.*\\/index\\.json$")("./" + path + '/index.json');

                            case 4:
                                data = _context.sent;
                                _context.next = 7;
                                return __webpack_require__("./site lazy recursive ^\\.\\/.*\\/index\\.js$")("./" + path + '/index.js');

                            case 7:
                                Article = _context.sent;

                                this.set(_extends({}, data, { Article: Article }));

                            case 9:
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
    }, {
        key: '_mount',
        value: function _mount() {
            _get(_default.prototype.__proto__ || Object.getPrototypeOf(_default.prototype), '_mount', this).call(this);
            document.title = this.get('setting.title');
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

/***/ "./site/src/pages/document/index.styl":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("./node_modules/css-loader/index.js?{\"url\":true}!./node_modules/postcss-loader/lib/index.js?{\"plugins\":[null]}!./node_modules/stylus-loader/index.js?{\"include css\":true,\"sourceMap\":false}!./site/src/pages/document/index.styl");
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
		module.hot.accept("./node_modules/css-loader/index.js?{\"url\":true}!./node_modules/postcss-loader/lib/index.js?{\"plugins\":[null]}!./node_modules/stylus-loader/index.js?{\"include css\":true,\"sourceMap\":false}!./site/src/pages/document/index.styl", function() {
			var newContent = __webpack_require__("./node_modules/css-loader/index.js?{\"url\":true}!./node_modules/postcss-loader/lib/index.js?{\"plugins\":[null]}!./node_modules/stylus-loader/index.js?{\"include css\":true,\"sourceMap\":false}!./site/src/pages/document/index.styl");
			if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./site/src/pages/document/index.vdt":
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

    var Article = self.get('Article');

    var currentNav = {};

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
                return [h('aside', null, h('div', null, [_Vdt.utils.map(function () {
                    try {
                        return [self.get('sideBars')][0];
                    } catch (e) {
                        _e(e);
                    }
                }.call(this), function (value, key) {
                    return h('div', null, [h('h5', null, function () {
                        try {
                            return [key][0];
                        } catch (e) {
                            _e(e);
                        }
                    }.call(this)), h('ul', null, _Vdt.utils.map(function () {
                        try {
                            return [value][0];
                        } catch (e) {
                            _e(e);
                        }
                    }.call(this), function (value, key) {
                        return h('li', null, ['\n                            ', function () {
                            try {
                                return [function () {
                                    if (value.path.includes(self.get('path').substring(1))) {
                                        currentNav = value;
                                    }
                                }()][0];
                            } catch (e) {
                                _e(e);
                            }
                        }.call(this), '\n                            ', h(_link2.default, { 'href': function () {
                                try {
                                    return ['/' + value.path.replace('index.md', '')][0];
                                } catch (e) {
                                    _e(e);
                                }
                            }.call(this), 'children': function () {
                                try {
                                    return [value.title][0];
                                } catch (e) {
                                    _e(e);
                                }
                            }.call(this), '_context': this })], _className(function () {
                            try {
                                return [{
                                    active: value.path.includes(self.get('path').substring(1))
                                }][0];
                            } catch (e) {
                                _e(e);
                            }
                        }.call(this)));
                    }, this))], 'catalog-section');
                }, this), h('div', null, null, 'aside-border transition')], 'aside-wrapper')), h('article', null, [h('div', null, [h('div', null, function () {
                    try {
                        return [currentNav.title][0];
                    } catch (e) {
                        _e(e);
                    }
                }.call(this), 'title'), h('div', null, ['\n                    如果你发现文档有问题，请帮忙在\n                    ', h('a', { 'target': '_blank', 'href': function () {
                        try {
                            return ['https://github.com/Javey/javey.github.io/blob/master/intact/docs/' + self.get('title') + '.md'][0];
                        } catch (e) {
                            _e(e);
                        }
                    }.call(this) }, 'github'), '\n                    上修正该文档\n                '], 'edit-link')], 'article-head'), h(Article, { 'children': null, '_context': this })])];
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

var _link = __webpack_require__("./components/link/index.js");

var _link2 = _interopRequireDefault(_link);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = exports['default'];

/***/ }),

/***/ "./site/src/pages/layout.js":
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

var _layout = __webpack_require__("./site/src/pages/layout.vdt");

var _layout2 = _interopRequireDefault(_layout);

__webpack_require__("./site/src/pages/layout.styl");

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

/***/ "./site/src/pages/layout.styl":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("./node_modules/css-loader/index.js?{\"url\":true}!./node_modules/postcss-loader/lib/index.js?{\"plugins\":[null]}!./node_modules/stylus-loader/index.js?{\"include css\":true,\"sourceMap\":false}!./site/src/pages/layout.styl");
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
		module.hot.accept("./node_modules/css-loader/index.js?{\"url\":true}!./node_modules/postcss-loader/lib/index.js?{\"plugins\":[null]}!./node_modules/stylus-loader/index.js?{\"include css\":true,\"sourceMap\":false}!./site/src/pages/layout.styl", function() {
			var newContent = __webpack_require__("./node_modules/css-loader/index.js?{\"url\":true}!./node_modules/postcss-loader/lib/index.js?{\"plugins\":[null]}!./node_modules/stylus-loader/index.js?{\"include css\":true,\"sourceMap\":false}!./site/src/pages/layout.styl");
			if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./site/src/pages/layout.vdt":
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

/***/ }),

/***/ "./styles/fonts/iconfont.eot?t=1506585686967":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./fonts/d239a275fb6b295b2ae151480840f98c.eot";

/***/ }),

/***/ "./styles/fonts/iconfont.svg?t=1506585686967":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./fonts/147dee11504fe0e20b48a5ef5150c4ed.svg";

/***/ }),

/***/ "./styles/fonts/iconfont.ttf?t=1506585686967":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./fonts/35860a99a79e0ed602a1df7ad05e89a0.ttf";

/***/ }),

/***/ "./styles/fonts/ionicons.eot?v=2.0.0":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./fonts/2c2ae068be3b089e0a5b59abb1831550.eot";

/***/ }),

/***/ "./styles/fonts/ionicons.svg?v=2.0.0":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./fonts/621bd386841f74e0053cb8e67f8a0604.svg";

/***/ }),

/***/ "./styles/fonts/ionicons.ttf?v=2.0.0":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./fonts/24712f6c47821394fba7942fbb52c3b2.ttf";

/***/ }),

/***/ "./styles/fonts/ionicons.woff?v=2.0.0":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./fonts/05acfdb568b3df49ad31355b19495d4a.woff";

/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2J1dHRvbi9ncm91cC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2J1dHRvbi9ncm91cC52ZHQiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9idXR0b24vaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9idXR0b24vaW5kZXguc3R5bD84NWUyIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvYnV0dG9uL2luZGV4LnZkdCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3RhYmxlL2luZGV4LnN0eWw/ZGI0NiIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3V0aWxzLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvYnV0dG9uL2luZGV4LnN0eWwiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy90YWJsZS9pbmRleC5zdHlsIiwid2VicGFjazovLy8uL3NpdGUvc3JjL3BhZ2VzL2RvY3VtZW50L2luZGV4LnN0eWwiLCJ3ZWJwYWNrOi8vLy4vc2l0ZS9zcmMvcGFnZXMvbGF5b3V0LnN0eWwiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL3VybC9lc2NhcGUuanMiLCJ3ZWJwYWNrOi8vLy4vc2l0ZSBsYXp5IF5cXC5cXC8uKlxcL2luZGV4XFwuanMkIiwid2VicGFjazovLy8uL3NpdGUgbGF6eSBeXFwuXFwvLipcXC9pbmRleFxcLmpzb24kIiwid2VicGFjazovLy8uL3NpdGUvc3JjL3BhZ2VzL2RvY3VtZW50L2luZGV4LmpzIiwid2VicGFjazovLy8uL3NpdGUvc3JjL3BhZ2VzL2RvY3VtZW50L2luZGV4LnN0eWw/NjY5MiIsIndlYnBhY2s6Ly8vLi9zaXRlL3NyYy9wYWdlcy9kb2N1bWVudC9pbmRleC52ZHQiLCJ3ZWJwYWNrOi8vLy4vc2l0ZS9zcmMvcGFnZXMvbGF5b3V0LmpzIiwid2VicGFjazovLy8uL3NpdGUvc3JjL3BhZ2VzL2xheW91dC5zdHlsPzdiMTIiLCJ3ZWJwYWNrOi8vLy4vc2l0ZS9zcmMvcGFnZXMvbGF5b3V0LnZkdCIsIndlYnBhY2s6Ly8vLi9zdHlsZXMvZm9udHMvaWNvbmZvbnQuZW90Iiwid2VicGFjazovLy8uL3N0eWxlcy9mb250cy9pY29uZm9udC5zdmciLCJ3ZWJwYWNrOi8vLy4vc3R5bGVzL2ZvbnRzL2ljb25mb250LnR0ZiIsIndlYnBhY2s6Ly8vLi9zdHlsZXMvZm9udHMvaW9uaWNvbnMuZW90Iiwid2VicGFjazovLy8uL3N0eWxlcy9mb250cy9pb25pY29ucy5zdmciLCJ3ZWJwYWNrOi8vLy4vc3R5bGVzL2ZvbnRzL2lvbmljb25zLnR0ZiIsIndlYnBhY2s6Ly8vLi9zdHlsZXMvZm9udHMvaW9uaWNvbnMud29mZiJdLCJuYW1lcyI6WyJCdXR0b25Hcm91cCIsInRlbXBsYXRlIiwidmVydGljYWwiLCJ2YWx1ZSIsInVuZGVmaW5lZCIsInJhZGlvIiwiY2hlY2tUeXBlIiwiZ2V0Iiwic2V0Iiwic2lsZW50IiwicHJvcFR5cGVzIiwiQm9vbGVhbiIsIm9iaiIsIl9WZHQiLCJibG9ja3MiLCIkY2FsbGVlIiwiVmR0IiwiaCIsIm1pc3MiLCJoYyIsImh1Iiwid2lkZ2V0cyIsIl9ibG9ja3MiLCJfX2Jsb2NrcyIsIl9fdSIsInV0aWxzIiwiZXh0ZW5kIiwiX2UiLCJlcnJvciIsIl9jbGFzc05hbWUiLCJjbGFzc05hbWUiLCJfX28iLCJPcHRpb25zIiwiX2dldE1vZGVsIiwiZ2V0TW9kZWwiLCJfc2V0TW9kZWwiLCJzZXRNb2RlbCIsIl9zZXRDaGVja2JveE1vZGVsIiwic2V0Q2hlY2tib3hNb2RlbCIsIl9kZXRlY3RDaGVja2JveENoZWNrZWQiLCJkZXRlY3RDaGVja2JveENoZWNrZWQiLCJfc2V0U2VsZWN0TW9kZWwiLCJzZXRTZWxlY3RNb2RlbCIsInNlbGYiLCJkYXRhIiwic2NvcGUiLCJBbmltYXRlIiwicGFyZW50IiwiX3N1cGVyIiwic3R5bGUiLCJjaGlsZHJlbiIsImZsdWlkIiwiY2xhc3NOYW1lT2JqIiwiZSIsImNhbGwiLCJtYXAiLCJBcnJheSIsImlzQXJyYXkiLCJ2Tm9kZSIsInRhZyIsInByb3BzIiwiX3ZhbHVlIiwiX2NoZWNrVHlwZSIsIkJ1dHRvbiIsInR5cGUiLCJzaXplIiwiaWNvbiIsImNpcmNsZSIsImxvYWRpbmciLCJkaXNhYmxlZCIsImh0bWxUeXBlIiwidGFnTmFtZSIsInRhZ1Byb3BzIiwibmFtZSIsInBhcmVudFZOb2RlIiwiZ3JvdXAiLCJzbGljZSIsImluZGV4IiwiaW5kZXhPZiIsInB1c2giLCJzcGxpY2UiLCJ0cmlnZ2VyIiwiU3RyaW5nIiwiRnVuY3Rpb24iLCJyZWYiLCJrZXkiLCJyZXN0IiwiY2hlY2tlZCIsImhyZWYiLCJmb3JFYWNoIiwiY2hpbGQiLCJsZW5ndGgiLCJfb25DbGljayIsImFkZFN0eWxlIiwia2ViYWJDYXNlIiwicHJveHlFdmVudCIsImlzU3RyaW5nT3JOdW1iZXIiLCJpc1RleHRWTm9kZSIsImlzU3RyaW5nT3JOdW1iZXJOb3RFbXB0eSIsImdldFRleHRCeUNoaWxkcmVuIiwiZmluZFBhcmVudENvbXBvbmVudCIsInN0clBhZCIsInJhbmdlIiwic2VsZWN0SW5wdXQiLCJleHRyYSIsIk9iamVjdCIsImtleXMiLCJqb2luIiwidGVzdCIsIl9jYWNoZSIsInVwcGVyY2FzZVBhdHRlcm4iLCJ3b3JkIiwicmVwbGFjZSIsIml0ZW0iLCJ0b0xvd2VyQ2FzZSIsImNvbXBvbmVudCIsIm8iLCJyZXQiLCJpc09iamVjdCIsIkNvbXBvbmVudCIsImluc3RhbmNlIiwiaXNVbnRpbCIsInN0ciIsInBhZCIsInRvU3RyaW5nIiwibCIsInN0YXJ0IiwiZW5kIiwiYXBwbHkiLCJ2IiwiaSIsImlucHV0Iiwic2VsZWN0Iiwic2V0U2VsZWN0aW9uUmFuZ2UiLCJmb2N1cyIsInBhdGgiLCJBcnRpY2xlIiwiZG9jdW1lbnQiLCJ0aXRsZSIsImN1cnJlbnROYXYiLCJfb2JqIiwiaGFzT3duUHJvcGVydHkiLCJhcmd1bWVudHMiLCJjb250ZW50IiwiaW5jbHVkZXMiLCJzdWJzdHJpbmciLCJhY3RpdmUiLCIkYm9yZGVyIiwiZWxlbWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJfdXBkYXRlQm9yZGVyIiwibmF2IiwiaGVhZGVyIiwibmF2SW5kZXgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFcUJBLFcsV0FDaEIsaUJBQU9DLFFBQVAsRTs7Ozs7Ozs7Ozs7bUNBR1U7QUFDUCxtQkFBTztBQUNIQywwQkFBVSxLQURQO0FBRUhDLHVCQUFPQyxTQUZKO0FBR0hDLHVCQUFPLEtBSEosRUFHVztBQUNkQywyQkFBVyxNQUpSLENBSWdCO0FBSmhCLGFBQVA7QUFNSDs7O2dDQU9PO0FBQ0osZ0JBQUksS0FBS0MsR0FBTCxDQUFTLE9BQVQsQ0FBSixFQUF1QjtBQUNuQixxQkFBS0MsR0FBTCxDQUFTLFdBQVQsRUFBc0IsT0FBdEIsRUFBK0IsRUFBQ0MsUUFBUSxJQUFULEVBQS9CO0FBQ0g7QUFDSjs7OzRCQXBCYztBQUFFO0FBQWtCOzs7OzZCQVc1QkMsUyxHQUFZO0FBQ2ZSLGNBQVVTLE9BREs7QUFFZk4sV0FBT007QUFGUSxDO2tCQWJGWCxXOzs7Ozs7Ozs7Ozs7Ozs7OztrQkNITixVQUFTWSxHQUFULEVBQWNDLElBQWQsRUFBb0JDLE1BQXBCLEVBQTRCQyxPQUE1QixFQUFxQztBQUFBOztBQUVwREYsYUFBU0EsT0FBT0csR0FBaEI7QUFDQUosWUFBUUEsTUFBTSxFQUFkO0FBQ0FFLGVBQVdBLFNBQVMsRUFBcEI7QUFDQSxRQUFJRyxJQUFJSixLQUFLSyxJQUFMLENBQVVELENBQWxCO0FBQUEsUUFBcUJFLEtBQUtOLEtBQUtLLElBQUwsQ0FBVUMsRUFBcEM7QUFBQSxRQUF3Q0MsS0FBS1AsS0FBS0ssSUFBTCxDQUFVRSxFQUF2RDtBQUFBLFFBQTJEQyxVQUFVLFFBQVEsS0FBS0EsT0FBYixJQUF3QixFQUE3RjtBQUFBLFFBQWlHQyxVQUFVLEVBQTNHO0FBQUEsUUFBK0dDLFdBQVcsRUFBMUg7QUFB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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUM7Ozs7Ozs7QUM1ZkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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LEtBSy9EeEIsU0FBU3dILE9BQVQsQ0FBaUJ6RixJQUFqQixDQUFzQixJQUF0QixDQUxnRCxFQUtuQixpQkFMbUIsQ0FUaEMsQ0FBZixFQWNpRHpCLFdBQVcsWUFBVztBQUFDLFlBQUk7QUFBQyxtQkFBTyxtQkFBRSxnQkFBZ0IsSUFBbEIsSUFBeUJnQixNQUFNZixTQUEvQixFQUEyQ2UsTUFBTWYsU0FBakQsR0FBOEQsQ0FBOUQsQ0FBUDtBQUF3RSxTQUE3RSxDQUE4RSxPQUFNdUIsQ0FBTixFQUFTO0FBQUMxQixlQUFHMEIsQ0FBSDtBQUFNO0FBQUMsS0FBM0csQ0FBNEdDLElBQTVHLENBQWlILElBQWpILENBQVgsQ0FkakQsQ0FBUDtBQWVDLEM7O0FBNUNEOzs7Ozs7Ozs7Ozs7Ozs7QUNBQSx3Rjs7Ozs7OztBQ0FBLHdGOzs7Ozs7O0FDQUEsd0Y7Ozs7Ozs7QUNBQSx3Rjs7Ozs7OztBQ0FBLHdGOzs7Ozs7O0FDQUEsd0Y7Ozs7Ozs7QUNBQSx5RiIsImZpbGUiOiJzdGF0aWMvY2h1bmsvOWEyOGYzNWRlNmU3YWZhZjBkNjUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSW50YWN0IGZyb20gJ2ludGFjdCc7XG5pbXBvcnQgdGVtcGxhdGUgZnJvbSAnLi9ncm91cC52ZHQnO1xuaW1wb3J0ICcuL2luZGV4LnN0eWwnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCdXR0b25Hcm91cCBleHRlbmRzIEludGFjdCB7XG4gICAgQEludGFjdC50ZW1wbGF0ZSgpXG4gICAgZ2V0IHRlbXBsYXRlKCkgeyByZXR1cm4gdGVtcGxhdGU7IH1cblxuICAgIGRlZmF1bHRzKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdmVydGljYWw6IGZhbHNlLFxuICAgICAgICAgICAgdmFsdWU6IHVuZGVmaW5lZCxcbiAgICAgICAgICAgIHJhZGlvOiBmYWxzZSwgLy8gQGRlcHJlY2F0ZWQ6IHVzZSBjaGVja1R5cGUgaW5zdGVhZCBvZlxuICAgICAgICAgICAgY2hlY2tUeXBlOiAnbm9uZScsIC8vIHJhZGlvIHwgY2hlY2tib3ggfCBub25lXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICAgICAgdmVydGljYWw6IEJvb2xlYW4sXG4gICAgICAgIHJhZGlvOiBCb29sZWFuLFxuICAgIH1cblxuICAgIF9pbml0KCkge1xuICAgICAgICBpZiAodGhpcy5nZXQoJ3JhZGlvJykpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0KCdjaGVja1R5cGUnLCAncmFkaW8nLCB7c2lsZW50OiB0cnVlfSk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvYnV0dG9uL2dyb3VwLmpzIiwiaW1wb3J0IEJ1dHRvbiBmcm9tICcuLyc7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihvYmosIF9WZHQsIGJsb2NrcywgJGNhbGxlZSkge1xuXG5fVmR0IHx8IChfVmR0ID0gVmR0KTtcbm9iaiB8fCAob2JqID0ge30pO1xuYmxvY2tzIHx8IChibG9ja3MgPSB7fSk7XG52YXIgaCA9IF9WZHQubWlzcy5oLCBoYyA9IF9WZHQubWlzcy5oYywgaHUgPSBfVmR0Lm1pc3MuaHUsIHdpZGdldHMgPSB0aGlzICYmIHRoaXMud2lkZ2V0cyB8fCB7fSwgX2Jsb2NrcyA9IHt9LCBfX2Jsb2NrcyA9IHt9LFxuX191ID0gX1ZkdC51dGlscywgZXh0ZW5kID0gX191LmV4dGVuZCwgX2UgPSBfX3UuZXJyb3IsIF9jbGFzc05hbWUgPSBfX3UuY2xhc3NOYW1lLFxuX19vID0gX191Lk9wdGlvbnMsIF9nZXRNb2RlbCA9IF9fby5nZXRNb2RlbCwgX3NldE1vZGVsID0gX19vLnNldE1vZGVsLFxuX3NldENoZWNrYm94TW9kZWwgPSBfX3Uuc2V0Q2hlY2tib3hNb2RlbCwgX2RldGVjdENoZWNrYm94Q2hlY2tlZCA9IF9fdS5kZXRlY3RDaGVja2JveENoZWNrZWQsXG5fc2V0U2VsZWN0TW9kZWwgPSBfX3Uuc2V0U2VsZWN0TW9kZWwsXG5zZWxmID0gdGhpcy5kYXRhLCBzY29wZSA9IG9iaiwgQW5pbWF0ZSA9IHNlbGYgJiYgc2VsZi5BbmltYXRlLCBwYXJlbnQgPSAoJGNhbGxlZSB8fCB7fSkuX3N1cGVyXG5cblxuY29uc3Qge1xuICAgIGNsYXNzTmFtZSwgdmVydGljYWwsIHN0eWxlLCBcbiAgICBjaGlsZHJlbiwgdmFsdWUsIGZsdWlkLCBjaGVja1R5cGVcbn0gPSBzZWxmLmdldCgpO1xuXG5jb25zdCBjbGFzc05hbWVPYmogPSB7XG4gICAgJ2stYnRucyc6IHRydWUsXG4gICAgJ2stdmVydGljYWwnOiB2ZXJ0aWNhbCxcbiAgICBbY2xhc3NOYW1lXTogY2xhc3NOYW1lLFxuICAgICdrLWZsdWlkJzogZmx1aWQsXG59O1xuXG5yZXR1cm4gaCgnZGl2JywgeydzdHlsZSc6IGZ1bmN0aW9uKCkge3RyeSB7cmV0dXJuIFtzdHlsZSBdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpfSwgZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW2NoZWNrVHlwZSAhPT0gJ25vbmUnID8gX191Lm1hcChcbiAgICAgICAgY2hpbGRyZW4gPyBcbiAgICAgICAgICAgIChBcnJheS5pc0FycmF5KGNoaWxkcmVuKSA/IGNoaWxkcmVuIDogW2NoaWxkcmVuXSkgOlxuICAgICAgICAgICAgY2hpbGRyZW4sIFxuICAgICAgICB2Tm9kZSA9PiB7XG4gICAgICAgICAgICBpZiAodk5vZGUudGFnID09PSBCdXR0b24pIHtcbiAgICAgICAgICAgICAgICB2Tm9kZS5wcm9wcyA9IHtcbiAgICAgICAgICAgICAgICAgICAgLi4udk5vZGUucHJvcHMsIFxuICAgICAgICAgICAgICAgICAgICBfdmFsdWU6IHZhbHVlLFxuICAgICAgICAgICAgICAgICAgICBfY2hlY2tUeXBlOiBjaGVja1R5cGUsXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHZOb2RlO1xuICAgICAgICB9KSA6IFxuICAgICAgICBjaGlsZHJlblxuXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKSwgX2NsYXNzTmFtZShmdW5jdGlvbigpIHt0cnkge3JldHVybiBbY2xhc3NOYW1lT2JqIF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcykpKVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvYnV0dG9uL2dyb3VwLnZkdCIsImltcG9ydCBJbnRhY3QgZnJvbSAnaW50YWN0JztcbmltcG9ydCB0ZW1wbGF0ZSBmcm9tICcuL2luZGV4LnZkdCc7XG5pbXBvcnQgR3JvdXAgZnJvbSAnLi9ncm91cCc7XG5pbXBvcnQgJy4vaW5kZXguc3R5bCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJ1dHRvbiBleHRlbmRzIEludGFjdCB7XG4gICAgQEludGFjdC50ZW1wbGF0ZSgpXG4gICAgZ2V0IHRlbXBsYXRlKCkgeyByZXR1cm4gdGVtcGxhdGU7IH1cblxuICAgIGRlZmF1bHRzKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdHlwZTogJ2RlZmF1bHQnLCAvLyBwcmltYXJ5IHwgd2FybmluZyB8IGRhbmdlclxuICAgICAgICAgICAgc2l6ZTogJ2RlZmF1bHQnLCAvLyBzbWFsbCB8IG1pbmlcbiAgICAgICAgICAgIGljb246IGZhbHNlLFxuICAgICAgICAgICAgY2lyY2xlOiBmYWxzZSxcbiAgICAgICAgICAgIGxvYWRpbmc6IGZhbHNlLFxuICAgICAgICAgICAgZGlzYWJsZWQ6IGZhbHNlLFxuICAgICAgICAgICAgZmx1aWQ6IGZhbHNlLFxuICAgICAgICAgICAgaHRtbFR5cGU6ICdidXR0b24nLFxuICAgICAgICAgICAgdGFnTmFtZTogJ2J1dHRvbicsXG4gICAgICAgICAgICB0YWdQcm9wczogdW5kZWZpbmVkLFxuICAgICAgICAgICAgdmFsdWU6IHVuZGVmaW5lZCxcbiAgICAgICAgICAgIG5hbWU6IHVuZGVmaW5lZCxcblxuICAgICAgICAgICAgX3ZhbHVlOiB1bmRlZmluZWQsXG4gICAgICAgICAgICBfY2hlY2tUeXBlOiAnbm9uZScsXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICBzaXplOiBTdHJpbmcsXG4gICAgICAgIGljb246IEJvb2xlYW4sXG4gICAgICAgIGNpcmNsZTogQm9vbGVhbixcbiAgICAgICAgbG9hZGluZzogQm9vbGVhbixcbiAgICAgICAgZGlzYWJsZWQ6IEJvb2xlYW4sXG4gICAgICAgIGZsdWlkOiBCb29sZWFuLFxuICAgICAgICBodG1sVHlwZTogU3RyaW5nLFxuICAgICAgICB0YWdOYW1lOiBbU3RyaW5nLCBGdW5jdGlvbl0sXG4gICAgICAgIG5hbWU6IFN0cmluZyxcbiAgICB9XG5cbiAgICBfbW91bnQoKSB7XG4gICAgICAgIGxldCBwYXJlbnRWTm9kZSA9IHRoaXMucGFyZW50Vk5vZGU7XG5cbiAgICAgICAgd2hpbGUgKHBhcmVudFZOb2RlICYmIHBhcmVudFZOb2RlLnRhZyAhPT0gR3JvdXApIHtcbiAgICAgICAgICAgIHBhcmVudFZOb2RlID0gcGFyZW50Vk5vZGUucGFyZW50Vk5vZGU7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocGFyZW50Vk5vZGUpIHtcbiAgICAgICAgICAgIHRoaXMuZ3JvdXAgPSBwYXJlbnRWTm9kZS5jaGlsZHJlbjtcblxuICAgICAgICAgICAgdGhpcy5zZXQoe1xuICAgICAgICAgICAgICAgIF9jaGVja1R5cGU6IHRoaXMuZ3JvdXAuZ2V0KCdjaGVja1R5cGUnKSxcbiAgICAgICAgICAgICAgICBfdmFsdWU6IHRoaXMuZ3JvdXAuZ2V0KCd2YWx1ZScpXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIF9iZWZvcmVVcGRhdGUoKSB7XG4gICAgICAgIGlmICh0aGlzLmdyb3VwKSB7XG4gICAgICAgICAgICB0aGlzLnNldCh7XG4gICAgICAgICAgICAgICAgX2NoZWNrVHlwZTogdGhpcy5ncm91cC5nZXQoJ2NoZWNrVHlwZScpLFxuICAgICAgICAgICAgICAgIF92YWx1ZTogdGhpcy5ncm91cC5nZXQoJ3ZhbHVlJylcbiAgICAgICAgICAgIH0sIHtzaWxlbnQ6IHRydWV9KTtcbiAgICAgICAgfSBcbiAgICB9XG5cbiAgICBzaG93TG9hZGluZygpIHtcbiAgICAgICAgdGhpcy5zZXQoJ2xvYWRpbmcnLCB0cnVlKTtcbiAgICB9XG5cbiAgICBoaWRlTG9hZGluZygpIHtcbiAgICAgICAgdGhpcy5zZXQoJ2xvYWRpbmcnLCBmYWxzZSk7XG4gICAgfVxuXG4gICAgZGlzYWJsZSgpIHtcbiAgICAgICAgdGhpcy5zZXQoJ2Rpc2FibGVkJywgdHJ1ZSk7XG4gICAgfVxuXG4gICAgZW5hYmxlKCkge1xuICAgICAgICB0aGlzLnNldCgnZGlzYWJsZWQnLCBmYWxzZSk7XG4gICAgfVxuXG4gICAgX29uQ2xpY2soZSkge1xuICAgICAgICBpZiAodGhpcy5ncm91cCkge1xuICAgICAgICAgICAgbGV0IHtfY2hlY2tUeXBlLCB2YWx1ZSwgX3ZhbHVlfSA9IHRoaXMuZ2V0KCk7XG4gICAgICAgICAgICBpZiAoX2NoZWNrVHlwZSA9PT0gJ3JhZGlvJykge1xuICAgICAgICAgICAgICAgIHRoaXMuZ3JvdXAuc2V0KCd2YWx1ZScsIHZhbHVlKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoX2NoZWNrVHlwZSA9PT0gJ2NoZWNrYm94Jykge1xuICAgICAgICAgICAgICAgIGlmICghQXJyYXkuaXNBcnJheShfdmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgICAgIF92YWx1ZSA9IFtdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBfdmFsdWUgPSBfdmFsdWUuc2xpY2UoMCk7XG4gICAgICAgICAgICAgICAgY29uc3QgaW5kZXggPSBfdmFsdWUuaW5kZXhPZih2YWx1ZSk7XG4gICAgICAgICAgICAgICAgaWYgKCF+aW5kZXgpIHtcbiAgICAgICAgICAgICAgICAgICAgX3ZhbHVlLnB1c2godmFsdWUpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIF92YWx1ZS5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLmdyb3VwLnNldCgndmFsdWUnLCBfdmFsdWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRoaXMudHJpZ2dlcignY2xpY2snLCBlKTtcbiAgICB9XG59XG5cbmV4cG9ydCB7QnV0dG9uLCBHcm91cCBhcyBCdXR0b25Hcm91cH07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL2J1dHRvbi9pbmRleC5qcyIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz8/cmVmLS0yLTEhLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0yLTIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWx1cy1sb2FkZXIvaW5kZXguanM/P3JlZi0tMi0zIS4vaW5kZXguc3R5bFwiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuLy8gUHJlcGFyZSBjc3NUcmFuc2Zvcm1hdGlvblxudmFyIHRyYW5zZm9ybTtcblxudmFyIG9wdGlvbnMgPSB7fVxub3B0aW9ucy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1cbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuXHQvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuXHRpZighY29udGVudC5sb2NhbHMpIHtcblx0XHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tMi0xIS4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMi0yIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsdXMtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTItMyEuL2luZGV4LnN0eWxcIiwgZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTItMSEuLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTItMiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bHVzLWxvYWRlci9pbmRleC5qcz8/cmVmLS0yLTMhLi9pbmRleC5zdHlsXCIpO1xuXHRcdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cdFx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdFx0fSk7XG5cdH1cblx0Ly8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2NvbXBvbmVudHMvYnV0dG9uL2luZGV4LnN0eWxcbi8vIG1vZHVsZSBpZCA9IC4vY29tcG9uZW50cy9idXR0b24vaW5kZXguc3R5bFxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCJpbXBvcnQge2lzU3RyaW5nT3JOdW1iZXJOb3RFbXB0eX0gZnJvbSAnLi4vdXRpbHMnO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24ob2JqLCBfVmR0LCBibG9ja3MsICRjYWxsZWUpIHtcblxuX1ZkdCB8fCAoX1ZkdCA9IFZkdCk7XG5vYmogfHwgKG9iaiA9IHt9KTtcbmJsb2NrcyB8fCAoYmxvY2tzID0ge30pO1xudmFyIGggPSBfVmR0Lm1pc3MuaCwgaGMgPSBfVmR0Lm1pc3MuaGMsIGh1ID0gX1ZkdC5taXNzLmh1LCB3aWRnZXRzID0gdGhpcyAmJiB0aGlzLndpZGdldHMgfHwge30sIF9ibG9ja3MgPSB7fSwgX19ibG9ja3MgPSB7fSxcbl9fdSA9IF9WZHQudXRpbHMsIGV4dGVuZCA9IF9fdS5leHRlbmQsIF9lID0gX191LmVycm9yLCBfY2xhc3NOYW1lID0gX191LmNsYXNzTmFtZSxcbl9fbyA9IF9fdS5PcHRpb25zLCBfZ2V0TW9kZWwgPSBfX28uZ2V0TW9kZWwsIF9zZXRNb2RlbCA9IF9fby5zZXRNb2RlbCxcbl9zZXRDaGVja2JveE1vZGVsID0gX191LnNldENoZWNrYm94TW9kZWwsIF9kZXRlY3RDaGVja2JveENoZWNrZWQgPSBfX3UuZGV0ZWN0Q2hlY2tib3hDaGVja2VkLFxuX3NldFNlbGVjdE1vZGVsID0gX191LnNldFNlbGVjdE1vZGVsLFxuc2VsZiA9IHRoaXMuZGF0YSwgc2NvcGUgPSBvYmosIEFuaW1hdGUgPSBzZWxmICYmIHNlbGYuQW5pbWF0ZSwgcGFyZW50ID0gKCRjYWxsZWUgfHwge30pLl9zdXBlclxuXG5cbmxldCB7XG4gICAgdHlwZSwgY2xhc3NOYW1lLCBzaXplLCBpY29uLCBjaXJjbGUsIHJlZiwga2V5LFxuICAgIHRhZ05hbWUsIGh0bWxUeXBlLCBmbHVpZCwgY2hpbGRyZW4sIGxvYWRpbmcsXG4gICAgdmFsdWUsIF92YWx1ZSwgbmFtZSwgdGFnUHJvcHMsIF9jaGVja1R5cGUsIC4uLnJlc3Rcbn0gPSBzZWxmLmdldCgpO1xuXG5jb25zdCBjaGVja2VkID0gdmFsdWUgIT09IHVuZGVmaW5lZCA/XG4gICAgX2NoZWNrVHlwZSA9PT0gJ3JhZGlvJyA/IFxuICAgICAgICB2YWx1ZSA9PT0gX3ZhbHVlIDogIFxuICAgICAgICAoXG4gICAgICAgICAgICBfY2hlY2tUeXBlID09PSAnY2hlY2tib3gnID8gXG4gICAgICAgICAgICAgICAgQXJyYXkuaXNBcnJheShfdmFsdWUpICYmICEhfl92YWx1ZS5pbmRleE9mKHZhbHVlKSA6XG4gICAgICAgICAgICAgICAgZmFsc2VcbiAgICAgICAgKVxuICAgIDogZmFsc2U7XG5cbmNvbnN0IGNsYXNzTmFtZU9iaiA9IHtcbiAgICAnay1idG4nOiB0cnVlLFxuICAgIFtgay0ke3R5cGV9YF06IHR5cGUgIT09ICdkZWZhdWx0JyxcbiAgICAnay1idG4taWNvbic6IGljb24sXG4gICAgW2BrLSR7c2l6ZX1gXTogc2l6ZSAhPT0gJ2RlZmF1bHQnLFxuICAgIFtjbGFzc05hbWVdOiBjbGFzc05hbWUsIFxuICAgICdrLWNpcmNsZSc6IGNpcmNsZSxcbiAgICAnay1sb2FkaW5nJzogbG9hZGluZyxcbiAgICAnay1mbHVpZCc6IGZsdWlkLFxuICAgICdrLWFjdGl2ZSc6IGNoZWNrZWQsXG59O1xuXG5jb25zdCBCdXR0b24gPSBwcm9wcyA9PiB7XG4gICAgaWYgKHByb3BzLmhyZWYpIHtcbiAgICAgICAgdGFnTmFtZSA9ICdhJztcbiAgICB9XG4gICAgaWYgKHRhZ05hbWUgPT09ICdidXR0b24nKSB7XG4gICAgICAgIC8vIHNldCB0eXBlIG9mIGh0bWwgYnV0dG9uXG4gICAgICAgIHByb3BzLnR5cGUgPSBodG1sVHlwZTtcbiAgICB9XG4gICAgLy8gZGlzYWJsZSBidXR0b24gd2hlbiBsb2FkaW5nXG4gICAgaWYgKGxvYWRpbmcpIHByb3BzLmRpc2FibGVkID0gdHJ1ZTtcbiAgICByZXR1cm4gaCh0YWdOYW1lLCBwcm9wcywgcHJvcHMuY2hpbGRyZW4pO1xufTtcblxuLy8gaGFjayBmb3IgbG9hZGluZyB0cmFuc2l0aW9uIG9mIHdpZHRoXG5pZiAoIWljb24gJiYgQXJyYXkuaXNBcnJheShjaGlsZHJlbikpIHtcbiAgICBjaGlsZHJlbi5mb3JFYWNoKChjaGlsZCwgaW5kZXgpID0+IHtcbiAgICAgICAgaWYgKGNoaWxkKSB7XG4gICAgICAgICAgICBpZiAoY2hpbGQudHlwZSA9PT0gMSB8fCBpc1N0cmluZ09yTnVtYmVyTm90RW1wdHkoY2hpbGQpKSB7XG4gICAgICAgICAgICAgICAgLy8gaXMgYSB0ZXh0IG5vZGVcbiAgICAgICAgICAgICAgICAvLyB3cmFwIHRleHQgbm9kZSB3aXRoIHNwYW5cbiAgICAgICAgICAgICAgICBjaGlsZHJlbltpbmRleF0gPSBoKCdzcGFuJywgbnVsbCwgZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW2NoaWxkIF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcykpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyB3aGV0aGVyIHRoZSBpY29uIGlzIG9uIHRoZSBsZWZ0IHNpZGUgb3IgcmlnaHRcbiAgICAgICAgICAgIGlmIChpbmRleCA9PT0gMCkge1xuICAgICAgICAgICAgICAgIGlmIChjaGlsZC5jbGFzc05hbWUgJiYgY2hpbGQuY2xhc3NOYW1lLmluZGV4T2YoJ2ljb24nKSA+IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZU9ialsnay1pY29uLWxlZnQnXSA9IHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIGlmIChpbmRleCA9PT0gY2hpbGRyZW4ubGVuZ3RoIC0gMSkge1xuICAgICAgICAgICAgICAgIGlmIChjaGlsZC5jbGFzc05hbWUgJiYgY2hpbGQuY2xhc3NOYW1lLmluZGV4T2YoJ2ljb24nKSA+IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZU9ialsnay1pY29uLXJpZ2h0J10gPSB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0pO1xufSBlbHNlIGlmIChpc1N0cmluZ09yTnVtYmVyTm90RW1wdHkoY2hpbGRyZW4pKSB7XG4gICAgLy8gd3JhcCB0ZXh0IG5vZGUgd2l0aCBzcGFuXG4gICAgY2hpbGRyZW4gPSBoKCdzcGFuJywgbnVsbCwgZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW2NoaWxkcmVuIF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcykpXG59XG5cbnJldHVybiBoKEJ1dHRvbiwgeydjbGFzc05hbWUnOiBfY2xhc3NOYW1lKGZ1bmN0aW9uKCkge3RyeSB7cmV0dXJuIFtjbGFzc05hbWVPYmogXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKSksIC4uLmZ1bmN0aW9uKCkge3RyeSB7cmV0dXJuIFtyZXN0IF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcyksIC4uLmZ1bmN0aW9uKCkge3RyeSB7cmV0dXJuIFt0YWdQcm9wcyBdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpLCAnZXYtY2xpY2snOiBmdW5jdGlvbigpIHt0cnkge3JldHVybiBbc2VsZi5fb25DbGljayBdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpLCAnY2hpbGRyZW4nOiBbJ1xcbiAgICAnLCBmdW5jdGlvbigpIHt0cnkge3JldHVybiBbbG9hZGluZyA/IFxuICAgICAgICBjbGFzc05hbWVPYmpbJ2staWNvbi1yaWdodCddID9cbiAgICAgICAgICAgIFtjaGlsZHJlbiwgaCgnaScsIG51bGwsIG51bGwsICdrLWljb24gaW9uLWxvYWQtYyBpY29uLWxvYWRpbmcnKV0gOlxuICAgICAgICAgICAgW2goJ2knLCBudWxsLCBudWxsLCAnay1pY29uIGlvbi1sb2FkLWMgaWNvbi1sb2FkaW5nJyksIGNoaWxkcmVuXSA6XG4gICAgICAgIGNoaWxkcmVuIFxuICAgIF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcyksICdcXG4gICAgJywgZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW19jaGVja1R5cGUgIT09ICdub25lJyBdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpID8gaCgnaW5wdXQnLCB7J3R5cGUnOiBmdW5jdGlvbigpIHt0cnkge3JldHVybiBbX2NoZWNrVHlwZSBdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpLCAnbmFtZSc6IGZ1bmN0aW9uKCkge3RyeSB7cmV0dXJuIFtuYW1lIF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcyksICdjaGVja2VkJzogZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW2NoZWNrZWQgXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKX0pIDogdW5kZWZpbmVkXSwgJ19jb250ZXh0JzogdGhpc30pXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9idXR0b24vaW5kZXgudmR0IiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTItMSEuLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTItMiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bHVzLWxvYWRlci9pbmRleC5qcz8/cmVmLS0yLTMhLi9pbmRleC5zdHlsXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4vLyBQcmVwYXJlIGNzc1RyYW5zZm9ybWF0aW9uXG52YXIgdHJhbnNmb3JtO1xuXG52YXIgb3B0aW9ucyA9IHt9XG5vcHRpb25zLnRyYW5zZm9ybSA9IHRyYW5zZm9ybVxuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG5cdC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdGlmKCFjb250ZW50LmxvY2Fscykge1xuXHRcdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz8/cmVmLS0yLTEhLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0yLTIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWx1cy1sb2FkZXIvaW5kZXguanM/P3JlZi0tMi0zIS4vaW5kZXguc3R5bFwiLCBmdW5jdGlvbigpIHtcblx0XHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tMi0xIS4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMi0yIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsdXMtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTItMyEuL2luZGV4LnN0eWxcIik7XG5cdFx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblx0XHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0XHR9KTtcblx0fVxuXHQvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vY29tcG9uZW50cy90YWJsZS9pbmRleC5zdHlsXG4vLyBtb2R1bGUgaWQgPSAuL2NvbXBvbmVudHMvdGFibGUvaW5kZXguc3R5bFxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCJpbXBvcnQgSW50YWN0IGZyb20gJ2ludGFjdCc7XG5cbmNvbnN0IHV0aWxzID0gSW50YWN0LnV0aWxzO1xuXG5leHBvcnQgZnVuY3Rpb24gYWRkU3R5bGUoc3R5bGUsIGV4dHJhKSB7XG4gICAgaWYgKCFzdHlsZSkgcmV0dXJuIGV4dHJhO1xuICAgIGlmICghZXh0cmEpIHJldHVybiBzdHlsZTtcbiAgICBpZiAodHlwZW9mIHN0eWxlID09PSAnc3RyaW5nJykge1xuICAgICAgICBleHRyYSA9IE9iamVjdC5rZXlzKGV4dHJhKS5tYXAoa2V5ID0+IGAke2tlYmFiQ2FzZShrZXkpfTogJHtleHRyYVtrZXldfWApLmpvaW4oJzsnKTtcbiAgICAgICAgc3R5bGUgPSBgJHtzdHlsZX0keyFzdHlsZSB8fCAvO1xccyokLy50ZXN0KHN0eWxlKSA/ICcnIDogJzsnfSR7ZXh0cmF9YDtcbiAgICB9IGVsc2Uge1xuICAgICAgICBzdHlsZSA9IHsuLi5zdHlsZSwgLi4uZXh0cmF9O1xuICAgIH1cblxuICAgIHJldHVybiBzdHlsZTtcbn1cblxuY29uc3QgX2NhY2hlID0ge307XG5jb25zdCB1cHBlcmNhc2VQYXR0ZXJuID0gL1tBLVpdL2c7XG5leHBvcnQgZnVuY3Rpb24ga2ViYWJDYXNlKHdvcmQpIHtcbiAgICBpZiAoIV9jYWNoZVt3b3JkXSkge1xuICAgICAgICBfY2FjaGVbd29yZF0gPSB3b3JkLnJlcGxhY2UodXBwZXJjYXNlUGF0dGVybiwgKGl0ZW0pID0+IHtcbiAgICAgICAgICAgIHJldHVybiBgLSR7aXRlbS50b0xvd2VyQ2FzZSgpfWA7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gX2NhY2hlW3dvcmRdO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcHJveHlFdmVudChjb21wb25lbnQsIG5hbWUpIHtcbiAgICByZXR1cm4gKGUpID0+IGNvbXBvbmVudC50cmlnZ2VyKG5hbWUsIGUpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNTdHJpbmdPck51bWJlcihvKSB7XG4gICAgY29uc3QgdHlwZSA9IHR5cGVvZiBvO1xuICAgIHJldHVybiB0eXBlID09PSAnc3RyaW5nJyB8fCB0eXBlID09PSAnbnVtYmVyJztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzVGV4dFZOb2RlKG8pIHtcbiAgICByZXR1cm4gaXNTdHJpbmdPck51bWJlcihvKSB8fCBvLnR5cGUgPT09IDE7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc1N0cmluZ09yTnVtYmVyTm90RW1wdHkobykge1xuICAgIGNvbnN0IHR5cGUgPSB0eXBlb2YgbztcbiAgICByZXR1cm4gdHlwZSA9PT0gJ3N0cmluZycgJiYgIS9eXFxzKyQvLnRlc3QobykgfHwgdHlwZSA9PT0gJ251bWJlcic7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRUZXh0QnlDaGlsZHJlbihjaGlsZHJlbikge1xuICAgIGxldCByZXQgPSAnJztcbiAgICBpZiAoQXJyYXkuaXNBcnJheShjaGlsZHJlbikpIHtcbiAgICAgICAgY2hpbGRyZW4uZm9yRWFjaCh2Tm9kZSA9PiB7XG4gICAgICAgICAgICBpZiAoaXNUZXh0Vk5vZGUodk5vZGUpKSB7XG4gICAgICAgICAgICAgICAgcmV0ICs9IHZOb2RlLmNoaWxkcmVuO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9IGVsc2UgaWYgKGlzU3RyaW5nT3JOdW1iZXIoY2hpbGRyZW4pKSB7XG4gICAgICAgIHJldCArPSBjaGlsZHJlbjtcbiAgICB9XG5cbiAgICByZXR1cm4gcmV0O1xufVxuXG5cbmV4cG9ydCBjb25zdCBpc09iamVjdCA9IHV0aWxzLmlzT2JqZWN0O1xuXG5leHBvcnQgZnVuY3Rpb24gZmluZFBhcmVudENvbXBvbmVudChDb21wb25lbnQsIGluc3RhbmNlLCBpc1VudGlsKSB7XG4gICAgbGV0IHJldDtcbiAgICBsZXQgcGFyZW50ID0gaW5zdGFuY2UucGFyZW50Vk5vZGU7XG4gICAgd2hpbGUgKHBhcmVudCkge1xuICAgICAgICBpZiAocGFyZW50LnRhZyA9PT0gQ29tcG9uZW50KSB7XG4gICAgICAgICAgICByZXQgPSBwYXJlbnQuY2hpbGRyZW47ICAgICAgICBcbiAgICAgICAgICAgIGlmIChpc1VudGlsKSBicmVhaztcbiAgICAgICAgfVxuICAgICAgICBwYXJlbnQgPSBwYXJlbnQucGFyZW50Vk5vZGU7XG4gICAgfVxuICAgIHJldHVybiByZXQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdHJQYWQoc3RyLCBsZW5ndGgsIHBhZCkge1xuICAgIHN0ciA9IHN0ci50b1N0cmluZygpO1xuICAgIHBhZCA9IHBhZCA9PT0gdW5kZWZpbmVkID8gJzAnIDogcGFkO1xuICAgIHZhciBsID0gc3RyLmxlbmd0aDtcbiAgICBpZiAobCA8IGxlbmd0aCkge1xuICAgICAgICBzdHIgPSBuZXcgQXJyYXkobGVuZ3RoIC0gbCArIDEpLmpvaW4ocGFkKSArIHN0cjtcbiAgICB9XG4gICAgcmV0dXJuIHN0cjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJhbmdlKHN0YXJ0LCBlbmQpIHtcbiAgICByZXR1cm4gQXJyYXkuYXBwbHkobnVsbCwge2xlbmd0aDogZW5kIC0gc3RhcnQgKyAxfSlcbiAgICAgICAgLm1hcCgodiwgaSkgPT4gaSArIHN0YXJ0KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNlbGVjdElucHV0KGlucHV0KSB7XG4gICAgaWYgKGlucHV0LnNlbGVjdCkge1xuICAgICAgICBpbnB1dC5zZWxlY3QoKTtcbiAgICB9IGVsc2UgaWYgKGlucHV0LnNldFNlbGVjdGlvblJhbmdlKSB7XG4gICAgICAgIC8vIG1vYmlsZSBzYWZhcmlcbiAgICAgICAgaW5wdXQuZm9jdXMoKTtcbiAgICAgICAgaW5wdXQuc2V0U2VsZWN0aW9uUmFuZ2UoMCwgaW5wdXQudmFsdWUubGVuZ3RoKTtcbiAgICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL3V0aWxzLmpzIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKShmYWxzZSk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIuay1idG4ge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgaGVpZ2h0OiAyLjU3MTQyODU3MTQyODU3MnJlbTtcXG4gIGxpbmUtaGVpZ2h0OiBjYWxjKDIuNTcxNDI4NTcxNDI4NTcycmVtIC0gMnB4KTtcXG4gIHBhZGRpbmc6IDAgMS40Mjg1NzE0Mjg1NzE0MjlyZW07XFxuICBvdXRsaW5lOiBub25lO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgY29sb3I6ICM1OTU5NTk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4yNXMgZWFzZS1pbi1vdXQ7XFxuICB0cmFuc2l0aW9uOiBhbGwgMC4yNXMgZWFzZS1pbi1vdXQ7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjY2FkMGRkO1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbn1cXG4uay1idG46aG92ZXIge1xcbiAgYm9yZGVyLWNvbG9yOiAjMGE1ZWVlO1xcbiAgY29sb3I6ICMwYTVlZWU7XFxufVxcbi5rLWJ0bi5rLXByaW1hcnkge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzBhNWVlZTtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgYm9yZGVyLWNvbG9yOiAjMGE1ZWVlO1xcbn1cXG4uay1idG4uay1wcmltYXJ5OmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMzNjdkZjc7XFxuICBib3JkZXItY29sb3I6ICMzNjdkZjc7XFxufVxcbi5rLWJ0bi5rLXdhcm5pbmcge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmOGEwMDtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgYm9yZGVyLWNvbG9yOiAjZmY4YTAwO1xcbn1cXG4uay1idG4uay13YXJuaW5nOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmExMzM7XFxuICBib3JkZXItY29sb3I6ICNmZmExMzM7XFxufVxcbi5rLWJ0bi5rLWRhbmdlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGIyODI4O1xcbiAgY29sb3I6ICNmZmY7XFxuICBib3JkZXItY29sb3I6ICNkYjI4Mjg7XFxufVxcbi5rLWJ0bi5rLWRhbmdlcjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTI1MzUzO1xcbiAgYm9yZGVyLWNvbG9yOiAjZTI1MzUzO1xcbn1cXG4uay1idG4uay1hY3RpdmUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzBhNWVlZTtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgYm9yZGVyLWNvbG9yOiAjMGE1ZWVlO1xcbn1cXG4uay1idG4uay1hY3RpdmU6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM2N2RmNztcXG4gIGJvcmRlci1jb2xvcjogIzM2N2RmNztcXG59XFxuLmstYnRuW2Rpc2FibGVkXSxcXG4uay1idG5bZGlzYWJsZWRdOmhvdmVyIHtcXG4gIGNvbG9yOiAjOTk5O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y3ZjdmNztcXG4gIGJvcmRlci1jb2xvcjogI2Q5ZDlkOTtcXG4gIGN1cnNvcjogbm90LWFsbG93ZWQ7XFxufVxcbi5rLWJ0bi5rLW5vbmUsXFxuLmstYnRuLmstbm9uZTpob3ZlciB7XFxuICBib3JkZXI6IG5vbmU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG59XFxuLmstYnRuLmstc21hbGwge1xcbiAgZm9udC1zaXplOiAwLjg1NzE0Mjg1NzE0Mjg1N3JlbTtcXG4gIGhlaWdodDogMi4xNDI4NTcxNDI4NTcxNDNyZW07XFxuICBwYWRkaW5nOiAwIDEuMDcxNDI4NTcxNDI4NTcxcmVtO1xcbiAgbGluZS1oZWlnaHQ6IGNhbGMoMi4xNDI4NTcxNDI4NTcxNDNyZW0gLSAycHgpO1xcbn1cXG4uay1idG4uay1zbWFsbC5rLWJ0bi1pY29uIHtcXG4gIHdpZHRoOiAyLjE0Mjg1NzE0Mjg1NzE0M3JlbTtcXG59XFxuLmstYnRuLmstbWluaSB7XFxuICBmb250LXNpemU6IDAuODU3MTQyODU3MTQyODU3cmVtO1xcbiAgaGVpZ2h0OiAxLjg1NzE0Mjg1NzE0Mjg1N3JlbTtcXG4gIHBhZGRpbmc6IDAgMC43MTQyODU3MTQyODU3MTRyZW07XFxuICBsaW5lLWhlaWdodDogY2FsYygxLjg1NzE0Mjg1NzE0Mjg1N3JlbSAtIDJweCk7XFxufVxcbi5rLWJ0bi5rLW1pbmkuay1idG4taWNvbiB7XFxuICB3aWR0aDogMS44NTcxNDI4NTcxNDI4NTdyZW07XFxufVxcbi5rLWJ0biAuay1pY29uIHtcXG4gIGZvbnQtc2l6ZTogaW5oZXJpdDtcXG59XFxuLmstYnRuIC5rLWljb246YmVmb3JlIHtcXG4gIGZvbnQtc2l6ZTogaW5oZXJpdDtcXG59XFxuLmstYnRuIC5rLWljb24gKyBzcGFuIHtcXG4gIG1hcmdpbi1sZWZ0OiAwLjM1NzE0Mjg1NzE0Mjg1N2VtO1xcbn1cXG4uay1idG4uay1pY29uLXJpZ2h0IC5rLWljb24ge1xcbiAgbWFyZ2luLWxlZnQ6IDAuMzU3MTQyODU3MTQyODU3ZW07XFxufVxcbi5rLWJ0bi5rLWJ0bi1pY29uIHtcXG4gIHdpZHRoOiAyLjU3MTQyODU3MTQyODU3MnJlbTtcXG4gIHBhZGRpbmc6IDA7XFxufVxcbi5rLWJ0bi5rLWJ0bi1pY29uIC5rLWljb24ge1xcbiAgbWFyZ2luOiAwO1xcbiAgZm9udC1zaXplOiAxLjE0Mjg1NzE0Mjg1NzE0M2VtO1xcbn1cXG4uay1idG4uay1mbHVpZCB7XFxuICB3aWR0aDogMTAwJTtcXG4gIHBhZGRpbmc6IDA7XFxufVxcbi5rLWJ0bi5rLWNpcmNsZSB7XFxuICBib3JkZXItcmFkaXVzOiAxLjI4NTcxNDI4NTcxNDI4NnJlbTtcXG59XFxuLmstYnRuLmstbG9hZGluZyxcXG4uay1idG4uay1sb2FkaW5nOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxuICBjb2xvcjogI2FjYWNhYztcXG4gIGJvcmRlci1jb2xvcjogI2U0ZThlZTtcXG59XFxuLmstYnRuLmstbG9hZGluZyAuay1pY29uOm5vdCguaWNvbi1sb2FkaW5nKSB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG4uay1idG4uay1sb2FkaW5nLmstcHJpbWFyeSxcXG4uay1idG4uay1sb2FkaW5nLmstcHJpbWFyeTpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjODFhZWZhO1xcbiAgY29sb3I6ICNmZmY7XFxuICBib3JkZXItY29sb3I6ICM4MWFlZmE7XFxufVxcbi5rLWJ0bi5rLWxvYWRpbmcuay13YXJuaW5nLFxcbi5rLWJ0bi5rLWxvYWRpbmcuay13YXJuaW5nOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmM0ODA7XFxuICBjb2xvcjogI2ZmZjtcXG4gIGJvcmRlci1jb2xvcjogI2ZmYzQ4MDtcXG59XFxuLmstYnRuLmstbG9hZGluZy5rLWRhbmdlcixcXG4uay1idG4uay1sb2FkaW5nLmstZGFuZ2VyOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlZDk0OTQ7XFxuICBjb2xvcjogI2ZmZjtcXG4gIGJvcmRlci1jb2xvcjogI2VkOTQ5NDtcXG59XFxuLmstYnRuLmstbG9hZGluZy5rLWFjdGl2ZSxcXG4uay1idG4uay1sb2FkaW5nLmstYWN0aXZlOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM4MWFlZmE7XFxuICBjb2xvcjogI2ZmZjtcXG4gIGJvcmRlci1jb2xvcjogIzgxYWVmYTtcXG59XFxuLmstYnRuLmstbG9hZGluZzpub3QoLmstYnRuLWljb24pOm5vdCguay1pY29uLWxlZnQpOm5vdCguay1pY29uLXJpZ2h0KSB7XFxuICBwYWRkaW5nLWxlZnQ6IDIuNDI4NTcxNDI4NTcxNDI5ZW07XFxufVxcbi5rLWJ0bi5rLWxvYWRpbmc6bm90KC5rLWJ0bi1pY29uKTpub3QoLmstaWNvbi1sZWZ0KTpub3QoLmstaWNvbi1yaWdodCkgLmljb24tbG9hZGluZyB7XFxuICBtYXJnaW4tbGVmdDogLTFlbTtcXG59XFxuLmstYnRuLmstbG9hZGluZzpub3QoLmstYnRuLWljb24pOm5vdCguay1pY29uLWxlZnQpOm5vdCguay1pY29uLXJpZ2h0KS5rLXNtYWxsIHtcXG4gIHBhZGRpbmctbGVmdDogMi4wNzE0Mjg1NzE0Mjg1NzFlbTtcXG59XFxuLmstYnRuLmstbG9hZGluZzpub3QoLmstYnRuLWljb24pOm5vdCguay1pY29uLWxlZnQpOm5vdCguay1pY29uLXJpZ2h0KS5rLW1pbmkge1xcbiAgcGFkZGluZy1sZWZ0OiAxLjcxNDI4NTcxNDI4NTcxNGVtO1xcbn1cXG4uay1idG4gaW5wdXQge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbn1cXG4uay1idG5zIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxufVxcbi5rLWJ0bnMgLmstYnRuIHtcXG4gIG1hcmdpbjogMDtcXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxufVxcbi5rLWJ0bnMgLmstYnRuOmhvdmVyIHtcXG4gIHotaW5kZXg6IDE7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcbi5rLWJ0bnMuay1mbHVpZCB7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuLmstYnRuczpub3QoLmstdmVydGljYWwpID4gLmstYnRuOm5vdCg6Zmlyc3Qtb2YtdHlwZSkge1xcbiAgbWFyZ2luLWxlZnQ6IC0xcHg7XFxufVxcbi5rLWJ0bnM6bm90KC5rLXZlcnRpY2FsKSA+IC5rLWJ0bjpub3QoOmZpcnN0LW9mLXR5cGUpOm5vdCg6bGFzdC1vZi10eXBlKSB7XFxuICBib3JkZXItcmFkaXVzOiAwO1xcbn1cXG4uay1idG5zOm5vdCguay12ZXJ0aWNhbCkgPiAuay1idG46bm90KDpvbmx5LW9mLXR5cGUpOmZpcnN0LW9mLXR5cGUge1xcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDA7XFxuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMDtcXG59XFxuLmstYnRuczpub3QoLmstdmVydGljYWwpID4gLmstYnRuOm5vdCg6b25seS1vZi10eXBlKTpsYXN0LW9mLXR5cGUge1xcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMDtcXG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDA7XFxufVxcbi5rLWJ0bnM6bm90KC5rLXZlcnRpY2FsKSA+IC5rLWJ0bi5rLXByaW1hcnk6bm90KDpmaXJzdC1vZi10eXBlKSB7XFxuICBib3JkZXItbGVmdC1jb2xvcjogIzA5NThlMDtcXG59XFxuLmstYnRuczpub3QoLmstdmVydGljYWwpID4gLmstYnRuLmstcHJpbWFyeTpub3QoOmxhc3Qtb2YtdHlwZSkge1xcbiAgYm9yZGVyLXJpZ2h0LWNvbG9yOiAjMDk1OGUwO1xcbn1cXG4uay1idG5zOm5vdCguay12ZXJ0aWNhbCkgPiAuay1idG4uay13YXJuaW5nOm5vdCg6Zmlyc3Qtb2YtdHlwZSkge1xcbiAgYm9yZGVyLWxlZnQtY29sb3I6ICNmMDgyMDA7XFxufVxcbi5rLWJ0bnM6bm90KC5rLXZlcnRpY2FsKSA+IC5rLWJ0bi5rLXdhcm5pbmc6bm90KDpsYXN0LW9mLXR5cGUpIHtcXG4gIGJvcmRlci1yaWdodC1jb2xvcjogI2YwODIwMDtcXG59XFxuLmstYnRuczpub3QoLmstdmVydGljYWwpID4gLmstYnRuLmstZGFuZ2VyOm5vdCg6Zmlyc3Qtb2YtdHlwZSkge1xcbiAgYm9yZGVyLWxlZnQtY29sb3I6ICNkMTIzMjM7XFxufVxcbi5rLWJ0bnM6bm90KC5rLXZlcnRpY2FsKSA+IC5rLWJ0bi5rLWRhbmdlcjpub3QoOmxhc3Qtb2YtdHlwZSkge1xcbiAgYm9yZGVyLXJpZ2h0LWNvbG9yOiAjZDEyMzIzO1xcbn1cXG4uay1idG5zOm5vdCguay12ZXJ0aWNhbCkgPiAuay10b29sdGlwOm5vdCg6Zmlyc3Qtb2YtdHlwZSkgLmstYnRuIHtcXG4gIG1hcmdpbi1sZWZ0OiAtMXB4O1xcbn1cXG4uay1idG5zOm5vdCguay12ZXJ0aWNhbCkgPiAuay10b29sdGlwOm5vdCg6Zmlyc3Qtb2YtdHlwZSk6bm90KGxhc3Qtb2YtdHlwZSkgLmstYnRuIHtcXG4gIGJvcmRlci1yYWRpdXM6IDA7XFxufVxcbi5rLWJ0bnM6bm90KC5rLXZlcnRpY2FsKSA+IC5rLXRvb2x0aXA6bm90KDpvbmx5LW9mLXR5cGUpOmZpcnN0LW9mLXR5cGUgLmstYnRuIHtcXG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAwO1xcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDA7XFxufVxcbi5rLWJ0bnM6bm90KC5rLXZlcnRpY2FsKSA+IC5rLXRvb2x0aXA6bm90KDpvbmx5LW9mLXR5cGUpOmxhc3Qtb2YtdHlwZSAuay1idG4ge1xcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMDtcXG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDA7XFxufVxcbi5rLWJ0bnM6bm90KC5rLXZlcnRpY2FsKSA+IC5rLXRvb2x0aXA6bm90KDpmaXJzdC1vZi10eXBlKSAuay1idG4uay1wcmltYXJ5IHtcXG4gIGJvcmRlci1sZWZ0LWNvbG9yOiAjMDk1OGUwO1xcbn1cXG4uay1idG5zOm5vdCguay12ZXJ0aWNhbCkgPiAuay10b29sdGlwOm5vdCg6bGFzdC1vZi10eXBlKSAuay1idG4uay1wcmltYXJ5IHtcXG4gIGJvcmRlci1yaWdodC1jb2xvcjogIzA5NThlMDtcXG59XFxuLmstYnRuczpub3QoLmstdmVydGljYWwpID4gLmstdG9vbHRpcDpub3QoOmZpcnN0LW9mLXR5cGUpIC5rLWJ0bi5rLXdhcm5pbmcge1xcbiAgYm9yZGVyLWxlZnQtY29sb3I6ICNmMDgyMDA7XFxufVxcbi5rLWJ0bnM6bm90KC5rLXZlcnRpY2FsKSA+IC5rLXRvb2x0aXA6bm90KDpsYXN0LW9mLXR5cGUpIC5rLWJ0bi5rLXdhcm5pbmcge1xcbiAgYm9yZGVyLXJpZ2h0LWNvbG9yOiAjZjA4MjAwO1xcbn1cXG4uay1idG5zOm5vdCguay12ZXJ0aWNhbCkgPiAuay10b29sdGlwOm5vdCg6Zmlyc3Qtb2YtdHlwZSkgLmstYnRuLmstZGFuZ2VyIHtcXG4gIGJvcmRlci1sZWZ0LWNvbG9yOiAjZDEyMzIzO1xcbn1cXG4uay1idG5zOm5vdCguay12ZXJ0aWNhbCkgPiAuay10b29sdGlwOm5vdCg6bGFzdC1vZi10eXBlKSAuay1idG4uay1kYW5nZXIge1xcbiAgYm9yZGVyLXJpZ2h0LWNvbG9yOiAjZDEyMzIzO1xcbn1cXG4uay1idG5zOm5vdCguay12ZXJ0aWNhbCkuay1mbHVpZCB7XFxuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcXG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xcbiAgZGlzcGxheTogZmxleDtcXG59XFxuLmstYnRuczpub3QoLmstdmVydGljYWwpLmstZmx1aWQgPiAuay1idG4sXFxuLmstYnRuczpub3QoLmstdmVydGljYWwpLmstZmx1aWQgPiAuay10b29sdGlwIHtcXG4gIC13ZWJraXQtYm94LWZsZXg6IDE7XFxuICAgICAgLW1zLWZsZXg6IDE7XFxuICAgICAgICAgIGZsZXg6IDE7XFxufVxcbi5rLWJ0bnM6bm90KC5rLXZlcnRpY2FsKS5rLWZsdWlkID4gLmstdG9vbHRpcCAuay1idG4ge1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcbi5rLWJ0bnMuay12ZXJ0aWNhbCA+IC5rLWJ0biB7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuLmstYnRucy5rLXZlcnRpY2FsID4gLmstYnRuOm5vdCguay1idG4taWNvbikge1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcbi5rLWJ0bnMuay12ZXJ0aWNhbCA+IC5rLWJ0bjpub3QoOmZpcnN0LW9mLXR5cGUpIHtcXG4gIG1hcmdpbi10b3A6IC0xcHg7XFxufVxcbi5rLWJ0bnMuay12ZXJ0aWNhbCA+IC5rLWJ0bjpub3QoOmZpcnN0LW9mLXR5cGUpOm5vdCg6bGFzdC1vZi10eXBlKSB7XFxuICBib3JkZXItcmFkaXVzOiAwO1xcbn1cXG4uay1idG5zLmstdmVydGljYWwgPiAuay1idG46bm90KDpvbmx5LW9mLXR5cGUpOmZpcnN0LW9mLXR5cGUge1xcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMDtcXG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAwO1xcbn1cXG4uay1idG5zLmstdmVydGljYWwgPiAuay1idG46bm90KDpvbmx5LW9mLXR5cGUpOmxhc3Qtb2YtdHlwZSB7XFxuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAwO1xcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDA7XFxufVxcbi5rLWJ0bnMuay12ZXJ0aWNhbCA+IC5rLWJ0bi5rLXByaW1hcnk6bm90KDpmaXJzdC1vZi10eXBlKSB7XFxuICBib3JkZXItdG9wLWNvbG9yOiAjMDk1OGUwO1xcbn1cXG4uay1idG5zLmstdmVydGljYWwgPiAuay1idG4uay1wcmltYXJ5Om5vdCg6bGFzdC1vZi10eXBlKSB7XFxuICBib3JkZXItYm90dG9tLWNvbG9yOiAjMDk1OGUwO1xcbn1cXG4uay1idG5zLmstdmVydGljYWwgPiAuay1idG4uay13YXJuaW5nOm5vdCg6Zmlyc3Qtb2YtdHlwZSkge1xcbiAgYm9yZGVyLXRvcC1jb2xvcjogI2YwODIwMDtcXG59XFxuLmstYnRucy5rLXZlcnRpY2FsID4gLmstYnRuLmstd2FybmluZzpub3QoOmxhc3Qtb2YtdHlwZSkge1xcbiAgYm9yZGVyLWJvdHRvbS1jb2xvcjogI2YwODIwMDtcXG59XFxuLmstYnRucy5rLXZlcnRpY2FsID4gLmstYnRuLmstZGFuZ2VyOm5vdCg6Zmlyc3Qtb2YtdHlwZSkge1xcbiAgYm9yZGVyLXRvcC1jb2xvcjogI2QxMjMyMztcXG59XFxuLmstYnRucy5rLXZlcnRpY2FsID4gLmstYnRuLmstZGFuZ2VyOm5vdCg6bGFzdC1vZi10eXBlKSB7XFxuICBib3JkZXItYm90dG9tLWNvbG9yOiAjZDEyMzIzO1xcbn1cXG4uay1idG5zLmstdmVydGljYWwgPiAuay10b29sdGlwIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG4uay1idG5zLmstdmVydGljYWwgPiAuay10b29sdGlwIC5rLWJ0bjpub3QoLmstYnRuLWljb24pIHtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG4uay1idG5zLmstdmVydGljYWwgPiAuay10b29sdGlwOm5vdCg6Zmlyc3Qtb2YtdHlwZSkge1xcbiAgbWFyZ2luLXRvcDogLTFweDtcXG59XFxuLmstYnRucy5rLXZlcnRpY2FsID4gLmstdG9vbHRpcDpub3QoOmZpcnN0LW9mLXR5cGUpOm5vdCg6bGFzdC1vZi10eXBlKSAuay1idG4ge1xcbiAgYm9yZGVyLXJhZGl1czogMDtcXG59XFxuLmstYnRucy5rLXZlcnRpY2FsID4gLmstdG9vbHRpcDpub3QoOm9ubHktb2YtdHlwZSk6Zmlyc3Qtb2YtdHlwZSAuay1idG4ge1xcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMDtcXG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAwO1xcbn1cXG4uay1idG5zLmstdmVydGljYWwgPiAuay10b29sdGlwOm5vdCg6b25seS1vZi10eXBlKTpsYXN0LW9mLXR5cGUgLmstYnRuIHtcXG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDA7XFxuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMDtcXG59XFxuLmstYnRucy5rLXZlcnRpY2FsID4gLmstdG9vbHRpcDpub3QoOmZpcnN0LW9mLXR5cGUpIC5rLWJ0bi5rLXByaW1hcnkge1xcbiAgYm9yZGVyLXRvcC1jb2xvcjogIzA5NThlMDtcXG59XFxuLmstYnRucy5rLXZlcnRpY2FsID4gLmstdG9vbHRpcDpub3QoOmxhc3Qtb2YtdHlwZSkgLmstYnRuLmstcHJpbWFyeSB7XFxuICBib3JkZXItYm90dG9tLWNvbG9yOiAjMDk1OGUwO1xcbn1cXG4uay1idG5zLmstdmVydGljYWwgPiAuay10b29sdGlwOm5vdCg6Zmlyc3Qtb2YtdHlwZSkgLmstYnRuLmstd2FybmluZyB7XFxuICBib3JkZXItdG9wLWNvbG9yOiAjZjA4MjAwO1xcbn1cXG4uay1idG5zLmstdmVydGljYWwgPiAuay10b29sdGlwOm5vdCg6bGFzdC1vZi10eXBlKSAuay1idG4uay13YXJuaW5nIHtcXG4gIGJvcmRlci1ib3R0b20tY29sb3I6ICNmMDgyMDA7XFxufVxcbi5rLWJ0bnMuay12ZXJ0aWNhbCA+IC5rLXRvb2x0aXA6bm90KDpmaXJzdC1vZi10eXBlKSAuay1idG4uay1kYW5nZXIge1xcbiAgYm9yZGVyLXRvcC1jb2xvcjogI2QxMjMyMztcXG59XFxuLmstYnRucy5rLXZlcnRpY2FsID4gLmstdG9vbHRpcDpub3QoOmxhc3Qtb2YtdHlwZSkgLmstYnRuLmstZGFuZ2VyIHtcXG4gIGJvcmRlci1ib3R0b20tY29sb3I6ICNkMTIzMjM7XFxufVxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXI/e1widXJsXCI6dHJ1ZX0hLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvbGliP3tcInBsdWdpbnNcIjpbbnVsbF19IS4vbm9kZV9tb2R1bGVzL3N0eWx1cy1sb2FkZXI/e1wiaW5jbHVkZSBjc3NcIjp0cnVlLFwic291cmNlTWFwXCI6ZmFsc2V9IS4vY29tcG9uZW50cy9idXR0b24vaW5kZXguc3R5bFxuLy8gbW9kdWxlIGlkID0gLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz97XCJ1cmxcIjp0cnVlfSEuL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9saWIvaW5kZXguanM/e1wicGx1Z2luc1wiOltudWxsXX0hLi9ub2RlX21vZHVsZXMvc3R5bHVzLWxvYWRlci9pbmRleC5qcz97XCJpbmNsdWRlIGNzc1wiOnRydWUsXCJzb3VyY2VNYXBcIjpmYWxzZX0hLi9jb21wb25lbnRzL2J1dHRvbi9pbmRleC5zdHlsXG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoZmFsc2UpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLmstdGFibGUge1xcbiAgZm9udC1zaXplOiAwLjg1NzE0Mjg1NzE0Mjg1N3JlbTtcXG4gIHRhYmxlLWxheW91dDogZml4ZWQ7XFxuICB3aWR0aDogMTAwJTtcXG4gIGJhY2tncm91bmQ6ICNmZmY7XFxuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xcbiAgYm9yZGVyLXNwYWNpbmc6IDA7XFxuICBjb2xvcjogIzU5NTk1OTtcXG59XFxuLmstdGFibGUgdGhlYWQge1xcbiAgZm9udC1zaXplOiAxLjE2NjY2NjY2NjY2NjY2N2VtO1xcbiAgY29sb3I6ICMzZjNmM2Y7XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2YwZjBmMDtcXG59XFxuLmstdGFibGUgdGgge1xcbiAgcGFkZGluZzogMC43ODU3MTQyODU3MTQyODZyZW0gMC4zNTcxNDI4NTcxNDI4NTdyZW0gMC43ODU3MTQyODU3MTQyODZyZW0gMC44NTcxNDI4NTcxNDI4NTdyZW07XFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGJhY2tncm91bmQ6IC13ZWJraXQtZ3JhZGllbnQobGluZWFyLCBsZWZ0IHRvcCwgbGVmdCBib3R0b20sIGZyb20oI2ZmZiksIHRvKCNmYWZhZmEpKTtcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICNmZmYsICNmYWZhZmEpO1xcbn1cXG4uay10YWJsZSAuay10aCB7XFxuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcXG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xcbiAgZGlzcGxheTogZmxleDtcXG59XFxuLmstdGFibGUgLmstc29ydGFibGUge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4uay10YWJsZSAuay1zb3J0IHtcXG4gIG1hcmdpbi1sZWZ0OiAwLjYyNWVtO1xcbn1cXG4uay10YWJsZSAuay1zb3J0IC5rLWljb24ge1xcbiAgZm9udC1zaXplOiAwLjc1ZW07XFxufVxcbi5rLXRhYmxlIC5rLXJlc2l6ZSB7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB3aWR0aDogMC4zMTI1ZW07XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcbiAgY3Vyc29yOiBldy1yZXNpemU7XFxufVxcbi5rLXRhYmxlIHRib2R5IHRyIHtcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZjBmMGYwO1xcbn1cXG4uay10YWJsZSB0Ym9keSB0cjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kOiAjZjRmOGZiO1xcbn1cXG4uay10YWJsZSB0ZCB7XFxuICBwYWRkaW5nOiAwLjg1NzE0Mjg1NzE0Mjg1N3JlbSAwLjM1NzE0Mjg1NzE0Mjg1N3JlbSAwLjg1NzE0Mjg1NzE0Mjg1N3JlbSAwLjg1NzE0Mjg1NzE0Mjg1N3JlbTtcXG4gIHdvcmQtYnJlYWs6IGJyZWFrLXdvcmQ7XFxufVxcbi5rLXRhYmxlIC5rLXRoLWNoZWNrIHtcXG4gIHdpZHRoOiAyLjE0Mjg1NzE0Mjg1NzE0M3JlbTtcXG59XFxuLmstdGFibGUgLmstdGgtY2hlY2sgLmstY2hlY2tib3gge1xcbiAgdmVydGljYWwtYWxpZ246IDNweDtcXG59XFxuLmstdGFibGUgLmstbm8tZGF0YSB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcbi5rLXRhYmxlLXdyYXBwZXIge1xcbiAgb3ZlcmZsb3c6IGF1dG87XFxuICBib3JkZXItdG9wOiAxcHggc29saWQgI2YwZjBmMDtcXG59XFxuLmstdGFibGUtd3JhcHBlciAuay1maXhlZCB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB6LWluZGV4OiAxO1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNmMGYwZjA7XFxuICBiYWNrZ3JvdW5kOiAtd2Via2l0LWdyYWRpZW50KGxpbmVhciwgbGVmdCB0b3AsIGxlZnQgYm90dG9tLCBmcm9tKCNmZmYpLCB0bygjZmFmYWZhKSk7XFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAjZmZmLCAjZmFmYWZhKTtcXG59XFxuLmstdGFibGUtd3JhcHBlciAuay1maXhlZCB0aGVhZCB7XFxuICBib3JkZXI6IG5vbmU7XFxufVxcbi5rLXRhYmxlLXdyYXBwZXIgLmstc2Nyb2xsIHtcXG4gIG92ZXJmbG93LXk6IGF1dG87XFxuICBvdmVyZmxvdy14OiBoaWRkZW47XFxufVxcbi5rLXRhYmxlLXdyYXBwZXIgLmstc2Nyb2xsIHRhYmxlIHtcXG4gIG1hcmdpbi10b3A6IC00NHB4O1xcbn1cXG4uay10YWJsZS13cmFwcGVyLmstYm9yZGVyIC5rLWZpeGVkLFxcbi5rLXRhYmxlLXdyYXBwZXIuay1ib3JkZXIgdGhlYWQgdGgge1xcbiAgYmFja2dyb3VuZDogI2Y3ZjdmNztcXG59XFxuLmstdGFibGUtd3JhcHBlci5rLWJvcmRlciAuay1maXhlZCxcXG4uay10YWJsZS13cmFwcGVyLmstYm9yZGVyIC5rLXRhYmxlIHtcXG4gIGJvcmRlci1sZWZ0OiAxcHggc29saWQgI2YwZjBmMDtcXG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNmMGYwZjA7XFxufVxcbi5rLXRhYmxlLXdyYXBwZXIuay1ib3JkZXIgLmstZml4ZWQgLmstdGFibGUge1xcbiAgYm9yZGVyOiBub25lO1xcbn1cXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyP3tcInVybFwiOnRydWV9IS4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2xpYj97XCJwbHVnaW5zXCI6W251bGxdfSEuL25vZGVfbW9kdWxlcy9zdHlsdXMtbG9hZGVyP3tcImluY2x1ZGUgY3NzXCI6dHJ1ZSxcInNvdXJjZU1hcFwiOmZhbHNlfSEuL2NvbXBvbmVudHMvdGFibGUvaW5kZXguc3R5bFxuLy8gbW9kdWxlIGlkID0gLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz97XCJ1cmxcIjp0cnVlfSEuL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9saWIvaW5kZXguanM/e1wicGx1Z2luc1wiOltudWxsXX0hLi9ub2RlX21vZHVsZXMvc3R5bHVzLWxvYWRlci9pbmRleC5qcz97XCJpbmNsdWRlIGNzc1wiOnRydWUsXCJzb3VyY2VNYXBcIjpmYWxzZX0hLi9jb21wb25lbnRzL3RhYmxlL2luZGV4LnN0eWxcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKShmYWxzZSk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIuZG9jdW1lbnQtcGFnZSB7XFxuICBwYWRkaW5nLXRvcDogOTVweDtcXG4gIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuLmRvY3VtZW50LXBhZ2UgLmNvbnRlbnQtd3JhcHBlci5maXhlZCB7XFxuICBtYXJnaW4tYm90dG9tOiAwO1xcbn1cXG4uZG9jdW1lbnQtcGFnZSAuY29udGVudC13cmFwcGVyLmZpeGVkIGFzaWRlIHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHRvcDogODBweDtcXG4gIGJhY2tncm91bmQ6ICNmZmY7XFxuICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDgwcHgpO1xcbiAgb3ZlcmZsb3c6IGF1dG87XFxuICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcbi5kb2N1bWVudC1wYWdlIC5jb250ZW50LXdyYXBwZXIuZml4ZWQgYXJ0aWNsZSB7XFxuICBtYXJnaW4tbGVmdDogMzAwcHg7XFxufVxcbi5kb2N1bWVudC1wYWdlIC5jb250ZW50LXdyYXBwZXIge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcXG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGJhY2tncm91bmQ6ICNmZmY7XFxuICBtYXJnaW46IDAgYXV0bztcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIC13ZWJraXQtYm94LXNoYWRvdzogMCAxcHggMXB4IHJnYmEoMCwwLDAsMC4wOCk7XFxuICAgICAgICAgIGJveC1zaGFkb3c6IDAgMXB4IDFweCByZ2JhKDAsMCwwLDAuMDgpO1xcbiAgbWluLWhlaWdodDogY2FsYygxMDAlIC0gMTVweCk7XFxufVxcbi5kb2N1bWVudC1wYWdlIC5jb250ZW50LXdyYXBwZXIgYXNpZGUge1xcbiAgd2lkdGg6IDMwMHB4O1xcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2VlZTtcXG59XFxuLmRvY3VtZW50LXBhZ2UgLmNvbnRlbnQtd3JhcHBlciAuYXNpZGUtd3JhcHBlciB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcbi5kb2N1bWVudC1wYWdlIC5jb250ZW50LXdyYXBwZXIgLmFzaWRlLXdyYXBwZXIgaDUge1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbiAgbWFyZ2luOiAyNXB4IDAgMTVweCAyMHB4O1xcbiAgY29sb3I6ICM5OTk7XFxufVxcbi5kb2N1bWVudC1wYWdlIC5jb250ZW50LXdyYXBwZXIgLmFzaWRlLXdyYXBwZXIgdWwge1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxufVxcbi5kb2N1bWVudC1wYWdlIC5jb250ZW50LXdyYXBwZXIgLmFzaWRlLXdyYXBwZXIgYSB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIGhlaWdodDogMzBweDtcXG4gIGxpbmUtaGVpZ2h0OiAzMHB4O1xcbiAgcGFkZGluZy1sZWZ0OiAyNXB4O1xcbiAgY29sb3I6ICMzMzM7XFxufVxcbi5kb2N1bWVudC1wYWdlIC5jb250ZW50LXdyYXBwZXIgLmFzaWRlLXdyYXBwZXIgYTpob3ZlciB7XFxuICBiYWNrZ3JvdW5kOiAjZjNmM2YzO1xcbn1cXG4uZG9jdW1lbnQtcGFnZSAuY29udGVudC13cmFwcGVyIC5hc2lkZS13cmFwcGVyIC5hY3RpdmUgPiBhIHtcXG4gIGNvbG9yOiAjMGE1ZWVlO1xcbn1cXG4uZG9jdW1lbnQtcGFnZSAuY29udGVudC13cmFwcGVyIC5hc2lkZS13cmFwcGVyIC5zdWItY2F0YWxvZ3Mge1xcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XFxuICBmb250LXNpemU6IDEycHg7XFxufVxcbi5kb2N1bWVudC1wYWdlIC5jb250ZW50LXdyYXBwZXIgLmFzaWRlLXdyYXBwZXIgLmFzaWRlLWJvcmRlciB7XFxuICBib3JkZXItcmlnaHQ6IDJweCBzb2xpZCAjMGE1ZWVlO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgcmlnaHQ6IDA7XFxuICB0b3A6IDA7XFxufVxcbi5kb2N1bWVudC1wYWdlIC5jb250ZW50LXdyYXBwZXIgYXJ0aWNsZSB7XFxuICAtd2Via2l0LWJveC1mbGV4OiAxO1xcbiAgICAgIC1tcy1mbGV4OiAxO1xcbiAgICAgICAgICBmbGV4OiAxO1xcbiAgcGFkZGluZzogMTBweCAyMHB4O1xcbiAgb3ZlcmZsb3c6IGF1dG87XFxufVxcbi5kb2N1bWVudC1wYWdlIC5jb250ZW50LXdyYXBwZXIgLmFydGljbGUtaGVhZCAudGl0bGUge1xcbiAgcGFkZGluZzogMTBweCAwO1xcbiAgZm9udC1zaXplOiAyLjJlbTtcXG4gIGNvbG9yOiAjMDAwO1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbn1cXG4uZG9jdW1lbnQtcGFnZSAuY29udGVudC13cmFwcGVyIC5hcnRpY2xlLWhlYWQgLmVkaXQtbGluayB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBtYXJnaW4tbGVmdDogMjBweDtcXG4gIGNvbG9yOiAjOTk5O1xcbiAgZm9udC1zdHlsZTogaXRhbGljO1xcbn1cXG4uZG9jdW1lbnQtcGFnZSAuY29udGVudC13cmFwcGVyIGFydGljbGUgaDEge1xcbiAgcGFkZGluZzogMTBweCAwO1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlZWU7XFxuICBtYXJnaW46IDIwcHggMDtcXG59XFxuLmRvY3VtZW50LXBhZ2UgLmNvbnRlbnQtd3JhcHBlciBhcnRpY2xlIGgyLFxcbi5kb2N1bWVudC1wYWdlIC5jb250ZW50LXdyYXBwZXIgYXJ0aWNsZSBoMyB7XFxuICBwYWRkaW5nOiAxMHB4IDA7XFxuICBtYXJnaW46IDE1cHggMDtcXG59XFxuLmRvY3VtZW50LXBhZ2UgLmNvbnRlbnQtd3JhcHBlciBhcnRpY2xlIHAge1xcbiAgbGluZS1oZWlnaHQ6IDI1cHg7XFxufVxcbi5kb2N1bWVudC1wYWdlIC5jb250ZW50LXdyYXBwZXIgYXJ0aWNsZSAub3V0cHV0IHtcXG4gIHBhZGRpbmc6IDIwcHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjZWVlO1xcbiAgbWFyZ2luOiAyMHB4IDA7XFxufVxcbi5kb2N1bWVudC1wYWdlIC5hcGkgLmstdGFibGUtd3JhcHBlciB0aGVhZCB0aDpmaXJzdC1vZi10eXBlIHtcXG4gIHdpZHRoOiAxNTBweDtcXG59XFxuLmRvY3VtZW50LXBhZ2UgLmFwaSAuay10YWJsZS13cmFwcGVyIHRoZWFkIHRoOm50aC1jaGlsZCgyKSB7XFxuICB3aWR0aDogNTAlO1xcbn1cXG4uZG9jdW1lbnQtcGFnZSAuZXhhbXBsZSB7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjZWVlO1xcbiAgcGFkZGluZzogMCAyMHB4IDIwcHggMjBweDtcXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XFxufVxcbi5kb2N1bWVudC1wYWdlIC5leGFtcGxlLW9wZXJhIHtcXG4gIHBhZGRpbmc6IDMwcHggMDtcXG59XFxuLmRvY3VtZW50LXBhZ2UgLmV4YW1wbGUtZGVzYyB7XFxuICBwYWRkaW5nOiAxNXB4IDVweDtcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZWVlO1xcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNlZWU7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcbi5kb2N1bWVudC1wYWdlIC5leGFtcGxlLWRlc2MgLnRpdGxlIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogLTlweDtcXG4gIGxlZnQ6IDE1cHg7XFxuICBiYWNrZ3JvdW5kOiAjZmZmO1xcbiAgcGFkZGluZzogMCAxMHB4O1xcbn1cXG4uZG9jdW1lbnQtcGFnZSAuZXhhbXBsZS1jb2RlIGNvZGUge1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogMDtcXG59XFxuLmRvY3VtZW50LXBhZ2Ugb2wge1xcbiAgbGlzdC1zdHlsZTogZGVjaW1hbDtcXG4gIHBhZGRpbmctbGVmdDogNDBweDtcXG59XFxuLmRvY3VtZW50LXBhZ2Ugb2wgbGkge1xcbiAgbGlzdC1zdHlsZTogZGVjaW1hbDtcXG59XFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlcj97XCJ1cmxcIjp0cnVlfSEuL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9saWI/e1wicGx1Z2luc1wiOltudWxsXX0hLi9ub2RlX21vZHVsZXMvc3R5bHVzLWxvYWRlcj97XCJpbmNsdWRlIGNzc1wiOnRydWUsXCJzb3VyY2VNYXBcIjpmYWxzZX0hLi9zaXRlL3NyYy9wYWdlcy9kb2N1bWVudC9pbmRleC5zdHlsXG4vLyBtb2R1bGUgaWQgPSAuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3tcInVybFwiOnRydWV9IS4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2xpYi9pbmRleC5qcz97XCJwbHVnaW5zXCI6W251bGxdfSEuL25vZGVfbW9kdWxlcy9zdHlsdXMtbG9hZGVyL2luZGV4LmpzP3tcImluY2x1ZGUgY3NzXCI6dHJ1ZSxcInNvdXJjZU1hcFwiOmZhbHNlfSEuL3NpdGUvc3JjL3BhZ2VzL2RvY3VtZW50L2luZGV4LnN0eWxcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwidmFyIGVzY2FwZSA9IHJlcXVpcmUoXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvdXJsL2VzY2FwZS5qc1wiKTtcbmV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoZmFsc2UpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLmhsanMge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBvdmVyZmxvdy14OiBhdXRvO1xcbiAgY29sb3I6ICM1MjUyNTI7XFxuICBwYWRkaW5nOiAxNXB4O1xcbiAgLXdlYmtpdC10ZXh0LXNpemUtYWRqdXN0OiBub25lO1xcbiAgbWFyZ2luOiAwO1xcbn1cXG4uaGxqcy1kb2N0eXBlIHtcXG4gIGNvbG9yOiAjOTk5O1xcbn1cXG4uaGxqcy10YWcge1xcbiAgY29sb3I6ICMzZTc2ZjY7XFxufVxcbi5obGpzLWF0dHJpYnV0ZSB7XFxuICBjb2xvcjogI2U5NjkwMDtcXG59XFxuLmhsanMtdmFsdWUge1xcbiAgY29sb3I6ICM0MmI5ODM7XFxufVxcbi5obGpzLWtleXdvcmQge1xcbiAgY29sb3I6ICNlOTY5MDA7XFxufVxcbi5obGpzLXN0cmluZyB7XFxuICBjb2xvcjogIzQyYjk4MztcXG59XFxuLmhsanMtY29tbWVudCB7XFxuICBjb2xvcjogI2IzYjNiMztcXG59XFxuLmhsanMtb3BlcmF0b3IgLmhsanMtY29tbWVudCB7XFxuICBjb2xvcjogIzUyNTI1MjtcXG59XFxuLmhsanMtcmVnZXhwIHtcXG4gIGNvbG9yOiAjYWY3ZGZmO1xcbn1cXG4uaGxqcy1idWlsdF9pbiB7XFxuICBjb2xvcjogIzJkYjdmNTtcXG59XFxuLmNzcyAuaGxqcy1jbGFzcyB7XFxuICBjb2xvcjogI2U5NjkwMDtcXG59XFxuLmNzcyAuaGxqcy1udW1iZXIsXFxuLmphdmFzY3JpcHQgLmhsanMtbnVtYmVyIHtcXG4gIGNvbG9yOiAjZmMxZTcwO1xcbn1cXG4uY3NzIC5obGpzLWF0dHJpYnV0ZSB7XFxuICBjb2xvcjogI2FmN2RmZjtcXG59XFxuLmNzcyAuaGxqcy1pbXBvcnRhbnQge1xcbiAgY29sb3I6ICNkMDQ7XFxufVxcbi5hY3Rpb25zY3JpcHQgLmhsanMtbGl0ZXJhbCxcXG4uamF2YXNjcmlwdCAuaGxqcy1saXRlcmFsIHtcXG4gIGNvbG9yOiAjZmMxZTcwO1xcbn1cXG5wcmUge1xcbiAgcGFkZGluZzogMDtcXG4gIG1hcmdpbjogMDtcXG59XFxuY29kZSB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBiYWNrZ3JvdW5kOiAjZjdmN2Y3O1xcbiAgZm9udC1mYW1pbHk6IENvbnNvbGFzLCBNb25hY28sIEFuZGFsZSBNb25vLCBVYnVudHUgTW9ubywgbW9ub3NwYWNlO1xcbiAgbWFyZ2luOiAzcHg7XFxuICBwYWRkaW5nOiAxcHggNXB4O1xcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xcbiAgY29sb3I6ICM2NjY7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjZWVlO1xcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XFxufVxcbi8qISBub3JtYWxpemUuY3NzIHY3LjAuMCB8IE1JVCBMaWNlbnNlIHwgZ2l0aHViLmNvbS9uZWNvbGFzL25vcm1hbGl6ZS5jc3MgKi9cXG5cXG4vKiBEb2N1bWVudFxcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLyoqXFxuICogMS4gQ29ycmVjdCB0aGUgbGluZSBoZWlnaHQgaW4gYWxsIGJyb3dzZXJzLlxcbiAqIDIuIFByZXZlbnQgYWRqdXN0bWVudHMgb2YgZm9udCBzaXplIGFmdGVyIG9yaWVudGF0aW9uIGNoYW5nZXMgaW5cXG4gKiAgICBJRSBvbiBXaW5kb3dzIFBob25lIGFuZCBpbiBpT1MuXFxuICovXFxuXFxuaHRtbCB7XFxuICBsaW5lLWhlaWdodDogMS4xNTsgLyogMSAqL1xcbiAgLW1zLXRleHQtc2l6ZS1hZGp1c3Q6IDEwMCU7IC8qIDIgKi9cXG4gIC13ZWJraXQtdGV4dC1zaXplLWFkanVzdDogMTAwJTsgLyogMiAqL1xcbn1cXG5cXG4vKiBTZWN0aW9uc1xcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLyoqXFxuICogUmVtb3ZlIHRoZSBtYXJnaW4gaW4gYWxsIGJyb3dzZXJzIChvcGluaW9uYXRlZCkuXFxuICovXFxuXFxuYm9keSB7XFxuICBtYXJnaW46IDA7XFxufVxcblxcbi8qKlxcbiAqIEFkZCB0aGUgY29ycmVjdCBkaXNwbGF5IGluIElFIDktLlxcbiAqL1xcblxcbmFydGljbGUsXFxuYXNpZGUsXFxuZm9vdGVyLFxcbmhlYWRlcixcXG5uYXYsXFxuc2VjdGlvbiB7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuLyoqXFxuICogQ29ycmVjdCB0aGUgZm9udCBzaXplIGFuZCBtYXJnaW4gb24gYGgxYCBlbGVtZW50cyB3aXRoaW4gYHNlY3Rpb25gIGFuZFxcbiAqIGBhcnRpY2xlYCBjb250ZXh0cyBpbiBDaHJvbWUsIEZpcmVmb3gsIGFuZCBTYWZhcmkuXFxuICovXFxuXFxuaDEge1xcbiAgZm9udC1zaXplOiAyZW07XFxuICBtYXJnaW46IDAuNjdlbSAwO1xcbn1cXG5cXG4vKiBHcm91cGluZyBjb250ZW50XFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKipcXG4gKiBBZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBJRSA5LS5cXG4gKiAxLiBBZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBJRS5cXG4gKi9cXG5cXG5maWdjYXB0aW9uLFxcbmZpZ3VyZSxcXG5tYWluIHsgLyogMSAqL1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbi8qKlxcbiAqIEFkZCB0aGUgY29ycmVjdCBtYXJnaW4gaW4gSUUgOC5cXG4gKi9cXG5cXG5maWd1cmUge1xcbiAgbWFyZ2luOiAxZW0gNDBweDtcXG59XFxuXFxuLyoqXFxuICogMS4gQWRkIHRoZSBjb3JyZWN0IGJveCBzaXppbmcgaW4gRmlyZWZveC5cXG4gKiAyLiBTaG93IHRoZSBvdmVyZmxvdyBpbiBFZGdlIGFuZCBJRS5cXG4gKi9cXG5cXG5ociB7XFxuICAtd2Via2l0LWJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xcbiAgICAgICAgICBib3gtc2l6aW5nOiBjb250ZW50LWJveDsgLyogMSAqL1xcbiAgaGVpZ2h0OiAwOyAvKiAxICovXFxuICBvdmVyZmxvdzogdmlzaWJsZTsgLyogMiAqL1xcbn1cXG5cXG4vKipcXG4gKiAxLiBDb3JyZWN0IHRoZSBpbmhlcml0YW5jZSBhbmQgc2NhbGluZyBvZiBmb250IHNpemUgaW4gYWxsIGJyb3dzZXJzLlxcbiAqIDIuIENvcnJlY3QgdGhlIG9kZCBgZW1gIGZvbnQgc2l6aW5nIGluIGFsbCBicm93c2Vycy5cXG4gKi9cXG5cXG5wcmUge1xcbiAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZSwgbW9ub3NwYWNlOyAvKiAxICovXFxuICBmb250LXNpemU6IDFlbTsgLyogMiAqL1xcbn1cXG5cXG4vKiBUZXh0LWxldmVsIHNlbWFudGljc1xcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLyoqXFxuICogMS4gUmVtb3ZlIHRoZSBncmF5IGJhY2tncm91bmQgb24gYWN0aXZlIGxpbmtzIGluIElFIDEwLlxcbiAqIDIuIFJlbW92ZSBnYXBzIGluIGxpbmtzIHVuZGVybGluZSBpbiBpT1MgOCsgYW5kIFNhZmFyaSA4Ky5cXG4gKi9cXG5cXG5hIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50OyAvKiAxICovXFxuICAtd2Via2l0LXRleHQtZGVjb3JhdGlvbi1za2lwOiBvYmplY3RzOyAvKiAyICovXFxufVxcblxcbi8qKlxcbiAqIDEuIFJlbW92ZSB0aGUgYm90dG9tIGJvcmRlciBpbiBDaHJvbWUgNTctIGFuZCBGaXJlZm94IDM5LS5cXG4gKiAyLiBBZGQgdGhlIGNvcnJlY3QgdGV4dCBkZWNvcmF0aW9uIGluIENocm9tZSwgRWRnZSwgSUUsIE9wZXJhLCBhbmQgU2FmYXJpLlxcbiAqL1xcblxcbmFiYnJbdGl0bGVdIHtcXG4gIGJvcmRlci1ib3R0b206IG5vbmU7IC8qIDEgKi9cXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lOyAvKiAyICovXFxuICAtd2Via2l0LXRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lIGRvdHRlZDtcXG4gICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmUgZG90dGVkOyAvKiAyICovXFxufVxcblxcbi8qKlxcbiAqIFByZXZlbnQgdGhlIGR1cGxpY2F0ZSBhcHBsaWNhdGlvbiBvZiBgYm9sZGVyYCBieSB0aGUgbmV4dCBydWxlIGluIFNhZmFyaSA2LlxcbiAqL1xcblxcbmIsXFxuc3Ryb25nIHtcXG4gIGZvbnQtd2VpZ2h0OiBpbmhlcml0O1xcbn1cXG5cXG4vKipcXG4gKiBBZGQgdGhlIGNvcnJlY3QgZm9udCB3ZWlnaHQgaW4gQ2hyb21lLCBFZGdlLCBhbmQgU2FmYXJpLlxcbiAqL1xcblxcbmIsXFxuc3Ryb25nIHtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxufVxcblxcbi8qKlxcbiAqIDEuIENvcnJlY3QgdGhlIGluaGVyaXRhbmNlIGFuZCBzY2FsaW5nIG9mIGZvbnQgc2l6ZSBpbiBhbGwgYnJvd3NlcnMuXFxuICogMi4gQ29ycmVjdCB0aGUgb2RkIGBlbWAgZm9udCBzaXppbmcgaW4gYWxsIGJyb3dzZXJzLlxcbiAqL1xcblxcbmNvZGUsXFxua2JkLFxcbnNhbXAge1xcbiAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZSwgbW9ub3NwYWNlOyAvKiAxICovXFxuICBmb250LXNpemU6IDFlbTsgLyogMiAqL1xcbn1cXG5cXG4vKipcXG4gKiBBZGQgdGhlIGNvcnJlY3QgZm9udCBzdHlsZSBpbiBBbmRyb2lkIDQuMy0uXFxuICovXFxuXFxuZGZuIHtcXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcXG59XFxuXFxuLyoqXFxuICogQWRkIHRoZSBjb3JyZWN0IGJhY2tncm91bmQgYW5kIGNvbG9yIGluIElFIDktLlxcbiAqL1xcblxcbm1hcmsge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmMDtcXG4gIGNvbG9yOiAjMDAwO1xcbn1cXG5cXG4vKipcXG4gKiBBZGQgdGhlIGNvcnJlY3QgZm9udCBzaXplIGluIGFsbCBicm93c2Vycy5cXG4gKi9cXG5cXG5zbWFsbCB7XFxuICBmb250LXNpemU6IDgwJTtcXG59XFxuXFxuLyoqXFxuICogUHJldmVudCBgc3ViYCBhbmQgYHN1cGAgZWxlbWVudHMgZnJvbSBhZmZlY3RpbmcgdGhlIGxpbmUgaGVpZ2h0IGluXFxuICogYWxsIGJyb3dzZXJzLlxcbiAqL1xcblxcbnN1YixcXG5zdXAge1xcbiAgZm9udC1zaXplOiA3NSU7XFxuICBsaW5lLWhlaWdodDogMDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXG59XFxuXFxuc3ViIHtcXG4gIGJvdHRvbTogLTAuMjVlbTtcXG59XFxuXFxuc3VwIHtcXG4gIHRvcDogLTAuNWVtO1xcbn1cXG5cXG4vKiBFbWJlZGRlZCBjb250ZW50XFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKipcXG4gKiBBZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBJRSA5LS5cXG4gKi9cXG5cXG5hdWRpbyxcXG52aWRlbyB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxufVxcblxcbi8qKlxcbiAqIEFkZCB0aGUgY29ycmVjdCBkaXNwbGF5IGluIGlPUyA0LTcuXFxuICovXFxuXFxuYXVkaW86bm90KFtjb250cm9sc10pIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICBoZWlnaHQ6IDA7XFxufVxcblxcbi8qKlxcbiAqIFJlbW92ZSB0aGUgYm9yZGVyIG9uIGltYWdlcyBpbnNpZGUgbGlua3MgaW4gSUUgMTAtLlxcbiAqL1xcblxcbmltZyB7XFxuICBib3JkZXItc3R5bGU6IG5vbmU7XFxufVxcblxcbi8qKlxcbiAqIEhpZGUgdGhlIG92ZXJmbG93IGluIElFLlxcbiAqL1xcblxcbnN2Zzpub3QoOnJvb3QpIHtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxufVxcblxcbi8qIEZvcm1zXFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKipcXG4gKiAxLiBDaGFuZ2UgdGhlIGZvbnQgc3R5bGVzIGluIGFsbCBicm93c2VycyAob3BpbmlvbmF0ZWQpLlxcbiAqIDIuIFJlbW92ZSB0aGUgbWFyZ2luIGluIEZpcmVmb3ggYW5kIFNhZmFyaS5cXG4gKi9cXG5cXG5idXR0b24sXFxuaW5wdXQsXFxub3B0Z3JvdXAsXFxuc2VsZWN0LFxcbnRleHRhcmVhIHtcXG4gIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmOyAvKiAxICovXFxuICBmb250LXNpemU6IDEwMCU7IC8qIDEgKi9cXG4gIGxpbmUtaGVpZ2h0OiAxLjE1OyAvKiAxICovXFxuICBtYXJnaW46IDA7IC8qIDIgKi9cXG59XFxuXFxuLyoqXFxuICogU2hvdyB0aGUgb3ZlcmZsb3cgaW4gSUUuXFxuICogMS4gU2hvdyB0aGUgb3ZlcmZsb3cgaW4gRWRnZS5cXG4gKi9cXG5cXG5idXR0b24sXFxuaW5wdXQgeyAvKiAxICovXFxuICBvdmVyZmxvdzogdmlzaWJsZTtcXG59XFxuXFxuLyoqXFxuICogUmVtb3ZlIHRoZSBpbmhlcml0YW5jZSBvZiB0ZXh0IHRyYW5zZm9ybSBpbiBFZGdlLCBGaXJlZm94LCBhbmQgSUUuXFxuICogMS4gUmVtb3ZlIHRoZSBpbmhlcml0YW5jZSBvZiB0ZXh0IHRyYW5zZm9ybSBpbiBGaXJlZm94LlxcbiAqL1xcblxcbmJ1dHRvbixcXG5zZWxlY3QgeyAvKiAxICovXFxuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcXG59XFxuXFxuLyoqXFxuICogMS4gUHJldmVudCBhIFdlYktpdCBidWcgd2hlcmUgKDIpIGRlc3Ryb3lzIG5hdGl2ZSBgYXVkaW9gIGFuZCBgdmlkZW9gXFxuICogICAgY29udHJvbHMgaW4gQW5kcm9pZCA0LlxcbiAqIDIuIENvcnJlY3QgdGhlIGluYWJpbGl0eSB0byBzdHlsZSBjbGlja2FibGUgdHlwZXMgaW4gaU9TIGFuZCBTYWZhcmkuXFxuICovXFxuXFxuYnV0dG9uLFxcbmh0bWwgW3R5cGU9XFxcImJ1dHRvblxcXCJdLCAvKiAxICovXFxuW3R5cGU9XFxcInJlc2V0XFxcIl0sXFxuW3R5cGU9XFxcInN1Ym1pdFxcXCJdIHtcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogYnV0dG9uOyAvKiAyICovXFxufVxcblxcbi8qKlxcbiAqIFJlbW92ZSB0aGUgaW5uZXIgYm9yZGVyIGFuZCBwYWRkaW5nIGluIEZpcmVmb3guXFxuICovXFxuXFxuYnV0dG9uOjotbW96LWZvY3VzLWlubmVyLFxcblt0eXBlPVxcXCJidXR0b25cXFwiXTo6LW1vei1mb2N1cy1pbm5lcixcXG5bdHlwZT1cXFwicmVzZXRcXFwiXTo6LW1vei1mb2N1cy1pbm5lcixcXG5bdHlwZT1cXFwic3VibWl0XFxcIl06Oi1tb3otZm9jdXMtaW5uZXIge1xcbiAgYm9yZGVyLXN0eWxlOiBub25lO1xcbiAgcGFkZGluZzogMDtcXG59XFxuXFxuLyoqXFxuICogUmVzdG9yZSB0aGUgZm9jdXMgc3R5bGVzIHVuc2V0IGJ5IHRoZSBwcmV2aW91cyBydWxlLlxcbiAqL1xcblxcbmJ1dHRvbjotbW96LWZvY3VzcmluZyxcXG5bdHlwZT1cXFwiYnV0dG9uXFxcIl06LW1vei1mb2N1c3JpbmcsXFxuW3R5cGU9XFxcInJlc2V0XFxcIl06LW1vei1mb2N1c3JpbmcsXFxuW3R5cGU9XFxcInN1Ym1pdFxcXCJdOi1tb3otZm9jdXNyaW5nIHtcXG4gIG91dGxpbmU6IDFweCBkb3R0ZWQgQnV0dG9uVGV4dDtcXG59XFxuXFxuLyoqXFxuICogQ29ycmVjdCB0aGUgcGFkZGluZyBpbiBGaXJlZm94LlxcbiAqL1xcblxcbmZpZWxkc2V0IHtcXG4gIHBhZGRpbmc6IDAuMzVlbSAwLjc1ZW0gMC42MjVlbTtcXG59XFxuXFxuLyoqXFxuICogMS4gQ29ycmVjdCB0aGUgdGV4dCB3cmFwcGluZyBpbiBFZGdlIGFuZCBJRS5cXG4gKiAyLiBDb3JyZWN0IHRoZSBjb2xvciBpbmhlcml0YW5jZSBmcm9tIGBmaWVsZHNldGAgZWxlbWVudHMgaW4gSUUuXFxuICogMy4gUmVtb3ZlIHRoZSBwYWRkaW5nIHNvIGRldmVsb3BlcnMgYXJlIG5vdCBjYXVnaHQgb3V0IHdoZW4gdGhleSB6ZXJvIG91dFxcbiAqICAgIGBmaWVsZHNldGAgZWxlbWVudHMgaW4gYWxsIGJyb3dzZXJzLlxcbiAqL1xcblxcbmxlZ2VuZCB7XFxuICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7IC8qIDEgKi9cXG4gIGNvbG9yOiBpbmhlcml0OyAvKiAyICovXFxuICBkaXNwbGF5OiB0YWJsZTsgLyogMSAqL1xcbiAgbWF4LXdpZHRoOiAxMDAlOyAvKiAxICovXFxuICBwYWRkaW5nOiAwOyAvKiAzICovXFxuICB3aGl0ZS1zcGFjZTogbm9ybWFsOyAvKiAxICovXFxufVxcblxcbi8qKlxcbiAqIDEuIEFkZCB0aGUgY29ycmVjdCBkaXNwbGF5IGluIElFIDktLlxcbiAqIDIuIEFkZCB0aGUgY29ycmVjdCB2ZXJ0aWNhbCBhbGlnbm1lbnQgaW4gQ2hyb21lLCBGaXJlZm94LCBhbmQgT3BlcmEuXFxuICovXFxuXFxucHJvZ3Jlc3Mge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrOyAvKiAxICovXFxuICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7IC8qIDIgKi9cXG59XFxuXFxuLyoqXFxuICogUmVtb3ZlIHRoZSBkZWZhdWx0IHZlcnRpY2FsIHNjcm9sbGJhciBpbiBJRS5cXG4gKi9cXG5cXG50ZXh0YXJlYSB7XFxuICBvdmVyZmxvdzogYXV0bztcXG59XFxuXFxuLyoqXFxuICogMS4gQWRkIHRoZSBjb3JyZWN0IGJveCBzaXppbmcgaW4gSUUgMTAtLlxcbiAqIDIuIFJlbW92ZSB0aGUgcGFkZGluZyBpbiBJRSAxMC0uXFxuICovXFxuXFxuW3R5cGU9XFxcImNoZWNrYm94XFxcIl0sXFxuW3R5cGU9XFxcInJhZGlvXFxcIl0ge1xcbiAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94OyAvKiAxICovXFxuICBwYWRkaW5nOiAwOyAvKiAyICovXFxufVxcblxcbi8qKlxcbiAqIENvcnJlY3QgdGhlIGN1cnNvciBzdHlsZSBvZiBpbmNyZW1lbnQgYW5kIGRlY3JlbWVudCBidXR0b25zIGluIENocm9tZS5cXG4gKi9cXG5cXG5bdHlwZT1cXFwibnVtYmVyXFxcIl06Oi13ZWJraXQtaW5uZXItc3Bpbi1idXR0b24sXFxuW3R5cGU9XFxcIm51bWJlclxcXCJdOjotd2Via2l0LW91dGVyLXNwaW4tYnV0dG9uIHtcXG4gIGhlaWdodDogYXV0bztcXG59XFxuXFxuLyoqXFxuICogMS4gQ29ycmVjdCB0aGUgb2RkIGFwcGVhcmFuY2UgaW4gQ2hyb21lIGFuZCBTYWZhcmkuXFxuICogMi4gQ29ycmVjdCB0aGUgb3V0bGluZSBzdHlsZSBpbiBTYWZhcmkuXFxuICovXFxuXFxuW3R5cGU9XFxcInNlYXJjaFxcXCJdIHtcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogdGV4dGZpZWxkOyAvKiAxICovXFxuICBvdXRsaW5lLW9mZnNldDogLTJweDsgLyogMiAqL1xcbn1cXG5cXG4vKipcXG4gKiBSZW1vdmUgdGhlIGlubmVyIHBhZGRpbmcgYW5kIGNhbmNlbCBidXR0b25zIGluIENocm9tZSBhbmQgU2FmYXJpIG9uIG1hY09TLlxcbiAqL1xcblxcblt0eXBlPVxcXCJzZWFyY2hcXFwiXTo6LXdlYmtpdC1zZWFyY2gtY2FuY2VsLWJ1dHRvbixcXG5bdHlwZT1cXFwic2VhcmNoXFxcIl06Oi13ZWJraXQtc2VhcmNoLWRlY29yYXRpb24ge1xcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xcbn1cXG5cXG4vKipcXG4gKiAxLiBDb3JyZWN0IHRoZSBpbmFiaWxpdHkgdG8gc3R5bGUgY2xpY2thYmxlIHR5cGVzIGluIGlPUyBhbmQgU2FmYXJpLlxcbiAqIDIuIENoYW5nZSBmb250IHByb3BlcnRpZXMgdG8gYGluaGVyaXRgIGluIFNhZmFyaS5cXG4gKi9cXG5cXG46Oi13ZWJraXQtZmlsZS11cGxvYWQtYnV0dG9uIHtcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogYnV0dG9uOyAvKiAxICovXFxuICBmb250OiBpbmhlcml0OyAvKiAyICovXFxufVxcblxcbi8qIEludGVyYWN0aXZlXFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKlxcbiAqIEFkZCB0aGUgY29ycmVjdCBkaXNwbGF5IGluIElFIDktLlxcbiAqIDEuIEFkZCB0aGUgY29ycmVjdCBkaXNwbGF5IGluIEVkZ2UsIElFLCBhbmQgRmlyZWZveC5cXG4gKi9cXG5cXG5kZXRhaWxzLCAvKiAxICovXFxubWVudSB7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuLypcXG4gKiBBZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBhbGwgYnJvd3NlcnMuXFxuICovXFxuXFxuc3VtbWFyeSB7XFxuICBkaXNwbGF5OiBsaXN0LWl0ZW07XFxufVxcblxcbi8qIFNjcmlwdGluZ1xcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLyoqXFxuICogQWRkIHRoZSBjb3JyZWN0IGRpc3BsYXkgaW4gSUUgOS0uXFxuICovXFxuXFxuY2FudmFzIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG59XFxuXFxuLyoqXFxuICogQWRkIHRoZSBjb3JyZWN0IGRpc3BsYXkgaW4gSUUuXFxuICovXFxuXFxudGVtcGxhdGUge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLyogSGlkZGVuXFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKipcXG4gKiBBZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBJRSAxMC0uXFxuICovXFxuXFxuW2hpZGRlbl0ge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuKixcXG4qOmJlZm9yZSxcXG4qOmFmdGVyIHtcXG4gIC13ZWJraXQtYm94LXNpemluZzogaW5oZXJpdDtcXG4gICAgICAgICAgYm94LXNpemluZzogaW5oZXJpdDtcXG59XFxuaHRtbCB7XFxuICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcbmlucHV0IHtcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXG4gIC1tb3otYXBwZWFyYW5jZTogbm9uZTtcXG4gIGNvbG9yOiAjNTk1OTU5O1xcbn1cXG51bCxcXG5vbCxcXG5saSB7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG59XFxuaW5wdXQ6Zm9jdXMsXFxuc2VsZWN0OmZvY3VzIHtcXG4gIG91dGxpbmU6IG5vbmU7XFxufVxcbmh0bWwsXFxuYm9keSxcXG4jYXBwIHtcXG4gIGhlaWdodDogMTAwJTtcXG59XFxuaHRtbCB7XFxuICBmb250LXNpemU6IDAuODc1ZW07XFxufVxcbmJvZHkge1xcbiAgZm9udC1mYW1pbHk6ICdNaWNyb3NvZnQgWWFIZWknO1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGNvbG9yOiAjNTk1OTU5O1xcbn1cXG5oMSxcXG5oMixcXG5oMyxcXG5oNCxcXG5oNSB7XFxuICBmb250LWZhbWlseTogJ01pY3Jvc29mdCBZYUhlaSc7XFxuICBtYXJnaW46IDA7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIHBhZGRpbmc6IDA7XFxufVxcbmgxIHtcXG4gIG1pbi1oZWlnaHQ6IDFyZW07XFxufVxcbmgxIHtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG59XFxuaDE6Zmlyc3QtY2hpbGQge1xcbiAgbWFyZ2luLXRvcDogMDtcXG59XFxuaDE6bGFzdC1jaGlsZCB7XFxuICBtYXJnaW4tYm90dG9tOiAwO1xcbn1cXG5oMiB7XFxuICBmb250LXNpemU6IDEuNzE0Mjg1NzE0Mjg1NzE0cmVtO1xcbn1cXG5oMjpmaXJzdC1jaGlsZCB7XFxuICBtYXJnaW4tdG9wOiAwO1xcbn1cXG5oMjpsYXN0LWNoaWxkIHtcXG4gIG1hcmdpbi1ib3R0b206IDA7XFxufVxcbmgzIHtcXG4gIGZvbnQtc2l6ZTogMS4yODU3MTQyODU3MTQyODZyZW07XFxufVxcbmgzOmZpcnN0LWNoaWxkIHtcXG4gIG1hcmdpbi10b3A6IDA7XFxufVxcbmgzOmxhc3QtY2hpbGQge1xcbiAgbWFyZ2luLWJvdHRvbTogMDtcXG59XFxuaDQge1xcbiAgZm9udC1zaXplOiAxLjA3MTQyODU3MTQyODU3MXJlbTtcXG59XFxuaDQ6Zmlyc3QtY2hpbGQge1xcbiAgbWFyZ2luLXRvcDogMDtcXG59XFxuaDQ6bGFzdC1jaGlsZCB7XFxuICBtYXJnaW4tYm90dG9tOiAwO1xcbn1cXG5oNSB7XFxuICBmb250LXNpemU6IDFyZW07XFxufVxcbmg1OmZpcnN0LWNoaWxkIHtcXG4gIG1hcmdpbi10b3A6IDA7XFxufVxcbmg1Omxhc3QtY2hpbGQge1xcbiAgbWFyZ2luLWJvdHRvbTogMDtcXG59XFxuYSB7XFxuICBjb2xvcjogIzQxODNjNDtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIG91dGxpbmU6IG5vbmU7XFxufVxcbmE6aG92ZXIge1xcbiAgY29sb3I6ICMxOTVkOWY7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxufVxcbmNvZGUsXFxua2JkLFxcbnByZSxcXG5zYW1wIHtcXG4gIGZvbnQtZmFtaWx5OiBDb25zb2xhcywgTWVubG8sIENvdXJpZXIsIG1vbm9zcGFjZTtcXG59XFxubGFiZWwge1xcbiAgLXdlYmtpdC10YXAtaGlnaGxpZ2h0LWNvbG9yOiByZ2JhKDAsMCwwLDApO1xcbn1cXG4uZmFkZS1lbnRlcixcXG4uZmFkZS1sZWF2ZSB7XFxuICBvcGFjaXR5OiAwO1xcbn1cXG4uZmFkZS1lbnRlci1hY3RpdmUsXFxuLmZhZGUtbGVhdmUtYWN0aXZlIHtcXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogb3BhY2l0eSAwLjI1cyBlYXNlLWluLW91dDtcXG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMC4yNXMgZWFzZS1pbi1vdXQ7XFxufVxcbi5mYWRlLW1vdmUge1xcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAtd2Via2l0LXRyYW5zZm9ybSAwLjI1cyBlYXNlLWluLW91dDtcXG4gIHRyYW5zaXRpb246IC13ZWJraXQtdHJhbnNmb3JtIDAuMjVzIGVhc2UtaW4tb3V0O1xcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMjVzIGVhc2UtaW4tb3V0O1xcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMjVzIGVhc2UtaW4tb3V0LCAtd2Via2l0LXRyYW5zZm9ybSAwLjI1cyBlYXNlLWluLW91dDtcXG59XFxuLmRyb3Bkb3duLWVudGVyLFxcbi5kcm9wZG93bi1sZWF2ZSB7XFxuICBvcGFjaXR5OiAwO1xcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlWSgwLjgpO1xcbiAgICAgIC1tcy10cmFuc2Zvcm06IHNjYWxlWSgwLjgpO1xcbiAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlWSgwLjgpO1xcbn1cXG4uZHJvcGRvd24tZW50ZXItYWN0aXZlLFxcbi5kcm9wZG93bi1sZWF2ZS1hY3RpdmUge1xcbiAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiBjZW50ZXIgdG9wIDBweDtcXG4gICAgICAtbXMtdHJhbnNmb3JtLW9yaWdpbjogY2VudGVyIHRvcCAwcHg7XFxuICAgICAgICAgIHRyYW5zZm9ybS1vcmlnaW46IGNlbnRlciB0b3AgMHB4O1xcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBvcGFjaXR5IDAuMjVzIGVhc2UtaW4tb3V0LCAtd2Via2l0LXRyYW5zZm9ybSAwLjI1cyBlYXNlLWluLW91dDtcXG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMC4yNXMgZWFzZS1pbi1vdXQsIC13ZWJraXQtdHJhbnNmb3JtIDAuMjVzIGVhc2UtaW4tb3V0O1xcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjI1cyBlYXNlLWluLW91dCwgdHJhbnNmb3JtIDAuMjVzIGVhc2UtaW4tb3V0O1xcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjI1cyBlYXNlLWluLW91dCwgdHJhbnNmb3JtIDAuMjVzIGVhc2UtaW4tb3V0LCAtd2Via2l0LXRyYW5zZm9ybSAwLjI1cyBlYXNlLWluLW91dDtcXG59XFxuQC13ZWJraXQta2V5ZnJhbWVzIHJvdGF0ZSB7XFxuICAwJSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogNTAlIDUwJTtcXG4gICAgICAgICAgICB0cmFuc2Zvcm0tb3JpZ2luOiA1MCUgNTAlO1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDApO1xcbiAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDApO1xcbiAgfVxcbiAgMTAwJSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogNTAlIDUwJTtcXG4gICAgICAgICAgICB0cmFuc2Zvcm0tb3JpZ2luOiA1MCUgNTAlO1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XFxuICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcXG4gIH1cXG59XFxuQGtleWZyYW1lcyByb3RhdGUge1xcbiAgMCUge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IDUwJSA1MCU7XFxuICAgICAgICAgICAgdHJhbnNmb3JtLW9yaWdpbjogNTAlIDUwJTtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgwKTtcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwKTtcXG4gIH1cXG4gIDEwMCUge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IDUwJSA1MCU7XFxuICAgICAgICAgICAgdHJhbnNmb3JtLW9yaWdpbjogNTAlIDUwJTtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xcbiAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XFxuICB9XFxufVxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJrLWljb25cXFwiO1xcbiAgc3JjOiB1cmwoXCIgKyBlc2NhcGUocmVxdWlyZShcIi4uLy4uLy4uL3N0eWxlcy9mb250cy9pY29uZm9udC5lb3Q/dD0xNTA2NTg1Njg2OTY3XCIpKSArIFwiKTsgLyogSUU5Ki9cXG4gIHNyYzogdXJsKFwiICsgZXNjYXBlKHJlcXVpcmUoXCIuLi8uLi8uLi9zdHlsZXMvZm9udHMvaWNvbmZvbnQuZW90P3Q9MTUwNjU4NTY4Njk2N1wiKSkgKyBcIiNpZWZpeCkgZm9ybWF0KCdlbWJlZGRlZC1vcGVudHlwZScpLCB1cmwoXFxcImRhdGE6YXBwbGljYXRpb24veC1mb250LXdvZmY7Y2hhcnNldD11dGYtODtiYXNlNjQsZDA5R1JnQUJBQUFBQUJXc0FBc0FBQUFBSGlRQUFRQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUJIVTFWQ0FBQUJDQUFBQURNQUFBQkNzUDZ6N1U5VEx6SUFBQUU4QUFBQVJBQUFBRlpXL1VoZFkyMWhjQUFBQVlBQUFBQ3pBQUFDZk05WExXeG5iSGxtQUFBQ05BQUFFTXdBQUJZc25RL20zMmhsWVdRQUFCTUFBQUFBTVFBQUFEWVEwdDdYYUdobFlRQUFFelFBQUFBZ0FBQUFKQW10QlhCb2JYUjRBQUFUVkFBQUFDTUFBQUJRVWhiLy9XeHZZMkVBQUJONEFBQUFLZ0FBQUNwRTJFQ0diV0Y0Y0FBQUU2UUFBQUFmQUFBQUlBRStBaU51WVcxbEFBQVR4QUFBQVVzQUFBSlZtRkhuYzNCdmMzUUFBQlVRQUFBQW1RQUFBTkZ1cDNTSWVKeGpZR1JnWU9CaWtHUFFZV0IwY2ZNSlllQmdZR0dBQUpBTVkwNW1laUpRRE1vRHlyR0FhUTRnWm9PSUFnQ0tJd05QQUhpY1kyQmtrV2Fjd01ES3dNSFV5WFNHZ1lHaEgwSXp2bVl3WXVSZ1lHQmlZR1Ztd0FvQzBseFRHQndZS3A0Sk16ZjhiMkNJWWQ3TDBBOFVaZ1RKQVFEZ2lRdnZlSnpGa2NzUndqQU1SSjlEK0lRRUFzbUZJcWlIV25MbVJLV3FnSHRZV2JwUVFlUjVYbG5qMzJpQlBiQVRUOUZDK1ZEd2VLdGFhbjNIdWRaYlhscWZOQnJwWXAzTjYxcXpZbjNOUEVyZDhhaFpvN090WGpod1ZLM1RQVDBERjY2TTNMZ3pNV3ZiZ2MyaWJQZjBmd3gxL3VaS1hXRko5RVZMdk8rV3VHZVd1RytXdUorV3FPOVlJZ2V3UkY1Z2lWekJFdmZaK2dEWElmRGYyU1hBOVJyZ09nYTQzZ0pjN3dHdVU0RHJIREQvQUZMek1KTUFlSnh0T0Fsd0hOV1YvZjd2YTNydXEzczBNNXFycGVuUlNCb2RvNW14RGpRYWFXeko4aW5aeGhoYnRteURRUnl4Wkx3R2pDM0xCbU1YUjRBRWM4V0M3RzRxTHBPcVpTdFpZQ3V3TEFzMngrSUVkamUxWlNoQ0lKc3NGUmEydGtLUlRZTFYzdmQ3WkhCUzY3RzYzMy8vL2ZmZjlkOTd2em1CNHk1K1JGK2tJYzdQWmJnT3JzcXQ1VGdRbXlIbEl2V1FOTHB5cEJtQ1NTR29CVnpVMEkya3BLZHk5QXJRVW1KQTdTeDJwVFZSRXQzZ2doamtrNTFGSTBjTUtIVDFrMTdvVk9zQjZpTGhkYjdHcUk4K0NFcklpQjAxUjhsZlFUQ3VSOTM5cmVieWxuS2dNK0dYYjNYNGZIVSszMzJ5S0FneUliemJCVGRycWsyd0thTDVQY0VkRHI0WWJ5SnhjTlFaNFpXYm5JbUliL3Z4cm0vVU4ybzJnTGs1OEVjU3JsTmxiOWlML3crRVZiK3ZUdkk0NVZEWXFUY0U0TlpmMlVOK1IzMzZQemo4eDZPdW45Qno5QXJPamRvbXVUYU9FNUk1S0hpN2lpaTdxbmxkMEpqMEprRlBwWTFDUC9SQ1VBL21JVjBzTlJiVk9FaUdVRFRvaVF2dmF2RzRSZzB0RGhDL2NJNEdMbnhLdXo3MXFnQ3E5OU9mL2V6Q044VmdrTHl0TmtwTCtyc1dlbTFFaGJoR0JMWm00VXN0WG9iZm1uZHAzdWU5MnNBeEdFYXFueUw1Szk3bjN1S1ZtbndmOGh3dGNRbXVpMXZEVGFFbjBtNFFKUmMwbzRXRDNvREt6S3FoTUdxK3M5VFBKS2RwSXdmb2t6VFRvaGZVWXFsWWdoeTBRVnBQaVVGVmkwRUFIUlFNNElJeTlBTmxhR2tSalN3RE5VYWxISkNTejV1b3p5NHJrVE4yajhmK0xzMWZrUTdYMjV5U1pGT0tXdDM0Z09PMFN4RWRqOXFYWHBXS3dnajBkMGs4Ny9DQU05UGVrWFY2N0lMQUZ3ZmlrczNoQm5DdjJyeDVsV1R6MkczU3Boc0FwbWhPZHRTRkV2a2tlQnhteGVGSjV1T2hPaHZsdlFwMUJoZUMvdUJRQTdXN1lhUGlvQTJEZGFyNWc4RWI0anpTZXVUUTJIWGpJUmtoUXVJM3daT0N4K0dWY3lkZk9abmpuVGFIUnlnK096UDlMQ2VqM1Y2Zy8wWW51Rlhjazl3WE1BNC9JRUNjUkVYN0ZRdGRScW5ZeHV5WS9ncVFER2JXT0ZyMkVoQU1hQksrMVRLb1h3RWx6VElhcmlraWlJQ0I1R2cwTm85UU00aEd5ZzNJMUVnek5nZ1Uwb1d1VXJvTmtCemRVRndFMkZwa2lqYS9CS2xTVUxUMmhWUWJjcEZFSGQvcE1rb29pVFVBK1JqNExwYmkrR2RCK1U0RXRaTDFWdDBvSmtwWWc0SUJTVk5abUNDdkdtUjBhS3BXRTczRFlsSFRZdEVTQmpORmh3WHFxWm8xOUpUT3RPcGdQRkovYXBGZUtPVVhiY0tzb1pha1JZMmJvUWFocUYyb0tSUDBrczY5VU95MGRyMmt0dlpuZWx1aVhtN0pGRE1sYWxkU08wdE1ROVNaaFNWR3RGWlRuNWtmMzJnZ2pQZEZxQm5TS1FrdGgwcExJaHNhQ0FXWjVLckZEUGRWSlF4dEF6bWhGQzR3WEZCTFduUURKWHRsMmk0b2h5SjZLN0VkdEltVjV1WWhRVGxnZzdhR3lHRTczMExsR1VyM3lMUlZVR1lqcVN5eDNhNklRODNaS2k5U01tc2piYW5JckNLMFUzblpyQ3k0c3dHSk5LK3U4aExKRlNXK3NqNU5KQ01xeVB2MXZ4QjVBY1NaNUt3czFtY2traGtiNU9YMmRsbm9YOXNCWXFqWEtkajJSRytTZ0FCUUFhUVo4K2NTUDVSdEh1SWxTbTVYU0xNZXhrMWFlZHNNb1RNMnZwbVgrYm1vbmlQS0FVSWxmckFsTzhCanZqeG9nMVk5ZklqYUtJcXoxNkpzeDhGc1dHOGp0bGt5VmhOWmhuWTlNa3RsMm1GcHhyVEh3YUw2aEtEVTJaWWhSbm5BUm5JTmtTTzRBZHBnRHlWb2d4eFN6a0xZc2dMdVRLdk4yZE1iREl5ektDN1lyKytWZ1BMaW50UXNqbUlaRVpyR0Iza0p0STRRa1doNXJJT2dvaTRxOHJkRVVGTktnS2NnVFljT0ljYVZEWXJRc21ZcGxZaWFqMGowa2ZVVlhvcmtWWlNtdXJvRlJEWHJRcGF6b1dtMkFhQ05RTG9wc3NjbU9QczBpWFNzN1VkNzE3VnJzbEFaeXhBcFU4K0wvR3h5ajhqNDcwM3RsNFZvUmlSL1d4d0dHQzRXaGdrWkxpU3kyWUZzRnJacVdpRFFMU3AzS2FSRmoreFcrQXFWZDRyQ0Rwa1dCT1cyaU41RWJQc1VzYUtHZ29FZVVibWJPVHM2cHdodGFBNVIzQ05DVVZEMmhWTXBva3dyNG1ZMFF5RGpGdVRiazFPaUxJdlQrbDJ5RURORWt0dGM1bTJxRm81S2RIQTBEV0ttWHBBUEpDY2xrR1NRSm8xclpjSFZGeFloTnpRaXlFNjc2blNHVUEvemgrS013TFpvRTVTNWlONE90cnNWc1NjUTFMU0txT3lUQUpyMHlHMktVQUJ4aHlEc0VHRkFVSFpIOUJZQTZhZ2lkZ2N3OElkRVpRYnBVcW53UGp0ZmhOdjJDR0RKRzBtbGtHcGFFYXBxYzZCSFVPNUNvaFk5dXRzbURGak1kZ3BGbnVtZUFXbWZJZ3d5M1hzRjVXNEpnK2F3d3JlQnNFY1FWakxkNmcwaHQ2VmZrRFJVVGVRSFY2UUIrQ2FNOVlPSlNaRkhKd25iTTlkS2dyczNnbkN1dXB5WGZXNm56K09SK2NHVkJwTDZNeDVtcSt0RmpKaFZxZDBpUm9ONGZlSjJXWFEzK1FSalJVV1FQUjZmMCsyejhTTkRPU0tGKzF5QzdacjBObVF0YlVzY3dPMHpRbm9Vb3lRYXhnNkJMMStOTkVZTWQ0ZVJRczNIaFpFM2dIbDVJTXRSVnZUcEwya2IxOENOY0JzNHJqRkhzVFVwc2ZLSHlTQ042VURDdklEWm9hdllpV25VUlNDRjJhVWZFMWJlcW9tTUlDQmliY1ZWblRHQ0JFS3QwQ0sxTnlCQ1BEOHhtazZQVHVRYmRhZEQwcHpoNk5qTmhOdzhObjR6OFVYOHh2SUp1TDlCZHpwbDFSV09qTE9aY1p6M1IzdzRjOTNFY2dOZjVxY3VINUw2WlVndm43aCtZamxhVStIVnNCUFBENzFwdkxZR0tWeGRiS3BCNGJXd2c4cTFIWERHNmZNNXUycU1HTCtxendVTmpOcDgzK1ZEMVVXc2kzUDA5M1NPQzJCSGtlZkszRGkzRld0aVNqS0twVTVOREtMeVJaWVpwUnhjbmlhaGhzSnhWNW9oRVNWZE5pMHNvaXo3aVRxV1ZWV3dKbXBFWkhNeHQzNzlOWmxHSU92TEhlbHNRVHp0UEhhNHRRK2dyelhIbmd0ZlFrZnp1dUphTmFhbkU0R3hKWnRhT2o5dTdTTmtjUnIrWnZzeHgybXh0ejNSMkxkT2FNcnVXTGUrRlNLdFZ3QmMwV285eVpIZ3Q3SWdTVko1UFlGSXgrMVZZV0ovRmxjdmt2U1pIL2JzMUwrZHZxRWNIRmhUQ1ZTbk13L29PNSs1dEhtdXRlOU9jc2RXT25vazd3R3lxbGVHcG04RktwZk5MdmFKYy9SOTdNTW9KM0YyN0JZNThEWjZ3WnYwZnZWKzJyd0RqcHAzME9jVy9rakVoVDlDeGJ5dmlKRnoyandHUStiOVpua1k5c1B2ekI2WVJYNEo1UGNHL1NjNml0eGt6c041dVRvdXpLVTRuVE93NTI3aFdya0NWK1I2dUY3MDBBQkc2bkxzWTFaelYzSWJ1YzNjRm02UzI0NmQ0QTNjTjdqZEhPZlBTMXBRTjZSQ01oODBKTDFRTW1oZUt3WDFrbEhRODBGSjB3dGFxYkhFWHBKUnlEZVdna2xOU2dZTlJBVjFST1dEamFVa3poV1NXQ3B4dVZIU3ZIbEVleVhrWWZoTGhvNDhTdDY4SWVXOWhsYlFwWmRQVk01NHpsVGh2eDhhZk4zemV2bTQ1MnoxUk9Yc1ZnUWZISHpOL0gxMS9xT1BuaHI4eUp6ZkJYVjJ1L254THBMQTRVZUlOdi9YQVhXN2Rwa2ZPenp6bFMyZGR2dVdxYW5KRjU2YUxILzJwME55MXRyZ3hJUEkvN1d5T1grRzhYZTdYeTgvTlBqYXFlcjhwbE5QRFU0MDd0cGt0MC9zYWtMdyswdm5yenFFTUdLMnpsYytpT0ttbjB4TmdmckNVeCtVNFdyRVJCd09DRTVObWYvMVk4U2c3WjFvK3gvU245TFY2TWNBOXZ4WlBBZDkzRkswNzJadUZ6ZkRIZUNPc2ZzT0o2bWNWdVJLYVE2NnNBdnhZbjhqc2M2Nml6VTEyRkZndjhWK2FkWUxCa1VKc2Y1Z21uVkJob29Yb0FMU1lHUGlSUkpzeGtUL3BiWmJLckorMEtqOVl0RElVT3lIZlhpTm42cmxRTEQ2SnZ5NXNBMTQxZnhTRUlDK2VnWUVRVEF2bU5zODY3WmZ1MEZwZGJ1SzNkMUZqODhCemZXUlRGeHpyOTU0WTZSKzQycTNGcDlraUpoMzdJMUkvY1NZcno0K3VYMmRSOWx3ek90aEsxeHU2ZFo0YTBMM0o5VHdwdG1GaFRvMTRXOUl0Q2FpczMrWnpOY24vRVpBMnpwSGZLR0E0VTlFTzVQYUhGMGxtT2FyWjh3L29CalNtVmVCbU1VMUl3RnF2a0xVbnF3Z2FrdTZsMkFuVjFsV2dEZkZRS3hrdEhuSTR3SHhSOFRUWnBRV1BueWI0ZklWNzk4SHhMZXB0NUl2dlFYOU5EQ3lwcjlIQlRTYnRWb1U4b1ZsUzBKK3AzMXBkMk45NnVqM280M2RTKzNPUUdqejNlWklWSFhZcmxxYUNqYys4bUpZWDNxVnphRkdybjNrMHQzdFBucWNIc1NUMDh1dDVDYnc3cFl5bUl1TUxxdFQ3TFFhelNCTFNaSklVMVozR1F6RWlJVzI3amo5dEdEUnAya3FSNzdLNkJRdnVralcyVS93cWd1L1c3K20ydFBWQi9INDdwRVYzeHNkbVk0bG9LL1FYVjI3YnFSUzNoNk91cU9aVUxnblZqazhHT3NKaHpKUk4wUWkyOHVWNGNLMkZZYXhZdHNOMjBZem1kRnRoZWFWZllsRTM4b05xOWhyMWQ1cXp6VmJ6bTBZdDlnbFl0TWpvK01iem0yNXBxZEtYNHBhcXhzM1RtN050aTRQTDFrU1h0NmEzVHE1c1hFWWQ0dEVGNTZ3ZUM2eVhtSEF1OGh0dzllODBTNEU3WEtNZmtFUGNRNHV4M0k3MXFkK3FOVW5LdzR0UXpTdzVGM0VITTlHR09rcXgvSjlXb1F2WFFId1IvMytKOEIvNko1QTZGOVBuRE4vSThEeEdSOUF2ZS9PZVpEQS9kYUgwQ3FRK1NQZUdKd0t1T0JobDkvdk1tL0NkY2NEU3Y4WFQ1eDR5Kys1OE1iUmQwcEt3TytYQmo0LytaYjVuMjRlRWg4ODhUOWx5Vy9KZHovOUhHdVF6ZzFqQmNhcmRScnJKN3FrekM0a2FYYmJTS1c3Y0lDNEFQdVFvSU5GczRqQm00RkZFNml0NkZ5a0llV1dOWEdiVDFNNkRuV2NiMnZENS9NMnpTYy9QL1RNME1EQStjVGFadk5reTlvNGdrUFBWR1dmWnV2OG1pemtzejJmV0p2OWJUSnVDM25sdHJiemlHMXJlODdtQzltZUd4aEFCdWNUQ2ZNN3lUaXVQRDh3b0dnK1d5NTN2bk9SUmxPZVN5UXV4ZU5obnFEZGk5d1F0NWJGSTlaVkY4WExCd3U0UE1aVHFaaGp0eHlxWTdpeERtSXhSbU5ZSnF3dzlHTjFUYkliaVpic1o2MEczckQ2Q1Y3S1V0UlNOVWRRYlpXNGQyNVpmc2ZtOXFhbWg3YnR1SEhzc1R1MzE0dXVaRndLamUwK1ZMMzZ1N05EbVZYWDlhODZ0ZXFxTzFOU1BPa1NNL05UVzhaRFB2T01MeFR5UVo4djlKSVRuUFBPVkJnYzgwN2Q1ZFNkVHpxd2szYys2UVI2U0k5T3pEMjg1dnB0Vys0M01ybE4rNFk5TWFmVDA3ZHoxS2pzUDNubDRNRWIxMmoxOWFtNUt6MU9SOHl6Ni9HTWJvSlhBOUJTN0hIV21YUStoam1lUGMxN25ZN0hIYWs2Y0R6dVRLSnRMbDY4ZUkvd0R2MEhySFZKckc3ZGVGYlREZWpUa3ErQkpWSk1rVHlJdkNRaXpMZGdZS0svRy96bzFSd1UraUVmQS9pcSs0b0IrZFdDK2MzZG92Z1N0VU4xZXNobXU4Vjh3THo0RS9QTktRV1VLZWlHNzBLM0JacG55OExKNlZzZUZlZjN6bnpiL0h4a0I5RHR5NWJ0b0RDNXovblpyMUZhbUh2Yy9QV045L3QwL3k4L29jZmxGLzdPSC9jKyt4TDg0N00rZlAvWXZQR1dSNldUMDNzZkZwOHdmME4yakN6YlRzbms4UElkN0l4ZE5DL084Qng5QUN2NUlNYXd4SHlGWndwRjdNQUhHekdmODNqelpmZlVOS1lhYU1QV2ltZnV6Z2Vad3d1V3h4dndzc3N1d0NyOTUzT3F5MlhjYS83bzFwWk9IbWc4clJJUWVrc1B3YU5QNjU2TVBDeUdMNnhqSk4yQmUySDFQb3NtMXFoYUpPYlUwNDN1Sm5tWkZINm5RVXo3V3FlalIvTUhxNkpmRTJNQldQTm81YStUeDdNZUtmaHFNQTdiR0VHMURpbTZEbFVGdnlxRXZmTGF4eGhGUzQwQ0hjTjZIZFJ0RHV1amhtZTBEYk1yZW9zenNCaGlvaEF0QUlkV2hjVHVHVHBqRUdROWNlTWk3R0xIOVRLWWNPK1p2OERpa1h6dlBVaGlEZnZGZXk4RHgvTVh1WmRmdm9odjRMcmNrVmpFbld4UHdINExna1JINGlWM0pCNzJNR2p1OHBYSXFZUXJYcjZNQTV6eGhOM3VzQ2VVVEliK0g0Z0QxT2NVamRQRFhEM3E0YjJVWjlpWEFrd2llTVJ3N01Vamh3MCtVVi9uN1h5VzU4MzNlUWQ3SUd6bno4cGlyeUN2b05tM2EyTm9RNEovcVJIKzVNSjVFZTlOMG1MZWZacmVUSTl3UHV6aE9LQTVWbSs4bHErOTFobTN2dGl4VHlzdWpIbC9ETU84NE0wQjNmbVpMZXIwRVMwZU9LM0V3dnpDSDl5QjB3Ni8zYXNRYVhHR0xJRWxEa0Z5cUJmMmVmeEVkVlB0QXljZmlNRTZFdlJjK09RRGw5MGZ0Smx2MmdYSnJ0SjdQSDdPMG5tT3h1alZUR2Z3bHRqSEZ6eGs3S3NLMUJKcEhLeXZnNTNxMXpyL1hQaHpuZW5LQy8rK3FEUXF6QlN2S1UwemdpeWp5djhIKytzTW4zaWNZMkJrWUdBQVlpYURBTnQ0ZnB1dkROd3NEQ0J3OWRQWk1CajkvOS8vUXRZTHpIdUJYQTRHSnBBb0FFRnZEVkFBQUFCNG5HTmdaR0JnYnZqZndCRERldmYvdi8vL1dDOHdBRVZRZ0FnQXhjY0lKbmljWTJGZ1lHQit5Y0RBQXFSWi9LRTBFWmoxN3YvL0xBei8vNkdMQXdESHFBWmhBQUFBQUFBQWRnREdBV0lFYmdUdUJZb0ZzZ1p3QjFRSDRBZ3dDSndKS2dtU0NnQUthQXFjQ3VJTEZnQUFlSnhqWUdSZ1lCQmhFbWRRWUFBQkppRG1Ba0lHaHY5Z1BnTUFEN2tCWkFCNG5GMlFPMDRETVJDRy84MExzVUVVSUdob0xBcUVRTms4T3RKUVJFcHFVcVJQTnQ2ODlpV3ZFeWtGNStFQW5JQURjQUFhcnNBQmFQaXpPeUFTV3g1OTgvc2Z6OGdBenZBSkI4VzY0Q25ZUVkxWndTVWM0VXE0VFAxYXVFSytGYTZpRGsrNHh2MGc3T0llajhKMW5HUEpGNXpLTWJNN1BBczdPTUdMY0FtbmVCVXVVMzhUcnBEZmhhdTR4SWR3amZxWHNJc1J2b1hydUhHZTNKN1JZNnVuYXJKVkN6K0pneVMyN3FxeHc2R2VyY094S1pJaWpyVEpGa21zMmw2ckVBWTYxdWEzUHR2TU90WUdLakJKcFBwOFNJZGhvbEtUTExWdnZibTFhYmZaREVUMy9DVGlPRDBZYUl4aEdhZFFtR0RMdUlDUEJER0NQRnI2Vm1qOHFVTjZaMWdqWkozWnUvblBJN29NTXVhN1RLSE56Mi90T1FaMHhMbnJzSCtHRFR0MHFGck9vSGdNS3lKU1h5YlM3QjZTRmRMOGJrbkZwKzVobmxlbDZLTEpIUno0dmJ4MzlBTThYMmNDQUhpY2JjdGJEb0l3RUViaC9sRGFlcjl2eEIyVk1pcFJaMGc3QkpldmlUNzZ2WjRjVTVtdnVmbnZpQW8xTEJvNGVBVE1NTWNDUzZ5d3hnWmI3TERIQVVlY0RGNU5KcWJKbDRIaW5iSXZwTnJ6TlNSaHBxUm5ON1lqNitpbm5qdVppa3ZFS21YV1J1Nm12dE5iZUVpSzJndmJWa1Q5YjNQMEdpU3JlMGFPVi9LWkxwbkt6VDRsVXgxTEN1VVRZL3NnMjFGSnhyd0JiSkV3N3dBQUFBPT1cXFwiKSBmb3JtYXQoJ3dvZmYnKSwgdXJsKFwiICsgZXNjYXBlKHJlcXVpcmUoXCIuLi8uLi8uLi9zdHlsZXMvZm9udHMvaWNvbmZvbnQudHRmP3Q9MTUwNjU4NTY4Njk2N1wiKSkgKyBcIikgZm9ybWF0KCd0cnVldHlwZScpLCB1cmwoXCIgKyBlc2NhcGUocmVxdWlyZShcIi4uLy4uLy4uL3N0eWxlcy9mb250cy9pY29uZm9udC5zdmc/dD0xNTA2NTg1Njg2OTY3XCIpKSArIFwiI2staWNvbikgZm9ybWF0KCdzdmcnKTsgLyogaU9TIDQuMS0gKi9cXG59XFxuLmstaWNvbiB7XFxuICBmb250LWZhbWlseTogXFxcImstaWNvblxcXCI7XFxuLyogZm9udC1zaXplOjE2cHg7ICovXFxuICBmb250LXNpemU6IDEuMTQyODU3MTQyODU3MTQzcmVtO1xcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XFxuICAtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xcbn1cXG4uaWNvbi1yZW5ldzpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxFNjAxXFxcIjtcXG59XFxuLmljb24tc3BlYWtlcjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxFNjAyXFxcIjtcXG59XFxuLmljb24tc2V0dGluZzpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxFNjAzXFxcIjtcXG59XFxuLmljb24tY29ubmVjdDI6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRTYwNFxcXCI7XFxufVxcbi5pY29uLXVidW50dTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxFNjA1XFxcIjtcXG59XFxuLmljb24td2luZG93czpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxFNjA2XFxcIjtcXG59XFxuLmljb24tY2VudG9zOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEU2MDdcXFwiO1xcbn1cXG4uaWNvbi1iYW5kd2lkdGg6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRTYwOFxcXCI7XFxufVxcbi5pY29uLWxvY2F0aW9uOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEU2MDlcXFwiO1xcbn1cXG4uaWNvbi1ib290OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEU2MEJcXFwiO1xcbn1cXG4uaWNvbi1jb25uZWN0OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEU2MENcXFwiO1xcbn1cXG4uaWNvbi1leHBvcnQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRTYwRFxcXCI7XFxufVxcbi5pY29uLW1hbmFnZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxFNjBFXFxcIjtcXG59XFxuLmljb24tcmVmcmVzaDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxFNjBGXFxcIjtcXG59XFxuLmljb24tbW9yZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxFNjEwXFxcIjtcXG59XFxuLmljb24tYXNjOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEU2MTFcXFwiO1xcbn1cXG4uaWNvbi1zb3J0YWJsZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxFNjEyXFxcIjtcXG59XFxuLmljb24tZGVzYzpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxFNjEzXFxcIjtcXG59XFxuQGNoYXJzZXQgXFxcIlVURi04XFxcIjtcXG4vKlxcbiAgSW9uaWNvbnMsIHYyLjAuMFxcbiAgQ3JlYXRlZCBieSBCZW4gU3BlcnJ5IGZvciB0aGUgSW9uaWMgRnJhbWV3b3JrLCBodHRwOi8vaW9uaWNvbnMuY29tL1xcbiAgaHR0cHM6Ly90d2l0dGVyLmNvbS9iZW5qc3BlcnJ5ICBodHRwczovL3R3aXR0ZXIuY29tL2lvbmljZnJhbWV3b3JrXFxuICBNSVQgTGljZW5zZTogaHR0cHM6Ly9naXRodWIuY29tL2RyaWZ0eWNvL2lvbmljb25zXFxuXFxuICBBbmRyb2lkLXN0eWxlIGljb25zIG9yaWdpbmFsbHkgYnVpbHQgYnkgR29vZ2xl4oCZc1xcbiAgTWF0ZXJpYWwgRGVzaWduIEljb25zOiBodHRwczovL2dpdGh1Yi5jb20vZ29vZ2xlL21hdGVyaWFsLWRlc2lnbi1pY29uc1xcbiAgdXNlZCB1bmRlciBDQyBCWSBodHRwOi8vY3JlYXRpdmVjb21tb25zLm9yZy9saWNlbnNlcy9ieS80LjAvXFxuICBNb2RpZmllZCBpY29ucyB0byBmaXQgaW9uaWNvbuKAmXMgZ3JpZCBmcm9tIG9yaWdpbmFsLlxcbiovXFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogXFxcIklvbmljb25zXFxcIjtcXG4gIHNyYzogdXJsKFwiICsgZXNjYXBlKHJlcXVpcmUoXCIuLi8uLi8uLi9zdHlsZXMvZm9udHMvaW9uaWNvbnMuZW90P3Y9Mi4wLjBcIikpICsgXCIpO1xcbiAgc3JjOiB1cmwoXCIgKyBlc2NhcGUocmVxdWlyZShcIi4uLy4uLy4uL3N0eWxlcy9mb250cy9pb25pY29ucy5lb3Q/dj0yLjAuMFwiKSkgKyBcIiNpZWZpeCkgZm9ybWF0KFxcXCJlbWJlZGRlZC1vcGVudHlwZVxcXCIpLCB1cmwoXCIgKyBlc2NhcGUocmVxdWlyZShcIi4uLy4uLy4uL3N0eWxlcy9mb250cy9pb25pY29ucy50dGY/dj0yLjAuMFwiKSkgKyBcIikgZm9ybWF0KFxcXCJ0cnVldHlwZVxcXCIpLCB1cmwoXCIgKyBlc2NhcGUocmVxdWlyZShcIi4uLy4uLy4uL3N0eWxlcy9mb250cy9pb25pY29ucy53b2ZmP3Y9Mi4wLjBcIikpICsgXCIpIGZvcm1hdChcXFwid29mZlxcXCIpLCB1cmwoXCIgKyBlc2NhcGUocmVxdWlyZShcIi4uLy4uLy4uL3N0eWxlcy9mb250cy9pb25pY29ucy5zdmc/dj0yLjAuMFwiKSkgKyBcIiNJb25pY29ucykgZm9ybWF0KFxcXCJzdmdcXFwiKTtcXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxufVxcbi5pb24sXFxuLmlvbmljb25zLFxcbi5pb24tYWxlcnQ6YmVmb3JlLFxcbi5pb24tYWxlcnQtY2lyY2xlZDpiZWZvcmUsXFxuLmlvbi1hbmRyb2lkLWFkZDpiZWZvcmUsXFxuLmlvbi1hbmRyb2lkLWFkZC1jaXJjbGU6YmVmb3JlLFxcbi5pb24tYW5kcm9pZC1hbGFybS1jbG9jazpiZWZvcmUsXFxuLmlvbi1hbmRyb2lkLWFsZXJ0OmJlZm9yZSxcXG4uaW9uLWFuZHJvaWQtYXBwczpiZWZvcmUsXFxuLmlvbi1hbmRyb2lkLWFyY2hpdmU6YmVmb3JlLFxcbi5pb24tYW5kcm9pZC1hcnJvdy1iYWNrOmJlZm9yZSxcXG4uaW9uLWFuZHJvaWQtYXJyb3ctZG93bjpiZWZvcmUsXFxuLmlvbi1hbmRyb2lkLWFycm93LWRyb3Bkb3duOmJlZm9yZSxcXG4uaW9uLWFuZHJvaWQtYXJyb3ctZHJvcGRvd24tY2lyY2xlOmJlZm9yZSxcXG4uaW9uLWFuZHJvaWQtYXJyb3ctZHJvcGxlZnQ6YmVmb3JlLFxcbi5pb24tYW5kcm9pZC1hcnJvdy1kcm9wbGVmdC1jaXJjbGU6YmVmb3JlLFxcbi5pb24tYW5kcm9pZC1hcnJvdy1kcm9wcmlnaHQ6YmVmb3JlLFxcbi5pb24tYW5kcm9pZC1hcnJvdy1kcm9wcmlnaHQtY2lyY2xlOmJlZm9yZSxcXG4uaW9uLWFuZHJvaWQtYXJyb3ctZHJvcHVwOmJlZm9yZSxcXG4uaW9uLWFuZHJvaWQtYXJyb3ctZHJvcHVwLWNpcmNsZTpiZWZvcmUsXFxuLmlvbi1hbmRyb2lkLWFycm93LWZvcndhcmQ6YmVmb3JlLFxcbi5pb24tYW5kcm9pZC1hcnJvdy11cDpiZWZvcmUsXFxuLmlvbi1hbmRyb2lkLWF0dGFjaDpiZWZvcmUsXFxuLmlvbi1hbmRyb2lkLWJhcjpiZWZvcmUsXFxuLmlvbi1hbmRyb2lkLWJpY3ljbGU6YmVmb3JlLFxcbi5pb24tYW5kcm9pZC1ib2F0OmJlZm9yZSxcXG4uaW9uLWFuZHJvaWQtYm9va21hcms6YmVmb3JlLFxcbi5pb24tYW5kcm9pZC1idWxiOmJlZm9yZSxcXG4uaW9uLWFuZHJvaWQtYnVzOmJlZm9yZSxcXG4uaW9uLWFuZHJvaWQtY2FsZW5kYXI6YmVmb3JlLFxcbi5pb24tYW5kcm9pZC1jYWxsOmJlZm9yZSxcXG4uaW9uLWFuZHJvaWQtY2FtZXJhOmJlZm9yZSxcXG4uaW9uLWFuZHJvaWQtY2FuY2VsOmJlZm9yZSxcXG4uaW9uLWFuZHJvaWQtY2FyOmJlZm9yZSxcXG4uaW9uLWFuZHJvaWQtY2FydDpiZWZvcmUsXFxuLmlvbi1hbmRyb2lkLWNoYXQ6YmVmb3JlLFxcbi5pb24tYW5kcm9pZC1jaGVja2JveDpiZWZvcmUsXFxuLmlvbi1hbmRyb2lkLWNoZWNrYm94LWJsYW5rOmJlZm9yZSxcXG4uaW9uLWFuZHJvaWQtY2hlY2tib3gtb3V0bGluZTpiZWZvcmUsXFxuLmlvbi1hbmRyb2lkLWNoZWNrYm94LW91dGxpbmUtYmxhbms6YmVmb3JlLFxcbi5pb24tYW5kcm9pZC1jaGVja21hcmstY2lyY2xlOmJlZm9yZSxcXG4uaW9uLWFuZHJvaWQtY2xpcGJvYXJkOmJlZm9yZSxcXG4uaW9uLWFuZHJvaWQtY2xvc2U6YmVmb3JlLFxcbi5pb24tYW5kcm9pZC1jbG91ZDpiZWZvcmUsXFxuLmlvbi1hbmRyb2lkLWNsb3VkLWNpcmNsZTpiZWZvcmUsXFxuLmlvbi1hbmRyb2lkLWNsb3VkLWRvbmU6YmVmb3JlLFxcbi5pb24tYW5kcm9pZC1jbG91ZC1vdXRsaW5lOmJlZm9yZSxcXG4uaW9uLWFuZHJvaWQtY29sb3ItcGFsZXR0ZTpiZWZvcmUsXFxuLmlvbi1hbmRyb2lkLWNvbXBhc3M6YmVmb3JlLFxcbi5pb24tYW5kcm9pZC1jb250YWN0OmJlZm9yZSxcXG4uaW9uLWFuZHJvaWQtY29udGFjdHM6YmVmb3JlLFxcbi5pb24tYW5kcm9pZC1jb250cmFjdDpiZWZvcmUsXFxuLmlvbi1hbmRyb2lkLWNyZWF0ZTpiZWZvcmUsXFxuLmlvbi1hbmRyb2lkLWRlbGV0ZTpiZWZvcmUsXFxuLmlvbi1hbmRyb2lkLWRlc2t0b3A6YmVmb3JlLFxcbi5pb24tYW5kcm9pZC1kb2N1bWVudDpiZWZvcmUsXFxuLmlvbi1hbmRyb2lkLWRvbmU6YmVmb3JlLFxcbi5pb24tYW5kcm9pZC1kb25lLWFsbDpiZWZvcmUsXFxuLmlvbi1hbmRyb2lkLWRvd25sb2FkOmJlZm9yZSxcXG4uaW9uLWFuZHJvaWQtZHJhZnRzOmJlZm9yZSxcXG4uaW9uLWFuZHJvaWQtZXhpdDpiZWZvcmUsXFxuLmlvbi1hbmRyb2lkLWV4cGFuZDpiZWZvcmUsXFxuLmlvbi1hbmRyb2lkLWZhdm9yaXRlOmJlZm9yZSxcXG4uaW9uLWFuZHJvaWQtZmF2b3JpdGUtb3V0bGluZTpiZWZvcmUsXFxuLmlvbi1hbmRyb2lkLWZpbG06YmVmb3JlLFxcbi5pb24tYW5kcm9pZC1mb2xkZXI6YmVmb3JlLFxcbi5pb24tYW5kcm9pZC1mb2xkZXItb3BlbjpiZWZvcmUsXFxuLmlvbi1hbmRyb2lkLWZ1bm5lbDpiZWZvcmUsXFxuLmlvbi1hbmRyb2lkLWdsb2JlOmJlZm9yZSxcXG4uaW9uLWFuZHJvaWQtaGFuZDpiZWZvcmUsXFxuLmlvbi1hbmRyb2lkLWhhbmdvdXQ6YmVmb3JlLFxcbi5pb24tYW5kcm9pZC1oYXBweTpiZWZvcmUsXFxuLmlvbi1hbmRyb2lkLWhvbWU6YmVmb3JlLFxcbi5pb24tYW5kcm9pZC1pbWFnZTpiZWZvcmUsXFxuLmlvbi1hbmRyb2lkLWxhcHRvcDpiZWZvcmUsXFxuLmlvbi1hbmRyb2lkLWxpc3Q6YmVmb3JlLFxcbi5pb24tYW5kcm9pZC1sb2NhdGU6YmVmb3JlLFxcbi5pb24tYW5kcm9pZC1sb2NrOmJlZm9yZSxcXG4uaW9uLWFuZHJvaWQtbWFpbDpiZWZvcmUsXFxuLmlvbi1hbmRyb2lkLW1hcDpiZWZvcmUsXFxuLmlvbi1hbmRyb2lkLW1lbnU6YmVmb3JlLFxcbi5pb24tYW5kcm9pZC1taWNyb3Bob25lOmJlZm9yZSxcXG4uaW9uLWFuZHJvaWQtbWljcm9waG9uZS1vZmY6YmVmb3JlLFxcbi5pb24tYW5kcm9pZC1tb3JlLWhvcml6b250YWw6YmVmb3JlLFxcbi5pb24tYW5kcm9pZC1tb3JlLXZlcnRpY2FsOmJlZm9yZSxcXG4uaW9uLWFuZHJvaWQtbmF2aWdhdGU6YmVmb3JlLFxcbi5pb24tYW5kcm9pZC1ub3RpZmljYXRpb25zOmJlZm9yZSxcXG4uaW9uLWFuZHJvaWQtbm90aWZpY2F0aW9ucy1ub25lOmJlZm9yZSxcXG4uaW9uLWFuZHJvaWQtbm90aWZpY2F0aW9ucy1vZmY6YmVmb3JlLFxcbi5pb24tYW5kcm9pZC1vcGVuOmJlZm9yZSxcXG4uaW9uLWFuZHJvaWQtb3B0aW9uczpiZWZvcmUsXFxuLmlvbi1hbmRyb2lkLXBlb3BsZTpiZWZvcmUsXFxuLmlvbi1hbmRyb2lkLXBlcnNvbjpiZWZvcmUsXFxuLmlvbi1hbmRyb2lkLXBlcnNvbi1hZGQ6YmVmb3JlLFxcbi5pb24tYW5kcm9pZC1waG9uZS1sYW5kc2NhcGU6YmVmb3JlLFxcbi5pb24tYW5kcm9pZC1waG9uZS1wb3J0cmFpdDpiZWZvcmUsXFxuLmlvbi1hbmRyb2lkLXBpbjpiZWZvcmUsXFxuLmlvbi1hbmRyb2lkLXBsYW5lOmJlZm9yZSxcXG4uaW9uLWFuZHJvaWQtcGxheXN0b3JlOmJlZm9yZSxcXG4uaW9uLWFuZHJvaWQtcHJpbnQ6YmVmb3JlLFxcbi5pb24tYW5kcm9pZC1yYWRpby1idXR0b24tb2ZmOmJlZm9yZSxcXG4uaW9uLWFuZHJvaWQtcmFkaW8tYnV0dG9uLW9uOmJlZm9yZSxcXG4uaW9uLWFuZHJvaWQtcmVmcmVzaDpiZWZvcmUsXFxuLmlvbi1hbmRyb2lkLXJlbW92ZTpiZWZvcmUsXFxuLmlvbi1hbmRyb2lkLXJlbW92ZS1jaXJjbGU6YmVmb3JlLFxcbi5pb24tYW5kcm9pZC1yZXN0YXVyYW50OmJlZm9yZSxcXG4uaW9uLWFuZHJvaWQtc2FkOmJlZm9yZSxcXG4uaW9uLWFuZHJvaWQtc2VhcmNoOmJlZm9yZSxcXG4uaW9uLWFuZHJvaWQtc2VuZDpiZWZvcmUsXFxuLmlvbi1hbmRyb2lkLXNldHRpbmdzOmJlZm9yZSxcXG4uaW9uLWFuZHJvaWQtc2hhcmU6YmVmb3JlLFxcbi5pb24tYW5kcm9pZC1zaGFyZS1hbHQ6YmVmb3JlLFxcbi5pb24tYW5kcm9pZC1zdGFyOmJlZm9yZSxcXG4uaW9uLWFuZHJvaWQtc3Rhci1oYWxmOmJlZm9yZSxcXG4uaW9uLWFuZHJvaWQtc3Rhci1vdXRsaW5lOmJlZm9yZSxcXG4uaW9uLWFuZHJvaWQtc3RvcHdhdGNoOmJlZm9yZSxcXG4uaW9uLWFuZHJvaWQtc3Vid2F5OmJlZm9yZSxcXG4uaW9uLWFuZHJvaWQtc3Vubnk6YmVmb3JlLFxcbi5pb24tYW5kcm9pZC1zeW5jOmJlZm9yZSxcXG4uaW9uLWFuZHJvaWQtdGV4dHNtczpiZWZvcmUsXFxuLmlvbi1hbmRyb2lkLXRpbWU6YmVmb3JlLFxcbi5pb24tYW5kcm9pZC10cmFpbjpiZWZvcmUsXFxuLmlvbi1hbmRyb2lkLXVubG9jazpiZWZvcmUsXFxuLmlvbi1hbmRyb2lkLXVwbG9hZDpiZWZvcmUsXFxuLmlvbi1hbmRyb2lkLXZvbHVtZS1kb3duOmJlZm9yZSxcXG4uaW9uLWFuZHJvaWQtdm9sdW1lLW11dGU6YmVmb3JlLFxcbi5pb24tYW5kcm9pZC12b2x1bWUtb2ZmOmJlZm9yZSxcXG4uaW9uLWFuZHJvaWQtdm9sdW1lLXVwOmJlZm9yZSxcXG4uaW9uLWFuZHJvaWQtd2FsazpiZWZvcmUsXFxuLmlvbi1hbmRyb2lkLXdhcm5pbmc6YmVmb3JlLFxcbi5pb24tYW5kcm9pZC13YXRjaDpiZWZvcmUsXFxuLmlvbi1hbmRyb2lkLXdpZmk6YmVmb3JlLFxcbi5pb24tYXBlcnR1cmU6YmVmb3JlLFxcbi5pb24tYXJjaGl2ZTpiZWZvcmUsXFxuLmlvbi1hcnJvdy1kb3duLWE6YmVmb3JlLFxcbi5pb24tYXJyb3ctZG93bi1iOmJlZm9yZSxcXG4uaW9uLWFycm93LWRvd24tYzpiZWZvcmUsXFxuLmlvbi1hcnJvdy1leHBhbmQ6YmVmb3JlLFxcbi5pb24tYXJyb3ctZ3JhcGgtZG93bi1sZWZ0OmJlZm9yZSxcXG4uaW9uLWFycm93LWdyYXBoLWRvd24tcmlnaHQ6YmVmb3JlLFxcbi5pb24tYXJyb3ctZ3JhcGgtdXAtbGVmdDpiZWZvcmUsXFxuLmlvbi1hcnJvdy1ncmFwaC11cC1yaWdodDpiZWZvcmUsXFxuLmlvbi1hcnJvdy1sZWZ0LWE6YmVmb3JlLFxcbi5pb24tYXJyb3ctbGVmdC1iOmJlZm9yZSxcXG4uaW9uLWFycm93LWxlZnQtYzpiZWZvcmUsXFxuLmlvbi1hcnJvdy1tb3ZlOmJlZm9yZSxcXG4uaW9uLWFycm93LXJlc2l6ZTpiZWZvcmUsXFxuLmlvbi1hcnJvdy1yZXR1cm4tbGVmdDpiZWZvcmUsXFxuLmlvbi1hcnJvdy1yZXR1cm4tcmlnaHQ6YmVmb3JlLFxcbi5pb24tYXJyb3ctcmlnaHQtYTpiZWZvcmUsXFxuLmlvbi1hcnJvdy1yaWdodC1iOmJlZm9yZSxcXG4uaW9uLWFycm93LXJpZ2h0LWM6YmVmb3JlLFxcbi5pb24tYXJyb3ctc2hyaW5rOmJlZm9yZSxcXG4uaW9uLWFycm93LXN3YXA6YmVmb3JlLFxcbi5pb24tYXJyb3ctdXAtYTpiZWZvcmUsXFxuLmlvbi1hcnJvdy11cC1iOmJlZm9yZSxcXG4uaW9uLWFycm93LXVwLWM6YmVmb3JlLFxcbi5pb24tYXN0ZXJpc2s6YmVmb3JlLFxcbi5pb24tYXQ6YmVmb3JlLFxcbi5pb24tYmFja3NwYWNlOmJlZm9yZSxcXG4uaW9uLWJhY2tzcGFjZS1vdXRsaW5lOmJlZm9yZSxcXG4uaW9uLWJhZzpiZWZvcmUsXFxuLmlvbi1iYXR0ZXJ5LWNoYXJnaW5nOmJlZm9yZSxcXG4uaW9uLWJhdHRlcnktZW1wdHk6YmVmb3JlLFxcbi5pb24tYmF0dGVyeS1mdWxsOmJlZm9yZSxcXG4uaW9uLWJhdHRlcnktaGFsZjpiZWZvcmUsXFxuLmlvbi1iYXR0ZXJ5LWxvdzpiZWZvcmUsXFxuLmlvbi1iZWFrZXI6YmVmb3JlLFxcbi5pb24tYmVlcjpiZWZvcmUsXFxuLmlvbi1ibHVldG9vdGg6YmVmb3JlLFxcbi5pb24tYm9uZmlyZTpiZWZvcmUsXFxuLmlvbi1ib29rbWFyazpiZWZvcmUsXFxuLmlvbi1ib3d0aWU6YmVmb3JlLFxcbi5pb24tYnJpZWZjYXNlOmJlZm9yZSxcXG4uaW9uLWJ1ZzpiZWZvcmUsXFxuLmlvbi1jYWxjdWxhdG9yOmJlZm9yZSxcXG4uaW9uLWNhbGVuZGFyOmJlZm9yZSxcXG4uaW9uLWNhbWVyYTpiZWZvcmUsXFxuLmlvbi1jYXJkOmJlZm9yZSxcXG4uaW9uLWNhc2g6YmVmb3JlLFxcbi5pb24tY2hhdGJveDpiZWZvcmUsXFxuLmlvbi1jaGF0Ym94LXdvcmtpbmc6YmVmb3JlLFxcbi5pb24tY2hhdGJveGVzOmJlZm9yZSxcXG4uaW9uLWNoYXRidWJibGU6YmVmb3JlLFxcbi5pb24tY2hhdGJ1YmJsZS13b3JraW5nOmJlZm9yZSxcXG4uaW9uLWNoYXRidWJibGVzOmJlZm9yZSxcXG4uaW9uLWNoZWNrbWFyazpiZWZvcmUsXFxuLmlvbi1jaGVja21hcmstY2lyY2xlZDpiZWZvcmUsXFxuLmlvbi1jaGVja21hcmstcm91bmQ6YmVmb3JlLFxcbi5pb24tY2hldnJvbi1kb3duOmJlZm9yZSxcXG4uaW9uLWNoZXZyb24tbGVmdDpiZWZvcmUsXFxuLmlvbi1jaGV2cm9uLXJpZ2h0OmJlZm9yZSxcXG4uaW9uLWNoZXZyb24tdXA6YmVmb3JlLFxcbi5pb24tY2xpcGJvYXJkOmJlZm9yZSxcXG4uaW9uLWNsb2NrOmJlZm9yZSxcXG4uaW9uLWNsb3NlOmJlZm9yZSxcXG4uaW9uLWNsb3NlLWNpcmNsZWQ6YmVmb3JlLFxcbi5pb24tY2xvc2Utcm91bmQ6YmVmb3JlLFxcbi5pb24tY2xvc2VkLWNhcHRpb25pbmc6YmVmb3JlLFxcbi5pb24tY2xvdWQ6YmVmb3JlLFxcbi5pb24tY29kZTpiZWZvcmUsXFxuLmlvbi1jb2RlLWRvd25sb2FkOmJlZm9yZSxcXG4uaW9uLWNvZGUtd29ya2luZzpiZWZvcmUsXFxuLmlvbi1jb2ZmZWU6YmVmb3JlLFxcbi5pb24tY29tcGFzczpiZWZvcmUsXFxuLmlvbi1jb21wb3NlOmJlZm9yZSxcXG4uaW9uLWNvbm5lY3Rpb24tYmFyczpiZWZvcmUsXFxuLmlvbi1jb250cmFzdDpiZWZvcmUsXFxuLmlvbi1jcm9wOmJlZm9yZSxcXG4uaW9uLWN1YmU6YmVmb3JlLFxcbi5pb24tZGlzYzpiZWZvcmUsXFxuLmlvbi1kb2N1bWVudDpiZWZvcmUsXFxuLmlvbi1kb2N1bWVudC10ZXh0OmJlZm9yZSxcXG4uaW9uLWRyYWc6YmVmb3JlLFxcbi5pb24tZWFydGg6YmVmb3JlLFxcbi5pb24tZWFzZWw6YmVmb3JlLFxcbi5pb24tZWRpdDpiZWZvcmUsXFxuLmlvbi1lZ2c6YmVmb3JlLFxcbi5pb24tZWplY3Q6YmVmb3JlLFxcbi5pb24tZW1haWw6YmVmb3JlLFxcbi5pb24tZW1haWwtdW5yZWFkOmJlZm9yZSxcXG4uaW9uLWVybGVubWV5ZXItZmxhc2s6YmVmb3JlLFxcbi5pb24tZXJsZW5tZXllci1mbGFzay1idWJibGVzOmJlZm9yZSxcXG4uaW9uLWV5ZTpiZWZvcmUsXFxuLmlvbi1leWUtZGlzYWJsZWQ6YmVmb3JlLFxcbi5pb24tZmVtYWxlOmJlZm9yZSxcXG4uaW9uLWZpbGluZzpiZWZvcmUsXFxuLmlvbi1maWxtLW1hcmtlcjpiZWZvcmUsXFxuLmlvbi1maXJlYmFsbDpiZWZvcmUsXFxuLmlvbi1mbGFnOmJlZm9yZSxcXG4uaW9uLWZsYW1lOmJlZm9yZSxcXG4uaW9uLWZsYXNoOmJlZm9yZSxcXG4uaW9uLWZsYXNoLW9mZjpiZWZvcmUsXFxuLmlvbi1mb2xkZXI6YmVmb3JlLFxcbi5pb24tZm9yazpiZWZvcmUsXFxuLmlvbi1mb3JrLXJlcG86YmVmb3JlLFxcbi5pb24tZm9yd2FyZDpiZWZvcmUsXFxuLmlvbi1mdW5uZWw6YmVmb3JlLFxcbi5pb24tZ2Vhci1hOmJlZm9yZSxcXG4uaW9uLWdlYXItYjpiZWZvcmUsXFxuLmlvbi1ncmlkOmJlZm9yZSxcXG4uaW9uLWhhbW1lcjpiZWZvcmUsXFxuLmlvbi1oYXBweTpiZWZvcmUsXFxuLmlvbi1oYXBweS1vdXRsaW5lOmJlZm9yZSxcXG4uaW9uLWhlYWRwaG9uZTpiZWZvcmUsXFxuLmlvbi1oZWFydDpiZWZvcmUsXFxuLmlvbi1oZWFydC1icm9rZW46YmVmb3JlLFxcbi5pb24taGVscDpiZWZvcmUsXFxuLmlvbi1oZWxwLWJ1b3k6YmVmb3JlLFxcbi5pb24taGVscC1jaXJjbGVkOmJlZm9yZSxcXG4uaW9uLWhvbWU6YmVmb3JlLFxcbi5pb24taWNlY3JlYW06YmVmb3JlLFxcbi5pb24taW1hZ2U6YmVmb3JlLFxcbi5pb24taW1hZ2VzOmJlZm9yZSxcXG4uaW9uLWluZm9ybWF0aW9uOmJlZm9yZSxcXG4uaW9uLWluZm9ybWF0aW9uLWNpcmNsZWQ6YmVmb3JlLFxcbi5pb24taW9uaWM6YmVmb3JlLFxcbi5pb24taW9zLWFsYXJtOmJlZm9yZSxcXG4uaW9uLWlvcy1hbGFybS1vdXRsaW5lOmJlZm9yZSxcXG4uaW9uLWlvcy1hbGJ1bXM6YmVmb3JlLFxcbi5pb24taW9zLWFsYnVtcy1vdXRsaW5lOmJlZm9yZSxcXG4uaW9uLWlvcy1hbWVyaWNhbmZvb3RiYWxsOmJlZm9yZSxcXG4uaW9uLWlvcy1hbWVyaWNhbmZvb3RiYWxsLW91dGxpbmU6YmVmb3JlLFxcbi5pb24taW9zLWFuYWx5dGljczpiZWZvcmUsXFxuLmlvbi1pb3MtYW5hbHl0aWNzLW91dGxpbmU6YmVmb3JlLFxcbi5pb24taW9zLWFycm93LWJhY2s6YmVmb3JlLFxcbi5pb24taW9zLWFycm93LWRvd246YmVmb3JlLFxcbi5pb24taW9zLWFycm93LWZvcndhcmQ6YmVmb3JlLFxcbi5pb24taW9zLWFycm93LWxlZnQ6YmVmb3JlLFxcbi5pb24taW9zLWFycm93LXJpZ2h0OmJlZm9yZSxcXG4uaW9uLWlvcy1hcnJvdy10aGluLWRvd246YmVmb3JlLFxcbi5pb24taW9zLWFycm93LXRoaW4tbGVmdDpiZWZvcmUsXFxuLmlvbi1pb3MtYXJyb3ctdGhpbi1yaWdodDpiZWZvcmUsXFxuLmlvbi1pb3MtYXJyb3ctdGhpbi11cDpiZWZvcmUsXFxuLmlvbi1pb3MtYXJyb3ctdXA6YmVmb3JlLFxcbi5pb24taW9zLWF0OmJlZm9yZSxcXG4uaW9uLWlvcy1hdC1vdXRsaW5lOmJlZm9yZSxcXG4uaW9uLWlvcy1iYXJjb2RlOmJlZm9yZSxcXG4uaW9uLWlvcy1iYXJjb2RlLW91dGxpbmU6YmVmb3JlLFxcbi5pb24taW9zLWJhc2ViYWxsOmJlZm9yZSxcXG4uaW9uLWlvcy1iYXNlYmFsbC1vdXRsaW5lOmJlZm9yZSxcXG4uaW9uLWlvcy1iYXNrZXRiYWxsOmJlZm9yZSxcXG4uaW9uLWlvcy1iYXNrZXRiYWxsLW91dGxpbmU6YmVmb3JlLFxcbi5pb24taW9zLWJlbGw6YmVmb3JlLFxcbi5pb24taW9zLWJlbGwtb3V0bGluZTpiZWZvcmUsXFxuLmlvbi1pb3MtYm9keTpiZWZvcmUsXFxuLmlvbi1pb3MtYm9keS1vdXRsaW5lOmJlZm9yZSxcXG4uaW9uLWlvcy1ib2x0OmJlZm9yZSxcXG4uaW9uLWlvcy1ib2x0LW91dGxpbmU6YmVmb3JlLFxcbi5pb24taW9zLWJvb2s6YmVmb3JlLFxcbi5pb24taW9zLWJvb2stb3V0bGluZTpiZWZvcmUsXFxuLmlvbi1pb3MtYm9va21hcmtzOmJlZm9yZSxcXG4uaW9uLWlvcy1ib29rbWFya3Mtb3V0bGluZTpiZWZvcmUsXFxuLmlvbi1pb3MtYm94OmJlZm9yZSxcXG4uaW9uLWlvcy1ib3gtb3V0bGluZTpiZWZvcmUsXFxuLmlvbi1pb3MtYnJpZWZjYXNlOmJlZm9yZSxcXG4uaW9uLWlvcy1icmllZmNhc2Utb3V0bGluZTpiZWZvcmUsXFxuLmlvbi1pb3MtYnJvd3NlcnM6YmVmb3JlLFxcbi5pb24taW9zLWJyb3dzZXJzLW91dGxpbmU6YmVmb3JlLFxcbi5pb24taW9zLWNhbGN1bGF0b3I6YmVmb3JlLFxcbi5pb24taW9zLWNhbGN1bGF0b3Itb3V0bGluZTpiZWZvcmUsXFxuLmlvbi1pb3MtY2FsZW5kYXI6YmVmb3JlLFxcbi5pb24taW9zLWNhbGVuZGFyLW91dGxpbmU6YmVmb3JlLFxcbi5pb24taW9zLWNhbWVyYTpiZWZvcmUsXFxuLmlvbi1pb3MtY2FtZXJhLW91dGxpbmU6YmVmb3JlLFxcbi5pb24taW9zLWNhcnQ6YmVmb3JlLFxcbi5pb24taW9zLWNhcnQtb3V0bGluZTpiZWZvcmUsXFxuLmlvbi1pb3MtY2hhdGJveGVzOmJlZm9yZSxcXG4uaW9uLWlvcy1jaGF0Ym94ZXMtb3V0bGluZTpiZWZvcmUsXFxuLmlvbi1pb3MtY2hhdGJ1YmJsZTpiZWZvcmUsXFxuLmlvbi1pb3MtY2hhdGJ1YmJsZS1vdXRsaW5lOmJlZm9yZSxcXG4uaW9uLWlvcy1jaGVja21hcms6YmVmb3JlLFxcbi5pb24taW9zLWNoZWNrbWFyay1lbXB0eTpiZWZvcmUsXFxuLmlvbi1pb3MtY2hlY2ttYXJrLW91dGxpbmU6YmVmb3JlLFxcbi5pb24taW9zLWNpcmNsZS1maWxsZWQ6YmVmb3JlLFxcbi5pb24taW9zLWNpcmNsZS1vdXRsaW5lOmJlZm9yZSxcXG4uaW9uLWlvcy1jbG9jazpiZWZvcmUsXFxuLmlvbi1pb3MtY2xvY2stb3V0bGluZTpiZWZvcmUsXFxuLmlvbi1pb3MtY2xvc2U6YmVmb3JlLFxcbi5pb24taW9zLWNsb3NlLWVtcHR5OmJlZm9yZSxcXG4uaW9uLWlvcy1jbG9zZS1vdXRsaW5lOmJlZm9yZSxcXG4uaW9uLWlvcy1jbG91ZDpiZWZvcmUsXFxuLmlvbi1pb3MtY2xvdWQtZG93bmxvYWQ6YmVmb3JlLFxcbi5pb24taW9zLWNsb3VkLWRvd25sb2FkLW91dGxpbmU6YmVmb3JlLFxcbi5pb24taW9zLWNsb3VkLW91dGxpbmU6YmVmb3JlLFxcbi5pb24taW9zLWNsb3VkLXVwbG9hZDpiZWZvcmUsXFxuLmlvbi1pb3MtY2xvdWQtdXBsb2FkLW91dGxpbmU6YmVmb3JlLFxcbi5pb24taW9zLWNsb3VkeTpiZWZvcmUsXFxuLmlvbi1pb3MtY2xvdWR5LW5pZ2h0OmJlZm9yZSxcXG4uaW9uLWlvcy1jbG91ZHktbmlnaHQtb3V0bGluZTpiZWZvcmUsXFxuLmlvbi1pb3MtY2xvdWR5LW91dGxpbmU6YmVmb3JlLFxcbi5pb24taW9zLWNvZzpiZWZvcmUsXFxuLmlvbi1pb3MtY29nLW91dGxpbmU6YmVmb3JlLFxcbi5pb24taW9zLWNvbG9yLWZpbHRlcjpiZWZvcmUsXFxuLmlvbi1pb3MtY29sb3ItZmlsdGVyLW91dGxpbmU6YmVmb3JlLFxcbi5pb24taW9zLWNvbG9yLXdhbmQ6YmVmb3JlLFxcbi5pb24taW9zLWNvbG9yLXdhbmQtb3V0bGluZTpiZWZvcmUsXFxuLmlvbi1pb3MtY29tcG9zZTpiZWZvcmUsXFxuLmlvbi1pb3MtY29tcG9zZS1vdXRsaW5lOmJlZm9yZSxcXG4uaW9uLWlvcy1jb250YWN0OmJlZm9yZSxcXG4uaW9uLWlvcy1jb250YWN0LW91dGxpbmU6YmVmb3JlLFxcbi5pb24taW9zLWNvcHk6YmVmb3JlLFxcbi5pb24taW9zLWNvcHktb3V0bGluZTpiZWZvcmUsXFxuLmlvbi1pb3MtY3JvcDpiZWZvcmUsXFxuLmlvbi1pb3MtY3JvcC1zdHJvbmc6YmVmb3JlLFxcbi5pb24taW9zLWRvd25sb2FkOmJlZm9yZSxcXG4uaW9uLWlvcy1kb3dubG9hZC1vdXRsaW5lOmJlZm9yZSxcXG4uaW9uLWlvcy1kcmFnOmJlZm9yZSxcXG4uaW9uLWlvcy1lbWFpbDpiZWZvcmUsXFxuLmlvbi1pb3MtZW1haWwtb3V0bGluZTpiZWZvcmUsXFxuLmlvbi1pb3MtZXllOmJlZm9yZSxcXG4uaW9uLWlvcy1leWUtb3V0bGluZTpiZWZvcmUsXFxuLmlvbi1pb3MtZmFzdGZvcndhcmQ6YmVmb3JlLFxcbi5pb24taW9zLWZhc3Rmb3J3YXJkLW91dGxpbmU6YmVmb3JlLFxcbi5pb24taW9zLWZpbGluZzpiZWZvcmUsXFxuLmlvbi1pb3MtZmlsaW5nLW91dGxpbmU6YmVmb3JlLFxcbi5pb24taW9zLWZpbG06YmVmb3JlLFxcbi5pb24taW9zLWZpbG0tb3V0bGluZTpiZWZvcmUsXFxuLmlvbi1pb3MtZmxhZzpiZWZvcmUsXFxuLmlvbi1pb3MtZmxhZy1vdXRsaW5lOmJlZm9yZSxcXG4uaW9uLWlvcy1mbGFtZTpiZWZvcmUsXFxuLmlvbi1pb3MtZmxhbWUtb3V0bGluZTpiZWZvcmUsXFxuLmlvbi1pb3MtZmxhc2s6YmVmb3JlLFxcbi5pb24taW9zLWZsYXNrLW91dGxpbmU6YmVmb3JlLFxcbi5pb24taW9zLWZsb3dlcjpiZWZvcmUsXFxuLmlvbi1pb3MtZmxvd2VyLW91dGxpbmU6YmVmb3JlLFxcbi5pb24taW9zLWZvbGRlcjpiZWZvcmUsXFxuLmlvbi1pb3MtZm9sZGVyLW91dGxpbmU6YmVmb3JlLFxcbi5pb24taW9zLWZvb3RiYWxsOmJlZm9yZSxcXG4uaW9uLWlvcy1mb290YmFsbC1vdXRsaW5lOmJlZm9yZSxcXG4uaW9uLWlvcy1nYW1lLWNvbnRyb2xsZXItYTpiZWZvcmUsXFxuLmlvbi1pb3MtZ2FtZS1jb250cm9sbGVyLWEtb3V0bGluZTpiZWZvcmUsXFxuLmlvbi1pb3MtZ2FtZS1jb250cm9sbGVyLWI6YmVmb3JlLFxcbi5pb24taW9zLWdhbWUtY29udHJvbGxlci1iLW91dGxpbmU6YmVmb3JlLFxcbi5pb24taW9zLWdlYXI6YmVmb3JlLFxcbi5pb24taW9zLWdlYXItb3V0bGluZTpiZWZvcmUsXFxuLmlvbi1pb3MtZ2xhc3NlczpiZWZvcmUsXFxuLmlvbi1pb3MtZ2xhc3Nlcy1vdXRsaW5lOmJlZm9yZSxcXG4uaW9uLWlvcy1ncmlkLXZpZXc6YmVmb3JlLFxcbi5pb24taW9zLWdyaWQtdmlldy1vdXRsaW5lOmJlZm9yZSxcXG4uaW9uLWlvcy1oZWFydDpiZWZvcmUsXFxuLmlvbi1pb3MtaGVhcnQtb3V0bGluZTpiZWZvcmUsXFxuLmlvbi1pb3MtaGVscDpiZWZvcmUsXFxuLmlvbi1pb3MtaGVscC1lbXB0eTpiZWZvcmUsXFxuLmlvbi1pb3MtaGVscC1vdXRsaW5lOmJlZm9yZSxcXG4uaW9uLWlvcy1ob21lOmJlZm9yZSxcXG4uaW9uLWlvcy1ob21lLW91dGxpbmU6YmVmb3JlLFxcbi5pb24taW9zLWluZmluaXRlOmJlZm9yZSxcXG4uaW9uLWlvcy1pbmZpbml0ZS1vdXRsaW5lOmJlZm9yZSxcXG4uaW9uLWlvcy1pbmZvcm1hdGlvbjpiZWZvcmUsXFxuLmlvbi1pb3MtaW5mb3JtYXRpb24tZW1wdHk6YmVmb3JlLFxcbi5pb24taW9zLWluZm9ybWF0aW9uLW91dGxpbmU6YmVmb3JlLFxcbi5pb24taW9zLWlvbmljLW91dGxpbmU6YmVmb3JlLFxcbi5pb24taW9zLWtleXBhZDpiZWZvcmUsXFxuLmlvbi1pb3Mta2V5cGFkLW91dGxpbmU6YmVmb3JlLFxcbi5pb24taW9zLWxpZ2h0YnVsYjpiZWZvcmUsXFxuLmlvbi1pb3MtbGlnaHRidWxiLW91dGxpbmU6YmVmb3JlLFxcbi5pb24taW9zLWxpc3Q6YmVmb3JlLFxcbi5pb24taW9zLWxpc3Qtb3V0bGluZTpiZWZvcmUsXFxuLmlvbi1pb3MtbG9jYXRpb246YmVmb3JlLFxcbi5pb24taW9zLWxvY2F0aW9uLW91dGxpbmU6YmVmb3JlLFxcbi5pb24taW9zLWxvY2tlZDpiZWZvcmUsXFxuLmlvbi1pb3MtbG9ja2VkLW91dGxpbmU6YmVmb3JlLFxcbi5pb24taW9zLWxvb3A6YmVmb3JlLFxcbi5pb24taW9zLWxvb3Atc3Ryb25nOmJlZm9yZSxcXG4uaW9uLWlvcy1tZWRpY2FsOmJlZm9yZSxcXG4uaW9uLWlvcy1tZWRpY2FsLW91dGxpbmU6YmVmb3JlLFxcbi5pb24taW9zLW1lZGtpdDpiZWZvcmUsXFxuLmlvbi1pb3MtbWVka2l0LW91dGxpbmU6YmVmb3JlLFxcbi5pb24taW9zLW1pYzpiZWZvcmUsXFxuLmlvbi1pb3MtbWljLW9mZjpiZWZvcmUsXFxuLmlvbi1pb3MtbWljLW91dGxpbmU6YmVmb3JlLFxcbi5pb24taW9zLW1pbnVzOmJlZm9yZSxcXG4uaW9uLWlvcy1taW51cy1lbXB0eTpiZWZvcmUsXFxuLmlvbi1pb3MtbWludXMtb3V0bGluZTpiZWZvcmUsXFxuLmlvbi1pb3MtbW9uaXRvcjpiZWZvcmUsXFxuLmlvbi1pb3MtbW9uaXRvci1vdXRsaW5lOmJlZm9yZSxcXG4uaW9uLWlvcy1tb29uOmJlZm9yZSxcXG4uaW9uLWlvcy1tb29uLW91dGxpbmU6YmVmb3JlLFxcbi5pb24taW9zLW1vcmU6YmVmb3JlLFxcbi5pb24taW9zLW1vcmUtb3V0bGluZTpiZWZvcmUsXFxuLmlvbi1pb3MtbXVzaWNhbC1ub3RlOmJlZm9yZSxcXG4uaW9uLWlvcy1tdXNpY2FsLW5vdGVzOmJlZm9yZSxcXG4uaW9uLWlvcy1uYXZpZ2F0ZTpiZWZvcmUsXFxuLmlvbi1pb3MtbmF2aWdhdGUtb3V0bGluZTpiZWZvcmUsXFxuLmlvbi1pb3MtbnV0cml0aW9uOmJlZm9yZSxcXG4uaW9uLWlvcy1udXRyaXRpb24tb3V0bGluZTpiZWZvcmUsXFxuLmlvbi1pb3MtcGFwZXI6YmVmb3JlLFxcbi5pb24taW9zLXBhcGVyLW91dGxpbmU6YmVmb3JlLFxcbi5pb24taW9zLXBhcGVycGxhbmU6YmVmb3JlLFxcbi5pb24taW9zLXBhcGVycGxhbmUtb3V0bGluZTpiZWZvcmUsXFxuLmlvbi1pb3MtcGFydGx5c3Vubnk6YmVmb3JlLFxcbi5pb24taW9zLXBhcnRseXN1bm55LW91dGxpbmU6YmVmb3JlLFxcbi5pb24taW9zLXBhdXNlOmJlZm9yZSxcXG4uaW9uLWlvcy1wYXVzZS1vdXRsaW5lOmJlZm9yZSxcXG4uaW9uLWlvcy1wYXc6YmVmb3JlLFxcbi5pb24taW9zLXBhdy1vdXRsaW5lOmJlZm9yZSxcXG4uaW9uLWlvcy1wZW9wbGU6YmVmb3JlLFxcbi5pb24taW9zLXBlb3BsZS1vdXRsaW5lOmJlZm9yZSxcXG4uaW9uLWlvcy1wZXJzb246YmVmb3JlLFxcbi5pb24taW9zLXBlcnNvbi1vdXRsaW5lOmJlZm9yZSxcXG4uaW9uLWlvcy1wZXJzb25hZGQ6YmVmb3JlLFxcbi5pb24taW9zLXBlcnNvbmFkZC1vdXRsaW5lOmJlZm9yZSxcXG4uaW9uLWlvcy1waG90b3M6YmVmb3JlLFxcbi5pb24taW9zLXBob3Rvcy1vdXRsaW5lOmJlZm9yZSxcXG4uaW9uLWlvcy1waWU6YmVmb3JlLFxcbi5pb24taW9zLXBpZS1vdXRsaW5lOmJlZm9yZSxcXG4uaW9uLWlvcy1waW50OmJlZm9yZSxcXG4uaW9uLWlvcy1waW50LW91dGxpbmU6YmVmb3JlLFxcbi5pb24taW9zLXBsYXk6YmVmb3JlLFxcbi5pb24taW9zLXBsYXktb3V0bGluZTpiZWZvcmUsXFxuLmlvbi1pb3MtcGx1czpiZWZvcmUsXFxuLmlvbi1pb3MtcGx1cy1lbXB0eTpiZWZvcmUsXFxuLmlvbi1pb3MtcGx1cy1vdXRsaW5lOmJlZm9yZSxcXG4uaW9uLWlvcy1wcmljZXRhZzpiZWZvcmUsXFxuLmlvbi1pb3MtcHJpY2V0YWctb3V0bGluZTpiZWZvcmUsXFxuLmlvbi1pb3MtcHJpY2V0YWdzOmJlZm9yZSxcXG4uaW9uLWlvcy1wcmljZXRhZ3Mtb3V0bGluZTpiZWZvcmUsXFxuLmlvbi1pb3MtcHJpbnRlcjpiZWZvcmUsXFxuLmlvbi1pb3MtcHJpbnRlci1vdXRsaW5lOmJlZm9yZSxcXG4uaW9uLWlvcy1wdWxzZTpiZWZvcmUsXFxuLmlvbi1pb3MtcHVsc2Utc3Ryb25nOmJlZm9yZSxcXG4uaW9uLWlvcy1yYWlueTpiZWZvcmUsXFxuLmlvbi1pb3MtcmFpbnktb3V0bGluZTpiZWZvcmUsXFxuLmlvbi1pb3MtcmVjb3JkaW5nOmJlZm9yZSxcXG4uaW9uLWlvcy1yZWNvcmRpbmctb3V0bGluZTpiZWZvcmUsXFxuLmlvbi1pb3MtcmVkbzpiZWZvcmUsXFxuLmlvbi1pb3MtcmVkby1vdXRsaW5lOmJlZm9yZSxcXG4uaW9uLWlvcy1yZWZyZXNoOmJlZm9yZSxcXG4uaW9uLWlvcy1yZWZyZXNoLWVtcHR5OmJlZm9yZSxcXG4uaW9uLWlvcy1yZWZyZXNoLW91dGxpbmU6YmVmb3JlLFxcbi5pb24taW9zLXJlbG9hZDpiZWZvcmUsXFxuLmlvbi1pb3MtcmV2ZXJzZS1jYW1lcmE6YmVmb3JlLFxcbi5pb24taW9zLXJldmVyc2UtY2FtZXJhLW91dGxpbmU6YmVmb3JlLFxcbi5pb24taW9zLXJld2luZDpiZWZvcmUsXFxuLmlvbi1pb3MtcmV3aW5kLW91dGxpbmU6YmVmb3JlLFxcbi5pb24taW9zLXJvc2U6YmVmb3JlLFxcbi5pb24taW9zLXJvc2Utb3V0bGluZTpiZWZvcmUsXFxuLmlvbi1pb3Mtc2VhcmNoOmJlZm9yZSxcXG4uaW9uLWlvcy1zZWFyY2gtc3Ryb25nOmJlZm9yZSxcXG4uaW9uLWlvcy1zZXR0aW5nczpiZWZvcmUsXFxuLmlvbi1pb3Mtc2V0dGluZ3Mtc3Ryb25nOmJlZm9yZSxcXG4uaW9uLWlvcy1zaHVmZmxlOmJlZm9yZSxcXG4uaW9uLWlvcy1zaHVmZmxlLXN0cm9uZzpiZWZvcmUsXFxuLmlvbi1pb3Mtc2tpcGJhY2t3YXJkOmJlZm9yZSxcXG4uaW9uLWlvcy1za2lwYmFja3dhcmQtb3V0bGluZTpiZWZvcmUsXFxuLmlvbi1pb3Mtc2tpcGZvcndhcmQ6YmVmb3JlLFxcbi5pb24taW9zLXNraXBmb3J3YXJkLW91dGxpbmU6YmVmb3JlLFxcbi5pb24taW9zLXNub3d5OmJlZm9yZSxcXG4uaW9uLWlvcy1zcGVlZG9tZXRlcjpiZWZvcmUsXFxuLmlvbi1pb3Mtc3BlZWRvbWV0ZXItb3V0bGluZTpiZWZvcmUsXFxuLmlvbi1pb3Mtc3RhcjpiZWZvcmUsXFxuLmlvbi1pb3Mtc3Rhci1oYWxmOmJlZm9yZSxcXG4uaW9uLWlvcy1zdGFyLW91dGxpbmU6YmVmb3JlLFxcbi5pb24taW9zLXN0b3B3YXRjaDpiZWZvcmUsXFxuLmlvbi1pb3Mtc3RvcHdhdGNoLW91dGxpbmU6YmVmb3JlLFxcbi5pb24taW9zLXN1bm55OmJlZm9yZSxcXG4uaW9uLWlvcy1zdW5ueS1vdXRsaW5lOmJlZm9yZSxcXG4uaW9uLWlvcy10ZWxlcGhvbmU6YmVmb3JlLFxcbi5pb24taW9zLXRlbGVwaG9uZS1vdXRsaW5lOmJlZm9yZSxcXG4uaW9uLWlvcy10ZW5uaXNiYWxsOmJlZm9yZSxcXG4uaW9uLWlvcy10ZW5uaXNiYWxsLW91dGxpbmU6YmVmb3JlLFxcbi5pb24taW9zLXRodW5kZXJzdG9ybTpiZWZvcmUsXFxuLmlvbi1pb3MtdGh1bmRlcnN0b3JtLW91dGxpbmU6YmVmb3JlLFxcbi5pb24taW9zLXRpbWU6YmVmb3JlLFxcbi5pb24taW9zLXRpbWUtb3V0bGluZTpiZWZvcmUsXFxuLmlvbi1pb3MtdGltZXI6YmVmb3JlLFxcbi5pb24taW9zLXRpbWVyLW91dGxpbmU6YmVmb3JlLFxcbi5pb24taW9zLXRvZ2dsZTpiZWZvcmUsXFxuLmlvbi1pb3MtdG9nZ2xlLW91dGxpbmU6YmVmb3JlLFxcbi5pb24taW9zLXRyYXNoOmJlZm9yZSxcXG4uaW9uLWlvcy10cmFzaC1vdXRsaW5lOmJlZm9yZSxcXG4uaW9uLWlvcy11bmRvOmJlZm9yZSxcXG4uaW9uLWlvcy11bmRvLW91dGxpbmU6YmVmb3JlLFxcbi5pb24taW9zLXVubG9ja2VkOmJlZm9yZSxcXG4uaW9uLWlvcy11bmxvY2tlZC1vdXRsaW5lOmJlZm9yZSxcXG4uaW9uLWlvcy11cGxvYWQ6YmVmb3JlLFxcbi5pb24taW9zLXVwbG9hZC1vdXRsaW5lOmJlZm9yZSxcXG4uaW9uLWlvcy12aWRlb2NhbTpiZWZvcmUsXFxuLmlvbi1pb3MtdmlkZW9jYW0tb3V0bGluZTpiZWZvcmUsXFxuLmlvbi1pb3Mtdm9sdW1lLWhpZ2g6YmVmb3JlLFxcbi5pb24taW9zLXZvbHVtZS1sb3c6YmVmb3JlLFxcbi5pb24taW9zLXdpbmVnbGFzczpiZWZvcmUsXFxuLmlvbi1pb3Mtd2luZWdsYXNzLW91dGxpbmU6YmVmb3JlLFxcbi5pb24taW9zLXdvcmxkOmJlZm9yZSxcXG4uaW9uLWlvcy13b3JsZC1vdXRsaW5lOmJlZm9yZSxcXG4uaW9uLWlwYWQ6YmVmb3JlLFxcbi5pb24taXBob25lOmJlZm9yZSxcXG4uaW9uLWlwb2Q6YmVmb3JlLFxcbi5pb24tamV0OmJlZm9yZSxcXG4uaW9uLWtleTpiZWZvcmUsXFxuLmlvbi1rbmlmZTpiZWZvcmUsXFxuLmlvbi1sYXB0b3A6YmVmb3JlLFxcbi5pb24tbGVhZjpiZWZvcmUsXFxuLmlvbi1sZXZlbHM6YmVmb3JlLFxcbi5pb24tbGlnaHRidWxiOmJlZm9yZSxcXG4uaW9uLWxpbms6YmVmb3JlLFxcbi5pb24tbG9hZC1hOmJlZm9yZSxcXG4uaW9uLWxvYWQtYjpiZWZvcmUsXFxuLmlvbi1sb2FkLWM6YmVmb3JlLFxcbi5pb24tbG9hZC1kOmJlZm9yZSxcXG4uaW9uLWxvY2F0aW9uOmJlZm9yZSxcXG4uaW9uLWxvY2stY29tYmluYXRpb246YmVmb3JlLFxcbi5pb24tbG9ja2VkOmJlZm9yZSxcXG4uaW9uLWxvZy1pbjpiZWZvcmUsXFxuLmlvbi1sb2ctb3V0OmJlZm9yZSxcXG4uaW9uLWxvb3A6YmVmb3JlLFxcbi5pb24tbWFnbmV0OmJlZm9yZSxcXG4uaW9uLW1hbGU6YmVmb3JlLFxcbi5pb24tbWFuOmJlZm9yZSxcXG4uaW9uLW1hcDpiZWZvcmUsXFxuLmlvbi1tZWRraXQ6YmVmb3JlLFxcbi5pb24tbWVyZ2U6YmVmb3JlLFxcbi5pb24tbWljLWE6YmVmb3JlLFxcbi5pb24tbWljLWI6YmVmb3JlLFxcbi5pb24tbWljLWM6YmVmb3JlLFxcbi5pb24tbWludXM6YmVmb3JlLFxcbi5pb24tbWludXMtY2lyY2xlZDpiZWZvcmUsXFxuLmlvbi1taW51cy1yb3VuZDpiZWZvcmUsXFxuLmlvbi1tb2RlbC1zOmJlZm9yZSxcXG4uaW9uLW1vbml0b3I6YmVmb3JlLFxcbi5pb24tbW9yZTpiZWZvcmUsXFxuLmlvbi1tb3VzZTpiZWZvcmUsXFxuLmlvbi1tdXNpYy1ub3RlOmJlZm9yZSxcXG4uaW9uLW5hdmljb246YmVmb3JlLFxcbi5pb24tbmF2aWNvbi1yb3VuZDpiZWZvcmUsXFxuLmlvbi1uYXZpZ2F0ZTpiZWZvcmUsXFxuLmlvbi1uZXR3b3JrOmJlZm9yZSxcXG4uaW9uLW5vLXNtb2tpbmc6YmVmb3JlLFxcbi5pb24tbnVjbGVhcjpiZWZvcmUsXFxuLmlvbi1vdXRsZXQ6YmVmb3JlLFxcbi5pb24tcGFpbnRicnVzaDpiZWZvcmUsXFxuLmlvbi1wYWludGJ1Y2tldDpiZWZvcmUsXFxuLmlvbi1wYXBlci1haXJwbGFuZTpiZWZvcmUsXFxuLmlvbi1wYXBlcmNsaXA6YmVmb3JlLFxcbi5pb24tcGF1c2U6YmVmb3JlLFxcbi5pb24tcGVyc29uOmJlZm9yZSxcXG4uaW9uLXBlcnNvbi1hZGQ6YmVmb3JlLFxcbi5pb24tcGVyc29uLXN0YWxrZXI6YmVmb3JlLFxcbi5pb24tcGllLWdyYXBoOmJlZm9yZSxcXG4uaW9uLXBpbjpiZWZvcmUsXFxuLmlvbi1waW5wb2ludDpiZWZvcmUsXFxuLmlvbi1waXp6YTpiZWZvcmUsXFxuLmlvbi1wbGFuZTpiZWZvcmUsXFxuLmlvbi1wbGFuZXQ6YmVmb3JlLFxcbi5pb24tcGxheTpiZWZvcmUsXFxuLmlvbi1wbGF5c3RhdGlvbjpiZWZvcmUsXFxuLmlvbi1wbHVzOmJlZm9yZSxcXG4uaW9uLXBsdXMtY2lyY2xlZDpiZWZvcmUsXFxuLmlvbi1wbHVzLXJvdW5kOmJlZm9yZSxcXG4uaW9uLXBvZGl1bTpiZWZvcmUsXFxuLmlvbi1wb3VuZDpiZWZvcmUsXFxuLmlvbi1wb3dlcjpiZWZvcmUsXFxuLmlvbi1wcmljZXRhZzpiZWZvcmUsXFxuLmlvbi1wcmljZXRhZ3M6YmVmb3JlLFxcbi5pb24tcHJpbnRlcjpiZWZvcmUsXFxuLmlvbi1wdWxsLXJlcXVlc3Q6YmVmb3JlLFxcbi5pb24tcXItc2Nhbm5lcjpiZWZvcmUsXFxuLmlvbi1xdW90ZTpiZWZvcmUsXFxuLmlvbi1yYWRpby13YXZlczpiZWZvcmUsXFxuLmlvbi1yZWNvcmQ6YmVmb3JlLFxcbi5pb24tcmVmcmVzaDpiZWZvcmUsXFxuLmlvbi1yZXBseTpiZWZvcmUsXFxuLmlvbi1yZXBseS1hbGw6YmVmb3JlLFxcbi5pb24tcmliYm9uLWE6YmVmb3JlLFxcbi5pb24tcmliYm9uLWI6YmVmb3JlLFxcbi5pb24tc2FkOmJlZm9yZSxcXG4uaW9uLXNhZC1vdXRsaW5lOmJlZm9yZSxcXG4uaW9uLXNjaXNzb3JzOmJlZm9yZSxcXG4uaW9uLXNlYXJjaDpiZWZvcmUsXFxuLmlvbi1zZXR0aW5nczpiZWZvcmUsXFxuLmlvbi1zaGFyZTpiZWZvcmUsXFxuLmlvbi1zaHVmZmxlOmJlZm9yZSxcXG4uaW9uLXNraXAtYmFja3dhcmQ6YmVmb3JlLFxcbi5pb24tc2tpcC1mb3J3YXJkOmJlZm9yZSxcXG4uaW9uLXNvY2lhbC1hbmRyb2lkOmJlZm9yZSxcXG4uaW9uLXNvY2lhbC1hbmRyb2lkLW91dGxpbmU6YmVmb3JlLFxcbi5pb24tc29jaWFsLWFuZ3VsYXI6YmVmb3JlLFxcbi5pb24tc29jaWFsLWFuZ3VsYXItb3V0bGluZTpiZWZvcmUsXFxuLmlvbi1zb2NpYWwtYXBwbGU6YmVmb3JlLFxcbi5pb24tc29jaWFsLWFwcGxlLW91dGxpbmU6YmVmb3JlLFxcbi5pb24tc29jaWFsLWJpdGNvaW46YmVmb3JlLFxcbi5pb24tc29jaWFsLWJpdGNvaW4tb3V0bGluZTpiZWZvcmUsXFxuLmlvbi1zb2NpYWwtYnVmZmVyOmJlZm9yZSxcXG4uaW9uLXNvY2lhbC1idWZmZXItb3V0bGluZTpiZWZvcmUsXFxuLmlvbi1zb2NpYWwtY2hyb21lOmJlZm9yZSxcXG4uaW9uLXNvY2lhbC1jaHJvbWUtb3V0bGluZTpiZWZvcmUsXFxuLmlvbi1zb2NpYWwtY29kZXBlbjpiZWZvcmUsXFxuLmlvbi1zb2NpYWwtY29kZXBlbi1vdXRsaW5lOmJlZm9yZSxcXG4uaW9uLXNvY2lhbC1jc3MzOmJlZm9yZSxcXG4uaW9uLXNvY2lhbC1jc3MzLW91dGxpbmU6YmVmb3JlLFxcbi5pb24tc29jaWFsLWRlc2lnbmVybmV3czpiZWZvcmUsXFxuLmlvbi1zb2NpYWwtZGVzaWduZXJuZXdzLW91dGxpbmU6YmVmb3JlLFxcbi5pb24tc29jaWFsLWRyaWJiYmxlOmJlZm9yZSxcXG4uaW9uLXNvY2lhbC1kcmliYmJsZS1vdXRsaW5lOmJlZm9yZSxcXG4uaW9uLXNvY2lhbC1kcm9wYm94OmJlZm9yZSxcXG4uaW9uLXNvY2lhbC1kcm9wYm94LW91dGxpbmU6YmVmb3JlLFxcbi5pb24tc29jaWFsLWV1cm86YmVmb3JlLFxcbi5pb24tc29jaWFsLWV1cm8tb3V0bGluZTpiZWZvcmUsXFxuLmlvbi1zb2NpYWwtZmFjZWJvb2s6YmVmb3JlLFxcbi5pb24tc29jaWFsLWZhY2Vib29rLW91dGxpbmU6YmVmb3JlLFxcbi5pb24tc29jaWFsLWZvdXJzcXVhcmU6YmVmb3JlLFxcbi5pb24tc29jaWFsLWZvdXJzcXVhcmUtb3V0bGluZTpiZWZvcmUsXFxuLmlvbi1zb2NpYWwtZnJlZWJzZC1kZXZpbDpiZWZvcmUsXFxuLmlvbi1zb2NpYWwtZ2l0aHViOmJlZm9yZSxcXG4uaW9uLXNvY2lhbC1naXRodWItb3V0bGluZTpiZWZvcmUsXFxuLmlvbi1zb2NpYWwtZ29vZ2xlOmJlZm9yZSxcXG4uaW9uLXNvY2lhbC1nb29nbGUtb3V0bGluZTpiZWZvcmUsXFxuLmlvbi1zb2NpYWwtZ29vZ2xlcGx1czpiZWZvcmUsXFxuLmlvbi1zb2NpYWwtZ29vZ2xlcGx1cy1vdXRsaW5lOmJlZm9yZSxcXG4uaW9uLXNvY2lhbC1oYWNrZXJuZXdzOmJlZm9yZSxcXG4uaW9uLXNvY2lhbC1oYWNrZXJuZXdzLW91dGxpbmU6YmVmb3JlLFxcbi5pb24tc29jaWFsLWh0bWw1OmJlZm9yZSxcXG4uaW9uLXNvY2lhbC1odG1sNS1vdXRsaW5lOmJlZm9yZSxcXG4uaW9uLXNvY2lhbC1pbnN0YWdyYW06YmVmb3JlLFxcbi5pb24tc29jaWFsLWluc3RhZ3JhbS1vdXRsaW5lOmJlZm9yZSxcXG4uaW9uLXNvY2lhbC1qYXZhc2NyaXB0OmJlZm9yZSxcXG4uaW9uLXNvY2lhbC1qYXZhc2NyaXB0LW91dGxpbmU6YmVmb3JlLFxcbi5pb24tc29jaWFsLWxpbmtlZGluOmJlZm9yZSxcXG4uaW9uLXNvY2lhbC1saW5rZWRpbi1vdXRsaW5lOmJlZm9yZSxcXG4uaW9uLXNvY2lhbC1tYXJrZG93bjpiZWZvcmUsXFxuLmlvbi1zb2NpYWwtbm9kZWpzOmJlZm9yZSxcXG4uaW9uLXNvY2lhbC1vY3RvY2F0OmJlZm9yZSxcXG4uaW9uLXNvY2lhbC1waW50ZXJlc3Q6YmVmb3JlLFxcbi5pb24tc29jaWFsLXBpbnRlcmVzdC1vdXRsaW5lOmJlZm9yZSxcXG4uaW9uLXNvY2lhbC1weXRob246YmVmb3JlLFxcbi5pb24tc29jaWFsLXJlZGRpdDpiZWZvcmUsXFxuLmlvbi1zb2NpYWwtcmVkZGl0LW91dGxpbmU6YmVmb3JlLFxcbi5pb24tc29jaWFsLXJzczpiZWZvcmUsXFxuLmlvbi1zb2NpYWwtcnNzLW91dGxpbmU6YmVmb3JlLFxcbi5pb24tc29jaWFsLXNhc3M6YmVmb3JlLFxcbi5pb24tc29jaWFsLXNreXBlOmJlZm9yZSxcXG4uaW9uLXNvY2lhbC1za3lwZS1vdXRsaW5lOmJlZm9yZSxcXG4uaW9uLXNvY2lhbC1zbmFwY2hhdDpiZWZvcmUsXFxuLmlvbi1zb2NpYWwtc25hcGNoYXQtb3V0bGluZTpiZWZvcmUsXFxuLmlvbi1zb2NpYWwtdHVtYmxyOmJlZm9yZSxcXG4uaW9uLXNvY2lhbC10dW1ibHItb3V0bGluZTpiZWZvcmUsXFxuLmlvbi1zb2NpYWwtdHV4OmJlZm9yZSxcXG4uaW9uLXNvY2lhbC10d2l0Y2g6YmVmb3JlLFxcbi5pb24tc29jaWFsLXR3aXRjaC1vdXRsaW5lOmJlZm9yZSxcXG4uaW9uLXNvY2lhbC10d2l0dGVyOmJlZm9yZSxcXG4uaW9uLXNvY2lhbC10d2l0dGVyLW91dGxpbmU6YmVmb3JlLFxcbi5pb24tc29jaWFsLXVzZDpiZWZvcmUsXFxuLmlvbi1zb2NpYWwtdXNkLW91dGxpbmU6YmVmb3JlLFxcbi5pb24tc29jaWFsLXZpbWVvOmJlZm9yZSxcXG4uaW9uLXNvY2lhbC12aW1lby1vdXRsaW5lOmJlZm9yZSxcXG4uaW9uLXNvY2lhbC13aGF0c2FwcDpiZWZvcmUsXFxuLmlvbi1zb2NpYWwtd2hhdHNhcHAtb3V0bGluZTpiZWZvcmUsXFxuLmlvbi1zb2NpYWwtd2luZG93czpiZWZvcmUsXFxuLmlvbi1zb2NpYWwtd2luZG93cy1vdXRsaW5lOmJlZm9yZSxcXG4uaW9uLXNvY2lhbC13b3JkcHJlc3M6YmVmb3JlLFxcbi5pb24tc29jaWFsLXdvcmRwcmVzcy1vdXRsaW5lOmJlZm9yZSxcXG4uaW9uLXNvY2lhbC15YWhvbzpiZWZvcmUsXFxuLmlvbi1zb2NpYWwteWFob28tb3V0bGluZTpiZWZvcmUsXFxuLmlvbi1zb2NpYWwteWVuOmJlZm9yZSxcXG4uaW9uLXNvY2lhbC15ZW4tb3V0bGluZTpiZWZvcmUsXFxuLmlvbi1zb2NpYWwteW91dHViZTpiZWZvcmUsXFxuLmlvbi1zb2NpYWwteW91dHViZS1vdXRsaW5lOmJlZm9yZSxcXG4uaW9uLXNvdXAtY2FuOmJlZm9yZSxcXG4uaW9uLXNvdXAtY2FuLW91dGxpbmU6YmVmb3JlLFxcbi5pb24tc3BlYWtlcnBob25lOmJlZm9yZSxcXG4uaW9uLXNwZWVkb21ldGVyOmJlZm9yZSxcXG4uaW9uLXNwb29uOmJlZm9yZSxcXG4uaW9uLXN0YXI6YmVmb3JlLFxcbi5pb24tc3RhdHMtYmFyczpiZWZvcmUsXFxuLmlvbi1zdGVhbTpiZWZvcmUsXFxuLmlvbi1zdG9wOmJlZm9yZSxcXG4uaW9uLXRoZXJtb21ldGVyOmJlZm9yZSxcXG4uaW9uLXRodW1ic2Rvd246YmVmb3JlLFxcbi5pb24tdGh1bWJzdXA6YmVmb3JlLFxcbi5pb24tdG9nZ2xlOmJlZm9yZSxcXG4uaW9uLXRvZ2dsZS1maWxsZWQ6YmVmb3JlLFxcbi5pb24tdHJhbnNnZW5kZXI6YmVmb3JlLFxcbi5pb24tdHJhc2gtYTpiZWZvcmUsXFxuLmlvbi10cmFzaC1iOmJlZm9yZSxcXG4uaW9uLXRyb3BoeTpiZWZvcmUsXFxuLmlvbi10c2hpcnQ6YmVmb3JlLFxcbi5pb24tdHNoaXJ0LW91dGxpbmU6YmVmb3JlLFxcbi5pb24tdW1icmVsbGE6YmVmb3JlLFxcbi5pb24tdW5pdmVyc2l0eTpiZWZvcmUsXFxuLmlvbi11bmxvY2tlZDpiZWZvcmUsXFxuLmlvbi11cGxvYWQ6YmVmb3JlLFxcbi5pb24tdXNiOmJlZm9yZSxcXG4uaW9uLXZpZGVvY2FtZXJhOmJlZm9yZSxcXG4uaW9uLXZvbHVtZS1oaWdoOmJlZm9yZSxcXG4uaW9uLXZvbHVtZS1sb3c6YmVmb3JlLFxcbi5pb24tdm9sdW1lLW1lZGl1bTpiZWZvcmUsXFxuLmlvbi12b2x1bWUtbXV0ZTpiZWZvcmUsXFxuLmlvbi13YW5kOmJlZm9yZSxcXG4uaW9uLXdhdGVyZHJvcDpiZWZvcmUsXFxuLmlvbi13aWZpOmJlZm9yZSxcXG4uaW9uLXdpbmVnbGFzczpiZWZvcmUsXFxuLmlvbi13b21hbjpiZWZvcmUsXFxuLmlvbi13cmVuY2g6YmVmb3JlLFxcbi5pb24teGJveDpiZWZvcmUge1xcbi8qIGZvbnQtc2l6ZTogMTZweDsgKi9cXG4gIGZvbnQtc2l6ZTogMS4xNDI4NTcxNDI4NTcxNDNyZW07XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBmb250LWZhbWlseTogXFxcIklvbmljb25zXFxcIjtcXG4gIHNwZWFrOiBub25lO1xcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXG4gIGZvbnQtdmFyaWFudDogbm9ybWFsO1xcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XFxuICB0ZXh0LXJlbmRlcmluZzogYXV0bztcXG4vKiBsaW5lLWhlaWdodDogMTsgICovXFxuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcXG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7XFxufVxcbi5pb24tYWxlcnQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjEwMVxcXCI7XFxufVxcbi5pb24tYWxlcnQtY2lyY2xlZDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMTAwXFxcIjtcXG59XFxuLmlvbi1hbmRyb2lkLWFkZDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMkM3XFxcIjtcXG59XFxuLmlvbi1hbmRyb2lkLWFkZC1jaXJjbGU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjM1OVxcXCI7XFxufVxcbi5pb24tYW5kcm9pZC1hbGFybS1jbG9jazpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMzVBXFxcIjtcXG59XFxuLmlvbi1hbmRyb2lkLWFsZXJ0OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYzNUJcXFwiO1xcbn1cXG4uaW9uLWFuZHJvaWQtYXBwczpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMzVDXFxcIjtcXG59XFxuLmlvbi1hbmRyb2lkLWFyY2hpdmU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjJDOVxcXCI7XFxufVxcbi5pb24tYW5kcm9pZC1hcnJvdy1iYWNrOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYyQ0FcXFwiO1xcbn1cXG4uaW9uLWFuZHJvaWQtYXJyb3ctZG93bjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMzVEXFxcIjtcXG59XFxuLmlvbi1hbmRyb2lkLWFycm93LWRyb3Bkb3duOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYzNUZcXFwiO1xcbn1cXG4uaW9uLWFuZHJvaWQtYXJyb3ctZHJvcGRvd24tY2lyY2xlOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYzNUVcXFwiO1xcbn1cXG4uaW9uLWFuZHJvaWQtYXJyb3ctZHJvcGxlZnQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjM2MVxcXCI7XFxufVxcbi5pb24tYW5kcm9pZC1hcnJvdy1kcm9wbGVmdC1jaXJjbGU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjM2MFxcXCI7XFxufVxcbi5pb24tYW5kcm9pZC1hcnJvdy1kcm9wcmlnaHQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjM2M1xcXCI7XFxufVxcbi5pb24tYW5kcm9pZC1hcnJvdy1kcm9wcmlnaHQtY2lyY2xlOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYzNjJcXFwiO1xcbn1cXG4uaW9uLWFuZHJvaWQtYXJyb3ctZHJvcHVwOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYzNjVcXFwiO1xcbn1cXG4uaW9uLWFuZHJvaWQtYXJyb3ctZHJvcHVwLWNpcmNsZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMzY0XFxcIjtcXG59XFxuLmlvbi1hbmRyb2lkLWFycm93LWZvcndhcmQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjMwRlxcXCI7XFxufVxcbi5pb24tYW5kcm9pZC1hcnJvdy11cDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMzY2XFxcIjtcXG59XFxuLmlvbi1hbmRyb2lkLWF0dGFjaDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMzY3XFxcIjtcXG59XFxuLmlvbi1hbmRyb2lkLWJhcjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMzY4XFxcIjtcXG59XFxuLmlvbi1hbmRyb2lkLWJpY3ljbGU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjM2OVxcXCI7XFxufVxcbi5pb24tYW5kcm9pZC1ib2F0OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYzNkFcXFwiO1xcbn1cXG4uaW9uLWFuZHJvaWQtYm9va21hcms6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjM2QlxcXCI7XFxufVxcbi5pb24tYW5kcm9pZC1idWxiOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYzNkNcXFwiO1xcbn1cXG4uaW9uLWFuZHJvaWQtYnVzOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYzNkRcXFwiO1xcbn1cXG4uaW9uLWFuZHJvaWQtY2FsZW5kYXI6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjJEMVxcXCI7XFxufVxcbi5pb24tYW5kcm9pZC1jYWxsOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYyRDJcXFwiO1xcbn1cXG4uaW9uLWFuZHJvaWQtY2FtZXJhOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYyRDNcXFwiO1xcbn1cXG4uaW9uLWFuZHJvaWQtY2FuY2VsOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYzNkVcXFwiO1xcbn1cXG4uaW9uLWFuZHJvaWQtY2FyOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYzNkZcXFwiO1xcbn1cXG4uaW9uLWFuZHJvaWQtY2FydDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMzcwXFxcIjtcXG59XFxuLmlvbi1hbmRyb2lkLWNoYXQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjJENFxcXCI7XFxufVxcbi5pb24tYW5kcm9pZC1jaGVja2JveDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMzc0XFxcIjtcXG59XFxuLmlvbi1hbmRyb2lkLWNoZWNrYm94LWJsYW5rOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYzNzFcXFwiO1xcbn1cXG4uaW9uLWFuZHJvaWQtY2hlY2tib3gtb3V0bGluZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMzczXFxcIjtcXG59XFxuLmlvbi1hbmRyb2lkLWNoZWNrYm94LW91dGxpbmUtYmxhbms6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjM3MlxcXCI7XFxufVxcbi5pb24tYW5kcm9pZC1jaGVja21hcmstY2lyY2xlOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYzNzVcXFwiO1xcbn1cXG4uaW9uLWFuZHJvaWQtY2xpcGJvYXJkOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYzNzZcXFwiO1xcbn1cXG4uaW9uLWFuZHJvaWQtY2xvc2U6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjJEN1xcXCI7XFxufVxcbi5pb24tYW5kcm9pZC1jbG91ZDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMzdBXFxcIjtcXG59XFxuLmlvbi1hbmRyb2lkLWNsb3VkLWNpcmNsZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMzc3XFxcIjtcXG59XFxuLmlvbi1hbmRyb2lkLWNsb3VkLWRvbmU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjM3OFxcXCI7XFxufVxcbi5pb24tYW5kcm9pZC1jbG91ZC1vdXRsaW5lOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYzNzlcXFwiO1xcbn1cXG4uaW9uLWFuZHJvaWQtY29sb3ItcGFsZXR0ZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMzdCXFxcIjtcXG59XFxuLmlvbi1hbmRyb2lkLWNvbXBhc3M6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjM3Q1xcXCI7XFxufVxcbi5pb24tYW5kcm9pZC1jb250YWN0OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYyRDhcXFwiO1xcbn1cXG4uaW9uLWFuZHJvaWQtY29udGFjdHM6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjJEOVxcXCI7XFxufVxcbi5pb24tYW5kcm9pZC1jb250cmFjdDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMzdEXFxcIjtcXG59XFxuLmlvbi1hbmRyb2lkLWNyZWF0ZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMzdFXFxcIjtcXG59XFxuLmlvbi1hbmRyb2lkLWRlbGV0ZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMzdGXFxcIjtcXG59XFxuLmlvbi1hbmRyb2lkLWRlc2t0b3A6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjM4MFxcXCI7XFxufVxcbi5pb24tYW5kcm9pZC1kb2N1bWVudDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMzgxXFxcIjtcXG59XFxuLmlvbi1hbmRyb2lkLWRvbmU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjM4M1xcXCI7XFxufVxcbi5pb24tYW5kcm9pZC1kb25lLWFsbDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMzgyXFxcIjtcXG59XFxuLmlvbi1hbmRyb2lkLWRvd25sb2FkOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYyRERcXFwiO1xcbn1cXG4uaW9uLWFuZHJvaWQtZHJhZnRzOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYzODRcXFwiO1xcbn1cXG4uaW9uLWFuZHJvaWQtZXhpdDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMzg1XFxcIjtcXG59XFxuLmlvbi1hbmRyb2lkLWV4cGFuZDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMzg2XFxcIjtcXG59XFxuLmlvbi1hbmRyb2lkLWZhdm9yaXRlOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYzODhcXFwiO1xcbn1cXG4uaW9uLWFuZHJvaWQtZmF2b3JpdGUtb3V0bGluZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMzg3XFxcIjtcXG59XFxuLmlvbi1hbmRyb2lkLWZpbG06YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjM4OVxcXCI7XFxufVxcbi5pb24tYW5kcm9pZC1mb2xkZXI6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjJFMFxcXCI7XFxufVxcbi5pb24tYW5kcm9pZC1mb2xkZXItb3BlbjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMzhBXFxcIjtcXG59XFxuLmlvbi1hbmRyb2lkLWZ1bm5lbDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMzhCXFxcIjtcXG59XFxuLmlvbi1hbmRyb2lkLWdsb2JlOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYzOENcXFwiO1xcbn1cXG4uaW9uLWFuZHJvaWQtaGFuZDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMkUzXFxcIjtcXG59XFxuLmlvbi1hbmRyb2lkLWhhbmdvdXQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjM4RFxcXCI7XFxufVxcbi5pb24tYW5kcm9pZC1oYXBweTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMzhFXFxcIjtcXG59XFxuLmlvbi1hbmRyb2lkLWhvbWU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjM4RlxcXCI7XFxufVxcbi5pb24tYW5kcm9pZC1pbWFnZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMkU0XFxcIjtcXG59XFxuLmlvbi1hbmRyb2lkLWxhcHRvcDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMzkwXFxcIjtcXG59XFxuLmlvbi1hbmRyb2lkLWxpc3Q6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjM5MVxcXCI7XFxufVxcbi5pb24tYW5kcm9pZC1sb2NhdGU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjJFOVxcXCI7XFxufVxcbi5pb24tYW5kcm9pZC1sb2NrOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYzOTJcXFwiO1xcbn1cXG4uaW9uLWFuZHJvaWQtbWFpbDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMkVCXFxcIjtcXG59XFxuLmlvbi1hbmRyb2lkLW1hcDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMzkzXFxcIjtcXG59XFxuLmlvbi1hbmRyb2lkLW1lbnU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjM5NFxcXCI7XFxufVxcbi5pb24tYW5kcm9pZC1taWNyb3Bob25lOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYyRUNcXFwiO1xcbn1cXG4uaW9uLWFuZHJvaWQtbWljcm9waG9uZS1vZmY6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjM5NVxcXCI7XFxufVxcbi5pb24tYW5kcm9pZC1tb3JlLWhvcml6b250YWw6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjM5NlxcXCI7XFxufVxcbi5pb24tYW5kcm9pZC1tb3JlLXZlcnRpY2FsOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYzOTdcXFwiO1xcbn1cXG4uaW9uLWFuZHJvaWQtbmF2aWdhdGU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjM5OFxcXCI7XFxufVxcbi5pb24tYW5kcm9pZC1ub3RpZmljYXRpb25zOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYzOUJcXFwiO1xcbn1cXG4uaW9uLWFuZHJvaWQtbm90aWZpY2F0aW9ucy1ub25lOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYzOTlcXFwiO1xcbn1cXG4uaW9uLWFuZHJvaWQtbm90aWZpY2F0aW9ucy1vZmY6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjM5QVxcXCI7XFxufVxcbi5pb24tYW5kcm9pZC1vcGVuOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYzOUNcXFwiO1xcbn1cXG4uaW9uLWFuZHJvaWQtb3B0aW9uczpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMzlEXFxcIjtcXG59XFxuLmlvbi1hbmRyb2lkLXBlb3BsZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMzlFXFxcIjtcXG59XFxuLmlvbi1hbmRyb2lkLXBlcnNvbjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGM0EwXFxcIjtcXG59XFxuLmlvbi1hbmRyb2lkLXBlcnNvbi1hZGQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjM5RlxcXCI7XFxufVxcbi5pb24tYW5kcm9pZC1waG9uZS1sYW5kc2NhcGU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjNBMVxcXCI7XFxufVxcbi5pb24tYW5kcm9pZC1waG9uZS1wb3J0cmFpdDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGM0EyXFxcIjtcXG59XFxuLmlvbi1hbmRyb2lkLXBpbjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGM0EzXFxcIjtcXG59XFxuLmlvbi1hbmRyb2lkLXBsYW5lOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYzQTRcXFwiO1xcbn1cXG4uaW9uLWFuZHJvaWQtcGxheXN0b3JlOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYyRjBcXFwiO1xcbn1cXG4uaW9uLWFuZHJvaWQtcHJpbnQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjNBNVxcXCI7XFxufVxcbi5pb24tYW5kcm9pZC1yYWRpby1idXR0b24tb2ZmOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYzQTZcXFwiO1xcbn1cXG4uaW9uLWFuZHJvaWQtcmFkaW8tYnV0dG9uLW9uOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYzQTdcXFwiO1xcbn1cXG4uaW9uLWFuZHJvaWQtcmVmcmVzaDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGM0E4XFxcIjtcXG59XFxuLmlvbi1hbmRyb2lkLXJlbW92ZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMkY0XFxcIjtcXG59XFxuLmlvbi1hbmRyb2lkLXJlbW92ZS1jaXJjbGU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjNBOVxcXCI7XFxufVxcbi5pb24tYW5kcm9pZC1yZXN0YXVyYW50OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYzQUFcXFwiO1xcbn1cXG4uaW9uLWFuZHJvaWQtc2FkOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYzQUJcXFwiO1xcbn1cXG4uaW9uLWFuZHJvaWQtc2VhcmNoOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYyRjVcXFwiO1xcbn1cXG4uaW9uLWFuZHJvaWQtc2VuZDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMkY2XFxcIjtcXG59XFxuLmlvbi1hbmRyb2lkLXNldHRpbmdzOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYyRjdcXFwiO1xcbn1cXG4uaW9uLWFuZHJvaWQtc2hhcmU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjJGOFxcXCI7XFxufVxcbi5pb24tYW5kcm9pZC1zaGFyZS1hbHQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjNBQ1xcXCI7XFxufVxcbi5pb24tYW5kcm9pZC1zdGFyOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYyRkNcXFwiO1xcbn1cXG4uaW9uLWFuZHJvaWQtc3Rhci1oYWxmOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYzQURcXFwiO1xcbn1cXG4uaW9uLWFuZHJvaWQtc3Rhci1vdXRsaW5lOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYzQUVcXFwiO1xcbn1cXG4uaW9uLWFuZHJvaWQtc3RvcHdhdGNoOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYyRkRcXFwiO1xcbn1cXG4uaW9uLWFuZHJvaWQtc3Vid2F5OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYzQUZcXFwiO1xcbn1cXG4uaW9uLWFuZHJvaWQtc3Vubnk6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjNCMFxcXCI7XFxufVxcbi5pb24tYW5kcm9pZC1zeW5jOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYzQjFcXFwiO1xcbn1cXG4uaW9uLWFuZHJvaWQtdGV4dHNtczpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGM0IyXFxcIjtcXG59XFxuLmlvbi1hbmRyb2lkLXRpbWU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjNCM1xcXCI7XFxufVxcbi5pb24tYW5kcm9pZC10cmFpbjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGM0I0XFxcIjtcXG59XFxuLmlvbi1hbmRyb2lkLXVubG9jazpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGM0I1XFxcIjtcXG59XFxuLmlvbi1hbmRyb2lkLXVwbG9hZDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGM0I2XFxcIjtcXG59XFxuLmlvbi1hbmRyb2lkLXZvbHVtZS1kb3duOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYzQjdcXFwiO1xcbn1cXG4uaW9uLWFuZHJvaWQtdm9sdW1lLW11dGU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjNCOFxcXCI7XFxufVxcbi5pb24tYW5kcm9pZC12b2x1bWUtb2ZmOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYzQjlcXFwiO1xcbn1cXG4uaW9uLWFuZHJvaWQtdm9sdW1lLXVwOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYzQkFcXFwiO1xcbn1cXG4uaW9uLWFuZHJvaWQtd2FsazpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGM0JCXFxcIjtcXG59XFxuLmlvbi1hbmRyb2lkLXdhcm5pbmc6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjNCQ1xcXCI7XFxufVxcbi5pb24tYW5kcm9pZC13YXRjaDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGM0JEXFxcIjtcXG59XFxuLmlvbi1hbmRyb2lkLXdpZmk6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjMwNVxcXCI7XFxufVxcbi5pb24tYXBlcnR1cmU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjMxM1xcXCI7XFxufVxcbi5pb24tYXJjaGl2ZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMTAyXFxcIjtcXG59XFxuLmlvbi1hcnJvdy1kb3duLWE6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjEwM1xcXCI7XFxufVxcbi5pb24tYXJyb3ctZG93bi1iOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYxMDRcXFwiO1xcbn1cXG4uaW9uLWFycm93LWRvd24tYzpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMTA1XFxcIjtcXG59XFxuLmlvbi1hcnJvdy1leHBhbmQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjI1RVxcXCI7XFxufVxcbi5pb24tYXJyb3ctZ3JhcGgtZG93bi1sZWZ0OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYyNUZcXFwiO1xcbn1cXG4uaW9uLWFycm93LWdyYXBoLWRvd24tcmlnaHQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjI2MFxcXCI7XFxufVxcbi5pb24tYXJyb3ctZ3JhcGgtdXAtbGVmdDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMjYxXFxcIjtcXG59XFxuLmlvbi1hcnJvdy1ncmFwaC11cC1yaWdodDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMjYyXFxcIjtcXG59XFxuLmlvbi1hcnJvdy1sZWZ0LWE6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjEwNlxcXCI7XFxufVxcbi5pb24tYXJyb3ctbGVmdC1iOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYxMDdcXFwiO1xcbn1cXG4uaW9uLWFycm93LWxlZnQtYzpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMTA4XFxcIjtcXG59XFxuLmlvbi1hcnJvdy1tb3ZlOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYyNjNcXFwiO1xcbn1cXG4uaW9uLWFycm93LXJlc2l6ZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMjY0XFxcIjtcXG59XFxuLmlvbi1hcnJvdy1yZXR1cm4tbGVmdDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMjY1XFxcIjtcXG59XFxuLmlvbi1hcnJvdy1yZXR1cm4tcmlnaHQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjI2NlxcXCI7XFxufVxcbi5pb24tYXJyb3ctcmlnaHQtYTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMTA5XFxcIjtcXG59XFxuLmlvbi1hcnJvdy1yaWdodC1iOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYxMEFcXFwiO1xcbn1cXG4uaW9uLWFycm93LXJpZ2h0LWM6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjEwQlxcXCI7XFxufVxcbi5pb24tYXJyb3ctc2hyaW5rOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYyNjdcXFwiO1xcbn1cXG4uaW9uLWFycm93LXN3YXA6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjI2OFxcXCI7XFxufVxcbi5pb24tYXJyb3ctdXAtYTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMTBDXFxcIjtcXG59XFxuLmlvbi1hcnJvdy11cC1iOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYxMERcXFwiO1xcbn1cXG4uaW9uLWFycm93LXVwLWM6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjEwRVxcXCI7XFxufVxcbi5pb24tYXN0ZXJpc2s6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjMxNFxcXCI7XFxufVxcbi5pb24tYXQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjEwRlxcXCI7XFxufVxcbi5pb24tYmFja3NwYWNlOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYzQkZcXFwiO1xcbn1cXG4uaW9uLWJhY2tzcGFjZS1vdXRsaW5lOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYzQkVcXFwiO1xcbn1cXG4uaW9uLWJhZzpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMTEwXFxcIjtcXG59XFxuLmlvbi1iYXR0ZXJ5LWNoYXJnaW5nOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYxMTFcXFwiO1xcbn1cXG4uaW9uLWJhdHRlcnktZW1wdHk6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjExMlxcXCI7XFxufVxcbi5pb24tYmF0dGVyeS1mdWxsOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYxMTNcXFwiO1xcbn1cXG4uaW9uLWJhdHRlcnktaGFsZjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMTE0XFxcIjtcXG59XFxuLmlvbi1iYXR0ZXJ5LWxvdzpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMTE1XFxcIjtcXG59XFxuLmlvbi1iZWFrZXI6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjI2OVxcXCI7XFxufVxcbi5pb24tYmVlcjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMjZBXFxcIjtcXG59XFxuLmlvbi1ibHVldG9vdGg6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjExNlxcXCI7XFxufVxcbi5pb24tYm9uZmlyZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMzE1XFxcIjtcXG59XFxuLmlvbi1ib29rbWFyazpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMjZCXFxcIjtcXG59XFxuLmlvbi1ib3d0aWU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjNDMFxcXCI7XFxufVxcbi5pb24tYnJpZWZjYXNlOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYyNkNcXFwiO1xcbn1cXG4uaW9uLWJ1ZzpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMkJFXFxcIjtcXG59XFxuLmlvbi1jYWxjdWxhdG9yOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYyNkRcXFwiO1xcbn1cXG4uaW9uLWNhbGVuZGFyOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYxMTdcXFwiO1xcbn1cXG4uaW9uLWNhbWVyYTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMTE4XFxcIjtcXG59XFxuLmlvbi1jYXJkOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYxMTlcXFwiO1xcbn1cXG4uaW9uLWNhc2g6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjMxNlxcXCI7XFxufVxcbi5pb24tY2hhdGJveDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMTFCXFxcIjtcXG59XFxuLmlvbi1jaGF0Ym94LXdvcmtpbmc6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjExQVxcXCI7XFxufVxcbi5pb24tY2hhdGJveGVzOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYxMUNcXFwiO1xcbn1cXG4uaW9uLWNoYXRidWJibGU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjExRVxcXCI7XFxufVxcbi5pb24tY2hhdGJ1YmJsZS13b3JraW5nOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYxMURcXFwiO1xcbn1cXG4uaW9uLWNoYXRidWJibGVzOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYxMUZcXFwiO1xcbn1cXG4uaW9uLWNoZWNrbWFyazpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMTIyXFxcIjtcXG59XFxuLmlvbi1jaGVja21hcmstY2lyY2xlZDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMTIwXFxcIjtcXG59XFxuLmlvbi1jaGVja21hcmstcm91bmQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjEyMVxcXCI7XFxufVxcbi5pb24tY2hldnJvbi1kb3duOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYxMjNcXFwiO1xcbn1cXG4uaW9uLWNoZXZyb24tbGVmdDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMTI0XFxcIjtcXG59XFxuLmlvbi1jaGV2cm9uLXJpZ2h0OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYxMjVcXFwiO1xcbn1cXG4uaW9uLWNoZXZyb24tdXA6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjEyNlxcXCI7XFxufVxcbi5pb24tY2xpcGJvYXJkOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYxMjdcXFwiO1xcbn1cXG4uaW9uLWNsb2NrOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYyNkVcXFwiO1xcbn1cXG4uaW9uLWNsb3NlOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYxMkFcXFwiO1xcbn1cXG4uaW9uLWNsb3NlLWNpcmNsZWQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjEyOFxcXCI7XFxufVxcbi5pb24tY2xvc2Utcm91bmQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjEyOVxcXCI7XFxufVxcbi5pb24tY2xvc2VkLWNhcHRpb25pbmc6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjMxN1xcXCI7XFxufVxcbi5pb24tY2xvdWQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjEyQlxcXCI7XFxufVxcbi5pb24tY29kZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMjcxXFxcIjtcXG59XFxuLmlvbi1jb2RlLWRvd25sb2FkOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYyNkZcXFwiO1xcbn1cXG4uaW9uLWNvZGUtd29ya2luZzpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMjcwXFxcIjtcXG59XFxuLmlvbi1jb2ZmZWU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjI3MlxcXCI7XFxufVxcbi5pb24tY29tcGFzczpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMjczXFxcIjtcXG59XFxuLmlvbi1jb21wb3NlOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYxMkNcXFwiO1xcbn1cXG4uaW9uLWNvbm5lY3Rpb24tYmFyczpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMjc0XFxcIjtcXG59XFxuLmlvbi1jb250cmFzdDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMjc1XFxcIjtcXG59XFxuLmlvbi1jcm9wOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYzQzFcXFwiO1xcbn1cXG4uaW9uLWN1YmU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjMxOFxcXCI7XFxufVxcbi5pb24tZGlzYzpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMTJEXFxcIjtcXG59XFxuLmlvbi1kb2N1bWVudDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMTJGXFxcIjtcXG59XFxuLmlvbi1kb2N1bWVudC10ZXh0OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYxMkVcXFwiO1xcbn1cXG4uaW9uLWRyYWc6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjEzMFxcXCI7XFxufVxcbi5pb24tZWFydGg6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjI3NlxcXCI7XFxufVxcbi5pb24tZWFzZWw6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjNDMlxcXCI7XFxufVxcbi5pb24tZWRpdDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMkJGXFxcIjtcXG59XFxuLmlvbi1lZ2c6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjI3N1xcXCI7XFxufVxcbi5pb24tZWplY3Q6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjEzMVxcXCI7XFxufVxcbi5pb24tZW1haWw6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjEzMlxcXCI7XFxufVxcbi5pb24tZW1haWwtdW5yZWFkOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYzQzNcXFwiO1xcbn1cXG4uaW9uLWVybGVubWV5ZXItZmxhc2s6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjNDNVxcXCI7XFxufVxcbi5pb24tZXJsZW5tZXllci1mbGFzay1idWJibGVzOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYzQzRcXFwiO1xcbn1cXG4uaW9uLWV5ZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMTMzXFxcIjtcXG59XFxuLmlvbi1leWUtZGlzYWJsZWQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjMwNlxcXCI7XFxufVxcbi5pb24tZmVtYWxlOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYyNzhcXFwiO1xcbn1cXG4uaW9uLWZpbGluZzpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMTM0XFxcIjtcXG59XFxuLmlvbi1maWxtLW1hcmtlcjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMTM1XFxcIjtcXG59XFxuLmlvbi1maXJlYmFsbDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMzE5XFxcIjtcXG59XFxuLmlvbi1mbGFnOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYyNzlcXFwiO1xcbn1cXG4uaW9uLWZsYW1lOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYzMUFcXFwiO1xcbn1cXG4uaW9uLWZsYXNoOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYxMzdcXFwiO1xcbn1cXG4uaW9uLWZsYXNoLW9mZjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMTM2XFxcIjtcXG59XFxuLmlvbi1mb2xkZXI6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjEzOVxcXCI7XFxufVxcbi5pb24tZm9yazpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMjdBXFxcIjtcXG59XFxuLmlvbi1mb3JrLXJlcG86YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjJDMFxcXCI7XFxufVxcbi5pb24tZm9yd2FyZDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMTNBXFxcIjtcXG59XFxuLmlvbi1mdW5uZWw6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjMxQlxcXCI7XFxufVxcbi5pb24tZ2Vhci1hOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYxM0RcXFwiO1xcbn1cXG4uaW9uLWdlYXItYjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMTNFXFxcIjtcXG59XFxuLmlvbi1ncmlkOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYxM0ZcXFwiO1xcbn1cXG4uaW9uLWhhbW1lcjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMjdCXFxcIjtcXG59XFxuLmlvbi1oYXBweTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMzFDXFxcIjtcXG59XFxuLmlvbi1oYXBweS1vdXRsaW5lOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYzQzZcXFwiO1xcbn1cXG4uaW9uLWhlYWRwaG9uZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMTQwXFxcIjtcXG59XFxuLmlvbi1oZWFydDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMTQxXFxcIjtcXG59XFxuLmlvbi1oZWFydC1icm9rZW46YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjMxRFxcXCI7XFxufVxcbi5pb24taGVscDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMTQzXFxcIjtcXG59XFxuLmlvbi1oZWxwLWJ1b3k6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjI3Q1xcXCI7XFxufVxcbi5pb24taGVscC1jaXJjbGVkOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYxNDJcXFwiO1xcbn1cXG4uaW9uLWhvbWU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjE0NFxcXCI7XFxufVxcbi5pb24taWNlY3JlYW06YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjI3RFxcXCI7XFxufVxcbi5pb24taW1hZ2U6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjE0N1xcXCI7XFxufVxcbi5pb24taW1hZ2VzOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYxNDhcXFwiO1xcbn1cXG4uaW9uLWluZm9ybWF0aW9uOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYxNEFcXFwiO1xcbn1cXG4uaW9uLWluZm9ybWF0aW9uLWNpcmNsZWQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjE0OVxcXCI7XFxufVxcbi5pb24taW9uaWM6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjE0QlxcXCI7XFxufVxcbi5pb24taW9zLWFsYXJtOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYzQzhcXFwiO1xcbn1cXG4uaW9uLWlvcy1hbGFybS1vdXRsaW5lOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYzQzdcXFwiO1xcbn1cXG4uaW9uLWlvcy1hbGJ1bXM6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjNDQVxcXCI7XFxufVxcbi5pb24taW9zLWFsYnVtcy1vdXRsaW5lOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYzQzlcXFwiO1xcbn1cXG4uaW9uLWlvcy1hbWVyaWNhbmZvb3RiYWxsOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYzQ0NcXFwiO1xcbn1cXG4uaW9uLWlvcy1hbWVyaWNhbmZvb3RiYWxsLW91dGxpbmU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjNDQlxcXCI7XFxufVxcbi5pb24taW9zLWFuYWx5dGljczpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGM0NFXFxcIjtcXG59XFxuLmlvbi1pb3MtYW5hbHl0aWNzLW91dGxpbmU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjNDRFxcXCI7XFxufVxcbi5pb24taW9zLWFycm93LWJhY2s6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjNDRlxcXCI7XFxufVxcbi5pb24taW9zLWFycm93LWRvd246YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjNEMFxcXCI7XFxufVxcbi5pb24taW9zLWFycm93LWZvcndhcmQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjNEMVxcXCI7XFxufVxcbi5pb24taW9zLWFycm93LWxlZnQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjNEMlxcXCI7XFxufVxcbi5pb24taW9zLWFycm93LXJpZ2h0OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYzRDNcXFwiO1xcbn1cXG4uaW9uLWlvcy1hcnJvdy10aGluLWRvd246YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjNENFxcXCI7XFxufVxcbi5pb24taW9zLWFycm93LXRoaW4tbGVmdDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGM0Q1XFxcIjtcXG59XFxuLmlvbi1pb3MtYXJyb3ctdGhpbi1yaWdodDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGM0Q2XFxcIjtcXG59XFxuLmlvbi1pb3MtYXJyb3ctdGhpbi11cDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGM0Q3XFxcIjtcXG59XFxuLmlvbi1pb3MtYXJyb3ctdXA6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjNEOFxcXCI7XFxufVxcbi5pb24taW9zLWF0OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYzREFcXFwiO1xcbn1cXG4uaW9uLWlvcy1hdC1vdXRsaW5lOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYzRDlcXFwiO1xcbn1cXG4uaW9uLWlvcy1iYXJjb2RlOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYzRENcXFwiO1xcbn1cXG4uaW9uLWlvcy1iYXJjb2RlLW91dGxpbmU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjNEQlxcXCI7XFxufVxcbi5pb24taW9zLWJhc2ViYWxsOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYzREVcXFwiO1xcbn1cXG4uaW9uLWlvcy1iYXNlYmFsbC1vdXRsaW5lOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYzRERcXFwiO1xcbn1cXG4uaW9uLWlvcy1iYXNrZXRiYWxsOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYzRTBcXFwiO1xcbn1cXG4uaW9uLWlvcy1iYXNrZXRiYWxsLW91dGxpbmU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjNERlxcXCI7XFxufVxcbi5pb24taW9zLWJlbGw6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjNFMlxcXCI7XFxufVxcbi5pb24taW9zLWJlbGwtb3V0bGluZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGM0UxXFxcIjtcXG59XFxuLmlvbi1pb3MtYm9keTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGM0U0XFxcIjtcXG59XFxuLmlvbi1pb3MtYm9keS1vdXRsaW5lOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYzRTNcXFwiO1xcbn1cXG4uaW9uLWlvcy1ib2x0OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYzRTZcXFwiO1xcbn1cXG4uaW9uLWlvcy1ib2x0LW91dGxpbmU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjNFNVxcXCI7XFxufVxcbi5pb24taW9zLWJvb2s6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjNFOFxcXCI7XFxufVxcbi5pb24taW9zLWJvb2stb3V0bGluZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGM0U3XFxcIjtcXG59XFxuLmlvbi1pb3MtYm9va21hcmtzOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYzRUFcXFwiO1xcbn1cXG4uaW9uLWlvcy1ib29rbWFya3Mtb3V0bGluZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGM0U5XFxcIjtcXG59XFxuLmlvbi1pb3MtYm94OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYzRUNcXFwiO1xcbn1cXG4uaW9uLWlvcy1ib3gtb3V0bGluZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGM0VCXFxcIjtcXG59XFxuLmlvbi1pb3MtYnJpZWZjYXNlOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYzRUVcXFwiO1xcbn1cXG4uaW9uLWlvcy1icmllZmNhc2Utb3V0bGluZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGM0VEXFxcIjtcXG59XFxuLmlvbi1pb3MtYnJvd3NlcnM6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjNGMFxcXCI7XFxufVxcbi5pb24taW9zLWJyb3dzZXJzLW91dGxpbmU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjNFRlxcXCI7XFxufVxcbi5pb24taW9zLWNhbGN1bGF0b3I6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjNGMlxcXCI7XFxufVxcbi5pb24taW9zLWNhbGN1bGF0b3Itb3V0bGluZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGM0YxXFxcIjtcXG59XFxuLmlvbi1pb3MtY2FsZW5kYXI6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjNGNFxcXCI7XFxufVxcbi5pb24taW9zLWNhbGVuZGFyLW91dGxpbmU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjNGM1xcXCI7XFxufVxcbi5pb24taW9zLWNhbWVyYTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGM0Y2XFxcIjtcXG59XFxuLmlvbi1pb3MtY2FtZXJhLW91dGxpbmU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjNGNVxcXCI7XFxufVxcbi5pb24taW9zLWNhcnQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjNGOFxcXCI7XFxufVxcbi5pb24taW9zLWNhcnQtb3V0bGluZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGM0Y3XFxcIjtcXG59XFxuLmlvbi1pb3MtY2hhdGJveGVzOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYzRkFcXFwiO1xcbn1cXG4uaW9uLWlvcy1jaGF0Ym94ZXMtb3V0bGluZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGM0Y5XFxcIjtcXG59XFxuLmlvbi1pb3MtY2hhdGJ1YmJsZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGM0ZDXFxcIjtcXG59XFxuLmlvbi1pb3MtY2hhdGJ1YmJsZS1vdXRsaW5lOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYzRkJcXFwiO1xcbn1cXG4uaW9uLWlvcy1jaGVja21hcms6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjNGRlxcXCI7XFxufVxcbi5pb24taW9zLWNoZWNrbWFyay1lbXB0eTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGM0ZEXFxcIjtcXG59XFxuLmlvbi1pb3MtY2hlY2ttYXJrLW91dGxpbmU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjNGRVxcXCI7XFxufVxcbi5pb24taW9zLWNpcmNsZS1maWxsZWQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjQwMFxcXCI7XFxufVxcbi5pb24taW9zLWNpcmNsZS1vdXRsaW5lOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEY0MDFcXFwiO1xcbn1cXG4uaW9uLWlvcy1jbG9jazpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGNDAzXFxcIjtcXG59XFxuLmlvbi1pb3MtY2xvY2stb3V0bGluZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGNDAyXFxcIjtcXG59XFxuLmlvbi1pb3MtY2xvc2U6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjQwNlxcXCI7XFxufVxcbi5pb24taW9zLWNsb3NlLWVtcHR5OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEY0MDRcXFwiO1xcbn1cXG4uaW9uLWlvcy1jbG9zZS1vdXRsaW5lOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEY0MDVcXFwiO1xcbn1cXG4uaW9uLWlvcy1jbG91ZDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGNDBDXFxcIjtcXG59XFxuLmlvbi1pb3MtY2xvdWQtZG93bmxvYWQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjQwOFxcXCI7XFxufVxcbi5pb24taW9zLWNsb3VkLWRvd25sb2FkLW91dGxpbmU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjQwN1xcXCI7XFxufVxcbi5pb24taW9zLWNsb3VkLW91dGxpbmU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjQwOVxcXCI7XFxufVxcbi5pb24taW9zLWNsb3VkLXVwbG9hZDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGNDBCXFxcIjtcXG59XFxuLmlvbi1pb3MtY2xvdWQtdXBsb2FkLW91dGxpbmU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjQwQVxcXCI7XFxufVxcbi5pb24taW9zLWNsb3VkeTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGNDEwXFxcIjtcXG59XFxuLmlvbi1pb3MtY2xvdWR5LW5pZ2h0OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEY0MEVcXFwiO1xcbn1cXG4uaW9uLWlvcy1jbG91ZHktbmlnaHQtb3V0bGluZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGNDBEXFxcIjtcXG59XFxuLmlvbi1pb3MtY2xvdWR5LW91dGxpbmU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjQwRlxcXCI7XFxufVxcbi5pb24taW9zLWNvZzpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGNDEyXFxcIjtcXG59XFxuLmlvbi1pb3MtY29nLW91dGxpbmU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjQxMVxcXCI7XFxufVxcbi5pb24taW9zLWNvbG9yLWZpbHRlcjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGNDE0XFxcIjtcXG59XFxuLmlvbi1pb3MtY29sb3ItZmlsdGVyLW91dGxpbmU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjQxM1xcXCI7XFxufVxcbi5pb24taW9zLWNvbG9yLXdhbmQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjQxNlxcXCI7XFxufVxcbi5pb24taW9zLWNvbG9yLXdhbmQtb3V0bGluZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGNDE1XFxcIjtcXG59XFxuLmlvbi1pb3MtY29tcG9zZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGNDE4XFxcIjtcXG59XFxuLmlvbi1pb3MtY29tcG9zZS1vdXRsaW5lOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEY0MTdcXFwiO1xcbn1cXG4uaW9uLWlvcy1jb250YWN0OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEY0MUFcXFwiO1xcbn1cXG4uaW9uLWlvcy1jb250YWN0LW91dGxpbmU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjQxOVxcXCI7XFxufVxcbi5pb24taW9zLWNvcHk6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjQxQ1xcXCI7XFxufVxcbi5pb24taW9zLWNvcHktb3V0bGluZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGNDFCXFxcIjtcXG59XFxuLmlvbi1pb3MtY3JvcDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGNDFFXFxcIjtcXG59XFxuLmlvbi1pb3MtY3JvcC1zdHJvbmc6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjQxRFxcXCI7XFxufVxcbi5pb24taW9zLWRvd25sb2FkOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEY0MjBcXFwiO1xcbn1cXG4uaW9uLWlvcy1kb3dubG9hZC1vdXRsaW5lOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEY0MUZcXFwiO1xcbn1cXG4uaW9uLWlvcy1kcmFnOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEY0MjFcXFwiO1xcbn1cXG4uaW9uLWlvcy1lbWFpbDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGNDIzXFxcIjtcXG59XFxuLmlvbi1pb3MtZW1haWwtb3V0bGluZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGNDIyXFxcIjtcXG59XFxuLmlvbi1pb3MtZXllOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEY0MjVcXFwiO1xcbn1cXG4uaW9uLWlvcy1leWUtb3V0bGluZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGNDI0XFxcIjtcXG59XFxuLmlvbi1pb3MtZmFzdGZvcndhcmQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjQyN1xcXCI7XFxufVxcbi5pb24taW9zLWZhc3Rmb3J3YXJkLW91dGxpbmU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjQyNlxcXCI7XFxufVxcbi5pb24taW9zLWZpbGluZzpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGNDI5XFxcIjtcXG59XFxuLmlvbi1pb3MtZmlsaW5nLW91dGxpbmU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjQyOFxcXCI7XFxufVxcbi5pb24taW9zLWZpbG06YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjQyQlxcXCI7XFxufVxcbi5pb24taW9zLWZpbG0tb3V0bGluZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGNDJBXFxcIjtcXG59XFxuLmlvbi1pb3MtZmxhZzpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGNDJEXFxcIjtcXG59XFxuLmlvbi1pb3MtZmxhZy1vdXRsaW5lOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEY0MkNcXFwiO1xcbn1cXG4uaW9uLWlvcy1mbGFtZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGNDJGXFxcIjtcXG59XFxuLmlvbi1pb3MtZmxhbWUtb3V0bGluZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGNDJFXFxcIjtcXG59XFxuLmlvbi1pb3MtZmxhc2s6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjQzMVxcXCI7XFxufVxcbi5pb24taW9zLWZsYXNrLW91dGxpbmU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjQzMFxcXCI7XFxufVxcbi5pb24taW9zLWZsb3dlcjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGNDMzXFxcIjtcXG59XFxuLmlvbi1pb3MtZmxvd2VyLW91dGxpbmU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjQzMlxcXCI7XFxufVxcbi5pb24taW9zLWZvbGRlcjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGNDM1XFxcIjtcXG59XFxuLmlvbi1pb3MtZm9sZGVyLW91dGxpbmU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjQzNFxcXCI7XFxufVxcbi5pb24taW9zLWZvb3RiYWxsOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEY0MzdcXFwiO1xcbn1cXG4uaW9uLWlvcy1mb290YmFsbC1vdXRsaW5lOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEY0MzZcXFwiO1xcbn1cXG4uaW9uLWlvcy1nYW1lLWNvbnRyb2xsZXItYTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGNDM5XFxcIjtcXG59XFxuLmlvbi1pb3MtZ2FtZS1jb250cm9sbGVyLWEtb3V0bGluZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGNDM4XFxcIjtcXG59XFxuLmlvbi1pb3MtZ2FtZS1jb250cm9sbGVyLWI6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjQzQlxcXCI7XFxufVxcbi5pb24taW9zLWdhbWUtY29udHJvbGxlci1iLW91dGxpbmU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjQzQVxcXCI7XFxufVxcbi5pb24taW9zLWdlYXI6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjQzRFxcXCI7XFxufVxcbi5pb24taW9zLWdlYXItb3V0bGluZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGNDNDXFxcIjtcXG59XFxuLmlvbi1pb3MtZ2xhc3NlczpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGNDNGXFxcIjtcXG59XFxuLmlvbi1pb3MtZ2xhc3Nlcy1vdXRsaW5lOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEY0M0VcXFwiO1xcbn1cXG4uaW9uLWlvcy1ncmlkLXZpZXc6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjQ0MVxcXCI7XFxufVxcbi5pb24taW9zLWdyaWQtdmlldy1vdXRsaW5lOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEY0NDBcXFwiO1xcbn1cXG4uaW9uLWlvcy1oZWFydDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGNDQzXFxcIjtcXG59XFxuLmlvbi1pb3MtaGVhcnQtb3V0bGluZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGNDQyXFxcIjtcXG59XFxuLmlvbi1pb3MtaGVscDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGNDQ2XFxcIjtcXG59XFxuLmlvbi1pb3MtaGVscC1lbXB0eTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGNDQ0XFxcIjtcXG59XFxuLmlvbi1pb3MtaGVscC1vdXRsaW5lOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEY0NDVcXFwiO1xcbn1cXG4uaW9uLWlvcy1ob21lOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEY0NDhcXFwiO1xcbn1cXG4uaW9uLWlvcy1ob21lLW91dGxpbmU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjQ0N1xcXCI7XFxufVxcbi5pb24taW9zLWluZmluaXRlOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEY0NEFcXFwiO1xcbn1cXG4uaW9uLWlvcy1pbmZpbml0ZS1vdXRsaW5lOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEY0NDlcXFwiO1xcbn1cXG4uaW9uLWlvcy1pbmZvcm1hdGlvbjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGNDREXFxcIjtcXG59XFxuLmlvbi1pb3MtaW5mb3JtYXRpb24tZW1wdHk6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjQ0QlxcXCI7XFxufVxcbi5pb24taW9zLWluZm9ybWF0aW9uLW91dGxpbmU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjQ0Q1xcXCI7XFxufVxcbi5pb24taW9zLWlvbmljLW91dGxpbmU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjQ0RVxcXCI7XFxufVxcbi5pb24taW9zLWtleXBhZDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGNDUwXFxcIjtcXG59XFxuLmlvbi1pb3Mta2V5cGFkLW91dGxpbmU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjQ0RlxcXCI7XFxufVxcbi5pb24taW9zLWxpZ2h0YnVsYjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGNDUyXFxcIjtcXG59XFxuLmlvbi1pb3MtbGlnaHRidWxiLW91dGxpbmU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjQ1MVxcXCI7XFxufVxcbi5pb24taW9zLWxpc3Q6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjQ1NFxcXCI7XFxufVxcbi5pb24taW9zLWxpc3Qtb3V0bGluZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGNDUzXFxcIjtcXG59XFxuLmlvbi1pb3MtbG9jYXRpb246YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjQ1NlxcXCI7XFxufVxcbi5pb24taW9zLWxvY2F0aW9uLW91dGxpbmU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjQ1NVxcXCI7XFxufVxcbi5pb24taW9zLWxvY2tlZDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGNDU4XFxcIjtcXG59XFxuLmlvbi1pb3MtbG9ja2VkLW91dGxpbmU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjQ1N1xcXCI7XFxufVxcbi5pb24taW9zLWxvb3A6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjQ1QVxcXCI7XFxufVxcbi5pb24taW9zLWxvb3Atc3Ryb25nOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEY0NTlcXFwiO1xcbn1cXG4uaW9uLWlvcy1tZWRpY2FsOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEY0NUNcXFwiO1xcbn1cXG4uaW9uLWlvcy1tZWRpY2FsLW91dGxpbmU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjQ1QlxcXCI7XFxufVxcbi5pb24taW9zLW1lZGtpdDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGNDVFXFxcIjtcXG59XFxuLmlvbi1pb3MtbWVka2l0LW91dGxpbmU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjQ1RFxcXCI7XFxufVxcbi5pb24taW9zLW1pYzpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGNDYxXFxcIjtcXG59XFxuLmlvbi1pb3MtbWljLW9mZjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGNDVGXFxcIjtcXG59XFxuLmlvbi1pb3MtbWljLW91dGxpbmU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjQ2MFxcXCI7XFxufVxcbi5pb24taW9zLW1pbnVzOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEY0NjRcXFwiO1xcbn1cXG4uaW9uLWlvcy1taW51cy1lbXB0eTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGNDYyXFxcIjtcXG59XFxuLmlvbi1pb3MtbWludXMtb3V0bGluZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGNDYzXFxcIjtcXG59XFxuLmlvbi1pb3MtbW9uaXRvcjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGNDY2XFxcIjtcXG59XFxuLmlvbi1pb3MtbW9uaXRvci1vdXRsaW5lOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEY0NjVcXFwiO1xcbn1cXG4uaW9uLWlvcy1tb29uOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEY0NjhcXFwiO1xcbn1cXG4uaW9uLWlvcy1tb29uLW91dGxpbmU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjQ2N1xcXCI7XFxufVxcbi5pb24taW9zLW1vcmU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjQ2QVxcXCI7XFxufVxcbi5pb24taW9zLW1vcmUtb3V0bGluZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGNDY5XFxcIjtcXG59XFxuLmlvbi1pb3MtbXVzaWNhbC1ub3RlOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEY0NkJcXFwiO1xcbn1cXG4uaW9uLWlvcy1tdXNpY2FsLW5vdGVzOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEY0NkNcXFwiO1xcbn1cXG4uaW9uLWlvcy1uYXZpZ2F0ZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGNDZFXFxcIjtcXG59XFxuLmlvbi1pb3MtbmF2aWdhdGUtb3V0bGluZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGNDZEXFxcIjtcXG59XFxuLmlvbi1pb3MtbnV0cml0aW9uOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEY0NzBcXFwiO1xcbn1cXG4uaW9uLWlvcy1udXRyaXRpb24tb3V0bGluZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGNDZGXFxcIjtcXG59XFxuLmlvbi1pb3MtcGFwZXI6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjQ3MlxcXCI7XFxufVxcbi5pb24taW9zLXBhcGVyLW91dGxpbmU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjQ3MVxcXCI7XFxufVxcbi5pb24taW9zLXBhcGVycGxhbmU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjQ3NFxcXCI7XFxufVxcbi5pb24taW9zLXBhcGVycGxhbmUtb3V0bGluZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGNDczXFxcIjtcXG59XFxuLmlvbi1pb3MtcGFydGx5c3Vubnk6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjQ3NlxcXCI7XFxufVxcbi5pb24taW9zLXBhcnRseXN1bm55LW91dGxpbmU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjQ3NVxcXCI7XFxufVxcbi5pb24taW9zLXBhdXNlOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEY0NzhcXFwiO1xcbn1cXG4uaW9uLWlvcy1wYXVzZS1vdXRsaW5lOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEY0NzdcXFwiO1xcbn1cXG4uaW9uLWlvcy1wYXc6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjQ3QVxcXCI7XFxufVxcbi5pb24taW9zLXBhdy1vdXRsaW5lOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEY0NzlcXFwiO1xcbn1cXG4uaW9uLWlvcy1wZW9wbGU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjQ3Q1xcXCI7XFxufVxcbi5pb24taW9zLXBlb3BsZS1vdXRsaW5lOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEY0N0JcXFwiO1xcbn1cXG4uaW9uLWlvcy1wZXJzb246YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjQ3RVxcXCI7XFxufVxcbi5pb24taW9zLXBlcnNvbi1vdXRsaW5lOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEY0N0RcXFwiO1xcbn1cXG4uaW9uLWlvcy1wZXJzb25hZGQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjQ4MFxcXCI7XFxufVxcbi5pb24taW9zLXBlcnNvbmFkZC1vdXRsaW5lOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEY0N0ZcXFwiO1xcbn1cXG4uaW9uLWlvcy1waG90b3M6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjQ4MlxcXCI7XFxufVxcbi5pb24taW9zLXBob3Rvcy1vdXRsaW5lOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEY0ODFcXFwiO1xcbn1cXG4uaW9uLWlvcy1waWU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjQ4NFxcXCI7XFxufVxcbi5pb24taW9zLXBpZS1vdXRsaW5lOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEY0ODNcXFwiO1xcbn1cXG4uaW9uLWlvcy1waW50OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEY0ODZcXFwiO1xcbn1cXG4uaW9uLWlvcy1waW50LW91dGxpbmU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjQ4NVxcXCI7XFxufVxcbi5pb24taW9zLXBsYXk6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjQ4OFxcXCI7XFxufVxcbi5pb24taW9zLXBsYXktb3V0bGluZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGNDg3XFxcIjtcXG59XFxuLmlvbi1pb3MtcGx1czpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGNDhCXFxcIjtcXG59XFxuLmlvbi1pb3MtcGx1cy1lbXB0eTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGNDg5XFxcIjtcXG59XFxuLmlvbi1pb3MtcGx1cy1vdXRsaW5lOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEY0OEFcXFwiO1xcbn1cXG4uaW9uLWlvcy1wcmljZXRhZzpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGNDhEXFxcIjtcXG59XFxuLmlvbi1pb3MtcHJpY2V0YWctb3V0bGluZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGNDhDXFxcIjtcXG59XFxuLmlvbi1pb3MtcHJpY2V0YWdzOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEY0OEZcXFwiO1xcbn1cXG4uaW9uLWlvcy1wcmljZXRhZ3Mtb3V0bGluZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGNDhFXFxcIjtcXG59XFxuLmlvbi1pb3MtcHJpbnRlcjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGNDkxXFxcIjtcXG59XFxuLmlvbi1pb3MtcHJpbnRlci1vdXRsaW5lOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEY0OTBcXFwiO1xcbn1cXG4uaW9uLWlvcy1wdWxzZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGNDkzXFxcIjtcXG59XFxuLmlvbi1pb3MtcHVsc2Utc3Ryb25nOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEY0OTJcXFwiO1xcbn1cXG4uaW9uLWlvcy1yYWlueTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGNDk1XFxcIjtcXG59XFxuLmlvbi1pb3MtcmFpbnktb3V0bGluZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGNDk0XFxcIjtcXG59XFxuLmlvbi1pb3MtcmVjb3JkaW5nOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEY0OTdcXFwiO1xcbn1cXG4uaW9uLWlvcy1yZWNvcmRpbmctb3V0bGluZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGNDk2XFxcIjtcXG59XFxuLmlvbi1pb3MtcmVkbzpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGNDk5XFxcIjtcXG59XFxuLmlvbi1pb3MtcmVkby1vdXRsaW5lOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEY0OThcXFwiO1xcbn1cXG4uaW9uLWlvcy1yZWZyZXNoOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEY0OUNcXFwiO1xcbn1cXG4uaW9uLWlvcy1yZWZyZXNoLWVtcHR5OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEY0OUFcXFwiO1xcbn1cXG4uaW9uLWlvcy1yZWZyZXNoLW91dGxpbmU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjQ5QlxcXCI7XFxufVxcbi5pb24taW9zLXJlbG9hZDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGNDlEXFxcIjtcXG59XFxuLmlvbi1pb3MtcmV2ZXJzZS1jYW1lcmE6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjQ5RlxcXCI7XFxufVxcbi5pb24taW9zLXJldmVyc2UtY2FtZXJhLW91dGxpbmU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjQ5RVxcXCI7XFxufVxcbi5pb24taW9zLXJld2luZDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGNEExXFxcIjtcXG59XFxuLmlvbi1pb3MtcmV3aW5kLW91dGxpbmU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjRBMFxcXCI7XFxufVxcbi5pb24taW9zLXJvc2U6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjRBM1xcXCI7XFxufVxcbi5pb24taW9zLXJvc2Utb3V0bGluZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGNEEyXFxcIjtcXG59XFxuLmlvbi1pb3Mtc2VhcmNoOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEY0QTVcXFwiO1xcbn1cXG4uaW9uLWlvcy1zZWFyY2gtc3Ryb25nOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEY0QTRcXFwiO1xcbn1cXG4uaW9uLWlvcy1zZXR0aW5nczpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGNEE3XFxcIjtcXG59XFxuLmlvbi1pb3Mtc2V0dGluZ3Mtc3Ryb25nOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEY0QTZcXFwiO1xcbn1cXG4uaW9uLWlvcy1zaHVmZmxlOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEY0QTlcXFwiO1xcbn1cXG4uaW9uLWlvcy1zaHVmZmxlLXN0cm9uZzpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGNEE4XFxcIjtcXG59XFxuLmlvbi1pb3Mtc2tpcGJhY2t3YXJkOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEY0QUJcXFwiO1xcbn1cXG4uaW9uLWlvcy1za2lwYmFja3dhcmQtb3V0bGluZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGNEFBXFxcIjtcXG59XFxuLmlvbi1pb3Mtc2tpcGZvcndhcmQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjRBRFxcXCI7XFxufVxcbi5pb24taW9zLXNraXBmb3J3YXJkLW91dGxpbmU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjRBQ1xcXCI7XFxufVxcbi5pb24taW9zLXNub3d5OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEY0QUVcXFwiO1xcbn1cXG4uaW9uLWlvcy1zcGVlZG9tZXRlcjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGNEIwXFxcIjtcXG59XFxuLmlvbi1pb3Mtc3BlZWRvbWV0ZXItb3V0bGluZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGNEFGXFxcIjtcXG59XFxuLmlvbi1pb3Mtc3RhcjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGNEIzXFxcIjtcXG59XFxuLmlvbi1pb3Mtc3Rhci1oYWxmOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEY0QjFcXFwiO1xcbn1cXG4uaW9uLWlvcy1zdGFyLW91dGxpbmU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjRCMlxcXCI7XFxufVxcbi5pb24taW9zLXN0b3B3YXRjaDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGNEI1XFxcIjtcXG59XFxuLmlvbi1pb3Mtc3RvcHdhdGNoLW91dGxpbmU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjRCNFxcXCI7XFxufVxcbi5pb24taW9zLXN1bm55OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEY0QjdcXFwiO1xcbn1cXG4uaW9uLWlvcy1zdW5ueS1vdXRsaW5lOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEY0QjZcXFwiO1xcbn1cXG4uaW9uLWlvcy10ZWxlcGhvbmU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjRCOVxcXCI7XFxufVxcbi5pb24taW9zLXRlbGVwaG9uZS1vdXRsaW5lOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEY0QjhcXFwiO1xcbn1cXG4uaW9uLWlvcy10ZW5uaXNiYWxsOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEY0QkJcXFwiO1xcbn1cXG4uaW9uLWlvcy10ZW5uaXNiYWxsLW91dGxpbmU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjRCQVxcXCI7XFxufVxcbi5pb24taW9zLXRodW5kZXJzdG9ybTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGNEJEXFxcIjtcXG59XFxuLmlvbi1pb3MtdGh1bmRlcnN0b3JtLW91dGxpbmU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjRCQ1xcXCI7XFxufVxcbi5pb24taW9zLXRpbWU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjRCRlxcXCI7XFxufVxcbi5pb24taW9zLXRpbWUtb3V0bGluZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGNEJFXFxcIjtcXG59XFxuLmlvbi1pb3MtdGltZXI6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjRDMVxcXCI7XFxufVxcbi5pb24taW9zLXRpbWVyLW91dGxpbmU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjRDMFxcXCI7XFxufVxcbi5pb24taW9zLXRvZ2dsZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGNEMzXFxcIjtcXG59XFxuLmlvbi1pb3MtdG9nZ2xlLW91dGxpbmU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjRDMlxcXCI7XFxufVxcbi5pb24taW9zLXRyYXNoOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEY0QzVcXFwiO1xcbn1cXG4uaW9uLWlvcy10cmFzaC1vdXRsaW5lOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEY0QzRcXFwiO1xcbn1cXG4uaW9uLWlvcy11bmRvOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEY0QzdcXFwiO1xcbn1cXG4uaW9uLWlvcy11bmRvLW91dGxpbmU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjRDNlxcXCI7XFxufVxcbi5pb24taW9zLXVubG9ja2VkOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEY0QzlcXFwiO1xcbn1cXG4uaW9uLWlvcy11bmxvY2tlZC1vdXRsaW5lOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEY0QzhcXFwiO1xcbn1cXG4uaW9uLWlvcy11cGxvYWQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjRDQlxcXCI7XFxufVxcbi5pb24taW9zLXVwbG9hZC1vdXRsaW5lOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEY0Q0FcXFwiO1xcbn1cXG4uaW9uLWlvcy12aWRlb2NhbTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGNENEXFxcIjtcXG59XFxuLmlvbi1pb3MtdmlkZW9jYW0tb3V0bGluZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGNENDXFxcIjtcXG59XFxuLmlvbi1pb3Mtdm9sdW1lLWhpZ2g6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjRDRVxcXCI7XFxufVxcbi5pb24taW9zLXZvbHVtZS1sb3c6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjRDRlxcXCI7XFxufVxcbi5pb24taW9zLXdpbmVnbGFzczpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGNEQxXFxcIjtcXG59XFxuLmlvbi1pb3Mtd2luZWdsYXNzLW91dGxpbmU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjREMFxcXCI7XFxufVxcbi5pb24taW9zLXdvcmxkOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEY0RDNcXFwiO1xcbn1cXG4uaW9uLWlvcy13b3JsZC1vdXRsaW5lOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEY0RDJcXFwiO1xcbn1cXG4uaW9uLWlwYWQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjFGOVxcXCI7XFxufVxcbi5pb24taXBob25lOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYxRkFcXFwiO1xcbn1cXG4uaW9uLWlwb2Q6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjFGQlxcXCI7XFxufVxcbi5pb24tamV0OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYyOTVcXFwiO1xcbn1cXG4uaW9uLWtleTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMjk2XFxcIjtcXG59XFxuLmlvbi1rbmlmZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMjk3XFxcIjtcXG59XFxuLmlvbi1sYXB0b3A6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjFGQ1xcXCI7XFxufVxcbi5pb24tbGVhZjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMUZEXFxcIjtcXG59XFxuLmlvbi1sZXZlbHM6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjI5OFxcXCI7XFxufVxcbi5pb24tbGlnaHRidWxiOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYyOTlcXFwiO1xcbn1cXG4uaW9uLWxpbms6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjFGRVxcXCI7XFxufVxcbi5pb24tbG9hZC1hOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYyOUFcXFwiO1xcbn1cXG4uaW9uLWxvYWQtYjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMjlCXFxcIjtcXG59XFxuLmlvbi1sb2FkLWM6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjI5Q1xcXCI7XFxufVxcbi5pb24tbG9hZC1kOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYyOURcXFwiO1xcbn1cXG4uaW9uLWxvY2F0aW9uOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYxRkZcXFwiO1xcbn1cXG4uaW9uLWxvY2stY29tYmluYXRpb246YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjRENFxcXCI7XFxufVxcbi5pb24tbG9ja2VkOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYyMDBcXFwiO1xcbn1cXG4uaW9uLWxvZy1pbjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMjlFXFxcIjtcXG59XFxuLmlvbi1sb2ctb3V0OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYyOUZcXFwiO1xcbn1cXG4uaW9uLWxvb3A6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjIwMVxcXCI7XFxufVxcbi5pb24tbWFnbmV0OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYyQTBcXFwiO1xcbn1cXG4uaW9uLW1hbGU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjJBMVxcXCI7XFxufVxcbi5pb24tbWFuOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYyMDJcXFwiO1xcbn1cXG4uaW9uLW1hcDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMjAzXFxcIjtcXG59XFxuLmlvbi1tZWRraXQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjJBMlxcXCI7XFxufVxcbi5pb24tbWVyZ2U6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjMzRlxcXCI7XFxufVxcbi5pb24tbWljLWE6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjIwNFxcXCI7XFxufVxcbi5pb24tbWljLWI6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjIwNVxcXCI7XFxufVxcbi5pb24tbWljLWM6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjIwNlxcXCI7XFxufVxcbi5pb24tbWludXM6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjIwOVxcXCI7XFxufVxcbi5pb24tbWludXMtY2lyY2xlZDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMjA3XFxcIjtcXG59XFxuLmlvbi1taW51cy1yb3VuZDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMjA4XFxcIjtcXG59XFxuLmlvbi1tb2RlbC1zOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYyQzFcXFwiO1xcbn1cXG4uaW9uLW1vbml0b3I6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjIwQVxcXCI7XFxufVxcbi5pb24tbW9yZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMjBCXFxcIjtcXG59XFxuLmlvbi1tb3VzZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMzQwXFxcIjtcXG59XFxuLmlvbi1tdXNpYy1ub3RlOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYyMENcXFwiO1xcbn1cXG4uaW9uLW5hdmljb246YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjIwRVxcXCI7XFxufVxcbi5pb24tbmF2aWNvbi1yb3VuZDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMjBEXFxcIjtcXG59XFxuLmlvbi1uYXZpZ2F0ZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMkEzXFxcIjtcXG59XFxuLmlvbi1uZXR3b3JrOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYzNDFcXFwiO1xcbn1cXG4uaW9uLW5vLXNtb2tpbmc6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjJDMlxcXCI7XFxufVxcbi5pb24tbnVjbGVhcjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMkE0XFxcIjtcXG59XFxuLmlvbi1vdXRsZXQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjM0MlxcXCI7XFxufVxcbi5pb24tcGFpbnRicnVzaDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGNEQ1XFxcIjtcXG59XFxuLmlvbi1wYWludGJ1Y2tldDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGNEQ2XFxcIjtcXG59XFxuLmlvbi1wYXBlci1haXJwbGFuZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMkMzXFxcIjtcXG59XFxuLmlvbi1wYXBlcmNsaXA6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjIwRlxcXCI7XFxufVxcbi5pb24tcGF1c2U6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjIxMFxcXCI7XFxufVxcbi5pb24tcGVyc29uOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYyMTNcXFwiO1xcbn1cXG4uaW9uLXBlcnNvbi1hZGQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjIxMVxcXCI7XFxufVxcbi5pb24tcGVyc29uLXN0YWxrZXI6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjIxMlxcXCI7XFxufVxcbi5pb24tcGllLWdyYXBoOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYyQTVcXFwiO1xcbn1cXG4uaW9uLXBpbjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMkE2XFxcIjtcXG59XFxuLmlvbi1waW5wb2ludDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMkE3XFxcIjtcXG59XFxuLmlvbi1waXp6YTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMkE4XFxcIjtcXG59XFxuLmlvbi1wbGFuZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMjE0XFxcIjtcXG59XFxuLmlvbi1wbGFuZXQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjM0M1xcXCI7XFxufVxcbi5pb24tcGxheTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMjE1XFxcIjtcXG59XFxuLmlvbi1wbGF5c3RhdGlvbjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMzBBXFxcIjtcXG59XFxuLmlvbi1wbHVzOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYyMThcXFwiO1xcbn1cXG4uaW9uLXBsdXMtY2lyY2xlZDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMjE2XFxcIjtcXG59XFxuLmlvbi1wbHVzLXJvdW5kOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYyMTdcXFwiO1xcbn1cXG4uaW9uLXBvZGl1bTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMzQ0XFxcIjtcXG59XFxuLmlvbi1wb3VuZDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMjE5XFxcIjtcXG59XFxuLmlvbi1wb3dlcjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMkE5XFxcIjtcXG59XFxuLmlvbi1wcmljZXRhZzpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMkFBXFxcIjtcXG59XFxuLmlvbi1wcmljZXRhZ3M6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjJBQlxcXCI7XFxufVxcbi5pb24tcHJpbnRlcjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMjFBXFxcIjtcXG59XFxuLmlvbi1wdWxsLXJlcXVlc3Q6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjM0NVxcXCI7XFxufVxcbi5pb24tcXItc2Nhbm5lcjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMzQ2XFxcIjtcXG59XFxuLmlvbi1xdW90ZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMzQ3XFxcIjtcXG59XFxuLmlvbi1yYWRpby13YXZlczpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMkFDXFxcIjtcXG59XFxuLmlvbi1yZWNvcmQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjIxQlxcXCI7XFxufVxcbi5pb24tcmVmcmVzaDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMjFDXFxcIjtcXG59XFxuLmlvbi1yZXBseTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMjFFXFxcIjtcXG59XFxuLmlvbi1yZXBseS1hbGw6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjIxRFxcXCI7XFxufVxcbi5pb24tcmliYm9uLWE6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjM0OFxcXCI7XFxufVxcbi5pb24tcmliYm9uLWI6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjM0OVxcXCI7XFxufVxcbi5pb24tc2FkOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYzNEFcXFwiO1xcbn1cXG4uaW9uLXNhZC1vdXRsaW5lOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEY0RDdcXFwiO1xcbn1cXG4uaW9uLXNjaXNzb3JzOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYzNEJcXFwiO1xcbn1cXG4uaW9uLXNlYXJjaDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMjFGXFxcIjtcXG59XFxuLmlvbi1zZXR0aW5nczpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMkFEXFxcIjtcXG59XFxuLmlvbi1zaGFyZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMjIwXFxcIjtcXG59XFxuLmlvbi1zaHVmZmxlOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYyMjFcXFwiO1xcbn1cXG4uaW9uLXNraXAtYmFja3dhcmQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjIyMlxcXCI7XFxufVxcbi5pb24tc2tpcC1mb3J3YXJkOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYyMjNcXFwiO1xcbn1cXG4uaW9uLXNvY2lhbC1hbmRyb2lkOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYyMjVcXFwiO1xcbn1cXG4uaW9uLXNvY2lhbC1hbmRyb2lkLW91dGxpbmU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjIyNFxcXCI7XFxufVxcbi5pb24tc29jaWFsLWFuZ3VsYXI6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjREOVxcXCI7XFxufVxcbi5pb24tc29jaWFsLWFuZ3VsYXItb3V0bGluZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGNEQ4XFxcIjtcXG59XFxuLmlvbi1zb2NpYWwtYXBwbGU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjIyN1xcXCI7XFxufVxcbi5pb24tc29jaWFsLWFwcGxlLW91dGxpbmU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjIyNlxcXCI7XFxufVxcbi5pb24tc29jaWFsLWJpdGNvaW46YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjJBRlxcXCI7XFxufVxcbi5pb24tc29jaWFsLWJpdGNvaW4tb3V0bGluZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMkFFXFxcIjtcXG59XFxuLmlvbi1zb2NpYWwtYnVmZmVyOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYyMjlcXFwiO1xcbn1cXG4uaW9uLXNvY2lhbC1idWZmZXItb3V0bGluZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMjI4XFxcIjtcXG59XFxuLmlvbi1zb2NpYWwtY2hyb21lOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEY0REJcXFwiO1xcbn1cXG4uaW9uLXNvY2lhbC1jaHJvbWUtb3V0bGluZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGNERBXFxcIjtcXG59XFxuLmlvbi1zb2NpYWwtY29kZXBlbjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGNEREXFxcIjtcXG59XFxuLmlvbi1zb2NpYWwtY29kZXBlbi1vdXRsaW5lOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEY0RENcXFwiO1xcbn1cXG4uaW9uLXNvY2lhbC1jc3MzOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEY0REZcXFwiO1xcbn1cXG4uaW9uLXNvY2lhbC1jc3MzLW91dGxpbmU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjRERVxcXCI7XFxufVxcbi5pb24tc29jaWFsLWRlc2lnbmVybmV3czpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMjJCXFxcIjtcXG59XFxuLmlvbi1zb2NpYWwtZGVzaWduZXJuZXdzLW91dGxpbmU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjIyQVxcXCI7XFxufVxcbi5pb24tc29jaWFsLWRyaWJiYmxlOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYyMkRcXFwiO1xcbn1cXG4uaW9uLXNvY2lhbC1kcmliYmJsZS1vdXRsaW5lOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYyMkNcXFwiO1xcbn1cXG4uaW9uLXNvY2lhbC1kcm9wYm94OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYyMkZcXFwiO1xcbn1cXG4uaW9uLXNvY2lhbC1kcm9wYm94LW91dGxpbmU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjIyRVxcXCI7XFxufVxcbi5pb24tc29jaWFsLWV1cm86YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjRFMVxcXCI7XFxufVxcbi5pb24tc29jaWFsLWV1cm8tb3V0bGluZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGNEUwXFxcIjtcXG59XFxuLmlvbi1zb2NpYWwtZmFjZWJvb2s6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjIzMVxcXCI7XFxufVxcbi5pb24tc29jaWFsLWZhY2Vib29rLW91dGxpbmU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjIzMFxcXCI7XFxufVxcbi5pb24tc29jaWFsLWZvdXJzcXVhcmU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjM0RFxcXCI7XFxufVxcbi5pb24tc29jaWFsLWZvdXJzcXVhcmUtb3V0bGluZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMzRDXFxcIjtcXG59XFxuLmlvbi1zb2NpYWwtZnJlZWJzZC1kZXZpbDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMkM0XFxcIjtcXG59XFxuLmlvbi1zb2NpYWwtZ2l0aHViOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYyMzNcXFwiO1xcbn1cXG4uaW9uLXNvY2lhbC1naXRodWItb3V0bGluZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMjMyXFxcIjtcXG59XFxuLmlvbi1zb2NpYWwtZ29vZ2xlOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYzNEZcXFwiO1xcbn1cXG4uaW9uLXNvY2lhbC1nb29nbGUtb3V0bGluZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMzRFXFxcIjtcXG59XFxuLmlvbi1zb2NpYWwtZ29vZ2xlcGx1czpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMjM1XFxcIjtcXG59XFxuLmlvbi1zb2NpYWwtZ29vZ2xlcGx1cy1vdXRsaW5lOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYyMzRcXFwiO1xcbn1cXG4uaW9uLXNvY2lhbC1oYWNrZXJuZXdzOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYyMzdcXFwiO1xcbn1cXG4uaW9uLXNvY2lhbC1oYWNrZXJuZXdzLW91dGxpbmU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjIzNlxcXCI7XFxufVxcbi5pb24tc29jaWFsLWh0bWw1OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEY0RTNcXFwiO1xcbn1cXG4uaW9uLXNvY2lhbC1odG1sNS1vdXRsaW5lOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEY0RTJcXFwiO1xcbn1cXG4uaW9uLXNvY2lhbC1pbnN0YWdyYW06YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjM1MVxcXCI7XFxufVxcbi5pb24tc29jaWFsLWluc3RhZ3JhbS1vdXRsaW5lOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYzNTBcXFwiO1xcbn1cXG4uaW9uLXNvY2lhbC1qYXZhc2NyaXB0OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEY0RTVcXFwiO1xcbn1cXG4uaW9uLXNvY2lhbC1qYXZhc2NyaXB0LW91dGxpbmU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjRFNFxcXCI7XFxufVxcbi5pb24tc29jaWFsLWxpbmtlZGluOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYyMzlcXFwiO1xcbn1cXG4uaW9uLXNvY2lhbC1saW5rZWRpbi1vdXRsaW5lOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYyMzhcXFwiO1xcbn1cXG4uaW9uLXNvY2lhbC1tYXJrZG93bjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGNEU2XFxcIjtcXG59XFxuLmlvbi1zb2NpYWwtbm9kZWpzOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEY0RTdcXFwiO1xcbn1cXG4uaW9uLXNvY2lhbC1vY3RvY2F0OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEY0RThcXFwiO1xcbn1cXG4uaW9uLXNvY2lhbC1waW50ZXJlc3Q6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjJCMVxcXCI7XFxufVxcbi5pb24tc29jaWFsLXBpbnRlcmVzdC1vdXRsaW5lOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYyQjBcXFwiO1xcbn1cXG4uaW9uLXNvY2lhbC1weXRob246YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjRFOVxcXCI7XFxufVxcbi5pb24tc29jaWFsLXJlZGRpdDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMjNCXFxcIjtcXG59XFxuLmlvbi1zb2NpYWwtcmVkZGl0LW91dGxpbmU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjIzQVxcXCI7XFxufVxcbi5pb24tc29jaWFsLXJzczpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMjNEXFxcIjtcXG59XFxuLmlvbi1zb2NpYWwtcnNzLW91dGxpbmU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjIzQ1xcXCI7XFxufVxcbi5pb24tc29jaWFsLXNhc3M6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjRFQVxcXCI7XFxufVxcbi5pb24tc29jaWFsLXNreXBlOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYyM0ZcXFwiO1xcbn1cXG4uaW9uLXNvY2lhbC1za3lwZS1vdXRsaW5lOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYyM0VcXFwiO1xcbn1cXG4uaW9uLXNvY2lhbC1zbmFwY2hhdDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGNEVDXFxcIjtcXG59XFxuLmlvbi1zb2NpYWwtc25hcGNoYXQtb3V0bGluZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGNEVCXFxcIjtcXG59XFxuLmlvbi1zb2NpYWwtdHVtYmxyOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYyNDFcXFwiO1xcbn1cXG4uaW9uLXNvY2lhbC10dW1ibHItb3V0bGluZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMjQwXFxcIjtcXG59XFxuLmlvbi1zb2NpYWwtdHV4OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYyQzVcXFwiO1xcbn1cXG4uaW9uLXNvY2lhbC10d2l0Y2g6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjRFRVxcXCI7XFxufVxcbi5pb24tc29jaWFsLXR3aXRjaC1vdXRsaW5lOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEY0RURcXFwiO1xcbn1cXG4uaW9uLXNvY2lhbC10d2l0dGVyOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYyNDNcXFwiO1xcbn1cXG4uaW9uLXNvY2lhbC10d2l0dGVyLW91dGxpbmU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjI0MlxcXCI7XFxufVxcbi5pb24tc29jaWFsLXVzZDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMzUzXFxcIjtcXG59XFxuLmlvbi1zb2NpYWwtdXNkLW91dGxpbmU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjM1MlxcXCI7XFxufVxcbi5pb24tc29jaWFsLXZpbWVvOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYyNDVcXFwiO1xcbn1cXG4uaW9uLXNvY2lhbC12aW1lby1vdXRsaW5lOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYyNDRcXFwiO1xcbn1cXG4uaW9uLXNvY2lhbC13aGF0c2FwcDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGNEYwXFxcIjtcXG59XFxuLmlvbi1zb2NpYWwtd2hhdHNhcHAtb3V0bGluZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGNEVGXFxcIjtcXG59XFxuLmlvbi1zb2NpYWwtd2luZG93czpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMjQ3XFxcIjtcXG59XFxuLmlvbi1zb2NpYWwtd2luZG93cy1vdXRsaW5lOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYyNDZcXFwiO1xcbn1cXG4uaW9uLXNvY2lhbC13b3JkcHJlc3M6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjI0OVxcXCI7XFxufVxcbi5pb24tc29jaWFsLXdvcmRwcmVzcy1vdXRsaW5lOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYyNDhcXFwiO1xcbn1cXG4uaW9uLXNvY2lhbC15YWhvbzpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMjRCXFxcIjtcXG59XFxuLmlvbi1zb2NpYWwteWFob28tb3V0bGluZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMjRBXFxcIjtcXG59XFxuLmlvbi1zb2NpYWwteWVuOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEY0RjJcXFwiO1xcbn1cXG4uaW9uLXNvY2lhbC15ZW4tb3V0bGluZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGNEYxXFxcIjtcXG59XFxuLmlvbi1zb2NpYWwteW91dHViZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMjREXFxcIjtcXG59XFxuLmlvbi1zb2NpYWwteW91dHViZS1vdXRsaW5lOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYyNENcXFwiO1xcbn1cXG4uaW9uLXNvdXAtY2FuOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEY0RjRcXFwiO1xcbn1cXG4uaW9uLXNvdXAtY2FuLW91dGxpbmU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjRGM1xcXCI7XFxufVxcbi5pb24tc3BlYWtlcnBob25lOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYyQjJcXFwiO1xcbn1cXG4uaW9uLXNwZWVkb21ldGVyOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYyQjNcXFwiO1xcbn1cXG4uaW9uLXNwb29uOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYyQjRcXFwiO1xcbn1cXG4uaW9uLXN0YXI6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjI0RVxcXCI7XFxufVxcbi5pb24tc3RhdHMtYmFyczpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMkI1XFxcIjtcXG59XFxuLmlvbi1zdGVhbTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMzBCXFxcIjtcXG59XFxuLmlvbi1zdG9wOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYyNEZcXFwiO1xcbn1cXG4uaW9uLXRoZXJtb21ldGVyOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYyQjZcXFwiO1xcbn1cXG4uaW9uLXRodW1ic2Rvd246YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjI1MFxcXCI7XFxufVxcbi5pb24tdGh1bWJzdXA6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjI1MVxcXCI7XFxufVxcbi5pb24tdG9nZ2xlOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYzNTVcXFwiO1xcbn1cXG4uaW9uLXRvZ2dsZS1maWxsZWQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjM1NFxcXCI7XFxufVxcbi5pb24tdHJhbnNnZW5kZXI6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjRGNVxcXCI7XFxufVxcbi5pb24tdHJhc2gtYTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMjUyXFxcIjtcXG59XFxuLmlvbi10cmFzaC1iOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYyNTNcXFwiO1xcbn1cXG4uaW9uLXRyb3BoeTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMzU2XFxcIjtcXG59XFxuLmlvbi10c2hpcnQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjRGN1xcXCI7XFxufVxcbi5pb24tdHNoaXJ0LW91dGxpbmU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjRGNlxcXCI7XFxufVxcbi5pb24tdW1icmVsbGE6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjJCN1xcXCI7XFxufVxcbi5pb24tdW5pdmVyc2l0eTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMzU3XFxcIjtcXG59XFxuLmlvbi11bmxvY2tlZDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMjU0XFxcIjtcXG59XFxuLmlvbi11cGxvYWQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjI1NVxcXCI7XFxufVxcbi5pb24tdXNiOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYyQjhcXFwiO1xcbn1cXG4uaW9uLXZpZGVvY2FtZXJhOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYyNTZcXFwiO1xcbn1cXG4uaW9uLXZvbHVtZS1oaWdoOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYyNTdcXFwiO1xcbn1cXG4uaW9uLXZvbHVtZS1sb3c6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjI1OFxcXCI7XFxufVxcbi5pb24tdm9sdW1lLW1lZGl1bTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMjU5XFxcIjtcXG59XFxuLmlvbi12b2x1bWUtbXV0ZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMjVBXFxcIjtcXG59XFxuLmlvbi13YW5kOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYzNThcXFwiO1xcbn1cXG4uaW9uLXdhdGVyZHJvcDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMjVCXFxcIjtcXG59XFxuLmlvbi13aWZpOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYyNUNcXFwiO1xcbn1cXG4uaW9uLXdpbmVnbGFzczpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMkI5XFxcIjtcXG59XFxuLmlvbi13b21hbjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMjVEXFxcIjtcXG59XFxuLmlvbi13cmVuY2g6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjJCQVxcXCI7XFxufVxcbi5pb24teGJveDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMzBDXFxcIjtcXG59XFxuLmljb24tbG9hZGluZzpiZWZvcmUge1xcbiAgLXdlYmtpdC1hbmltYXRpb246IHJvdGF0ZSAxcyBpbmZpbml0ZSBsaW5lYXI7XFxuICAgICAgICAgIGFuaW1hdGlvbjogcm90YXRlIDFzIGluZmluaXRlIGxpbmVhcjtcXG59XFxuLmMtZWxsaXBzaXMge1xcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcXG59XFxuLmMtY2xlYXJmaXgge1xcbiAgem9vbTogMTtcXG59XFxuLmMtY2xlYXJmaXg6YWZ0ZXIge1xcbiAgZGlzcGxheTogdGFibGU7XFxuICBjbGVhcjogYm90aDtcXG4gIGNvbnRlbnQ6ICcnO1xcbiAgaGVpZ2h0OiAwO1xcbn1cXG4uYy1taWRkbGUge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXG59XFxuLmMtY2VudGVyIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuaHRtbCxcXG5ib2R5IHtcXG4gIG1hcmdpbjogMDtcXG4gIGNvbG9yOiAjMzMzO1xcbiAgYmFja2dyb3VuZDogI2VmZWZlZjtcXG4gIGhlaWdodDogMTAwJTtcXG59XFxuYSB7XFxuICBjb2xvcjogIzJkOGNmMDtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuaDEsXFxuaDIsXFxuaDMsXFxuaDQsXFxuaDUge1xcbiAgbWFyZ2luOiAwO1xcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXG4gIGNvbG9yOiAjMDAwO1xcbn1cXG5oMSB7XFxuICBmb250LXNpemU6IDJlbTtcXG59XFxuaDIge1xcbiAgZm9udC1zaXplOiAxLjhlbTtcXG59XFxuaDMge1xcbiAgZm9udC1zaXplOiAxLjVlbTtcXG59XFxuY29kZSB7XFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICBwYWRkaW5nOiAwIDVweDtcXG59XFxuYmxvY2txdW90ZSB7XFxuICBtYXJnaW46IDFlbSAwO1xcbiAgcGFkZGluZzogMXB4IDJlbTtcXG4gIGJhY2tncm91bmQ6ICNmOGY4Zjg7XFxuICBib3JkZXItcmFkaXVzOiAwIDNweCAzcHggMDtcXG4gIGJvcmRlci1sZWZ0OiAycHggc29saWQgI2RiMjgyODtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGxpbmUtaGVpZ2h0OiAyZW07XFxufVxcbmJsb2NrcXVvdGU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6ICchJztcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiA1MCU7XFxuICBtYXJnaW4tdG9wOiAtMTBweDtcXG4gIHdpZHRoOiAyMHB4O1xcbiAgaGVpZ2h0OiAyMHB4O1xcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGJhY2tncm91bmQ6ICNkYjI4Mjg7XFxuICBjb2xvcjogI2ZmZjtcXG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xcbiAgbGVmdDogLTExcHg7XFxufVxcbiNwYWdlLFxcbi5hcHAtd3JhcHBlcixcXG4ubWFpbi13cmFwcGVyIHtcXG4gIGhlaWdodDogMTAwJTtcXG59XFxuLmhlYWRlci13cmFwcGVyIHtcXG4gIGhlaWdodDogODBweDtcXG4gIGxpbmUtaGVpZ2h0OiA4MHB4O1xcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDJweCA1cHggcmdiYSgwLDAsMCwwLjA4KTtcXG4gICAgICAgICAgYm94LXNoYWRvdzogMCAycHggNXB4IHJnYmEoMCwwLDAsMC4wOCk7XFxuICBiYWNrZ3JvdW5kOiAjZmZmO1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgd2lkdGg6IDEwMCU7XFxuICB0b3A6IDA7XFxuICB6LWluZGV4OiA5OTk7XFxufVxcbi5oZWFkZXItd3JhcHBlciBoZWFkZXIge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBtYXJnaW46IDAgYXV0bztcXG59XFxuLmhlYWRlci13cmFwcGVyIC5sb2dvIHtcXG4gIGZvbnQtc2l6ZTogMjRweDtcXG4gIGNvbG9yOiAjMzMzO1xcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XFxufVxcbi5oZWFkZXItd3JhcHBlciBuYXYge1xcbiAgZmxvYXQ6IHJpZ2h0O1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG4uaGVhZGVyLXdyYXBwZXIgbmF2IGEge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgcGFkZGluZzogMCAyMHB4O1xcbiAgY29sb3I6ICMzMzM7XFxufVxcbi5oZWFkZXItd3JhcHBlciBuYXYgYS5hY3RpdmUge1xcbiAgY29sb3I6ICMwYTVlZWU7XFxufVxcbi5oZWFkZXItd3JhcHBlciAuYm9yZGVyIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGJvdHRvbTogMDtcXG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjMGE1ZWVlO1xcbn1cXG4udHJhbnNpdGlvbiB7XFxuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAzNTBtcyBjdWJpYy1iZXppZXIoMC41NSwgMCwgMC4xLCAxKTtcXG4gIHRyYW5zaXRpb246IGFsbCAzNTBtcyBjdWJpYy1iZXppZXIoMC41NSwgMCwgMC4xLCAxKTtcXG59XFxuLmJsdWUge1xcbiAgY29sb3I6ICMwOWQ7XFxufVxcbi5yZWQge1xcbiAgY29sb3I6ICNkMDQ7XFxufVxcbi55ZWxsb3cge1xcbiAgY29sb3I6ICNmZmM0MDA7XFxufVxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXI/e1widXJsXCI6dHJ1ZX0hLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvbGliP3tcInBsdWdpbnNcIjpbbnVsbF19IS4vbm9kZV9tb2R1bGVzL3N0eWx1cy1sb2FkZXI/e1wiaW5jbHVkZSBjc3NcIjp0cnVlLFwic291cmNlTWFwXCI6ZmFsc2V9IS4vc2l0ZS9zcmMvcGFnZXMvbGF5b3V0LnN0eWxcbi8vIG1vZHVsZSBpZCA9IC4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/e1widXJsXCI6dHJ1ZX0hLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvbGliL2luZGV4LmpzP3tcInBsdWdpbnNcIjpbbnVsbF19IS4vbm9kZV9tb2R1bGVzL3N0eWx1cy1sb2FkZXIvaW5kZXguanM/e1wiaW5jbHVkZSBjc3NcIjp0cnVlLFwic291cmNlTWFwXCI6ZmFsc2V9IS4vc2l0ZS9zcmMvcGFnZXMvbGF5b3V0LnN0eWxcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBlc2NhcGUodXJsKSB7XG4gICAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gICAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gICAgfVxuICAgIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICAgIGlmICgvW1wiJygpIFxcdFxcbl0vLnRlc3QodXJsKSkge1xuICAgICAgICByZXR1cm4gJ1wiJyArIHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csICdcXFxcbicpICsgJ1wiJ1xuICAgIH1cblxuICAgIHJldHVybiB1cmxcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL3VybC9lc2NhcGUuanNcbi8vIG1vZHVsZSBpZCA9IC4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL3VybC9lc2NhcGUuanNcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwidmFyIG1hcCA9IHtcblx0XCIuL2NvbXBvbmVudHMvYnJlYWRjcnVtYi9kZW1vcy9iYXNpYy9pbmRleC5qc1wiOiBbXG5cdFx0XCIuL3NpdGUvY29tcG9uZW50cy9icmVhZGNydW1iL2RlbW9zL2Jhc2ljL2luZGV4LmpzXCIsXG5cdFx0MTE4LFxuXHRcdDIxNFxuXHRdLFxuXHRcIi4vY29tcG9uZW50cy9icmVhZGNydW1iL2RlbW9zL3NlcGFyYXRvci9pbmRleC5qc1wiOiBbXG5cdFx0XCIuL3NpdGUvY29tcG9uZW50cy9icmVhZGNydW1iL2RlbW9zL3NlcGFyYXRvci9pbmRleC5qc1wiLFxuXHRcdDExOCxcblx0XHQxODFcblx0XSxcblx0XCIuL2NvbXBvbmVudHMvYnJlYWRjcnVtYi9pbmRleC5qc1wiOiBbXG5cdFx0XCIuL3NpdGUvY29tcG9uZW50cy9icmVhZGNydW1iL2luZGV4LmpzXCIsXG5cdFx0MTE4LFxuXHRcdDEzN1xuXHRdLFxuXHRcIi4vY29tcG9uZW50cy9idXR0b24vZGVtb3MvYmFzaWMvaW5kZXguanNcIjogW1xuXHRcdFwiLi9zaXRlL2NvbXBvbmVudHMvYnV0dG9uL2RlbW9zL2Jhc2ljL2luZGV4LmpzXCIsXG5cdFx0MTE4LFxuXHRcdDE4MFxuXHRdLFxuXHRcIi4vY29tcG9uZW50cy9idXR0b24vZGVtb3MvZGlzYWJsZWQvaW5kZXguanNcIjogW1xuXHRcdFwiLi9zaXRlL2NvbXBvbmVudHMvYnV0dG9uL2RlbW9zL2Rpc2FibGVkL2luZGV4LmpzXCIsXG5cdFx0MTE4LFxuXHRcdDIxM1xuXHRdLFxuXHRcIi4vY29tcG9uZW50cy9idXR0b24vZGVtb3MvZ3JvdXAvaW5kZXguanNcIjogW1xuXHRcdFwiLi9zaXRlL2NvbXBvbmVudHMvYnV0dG9uL2RlbW9zL2dyb3VwL2luZGV4LmpzXCIsXG5cdFx0MTE4LFxuXHRcdDE3OVxuXHRdLFxuXHRcIi4vY29tcG9uZW50cy9idXR0b24vZGVtb3MvaWNvbi9pbmRleC5qc1wiOiBbXG5cdFx0XCIuL3NpdGUvY29tcG9uZW50cy9idXR0b24vZGVtb3MvaWNvbi9pbmRleC5qc1wiLFxuXHRcdDExOCxcblx0XHQxNzhcblx0XSxcblx0XCIuL2NvbXBvbmVudHMvYnV0dG9uL2RlbW9zL2xvYWRpbmcvaW5kZXguanNcIjogW1xuXHRcdFwiLi9zaXRlL2NvbXBvbmVudHMvYnV0dG9uL2RlbW9zL2xvYWRpbmcvaW5kZXguanNcIixcblx0XHQxMTgsXG5cdFx0MTc3XG5cdF0sXG5cdFwiLi9jb21wb25lbnRzL2J1dHRvbi9kZW1vcy9zaXplL2luZGV4LmpzXCI6IFtcblx0XHRcIi4vc2l0ZS9jb21wb25lbnRzL2J1dHRvbi9kZW1vcy9zaXplL2luZGV4LmpzXCIsXG5cdFx0MTE4LFxuXHRcdDE3NlxuXHRdLFxuXHRcIi4vY29tcG9uZW50cy9idXR0b24vZGVtb3MvdGFnTmFtZS9pbmRleC5qc1wiOiBbXG5cdFx0XCIuL3NpdGUvY29tcG9uZW50cy9idXR0b24vZGVtb3MvdGFnTmFtZS9pbmRleC5qc1wiLFxuXHRcdDExOCxcblx0XHQyMTJcblx0XSxcblx0XCIuL2NvbXBvbmVudHMvYnV0dG9uL2luZGV4LmpzXCI6IFtcblx0XHRcIi4vc2l0ZS9jb21wb25lbnRzL2J1dHRvbi9pbmRleC5qc1wiLFxuXHRcdDExOCxcblx0XHQxMTlcblx0XSxcblx0XCIuL2NvbXBvbmVudHMvY2hlY2tib3gvZGVtb3MvYmFzaWMvaW5kZXguanNcIjogW1xuXHRcdFwiLi9zaXRlL2NvbXBvbmVudHMvY2hlY2tib3gvZGVtb3MvYmFzaWMvaW5kZXguanNcIixcblx0XHQxMTgsXG5cdFx0MTc1XG5cdF0sXG5cdFwiLi9jb21wb25lbnRzL2NoZWNrYm94L2RlbW9zL2dyb3VwL2luZGV4LmpzXCI6IFtcblx0XHRcIi4vc2l0ZS9jb21wb25lbnRzL2NoZWNrYm94L2RlbW9zL2dyb3VwL2luZGV4LmpzXCIsXG5cdFx0MTE4LFxuXHRcdDE3NFxuXHRdLFxuXHRcIi4vY29tcG9uZW50cy9jaGVja2JveC9kZW1vcy92YWx1ZS9pbmRleC5qc1wiOiBbXG5cdFx0XCIuL3NpdGUvY29tcG9uZW50cy9jaGVja2JveC9kZW1vcy92YWx1ZS9pbmRleC5qc1wiLFxuXHRcdDExOCxcblx0XHQxNzNcblx0XSxcblx0XCIuL2NvbXBvbmVudHMvY2hlY2tib3gvaW5kZXguanNcIjogW1xuXHRcdFwiLi9zaXRlL2NvbXBvbmVudHMvY2hlY2tib3gvaW5kZXguanNcIixcblx0XHQxMTgsXG5cdFx0MTMwXG5cdF0sXG5cdFwiLi9jb21wb25lbnRzL2RhdGVwaWNrZXIvZGVtb3MvYmFzaWMvaW5kZXguanNcIjogW1xuXHRcdFwiLi9zaXRlL2NvbXBvbmVudHMvZGF0ZXBpY2tlci9kZW1vcy9iYXNpYy9pbmRleC5qc1wiLFxuXHRcdDExOCxcblx0XHQxNzJcblx0XSxcblx0XCIuL2NvbXBvbmVudHMvZGF0ZXBpY2tlci9kZW1vcy9jbGVhcmFibGUvaW5kZXguanNcIjogW1xuXHRcdFwiLi9zaXRlL2NvbXBvbmVudHMvZGF0ZXBpY2tlci9kZW1vcy9jbGVhcmFibGUvaW5kZXguanNcIixcblx0XHQxMTgsXG5cdFx0MjExXG5cdF0sXG5cdFwiLi9jb21wb25lbnRzL2RhdGVwaWNrZXIvZGVtb3MvZGF0ZXRpbWUvaW5kZXguanNcIjogW1xuXHRcdFwiLi9zaXRlL2NvbXBvbmVudHMvZGF0ZXBpY2tlci9kZW1vcy9kYXRldGltZS9pbmRleC5qc1wiLFxuXHRcdDExOCxcblx0XHQxNzFcblx0XSxcblx0XCIuL2NvbXBvbmVudHMvZGF0ZXBpY2tlci9kZW1vcy9kaXNhYmxlZERhdGUvaW5kZXguanNcIjogW1xuXHRcdFwiLi9zaXRlL2NvbXBvbmVudHMvZGF0ZXBpY2tlci9kZW1vcy9kaXNhYmxlZERhdGUvaW5kZXguanNcIixcblx0XHQxMTgsXG5cdFx0MjEwXG5cdF0sXG5cdFwiLi9jb21wb25lbnRzL2RhdGVwaWNrZXIvZGVtb3MvbWF4TWluL2luZGV4LmpzXCI6IFtcblx0XHRcIi4vc2l0ZS9jb21wb25lbnRzL2RhdGVwaWNrZXIvZGVtb3MvbWF4TWluL2luZGV4LmpzXCIsXG5cdFx0MTE4LFxuXHRcdDE3MFxuXHRdLFxuXHRcIi4vY29tcG9uZW50cy9kYXRlcGlja2VyL2RlbW9zL211bHRpcGxlL2luZGV4LmpzXCI6IFtcblx0XHRcIi4vc2l0ZS9jb21wb25lbnRzL2RhdGVwaWNrZXIvZGVtb3MvbXVsdGlwbGUvaW5kZXguanNcIixcblx0XHQxMTgsXG5cdFx0MjA5XG5cdF0sXG5cdFwiLi9jb21wb25lbnRzL2RhdGVwaWNrZXIvaW5kZXguanNcIjogW1xuXHRcdFwiLi9zaXRlL2NvbXBvbmVudHMvZGF0ZXBpY2tlci9pbmRleC5qc1wiLFxuXHRcdDExOCxcblx0XHQxMjNcblx0XSxcblx0XCIuL2NvbXBvbmVudHMvZGlhbG9nL2RlbW9zL2Jhc2ljL2luZGV4LmpzXCI6IFtcblx0XHRcIi4vc2l0ZS9jb21wb25lbnRzL2RpYWxvZy9kZW1vcy9iYXNpYy9pbmRleC5qc1wiLFxuXHRcdDExOCxcblx0XHQyMDhcblx0XSxcblx0XCIuL2NvbXBvbmVudHMvZGlhbG9nL2RlbW9zL2Jsb2NrL2luZGV4LmpzXCI6IFtcblx0XHRcIi4vc2l0ZS9jb21wb25lbnRzL2RpYWxvZy9kZW1vcy9ibG9jay9pbmRleC5qc1wiLFxuXHRcdDExOCxcblx0XHQyMDdcblx0XSxcblx0XCIuL2NvbXBvbmVudHMvZGlhbG9nL2RlbW9zL2V2ZW50cy9pbmRleC5qc1wiOiBbXG5cdFx0XCIuL3NpdGUvY29tcG9uZW50cy9kaWFsb2cvZGVtb3MvZXZlbnRzL2luZGV4LmpzXCIsXG5cdFx0MTE4LFxuXHRcdDIwNlxuXHRdLFxuXHRcIi4vY29tcG9uZW50cy9kaWFsb2cvZGVtb3MvZXh0ZW5kcy9pbmRleC5qc1wiOiBbXG5cdFx0XCIuL3NpdGUvY29tcG9uZW50cy9kaWFsb2cvZGVtb3MvZXh0ZW5kcy9pbmRleC5qc1wiLFxuXHRcdDExOCxcblx0XHQxNjlcblx0XSxcblx0XCIuL2NvbXBvbmVudHMvZGlhbG9nL2luZGV4LmpzXCI6IFtcblx0XHRcIi4vc2l0ZS9jb21wb25lbnRzL2RpYWxvZy9pbmRleC5qc1wiLFxuXHRcdDExOCxcblx0XHQxMzFcblx0XSxcblx0XCIuL2NvbXBvbmVudHMvZHJvcGRvd24vZGVtb3MvYmFzaWMvaW5kZXguanNcIjogW1xuXHRcdFwiLi9zaXRlL2NvbXBvbmVudHMvZHJvcGRvd24vZGVtb3MvYmFzaWMvaW5kZXguanNcIixcblx0XHQxMTgsXG5cdFx0MjA1XG5cdF0sXG5cdFwiLi9jb21wb25lbnRzL2Ryb3Bkb3duL2RlbW9zL2Rpc2FibGVkL2luZGV4LmpzXCI6IFtcblx0XHRcIi4vc2l0ZS9jb21wb25lbnRzL2Ryb3Bkb3duL2RlbW9zL2Rpc2FibGVkL2luZGV4LmpzXCIsXG5cdFx0MTE4LFxuXHRcdDE2OFxuXHRdLFxuXHRcIi4vY29tcG9uZW50cy9kcm9wZG93bi9kZW1vcy9uZXN0ZWQvaW5kZXguanNcIjogW1xuXHRcdFwiLi9zaXRlL2NvbXBvbmVudHMvZHJvcGRvd24vZGVtb3MvbmVzdGVkL2luZGV4LmpzXCIsXG5cdFx0MTE4LFxuXHRcdDE2N1xuXHRdLFxuXHRcIi4vY29tcG9uZW50cy9kcm9wZG93bi9kZW1vcy9wb3NpdGlvbi9pbmRleC5qc1wiOiBbXG5cdFx0XCIuL3NpdGUvY29tcG9uZW50cy9kcm9wZG93bi9kZW1vcy9wb3NpdGlvbi9pbmRleC5qc1wiLFxuXHRcdDExOCxcblx0XHQxNjZcblx0XSxcblx0XCIuL2NvbXBvbmVudHMvZHJvcGRvd24vZGVtb3MvdHJpZ2dlci9pbmRleC5qc1wiOiBbXG5cdFx0XCIuL3NpdGUvY29tcG9uZW50cy9kcm9wZG93bi9kZW1vcy90cmlnZ2VyL2luZGV4LmpzXCIsXG5cdFx0MTE4LFxuXHRcdDE2NVxuXHRdLFxuXHRcIi4vY29tcG9uZW50cy9kcm9wZG93bi9pbmRleC5qc1wiOiBbXG5cdFx0XCIuL3NpdGUvY29tcG9uZW50cy9kcm9wZG93bi9pbmRleC5qc1wiLFxuXHRcdDExOCxcblx0XHQxMjJcblx0XSxcblx0XCIuL2NvbXBvbmVudHMvZWRpdGFibGUvZGVtb3MvYmFzaWMvaW5kZXguanNcIjogW1xuXHRcdFwiLi9zaXRlL2NvbXBvbmVudHMvZWRpdGFibGUvZGVtb3MvYmFzaWMvaW5kZXguanNcIixcblx0XHQxMTgsXG5cdFx0MTY0XG5cdF0sXG5cdFwiLi9jb21wb25lbnRzL2VkaXRhYmxlL2RlbW9zL3ZhbGlkYXRlL2luZGV4LmpzXCI6IFtcblx0XHRcIi4vc2l0ZS9jb21wb25lbnRzL2VkaXRhYmxlL2RlbW9zL3ZhbGlkYXRlL2luZGV4LmpzXCIsXG5cdFx0MTE4LFxuXHRcdDIwNFxuXHRdLFxuXHRcIi4vY29tcG9uZW50cy9lZGl0YWJsZS9pbmRleC5qc1wiOiBbXG5cdFx0XCIuL3NpdGUvY29tcG9uZW50cy9lZGl0YWJsZS9pbmRleC5qc1wiLFxuXHRcdDExOCxcblx0XHQxMzZcblx0XSxcblx0XCIuL2NvbXBvbmVudHMvZm9ybS9kZW1vcy9iYXNpYy9pbmRleC5qc1wiOiBbXG5cdFx0XCIuL3NpdGUvY29tcG9uZW50cy9mb3JtL2RlbW9zL2Jhc2ljL2luZGV4LmpzXCIsXG5cdFx0MTE4LFxuXHRcdDEzOFxuXHRdLFxuXHRcIi4vY29tcG9uZW50cy9mb3JtL2RlbW9zL2N1c3RvbS9pbmRleC5qc1wiOiBbXG5cdFx0XCIuL3NpdGUvY29tcG9uZW50cy9mb3JtL2RlbW9zL2N1c3RvbS9pbmRleC5qc1wiLFxuXHRcdDExOCxcblx0XHQxNjNcblx0XSxcblx0XCIuL2NvbXBvbmVudHMvZm9ybS9kZW1vcy9sYWJlbC9pbmRleC5qc1wiOiBbXG5cdFx0XCIuL3NpdGUvY29tcG9uZW50cy9mb3JtL2RlbW9zL2xhYmVsL2luZGV4LmpzXCIsXG5cdFx0MTE4LFxuXHRcdDIwM1xuXHRdLFxuXHRcIi4vY29tcG9uZW50cy9mb3JtL2RlbW9zL3ZhcmlhYmxlL2luZGV4LmpzXCI6IFtcblx0XHRcIi4vc2l0ZS9jb21wb25lbnRzL2Zvcm0vZGVtb3MvdmFyaWFibGUvaW5kZXguanNcIixcblx0XHQxMTgsXG5cdFx0MjAyXG5cdF0sXG5cdFwiLi9jb21wb25lbnRzL2Zvcm0vaW5kZXguanNcIjogW1xuXHRcdFwiLi9zaXRlL2NvbXBvbmVudHMvZm9ybS9pbmRleC5qc1wiLFxuXHRcdDExOCxcblx0XHQxMjZcblx0XSxcblx0XCIuL2NvbXBvbmVudHMvZ3JpZC9kZW1vcy9iYXNpYy9pbmRleC5qc1wiOiBbXG5cdFx0XCIuL3NpdGUvY29tcG9uZW50cy9ncmlkL2RlbW9zL2Jhc2ljL2luZGV4LmpzXCIsXG5cdFx0MTE4LFxuXHRcdDE2MlxuXHRdLFxuXHRcIi4vY29tcG9uZW50cy9ncmlkL2RlbW9zL2d1dHRlci9pbmRleC5qc1wiOiBbXG5cdFx0XCIuL3NpdGUvY29tcG9uZW50cy9ncmlkL2RlbW9zL2d1dHRlci9pbmRleC5qc1wiLFxuXHRcdDExOCxcblx0XHQxNjFcblx0XSxcblx0XCIuL2NvbXBvbmVudHMvZ3JpZC9pbmRleC5qc1wiOiBbXG5cdFx0XCIuL3NpdGUvY29tcG9uZW50cy9ncmlkL2luZGV4LmpzXCIsXG5cdFx0MTE4LFxuXHRcdDEzMlxuXHRdLFxuXHRcIi4vY29tcG9uZW50cy9pbnB1dC9kZW1vcy9hdXRvd2lkdGgvaW5kZXguanNcIjogW1xuXHRcdFwiLi9zaXRlL2NvbXBvbmVudHMvaW5wdXQvZGVtb3MvYXV0b3dpZHRoL2luZGV4LmpzXCIsXG5cdFx0MTE4LFxuXHRcdDIwMVxuXHRdLFxuXHRcIi4vY29tcG9uZW50cy9pbnB1dC9kZW1vcy9iYXNpYy9pbmRleC5qc1wiOiBbXG5cdFx0XCIuL3NpdGUvY29tcG9uZW50cy9pbnB1dC9kZW1vcy9iYXNpYy9pbmRleC5qc1wiLFxuXHRcdDExOCxcblx0XHQxNjBcblx0XSxcblx0XCIuL2NvbXBvbmVudHMvaW5wdXQvZGVtb3MvYmxvY2tzL2luZGV4LmpzXCI6IFtcblx0XHRcIi4vc2l0ZS9jb21wb25lbnRzL2lucHV0L2RlbW9zL2Jsb2Nrcy9pbmRleC5qc1wiLFxuXHRcdDExOCxcblx0XHQxNTlcblx0XSxcblx0XCIuL2NvbXBvbmVudHMvaW5wdXQvZGVtb3MvY2xlYXJhYmxlL2luZGV4LmpzXCI6IFtcblx0XHRcIi4vc2l0ZS9jb21wb25lbnRzL2lucHV0L2RlbW9zL2NsZWFyYWJsZS9pbmRleC5qc1wiLFxuXHRcdDExOCxcblx0XHQxNThcblx0XSxcblx0XCIuL2NvbXBvbmVudHMvaW5wdXQvZGVtb3Mvc2l6ZS9pbmRleC5qc1wiOiBbXG5cdFx0XCIuL3NpdGUvY29tcG9uZW50cy9pbnB1dC9kZW1vcy9zaXplL2luZGV4LmpzXCIsXG5cdFx0MTE4LFxuXHRcdDE1N1xuXHRdLFxuXHRcIi4vY29tcG9uZW50cy9pbnB1dC9kZW1vcy90ZXh0YXJlYS9pbmRleC5qc1wiOiBbXG5cdFx0XCIuL3NpdGUvY29tcG9uZW50cy9pbnB1dC9kZW1vcy90ZXh0YXJlYS9pbmRleC5qc1wiLFxuXHRcdDExOCxcblx0XHQyMDBcblx0XSxcblx0XCIuL2NvbXBvbmVudHMvaW5wdXQvaW5kZXguanNcIjogW1xuXHRcdFwiLi9zaXRlL2NvbXBvbmVudHMvaW5wdXQvaW5kZXguanNcIixcblx0XHQxMTgsXG5cdFx0MTIwXG5cdF0sXG5cdFwiLi9jb21wb25lbnRzL21lc3NhZ2UvZGVtb3MvYmFzaWMvaW5kZXguanNcIjogW1xuXHRcdFwiLi9zaXRlL2NvbXBvbmVudHMvbWVzc2FnZS9kZW1vcy9iYXNpYy9pbmRleC5qc1wiLFxuXHRcdDExOCxcblx0XHQxOTlcblx0XSxcblx0XCIuL2NvbXBvbmVudHMvbWVzc2FnZS9kZW1vcy9jdXN0b20vaW5kZXguanNcIjogW1xuXHRcdFwiLi9zaXRlL2NvbXBvbmVudHMvbWVzc2FnZS9kZW1vcy9jdXN0b20vaW5kZXguanNcIixcblx0XHQxMTgsXG5cdFx0MTk4XG5cdF0sXG5cdFwiLi9jb21wb25lbnRzL21lc3NhZ2UvZGVtb3MvZHVyYXRpb24vaW5kZXguanNcIjogW1xuXHRcdFwiLi9zaXRlL2NvbXBvbmVudHMvbWVzc2FnZS9kZW1vcy9kdXJhdGlvbi9pbmRleC5qc1wiLFxuXHRcdDExOCxcblx0XHQxOTdcblx0XSxcblx0XCIuL2NvbXBvbmVudHMvbWVzc2FnZS9pbmRleC5qc1wiOiBbXG5cdFx0XCIuL3NpdGUvY29tcG9uZW50cy9tZXNzYWdlL2luZGV4LmpzXCIsXG5cdFx0MTE4LFxuXHRcdDEzNVxuXHRdLFxuXHRcIi4vY29tcG9uZW50cy9wYWdpbmF0aW9uL2RlbW9zL2Jhc2ljL2luZGV4LmpzXCI6IFtcblx0XHRcIi4vc2l0ZS9jb21wb25lbnRzL3BhZ2luYXRpb24vZGVtb3MvYmFzaWMvaW5kZXguanNcIixcblx0XHQxMTgsXG5cdFx0MTU2XG5cdF0sXG5cdFwiLi9jb21wb25lbnRzL3BhZ2luYXRpb24vZGVtb3MvY291bnRzL2luZGV4LmpzXCI6IFtcblx0XHRcIi4vc2l0ZS9jb21wb25lbnRzL3BhZ2luYXRpb24vZGVtb3MvY291bnRzL2luZGV4LmpzXCIsXG5cdFx0MTE4LFxuXHRcdDE1NVxuXHRdLFxuXHRcIi4vY29tcG9uZW50cy9wYWdpbmF0aW9uL2RlbW9zL2N1cnJlbnQvaW5kZXguanNcIjogW1xuXHRcdFwiLi9zaXRlL2NvbXBvbmVudHMvcGFnaW5hdGlvbi9kZW1vcy9jdXJyZW50L2luZGV4LmpzXCIsXG5cdFx0MTE4LFxuXHRcdDE5NlxuXHRdLFxuXHRcIi4vY29tcG9uZW50cy9wYWdpbmF0aW9uL2RlbW9zL2dvdG8vaW5kZXguanNcIjogW1xuXHRcdFwiLi9zaXRlL2NvbXBvbmVudHMvcGFnaW5hdGlvbi9kZW1vcy9nb3RvL2luZGV4LmpzXCIsXG5cdFx0MTE4LFxuXHRcdDE5NVxuXHRdLFxuXHRcIi4vY29tcG9uZW50cy9wYWdpbmF0aW9uL2RlbW9zL3NpemUvaW5kZXguanNcIjogW1xuXHRcdFwiLi9zaXRlL2NvbXBvbmVudHMvcGFnaW5hdGlvbi9kZW1vcy9zaXplL2luZGV4LmpzXCIsXG5cdFx0MTE4LFxuXHRcdDE1NFxuXHRdLFxuXHRcIi4vY29tcG9uZW50cy9wYWdpbmF0aW9uL2luZGV4LmpzXCI6IFtcblx0XHRcIi4vc2l0ZS9jb21wb25lbnRzL3BhZ2luYXRpb24vaW5kZXguanNcIixcblx0XHQxMTgsXG5cdFx0MTI1XG5cdF0sXG5cdFwiLi9jb21wb25lbnRzL3Byb2dyZXNzL2RlbW9zL2Jhc2ljL2luZGV4LmpzXCI6IFtcblx0XHRcIi4vc2l0ZS9jb21wb25lbnRzL3Byb2dyZXNzL2RlbW9zL2Jhc2ljL2luZGV4LmpzXCIsXG5cdFx0MTE4LFxuXHRcdDE5NFxuXHRdLFxuXHRcIi4vY29tcG9uZW50cy9wcm9ncmVzcy9kZW1vcy9jaGlsZHJlbi9pbmRleC5qc1wiOiBbXG5cdFx0XCIuL3NpdGUvY29tcG9uZW50cy9wcm9ncmVzcy9kZW1vcy9jaGlsZHJlbi9pbmRleC5qc1wiLFxuXHRcdDExOCxcblx0XHQxNTNcblx0XSxcblx0XCIuL2NvbXBvbmVudHMvcHJvZ3Jlc3MvZGVtb3MvY2lyY2xlL2luZGV4LmpzXCI6IFtcblx0XHRcIi4vc2l0ZS9jb21wb25lbnRzL3Byb2dyZXNzL2RlbW9zL2NpcmNsZS9pbmRleC5qc1wiLFxuXHRcdDExOCxcblx0XHQxOTNcblx0XSxcblx0XCIuL2NvbXBvbmVudHMvcHJvZ3Jlc3MvZGVtb3Mvc2l6ZS9pbmRleC5qc1wiOiBbXG5cdFx0XCIuL3NpdGUvY29tcG9uZW50cy9wcm9ncmVzcy9kZW1vcy9zaXplL2luZGV4LmpzXCIsXG5cdFx0MTE4LFxuXHRcdDE1MlxuXHRdLFxuXHRcIi4vY29tcG9uZW50cy9wcm9ncmVzcy9kZW1vcy9zdGF0dXMvaW5kZXguanNcIjogW1xuXHRcdFwiLi9zaXRlL2NvbXBvbmVudHMvcHJvZ3Jlc3MvZGVtb3Mvc3RhdHVzL2luZGV4LmpzXCIsXG5cdFx0MTE4LFxuXHRcdDE1MVxuXHRdLFxuXHRcIi4vY29tcG9uZW50cy9wcm9ncmVzcy9pbmRleC5qc1wiOiBbXG5cdFx0XCIuL3NpdGUvY29tcG9uZW50cy9wcm9ncmVzcy9pbmRleC5qc1wiLFxuXHRcdDExOCxcblx0XHQxMjRcblx0XSxcblx0XCIuL2NvbXBvbmVudHMvcmFkaW8vZGVtb3MvYmFzaWMvaW5kZXguanNcIjogW1xuXHRcdFwiLi9zaXRlL2NvbXBvbmVudHMvcmFkaW8vZGVtb3MvYmFzaWMvaW5kZXguanNcIixcblx0XHQxMTgsXG5cdFx0MTUwXG5cdF0sXG5cdFwiLi9jb21wb25lbnRzL3JhZGlvL2RlbW9zL2dyb3VwL2luZGV4LmpzXCI6IFtcblx0XHRcIi4vc2l0ZS9jb21wb25lbnRzL3JhZGlvL2RlbW9zL2dyb3VwL2luZGV4LmpzXCIsXG5cdFx0MTE4LFxuXHRcdDE0OVxuXHRdLFxuXHRcIi4vY29tcG9uZW50cy9yYWRpby9kZW1vcy92YWx1ZS9pbmRleC5qc1wiOiBbXG5cdFx0XCIuL3NpdGUvY29tcG9uZW50cy9yYWRpby9kZW1vcy92YWx1ZS9pbmRleC5qc1wiLFxuXHRcdDExOCxcblx0XHQxNDhcblx0XSxcblx0XCIuL2NvbXBvbmVudHMvcmFkaW8vaW5kZXguanNcIjogW1xuXHRcdFwiLi9zaXRlL2NvbXBvbmVudHMvcmFkaW8vaW5kZXguanNcIixcblx0XHQxMTgsXG5cdFx0MTI5XG5cdF0sXG5cdFwiLi9jb21wb25lbnRzL3NlbGVjdC9kZW1vcy9iYXNpYy9pbmRleC5qc1wiOiBbXG5cdFx0XCIuL3NpdGUvY29tcG9uZW50cy9zZWxlY3QvZGVtb3MvYmFzaWMvaW5kZXguanNcIixcblx0XHQxMTgsXG5cdFx0MTkyXG5cdF0sXG5cdFwiLi9jb21wb25lbnRzL3NlbGVjdC9kZW1vcy9jbGVhcmFibGUvaW5kZXguanNcIjogW1xuXHRcdFwiLi9zaXRlL2NvbXBvbmVudHMvc2VsZWN0L2RlbW9zL2NsZWFyYWJsZS9pbmRleC5qc1wiLFxuXHRcdDExOCxcblx0XHQxOTFcblx0XSxcblx0XCIuL2NvbXBvbmVudHMvc2VsZWN0L2RlbW9zL2N1c3RvbS9pbmRleC5qc1wiOiBbXG5cdFx0XCIuL3NpdGUvY29tcG9uZW50cy9zZWxlY3QvZGVtb3MvY3VzdG9tL2luZGV4LmpzXCIsXG5cdFx0MTE4LFxuXHRcdDE5MFxuXHRdLFxuXHRcIi4vY29tcG9uZW50cy9zZWxlY3QvZGVtb3MvZGlzYWJsZWQvaW5kZXguanNcIjogW1xuXHRcdFwiLi9zaXRlL2NvbXBvbmVudHMvc2VsZWN0L2RlbW9zL2Rpc2FibGVkL2luZGV4LmpzXCIsXG5cdFx0MTE4LFxuXHRcdDE4OVxuXHRdLFxuXHRcIi4vY29tcG9uZW50cy9zZWxlY3QvZGVtb3MvZmlsdGVyYWJsZS9pbmRleC5qc1wiOiBbXG5cdFx0XCIuL3NpdGUvY29tcG9uZW50cy9zZWxlY3QvZGVtb3MvZmlsdGVyYWJsZS9pbmRleC5qc1wiLFxuXHRcdDExOCxcblx0XHQxODhcblx0XSxcblx0XCIuL2NvbXBvbmVudHMvc2VsZWN0L2RlbW9zL2dyb3VwL2luZGV4LmpzXCI6IFtcblx0XHRcIi4vc2l0ZS9jb21wb25lbnRzL3NlbGVjdC9kZW1vcy9ncm91cC9pbmRleC5qc1wiLFxuXHRcdDExOCxcblx0XHQxODdcblx0XSxcblx0XCIuL2NvbXBvbmVudHMvc2VsZWN0L2RlbW9zL211bHRpcGxlL2luZGV4LmpzXCI6IFtcblx0XHRcIi4vc2l0ZS9jb21wb25lbnRzL3NlbGVjdC9kZW1vcy9tdWx0aXBsZS9pbmRleC5qc1wiLFxuXHRcdDExOCxcblx0XHQxODZcblx0XSxcblx0XCIuL2NvbXBvbmVudHMvc2VsZWN0L2RlbW9zL3NpemUvaW5kZXguanNcIjogW1xuXHRcdFwiLi9zaXRlL2NvbXBvbmVudHMvc2VsZWN0L2RlbW9zL3NpemUvaW5kZXguanNcIixcblx0XHQxMTgsXG5cdFx0MTQ3XG5cdF0sXG5cdFwiLi9jb21wb25lbnRzL3NlbGVjdC9pbmRleC5qc1wiOiBbXG5cdFx0XCIuL3NpdGUvY29tcG9uZW50cy9zZWxlY3QvaW5kZXguanNcIixcblx0XHQxMTgsXG5cdFx0MTIxXG5cdF0sXG5cdFwiLi9jb21wb25lbnRzL3NsaWRlci9kZW1vcy9iYXNpYy9pbmRleC5qc1wiOiBbXG5cdFx0XCIuL3NpdGUvY29tcG9uZW50cy9zbGlkZXIvZGVtb3MvYmFzaWMvaW5kZXguanNcIixcblx0XHQxMTgsXG5cdFx0MTQ2XG5cdF0sXG5cdFwiLi9jb21wb25lbnRzL3NsaWRlci9kZW1vcy9kaXNhYmxlZC9pbmRleC5qc1wiOiBbXG5cdFx0XCIuL3NpdGUvY29tcG9uZW50cy9zbGlkZXIvZGVtb3MvZGlzYWJsZWQvaW5kZXguanNcIixcblx0XHQxMTgsXG5cdFx0MTQ1XG5cdF0sXG5cdFwiLi9jb21wb25lbnRzL3NsaWRlci9kZW1vcy9yYW5nZS9pbmRleC5qc1wiOiBbXG5cdFx0XCIuL3NpdGUvY29tcG9uZW50cy9zbGlkZXIvZGVtb3MvcmFuZ2UvaW5kZXguanNcIixcblx0XHQxMTgsXG5cdFx0MTg1XG5cdF0sXG5cdFwiLi9jb21wb25lbnRzL3NsaWRlci9kZW1vcy9zdGVwL2luZGV4LmpzXCI6IFtcblx0XHRcIi4vc2l0ZS9jb21wb25lbnRzL3NsaWRlci9kZW1vcy9zdGVwL2luZGV4LmpzXCIsXG5cdFx0MTE4LFxuXHRcdDE0NFxuXHRdLFxuXHRcIi4vY29tcG9uZW50cy9zbGlkZXIvaW5kZXguanNcIjogW1xuXHRcdFwiLi9zaXRlL2NvbXBvbmVudHMvc2xpZGVyL2luZGV4LmpzXCIsXG5cdFx0MTE4LFxuXHRcdDEyN1xuXHRdLFxuXHRcIi4vY29tcG9uZW50cy9zcGlubmVyL2RlbW9zL2Jhc2ljL2luZGV4LmpzXCI6IFtcblx0XHRcIi4vc2l0ZS9jb21wb25lbnRzL3NwaW5uZXIvZGVtb3MvYmFzaWMvaW5kZXguanNcIixcblx0XHQxMTgsXG5cdFx0MTQzXG5cdF0sXG5cdFwiLi9jb21wb25lbnRzL3NwaW5uZXIvZGVtb3Mvc2l6ZS9pbmRleC5qc1wiOiBbXG5cdFx0XCIuL3NpdGUvY29tcG9uZW50cy9zcGlubmVyL2RlbW9zL3NpemUvaW5kZXguanNcIixcblx0XHQxMTgsXG5cdFx0MTQyXG5cdF0sXG5cdFwiLi9jb21wb25lbnRzL3NwaW5uZXIvZGVtb3Mvc3RlcC9pbmRleC5qc1wiOiBbXG5cdFx0XCIuL3NpdGUvY29tcG9uZW50cy9zcGlubmVyL2RlbW9zL3N0ZXAvaW5kZXguanNcIixcblx0XHQxMTgsXG5cdFx0MTQxXG5cdF0sXG5cdFwiLi9jb21wb25lbnRzL3NwaW5uZXIvaW5kZXguanNcIjogW1xuXHRcdFwiLi9zaXRlL2NvbXBvbmVudHMvc3Bpbm5lci9pbmRleC5qc1wiLFxuXHRcdDExOCxcblx0XHQxMjhcblx0XSxcblx0XCIuL2NvbXBvbmVudHMvc3RlcHMvZGVtb3MvYmFzaWMvaW5kZXguanNcIjogW1xuXHRcdFwiLi9zaXRlL2NvbXBvbmVudHMvc3RlcHMvZGVtb3MvYmFzaWMvaW5kZXguanNcIixcblx0XHQxMTgsXG5cdFx0MTQwXG5cdF0sXG5cdFwiLi9jb21wb25lbnRzL3N0ZXBzL2RlbW9zL2Vycm9yL2luZGV4LmpzXCI6IFtcblx0XHRcIi4vc2l0ZS9jb21wb25lbnRzL3N0ZXBzL2RlbW9zL2Vycm9yL2luZGV4LmpzXCIsXG5cdFx0MTE4LFxuXHRcdDE4NFxuXHRdLFxuXHRcIi4vY29tcG9uZW50cy9zdGVwcy9pbmRleC5qc1wiOiBbXG5cdFx0XCIuL3NpdGUvY29tcG9uZW50cy9zdGVwcy9pbmRleC5qc1wiLFxuXHRcdDExOCxcblx0XHQxMzRcblx0XSxcblx0XCIuL2NvbXBvbmVudHMvdGFibGUvaW5kZXguanNcIjogW1xuXHRcdFwiLi9zaXRlL2NvbXBvbmVudHMvdGFibGUvaW5kZXguanNcIixcblx0XHQxMTgsXG5cdFx0MTgyXG5cdF0sXG5cdFwiLi9jb21wb25lbnRzL3RyYW5zZmVyL2RlbW9zL2Jhc2ljL2luZGV4LmpzXCI6IFtcblx0XHRcIi4vc2l0ZS9jb21wb25lbnRzL3RyYW5zZmVyL2RlbW9zL2Jhc2ljL2luZGV4LmpzXCIsXG5cdFx0MTE4LFxuXHRcdDE4M1xuXHRdLFxuXHRcIi4vY29tcG9uZW50cy90cmFuc2Zlci9kZW1vcy9sYWJlbC9pbmRleC5qc1wiOiBbXG5cdFx0XCIuL3NpdGUvY29tcG9uZW50cy90cmFuc2Zlci9kZW1vcy9sYWJlbC9pbmRleC5qc1wiLFxuXHRcdDExOCxcblx0XHQxMzlcblx0XSxcblx0XCIuL2NvbXBvbmVudHMvdHJhbnNmZXIvaW5kZXguanNcIjogW1xuXHRcdFwiLi9zaXRlL2NvbXBvbmVudHMvdHJhbnNmZXIvaW5kZXguanNcIixcblx0XHQxMTgsXG5cdFx0MTMzXG5cdF0sXG5cdFwiLi9zcmMvY29tcG9uZW50cy9hcnRpY2xlL2luZGV4LmpzXCI6IFtcblx0XHRcIi4vc2l0ZS9zcmMvY29tcG9uZW50cy9hcnRpY2xlL2luZGV4LmpzXCIsXG5cdFx0MTE4XG5cdF0sXG5cdFwiLi9zcmMvcGFnZXMvZG9jdW1lbnQvaW5kZXguanNcIjogW1xuXHRcdFwiLi9zaXRlL3NyYy9wYWdlcy9kb2N1bWVudC9pbmRleC5qc1wiXG5cdF0sXG5cdFwiLi9zcmMvcGFnZXMvaW5kZXgvaW5kZXguanNcIjogW1xuXHRcdFwiLi9zaXRlL3NyYy9wYWdlcy9pbmRleC9pbmRleC5qc1wiLFxuXHRcdDBcblx0XSxcblx0XCIuL3NyYy9yb3V0ZXIvaW5kZXguanNcIjogW1xuXHRcdFwiLi9zaXRlL3NyYy9yb3V0ZXIvaW5kZXguanNcIlxuXHRdXG59O1xuZnVuY3Rpb24gd2VicGFja0FzeW5jQ29udGV4dChyZXEpIHtcblx0dmFyIGlkcyA9IG1hcFtyZXFdO1xuXHRpZighaWRzKVxuXHRcdHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInLlwiKSk7XG5cdHJldHVybiBQcm9taXNlLmFsbChpZHMuc2xpY2UoMSkubWFwKF9fd2VicGFja19yZXF1aXJlX18uZSkpLnRoZW4oZnVuY3Rpb24oKSB7XG5cdFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oaWRzWzBdKTtcblx0fSk7XG59O1xud2VicGFja0FzeW5jQ29udGV4dC5rZXlzID0gZnVuY3Rpb24gd2VicGFja0FzeW5jQ29udGV4dEtleXMoKSB7XG5cdHJldHVybiBPYmplY3Qua2V5cyhtYXApO1xufTtcbndlYnBhY2tBc3luY0NvbnRleHQuaWQgPSBcIi4vc2l0ZSBsYXp5IHJlY3Vyc2l2ZSBeXFxcXC5cXFxcLy4qXFxcXC9pbmRleFxcXFwuanMkXCI7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tBc3luY0NvbnRleHQ7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zaXRlIGxhenkgXlxcLlxcLy4qXFwvaW5kZXhcXC5qcyRcbi8vIG1vZHVsZSBpZCA9IC4vc2l0ZSBsYXp5IHJlY3Vyc2l2ZSBeXFwuXFwvLipcXC9pbmRleFxcLmpzJFxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCJ2YXIgbWFwID0ge1xuXHRcIi4vY29tcG9uZW50cy9icmVhZGNydW1iL2RlbW9zL2Jhc2ljL2luZGV4Lmpzb25cIjogW1xuXHRcdFwiLi9zaXRlL2NvbXBvbmVudHMvYnJlYWRjcnVtYi9kZW1vcy9iYXNpYy9pbmRleC5qc29uXCIsXG5cdFx0MTE4XG5cdF0sXG5cdFwiLi9jb21wb25lbnRzL2JyZWFkY3J1bWIvZGVtb3Mvc2VwYXJhdG9yL2luZGV4Lmpzb25cIjogW1xuXHRcdFwiLi9zaXRlL2NvbXBvbmVudHMvYnJlYWRjcnVtYi9kZW1vcy9zZXBhcmF0b3IvaW5kZXguanNvblwiLFxuXHRcdDExOFxuXHRdLFxuXHRcIi4vY29tcG9uZW50cy9icmVhZGNydW1iL2luZGV4Lmpzb25cIjogW1xuXHRcdFwiLi9zaXRlL2NvbXBvbmVudHMvYnJlYWRjcnVtYi9pbmRleC5qc29uXCIsXG5cdFx0MjM0XG5cdF0sXG5cdFwiLi9jb21wb25lbnRzL2J1dHRvbi9kZW1vcy9iYXNpYy9pbmRleC5qc29uXCI6IFtcblx0XHRcIi4vc2l0ZS9jb21wb25lbnRzL2J1dHRvbi9kZW1vcy9iYXNpYy9pbmRleC5qc29uXCIsXG5cdFx0MTE4XG5cdF0sXG5cdFwiLi9jb21wb25lbnRzL2J1dHRvbi9kZW1vcy9kaXNhYmxlZC9pbmRleC5qc29uXCI6IFtcblx0XHRcIi4vc2l0ZS9jb21wb25lbnRzL2J1dHRvbi9kZW1vcy9kaXNhYmxlZC9pbmRleC5qc29uXCIsXG5cdFx0MTE4XG5cdF0sXG5cdFwiLi9jb21wb25lbnRzL2J1dHRvbi9kZW1vcy9ncm91cC9pbmRleC5qc29uXCI6IFtcblx0XHRcIi4vc2l0ZS9jb21wb25lbnRzL2J1dHRvbi9kZW1vcy9ncm91cC9pbmRleC5qc29uXCIsXG5cdFx0MTE4XG5cdF0sXG5cdFwiLi9jb21wb25lbnRzL2J1dHRvbi9kZW1vcy9pY29uL2luZGV4Lmpzb25cIjogW1xuXHRcdFwiLi9zaXRlL2NvbXBvbmVudHMvYnV0dG9uL2RlbW9zL2ljb24vaW5kZXguanNvblwiLFxuXHRcdDExOFxuXHRdLFxuXHRcIi4vY29tcG9uZW50cy9idXR0b24vZGVtb3MvbG9hZGluZy9pbmRleC5qc29uXCI6IFtcblx0XHRcIi4vc2l0ZS9jb21wb25lbnRzL2J1dHRvbi9kZW1vcy9sb2FkaW5nL2luZGV4Lmpzb25cIixcblx0XHQxMThcblx0XSxcblx0XCIuL2NvbXBvbmVudHMvYnV0dG9uL2RlbW9zL3NpemUvaW5kZXguanNvblwiOiBbXG5cdFx0XCIuL3NpdGUvY29tcG9uZW50cy9idXR0b24vZGVtb3Mvc2l6ZS9pbmRleC5qc29uXCIsXG5cdFx0MTE4XG5cdF0sXG5cdFwiLi9jb21wb25lbnRzL2J1dHRvbi9kZW1vcy90YWdOYW1lL2luZGV4Lmpzb25cIjogW1xuXHRcdFwiLi9zaXRlL2NvbXBvbmVudHMvYnV0dG9uL2RlbW9zL3RhZ05hbWUvaW5kZXguanNvblwiLFxuXHRcdDExOFxuXHRdLFxuXHRcIi4vY29tcG9uZW50cy9idXR0b24vaW5kZXguanNvblwiOiBbXG5cdFx0XCIuL3NpdGUvY29tcG9uZW50cy9idXR0b24vaW5kZXguanNvblwiLFxuXHRcdDIzM1xuXHRdLFxuXHRcIi4vY29tcG9uZW50cy9jaGVja2JveC9kZW1vcy9iYXNpYy9pbmRleC5qc29uXCI6IFtcblx0XHRcIi4vc2l0ZS9jb21wb25lbnRzL2NoZWNrYm94L2RlbW9zL2Jhc2ljL2luZGV4Lmpzb25cIixcblx0XHQxMThcblx0XSxcblx0XCIuL2NvbXBvbmVudHMvY2hlY2tib3gvZGVtb3MvZ3JvdXAvaW5kZXguanNvblwiOiBbXG5cdFx0XCIuL3NpdGUvY29tcG9uZW50cy9jaGVja2JveC9kZW1vcy9ncm91cC9pbmRleC5qc29uXCIsXG5cdFx0MTE4XG5cdF0sXG5cdFwiLi9jb21wb25lbnRzL2NoZWNrYm94L2RlbW9zL3ZhbHVlL2luZGV4Lmpzb25cIjogW1xuXHRcdFwiLi9zaXRlL2NvbXBvbmVudHMvY2hlY2tib3gvZGVtb3MvdmFsdWUvaW5kZXguanNvblwiLFxuXHRcdDExOFxuXHRdLFxuXHRcIi4vY29tcG9uZW50cy9jaGVja2JveC9pbmRleC5qc29uXCI6IFtcblx0XHRcIi4vc2l0ZS9jb21wb25lbnRzL2NoZWNrYm94L2luZGV4Lmpzb25cIixcblx0XHQyMzJcblx0XSxcblx0XCIuL2NvbXBvbmVudHMvZGF0ZXBpY2tlci9kZW1vcy9iYXNpYy9pbmRleC5qc29uXCI6IFtcblx0XHRcIi4vc2l0ZS9jb21wb25lbnRzL2RhdGVwaWNrZXIvZGVtb3MvYmFzaWMvaW5kZXguanNvblwiLFxuXHRcdDExOFxuXHRdLFxuXHRcIi4vY29tcG9uZW50cy9kYXRlcGlja2VyL2RlbW9zL2NsZWFyYWJsZS9pbmRleC5qc29uXCI6IFtcblx0XHRcIi4vc2l0ZS9jb21wb25lbnRzL2RhdGVwaWNrZXIvZGVtb3MvY2xlYXJhYmxlL2luZGV4Lmpzb25cIixcblx0XHQxMThcblx0XSxcblx0XCIuL2NvbXBvbmVudHMvZGF0ZXBpY2tlci9kZW1vcy9kYXRldGltZS9pbmRleC5qc29uXCI6IFtcblx0XHRcIi4vc2l0ZS9jb21wb25lbnRzL2RhdGVwaWNrZXIvZGVtb3MvZGF0ZXRpbWUvaW5kZXguanNvblwiLFxuXHRcdDExOFxuXHRdLFxuXHRcIi4vY29tcG9uZW50cy9kYXRlcGlja2VyL2RlbW9zL2Rpc2FibGVkRGF0ZS9pbmRleC5qc29uXCI6IFtcblx0XHRcIi4vc2l0ZS9jb21wb25lbnRzL2RhdGVwaWNrZXIvZGVtb3MvZGlzYWJsZWREYXRlL2luZGV4Lmpzb25cIixcblx0XHQxMThcblx0XSxcblx0XCIuL2NvbXBvbmVudHMvZGF0ZXBpY2tlci9kZW1vcy9tYXhNaW4vaW5kZXguanNvblwiOiBbXG5cdFx0XCIuL3NpdGUvY29tcG9uZW50cy9kYXRlcGlja2VyL2RlbW9zL21heE1pbi9pbmRleC5qc29uXCIsXG5cdFx0MTE4XG5cdF0sXG5cdFwiLi9jb21wb25lbnRzL2RhdGVwaWNrZXIvZGVtb3MvbXVsdGlwbGUvaW5kZXguanNvblwiOiBbXG5cdFx0XCIuL3NpdGUvY29tcG9uZW50cy9kYXRlcGlja2VyL2RlbW9zL211bHRpcGxlL2luZGV4Lmpzb25cIixcblx0XHQxMThcblx0XSxcblx0XCIuL2NvbXBvbmVudHMvZGF0ZXBpY2tlci9pbmRleC5qc29uXCI6IFtcblx0XHRcIi4vc2l0ZS9jb21wb25lbnRzL2RhdGVwaWNrZXIvaW5kZXguanNvblwiLFxuXHRcdDIzMVxuXHRdLFxuXHRcIi4vY29tcG9uZW50cy9kaWFsb2cvZGVtb3MvYmFzaWMvaW5kZXguanNvblwiOiBbXG5cdFx0XCIuL3NpdGUvY29tcG9uZW50cy9kaWFsb2cvZGVtb3MvYmFzaWMvaW5kZXguanNvblwiLFxuXHRcdDExOFxuXHRdLFxuXHRcIi4vY29tcG9uZW50cy9kaWFsb2cvZGVtb3MvYmxvY2svaW5kZXguanNvblwiOiBbXG5cdFx0XCIuL3NpdGUvY29tcG9uZW50cy9kaWFsb2cvZGVtb3MvYmxvY2svaW5kZXguanNvblwiLFxuXHRcdDExOFxuXHRdLFxuXHRcIi4vY29tcG9uZW50cy9kaWFsb2cvZGVtb3MvZXZlbnRzL2luZGV4Lmpzb25cIjogW1xuXHRcdFwiLi9zaXRlL2NvbXBvbmVudHMvZGlhbG9nL2RlbW9zL2V2ZW50cy9pbmRleC5qc29uXCIsXG5cdFx0MTE4XG5cdF0sXG5cdFwiLi9jb21wb25lbnRzL2RpYWxvZy9kZW1vcy9leHRlbmRzL2luZGV4Lmpzb25cIjogW1xuXHRcdFwiLi9zaXRlL2NvbXBvbmVudHMvZGlhbG9nL2RlbW9zL2V4dGVuZHMvaW5kZXguanNvblwiLFxuXHRcdDExOFxuXHRdLFxuXHRcIi4vY29tcG9uZW50cy9kaWFsb2cvaW5kZXguanNvblwiOiBbXG5cdFx0XCIuL3NpdGUvY29tcG9uZW50cy9kaWFsb2cvaW5kZXguanNvblwiLFxuXHRcdDIzMFxuXHRdLFxuXHRcIi4vY29tcG9uZW50cy9kcm9wZG93bi9kZW1vcy9iYXNpYy9pbmRleC5qc29uXCI6IFtcblx0XHRcIi4vc2l0ZS9jb21wb25lbnRzL2Ryb3Bkb3duL2RlbW9zL2Jhc2ljL2luZGV4Lmpzb25cIixcblx0XHQxMThcblx0XSxcblx0XCIuL2NvbXBvbmVudHMvZHJvcGRvd24vZGVtb3MvZGlzYWJsZWQvaW5kZXguanNvblwiOiBbXG5cdFx0XCIuL3NpdGUvY29tcG9uZW50cy9kcm9wZG93bi9kZW1vcy9kaXNhYmxlZC9pbmRleC5qc29uXCIsXG5cdFx0MTE4XG5cdF0sXG5cdFwiLi9jb21wb25lbnRzL2Ryb3Bkb3duL2RlbW9zL25lc3RlZC9pbmRleC5qc29uXCI6IFtcblx0XHRcIi4vc2l0ZS9jb21wb25lbnRzL2Ryb3Bkb3duL2RlbW9zL25lc3RlZC9pbmRleC5qc29uXCIsXG5cdFx0MTE4XG5cdF0sXG5cdFwiLi9jb21wb25lbnRzL2Ryb3Bkb3duL2RlbW9zL3Bvc2l0aW9uL2luZGV4Lmpzb25cIjogW1xuXHRcdFwiLi9zaXRlL2NvbXBvbmVudHMvZHJvcGRvd24vZGVtb3MvcG9zaXRpb24vaW5kZXguanNvblwiLFxuXHRcdDExOFxuXHRdLFxuXHRcIi4vY29tcG9uZW50cy9kcm9wZG93bi9kZW1vcy90cmlnZ2VyL2luZGV4Lmpzb25cIjogW1xuXHRcdFwiLi9zaXRlL2NvbXBvbmVudHMvZHJvcGRvd24vZGVtb3MvdHJpZ2dlci9pbmRleC5qc29uXCIsXG5cdFx0MTE4XG5cdF0sXG5cdFwiLi9jb21wb25lbnRzL2Ryb3Bkb3duL2luZGV4Lmpzb25cIjogW1xuXHRcdFwiLi9zaXRlL2NvbXBvbmVudHMvZHJvcGRvd24vaW5kZXguanNvblwiLFxuXHRcdDIyOVxuXHRdLFxuXHRcIi4vY29tcG9uZW50cy9lZGl0YWJsZS9kZW1vcy9iYXNpYy9pbmRleC5qc29uXCI6IFtcblx0XHRcIi4vc2l0ZS9jb21wb25lbnRzL2VkaXRhYmxlL2RlbW9zL2Jhc2ljL2luZGV4Lmpzb25cIixcblx0XHQxMThcblx0XSxcblx0XCIuL2NvbXBvbmVudHMvZWRpdGFibGUvZGVtb3MvdmFsaWRhdGUvaW5kZXguanNvblwiOiBbXG5cdFx0XCIuL3NpdGUvY29tcG9uZW50cy9lZGl0YWJsZS9kZW1vcy92YWxpZGF0ZS9pbmRleC5qc29uXCIsXG5cdFx0MTE4XG5cdF0sXG5cdFwiLi9jb21wb25lbnRzL2VkaXRhYmxlL2luZGV4Lmpzb25cIjogW1xuXHRcdFwiLi9zaXRlL2NvbXBvbmVudHMvZWRpdGFibGUvaW5kZXguanNvblwiLFxuXHRcdDIyOFxuXHRdLFxuXHRcIi4vY29tcG9uZW50cy9mb3JtL2RlbW9zL2Jhc2ljL2luZGV4Lmpzb25cIjogW1xuXHRcdFwiLi9zaXRlL2NvbXBvbmVudHMvZm9ybS9kZW1vcy9iYXNpYy9pbmRleC5qc29uXCIsXG5cdFx0MTE4XG5cdF0sXG5cdFwiLi9jb21wb25lbnRzL2Zvcm0vZGVtb3MvY3VzdG9tL2luZGV4Lmpzb25cIjogW1xuXHRcdFwiLi9zaXRlL2NvbXBvbmVudHMvZm9ybS9kZW1vcy9jdXN0b20vaW5kZXguanNvblwiLFxuXHRcdDExOFxuXHRdLFxuXHRcIi4vY29tcG9uZW50cy9mb3JtL2RlbW9zL2xhYmVsL2luZGV4Lmpzb25cIjogW1xuXHRcdFwiLi9zaXRlL2NvbXBvbmVudHMvZm9ybS9kZW1vcy9sYWJlbC9pbmRleC5qc29uXCIsXG5cdFx0MTE4XG5cdF0sXG5cdFwiLi9jb21wb25lbnRzL2Zvcm0vZGVtb3MvdmFyaWFibGUvaW5kZXguanNvblwiOiBbXG5cdFx0XCIuL3NpdGUvY29tcG9uZW50cy9mb3JtL2RlbW9zL3ZhcmlhYmxlL2luZGV4Lmpzb25cIixcblx0XHQxMThcblx0XSxcblx0XCIuL2NvbXBvbmVudHMvZm9ybS9pbmRleC5qc29uXCI6IFtcblx0XHRcIi4vc2l0ZS9jb21wb25lbnRzL2Zvcm0vaW5kZXguanNvblwiLFxuXHRcdDIyN1xuXHRdLFxuXHRcIi4vY29tcG9uZW50cy9ncmlkL2RlbW9zL2Jhc2ljL2luZGV4Lmpzb25cIjogW1xuXHRcdFwiLi9zaXRlL2NvbXBvbmVudHMvZ3JpZC9kZW1vcy9iYXNpYy9pbmRleC5qc29uXCIsXG5cdFx0MTE4XG5cdF0sXG5cdFwiLi9jb21wb25lbnRzL2dyaWQvZGVtb3MvZ3V0dGVyL2luZGV4Lmpzb25cIjogW1xuXHRcdFwiLi9zaXRlL2NvbXBvbmVudHMvZ3JpZC9kZW1vcy9ndXR0ZXIvaW5kZXguanNvblwiLFxuXHRcdDExOFxuXHRdLFxuXHRcIi4vY29tcG9uZW50cy9ncmlkL2luZGV4Lmpzb25cIjogW1xuXHRcdFwiLi9zaXRlL2NvbXBvbmVudHMvZ3JpZC9pbmRleC5qc29uXCIsXG5cdFx0MjI2XG5cdF0sXG5cdFwiLi9jb21wb25lbnRzL2lucHV0L2RlbW9zL2F1dG93aWR0aC9pbmRleC5qc29uXCI6IFtcblx0XHRcIi4vc2l0ZS9jb21wb25lbnRzL2lucHV0L2RlbW9zL2F1dG93aWR0aC9pbmRleC5qc29uXCIsXG5cdFx0MTE4XG5cdF0sXG5cdFwiLi9jb21wb25lbnRzL2lucHV0L2RlbW9zL2Jhc2ljL2luZGV4Lmpzb25cIjogW1xuXHRcdFwiLi9zaXRlL2NvbXBvbmVudHMvaW5wdXQvZGVtb3MvYmFzaWMvaW5kZXguanNvblwiLFxuXHRcdDExOFxuXHRdLFxuXHRcIi4vY29tcG9uZW50cy9pbnB1dC9kZW1vcy9ibG9ja3MvaW5kZXguanNvblwiOiBbXG5cdFx0XCIuL3NpdGUvY29tcG9uZW50cy9pbnB1dC9kZW1vcy9ibG9ja3MvaW5kZXguanNvblwiLFxuXHRcdDExOFxuXHRdLFxuXHRcIi4vY29tcG9uZW50cy9pbnB1dC9kZW1vcy9jbGVhcmFibGUvaW5kZXguanNvblwiOiBbXG5cdFx0XCIuL3NpdGUvY29tcG9uZW50cy9pbnB1dC9kZW1vcy9jbGVhcmFibGUvaW5kZXguanNvblwiLFxuXHRcdDExOFxuXHRdLFxuXHRcIi4vY29tcG9uZW50cy9pbnB1dC9kZW1vcy9zaXplL2luZGV4Lmpzb25cIjogW1xuXHRcdFwiLi9zaXRlL2NvbXBvbmVudHMvaW5wdXQvZGVtb3Mvc2l6ZS9pbmRleC5qc29uXCIsXG5cdFx0MTE4XG5cdF0sXG5cdFwiLi9jb21wb25lbnRzL2lucHV0L2RlbW9zL3RleHRhcmVhL2luZGV4Lmpzb25cIjogW1xuXHRcdFwiLi9zaXRlL2NvbXBvbmVudHMvaW5wdXQvZGVtb3MvdGV4dGFyZWEvaW5kZXguanNvblwiLFxuXHRcdDExOFxuXHRdLFxuXHRcIi4vY29tcG9uZW50cy9pbnB1dC9pbmRleC5qc29uXCI6IFtcblx0XHRcIi4vc2l0ZS9jb21wb25lbnRzL2lucHV0L2luZGV4Lmpzb25cIixcblx0XHQyMjVcblx0XSxcblx0XCIuL2NvbXBvbmVudHMvbWVzc2FnZS9kZW1vcy9iYXNpYy9pbmRleC5qc29uXCI6IFtcblx0XHRcIi4vc2l0ZS9jb21wb25lbnRzL21lc3NhZ2UvZGVtb3MvYmFzaWMvaW5kZXguanNvblwiLFxuXHRcdDExOFxuXHRdLFxuXHRcIi4vY29tcG9uZW50cy9tZXNzYWdlL2RlbW9zL2N1c3RvbS9pbmRleC5qc29uXCI6IFtcblx0XHRcIi4vc2l0ZS9jb21wb25lbnRzL21lc3NhZ2UvZGVtb3MvY3VzdG9tL2luZGV4Lmpzb25cIixcblx0XHQxMThcblx0XSxcblx0XCIuL2NvbXBvbmVudHMvbWVzc2FnZS9kZW1vcy9kdXJhdGlvbi9pbmRleC5qc29uXCI6IFtcblx0XHRcIi4vc2l0ZS9jb21wb25lbnRzL21lc3NhZ2UvZGVtb3MvZHVyYXRpb24vaW5kZXguanNvblwiLFxuXHRcdDExOFxuXHRdLFxuXHRcIi4vY29tcG9uZW50cy9tZXNzYWdlL2luZGV4Lmpzb25cIjogW1xuXHRcdFwiLi9zaXRlL2NvbXBvbmVudHMvbWVzc2FnZS9pbmRleC5qc29uXCIsXG5cdFx0MjI0XG5cdF0sXG5cdFwiLi9jb21wb25lbnRzL3BhZ2luYXRpb24vZGVtb3MvYmFzaWMvaW5kZXguanNvblwiOiBbXG5cdFx0XCIuL3NpdGUvY29tcG9uZW50cy9wYWdpbmF0aW9uL2RlbW9zL2Jhc2ljL2luZGV4Lmpzb25cIixcblx0XHQxMThcblx0XSxcblx0XCIuL2NvbXBvbmVudHMvcGFnaW5hdGlvbi9kZW1vcy9jb3VudHMvaW5kZXguanNvblwiOiBbXG5cdFx0XCIuL3NpdGUvY29tcG9uZW50cy9wYWdpbmF0aW9uL2RlbW9zL2NvdW50cy9pbmRleC5qc29uXCIsXG5cdFx0MTE4XG5cdF0sXG5cdFwiLi9jb21wb25lbnRzL3BhZ2luYXRpb24vZGVtb3MvY3VycmVudC9pbmRleC5qc29uXCI6IFtcblx0XHRcIi4vc2l0ZS9jb21wb25lbnRzL3BhZ2luYXRpb24vZGVtb3MvY3VycmVudC9pbmRleC5qc29uXCIsXG5cdFx0MTE4XG5cdF0sXG5cdFwiLi9jb21wb25lbnRzL3BhZ2luYXRpb24vZGVtb3MvZ290by9pbmRleC5qc29uXCI6IFtcblx0XHRcIi4vc2l0ZS9jb21wb25lbnRzL3BhZ2luYXRpb24vZGVtb3MvZ290by9pbmRleC5qc29uXCIsXG5cdFx0MTE4XG5cdF0sXG5cdFwiLi9jb21wb25lbnRzL3BhZ2luYXRpb24vZGVtb3Mvc2l6ZS9pbmRleC5qc29uXCI6IFtcblx0XHRcIi4vc2l0ZS9jb21wb25lbnRzL3BhZ2luYXRpb24vZGVtb3Mvc2l6ZS9pbmRleC5qc29uXCIsXG5cdFx0MTE4XG5cdF0sXG5cdFwiLi9jb21wb25lbnRzL3BhZ2luYXRpb24vaW5kZXguanNvblwiOiBbXG5cdFx0XCIuL3NpdGUvY29tcG9uZW50cy9wYWdpbmF0aW9uL2luZGV4Lmpzb25cIixcblx0XHQyMjNcblx0XSxcblx0XCIuL2NvbXBvbmVudHMvcHJvZ3Jlc3MvZGVtb3MvYmFzaWMvaW5kZXguanNvblwiOiBbXG5cdFx0XCIuL3NpdGUvY29tcG9uZW50cy9wcm9ncmVzcy9kZW1vcy9iYXNpYy9pbmRleC5qc29uXCIsXG5cdFx0MTE4XG5cdF0sXG5cdFwiLi9jb21wb25lbnRzL3Byb2dyZXNzL2RlbW9zL2NoaWxkcmVuL2luZGV4Lmpzb25cIjogW1xuXHRcdFwiLi9zaXRlL2NvbXBvbmVudHMvcHJvZ3Jlc3MvZGVtb3MvY2hpbGRyZW4vaW5kZXguanNvblwiLFxuXHRcdDExOFxuXHRdLFxuXHRcIi4vY29tcG9uZW50cy9wcm9ncmVzcy9kZW1vcy9jaXJjbGUvaW5kZXguanNvblwiOiBbXG5cdFx0XCIuL3NpdGUvY29tcG9uZW50cy9wcm9ncmVzcy9kZW1vcy9jaXJjbGUvaW5kZXguanNvblwiLFxuXHRcdDExOFxuXHRdLFxuXHRcIi4vY29tcG9uZW50cy9wcm9ncmVzcy9kZW1vcy9zaXplL2luZGV4Lmpzb25cIjogW1xuXHRcdFwiLi9zaXRlL2NvbXBvbmVudHMvcHJvZ3Jlc3MvZGVtb3Mvc2l6ZS9pbmRleC5qc29uXCIsXG5cdFx0MTE4XG5cdF0sXG5cdFwiLi9jb21wb25lbnRzL3Byb2dyZXNzL2RlbW9zL3N0YXR1cy9pbmRleC5qc29uXCI6IFtcblx0XHRcIi4vc2l0ZS9jb21wb25lbnRzL3Byb2dyZXNzL2RlbW9zL3N0YXR1cy9pbmRleC5qc29uXCIsXG5cdFx0MTE4XG5cdF0sXG5cdFwiLi9jb21wb25lbnRzL3Byb2dyZXNzL2luZGV4Lmpzb25cIjogW1xuXHRcdFwiLi9zaXRlL2NvbXBvbmVudHMvcHJvZ3Jlc3MvaW5kZXguanNvblwiLFxuXHRcdDIyMlxuXHRdLFxuXHRcIi4vY29tcG9uZW50cy9yYWRpby9kZW1vcy9iYXNpYy9pbmRleC5qc29uXCI6IFtcblx0XHRcIi4vc2l0ZS9jb21wb25lbnRzL3JhZGlvL2RlbW9zL2Jhc2ljL2luZGV4Lmpzb25cIixcblx0XHQxMThcblx0XSxcblx0XCIuL2NvbXBvbmVudHMvcmFkaW8vZGVtb3MvZ3JvdXAvaW5kZXguanNvblwiOiBbXG5cdFx0XCIuL3NpdGUvY29tcG9uZW50cy9yYWRpby9kZW1vcy9ncm91cC9pbmRleC5qc29uXCIsXG5cdFx0MTE4XG5cdF0sXG5cdFwiLi9jb21wb25lbnRzL3JhZGlvL2RlbW9zL3ZhbHVlL2luZGV4Lmpzb25cIjogW1xuXHRcdFwiLi9zaXRlL2NvbXBvbmVudHMvcmFkaW8vZGVtb3MvdmFsdWUvaW5kZXguanNvblwiLFxuXHRcdDExOFxuXHRdLFxuXHRcIi4vY29tcG9uZW50cy9yYWRpby9pbmRleC5qc29uXCI6IFtcblx0XHRcIi4vc2l0ZS9jb21wb25lbnRzL3JhZGlvL2luZGV4Lmpzb25cIixcblx0XHQyMjFcblx0XSxcblx0XCIuL2NvbXBvbmVudHMvc2VsZWN0L2RlbW9zL2Jhc2ljL2luZGV4Lmpzb25cIjogW1xuXHRcdFwiLi9zaXRlL2NvbXBvbmVudHMvc2VsZWN0L2RlbW9zL2Jhc2ljL2luZGV4Lmpzb25cIixcblx0XHQxMThcblx0XSxcblx0XCIuL2NvbXBvbmVudHMvc2VsZWN0L2RlbW9zL2NsZWFyYWJsZS9pbmRleC5qc29uXCI6IFtcblx0XHRcIi4vc2l0ZS9jb21wb25lbnRzL3NlbGVjdC9kZW1vcy9jbGVhcmFibGUvaW5kZXguanNvblwiLFxuXHRcdDExOFxuXHRdLFxuXHRcIi4vY29tcG9uZW50cy9zZWxlY3QvZGVtb3MvY3VzdG9tL2luZGV4Lmpzb25cIjogW1xuXHRcdFwiLi9zaXRlL2NvbXBvbmVudHMvc2VsZWN0L2RlbW9zL2N1c3RvbS9pbmRleC5qc29uXCIsXG5cdFx0MTE4XG5cdF0sXG5cdFwiLi9jb21wb25lbnRzL3NlbGVjdC9kZW1vcy9kaXNhYmxlZC9pbmRleC5qc29uXCI6IFtcblx0XHRcIi4vc2l0ZS9jb21wb25lbnRzL3NlbGVjdC9kZW1vcy9kaXNhYmxlZC9pbmRleC5qc29uXCIsXG5cdFx0MTE4XG5cdF0sXG5cdFwiLi9jb21wb25lbnRzL3NlbGVjdC9kZW1vcy9maWx0ZXJhYmxlL2luZGV4Lmpzb25cIjogW1xuXHRcdFwiLi9zaXRlL2NvbXBvbmVudHMvc2VsZWN0L2RlbW9zL2ZpbHRlcmFibGUvaW5kZXguanNvblwiLFxuXHRcdDExOFxuXHRdLFxuXHRcIi4vY29tcG9uZW50cy9zZWxlY3QvZGVtb3MvZ3JvdXAvaW5kZXguanNvblwiOiBbXG5cdFx0XCIuL3NpdGUvY29tcG9uZW50cy9zZWxlY3QvZGVtb3MvZ3JvdXAvaW5kZXguanNvblwiLFxuXHRcdDExOFxuXHRdLFxuXHRcIi4vY29tcG9uZW50cy9zZWxlY3QvZGVtb3MvbXVsdGlwbGUvaW5kZXguanNvblwiOiBbXG5cdFx0XCIuL3NpdGUvY29tcG9uZW50cy9zZWxlY3QvZGVtb3MvbXVsdGlwbGUvaW5kZXguanNvblwiLFxuXHRcdDExOFxuXHRdLFxuXHRcIi4vY29tcG9uZW50cy9zZWxlY3QvZGVtb3Mvc2l6ZS9pbmRleC5qc29uXCI6IFtcblx0XHRcIi4vc2l0ZS9jb21wb25lbnRzL3NlbGVjdC9kZW1vcy9zaXplL2luZGV4Lmpzb25cIixcblx0XHQxMThcblx0XSxcblx0XCIuL2NvbXBvbmVudHMvc2VsZWN0L2luZGV4Lmpzb25cIjogW1xuXHRcdFwiLi9zaXRlL2NvbXBvbmVudHMvc2VsZWN0L2luZGV4Lmpzb25cIixcblx0XHQyMjBcblx0XSxcblx0XCIuL2NvbXBvbmVudHMvc2xpZGVyL2RlbW9zL2Jhc2ljL2luZGV4Lmpzb25cIjogW1xuXHRcdFwiLi9zaXRlL2NvbXBvbmVudHMvc2xpZGVyL2RlbW9zL2Jhc2ljL2luZGV4Lmpzb25cIixcblx0XHQxMThcblx0XSxcblx0XCIuL2NvbXBvbmVudHMvc2xpZGVyL2RlbW9zL2Rpc2FibGVkL2luZGV4Lmpzb25cIjogW1xuXHRcdFwiLi9zaXRlL2NvbXBvbmVudHMvc2xpZGVyL2RlbW9zL2Rpc2FibGVkL2luZGV4Lmpzb25cIixcblx0XHQxMThcblx0XSxcblx0XCIuL2NvbXBvbmVudHMvc2xpZGVyL2RlbW9zL3JhbmdlL2luZGV4Lmpzb25cIjogW1xuXHRcdFwiLi9zaXRlL2NvbXBvbmVudHMvc2xpZGVyL2RlbW9zL3JhbmdlL2luZGV4Lmpzb25cIixcblx0XHQxMThcblx0XSxcblx0XCIuL2NvbXBvbmVudHMvc2xpZGVyL2RlbW9zL3N0ZXAvaW5kZXguanNvblwiOiBbXG5cdFx0XCIuL3NpdGUvY29tcG9uZW50cy9zbGlkZXIvZGVtb3Mvc3RlcC9pbmRleC5qc29uXCIsXG5cdFx0MTE4XG5cdF0sXG5cdFwiLi9jb21wb25lbnRzL3NsaWRlci9pbmRleC5qc29uXCI6IFtcblx0XHRcIi4vc2l0ZS9jb21wb25lbnRzL3NsaWRlci9pbmRleC5qc29uXCIsXG5cdFx0MjE5XG5cdF0sXG5cdFwiLi9jb21wb25lbnRzL3NwaW5uZXIvZGVtb3MvYmFzaWMvaW5kZXguanNvblwiOiBbXG5cdFx0XCIuL3NpdGUvY29tcG9uZW50cy9zcGlubmVyL2RlbW9zL2Jhc2ljL2luZGV4Lmpzb25cIixcblx0XHQxMThcblx0XSxcblx0XCIuL2NvbXBvbmVudHMvc3Bpbm5lci9kZW1vcy9zaXplL2luZGV4Lmpzb25cIjogW1xuXHRcdFwiLi9zaXRlL2NvbXBvbmVudHMvc3Bpbm5lci9kZW1vcy9zaXplL2luZGV4Lmpzb25cIixcblx0XHQxMThcblx0XSxcblx0XCIuL2NvbXBvbmVudHMvc3Bpbm5lci9kZW1vcy9zdGVwL2luZGV4Lmpzb25cIjogW1xuXHRcdFwiLi9zaXRlL2NvbXBvbmVudHMvc3Bpbm5lci9kZW1vcy9zdGVwL2luZGV4Lmpzb25cIixcblx0XHQxMThcblx0XSxcblx0XCIuL2NvbXBvbmVudHMvc3Bpbm5lci9pbmRleC5qc29uXCI6IFtcblx0XHRcIi4vc2l0ZS9jb21wb25lbnRzL3NwaW5uZXIvaW5kZXguanNvblwiLFxuXHRcdDIxOFxuXHRdLFxuXHRcIi4vY29tcG9uZW50cy9zdGVwcy9kZW1vcy9iYXNpYy9pbmRleC5qc29uXCI6IFtcblx0XHRcIi4vc2l0ZS9jb21wb25lbnRzL3N0ZXBzL2RlbW9zL2Jhc2ljL2luZGV4Lmpzb25cIixcblx0XHQxMThcblx0XSxcblx0XCIuL2NvbXBvbmVudHMvc3RlcHMvZGVtb3MvZXJyb3IvaW5kZXguanNvblwiOiBbXG5cdFx0XCIuL3NpdGUvY29tcG9uZW50cy9zdGVwcy9kZW1vcy9lcnJvci9pbmRleC5qc29uXCIsXG5cdFx0MTE4XG5cdF0sXG5cdFwiLi9jb21wb25lbnRzL3N0ZXBzL2luZGV4Lmpzb25cIjogW1xuXHRcdFwiLi9zaXRlL2NvbXBvbmVudHMvc3RlcHMvaW5kZXguanNvblwiLFxuXHRcdDIxN1xuXHRdLFxuXHRcIi4vY29tcG9uZW50cy90YWJsZS9pbmRleC5qc29uXCI6IFtcblx0XHRcIi4vc2l0ZS9jb21wb25lbnRzL3RhYmxlL2luZGV4Lmpzb25cIixcblx0XHQyMTZcblx0XSxcblx0XCIuL2NvbXBvbmVudHMvdHJhbnNmZXIvZGVtb3MvYmFzaWMvaW5kZXguanNvblwiOiBbXG5cdFx0XCIuL3NpdGUvY29tcG9uZW50cy90cmFuc2Zlci9kZW1vcy9iYXNpYy9pbmRleC5qc29uXCIsXG5cdFx0MTE4XG5cdF0sXG5cdFwiLi9jb21wb25lbnRzL3RyYW5zZmVyL2RlbW9zL2xhYmVsL2luZGV4Lmpzb25cIjogW1xuXHRcdFwiLi9zaXRlL2NvbXBvbmVudHMvdHJhbnNmZXIvZGVtb3MvbGFiZWwvaW5kZXguanNvblwiLFxuXHRcdDExOFxuXHRdLFxuXHRcIi4vY29tcG9uZW50cy90cmFuc2Zlci9pbmRleC5qc29uXCI6IFtcblx0XHRcIi4vc2l0ZS9jb21wb25lbnRzL3RyYW5zZmVyL2luZGV4Lmpzb25cIixcblx0XHQyMTVcblx0XVxufTtcbmZ1bmN0aW9uIHdlYnBhY2tBc3luY0NvbnRleHQocmVxKSB7XG5cdHZhciBpZHMgPSBtYXBbcmVxXTtcblx0aWYoIWlkcylcblx0XHRyZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJy5cIikpO1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXy5lKGlkc1sxXSkudGhlbihmdW5jdGlvbigpIHtcblx0XHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhpZHNbMF0pO1xuXHR9KTtcbn07XG53ZWJwYWNrQXN5bmNDb250ZXh0LmtleXMgPSBmdW5jdGlvbiB3ZWJwYWNrQXN5bmNDb250ZXh0S2V5cygpIHtcblx0cmV0dXJuIE9iamVjdC5rZXlzKG1hcCk7XG59O1xud2VicGFja0FzeW5jQ29udGV4dC5pZCA9IFwiLi9zaXRlIGxhenkgcmVjdXJzaXZlIF5cXFxcLlxcXFwvLipcXFxcL2luZGV4XFxcXC5qc29uJFwiO1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrQXN5bmNDb250ZXh0O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc2l0ZSBsYXp5IF5cXC5cXC8uKlxcL2luZGV4XFwuanNvbiRcbi8vIG1vZHVsZSBpZCA9IC4vc2l0ZSBsYXp5IHJlY3Vyc2l2ZSBeXFwuXFwvLipcXC9pbmRleFxcLmpzb24kXG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsImltcG9ydCBJbnRhY3QgZnJvbSAnaW50YWN0JztcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vbGF5b3V0JztcbmltcG9ydCB0ZW1wbGF0ZSBmcm9tICcuL2luZGV4LnZkdCc7XG5pbXBvcnQgJy4vaW5kZXguc3R5bCc7XG5pbXBvcnQgJ2twYy9jb21wb25lbnRzL3RhYmxlL2luZGV4LnN0eWwnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIExheW91dCB7XG4gICAgQEludGFjdC50ZW1wbGF0ZSgpXG4gICAgc3RhdGljIHRlbXBsYXRlID0gdGVtcGxhdGU7XG5cbiAgICBhc3luYyBfaW5pdCgpIHtcbiAgICAgICAgbGV0IHBhdGggPSB0aGlzLmdldCgncGF0aCcpO1xuICAgICAgICBwYXRoID0gcGF0aC5zbGljZSgxLCAtMSk7XG4gICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBpbXBvcnQoYH4vJHtwYXRofS9pbmRleC5qc29uYCk7XG4gICAgICAgIGNvbnN0IEFydGljbGUgPSBhd2FpdCBpbXBvcnQoYH4vJHtwYXRofS9pbmRleC5qc2ApO1xuICAgICAgICB0aGlzLnNldCh7Li4uZGF0YSwgQXJ0aWNsZX0pO1xuICAgIH1cblxuICAgIF9tb3VudCgpIHtcbiAgICAgICAgc3VwZXIuX21vdW50KCk7XG4gICAgICAgIGRvY3VtZW50LnRpdGxlID0gdGhpcy5nZXQoJ3NldHRpbmcudGl0bGUnKTtcbiAgICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zaXRlL3NyYy9wYWdlcy9kb2N1bWVudC9pbmRleC5qcyIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz8/cmVmLS0yLTEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0yLTIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWx1cy1sb2FkZXIvaW5kZXguanM/P3JlZi0tMi0zIS4vaW5kZXguc3R5bFwiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuLy8gUHJlcGFyZSBjc3NUcmFuc2Zvcm1hdGlvblxudmFyIHRyYW5zZm9ybTtcblxudmFyIG9wdGlvbnMgPSB7fVxub3B0aW9ucy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1cbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuXHQvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuXHRpZighY29udGVudC5sb2NhbHMpIHtcblx0XHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tMi0xIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMi0yIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsdXMtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTItMyEuL2luZGV4LnN0eWxcIiwgZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTItMSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTItMiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bHVzLWxvYWRlci9pbmRleC5qcz8/cmVmLS0yLTMhLi9pbmRleC5zdHlsXCIpO1xuXHRcdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cdFx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdFx0fSk7XG5cdH1cblx0Ly8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NpdGUvc3JjL3BhZ2VzL2RvY3VtZW50L2luZGV4LnN0eWxcbi8vIG1vZHVsZSBpZCA9IC4vc2l0ZS9zcmMvcGFnZXMvZG9jdW1lbnQvaW5kZXguc3R5bFxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCJpbXBvcnQgQnV0dG9uIGZyb20gJ2NvbXBvbmVudHMvYnV0dG9uJztpbXBvcnQgTGluayBmcm9tICdjb21wb25lbnRzL2xpbmsnO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24ob2JqLCBfVmR0LCBibG9ja3MsICRjYWxsZWUpIHtcblxuX1ZkdCB8fCAoX1ZkdCA9IFZkdCk7XG5vYmogfHwgKG9iaiA9IHt9KTtcbmJsb2NrcyB8fCAoYmxvY2tzID0ge30pO1xudmFyIGggPSBfVmR0Lm1pc3MuaCwgaGMgPSBfVmR0Lm1pc3MuaGMsIGh1ID0gX1ZkdC5taXNzLmh1LCB3aWRnZXRzID0gdGhpcyAmJiB0aGlzLndpZGdldHMgfHwge30sIF9ibG9ja3MgPSB7fSwgX19ibG9ja3MgPSB7fSxcbl9fdSA9IF9WZHQudXRpbHMsIGV4dGVuZCA9IF9fdS5leHRlbmQsIF9lID0gX191LmVycm9yLCBfY2xhc3NOYW1lID0gX191LmNsYXNzTmFtZSxcbl9fbyA9IF9fdS5PcHRpb25zLCBfZ2V0TW9kZWwgPSBfX28uZ2V0TW9kZWwsIF9zZXRNb2RlbCA9IF9fby5zZXRNb2RlbCxcbl9zZXRDaGVja2JveE1vZGVsID0gX191LnNldENoZWNrYm94TW9kZWwsIF9kZXRlY3RDaGVja2JveENoZWNrZWQgPSBfX3UuZGV0ZWN0Q2hlY2tib3hDaGVja2VkLFxuX3NldFNlbGVjdE1vZGVsID0gX191LnNldFNlbGVjdE1vZGVsLFxuc2VsZiA9IHRoaXMuZGF0YSwgc2NvcGUgPSBvYmosIEFuaW1hdGUgPSBzZWxmICYmIHNlbGYuQW5pbWF0ZSwgcGFyZW50ID0gKCRjYWxsZWUgfHwge30pLl9zdXBlclxuXG5cblxuY29uc3QgQXJ0aWNsZSA9IHNlbGYuZ2V0KCdBcnRpY2xlJyk7XG5cbmxldCBjdXJyZW50TmF2ID0ge307XG5cbnJldHVybiAoZnVuY3Rpb24oKSB7XG4gICAgdmFyIF9vYmogPSB7J25hdkluZGV4JzogJ2RvY3VtZW50JywgJ2NsYXNzTmFtZSc6ICdkb2N1bWVudC1wYWdlJywgJ2NoaWxkcmVuJzogbnVsbH07XG4gICAgaWYgKF9vYmouaGFzT3duUHJvcGVydHkoXCJhcmd1bWVudHNcIikpIHtcbiAgICAgICAgZXh0ZW5kKF9vYmosIF9vYmouYXJndW1lbnRzID09PSB0cnVlID8gb2JqIDogX29iai5hcmd1bWVudHMpO1xuICAgICAgICBkZWxldGUgX29iai5hcmd1bWVudHM7XG4gICAgfVxuICAgIHJldHVybiBwYXJlbnQuY2FsbCh0aGlzLCBfb2JqLCBfVmR0LCBmdW5jdGlvbihibG9ja3MpIHtcbiAgICB2YXIgX2Jsb2NrcyA9IHt9LCBfX2Jsb2NrcyA9IGV4dGVuZCh7fSwgYmxvY2tzKTtcbiAgICByZXR1cm4gKF9ibG9ja3MuY29udGVudCA9IGZ1bmN0aW9uKHBhcmVudCkge3JldHVybiBbaCgnYXNpZGUnLCBudWxsLCBoKCdkaXYnLCBudWxsLCBbX1ZkdC51dGlscy5tYXAoZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW3NlbGYuZ2V0KCdzaWRlQmFycycpIF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcyksIGZ1bmN0aW9uKHZhbHVlLCBrZXkpIHtcbnJldHVybiBoKCdkaXYnLCBudWxsLCBbaCgnaDUnLCBudWxsLCBmdW5jdGlvbigpIHt0cnkge3JldHVybiBba2V5IF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcykpLCBoKCd1bCcsIG51bGwsIF9WZHQudXRpbHMubWFwKGZ1bmN0aW9uKCkge3RyeSB7cmV0dXJuIFt2YWx1ZSBdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpLCBmdW5jdGlvbih2YWx1ZSwga2V5KSB7XG5yZXR1cm4gaCgnbGknLCBudWxsLCBbJ1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnLCBmdW5jdGlvbigpIHt0cnkge3JldHVybiBbKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHZhbHVlLnBhdGguaW5jbHVkZXMoc2VsZi5nZXQoJ3BhdGgnKS5zdWJzdHJpbmcoMSkpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50TmF2ID0gdmFsdWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSgpIF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcyksICdcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJywgaChMaW5rLCB7J2hyZWYnOiBmdW5jdGlvbigpIHt0cnkge3JldHVybiBbYC8ke3ZhbHVlLnBhdGgucmVwbGFjZSgnaW5kZXgubWQnLCAnJyl9YCBdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpLCAnY2hpbGRyZW4nOiBmdW5jdGlvbigpIHt0cnkge3JldHVybiBbdmFsdWUudGl0bGUgXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKSwgJ19jb250ZXh0JzogdGhpc30pXSwgX2NsYXNzTmFtZShmdW5jdGlvbigpIHt0cnkge3JldHVybiBbe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjdGl2ZTogdmFsdWUucGF0aC5pbmNsdWRlcyhzZWxmLmdldCgncGF0aCcpLnN1YnN0cmluZygxKSkgXG4gICAgICAgICAgICAgICAgICAgICAgICB9IF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcykpKTtcbn0sIHRoaXMpKV0sICdjYXRhbG9nLXNlY3Rpb24nKTtcbn0sIHRoaXMpLCBoKCdkaXYnLCBudWxsLCBudWxsLCAnYXNpZGUtYm9yZGVyIHRyYW5zaXRpb24nKV0sICdhc2lkZS13cmFwcGVyJykpLCBoKCdhcnRpY2xlJywgbnVsbCwgW2goJ2RpdicsIG51bGwsIFtoKCdkaXYnLCBudWxsLCBmdW5jdGlvbigpIHt0cnkge3JldHVybiBbY3VycmVudE5hdi50aXRsZSBdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpLCAndGl0bGUnKSwgaCgnZGl2JywgbnVsbCwgWydcXG4gICAgICAgICAgICAgICAgICAgIOWmguaenOS9oOWPkeeOsOaWh+aho+aciemXrumimO+8jOivt+W4ruW/meWcqFxcbiAgICAgICAgICAgICAgICAgICAgJywgaCgnYScsIHsndGFyZ2V0JzogJ19ibGFuaycsICdocmVmJzogZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW2BodHRwczovL2dpdGh1Yi5jb20vSmF2ZXkvamF2ZXkuZ2l0aHViLmlvL2Jsb2IvbWFzdGVyL2ludGFjdC9kb2NzLyR7c2VsZi5nZXQoJ3RpdGxlJyl9Lm1kYCBdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpfSwgJ2dpdGh1YicpLCAnXFxuICAgICAgICAgICAgICAgICAgICDkuIrkv67mraPor6XmlofmoaNcXG4gICAgICAgICAgICAgICAgJ10sICdlZGl0LWxpbmsnKV0sICdhcnRpY2xlLWhlYWQnKSwgaChBcnRpY2xlLCB7J2NoaWxkcmVuJzogbnVsbCwgJ19jb250ZXh0JzogdGhpc30pXSldO30pICYmIChfX2Jsb2Nrcy5jb250ZW50ID0gZnVuY3Rpb24ocGFyZW50KSB7XG52YXIgc2VsZiA9IHRoaXM7XG5yZXR1cm4gYmxvY2tzLmNvbnRlbnQgPyBibG9ja3MuY29udGVudC5jYWxsKHRoaXMsIGZ1bmN0aW9uKCkge1xucmV0dXJuIF9ibG9ja3MuY29udGVudC5jYWxsKHNlbGYsIHBhcmVudCk7XG59KSA6IF9ibG9ja3MuY29udGVudC5jYWxsKHRoaXMsIHBhcmVudCk7XG59KSAmJiBfX2Jsb2Nrcztcbn0uY2FsbCh0aGlzLCBibG9ja3MpLCBwYXJlbnQpXG59KS5jYWxsKHRoaXMpXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc2l0ZS9zcmMvcGFnZXMvZG9jdW1lbnQvaW5kZXgudmR0IiwiaW1wb3J0IEludGFjdCBmcm9tICdpbnRhY3QnO1xuaW1wb3J0IHRlbXBsYXRlIGZyb20gJy4vbGF5b3V0LnZkdCc7XG5pbXBvcnQgJy4vbGF5b3V0LnN0eWwnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIEludGFjdCB7XG4gICAgQEludGFjdC50ZW1wbGF0ZSgpXG4gICAgc3RhdGljIHRlbXBsYXRlID0gdGVtcGxhdGU7XG5cbiAgICBfbW91bnQoKSB7XG4gICAgICAgIHRoaXMuJGJvcmRlciA9IHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuYm9yZGVyJyk7XG4gICAgICAgIHRoaXMuX3VwZGF0ZUJvcmRlcigpO1xuICAgIH1cblxuICAgIF91cGRhdGVCb3JkZXIoKSB7XG4gICAgICAgIC8vIGNvbnN0ICRuYXYgPSB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvcignLmFjdGl2ZScpO1xuICAgICAgICAvLyBsZXQgd2lkdGggPSAwO1xuICAgICAgICAvLyBsZXQgbGVmdCA9IDA7XG4gICAgICAgIC8vIGlmICgkbmF2KSB7XG4gICAgICAgICAgICAvLyBsZWZ0ID0gJG5hdi5wb3NpdGlvbigpLmxlZnQ7XG4gICAgICAgICAgICAvLyB3aWR0aCA9ICRuYXYub3V0ZXJXaWR0aCgpO1xuICAgICAgICAvLyB9XG4gICAgICAgIC8vIHRoaXMuJGJvcmRlci5hZGRDbGFzcygndHJhbnNpdGlvbicpO1xuICAgICAgICAvLyB0aGlzLiRib3JkZXIuY3NzKHt3aWR0aDogd2lkdGgsIGxlZnQ6IGxlZnR9KTtcbiAgICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zaXRlL3NyYy9wYWdlcy9sYXlvdXQuanMiLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tMi0xIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMi0yIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsdXMtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTItMyEuL2xheW91dC5zdHlsXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4vLyBQcmVwYXJlIGNzc1RyYW5zZm9ybWF0aW9uXG52YXIgdHJhbnNmb3JtO1xuXG52YXIgb3B0aW9ucyA9IHt9XG5vcHRpb25zLnRyYW5zZm9ybSA9IHRyYW5zZm9ybVxuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG5cdC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdGlmKCFjb250ZW50LmxvY2Fscykge1xuXHRcdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz8/cmVmLS0yLTEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0yLTIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWx1cy1sb2FkZXIvaW5kZXguanM/P3JlZi0tMi0zIS4vbGF5b3V0LnN0eWxcIiwgZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTItMSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTItMiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bHVzLWxvYWRlci9pbmRleC5qcz8/cmVmLS0yLTMhLi9sYXlvdXQuc3R5bFwiKTtcblx0XHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXHRcdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHRcdH0pO1xuXHR9XG5cdC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zaXRlL3NyYy9wYWdlcy9sYXlvdXQuc3R5bFxuLy8gbW9kdWxlIGlkID0gLi9zaXRlL3NyYy9wYWdlcy9sYXlvdXQuc3R5bFxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCJpbXBvcnQgTGluayBmcm9tICdrcGMvY29tcG9uZW50cy9saW5rJztcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKG9iaiwgX1ZkdCwgYmxvY2tzLCAkY2FsbGVlKSB7XG5cbl9WZHQgfHwgKF9WZHQgPSBWZHQpO1xub2JqIHx8IChvYmogPSB7fSk7XG5ibG9ja3MgfHwgKGJsb2NrcyA9IHt9KTtcbnZhciBoID0gX1ZkdC5taXNzLmgsIGhjID0gX1ZkdC5taXNzLmhjLCBodSA9IF9WZHQubWlzcy5odSwgd2lkZ2V0cyA9IHRoaXMgJiYgdGhpcy53aWRnZXRzIHx8IHt9LCBfYmxvY2tzID0ge30sIF9fYmxvY2tzID0ge30sXG5fX3UgPSBfVmR0LnV0aWxzLCBleHRlbmQgPSBfX3UuZXh0ZW5kLCBfZSA9IF9fdS5lcnJvciwgX2NsYXNzTmFtZSA9IF9fdS5jbGFzc05hbWUsXG5fX28gPSBfX3UuT3B0aW9ucywgX2dldE1vZGVsID0gX19vLmdldE1vZGVsLCBfc2V0TW9kZWwgPSBfX28uc2V0TW9kZWwsXG5fc2V0Q2hlY2tib3hNb2RlbCA9IF9fdS5zZXRDaGVja2JveE1vZGVsLCBfZGV0ZWN0Q2hlY2tib3hDaGVja2VkID0gX191LmRldGVjdENoZWNrYm94Q2hlY2tlZCxcbl9zZXRTZWxlY3RNb2RlbCA9IF9fdS5zZXRTZWxlY3RNb2RlbCxcbnNlbGYgPSB0aGlzLmRhdGEsIHNjb3BlID0gb2JqLCBBbmltYXRlID0gc2VsZiAmJiBzZWxmLkFuaW1hdGUsIHBhcmVudCA9ICgkY2FsbGVlIHx8IHt9KS5fc3VwZXJcblxuXG5jb25zdCBuYXYgPSBbXG4gICAge1xuICAgICAgICB0aXRsZTogJ+aVmeeoiycsXG4gICAgICAgIGhyZWY6ICdkb2N1bWVudCdcbiAgICB9LFxuICAgIHtcbiAgICAgICAgdGl0bGU6ICdBUEknLFxuICAgICAgICBocmVmOiAnYXBpJ1xuICAgIH0sXG4gICAgLy8ge1xuICAgICAgICAvLyB0aXRsZTogJ+ekuuS+iycsXG4gICAgICAgIC8vIGhyZWY6ICdleGFtcGxlcydcbiAgICAvLyB9XG5dO1xuXG5yZXR1cm4gaCgnZGl2JywgbnVsbCwgW2goJ2RpdicsIG51bGwsIGgoJ2hlYWRlcicsIG51bGwsIChfYmxvY2tzLmhlYWRlciA9IGZ1bmN0aW9uKHBhcmVudCkge3JldHVybiBbaChMaW5rLCB7J2NsYXNzTmFtZSc6ICdsb2dvJywgJ2hyZWYnOiAnLycsICdjaGlsZHJlbic6ICdLUEMnLCAnX2NvbnRleHQnOiB0aGlzfSksIGgoJ25hdicsIG51bGwsIFtfVmR0LnV0aWxzLm1hcChmdW5jdGlvbigpIHt0cnkge3JldHVybiBbbmF2IF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcyksIGZ1bmN0aW9uKHZhbHVlLCBrZXkpIHtcbnJldHVybiBoKExpbmssIHsnY2xhc3NOYW1lJzogX2NsYXNzTmFtZShmdW5jdGlvbigpIHt0cnkge3JldHVybiBbe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjdGl2ZTogdmFsdWUuaHJlZiA9PT0gc2NvcGUubmF2SW5kZXhcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKSksICdocmVmJzogZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW2AvJHt2YWx1ZS5ocmVmfWAgXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKSwgJ2NoaWxkcmVuJzogZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW3ZhbHVlLnRpdGxlIF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcyksICdfY29udGV4dCc6IHRoaXN9KTtcbn0sIHRoaXMpLCBoKCdkaXYnLCBudWxsLCBudWxsLCAnYm9yZGVyJyldKV07fSkgJiYgKF9fYmxvY2tzLmhlYWRlciA9IGZ1bmN0aW9uKHBhcmVudCkge1xudmFyIHNlbGYgPSB0aGlzO1xucmV0dXJuIGJsb2Nrcy5oZWFkZXIgPyBibG9ja3MuaGVhZGVyLmNhbGwodGhpcywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gX2Jsb2Nrcy5oZWFkZXIuY2FsbChzZWxmLCBwYXJlbnQpO1xufSkgOiBfYmxvY2tzLmhlYWRlci5jYWxsKHRoaXMsIHBhcmVudCk7XG59KSAmJiBfX2Jsb2Nrcy5oZWFkZXIuY2FsbCh0aGlzKSksICdoZWFkZXItd3JhcHBlcicpLCBoKCdkaXYnLCBudWxsLCAoX2Jsb2Nrcy5jb250ZW50ID0gZnVuY3Rpb24ocGFyZW50KSB7cmV0dXJuIG51bGw7fSkgJiYgKF9fYmxvY2tzLmNvbnRlbnQgPSBmdW5jdGlvbihwYXJlbnQpIHtcbnZhciBzZWxmID0gdGhpcztcbnJldHVybiBibG9ja3MuY29udGVudCA/IGJsb2Nrcy5jb250ZW50LmNhbGwodGhpcywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gX2Jsb2Nrcy5jb250ZW50LmNhbGwoc2VsZiwgcGFyZW50KTtcbn0pIDogX2Jsb2Nrcy5jb250ZW50LmNhbGwodGhpcywgcGFyZW50KTtcbn0pICYmIF9fYmxvY2tzLmNvbnRlbnQuY2FsbCh0aGlzKSwgJ2NvbnRlbnQtd3JhcHBlcicpXSwgX2NsYXNzTmFtZShmdW5jdGlvbigpIHt0cnkge3JldHVybiBbeydtYWluLXdyYXBwZXInOiB0cnVlLCBbc2NvcGUuY2xhc3NOYW1lXTogc2NvcGUuY2xhc3NOYW1lfSBdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpKSlcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zaXRlL3NyYy9wYWdlcy9sYXlvdXQudmR0IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiLi9mb250cy9kMjM5YTI3NWZiNmIyOTViMmFlMTUxNDgwODQwZjk4Yy5lb3RcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3N0eWxlcy9mb250cy9pY29uZm9udC5lb3Q/dD0xNTA2NTg1Njg2OTY3XG4vLyBtb2R1bGUgaWQgPSAuL3N0eWxlcy9mb250cy9pY29uZm9udC5lb3Q/dD0xNTA2NTg1Njg2OTY3XG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIi4vZm9udHMvMTQ3ZGVlMTE1MDRmZTBlMjBiNDhhNWVmNTE1MGM0ZWQuc3ZnXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zdHlsZXMvZm9udHMvaWNvbmZvbnQuc3ZnP3Q9MTUwNjU4NTY4Njk2N1xuLy8gbW9kdWxlIGlkID0gLi9zdHlsZXMvZm9udHMvaWNvbmZvbnQuc3ZnP3Q9MTUwNjU4NTY4Njk2N1xuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCIuL2ZvbnRzLzM1ODYwYTk5YTc5ZTBlZDYwMmExZGY3YWQwNWU4OWEwLnR0ZlwiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3R5bGVzL2ZvbnRzL2ljb25mb250LnR0Zj90PTE1MDY1ODU2ODY5Njdcbi8vIG1vZHVsZSBpZCA9IC4vc3R5bGVzL2ZvbnRzL2ljb25mb250LnR0Zj90PTE1MDY1ODU2ODY5Njdcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiLi9mb250cy8yYzJhZTA2OGJlM2IwODllMGE1YjU5YWJiMTgzMTU1MC5lb3RcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3N0eWxlcy9mb250cy9pb25pY29ucy5lb3Q/dj0yLjAuMFxuLy8gbW9kdWxlIGlkID0gLi9zdHlsZXMvZm9udHMvaW9uaWNvbnMuZW90P3Y9Mi4wLjBcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiLi9mb250cy82MjFiZDM4Njg0MWY3NGUwMDUzY2I4ZTY3ZjhhMDYwNC5zdmdcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3N0eWxlcy9mb250cy9pb25pY29ucy5zdmc/dj0yLjAuMFxuLy8gbW9kdWxlIGlkID0gLi9zdHlsZXMvZm9udHMvaW9uaWNvbnMuc3ZnP3Y9Mi4wLjBcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiLi9mb250cy8yNDcxMmY2YzQ3ODIxMzk0ZmJhNzk0MmZiYjUyYzNiMi50dGZcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3N0eWxlcy9mb250cy9pb25pY29ucy50dGY/dj0yLjAuMFxuLy8gbW9kdWxlIGlkID0gLi9zdHlsZXMvZm9udHMvaW9uaWNvbnMudHRmP3Y9Mi4wLjBcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiLi9mb250cy8wNWFjZmRiNTY4YjNkZjQ5YWQzMTM1NWIxOTQ5NWQ0YS53b2ZmXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zdHlsZXMvZm9udHMvaW9uaWNvbnMud29mZj92PTIuMC4wXG4vLyBtb2R1bGUgaWQgPSAuL3N0eWxlcy9mb250cy9pb25pY29ucy53b2ZmP3Y9Mi4wLjBcbi8vIG1vZHVsZSBjaHVua3MgPSAxIl0sInNvdXJjZVJvb3QiOiIifQ==