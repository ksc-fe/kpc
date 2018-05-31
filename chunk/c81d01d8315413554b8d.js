require("source-map-support").install();
exports.ids = [2];
exports.modules = {

/***/ "./components/button/group.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = undefined;

var _getOwnPropertyDescriptor = __webpack_require__("babel-runtime/core-js/object/get-own-property-descriptor");

var _getOwnPropertyDescriptor2 = _interopRequireDefault(_getOwnPropertyDescriptor);

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

var _extends2 = __webpack_require__("babel-runtime/helpers/extends");

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

var _getOwnPropertyDescriptor = __webpack_require__("babel-runtime/core-js/object/get-own-property-descriptor");

var _getOwnPropertyDescriptor2 = _interopRequireDefault(_getOwnPropertyDescriptor);

var _classCallCheck2 = __webpack_require__("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__("babel-runtime/helpers/possibleConstructorReturn");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__("babel-runtime/helpers/inherits");

var _inherits3 = _interopRequireDefault(_inherits2);

var _dec, _desc, _value2, _class, _class2, _temp;

var _intact = __webpack_require__("intact");

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
      // 1527754394924
      var cssReload = require("!../../node_modules/css-hot-loader/hotModuleReplacement.js")(module.id, {"fileMap":"{fileName}"});
      module.hot.dispose(cssReload);
      module.hot.accept(undefined, cssReload);
    }
  

/***/ }),

/***/ "./components/button/index.vdt":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _extends2 = __webpack_require__("babel-runtime/helpers/extends");

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = __webpack_require__("babel-runtime/helpers/objectWithoutProperties");

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

var _getOwnPropertyDescriptor = __webpack_require__("babel-runtime/core-js/object/get-own-property-descriptor");

var _getOwnPropertyDescriptor2 = _interopRequireDefault(_getOwnPropertyDescriptor);

var _extends2 = __webpack_require__("babel-runtime/helpers/extends");

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = __webpack_require__("babel-runtime/helpers/objectWithoutProperties");

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _classCallCheck2 = __webpack_require__("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__("babel-runtime/helpers/possibleConstructorReturn");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__("babel-runtime/helpers/inherits");

var _inherits3 = _interopRequireDefault(_inherits2);

var _dec, _desc, _value, _class;

var _intact = __webpack_require__("intact");

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

var _classCallCheck2 = __webpack_require__("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__("babel-runtime/helpers/possibleConstructorReturn");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__("babel-runtime/helpers/inherits");

var _inherits3 = _interopRequireDefault(_inherits2);

var _extends2 = __webpack_require__("babel-runtime/helpers/extends");

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = __webpack_require__("babel-runtime/helpers/objectWithoutProperties");

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _intact = __webpack_require__("intact");

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
      // 1527754396322
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

var _getOwnPropertyDescriptor = __webpack_require__("babel-runtime/core-js/object/get-own-property-descriptor");

var _getOwnPropertyDescriptor2 = _interopRequireDefault(_getOwnPropertyDescriptor);

var _extends2 = __webpack_require__("babel-runtime/helpers/extends");

var _extends3 = _interopRequireDefault(_extends2);

var _classCallCheck2 = __webpack_require__("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__("babel-runtime/helpers/possibleConstructorReturn");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__("babel-runtime/helpers/inherits");

var _inherits3 = _interopRequireDefault(_inherits2);

var _dec, _desc, _value, _class, _init, _class2, _temp;

var _intact = __webpack_require__("intact");

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

var _extends2 = __webpack_require__("babel-runtime/helpers/extends");

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
      // 1527754396313
      var cssReload = require("!../../node_modules/css-hot-loader/hotModuleReplacement.js")(module.id, {"fileMap":"{fileName}"});
      module.hot.dispose(cssReload);
      module.hot.accept(undefined, cssReload);
    }
  

/***/ }),

/***/ "./components/input/index.vdt":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _extends2 = __webpack_require__("babel-runtime/helpers/extends");

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

/***/ "./components/link/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.Link = exports.default = undefined;

var _getOwnPropertyDescriptor = __webpack_require__("babel-runtime/core-js/object/get-own-property-descriptor");

var _getOwnPropertyDescriptor2 = _interopRequireDefault(_getOwnPropertyDescriptor);

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

var _index = __webpack_require__("./components/link/index.vdt");

var _index2 = _interopRequireDefault(_index);

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

var Link = (_dec = _intact2.default.template(), (_class = (_temp = _class2 = function (_Intact) {
    (0, _inherits3.default)(Link, _Intact);

    function Link() {
        (0, _classCallCheck3.default)(this, Link);
        return (0, _possibleConstructorReturn3.default)(this, _Intact.apply(this, arguments));
    }

    Link.prototype.defaults = function defaults() {
        return {
            href: undefined,
            name: undefined,
            isReplace: false
        };
    };

    Link.prototype.to = function to(e) {
        e.preventDefault();
        this.trigger('click', e);
        var href = this.get('href');
        var name = this.get('name');
        var history = Link.history;
        var url = void 0;
        if (href != null) {
            url = href;
        } else if (name != null) {
            if (Array.isArray(name)) {
                url = Link.url.apply(Link.url, name);
            } else {
                url = Link.url(name);
            }
        }
        if (url) {
            // if the href is equal to the current href, then do nothing
            var _history$location = history.location,
                pathname = _history$location.pathname,
                search = _history$location.search;

            if (pathname + search === url) return;

            if (this.get('isReplace')) {
                history.replace(url);
            } else {
                history.push(url);
            }
        }
    };

    (0, _createClass3.default)(Link, [{
        key: 'template',
        get: function get() {
            return _index2.default;
        }
    }]);
    return Link;
}(_intact2.default), _class2.history = undefined, _temp), (_applyDecoratedDescriptor(_class.prototype, 'template', [_dec], (0, _getOwnPropertyDescriptor2.default)(_class.prototype, 'template'), _class.prototype)), _class));
exports.default = Link;
exports.Link = Link;

/***/ }),

/***/ "./components/link/index.vdt":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _extends2 = __webpack_require__("babel-runtime/helpers/extends");

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = __webpack_require__("babel-runtime/helpers/objectWithoutProperties");

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

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
      name = _self$get.name,
      isReplace = _self$get.isReplace,
      rest = (0, _objectWithoutProperties3.default)(_self$get, ['name', 'isReplace']);

  return h('a', (0, _extends3.default)({}, function () {
    try {
      return [rest][0];
    } catch (e) {
      _e(e);
    }
  }.call(this), { 'ev-click': function () {
      try {
        return [self.to][0];
      } catch (e) {
        _e(e);
      }
    }.call(this) }), function () {
    try {
      return [self.get('children')][0];
    } catch (e) {
      _e(e);
    }
  }.call(this));
};

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = exports['default'];

/***/ }),

/***/ "./components/moveWrapper/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.MoveWrapper = exports.default = undefined;

var _classCallCheck2 = __webpack_require__("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__("babel-runtime/helpers/possibleConstructorReturn");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__("babel-runtime/helpers/inherits");

var _inherits3 = _interopRequireDefault(_inherits2);

var _intact = __webpack_require__("intact");

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

var _assign = __webpack_require__("babel-runtime/core-js/object/assign");

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
      // 1527754396114
      var cssReload = require("!../../node_modules/css-hot-loader/hotModuleReplacement.js")(module.id, {"fileMap":"{fileName}"});
      module.hot.dispose(cssReload);
      module.hot.accept(undefined, cssReload);
    }
  

/***/ }),

/***/ "./components/select/index.vdt":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _extends2 = __webpack_require__("babel-runtime/helpers/extends");

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

var _classCallCheck2 = __webpack_require__("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__("babel-runtime/helpers/possibleConstructorReturn");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__("babel-runtime/helpers/inherits");

var _inherits3 = _interopRequireDefault(_inherits2);

var _intact = __webpack_require__("intact");

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

/***/ "./site/src/pages/index/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = undefined;

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
      // 1527754393838
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

/***/ }),

/***/ "./site/src/pages/layout.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = undefined;

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
if (process.browser) {
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
      // 1527754394225
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

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2J1dHRvbi9ncm91cC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2J1dHRvbi9ncm91cC52ZHQiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9idXR0b24vaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9idXR0b24vaW5kZXguc3R5bCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2J1dHRvbi9pbmRleC52ZHQiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9kcm9wZG93bi9kcm9wZG93bi5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2Ryb3Bkb3duL2luZGV4LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvZHJvcGRvd24vaW5kZXguc3R5bCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2Ryb3Bkb3duL2l0ZW0uanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9kcm9wZG93bi9pdGVtLnZkdCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2Ryb3Bkb3duL21lbnUuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9kcm9wZG93bi9tZW51LnZkdCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2lucHV0L2luZGV4LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvaW5wdXQvaW5kZXguc3R5bCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2lucHV0L2luZGV4LnZkdCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2xpbmsvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9saW5rL2luZGV4LnZkdCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL21vdmVXcmFwcGVyL2luZGV4LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvbW92ZVdyYXBwZXIvcG9zaXRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9zZWxlY3QvZ3JvdXAuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9zZWxlY3QvZ3JvdXAudmR0Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvc2VsZWN0L2luZGV4LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvc2VsZWN0L2luZGV4LnN0eWwiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9zZWxlY3QvaW5kZXgudmR0Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvc2VsZWN0L29wdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9zaXRlL3NyYy9wYWdlcy9pbmRleC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zaXRlL3NyYy9wYWdlcy9pbmRleC9pbmRleC5zdHlsIiwid2VicGFjazovLy8uL3NpdGUvc3JjL3BhZ2VzL2luZGV4L2luZGV4LnZkdCIsIndlYnBhY2s6Ly8vLi9zaXRlL3NyYy9wYWdlcy9sYXlvdXQuanMiLCJ3ZWJwYWNrOi8vLy4vc2l0ZS9zcmMvcGFnZXMvbGF5b3V0LnN0eWwiLCJ3ZWJwYWNrOi8vLy4vc2l0ZS9zcmMvcGFnZXMvbGF5b3V0LnZkdCJdLCJuYW1lcyI6WyJCdXR0b25Hcm91cCIsIkludGFjdCIsInRlbXBsYXRlIiwiZGVmYXVsdHMiLCJ2ZXJ0aWNhbCIsInZhbHVlIiwidW5kZWZpbmVkIiwicmFkaW8iLCJjaGVja1R5cGUiLCJfaW5pdCIsImdldCIsInNldCIsInNpbGVudCIsInByb3BUeXBlcyIsIkJvb2xlYW4iLCJvYmoiLCJfVmR0IiwiYmxvY2tzIiwiJGNhbGxlZSIsIlZkdCIsImgiLCJtaXNzIiwiaGMiLCJodSIsIndpZGdldHMiLCJfYmxvY2tzIiwiX19ibG9ja3MiLCJfX3UiLCJ1dGlscyIsImV4dGVuZCIsIl9lIiwiZXJyb3IiLCJfY2xhc3NOYW1lIiwiY2xhc3NOYW1lIiwiX19vIiwiT3B0aW9ucyIsIl9nZXRNb2RlbCIsImdldE1vZGVsIiwiX3NldE1vZGVsIiwic2V0TW9kZWwiLCJfc2V0Q2hlY2tib3hNb2RlbCIsInNldENoZWNrYm94TW9kZWwiLCJfZGV0ZWN0Q2hlY2tib3hDaGVja2VkIiwiZGV0ZWN0Q2hlY2tib3hDaGVja2VkIiwiX3NldFNlbGVjdE1vZGVsIiwic2V0U2VsZWN0TW9kZWwiLCJzZWxmIiwiZGF0YSIsIiR0aGlzIiwic2NvcGUiLCJBbmltYXRlIiwicGFyZW50IiwiX3N1cGVyIiwic3R5bGUiLCJjaGlsZHJlbiIsImZsdWlkIiwiY2xhc3NOYW1lT2JqIiwiZSIsImNhbGwiLCJtYXAiLCJBcnJheSIsImlzQXJyYXkiLCJ2Tm9kZSIsInRhZyIsIkJ1dHRvbiIsInByb3BzIiwiX3ZhbHVlIiwiX2NoZWNrVHlwZSIsInR5cGUiLCJzaXplIiwiaWNvbiIsImNpcmNsZSIsImxvYWRpbmciLCJkaXNhYmxlZCIsImh0bWxUeXBlIiwidGFnTmFtZSIsInRhZ1Byb3BzIiwibmFtZSIsInRhYmluZGV4IiwiX21vdW50IiwicGFyZW50Vk5vZGUiLCJHcm91cCIsImdyb3VwIiwiX2JlZm9yZVVwZGF0ZSIsInNob3dMb2FkaW5nIiwiaGlkZUxvYWRpbmciLCJkaXNhYmxlIiwiZW5hYmxlIiwiX29uQ2xpY2siLCJwcmV2ZW50RGVmYXVsdCIsInNsaWNlIiwiaW5kZXgiLCJpbmRleE9mIiwicHVzaCIsInNwbGljZSIsImNvbXBvbmVudCIsInRyaWdnZXIiLCJfYmx1ciIsImVsZW1lbnQiLCJibHVyIiwiU3RyaW5nIiwiRnVuY3Rpb24iLCJyZWYiLCJrZXkiLCJyZXN0IiwiY2hlY2tlZCIsImhyZWYiLCJmb3JFYWNoIiwiY2hpbGQiLCJsZW5ndGgiLCJEcm9wZG93biIsIl9zYXZlT3JpZ2luYWxFdmVudHMiLCJvbiIsImtlZXAiLCJvcmlnaW5Qcm9wcyIsImhhc1NhdmVkIiwiX2hhc1NhdmVkIiwiX2V2Q2xpY2siLCJfZXZNb3VzZUVudGVyIiwiX2V2TW91c2VMZWF2ZSIsInNob3ciLCJiaW5kIiwiaGlkZSIsInNpYmxpbmdzIiwibWVudSIsImRyb3Bkb3duIiwiZm4iLCJpc0ZvY3VzIiwiZm9jdXNJdGVtQnlJbmRleCIsImltbWVkaWF0ZWx5IiwiV3JhcHBlciIsImluVnVlIiwicG9zaXRpb24iLCJEcm9wZG93blZ1ZVdyYXBwZXIiLCJfV3JhcHBlciIsImZ1bmN0aW9uYWxXcmFwcGVyIiwiRHJvcGRvd25NZW51IiwiRHJvcGRvd25JdGVtIiwiaGlkZU9uU2VsZWN0IiwiX2lzRm9jdXMiLCJhbmNlc3RvciIsIl9maW5kQW5jZXN0b3JEcm9wZG93bk1lbnUiLCJpdGVtcyIsIl9vbk1vdXNlRW50ZXIiLCJmb2N1c0l0ZW0iLCJfb25Nb3VzZUxlYXZlIiwic2VsZWN0IiwiX2lzU3ViTWVudSIsImZvY3VzIiwiZWxSZWN0IiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwicEVsIiwicmVmcyIsInBFbFJlY3QiLCJib3R0b21PdmVyZmxvd0Rpc3RhbmNlIiwiYm90dG9tIiwidG9wT3ZlcmZsb3dEaXN0YW5jZSIsInRvcCIsInNjcm9sbFRvcCIsInVuRm9jdXMiLCJzaG93TWVudUFuZEZvY3VzIiwiaGlkZU1lbnUiLCJpc0ZpcnN0IiwiX2Rlc3Ryb3kiLCJ0cmFuc2l0aW9uIiwic3ViRHJvcGRvd25zIiwiZm9jdXNJbmRleCIsImxvY2tlZCIsIl9maW5kUGFyZW50RHJvcGRvd25NZW51IiwiX2FkZERvY3VtZW50RXZlbnRzIiwiY2xlYXJUaW1lb3V0IiwidGltZXIiLCJzZXRUaW1lb3V0IiwidG9nZ2xlIiwibXkiLCJhdCIsIm9mIiwidXNpbmciLCJmZWVkYmFjayIsIl9vblNob3ciLCJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJfb25Eb2N1bWVudENsaWNrIiwiX29uS2V5ZG93biIsIl9yZW1vdmVEb2N1bWVudEV2ZW50cyIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJ0YXJnZXQiLCJjb250YWlucyIsIl9pc0NsaWNrU3ViTWVudSIsIl9kcm9wZG93biIsImtleUNvZGUiLCJfZm9jdXNOZXh0SXRlbSIsIl9mb2N1c1ByZXZJdGVtIiwiX3Nob3dTdWJNZW51IiwiX2hpZGVTdWJNZW51IiwiX3NlbGVjdEl0ZW0iLCJkaXJlY3Rpb24iLCJtYXgiLCJvbGRJbmRleCIsImZpeEluZGV4IiwiaSIsIml0ZW0iLCJzdWJNZW51cyIsInJldCIsInN1Yk1lbnUiLCJldmVudHMiLCJNb3ZlV3JhcHBlciIsIklucHV0IiwiZGVmYXVsdFZhbHVlIiwicGxhY2Vob2xkZXIiLCJyZWFkb25seSIsImNsZWFyYWJsZSIsInJvd3MiLCJzcGVsbGNoZWNrIiwiYXV0b1dpZHRoIiwid2lkdGgiLCJhdXRvY29tcGxldGUiLCJfYWRqdXN0V2lkdGgiLCJmYWtlIiwib2Zmc2V0V2lkdGgiLCJpbnB1dCIsImNsZWFyIiwiX29uSW5wdXQiLCJfcHJveHlFdmVudCIsInByZXBlbmQiLCJhcHBlbmQiLCJwcmVmaXgiLCJzdWZmaXgiLCJyZWR1Y2UiLCJtZW1vIiwid3JhcHBlckV2ZW50cyIsIkxpbmsiLCJpc1JlcGxhY2UiLCJ0byIsImhpc3RvcnkiLCJ1cmwiLCJhcHBseSIsImxvY2F0aW9uIiwicGF0aG5hbWUiLCJzZWFyY2giLCJyZXBsYWNlIiwiYXV0b0Rlc3Ryb3kiLCJjb250YWluZXIiLCJpbml0IiwiYXJncyIsImNyZWF0ZUNvbW1lbnQiLCJoeWRyYXRlIiwidXBkYXRlIiwibGFzdFZOb2RlIiwibmV4dFZOb2RlIiwiZGVzdHJveSIsIl8kZGVzdHJveSIsInJlbmRlcmVkIiwiVHlwZXMiLCJDb21wb25lbnRDbGFzc09ySW5zdGFuY2UiLCJyZW1vdmUiLCJ2ZHQiLCJkZXN0cm95ZWQiLCJvZmYiLCJxdWVyeVNlbGVjdG9yIiwiYm9keSIsImFwcGVuZENoaWxkIiwiZ2V0RG9jdW1lbnRPcldpbmRvd1JlY3QiLCJzY3JvbGxiYXJXaWR0aCIsIk1hdGgiLCJhYnMiLCJySG9yaXpvbnRhbCIsInJWZXJ0aWNhbCIsInJPZmZzZXQiLCJyUG9zaXRpb24iLCJyUGVyY2VudCIsImdldERpbWVuc2lvbnMiLCJlbGVtIiwibm9kZVR5cGUiLCJoZWlnaHQiLCJvZmZzZXQiLCJsZWZ0Iiwid2luZG93IiwicGFnZVlPZmZzZXQiLCJwYWdlWE9mZnNldCIsInBhZ2VZIiwicGFnZVgiLCJyZWN0IiwiZCIsImRvY3VtZW50RWxlbWVudCIsImNsaWVudFdpZHRoIiwiY2xpZW50SGVpZ2h0IiwiYiIsInNjcm9sbFdpZHRoIiwic2Nyb2xsSGVpZ2h0Iiwib2Zmc2V0SGVpZ2h0IiwiZ2V0T2Zmc2V0cyIsIm9mZnNldHMiLCJwYXJzZUZsb2F0IiwidGVzdCIsIl9zY3JvbGxCYXJXaWR0aCIsIm91dGVyIiwiY3JlYXRlRWxlbWVudCIsInZpc2liaWxpdHkiLCJtc092ZXJmbG93U3R5bGUiLCJ3aWR0aE5vU2Nyb2xsIiwib3ZlcmZsb3ciLCJpbm5lciIsIndpZHRoV2l0aFNjcm9sbCIsInBhcmVudE5vZGUiLCJyZW1vdmVDaGlsZCIsImdldFNjcm9sbEluZm8iLCJ3aXRoaW4iLCJvdmVyZmxvd1giLCJpc1dpbmRvdyIsImlzRG9jdW1lbnQiLCJvdmVyZmxvd1kiLCJoYXNPdmVyZmxvd1giLCJoYXNPdmVyZmxvd1kiLCJnZXRXaXRoaW5JbmZvIiwiaGFzT2Zmc2V0Iiwic2Nyb2xsTGVmdCIsInBhcnNlQ3NzIiwicHJvcGVydHkiLCJwYXJzZUludCIsIm9wdGlvbnMiLCJ0YXJnZXRXaWR0aCIsInRhcmdldEhlaWdodCIsInRhcmdldE9mZnNldCIsImJhc2VQb3NpdGlvbiIsImNvbGxpc2lvbiIsInNwbGl0Iiwic2Nyb2xsSW5mbyIsInBvcyIsImNvbmNhdCIsImhvcml6b250YWxPZmZzZXQiLCJleGVjIiwidmVydGljYWxPZmZzZXQiLCJhdE9mZnNldCIsImVsZW1XaWR0aCIsImVsZW1IZWlnaHQiLCJteU9mZnNldCIsImNvbXB1dGVkU3R5bGUiLCJnZXRDb21wdXRlZFN0eWxlIiwibWFyZ2luTGVmdCIsIm1hcmdpblRvcCIsImNvbGxpc2lvbldpZHRoIiwiY29sbGlzaW9uSGVpZ2h0IiwiY29sbGlzaW9uUG9zaXRpb24iLCJkaXIiLCJjb2xsIiwicnVsZXMiLCJyaWdodCIsImhvcml6b250YWwiLCJpbXBvcnRhbnQiLCJmaXQiLCJ3aXRoaW5PZmZzZXQiLCJvdXRlcldpZHRoIiwiY29sbGlzaW9uUG9zTGVmdCIsIm92ZXJMZWZ0Iiwib3ZlclJpZ2h0IiwibmV3T3ZlclJpZ2h0Iiwib3V0ZXJIZWlnaHQiLCJjb2xsaXNpb25Qb3NUb3AiLCJvdmVyVG9wIiwib3ZlckJvdHRvbSIsIm5ld092ZXJCb3R0b20iLCJmbGlwIiwib2Zmc2V0TGVmdCIsIm5ld092ZXJMZWZ0Iiwib2Zmc2V0VG9wIiwibmV3T3ZlclRvcCIsImZsaXBmaXQiLCJPcHRpb25Hcm91cCIsImxhYmVsIiwiU2VsZWN0IiwibXVsdGlwbGUiLCJmaWx0ZXJhYmxlIiwia2V5d29yZHMiLCJhbGxvd1VubWF0Y2giLCJfc2hvdyIsIl9vbkNsZWFyIiwic3RvcFByb3BhZ2F0aW9uIiwiX29uU2VsZWN0IiwiYXN5bmMiLCJ2YWx1ZXMiLCJfZm9jdXNJbnB1dCIsIl9yZXNldFNlYXJjaCIsIl9vblNlYXJjaCIsInRyaW0iLCJfb25DaGFuZ2VTaG93IiwiYyIsIl9vbkJsdXIiLCJfc2VsZWN0SW5wdXQiLCJfb25Gb2N1cyIsIl9vbkZvY3Vzb3V0IiwiX2RlbGV0ZSIsIl9wb3NpdGlvbiIsIm1lbnVFbGVtZW50IiwibWVudVdpZHRoIiwiX29uS2V5cHJlc3MiLCJ3cmFwcGVyIiwiY2xpY2siLCJPcHRpb24iLCJfcGxhY2Vob2xkZXIiLCJoYXNWYWx1ZSIsImlzR3JvdXAiLCJsYWJlbHMiLCJoYW5kbGVQcm9wcyIsImFjdGl2ZSIsInZhbGlkIiwidG1wIiwidG9Mb3dlckNhc2UiLCJ0ZXh0IiwiT3B0aW9uc1ZOb2RlcyIsIk1lbnUiLCJMYXlvdXQiLCJfb2JqIiwiaGFzT3duUHJvcGVydHkiLCJhcmd1bWVudHMiLCJ0aGVtZSIsInByb2Nlc3MiLCJicm93c2VyIiwiY2hhbmdlVGhlbWUiLCJuZXdUaGVtZSIsIm9sZFRoZW1lIiwibGluayIsImxvY2FsU3RvcmFnZSIsInNldEl0ZW0iLCJnZXRJdGVtIiwidiIsIm8iLCJib3JkZXIiLCJfdXBkYXRlQm9yZGVyIiwibmF2IiwiY2xhc3NMaXN0IiwiYWRkIiwidGl0bGUiLCJuYXZJbmRleCIsIl9fYyIsIl9fbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7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QUFyRCxNQUEyRHpCLFNBQVMsU0FBVCxJQUFzQixVQUFTeUIsTUFBVCxFQUFpQjtBQUMxSyxZQUFJTCxPQUFPLElBQVg7QUFDQSxlQUFPN0IsT0FBTyxTQUFQLElBQW9CQSxPQUFPLFNBQVAsRUFBa0J5QyxJQUFsQixDQUF1QixJQUF2QixFQUE2QixZQUFXO0FBQ25FLG1CQUFPakMsUUFBUSxTQUFSLEVBQW1CaUMsSUFBbkIsQ0FBd0JaLElBQXhCLEVBQThCSyxNQUE5QixDQUFQO0FBQ0MsU0FGMEIsQ0FBcEIsR0FFRjFCLFFBQVEsU0FBUixFQUFtQmlDLElBQW5CLENBQXdCLElBQXhCLEVBQThCUCxNQUE5QixDQUZMO0FBR0MsS0FMdUUsS0FLbEV6QixTQUFTLFNBQVQsRUFBb0JnQyxJQUFwQixDQUF5QixJQUF6QixDQUxtRCxFQUtuQixpQkFMbUIsRUFLQSxJQUxBLEVBS00sVUFBUzhJLENBQVQsRUFBWTtBQUFDaEwsZ0JBQVEsU0FBUixJQUFxQmdMLENBQXJCO0FBQXVCLEtBTDFDLENBVG5DLENBQWYsRUFjZ0d4SyxXQUFXLFlBQVc7QUFBQyxZQUFJO0FBQUE7O0FBQUMsbUJBQU8sV0FBRSxnQkFBZ0IsSUFBbEIsU0FBeUJpQixNQUFNaEIsU0FBL0IsSUFBMkNnQixNQUFNaEIsU0FBakQsU0FBOEQsQ0FBOUQsQ0FBUDtBQUF3RSxTQUE3RSxDQUE4RSxPQUFNd0IsQ0FBTixFQUFTO0FBQUMzQixlQUFHMkIsQ0FBSDtBQUFNO0FBQUMsS0FBM0csQ0FBNEdDLElBQTVHLENBQWlILElBQWpILENBQVgsQ0FkaEcsQ0FBUDtBQWVDLEM7O0FBdEREOzs7O0FBQXVDIiwiZmlsZSI6ImNodW5rL2M4MWQwMWQ4MzE1NDEzNTU0YjhkLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEludGFjdCBmcm9tICdpbnRhY3QnO1xuaW1wb3J0IHRlbXBsYXRlIGZyb20gJy4vZ3JvdXAudmR0JztcbmltcG9ydCAnLi9pbmRleC5zdHlsJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQnV0dG9uR3JvdXAgZXh0ZW5kcyBJbnRhY3Qge1xuICAgIEBJbnRhY3QudGVtcGxhdGUoKVxuICAgIGdldCB0ZW1wbGF0ZSgpIHsgcmV0dXJuIHRlbXBsYXRlOyB9XG5cbiAgICBkZWZhdWx0cygpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHZlcnRpY2FsOiBmYWxzZSxcbiAgICAgICAgICAgIHZhbHVlOiB1bmRlZmluZWQsXG4gICAgICAgICAgICByYWRpbzogZmFsc2UsIC8vIEBkZXByZWNhdGVkOiB1c2UgY2hlY2tUeXBlIGluc3RlYWQgb2ZcbiAgICAgICAgICAgIGNoZWNrVHlwZTogJ25vbmUnLCAvLyByYWRpbyB8IGNoZWNrYm94IHwgbm9uZVxuICAgICAgICB9O1xuICAgIH1cblxuICAgIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgICAgIHZlcnRpY2FsOiBCb29sZWFuLFxuICAgICAgICByYWRpbzogQm9vbGVhbixcbiAgICB9XG5cbiAgICBfaW5pdCgpIHtcbiAgICAgICAgLyogaXN0YW5idWwgaWdub3JlIGlmICovXG4gICAgICAgIGlmICh0aGlzLmdldCgncmFkaW8nKSkge1xuICAgICAgICAgICAgdGhpcy5zZXQoJ2NoZWNrVHlwZScsICdyYWRpbycsIHtzaWxlbnQ6IHRydWV9KTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9idXR0b24vZ3JvdXAuanMiLCJpbXBvcnQgQnV0dG9uIGZyb20gJy4vJztcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKG9iaiwgX1ZkdCwgYmxvY2tzLCAkY2FsbGVlKSB7XG5fVmR0IHx8IChfVmR0ID0gVmR0KTtcbm9iaiB8fCAob2JqID0ge30pO1xuYmxvY2tzIHx8IChibG9ja3MgPSB7fSk7XG52YXIgaCA9IF9WZHQubWlzcy5oLCBoYyA9IF9WZHQubWlzcy5oYywgaHUgPSBfVmR0Lm1pc3MuaHUsIHdpZGdldHMgPSB0aGlzICYmIHRoaXMud2lkZ2V0cyB8fCB7fSwgX2Jsb2NrcyA9IHt9LCBfX2Jsb2NrcyA9IHt9LFxuX191ID0gX1ZkdC51dGlscywgZXh0ZW5kID0gX191LmV4dGVuZCwgX2UgPSBfX3UuZXJyb3IsIF9jbGFzc05hbWUgPSBfX3UuY2xhc3NOYW1lLFxuX19vID0gX191Lk9wdGlvbnMsIF9nZXRNb2RlbCA9IF9fby5nZXRNb2RlbCwgX3NldE1vZGVsID0gX19vLnNldE1vZGVsLFxuX3NldENoZWNrYm94TW9kZWwgPSBfX3Uuc2V0Q2hlY2tib3hNb2RlbCwgX2RldGVjdENoZWNrYm94Q2hlY2tlZCA9IF9fdS5kZXRlY3RDaGVja2JveENoZWNrZWQsXG5fc2V0U2VsZWN0TW9kZWwgPSBfX3Uuc2V0U2VsZWN0TW9kZWwsXG5zZWxmID0gdGhpcy5kYXRhLCAkdGhpcyA9IHRoaXMsIHNjb3BlID0gb2JqLCBBbmltYXRlID0gc2VsZiAmJiBzZWxmLkFuaW1hdGUsIHBhcmVudCA9ICgkY2FsbGVlIHx8IHt9KS5fc3VwZXJcblxuXG5jb25zdCB7XG4gICAgY2xhc3NOYW1lLCB2ZXJ0aWNhbCwgc3R5bGUsIFxuICAgIGNoaWxkcmVuLCB2YWx1ZSwgZmx1aWQsIGNoZWNrVHlwZVxufSA9IHNlbGYuZ2V0KCk7XG5cbmNvbnN0IGNsYXNzTmFtZU9iaiA9IHtcbiAgICAnay1idG5zJzogdHJ1ZSxcbiAgICAnay12ZXJ0aWNhbCc6IHZlcnRpY2FsLFxuICAgIFtjbGFzc05hbWVdOiBjbGFzc05hbWUsXG4gICAgJ2stZmx1aWQnOiBmbHVpZCxcbn07XG5cbnJldHVybiBoKCdkaXYnLCB7J3N0eWxlJzogZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW3N0eWxlIF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcyl9LCBmdW5jdGlvbigpIHt0cnkge3JldHVybiBbY2hlY2tUeXBlICE9PSAnbm9uZScgPyBfX3UubWFwKFxuICAgICAgICBjaGlsZHJlbiA/IFxuICAgICAgICAgICAgKEFycmF5LmlzQXJyYXkoY2hpbGRyZW4pID8gY2hpbGRyZW4gOiBbY2hpbGRyZW5dKSA6XG4gICAgICAgICAgICBjaGlsZHJlbiwgXG4gICAgICAgIHZOb2RlID0+IHtcbiAgICAgICAgICAgIGlmICh2Tm9kZS50YWcgPT09IEJ1dHRvbikge1xuICAgICAgICAgICAgICAgIHZOb2RlLnByb3BzID0ge1xuICAgICAgICAgICAgICAgICAgICAuLi52Tm9kZS5wcm9wcywgXG4gICAgICAgICAgICAgICAgICAgIF92YWx1ZTogdmFsdWUsXG4gICAgICAgICAgICAgICAgICAgIF9jaGVja1R5cGU6IGNoZWNrVHlwZSxcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdk5vZGU7XG4gICAgICAgIH0pIDogXG4gICAgICAgIGNoaWxkcmVuXG5dWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpLCBfY2xhc3NOYW1lKGZ1bmN0aW9uKCkge3RyeSB7cmV0dXJuIFtjbGFzc05hbWVPYmogXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKSkpXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9idXR0b24vZ3JvdXAudmR0IiwiaW1wb3J0IEludGFjdCBmcm9tICdpbnRhY3QnO1xuaW1wb3J0IHRlbXBsYXRlIGZyb20gJy4vaW5kZXgudmR0JztcbmltcG9ydCBHcm91cCBmcm9tICcuL2dyb3VwJztcbmltcG9ydCAnLi4vLi4vc3R5bGVzL2twYy5zdHlsJztcbmltcG9ydCAnLi9pbmRleC5zdHlsJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQnV0dG9uIGV4dGVuZHMgSW50YWN0IHtcbiAgICBASW50YWN0LnRlbXBsYXRlKClcbiAgICBnZXQgdGVtcGxhdGUoKSB7IHJldHVybiB0ZW1wbGF0ZTsgfVxuXG4gICAgZGVmYXVsdHMoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB0eXBlOiAnZGVmYXVsdCcsIC8vIHByaW1hcnkgfCB3YXJuaW5nIHwgZGFuZ2VyXG4gICAgICAgICAgICBzaXplOiAnZGVmYXVsdCcsIC8vIHNtYWxsIHwgbWluaVxuICAgICAgICAgICAgaWNvbjogZmFsc2UsXG4gICAgICAgICAgICBjaXJjbGU6IGZhbHNlLFxuICAgICAgICAgICAgbG9hZGluZzogZmFsc2UsXG4gICAgICAgICAgICBkaXNhYmxlZDogZmFsc2UsXG4gICAgICAgICAgICBmbHVpZDogZmFsc2UsXG4gICAgICAgICAgICBodG1sVHlwZTogJ2J1dHRvbicsXG4gICAgICAgICAgICB0YWdOYW1lOiAnYnV0dG9uJyxcbiAgICAgICAgICAgIHRhZ1Byb3BzOiB1bmRlZmluZWQsXG4gICAgICAgICAgICB2YWx1ZTogdW5kZWZpbmVkLFxuICAgICAgICAgICAgbmFtZTogdW5kZWZpbmVkLFxuICAgICAgICAgICAgdGFiaW5kZXg6ICcwJyxcblxuICAgICAgICAgICAgX3ZhbHVlOiB1bmRlZmluZWQsXG4gICAgICAgICAgICBfY2hlY2tUeXBlOiAnbm9uZScsXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICBzaXplOiBTdHJpbmcsXG4gICAgICAgIGljb246IEJvb2xlYW4sXG4gICAgICAgIGNpcmNsZTogQm9vbGVhbixcbiAgICAgICAgbG9hZGluZzogQm9vbGVhbixcbiAgICAgICAgZGlzYWJsZWQ6IEJvb2xlYW4sXG4gICAgICAgIGZsdWlkOiBCb29sZWFuLFxuICAgICAgICBodG1sVHlwZTogU3RyaW5nLFxuICAgICAgICB0YWdOYW1lOiBbU3RyaW5nLCBGdW5jdGlvbl0sXG4gICAgICAgIG5hbWU6IFN0cmluZyxcbiAgICB9XG5cbiAgICBfbW91bnQoKSB7XG4gICAgICAgIGxldCBwYXJlbnRWTm9kZSA9IHRoaXMucGFyZW50Vk5vZGU7XG5cbiAgICAgICAgd2hpbGUgKHBhcmVudFZOb2RlICYmIHBhcmVudFZOb2RlLnRhZyAhPT0gR3JvdXApIHtcbiAgICAgICAgICAgIHBhcmVudFZOb2RlID0gcGFyZW50Vk5vZGUucGFyZW50Vk5vZGU7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocGFyZW50Vk5vZGUpIHtcbiAgICAgICAgICAgIHRoaXMuZ3JvdXAgPSBwYXJlbnRWTm9kZS5jaGlsZHJlbjtcblxuICAgICAgICAgICAgdGhpcy5zZXQoe1xuICAgICAgICAgICAgICAgIF9jaGVja1R5cGU6IHRoaXMuZ3JvdXAuZ2V0KCdjaGVja1R5cGUnKSxcbiAgICAgICAgICAgICAgICBfdmFsdWU6IHRoaXMuZ3JvdXAuZ2V0KCd2YWx1ZScpXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIF9iZWZvcmVVcGRhdGUoKSB7XG4gICAgICAgIGlmICh0aGlzLmdyb3VwKSB7XG4gICAgICAgICAgICB0aGlzLnNldCh7XG4gICAgICAgICAgICAgICAgX2NoZWNrVHlwZTogdGhpcy5ncm91cC5nZXQoJ2NoZWNrVHlwZScpLFxuICAgICAgICAgICAgICAgIF92YWx1ZTogdGhpcy5ncm91cC5nZXQoJ3ZhbHVlJylcbiAgICAgICAgICAgIH0sIHtzaWxlbnQ6IHRydWV9KTtcbiAgICAgICAgfSBcbiAgICB9XG5cbiAgICBzaG93TG9hZGluZygpIHtcbiAgICAgICAgdGhpcy5zZXQoJ2xvYWRpbmcnLCB0cnVlKTtcbiAgICB9XG5cbiAgICBoaWRlTG9hZGluZygpIHtcbiAgICAgICAgdGhpcy5zZXQoJ2xvYWRpbmcnLCBmYWxzZSk7XG4gICAgfVxuXG4gICAgZGlzYWJsZSgpIHtcbiAgICAgICAgdGhpcy5zZXQoJ2Rpc2FibGVkJywgdHJ1ZSk7XG4gICAgfVxuXG4gICAgZW5hYmxlKCkge1xuICAgICAgICB0aGlzLnNldCgnZGlzYWJsZWQnLCBmYWxzZSk7XG4gICAgfVxuXG4gICAgX29uQ2xpY2soZSkge1xuICAgICAgICBpZiAodGhpcy5nZXQoJ2Rpc2FibGVkJykgfHwgdGhpcy5nZXQoJ2xvYWRpbmcnKSkge1xuICAgICAgICAgICAgcmV0dXJuIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLmdyb3VwKSB7XG4gICAgICAgICAgICBsZXQge19jaGVja1R5cGUsIHZhbHVlLCBfdmFsdWV9ID0gdGhpcy5nZXQoKTtcbiAgICAgICAgICAgIGlmICh2YWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgaWYgKF9jaGVja1R5cGUgPT09ICdyYWRpbycpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ncm91cC5zZXQoJ3ZhbHVlJywgdmFsdWUpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoX2NoZWNrVHlwZSA9PT0gJ2NoZWNrYm94Jykge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIUFycmF5LmlzQXJyYXkoX3ZhbHVlKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgX3ZhbHVlID0gW107XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgX3ZhbHVlID0gX3ZhbHVlLnNsaWNlKDApO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBpbmRleCA9IF92YWx1ZS5pbmRleE9mKHZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCF+aW5kZXgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIF92YWx1ZS5wdXNoKHZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIF92YWx1ZS5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZ3JvdXAuc2V0KCd2YWx1ZScsIF92YWx1ZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgZS5jb21wb25lbnQgPSB0aGlzO1xuICAgICAgICB0aGlzLnRyaWdnZXIoJ2NsaWNrJywgZSk7XG4gICAgfVxuXG4gICAgX2JsdXIoKSB7XG4gICAgICAgIC8vIHdoZW4gY2xpY2ssIGJsdXIgaXQgdG8gcmVtb3ZlIHRoZSBmb2N1cyBzdHlsZVxuICAgICAgICB0aGlzLmVsZW1lbnQuYmx1cigpO1xuICAgIH1cbn1cblxuZXhwb3J0IHtCdXR0b24sIEdyb3VwIGFzIEJ1dHRvbkdyb3VwfTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvYnV0dG9uL2luZGV4LmpzIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cbiAgICBpZihtb2R1bGUuaG90KSB7XG4gICAgICAvLyAxNTI3NzU0Mzk0OTI0XG4gICAgICB2YXIgY3NzUmVsb2FkID0gcmVxdWlyZShcIiEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWhvdC1sb2FkZXIvaG90TW9kdWxlUmVwbGFjZW1lbnQuanNcIikobW9kdWxlLmlkLCB7XCJmaWxlTWFwXCI6XCJ7ZmlsZU5hbWV9XCJ9KTtcbiAgICAgIG1vZHVsZS5ob3QuZGlzcG9zZShjc3NSZWxvYWQpO1xuICAgICAgbW9kdWxlLmhvdC5hY2NlcHQodW5kZWZpbmVkLCBjc3NSZWxvYWQpO1xuICAgIH1cbiAgXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9jb21wb25lbnRzL2J1dHRvbi9pbmRleC5zdHlsXG4vLyBtb2R1bGUgaWQgPSAuL2NvbXBvbmVudHMvYnV0dG9uL2luZGV4LnN0eWxcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiIsImltcG9ydCB7aXNTdHJpbmdPck51bWJlck5vdEVtcHR5fSBmcm9tICcuLi91dGlscyc7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihvYmosIF9WZHQsIGJsb2NrcywgJGNhbGxlZSkge1xuX1ZkdCB8fCAoX1ZkdCA9IFZkdCk7XG5vYmogfHwgKG9iaiA9IHt9KTtcbmJsb2NrcyB8fCAoYmxvY2tzID0ge30pO1xudmFyIGggPSBfVmR0Lm1pc3MuaCwgaGMgPSBfVmR0Lm1pc3MuaGMsIGh1ID0gX1ZkdC5taXNzLmh1LCB3aWRnZXRzID0gdGhpcyAmJiB0aGlzLndpZGdldHMgfHwge30sIF9ibG9ja3MgPSB7fSwgX19ibG9ja3MgPSB7fSxcbl9fdSA9IF9WZHQudXRpbHMsIGV4dGVuZCA9IF9fdS5leHRlbmQsIF9lID0gX191LmVycm9yLCBfY2xhc3NOYW1lID0gX191LmNsYXNzTmFtZSxcbl9fbyA9IF9fdS5PcHRpb25zLCBfZ2V0TW9kZWwgPSBfX28uZ2V0TW9kZWwsIF9zZXRNb2RlbCA9IF9fby5zZXRNb2RlbCxcbl9zZXRDaGVja2JveE1vZGVsID0gX191LnNldENoZWNrYm94TW9kZWwsIF9kZXRlY3RDaGVja2JveENoZWNrZWQgPSBfX3UuZGV0ZWN0Q2hlY2tib3hDaGVja2VkLFxuX3NldFNlbGVjdE1vZGVsID0gX191LnNldFNlbGVjdE1vZGVsLFxuc2VsZiA9IHRoaXMuZGF0YSwgJHRoaXMgPSB0aGlzLCBzY29wZSA9IG9iaiwgQW5pbWF0ZSA9IHNlbGYgJiYgc2VsZi5BbmltYXRlLCBwYXJlbnQgPSAoJGNhbGxlZSB8fCB7fSkuX3N1cGVyXG5cblxubGV0IHtcbiAgICB0eXBlLCBjbGFzc05hbWUsIHNpemUsIGljb24sIGNpcmNsZSwgcmVmLCBrZXksIHRhYmluZGV4LFxuICAgIHRhZ05hbWUsIGh0bWxUeXBlLCBmbHVpZCwgY2hpbGRyZW4sIGxvYWRpbmcsIGRpc2FibGVkLFxuICAgIHZhbHVlLCBfdmFsdWUsIG5hbWUsIHRhZ1Byb3BzLCBfY2hlY2tUeXBlLCAuLi5yZXN0XG59ID0gc2VsZi5nZXQoKTtcblxuY29uc3QgY2hlY2tlZCA9IHZhbHVlICE9PSB1bmRlZmluZWQgP1xuICAgIF9jaGVja1R5cGUgPT09ICdyYWRpbycgPyBcbiAgICAgICAgdmFsdWUgPT09IF92YWx1ZSA6ICBcbiAgICAgICAgKFxuICAgICAgICAgICAgX2NoZWNrVHlwZSA9PT0gJ2NoZWNrYm94JyA/IFxuICAgICAgICAgICAgICAgIEFycmF5LmlzQXJyYXkoX3ZhbHVlKSAmJiAhIX5fdmFsdWUuaW5kZXhPZih2YWx1ZSkgOlxuICAgICAgICAgICAgICAgIGZhbHNlXG4gICAgICAgIClcbiAgICA6IGZhbHNlO1xuXG5jb25zdCBjbGFzc05hbWVPYmogPSB7XG4gICAgJ2stYnRuJzogdHJ1ZSxcbiAgICBbYGstJHt0eXBlfWBdOiB0eXBlICE9PSAnZGVmYXVsdCcsXG4gICAgJ2stYnRuLWljb24nOiBpY29uLFxuICAgIFtgay0ke3NpemV9YF06IHNpemUgIT09ICdkZWZhdWx0JyxcbiAgICBbY2xhc3NOYW1lXTogY2xhc3NOYW1lLCBcbiAgICAnay1jaXJjbGUnOiBjaXJjbGUsXG4gICAgJ2stbG9hZGluZyc6IGxvYWRpbmcsXG4gICAgJ2stZmx1aWQnOiBmbHVpZCxcbiAgICAnay1hY3RpdmUnOiBjaGVja2VkLFxuICAgICdrLWRpc2FibGVkJzogZGlzYWJsZWQgfHwgbG9hZGluZyxcbn07XG5cbmNvbnN0IEJ1dHRvbiA9IHByb3BzID0+IHtcbiAgICBpZiAocHJvcHMuaHJlZiAmJiB0YWdOYW1lID09PSAnYnV0dG9uJykge1xuICAgICAgICB0YWdOYW1lID0gJ2EnO1xuICAgIH1cbiAgICBpZiAodGFnTmFtZSA9PT0gJ2J1dHRvbicpIHtcbiAgICAgICAgLy8gc2V0IHR5cGUgb2YgaHRtbCBidXR0b25cbiAgICAgICAgcHJvcHMudHlwZSA9IGh0bWxUeXBlO1xuICAgIH1cbiAgICAvLyBkaXNhYmxlIGJ1dHRvbiB3aGVuIGxvYWRpbmdcbiAgICAvKiBpZiAobG9hZGluZykgcHJvcHMuZGlzYWJsZWQgPSB0cnVlOyAqL1xuICAgIHJldHVybiBoKHRhZ05hbWUsIHByb3BzLCBwcm9wcy5jaGlsZHJlbik7XG59O1xuXG4vLyBoYWNrIGZvciBsb2FkaW5nIHRyYW5zaXRpb24gb2Ygd2lkdGhcbmlmICghaWNvbiAmJiBBcnJheS5pc0FycmF5KGNoaWxkcmVuKSkge1xuICAgIGNoaWxkcmVuLmZvckVhY2goKGNoaWxkLCBpbmRleCkgPT4ge1xuICAgICAgICBpZiAoY2hpbGQpIHtcbiAgICAgICAgICAgIGlmIChjaGlsZC50eXBlID09PSAxIHx8IGlzU3RyaW5nT3JOdW1iZXJOb3RFbXB0eShjaGlsZCkpIHtcbiAgICAgICAgICAgICAgICAvLyBpcyBhIHRleHQgbm9kZVxuICAgICAgICAgICAgICAgIC8vIHdyYXAgdGV4dCBub2RlIHdpdGggc3BhblxuICAgICAgICAgICAgICAgIGNoaWxkcmVuW2luZGV4XSA9IGgoJ3NwYW4nLCBudWxsLCBmdW5jdGlvbigpIHt0cnkge3JldHVybiBbY2hpbGQgXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIHdoZXRoZXIgdGhlIGljb24gaXMgb24gdGhlIGxlZnQgc2lkZSBvciByaWdodFxuICAgICAgICAgICAgaWYgKGluZGV4ID09PSAwKSB7XG4gICAgICAgICAgICAgICAgaWYgKGNoaWxkLmNsYXNzTmFtZSAmJiBjaGlsZC5jbGFzc05hbWUuaW5kZXhPZignaWNvbicpID4gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lT2JqWydrLWljb24tbGVmdCddID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGluZGV4ID09PSBjaGlsZHJlbi5sZW5ndGggLSAxKSB7XG4gICAgICAgICAgICAgICAgaWYgKGNoaWxkLmNsYXNzTmFtZSAmJiBjaGlsZC5jbGFzc05hbWUuaW5kZXhPZignaWNvbicpID4gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lT2JqWydrLWljb24tcmlnaHQnXSA9IHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSk7XG59IGVsc2UgaWYgKGlzU3RyaW5nT3JOdW1iZXJOb3RFbXB0eShjaGlsZHJlbikpIHtcbiAgICAvLyB3cmFwIHRleHQgbm9kZSB3aXRoIHNwYW5cbiAgICBjaGlsZHJlbiA9IGgoJ3NwYW4nLCBudWxsLCBmdW5jdGlvbigpIHt0cnkge3JldHVybiBbY2hpbGRyZW4gXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKSlcbn1cblxucmV0dXJuIGgoQnV0dG9uLCB7J2NsYXNzTmFtZSc6IF9jbGFzc05hbWUoZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW2NsYXNzTmFtZU9iaiBdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpKSwgLi4uZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW3Jlc3QgXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKSwgLi4uZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW3RhZ1Byb3BzIF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcyksICdldi1jbGljayc6IGZ1bmN0aW9uKCkge3RyeSB7cmV0dXJuIFtzZWxmLl9vbkNsaWNrIF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcyksICd0YWJpbmRleCc6IGZ1bmN0aW9uKCkge3RyeSB7cmV0dXJuIFtkaXNhYmxlZCB8fCBsb2FkaW5nID8gXCItMVwiIDogdGFiaW5kZXggXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKSwgJ2V2LW1vdXNldXAnOiBmdW5jdGlvbigpIHt0cnkge3JldHVybiBbc2VsZi5fYmx1ciBdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpLCAnY2hpbGRyZW4nOiBbJ1xcbiAgICAnLCBmdW5jdGlvbigpIHt0cnkge3JldHVybiBbbG9hZGluZyA/IFxuICAgICAgICBjbGFzc05hbWVPYmpbJ2staWNvbi1yaWdodCddID9cbiAgICAgICAgICAgIFtjaGlsZHJlbiwgaCgnaScsIG51bGwsIG51bGwsICdrLWljb24gaW9uLWxvYWQtYyBpY29uLWxvYWRpbmcnKV0gOlxuICAgICAgICAgICAgW2goJ2knLCBudWxsLCBudWxsLCAnay1pY29uIGlvbi1sb2FkLWMgaWNvbi1sb2FkaW5nJyksIGNoaWxkcmVuXSA6XG4gICAgICAgIGNoaWxkcmVuIFxuICAgIF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcyksICdcXG4gICAgJywgZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW19jaGVja1R5cGUgIT09ICdub25lJyBdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpID8gaCgnaW5wdXQnLCB7J3R5cGUnOiBmdW5jdGlvbigpIHt0cnkge3JldHVybiBbX2NoZWNrVHlwZSBdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpLCAnbmFtZSc6IGZ1bmN0aW9uKCkge3RyeSB7cmV0dXJuIFtuYW1lIF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcyksICdjaGVja2VkJzogZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW2NoZWNrZWQgXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKSwgJ3RhYmluZGV4JzogJy0xJ30pIDogdW5kZWZpbmVkXSwgJ19jb250ZXh0JzogJHRoaXN9KVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvYnV0dG9uL2luZGV4LnZkdCIsImltcG9ydCBJbnRhY3QgZnJvbSAnaW50YWN0JztcbmltcG9ydCB7aXNUZXh0Vk5vZGUsIGZpbmRQYXJlbnRDb21wb25lbnR9IGZyb20gJy4uL3V0aWxzJztcbmltcG9ydCBEcm9wZG93bk1lbnUgZnJvbSAnLi9tZW51JztcblxuY29uc3QgaCA9IEludGFjdC5WZHQubWlzcy5oO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEcm9wZG93biBleHRlbmRzIEludGFjdCB7XG4gICAgQEludGFjdC50ZW1wbGF0ZSgpXG4gICAgc3RhdGljIHRlbXBsYXRlKGRhdGEpIHtcbiAgICAgICAgcmV0dXJuIGRhdGEuZ2V0KCdjaGlsZHJlbicpO1xuICAgIH1cblxuICAgIGRlZmF1bHRzKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdHJpZ2dlcjogJ2hvdmVyJyxcbiAgICAgICAgICAgIGRpc2FibGVkOiBmYWxzZSxcbiAgICAgICAgfVxuICAgIH1cblxuICAgIF9pbml0KCkge1xuICAgICAgICB0aGlzLl9zYXZlT3JpZ2luYWxFdmVudHMoKTtcbiAgICAgICAgdGhpcy5vbignJHJlY2VpdmU6Y2hpbGRyZW4nLCAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLl9zYXZlT3JpZ2luYWxFdmVudHMoKTtcbiAgICAgICAgfSwge2tlZXA6IHRydWV9KTtcbiAgICB9XG5cbiAgICBfc2F2ZU9yaWdpbmFsRXZlbnRzKCkge1xuICAgICAgICBsZXQge2NoaWxkcmVuLCB0cmlnZ2VyLCBjbGFzc05hbWUsIC4uLnJlc3R9ID0gdGhpcy5nZXQoKTtcbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoY2hpbGRyZW4pKSB7XG4gICAgICAgICAgICBjaGlsZHJlbiA9IGNoaWxkcmVuWzBdO1xuICAgICAgICB9IFxuICAgICAgICBpZiAoaXNUZXh0Vk5vZGUoY2hpbGRyZW4pKSB7XG4gICAgICAgICAgICBjaGlsZHJlbiA9IGgoJ3NwYW4nLCByZXN0LCBjaGlsZHJlbiwgY2xhc3NOYW1lKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIHNhdmUgdGhlIG9yaWdpbmFsIGV2ZW50XG4gICAgICAgIGNvbnN0IG9yaWdpblByb3BzID0gY2hpbGRyZW4ucHJvcHM7XG4gICAgICAgIGxldCBoYXNTYXZlZCA9IGZhbHNlO1xuICAgICAgICBpZiAoIW9yaWdpblByb3BzLl9oYXNTYXZlZCkge1xuICAgICAgICAgICAgY2hpbGRyZW4uX2V2Q2xpY2sgPSBvcmlnaW5Qcm9wc1snZXYtY2xpY2snXTtcbiAgICAgICAgICAgIGNoaWxkcmVuLl9ldk1vdXNlRW50ZXIgPSBvcmlnaW5Qcm9wc1snZXYtbW91c2VlbnRlciddO1xuICAgICAgICAgICAgY2hpbGRyZW4uX2V2TW91c2VMZWF2ZSA9IG9yaWdpblByb3BzWydldi1tb3VzZWxlYXZlJ107XG4gICAgICAgICAgICBoYXNTYXZlZCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgcHJvcHMgPSB7fTtcbiAgICAgICAgLy8gaWYgKHRyaWdnZXIgPT09ICdjbGljaycpIHtcbiAgICAgICAgICAgIHByb3BzWydldi1jbGljayddID0gdGhpcy5zaG93LmJpbmQodGhpcywgY2hpbGRyZW4uX2V2Q2xpY2spO1xuICAgICAgICAvLyB9IGVsc2Uge1xuICAgICAgICBpZiAodHJpZ2dlciA9PT0gJ2hvdmVyJykge1xuICAgICAgICAgICAgcHJvcHNbJ2V2LW1vdXNlZW50ZXInXSA9IHRoaXMuc2hvdy5iaW5kKHRoaXMsIGNoaWxkcmVuLl9ldk1vdXNlRW50ZXIpO1xuICAgICAgICAgICAgcHJvcHNbJ2V2LW1vdXNlbGVhdmUnXSA9IHRoaXMuaGlkZS5iaW5kKHRoaXMsIGNoaWxkcmVuLl9ldk1vdXNlTGVhdmUpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChoYXNTYXZlZCkge1xuICAgICAgICAgICAgcHJvcHMuX2hhc1NhdmVkID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBjaGlsZHJlbi5wcm9wcyA9IHsuLi5jaGlsZHJlbi5wcm9wcywgLi4ucHJvcHN9O1xuICAgICAgICB0aGlzLnNldCgnY2hpbGRyZW4nLCBjaGlsZHJlbiwge3NpbGVudDogdHJ1ZX0pO1xuICAgIH1cblxuICAgIF9tb3VudCgpIHtcbiAgICAgICAgLy8gdGhlIG5leHQgc2libGluZyBpcyBEcm9wZG93bk1lbnVcbiAgICAgICAgLy8gd2UgY2FuIG5vdCBnZXQgdGhlIG1lbnUgYnkgY2FsbCBnZXQoJ21lbnUnKSBkaXJlY3RseSxcbiAgICAgICAgLy8gYmVjYXVzZSB0aGUgdk5vZGUgbWF5IGJlIGNsb25lZFxuICAgICAgICBjb25zdCBzaWJsaW5ncyA9IHRoaXMucGFyZW50Vk5vZGUuY2hpbGRyZW47XG4gICAgICAgIGNvbnN0IGluZGV4ID0gc2libGluZ3MuaW5kZXhPZih0aGlzLnZOb2RlKTtcbiAgICAgICAgY29uc3QgbWVudSA9IHNpYmxpbmdzW2luZGV4ICsgMV07XG4gICAgICAgIG1lbnUuY2hpbGRyZW4uZHJvcGRvd24gPSB0aGlzO1xuICAgICAgICB0aGlzLm1lbnUgPSBtZW51O1xuICAgIH1cblxuICAgIHNob3coZm4sIGUsIGlzRm9jdXMpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBmbiA9PT0gJ2Z1bmN0aW9uJykgZm4oZSk7XG5cbiAgICAgICAgaWYgKHRoaXMuZ2V0KCdkaXNhYmxlZCcpKSByZXR1cm47XG5cbiAgICAgICAgY29uc3QgbWVudSA9IHRoaXMubWVudS5jaGlsZHJlbjtcbiAgICAgICAgbWVudS5zaG93KCk7XG5cbiAgICAgICAgaWYgKGlzRm9jdXMpIHtcbiAgICAgICAgICAgIG1lbnUuZm9jdXNJdGVtQnlJbmRleCgwKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGhpZGUoZm4sIGUsIGltbWVkaWF0ZWx5KSB7XG4gICAgICAgIGlmICh0eXBlb2YgZm4gPT09ICdmdW5jdGlvbicpIGZuKGUpO1xuXG4gICAgICAgIGlmICh0aGlzLmdldCgnZGlzYWJsZWQnKSkgcmV0dXJuO1xuXG4gICAgICAgIGNvbnN0IG1lbnUgPSB0aGlzLm1lbnUuY2hpbGRyZW47XG4gICAgICAgIG1lbnUuaGlkZShpbW1lZGlhdGVseSk7XG4gICAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9kcm9wZG93bi9kcm9wZG93bi5qcyIsImltcG9ydCBJbnRhY3QgZnJvbSAnaW50YWN0JztcbmltcG9ydCBEcm9wZG93biBmcm9tICcuL2Ryb3Bkb3duJztcbmltcG9ydCBEcm9wZG93bk1lbnUgZnJvbSAnLi9tZW51JztcbmltcG9ydCBEcm9wZG93bkl0ZW0gZnJvbSAnLi9pdGVtJztcbmltcG9ydCAnLi4vLi4vc3R5bGVzL2twYy5zdHlsJztcbmltcG9ydCAnLi9pbmRleC5zdHlsJztcblxuY29uc3QgaCA9IEludGFjdC5WZHQubWlzcy5oO1xuXG5mdW5jdGlvbiBXcmFwcGVyKHByb3BzLCBpblZ1ZSkge1xuICAgIGxldCB7XG4gICAgICAgIGNoaWxkcmVuLCBwb3NpdGlvbiwga2V5LFxuICAgICAgICByZWYsIC4uLnJlc3RcbiAgICB9ID0gcHJvcHM7XG5cbiAgICBjb25zdCBlbGVtZW50ID0gY2hpbGRyZW5bMF07XG4gICAgY29uc3QgbWVudSA9IGNoaWxkcmVuWzFdO1xuXG4gICAgbWVudS5wcm9wcyA9IHtcbiAgICAgICAgcG9zaXRpb24sIFxuICAgICAgICBrZXk6IGtleSA9PSBudWxsID8ga2V5IDogYCR7a2V5fS5tZW51YCxcbiAgICAgICAgLi4ucmVzdCxcbiAgICAgICAgLi4ubWVudS5wcm9wcyxcbiAgICB9O1xuXG4gICAgcmV0dXJuICFpblZ1ZSA/IFxuICAgICAgICBbXG4gICAgICAgICAgICBoKERyb3Bkb3duLCB7XG4gICAgICAgICAgICAgICAga2V5OiBrZXkgPT0gbnVsbCA/IGtleSA6IGAke2tleX0udHJpZ2dlcmAsXG4gICAgICAgICAgICAgICAgcmVmOiByZWYsXG4gICAgICAgICAgICAgICAgY2hpbGRyZW46IGVsZW1lbnQsIFxuICAgICAgICAgICAgICAgIC4uLnJlc3RcbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgbWVudVxuICAgICAgICBdIDpcbiAgICAgICAgaChEcm9wZG93blZ1ZVdyYXBwZXIsIHtcbiAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgICAgaChEcm9wZG93biwge1xuICAgICAgICAgICAgICAgICAgICBrZXk6IGtleSA9PSBudWxsID8ga2V5IDogYCR7a2V5fS50cmlnZ2VyYCxcbiAgICAgICAgICAgICAgICAgICAgcmVmOiByZWYsXG4gICAgICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBbZWxlbWVudF0sIFxuICAgICAgICAgICAgICAgICAgICAuLi5yZXN0XG4gICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgbWVudVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIC4uLnJlc3RcbiAgICAgICAgfSk7XG59XG5cbi8vIFZ1ZSBvbmx5IHN1cHBvcnQgcmV0dXJuIG9uZSBlbGVtZW50IGZyb20gZnVuY3Rpb25hbCBjb21wb25lbnQsXG4vLyBzbyB3ZSB3cmFwIHRoZW0uIFRoaXMgd2lsbCBsZWFkIHRvIGRhbWFnZSB0aGUgZG9tIHN0cnVjdGlvbixcbi8vIGJlY2F1c2Ugd2UgbXVzdCB3cmFwIHRoZW0gd2l0aCBhIGRpdlxuY29uc3QgX2NsYXNzTmFtZSA9IEludGFjdC5WZHQudXRpbHMuY2xhc3NOYW1lO1xuY2xhc3MgRHJvcGRvd25WdWVXcmFwcGVyIGV4dGVuZHMgSW50YWN0IHtcbiAgICB0ZW1wbGF0ZShkYXRhKSB7XG4gICAgICAgIGNvbnN0IHtjbGFzc05hbWUsIGNoaWxkcmVuLCAuLi5yZXN0fSA9IGRhdGEuZ2V0KCk7XG4gICAgICAgIHJldHVybiBoKCdkaXYnLCByZXN0LCBjaGlsZHJlbiwgX2NsYXNzTmFtZSh7XG4gICAgICAgICAgICAnay1kcm9wZG93bic6IHRydWUsXG4gICAgICAgICAgICBbY2xhc3NOYW1lXTogY2xhc3NOYW1lLFxuICAgICAgICB9KSk7XG4gICAgfVxufVxuXG5jb25zdCBfV3JhcHBlciA9IEludGFjdC5mdW5jdGlvbmFsV3JhcHBlciA/XG4gICAgSW50YWN0LmZ1bmN0aW9uYWxXcmFwcGVyKFdyYXBwZXIpIDogV3JhcHBlcjtcblxuZXhwb3J0IGRlZmF1bHQgX1dyYXBwZXI7XG5cbmV4cG9ydCB7X1dyYXBwZXIgYXMgRHJvcGRvd24sIERyb3Bkb3duTWVudSwgRHJvcGRvd25JdGVtfTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvZHJvcGRvd24vaW5kZXguanMiLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuICAgIGlmKG1vZHVsZS5ob3QpIHtcbiAgICAgIC8vIDE1Mjc3NTQzOTYzMjJcbiAgICAgIHZhciBjc3NSZWxvYWQgPSByZXF1aXJlKFwiIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtaG90LWxvYWRlci9ob3RNb2R1bGVSZXBsYWNlbWVudC5qc1wiKShtb2R1bGUuaWQsIHtcImZpbGVNYXBcIjpcIntmaWxlTmFtZX1cIn0pO1xuICAgICAgbW9kdWxlLmhvdC5kaXNwb3NlKGNzc1JlbG9hZCk7XG4gICAgICBtb2R1bGUuaG90LmFjY2VwdCh1bmRlZmluZWQsIGNzc1JlbG9hZCk7XG4gICAgfVxuICBcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2NvbXBvbmVudHMvZHJvcGRvd24vaW5kZXguc3R5bFxuLy8gbW9kdWxlIGlkID0gLi9jb21wb25lbnRzL2Ryb3Bkb3duL2luZGV4LnN0eWxcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIiwiaW1wb3J0IEludGFjdCBmcm9tICdpbnRhY3QnO1xuaW1wb3J0IHRlbXBsYXRlIGZyb20gJy4vaXRlbS52ZHQnO1xuaW1wb3J0IERyb3Bkb3duIGZyb20gJy4vZHJvcGRvd24nO1xuaW1wb3J0IERyb3Bkb3duTWVudSBmcm9tICcuL21lbnUnO1xuaW1wb3J0IHtmaW5kUGFyZW50Q29tcG9uZW50fSBmcm9tICcuLi91dGlscyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERyb3Bkb3duSXRlbSBleHRlbmRzIEludGFjdCB7XG4gICAgQEludGFjdC50ZW1wbGF0ZSgpXG4gICAgc3RhdGljIHRlbXBsYXRlID0gdGVtcGxhdGU7XG5cbiAgICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgICAgICBkaXNhYmxlZDogQm9vbGVhbixcbiAgICAgICAgaGlkZU9uU2VsZWN0OiBCb29sZWFuLFxuICAgIH07XG5cbiAgICBkZWZhdWx0cygpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGRpc2FibGVkOiBmYWxzZSxcbiAgICAgICAgICAgIGhpZGVPblNlbGVjdDogdHJ1ZSxcblxuICAgICAgICAgICAgX2lzRm9jdXM6IGZhbHNlLFxuICAgICAgICB9O1xuICAgIH1cblxuICAgIF9pbml0KCkge1xuICAgICAgICAvLyBpZiBzZWxlY3RlZCBoaWRlIGFsbCBkcm9wZG93biBtZW51XG4gICAgICAgIHRoaXMub24oJ3NlbGVjdCcsICgpID0+IHtcbiAgICAgICAgICAgIGlmICh0aGlzLmdldCgnaGlkZU9uU2VsZWN0JykpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBhbmNlc3RvciA9IHRoaXMuX2ZpbmRBbmNlc3RvckRyb3Bkb3duTWVudSgpO1xuICAgICAgICAgICAgICAgIGFuY2VzdG9yLmhpZGUodHJ1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIF9tb3VudCgpIHtcbiAgICAgICAgY29uc3QgcGFyZW50ID0gdGhpcy5wYXJlbnQgPSB0aGlzLl9maW5kQW5jZXN0b3JEcm9wZG93bk1lbnUodHJ1ZSk7XG4gICAgICAgIHBhcmVudC5pdGVtcy5wdXNoKHRoaXMpO1xuICAgIH1cblxuICAgIF9vbkNsaWNrKGUpIHtcbiAgICAgICAgaWYgKHRoaXMuZ2V0KCdkaXNhYmxlZCcpKSByZXR1cm47XG5cbiAgICAgICAgdGhpcy50cmlnZ2VyKCdjbGljaycsIGUpO1xuXG4gICAgICAgIC8vIGlzIG5vdCBhIHN1YiBkcm9wZG93biB0cmlnZ2VyXG4gICAgICAgIGlmICh0aGlzLnBhcmVudFZOb2RlLnRhZyAhPT0gRHJvcGRvd24pIHtcbiAgICAgICAgICAgIHRoaXMudHJpZ2dlcignc2VsZWN0JywgdGhpcywgZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBfb25Nb3VzZUVudGVyKGUpIHtcbiAgICAgICAgdGhpcy50cmlnZ2VyKCdtb3VzZWVudGVyJywgZSk7XG5cbiAgICAgICAgaWYgKHRoaXMuZ2V0KCdkaXNhYmxlZCcpKSByZXR1cm47XG5cbiAgICAgICAgdGhpcy5wYXJlbnQuZm9jdXNJdGVtKHRoaXMpO1xuICAgIH1cblxuICAgIF9vbk1vdXNlTGVhdmUoZSkge1xuICAgICAgICB0aGlzLnRyaWdnZXIoJ21vdXNlbGVhdmUnLCBlKTtcbiAgICAgICAgLy8gaWYgKHRoaXMuZ2V0KCdkaXNhYmxlZCcpKSByZXR1cm47XG4gICAgfVxuXG4gICAgc2VsZWN0KCkge1xuICAgICAgICAvLyBpcyBub3QgYSBzdWIgZHJvcGRvd24gdHJpZ2dlclxuICAgICAgICBjb25zdCBkcm9wZG93biA9IHRoaXMuX2lzU3ViTWVudSgpO1xuICAgICAgICBpZiAoIWRyb3Bkb3duKSB7XG4gICAgICAgICAgICB0aGlzLnRyaWdnZXIoJ3NlbGVjdCcsIHRoaXMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZHJvcGRvd24uc2hvdygpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZm9jdXMoKSB7XG4gICAgICAgIHRoaXMuc2V0KCdfaXNGb2N1cycsIHRydWUpO1xuXG4gICAgICAgIGNvbnN0IGVsUmVjdCA9IHRoaXMuZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgICAgY29uc3QgcEVsID0gdGhpcy5wYXJlbnQucmVmcy5tZW51LmVsZW1lbnQ7XG4gICAgICAgIGNvbnN0IHBFbFJlY3QgPSBwRWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgIGNvbnN0IGJvdHRvbU92ZXJmbG93RGlzdGFuY2UgPSBlbFJlY3QuYm90dG9tIC0gcEVsUmVjdC5ib3R0b207XG4gICAgICAgIGNvbnN0IHRvcE92ZXJmbG93RGlzdGFuY2UgPSBlbFJlY3QudG9wIC0gcEVsUmVjdC50b3A7XG4gICAgICAgIFxuICAgICAgICBpZiAoYm90dG9tT3ZlcmZsb3dEaXN0YW5jZSA+IDApIHtcbiAgICAgICAgICAgIHBFbC5zY3JvbGxUb3AgKz0gYm90dG9tT3ZlcmZsb3dEaXN0YW5jZTtcbiAgICAgICAgfSBlbHNlIGlmICh0b3BPdmVyZmxvd0Rpc3RhbmNlIDwgMCkge1xuICAgICAgICAgICAgcEVsLnNjcm9sbFRvcCArPSB0b3BPdmVyZmxvd0Rpc3RhbmNlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgdW5Gb2N1cygpIHtcbiAgICAgICAgdGhpcy5zZXQoJ19pc0ZvY3VzJywgZmFsc2UpO1xuXG4gICAgICAgIGNvbnN0IGRyb3Bkb3duID0gdGhpcy5faXNTdWJNZW51KCk7XG4gICAgICAgIGlmIChkcm9wZG93bikge1xuICAgICAgICAgICAgZHJvcGRvd24uaGlkZShudWxsLCBudWxsLCB0cnVlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHNob3dNZW51QW5kRm9jdXMoKSB7XG4gICAgICAgIGNvbnN0IGRyb3Bkb3duID0gdGhpcy5faXNTdWJNZW51KCk7XG4gICAgICAgIGlmIChkcm9wZG93bikge1xuICAgICAgICAgICAgZHJvcGRvd24uc2hvdyhudWxsLCBudWxsLCB0cnVlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGhpZGVNZW51KCkge1xuICAgICAgICBjb25zdCBkcm9wZG93biA9IHRoaXMuX2lzU3ViTWVudSgpO1xuICAgICAgICBpZiAoZHJvcGRvd24pIHtcbiAgICAgICAgICAgIGRyb3Bkb3duLmhpZGUobnVsbCwgbnVsbCwgdHJ1ZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBfaXNTdWJNZW51KCkge1xuICAgICAgICBpZiAodGhpcy5wYXJlbnRWTm9kZS50YWcgPT09IERyb3Bkb3duKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5wYXJlbnRWTm9kZS5jaGlsZHJlbjtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIF9maW5kQW5jZXN0b3JEcm9wZG93bk1lbnUoaXNGaXJzdCkge1xuICAgICAgICByZXR1cm4gZmluZFBhcmVudENvbXBvbmVudChEcm9wZG93bk1lbnUsIHRoaXMsIGlzRmlyc3QpO1xuICAgIH1cblxuICAgIF9kZXN0cm95KCkge1xuICAgICAgICBjb25zdCBpdGVtcyA9IHRoaXMucGFyZW50Lml0ZW1zO1xuICAgICAgICBpdGVtcy5zcGxpY2UoaXRlbXMuaW5kZXhPZih0aGlzKSwgMSk7XG4gICAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9kcm9wZG93bi9pdGVtLmpzIiwiXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihvYmosIF9WZHQsIGJsb2NrcywgJGNhbGxlZSkge1xuX1ZkdCB8fCAoX1ZkdCA9IFZkdCk7XG5vYmogfHwgKG9iaiA9IHt9KTtcbmJsb2NrcyB8fCAoYmxvY2tzID0ge30pO1xudmFyIGggPSBfVmR0Lm1pc3MuaCwgaGMgPSBfVmR0Lm1pc3MuaGMsIGh1ID0gX1ZkdC5taXNzLmh1LCB3aWRnZXRzID0gdGhpcyAmJiB0aGlzLndpZGdldHMgfHwge30sIF9ibG9ja3MgPSB7fSwgX19ibG9ja3MgPSB7fSxcbl9fdSA9IF9WZHQudXRpbHMsIGV4dGVuZCA9IF9fdS5leHRlbmQsIF9lID0gX191LmVycm9yLCBfY2xhc3NOYW1lID0gX191LmNsYXNzTmFtZSxcbl9fbyA9IF9fdS5PcHRpb25zLCBfZ2V0TW9kZWwgPSBfX28uZ2V0TW9kZWwsIF9zZXRNb2RlbCA9IF9fby5zZXRNb2RlbCxcbl9zZXRDaGVja2JveE1vZGVsID0gX191LnNldENoZWNrYm94TW9kZWwsIF9kZXRlY3RDaGVja2JveENoZWNrZWQgPSBfX3UuZGV0ZWN0Q2hlY2tib3hDaGVja2VkLFxuX3NldFNlbGVjdE1vZGVsID0gX191LnNldFNlbGVjdE1vZGVsLFxuc2VsZiA9IHRoaXMuZGF0YSwgJHRoaXMgPSB0aGlzLCBzY29wZSA9IG9iaiwgQW5pbWF0ZSA9IHNlbGYgJiYgc2VsZi5BbmltYXRlLCBwYXJlbnQgPSAoJGNhbGxlZSB8fCB7fSkuX3N1cGVyXG4vKiBpbXBvcnQge3Byb3h5RXZlbnR9IGZyb20gJy4uL3V0aWxzJzsgKi9cblxuY29uc3Qge2NoaWxkcmVuLCBkaXNhYmxlZCwgY2xhc3NOYW1lLCBfaXNGb2N1c30gPSBzZWxmLmdldCgpO1xuXG5jb25zdCBjbGFzc05hbWVPYmogPSB7XG4gICAgJ2staXRlbSc6IHRydWUsXG4gICAgJ2stZGlzYWJsZWQnOiBkaXNhYmxlZCxcbiAgICBbY2xhc3NOYW1lXTogY2xhc3NOYW1lLFxuICAgICdrLWhvdmVyJzogX2lzRm9jdXMsXG59XG5cbnJldHVybiBoKCdkaXYnLCB7J2V2LWNsaWNrJzogZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW3NlbGYuX29uQ2xpY2sgXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKSwgJ2V2LW1vdXNlZW50ZXInOiBmdW5jdGlvbigpIHt0cnkge3JldHVybiBbc2VsZi5fb25Nb3VzZUVudGVyIF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcyksICdldi1tb3VzZWxlYXZlJzogZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW3NlbGYuX29uTW91c2VMZWF2ZSBdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpfSwgZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW2NoaWxkcmVuIF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcyksIF9jbGFzc05hbWUoZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW2NsYXNzTmFtZU9iaiBdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpKSlcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL2Ryb3Bkb3duL2l0ZW0udmR0IiwiaW1wb3J0IEludGFjdCBmcm9tICdpbnRhY3QnO1xuaW1wb3J0IHRlbXBsYXRlIGZyb20gJy4vbWVudS52ZHQnO1xuaW1wb3J0IHBvc2l0aW9uIGZyb20gJy4uL21vdmVXcmFwcGVyL3Bvc2l0aW9uJztcbmltcG9ydCB7ZmluZFBhcmVudENvbXBvbmVudCwgZ2V0VHJhbnNpdGlvbn0gZnJvbSAnLi4vdXRpbHMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEcm9wZG93bk1lbnUgZXh0ZW5kcyBJbnRhY3Qge1xuICAgIEBJbnRhY3QudGVtcGxhdGUoKVxuICAgIHN0YXRpYyB0ZW1wbGF0ZSA9IHRlbXBsYXRlO1xuXG4gICAgZGVmYXVsdHMoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBzaG93OiBmYWxzZSxcbiAgICAgICAgICAgIHRyaWdnZXI6ICdob3ZlcicsXG4gICAgICAgICAgICBwb3NpdGlvbjoge30sXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiAnc2xpZGVkb3duJyxcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBfaW5pdCgpIHtcbiAgICAgICAgdGhpcy5zdWJEcm9wZG93bnMgPSBbXTtcbiAgICAgICAgdGhpcy5pdGVtcyA9IFtdO1xuICAgICAgICB0aGlzLmZvY3VzSW5kZXggPSAtMTtcbiAgICAgICAgdGhpcy5sb2NrZWQgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBfbW91bnQoKSB7XG4gICAgICAgIGNvbnN0IHBhcmVudCA9IHRoaXMuX2ZpbmRQYXJlbnREcm9wZG93bk1lbnUoKTtcbiAgICAgICAgaWYgKHBhcmVudCkgcGFyZW50LnN1YkRyb3Bkb3ducy5wdXNoKHRoaXMpO1xuXG4gICAgICAgIGlmICh0aGlzLmdldCgnc2hvdycpKSB7XG4gICAgICAgICAgICB0aGlzLl9hZGREb2N1bWVudEV2ZW50cygpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgX2ZpbmRQYXJlbnREcm9wZG93bk1lbnUoKSB7XG4gICAgICAgIHJldHVybiBmaW5kUGFyZW50Q29tcG9uZW50KERyb3Bkb3duTWVudSwgdGhpcywgdHJ1ZSk7XG4gICAgfVxuXG4gICAgc2hvdygpIHtcbiAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMudGltZXIpO1xuICAgICAgICB0aGlzLnNldCgnc2hvdycsIHRydWUpO1xuICAgICAgICBjb25zdCBwYXJlbnQgPSB0aGlzLl9maW5kUGFyZW50RHJvcGRvd25NZW51KCk7XG4gICAgICAgIGlmIChwYXJlbnQpIHtcbiAgICAgICAgICAgIHBhcmVudC5zaG93KCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBoaWRlKGltbWVkaWF0ZWx5KSB7XG4gICAgICAgIGlmICghaW1tZWRpYXRlbHkpIHtcbiAgICAgICAgICAgIHRoaXMudGltZXIgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldCgnc2hvdycsIGZhbHNlKTtcbiAgICAgICAgICAgIH0sIDIwMCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnNldCgnc2hvdycsIGZhbHNlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHRvZ2dsZSgpIHtcbiAgICAgICAgdGhpcy5zZXQoJ3Nob3cnLCAhdGhpcy5nZXQoJ3Nob3cnKSk7XG4gICAgfVxuXG4gICAgcG9zaXRpb24oKSB7XG4gICAgICAgIHBvc2l0aW9uKHRoaXMucmVmcy5tZW51LmVsZW1lbnQsIHtcbiAgICAgICAgICAgIG15OiAnY2VudGVyIHRvcCs1JywgXG4gICAgICAgICAgICBhdDogJ2NlbnRlciBib3R0b20nLCBcbiAgICAgICAgICAgIG9mOiB0aGlzLmRyb3Bkb3duLmVsZW1lbnQsXG4gICAgICAgICAgICB1c2luZzogKGZlZWRiYWNrKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXQoJ3RyYW5zaXRpb24nLCBnZXRUcmFuc2l0aW9uKGZlZWRiYWNrKSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgLi4udGhpcy5nZXQoJ3Bvc2l0aW9uJylcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgX29uU2hvdygpIHtcbiAgICAgICAgdGhpcy5mb2N1c0luZGV4ID0gLTE7XG4gICAgICAgIHRoaXMuX2FkZERvY3VtZW50RXZlbnRzKCk7XG4gICAgICAgIHRoaXMucG9zaXRpb24oKTtcbiAgICB9XG5cbiAgICBfYWRkRG9jdW1lbnRFdmVudHMoKSB7XG4gICAgICAgIGNvbnN0IHBhcmVudCA9IHRoaXMuX2ZpbmRQYXJlbnREcm9wZG93bk1lbnUoKTtcbiAgICAgICAgaWYgKCFwYXJlbnQpIHtcbiAgICAgICAgICAgIC8vIGlmICh0aGlzLmdldCgndHJpZ2dlcicpID09PSAnY2xpY2snKSB7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLl9vbkRvY3VtZW50Q2xpY2spO1xuICAgICAgICAgICAgLy8gfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcGFyZW50LmxvY2tlZCA9IHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgdGhpcy5fb25LZXlkb3duKTtcbiAgICB9XG5cbiAgICBfcmVtb3ZlRG9jdW1lbnRFdmVudHMoKSB7XG4gICAgICAgIGNvbnN0IHBhcmVudCA9IHRoaXMuX2ZpbmRQYXJlbnREcm9wZG93bk1lbnUoKTtcbiAgICAgICAgaWYgKCFwYXJlbnQpIHtcbiAgICAgICAgICAgIC8vIGlmICh0aGlzLmdldCgndHJpZ2dlcicpID09PSAnY2xpY2snKSB7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLl9vbkRvY3VtZW50Q2xpY2spO1xuICAgICAgICAgICAgLy8gfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcGFyZW50LmxvY2tlZCA9IGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIHRoaXMuX29uS2V5ZG93bik7XG4gICAgfVxuXG4gICAgX29uRG9jdW1lbnRDbGljayhlKSB7XG4gICAgICAgIGNvbnN0IHRhcmdldCA9IGUudGFyZ2V0O1xuICAgICAgICBjb25zdCBtZW51ID0gdGhpcy5yZWZzLm1lbnUuZWxlbWVudDtcblxuICAgICAgICAvLyBpcyBhIGRyb3Bkb3duIG1lbnVcbiAgICAgICAgaWYgKG1lbnUgPT09IHRhcmdldCB8fCBtZW51LmNvbnRhaW5zKHRhcmdldCkpIHJldHVybjtcbiAgICAgICAgLy8gaXMgY2xpY2sgb24gc3ViIG1lbnVcbiAgICAgICAgaWYgKHRoaXMuX2lzQ2xpY2tTdWJNZW51KHRhcmdldCwgdGhpcy5zdWJEcm9wZG93bnMpKSByZXR1cm47XG4gICAgICAgIC8vIGN1c3RvbSBmbGFnIHRvIGluZGljYXRlIHRoYXQgdGhlIGV2ZW50IGRvZXMgbm90IGxlYWQgdG8gY2xvc2UgbWVudVxuICAgICAgICBpZiAoZS5fZHJvcGRvd24pIHJldHVybjtcblxuICAgICAgICB0aGlzLmhpZGUodHJ1ZSk7XG4gICAgfVxuXG4gICAgX29uS2V5ZG93bihlKSB7XG4gICAgICAgIGlmICh0aGlzLmxvY2tlZCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHN3aXRjaCAoZS5rZXlDb2RlKSB7XG4gICAgICAgICAgICAvLyBkb3duXG4gICAgICAgICAgICBjYXNlIDQwOlxuICAgICAgICAgICAgICAgIHRoaXMuX2ZvY3VzTmV4dEl0ZW0oZSk7IFxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgLy8gdXBcbiAgICAgICAgICAgIGNhc2UgMzg6XG4gICAgICAgICAgICAgICAgdGhpcy5fZm9jdXNQcmV2SXRlbShlKTsgXG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAvLyByaWdodFxuICAgICAgICAgICAgY2FzZSAzOTpcbiAgICAgICAgICAgICAgICB0aGlzLl9zaG93U3ViTWVudShlKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIC8vIGxlZnRcbiAgICAgICAgICAgIGNhc2UgMzc6XG4gICAgICAgICAgICAgICAgdGhpcy5faGlkZVN1Yk1lbnUoZSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAvLyBlbnRlclxuICAgICAgICAgICAgY2FzZSAxMzpcbiAgICAgICAgICAgICAgICB0aGlzLl9zZWxlY3RJdGVtKGUpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgX2ZvY3VzTmV4dEl0ZW0oZSkge1xuICAgICAgICBjb25zdCBwYXJlbnQgPSB0aGlzLl9maW5kUGFyZW50RHJvcGRvd25NZW51KCk7XG4gICAgICAgIGlmIChwYXJlbnQgJiYgdGhpcy5mb2N1c0luZGV4IDwgMCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgdGhpcy5mb2N1c0l0ZW1CeUluZGV4KHRoaXMuZm9jdXNJbmRleCArIDEsICdkb3duJyk7XG4gICAgfVxuXG4gICAgX2ZvY3VzUHJldkl0ZW0oZSkge1xuICAgICAgICBjb25zdCBwYXJlbnQgPSB0aGlzLl9maW5kUGFyZW50RHJvcGRvd25NZW51KCk7XG4gICAgICAgIGlmIChwYXJlbnQgJiYgdGhpcy5mb2N1c0luZGV4IDwgMCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgdGhpcy5mb2N1c0l0ZW1CeUluZGV4KHRoaXMuZm9jdXNJbmRleCAtIDEsICd1cCcpO1xuICAgIH1cblxuICAgIGZvY3VzSXRlbUJ5SW5kZXgoaW5kZXgsIGRpcmVjdGlvbiA9ICdkb3duJykge1xuICAgICAgICBjb25zdCBpdGVtcyA9IHRoaXMuaXRlbXM7XG4gICAgICAgIGNvbnN0IG1heCA9IGl0ZW1zLmxlbmd0aCAtIDE7XG4gICAgICAgIGNvbnN0IG9sZEluZGV4ID0gdGhpcy5mb2N1c0luZGV4O1xuXG4gICAgICAgIGZ1bmN0aW9uIGZpeEluZGV4KGluZGV4KSB7XG4gICAgICAgICAgICBpZiAoaW5kZXggPiBtYXgpIHtcbiAgICAgICAgICAgICAgICBpbmRleCA9IDA7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGluZGV4IDwgMCkge1xuICAgICAgICAgICAgICAgIGluZGV4ID0gbWF4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGluZGV4O1xuICAgICAgICB9XG5cbiAgICAgICAgaW5kZXggPSBmaXhJbmRleChpbmRleCk7XG5cbiAgICAgICAgbGV0IGkgPSAwO1xuICAgICAgICB3aGlsZSAoaSA8PSBtYXggJiYgaXRlbXNbaW5kZXhdICYmIGl0ZW1zW2luZGV4XS5nZXQoJ2Rpc2FibGVkJykpIHtcbiAgICAgICAgICAgIGluZGV4ID0gZml4SW5kZXgoZGlyZWN0aW9uID09PSAnZG93bicgPyBpbmRleCArIDEgOiBpbmRleCAtIDEpO1xuICAgICAgICAgICAgaSsrO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gYWxsIGl0ZW1zIGFyZSBkaXNhYmxlZFxuICAgICAgICBpZiAoaSA+IG1heCkgcmV0dXJuO1xuXG4gICAgICAgIHRoaXMuZm9jdXNJbmRleCA9IGluZGV4O1xuXG4gICAgICAgIGlmIChvbGRJbmRleCA+IC0xICYmIGl0ZW1zW29sZEluZGV4XSkge1xuICAgICAgICAgICAgaXRlbXNbb2xkSW5kZXhdLnVuRm9jdXMoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGl0ZW1zW2luZGV4XS5mb2N1cygpO1xuICAgIH1cblxuICAgIF9zZWxlY3RJdGVtKGUpIHtcbiAgICAgICAgdGhpcy5fc2hvd1N1Yk1lbnUoZSk7XG4gICAgICAgIGlmICh0aGlzLmZvY3VzSW5kZXggPiAtMSkge1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgdGhpcy5pdGVtc1t0aGlzLmZvY3VzSW5kZXhdLnNlbGVjdCgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgX3Nob3dTdWJNZW51KGUpIHtcbiAgICAgICAgY29uc3QgcGFyZW50ID0gdGhpcy5fZmluZFBhcmVudERyb3Bkb3duTWVudSgpO1xuICAgICAgICBpZiAoIXBhcmVudCAmJiB0aGlzLmZvY3VzSW5kZXggPCAwKSByZXR1cm47XG5cbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBpZiAocGFyZW50ICYmIHRoaXMuZm9jdXNJbmRleCA8IDApIHtcbiAgICAgICAgICAgIHRoaXMuZm9jdXNJdGVtQnlJbmRleCgwKTtcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLmZvY3VzSW5kZXggPiAtMSkge1xuICAgICAgICAgICAgdGhpcy5pdGVtc1t0aGlzLmZvY3VzSW5kZXhdLnNob3dNZW51QW5kRm9jdXMoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIF9oaWRlU3ViTWVudShlKSB7XG4gICAgICAgIGlmICh0aGlzLmZvY3VzSW5kZXggPiAtMSkge1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgdGhpcy5pdGVtc1t0aGlzLmZvY3VzSW5kZXhdLmhpZGVNZW51KCk7XG5cbiAgICAgICAgICAgIGNvbnN0IHBhcmVudCA9IGZpbmRQYXJlbnRDb21wb25lbnQoRHJvcGRvd25NZW51LCB0aGlzLCB0cnVlKTtcbiAgICAgICAgICAgIGlmIChwYXJlbnQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmRyb3Bkb3duLmhpZGUobnVsbCwgbnVsbCwgdHJ1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmb2N1c0l0ZW0oaXRlbSkge1xuICAgICAgICBjb25zdCBpbmRleCA9IHRoaXMuaXRlbXMuaW5kZXhPZihpdGVtKTtcbiAgICAgICAgdGhpcy5mb2N1c0l0ZW1CeUluZGV4KGluZGV4KTtcbiAgICB9XG5cbiAgICBfaXNDbGlja1N1Yk1lbnUodGFyZ2V0LCBzdWJNZW51cykge1xuICAgICAgICBsZXQgcmV0ID0gZmFsc2U7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc3ViTWVudXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IHN1Yk1lbnUgPSBzdWJNZW51c1tpXS5yZWZzLm1lbnU7XG4gICAgICAgICAgICBpZiAoc3ViTWVudSkge1xuICAgICAgICAgICAgICAgIGlmICh0YXJnZXQgPT09IHN1Yk1lbnUuZWxlbWVudCB8fCBzdWJNZW51LmVsZW1lbnQuY29udGFpbnModGFyZ2V0KSkge1xuICAgICAgICAgICAgICAgICAgICByZXQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByZXQgPSB0aGlzLl9pc0NsaWNrU3ViTWVudSh0YXJnZXQsIHN1Yk1lbnVzW2ldLnN1YkRyb3Bkb3ducyk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChyZXQpIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmV0O1xuICAgIH1cblxuICAgIF9kZXN0cm95KCkge1xuICAgICAgICBjb25zdCBwYXJlbnQgPSB0aGlzLl9maW5kUGFyZW50RHJvcGRvd25NZW51KCk7XG4gICAgICAgIGlmIChwYXJlbnQpIHtcbiAgICAgICAgICAgIGNvbnN0IHN1YkRyb3Bkb3ducyA9IHBhcmVudC5zdWJEcm9wZG93bnM7XG4gICAgICAgICAgICBzdWJEcm9wZG93bnMuc3BsaWNlKHN1YkRyb3Bkb3ducy5pbmRleE9mKHRoaXMpLCAxKTtcbiAgICAgICAgfSBcbiAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMudGltZXIpO1xuICAgICAgICB0aGlzLl9yZW1vdmVEb2N1bWVudEV2ZW50cygpO1xuICAgIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvZHJvcGRvd24vbWVudS5qcyIsImltcG9ydCBNb3ZlV3JhcHBlciBmcm9tICcuLi9tb3ZlV3JhcHBlcic7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihvYmosIF9WZHQsIGJsb2NrcywgJGNhbGxlZSkge1xuX1ZkdCB8fCAoX1ZkdCA9IFZkdCk7XG5vYmogfHwgKG9iaiA9IHt9KTtcbmJsb2NrcyB8fCAoYmxvY2tzID0ge30pO1xudmFyIGggPSBfVmR0Lm1pc3MuaCwgaGMgPSBfVmR0Lm1pc3MuaGMsIGh1ID0gX1ZkdC5taXNzLmh1LCB3aWRnZXRzID0gdGhpcyAmJiB0aGlzLndpZGdldHMgfHwge30sIF9ibG9ja3MgPSB7fSwgX19ibG9ja3MgPSB7fSxcbl9fdSA9IF9WZHQudXRpbHMsIGV4dGVuZCA9IF9fdS5leHRlbmQsIF9lID0gX191LmVycm9yLCBfY2xhc3NOYW1lID0gX191LmNsYXNzTmFtZSxcbl9fbyA9IF9fdS5PcHRpb25zLCBfZ2V0TW9kZWwgPSBfX28uZ2V0TW9kZWwsIF9zZXRNb2RlbCA9IF9fby5zZXRNb2RlbCxcbl9zZXRDaGVja2JveE1vZGVsID0gX191LnNldENoZWNrYm94TW9kZWwsIF9kZXRlY3RDaGVja2JveENoZWNrZWQgPSBfX3UuZGV0ZWN0Q2hlY2tib3hDaGVja2VkLFxuX3NldFNlbGVjdE1vZGVsID0gX191LnNldFNlbGVjdE1vZGVsLFxuc2VsZiA9IHRoaXMuZGF0YSwgJHRoaXMgPSB0aGlzLCBzY29wZSA9IG9iaiwgQW5pbWF0ZSA9IHNlbGYgJiYgc2VsZi5BbmltYXRlLCBwYXJlbnQgPSAoJGNhbGxlZSB8fCB7fSkuX3N1cGVyXG5cblxuY29uc3Qge2NoaWxkcmVuLCBzaG93LCB0cmlnZ2VyLCBjbGFzc05hbWUsIHRyYW5zaXRpb259ID0gc2VsZi5nZXQoKTtcblxuY29uc3QgZXZlbnRzID0ge307XG4vLyBubyBtYXR0ZXIgd2hhdCB0aGUgdHJpZ2dlciBpcywgd2Ugc2hvdWxkIHNob3cgbWVudSB3aGVuIGVudGVyIGl0LlxuLy8gZm9yIHRoaXMgY2FzZTogaG92ZXIgdHJpZ2dlciBuZXN0cyBjbGljayB0cmlnZ2VyXG5ldmVudHNbJ2V2LW1vdXNlZW50ZXInXSA9IHNlbGYuc2hvdztcbmlmICh0cmlnZ2VyID09PSAnaG92ZXInKSB7XG4gICAgZXZlbnRzWydldi1tb3VzZWxlYXZlJ10gPSBzZWxmLmhpZGUuYmluZChzZWxmLCBmYWxzZSk7XG59XG5cbnJldHVybiBoKE1vdmVXcmFwcGVyLCB7J19wYXJlbnQnOiBmdW5jdGlvbigpIHt0cnkge3JldHVybiBbc2VsZiBdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpLCAnY2hpbGRyZW4nOiBmdW5jdGlvbigpIHt0cnkge3JldHVybiBbc2hvdyBdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpID8gaChBbmltYXRlLCB7J2NsYXNzTmFtZSc6IF9jbGFzc05hbWUoZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW3tcImstZHJvcGRvd24tbWVudVwiOiB0cnVlLCBbY2xhc3NOYW1lXTogY2xhc3NOYW1lfSBdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpKSwgJ2E6dHJhbnNpdGlvbic6IGZ1bmN0aW9uKCkge3RyeSB7cmV0dXJuIFt0cmFuc2l0aW9uIF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcyksIC4uLmZ1bmN0aW9uKCkge3RyeSB7cmV0dXJuIFtldmVudHMgXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKSwgJ2E6ZGVsYXlEZXN0cm95JzogZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW2ZhbHNlIF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcyksICdldi0kZGVzdHJveWVkJzogZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW3NlbGYuX3JlbW92ZURvY3VtZW50RXZlbnRzIF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcyksICdldi0kbW91bnRlZCc6IGZ1bmN0aW9uKCkge3RyeSB7cmV0dXJuIFtzZWxmLl9vblNob3cgXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKSwgJ2NoaWxkcmVuJzogZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW2NoaWxkcmVuIF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcyksICdfY29udGV4dCc6ICR0aGlzfSwgbnVsbCwgbnVsbCwgbnVsbCwgZnVuY3Rpb24oaSkge3dpZGdldHNbJ21lbnUnXSA9IGl9KSA6IHVuZGVmaW5lZCwgJ19jb250ZXh0JzogJHRoaXN9LCBudWxsLCBudWxsLCBudWxsLCBmdW5jdGlvbihpKSB7d2lkZ2V0c1snd3JhcHBlciddID0gaX0pXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9kcm9wZG93bi9tZW51LnZkdCIsImltcG9ydCBJbnRhY3QgZnJvbSAnaW50YWN0JztcbmltcG9ydCB0ZW1wbGF0ZSBmcm9tICcuL2luZGV4LnZkdCc7XG5pbXBvcnQgJy4uLy4uL3N0eWxlcy9rcGMuc3R5bCc7XG5pbXBvcnQgJy4vaW5kZXguc3R5bCc7XG5pbXBvcnQge3NlbGVjdElucHV0fSBmcm9tICcuLi91dGlscyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIElucHV0IGV4dGVuZHMgSW50YWN0IHtcbiAgICBASW50YWN0LnRlbXBsYXRlXG4gICAgc3RhdGljIHRlbXBsYXRlID0gdGVtcGxhdGU7XG5cbiAgICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgIHJlYWRvbmx5OiBCb29sZWFuLFxuICAgICAgICBjbGVhcmFibGU6IEJvb2xlYW4sXG4gICAgICAgIGRpc2FibGVkOiBCb29sZWFuLFxuICAgICAgICBmbHVpZDogQm9vbGVhbixcbiAgICB9O1xuXG4gICAgZGVmYXVsdHMoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB0eXBlOiAndGV4dCcsIC8vIHRleHQgfCB0ZXh0YXJlYVxuICAgICAgICAgICAgbmFtZTogdW5kZWZpbmVkLFxuICAgICAgICAgICAgdmFsdWU6IHVuZGVmaW5lZCxcbiAgICAgICAgICAgIGRlZmF1bHRWYWx1ZTogdW5kZWZpbmVkLFxuICAgICAgICAgICAgcGxhY2Vob2xkZXI6IHVuZGVmaW5lZCxcbiAgICAgICAgICAgIHJlYWRvbmx5OiBmYWxzZSxcbiAgICAgICAgICAgIGNsZWFyYWJsZTogZmFsc2UsXG4gICAgICAgICAgICBkaXNhYmxlZDogZmFsc2UsXG4gICAgICAgICAgICBzaXplOiAnZGVmYXVsdCcsXG4gICAgICAgICAgICByb3dzOiAyLFxuICAgICAgICAgICAgc3BlbGxjaGVjazogZmFsc2UsXG4gICAgICAgICAgICBhdXRvV2lkdGg6IGZhbHNlLFxuICAgICAgICAgICAgZmx1aWQ6IGZhbHNlLFxuICAgICAgICAgICAgd2lkdGg6IHVuZGVmaW5lZCxcbiAgICAgICAgICAgIHRhYmluZGV4OiB1bmRlZmluZWQsXG4gICAgICAgICAgICBhdXRvY29tcGxldGU6IHVuZGVmaW5lZCxcbiAgICAgICAgfVxuICAgIH1cblxuICAgIF9pbml0KCkge1xuICAgICAgICB0aGlzLm9uKCckY2hhbmdlZDp2YWx1ZScsIHRoaXMuX2FkanVzdFdpZHRoKTtcbiAgICAgICAgdGhpcy5vbignJGNoYW5nZWQ6cGxhY2Vob2xkZXInLCB0aGlzLl9hZGp1c3RXaWR0aCk7XG4gICAgfVxuXG4gICAgX21vdW50KCkge1xuICAgICAgICB0aGlzLl9hZGp1c3RXaWR0aCgpO1xuICAgIH1cblxuICAgIF9hZGp1c3RXaWR0aCgpIHtcbiAgICAgICAgaWYgKHRoaXMuZ2V0KCdhdXRvV2lkdGgnKSkge1xuICAgICAgICAgICAgY29uc3Qgd2lkdGggPSB0aGlzLnJlZnMuZmFrZS5vZmZzZXRXaWR0aCB8fCAxO1xuICAgICAgICAgICAgdGhpcy5yZWZzLmlucHV0LnN0eWxlLndpZHRoID0gYCR7d2lkdGggKyAxfXB4YDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNsZWFyKGUpIHtcbiAgICAgICAgdGhpcy5zZXQoJ3ZhbHVlJywgJycpO1xuICAgICAgICB0aGlzLmZvY3VzKCk7XG4gICAgICAgIHRoaXMudHJpZ2dlcignY2xlYXInLCBlKTtcbiAgICB9XG5cbiAgICBzZWxlY3QoKSB7XG4gICAgICAgIHNlbGVjdElucHV0KHRoaXMucmVmcy5pbnB1dCk7XG4gICAgfVxuXG4gICAgZm9jdXMoKSB7XG4gICAgICAgIHRoaXMucmVmcy5pbnB1dC5mb2N1cygpO1xuICAgIH1cblxuICAgIF9vbklucHV0KGUpIHtcbiAgICAgICAgdGhpcy5zZXQoJ3ZhbHVlJywgZS50YXJnZXQudmFsdWUpO1xuICAgICAgICB0aGlzLnRyaWdnZXIoJ2lucHV0JywgZSk7XG4gICAgfVxuXG4gICAgX3Byb3h5RXZlbnQobmFtZSwgZSkge1xuICAgICAgICB0aGlzLnRyaWdnZXIobmFtZSwgZSk7XG4gICAgfVxufVxuXG5leHBvcnQge0lucHV0fTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvaW5wdXQvaW5kZXguanMiLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuICAgIGlmKG1vZHVsZS5ob3QpIHtcbiAgICAgIC8vIDE1Mjc3NTQzOTYzMTNcbiAgICAgIHZhciBjc3NSZWxvYWQgPSByZXF1aXJlKFwiIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtaG90LWxvYWRlci9ob3RNb2R1bGVSZXBsYWNlbWVudC5qc1wiKShtb2R1bGUuaWQsIHtcImZpbGVNYXBcIjpcIntmaWxlTmFtZX1cIn0pO1xuICAgICAgbW9kdWxlLmhvdC5kaXNwb3NlKGNzc1JlbG9hZCk7XG4gICAgICBtb2R1bGUuaG90LmFjY2VwdCh1bmRlZmluZWQsIGNzc1JlbG9hZCk7XG4gICAgfVxuICBcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2NvbXBvbmVudHMvaW5wdXQvaW5kZXguc3R5bFxuLy8gbW9kdWxlIGlkID0gLi9jb21wb25lbnRzL2lucHV0L2luZGV4LnN0eWxcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIiwiaW1wb3J0IHthZGRTdHlsZX0gZnJvbSAnLi4vdXRpbHMnO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24ob2JqLCBfVmR0LCBibG9ja3MsICRjYWxsZWUpIHtcbl9WZHQgfHwgKF9WZHQgPSBWZHQpO1xub2JqIHx8IChvYmogPSB7fSk7XG5ibG9ja3MgfHwgKGJsb2NrcyA9IHt9KTtcbnZhciBoID0gX1ZkdC5taXNzLmgsIGhjID0gX1ZkdC5taXNzLmhjLCBodSA9IF9WZHQubWlzcy5odSwgd2lkZ2V0cyA9IHRoaXMgJiYgdGhpcy53aWRnZXRzIHx8IHt9LCBfYmxvY2tzID0ge30sIF9fYmxvY2tzID0ge30sXG5fX3UgPSBfVmR0LnV0aWxzLCBleHRlbmQgPSBfX3UuZXh0ZW5kLCBfZSA9IF9fdS5lcnJvciwgX2NsYXNzTmFtZSA9IF9fdS5jbGFzc05hbWUsXG5fX28gPSBfX3UuT3B0aW9ucywgX2dldE1vZGVsID0gX19vLmdldE1vZGVsLCBfc2V0TW9kZWwgPSBfX28uc2V0TW9kZWwsXG5fc2V0Q2hlY2tib3hNb2RlbCA9IF9fdS5zZXRDaGVja2JveE1vZGVsLCBfZGV0ZWN0Q2hlY2tib3hDaGVja2VkID0gX191LmRldGVjdENoZWNrYm94Q2hlY2tlZCxcbl9zZXRTZWxlY3RNb2RlbCA9IF9fdS5zZXRTZWxlY3RNb2RlbCxcbnNlbGYgPSB0aGlzLmRhdGEsICR0aGlzID0gdGhpcywgc2NvcGUgPSBvYmosIEFuaW1hdGUgPSBzZWxmICYmIHNlbGYuQW5pbWF0ZSwgcGFyZW50ID0gKCRjYWxsZWUgfHwge30pLl9zdXBlclxuXG5cbmNvbnN0IHtcbiAgICB0eXBlLCBuYW1lLCB2YWx1ZSwgcGxhY2Vob2xkZXIsIHRhYmluZGV4LFxuICAgIHJlYWRvbmx5LCBjbGVhcmFibGUsIGRpc2FibGVkLCBzaXplLCBcbiAgICByb3dzLCBzcGVsbGNoZWNrLCBkZWZhdWx0VmFsdWUsIHN0eWxlLFxuICAgIGNsYXNzTmFtZSwgYXV0b1dpZHRoLCBmbHVpZCwgd2lkdGgsIGF1dG9jb21wbGV0ZSxcbn0gPSBzZWxmLmdldCgpO1xuXG5jb25zdCBjbGFzc05hbWVPYmogPSB7XG4gICAgJ2staW5wdXQnOiB0cnVlLFxuICAgIFtgay0ke3NpemV9YF06IHNpemUgIT09ICdkZWZhdWx0JyxcbiAgICAnay1ncm91cCc6IGJsb2Nrcy5wcmVwZW5kIHx8IGJsb2Nrcy5hcHBlbmQsXG4gICAgJ2stZGlzYWJsZWQnOiBkaXNhYmxlZCxcbiAgICAnay13aXRoLXByZWZpeCc6IGJsb2Nrcy5wcmVmaXgsXG4gICAgJ2std2l0aC1zdWZmaXgnOiBibG9ja3Muc3VmZml4LFxuICAgICdrLWNsZWFyYWJsZSc6IGNsZWFyYWJsZSxcbiAgICAnay1hdXRvLXdpZHRoJzogYXV0b1dpZHRoLFxuICAgICdrLWZsdWlkJzogZmx1aWQsXG4gICAgW2NsYXNzTmFtZV06IGNsYXNzTmFtZSxcbn1cblxuY29uc3QgZXZlbnRzID0gW1xuICAgICdrZXlkb3duJywgJ2tleXVwJywgJ2NoYW5nZScsXG4gICAgJ2tleXByZXNzJywgJ2ZvY3VzJywgJ2JsdXInLCAvKiAnaW5wdXQnICovXG5dLnJlZHVjZSgobWVtbywgbmFtZSkgPT4ge1xuICAgIG1lbW9bYGV2LSR7bmFtZX1gXSA9IHNlbGYuX3Byb3h5RXZlbnQuYmluZChzZWxmLCBuYW1lKTtcbiAgICByZXR1cm4gbWVtbztcbn0sIHt9KTtcblxuY29uc3Qgd3JhcHBlckV2ZW50cyA9IFtcbiAgICAnY2xpY2snLCAnbW91c2VlbnRlcicsICdtb3VzZWxlYXZlJ1xuXS5yZWR1Y2UoKG1lbW8sIG5hbWUpID0+IHtcbiAgICBtZW1vW2Bldi0ke25hbWV9YF0gPSBzZWxmLl9wcm94eUV2ZW50LmJpbmQoc2VsZiwgbmFtZSk7XG4gICAgcmV0dXJuIG1lbW87XG59LCB7fSk7XG5cbnJldHVybiBoKCdkaXYnLCB7J3N0eWxlJzogZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW3dpZHRoICE9IG51bGwgPyBhZGRTdHlsZShzdHlsZSwge3dpZHRoOiBgJHt3aWR0aH1weGB9KSA6IHN0eWxlIF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcyksIC4uLmZ1bmN0aW9uKCkge3RyeSB7cmV0dXJuIFt3cmFwcGVyRXZlbnRzIF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcyl9LCBbZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW2Jsb2Nrcy5wcmVwZW5kIF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcykgPyBoKCdkaXYnLCBudWxsLCAoX2Jsb2Nrc1tcInByZXBlbmRcIl0gPSBmdW5jdGlvbihwYXJlbnQpIHtyZXR1cm4gbnVsbDt9KSAmJiAoX19ibG9ja3NbXCJwcmVwZW5kXCJdID0gZnVuY3Rpb24ocGFyZW50KSB7XG52YXIgc2VsZiA9IHRoaXM7XG5yZXR1cm4gYmxvY2tzW1wicHJlcGVuZFwiXSA/IGJsb2Nrc1tcInByZXBlbmRcIl0uY2FsbCh0aGlzLCBmdW5jdGlvbigpIHtcbnJldHVybiBfYmxvY2tzW1wicHJlcGVuZFwiXS5jYWxsKHNlbGYsIHBhcmVudCk7XG59KSA6IF9ibG9ja3NbXCJwcmVwZW5kXCJdLmNhbGwodGhpcywgcGFyZW50KTtcbn0pICYmIF9fYmxvY2tzW1wicHJlcGVuZFwiXS5jYWxsKHRoaXMpLCAnay1wcmVwZW5kJykgOiB1bmRlZmluZWQsIGgoJ2RpdicsIG51bGwsIFtmdW5jdGlvbigpIHt0cnkge3JldHVybiBbYmxvY2tzLnByZWZpeCBdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpID8gaCgnZGl2JywgbnVsbCwgKF9ibG9ja3NbXCJwcmVmaXhcIl0gPSBmdW5jdGlvbihwYXJlbnQpIHtyZXR1cm4gbnVsbDt9KSAmJiAoX19ibG9ja3NbXCJwcmVmaXhcIl0gPSBmdW5jdGlvbihwYXJlbnQpIHtcbnZhciBzZWxmID0gdGhpcztcbnJldHVybiBibG9ja3NbXCJwcmVmaXhcIl0gPyBibG9ja3NbXCJwcmVmaXhcIl0uY2FsbCh0aGlzLCBmdW5jdGlvbigpIHtcbnJldHVybiBfYmxvY2tzW1wicHJlZml4XCJdLmNhbGwoc2VsZiwgcGFyZW50KTtcbn0pIDogX2Jsb2Nrc1tcInByZWZpeFwiXS5jYWxsKHRoaXMsIHBhcmVudCk7XG59KSAmJiBfX2Jsb2Nrc1tcInByZWZpeFwiXS5jYWxsKHRoaXMpLCAnay1wcmVmaXgnKSA6IHVuZGVmaW5lZCwgZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW3R5cGUgIT09ICd0ZXh0YXJlYScgXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKSA/IGgoJ2lucHV0Jywgeyd0eXBlJzogZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW3R5cGUgXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKSwgJ25hbWUnOiBmdW5jdGlvbigpIHt0cnkge3JldHVybiBbbmFtZSBdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpLCAndmFsdWUnOiBmdW5jdGlvbigpIHt0cnkge3JldHVybiBbdmFsdWUgXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKSwgJ2V2LWlucHV0JzogZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW3NlbGYuX29uSW5wdXQgXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKSwgJ2RlZmF1bHRWYWx1ZSc6IGZ1bmN0aW9uKCkge3RyeSB7cmV0dXJuIFtkZWZhdWx0VmFsdWUgXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKSwgJ3JlYWRPbmx5JzogZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW3JlYWRvbmx5IF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcyksICdwbGFjZWhvbGRlcic6IGZ1bmN0aW9uKCkge3RyeSB7cmV0dXJuIFtwbGFjZWhvbGRlciBdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpLCAnZGlzYWJsZWQnOiBmdW5jdGlvbigpIHt0cnkge3JldHVybiBbZGlzYWJsZWQgXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKSwgJ3RhYmluZGV4JzogZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW3RhYmluZGV4IF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcyksICdhdXRvY29tcGxldGUnOiBmdW5jdGlvbigpIHt0cnkge3JldHVybiBbYXV0b2NvbXBsZXRlIF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcyksIC4uLmZ1bmN0aW9uKCkge3RyeSB7cmV0dXJuIFtldmVudHMgXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKX0sIG51bGwsICdrLWlubmVyJywgbnVsbCwgZnVuY3Rpb24oaSkge3dpZGdldHNbJ2lucHV0J10gPSBpfSkgOiBoKCd0ZXh0YXJlYScsIHsndmFsdWUnOiBmdW5jdGlvbigpIHt0cnkge3JldHVybiBbdmFsdWUgXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKSwgJ2V2LWlucHV0JzogZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW3NlbGYuX29uSW5wdXQgXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKSwgJ2RlZmF1bHRWYWx1ZSc6IGZ1bmN0aW9uKCkge3RyeSB7cmV0dXJuIFtkZWZhdWx0VmFsdWUgXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKSwgJ25hbWUnOiBmdW5jdGlvbigpIHt0cnkge3JldHVybiBbbmFtZSBdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpLCAncmVhZE9ubHknOiBmdW5jdGlvbigpIHt0cnkge3JldHVybiBbcmVhZG9ubHkgXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKSwgJ3BsYWNlaG9sZGVyJzogZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW3BsYWNlaG9sZGVyIF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcyksICdkaXNhYmxlZCc6IGZ1bmN0aW9uKCkge3RyeSB7cmV0dXJuIFtkaXNhYmxlZCBdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpLCAncm93cyc6IGZ1bmN0aW9uKCkge3RyeSB7cmV0dXJuIFtyb3dzIF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcyksICdzcGVsbGNoZWNrJzogZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW3NwZWxsY2hlY2sgXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKSwgJ3RhYmluZGV4JzogZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW3RhYmluZGV4IF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcyksIC4uLmZ1bmN0aW9uKCkge3RyeSB7cmV0dXJuIFtldmVudHMgXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKX0sIG51bGwsICdrLWlubmVyIGstdGV4dGFyZWEnLCBudWxsLCBmdW5jdGlvbihpKSB7d2lkZ2V0c1snaW5wdXQnXSA9IGl9KSwgZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW2Jsb2Nrcy5zdWZmaXggfHwgY2xlYXJhYmxlIF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcykgPyBoKCdkaXYnLCBudWxsLCBbZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW2NsZWFyYWJsZSBdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpID8gaCgnaScsIHsnZXYtY2xpY2snOiBmdW5jdGlvbigpIHt0cnkge3JldHVybiBbc2VsZi5jbGVhciBdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpfSwgbnVsbCwgX2NsYXNzTmFtZShmdW5jdGlvbigpIHt0cnkge3JldHVybiBbe1xuICAgICAgICAgICAgICAgICAgICBcImstY2xlYXIgay1pY29uIGlvbi1pb3MtY2xvc2VcIjogdHJ1ZSwgXG4gICAgICAgICAgICAgICAgICAgIFwiay1zaG93XCI6IHZhbHVlLFxuICAgICAgICAgICAgICAgIH0gXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKSkpIDogdW5kZWZpbmVkLCAoX2Jsb2Nrc1tcInN1ZmZpeFwiXSA9IGZ1bmN0aW9uKHBhcmVudCkge3JldHVybiBudWxsO30pICYmIChfX2Jsb2Nrc1tcInN1ZmZpeFwiXSA9IGZ1bmN0aW9uKHBhcmVudCkge1xudmFyIHNlbGYgPSB0aGlzO1xucmV0dXJuIGJsb2Nrc1tcInN1ZmZpeFwiXSA/IGJsb2Nrc1tcInN1ZmZpeFwiXS5jYWxsKHRoaXMsIGZ1bmN0aW9uKCkge1xucmV0dXJuIF9ibG9ja3NbXCJzdWZmaXhcIl0uY2FsbChzZWxmLCBwYXJlbnQpO1xufSkgOiBfYmxvY2tzW1wic3VmZml4XCJdLmNhbGwodGhpcywgcGFyZW50KTtcbn0pICYmIF9fYmxvY2tzW1wic3VmZml4XCJdLmNhbGwodGhpcyldLCAnay1zdWZmaXgnKSA6IHVuZGVmaW5lZCwgZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW2F1dG9XaWR0aCBdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpID8gaCgnZGl2JywgbnVsbCwgZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW3ZhbHVlID09IG51bGwgfHwgdmFsdWUgPT09ICcnID8gcGxhY2Vob2xkZXIgOiB2YWx1ZSBdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpLCAnay1mYWtlJywgbnVsbCwgZnVuY3Rpb24oaSkge3dpZGdldHNbJ2Zha2UnXSA9IGl9KSA6IHVuZGVmaW5lZF0sICdrLXdyYXBwZXInKSwgZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW2Jsb2Nrcy5hcHBlbmQgXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKSA/IGgoJ2RpdicsIG51bGwsIChfYmxvY2tzW1wiYXBwZW5kXCJdID0gZnVuY3Rpb24ocGFyZW50KSB7cmV0dXJuIG51bGw7fSkgJiYgKF9fYmxvY2tzW1wiYXBwZW5kXCJdID0gZnVuY3Rpb24ocGFyZW50KSB7XG52YXIgc2VsZiA9IHRoaXM7XG5yZXR1cm4gYmxvY2tzW1wiYXBwZW5kXCJdID8gYmxvY2tzW1wiYXBwZW5kXCJdLmNhbGwodGhpcywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gX2Jsb2Nrc1tcImFwcGVuZFwiXS5jYWxsKHNlbGYsIHBhcmVudCk7XG59KSA6IF9ibG9ja3NbXCJhcHBlbmRcIl0uY2FsbCh0aGlzLCBwYXJlbnQpO1xufSkgJiYgX19ibG9ja3NbXCJhcHBlbmRcIl0uY2FsbCh0aGlzKSwgJ2stYXBwZW5kJykgOiB1bmRlZmluZWRdLCBfY2xhc3NOYW1lKGZ1bmN0aW9uKCkge3RyeSB7cmV0dXJuIFtjbGFzc05hbWVPYmogXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKSkpXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9pbnB1dC9pbmRleC52ZHQiLCJpbXBvcnQgSW50YWN0IGZyb20gJ2ludGFjdCc7XG5pbXBvcnQgdGVtcGxhdGUgZnJvbSAnLi9pbmRleC52ZHQnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMaW5rIGV4dGVuZHMgSW50YWN0IHtcbiAgICBzdGF0aWMgaGlzdG9yeSA9IHVuZGVmaW5lZDtcblxuICAgIEBJbnRhY3QudGVtcGxhdGUoKVxuICAgIGdldCB0ZW1wbGF0ZSgpIHsgcmV0dXJuIHRlbXBsYXRlOyB9XG5cbiAgICBkZWZhdWx0cygpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGhyZWY6IHVuZGVmaW5lZCxcbiAgICAgICAgICAgIG5hbWU6IHVuZGVmaW5lZCxcbiAgICAgICAgICAgIGlzUmVwbGFjZTogZmFsc2UsXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB0byhlKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgdGhpcy50cmlnZ2VyKCdjbGljaycsIGUpO1xuICAgICAgICBjb25zdCBocmVmID0gdGhpcy5nZXQoJ2hyZWYnKTtcbiAgICAgICAgY29uc3QgbmFtZSA9IHRoaXMuZ2V0KCduYW1lJyk7XG4gICAgICAgIGNvbnN0IGhpc3RvcnkgPSBMaW5rLmhpc3Rvcnk7XG4gICAgICAgIGxldCB1cmw7XG4gICAgICAgIGlmIChocmVmICE9IG51bGwpIHtcbiAgICAgICAgICAgIHVybCA9IGhyZWY7XG4gICAgICAgIH0gZWxzZSBpZiAobmFtZSAhPSBudWxsKSB7XG4gICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShuYW1lKSkge1xuICAgICAgICAgICAgICAgIHVybCA9IExpbmsudXJsLmFwcGx5KExpbmsudXJsLCBuYW1lKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdXJsID0gTGluay51cmwobmFtZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHVybCkge1xuICAgICAgICAgICAgLy8gaWYgdGhlIGhyZWYgaXMgZXF1YWwgdG8gdGhlIGN1cnJlbnQgaHJlZiwgdGhlbiBkbyBub3RoaW5nXG4gICAgICAgICAgICBjb25zdCB7cGF0aG5hbWUsIHNlYXJjaH0gPSBoaXN0b3J5LmxvY2F0aW9uO1xuICAgICAgICAgICAgaWYgKHBhdGhuYW1lICsgc2VhcmNoID09PSB1cmwpIHJldHVybjtcblxuICAgICAgICAgICAgaWYgKHRoaXMuZ2V0KCdpc1JlcGxhY2UnKSkge1xuICAgICAgICAgICAgICAgIGhpc3RvcnkucmVwbGFjZSh1cmwpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBoaXN0b3J5LnB1c2godXJsKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuZXhwb3J0IHtMaW5rfTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvbGluay9pbmRleC5qcyIsIlxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24ob2JqLCBfVmR0LCBibG9ja3MsICRjYWxsZWUpIHtcbl9WZHQgfHwgKF9WZHQgPSBWZHQpO1xub2JqIHx8IChvYmogPSB7fSk7XG5ibG9ja3MgfHwgKGJsb2NrcyA9IHt9KTtcbnZhciBoID0gX1ZkdC5taXNzLmgsIGhjID0gX1ZkdC5taXNzLmhjLCBodSA9IF9WZHQubWlzcy5odSwgd2lkZ2V0cyA9IHRoaXMgJiYgdGhpcy53aWRnZXRzIHx8IHt9LCBfYmxvY2tzID0ge30sIF9fYmxvY2tzID0ge30sXG5fX3UgPSBfVmR0LnV0aWxzLCBleHRlbmQgPSBfX3UuZXh0ZW5kLCBfZSA9IF9fdS5lcnJvciwgX2NsYXNzTmFtZSA9IF9fdS5jbGFzc05hbWUsXG5fX28gPSBfX3UuT3B0aW9ucywgX2dldE1vZGVsID0gX19vLmdldE1vZGVsLCBfc2V0TW9kZWwgPSBfX28uc2V0TW9kZWwsXG5fc2V0Q2hlY2tib3hNb2RlbCA9IF9fdS5zZXRDaGVja2JveE1vZGVsLCBfZGV0ZWN0Q2hlY2tib3hDaGVja2VkID0gX191LmRldGVjdENoZWNrYm94Q2hlY2tlZCxcbl9zZXRTZWxlY3RNb2RlbCA9IF9fdS5zZXRTZWxlY3RNb2RlbCxcbnNlbGYgPSB0aGlzLmRhdGEsICR0aGlzID0gdGhpcywgc2NvcGUgPSBvYmosIEFuaW1hdGUgPSBzZWxmICYmIHNlbGYuQW5pbWF0ZSwgcGFyZW50ID0gKCRjYWxsZWUgfHwge30pLl9zdXBlclxuY29uc3Qge25hbWUsIGlzUmVwbGFjZSwgLi4ucmVzdH0gPSBzZWxmLmdldCgpO1xucmV0dXJuIGgoJ2EnLCB7Li4uZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW3Jlc3QgXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKSwgJ2V2LWNsaWNrJzogZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW3NlbGYudG8gXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKX0sIGZ1bmN0aW9uKCkge3RyeSB7cmV0dXJuIFtzZWxmLmdldCgnY2hpbGRyZW4nKSBdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpKVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvbGluay9pbmRleC52ZHQiLCJpbXBvcnQgSW50YWN0IGZyb20gJ2ludGFjdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1vdmVXcmFwcGVyIGV4dGVuZHMgSW50YWN0IHtcbiAgICB0ZW1wbGF0ZShzZWxmLCBWZHQpIHtcbiAgICAgICAgY29uc3QgY2hpbGRyZW4gPSBzZWxmLmdldCgnY2hpbGRyZW4nKTtcbiAgICAgICAgcmV0dXJuIGNoaWxkcmVuIHx8IFZkdC5taXNzLmhjKCdNb3ZlV3JhcHBlcicpO1xuICAgIH1cblxuICAgIGRlZmF1bHRzKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgYXV0b0Rlc3Ryb3k6IHRydWUsIFxuICAgICAgICAgICAgY29udGFpbmVyOiB1bmRlZmluZWQsXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBpbml0KC4uLmFyZ3MpIHtcbiAgICAgICAgc3VwZXIuaW5pdCguLi5hcmdzKTtcbiAgICAgICAgcmV0dXJuIHRoaXMucGxhY2Vob2xkZXIgPSBkb2N1bWVudC5jcmVhdGVDb21tZW50KFwicGxhY2Vob2xkZXJcIik7XG4gICAgfVxuXG4gICAgaHlkcmF0ZSguLi5hcmdzKSB7XG4gICAgICAgIHN1cGVyLmh5ZHJhdGUoLi4uYXJncyk7XG4gICAgICAgIHJldHVybiB0aGlzLnBsYWNlaG9sZGVyID0gZG9jdW1lbnQuY3JlYXRlQ29tbWVudCgncGxhY2Vob2xkZXInKTtcbiAgICB9XG5cbiAgICB1cGRhdGUobGFzdFZOb2RlLCBuZXh0Vk5vZGUpIHtcbiAgICAgICAgc3VwZXIudXBkYXRlKGxhc3RWTm9kZSwgbmV4dFZOb2RlKTtcbiAgICAgICAgcmV0dXJuIHRoaXMucGxhY2Vob2xkZXI7XG4gICAgfVxuXG4gICAgZGVzdHJveSguLi5hcmdzKSB7XG4gICAgICAgIGlmICh0aGlzLmdldCgnYXV0b0Rlc3Ryb3knKSkge1xuICAgICAgICAgICAgdGhpcy5fJGRlc3Ryb3koLi4uYXJncyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBcbiAgICAvKipcbiAgICAgKiBAYnJpZWYgb3ZlcnJpZGUgc3VwZXIgZGVzdHJveSBcbiAgICAgKlxuICAgICAqIE1vdmVXcmFwZXIgY29tcG9uZW50IGhhcyBjaGFuZ2VkIHRoZSBkb20gc3RydWN0aW9uLlxuICAgICAqIEl0IGlzIGFsd2F5cyB0aGUgdG9wIGxldmVsIGRvbSwgc28gd2Ugc2hvdWxkIFxuICAgICAqIHJlbW92ZSBpdCBmcm9tIHBhcmVudCBkb20uIEJ5IHBhc3NpbmcgdGhlIGNvbnRhaW5lclxuICAgICAqIHRvIHJlbW92ZSBmdW5jdGlvbiBjYW4gZG8gdGhpcy4gV2UgY2FuJ3QgcmVtb3ZlIGl0XG4gICAgICogZGlyZWN0bHkgYnkgY2FsbGluZyByZW1vdmVDaGlsZCBtZXRob2QsIGJlYWNhdXNlIGl0XG4gICAgICogbWF5YmUgaGF2ZSBsZWF2ZSBhbmltYXRpb24uXG4gICAgICpcbiAgICAgKiBAcGFyYW0gLi4uYXJnc1xuICAgICAqL1xuICAgIF8kZGVzdHJveShsYXN0Vk5vZGUsIG5leHRWTm9kZSkge1xuICAgICAgICAvLyBpZiAodGhpcy5kZXN0cm95ZWQpIHtcbiAgICAgICAgICAgIC8vIHJldHVybiBjb25zb2xlLndhcm4oJ2Rlc3Ryb3llZCBtdWx0aXBsZSB0aW1lcycpO1xuICAgICAgICAvLyB9XG4gICAgICAgIGlmICh0aGlzLnJlbmRlcmVkICYmIFxuICAgICAgICAgICAgKFxuICAgICAgICAgICAgICAgICFuZXh0Vk5vZGUgfHxcbiAgICAgICAgICAgICAgICAhKG5leHRWTm9kZS50eXBlICYgSW50YWN0LlZkdC5taXNzLlR5cGVzLkNvbXBvbmVudENsYXNzT3JJbnN0YW5jZSkgfHxcbiAgICAgICAgICAgICAgICBuZXh0Vk5vZGUua2V5ICE9PSBsYXN0Vk5vZGUua2V5XG4gICAgICAgICAgICApXG4gICAgICAgICkge1xuICAgICAgICAgICAgSW50YWN0LlZkdC5taXNzLnJlbW92ZSh0aGlzLnZkdC52Tm9kZSwgdGhpcy5jb250YWluZXIpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX2Rlc3Ryb3kobGFzdFZOb2RlLCBuZXh0Vk5vZGUpO1xuICAgICAgICB0aGlzLmRlc3Ryb3llZCA9IHRydWU7XG4gICAgICAgIHRoaXMudHJpZ2dlcignJGRlc3Ryb3llZCcsIHRoaXMpO1xuICAgICAgICB0aGlzLm9mZigpO1xuICAgIH1cblxuICAgIF9tb3VudChsYXN0Vk5vZGUsIG5leHRWTm9kZSkge1xuICAgICAgICBjb25zdCBjb250YWluZXIgPSB0aGlzLmdldCgnY29udGFpbmVyJyk7XG4gICAgICAgIGlmIChjb250YWluZXIpIHtcbiAgICAgICAgICAgIHRoaXMuY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcihjb250YWluZXIpO1xuICAgICAgICB9XG4gICAgICAgIGlmICghdGhpcy5jb250YWluZXIpIHtcbiAgICAgICAgICAgIHRoaXMuY29udGFpbmVyID0gZG9jdW1lbnQuYm9keTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLmVsZW1lbnQpO1xuICAgIH1cbn1cblxuZXhwb3J0IHtNb3ZlV3JhcHBlcn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL21vdmVXcmFwcGVyL2luZGV4LmpzIiwiY29uc3QgbWF4ID0gTWF0aC5tYXg7XG5jb25zdCBhYnMgPSBNYXRoLmFicztcbmNvbnN0IHJIb3Jpem9udGFsID0gL2xlZnR8Y2VudGVyfHJpZ2h0LztcbmNvbnN0IHJWZXJ0aWNhbCA9IC90b3B8Y2VudGVyfGJvdHRvbS87XG5jb25zdCByT2Zmc2V0ID0gL1tcXCtcXC1dXFxkKyhcXC5bXFxkXSspPyU/LztcbmNvbnN0IHJQb3NpdGlvbiA9IC9eXFx3Ky87XG5jb25zdCByUGVyY2VudCA9IC8lJC87XG5cbmZ1bmN0aW9uIGdldERpbWVuc2lvbnMoZWxlbSkge1xuICAgIGlmIChlbGVtLm5vZGVUeXBlID09PSA5KSB7XG4gICAgICAgIC8vIGRvY3VtZW50XG4gICAgICAgIGNvbnN0IHt3aWR0aCwgaGVpZ2h0fSA9IGdldERvY3VtZW50T3JXaW5kb3dSZWN0KGVsZW0pO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgd2lkdGgsXG4gICAgICAgICAgICBoZWlnaHQsXG4gICAgICAgICAgICBvZmZzZXQ6IHtcbiAgICAgICAgICAgICAgICB0b3A6IDAsXG4gICAgICAgICAgICAgICAgbGVmdDogMFxuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgIH0gZWxzZSBpZiAoZWxlbSA9PT0gd2luZG93KSB7XG4gICAgICAgIGNvbnN0IHt3aWR0aCwgaGVpZ2h0fSA9IGdldERvY3VtZW50T3JXaW5kb3dSZWN0KGVsZW0pO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgd2lkdGgsXG4gICAgICAgICAgICBoZWlnaHQsXG4gICAgICAgICAgICBvZmZzZXQ6IHtcbiAgICAgICAgICAgICAgICB0b3A6IGVsZW0ucGFnZVlPZmZzZXQsXG4gICAgICAgICAgICAgICAgbGVmdDogZWxlbS5wYWdlWE9mZnNldCxcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICB9IGVsc2UgaWYgKGVsZW0ucHJldmVudERlZmF1bHQpIHtcbiAgICAgICAgLy8gZXZlbnRcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHdpZHRoOiAwLFxuICAgICAgICAgICAgaGVpZ2h0OiAwLFxuICAgICAgICAgICAgb2Zmc2V0OiB7XG4gICAgICAgICAgICAgICAgdG9wOiBlbGVtLnBhZ2VZLFxuICAgICAgICAgICAgICAgIGxlZnQ6IGVsZW0ucGFnZVhcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICB9XG4gICAgLy8gZG9tXG4gICAgY29uc3QgcmVjdCA9IGVsZW0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgd2lkdGg6IHJlY3Qud2lkdGgsXG4gICAgICAgIGhlaWdodDogcmVjdC5oZWlnaHQsXG4gICAgICAgIG9mZnNldDoge1xuICAgICAgICAgICAgdG9wOiByZWN0LnRvcCArIHdpbmRvdy5wYWdlWU9mZnNldCxcbiAgICAgICAgICAgIGxlZnQ6IHJlY3QubGVmdCArIHdpbmRvdy5wYWdlWE9mZnNldFxuICAgICAgICB9XG4gICAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldERvY3VtZW50T3JXaW5kb3dSZWN0KGVsZW0pIHtcbiAgICBpZiAoZWxlbSA9PT0gd2luZG93KSB7XG4gICAgICAgIGNvbnN0IGQgPSBlbGVtLmRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHdpZHRoOiBkLmNsaWVudFdpZHRoLFxuICAgICAgICAgICAgaGVpZ2h0OiBkLmNsaWVudEhlaWdodCxcbiAgICAgICAgfTtcbiAgICB9XG4gICAgY29uc3QgZCA9IGVsZW0uZG9jdW1lbnRFbGVtZW50O1xuICAgIGNvbnN0IGIgPSBlbGVtLmJvZHk7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgd2lkdGg6IG1heChcbiAgICAgICAgICAgIGIuc2Nyb2xsV2lkdGgsIGQuc2Nyb2xsV2lkdGgsXG4gICAgICAgICAgICBiLm9mZnNldFdpZHRoLCBkLm9mZnNldFdpZHRoLFxuICAgICAgICAgICAgZC5jbGllbnRXaWR0aFxuICAgICAgICApLFxuICAgICAgICBoZWlnaHQ6IG1heChcbiAgICAgICAgICAgIGIuc2Nyb2xsSGVpZ2h0LCBkLnNjcm9sbEhlaWdodCxcbiAgICAgICAgICAgIGIub2Zmc2V0SGVpZ2h0LCBkLm9mZnNldEhlaWdodCxcbiAgICAgICAgICAgIGQuY2xpZW50SGVpZ2h0XG4gICAgICAgIClcbiAgICB9O1xufVxuXG5mdW5jdGlvbiBnZXRPZmZzZXRzKG9mZnNldHMsIHdpZHRoLCBoZWlnaHQpIHtcbiAgICByZXR1cm4gW1xuICAgICAgICBwYXJzZUZsb2F0KG9mZnNldHNbMF0pICogKHJQZXJjZW50LnRlc3Qob2Zmc2V0c1swXSkgPyB3aWR0aCAvIDEwMCA6IDEpLFxuICAgICAgICBwYXJzZUZsb2F0KG9mZnNldHNbMV0pICogKHJQZXJjZW50LnRlc3Qob2Zmc2V0c1sxXSkgPyBoZWlnaHQgLyAxMDAgOiAxKSxcbiAgICBdO1xufVxuXG4vLyByZWZlcmVuY2U6IGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvMTMzODI1MTYvZ2V0dGluZy1zY3JvbGwtYmFyLXdpZHRoLXVzaW5nLWphdmFzY3JpcHRcbmxldCBfc2Nyb2xsQmFyV2lkdGg7XG5leHBvcnQgZnVuY3Rpb24gc2Nyb2xsYmFyV2lkdGgoKSB7XG4gICAgaWYgKF9zY3JvbGxCYXJXaWR0aCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHJldHVybiBfc2Nyb2xsQmFyV2lkdGg7XG4gICAgfVxuXG4gICAgdmFyIG91dGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBvdXRlci5zdHlsZS52aXNpYmlsaXR5ID0gXCJoaWRkZW5cIjtcbiAgICBvdXRlci5zdHlsZS53aWR0aCA9IFwiMTAwcHhcIjtcbiAgICBvdXRlci5zdHlsZS5tc092ZXJmbG93U3R5bGUgPSBcInNjcm9sbGJhclwiOyAvLyBuZWVkZWQgZm9yIFdpbkpTIGFwcHNcblxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQob3V0ZXIpO1xuXG4gICAgdmFyIHdpZHRoTm9TY3JvbGwgPSBvdXRlci5vZmZzZXRXaWR0aDtcbiAgICAvLyBmb3JjZSBzY3JvbGxiYXJzXG4gICAgb3V0ZXIuc3R5bGUub3ZlcmZsb3cgPSBcInNjcm9sbFwiO1xuXG4gICAgLy8gYWRkIGlubmVyZGl2XG4gICAgdmFyIGlubmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBpbm5lci5zdHlsZS53aWR0aCA9IFwiMTAwJVwiO1xuICAgIG91dGVyLmFwcGVuZENoaWxkKGlubmVyKTtcblxuICAgIHZhciB3aWR0aFdpdGhTY3JvbGwgPSBpbm5lci5vZmZzZXRXaWR0aDtcblxuICAgIC8vIHJlbW92ZSBkaXZzXG4gICAgb3V0ZXIucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChvdXRlcik7XG5cbiAgICByZXR1cm4gKF9zY3JvbGxCYXJXaWR0aCA9IHdpZHRoTm9TY3JvbGwgLSB3aWR0aFdpdGhTY3JvbGwpO1xufVxuXG5mdW5jdGlvbiBnZXRTY3JvbGxJbmZvKHdpdGhpbikge1xuICAgIGNvbnN0IG92ZXJmbG93WCA9IHdpdGhpbi5pc1dpbmRvdyB8fCB3aXRoaW4uaXNEb2N1bWVudCA/IFxuICAgICAgICAnJyA6IHdpdGhpbi5lbGVtZW50LnN0eWxlLm92ZXJmbG93WDtcbiAgICBjb25zdCBvdmVyZmxvd1kgPSB3aXRoaW4uaXNXaW5kb3cgfHwgd2l0aGluLmlzRG9jdW1lbnQgPyBcbiAgICAgICAgJycgOiB3aXRoaW4uZWxlbWVudC5zdHlsZS5vdmVyZmxvd1k7XG4gICAgY29uc3QgaGFzT3ZlcmZsb3dYID0gb3ZlcmZsb3dYID09PSAnc2Nyb2xsJyB8fCBcbiAgICAgICAgKG92ZXJmbG93WCA9PT0gJ2F1dG8nICYmIHdpdGhpbi53aWR0aCA8IHdpdGhpbi5lbGVtZW50LnNjcm9sbFdpZHRoKTtcbiAgICBjb25zdCBoYXNPdmVyZmxvd1kgPSBvdmVyZmxvd1kgPT09ICdzY3JvbGwnIHx8IFxuICAgICAgICAob3ZlcmZsb3dZID09PSAnYXV0bycgJiYgd2l0aGluLmhlaWdodCA8IHdpdGhpbi5lbGVtZW50LnNjcm9sbEhlaWdodCk7XG4gICAgXG4gICAgcmV0dXJuIHtcbiAgICAgICAgd2lkdGg6IGhhc092ZXJmbG93WSA/IHNjcm9sbGJhcldpZHRoKCkgOiAwLFxuICAgICAgICBoZWlnaHQ6IGhhc092ZXJmbG93WCA/IHNjcm9sbGJhcldpZHRoKCkgOiAwLFxuICAgIH07XG59XG5cbmZ1bmN0aW9uIGdldFdpdGhpbkluZm8oZWxlbWVudCkge1xuICAgIGVsZW1lbnQgfHwgKGVsZW1lbnQgPSB3aW5kb3cpO1xuICAgIGNvbnN0IGlzV2luZG93ID0gZWxlbWVudCA9PT0gd2luZG93O1xuICAgIGNvbnN0IGlzRG9jdW1lbnQgPSBlbGVtZW50Lm5vZGVUeXBlID09PSA5O1xuICAgIGNvbnN0IGhhc09mZnNldCA9ICFpc1dpbmRvdyAmJiAhaXNEb2N1bWVudDtcblxuICAgIGNvbnN0IHJldCA9IHtlbGVtZW50LCBpc1dpbmRvdywgaXNEb2N1bWVudH07XG4gICAgaWYgKGhhc09mZnNldCkge1xuICAgICAgICBjb25zdCByZWN0ID0gZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgICAgcmV0Lm9mZnNldCA9IHtcbiAgICAgICAgICAgIHRvcDogcmVjdC50b3AgKyB3aW5kb3cucGFnZVlPZmZzZXQsXG4gICAgICAgICAgICBsZWZ0OiByZWN0LmxlZnQgKyB3aW5kb3cucGFnZVhPZmZzZXQsXG4gICAgICAgIH07XG4gICAgICAgIHJldC53aWR0aCA9IHJlY3Qud2lkdGg7XG4gICAgICAgIHJldC5oZWlnaHQgPSByZWN0LmhlaWdodDtcbiAgICAgICAgcmV0LnNjcm9sbExlZnQgPSBlbGVtZW50LnNjcm9sbExlZnQ7XG4gICAgICAgIHJldC5zY3JvbGxUb3AgPSBlbGVtZW50LnNjcm9sbFRvcDtcbiAgICB9IGVsc2Uge1xuICAgICAgICByZXQub2Zmc2V0ID0ge3RvcDogMCwgbGVmdDogMH07XG4gICAgICAgIGNvbnN0IHJlY3QgPSBnZXREb2N1bWVudE9yV2luZG93UmVjdChlbGVtZW50KTtcbiAgICAgICAgcmV0LndpZHRoID0gcmVjdC53aWR0aDtcbiAgICAgICAgcmV0LmhlaWdodCA9IHJlY3QuaGVpZ2h0O1xuICAgICAgICByZXQuc2Nyb2xsTGVmdCA9IHdpbmRvdy5wYWdlWE9mZnNldDtcbiAgICAgICAgcmV0LnNjcm9sbFRvcCA9IHdpbmRvdy5wYWdlWU9mZnNldDtcbiAgICB9XG5cbiAgICByZXR1cm4gcmV0O1xufVxuXG5mdW5jdGlvbiBwYXJzZUNzcyhzdHlsZSwgcHJvcGVydHkpIHtcbiAgICByZXR1cm4gcGFyc2VJbnQoc3R5bGVbcHJvcGVydHldLCAxMCkgfHwgMDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcG9zaXRpb24oZWxlbSwgb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSBPYmplY3QuYXNzaWduKHt9LCBvcHRpb25zKTtcblxuICAgIGNvbnN0IHRhcmdldCA9IG9wdGlvbnMub2YgfHwgd2luZG93O1xuICAgIGlmICh0YXJnZXQucHJldmVudERlZmF1bHQpIHtcbiAgICAgICAgb3B0aW9ucy5hdCA9IFwibGVmdCB0b3BcIjtcbiAgICB9XG4gICAgY29uc3Qge1xuICAgICAgICB3aWR0aDogdGFyZ2V0V2lkdGgsXG4gICAgICAgIGhlaWdodDogdGFyZ2V0SGVpZ2h0LCBcbiAgICAgICAgb2Zmc2V0OiB0YXJnZXRPZmZzZXRcbiAgICB9ID0gZ2V0RGltZW5zaW9ucyh0YXJnZXQpO1xuICAgIGNvbnN0IGJhc2VQb3NpdGlvbiA9IE9iamVjdC5hc3NpZ24oe30sIHRhcmdldE9mZnNldCk7XG4gICAgY29uc3QgY29sbGlzaW9uID0gKG9wdGlvbnMuY29sbGlzaW9uIHx8ICdmbGlwJykuc3BsaXQoJyAnKTtcbiAgICBjb25zdCBvZmZzZXRzID0ge307XG4gICAgY29uc3Qgd2l0aGluID0gZ2V0V2l0aGluSW5mbyhvcHRpb25zLndpdGhpbik7XG4gICAgY29uc3Qgc2Nyb2xsSW5mbyA9IGdldFNjcm9sbEluZm8od2l0aGluKTtcblxuICAgIFsnbXknLCAnYXQnXS5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICBsZXQgcG9zID0gKG9wdGlvbnNbaXRlbV0gfHwgJycpLnNwbGl0KCcgJyk7XG5cbiAgICAgICAgaWYgKHBvcy5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgICAgIHBvcyA9IHJIb3Jpem9udGFsLnRlc3QocG9zWzBdKSA/XG4gICAgICAgICAgICAgICAgcG9zLmNvbmNhdChbJ2NlbnRlciddKSA6XG4gICAgICAgICAgICAgICAgclZlcnRpY2FsLnRlc3QocG9zWzBdKSA/XG4gICAgICAgICAgICAgICAgICAgIFsnY2VudGVyJ10uY29uY2F0KHBvcykgOlxuICAgICAgICAgICAgICAgICAgICBbJ2NlbnRlcicsICdjZW50ZXInXTtcbiAgICAgICAgfVxuICAgICAgICBwb3NbMF0gPSBySG9yaXpvbnRhbC50ZXN0KHBvc1swXSkgPyBwb3NbMF0gOiAnY2VudGVyJztcbiAgICAgICAgcG9zWzFdID0gclZlcnRpY2FsLnRlc3QocG9zWzFdKSA/IHBvc1sxXSA6ICdjZW50ZXInO1xuXG4gICAgICAgIGNvbnN0IGhvcml6b250YWxPZmZzZXQgPSByT2Zmc2V0LmV4ZWMocG9zWzBdKTtcbiAgICAgICAgY29uc3QgdmVydGljYWxPZmZzZXQgPSByT2Zmc2V0LmV4ZWMocG9zWzFdKTtcbiAgICAgICAgb2Zmc2V0c1tpdGVtXSA9IFtcbiAgICAgICAgICAgIGhvcml6b250YWxPZmZzZXQgPyBob3Jpem9udGFsT2Zmc2V0WzBdIDogMCxcbiAgICAgICAgICAgIHZlcnRpY2FsT2Zmc2V0ID8gdmVydGljYWxPZmZzZXRbMF0gOiAwXG4gICAgICAgIF07XG5cbiAgICAgICAgb3B0aW9uc1tpdGVtXSA9IFtcbiAgICAgICAgICAgIHJQb3NpdGlvbi5leGVjKHBvc1swXSlbMF0sXG4gICAgICAgICAgICByUG9zaXRpb24uZXhlYyhwb3NbMV0pWzBdXG4gICAgICAgIF07XG4gICAgfSk7XG5cbiAgICBpZiAoY29sbGlzaW9uLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICBjb2xsaXNpb25bMV0gPSBjb2xsaXNpb25bMF07XG4gICAgfVxuXG4gICAgY29uc3QgYXQgPSBvcHRpb25zLmF0O1xuICAgIGlmIChhdFswXSA9PT0gJ3JpZ2h0Jykge1xuICAgICAgICBiYXNlUG9zaXRpb24ubGVmdCArPSB0YXJnZXRXaWR0aDtcbiAgICB9IGVsc2UgaWYgKGF0WzBdID09PSAnY2VudGVyJykge1xuICAgICAgICBiYXNlUG9zaXRpb24ubGVmdCArPSB0YXJnZXRXaWR0aCAvIDI7XG4gICAgfVxuICAgIGlmIChhdFsxXSA9PT0gJ2JvdHRvbScpIHtcbiAgICAgICAgYmFzZVBvc2l0aW9uLnRvcCArPSB0YXJnZXRIZWlnaHQ7XG4gICAgfSBlbHNlIGlmIChhdFsxXSA9PT0gJ2NlbnRlcicpIHtcbiAgICAgICAgYmFzZVBvc2l0aW9uLnRvcCArPSB0YXJnZXRIZWlnaHQgLyAyO1xuICAgIH1cblxuICAgIGNvbnN0IGF0T2Zmc2V0ID0gZ2V0T2Zmc2V0cyhvZmZzZXRzLmF0LCB0YXJnZXRXaWR0aCwgdGFyZ2V0SGVpZ2h0KTtcbiAgICBiYXNlUG9zaXRpb24ubGVmdCArPSBhdE9mZnNldFswXTtcbiAgICBiYXNlUG9zaXRpb24udG9wICs9IGF0T2Zmc2V0WzFdO1xuXG4gICAgY29uc3QgZWxlbVdpZHRoID0gZWxlbS5vZmZzZXRXaWR0aDtcbiAgICBjb25zdCBlbGVtSGVpZ2h0ID0gZWxlbS5vZmZzZXRIZWlnaHQ7XG4gICAgY29uc3QgcG9zaXRpb24gPSBPYmplY3QuYXNzaWduKHt9LCBiYXNlUG9zaXRpb24pO1xuICAgIGNvbnN0IG15T2Zmc2V0ID0gZ2V0T2Zmc2V0cyhvZmZzZXRzLm15LCBlbGVtV2lkdGgsIGVsZW1IZWlnaHQpO1xuICAgIGNvbnN0IGNvbXB1dGVkU3R5bGUgPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShlbGVtKTtcbiAgICBjb25zdCBtYXJnaW5MZWZ0ID0gcGFyc2VDc3MoY29tcHV0ZWRTdHlsZSwgJ21hcmdpbkxlZnQnKTtcbiAgICBjb25zdCBtYXJnaW5Ub3AgPSBwYXJzZUNzcyhjb21wdXRlZFN0eWxlLCAnbWFyZ2luVG9wJyk7XG4gICAgY29uc3QgY29sbGlzaW9uV2lkdGggPSBlbGVtV2lkdGggKyBtYXJnaW5MZWZ0ICsgcGFyc2VDc3MoY29tcHV0ZWRTdHlsZSwgJ21hcmdpblJpZ2h0JykgKyBzY3JvbGxJbmZvLndpZHRoO1xuICAgIGNvbnN0IGNvbGxpc2lvbkhlaWdodCA9IGVsZW1IZWlnaHQgKyBtYXJnaW5Ub3AgKyBwYXJzZUNzcyhjb21wdXRlZFN0eWxlLCAnbWFyZ2luQm90dG9tJykgKyBzY3JvbGxJbmZvLmhlaWdodDtcbiAgICBjb25zdCBjb2xsaXNpb25Qb3NpdGlvbiA9IHttYXJnaW5MZWZ0LCBtYXJnaW5Ub3B9O1xuXG4gICAgY29uc3QgbXkgPSBvcHRpb25zLm15O1xuICAgIGlmIChteVswXSA9PT0gJ3JpZ2h0Jykge1xuICAgICAgICBwb3NpdGlvbi5sZWZ0IC09IGVsZW1XaWR0aDtcbiAgICB9IGVsc2UgaWYgKG15WzBdID09PSAnY2VudGVyJykge1xuICAgICAgICBwb3NpdGlvbi5sZWZ0IC09IGVsZW1XaWR0aCAvIDI7XG4gICAgfVxuICAgIGlmIChteVsxXSA9PT0gJ2JvdHRvbScpIHtcbiAgICAgICAgcG9zaXRpb24udG9wIC09IGVsZW1IZWlnaHQ7XG4gICAgfSBlbHNlIGlmIChteVsxXSA9PT0gJ2NlbnRlcicpIHtcbiAgICAgICAgcG9zaXRpb24udG9wIC09IGVsZW1IZWlnaHQgLyAyO1xuICAgIH1cbiAgICBwb3NpdGlvbi5sZWZ0ICs9IG15T2Zmc2V0WzBdO1xuICAgIHBvc2l0aW9uLnRvcCArPSBteU9mZnNldFsxXTtcblxuICAgIFsnbGVmdCcsICd0b3AnXS5mb3JFYWNoKChkaXIsIGkpID0+IHtcbiAgICAgICAgY29uc3QgY29sbCA9IGNvbGxpc2lvbltpXTtcbiAgICAgICAgaWYgKHJ1bGVzW2NvbGxdKSB7XG4gICAgICAgICAgICBydWxlc1tjb2xsXVtkaXJdKHBvc2l0aW9uLCB7XG4gICAgICAgICAgICAgICAgdGFyZ2V0V2lkdGgsXG4gICAgICAgICAgICAgICAgdGFyZ2V0SGVpZ2h0LFxuICAgICAgICAgICAgICAgIGVsZW1XaWR0aCxcbiAgICAgICAgICAgICAgICBlbGVtSGVpZ2h0LFxuICAgICAgICAgICAgICAgIGNvbGxpc2lvblBvc2l0aW9uLFxuICAgICAgICAgICAgICAgIGNvbGxpc2lvbldpZHRoLFxuICAgICAgICAgICAgICAgIGNvbGxpc2lvbkhlaWdodCxcbiAgICAgICAgICAgICAgICBvZmZzZXQ6IFthdE9mZnNldFswXSArIG15T2Zmc2V0WzBdLCBhdE9mZnNldFsxXSArIG15T2Zmc2V0WzFdXSxcbiAgICAgICAgICAgICAgICBteTogb3B0aW9ucy5teSxcbiAgICAgICAgICAgICAgICBhdDogb3B0aW9ucy5hdCxcbiAgICAgICAgICAgICAgICB3aXRoaW4sXG4gICAgICAgICAgICAgICAgZWxlbVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIGlmIChvcHRpb25zLnVzaW5nKSB7XG4gICAgICAgIGNvbnN0IGxlZnQgPSB0YXJnZXRPZmZzZXQubGVmdCAtIHBvc2l0aW9uLmxlZnQ7XG4gICAgICAgIGNvbnN0IHJpZ2h0ID0gbGVmdCArIHRhcmdldFdpZHRoIC0gZWxlbVdpZHRoO1xuICAgICAgICBjb25zdCB0b3AgPSB0YXJnZXRPZmZzZXQudG9wIC0gcG9zaXRpb24udG9wO1xuICAgICAgICBjb25zdCBib3R0b20gPSB0b3AgKyB0YXJnZXRIZWlnaHQgLSBlbGVtSGVpZ2h0O1xuICAgICAgICBjb25zdCBmZWVkYmFjayA9IHtcbiAgICAgICAgICAgIHRhcmdldDoge1xuICAgICAgICAgICAgICAgIGVsZW1lbnQ6IHRhcmdldCxcbiAgICAgICAgICAgICAgICBsZWZ0OiB0YXJnZXRPZmZzZXQubGVmdCxcbiAgICAgICAgICAgICAgICB0b3A6IHRhcmdldE9mZnNldC50b3AsXG4gICAgICAgICAgICAgICAgd2lkdGg6IHRhcmdldFdpZHRoLFxuICAgICAgICAgICAgICAgIGhlaWdodDogdGFyZ2V0SGVpZ2h0LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGVsZW1lbnQ6IHtcbiAgICAgICAgICAgICAgICBlbGVtZW50OiBlbGVtLFxuICAgICAgICAgICAgICAgIGxlZnQ6IHBvc2l0aW9uLmxlZnQsXG4gICAgICAgICAgICAgICAgdG9wOiBwb3NpdGlvbi50b3AsXG4gICAgICAgICAgICAgICAgd2lkdGg6IGVsZW1XaWR0aCxcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IGVsZW1IZWlnaHQsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgaG9yaXpvbnRhbDogcmlnaHQgPCAwID8gJ2xlZnQnIDogbGVmdCA+IDAgPyAncmlnaHQnIDogJ2NlbnRlcicsXG4gICAgICAgICAgICB2ZXJ0aWNhbDogYm90dG9tIDwgMCA/ICd0b3AnIDogdG9wID4gMCA/ICdib3R0b20nIDogJ21pZGRsZScsXG4gICAgICAgIH07XG4gICAgICAgIGlmICh0YXJnZXRXaWR0aCA8IGVsZW1XaWR0aCAmJiBhYnMobGVmdCArIHJpZ2h0KSA8IHRhcmdldFdpZHRoKSB7XG4gICAgICAgICAgICBmZWVkYmFjay5ob3Jpem9udGFsID0gJ2NlbnRlcic7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRhcmdldEhlaWdodCA8IGVsZW1IZWlnaHQgJiYgYWJzKHRvcCArIGJvdHRvbSkgPCB0YXJnZXRIZWlnaHQpIHtcbiAgICAgICAgICAgIGZlZWRiYWNrLnZlcnRpY2FsID0gJ21pZGRsZSc7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoXG4gICAgICAgICAgICBwb3NpdGlvbi50b3AgKyBlbGVtSGVpZ2h0IDw9IHRhcmdldE9mZnNldC50b3AgfHwgXG4gICAgICAgICAgICBwb3NpdGlvbi50b3AgPj0gdGFyZ2V0T2Zmc2V0LnRvcCArIHRhcmdldEhlaWdodFxuICAgICAgICApIHtcbiAgICAgICAgICAgIGZlZWRiYWNrLmltcG9ydGFudCA9ICd2ZXJ0aWNhbCc7XG4gICAgICAgIH0gZWxzZSBpZiAoXG4gICAgICAgICAgICBwb3NpdGlvbi5sZWZ0ICsgZWxlbVdpZHRoIDw9IHRhcmdldE9mZnNldC5sZWZ0IHx8XG4gICAgICAgICAgICBwb3NpdGlvbi5sZWZ0ID49IHRhcmdldE9mZnNldC5sZWZ0ICsgdGFyZ2V0V2lkdGhcbiAgICAgICAgKSB7XG4gICAgICAgICAgICBmZWVkYmFjay5pbXBvcnRhbnQgPSAnaG9yaXpvbnRhbCc7XG4gICAgICAgIH0gZWxzZSBpZiAobWF4KGFicyhsZWZ0KSwgYWJzKHJpZ2h0KSkgPiBtYXgoYWJzKHRvcCksIGFicyhib3R0b20pKSkge1xuICAgICAgICAgICAgZmVlZGJhY2suaW1wb3J0YW50ID0gJ2hvcml6b250YWwnO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZmVlZGJhY2suaW1wb3J0YW50ID0gJ3ZlcnRpY2FsJztcbiAgICAgICAgfVxuXG4gICAgICAgIG9wdGlvbnMudXNpbmcoZmVlZGJhY2ssIHBvc2l0aW9uKTtcbiAgICB9XG5cbiAgICBjb25zdCBzdHlsZSA9IGVsZW0uc3R5bGU7XG4gICAgaWYgKGNvbXB1dGVkU3R5bGUucG9zaXRpb24gPT09ICdzdGF0aWMnKSB7XG4gICAgICAgIHN0eWxlLnBvc2l0aW9uID0gJ3JlbGF0aXZlJztcbiAgICB9XG4gICAgc3R5bGUubGVmdCA9IHBvc2l0aW9uLmxlZnQgKyAncHgnO1xuICAgIHN0eWxlLnRvcCA9IHBvc2l0aW9uLnRvcCArICdweCc7XG59XG5cbmNvbnN0IHJ1bGVzID0ge1xuICAgIGZpdDoge1xuICAgICAgICBsZWZ0KHBvc2l0aW9uLCBkYXRhKSB7XG4gICAgICAgICAgICBjb25zdCB3aXRoaW4gPSBkYXRhLndpdGhpbjtcbiAgICAgICAgICAgIGNvbnN0IHdpdGhpbk9mZnNldCA9IHdpdGhpbi5pc1dpbmRvdyA/IHdpdGhpbi5zY3JvbGxMZWZ0IDogd2l0aGluLm9mZnNldC5sZWZ0O1xuICAgICAgICAgICAgY29uc3Qgb3V0ZXJXaWR0aCA9IHdpdGhpbi53aWR0aDtcbiAgICAgICAgICAgIGNvbnN0IGNvbGxpc2lvblBvc0xlZnQgPSAgcG9zaXRpb24ubGVmdCAtIGRhdGEuY29sbGlzaW9uUG9zaXRpb24ubWFyZ2luTGVmdDtcbiAgICAgICAgICAgIGNvbnN0IG92ZXJMZWZ0ID0gd2l0aGluT2Zmc2V0IC0gY29sbGlzaW9uUG9zTGVmdDtcbiAgICAgICAgICAgIGNvbnN0IG92ZXJSaWdodCA9IGNvbGxpc2lvblBvc0xlZnQgKyBkYXRhLmNvbGxpc2lvbldpZHRoIC0gb3V0ZXJXaWR0aCAtIHdpdGhpbk9mZnNldDtcbiAgICAgICAgICAgIGxldCBuZXdPdmVyUmlnaHQ7XG5cbiAgICAgICAgICAgIGlmIChkYXRhLmNvbGxpc2lvbldpZHRoID4gb3V0ZXJXaWR0aCkge1xuICAgICAgICAgICAgICAgIGlmIChvdmVyTGVmdCA+IDAgJiYgb3ZlclJpZ2h0IDw9MCkge1xuICAgICAgICAgICAgICAgICAgICBuZXdPdmVyUmlnaHQgPSBwb3NpdGlvbi5sZWZ0ICsgb3ZlckxlZnQgKyBkYXRhLmNvbGxpc2lvbldpZHRoIC0gb3V0ZXJXaWR0aCAtIHdpdGhpbk9mZnNldDtcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb24ubGVmdCArPSBvdmVyTGVmdCAtIG5ld092ZXJSaWdodDtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKG92ZXJSaWdodCA+IDAgJiYgb3ZlckxlZnQgPD0wKSB7XG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uLmxlZnQgPSB3aXRoaW5PZmZzZXQ7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChvdmVyTGVmdCA+IG92ZXJSaWdodCkge1xuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbi5sZWZ0ID0gd2l0aGluT2Zmc2V0ICsgb3V0ZXJXaWR0aCAtIGRhdGEuY29sbGlzaW9uV2lkdGg7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb24ubGVmdCA9IHdpdGhpbk9mZnNldDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2UgaWYgKG92ZXJMZWZ0ID4gMCkge1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uLmxlZnQgKz0gb3ZlckxlZnQ7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKG92ZXJSaWdodCA+IDApIHtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbi5sZWZ0IC09IG92ZXJSaWdodDtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcG9zaXRpb24ubGVmdCA9IG1heChwb3NpdGlvbi5sZWZ0IC0gY29sbGlzaW9uUG9zTGVmdCwgcG9zaXRpb24ubGVmdCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgdG9wKHBvc2l0aW9uLCBkYXRhKSB7XG4gICAgICAgICAgICBjb25zdCB3aXRoaW4gPSBkYXRhLndpdGhpbjtcbiAgICAgICAgICAgIGNvbnN0IHdpdGhpbk9mZnNldCA9IHdpdGhpbi5pc1dpbmRvdyA/IHdpdGhpbi5zY3JvbGxUb3AgOiB3aXRoaW4ub2Zmc2V0LnRvcDtcbiAgICAgICAgICAgIGNvbnN0IG91dGVySGVpZ2h0ID0gZGF0YS53aXRoaW4uaGVpZ2h0O1xuICAgICAgICAgICAgY29uc3QgY29sbGlzaW9uUG9zVG9wID0gcG9zaXRpb24udG9wIC0gZGF0YS5jb2xsaXNpb25Qb3NpdGlvbi5tYXJnaW5Ub3A7XG4gICAgICAgICAgICBjb25zdCBvdmVyVG9wID0gd2l0aGluT2Zmc2V0IC0gY29sbGlzaW9uUG9zVG9wO1xuICAgICAgICAgICAgY29uc3Qgb3ZlckJvdHRvbSA9IGNvbGxpc2lvblBvc1RvcCArIGRhdGEuY29sbGlzaW9uSGVpZ2h0IC0gb3V0ZXJIZWlnaHQgLSB3aXRoaW5PZmZzZXQ7XG4gICAgICAgICAgICBsZXQgbmV3T3ZlckJvdHRvbTtcblxuICAgICAgICAgICAgaWYgKGRhdGEuY29sbGlzaW9uSGVpZ2h0ID4gb3V0ZXJIZWlnaHQpIHtcbiAgICAgICAgICAgICAgICBpZiAob3ZlclRvcCA+IDAgJiYgb3ZlckJvdHRvbSA8PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIG5ld092ZXJCb3R0b20gPSBwb3NpdGlvbi50b3AgKyBvdmVyVG9wICsgZGF0YS5jb2xsaXNpb25IZWlnaHQgLSBvdXRlckhlaWdodCAtIHdpdGhpbk9mZnNldDtcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb24udG9wICs9IG92ZXJUb3AgLSBuZXdPdmVyQm90dG9tO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAob3ZlckJvdHRvbSA+IDAgJiYgb3ZlclRvcCA8PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uLnRvcCA9IHdpdGhpbk9mZnNldDtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKG92ZXJUb3AgPiBvdmVyQm90dG9tKSB7XG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uLnRvcCA9IHdpdGhpbk9mZnNldCArIG91dGVySGVpZ2h0IC0gZGF0YS5jb2xsaXNpb25IZWlnaHQ7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb24udG9wID0gd2l0aGluT2Zmc2V0O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSBpZiAob3ZlclRvcCA+IDApIHtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbi50b3AgKz0gb3ZlclRvcDtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAob3ZlckJvdHRvbSA+IDApIHtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbi50b3AgLT0gb3ZlckJvdHRvbTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcG9zaXRpb24udG9wID0gbWF4KHBvc2l0aW9uLnRvcCAtIGNvbGxpc2lvblBvc1RvcCwgcG9zaXRpb24udG9wKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICBmbGlwOiB7XG4gICAgICAgIGxlZnQocG9zaXRpb24sIGRhdGEpIHtcbiAgICAgICAgICAgIGNvbnN0IHdpdGhpbiA9IGRhdGEud2l0aGluO1xuICAgICAgICAgICAgY29uc3Qgd2l0aGluT2Zmc2V0ID0gd2l0aGluLm9mZnNldC5sZWZ0ICsgd2l0aGluLnNjcm9sbExlZnQ7XG4gICAgICAgICAgICBjb25zdCBvdXRlcldpZHRoID0gd2l0aGluLndpZHRoO1xuICAgICAgICAgICAgY29uc3Qgb2Zmc2V0TGVmdCA9IHdpdGhpbi5pc1dpbmRvdyA/IHdpdGhpbi5zY3JvbGxMZWZ0IDogd2l0aGluLm9mZnNldC5sZWZ0O1xuICAgICAgICAgICAgY29uc3QgY29sbGlzaW9uUG9zTGVmdCA9IHBvc2l0aW9uLmxlZnQgLSBkYXRhLmNvbGxpc2lvblBvc2l0aW9uLm1hcmdpbkxlZnQ7XG4gICAgICAgICAgICBjb25zdCBvdmVyTGVmdCA9IGNvbGxpc2lvblBvc0xlZnQgLSBvZmZzZXRMZWZ0O1xuICAgICAgICAgICAgY29uc3Qgb3ZlclJpZ2h0ID0gY29sbGlzaW9uUG9zTGVmdCArIGRhdGEuY29sbGlzaW9uV2lkdGggLSBvdXRlcldpZHRoIC0gb2Zmc2V0TGVmdDtcbiAgICAgICAgICAgIGNvbnN0IG15T2Zmc2V0ID0gZGF0YS5teVswXSA9PT0gJ2xlZnQnID8gXG4gICAgICAgICAgICAgICAgLWRhdGEuZWxlbVdpZHRoIDpcbiAgICAgICAgICAgICAgICBkYXRhLm15WzBdID09PSAncmlnaHQnID9cbiAgICAgICAgICAgICAgICAgICAgZGF0YS5lbGVtV2lkdGggOiAwO1xuICAgICAgICAgICAgY29uc3QgYXRPZmZzZXQgPSBkYXRhLmF0WzBdID09PSAnbGVmdCcgP1xuICAgICAgICAgICAgICAgIGRhdGEudGFyZ2V0V2lkdGggOlxuICAgICAgICAgICAgICAgIGRhdGEuYXRbMF0gPT09ICdyaWdodCcgP1xuICAgICAgICAgICAgICAgICAgICAtZGF0YS50YXJnZXRXaWR0aCA6IDA7XG4gICAgICAgICAgICBjb25zdCBvZmZzZXQgPSAtMiAqIGRhdGEub2Zmc2V0WzBdO1xuICAgICAgICAgICAgbGV0IG5ld092ZXJSaWdodDtcbiAgICAgICAgICAgIGxldCBuZXdPdmVyTGVmdDtcblxuICAgICAgICAgICAgaWYgKG92ZXJMZWZ0IDwgMCkge1xuICAgICAgICAgICAgICAgIG5ld092ZXJSaWdodCA9IHBvc2l0aW9uLmxlZnQgKyBteU9mZnNldCArIGF0T2Zmc2V0ICsgb2Zmc2V0ICsgZGF0YS5jb2xsaXNpb25XaWR0aCAtIG91dGVyV2lkdGggLSB3aXRoaW5PZmZzZXQ7XG4gICAgICAgICAgICAgICAgaWYgKG5ld092ZXJSaWdodCA8IDAgfHwgbmV3T3ZlclJpZ2h0IDwgYWJzKG92ZXJMZWZ0KSkge1xuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbi5sZWZ0ICs9IG15T2Zmc2V0ICsgYXRPZmZzZXQgKyBvZmZzZXQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIGlmIChvdmVyUmlnaHQgPiAwKSB7XG4gICAgICAgICAgICAgICAgbmV3T3ZlckxlZnQgPSBwb3NpdGlvbi5sZWZ0IC0gZGF0YS5jb2xsaXNpb25Qb3NpdGlvbi5tYXJnaW5MZWZ0ICsgbXlPZmZzZXQgKyBhdE9mZnNldCArIG9mZnNldCAtIG9mZnNldExlZnQ7XG4gICAgICAgICAgICAgICAgLy8gdGhlIHNhbWUgdG8gdG9wXG4gICAgICAgICAgICAgICAgLy8gaWYgKG5ld092ZXJMZWZ0ID4gMCB8fCBhYnMobmV3T3ZlckxlZnQpIDwgb3ZlclJpZ2h0KSB7XG4gICAgICAgICAgICAgICAgaWYgKG5ld092ZXJMZWZ0ID4gMCkge1xuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbi5sZWZ0ICs9IG15T2Zmc2V0ICsgYXRPZmZzZXQgKyBvZmZzZXQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgIHRvcChwb3NpdGlvbiwgZGF0YSkge1xuICAgICAgICAgICAgY29uc3Qgd2l0aGluID0gZGF0YS53aXRoaW47XG4gICAgICAgICAgICBjb25zdCB3aXRoaW5PZmZzZXQgPSB3aXRoaW4ub2Zmc2V0LnRvcCArIHdpdGhpbi5zY3JvbGxUb3A7XG4gICAgICAgICAgICBjb25zdCBvdXRlckhlaWdodCA9IHdpdGhpbi5oZWlnaHQ7XG4gICAgICAgICAgICBjb25zdCBvZmZzZXRUb3AgPSB3aXRoaW4uaXNXaW5kb3cgPyB3aXRoaW4uc2Nyb2xsVG9wIDogd2l0aGluLm9mZnNldC50b3A7XG4gICAgICAgICAgICBjb25zdCBjb2xsaXNpb25Qb3NUb3AgPSBwb3NpdGlvbi50b3AgLSBkYXRhLmNvbGxpc2lvblBvc2l0aW9uLm1hcmdpblRvcDtcbiAgICAgICAgICAgIGNvbnN0IG92ZXJUb3AgPSBjb2xsaXNpb25Qb3NUb3AgLSBvZmZzZXRUb3A7XG4gICAgICAgICAgICBjb25zdCBvdmVyQm90dG9tID0gY29sbGlzaW9uUG9zVG9wICsgZGF0YS5jb2xsaXNpb25IZWlnaHQgLSBvdXRlckhlaWdodCAtIG9mZnNldFRvcDsgXG4gICAgICAgICAgICBjb25zdCBteU9mZnNldCA9IGRhdGEubXlbMV0gPT09ICd0b3AnID9cbiAgICAgICAgICAgICAgICAtZGF0YS5lbGVtSGVpZ2h0IDpcbiAgICAgICAgICAgICAgICBkYXRhLm15WzFdID09PSAnYm90dG9tJyA/XG4gICAgICAgICAgICAgICAgICAgIGRhdGEuZWxlbUhlaWdodCA6IDA7XG4gICAgICAgICAgICBjb25zdCBhdE9mZnNldCA9IGRhdGEuYXRbMV0gPT09ICd0b3AnID9cbiAgICAgICAgICAgICAgICBkYXRhLnRhcmdldEhlaWdodCA6XG4gICAgICAgICAgICAgICAgZGF0YS5hdFsxXSA9PT0gJ2JvdHRvbScgP1xuICAgICAgICAgICAgICAgICAgICAtZGF0YS50YXJnZXRIZWlnaHQgOiAwO1xuICAgICAgICAgICAgY29uc3Qgb2Zmc2V0ID0gLTIgKiBkYXRhLm9mZnNldFsxXTtcbiAgICAgICAgICAgIGxldCBuZXdPdmVyVG9wO1xuICAgICAgICAgICAgbGV0IG5ld092ZXJCb3R0b207XG5cbiAgICAgICAgICAgIGlmIChvdmVyVG9wIDwgMCkge1xuICAgICAgICAgICAgICAgIG5ld092ZXJCb3R0b20gPSBwb3NpdGlvbi50b3AgKyBteU9mZnNldCArIGF0T2Zmc2V0ICsgb2Zmc2V0ICsgZGF0YS5jb2xsaXNpb25IZWlnaHQgLSBvdXRlckhlaWdodCAtIHdpdGhpbk9mZnNldDtcbiAgICAgICAgICAgICAgICBpZiAobmV3T3ZlckJvdHRvbSA8IDAgfHwgbmV3T3ZlckJvdHRvbSA8IGFicyhvdmVyVG9wKSkge1xuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbi50b3AgKz0gbXlPZmZzZXQgKyBhdE9mZnNldCArIG9mZnNldDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2UgaWYgKG92ZXJCb3R0b20gPiAwKSB7XG4gICAgICAgICAgICAgICAgbmV3T3ZlclRvcCA9IHBvc2l0aW9uLnRvcCAtIGRhdGEuY29sbGlzaW9uUG9zaXRpb24ubWFyZ2luVG9wICsgbXlPZmZzZXQgKyBhdE9mZnNldCArIG9mZnNldCAtIG9mZnNldFRvcDtcbiAgICAgICAgICAgICAgICAvLyBiZWNhdXNlIHdpbmRvdyBjYW4gc2Nyb2xsIGRvd24sIHdoZW4gaXQgYmV5b25kIHRoZSB0b3AgYm9yZGVyLFxuICAgICAgICAgICAgICAgIC8vIHdlIGNhbiBub3Qgc2Nyb2xsIGl0IHRvIHZpZXcuIERvbid0IGZsaXAgaXQgaW4gdGhpcyBjYXNlXG4gICAgICAgICAgICAgICAgLy8gaWYgKG5ld092ZXJUb3AgPiAwIHx8IGFicyhuZXdPdmVyVG9wKSA8IG92ZXJCb3R0b20pIHtcbiAgICAgICAgICAgICAgICBpZiAobmV3T3ZlclRvcCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb24udG9wICs9IG15T2Zmc2V0ICsgYXRPZmZzZXQgKyBvZmZzZXQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSxcblxuICAgIGZsaXBmaXQ6IHtcbiAgICAgICAgbGVmdCguLi5hcmdzKSB7XG4gICAgICAgICAgICBydWxlcy5mbGlwLmxlZnQoLi4uYXJncyk7XG4gICAgICAgICAgICBydWxlcy5maXQubGVmdCguLi5hcmdzKTtcbiAgICAgICAgfSxcblxuICAgICAgICB0b3AoLi4uYXJncykge1xuICAgICAgICAgICAgcnVsZXMuZmxpcC50b3AoLi4uYXJncyk7XG4gICAgICAgICAgICBydWxlcy5maXQudG9wKC4uLmFyZ3MpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5cbmV4cG9ydCB7cG9zaXRpb259O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9tb3ZlV3JhcHBlci9wb3NpdGlvbi5qcyIsImltcG9ydCBJbnRhY3QgZnJvbSAnaW50YWN0JztcbmltcG9ydCB0ZW1wbGF0ZSBmcm9tICcuL2dyb3VwLnZkdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE9wdGlvbkdyb3VwIGV4dGVuZHMgSW50YWN0IHtcbiAgICBASW50YWN0LnRlbXBsYXRlKClcbiAgICBzdGF0aWMgdGVtcGxhdGUgPSB0ZW1wbGF0ZTtcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvc2VsZWN0L2dyb3VwLmpzIiwiXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihvYmosIF9WZHQsIGJsb2NrcywgJGNhbGxlZSkge1xuX1ZkdCB8fCAoX1ZkdCA9IFZkdCk7XG5vYmogfHwgKG9iaiA9IHt9KTtcbmJsb2NrcyB8fCAoYmxvY2tzID0ge30pO1xudmFyIGggPSBfVmR0Lm1pc3MuaCwgaGMgPSBfVmR0Lm1pc3MuaGMsIGh1ID0gX1ZkdC5taXNzLmh1LCB3aWRnZXRzID0gdGhpcyAmJiB0aGlzLndpZGdldHMgfHwge30sIF9ibG9ja3MgPSB7fSwgX19ibG9ja3MgPSB7fSxcbl9fdSA9IF9WZHQudXRpbHMsIGV4dGVuZCA9IF9fdS5leHRlbmQsIF9lID0gX191LmVycm9yLCBfY2xhc3NOYW1lID0gX191LmNsYXNzTmFtZSxcbl9fbyA9IF9fdS5PcHRpb25zLCBfZ2V0TW9kZWwgPSBfX28uZ2V0TW9kZWwsIF9zZXRNb2RlbCA9IF9fby5zZXRNb2RlbCxcbl9zZXRDaGVja2JveE1vZGVsID0gX191LnNldENoZWNrYm94TW9kZWwsIF9kZXRlY3RDaGVja2JveENoZWNrZWQgPSBfX3UuZGV0ZWN0Q2hlY2tib3hDaGVja2VkLFxuX3NldFNlbGVjdE1vZGVsID0gX191LnNldFNlbGVjdE1vZGVsLFxuc2VsZiA9IHRoaXMuZGF0YSwgJHRoaXMgPSB0aGlzLCBzY29wZSA9IG9iaiwgQW5pbWF0ZSA9IHNlbGYgJiYgc2VsZi5BbmltYXRlLCBwYXJlbnQgPSAoJGNhbGxlZSB8fCB7fSkuX3N1cGVyXG5jb25zdCB7Y2hpbGRyZW4sIGxhYmVsfSA9IHNlbGYuZ2V0KCk7XG5cbnJldHVybiBoKCdkaXYnLCBudWxsLCBbaCgnZGl2JywgbnVsbCwgZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW2xhYmVsIF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcyksICdrLWxhYmVsJyksICdcXG4gICAgJywgZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW2NoaWxkcmVuIF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcyksICdcXG4nXSwgJ2stZ3JvdXAnKVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvc2VsZWN0L2dyb3VwLnZkdCIsImltcG9ydCBJbnRhY3QgZnJvbSAnaW50YWN0JztcbmltcG9ydCB0ZW1wbGF0ZSBmcm9tICcuL2luZGV4LnZkdCc7XG5pbXBvcnQgJy4uLy4uL3N0eWxlcy9rcGMuc3R5bCc7XG5pbXBvcnQgJy4vaW5kZXguc3R5bCc7XG5pbXBvcnQgT3B0aW9uIGZyb20gJy4vb3B0aW9uJztcbmltcG9ydCBHcm91cCBmcm9tICcuL2dyb3VwJztcbmltcG9ydCB7c2VsZWN0SW5wdXQsIF8kfSBmcm9tICcuLi91dGlscyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNlbGVjdCBleHRlbmRzIEludGFjdCB7XG4gICAgQEludGFjdC50ZW1wbGF0ZSgpXG4gICAgc3RhdGljIHRlbXBsYXRlID0gdGVtcGxhdGU7XG5cbiAgICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgICAgICBtdWx0aXBsZTogQm9vbGVhbixcbiAgICAgICAgZGlzYWJsZWQ6IEJvb2xlYW4sXG4gICAgICAgIGNsZWFyYWJsZTogQm9vbGVhbixcbiAgICAgICAgZmlsdGVyYWJsZTogQm9vbGVhbixcbiAgICAgICAgZmx1aWQ6IEJvb2xlYW4sXG4gICAgICAgIGFsbG93VW5tYXRjaDogQm9vbGVhbixcbiAgICB9O1xuXG4gICAgZGVmYXVsdHMoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBkYXRhOiBbXSxcbiAgICAgICAgICAgIHZhbHVlOiAnJyxcbiAgICAgICAgICAgIG11bHRpcGxlOiBmYWxzZSwgLy/mlK/mjIHlpJrpgIlsaVxuICAgICAgICAgICAgZGlzYWJsZWQ6IGZhbHNlLFxuICAgICAgICAgICAgY2xlYXJhYmxlOiBmYWxzZSwgLy8g5piv5ZCm5Y+v5riF56m6IFxuICAgICAgICAgICAgZmlsdGVyYWJsZTogZmFsc2UsIC8vIOaQnOe0ouetm+mAiVxuICAgICAgICAgICAga2V5d29yZHM6IHVuZGVmaW5lZCxcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyOiB1bmRlZmluZWQsXG4gICAgICAgICAgICBzaXplOiAnZGVmYXVsdCcsXG4gICAgICAgICAgICBmbHVpZDogZmFsc2UsXG4gICAgICAgICAgICB3aWR0aDogdW5kZWZpbmVkLFxuICAgICAgICAgICAgYWxsb3dVbm1hdGNoOiBmYWxzZSxcblxuICAgICAgICAgICAgX3Nob3c6IGZhbHNlLFxuICAgICAgICB9XG4gICAgfVxuXG4gICAgX2luaXQoKSB7XG4gICAgICAgIHRoaXMub24oJyRjaGFuZ2VkOnZhbHVlJywgKCkgPT4ge1xuICAgICAgICAgICAgaWYgKHRoaXMuZ2V0KCdtdWx0aXBsZScpICYmIHRoaXMuZ2V0KCdfc2hvdycpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5yZWZzLm1lbnUucG9zaXRpb24oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgX29uQ2xlYXIoZSkge1xuICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICB0aGlzLnNldCgndmFsdWUnLCAnJyk7XG4gICAgfVxuXG4gICAgX29uU2VsZWN0KHZhbHVlKSB7XG4gICAgICAgIGlmICghdGhpcy5nZXQoJ211bHRpcGxlJykpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0KCd2YWx1ZScsIHZhbHVlLCB7YXN5bmM6IHRydWV9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGxldCB2YWx1ZXMgPSB0aGlzLmdldCgndmFsdWUnKTtcbiAgICAgICAgICAgIGlmICghQXJyYXkuaXNBcnJheSh2YWx1ZXMpKSB7XG4gICAgICAgICAgICAgICAgdmFsdWVzID0gW107XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHZhbHVlcyA9IHZhbHVlcy5zbGljZSgwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGluZGV4ID0gdmFsdWVzLmluZGV4T2YodmFsdWUpO1xuICAgICAgICAgICAgaWYgKH5pbmRleCkge1xuICAgICAgICAgICAgICAgIC8vIGlmIGZpbmQsIGRlbGV0ZSBpdFxuICAgICAgICAgICAgICAgIHZhbHVlcy5zcGxpY2UoaW5kZXgsIDEpOyBcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdmFsdWVzLnB1c2godmFsdWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5zZXQoJ3ZhbHVlJywgdmFsdWVzLCB7YXN5bmM6IHRydWV9KTtcbiAgICAgICAgICAgIHRoaXMuX2ZvY3VzSW5wdXQoKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9yZXNldFNlYXJjaCgpO1xuICAgIH1cblxuICAgIF9vblNlYXJjaChlKSB7XG4gICAgICAgIHRoaXMuc2V0KCdrZXl3b3JkcycsIGUudGFyZ2V0LnZhbHVlLnRyaW0oKSk7XG4gICAgICAgIC8vIGFsd2F5cyBzaG93IG1lbnUgb24gc2VhcmNoaW5nXG4gICAgICAgIHRoaXMucmVmcy5tZW51LnNob3coKTtcbiAgICAgICAgdGhpcy5yZWZzLm1lbnUuZm9jdXNJdGVtQnlJbmRleCgwKTtcbiAgICAgICAgLy8gdGhlIHBvc2l0aW9uIG1heSBiZSBmbGlwLCBhbmQgdGhlIHNlbGVjdCBpbnB1dCBoZWlnaHQgbXkgY2hhbmdlIGhlaWdodCB0b28sXG4gICAgICAgIC8vIHNvIHdlIHNob3VsZCByZXNldCB0aGUgcG9zaXRpb25cbiAgICAgICAgdGhpcy5yZWZzLm1lbnUucG9zaXRpb24oKTtcbiAgICB9XG5cbiAgICBfcmVzZXRTZWFyY2goKSB7XG4gICAgICAgIHRoaXMuc2V0KCdrZXl3b3JkcycsIHVuZGVmaW5lZCwge2FzeW5jOiB0cnVlfSk7XG4gICAgfVxuXG4gICAgX29uQ2hhbmdlU2hvdyhjLCB2YWx1ZSkge1xuICAgICAgICB0aGlzLnNldCgnX3Nob3cnLCB2YWx1ZSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQGJyaWVmIGxldCB0aGUgYmx1ciBtZXRob2QgY2FsbGVkIGFmdGVyIHNlbGVjdFxuICAgICAqIGlmIHdlIHNlbGVjdGVkIHRoZSBvcHRpb24sIHRoZW4gdGhlIGtleXdvcmRzIGhhcyBiZWVuIHNldCB0byB1bmRlZmluZFxuICAgICAqIGluIHRoaXMgY2FzZSwgd2UgZG8gbm90aGluZywgb3RoZXJ3aXNlIHdlIHJlc2V0IGl0XG4gICAgICovXG4gICAgX29uQmx1cigpIHtcbiAgICAgICAgY29uc3Qge2tleXdvcmRzLCBhbGxvd1VubWF0Y2h9ID0gdGhpcy5nZXQoKTtcbiAgICAgICAgaWYgKGFsbG93VW5tYXRjaCAmJiBrZXl3b3JkcyAhPSBudWxsKSB7XG4gICAgICAgICAgICB0aGlzLnNldCh7XG4gICAgICAgICAgICAgICAgdmFsdWU6IGtleXdvcmRzLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnRpbWVyID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICBpZiAodGhpcy5nZXQoJ2tleXdvcmRzJykgIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHRoaXMuX3Jlc2V0U2VhcmNoKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIDIwMCk7XG4gICAgfVxuXG4gICAgX3NlbGVjdElucHV0KGUpIHtcbiAgICAgICAgc2VsZWN0SW5wdXQoZS50YXJnZXQpOyBcbiAgICB9XG5cbiAgICBfb25Gb2N1cyhlKSB7XG4gICAgICAgIGNsZWFyVGltZW91dCh0aGlzLnRpbWVyKTtcbiAgICB9XG5cbiAgICBfb25Gb2N1c291dCgpIHtcbiAgICAgICAgdGhpcy5yZWZzLmRyb3Bkb3duLmhpZGUoKTtcbiAgICB9XG5cbiAgICBfZGVsZXRlKHZhbHVlLCBlKSB7XG4gICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgIGNvbnN0IHZhbHVlcyA9IHRoaXMuZ2V0KCd2YWx1ZScpLnNsaWNlKDApO1xuICAgICAgICBjb25zdCBpbmRleCA9IHZhbHVlcy5pbmRleE9mKHZhbHVlKTtcbiAgICAgICAgdmFsdWVzLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgIHRoaXMuc2V0KCd2YWx1ZScsIHZhbHVlcyk7XG4gICAgICAgIHRoaXMuX2ZvY3VzSW5wdXQoKTtcbiAgICB9XG5cbiAgICBfZm9jdXNJbnB1dCgpIHtcbiAgICAgICAgaWYgKHRoaXMuZ2V0KCdmaWx0ZXJhYmxlJykpIHtcbiAgICAgICAgICAgIHRoaXMucmVmcy5pbnB1dC5mb2N1cygpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgX3Bvc2l0aW9uKCkge1xuICAgICAgICBjb25zdCBtZW51RWxlbWVudCA9IHRoaXMucmVmcy5tZW51LnZkdC52Tm9kZS5jaGlsZHJlbi5lbGVtZW50O1xuICAgICAgICBjb25zdCB3aWR0aCA9IHRoaXMuZWxlbWVudC5vZmZzZXRXaWR0aDtcbiAgICAgICAgY29uc3QgbWVudVdpZHRoID0gbWVudUVsZW1lbnQub2Zmc2V0V2lkdGg7XG4gICAgICAgIGlmICh3aWR0aCA+IG1lbnVXaWR0aCkge1xuICAgICAgICAgICAgbWVudUVsZW1lbnQuc3R5bGUud2lkdGggPSBgJHt3aWR0aH1weGA7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBfb25LZXlwcmVzcyhlKSB7XG4gICAgICAgIGlmIChlLmtleUNvZGUgPT09IDEzKSB7XG4gICAgICAgICAgICB0aGlzLnJlZnMud3JhcHBlci5jbGljaygpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgX29uS2V5ZG93bihlKSB7XG4gICAgICAgIGlmIChlLmtleUNvZGUgPT09IDkpIHsgLy8gdGFiXG4gICAgICAgICAgICB0aGlzLnJlZnMuZHJvcGRvd24uaGlkZSgpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5leHBvcnQge1NlbGVjdCwgT3B0aW9uLCBHcm91cCBhcyBPcHRpb25Hcm91cH07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL3NlbGVjdC9pbmRleC5qcyIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG4gICAgaWYobW9kdWxlLmhvdCkge1xuICAgICAgLy8gMTUyNzc1NDM5NjExNFxuICAgICAgdmFyIGNzc1JlbG9hZCA9IHJlcXVpcmUoXCIhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1ob3QtbG9hZGVyL2hvdE1vZHVsZVJlcGxhY2VtZW50LmpzXCIpKG1vZHVsZS5pZCwge1wiZmlsZU1hcFwiOlwie2ZpbGVOYW1lfVwifSk7XG4gICAgICBtb2R1bGUuaG90LmRpc3Bvc2UoY3NzUmVsb2FkKTtcbiAgICAgIG1vZHVsZS5ob3QuYWNjZXB0KHVuZGVmaW5lZCwgY3NzUmVsb2FkKTtcbiAgICB9XG4gIFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vY29tcG9uZW50cy9zZWxlY3QvaW5kZXguc3R5bFxuLy8gbW9kdWxlIGlkID0gLi9jb21wb25lbnRzL3NlbGVjdC9pbmRleC5zdHlsXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyIsImltcG9ydCBJbnB1dCBmcm9tICcuLi9pbnB1dCc7aW1wb3J0IERyb3Bkb3duLCB7RHJvcGRvd25JdGVtLCBEcm9wZG93bk1lbnV9IGZyb20gJy4uL2Ryb3Bkb3duJztpbXBvcnQge2lzU3RyaW5nT3JOdW1iZXIsIGdldFRleHRCeUNoaWxkcmVuLCBhZGRTdHlsZSwgXyR9IGZyb20gJy4uL3V0aWxzJztpbXBvcnQgT3B0aW9uIGZyb20gJy4vb3B0aW9uJztpbXBvcnQgT3B0aW9uR3JvdXAgZnJvbSAnLi9ncm91cCc7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihvYmosIF9WZHQsIGJsb2NrcywgJGNhbGxlZSkge1xuX1ZkdCB8fCAoX1ZkdCA9IFZkdCk7XG5vYmogfHwgKG9iaiA9IHt9KTtcbmJsb2NrcyB8fCAoYmxvY2tzID0ge30pO1xudmFyIGggPSBfVmR0Lm1pc3MuaCwgaGMgPSBfVmR0Lm1pc3MuaGMsIGh1ID0gX1ZkdC5taXNzLmh1LCB3aWRnZXRzID0gdGhpcyAmJiB0aGlzLndpZGdldHMgfHwge30sIF9ibG9ja3MgPSB7fSwgX19ibG9ja3MgPSB7fSxcbl9fdSA9IF9WZHQudXRpbHMsIGV4dGVuZCA9IF9fdS5leHRlbmQsIF9lID0gX191LmVycm9yLCBfY2xhc3NOYW1lID0gX191LmNsYXNzTmFtZSxcbl9fbyA9IF9fdS5PcHRpb25zLCBfZ2V0TW9kZWwgPSBfX28uZ2V0TW9kZWwsIF9zZXRNb2RlbCA9IF9fby5zZXRNb2RlbCxcbl9zZXRDaGVja2JveE1vZGVsID0gX191LnNldENoZWNrYm94TW9kZWwsIF9kZXRlY3RDaGVja2JveENoZWNrZWQgPSBfX3UuZGV0ZWN0Q2hlY2tib3hDaGVja2VkLFxuX3NldFNlbGVjdE1vZGVsID0gX191LnNldFNlbGVjdE1vZGVsLFxuc2VsZiA9IHRoaXMuZGF0YSwgJHRoaXMgPSB0aGlzLCBzY29wZSA9IG9iaiwgQW5pbWF0ZSA9IHNlbGYgJiYgc2VsZi5BbmltYXRlLCBwYXJlbnQgPSAoJGNhbGxlZSB8fCB7fSkuX3N1cGVyXG5cblxuXG5cblxuXG5jb25zdCB7XG4gICAgY2xhc3NOYW1lLCBjbGVhcmFibGUsIGRhdGEsIHZhbHVlLCBtdWx0aXBsZSxcbiAgICBkaXNhYmxlZCwgZmlsdGVyYWJsZSwga2V5d29yZHMsIF9zaG93LFxuICAgIHBsYWNlaG9sZGVyLCBzaXplLCBzdHlsZSwgbmFtZSwgY2hpbGRyZW4sXG4gICAgZmx1aWQsIHdpZHRoLCBhbGxvd1VubWF0Y2gsXG59ID0gc2VsZi5nZXQoKTtcblxuY29uc3QgX3BsYWNlaG9sZGVyID0gcGxhY2Vob2xkZXIgPT0gbnVsbCA/XG4gICAgKGFsbG93VW5tYXRjaCAmJiBmaWx0ZXJhYmxlKSA/IF8kKCfor7fovpPlhaXmiJbpgInmi6knKSA6IF8kKCfor7fpgInmi6knKSA6XG4gICAgcGxhY2Vob2xkZXI7XG5cbmNvbnN0IGNsYXNzTmFtZU9iaiA9IHtcbiAgICAnay1zZWxlY3QnOiB0cnVlLFxuICAgIFtjbGFzc05hbWVdOiBjbGFzc05hbWUsXG4gICAgJ2stZGlzYWJsZWQnOiBkaXNhYmxlZCxcbiAgICAnay1zaG93JzogX3Nob3csXG4gICAgJ2stY2xlYXJhYmxlJzogY2xlYXJhYmxlLFxuICAgIFtgay0ke3NpemV9YF06IHNpemUgIT09ICdkZWZhdWx0JyxcbiAgICAnay1mbHVpZCc6IGZsdWlkLFxufTtcblxubGV0IGhhc1ZhbHVlID0gdmFsdWUgIT0gbnVsbCAmJiAoIW11bHRpcGxlICYmIHZhbHVlICE9PSAnJyB8fCBtdWx0aXBsZSAmJiB2YWx1ZS5sZW5ndGgpO1xuY29uc3QgaXNHcm91cCA9IEFycmF5LmlzQXJyYXkoc2VsZi5nZXQoJ2RhdGEuMC5kYXRhJykpO1xuXG5sZXQgbGFiZWwgPSBpc1N0cmluZ09yTnVtYmVyKHZhbHVlKSA/IHZhbHVlIDogbnVsbDtcbmxldCBsYWJlbHMgPSBbXTtcblxuY29uc3QgaGFuZGxlUHJvcHMgPSBwcm9wcyA9PiB7XG4gICAgbGV0IGFjdGl2ZSA9IGZhbHNlO1xuICAgIGxldCB2YWxpZCA9IGZhbHNlO1xuXG4gICAgaWYgKCFtdWx0aXBsZSkge1xuICAgICAgICBpZiAocHJvcHMudmFsdWUgPT09IHZhbHVlKSB7XG4gICAgICAgICAgICAvLyBzZXQgbGFiZWxcbiAgICAgICAgICAgIGxhYmVsID0gcHJvcHMubGFiZWw7XG4gICAgICAgICAgICBhY3RpdmUgPSB0cnVlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICAgIGNvbnN0IGluZGV4ID0gdmFsdWUuaW5kZXhPZihwcm9wcy52YWx1ZSk7XG4gICAgICAgIGlmICh+aW5kZXgpIHtcbiAgICAgICAgICAgIC8vIGtlZXAgb3JkZXIgY29uc2lzdGVudFxuICAgICAgICAgICAgbGFiZWxzW2luZGV4XSA9IHByb3BzLmxhYmVsO1xuICAgICAgICAgICAgYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgbGV0IHRtcDtcbiAgICBpZiAoXG4gICAgICAgICFmaWx0ZXJhYmxlICYmIFxuICAgICAgICBwcm9wcy5sYWJlbCB8fCBcbiAgICAgICAga2V5d29yZHMgPT0gbnVsbCB8fCBcbiAgICAgICAgfnByb3BzLmxhYmVsLnRvTG93ZXJDYXNlKCkuaW5kZXhPZigodG1wID0ga2V5d29yZHMudG9Mb3dlckNhc2UoKSkpIHx8IFxuICAgICAgICAoXG4gICAgICAgICAgICBpc1N0cmluZ09yTnVtYmVyKHByb3BzLnZhbHVlKSAmJiBcbiAgICAgICAgICAgIH5TdHJpbmcocHJvcHMudmFsdWUpLnRvTG93ZXJDYXNlKCkuaW5kZXhPZih0bXApXG4gICAgICAgIClcbiAgICApIHtcbiAgICAgICAgdmFsaWQgPSB0cnVlOyBcbiAgICB9XG5cbiAgICByZXR1cm4ge2FjdGl2ZSwgdmFsaWR9O1xufTtcblxuY29uc3QgT3B0aW9ucyA9IHByb3BzID0+IHtcbiAgICBjb25zdCBkYXRhID0gcHJvcHMuZGF0YTtcbiAgICBjb25zdCByZXQgPSBbXTtcbiAgICBkYXRhLmZvckVhY2goKGl0ZW0sIGluZGV4KSA9PiB7XG4gICAgICAgIC8vIGRlcHJlY2F0ZSB0ZXh0LCB1c2UgbGFiZWwgaW5zdGVhZCBvZlxuICAgICAgICBpZiAoaXRlbS50ZXh0KSBpdGVtLmxhYmVsID0gaXRlbS50ZXh0O1xuICAgICAgICBcbiAgICAgICAgY29uc3Qge3ZhbGlkLCBhY3RpdmV9ID0gaGFuZGxlUHJvcHMoaXRlbSk7XG4gICAgICAgIGlmICh2YWxpZCkge1xuICAgICAgICAgICAgcmV0LnB1c2goXG4gICAgICAgICAgICAgICAgaChEcm9wZG93bkl0ZW0sIHsnZXYtc2VsZWN0JzogZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW3NlbGYuX29uU2VsZWN0LmJpbmQoc2VsZiwgaXRlbS52YWx1ZSkgXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKSwgJ2Rpc2FibGVkJzogZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW2l0ZW0uZGlzYWJsZWQgXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKSwgJ2NsYXNzTmFtZSc6IF9jbGFzc05hbWUoZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW3snay1hY3RpdmUnOiBhY3RpdmV9IF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcykpLCAnaGlkZU9uU2VsZWN0JzogZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gWyFtdWx0aXBsZSBdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpLCAnY2hpbGRyZW4nOiBmdW5jdGlvbigpIHt0cnkge3JldHVybiBbaXRlbS50ZW1wbGF0ZSA/IGl0ZW0udGVtcGxhdGUoaXRlbSwgaW5kZXgpIDogaXRlbS5sYWJlbCBdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpLCAnX2NvbnRleHQnOiAkdGhpc30pXG4gICAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gcmV0O1xufVxuXG5jb25zdCBPcHRpb25zVk5vZGVzID0gKHtjaGlsZHJlbn0pID0+IHtcbiAgICByZXR1cm4gX191Lm1hcChjaGlsZHJlbiA/IChBcnJheS5pc0FycmF5KGNoaWxkcmVuKSA/IGNoaWxkcmVuIDogW2NoaWxkcmVuXSkgOiBjaGlsZHJlbiwgdk5vZGUgPT4ge1xuICAgICAgICBpZiAodk5vZGUudGFnID09PSBPcHRpb24pIHtcbiAgICAgICAgICAgIGxldCBwcm9wcyA9IHZOb2RlLnByb3BzO1xuICAgICAgICAgICAgcHJvcHMgPSB7XG4gICAgICAgICAgICAgICAgLi4ucHJvcHMsIFxuICAgICAgICAgICAgICAgICdldi1zZWxlY3QnOiBzZWxmLl9vblNlbGVjdC5iaW5kKHNlbGYsIHByb3BzLnZhbHVlKSxcbiAgICAgICAgICAgICAgICBoaWRlT25TZWxlY3Q6ICFtdWx0aXBsZSxcbiAgICAgICAgICAgICAgICBsYWJlbDogcHJvcHMubGFiZWwgfHwgZ2V0VGV4dEJ5Q2hpbGRyZW4ocHJvcHMuY2hpbGRyZW4pLFxuICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBwcm9wcy5jaGlsZHJlbiB8fCBwcm9wcy5sYWJlbCBcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBjb25zdCB7YWN0aXZlLCB2YWxpZH0gPSBoYW5kbGVQcm9wcyhwcm9wcyk7XG4gICAgICAgICAgICBpZiAoIXZhbGlkKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGhjKCcnKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcHJvcHMuY2xhc3NOYW1lID0gX2NsYXNzTmFtZSh7XG4gICAgICAgICAgICAgICAgICAgIFtwcm9wcy5jbGFzc05hbWVdOiBwcm9wcy5jbGFzc05hbWUsXG4gICAgICAgICAgICAgICAgICAgICdrLWFjdGl2ZSc6IGFjdGl2ZSxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gcmV0dXJuIHRoZSBjbG9uZWQgdk5vZGVcbiAgICAgICAgICAgIHJldHVybiBoKE9wdGlvbiwgcHJvcHMpO1xuICAgICAgICB9IGVsc2UgaWYgKHZOb2RlLnRhZyA9PT0gT3B0aW9uR3JvdXApIHtcbiAgICAgICAgICAgIGxldCBwcm9wcyA9IHZOb2RlLnByb3BzO1xuICAgICAgICAgICAgcHJvcHMgPSB7XG4gICAgICAgICAgICAgICAgLi4ucHJvcHMsXG4gICAgICAgICAgICAgICAgY2hpbGRyZW46IGgoT3B0aW9uc1ZOb2RlcywgeydjaGlsZHJlbic6IGZ1bmN0aW9uKCkge3RyeSB7cmV0dXJuIFtwcm9wcy5jaGlsZHJlbiBdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpLCAnX2NvbnRleHQnOiAkdGhpc30pXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgcmV0dXJuIGgoT3B0aW9uR3JvdXAsIHByb3BzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB2Tm9kZTtcbiAgICB9KTsgXG59IFxuXG5jb25zdCBNZW51ID0gKFxuICAgIGgoRHJvcGRvd25NZW51LCB7J2V2LSRjaGFuZ2VkOnNob3cnOiBmdW5jdGlvbigpIHt0cnkge3JldHVybiBbc2VsZi5fcG9zaXRpb24gXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKSwgJ2NsYXNzTmFtZSc6ICdrLXNlbGVjdC1kcm9wZG93bicsICdldi0kY2hhbmdlOnNob3cnOiBmdW5jdGlvbigpIHt0cnkge3JldHVybiBbc2VsZi5fb25DaGFuZ2VTaG93IF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcyksICdjaGlsZHJlbic6IFtmdW5jdGlvbigpIHt0cnkge3JldHVybiBbIWlzR3JvdXAgXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKSA/IGgoT3B0aW9ucywgeydkYXRhJzogZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW2RhdGEgXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKSwgJ2NoaWxkcmVuJzogbnVsbCwgJ19jb250ZXh0JzogJHRoaXN9KSA6IF9WZHQudXRpbHMubWFwKGZ1bmN0aW9uKCkge3RyeSB7cmV0dXJuIFtkYXRhIF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcyksIGZ1bmN0aW9uKHZhbHVlLCBrZXkpIHtcbnJldHVybiBoKE9wdGlvbkdyb3VwLCB7J2xhYmVsJzogZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW3ZhbHVlLmxhYmVsIF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcyksICdjaGlsZHJlbic6IGgoT3B0aW9ucywgeydkYXRhJzogZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW3ZhbHVlLmRhdGEgXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKSwgJ2NoaWxkcmVuJzogbnVsbCwgJ19jb250ZXh0JzogJHRoaXN9KSwgJ19jb250ZXh0JzogJHRoaXN9KTtcbn0sIHRoaXMpLCBoKE9wdGlvbnNWTm9kZXMsIHsnY2hpbGRyZW4nOiBmdW5jdGlvbigpIHt0cnkge3JldHVybiBbY2hpbGRyZW4gXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKSwgJ19jb250ZXh0JzogJHRoaXN9KV0sICdfY29udGV4dCc6ICR0aGlzfSwgbnVsbCwgbnVsbCwgbnVsbCwgZnVuY3Rpb24oaSkge3dpZGdldHNbJ21lbnUnXSA9IGl9KVxuKTtcblxuLy8gaWYgdGhlIHZhbHVlIGlzIG5vdCBpbiBvcHRpb25zLCB0aGVuIHNldCBoYXNWYWx1ZSB0byBmYWxzZVxuaWYgKGhhc1ZhbHVlICYmICFsYWJlbCAmJiAhbGFiZWxzLmxlbmd0aCkge1xuICAgIGhhc1ZhbHVlID0gZmFsc2U7XG59XG5cbnJldHVybiBoKCdkaXYnLCB7J3N0eWxlJzogZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW3dpZHRoICE9IG51bGwgPyBhZGRTdHlsZShzdHlsZSwge3dpZHRoOiBgJHt3aWR0aH1weGB9KSA6IHN0eWxlIF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcyksICd0YWJpbmRleCc6IGZ1bmN0aW9uKCkge3RyeSB7cmV0dXJuIFtkaXNhYmxlZCA/IFwiLTFcIiA6IFwiMFwiIF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcyksICdldi1rZXlwcmVzcyc6IGZ1bmN0aW9uKCkge3RyeSB7cmV0dXJuIFtzZWxmLl9vbktleXByZXNzIF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcyksICdldi1rZXlkb3duJzogZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW3NlbGYuX29uS2V5ZG93biBdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpfSwgaChEcm9wZG93biwgeydwb3NpdGlvbic6IGZ1bmN0aW9uKCkge3RyeSB7cmV0dXJuIFt7bXk6ICdsZWZ0IHRvcCcsIGF0OiAnbGVmdCBib3R0b20nfSBdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpLCAndHJpZ2dlcic6ICdjbGljaycsICdkaXNhYmxlZCc6IGZ1bmN0aW9uKCkge3RyeSB7cmV0dXJuIFtkaXNhYmxlZCBdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpLCAnY2hpbGRyZW4nOiBbaCgnZGl2Jywgeydldi1jbGljayc6IGZ1bmN0aW9uKCkge3RyeSB7cmV0dXJuIFtzZWxmLl9mb2N1c0lucHV0IF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcyksICd0YWJpbmRleCc6ICctMSd9LCBbaCgnaW5wdXQnLCB7J3R5cGUnOiAnaGlkZGVuJywgJ3ZhbHVlJzogZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW3ZhbHVlIF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcyksICduYW1lJzogZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW25hbWUgXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKX0pLCBmdW5jdGlvbigpIHt0cnkge3JldHVybiBbIW11bHRpcGxlICYmIGZpbHRlcmFibGUgXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKSA/IGgoSW5wdXQsIHsndmFsdWUnOiBmdW5jdGlvbigpIHt0cnkge3JldHVybiBba2V5d29yZHMgPT0gbnVsbCA/IGxhYmVsIDoga2V5d29yZHMgXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKSwgJ2V2LWlucHV0JzogZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW3NlbGYuX29uU2VhcmNoIF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcyksICdldi1ibHVyJzogZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW3NlbGYuX29uQmx1ciBdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpLCAnZXYtZm9jdXMnOiBmdW5jdGlvbigpIHt0cnkge3JldHVybiBbc2VsZi5fc2VsZWN0SW5wdXQgXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKSwgJ2Rpc2FibGVkJzogZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW2Rpc2FibGVkIF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcyksICdwbGFjZWhvbGRlcic6IGZ1bmN0aW9uKCkge3RyeSB7cmV0dXJuIFtfcGxhY2Vob2xkZXIgXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKSwgJ3NpemUnOiBmdW5jdGlvbigpIHt0cnkge3JldHVybiBbc2l6ZSBdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpLCAnZmx1aWQnOiBmdW5jdGlvbigpIHt0cnkge3JldHVybiBbdHJ1ZV1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcyksICdjaGlsZHJlbic6IG51bGwsICdfY29udGV4dCc6ICR0aGlzfSwgbnVsbCwgbnVsbCwgbnVsbCwgZnVuY3Rpb24oaSkge3dpZGdldHNbJ2lucHV0J10gPSBpfSkgOiBmdW5jdGlvbigpIHt0cnkge3JldHVybiBbIWZpbHRlcmFibGUgJiYgIWhhc1ZhbHVlIF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcykgPyBoKCdzcGFuJywgbnVsbCwgZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW19wbGFjZWhvbGRlciBdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpLCAnay1wbGFjZWhvbGRlciBjLWVsbGlwc2lzJykgOiBmdW5jdGlvbigpIHt0cnkge3JldHVybiBbIW11bHRpcGxlIF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcykgPyBoKCdzcGFuJywgbnVsbCwgZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW2xhYmVsIF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcyksICdrLXZhbHVlIGMtZWxsaXBzaXMnKSA6IGgoQW5pbWF0ZSwgeydhOnRhZyc6ICdzcGFuJywgJ2E6ZGlzYWJsZWQnOiBmdW5jdGlvbigpIHt0cnkge3JldHVybiBbdHJ1ZV1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcyksICdjbGFzc05hbWUnOiAnay12YWx1ZXMnLCAnY2hpbGRyZW4nOiBbX1ZkdC51dGlscy5tYXAoZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW2xhYmVscyBdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpLCBmdW5jdGlvbihpdGVtLCBpbmRleCkge1xucmV0dXJuIGgoQW5pbWF0ZSwgeydhOnRhZyc6ICdzcGFuJywgJ2NsYXNzTmFtZSc6ICdrLXRhZycsICdrZXknOiBmdW5jdGlvbigpIHt0cnkge3JldHVybiBbdmFsdWVbaW5kZXhdIF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcyksICdhOnRyYW5zaXRpb24nOiAnZmFkZScsICdjaGlsZHJlbic6IFtoKCdzcGFuJywgbnVsbCwgZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW2l0ZW0gXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKSwgJ2stdGV4dCcpLCBoKCdpJywgeydldi1jbGljayc6IGZ1bmN0aW9uKCkge3RyeSB7cmV0dXJuIFtzZWxmLl9kZWxldGUuYmluZChzZWxmLCB2YWx1ZVtpbmRleF0pIF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcyl9LCBudWxsLCAnay1pY29uIGlvbi1pb3MtY2xvc2UtZW1wdHknKV0sICdfY29udGV4dCc6ICR0aGlzfSk7XG59LCB0aGlzKSwgZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW2ZpbHRlcmFibGUgXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKSA/IGgoSW5wdXQsIHsndmFsdWUnOiBmdW5jdGlvbigpIHt0cnkge3JldHVybiBba2V5d29yZHMgXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKSwgJ2V2LWlucHV0JzogZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW3NlbGYuX29uU2VhcmNoIF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcyksICdldi1ibHVyJzogZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW3NlbGYuX29uQmx1ciBdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpLCAnZXYtZm9jdXMnOiBmdW5jdGlvbigpIHt0cnkge3JldHVybiBbc2VsZi5fb25Gb2N1cyBdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpLCAnZGlzYWJsZWQnOiBmdW5jdGlvbigpIHt0cnkge3JldHVybiBbZGlzYWJsZWQgXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKSwgJ3BsYWNlaG9sZGVyJzogZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gWyFoYXNWYWx1ZSA/IF9wbGFjZWhvbGRlciA6ICcnIF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcyksICdhdXRvV2lkdGgnOiBmdW5jdGlvbigpIHt0cnkge3JldHVybiBbdHJ1ZV1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcyksICdzaXplJzogZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW3NpemUgXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKSwgJ2NoaWxkcmVuJzogbnVsbCwgJ19jb250ZXh0JzogJHRoaXN9LCBudWxsLCBudWxsLCBudWxsLCBmdW5jdGlvbihpKSB7d2lkZ2V0c1snaW5wdXQnXSA9IGl9KSA6IHVuZGVmaW5lZF0sICdfY29udGV4dCc6ICR0aGlzfSksIGgoJ3NwYW4nLCBudWxsLCBbZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW2NsZWFyYWJsZSBdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpID8gaCgnaScsIHsnZXYtY2xpY2snOiBmdW5jdGlvbigpIHt0cnkge3JldHVybiBbc2VsZi5fb25DbGVhciBdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpfSwgbnVsbCwgX2NsYXNzTmFtZShmdW5jdGlvbigpIHt0cnkge3JldHVybiBbe1wiay1jbGVhciBpb24taW9zLWNsb3NlXCI6IHRydWUsIFwiay1zaG93XCI6IGhhc1ZhbHVlfSBdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpKSkgOiB1bmRlZmluZWQsIGgoJ2knLCBudWxsLCBudWxsLCAnay1hcnJvdyBpb24tYXJyb3ctZG93bi1iJyldLCAnay1zdWZmaXgnKV0sICdrLXdyYXBwZXInLCBudWxsLCBmdW5jdGlvbihpKSB7d2lkZ2V0c1snd3JhcHBlciddID0gaX0pLCBmdW5jdGlvbigpIHt0cnkge3JldHVybiBbTWVudSBcbiAgICBdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpXSwgJ19jb250ZXh0JzogJHRoaXN9LCBudWxsLCBudWxsLCBudWxsLCBmdW5jdGlvbihpKSB7d2lkZ2V0c1snZHJvcGRvd24nXSA9IGl9KSwgX2NsYXNzTmFtZShmdW5jdGlvbigpIHt0cnkge3JldHVybiBbey4uLmNsYXNzTmFtZU9iaiwgJ2stYWN0aXZlJzogaGFzVmFsdWV9IF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcykpKVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvc2VsZWN0L2luZGV4LnZkdCIsImltcG9ydCBJbnRhY3QgZnJvbSAnaW50YWN0JztcbmltcG9ydCB7RHJvcGRvd25JdGVtfSBmcm9tICcuLi9kcm9wZG93bic7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE9wdGlvbiBleHRlbmRzIERyb3Bkb3duSXRlbSB7XG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvc2VsZWN0L29wdGlvbi5qcyIsImltcG9ydCBJbnRhY3QgZnJvbSAnaW50YWN0JztcbmltcG9ydCB0ZW1wbGF0ZSBmcm9tICcuL2luZGV4LnZkdCc7XG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uL2xheW91dCc7XG5pbXBvcnQgJy4vaW5kZXguc3R5bCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgTGF5b3V0IHtcbiAgICBASW50YWN0LnRlbXBsYXRlKClcbiAgICBzdGF0aWMgdGVtcGxhdGUgPSB0ZW1wbGF0ZTtcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NpdGUvc3JjL3BhZ2VzL2luZGV4L2luZGV4LmpzIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cbiAgICBpZihtb2R1bGUuaG90KSB7XG4gICAgICAvLyAxNTI3NzU0MzkzODM4XG4gICAgICB2YXIgY3NzUmVsb2FkID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWhvdC1sb2FkZXIvaG90TW9kdWxlUmVwbGFjZW1lbnQuanNcIikobW9kdWxlLmlkLCB7XCJmaWxlTWFwXCI6XCJ7ZmlsZU5hbWV9XCJ9KTtcbiAgICAgIG1vZHVsZS5ob3QuZGlzcG9zZShjc3NSZWxvYWQpO1xuICAgICAgbW9kdWxlLmhvdC5hY2NlcHQodW5kZWZpbmVkLCBjc3NSZWxvYWQpO1xuICAgIH1cbiAgXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zaXRlL3NyYy9wYWdlcy9pbmRleC9pbmRleC5zdHlsXG4vLyBtb2R1bGUgaWQgPSAuL3NpdGUvc3JjL3BhZ2VzL2luZGV4L2luZGV4LnN0eWxcbi8vIG1vZHVsZSBjaHVua3MgPSAyIiwiaW1wb3J0IHtCdXR0b259IGZyb20gJ2twYy9jb21wb25lbnRzL2J1dHRvbic7aW1wb3J0IHtMaW5rfSBmcm9tICdrcGMvY29tcG9uZW50cy9saW5rJztcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKG9iaiwgX1ZkdCwgYmxvY2tzLCAkY2FsbGVlKSB7XG5fVmR0IHx8IChfVmR0ID0gVmR0KTtcbm9iaiB8fCAob2JqID0ge30pO1xuYmxvY2tzIHx8IChibG9ja3MgPSB7fSk7XG52YXIgaCA9IF9WZHQubWlzcy5oLCBoYyA9IF9WZHQubWlzcy5oYywgaHUgPSBfVmR0Lm1pc3MuaHUsIHdpZGdldHMgPSB0aGlzICYmIHRoaXMud2lkZ2V0cyB8fCB7fSwgX2Jsb2NrcyA9IHt9LCBfX2Jsb2NrcyA9IHt9LFxuX191ID0gX1ZkdC51dGlscywgZXh0ZW5kID0gX191LmV4dGVuZCwgX2UgPSBfX3UuZXJyb3IsIF9jbGFzc05hbWUgPSBfX3UuY2xhc3NOYW1lLFxuX19vID0gX191Lk9wdGlvbnMsIF9nZXRNb2RlbCA9IF9fby5nZXRNb2RlbCwgX3NldE1vZGVsID0gX19vLnNldE1vZGVsLFxuX3NldENoZWNrYm94TW9kZWwgPSBfX3Uuc2V0Q2hlY2tib3hNb2RlbCwgX2RldGVjdENoZWNrYm94Q2hlY2tlZCA9IF9fdS5kZXRlY3RDaGVja2JveENoZWNrZWQsXG5fc2V0U2VsZWN0TW9kZWwgPSBfX3Uuc2V0U2VsZWN0TW9kZWwsXG5zZWxmID0gdGhpcy5kYXRhLCAkdGhpcyA9IHRoaXMsIHNjb3BlID0gb2JqLCBBbmltYXRlID0gc2VsZiAmJiBzZWxmLkFuaW1hdGUsIHBhcmVudCA9ICgkY2FsbGVlIHx8IHt9KS5fc3VwZXJcblxuXG5cbnJldHVybiAoZnVuY3Rpb24oKSB7XG4gICAgdmFyIF9vYmogPSB7J2NsYXNzTmFtZSc6ICdpbmRleC1wYWdlJywgJ2NoaWxkcmVuJzogbnVsbH07XG4gICAgaWYgKF9vYmouaGFzT3duUHJvcGVydHkoXCJhcmd1bWVudHNcIikpIHtcbiAgICAgICAgZXh0ZW5kKF9vYmosIF9vYmouYXJndW1lbnRzID09PSB0cnVlID8gb2JqIDogX29iai5hcmd1bWVudHMpO1xuICAgICAgICBkZWxldGUgX29iai5hcmd1bWVudHM7XG4gICAgfVxuICAgIHJldHVybiBwYXJlbnQuY2FsbCh0aGlzLCBfb2JqLCBfVmR0LCBmdW5jdGlvbihibG9ja3MpIHtcbiAgICB2YXIgX2Jsb2NrcyA9IHt9LCBfX2Jsb2NrcyA9IGV4dGVuZCh7fSwgYmxvY2tzKTtcbiAgICByZXR1cm4gKChfYmxvY2tzW1wiY29udGVudFwiXSA9IGZ1bmN0aW9uKHBhcmVudCkge3JldHVybiBoKCdhcnRpY2xlJywgbnVsbCwgWydcXG5cdFx0XHQnLCBoYygnIDxpbWcgc3JjPVxcXCJpbWFnZXMvbG9nby5wbmdcXFwiIC8+ICcpLCBoKCdoMScsIG51bGwsICdLUEMnKSwgaCgncCcsIG51bGwsICfmlK/mjIHlpJrmoYbmnrbnmoTliY3nq6/pq5jotKjph4/nu4Tku7blupMnKSwgaCgnZGl2JywgbnVsbCwgW2goQnV0dG9uLCB7J3RhZ05hbWUnOiBmdW5jdGlvbigpIHt0cnkge3JldHVybiBbTGluayBdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpLCAndHlwZSc6ICdwcmltYXJ5JywgJ3RhZ1Byb3BzJzogZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW3tcbiAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY6IGAke3Byb2Nlc3MuVVJMX1BSRUZJWH0vZG9jcy9nZXR0aW5nLXN0YXJ0ZWQvYFxuICAgICAgICAgICAgICAgICAgICB9IF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcyksICdjbGFzc05hbWUnOiAnYnV0dG9uJywgJ2NoaWxkcmVuJzogJ+W8gOWniycsICdfY29udGV4dCc6ICR0aGlzfSksIGgoQnV0dG9uLCB7J2hyZWYnOiAnaHR0cHM6Ly9naXRodWIuY29tL2tzYy1mZS9rcGMnLCAnY2xhc3NOYW1lJzogJ2J1dHRvbicsICd0YXJnZXQnOiAnX2JsYW5rJywgJ2NoaWxkcmVuJzogJ0dpdEh1YicsICdfY29udGV4dCc6ICR0aGlzfSldLCAnYWN0aW9ucycpLCBoKCdkaXYnLCBudWxsLCBbaCgnZGl2JywgbnVsbCwgW2goJ2gyJywgbnVsbCwgJ+aUr+aMgeWkmuahhuaeticsICdibHVlJyksIGgoJ2RpdicsIG51bGwsICdcXG4gICAgICAgICAgICAgICAgICAgICAgICDlkIzml7bmlK/mjIFJbnRhY3TlkoxWdWXmoYbmnrZcXG5cdFx0XHRcdFx0JyldLCAnZmVhdHVyZScpLCBoKCdkaXYnLCBudWxsLCBbaCgnaDInLCBudWxsLCAn5b+g5LqO5Y6f55Sf77yM5aKe5by65Y6f55SfJywgJ3llbGxvdycpLCBoKCdkaXYnLCBudWxsLCAnXFxuICAgICAgICAgICAgICAgICAgICAgICAg5Zyo5L+d5oyB5rWP6KeI5Zmo5Y6f55Sf54m55oCn55qE5Z+656GA5LiK77yM5aKe5by65Lqk5LqS6IO95YqbXFxuXHRcdFx0XHRcdCcpXSwgJ2ZlYXR1cmUnKSwgaCgnZGl2JywgbnVsbCwgW2goJ2gyJywgbnVsbCwgJ+S+v+aNt+W8gOWPkScsICdyZWQnKSwgaCgnZGl2JywgbnVsbCwgJ1xcbiAgICAgICAgICAgICAgICAgICAgICAgIOaUr+aMgeaMiemcgOWKoOi9ve+8jOS4u+mimOWumuWItu+8jOWbvemZheWMluetieeJueaAp+OAguW5tuS4lOaPkOS+m+S6humFjeWll+eahOiEmuaJi+aetuaWueS+v+W/q+mAn+WIneWni+WMlumhueebrlxcblx0XHRcdFx0XHQnKV0sICdmZWF0dXJlJyldLCAnZmVhdHVyZXMnKV0sICdob21lLWhlYWRlcicpO30pICYmIChfX2Jsb2Nrc1tcImNvbnRlbnRcIl0gPSBmdW5jdGlvbihwYXJlbnQpIHtcbnZhciBzZWxmID0gdGhpcztcbnJldHVybiBibG9ja3NbXCJjb250ZW50XCJdID8gYmxvY2tzW1wiY29udGVudFwiXS5jYWxsKHRoaXMsIGZ1bmN0aW9uKCkge1xucmV0dXJuIF9ibG9ja3NbXCJjb250ZW50XCJdLmNhbGwoc2VsZiwgcGFyZW50KTtcbn0pIDogX2Jsb2Nrc1tcImNvbnRlbnRcIl0uY2FsbCh0aGlzLCBwYXJlbnQpO1xufSksIF9fYmxvY2tzKTtcbn0uY2FsbCh0aGlzLCBibG9ja3MpLCBwYXJlbnQpXG59KS5jYWxsKHRoaXMpXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc2l0ZS9zcmMvcGFnZXMvaW5kZXgvaW5kZXgudmR0IiwiaW1wb3J0IEludGFjdCBmcm9tICdpbnRhY3QnO1xuaW1wb3J0IHRlbXBsYXRlIGZyb20gJy4vbGF5b3V0LnZkdCc7XG5pbXBvcnQgJy4vbGF5b3V0LnN0eWwnO1xuXG5sZXQgdGhlbWU7XG5pZiAocHJvY2Vzcy5icm93c2VyKSB7XG4gICAgdGhlbWUgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndGhlbWUnKSB8fCAna3BjJztcblxuICAgIGZ1bmN0aW9uIGNoYW5nZVRoZW1lKG5ld1RoZW1lLCBvbGRUaGVtZSkge1xuICAgICAgICBjb25zdCBsaW5rID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbGlua1tyZWw9c3R5bGVzaGVldF0nKTtcbiAgICAgICAgbGluay5ocmVmID0gbGluay5ocmVmLnJlcGxhY2UoYHRoZW1lLSR7b2xkVGhlbWV9YCwgYHRoZW1lLSR7bmV3VGhlbWV9YCk7XG4gICAgICAgIHRoZW1lID0gbmV3VGhlbWU7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0aGVtZScsIG5ld1RoZW1lKTtcbiAgICB9XG4gICAgaWYgKHRoZW1lICE9PSAna3BjJykge1xuICAgICAgICBjaGFuZ2VUaGVtZSh0aGVtZSwgJ2twYycpO1xuICAgIH1cbn0gZWxzZSB7XG4gICAgdGhlbWUgPSAna3BjJztcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBJbnRhY3Qge1xuICAgIEBJbnRhY3QudGVtcGxhdGUoKVxuICAgIHN0YXRpYyB0ZW1wbGF0ZSA9IHRlbXBsYXRlO1xuXG4gICAgZGVmYXVsdHMoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB0aGVtZTogdGhlbWUsXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgX2luaXQoKSB7XG4gICAgICAgIHRoaXMub24oJyRjaGFuZ2U6dGhlbWUnLCAoYywgdiwgbykgPT4ge1xuICAgICAgICAgICAgY2hhbmdlVGhlbWUodiwgbyk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIF9tb3VudCgpIHtcbiAgICAgICAgdGhpcy5ib3JkZXIgPSB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvcignLmJvcmRlcicpO1xuICAgICAgICB0aGlzLl91cGRhdGVCb3JkZXIoKTtcbiAgICB9XG5cbiAgICBfdXBkYXRlQm9yZGVyKCkge1xuICAgICAgICBjb25zdCBuYXYgPSB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvcignLmFjdGl2ZScpO1xuICAgICAgICBsZXQgd2lkdGggPSAwO1xuICAgICAgICBsZXQgbGVmdCA9IDA7XG4gICAgICAgIGlmIChuYXYpIHtcbiAgICAgICAgICAgIGxlZnQgPSBuYXYub2Zmc2V0TGVmdDtcbiAgICAgICAgICAgIHdpZHRoID0gbmF2Lm9mZnNldFdpZHRoO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuYm9yZGVyLmNsYXNzTGlzdC5hZGQoJ3RyYW5zaXRpb24nKTtcbiAgICAgICAgdGhpcy5ib3JkZXIuc3R5bGUud2lkdGggPSBgJHt3aWR0aH1weGA7XG4gICAgICAgIHRoaXMuYm9yZGVyLnN0eWxlLmxlZnQgPSBgJHtsZWZ0fXB4YDtcbiAgICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zaXRlL3NyYy9wYWdlcy9sYXlvdXQuanMiLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuICAgIGlmKG1vZHVsZS5ob3QpIHtcbiAgICAgIC8vIDE1Mjc3NTQzOTQyMjVcbiAgICAgIHZhciBjc3NSZWxvYWQgPSByZXF1aXJlKFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtaG90LWxvYWRlci9ob3RNb2R1bGVSZXBsYWNlbWVudC5qc1wiKShtb2R1bGUuaWQsIHtcImZpbGVNYXBcIjpcIntmaWxlTmFtZX1cIn0pO1xuICAgICAgbW9kdWxlLmhvdC5kaXNwb3NlKGNzc1JlbG9hZCk7XG4gICAgICBtb2R1bGUuaG90LmFjY2VwdCh1bmRlZmluZWQsIGNzc1JlbG9hZCk7XG4gICAgfVxuICBcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NpdGUvc3JjL3BhZ2VzL2xheW91dC5zdHlsXG4vLyBtb2R1bGUgaWQgPSAuL3NpdGUvc3JjL3BhZ2VzL2xheW91dC5zdHlsXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyIsImltcG9ydCBMaW5rIGZyb20gJ2twYy9jb21wb25lbnRzL2xpbmsnO2ltcG9ydCB7U2VsZWN0LCBPcHRpb259IGZyb20gJ2twYy9jb21wb25lbnRzL3NlbGVjdCc7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihvYmosIF9WZHQsIGJsb2NrcywgJGNhbGxlZSkge1xuX1ZkdCB8fCAoX1ZkdCA9IFZkdCk7XG5vYmogfHwgKG9iaiA9IHt9KTtcbmJsb2NrcyB8fCAoYmxvY2tzID0ge30pO1xudmFyIGggPSBfVmR0Lm1pc3MuaCwgaGMgPSBfVmR0Lm1pc3MuaGMsIGh1ID0gX1ZkdC5taXNzLmh1LCB3aWRnZXRzID0gdGhpcyAmJiB0aGlzLndpZGdldHMgfHwge30sIF9ibG9ja3MgPSB7fSwgX19ibG9ja3MgPSB7fSxcbl9fdSA9IF9WZHQudXRpbHMsIGV4dGVuZCA9IF9fdS5leHRlbmQsIF9lID0gX191LmVycm9yLCBfY2xhc3NOYW1lID0gX191LmNsYXNzTmFtZSxcbl9fbyA9IF9fdS5PcHRpb25zLCBfZ2V0TW9kZWwgPSBfX28uZ2V0TW9kZWwsIF9zZXRNb2RlbCA9IF9fby5zZXRNb2RlbCxcbl9zZXRDaGVja2JveE1vZGVsID0gX191LnNldENoZWNrYm94TW9kZWwsIF9kZXRlY3RDaGVja2JveENoZWNrZWQgPSBfX3UuZGV0ZWN0Q2hlY2tib3hDaGVja2VkLFxuX3NldFNlbGVjdE1vZGVsID0gX191LnNldFNlbGVjdE1vZGVsLFxuc2VsZiA9IHRoaXMuZGF0YSwgJHRoaXMgPSB0aGlzLCBzY29wZSA9IG9iaiwgQW5pbWF0ZSA9IHNlbGYgJiYgc2VsZi5BbmltYXRlLCBwYXJlbnQgPSAoJGNhbGxlZSB8fCB7fSkuX3N1cGVyXG5cblxuXG5jb25zdCBuYXYgPSBbXG4gICAge1xuICAgICAgICB0aXRsZTogJ+aVmeeoiycsXG4gICAgICAgIGhyZWY6ICcvZG9jcy9nZXR0aW5nLXN0YXJ0ZWQvJyxcbiAgICAgICAgaW5kZXg6ICdkb2N1bWVudCcsXG4gICAgfSxcbiAgICAvKiB7ICovXG4gICAgICAgIC8qIHRpdGxlOiAn6K6+6K6h6K+t6KiAJywgKi9cbiAgICAgICAgLyogaHJlZjogJy9kZXNpZ24nLCAqL1xuICAgIC8qIH0sICovXG4gICAgLyogeyAqL1xuICAgICAgICAvKiB0aXRsZTogJ0Jsb2cnLCAqL1xuICAgICAgICAvKiBocmVmOiAnL2RvY3MvYmxvZy90ZXN0LycsICovXG4gICAgICAgIC8qIGluZGV4OiAnYmxvZycsICovXG4gICAgLyogfSwgKi9cbiAgICAvKiB7ICovXG4gICAgICAgIC8qIHRpdGxlOiAnQVBJJywgKi9cbiAgICAgICAgLyogaHJlZjogJ2FwaScgKi9cbiAgICAvKiB9LCAqL1xuICAgIC8vIHtcbiAgICAgICAgLy8gdGl0bGU6ICfnpLrkvosnLFxuICAgICAgICAvLyBocmVmOiAnZXhhbXBsZXMnXG4gICAgLy8gfVxuXTtcblxucmV0dXJuIGgoJ2RpdicsIG51bGwsIFtoKCdkaXYnLCBudWxsLCBoKCdoZWFkZXInLCBudWxsLCAoX2Jsb2Nrc1tcImhlYWRlclwiXSA9IGZ1bmN0aW9uKHBhcmVudCkge3JldHVybiBbaChMaW5rLCB7J2NsYXNzTmFtZSc6ICdsb2dvJywgJ2hyZWYnOiAnLycsICdjaGlsZHJlbic6ICdLUEMnLCAnX2NvbnRleHQnOiAkdGhpc30pLCBoKCdkaXYnLCBudWxsLCBbaCgnbmF2JywgbnVsbCwgW19WZHQudXRpbHMubWFwKGZ1bmN0aW9uKCkge3RyeSB7cmV0dXJuIFtuYXYgXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKSwgZnVuY3Rpb24odmFsdWUsIGtleSkge1xucmV0dXJuIGgoTGluaywgeydjbGFzc05hbWUnOiBfY2xhc3NOYW1lKGZ1bmN0aW9uKCkge3RyeSB7cmV0dXJuIFt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjdGl2ZTogdmFsdWUuaW5kZXggPT09IHNjb3BlLm5hdkluZGV4XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpKSwgJ2hyZWYnOiBmdW5jdGlvbigpIHt0cnkge3JldHVybiBbYCR7cHJvY2Vzcy5VUkxfUFJFRklYfSR7dmFsdWUuaHJlZn1gIF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcyksICdjaGlsZHJlbic6IGZ1bmN0aW9uKCkge3RyeSB7cmV0dXJuIFt2YWx1ZS50aXRsZSBdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpLCAnX2NvbnRleHQnOiAkdGhpc30pO1xufSwgdGhpcyksIGgoJ2RpdicsIG51bGwsIG51bGwsICdib3JkZXInKV0pLCBoKCdzcGFuJywgbnVsbCwgJ+WIh+aNouS4u+mimO+8micsICdsYWJlbCcpLCBoKFNlbGVjdCwgeyd2LW1vZGVsJzogJ3RoZW1lJywgJ3dpZHRoJzogJzEwMCcsICdjaGlsZHJlbic6IFtoKE9wdGlvbiwgeyd2YWx1ZSc6ICdrcGMnLCAnY2hpbGRyZW4nOiAnZGVmYXVsdCcsICdfY29udGV4dCc6ICR0aGlzfSksIGgoT3B0aW9uLCB7J3ZhbHVlJzogJ2tzeXVuJywgJ2NoaWxkcmVuJzogJ2tzeXVuJywgJ19jb250ZXh0JzogJHRoaXN9KV0sICdfY29udGV4dCc6ICR0aGlzLCB2YWx1ZTogX2dldE1vZGVsKHNlbGYsICd0aGVtZScpLCAnZXYtJGNoYW5nZTp2YWx1ZSc6IGZ1bmN0aW9uKF9fYywgX19uKSB7IF9zZXRNb2RlbChzZWxmLCAndGhlbWUnLCBfX24sICR0aGlzKSB9fSldLCAncmlnaHQnKV07fSkgJiYgKF9fYmxvY2tzW1wiaGVhZGVyXCJdID0gZnVuY3Rpb24ocGFyZW50KSB7XG52YXIgc2VsZiA9IHRoaXM7XG5yZXR1cm4gYmxvY2tzW1wiaGVhZGVyXCJdID8gYmxvY2tzW1wiaGVhZGVyXCJdLmNhbGwodGhpcywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gX2Jsb2Nrc1tcImhlYWRlclwiXS5jYWxsKHNlbGYsIHBhcmVudCk7XG59KSA6IF9ibG9ja3NbXCJoZWFkZXJcIl0uY2FsbCh0aGlzLCBwYXJlbnQpO1xufSkgJiYgX19ibG9ja3NbXCJoZWFkZXJcIl0uY2FsbCh0aGlzKSksICdoZWFkZXItd3JhcHBlcicpLCBoKCdkaXYnLCBudWxsLCAoX2Jsb2Nrc1tcImNvbnRlbnRcIl0gPSBmdW5jdGlvbihwYXJlbnQpIHtyZXR1cm4gbnVsbDt9KSAmJiAoX19ibG9ja3NbXCJjb250ZW50XCJdID0gZnVuY3Rpb24ocGFyZW50KSB7XG52YXIgc2VsZiA9IHRoaXM7XG5yZXR1cm4gYmxvY2tzW1wiY29udGVudFwiXSA/IGJsb2Nrc1tcImNvbnRlbnRcIl0uY2FsbCh0aGlzLCBmdW5jdGlvbigpIHtcbnJldHVybiBfYmxvY2tzW1wiY29udGVudFwiXS5jYWxsKHNlbGYsIHBhcmVudCk7XG59KSA6IF9ibG9ja3NbXCJjb250ZW50XCJdLmNhbGwodGhpcywgcGFyZW50KTtcbn0pICYmIF9fYmxvY2tzW1wiY29udGVudFwiXS5jYWxsKHRoaXMpLCAnY29udGVudC13cmFwcGVyJywgbnVsbCwgZnVuY3Rpb24oaSkge3dpZGdldHNbJ3dyYXBwZXInXSA9IGl9KV0sIF9jbGFzc05hbWUoZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW3snbWFpbi13cmFwcGVyJzogdHJ1ZSwgW3Njb3BlLmNsYXNzTmFtZV06IHNjb3BlLmNsYXNzTmFtZX0gXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKSkpXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc2l0ZS9zcmMvcGFnZXMvbGF5b3V0LnZkdCJdLCJzb3VyY2VSb290IjoiIn0=