webpackJsonp([2],{

/***/ "./components/button/group.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = undefined;

var _getOwnPropertyDescriptor = __webpack_require__("./node_modules/babel-runtime/core-js/object/get-own-property-descriptor.js");

var _getOwnPropertyDescriptor2 = _interopRequireDefault(_getOwnPropertyDescriptor);

var _classCallCheck2 = __webpack_require__("./node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__("./node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__("./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__("./node_modules/babel-runtime/helpers/inherits.js");

var _inherits3 = _interopRequireDefault(_inherits2);

var _dec, _desc, _value, _class, _class2, _temp;

var _intact = __webpack_require__("./node_modules/intact-vue/dist/intact.vue.js");

var _intact2 = _interopRequireDefault(_intact);

var _group = __webpack_require__("./components/button/group.vdt");

var _group2 = _interopRequireDefault(_group);

__webpack_require__("./components/button/index.styl");

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

var ButtonGroup = (_dec = _intact2.default.template(), (_class = (_temp = _class2 = function (_Intact) {
    (0, _inherits3.default)(ButtonGroup, _Intact);

    function ButtonGroup() {
        (0, _classCallCheck3.default)(this, ButtonGroup);
        return (0, _possibleConstructorReturn3.default)(this, _Intact.apply(this, arguments));
    }

    ButtonGroup.prototype.defaults = function defaults() {
        return {
            vertical: false,
            value: undefined,
            radio: false, // @deprecated: use checkType instead of
            checkType: 'none' // radio | checkbox | none
        };
    };

    ButtonGroup.prototype._init = function _init() {
        /* istanbul ignore if */
        if (this.get('radio')) {
            this.set('checkType', 'radio', { silent: true });
        }
    };

    (0, _createClass3.default)(ButtonGroup, [{
        key: 'template',
        get: function get() {
            return _group2.default;
        }
    }]);
    return ButtonGroup;
}(_intact2.default), _class2.propTypes = {
    vertical: Boolean,
    radio: Boolean
}, _temp), (_applyDecoratedDescriptor(_class.prototype, 'template', [_dec], (0, _getOwnPropertyDescriptor2.default)(_class.prototype, 'template'), _class.prototype)), _class));
exports.default = ButtonGroup;
module.exports = exports['default'];

/***/ }),

/***/ "./components/button/group.vdt":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _extends2 = __webpack_require__("./node_modules/babel-runtime/helpers/extends.js");

var _extends3 = _interopRequireDefault(_extends2);

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
        $this = this,
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
    }, _classNameObj[className] = className, _classNameObj['k-fluid'] = fluid, _classNameObj);

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
                    vNode.props = (0, _extends3.default)({}, vNode.props, {
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

module.exports = exports['default'];

/***/ }),

/***/ "./components/button/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.ButtonGroup = exports.Button = exports.default = undefined;

var _getOwnPropertyDescriptor = __webpack_require__("./node_modules/babel-runtime/core-js/object/get-own-property-descriptor.js");

var _getOwnPropertyDescriptor2 = _interopRequireDefault(_getOwnPropertyDescriptor);

var _classCallCheck2 = __webpack_require__("./node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__("./node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__("./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__("./node_modules/babel-runtime/helpers/inherits.js");

var _inherits3 = _interopRequireDefault(_inherits2);

var _dec, _desc, _value2, _class, _class2, _temp;

var _intact = __webpack_require__("./node_modules/intact-vue/dist/intact.vue.js");

var _intact2 = _interopRequireDefault(_intact);

var _index = __webpack_require__("./components/button/index.vdt");

var _index2 = _interopRequireDefault(_index);

var _group = __webpack_require__("./components/button/group.js");

var _group2 = _interopRequireDefault(_group);

__webpack_require__("./styles/kpc.styl");

__webpack_require__("./components/button/index.styl");

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

var Button = (_dec = _intact2.default.template(), (_class = (_temp = _class2 = function (_Intact) {
    (0, _inherits3.default)(Button, _Intact);

    function Button() {
        (0, _classCallCheck3.default)(this, Button);
        return (0, _possibleConstructorReturn3.default)(this, _Intact.apply(this, arguments));
    }

    Button.prototype.defaults = function defaults() {
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
            tabindex: '0',

            _value: undefined,
            _checkType: 'none'
        };
    };

    Button.prototype._mount = function _mount() {
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
    };

    Button.prototype._beforeUpdate = function _beforeUpdate() {
        if (this.group) {
            this.set({
                _checkType: this.group.get('checkType'),
                _value: this.group.get('value')
            }, { silent: true });
        }
    };

    Button.prototype.showLoading = function showLoading() {
        this.set('loading', true);
    };

    Button.prototype.hideLoading = function hideLoading() {
        this.set('loading', false);
    };

    Button.prototype.disable = function disable() {
        this.set('disabled', true);
    };

    Button.prototype.enable = function enable() {
        this.set('disabled', false);
    };

    Button.prototype._onClick = function _onClick(e) {
        if (this.get('disabled') || this.get('loading')) {
            return e.preventDefault();
        }

        if (this.group) {
            var _get = this.get(),
                _checkType = _get._checkType,
                value = _get.value,
                _value = _get._value;

            if (value !== undefined) {
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
        }

        e.component = this;
        this.trigger('click', e);
    };

    Button.prototype._blur = function _blur() {
        // when click, blur it to remove the focus style
        this.element.blur();
    };

    (0, _createClass3.default)(Button, [{
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
}, _temp), (_applyDecoratedDescriptor(_class.prototype, 'template', [_dec], (0, _getOwnPropertyDescriptor2.default)(_class.prototype, 'template'), _class.prototype)), _class));
exports.default = Button;
exports.Button = Button;
exports.ButtonGroup = _group2.default;

/***/ }),

/***/ "./components/button/index.styl":
/***/ (function(module, exports, __webpack_require__) {

// removed by extract-text-webpack-plugin
    if(false) {
      // 1527576697633
      var cssReload = require("!../../node_modules/css-hot-loader/hotModuleReplacement.js")(module.id, {"fileMap":"{fileName}"});
      module.hot.dispose(cssReload);
      module.hot.accept(undefined, cssReload);
    }
  

/***/ }),

/***/ "./components/button/index.vdt":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _extends2 = __webpack_require__("./node_modules/babel-runtime/helpers/extends.js");

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = __webpack_require__("./node_modules/babel-runtime/helpers/objectWithoutProperties.js");

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

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
        $this = this,
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
        tabindex = _self$get.tabindex,
        tagName = _self$get.tagName,
        htmlType = _self$get.htmlType,
        fluid = _self$get.fluid,
        children = _self$get.children,
        loading = _self$get.loading,
        disabled = _self$get.disabled,
        value = _self$get.value,
        _value = _self$get._value,
        name = _self$get.name,
        tagProps = _self$get.tagProps,
        _checkType = _self$get._checkType,
        rest = (0, _objectWithoutProperties3.default)(_self$get, ['type', 'className', 'size', 'icon', 'circle', 'ref', 'key', 'tabindex', 'tagName', 'htmlType', 'fluid', 'children', 'loading', 'disabled', 'value', '_value', 'name', 'tagProps', '_checkType']);

    var checked = value !== undefined ? _checkType === 'radio' ? value === _value : _checkType === 'checkbox' ? Array.isArray(_value) && !!~_value.indexOf(value) : false : false;

    var classNameObj = (_classNameObj = {
        'k-btn': true
    }, _classNameObj['k-' + type] = type !== 'default', _classNameObj['k-btn-icon'] = icon, _classNameObj['k-' + size] = size !== 'default', _classNameObj[className] = className, _classNameObj['k-circle'] = circle, _classNameObj['k-loading'] = loading, _classNameObj['k-fluid'] = fluid, _classNameObj['k-active'] = checked, _classNameObj['k-disabled'] = disabled || loading, _classNameObj);

    var Button = function Button(props) {
        if (props.href && tagName === 'button') {
            tagName = 'a';
        }
        if (tagName === 'button') {
            // set type of html button
            props.type = htmlType;
        }
        // disable button when loading
        /* if (loading) props.disabled = true; */
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

    return h(Button, (0, _extends3.default)({ 'className': _className(function () {
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
        }.call(this), 'tabindex': function () {
            try {
                return [disabled || loading ? "-1" : tabindex][0];
            } catch (e) {
                _e(e);
            }
        }.call(this), 'ev-mouseup': function () {
            try {
                return [self._blur][0];
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
            }.call(this), 'tabindex': '-1' }) : undefined], '_context': $this }));
};

var _utils = __webpack_require__("./components/utils.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = exports['default'];

/***/ }),

/***/ "./site/src/pages/index/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = undefined;

var _getOwnPropertyDescriptor = __webpack_require__("./node_modules/babel-runtime/core-js/object/get-own-property-descriptor.js");

var _getOwnPropertyDescriptor2 = _interopRequireDefault(_getOwnPropertyDescriptor);

var _classCallCheck2 = __webpack_require__("./node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__("./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__("./node_modules/babel-runtime/helpers/inherits.js");

var _inherits3 = _interopRequireDefault(_inherits2);

var _dec, _desc, _value, _class, _init, _class2, _temp;

var _intact = __webpack_require__("./node_modules/intact-vue/dist/intact.vue.js");

var _intact2 = _interopRequireDefault(_intact);

var _index = __webpack_require__("./site/src/pages/index/index.vdt");

var _index2 = _interopRequireDefault(_index);

var _layout = __webpack_require__("./site/src/pages/layout.js");

var _layout2 = _interopRequireDefault(_layout);

__webpack_require__("./site/src/pages/index/index.styl");

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

var _default = (_dec = _intact2.default.template(), (_class = (_temp = _class2 = function (_Layout) {
    (0, _inherits3.default)(_default, _Layout);

    function _default() {
        (0, _classCallCheck3.default)(this, _default);
        return (0, _possibleConstructorReturn3.default)(this, _Layout.apply(this, arguments));
    }

    return _default;
}(_layout2.default), _class2.template = _index2.default, _temp), (_applyDecoratedDescriptor(_class, 'template', [_dec], (_init = (0, _getOwnPropertyDescriptor2.default)(_class, 'template'), _init = _init ? _init.value : undefined, {
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

/***/ "./site/src/pages/index/index.styl":
/***/ (function(module, exports, __webpack_require__) {

// removed by extract-text-webpack-plugin
    if(false) {
      // 1527576696291
      var cssReload = require("!../../../../node_modules/css-hot-loader/hotModuleReplacement.js")(module.id, {"fileMap":"{fileName}"});
      module.hot.dispose(cssReload);
      module.hot.accept(undefined, cssReload);
    }
  

/***/ }),

/***/ "./site/src/pages/index/index.vdt":
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

    return function () {
        var _obj = { 'className': 'index-page', 'children': null };
        if (_obj.hasOwnProperty("arguments")) {
            extend(_obj, _obj.arguments === true ? obj : _obj.arguments);
            delete _obj.arguments;
        }
        return parent.call(this, _obj, _Vdt, function (blocks) {
            var _blocks = {},
                __blocks = extend({}, blocks);
            return (_blocks["content"] = function (parent) {
                return h('article', null, ['\n			', hc(' <img src=\"images/logo.png\" /> '), h('h1', null, 'KPC'), h('p', null, '支持多框架的前端高质量组件库'), h('div', null, [h(_button.Button, { 'tagName': function () {
                        try {
                            return [_link.Link][0];
                        } catch (e) {
                            _e(e);
                        }
                    }.call(this), 'type': 'primary', 'tagProps': function () {
                        try {
                            return [{
                                href: "/kpc" + '/docs/getting-started/'
                            }][0];
                        } catch (e) {
                            _e(e);
                        }
                    }.call(this), 'className': 'button', 'children': '开始', '_context': $this }), h(_button.Button, { 'href': 'https://github.com/ksc-fe/kpc', 'className': 'button', 'target': '_blank', 'children': 'GitHub', '_context': $this })], 'actions'), h('div', null, [h('div', null, [h('h2', null, '支持多框架', 'blue'), h('div', null, '\n                        同时支持Intact和Vue框架\n					')], 'feature'), h('div', null, [h('h2', null, '忠于原生，增强原生', 'yellow'), h('div', null, '\n                        在保持浏览器原生特性的基础上，增强交互能力\n					')], 'feature'), h('div', null, [h('h2', null, '便捷开发', 'red'), h('div', null, '\n                        支持按需加载，主题定制，国际化等特性。并且提供了配套的脚手架方便快速初始化项目\n					')], 'feature')], 'features')], 'home-header');
            }) && (__blocks["content"] = function (parent) {
                var self = this;
                return blocks["content"] ? blocks["content"].call(this, function () {
                    return _blocks["content"].call(self, parent);
                }) : _blocks["content"].call(this, parent);
            }), __blocks;
        }.call(this, blocks), parent);
    }.call(this);
};

var _button = __webpack_require__("./components/button/index.js");

var _link = __webpack_require__("./components/link/index.js");

module.exports = exports['default'];

/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2J1dHRvbi9ncm91cC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2J1dHRvbi9ncm91cC52ZHQiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9idXR0b24vaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9idXR0b24vaW5kZXguc3R5bCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2J1dHRvbi9pbmRleC52ZHQiLCJ3ZWJwYWNrOi8vLy4vc2l0ZS9zcmMvcGFnZXMvaW5kZXgvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc2l0ZS9zcmMvcGFnZXMvaW5kZXgvaW5kZXguc3R5bCIsIndlYnBhY2s6Ly8vLi9zaXRlL3NyYy9wYWdlcy9pbmRleC9pbmRleC52ZHQiXSwibmFtZXMiOlsiQnV0dG9uR3JvdXAiLCJJbnRhY3QiLCJ0ZW1wbGF0ZSIsImRlZmF1bHRzIiwidmVydGljYWwiLCJ2YWx1ZSIsInVuZGVmaW5lZCIsInJhZGlvIiwiY2hlY2tUeXBlIiwiX2luaXQiLCJnZXQiLCJzZXQiLCJzaWxlbnQiLCJwcm9wVHlwZXMiLCJCb29sZWFuIiwib2JqIiwiX1ZkdCIsImJsb2NrcyIsIiRjYWxsZWUiLCJWZHQiLCJoIiwibWlzcyIsImhjIiwiaHUiLCJ3aWRnZXRzIiwiX2Jsb2NrcyIsIl9fYmxvY2tzIiwiX191IiwidXRpbHMiLCJleHRlbmQiLCJfZSIsImVycm9yIiwiX2NsYXNzTmFtZSIsImNsYXNzTmFtZSIsIl9fbyIsIk9wdGlvbnMiLCJfZ2V0TW9kZWwiLCJnZXRNb2RlbCIsIl9zZXRNb2RlbCIsInNldE1vZGVsIiwiX3NldENoZWNrYm94TW9kZWwiLCJzZXRDaGVja2JveE1vZGVsIiwiX2RldGVjdENoZWNrYm94Q2hlY2tlZCIsImRldGVjdENoZWNrYm94Q2hlY2tlZCIsIl9zZXRTZWxlY3RNb2RlbCIsInNldFNlbGVjdE1vZGVsIiwic2VsZiIsImRhdGEiLCIkdGhpcyIsInNjb3BlIiwiQW5pbWF0ZSIsInBhcmVudCIsIl9zdXBlciIsInN0eWxlIiwiY2hpbGRyZW4iLCJmbHVpZCIsImNsYXNzTmFtZU9iaiIsImUiLCJjYWxsIiwibWFwIiwiQXJyYXkiLCJpc0FycmF5Iiwidk5vZGUiLCJ0YWciLCJCdXR0b24iLCJwcm9wcyIsIl92YWx1ZSIsIl9jaGVja1R5cGUiLCJ0eXBlIiwic2l6ZSIsImljb24iLCJjaXJjbGUiLCJsb2FkaW5nIiwiZGlzYWJsZWQiLCJodG1sVHlwZSIsInRhZ05hbWUiLCJ0YWdQcm9wcyIsIm5hbWUiLCJ0YWJpbmRleCIsIl9tb3VudCIsInBhcmVudFZOb2RlIiwiR3JvdXAiLCJncm91cCIsIl9iZWZvcmVVcGRhdGUiLCJzaG93TG9hZGluZyIsImhpZGVMb2FkaW5nIiwiZGlzYWJsZSIsImVuYWJsZSIsIl9vbkNsaWNrIiwicHJldmVudERlZmF1bHQiLCJzbGljZSIsImluZGV4IiwiaW5kZXhPZiIsInB1c2giLCJzcGxpY2UiLCJjb21wb25lbnQiLCJ0cmlnZ2VyIiwiX2JsdXIiLCJlbGVtZW50IiwiYmx1ciIsIlN0cmluZyIsIkZ1bmN0aW9uIiwicmVmIiwia2V5IiwicmVzdCIsImNoZWNrZWQiLCJocmVmIiwiZm9yRWFjaCIsImNoaWxkIiwibGVuZ3RoIiwiTGF5b3V0IiwiX29iaiIsImhhc093blByb3BlcnR5IiwiYXJndW1lbnRzIiwiTGluayJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFcUJBLFcsV0FDaEJDLGlCQUFPQyxRQUFQLEU7Ozs7Ozs7OzBCQUdEQyxRLHVCQUFXO0FBQ1AsZUFBTztBQUNIQyxzQkFBVSxLQURQO0FBRUhDLG1CQUFPQyxTQUZKO0FBR0hDLG1CQUFPLEtBSEosRUFHVztBQUNkQyx1QkFBVyxNQUpSLENBSWdCO0FBSmhCLFNBQVA7QUFNSCxLOzswQkFPREMsSyxvQkFBUTtBQUNKO0FBQ0EsWUFB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V2tDLE1BVlgsQ0FBUDtBQVdILEtBakJNLENBaUJKTyxJQWpCSSxDQWlCQyxJQWpCRCxDQUFQO0FBa0JDLEM7O0FBaENEOztBQUE2QyIsImZpbGUiOiJzdGF0aWMvY2h1bmsvMDM0YzM2MjlmOTVkZTA3ODRiMmIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSW50YWN0IGZyb20gJ2ludGFjdCc7XG5pbXBvcnQgdGVtcGxhdGUgZnJvbSAnLi9ncm91cC52ZHQnO1xuaW1wb3J0ICcuL2luZGV4LnN0eWwnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCdXR0b25Hcm91cCBleHRlbmRzIEludGFjdCB7XG4gICAgQEludGFjdC50ZW1wbGF0ZSgpXG4gICAgZ2V0IHRlbXBsYXRlKCkgeyByZXR1cm4gdGVtcGxhdGU7IH1cblxuICAgIGRlZmF1bHRzKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdmVydGljYWw6IGZhbHNlLFxuICAgICAgICAgICAgdmFsdWU6IHVuZGVmaW5lZCxcbiAgICAgICAgICAgIHJhZGlvOiBmYWxzZSwgLy8gQGRlcHJlY2F0ZWQ6IHVzZSBjaGVja1R5cGUgaW5zdGVhZCBvZlxuICAgICAgICAgICAgY2hlY2tUeXBlOiAnbm9uZScsIC8vIHJhZGlvIHwgY2hlY2tib3ggfCBub25lXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICAgICAgdmVydGljYWw6IEJvb2xlYW4sXG4gICAgICAgIHJhZGlvOiBCb29sZWFuLFxuICAgIH1cblxuICAgIF9pbml0KCkge1xuICAgICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cbiAgICAgICAgaWYgKHRoaXMuZ2V0KCdyYWRpbycpKSB7XG4gICAgICAgICAgICB0aGlzLnNldCgnY2hlY2tUeXBlJywgJ3JhZGlvJywge3NpbGVudDogdHJ1ZX0pO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL2J1dHRvbi9ncm91cC5qcyIsImltcG9ydCBCdXR0b24gZnJvbSAnLi8nO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24ob2JqLCBfVmR0LCBibG9ja3MsICRjYWxsZWUpIHtcbl9WZHQgfHwgKF9WZHQgPSBWZHQpO1xub2JqIHx8IChvYmogPSB7fSk7XG5ibG9ja3MgfHwgKGJsb2NrcyA9IHt9KTtcbnZhciBoID0gX1ZkdC5taXNzLmgsIGhjID0gX1ZkdC5taXNzLmhjLCBodSA9IF9WZHQubWlzcy5odSwgd2lkZ2V0cyA9IHRoaXMgJiYgdGhpcy53aWRnZXRzIHx8IHt9LCBfYmxvY2tzID0ge30sIF9fYmxvY2tzID0ge30sXG5fX3UgPSBfVmR0LnV0aWxzLCBleHRlbmQgPSBfX3UuZXh0ZW5kLCBfZSA9IF9fdS5lcnJvciwgX2NsYXNzTmFtZSA9IF9fdS5jbGFzc05hbWUsXG5fX28gPSBfX3UuT3B0aW9ucywgX2dldE1vZGVsID0gX19vLmdldE1vZGVsLCBfc2V0TW9kZWwgPSBfX28uc2V0TW9kZWwsXG5fc2V0Q2hlY2tib3hNb2RlbCA9IF9fdS5zZXRDaGVja2JveE1vZGVsLCBfZGV0ZWN0Q2hlY2tib3hDaGVja2VkID0gX191LmRldGVjdENoZWNrYm94Q2hlY2tlZCxcbl9zZXRTZWxlY3RNb2RlbCA9IF9fdS5zZXRTZWxlY3RNb2RlbCxcbnNlbGYgPSB0aGlzLmRhdGEsICR0aGlzID0gdGhpcywgc2NvcGUgPSBvYmosIEFuaW1hdGUgPSBzZWxmICYmIHNlbGYuQW5pbWF0ZSwgcGFyZW50ID0gKCRjYWxsZWUgfHwge30pLl9zdXBlclxuXG5cbmNvbnN0IHtcbiAgICBjbGFzc05hbWUsIHZlcnRpY2FsLCBzdHlsZSwgXG4gICAgY2hpbGRyZW4sIHZhbHVlLCBmbHVpZCwgY2hlY2tUeXBlXG59ID0gc2VsZi5nZXQoKTtcblxuY29uc3QgY2xhc3NOYW1lT2JqID0ge1xuICAgICdrLWJ0bnMnOiB0cnVlLFxuICAgICdrLXZlcnRpY2FsJzogdmVydGljYWwsXG4gICAgW2NsYXNzTmFtZV06IGNsYXNzTmFtZSxcbiAgICAnay1mbHVpZCc6IGZsdWlkLFxufTtcblxucmV0dXJuIGgoJ2RpdicsIHsnc3R5bGUnOiBmdW5jdGlvbigpIHt0cnkge3JldHVybiBbc3R5bGUgXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKX0sIGZ1bmN0aW9uKCkge3RyeSB7cmV0dXJuIFtjaGVja1R5cGUgIT09ICdub25lJyA/IF9fdS5tYXAoXG4gICAgICAgIGNoaWxkcmVuID8gXG4gICAgICAgICAgICAoQXJyYXkuaXNBcnJheShjaGlsZHJlbikgPyBjaGlsZHJlbiA6IFtjaGlsZHJlbl0pIDpcbiAgICAgICAgICAgIGNoaWxkcmVuLCBcbiAgICAgICAgdk5vZGUgPT4ge1xuICAgICAgICAgICAgaWYgKHZOb2RlLnRhZyA9PT0gQnV0dG9uKSB7XG4gICAgICAgICAgICAgICAgdk5vZGUucHJvcHMgPSB7XG4gICAgICAgICAgICAgICAgICAgIC4uLnZOb2RlLnByb3BzLCBcbiAgICAgICAgICAgICAgICAgICAgX3ZhbHVlOiB2YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgX2NoZWNrVHlwZTogY2hlY2tUeXBlLFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB2Tm9kZTtcbiAgICAgICAgfSkgOiBcbiAgICAgICAgY2hpbGRyZW5cbl1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcyksIF9jbGFzc05hbWUoZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW2NsYXNzTmFtZU9iaiBdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpKSlcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL2J1dHRvbi9ncm91cC52ZHQiLCJpbXBvcnQgSW50YWN0IGZyb20gJ2ludGFjdCc7XG5pbXBvcnQgdGVtcGxhdGUgZnJvbSAnLi9pbmRleC52ZHQnO1xuaW1wb3J0IEdyb3VwIGZyb20gJy4vZ3JvdXAnO1xuaW1wb3J0ICcuLi8uLi9zdHlsZXMva3BjLnN0eWwnO1xuaW1wb3J0ICcuL2luZGV4LnN0eWwnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCdXR0b24gZXh0ZW5kcyBJbnRhY3Qge1xuICAgIEBJbnRhY3QudGVtcGxhdGUoKVxuICAgIGdldCB0ZW1wbGF0ZSgpIHsgcmV0dXJuIHRlbXBsYXRlOyB9XG5cbiAgICBkZWZhdWx0cygpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHR5cGU6ICdkZWZhdWx0JywgLy8gcHJpbWFyeSB8IHdhcm5pbmcgfCBkYW5nZXJcbiAgICAgICAgICAgIHNpemU6ICdkZWZhdWx0JywgLy8gc21hbGwgfCBtaW5pXG4gICAgICAgICAgICBpY29uOiBmYWxzZSxcbiAgICAgICAgICAgIGNpcmNsZTogZmFsc2UsXG4gICAgICAgICAgICBsb2FkaW5nOiBmYWxzZSxcbiAgICAgICAgICAgIGRpc2FibGVkOiBmYWxzZSxcbiAgICAgICAgICAgIGZsdWlkOiBmYWxzZSxcbiAgICAgICAgICAgIGh0bWxUeXBlOiAnYnV0dG9uJyxcbiAgICAgICAgICAgIHRhZ05hbWU6ICdidXR0b24nLFxuICAgICAgICAgICAgdGFnUHJvcHM6IHVuZGVmaW5lZCxcbiAgICAgICAgICAgIHZhbHVlOiB1bmRlZmluZWQsXG4gICAgICAgICAgICBuYW1lOiB1bmRlZmluZWQsXG4gICAgICAgICAgICB0YWJpbmRleDogJzAnLFxuXG4gICAgICAgICAgICBfdmFsdWU6IHVuZGVmaW5lZCxcbiAgICAgICAgICAgIF9jaGVja1R5cGU6ICdub25lJyxcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgIHNpemU6IFN0cmluZyxcbiAgICAgICAgaWNvbjogQm9vbGVhbixcbiAgICAgICAgY2lyY2xlOiBCb29sZWFuLFxuICAgICAgICBsb2FkaW5nOiBCb29sZWFuLFxuICAgICAgICBkaXNhYmxlZDogQm9vbGVhbixcbiAgICAgICAgZmx1aWQ6IEJvb2xlYW4sXG4gICAgICAgIGh0bWxUeXBlOiBTdHJpbmcsXG4gICAgICAgIHRhZ05hbWU6IFtTdHJpbmcsIEZ1bmN0aW9uXSxcbiAgICAgICAgbmFtZTogU3RyaW5nLFxuICAgIH1cblxuICAgIF9tb3VudCgpIHtcbiAgICAgICAgbGV0IHBhcmVudFZOb2RlID0gdGhpcy5wYXJlbnRWTm9kZTtcblxuICAgICAgICB3aGlsZSAocGFyZW50Vk5vZGUgJiYgcGFyZW50Vk5vZGUudGFnICE9PSBHcm91cCkge1xuICAgICAgICAgICAgcGFyZW50Vk5vZGUgPSBwYXJlbnRWTm9kZS5wYXJlbnRWTm9kZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChwYXJlbnRWTm9kZSkge1xuICAgICAgICAgICAgdGhpcy5ncm91cCA9IHBhcmVudFZOb2RlLmNoaWxkcmVuO1xuXG4gICAgICAgICAgICB0aGlzLnNldCh7XG4gICAgICAgICAgICAgICAgX2NoZWNrVHlwZTogdGhpcy5ncm91cC5nZXQoJ2NoZWNrVHlwZScpLFxuICAgICAgICAgICAgICAgIF92YWx1ZTogdGhpcy5ncm91cC5nZXQoJ3ZhbHVlJylcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgX2JlZm9yZVVwZGF0ZSgpIHtcbiAgICAgICAgaWYgKHRoaXMuZ3JvdXApIHtcbiAgICAgICAgICAgIHRoaXMuc2V0KHtcbiAgICAgICAgICAgICAgICBfY2hlY2tUeXBlOiB0aGlzLmdyb3VwLmdldCgnY2hlY2tUeXBlJyksXG4gICAgICAgICAgICAgICAgX3ZhbHVlOiB0aGlzLmdyb3VwLmdldCgndmFsdWUnKVxuICAgICAgICAgICAgfSwge3NpbGVudDogdHJ1ZX0pO1xuICAgICAgICB9IFxuICAgIH1cblxuICAgIHNob3dMb2FkaW5nKCkge1xuICAgICAgICB0aGlzLnNldCgnbG9hZGluZycsIHRydWUpO1xuICAgIH1cblxuICAgIGhpZGVMb2FkaW5nKCkge1xuICAgICAgICB0aGlzLnNldCgnbG9hZGluZycsIGZhbHNlKTtcbiAgICB9XG5cbiAgICBkaXNhYmxlKCkge1xuICAgICAgICB0aGlzLnNldCgnZGlzYWJsZWQnLCB0cnVlKTtcbiAgICB9XG5cbiAgICBlbmFibGUoKSB7XG4gICAgICAgIHRoaXMuc2V0KCdkaXNhYmxlZCcsIGZhbHNlKTtcbiAgICB9XG5cbiAgICBfb25DbGljayhlKSB7XG4gICAgICAgIGlmICh0aGlzLmdldCgnZGlzYWJsZWQnKSB8fCB0aGlzLmdldCgnbG9hZGluZycpKSB7XG4gICAgICAgICAgICByZXR1cm4gZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuZ3JvdXApIHtcbiAgICAgICAgICAgIGxldCB7X2NoZWNrVHlwZSwgdmFsdWUsIF92YWx1ZX0gPSB0aGlzLmdldCgpO1xuICAgICAgICAgICAgaWYgKHZhbHVlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICBpZiAoX2NoZWNrVHlwZSA9PT0gJ3JhZGlvJykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmdyb3VwLnNldCgndmFsdWUnLCB2YWx1ZSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChfY2hlY2tUeXBlID09PSAnY2hlY2tib3gnKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICghQXJyYXkuaXNBcnJheShfdmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBfdmFsdWUgPSBbXTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBfdmFsdWUgPSBfdmFsdWUuc2xpY2UoMCk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGluZGV4ID0gX3ZhbHVlLmluZGV4T2YodmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoIX5pbmRleCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgX3ZhbHVlLnB1c2godmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgX3ZhbHVlLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ncm91cC5zZXQoJ3ZhbHVlJywgX3ZhbHVlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBlLmNvbXBvbmVudCA9IHRoaXM7XG4gICAgICAgIHRoaXMudHJpZ2dlcignY2xpY2snLCBlKTtcbiAgICB9XG5cbiAgICBfYmx1cigpIHtcbiAgICAgICAgLy8gd2hlbiBjbGljaywgYmx1ciBpdCB0byByZW1vdmUgdGhlIGZvY3VzIHN0eWxlXG4gICAgICAgIHRoaXMuZWxlbWVudC5ibHVyKCk7XG4gICAgfVxufVxuXG5leHBvcnQge0J1dHRvbiwgR3JvdXAgYXMgQnV0dG9uR3JvdXB9O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9idXR0b24vaW5kZXguanMiLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuICAgIGlmKG1vZHVsZS5ob3QpIHtcbiAgICAgIC8vIDE1Mjc1NzY2OTc2MzNcbiAgICAgIHZhciBjc3NSZWxvYWQgPSByZXF1aXJlKFwiIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtaG90LWxvYWRlci9ob3RNb2R1bGVSZXBsYWNlbWVudC5qc1wiKShtb2R1bGUuaWQsIHtcImZpbGVNYXBcIjpcIntmaWxlTmFtZX1cIn0pO1xuICAgICAgbW9kdWxlLmhvdC5kaXNwb3NlKGNzc1JlbG9hZCk7XG4gICAgICBtb2R1bGUuaG90LmFjY2VwdCh1bmRlZmluZWQsIGNzc1JlbG9hZCk7XG4gICAgfVxuICBcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2NvbXBvbmVudHMvYnV0dG9uL2luZGV4LnN0eWxcbi8vIG1vZHVsZSBpZCA9IC4vY29tcG9uZW50cy9idXR0b24vaW5kZXguc3R5bFxuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiIsImltcG9ydCB7aXNTdHJpbmdPck51bWJlck5vdEVtcHR5fSBmcm9tICcuLi91dGlscyc7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihvYmosIF9WZHQsIGJsb2NrcywgJGNhbGxlZSkge1xuX1ZkdCB8fCAoX1ZkdCA9IFZkdCk7XG5vYmogfHwgKG9iaiA9IHt9KTtcbmJsb2NrcyB8fCAoYmxvY2tzID0ge30pO1xudmFyIGggPSBfVmR0Lm1pc3MuaCwgaGMgPSBfVmR0Lm1pc3MuaGMsIGh1ID0gX1ZkdC5taXNzLmh1LCB3aWRnZXRzID0gdGhpcyAmJiB0aGlzLndpZGdldHMgfHwge30sIF9ibG9ja3MgPSB7fSwgX19ibG9ja3MgPSB7fSxcbl9fdSA9IF9WZHQudXRpbHMsIGV4dGVuZCA9IF9fdS5leHRlbmQsIF9lID0gX191LmVycm9yLCBfY2xhc3NOYW1lID0gX191LmNsYXNzTmFtZSxcbl9fbyA9IF9fdS5PcHRpb25zLCBfZ2V0TW9kZWwgPSBfX28uZ2V0TW9kZWwsIF9zZXRNb2RlbCA9IF9fby5zZXRNb2RlbCxcbl9zZXRDaGVja2JveE1vZGVsID0gX191LnNldENoZWNrYm94TW9kZWwsIF9kZXRlY3RDaGVja2JveENoZWNrZWQgPSBfX3UuZGV0ZWN0Q2hlY2tib3hDaGVja2VkLFxuX3NldFNlbGVjdE1vZGVsID0gX191LnNldFNlbGVjdE1vZGVsLFxuc2VsZiA9IHRoaXMuZGF0YSwgJHRoaXMgPSB0aGlzLCBzY29wZSA9IG9iaiwgQW5pbWF0ZSA9IHNlbGYgJiYgc2VsZi5BbmltYXRlLCBwYXJlbnQgPSAoJGNhbGxlZSB8fCB7fSkuX3N1cGVyXG5cblxubGV0IHtcbiAgICB0eXBlLCBjbGFzc05hbWUsIHNpemUsIGljb24sIGNpcmNsZSwgcmVmLCBrZXksIHRhYmluZGV4LFxuICAgIHRhZ05hbWUsIGh0bWxUeXBlLCBmbHVpZCwgY2hpbGRyZW4sIGxvYWRpbmcsIGRpc2FibGVkLFxuICAgIHZhbHVlLCBfdmFsdWUsIG5hbWUsIHRhZ1Byb3BzLCBfY2hlY2tUeXBlLCAuLi5yZXN0XG59ID0gc2VsZi5nZXQoKTtcblxuY29uc3QgY2hlY2tlZCA9IHZhbHVlICE9PSB1bmRlZmluZWQgP1xuICAgIF9jaGVja1R5cGUgPT09ICdyYWRpbycgPyBcbiAgICAgICAgdmFsdWUgPT09IF92YWx1ZSA6ICBcbiAgICAgICAgKFxuICAgICAgICAgICAgX2NoZWNrVHlwZSA9PT0gJ2NoZWNrYm94JyA/IFxuICAgICAgICAgICAgICAgIEFycmF5LmlzQXJyYXkoX3ZhbHVlKSAmJiAhIX5fdmFsdWUuaW5kZXhPZih2YWx1ZSkgOlxuICAgICAgICAgICAgICAgIGZhbHNlXG4gICAgICAgIClcbiAgICA6IGZhbHNlO1xuXG5jb25zdCBjbGFzc05hbWVPYmogPSB7XG4gICAgJ2stYnRuJzogdHJ1ZSxcbiAgICBbYGstJHt0eXBlfWBdOiB0eXBlICE9PSAnZGVmYXVsdCcsXG4gICAgJ2stYnRuLWljb24nOiBpY29uLFxuICAgIFtgay0ke3NpemV9YF06IHNpemUgIT09ICdkZWZhdWx0JyxcbiAgICBbY2xhc3NOYW1lXTogY2xhc3NOYW1lLCBcbiAgICAnay1jaXJjbGUnOiBjaXJjbGUsXG4gICAgJ2stbG9hZGluZyc6IGxvYWRpbmcsXG4gICAgJ2stZmx1aWQnOiBmbHVpZCxcbiAgICAnay1hY3RpdmUnOiBjaGVja2VkLFxuICAgICdrLWRpc2FibGVkJzogZGlzYWJsZWQgfHwgbG9hZGluZyxcbn07XG5cbmNvbnN0IEJ1dHRvbiA9IHByb3BzID0+IHtcbiAgICBpZiAocHJvcHMuaHJlZiAmJiB0YWdOYW1lID09PSAnYnV0dG9uJykge1xuICAgICAgICB0YWdOYW1lID0gJ2EnO1xuICAgIH1cbiAgICBpZiAodGFnTmFtZSA9PT0gJ2J1dHRvbicpIHtcbiAgICAgICAgLy8gc2V0IHR5cGUgb2YgaHRtbCBidXR0b25cbiAgICAgICAgcHJvcHMudHlwZSA9IGh0bWxUeXBlO1xuICAgIH1cbiAgICAvLyBkaXNhYmxlIGJ1dHRvbiB3aGVuIGxvYWRpbmdcbiAgICAvKiBpZiAobG9hZGluZykgcHJvcHMuZGlzYWJsZWQgPSB0cnVlOyAqL1xuICAgIHJldHVybiBoKHRhZ05hbWUsIHByb3BzLCBwcm9wcy5jaGlsZHJlbik7XG59O1xuXG4vLyBoYWNrIGZvciBsb2FkaW5nIHRyYW5zaXRpb24gb2Ygd2lkdGhcbmlmICghaWNvbiAmJiBBcnJheS5pc0FycmF5KGNoaWxkcmVuKSkge1xuICAgIGNoaWxkcmVuLmZvckVhY2goKGNoaWxkLCBpbmRleCkgPT4ge1xuICAgICAgICBpZiAoY2hpbGQpIHtcbiAgICAgICAgICAgIGlmIChjaGlsZC50eXBlID09PSAxIHx8IGlzU3RyaW5nT3JOdW1iZXJOb3RFbXB0eShjaGlsZCkpIHtcbiAgICAgICAgICAgICAgICAvLyBpcyBhIHRleHQgbm9kZVxuICAgICAgICAgICAgICAgIC8vIHdyYXAgdGV4dCBub2RlIHdpdGggc3BhblxuICAgICAgICAgICAgICAgIGNoaWxkcmVuW2luZGV4XSA9IGgoJ3NwYW4nLCBudWxsLCBmdW5jdGlvbigpIHt0cnkge3JldHVybiBbY2hpbGQgXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIHdoZXRoZXIgdGhlIGljb24gaXMgb24gdGhlIGxlZnQgc2lkZSBvciByaWdodFxuICAgICAgICAgICAgaWYgKGluZGV4ID09PSAwKSB7XG4gICAgICAgICAgICAgICAgaWYgKGNoaWxkLmNsYXNzTmFtZSAmJiBjaGlsZC5jbGFzc05hbWUuaW5kZXhPZignaWNvbicpID4gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lT2JqWydrLWljb24tbGVmdCddID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGluZGV4ID09PSBjaGlsZHJlbi5sZW5ndGggLSAxKSB7XG4gICAgICAgICAgICAgICAgaWYgKGNoaWxkLmNsYXNzTmFtZSAmJiBjaGlsZC5jbGFzc05hbWUuaW5kZXhPZignaWNvbicpID4gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lT2JqWydrLWljb24tcmlnaHQnXSA9IHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSk7XG59IGVsc2UgaWYgKGlzU3RyaW5nT3JOdW1iZXJOb3RFbXB0eShjaGlsZHJlbikpIHtcbiAgICAvLyB3cmFwIHRleHQgbm9kZSB3aXRoIHNwYW5cbiAgICBjaGlsZHJlbiA9IGgoJ3NwYW4nLCBudWxsLCBmdW5jdGlvbigpIHt0cnkge3JldHVybiBbY2hpbGRyZW4gXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKSlcbn1cblxucmV0dXJuIGgoQnV0dG9uLCB7J2NsYXNzTmFtZSc6IF9jbGFzc05hbWUoZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW2NsYXNzTmFtZU9iaiBdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpKSwgLi4uZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW3Jlc3QgXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKSwgLi4uZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW3RhZ1Byb3BzIF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcyksICdldi1jbGljayc6IGZ1bmN0aW9uKCkge3RyeSB7cmV0dXJuIFtzZWxmLl9vbkNsaWNrIF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcyksICd0YWJpbmRleCc6IGZ1bmN0aW9uKCkge3RyeSB7cmV0dXJuIFtkaXNhYmxlZCB8fCBsb2FkaW5nID8gXCItMVwiIDogdGFiaW5kZXggXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKSwgJ2V2LW1vdXNldXAnOiBmdW5jdGlvbigpIHt0cnkge3JldHVybiBbc2VsZi5fYmx1ciBdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpLCAnY2hpbGRyZW4nOiBbJ1xcbiAgICAnLCBmdW5jdGlvbigpIHt0cnkge3JldHVybiBbbG9hZGluZyA/IFxuICAgICAgICBjbGFzc05hbWVPYmpbJ2staWNvbi1yaWdodCddID9cbiAgICAgICAgICAgIFtjaGlsZHJlbiwgaCgnaScsIG51bGwsIG51bGwsICdrLWljb24gaW9uLWxvYWQtYyBpY29uLWxvYWRpbmcnKV0gOlxuICAgICAgICAgICAgW2goJ2knLCBudWxsLCBudWxsLCAnay1pY29uIGlvbi1sb2FkLWMgaWNvbi1sb2FkaW5nJyksIGNoaWxkcmVuXSA6XG4gICAgICAgIGNoaWxkcmVuIFxuICAgIF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcyksICdcXG4gICAgJywgZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW19jaGVja1R5cGUgIT09ICdub25lJyBdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpID8gaCgnaW5wdXQnLCB7J3R5cGUnOiBmdW5jdGlvbigpIHt0cnkge3JldHVybiBbX2NoZWNrVHlwZSBdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpLCAnbmFtZSc6IGZ1bmN0aW9uKCkge3RyeSB7cmV0dXJuIFtuYW1lIF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcyksICdjaGVja2VkJzogZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW2NoZWNrZWQgXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKSwgJ3RhYmluZGV4JzogJy0xJ30pIDogdW5kZWZpbmVkXSwgJ19jb250ZXh0JzogJHRoaXN9KVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvYnV0dG9uL2luZGV4LnZkdCIsImltcG9ydCBJbnRhY3QgZnJvbSAnaW50YWN0JztcbmltcG9ydCB0ZW1wbGF0ZSBmcm9tICcuL2luZGV4LnZkdCc7XG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uL2xheW91dCc7XG5pbXBvcnQgJy4vaW5kZXguc3R5bCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgTGF5b3V0IHtcbiAgICBASW50YWN0LnRlbXBsYXRlKClcbiAgICBzdGF0aWMgdGVtcGxhdGUgPSB0ZW1wbGF0ZTtcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NpdGUvc3JjL3BhZ2VzL2luZGV4L2luZGV4LmpzIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cbiAgICBpZihtb2R1bGUuaG90KSB7XG4gICAgICAvLyAxNTI3NTc2Njk2MjkxXG4gICAgICB2YXIgY3NzUmVsb2FkID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWhvdC1sb2FkZXIvaG90TW9kdWxlUmVwbGFjZW1lbnQuanNcIikobW9kdWxlLmlkLCB7XCJmaWxlTWFwXCI6XCJ7ZmlsZU5hbWV9XCJ9KTtcbiAgICAgIG1vZHVsZS5ob3QuZGlzcG9zZShjc3NSZWxvYWQpO1xuICAgICAgbW9kdWxlLmhvdC5hY2NlcHQodW5kZWZpbmVkLCBjc3NSZWxvYWQpO1xuICAgIH1cbiAgXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zaXRlL3NyYy9wYWdlcy9pbmRleC9pbmRleC5zdHlsXG4vLyBtb2R1bGUgaWQgPSAuL3NpdGUvc3JjL3BhZ2VzL2luZGV4L2luZGV4LnN0eWxcbi8vIG1vZHVsZSBjaHVua3MgPSAyIiwiaW1wb3J0IHtCdXR0b259IGZyb20gJ2twYy9jb21wb25lbnRzL2J1dHRvbic7aW1wb3J0IHtMaW5rfSBmcm9tICdrcGMvY29tcG9uZW50cy9saW5rJztcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKG9iaiwgX1ZkdCwgYmxvY2tzLCAkY2FsbGVlKSB7XG5fVmR0IHx8IChfVmR0ID0gVmR0KTtcbm9iaiB8fCAob2JqID0ge30pO1xuYmxvY2tzIHx8IChibG9ja3MgPSB7fSk7XG52YXIgaCA9IF9WZHQubWlzcy5oLCBoYyA9IF9WZHQubWlzcy5oYywgaHUgPSBfVmR0Lm1pc3MuaHUsIHdpZGdldHMgPSB0aGlzICYmIHRoaXMud2lkZ2V0cyB8fCB7fSwgX2Jsb2NrcyA9IHt9LCBfX2Jsb2NrcyA9IHt9LFxuX191ID0gX1ZkdC51dGlscywgZXh0ZW5kID0gX191LmV4dGVuZCwgX2UgPSBfX3UuZXJyb3IsIF9jbGFzc05hbWUgPSBfX3UuY2xhc3NOYW1lLFxuX19vID0gX191Lk9wdGlvbnMsIF9nZXRNb2RlbCA9IF9fby5nZXRNb2RlbCwgX3NldE1vZGVsID0gX19vLnNldE1vZGVsLFxuX3NldENoZWNrYm94TW9kZWwgPSBfX3Uuc2V0Q2hlY2tib3hNb2RlbCwgX2RldGVjdENoZWNrYm94Q2hlY2tlZCA9IF9fdS5kZXRlY3RDaGVja2JveENoZWNrZWQsXG5fc2V0U2VsZWN0TW9kZWwgPSBfX3Uuc2V0U2VsZWN0TW9kZWwsXG5zZWxmID0gdGhpcy5kYXRhLCAkdGhpcyA9IHRoaXMsIHNjb3BlID0gb2JqLCBBbmltYXRlID0gc2VsZiAmJiBzZWxmLkFuaW1hdGUsIHBhcmVudCA9ICgkY2FsbGVlIHx8IHt9KS5fc3VwZXJcblxuXG5cbnJldHVybiAoZnVuY3Rpb24oKSB7XG4gICAgdmFyIF9vYmogPSB7J2NsYXNzTmFtZSc6ICdpbmRleC1wYWdlJywgJ2NoaWxkcmVuJzogbnVsbH07XG4gICAgaWYgKF9vYmouaGFzT3duUHJvcGVydHkoXCJhcmd1bWVudHNcIikpIHtcbiAgICAgICAgZXh0ZW5kKF9vYmosIF9vYmouYXJndW1lbnRzID09PSB0cnVlID8gb2JqIDogX29iai5hcmd1bWVudHMpO1xuICAgICAgICBkZWxldGUgX29iai5hcmd1bWVudHM7XG4gICAgfVxuICAgIHJldHVybiBwYXJlbnQuY2FsbCh0aGlzLCBfb2JqLCBfVmR0LCBmdW5jdGlvbihibG9ja3MpIHtcbiAgICB2YXIgX2Jsb2NrcyA9IHt9LCBfX2Jsb2NrcyA9IGV4dGVuZCh7fSwgYmxvY2tzKTtcbiAgICByZXR1cm4gKChfYmxvY2tzW1wiY29udGVudFwiXSA9IGZ1bmN0aW9uKHBhcmVudCkge3JldHVybiBoKCdhcnRpY2xlJywgbnVsbCwgWydcXG5cdFx0XHQnLCBoYygnIDxpbWcgc3JjPVxcXCJpbWFnZXMvbG9nby5wbmdcXFwiIC8+ICcpLCBoKCdoMScsIG51bGwsICdLUEMnKSwgaCgncCcsIG51bGwsICfmlK/mjIHlpJrmoYbmnrbnmoTliY3nq6/pq5jotKjph4/nu4Tku7blupMnKSwgaCgnZGl2JywgbnVsbCwgW2goQnV0dG9uLCB7J3RhZ05hbWUnOiBmdW5jdGlvbigpIHt0cnkge3JldHVybiBbTGluayBdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpLCAndHlwZSc6ICdwcmltYXJ5JywgJ3RhZ1Byb3BzJzogZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW3tcbiAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY6IGAke3Byb2Nlc3MuVVJMX1BSRUZJWH0vZG9jcy9nZXR0aW5nLXN0YXJ0ZWQvYFxuICAgICAgICAgICAgICAgICAgICB9IF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcyksICdjbGFzc05hbWUnOiAnYnV0dG9uJywgJ2NoaWxkcmVuJzogJ+W8gOWniycsICdfY29udGV4dCc6ICR0aGlzfSksIGgoQnV0dG9uLCB7J2hyZWYnOiAnaHR0cHM6Ly9naXRodWIuY29tL2tzYy1mZS9rcGMnLCAnY2xhc3NOYW1lJzogJ2J1dHRvbicsICd0YXJnZXQnOiAnX2JsYW5rJywgJ2NoaWxkcmVuJzogJ0dpdEh1YicsICdfY29udGV4dCc6ICR0aGlzfSldLCAnYWN0aW9ucycpLCBoKCdkaXYnLCBudWxsLCBbaCgnZGl2JywgbnVsbCwgW2goJ2gyJywgbnVsbCwgJ+aUr+aMgeWkmuahhuaeticsICdibHVlJyksIGgoJ2RpdicsIG51bGwsICdcXG4gICAgICAgICAgICAgICAgICAgICAgICDlkIzml7bmlK/mjIFJbnRhY3TlkoxWdWXmoYbmnrZcXG5cdFx0XHRcdFx0JyldLCAnZmVhdHVyZScpLCBoKCdkaXYnLCBudWxsLCBbaCgnaDInLCBudWxsLCAn5b+g5LqO5Y6f55Sf77yM5aKe5by65Y6f55SfJywgJ3llbGxvdycpLCBoKCdkaXYnLCBudWxsLCAnXFxuICAgICAgICAgICAgICAgICAgICAgICAg5Zyo5L+d5oyB5rWP6KeI5Zmo5Y6f55Sf54m55oCn55qE5Z+656GA5LiK77yM5aKe5by65Lqk5LqS6IO95YqbXFxuXHRcdFx0XHRcdCcpXSwgJ2ZlYXR1cmUnKSwgaCgnZGl2JywgbnVsbCwgW2goJ2gyJywgbnVsbCwgJ+S+v+aNt+W8gOWPkScsICdyZWQnKSwgaCgnZGl2JywgbnVsbCwgJ1xcbiAgICAgICAgICAgICAgICAgICAgICAgIOaUr+aMgeaMiemcgOWKoOi9ve+8jOS4u+mimOWumuWItu+8jOWbvemZheWMluetieeJueaAp+OAguW5tuS4lOaPkOS+m+S6humFjeWll+eahOiEmuaJi+aetuaWueS+v+W/q+mAn+WIneWni+WMlumhueebrlxcblx0XHRcdFx0XHQnKV0sICdmZWF0dXJlJyldLCAnZmVhdHVyZXMnKV0sICdob21lLWhlYWRlcicpO30pICYmIChfX2Jsb2Nrc1tcImNvbnRlbnRcIl0gPSBmdW5jdGlvbihwYXJlbnQpIHtcbnZhciBzZWxmID0gdGhpcztcbnJldHVybiBibG9ja3NbXCJjb250ZW50XCJdID8gYmxvY2tzW1wiY29udGVudFwiXS5jYWxsKHRoaXMsIGZ1bmN0aW9uKCkge1xucmV0dXJuIF9ibG9ja3NbXCJjb250ZW50XCJdLmNhbGwoc2VsZiwgcGFyZW50KTtcbn0pIDogX2Jsb2Nrc1tcImNvbnRlbnRcIl0uY2FsbCh0aGlzLCBwYXJlbnQpO1xufSksIF9fYmxvY2tzKTtcbn0uY2FsbCh0aGlzLCBibG9ja3MpLCBwYXJlbnQpXG59KS5jYWxsKHRoaXMpXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc2l0ZS9zcmMvcGFnZXMvaW5kZXgvaW5kZXgudmR0Il0sInNvdXJjZVJvb3QiOiIifQ==