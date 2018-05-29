require("source-map-support").install();
exports.ids = [1];
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
      // 1527576678550
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
      // 1527576679380
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
            tabindex: undefined
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
      // 1527576679400
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
        width = _self$get.width;

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
      // 1527576679178
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
      // 1527576676965
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

var theme = 'kpc';

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
        var _this2 = this;

        this.on('$change:theme', function (c, v, o) {
            _this2._changeTheme(v, o);
        });
    };

    _default.prototype._mount = function _mount() {
        this.$border = this.element.querySelector('.border');
        this._updateBorder();
        this.link = document.querySelector('link[rel=stylesheet]');
    };

    _default.prototype._changeTheme = function _changeTheme(newTheme, oldTheme) {
        this.link.href = this.link.href.replace('theme-' + oldTheme, 'theme-' + newTheme);
        theme = newTheme;
    };

    _default.prototype._updateBorder = function _updateBorder() {
        // const $nav = this.element.querySelector('.active');
        // let width = 0;
        // let left = 0;
        // if ($nav) {
        // left = $nav.position().left;
        // width = $nav.outerWidth();
        // }
        // this.$border.addClass('transition');
        // this.$border.css({width: width, left: left});
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
      // 1527576677295
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
        href: '/docs/getting-started/'
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
                            active: value.href === scope.navIndex
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
    }) && __blocks["content"].call(this), 'content-wrapper')], _className(function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2J1dHRvbi9ncm91cC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2J1dHRvbi9ncm91cC52ZHQiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9idXR0b24vaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9idXR0b24vaW5kZXguc3R5bCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2J1dHRvbi9pbmRleC52ZHQiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9kcm9wZG93bi9kcm9wZG93bi5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2Ryb3Bkb3duL2luZGV4LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvZHJvcGRvd24vaW5kZXguc3R5bCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2Ryb3Bkb3duL2l0ZW0uanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9kcm9wZG93bi9pdGVtLnZkdCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2Ryb3Bkb3duL21lbnUuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9kcm9wZG93bi9tZW51LnZkdCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2lucHV0L2luZGV4LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvaW5wdXQvaW5kZXguc3R5bCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2lucHV0L2luZGV4LnZkdCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2xpbmsvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9saW5rL2luZGV4LnZkdCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL21vdmVXcmFwcGVyL2luZGV4LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvbW92ZVdyYXBwZXIvcG9zaXRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9zZWxlY3QvZ3JvdXAuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9zZWxlY3QvZ3JvdXAudmR0Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvc2VsZWN0L2luZGV4LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvc2VsZWN0L2luZGV4LnN0eWwiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9zZWxlY3QvaW5kZXgudmR0Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvc2VsZWN0L29wdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9zaXRlL3NyYy9wYWdlcy9pbmRleC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zaXRlL3NyYy9wYWdlcy9pbmRleC9pbmRleC5zdHlsIiwid2VicGFjazovLy8uL3NpdGUvc3JjL3BhZ2VzL2luZGV4L2luZGV4LnZkdCIsIndlYnBhY2s6Ly8vLi9zaXRlL3NyYy9wYWdlcy9sYXlvdXQuanMiLCJ3ZWJwYWNrOi8vLy4vc2l0ZS9zcmMvcGFnZXMvbGF5b3V0LnN0eWwiLCJ3ZWJwYWNrOi8vLy4vc2l0ZS9zcmMvcGFnZXMvbGF5b3V0LnZkdCJdLCJuYW1lcyI6WyJCdXR0b25Hcm91cCIsIkludGFjdCIsInRlbXBsYXRlIiwiZGVmYXVsdHMiLCJ2ZXJ0aWNhbCIsInZhbHVlIiwidW5kZWZpbmVkIiwicmFkaW8iLCJjaGVja1R5cGUiLCJfaW5pdCIsImdldCIsInNldCIsInNpbGVudCIsInByb3BUeXBlcyIsIkJvb2xlYW4iLCJvYmoiLCJfVmR0IiwiYmxvY2tzIiwiJGNhbGxlZSIsIlZkdCIsImgiLCJtaXNzIiwiaGMiLCJodSIsIndpZGdldHMiLCJfYmxvY2tzIiwiX19ibG9ja3MiLCJfX3UiLCJ1dGlscyIsImV4dGVuZCIsIl9lIiwiZXJyb3IiLCJfY2xhc3NOYW1lIiwiY2xhc3NOYW1lIiwiX19vIiwiT3B0aW9ucyIsIl9nZXRNb2RlbCIsImdldE1vZGVsIiwiX3NldE1vZGVsIiwic2V0TW9kZWwiLCJfc2V0Q2hlY2tib3hNb2RlbCIsInNldENoZWNrYm94TW9kZWwiLCJfZGV0ZWN0Q2hlY2tib3hDaGVja2VkIiwiZGV0ZWN0Q2hlY2tib3hDaGVja2VkIiwiX3NldFNlbGVjdE1vZGVsIiwic2V0U2VsZWN0TW9kZWwiLCJzZWxmIiwiZGF0YSIsIiR0aGlzIiwic2NvcGUiLCJBbmltYXRlIiwicGFyZW50IiwiX3N1cGVyIiwic3R5bGUiLCJjaGlsZHJlbiIsImZsdWlkIiwiY2xhc3NOYW1lT2JqIiwiZSIsImNhbGwiLCJtYXAiLCJBcnJheSIsImlzQXJyYXkiLCJ2Tm9kZSIsInRhZyIsIkJ1dHRvbiIsInByb3BzIiwiX3ZhbHVlIiwiX2NoZWNrVHlwZSIsInR5cGUiLCJzaXplIiwiaWNvbiIsImNpcmNsZSIsImxvYWRpbmciLCJkaXNhYmxlZCIsImh0bWxUeXBlIiwidGFnTmFtZSIsInRhZ1Byb3BzIiwibmFtZSIsInRhYmluZGV4IiwiX21vdW50IiwicGFyZW50Vk5vZGUiLCJHcm91cCIsImdyb3VwIiwiX2JlZm9yZVVwZGF0ZSIsInNob3dMb2FkaW5nIiwiaGlkZUxvYWRpbmciLCJkaXNhYmxlIiwiZW5hYmxlIiwiX29uQ2xpY2siLCJwcmV2ZW50RGVmYXVsdCIsInNsaWNlIiwiaW5kZXgiLCJpbmRleE9mIiwicHVzaCIsInNwbGljZSIsImNvbXBvbmVudCIsInRyaWdnZXIiLCJfYmx1ciIsImVsZW1lbnQiLCJibHVyIiwiU3RyaW5nIiwiRnVuY3Rpb24iLCJyZWYiLCJrZXkiLCJyZXN0IiwiY2hlY2tlZCIsImhyZWYiLCJmb3JFYWNoIiwiY2hpbGQiLCJsZW5ndGgiLCJEcm9wZG93biIsIl9zYXZlT3JpZ2luYWxFdmVudHMiLCJvbiIsImtlZXAiLCJvcmlnaW5Qcm9wcyIsImhhc1NhdmVkIiwiX2hhc1NhdmVkIiwiX2V2Q2xpY2siLCJfZXZNb3VzZUVudGVyIiwiX2V2TW91c2VMZWF2ZSIsInNob3ciLCJiaW5kIiwiaGlkZSIsInNpYmxpbmdzIiwibWVudSIsImRyb3Bkb3duIiwiZm4iLCJpc0ZvY3VzIiwiZm9jdXNJdGVtQnlJbmRleCIsImltbWVkaWF0ZWx5IiwiV3JhcHBlciIsImluVnVlIiwicG9zaXRpb24iLCJEcm9wZG93blZ1ZVdyYXBwZXIiLCJfV3JhcHBlciIsImZ1bmN0aW9uYWxXcmFwcGVyIiwiRHJvcGRvd25NZW51IiwiRHJvcGRvd25JdGVtIiwiaGlkZU9uU2VsZWN0IiwiX2lzRm9jdXMiLCJhbmNlc3RvciIsIl9maW5kQW5jZXN0b3JEcm9wZG93bk1lbnUiLCJpdGVtcyIsIl9vbk1vdXNlRW50ZXIiLCJmb2N1c0l0ZW0iLCJfb25Nb3VzZUxlYXZlIiwic2VsZWN0IiwiX2lzU3ViTWVudSIsImZvY3VzIiwiZWxSZWN0IiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwicEVsIiwicmVmcyIsInBFbFJlY3QiLCJib3R0b21PdmVyZmxvd0Rpc3RhbmNlIiwiYm90dG9tIiwidG9wT3ZlcmZsb3dEaXN0YW5jZSIsInRvcCIsInNjcm9sbFRvcCIsInVuRm9jdXMiLCJzaG93TWVudUFuZEZvY3VzIiwiaGlkZU1lbnUiLCJpc0ZpcnN0IiwiX2Rlc3Ryb3kiLCJ0cmFuc2l0aW9uIiwic3ViRHJvcGRvd25zIiwiZm9jdXNJbmRleCIsImxvY2tlZCIsIl9maW5kUGFyZW50RHJvcGRvd25NZW51IiwiX2FkZERvY3VtZW50RXZlbnRzIiwiY2xlYXJUaW1lb3V0IiwidGltZXIiLCJzZXRUaW1lb3V0IiwidG9nZ2xlIiwibXkiLCJhdCIsIm9mIiwidXNpbmciLCJmZWVkYmFjayIsIl9vblNob3ciLCJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJfb25Eb2N1bWVudENsaWNrIiwiX29uS2V5ZG93biIsIl9yZW1vdmVEb2N1bWVudEV2ZW50cyIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJ0YXJnZXQiLCJjb250YWlucyIsIl9pc0NsaWNrU3ViTWVudSIsIl9kcm9wZG93biIsImtleUNvZGUiLCJfZm9jdXNOZXh0SXRlbSIsIl9mb2N1c1ByZXZJdGVtIiwiX3Nob3dTdWJNZW51IiwiX2hpZGVTdWJNZW51IiwiX3NlbGVjdEl0ZW0iLCJkaXJlY3Rpb24iLCJtYXgiLCJvbGRJbmRleCIsImZpeEluZGV4IiwiaSIsIml0ZW0iLCJzdWJNZW51cyIsInJldCIsInN1Yk1lbnUiLCJldmVudHMiLCJNb3ZlV3JhcHBlciIsIklucHV0IiwiZGVmYXVsdFZhbHVlIiwicGxhY2Vob2xkZXIiLCJyZWFkb25seSIsImNsZWFyYWJsZSIsInJvd3MiLCJzcGVsbGNoZWNrIiwiYXV0b1dpZHRoIiwid2lkdGgiLCJfYWRqdXN0V2lkdGgiLCJmYWtlIiwib2Zmc2V0V2lkdGgiLCJpbnB1dCIsImNsZWFyIiwiX29uSW5wdXQiLCJfcHJveHlFdmVudCIsInByZXBlbmQiLCJhcHBlbmQiLCJwcmVmaXgiLCJzdWZmaXgiLCJyZWR1Y2UiLCJtZW1vIiwid3JhcHBlckV2ZW50cyIsIkxpbmsiLCJpc1JlcGxhY2UiLCJ0byIsImhpc3RvcnkiLCJ1cmwiLCJhcHBseSIsImxvY2F0aW9uIiwicGF0aG5hbWUiLCJzZWFyY2giLCJyZXBsYWNlIiwiYXV0b0Rlc3Ryb3kiLCJjb250YWluZXIiLCJpbml0IiwiYXJncyIsImNyZWF0ZUNvbW1lbnQiLCJoeWRyYXRlIiwidXBkYXRlIiwibGFzdFZOb2RlIiwibmV4dFZOb2RlIiwiZGVzdHJveSIsIl8kZGVzdHJveSIsInJlbmRlcmVkIiwiVHlwZXMiLCJDb21wb25lbnRDbGFzc09ySW5zdGFuY2UiLCJyZW1vdmUiLCJ2ZHQiLCJkZXN0cm95ZWQiLCJvZmYiLCJxdWVyeVNlbGVjdG9yIiwiYm9keSIsImFwcGVuZENoaWxkIiwiZ2V0RG9jdW1lbnRPcldpbmRvd1JlY3QiLCJzY3JvbGxiYXJXaWR0aCIsIk1hdGgiLCJhYnMiLCJySG9yaXpvbnRhbCIsInJWZXJ0aWNhbCIsInJPZmZzZXQiLCJyUG9zaXRpb24iLCJyUGVyY2VudCIsImdldERpbWVuc2lvbnMiLCJlbGVtIiwibm9kZVR5cGUiLCJoZWlnaHQiLCJvZmZzZXQiLCJsZWZ0Iiwid2luZG93IiwicGFnZVlPZmZzZXQiLCJwYWdlWE9mZnNldCIsInBhZ2VZIiwicGFnZVgiLCJyZWN0IiwiZCIsImRvY3VtZW50RWxlbWVudCIsImNsaWVudFdpZHRoIiwiY2xpZW50SGVpZ2h0IiwiYiIsInNjcm9sbFdpZHRoIiwic2Nyb2xsSGVpZ2h0Iiwib2Zmc2V0SGVpZ2h0IiwiZ2V0T2Zmc2V0cyIsIm9mZnNldHMiLCJwYXJzZUZsb2F0IiwidGVzdCIsIl9zY3JvbGxCYXJXaWR0aCIsIm91dGVyIiwiY3JlYXRlRWxlbWVudCIsInZpc2liaWxpdHkiLCJtc092ZXJmbG93U3R5bGUiLCJ3aWR0aE5vU2Nyb2xsIiwib3ZlcmZsb3ciLCJpbm5lciIsIndpZHRoV2l0aFNjcm9sbCIsInBhcmVudE5vZGUiLCJyZW1vdmVDaGlsZCIsImdldFNjcm9sbEluZm8iLCJ3aXRoaW4iLCJvdmVyZmxvd1giLCJpc1dpbmRvdyIsImlzRG9jdW1lbnQiLCJvdmVyZmxvd1kiLCJoYXNPdmVyZmxvd1giLCJoYXNPdmVyZmxvd1kiLCJnZXRXaXRoaW5JbmZvIiwiaGFzT2Zmc2V0Iiwic2Nyb2xsTGVmdCIsInBhcnNlQ3NzIiwicHJvcGVydHkiLCJwYXJzZUludCIsIm9wdGlvbnMiLCJ0YXJnZXRXaWR0aCIsInRhcmdldEhlaWdodCIsInRhcmdldE9mZnNldCIsImJhc2VQb3NpdGlvbiIsImNvbGxpc2lvbiIsInNwbGl0Iiwic2Nyb2xsSW5mbyIsInBvcyIsImNvbmNhdCIsImhvcml6b250YWxPZmZzZXQiLCJleGVjIiwidmVydGljYWxPZmZzZXQiLCJhdE9mZnNldCIsImVsZW1XaWR0aCIsImVsZW1IZWlnaHQiLCJteU9mZnNldCIsImNvbXB1dGVkU3R5bGUiLCJnZXRDb21wdXRlZFN0eWxlIiwibWFyZ2luTGVmdCIsIm1hcmdpblRvcCIsImNvbGxpc2lvbldpZHRoIiwiY29sbGlzaW9uSGVpZ2h0IiwiY29sbGlzaW9uUG9zaXRpb24iLCJkaXIiLCJjb2xsIiwicnVsZXMiLCJyaWdodCIsImhvcml6b250YWwiLCJpbXBvcnRhbnQiLCJmaXQiLCJ3aXRoaW5PZmZzZXQiLCJvdXRlcldpZHRoIiwiY29sbGlzaW9uUG9zTGVmdCIsIm92ZXJMZWZ0Iiwib3ZlclJpZ2h0IiwibmV3T3ZlclJpZ2h0Iiwib3V0ZXJIZWlnaHQiLCJjb2xsaXNpb25Qb3NUb3AiLCJvdmVyVG9wIiwib3ZlckJvdHRvbSIsIm5ld092ZXJCb3R0b20iLCJmbGlwIiwib2Zmc2V0TGVmdCIsIm5ld092ZXJMZWZ0Iiwib2Zmc2V0VG9wIiwibmV3T3ZlclRvcCIsImZsaXBmaXQiLCJPcHRpb25Hcm91cCIsImxhYmVsIiwiU2VsZWN0IiwibXVsdGlwbGUiLCJmaWx0ZXJhYmxlIiwia2V5d29yZHMiLCJhbGxvd1VubWF0Y2giLCJfc2hvdyIsIl9vbkNsZWFyIiwic3RvcFByb3BhZ2F0aW9uIiwiX29uU2VsZWN0IiwiYXN5bmMiLCJ2YWx1ZXMiLCJfZm9jdXNJbnB1dCIsIl9yZXNldFNlYXJjaCIsIl9vblNlYXJjaCIsInRyaW0iLCJfb25DaGFuZ2VTaG93IiwiYyIsIl9vbkJsdXIiLCJfc2VsZWN0SW5wdXQiLCJfb25Gb2N1cyIsIl9vbkZvY3Vzb3V0IiwiX2RlbGV0ZSIsIl9wb3NpdGlvbiIsIm1lbnVFbGVtZW50IiwibWVudVdpZHRoIiwiX29uS2V5cHJlc3MiLCJ3cmFwcGVyIiwiY2xpY2siLCJPcHRpb24iLCJfcGxhY2Vob2xkZXIiLCJoYXNWYWx1ZSIsImlzR3JvdXAiLCJsYWJlbHMiLCJoYW5kbGVQcm9wcyIsImFjdGl2ZSIsInZhbGlkIiwidG1wIiwidG9Mb3dlckNhc2UiLCJ0ZXh0IiwiT3B0aW9uc1ZOb2RlcyIsIk1lbnUiLCJMYXlvdXQiLCJfb2JqIiwiaGFzT3duUHJvcGVydHkiLCJhcmd1bWVudHMiLCJ0aGVtZSIsInYiLCJvIiwiX2NoYW5nZVRoZW1lIiwiJGJvcmRlciIsIl91cGRhdGVCb3JkZXIiLCJsaW5rIiwibmV3VGhlbWUiLCJvbGRUaGVtZSIsIm5hdiIsInRpdGxlIiwibmF2SW5kZXgiLCJfX2MiLCJfX24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFcUJB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Q0FBQ0ssUUFBUSxTQUFSLElBQXFCLFVBQVMwQixNQUFULEVBQWlCO0FBQUMsZUFBTyxJQUFQO0FBQWEsS0FBckQsTUFBMkR6QixTQUFTLFNBQVQsSUFBc0IsVUFBU3lCLE1BQVQsRUFBaUI7QUFDMUssWUFBSUwsT0FBTyxJQUFYO0FBQ0EsZUFBTzdCLE9BQU8sU0FBUCxJQUFvQkEsT0FBTyxTQUFQLEVBQWtCeUMsSUFBbEIsQ0FBdUIsSUFBdkIsRUFBNkIsWUFBVztBQUNuRSxtQkFBT2pDLFFBQVEsU0FBUixFQUFtQmlDLElBQW5CLENBQXdCWixJQUF4QixFQUE4QkssTUFBOUIsQ0FBUDtBQUNDLFNBRjBCLENBQXBCLEdBRUYxQixRQUFRLFNBQVIsRUFBbUJpQyxJQUFuQixDQUF3QixJQUF4QixFQUE4QlAsTUFBOUIsQ0FGTDtBQUdDLEtBTHVFLEtBS2xFekIsU0FBUyxTQUFULEVBQW9CZ0MsSUFBcEIsQ0FBeUIsSUFBekIsQ0FMbUQsRUFLbkIsaUJBTG1CLENBVG5DLENBQWYsRUFjb0QxQixXQUFXLFlBQVc7QUFBQyxZQUFJO0FBQUE7O0FBQUMsbUJBQU8sV0FBRSxnQkFBZ0IsSUFBbEIsU0FBeUJpQixNQUFNaEIsU0FBL0IsSUFBMkNnQixNQUFNaEIsU0FBakQsU0FBOEQsQ0FBOUQsQ0FBUDtBQUF3RSxTQUE3RSxDQUE4RSxPQUFNd0IsQ0FBTixFQUFTO0FBQUMzQixlQUFHMkIsQ0FBSDtBQUFNO0FBQUMsS0FBM0csQ0FBNEdDLElBQTVHLENBQWlILElBQWpILENBQVgsQ0FkcEQsQ0FBUDtBQWVDLEM7O0FBaEREOzs7O0FBQXVDIiwiZmlsZSI6ImNodW5rL2Y0YjBiMTIxNThhODlkYTkxZTNmLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEludGFjdCBmcm9tICdpbnRhY3QnO1xuaW1wb3J0IHRlbXBsYXRlIGZyb20gJy4vZ3JvdXAudmR0JztcbmltcG9ydCAnLi9pbmRleC5zdHlsJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQnV0dG9uR3JvdXAgZXh0ZW5kcyBJbnRhY3Qge1xuICAgIEBJbnRhY3QudGVtcGxhdGUoKVxuICAgIGdldCB0ZW1wbGF0ZSgpIHsgcmV0dXJuIHRlbXBsYXRlOyB9XG5cbiAgICBkZWZhdWx0cygpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHZlcnRpY2FsOiBmYWxzZSxcbiAgICAgICAgICAgIHZhbHVlOiB1bmRlZmluZWQsXG4gICAgICAgICAgICByYWRpbzogZmFsc2UsIC8vIEBkZXByZWNhdGVkOiB1c2UgY2hlY2tUeXBlIGluc3RlYWQgb2ZcbiAgICAgICAgICAgIGNoZWNrVHlwZTogJ25vbmUnLCAvLyByYWRpbyB8IGNoZWNrYm94IHwgbm9uZVxuICAgICAgICB9O1xuICAgIH1cblxuICAgIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgICAgIHZlcnRpY2FsOiBCb29sZWFuLFxuICAgICAgICByYWRpbzogQm9vbGVhbixcbiAgICB9XG5cbiAgICBfaW5pdCgpIHtcbiAgICAgICAgLyogaXN0YW5idWwgaWdub3JlIGlmICovXG4gICAgICAgIGlmICh0aGlzLmdldCgncmFkaW8nKSkge1xuICAgICAgICAgICAgdGhpcy5zZXQoJ2NoZWNrVHlwZScsICdyYWRpbycsIHtzaWxlbnQ6IHRydWV9KTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9idXR0b24vZ3JvdXAuanMiLCJpbXBvcnQgQnV0dG9uIGZyb20gJy4vJztcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKG9iaiwgX1ZkdCwgYmxvY2tzLCAkY2FsbGVlKSB7XG5fVmR0IHx8IChfVmR0ID0gVmR0KTtcbm9iaiB8fCAob2JqID0ge30pO1xuYmxvY2tzIHx8IChibG9ja3MgPSB7fSk7XG52YXIgaCA9IF9WZHQubWlzcy5oLCBoYyA9IF9WZHQubWlzcy5oYywgaHUgPSBfVmR0Lm1pc3MuaHUsIHdpZGdldHMgPSB0aGlzICYmIHRoaXMud2lkZ2V0cyB8fCB7fSwgX2Jsb2NrcyA9IHt9LCBfX2Jsb2NrcyA9IHt9LFxuX191ID0gX1ZkdC51dGlscywgZXh0ZW5kID0gX191LmV4dGVuZCwgX2UgPSBfX3UuZXJyb3IsIF9jbGFzc05hbWUgPSBfX3UuY2xhc3NOYW1lLFxuX19vID0gX191Lk9wdGlvbnMsIF9nZXRNb2RlbCA9IF9fby5nZXRNb2RlbCwgX3NldE1vZGVsID0gX19vLnNldE1vZGVsLFxuX3NldENoZWNrYm94TW9kZWwgPSBfX3Uuc2V0Q2hlY2tib3hNb2RlbCwgX2RldGVjdENoZWNrYm94Q2hlY2tlZCA9IF9fdS5kZXRlY3RDaGVja2JveENoZWNrZWQsXG5fc2V0U2VsZWN0TW9kZWwgPSBfX3Uuc2V0U2VsZWN0TW9kZWwsXG5zZWxmID0gdGhpcy5kYXRhLCAkdGhpcyA9IHRoaXMsIHNjb3BlID0gb2JqLCBBbmltYXRlID0gc2VsZiAmJiBzZWxmLkFuaW1hdGUsIHBhcmVudCA9ICgkY2FsbGVlIHx8IHt9KS5fc3VwZXJcblxuXG5jb25zdCB7XG4gICAgY2xhc3NOYW1lLCB2ZXJ0aWNhbCwgc3R5bGUsIFxuICAgIGNoaWxkcmVuLCB2YWx1ZSwgZmx1aWQsIGNoZWNrVHlwZVxufSA9IHNlbGYuZ2V0KCk7XG5cbmNvbnN0IGNsYXNzTmFtZU9iaiA9IHtcbiAgICAnay1idG5zJzogdHJ1ZSxcbiAgICAnay12ZXJ0aWNhbCc6IHZlcnRpY2FsLFxuICAgIFtjbGFzc05hbWVdOiBjbGFzc05hbWUsXG4gICAgJ2stZmx1aWQnOiBmbHVpZCxcbn07XG5cbnJldHVybiBoKCdkaXYnLCB7J3N0eWxlJzogZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW3N0eWxlIF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcyl9LCBmdW5jdGlvbigpIHt0cnkge3JldHVybiBbY2hlY2tUeXBlICE9PSAnbm9uZScgPyBfX3UubWFwKFxuICAgICAgICBjaGlsZHJlbiA/IFxuICAgICAgICAgICAgKEFycmF5LmlzQXJyYXkoY2hpbGRyZW4pID8gY2hpbGRyZW4gOiBbY2hpbGRyZW5dKSA6XG4gICAgICAgICAgICBjaGlsZHJlbiwgXG4gICAgICAgIHZOb2RlID0+IHtcbiAgICAgICAgICAgIGlmICh2Tm9kZS50YWcgPT09IEJ1dHRvbikge1xuICAgICAgICAgICAgICAgIHZOb2RlLnByb3BzID0ge1xuICAgICAgICAgICAgICAgICAgICAuLi52Tm9kZS5wcm9wcywgXG4gICAgICAgICAgICAgICAgICAgIF92YWx1ZTogdmFsdWUsXG4gICAgICAgICAgICAgICAgICAgIF9jaGVja1R5cGU6IGNoZWNrVHlwZSxcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdk5vZGU7XG4gICAgICAgIH0pIDogXG4gICAgICAgIGNoaWxkcmVuXG5dWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpLCBfY2xhc3NOYW1lKGZ1bmN0aW9uKCkge3RyeSB7cmV0dXJuIFtjbGFzc05hbWVPYmogXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKSkpXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9idXR0b24vZ3JvdXAudmR0IiwiaW1wb3J0IEludGFjdCBmcm9tICdpbnRhY3QnO1xuaW1wb3J0IHRlbXBsYXRlIGZyb20gJy4vaW5kZXgudmR0JztcbmltcG9ydCBHcm91cCBmcm9tICcuL2dyb3VwJztcbmltcG9ydCAnLi4vLi4vc3R5bGVzL2twYy5zdHlsJztcbmltcG9ydCAnLi9pbmRleC5zdHlsJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQnV0dG9uIGV4dGVuZHMgSW50YWN0IHtcbiAgICBASW50YWN0LnRlbXBsYXRlKClcbiAgICBnZXQgdGVtcGxhdGUoKSB7IHJldHVybiB0ZW1wbGF0ZTsgfVxuXG4gICAgZGVmYXVsdHMoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB0eXBlOiAnZGVmYXVsdCcsIC8vIHByaW1hcnkgfCB3YXJuaW5nIHwgZGFuZ2VyXG4gICAgICAgICAgICBzaXplOiAnZGVmYXVsdCcsIC8vIHNtYWxsIHwgbWluaVxuICAgICAgICAgICAgaWNvbjogZmFsc2UsXG4gICAgICAgICAgICBjaXJjbGU6IGZhbHNlLFxuICAgICAgICAgICAgbG9hZGluZzogZmFsc2UsXG4gICAgICAgICAgICBkaXNhYmxlZDogZmFsc2UsXG4gICAgICAgICAgICBmbHVpZDogZmFsc2UsXG4gICAgICAgICAgICBodG1sVHlwZTogJ2J1dHRvbicsXG4gICAgICAgICAgICB0YWdOYW1lOiAnYnV0dG9uJyxcbiAgICAgICAgICAgIHRhZ1Byb3BzOiB1bmRlZmluZWQsXG4gICAgICAgICAgICB2YWx1ZTogdW5kZWZpbmVkLFxuICAgICAgICAgICAgbmFtZTogdW5kZWZpbmVkLFxuICAgICAgICAgICAgdGFiaW5kZXg6ICcwJyxcblxuICAgICAgICAgICAgX3ZhbHVlOiB1bmRlZmluZWQsXG4gICAgICAgICAgICBfY2hlY2tUeXBlOiAnbm9uZScsXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICBzaXplOiBTdHJpbmcsXG4gICAgICAgIGljb246IEJvb2xlYW4sXG4gICAgICAgIGNpcmNsZTogQm9vbGVhbixcbiAgICAgICAgbG9hZGluZzogQm9vbGVhbixcbiAgICAgICAgZGlzYWJsZWQ6IEJvb2xlYW4sXG4gICAgICAgIGZsdWlkOiBCb29sZWFuLFxuICAgICAgICBodG1sVHlwZTogU3RyaW5nLFxuICAgICAgICB0YWdOYW1lOiBbU3RyaW5nLCBGdW5jdGlvbl0sXG4gICAgICAgIG5hbWU6IFN0cmluZyxcbiAgICB9XG5cbiAgICBfbW91bnQoKSB7XG4gICAgICAgIGxldCBwYXJlbnRWTm9kZSA9IHRoaXMucGFyZW50Vk5vZGU7XG5cbiAgICAgICAgd2hpbGUgKHBhcmVudFZOb2RlICYmIHBhcmVudFZOb2RlLnRhZyAhPT0gR3JvdXApIHtcbiAgICAgICAgICAgIHBhcmVudFZOb2RlID0gcGFyZW50Vk5vZGUucGFyZW50Vk5vZGU7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocGFyZW50Vk5vZGUpIHtcbiAgICAgICAgICAgIHRoaXMuZ3JvdXAgPSBwYXJlbnRWTm9kZS5jaGlsZHJlbjtcblxuICAgICAgICAgICAgdGhpcy5zZXQoe1xuICAgICAgICAgICAgICAgIF9jaGVja1R5cGU6IHRoaXMuZ3JvdXAuZ2V0KCdjaGVja1R5cGUnKSxcbiAgICAgICAgICAgICAgICBfdmFsdWU6IHRoaXMuZ3JvdXAuZ2V0KCd2YWx1ZScpXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIF9iZWZvcmVVcGRhdGUoKSB7XG4gICAgICAgIGlmICh0aGlzLmdyb3VwKSB7XG4gICAgICAgICAgICB0aGlzLnNldCh7XG4gICAgICAgICAgICAgICAgX2NoZWNrVHlwZTogdGhpcy5ncm91cC5nZXQoJ2NoZWNrVHlwZScpLFxuICAgICAgICAgICAgICAgIF92YWx1ZTogdGhpcy5ncm91cC5nZXQoJ3ZhbHVlJylcbiAgICAgICAgICAgIH0sIHtzaWxlbnQ6IHRydWV9KTtcbiAgICAgICAgfSBcbiAgICB9XG5cbiAgICBzaG93TG9hZGluZygpIHtcbiAgICAgICAgdGhpcy5zZXQoJ2xvYWRpbmcnLCB0cnVlKTtcbiAgICB9XG5cbiAgICBoaWRlTG9hZGluZygpIHtcbiAgICAgICAgdGhpcy5zZXQoJ2xvYWRpbmcnLCBmYWxzZSk7XG4gICAgfVxuXG4gICAgZGlzYWJsZSgpIHtcbiAgICAgICAgdGhpcy5zZXQoJ2Rpc2FibGVkJywgdHJ1ZSk7XG4gICAgfVxuXG4gICAgZW5hYmxlKCkge1xuICAgICAgICB0aGlzLnNldCgnZGlzYWJsZWQnLCBmYWxzZSk7XG4gICAgfVxuXG4gICAgX29uQ2xpY2soZSkge1xuICAgICAgICBpZiAodGhpcy5nZXQoJ2Rpc2FibGVkJykgfHwgdGhpcy5nZXQoJ2xvYWRpbmcnKSkge1xuICAgICAgICAgICAgcmV0dXJuIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLmdyb3VwKSB7XG4gICAgICAgICAgICBsZXQge19jaGVja1R5cGUsIHZhbHVlLCBfdmFsdWV9ID0gdGhpcy5nZXQoKTtcbiAgICAgICAgICAgIGlmICh2YWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgaWYgKF9jaGVja1R5cGUgPT09ICdyYWRpbycpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ncm91cC5zZXQoJ3ZhbHVlJywgdmFsdWUpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoX2NoZWNrVHlwZSA9PT0gJ2NoZWNrYm94Jykge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIUFycmF5LmlzQXJyYXkoX3ZhbHVlKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgX3ZhbHVlID0gW107XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgX3ZhbHVlID0gX3ZhbHVlLnNsaWNlKDApO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBpbmRleCA9IF92YWx1ZS5pbmRleE9mKHZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCF+aW5kZXgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIF92YWx1ZS5wdXNoKHZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIF92YWx1ZS5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZ3JvdXAuc2V0KCd2YWx1ZScsIF92YWx1ZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgZS5jb21wb25lbnQgPSB0aGlzO1xuICAgICAgICB0aGlzLnRyaWdnZXIoJ2NsaWNrJywgZSk7XG4gICAgfVxuXG4gICAgX2JsdXIoKSB7XG4gICAgICAgIC8vIHdoZW4gY2xpY2ssIGJsdXIgaXQgdG8gcmVtb3ZlIHRoZSBmb2N1cyBzdHlsZVxuICAgICAgICB0aGlzLmVsZW1lbnQuYmx1cigpO1xuICAgIH1cbn1cblxuZXhwb3J0IHtCdXR0b24sIEdyb3VwIGFzIEJ1dHRvbkdyb3VwfTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvYnV0dG9uL2luZGV4LmpzIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cbiAgICBpZihtb2R1bGUuaG90KSB7XG4gICAgICAvLyAxNTI3NTc2Njc4NTUwXG4gICAgICB2YXIgY3NzUmVsb2FkID0gcmVxdWlyZShcIiEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWhvdC1sb2FkZXIvaG90TW9kdWxlUmVwbGFjZW1lbnQuanNcIikobW9kdWxlLmlkLCB7XCJmaWxlTWFwXCI6XCJ7ZmlsZU5hbWV9XCJ9KTtcbiAgICAgIG1vZHVsZS5ob3QuZGlzcG9zZShjc3NSZWxvYWQpO1xuICAgICAgbW9kdWxlLmhvdC5hY2NlcHQodW5kZWZpbmVkLCBjc3NSZWxvYWQpO1xuICAgIH1cbiAgXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9jb21wb25lbnRzL2J1dHRvbi9pbmRleC5zdHlsXG4vLyBtb2R1bGUgaWQgPSAuL2NvbXBvbmVudHMvYnV0dG9uL2luZGV4LnN0eWxcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCJpbXBvcnQge2lzU3RyaW5nT3JOdW1iZXJOb3RFbXB0eX0gZnJvbSAnLi4vdXRpbHMnO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24ob2JqLCBfVmR0LCBibG9ja3MsICRjYWxsZWUpIHtcbl9WZHQgfHwgKF9WZHQgPSBWZHQpO1xub2JqIHx8IChvYmogPSB7fSk7XG5ibG9ja3MgfHwgKGJsb2NrcyA9IHt9KTtcbnZhciBoID0gX1ZkdC5taXNzLmgsIGhjID0gX1ZkdC5taXNzLmhjLCBodSA9IF9WZHQubWlzcy5odSwgd2lkZ2V0cyA9IHRoaXMgJiYgdGhpcy53aWRnZXRzIHx8IHt9LCBfYmxvY2tzID0ge30sIF9fYmxvY2tzID0ge30sXG5fX3UgPSBfVmR0LnV0aWxzLCBleHRlbmQgPSBfX3UuZXh0ZW5kLCBfZSA9IF9fdS5lcnJvciwgX2NsYXNzTmFtZSA9IF9fdS5jbGFzc05hbWUsXG5fX28gPSBfX3UuT3B0aW9ucywgX2dldE1vZGVsID0gX19vLmdldE1vZGVsLCBfc2V0TW9kZWwgPSBfX28uc2V0TW9kZWwsXG5fc2V0Q2hlY2tib3hNb2RlbCA9IF9fdS5zZXRDaGVja2JveE1vZGVsLCBfZGV0ZWN0Q2hlY2tib3hDaGVja2VkID0gX191LmRldGVjdENoZWNrYm94Q2hlY2tlZCxcbl9zZXRTZWxlY3RNb2RlbCA9IF9fdS5zZXRTZWxlY3RNb2RlbCxcbnNlbGYgPSB0aGlzLmRhdGEsICR0aGlzID0gdGhpcywgc2NvcGUgPSBvYmosIEFuaW1hdGUgPSBzZWxmICYmIHNlbGYuQW5pbWF0ZSwgcGFyZW50ID0gKCRjYWxsZWUgfHwge30pLl9zdXBlclxuXG5cbmxldCB7XG4gICAgdHlwZSwgY2xhc3NOYW1lLCBzaXplLCBpY29uLCBjaXJjbGUsIHJlZiwga2V5LCB0YWJpbmRleCxcbiAgICB0YWdOYW1lLCBodG1sVHlwZSwgZmx1aWQsIGNoaWxkcmVuLCBsb2FkaW5nLCBkaXNhYmxlZCxcbiAgICB2YWx1ZSwgX3ZhbHVlLCBuYW1lLCB0YWdQcm9wcywgX2NoZWNrVHlwZSwgLi4ucmVzdFxufSA9IHNlbGYuZ2V0KCk7XG5cbmNvbnN0IGNoZWNrZWQgPSB2YWx1ZSAhPT0gdW5kZWZpbmVkID9cbiAgICBfY2hlY2tUeXBlID09PSAncmFkaW8nID8gXG4gICAgICAgIHZhbHVlID09PSBfdmFsdWUgOiAgXG4gICAgICAgIChcbiAgICAgICAgICAgIF9jaGVja1R5cGUgPT09ICdjaGVja2JveCcgPyBcbiAgICAgICAgICAgICAgICBBcnJheS5pc0FycmF5KF92YWx1ZSkgJiYgISF+X3ZhbHVlLmluZGV4T2YodmFsdWUpIDpcbiAgICAgICAgICAgICAgICBmYWxzZVxuICAgICAgICApXG4gICAgOiBmYWxzZTtcblxuY29uc3QgY2xhc3NOYW1lT2JqID0ge1xuICAgICdrLWJ0bic6IHRydWUsXG4gICAgW2BrLSR7dHlwZX1gXTogdHlwZSAhPT0gJ2RlZmF1bHQnLFxuICAgICdrLWJ0bi1pY29uJzogaWNvbixcbiAgICBbYGstJHtzaXplfWBdOiBzaXplICE9PSAnZGVmYXVsdCcsXG4gICAgW2NsYXNzTmFtZV06IGNsYXNzTmFtZSwgXG4gICAgJ2stY2lyY2xlJzogY2lyY2xlLFxuICAgICdrLWxvYWRpbmcnOiBsb2FkaW5nLFxuICAgICdrLWZsdWlkJzogZmx1aWQsXG4gICAgJ2stYWN0aXZlJzogY2hlY2tlZCxcbiAgICAnay1kaXNhYmxlZCc6IGRpc2FibGVkIHx8IGxvYWRpbmcsXG59O1xuXG5jb25zdCBCdXR0b24gPSBwcm9wcyA9PiB7XG4gICAgaWYgKHByb3BzLmhyZWYgJiYgdGFnTmFtZSA9PT0gJ2J1dHRvbicpIHtcbiAgICAgICAgdGFnTmFtZSA9ICdhJztcbiAgICB9XG4gICAgaWYgKHRhZ05hbWUgPT09ICdidXR0b24nKSB7XG4gICAgICAgIC8vIHNldCB0eXBlIG9mIGh0bWwgYnV0dG9uXG4gICAgICAgIHByb3BzLnR5cGUgPSBodG1sVHlwZTtcbiAgICB9XG4gICAgLy8gZGlzYWJsZSBidXR0b24gd2hlbiBsb2FkaW5nXG4gICAgLyogaWYgKGxvYWRpbmcpIHByb3BzLmRpc2FibGVkID0gdHJ1ZTsgKi9cbiAgICByZXR1cm4gaCh0YWdOYW1lLCBwcm9wcywgcHJvcHMuY2hpbGRyZW4pO1xufTtcblxuLy8gaGFjayBmb3IgbG9hZGluZyB0cmFuc2l0aW9uIG9mIHdpZHRoXG5pZiAoIWljb24gJiYgQXJyYXkuaXNBcnJheShjaGlsZHJlbikpIHtcbiAgICBjaGlsZHJlbi5mb3JFYWNoKChjaGlsZCwgaW5kZXgpID0+IHtcbiAgICAgICAgaWYgKGNoaWxkKSB7XG4gICAgICAgICAgICBpZiAoY2hpbGQudHlwZSA9PT0gMSB8fCBpc1N0cmluZ09yTnVtYmVyTm90RW1wdHkoY2hpbGQpKSB7XG4gICAgICAgICAgICAgICAgLy8gaXMgYSB0ZXh0IG5vZGVcbiAgICAgICAgICAgICAgICAvLyB3cmFwIHRleHQgbm9kZSB3aXRoIHNwYW5cbiAgICAgICAgICAgICAgICBjaGlsZHJlbltpbmRleF0gPSBoKCdzcGFuJywgbnVsbCwgZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW2NoaWxkIF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcykpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyB3aGV0aGVyIHRoZSBpY29uIGlzIG9uIHRoZSBsZWZ0IHNpZGUgb3IgcmlnaHRcbiAgICAgICAgICAgIGlmIChpbmRleCA9PT0gMCkge1xuICAgICAgICAgICAgICAgIGlmIChjaGlsZC5jbGFzc05hbWUgJiYgY2hpbGQuY2xhc3NOYW1lLmluZGV4T2YoJ2ljb24nKSA+IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZU9ialsnay1pY29uLWxlZnQnXSA9IHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIGlmIChpbmRleCA9PT0gY2hpbGRyZW4ubGVuZ3RoIC0gMSkge1xuICAgICAgICAgICAgICAgIGlmIChjaGlsZC5jbGFzc05hbWUgJiYgY2hpbGQuY2xhc3NOYW1lLmluZGV4T2YoJ2ljb24nKSA+IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZU9ialsnay1pY29uLXJpZ2h0J10gPSB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0pO1xufSBlbHNlIGlmIChpc1N0cmluZ09yTnVtYmVyTm90RW1wdHkoY2hpbGRyZW4pKSB7XG4gICAgLy8gd3JhcCB0ZXh0IG5vZGUgd2l0aCBzcGFuXG4gICAgY2hpbGRyZW4gPSBoKCdzcGFuJywgbnVsbCwgZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW2NoaWxkcmVuIF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcykpXG59XG5cbnJldHVybiBoKEJ1dHRvbiwgeydjbGFzc05hbWUnOiBfY2xhc3NOYW1lKGZ1bmN0aW9uKCkge3RyeSB7cmV0dXJuIFtjbGFzc05hbWVPYmogXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKSksIC4uLmZ1bmN0aW9uKCkge3RyeSB7cmV0dXJuIFtyZXN0IF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcyksIC4uLmZ1bmN0aW9uKCkge3RyeSB7cmV0dXJuIFt0YWdQcm9wcyBdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpLCAnZXYtY2xpY2snOiBmdW5jdGlvbigpIHt0cnkge3JldHVybiBbc2VsZi5fb25DbGljayBdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpLCAndGFiaW5kZXgnOiBmdW5jdGlvbigpIHt0cnkge3JldHVybiBbZGlzYWJsZWQgfHwgbG9hZGluZyA/IFwiLTFcIiA6IHRhYmluZGV4IF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcyksICdldi1tb3VzZXVwJzogZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW3NlbGYuX2JsdXIgXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKSwgJ2NoaWxkcmVuJzogWydcXG4gICAgJywgZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW2xvYWRpbmcgPyBcbiAgICAgICAgY2xhc3NOYW1lT2JqWydrLWljb24tcmlnaHQnXSA/XG4gICAgICAgICAgICBbY2hpbGRyZW4sIGgoJ2knLCBudWxsLCBudWxsLCAnay1pY29uIGlvbi1sb2FkLWMgaWNvbi1sb2FkaW5nJyldIDpcbiAgICAgICAgICAgIFtoKCdpJywgbnVsbCwgbnVsbCwgJ2staWNvbiBpb24tbG9hZC1jIGljb24tbG9hZGluZycpLCBjaGlsZHJlbl0gOlxuICAgICAgICBjaGlsZHJlbiBcbiAgICBdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpLCAnXFxuICAgICcsIGZ1bmN0aW9uKCkge3RyeSB7cmV0dXJuIFtfY2hlY2tUeXBlICE9PSAnbm9uZScgXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKSA/IGgoJ2lucHV0Jywgeyd0eXBlJzogZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW19jaGVja1R5cGUgXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKSwgJ25hbWUnOiBmdW5jdGlvbigpIHt0cnkge3JldHVybiBbbmFtZSBdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpLCAnY2hlY2tlZCc6IGZ1bmN0aW9uKCkge3RyeSB7cmV0dXJuIFtjaGVja2VkIF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcyksICd0YWJpbmRleCc6ICctMSd9KSA6IHVuZGVmaW5lZF0sICdfY29udGV4dCc6ICR0aGlzfSlcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL2J1dHRvbi9pbmRleC52ZHQiLCJpbXBvcnQgSW50YWN0IGZyb20gJ2ludGFjdCc7XG5pbXBvcnQge2lzVGV4dFZOb2RlLCBmaW5kUGFyZW50Q29tcG9uZW50fSBmcm9tICcuLi91dGlscyc7XG5pbXBvcnQgRHJvcGRvd25NZW51IGZyb20gJy4vbWVudSc7XG5cbmNvbnN0IGggPSBJbnRhY3QuVmR0Lm1pc3MuaDtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRHJvcGRvd24gZXh0ZW5kcyBJbnRhY3Qge1xuICAgIEBJbnRhY3QudGVtcGxhdGUoKVxuICAgIHN0YXRpYyB0ZW1wbGF0ZShkYXRhKSB7XG4gICAgICAgIHJldHVybiBkYXRhLmdldCgnY2hpbGRyZW4nKTtcbiAgICB9XG5cbiAgICBkZWZhdWx0cygpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHRyaWdnZXI6ICdob3ZlcicsXG4gICAgICAgICAgICBkaXNhYmxlZDogZmFsc2UsXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBfaW5pdCgpIHtcbiAgICAgICAgdGhpcy5fc2F2ZU9yaWdpbmFsRXZlbnRzKCk7XG4gICAgICAgIHRoaXMub24oJyRyZWNlaXZlOmNoaWxkcmVuJywgKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5fc2F2ZU9yaWdpbmFsRXZlbnRzKCk7XG4gICAgICAgIH0sIHtrZWVwOiB0cnVlfSk7XG4gICAgfVxuXG4gICAgX3NhdmVPcmlnaW5hbEV2ZW50cygpIHtcbiAgICAgICAgbGV0IHtjaGlsZHJlbiwgdHJpZ2dlciwgY2xhc3NOYW1lLCAuLi5yZXN0fSA9IHRoaXMuZ2V0KCk7XG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KGNoaWxkcmVuKSkge1xuICAgICAgICAgICAgY2hpbGRyZW4gPSBjaGlsZHJlblswXTtcbiAgICAgICAgfSBcbiAgICAgICAgaWYgKGlzVGV4dFZOb2RlKGNoaWxkcmVuKSkge1xuICAgICAgICAgICAgY2hpbGRyZW4gPSBoKCdzcGFuJywgcmVzdCwgY2hpbGRyZW4sIGNsYXNzTmFtZSk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBzYXZlIHRoZSBvcmlnaW5hbCBldmVudFxuICAgICAgICBjb25zdCBvcmlnaW5Qcm9wcyA9IGNoaWxkcmVuLnByb3BzO1xuICAgICAgICBsZXQgaGFzU2F2ZWQgPSBmYWxzZTtcbiAgICAgICAgaWYgKCFvcmlnaW5Qcm9wcy5faGFzU2F2ZWQpIHtcbiAgICAgICAgICAgIGNoaWxkcmVuLl9ldkNsaWNrID0gb3JpZ2luUHJvcHNbJ2V2LWNsaWNrJ107XG4gICAgICAgICAgICBjaGlsZHJlbi5fZXZNb3VzZUVudGVyID0gb3JpZ2luUHJvcHNbJ2V2LW1vdXNlZW50ZXInXTtcbiAgICAgICAgICAgIGNoaWxkcmVuLl9ldk1vdXNlTGVhdmUgPSBvcmlnaW5Qcm9wc1snZXYtbW91c2VsZWF2ZSddO1xuICAgICAgICAgICAgaGFzU2F2ZWQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHByb3BzID0ge307XG4gICAgICAgIC8vIGlmICh0cmlnZ2VyID09PSAnY2xpY2snKSB7XG4gICAgICAgICAgICBwcm9wc1snZXYtY2xpY2snXSA9IHRoaXMuc2hvdy5iaW5kKHRoaXMsIGNoaWxkcmVuLl9ldkNsaWNrKTtcbiAgICAgICAgLy8gfSBlbHNlIHtcbiAgICAgICAgaWYgKHRyaWdnZXIgPT09ICdob3ZlcicpIHtcbiAgICAgICAgICAgIHByb3BzWydldi1tb3VzZWVudGVyJ10gPSB0aGlzLnNob3cuYmluZCh0aGlzLCBjaGlsZHJlbi5fZXZNb3VzZUVudGVyKTtcbiAgICAgICAgICAgIHByb3BzWydldi1tb3VzZWxlYXZlJ10gPSB0aGlzLmhpZGUuYmluZCh0aGlzLCBjaGlsZHJlbi5fZXZNb3VzZUxlYXZlKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoaGFzU2F2ZWQpIHtcbiAgICAgICAgICAgIHByb3BzLl9oYXNTYXZlZCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgY2hpbGRyZW4ucHJvcHMgPSB7Li4uY2hpbGRyZW4ucHJvcHMsIC4uLnByb3BzfTtcbiAgICAgICAgdGhpcy5zZXQoJ2NoaWxkcmVuJywgY2hpbGRyZW4sIHtzaWxlbnQ6IHRydWV9KTtcbiAgICB9XG5cbiAgICBfbW91bnQoKSB7XG4gICAgICAgIC8vIHRoZSBuZXh0IHNpYmxpbmcgaXMgRHJvcGRvd25NZW51XG4gICAgICAgIC8vIHdlIGNhbiBub3QgZ2V0IHRoZSBtZW51IGJ5IGNhbGwgZ2V0KCdtZW51JykgZGlyZWN0bHksXG4gICAgICAgIC8vIGJlY2F1c2UgdGhlIHZOb2RlIG1heSBiZSBjbG9uZWRcbiAgICAgICAgY29uc3Qgc2libGluZ3MgPSB0aGlzLnBhcmVudFZOb2RlLmNoaWxkcmVuO1xuICAgICAgICBjb25zdCBpbmRleCA9IHNpYmxpbmdzLmluZGV4T2YodGhpcy52Tm9kZSk7XG4gICAgICAgIGNvbnN0IG1lbnUgPSBzaWJsaW5nc1tpbmRleCArIDFdO1xuICAgICAgICBtZW51LmNoaWxkcmVuLmRyb3Bkb3duID0gdGhpcztcbiAgICAgICAgdGhpcy5tZW51ID0gbWVudTtcbiAgICB9XG5cbiAgICBzaG93KGZuLCBlLCBpc0ZvY3VzKSB7XG4gICAgICAgIGlmICh0eXBlb2YgZm4gPT09ICdmdW5jdGlvbicpIGZuKGUpO1xuXG4gICAgICAgIGlmICh0aGlzLmdldCgnZGlzYWJsZWQnKSkgcmV0dXJuO1xuXG4gICAgICAgIGNvbnN0IG1lbnUgPSB0aGlzLm1lbnUuY2hpbGRyZW47XG4gICAgICAgIG1lbnUuc2hvdygpO1xuXG4gICAgICAgIGlmIChpc0ZvY3VzKSB7XG4gICAgICAgICAgICBtZW51LmZvY3VzSXRlbUJ5SW5kZXgoMCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBoaWRlKGZuLCBlLCBpbW1lZGlhdGVseSkge1xuICAgICAgICBpZiAodHlwZW9mIGZuID09PSAnZnVuY3Rpb24nKSBmbihlKTtcblxuICAgICAgICBpZiAodGhpcy5nZXQoJ2Rpc2FibGVkJykpIHJldHVybjtcblxuICAgICAgICBjb25zdCBtZW51ID0gdGhpcy5tZW51LmNoaWxkcmVuO1xuICAgICAgICBtZW51LmhpZGUoaW1tZWRpYXRlbHkpO1xuICAgIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvZHJvcGRvd24vZHJvcGRvd24uanMiLCJpbXBvcnQgSW50YWN0IGZyb20gJ2ludGFjdCc7XG5pbXBvcnQgRHJvcGRvd24gZnJvbSAnLi9kcm9wZG93bic7XG5pbXBvcnQgRHJvcGRvd25NZW51IGZyb20gJy4vbWVudSc7XG5pbXBvcnQgRHJvcGRvd25JdGVtIGZyb20gJy4vaXRlbSc7XG5pbXBvcnQgJy4uLy4uL3N0eWxlcy9rcGMuc3R5bCc7XG5pbXBvcnQgJy4vaW5kZXguc3R5bCc7XG5cbmNvbnN0IGggPSBJbnRhY3QuVmR0Lm1pc3MuaDtcblxuZnVuY3Rpb24gV3JhcHBlcihwcm9wcywgaW5WdWUpIHtcbiAgICBsZXQge1xuICAgICAgICBjaGlsZHJlbiwgcG9zaXRpb24sIGtleSxcbiAgICAgICAgcmVmLCAuLi5yZXN0XG4gICAgfSA9IHByb3BzO1xuXG4gICAgY29uc3QgZWxlbWVudCA9IGNoaWxkcmVuWzBdO1xuICAgIGNvbnN0IG1lbnUgPSBjaGlsZHJlblsxXTtcblxuICAgIG1lbnUucHJvcHMgPSB7XG4gICAgICAgIHBvc2l0aW9uLCBcbiAgICAgICAga2V5OiBrZXkgPT0gbnVsbCA/IGtleSA6IGAke2tleX0ubWVudWAsXG4gICAgICAgIC4uLnJlc3QsXG4gICAgICAgIC4uLm1lbnUucHJvcHMsXG4gICAgfTtcblxuICAgIHJldHVybiAhaW5WdWUgPyBcbiAgICAgICAgW1xuICAgICAgICAgICAgaChEcm9wZG93biwge1xuICAgICAgICAgICAgICAgIGtleToga2V5ID09IG51bGwgPyBrZXkgOiBgJHtrZXl9LnRyaWdnZXJgLFxuICAgICAgICAgICAgICAgIHJlZjogcmVmLFxuICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBlbGVtZW50LCBcbiAgICAgICAgICAgICAgICAuLi5yZXN0XG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIG1lbnVcbiAgICAgICAgXSA6XG4gICAgICAgIGgoRHJvcGRvd25WdWVXcmFwcGVyLCB7XG4gICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICAgIGgoRHJvcGRvd24sIHtcbiAgICAgICAgICAgICAgICAgICAga2V5OiBrZXkgPT0gbnVsbCA/IGtleSA6IGAke2tleX0udHJpZ2dlcmAsXG4gICAgICAgICAgICAgICAgICAgIHJlZjogcmVmLFxuICAgICAgICAgICAgICAgICAgICBjaGlsZHJlbjogW2VsZW1lbnRdLCBcbiAgICAgICAgICAgICAgICAgICAgLi4ucmVzdFxuICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgIG1lbnVcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAuLi5yZXN0XG4gICAgICAgIH0pO1xufVxuXG4vLyBWdWUgb25seSBzdXBwb3J0IHJldHVybiBvbmUgZWxlbWVudCBmcm9tIGZ1bmN0aW9uYWwgY29tcG9uZW50LFxuLy8gc28gd2Ugd3JhcCB0aGVtLiBUaGlzIHdpbGwgbGVhZCB0byBkYW1hZ2UgdGhlIGRvbSBzdHJ1Y3Rpb24sXG4vLyBiZWNhdXNlIHdlIG11c3Qgd3JhcCB0aGVtIHdpdGggYSBkaXZcbmNvbnN0IF9jbGFzc05hbWUgPSBJbnRhY3QuVmR0LnV0aWxzLmNsYXNzTmFtZTtcbmNsYXNzIERyb3Bkb3duVnVlV3JhcHBlciBleHRlbmRzIEludGFjdCB7XG4gICAgdGVtcGxhdGUoZGF0YSkge1xuICAgICAgICBjb25zdCB7Y2xhc3NOYW1lLCBjaGlsZHJlbiwgLi4ucmVzdH0gPSBkYXRhLmdldCgpO1xuICAgICAgICByZXR1cm4gaCgnZGl2JywgcmVzdCwgY2hpbGRyZW4sIF9jbGFzc05hbWUoe1xuICAgICAgICAgICAgJ2stZHJvcGRvd24nOiB0cnVlLFxuICAgICAgICAgICAgW2NsYXNzTmFtZV06IGNsYXNzTmFtZSxcbiAgICAgICAgfSkpO1xuICAgIH1cbn1cblxuY29uc3QgX1dyYXBwZXIgPSBJbnRhY3QuZnVuY3Rpb25hbFdyYXBwZXIgP1xuICAgIEludGFjdC5mdW5jdGlvbmFsV3JhcHBlcihXcmFwcGVyKSA6IFdyYXBwZXI7XG5cbmV4cG9ydCBkZWZhdWx0IF9XcmFwcGVyO1xuXG5leHBvcnQge19XcmFwcGVyIGFzIERyb3Bkb3duLCBEcm9wZG93bk1lbnUsIERyb3Bkb3duSXRlbX07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL2Ryb3Bkb3duL2luZGV4LmpzIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cbiAgICBpZihtb2R1bGUuaG90KSB7XG4gICAgICAvLyAxNTI3NTc2Njc5MzgwXG4gICAgICB2YXIgY3NzUmVsb2FkID0gcmVxdWlyZShcIiEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWhvdC1sb2FkZXIvaG90TW9kdWxlUmVwbGFjZW1lbnQuanNcIikobW9kdWxlLmlkLCB7XCJmaWxlTWFwXCI6XCJ7ZmlsZU5hbWV9XCJ9KTtcbiAgICAgIG1vZHVsZS5ob3QuZGlzcG9zZShjc3NSZWxvYWQpO1xuICAgICAgbW9kdWxlLmhvdC5hY2NlcHQodW5kZWZpbmVkLCBjc3NSZWxvYWQpO1xuICAgIH1cbiAgXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9jb21wb25lbnRzL2Ryb3Bkb3duL2luZGV4LnN0eWxcbi8vIG1vZHVsZSBpZCA9IC4vY29tcG9uZW50cy9kcm9wZG93bi9pbmRleC5zdHlsXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIiLCJpbXBvcnQgSW50YWN0IGZyb20gJ2ludGFjdCc7XG5pbXBvcnQgdGVtcGxhdGUgZnJvbSAnLi9pdGVtLnZkdCc7XG5pbXBvcnQgRHJvcGRvd24gZnJvbSAnLi9kcm9wZG93bic7XG5pbXBvcnQgRHJvcGRvd25NZW51IGZyb20gJy4vbWVudSc7XG5pbXBvcnQge2ZpbmRQYXJlbnRDb21wb25lbnR9IGZyb20gJy4uL3V0aWxzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRHJvcGRvd25JdGVtIGV4dGVuZHMgSW50YWN0IHtcbiAgICBASW50YWN0LnRlbXBsYXRlKClcbiAgICBzdGF0aWMgdGVtcGxhdGUgPSB0ZW1wbGF0ZTtcblxuICAgIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgICAgIGRpc2FibGVkOiBCb29sZWFuLFxuICAgICAgICBoaWRlT25TZWxlY3Q6IEJvb2xlYW4sXG4gICAgfTtcblxuICAgIGRlZmF1bHRzKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgZGlzYWJsZWQ6IGZhbHNlLFxuICAgICAgICAgICAgaGlkZU9uU2VsZWN0OiB0cnVlLFxuXG4gICAgICAgICAgICBfaXNGb2N1czogZmFsc2UsXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgX2luaXQoKSB7XG4gICAgICAgIC8vIGlmIHNlbGVjdGVkIGhpZGUgYWxsIGRyb3Bkb3duIG1lbnVcbiAgICAgICAgdGhpcy5vbignc2VsZWN0JywgKCkgPT4ge1xuICAgICAgICAgICAgaWYgKHRoaXMuZ2V0KCdoaWRlT25TZWxlY3QnKSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGFuY2VzdG9yID0gdGhpcy5fZmluZEFuY2VzdG9yRHJvcGRvd25NZW51KCk7XG4gICAgICAgICAgICAgICAgYW5jZXN0b3IuaGlkZSh0cnVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgX21vdW50KCkge1xuICAgICAgICBjb25zdCBwYXJlbnQgPSB0aGlzLnBhcmVudCA9IHRoaXMuX2ZpbmRBbmNlc3RvckRyb3Bkb3duTWVudSh0cnVlKTtcbiAgICAgICAgcGFyZW50Lml0ZW1zLnB1c2godGhpcyk7XG4gICAgfVxuXG4gICAgX29uQ2xpY2soZSkge1xuICAgICAgICBpZiAodGhpcy5nZXQoJ2Rpc2FibGVkJykpIHJldHVybjtcblxuICAgICAgICB0aGlzLnRyaWdnZXIoJ2NsaWNrJywgZSk7XG5cbiAgICAgICAgLy8gaXMgbm90IGEgc3ViIGRyb3Bkb3duIHRyaWdnZXJcbiAgICAgICAgaWYgKHRoaXMucGFyZW50Vk5vZGUudGFnICE9PSBEcm9wZG93bikge1xuICAgICAgICAgICAgdGhpcy50cmlnZ2VyKCdzZWxlY3QnLCB0aGlzLCBlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIF9vbk1vdXNlRW50ZXIoZSkge1xuICAgICAgICB0aGlzLnRyaWdnZXIoJ21vdXNlZW50ZXInLCBlKTtcblxuICAgICAgICBpZiAodGhpcy5nZXQoJ2Rpc2FibGVkJykpIHJldHVybjtcblxuICAgICAgICB0aGlzLnBhcmVudC5mb2N1c0l0ZW0odGhpcyk7XG4gICAgfVxuXG4gICAgX29uTW91c2VMZWF2ZShlKSB7XG4gICAgICAgIHRoaXMudHJpZ2dlcignbW91c2VsZWF2ZScsIGUpO1xuICAgICAgICAvLyBpZiAodGhpcy5nZXQoJ2Rpc2FibGVkJykpIHJldHVybjtcbiAgICB9XG5cbiAgICBzZWxlY3QoKSB7XG4gICAgICAgIC8vIGlzIG5vdCBhIHN1YiBkcm9wZG93biB0cmlnZ2VyXG4gICAgICAgIGNvbnN0IGRyb3Bkb3duID0gdGhpcy5faXNTdWJNZW51KCk7XG4gICAgICAgIGlmICghZHJvcGRvd24pIHtcbiAgICAgICAgICAgIHRoaXMudHJpZ2dlcignc2VsZWN0JywgdGhpcyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBkcm9wZG93bi5zaG93KCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmb2N1cygpIHtcbiAgICAgICAgdGhpcy5zZXQoJ19pc0ZvY3VzJywgdHJ1ZSk7XG5cbiAgICAgICAgY29uc3QgZWxSZWN0ID0gdGhpcy5lbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgICBjb25zdCBwRWwgPSB0aGlzLnBhcmVudC5yZWZzLm1lbnUuZWxlbWVudDtcbiAgICAgICAgY29uc3QgcEVsUmVjdCA9IHBFbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgICAgY29uc3QgYm90dG9tT3ZlcmZsb3dEaXN0YW5jZSA9IGVsUmVjdC5ib3R0b20gLSBwRWxSZWN0LmJvdHRvbTtcbiAgICAgICAgY29uc3QgdG9wT3ZlcmZsb3dEaXN0YW5jZSA9IGVsUmVjdC50b3AgLSBwRWxSZWN0LnRvcDtcbiAgICAgICAgXG4gICAgICAgIGlmIChib3R0b21PdmVyZmxvd0Rpc3RhbmNlID4gMCkge1xuICAgICAgICAgICAgcEVsLnNjcm9sbFRvcCArPSBib3R0b21PdmVyZmxvd0Rpc3RhbmNlO1xuICAgICAgICB9IGVsc2UgaWYgKHRvcE92ZXJmbG93RGlzdGFuY2UgPCAwKSB7XG4gICAgICAgICAgICBwRWwuc2Nyb2xsVG9wICs9IHRvcE92ZXJmbG93RGlzdGFuY2U7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB1bkZvY3VzKCkge1xuICAgICAgICB0aGlzLnNldCgnX2lzRm9jdXMnLCBmYWxzZSk7XG5cbiAgICAgICAgY29uc3QgZHJvcGRvd24gPSB0aGlzLl9pc1N1Yk1lbnUoKTtcbiAgICAgICAgaWYgKGRyb3Bkb3duKSB7XG4gICAgICAgICAgICBkcm9wZG93bi5oaWRlKG51bGwsIG51bGwsIHRydWUpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc2hvd01lbnVBbmRGb2N1cygpIHtcbiAgICAgICAgY29uc3QgZHJvcGRvd24gPSB0aGlzLl9pc1N1Yk1lbnUoKTtcbiAgICAgICAgaWYgKGRyb3Bkb3duKSB7XG4gICAgICAgICAgICBkcm9wZG93bi5zaG93KG51bGwsIG51bGwsIHRydWUpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgaGlkZU1lbnUoKSB7XG4gICAgICAgIGNvbnN0IGRyb3Bkb3duID0gdGhpcy5faXNTdWJNZW51KCk7XG4gICAgICAgIGlmIChkcm9wZG93bikge1xuICAgICAgICAgICAgZHJvcGRvd24uaGlkZShudWxsLCBudWxsLCB0cnVlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIF9pc1N1Yk1lbnUoKSB7XG4gICAgICAgIGlmICh0aGlzLnBhcmVudFZOb2RlLnRhZyA9PT0gRHJvcGRvd24pIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnBhcmVudFZOb2RlLmNoaWxkcmVuO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgX2ZpbmRBbmNlc3RvckRyb3Bkb3duTWVudShpc0ZpcnN0KSB7XG4gICAgICAgIHJldHVybiBmaW5kUGFyZW50Q29tcG9uZW50KERyb3Bkb3duTWVudSwgdGhpcywgaXNGaXJzdCk7XG4gICAgfVxuXG4gICAgX2Rlc3Ryb3koKSB7XG4gICAgICAgIGNvbnN0IGl0ZW1zID0gdGhpcy5wYXJlbnQuaXRlbXM7XG4gICAgICAgIGl0ZW1zLnNwbGljZShpdGVtcy5pbmRleE9mKHRoaXMpLCAxKTtcbiAgICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL2Ryb3Bkb3duL2l0ZW0uanMiLCJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKG9iaiwgX1ZkdCwgYmxvY2tzLCAkY2FsbGVlKSB7XG5fVmR0IHx8IChfVmR0ID0gVmR0KTtcbm9iaiB8fCAob2JqID0ge30pO1xuYmxvY2tzIHx8IChibG9ja3MgPSB7fSk7XG52YXIgaCA9IF9WZHQubWlzcy5oLCBoYyA9IF9WZHQubWlzcy5oYywgaHUgPSBfVmR0Lm1pc3MuaHUsIHdpZGdldHMgPSB0aGlzICYmIHRoaXMud2lkZ2V0cyB8fCB7fSwgX2Jsb2NrcyA9IHt9LCBfX2Jsb2NrcyA9IHt9LFxuX191ID0gX1ZkdC51dGlscywgZXh0ZW5kID0gX191LmV4dGVuZCwgX2UgPSBfX3UuZXJyb3IsIF9jbGFzc05hbWUgPSBfX3UuY2xhc3NOYW1lLFxuX19vID0gX191Lk9wdGlvbnMsIF9nZXRNb2RlbCA9IF9fby5nZXRNb2RlbCwgX3NldE1vZGVsID0gX19vLnNldE1vZGVsLFxuX3NldENoZWNrYm94TW9kZWwgPSBfX3Uuc2V0Q2hlY2tib3hNb2RlbCwgX2RldGVjdENoZWNrYm94Q2hlY2tlZCA9IF9fdS5kZXRlY3RDaGVja2JveENoZWNrZWQsXG5fc2V0U2VsZWN0TW9kZWwgPSBfX3Uuc2V0U2VsZWN0TW9kZWwsXG5zZWxmID0gdGhpcy5kYXRhLCAkdGhpcyA9IHRoaXMsIHNjb3BlID0gb2JqLCBBbmltYXRlID0gc2VsZiAmJiBzZWxmLkFuaW1hdGUsIHBhcmVudCA9ICgkY2FsbGVlIHx8IHt9KS5fc3VwZXJcbi8qIGltcG9ydCB7cHJveHlFdmVudH0gZnJvbSAnLi4vdXRpbHMnOyAqL1xuXG5jb25zdCB7Y2hpbGRyZW4sIGRpc2FibGVkLCBjbGFzc05hbWUsIF9pc0ZvY3VzfSA9IHNlbGYuZ2V0KCk7XG5cbmNvbnN0IGNsYXNzTmFtZU9iaiA9IHtcbiAgICAnay1pdGVtJzogdHJ1ZSxcbiAgICAnay1kaXNhYmxlZCc6IGRpc2FibGVkLFxuICAgIFtjbGFzc05hbWVdOiBjbGFzc05hbWUsXG4gICAgJ2staG92ZXInOiBfaXNGb2N1cyxcbn1cblxucmV0dXJuIGgoJ2RpdicsIHsnZXYtY2xpY2snOiBmdW5jdGlvbigpIHt0cnkge3JldHVybiBbc2VsZi5fb25DbGljayBdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpLCAnZXYtbW91c2VlbnRlcic6IGZ1bmN0aW9uKCkge3RyeSB7cmV0dXJuIFtzZWxmLl9vbk1vdXNlRW50ZXIgXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKSwgJ2V2LW1vdXNlbGVhdmUnOiBmdW5jdGlvbigpIHt0cnkge3JldHVybiBbc2VsZi5fb25Nb3VzZUxlYXZlIF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcyl9LCBmdW5jdGlvbigpIHt0cnkge3JldHVybiBbY2hpbGRyZW4gXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKSwgX2NsYXNzTmFtZShmdW5jdGlvbigpIHt0cnkge3JldHVybiBbY2xhc3NOYW1lT2JqIF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcykpKVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvZHJvcGRvd24vaXRlbS52ZHQiLCJpbXBvcnQgSW50YWN0IGZyb20gJ2ludGFjdCc7XG5pbXBvcnQgdGVtcGxhdGUgZnJvbSAnLi9tZW51LnZkdCc7XG5pbXBvcnQgcG9zaXRpb24gZnJvbSAnLi4vbW92ZVdyYXBwZXIvcG9zaXRpb24nO1xuaW1wb3J0IHtmaW5kUGFyZW50Q29tcG9uZW50LCBnZXRUcmFuc2l0aW9ufSBmcm9tICcuLi91dGlscyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERyb3Bkb3duTWVudSBleHRlbmRzIEludGFjdCB7XG4gICAgQEludGFjdC50ZW1wbGF0ZSgpXG4gICAgc3RhdGljIHRlbXBsYXRlID0gdGVtcGxhdGU7XG5cbiAgICBkZWZhdWx0cygpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHNob3c6IGZhbHNlLFxuICAgICAgICAgICAgdHJpZ2dlcjogJ2hvdmVyJyxcbiAgICAgICAgICAgIHBvc2l0aW9uOiB7fSxcbiAgICAgICAgICAgIHRyYW5zaXRpb246ICdzbGlkZWRvd24nLFxuICAgICAgICB9O1xuICAgIH1cblxuICAgIF9pbml0KCkge1xuICAgICAgICB0aGlzLnN1YkRyb3Bkb3ducyA9IFtdO1xuICAgICAgICB0aGlzLml0ZW1zID0gW107XG4gICAgICAgIHRoaXMuZm9jdXNJbmRleCA9IC0xO1xuICAgICAgICB0aGlzLmxvY2tlZCA9IGZhbHNlO1xuICAgIH1cblxuICAgIF9tb3VudCgpIHtcbiAgICAgICAgY29uc3QgcGFyZW50ID0gdGhpcy5fZmluZFBhcmVudERyb3Bkb3duTWVudSgpO1xuICAgICAgICBpZiAocGFyZW50KSBwYXJlbnQuc3ViRHJvcGRvd25zLnB1c2godGhpcyk7XG5cbiAgICAgICAgaWYgKHRoaXMuZ2V0KCdzaG93JykpIHtcbiAgICAgICAgICAgIHRoaXMuX2FkZERvY3VtZW50RXZlbnRzKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBfZmluZFBhcmVudERyb3Bkb3duTWVudSgpIHtcbiAgICAgICAgcmV0dXJuIGZpbmRQYXJlbnRDb21wb25lbnQoRHJvcGRvd25NZW51LCB0aGlzLCB0cnVlKTtcbiAgICB9XG5cbiAgICBzaG93KCkge1xuICAgICAgICBjbGVhclRpbWVvdXQodGhpcy50aW1lcik7XG4gICAgICAgIHRoaXMuc2V0KCdzaG93JywgdHJ1ZSk7XG4gICAgICAgIGNvbnN0IHBhcmVudCA9IHRoaXMuX2ZpbmRQYXJlbnREcm9wZG93bk1lbnUoKTtcbiAgICAgICAgaWYgKHBhcmVudCkge1xuICAgICAgICAgICAgcGFyZW50LnNob3coKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGhpZGUoaW1tZWRpYXRlbHkpIHtcbiAgICAgICAgaWYgKCFpbW1lZGlhdGVseSkge1xuICAgICAgICAgICAgdGhpcy50aW1lciA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0KCdzaG93JywgZmFsc2UpO1xuICAgICAgICAgICAgfSwgMjAwKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuc2V0KCdzaG93JywgZmFsc2UpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgdG9nZ2xlKCkge1xuICAgICAgICB0aGlzLnNldCgnc2hvdycsICF0aGlzLmdldCgnc2hvdycpKTtcbiAgICB9XG5cbiAgICBwb3NpdGlvbigpIHtcbiAgICAgICAgcG9zaXRpb24odGhpcy5yZWZzLm1lbnUuZWxlbWVudCwge1xuICAgICAgICAgICAgbXk6ICdjZW50ZXIgdG9wKzUnLCBcbiAgICAgICAgICAgIGF0OiAnY2VudGVyIGJvdHRvbScsIFxuICAgICAgICAgICAgb2Y6IHRoaXMuZHJvcGRvd24uZWxlbWVudCxcbiAgICAgICAgICAgIHVzaW5nOiAoZmVlZGJhY2spID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldCgndHJhbnNpdGlvbicsIGdldFRyYW5zaXRpb24oZmVlZGJhY2spKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAuLi50aGlzLmdldCgncG9zaXRpb24nKVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBfb25TaG93KCkge1xuICAgICAgICB0aGlzLmZvY3VzSW5kZXggPSAtMTtcbiAgICAgICAgdGhpcy5fYWRkRG9jdW1lbnRFdmVudHMoKTtcbiAgICAgICAgdGhpcy5wb3NpdGlvbigpO1xuICAgIH1cblxuICAgIF9hZGREb2N1bWVudEV2ZW50cygpIHtcbiAgICAgICAgY29uc3QgcGFyZW50ID0gdGhpcy5fZmluZFBhcmVudERyb3Bkb3duTWVudSgpO1xuICAgICAgICBpZiAoIXBhcmVudCkge1xuICAgICAgICAgICAgLy8gaWYgKHRoaXMuZ2V0KCd0cmlnZ2VyJykgPT09ICdjbGljaycpIHtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuX29uRG9jdW1lbnRDbGljayk7XG4gICAgICAgICAgICAvLyB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBwYXJlbnQubG9ja2VkID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCB0aGlzLl9vbktleWRvd24pO1xuICAgIH1cblxuICAgIF9yZW1vdmVEb2N1bWVudEV2ZW50cygpIHtcbiAgICAgICAgY29uc3QgcGFyZW50ID0gdGhpcy5fZmluZFBhcmVudERyb3Bkb3duTWVudSgpO1xuICAgICAgICBpZiAoIXBhcmVudCkge1xuICAgICAgICAgICAgLy8gaWYgKHRoaXMuZ2V0KCd0cmlnZ2VyJykgPT09ICdjbGljaycpIHtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuX29uRG9jdW1lbnRDbGljayk7XG4gICAgICAgICAgICAvLyB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBwYXJlbnQubG9ja2VkID0gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXlkb3duJywgdGhpcy5fb25LZXlkb3duKTtcbiAgICB9XG5cbiAgICBfb25Eb2N1bWVudENsaWNrKGUpIHtcbiAgICAgICAgY29uc3QgdGFyZ2V0ID0gZS50YXJnZXQ7XG4gICAgICAgIGNvbnN0IG1lbnUgPSB0aGlzLnJlZnMubWVudS5lbGVtZW50O1xuXG4gICAgICAgIC8vIGlzIGEgZHJvcGRvd24gbWVudVxuICAgICAgICBpZiAobWVudSA9PT0gdGFyZ2V0IHx8IG1lbnUuY29udGFpbnModGFyZ2V0KSkgcmV0dXJuO1xuICAgICAgICAvLyBpcyBjbGljayBvbiBzdWIgbWVudVxuICAgICAgICBpZiAodGhpcy5faXNDbGlja1N1Yk1lbnUodGFyZ2V0LCB0aGlzLnN1YkRyb3Bkb3ducykpIHJldHVybjtcbiAgICAgICAgLy8gY3VzdG9tIGZsYWcgdG8gaW5kaWNhdGUgdGhhdCB0aGUgZXZlbnQgZG9lcyBub3QgbGVhZCB0byBjbG9zZSBtZW51XG4gICAgICAgIGlmIChlLl9kcm9wZG93bikgcmV0dXJuO1xuXG4gICAgICAgIHRoaXMuaGlkZSh0cnVlKTtcbiAgICB9XG5cbiAgICBfb25LZXlkb3duKGUpIHtcbiAgICAgICAgaWYgKHRoaXMubG9ja2VkKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgc3dpdGNoIChlLmtleUNvZGUpIHtcbiAgICAgICAgICAgIC8vIGRvd25cbiAgICAgICAgICAgIGNhc2UgNDA6XG4gICAgICAgICAgICAgICAgdGhpcy5fZm9jdXNOZXh0SXRlbShlKTsgXG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAvLyB1cFxuICAgICAgICAgICAgY2FzZSAzODpcbiAgICAgICAgICAgICAgICB0aGlzLl9mb2N1c1ByZXZJdGVtKGUpOyBcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIC8vIHJpZ2h0XG4gICAgICAgICAgICBjYXNlIDM5OlxuICAgICAgICAgICAgICAgIHRoaXMuX3Nob3dTdWJNZW51KGUpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgLy8gbGVmdFxuICAgICAgICAgICAgY2FzZSAzNzpcbiAgICAgICAgICAgICAgICB0aGlzLl9oaWRlU3ViTWVudShlKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIC8vIGVudGVyXG4gICAgICAgICAgICBjYXNlIDEzOlxuICAgICAgICAgICAgICAgIHRoaXMuX3NlbGVjdEl0ZW0oZSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBfZm9jdXNOZXh0SXRlbShlKSB7XG4gICAgICAgIGNvbnN0IHBhcmVudCA9IHRoaXMuX2ZpbmRQYXJlbnREcm9wZG93bk1lbnUoKTtcbiAgICAgICAgaWYgKHBhcmVudCAmJiB0aGlzLmZvY3VzSW5kZXggPCAwKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB0aGlzLmZvY3VzSXRlbUJ5SW5kZXgodGhpcy5mb2N1c0luZGV4ICsgMSwgJ2Rvd24nKTtcbiAgICB9XG5cbiAgICBfZm9jdXNQcmV2SXRlbShlKSB7XG4gICAgICAgIGNvbnN0IHBhcmVudCA9IHRoaXMuX2ZpbmRQYXJlbnREcm9wZG93bk1lbnUoKTtcbiAgICAgICAgaWYgKHBhcmVudCAmJiB0aGlzLmZvY3VzSW5kZXggPCAwKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB0aGlzLmZvY3VzSXRlbUJ5SW5kZXgodGhpcy5mb2N1c0luZGV4IC0gMSwgJ3VwJyk7XG4gICAgfVxuXG4gICAgZm9jdXNJdGVtQnlJbmRleChpbmRleCwgZGlyZWN0aW9uID0gJ2Rvd24nKSB7XG4gICAgICAgIGNvbnN0IGl0ZW1zID0gdGhpcy5pdGVtcztcbiAgICAgICAgY29uc3QgbWF4ID0gaXRlbXMubGVuZ3RoIC0gMTtcbiAgICAgICAgY29uc3Qgb2xkSW5kZXggPSB0aGlzLmZvY3VzSW5kZXg7XG5cbiAgICAgICAgZnVuY3Rpb24gZml4SW5kZXgoaW5kZXgpIHtcbiAgICAgICAgICAgIGlmIChpbmRleCA+IG1heCkge1xuICAgICAgICAgICAgICAgIGluZGV4ID0gMDtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoaW5kZXggPCAwKSB7XG4gICAgICAgICAgICAgICAgaW5kZXggPSBtYXg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gaW5kZXg7XG4gICAgICAgIH1cblxuICAgICAgICBpbmRleCA9IGZpeEluZGV4KGluZGV4KTtcblxuICAgICAgICBsZXQgaSA9IDA7XG4gICAgICAgIHdoaWxlIChpIDw9IG1heCAmJiBpdGVtc1tpbmRleF0gJiYgaXRlbXNbaW5kZXhdLmdldCgnZGlzYWJsZWQnKSkge1xuICAgICAgICAgICAgaW5kZXggPSBmaXhJbmRleChkaXJlY3Rpb24gPT09ICdkb3duJyA/IGluZGV4ICsgMSA6IGluZGV4IC0gMSk7XG4gICAgICAgICAgICBpKys7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBhbGwgaXRlbXMgYXJlIGRpc2FibGVkXG4gICAgICAgIGlmIChpID4gbWF4KSByZXR1cm47XG5cbiAgICAgICAgdGhpcy5mb2N1c0luZGV4ID0gaW5kZXg7XG5cbiAgICAgICAgaWYgKG9sZEluZGV4ID4gLTEgJiYgaXRlbXNbb2xkSW5kZXhdKSB7XG4gICAgICAgICAgICBpdGVtc1tvbGRJbmRleF0udW5Gb2N1cygpO1xuICAgICAgICB9XG5cbiAgICAgICAgaXRlbXNbaW5kZXhdLmZvY3VzKCk7XG4gICAgfVxuXG4gICAgX3NlbGVjdEl0ZW0oZSkge1xuICAgICAgICB0aGlzLl9zaG93U3ViTWVudShlKTtcbiAgICAgICAgaWYgKHRoaXMuZm9jdXNJbmRleCA+IC0xKSB7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICB0aGlzLml0ZW1zW3RoaXMuZm9jdXNJbmRleF0uc2VsZWN0KCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBfc2hvd1N1Yk1lbnUoZSkge1xuICAgICAgICBjb25zdCBwYXJlbnQgPSB0aGlzLl9maW5kUGFyZW50RHJvcGRvd25NZW51KCk7XG4gICAgICAgIGlmICghcGFyZW50ICYmIHRoaXMuZm9jdXNJbmRleCA8IDApIHJldHVybjtcblxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGlmIChwYXJlbnQgJiYgdGhpcy5mb2N1c0luZGV4IDwgMCkge1xuICAgICAgICAgICAgdGhpcy5mb2N1c0l0ZW1CeUluZGV4KDApO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuZm9jdXNJbmRleCA+IC0xKSB7XG4gICAgICAgICAgICB0aGlzLml0ZW1zW3RoaXMuZm9jdXNJbmRleF0uc2hvd01lbnVBbmRGb2N1cygpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgX2hpZGVTdWJNZW51KGUpIHtcbiAgICAgICAgaWYgKHRoaXMuZm9jdXNJbmRleCA+IC0xKSB7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICB0aGlzLml0ZW1zW3RoaXMuZm9jdXNJbmRleF0uaGlkZU1lbnUoKTtcblxuICAgICAgICAgICAgY29uc3QgcGFyZW50ID0gZmluZFBhcmVudENvbXBvbmVudChEcm9wZG93bk1lbnUsIHRoaXMsIHRydWUpO1xuICAgICAgICAgICAgaWYgKHBhcmVudCkge1xuICAgICAgICAgICAgICAgIHRoaXMuZHJvcGRvd24uaGlkZShudWxsLCBudWxsLCB0cnVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZvY3VzSXRlbShpdGVtKSB7XG4gICAgICAgIGNvbnN0IGluZGV4ID0gdGhpcy5pdGVtcy5pbmRleE9mKGl0ZW0pO1xuICAgICAgICB0aGlzLmZvY3VzSXRlbUJ5SW5kZXgoaW5kZXgpO1xuICAgIH1cblxuICAgIF9pc0NsaWNrU3ViTWVudSh0YXJnZXQsIHN1Yk1lbnVzKSB7XG4gICAgICAgIGxldCByZXQgPSBmYWxzZTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzdWJNZW51cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgY29uc3Qgc3ViTWVudSA9IHN1Yk1lbnVzW2ldLnJlZnMubWVudTtcbiAgICAgICAgICAgIGlmIChzdWJNZW51KSB7XG4gICAgICAgICAgICAgICAgaWYgKHRhcmdldCA9PT0gc3ViTWVudS5lbGVtZW50IHx8IHN1Yk1lbnUuZWxlbWVudC5jb250YWlucyh0YXJnZXQpKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJldCA9IHRoaXMuX2lzQ2xpY2tTdWJNZW51KHRhcmdldCwgc3ViTWVudXNbaV0uc3ViRHJvcGRvd25zKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJldCkgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXQ7XG4gICAgfVxuXG4gICAgX2Rlc3Ryb3koKSB7XG4gICAgICAgIGNvbnN0IHBhcmVudCA9IHRoaXMuX2ZpbmRQYXJlbnREcm9wZG93bk1lbnUoKTtcbiAgICAgICAgaWYgKHBhcmVudCkge1xuICAgICAgICAgICAgY29uc3Qgc3ViRHJvcGRvd25zID0gcGFyZW50LnN1YkRyb3Bkb3ducztcbiAgICAgICAgICAgIHN1YkRyb3Bkb3ducy5zcGxpY2Uoc3ViRHJvcGRvd25zLmluZGV4T2YodGhpcyksIDEpO1xuICAgICAgICB9IFxuICAgICAgICBjbGVhclRpbWVvdXQodGhpcy50aW1lcik7XG4gICAgICAgIHRoaXMuX3JlbW92ZURvY3VtZW50RXZlbnRzKCk7XG4gICAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9kcm9wZG93bi9tZW51LmpzIiwiaW1wb3J0IE1vdmVXcmFwcGVyIGZyb20gJy4uL21vdmVXcmFwcGVyJztcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKG9iaiwgX1ZkdCwgYmxvY2tzLCAkY2FsbGVlKSB7XG5fVmR0IHx8IChfVmR0ID0gVmR0KTtcbm9iaiB8fCAob2JqID0ge30pO1xuYmxvY2tzIHx8IChibG9ja3MgPSB7fSk7XG52YXIgaCA9IF9WZHQubWlzcy5oLCBoYyA9IF9WZHQubWlzcy5oYywgaHUgPSBfVmR0Lm1pc3MuaHUsIHdpZGdldHMgPSB0aGlzICYmIHRoaXMud2lkZ2V0cyB8fCB7fSwgX2Jsb2NrcyA9IHt9LCBfX2Jsb2NrcyA9IHt9LFxuX191ID0gX1ZkdC51dGlscywgZXh0ZW5kID0gX191LmV4dGVuZCwgX2UgPSBfX3UuZXJyb3IsIF9jbGFzc05hbWUgPSBfX3UuY2xhc3NOYW1lLFxuX19vID0gX191Lk9wdGlvbnMsIF9nZXRNb2RlbCA9IF9fby5nZXRNb2RlbCwgX3NldE1vZGVsID0gX19vLnNldE1vZGVsLFxuX3NldENoZWNrYm94TW9kZWwgPSBfX3Uuc2V0Q2hlY2tib3hNb2RlbCwgX2RldGVjdENoZWNrYm94Q2hlY2tlZCA9IF9fdS5kZXRlY3RDaGVja2JveENoZWNrZWQsXG5fc2V0U2VsZWN0TW9kZWwgPSBfX3Uuc2V0U2VsZWN0TW9kZWwsXG5zZWxmID0gdGhpcy5kYXRhLCAkdGhpcyA9IHRoaXMsIHNjb3BlID0gb2JqLCBBbmltYXRlID0gc2VsZiAmJiBzZWxmLkFuaW1hdGUsIHBhcmVudCA9ICgkY2FsbGVlIHx8IHt9KS5fc3VwZXJcblxuXG5jb25zdCB7Y2hpbGRyZW4sIHNob3csIHRyaWdnZXIsIGNsYXNzTmFtZSwgdHJhbnNpdGlvbn0gPSBzZWxmLmdldCgpO1xuXG5jb25zdCBldmVudHMgPSB7fTtcbi8vIG5vIG1hdHRlciB3aGF0IHRoZSB0cmlnZ2VyIGlzLCB3ZSBzaG91bGQgc2hvdyBtZW51IHdoZW4gZW50ZXIgaXQuXG4vLyBmb3IgdGhpcyBjYXNlOiBob3ZlciB0cmlnZ2VyIG5lc3RzIGNsaWNrIHRyaWdnZXJcbmV2ZW50c1snZXYtbW91c2VlbnRlciddID0gc2VsZi5zaG93O1xuaWYgKHRyaWdnZXIgPT09ICdob3ZlcicpIHtcbiAgICBldmVudHNbJ2V2LW1vdXNlbGVhdmUnXSA9IHNlbGYuaGlkZS5iaW5kKHNlbGYsIGZhbHNlKTtcbn1cblxucmV0dXJuIGgoTW92ZVdyYXBwZXIsIHsnX3BhcmVudCc6IGZ1bmN0aW9uKCkge3RyeSB7cmV0dXJuIFtzZWxmIF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcyksICdjaGlsZHJlbic6IGZ1bmN0aW9uKCkge3RyeSB7cmV0dXJuIFtzaG93IF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcykgPyBoKEFuaW1hdGUsIHsnY2xhc3NOYW1lJzogX2NsYXNzTmFtZShmdW5jdGlvbigpIHt0cnkge3JldHVybiBbe1wiay1kcm9wZG93bi1tZW51XCI6IHRydWUsIFtjbGFzc05hbWVdOiBjbGFzc05hbWV9IF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcykpLCAnYTp0cmFuc2l0aW9uJzogZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW3RyYW5zaXRpb24gXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKSwgLi4uZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW2V2ZW50cyBdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpLCAnYTpkZWxheURlc3Ryb3knOiBmdW5jdGlvbigpIHt0cnkge3JldHVybiBbZmFsc2UgXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKSwgJ2V2LSRkZXN0cm95ZWQnOiBmdW5jdGlvbigpIHt0cnkge3JldHVybiBbc2VsZi5fcmVtb3ZlRG9jdW1lbnRFdmVudHMgXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKSwgJ2V2LSRtb3VudGVkJzogZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW3NlbGYuX29uU2hvdyBdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpLCAnY2hpbGRyZW4nOiBmdW5jdGlvbigpIHt0cnkge3JldHVybiBbY2hpbGRyZW4gXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKSwgJ19jb250ZXh0JzogJHRoaXN9LCBudWxsLCBudWxsLCBudWxsLCBmdW5jdGlvbihpKSB7d2lkZ2V0c1snbWVudSddID0gaX0pIDogdW5kZWZpbmVkLCAnX2NvbnRleHQnOiAkdGhpc30sIG51bGwsIG51bGwsIG51bGwsIGZ1bmN0aW9uKGkpIHt3aWRnZXRzWyd3cmFwcGVyJ10gPSBpfSlcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL2Ryb3Bkb3duL21lbnUudmR0IiwiaW1wb3J0IEludGFjdCBmcm9tICdpbnRhY3QnO1xuaW1wb3J0IHRlbXBsYXRlIGZyb20gJy4vaW5kZXgudmR0JztcbmltcG9ydCAnLi4vLi4vc3R5bGVzL2twYy5zdHlsJztcbmltcG9ydCAnLi9pbmRleC5zdHlsJztcbmltcG9ydCB7c2VsZWN0SW5wdXR9IGZyb20gJy4uL3V0aWxzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5wdXQgZXh0ZW5kcyBJbnRhY3Qge1xuICAgIEBJbnRhY3QudGVtcGxhdGVcbiAgICBzdGF0aWMgdGVtcGxhdGUgPSB0ZW1wbGF0ZTtcblxuICAgIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgcmVhZG9ubHk6IEJvb2xlYW4sXG4gICAgICAgIGNsZWFyYWJsZTogQm9vbGVhbixcbiAgICAgICAgZGlzYWJsZWQ6IEJvb2xlYW4sXG4gICAgICAgIGZsdWlkOiBCb29sZWFuLFxuICAgIH07XG5cbiAgICBkZWZhdWx0cygpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHR5cGU6ICd0ZXh0JywgLy8gdGV4dCB8IHRleHRhcmVhXG4gICAgICAgICAgICBuYW1lOiB1bmRlZmluZWQsXG4gICAgICAgICAgICB2YWx1ZTogdW5kZWZpbmVkLFxuICAgICAgICAgICAgZGVmYXVsdFZhbHVlOiB1bmRlZmluZWQsXG4gICAgICAgICAgICBwbGFjZWhvbGRlcjogdW5kZWZpbmVkLFxuICAgICAgICAgICAgcmVhZG9ubHk6IGZhbHNlLFxuICAgICAgICAgICAgY2xlYXJhYmxlOiBmYWxzZSxcbiAgICAgICAgICAgIGRpc2FibGVkOiBmYWxzZSxcbiAgICAgICAgICAgIHNpemU6ICdkZWZhdWx0JyxcbiAgICAgICAgICAgIHJvd3M6IDIsXG4gICAgICAgICAgICBzcGVsbGNoZWNrOiBmYWxzZSxcbiAgICAgICAgICAgIGF1dG9XaWR0aDogZmFsc2UsXG4gICAgICAgICAgICBmbHVpZDogZmFsc2UsXG4gICAgICAgICAgICB3aWR0aDogdW5kZWZpbmVkLFxuICAgICAgICAgICAgdGFiaW5kZXg6IHVuZGVmaW5lZCxcbiAgICAgICAgfVxuICAgIH1cblxuICAgIF9pbml0KCkge1xuICAgICAgICB0aGlzLm9uKCckY2hhbmdlZDp2YWx1ZScsIHRoaXMuX2FkanVzdFdpZHRoKTtcbiAgICAgICAgdGhpcy5vbignJGNoYW5nZWQ6cGxhY2Vob2xkZXInLCB0aGlzLl9hZGp1c3RXaWR0aCk7XG4gICAgfVxuXG4gICAgX21vdW50KCkge1xuICAgICAgICB0aGlzLl9hZGp1c3RXaWR0aCgpO1xuICAgIH1cblxuICAgIF9hZGp1c3RXaWR0aCgpIHtcbiAgICAgICAgaWYgKHRoaXMuZ2V0KCdhdXRvV2lkdGgnKSkge1xuICAgICAgICAgICAgY29uc3Qgd2lkdGggPSB0aGlzLnJlZnMuZmFrZS5vZmZzZXRXaWR0aCB8fCAxO1xuICAgICAgICAgICAgdGhpcy5yZWZzLmlucHV0LnN0eWxlLndpZHRoID0gYCR7d2lkdGggKyAxfXB4YDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNsZWFyKGUpIHtcbiAgICAgICAgdGhpcy5zZXQoJ3ZhbHVlJywgJycpO1xuICAgICAgICB0aGlzLmZvY3VzKCk7XG4gICAgICAgIHRoaXMudHJpZ2dlcignY2xlYXInLCBlKTtcbiAgICB9XG5cbiAgICBzZWxlY3QoKSB7XG4gICAgICAgIHNlbGVjdElucHV0KHRoaXMucmVmcy5pbnB1dCk7XG4gICAgfVxuXG4gICAgZm9jdXMoKSB7XG4gICAgICAgIHRoaXMucmVmcy5pbnB1dC5mb2N1cygpO1xuICAgIH1cblxuICAgIF9vbklucHV0KGUpIHtcbiAgICAgICAgdGhpcy5zZXQoJ3ZhbHVlJywgZS50YXJnZXQudmFsdWUpO1xuICAgICAgICB0aGlzLnRyaWdnZXIoJ2lucHV0JywgZSk7XG4gICAgfVxuXG4gICAgX3Byb3h5RXZlbnQobmFtZSwgZSkge1xuICAgICAgICB0aGlzLnRyaWdnZXIobmFtZSwgZSk7XG4gICAgfVxufVxuXG5leHBvcnQge0lucHV0fTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvaW5wdXQvaW5kZXguanMiLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuICAgIGlmKG1vZHVsZS5ob3QpIHtcbiAgICAgIC8vIDE1Mjc1NzY2Nzk0MDBcbiAgICAgIHZhciBjc3NSZWxvYWQgPSByZXF1aXJlKFwiIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtaG90LWxvYWRlci9ob3RNb2R1bGVSZXBsYWNlbWVudC5qc1wiKShtb2R1bGUuaWQsIHtcImZpbGVNYXBcIjpcIntmaWxlTmFtZX1cIn0pO1xuICAgICAgbW9kdWxlLmhvdC5kaXNwb3NlKGNzc1JlbG9hZCk7XG4gICAgICBtb2R1bGUuaG90LmFjY2VwdCh1bmRlZmluZWQsIGNzc1JlbG9hZCk7XG4gICAgfVxuICBcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2NvbXBvbmVudHMvaW5wdXQvaW5kZXguc3R5bFxuLy8gbW9kdWxlIGlkID0gLi9jb21wb25lbnRzL2lucHV0L2luZGV4LnN0eWxcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiIsImltcG9ydCB7YWRkU3R5bGV9IGZyb20gJy4uL3V0aWxzJztcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKG9iaiwgX1ZkdCwgYmxvY2tzLCAkY2FsbGVlKSB7XG5fVmR0IHx8IChfVmR0ID0gVmR0KTtcbm9iaiB8fCAob2JqID0ge30pO1xuYmxvY2tzIHx8IChibG9ja3MgPSB7fSk7XG52YXIgaCA9IF9WZHQubWlzcy5oLCBoYyA9IF9WZHQubWlzcy5oYywgaHUgPSBfVmR0Lm1pc3MuaHUsIHdpZGdldHMgPSB0aGlzICYmIHRoaXMud2lkZ2V0cyB8fCB7fSwgX2Jsb2NrcyA9IHt9LCBfX2Jsb2NrcyA9IHt9LFxuX191ID0gX1ZkdC51dGlscywgZXh0ZW5kID0gX191LmV4dGVuZCwgX2UgPSBfX3UuZXJyb3IsIF9jbGFzc05hbWUgPSBfX3UuY2xhc3NOYW1lLFxuX19vID0gX191Lk9wdGlvbnMsIF9nZXRNb2RlbCA9IF9fby5nZXRNb2RlbCwgX3NldE1vZGVsID0gX19vLnNldE1vZGVsLFxuX3NldENoZWNrYm94TW9kZWwgPSBfX3Uuc2V0Q2hlY2tib3hNb2RlbCwgX2RldGVjdENoZWNrYm94Q2hlY2tlZCA9IF9fdS5kZXRlY3RDaGVja2JveENoZWNrZWQsXG5fc2V0U2VsZWN0TW9kZWwgPSBfX3Uuc2V0U2VsZWN0TW9kZWwsXG5zZWxmID0gdGhpcy5kYXRhLCAkdGhpcyA9IHRoaXMsIHNjb3BlID0gb2JqLCBBbmltYXRlID0gc2VsZiAmJiBzZWxmLkFuaW1hdGUsIHBhcmVudCA9ICgkY2FsbGVlIHx8IHt9KS5fc3VwZXJcblxuXG5jb25zdCB7XG4gICAgdHlwZSwgbmFtZSwgdmFsdWUsIHBsYWNlaG9sZGVyLCB0YWJpbmRleCxcbiAgICByZWFkb25seSwgY2xlYXJhYmxlLCBkaXNhYmxlZCwgc2l6ZSwgXG4gICAgcm93cywgc3BlbGxjaGVjaywgZGVmYXVsdFZhbHVlLCBzdHlsZSxcbiAgICBjbGFzc05hbWUsIGF1dG9XaWR0aCwgZmx1aWQsIHdpZHRoLFxufSA9IHNlbGYuZ2V0KCk7XG5cbmNvbnN0IGNsYXNzTmFtZU9iaiA9IHtcbiAgICAnay1pbnB1dCc6IHRydWUsXG4gICAgW2BrLSR7c2l6ZX1gXTogc2l6ZSAhPT0gJ2RlZmF1bHQnLFxuICAgICdrLWdyb3VwJzogYmxvY2tzLnByZXBlbmQgfHwgYmxvY2tzLmFwcGVuZCxcbiAgICAnay1kaXNhYmxlZCc6IGRpc2FibGVkLFxuICAgICdrLXdpdGgtcHJlZml4JzogYmxvY2tzLnByZWZpeCxcbiAgICAnay13aXRoLXN1ZmZpeCc6IGJsb2Nrcy5zdWZmaXgsXG4gICAgJ2stY2xlYXJhYmxlJzogY2xlYXJhYmxlLFxuICAgICdrLWF1dG8td2lkdGgnOiBhdXRvV2lkdGgsXG4gICAgJ2stZmx1aWQnOiBmbHVpZCxcbiAgICBbY2xhc3NOYW1lXTogY2xhc3NOYW1lLFxufVxuXG5jb25zdCBldmVudHMgPSBbXG4gICAgJ2tleWRvd24nLCAna2V5dXAnLCAnY2hhbmdlJyxcbiAgICAna2V5cHJlc3MnLCAnZm9jdXMnLCAnYmx1cicsIC8qICdpbnB1dCcgKi9cbl0ucmVkdWNlKChtZW1vLCBuYW1lKSA9PiB7XG4gICAgbWVtb1tgZXYtJHtuYW1lfWBdID0gc2VsZi5fcHJveHlFdmVudC5iaW5kKHNlbGYsIG5hbWUpO1xuICAgIHJldHVybiBtZW1vO1xufSwge30pO1xuXG5jb25zdCB3cmFwcGVyRXZlbnRzID0gW1xuICAgICdjbGljaycsICdtb3VzZWVudGVyJywgJ21vdXNlbGVhdmUnXG5dLnJlZHVjZSgobWVtbywgbmFtZSkgPT4ge1xuICAgIG1lbW9bYGV2LSR7bmFtZX1gXSA9IHNlbGYuX3Byb3h5RXZlbnQuYmluZChzZWxmLCBuYW1lKTtcbiAgICByZXR1cm4gbWVtbztcbn0sIHt9KTtcblxucmV0dXJuIGgoJ2RpdicsIHsnc3R5bGUnOiBmdW5jdGlvbigpIHt0cnkge3JldHVybiBbd2lkdGggIT0gbnVsbCA/IGFkZFN0eWxlKHN0eWxlLCB7d2lkdGg6IGAke3dpZHRofXB4YH0pIDogc3R5bGUgXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKSwgLi4uZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW3dyYXBwZXJFdmVudHMgXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKX0sIFtmdW5jdGlvbigpIHt0cnkge3JldHVybiBbYmxvY2tzLnByZXBlbmQgXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKSA/IGgoJ2RpdicsIG51bGwsIChfYmxvY2tzW1wicHJlcGVuZFwiXSA9IGZ1bmN0aW9uKHBhcmVudCkge3JldHVybiBudWxsO30pICYmIChfX2Jsb2Nrc1tcInByZXBlbmRcIl0gPSBmdW5jdGlvbihwYXJlbnQpIHtcbnZhciBzZWxmID0gdGhpcztcbnJldHVybiBibG9ja3NbXCJwcmVwZW5kXCJdID8gYmxvY2tzW1wicHJlcGVuZFwiXS5jYWxsKHRoaXMsIGZ1bmN0aW9uKCkge1xucmV0dXJuIF9ibG9ja3NbXCJwcmVwZW5kXCJdLmNhbGwoc2VsZiwgcGFyZW50KTtcbn0pIDogX2Jsb2Nrc1tcInByZXBlbmRcIl0uY2FsbCh0aGlzLCBwYXJlbnQpO1xufSkgJiYgX19ibG9ja3NbXCJwcmVwZW5kXCJdLmNhbGwodGhpcyksICdrLXByZXBlbmQnKSA6IHVuZGVmaW5lZCwgaCgnZGl2JywgbnVsbCwgW2Z1bmN0aW9uKCkge3RyeSB7cmV0dXJuIFtibG9ja3MucHJlZml4IF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcykgPyBoKCdkaXYnLCBudWxsLCAoX2Jsb2Nrc1tcInByZWZpeFwiXSA9IGZ1bmN0aW9uKHBhcmVudCkge3JldHVybiBudWxsO30pICYmIChfX2Jsb2Nrc1tcInByZWZpeFwiXSA9IGZ1bmN0aW9uKHBhcmVudCkge1xudmFyIHNlbGYgPSB0aGlzO1xucmV0dXJuIGJsb2Nrc1tcInByZWZpeFwiXSA/IGJsb2Nrc1tcInByZWZpeFwiXS5jYWxsKHRoaXMsIGZ1bmN0aW9uKCkge1xucmV0dXJuIF9ibG9ja3NbXCJwcmVmaXhcIl0uY2FsbChzZWxmLCBwYXJlbnQpO1xufSkgOiBfYmxvY2tzW1wicHJlZml4XCJdLmNhbGwodGhpcywgcGFyZW50KTtcbn0pICYmIF9fYmxvY2tzW1wicHJlZml4XCJdLmNhbGwodGhpcyksICdrLXByZWZpeCcpIDogdW5kZWZpbmVkLCBmdW5jdGlvbigpIHt0cnkge3JldHVybiBbdHlwZSAhPT0gJ3RleHRhcmVhJyBdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpID8gaCgnaW5wdXQnLCB7J3R5cGUnOiBmdW5jdGlvbigpIHt0cnkge3JldHVybiBbdHlwZSBdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpLCAnbmFtZSc6IGZ1bmN0aW9uKCkge3RyeSB7cmV0dXJuIFtuYW1lIF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcyksICd2YWx1ZSc6IGZ1bmN0aW9uKCkge3RyeSB7cmV0dXJuIFt2YWx1ZSBdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpLCAnZXYtaW5wdXQnOiBmdW5jdGlvbigpIHt0cnkge3JldHVybiBbc2VsZi5fb25JbnB1dCBdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpLCAnZGVmYXVsdFZhbHVlJzogZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW2RlZmF1bHRWYWx1ZSBdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpLCAncmVhZE9ubHknOiBmdW5jdGlvbigpIHt0cnkge3JldHVybiBbcmVhZG9ubHkgXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKSwgJ3BsYWNlaG9sZGVyJzogZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW3BsYWNlaG9sZGVyIF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcyksICdkaXNhYmxlZCc6IGZ1bmN0aW9uKCkge3RyeSB7cmV0dXJuIFtkaXNhYmxlZCBdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpLCAndGFiaW5kZXgnOiBmdW5jdGlvbigpIHt0cnkge3JldHVybiBbdGFiaW5kZXggXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKSwgLi4uZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW2V2ZW50cyBdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpfSwgbnVsbCwgJ2staW5uZXInLCBudWxsLCBmdW5jdGlvbihpKSB7d2lkZ2V0c1snaW5wdXQnXSA9IGl9KSA6IGgoJ3RleHRhcmVhJywgeyd2YWx1ZSc6IGZ1bmN0aW9uKCkge3RyeSB7cmV0dXJuIFt2YWx1ZSBdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpLCAnZXYtaW5wdXQnOiBmdW5jdGlvbigpIHt0cnkge3JldHVybiBbc2VsZi5fb25JbnB1dCBdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpLCAnZGVmYXVsdFZhbHVlJzogZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW2RlZmF1bHRWYWx1ZSBdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpLCAnbmFtZSc6IGZ1bmN0aW9uKCkge3RyeSB7cmV0dXJuIFtuYW1lIF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcyksICdyZWFkT25seSc6IGZ1bmN0aW9uKCkge3RyeSB7cmV0dXJuIFtyZWFkb25seSBdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpLCAncGxhY2Vob2xkZXInOiBmdW5jdGlvbigpIHt0cnkge3JldHVybiBbcGxhY2Vob2xkZXIgXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKSwgJ2Rpc2FibGVkJzogZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW2Rpc2FibGVkIF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcyksICdyb3dzJzogZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW3Jvd3MgXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKSwgJ3NwZWxsY2hlY2snOiBmdW5jdGlvbigpIHt0cnkge3JldHVybiBbc3BlbGxjaGVjayBdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpLCAndGFiaW5kZXgnOiBmdW5jdGlvbigpIHt0cnkge3JldHVybiBbdGFiaW5kZXggXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKSwgLi4uZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW2V2ZW50cyBdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpfSwgbnVsbCwgJ2staW5uZXIgay10ZXh0YXJlYScsIG51bGwsIGZ1bmN0aW9uKGkpIHt3aWRnZXRzWydpbnB1dCddID0gaX0pLCBmdW5jdGlvbigpIHt0cnkge3JldHVybiBbYmxvY2tzLnN1ZmZpeCB8fCBjbGVhcmFibGUgXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKSA/IGgoJ2RpdicsIG51bGwsIFtmdW5jdGlvbigpIHt0cnkge3JldHVybiBbY2xlYXJhYmxlIF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcykgPyBoKCdpJywgeydldi1jbGljayc6IGZ1bmN0aW9uKCkge3RyeSB7cmV0dXJuIFtzZWxmLmNsZWFyIF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcyl9LCBudWxsLCBfY2xhc3NOYW1lKGZ1bmN0aW9uKCkge3RyeSB7cmV0dXJuIFt7XG4gICAgICAgICAgICAgICAgICAgIFwiay1jbGVhciBrLWljb24gaW9uLWlvcy1jbG9zZVwiOiB0cnVlLCBcbiAgICAgICAgICAgICAgICAgICAgXCJrLXNob3dcIjogdmFsdWUsXG4gICAgICAgICAgICAgICAgfSBdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpKSkgOiB1bmRlZmluZWQsIChfYmxvY2tzW1wic3VmZml4XCJdID0gZnVuY3Rpb24ocGFyZW50KSB7cmV0dXJuIG51bGw7fSkgJiYgKF9fYmxvY2tzW1wic3VmZml4XCJdID0gZnVuY3Rpb24ocGFyZW50KSB7XG52YXIgc2VsZiA9IHRoaXM7XG5yZXR1cm4gYmxvY2tzW1wic3VmZml4XCJdID8gYmxvY2tzW1wic3VmZml4XCJdLmNhbGwodGhpcywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gX2Jsb2Nrc1tcInN1ZmZpeFwiXS5jYWxsKHNlbGYsIHBhcmVudCk7XG59KSA6IF9ibG9ja3NbXCJzdWZmaXhcIl0uY2FsbCh0aGlzLCBwYXJlbnQpO1xufSkgJiYgX19ibG9ja3NbXCJzdWZmaXhcIl0uY2FsbCh0aGlzKV0sICdrLXN1ZmZpeCcpIDogdW5kZWZpbmVkLCBmdW5jdGlvbigpIHt0cnkge3JldHVybiBbYXV0b1dpZHRoIF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcykgPyBoKCdkaXYnLCBudWxsLCBmdW5jdGlvbigpIHt0cnkge3JldHVybiBbdmFsdWUgPT0gbnVsbCB8fCB2YWx1ZSA9PT0gJycgPyBwbGFjZWhvbGRlciA6IHZhbHVlIF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcyksICdrLWZha2UnLCBudWxsLCBmdW5jdGlvbihpKSB7d2lkZ2V0c1snZmFrZSddID0gaX0pIDogdW5kZWZpbmVkXSwgJ2std3JhcHBlcicpLCBmdW5jdGlvbigpIHt0cnkge3JldHVybiBbYmxvY2tzLmFwcGVuZCBdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpID8gaCgnZGl2JywgbnVsbCwgKF9ibG9ja3NbXCJhcHBlbmRcIl0gPSBmdW5jdGlvbihwYXJlbnQpIHtyZXR1cm4gbnVsbDt9KSAmJiAoX19ibG9ja3NbXCJhcHBlbmRcIl0gPSBmdW5jdGlvbihwYXJlbnQpIHtcbnZhciBzZWxmID0gdGhpcztcbnJldHVybiBibG9ja3NbXCJhcHBlbmRcIl0gPyBibG9ja3NbXCJhcHBlbmRcIl0uY2FsbCh0aGlzLCBmdW5jdGlvbigpIHtcbnJldHVybiBfYmxvY2tzW1wiYXBwZW5kXCJdLmNhbGwoc2VsZiwgcGFyZW50KTtcbn0pIDogX2Jsb2Nrc1tcImFwcGVuZFwiXS5jYWxsKHRoaXMsIHBhcmVudCk7XG59KSAmJiBfX2Jsb2Nrc1tcImFwcGVuZFwiXS5jYWxsKHRoaXMpLCAnay1hcHBlbmQnKSA6IHVuZGVmaW5lZF0sIF9jbGFzc05hbWUoZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW2NsYXNzTmFtZU9iaiBdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpKSlcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL2lucHV0L2luZGV4LnZkdCIsImltcG9ydCBJbnRhY3QgZnJvbSAnaW50YWN0JztcbmltcG9ydCB0ZW1wbGF0ZSBmcm9tICcuL2luZGV4LnZkdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExpbmsgZXh0ZW5kcyBJbnRhY3Qge1xuICAgIHN0YXRpYyBoaXN0b3J5ID0gdW5kZWZpbmVkO1xuXG4gICAgQEludGFjdC50ZW1wbGF0ZSgpXG4gICAgZ2V0IHRlbXBsYXRlKCkgeyByZXR1cm4gdGVtcGxhdGU7IH1cblxuICAgIGRlZmF1bHRzKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgaHJlZjogdW5kZWZpbmVkLFxuICAgICAgICAgICAgbmFtZTogdW5kZWZpbmVkLFxuICAgICAgICAgICAgaXNSZXBsYWNlOiBmYWxzZSxcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHRvKGUpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB0aGlzLnRyaWdnZXIoJ2NsaWNrJywgZSk7XG4gICAgICAgIGNvbnN0IGhyZWYgPSB0aGlzLmdldCgnaHJlZicpO1xuICAgICAgICBjb25zdCBuYW1lID0gdGhpcy5nZXQoJ25hbWUnKTtcbiAgICAgICAgY29uc3QgaGlzdG9yeSA9IExpbmsuaGlzdG9yeTtcbiAgICAgICAgbGV0IHVybDtcbiAgICAgICAgaWYgKGhyZWYgIT0gbnVsbCkge1xuICAgICAgICAgICAgdXJsID0gaHJlZjtcbiAgICAgICAgfSBlbHNlIGlmIChuYW1lICE9IG51bGwpIHtcbiAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KG5hbWUpKSB7XG4gICAgICAgICAgICAgICAgdXJsID0gTGluay51cmwuYXBwbHkoTGluay51cmwsIG5hbWUpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB1cmwgPSBMaW5rLnVybChuYW1lKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAodXJsKSB7XG4gICAgICAgICAgICAvLyBpZiB0aGUgaHJlZiBpcyBlcXVhbCB0byB0aGUgY3VycmVudCBocmVmLCB0aGVuIGRvIG5vdGhpbmdcbiAgICAgICAgICAgIGNvbnN0IHtwYXRobmFtZSwgc2VhcmNofSA9IGhpc3RvcnkubG9jYXRpb247XG4gICAgICAgICAgICBpZiAocGF0aG5hbWUgKyBzZWFyY2ggPT09IHVybCkgcmV0dXJuO1xuXG4gICAgICAgICAgICBpZiAodGhpcy5nZXQoJ2lzUmVwbGFjZScpKSB7XG4gICAgICAgICAgICAgICAgaGlzdG9yeS5yZXBsYWNlKHVybCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGhpc3RvcnkucHVzaCh1cmwpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG5leHBvcnQge0xpbmt9O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9saW5rL2luZGV4LmpzIiwiXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihvYmosIF9WZHQsIGJsb2NrcywgJGNhbGxlZSkge1xuX1ZkdCB8fCAoX1ZkdCA9IFZkdCk7XG5vYmogfHwgKG9iaiA9IHt9KTtcbmJsb2NrcyB8fCAoYmxvY2tzID0ge30pO1xudmFyIGggPSBfVmR0Lm1pc3MuaCwgaGMgPSBfVmR0Lm1pc3MuaGMsIGh1ID0gX1ZkdC5taXNzLmh1LCB3aWRnZXRzID0gdGhpcyAmJiB0aGlzLndpZGdldHMgfHwge30sIF9ibG9ja3MgPSB7fSwgX19ibG9ja3MgPSB7fSxcbl9fdSA9IF9WZHQudXRpbHMsIGV4dGVuZCA9IF9fdS5leHRlbmQsIF9lID0gX191LmVycm9yLCBfY2xhc3NOYW1lID0gX191LmNsYXNzTmFtZSxcbl9fbyA9IF9fdS5PcHRpb25zLCBfZ2V0TW9kZWwgPSBfX28uZ2V0TW9kZWwsIF9zZXRNb2RlbCA9IF9fby5zZXRNb2RlbCxcbl9zZXRDaGVja2JveE1vZGVsID0gX191LnNldENoZWNrYm94TW9kZWwsIF9kZXRlY3RDaGVja2JveENoZWNrZWQgPSBfX3UuZGV0ZWN0Q2hlY2tib3hDaGVja2VkLFxuX3NldFNlbGVjdE1vZGVsID0gX191LnNldFNlbGVjdE1vZGVsLFxuc2VsZiA9IHRoaXMuZGF0YSwgJHRoaXMgPSB0aGlzLCBzY29wZSA9IG9iaiwgQW5pbWF0ZSA9IHNlbGYgJiYgc2VsZi5BbmltYXRlLCBwYXJlbnQgPSAoJGNhbGxlZSB8fCB7fSkuX3N1cGVyXG5jb25zdCB7bmFtZSwgaXNSZXBsYWNlLCAuLi5yZXN0fSA9IHNlbGYuZ2V0KCk7XG5yZXR1cm4gaCgnYScsIHsuLi5mdW5jdGlvbigpIHt0cnkge3JldHVybiBbcmVzdCBdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpLCAnZXYtY2xpY2snOiBmdW5jdGlvbigpIHt0cnkge3JldHVybiBbc2VsZi50byBdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpfSwgZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW3NlbGYuZ2V0KCdjaGlsZHJlbicpIF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcykpXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9saW5rL2luZGV4LnZkdCIsImltcG9ydCBJbnRhY3QgZnJvbSAnaW50YWN0JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTW92ZVdyYXBwZXIgZXh0ZW5kcyBJbnRhY3Qge1xuICAgIHRlbXBsYXRlKHNlbGYsIFZkdCkge1xuICAgICAgICBjb25zdCBjaGlsZHJlbiA9IHNlbGYuZ2V0KCdjaGlsZHJlbicpO1xuICAgICAgICByZXR1cm4gY2hpbGRyZW4gfHwgVmR0Lm1pc3MuaGMoJ01vdmVXcmFwcGVyJyk7XG4gICAgfVxuXG4gICAgZGVmYXVsdHMoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBhdXRvRGVzdHJveTogdHJ1ZSwgXG4gICAgICAgICAgICBjb250YWluZXI6IHVuZGVmaW5lZCxcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGluaXQoLi4uYXJncykge1xuICAgICAgICBzdXBlci5pbml0KC4uLmFyZ3MpO1xuICAgICAgICByZXR1cm4gdGhpcy5wbGFjZWhvbGRlciA9IGRvY3VtZW50LmNyZWF0ZUNvbW1lbnQoXCJwbGFjZWhvbGRlclwiKTtcbiAgICB9XG5cbiAgICBoeWRyYXRlKC4uLmFyZ3MpIHtcbiAgICAgICAgc3VwZXIuaHlkcmF0ZSguLi5hcmdzKTtcbiAgICAgICAgcmV0dXJuIHRoaXMucGxhY2Vob2xkZXIgPSBkb2N1bWVudC5jcmVhdGVDb21tZW50KCdwbGFjZWhvbGRlcicpO1xuICAgIH1cblxuICAgIHVwZGF0ZShsYXN0Vk5vZGUsIG5leHRWTm9kZSkge1xuICAgICAgICBzdXBlci51cGRhdGUobGFzdFZOb2RlLCBuZXh0Vk5vZGUpO1xuICAgICAgICByZXR1cm4gdGhpcy5wbGFjZWhvbGRlcjtcbiAgICB9XG5cbiAgICBkZXN0cm95KC4uLmFyZ3MpIHtcbiAgICAgICAgaWYgKHRoaXMuZ2V0KCdhdXRvRGVzdHJveScpKSB7XG4gICAgICAgICAgICB0aGlzLl8kZGVzdHJveSguLi5hcmdzKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIFxuICAgIC8qKlxuICAgICAqIEBicmllZiBvdmVycmlkZSBzdXBlciBkZXN0cm95IFxuICAgICAqXG4gICAgICogTW92ZVdyYXBlciBjb21wb25lbnQgaGFzIGNoYW5nZWQgdGhlIGRvbSBzdHJ1Y3Rpb24uXG4gICAgICogSXQgaXMgYWx3YXlzIHRoZSB0b3AgbGV2ZWwgZG9tLCBzbyB3ZSBzaG91bGQgXG4gICAgICogcmVtb3ZlIGl0IGZyb20gcGFyZW50IGRvbS4gQnkgcGFzc2luZyB0aGUgY29udGFpbmVyXG4gICAgICogdG8gcmVtb3ZlIGZ1bmN0aW9uIGNhbiBkbyB0aGlzLiBXZSBjYW4ndCByZW1vdmUgaXRcbiAgICAgKiBkaXJlY3RseSBieSBjYWxsaW5nIHJlbW92ZUNoaWxkIG1ldGhvZCwgYmVhY2F1c2UgaXRcbiAgICAgKiBtYXliZSBoYXZlIGxlYXZlIGFuaW1hdGlvbi5cbiAgICAgKlxuICAgICAqIEBwYXJhbSAuLi5hcmdzXG4gICAgICovXG4gICAgXyRkZXN0cm95KGxhc3RWTm9kZSwgbmV4dFZOb2RlKSB7XG4gICAgICAgIC8vIGlmICh0aGlzLmRlc3Ryb3llZCkge1xuICAgICAgICAgICAgLy8gcmV0dXJuIGNvbnNvbGUud2FybignZGVzdHJveWVkIG11bHRpcGxlIHRpbWVzJyk7XG4gICAgICAgIC8vIH1cbiAgICAgICAgaWYgKHRoaXMucmVuZGVyZWQgJiYgXG4gICAgICAgICAgICAoXG4gICAgICAgICAgICAgICAgIW5leHRWTm9kZSB8fFxuICAgICAgICAgICAgICAgICEobmV4dFZOb2RlLnR5cGUgJiBJbnRhY3QuVmR0Lm1pc3MuVHlwZXMuQ29tcG9uZW50Q2xhc3NPckluc3RhbmNlKSB8fFxuICAgICAgICAgICAgICAgIG5leHRWTm9kZS5rZXkgIT09IGxhc3RWTm9kZS5rZXlcbiAgICAgICAgICAgIClcbiAgICAgICAgKSB7XG4gICAgICAgICAgICBJbnRhY3QuVmR0Lm1pc3MucmVtb3ZlKHRoaXMudmR0LnZOb2RlLCB0aGlzLmNvbnRhaW5lcik7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fZGVzdHJveShsYXN0Vk5vZGUsIG5leHRWTm9kZSk7XG4gICAgICAgIHRoaXMuZGVzdHJveWVkID0gdHJ1ZTtcbiAgICAgICAgdGhpcy50cmlnZ2VyKCckZGVzdHJveWVkJywgdGhpcyk7XG4gICAgICAgIHRoaXMub2ZmKCk7XG4gICAgfVxuXG4gICAgX21vdW50KGxhc3RWTm9kZSwgbmV4dFZOb2RlKSB7XG4gICAgICAgIGNvbnN0IGNvbnRhaW5lciA9IHRoaXMuZ2V0KCdjb250YWluZXInKTtcbiAgICAgICAgaWYgKGNvbnRhaW5lcikge1xuICAgICAgICAgICAgdGhpcy5jb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGNvbnRhaW5lcik7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCF0aGlzLmNvbnRhaW5lcikge1xuICAgICAgICAgICAgdGhpcy5jb250YWluZXIgPSBkb2N1bWVudC5ib2R5O1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMuZWxlbWVudCk7XG4gICAgfVxufVxuXG5leHBvcnQge01vdmVXcmFwcGVyfTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvbW92ZVdyYXBwZXIvaW5kZXguanMiLCJjb25zdCBtYXggPSBNYXRoLm1heDtcbmNvbnN0IGFicyA9IE1hdGguYWJzO1xuY29uc3Qgckhvcml6b250YWwgPSAvbGVmdHxjZW50ZXJ8cmlnaHQvO1xuY29uc3QgclZlcnRpY2FsID0gL3RvcHxjZW50ZXJ8Ym90dG9tLztcbmNvbnN0IHJPZmZzZXQgPSAvW1xcK1xcLV1cXGQrKFxcLltcXGRdKyk/JT8vO1xuY29uc3QgclBvc2l0aW9uID0gL15cXHcrLztcbmNvbnN0IHJQZXJjZW50ID0gLyUkLztcblxuZnVuY3Rpb24gZ2V0RGltZW5zaW9ucyhlbGVtKSB7XG4gICAgaWYgKGVsZW0ubm9kZVR5cGUgPT09IDkpIHtcbiAgICAgICAgLy8gZG9jdW1lbnRcbiAgICAgICAgY29uc3Qge3dpZHRoLCBoZWlnaHR9ID0gZ2V0RG9jdW1lbnRPcldpbmRvd1JlY3QoZWxlbSk7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB3aWR0aCxcbiAgICAgICAgICAgIGhlaWdodCxcbiAgICAgICAgICAgIG9mZnNldDoge1xuICAgICAgICAgICAgICAgIHRvcDogMCxcbiAgICAgICAgICAgICAgICBsZWZ0OiAwXG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgfSBlbHNlIGlmIChlbGVtID09PSB3aW5kb3cpIHtcbiAgICAgICAgY29uc3Qge3dpZHRoLCBoZWlnaHR9ID0gZ2V0RG9jdW1lbnRPcldpbmRvd1JlY3QoZWxlbSk7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB3aWR0aCxcbiAgICAgICAgICAgIGhlaWdodCxcbiAgICAgICAgICAgIG9mZnNldDoge1xuICAgICAgICAgICAgICAgIHRvcDogZWxlbS5wYWdlWU9mZnNldCxcbiAgICAgICAgICAgICAgICBsZWZ0OiBlbGVtLnBhZ2VYT2Zmc2V0LFxuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgIH0gZWxzZSBpZiAoZWxlbS5wcmV2ZW50RGVmYXVsdCkge1xuICAgICAgICAvLyBldmVudFxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgd2lkdGg6IDAsXG4gICAgICAgICAgICBoZWlnaHQ6IDAsXG4gICAgICAgICAgICBvZmZzZXQ6IHtcbiAgICAgICAgICAgICAgICB0b3A6IGVsZW0ucGFnZVksXG4gICAgICAgICAgICAgICAgbGVmdDogZWxlbS5wYWdlWFxuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgIH1cbiAgICAvLyBkb21cbiAgICBjb25zdCByZWN0ID0gZWxlbS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICByZXR1cm4ge1xuICAgICAgICB3aWR0aDogcmVjdC53aWR0aCxcbiAgICAgICAgaGVpZ2h0OiByZWN0LmhlaWdodCxcbiAgICAgICAgb2Zmc2V0OiB7XG4gICAgICAgICAgICB0b3A6IHJlY3QudG9wICsgd2luZG93LnBhZ2VZT2Zmc2V0LFxuICAgICAgICAgICAgbGVmdDogcmVjdC5sZWZ0ICsgd2luZG93LnBhZ2VYT2Zmc2V0XG4gICAgICAgIH1cbiAgICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0RG9jdW1lbnRPcldpbmRvd1JlY3QoZWxlbSkge1xuICAgIGlmIChlbGVtID09PSB3aW5kb3cpIHtcbiAgICAgICAgY29uc3QgZCA9IGVsZW0uZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgd2lkdGg6IGQuY2xpZW50V2lkdGgsXG4gICAgICAgICAgICBoZWlnaHQ6IGQuY2xpZW50SGVpZ2h0LFxuICAgICAgICB9O1xuICAgIH1cbiAgICBjb25zdCBkID0gZWxlbS5kb2N1bWVudEVsZW1lbnQ7XG4gICAgY29uc3QgYiA9IGVsZW0uYm9keTtcbiAgICByZXR1cm4ge1xuICAgICAgICB3aWR0aDogbWF4KFxuICAgICAgICAgICAgYi5zY3JvbGxXaWR0aCwgZC5zY3JvbGxXaWR0aCxcbiAgICAgICAgICAgIGIub2Zmc2V0V2lkdGgsIGQub2Zmc2V0V2lkdGgsXG4gICAgICAgICAgICBkLmNsaWVudFdpZHRoXG4gICAgICAgICksXG4gICAgICAgIGhlaWdodDogbWF4KFxuICAgICAgICAgICAgYi5zY3JvbGxIZWlnaHQsIGQuc2Nyb2xsSGVpZ2h0LFxuICAgICAgICAgICAgYi5vZmZzZXRIZWlnaHQsIGQub2Zmc2V0SGVpZ2h0LFxuICAgICAgICAgICAgZC5jbGllbnRIZWlnaHRcbiAgICAgICAgKVxuICAgIH07XG59XG5cbmZ1bmN0aW9uIGdldE9mZnNldHMob2Zmc2V0cywgd2lkdGgsIGhlaWdodCkge1xuICAgIHJldHVybiBbXG4gICAgICAgIHBhcnNlRmxvYXQob2Zmc2V0c1swXSkgKiAoclBlcmNlbnQudGVzdChvZmZzZXRzWzBdKSA/IHdpZHRoIC8gMTAwIDogMSksXG4gICAgICAgIHBhcnNlRmxvYXQob2Zmc2V0c1sxXSkgKiAoclBlcmNlbnQudGVzdChvZmZzZXRzWzFdKSA/IGhlaWdodCAvIDEwMCA6IDEpLFxuICAgIF07XG59XG5cbi8vIHJlZmVyZW5jZTogaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy8xMzM4MjUxNi9nZXR0aW5nLXNjcm9sbC1iYXItd2lkdGgtdXNpbmctamF2YXNjcmlwdFxubGV0IF9zY3JvbGxCYXJXaWR0aDtcbmV4cG9ydCBmdW5jdGlvbiBzY3JvbGxiYXJXaWR0aCgpIHtcbiAgICBpZiAoX3Njcm9sbEJhcldpZHRoICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcmV0dXJuIF9zY3JvbGxCYXJXaWR0aDtcbiAgICB9XG5cbiAgICB2YXIgb3V0ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIG91dGVyLnN0eWxlLnZpc2liaWxpdHkgPSBcImhpZGRlblwiO1xuICAgIG91dGVyLnN0eWxlLndpZHRoID0gXCIxMDBweFwiO1xuICAgIG91dGVyLnN0eWxlLm1zT3ZlcmZsb3dTdHlsZSA9IFwic2Nyb2xsYmFyXCI7IC8vIG5lZWRlZCBmb3IgV2luSlMgYXBwc1xuXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChvdXRlcik7XG5cbiAgICB2YXIgd2lkdGhOb1Njcm9sbCA9IG91dGVyLm9mZnNldFdpZHRoO1xuICAgIC8vIGZvcmNlIHNjcm9sbGJhcnNcbiAgICBvdXRlci5zdHlsZS5vdmVyZmxvdyA9IFwic2Nyb2xsXCI7XG5cbiAgICAvLyBhZGQgaW5uZXJkaXZcbiAgICB2YXIgaW5uZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGlubmVyLnN0eWxlLndpZHRoID0gXCIxMDAlXCI7XG4gICAgb3V0ZXIuYXBwZW5kQ2hpbGQoaW5uZXIpO1xuXG4gICAgdmFyIHdpZHRoV2l0aFNjcm9sbCA9IGlubmVyLm9mZnNldFdpZHRoO1xuXG4gICAgLy8gcmVtb3ZlIGRpdnNcbiAgICBvdXRlci5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKG91dGVyKTtcblxuICAgIHJldHVybiAoX3Njcm9sbEJhcldpZHRoID0gd2lkdGhOb1Njcm9sbCAtIHdpZHRoV2l0aFNjcm9sbCk7XG59XG5cbmZ1bmN0aW9uIGdldFNjcm9sbEluZm8od2l0aGluKSB7XG4gICAgY29uc3Qgb3ZlcmZsb3dYID0gd2l0aGluLmlzV2luZG93IHx8IHdpdGhpbi5pc0RvY3VtZW50ID8gXG4gICAgICAgICcnIDogd2l0aGluLmVsZW1lbnQuc3R5bGUub3ZlcmZsb3dYO1xuICAgIGNvbnN0IG92ZXJmbG93WSA9IHdpdGhpbi5pc1dpbmRvdyB8fCB3aXRoaW4uaXNEb2N1bWVudCA/IFxuICAgICAgICAnJyA6IHdpdGhpbi5lbGVtZW50LnN0eWxlLm92ZXJmbG93WTtcbiAgICBjb25zdCBoYXNPdmVyZmxvd1ggPSBvdmVyZmxvd1ggPT09ICdzY3JvbGwnIHx8IFxuICAgICAgICAob3ZlcmZsb3dYID09PSAnYXV0bycgJiYgd2l0aGluLndpZHRoIDwgd2l0aGluLmVsZW1lbnQuc2Nyb2xsV2lkdGgpO1xuICAgIGNvbnN0IGhhc092ZXJmbG93WSA9IG92ZXJmbG93WSA9PT0gJ3Njcm9sbCcgfHwgXG4gICAgICAgIChvdmVyZmxvd1kgPT09ICdhdXRvJyAmJiB3aXRoaW4uaGVpZ2h0IDwgd2l0aGluLmVsZW1lbnQuc2Nyb2xsSGVpZ2h0KTtcbiAgICBcbiAgICByZXR1cm4ge1xuICAgICAgICB3aWR0aDogaGFzT3ZlcmZsb3dZID8gc2Nyb2xsYmFyV2lkdGgoKSA6IDAsXG4gICAgICAgIGhlaWdodDogaGFzT3ZlcmZsb3dYID8gc2Nyb2xsYmFyV2lkdGgoKSA6IDAsXG4gICAgfTtcbn1cblxuZnVuY3Rpb24gZ2V0V2l0aGluSW5mbyhlbGVtZW50KSB7XG4gICAgZWxlbWVudCB8fCAoZWxlbWVudCA9IHdpbmRvdyk7XG4gICAgY29uc3QgaXNXaW5kb3cgPSBlbGVtZW50ID09PSB3aW5kb3c7XG4gICAgY29uc3QgaXNEb2N1bWVudCA9IGVsZW1lbnQubm9kZVR5cGUgPT09IDk7XG4gICAgY29uc3QgaGFzT2Zmc2V0ID0gIWlzV2luZG93ICYmICFpc0RvY3VtZW50O1xuXG4gICAgY29uc3QgcmV0ID0ge2VsZW1lbnQsIGlzV2luZG93LCBpc0RvY3VtZW50fTtcbiAgICBpZiAoaGFzT2Zmc2V0KSB7XG4gICAgICAgIGNvbnN0IHJlY3QgPSBlbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgICByZXQub2Zmc2V0ID0ge1xuICAgICAgICAgICAgdG9wOiByZWN0LnRvcCArIHdpbmRvdy5wYWdlWU9mZnNldCxcbiAgICAgICAgICAgIGxlZnQ6IHJlY3QubGVmdCArIHdpbmRvdy5wYWdlWE9mZnNldCxcbiAgICAgICAgfTtcbiAgICAgICAgcmV0LndpZHRoID0gcmVjdC53aWR0aDtcbiAgICAgICAgcmV0LmhlaWdodCA9IHJlY3QuaGVpZ2h0O1xuICAgICAgICByZXQuc2Nyb2xsTGVmdCA9IGVsZW1lbnQuc2Nyb2xsTGVmdDtcbiAgICAgICAgcmV0LnNjcm9sbFRvcCA9IGVsZW1lbnQuc2Nyb2xsVG9wO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldC5vZmZzZXQgPSB7dG9wOiAwLCBsZWZ0OiAwfTtcbiAgICAgICAgY29uc3QgcmVjdCA9IGdldERvY3VtZW50T3JXaW5kb3dSZWN0KGVsZW1lbnQpO1xuICAgICAgICByZXQud2lkdGggPSByZWN0LndpZHRoO1xuICAgICAgICByZXQuaGVpZ2h0ID0gcmVjdC5oZWlnaHQ7XG4gICAgICAgIHJldC5zY3JvbGxMZWZ0ID0gd2luZG93LnBhZ2VYT2Zmc2V0O1xuICAgICAgICByZXQuc2Nyb2xsVG9wID0gd2luZG93LnBhZ2VZT2Zmc2V0O1xuICAgIH1cblxuICAgIHJldHVybiByZXQ7XG59XG5cbmZ1bmN0aW9uIHBhcnNlQ3NzKHN0eWxlLCBwcm9wZXJ0eSkge1xuICAgIHJldHVybiBwYXJzZUludChzdHlsZVtwcm9wZXJ0eV0sIDEwKSB8fCAwO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBwb3NpdGlvbihlbGVtLCBvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oe30sIG9wdGlvbnMpO1xuXG4gICAgY29uc3QgdGFyZ2V0ID0gb3B0aW9ucy5vZiB8fCB3aW5kb3c7XG4gICAgaWYgKHRhcmdldC5wcmV2ZW50RGVmYXVsdCkge1xuICAgICAgICBvcHRpb25zLmF0ID0gXCJsZWZ0IHRvcFwiO1xuICAgIH1cbiAgICBjb25zdCB7XG4gICAgICAgIHdpZHRoOiB0YXJnZXRXaWR0aCxcbiAgICAgICAgaGVpZ2h0OiB0YXJnZXRIZWlnaHQsIFxuICAgICAgICBvZmZzZXQ6IHRhcmdldE9mZnNldFxuICAgIH0gPSBnZXREaW1lbnNpb25zKHRhcmdldCk7XG4gICAgY29uc3QgYmFzZVBvc2l0aW9uID0gT2JqZWN0LmFzc2lnbih7fSwgdGFyZ2V0T2Zmc2V0KTtcbiAgICBjb25zdCBjb2xsaXNpb24gPSAob3B0aW9ucy5jb2xsaXNpb24gfHwgJ2ZsaXAnKS5zcGxpdCgnICcpO1xuICAgIGNvbnN0IG9mZnNldHMgPSB7fTtcbiAgICBjb25zdCB3aXRoaW4gPSBnZXRXaXRoaW5JbmZvKG9wdGlvbnMud2l0aGluKTtcbiAgICBjb25zdCBzY3JvbGxJbmZvID0gZ2V0U2Nyb2xsSW5mbyh3aXRoaW4pO1xuXG4gICAgWydteScsICdhdCddLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICAgIGxldCBwb3MgPSAob3B0aW9uc1tpdGVtXSB8fCAnJykuc3BsaXQoJyAnKTtcblxuICAgICAgICBpZiAocG9zLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICAgICAgcG9zID0gckhvcml6b250YWwudGVzdChwb3NbMF0pID9cbiAgICAgICAgICAgICAgICBwb3MuY29uY2F0KFsnY2VudGVyJ10pIDpcbiAgICAgICAgICAgICAgICByVmVydGljYWwudGVzdChwb3NbMF0pID9cbiAgICAgICAgICAgICAgICAgICAgWydjZW50ZXInXS5jb25jYXQocG9zKSA6XG4gICAgICAgICAgICAgICAgICAgIFsnY2VudGVyJywgJ2NlbnRlciddO1xuICAgICAgICB9XG4gICAgICAgIHBvc1swXSA9IHJIb3Jpem9udGFsLnRlc3QocG9zWzBdKSA/IHBvc1swXSA6ICdjZW50ZXInO1xuICAgICAgICBwb3NbMV0gPSByVmVydGljYWwudGVzdChwb3NbMV0pID8gcG9zWzFdIDogJ2NlbnRlcic7XG5cbiAgICAgICAgY29uc3QgaG9yaXpvbnRhbE9mZnNldCA9IHJPZmZzZXQuZXhlYyhwb3NbMF0pO1xuICAgICAgICBjb25zdCB2ZXJ0aWNhbE9mZnNldCA9IHJPZmZzZXQuZXhlYyhwb3NbMV0pO1xuICAgICAgICBvZmZzZXRzW2l0ZW1dID0gW1xuICAgICAgICAgICAgaG9yaXpvbnRhbE9mZnNldCA/IGhvcml6b250YWxPZmZzZXRbMF0gOiAwLFxuICAgICAgICAgICAgdmVydGljYWxPZmZzZXQgPyB2ZXJ0aWNhbE9mZnNldFswXSA6IDBcbiAgICAgICAgXTtcblxuICAgICAgICBvcHRpb25zW2l0ZW1dID0gW1xuICAgICAgICAgICAgclBvc2l0aW9uLmV4ZWMocG9zWzBdKVswXSxcbiAgICAgICAgICAgIHJQb3NpdGlvbi5leGVjKHBvc1sxXSlbMF1cbiAgICAgICAgXTtcbiAgICB9KTtcblxuICAgIGlmIChjb2xsaXNpb24ubGVuZ3RoID09PSAxKSB7XG4gICAgICAgIGNvbGxpc2lvblsxXSA9IGNvbGxpc2lvblswXTtcbiAgICB9XG5cbiAgICBjb25zdCBhdCA9IG9wdGlvbnMuYXQ7XG4gICAgaWYgKGF0WzBdID09PSAncmlnaHQnKSB7XG4gICAgICAgIGJhc2VQb3NpdGlvbi5sZWZ0ICs9IHRhcmdldFdpZHRoO1xuICAgIH0gZWxzZSBpZiAoYXRbMF0gPT09ICdjZW50ZXInKSB7XG4gICAgICAgIGJhc2VQb3NpdGlvbi5sZWZ0ICs9IHRhcmdldFdpZHRoIC8gMjtcbiAgICB9XG4gICAgaWYgKGF0WzFdID09PSAnYm90dG9tJykge1xuICAgICAgICBiYXNlUG9zaXRpb24udG9wICs9IHRhcmdldEhlaWdodDtcbiAgICB9IGVsc2UgaWYgKGF0WzFdID09PSAnY2VudGVyJykge1xuICAgICAgICBiYXNlUG9zaXRpb24udG9wICs9IHRhcmdldEhlaWdodCAvIDI7XG4gICAgfVxuXG4gICAgY29uc3QgYXRPZmZzZXQgPSBnZXRPZmZzZXRzKG9mZnNldHMuYXQsIHRhcmdldFdpZHRoLCB0YXJnZXRIZWlnaHQpO1xuICAgIGJhc2VQb3NpdGlvbi5sZWZ0ICs9IGF0T2Zmc2V0WzBdO1xuICAgIGJhc2VQb3NpdGlvbi50b3AgKz0gYXRPZmZzZXRbMV07XG5cbiAgICBjb25zdCBlbGVtV2lkdGggPSBlbGVtLm9mZnNldFdpZHRoO1xuICAgIGNvbnN0IGVsZW1IZWlnaHQgPSBlbGVtLm9mZnNldEhlaWdodDtcbiAgICBjb25zdCBwb3NpdGlvbiA9IE9iamVjdC5hc3NpZ24oe30sIGJhc2VQb3NpdGlvbik7XG4gICAgY29uc3QgbXlPZmZzZXQgPSBnZXRPZmZzZXRzKG9mZnNldHMubXksIGVsZW1XaWR0aCwgZWxlbUhlaWdodCk7XG4gICAgY29uc3QgY29tcHV0ZWRTdHlsZSA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGVsZW0pO1xuICAgIGNvbnN0IG1hcmdpbkxlZnQgPSBwYXJzZUNzcyhjb21wdXRlZFN0eWxlLCAnbWFyZ2luTGVmdCcpO1xuICAgIGNvbnN0IG1hcmdpblRvcCA9IHBhcnNlQ3NzKGNvbXB1dGVkU3R5bGUsICdtYXJnaW5Ub3AnKTtcbiAgICBjb25zdCBjb2xsaXNpb25XaWR0aCA9IGVsZW1XaWR0aCArIG1hcmdpbkxlZnQgKyBwYXJzZUNzcyhjb21wdXRlZFN0eWxlLCAnbWFyZ2luUmlnaHQnKSArIHNjcm9sbEluZm8ud2lkdGg7XG4gICAgY29uc3QgY29sbGlzaW9uSGVpZ2h0ID0gZWxlbUhlaWdodCArIG1hcmdpblRvcCArIHBhcnNlQ3NzKGNvbXB1dGVkU3R5bGUsICdtYXJnaW5Cb3R0b20nKSArIHNjcm9sbEluZm8uaGVpZ2h0O1xuICAgIGNvbnN0IGNvbGxpc2lvblBvc2l0aW9uID0ge21hcmdpbkxlZnQsIG1hcmdpblRvcH07XG5cbiAgICBjb25zdCBteSA9IG9wdGlvbnMubXk7XG4gICAgaWYgKG15WzBdID09PSAncmlnaHQnKSB7XG4gICAgICAgIHBvc2l0aW9uLmxlZnQgLT0gZWxlbVdpZHRoO1xuICAgIH0gZWxzZSBpZiAobXlbMF0gPT09ICdjZW50ZXInKSB7XG4gICAgICAgIHBvc2l0aW9uLmxlZnQgLT0gZWxlbVdpZHRoIC8gMjtcbiAgICB9XG4gICAgaWYgKG15WzFdID09PSAnYm90dG9tJykge1xuICAgICAgICBwb3NpdGlvbi50b3AgLT0gZWxlbUhlaWdodDtcbiAgICB9IGVsc2UgaWYgKG15WzFdID09PSAnY2VudGVyJykge1xuICAgICAgICBwb3NpdGlvbi50b3AgLT0gZWxlbUhlaWdodCAvIDI7XG4gICAgfVxuICAgIHBvc2l0aW9uLmxlZnQgKz0gbXlPZmZzZXRbMF07XG4gICAgcG9zaXRpb24udG9wICs9IG15T2Zmc2V0WzFdO1xuXG4gICAgWydsZWZ0JywgJ3RvcCddLmZvckVhY2goKGRpciwgaSkgPT4ge1xuICAgICAgICBjb25zdCBjb2xsID0gY29sbGlzaW9uW2ldO1xuICAgICAgICBpZiAocnVsZXNbY29sbF0pIHtcbiAgICAgICAgICAgIHJ1bGVzW2NvbGxdW2Rpcl0ocG9zaXRpb24sIHtcbiAgICAgICAgICAgICAgICB0YXJnZXRXaWR0aCxcbiAgICAgICAgICAgICAgICB0YXJnZXRIZWlnaHQsXG4gICAgICAgICAgICAgICAgZWxlbVdpZHRoLFxuICAgICAgICAgICAgICAgIGVsZW1IZWlnaHQsXG4gICAgICAgICAgICAgICAgY29sbGlzaW9uUG9zaXRpb24sXG4gICAgICAgICAgICAgICAgY29sbGlzaW9uV2lkdGgsXG4gICAgICAgICAgICAgICAgY29sbGlzaW9uSGVpZ2h0LFxuICAgICAgICAgICAgICAgIG9mZnNldDogW2F0T2Zmc2V0WzBdICsgbXlPZmZzZXRbMF0sIGF0T2Zmc2V0WzFdICsgbXlPZmZzZXRbMV1dLFxuICAgICAgICAgICAgICAgIG15OiBvcHRpb25zLm15LFxuICAgICAgICAgICAgICAgIGF0OiBvcHRpb25zLmF0LFxuICAgICAgICAgICAgICAgIHdpdGhpbixcbiAgICAgICAgICAgICAgICBlbGVtXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgaWYgKG9wdGlvbnMudXNpbmcpIHtcbiAgICAgICAgY29uc3QgbGVmdCA9IHRhcmdldE9mZnNldC5sZWZ0IC0gcG9zaXRpb24ubGVmdDtcbiAgICAgICAgY29uc3QgcmlnaHQgPSBsZWZ0ICsgdGFyZ2V0V2lkdGggLSBlbGVtV2lkdGg7XG4gICAgICAgIGNvbnN0IHRvcCA9IHRhcmdldE9mZnNldC50b3AgLSBwb3NpdGlvbi50b3A7XG4gICAgICAgIGNvbnN0IGJvdHRvbSA9IHRvcCArIHRhcmdldEhlaWdodCAtIGVsZW1IZWlnaHQ7XG4gICAgICAgIGNvbnN0IGZlZWRiYWNrID0ge1xuICAgICAgICAgICAgdGFyZ2V0OiB7XG4gICAgICAgICAgICAgICAgZWxlbWVudDogdGFyZ2V0LFxuICAgICAgICAgICAgICAgIGxlZnQ6IHRhcmdldE9mZnNldC5sZWZ0LFxuICAgICAgICAgICAgICAgIHRvcDogdGFyZ2V0T2Zmc2V0LnRvcCxcbiAgICAgICAgICAgICAgICB3aWR0aDogdGFyZ2V0V2lkdGgsXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiB0YXJnZXRIZWlnaHQsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZWxlbWVudDoge1xuICAgICAgICAgICAgICAgIGVsZW1lbnQ6IGVsZW0sXG4gICAgICAgICAgICAgICAgbGVmdDogcG9zaXRpb24ubGVmdCxcbiAgICAgICAgICAgICAgICB0b3A6IHBvc2l0aW9uLnRvcCxcbiAgICAgICAgICAgICAgICB3aWR0aDogZWxlbVdpZHRoLFxuICAgICAgICAgICAgICAgIGhlaWdodDogZWxlbUhlaWdodCxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBob3Jpem9udGFsOiByaWdodCA8IDAgPyAnbGVmdCcgOiBsZWZ0ID4gMCA/ICdyaWdodCcgOiAnY2VudGVyJyxcbiAgICAgICAgICAgIHZlcnRpY2FsOiBib3R0b20gPCAwID8gJ3RvcCcgOiB0b3AgPiAwID8gJ2JvdHRvbScgOiAnbWlkZGxlJyxcbiAgICAgICAgfTtcbiAgICAgICAgaWYgKHRhcmdldFdpZHRoIDwgZWxlbVdpZHRoICYmIGFicyhsZWZ0ICsgcmlnaHQpIDwgdGFyZ2V0V2lkdGgpIHtcbiAgICAgICAgICAgIGZlZWRiYWNrLmhvcml6b250YWwgPSAnY2VudGVyJztcbiAgICAgICAgfVxuICAgICAgICBpZiAodGFyZ2V0SGVpZ2h0IDwgZWxlbUhlaWdodCAmJiBhYnModG9wICsgYm90dG9tKSA8IHRhcmdldEhlaWdodCkge1xuICAgICAgICAgICAgZmVlZGJhY2sudmVydGljYWwgPSAnbWlkZGxlJztcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChcbiAgICAgICAgICAgIHBvc2l0aW9uLnRvcCArIGVsZW1IZWlnaHQgPD0gdGFyZ2V0T2Zmc2V0LnRvcCB8fCBcbiAgICAgICAgICAgIHBvc2l0aW9uLnRvcCA+PSB0YXJnZXRPZmZzZXQudG9wICsgdGFyZ2V0SGVpZ2h0XG4gICAgICAgICkge1xuICAgICAgICAgICAgZmVlZGJhY2suaW1wb3J0YW50ID0gJ3ZlcnRpY2FsJztcbiAgICAgICAgfSBlbHNlIGlmIChcbiAgICAgICAgICAgIHBvc2l0aW9uLmxlZnQgKyBlbGVtV2lkdGggPD0gdGFyZ2V0T2Zmc2V0LmxlZnQgfHxcbiAgICAgICAgICAgIHBvc2l0aW9uLmxlZnQgPj0gdGFyZ2V0T2Zmc2V0LmxlZnQgKyB0YXJnZXRXaWR0aFxuICAgICAgICApIHtcbiAgICAgICAgICAgIGZlZWRiYWNrLmltcG9ydGFudCA9ICdob3Jpem9udGFsJztcbiAgICAgICAgfSBlbHNlIGlmIChtYXgoYWJzKGxlZnQpLCBhYnMocmlnaHQpKSA+IG1heChhYnModG9wKSwgYWJzKGJvdHRvbSkpKSB7XG4gICAgICAgICAgICBmZWVkYmFjay5pbXBvcnRhbnQgPSAnaG9yaXpvbnRhbCc7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBmZWVkYmFjay5pbXBvcnRhbnQgPSAndmVydGljYWwnO1xuICAgICAgICB9XG5cbiAgICAgICAgb3B0aW9ucy51c2luZyhmZWVkYmFjaywgcG9zaXRpb24pO1xuICAgIH1cblxuICAgIGNvbnN0IHN0eWxlID0gZWxlbS5zdHlsZTtcbiAgICBpZiAoY29tcHV0ZWRTdHlsZS5wb3NpdGlvbiA9PT0gJ3N0YXRpYycpIHtcbiAgICAgICAgc3R5bGUucG9zaXRpb24gPSAncmVsYXRpdmUnO1xuICAgIH1cbiAgICBzdHlsZS5sZWZ0ID0gcG9zaXRpb24ubGVmdCArICdweCc7XG4gICAgc3R5bGUudG9wID0gcG9zaXRpb24udG9wICsgJ3B4Jztcbn1cblxuY29uc3QgcnVsZXMgPSB7XG4gICAgZml0OiB7XG4gICAgICAgIGxlZnQocG9zaXRpb24sIGRhdGEpIHtcbiAgICAgICAgICAgIGNvbnN0IHdpdGhpbiA9IGRhdGEud2l0aGluO1xuICAgICAgICAgICAgY29uc3Qgd2l0aGluT2Zmc2V0ID0gd2l0aGluLmlzV2luZG93ID8gd2l0aGluLnNjcm9sbExlZnQgOiB3aXRoaW4ub2Zmc2V0LmxlZnQ7XG4gICAgICAgICAgICBjb25zdCBvdXRlcldpZHRoID0gd2l0aGluLndpZHRoO1xuICAgICAgICAgICAgY29uc3QgY29sbGlzaW9uUG9zTGVmdCA9ICBwb3NpdGlvbi5sZWZ0IC0gZGF0YS5jb2xsaXNpb25Qb3NpdGlvbi5tYXJnaW5MZWZ0O1xuICAgICAgICAgICAgY29uc3Qgb3ZlckxlZnQgPSB3aXRoaW5PZmZzZXQgLSBjb2xsaXNpb25Qb3NMZWZ0O1xuICAgICAgICAgICAgY29uc3Qgb3ZlclJpZ2h0ID0gY29sbGlzaW9uUG9zTGVmdCArIGRhdGEuY29sbGlzaW9uV2lkdGggLSBvdXRlcldpZHRoIC0gd2l0aGluT2Zmc2V0O1xuICAgICAgICAgICAgbGV0IG5ld092ZXJSaWdodDtcblxuICAgICAgICAgICAgaWYgKGRhdGEuY29sbGlzaW9uV2lkdGggPiBvdXRlcldpZHRoKSB7XG4gICAgICAgICAgICAgICAgaWYgKG92ZXJMZWZ0ID4gMCAmJiBvdmVyUmlnaHQgPD0wKSB7XG4gICAgICAgICAgICAgICAgICAgIG5ld092ZXJSaWdodCA9IHBvc2l0aW9uLmxlZnQgKyBvdmVyTGVmdCArIGRhdGEuY29sbGlzaW9uV2lkdGggLSBvdXRlcldpZHRoIC0gd2l0aGluT2Zmc2V0O1xuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbi5sZWZ0ICs9IG92ZXJMZWZ0IC0gbmV3T3ZlclJpZ2h0O1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAob3ZlclJpZ2h0ID4gMCAmJiBvdmVyTGVmdCA8PTApIHtcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb24ubGVmdCA9IHdpdGhpbk9mZnNldDtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKG92ZXJMZWZ0ID4gb3ZlclJpZ2h0KSB7XG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uLmxlZnQgPSB3aXRoaW5PZmZzZXQgKyBvdXRlcldpZHRoIC0gZGF0YS5jb2xsaXNpb25XaWR0aDtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbi5sZWZ0ID0gd2l0aGluT2Zmc2V0O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSBpZiAob3ZlckxlZnQgPiAwKSB7XG4gICAgICAgICAgICAgICAgcG9zaXRpb24ubGVmdCArPSBvdmVyTGVmdDtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAob3ZlclJpZ2h0ID4gMCkge1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uLmxlZnQgLT0gb3ZlclJpZ2h0O1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbi5sZWZ0ID0gbWF4KHBvc2l0aW9uLmxlZnQgLSBjb2xsaXNpb25Qb3NMZWZ0LCBwb3NpdGlvbi5sZWZ0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcblxuICAgICAgICB0b3AocG9zaXRpb24sIGRhdGEpIHtcbiAgICAgICAgICAgIGNvbnN0IHdpdGhpbiA9IGRhdGEud2l0aGluO1xuICAgICAgICAgICAgY29uc3Qgd2l0aGluT2Zmc2V0ID0gd2l0aGluLmlzV2luZG93ID8gd2l0aGluLnNjcm9sbFRvcCA6IHdpdGhpbi5vZmZzZXQudG9wO1xuICAgICAgICAgICAgY29uc3Qgb3V0ZXJIZWlnaHQgPSBkYXRhLndpdGhpbi5oZWlnaHQ7XG4gICAgICAgICAgICBjb25zdCBjb2xsaXNpb25Qb3NUb3AgPSBwb3NpdGlvbi50b3AgLSBkYXRhLmNvbGxpc2lvblBvc2l0aW9uLm1hcmdpblRvcDtcbiAgICAgICAgICAgIGNvbnN0IG92ZXJUb3AgPSB3aXRoaW5PZmZzZXQgLSBjb2xsaXNpb25Qb3NUb3A7XG4gICAgICAgICAgICBjb25zdCBvdmVyQm90dG9tID0gY29sbGlzaW9uUG9zVG9wICsgZGF0YS5jb2xsaXNpb25IZWlnaHQgLSBvdXRlckhlaWdodCAtIHdpdGhpbk9mZnNldDtcbiAgICAgICAgICAgIGxldCBuZXdPdmVyQm90dG9tO1xuXG4gICAgICAgICAgICBpZiAoZGF0YS5jb2xsaXNpb25IZWlnaHQgPiBvdXRlckhlaWdodCkge1xuICAgICAgICAgICAgICAgIGlmIChvdmVyVG9wID4gMCAmJiBvdmVyQm90dG9tIDw9IDApIHtcbiAgICAgICAgICAgICAgICAgICAgbmV3T3ZlckJvdHRvbSA9IHBvc2l0aW9uLnRvcCArIG92ZXJUb3AgKyBkYXRhLmNvbGxpc2lvbkhlaWdodCAtIG91dGVySGVpZ2h0IC0gd2l0aGluT2Zmc2V0O1xuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbi50b3AgKz0gb3ZlclRvcCAtIG5ld092ZXJCb3R0b207XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChvdmVyQm90dG9tID4gMCAmJiBvdmVyVG9wIDw9IDApIHtcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb24udG9wID0gd2l0aGluT2Zmc2V0O1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAob3ZlclRvcCA+IG92ZXJCb3R0b20pIHtcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb24udG9wID0gd2l0aGluT2Zmc2V0ICsgb3V0ZXJIZWlnaHQgLSBkYXRhLmNvbGxpc2lvbkhlaWdodDtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbi50b3AgPSB3aXRoaW5PZmZzZXQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIGlmIChvdmVyVG9wID4gMCkge1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uLnRvcCArPSBvdmVyVG9wO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChvdmVyQm90dG9tID4gMCkge1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uLnRvcCAtPSBvdmVyQm90dG9tO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbi50b3AgPSBtYXgocG9zaXRpb24udG9wIC0gY29sbGlzaW9uUG9zVG9wLCBwb3NpdGlvbi50b3ApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSxcblxuICAgIGZsaXA6IHtcbiAgICAgICAgbGVmdChwb3NpdGlvbiwgZGF0YSkge1xuICAgICAgICAgICAgY29uc3Qgd2l0aGluID0gZGF0YS53aXRoaW47XG4gICAgICAgICAgICBjb25zdCB3aXRoaW5PZmZzZXQgPSB3aXRoaW4ub2Zmc2V0LmxlZnQgKyB3aXRoaW4uc2Nyb2xsTGVmdDtcbiAgICAgICAgICAgIGNvbnN0IG91dGVyV2lkdGggPSB3aXRoaW4ud2lkdGg7XG4gICAgICAgICAgICBjb25zdCBvZmZzZXRMZWZ0ID0gd2l0aGluLmlzV2luZG93ID8gd2l0aGluLnNjcm9sbExlZnQgOiB3aXRoaW4ub2Zmc2V0LmxlZnQ7XG4gICAgICAgICAgICBjb25zdCBjb2xsaXNpb25Qb3NMZWZ0ID0gcG9zaXRpb24ubGVmdCAtIGRhdGEuY29sbGlzaW9uUG9zaXRpb24ubWFyZ2luTGVmdDtcbiAgICAgICAgICAgIGNvbnN0IG92ZXJMZWZ0ID0gY29sbGlzaW9uUG9zTGVmdCAtIG9mZnNldExlZnQ7XG4gICAgICAgICAgICBjb25zdCBvdmVyUmlnaHQgPSBjb2xsaXNpb25Qb3NMZWZ0ICsgZGF0YS5jb2xsaXNpb25XaWR0aCAtIG91dGVyV2lkdGggLSBvZmZzZXRMZWZ0O1xuICAgICAgICAgICAgY29uc3QgbXlPZmZzZXQgPSBkYXRhLm15WzBdID09PSAnbGVmdCcgPyBcbiAgICAgICAgICAgICAgICAtZGF0YS5lbGVtV2lkdGggOlxuICAgICAgICAgICAgICAgIGRhdGEubXlbMF0gPT09ICdyaWdodCcgP1xuICAgICAgICAgICAgICAgICAgICBkYXRhLmVsZW1XaWR0aCA6IDA7XG4gICAgICAgICAgICBjb25zdCBhdE9mZnNldCA9IGRhdGEuYXRbMF0gPT09ICdsZWZ0JyA/XG4gICAgICAgICAgICAgICAgZGF0YS50YXJnZXRXaWR0aCA6XG4gICAgICAgICAgICAgICAgZGF0YS5hdFswXSA9PT0gJ3JpZ2h0JyA/XG4gICAgICAgICAgICAgICAgICAgIC1kYXRhLnRhcmdldFdpZHRoIDogMDtcbiAgICAgICAgICAgIGNvbnN0IG9mZnNldCA9IC0yICogZGF0YS5vZmZzZXRbMF07XG4gICAgICAgICAgICBsZXQgbmV3T3ZlclJpZ2h0O1xuICAgICAgICAgICAgbGV0IG5ld092ZXJMZWZ0O1xuXG4gICAgICAgICAgICBpZiAob3ZlckxlZnQgPCAwKSB7XG4gICAgICAgICAgICAgICAgbmV3T3ZlclJpZ2h0ID0gcG9zaXRpb24ubGVmdCArIG15T2Zmc2V0ICsgYXRPZmZzZXQgKyBvZmZzZXQgKyBkYXRhLmNvbGxpc2lvbldpZHRoIC0gb3V0ZXJXaWR0aCAtIHdpdGhpbk9mZnNldDtcbiAgICAgICAgICAgICAgICBpZiAobmV3T3ZlclJpZ2h0IDwgMCB8fCBuZXdPdmVyUmlnaHQgPCBhYnMob3ZlckxlZnQpKSB7XG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uLmxlZnQgKz0gbXlPZmZzZXQgKyBhdE9mZnNldCArIG9mZnNldDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2UgaWYgKG92ZXJSaWdodCA+IDApIHtcbiAgICAgICAgICAgICAgICBuZXdPdmVyTGVmdCA9IHBvc2l0aW9uLmxlZnQgLSBkYXRhLmNvbGxpc2lvblBvc2l0aW9uLm1hcmdpbkxlZnQgKyBteU9mZnNldCArIGF0T2Zmc2V0ICsgb2Zmc2V0IC0gb2Zmc2V0TGVmdDtcbiAgICAgICAgICAgICAgICAvLyB0aGUgc2FtZSB0byB0b3BcbiAgICAgICAgICAgICAgICAvLyBpZiAobmV3T3ZlckxlZnQgPiAwIHx8IGFicyhuZXdPdmVyTGVmdCkgPCBvdmVyUmlnaHQpIHtcbiAgICAgICAgICAgICAgICBpZiAobmV3T3ZlckxlZnQgPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uLmxlZnQgKz0gbXlPZmZzZXQgKyBhdE9mZnNldCArIG9mZnNldDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgdG9wKHBvc2l0aW9uLCBkYXRhKSB7XG4gICAgICAgICAgICBjb25zdCB3aXRoaW4gPSBkYXRhLndpdGhpbjtcbiAgICAgICAgICAgIGNvbnN0IHdpdGhpbk9mZnNldCA9IHdpdGhpbi5vZmZzZXQudG9wICsgd2l0aGluLnNjcm9sbFRvcDtcbiAgICAgICAgICAgIGNvbnN0IG91dGVySGVpZ2h0ID0gd2l0aGluLmhlaWdodDtcbiAgICAgICAgICAgIGNvbnN0IG9mZnNldFRvcCA9IHdpdGhpbi5pc1dpbmRvdyA/IHdpdGhpbi5zY3JvbGxUb3AgOiB3aXRoaW4ub2Zmc2V0LnRvcDtcbiAgICAgICAgICAgIGNvbnN0IGNvbGxpc2lvblBvc1RvcCA9IHBvc2l0aW9uLnRvcCAtIGRhdGEuY29sbGlzaW9uUG9zaXRpb24ubWFyZ2luVG9wO1xuICAgICAgICAgICAgY29uc3Qgb3ZlclRvcCA9IGNvbGxpc2lvblBvc1RvcCAtIG9mZnNldFRvcDtcbiAgICAgICAgICAgIGNvbnN0IG92ZXJCb3R0b20gPSBjb2xsaXNpb25Qb3NUb3AgKyBkYXRhLmNvbGxpc2lvbkhlaWdodCAtIG91dGVySGVpZ2h0IC0gb2Zmc2V0VG9wOyBcbiAgICAgICAgICAgIGNvbnN0IG15T2Zmc2V0ID0gZGF0YS5teVsxXSA9PT0gJ3RvcCcgP1xuICAgICAgICAgICAgICAgIC1kYXRhLmVsZW1IZWlnaHQgOlxuICAgICAgICAgICAgICAgIGRhdGEubXlbMV0gPT09ICdib3R0b20nID9cbiAgICAgICAgICAgICAgICAgICAgZGF0YS5lbGVtSGVpZ2h0IDogMDtcbiAgICAgICAgICAgIGNvbnN0IGF0T2Zmc2V0ID0gZGF0YS5hdFsxXSA9PT0gJ3RvcCcgP1xuICAgICAgICAgICAgICAgIGRhdGEudGFyZ2V0SGVpZ2h0IDpcbiAgICAgICAgICAgICAgICBkYXRhLmF0WzFdID09PSAnYm90dG9tJyA/XG4gICAgICAgICAgICAgICAgICAgIC1kYXRhLnRhcmdldEhlaWdodCA6IDA7XG4gICAgICAgICAgICBjb25zdCBvZmZzZXQgPSAtMiAqIGRhdGEub2Zmc2V0WzFdO1xuICAgICAgICAgICAgbGV0IG5ld092ZXJUb3A7XG4gICAgICAgICAgICBsZXQgbmV3T3ZlckJvdHRvbTtcblxuICAgICAgICAgICAgaWYgKG92ZXJUb3AgPCAwKSB7XG4gICAgICAgICAgICAgICAgbmV3T3ZlckJvdHRvbSA9IHBvc2l0aW9uLnRvcCArIG15T2Zmc2V0ICsgYXRPZmZzZXQgKyBvZmZzZXQgKyBkYXRhLmNvbGxpc2lvbkhlaWdodCAtIG91dGVySGVpZ2h0IC0gd2l0aGluT2Zmc2V0O1xuICAgICAgICAgICAgICAgIGlmIChuZXdPdmVyQm90dG9tIDwgMCB8fCBuZXdPdmVyQm90dG9tIDwgYWJzKG92ZXJUb3ApKSB7XG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uLnRvcCArPSBteU9mZnNldCArIGF0T2Zmc2V0ICsgb2Zmc2V0O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSBpZiAob3ZlckJvdHRvbSA+IDApIHtcbiAgICAgICAgICAgICAgICBuZXdPdmVyVG9wID0gcG9zaXRpb24udG9wIC0gZGF0YS5jb2xsaXNpb25Qb3NpdGlvbi5tYXJnaW5Ub3AgKyBteU9mZnNldCArIGF0T2Zmc2V0ICsgb2Zmc2V0IC0gb2Zmc2V0VG9wO1xuICAgICAgICAgICAgICAgIC8vIGJlY2F1c2Ugd2luZG93IGNhbiBzY3JvbGwgZG93biwgd2hlbiBpdCBiZXlvbmQgdGhlIHRvcCBib3JkZXIsXG4gICAgICAgICAgICAgICAgLy8gd2UgY2FuIG5vdCBzY3JvbGwgaXQgdG8gdmlldy4gRG9uJ3QgZmxpcCBpdCBpbiB0aGlzIGNhc2VcbiAgICAgICAgICAgICAgICAvLyBpZiAobmV3T3ZlclRvcCA+IDAgfHwgYWJzKG5ld092ZXJUb3ApIDwgb3ZlckJvdHRvbSkge1xuICAgICAgICAgICAgICAgIGlmIChuZXdPdmVyVG9wID4gMCkge1xuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbi50b3AgKz0gbXlPZmZzZXQgKyBhdE9mZnNldCArIG9mZnNldDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgZmxpcGZpdDoge1xuICAgICAgICBsZWZ0KC4uLmFyZ3MpIHtcbiAgICAgICAgICAgIHJ1bGVzLmZsaXAubGVmdCguLi5hcmdzKTtcbiAgICAgICAgICAgIHJ1bGVzLmZpdC5sZWZ0KC4uLmFyZ3MpO1xuICAgICAgICB9LFxuXG4gICAgICAgIHRvcCguLi5hcmdzKSB7XG4gICAgICAgICAgICBydWxlcy5mbGlwLnRvcCguLi5hcmdzKTtcbiAgICAgICAgICAgIHJ1bGVzLmZpdC50b3AoLi4uYXJncyk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cblxuZXhwb3J0IHtwb3NpdGlvbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL21vdmVXcmFwcGVyL3Bvc2l0aW9uLmpzIiwiaW1wb3J0IEludGFjdCBmcm9tICdpbnRhY3QnO1xuaW1wb3J0IHRlbXBsYXRlIGZyb20gJy4vZ3JvdXAudmR0JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgT3B0aW9uR3JvdXAgZXh0ZW5kcyBJbnRhY3Qge1xuICAgIEBJbnRhY3QudGVtcGxhdGUoKVxuICAgIHN0YXRpYyB0ZW1wbGF0ZSA9IHRlbXBsYXRlO1xufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9zZWxlY3QvZ3JvdXAuanMiLCJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKG9iaiwgX1ZkdCwgYmxvY2tzLCAkY2FsbGVlKSB7XG5fVmR0IHx8IChfVmR0ID0gVmR0KTtcbm9iaiB8fCAob2JqID0ge30pO1xuYmxvY2tzIHx8IChibG9ja3MgPSB7fSk7XG52YXIgaCA9IF9WZHQubWlzcy5oLCBoYyA9IF9WZHQubWlzcy5oYywgaHUgPSBfVmR0Lm1pc3MuaHUsIHdpZGdldHMgPSB0aGlzICYmIHRoaXMud2lkZ2V0cyB8fCB7fSwgX2Jsb2NrcyA9IHt9LCBfX2Jsb2NrcyA9IHt9LFxuX191ID0gX1ZkdC51dGlscywgZXh0ZW5kID0gX191LmV4dGVuZCwgX2UgPSBfX3UuZXJyb3IsIF9jbGFzc05hbWUgPSBfX3UuY2xhc3NOYW1lLFxuX19vID0gX191Lk9wdGlvbnMsIF9nZXRNb2RlbCA9IF9fby5nZXRNb2RlbCwgX3NldE1vZGVsID0gX19vLnNldE1vZGVsLFxuX3NldENoZWNrYm94TW9kZWwgPSBfX3Uuc2V0Q2hlY2tib3hNb2RlbCwgX2RldGVjdENoZWNrYm94Q2hlY2tlZCA9IF9fdS5kZXRlY3RDaGVja2JveENoZWNrZWQsXG5fc2V0U2VsZWN0TW9kZWwgPSBfX3Uuc2V0U2VsZWN0TW9kZWwsXG5zZWxmID0gdGhpcy5kYXRhLCAkdGhpcyA9IHRoaXMsIHNjb3BlID0gb2JqLCBBbmltYXRlID0gc2VsZiAmJiBzZWxmLkFuaW1hdGUsIHBhcmVudCA9ICgkY2FsbGVlIHx8IHt9KS5fc3VwZXJcbmNvbnN0IHtjaGlsZHJlbiwgbGFiZWx9ID0gc2VsZi5nZXQoKTtcblxucmV0dXJuIGgoJ2RpdicsIG51bGwsIFtoKCdkaXYnLCBudWxsLCBmdW5jdGlvbigpIHt0cnkge3JldHVybiBbbGFiZWwgXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKSwgJ2stbGFiZWwnKSwgJ1xcbiAgICAnLCBmdW5jdGlvbigpIHt0cnkge3JldHVybiBbY2hpbGRyZW4gXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKSwgJ1xcbiddLCAnay1ncm91cCcpXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9zZWxlY3QvZ3JvdXAudmR0IiwiaW1wb3J0IEludGFjdCBmcm9tICdpbnRhY3QnO1xuaW1wb3J0IHRlbXBsYXRlIGZyb20gJy4vaW5kZXgudmR0JztcbmltcG9ydCAnLi4vLi4vc3R5bGVzL2twYy5zdHlsJztcbmltcG9ydCAnLi9pbmRleC5zdHlsJztcbmltcG9ydCBPcHRpb24gZnJvbSAnLi9vcHRpb24nO1xuaW1wb3J0IEdyb3VwIGZyb20gJy4vZ3JvdXAnO1xuaW1wb3J0IHtzZWxlY3RJbnB1dCwgXyR9IGZyb20gJy4uL3V0aWxzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2VsZWN0IGV4dGVuZHMgSW50YWN0IHtcbiAgICBASW50YWN0LnRlbXBsYXRlKClcbiAgICBzdGF0aWMgdGVtcGxhdGUgPSB0ZW1wbGF0ZTtcblxuICAgIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgICAgIG11bHRpcGxlOiBCb29sZWFuLFxuICAgICAgICBkaXNhYmxlZDogQm9vbGVhbixcbiAgICAgICAgY2xlYXJhYmxlOiBCb29sZWFuLFxuICAgICAgICBmaWx0ZXJhYmxlOiBCb29sZWFuLFxuICAgICAgICBmbHVpZDogQm9vbGVhbixcbiAgICAgICAgYWxsb3dVbm1hdGNoOiBCb29sZWFuLFxuICAgIH07XG5cbiAgICBkZWZhdWx0cygpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGRhdGE6IFtdLFxuICAgICAgICAgICAgdmFsdWU6ICcnLFxuICAgICAgICAgICAgbXVsdGlwbGU6IGZhbHNlLCAvL+aUr+aMgeWkmumAiWxpXG4gICAgICAgICAgICBkaXNhYmxlZDogZmFsc2UsXG4gICAgICAgICAgICBjbGVhcmFibGU6IGZhbHNlLCAvLyDmmK/lkKblj6/muIXnqbogXG4gICAgICAgICAgICBmaWx0ZXJhYmxlOiBmYWxzZSwgLy8g5pCc57Si562b6YCJXG4gICAgICAgICAgICBrZXl3b3JkczogdW5kZWZpbmVkLFxuICAgICAgICAgICAgcGxhY2Vob2xkZXI6IHVuZGVmaW5lZCxcbiAgICAgICAgICAgIHNpemU6ICdkZWZhdWx0JyxcbiAgICAgICAgICAgIGZsdWlkOiBmYWxzZSxcbiAgICAgICAgICAgIHdpZHRoOiB1bmRlZmluZWQsXG4gICAgICAgICAgICBhbGxvd1VubWF0Y2g6IGZhbHNlLFxuXG4gICAgICAgICAgICBfc2hvdzogZmFsc2UsXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBfaW5pdCgpIHtcbiAgICAgICAgdGhpcy5vbignJGNoYW5nZWQ6dmFsdWUnLCAoKSA9PiB7XG4gICAgICAgICAgICBpZiAodGhpcy5nZXQoJ211bHRpcGxlJykgJiYgdGhpcy5nZXQoJ19zaG93JykpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnJlZnMubWVudS5wb3NpdGlvbigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBfb25DbGVhcihlKSB7XG4gICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgIHRoaXMuc2V0KCd2YWx1ZScsICcnKTtcbiAgICB9XG5cbiAgICBfb25TZWxlY3QodmFsdWUpIHtcbiAgICAgICAgaWYgKCF0aGlzLmdldCgnbXVsdGlwbGUnKSkge1xuICAgICAgICAgICAgdGhpcy5zZXQoJ3ZhbHVlJywgdmFsdWUsIHthc3luYzogdHJ1ZX0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbGV0IHZhbHVlcyA9IHRoaXMuZ2V0KCd2YWx1ZScpO1xuICAgICAgICAgICAgaWYgKCFBcnJheS5pc0FycmF5KHZhbHVlcykpIHtcbiAgICAgICAgICAgICAgICB2YWx1ZXMgPSBbXTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdmFsdWVzID0gdmFsdWVzLnNsaWNlKDApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgaW5kZXggPSB2YWx1ZXMuaW5kZXhPZih2YWx1ZSk7XG4gICAgICAgICAgICBpZiAofmluZGV4KSB7XG4gICAgICAgICAgICAgICAgLy8gaWYgZmluZCwgZGVsZXRlIGl0XG4gICAgICAgICAgICAgICAgdmFsdWVzLnNwbGljZShpbmRleCwgMSk7IFxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB2YWx1ZXMucHVzaCh2YWx1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLnNldCgndmFsdWUnLCB2YWx1ZXMsIHthc3luYzogdHJ1ZX0pO1xuICAgICAgICAgICAgdGhpcy5fZm9jdXNJbnB1dCgpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX3Jlc2V0U2VhcmNoKCk7XG4gICAgfVxuXG4gICAgX29uU2VhcmNoKGUpIHtcbiAgICAgICAgdGhpcy5zZXQoJ2tleXdvcmRzJywgZS50YXJnZXQudmFsdWUudHJpbSgpKTtcbiAgICAgICAgLy8gYWx3YXlzIHNob3cgbWVudSBvbiBzZWFyY2hpbmdcbiAgICAgICAgdGhpcy5yZWZzLm1lbnUuc2hvdygpO1xuICAgICAgICB0aGlzLnJlZnMubWVudS5mb2N1c0l0ZW1CeUluZGV4KDApO1xuICAgICAgICAvLyB0aGUgcG9zaXRpb24gbWF5IGJlIGZsaXAsIGFuZCB0aGUgc2VsZWN0IGlucHV0IGhlaWdodCBteSBjaGFuZ2UgaGVpZ2h0IHRvbyxcbiAgICAgICAgLy8gc28gd2Ugc2hvdWxkIHJlc2V0IHRoZSBwb3NpdGlvblxuICAgICAgICB0aGlzLnJlZnMubWVudS5wb3NpdGlvbigpO1xuICAgIH1cblxuICAgIF9yZXNldFNlYXJjaCgpIHtcbiAgICAgICAgdGhpcy5zZXQoJ2tleXdvcmRzJywgdW5kZWZpbmVkLCB7YXN5bmM6IHRydWV9KTtcbiAgICB9XG5cbiAgICBfb25DaGFuZ2VTaG93KGMsIHZhbHVlKSB7XG4gICAgICAgIHRoaXMuc2V0KCdfc2hvdycsIHZhbHVlKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAYnJpZWYgbGV0IHRoZSBibHVyIG1ldGhvZCBjYWxsZWQgYWZ0ZXIgc2VsZWN0XG4gICAgICogaWYgd2Ugc2VsZWN0ZWQgdGhlIG9wdGlvbiwgdGhlbiB0aGUga2V5d29yZHMgaGFzIGJlZW4gc2V0IHRvIHVuZGVmaW5kXG4gICAgICogaW4gdGhpcyBjYXNlLCB3ZSBkbyBub3RoaW5nLCBvdGhlcndpc2Ugd2UgcmVzZXQgaXRcbiAgICAgKi9cbiAgICBfb25CbHVyKCkge1xuICAgICAgICBjb25zdCB7a2V5d29yZHMsIGFsbG93VW5tYXRjaH0gPSB0aGlzLmdldCgpO1xuICAgICAgICBpZiAoYWxsb3dVbm1hdGNoICYmIGtleXdvcmRzICE9IG51bGwpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0KHtcbiAgICAgICAgICAgICAgICB2YWx1ZToga2V5d29yZHMsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMudGltZXIgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIGlmICh0aGlzLmdldCgna2V5d29yZHMnKSAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fcmVzZXRTZWFyY2goKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwgMjAwKTtcbiAgICB9XG5cbiAgICBfc2VsZWN0SW5wdXQoZSkge1xuICAgICAgICBzZWxlY3RJbnB1dChlLnRhcmdldCk7IFxuICAgIH1cblxuICAgIF9vbkZvY3VzKGUpIHtcbiAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMudGltZXIpO1xuICAgIH1cblxuICAgIF9vbkZvY3Vzb3V0KCkge1xuICAgICAgICB0aGlzLnJlZnMuZHJvcGRvd24uaGlkZSgpO1xuICAgIH1cblxuICAgIF9kZWxldGUodmFsdWUsIGUpIHtcbiAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgY29uc3QgdmFsdWVzID0gdGhpcy5nZXQoJ3ZhbHVlJykuc2xpY2UoMCk7XG4gICAgICAgIGNvbnN0IGluZGV4ID0gdmFsdWVzLmluZGV4T2YodmFsdWUpO1xuICAgICAgICB2YWx1ZXMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgdGhpcy5zZXQoJ3ZhbHVlJywgdmFsdWVzKTtcbiAgICAgICAgdGhpcy5fZm9jdXNJbnB1dCgpO1xuICAgIH1cblxuICAgIF9mb2N1c0lucHV0KCkge1xuICAgICAgICBpZiAodGhpcy5nZXQoJ2ZpbHRlcmFibGUnKSkge1xuICAgICAgICAgICAgdGhpcy5yZWZzLmlucHV0LmZvY3VzKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBfcG9zaXRpb24oKSB7XG4gICAgICAgIGNvbnN0IG1lbnVFbGVtZW50ID0gdGhpcy5yZWZzLm1lbnUudmR0LnZOb2RlLmNoaWxkcmVuLmVsZW1lbnQ7XG4gICAgICAgIGNvbnN0IHdpZHRoID0gdGhpcy5lbGVtZW50Lm9mZnNldFdpZHRoO1xuICAgICAgICBjb25zdCBtZW51V2lkdGggPSBtZW51RWxlbWVudC5vZmZzZXRXaWR0aDtcbiAgICAgICAgaWYgKHdpZHRoID4gbWVudVdpZHRoKSB7XG4gICAgICAgICAgICBtZW51RWxlbWVudC5zdHlsZS53aWR0aCA9IGAke3dpZHRofXB4YDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIF9vbktleXByZXNzKGUpIHtcbiAgICAgICAgaWYgKGUua2V5Q29kZSA9PT0gMTMpIHtcbiAgICAgICAgICAgIHRoaXMucmVmcy53cmFwcGVyLmNsaWNrKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBfb25LZXlkb3duKGUpIHtcbiAgICAgICAgaWYgKGUua2V5Q29kZSA9PT0gOSkgeyAvLyB0YWJcbiAgICAgICAgICAgIHRoaXMucmVmcy5kcm9wZG93bi5oaWRlKCk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmV4cG9ydCB7U2VsZWN0LCBPcHRpb24sIEdyb3VwIGFzIE9wdGlvbkdyb3VwfTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvc2VsZWN0L2luZGV4LmpzIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cbiAgICBpZihtb2R1bGUuaG90KSB7XG4gICAgICAvLyAxNTI3NTc2Njc5MTc4XG4gICAgICB2YXIgY3NzUmVsb2FkID0gcmVxdWlyZShcIiEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWhvdC1sb2FkZXIvaG90TW9kdWxlUmVwbGFjZW1lbnQuanNcIikobW9kdWxlLmlkLCB7XCJmaWxlTWFwXCI6XCJ7ZmlsZU5hbWV9XCJ9KTtcbiAgICAgIG1vZHVsZS5ob3QuZGlzcG9zZShjc3NSZWxvYWQpO1xuICAgICAgbW9kdWxlLmhvdC5hY2NlcHQodW5kZWZpbmVkLCBjc3NSZWxvYWQpO1xuICAgIH1cbiAgXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9jb21wb25lbnRzL3NlbGVjdC9pbmRleC5zdHlsXG4vLyBtb2R1bGUgaWQgPSAuL2NvbXBvbmVudHMvc2VsZWN0L2luZGV4LnN0eWxcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiIsImltcG9ydCBJbnB1dCBmcm9tICcuLi9pbnB1dCc7aW1wb3J0IERyb3Bkb3duLCB7RHJvcGRvd25JdGVtLCBEcm9wZG93bk1lbnV9IGZyb20gJy4uL2Ryb3Bkb3duJztpbXBvcnQge2lzU3RyaW5nT3JOdW1iZXIsIGdldFRleHRCeUNoaWxkcmVuLCBhZGRTdHlsZSwgXyR9IGZyb20gJy4uL3V0aWxzJztpbXBvcnQgT3B0aW9uIGZyb20gJy4vb3B0aW9uJztpbXBvcnQgT3B0aW9uR3JvdXAgZnJvbSAnLi9ncm91cCc7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihvYmosIF9WZHQsIGJsb2NrcywgJGNhbGxlZSkge1xuX1ZkdCB8fCAoX1ZkdCA9IFZkdCk7XG5vYmogfHwgKG9iaiA9IHt9KTtcbmJsb2NrcyB8fCAoYmxvY2tzID0ge30pO1xudmFyIGggPSBfVmR0Lm1pc3MuaCwgaGMgPSBfVmR0Lm1pc3MuaGMsIGh1ID0gX1ZkdC5taXNzLmh1LCB3aWRnZXRzID0gdGhpcyAmJiB0aGlzLndpZGdldHMgfHwge30sIF9ibG9ja3MgPSB7fSwgX19ibG9ja3MgPSB7fSxcbl9fdSA9IF9WZHQudXRpbHMsIGV4dGVuZCA9IF9fdS5leHRlbmQsIF9lID0gX191LmVycm9yLCBfY2xhc3NOYW1lID0gX191LmNsYXNzTmFtZSxcbl9fbyA9IF9fdS5PcHRpb25zLCBfZ2V0TW9kZWwgPSBfX28uZ2V0TW9kZWwsIF9zZXRNb2RlbCA9IF9fby5zZXRNb2RlbCxcbl9zZXRDaGVja2JveE1vZGVsID0gX191LnNldENoZWNrYm94TW9kZWwsIF9kZXRlY3RDaGVja2JveENoZWNrZWQgPSBfX3UuZGV0ZWN0Q2hlY2tib3hDaGVja2VkLFxuX3NldFNlbGVjdE1vZGVsID0gX191LnNldFNlbGVjdE1vZGVsLFxuc2VsZiA9IHRoaXMuZGF0YSwgJHRoaXMgPSB0aGlzLCBzY29wZSA9IG9iaiwgQW5pbWF0ZSA9IHNlbGYgJiYgc2VsZi5BbmltYXRlLCBwYXJlbnQgPSAoJGNhbGxlZSB8fCB7fSkuX3N1cGVyXG5cblxuXG5cblxuXG5jb25zdCB7XG4gICAgY2xhc3NOYW1lLCBjbGVhcmFibGUsIGRhdGEsIHZhbHVlLCBtdWx0aXBsZSxcbiAgICBkaXNhYmxlZCwgZmlsdGVyYWJsZSwga2V5d29yZHMsIF9zaG93LFxuICAgIHBsYWNlaG9sZGVyLCBzaXplLCBzdHlsZSwgbmFtZSwgY2hpbGRyZW4sXG4gICAgZmx1aWQsIHdpZHRoLCBhbGxvd1VubWF0Y2gsXG59ID0gc2VsZi5nZXQoKTtcblxuY29uc3QgX3BsYWNlaG9sZGVyID0gcGxhY2Vob2xkZXIgPT0gbnVsbCA/XG4gICAgKGFsbG93VW5tYXRjaCAmJiBmaWx0ZXJhYmxlKSA/IF8kKCfor7fovpPlhaXmiJbpgInmi6knKSA6IF8kKCfor7fpgInmi6knKSA6XG4gICAgcGxhY2Vob2xkZXI7XG5cbmNvbnN0IGNsYXNzTmFtZU9iaiA9IHtcbiAgICAnay1zZWxlY3QnOiB0cnVlLFxuICAgIFtjbGFzc05hbWVdOiBjbGFzc05hbWUsXG4gICAgJ2stZGlzYWJsZWQnOiBkaXNhYmxlZCxcbiAgICAnay1zaG93JzogX3Nob3csXG4gICAgJ2stY2xlYXJhYmxlJzogY2xlYXJhYmxlLFxuICAgIFtgay0ke3NpemV9YF06IHNpemUgIT09ICdkZWZhdWx0JyxcbiAgICAnay1mbHVpZCc6IGZsdWlkLFxufTtcblxubGV0IGhhc1ZhbHVlID0gdmFsdWUgIT0gbnVsbCAmJiAoIW11bHRpcGxlICYmIHZhbHVlICE9PSAnJyB8fCBtdWx0aXBsZSAmJiB2YWx1ZS5sZW5ndGgpO1xuY29uc3QgaXNHcm91cCA9IEFycmF5LmlzQXJyYXkoc2VsZi5nZXQoJ2RhdGEuMC5kYXRhJykpO1xuXG5sZXQgbGFiZWwgPSBpc1N0cmluZ09yTnVtYmVyKHZhbHVlKSA/IHZhbHVlIDogbnVsbDtcbmxldCBsYWJlbHMgPSBbXTtcblxuY29uc3QgaGFuZGxlUHJvcHMgPSBwcm9wcyA9PiB7XG4gICAgbGV0IGFjdGl2ZSA9IGZhbHNlO1xuICAgIGxldCB2YWxpZCA9IGZhbHNlO1xuXG4gICAgaWYgKCFtdWx0aXBsZSkge1xuICAgICAgICBpZiAocHJvcHMudmFsdWUgPT09IHZhbHVlKSB7XG4gICAgICAgICAgICAvLyBzZXQgbGFiZWxcbiAgICAgICAgICAgIGxhYmVsID0gcHJvcHMubGFiZWw7XG4gICAgICAgICAgICBhY3RpdmUgPSB0cnVlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICAgIGNvbnN0IGluZGV4ID0gdmFsdWUuaW5kZXhPZihwcm9wcy52YWx1ZSk7XG4gICAgICAgIGlmICh+aW5kZXgpIHtcbiAgICAgICAgICAgIC8vIGtlZXAgb3JkZXIgY29uc2lzdGVudFxuICAgICAgICAgICAgbGFiZWxzW2luZGV4XSA9IHByb3BzLmxhYmVsO1xuICAgICAgICAgICAgYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgbGV0IHRtcDtcbiAgICBpZiAoXG4gICAgICAgICFmaWx0ZXJhYmxlICYmIFxuICAgICAgICBwcm9wcy5sYWJlbCB8fCBcbiAgICAgICAga2V5d29yZHMgPT0gbnVsbCB8fCBcbiAgICAgICAgfnByb3BzLmxhYmVsLnRvTG93ZXJDYXNlKCkuaW5kZXhPZigodG1wID0ga2V5d29yZHMudG9Mb3dlckNhc2UoKSkpIHx8IFxuICAgICAgICAoXG4gICAgICAgICAgICBpc1N0cmluZ09yTnVtYmVyKHByb3BzLnZhbHVlKSAmJiBcbiAgICAgICAgICAgIH5TdHJpbmcocHJvcHMudmFsdWUpLnRvTG93ZXJDYXNlKCkuaW5kZXhPZih0bXApXG4gICAgICAgIClcbiAgICApIHtcbiAgICAgICAgdmFsaWQgPSB0cnVlOyBcbiAgICB9XG5cbiAgICByZXR1cm4ge2FjdGl2ZSwgdmFsaWR9O1xufTtcblxuY29uc3QgT3B0aW9ucyA9IHByb3BzID0+IHtcbiAgICBjb25zdCBkYXRhID0gcHJvcHMuZGF0YTtcbiAgICBjb25zdCByZXQgPSBbXTtcbiAgICBkYXRhLmZvckVhY2goKGl0ZW0sIGluZGV4KSA9PiB7XG4gICAgICAgIC8vIGRlcHJlY2F0ZSB0ZXh0LCB1c2UgbGFiZWwgaW5zdGVhZCBvZlxuICAgICAgICBpZiAoaXRlbS50ZXh0KSBpdGVtLmxhYmVsID0gaXRlbS50ZXh0O1xuICAgICAgICBcbiAgICAgICAgY29uc3Qge3ZhbGlkLCBhY3RpdmV9ID0gaGFuZGxlUHJvcHMoaXRlbSk7XG4gICAgICAgIGlmICh2YWxpZCkge1xuICAgICAgICAgICAgcmV0LnB1c2goXG4gICAgICAgICAgICAgICAgaChEcm9wZG93bkl0ZW0sIHsnZXYtc2VsZWN0JzogZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW3NlbGYuX29uU2VsZWN0LmJpbmQoc2VsZiwgaXRlbS52YWx1ZSkgXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKSwgJ2Rpc2FibGVkJzogZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW2l0ZW0uZGlzYWJsZWQgXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKSwgJ2NsYXNzTmFtZSc6IF9jbGFzc05hbWUoZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW3snay1hY3RpdmUnOiBhY3RpdmV9IF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcykpLCAnaGlkZU9uU2VsZWN0JzogZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gWyFtdWx0aXBsZSBdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpLCAnY2hpbGRyZW4nOiBmdW5jdGlvbigpIHt0cnkge3JldHVybiBbaXRlbS50ZW1wbGF0ZSA/IGl0ZW0udGVtcGxhdGUoaXRlbSwgaW5kZXgpIDogaXRlbS5sYWJlbCBdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpLCAnX2NvbnRleHQnOiAkdGhpc30pXG4gICAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gcmV0O1xufVxuXG5jb25zdCBPcHRpb25zVk5vZGVzID0gKHtjaGlsZHJlbn0pID0+IHtcbiAgICByZXR1cm4gX191Lm1hcChjaGlsZHJlbiA/IChBcnJheS5pc0FycmF5KGNoaWxkcmVuKSA/IGNoaWxkcmVuIDogW2NoaWxkcmVuXSkgOiBjaGlsZHJlbiwgdk5vZGUgPT4ge1xuICAgICAgICBpZiAodk5vZGUudGFnID09PSBPcHRpb24pIHtcbiAgICAgICAgICAgIGxldCBwcm9wcyA9IHZOb2RlLnByb3BzO1xuICAgICAgICAgICAgcHJvcHMgPSB7XG4gICAgICAgICAgICAgICAgLi4ucHJvcHMsIFxuICAgICAgICAgICAgICAgICdldi1zZWxlY3QnOiBzZWxmLl9vblNlbGVjdC5iaW5kKHNlbGYsIHByb3BzLnZhbHVlKSxcbiAgICAgICAgICAgICAgICBoaWRlT25TZWxlY3Q6ICFtdWx0aXBsZSxcbiAgICAgICAgICAgICAgICBsYWJlbDogcHJvcHMubGFiZWwgfHwgZ2V0VGV4dEJ5Q2hpbGRyZW4ocHJvcHMuY2hpbGRyZW4pLFxuICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBwcm9wcy5jaGlsZHJlbiB8fCBwcm9wcy5sYWJlbCBcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBjb25zdCB7YWN0aXZlLCB2YWxpZH0gPSBoYW5kbGVQcm9wcyhwcm9wcyk7XG4gICAgICAgICAgICBpZiAoIXZhbGlkKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGhjKCcnKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcHJvcHMuY2xhc3NOYW1lID0gX2NsYXNzTmFtZSh7XG4gICAgICAgICAgICAgICAgICAgIFtwcm9wcy5jbGFzc05hbWVdOiBwcm9wcy5jbGFzc05hbWUsXG4gICAgICAgICAgICAgICAgICAgICdrLWFjdGl2ZSc6IGFjdGl2ZSxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gcmV0dXJuIHRoZSBjbG9uZWQgdk5vZGVcbiAgICAgICAgICAgIHJldHVybiBoKE9wdGlvbiwgcHJvcHMpO1xuICAgICAgICB9IGVsc2UgaWYgKHZOb2RlLnRhZyA9PT0gT3B0aW9uR3JvdXApIHtcbiAgICAgICAgICAgIGxldCBwcm9wcyA9IHZOb2RlLnByb3BzO1xuICAgICAgICAgICAgcHJvcHMgPSB7XG4gICAgICAgICAgICAgICAgLi4ucHJvcHMsXG4gICAgICAgICAgICAgICAgY2hpbGRyZW46IGgoT3B0aW9uc1ZOb2RlcywgeydjaGlsZHJlbic6IGZ1bmN0aW9uKCkge3RyeSB7cmV0dXJuIFtwcm9wcy5jaGlsZHJlbiBdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpLCAnX2NvbnRleHQnOiAkdGhpc30pXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgcmV0dXJuIGgoT3B0aW9uR3JvdXAsIHByb3BzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB2Tm9kZTtcbiAgICB9KTsgXG59IFxuXG5jb25zdCBNZW51ID0gKFxuICAgIGgoRHJvcGRvd25NZW51LCB7J2V2LSRjaGFuZ2VkOnNob3cnOiBmdW5jdGlvbigpIHt0cnkge3JldHVybiBbc2VsZi5fcG9zaXRpb24gXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKSwgJ2NsYXNzTmFtZSc6ICdrLXNlbGVjdC1kcm9wZG93bicsICdldi0kY2hhbmdlOnNob3cnOiBmdW5jdGlvbigpIHt0cnkge3JldHVybiBbc2VsZi5fb25DaGFuZ2VTaG93IF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcyksICdjaGlsZHJlbic6IFtmdW5jdGlvbigpIHt0cnkge3JldHVybiBbIWlzR3JvdXAgXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKSA/IGgoT3B0aW9ucywgeydkYXRhJzogZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW2RhdGEgXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKSwgJ2NoaWxkcmVuJzogbnVsbCwgJ19jb250ZXh0JzogJHRoaXN9KSA6IF9WZHQudXRpbHMubWFwKGZ1bmN0aW9uKCkge3RyeSB7cmV0dXJuIFtkYXRhIF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcyksIGZ1bmN0aW9uKHZhbHVlLCBrZXkpIHtcbnJldHVybiBoKE9wdGlvbkdyb3VwLCB7J2xhYmVsJzogZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW3ZhbHVlLmxhYmVsIF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcyksICdjaGlsZHJlbic6IGgoT3B0aW9ucywgeydkYXRhJzogZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW3ZhbHVlLmRhdGEgXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKSwgJ2NoaWxkcmVuJzogbnVsbCwgJ19jb250ZXh0JzogJHRoaXN9KSwgJ19jb250ZXh0JzogJHRoaXN9KTtcbn0sIHRoaXMpLCBoKE9wdGlvbnNWTm9kZXMsIHsnY2hpbGRyZW4nOiBmdW5jdGlvbigpIHt0cnkge3JldHVybiBbY2hpbGRyZW4gXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKSwgJ19jb250ZXh0JzogJHRoaXN9KV0sICdfY29udGV4dCc6ICR0aGlzfSwgbnVsbCwgbnVsbCwgbnVsbCwgZnVuY3Rpb24oaSkge3dpZGdldHNbJ21lbnUnXSA9IGl9KVxuKTtcblxuLy8gaWYgdGhlIHZhbHVlIGlzIG5vdCBpbiBvcHRpb25zLCB0aGVuIHNldCBoYXNWYWx1ZSB0byBmYWxzZVxuaWYgKGhhc1ZhbHVlICYmICFsYWJlbCAmJiAhbGFiZWxzLmxlbmd0aCkge1xuICAgIGhhc1ZhbHVlID0gZmFsc2U7XG59XG5cbnJldHVybiBoKCdkaXYnLCB7J3N0eWxlJzogZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW3dpZHRoICE9IG51bGwgPyBhZGRTdHlsZShzdHlsZSwge3dpZHRoOiBgJHt3aWR0aH1weGB9KSA6IHN0eWxlIF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcyksICd0YWJpbmRleCc6IGZ1bmN0aW9uKCkge3RyeSB7cmV0dXJuIFtkaXNhYmxlZCA/IFwiLTFcIiA6IFwiMFwiIF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcyksICdldi1rZXlwcmVzcyc6IGZ1bmN0aW9uKCkge3RyeSB7cmV0dXJuIFtzZWxmLl9vbktleXByZXNzIF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcyksICdldi1rZXlkb3duJzogZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW3NlbGYuX29uS2V5ZG93biBdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpfSwgaChEcm9wZG93biwgeydwb3NpdGlvbic6IGZ1bmN0aW9uKCkge3RyeSB7cmV0dXJuIFt7bXk6ICdsZWZ0IHRvcCcsIGF0OiAnbGVmdCBib3R0b20nfSBdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpLCAndHJpZ2dlcic6ICdjbGljaycsICdkaXNhYmxlZCc6IGZ1bmN0aW9uKCkge3RyeSB7cmV0dXJuIFtkaXNhYmxlZCBdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpLCAnY2hpbGRyZW4nOiBbaCgnZGl2Jywgeydldi1jbGljayc6IGZ1bmN0aW9uKCkge3RyeSB7cmV0dXJuIFtzZWxmLl9mb2N1c0lucHV0IF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcyksICd0YWJpbmRleCc6ICctMSd9LCBbaCgnaW5wdXQnLCB7J3R5cGUnOiAnaGlkZGVuJywgJ3ZhbHVlJzogZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW3ZhbHVlIF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcyksICduYW1lJzogZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW25hbWUgXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKX0pLCBmdW5jdGlvbigpIHt0cnkge3JldHVybiBbIW11bHRpcGxlICYmIGZpbHRlcmFibGUgXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKSA/IGgoSW5wdXQsIHsndmFsdWUnOiBmdW5jdGlvbigpIHt0cnkge3JldHVybiBba2V5d29yZHMgPT0gbnVsbCA/IGxhYmVsIDoga2V5d29yZHMgXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKSwgJ2V2LWlucHV0JzogZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW3NlbGYuX29uU2VhcmNoIF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcyksICdldi1ibHVyJzogZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW3NlbGYuX29uQmx1ciBdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpLCAnZXYtZm9jdXMnOiBmdW5jdGlvbigpIHt0cnkge3JldHVybiBbc2VsZi5fc2VsZWN0SW5wdXQgXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKSwgJ2Rpc2FibGVkJzogZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW2Rpc2FibGVkIF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcyksICdwbGFjZWhvbGRlcic6IGZ1bmN0aW9uKCkge3RyeSB7cmV0dXJuIFtfcGxhY2Vob2xkZXIgXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKSwgJ3NpemUnOiBmdW5jdGlvbigpIHt0cnkge3JldHVybiBbc2l6ZSBdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpLCAnZmx1aWQnOiBmdW5jdGlvbigpIHt0cnkge3JldHVybiBbdHJ1ZV1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcyksICdjaGlsZHJlbic6IG51bGwsICdfY29udGV4dCc6ICR0aGlzfSwgbnVsbCwgbnVsbCwgbnVsbCwgZnVuY3Rpb24oaSkge3dpZGdldHNbJ2lucHV0J10gPSBpfSkgOiBmdW5jdGlvbigpIHt0cnkge3JldHVybiBbIWZpbHRlcmFibGUgJiYgIWhhc1ZhbHVlIF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcykgPyBoKCdzcGFuJywgbnVsbCwgZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW19wbGFjZWhvbGRlciBdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpLCAnay1wbGFjZWhvbGRlciBjLWVsbGlwc2lzJykgOiBmdW5jdGlvbigpIHt0cnkge3JldHVybiBbIW11bHRpcGxlIF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcykgPyBoKCdzcGFuJywgbnVsbCwgZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW2xhYmVsIF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcyksICdrLXZhbHVlIGMtZWxsaXBzaXMnKSA6IGgoQW5pbWF0ZSwgeydhOnRhZyc6ICdzcGFuJywgJ2E6ZGlzYWJsZWQnOiBmdW5jdGlvbigpIHt0cnkge3JldHVybiBbdHJ1ZV1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcyksICdjbGFzc05hbWUnOiAnay12YWx1ZXMnLCAnY2hpbGRyZW4nOiBbX1ZkdC51dGlscy5tYXAoZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW2xhYmVscyBdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpLCBmdW5jdGlvbihpdGVtLCBpbmRleCkge1xucmV0dXJuIGgoQW5pbWF0ZSwgeydhOnRhZyc6ICdzcGFuJywgJ2NsYXNzTmFtZSc6ICdrLXRhZycsICdrZXknOiBmdW5jdGlvbigpIHt0cnkge3JldHVybiBbdmFsdWVbaW5kZXhdIF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcyksICdhOnRyYW5zaXRpb24nOiAnZmFkZScsICdjaGlsZHJlbic6IFtoKCdzcGFuJywgbnVsbCwgZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW2l0ZW0gXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKSwgJ2stdGV4dCcpLCBoKCdpJywgeydldi1jbGljayc6IGZ1bmN0aW9uKCkge3RyeSB7cmV0dXJuIFtzZWxmLl9kZWxldGUuYmluZChzZWxmLCB2YWx1ZVtpbmRleF0pIF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcyl9LCBudWxsLCAnay1pY29uIGlvbi1pb3MtY2xvc2UtZW1wdHknKV0sICdfY29udGV4dCc6ICR0aGlzfSk7XG59LCB0aGlzKSwgZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW2ZpbHRlcmFibGUgXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKSA/IGgoSW5wdXQsIHsndmFsdWUnOiBmdW5jdGlvbigpIHt0cnkge3JldHVybiBba2V5d29yZHMgXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKSwgJ2V2LWlucHV0JzogZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW3NlbGYuX29uU2VhcmNoIF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcyksICdldi1ibHVyJzogZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW3NlbGYuX29uQmx1ciBdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpLCAnZXYtZm9jdXMnOiBmdW5jdGlvbigpIHt0cnkge3JldHVybiBbc2VsZi5fb25Gb2N1cyBdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpLCAnZGlzYWJsZWQnOiBmdW5jdGlvbigpIHt0cnkge3JldHVybiBbZGlzYWJsZWQgXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKSwgJ3BsYWNlaG9sZGVyJzogZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gWyFoYXNWYWx1ZSA/IF9wbGFjZWhvbGRlciA6ICcnIF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcyksICdhdXRvV2lkdGgnOiBmdW5jdGlvbigpIHt0cnkge3JldHVybiBbdHJ1ZV1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcyksICdzaXplJzogZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW3NpemUgXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKSwgJ2NoaWxkcmVuJzogbnVsbCwgJ19jb250ZXh0JzogJHRoaXN9LCBudWxsLCBudWxsLCBudWxsLCBmdW5jdGlvbihpKSB7d2lkZ2V0c1snaW5wdXQnXSA9IGl9KSA6IHVuZGVmaW5lZF0sICdfY29udGV4dCc6ICR0aGlzfSksIGgoJ3NwYW4nLCBudWxsLCBbZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW2NsZWFyYWJsZSBdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpID8gaCgnaScsIHsnZXYtY2xpY2snOiBmdW5jdGlvbigpIHt0cnkge3JldHVybiBbc2VsZi5fb25DbGVhciBdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpfSwgbnVsbCwgX2NsYXNzTmFtZShmdW5jdGlvbigpIHt0cnkge3JldHVybiBbe1wiay1jbGVhciBpb24taW9zLWNsb3NlXCI6IHRydWUsIFwiay1zaG93XCI6IGhhc1ZhbHVlfSBdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpKSkgOiB1bmRlZmluZWQsIGgoJ2knLCBudWxsLCBudWxsLCAnay1hcnJvdyBpb24tYXJyb3ctZG93bi1iJyldLCAnay1zdWZmaXgnKV0sICdrLXdyYXBwZXInLCBudWxsLCBmdW5jdGlvbihpKSB7d2lkZ2V0c1snd3JhcHBlciddID0gaX0pLCBmdW5jdGlvbigpIHt0cnkge3JldHVybiBbTWVudSBcbiAgICBdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpXSwgJ19jb250ZXh0JzogJHRoaXN9LCBudWxsLCBudWxsLCBudWxsLCBmdW5jdGlvbihpKSB7d2lkZ2V0c1snZHJvcGRvd24nXSA9IGl9KSwgX2NsYXNzTmFtZShmdW5jdGlvbigpIHt0cnkge3JldHVybiBbey4uLmNsYXNzTmFtZU9iaiwgJ2stYWN0aXZlJzogaGFzVmFsdWV9IF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcykpKVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvc2VsZWN0L2luZGV4LnZkdCIsImltcG9ydCBJbnRhY3QgZnJvbSAnaW50YWN0JztcbmltcG9ydCB7RHJvcGRvd25JdGVtfSBmcm9tICcuLi9kcm9wZG93bic7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE9wdGlvbiBleHRlbmRzIERyb3Bkb3duSXRlbSB7XG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvc2VsZWN0L29wdGlvbi5qcyIsImltcG9ydCBJbnRhY3QgZnJvbSAnaW50YWN0JztcbmltcG9ydCB0ZW1wbGF0ZSBmcm9tICcuL2luZGV4LnZkdCc7XG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uL2xheW91dCc7XG5pbXBvcnQgJy4vaW5kZXguc3R5bCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgTGF5b3V0IHtcbiAgICBASW50YWN0LnRlbXBsYXRlKClcbiAgICBzdGF0aWMgdGVtcGxhdGUgPSB0ZW1wbGF0ZTtcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NpdGUvc3JjL3BhZ2VzL2luZGV4L2luZGV4LmpzIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cbiAgICBpZihtb2R1bGUuaG90KSB7XG4gICAgICAvLyAxNTI3NTc2Njc2OTY1XG4gICAgICB2YXIgY3NzUmVsb2FkID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWhvdC1sb2FkZXIvaG90TW9kdWxlUmVwbGFjZW1lbnQuanNcIikobW9kdWxlLmlkLCB7XCJmaWxlTWFwXCI6XCJ7ZmlsZU5hbWV9XCJ9KTtcbiAgICAgIG1vZHVsZS5ob3QuZGlzcG9zZShjc3NSZWxvYWQpO1xuICAgICAgbW9kdWxlLmhvdC5hY2NlcHQodW5kZWZpbmVkLCBjc3NSZWxvYWQpO1xuICAgIH1cbiAgXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zaXRlL3NyYy9wYWdlcy9pbmRleC9pbmRleC5zdHlsXG4vLyBtb2R1bGUgaWQgPSAuL3NpdGUvc3JjL3BhZ2VzL2luZGV4L2luZGV4LnN0eWxcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwiaW1wb3J0IHtCdXR0b259IGZyb20gJ2twYy9jb21wb25lbnRzL2J1dHRvbic7aW1wb3J0IHtMaW5rfSBmcm9tICdrcGMvY29tcG9uZW50cy9saW5rJztcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKG9iaiwgX1ZkdCwgYmxvY2tzLCAkY2FsbGVlKSB7XG5fVmR0IHx8IChfVmR0ID0gVmR0KTtcbm9iaiB8fCAob2JqID0ge30pO1xuYmxvY2tzIHx8IChibG9ja3MgPSB7fSk7XG52YXIgaCA9IF9WZHQubWlzcy5oLCBoYyA9IF9WZHQubWlzcy5oYywgaHUgPSBfVmR0Lm1pc3MuaHUsIHdpZGdldHMgPSB0aGlzICYmIHRoaXMud2lkZ2V0cyB8fCB7fSwgX2Jsb2NrcyA9IHt9LCBfX2Jsb2NrcyA9IHt9LFxuX191ID0gX1ZkdC51dGlscywgZXh0ZW5kID0gX191LmV4dGVuZCwgX2UgPSBfX3UuZXJyb3IsIF9jbGFzc05hbWUgPSBfX3UuY2xhc3NOYW1lLFxuX19vID0gX191Lk9wdGlvbnMsIF9nZXRNb2RlbCA9IF9fby5nZXRNb2RlbCwgX3NldE1vZGVsID0gX19vLnNldE1vZGVsLFxuX3NldENoZWNrYm94TW9kZWwgPSBfX3Uuc2V0Q2hlY2tib3hNb2RlbCwgX2RldGVjdENoZWNrYm94Q2hlY2tlZCA9IF9fdS5kZXRlY3RDaGVja2JveENoZWNrZWQsXG5fc2V0U2VsZWN0TW9kZWwgPSBfX3Uuc2V0U2VsZWN0TW9kZWwsXG5zZWxmID0gdGhpcy5kYXRhLCAkdGhpcyA9IHRoaXMsIHNjb3BlID0gb2JqLCBBbmltYXRlID0gc2VsZiAmJiBzZWxmLkFuaW1hdGUsIHBhcmVudCA9ICgkY2FsbGVlIHx8IHt9KS5fc3VwZXJcblxuXG5cbnJldHVybiAoZnVuY3Rpb24oKSB7XG4gICAgdmFyIF9vYmogPSB7J2NsYXNzTmFtZSc6ICdpbmRleC1wYWdlJywgJ2NoaWxkcmVuJzogbnVsbH07XG4gICAgaWYgKF9vYmouaGFzT3duUHJvcGVydHkoXCJhcmd1bWVudHNcIikpIHtcbiAgICAgICAgZXh0ZW5kKF9vYmosIF9vYmouYXJndW1lbnRzID09PSB0cnVlID8gb2JqIDogX29iai5hcmd1bWVudHMpO1xuICAgICAgICBkZWxldGUgX29iai5hcmd1bWVudHM7XG4gICAgfVxuICAgIHJldHVybiBwYXJlbnQuY2FsbCh0aGlzLCBfb2JqLCBfVmR0LCBmdW5jdGlvbihibG9ja3MpIHtcbiAgICB2YXIgX2Jsb2NrcyA9IHt9LCBfX2Jsb2NrcyA9IGV4dGVuZCh7fSwgYmxvY2tzKTtcbiAgICByZXR1cm4gKChfYmxvY2tzW1wiY29udGVudFwiXSA9IGZ1bmN0aW9uKHBhcmVudCkge3JldHVybiBoKCdhcnRpY2xlJywgbnVsbCwgWydcXG5cdFx0XHQnLCBoYygnIDxpbWcgc3JjPVxcXCJpbWFnZXMvbG9nby5wbmdcXFwiIC8+ICcpLCBoKCdoMScsIG51bGwsICdLUEMnKSwgaCgncCcsIG51bGwsICfmlK/mjIHlpJrmoYbmnrbnmoTliY3nq6/pq5jotKjph4/nu4Tku7blupMnKSwgaCgnZGl2JywgbnVsbCwgW2goQnV0dG9uLCB7J3RhZ05hbWUnOiBmdW5jdGlvbigpIHt0cnkge3JldHVybiBbTGluayBdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpLCAndHlwZSc6ICdwcmltYXJ5JywgJ3RhZ1Byb3BzJzogZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW3tcbiAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY6IGAke3Byb2Nlc3MuVVJMX1BSRUZJWH0vZG9jcy9nZXR0aW5nLXN0YXJ0ZWQvYFxuICAgICAgICAgICAgICAgICAgICB9IF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcyksICdjbGFzc05hbWUnOiAnYnV0dG9uJywgJ2NoaWxkcmVuJzogJ+W8gOWniycsICdfY29udGV4dCc6ICR0aGlzfSksIGgoQnV0dG9uLCB7J2hyZWYnOiAnaHR0cHM6Ly9naXRodWIuY29tL2tzYy1mZS9rcGMnLCAnY2xhc3NOYW1lJzogJ2J1dHRvbicsICd0YXJnZXQnOiAnX2JsYW5rJywgJ2NoaWxkcmVuJzogJ0dpdEh1YicsICdfY29udGV4dCc6ICR0aGlzfSldLCAnYWN0aW9ucycpLCBoKCdkaXYnLCBudWxsLCBbaCgnZGl2JywgbnVsbCwgW2goJ2gyJywgbnVsbCwgJ+aUr+aMgeWkmuahhuaeticsICdibHVlJyksIGgoJ2RpdicsIG51bGwsICdcXG4gICAgICAgICAgICAgICAgICAgICAgICDlkIzml7bmlK/mjIFJbnRhY3TlkoxWdWXmoYbmnrZcXG5cdFx0XHRcdFx0JyldLCAnZmVhdHVyZScpLCBoKCdkaXYnLCBudWxsLCBbaCgnaDInLCBudWxsLCAn5b+g5LqO5Y6f55Sf77yM5aKe5by65Y6f55SfJywgJ3llbGxvdycpLCBoKCdkaXYnLCBudWxsLCAnXFxuICAgICAgICAgICAgICAgICAgICAgICAg5Zyo5L+d5oyB5rWP6KeI5Zmo5Y6f55Sf54m55oCn55qE5Z+656GA5LiK77yM5aKe5by65Lqk5LqS6IO95YqbXFxuXHRcdFx0XHRcdCcpXSwgJ2ZlYXR1cmUnKSwgaCgnZGl2JywgbnVsbCwgW2goJ2gyJywgbnVsbCwgJ+S+v+aNt+W8gOWPkScsICdyZWQnKSwgaCgnZGl2JywgbnVsbCwgJ1xcbiAgICAgICAgICAgICAgICAgICAgICAgIOaUr+aMgeaMiemcgOWKoOi9ve+8jOS4u+mimOWumuWItu+8jOWbvemZheWMluetieeJueaAp+OAguW5tuS4lOaPkOS+m+S6humFjeWll+eahOiEmuaJi+aetuaWueS+v+W/q+mAn+WIneWni+WMlumhueebrlxcblx0XHRcdFx0XHQnKV0sICdmZWF0dXJlJyldLCAnZmVhdHVyZXMnKV0sICdob21lLWhlYWRlcicpO30pICYmIChfX2Jsb2Nrc1tcImNvbnRlbnRcIl0gPSBmdW5jdGlvbihwYXJlbnQpIHtcbnZhciBzZWxmID0gdGhpcztcbnJldHVybiBibG9ja3NbXCJjb250ZW50XCJdID8gYmxvY2tzW1wiY29udGVudFwiXS5jYWxsKHRoaXMsIGZ1bmN0aW9uKCkge1xucmV0dXJuIF9ibG9ja3NbXCJjb250ZW50XCJdLmNhbGwoc2VsZiwgcGFyZW50KTtcbn0pIDogX2Jsb2Nrc1tcImNvbnRlbnRcIl0uY2FsbCh0aGlzLCBwYXJlbnQpO1xufSksIF9fYmxvY2tzKTtcbn0uY2FsbCh0aGlzLCBibG9ja3MpLCBwYXJlbnQpXG59KS5jYWxsKHRoaXMpXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc2l0ZS9zcmMvcGFnZXMvaW5kZXgvaW5kZXgudmR0IiwiaW1wb3J0IEludGFjdCBmcm9tICdpbnRhY3QnO1xuaW1wb3J0IHRlbXBsYXRlIGZyb20gJy4vbGF5b3V0LnZkdCc7XG5pbXBvcnQgJy4vbGF5b3V0LnN0eWwnO1xuXG5sZXQgdGhlbWUgPSAna3BjJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIEludGFjdCB7XG4gICAgQEludGFjdC50ZW1wbGF0ZSgpXG4gICAgc3RhdGljIHRlbXBsYXRlID0gdGVtcGxhdGU7XG5cbiAgICBkZWZhdWx0cygpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHRoZW1lOiB0aGVtZSxcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBfaW5pdCgpIHtcbiAgICAgICAgdGhpcy5vbignJGNoYW5nZTp0aGVtZScsIChjLCB2LCBvKSA9PiB7XG4gICAgICAgICAgICB0aGlzLl9jaGFuZ2VUaGVtZSh2LCBvKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgX21vdW50KCkge1xuICAgICAgICB0aGlzLiRib3JkZXIgPSB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvcignLmJvcmRlcicpO1xuICAgICAgICB0aGlzLl91cGRhdGVCb3JkZXIoKTtcbiAgICAgICAgdGhpcy5saW5rID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbGlua1tyZWw9c3R5bGVzaGVldF0nKTtcbiAgICB9XG5cbiAgICBfY2hhbmdlVGhlbWUobmV3VGhlbWUsIG9sZFRoZW1lKSB7XG4gICAgICAgIHRoaXMubGluay5ocmVmID0gdGhpcy5saW5rLmhyZWYucmVwbGFjZShgdGhlbWUtJHtvbGRUaGVtZX1gLCBgdGhlbWUtJHtuZXdUaGVtZX1gKTtcbiAgICAgICAgdGhlbWUgPSBuZXdUaGVtZTtcbiAgICB9XG5cbiAgICBfdXBkYXRlQm9yZGVyKCkge1xuICAgICAgICAvLyBjb25zdCAkbmF2ID0gdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hY3RpdmUnKTtcbiAgICAgICAgLy8gbGV0IHdpZHRoID0gMDtcbiAgICAgICAgLy8gbGV0IGxlZnQgPSAwO1xuICAgICAgICAvLyBpZiAoJG5hdikge1xuICAgICAgICAgICAgLy8gbGVmdCA9ICRuYXYucG9zaXRpb24oKS5sZWZ0O1xuICAgICAgICAgICAgLy8gd2lkdGggPSAkbmF2Lm91dGVyV2lkdGgoKTtcbiAgICAgICAgLy8gfVxuICAgICAgICAvLyB0aGlzLiRib3JkZXIuYWRkQ2xhc3MoJ3RyYW5zaXRpb24nKTtcbiAgICAgICAgLy8gdGhpcy4kYm9yZGVyLmNzcyh7d2lkdGg6IHdpZHRoLCBsZWZ0OiBsZWZ0fSk7XG4gICAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc2l0ZS9zcmMvcGFnZXMvbGF5b3V0LmpzIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cbiAgICBpZihtb2R1bGUuaG90KSB7XG4gICAgICAvLyAxNTI3NTc2Njc3Mjk1XG4gICAgICB2YXIgY3NzUmVsb2FkID0gcmVxdWlyZShcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWhvdC1sb2FkZXIvaG90TW9kdWxlUmVwbGFjZW1lbnQuanNcIikobW9kdWxlLmlkLCB7XCJmaWxlTWFwXCI6XCJ7ZmlsZU5hbWV9XCJ9KTtcbiAgICAgIG1vZHVsZS5ob3QuZGlzcG9zZShjc3NSZWxvYWQpO1xuICAgICAgbW9kdWxlLmhvdC5hY2NlcHQodW5kZWZpbmVkLCBjc3NSZWxvYWQpO1xuICAgIH1cbiAgXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zaXRlL3NyYy9wYWdlcy9sYXlvdXQuc3R5bFxuLy8gbW9kdWxlIGlkID0gLi9zaXRlL3NyYy9wYWdlcy9sYXlvdXQuc3R5bFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIiwiaW1wb3J0IExpbmsgZnJvbSAna3BjL2NvbXBvbmVudHMvbGluayc7aW1wb3J0IHtTZWxlY3QsIE9wdGlvbn0gZnJvbSAna3BjL2NvbXBvbmVudHMvc2VsZWN0JztcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKG9iaiwgX1ZkdCwgYmxvY2tzLCAkY2FsbGVlKSB7XG5fVmR0IHx8IChfVmR0ID0gVmR0KTtcbm9iaiB8fCAob2JqID0ge30pO1xuYmxvY2tzIHx8IChibG9ja3MgPSB7fSk7XG52YXIgaCA9IF9WZHQubWlzcy5oLCBoYyA9IF9WZHQubWlzcy5oYywgaHUgPSBfVmR0Lm1pc3MuaHUsIHdpZGdldHMgPSB0aGlzICYmIHRoaXMud2lkZ2V0cyB8fCB7fSwgX2Jsb2NrcyA9IHt9LCBfX2Jsb2NrcyA9IHt9LFxuX191ID0gX1ZkdC51dGlscywgZXh0ZW5kID0gX191LmV4dGVuZCwgX2UgPSBfX3UuZXJyb3IsIF9jbGFzc05hbWUgPSBfX3UuY2xhc3NOYW1lLFxuX19vID0gX191Lk9wdGlvbnMsIF9nZXRNb2RlbCA9IF9fby5nZXRNb2RlbCwgX3NldE1vZGVsID0gX19vLnNldE1vZGVsLFxuX3NldENoZWNrYm94TW9kZWwgPSBfX3Uuc2V0Q2hlY2tib3hNb2RlbCwgX2RldGVjdENoZWNrYm94Q2hlY2tlZCA9IF9fdS5kZXRlY3RDaGVja2JveENoZWNrZWQsXG5fc2V0U2VsZWN0TW9kZWwgPSBfX3Uuc2V0U2VsZWN0TW9kZWwsXG5zZWxmID0gdGhpcy5kYXRhLCAkdGhpcyA9IHRoaXMsIHNjb3BlID0gb2JqLCBBbmltYXRlID0gc2VsZiAmJiBzZWxmLkFuaW1hdGUsIHBhcmVudCA9ICgkY2FsbGVlIHx8IHt9KS5fc3VwZXJcblxuXG5cbmNvbnN0IG5hdiA9IFtcbiAgICB7XG4gICAgICAgIHRpdGxlOiAn5pWZ56iLJyxcbiAgICAgICAgaHJlZjogJy9kb2NzL2dldHRpbmctc3RhcnRlZC8nXG4gICAgfSxcbiAgICAvKiB7ICovXG4gICAgICAgIC8qIHRpdGxlOiAn6K6+6K6h6K+t6KiAJywgKi9cbiAgICAgICAgLyogaHJlZjogJy9kZXNpZ24nLCAqL1xuICAgIC8qIH0sICovXG4gICAgLyogeyAqL1xuICAgICAgICAvKiB0aXRsZTogJ0FQSScsICovXG4gICAgICAgIC8qIGhyZWY6ICdhcGknICovXG4gICAgLyogfSwgKi9cbiAgICAvLyB7XG4gICAgICAgIC8vIHRpdGxlOiAn56S65L6LJyxcbiAgICAgICAgLy8gaHJlZjogJ2V4YW1wbGVzJ1xuICAgIC8vIH1cbl07XG5cbnJldHVybiBoKCdkaXYnLCBudWxsLCBbaCgnZGl2JywgbnVsbCwgaCgnaGVhZGVyJywgbnVsbCwgKF9ibG9ja3NbXCJoZWFkZXJcIl0gPSBmdW5jdGlvbihwYXJlbnQpIHtyZXR1cm4gW2goTGluaywgeydjbGFzc05hbWUnOiAnbG9nbycsICdocmVmJzogJy8nLCAnY2hpbGRyZW4nOiAnS1BDJywgJ19jb250ZXh0JzogJHRoaXN9KSwgaCgnZGl2JywgbnVsbCwgW2goJ25hdicsIG51bGwsIFtfVmR0LnV0aWxzLm1hcChmdW5jdGlvbigpIHt0cnkge3JldHVybiBbbmF2IF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcyksIGZ1bmN0aW9uKHZhbHVlLCBrZXkpIHtcbnJldHVybiBoKExpbmssIHsnY2xhc3NOYW1lJzogX2NsYXNzTmFtZShmdW5jdGlvbigpIHt0cnkge3JldHVybiBbe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY3RpdmU6IHZhbHVlLmhyZWYgPT09IHNjb3BlLm5hdkluZGV4XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpKSwgJ2hyZWYnOiBmdW5jdGlvbigpIHt0cnkge3JldHVybiBbYCR7cHJvY2Vzcy5VUkxfUFJFRklYfSR7dmFsdWUuaHJlZn1gIF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcyksICdjaGlsZHJlbic6IGZ1bmN0aW9uKCkge3RyeSB7cmV0dXJuIFt2YWx1ZS50aXRsZSBdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpLCAnX2NvbnRleHQnOiAkdGhpc30pO1xufSwgdGhpcyksIGgoJ2RpdicsIG51bGwsIG51bGwsICdib3JkZXInKV0pLCBoKCdzcGFuJywgbnVsbCwgJ+WIh+aNouS4u+mimO+8micsICdsYWJlbCcpLCBoKFNlbGVjdCwgeyd2LW1vZGVsJzogJ3RoZW1lJywgJ3dpZHRoJzogJzEwMCcsICdjaGlsZHJlbic6IFtoKE9wdGlvbiwgeyd2YWx1ZSc6ICdrcGMnLCAnY2hpbGRyZW4nOiAnZGVmYXVsdCcsICdfY29udGV4dCc6ICR0aGlzfSksIGgoT3B0aW9uLCB7J3ZhbHVlJzogJ2tzeXVuJywgJ2NoaWxkcmVuJzogJ2tzeXVuJywgJ19jb250ZXh0JzogJHRoaXN9KV0sICdfY29udGV4dCc6ICR0aGlzLCB2YWx1ZTogX2dldE1vZGVsKHNlbGYsICd0aGVtZScpLCAnZXYtJGNoYW5nZTp2YWx1ZSc6IGZ1bmN0aW9uKF9fYywgX19uKSB7IF9zZXRNb2RlbChzZWxmLCAndGhlbWUnLCBfX24sICR0aGlzKSB9fSldLCAncmlnaHQnKV07fSkgJiYgKF9fYmxvY2tzW1wiaGVhZGVyXCJdID0gZnVuY3Rpb24ocGFyZW50KSB7XG52YXIgc2VsZiA9IHRoaXM7XG5yZXR1cm4gYmxvY2tzW1wiaGVhZGVyXCJdID8gYmxvY2tzW1wiaGVhZGVyXCJdLmNhbGwodGhpcywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gX2Jsb2Nrc1tcImhlYWRlclwiXS5jYWxsKHNlbGYsIHBhcmVudCk7XG59KSA6IF9ibG9ja3NbXCJoZWFkZXJcIl0uY2FsbCh0aGlzLCBwYXJlbnQpO1xufSkgJiYgX19ibG9ja3NbXCJoZWFkZXJcIl0uY2FsbCh0aGlzKSksICdoZWFkZXItd3JhcHBlcicpLCBoKCdkaXYnLCBudWxsLCAoX2Jsb2Nrc1tcImNvbnRlbnRcIl0gPSBmdW5jdGlvbihwYXJlbnQpIHtyZXR1cm4gbnVsbDt9KSAmJiAoX19ibG9ja3NbXCJjb250ZW50XCJdID0gZnVuY3Rpb24ocGFyZW50KSB7XG52YXIgc2VsZiA9IHRoaXM7XG5yZXR1cm4gYmxvY2tzW1wiY29udGVudFwiXSA/IGJsb2Nrc1tcImNvbnRlbnRcIl0uY2FsbCh0aGlzLCBmdW5jdGlvbigpIHtcbnJldHVybiBfYmxvY2tzW1wiY29udGVudFwiXS5jYWxsKHNlbGYsIHBhcmVudCk7XG59KSA6IF9ibG9ja3NbXCJjb250ZW50XCJdLmNhbGwodGhpcywgcGFyZW50KTtcbn0pICYmIF9fYmxvY2tzW1wiY29udGVudFwiXS5jYWxsKHRoaXMpLCAnY29udGVudC13cmFwcGVyJyldLCBfY2xhc3NOYW1lKGZ1bmN0aW9uKCkge3RyeSB7cmV0dXJuIFt7J21haW4td3JhcHBlcic6IHRydWUsIFtzY29wZS5jbGFzc05hbWVdOiBzY29wZS5jbGFzc05hbWV9IF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcykpKVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NpdGUvc3JjL3BhZ2VzL2xheW91dC52ZHQiXSwic291cmNlUm9vdCI6IiJ9