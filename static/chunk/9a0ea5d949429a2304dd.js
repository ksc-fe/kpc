webpackJsonp([0],{

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
      // 1527754407696
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

/***/ "./components/dropdown/dropdown.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = undefined;

var _getOwnPropertyDescriptor = __webpack_require__("./node_modules/babel-runtime/core-js/object/get-own-property-descriptor.js");

var _getOwnPropertyDescriptor2 = _interopRequireDefault(_getOwnPropertyDescriptor);

var _extends2 = __webpack_require__("./node_modules/babel-runtime/helpers/extends.js");

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = __webpack_require__("./node_modules/babel-runtime/helpers/objectWithoutProperties.js");

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _classCallCheck2 = __webpack_require__("./node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__("./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__("./node_modules/babel-runtime/helpers/inherits.js");

var _inherits3 = _interopRequireDefault(_inherits2);

var _dec, _desc, _value, _class;

var _intact = __webpack_require__("./node_modules/intact-vue/dist/intact.vue.js");

var _intact2 = _interopRequireDefault(_intact);

var _utils = __webpack_require__("./components/utils.js");

var _menu = __webpack_require__("./components/dropdown/menu.js");

var _menu2 = _interopRequireDefault(_menu);

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

var h = _intact2.default.Vdt.miss.h;

var Dropdown = (_dec = _intact2.default.template(), (_class = function (_Intact) {
    (0, _inherits3.default)(Dropdown, _Intact);

    function Dropdown() {
        (0, _classCallCheck3.default)(this, Dropdown);
        return (0, _possibleConstructorReturn3.default)(this, _Intact.apply(this, arguments));
    }

    Dropdown.template = function template(data) {
        return data.get('children');
    };

    Dropdown.prototype.defaults = function defaults() {
        return {
            trigger: 'hover',
            disabled: false
        };
    };

    Dropdown.prototype._init = function _init() {
        var _this2 = this;

        this._saveOriginalEvents();
        this.on('$receive:children', function () {
            _this2._saveOriginalEvents();
        }, { keep: true });
    };

    Dropdown.prototype._saveOriginalEvents = function _saveOriginalEvents() {
        var _get = this.get(),
            children = _get.children,
            trigger = _get.trigger,
            className = _get.className,
            rest = (0, _objectWithoutProperties3.default)(_get, ['children', 'trigger', 'className']);

        if (Array.isArray(children)) {
            children = children[0];
        }
        if ((0, _utils.isTextVNode)(children)) {
            children = h('span', rest, children, className);
        }

        // save the original event
        var originProps = children.props;
        var hasSaved = false;
        if (!originProps._hasSaved) {
            children._evClick = originProps['ev-click'];
            children._evMouseEnter = originProps['ev-mouseenter'];
            children._evMouseLeave = originProps['ev-mouseleave'];
            hasSaved = true;
        }
        var props = {};
        // if (trigger === 'click') {
        props['ev-click'] = this.show.bind(this, children._evClick);
        // } else {
        if (trigger === 'hover') {
            props['ev-mouseenter'] = this.show.bind(this, children._evMouseEnter);
            props['ev-mouseleave'] = this.hide.bind(this, children._evMouseLeave);
        }
        if (hasSaved) {
            props._hasSaved = true;
        }
        children.props = (0, _extends3.default)({}, children.props, props);
        this.set('children', children, { silent: true });
    };

    Dropdown.prototype._mount = function _mount() {
        // the next sibling is DropdownMenu
        // we can not get the menu by call get('menu') directly,
        // because the vNode may be cloned
        var siblings = this.parentVNode.children;
        var index = siblings.indexOf(this.vNode);
        var menu = siblings[index + 1];
        menu.children.dropdown = this;
        this.menu = menu;
    };

    Dropdown.prototype.show = function show(fn, e, isFocus) {
        if (typeof fn === 'function') fn(e);

        if (this.get('disabled')) return;

        var menu = this.menu.children;
        menu.show();

        if (isFocus) {
            menu.focusItemByIndex(0);
        }
    };

    Dropdown.prototype.hide = function hide(fn, e, immediately) {
        if (typeof fn === 'function') fn(e);

        if (this.get('disabled')) return;

        var menu = this.menu.children;
        menu.hide(immediately);
    };

    return Dropdown;
}(_intact2.default), (_applyDecoratedDescriptor(_class, 'template', [_dec], (0, _getOwnPropertyDescriptor2.default)(_class, 'template'), _class)), _class));
exports.default = Dropdown;
module.exports = exports['default'];

/***/ }),

/***/ "./components/dropdown/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.DropdownItem = exports.DropdownMenu = exports.Dropdown = undefined;

var _classCallCheck2 = __webpack_require__("./node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__("./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__("./node_modules/babel-runtime/helpers/inherits.js");

var _inherits3 = _interopRequireDefault(_inherits2);

var _extends2 = __webpack_require__("./node_modules/babel-runtime/helpers/extends.js");

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = __webpack_require__("./node_modules/babel-runtime/helpers/objectWithoutProperties.js");

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _intact = __webpack_require__("./node_modules/intact-vue/dist/intact.vue.js");

var _intact2 = _interopRequireDefault(_intact);

var _dropdown = __webpack_require__("./components/dropdown/dropdown.js");

var _dropdown2 = _interopRequireDefault(_dropdown);

var _menu = __webpack_require__("./components/dropdown/menu.js");

var _menu2 = _interopRequireDefault(_menu);

var _item = __webpack_require__("./components/dropdown/item.js");

var _item2 = _interopRequireDefault(_item);

__webpack_require__("./styles/kpc.styl");

__webpack_require__("./components/dropdown/index.styl");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var h = _intact2.default.Vdt.miss.h;

function Wrapper(props, inVue) {
    var children = props.children,
        position = props.position,
        key = props.key,
        ref = props.ref,
        rest = (0, _objectWithoutProperties3.default)(props, ['children', 'position', 'key', 'ref']);


    var element = children[0];
    var menu = children[1];

    menu.props = (0, _extends3.default)({
        position: position,
        key: key == null ? key : key + '.menu'
    }, rest, menu.props);

    return !inVue ? [h(_dropdown2.default, (0, _extends3.default)({
        key: key == null ? key : key + '.trigger',
        ref: ref,
        children: element
    }, rest)), menu] : h(DropdownVueWrapper, (0, _extends3.default)({
        children: [h(_dropdown2.default, (0, _extends3.default)({
            key: key == null ? key : key + '.trigger',
            ref: ref,
            children: [element]
        }, rest)), menu]
    }, rest));
}

// Vue only support return one element from functional component,
// so we wrap them. This will lead to damage the dom struction,
// because we must wrap them with a div
var _className = _intact2.default.Vdt.utils.className;

var DropdownVueWrapper = function (_Intact) {
    (0, _inherits3.default)(DropdownVueWrapper, _Intact);

    function DropdownVueWrapper() {
        (0, _classCallCheck3.default)(this, DropdownVueWrapper);
        return (0, _possibleConstructorReturn3.default)(this, _Intact.apply(this, arguments));
    }

    DropdownVueWrapper.prototype.template = function template(data) {
        var _className2;

        var _data$get = data.get(),
            className = _data$get.className,
            children = _data$get.children,
            rest = (0, _objectWithoutProperties3.default)(_data$get, ['className', 'children']);

        return h('div', rest, children, _className((_className2 = {
            'k-dropdown': true
        }, _className2[className] = className, _className2)));
    };

    return DropdownVueWrapper;
}(_intact2.default);

var _Wrapper = _intact2.default.functionalWrapper ? _intact2.default.functionalWrapper(Wrapper) : Wrapper;

exports.default = _Wrapper;
exports.Dropdown = _Wrapper;
exports.DropdownMenu = _menu2.default;
exports.DropdownItem = _item2.default;

/***/ }),

/***/ "./components/dropdown/index.styl":
/***/ (function(module, exports, __webpack_require__) {

// removed by extract-text-webpack-plugin
    if(false) {
      // 1527754409369
      var cssReload = require("!../../node_modules/css-hot-loader/hotModuleReplacement.js")(module.id, {"fileMap":"{fileName}"});
      module.hot.dispose(cssReload);
      module.hot.accept(undefined, cssReload);
    }
  

/***/ }),

/***/ "./components/dropdown/item.js":
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

var _item = __webpack_require__("./components/dropdown/item.vdt");

var _item2 = _interopRequireDefault(_item);

var _dropdown = __webpack_require__("./components/dropdown/dropdown.js");

var _dropdown2 = _interopRequireDefault(_dropdown);

var _menu = __webpack_require__("./components/dropdown/menu.js");

var _menu2 = _interopRequireDefault(_menu);

var _utils = __webpack_require__("./components/utils.js");

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

var DropdownItem = (_dec = _intact2.default.template(), (_class = (_temp = _class2 = function (_Intact) {
    (0, _inherits3.default)(DropdownItem, _Intact);

    function DropdownItem() {
        (0, _classCallCheck3.default)(this, DropdownItem);
        return (0, _possibleConstructorReturn3.default)(this, _Intact.apply(this, arguments));
    }

    DropdownItem.prototype.defaults = function defaults() {
        return {
            disabled: false,
            hideOnSelect: true,

            _isFocus: false
        };
    };

    DropdownItem.prototype._init = function _init() {
        var _this2 = this;

        // if selected hide all dropdown menu
        this.on('select', function () {
            if (_this2.get('hideOnSelect')) {
                var ancestor = _this2._findAncestorDropdownMenu();
                ancestor.hide(true);
            }
        });
    };

    DropdownItem.prototype._mount = function _mount() {
        var parent = this.parent = this._findAncestorDropdownMenu(true);
        parent.items.push(this);
    };

    DropdownItem.prototype._onClick = function _onClick(e) {
        if (this.get('disabled')) return;

        this.trigger('click', e);

        // is not a sub dropdown trigger
        if (this.parentVNode.tag !== _dropdown2.default) {
            this.trigger('select', this, e);
        }
    };

    DropdownItem.prototype._onMouseEnter = function _onMouseEnter(e) {
        this.trigger('mouseenter', e);

        if (this.get('disabled')) return;

        this.parent.focusItem(this);
    };

    DropdownItem.prototype._onMouseLeave = function _onMouseLeave(e) {
        this.trigger('mouseleave', e);
        // if (this.get('disabled')) return;
    };

    DropdownItem.prototype.select = function select() {
        // is not a sub dropdown trigger
        var dropdown = this._isSubMenu();
        if (!dropdown) {
            this.trigger('select', this);
        } else {
            dropdown.show();
        }
    };

    DropdownItem.prototype.focus = function focus() {
        this.set('_isFocus', true);

        var elRect = this.element.getBoundingClientRect();
        var pEl = this.parent.refs.menu.element;
        var pElRect = pEl.getBoundingClientRect();
        var bottomOverflowDistance = elRect.bottom - pElRect.bottom;
        var topOverflowDistance = elRect.top - pElRect.top;

        if (bottomOverflowDistance > 0) {
            pEl.scrollTop += bottomOverflowDistance;
        } else if (topOverflowDistance < 0) {
            pEl.scrollTop += topOverflowDistance;
        }
    };

    DropdownItem.prototype.unFocus = function unFocus() {
        this.set('_isFocus', false);

        var dropdown = this._isSubMenu();
        if (dropdown) {
            dropdown.hide(null, null, true);
        }
    };

    DropdownItem.prototype.showMenuAndFocus = function showMenuAndFocus() {
        var dropdown = this._isSubMenu();
        if (dropdown) {
            dropdown.show(null, null, true);
        }
    };

    DropdownItem.prototype.hideMenu = function hideMenu() {
        var dropdown = this._isSubMenu();
        if (dropdown) {
            dropdown.hide(null, null, true);
        }
    };

    DropdownItem.prototype._isSubMenu = function _isSubMenu() {
        if (this.parentVNode.tag === _dropdown2.default) {
            return this.parentVNode.children;
        }
    };

    DropdownItem.prototype._findAncestorDropdownMenu = function _findAncestorDropdownMenu(isFirst) {
        return (0, _utils.findParentComponent)(_menu2.default, this, isFirst);
    };

    DropdownItem.prototype._destroy = function _destroy() {
        var items = this.parent.items;
        items.splice(items.indexOf(this), 1);
    };

    return DropdownItem;
}(_intact2.default), _class2.template = _item2.default, _class2.propTypes = {
    disabled: Boolean,
    hideOnSelect: Boolean
}, _temp), (_applyDecoratedDescriptor(_class, 'template', [_dec], (_init = (0, _getOwnPropertyDescriptor2.default)(_class, 'template'), _init = _init ? _init.value : undefined, {
    enumerable: true,
    configurable: true,
    writable: true,
    initializer: function initializer() {
        return _init;
    }
}), _class)), _class));
exports.default = DropdownItem;
module.exports = exports['default'];

/***/ }),

/***/ "./components/dropdown/item.vdt":
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
    /* import {proxyEvent} from '../utils'; */

    var _self$get = self.get(),
        children = _self$get.children,
        disabled = _self$get.disabled,
        className = _self$get.className,
        _isFocus = _self$get._isFocus;

    var classNameObj = (_classNameObj = {
        'k-item': true,
        'k-disabled': disabled
    }, _classNameObj[className] = className, _classNameObj['k-hover'] = _isFocus, _classNameObj);

    return h('div', { 'ev-click': function () {
            try {
                return [self._onClick][0];
            } catch (e) {
                _e(e);
            }
        }.call(this), 'ev-mouseenter': function () {
            try {
                return [self._onMouseEnter][0];
            } catch (e) {
                _e(e);
            }
        }.call(this), 'ev-mouseleave': function () {
            try {
                return [self._onMouseLeave][0];
            } catch (e) {
                _e(e);
            }
        }.call(this) }, function () {
        try {
            return [children][0];
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

module.exports = exports['default'];

/***/ }),

/***/ "./components/dropdown/menu.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = undefined;

var _getOwnPropertyDescriptor = __webpack_require__("./node_modules/babel-runtime/core-js/object/get-own-property-descriptor.js");

var _getOwnPropertyDescriptor2 = _interopRequireDefault(_getOwnPropertyDescriptor);

var _extends2 = __webpack_require__("./node_modules/babel-runtime/helpers/extends.js");

var _extends3 = _interopRequireDefault(_extends2);

var _classCallCheck2 = __webpack_require__("./node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__("./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__("./node_modules/babel-runtime/helpers/inherits.js");

var _inherits3 = _interopRequireDefault(_inherits2);

var _dec, _desc, _value, _class, _init, _class2, _temp;

var _intact = __webpack_require__("./node_modules/intact-vue/dist/intact.vue.js");

var _intact2 = _interopRequireDefault(_intact);

var _menu = __webpack_require__("./components/dropdown/menu.vdt");

var _menu2 = _interopRequireDefault(_menu);

var _position2 = __webpack_require__("./components/moveWrapper/position.js");

var _position3 = _interopRequireDefault(_position2);

var _utils = __webpack_require__("./components/utils.js");

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

var DropdownMenu = (_dec = _intact2.default.template(), (_class = (_temp = _class2 = function (_Intact) {
    (0, _inherits3.default)(DropdownMenu, _Intact);

    function DropdownMenu() {
        (0, _classCallCheck3.default)(this, DropdownMenu);
        return (0, _possibleConstructorReturn3.default)(this, _Intact.apply(this, arguments));
    }

    DropdownMenu.prototype.defaults = function defaults() {
        return {
            show: false,
            trigger: 'hover',
            position: {},
            transition: 'slidedown'
        };
    };

    DropdownMenu.prototype._init = function _init() {
        this.subDropdowns = [];
        this.items = [];
        this.focusIndex = -1;
        this.locked = false;
    };

    DropdownMenu.prototype._mount = function _mount() {
        var parent = this._findParentDropdownMenu();
        if (parent) parent.subDropdowns.push(this);

        if (this.get('show')) {
            this._addDocumentEvents();
        }
    };

    DropdownMenu.prototype._findParentDropdownMenu = function _findParentDropdownMenu() {
        return (0, _utils.findParentComponent)(DropdownMenu, this, true);
    };

    DropdownMenu.prototype.show = function show() {
        clearTimeout(this.timer);
        this.set('show', true);
        var parent = this._findParentDropdownMenu();
        if (parent) {
            parent.show();
        }
    };

    DropdownMenu.prototype.hide = function hide(immediately) {
        var _this2 = this;

        if (!immediately) {
            this.timer = setTimeout(function () {
                _this2.set('show', false);
            }, 200);
        } else {
            this.set('show', false);
        }
    };

    DropdownMenu.prototype.toggle = function toggle() {
        this.set('show', !this.get('show'));
    };

    DropdownMenu.prototype.position = function position() {
        var _this3 = this;

        (0, _position3.default)(this.refs.menu.element, (0, _extends3.default)({
            my: 'center top+5',
            at: 'center bottom',
            of: this.dropdown.element,
            using: function using(feedback) {
                _this3.set('transition', (0, _utils.getTransition)(feedback));
            }
        }, this.get('position')));
    };

    DropdownMenu.prototype._onShow = function _onShow() {
        this.focusIndex = -1;
        this._addDocumentEvents();
        this.position();
    };

    DropdownMenu.prototype._addDocumentEvents = function _addDocumentEvents() {
        var parent = this._findParentDropdownMenu();
        if (!parent) {
            // if (this.get('trigger') === 'click') {
            document.addEventListener('click', this._onDocumentClick);
            // }
        } else {
            parent.locked = true;
        }

        document.addEventListener('keydown', this._onKeydown);
    };

    DropdownMenu.prototype._removeDocumentEvents = function _removeDocumentEvents() {
        var parent = this._findParentDropdownMenu();
        if (!parent) {
            // if (this.get('trigger') === 'click') {
            document.removeEventListener('click', this._onDocumentClick);
            // }
        } else {
            parent.locked = false;
        }

        document.removeEventListener('keydown', this._onKeydown);
    };

    DropdownMenu.prototype._onDocumentClick = function _onDocumentClick(e) {
        var target = e.target;
        var menu = this.refs.menu.element;

        // is a dropdown menu
        if (menu === target || menu.contains(target)) return;
        // is click on sub menu
        if (this._isClickSubMenu(target, this.subDropdowns)) return;
        // custom flag to indicate that the event does not lead to close menu
        if (e._dropdown) return;

        this.hide(true);
    };

    DropdownMenu.prototype._onKeydown = function _onKeydown(e) {
        if (this.locked) {
            return;
        }
        switch (e.keyCode) {
            // down
            case 40:
                this._focusNextItem(e);
                break;
            // up
            case 38:
                this._focusPrevItem(e);
                break;
            // right
            case 39:
                this._showSubMenu(e);
                break;
            // left
            case 37:
                this._hideSubMenu(e);
                break;
            // enter
            case 13:
                this._selectItem(e);
                break;
        }
    };

    DropdownMenu.prototype._focusNextItem = function _focusNextItem(e) {
        var parent = this._findParentDropdownMenu();
        if (parent && this.focusIndex < 0) {
            return;
        }
        e.preventDefault();
        this.focusItemByIndex(this.focusIndex + 1, 'down');
    };

    DropdownMenu.prototype._focusPrevItem = function _focusPrevItem(e) {
        var parent = this._findParentDropdownMenu();
        if (parent && this.focusIndex < 0) {
            return;
        }
        e.preventDefault();
        this.focusItemByIndex(this.focusIndex - 1, 'up');
    };

    DropdownMenu.prototype.focusItemByIndex = function focusItemByIndex(index) {
        var direction = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'down';

        var items = this.items;
        var max = items.length - 1;
        var oldIndex = this.focusIndex;

        function fixIndex(index) {
            if (index > max) {
                index = 0;
            } else if (index < 0) {
                index = max;
            }
            return index;
        }

        index = fixIndex(index);

        var i = 0;
        while (i <= max && items[index] && items[index].get('disabled')) {
            index = fixIndex(direction === 'down' ? index + 1 : index - 1);
            i++;
        }

        // all items are disabled
        if (i > max) return;

        this.focusIndex = index;

        if (oldIndex > -1 && items[oldIndex]) {
            items[oldIndex].unFocus();
        }

        items[index].focus();
    };

    DropdownMenu.prototype._selectItem = function _selectItem(e) {
        this._showSubMenu(e);
        if (this.focusIndex > -1) {
            e.preventDefault();
            this.items[this.focusIndex].select();
        }
    };

    DropdownMenu.prototype._showSubMenu = function _showSubMenu(e) {
        var parent = this._findParentDropdownMenu();
        if (!parent && this.focusIndex < 0) return;

        e.preventDefault();
        if (parent && this.focusIndex < 0) {
            this.focusItemByIndex(0);
        } else if (this.focusIndex > -1) {
            this.items[this.focusIndex].showMenuAndFocus();
        }
    };

    DropdownMenu.prototype._hideSubMenu = function _hideSubMenu(e) {
        if (this.focusIndex > -1) {
            e.preventDefault();
            this.items[this.focusIndex].hideMenu();

            var parent = (0, _utils.findParentComponent)(DropdownMenu, this, true);
            if (parent) {
                this.dropdown.hide(null, null, true);
            }
        }
    };

    DropdownMenu.prototype.focusItem = function focusItem(item) {
        var index = this.items.indexOf(item);
        this.focusItemByIndex(index);
    };

    DropdownMenu.prototype._isClickSubMenu = function _isClickSubMenu(target, subMenus) {
        var ret = false;
        for (var i = 0; i < subMenus.length; i++) {
            var subMenu = subMenus[i].refs.menu;
            if (subMenu) {
                if (target === subMenu.element || subMenu.element.contains(target)) {
                    ret = true;
                    break;
                } else {
                    ret = this._isClickSubMenu(target, subMenus[i].subDropdowns);
                    if (ret) break;
                }
            }
        }
        return ret;
    };

    DropdownMenu.prototype._destroy = function _destroy() {
        var parent = this._findParentDropdownMenu();
        if (parent) {
            var subDropdowns = parent.subDropdowns;
            subDropdowns.splice(subDropdowns.indexOf(this), 1);
        }
        clearTimeout(this.timer);
        this._removeDocumentEvents();
    };

    return DropdownMenu;
}(_intact2.default), _class2.template = _menu2.default, _temp), (_applyDecoratedDescriptor(_class, 'template', [_dec], (_init = (0, _getOwnPropertyDescriptor2.default)(_class, 'template'), _init = _init ? _init.value : undefined, {
    enumerable: true,
    configurable: true,
    writable: true,
    initializer: function initializer() {
        return _init;
    }
}), _class)), _class));
exports.default = DropdownMenu;
module.exports = exports['default'];

/***/ }),

/***/ "./components/dropdown/menu.vdt":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _extends2 = __webpack_require__("./node_modules/babel-runtime/helpers/extends.js");

var _extends3 = _interopRequireDefault(_extends2);

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

    var _self$get = self.get(),
        children = _self$get.children,
        show = _self$get.show,
        trigger = _self$get.trigger,
        className = _self$get.className,
        transition = _self$get.transition;

    var events = {};
    // no matter what the trigger is, we should show menu when enter it.
    // for this case: hover trigger nests click trigger
    events['ev-mouseenter'] = self.show;
    if (trigger === 'hover') {
        events['ev-mouseleave'] = self.hide.bind(self, false);
    }

    return h(_moveWrapper2.default, { '_parent': function () {
            try {
                return [self][0];
            } catch (e) {
                _e(e);
            }
        }.call(this), 'children': function () {
            try {
                return [show][0];
            } catch (e) {
                _e(e);
            }
        }.call(this) ? h(Animate, (0, _extends3.default)({ 'className': _className(function () {
                try {
                    var _ref;

                    return [(_ref = { "k-dropdown-menu": true }, _ref[className] = className, _ref)][0];
                } catch (e) {
                    _e(e);
                }
            }.call(this)), 'a:transition': function () {
                try {
                    return [transition][0];
                } catch (e) {
                    _e(e);
                }
            }.call(this) }, function () {
            try {
                return [events][0];
            } catch (e) {
                _e(e);
            }
        }.call(this), { 'a:delayDestroy': function () {
                try {
                    return [false][0];
                } catch (e) {
                    _e(e);
                }
            }.call(this), 'ev-$destroyed': function () {
                try {
                    return [self._removeDocumentEvents][0];
                } catch (e) {
                    _e(e);
                }
            }.call(this), 'ev-$mounted': function () {
                try {
                    return [self._onShow][0];
                } catch (e) {
                    _e(e);
                }
            }.call(this), 'children': function () {
                try {
                    return [children][0];
                } catch (e) {
                    _e(e);
                }
            }.call(this), '_context': $this }), null, null, null, function (i) {
            widgets['menu'] = i;
        }) : undefined, '_context': $this }, null, null, null, function (i) {
        widgets['wrapper'] = i;
    });
};

var _moveWrapper = __webpack_require__("./components/moveWrapper/index.js");

var _moveWrapper2 = _interopRequireDefault(_moveWrapper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = exports['default'];

/***/ }),

/***/ "./components/input/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.Input = exports.default = undefined;

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

var _index = __webpack_require__("./components/input/index.vdt");

var _index2 = _interopRequireDefault(_index);

__webpack_require__("./styles/kpc.styl");

__webpack_require__("./components/input/index.styl");

var _utils = __webpack_require__("./components/utils.js");

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

var Input = (_dec = _intact2.default.template, (_class = (_temp = _class2 = function (_Intact) {
    (0, _inherits3.default)(Input, _Intact);

    function Input() {
        (0, _classCallCheck3.default)(this, Input);
        return (0, _possibleConstructorReturn3.default)(this, _Intact.apply(this, arguments));
    }

    Input.prototype.defaults = function defaults() {
        return {
            type: 'text', // text | textarea
            name: undefined,
            value: undefined,
            defaultValue: undefined,
            placeholder: undefined,
            readonly: false,
            clearable: false,
            disabled: false,
            size: 'default',
            rows: 2,
            spellcheck: false,
            autoWidth: false,
            fluid: false,
            width: undefined,
            tabindex: undefined,
            autocomplete: undefined
        };
    };

    Input.prototype._init = function _init() {
        this.on('$changed:value', this._adjustWidth);
        this.on('$changed:placeholder', this._adjustWidth);
    };

    Input.prototype._mount = function _mount() {
        this._adjustWidth();
    };

    Input.prototype._adjustWidth = function _adjustWidth() {
        if (this.get('autoWidth')) {
            var width = this.refs.fake.offsetWidth || 1;
            this.refs.input.style.width = width + 1 + 'px';
        }
    };

    Input.prototype.clear = function clear(e) {
        this.set('value', '');
        this.focus();
        this.trigger('clear', e);
    };

    Input.prototype.select = function select() {
        (0, _utils.selectInput)(this.refs.input);
    };

    Input.prototype.focus = function focus() {
        this.refs.input.focus();
    };

    Input.prototype._onInput = function _onInput(e) {
        this.set('value', e.target.value);
        this.trigger('input', e);
    };

    Input.prototype._proxyEvent = function _proxyEvent(name, e) {
        this.trigger(name, e);
    };

    return Input;
}(_intact2.default), _class2.template = _index2.default, _class2.propTypes = {
    type: String,
    readonly: Boolean,
    clearable: Boolean,
    disabled: Boolean,
    fluid: Boolean
}, _temp), (_applyDecoratedDescriptor(_class, 'template', [_dec], (_init = (0, _getOwnPropertyDescriptor2.default)(_class, 'template'), _init = _init ? _init.value : undefined, {
    enumerable: true,
    configurable: true,
    writable: true,
    initializer: function initializer() {
        return _init;
    }
}), _class)), _class));
exports.default = Input;
exports.Input = Input;

/***/ }),

/***/ "./components/input/index.styl":
/***/ (function(module, exports, __webpack_require__) {

// removed by extract-text-webpack-plugin
    if(false) {
      // 1527754409307
      var cssReload = require("!../../node_modules/css-hot-loader/hotModuleReplacement.js")(module.id, {"fileMap":"{fileName}"});
      module.hot.dispose(cssReload);
      module.hot.accept(undefined, cssReload);
    }
  

/***/ }),

/***/ "./components/input/index.vdt":
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
        type = _self$get.type,
        name = _self$get.name,
        value = _self$get.value,
        placeholder = _self$get.placeholder,
        tabindex = _self$get.tabindex,
        readonly = _self$get.readonly,
        clearable = _self$get.clearable,
        disabled = _self$get.disabled,
        size = _self$get.size,
        rows = _self$get.rows,
        spellcheck = _self$get.spellcheck,
        defaultValue = _self$get.defaultValue,
        style = _self$get.style,
        className = _self$get.className,
        autoWidth = _self$get.autoWidth,
        fluid = _self$get.fluid,
        width = _self$get.width,
        autocomplete = _self$get.autocomplete;

    var classNameObj = (_classNameObj = {
        'k-input': true
    }, _classNameObj['k-' + size] = size !== 'default', _classNameObj['k-group'] = blocks.prepend || blocks.append, _classNameObj['k-disabled'] = disabled, _classNameObj['k-with-prefix'] = blocks.prefix, _classNameObj['k-with-suffix'] = blocks.suffix, _classNameObj['k-clearable'] = clearable, _classNameObj['k-auto-width'] = autoWidth, _classNameObj['k-fluid'] = fluid, _classNameObj[className] = className, _classNameObj);

    var events = ['keydown', 'keyup', 'change', 'keypress', 'focus', 'blur'].reduce(function (memo, name) {
        memo['ev-' + name] = self._proxyEvent.bind(self, name);
        return memo;
    }, {});

    var wrapperEvents = ['click', 'mouseenter', 'mouseleave'].reduce(function (memo, name) {
        memo['ev-' + name] = self._proxyEvent.bind(self, name);
        return memo;
    }, {});

    return h('div', (0, _extends3.default)({ 'style': function () {
            try {
                return [width != null ? (0, _utils.addStyle)(style, { width: width + 'px' }) : style][0];
            } catch (e) {
                _e(e);
            }
        }.call(this) }, function () {
        try {
            return [wrapperEvents][0];
        } catch (e) {
            _e(e);
        }
    }.call(this)), [function () {
        try {
            return [blocks.prepend][0];
        } catch (e) {
            _e(e);
        }
    }.call(this) ? h('div', null, (_blocks["prepend"] = function (parent) {
        return null;
    }) && (__blocks["prepend"] = function (parent) {
        var self = this;
        return blocks["prepend"] ? blocks["prepend"].call(this, function () {
            return _blocks["prepend"].call(self, parent);
        }) : _blocks["prepend"].call(this, parent);
    }) && __blocks["prepend"].call(this), 'k-prepend') : undefined, h('div', null, [function () {
        try {
            return [blocks.prefix][0];
        } catch (e) {
            _e(e);
        }
    }.call(this) ? h('div', null, (_blocks["prefix"] = function (parent) {
        return null;
    }) && (__blocks["prefix"] = function (parent) {
        var self = this;
        return blocks["prefix"] ? blocks["prefix"].call(this, function () {
            return _blocks["prefix"].call(self, parent);
        }) : _blocks["prefix"].call(this, parent);
    }) && __blocks["prefix"].call(this), 'k-prefix') : undefined, function () {
        try {
            return [type !== 'textarea'][0];
        } catch (e) {
            _e(e);
        }
    }.call(this) ? h('input', (0, _extends3.default)({ 'type': function () {
            try {
                return [type][0];
            } catch (e) {
                _e(e);
            }
        }.call(this), 'name': function () {
            try {
                return [name][0];
            } catch (e) {
                _e(e);
            }
        }.call(this), 'value': function () {
            try {
                return [value][0];
            } catch (e) {
                _e(e);
            }
        }.call(this), 'ev-input': function () {
            try {
                return [self._onInput][0];
            } catch (e) {
                _e(e);
            }
        }.call(this), 'defaultValue': function () {
            try {
                return [defaultValue][0];
            } catch (e) {
                _e(e);
            }
        }.call(this), 'readOnly': function () {
            try {
                return [readonly][0];
            } catch (e) {
                _e(e);
            }
        }.call(this), 'placeholder': function () {
            try {
                return [placeholder][0];
            } catch (e) {
                _e(e);
            }
        }.call(this), 'disabled': function () {
            try {
                return [disabled][0];
            } catch (e) {
                _e(e);
            }
        }.call(this), 'tabindex': function () {
            try {
                return [tabindex][0];
            } catch (e) {
                _e(e);
            }
        }.call(this), 'autocomplete': function () {
            try {
                return [autocomplete][0];
            } catch (e) {
                _e(e);
            }
        }.call(this) }, function () {
        try {
            return [events][0];
        } catch (e) {
            _e(e);
        }
    }.call(this)), null, 'k-inner', null, function (i) {
        widgets['input'] = i;
    }) : h('textarea', (0, _extends3.default)({ 'value': function () {
            try {
                return [value][0];
            } catch (e) {
                _e(e);
            }
        }.call(this), 'ev-input': function () {
            try {
                return [self._onInput][0];
            } catch (e) {
                _e(e);
            }
        }.call(this), 'defaultValue': function () {
            try {
                return [defaultValue][0];
            } catch (e) {
                _e(e);
            }
        }.call(this), 'name': function () {
            try {
                return [name][0];
            } catch (e) {
                _e(e);
            }
        }.call(this), 'readOnly': function () {
            try {
                return [readonly][0];
            } catch (e) {
                _e(e);
            }
        }.call(this), 'placeholder': function () {
            try {
                return [placeholder][0];
            } catch (e) {
                _e(e);
            }
        }.call(this), 'disabled': function () {
            try {
                return [disabled][0];
            } catch (e) {
                _e(e);
            }
        }.call(this), 'rows': function () {
            try {
                return [rows][0];
            } catch (e) {
                _e(e);
            }
        }.call(this), 'spellcheck': function () {
            try {
                return [spellcheck][0];
            } catch (e) {
                _e(e);
            }
        }.call(this), 'tabindex': function () {
            try {
                return [tabindex][0];
            } catch (e) {
                _e(e);
            }
        }.call(this) }, function () {
        try {
            return [events][0];
        } catch (e) {
            _e(e);
        }
    }.call(this)), null, 'k-inner k-textarea', null, function (i) {
        widgets['input'] = i;
    }), function () {
        try {
            return [blocks.suffix || clearable][0];
        } catch (e) {
            _e(e);
        }
    }.call(this) ? h('div', null, [function () {
        try {
            return [clearable][0];
        } catch (e) {
            _e(e);
        }
    }.call(this) ? h('i', { 'ev-click': function () {
            try {
                return [self.clear][0];
            } catch (e) {
                _e(e);
            }
        }.call(this) }, null, _className(function () {
        try {
            return [{
                "k-clear k-icon ion-ios-close": true,
                "k-show": value
            }][0];
        } catch (e) {
            _e(e);
        }
    }.call(this))) : undefined, (_blocks["suffix"] = function (parent) {
        return null;
    }) && (__blocks["suffix"] = function (parent) {
        var self = this;
        return blocks["suffix"] ? blocks["suffix"].call(this, function () {
            return _blocks["suffix"].call(self, parent);
        }) : _blocks["suffix"].call(this, parent);
    }) && __blocks["suffix"].call(this)], 'k-suffix') : undefined, function () {
        try {
            return [autoWidth][0];
        } catch (e) {
            _e(e);
        }
    }.call(this) ? h('div', null, function () {
        try {
            return [value == null || value === '' ? placeholder : value][0];
        } catch (e) {
            _e(e);
        }
    }.call(this), 'k-fake', null, function (i) {
        widgets['fake'] = i;
    }) : undefined], 'k-wrapper'), function () {
        try {
            return [blocks.append][0];
        } catch (e) {
            _e(e);
        }
    }.call(this) ? h('div', null, (_blocks["append"] = function (parent) {
        return null;
    }) && (__blocks["append"] = function (parent) {
        var self = this;
        return blocks["append"] ? blocks["append"].call(this, function () {
            return _blocks["append"].call(self, parent);
        }) : _blocks["append"].call(this, parent);
    }) && __blocks["append"].call(this), 'k-append') : undefined], _className(function () {
        try {
            return [classNameObj][0];
        } catch (e) {
            _e(e);
        }
    }.call(this)));
};

var _utils = __webpack_require__("./components/utils.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = exports['default'];

/***/ }),

/***/ "./components/moveWrapper/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.MoveWrapper = exports.default = undefined;

var _classCallCheck2 = __webpack_require__("./node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__("./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__("./node_modules/babel-runtime/helpers/inherits.js");

var _inherits3 = _interopRequireDefault(_inherits2);

var _intact = __webpack_require__("./node_modules/intact-vue/dist/intact.vue.js");

var _intact2 = _interopRequireDefault(_intact);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MoveWrapper = function (_Intact) {
    (0, _inherits3.default)(MoveWrapper, _Intact);

    function MoveWrapper() {
        (0, _classCallCheck3.default)(this, MoveWrapper);
        return (0, _possibleConstructorReturn3.default)(this, _Intact.apply(this, arguments));
    }

    MoveWrapper.prototype.template = function template(self, Vdt) {
        var children = self.get('children');
        return children || Vdt.miss.hc('MoveWrapper');
    };

    MoveWrapper.prototype.defaults = function defaults() {
        return {
            autoDestroy: true,
            container: undefined
        };
    };

    MoveWrapper.prototype.init = function init() {
        var _Intact$prototype$ini;

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        (_Intact$prototype$ini = _Intact.prototype.init).call.apply(_Intact$prototype$ini, [this].concat(args));
        return this.placeholder = document.createComment("placeholder");
    };

    MoveWrapper.prototype.hydrate = function hydrate() {
        var _Intact$prototype$hyd;

        for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
            args[_key2] = arguments[_key2];
        }

        (_Intact$prototype$hyd = _Intact.prototype.hydrate).call.apply(_Intact$prototype$hyd, [this].concat(args));
        return this.placeholder = document.createComment('placeholder');
    };

    MoveWrapper.prototype.update = function update(lastVNode, nextVNode) {
        _Intact.prototype.update.call(this, lastVNode, nextVNode);
        return this.placeholder;
    };

    MoveWrapper.prototype.destroy = function destroy() {
        if (this.get('autoDestroy')) {
            this._$destroy.apply(this, arguments);
        }
    };

    /**
     * @brief override super destroy 
     *
     * MoveWraper component has changed the dom struction.
     * It is always the top level dom, so we should 
     * remove it from parent dom. By passing the container
     * to remove function can do this. We can't remove it
     * directly by calling removeChild method, beacause it
     * maybe have leave animation.
     *
     * @param ...args
     */


    MoveWrapper.prototype._$destroy = function _$destroy(lastVNode, nextVNode) {
        // if (this.destroyed) {
        // return console.warn('destroyed multiple times');
        // }
        if (this.rendered && (!nextVNode || !(nextVNode.type & _intact2.default.Vdt.miss.Types.ComponentClassOrInstance) || nextVNode.key !== lastVNode.key)) {
            _intact2.default.Vdt.miss.remove(this.vdt.vNode, this.container);
        }
        this._destroy(lastVNode, nextVNode);
        this.destroyed = true;
        this.trigger('$destroyed', this);
        this.off();
    };

    MoveWrapper.prototype._mount = function _mount(lastVNode, nextVNode) {
        var container = this.get('container');
        if (container) {
            this.container = document.querySelector(container);
        }
        if (!this.container) {
            this.container = document.body;
        }
        this.container.appendChild(this.element);
    };

    return MoveWrapper;
}(_intact2.default);

exports.default = MoveWrapper;
exports.MoveWrapper = MoveWrapper;

/***/ }),

/***/ "./components/moveWrapper/position.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.position = undefined;

var _assign = __webpack_require__("./node_modules/babel-runtime/core-js/object/assign.js");

var _assign2 = _interopRequireDefault(_assign);

exports.getDocumentOrWindowRect = getDocumentOrWindowRect;
exports.scrollbarWidth = scrollbarWidth;
exports.default = position;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var max = Math.max;
var abs = Math.abs;
var rHorizontal = /left|center|right/;
var rVertical = /top|center|bottom/;
var rOffset = /[\+\-]\d+(\.[\d]+)?%?/;
var rPosition = /^\w+/;
var rPercent = /%$/;

function getDimensions(elem) {
    if (elem.nodeType === 9) {
        // document
        var _getDocumentOrWindowR = getDocumentOrWindowRect(elem),
            width = _getDocumentOrWindowR.width,
            height = _getDocumentOrWindowR.height;

        return {
            width: width,
            height: height,
            offset: {
                top: 0,
                left: 0
            }
        };
    } else if (elem === window) {
        var _getDocumentOrWindowR2 = getDocumentOrWindowRect(elem),
            _width = _getDocumentOrWindowR2.width,
            _height = _getDocumentOrWindowR2.height;

        return {
            width: _width,
            height: _height,
            offset: {
                top: elem.pageYOffset,
                left: elem.pageXOffset
            }
        };
    } else if (elem.preventDefault) {
        // event
        return {
            width: 0,
            height: 0,
            offset: {
                top: elem.pageY,
                left: elem.pageX
            }
        };
    }
    // dom
    var rect = elem.getBoundingClientRect();
    return {
        width: rect.width,
        height: rect.height,
        offset: {
            top: rect.top + window.pageYOffset,
            left: rect.left + window.pageXOffset
        }
    };
}

function getDocumentOrWindowRect(elem) {
    if (elem === window) {
        var _d = elem.document.documentElement;
        return {
            width: _d.clientWidth,
            height: _d.clientHeight
        };
    }
    var d = elem.documentElement;
    var b = elem.body;
    return {
        width: max(b.scrollWidth, d.scrollWidth, b.offsetWidth, d.offsetWidth, d.clientWidth),
        height: max(b.scrollHeight, d.scrollHeight, b.offsetHeight, d.offsetHeight, d.clientHeight)
    };
}

function getOffsets(offsets, width, height) {
    return [parseFloat(offsets[0]) * (rPercent.test(offsets[0]) ? width / 100 : 1), parseFloat(offsets[1]) * (rPercent.test(offsets[1]) ? height / 100 : 1)];
}

// reference: http://stackoverflow.com/questions/13382516/getting-scroll-bar-width-using-javascript
var _scrollBarWidth = void 0;
function scrollbarWidth() {
    if (_scrollBarWidth !== undefined) {
        return _scrollBarWidth;
    }

    var outer = document.createElement("div");
    outer.style.visibility = "hidden";
    outer.style.width = "100px";
    outer.style.msOverflowStyle = "scrollbar"; // needed for WinJS apps

    document.body.appendChild(outer);

    var widthNoScroll = outer.offsetWidth;
    // force scrollbars
    outer.style.overflow = "scroll";

    // add innerdiv
    var inner = document.createElement("div");
    inner.style.width = "100%";
    outer.appendChild(inner);

    var widthWithScroll = inner.offsetWidth;

    // remove divs
    outer.parentNode.removeChild(outer);

    return _scrollBarWidth = widthNoScroll - widthWithScroll;
}

function getScrollInfo(within) {
    var overflowX = within.isWindow || within.isDocument ? '' : within.element.style.overflowX;
    var overflowY = within.isWindow || within.isDocument ? '' : within.element.style.overflowY;
    var hasOverflowX = overflowX === 'scroll' || overflowX === 'auto' && within.width < within.element.scrollWidth;
    var hasOverflowY = overflowY === 'scroll' || overflowY === 'auto' && within.height < within.element.scrollHeight;

    return {
        width: hasOverflowY ? scrollbarWidth() : 0,
        height: hasOverflowX ? scrollbarWidth() : 0
    };
}

function getWithinInfo(element) {
    element || (element = window);
    var isWindow = element === window;
    var isDocument = element.nodeType === 9;
    var hasOffset = !isWindow && !isDocument;

    var ret = { element: element, isWindow: isWindow, isDocument: isDocument };
    if (hasOffset) {
        var rect = element.getBoundingClientRect();
        ret.offset = {
            top: rect.top + window.pageYOffset,
            left: rect.left + window.pageXOffset
        };
        ret.width = rect.width;
        ret.height = rect.height;
        ret.scrollLeft = element.scrollLeft;
        ret.scrollTop = element.scrollTop;
    } else {
        ret.offset = { top: 0, left: 0 };
        var _rect = getDocumentOrWindowRect(element);
        ret.width = _rect.width;
        ret.height = _rect.height;
        ret.scrollLeft = window.pageXOffset;
        ret.scrollTop = window.pageYOffset;
    }

    return ret;
}

function parseCss(style, property) {
    return parseInt(style[property], 10) || 0;
}

function position(elem, options) {
    options = (0, _assign2.default)({}, options);

    var target = options.of || window;
    if (target.preventDefault) {
        options.at = "left top";
    }

    var _getDimensions = getDimensions(target),
        targetWidth = _getDimensions.width,
        targetHeight = _getDimensions.height,
        targetOffset = _getDimensions.offset;

    var basePosition = (0, _assign2.default)({}, targetOffset);
    var collision = (options.collision || 'flip').split(' ');
    var offsets = {};
    var within = getWithinInfo(options.within);
    var scrollInfo = getScrollInfo(within);

    ['my', 'at'].forEach(function (item) {
        var pos = (options[item] || '').split(' ');

        if (pos.length === 1) {
            pos = rHorizontal.test(pos[0]) ? pos.concat(['center']) : rVertical.test(pos[0]) ? ['center'].concat(pos) : ['center', 'center'];
        }
        pos[0] = rHorizontal.test(pos[0]) ? pos[0] : 'center';
        pos[1] = rVertical.test(pos[1]) ? pos[1] : 'center';

        var horizontalOffset = rOffset.exec(pos[0]);
        var verticalOffset = rOffset.exec(pos[1]);
        offsets[item] = [horizontalOffset ? horizontalOffset[0] : 0, verticalOffset ? verticalOffset[0] : 0];

        options[item] = [rPosition.exec(pos[0])[0], rPosition.exec(pos[1])[0]];
    });

    if (collision.length === 1) {
        collision[1] = collision[0];
    }

    var at = options.at;
    if (at[0] === 'right') {
        basePosition.left += targetWidth;
    } else if (at[0] === 'center') {
        basePosition.left += targetWidth / 2;
    }
    if (at[1] === 'bottom') {
        basePosition.top += targetHeight;
    } else if (at[1] === 'center') {
        basePosition.top += targetHeight / 2;
    }

    var atOffset = getOffsets(offsets.at, targetWidth, targetHeight);
    basePosition.left += atOffset[0];
    basePosition.top += atOffset[1];

    var elemWidth = elem.offsetWidth;
    var elemHeight = elem.offsetHeight;
    var position = (0, _assign2.default)({}, basePosition);
    var myOffset = getOffsets(offsets.my, elemWidth, elemHeight);
    var computedStyle = window.getComputedStyle(elem);
    var marginLeft = parseCss(computedStyle, 'marginLeft');
    var marginTop = parseCss(computedStyle, 'marginTop');
    var collisionWidth = elemWidth + marginLeft + parseCss(computedStyle, 'marginRight') + scrollInfo.width;
    var collisionHeight = elemHeight + marginTop + parseCss(computedStyle, 'marginBottom') + scrollInfo.height;
    var collisionPosition = { marginLeft: marginLeft, marginTop: marginTop };

    var my = options.my;
    if (my[0] === 'right') {
        position.left -= elemWidth;
    } else if (my[0] === 'center') {
        position.left -= elemWidth / 2;
    }
    if (my[1] === 'bottom') {
        position.top -= elemHeight;
    } else if (my[1] === 'center') {
        position.top -= elemHeight / 2;
    }
    position.left += myOffset[0];
    position.top += myOffset[1];

    ['left', 'top'].forEach(function (dir, i) {
        var coll = collision[i];
        if (rules[coll]) {
            rules[coll][dir](position, {
                targetWidth: targetWidth,
                targetHeight: targetHeight,
                elemWidth: elemWidth,
                elemHeight: elemHeight,
                collisionPosition: collisionPosition,
                collisionWidth: collisionWidth,
                collisionHeight: collisionHeight,
                offset: [atOffset[0] + myOffset[0], atOffset[1] + myOffset[1]],
                my: options.my,
                at: options.at,
                within: within,
                elem: elem
            });
        }
    });

    if (options.using) {
        var left = targetOffset.left - position.left;
        var right = left + targetWidth - elemWidth;
        var top = targetOffset.top - position.top;
        var bottom = top + targetHeight - elemHeight;
        var feedback = {
            target: {
                element: target,
                left: targetOffset.left,
                top: targetOffset.top,
                width: targetWidth,
                height: targetHeight
            },
            element: {
                element: elem,
                left: position.left,
                top: position.top,
                width: elemWidth,
                height: elemHeight
            },
            horizontal: right < 0 ? 'left' : left > 0 ? 'right' : 'center',
            vertical: bottom < 0 ? 'top' : top > 0 ? 'bottom' : 'middle'
        };
        if (targetWidth < elemWidth && abs(left + right) < targetWidth) {
            feedback.horizontal = 'center';
        }
        if (targetHeight < elemHeight && abs(top + bottom) < targetHeight) {
            feedback.vertical = 'middle';
        }

        if (position.top + elemHeight <= targetOffset.top || position.top >= targetOffset.top + targetHeight) {
            feedback.important = 'vertical';
        } else if (position.left + elemWidth <= targetOffset.left || position.left >= targetOffset.left + targetWidth) {
            feedback.important = 'horizontal';
        } else if (max(abs(left), abs(right)) > max(abs(top), abs(bottom))) {
            feedback.important = 'horizontal';
        } else {
            feedback.important = 'vertical';
        }

        options.using(feedback, position);
    }

    var style = elem.style;
    if (computedStyle.position === 'static') {
        style.position = 'relative';
    }
    style.left = position.left + 'px';
    style.top = position.top + 'px';
}

var rules = {
    fit: {
        left: function left(position, data) {
            var within = data.within;
            var withinOffset = within.isWindow ? within.scrollLeft : within.offset.left;
            var outerWidth = within.width;
            var collisionPosLeft = position.left - data.collisionPosition.marginLeft;
            var overLeft = withinOffset - collisionPosLeft;
            var overRight = collisionPosLeft + data.collisionWidth - outerWidth - withinOffset;
            var newOverRight = void 0;

            if (data.collisionWidth > outerWidth) {
                if (overLeft > 0 && overRight <= 0) {
                    newOverRight = position.left + overLeft + data.collisionWidth - outerWidth - withinOffset;
                    position.left += overLeft - newOverRight;
                } else if (overRight > 0 && overLeft <= 0) {
                    position.left = withinOffset;
                } else if (overLeft > overRight) {
                    position.left = withinOffset + outerWidth - data.collisionWidth;
                } else {
                    position.left = withinOffset;
                }
            } else if (overLeft > 0) {
                position.left += overLeft;
            } else if (overRight > 0) {
                position.left -= overRight;
            } else {
                position.left = max(position.left - collisionPosLeft, position.left);
            }
        },
        top: function top(position, data) {
            var within = data.within;
            var withinOffset = within.isWindow ? within.scrollTop : within.offset.top;
            var outerHeight = data.within.height;
            var collisionPosTop = position.top - data.collisionPosition.marginTop;
            var overTop = withinOffset - collisionPosTop;
            var overBottom = collisionPosTop + data.collisionHeight - outerHeight - withinOffset;
            var newOverBottom = void 0;

            if (data.collisionHeight > outerHeight) {
                if (overTop > 0 && overBottom <= 0) {
                    newOverBottom = position.top + overTop + data.collisionHeight - outerHeight - withinOffset;
                    position.top += overTop - newOverBottom;
                } else if (overBottom > 0 && overTop <= 0) {
                    position.top = withinOffset;
                } else if (overTop > overBottom) {
                    position.top = withinOffset + outerHeight - data.collisionHeight;
                } else {
                    position.top = withinOffset;
                }
            } else if (overTop > 0) {
                position.top += overTop;
            } else if (overBottom > 0) {
                position.top -= overBottom;
            } else {
                position.top = max(position.top - collisionPosTop, position.top);
            }
        }
    },

    flip: {
        left: function left(position, data) {
            var within = data.within;
            var withinOffset = within.offset.left + within.scrollLeft;
            var outerWidth = within.width;
            var offsetLeft = within.isWindow ? within.scrollLeft : within.offset.left;
            var collisionPosLeft = position.left - data.collisionPosition.marginLeft;
            var overLeft = collisionPosLeft - offsetLeft;
            var overRight = collisionPosLeft + data.collisionWidth - outerWidth - offsetLeft;
            var myOffset = data.my[0] === 'left' ? -data.elemWidth : data.my[0] === 'right' ? data.elemWidth : 0;
            var atOffset = data.at[0] === 'left' ? data.targetWidth : data.at[0] === 'right' ? -data.targetWidth : 0;
            var offset = -2 * data.offset[0];
            var newOverRight = void 0;
            var newOverLeft = void 0;

            if (overLeft < 0) {
                newOverRight = position.left + myOffset + atOffset + offset + data.collisionWidth - outerWidth - withinOffset;
                if (newOverRight < 0 || newOverRight < abs(overLeft)) {
                    position.left += myOffset + atOffset + offset;
                }
            } else if (overRight > 0) {
                newOverLeft = position.left - data.collisionPosition.marginLeft + myOffset + atOffset + offset - offsetLeft;
                // the same to top
                // if (newOverLeft > 0 || abs(newOverLeft) < overRight) {
                if (newOverLeft > 0) {
                    position.left += myOffset + atOffset + offset;
                }
            }
        },
        top: function top(position, data) {
            var within = data.within;
            var withinOffset = within.offset.top + within.scrollTop;
            var outerHeight = within.height;
            var offsetTop = within.isWindow ? within.scrollTop : within.offset.top;
            var collisionPosTop = position.top - data.collisionPosition.marginTop;
            var overTop = collisionPosTop - offsetTop;
            var overBottom = collisionPosTop + data.collisionHeight - outerHeight - offsetTop;
            var myOffset = data.my[1] === 'top' ? -data.elemHeight : data.my[1] === 'bottom' ? data.elemHeight : 0;
            var atOffset = data.at[1] === 'top' ? data.targetHeight : data.at[1] === 'bottom' ? -data.targetHeight : 0;
            var offset = -2 * data.offset[1];
            var newOverTop = void 0;
            var newOverBottom = void 0;

            if (overTop < 0) {
                newOverBottom = position.top + myOffset + atOffset + offset + data.collisionHeight - outerHeight - withinOffset;
                if (newOverBottom < 0 || newOverBottom < abs(overTop)) {
                    position.top += myOffset + atOffset + offset;
                }
            } else if (overBottom > 0) {
                newOverTop = position.top - data.collisionPosition.marginTop + myOffset + atOffset + offset - offsetTop;
                // because window can scroll down, when it beyond the top border,
                // we can not scroll it to view. Don't flip it in this case
                // if (newOverTop > 0 || abs(newOverTop) < overBottom) {
                if (newOverTop > 0) {
                    position.top += myOffset + atOffset + offset;
                }
            }
        }
    },

    flipfit: {
        left: function left() {
            var _rules$flip, _rules$fit;

            (_rules$flip = rules.flip).left.apply(_rules$flip, arguments);
            (_rules$fit = rules.fit).left.apply(_rules$fit, arguments);
        },
        top: function top() {
            var _rules$flip2, _rules$fit2;

            (_rules$flip2 = rules.flip).top.apply(_rules$flip2, arguments);
            (_rules$fit2 = rules.fit).top.apply(_rules$fit2, arguments);
        }
    }
};

exports.position = position;

/***/ }),

/***/ "./components/select/group.js":
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

var _group = __webpack_require__("./components/select/group.vdt");

var _group2 = _interopRequireDefault(_group);

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

var OptionGroup = (_dec = _intact2.default.template(), (_class = (_temp = _class2 = function (_Intact) {
    (0, _inherits3.default)(OptionGroup, _Intact);

    function OptionGroup() {
        (0, _classCallCheck3.default)(this, OptionGroup);
        return (0, _possibleConstructorReturn3.default)(this, _Intact.apply(this, arguments));
    }

    return OptionGroup;
}(_intact2.default), _class2.template = _group2.default, _temp), (_applyDecoratedDescriptor(_class, 'template', [_dec], (_init = (0, _getOwnPropertyDescriptor2.default)(_class, 'template'), _init = _init ? _init.value : undefined, {
    enumerable: true,
    configurable: true,
    writable: true,
    initializer: function initializer() {
        return _init;
    }
}), _class)), _class));
exports.default = OptionGroup;
module.exports = exports['default'];

/***/ }),

/***/ "./components/select/group.vdt":
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

  var _self$get = self.get(),
      children = _self$get.children,
      label = _self$get.label;

  return h('div', null, [h('div', null, function () {
    try {
      return [label][0];
    } catch (e) {
      _e(e);
    }
  }.call(this), 'k-label'), '\n    ', function () {
    try {
      return [children][0];
    } catch (e) {
      _e(e);
    }
  }.call(this), '\n'], 'k-group');
};

module.exports = exports['default'];

/***/ }),

/***/ "./components/select/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.OptionGroup = exports.Option = exports.Select = exports.default = undefined;

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

var _index = __webpack_require__("./components/select/index.vdt");

var _index2 = _interopRequireDefault(_index);

__webpack_require__("./styles/kpc.styl");

__webpack_require__("./components/select/index.styl");

var _option = __webpack_require__("./components/select/option.js");

var _option2 = _interopRequireDefault(_option);

var _group = __webpack_require__("./components/select/group.js");

var _group2 = _interopRequireDefault(_group);

var _utils = __webpack_require__("./components/utils.js");

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

var Select = (_dec = _intact2.default.template(), (_class = (_temp = _class2 = function (_Intact) {
    (0, _inherits3.default)(Select, _Intact);

    function Select() {
        (0, _classCallCheck3.default)(this, Select);
        return (0, _possibleConstructorReturn3.default)(this, _Intact.apply(this, arguments));
    }

    Select.prototype.defaults = function defaults() {
        return {
            data: [],
            value: '',
            multiple: false, //支持多选li
            disabled: false,
            clearable: false, // 是否可清空 
            filterable: false, // 搜索筛选
            keywords: undefined,
            placeholder: undefined,
            size: 'default',
            fluid: false,
            width: undefined,
            allowUnmatch: false,

            _show: false
        };
    };

    Select.prototype._init = function _init() {
        var _this2 = this;

        this.on('$changed:value', function () {
            if (_this2.get('multiple') && _this2.get('_show')) {
                _this2.refs.menu.position();
            }
        });
    };

    Select.prototype._onClear = function _onClear(e) {
        e.stopPropagation();
        this.set('value', '');
    };

    Select.prototype._onSelect = function _onSelect(value) {
        if (!this.get('multiple')) {
            this.set('value', value, { async: true });
        } else {
            var values = this.get('value');
            if (!Array.isArray(values)) {
                values = [];
            } else {
                values = values.slice(0);
            }
            var index = values.indexOf(value);
            if (~index) {
                // if find, delete it
                values.splice(index, 1);
            } else {
                values.push(value);
            }
            this.set('value', values, { async: true });
            this._focusInput();
        }
        this._resetSearch();
    };

    Select.prototype._onSearch = function _onSearch(e) {
        this.set('keywords', e.target.value.trim());
        // always show menu on searching
        this.refs.menu.show();
        this.refs.menu.focusItemByIndex(0);
        // the position may be flip, and the select input height my change height too,
        // so we should reset the position
        this.refs.menu.position();
    };

    Select.prototype._resetSearch = function _resetSearch() {
        this.set('keywords', undefined, { async: true });
    };

    Select.prototype._onChangeShow = function _onChangeShow(c, value) {
        this.set('_show', value);
    };

    /**
     * @brief let the blur method called after select
     * if we selected the option, then the keywords has been set to undefind
     * in this case, we do nothing, otherwise we reset it
     */


    Select.prototype._onBlur = function _onBlur() {
        var _this3 = this;

        var _get = this.get(),
            keywords = _get.keywords,
            allowUnmatch = _get.allowUnmatch;

        if (allowUnmatch && keywords != null) {
            this.set({
                value: keywords
            });
        }

        this.timer = setTimeout(function () {
            if (_this3.get('keywords') != null) {
                _this3._resetSearch();
            }
        }, 200);
    };

    Select.prototype._selectInput = function _selectInput(e) {
        (0, _utils.selectInput)(e.target);
    };

    Select.prototype._onFocus = function _onFocus(e) {
        clearTimeout(this.timer);
    };

    Select.prototype._onFocusout = function _onFocusout() {
        this.refs.dropdown.hide();
    };

    Select.prototype._delete = function _delete(value, e) {
        e.stopPropagation();
        var values = this.get('value').slice(0);
        var index = values.indexOf(value);
        values.splice(index, 1);
        this.set('value', values);
        this._focusInput();
    };

    Select.prototype._focusInput = function _focusInput() {
        if (this.get('filterable')) {
            this.refs.input.focus();
        }
    };

    Select.prototype._position = function _position() {
        var menuElement = this.refs.menu.vdt.vNode.children.element;
        var width = this.element.offsetWidth;
        var menuWidth = menuElement.offsetWidth;
        if (width > menuWidth) {
            menuElement.style.width = width + 'px';
        }
    };

    Select.prototype._onKeypress = function _onKeypress(e) {
        if (e.keyCode === 13) {
            this.refs.wrapper.click();
        }
    };

    Select.prototype._onKeydown = function _onKeydown(e) {
        if (e.keyCode === 9) {
            // tab
            this.refs.dropdown.hide();
        }
    };

    return Select;
}(_intact2.default), _class2.template = _index2.default, _class2.propTypes = {
    multiple: Boolean,
    disabled: Boolean,
    clearable: Boolean,
    filterable: Boolean,
    fluid: Boolean,
    allowUnmatch: Boolean
}, _temp), (_applyDecoratedDescriptor(_class, 'template', [_dec], (_init = (0, _getOwnPropertyDescriptor2.default)(_class, 'template'), _init = _init ? _init.value : undefined, {
    enumerable: true,
    configurable: true,
    writable: true,
    initializer: function initializer() {
        return _init;
    }
}), _class)), _class));
exports.default = Select;
exports.Select = Select;
exports.Option = _option2.default;
exports.OptionGroup = _group2.default;

/***/ }),

/***/ "./components/select/index.styl":
/***/ (function(module, exports, __webpack_require__) {

// removed by extract-text-webpack-plugin
    if(false) {
      // 1527754409035
      var cssReload = require("!../../node_modules/css-hot-loader/hotModuleReplacement.js")(module.id, {"fileMap":"{fileName}"});
      module.hot.dispose(cssReload);
      module.hot.accept(undefined, cssReload);
    }
  

/***/ }),

/***/ "./components/select/index.vdt":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _extends2 = __webpack_require__("./node_modules/babel-runtime/helpers/extends.js");

var _extends3 = _interopRequireDefault(_extends2);

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
        className = _self$get.className,
        clearable = _self$get.clearable,
        data = _self$get.data,
        value = _self$get.value,
        multiple = _self$get.multiple,
        disabled = _self$get.disabled,
        filterable = _self$get.filterable,
        keywords = _self$get.keywords,
        _show = _self$get._show,
        placeholder = _self$get.placeholder,
        size = _self$get.size,
        style = _self$get.style,
        name = _self$get.name,
        children = _self$get.children,
        fluid = _self$get.fluid,
        width = _self$get.width,
        allowUnmatch = _self$get.allowUnmatch;

    var _placeholder = placeholder == null ? allowUnmatch && filterable ? (0, _utils._$)('请输入或选择') : (0, _utils._$)('请选择') : placeholder;

    var classNameObj = (_classNameObj = {
        'k-select': true
    }, _classNameObj[className] = className, _classNameObj['k-disabled'] = disabled, _classNameObj['k-show'] = _show, _classNameObj['k-clearable'] = clearable, _classNameObj['k-' + size] = size !== 'default', _classNameObj['k-fluid'] = fluid, _classNameObj);

    var hasValue = value != null && (!multiple && value !== '' || multiple && value.length);
    var isGroup = Array.isArray(self.get('data.0.data'));

    var label = (0, _utils.isStringOrNumber)(value) ? value : null;
    var labels = [];

    var handleProps = function handleProps(props) {
        var active = false;
        var valid = false;

        if (!multiple) {
            if (props.value === value) {
                // set label
                label = props.label;
                active = true;
            } else {
                active = false;
            }
        } else if (Array.isArray(value)) {
            var index = value.indexOf(props.value);
            if (~index) {
                // keep order consistent
                labels[index] = props.label;
                active = true;
            } else {
                active = false;
            }
        }

        var tmp = void 0;
        if (!filterable && props.label || keywords == null || ~props.label.toLowerCase().indexOf(tmp = keywords.toLowerCase()) || (0, _utils.isStringOrNumber)(props.value) && ~String(props.value).toLowerCase().indexOf(tmp)) {
            valid = true;
        }

        return { active: active, valid: valid };
    };

    var Options = function Options(props) {
        var data = props.data;
        var ret = [];
        data.forEach(function (item, index) {
            // deprecate text, use label instead of
            if (item.text) item.label = item.text;

            var _handleProps = handleProps(item),
                valid = _handleProps.valid,
                active = _handleProps.active;

            if (valid) {
                ret.push(h(_dropdown.DropdownItem, { 'ev-select': function () {
                        try {
                            return [self._onSelect.bind(self, item.value)][0];
                        } catch (e) {
                            _e(e);
                        }
                    }.call(_this), 'disabled': function () {
                        try {
                            return [item.disabled][0];
                        } catch (e) {
                            _e(e);
                        }
                    }.call(_this), 'className': _className(function () {
                        try {
                            return [{ 'k-active': active }][0];
                        } catch (e) {
                            _e(e);
                        }
                    }.call(_this)), 'hideOnSelect': function () {
                        try {
                            return [!multiple][0];
                        } catch (e) {
                            _e(e);
                        }
                    }.call(_this), 'children': function () {
                        try {
                            return [item.template ? item.template(item, index) : item.label][0];
                        } catch (e) {
                            _e(e);
                        }
                    }.call(_this), '_context': $this }));
            }
        });

        return ret;
    };

    var OptionsVNodes = function OptionsVNodes(_ref) {
        var children = _ref.children;

        return __u.map(children ? Array.isArray(children) ? children : [children] : children, function (vNode) {
            if (vNode.tag === _option2.default) {
                var props = vNode.props;
                props = (0, _extends3.default)({}, props, {
                    'ev-select': self._onSelect.bind(self, props.value),
                    hideOnSelect: !multiple,
                    label: props.label || (0, _utils.getTextByChildren)(props.children),
                    children: props.children || props.label
                });

                var _handleProps2 = handleProps(props),
                    active = _handleProps2.active,
                    valid = _handleProps2.valid;

                if (!valid) {
                    return hc('');
                } else {
                    var _className2;

                    props.className = _className((_className2 = {}, _className2[props.className] = props.className, _className2['k-active'] = active, _className2));
                }

                // return the cloned vNode
                return h(_option2.default, props);
            } else if (vNode.tag === _group2.default) {
                var _props = vNode.props;
                _props = (0, _extends3.default)({}, _props, {
                    children: h(OptionsVNodes, { 'children': function () {
                            try {
                                return [_props.children][0];
                            } catch (e) {
                                _e(e);
                            }
                        }.call(_this), '_context': $this })
                });
                return h(_group2.default, _props);
            }

            return vNode;
        });
    };

    var Menu = h(_dropdown.DropdownMenu, { 'ev-$changed:show': function () {
            try {
                return [self._position][0];
            } catch (e) {
                _e(e);
            }
        }.call(this), 'className': 'k-select-dropdown', 'ev-$change:show': function () {
            try {
                return [self._onChangeShow][0];
            } catch (e) {
                _e(e);
            }
        }.call(this), 'children': [function () {
            try {
                return [!isGroup][0];
            } catch (e) {
                _e(e);
            }
        }.call(this) ? h(Options, { 'data': function () {
                try {
                    return [data][0];
                } catch (e) {
                    _e(e);
                }
            }.call(this), 'children': null, '_context': $this }) : _Vdt.utils.map(function () {
            try {
                return [data][0];
            } catch (e) {
                _e(e);
            }
        }.call(this), function (value, key) {
            return h(_group2.default, { 'label': function () {
                    try {
                        return [value.label][0];
                    } catch (e) {
                        _e(e);
                    }
                }.call(this), 'children': h(Options, { 'data': function () {
                        try {
                            return [value.data][0];
                        } catch (e) {
                            _e(e);
                        }
                    }.call(this), 'children': null, '_context': $this }), '_context': $this });
        }, this), h(OptionsVNodes, { 'children': function () {
                try {
                    return [children][0];
                } catch (e) {
                    _e(e);
                }
            }.call(this), '_context': $this })], '_context': $this }, null, null, null, function (i) {
        widgets['menu'] = i;
    });

    // if the value is not in options, then set hasValue to false
    if (hasValue && !label && !labels.length) {
        hasValue = false;
    }

    return h('div', { 'style': function () {
            try {
                return [width != null ? (0, _utils.addStyle)(style, { width: width + 'px' }) : style][0];
            } catch (e) {
                _e(e);
            }
        }.call(this), 'tabindex': function () {
            try {
                return [disabled ? "-1" : "0"][0];
            } catch (e) {
                _e(e);
            }
        }.call(this), 'ev-keypress': function () {
            try {
                return [self._onKeypress][0];
            } catch (e) {
                _e(e);
            }
        }.call(this), 'ev-keydown': function () {
            try {
                return [self._onKeydown][0];
            } catch (e) {
                _e(e);
            }
        }.call(this) }, h(_dropdown2.default, { 'position': function () {
            try {
                return [{ my: 'left top', at: 'left bottom' }][0];
            } catch (e) {
                _e(e);
            }
        }.call(this), 'trigger': 'click', 'disabled': function () {
            try {
                return [disabled][0];
            } catch (e) {
                _e(e);
            }
        }.call(this), 'children': [h('div', { 'ev-click': function () {
                try {
                    return [self._focusInput][0];
                } catch (e) {
                    _e(e);
                }
            }.call(this), 'tabindex': '-1' }, [h('input', { 'type': 'hidden', 'value': function () {
                try {
                    return [value][0];
                } catch (e) {
                    _e(e);
                }
            }.call(this), 'name': function () {
                try {
                    return [name][0];
                } catch (e) {
                    _e(e);
                }
            }.call(this) }), function () {
            try {
                return [!multiple && filterable][0];
            } catch (e) {
                _e(e);
            }
        }.call(this) ? h(_input2.default, { 'value': function () {
                try {
                    return [keywords == null ? label : keywords][0];
                } catch (e) {
                    _e(e);
                }
            }.call(this), 'ev-input': function () {
                try {
                    return [self._onSearch][0];
                } catch (e) {
                    _e(e);
                }
            }.call(this), 'ev-blur': function () {
                try {
                    return [self._onBlur][0];
                } catch (e) {
                    _e(e);
                }
            }.call(this), 'ev-focus': function () {
                try {
                    return [self._selectInput][0];
                } catch (e) {
                    _e(e);
                }
            }.call(this), 'disabled': function () {
                try {
                    return [disabled][0];
                } catch (e) {
                    _e(e);
                }
            }.call(this), 'placeholder': function () {
                try {
                    return [_placeholder][0];
                } catch (e) {
                    _e(e);
                }
            }.call(this), 'size': function () {
                try {
                    return [size][0];
                } catch (e) {
                    _e(e);
                }
            }.call(this), 'fluid': function () {
                try {
                    return [true][0];
                } catch (e) {
                    _e(e);
                }
            }.call(this), 'children': null, '_context': $this }, null, null, null, function (i) {
            widgets['input'] = i;
        }) : function () {
            try {
                return [!filterable && !hasValue][0];
            } catch (e) {
                _e(e);
            }
        }.call(this) ? h('span', null, function () {
            try {
                return [_placeholder][0];
            } catch (e) {
                _e(e);
            }
        }.call(this), 'k-placeholder c-ellipsis') : function () {
            try {
                return [!multiple][0];
            } catch (e) {
                _e(e);
            }
        }.call(this) ? h('span', null, function () {
            try {
                return [label][0];
            } catch (e) {
                _e(e);
            }
        }.call(this), 'k-value c-ellipsis') : h(Animate, { 'a:tag': 'span', 'a:disabled': function () {
                try {
                    return [true][0];
                } catch (e) {
                    _e(e);
                }
            }.call(this), 'className': 'k-values', 'children': [_Vdt.utils.map(function () {
                try {
                    return [labels][0];
                } catch (e) {
                    _e(e);
                }
            }.call(this), function (item, index) {
                return h(Animate, { 'a:tag': 'span', 'className': 'k-tag', 'key': function () {
                        try {
                            return [value[index]][0];
                        } catch (e) {
                            _e(e);
                        }
                    }.call(this), 'a:transition': 'fade', 'children': [h('span', null, function () {
                        try {
                            return [item][0];
                        } catch (e) {
                            _e(e);
                        }
                    }.call(this), 'k-text'), h('i', { 'ev-click': function () {
                            try {
                                return [self._delete.bind(self, value[index])][0];
                            } catch (e) {
                                _e(e);
                            }
                        }.call(this) }, null, 'k-icon ion-ios-close-empty')], '_context': $this });
            }, this), function () {
                try {
                    return [filterable][0];
                } catch (e) {
                    _e(e);
                }
            }.call(this) ? h(_input2.default, { 'value': function () {
                    try {
                        return [keywords][0];
                    } catch (e) {
                        _e(e);
                    }
                }.call(this), 'ev-input': function () {
                    try {
                        return [self._onSearch][0];
                    } catch (e) {
                        _e(e);
                    }
                }.call(this), 'ev-blur': function () {
                    try {
                        return [self._onBlur][0];
                    } catch (e) {
                        _e(e);
                    }
                }.call(this), 'ev-focus': function () {
                    try {
                        return [self._onFocus][0];
                    } catch (e) {
                        _e(e);
                    }
                }.call(this), 'disabled': function () {
                    try {
                        return [disabled][0];
                    } catch (e) {
                        _e(e);
                    }
                }.call(this), 'placeholder': function () {
                    try {
                        return [!hasValue ? _placeholder : ''][0];
                    } catch (e) {
                        _e(e);
                    }
                }.call(this), 'autoWidth': function () {
                    try {
                        return [true][0];
                    } catch (e) {
                        _e(e);
                    }
                }.call(this), 'size': function () {
                    try {
                        return [size][0];
                    } catch (e) {
                        _e(e);
                    }
                }.call(this), 'children': null, '_context': $this }, null, null, null, function (i) {
                widgets['input'] = i;
            }) : undefined], '_context': $this }), h('span', null, [function () {
            try {
                return [clearable][0];
            } catch (e) {
                _e(e);
            }
        }.call(this) ? h('i', { 'ev-click': function () {
                try {
                    return [self._onClear][0];
                } catch (e) {
                    _e(e);
                }
            }.call(this) }, null, _className(function () {
            try {
                return [{ "k-clear ion-ios-close": true, "k-show": hasValue }][0];
            } catch (e) {
                _e(e);
            }
        }.call(this))) : undefined, h('i', null, null, 'k-arrow ion-arrow-down-b')], 'k-suffix')], 'k-wrapper', null, function (i) {
            widgets['wrapper'] = i;
        }), function () {
            try {
                return [Menu][0];
            } catch (e) {
                _e(e);
            }
        }.call(this)], '_context': $this }, null, null, null, function (i) {
        widgets['dropdown'] = i;
    }), _className(function () {
        try {
            return [(0, _extends3.default)({}, classNameObj, { 'k-active': hasValue })][0];
        } catch (e) {
            _e(e);
        }
    }.call(this)));
};

var _input = __webpack_require__("./components/input/index.js");

var _input2 = _interopRequireDefault(_input);

var _dropdown = __webpack_require__("./components/dropdown/index.js");

var _dropdown2 = _interopRequireDefault(_dropdown);

var _utils = __webpack_require__("./components/utils.js");

var _option = __webpack_require__("./components/select/option.js");

var _option2 = _interopRequireDefault(_option);

var _group = __webpack_require__("./components/select/group.js");

var _group2 = _interopRequireDefault(_group);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = exports['default'];

/***/ }),

/***/ "./components/select/option.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = undefined;

var _classCallCheck2 = __webpack_require__("./node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__("./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__("./node_modules/babel-runtime/helpers/inherits.js");

var _inherits3 = _interopRequireDefault(_inherits2);

var _intact = __webpack_require__("./node_modules/intact-vue/dist/intact.vue.js");

var _intact2 = _interopRequireDefault(_intact);

var _dropdown = __webpack_require__("./components/dropdown/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Option = function (_DropdownItem) {
  (0, _inherits3.default)(Option, _DropdownItem);

  function Option() {
    (0, _classCallCheck3.default)(this, Option);
    return (0, _possibleConstructorReturn3.default)(this, _DropdownItem.apply(this, arguments));
  }

  return Option;
}(_dropdown.DropdownItem);

exports.default = Option;
module.exports = exports['default'];

/***/ }),

/***/ "./site/src/pages/layout.js":
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

var _layout = __webpack_require__("./site/src/pages/layout.vdt");

var _layout2 = _interopRequireDefault(_layout);

__webpack_require__("./site/src/pages/layout.styl");

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

var theme = void 0;
if (true) {
    var _changeTheme = function _changeTheme(newTheme, oldTheme) {
        var link = document.querySelector('link[rel=stylesheet]');
        link.href = link.href.replace('theme-' + oldTheme, 'theme-' + newTheme);
        theme = newTheme;
        localStorage.setItem('theme', newTheme);
    };

    theme = localStorage.getItem('theme') || 'kpc';

    if (theme !== 'kpc') {
        _changeTheme(theme, 'kpc');
    }
} else {
    theme = 'kpc';
}

var _default = (_dec = _intact2.default.template(), (_class = (_temp = _class2 = function (_Intact) {
    (0, _inherits3.default)(_default, _Intact);

    function _default() {
        (0, _classCallCheck3.default)(this, _default);
        return (0, _possibleConstructorReturn3.default)(this, _Intact.apply(this, arguments));
    }

    _default.prototype.defaults = function defaults() {
        return {
            theme: theme
        };
    };

    _default.prototype._init = function _init() {
        this.on('$change:theme', function (c, v, o) {
            changeTheme(v, o);
        });
    };

    _default.prototype._mount = function _mount() {
        this.border = this.element.querySelector('.border');
        this._updateBorder();
    };

    _default.prototype._updateBorder = function _updateBorder() {
        var nav = this.element.querySelector('.active');
        var width = 0;
        var left = 0;
        if (nav) {
            left = nav.offsetLeft;
            width = nav.offsetWidth;
        }
        this.border.classList.add('transition');
        this.border.style.width = width + 'px';
        this.border.style.left = left + 'px';
    };

    return _default;
}(_intact2.default), _class2.template = _layout2.default, _temp), (_applyDecoratedDescriptor(_class, 'template', [_dec], (_init = (0, _getOwnPropertyDescriptor2.default)(_class, 'template'), _init = _init ? _init.value : undefined, {
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

// removed by extract-text-webpack-plugin
    if(false) {
      // 1527754406969
      var cssReload = require("!../../../node_modules/css-hot-loader/hotModuleReplacement.js")(module.id, {"fileMap":"{fileName}"});
      module.hot.dispose(cssReload);
      module.hot.accept(undefined, cssReload);
    }
  

/***/ }),

/***/ "./site/src/pages/layout.vdt":
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

    var nav = [{
        title: '教程',
        href: '/docs/getting-started/',
        index: 'document'
    }];

    return h('div', null, [h('div', null, h('header', null, (_blocks["header"] = function (parent) {
        return [h(_link2.default, { 'className': 'logo', 'href': '/', 'children': 'KPC', '_context': $this }), h('div', null, [h('nav', null, [_Vdt.utils.map(function () {
            try {
                return [nav][0];
            } catch (e) {
                _e(e);
            }
        }.call(this), function (value, key) {
            return h(_link2.default, { 'className': _className(function () {
                    try {
                        return [{
                            active: value.index === scope.navIndex
                        }][0];
                    } catch (e) {
                        _e(e);
                    }
                }.call(this)), 'href': function () {
                    try {
                        return ['' + "/kpc" + value.href][0];
                    } catch (e) {
                        _e(e);
                    }
                }.call(this), 'children': function () {
                    try {
                        return [value.title][0];
                    } catch (e) {
                        _e(e);
                    }
                }.call(this), '_context': $this });
        }, this), h('div', null, null, 'border')]), h('span', null, '切换主题：', 'label'), h(_select.Select, { 'v-model': 'theme', 'width': '100', 'children': [h(_select.Option, { 'value': 'kpc', 'children': 'default', '_context': $this }), h(_select.Option, { 'value': 'ksyun', 'children': 'ksyun', '_context': $this })], '_context': $this, value: _getModel(self, 'theme'), 'ev-$change:value': function ev$changeValue(__c, __n) {
                _setModel(self, 'theme', __n, $this);
            } })], 'right')];
    }) && (__blocks["header"] = function (parent) {
        var self = this;
        return blocks["header"] ? blocks["header"].call(this, function () {
            return _blocks["header"].call(self, parent);
        }) : _blocks["header"].call(this, parent);
    }) && __blocks["header"].call(this)), 'header-wrapper'), h('div', null, (_blocks["content"] = function (parent) {
        return null;
    }) && (__blocks["content"] = function (parent) {
        var self = this;
        return blocks["content"] ? blocks["content"].call(this, function () {
            return _blocks["content"].call(self, parent);
        }) : _blocks["content"].call(this, parent);
    }) && __blocks["content"].call(this), 'content-wrapper', null, function (i) {
        widgets['wrapper'] = i;
    })], _className(function () {
        try {
            var _ref;

            return [(_ref = { 'main-wrapper': true }, _ref[scope.className] = scope.className, _ref)][0];
        } catch (e) {
            _e(e);
        }
    }.call(this)));
};

var _link = __webpack_require__("./components/link/index.js");

var _link2 = _interopRequireDefault(_link);

var _select = __webpack_require__("./components/select/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = exports['default'];

/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2J1dHRvbi9ncm91cC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2J1dHRvbi9ncm91cC52ZHQiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9idXR0b24vaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9idXR0b24vaW5kZXguc3R5bCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2J1dHRvbi9pbmRleC52ZHQiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9kcm9wZG93bi9kcm9wZG93bi5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2Ryb3Bkb3duL2luZGV4LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvZHJvcGRvd24vaW5kZXguc3R5bCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2Ryb3Bkb3duL2l0ZW0uanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9kcm9wZG93bi9pdGVtLnZkdCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2Ryb3Bkb3duL21lbnUuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9kcm9wZG93bi9tZW51LnZkdCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2lucHV0L2luZGV4LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvaW5wdXQvaW5kZXguc3R5bCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2lucHV0L2luZGV4LnZkdCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL21vdmVXcmFwcGVyL2luZGV4LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvbW92ZVdyYXBwZXIvcG9zaXRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9zZWxlY3QvZ3JvdXAuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9zZWxlY3QvZ3JvdXAudmR0Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvc2VsZWN0L2luZGV4LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvc2VsZWN0L2luZGV4LnN0eWwiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9zZWxlY3QvaW5kZXgudmR0Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvc2VsZWN0L29wdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9zaXRlL3NyYy9wYWdlcy9sYXlvdXQuanMiLCJ3ZWJwYWNrOi8vLy4vc2l0ZS9zcmMvcGFnZXMvbGF5b3V0LnN0eWwiLCJ3ZWJwYWNrOi8vLy4vc2l0ZS9zcmMvcGFnZXMvbGF5b3V0LnZkdCJdLCJuYW1lcyI6WyJCdXR0b25Hcm91cCIsIkludGFjdCIsInRlbXBsYXRlIiwiZGVmYXVsdHMiLCJ2ZXJ0aWNhbCIsInZhbHVlIiwidW5kZWZpbmVkIiwicmFkaW8iLCJjaGVja1R5cGUiLCJfaW5pdCIsImdldCIsInNldCIsInNpbGVudCIsInByb3BUeXBlcyIsIkJvb2xlYW4iLCJvYmoiLCJfVmR0IiwiYmxvY2tzIiwiJGNhbGxlZSIsIlZkdCIsImgiLCJtaXNzIiwiaGMiLCJodSIsIndpZGdldHMiLCJfYmxvY2tzIiwiX19ibG9ja3MiLCJfX3UiLCJ1dGlscyIsImV4dGVuZCIsIl9lIiwiZXJyb3IiLCJfY2xhc3NOYW1lIiwiY2xhc3NOYW1lIiwiX19vIiwiT3B0aW9ucyIsIl9nZXRNb2RlbCIsImdldE1vZGVsIiwiX3NldE1vZGVsIiwic2V0TW9kZWwiLCJfc2V0Q2hlY2tib3hNb2RlbCIsInNldENoZWNrYm94TW9kZWwiLCJfZGV0ZWN0Q2hlY2tib3hDaGVja2VkIiwiZGV0ZWN0Q2hlY2tib3hDaGVja2VkIiwiX3NldFNlbGVjdE1vZGVsIiwic2V0U2VsZWN0TW9kZWwiLCJzZWxmIiwiZGF0YSIsIiR0aGlzIiwic2NvcGUiLCJBbmltYXRlIiwicGFyZW50IiwiX3N1cGVyIiwic3R5bGUiLCJjaGlsZHJlbiIsImZsdWlkIiwiY2xhc3NOYW1lT2JqIiwiZSIsImNhbGwiLCJtYXAiLCJBcnJheSIsImlzQXJyYXkiLCJ2Tm9kZSIsInRhZyIsIkJ1dHRvbiIsInByb3BzIiwiX3ZhbHVlIiwiX2NoZWNrVHlwZSIsInR5cGUiLCJzaXplIiwiaWNvbiIsImNpcmNsZSIsImxvYWRpbmciLCJkaXNhYmxlZCIsImh0bWxUeXBlIiwidGFnTmFtZSIsInRhZ1Byb3BzIiwibmFtZSIsInRhYmluZGV4IiwiX21vdW50IiwicGFyZW50Vk5vZGUiLCJHcm91cCIsImdyb3VwIiwiX2JlZm9yZVVwZGF0ZSIsInNob3dMb2FkaW5nIiwiaGlkZUxvYWRpbmciLCJkaXNhYmxlIiwiZW5hYmxlIiwiX29uQ2xpY2siLCJwcmV2ZW50RGVmYXVsdCIsInNsaWNlIiwiaW5kZXgiLCJpbmRleE9mIiwicHVzaCIsInNwbGljZSIsImNvbXBvbmVudCIsInRyaWdnZXIiLCJfYmx1ciIsImVsZW1lbnQiLCJibHVyIiwiU3RyaW5nIiwiRnVuY3Rpb24iLCJyZWYiLCJrZXkiLCJyZXN0IiwiY2hlY2tlZCIsImhyZWYiLCJmb3JFYWNoIiwiY2hpbGQiLCJsZW5ndGgiLCJEcm9wZG93biIsIl9zYXZlT3JpZ2luYWxFdmVudHMiLCJvbiIsImtlZXAiLCJvcmlnaW5Qcm9wcyIsImhhc1NhdmVkIiwiX2hhc1NhdmVkIiwiX2V2Q2xpY2siLCJfZXZNb3VzZUVudGVyIiwiX2V2TW91c2VMZWF2ZSIsInNob3ciLCJiaW5kIiwiaGlkZSIsInNpYmxpbmdzIiwibWVudSIsImRyb3Bkb3duIiwiZm4iLCJpc0ZvY3VzIiwiZm9jdXNJdGVtQnlJbmRleCIsImltbWVkaWF0ZWx5IiwiV3JhcHBlciIsImluVnVlIiwicG9zaXRpb24iLCJEcm9wZG93blZ1ZVdyYXBwZXIiLCJfV3JhcHBlciIsImZ1bmN0aW9uYWxXcmFwcGVyIiwiRHJvcGRvd25NZW51IiwiRHJvcGRvd25JdGVtIiwiaGlkZU9uU2VsZWN0IiwiX2lzRm9jdXMiLCJhbmNlc3RvciIsIl9maW5kQW5jZXN0b3JEcm9wZG93bk1lbnUiLCJpdGVtcyIsIl9vbk1vdXNlRW50ZXIiLCJmb2N1c0l0ZW0iLCJfb25Nb3VzZUxlYXZlIiwic2VsZWN0IiwiX2lzU3ViTWVudSIsImZvY3VzIiwiZWxSZWN0IiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwicEVsIiwicmVmcyIsInBFbFJlY3QiLCJib3R0b21PdmVyZmxvd0Rpc3RhbmNlIiwiYm90dG9tIiwidG9wT3ZlcmZsb3dEaXN0YW5jZSIsInRvcCIsInNjcm9sbFRvcCIsInVuRm9jdXMiLCJzaG93TWVudUFuZEZvY3VzIiwiaGlkZU1lbnUiLCJpc0ZpcnN0IiwiX2Rlc3Ryb3kiLCJ0cmFuc2l0aW9uIiwic3ViRHJvcGRvd25zIiwiZm9jdXNJbmRleCIsImxvY2tlZCIsIl9maW5kUGFyZW50RHJvcGRvd25NZW51IiwiX2FkZERvY3VtZW50RXZlbnRzIiwiY2xlYXJUaW1lb3V0IiwidGltZXIiLCJzZXRUaW1lb3V0IiwidG9nZ2xlIiwibXkiLCJhdCIsIm9mIiwidXNpbmciLCJmZWVkYmFjayIsIl9vblNob3ciLCJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJfb25Eb2N1bWVudENsaWNrIiwiX29uS2V5ZG93biIsIl9yZW1vdmVEb2N1bWVudEV2ZW50cyIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJ0YXJnZXQiLCJjb250YWlucyIsIl9pc0NsaWNrU3ViTWVudSIsIl9kcm9wZG93biIsImtleUNvZGUiLCJfZm9jdXNOZXh0SXRlbSIsIl9mb2N1c1ByZXZJdGVtIiwiX3Nob3dTdWJNZW51IiwiX2hpZGVTdWJNZW51IiwiX3NlbGVjdEl0ZW0iLCJkaXJlY3Rpb24iLCJtYXgiLCJvbGRJbmRleCIsImZpeEluZGV4IiwiaSIsIml0ZW0iLCJzdWJNZW51cyIsInJldCIsInN1Yk1lbnUiLCJldmVudHMiLCJNb3ZlV3JhcHBlciIsIklucHV0IiwiZGVmYXVsdFZhbHVlIiwicGxhY2Vob2xkZXIiLCJyZWFkb25seSIsImNsZWFyYWJsZSIsInJvd3MiLCJzcGVsbGNoZWNrIiwiYXV0b1dpZHRoIiwid2lkdGgiLCJhdXRvY29tcGxldGUiLCJfYWRqdXN0V2lkdGgiLCJmYWtlIiwib2Zmc2V0V2lkdGgiLCJpbnB1dCIsImNsZWFyIiwiX29uSW5wdXQiLCJfcHJveHlFdmVudCIsInByZXBlbmQiLCJhcHBlbmQiLCJwcmVmaXgiLCJzdWZmaXgiLCJyZWR1Y2UiLCJtZW1vIiwid3JhcHBlckV2ZW50cyIsImF1dG9EZXN0cm95IiwiY29udGFpbmVyIiwiaW5pdCIsImFyZ3MiLCJjcmVhdGVDb21tZW50IiwiaHlkcmF0ZSIsInVwZGF0ZSIsImxhc3RWTm9kZSIsIm5leHRWTm9kZSIsImRlc3Ryb3kiLCJfJGRlc3Ryb3kiLCJyZW5kZXJlZCIsIlR5cGVzIiwiQ29tcG9uZW50Q2xhc3NPckluc3RhbmNlIiwicmVtb3ZlIiwidmR0IiwiZGVzdHJveWVkIiwib2ZmIiwicXVlcnlTZWxlY3RvciIsImJvZHkiLCJhcHBlbmRDaGlsZCIsImdldERvY3VtZW50T3JXaW5kb3dSZWN0Iiwic2Nyb2xsYmFyV2lkdGgiLCJNYXRoIiwiYWJzIiwickhvcml6b250YWwiLCJyVmVydGljYWwiLCJyT2Zmc2V0IiwiclBvc2l0aW9uIiwiclBlcmNlbnQiLCJnZXREaW1lbnNpb25zIiwiZWxlbSIsIm5vZGVUeXBlIiwiaGVpZ2h0Iiwib2Zmc2V0IiwibGVmdCIsIndpbmRvdyIsInBhZ2VZT2Zmc2V0IiwicGFnZVhPZmZzZXQiLCJwYWdlWSIsInBhZ2VYIiwicmVjdCIsImQiLCJkb2N1bWVudEVsZW1lbnQiLCJjbGllbnRXaWR0aCIsImNsaWVudEhlaWdodCIsImIiLCJzY3JvbGxXaWR0aCIsInNjcm9sbEhlaWdodCIsIm9mZnNldEhlaWdodCIsImdldE9mZnNldHMiLCJvZmZzZXRzIiwicGFyc2VGbG9hdCIsInRlc3QiLCJfc2Nyb2xsQmFyV2lkdGgiLCJvdXRlciIsImNyZWF0ZUVsZW1lbnQiLCJ2aXNpYmlsaXR5IiwibXNPdmVyZmxvd1N0eWxlIiwid2lkdGhOb1Njcm9sbCIsIm92ZXJmbG93IiwiaW5uZXIiLCJ3aWR0aFdpdGhTY3JvbGwiLCJwYXJlbnROb2RlIiwicmVtb3ZlQ2hpbGQiLCJnZXRTY3JvbGxJbmZvIiwid2l0aGluIiwib3ZlcmZsb3dYIiwiaXNXaW5kb3ciLCJpc0RvY3VtZW50Iiwib3ZlcmZsb3dZIiwiaGFzT3ZlcmZsb3dYIiwiaGFzT3ZlcmZsb3dZIiwiZ2V0V2l0aGluSW5mbyIsImhhc09mZnNldCIsInNjcm9sbExlZnQiLCJwYXJzZUNzcyIsInByb3BlcnR5IiwicGFyc2VJbnQiLCJvcHRpb25zIiwidGFyZ2V0V2lkdGgiLCJ0YXJnZXRIZWlnaHQiLCJ0YXJnZXRPZmZzZXQiLCJiYXNlUG9zaXRpb24iLCJjb2xsaXNpb24iLCJzcGxpdCIsInNjcm9sbEluZm8iLCJwb3MiLCJjb25jYXQiLCJob3Jpem9udGFsT2Zmc2V0IiwiZXhlYyIsInZlcnRpY2FsT2Zmc2V0IiwiYXRPZmZzZXQiLCJlbGVtV2lkdGgiLCJlbGVtSGVpZ2h0IiwibXlPZmZzZXQiLCJjb21wdXRlZFN0eWxlIiwiZ2V0Q29tcHV0ZWRTdHlsZSIsIm1hcmdpbkxlZnQiLCJtYXJnaW5Ub3AiLCJjb2xsaXNpb25XaWR0aCIsImNvbGxpc2lvbkhlaWdodCIsImNvbGxpc2lvblBvc2l0aW9uIiwiZGlyIiwiY29sbCIsInJ1bGVzIiwicmlnaHQiLCJob3Jpem9udGFsIiwiaW1wb3J0YW50IiwiZml0Iiwid2l0aGluT2Zmc2V0Iiwib3V0ZXJXaWR0aCIsImNvbGxpc2lvblBvc0xlZnQiLCJvdmVyTGVmdCIsIm92ZXJSaWdodCIsIm5ld092ZXJSaWdodCIsIm91dGVySGVpZ2h0IiwiY29sbGlzaW9uUG9zVG9wIiwib3ZlclRvcCIsIm92ZXJCb3R0b20iLCJuZXdPdmVyQm90dG9tIiwiZmxpcCIsIm9mZnNldExlZnQiLCJuZXdPdmVyTGVmdCIsIm9mZnNldFRvcCIsIm5ld092ZXJUb3AiLCJmbGlwZml0IiwiT3B0aW9uR3JvdXAiLCJsYWJlbCIsIlNlbGVjdCIsIm11bHRpcGxlIiwiZmlsdGVyYWJsZSIsImtleXdvcmRzIiwiYWxsb3dVbm1hdGNoIiwiX3Nob3ciLCJfb25DbGVhciIsInN0b3BQcm9wYWdhdGlvbiIsIl9vblNlbGVjdCIsImFzeW5jIiwidmFsdWVzIiwiX2ZvY3VzSW5wdXQiLCJfcmVzZXRTZWFyY2giLCJfb25TZWFyY2giLCJ0cmltIiwiX29uQ2hhbmdlU2hvdyIsImMiLCJfb25CbHVyIiwiX3NlbGVjdElucHV0IiwiX29uRm9jdXMiLCJfb25Gb2N1c291dCIsIl9kZWxldGUiLCJfcG9zaXRpb24iLCJtZW51RWxlbWVudCIsIm1lbnVXaWR0aCIsIl9vbktleXByZXNzIiwid3JhcHBlciIsImNsaWNrIiwiT3B0aW9uIiwiX3BsYWNlaG9sZGVyIiwiaGFzVmFsdWUiLCJpc0dyb3VwIiwibGFiZWxzIiwiaGFuZGxlUHJvcHMiLCJhY3RpdmUiLCJ2YWxpZCIsInRtcCIsInRvTG93ZXJDYXNlIiwidGV4dCIsIk9wdGlvbnNWTm9kZXMiLCJNZW51IiwidGhlbWUiLCJjaGFuZ2VUaGVtZSIsIm5ld1RoZW1lIiwib2xkVGhlbWUiLCJsaW5rIiwicmVwbGFjZSIsImxvY2FsU3RvcmFnZSIsInNldEl0ZW0iLCJnZXRJdGVtIiwidiIsIm8iLCJib3JkZXIiLCJfdXBkYXRlQm9yZGVyIiwibmF2IiwiY2xhc3NMaXN0IiwiYWRkIiwidGl0bGUiLCJMaW5rIiwibmF2SW5kZXgiLCJfX2MiLCJfX24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRXFCQSxXLFdBQ2hCQyxpQkFBT0MsUUFBUCxFOzs7Ozs7OzswQkFHREMsUSx1QkFBVztBQUNQLGVBQU87QUFDSEMsc0JBQVUsS0FEUDtBQUVIQyxtQkFBT0MsU0FGSjtBQUdIQyxtQkFBTyxLQUhKLEVBR1c7QUFDZEMsdUJBQVcsTUFKUixDQUlnQjtBQUpoQixTQUFQO0FBTUgsSzs7MEJBT0RDLEssb0JBQVE7QUFDSjtBQUNBLFlBQUksS0FBS0MsR0FBTCxDQUFTLE9BQVQsQ0FBSixFQUF1QjtBQUNuQixpQkFBS0MsR0FBTCxDQUFTLFdBQVQsRUFBc0IsT0FBdEIsRUFBK0IsRUFBQ0MsUUFBUSxJQUFULEVBQS9CO0FBQ0g7QUFDSixLOzs7OzRCQXJCYztBQUFFLG1CQUFPVixlQUFQO0FBQWtCOzs7RUFGRUQsZ0IsV0FhOUJZLFMsR0FBWTtBQUNmVCxjQUFVVSxPQURLO0FBRWZQLFdBQU9PO0FBRlEsQztrQkFiRmQsVzs7Ozs7Ozs7Ozs7Ozs7Ozs7a0JDSE4sVUFBU2UsR0FBVCxFQUFjQyxJQUFkLEVBQW9CQyxNQUFwQixFQUE0QkMsT0FBNUIsRUFBcUM7QUFBQTs7QUFDcERGLGFBQVNBLE9BQU9HLEdBQWhCO0FBQ0FKLFlBQVFBLE1BQU0sRUFBZDtBQUNBRSxlQUFXQSxTQUFTLEVBQXBCO0FBQ0EsUUFBSUcsSUFBSUosS0FBS0ssSUFBTCxDQUFVRCxDQUFsQjtBQUFBLFFBQXFCRSxLQUFLTixLQUFLSyxJQUFMLENBQVVDLEVBQXBDO0FBQUEsUUFBd0NDLEtBQUtQLEtBQUtLLElBQUwsQ0FBVUUsRUFBdkQ7QUFBQSxRQUEyREMsVUFBVSxRQUFRLEtBQUtBLE9BQWIsSUFBd0IsRUFBN0Y7QUFBQSxRQUFpR0MsVUFBVSxFQUEzRztBQUFBLFFBQStHQyxXQUFXLEVBQTFIO0FBQUEsUUFDQUMsTUFBTVgsS0FBS1ksS0FEWDtBQUFBLFFBQ2tCQyxTQUFTRixJQUFJRSxNQUQvQjtBQUFBLFFBQ3VDQyxLQUFLSCxJQUFJSSxLQURoRDtBQUFBLFFBQ3VEQyxhQUFhTCxJQUFJTSxTQUR4RTtBQUFBLFFBRUFDLE1BQU1QLElBQUlRLE9BRlY7QUFBQSxRQUVtQkMsWUFBWUYsSUFBSUcsUUFGbkM7QUFBQSxRQUU2Q0MsWUFBWUosSUFBSUssUUFGN0Q7QUFBQSxRQUdBQyxvQkFBb0JiLElBQUljLGdCQUh4QjtBQUFBLFFBRzBDQyx5QkFBeUJmLElBQUlnQixxQkFIdkU7QUFBQSxRQUlBQyxrQkFBa0JqQixJQUFJa0IsY0FKdEI7QUFBQSxRQUtBQyxPQUFPLEtBQUtDLElBTFo7QUFBQSxRQUtrQkMsUUFBUSxJQUwxQjtBQUFBLFFBS2dDQyxRQUFRbEMsR0FMeEM7QUFBQSxRQUs2Q21DLFVBQVVKLFFBQVFBLEtBQUtJLE9BTHBFO0FBQUEsUUFLNkVDLFNBQVMsQ0FBQ2pDLFdBQVcsRUFBWixFQUFnQmtDLE1BTHRHOztBQUpvRCxvQkFlaEROLEtBQUtwQyxHQUFMLEVBZmdEO0FBQUEsUUFhaER1QixTQWJnRCxhQWFoREEsU0FiZ0Q7QUFBQSxRQWFyQzdCLFFBYnFDLGFBYXJDQSxRQWJxQztBQUFBLFFBYTNCaUQsS0FiMkIsYUFhM0JBLEtBYjJCO0FBQUEsUUFjaERDLFFBZGdELGFBY2hEQSxRQWRnRDtBQUFBLFFBY3RDakQsS0Fkc0MsYUFjdENBLEtBZHNDO0FBQUEsUUFjL0JrRCxLQWQrQixhQWMvQkEsS0FkK0I7QUFBQSxRQWN4Qi9DLFNBZHdCLGFBY3hCQSxTQWR3Qjs7QUFpQnBELFFBQU1nRDtBQUNGLGtCQUFVLElBRFI7QUFFRixzQkFBY3BEO0FBRloscUJBR0Q2QixTQUhDLElBR1dBLFNBSFgsZ0JBSUYsU0FKRSxJQUlTc0IsS0FKVCxnQkFBTjs7QUFPQSxXQUFPbkMsRUFBRSxLQUFGLEVBQVMsRUFBQyxTQUFTLFlBQVc7QUFBQyxnQkFBSTtBQUFDLHVCQUFPLENBQUNpQyxLQUFELEVBQVMsQ0FBVCxDQUFQO0FBQW1CLGFBQXhCLENBQXlCLE9BQU1JLENBQU4sRUFBUztBQUFDM0IsbUJBQUcyQixDQUFIO0FBQU07QUFBQyxTQUF0RCxDQUF1REMsSUFBdkQsQ0FBNEQsSUFBNUQsQ0FBVixFQUFULEVBQXVGLFlBQVc7QUFBQyxZQUFJO0FBQUMsbUJBQU8sQ0FBQ2xELGNBQWMsTUFBZCxHQUF1Qm1CLElBQUlnQyxHQUFKLENBQ3RJTCxXQUNLTSxNQUFNQyxPQUFOLENBQWNQLFFBQWQsSUFBMEJBLFFBQTFCLEdBQXFDLENBQUNBLFFBQUQsQ0FEMUMsR0FFSUEsUUFIa0ksRUFJdEksaUJBQVM7QUFDTCxvQkFBSVEsTUFBTUMsR0FBTixLQUFjQyxVQUFsQixFQUEwQjtBQUN0QkYsMEJBQU1HLEtBQU4sOEJBQ09ILE1BQU1HLEtBRGI7QUFFSUMsZ0NBQVE3RCxLQUZaO0FBR0k4RCxvQ0FBWTNEO0FBSGhCO0FBS0g7QUFDRCx1QkFBT3NELEtBQVA7QUFDSCxhQWJxSSxDQUF2QixHQWMvR1IsUUFkOEcsRUFlcEgsQ0Fmb0gsQ0FBUDtBQWUxRyxTQWZxRyxDQWVwRyxPQUFNRyxDQUFOLEVBQVM7QUFBQzNCLGVBQUcyQixDQUFIO0FBQU07QUFBQyxLQWZ1RSxDQWV0RUMsSUFmc0UsQ0FlakUsSUFmaUUsQ0FBdkYsRUFlNkIxQixXQUFXLFlBQVc7QUFBQyxZQUFJO0FBQUMsbUJBQU8sQ0FBQ3dCLFlBQUQsRUFBZ0IsQ0FBaEIsQ0FBUDtBQUEwQixTQUEvQixDQUFnQyxPQUFNQyxDQUFOLEVBQVM7QUFBQzNCLGVBQUcyQixDQUFIO0FBQU07QUFBQyxLQUE3RCxDQUE4REMsSUFBOUQsQ0FBbUUsSUFBbkUsQ0FBWCxDQWY3QixDQUFQO0FBZ0JDLEM7O0FBekNEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFcUJNLE0sV0FDaEIvRCxpQkFBT0MsUUFBUCxFOzs7Ozs7OztxQkFHREMsUSx1QkFBVztBQUNQLGVBQU87QUFDSGlFLGtCQUFNLFNBREgsRUFDYztBQUNqQkMsa0JBQU0sU0FGSCxFQUVjO0FBQ2pCQyxrQkFBTSxLQUhIO0FBSUhDLG9CQUFRLEtBSkw7QUFLSEMscUJBQVMsS0FMTjtBQU1IQyxzQkFBVSxLQU5QO0FBT0hsQixtQkFBTyxLQVBKO0FBUUhtQixzQkFBVSxRQVJQO0FBU0hDLHFCQUFTLFFBVE47QUFVSEMsc0JBQVV0RSxTQVZQO0FBV0hELG1CQUFPQyxTQVhKO0FBWUh1RSxrQkFBTXZFLFNBWkg7QUFhSHdFLHNCQUFVLEdBYlA7O0FBZUhaLG9CQUFRNUQsU0FmTDtBQWdCSDZELHdCQUFZO0FBaEJULFNBQVA7QUFrQkgsSzs7cUJBZURZLE0scUJBQVM7QUFDTCxZQUFJQyxjQUFjLEtBQUtBLFdBQXZCOztBQUVBLGVBQU9BLGVBQWVBLFlBQVlqQixHQUFaLEtBQW9Ca0IsZUFBMUMsRUFBaUQ7QUFDN0NELDBCQUFjQSxZQUFZQSxXQUExQjtBQUNIOztBQUVELFlBQUlBLFdBQUosRUFBaUI7QUFDYixpQkFBS0UsS0FBTCxHQUFhRixZQUFZMUIsUUFBekI7O0FBRUEsaUJBQUszQyxHQUFMLENBQVM7QUFDTHdELDRCQUFZLEtBQUtlLEtBQUwsQ0FBV3hFLEdBQVgsQ0FBZSxXQUFmLENBRFA7QUFFTHdELHdCQUFRLEtBQUtnQixLQUFMLENBQVd4RSxHQUFYLENBQWUsT0FBZjtBQUZILGFBQVQ7QUFJSDtBQUNKLEs7O3FCQUVEeUUsYSw0QkFBZ0I7QUFDWixZQUFJLEtBQUtELEtBQVQsRUFBZ0I7QUFDWixpQkFBS3ZFLEdBQUwsQ0FBUztBQUNMd0QsNEJBQVksS0FBS2UsS0FBTCxDQUFXeEUsR0FBWCxDQUFlLFdBQWYsQ0FEUDtBQUVMd0Qsd0JBQVEsS0FBS2dCLEtBQUwsQ0FBV3hFLEdBQVgsQ0FBZSxPQUFmO0FBRkgsYUFBVCxFQUdHLEVBQUNFLFFBQVEsSUFBVCxFQUhIO0FBSUg7QUFDSixLOztxQkFFRHdFLFcsMEJBQWM7QUFDVixhQUFLekUsR0FBTCxDQUFTLFNBQVQsRUFBb0IsSUFBcEI7QUFDSCxLOztxQkFFRDBFLFcsMEJBQWM7QUFDVixhQUFLMUUsR0FBTCxDQUFTLFNBQVQsRUFBb0IsS0FBcEI7QUFDSCxLOztxQkFFRDJFLE8sc0JBQVU7QUFDTixhQUFLM0UsR0FBTCxDQUFTLFVBQVQsRUFBcUIsSUFBckI7QUFDSCxLOztxQkFFRDRFLE0scUJBQVM7QUFDTCxhQUFLNUUsR0FBTCxDQUFTLFVBQVQsRUFBcUIsS0FBckI7QUFDSCxLOztxQkFFRDZFLFEscUJBQVMvQixDLEVBQUc7QUFDUixZQUFJLEtBQUsvQyxHQUFMLENBQVMsVUFBVCxLQUF3QixLQUFLQSxHQUFMLENBQVMsU0FBVCxDQUE1QixFQUFpRDtBQUM3QyxtQkFBTytDLEVBQUVnQyxjQUFGLEVBQVA7QUFDSDs7QUFFRCxZQUFJLEtBQUtQLEtBQVQsRUFBZ0I7QUFBQSx1QkFDc0IsS0FBS3hFLEdBQUwsRUFEdEI7QUFBQSxnQkFDUHlELFVBRE8sUUFDUEEsVUFETztBQUFBLGdCQUNLOUQsS0FETCxRQUNLQSxLQURMO0FBQUEsZ0JBQ1k2RCxNQURaLFFBQ1lBLE1BRFo7O0FBRVosZ0JBQUk3RCxVQUFVQyxTQUFkLEVBQXlCO0FBQ3JCLG9CQUFJNkQsZUFBZSxPQUFuQixFQUE0QjtBQUN4Qix5QkFBS2UsS0FBTCxDQUFXdkUsR0FBWCxDQUFlLE9BQWYsRUFBd0JOLEtBQXhCO0FBQ0gsaUJBRkQsTUFFTyxJQUFJOEQsZUFBZSxVQUFuQixFQUErQjtBQUNsQyx3QkFBSSxDQUFDUCxNQUFNQyxPQUFOLENBQWNLLE1BQWQsQ0FBTCxFQUE0QjtBQUN4QkEsaUNBQVMsRUFBVDtBQUNIO0FBQ0RBLDZCQUFTQSxPQUFPd0IsS0FBUCxDQUFhLENBQWIsQ0FBVDtBQUNBLHdCQUFNQyxRQUFRekIsT0FBTzBCLE9BQVAsQ0FBZXZGLEtBQWYsQ0FBZDtBQUNBLHdCQUFJLENBQUMsQ0FBQ3NGLEtBQU4sRUFBYTtBQUNUekIsK0JBQU8yQixJQUFQLENBQVl4RixLQUFaO0FBQ0gscUJBRkQsTUFFTztBQUNINkQsK0JBQU80QixNQUFQLENBQWNILEtBQWQsRUFBcUIsQ0FBckI7QUFDSDtBQUNELHlCQUFLVCxLQUFMLENBQVd2RSxHQUFYLENBQWUsT0FBZixFQUF3QnVELE1BQXhCO0FBQ0g7QUFDSjtBQUNKOztBQUVEVCxVQUFFc0MsU0FBRixHQUFjLElBQWQ7QUFDQSxhQUFLQyxPQUFMLENBQWEsT0FBYixFQUFzQnZDLENBQXRCO0FBQ0gsSzs7cUJBRUR3QyxLLG9CQUFRO0FBQ0o7QUFDQSxhQUFLQyxPQUFMLENBQWFDLElBQWI7QUFDSCxLOzs7OzRCQS9HYztBQUFFLG1CQUFPakcsZUFBUDtBQUFrQjs7O0VBRkhELGdCLFdBeUJ6QlksUyxHQUFZO0FBQ2Z1RCxVQUFNZ0MsTUFEUztBQUVmL0IsVUFBTStCLE1BRlM7QUFHZjlCLFVBQU14RCxPQUhTO0FBSWZ5RCxZQUFRekQsT0FKTztBQUtmMEQsYUFBUzFELE9BTE07QUFNZjJELGNBQVUzRCxPQU5LO0FBT2Z5QyxXQUFPekMsT0FQUTtBQVFmNEQsY0FBVTBCLE1BUks7QUFTZnpCLGFBQVMsQ0FBQ3lCLE1BQUQsRUFBU0MsUUFBVCxDQVRNO0FBVWZ4QixVQUFNdUI7QUFWUyxDO2tCQXpCRnBDLE07UUFvSGJBLE0sR0FBQUEsTTtRQUFpQmhFLFcsR0FBVGlGLGU7Ozs7Ozs7QUMxSGhCO0FBQ0E7QUFDQTtBQUNBLHdHQUF3RyxZQUFZLFNBQVMsRUFBRTtBQUMvSDtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztrQkNMZSxVQUFTbEUsR0FBVCxFQUFjQyxJQUFkLEVBQW9CQyxNQUFwQixFQUE0QkMsT0FBNUIsRUFBcUM7QUFBQTtBQUFBOztBQUNwREYsYUFBU0EsT0FBT0csR0FBaEI7QUFDQUosWUFBUUEsTUFBTSxFQUFkO0FBQ0FFLGVBQVdBLFNBQVMsRUFBcEI7QUFDQSxRQUFJRyxJQUFJSixLQUFLSyxJQUFMLENBQVVELENBQWxCO0FBQUEsUUFBcUJFLEtBQUtOLEtBQUtLLElBQUwsQ0FBVUMsRUFBcEM7QUFBQSxRQUF3Q0MsS0FBS1AsS0FBS0ssSUFBTCxDQUFVRSxFQUF2RDtBQUFBLFFBQTJEQyxVQUFVLFFBQVEsS0FBS0EsT0FBYixJQUF3QixFQUE3RjtBQUFBLFFBQWlHQyxVQUFVLEVBQTNHO0FBQUEsUUFBK0dDLFdBQVcsRUFBMUg7QUFBQSxRQUNBQyxNQUFNWCxLQUFLWSxLQURYO0FBQUEsUUFDa0JDLFNBQVNGLElBQUlFLE1BRC9CO0FBQUEsUUFDdUNDLEtBQUtILElBQUlJLEtBRGhEO0FBQUEsUUFDdURDLGFBQWFMLElBQUlNLFNBRHhFO0FBQUEsUUFFQUMsTUFBTVAsSUFBSVEsT0FGVjtBQUFBLFFBRW1CQyxZQUFZRixJQUFJRyxRQUZuQztBQUFBLFFBRTZDQyxZQUFZSixJQUFJSyxRQUY3RDtBQUFBLFFBR0FDLG9CQUFvQmIsSUFBSWMsZ0JBSHhCO0FBQUEsUUFHMENDLHlCQUF5QmYsSUFBSWdCLHFCQUh2RTtBQUFBLFFBSUFDLGtCQUFrQmpCLElBQUlrQixjQUp0QjtBQUFBLFFBS0FDLE9BQU8sS0FBS0MsSUFMWjtBQUFBLFFBS2tCQyxRQUFRLElBTDFCO0FBQUEsUUFLZ0NDLFFBQVFsQyxHQUx4QztBQUFBLFFBSzZDbUMsVUFBVUosUUFBUUEsS0FBS0ksT0FMcEU7QUFBQSxRQUs2RUMsU0FBUyxDQUFDakMsV0FBVyxFQUFaLEVBQWdCa0MsTUFMdEc7O0FBSm9ELG9CQWdCaEROLEtBQUtwQyxHQUFMLEVBaEJnRDtBQUFBLFFBYWhEMEQsSUFiZ0QsYUFhaERBLElBYmdEO0FBQUEsUUFhMUNuQyxTQWIwQyxhQWExQ0EsU0FiMEM7QUFBQSxRQWEvQm9DLElBYitCLGFBYS9CQSxJQWIrQjtBQUFBLFFBYXpCQyxJQWJ5QixhQWF6QkEsSUFieUI7QUFBQSxRQWFuQkMsTUFibUIsYUFhbkJBLE1BYm1CO0FBQUEsUUFhWCtCLEdBYlcsYUFhWEEsR0FiVztBQUFBLFFBYU5DLEdBYk0sYUFhTkEsR0FiTTtBQUFBLFFBYUR6QixRQWJDLGFBYURBLFFBYkM7QUFBQSxRQWNoREgsT0FkZ0QsYUFjaERBLE9BZGdEO0FBQUEsUUFjdkNELFFBZHVDLGFBY3ZDQSxRQWR1QztBQUFBLFFBYzdCbkIsS0FkNkIsYUFjN0JBLEtBZDZCO0FBQUEsUUFjdEJELFFBZHNCLGFBY3RCQSxRQWRzQjtBQUFBLFFBY1prQixPQWRZLGFBY1pBLE9BZFk7QUFBQSxRQWNIQyxRQWRHLGFBY0hBLFFBZEc7QUFBQSxRQWVoRHBFLEtBZmdELGFBZWhEQSxLQWZnRDtBQUFBLFFBZXpDNkQsTUFmeUMsYUFlekNBLE1BZnlDO0FBQUEsUUFlakNXLElBZmlDLGFBZWpDQSxJQWZpQztBQUFBLFFBZTNCRCxRQWYyQixhQWUzQkEsUUFmMkI7QUFBQSxRQWVqQlQsVUFmaUIsYUFlakJBLFVBZmlCO0FBQUEsUUFlRnFDLElBZkU7O0FBa0JwRCxRQUFNQyxVQUFVcEcsVUFBVUMsU0FBVixHQUNaNkQsZUFBZSxPQUFmLEdBQ0k5RCxVQUFVNkQsTUFEZCxHQUdRQyxlQUFlLFVBQWYsR0FDSVAsTUFBTUMsT0FBTixDQUFjSyxNQUFkLEtBQXlCLENBQUMsQ0FBQyxDQUFDQSxPQUFPMEIsT0FBUCxDQUFldkYsS0FBZixDQURoQyxHQUVJLEtBTkEsR0FRVixLQVJOOztBQVVBLFFBQU1tRDtBQUNGLGlCQUFTO0FBRFAsNEJBRUlZLElBRkosSUFFYUEsU0FBUyxTQUZ0QixnQkFHRixZQUhFLElBR1lFLElBSFosdUJBSUlELElBSkosSUFJYUEsU0FBUyxTQUp0QixnQkFLRHBDLFNBTEMsSUFLV0EsU0FMWCxnQkFNRixVQU5FLElBTVVzQyxNQU5WLGdCQU9GLFdBUEUsSUFPV0MsT0FQWCxnQkFRRixTQVJFLElBUVNqQixLQVJULGdCQVNGLFVBVEUsSUFTVWtELE9BVFYsZ0JBVUYsWUFWRSxJQVVZaEMsWUFBWUQsT0FWeEIsZ0JBQU47O0FBYUEsUUFBTVIsU0FBUyxTQUFUQSxNQUFTLFFBQVM7QUFDcEIsWUFBSUMsTUFBTXlDLElBQU4sSUFBYy9CLFlBQVksUUFBOUIsRUFBd0M7QUFDcENBLHNCQUFVLEdBQVY7QUFDSDtBQUNELFlBQUlBLFlBQVksUUFBaEIsRUFBMEI7QUFDdEI7QUFDQVYsa0JBQU1HLElBQU4sR0FBYU0sUUFBYjtBQUNIO0FBQ0Q7QUFDQTtBQUNBLGVBQU90RCxFQUFFdUQsT0FBRixFQUFXVixLQUFYLEVBQWtCQSxNQUFNWCxRQUF4QixDQUFQO0FBQ0gsS0FYRDs7QUFhQTtBQUNBLFFBQUksQ0FBQ2dCLElBQUQsSUFBU1YsTUFBTUMsT0FBTixDQUFjUCxRQUFkLENBQWIsRUFBc0M7QUFDbENBLGlCQUFTcUQsT0FBVCxDQUFpQixVQUFDQyxLQUFELEVBQVFqQixLQUFSLEVBQWtCO0FBQy9CLGdCQUFJaUIsS0FBSixFQUFXO0FBQ1Asb0JBQUlBLE1BQU14QyxJQUFOLEtBQWUsQ0FBZixJQUFvQixxQ0FBeUJ3QyxLQUF6QixDQUF4QixFQUF5RDtBQUNyRDtBQUNBO0FBQ0F0RCw2QkFBU3FDLEtBQVQsSUFBa0J2RSxFQUFFLE1BQUYsRUFBVSxJQUFWLEVBQWdCLFlBQVc7QUFBQyw0QkFBSTtBQUFDLG1DQUFPLENBQUN3RixLQUFELEVBQVMsQ0FBVCxDQUFQO0FBQW1CLHlCQUF4QixDQUF5QixPQUFNbkQsQ0FBTixFQUFTO0FBQUMzQiwrQkFBRzJCLENBQUg7QUFBTTtBQUFDLHFCQUF0RCxDQUF1REMsSUFBdkQsQ0FBNEQsS0FBNUQsQ0FBaEIsQ0FBbEI7QUFDSDtBQUNEO0FBQ0Esb0JBQUlpQyxVQUFVLENBQWQsRUFBaUI7QUFDYix3QkFBSWlCLE1BQU0zRSxTQUFOLElBQW1CMkUsTUFBTTNFLFNBQU4sQ0FBZ0IyRCxPQUFoQixDQUF3QixNQUF4QixJQUFrQyxDQUFDLENBQTFELEVBQTZEO0FBQ3pEcEMscUNBQWEsYUFBYixJQUE4QixJQUE5QjtBQUNIO0FBQ0osaUJBSkQsTUFJTyxJQUFJbUMsVUFBVXJDLFNBQVN1RCxNQUFULEdBQWtCLENBQWhDLEVBQW1DO0FBQ3RDLHdCQUFJRCxNQUFNM0UsU0FBTixJQUFtQjJFLE1BQU0zRSxTQUFOLENBQWdCMkQsT0FBaEIsQ0FBd0IsTUFBeEIsSUFBa0MsQ0FBQyxDQUExRCxFQUE2RDtBQUN6RHBDLHFDQUFhLGNBQWIsSUFBK0IsSUFBL0I7QUFDSDtBQUNKO0FBQ0o7QUFDSixTQWxCRDtBQW1CSCxLQXBCRCxNQW9CTyxJQUFJLHFDQUF5QkYsUUFBekIsQ0FBSixFQUF3QztBQUMzQztBQUNBQSxtQkFBV2xDLEVBQUUsTUFBRixFQUFVLElBQVYsRUFBZ0IsWUFBVztBQUFDLGdCQUFJO0FBQUMsdUJBQU8sQ0FBQ2tDLFFBQUQsRUFBWSxDQUFaLENBQVA7QUFBc0IsYUFBM0IsQ0FBNEIsT0FBTUcsQ0FBTixFQUFTO0FBQUMzQixtQkFBRzJCLENBQUg7QUFBTTtBQUFDLFNBQXpELENBQTBEQyxJQUExRCxDQUErRCxJQUEvRCxDQUFoQixDQUFYO0FBQ0g7O0FBRUQsV0FBT3RDLEVBQUU0QyxNQUFGLDJCQUFXLGFBQWFoQyxXQUFXLFlBQVc7QUFBQyxnQkFBSTtBQUFDLHVCQUFPLENBQUN3QixZQUFELEVBQWdCLENBQWhCLENBQVA7QUFBMEIsYUFBL0IsQ0FBZ0MsT0FBTUMsQ0FBTixFQUFTO0FBQUMzQixtQkFBRzJCLENBQUg7QUFBTTtBQUFDLFNBQTdELENBQThEQyxJQUE5RCxDQUFtRSxJQUFuRSxDQUFYLENBQXhCLElBQWlILFlBQVc7QUFBQyxZQUFJO0FBQUMsbUJBQU8sQ0FBQzhDLElBQUQsRUFBUSxDQUFSLENBQVA7QUFBa0IsU0FBdkIsQ0FBd0IsT0FBTS9DLENBQU4sRUFBUztBQUFDM0IsZUFBRzJCLENBQUg7QUFBTTtBQUFDLEtBQXJELENBQXNEQyxJQUF0RCxDQUEyRCxJQUEzRCxDQUFqSCxFQUFzTCxZQUFXO0FBQUMsWUFBSTtBQUFDLG1CQUFPLENBQUNrQixRQUFELEVBQVksQ0FBWixDQUFQO0FBQXNCLFNBQTNCLENBQTRCLE9BQU1uQixDQUFOLEVBQVM7QUFBQzNCLGVBQUcyQixDQUFIO0FBQU07QUFBQyxLQUF6RCxDQUEwREMsSUFBMUQsQ0FBK0QsSUFBL0QsQ0FBdEwsSUFBNFAsWUFBWSxZQUFXO0FBQUMsZ0JBQUk7QUFBQyx1QkFBTyxDQUFDWixLQUFLMEMsUUFBTixFQUFpQixDQUFqQixDQUFQO0FBQTJCLGFBQWhDLENBQWlDLE9BQU0vQixDQUFOLEVBQVM7QUFBQzNCLG1CQUFHMkIsQ0FBSDtBQUFNO0FBQUMsU0FBOUQsQ0FBK0RDLElBQS9ELENBQW9FLElBQXBFLENBQXhRLEVBQW1WLFlBQVksWUFBVztBQUFDLGdCQUFJO0FBQUMsdUJBQU8sQ0FBQ2UsWUFBWUQsT0FBWixHQUFzQixJQUF0QixHQUE2Qk0sUUFBOUIsRUFBeUMsQ0FBekMsQ0FBUDtBQUFtRCxhQUF4RCxDQUF5RCxPQUFNckIsQ0FBTixFQUFTO0FBQUMzQixtQkFBRzJCLENBQUg7QUFBTTtBQUFDLFNBQXRGLENBQXVGQyxJQUF2RixDQUE0RixJQUE1RixDQUEvVixFQUFrYyxjQUFjLFlBQVc7QUFBQyxnQkFBSTtBQUFDLHVCQUFPLENBQUNaLEtBQUttRCxLQUFOLEVBQWMsQ0FBZCxDQUFQO0FBQXdCLGFBQTdCLENBQThCLE9BQU14QyxDQUFOLEVBQVM7QUFBQzNCLG1CQUFHMkIsQ0FBSDtBQUFNO0FBQUMsU0FBM0QsQ0FBNERDLElBQTVELENBQWlFLElBQWpFLENBQWhkLEVBQXdoQixZQUFZLENBQUMsUUFBRCxFQUFXLFlBQVc7QUFBQyxnQkFBSTtBQUFDLHVCQUFPLENBQUNjLFVBQ3ZrQmhCLGFBQWEsY0FBYixJQUNJLENBQUNGLFFBQUQsRUFBV2xDLEVBQUUsR0FBRixFQUFPLElBQVAsRUFBYSxJQUFiLEVBQW1CLGdDQUFuQixDQUFYLENBREosR0FFSSxDQUFDQSxFQUFFLEdBQUYsRUFBTyxJQUFQLEVBQWEsSUFBYixFQUFtQixnQ0FBbkIsQ0FBRCxFQUF1RGtDLFFBQXZELENBSG1rQixHQUl2a0JBLFFBSnNrQixFQUt4a0IsQ0FMd2tCLENBQVA7QUFLOWpCLGFBTHlqQixDQUt4akIsT0FBTUcsQ0FBTixFQUFTO0FBQUMzQixtQkFBRzJCLENBQUg7QUFBTTtBQUFDLFNBTDJoQixDQUsxaEJDLElBTDBoQixDQUtyaEIsSUFMcWhCLENBQVgsRUFLbmdCLFFBTG1nQixFQUt6ZixZQUFXO0FBQUMsZ0JBQUk7QUFBQyx1QkFBTyxDQUFDUyxlQUFlLE1BQWhCLEVBQXlCLENBQXpCLENBQVA7QUFBbUMsYUFBeEMsQ0FBeUMsT0FBTVYsQ0FBTixFQUFTO0FBQUMzQixtQkFBRzJCLENBQUg7QUFBTTtBQUFDLFNBQXRFLENBQXVFQyxJQUF2RSxDQUE0RSxJQUE1RSxJQUFvRnRDLEVBQUUsT0FBRixFQUFXLEVBQUMsUUFBUSxZQUFXO0FBQUMsb0JBQUk7QUFBQywyQkFBTyxDQUFDK0MsVUFBRCxFQUFjLENBQWQsQ0FBUDtBQUF3QixpQkFBN0IsQ0FBOEIsT0FBTVYsQ0FBTixFQUFTO0FBQUMzQix1QkFBRzJCLENBQUg7QUFBTTtBQUFDLGFBQTNELENBQTREQyxJQUE1RCxDQUFpRSxJQUFqRSxDQUFULEVBQWlGLFFBQVEsWUFBVztBQUFDLG9CQUFJO0FBQUMsMkJBQU8sQ0FBQ21CLElBQUQsRUFBUSxDQUFSLENBQVA7QUFBa0IsaUJBQXZCLENBQXdCLE9BQU1wQixDQUFOLEVBQVM7QUFBQzNCLHVCQUFHMkIsQ0FBSDtBQUFNO0FBQUMsYUFBckQsQ0FBc0RDLElBQXRELENBQTJELElBQTNELENBQXpGLEVBQTJKLFdBQVcsWUFBVztBQUFDLG9CQUFJO0FBQUMsMkJBQU8sQ0FBQytDLE9BQUQsRUFBVyxDQUFYLENBQVA7QUFBcUIsaUJBQTFCLENBQTJCLE9BQU1oRCxDQUFOLEVBQVM7QUFBQzNCLHVCQUFHMkIsQ0FBSDtBQUFNO0FBQUMsYUFBeEQsQ0FBeURDLElBQXpELENBQThELElBQTlELENBQXRLLEVBQTJPLFlBQVksSUFBdlAsRUFBWCxDQUFwRixHQUErVnBELFNBTDBKLENBQXBpQixFQUtzWixZQUFZMEMsS0FMbGEsSUFBUDtBQU1DLEM7O0FBdkZEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQUE7Ozs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQSxJQUFNNUIsSUFBSW5CLGlCQUFPa0IsR0FBUCxDQUFXRSxJQUFYLENBQWdCRCxDQUExQjs7SUFFcUIwRixRLFdBQ2hCN0csaUJBQU9DLFFBQVAsRTs7Ozs7Ozs7YUFDTUEsUSxxQkFBUzZDLEksRUFBTTtBQUNsQixlQUFPQSxLQUFLckMsR0FBTCxDQUFTLFVBQVQsQ0FBUDtBQUNILEs7O3VCQUVEUCxRLHVCQUFXO0FBQ1AsZUFBTztBQUNINkYscUJBQVMsT0FETjtBQUVIdkIsc0JBQVU7QUFGUCxTQUFQO0FBSUgsSzs7dUJBRURoRSxLLG9CQUFRO0FBQUE7O0FBQ0osYUFBS3NHLG1CQUFMO0FBQ0EsYUFBS0MsRUFBTCxDQUFRLG1CQUFSLEVBQTZCLFlBQU07QUFDL0IsbUJBQUtELG1CQUFMO0FBQ0gsU0FGRCxFQUVHLEVBQUNFLE1BQU0sSUFBUCxFQUZIO0FBR0gsSzs7dUJBRURGLG1CLGtDQUFzQjtBQUFBLG1CQUM0QixLQUFLckcsR0FBTCxFQUQ1QjtBQUFBLFlBQ2I0QyxRQURhLFFBQ2JBLFFBRGE7QUFBQSxZQUNIMEMsT0FERyxRQUNIQSxPQURHO0FBQUEsWUFDTS9ELFNBRE4sUUFDTUEsU0FETjtBQUFBLFlBQ29CdUUsSUFEcEI7O0FBRWxCLFlBQUk1QyxNQUFNQyxPQUFOLENBQWNQLFFBQWQsQ0FBSixFQUE2QjtBQUN6QkEsdUJBQVdBLFNBQVMsQ0FBVCxDQUFYO0FBQ0g7QUFDRCxZQUFJLHdCQUFZQSxRQUFaLENBQUosRUFBMkI7QUFDdkJBLHVCQUFXbEMsRUFBRSxNQUFGLEVBQVVvRixJQUFWLEVBQWdCbEQsUUFBaEIsRUFBMEJyQixTQUExQixDQUFYO0FBQ0g7O0FBRUQ7QUFDQSxZQUFNaUYsY0FBYzVELFNBQVNXLEtBQTdCO0FBQ0EsWUFBSWtELFdBQVcsS0FBZjtBQUNBLFlBQUksQ0FBQ0QsWUFBWUUsU0FBakIsRUFBNEI7QUFDeEI5RCxxQkFBUytELFFBQVQsR0FBb0JILFlBQVksVUFBWixDQUFwQjtBQUNBNUQscUJBQVNnRSxhQUFULEdBQXlCSixZQUFZLGVBQVosQ0FBekI7QUFDQTVELHFCQUFTaUUsYUFBVCxHQUF5QkwsWUFBWSxlQUFaLENBQXpCO0FBQ0FDLHVCQUFXLElBQVg7QUFDSDtBQUNELFlBQU1sRCxRQUFRLEVBQWQ7QUFDQTtBQUNJQSxjQUFNLFVBQU4sSUFBb0IsS0FBS3VELElBQUwsQ0FBVUMsSUFBVixDQUFlLElBQWYsRUFBcUJuRSxTQUFTK0QsUUFBOUIsQ0FBcEI7QUFDSjtBQUNBLFlBQUlyQixZQUFZLE9BQWhCLEVBQXlCO0FBQ3JCL0Isa0JBQU0sZUFBTixJQUF5QixLQUFLdUQsSUFBTCxDQUFVQyxJQUFWLENBQWUsSUFBZixFQUFxQm5FLFNBQVNnRSxhQUE5QixDQUF6QjtBQUNBckQsa0JBQU0sZUFBTixJQUF5QixLQUFLeUQsSUFBTCxDQUFVRCxJQUFWLENBQWUsSUFBZixFQUFxQm5FLFNBQVNpRSxhQUE5QixDQUF6QjtBQUNIO0FBQ0QsWUFBSUosUUFBSixFQUFjO0FBQ1ZsRCxrQkFBTW1ELFNBQU4sR0FBa0IsSUFBbEI7QUFDSDtBQUNEOUQsaUJBQVNXLEtBQVQsOEJBQXFCWCxTQUFTVyxLQUE5QixFQUF3Q0EsS0FBeEM7QUFDQSxhQUFLdEQsR0FBTCxDQUFTLFVBQVQsRUFBcUIyQyxRQUFyQixFQUErQixFQUFDMUMsUUFBUSxJQUFULEVBQS9CO0FBQ0gsSzs7dUJBRURtRSxNLHFCQUFTO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsWUFBTTRDLFdBQVcsS0FBSzNDLFdBQUwsQ0FBaUIxQixRQUFsQztBQUNBLFlBQU1xQyxRQUFRZ0MsU0FBUy9CLE9BQVQsQ0FBaUIsS0FBSzlCLEtBQXRCLENBQWQ7QUFDQSxZQUFNOEQsT0FBT0QsU0FBU2hDLFFBQVEsQ0FBakIsQ0FBYjtBQUNBaUMsYUFBS3RFLFFBQUwsQ0FBY3VFLFFBQWQsR0FBeUIsSUFBekI7QUFDQSxhQUFLRCxJQUFMLEdBQVlBLElBQVo7QUFDSCxLOzt1QkFFREosSSxpQkFBS00sRSxFQUFJckUsQyxFQUFHc0UsTyxFQUFTO0FBQ2pCLFlBQUksT0FBT0QsRUFBUCxLQUFjLFVBQWxCLEVBQThCQSxHQUFHckUsQ0FBSDs7QUFFOUIsWUFBSSxLQUFLL0MsR0FBTCxDQUFTLFVBQVQsQ0FBSixFQUEwQjs7QUFFMUIsWUFBTWtILE9BQU8sS0FBS0EsSUFBTCxDQUFVdEUsUUFBdkI7QUFDQXNFLGFBQUtKLElBQUw7O0FBRUEsWUFBSU8sT0FBSixFQUFhO0FBQ1RILGlCQUFLSSxnQkFBTCxDQUFzQixDQUF0QjtBQUNIO0FBQ0osSzs7dUJBRUROLEksaUJBQUtJLEUsRUFBSXJFLEMsRUFBR3dFLFcsRUFBYTtBQUNyQixZQUFJLE9BQU9ILEVBQVAsS0FBYyxVQUFsQixFQUE4QkEsR0FBR3JFLENBQUg7O0FBRTlCLFlBQUksS0FBSy9DLEdBQUwsQ0FBUyxVQUFULENBQUosRUFBMEI7O0FBRTFCLFlBQU1rSCxPQUFPLEtBQUtBLElBQUwsQ0FBVXRFLFFBQXZCO0FBQ0FzRSxhQUFLRixJQUFMLENBQVVPLFdBQVY7QUFDSCxLOzs7RUFwRmlDaEksZ0I7a0JBQWpCNkcsUTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ05yQjs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOztBQUNBOzs7O0FBRUEsSUFBTTFGLElBQUluQixpQkFBT2tCLEdBQVAsQ0FBV0UsSUFBWCxDQUFnQkQsQ0FBMUI7O0FBRUEsU0FBUzhHLE9BQVQsQ0FBaUJqRSxLQUFqQixFQUF3QmtFLEtBQXhCLEVBQStCO0FBQUEsUUFFdkI3RSxRQUZ1QixHQUl2QlcsS0FKdUIsQ0FFdkJYLFFBRnVCO0FBQUEsUUFFYjhFLFFBRmEsR0FJdkJuRSxLQUp1QixDQUVibUUsUUFGYTtBQUFBLFFBRUg3QixHQUZHLEdBSXZCdEMsS0FKdUIsQ0FFSHNDLEdBRkc7QUFBQSxRQUd2QkQsR0FIdUIsR0FJdkJyQyxLQUp1QixDQUd2QnFDLEdBSHVCO0FBQUEsUUFHZkUsSUFIZSwwQ0FJdkJ2QyxLQUp1Qjs7O0FBTTNCLFFBQU1pQyxVQUFVNUMsU0FBUyxDQUFULENBQWhCO0FBQ0EsUUFBTXNFLE9BQU90RSxTQUFTLENBQVQsQ0FBYjs7QUFFQXNFLFNBQUszRCxLQUFMO0FBQ0ltRSwwQkFESjtBQUVJN0IsYUFBS0EsT0FBTyxJQUFQLEdBQWNBLEdBQWQsR0FBdUJBLEdBQXZCO0FBRlQsT0FHT0MsSUFIUCxFQUlPb0IsS0FBSzNELEtBSlo7O0FBT0EsV0FBTyxDQUFDa0UsS0FBRCxHQUNILENBQ0kvRyxFQUFFMEYsa0JBQUY7QUFDSVAsYUFBS0EsT0FBTyxJQUFQLEdBQWNBLEdBQWQsR0FBdUJBLEdBQXZCLGFBRFQ7QUFFSUQsYUFBS0EsR0FGVDtBQUdJaEQsa0JBQVU0QztBQUhkLE9BSU9NLElBSlAsRUFESixFQU9Jb0IsSUFQSixDQURHLEdBVUh4RyxFQUFFaUgsa0JBQUY7QUFDSS9FLGtCQUFVLENBQ05sQyxFQUFFMEYsa0JBQUY7QUFDSVAsaUJBQUtBLE9BQU8sSUFBUCxHQUFjQSxHQUFkLEdBQXVCQSxHQUF2QixhQURUO0FBRUlELGlCQUFLQSxHQUZUO0FBR0loRCxzQkFBVSxDQUFDNEMsT0FBRDtBQUhkLFdBSU9NLElBSlAsRUFETSxFQU9Ob0IsSUFQTTtBQURkLE9BVU9wQixJQVZQLEVBVko7QUFzQkg7O0FBRUQ7QUFDQTtBQUNBO0FBQ0EsSUFBTXhFLGFBQWEvQixpQkFBT2tCLEdBQVAsQ0FBV1MsS0FBWCxDQUFpQkssU0FBcEM7O0lBQ01vRyxrQjs7Ozs7Ozs7aUNBQ0ZuSSxRLHFCQUFTNkMsSSxFQUFNO0FBQUE7O0FBQUEsd0JBQzRCQSxLQUFLckMsR0FBTCxFQUQ1QjtBQUFBLFlBQ0p1QixTQURJLGFBQ0pBLFNBREk7QUFBQSxZQUNPcUIsUUFEUCxhQUNPQSxRQURQO0FBQUEsWUFDb0JrRCxJQURwQjs7QUFFWCxlQUFPcEYsRUFBRSxLQUFGLEVBQVNvRixJQUFULEVBQWVsRCxRQUFmLEVBQXlCdEI7QUFDNUIsMEJBQWM7QUFEYyx1QkFFM0JDLFNBRjJCLElBRWZBLFNBRmUsZUFBekIsQ0FBUDtBQUlILEs7OztFQVA0QmhDLGdCOztBQVVqQyxJQUFNcUksV0FBV3JJLGlCQUFPc0ksaUJBQVAsR0FDYnRJLGlCQUFPc0ksaUJBQVAsQ0FBeUJMLE9BQXpCLENBRGEsR0FDdUJBLE9BRHhDOztrQkFHZUksUTtRQUVLeEIsUSxHQUFad0IsUTtRQUFzQkUsWSxHQUFBQSxjO1FBQWNDLFksR0FBQUEsYzs7Ozs7OztBQ3BFNUM7QUFDQTtBQUNBO0FBQ0Esd0dBQXdHLFlBQVksU0FBUyxFQUFFO0FBQy9IO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFcUJBLFksV0FDaEJ4SSxpQkFBT0MsUUFBUCxFOzs7Ozs7OzsyQkFRREMsUSx1QkFBVztBQUNQLGVBQU87QUFDSHNFLHNCQUFVLEtBRFA7QUFFSGlFLDBCQUFjLElBRlg7O0FBSUhDLHNCQUFVO0FBSlAsU0FBUDtBQU1ILEs7OzJCQUVEbEksSyxvQkFBUTtBQUFBOztBQUNKO0FBQ0EsYUFBS3VHLEVBQUwsQ0FBUSxRQUFSLEVBQWtCLFlBQU07QUFDcEIsZ0JBQUksT0FBS3RHLEdBQUwsQ0FBUyxjQUFULENBQUosRUFBOEI7QUFDMUIsb0JBQU1rSSxXQUFXLE9BQUtDLHlCQUFMLEVBQWpCO0FBQ0FELHlCQUFTbEIsSUFBVCxDQUFjLElBQWQ7QUFDSDtBQUNKLFNBTEQ7QUFNSCxLOzsyQkFFRDNDLE0scUJBQVM7QUFDTCxZQUFNNUIsU0FBUyxLQUFLQSxNQUFMLEdBQWMsS0FBSzBGLHlCQUFMLENBQStCLElBQS9CLENBQTdCO0FBQ0ExRixlQUFPMkYsS0FBUCxDQUFhakQsSUFBYixDQUFrQixJQUFsQjtBQUNILEs7OzJCQUVETCxRLHFCQUFTL0IsQyxFQUFHO0FBQ1IsWUFBSSxLQUFLL0MsR0FBTCxDQUFTLFVBQVQsQ0FBSixFQUEwQjs7QUFFMUIsYUFBS3NGLE9BQUwsQ0FBYSxPQUFiLEVBQXNCdkMsQ0FBdEI7O0FBRUE7QUFDQSxZQUFJLEtBQUt1QixXQUFMLENBQWlCakIsR0FBakIsS0FBeUIrQyxrQkFBN0IsRUFBdUM7QUFDbkMsaUJBQUtkLE9BQUwsQ0FBYSxRQUFiLEVBQXVCLElBQXZCLEVBQTZCdkMsQ0FBN0I7QUFDSDtBQUNKLEs7OzJCQUVEc0YsYSwwQkFBY3RGLEMsRUFBRztBQUNiLGFBQUt1QyxPQUFMLENBQWEsWUFBYixFQUEyQnZDLENBQTNCOztBQUVBLFlBQUksS0FBSy9DLEdBQUwsQ0FBUyxVQUFULENBQUosRUFBMEI7O0FBRTFCLGFBQUt5QyxNQUFMLENBQVk2RixTQUFaLENBQXNCLElBQXRCO0FBQ0gsSzs7MkJBRURDLGEsMEJBQWN4RixDLEVBQUc7QUFDYixhQUFLdUMsT0FBTCxDQUFhLFlBQWIsRUFBMkJ2QyxDQUEzQjtBQUNBO0FBQ0gsSzs7MkJBRUR5RixNLHFCQUFTO0FBQ0w7QUFDQSxZQUFNckIsV0FBVyxLQUFLc0IsVUFBTCxFQUFqQjtBQUNBLFlBQUksQ0FBQ3RCLFFBQUwsRUFBZTtBQUNYLGlCQUFLN0IsT0FBTCxDQUFhLFFBQWIsRUFBdUIsSUFBdkI7QUFDSCxTQUZELE1BRU87QUFDSDZCLHFCQUFTTCxJQUFUO0FBQ0g7QUFDSixLOzsyQkFFRDRCLEssb0JBQVE7QUFDSixhQUFLekksR0FBTCxDQUFTLFVBQVQsRUFBcUIsSUFBckI7O0FBRUEsWUFBTTBJLFNBQVMsS0FBS25ELE9BQUwsQ0FBYW9ELHFCQUFiLEVBQWY7QUFDQSxZQUFNQyxNQUFNLEtBQUtwRyxNQUFMLENBQVlxRyxJQUFaLENBQWlCNUIsSUFBakIsQ0FBc0IxQixPQUFsQztBQUNBLFlBQU11RCxVQUFVRixJQUFJRCxxQkFBSixFQUFoQjtBQUNBLFlBQU1JLHlCQUF5QkwsT0FBT00sTUFBUCxHQUFnQkYsUUFBUUUsTUFBdkQ7QUFDQSxZQUFNQyxzQkFBc0JQLE9BQU9RLEdBQVAsR0FBYUosUUFBUUksR0FBakQ7O0FBRUEsWUFBSUgseUJBQXlCLENBQTdCLEVBQWdDO0FBQzVCSCxnQkFBSU8sU0FBSixJQUFpQkosc0JBQWpCO0FBQ0gsU0FGRCxNQUVPLElBQUlFLHNCQUFzQixDQUExQixFQUE2QjtBQUNoQ0wsZ0JBQUlPLFNBQUosSUFBaUJGLG1CQUFqQjtBQUNIO0FBQ0osSzs7MkJBRURHLE8sc0JBQVU7QUFDTixhQUFLcEosR0FBTCxDQUFTLFVBQVQsRUFBcUIsS0FBckI7O0FBRUEsWUFBTWtILFdBQVcsS0FBS3NCLFVBQUwsRUFBakI7QUFDQSxZQUFJdEIsUUFBSixFQUFjO0FBQ1ZBLHFCQUFTSCxJQUFULENBQWMsSUFBZCxFQUFvQixJQUFwQixFQUEwQixJQUExQjtBQUNIO0FBQ0osSzs7MkJBRURzQyxnQiwrQkFBbUI7QUFDZixZQUFNbkMsV0FBVyxLQUFLc0IsVUFBTCxFQUFqQjtBQUNBLFlBQUl0QixRQUFKLEVBQWM7QUFDVkEscUJBQVNMLElBQVQsQ0FBYyxJQUFkLEVBQW9CLElBQXBCLEVBQTBCLElBQTFCO0FBQ0g7QUFDSixLOzsyQkFFRHlDLFEsdUJBQVc7QUFDUCxZQUFNcEMsV0FBVyxLQUFLc0IsVUFBTCxFQUFqQjtBQUNBLFlBQUl0QixRQUFKLEVBQWM7QUFDVkEscUJBQVNILElBQVQsQ0FBYyxJQUFkLEVBQW9CLElBQXBCLEVBQTBCLElBQTFCO0FBQ0g7QUFDSixLOzsyQkFFRHlCLFUseUJBQWE7QUFDVCxZQUFJLEtBQUtuRSxXQUFMLENBQWlCakIsR0FBakIsS0FBeUIrQyxrQkFBN0IsRUFBdUM7QUFDbkMsbUJBQU8sS0FBSzlCLFdBQUwsQ0FBaUIxQixRQUF4QjtBQUNIO0FBQ0osSzs7MkJBRUR1Rix5QixzQ0FBMEJxQixPLEVBQVM7QUFDL0IsZUFBTyxnQ0FBb0IxQixjQUFwQixFQUFrQyxJQUFsQyxFQUF3QzBCLE9BQXhDLENBQVA7QUFDSCxLOzsyQkFFREMsUSx1QkFBVztBQUNQLFlBQU1yQixRQUFRLEtBQUszRixNQUFMLENBQVkyRixLQUExQjtBQUNBQSxjQUFNaEQsTUFBTixDQUFhZ0QsTUFBTWxELE9BQU4sQ0FBYyxJQUFkLENBQWIsRUFBa0MsQ0FBbEM7QUFDSCxLOzs7RUF2SHFDM0YsZ0IsV0FFL0JDLFEsR0FBV0EsYyxVQUVYVyxTLEdBQVk7QUFDZjRELGNBQVUzRCxPQURLO0FBRWY0SCxrQkFBYzVIO0FBRkMsQzs7Ozs7Ozs7a0JBSkYySCxZOzs7Ozs7Ozs7Ozs7O2tCQ0xOLFVBQVMxSCxHQUFULEVBQWNDLElBQWQsRUFBb0JDLE1BQXBCLEVBQTRCQyxPQUE1QixFQUFxQztBQUFBOztBQUNwREYsYUFBU0EsT0FBT0csR0FBaEI7QUFDQUosWUFBUUEsTUFBTSxFQUFkO0FBQ0FFLGVBQVdBLFNBQVMsRUFBcEI7QUFDQSxRQUFJRyxJQUFJSixLQUFLSyxJQUFMLENBQVVELENBQWxCO0FBQUEsUUFBcUJFLEtBQUtOLEtBQUtLLElBQUwsQ0FBVUMsRUFBcEM7QUFBQSxRQUF3Q0MsS0FBS1AsS0FBS0ssSUFBTCxDQUFVRSxFQUF2RDtBQUFBLFFBQTJEQyxVQUFVLFFBQVEsS0FBS0EsT0FBYixJQUF3QixFQUE3RjtBQUFBLFFBQWlHQyxVQUFVLEVBQTNHO0FBQUEsUUFBK0dDLFdBQVcsRUFBMUg7QUFBQSxRQUNBQyxNQUFNWCxLQUFLWSxLQURYO0FBQUEsUUFDa0JDLFNBQVNGLElBQUlFLE1BRC9CO0FBQUEsUUFDdUNDLEtBQUtILElBQUlJLEtBRGhEO0FBQUEsUUFDdURDLGFBQWFMLElBQUlNLFNBRHhFO0FBQUEsUUFFQUMsTUFBTVAsSUFBSVEsT0FGVjtBQUFBLFFBRW1CQyxZQUFZRixJQUFJRyxRQUZuQztBQUFBLFFBRTZDQyxZQUFZSixJQUFJSyxRQUY3RDtBQUFBLFFBR0FDLG9CQUFvQmIsSUFBSWMsZ0JBSHhCO0FBQUEsUUFHMENDLHlCQUF5QmYsSUFBSWdCLHFCQUh2RTtBQUFBLFFBSUFDLGtCQUFrQmpCLElBQUlrQixjQUp0QjtBQUFBLFFBS0FDLE9BQU8sS0FBS0MsSUFMWjtBQUFBLFFBS2tCQyxRQUFRLElBTDFCO0FBQUEsUUFLZ0NDLFFBQVFsQyxHQUx4QztBQUFBLFFBSzZDbUMsVUFBVUosUUFBUUEsS0FBS0ksT0FMcEU7QUFBQSxRQUs2RUMsU0FBUyxDQUFDakMsV0FBVyxFQUFaLEVBQWdCa0MsTUFMdEc7QUFNQTs7QUFWb0Qsb0JBWUZOLEtBQUtwQyxHQUFMLEVBWkU7QUFBQSxRQVk3QzRDLFFBWjZDLGFBWTdDQSxRQVo2QztBQUFBLFFBWW5DbUIsUUFabUMsYUFZbkNBLFFBWm1DO0FBQUEsUUFZekJ4QyxTQVp5QixhQVl6QkEsU0FaeUI7QUFBQSxRQVlkMEcsUUFaYyxhQVlkQSxRQVpjOztBQWNwRCxRQUFNbkY7QUFDRixrQkFBVSxJQURSO0FBRUYsc0JBQWNpQjtBQUZaLHFCQUdEeEMsU0FIQyxJQUdXQSxTQUhYLGdCQUlGLFNBSkUsSUFJUzBHLFFBSlQsZ0JBQU47O0FBT0EsV0FBT3ZILEVBQUUsS0FBRixFQUFTLEVBQUMsWUFBWSxZQUFXO0FBQUMsZ0JBQUk7QUFBQyx1QkFBTyxDQUFDMEIsS0FBSzBDLFFBQU4sRUFBaUIsQ0FBakIsQ0FBUDtBQUEyQixhQUFoQyxDQUFpQyxPQUFNL0IsQ0FBTixFQUFTO0FBQUMzQixtQkFBRzJCLENBQUg7QUFBTTtBQUFDLFNBQTlELENBQStEQyxJQUEvRCxDQUFvRSxJQUFwRSxDQUFiLEVBQXdGLGlCQUFpQixZQUFXO0FBQUMsZ0JBQUk7QUFBQyx1QkFBTyxDQUFDWixLQUFLaUcsYUFBTixFQUFzQixDQUF0QixDQUFQO0FBQWdDLGFBQXJDLENBQXNDLE9BQU10RixDQUFOLEVBQVM7QUFBQzNCLG1CQUFHMkIsQ0FBSDtBQUFNO0FBQUMsU0FBbkUsQ0FBb0VDLElBQXBFLENBQXlFLElBQXpFLENBQXpHLEVBQXlMLGlCQUFpQixZQUFXO0FBQUMsZ0JBQUk7QUFBQyx1QkFBTyxDQUFDWixLQUFLbUcsYUFBTixFQUFzQixDQUF0QixDQUFQO0FBQWdDLGFBQXJDLENBQXNDLE9BQU14RixDQUFOLEVBQVM7QUFBQzNCLG1CQUFHMkIsQ0FBSDtBQUFNO0FBQUMsU0FBbkUsQ0FBb0VDLElBQXBFLENBQXlFLElBQXpFLENBQTFNLEVBQVQsRUFBb1MsWUFBVztBQUFDLFlBQUk7QUFBQyxtQkFBTyxDQUFDSixRQUFELEVBQVksQ0FBWixDQUFQO0FBQXNCLFNBQTNCLENBQTRCLE9BQU1HLENBQU4sRUFBUztBQUFDM0IsZUFBRzJCLENBQUg7QUFBTTtBQUFDLEtBQXpELENBQTBEQyxJQUExRCxDQUErRCxJQUEvRCxDQUFwUyxFQUEwVzFCLFdBQVcsWUFBVztBQUFDLFlBQUk7QUFBQyxtQkFBTyxDQUFDd0IsWUFBRCxFQUFnQixDQUFoQixDQUFQO0FBQTBCLFNBQS9CLENBQWdDLE9BQU1DLENBQU4sRUFBUztBQUFDM0IsZUFBRzJCLENBQUg7QUFBTTtBQUFDLEtBQTdELENBQThEQyxJQUE5RCxDQUFtRSxJQUFuRSxDQUFYLENBQTFXLENBQVA7QUFDQyxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdkJEOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFcUI4RSxZLFdBQ2hCdkksaUJBQU9DLFFBQVAsRTs7Ozs7Ozs7MkJBR0RDLFEsdUJBQVc7QUFDUCxlQUFPO0FBQ0hxSCxrQkFBTSxLQURIO0FBRUh4QixxQkFBUyxPQUZOO0FBR0hvQyxzQkFBVSxFQUhQO0FBSUhnQyx3QkFBWTtBQUpULFNBQVA7QUFNSCxLOzsyQkFFRDNKLEssb0JBQVE7QUFDSixhQUFLNEosWUFBTCxHQUFvQixFQUFwQjtBQUNBLGFBQUt2QixLQUFMLEdBQWEsRUFBYjtBQUNBLGFBQUt3QixVQUFMLEdBQWtCLENBQUMsQ0FBbkI7QUFDQSxhQUFLQyxNQUFMLEdBQWMsS0FBZDtBQUNILEs7OzJCQUVEeEYsTSxxQkFBUztBQUNMLFlBQU01QixTQUFTLEtBQUtxSCx1QkFBTCxFQUFmO0FBQ0EsWUFBSXJILE1BQUosRUFBWUEsT0FBT2tILFlBQVAsQ0FBb0J4RSxJQUFwQixDQUF5QixJQUF6Qjs7QUFFWixZQUFJLEtBQUtuRixHQUFMLENBQVMsTUFBVCxDQUFKLEVBQXNCO0FBQ2xCLGlCQUFLK0osa0JBQUw7QUFDSDtBQUNKLEs7OzJCQUVERCx1QixzQ0FBMEI7QUFDdEIsZUFBTyxnQ0FBb0JoQyxZQUFwQixFQUFrQyxJQUFsQyxFQUF3QyxJQUF4QyxDQUFQO0FBQ0gsSzs7MkJBRURoQixJLG1CQUFPO0FBQ0hrRCxxQkFBYSxLQUFLQyxLQUFsQjtBQUNBLGFBQUtoSyxHQUFMLENBQVMsTUFBVCxFQUFpQixJQUFqQjtBQUNBLFlBQU13QyxTQUFTLEtBQUtxSCx1QkFBTCxFQUFmO0FBQ0EsWUFBSXJILE1BQUosRUFBWTtBQUNSQSxtQkFBT3FFLElBQVA7QUFDSDtBQUNKLEs7OzJCQUVERSxJLGlCQUFLTyxXLEVBQWE7QUFBQTs7QUFDZCxZQUFJLENBQUNBLFdBQUwsRUFBa0I7QUFDZCxpQkFBSzBDLEtBQUwsR0FBYUMsV0FBVyxZQUFNO0FBQzFCLHVCQUFLakssR0FBTCxDQUFTLE1BQVQsRUFBaUIsS0FBakI7QUFDSCxhQUZZLEVBRVYsR0FGVSxDQUFiO0FBR0gsU0FKRCxNQUlPO0FBQ0gsaUJBQUtBLEdBQUwsQ0FBUyxNQUFULEVBQWlCLEtBQWpCO0FBQ0g7QUFDSixLOzsyQkFFRGtLLE0scUJBQVM7QUFDTCxhQUFLbEssR0FBTCxDQUFTLE1BQVQsRUFBaUIsQ0FBQyxLQUFLRCxHQUFMLENBQVMsTUFBVCxDQUFsQjtBQUNILEs7OzJCQUVEMEgsUSx1QkFBVztBQUFBOztBQUNQLGdDQUFTLEtBQUtvQixJQUFMLENBQVU1QixJQUFWLENBQWUxQixPQUF4QjtBQUNJNEUsZ0JBQUksY0FEUjtBQUVJQyxnQkFBSSxlQUZSO0FBR0lDLGdCQUFJLEtBQUtuRCxRQUFMLENBQWMzQixPQUh0QjtBQUlJK0UsbUJBQU8sZUFBQ0MsUUFBRCxFQUFjO0FBQ2pCLHVCQUFLdkssR0FBTCxDQUFTLFlBQVQsRUFBdUIsMEJBQWN1SyxRQUFkLENBQXZCO0FBQ0g7QUFOTCxXQU9PLEtBQUt4SyxHQUFMLENBQVMsVUFBVCxDQVBQO0FBU0gsSzs7MkJBRUR5SyxPLHNCQUFVO0FBQ04sYUFBS2IsVUFBTCxHQUFrQixDQUFDLENBQW5CO0FBQ0EsYUFBS0csa0JBQUw7QUFDQSxhQUFLckMsUUFBTDtBQUNILEs7OzJCQUVEcUMsa0IsaUNBQXFCO0FBQ2pCLFlBQU10SCxTQUFTLEtBQUtxSCx1QkFBTCxFQUFmO0FBQ0EsWUFBSSxDQUFDckgsTUFBTCxFQUFhO0FBQ1Q7QUFDSWlJLHFCQUFTQyxnQkFBVCxDQUEwQixPQUExQixFQUFtQyxLQUFLQyxnQkFBeEM7QUFDSjtBQUNILFNBSkQsTUFJTztBQUNIbkksbUJBQU9vSCxNQUFQLEdBQWdCLElBQWhCO0FBQ0g7O0FBRURhLGlCQUFTQyxnQkFBVCxDQUEwQixTQUExQixFQUFxQyxLQUFLRSxVQUExQztBQUNILEs7OzJCQUVEQyxxQixvQ0FBd0I7QUFDcEIsWUFBTXJJLFNBQVMsS0FBS3FILHVCQUFMLEVBQWY7QUFDQSxZQUFJLENBQUNySCxNQUFMLEVBQWE7QUFDVDtBQUNJaUkscUJBQVNLLG1CQUFULENBQTZCLE9BQTdCLEVBQXNDLEtBQUtILGdCQUEzQztBQUNKO0FBQ0gsU0FKRCxNQUlPO0FBQ0huSSxtQkFBT29ILE1BQVAsR0FBZ0IsS0FBaEI7QUFDSDs7QUFFRGEsaUJBQVNLLG1CQUFULENBQTZCLFNBQTdCLEVBQXdDLEtBQUtGLFVBQTdDO0FBQ0gsSzs7MkJBRURELGdCLDZCQUFpQjdILEMsRUFBRztBQUNoQixZQUFNaUksU0FBU2pJLEVBQUVpSSxNQUFqQjtBQUNBLFlBQU05RCxPQUFPLEtBQUs0QixJQUFMLENBQVU1QixJQUFWLENBQWUxQixPQUE1Qjs7QUFFQTtBQUNBLFlBQUkwQixTQUFTOEQsTUFBVCxJQUFtQjlELEtBQUsrRCxRQUFMLENBQWNELE1BQWQsQ0FBdkIsRUFBOEM7QUFDOUM7QUFDQSxZQUFJLEtBQUtFLGVBQUwsQ0FBcUJGLE1BQXJCLEVBQTZCLEtBQUtyQixZQUFsQyxDQUFKLEVBQXFEO0FBQ3JEO0FBQ0EsWUFBSTVHLEVBQUVvSSxTQUFOLEVBQWlCOztBQUVqQixhQUFLbkUsSUFBTCxDQUFVLElBQVY7QUFDSCxLOzsyQkFFRDZELFUsdUJBQVc5SCxDLEVBQUc7QUFDVixZQUFJLEtBQUs4RyxNQUFULEVBQWlCO0FBQ2I7QUFDSDtBQUNELGdCQUFROUcsRUFBRXFJLE9BQVY7QUFDSTtBQUNBLGlCQUFLLEVBQUw7QUFDSSxxQkFBS0MsY0FBTCxDQUFvQnRJLENBQXBCO0FBQ0E7QUFDSjtBQUNBLGlCQUFLLEVBQUw7QUFDSSxxQkFBS3VJLGNBQUwsQ0FBb0J2SSxDQUFwQjtBQUNBO0FBQ0o7QUFDQSxpQkFBSyxFQUFMO0FBQ0kscUJBQUt3SSxZQUFMLENBQWtCeEksQ0FBbEI7QUFDQTtBQUNKO0FBQ0EsaUJBQUssRUFBTDtBQUNJLHFCQUFLeUksWUFBTCxDQUFrQnpJLENBQWxCO0FBQ0E7QUFDSjtBQUNBLGlCQUFLLEVBQUw7QUFDSSxxQkFBSzBJLFdBQUwsQ0FBaUIxSSxDQUFqQjtBQUNBO0FBcEJSO0FBc0JILEs7OzJCQUVEc0ksYywyQkFBZXRJLEMsRUFBRztBQUNkLFlBQU1OLFNBQVMsS0FBS3FILHVCQUFMLEVBQWY7QUFDQSxZQUFJckgsVUFBVSxLQUFLbUgsVUFBTCxHQUFrQixDQUFoQyxFQUFtQztBQUMvQjtBQUNIO0FBQ0Q3RyxVQUFFZ0MsY0FBRjtBQUNBLGFBQUt1QyxnQkFBTCxDQUFzQixLQUFLc0MsVUFBTCxHQUFrQixDQUF4QyxFQUEyQyxNQUEzQztBQUNILEs7OzJCQUVEMEIsYywyQkFBZXZJLEMsRUFBRztBQUNkLFlBQU1OLFNBQVMsS0FBS3FILHVCQUFMLEVBQWY7QUFDQSxZQUFJckgsVUFBVSxLQUFLbUgsVUFBTCxHQUFrQixDQUFoQyxFQUFtQztBQUMvQjtBQUNIO0FBQ0Q3RyxVQUFFZ0MsY0FBRjtBQUNBLGFBQUt1QyxnQkFBTCxDQUFzQixLQUFLc0MsVUFBTCxHQUFrQixDQUF4QyxFQUEyQyxJQUEzQztBQUNILEs7OzJCQUVEdEMsZ0IsNkJBQWlCckMsSyxFQUEyQjtBQUFBLFlBQXBCeUcsU0FBb0IsdUVBQVIsTUFBUTs7QUFDeEMsWUFBTXRELFFBQVEsS0FBS0EsS0FBbkI7QUFDQSxZQUFNdUQsTUFBTXZELE1BQU1qQyxNQUFOLEdBQWUsQ0FBM0I7QUFDQSxZQUFNeUYsV0FBVyxLQUFLaEMsVUFBdEI7O0FBRUEsaUJBQVNpQyxRQUFULENBQWtCNUcsS0FBbEIsRUFBeUI7QUFDckIsZ0JBQUlBLFFBQVEwRyxHQUFaLEVBQWlCO0FBQ2IxRyx3QkFBUSxDQUFSO0FBQ0gsYUFGRCxNQUVPLElBQUlBLFFBQVEsQ0FBWixFQUFlO0FBQ2xCQSx3QkFBUTBHLEdBQVI7QUFDSDtBQUNELG1CQUFPMUcsS0FBUDtBQUNIOztBQUVEQSxnQkFBUTRHLFNBQVM1RyxLQUFULENBQVI7O0FBRUEsWUFBSTZHLElBQUksQ0FBUjtBQUNBLGVBQU9BLEtBQUtILEdBQUwsSUFBWXZELE1BQU1uRCxLQUFOLENBQVosSUFBNEJtRCxNQUFNbkQsS0FBTixFQUFhakYsR0FBYixDQUFpQixVQUFqQixDQUFuQyxFQUFpRTtBQUM3RGlGLG9CQUFRNEcsU0FBU0gsY0FBYyxNQUFkLEdBQXVCekcsUUFBUSxDQUEvQixHQUFtQ0EsUUFBUSxDQUFwRCxDQUFSO0FBQ0E2RztBQUNIOztBQUVEO0FBQ0EsWUFBSUEsSUFBSUgsR0FBUixFQUFhOztBQUViLGFBQUsvQixVQUFMLEdBQWtCM0UsS0FBbEI7O0FBRUEsWUFBSTJHLFdBQVcsQ0FBQyxDQUFaLElBQWlCeEQsTUFBTXdELFFBQU4sQ0FBckIsRUFBc0M7QUFDbEN4RCxrQkFBTXdELFFBQU4sRUFBZ0J2QyxPQUFoQjtBQUNIOztBQUVEakIsY0FBTW5ELEtBQU4sRUFBYXlELEtBQWI7QUFDSCxLOzsyQkFFRCtDLFcsd0JBQVkxSSxDLEVBQUc7QUFDWCxhQUFLd0ksWUFBTCxDQUFrQnhJLENBQWxCO0FBQ0EsWUFBSSxLQUFLNkcsVUFBTCxHQUFrQixDQUFDLENBQXZCLEVBQTBCO0FBQ3RCN0csY0FBRWdDLGNBQUY7QUFDQSxpQkFBS3FELEtBQUwsQ0FBVyxLQUFLd0IsVUFBaEIsRUFBNEJwQixNQUE1QjtBQUNIO0FBQ0osSzs7MkJBRUQrQyxZLHlCQUFheEksQyxFQUFHO0FBQ1osWUFBTU4sU0FBUyxLQUFLcUgsdUJBQUwsRUFBZjtBQUNBLFlBQUksQ0FBQ3JILE1BQUQsSUFBVyxLQUFLbUgsVUFBTCxHQUFrQixDQUFqQyxFQUFvQzs7QUFFcEM3RyxVQUFFZ0MsY0FBRjtBQUNBLFlBQUl0QyxVQUFVLEtBQUttSCxVQUFMLEdBQWtCLENBQWhDLEVBQW1DO0FBQy9CLGlCQUFLdEMsZ0JBQUwsQ0FBc0IsQ0FBdEI7QUFDSCxTQUZELE1BRU8sSUFBSSxLQUFLc0MsVUFBTCxHQUFrQixDQUFDLENBQXZCLEVBQTBCO0FBQzdCLGlCQUFLeEIsS0FBTCxDQUFXLEtBQUt3QixVQUFoQixFQUE0Qk4sZ0JBQTVCO0FBQ0g7QUFDSixLOzsyQkFFRGtDLFkseUJBQWF6SSxDLEVBQUc7QUFDWixZQUFJLEtBQUs2RyxVQUFMLEdBQWtCLENBQUMsQ0FBdkIsRUFBMEI7QUFDdEI3RyxjQUFFZ0MsY0FBRjtBQUNBLGlCQUFLcUQsS0FBTCxDQUFXLEtBQUt3QixVQUFoQixFQUE0QkwsUUFBNUI7O0FBRUEsZ0JBQU05RyxTQUFTLGdDQUFvQnFGLFlBQXBCLEVBQWtDLElBQWxDLEVBQXdDLElBQXhDLENBQWY7QUFDQSxnQkFBSXJGLE1BQUosRUFBWTtBQUNSLHFCQUFLMEUsUUFBTCxDQUFjSCxJQUFkLENBQW1CLElBQW5CLEVBQXlCLElBQXpCLEVBQStCLElBQS9CO0FBQ0g7QUFDSjtBQUNKLEs7OzJCQUVEc0IsUyxzQkFBVXlELEksRUFBTTtBQUNaLFlBQU05RyxRQUFRLEtBQUttRCxLQUFMLENBQVdsRCxPQUFYLENBQW1CNkcsSUFBbkIsQ0FBZDtBQUNBLGFBQUt6RSxnQkFBTCxDQUFzQnJDLEtBQXRCO0FBQ0gsSzs7MkJBRURpRyxlLDRCQUFnQkYsTSxFQUFRZ0IsUSxFQUFVO0FBQzlCLFlBQUlDLE1BQU0sS0FBVjtBQUNBLGFBQUssSUFBSUgsSUFBSSxDQUFiLEVBQWdCQSxJQUFJRSxTQUFTN0YsTUFBN0IsRUFBcUMyRixHQUFyQyxFQUEwQztBQUN0QyxnQkFBTUksVUFBVUYsU0FBU0YsQ0FBVCxFQUFZaEQsSUFBWixDQUFpQjVCLElBQWpDO0FBQ0EsZ0JBQUlnRixPQUFKLEVBQWE7QUFDVCxvQkFBSWxCLFdBQVdrQixRQUFRMUcsT0FBbkIsSUFBOEIwRyxRQUFRMUcsT0FBUixDQUFnQnlGLFFBQWhCLENBQXlCRCxNQUF6QixDQUFsQyxFQUFvRTtBQUNoRWlCLDBCQUFNLElBQU47QUFDQTtBQUNILGlCQUhELE1BR087QUFDSEEsMEJBQU0sS0FBS2YsZUFBTCxDQUFxQkYsTUFBckIsRUFBNkJnQixTQUFTRixDQUFULEVBQVluQyxZQUF6QyxDQUFOO0FBQ0Esd0JBQUlzQyxHQUFKLEVBQVM7QUFDWjtBQUNKO0FBQ0o7QUFDRCxlQUFPQSxHQUFQO0FBQ0gsSzs7MkJBRUR4QyxRLHVCQUFXO0FBQ1AsWUFBTWhILFNBQVMsS0FBS3FILHVCQUFMLEVBQWY7QUFDQSxZQUFJckgsTUFBSixFQUFZO0FBQ1IsZ0JBQU1rSCxlQUFlbEgsT0FBT2tILFlBQTVCO0FBQ0FBLHlCQUFhdkUsTUFBYixDQUFvQnVFLGFBQWF6RSxPQUFiLENBQXFCLElBQXJCLENBQXBCLEVBQWdELENBQWhEO0FBQ0g7QUFDRDhFLHFCQUFhLEtBQUtDLEtBQWxCO0FBQ0EsYUFBS2EscUJBQUw7QUFDSCxLOzs7RUFoUXFDdkwsZ0IsV0FFL0JDLFEsR0FBV0EsYzs7Ozs7Ozs7a0JBRkRzSSxZOzs7Ozs7Ozs7Ozs7Ozs7OztrQkNKTixVQUFTekgsR0FBVCxFQUFjQyxJQUFkLEVBQW9CQyxNQUFwQixFQUE0QkMsT0FBNUIsRUFBcUM7QUFDcERGLGFBQVNBLE9BQU9HLEdBQWhCO0FBQ0FKLFlBQVFBLE1BQU0sRUFBZDtBQUNBRSxlQUFXQSxTQUFTLEVBQXBCO0FBQ0EsUUFBSUcsSUFBSUosS0FBS0ssSUFBTCxDQUFVRCxDQUFsQjtBQUFBLFFBQXFCRSxLQUFLTixLQUFLSyxJQUFMLENBQVVDLEVBQXBDO0FBQUEsUUFBd0NDLEtBQUtQLEtBQUtLLElBQUwsQ0FBVUUsRUFBdkQ7QUFBQSxRQUEyREMsVUFBVSxRQUFRLEtBQUtBLE9BQWIsSUFBd0IsRUFBN0Y7QUFBQSxRQUFpR0MsVUFBVSxFQUEzRztBQUFBLFFBQStHQyxXQUFXLEVBQTFIO0FBQUEsUUFDQUMsTUFBTVgsS0FBS1ksS0FEWDtBQUFBLFFBQ2tCQyxTQUFTRixJQUFJRSxNQUQvQjtBQUFBLFFBQ3VDQyxLQUFLSCxJQUFJSSxLQURoRDtBQUFBLFFBQ3VEQyxhQUFhTCxJQUFJTSxTQUR4RTtBQUFBLFFBRUFDLE1BQU1QLElBQUlRLE9BRlY7QUFBQSxRQUVtQkMsWUFBWUYsSUFBSUcsUUFGbkM7QUFBQSxRQUU2Q0MsWUFBWUosSUFBSUssUUFGN0Q7QUFBQSxRQUdBQyxvQkFBb0JiLElBQUljLGdCQUh4QjtBQUFBLFFBRzBDQyx5QkFBeUJmLElBQUlnQixxQkFIdkU7QUFBQSxRQUlBQyxrQkFBa0JqQixJQUFJa0IsY0FKdEI7QUFBQSxRQUtBQyxPQUFPLEtBQUtDLElBTFo7QUFBQSxRQUtrQkMsUUFBUSxJQUwxQjtBQUFBLFFBS2dDQyxRQUFRbEMsR0FMeEM7QUFBQSxRQUs2Q21DLFVBQVVKLFFBQVFBLEtBQUtJLE9BTHBFO0FBQUEsUUFLNkVDLFNBQVMsQ0FBQ2pDLFdBQVcsRUFBWixFQUFnQmtDLE1BTHRHOztBQUpvRCxvQkFZS04sS0FBS3BDLEdBQUwsRUFaTDtBQUFBLFFBWTdDNEMsUUFaNkMsYUFZN0NBLFFBWjZDO0FBQUEsUUFZbkNrRSxJQVptQyxhQVluQ0EsSUFabUM7QUFBQSxRQVk3QnhCLE9BWjZCLGFBWTdCQSxPQVo2QjtBQUFBLFFBWXBCL0QsU0Fab0IsYUFZcEJBLFNBWm9CO0FBQUEsUUFZVG1JLFVBWlMsYUFZVEEsVUFaUzs7QUFjcEQsUUFBTXlDLFNBQVMsRUFBZjtBQUNBO0FBQ0E7QUFDQUEsV0FBTyxlQUFQLElBQTBCL0osS0FBSzBFLElBQS9CO0FBQ0EsUUFBSXhCLFlBQVksT0FBaEIsRUFBeUI7QUFDckI2RyxlQUFPLGVBQVAsSUFBMEIvSixLQUFLNEUsSUFBTCxDQUFVRCxJQUFWLENBQWUzRSxJQUFmLEVBQXFCLEtBQXJCLENBQTFCO0FBQ0g7O0FBRUQsV0FBTzFCLEVBQUUwTCxxQkFBRixFQUFlLEVBQUMsV0FBVyxZQUFXO0FBQUMsZ0JBQUk7QUFBQyx1QkFBTyxDQUFDaEssSUFBRCxFQUFRLENBQVIsQ0FBUDtBQUFrQixhQUF2QixDQUF3QixPQUFNVyxDQUFOLEVBQVM7QUFBQzNCLG1CQUFHMkIsQ0FBSDtBQUFNO0FBQUMsU0FBckQsQ0FBc0RDLElBQXRELENBQTJELElBQTNELENBQVosRUFBOEUsWUFBWSxZQUFXO0FBQUMsZ0JBQUk7QUFBQyx1QkFBTyxDQUFDOEQsSUFBRCxFQUFRLENBQVIsQ0FBUDtBQUFrQixhQUF2QixDQUF3QixPQUFNL0QsQ0FBTixFQUFTO0FBQUMzQixtQkFBRzJCLENBQUg7QUFBTTtBQUFDLFNBQXJELENBQXNEQyxJQUF0RCxDQUEyRCxJQUEzRCxJQUFtRXRDLEVBQUU4QixPQUFGLDJCQUFZLGFBQWFsQixXQUFXLFlBQVc7QUFBQyxvQkFBSTtBQUFBOztBQUFDLDJCQUFPLFdBQUUsbUJBQW1CLElBQXJCLFNBQTRCQyxTQUE1QixJQUF3Q0EsU0FBeEMsU0FBcUQsQ0FBckQsQ0FBUDtBQUErRCxpQkFBcEUsQ0FBcUUsT0FBTXdCLENBQU4sRUFBUztBQUFDM0IsdUJBQUcyQixDQUFIO0FBQU07QUFBQyxhQUFsRyxDQUFtR0MsSUFBbkcsQ0FBd0csSUFBeEcsQ0FBWCxDQUF6QixFQUFvSixnQkFBZ0IsWUFBVztBQUFDLG9CQUFJO0FBQUMsMkJBQU8sQ0FBQzBHLFVBQUQsRUFBYyxDQUFkLENBQVA7QUFBd0IsaUJBQTdCLENBQThCLE9BQU0zRyxDQUFOLEVBQVM7QUFBQzNCLHVCQUFHMkIsQ0FBSDtBQUFNO0FBQUMsYUFBM0QsQ0FBNERDLElBQTVELENBQWlFLElBQWpFLENBQXBLLElBQStPLFlBQVc7QUFBQyxnQkFBSTtBQUFDLHVCQUFPLENBQUNtSixNQUFELEVBQVUsQ0FBVixDQUFQO0FBQW9CLGFBQXpCLENBQTBCLE9BQU1wSixDQUFOLEVBQVM7QUFBQzNCLG1CQUFHMkIsQ0FBSDtBQUFNO0FBQUMsU0FBdkQsQ0FBd0RDLElBQXhELENBQTZELElBQTdELENBQS9PLElBQW1ULGtCQUFrQixZQUFXO0FBQUMsb0JBQUk7QUFBQywyQkFBTyxDQUFDLEtBQUQsRUFBUyxDQUFULENBQVA7QUFBbUIsaUJBQXhCLENBQXlCLE9BQU1ELENBQU4sRUFBUztBQUFDM0IsdUJBQUcyQixDQUFIO0FBQU07QUFBQyxhQUF0RCxDQUF1REMsSUFBdkQsQ0FBNEQsSUFBNUQsQ0FBclUsRUFBd1ksaUJBQWlCLFlBQVc7QUFBQyxvQkFBSTtBQUFDLDJCQUFPLENBQUNaLEtBQUswSSxxQkFBTixFQUE4QixDQUE5QixDQUFQO0FBQXdDLGlCQUE3QyxDQUE4QyxPQUFNL0gsQ0FBTixFQUFTO0FBQUMzQix1QkFBRzJCLENBQUg7QUFBTTtBQUFDLGFBQTNFLENBQTRFQyxJQUE1RSxDQUFpRixJQUFqRixDQUF6WixFQUFpZixlQUFlLFlBQVc7QUFBQyxvQkFBSTtBQUFDLDJCQUFPLENBQUNaLEtBQUtxSSxPQUFOLEVBQWdCLENBQWhCLENBQVA7QUFBMEIsaUJBQS9CLENBQWdDLE9BQU0xSCxDQUFOLEVBQVM7QUFBQzNCLHVCQUFHMkIsQ0FBSDtBQUFNO0FBQUMsYUFBN0QsQ0FBOERDLElBQTlELENBQW1FLElBQW5FLENBQWhnQixFQUEwa0IsWUFBWSxZQUFXO0FBQUMsb0JBQUk7QUFBQywyQkFBTyxDQUFDSixRQUFELEVBQVksQ0FBWixDQUFQO0FBQXNCLGlCQUEzQixDQUE0QixPQUFNRyxDQUFOLEVBQVM7QUFBQzNCLHVCQUFHMkIsQ0FBSDtBQUFNO0FBQUMsYUFBekQsQ0FBMERDLElBQTFELENBQStELElBQS9ELENBQXRsQixFQUE0cEIsWUFBWVYsS0FBeHFCLEtBQWdyQixJQUFockIsRUFBc3JCLElBQXRyQixFQUE0ckIsSUFBNXJCLEVBQWtzQixVQUFTd0osQ0FBVCxFQUFZO0FBQUNoTCxvQkFBUSxNQUFSLElBQWtCZ0wsQ0FBbEI7QUFBb0IsU0FBbnVCLENBQW5FLEdBQTB5QmxNLFNBQXA0QixFQUErNEIsWUFBWTBDLEtBQTM1QixFQUFmLEVBQWs3QixJQUFsN0IsRUFBdzdCLElBQXg3QixFQUE4N0IsSUFBOTdCLEVBQW84QixVQUFTd0osQ0FBVCxFQUFZO0FBQUNoTCxnQkFBUSxTQUFSLElBQXFCZ0wsQ0FBckI7QUFBdUIsS0FBeCtCLENBQVA7QUFDQyxDOztBQXhCRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FBOzs7O0FBQ0E7Ozs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRXFCTyxLLFdBQ2hCOU0saUJBQU9DLFE7Ozs7Ozs7O29CQVdSQyxRLHVCQUFXO0FBQ1AsZUFBTztBQUNIaUUsa0JBQU0sTUFESCxFQUNXO0FBQ2RTLGtCQUFNdkUsU0FGSDtBQUdIRCxtQkFBT0MsU0FISjtBQUlIME0sMEJBQWMxTSxTQUpYO0FBS0gyTSx5QkFBYTNNLFNBTFY7QUFNSDRNLHNCQUFVLEtBTlA7QUFPSEMsdUJBQVcsS0FQUjtBQVFIMUksc0JBQVUsS0FSUDtBQVNISixrQkFBTSxTQVRIO0FBVUgrSSxrQkFBTSxDQVZIO0FBV0hDLHdCQUFZLEtBWFQ7QUFZSEMsdUJBQVcsS0FaUjtBQWFIL0osbUJBQU8sS0FiSjtBQWNIZ0ssbUJBQU9qTixTQWRKO0FBZUh3RSxzQkFBVXhFLFNBZlA7QUFnQkhrTiwwQkFBY2xOO0FBaEJYLFNBQVA7QUFrQkgsSzs7b0JBRURHLEssb0JBQVE7QUFDSixhQUFLdUcsRUFBTCxDQUFRLGdCQUFSLEVBQTBCLEtBQUt5RyxZQUEvQjtBQUNBLGFBQUt6RyxFQUFMLENBQVEsc0JBQVIsRUFBZ0MsS0FBS3lHLFlBQXJDO0FBQ0gsSzs7b0JBRUQxSSxNLHFCQUFTO0FBQ0wsYUFBSzBJLFlBQUw7QUFDSCxLOztvQkFFREEsWSwyQkFBZTtBQUNYLFlBQUksS0FBSy9NLEdBQUwsQ0FBUyxXQUFULENBQUosRUFBMkI7QUFDdkIsZ0JBQU02TSxRQUFRLEtBQUsvRCxJQUFMLENBQVVrRSxJQUFWLENBQWVDLFdBQWYsSUFBOEIsQ0FBNUM7QUFDQSxpQkFBS25FLElBQUwsQ0FBVW9FLEtBQVYsQ0FBZ0J2SyxLQUFoQixDQUFzQmtLLEtBQXRCLEdBQWlDQSxRQUFRLENBQXpDO0FBQ0g7QUFDSixLOztvQkFFRE0sSyxrQkFBTXBLLEMsRUFBRztBQUNMLGFBQUs5QyxHQUFMLENBQVMsT0FBVCxFQUFrQixFQUFsQjtBQUNBLGFBQUt5SSxLQUFMO0FBQ0EsYUFBS3BELE9BQUwsQ0FBYSxPQUFiLEVBQXNCdkMsQ0FBdEI7QUFDSCxLOztvQkFFRHlGLE0scUJBQVM7QUFDTCxnQ0FBWSxLQUFLTSxJQUFMLENBQVVvRSxLQUF0QjtBQUNILEs7O29CQUVEeEUsSyxvQkFBUTtBQUNKLGFBQUtJLElBQUwsQ0FBVW9FLEtBQVYsQ0FBZ0J4RSxLQUFoQjtBQUNILEs7O29CQUVEMEUsUSxxQkFBU3JLLEMsRUFBRztBQUNSLGFBQUs5QyxHQUFMLENBQVMsT0FBVCxFQUFrQjhDLEVBQUVpSSxNQUFGLENBQVNyTCxLQUEzQjtBQUNBLGFBQUsyRixPQUFMLENBQWEsT0FBYixFQUFzQnZDLENBQXRCO0FBQ0gsSzs7b0JBRURzSyxXLHdCQUFZbEosSSxFQUFNcEIsQyxFQUFHO0FBQ2pCLGFBQUt1QyxPQUFMLENBQWFuQixJQUFiLEVBQW1CcEIsQ0FBbkI7QUFDSCxLOzs7RUF0RThCeEQsZ0IsV0FFeEJDLFEsR0FBV0EsZSxVQUVYVyxTLEdBQVk7QUFDZnVELFVBQU1nQyxNQURTO0FBRWY4RyxjQUFVcE0sT0FGSztBQUdmcU0sZUFBV3JNLE9BSEk7QUFJZjJELGNBQVUzRCxPQUpLO0FBS2Z5QyxXQUFPekM7QUFMUSxDOzs7Ozs7OztrQkFKRmlNLEs7UUF5RWJBLEssR0FBQUEsSzs7Ozs7OztBQy9FUjtBQUNBO0FBQ0E7QUFDQSx3R0FBd0csWUFBWSxTQUFTLEVBQUU7QUFDL0g7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztrQkNMZSxVQUFTaE0sR0FBVCxFQUFjQyxJQUFkLEVBQW9CQyxNQUFwQixFQUE0QkMsT0FBNUIsRUFBcUM7QUFBQTs7QUFDcERGLGFBQVNBLE9BQU9HLEdBQWhCO0FBQ0FKLFlBQVFBLE1BQU0sRUFBZDtBQUNBRSxlQUFXQSxTQUFTLEVBQXBCO0FBQ0EsUUFBSUcsSUFBSUosS0FBS0ssSUFBTCxDQUFVRCxDQUFsQjtBQUFBLFFBQXFCRSxLQUFLTixLQUFLSyxJQUFMLENBQVVDLEVBQXBDO0FBQUEsUUFBd0NDLEtBQUtQLEtBQUtLLElBQUwsQ0FBVUUsRUFBdkQ7QUFBQSxRQUEyREMsVUFBVSxRQUFRLEtBQUtBLE9BQWIsSUFBd0IsRUFBN0Y7QUFBQSxRQUFpR0MsVUFBVSxFQUEzRztBQUFBLFFBQStHQyxXQUFXLEVBQTFIO0FBQUEsUUFDQUMsTUFBTVgsS0FBS1ksS0FEWDtBQUFBLFFBQ2tCQyxTQUFTRixJQUFJRSxNQUQvQjtBQUFBLFFBQ3VDQyxLQUFLSCxJQUFJSSxLQURoRDtBQUFBLFFBQ3VEQyxhQUFhTCxJQUFJTSxTQUR4RTtBQUFBLFFBRUFDLE1BQU1QLElBQUlRLE9BRlY7QUFBQSxRQUVtQkMsWUFBWUYsSUFBSUcsUUFGbkM7QUFBQSxRQUU2Q0MsWUFBWUosSUFBSUssUUFGN0Q7QUFBQSxRQUdBQyxvQkFBb0JiLElBQUljLGdCQUh4QjtBQUFBLFFBRzBDQyx5QkFBeUJmLElBQUlnQixxQkFIdkU7QUFBQSxRQUlBQyxrQkFBa0JqQixJQUFJa0IsY0FKdEI7QUFBQSxRQUtBQyxPQUFPLEtBQUtDLElBTFo7QUFBQSxRQUtrQkMsUUFBUSxJQUwxQjtBQUFBLFFBS2dDQyxRQUFRbEMsR0FMeEM7QUFBQSxRQUs2Q21DLFVBQVVKLFFBQVFBLEtBQUtJLE9BTHBFO0FBQUEsUUFLNkVDLFNBQVMsQ0FBQ2pDLFdBQVcsRUFBWixFQUFnQmtDLE1BTHRHOztBQUpvRCxvQkFpQmhETixLQUFLcEMsR0FBTCxFQWpCZ0Q7QUFBQSxRQWFoRDBELElBYmdELGFBYWhEQSxJQWJnRDtBQUFBLFFBYTFDUyxJQWIwQyxhQWExQ0EsSUFiMEM7QUFBQSxRQWFwQ3hFLEtBYm9DLGFBYXBDQSxLQWJvQztBQUFBLFFBYTdCNE0sV0FiNkIsYUFhN0JBLFdBYjZCO0FBQUEsUUFhaEJuSSxRQWJnQixhQWFoQkEsUUFiZ0I7QUFBQSxRQWNoRG9JLFFBZGdELGFBY2hEQSxRQWRnRDtBQUFBLFFBY3RDQyxTQWRzQyxhQWN0Q0EsU0Fkc0M7QUFBQSxRQWMzQjFJLFFBZDJCLGFBYzNCQSxRQWQyQjtBQUFBLFFBY2pCSixJQWRpQixhQWNqQkEsSUFkaUI7QUFBQSxRQWVoRCtJLElBZmdELGFBZWhEQSxJQWZnRDtBQUFBLFFBZTFDQyxVQWYwQyxhQWUxQ0EsVUFmMEM7QUFBQSxRQWU5QkwsWUFmOEIsYUFlOUJBLFlBZjhCO0FBQUEsUUFlaEIzSixLQWZnQixhQWVoQkEsS0FmZ0I7QUFBQSxRQWdCaERwQixTQWhCZ0QsYUFnQmhEQSxTQWhCZ0Q7QUFBQSxRQWdCckNxTCxTQWhCcUMsYUFnQnJDQSxTQWhCcUM7QUFBQSxRQWdCMUIvSixLQWhCMEIsYUFnQjFCQSxLQWhCMEI7QUFBQSxRQWdCbkJnSyxLQWhCbUIsYUFnQm5CQSxLQWhCbUI7QUFBQSxRQWdCWkMsWUFoQlksYUFnQlpBLFlBaEJZOztBQW1CcEQsUUFBTWhLO0FBQ0YsbUJBQVc7QUFEVCw0QkFFSWEsSUFGSixJQUVhQSxTQUFTLFNBRnRCLGdCQUdGLFNBSEUsSUFHU3BELE9BQU8rTSxPQUFQLElBQWtCL00sT0FBT2dOLE1BSGxDLGdCQUlGLFlBSkUsSUFJWXhKLFFBSlosZ0JBS0YsZUFMRSxJQUtleEQsT0FBT2lOLE1BTHRCLGdCQU1GLGVBTkUsSUFNZWpOLE9BQU9rTixNQU50QixnQkFPRixhQVBFLElBT2FoQixTQVBiLGdCQVFGLGNBUkUsSUFRY0csU0FSZCxnQkFTRixTQVRFLElBU1MvSixLQVRULGdCQVVEdEIsU0FWQyxJQVVXQSxTQVZYLGdCQUFOOztBQWFBLFFBQU00SyxTQUFTLENBQ1gsU0FEVyxFQUNBLE9BREEsRUFDUyxRQURULEVBRVgsVUFGVyxFQUVDLE9BRkQsRUFFVSxNQUZWLEVBR2J1QixNQUhhLENBR04sVUFBQ0MsSUFBRCxFQUFPeEosSUFBUCxFQUFnQjtBQUNyQndKLHFCQUFXeEosSUFBWCxJQUFxQi9CLEtBQUtpTCxXQUFMLENBQWlCdEcsSUFBakIsQ0FBc0IzRSxJQUF0QixFQUE0QitCLElBQTVCLENBQXJCO0FBQ0EsZUFBT3dKLElBQVA7QUFDSCxLQU5jLEVBTVosRUFOWSxDQUFmOztBQVFBLFFBQU1DLGdCQUFnQixDQUNsQixPQURrQixFQUNULFlBRFMsRUFDSyxZQURMLEVBRXBCRixNQUZvQixDQUViLFVBQUNDLElBQUQsRUFBT3hKLElBQVAsRUFBZ0I7QUFDckJ3SixxQkFBV3hKLElBQVgsSUFBcUIvQixLQUFLaUwsV0FBTCxDQUFpQnRHLElBQWpCLENBQXNCM0UsSUFBdEIsRUFBNEIrQixJQUE1QixDQUFyQjtBQUNBLGVBQU93SixJQUFQO0FBQ0gsS0FMcUIsRUFLbkIsRUFMbUIsQ0FBdEI7O0FBT0EsV0FBT2pOLEVBQUUsS0FBRiwyQkFBVSxTQUFTLFlBQVc7QUFBQyxnQkFBSTtBQUFDLHVCQUFPLENBQUNtTSxTQUFTLElBQVQsR0FBZ0IscUJBQVNsSyxLQUFULEVBQWdCLEVBQUNrSyxPQUFVQSxLQUFWLE9BQUQsRUFBaEIsQ0FBaEIsR0FBeURsSyxLQUExRCxFQUFrRSxDQUFsRSxDQUFQO0FBQTRFLGFBQWpGLENBQWtGLE9BQU1JLENBQU4sRUFBUztBQUFDM0IsbUJBQUcyQixDQUFIO0FBQU07QUFBQyxTQUEvRyxDQUFnSEMsSUFBaEgsQ0FBcUgsSUFBckgsQ0FBbkIsSUFBa0osWUFBVztBQUFDLFlBQUk7QUFBQyxtQkFBTyxDQUFDNEssYUFBRCxFQUFpQixDQUFqQixDQUFQO0FBQTJCLFNBQWhDLENBQWlDLE9BQU03SyxDQUFOLEVBQVM7QUFBQzNCLGVBQUcyQixDQUFIO0FBQU07QUFBQyxLQUE5RCxDQUErREMsSUFBL0QsQ0FBb0UsSUFBcEUsQ0FBbEosR0FBOE4sQ0FBQyxZQUFXO0FBQUMsWUFBSTtBQUFDLG1CQUFPLENBQUN6QyxPQUFPK00sT0FBUixFQUFrQixDQUFsQixDQUFQO0FBQTRCLFNBQWpDLENBQWtDLE9BQU12SyxDQUFOLEVBQVM7QUFBQzNCLGVBQUcyQixDQUFIO0FBQU07QUFBQyxLQUEvRCxDQUFnRUMsSUFBaEUsQ0FBcUUsSUFBckUsSUFBNkV0QyxFQUFFLEtBQUYsRUFBUyxJQUFULEVBQWUsQ0FBQ0ssUUFBUSxTQUFSLElBQXFCLFVBQVMwQixNQUFULEVBQWlCO0FBQUMsZUFBTyxJQUFQO0FBQWEsS0FBckQsTUFBMkR6QixTQUFTLFNBQVQsSUFBc0IsVUFBU3lCLE1BQVQsRUFBaUI7QUFDcGEsWUFBSUwsT0FBTyxJQUFYO0FBQ0EsZUFBTzdCLE9BQU8sU0FBUCxJQUFvQkEsT0FBTyxTQUFQLEVBQWtCeUMsSUFBbEIsQ0FBdUIsSUFBdkIsRUFBNkIsWUFBVztBQUNuRSxtQkFBT2pDLFFBQVEsU0FBUixFQUFtQmlDLElBQW5CLENBQXdCWixJQUF4QixFQUE4QkssTUFBOUIsQ0FBUDtBQUNDLFNBRjBCLENBQXBCLEdBRUYxQixRQUFRLFNBQVIsRUFBbUJpQyxJQUFuQixDQUF3QixJQUF4QixFQUE4QlAsTUFBOUIsQ0FGTDtBQUdDLEtBTGlVLEtBSzVUekIsU0FBUyxTQUFULEVBQW9CZ0MsSUFBcEIsQ0FBeUIsSUFBekIsQ0FMNlMsRUFLN1EsV0FMNlEsQ0FBN0UsR0FLakxwRCxTQUxnTCxFQUtyS2MsRUFBRSxLQUFGLEVBQVMsSUFBVCxFQUFlLENBQUMsWUFBVztBQUFDLFlBQUk7QUFBQyxtQkFBTyxDQUFDSCxPQUFPaU4sTUFBUixFQUFpQixDQUFqQixDQUFQO0FBQTJCLFNBQWhDLENBQWlDLE9BQU16SyxDQUFOLEVBQVM7QUFBQzNCLGVBQUcyQixDQUFIO0FBQU07QUFBQyxLQUE5RCxDQUErREMsSUFBL0QsQ0FBb0UsSUFBcEUsSUFBNEV0QyxFQUFFLEtBQUYsRUFBUyxJQUFULEVBQWUsQ0FBQ0ssUUFBUSxRQUFSLElBQW9CLFVBQVMwQixNQUFULEVBQWlCO0FBQUMsZUFBTyxJQUFQO0FBQWEsS0FBcEQsTUFBMER6QixTQUFTLFFBQVQsSUFBcUIsVUFBU3lCLE1BQVQsRUFBaUI7QUFDM1EsWUFBSUwsT0FBTyxJQUFYO0FBQ0EsZUFBTzdCLE9BQU8sUUFBUCxJQUFtQkEsT0FBTyxRQUFQLEVBQWlCeUMsSUFBakIsQ0FBc0IsSUFBdEIsRUFBNEIsWUFBVztBQUNqRSxtQkFBT2pDLFFBQVEsUUFBUixFQUFrQmlDLElBQWxCLENBQXVCWixJQUF2QixFQUE2QkssTUFBN0IsQ0FBUDtBQUNDLFNBRnlCLENBQW5CLEdBRUYxQixRQUFRLFFBQVIsRUFBa0JpQyxJQUFsQixDQUF1QixJQUF2QixFQUE2QlAsTUFBN0IsQ0FGTDtBQUdDLEtBTDBLLEtBS3JLekIsU0FBUyxRQUFULEVBQW1CZ0MsSUFBbkIsQ0FBd0IsSUFBeEIsQ0FMc0osRUFLdkgsVUFMdUgsQ0FBNUUsR0FLN0JwRCxTQUw0QixFQUtqQixZQUFXO0FBQUMsWUFBSTtBQUFDLG1CQUFPLENBQUM4RCxTQUFTLFVBQVYsRUFBdUIsQ0FBdkIsQ0FBUDtBQUFpQyxTQUF0QyxDQUF1QyxPQUFNWCxDQUFOLEVBQVM7QUFBQzNCLGVBQUcyQixDQUFIO0FBQU07QUFBQyxLQUFwRSxDQUFxRUMsSUFBckUsQ0FBMEUsSUFBMUUsSUFBa0Z0QyxFQUFFLE9BQUYsMkJBQVksUUFBUSxZQUFXO0FBQUMsZ0JBQUk7QUFBQyx1QkFBTyxDQUFDZ0QsSUFBRCxFQUFRLENBQVIsQ0FBUDtBQUFrQixhQUF2QixDQUF3QixPQUFNWCxDQUFOLEVBQVM7QUFBQzNCLG1CQUFHMkIsQ0FBSDtBQUFNO0FBQUMsU0FBckQsQ0FBc0RDLElBQXRELENBQTJELElBQTNELENBQXBCLEVBQXNGLFFBQVEsWUFBVztBQUFDLGdCQUFJO0FBQUMsdUJBQU8sQ0FBQ21CLElBQUQsRUFBUSxDQUFSLENBQVA7QUFBa0IsYUFBdkIsQ0FBd0IsT0FBTXBCLENBQU4sRUFBUztBQUFDM0IsbUJBQUcyQixDQUFIO0FBQU07QUFBQyxTQUFyRCxDQUFzREMsSUFBdEQsQ0FBMkQsSUFBM0QsQ0FBOUYsRUFBZ0ssU0FBUyxZQUFXO0FBQUMsZ0JBQUk7QUFBQyx1QkFBTyxDQUFDckQsS0FBRCxFQUFTLENBQVQsQ0FBUDtBQUFtQixhQUF4QixDQUF5QixPQUFNb0QsQ0FBTixFQUFTO0FBQUMzQixtQkFBRzJCLENBQUg7QUFBTTtBQUFDLFNBQXRELENBQXVEQyxJQUF2RCxDQUE0RCxJQUE1RCxDQUF6SyxFQUE0TyxZQUFZLFlBQVc7QUFBQyxnQkFBSTtBQUFDLHVCQUFPLENBQUNaLEtBQUtnTCxRQUFOLEVBQWlCLENBQWpCLENBQVA7QUFBMkIsYUFBaEMsQ0FBaUMsT0FBTXJLLENBQU4sRUFBUztBQUFDM0IsbUJBQUcyQixDQUFIO0FBQU07QUFBQyxTQUE5RCxDQUErREMsSUFBL0QsQ0FBb0UsSUFBcEUsQ0FBeFAsRUFBbVUsZ0JBQWdCLFlBQVc7QUFBQyxnQkFBSTtBQUFDLHVCQUFPLENBQUNzSixZQUFELEVBQWdCLENBQWhCLENBQVA7QUFBMEIsYUFBL0IsQ0FBZ0MsT0FBTXZKLENBQU4sRUFBUztBQUFDM0IsbUJBQUcyQixDQUFIO0FBQU07QUFBQyxTQUE3RCxDQUE4REMsSUFBOUQsQ0FBbUUsSUFBbkUsQ0FBblYsRUFBNlosWUFBWSxZQUFXO0FBQUMsZ0JBQUk7QUFBQyx1QkFBTyxDQUFDd0osUUFBRCxFQUFZLENBQVosQ0FBUDtBQUFzQixhQUEzQixDQUE0QixPQUFNekosQ0FBTixFQUFTO0FBQUMzQixtQkFBRzJCLENBQUg7QUFBTTtBQUFDLFNBQXpELENBQTBEQyxJQUExRCxDQUErRCxJQUEvRCxDQUF6YSxFQUErZSxlQUFlLFlBQVc7QUFBQyxnQkFBSTtBQUFDLHVCQUFPLENBQUN1SixXQUFELEVBQWUsQ0FBZixDQUFQO0FBQXlCLGFBQTlCLENBQStCLE9BQU14SixDQUFOLEVBQVM7QUFBQzNCLG1CQUFHMkIsQ0FBSDtBQUFNO0FBQUMsU0FBNUQsQ0FBNkRDLElBQTdELENBQWtFLElBQWxFLENBQTlmLEVBQXVrQixZQUFZLFlBQVc7QUFBQyxnQkFBSTtBQUFDLHVCQUFPLENBQUNlLFFBQUQsRUFBWSxDQUFaLENBQVA7QUFBc0IsYUFBM0IsQ0FBNEIsT0FBTWhCLENBQU4sRUFBUztBQUFDM0IsbUJBQUcyQixDQUFIO0FBQU07QUFBQyxTQUF6RCxDQUEwREMsSUFBMUQsQ0FBK0QsSUFBL0QsQ0FBbmxCLEVBQXlwQixZQUFZLFlBQVc7QUFBQyxnQkFBSTtBQUFDLHVCQUFPLENBQUNvQixRQUFELEVBQVksQ0FBWixDQUFQO0FBQXNCLGFBQTNCLENBQTRCLE9BQU1yQixDQUFOLEVBQVM7QUFBQzNCLG1CQUFHMkIsQ0FBSDtBQUFNO0FBQUMsU0FBekQsQ0FBMERDLElBQTFELENBQStELElBQS9ELENBQXJxQixFQUEydUIsZ0JBQWdCLFlBQVc7QUFBQyxnQkFBSTtBQUFDLHVCQUFPLENBQUM4SixZQUFELEVBQWdCLENBQWhCLENBQVA7QUFBMEIsYUFBL0IsQ0FBZ0MsT0FBTS9KLENBQU4sRUFBUztBQUFDM0IsbUJBQUcyQixDQUFIO0FBQU07QUFBQyxTQUE3RCxDQUE4REMsSUFBOUQsQ0FBbUUsSUFBbkUsQ0FBM3ZCLElBQXcwQixZQUFXO0FBQUMsWUFBSTtBQUFDLG1CQUFPLENBQUNtSixNQUFELEVBQVUsQ0FBVixDQUFQO0FBQW9CLFNBQXpCLENBQTBCLE9BQU1wSixDQUFOLEVBQVM7QUFBQzNCLGVBQUcyQixDQUFIO0FBQU07QUFBQyxLQUF2RCxDQUF3REMsSUFBeEQsQ0FBNkQsSUFBN0QsQ0FBeDBCLEdBQTY0QixJQUE3NEIsRUFBbTVCLFNBQW41QixFQUE4NUIsSUFBOTVCLEVBQW82QixVQUFTOEksQ0FBVCxFQUFZO0FBQUNoTCxnQkFBUSxPQUFSLElBQW1CZ0wsQ0FBbkI7QUFBcUIsS0FBdDhCLENBQWxGLEdBQTRoQ3BMLEVBQUUsVUFBRiwyQkFBZSxTQUFTLFlBQVc7QUFBQyxnQkFBSTtBQUFDLHVCQUFPLENBQUNmLEtBQUQsRUFBUyxDQUFULENBQVA7QUFBbUIsYUFBeEIsQ0FBeUIsT0FBTW9ELENBQU4sRUFBUztBQUFDM0IsbUJBQUcyQixDQUFIO0FBQU07QUFBQyxTQUF0RCxDQUF1REMsSUFBdkQsQ0FBNEQsSUFBNUQsQ0FBeEIsRUFBMkYsWUFBWSxZQUFXO0FBQUMsZ0JBQUk7QUFBQyx1QkFBTyxDQUFDWixLQUFLZ0wsUUFBTixFQUFpQixDQUFqQixDQUFQO0FBQTJCLGFBQWhDLENBQWlDLE9BQU1ySyxDQUFOLEVBQVM7QUFBQzNCLG1CQUFHMkIsQ0FBSDtBQUFNO0FBQUMsU0FBOUQsQ0FBK0RDLElBQS9ELENBQW9FLElBQXBFLENBQXZHLEVBQWtMLGdCQUFnQixZQUFXO0FBQUMsZ0JBQUk7QUFBQyx1QkFBTyxDQUFDc0osWUFBRCxFQUFnQixDQUFoQixDQUFQO0FBQTBCLGFBQS9CLENBQWdDLE9BQU12SixDQUFOLEVBQVM7QUFBQzNCLG1CQUFHMkIsQ0FBSDtBQUFNO0FBQUMsU0FBN0QsQ0FBOERDLElBQTlELENBQW1FLElBQW5FLENBQWxNLEVBQTRRLFFBQVEsWUFBVztBQUFDLGdCQUFJO0FBQUMsdUJBQU8sQ0FBQ21CLElBQUQsRUFBUSxDQUFSLENBQVA7QUFBa0IsYUFBdkIsQ0FBd0IsT0FBTXBCLENBQU4sRUFBUztBQUFDM0IsbUJBQUcyQixDQUFIO0FBQU07QUFBQyxTQUFyRCxDQUFzREMsSUFBdEQsQ0FBMkQsSUFBM0QsQ0FBcFIsRUFBc1YsWUFBWSxZQUFXO0FBQUMsZ0JBQUk7QUFBQyx1QkFBTyxDQUFDd0osUUFBRCxFQUFZLENBQVosQ0FBUDtBQUFzQixhQUEzQixDQUE0QixPQUFNekosQ0FBTixFQUFTO0FBQUMzQixtQkFBRzJCLENBQUg7QUFBTTtBQUFDLFNBQXpELENBQTBEQyxJQUExRCxDQUErRCxJQUEvRCxDQUFsVyxFQUF3YSxlQUFlLFlBQVc7QUFBQyxnQkFBSTtBQUFDLHVCQUFPLENBQUN1SixXQUFELEVBQWUsQ0FBZixDQUFQO0FBQXlCLGFBQTlCLENBQStCLE9BQU14SixDQUFOLEVBQVM7QUFBQzNCLG1CQUFHMkIsQ0FBSDtBQUFNO0FBQUMsU0FBNUQsQ0FBNkRDLElBQTdELENBQWtFLElBQWxFLENBQXZiLEVBQWdnQixZQUFZLFlBQVc7QUFBQyxnQkFBSTtBQUFDLHVCQUFPLENBQUNlLFFBQUQsRUFBWSxDQUFaLENBQVA7QUFBc0IsYUFBM0IsQ0FBNEIsT0FBTWhCLENBQU4sRUFBUztBQUFDM0IsbUJBQUcyQixDQUFIO0FBQU07QUFBQyxTQUF6RCxDQUEwREMsSUFBMUQsQ0FBK0QsSUFBL0QsQ0FBNWdCLEVBQWtsQixRQUFRLFlBQVc7QUFBQyxnQkFBSTtBQUFDLHVCQUFPLENBQUMwSixJQUFELEVBQVEsQ0FBUixDQUFQO0FBQWtCLGFBQXZCLENBQXdCLE9BQU0zSixDQUFOLEVBQVM7QUFBQzNCLG1CQUFHMkIsQ0FBSDtBQUFNO0FBQUMsU0FBckQsQ0FBc0RDLElBQXRELENBQTJELElBQTNELENBQTFsQixFQUE0cEIsY0FBYyxZQUFXO0FBQUMsZ0JBQUk7QUFBQyx1QkFBTyxDQUFDMkosVUFBRCxFQUFjLENBQWQsQ0FBUDtBQUF3QixhQUE3QixDQUE4QixPQUFNNUosQ0FBTixFQUFTO0FBQUMzQixtQkFBRzJCLENBQUg7QUFBTTtBQUFDLFNBQTNELENBQTREQyxJQUE1RCxDQUFpRSxJQUFqRSxDQUExcUIsRUFBa3ZCLFlBQVksWUFBVztBQUFDLGdCQUFJO0FBQUMsdUJBQU8sQ0FBQ29CLFFBQUQsRUFBWSxDQUFaLENBQVA7QUFBc0IsYUFBM0IsQ0FBNEIsT0FBTXJCLENBQU4sRUFBUztBQUFDM0IsbUJBQUcyQixDQUFIO0FBQU07QUFBQyxTQUF6RCxDQUEwREMsSUFBMUQsQ0FBK0QsSUFBL0QsQ0FBOXZCLElBQXUwQixZQUFXO0FBQUMsWUFBSTtBQUFDLG1CQUFPLENBQUNtSixNQUFELEVBQVUsQ0FBVixDQUFQO0FBQW9CLFNBQXpCLENBQTBCLE9BQU1wSixDQUFOLEVBQVM7QUFBQzNCLGVBQUcyQixDQUFIO0FBQU07QUFBQyxLQUF2RCxDQUF3REMsSUFBeEQsQ0FBNkQsSUFBN0QsQ0FBdjBCLEdBQTQ0QixJQUE1NEIsRUFBazVCLG9CQUFsNUIsRUFBdzZCLElBQXg2QixFQUE4NkIsVUFBUzhJLENBQVQsRUFBWTtBQUFDaEwsZ0JBQVEsT0FBUixJQUFtQmdMLENBQW5CO0FBQXFCLEtBQWg5QixDQUwzZ0MsRUFLODlELFlBQVc7QUFBQyxZQUFJO0FBQUMsbUJBQU8sQ0FBQ3ZMLE9BQU9rTixNQUFQLElBQWlCaEIsU0FBbEIsRUFBOEIsQ0FBOUIsQ0FBUDtBQUF3QyxTQUE3QyxDQUE4QyxPQUFNMUosQ0FBTixFQUFTO0FBQUMzQixlQUFHMkIsQ0FBSDtBQUFNO0FBQUMsS0FBM0UsQ0FBNEVDLElBQTVFLENBQWlGLElBQWpGLElBQXlGdEMsRUFBRSxLQUFGLEVBQVMsSUFBVCxFQUFlLENBQUMsWUFBVztBQUFDLFlBQUk7QUFBQyxtQkFBTyxDQUFDK0wsU0FBRCxFQUFhLENBQWIsQ0FBUDtBQUF1QixTQUE1QixDQUE2QixPQUFNMUosQ0FBTixFQUFTO0FBQUMzQixlQUFHMkIsQ0FBSDtBQUFNO0FBQUMsS0FBMUQsQ0FBMkRDLElBQTNELENBQWdFLElBQWhFLElBQXdFdEMsRUFBRSxHQUFGLEVBQU8sRUFBQyxZQUFZLFlBQVc7QUFBQyxnQkFBSTtBQUFDLHVCQUFPLENBQUMwQixLQUFLK0ssS0FBTixFQUFjLENBQWQsQ0FBUDtBQUF3QixhQUE3QixDQUE4QixPQUFNcEssQ0FBTixFQUFTO0FBQUMzQixtQkFBRzJCLENBQUg7QUFBTTtBQUFDLFNBQTNELENBQTREQyxJQUE1RCxDQUFpRSxJQUFqRSxDQUFiLEVBQVAsRUFBNkYsSUFBN0YsRUFBbUcxQixXQUFXLFlBQVc7QUFBQyxZQUFJO0FBQUMsbUJBQU8sQ0FBQztBQUNqMUUsZ0RBQWdDLElBRGl6RTtBQUVqMUUsMEJBQVUzQjtBQUZ1MEUsYUFBRCxFQUdoMUUsQ0FIZzFFLENBQVA7QUFHdDBFLFNBSGkwRSxDQUdoMEUsT0FBTW9ELENBQU4sRUFBUztBQUFDM0IsZUFBRzJCLENBQUg7QUFBTTtBQUFDLEtBSG15RSxDQUdseUVDLElBSGt5RSxDQUc3eEUsSUFINnhFLENBQVgsQ0FBbkcsQ0FBeEUsR0FHN2xFcEQsU0FINGxFLEVBR2psRSxDQUFDbUIsUUFBUSxRQUFSLElBQW9CLFVBQVMwQixNQUFULEVBQWlCO0FBQUMsZUFBTyxJQUFQO0FBQWEsS0FBcEQsTUFBMER6QixTQUFTLFFBQVQsSUFBcUIsVUFBU3lCLE1BQVQsRUFBaUI7QUFDcEssWUFBSUwsT0FBTyxJQUFYO0FBQ0EsZUFBTzdCLE9BQU8sUUFBUCxJQUFtQkEsT0FBTyxRQUFQLEVBQWlCeUMsSUFBakIsQ0FBc0IsSUFBdEIsRUFBNEIsWUFBVztBQUNqRSxtQkFBT2pDLFFBQVEsUUFBUixFQUFrQmlDLElBQWxCLENBQXVCWixJQUF2QixFQUE2QkssTUFBN0IsQ0FBUDtBQUNDLFNBRnlCLENBQW5CLEdBRUYxQixRQUFRLFFBQVIsRUFBa0JpQyxJQUFsQixDQUF1QixJQUF2QixFQUE2QlAsTUFBN0IsQ0FGTDtBQUdDLEtBTG1FLEtBSzlEekIsU0FBUyxRQUFULEVBQW1CZ0MsSUFBbkIsQ0FBd0IsSUFBeEIsQ0FSK29FLENBQWYsRUFRaG1FLFVBUmdtRSxDQUF6RixHQVF6L0RwRCxTQWIyQixFQWFoQixZQUFXO0FBQUMsWUFBSTtBQUFDLG1CQUFPLENBQUNnTixTQUFELEVBQWEsQ0FBYixDQUFQO0FBQXVCLFNBQTVCLENBQTZCLE9BQU03SixDQUFOLEVBQVM7QUFBQzNCLGVBQUcyQixDQUFIO0FBQU07QUFBQyxLQUExRCxDQUEyREMsSUFBM0QsQ0FBZ0UsSUFBaEUsSUFBd0V0QyxFQUFFLEtBQUYsRUFBUyxJQUFULEVBQWUsWUFBVztBQUFDLFlBQUk7QUFBQyxtQkFBTyxDQUFDZixTQUFTLElBQVQsSUFBaUJBLFVBQVUsRUFBM0IsR0FBZ0M0TSxXQUFoQyxHQUE4QzVNLEtBQS9DLEVBQXVELENBQXZELENBQVA7QUFBaUUsU0FBdEUsQ0FBdUUsT0FBTW9ELENBQU4sRUFBUztBQUFDM0IsZUFBRzJCLENBQUg7QUFBTTtBQUFDLEtBQXBHLENBQXFHQyxJQUFyRyxDQUEwRyxJQUExRyxDQUFmLEVBQWdJLFFBQWhJLEVBQTBJLElBQTFJLEVBQWdKLFVBQVM4SSxDQUFULEVBQVk7QUFBQ2hMLGdCQUFRLE1BQVIsSUFBa0JnTCxDQUFsQjtBQUFvQixLQUFqTCxDQUF4RSxHQUE2UGxNLFNBYjdPLENBQWYsRUFhd1EsV0FieFEsQ0FMcUssRUFrQmlILFlBQVc7QUFBQyxZQUFJO0FBQUMsbUJBQU8sQ0FBQ1csT0FBT2dOLE1BQVIsRUFBaUIsQ0FBakIsQ0FBUDtBQUEyQixTQUFoQyxDQUFpQyxPQUFNeEssQ0FBTixFQUFTO0FBQUMzQixlQUFHMkIsQ0FBSDtBQUFNO0FBQUMsS0FBOUQsQ0FBK0RDLElBQS9ELENBQW9FLElBQXBFLElBQTRFdEMsRUFBRSxLQUFGLEVBQVMsSUFBVCxFQUFlLENBQUNLLFFBQVEsUUFBUixJQUFvQixVQUFTMEIsTUFBVCxFQUFpQjtBQUFDLGVBQU8sSUFBUDtBQUFhLEtBQXBELE1BQTBEekIsU0FBUyxRQUFULElBQXFCLFVBQVN5QixNQUFULEVBQWlCO0FBQ2poQixZQUFJTCxPQUFPLElBQVg7QUFDQSxlQUFPN0IsT0FBTyxRQUFQLElBQW1CQSxPQUFPLFFBQVAsRUFBaUJ5QyxJQUFqQixDQUFzQixJQUF0QixFQUE0QixZQUFXO0FBQ2pFLG1CQUFPakMsUUFBUSxRQUFSLEVBQWtCaUMsSUFBbEIsQ0FBdUJaLElBQXZCLEVBQTZCSyxNQUE3QixDQUFQO0FBQ0MsU0FGeUIsQ0FBbkIsR0FFRjFCLFFBQVEsUUFBUixFQUFrQmlDLElBQWxCLENBQXVCLElBQXZCLEVBQTZCUCxNQUE3QixDQUZMO0FBR0MsS0FMZ2IsS0FLM2F6QixTQUFTLFFBQVQsRUFBbUJnQyxJQUFuQixDQUF3QixJQUF4QixDQUw0WixFQUs3WCxVQUw2WCxDQUE1RSxHQUtuU3BELFNBdkJrTCxDQUE5TixFQXVCd0QwQixXQUFXLFlBQVc7QUFBQyxZQUFJO0FBQUMsbUJBQU8sQ0FBQ3dCLFlBQUQsRUFBZ0IsQ0FBaEIsQ0FBUDtBQUEwQixTQUEvQixDQUFnQyxPQUFNQyxDQUFOLEVBQVM7QUFBQzNCLGVBQUcyQixDQUFIO0FBQU07QUFBQyxLQUE3RCxDQUE4REMsSUFBOUQsQ0FBbUUsSUFBbkUsQ0FBWCxDQXZCeEQsQ0FBUDtBQXdCQyxDOztBQXhFRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7O0lBRXFCb0osVzs7Ozs7Ozs7MEJBQ2pCNU0sUSxxQkFBUzRDLEksRUFBTTNCLEcsRUFBSztBQUNoQixZQUFNbUMsV0FBV1IsS0FBS3BDLEdBQUwsQ0FBUyxVQUFULENBQWpCO0FBQ0EsZUFBTzRDLFlBQVluQyxJQUFJRSxJQUFKLENBQVNDLEVBQVQsQ0FBWSxhQUFaLENBQW5CO0FBQ0gsSzs7MEJBRURuQixRLHVCQUFXO0FBQ1AsZUFBTztBQUNIb08seUJBQWEsSUFEVjtBQUVIQyx1QkFBV2xPO0FBRlIsU0FBUDtBQUlILEs7OzBCQUVEbU8sSSxtQkFBYztBQUFBOztBQUFBLDBDQUFOQyxJQUFNO0FBQU5BLGdCQUFNO0FBQUE7O0FBQ1YsbURBQU1ELElBQU4sa0RBQWNDLElBQWQ7QUFDQSxlQUFPLEtBQUt6QixXQUFMLEdBQW1CN0IsU0FBU3VELGFBQVQsQ0FBdUIsYUFBdkIsQ0FBMUI7QUFDSCxLOzswQkFFREMsTyxzQkFBaUI7QUFBQTs7QUFBQSwyQ0FBTkYsSUFBTTtBQUFOQSxnQkFBTTtBQUFBOztBQUNiLG1EQUFNRSxPQUFOLGtEQUFpQkYsSUFBakI7QUFDQSxlQUFPLEtBQUt6QixXQUFMLEdBQW1CN0IsU0FBU3VELGFBQVQsQ0FBdUIsYUFBdkIsQ0FBMUI7QUFDSCxLOzswQkFFREUsTSxtQkFBT0MsUyxFQUFXQyxTLEVBQVc7QUFDekIsMEJBQU1GLE1BQU4sWUFBYUMsU0FBYixFQUF3QkMsU0FBeEI7QUFDQSxlQUFPLEtBQUs5QixXQUFaO0FBQ0gsSzs7MEJBRUQrQixPLHNCQUFpQjtBQUNiLFlBQUksS0FBS3RPLEdBQUwsQ0FBUyxhQUFULENBQUosRUFBNkI7QUFDekIsaUJBQUt1TyxTQUFMO0FBQ0g7QUFDSixLOztBQUdEOzs7Ozs7Ozs7Ozs7OzswQkFZQUEsUyxzQkFBVUgsUyxFQUFXQyxTLEVBQVc7QUFDNUI7QUFDSTtBQUNKO0FBQ0EsWUFBSSxLQUFLRyxRQUFMLEtBRUksQ0FBQ0gsU0FBRCxJQUNBLEVBQUVBLFVBQVUzSyxJQUFWLEdBQWlCbkUsaUJBQU9rQixHQUFQLENBQVdFLElBQVgsQ0FBZ0I4TixLQUFoQixDQUFzQkMsd0JBQXpDLENBREEsSUFFQUwsVUFBVXhJLEdBQVYsS0FBa0J1SSxVQUFVdkksR0FKaEMsQ0FBSixFQU1FO0FBQ0V0Ryw2QkFBT2tCLEdBQVAsQ0FBV0UsSUFBWCxDQUFnQmdPLE1BQWhCLENBQXVCLEtBQUtDLEdBQUwsQ0FBU3hMLEtBQWhDLEVBQXVDLEtBQUswSyxTQUE1QztBQUNIO0FBQ0QsYUFBS3JFLFFBQUwsQ0FBYzJFLFNBQWQsRUFBeUJDLFNBQXpCO0FBQ0EsYUFBS1EsU0FBTCxHQUFpQixJQUFqQjtBQUNBLGFBQUt2SixPQUFMLENBQWEsWUFBYixFQUEyQixJQUEzQjtBQUNBLGFBQUt3SixHQUFMO0FBQ0gsSzs7MEJBRUR6SyxNLG1CQUFPK0osUyxFQUFXQyxTLEVBQVc7QUFDekIsWUFBTVAsWUFBWSxLQUFLOU4sR0FBTCxDQUFTLFdBQVQsQ0FBbEI7QUFDQSxZQUFJOE4sU0FBSixFQUFlO0FBQ1gsaUJBQUtBLFNBQUwsR0FBaUJwRCxTQUFTcUUsYUFBVCxDQUF1QmpCLFNBQXZCLENBQWpCO0FBQ0g7QUFDRCxZQUFJLENBQUMsS0FBS0EsU0FBVixFQUFxQjtBQUNqQixpQkFBS0EsU0FBTCxHQUFpQnBELFNBQVNzRSxJQUExQjtBQUNIO0FBQ0QsYUFBS2xCLFNBQUwsQ0FBZW1CLFdBQWYsQ0FBMkIsS0FBS3pKLE9BQWhDO0FBQ0gsSzs7O0VBM0VvQ2pHLGdCOztrQkFBcEI2TSxXO1FBOEViQSxXLEdBQUFBLFc7Ozs7Ozs7Ozs7Ozs7Ozs7O1FDM0JROEMsdUIsR0FBQUEsdUI7UUFpQ0FDLGMsR0FBQUEsYztrQkE4RVF6SCxROzs7O0FBcEt4QixJQUFNaUUsTUFBTXlELEtBQUt6RCxHQUFqQjtBQUNBLElBQU0wRCxNQUFNRCxLQUFLQyxHQUFqQjtBQUNBLElBQU1DLGNBQWMsbUJBQXBCO0FBQ0EsSUFBTUMsWUFBWSxtQkFBbEI7QUFDQSxJQUFNQyxVQUFVLHVCQUFoQjtBQUNBLElBQU1DLFlBQVksTUFBbEI7QUFDQSxJQUFNQyxXQUFXLElBQWpCOztBQUVBLFNBQVNDLGFBQVQsQ0FBdUJDLElBQXZCLEVBQTZCO0FBQ3pCLFFBQUlBLEtBQUtDLFFBQUwsS0FBa0IsQ0FBdEIsRUFBeUI7QUFDckI7QUFEcUIsb0NBRUdYLHdCQUF3QlUsSUFBeEIsQ0FGSDtBQUFBLFlBRWQvQyxLQUZjLHlCQUVkQSxLQUZjO0FBQUEsWUFFUGlELE1BRk8seUJBRVBBLE1BRk87O0FBR3JCLGVBQU87QUFDSGpELHdCQURHO0FBRUhpRCwwQkFGRztBQUdIQyxvQkFBUTtBQUNKNUcscUJBQUssQ0FERDtBQUVKNkcsc0JBQU07QUFGRjtBQUhMLFNBQVA7QUFRSCxLQVhELE1BV08sSUFBSUosU0FBU0ssTUFBYixFQUFxQjtBQUFBLHFDQUNBZix3QkFBd0JVLElBQXhCLENBREE7QUFBQSxZQUNqQi9DLE1BRGlCLDBCQUNqQkEsS0FEaUI7QUFBQSxZQUNWaUQsT0FEVSwwQkFDVkEsTUFEVTs7QUFFeEIsZUFBTztBQUNIakQseUJBREc7QUFFSGlELDJCQUZHO0FBR0hDLG9CQUFRO0FBQ0o1RyxxQkFBS3lHLEtBQUtNLFdBRE47QUFFSkYsc0JBQU1KLEtBQUtPO0FBRlA7QUFITCxTQUFQO0FBUUgsS0FWTSxNQVVBLElBQUlQLEtBQUs3SyxjQUFULEVBQXlCO0FBQzVCO0FBQ0EsZUFBTztBQUNIOEgsbUJBQU8sQ0FESjtBQUVIaUQsb0JBQVEsQ0FGTDtBQUdIQyxvQkFBUTtBQUNKNUcscUJBQUt5RyxLQUFLUSxLQUROO0FBRUpKLHNCQUFNSixLQUFLUztBQUZQO0FBSEwsU0FBUDtBQVFIO0FBQ0Q7QUFDQSxRQUFNQyxPQUFPVixLQUFLaEgscUJBQUwsRUFBYjtBQUNBLFdBQU87QUFDSGlFLGVBQU95RCxLQUFLekQsS0FEVDtBQUVIaUQsZ0JBQVFRLEtBQUtSLE1BRlY7QUFHSEMsZ0JBQVE7QUFDSjVHLGlCQUFLbUgsS0FBS25ILEdBQUwsR0FBVzhHLE9BQU9DLFdBRG5CO0FBRUpGLGtCQUFNTSxLQUFLTixJQUFMLEdBQVlDLE9BQU9FO0FBRnJCO0FBSEwsS0FBUDtBQVFIOztBQUVNLFNBQVNqQix1QkFBVCxDQUFpQ1UsSUFBakMsRUFBdUM7QUFDMUMsUUFBSUEsU0FBU0ssTUFBYixFQUFxQjtBQUNqQixZQUFNTSxLQUFJWCxLQUFLbEYsUUFBTCxDQUFjOEYsZUFBeEI7QUFDQSxlQUFPO0FBQ0gzRCxtQkFBTzBELEdBQUVFLFdBRE47QUFFSFgsb0JBQVFTLEdBQUVHO0FBRlAsU0FBUDtBQUlIO0FBQ0QsUUFBTUgsSUFBSVgsS0FBS1ksZUFBZjtBQUNBLFFBQU1HLElBQUlmLEtBQUtaLElBQWY7QUFDQSxXQUFPO0FBQ0huQyxlQUFPbEIsSUFDSGdGLEVBQUVDLFdBREMsRUFDWUwsRUFBRUssV0FEZCxFQUVIRCxFQUFFMUQsV0FGQyxFQUVZc0QsRUFBRXRELFdBRmQsRUFHSHNELEVBQUVFLFdBSEMsQ0FESjtBQU1IWCxnQkFBUW5FLElBQ0pnRixFQUFFRSxZQURFLEVBQ1lOLEVBQUVNLFlBRGQsRUFFSkYsRUFBRUcsWUFGRSxFQUVZUCxFQUFFTyxZQUZkLEVBR0pQLEVBQUVHLFlBSEU7QUFOTCxLQUFQO0FBWUg7O0FBRUQsU0FBU0ssVUFBVCxDQUFvQkMsT0FBcEIsRUFBNkJuRSxLQUE3QixFQUFvQ2lELE1BQXBDLEVBQTRDO0FBQ3hDLFdBQU8sQ0FDSG1CLFdBQVdELFFBQVEsQ0FBUixDQUFYLEtBQTBCdEIsU0FBU3dCLElBQVQsQ0FBY0YsUUFBUSxDQUFSLENBQWQsSUFBNEJuRSxRQUFRLEdBQXBDLEdBQTBDLENBQXBFLENBREcsRUFFSG9FLFdBQVdELFFBQVEsQ0FBUixDQUFYLEtBQTBCdEIsU0FBU3dCLElBQVQsQ0FBY0YsUUFBUSxDQUFSLENBQWQsSUFBNEJsQixTQUFTLEdBQXJDLEdBQTJDLENBQXJFLENBRkcsQ0FBUDtBQUlIOztBQUVEO0FBQ0EsSUFBSXFCLHdCQUFKO0FBQ08sU0FBU2hDLGNBQVQsR0FBMEI7QUFDN0IsUUFBSWdDLG9CQUFvQnZSLFNBQXhCLEVBQW1DO0FBQy9CLGVBQU91UixlQUFQO0FBQ0g7O0FBRUQsUUFBSUMsUUFBUTFHLFNBQVMyRyxhQUFULENBQXVCLEtBQXZCLENBQVo7QUFDQUQsVUFBTXpPLEtBQU4sQ0FBWTJPLFVBQVosR0FBeUIsUUFBekI7QUFDQUYsVUFBTXpPLEtBQU4sQ0FBWWtLLEtBQVosR0FBb0IsT0FBcEI7QUFDQXVFLFVBQU16TyxLQUFOLENBQVk0TyxlQUFaLEdBQThCLFdBQTlCLENBUjZCLENBUWM7O0FBRTNDN0csYUFBU3NFLElBQVQsQ0FBY0MsV0FBZCxDQUEwQm1DLEtBQTFCOztBQUVBLFFBQUlJLGdCQUFnQkosTUFBTW5FLFdBQTFCO0FBQ0E7QUFDQW1FLFVBQU16TyxLQUFOLENBQVk4TyxRQUFaLEdBQXVCLFFBQXZCOztBQUVBO0FBQ0EsUUFBSUMsUUFBUWhILFNBQVMyRyxhQUFULENBQXVCLEtBQXZCLENBQVo7QUFDQUssVUFBTS9PLEtBQU4sQ0FBWWtLLEtBQVosR0FBb0IsTUFBcEI7QUFDQXVFLFVBQU1uQyxXQUFOLENBQWtCeUMsS0FBbEI7O0FBRUEsUUFBSUMsa0JBQWtCRCxNQUFNekUsV0FBNUI7O0FBRUE7QUFDQW1FLFVBQU1RLFVBQU4sQ0FBaUJDLFdBQWpCLENBQTZCVCxLQUE3Qjs7QUFFQSxXQUFRRCxrQkFBa0JLLGdCQUFnQkcsZUFBMUM7QUFDSDs7QUFFRCxTQUFTRyxhQUFULENBQXVCQyxNQUF2QixFQUErQjtBQUMzQixRQUFNQyxZQUFZRCxPQUFPRSxRQUFQLElBQW1CRixPQUFPRyxVQUExQixHQUNkLEVBRGMsR0FDVEgsT0FBT3ZNLE9BQVAsQ0FBZTdDLEtBQWYsQ0FBcUJxUCxTQUQ5QjtBQUVBLFFBQU1HLFlBQVlKLE9BQU9FLFFBQVAsSUFBbUJGLE9BQU9HLFVBQTFCLEdBQ2QsRUFEYyxHQUNUSCxPQUFPdk0sT0FBUCxDQUFlN0MsS0FBZixDQUFxQndQLFNBRDlCO0FBRUEsUUFBTUMsZUFBZUosY0FBYyxRQUFkLElBQ2hCQSxjQUFjLE1BQWQsSUFBd0JELE9BQU9sRixLQUFQLEdBQWVrRixPQUFPdk0sT0FBUCxDQUFlb0wsV0FEM0Q7QUFFQSxRQUFNeUIsZUFBZUYsY0FBYyxRQUFkLElBQ2hCQSxjQUFjLE1BQWQsSUFBd0JKLE9BQU9qQyxNQUFQLEdBQWdCaUMsT0FBT3ZNLE9BQVAsQ0FBZXFMLFlBRDVEOztBQUdBLFdBQU87QUFDSGhFLGVBQU93RixlQUFlbEQsZ0JBQWYsR0FBa0MsQ0FEdEM7QUFFSFcsZ0JBQVFzQyxlQUFlakQsZ0JBQWYsR0FBa0M7QUFGdkMsS0FBUDtBQUlIOztBQUVELFNBQVNtRCxhQUFULENBQXVCOU0sT0FBdkIsRUFBZ0M7QUFDNUJBLGdCQUFZQSxVQUFVeUssTUFBdEI7QUFDQSxRQUFNZ0MsV0FBV3pNLFlBQVl5SyxNQUE3QjtBQUNBLFFBQU1pQyxhQUFhMU0sUUFBUXFLLFFBQVIsS0FBcUIsQ0FBeEM7QUFDQSxRQUFNMEMsWUFBWSxDQUFDTixRQUFELElBQWEsQ0FBQ0MsVUFBaEM7O0FBRUEsUUFBTWpHLE1BQU0sRUFBQ3pHLGdCQUFELEVBQVV5TSxrQkFBVixFQUFvQkMsc0JBQXBCLEVBQVo7QUFDQSxRQUFJSyxTQUFKLEVBQWU7QUFDWCxZQUFNakMsT0FBTzlLLFFBQVFvRCxxQkFBUixFQUFiO0FBQ0FxRCxZQUFJOEQsTUFBSixHQUFhO0FBQ1Q1RyxpQkFBS21ILEtBQUtuSCxHQUFMLEdBQVc4RyxPQUFPQyxXQURkO0FBRVRGLGtCQUFNTSxLQUFLTixJQUFMLEdBQVlDLE9BQU9FO0FBRmhCLFNBQWI7QUFJQWxFLFlBQUlZLEtBQUosR0FBWXlELEtBQUt6RCxLQUFqQjtBQUNBWixZQUFJNkQsTUFBSixHQUFhUSxLQUFLUixNQUFsQjtBQUNBN0QsWUFBSXVHLFVBQUosR0FBaUJoTixRQUFRZ04sVUFBekI7QUFDQXZHLFlBQUk3QyxTQUFKLEdBQWdCNUQsUUFBUTRELFNBQXhCO0FBQ0gsS0FWRCxNQVVPO0FBQ0g2QyxZQUFJOEQsTUFBSixHQUFhLEVBQUM1RyxLQUFLLENBQU4sRUFBUzZHLE1BQU0sQ0FBZixFQUFiO0FBQ0EsWUFBTU0sUUFBT3BCLHdCQUF3QjFKLE9BQXhCLENBQWI7QUFDQXlHLFlBQUlZLEtBQUosR0FBWXlELE1BQUt6RCxLQUFqQjtBQUNBWixZQUFJNkQsTUFBSixHQUFhUSxNQUFLUixNQUFsQjtBQUNBN0QsWUFBSXVHLFVBQUosR0FBaUJ2QyxPQUFPRSxXQUF4QjtBQUNBbEUsWUFBSTdDLFNBQUosR0FBZ0I2RyxPQUFPQyxXQUF2QjtBQUNIOztBQUVELFdBQU9qRSxHQUFQO0FBQ0g7O0FBRUQsU0FBU3dHLFFBQVQsQ0FBa0I5UCxLQUFsQixFQUF5QitQLFFBQXpCLEVBQW1DO0FBQy9CLFdBQU9DLFNBQVNoUSxNQUFNK1AsUUFBTixDQUFULEVBQTBCLEVBQTFCLEtBQWlDLENBQXhDO0FBQ0g7O0FBRWMsU0FBU2hMLFFBQVQsQ0FBa0JrSSxJQUFsQixFQUF3QmdELE9BQXhCLEVBQWlDO0FBQzVDQSxjQUFVLHNCQUFjLEVBQWQsRUFBa0JBLE9BQWxCLENBQVY7O0FBRUEsUUFBTTVILFNBQVM0SCxRQUFRdEksRUFBUixJQUFjMkYsTUFBN0I7QUFDQSxRQUFJakYsT0FBT2pHLGNBQVgsRUFBMkI7QUFDdkI2TixnQkFBUXZJLEVBQVIsR0FBYSxVQUFiO0FBQ0g7O0FBTjJDLHlCQVd4Q3NGLGNBQWMzRSxNQUFkLENBWHdDO0FBQUEsUUFRakM2SCxXQVJpQyxrQkFReENoRyxLQVJ3QztBQUFBLFFBU2hDaUcsWUFUZ0Msa0JBU3hDaEQsTUFUd0M7QUFBQSxRQVVoQ2lELFlBVmdDLGtCQVV4Q2hELE1BVndDOztBQVk1QyxRQUFNaUQsZUFBZSxzQkFBYyxFQUFkLEVBQWtCRCxZQUFsQixDQUFyQjtBQUNBLFFBQU1FLFlBQVksQ0FBQ0wsUUFBUUssU0FBUixJQUFxQixNQUF0QixFQUE4QkMsS0FBOUIsQ0FBb0MsR0FBcEMsQ0FBbEI7QUFDQSxRQUFNbEMsVUFBVSxFQUFoQjtBQUNBLFFBQU1lLFNBQVNPLGNBQWNNLFFBQVFiLE1BQXRCLENBQWY7QUFDQSxRQUFNb0IsYUFBYXJCLGNBQWNDLE1BQWQsQ0FBbkI7O0FBRUEsS0FBQyxJQUFELEVBQU8sSUFBUCxFQUFhOUwsT0FBYixDQUFxQixnQkFBUTtBQUN6QixZQUFJbU4sTUFBTSxDQUFDUixRQUFRN0csSUFBUixLQUFpQixFQUFsQixFQUFzQm1ILEtBQXRCLENBQTRCLEdBQTVCLENBQVY7O0FBRUEsWUFBSUUsSUFBSWpOLE1BQUosS0FBZSxDQUFuQixFQUFzQjtBQUNsQmlOLGtCQUFNOUQsWUFBWTRCLElBQVosQ0FBaUJrQyxJQUFJLENBQUosQ0FBakIsSUFDRkEsSUFBSUMsTUFBSixDQUFXLENBQUMsUUFBRCxDQUFYLENBREUsR0FFRjlELFVBQVUyQixJQUFWLENBQWVrQyxJQUFJLENBQUosQ0FBZixJQUNJLENBQUMsUUFBRCxFQUFXQyxNQUFYLENBQWtCRCxHQUFsQixDQURKLEdBRUksQ0FBQyxRQUFELEVBQVcsUUFBWCxDQUpSO0FBS0g7QUFDREEsWUFBSSxDQUFKLElBQVM5RCxZQUFZNEIsSUFBWixDQUFpQmtDLElBQUksQ0FBSixDQUFqQixJQUEyQkEsSUFBSSxDQUFKLENBQTNCLEdBQW9DLFFBQTdDO0FBQ0FBLFlBQUksQ0FBSixJQUFTN0QsVUFBVTJCLElBQVYsQ0FBZWtDLElBQUksQ0FBSixDQUFmLElBQXlCQSxJQUFJLENBQUosQ0FBekIsR0FBa0MsUUFBM0M7O0FBRUEsWUFBTUUsbUJBQW1COUQsUUFBUStELElBQVIsQ0FBYUgsSUFBSSxDQUFKLENBQWIsQ0FBekI7QUFDQSxZQUFNSSxpQkFBaUJoRSxRQUFRK0QsSUFBUixDQUFhSCxJQUFJLENBQUosQ0FBYixDQUF2QjtBQUNBcEMsZ0JBQVFqRixJQUFSLElBQWdCLENBQ1p1SCxtQkFBbUJBLGlCQUFpQixDQUFqQixDQUFuQixHQUF5QyxDQUQ3QixFQUVaRSxpQkFBaUJBLGVBQWUsQ0FBZixDQUFqQixHQUFxQyxDQUZ6QixDQUFoQjs7QUFLQVosZ0JBQVE3RyxJQUFSLElBQWdCLENBQ1owRCxVQUFVOEQsSUFBVixDQUFlSCxJQUFJLENBQUosQ0FBZixFQUF1QixDQUF2QixDQURZLEVBRVozRCxVQUFVOEQsSUFBVixDQUFlSCxJQUFJLENBQUosQ0FBZixFQUF1QixDQUF2QixDQUZZLENBQWhCO0FBSUgsS0F4QkQ7O0FBMEJBLFFBQUlILFVBQVU5TSxNQUFWLEtBQXFCLENBQXpCLEVBQTRCO0FBQ3hCOE0sa0JBQVUsQ0FBVixJQUFlQSxVQUFVLENBQVYsQ0FBZjtBQUNIOztBQUVELFFBQU01SSxLQUFLdUksUUFBUXZJLEVBQW5CO0FBQ0EsUUFBSUEsR0FBRyxDQUFILE1BQVUsT0FBZCxFQUF1QjtBQUNuQjJJLHFCQUFhaEQsSUFBYixJQUFxQjZDLFdBQXJCO0FBQ0gsS0FGRCxNQUVPLElBQUl4SSxHQUFHLENBQUgsTUFBVSxRQUFkLEVBQXdCO0FBQzNCMkkscUJBQWFoRCxJQUFiLElBQXFCNkMsY0FBYyxDQUFuQztBQUNIO0FBQ0QsUUFBSXhJLEdBQUcsQ0FBSCxNQUFVLFFBQWQsRUFBd0I7QUFDcEIySSxxQkFBYTdKLEdBQWIsSUFBb0IySixZQUFwQjtBQUNILEtBRkQsTUFFTyxJQUFJekksR0FBRyxDQUFILE1BQVUsUUFBZCxFQUF3QjtBQUMzQjJJLHFCQUFhN0osR0FBYixJQUFvQjJKLGVBQWUsQ0FBbkM7QUFDSDs7QUFFRCxRQUFNVyxXQUFXMUMsV0FBV0MsUUFBUTNHLEVBQW5CLEVBQXVCd0ksV0FBdkIsRUFBb0NDLFlBQXBDLENBQWpCO0FBQ0FFLGlCQUFhaEQsSUFBYixJQUFxQnlELFNBQVMsQ0FBVCxDQUFyQjtBQUNBVCxpQkFBYTdKLEdBQWIsSUFBb0JzSyxTQUFTLENBQVQsQ0FBcEI7O0FBRUEsUUFBTUMsWUFBWTlELEtBQUszQyxXQUF2QjtBQUNBLFFBQU0wRyxhQUFhL0QsS0FBS2tCLFlBQXhCO0FBQ0EsUUFBTXBKLFdBQVcsc0JBQWMsRUFBZCxFQUFrQnNMLFlBQWxCLENBQWpCO0FBQ0EsUUFBTVksV0FBVzdDLFdBQVdDLFFBQVE1RyxFQUFuQixFQUF1QnNKLFNBQXZCLEVBQWtDQyxVQUFsQyxDQUFqQjtBQUNBLFFBQU1FLGdCQUFnQjVELE9BQU82RCxnQkFBUCxDQUF3QmxFLElBQXhCLENBQXRCO0FBQ0EsUUFBTW1FLGFBQWF0QixTQUFTb0IsYUFBVCxFQUF3QixZQUF4QixDQUFuQjtBQUNBLFFBQU1HLFlBQVl2QixTQUFTb0IsYUFBVCxFQUF3QixXQUF4QixDQUFsQjtBQUNBLFFBQU1JLGlCQUFpQlAsWUFBWUssVUFBWixHQUF5QnRCLFNBQVNvQixhQUFULEVBQXdCLGFBQXhCLENBQXpCLEdBQWtFVixXQUFXdEcsS0FBcEc7QUFDQSxRQUFNcUgsa0JBQWtCUCxhQUFhSyxTQUFiLEdBQXlCdkIsU0FBU29CLGFBQVQsRUFBd0IsY0FBeEIsQ0FBekIsR0FBbUVWLFdBQVdyRCxNQUF0RztBQUNBLFFBQU1xRSxvQkFBb0IsRUFBQ0osc0JBQUQsRUFBYUMsb0JBQWIsRUFBMUI7O0FBRUEsUUFBTTVKLEtBQUt3SSxRQUFReEksRUFBbkI7QUFDQSxRQUFJQSxHQUFHLENBQUgsTUFBVSxPQUFkLEVBQXVCO0FBQ25CMUMsaUJBQVNzSSxJQUFULElBQWlCMEQsU0FBakI7QUFDSCxLQUZELE1BRU8sSUFBSXRKLEdBQUcsQ0FBSCxNQUFVLFFBQWQsRUFBd0I7QUFDM0IxQyxpQkFBU3NJLElBQVQsSUFBaUIwRCxZQUFZLENBQTdCO0FBQ0g7QUFDRCxRQUFJdEosR0FBRyxDQUFILE1BQVUsUUFBZCxFQUF3QjtBQUNwQjFDLGlCQUFTeUIsR0FBVCxJQUFnQndLLFVBQWhCO0FBQ0gsS0FGRCxNQUVPLElBQUl2SixHQUFHLENBQUgsTUFBVSxRQUFkLEVBQXdCO0FBQzNCMUMsaUJBQVN5QixHQUFULElBQWdCd0ssYUFBYSxDQUE3QjtBQUNIO0FBQ0RqTSxhQUFTc0ksSUFBVCxJQUFpQjRELFNBQVMsQ0FBVCxDQUFqQjtBQUNBbE0sYUFBU3lCLEdBQVQsSUFBZ0J5SyxTQUFTLENBQVQsQ0FBaEI7O0FBRUEsS0FBQyxNQUFELEVBQVMsS0FBVCxFQUFnQjNOLE9BQWhCLENBQXdCLFVBQUNtTyxHQUFELEVBQU10SSxDQUFOLEVBQVk7QUFDaEMsWUFBTXVJLE9BQU9wQixVQUFVbkgsQ0FBVixDQUFiO0FBQ0EsWUFBSXdJLE1BQU1ELElBQU4sQ0FBSixFQUFpQjtBQUNiQyxrQkFBTUQsSUFBTixFQUFZRCxHQUFaLEVBQWlCMU0sUUFBakIsRUFBMkI7QUFDdkJtTCx3Q0FEdUI7QUFFdkJDLDBDQUZ1QjtBQUd2Qlksb0NBSHVCO0FBSXZCQyxzQ0FKdUI7QUFLdkJRLG9EQUx1QjtBQU12QkYsOENBTnVCO0FBT3ZCQyxnREFQdUI7QUFRdkJuRSx3QkFBUSxDQUFDMEQsU0FBUyxDQUFULElBQWNHLFNBQVMsQ0FBVCxDQUFmLEVBQTRCSCxTQUFTLENBQVQsSUFBY0csU0FBUyxDQUFULENBQTFDLENBUmU7QUFTdkJ4SixvQkFBSXdJLFFBQVF4SSxFQVRXO0FBVXZCQyxvQkFBSXVJLFFBQVF2SSxFQVZXO0FBV3ZCMEgsOEJBWHVCO0FBWXZCbkM7QUFadUIsYUFBM0I7QUFjSDtBQUNKLEtBbEJEOztBQW9CQSxRQUFJZ0QsUUFBUXJJLEtBQVosRUFBbUI7QUFDZixZQUFNeUYsT0FBTytDLGFBQWEvQyxJQUFiLEdBQW9CdEksU0FBU3NJLElBQTFDO0FBQ0EsWUFBTXVFLFFBQVF2RSxPQUFPNkMsV0FBUCxHQUFxQmEsU0FBbkM7QUFDQSxZQUFNdkssTUFBTTRKLGFBQWE1SixHQUFiLEdBQW1CekIsU0FBU3lCLEdBQXhDO0FBQ0EsWUFBTUYsU0FBU0UsTUFBTTJKLFlBQU4sR0FBcUJhLFVBQXBDO0FBQ0EsWUFBTW5KLFdBQVc7QUFDYlEsb0JBQVE7QUFDSnhGLHlCQUFTd0YsTUFETDtBQUVKZ0Ysc0JBQU0rQyxhQUFhL0MsSUFGZjtBQUdKN0cscUJBQUs0SixhQUFhNUosR0FIZDtBQUlKMEQsdUJBQU9nRyxXQUpIO0FBS0ovQyx3QkFBUWdEO0FBTEosYUFESztBQVFidE4scUJBQVM7QUFDTEEseUJBQVNvSyxJQURKO0FBRUxJLHNCQUFNdEksU0FBU3NJLElBRlY7QUFHTDdHLHFCQUFLekIsU0FBU3lCLEdBSFQ7QUFJTDBELHVCQUFPNkcsU0FKRjtBQUtMNUQsd0JBQVE2RDtBQUxILGFBUkk7QUFlYmEsd0JBQVlELFFBQVEsQ0FBUixHQUFZLE1BQVosR0FBcUJ2RSxPQUFPLENBQVAsR0FBVyxPQUFYLEdBQXFCLFFBZnpDO0FBZ0JidFEsc0JBQVV1SixTQUFTLENBQVQsR0FBYSxLQUFiLEdBQXFCRSxNQUFNLENBQU4sR0FBVSxRQUFWLEdBQXFCO0FBaEJ2QyxTQUFqQjtBQWtCQSxZQUFJMEosY0FBY2EsU0FBZCxJQUEyQnJFLElBQUlXLE9BQU91RSxLQUFYLElBQW9CMUIsV0FBbkQsRUFBZ0U7QUFDNURySSxxQkFBU2dLLFVBQVQsR0FBc0IsUUFBdEI7QUFDSDtBQUNELFlBQUkxQixlQUFlYSxVQUFmLElBQTZCdEUsSUFBSWxHLE1BQU1GLE1BQVYsSUFBb0I2SixZQUFyRCxFQUFtRTtBQUMvRHRJLHFCQUFTOUssUUFBVCxHQUFvQixRQUFwQjtBQUNIOztBQUVELFlBQ0lnSSxTQUFTeUIsR0FBVCxHQUFld0ssVUFBZixJQUE2QlosYUFBYTVKLEdBQTFDLElBQ0F6QixTQUFTeUIsR0FBVCxJQUFnQjRKLGFBQWE1SixHQUFiLEdBQW1CMkosWUFGdkMsRUFHRTtBQUNFdEkscUJBQVNpSyxTQUFULEdBQXFCLFVBQXJCO0FBQ0gsU0FMRCxNQUtPLElBQ0gvTSxTQUFTc0ksSUFBVCxHQUFnQjBELFNBQWhCLElBQTZCWCxhQUFhL0MsSUFBMUMsSUFDQXRJLFNBQVNzSSxJQUFULElBQWlCK0MsYUFBYS9DLElBQWIsR0FBb0I2QyxXQUZsQyxFQUdMO0FBQ0VySSxxQkFBU2lLLFNBQVQsR0FBcUIsWUFBckI7QUFDSCxTQUxNLE1BS0EsSUFBSTlJLElBQUkwRCxJQUFJVyxJQUFKLENBQUosRUFBZVgsSUFBSWtGLEtBQUosQ0FBZixJQUE2QjVJLElBQUkwRCxJQUFJbEcsR0FBSixDQUFKLEVBQWNrRyxJQUFJcEcsTUFBSixDQUFkLENBQWpDLEVBQTZEO0FBQ2hFdUIscUJBQVNpSyxTQUFULEdBQXFCLFlBQXJCO0FBQ0gsU0FGTSxNQUVBO0FBQ0hqSyxxQkFBU2lLLFNBQVQsR0FBcUIsVUFBckI7QUFDSDs7QUFFRDdCLGdCQUFRckksS0FBUixDQUFjQyxRQUFkLEVBQXdCOUMsUUFBeEI7QUFDSDs7QUFFRCxRQUFNL0UsUUFBUWlOLEtBQUtqTixLQUFuQjtBQUNBLFFBQUlrUixjQUFjbk0sUUFBZCxLQUEyQixRQUEvQixFQUF5QztBQUNyQy9FLGNBQU0rRSxRQUFOLEdBQWlCLFVBQWpCO0FBQ0g7QUFDRC9FLFVBQU1xTixJQUFOLEdBQWF0SSxTQUFTc0ksSUFBVCxHQUFnQixJQUE3QjtBQUNBck4sVUFBTXdHLEdBQU4sR0FBWXpCLFNBQVN5QixHQUFULEdBQWUsSUFBM0I7QUFDSDs7QUFFRCxJQUFNbUwsUUFBUTtBQUNWSSxTQUFLO0FBQ0QxRSxZQURDLGdCQUNJdEksUUFESixFQUNjckYsSUFEZCxFQUNvQjtBQUNqQixnQkFBTTBQLFNBQVMxUCxLQUFLMFAsTUFBcEI7QUFDQSxnQkFBTTRDLGVBQWU1QyxPQUFPRSxRQUFQLEdBQWtCRixPQUFPUyxVQUF6QixHQUFzQ1QsT0FBT2hDLE1BQVAsQ0FBY0MsSUFBekU7QUFDQSxnQkFBTTRFLGFBQWE3QyxPQUFPbEYsS0FBMUI7QUFDQSxnQkFBTWdJLG1CQUFvQm5OLFNBQVNzSSxJQUFULEdBQWdCM04sS0FBSzhSLGlCQUFMLENBQXVCSixVQUFqRTtBQUNBLGdCQUFNZSxXQUFXSCxlQUFlRSxnQkFBaEM7QUFDQSxnQkFBTUUsWUFBWUYsbUJBQW1CeFMsS0FBSzRSLGNBQXhCLEdBQXlDVyxVQUF6QyxHQUFzREQsWUFBeEU7QUFDQSxnQkFBSUsscUJBQUo7O0FBRUEsZ0JBQUkzUyxLQUFLNFIsY0FBTCxHQUFzQlcsVUFBMUIsRUFBc0M7QUFDbEMsb0JBQUlFLFdBQVcsQ0FBWCxJQUFnQkMsYUFBWSxDQUFoQyxFQUFtQztBQUMvQkMsbUNBQWV0TixTQUFTc0ksSUFBVCxHQUFnQjhFLFFBQWhCLEdBQTJCelMsS0FBSzRSLGNBQWhDLEdBQWlEVyxVQUFqRCxHQUE4REQsWUFBN0U7QUFDQWpOLDZCQUFTc0ksSUFBVCxJQUFpQjhFLFdBQVdFLFlBQTVCO0FBQ0gsaUJBSEQsTUFHTyxJQUFJRCxZQUFZLENBQVosSUFBaUJELFlBQVcsQ0FBaEMsRUFBbUM7QUFDdENwTiw2QkFBU3NJLElBQVQsR0FBZ0IyRSxZQUFoQjtBQUNILGlCQUZNLE1BRUEsSUFBSUcsV0FBV0MsU0FBZixFQUEwQjtBQUM3QnJOLDZCQUFTc0ksSUFBVCxHQUFnQjJFLGVBQWVDLFVBQWYsR0FBNEJ2UyxLQUFLNFIsY0FBakQ7QUFDSCxpQkFGTSxNQUVBO0FBQ0h2TSw2QkFBU3NJLElBQVQsR0FBZ0IyRSxZQUFoQjtBQUNIO0FBQ0osYUFYRCxNQVdPLElBQUlHLFdBQVcsQ0FBZixFQUFrQjtBQUNyQnBOLHlCQUFTc0ksSUFBVCxJQUFpQjhFLFFBQWpCO0FBQ0gsYUFGTSxNQUVBLElBQUlDLFlBQVksQ0FBaEIsRUFBbUI7QUFDdEJyTix5QkFBU3NJLElBQVQsSUFBaUIrRSxTQUFqQjtBQUNILGFBRk0sTUFFQTtBQUNIck4seUJBQVNzSSxJQUFULEdBQWdCckUsSUFBSWpFLFNBQVNzSSxJQUFULEdBQWdCNkUsZ0JBQXBCLEVBQXNDbk4sU0FBU3NJLElBQS9DLENBQWhCO0FBQ0g7QUFDSixTQTVCQTtBQThCRDdHLFdBOUJDLGVBOEJHekIsUUE5QkgsRUE4QmFyRixJQTlCYixFQThCbUI7QUFDaEIsZ0JBQU0wUCxTQUFTMVAsS0FBSzBQLE1BQXBCO0FBQ0EsZ0JBQU00QyxlQUFlNUMsT0FBT0UsUUFBUCxHQUFrQkYsT0FBTzNJLFNBQXpCLEdBQXFDMkksT0FBT2hDLE1BQVAsQ0FBYzVHLEdBQXhFO0FBQ0EsZ0JBQU04TCxjQUFjNVMsS0FBSzBQLE1BQUwsQ0FBWWpDLE1BQWhDO0FBQ0EsZ0JBQU1vRixrQkFBa0J4TixTQUFTeUIsR0FBVCxHQUFlOUcsS0FBSzhSLGlCQUFMLENBQXVCSCxTQUE5RDtBQUNBLGdCQUFNbUIsVUFBVVIsZUFBZU8sZUFBL0I7QUFDQSxnQkFBTUUsYUFBYUYsa0JBQWtCN1MsS0FBSzZSLGVBQXZCLEdBQXlDZSxXQUF6QyxHQUF1RE4sWUFBMUU7QUFDQSxnQkFBSVUsc0JBQUo7O0FBRUEsZ0JBQUloVCxLQUFLNlIsZUFBTCxHQUF1QmUsV0FBM0IsRUFBd0M7QUFDcEMsb0JBQUlFLFVBQVUsQ0FBVixJQUFlQyxjQUFjLENBQWpDLEVBQW9DO0FBQ2hDQyxvQ0FBZ0IzTixTQUFTeUIsR0FBVCxHQUFlZ00sT0FBZixHQUF5QjlTLEtBQUs2UixlQUE5QixHQUFnRGUsV0FBaEQsR0FBOEROLFlBQTlFO0FBQ0FqTiw2QkFBU3lCLEdBQVQsSUFBZ0JnTSxVQUFVRSxhQUExQjtBQUNILGlCQUhELE1BR08sSUFBSUQsYUFBYSxDQUFiLElBQWtCRCxXQUFXLENBQWpDLEVBQW9DO0FBQ3ZDek4sNkJBQVN5QixHQUFULEdBQWV3TCxZQUFmO0FBQ0gsaUJBRk0sTUFFQSxJQUFJUSxVQUFVQyxVQUFkLEVBQTBCO0FBQzdCMU4sNkJBQVN5QixHQUFULEdBQWV3TCxlQUFlTSxXQUFmLEdBQTZCNVMsS0FBSzZSLGVBQWpEO0FBQ0gsaUJBRk0sTUFFQTtBQUNIeE0sNkJBQVN5QixHQUFULEdBQWV3TCxZQUFmO0FBQ0g7QUFDSixhQVhELE1BV08sSUFBSVEsVUFBVSxDQUFkLEVBQWlCO0FBQ3BCek4seUJBQVN5QixHQUFULElBQWdCZ00sT0FBaEI7QUFDSCxhQUZNLE1BRUEsSUFBSUMsYUFBYSxDQUFqQixFQUFvQjtBQUN2QjFOLHlCQUFTeUIsR0FBVCxJQUFnQmlNLFVBQWhCO0FBQ0gsYUFGTSxNQUVBO0FBQ0gxTix5QkFBU3lCLEdBQVQsR0FBZXdDLElBQUlqRSxTQUFTeUIsR0FBVCxHQUFlK0wsZUFBbkIsRUFBb0N4TixTQUFTeUIsR0FBN0MsQ0FBZjtBQUNIO0FBQ0o7QUF6REEsS0FESzs7QUE2RFZtTSxVQUFNO0FBQ0Z0RixZQURFLGdCQUNHdEksUUFESCxFQUNhckYsSUFEYixFQUNtQjtBQUNqQixnQkFBTTBQLFNBQVMxUCxLQUFLMFAsTUFBcEI7QUFDQSxnQkFBTTRDLGVBQWU1QyxPQUFPaEMsTUFBUCxDQUFjQyxJQUFkLEdBQXFCK0IsT0FBT1MsVUFBakQ7QUFDQSxnQkFBTW9DLGFBQWE3QyxPQUFPbEYsS0FBMUI7QUFDQSxnQkFBTTBJLGFBQWF4RCxPQUFPRSxRQUFQLEdBQWtCRixPQUFPUyxVQUF6QixHQUFzQ1QsT0FBT2hDLE1BQVAsQ0FBY0MsSUFBdkU7QUFDQSxnQkFBTTZFLG1CQUFtQm5OLFNBQVNzSSxJQUFULEdBQWdCM04sS0FBSzhSLGlCQUFMLENBQXVCSixVQUFoRTtBQUNBLGdCQUFNZSxXQUFXRCxtQkFBbUJVLFVBQXBDO0FBQ0EsZ0JBQU1SLFlBQVlGLG1CQUFtQnhTLEtBQUs0UixjQUF4QixHQUF5Q1csVUFBekMsR0FBc0RXLFVBQXhFO0FBQ0EsZ0JBQU0zQixXQUFXdlIsS0FBSytILEVBQUwsQ0FBUSxDQUFSLE1BQWUsTUFBZixHQUNiLENBQUMvSCxLQUFLcVIsU0FETyxHQUViclIsS0FBSytILEVBQUwsQ0FBUSxDQUFSLE1BQWUsT0FBZixHQUNJL0gsS0FBS3FSLFNBRFQsR0FDcUIsQ0FIekI7QUFJQSxnQkFBTUQsV0FBV3BSLEtBQUtnSSxFQUFMLENBQVEsQ0FBUixNQUFlLE1BQWYsR0FDYmhJLEtBQUt3USxXQURRLEdBRWJ4USxLQUFLZ0ksRUFBTCxDQUFRLENBQVIsTUFBZSxPQUFmLEdBQ0ksQ0FBQ2hJLEtBQUt3USxXQURWLEdBQ3dCLENBSDVCO0FBSUEsZ0JBQU05QyxTQUFTLENBQUMsQ0FBRCxHQUFLMU4sS0FBSzBOLE1BQUwsQ0FBWSxDQUFaLENBQXBCO0FBQ0EsZ0JBQUlpRixxQkFBSjtBQUNBLGdCQUFJUSxvQkFBSjs7QUFFQSxnQkFBSVYsV0FBVyxDQUFmLEVBQWtCO0FBQ2RFLCtCQUFldE4sU0FBU3NJLElBQVQsR0FBZ0I0RCxRQUFoQixHQUEyQkgsUUFBM0IsR0FBc0MxRCxNQUF0QyxHQUErQzFOLEtBQUs0UixjQUFwRCxHQUFxRVcsVUFBckUsR0FBa0ZELFlBQWpHO0FBQ0Esb0JBQUlLLGVBQWUsQ0FBZixJQUFvQkEsZUFBZTNGLElBQUl5RixRQUFKLENBQXZDLEVBQXNEO0FBQ2xEcE4sNkJBQVNzSSxJQUFULElBQWlCNEQsV0FBV0gsUUFBWCxHQUFzQjFELE1BQXZDO0FBQ0g7QUFDSixhQUxELE1BS08sSUFBSWdGLFlBQVksQ0FBaEIsRUFBbUI7QUFDdEJTLDhCQUFjOU4sU0FBU3NJLElBQVQsR0FBZ0IzTixLQUFLOFIsaUJBQUwsQ0FBdUJKLFVBQXZDLEdBQW9ESCxRQUFwRCxHQUErREgsUUFBL0QsR0FBMEUxRCxNQUExRSxHQUFtRndGLFVBQWpHO0FBQ0E7QUFDQTtBQUNBLG9CQUFJQyxjQUFjLENBQWxCLEVBQXFCO0FBQ2pCOU4sNkJBQVNzSSxJQUFULElBQWlCNEQsV0FBV0gsUUFBWCxHQUFzQjFELE1BQXZDO0FBQ0g7QUFDSjtBQUNKLFNBbENDO0FBb0NGNUcsV0FwQ0UsZUFvQ0V6QixRQXBDRixFQW9DWXJGLElBcENaLEVBb0NrQjtBQUNoQixnQkFBTTBQLFNBQVMxUCxLQUFLMFAsTUFBcEI7QUFDQSxnQkFBTTRDLGVBQWU1QyxPQUFPaEMsTUFBUCxDQUFjNUcsR0FBZCxHQUFvQjRJLE9BQU8zSSxTQUFoRDtBQUNBLGdCQUFNNkwsY0FBY2xELE9BQU9qQyxNQUEzQjtBQUNBLGdCQUFNMkYsWUFBWTFELE9BQU9FLFFBQVAsR0FBa0JGLE9BQU8zSSxTQUF6QixHQUFxQzJJLE9BQU9oQyxNQUFQLENBQWM1RyxHQUFyRTtBQUNBLGdCQUFNK0wsa0JBQWtCeE4sU0FBU3lCLEdBQVQsR0FBZTlHLEtBQUs4UixpQkFBTCxDQUF1QkgsU0FBOUQ7QUFDQSxnQkFBTW1CLFVBQVVELGtCQUFrQk8sU0FBbEM7QUFDQSxnQkFBTUwsYUFBYUYsa0JBQWtCN1MsS0FBSzZSLGVBQXZCLEdBQXlDZSxXQUF6QyxHQUF1RFEsU0FBMUU7QUFDQSxnQkFBTTdCLFdBQVd2UixLQUFLK0gsRUFBTCxDQUFRLENBQVIsTUFBZSxLQUFmLEdBQ2IsQ0FBQy9ILEtBQUtzUixVQURPLEdBRWJ0UixLQUFLK0gsRUFBTCxDQUFRLENBQVIsTUFBZSxRQUFmLEdBQ0kvSCxLQUFLc1IsVUFEVCxHQUNzQixDQUgxQjtBQUlBLGdCQUFNRixXQUFXcFIsS0FBS2dJLEVBQUwsQ0FBUSxDQUFSLE1BQWUsS0FBZixHQUNiaEksS0FBS3lRLFlBRFEsR0FFYnpRLEtBQUtnSSxFQUFMLENBQVEsQ0FBUixNQUFlLFFBQWYsR0FDSSxDQUFDaEksS0FBS3lRLFlBRFYsR0FDeUIsQ0FIN0I7QUFJQSxnQkFBTS9DLFNBQVMsQ0FBQyxDQUFELEdBQUsxTixLQUFLME4sTUFBTCxDQUFZLENBQVosQ0FBcEI7QUFDQSxnQkFBSTJGLG1CQUFKO0FBQ0EsZ0JBQUlMLHNCQUFKOztBQUVBLGdCQUFJRixVQUFVLENBQWQsRUFBaUI7QUFDYkUsZ0NBQWdCM04sU0FBU3lCLEdBQVQsR0FBZXlLLFFBQWYsR0FBMEJILFFBQTFCLEdBQXFDMUQsTUFBckMsR0FBOEMxTixLQUFLNlIsZUFBbkQsR0FBcUVlLFdBQXJFLEdBQW1GTixZQUFuRztBQUNBLG9CQUFJVSxnQkFBZ0IsQ0FBaEIsSUFBcUJBLGdCQUFnQmhHLElBQUk4RixPQUFKLENBQXpDLEVBQXVEO0FBQ25Eek4sNkJBQVN5QixHQUFULElBQWdCeUssV0FBV0gsUUFBWCxHQUFzQjFELE1BQXRDO0FBQ0g7QUFDSixhQUxELE1BS08sSUFBSXFGLGFBQWEsQ0FBakIsRUFBb0I7QUFDdkJNLDZCQUFhaE8sU0FBU3lCLEdBQVQsR0FBZTlHLEtBQUs4UixpQkFBTCxDQUF1QkgsU0FBdEMsR0FBa0RKLFFBQWxELEdBQTZESCxRQUE3RCxHQUF3RTFELE1BQXhFLEdBQWlGMEYsU0FBOUY7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBSUMsYUFBYSxDQUFqQixFQUFvQjtBQUNoQmhPLDZCQUFTeUIsR0FBVCxJQUFnQnlLLFdBQVdILFFBQVgsR0FBc0IxRCxNQUF0QztBQUNIO0FBQ0o7QUFDSjtBQXRFQyxLQTdESTs7QUFzSVY0RixhQUFTO0FBQ0wzRixZQURLLGtCQUNTO0FBQUE7O0FBQ1YsaUNBQU1zRixJQUFOLEVBQVd0RixJQUFYO0FBQ0EsZ0NBQU0wRSxHQUFOLEVBQVUxRSxJQUFWO0FBQ0gsU0FKSTtBQU1MN0csV0FOSyxpQkFNUTtBQUFBOztBQUNULGtDQUFNbU0sSUFBTixFQUFXbk0sR0FBWDtBQUNBLGlDQUFNdUwsR0FBTixFQUFVdkwsR0FBVjtBQUNIO0FBVEk7QUF0SUMsQ0FBZDs7UUFvSlF6QixRLEdBQUFBLFE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM5ZFI7Ozs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFcUJrTyxXLFdBQ2hCclcsaUJBQU9DLFFBQVAsRTs7Ozs7Ozs7O0VBRG9DRCxnQixXQUU5QkMsUSxHQUFXQSxlOzs7Ozs7OztrQkFGRG9XLFc7Ozs7Ozs7Ozs7Ozs7a0JDRk4sVUFBU3ZWLEdBQVQsRUFBY0MsSUFBZCxFQUFvQkMsTUFBcEIsRUFBNEJDLE9BQTVCLEVBQXFDO0FBQ3BERixXQUFTQSxPQUFPRyxHQUFoQjtBQUNBSixVQUFRQSxNQUFNLEVBQWQ7QUFDQUUsYUFBV0EsU0FBUyxFQUFwQjtBQUNBLE1BQUlHLElBQUlKLEtBQUtLLElBQUwsQ0FBVUQsQ0FBbEI7QUFBQSxNQUFxQkUsS0FBS04sS0FBS0ssSUFBTCxDQUFVQyxFQUFwQztBQUFBLE1BQXdDQyxLQUFLUCxLQUFLSyxJQUFMLENBQVVFLEVBQXZEO0FBQUEsTUFBMkRDLFVBQVUsUUFBUSxLQUFLQSxPQUFiLElBQXdCLEVBQTdGO0FBQUEsTUFBaUdDLFVBQVUsRUFBM0c7QUFBQSxNQUErR0MsV0FBVyxFQUExSDtBQUFBLE1BQ0FDLE1BQU1YLEtBQUtZLEtBRFg7QUFBQSxNQUNrQkMsU0FBU0YsSUFBSUUsTUFEL0I7QUFBQSxNQUN1Q0MsS0FBS0gsSUFBSUksS0FEaEQ7QUFBQSxNQUN1REMsYUFBYUwsSUFBSU0sU0FEeEU7QUFBQSxNQUVBQyxNQUFNUCxJQUFJUSxPQUZWO0FBQUEsTUFFbUJDLFlBQVlGLElBQUlHLFFBRm5DO0FBQUEsTUFFNkNDLFlBQVlKLElBQUlLLFFBRjdEO0FBQUEsTUFHQUMsb0JBQW9CYixJQUFJYyxnQkFIeEI7QUFBQSxNQUcwQ0MseUJBQXlCZixJQUFJZ0IscUJBSHZFO0FBQUEsTUFJQUMsa0JBQWtCakIsSUFBSWtCLGNBSnRCO0FBQUEsTUFLQUMsT0FBTyxLQUFLQyxJQUxaO0FBQUEsTUFLa0JDLFFBQVEsSUFMMUI7QUFBQSxNQUtnQ0MsUUFBUWxDLEdBTHhDO0FBQUEsTUFLNkNtQyxVQUFVSixRQUFRQSxLQUFLSSxPQUxwRTtBQUFBLE1BSzZFQyxTQUFTLENBQUNqQyxXQUFXLEVBQVosRUFBZ0JrQyxNQUx0Rzs7QUFKb0Qsa0JBVTFCTixLQUFLcEMsR0FBTCxFQVYwQjtBQUFBLE1BVTdDNEMsUUFWNkMsYUFVN0NBLFFBVjZDO0FBQUEsTUFVbkNpVCxLQVZtQyxhQVVuQ0EsS0FWbUM7O0FBWXBELFNBQU9uVixFQUFFLEtBQUYsRUFBUyxJQUFULEVBQWUsQ0FBQ0EsRUFBRSxLQUFGLEVBQVMsSUFBVCxFQUFlLFlBQVc7QUFBQyxRQUFJO0FBQUMsYUFBTyxDQUFDbVYsS0FBRCxFQUFTLENBQVQsQ0FBUDtBQUFtQixLQUF4QixDQUF5QixPQUFNOVMsQ0FBTixFQUFTO0FBQUMzQixTQUFHMkIsQ0FBSDtBQUFNO0FBQUMsR0FBdEQsQ0FBdURDLElBQXZELENBQTRELElBQTVELENBQWYsRUFBa0YsU0FBbEYsQ0FBRCxFQUErRixRQUEvRixFQUF5RyxZQUFXO0FBQUMsUUFBSTtBQUFDLGFBQU8sQ0FBQ0osUUFBRCxFQUFZLENBQVosQ0FBUDtBQUFzQixLQUEzQixDQUE0QixPQUFNRyxDQUFOLEVBQVM7QUFBQzNCLFNBQUcyQixDQUFIO0FBQU07QUFBQyxHQUF6RCxDQUEwREMsSUFBMUQsQ0FBK0QsSUFBL0QsQ0FBekcsRUFBK0ssSUFBL0ssQ0FBZixFQUFxTSxTQUFyTSxDQUFQO0FBQ0MsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZEQ7Ozs7QUFDQTs7OztBQUNBOztBQUNBOztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRXFCOFMsTSxXQUNoQnZXLGlCQUFPQyxRQUFQLEU7Ozs7Ozs7O3FCQVlEQyxRLHVCQUFXO0FBQ1AsZUFBTztBQUNINEMsa0JBQU0sRUFESDtBQUVIMUMsbUJBQU8sRUFGSjtBQUdIb1csc0JBQVUsS0FIUCxFQUdjO0FBQ2pCaFMsc0JBQVUsS0FKUDtBQUtIMEksdUJBQVcsS0FMUixFQUtlO0FBQ2xCdUosd0JBQVksS0FOVCxFQU1nQjtBQUNuQkMsc0JBQVVyVyxTQVBQO0FBUUgyTSx5QkFBYTNNLFNBUlY7QUFTSCtELGtCQUFNLFNBVEg7QUFVSGQsbUJBQU8sS0FWSjtBQVdIZ0ssbUJBQU9qTixTQVhKO0FBWUhzVywwQkFBYyxLQVpYOztBQWNIQyxtQkFBTztBQWRKLFNBQVA7QUFnQkgsSzs7cUJBRURwVyxLLG9CQUFRO0FBQUE7O0FBQ0osYUFBS3VHLEVBQUwsQ0FBUSxnQkFBUixFQUEwQixZQUFNO0FBQzVCLGdCQUFJLE9BQUt0RyxHQUFMLENBQVMsVUFBVCxLQUF3QixPQUFLQSxHQUFMLENBQVMsT0FBVCxDQUE1QixFQUErQztBQUMzQyx1QkFBSzhJLElBQUwsQ0FBVTVCLElBQVYsQ0FBZVEsUUFBZjtBQUNIO0FBQ0osU0FKRDtBQUtILEs7O3FCQUVEME8sUSxxQkFBU3JULEMsRUFBRztBQUNSQSxVQUFFc1QsZUFBRjtBQUNBLGFBQUtwVyxHQUFMLENBQVMsT0FBVCxFQUFrQixFQUFsQjtBQUNILEs7O3FCQUVEcVcsUyxzQkFBVTNXLEssRUFBTztBQUNiLFlBQUksQ0FBQyxLQUFLSyxHQUFMLENBQVMsVUFBVCxDQUFMLEVBQTJCO0FBQ3ZCLGlCQUFLQyxHQUFMLENBQVMsT0FBVCxFQUFrQk4sS0FBbEIsRUFBeUIsRUFBQzRXLE9BQU8sSUFBUixFQUF6QjtBQUNILFNBRkQsTUFFTztBQUNILGdCQUFJQyxTQUFTLEtBQUt4VyxHQUFMLENBQVMsT0FBVCxDQUFiO0FBQ0EsZ0JBQUksQ0FBQ2tELE1BQU1DLE9BQU4sQ0FBY3FULE1BQWQsQ0FBTCxFQUE0QjtBQUN4QkEseUJBQVMsRUFBVDtBQUNILGFBRkQsTUFFTztBQUNIQSx5QkFBU0EsT0FBT3hSLEtBQVAsQ0FBYSxDQUFiLENBQVQ7QUFDSDtBQUNELGdCQUFNQyxRQUFRdVIsT0FBT3RSLE9BQVAsQ0FBZXZGLEtBQWYsQ0FBZDtBQUNBLGdCQUFJLENBQUNzRixLQUFMLEVBQVk7QUFDUjtBQUNBdVIsdUJBQU9wUixNQUFQLENBQWNILEtBQWQsRUFBcUIsQ0FBckI7QUFDSCxhQUhELE1BR087QUFDSHVSLHVCQUFPclIsSUFBUCxDQUFZeEYsS0FBWjtBQUNIO0FBQ0QsaUJBQUtNLEdBQUwsQ0FBUyxPQUFULEVBQWtCdVcsTUFBbEIsRUFBMEIsRUFBQ0QsT0FBTyxJQUFSLEVBQTFCO0FBQ0EsaUJBQUtFLFdBQUw7QUFDSDtBQUNELGFBQUtDLFlBQUw7QUFDSCxLOztxQkFFREMsUyxzQkFBVTVULEMsRUFBRztBQUNULGFBQUs5QyxHQUFMLENBQVMsVUFBVCxFQUFxQjhDLEVBQUVpSSxNQUFGLENBQVNyTCxLQUFULENBQWVpWCxJQUFmLEVBQXJCO0FBQ0E7QUFDQSxhQUFLOU4sSUFBTCxDQUFVNUIsSUFBVixDQUFlSixJQUFmO0FBQ0EsYUFBS2dDLElBQUwsQ0FBVTVCLElBQVYsQ0FBZUksZ0JBQWYsQ0FBZ0MsQ0FBaEM7QUFDQTtBQUNBO0FBQ0EsYUFBS3dCLElBQUwsQ0FBVTVCLElBQVYsQ0FBZVEsUUFBZjtBQUNILEs7O3FCQUVEZ1AsWSwyQkFBZTtBQUNYLGFBQUt6VyxHQUFMLENBQVMsVUFBVCxFQUFxQkwsU0FBckIsRUFBZ0MsRUFBQzJXLE9BQU8sSUFBUixFQUFoQztBQUNILEs7O3FCQUVETSxhLDBCQUFjQyxDLEVBQUduWCxLLEVBQU87QUFDcEIsYUFBS00sR0FBTCxDQUFTLE9BQVQsRUFBa0JOLEtBQWxCO0FBQ0gsSzs7QUFFRDs7Ozs7OztxQkFLQW9YLE8sc0JBQVU7QUFBQTs7QUFBQSxtQkFDMkIsS0FBSy9XLEdBQUwsRUFEM0I7QUFBQSxZQUNDaVcsUUFERCxRQUNDQSxRQUREO0FBQUEsWUFDV0MsWUFEWCxRQUNXQSxZQURYOztBQUVOLFlBQUlBLGdCQUFnQkQsWUFBWSxJQUFoQyxFQUFzQztBQUNsQyxpQkFBS2hXLEdBQUwsQ0FBUztBQUNMTix1QkFBT3NXO0FBREYsYUFBVDtBQUdIOztBQUVELGFBQUtoTSxLQUFMLEdBQWFDLFdBQVcsWUFBTTtBQUMxQixnQkFBSSxPQUFLbEssR0FBTCxDQUFTLFVBQVQsS0FBd0IsSUFBNUIsRUFBa0M7QUFDOUIsdUJBQUswVyxZQUFMO0FBQ0g7QUFDSixTQUpZLEVBSVYsR0FKVSxDQUFiO0FBS0gsSzs7cUJBRURNLFkseUJBQWFqVSxDLEVBQUc7QUFDWixnQ0FBWUEsRUFBRWlJLE1BQWQ7QUFDSCxLOztxQkFFRGlNLFEscUJBQVNsVSxDLEVBQUc7QUFDUmlILHFCQUFhLEtBQUtDLEtBQWxCO0FBQ0gsSzs7cUJBRURpTixXLDBCQUFjO0FBQ1YsYUFBS3BPLElBQUwsQ0FBVTNCLFFBQVYsQ0FBbUJILElBQW5CO0FBQ0gsSzs7cUJBRURtUSxPLG9CQUFReFgsSyxFQUFPb0QsQyxFQUFHO0FBQ2RBLFVBQUVzVCxlQUFGO0FBQ0EsWUFBTUcsU0FBUyxLQUFLeFcsR0FBTCxDQUFTLE9BQVQsRUFBa0JnRixLQUFsQixDQUF3QixDQUF4QixDQUFmO0FBQ0EsWUFBTUMsUUFBUXVSLE9BQU90UixPQUFQLENBQWV2RixLQUFmLENBQWQ7QUFDQTZXLGVBQU9wUixNQUFQLENBQWNILEtBQWQsRUFBcUIsQ0FBckI7QUFDQSxhQUFLaEYsR0FBTCxDQUFTLE9BQVQsRUFBa0J1VyxNQUFsQjtBQUNBLGFBQUtDLFdBQUw7QUFDSCxLOztxQkFFREEsVywwQkFBYztBQUNWLFlBQUksS0FBS3pXLEdBQUwsQ0FBUyxZQUFULENBQUosRUFBNEI7QUFDeEIsaUJBQUs4SSxJQUFMLENBQVVvRSxLQUFWLENBQWdCeEUsS0FBaEI7QUFDSDtBQUNKLEs7O3FCQUVEME8sUyx3QkFBWTtBQUNSLFlBQU1DLGNBQWMsS0FBS3ZPLElBQUwsQ0FBVTVCLElBQVYsQ0FBZTBILEdBQWYsQ0FBbUJ4TCxLQUFuQixDQUF5QlIsUUFBekIsQ0FBa0M0QyxPQUF0RDtBQUNBLFlBQU1xSCxRQUFRLEtBQUtySCxPQUFMLENBQWF5SCxXQUEzQjtBQUNBLFlBQU1xSyxZQUFZRCxZQUFZcEssV0FBOUI7QUFDQSxZQUFJSixRQUFReUssU0FBWixFQUF1QjtBQUNuQkQsd0JBQVkxVSxLQUFaLENBQWtCa0ssS0FBbEIsR0FBNkJBLEtBQTdCO0FBQ0g7QUFDSixLOztxQkFFRDBLLFcsd0JBQVl4VSxDLEVBQUc7QUFDWCxZQUFJQSxFQUFFcUksT0FBRixLQUFjLEVBQWxCLEVBQXNCO0FBQ2xCLGlCQUFLdEMsSUFBTCxDQUFVME8sT0FBVixDQUFrQkMsS0FBbEI7QUFDSDtBQUNKLEs7O3FCQUVENU0sVSx1QkFBVzlILEMsRUFBRztBQUNWLFlBQUlBLEVBQUVxSSxPQUFGLEtBQWMsQ0FBbEIsRUFBcUI7QUFBRTtBQUNuQixpQkFBS3RDLElBQUwsQ0FBVTNCLFFBQVYsQ0FBbUJILElBQW5CO0FBQ0g7QUFDSixLOzs7RUF4SitCekgsZ0IsV0FFekJDLFEsR0FBV0EsZSxVQUVYVyxTLEdBQVk7QUFDZjRWLGNBQVUzVixPQURLO0FBRWYyRCxjQUFVM0QsT0FGSztBQUdmcU0sZUFBV3JNLE9BSEk7QUFJZjRWLGdCQUFZNVYsT0FKRztBQUtmeUMsV0FBT3pDLE9BTFE7QUFNZjhWLGtCQUFjOVY7QUFOQyxDOzs7Ozs7OztrQkFKRjBWLE07UUEySmJBLE0sR0FBQUEsTTtRQUFRNEIsTSxHQUFBQSxnQjtRQUFpQjlCLFcsR0FBVHJSLGU7Ozs7Ozs7QUNuS3hCO0FBQ0E7QUFDQTtBQUNBLHdHQUF3RyxZQUFZLFNBQVMsRUFBRTtBQUMvSDtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O2tCQ0xlLFVBQVNsRSxHQUFULEVBQWNDLElBQWQsRUFBb0JDLE1BQXBCLEVBQTRCQyxPQUE1QixFQUFxQztBQUFBO0FBQUE7O0FBQ3BERixhQUFTQSxPQUFPRyxHQUFoQjtBQUNBSixZQUFRQSxNQUFNLEVBQWQ7QUFDQUUsZUFBV0EsU0FBUyxFQUFwQjtBQUNBLFFBQUlHLElBQUlKLEtBQUtLLElBQUwsQ0FBVUQsQ0FBbEI7QUFBQSxRQUFxQkUsS0FBS04sS0FBS0ssSUFBTCxDQUFVQyxFQUFwQztBQUFBLFFBQXdDQyxLQUFLUCxLQUFLSyxJQUFMLENBQVVFLEVBQXZEO0FBQUEsUUFBMkRDLFVBQVUsUUFBUSxLQUFLQSxPQUFiLElBQXdCLEVBQTdGO0FBQUEsUUFBaUdDLFVBQVUsRUFBM0c7QUFBQSxRQUErR0MsV0FBVyxFQUExSDtBQUFBLFFBQ0FDLE1BQU1YLEtBQUtZLEtBRFg7QUFBQSxRQUNrQkMsU0FBU0YsSUFBSUUsTUFEL0I7QUFBQSxRQUN1Q0MsS0FBS0gsSUFBSUksS0FEaEQ7QUFBQSxRQUN1REMsYUFBYUwsSUFBSU0sU0FEeEU7QUFBQSxRQUVBQyxNQUFNUCxJQUFJUSxPQUZWO0FBQUEsUUFFbUJDLFlBQVlGLElBQUlHLFFBRm5DO0FBQUEsUUFFNkNDLFlBQVlKLElBQUlLLFFBRjdEO0FBQUEsUUFHQUMsb0JBQW9CYixJQUFJYyxnQkFIeEI7QUFBQSxRQUcwQ0MseUJBQXlCZixJQUFJZ0IscUJBSHZFO0FBQUEsUUFJQUMsa0JBQWtCakIsSUFBSWtCLGNBSnRCO0FBQUEsUUFLQUMsT0FBTyxLQUFLQyxJQUxaO0FBQUEsUUFLa0JDLFFBQVEsSUFMMUI7QUFBQSxRQUtnQ0MsUUFBUWxDLEdBTHhDO0FBQUEsUUFLNkNtQyxVQUFVSixRQUFRQSxLQUFLSSxPQUxwRTtBQUFBLFFBSzZFQyxTQUFTLENBQUNqQyxXQUFXLEVBQVosRUFBZ0JrQyxNQUx0Rzs7QUFKb0Qsb0JBcUJoRE4sS0FBS3BDLEdBQUwsRUFyQmdEO0FBQUEsUUFpQmhEdUIsU0FqQmdELGFBaUJoREEsU0FqQmdEO0FBQUEsUUFpQnJDa0wsU0FqQnFDLGFBaUJyQ0EsU0FqQnFDO0FBQUEsUUFpQjFCcEssSUFqQjBCLGFBaUIxQkEsSUFqQjBCO0FBQUEsUUFpQnBCMUMsS0FqQm9CLGFBaUJwQkEsS0FqQm9CO0FBQUEsUUFpQmJvVyxRQWpCYSxhQWlCYkEsUUFqQmE7QUFBQSxRQWtCaERoUyxRQWxCZ0QsYUFrQmhEQSxRQWxCZ0Q7QUFBQSxRQWtCdENpUyxVQWxCc0MsYUFrQnRDQSxVQWxCc0M7QUFBQSxRQWtCMUJDLFFBbEIwQixhQWtCMUJBLFFBbEIwQjtBQUFBLFFBa0JoQkUsS0FsQmdCLGFBa0JoQkEsS0FsQmdCO0FBQUEsUUFtQmhENUosV0FuQmdELGFBbUJoREEsV0FuQmdEO0FBQUEsUUFtQm5DNUksSUFuQm1DLGFBbUJuQ0EsSUFuQm1DO0FBQUEsUUFtQjdCaEIsS0FuQjZCLGFBbUI3QkEsS0FuQjZCO0FBQUEsUUFtQnRCd0IsSUFuQnNCLGFBbUJ0QkEsSUFuQnNCO0FBQUEsUUFtQmhCdkIsUUFuQmdCLGFBbUJoQkEsUUFuQmdCO0FBQUEsUUFvQmhEQyxLQXBCZ0QsYUFvQmhEQSxLQXBCZ0Q7QUFBQSxRQW9CekNnSyxLQXBCeUMsYUFvQnpDQSxLQXBCeUM7QUFBQSxRQW9CbENxSixZQXBCa0MsYUFvQmxDQSxZQXBCa0M7O0FBdUJwRCxRQUFNeUIsZUFBZXBMLGVBQWUsSUFBZixHQUNoQjJKLGdCQUFnQkYsVUFBakIsR0FBK0IsZUFBRyxRQUFILENBQS9CLEdBQThDLGVBQUcsS0FBSCxDQUQ3QixHQUVqQnpKLFdBRko7O0FBSUEsUUFBTXpKO0FBQ0Ysb0JBQVk7QUFEVixxQkFFRHZCLFNBRkMsSUFFV0EsU0FGWCxnQkFHRixZQUhFLElBR1l3QyxRQUhaLGdCQUlGLFFBSkUsSUFJUW9TLEtBSlIsZ0JBS0YsYUFMRSxJQUthMUosU0FMYix1QkFNSTlJLElBTkosSUFNYUEsU0FBUyxTQU50QixnQkFPRixTQVBFLElBT1NkLEtBUFQsZ0JBQU47O0FBVUEsUUFBSStVLFdBQVdqWSxTQUFTLElBQVQsS0FBa0IsQ0FBQ29XLFFBQUQsSUFBYXBXLFVBQVUsRUFBdkIsSUFBNkJvVyxZQUFZcFcsTUFBTXdHLE1BQWpFLENBQWY7QUFDQSxRQUFNMFIsVUFBVTNVLE1BQU1DLE9BQU4sQ0FBY2YsS0FBS3BDLEdBQUwsQ0FBUyxhQUFULENBQWQsQ0FBaEI7O0FBRUEsUUFBSTZWLFFBQVEsNkJBQWlCbFcsS0FBakIsSUFBMEJBLEtBQTFCLEdBQWtDLElBQTlDO0FBQ0EsUUFBSW1ZLFNBQVMsRUFBYjs7QUFFQSxRQUFNQyxjQUFjLFNBQWRBLFdBQWMsUUFBUztBQUN6QixZQUFJQyxTQUFTLEtBQWI7QUFDQSxZQUFJQyxRQUFRLEtBQVo7O0FBRUEsWUFBSSxDQUFDbEMsUUFBTCxFQUFlO0FBQ1gsZ0JBQUl4UyxNQUFNNUQsS0FBTixLQUFnQkEsS0FBcEIsRUFBMkI7QUFDdkI7QUFDQWtXLHdCQUFRdFMsTUFBTXNTLEtBQWQ7QUFDQW1DLHlCQUFTLElBQVQ7QUFDSCxhQUpELE1BSU87QUFDSEEseUJBQVMsS0FBVDtBQUNIO0FBQ0osU0FSRCxNQVFPLElBQUk5VSxNQUFNQyxPQUFOLENBQWN4RCxLQUFkLENBQUosRUFBMEI7QUFDN0IsZ0JBQU1zRixRQUFRdEYsTUFBTXVGLE9BQU4sQ0FBYzNCLE1BQU01RCxLQUFwQixDQUFkO0FBQ0EsZ0JBQUksQ0FBQ3NGLEtBQUwsRUFBWTtBQUNSO0FBQ0E2Uyx1QkFBTzdTLEtBQVAsSUFBZ0IxQixNQUFNc1MsS0FBdEI7QUFDQW1DLHlCQUFTLElBQVQ7QUFDSCxhQUpELE1BSU87QUFDSEEseUJBQVMsS0FBVDtBQUNIO0FBQ0o7O0FBRUQsWUFBSUUsWUFBSjtBQUNBLFlBQ0ksQ0FBQ2xDLFVBQUQsSUFDQXpTLE1BQU1zUyxLQUROLElBRUFJLFlBQVksSUFGWixJQUdBLENBQUMxUyxNQUFNc1MsS0FBTixDQUFZc0MsV0FBWixHQUEwQmpULE9BQTFCLENBQW1DZ1QsTUFBTWpDLFNBQVNrQyxXQUFULEVBQXpDLENBSEQsSUFLSSw2QkFBaUI1VSxNQUFNNUQsS0FBdkIsS0FDQSxDQUFDK0YsT0FBT25DLE1BQU01RCxLQUFiLEVBQW9Cd1ksV0FBcEIsR0FBa0NqVCxPQUFsQyxDQUEwQ2dULEdBQTFDLENBUFQsRUFTRTtBQUNFRCxvQkFBUSxJQUFSO0FBQ0g7O0FBRUQsZUFBTyxFQUFDRCxjQUFELEVBQVNDLFlBQVQsRUFBUDtBQUNILEtBdENEOztBQXdDQSxRQUFNeFcsVUFBVSxTQUFWQSxPQUFVLFFBQVM7QUFDckIsWUFBTVksT0FBT2tCLE1BQU1sQixJQUFuQjtBQUNBLFlBQU00SixNQUFNLEVBQVo7QUFDQTVKLGFBQUs0RCxPQUFMLENBQWEsVUFBQzhGLElBQUQsRUFBTzlHLEtBQVAsRUFBaUI7QUFDMUI7QUFDQSxnQkFBSThHLEtBQUtxTSxJQUFULEVBQWVyTSxLQUFLOEosS0FBTCxHQUFhOUosS0FBS3FNLElBQWxCOztBQUZXLCtCQUlGTCxZQUFZaE0sSUFBWixDQUpFO0FBQUEsZ0JBSW5Ca00sS0FKbUIsZ0JBSW5CQSxLQUptQjtBQUFBLGdCQUlaRCxNQUpZLGdCQUlaQSxNQUpZOztBQUsxQixnQkFBSUMsS0FBSixFQUFXO0FBQ1BoTSxvQkFBSTlHLElBQUosQ0FDSXpFLEVBQUVxSCxzQkFBRixFQUFnQixFQUFDLGFBQWEsWUFBVztBQUFDLDRCQUFJO0FBQUMsbUNBQU8sQ0FBQzNGLEtBQUtrVSxTQUFMLENBQWV2UCxJQUFmLENBQW9CM0UsSUFBcEIsRUFBMEIySixLQUFLcE0sS0FBL0IsQ0FBRCxFQUF5QyxDQUF6QyxDQUFQO0FBQW1ELHlCQUF4RCxDQUF5RCxPQUFNb0QsQ0FBTixFQUFTO0FBQUMzQiwrQkFBRzJCLENBQUg7QUFBTTtBQUFDLHFCQUF0RixDQUF1RkMsSUFBdkYsQ0FBNEYsS0FBNUYsQ0FBZCxFQUFpSCxZQUFZLFlBQVc7QUFBQyw0QkFBSTtBQUFDLG1DQUFPLENBQUMrSSxLQUFLaEksUUFBTixFQUFpQixDQUFqQixDQUFQO0FBQTJCLHlCQUFoQyxDQUFpQyxPQUFNaEIsQ0FBTixFQUFTO0FBQUMzQiwrQkFBRzJCLENBQUg7QUFBTTtBQUFDLHFCQUE5RCxDQUErREMsSUFBL0QsQ0FBb0UsS0FBcEUsQ0FBN0gsRUFBd00sYUFBYTFCLFdBQVcsWUFBVztBQUFDLDRCQUFJO0FBQUMsbUNBQU8sQ0FBQyxFQUFDLFlBQVkwVyxNQUFiLEVBQUQsRUFBd0IsQ0FBeEIsQ0FBUDtBQUFrQyx5QkFBdkMsQ0FBd0MsT0FBTWpWLENBQU4sRUFBUztBQUFDM0IsK0JBQUcyQixDQUFIO0FBQU07QUFBQyxxQkFBckUsQ0FBc0VDLElBQXRFLENBQTJFLEtBQTNFLENBQVgsQ0FBck4sRUFBbVQsZ0JBQWdCLFlBQVc7QUFBQyw0QkFBSTtBQUFDLG1DQUFPLENBQUMsQ0FBQytTLFFBQUYsRUFBYSxDQUFiLENBQVA7QUFBdUIseUJBQTVCLENBQTZCLE9BQU1oVCxDQUFOLEVBQVM7QUFBQzNCLCtCQUFHMkIsQ0FBSDtBQUFNO0FBQUMscUJBQTFELENBQTJEQyxJQUEzRCxDQUFnRSxLQUFoRSxDQUFuVSxFQUEwWSxZQUFZLFlBQVc7QUFBQyw0QkFBSTtBQUFDLG1DQUFPLENBQUMrSSxLQUFLdk0sUUFBTCxHQUFnQnVNLEtBQUt2TSxRQUFMLENBQWN1TSxJQUFkLEVBQW9COUcsS0FBcEIsQ0FBaEIsR0FBNkM4RyxLQUFLOEosS0FBbkQsRUFBMkQsQ0FBM0QsQ0FBUDtBQUFxRSx5QkFBMUUsQ0FBMkUsT0FBTTlTLENBQU4sRUFBUztBQUFDM0IsK0JBQUcyQixDQUFIO0FBQU07QUFBQyxxQkFBeEcsQ0FBeUdDLElBQXpHLENBQThHLEtBQTlHLENBQXRaLEVBQTJnQixZQUFZVixLQUF2aEIsRUFBaEIsQ0FESjtBQUdIO0FBQ0osU0FWRDs7QUFZQSxlQUFPMkosR0FBUDtBQUNILEtBaEJEOztBQWtCQSxRQUFNb00sZ0JBQWdCLFNBQWhCQSxhQUFnQixPQUFnQjtBQUFBLFlBQWR6VixRQUFjLFFBQWRBLFFBQWM7O0FBQ2xDLGVBQU8zQixJQUFJZ0MsR0FBSixDQUFRTCxXQUFZTSxNQUFNQyxPQUFOLENBQWNQLFFBQWQsSUFBMEJBLFFBQTFCLEdBQXFDLENBQUNBLFFBQUQsQ0FBakQsR0FBK0RBLFFBQXZFLEVBQWlGLGlCQUFTO0FBQzdGLGdCQUFJUSxNQUFNQyxHQUFOLEtBQWNxVSxnQkFBbEIsRUFBMEI7QUFDdEIsb0JBQUluVSxRQUFRSCxNQUFNRyxLQUFsQjtBQUNBQSxtREFDT0EsS0FEUDtBQUVJLGlDQUFhbkIsS0FBS2tVLFNBQUwsQ0FBZXZQLElBQWYsQ0FBb0IzRSxJQUFwQixFQUEwQm1CLE1BQU01RCxLQUFoQyxDQUZqQjtBQUdJcUksa0NBQWMsQ0FBQytOLFFBSG5CO0FBSUlGLDJCQUFPdFMsTUFBTXNTLEtBQU4sSUFBZSw4QkFBa0J0UyxNQUFNWCxRQUF4QixDQUoxQjtBQUtJQSw4QkFBVVcsTUFBTVgsUUFBTixJQUFrQlcsTUFBTXNTO0FBTHRDOztBQUZzQixvQ0FTRWtDLFlBQVl4VSxLQUFaLENBVEY7QUFBQSxvQkFTZnlVLE1BVGUsaUJBU2ZBLE1BVGU7QUFBQSxvQkFTUEMsS0FUTyxpQkFTUEEsS0FUTzs7QUFVdEIsb0JBQUksQ0FBQ0EsS0FBTCxFQUFZO0FBQ1IsMkJBQU9yWCxHQUFHLEVBQUgsQ0FBUDtBQUNILGlCQUZELE1BRU87QUFBQTs7QUFDSDJDLDBCQUFNaEMsU0FBTixHQUFrQkQsMENBQ2JpQyxNQUFNaEMsU0FETyxJQUNLZ0MsTUFBTWhDLFNBRFgsY0FFZCxVQUZjLElBRUZ5VyxNQUZFLGVBQWxCO0FBSUg7O0FBRUQ7QUFDQSx1QkFBT3RYLEVBQUVnWCxnQkFBRixFQUFVblUsS0FBVixDQUFQO0FBQ0gsYUFyQkQsTUFxQk8sSUFBSUgsTUFBTUMsR0FBTixLQUFjdVMsZUFBbEIsRUFBK0I7QUFDbEMsb0JBQUlyUyxTQUFRSCxNQUFNRyxLQUFsQjtBQUNBQSxvREFDT0EsTUFEUDtBQUVJWCw4QkFBVWxDLEVBQUUyWCxhQUFGLEVBQWlCLEVBQUMsWUFBWSxZQUFXO0FBQUMsZ0NBQUk7QUFBQyx1Q0FBTyxDQUFDOVUsT0FBTVgsUUFBUCxFQUFrQixDQUFsQixDQUFQO0FBQTRCLDZCQUFqQyxDQUFrQyxPQUFNRyxDQUFOLEVBQVM7QUFBQzNCLG1DQUFHMkIsQ0FBSDtBQUFNO0FBQUMseUJBQS9ELENBQWdFQyxJQUFoRSxDQUFxRSxLQUFyRSxDQUFiLEVBQXlGLFlBQVlWLEtBQXJHLEVBQWpCO0FBRmQ7QUFJQSx1QkFBTzVCLEVBQUVrVixlQUFGLEVBQWVyUyxNQUFmLENBQVA7QUFDSDs7QUFFRCxtQkFBT0gsS0FBUDtBQUNILFNBaENNLENBQVA7QUFpQ0gsS0FsQ0Q7O0FBb0NBLFFBQU1rVixPQUNGNVgsRUFBRW9ILHNCQUFGLEVBQWdCLEVBQUMsb0JBQW9CLFlBQVc7QUFBQyxnQkFBSTtBQUFDLHVCQUFPLENBQUMxRixLQUFLZ1YsU0FBTixFQUFrQixDQUFsQixDQUFQO0FBQTRCLGFBQWpDLENBQWtDLE9BQU1yVSxDQUFOLEVBQVM7QUFBQzNCLG1CQUFHMkIsQ0FBSDtBQUFNO0FBQUMsU0FBL0QsQ0FBZ0VDLElBQWhFLENBQXFFLElBQXJFLENBQXJCLEVBQWlHLGFBQWEsbUJBQTlHLEVBQW1JLG1CQUFtQixZQUFXO0FBQUMsZ0JBQUk7QUFBQyx1QkFBTyxDQUFDWixLQUFLeVUsYUFBTixFQUFzQixDQUF0QixDQUFQO0FBQWdDLGFBQXJDLENBQXNDLE9BQU05VCxDQUFOLEVBQVM7QUFBQzNCLG1CQUFHMkIsQ0FBSDtBQUFNO0FBQUMsU0FBbkUsQ0FBb0VDLElBQXBFLENBQXlFLElBQXpFLENBQXRKLEVBQXNPLFlBQVksQ0FBQyxZQUFXO0FBQUMsZ0JBQUk7QUFBQyx1QkFBTyxDQUFDLENBQUM2VSxPQUFGLEVBQVksQ0FBWixDQUFQO0FBQXNCLGFBQTNCLENBQTRCLE9BQU05VSxDQUFOLEVBQVM7QUFBQzNCLG1CQUFHMkIsQ0FBSDtBQUFNO0FBQUMsU0FBekQsQ0FBMERDLElBQTFELENBQStELElBQS9ELElBQXVFdEMsRUFBRWUsT0FBRixFQUFXLEVBQUMsUUFBUSxZQUFXO0FBQUMsb0JBQUk7QUFBQywyQkFBTyxDQUFDWSxJQUFELEVBQVEsQ0FBUixDQUFQO0FBQWtCLGlCQUF2QixDQUF3QixPQUFNVSxDQUFOLEVBQVM7QUFBQzNCLHVCQUFHMkIsQ0FBSDtBQUFNO0FBQUMsYUFBckQsQ0FBc0RDLElBQXRELENBQTJELElBQTNELENBQVQsRUFBMkUsWUFBWSxJQUF2RixFQUE2RixZQUFZVixLQUF6RyxFQUFYLENBQXZFLEdBQXFNaEMsS0FBS1ksS0FBTCxDQUFXK0IsR0FBWCxDQUFlLFlBQVc7QUFBQyxnQkFBSTtBQUFDLHVCQUFPLENBQUNaLElBQUQsRUFBUSxDQUFSLENBQVA7QUFBa0IsYUFBdkIsQ0FBd0IsT0FBTVUsQ0FBTixFQUFTO0FBQUMzQixtQkFBRzJCLENBQUg7QUFBTTtBQUFDLFNBQXJELENBQXNEQyxJQUF0RCxDQUEyRCxJQUEzRCxDQUFmLEVBQWlGLFVBQVNyRCxLQUFULEVBQWdCa0csR0FBaEIsRUFBcUI7QUFDbGpCLG1CQUFPbkYsRUFBRWtWLGVBQUYsRUFBZSxFQUFDLFNBQVMsWUFBVztBQUFDLHdCQUFJO0FBQUMsK0JBQU8sQ0FBQ2pXLE1BQU1rVyxLQUFQLEVBQWUsQ0FBZixDQUFQO0FBQXlCLHFCQUE5QixDQUErQixPQUFNOVMsQ0FBTixFQUFTO0FBQUMzQiwyQkFBRzJCLENBQUg7QUFBTTtBQUFDLGlCQUE1RCxDQUE2REMsSUFBN0QsQ0FBa0UsSUFBbEUsQ0FBVixFQUFtRixZQUFZdEMsRUFBRWUsT0FBRixFQUFXLEVBQUMsUUFBUSxZQUFXO0FBQUMsNEJBQUk7QUFBQyxtQ0FBTyxDQUFDOUIsTUFBTTBDLElBQVAsRUFBYyxDQUFkLENBQVA7QUFBd0IseUJBQTdCLENBQThCLE9BQU1VLENBQU4sRUFBUztBQUFDM0IsK0JBQUcyQixDQUFIO0FBQU07QUFBQyxxQkFBM0QsQ0FBNERDLElBQTVELENBQWlFLElBQWpFLENBQVQsRUFBaUYsWUFBWSxJQUE3RixFQUFtRyxZQUFZVixLQUEvRyxFQUFYLENBQS9GLEVBQWtPLFlBQVlBLEtBQTlPLEVBQWYsQ0FBUDtBQUNDLFNBRjJjLEVBRXpjLElBRnljLENBQXRNLEVBRTVQNUIsRUFBRTJYLGFBQUYsRUFBaUIsRUFBQyxZQUFZLFlBQVc7QUFBQyxvQkFBSTtBQUFDLDJCQUFPLENBQUN6VixRQUFELEVBQVksQ0FBWixDQUFQO0FBQXNCLGlCQUEzQixDQUE0QixPQUFNRyxDQUFOLEVBQVM7QUFBQzNCLHVCQUFHMkIsQ0FBSDtBQUFNO0FBQUMsYUFBekQsQ0FBMERDLElBQTFELENBQStELElBQS9ELENBQWIsRUFBbUYsWUFBWVYsS0FBL0YsRUFBakIsQ0FGNFAsQ0FBbFAsRUFFZ0gsWUFBWUEsS0FGNUgsRUFBaEIsRUFFb0osSUFGcEosRUFFMEosSUFGMUosRUFFZ0ssSUFGaEssRUFFc0ssVUFBU3dKLENBQVQsRUFBWTtBQUFDaEwsZ0JBQVEsTUFBUixJQUFrQmdMLENBQWxCO0FBQW9CLEtBRnZNLENBREo7O0FBTUE7QUFDQSxRQUFJOEwsWUFBWSxDQUFDL0IsS0FBYixJQUFzQixDQUFDaUMsT0FBTzNSLE1BQWxDLEVBQTBDO0FBQ3RDeVIsbUJBQVcsS0FBWDtBQUNIOztBQUVELFdBQU9sWCxFQUFFLEtBQUYsRUFBUyxFQUFDLFNBQVMsWUFBVztBQUFDLGdCQUFJO0FBQUMsdUJBQU8sQ0FBQ21NLFNBQVMsSUFBVCxHQUFnQixxQkFBU2xLLEtBQVQsRUFBZ0IsRUFBQ2tLLE9BQVVBLEtBQVYsT0FBRCxFQUFoQixDQUFoQixHQUF5RGxLLEtBQTFELEVBQWtFLENBQWxFLENBQVA7QUFBNEUsYUFBakYsQ0FBa0YsT0FBTUksQ0FBTixFQUFTO0FBQUMzQixtQkFBRzJCLENBQUg7QUFBTTtBQUFDLFNBQS9HLENBQWdIQyxJQUFoSCxDQUFxSCxJQUFySCxDQUFWLEVBQXNJLFlBQVksWUFBVztBQUFDLGdCQUFJO0FBQUMsdUJBQU8sQ0FBQ2UsV0FBVyxJQUFYLEdBQWtCLEdBQW5CLEVBQXlCLENBQXpCLENBQVA7QUFBbUMsYUFBeEMsQ0FBeUMsT0FBTWhCLENBQU4sRUFBUztBQUFDM0IsbUJBQUcyQixDQUFIO0FBQU07QUFBQyxTQUF0RSxDQUF1RUMsSUFBdkUsQ0FBNEUsSUFBNUUsQ0FBbEosRUFBcU8sZUFBZSxZQUFXO0FBQUMsZ0JBQUk7QUFBQyx1QkFBTyxDQUFDWixLQUFLbVYsV0FBTixFQUFvQixDQUFwQixDQUFQO0FBQThCLGFBQW5DLENBQW9DLE9BQU14VSxDQUFOLEVBQVM7QUFBQzNCLG1CQUFHMkIsQ0FBSDtBQUFNO0FBQUMsU0FBakUsQ0FBa0VDLElBQWxFLENBQXVFLElBQXZFLENBQXBQLEVBQWtVLGNBQWMsWUFBVztBQUFDLGdCQUFJO0FBQUMsdUJBQU8sQ0FBQ1osS0FBS3lJLFVBQU4sRUFBbUIsQ0FBbkIsQ0FBUDtBQUE2QixhQUFsQyxDQUFtQyxPQUFNOUgsQ0FBTixFQUFTO0FBQUMzQixtQkFBRzJCLENBQUg7QUFBTTtBQUFDLFNBQWhFLENBQWlFQyxJQUFqRSxDQUFzRSxJQUF0RSxDQUFoVixFQUFULEVBQXVhdEMsRUFBRTBGLGtCQUFGLEVBQVksRUFBQyxZQUFZLFlBQVc7QUFBQyxnQkFBSTtBQUFDLHVCQUFPLENBQUMsRUFBQ2dFLElBQUksVUFBTCxFQUFpQkMsSUFBSSxhQUFyQixFQUFELEVBQXVDLENBQXZDLENBQVA7QUFBaUQsYUFBdEQsQ0FBdUQsT0FBTXRILENBQU4sRUFBUztBQUFDM0IsbUJBQUcyQixDQUFIO0FBQU07QUFBQyxTQUFwRixDQUFxRkMsSUFBckYsQ0FBMEYsSUFBMUYsQ0FBYixFQUE4RyxXQUFXLE9BQXpILEVBQWtJLFlBQVksWUFBVztBQUFDLGdCQUFJO0FBQUMsdUJBQU8sQ0FBQ2UsUUFBRCxFQUFZLENBQVosQ0FBUDtBQUFzQixhQUEzQixDQUE0QixPQUFNaEIsQ0FBTixFQUFTO0FBQUMzQixtQkFBRzJCLENBQUg7QUFBTTtBQUFDLFNBQXpELENBQTBEQyxJQUExRCxDQUErRCxJQUEvRCxDQUE5SSxFQUFvTixZQUFZLENBQUN0QyxFQUFFLEtBQUYsRUFBUyxFQUFDLFlBQVksWUFBVztBQUFDLG9CQUFJO0FBQUMsMkJBQU8sQ0FBQzBCLEtBQUtxVSxXQUFOLEVBQW9CLENBQXBCLENBQVA7QUFBOEIsaUJBQW5DLENBQW9DLE9BQU0xVCxDQUFOLEVBQVM7QUFBQzNCLHVCQUFHMkIsQ0FBSDtBQUFNO0FBQUMsYUFBakUsQ0FBa0VDLElBQWxFLENBQXVFLElBQXZFLENBQWIsRUFBMkYsWUFBWSxJQUF2RyxFQUFULEVBQXVILENBQUN0QyxFQUFFLE9BQUYsRUFBVyxFQUFDLFFBQVEsUUFBVCxFQUFtQixTQUFTLFlBQVc7QUFBQyxvQkFBSTtBQUFDLDJCQUFPLENBQUNmLEtBQUQsRUFBUyxDQUFULENBQVA7QUFBbUIsaUJBQXhCLENBQXlCLE9BQU1vRCxDQUFOLEVBQVM7QUFBQzNCLHVCQUFHMkIsQ0FBSDtBQUFNO0FBQUMsYUFBdEQsQ0FBdURDLElBQXZELENBQTRELElBQTVELENBQTVCLEVBQStGLFFBQVEsWUFBVztBQUFDLG9CQUFJO0FBQUMsMkJBQU8sQ0FBQ21CLElBQUQsRUFBUSxDQUFSLENBQVA7QUFBa0IsaUJBQXZCLENBQXdCLE9BQU1wQixDQUFOLEVBQVM7QUFBQzNCLHVCQUFHMkIsQ0FBSDtBQUFNO0FBQUMsYUFBckQsQ0FBc0RDLElBQXRELENBQTJELElBQTNELENBQXZHLEVBQVgsQ0FBRCxFQUF1TCxZQUFXO0FBQUMsZ0JBQUk7QUFBQyx1QkFBTyxDQUFDLENBQUMrUyxRQUFELElBQWFDLFVBQWQsRUFBMkIsQ0FBM0IsQ0FBUDtBQUFxQyxhQUExQyxDQUEyQyxPQUFNalQsQ0FBTixFQUFTO0FBQUMzQixtQkFBRzJCLENBQUg7QUFBTTtBQUFDLFNBQXhFLENBQXlFQyxJQUF6RSxDQUE4RSxJQUE5RSxJQUFzRnRDLEVBQUUyTCxlQUFGLEVBQVMsRUFBQyxTQUFTLFlBQVc7QUFBQyxvQkFBSTtBQUFDLDJCQUFPLENBQUM0SixZQUFZLElBQVosR0FBbUJKLEtBQW5CLEdBQTJCSSxRQUE1QixFQUF1QyxDQUF2QyxDQUFQO0FBQWlELGlCQUF0RCxDQUF1RCxPQUFNbFQsQ0FBTixFQUFTO0FBQUMzQix1QkFBRzJCLENBQUg7QUFBTTtBQUFDLGFBQXBGLENBQXFGQyxJQUFyRixDQUEwRixJQUExRixDQUFWLEVBQTJHLFlBQVksWUFBVztBQUFDLG9CQUFJO0FBQUMsMkJBQU8sQ0FBQ1osS0FBS3VVLFNBQU4sRUFBa0IsQ0FBbEIsQ0FBUDtBQUE0QixpQkFBakMsQ0FBa0MsT0FBTTVULENBQU4sRUFBUztBQUFDM0IsdUJBQUcyQixDQUFIO0FBQU07QUFBQyxhQUEvRCxDQUFnRUMsSUFBaEUsQ0FBcUUsSUFBckUsQ0FBdkgsRUFBbU0sV0FBVyxZQUFXO0FBQUMsb0JBQUk7QUFBQywyQkFBTyxDQUFDWixLQUFLMlUsT0FBTixFQUFnQixDQUFoQixDQUFQO0FBQTBCLGlCQUEvQixDQUFnQyxPQUFNaFUsQ0FBTixFQUFTO0FBQUMzQix1QkFBRzJCLENBQUg7QUFBTTtBQUFDLGFBQTdELENBQThEQyxJQUE5RCxDQUFtRSxJQUFuRSxDQUE5TSxFQUF3UixZQUFZLFlBQVc7QUFBQyxvQkFBSTtBQUFDLDJCQUFPLENBQUNaLEtBQUs0VSxZQUFOLEVBQXFCLENBQXJCLENBQVA7QUFBK0IsaUJBQXBDLENBQXFDLE9BQU1qVSxDQUFOLEVBQVM7QUFBQzNCLHVCQUFHMkIsQ0FBSDtBQUFNO0FBQUMsYUFBbEUsQ0FBbUVDLElBQW5FLENBQXdFLElBQXhFLENBQXBTLEVBQW1YLFlBQVksWUFBVztBQUFDLG9CQUFJO0FBQUMsMkJBQU8sQ0FBQ2UsUUFBRCxFQUFZLENBQVosQ0FBUDtBQUFzQixpQkFBM0IsQ0FBNEIsT0FBTWhCLENBQU4sRUFBUztBQUFDM0IsdUJBQUcyQixDQUFIO0FBQU07QUFBQyxhQUF6RCxDQUEwREMsSUFBMUQsQ0FBK0QsSUFBL0QsQ0FBL1gsRUFBcWMsZUFBZSxZQUFXO0FBQUMsb0JBQUk7QUFBQywyQkFBTyxDQUFDMlUsWUFBRCxFQUFnQixDQUFoQixDQUFQO0FBQTBCLGlCQUEvQixDQUFnQyxPQUFNNVUsQ0FBTixFQUFTO0FBQUMzQix1QkFBRzJCLENBQUg7QUFBTTtBQUFDLGFBQTdELENBQThEQyxJQUE5RCxDQUFtRSxJQUFuRSxDQUFwZCxFQUE4aEIsUUFBUSxZQUFXO0FBQUMsb0JBQUk7QUFBQywyQkFBTyxDQUFDVyxJQUFELEVBQVEsQ0FBUixDQUFQO0FBQWtCLGlCQUF2QixDQUF3QixPQUFNWixDQUFOLEVBQVM7QUFBQzNCLHVCQUFHMkIsQ0FBSDtBQUFNO0FBQUMsYUFBckQsQ0FBc0RDLElBQXRELENBQTJELElBQTNELENBQXRpQixFQUF3bUIsU0FBUyxZQUFXO0FBQUMsb0JBQUk7QUFBQywyQkFBTyxDQUFDLElBQUQsRUFBTyxDQUFQLENBQVA7QUFBaUIsaUJBQXRCLENBQXVCLE9BQU1ELENBQU4sRUFBUztBQUFDM0IsdUJBQUcyQixDQUFIO0FBQU07QUFBQyxhQUFwRCxDQUFxREMsSUFBckQsQ0FBMEQsSUFBMUQsQ0FBam5CLEVBQWtyQixZQUFZLElBQTlyQixFQUFvc0IsWUFBWVYsS0FBaHRCLEVBQVQsRUFBaXVCLElBQWp1QixFQUF1dUIsSUFBdnVCLEVBQTZ1QixJQUE3dUIsRUFBbXZCLFVBQVN3SixDQUFULEVBQVk7QUFBQ2hMLG9CQUFRLE9BQVIsSUFBbUJnTCxDQUFuQjtBQUFxQixTQUFyeEIsQ0FBdEYsR0FBKzJCLFlBQVc7QUFBQyxnQkFBSTtBQUFDLHVCQUFPLENBQUMsQ0FBQ2tLLFVBQUQsSUFBZSxDQUFDNEIsUUFBakIsRUFBNEIsQ0FBNUIsQ0FBUDtBQUFzQyxhQUEzQyxDQUE0QyxPQUFNN1UsQ0FBTixFQUFTO0FBQUMzQixtQkFBRzJCLENBQUg7QUFBTTtBQUFDLFNBQXpFLENBQTBFQyxJQUExRSxDQUErRSxJQUEvRSxJQUF1RnRDLEVBQUUsTUFBRixFQUFVLElBQVYsRUFBZ0IsWUFBVztBQUFDLGdCQUFJO0FBQUMsdUJBQU8sQ0FBQ2lYLFlBQUQsRUFBZ0IsQ0FBaEIsQ0FBUDtBQUEwQixhQUEvQixDQUFnQyxPQUFNNVUsQ0FBTixFQUFTO0FBQUMzQixtQkFBRzJCLENBQUg7QUFBTTtBQUFDLFNBQTdELENBQThEQyxJQUE5RCxDQUFtRSxJQUFuRSxDQUFoQixFQUEwRiwwQkFBMUYsQ0FBdkYsR0FBK00sWUFBVztBQUFDLGdCQUFJO0FBQUMsdUJBQU8sQ0FBQyxDQUFDK1MsUUFBRixFQUFhLENBQWIsQ0FBUDtBQUF1QixhQUE1QixDQUE2QixPQUFNaFQsQ0FBTixFQUFTO0FBQUMzQixtQkFBRzJCLENBQUg7QUFBTTtBQUFDLFNBQTFELENBQTJEQyxJQUEzRCxDQUFnRSxJQUFoRSxJQUF3RXRDLEVBQUUsTUFBRixFQUFVLElBQVYsRUFBZ0IsWUFBVztBQUFDLGdCQUFJO0FBQUMsdUJBQU8sQ0FBQ21WLEtBQUQsRUFBUyxDQUFULENBQVA7QUFBbUIsYUFBeEIsQ0FBeUIsT0FBTTlTLENBQU4sRUFBUztBQUFDM0IsbUJBQUcyQixDQUFIO0FBQU07QUFBQyxTQUF0RCxDQUF1REMsSUFBdkQsQ0FBNEQsSUFBNUQsQ0FBaEIsRUFBbUYsb0JBQW5GLENBQXhFLEdBQW1MdEMsRUFBRThCLE9BQUYsRUFBVyxFQUFDLFNBQVMsTUFBVixFQUFrQixjQUFjLFlBQVc7QUFBQyxvQkFBSTtBQUFDLDJCQUFPLENBQUMsSUFBRCxFQUFPLENBQVAsQ0FBUDtBQUFpQixpQkFBdEIsQ0FBdUIsT0FBTU8sQ0FBTixFQUFTO0FBQUMzQix1QkFBRzJCLENBQUg7QUFBTTtBQUFDLGFBQXBELENBQXFEQyxJQUFyRCxDQUEwRCxJQUExRCxDQUFoQyxFQUFpRyxhQUFhLFVBQTlHLEVBQTBILFlBQVksQ0FBQzFDLEtBQUtZLEtBQUwsQ0FBVytCLEdBQVgsQ0FBZSxZQUFXO0FBQUMsb0JBQUk7QUFBQywyQkFBTyxDQUFDNlUsTUFBRCxFQUFVLENBQVYsQ0FBUDtBQUFvQixpQkFBekIsQ0FBMEIsT0FBTS9VLENBQU4sRUFBUztBQUFDM0IsdUJBQUcyQixDQUFIO0FBQU07QUFBQyxhQUF2RCxDQUF3REMsSUFBeEQsQ0FBNkQsSUFBN0QsQ0FBZixFQUFtRixVQUFTK0ksSUFBVCxFQUFlOUcsS0FBZixFQUFzQjtBQUNyN0UsdUJBQU92RSxFQUFFOEIsT0FBRixFQUFXLEVBQUMsU0FBUyxNQUFWLEVBQWtCLGFBQWEsT0FBL0IsRUFBd0MsT0FBTyxZQUFXO0FBQUMsNEJBQUk7QUFBQyxtQ0FBTyxDQUFDN0MsTUFBTXNGLEtBQU4sQ0FBRCxFQUFnQixDQUFoQixDQUFQO0FBQTBCLHlCQUEvQixDQUFnQyxPQUFNbEMsQ0FBTixFQUFTO0FBQUMzQiwrQkFBRzJCLENBQUg7QUFBTTtBQUFDLHFCQUE3RCxDQUE4REMsSUFBOUQsQ0FBbUUsSUFBbkUsQ0FBL0MsRUFBeUgsZ0JBQWdCLE1BQXpJLEVBQWlKLFlBQVksQ0FBQ3RDLEVBQUUsTUFBRixFQUFVLElBQVYsRUFBZ0IsWUFBVztBQUFDLDRCQUFJO0FBQUMsbUNBQU8sQ0FBQ3FMLElBQUQsRUFBUSxDQUFSLENBQVA7QUFBa0IseUJBQXZCLENBQXdCLE9BQU1oSixDQUFOLEVBQVM7QUFBQzNCLCtCQUFHMkIsQ0FBSDtBQUFNO0FBQUMscUJBQXJELENBQXNEQyxJQUF0RCxDQUEyRCxJQUEzRCxDQUFoQixFQUFrRixRQUFsRixDQUFELEVBQThGdEMsRUFBRSxHQUFGLEVBQU8sRUFBQyxZQUFZLFlBQVc7QUFBQyxnQ0FBSTtBQUFDLHVDQUFPLENBQUMwQixLQUFLK1UsT0FBTCxDQUFhcFEsSUFBYixDQUFrQjNFLElBQWxCLEVBQXdCekMsTUFBTXNGLEtBQU4sQ0FBeEIsQ0FBRCxFQUF5QyxDQUF6QyxDQUFQO0FBQW1ELDZCQUF4RCxDQUF5RCxPQUFNbEMsQ0FBTixFQUFTO0FBQUMzQixtQ0FBRzJCLENBQUg7QUFBTTtBQUFDLHlCQUF0RixDQUF1RkMsSUFBdkYsQ0FBNEYsSUFBNUYsQ0FBYixFQUFQLEVBQXdILElBQXhILEVBQThILDRCQUE5SCxDQUE5RixDQUE3SixFQUF5WixZQUFZVixLQUFyYSxFQUFYLENBQVA7QUFDQyxhQUYyMEUsRUFFejBFLElBRnkwRSxDQUFELEVBRWowRSxZQUFXO0FBQUMsb0JBQUk7QUFBQywyQkFBTyxDQUFDMFQsVUFBRCxFQUFjLENBQWQsQ0FBUDtBQUF3QixpQkFBN0IsQ0FBOEIsT0FBTWpULENBQU4sRUFBUztBQUFDM0IsdUJBQUcyQixDQUFIO0FBQU07QUFBQyxhQUEzRCxDQUE0REMsSUFBNUQsQ0FBaUUsSUFBakUsSUFBeUV0QyxFQUFFMkwsZUFBRixFQUFTLEVBQUMsU0FBUyxZQUFXO0FBQUMsd0JBQUk7QUFBQywrQkFBTyxDQUFDNEosUUFBRCxFQUFZLENBQVosQ0FBUDtBQUFzQixxQkFBM0IsQ0FBNEIsT0FBTWxULENBQU4sRUFBUztBQUFDM0IsMkJBQUcyQixDQUFIO0FBQU07QUFBQyxpQkFBekQsQ0FBMERDLElBQTFELENBQStELElBQS9ELENBQVYsRUFBZ0YsWUFBWSxZQUFXO0FBQUMsd0JBQUk7QUFBQywrQkFBTyxDQUFDWixLQUFLdVUsU0FBTixFQUFrQixDQUFsQixDQUFQO0FBQTRCLHFCQUFqQyxDQUFrQyxPQUFNNVQsQ0FBTixFQUFTO0FBQUMzQiwyQkFBRzJCLENBQUg7QUFBTTtBQUFDLGlCQUEvRCxDQUFnRUMsSUFBaEUsQ0FBcUUsSUFBckUsQ0FBNUYsRUFBd0ssV0FBVyxZQUFXO0FBQUMsd0JBQUk7QUFBQywrQkFBTyxDQUFDWixLQUFLMlUsT0FBTixFQUFnQixDQUFoQixDQUFQO0FBQTBCLHFCQUEvQixDQUFnQyxPQUFNaFUsQ0FBTixFQUFTO0FBQUMzQiwyQkFBRzJCLENBQUg7QUFBTTtBQUFDLGlCQUE3RCxDQUE4REMsSUFBOUQsQ0FBbUUsSUFBbkUsQ0FBbkwsRUFBNlAsWUFBWSxZQUFXO0FBQUMsd0JBQUk7QUFBQywrQkFBTyxDQUFDWixLQUFLNlUsUUFBTixFQUFpQixDQUFqQixDQUFQO0FBQTJCLHFCQUFoQyxDQUFpQyxPQUFNbFUsQ0FBTixFQUFTO0FBQUMzQiwyQkFBRzJCLENBQUg7QUFBTTtBQUFDLGlCQUE5RCxDQUErREMsSUFBL0QsQ0FBb0UsSUFBcEUsQ0FBelEsRUFBb1YsWUFBWSxZQUFXO0FBQUMsd0JBQUk7QUFBQywrQkFBTyxDQUFDZSxRQUFELEVBQVksQ0FBWixDQUFQO0FBQXNCLHFCQUEzQixDQUE0QixPQUFNaEIsQ0FBTixFQUFTO0FBQUMzQiwyQkFBRzJCLENBQUg7QUFBTTtBQUFDLGlCQUF6RCxDQUEwREMsSUFBMUQsQ0FBK0QsSUFBL0QsQ0FBaFcsRUFBc2EsZUFBZSxZQUFXO0FBQUMsd0JBQUk7QUFBQywrQkFBTyxDQUFDLENBQUM0VSxRQUFELEdBQVlELFlBQVosR0FBMkIsRUFBNUIsRUFBaUMsQ0FBakMsQ0FBUDtBQUEyQyxxQkFBaEQsQ0FBaUQsT0FBTTVVLENBQU4sRUFBUztBQUFDM0IsMkJBQUcyQixDQUFIO0FBQU07QUFBQyxpQkFBOUUsQ0FBK0VDLElBQS9FLENBQW9GLElBQXBGLENBQXJiLEVBQWdoQixhQUFhLFlBQVc7QUFBQyx3QkFBSTtBQUFDLCtCQUFPLENBQUMsSUFBRCxFQUFPLENBQVAsQ0FBUDtBQUFpQixxQkFBdEIsQ0FBdUIsT0FBTUQsQ0FBTixFQUFTO0FBQUMzQiwyQkFBRzJCLENBQUg7QUFBTTtBQUFDLGlCQUFwRCxDQUFxREMsSUFBckQsQ0FBMEQsSUFBMUQsQ0FBN2hCLEVBQThsQixRQUFRLFlBQVc7QUFBQyx3QkFBSTtBQUFDLCtCQUFPLENBQUNXLElBQUQsRUFBUSxDQUFSLENBQVA7QUFBa0IscUJBQXZCLENBQXdCLE9BQU1aLENBQU4sRUFBUztBQUFDM0IsMkJBQUcyQixDQUFIO0FBQU07QUFBQyxpQkFBckQsQ0FBc0RDLElBQXRELENBQTJELElBQTNELENBQXRtQixFQUF3cUIsWUFBWSxJQUFwckIsRUFBMHJCLFlBQVlWLEtBQXRzQixFQUFULEVBQXV0QixJQUF2dEIsRUFBNnRCLElBQTd0QixFQUFtdUIsSUFBbnVCLEVBQXl1QixVQUFTd0osQ0FBVCxFQUFZO0FBQUNoTCx3QkFBUSxPQUFSLElBQW1CZ0wsQ0FBbkI7QUFBcUIsYUFBM3dCLENBQXpFLEdBQXcxQmxNLFNBRnkrQyxDQUF0SSxFQUV2MUMsWUFBWTBDLEtBRjIwQyxFQUFYLENBQXg2QyxFQUVpSDVCLEVBQUUsTUFBRixFQUFVLElBQVYsRUFBZ0IsQ0FBQyxZQUFXO0FBQUMsZ0JBQUk7QUFBQyx1QkFBTyxDQUFDK0wsU0FBRCxFQUFhLENBQWIsQ0FBUDtBQUF1QixhQUE1QixDQUE2QixPQUFNMUosQ0FBTixFQUFTO0FBQUMzQixtQkFBRzJCLENBQUg7QUFBTTtBQUFDLFNBQTFELENBQTJEQyxJQUEzRCxDQUFnRSxJQUFoRSxJQUF3RXRDLEVBQUUsR0FBRixFQUFPLEVBQUMsWUFBWSxZQUFXO0FBQUMsb0JBQUk7QUFBQywyQkFBTyxDQUFDMEIsS0FBS2dVLFFBQU4sRUFBaUIsQ0FBakIsQ0FBUDtBQUEyQixpQkFBaEMsQ0FBaUMsT0FBTXJULENBQU4sRUFBUztBQUFDM0IsdUJBQUcyQixDQUFIO0FBQU07QUFBQyxhQUE5RCxDQUErREMsSUFBL0QsQ0FBb0UsSUFBcEUsQ0FBYixFQUFQLEVBQWdHLElBQWhHLEVBQXNHMUIsV0FBVyxZQUFXO0FBQUMsZ0JBQUk7QUFBQyx1QkFBTyxDQUFDLEVBQUMseUJBQXlCLElBQTFCLEVBQWdDLFVBQVVzVyxRQUExQyxFQUFELEVBQXVELENBQXZELENBQVA7QUFBaUUsYUFBdEUsQ0FBdUUsT0FBTTdVLENBQU4sRUFBUztBQUFDM0IsbUJBQUcyQixDQUFIO0FBQU07QUFBQyxTQUFwRyxDQUFxR0MsSUFBckcsQ0FBMEcsSUFBMUcsQ0FBWCxDQUF0RyxDQUF4RSxHQUE2U3BELFNBQTlTLEVBQXlUYyxFQUFFLEdBQUYsRUFBTyxJQUFQLEVBQWEsSUFBYixFQUFtQiwwQkFBbkIsQ0FBelQsQ0FBaEIsRUFBMFgsVUFBMVgsQ0FGakgsQ0FBdkgsRUFFZ25CLFdBRmhuQixFQUU2bkIsSUFGN25CLEVBRW1vQixVQUFTb0wsQ0FBVCxFQUFZO0FBQUNoTCxvQkFBUSxTQUFSLElBQXFCZ0wsQ0FBckI7QUFBdUIsU0FGdnFCLENBQUQsRUFFMnFCLFlBQVc7QUFBQyxnQkFBSTtBQUFDLHVCQUFPLENBQUN3TSxJQUFELEVBQ3YxQyxDQUR1MUMsQ0FBUDtBQUM3MEMsYUFEdzBDLENBQ3YwQyxPQUFNdlYsQ0FBTixFQUFTO0FBQUMzQixtQkFBRzJCLENBQUg7QUFBTTtBQUFDLFNBRDB5QyxDQUN6eUNDLElBRHl5QyxDQUNweUMsSUFEb3lDLENBRjNxQixDQUFoTyxFQUdqWixZQUFZVixLQUhxWSxFQUFaLEVBR2pYLElBSGlYLEVBRzNXLElBSDJXLEVBR3JXLElBSHFXLEVBRy9WLFVBQVN3SixDQUFULEVBQVk7QUFBQ2hMLGdCQUFRLFVBQVIsSUFBc0JnTCxDQUF0QjtBQUF3QixLQUgwVCxDQUF2YSxFQUdnSHhLLFdBQVcsWUFBVztBQUFDLFlBQUk7QUFBQyxtQkFBTyw0QkFBS3dCLFlBQUwsSUFBbUIsWUFBWThVLFFBQS9CLEtBQTJDLENBQTNDLENBQVA7QUFBcUQsU0FBMUQsQ0FBMkQsT0FBTTdVLENBQU4sRUFBUztBQUFDM0IsZUFBRzJCLENBQUg7QUFBTTtBQUFDLEtBQXhGLENBQXlGQyxJQUF6RixDQUE4RixJQUE5RixDQUFYLENBSGhILENBQVA7QUFJQyxDOztBQXpKRDs7OztBQUE2Qjs7OztBQUFpRTs7QUFBMkU7Ozs7QUFBOEI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBdk07Ozs7QUFDQTs7OztJQUVxQjBVLE07Ozs7Ozs7OztFQUFlM1Asc0I7O2tCQUFmMlAsTTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNIckI7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQSxJQUFJYSxjQUFKO0FBQ0EsSUFBSSxJQUFKLEVBQXFCO0FBQUEsUUFHUkMsWUFIUSxHQUdqQixTQUFTQSxZQUFULENBQXFCQyxRQUFyQixFQUErQkMsUUFBL0IsRUFBeUM7QUFDckMsWUFBTUMsT0FBT2pPLFNBQVNxRSxhQUFULENBQXVCLHNCQUF2QixDQUFiO0FBQ0E0SixhQUFLM1MsSUFBTCxHQUFZMlMsS0FBSzNTLElBQUwsQ0FBVTRTLE9BQVYsWUFBMkJGLFFBQTNCLGFBQWdERCxRQUFoRCxDQUFaO0FBQ0FGLGdCQUFRRSxRQUFSO0FBQ0FJLHFCQUFhQyxPQUFiLENBQXFCLE9BQXJCLEVBQThCTCxRQUE5QjtBQUNILEtBUmdCOztBQUNqQkYsWUFBUU0sYUFBYUUsT0FBYixDQUFxQixPQUFyQixLQUFpQyxLQUF6Qzs7QUFRQSxRQUFJUixVQUFVLEtBQWQsRUFBcUI7QUFDakJDLHFCQUFZRCxLQUFaLEVBQW1CLEtBQW5CO0FBQ0g7QUFDSixDQVpELE1BWU87QUFDSEEsWUFBUSxLQUFSO0FBQ0g7O3VCQUdJaFosaUJBQU9DLFFBQVAsRTs7Ozs7Ozs7dUJBR0RDLFEsdUJBQVc7QUFDUCxlQUFPO0FBQ0g4WSxtQkFBT0E7QUFESixTQUFQO0FBR0gsSzs7dUJBRUR4WSxLLG9CQUFRO0FBQ0osYUFBS3VHLEVBQUwsQ0FBUSxlQUFSLEVBQXlCLFVBQUN3USxDQUFELEVBQUlrQyxDQUFKLEVBQU9DLENBQVAsRUFBYTtBQUNsQ1Qsd0JBQVlRLENBQVosRUFBZUMsQ0FBZjtBQUNILFNBRkQ7QUFHSCxLOzt1QkFFRDVVLE0scUJBQVM7QUFDTCxhQUFLNlUsTUFBTCxHQUFjLEtBQUsxVCxPQUFMLENBQWF1SixhQUFiLENBQTJCLFNBQTNCLENBQWQ7QUFDQSxhQUFLb0ssYUFBTDtBQUNILEs7O3VCQUVEQSxhLDRCQUFnQjtBQUNaLFlBQU1DLE1BQU0sS0FBSzVULE9BQUwsQ0FBYXVKLGFBQWIsQ0FBMkIsU0FBM0IsQ0FBWjtBQUNBLFlBQUlsQyxRQUFRLENBQVo7QUFDQSxZQUFJbUQsT0FBTyxDQUFYO0FBQ0EsWUFBSW9KLEdBQUosRUFBUztBQUNMcEosbUJBQU9vSixJQUFJN0QsVUFBWDtBQUNBMUksb0JBQVF1TSxJQUFJbk0sV0FBWjtBQUNIO0FBQ0QsYUFBS2lNLE1BQUwsQ0FBWUcsU0FBWixDQUFzQkMsR0FBdEIsQ0FBMEIsWUFBMUI7QUFDQSxhQUFLSixNQUFMLENBQVl2VyxLQUFaLENBQWtCa0ssS0FBbEIsR0FBNkJBLEtBQTdCO0FBQ0EsYUFBS3FNLE1BQUwsQ0FBWXZXLEtBQVosQ0FBa0JxTixJQUFsQixHQUE0QkEsSUFBNUI7QUFDSCxLOzs7RUFoQ3dCelEsZ0IsV0FFbEJDLFEsR0FBV0EsZ0I7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdkJ0QjtBQUNBO0FBQ0E7QUFDQSwyR0FBMkcsWUFBWSxTQUFTLEVBQUU7QUFDbEk7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O2tCQ0xlLFVBQVNhLEdBQVQsRUFBY0MsSUFBZCxFQUFvQkMsTUFBcEIsRUFBNEJDLE9BQTVCLEVBQXFDO0FBQ3BERixhQUFTQSxPQUFPRyxHQUFoQjtBQUNBSixZQUFRQSxNQUFNLEVBQWQ7QUFDQUUsZUFBV0EsU0FBUyxFQUFwQjtBQUNBLFFBQUlHLElBQUlKLEtBQUtLLElBQUwsQ0FBVUQsQ0FBbEI7QUFBQSxRQUFxQkUsS0FBS04sS0FBS0ssSUFBTCxDQUFVQyxFQUFwQztBQUFBLFFBQXdDQyxLQUFLUCxLQUFLSyxJQUFMLENBQVVFLEVBQXZEO0FBQUEsUUFBMkRDLFVBQVUsUUFBUSxLQUFLQSxPQUFiLElBQXdCLEVBQTdGO0FBQUEsUUFBaUdDLFVBQVUsRUFBM0c7QUFBQSxRQUErR0MsV0FBVyxFQUExSDtBQUFBLFFBQ0FDLE1BQU1YLEtBQUtZLEtBRFg7QUFBQSxRQUNrQkMsU0FBU0YsSUFBSUUsTUFEL0I7QUFBQSxRQUN1Q0MsS0FBS0gsSUFBSUksS0FEaEQ7QUFBQSxRQUN1REMsYUFBYUwsSUFBSU0sU0FEeEU7QUFBQSxRQUVBQyxNQUFNUCxJQUFJUSxPQUZWO0FBQUEsUUFFbUJDLFlBQVlGLElBQUlHLFFBRm5DO0FBQUEsUUFFNkNDLFlBQVlKLElBQUlLLFFBRjdEO0FBQUEsUUFHQUMsb0JBQW9CYixJQUFJYyxnQkFIeEI7QUFBQSxRQUcwQ0MseUJBQXlCZixJQUFJZ0IscUJBSHZFO0FBQUEsUUFJQUMsa0JBQWtCakIsSUFBSWtCLGNBSnRCO0FBQUEsUUFLQUMsT0FBTyxLQUFLQyxJQUxaO0FBQUEsUUFLa0JDLFFBQVEsSUFMMUI7QUFBQSxRQUtnQ0MsUUFBUWxDLEdBTHhDO0FBQUEsUUFLNkNtQyxVQUFVSixRQUFRQSxLQUFLSSxPQUxwRTtBQUFBLFFBSzZFQyxTQUFTLENBQUNqQyxXQUFXLEVBQVosRUFBZ0JrQyxNQUx0Rzs7QUFTQSxRQUFNMFcsTUFBTSxDQUNSO0FBQ0lHLGVBQU8sSUFEWDtBQUVJdlQsY0FBTSx3QkFGVjtBQUdJZixlQUFPO0FBSFgsS0FEUSxDQUFaOztBQXlCQSxXQUFPdkUsRUFBRSxLQUFGLEVBQVMsSUFBVCxFQUFlLENBQUNBLEVBQUUsS0FBRixFQUFTLElBQVQsRUFBZUEsRUFBRSxRQUFGLEVBQVksSUFBWixFQUFrQixDQUFDSyxRQUFRLFFBQVIsSUFBb0IsVUFBUzBCLE1BQVQsRUFBaUI7QUFBQyxlQUFPLENBQUMvQixFQUFFOFksY0FBRixFQUFRLEVBQUMsYUFBYSxNQUFkLEVBQXNCLFFBQVEsR0FBOUIsRUFBbUMsWUFBWSxLQUEvQyxFQUFzRCxZQUFZbFgsS0FBbEUsRUFBUixDQUFELEVBQW9GNUIsRUFBRSxLQUFGLEVBQVMsSUFBVCxFQUFlLENBQUNBLEVBQUUsS0FBRixFQUFTLElBQVQsRUFBZSxDQUFDSixLQUFLWSxLQUFMLENBQVcrQixHQUFYLENBQWUsWUFBVztBQUFDLGdCQUFJO0FBQUMsdUJBQU8sQ0FBQ21XLEdBQUQsRUFBTyxDQUFQLENBQVA7QUFBaUIsYUFBdEIsQ0FBdUIsT0FBTXJXLENBQU4sRUFBUztBQUFDM0IsbUJBQUcyQixDQUFIO0FBQU07QUFBQyxTQUFwRCxDQUFxREMsSUFBckQsQ0FBMEQsSUFBMUQsQ0FBZixFQUFnRixVQUFTckQsS0FBVCxFQUFnQmtHLEdBQWhCLEVBQXFCO0FBQy9ULG1CQUFPbkYsRUFBRThZLGNBQUYsRUFBUSxFQUFDLGFBQWFsWSxXQUFXLFlBQVc7QUFBQyx3QkFBSTtBQUFDLCtCQUFPLENBQUM7QUFDakMwVyxvQ0FBUXJZLE1BQU1zRixLQUFOLEtBQWdCMUMsTUFBTWtYO0FBREcseUJBQUQsRUFFaEMsQ0FGZ0MsQ0FBUDtBQUV0QixxQkFGaUIsQ0FFaEIsT0FBTTFXLENBQU4sRUFBUztBQUFDM0IsMkJBQUcyQixDQUFIO0FBQU07QUFBQyxpQkFGYixDQUVjQyxJQUZkLENBRW1CLElBRm5CLENBQVgsQ0FBZCxFQUVvRCxRQUFRLFlBQVc7QUFBQyx3QkFBSTtBQUFDLCtCQUFPLE1BQUksTUFBSixHQUF5QnJELE1BQU1xRyxJQUEvQixFQUF3QyxDQUF4QyxDQUFQO0FBQWtELHFCQUF2RCxDQUF3RCxPQUFNakQsQ0FBTixFQUFTO0FBQUMzQiwyQkFBRzJCLENBQUg7QUFBTTtBQUFDLGlCQUFyRixDQUFzRkMsSUFBdEYsQ0FBMkYsSUFBM0YsQ0FGNUQsRUFFOEosWUFBWSxZQUFXO0FBQUMsd0JBQUk7QUFBQywrQkFBTyxDQUFDckQsTUFBTTRaLEtBQVAsRUFBZSxDQUFmLENBQVA7QUFBeUIscUJBQTlCLENBQStCLE9BQU14VyxDQUFOLEVBQVM7QUFBQzNCLDJCQUFHMkIsQ0FBSDtBQUFNO0FBQUMsaUJBQTVELENBQTZEQyxJQUE3RCxDQUFrRSxJQUFsRSxDQUYxSyxFQUVtUCxZQUFZVixLQUYvUCxFQUFSLENBQVA7QUFHQyxTQUp5TixFQUl2TixJQUp1TixDQUFELEVBSS9NNUIsRUFBRSxLQUFGLEVBQVMsSUFBVCxFQUFlLElBQWYsRUFBcUIsUUFBckIsQ0FKK00sQ0FBZixDQUFELEVBSTdKQSxFQUFFLE1BQUYsRUFBVSxJQUFWLEVBQWdCLE9BQWhCLEVBQXlCLE9BQXpCLENBSjZKLEVBSTFIQSxFQUFFb1YsY0FBRixFQUFVLEVBQUMsV0FBVyxPQUFaLEVBQXFCLFNBQVMsS0FBOUIsRUFBcUMsWUFBWSxDQUFDcFYsRUFBRWdYLGNBQUYsRUFBVSxFQUFDLFNBQVMsS0FBVixFQUFpQixZQUFZLFNBQTdCLEVBQXdDLFlBQVlwVixLQUFwRCxFQUFWLENBQUQsRUFBd0U1QixFQUFFZ1gsY0FBRixFQUFVLEVBQUMsU0FBUyxPQUFWLEVBQW1CLFlBQVksT0FBL0IsRUFBd0MsWUFBWXBWLEtBQXBELEVBQVYsQ0FBeEUsQ0FBakQsRUFBaU0sWUFBWUEsS0FBN00sRUFBb04zQyxPQUFPK0IsVUFBVVUsSUFBVixFQUFnQixPQUFoQixDQUEzTixFQUFxUCxvQkFBb0Isd0JBQVNzWCxHQUFULEVBQWNDLEdBQWQsRUFBbUI7QUFBRS9YLDBCQUFVUSxJQUFWLEVBQWdCLE9BQWhCLEVBQXlCdVgsR0FBekIsRUFBOEJyWCxLQUE5QjtBQUFzQyxhQUFwVSxFQUFWLENBSjBILENBQWYsRUFJd08sT0FKeE8sQ0FBcEYsQ0FBUDtBQUk4VSxLQUpyWCxNQUkyWHRCLFNBQVMsUUFBVCxJQUFxQixVQUFTeUIsTUFBVCxFQUFpQjtBQUN6ZCxZQUFJTCxPQUFPLElBQVg7QUFDQSxlQUFPN0IsT0FBTyxRQUFQLElBQW1CQSxPQUFPLFFBQVAsRUFBaUJ5QyxJQUFqQixDQUFzQixJQUF0QixFQUE0QixZQUFXO0FBQ2pFLG1CQUFPakMsUUFBUSxRQUFSLEVBQWtCaUMsSUFBbEIsQ0FBdUJaLElBQXZCLEVBQTZCSyxNQUE3QixDQUFQO0FBQ0MsU0FGeUIsQ0FBbkIsR0FFRjFCLFFBQVEsUUFBUixFQUFrQmlDLElBQWxCLENBQXVCLElBQXZCLEVBQTZCUCxNQUE3QixDQUZMO0FBR0MsS0FUdUQsS0FTbER6QixTQUFTLFFBQVQsRUFBbUJnQyxJQUFuQixDQUF3QixJQUF4QixDQVRnQyxDQUFmLEVBU2UsZ0JBVGYsQ0FBRCxFQVNtQ3RDLEVBQUUsS0FBRixFQUFTLElBQVQsRUFBZSxDQUFDSyxRQUFRLFNBQVIsSUFBcUIsVUFBUzBCLE1BQVQsRUFBaUI7QUFBQyxlQUFPLElBQVA7QUFBYSxLQUFyRCxNQUEyRHpCLFNBQVMsU0FBVCxJQUFzQixVQUFTeUIsTUFBVCxFQUFpQjtBQUMxSyxZQUFJTCxPQUFPLElBQVg7QUFDQSxlQUFPN0IsT0FBTyxTQUFQLElBQW9CQSxPQUFPLFNBQVAsRUFBa0J5QyxJQUFsQixDQUF1QixJQUF2QixFQUE2QixZQUFXO0FBQ25FLG1CQUFPakMsUUFBUSxTQUFSLEVBQW1CaUMsSUFBbkIsQ0FBd0JaLElBQXhCLEVBQThCSyxNQUE5QixDQUFQO0FBQ0MsU0FGMEIsQ0FBcEIsR0FFRjFCLFFBQVEsU0FBUixFQUFtQmlDLElBQW5CLENBQXdCLElBQXhCLEVBQThCUCxNQUE5QixDQUZMO0FBR0MsS0FMdUUsS0FLbEV6QixTQUFTLFNBQVQsRUFBb0JnQyxJQUFwQixDQUF5QixJQUF6QixDQUxtRCxFQUtuQixpQkFMbUIsRUFLQSxJQUxBLEVBS00sVUFBUzhJLENBQVQsRUFBWTtBQUFDaEwsZ0JBQVEsU0FBUixJQUFxQmdMLENBQXJCO0FBQXVCLEtBTDFDLENBVG5DLENBQWYsRUFjZ0d4SyxXQUFXLFlBQVc7QUFBQyxZQUFJO0FBQUE7O0FBQUMsbUJBQU8sV0FBRSxnQkFBZ0IsSUFBbEIsU0FBeUJpQixNQUFNaEIsU0FBL0IsSUFBMkNnQixNQUFNaEIsU0FBakQsU0FBOEQsQ0FBOUQsQ0FBUDtBQUF3RSxTQUE3RSxDQUE4RSxPQUFNd0IsQ0FBTixFQUFTO0FBQUMzQixlQUFHMkIsQ0FBSDtBQUFNO0FBQUMsS0FBM0csQ0FBNEdDLElBQTVHLENBQWlILElBQWpILENBQVgsQ0FkaEcsQ0FBUDtBQWVDLEM7O0FBdEREOzs7O0FBQXVDIiwiZmlsZSI6InN0YXRpYy9jaHVuay85YTBlYTVkOTQ5NDI5YTIzMDRkZC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBJbnRhY3QgZnJvbSAnaW50YWN0JztcbmltcG9ydCB0ZW1wbGF0ZSBmcm9tICcuL2dyb3VwLnZkdCc7XG5pbXBvcnQgJy4vaW5kZXguc3R5bCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJ1dHRvbkdyb3VwIGV4dGVuZHMgSW50YWN0IHtcbiAgICBASW50YWN0LnRlbXBsYXRlKClcbiAgICBnZXQgdGVtcGxhdGUoKSB7IHJldHVybiB0ZW1wbGF0ZTsgfVxuXG4gICAgZGVmYXVsdHMoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB2ZXJ0aWNhbDogZmFsc2UsXG4gICAgICAgICAgICB2YWx1ZTogdW5kZWZpbmVkLFxuICAgICAgICAgICAgcmFkaW86IGZhbHNlLCAvLyBAZGVwcmVjYXRlZDogdXNlIGNoZWNrVHlwZSBpbnN0ZWFkIG9mXG4gICAgICAgICAgICBjaGVja1R5cGU6ICdub25lJywgLy8gcmFkaW8gfCBjaGVja2JveCB8IG5vbmVcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgICAgICB2ZXJ0aWNhbDogQm9vbGVhbixcbiAgICAgICAgcmFkaW86IEJvb2xlYW4sXG4gICAgfVxuXG4gICAgX2luaXQoKSB7XG4gICAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xuICAgICAgICBpZiAodGhpcy5nZXQoJ3JhZGlvJykpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0KCdjaGVja1R5cGUnLCAncmFkaW8nLCB7c2lsZW50OiB0cnVlfSk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvYnV0dG9uL2dyb3VwLmpzIiwiaW1wb3J0IEJ1dHRvbiBmcm9tICcuLyc7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihvYmosIF9WZHQsIGJsb2NrcywgJGNhbGxlZSkge1xuX1ZkdCB8fCAoX1ZkdCA9IFZkdCk7XG5vYmogfHwgKG9iaiA9IHt9KTtcbmJsb2NrcyB8fCAoYmxvY2tzID0ge30pO1xudmFyIGggPSBfVmR0Lm1pc3MuaCwgaGMgPSBfVmR0Lm1pc3MuaGMsIGh1ID0gX1ZkdC5taXNzLmh1LCB3aWRnZXRzID0gdGhpcyAmJiB0aGlzLndpZGdldHMgfHwge30sIF9ibG9ja3MgPSB7fSwgX19ibG9ja3MgPSB7fSxcbl9fdSA9IF9WZHQudXRpbHMsIGV4dGVuZCA9IF9fdS5leHRlbmQsIF9lID0gX191LmVycm9yLCBfY2xhc3NOYW1lID0gX191LmNsYXNzTmFtZSxcbl9fbyA9IF9fdS5PcHRpb25zLCBfZ2V0TW9kZWwgPSBfX28uZ2V0TW9kZWwsIF9zZXRNb2RlbCA9IF9fby5zZXRNb2RlbCxcbl9zZXRDaGVja2JveE1vZGVsID0gX191LnNldENoZWNrYm94TW9kZWwsIF9kZXRlY3RDaGVja2JveENoZWNrZWQgPSBfX3UuZGV0ZWN0Q2hlY2tib3hDaGVja2VkLFxuX3NldFNlbGVjdE1vZGVsID0gX191LnNldFNlbGVjdE1vZGVsLFxuc2VsZiA9IHRoaXMuZGF0YSwgJHRoaXMgPSB0aGlzLCBzY29wZSA9IG9iaiwgQW5pbWF0ZSA9IHNlbGYgJiYgc2VsZi5BbmltYXRlLCBwYXJlbnQgPSAoJGNhbGxlZSB8fCB7fSkuX3N1cGVyXG5cblxuY29uc3Qge1xuICAgIGNsYXNzTmFtZSwgdmVydGljYWwsIHN0eWxlLCBcbiAgICBjaGlsZHJlbiwgdmFsdWUsIGZsdWlkLCBjaGVja1R5cGVcbn0gPSBzZWxmLmdldCgpO1xuXG5jb25zdCBjbGFzc05hbWVPYmogPSB7XG4gICAgJ2stYnRucyc6IHRydWUsXG4gICAgJ2stdmVydGljYWwnOiB2ZXJ0aWNhbCxcbiAgICBbY2xhc3NOYW1lXTogY2xhc3NOYW1lLFxuICAgICdrLWZsdWlkJzogZmx1aWQsXG59O1xuXG5yZXR1cm4gaCgnZGl2JywgeydzdHlsZSc6IGZ1bmN0aW9uKCkge3RyeSB7cmV0dXJuIFtzdHlsZSBdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpfSwgZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW2NoZWNrVHlwZSAhPT0gJ25vbmUnID8gX191Lm1hcChcbiAgICAgICAgY2hpbGRyZW4gPyBcbiAgICAgICAgICAgIChBcnJheS5pc0FycmF5KGNoaWxkcmVuKSA/IGNoaWxkcmVuIDogW2NoaWxkcmVuXSkgOlxuICAgICAgICAgICAgY2hpbGRyZW4sIFxuICAgICAgICB2Tm9kZSA9PiB7XG4gICAgICAgICAgICBpZiAodk5vZGUudGFnID09PSBCdXR0b24pIHtcbiAgICAgICAgICAgICAgICB2Tm9kZS5wcm9wcyA9IHtcbiAgICAgICAgICAgICAgICAgICAgLi4udk5vZGUucHJvcHMsIFxuICAgICAgICAgICAgICAgICAgICBfdmFsdWU6IHZhbHVlLFxuICAgICAgICAgICAgICAgICAgICBfY2hlY2tUeXBlOiBjaGVja1R5cGUsXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHZOb2RlO1xuICAgICAgICB9KSA6IFxuICAgICAgICBjaGlsZHJlblxuXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKSwgX2NsYXNzTmFtZShmdW5jdGlvbigpIHt0cnkge3JldHVybiBbY2xhc3NOYW1lT2JqIF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcykpKVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvYnV0dG9uL2dyb3VwLnZkdCIsImltcG9ydCBJbnRhY3QgZnJvbSAnaW50YWN0JztcbmltcG9ydCB0ZW1wbGF0ZSBmcm9tICcuL2luZGV4LnZkdCc7XG5pbXBvcnQgR3JvdXAgZnJvbSAnLi9ncm91cCc7XG5pbXBvcnQgJy4uLy4uL3N0eWxlcy9rcGMuc3R5bCc7XG5pbXBvcnQgJy4vaW5kZXguc3R5bCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJ1dHRvbiBleHRlbmRzIEludGFjdCB7XG4gICAgQEludGFjdC50ZW1wbGF0ZSgpXG4gICAgZ2V0IHRlbXBsYXRlKCkgeyByZXR1cm4gdGVtcGxhdGU7IH1cblxuICAgIGRlZmF1bHRzKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdHlwZTogJ2RlZmF1bHQnLCAvLyBwcmltYXJ5IHwgd2FybmluZyB8IGRhbmdlclxuICAgICAgICAgICAgc2l6ZTogJ2RlZmF1bHQnLCAvLyBzbWFsbCB8IG1pbmlcbiAgICAgICAgICAgIGljb246IGZhbHNlLFxuICAgICAgICAgICAgY2lyY2xlOiBmYWxzZSxcbiAgICAgICAgICAgIGxvYWRpbmc6IGZhbHNlLFxuICAgICAgICAgICAgZGlzYWJsZWQ6IGZhbHNlLFxuICAgICAgICAgICAgZmx1aWQ6IGZhbHNlLFxuICAgICAgICAgICAgaHRtbFR5cGU6ICdidXR0b24nLFxuICAgICAgICAgICAgdGFnTmFtZTogJ2J1dHRvbicsXG4gICAgICAgICAgICB0YWdQcm9wczogdW5kZWZpbmVkLFxuICAgICAgICAgICAgdmFsdWU6IHVuZGVmaW5lZCxcbiAgICAgICAgICAgIG5hbWU6IHVuZGVmaW5lZCxcbiAgICAgICAgICAgIHRhYmluZGV4OiAnMCcsXG5cbiAgICAgICAgICAgIF92YWx1ZTogdW5kZWZpbmVkLFxuICAgICAgICAgICAgX2NoZWNrVHlwZTogJ25vbmUnLFxuICAgICAgICB9O1xuICAgIH1cblxuICAgIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgc2l6ZTogU3RyaW5nLFxuICAgICAgICBpY29uOiBCb29sZWFuLFxuICAgICAgICBjaXJjbGU6IEJvb2xlYW4sXG4gICAgICAgIGxvYWRpbmc6IEJvb2xlYW4sXG4gICAgICAgIGRpc2FibGVkOiBCb29sZWFuLFxuICAgICAgICBmbHVpZDogQm9vbGVhbixcbiAgICAgICAgaHRtbFR5cGU6IFN0cmluZyxcbiAgICAgICAgdGFnTmFtZTogW1N0cmluZywgRnVuY3Rpb25dLFxuICAgICAgICBuYW1lOiBTdHJpbmcsXG4gICAgfVxuXG4gICAgX21vdW50KCkge1xuICAgICAgICBsZXQgcGFyZW50Vk5vZGUgPSB0aGlzLnBhcmVudFZOb2RlO1xuXG4gICAgICAgIHdoaWxlIChwYXJlbnRWTm9kZSAmJiBwYXJlbnRWTm9kZS50YWcgIT09IEdyb3VwKSB7XG4gICAgICAgICAgICBwYXJlbnRWTm9kZSA9IHBhcmVudFZOb2RlLnBhcmVudFZOb2RlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHBhcmVudFZOb2RlKSB7XG4gICAgICAgICAgICB0aGlzLmdyb3VwID0gcGFyZW50Vk5vZGUuY2hpbGRyZW47XG5cbiAgICAgICAgICAgIHRoaXMuc2V0KHtcbiAgICAgICAgICAgICAgICBfY2hlY2tUeXBlOiB0aGlzLmdyb3VwLmdldCgnY2hlY2tUeXBlJyksXG4gICAgICAgICAgICAgICAgX3ZhbHVlOiB0aGlzLmdyb3VwLmdldCgndmFsdWUnKVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBfYmVmb3JlVXBkYXRlKCkge1xuICAgICAgICBpZiAodGhpcy5ncm91cCkge1xuICAgICAgICAgICAgdGhpcy5zZXQoe1xuICAgICAgICAgICAgICAgIF9jaGVja1R5cGU6IHRoaXMuZ3JvdXAuZ2V0KCdjaGVja1R5cGUnKSxcbiAgICAgICAgICAgICAgICBfdmFsdWU6IHRoaXMuZ3JvdXAuZ2V0KCd2YWx1ZScpXG4gICAgICAgICAgICB9LCB7c2lsZW50OiB0cnVlfSk7XG4gICAgICAgIH0gXG4gICAgfVxuXG4gICAgc2hvd0xvYWRpbmcoKSB7XG4gICAgICAgIHRoaXMuc2V0KCdsb2FkaW5nJywgdHJ1ZSk7XG4gICAgfVxuXG4gICAgaGlkZUxvYWRpbmcoKSB7XG4gICAgICAgIHRoaXMuc2V0KCdsb2FkaW5nJywgZmFsc2UpO1xuICAgIH1cblxuICAgIGRpc2FibGUoKSB7XG4gICAgICAgIHRoaXMuc2V0KCdkaXNhYmxlZCcsIHRydWUpO1xuICAgIH1cblxuICAgIGVuYWJsZSgpIHtcbiAgICAgICAgdGhpcy5zZXQoJ2Rpc2FibGVkJywgZmFsc2UpO1xuICAgIH1cblxuICAgIF9vbkNsaWNrKGUpIHtcbiAgICAgICAgaWYgKHRoaXMuZ2V0KCdkaXNhYmxlZCcpIHx8IHRoaXMuZ2V0KCdsb2FkaW5nJykpIHtcbiAgICAgICAgICAgIHJldHVybiBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5ncm91cCkge1xuICAgICAgICAgICAgbGV0IHtfY2hlY2tUeXBlLCB2YWx1ZSwgX3ZhbHVlfSA9IHRoaXMuZ2V0KCk7XG4gICAgICAgICAgICBpZiAodmFsdWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIGlmIChfY2hlY2tUeXBlID09PSAncmFkaW8nKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZ3JvdXAuc2V0KCd2YWx1ZScsIHZhbHVlKTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKF9jaGVja1R5cGUgPT09ICdjaGVja2JveCcpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFBcnJheS5pc0FycmF5KF92YWx1ZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIF92YWx1ZSA9IFtdO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIF92YWx1ZSA9IF92YWx1ZS5zbGljZSgwKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgaW5kZXggPSBfdmFsdWUuaW5kZXhPZih2YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgIGlmICghfmluZGV4KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBfdmFsdWUucHVzaCh2YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBfdmFsdWUuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB0aGlzLmdyb3VwLnNldCgndmFsdWUnLCBfdmFsdWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGUuY29tcG9uZW50ID0gdGhpcztcbiAgICAgICAgdGhpcy50cmlnZ2VyKCdjbGljaycsIGUpO1xuICAgIH1cblxuICAgIF9ibHVyKCkge1xuICAgICAgICAvLyB3aGVuIGNsaWNrLCBibHVyIGl0IHRvIHJlbW92ZSB0aGUgZm9jdXMgc3R5bGVcbiAgICAgICAgdGhpcy5lbGVtZW50LmJsdXIoKTtcbiAgICB9XG59XG5cbmV4cG9ydCB7QnV0dG9uLCBHcm91cCBhcyBCdXR0b25Hcm91cH07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL2J1dHRvbi9pbmRleC5qcyIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG4gICAgaWYobW9kdWxlLmhvdCkge1xuICAgICAgLy8gMTUyNzc1NDQwNzY5NlxuICAgICAgdmFyIGNzc1JlbG9hZCA9IHJlcXVpcmUoXCIhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1ob3QtbG9hZGVyL2hvdE1vZHVsZVJlcGxhY2VtZW50LmpzXCIpKG1vZHVsZS5pZCwge1wiZmlsZU1hcFwiOlwie2ZpbGVOYW1lfVwifSk7XG4gICAgICBtb2R1bGUuaG90LmRpc3Bvc2UoY3NzUmVsb2FkKTtcbiAgICAgIG1vZHVsZS5ob3QuYWNjZXB0KHVuZGVmaW5lZCwgY3NzUmVsb2FkKTtcbiAgICB9XG4gIFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vY29tcG9uZW50cy9idXR0b24vaW5kZXguc3R5bFxuLy8gbW9kdWxlIGlkID0gLi9jb21wb25lbnRzL2J1dHRvbi9pbmRleC5zdHlsXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7aXNTdHJpbmdPck51bWJlck5vdEVtcHR5fSBmcm9tICcuLi91dGlscyc7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihvYmosIF9WZHQsIGJsb2NrcywgJGNhbGxlZSkge1xuX1ZkdCB8fCAoX1ZkdCA9IFZkdCk7XG5vYmogfHwgKG9iaiA9IHt9KTtcbmJsb2NrcyB8fCAoYmxvY2tzID0ge30pO1xudmFyIGggPSBfVmR0Lm1pc3MuaCwgaGMgPSBfVmR0Lm1pc3MuaGMsIGh1ID0gX1ZkdC5taXNzLmh1LCB3aWRnZXRzID0gdGhpcyAmJiB0aGlzLndpZGdldHMgfHwge30sIF9ibG9ja3MgPSB7fSwgX19ibG9ja3MgPSB7fSxcbl9fdSA9IF9WZHQudXRpbHMsIGV4dGVuZCA9IF9fdS5leHRlbmQsIF9lID0gX191LmVycm9yLCBfY2xhc3NOYW1lID0gX191LmNsYXNzTmFtZSxcbl9fbyA9IF9fdS5PcHRpb25zLCBfZ2V0TW9kZWwgPSBfX28uZ2V0TW9kZWwsIF9zZXRNb2RlbCA9IF9fby5zZXRNb2RlbCxcbl9zZXRDaGVja2JveE1vZGVsID0gX191LnNldENoZWNrYm94TW9kZWwsIF9kZXRlY3RDaGVja2JveENoZWNrZWQgPSBfX3UuZGV0ZWN0Q2hlY2tib3hDaGVja2VkLFxuX3NldFNlbGVjdE1vZGVsID0gX191LnNldFNlbGVjdE1vZGVsLFxuc2VsZiA9IHRoaXMuZGF0YSwgJHRoaXMgPSB0aGlzLCBzY29wZSA9IG9iaiwgQW5pbWF0ZSA9IHNlbGYgJiYgc2VsZi5BbmltYXRlLCBwYXJlbnQgPSAoJGNhbGxlZSB8fCB7fSkuX3N1cGVyXG5cblxubGV0IHtcbiAgICB0eXBlLCBjbGFzc05hbWUsIHNpemUsIGljb24sIGNpcmNsZSwgcmVmLCBrZXksIHRhYmluZGV4LFxuICAgIHRhZ05hbWUsIGh0bWxUeXBlLCBmbHVpZCwgY2hpbGRyZW4sIGxvYWRpbmcsIGRpc2FibGVkLFxuICAgIHZhbHVlLCBfdmFsdWUsIG5hbWUsIHRhZ1Byb3BzLCBfY2hlY2tUeXBlLCAuLi5yZXN0XG59ID0gc2VsZi5nZXQoKTtcblxuY29uc3QgY2hlY2tlZCA9IHZhbHVlICE9PSB1bmRlZmluZWQgP1xuICAgIF9jaGVja1R5cGUgPT09ICdyYWRpbycgPyBcbiAgICAgICAgdmFsdWUgPT09IF92YWx1ZSA6ICBcbiAgICAgICAgKFxuICAgICAgICAgICAgX2NoZWNrVHlwZSA9PT0gJ2NoZWNrYm94JyA/IFxuICAgICAgICAgICAgICAgIEFycmF5LmlzQXJyYXkoX3ZhbHVlKSAmJiAhIX5fdmFsdWUuaW5kZXhPZih2YWx1ZSkgOlxuICAgICAgICAgICAgICAgIGZhbHNlXG4gICAgICAgIClcbiAgICA6IGZhbHNlO1xuXG5jb25zdCBjbGFzc05hbWVPYmogPSB7XG4gICAgJ2stYnRuJzogdHJ1ZSxcbiAgICBbYGstJHt0eXBlfWBdOiB0eXBlICE9PSAnZGVmYXVsdCcsXG4gICAgJ2stYnRuLWljb24nOiBpY29uLFxuICAgIFtgay0ke3NpemV9YF06IHNpemUgIT09ICdkZWZhdWx0JyxcbiAgICBbY2xhc3NOYW1lXTogY2xhc3NOYW1lLCBcbiAgICAnay1jaXJjbGUnOiBjaXJjbGUsXG4gICAgJ2stbG9hZGluZyc6IGxvYWRpbmcsXG4gICAgJ2stZmx1aWQnOiBmbHVpZCxcbiAgICAnay1hY3RpdmUnOiBjaGVja2VkLFxuICAgICdrLWRpc2FibGVkJzogZGlzYWJsZWQgfHwgbG9hZGluZyxcbn07XG5cbmNvbnN0IEJ1dHRvbiA9IHByb3BzID0+IHtcbiAgICBpZiAocHJvcHMuaHJlZiAmJiB0YWdOYW1lID09PSAnYnV0dG9uJykge1xuICAgICAgICB0YWdOYW1lID0gJ2EnO1xuICAgIH1cbiAgICBpZiAodGFnTmFtZSA9PT0gJ2J1dHRvbicpIHtcbiAgICAgICAgLy8gc2V0IHR5cGUgb2YgaHRtbCBidXR0b25cbiAgICAgICAgcHJvcHMudHlwZSA9IGh0bWxUeXBlO1xuICAgIH1cbiAgICAvLyBkaXNhYmxlIGJ1dHRvbiB3aGVuIGxvYWRpbmdcbiAgICAvKiBpZiAobG9hZGluZykgcHJvcHMuZGlzYWJsZWQgPSB0cnVlOyAqL1xuICAgIHJldHVybiBoKHRhZ05hbWUsIHByb3BzLCBwcm9wcy5jaGlsZHJlbik7XG59O1xuXG4vLyBoYWNrIGZvciBsb2FkaW5nIHRyYW5zaXRpb24gb2Ygd2lkdGhcbmlmICghaWNvbiAmJiBBcnJheS5pc0FycmF5KGNoaWxkcmVuKSkge1xuICAgIGNoaWxkcmVuLmZvckVhY2goKGNoaWxkLCBpbmRleCkgPT4ge1xuICAgICAgICBpZiAoY2hpbGQpIHtcbiAgICAgICAgICAgIGlmIChjaGlsZC50eXBlID09PSAxIHx8IGlzU3RyaW5nT3JOdW1iZXJOb3RFbXB0eShjaGlsZCkpIHtcbiAgICAgICAgICAgICAgICAvLyBpcyBhIHRleHQgbm9kZVxuICAgICAgICAgICAgICAgIC8vIHdyYXAgdGV4dCBub2RlIHdpdGggc3BhblxuICAgICAgICAgICAgICAgIGNoaWxkcmVuW2luZGV4XSA9IGgoJ3NwYW4nLCBudWxsLCBmdW5jdGlvbigpIHt0cnkge3JldHVybiBbY2hpbGQgXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIHdoZXRoZXIgdGhlIGljb24gaXMgb24gdGhlIGxlZnQgc2lkZSBvciByaWdodFxuICAgICAgICAgICAgaWYgKGluZGV4ID09PSAwKSB7XG4gICAgICAgICAgICAgICAgaWYgKGNoaWxkLmNsYXNzTmFtZSAmJiBjaGlsZC5jbGFzc05hbWUuaW5kZXhPZignaWNvbicpID4gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lT2JqWydrLWljb24tbGVmdCddID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGluZGV4ID09PSBjaGlsZHJlbi5sZW5ndGggLSAxKSB7XG4gICAgICAgICAgICAgICAgaWYgKGNoaWxkLmNsYXNzTmFtZSAmJiBjaGlsZC5jbGFzc05hbWUuaW5kZXhPZignaWNvbicpID4gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lT2JqWydrLWljb24tcmlnaHQnXSA9IHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSk7XG59IGVsc2UgaWYgKGlzU3RyaW5nT3JOdW1iZXJOb3RFbXB0eShjaGlsZHJlbikpIHtcbiAgICAvLyB3cmFwIHRleHQgbm9kZSB3aXRoIHNwYW5cbiAgICBjaGlsZHJlbiA9IGgoJ3NwYW4nLCBudWxsLCBmdW5jdGlvbigpIHt0cnkge3JldHVybiBbY2hpbGRyZW4gXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKSlcbn1cblxucmV0dXJuIGgoQnV0dG9uLCB7J2NsYXNzTmFtZSc6IF9jbGFzc05hbWUoZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW2NsYXNzTmFtZU9iaiBdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpKSwgLi4uZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW3Jlc3QgXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKSwgLi4uZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW3RhZ1Byb3BzIF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcyksICdldi1jbGljayc6IGZ1bmN0aW9uKCkge3RyeSB7cmV0dXJuIFtzZWxmLl9vbkNsaWNrIF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcyksICd0YWJpbmRleCc6IGZ1bmN0aW9uKCkge3RyeSB7cmV0dXJuIFtkaXNhYmxlZCB8fCBsb2FkaW5nID8gXCItMVwiIDogdGFiaW5kZXggXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKSwgJ2V2LW1vdXNldXAnOiBmdW5jdGlvbigpIHt0cnkge3JldHVybiBbc2VsZi5fYmx1ciBdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpLCAnY2hpbGRyZW4nOiBbJ1xcbiAgICAnLCBmdW5jdGlvbigpIHt0cnkge3JldHVybiBbbG9hZGluZyA/IFxuICAgICAgICBjbGFzc05hbWVPYmpbJ2staWNvbi1yaWdodCddID9cbiAgICAgICAgICAgIFtjaGlsZHJlbiwgaCgnaScsIG51bGwsIG51bGwsICdrLWljb24gaW9uLWxvYWQtYyBpY29uLWxvYWRpbmcnKV0gOlxuICAgICAgICAgICAgW2goJ2knLCBudWxsLCBudWxsLCAnay1pY29uIGlvbi1sb2FkLWMgaWNvbi1sb2FkaW5nJyksIGNoaWxkcmVuXSA6XG4gICAgICAgIGNoaWxkcmVuIFxuICAgIF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcyksICdcXG4gICAgJywgZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW19jaGVja1R5cGUgIT09ICdub25lJyBdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpID8gaCgnaW5wdXQnLCB7J3R5cGUnOiBmdW5jdGlvbigpIHt0cnkge3JldHVybiBbX2NoZWNrVHlwZSBdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpLCAnbmFtZSc6IGZ1bmN0aW9uKCkge3RyeSB7cmV0dXJuIFtuYW1lIF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcyksICdjaGVja2VkJzogZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW2NoZWNrZWQgXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKSwgJ3RhYmluZGV4JzogJy0xJ30pIDogdW5kZWZpbmVkXSwgJ19jb250ZXh0JzogJHRoaXN9KVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvYnV0dG9uL2luZGV4LnZkdCIsImltcG9ydCBJbnRhY3QgZnJvbSAnaW50YWN0JztcbmltcG9ydCB7aXNUZXh0Vk5vZGUsIGZpbmRQYXJlbnRDb21wb25lbnR9IGZyb20gJy4uL3V0aWxzJztcbmltcG9ydCBEcm9wZG93bk1lbnUgZnJvbSAnLi9tZW51JztcblxuY29uc3QgaCA9IEludGFjdC5WZHQubWlzcy5oO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEcm9wZG93biBleHRlbmRzIEludGFjdCB7XG4gICAgQEludGFjdC50ZW1wbGF0ZSgpXG4gICAgc3RhdGljIHRlbXBsYXRlKGRhdGEpIHtcbiAgICAgICAgcmV0dXJuIGRhdGEuZ2V0KCdjaGlsZHJlbicpO1xuICAgIH1cblxuICAgIGRlZmF1bHRzKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdHJpZ2dlcjogJ2hvdmVyJyxcbiAgICAgICAgICAgIGRpc2FibGVkOiBmYWxzZSxcbiAgICAgICAgfVxuICAgIH1cblxuICAgIF9pbml0KCkge1xuICAgICAgICB0aGlzLl9zYXZlT3JpZ2luYWxFdmVudHMoKTtcbiAgICAgICAgdGhpcy5vbignJHJlY2VpdmU6Y2hpbGRyZW4nLCAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLl9zYXZlT3JpZ2luYWxFdmVudHMoKTtcbiAgICAgICAgfSwge2tlZXA6IHRydWV9KTtcbiAgICB9XG5cbiAgICBfc2F2ZU9yaWdpbmFsRXZlbnRzKCkge1xuICAgICAgICBsZXQge2NoaWxkcmVuLCB0cmlnZ2VyLCBjbGFzc05hbWUsIC4uLnJlc3R9ID0gdGhpcy5nZXQoKTtcbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoY2hpbGRyZW4pKSB7XG4gICAgICAgICAgICBjaGlsZHJlbiA9IGNoaWxkcmVuWzBdO1xuICAgICAgICB9IFxuICAgICAgICBpZiAoaXNUZXh0Vk5vZGUoY2hpbGRyZW4pKSB7XG4gICAgICAgICAgICBjaGlsZHJlbiA9IGgoJ3NwYW4nLCByZXN0LCBjaGlsZHJlbiwgY2xhc3NOYW1lKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIHNhdmUgdGhlIG9yaWdpbmFsIGV2ZW50XG4gICAgICAgIGNvbnN0IG9yaWdpblByb3BzID0gY2hpbGRyZW4ucHJvcHM7XG4gICAgICAgIGxldCBoYXNTYXZlZCA9IGZhbHNlO1xuICAgICAgICBpZiAoIW9yaWdpblByb3BzLl9oYXNTYXZlZCkge1xuICAgICAgICAgICAgY2hpbGRyZW4uX2V2Q2xpY2sgPSBvcmlnaW5Qcm9wc1snZXYtY2xpY2snXTtcbiAgICAgICAgICAgIGNoaWxkcmVuLl9ldk1vdXNlRW50ZXIgPSBvcmlnaW5Qcm9wc1snZXYtbW91c2VlbnRlciddO1xuICAgICAgICAgICAgY2hpbGRyZW4uX2V2TW91c2VMZWF2ZSA9IG9yaWdpblByb3BzWydldi1tb3VzZWxlYXZlJ107XG4gICAgICAgICAgICBoYXNTYXZlZCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgcHJvcHMgPSB7fTtcbiAgICAgICAgLy8gaWYgKHRyaWdnZXIgPT09ICdjbGljaycpIHtcbiAgICAgICAgICAgIHByb3BzWydldi1jbGljayddID0gdGhpcy5zaG93LmJpbmQodGhpcywgY2hpbGRyZW4uX2V2Q2xpY2spO1xuICAgICAgICAvLyB9IGVsc2Uge1xuICAgICAgICBpZiAodHJpZ2dlciA9PT0gJ2hvdmVyJykge1xuICAgICAgICAgICAgcHJvcHNbJ2V2LW1vdXNlZW50ZXInXSA9IHRoaXMuc2hvdy5iaW5kKHRoaXMsIGNoaWxkcmVuLl9ldk1vdXNlRW50ZXIpO1xuICAgICAgICAgICAgcHJvcHNbJ2V2LW1vdXNlbGVhdmUnXSA9IHRoaXMuaGlkZS5iaW5kKHRoaXMsIGNoaWxkcmVuLl9ldk1vdXNlTGVhdmUpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChoYXNTYXZlZCkge1xuICAgICAgICAgICAgcHJvcHMuX2hhc1NhdmVkID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBjaGlsZHJlbi5wcm9wcyA9IHsuLi5jaGlsZHJlbi5wcm9wcywgLi4ucHJvcHN9O1xuICAgICAgICB0aGlzLnNldCgnY2hpbGRyZW4nLCBjaGlsZHJlbiwge3NpbGVudDogdHJ1ZX0pO1xuICAgIH1cblxuICAgIF9tb3VudCgpIHtcbiAgICAgICAgLy8gdGhlIG5leHQgc2libGluZyBpcyBEcm9wZG93bk1lbnVcbiAgICAgICAgLy8gd2UgY2FuIG5vdCBnZXQgdGhlIG1lbnUgYnkgY2FsbCBnZXQoJ21lbnUnKSBkaXJlY3RseSxcbiAgICAgICAgLy8gYmVjYXVzZSB0aGUgdk5vZGUgbWF5IGJlIGNsb25lZFxuICAgICAgICBjb25zdCBzaWJsaW5ncyA9IHRoaXMucGFyZW50Vk5vZGUuY2hpbGRyZW47XG4gICAgICAgIGNvbnN0IGluZGV4ID0gc2libGluZ3MuaW5kZXhPZih0aGlzLnZOb2RlKTtcbiAgICAgICAgY29uc3QgbWVudSA9IHNpYmxpbmdzW2luZGV4ICsgMV07XG4gICAgICAgIG1lbnUuY2hpbGRyZW4uZHJvcGRvd24gPSB0aGlzO1xuICAgICAgICB0aGlzLm1lbnUgPSBtZW51O1xuICAgIH1cblxuICAgIHNob3coZm4sIGUsIGlzRm9jdXMpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBmbiA9PT0gJ2Z1bmN0aW9uJykgZm4oZSk7XG5cbiAgICAgICAgaWYgKHRoaXMuZ2V0KCdkaXNhYmxlZCcpKSByZXR1cm47XG5cbiAgICAgICAgY29uc3QgbWVudSA9IHRoaXMubWVudS5jaGlsZHJlbjtcbiAgICAgICAgbWVudS5zaG93KCk7XG5cbiAgICAgICAgaWYgKGlzRm9jdXMpIHtcbiAgICAgICAgICAgIG1lbnUuZm9jdXNJdGVtQnlJbmRleCgwKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGhpZGUoZm4sIGUsIGltbWVkaWF0ZWx5KSB7XG4gICAgICAgIGlmICh0eXBlb2YgZm4gPT09ICdmdW5jdGlvbicpIGZuKGUpO1xuXG4gICAgICAgIGlmICh0aGlzLmdldCgnZGlzYWJsZWQnKSkgcmV0dXJuO1xuXG4gICAgICAgIGNvbnN0IG1lbnUgPSB0aGlzLm1lbnUuY2hpbGRyZW47XG4gICAgICAgIG1lbnUuaGlkZShpbW1lZGlhdGVseSk7XG4gICAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9kcm9wZG93bi9kcm9wZG93bi5qcyIsImltcG9ydCBJbnRhY3QgZnJvbSAnaW50YWN0JztcbmltcG9ydCBEcm9wZG93biBmcm9tICcuL2Ryb3Bkb3duJztcbmltcG9ydCBEcm9wZG93bk1lbnUgZnJvbSAnLi9tZW51JztcbmltcG9ydCBEcm9wZG93bkl0ZW0gZnJvbSAnLi9pdGVtJztcbmltcG9ydCAnLi4vLi4vc3R5bGVzL2twYy5zdHlsJztcbmltcG9ydCAnLi9pbmRleC5zdHlsJztcblxuY29uc3QgaCA9IEludGFjdC5WZHQubWlzcy5oO1xuXG5mdW5jdGlvbiBXcmFwcGVyKHByb3BzLCBpblZ1ZSkge1xuICAgIGxldCB7XG4gICAgICAgIGNoaWxkcmVuLCBwb3NpdGlvbiwga2V5LFxuICAgICAgICByZWYsIC4uLnJlc3RcbiAgICB9ID0gcHJvcHM7XG5cbiAgICBjb25zdCBlbGVtZW50ID0gY2hpbGRyZW5bMF07XG4gICAgY29uc3QgbWVudSA9IGNoaWxkcmVuWzFdO1xuXG4gICAgbWVudS5wcm9wcyA9IHtcbiAgICAgICAgcG9zaXRpb24sIFxuICAgICAgICBrZXk6IGtleSA9PSBudWxsID8ga2V5IDogYCR7a2V5fS5tZW51YCxcbiAgICAgICAgLi4ucmVzdCxcbiAgICAgICAgLi4ubWVudS5wcm9wcyxcbiAgICB9O1xuXG4gICAgcmV0dXJuICFpblZ1ZSA/IFxuICAgICAgICBbXG4gICAgICAgICAgICBoKERyb3Bkb3duLCB7XG4gICAgICAgICAgICAgICAga2V5OiBrZXkgPT0gbnVsbCA/IGtleSA6IGAke2tleX0udHJpZ2dlcmAsXG4gICAgICAgICAgICAgICAgcmVmOiByZWYsXG4gICAgICAgICAgICAgICAgY2hpbGRyZW46IGVsZW1lbnQsIFxuICAgICAgICAgICAgICAgIC4uLnJlc3RcbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgbWVudVxuICAgICAgICBdIDpcbiAgICAgICAgaChEcm9wZG93blZ1ZVdyYXBwZXIsIHtcbiAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgICAgaChEcm9wZG93biwge1xuICAgICAgICAgICAgICAgICAgICBrZXk6IGtleSA9PSBudWxsID8ga2V5IDogYCR7a2V5fS50cmlnZ2VyYCxcbiAgICAgICAgICAgICAgICAgICAgcmVmOiByZWYsXG4gICAgICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBbZWxlbWVudF0sIFxuICAgICAgICAgICAgICAgICAgICAuLi5yZXN0XG4gICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgbWVudVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIC4uLnJlc3RcbiAgICAgICAgfSk7XG59XG5cbi8vIFZ1ZSBvbmx5IHN1cHBvcnQgcmV0dXJuIG9uZSBlbGVtZW50IGZyb20gZnVuY3Rpb25hbCBjb21wb25lbnQsXG4vLyBzbyB3ZSB3cmFwIHRoZW0uIFRoaXMgd2lsbCBsZWFkIHRvIGRhbWFnZSB0aGUgZG9tIHN0cnVjdGlvbixcbi8vIGJlY2F1c2Ugd2UgbXVzdCB3cmFwIHRoZW0gd2l0aCBhIGRpdlxuY29uc3QgX2NsYXNzTmFtZSA9IEludGFjdC5WZHQudXRpbHMuY2xhc3NOYW1lO1xuY2xhc3MgRHJvcGRvd25WdWVXcmFwcGVyIGV4dGVuZHMgSW50YWN0IHtcbiAgICB0ZW1wbGF0ZShkYXRhKSB7XG4gICAgICAgIGNvbnN0IHtjbGFzc05hbWUsIGNoaWxkcmVuLCAuLi5yZXN0fSA9IGRhdGEuZ2V0KCk7XG4gICAgICAgIHJldHVybiBoKCdkaXYnLCByZXN0LCBjaGlsZHJlbiwgX2NsYXNzTmFtZSh7XG4gICAgICAgICAgICAnay1kcm9wZG93bic6IHRydWUsXG4gICAgICAgICAgICBbY2xhc3NOYW1lXTogY2xhc3NOYW1lLFxuICAgICAgICB9KSk7XG4gICAgfVxufVxuXG5jb25zdCBfV3JhcHBlciA9IEludGFjdC5mdW5jdGlvbmFsV3JhcHBlciA/XG4gICAgSW50YWN0LmZ1bmN0aW9uYWxXcmFwcGVyKFdyYXBwZXIpIDogV3JhcHBlcjtcblxuZXhwb3J0IGRlZmF1bHQgX1dyYXBwZXI7XG5cbmV4cG9ydCB7X1dyYXBwZXIgYXMgRHJvcGRvd24sIERyb3Bkb3duTWVudSwgRHJvcGRvd25JdGVtfTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvZHJvcGRvd24vaW5kZXguanMiLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuICAgIGlmKG1vZHVsZS5ob3QpIHtcbiAgICAgIC8vIDE1Mjc3NTQ0MDkzNjlcbiAgICAgIHZhciBjc3NSZWxvYWQgPSByZXF1aXJlKFwiIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtaG90LWxvYWRlci9ob3RNb2R1bGVSZXBsYWNlbWVudC5qc1wiKShtb2R1bGUuaWQsIHtcImZpbGVNYXBcIjpcIntmaWxlTmFtZX1cIn0pO1xuICAgICAgbW9kdWxlLmhvdC5kaXNwb3NlKGNzc1JlbG9hZCk7XG4gICAgICBtb2R1bGUuaG90LmFjY2VwdCh1bmRlZmluZWQsIGNzc1JlbG9hZCk7XG4gICAgfVxuICBcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2NvbXBvbmVudHMvZHJvcGRvd24vaW5kZXguc3R5bFxuLy8gbW9kdWxlIGlkID0gLi9jb21wb25lbnRzL2Ryb3Bkb3duL2luZGV4LnN0eWxcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IEludGFjdCBmcm9tICdpbnRhY3QnO1xuaW1wb3J0IHRlbXBsYXRlIGZyb20gJy4vaXRlbS52ZHQnO1xuaW1wb3J0IERyb3Bkb3duIGZyb20gJy4vZHJvcGRvd24nO1xuaW1wb3J0IERyb3Bkb3duTWVudSBmcm9tICcuL21lbnUnO1xuaW1wb3J0IHtmaW5kUGFyZW50Q29tcG9uZW50fSBmcm9tICcuLi91dGlscyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERyb3Bkb3duSXRlbSBleHRlbmRzIEludGFjdCB7XG4gICAgQEludGFjdC50ZW1wbGF0ZSgpXG4gICAgc3RhdGljIHRlbXBsYXRlID0gdGVtcGxhdGU7XG5cbiAgICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgICAgICBkaXNhYmxlZDogQm9vbGVhbixcbiAgICAgICAgaGlkZU9uU2VsZWN0OiBCb29sZWFuLFxuICAgIH07XG5cbiAgICBkZWZhdWx0cygpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGRpc2FibGVkOiBmYWxzZSxcbiAgICAgICAgICAgIGhpZGVPblNlbGVjdDogdHJ1ZSxcblxuICAgICAgICAgICAgX2lzRm9jdXM6IGZhbHNlLFxuICAgICAgICB9O1xuICAgIH1cblxuICAgIF9pbml0KCkge1xuICAgICAgICAvLyBpZiBzZWxlY3RlZCBoaWRlIGFsbCBkcm9wZG93biBtZW51XG4gICAgICAgIHRoaXMub24oJ3NlbGVjdCcsICgpID0+IHtcbiAgICAgICAgICAgIGlmICh0aGlzLmdldCgnaGlkZU9uU2VsZWN0JykpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBhbmNlc3RvciA9IHRoaXMuX2ZpbmRBbmNlc3RvckRyb3Bkb3duTWVudSgpO1xuICAgICAgICAgICAgICAgIGFuY2VzdG9yLmhpZGUodHJ1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIF9tb3VudCgpIHtcbiAgICAgICAgY29uc3QgcGFyZW50ID0gdGhpcy5wYXJlbnQgPSB0aGlzLl9maW5kQW5jZXN0b3JEcm9wZG93bk1lbnUodHJ1ZSk7XG4gICAgICAgIHBhcmVudC5pdGVtcy5wdXNoKHRoaXMpO1xuICAgIH1cblxuICAgIF9vbkNsaWNrKGUpIHtcbiAgICAgICAgaWYgKHRoaXMuZ2V0KCdkaXNhYmxlZCcpKSByZXR1cm47XG5cbiAgICAgICAgdGhpcy50cmlnZ2VyKCdjbGljaycsIGUpO1xuXG4gICAgICAgIC8vIGlzIG5vdCBhIHN1YiBkcm9wZG93biB0cmlnZ2VyXG4gICAgICAgIGlmICh0aGlzLnBhcmVudFZOb2RlLnRhZyAhPT0gRHJvcGRvd24pIHtcbiAgICAgICAgICAgIHRoaXMudHJpZ2dlcignc2VsZWN0JywgdGhpcywgZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBfb25Nb3VzZUVudGVyKGUpIHtcbiAgICAgICAgdGhpcy50cmlnZ2VyKCdtb3VzZWVudGVyJywgZSk7XG5cbiAgICAgICAgaWYgKHRoaXMuZ2V0KCdkaXNhYmxlZCcpKSByZXR1cm47XG5cbiAgICAgICAgdGhpcy5wYXJlbnQuZm9jdXNJdGVtKHRoaXMpO1xuICAgIH1cblxuICAgIF9vbk1vdXNlTGVhdmUoZSkge1xuICAgICAgICB0aGlzLnRyaWdnZXIoJ21vdXNlbGVhdmUnLCBlKTtcbiAgICAgICAgLy8gaWYgKHRoaXMuZ2V0KCdkaXNhYmxlZCcpKSByZXR1cm47XG4gICAgfVxuXG4gICAgc2VsZWN0KCkge1xuICAgICAgICAvLyBpcyBub3QgYSBzdWIgZHJvcGRvd24gdHJpZ2dlclxuICAgICAgICBjb25zdCBkcm9wZG93biA9IHRoaXMuX2lzU3ViTWVudSgpO1xuICAgICAgICBpZiAoIWRyb3Bkb3duKSB7XG4gICAgICAgICAgICB0aGlzLnRyaWdnZXIoJ3NlbGVjdCcsIHRoaXMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZHJvcGRvd24uc2hvdygpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZm9jdXMoKSB7XG4gICAgICAgIHRoaXMuc2V0KCdfaXNGb2N1cycsIHRydWUpO1xuXG4gICAgICAgIGNvbnN0IGVsUmVjdCA9IHRoaXMuZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgICAgY29uc3QgcEVsID0gdGhpcy5wYXJlbnQucmVmcy5tZW51LmVsZW1lbnQ7XG4gICAgICAgIGNvbnN0IHBFbFJlY3QgPSBwRWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgIGNvbnN0IGJvdHRvbU92ZXJmbG93RGlzdGFuY2UgPSBlbFJlY3QuYm90dG9tIC0gcEVsUmVjdC5ib3R0b207XG4gICAgICAgIGNvbnN0IHRvcE92ZXJmbG93RGlzdGFuY2UgPSBlbFJlY3QudG9wIC0gcEVsUmVjdC50b3A7XG4gICAgICAgIFxuICAgICAgICBpZiAoYm90dG9tT3ZlcmZsb3dEaXN0YW5jZSA+IDApIHtcbiAgICAgICAgICAgIHBFbC5zY3JvbGxUb3AgKz0gYm90dG9tT3ZlcmZsb3dEaXN0YW5jZTtcbiAgICAgICAgfSBlbHNlIGlmICh0b3BPdmVyZmxvd0Rpc3RhbmNlIDwgMCkge1xuICAgICAgICAgICAgcEVsLnNjcm9sbFRvcCArPSB0b3BPdmVyZmxvd0Rpc3RhbmNlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgdW5Gb2N1cygpIHtcbiAgICAgICAgdGhpcy5zZXQoJ19pc0ZvY3VzJywgZmFsc2UpO1xuXG4gICAgICAgIGNvbnN0IGRyb3Bkb3duID0gdGhpcy5faXNTdWJNZW51KCk7XG4gICAgICAgIGlmIChkcm9wZG93bikge1xuICAgICAgICAgICAgZHJvcGRvd24uaGlkZShudWxsLCBudWxsLCB0cnVlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHNob3dNZW51QW5kRm9jdXMoKSB7XG4gICAgICAgIGNvbnN0IGRyb3Bkb3duID0gdGhpcy5faXNTdWJNZW51KCk7XG4gICAgICAgIGlmIChkcm9wZG93bikge1xuICAgICAgICAgICAgZHJvcGRvd24uc2hvdyhudWxsLCBudWxsLCB0cnVlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGhpZGVNZW51KCkge1xuICAgICAgICBjb25zdCBkcm9wZG93biA9IHRoaXMuX2lzU3ViTWVudSgpO1xuICAgICAgICBpZiAoZHJvcGRvd24pIHtcbiAgICAgICAgICAgIGRyb3Bkb3duLmhpZGUobnVsbCwgbnVsbCwgdHJ1ZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBfaXNTdWJNZW51KCkge1xuICAgICAgICBpZiAodGhpcy5wYXJlbnRWTm9kZS50YWcgPT09IERyb3Bkb3duKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5wYXJlbnRWTm9kZS5jaGlsZHJlbjtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIF9maW5kQW5jZXN0b3JEcm9wZG93bk1lbnUoaXNGaXJzdCkge1xuICAgICAgICByZXR1cm4gZmluZFBhcmVudENvbXBvbmVudChEcm9wZG93bk1lbnUsIHRoaXMsIGlzRmlyc3QpO1xuICAgIH1cblxuICAgIF9kZXN0cm95KCkge1xuICAgICAgICBjb25zdCBpdGVtcyA9IHRoaXMucGFyZW50Lml0ZW1zO1xuICAgICAgICBpdGVtcy5zcGxpY2UoaXRlbXMuaW5kZXhPZih0aGlzKSwgMSk7XG4gICAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9kcm9wZG93bi9pdGVtLmpzIiwiXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihvYmosIF9WZHQsIGJsb2NrcywgJGNhbGxlZSkge1xuX1ZkdCB8fCAoX1ZkdCA9IFZkdCk7XG5vYmogfHwgKG9iaiA9IHt9KTtcbmJsb2NrcyB8fCAoYmxvY2tzID0ge30pO1xudmFyIGggPSBfVmR0Lm1pc3MuaCwgaGMgPSBfVmR0Lm1pc3MuaGMsIGh1ID0gX1ZkdC5taXNzLmh1LCB3aWRnZXRzID0gdGhpcyAmJiB0aGlzLndpZGdldHMgfHwge30sIF9ibG9ja3MgPSB7fSwgX19ibG9ja3MgPSB7fSxcbl9fdSA9IF9WZHQudXRpbHMsIGV4dGVuZCA9IF9fdS5leHRlbmQsIF9lID0gX191LmVycm9yLCBfY2xhc3NOYW1lID0gX191LmNsYXNzTmFtZSxcbl9fbyA9IF9fdS5PcHRpb25zLCBfZ2V0TW9kZWwgPSBfX28uZ2V0TW9kZWwsIF9zZXRNb2RlbCA9IF9fby5zZXRNb2RlbCxcbl9zZXRDaGVja2JveE1vZGVsID0gX191LnNldENoZWNrYm94TW9kZWwsIF9kZXRlY3RDaGVja2JveENoZWNrZWQgPSBfX3UuZGV0ZWN0Q2hlY2tib3hDaGVja2VkLFxuX3NldFNlbGVjdE1vZGVsID0gX191LnNldFNlbGVjdE1vZGVsLFxuc2VsZiA9IHRoaXMuZGF0YSwgJHRoaXMgPSB0aGlzLCBzY29wZSA9IG9iaiwgQW5pbWF0ZSA9IHNlbGYgJiYgc2VsZi5BbmltYXRlLCBwYXJlbnQgPSAoJGNhbGxlZSB8fCB7fSkuX3N1cGVyXG4vKiBpbXBvcnQge3Byb3h5RXZlbnR9IGZyb20gJy4uL3V0aWxzJzsgKi9cblxuY29uc3Qge2NoaWxkcmVuLCBkaXNhYmxlZCwgY2xhc3NOYW1lLCBfaXNGb2N1c30gPSBzZWxmLmdldCgpO1xuXG5jb25zdCBjbGFzc05hbWVPYmogPSB7XG4gICAgJ2staXRlbSc6IHRydWUsXG4gICAgJ2stZGlzYWJsZWQnOiBkaXNhYmxlZCxcbiAgICBbY2xhc3NOYW1lXTogY2xhc3NOYW1lLFxuICAgICdrLWhvdmVyJzogX2lzRm9jdXMsXG59XG5cbnJldHVybiBoKCdkaXYnLCB7J2V2LWNsaWNrJzogZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW3NlbGYuX29uQ2xpY2sgXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKSwgJ2V2LW1vdXNlZW50ZXInOiBmdW5jdGlvbigpIHt0cnkge3JldHVybiBbc2VsZi5fb25Nb3VzZUVudGVyIF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcyksICdldi1tb3VzZWxlYXZlJzogZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW3NlbGYuX29uTW91c2VMZWF2ZSBdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpfSwgZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW2NoaWxkcmVuIF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcyksIF9jbGFzc05hbWUoZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW2NsYXNzTmFtZU9iaiBdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpKSlcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL2Ryb3Bkb3duL2l0ZW0udmR0IiwiaW1wb3J0IEludGFjdCBmcm9tICdpbnRhY3QnO1xuaW1wb3J0IHRlbXBsYXRlIGZyb20gJy4vbWVudS52ZHQnO1xuaW1wb3J0IHBvc2l0aW9uIGZyb20gJy4uL21vdmVXcmFwcGVyL3Bvc2l0aW9uJztcbmltcG9ydCB7ZmluZFBhcmVudENvbXBvbmVudCwgZ2V0VHJhbnNpdGlvbn0gZnJvbSAnLi4vdXRpbHMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEcm9wZG93bk1lbnUgZXh0ZW5kcyBJbnRhY3Qge1xuICAgIEBJbnRhY3QudGVtcGxhdGUoKVxuICAgIHN0YXRpYyB0ZW1wbGF0ZSA9IHRlbXBsYXRlO1xuXG4gICAgZGVmYXVsdHMoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBzaG93OiBmYWxzZSxcbiAgICAgICAgICAgIHRyaWdnZXI6ICdob3ZlcicsXG4gICAgICAgICAgICBwb3NpdGlvbjoge30sXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiAnc2xpZGVkb3duJyxcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBfaW5pdCgpIHtcbiAgICAgICAgdGhpcy5zdWJEcm9wZG93bnMgPSBbXTtcbiAgICAgICAgdGhpcy5pdGVtcyA9IFtdO1xuICAgICAgICB0aGlzLmZvY3VzSW5kZXggPSAtMTtcbiAgICAgICAgdGhpcy5sb2NrZWQgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBfbW91bnQoKSB7XG4gICAgICAgIGNvbnN0IHBhcmVudCA9IHRoaXMuX2ZpbmRQYXJlbnREcm9wZG93bk1lbnUoKTtcbiAgICAgICAgaWYgKHBhcmVudCkgcGFyZW50LnN1YkRyb3Bkb3ducy5wdXNoKHRoaXMpO1xuXG4gICAgICAgIGlmICh0aGlzLmdldCgnc2hvdycpKSB7XG4gICAgICAgICAgICB0aGlzLl9hZGREb2N1bWVudEV2ZW50cygpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgX2ZpbmRQYXJlbnREcm9wZG93bk1lbnUoKSB7XG4gICAgICAgIHJldHVybiBmaW5kUGFyZW50Q29tcG9uZW50KERyb3Bkb3duTWVudSwgdGhpcywgdHJ1ZSk7XG4gICAgfVxuXG4gICAgc2hvdygpIHtcbiAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMudGltZXIpO1xuICAgICAgICB0aGlzLnNldCgnc2hvdycsIHRydWUpO1xuICAgICAgICBjb25zdCBwYXJlbnQgPSB0aGlzLl9maW5kUGFyZW50RHJvcGRvd25NZW51KCk7XG4gICAgICAgIGlmIChwYXJlbnQpIHtcbiAgICAgICAgICAgIHBhcmVudC5zaG93KCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBoaWRlKGltbWVkaWF0ZWx5KSB7XG4gICAgICAgIGlmICghaW1tZWRpYXRlbHkpIHtcbiAgICAgICAgICAgIHRoaXMudGltZXIgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldCgnc2hvdycsIGZhbHNlKTtcbiAgICAgICAgICAgIH0sIDIwMCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnNldCgnc2hvdycsIGZhbHNlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHRvZ2dsZSgpIHtcbiAgICAgICAgdGhpcy5zZXQoJ3Nob3cnLCAhdGhpcy5nZXQoJ3Nob3cnKSk7XG4gICAgfVxuXG4gICAgcG9zaXRpb24oKSB7XG4gICAgICAgIHBvc2l0aW9uKHRoaXMucmVmcy5tZW51LmVsZW1lbnQsIHtcbiAgICAgICAgICAgIG15OiAnY2VudGVyIHRvcCs1JywgXG4gICAgICAgICAgICBhdDogJ2NlbnRlciBib3R0b20nLCBcbiAgICAgICAgICAgIG9mOiB0aGlzLmRyb3Bkb3duLmVsZW1lbnQsXG4gICAgICAgICAgICB1c2luZzogKGZlZWRiYWNrKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXQoJ3RyYW5zaXRpb24nLCBnZXRUcmFuc2l0aW9uKGZlZWRiYWNrKSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgLi4udGhpcy5nZXQoJ3Bvc2l0aW9uJylcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgX29uU2hvdygpIHtcbiAgICAgICAgdGhpcy5mb2N1c0luZGV4ID0gLTE7XG4gICAgICAgIHRoaXMuX2FkZERvY3VtZW50RXZlbnRzKCk7XG4gICAgICAgIHRoaXMucG9zaXRpb24oKTtcbiAgICB9XG5cbiAgICBfYWRkRG9jdW1lbnRFdmVudHMoKSB7XG4gICAgICAgIGNvbnN0IHBhcmVudCA9IHRoaXMuX2ZpbmRQYXJlbnREcm9wZG93bk1lbnUoKTtcbiAgICAgICAgaWYgKCFwYXJlbnQpIHtcbiAgICAgICAgICAgIC8vIGlmICh0aGlzLmdldCgndHJpZ2dlcicpID09PSAnY2xpY2snKSB7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLl9vbkRvY3VtZW50Q2xpY2spO1xuICAgICAgICAgICAgLy8gfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcGFyZW50LmxvY2tlZCA9IHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgdGhpcy5fb25LZXlkb3duKTtcbiAgICB9XG5cbiAgICBfcmVtb3ZlRG9jdW1lbnRFdmVudHMoKSB7XG4gICAgICAgIGNvbnN0IHBhcmVudCA9IHRoaXMuX2ZpbmRQYXJlbnREcm9wZG93bk1lbnUoKTtcbiAgICAgICAgaWYgKCFwYXJlbnQpIHtcbiAgICAgICAgICAgIC8vIGlmICh0aGlzLmdldCgndHJpZ2dlcicpID09PSAnY2xpY2snKSB7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLl9vbkRvY3VtZW50Q2xpY2spO1xuICAgICAgICAgICAgLy8gfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcGFyZW50LmxvY2tlZCA9IGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIHRoaXMuX29uS2V5ZG93bik7XG4gICAgfVxuXG4gICAgX29uRG9jdW1lbnRDbGljayhlKSB7XG4gICAgICAgIGNvbnN0IHRhcmdldCA9IGUudGFyZ2V0O1xuICAgICAgICBjb25zdCBtZW51ID0gdGhpcy5yZWZzLm1lbnUuZWxlbWVudDtcblxuICAgICAgICAvLyBpcyBhIGRyb3Bkb3duIG1lbnVcbiAgICAgICAgaWYgKG1lbnUgPT09IHRhcmdldCB8fCBtZW51LmNvbnRhaW5zKHRhcmdldCkpIHJldHVybjtcbiAgICAgICAgLy8gaXMgY2xpY2sgb24gc3ViIG1lbnVcbiAgICAgICAgaWYgKHRoaXMuX2lzQ2xpY2tTdWJNZW51KHRhcmdldCwgdGhpcy5zdWJEcm9wZG93bnMpKSByZXR1cm47XG4gICAgICAgIC8vIGN1c3RvbSBmbGFnIHRvIGluZGljYXRlIHRoYXQgdGhlIGV2ZW50IGRvZXMgbm90IGxlYWQgdG8gY2xvc2UgbWVudVxuICAgICAgICBpZiAoZS5fZHJvcGRvd24pIHJldHVybjtcblxuICAgICAgICB0aGlzLmhpZGUodHJ1ZSk7XG4gICAgfVxuXG4gICAgX29uS2V5ZG93bihlKSB7XG4gICAgICAgIGlmICh0aGlzLmxvY2tlZCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHN3aXRjaCAoZS5rZXlDb2RlKSB7XG4gICAgICAgICAgICAvLyBkb3duXG4gICAgICAgICAgICBjYXNlIDQwOlxuICAgICAgICAgICAgICAgIHRoaXMuX2ZvY3VzTmV4dEl0ZW0oZSk7IFxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgLy8gdXBcbiAgICAgICAgICAgIGNhc2UgMzg6XG4gICAgICAgICAgICAgICAgdGhpcy5fZm9jdXNQcmV2SXRlbShlKTsgXG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAvLyByaWdodFxuICAgICAgICAgICAgY2FzZSAzOTpcbiAgICAgICAgICAgICAgICB0aGlzLl9zaG93U3ViTWVudShlKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIC8vIGxlZnRcbiAgICAgICAgICAgIGNhc2UgMzc6XG4gICAgICAgICAgICAgICAgdGhpcy5faGlkZVN1Yk1lbnUoZSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAvLyBlbnRlclxuICAgICAgICAgICAgY2FzZSAxMzpcbiAgICAgICAgICAgICAgICB0aGlzLl9zZWxlY3RJdGVtKGUpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgX2ZvY3VzTmV4dEl0ZW0oZSkge1xuICAgICAgICBjb25zdCBwYXJlbnQgPSB0aGlzLl9maW5kUGFyZW50RHJvcGRvd25NZW51KCk7XG4gICAgICAgIGlmIChwYXJlbnQgJiYgdGhpcy5mb2N1c0luZGV4IDwgMCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgdGhpcy5mb2N1c0l0ZW1CeUluZGV4KHRoaXMuZm9jdXNJbmRleCArIDEsICdkb3duJyk7XG4gICAgfVxuXG4gICAgX2ZvY3VzUHJldkl0ZW0oZSkge1xuICAgICAgICBjb25zdCBwYXJlbnQgPSB0aGlzLl9maW5kUGFyZW50RHJvcGRvd25NZW51KCk7XG4gICAgICAgIGlmIChwYXJlbnQgJiYgdGhpcy5mb2N1c0luZGV4IDwgMCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgdGhpcy5mb2N1c0l0ZW1CeUluZGV4KHRoaXMuZm9jdXNJbmRleCAtIDEsICd1cCcpO1xuICAgIH1cblxuICAgIGZvY3VzSXRlbUJ5SW5kZXgoaW5kZXgsIGRpcmVjdGlvbiA9ICdkb3duJykge1xuICAgICAgICBjb25zdCBpdGVtcyA9IHRoaXMuaXRlbXM7XG4gICAgICAgIGNvbnN0IG1heCA9IGl0ZW1zLmxlbmd0aCAtIDE7XG4gICAgICAgIGNvbnN0IG9sZEluZGV4ID0gdGhpcy5mb2N1c0luZGV4O1xuXG4gICAgICAgIGZ1bmN0aW9uIGZpeEluZGV4KGluZGV4KSB7XG4gICAgICAgICAgICBpZiAoaW5kZXggPiBtYXgpIHtcbiAgICAgICAgICAgICAgICBpbmRleCA9IDA7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGluZGV4IDwgMCkge1xuICAgICAgICAgICAgICAgIGluZGV4ID0gbWF4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGluZGV4O1xuICAgICAgICB9XG5cbiAgICAgICAgaW5kZXggPSBmaXhJbmRleChpbmRleCk7XG5cbiAgICAgICAgbGV0IGkgPSAwO1xuICAgICAgICB3aGlsZSAoaSA8PSBtYXggJiYgaXRlbXNbaW5kZXhdICYmIGl0ZW1zW2luZGV4XS5nZXQoJ2Rpc2FibGVkJykpIHtcbiAgICAgICAgICAgIGluZGV4ID0gZml4SW5kZXgoZGlyZWN0aW9uID09PSAnZG93bicgPyBpbmRleCArIDEgOiBpbmRleCAtIDEpO1xuICAgICAgICAgICAgaSsrO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gYWxsIGl0ZW1zIGFyZSBkaXNhYmxlZFxuICAgICAgICBpZiAoaSA+IG1heCkgcmV0dXJuO1xuXG4gICAgICAgIHRoaXMuZm9jdXNJbmRleCA9IGluZGV4O1xuXG4gICAgICAgIGlmIChvbGRJbmRleCA+IC0xICYmIGl0ZW1zW29sZEluZGV4XSkge1xuICAgICAgICAgICAgaXRlbXNbb2xkSW5kZXhdLnVuRm9jdXMoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGl0ZW1zW2luZGV4XS5mb2N1cygpO1xuICAgIH1cblxuICAgIF9zZWxlY3RJdGVtKGUpIHtcbiAgICAgICAgdGhpcy5fc2hvd1N1Yk1lbnUoZSk7XG4gICAgICAgIGlmICh0aGlzLmZvY3VzSW5kZXggPiAtMSkge1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgdGhpcy5pdGVtc1t0aGlzLmZvY3VzSW5kZXhdLnNlbGVjdCgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgX3Nob3dTdWJNZW51KGUpIHtcbiAgICAgICAgY29uc3QgcGFyZW50ID0gdGhpcy5fZmluZFBhcmVudERyb3Bkb3duTWVudSgpO1xuICAgICAgICBpZiAoIXBhcmVudCAmJiB0aGlzLmZvY3VzSW5kZXggPCAwKSByZXR1cm47XG5cbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBpZiAocGFyZW50ICYmIHRoaXMuZm9jdXNJbmRleCA8IDApIHtcbiAgICAgICAgICAgIHRoaXMuZm9jdXNJdGVtQnlJbmRleCgwKTtcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLmZvY3VzSW5kZXggPiAtMSkge1xuICAgICAgICAgICAgdGhpcy5pdGVtc1t0aGlzLmZvY3VzSW5kZXhdLnNob3dNZW51QW5kRm9jdXMoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIF9oaWRlU3ViTWVudShlKSB7XG4gICAgICAgIGlmICh0aGlzLmZvY3VzSW5kZXggPiAtMSkge1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgdGhpcy5pdGVtc1t0aGlzLmZvY3VzSW5kZXhdLmhpZGVNZW51KCk7XG5cbiAgICAgICAgICAgIGNvbnN0IHBhcmVudCA9IGZpbmRQYXJlbnRDb21wb25lbnQoRHJvcGRvd25NZW51LCB0aGlzLCB0cnVlKTtcbiAgICAgICAgICAgIGlmIChwYXJlbnQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmRyb3Bkb3duLmhpZGUobnVsbCwgbnVsbCwgdHJ1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmb2N1c0l0ZW0oaXRlbSkge1xuICAgICAgICBjb25zdCBpbmRleCA9IHRoaXMuaXRlbXMuaW5kZXhPZihpdGVtKTtcbiAgICAgICAgdGhpcy5mb2N1c0l0ZW1CeUluZGV4KGluZGV4KTtcbiAgICB9XG5cbiAgICBfaXNDbGlja1N1Yk1lbnUodGFyZ2V0LCBzdWJNZW51cykge1xuICAgICAgICBsZXQgcmV0ID0gZmFsc2U7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc3ViTWVudXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IHN1Yk1lbnUgPSBzdWJNZW51c1tpXS5yZWZzLm1lbnU7XG4gICAgICAgICAgICBpZiAoc3ViTWVudSkge1xuICAgICAgICAgICAgICAgIGlmICh0YXJnZXQgPT09IHN1Yk1lbnUuZWxlbWVudCB8fCBzdWJNZW51LmVsZW1lbnQuY29udGFpbnModGFyZ2V0KSkge1xuICAgICAgICAgICAgICAgICAgICByZXQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByZXQgPSB0aGlzLl9pc0NsaWNrU3ViTWVudSh0YXJnZXQsIHN1Yk1lbnVzW2ldLnN1YkRyb3Bkb3ducyk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChyZXQpIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmV0O1xuICAgIH1cblxuICAgIF9kZXN0cm95KCkge1xuICAgICAgICBjb25zdCBwYXJlbnQgPSB0aGlzLl9maW5kUGFyZW50RHJvcGRvd25NZW51KCk7XG4gICAgICAgIGlmIChwYXJlbnQpIHtcbiAgICAgICAgICAgIGNvbnN0IHN1YkRyb3Bkb3ducyA9IHBhcmVudC5zdWJEcm9wZG93bnM7XG4gICAgICAgICAgICBzdWJEcm9wZG93bnMuc3BsaWNlKHN1YkRyb3Bkb3ducy5pbmRleE9mKHRoaXMpLCAxKTtcbiAgICAgICAgfSBcbiAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMudGltZXIpO1xuICAgICAgICB0aGlzLl9yZW1vdmVEb2N1bWVudEV2ZW50cygpO1xuICAgIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvZHJvcGRvd24vbWVudS5qcyIsImltcG9ydCBNb3ZlV3JhcHBlciBmcm9tICcuLi9tb3ZlV3JhcHBlcic7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihvYmosIF9WZHQsIGJsb2NrcywgJGNhbGxlZSkge1xuX1ZkdCB8fCAoX1ZkdCA9IFZkdCk7XG5vYmogfHwgKG9iaiA9IHt9KTtcbmJsb2NrcyB8fCAoYmxvY2tzID0ge30pO1xudmFyIGggPSBfVmR0Lm1pc3MuaCwgaGMgPSBfVmR0Lm1pc3MuaGMsIGh1ID0gX1ZkdC5taXNzLmh1LCB3aWRnZXRzID0gdGhpcyAmJiB0aGlzLndpZGdldHMgfHwge30sIF9ibG9ja3MgPSB7fSwgX19ibG9ja3MgPSB7fSxcbl9fdSA9IF9WZHQudXRpbHMsIGV4dGVuZCA9IF9fdS5leHRlbmQsIF9lID0gX191LmVycm9yLCBfY2xhc3NOYW1lID0gX191LmNsYXNzTmFtZSxcbl9fbyA9IF9fdS5PcHRpb25zLCBfZ2V0TW9kZWwgPSBfX28uZ2V0TW9kZWwsIF9zZXRNb2RlbCA9IF9fby5zZXRNb2RlbCxcbl9zZXRDaGVja2JveE1vZGVsID0gX191LnNldENoZWNrYm94TW9kZWwsIF9kZXRlY3RDaGVja2JveENoZWNrZWQgPSBfX3UuZGV0ZWN0Q2hlY2tib3hDaGVja2VkLFxuX3NldFNlbGVjdE1vZGVsID0gX191LnNldFNlbGVjdE1vZGVsLFxuc2VsZiA9IHRoaXMuZGF0YSwgJHRoaXMgPSB0aGlzLCBzY29wZSA9IG9iaiwgQW5pbWF0ZSA9IHNlbGYgJiYgc2VsZi5BbmltYXRlLCBwYXJlbnQgPSAoJGNhbGxlZSB8fCB7fSkuX3N1cGVyXG5cblxuY29uc3Qge2NoaWxkcmVuLCBzaG93LCB0cmlnZ2VyLCBjbGFzc05hbWUsIHRyYW5zaXRpb259ID0gc2VsZi5nZXQoKTtcblxuY29uc3QgZXZlbnRzID0ge307XG4vLyBubyBtYXR0ZXIgd2hhdCB0aGUgdHJpZ2dlciBpcywgd2Ugc2hvdWxkIHNob3cgbWVudSB3aGVuIGVudGVyIGl0LlxuLy8gZm9yIHRoaXMgY2FzZTogaG92ZXIgdHJpZ2dlciBuZXN0cyBjbGljayB0cmlnZ2VyXG5ldmVudHNbJ2V2LW1vdXNlZW50ZXInXSA9IHNlbGYuc2hvdztcbmlmICh0cmlnZ2VyID09PSAnaG92ZXInKSB7XG4gICAgZXZlbnRzWydldi1tb3VzZWxlYXZlJ10gPSBzZWxmLmhpZGUuYmluZChzZWxmLCBmYWxzZSk7XG59XG5cbnJldHVybiBoKE1vdmVXcmFwcGVyLCB7J19wYXJlbnQnOiBmdW5jdGlvbigpIHt0cnkge3JldHVybiBbc2VsZiBdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpLCAnY2hpbGRyZW4nOiBmdW5jdGlvbigpIHt0cnkge3JldHVybiBbc2hvdyBdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpID8gaChBbmltYXRlLCB7J2NsYXNzTmFtZSc6IF9jbGFzc05hbWUoZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW3tcImstZHJvcGRvd24tbWVudVwiOiB0cnVlLCBbY2xhc3NOYW1lXTogY2xhc3NOYW1lfSBdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpKSwgJ2E6dHJhbnNpdGlvbic6IGZ1bmN0aW9uKCkge3RyeSB7cmV0dXJuIFt0cmFuc2l0aW9uIF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcyksIC4uLmZ1bmN0aW9uKCkge3RyeSB7cmV0dXJuIFtldmVudHMgXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKSwgJ2E6ZGVsYXlEZXN0cm95JzogZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW2ZhbHNlIF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcyksICdldi0kZGVzdHJveWVkJzogZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW3NlbGYuX3JlbW92ZURvY3VtZW50RXZlbnRzIF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcyksICdldi0kbW91bnRlZCc6IGZ1bmN0aW9uKCkge3RyeSB7cmV0dXJuIFtzZWxmLl9vblNob3cgXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKSwgJ2NoaWxkcmVuJzogZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW2NoaWxkcmVuIF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcyksICdfY29udGV4dCc6ICR0aGlzfSwgbnVsbCwgbnVsbCwgbnVsbCwgZnVuY3Rpb24oaSkge3dpZGdldHNbJ21lbnUnXSA9IGl9KSA6IHVuZGVmaW5lZCwgJ19jb250ZXh0JzogJHRoaXN9LCBudWxsLCBudWxsLCBudWxsLCBmdW5jdGlvbihpKSB7d2lkZ2V0c1snd3JhcHBlciddID0gaX0pXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9kcm9wZG93bi9tZW51LnZkdCIsImltcG9ydCBJbnRhY3QgZnJvbSAnaW50YWN0JztcbmltcG9ydCB0ZW1wbGF0ZSBmcm9tICcuL2luZGV4LnZkdCc7XG5pbXBvcnQgJy4uLy4uL3N0eWxlcy9rcGMuc3R5bCc7XG5pbXBvcnQgJy4vaW5kZXguc3R5bCc7XG5pbXBvcnQge3NlbGVjdElucHV0fSBmcm9tICcuLi91dGlscyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIElucHV0IGV4dGVuZHMgSW50YWN0IHtcbiAgICBASW50YWN0LnRlbXBsYXRlXG4gICAgc3RhdGljIHRlbXBsYXRlID0gdGVtcGxhdGU7XG5cbiAgICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgIHJlYWRvbmx5OiBCb29sZWFuLFxuICAgICAgICBjbGVhcmFibGU6IEJvb2xlYW4sXG4gICAgICAgIGRpc2FibGVkOiBCb29sZWFuLFxuICAgICAgICBmbHVpZDogQm9vbGVhbixcbiAgICB9O1xuXG4gICAgZGVmYXVsdHMoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB0eXBlOiAndGV4dCcsIC8vIHRleHQgfCB0ZXh0YXJlYVxuICAgICAgICAgICAgbmFtZTogdW5kZWZpbmVkLFxuICAgICAgICAgICAgdmFsdWU6IHVuZGVmaW5lZCxcbiAgICAgICAgICAgIGRlZmF1bHRWYWx1ZTogdW5kZWZpbmVkLFxuICAgICAgICAgICAgcGxhY2Vob2xkZXI6IHVuZGVmaW5lZCxcbiAgICAgICAgICAgIHJlYWRvbmx5OiBmYWxzZSxcbiAgICAgICAgICAgIGNsZWFyYWJsZTogZmFsc2UsXG4gICAgICAgICAgICBkaXNhYmxlZDogZmFsc2UsXG4gICAgICAgICAgICBzaXplOiAnZGVmYXVsdCcsXG4gICAgICAgICAgICByb3dzOiAyLFxuICAgICAgICAgICAgc3BlbGxjaGVjazogZmFsc2UsXG4gICAgICAgICAgICBhdXRvV2lkdGg6IGZhbHNlLFxuICAgICAgICAgICAgZmx1aWQ6IGZhbHNlLFxuICAgICAgICAgICAgd2lkdGg6IHVuZGVmaW5lZCxcbiAgICAgICAgICAgIHRhYmluZGV4OiB1bmRlZmluZWQsXG4gICAgICAgICAgICBhdXRvY29tcGxldGU6IHVuZGVmaW5lZCxcbiAgICAgICAgfVxuICAgIH1cblxuICAgIF9pbml0KCkge1xuICAgICAgICB0aGlzLm9uKCckY2hhbmdlZDp2YWx1ZScsIHRoaXMuX2FkanVzdFdpZHRoKTtcbiAgICAgICAgdGhpcy5vbignJGNoYW5nZWQ6cGxhY2Vob2xkZXInLCB0aGlzLl9hZGp1c3RXaWR0aCk7XG4gICAgfVxuXG4gICAgX21vdW50KCkge1xuICAgICAgICB0aGlzLl9hZGp1c3RXaWR0aCgpO1xuICAgIH1cblxuICAgIF9hZGp1c3RXaWR0aCgpIHtcbiAgICAgICAgaWYgKHRoaXMuZ2V0KCdhdXRvV2lkdGgnKSkge1xuICAgICAgICAgICAgY29uc3Qgd2lkdGggPSB0aGlzLnJlZnMuZmFrZS5vZmZzZXRXaWR0aCB8fCAxO1xuICAgICAgICAgICAgdGhpcy5yZWZzLmlucHV0LnN0eWxlLndpZHRoID0gYCR7d2lkdGggKyAxfXB4YDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNsZWFyKGUpIHtcbiAgICAgICAgdGhpcy5zZXQoJ3ZhbHVlJywgJycpO1xuICAgICAgICB0aGlzLmZvY3VzKCk7XG4gICAgICAgIHRoaXMudHJpZ2dlcignY2xlYXInLCBlKTtcbiAgICB9XG5cbiAgICBzZWxlY3QoKSB7XG4gICAgICAgIHNlbGVjdElucHV0KHRoaXMucmVmcy5pbnB1dCk7XG4gICAgfVxuXG4gICAgZm9jdXMoKSB7XG4gICAgICAgIHRoaXMucmVmcy5pbnB1dC5mb2N1cygpO1xuICAgIH1cblxuICAgIF9vbklucHV0KGUpIHtcbiAgICAgICAgdGhpcy5zZXQoJ3ZhbHVlJywgZS50YXJnZXQudmFsdWUpO1xuICAgICAgICB0aGlzLnRyaWdnZXIoJ2lucHV0JywgZSk7XG4gICAgfVxuXG4gICAgX3Byb3h5RXZlbnQobmFtZSwgZSkge1xuICAgICAgICB0aGlzLnRyaWdnZXIobmFtZSwgZSk7XG4gICAgfVxufVxuXG5leHBvcnQge0lucHV0fTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvaW5wdXQvaW5kZXguanMiLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuICAgIGlmKG1vZHVsZS5ob3QpIHtcbiAgICAgIC8vIDE1Mjc3NTQ0MDkzMDdcbiAgICAgIHZhciBjc3NSZWxvYWQgPSByZXF1aXJlKFwiIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtaG90LWxvYWRlci9ob3RNb2R1bGVSZXBsYWNlbWVudC5qc1wiKShtb2R1bGUuaWQsIHtcImZpbGVNYXBcIjpcIntmaWxlTmFtZX1cIn0pO1xuICAgICAgbW9kdWxlLmhvdC5kaXNwb3NlKGNzc1JlbG9hZCk7XG4gICAgICBtb2R1bGUuaG90LmFjY2VwdCh1bmRlZmluZWQsIGNzc1JlbG9hZCk7XG4gICAgfVxuICBcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2NvbXBvbmVudHMvaW5wdXQvaW5kZXguc3R5bFxuLy8gbW9kdWxlIGlkID0gLi9jb21wb25lbnRzL2lucHV0L2luZGV4LnN0eWxcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHthZGRTdHlsZX0gZnJvbSAnLi4vdXRpbHMnO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24ob2JqLCBfVmR0LCBibG9ja3MsICRjYWxsZWUpIHtcbl9WZHQgfHwgKF9WZHQgPSBWZHQpO1xub2JqIHx8IChvYmogPSB7fSk7XG5ibG9ja3MgfHwgKGJsb2NrcyA9IHt9KTtcbnZhciBoID0gX1ZkdC5taXNzLmgsIGhjID0gX1ZkdC5taXNzLmhjLCBodSA9IF9WZHQubWlzcy5odSwgd2lkZ2V0cyA9IHRoaXMgJiYgdGhpcy53aWRnZXRzIHx8IHt9LCBfYmxvY2tzID0ge30sIF9fYmxvY2tzID0ge30sXG5fX3UgPSBfVmR0LnV0aWxzLCBleHRlbmQgPSBfX3UuZXh0ZW5kLCBfZSA9IF9fdS5lcnJvciwgX2NsYXNzTmFtZSA9IF9fdS5jbGFzc05hbWUsXG5fX28gPSBfX3UuT3B0aW9ucywgX2dldE1vZGVsID0gX19vLmdldE1vZGVsLCBfc2V0TW9kZWwgPSBfX28uc2V0TW9kZWwsXG5fc2V0Q2hlY2tib3hNb2RlbCA9IF9fdS5zZXRDaGVja2JveE1vZGVsLCBfZGV0ZWN0Q2hlY2tib3hDaGVja2VkID0gX191LmRldGVjdENoZWNrYm94Q2hlY2tlZCxcbl9zZXRTZWxlY3RNb2RlbCA9IF9fdS5zZXRTZWxlY3RNb2RlbCxcbnNlbGYgPSB0aGlzLmRhdGEsICR0aGlzID0gdGhpcywgc2NvcGUgPSBvYmosIEFuaW1hdGUgPSBzZWxmICYmIHNlbGYuQW5pbWF0ZSwgcGFyZW50ID0gKCRjYWxsZWUgfHwge30pLl9zdXBlclxuXG5cbmNvbnN0IHtcbiAgICB0eXBlLCBuYW1lLCB2YWx1ZSwgcGxhY2Vob2xkZXIsIHRhYmluZGV4LFxuICAgIHJlYWRvbmx5LCBjbGVhcmFibGUsIGRpc2FibGVkLCBzaXplLCBcbiAgICByb3dzLCBzcGVsbGNoZWNrLCBkZWZhdWx0VmFsdWUsIHN0eWxlLFxuICAgIGNsYXNzTmFtZSwgYXV0b1dpZHRoLCBmbHVpZCwgd2lkdGgsIGF1dG9jb21wbGV0ZSxcbn0gPSBzZWxmLmdldCgpO1xuXG5jb25zdCBjbGFzc05hbWVPYmogPSB7XG4gICAgJ2staW5wdXQnOiB0cnVlLFxuICAgIFtgay0ke3NpemV9YF06IHNpemUgIT09ICdkZWZhdWx0JyxcbiAgICAnay1ncm91cCc6IGJsb2Nrcy5wcmVwZW5kIHx8IGJsb2Nrcy5hcHBlbmQsXG4gICAgJ2stZGlzYWJsZWQnOiBkaXNhYmxlZCxcbiAgICAnay13aXRoLXByZWZpeCc6IGJsb2Nrcy5wcmVmaXgsXG4gICAgJ2std2l0aC1zdWZmaXgnOiBibG9ja3Muc3VmZml4LFxuICAgICdrLWNsZWFyYWJsZSc6IGNsZWFyYWJsZSxcbiAgICAnay1hdXRvLXdpZHRoJzogYXV0b1dpZHRoLFxuICAgICdrLWZsdWlkJzogZmx1aWQsXG4gICAgW2NsYXNzTmFtZV06IGNsYXNzTmFtZSxcbn1cblxuY29uc3QgZXZlbnRzID0gW1xuICAgICdrZXlkb3duJywgJ2tleXVwJywgJ2NoYW5nZScsXG4gICAgJ2tleXByZXNzJywgJ2ZvY3VzJywgJ2JsdXInLCAvKiAnaW5wdXQnICovXG5dLnJlZHVjZSgobWVtbywgbmFtZSkgPT4ge1xuICAgIG1lbW9bYGV2LSR7bmFtZX1gXSA9IHNlbGYuX3Byb3h5RXZlbnQuYmluZChzZWxmLCBuYW1lKTtcbiAgICByZXR1cm4gbWVtbztcbn0sIHt9KTtcblxuY29uc3Qgd3JhcHBlckV2ZW50cyA9IFtcbiAgICAnY2xpY2snLCAnbW91c2VlbnRlcicsICdtb3VzZWxlYXZlJ1xuXS5yZWR1Y2UoKG1lbW8sIG5hbWUpID0+IHtcbiAgICBtZW1vW2Bldi0ke25hbWV9YF0gPSBzZWxmLl9wcm94eUV2ZW50LmJpbmQoc2VsZiwgbmFtZSk7XG4gICAgcmV0dXJuIG1lbW87XG59LCB7fSk7XG5cbnJldHVybiBoKCdkaXYnLCB7J3N0eWxlJzogZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW3dpZHRoICE9IG51bGwgPyBhZGRTdHlsZShzdHlsZSwge3dpZHRoOiBgJHt3aWR0aH1weGB9KSA6IHN0eWxlIF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcyksIC4uLmZ1bmN0aW9uKCkge3RyeSB7cmV0dXJuIFt3cmFwcGVyRXZlbnRzIF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcyl9LCBbZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW2Jsb2Nrcy5wcmVwZW5kIF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcykgPyBoKCdkaXYnLCBudWxsLCAoX2Jsb2Nrc1tcInByZXBlbmRcIl0gPSBmdW5jdGlvbihwYXJlbnQpIHtyZXR1cm4gbnVsbDt9KSAmJiAoX19ibG9ja3NbXCJwcmVwZW5kXCJdID0gZnVuY3Rpb24ocGFyZW50KSB7XG52YXIgc2VsZiA9IHRoaXM7XG5yZXR1cm4gYmxvY2tzW1wicHJlcGVuZFwiXSA/IGJsb2Nrc1tcInByZXBlbmRcIl0uY2FsbCh0aGlzLCBmdW5jdGlvbigpIHtcbnJldHVybiBfYmxvY2tzW1wicHJlcGVuZFwiXS5jYWxsKHNlbGYsIHBhcmVudCk7XG59KSA6IF9ibG9ja3NbXCJwcmVwZW5kXCJdLmNhbGwodGhpcywgcGFyZW50KTtcbn0pICYmIF9fYmxvY2tzW1wicHJlcGVuZFwiXS5jYWxsKHRoaXMpLCAnay1wcmVwZW5kJykgOiB1bmRlZmluZWQsIGgoJ2RpdicsIG51bGwsIFtmdW5jdGlvbigpIHt0cnkge3JldHVybiBbYmxvY2tzLnByZWZpeCBdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpID8gaCgnZGl2JywgbnVsbCwgKF9ibG9ja3NbXCJwcmVmaXhcIl0gPSBmdW5jdGlvbihwYXJlbnQpIHtyZXR1cm4gbnVsbDt9KSAmJiAoX19ibG9ja3NbXCJwcmVmaXhcIl0gPSBmdW5jdGlvbihwYXJlbnQpIHtcbnZhciBzZWxmID0gdGhpcztcbnJldHVybiBibG9ja3NbXCJwcmVmaXhcIl0gPyBibG9ja3NbXCJwcmVmaXhcIl0uY2FsbCh0aGlzLCBmdW5jdGlvbigpIHtcbnJldHVybiBfYmxvY2tzW1wicHJlZml4XCJdLmNhbGwoc2VsZiwgcGFyZW50KTtcbn0pIDogX2Jsb2Nrc1tcInByZWZpeFwiXS5jYWxsKHRoaXMsIHBhcmVudCk7XG59KSAmJiBfX2Jsb2Nrc1tcInByZWZpeFwiXS5jYWxsKHRoaXMpLCAnay1wcmVmaXgnKSA6IHVuZGVmaW5lZCwgZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW3R5cGUgIT09ICd0ZXh0YXJlYScgXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKSA/IGgoJ2lucHV0Jywgeyd0eXBlJzogZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW3R5cGUgXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKSwgJ25hbWUnOiBmdW5jdGlvbigpIHt0cnkge3JldHVybiBbbmFtZSBdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpLCAndmFsdWUnOiBmdW5jdGlvbigpIHt0cnkge3JldHVybiBbdmFsdWUgXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKSwgJ2V2LWlucHV0JzogZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW3NlbGYuX29uSW5wdXQgXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKSwgJ2RlZmF1bHRWYWx1ZSc6IGZ1bmN0aW9uKCkge3RyeSB7cmV0dXJuIFtkZWZhdWx0VmFsdWUgXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKSwgJ3JlYWRPbmx5JzogZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW3JlYWRvbmx5IF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcyksICdwbGFjZWhvbGRlcic6IGZ1bmN0aW9uKCkge3RyeSB7cmV0dXJuIFtwbGFjZWhvbGRlciBdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpLCAnZGlzYWJsZWQnOiBmdW5jdGlvbigpIHt0cnkge3JldHVybiBbZGlzYWJsZWQgXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKSwgJ3RhYmluZGV4JzogZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW3RhYmluZGV4IF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcyksICdhdXRvY29tcGxldGUnOiBmdW5jdGlvbigpIHt0cnkge3JldHVybiBbYXV0b2NvbXBsZXRlIF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcyksIC4uLmZ1bmN0aW9uKCkge3RyeSB7cmV0dXJuIFtldmVudHMgXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKX0sIG51bGwsICdrLWlubmVyJywgbnVsbCwgZnVuY3Rpb24oaSkge3dpZGdldHNbJ2lucHV0J10gPSBpfSkgOiBoKCd0ZXh0YXJlYScsIHsndmFsdWUnOiBmdW5jdGlvbigpIHt0cnkge3JldHVybiBbdmFsdWUgXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKSwgJ2V2LWlucHV0JzogZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW3NlbGYuX29uSW5wdXQgXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKSwgJ2RlZmF1bHRWYWx1ZSc6IGZ1bmN0aW9uKCkge3RyeSB7cmV0dXJuIFtkZWZhdWx0VmFsdWUgXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKSwgJ25hbWUnOiBmdW5jdGlvbigpIHt0cnkge3JldHVybiBbbmFtZSBdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpLCAncmVhZE9ubHknOiBmdW5jdGlvbigpIHt0cnkge3JldHVybiBbcmVhZG9ubHkgXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKSwgJ3BsYWNlaG9sZGVyJzogZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW3BsYWNlaG9sZGVyIF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcyksICdkaXNhYmxlZCc6IGZ1bmN0aW9uKCkge3RyeSB7cmV0dXJuIFtkaXNhYmxlZCBdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpLCAncm93cyc6IGZ1bmN0aW9uKCkge3RyeSB7cmV0dXJuIFtyb3dzIF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcyksICdzcGVsbGNoZWNrJzogZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW3NwZWxsY2hlY2sgXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKSwgJ3RhYmluZGV4JzogZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW3RhYmluZGV4IF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcyksIC4uLmZ1bmN0aW9uKCkge3RyeSB7cmV0dXJuIFtldmVudHMgXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKX0sIG51bGwsICdrLWlubmVyIGstdGV4dGFyZWEnLCBudWxsLCBmdW5jdGlvbihpKSB7d2lkZ2V0c1snaW5wdXQnXSA9IGl9KSwgZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW2Jsb2Nrcy5zdWZmaXggfHwgY2xlYXJhYmxlIF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcykgPyBoKCdkaXYnLCBudWxsLCBbZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW2NsZWFyYWJsZSBdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpID8gaCgnaScsIHsnZXYtY2xpY2snOiBmdW5jdGlvbigpIHt0cnkge3JldHVybiBbc2VsZi5jbGVhciBdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpfSwgbnVsbCwgX2NsYXNzTmFtZShmdW5jdGlvbigpIHt0cnkge3JldHVybiBbe1xuICAgICAgICAgICAgICAgICAgICBcImstY2xlYXIgay1pY29uIGlvbi1pb3MtY2xvc2VcIjogdHJ1ZSwgXG4gICAgICAgICAgICAgICAgICAgIFwiay1zaG93XCI6IHZhbHVlLFxuICAgICAgICAgICAgICAgIH0gXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKSkpIDogdW5kZWZpbmVkLCAoX2Jsb2Nrc1tcInN1ZmZpeFwiXSA9IGZ1bmN0aW9uKHBhcmVudCkge3JldHVybiBudWxsO30pICYmIChfX2Jsb2Nrc1tcInN1ZmZpeFwiXSA9IGZ1bmN0aW9uKHBhcmVudCkge1xudmFyIHNlbGYgPSB0aGlzO1xucmV0dXJuIGJsb2Nrc1tcInN1ZmZpeFwiXSA/IGJsb2Nrc1tcInN1ZmZpeFwiXS5jYWxsKHRoaXMsIGZ1bmN0aW9uKCkge1xucmV0dXJuIF9ibG9ja3NbXCJzdWZmaXhcIl0uY2FsbChzZWxmLCBwYXJlbnQpO1xufSkgOiBfYmxvY2tzW1wic3VmZml4XCJdLmNhbGwodGhpcywgcGFyZW50KTtcbn0pICYmIF9fYmxvY2tzW1wic3VmZml4XCJdLmNhbGwodGhpcyldLCAnay1zdWZmaXgnKSA6IHVuZGVmaW5lZCwgZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW2F1dG9XaWR0aCBdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpID8gaCgnZGl2JywgbnVsbCwgZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW3ZhbHVlID09IG51bGwgfHwgdmFsdWUgPT09ICcnID8gcGxhY2Vob2xkZXIgOiB2YWx1ZSBdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpLCAnay1mYWtlJywgbnVsbCwgZnVuY3Rpb24oaSkge3dpZGdldHNbJ2Zha2UnXSA9IGl9KSA6IHVuZGVmaW5lZF0sICdrLXdyYXBwZXInKSwgZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW2Jsb2Nrcy5hcHBlbmQgXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKSA/IGgoJ2RpdicsIG51bGwsIChfYmxvY2tzW1wiYXBwZW5kXCJdID0gZnVuY3Rpb24ocGFyZW50KSB7cmV0dXJuIG51bGw7fSkgJiYgKF9fYmxvY2tzW1wiYXBwZW5kXCJdID0gZnVuY3Rpb24ocGFyZW50KSB7XG52YXIgc2VsZiA9IHRoaXM7XG5yZXR1cm4gYmxvY2tzW1wiYXBwZW5kXCJdID8gYmxvY2tzW1wiYXBwZW5kXCJdLmNhbGwodGhpcywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gX2Jsb2Nrc1tcImFwcGVuZFwiXS5jYWxsKHNlbGYsIHBhcmVudCk7XG59KSA6IF9ibG9ja3NbXCJhcHBlbmRcIl0uY2FsbCh0aGlzLCBwYXJlbnQpO1xufSkgJiYgX19ibG9ja3NbXCJhcHBlbmRcIl0uY2FsbCh0aGlzKSwgJ2stYXBwZW5kJykgOiB1bmRlZmluZWRdLCBfY2xhc3NOYW1lKGZ1bmN0aW9uKCkge3RyeSB7cmV0dXJuIFtjbGFzc05hbWVPYmogXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKSkpXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9pbnB1dC9pbmRleC52ZHQiLCJpbXBvcnQgSW50YWN0IGZyb20gJ2ludGFjdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1vdmVXcmFwcGVyIGV4dGVuZHMgSW50YWN0IHtcbiAgICB0ZW1wbGF0ZShzZWxmLCBWZHQpIHtcbiAgICAgICAgY29uc3QgY2hpbGRyZW4gPSBzZWxmLmdldCgnY2hpbGRyZW4nKTtcbiAgICAgICAgcmV0dXJuIGNoaWxkcmVuIHx8IFZkdC5taXNzLmhjKCdNb3ZlV3JhcHBlcicpO1xuICAgIH1cblxuICAgIGRlZmF1bHRzKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgYXV0b0Rlc3Ryb3k6IHRydWUsIFxuICAgICAgICAgICAgY29udGFpbmVyOiB1bmRlZmluZWQsXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBpbml0KC4uLmFyZ3MpIHtcbiAgICAgICAgc3VwZXIuaW5pdCguLi5hcmdzKTtcbiAgICAgICAgcmV0dXJuIHRoaXMucGxhY2Vob2xkZXIgPSBkb2N1bWVudC5jcmVhdGVDb21tZW50KFwicGxhY2Vob2xkZXJcIik7XG4gICAgfVxuXG4gICAgaHlkcmF0ZSguLi5hcmdzKSB7XG4gICAgICAgIHN1cGVyLmh5ZHJhdGUoLi4uYXJncyk7XG4gICAgICAgIHJldHVybiB0aGlzLnBsYWNlaG9sZGVyID0gZG9jdW1lbnQuY3JlYXRlQ29tbWVudCgncGxhY2Vob2xkZXInKTtcbiAgICB9XG5cbiAgICB1cGRhdGUobGFzdFZOb2RlLCBuZXh0Vk5vZGUpIHtcbiAgICAgICAgc3VwZXIudXBkYXRlKGxhc3RWTm9kZSwgbmV4dFZOb2RlKTtcbiAgICAgICAgcmV0dXJuIHRoaXMucGxhY2Vob2xkZXI7XG4gICAgfVxuXG4gICAgZGVzdHJveSguLi5hcmdzKSB7XG4gICAgICAgIGlmICh0aGlzLmdldCgnYXV0b0Rlc3Ryb3knKSkge1xuICAgICAgICAgICAgdGhpcy5fJGRlc3Ryb3koLi4uYXJncyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBcbiAgICAvKipcbiAgICAgKiBAYnJpZWYgb3ZlcnJpZGUgc3VwZXIgZGVzdHJveSBcbiAgICAgKlxuICAgICAqIE1vdmVXcmFwZXIgY29tcG9uZW50IGhhcyBjaGFuZ2VkIHRoZSBkb20gc3RydWN0aW9uLlxuICAgICAqIEl0IGlzIGFsd2F5cyB0aGUgdG9wIGxldmVsIGRvbSwgc28gd2Ugc2hvdWxkIFxuICAgICAqIHJlbW92ZSBpdCBmcm9tIHBhcmVudCBkb20uIEJ5IHBhc3NpbmcgdGhlIGNvbnRhaW5lclxuICAgICAqIHRvIHJlbW92ZSBmdW5jdGlvbiBjYW4gZG8gdGhpcy4gV2UgY2FuJ3QgcmVtb3ZlIGl0XG4gICAgICogZGlyZWN0bHkgYnkgY2FsbGluZyByZW1vdmVDaGlsZCBtZXRob2QsIGJlYWNhdXNlIGl0XG4gICAgICogbWF5YmUgaGF2ZSBsZWF2ZSBhbmltYXRpb24uXG4gICAgICpcbiAgICAgKiBAcGFyYW0gLi4uYXJnc1xuICAgICAqL1xuICAgIF8kZGVzdHJveShsYXN0Vk5vZGUsIG5leHRWTm9kZSkge1xuICAgICAgICAvLyBpZiAodGhpcy5kZXN0cm95ZWQpIHtcbiAgICAgICAgICAgIC8vIHJldHVybiBjb25zb2xlLndhcm4oJ2Rlc3Ryb3llZCBtdWx0aXBsZSB0aW1lcycpO1xuICAgICAgICAvLyB9XG4gICAgICAgIGlmICh0aGlzLnJlbmRlcmVkICYmIFxuICAgICAgICAgICAgKFxuICAgICAgICAgICAgICAgICFuZXh0Vk5vZGUgfHxcbiAgICAgICAgICAgICAgICAhKG5leHRWTm9kZS50eXBlICYgSW50YWN0LlZkdC5taXNzLlR5cGVzLkNvbXBvbmVudENsYXNzT3JJbnN0YW5jZSkgfHxcbiAgICAgICAgICAgICAgICBuZXh0Vk5vZGUua2V5ICE9PSBsYXN0Vk5vZGUua2V5XG4gICAgICAgICAgICApXG4gICAgICAgICkge1xuICAgICAgICAgICAgSW50YWN0LlZkdC5taXNzLnJlbW92ZSh0aGlzLnZkdC52Tm9kZSwgdGhpcy5jb250YWluZXIpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX2Rlc3Ryb3kobGFzdFZOb2RlLCBuZXh0Vk5vZGUpO1xuICAgICAgICB0aGlzLmRlc3Ryb3llZCA9IHRydWU7XG4gICAgICAgIHRoaXMudHJpZ2dlcignJGRlc3Ryb3llZCcsIHRoaXMpO1xuICAgICAgICB0aGlzLm9mZigpO1xuICAgIH1cblxuICAgIF9tb3VudChsYXN0Vk5vZGUsIG5leHRWTm9kZSkge1xuICAgICAgICBjb25zdCBjb250YWluZXIgPSB0aGlzLmdldCgnY29udGFpbmVyJyk7XG4gICAgICAgIGlmIChjb250YWluZXIpIHtcbiAgICAgICAgICAgIHRoaXMuY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcihjb250YWluZXIpO1xuICAgICAgICB9XG4gICAgICAgIGlmICghdGhpcy5jb250YWluZXIpIHtcbiAgICAgICAgICAgIHRoaXMuY29udGFpbmVyID0gZG9jdW1lbnQuYm9keTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLmVsZW1lbnQpO1xuICAgIH1cbn1cblxuZXhwb3J0IHtNb3ZlV3JhcHBlcn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL21vdmVXcmFwcGVyL2luZGV4LmpzIiwiY29uc3QgbWF4ID0gTWF0aC5tYXg7XG5jb25zdCBhYnMgPSBNYXRoLmFicztcbmNvbnN0IHJIb3Jpem9udGFsID0gL2xlZnR8Y2VudGVyfHJpZ2h0LztcbmNvbnN0IHJWZXJ0aWNhbCA9IC90b3B8Y2VudGVyfGJvdHRvbS87XG5jb25zdCByT2Zmc2V0ID0gL1tcXCtcXC1dXFxkKyhcXC5bXFxkXSspPyU/LztcbmNvbnN0IHJQb3NpdGlvbiA9IC9eXFx3Ky87XG5jb25zdCByUGVyY2VudCA9IC8lJC87XG5cbmZ1bmN0aW9uIGdldERpbWVuc2lvbnMoZWxlbSkge1xuICAgIGlmIChlbGVtLm5vZGVUeXBlID09PSA5KSB7XG4gICAgICAgIC8vIGRvY3VtZW50XG4gICAgICAgIGNvbnN0IHt3aWR0aCwgaGVpZ2h0fSA9IGdldERvY3VtZW50T3JXaW5kb3dSZWN0KGVsZW0pO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgd2lkdGgsXG4gICAgICAgICAgICBoZWlnaHQsXG4gICAgICAgICAgICBvZmZzZXQ6IHtcbiAgICAgICAgICAgICAgICB0b3A6IDAsXG4gICAgICAgICAgICAgICAgbGVmdDogMFxuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgIH0gZWxzZSBpZiAoZWxlbSA9PT0gd2luZG93KSB7XG4gICAgICAgIGNvbnN0IHt3aWR0aCwgaGVpZ2h0fSA9IGdldERvY3VtZW50T3JXaW5kb3dSZWN0KGVsZW0pO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgd2lkdGgsXG4gICAgICAgICAgICBoZWlnaHQsXG4gICAgICAgICAgICBvZmZzZXQ6IHtcbiAgICAgICAgICAgICAgICB0b3A6IGVsZW0ucGFnZVlPZmZzZXQsXG4gICAgICAgICAgICAgICAgbGVmdDogZWxlbS5wYWdlWE9mZnNldCxcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICB9IGVsc2UgaWYgKGVsZW0ucHJldmVudERlZmF1bHQpIHtcbiAgICAgICAgLy8gZXZlbnRcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHdpZHRoOiAwLFxuICAgICAgICAgICAgaGVpZ2h0OiAwLFxuICAgICAgICAgICAgb2Zmc2V0OiB7XG4gICAgICAgICAgICAgICAgdG9wOiBlbGVtLnBhZ2VZLFxuICAgICAgICAgICAgICAgIGxlZnQ6IGVsZW0ucGFnZVhcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICB9XG4gICAgLy8gZG9tXG4gICAgY29uc3QgcmVjdCA9IGVsZW0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgd2lkdGg6IHJlY3Qud2lkdGgsXG4gICAgICAgIGhlaWdodDogcmVjdC5oZWlnaHQsXG4gICAgICAgIG9mZnNldDoge1xuICAgICAgICAgICAgdG9wOiByZWN0LnRvcCArIHdpbmRvdy5wYWdlWU9mZnNldCxcbiAgICAgICAgICAgIGxlZnQ6IHJlY3QubGVmdCArIHdpbmRvdy5wYWdlWE9mZnNldFxuICAgICAgICB9XG4gICAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldERvY3VtZW50T3JXaW5kb3dSZWN0KGVsZW0pIHtcbiAgICBpZiAoZWxlbSA9PT0gd2luZG93KSB7XG4gICAgICAgIGNvbnN0IGQgPSBlbGVtLmRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHdpZHRoOiBkLmNsaWVudFdpZHRoLFxuICAgICAgICAgICAgaGVpZ2h0OiBkLmNsaWVudEhlaWdodCxcbiAgICAgICAgfTtcbiAgICB9XG4gICAgY29uc3QgZCA9IGVsZW0uZG9jdW1lbnRFbGVtZW50O1xuICAgIGNvbnN0IGIgPSBlbGVtLmJvZHk7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgd2lkdGg6IG1heChcbiAgICAgICAgICAgIGIuc2Nyb2xsV2lkdGgsIGQuc2Nyb2xsV2lkdGgsXG4gICAgICAgICAgICBiLm9mZnNldFdpZHRoLCBkLm9mZnNldFdpZHRoLFxuICAgICAgICAgICAgZC5jbGllbnRXaWR0aFxuICAgICAgICApLFxuICAgICAgICBoZWlnaHQ6IG1heChcbiAgICAgICAgICAgIGIuc2Nyb2xsSGVpZ2h0LCBkLnNjcm9sbEhlaWdodCxcbiAgICAgICAgICAgIGIub2Zmc2V0SGVpZ2h0LCBkLm9mZnNldEhlaWdodCxcbiAgICAgICAgICAgIGQuY2xpZW50SGVpZ2h0XG4gICAgICAgIClcbiAgICB9O1xufVxuXG5mdW5jdGlvbiBnZXRPZmZzZXRzKG9mZnNldHMsIHdpZHRoLCBoZWlnaHQpIHtcbiAgICByZXR1cm4gW1xuICAgICAgICBwYXJzZUZsb2F0KG9mZnNldHNbMF0pICogKHJQZXJjZW50LnRlc3Qob2Zmc2V0c1swXSkgPyB3aWR0aCAvIDEwMCA6IDEpLFxuICAgICAgICBwYXJzZUZsb2F0KG9mZnNldHNbMV0pICogKHJQZXJjZW50LnRlc3Qob2Zmc2V0c1sxXSkgPyBoZWlnaHQgLyAxMDAgOiAxKSxcbiAgICBdO1xufVxuXG4vLyByZWZlcmVuY2U6IGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvMTMzODI1MTYvZ2V0dGluZy1zY3JvbGwtYmFyLXdpZHRoLXVzaW5nLWphdmFzY3JpcHRcbmxldCBfc2Nyb2xsQmFyV2lkdGg7XG5leHBvcnQgZnVuY3Rpb24gc2Nyb2xsYmFyV2lkdGgoKSB7XG4gICAgaWYgKF9zY3JvbGxCYXJXaWR0aCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHJldHVybiBfc2Nyb2xsQmFyV2lkdGg7XG4gICAgfVxuXG4gICAgdmFyIG91dGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBvdXRlci5zdHlsZS52aXNpYmlsaXR5ID0gXCJoaWRkZW5cIjtcbiAgICBvdXRlci5zdHlsZS53aWR0aCA9IFwiMTAwcHhcIjtcbiAgICBvdXRlci5zdHlsZS5tc092ZXJmbG93U3R5bGUgPSBcInNjcm9sbGJhclwiOyAvLyBuZWVkZWQgZm9yIFdpbkpTIGFwcHNcblxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQob3V0ZXIpO1xuXG4gICAgdmFyIHdpZHRoTm9TY3JvbGwgPSBvdXRlci5vZmZzZXRXaWR0aDtcbiAgICAvLyBmb3JjZSBzY3JvbGxiYXJzXG4gICAgb3V0ZXIuc3R5bGUub3ZlcmZsb3cgPSBcInNjcm9sbFwiO1xuXG4gICAgLy8gYWRkIGlubmVyZGl2XG4gICAgdmFyIGlubmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBpbm5lci5zdHlsZS53aWR0aCA9IFwiMTAwJVwiO1xuICAgIG91dGVyLmFwcGVuZENoaWxkKGlubmVyKTtcblxuICAgIHZhciB3aWR0aFdpdGhTY3JvbGwgPSBpbm5lci5vZmZzZXRXaWR0aDtcblxuICAgIC8vIHJlbW92ZSBkaXZzXG4gICAgb3V0ZXIucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChvdXRlcik7XG5cbiAgICByZXR1cm4gKF9zY3JvbGxCYXJXaWR0aCA9IHdpZHRoTm9TY3JvbGwgLSB3aWR0aFdpdGhTY3JvbGwpO1xufVxuXG5mdW5jdGlvbiBnZXRTY3JvbGxJbmZvKHdpdGhpbikge1xuICAgIGNvbnN0IG92ZXJmbG93WCA9IHdpdGhpbi5pc1dpbmRvdyB8fCB3aXRoaW4uaXNEb2N1bWVudCA/IFxuICAgICAgICAnJyA6IHdpdGhpbi5lbGVtZW50LnN0eWxlLm92ZXJmbG93WDtcbiAgICBjb25zdCBvdmVyZmxvd1kgPSB3aXRoaW4uaXNXaW5kb3cgfHwgd2l0aGluLmlzRG9jdW1lbnQgPyBcbiAgICAgICAgJycgOiB3aXRoaW4uZWxlbWVudC5zdHlsZS5vdmVyZmxvd1k7XG4gICAgY29uc3QgaGFzT3ZlcmZsb3dYID0gb3ZlcmZsb3dYID09PSAnc2Nyb2xsJyB8fCBcbiAgICAgICAgKG92ZXJmbG93WCA9PT0gJ2F1dG8nICYmIHdpdGhpbi53aWR0aCA8IHdpdGhpbi5lbGVtZW50LnNjcm9sbFdpZHRoKTtcbiAgICBjb25zdCBoYXNPdmVyZmxvd1kgPSBvdmVyZmxvd1kgPT09ICdzY3JvbGwnIHx8IFxuICAgICAgICAob3ZlcmZsb3dZID09PSAnYXV0bycgJiYgd2l0aGluLmhlaWdodCA8IHdpdGhpbi5lbGVtZW50LnNjcm9sbEhlaWdodCk7XG4gICAgXG4gICAgcmV0dXJuIHtcbiAgICAgICAgd2lkdGg6IGhhc092ZXJmbG93WSA/IHNjcm9sbGJhcldpZHRoKCkgOiAwLFxuICAgICAgICBoZWlnaHQ6IGhhc092ZXJmbG93WCA/IHNjcm9sbGJhcldpZHRoKCkgOiAwLFxuICAgIH07XG59XG5cbmZ1bmN0aW9uIGdldFdpdGhpbkluZm8oZWxlbWVudCkge1xuICAgIGVsZW1lbnQgfHwgKGVsZW1lbnQgPSB3aW5kb3cpO1xuICAgIGNvbnN0IGlzV2luZG93ID0gZWxlbWVudCA9PT0gd2luZG93O1xuICAgIGNvbnN0IGlzRG9jdW1lbnQgPSBlbGVtZW50Lm5vZGVUeXBlID09PSA5O1xuICAgIGNvbnN0IGhhc09mZnNldCA9ICFpc1dpbmRvdyAmJiAhaXNEb2N1bWVudDtcblxuICAgIGNvbnN0IHJldCA9IHtlbGVtZW50LCBpc1dpbmRvdywgaXNEb2N1bWVudH07XG4gICAgaWYgKGhhc09mZnNldCkge1xuICAgICAgICBjb25zdCByZWN0ID0gZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgICAgcmV0Lm9mZnNldCA9IHtcbiAgICAgICAgICAgIHRvcDogcmVjdC50b3AgKyB3aW5kb3cucGFnZVlPZmZzZXQsXG4gICAgICAgICAgICBsZWZ0OiByZWN0LmxlZnQgKyB3aW5kb3cucGFnZVhPZmZzZXQsXG4gICAgICAgIH07XG4gICAgICAgIHJldC53aWR0aCA9IHJlY3Qud2lkdGg7XG4gICAgICAgIHJldC5oZWlnaHQgPSByZWN0LmhlaWdodDtcbiAgICAgICAgcmV0LnNjcm9sbExlZnQgPSBlbGVtZW50LnNjcm9sbExlZnQ7XG4gICAgICAgIHJldC5zY3JvbGxUb3AgPSBlbGVtZW50LnNjcm9sbFRvcDtcbiAgICB9IGVsc2Uge1xuICAgICAgICByZXQub2Zmc2V0ID0ge3RvcDogMCwgbGVmdDogMH07XG4gICAgICAgIGNvbnN0IHJlY3QgPSBnZXREb2N1bWVudE9yV2luZG93UmVjdChlbGVtZW50KTtcbiAgICAgICAgcmV0LndpZHRoID0gcmVjdC53aWR0aDtcbiAgICAgICAgcmV0LmhlaWdodCA9IHJlY3QuaGVpZ2h0O1xuICAgICAgICByZXQuc2Nyb2xsTGVmdCA9IHdpbmRvdy5wYWdlWE9mZnNldDtcbiAgICAgICAgcmV0LnNjcm9sbFRvcCA9IHdpbmRvdy5wYWdlWU9mZnNldDtcbiAgICB9XG5cbiAgICByZXR1cm4gcmV0O1xufVxuXG5mdW5jdGlvbiBwYXJzZUNzcyhzdHlsZSwgcHJvcGVydHkpIHtcbiAgICByZXR1cm4gcGFyc2VJbnQoc3R5bGVbcHJvcGVydHldLCAxMCkgfHwgMDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcG9zaXRpb24oZWxlbSwgb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSBPYmplY3QuYXNzaWduKHt9LCBvcHRpb25zKTtcblxuICAgIGNvbnN0IHRhcmdldCA9IG9wdGlvbnMub2YgfHwgd2luZG93O1xuICAgIGlmICh0YXJnZXQucHJldmVudERlZmF1bHQpIHtcbiAgICAgICAgb3B0aW9ucy5hdCA9IFwibGVmdCB0b3BcIjtcbiAgICB9XG4gICAgY29uc3Qge1xuICAgICAgICB3aWR0aDogdGFyZ2V0V2lkdGgsXG4gICAgICAgIGhlaWdodDogdGFyZ2V0SGVpZ2h0LCBcbiAgICAgICAgb2Zmc2V0OiB0YXJnZXRPZmZzZXRcbiAgICB9ID0gZ2V0RGltZW5zaW9ucyh0YXJnZXQpO1xuICAgIGNvbnN0IGJhc2VQb3NpdGlvbiA9IE9iamVjdC5hc3NpZ24oe30sIHRhcmdldE9mZnNldCk7XG4gICAgY29uc3QgY29sbGlzaW9uID0gKG9wdGlvbnMuY29sbGlzaW9uIHx8ICdmbGlwJykuc3BsaXQoJyAnKTtcbiAgICBjb25zdCBvZmZzZXRzID0ge307XG4gICAgY29uc3Qgd2l0aGluID0gZ2V0V2l0aGluSW5mbyhvcHRpb25zLndpdGhpbik7XG4gICAgY29uc3Qgc2Nyb2xsSW5mbyA9IGdldFNjcm9sbEluZm8od2l0aGluKTtcblxuICAgIFsnbXknLCAnYXQnXS5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICBsZXQgcG9zID0gKG9wdGlvbnNbaXRlbV0gfHwgJycpLnNwbGl0KCcgJyk7XG5cbiAgICAgICAgaWYgKHBvcy5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgICAgIHBvcyA9IHJIb3Jpem9udGFsLnRlc3QocG9zWzBdKSA/XG4gICAgICAgICAgICAgICAgcG9zLmNvbmNhdChbJ2NlbnRlciddKSA6XG4gICAgICAgICAgICAgICAgclZlcnRpY2FsLnRlc3QocG9zWzBdKSA/XG4gICAgICAgICAgICAgICAgICAgIFsnY2VudGVyJ10uY29uY2F0KHBvcykgOlxuICAgICAgICAgICAgICAgICAgICBbJ2NlbnRlcicsICdjZW50ZXInXTtcbiAgICAgICAgfVxuICAgICAgICBwb3NbMF0gPSBySG9yaXpvbnRhbC50ZXN0KHBvc1swXSkgPyBwb3NbMF0gOiAnY2VudGVyJztcbiAgICAgICAgcG9zWzFdID0gclZlcnRpY2FsLnRlc3QocG9zWzFdKSA/IHBvc1sxXSA6ICdjZW50ZXInO1xuXG4gICAgICAgIGNvbnN0IGhvcml6b250YWxPZmZzZXQgPSByT2Zmc2V0LmV4ZWMocG9zWzBdKTtcbiAgICAgICAgY29uc3QgdmVydGljYWxPZmZzZXQgPSByT2Zmc2V0LmV4ZWMocG9zWzFdKTtcbiAgICAgICAgb2Zmc2V0c1tpdGVtXSA9IFtcbiAgICAgICAgICAgIGhvcml6b250YWxPZmZzZXQgPyBob3Jpem9udGFsT2Zmc2V0WzBdIDogMCxcbiAgICAgICAgICAgIHZlcnRpY2FsT2Zmc2V0ID8gdmVydGljYWxPZmZzZXRbMF0gOiAwXG4gICAgICAgIF07XG5cbiAgICAgICAgb3B0aW9uc1tpdGVtXSA9IFtcbiAgICAgICAgICAgIHJQb3NpdGlvbi5leGVjKHBvc1swXSlbMF0sXG4gICAgICAgICAgICByUG9zaXRpb24uZXhlYyhwb3NbMV0pWzBdXG4gICAgICAgIF07XG4gICAgfSk7XG5cbiAgICBpZiAoY29sbGlzaW9uLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICBjb2xsaXNpb25bMV0gPSBjb2xsaXNpb25bMF07XG4gICAgfVxuXG4gICAgY29uc3QgYXQgPSBvcHRpb25zLmF0O1xuICAgIGlmIChhdFswXSA9PT0gJ3JpZ2h0Jykge1xuICAgICAgICBiYXNlUG9zaXRpb24ubGVmdCArPSB0YXJnZXRXaWR0aDtcbiAgICB9IGVsc2UgaWYgKGF0WzBdID09PSAnY2VudGVyJykge1xuICAgICAgICBiYXNlUG9zaXRpb24ubGVmdCArPSB0YXJnZXRXaWR0aCAvIDI7XG4gICAgfVxuICAgIGlmIChhdFsxXSA9PT0gJ2JvdHRvbScpIHtcbiAgICAgICAgYmFzZVBvc2l0aW9uLnRvcCArPSB0YXJnZXRIZWlnaHQ7XG4gICAgfSBlbHNlIGlmIChhdFsxXSA9PT0gJ2NlbnRlcicpIHtcbiAgICAgICAgYmFzZVBvc2l0aW9uLnRvcCArPSB0YXJnZXRIZWlnaHQgLyAyO1xuICAgIH1cblxuICAgIGNvbnN0IGF0T2Zmc2V0ID0gZ2V0T2Zmc2V0cyhvZmZzZXRzLmF0LCB0YXJnZXRXaWR0aCwgdGFyZ2V0SGVpZ2h0KTtcbiAgICBiYXNlUG9zaXRpb24ubGVmdCArPSBhdE9mZnNldFswXTtcbiAgICBiYXNlUG9zaXRpb24udG9wICs9IGF0T2Zmc2V0WzFdO1xuXG4gICAgY29uc3QgZWxlbVdpZHRoID0gZWxlbS5vZmZzZXRXaWR0aDtcbiAgICBjb25zdCBlbGVtSGVpZ2h0ID0gZWxlbS5vZmZzZXRIZWlnaHQ7XG4gICAgY29uc3QgcG9zaXRpb24gPSBPYmplY3QuYXNzaWduKHt9LCBiYXNlUG9zaXRpb24pO1xuICAgIGNvbnN0IG15T2Zmc2V0ID0gZ2V0T2Zmc2V0cyhvZmZzZXRzLm15LCBlbGVtV2lkdGgsIGVsZW1IZWlnaHQpO1xuICAgIGNvbnN0IGNvbXB1dGVkU3R5bGUgPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShlbGVtKTtcbiAgICBjb25zdCBtYXJnaW5MZWZ0ID0gcGFyc2VDc3MoY29tcHV0ZWRTdHlsZSwgJ21hcmdpbkxlZnQnKTtcbiAgICBjb25zdCBtYXJnaW5Ub3AgPSBwYXJzZUNzcyhjb21wdXRlZFN0eWxlLCAnbWFyZ2luVG9wJyk7XG4gICAgY29uc3QgY29sbGlzaW9uV2lkdGggPSBlbGVtV2lkdGggKyBtYXJnaW5MZWZ0ICsgcGFyc2VDc3MoY29tcHV0ZWRTdHlsZSwgJ21hcmdpblJpZ2h0JykgKyBzY3JvbGxJbmZvLndpZHRoO1xuICAgIGNvbnN0IGNvbGxpc2lvbkhlaWdodCA9IGVsZW1IZWlnaHQgKyBtYXJnaW5Ub3AgKyBwYXJzZUNzcyhjb21wdXRlZFN0eWxlLCAnbWFyZ2luQm90dG9tJykgKyBzY3JvbGxJbmZvLmhlaWdodDtcbiAgICBjb25zdCBjb2xsaXNpb25Qb3NpdGlvbiA9IHttYXJnaW5MZWZ0LCBtYXJnaW5Ub3B9O1xuXG4gICAgY29uc3QgbXkgPSBvcHRpb25zLm15O1xuICAgIGlmIChteVswXSA9PT0gJ3JpZ2h0Jykge1xuICAgICAgICBwb3NpdGlvbi5sZWZ0IC09IGVsZW1XaWR0aDtcbiAgICB9IGVsc2UgaWYgKG15WzBdID09PSAnY2VudGVyJykge1xuICAgICAgICBwb3NpdGlvbi5sZWZ0IC09IGVsZW1XaWR0aCAvIDI7XG4gICAgfVxuICAgIGlmIChteVsxXSA9PT0gJ2JvdHRvbScpIHtcbiAgICAgICAgcG9zaXRpb24udG9wIC09IGVsZW1IZWlnaHQ7XG4gICAgfSBlbHNlIGlmIChteVsxXSA9PT0gJ2NlbnRlcicpIHtcbiAgICAgICAgcG9zaXRpb24udG9wIC09IGVsZW1IZWlnaHQgLyAyO1xuICAgIH1cbiAgICBwb3NpdGlvbi5sZWZ0ICs9IG15T2Zmc2V0WzBdO1xuICAgIHBvc2l0aW9uLnRvcCArPSBteU9mZnNldFsxXTtcblxuICAgIFsnbGVmdCcsICd0b3AnXS5mb3JFYWNoKChkaXIsIGkpID0+IHtcbiAgICAgICAgY29uc3QgY29sbCA9IGNvbGxpc2lvbltpXTtcbiAgICAgICAgaWYgKHJ1bGVzW2NvbGxdKSB7XG4gICAgICAgICAgICBydWxlc1tjb2xsXVtkaXJdKHBvc2l0aW9uLCB7XG4gICAgICAgICAgICAgICAgdGFyZ2V0V2lkdGgsXG4gICAgICAgICAgICAgICAgdGFyZ2V0SGVpZ2h0LFxuICAgICAgICAgICAgICAgIGVsZW1XaWR0aCxcbiAgICAgICAgICAgICAgICBlbGVtSGVpZ2h0LFxuICAgICAgICAgICAgICAgIGNvbGxpc2lvblBvc2l0aW9uLFxuICAgICAgICAgICAgICAgIGNvbGxpc2lvbldpZHRoLFxuICAgICAgICAgICAgICAgIGNvbGxpc2lvbkhlaWdodCxcbiAgICAgICAgICAgICAgICBvZmZzZXQ6IFthdE9mZnNldFswXSArIG15T2Zmc2V0WzBdLCBhdE9mZnNldFsxXSArIG15T2Zmc2V0WzFdXSxcbiAgICAgICAgICAgICAgICBteTogb3B0aW9ucy5teSxcbiAgICAgICAgICAgICAgICBhdDogb3B0aW9ucy5hdCxcbiAgICAgICAgICAgICAgICB3aXRoaW4sXG4gICAgICAgICAgICAgICAgZWxlbVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIGlmIChvcHRpb25zLnVzaW5nKSB7XG4gICAgICAgIGNvbnN0IGxlZnQgPSB0YXJnZXRPZmZzZXQubGVmdCAtIHBvc2l0aW9uLmxlZnQ7XG4gICAgICAgIGNvbnN0IHJpZ2h0ID0gbGVmdCArIHRhcmdldFdpZHRoIC0gZWxlbVdpZHRoO1xuICAgICAgICBjb25zdCB0b3AgPSB0YXJnZXRPZmZzZXQudG9wIC0gcG9zaXRpb24udG9wO1xuICAgICAgICBjb25zdCBib3R0b20gPSB0b3AgKyB0YXJnZXRIZWlnaHQgLSBlbGVtSGVpZ2h0O1xuICAgICAgICBjb25zdCBmZWVkYmFjayA9IHtcbiAgICAgICAgICAgIHRhcmdldDoge1xuICAgICAgICAgICAgICAgIGVsZW1lbnQ6IHRhcmdldCxcbiAgICAgICAgICAgICAgICBsZWZ0OiB0YXJnZXRPZmZzZXQubGVmdCxcbiAgICAgICAgICAgICAgICB0b3A6IHRhcmdldE9mZnNldC50b3AsXG4gICAgICAgICAgICAgICAgd2lkdGg6IHRhcmdldFdpZHRoLFxuICAgICAgICAgICAgICAgIGhlaWdodDogdGFyZ2V0SGVpZ2h0LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGVsZW1lbnQ6IHtcbiAgICAgICAgICAgICAgICBlbGVtZW50OiBlbGVtLFxuICAgICAgICAgICAgICAgIGxlZnQ6IHBvc2l0aW9uLmxlZnQsXG4gICAgICAgICAgICAgICAgdG9wOiBwb3NpdGlvbi50b3AsXG4gICAgICAgICAgICAgICAgd2lkdGg6IGVsZW1XaWR0aCxcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IGVsZW1IZWlnaHQsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgaG9yaXpvbnRhbDogcmlnaHQgPCAwID8gJ2xlZnQnIDogbGVmdCA+IDAgPyAncmlnaHQnIDogJ2NlbnRlcicsXG4gICAgICAgICAgICB2ZXJ0aWNhbDogYm90dG9tIDwgMCA/ICd0b3AnIDogdG9wID4gMCA/ICdib3R0b20nIDogJ21pZGRsZScsXG4gICAgICAgIH07XG4gICAgICAgIGlmICh0YXJnZXRXaWR0aCA8IGVsZW1XaWR0aCAmJiBhYnMobGVmdCArIHJpZ2h0KSA8IHRhcmdldFdpZHRoKSB7XG4gICAgICAgICAgICBmZWVkYmFjay5ob3Jpem9udGFsID0gJ2NlbnRlcic7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRhcmdldEhlaWdodCA8IGVsZW1IZWlnaHQgJiYgYWJzKHRvcCArIGJvdHRvbSkgPCB0YXJnZXRIZWlnaHQpIHtcbiAgICAgICAgICAgIGZlZWRiYWNrLnZlcnRpY2FsID0gJ21pZGRsZSc7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoXG4gICAgICAgICAgICBwb3NpdGlvbi50b3AgKyBlbGVtSGVpZ2h0IDw9IHRhcmdldE9mZnNldC50b3AgfHwgXG4gICAgICAgICAgICBwb3NpdGlvbi50b3AgPj0gdGFyZ2V0T2Zmc2V0LnRvcCArIHRhcmdldEhlaWdodFxuICAgICAgICApIHtcbiAgICAgICAgICAgIGZlZWRiYWNrLmltcG9ydGFudCA9ICd2ZXJ0aWNhbCc7XG4gICAgICAgIH0gZWxzZSBpZiAoXG4gICAgICAgICAgICBwb3NpdGlvbi5sZWZ0ICsgZWxlbVdpZHRoIDw9IHRhcmdldE9mZnNldC5sZWZ0IHx8XG4gICAgICAgICAgICBwb3NpdGlvbi5sZWZ0ID49IHRhcmdldE9mZnNldC5sZWZ0ICsgdGFyZ2V0V2lkdGhcbiAgICAgICAgKSB7XG4gICAgICAgICAgICBmZWVkYmFjay5pbXBvcnRhbnQgPSAnaG9yaXpvbnRhbCc7XG4gICAgICAgIH0gZWxzZSBpZiAobWF4KGFicyhsZWZ0KSwgYWJzKHJpZ2h0KSkgPiBtYXgoYWJzKHRvcCksIGFicyhib3R0b20pKSkge1xuICAgICAgICAgICAgZmVlZGJhY2suaW1wb3J0YW50ID0gJ2hvcml6b250YWwnO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZmVlZGJhY2suaW1wb3J0YW50ID0gJ3ZlcnRpY2FsJztcbiAgICAgICAgfVxuXG4gICAgICAgIG9wdGlvbnMudXNpbmcoZmVlZGJhY2ssIHBvc2l0aW9uKTtcbiAgICB9XG5cbiAgICBjb25zdCBzdHlsZSA9IGVsZW0uc3R5bGU7XG4gICAgaWYgKGNvbXB1dGVkU3R5bGUucG9zaXRpb24gPT09ICdzdGF0aWMnKSB7XG4gICAgICAgIHN0eWxlLnBvc2l0aW9uID0gJ3JlbGF0aXZlJztcbiAgICB9XG4gICAgc3R5bGUubGVmdCA9IHBvc2l0aW9uLmxlZnQgKyAncHgnO1xuICAgIHN0eWxlLnRvcCA9IHBvc2l0aW9uLnRvcCArICdweCc7XG59XG5cbmNvbnN0IHJ1bGVzID0ge1xuICAgIGZpdDoge1xuICAgICAgICBsZWZ0KHBvc2l0aW9uLCBkYXRhKSB7XG4gICAgICAgICAgICBjb25zdCB3aXRoaW4gPSBkYXRhLndpdGhpbjtcbiAgICAgICAgICAgIGNvbnN0IHdpdGhpbk9mZnNldCA9IHdpdGhpbi5pc1dpbmRvdyA/IHdpdGhpbi5zY3JvbGxMZWZ0IDogd2l0aGluLm9mZnNldC5sZWZ0O1xuICAgICAgICAgICAgY29uc3Qgb3V0ZXJXaWR0aCA9IHdpdGhpbi53aWR0aDtcbiAgICAgICAgICAgIGNvbnN0IGNvbGxpc2lvblBvc0xlZnQgPSAgcG9zaXRpb24ubGVmdCAtIGRhdGEuY29sbGlzaW9uUG9zaXRpb24ubWFyZ2luTGVmdDtcbiAgICAgICAgICAgIGNvbnN0IG92ZXJMZWZ0ID0gd2l0aGluT2Zmc2V0IC0gY29sbGlzaW9uUG9zTGVmdDtcbiAgICAgICAgICAgIGNvbnN0IG92ZXJSaWdodCA9IGNvbGxpc2lvblBvc0xlZnQgKyBkYXRhLmNvbGxpc2lvbldpZHRoIC0gb3V0ZXJXaWR0aCAtIHdpdGhpbk9mZnNldDtcbiAgICAgICAgICAgIGxldCBuZXdPdmVyUmlnaHQ7XG5cbiAgICAgICAgICAgIGlmIChkYXRhLmNvbGxpc2lvbldpZHRoID4gb3V0ZXJXaWR0aCkge1xuICAgICAgICAgICAgICAgIGlmIChvdmVyTGVmdCA+IDAgJiYgb3ZlclJpZ2h0IDw9MCkge1xuICAgICAgICAgICAgICAgICAgICBuZXdPdmVyUmlnaHQgPSBwb3NpdGlvbi5sZWZ0ICsgb3ZlckxlZnQgKyBkYXRhLmNvbGxpc2lvbldpZHRoIC0gb3V0ZXJXaWR0aCAtIHdpdGhpbk9mZnNldDtcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb24ubGVmdCArPSBvdmVyTGVmdCAtIG5ld092ZXJSaWdodDtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKG92ZXJSaWdodCA+IDAgJiYgb3ZlckxlZnQgPD0wKSB7XG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uLmxlZnQgPSB3aXRoaW5PZmZzZXQ7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChvdmVyTGVmdCA+IG92ZXJSaWdodCkge1xuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbi5sZWZ0ID0gd2l0aGluT2Zmc2V0ICsgb3V0ZXJXaWR0aCAtIGRhdGEuY29sbGlzaW9uV2lkdGg7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb24ubGVmdCA9IHdpdGhpbk9mZnNldDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2UgaWYgKG92ZXJMZWZ0ID4gMCkge1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uLmxlZnQgKz0gb3ZlckxlZnQ7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKG92ZXJSaWdodCA+IDApIHtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbi5sZWZ0IC09IG92ZXJSaWdodDtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcG9zaXRpb24ubGVmdCA9IG1heChwb3NpdGlvbi5sZWZ0IC0gY29sbGlzaW9uUG9zTGVmdCwgcG9zaXRpb24ubGVmdCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgdG9wKHBvc2l0aW9uLCBkYXRhKSB7XG4gICAgICAgICAgICBjb25zdCB3aXRoaW4gPSBkYXRhLndpdGhpbjtcbiAgICAgICAgICAgIGNvbnN0IHdpdGhpbk9mZnNldCA9IHdpdGhpbi5pc1dpbmRvdyA/IHdpdGhpbi5zY3JvbGxUb3AgOiB3aXRoaW4ub2Zmc2V0LnRvcDtcbiAgICAgICAgICAgIGNvbnN0IG91dGVySGVpZ2h0ID0gZGF0YS53aXRoaW4uaGVpZ2h0O1xuICAgICAgICAgICAgY29uc3QgY29sbGlzaW9uUG9zVG9wID0gcG9zaXRpb24udG9wIC0gZGF0YS5jb2xsaXNpb25Qb3NpdGlvbi5tYXJnaW5Ub3A7XG4gICAgICAgICAgICBjb25zdCBvdmVyVG9wID0gd2l0aGluT2Zmc2V0IC0gY29sbGlzaW9uUG9zVG9wO1xuICAgICAgICAgICAgY29uc3Qgb3ZlckJvdHRvbSA9IGNvbGxpc2lvblBvc1RvcCArIGRhdGEuY29sbGlzaW9uSGVpZ2h0IC0gb3V0ZXJIZWlnaHQgLSB3aXRoaW5PZmZzZXQ7XG4gICAgICAgICAgICBsZXQgbmV3T3ZlckJvdHRvbTtcblxuICAgICAgICAgICAgaWYgKGRhdGEuY29sbGlzaW9uSGVpZ2h0ID4gb3V0ZXJIZWlnaHQpIHtcbiAgICAgICAgICAgICAgICBpZiAob3ZlclRvcCA+IDAgJiYgb3ZlckJvdHRvbSA8PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIG5ld092ZXJCb3R0b20gPSBwb3NpdGlvbi50b3AgKyBvdmVyVG9wICsgZGF0YS5jb2xsaXNpb25IZWlnaHQgLSBvdXRlckhlaWdodCAtIHdpdGhpbk9mZnNldDtcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb24udG9wICs9IG92ZXJUb3AgLSBuZXdPdmVyQm90dG9tO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAob3ZlckJvdHRvbSA+IDAgJiYgb3ZlclRvcCA8PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uLnRvcCA9IHdpdGhpbk9mZnNldDtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKG92ZXJUb3AgPiBvdmVyQm90dG9tKSB7XG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uLnRvcCA9IHdpdGhpbk9mZnNldCArIG91dGVySGVpZ2h0IC0gZGF0YS5jb2xsaXNpb25IZWlnaHQ7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb24udG9wID0gd2l0aGluT2Zmc2V0O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSBpZiAob3ZlclRvcCA+IDApIHtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbi50b3AgKz0gb3ZlclRvcDtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAob3ZlckJvdHRvbSA+IDApIHtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbi50b3AgLT0gb3ZlckJvdHRvbTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcG9zaXRpb24udG9wID0gbWF4KHBvc2l0aW9uLnRvcCAtIGNvbGxpc2lvblBvc1RvcCwgcG9zaXRpb24udG9wKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICBmbGlwOiB7XG4gICAgICAgIGxlZnQocG9zaXRpb24sIGRhdGEpIHtcbiAgICAgICAgICAgIGNvbnN0IHdpdGhpbiA9IGRhdGEud2l0aGluO1xuICAgICAgICAgICAgY29uc3Qgd2l0aGluT2Zmc2V0ID0gd2l0aGluLm9mZnNldC5sZWZ0ICsgd2l0aGluLnNjcm9sbExlZnQ7XG4gICAgICAgICAgICBjb25zdCBvdXRlcldpZHRoID0gd2l0aGluLndpZHRoO1xuICAgICAgICAgICAgY29uc3Qgb2Zmc2V0TGVmdCA9IHdpdGhpbi5pc1dpbmRvdyA/IHdpdGhpbi5zY3JvbGxMZWZ0IDogd2l0aGluLm9mZnNldC5sZWZ0O1xuICAgICAgICAgICAgY29uc3QgY29sbGlzaW9uUG9zTGVmdCA9IHBvc2l0aW9uLmxlZnQgLSBkYXRhLmNvbGxpc2lvblBvc2l0aW9uLm1hcmdpbkxlZnQ7XG4gICAgICAgICAgICBjb25zdCBvdmVyTGVmdCA9IGNvbGxpc2lvblBvc0xlZnQgLSBvZmZzZXRMZWZ0O1xuICAgICAgICAgICAgY29uc3Qgb3ZlclJpZ2h0ID0gY29sbGlzaW9uUG9zTGVmdCArIGRhdGEuY29sbGlzaW9uV2lkdGggLSBvdXRlcldpZHRoIC0gb2Zmc2V0TGVmdDtcbiAgICAgICAgICAgIGNvbnN0IG15T2Zmc2V0ID0gZGF0YS5teVswXSA9PT0gJ2xlZnQnID8gXG4gICAgICAgICAgICAgICAgLWRhdGEuZWxlbVdpZHRoIDpcbiAgICAgICAgICAgICAgICBkYXRhLm15WzBdID09PSAncmlnaHQnID9cbiAgICAgICAgICAgICAgICAgICAgZGF0YS5lbGVtV2lkdGggOiAwO1xuICAgICAgICAgICAgY29uc3QgYXRPZmZzZXQgPSBkYXRhLmF0WzBdID09PSAnbGVmdCcgP1xuICAgICAgICAgICAgICAgIGRhdGEudGFyZ2V0V2lkdGggOlxuICAgICAgICAgICAgICAgIGRhdGEuYXRbMF0gPT09ICdyaWdodCcgP1xuICAgICAgICAgICAgICAgICAgICAtZGF0YS50YXJnZXRXaWR0aCA6IDA7XG4gICAgICAgICAgICBjb25zdCBvZmZzZXQgPSAtMiAqIGRhdGEub2Zmc2V0WzBdO1xuICAgICAgICAgICAgbGV0IG5ld092ZXJSaWdodDtcbiAgICAgICAgICAgIGxldCBuZXdPdmVyTGVmdDtcblxuICAgICAgICAgICAgaWYgKG92ZXJMZWZ0IDwgMCkge1xuICAgICAgICAgICAgICAgIG5ld092ZXJSaWdodCA9IHBvc2l0aW9uLmxlZnQgKyBteU9mZnNldCArIGF0T2Zmc2V0ICsgb2Zmc2V0ICsgZGF0YS5jb2xsaXNpb25XaWR0aCAtIG91dGVyV2lkdGggLSB3aXRoaW5PZmZzZXQ7XG4gICAgICAgICAgICAgICAgaWYgKG5ld092ZXJSaWdodCA8IDAgfHwgbmV3T3ZlclJpZ2h0IDwgYWJzKG92ZXJMZWZ0KSkge1xuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbi5sZWZ0ICs9IG15T2Zmc2V0ICsgYXRPZmZzZXQgKyBvZmZzZXQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIGlmIChvdmVyUmlnaHQgPiAwKSB7XG4gICAgICAgICAgICAgICAgbmV3T3ZlckxlZnQgPSBwb3NpdGlvbi5sZWZ0IC0gZGF0YS5jb2xsaXNpb25Qb3NpdGlvbi5tYXJnaW5MZWZ0ICsgbXlPZmZzZXQgKyBhdE9mZnNldCArIG9mZnNldCAtIG9mZnNldExlZnQ7XG4gICAgICAgICAgICAgICAgLy8gdGhlIHNhbWUgdG8gdG9wXG4gICAgICAgICAgICAgICAgLy8gaWYgKG5ld092ZXJMZWZ0ID4gMCB8fCBhYnMobmV3T3ZlckxlZnQpIDwgb3ZlclJpZ2h0KSB7XG4gICAgICAgICAgICAgICAgaWYgKG5ld092ZXJMZWZ0ID4gMCkge1xuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbi5sZWZ0ICs9IG15T2Zmc2V0ICsgYXRPZmZzZXQgKyBvZmZzZXQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgIHRvcChwb3NpdGlvbiwgZGF0YSkge1xuICAgICAgICAgICAgY29uc3Qgd2l0aGluID0gZGF0YS53aXRoaW47XG4gICAgICAgICAgICBjb25zdCB3aXRoaW5PZmZzZXQgPSB3aXRoaW4ub2Zmc2V0LnRvcCArIHdpdGhpbi5zY3JvbGxUb3A7XG4gICAgICAgICAgICBjb25zdCBvdXRlckhlaWdodCA9IHdpdGhpbi5oZWlnaHQ7XG4gICAgICAgICAgICBjb25zdCBvZmZzZXRUb3AgPSB3aXRoaW4uaXNXaW5kb3cgPyB3aXRoaW4uc2Nyb2xsVG9wIDogd2l0aGluLm9mZnNldC50b3A7XG4gICAgICAgICAgICBjb25zdCBjb2xsaXNpb25Qb3NUb3AgPSBwb3NpdGlvbi50b3AgLSBkYXRhLmNvbGxpc2lvblBvc2l0aW9uLm1hcmdpblRvcDtcbiAgICAgICAgICAgIGNvbnN0IG92ZXJUb3AgPSBjb2xsaXNpb25Qb3NUb3AgLSBvZmZzZXRUb3A7XG4gICAgICAgICAgICBjb25zdCBvdmVyQm90dG9tID0gY29sbGlzaW9uUG9zVG9wICsgZGF0YS5jb2xsaXNpb25IZWlnaHQgLSBvdXRlckhlaWdodCAtIG9mZnNldFRvcDsgXG4gICAgICAgICAgICBjb25zdCBteU9mZnNldCA9IGRhdGEubXlbMV0gPT09ICd0b3AnID9cbiAgICAgICAgICAgICAgICAtZGF0YS5lbGVtSGVpZ2h0IDpcbiAgICAgICAgICAgICAgICBkYXRhLm15WzFdID09PSAnYm90dG9tJyA/XG4gICAgICAgICAgICAgICAgICAgIGRhdGEuZWxlbUhlaWdodCA6IDA7XG4gICAgICAgICAgICBjb25zdCBhdE9mZnNldCA9IGRhdGEuYXRbMV0gPT09ICd0b3AnID9cbiAgICAgICAgICAgICAgICBkYXRhLnRhcmdldEhlaWdodCA6XG4gICAgICAgICAgICAgICAgZGF0YS5hdFsxXSA9PT0gJ2JvdHRvbScgP1xuICAgICAgICAgICAgICAgICAgICAtZGF0YS50YXJnZXRIZWlnaHQgOiAwO1xuICAgICAgICAgICAgY29uc3Qgb2Zmc2V0ID0gLTIgKiBkYXRhLm9mZnNldFsxXTtcbiAgICAgICAgICAgIGxldCBuZXdPdmVyVG9wO1xuICAgICAgICAgICAgbGV0IG5ld092ZXJCb3R0b207XG5cbiAgICAgICAgICAgIGlmIChvdmVyVG9wIDwgMCkge1xuICAgICAgICAgICAgICAgIG5ld092ZXJCb3R0b20gPSBwb3NpdGlvbi50b3AgKyBteU9mZnNldCArIGF0T2Zmc2V0ICsgb2Zmc2V0ICsgZGF0YS5jb2xsaXNpb25IZWlnaHQgLSBvdXRlckhlaWdodCAtIHdpdGhpbk9mZnNldDtcbiAgICAgICAgICAgICAgICBpZiAobmV3T3ZlckJvdHRvbSA8IDAgfHwgbmV3T3ZlckJvdHRvbSA8IGFicyhvdmVyVG9wKSkge1xuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbi50b3AgKz0gbXlPZmZzZXQgKyBhdE9mZnNldCArIG9mZnNldDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2UgaWYgKG92ZXJCb3R0b20gPiAwKSB7XG4gICAgICAgICAgICAgICAgbmV3T3ZlclRvcCA9IHBvc2l0aW9uLnRvcCAtIGRhdGEuY29sbGlzaW9uUG9zaXRpb24ubWFyZ2luVG9wICsgbXlPZmZzZXQgKyBhdE9mZnNldCArIG9mZnNldCAtIG9mZnNldFRvcDtcbiAgICAgICAgICAgICAgICAvLyBiZWNhdXNlIHdpbmRvdyBjYW4gc2Nyb2xsIGRvd24sIHdoZW4gaXQgYmV5b25kIHRoZSB0b3AgYm9yZGVyLFxuICAgICAgICAgICAgICAgIC8vIHdlIGNhbiBub3Qgc2Nyb2xsIGl0IHRvIHZpZXcuIERvbid0IGZsaXAgaXQgaW4gdGhpcyBjYXNlXG4gICAgICAgICAgICAgICAgLy8gaWYgKG5ld092ZXJUb3AgPiAwIHx8IGFicyhuZXdPdmVyVG9wKSA8IG92ZXJCb3R0b20pIHtcbiAgICAgICAgICAgICAgICBpZiAobmV3T3ZlclRvcCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb24udG9wICs9IG15T2Zmc2V0ICsgYXRPZmZzZXQgKyBvZmZzZXQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSxcblxuICAgIGZsaXBmaXQ6IHtcbiAgICAgICAgbGVmdCguLi5hcmdzKSB7XG4gICAgICAgICAgICBydWxlcy5mbGlwLmxlZnQoLi4uYXJncyk7XG4gICAgICAgICAgICBydWxlcy5maXQubGVmdCguLi5hcmdzKTtcbiAgICAgICAgfSxcblxuICAgICAgICB0b3AoLi4uYXJncykge1xuICAgICAgICAgICAgcnVsZXMuZmxpcC50b3AoLi4uYXJncyk7XG4gICAgICAgICAgICBydWxlcy5maXQudG9wKC4uLmFyZ3MpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5cbmV4cG9ydCB7cG9zaXRpb259O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9tb3ZlV3JhcHBlci9wb3NpdGlvbi5qcyIsImltcG9ydCBJbnRhY3QgZnJvbSAnaW50YWN0JztcbmltcG9ydCB0ZW1wbGF0ZSBmcm9tICcuL2dyb3VwLnZkdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE9wdGlvbkdyb3VwIGV4dGVuZHMgSW50YWN0IHtcbiAgICBASW50YWN0LnRlbXBsYXRlKClcbiAgICBzdGF0aWMgdGVtcGxhdGUgPSB0ZW1wbGF0ZTtcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvc2VsZWN0L2dyb3VwLmpzIiwiXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihvYmosIF9WZHQsIGJsb2NrcywgJGNhbGxlZSkge1xuX1ZkdCB8fCAoX1ZkdCA9IFZkdCk7XG5vYmogfHwgKG9iaiA9IHt9KTtcbmJsb2NrcyB8fCAoYmxvY2tzID0ge30pO1xudmFyIGggPSBfVmR0Lm1pc3MuaCwgaGMgPSBfVmR0Lm1pc3MuaGMsIGh1ID0gX1ZkdC5taXNzLmh1LCB3aWRnZXRzID0gdGhpcyAmJiB0aGlzLndpZGdldHMgfHwge30sIF9ibG9ja3MgPSB7fSwgX19ibG9ja3MgPSB7fSxcbl9fdSA9IF9WZHQudXRpbHMsIGV4dGVuZCA9IF9fdS5leHRlbmQsIF9lID0gX191LmVycm9yLCBfY2xhc3NOYW1lID0gX191LmNsYXNzTmFtZSxcbl9fbyA9IF9fdS5PcHRpb25zLCBfZ2V0TW9kZWwgPSBfX28uZ2V0TW9kZWwsIF9zZXRNb2RlbCA9IF9fby5zZXRNb2RlbCxcbl9zZXRDaGVja2JveE1vZGVsID0gX191LnNldENoZWNrYm94TW9kZWwsIF9kZXRlY3RDaGVja2JveENoZWNrZWQgPSBfX3UuZGV0ZWN0Q2hlY2tib3hDaGVja2VkLFxuX3NldFNlbGVjdE1vZGVsID0gX191LnNldFNlbGVjdE1vZGVsLFxuc2VsZiA9IHRoaXMuZGF0YSwgJHRoaXMgPSB0aGlzLCBzY29wZSA9IG9iaiwgQW5pbWF0ZSA9IHNlbGYgJiYgc2VsZi5BbmltYXRlLCBwYXJlbnQgPSAoJGNhbGxlZSB8fCB7fSkuX3N1cGVyXG5jb25zdCB7Y2hpbGRyZW4sIGxhYmVsfSA9IHNlbGYuZ2V0KCk7XG5cbnJldHVybiBoKCdkaXYnLCBudWxsLCBbaCgnZGl2JywgbnVsbCwgZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW2xhYmVsIF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcyksICdrLWxhYmVsJyksICdcXG4gICAgJywgZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW2NoaWxkcmVuIF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcyksICdcXG4nXSwgJ2stZ3JvdXAnKVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvc2VsZWN0L2dyb3VwLnZkdCIsImltcG9ydCBJbnRhY3QgZnJvbSAnaW50YWN0JztcbmltcG9ydCB0ZW1wbGF0ZSBmcm9tICcuL2luZGV4LnZkdCc7XG5pbXBvcnQgJy4uLy4uL3N0eWxlcy9rcGMuc3R5bCc7XG5pbXBvcnQgJy4vaW5kZXguc3R5bCc7XG5pbXBvcnQgT3B0aW9uIGZyb20gJy4vb3B0aW9uJztcbmltcG9ydCBHcm91cCBmcm9tICcuL2dyb3VwJztcbmltcG9ydCB7c2VsZWN0SW5wdXQsIF8kfSBmcm9tICcuLi91dGlscyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNlbGVjdCBleHRlbmRzIEludGFjdCB7XG4gICAgQEludGFjdC50ZW1wbGF0ZSgpXG4gICAgc3RhdGljIHRlbXBsYXRlID0gdGVtcGxhdGU7XG5cbiAgICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgICAgICBtdWx0aXBsZTogQm9vbGVhbixcbiAgICAgICAgZGlzYWJsZWQ6IEJvb2xlYW4sXG4gICAgICAgIGNsZWFyYWJsZTogQm9vbGVhbixcbiAgICAgICAgZmlsdGVyYWJsZTogQm9vbGVhbixcbiAgICAgICAgZmx1aWQ6IEJvb2xlYW4sXG4gICAgICAgIGFsbG93VW5tYXRjaDogQm9vbGVhbixcbiAgICB9O1xuXG4gICAgZGVmYXVsdHMoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBkYXRhOiBbXSxcbiAgICAgICAgICAgIHZhbHVlOiAnJyxcbiAgICAgICAgICAgIG11bHRpcGxlOiBmYWxzZSwgLy/mlK/mjIHlpJrpgIlsaVxuICAgICAgICAgICAgZGlzYWJsZWQ6IGZhbHNlLFxuICAgICAgICAgICAgY2xlYXJhYmxlOiBmYWxzZSwgLy8g5piv5ZCm5Y+v5riF56m6IFxuICAgICAgICAgICAgZmlsdGVyYWJsZTogZmFsc2UsIC8vIOaQnOe0ouetm+mAiVxuICAgICAgICAgICAga2V5d29yZHM6IHVuZGVmaW5lZCxcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyOiB1bmRlZmluZWQsXG4gICAgICAgICAgICBzaXplOiAnZGVmYXVsdCcsXG4gICAgICAgICAgICBmbHVpZDogZmFsc2UsXG4gICAgICAgICAgICB3aWR0aDogdW5kZWZpbmVkLFxuICAgICAgICAgICAgYWxsb3dVbm1hdGNoOiBmYWxzZSxcblxuICAgICAgICAgICAgX3Nob3c6IGZhbHNlLFxuICAgICAgICB9XG4gICAgfVxuXG4gICAgX2luaXQoKSB7XG4gICAgICAgIHRoaXMub24oJyRjaGFuZ2VkOnZhbHVlJywgKCkgPT4ge1xuICAgICAgICAgICAgaWYgKHRoaXMuZ2V0KCdtdWx0aXBsZScpICYmIHRoaXMuZ2V0KCdfc2hvdycpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5yZWZzLm1lbnUucG9zaXRpb24oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgX29uQ2xlYXIoZSkge1xuICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICB0aGlzLnNldCgndmFsdWUnLCAnJyk7XG4gICAgfVxuXG4gICAgX29uU2VsZWN0KHZhbHVlKSB7XG4gICAgICAgIGlmICghdGhpcy5nZXQoJ211bHRpcGxlJykpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0KCd2YWx1ZScsIHZhbHVlLCB7YXN5bmM6IHRydWV9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGxldCB2YWx1ZXMgPSB0aGlzLmdldCgndmFsdWUnKTtcbiAgICAgICAgICAgIGlmICghQXJyYXkuaXNBcnJheSh2YWx1ZXMpKSB7XG4gICAgICAgICAgICAgICAgdmFsdWVzID0gW107XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHZhbHVlcyA9IHZhbHVlcy5zbGljZSgwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGluZGV4ID0gdmFsdWVzLmluZGV4T2YodmFsdWUpO1xuICAgICAgICAgICAgaWYgKH5pbmRleCkge1xuICAgICAgICAgICAgICAgIC8vIGlmIGZpbmQsIGRlbGV0ZSBpdFxuICAgICAgICAgICAgICAgIHZhbHVlcy5zcGxpY2UoaW5kZXgsIDEpOyBcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdmFsdWVzLnB1c2godmFsdWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5zZXQoJ3ZhbHVlJywgdmFsdWVzLCB7YXN5bmM6IHRydWV9KTtcbiAgICAgICAgICAgIHRoaXMuX2ZvY3VzSW5wdXQoKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9yZXNldFNlYXJjaCgpO1xuICAgIH1cblxuICAgIF9vblNlYXJjaChlKSB7XG4gICAgICAgIHRoaXMuc2V0KCdrZXl3b3JkcycsIGUudGFyZ2V0LnZhbHVlLnRyaW0oKSk7XG4gICAgICAgIC8vIGFsd2F5cyBzaG93IG1lbnUgb24gc2VhcmNoaW5nXG4gICAgICAgIHRoaXMucmVmcy5tZW51LnNob3coKTtcbiAgICAgICAgdGhpcy5yZWZzLm1lbnUuZm9jdXNJdGVtQnlJbmRleCgwKTtcbiAgICAgICAgLy8gdGhlIHBvc2l0aW9uIG1heSBiZSBmbGlwLCBhbmQgdGhlIHNlbGVjdCBpbnB1dCBoZWlnaHQgbXkgY2hhbmdlIGhlaWdodCB0b28sXG4gICAgICAgIC8vIHNvIHdlIHNob3VsZCByZXNldCB0aGUgcG9zaXRpb25cbiAgICAgICAgdGhpcy5yZWZzLm1lbnUucG9zaXRpb24oKTtcbiAgICB9XG5cbiAgICBfcmVzZXRTZWFyY2goKSB7XG4gICAgICAgIHRoaXMuc2V0KCdrZXl3b3JkcycsIHVuZGVmaW5lZCwge2FzeW5jOiB0cnVlfSk7XG4gICAgfVxuXG4gICAgX29uQ2hhbmdlU2hvdyhjLCB2YWx1ZSkge1xuICAgICAgICB0aGlzLnNldCgnX3Nob3cnLCB2YWx1ZSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQGJyaWVmIGxldCB0aGUgYmx1ciBtZXRob2QgY2FsbGVkIGFmdGVyIHNlbGVjdFxuICAgICAqIGlmIHdlIHNlbGVjdGVkIHRoZSBvcHRpb24sIHRoZW4gdGhlIGtleXdvcmRzIGhhcyBiZWVuIHNldCB0byB1bmRlZmluZFxuICAgICAqIGluIHRoaXMgY2FzZSwgd2UgZG8gbm90aGluZywgb3RoZXJ3aXNlIHdlIHJlc2V0IGl0XG4gICAgICovXG4gICAgX29uQmx1cigpIHtcbiAgICAgICAgY29uc3Qge2tleXdvcmRzLCBhbGxvd1VubWF0Y2h9ID0gdGhpcy5nZXQoKTtcbiAgICAgICAgaWYgKGFsbG93VW5tYXRjaCAmJiBrZXl3b3JkcyAhPSBudWxsKSB7XG4gICAgICAgICAgICB0aGlzLnNldCh7XG4gICAgICAgICAgICAgICAgdmFsdWU6IGtleXdvcmRzLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnRpbWVyID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICBpZiAodGhpcy5nZXQoJ2tleXdvcmRzJykgIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHRoaXMuX3Jlc2V0U2VhcmNoKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIDIwMCk7XG4gICAgfVxuXG4gICAgX3NlbGVjdElucHV0KGUpIHtcbiAgICAgICAgc2VsZWN0SW5wdXQoZS50YXJnZXQpOyBcbiAgICB9XG5cbiAgICBfb25Gb2N1cyhlKSB7XG4gICAgICAgIGNsZWFyVGltZW91dCh0aGlzLnRpbWVyKTtcbiAgICB9XG5cbiAgICBfb25Gb2N1c291dCgpIHtcbiAgICAgICAgdGhpcy5yZWZzLmRyb3Bkb3duLmhpZGUoKTtcbiAgICB9XG5cbiAgICBfZGVsZXRlKHZhbHVlLCBlKSB7XG4gICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgIGNvbnN0IHZhbHVlcyA9IHRoaXMuZ2V0KCd2YWx1ZScpLnNsaWNlKDApO1xuICAgICAgICBjb25zdCBpbmRleCA9IHZhbHVlcy5pbmRleE9mKHZhbHVlKTtcbiAgICAgICAgdmFsdWVzLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgIHRoaXMuc2V0KCd2YWx1ZScsIHZhbHVlcyk7XG4gICAgICAgIHRoaXMuX2ZvY3VzSW5wdXQoKTtcbiAgICB9XG5cbiAgICBfZm9jdXNJbnB1dCgpIHtcbiAgICAgICAgaWYgKHRoaXMuZ2V0KCdmaWx0ZXJhYmxlJykpIHtcbiAgICAgICAgICAgIHRoaXMucmVmcy5pbnB1dC5mb2N1cygpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgX3Bvc2l0aW9uKCkge1xuICAgICAgICBjb25zdCBtZW51RWxlbWVudCA9IHRoaXMucmVmcy5tZW51LnZkdC52Tm9kZS5jaGlsZHJlbi5lbGVtZW50O1xuICAgICAgICBjb25zdCB3aWR0aCA9IHRoaXMuZWxlbWVudC5vZmZzZXRXaWR0aDtcbiAgICAgICAgY29uc3QgbWVudVdpZHRoID0gbWVudUVsZW1lbnQub2Zmc2V0V2lkdGg7XG4gICAgICAgIGlmICh3aWR0aCA+IG1lbnVXaWR0aCkge1xuICAgICAgICAgICAgbWVudUVsZW1lbnQuc3R5bGUud2lkdGggPSBgJHt3aWR0aH1weGA7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBfb25LZXlwcmVzcyhlKSB7XG4gICAgICAgIGlmIChlLmtleUNvZGUgPT09IDEzKSB7XG4gICAgICAgICAgICB0aGlzLnJlZnMud3JhcHBlci5jbGljaygpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgX29uS2V5ZG93bihlKSB7XG4gICAgICAgIGlmIChlLmtleUNvZGUgPT09IDkpIHsgLy8gdGFiXG4gICAgICAgICAgICB0aGlzLnJlZnMuZHJvcGRvd24uaGlkZSgpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5leHBvcnQge1NlbGVjdCwgT3B0aW9uLCBHcm91cCBhcyBPcHRpb25Hcm91cH07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL3NlbGVjdC9pbmRleC5qcyIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG4gICAgaWYobW9kdWxlLmhvdCkge1xuICAgICAgLy8gMTUyNzc1NDQwOTAzNVxuICAgICAgdmFyIGNzc1JlbG9hZCA9IHJlcXVpcmUoXCIhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1ob3QtbG9hZGVyL2hvdE1vZHVsZVJlcGxhY2VtZW50LmpzXCIpKG1vZHVsZS5pZCwge1wiZmlsZU1hcFwiOlwie2ZpbGVOYW1lfVwifSk7XG4gICAgICBtb2R1bGUuaG90LmRpc3Bvc2UoY3NzUmVsb2FkKTtcbiAgICAgIG1vZHVsZS5ob3QuYWNjZXB0KHVuZGVmaW5lZCwgY3NzUmVsb2FkKTtcbiAgICB9XG4gIFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vY29tcG9uZW50cy9zZWxlY3QvaW5kZXguc3R5bFxuLy8gbW9kdWxlIGlkID0gLi9jb21wb25lbnRzL3NlbGVjdC9pbmRleC5zdHlsXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCBJbnB1dCBmcm9tICcuLi9pbnB1dCc7aW1wb3J0IERyb3Bkb3duLCB7RHJvcGRvd25JdGVtLCBEcm9wZG93bk1lbnV9IGZyb20gJy4uL2Ryb3Bkb3duJztpbXBvcnQge2lzU3RyaW5nT3JOdW1iZXIsIGdldFRleHRCeUNoaWxkcmVuLCBhZGRTdHlsZSwgXyR9IGZyb20gJy4uL3V0aWxzJztpbXBvcnQgT3B0aW9uIGZyb20gJy4vb3B0aW9uJztpbXBvcnQgT3B0aW9uR3JvdXAgZnJvbSAnLi9ncm91cCc7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihvYmosIF9WZHQsIGJsb2NrcywgJGNhbGxlZSkge1xuX1ZkdCB8fCAoX1ZkdCA9IFZkdCk7XG5vYmogfHwgKG9iaiA9IHt9KTtcbmJsb2NrcyB8fCAoYmxvY2tzID0ge30pO1xudmFyIGggPSBfVmR0Lm1pc3MuaCwgaGMgPSBfVmR0Lm1pc3MuaGMsIGh1ID0gX1ZkdC5taXNzLmh1LCB3aWRnZXRzID0gdGhpcyAmJiB0aGlzLndpZGdldHMgfHwge30sIF9ibG9ja3MgPSB7fSwgX19ibG9ja3MgPSB7fSxcbl9fdSA9IF9WZHQudXRpbHMsIGV4dGVuZCA9IF9fdS5leHRlbmQsIF9lID0gX191LmVycm9yLCBfY2xhc3NOYW1lID0gX191LmNsYXNzTmFtZSxcbl9fbyA9IF9fdS5PcHRpb25zLCBfZ2V0TW9kZWwgPSBfX28uZ2V0TW9kZWwsIF9zZXRNb2RlbCA9IF9fby5zZXRNb2RlbCxcbl9zZXRDaGVja2JveE1vZGVsID0gX191LnNldENoZWNrYm94TW9kZWwsIF9kZXRlY3RDaGVja2JveENoZWNrZWQgPSBfX3UuZGV0ZWN0Q2hlY2tib3hDaGVja2VkLFxuX3NldFNlbGVjdE1vZGVsID0gX191LnNldFNlbGVjdE1vZGVsLFxuc2VsZiA9IHRoaXMuZGF0YSwgJHRoaXMgPSB0aGlzLCBzY29wZSA9IG9iaiwgQW5pbWF0ZSA9IHNlbGYgJiYgc2VsZi5BbmltYXRlLCBwYXJlbnQgPSAoJGNhbGxlZSB8fCB7fSkuX3N1cGVyXG5cblxuXG5cblxuXG5jb25zdCB7XG4gICAgY2xhc3NOYW1lLCBjbGVhcmFibGUsIGRhdGEsIHZhbHVlLCBtdWx0aXBsZSxcbiAgICBkaXNhYmxlZCwgZmlsdGVyYWJsZSwga2V5d29yZHMsIF9zaG93LFxuICAgIHBsYWNlaG9sZGVyLCBzaXplLCBzdHlsZSwgbmFtZSwgY2hpbGRyZW4sXG4gICAgZmx1aWQsIHdpZHRoLCBhbGxvd1VubWF0Y2gsXG59ID0gc2VsZi5nZXQoKTtcblxuY29uc3QgX3BsYWNlaG9sZGVyID0gcGxhY2Vob2xkZXIgPT0gbnVsbCA/XG4gICAgKGFsbG93VW5tYXRjaCAmJiBmaWx0ZXJhYmxlKSA/IF8kKCfor7fovpPlhaXmiJbpgInmi6knKSA6IF8kKCfor7fpgInmi6knKSA6XG4gICAgcGxhY2Vob2xkZXI7XG5cbmNvbnN0IGNsYXNzTmFtZU9iaiA9IHtcbiAgICAnay1zZWxlY3QnOiB0cnVlLFxuICAgIFtjbGFzc05hbWVdOiBjbGFzc05hbWUsXG4gICAgJ2stZGlzYWJsZWQnOiBkaXNhYmxlZCxcbiAgICAnay1zaG93JzogX3Nob3csXG4gICAgJ2stY2xlYXJhYmxlJzogY2xlYXJhYmxlLFxuICAgIFtgay0ke3NpemV9YF06IHNpemUgIT09ICdkZWZhdWx0JyxcbiAgICAnay1mbHVpZCc6IGZsdWlkLFxufTtcblxubGV0IGhhc1ZhbHVlID0gdmFsdWUgIT0gbnVsbCAmJiAoIW11bHRpcGxlICYmIHZhbHVlICE9PSAnJyB8fCBtdWx0aXBsZSAmJiB2YWx1ZS5sZW5ndGgpO1xuY29uc3QgaXNHcm91cCA9IEFycmF5LmlzQXJyYXkoc2VsZi5nZXQoJ2RhdGEuMC5kYXRhJykpO1xuXG5sZXQgbGFiZWwgPSBpc1N0cmluZ09yTnVtYmVyKHZhbHVlKSA/IHZhbHVlIDogbnVsbDtcbmxldCBsYWJlbHMgPSBbXTtcblxuY29uc3QgaGFuZGxlUHJvcHMgPSBwcm9wcyA9PiB7XG4gICAgbGV0IGFjdGl2ZSA9IGZhbHNlO1xuICAgIGxldCB2YWxpZCA9IGZhbHNlO1xuXG4gICAgaWYgKCFtdWx0aXBsZSkge1xuICAgICAgICBpZiAocHJvcHMudmFsdWUgPT09IHZhbHVlKSB7XG4gICAgICAgICAgICAvLyBzZXQgbGFiZWxcbiAgICAgICAgICAgIGxhYmVsID0gcHJvcHMubGFiZWw7XG4gICAgICAgICAgICBhY3RpdmUgPSB0cnVlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICAgIGNvbnN0IGluZGV4ID0gdmFsdWUuaW5kZXhPZihwcm9wcy52YWx1ZSk7XG4gICAgICAgIGlmICh+aW5kZXgpIHtcbiAgICAgICAgICAgIC8vIGtlZXAgb3JkZXIgY29uc2lzdGVudFxuICAgICAgICAgICAgbGFiZWxzW2luZGV4XSA9IHByb3BzLmxhYmVsO1xuICAgICAgICAgICAgYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgbGV0IHRtcDtcbiAgICBpZiAoXG4gICAgICAgICFmaWx0ZXJhYmxlICYmIFxuICAgICAgICBwcm9wcy5sYWJlbCB8fCBcbiAgICAgICAga2V5d29yZHMgPT0gbnVsbCB8fCBcbiAgICAgICAgfnByb3BzLmxhYmVsLnRvTG93ZXJDYXNlKCkuaW5kZXhPZigodG1wID0ga2V5d29yZHMudG9Mb3dlckNhc2UoKSkpIHx8IFxuICAgICAgICAoXG4gICAgICAgICAgICBpc1N0cmluZ09yTnVtYmVyKHByb3BzLnZhbHVlKSAmJiBcbiAgICAgICAgICAgIH5TdHJpbmcocHJvcHMudmFsdWUpLnRvTG93ZXJDYXNlKCkuaW5kZXhPZih0bXApXG4gICAgICAgIClcbiAgICApIHtcbiAgICAgICAgdmFsaWQgPSB0cnVlOyBcbiAgICB9XG5cbiAgICByZXR1cm4ge2FjdGl2ZSwgdmFsaWR9O1xufTtcblxuY29uc3QgT3B0aW9ucyA9IHByb3BzID0+IHtcbiAgICBjb25zdCBkYXRhID0gcHJvcHMuZGF0YTtcbiAgICBjb25zdCByZXQgPSBbXTtcbiAgICBkYXRhLmZvckVhY2goKGl0ZW0sIGluZGV4KSA9PiB7XG4gICAgICAgIC8vIGRlcHJlY2F0ZSB0ZXh0LCB1c2UgbGFiZWwgaW5zdGVhZCBvZlxuICAgICAgICBpZiAoaXRlbS50ZXh0KSBpdGVtLmxhYmVsID0gaXRlbS50ZXh0O1xuICAgICAgICBcbiAgICAgICAgY29uc3Qge3ZhbGlkLCBhY3RpdmV9ID0gaGFuZGxlUHJvcHMoaXRlbSk7XG4gICAgICAgIGlmICh2YWxpZCkge1xuICAgICAgICAgICAgcmV0LnB1c2goXG4gICAgICAgICAgICAgICAgaChEcm9wZG93bkl0ZW0sIHsnZXYtc2VsZWN0JzogZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW3NlbGYuX29uU2VsZWN0LmJpbmQoc2VsZiwgaXRlbS52YWx1ZSkgXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKSwgJ2Rpc2FibGVkJzogZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW2l0ZW0uZGlzYWJsZWQgXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKSwgJ2NsYXNzTmFtZSc6IF9jbGFzc05hbWUoZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW3snay1hY3RpdmUnOiBhY3RpdmV9IF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcykpLCAnaGlkZU9uU2VsZWN0JzogZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gWyFtdWx0aXBsZSBdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpLCAnY2hpbGRyZW4nOiBmdW5jdGlvbigpIHt0cnkge3JldHVybiBbaXRlbS50ZW1wbGF0ZSA/IGl0ZW0udGVtcGxhdGUoaXRlbSwgaW5kZXgpIDogaXRlbS5sYWJlbCBdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpLCAnX2NvbnRleHQnOiAkdGhpc30pXG4gICAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gcmV0O1xufVxuXG5jb25zdCBPcHRpb25zVk5vZGVzID0gKHtjaGlsZHJlbn0pID0+IHtcbiAgICByZXR1cm4gX191Lm1hcChjaGlsZHJlbiA/IChBcnJheS5pc0FycmF5KGNoaWxkcmVuKSA/IGNoaWxkcmVuIDogW2NoaWxkcmVuXSkgOiBjaGlsZHJlbiwgdk5vZGUgPT4ge1xuICAgICAgICBpZiAodk5vZGUudGFnID09PSBPcHRpb24pIHtcbiAgICAgICAgICAgIGxldCBwcm9wcyA9IHZOb2RlLnByb3BzO1xuICAgICAgICAgICAgcHJvcHMgPSB7XG4gICAgICAgICAgICAgICAgLi4ucHJvcHMsIFxuICAgICAgICAgICAgICAgICdldi1zZWxlY3QnOiBzZWxmLl9vblNlbGVjdC5iaW5kKHNlbGYsIHByb3BzLnZhbHVlKSxcbiAgICAgICAgICAgICAgICBoaWRlT25TZWxlY3Q6ICFtdWx0aXBsZSxcbiAgICAgICAgICAgICAgICBsYWJlbDogcHJvcHMubGFiZWwgfHwgZ2V0VGV4dEJ5Q2hpbGRyZW4ocHJvcHMuY2hpbGRyZW4pLFxuICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBwcm9wcy5jaGlsZHJlbiB8fCBwcm9wcy5sYWJlbCBcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBjb25zdCB7YWN0aXZlLCB2YWxpZH0gPSBoYW5kbGVQcm9wcyhwcm9wcyk7XG4gICAgICAgICAgICBpZiAoIXZhbGlkKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGhjKCcnKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcHJvcHMuY2xhc3NOYW1lID0gX2NsYXNzTmFtZSh7XG4gICAgICAgICAgICAgICAgICAgIFtwcm9wcy5jbGFzc05hbWVdOiBwcm9wcy5jbGFzc05hbWUsXG4gICAgICAgICAgICAgICAgICAgICdrLWFjdGl2ZSc6IGFjdGl2ZSxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gcmV0dXJuIHRoZSBjbG9uZWQgdk5vZGVcbiAgICAgICAgICAgIHJldHVybiBoKE9wdGlvbiwgcHJvcHMpO1xuICAgICAgICB9IGVsc2UgaWYgKHZOb2RlLnRhZyA9PT0gT3B0aW9uR3JvdXApIHtcbiAgICAgICAgICAgIGxldCBwcm9wcyA9IHZOb2RlLnByb3BzO1xuICAgICAgICAgICAgcHJvcHMgPSB7XG4gICAgICAgICAgICAgICAgLi4ucHJvcHMsXG4gICAgICAgICAgICAgICAgY2hpbGRyZW46IGgoT3B0aW9uc1ZOb2RlcywgeydjaGlsZHJlbic6IGZ1bmN0aW9uKCkge3RyeSB7cmV0dXJuIFtwcm9wcy5jaGlsZHJlbiBdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpLCAnX2NvbnRleHQnOiAkdGhpc30pXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgcmV0dXJuIGgoT3B0aW9uR3JvdXAsIHByb3BzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB2Tm9kZTtcbiAgICB9KTsgXG59IFxuXG5jb25zdCBNZW51ID0gKFxuICAgIGgoRHJvcGRvd25NZW51LCB7J2V2LSRjaGFuZ2VkOnNob3cnOiBmdW5jdGlvbigpIHt0cnkge3JldHVybiBbc2VsZi5fcG9zaXRpb24gXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKSwgJ2NsYXNzTmFtZSc6ICdrLXNlbGVjdC1kcm9wZG93bicsICdldi0kY2hhbmdlOnNob3cnOiBmdW5jdGlvbigpIHt0cnkge3JldHVybiBbc2VsZi5fb25DaGFuZ2VTaG93IF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcyksICdjaGlsZHJlbic6IFtmdW5jdGlvbigpIHt0cnkge3JldHVybiBbIWlzR3JvdXAgXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKSA/IGgoT3B0aW9ucywgeydkYXRhJzogZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW2RhdGEgXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKSwgJ2NoaWxkcmVuJzogbnVsbCwgJ19jb250ZXh0JzogJHRoaXN9KSA6IF9WZHQudXRpbHMubWFwKGZ1bmN0aW9uKCkge3RyeSB7cmV0dXJuIFtkYXRhIF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcyksIGZ1bmN0aW9uKHZhbHVlLCBrZXkpIHtcbnJldHVybiBoKE9wdGlvbkdyb3VwLCB7J2xhYmVsJzogZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW3ZhbHVlLmxhYmVsIF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcyksICdjaGlsZHJlbic6IGgoT3B0aW9ucywgeydkYXRhJzogZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW3ZhbHVlLmRhdGEgXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKSwgJ2NoaWxkcmVuJzogbnVsbCwgJ19jb250ZXh0JzogJHRoaXN9KSwgJ19jb250ZXh0JzogJHRoaXN9KTtcbn0sIHRoaXMpLCBoKE9wdGlvbnNWTm9kZXMsIHsnY2hpbGRyZW4nOiBmdW5jdGlvbigpIHt0cnkge3JldHVybiBbY2hpbGRyZW4gXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKSwgJ19jb250ZXh0JzogJHRoaXN9KV0sICdfY29udGV4dCc6ICR0aGlzfSwgbnVsbCwgbnVsbCwgbnVsbCwgZnVuY3Rpb24oaSkge3dpZGdldHNbJ21lbnUnXSA9IGl9KVxuKTtcblxuLy8gaWYgdGhlIHZhbHVlIGlzIG5vdCBpbiBvcHRpb25zLCB0aGVuIHNldCBoYXNWYWx1ZSB0byBmYWxzZVxuaWYgKGhhc1ZhbHVlICYmICFsYWJlbCAmJiAhbGFiZWxzLmxlbmd0aCkge1xuICAgIGhhc1ZhbHVlID0gZmFsc2U7XG59XG5cbnJldHVybiBoKCdkaXYnLCB7J3N0eWxlJzogZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW3dpZHRoICE9IG51bGwgPyBhZGRTdHlsZShzdHlsZSwge3dpZHRoOiBgJHt3aWR0aH1weGB9KSA6IHN0eWxlIF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcyksICd0YWJpbmRleCc6IGZ1bmN0aW9uKCkge3RyeSB7cmV0dXJuIFtkaXNhYmxlZCA/IFwiLTFcIiA6IFwiMFwiIF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcyksICdldi1rZXlwcmVzcyc6IGZ1bmN0aW9uKCkge3RyeSB7cmV0dXJuIFtzZWxmLl9vbktleXByZXNzIF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcyksICdldi1rZXlkb3duJzogZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW3NlbGYuX29uS2V5ZG93biBdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpfSwgaChEcm9wZG93biwgeydwb3NpdGlvbic6IGZ1bmN0aW9uKCkge3RyeSB7cmV0dXJuIFt7bXk6ICdsZWZ0IHRvcCcsIGF0OiAnbGVmdCBib3R0b20nfSBdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpLCAndHJpZ2dlcic6ICdjbGljaycsICdkaXNhYmxlZCc6IGZ1bmN0aW9uKCkge3RyeSB7cmV0dXJuIFtkaXNhYmxlZCBdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpLCAnY2hpbGRyZW4nOiBbaCgnZGl2Jywgeydldi1jbGljayc6IGZ1bmN0aW9uKCkge3RyeSB7cmV0dXJuIFtzZWxmLl9mb2N1c0lucHV0IF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcyksICd0YWJpbmRleCc6ICctMSd9LCBbaCgnaW5wdXQnLCB7J3R5cGUnOiAnaGlkZGVuJywgJ3ZhbHVlJzogZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW3ZhbHVlIF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcyksICduYW1lJzogZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW25hbWUgXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKX0pLCBmdW5jdGlvbigpIHt0cnkge3JldHVybiBbIW11bHRpcGxlICYmIGZpbHRlcmFibGUgXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKSA/IGgoSW5wdXQsIHsndmFsdWUnOiBmdW5jdGlvbigpIHt0cnkge3JldHVybiBba2V5d29yZHMgPT0gbnVsbCA/IGxhYmVsIDoga2V5d29yZHMgXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKSwgJ2V2LWlucHV0JzogZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW3NlbGYuX29uU2VhcmNoIF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcyksICdldi1ibHVyJzogZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW3NlbGYuX29uQmx1ciBdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpLCAnZXYtZm9jdXMnOiBmdW5jdGlvbigpIHt0cnkge3JldHVybiBbc2VsZi5fc2VsZWN0SW5wdXQgXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKSwgJ2Rpc2FibGVkJzogZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW2Rpc2FibGVkIF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcyksICdwbGFjZWhvbGRlcic6IGZ1bmN0aW9uKCkge3RyeSB7cmV0dXJuIFtfcGxhY2Vob2xkZXIgXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKSwgJ3NpemUnOiBmdW5jdGlvbigpIHt0cnkge3JldHVybiBbc2l6ZSBdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpLCAnZmx1aWQnOiBmdW5jdGlvbigpIHt0cnkge3JldHVybiBbdHJ1ZV1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcyksICdjaGlsZHJlbic6IG51bGwsICdfY29udGV4dCc6ICR0aGlzfSwgbnVsbCwgbnVsbCwgbnVsbCwgZnVuY3Rpb24oaSkge3dpZGdldHNbJ2lucHV0J10gPSBpfSkgOiBmdW5jdGlvbigpIHt0cnkge3JldHVybiBbIWZpbHRlcmFibGUgJiYgIWhhc1ZhbHVlIF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcykgPyBoKCdzcGFuJywgbnVsbCwgZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW19wbGFjZWhvbGRlciBdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpLCAnay1wbGFjZWhvbGRlciBjLWVsbGlwc2lzJykgOiBmdW5jdGlvbigpIHt0cnkge3JldHVybiBbIW11bHRpcGxlIF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcykgPyBoKCdzcGFuJywgbnVsbCwgZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW2xhYmVsIF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcyksICdrLXZhbHVlIGMtZWxsaXBzaXMnKSA6IGgoQW5pbWF0ZSwgeydhOnRhZyc6ICdzcGFuJywgJ2E6ZGlzYWJsZWQnOiBmdW5jdGlvbigpIHt0cnkge3JldHVybiBbdHJ1ZV1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcyksICdjbGFzc05hbWUnOiAnay12YWx1ZXMnLCAnY2hpbGRyZW4nOiBbX1ZkdC51dGlscy5tYXAoZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW2xhYmVscyBdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpLCBmdW5jdGlvbihpdGVtLCBpbmRleCkge1xucmV0dXJuIGgoQW5pbWF0ZSwgeydhOnRhZyc6ICdzcGFuJywgJ2NsYXNzTmFtZSc6ICdrLXRhZycsICdrZXknOiBmdW5jdGlvbigpIHt0cnkge3JldHVybiBbdmFsdWVbaW5kZXhdIF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcyksICdhOnRyYW5zaXRpb24nOiAnZmFkZScsICdjaGlsZHJlbic6IFtoKCdzcGFuJywgbnVsbCwgZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW2l0ZW0gXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKSwgJ2stdGV4dCcpLCBoKCdpJywgeydldi1jbGljayc6IGZ1bmN0aW9uKCkge3RyeSB7cmV0dXJuIFtzZWxmLl9kZWxldGUuYmluZChzZWxmLCB2YWx1ZVtpbmRleF0pIF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcyl9LCBudWxsLCAnay1pY29uIGlvbi1pb3MtY2xvc2UtZW1wdHknKV0sICdfY29udGV4dCc6ICR0aGlzfSk7XG59LCB0aGlzKSwgZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW2ZpbHRlcmFibGUgXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKSA/IGgoSW5wdXQsIHsndmFsdWUnOiBmdW5jdGlvbigpIHt0cnkge3JldHVybiBba2V5d29yZHMgXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKSwgJ2V2LWlucHV0JzogZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW3NlbGYuX29uU2VhcmNoIF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcyksICdldi1ibHVyJzogZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW3NlbGYuX29uQmx1ciBdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpLCAnZXYtZm9jdXMnOiBmdW5jdGlvbigpIHt0cnkge3JldHVybiBbc2VsZi5fb25Gb2N1cyBdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpLCAnZGlzYWJsZWQnOiBmdW5jdGlvbigpIHt0cnkge3JldHVybiBbZGlzYWJsZWQgXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKSwgJ3BsYWNlaG9sZGVyJzogZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gWyFoYXNWYWx1ZSA/IF9wbGFjZWhvbGRlciA6ICcnIF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcyksICdhdXRvV2lkdGgnOiBmdW5jdGlvbigpIHt0cnkge3JldHVybiBbdHJ1ZV1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcyksICdzaXplJzogZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW3NpemUgXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKSwgJ2NoaWxkcmVuJzogbnVsbCwgJ19jb250ZXh0JzogJHRoaXN9LCBudWxsLCBudWxsLCBudWxsLCBmdW5jdGlvbihpKSB7d2lkZ2V0c1snaW5wdXQnXSA9IGl9KSA6IHVuZGVmaW5lZF0sICdfY29udGV4dCc6ICR0aGlzfSksIGgoJ3NwYW4nLCBudWxsLCBbZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW2NsZWFyYWJsZSBdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpID8gaCgnaScsIHsnZXYtY2xpY2snOiBmdW5jdGlvbigpIHt0cnkge3JldHVybiBbc2VsZi5fb25DbGVhciBdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpfSwgbnVsbCwgX2NsYXNzTmFtZShmdW5jdGlvbigpIHt0cnkge3JldHVybiBbe1wiay1jbGVhciBpb24taW9zLWNsb3NlXCI6IHRydWUsIFwiay1zaG93XCI6IGhhc1ZhbHVlfSBdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpKSkgOiB1bmRlZmluZWQsIGgoJ2knLCBudWxsLCBudWxsLCAnay1hcnJvdyBpb24tYXJyb3ctZG93bi1iJyldLCAnay1zdWZmaXgnKV0sICdrLXdyYXBwZXInLCBudWxsLCBmdW5jdGlvbihpKSB7d2lkZ2V0c1snd3JhcHBlciddID0gaX0pLCBmdW5jdGlvbigpIHt0cnkge3JldHVybiBbTWVudSBcbiAgICBdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpXSwgJ19jb250ZXh0JzogJHRoaXN9LCBudWxsLCBudWxsLCBudWxsLCBmdW5jdGlvbihpKSB7d2lkZ2V0c1snZHJvcGRvd24nXSA9IGl9KSwgX2NsYXNzTmFtZShmdW5jdGlvbigpIHt0cnkge3JldHVybiBbey4uLmNsYXNzTmFtZU9iaiwgJ2stYWN0aXZlJzogaGFzVmFsdWV9IF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcykpKVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvc2VsZWN0L2luZGV4LnZkdCIsImltcG9ydCBJbnRhY3QgZnJvbSAnaW50YWN0JztcbmltcG9ydCB7RHJvcGRvd25JdGVtfSBmcm9tICcuLi9kcm9wZG93bic7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE9wdGlvbiBleHRlbmRzIERyb3Bkb3duSXRlbSB7XG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvc2VsZWN0L29wdGlvbi5qcyIsImltcG9ydCBJbnRhY3QgZnJvbSAnaW50YWN0JztcbmltcG9ydCB0ZW1wbGF0ZSBmcm9tICcuL2xheW91dC52ZHQnO1xuaW1wb3J0ICcuL2xheW91dC5zdHlsJztcblxubGV0IHRoZW1lO1xuaWYgKHByb2Nlc3MuYnJvd3Nlcikge1xuICAgIHRoZW1lID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3RoZW1lJykgfHwgJ2twYyc7XG5cbiAgICBmdW5jdGlvbiBjaGFuZ2VUaGVtZShuZXdUaGVtZSwgb2xkVGhlbWUpIHtcbiAgICAgICAgY29uc3QgbGluayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2xpbmtbcmVsPXN0eWxlc2hlZXRdJyk7XG4gICAgICAgIGxpbmsuaHJlZiA9IGxpbmsuaHJlZi5yZXBsYWNlKGB0aGVtZS0ke29sZFRoZW1lfWAsIGB0aGVtZS0ke25ld1RoZW1lfWApO1xuICAgICAgICB0aGVtZSA9IG5ld1RoZW1lO1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndGhlbWUnLCBuZXdUaGVtZSk7XG4gICAgfVxuICAgIGlmICh0aGVtZSAhPT0gJ2twYycpIHtcbiAgICAgICAgY2hhbmdlVGhlbWUodGhlbWUsICdrcGMnKTtcbiAgICB9XG59IGVsc2Uge1xuICAgIHRoZW1lID0gJ2twYyc7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgSW50YWN0IHtcbiAgICBASW50YWN0LnRlbXBsYXRlKClcbiAgICBzdGF0aWMgdGVtcGxhdGUgPSB0ZW1wbGF0ZTtcblxuICAgIGRlZmF1bHRzKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdGhlbWU6IHRoZW1lLFxuICAgICAgICB9O1xuICAgIH1cblxuICAgIF9pbml0KCkge1xuICAgICAgICB0aGlzLm9uKCckY2hhbmdlOnRoZW1lJywgKGMsIHYsIG8pID0+IHtcbiAgICAgICAgICAgIGNoYW5nZVRoZW1lKHYsIG8pO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBfbW91bnQoKSB7XG4gICAgICAgIHRoaXMuYm9yZGVyID0gdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ib3JkZXInKTtcbiAgICAgICAgdGhpcy5fdXBkYXRlQm9yZGVyKCk7XG4gICAgfVxuXG4gICAgX3VwZGF0ZUJvcmRlcigpIHtcbiAgICAgICAgY29uc3QgbmF2ID0gdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hY3RpdmUnKTtcbiAgICAgICAgbGV0IHdpZHRoID0gMDtcbiAgICAgICAgbGV0IGxlZnQgPSAwO1xuICAgICAgICBpZiAobmF2KSB7XG4gICAgICAgICAgICBsZWZ0ID0gbmF2Lm9mZnNldExlZnQ7XG4gICAgICAgICAgICB3aWR0aCA9IG5hdi5vZmZzZXRXaWR0aDtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmJvcmRlci5jbGFzc0xpc3QuYWRkKCd0cmFuc2l0aW9uJyk7XG4gICAgICAgIHRoaXMuYm9yZGVyLnN0eWxlLndpZHRoID0gYCR7d2lkdGh9cHhgO1xuICAgICAgICB0aGlzLmJvcmRlci5zdHlsZS5sZWZ0ID0gYCR7bGVmdH1weGA7XG4gICAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc2l0ZS9zcmMvcGFnZXMvbGF5b3V0LmpzIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cbiAgICBpZihtb2R1bGUuaG90KSB7XG4gICAgICAvLyAxNTI3NzU0NDA2OTY5XG4gICAgICB2YXIgY3NzUmVsb2FkID0gcmVxdWlyZShcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWhvdC1sb2FkZXIvaG90TW9kdWxlUmVwbGFjZW1lbnQuanNcIikobW9kdWxlLmlkLCB7XCJmaWxlTWFwXCI6XCJ7ZmlsZU5hbWV9XCJ9KTtcbiAgICAgIG1vZHVsZS5ob3QuZGlzcG9zZShjc3NSZWxvYWQpO1xuICAgICAgbW9kdWxlLmhvdC5hY2NlcHQodW5kZWZpbmVkLCBjc3NSZWxvYWQpO1xuICAgIH1cbiAgXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zaXRlL3NyYy9wYWdlcy9sYXlvdXQuc3R5bFxuLy8gbW9kdWxlIGlkID0gLi9zaXRlL3NyYy9wYWdlcy9sYXlvdXQuc3R5bFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgTGluayBmcm9tICdrcGMvY29tcG9uZW50cy9saW5rJztpbXBvcnQge1NlbGVjdCwgT3B0aW9ufSBmcm9tICdrcGMvY29tcG9uZW50cy9zZWxlY3QnO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24ob2JqLCBfVmR0LCBibG9ja3MsICRjYWxsZWUpIHtcbl9WZHQgfHwgKF9WZHQgPSBWZHQpO1xub2JqIHx8IChvYmogPSB7fSk7XG5ibG9ja3MgfHwgKGJsb2NrcyA9IHt9KTtcbnZhciBoID0gX1ZkdC5taXNzLmgsIGhjID0gX1ZkdC5taXNzLmhjLCBodSA9IF9WZHQubWlzcy5odSwgd2lkZ2V0cyA9IHRoaXMgJiYgdGhpcy53aWRnZXRzIHx8IHt9LCBfYmxvY2tzID0ge30sIF9fYmxvY2tzID0ge30sXG5fX3UgPSBfVmR0LnV0aWxzLCBleHRlbmQgPSBfX3UuZXh0ZW5kLCBfZSA9IF9fdS5lcnJvciwgX2NsYXNzTmFtZSA9IF9fdS5jbGFzc05hbWUsXG5fX28gPSBfX3UuT3B0aW9ucywgX2dldE1vZGVsID0gX19vLmdldE1vZGVsLCBfc2V0TW9kZWwgPSBfX28uc2V0TW9kZWwsXG5fc2V0Q2hlY2tib3hNb2RlbCA9IF9fdS5zZXRDaGVja2JveE1vZGVsLCBfZGV0ZWN0Q2hlY2tib3hDaGVja2VkID0gX191LmRldGVjdENoZWNrYm94Q2hlY2tlZCxcbl9zZXRTZWxlY3RNb2RlbCA9IF9fdS5zZXRTZWxlY3RNb2RlbCxcbnNlbGYgPSB0aGlzLmRhdGEsICR0aGlzID0gdGhpcywgc2NvcGUgPSBvYmosIEFuaW1hdGUgPSBzZWxmICYmIHNlbGYuQW5pbWF0ZSwgcGFyZW50ID0gKCRjYWxsZWUgfHwge30pLl9zdXBlclxuXG5cblxuY29uc3QgbmF2ID0gW1xuICAgIHtcbiAgICAgICAgdGl0bGU6ICfmlZnnqIsnLFxuICAgICAgICBocmVmOiAnL2RvY3MvZ2V0dGluZy1zdGFydGVkLycsXG4gICAgICAgIGluZGV4OiAnZG9jdW1lbnQnLFxuICAgIH0sXG4gICAgLyogeyAqL1xuICAgICAgICAvKiB0aXRsZTogJ+iuvuiuoeivreiogCcsICovXG4gICAgICAgIC8qIGhyZWY6ICcvZGVzaWduJywgKi9cbiAgICAvKiB9LCAqL1xuICAgIC8qIHsgKi9cbiAgICAgICAgLyogdGl0bGU6ICdCbG9nJywgKi9cbiAgICAgICAgLyogaHJlZjogJy9kb2NzL2Jsb2cvdGVzdC8nLCAqL1xuICAgICAgICAvKiBpbmRleDogJ2Jsb2cnLCAqL1xuICAgIC8qIH0sICovXG4gICAgLyogeyAqL1xuICAgICAgICAvKiB0aXRsZTogJ0FQSScsICovXG4gICAgICAgIC8qIGhyZWY6ICdhcGknICovXG4gICAgLyogfSwgKi9cbiAgICAvLyB7XG4gICAgICAgIC8vIHRpdGxlOiAn56S65L6LJyxcbiAgICAgICAgLy8gaHJlZjogJ2V4YW1wbGVzJ1xuICAgIC8vIH1cbl07XG5cbnJldHVybiBoKCdkaXYnLCBudWxsLCBbaCgnZGl2JywgbnVsbCwgaCgnaGVhZGVyJywgbnVsbCwgKF9ibG9ja3NbXCJoZWFkZXJcIl0gPSBmdW5jdGlvbihwYXJlbnQpIHtyZXR1cm4gW2goTGluaywgeydjbGFzc05hbWUnOiAnbG9nbycsICdocmVmJzogJy8nLCAnY2hpbGRyZW4nOiAnS1BDJywgJ19jb250ZXh0JzogJHRoaXN9KSwgaCgnZGl2JywgbnVsbCwgW2goJ25hdicsIG51bGwsIFtfVmR0LnV0aWxzLm1hcChmdW5jdGlvbigpIHt0cnkge3JldHVybiBbbmF2IF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcyksIGZ1bmN0aW9uKHZhbHVlLCBrZXkpIHtcbnJldHVybiBoKExpbmssIHsnY2xhc3NOYW1lJzogX2NsYXNzTmFtZShmdW5jdGlvbigpIHt0cnkge3JldHVybiBbe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY3RpdmU6IHZhbHVlLmluZGV4ID09PSBzY29wZS5uYXZJbmRleFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKSksICdocmVmJzogZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW2Ake3Byb2Nlc3MuVVJMX1BSRUZJWH0ke3ZhbHVlLmhyZWZ9YCBdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpLCAnY2hpbGRyZW4nOiBmdW5jdGlvbigpIHt0cnkge3JldHVybiBbdmFsdWUudGl0bGUgXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKSwgJ19jb250ZXh0JzogJHRoaXN9KTtcbn0sIHRoaXMpLCBoKCdkaXYnLCBudWxsLCBudWxsLCAnYm9yZGVyJyldKSwgaCgnc3BhbicsIG51bGwsICfliIfmjaLkuLvpopjvvJonLCAnbGFiZWwnKSwgaChTZWxlY3QsIHsndi1tb2RlbCc6ICd0aGVtZScsICd3aWR0aCc6ICcxMDAnLCAnY2hpbGRyZW4nOiBbaChPcHRpb24sIHsndmFsdWUnOiAna3BjJywgJ2NoaWxkcmVuJzogJ2RlZmF1bHQnLCAnX2NvbnRleHQnOiAkdGhpc30pLCBoKE9wdGlvbiwgeyd2YWx1ZSc6ICdrc3l1bicsICdjaGlsZHJlbic6ICdrc3l1bicsICdfY29udGV4dCc6ICR0aGlzfSldLCAnX2NvbnRleHQnOiAkdGhpcywgdmFsdWU6IF9nZXRNb2RlbChzZWxmLCAndGhlbWUnKSwgJ2V2LSRjaGFuZ2U6dmFsdWUnOiBmdW5jdGlvbihfX2MsIF9fbikgeyBfc2V0TW9kZWwoc2VsZiwgJ3RoZW1lJywgX19uLCAkdGhpcykgfX0pXSwgJ3JpZ2h0JyldO30pICYmIChfX2Jsb2Nrc1tcImhlYWRlclwiXSA9IGZ1bmN0aW9uKHBhcmVudCkge1xudmFyIHNlbGYgPSB0aGlzO1xucmV0dXJuIGJsb2Nrc1tcImhlYWRlclwiXSA/IGJsb2Nrc1tcImhlYWRlclwiXS5jYWxsKHRoaXMsIGZ1bmN0aW9uKCkge1xucmV0dXJuIF9ibG9ja3NbXCJoZWFkZXJcIl0uY2FsbChzZWxmLCBwYXJlbnQpO1xufSkgOiBfYmxvY2tzW1wiaGVhZGVyXCJdLmNhbGwodGhpcywgcGFyZW50KTtcbn0pICYmIF9fYmxvY2tzW1wiaGVhZGVyXCJdLmNhbGwodGhpcykpLCAnaGVhZGVyLXdyYXBwZXInKSwgaCgnZGl2JywgbnVsbCwgKF9ibG9ja3NbXCJjb250ZW50XCJdID0gZnVuY3Rpb24ocGFyZW50KSB7cmV0dXJuIG51bGw7fSkgJiYgKF9fYmxvY2tzW1wiY29udGVudFwiXSA9IGZ1bmN0aW9uKHBhcmVudCkge1xudmFyIHNlbGYgPSB0aGlzO1xucmV0dXJuIGJsb2Nrc1tcImNvbnRlbnRcIl0gPyBibG9ja3NbXCJjb250ZW50XCJdLmNhbGwodGhpcywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gX2Jsb2Nrc1tcImNvbnRlbnRcIl0uY2FsbChzZWxmLCBwYXJlbnQpO1xufSkgOiBfYmxvY2tzW1wiY29udGVudFwiXS5jYWxsKHRoaXMsIHBhcmVudCk7XG59KSAmJiBfX2Jsb2Nrc1tcImNvbnRlbnRcIl0uY2FsbCh0aGlzKSwgJ2NvbnRlbnQtd3JhcHBlcicsIG51bGwsIGZ1bmN0aW9uKGkpIHt3aWRnZXRzWyd3cmFwcGVyJ10gPSBpfSldLCBfY2xhc3NOYW1lKGZ1bmN0aW9uKCkge3RyeSB7cmV0dXJuIFt7J21haW4td3JhcHBlcic6IHRydWUsIFtzY29wZS5jbGFzc05hbWVdOiBzY29wZS5jbGFzc05hbWV9IF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcykpKVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NpdGUvc3JjL3BhZ2VzL2xheW91dC52ZHQiXSwic291cmNlUm9vdCI6IiJ9