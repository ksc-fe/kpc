webpackJsonp([0],{

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
      // 1527576699249
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
      // 1527576699809
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
      // 1527576699077
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
      // 1527576696351
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

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2Ryb3Bkb3duL2Ryb3Bkb3duLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvZHJvcGRvd24vaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9kcm9wZG93bi9pbmRleC5zdHlsIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvZHJvcGRvd24vaXRlbS5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2Ryb3Bkb3duL2l0ZW0udmR0Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvZHJvcGRvd24vbWVudS5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2Ryb3Bkb3duL21lbnUudmR0Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvaW5wdXQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9pbnB1dC9pbmRleC5zdHlsIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvaW5wdXQvaW5kZXgudmR0Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvbW92ZVdyYXBwZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9tb3ZlV3JhcHBlci9wb3NpdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3NlbGVjdC9ncm91cC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3NlbGVjdC9ncm91cC52ZHQiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9zZWxlY3QvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9zZWxlY3QvaW5kZXguc3R5bCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3NlbGVjdC9pbmRleC52ZHQiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9zZWxlY3Qvb3B0aW9uLmpzIiwid2VicGFjazovLy8uL3NpdGUvc3JjL3BhZ2VzL2xheW91dC5qcyIsIndlYnBhY2s6Ly8vLi9zaXRlL3NyYy9wYWdlcy9sYXlvdXQuc3R5bCIsIndlYnBhY2s6Ly8vLi9zaXRlL3NyYy9wYWdlcy9sYXlvdXQudmR0Il0sIm5hbWVzIjpbImgiLCJJbnRhY3QiLCJWZHQiLCJtaXNzIiwiRHJvcGRvd24iLCJ0ZW1wbGF0ZSIsImRhdGEiLCJnZXQiLCJkZWZhdWx0cyIsInRyaWdnZXIiLCJkaXNhYmxlZCIsIl9pbml0IiwiX3NhdmVPcmlnaW5hbEV2ZW50cyIsIm9uIiwia2VlcCIsImNoaWxkcmVuIiwiY2xhc3NOYW1lIiwicmVzdCIsIkFycmF5IiwiaXNBcnJheSIsIm9yaWdpblByb3BzIiwicHJvcHMiLCJoYXNTYXZlZCIsIl9oYXNTYXZlZCIsIl9ldkNsaWNrIiwiX2V2TW91c2VFbnRlciIsIl9ldk1vdXNlTGVhdmUiLCJzaG93IiwiYmluZCIsImhpZGUiLCJzZXQiLCJzaWxlbnQiLCJfbW91bnQiLCJzaWJsaW5ncyIsInBhcmVudFZOb2RlIiwiaW5kZXgiLCJpbmRleE9mIiwidk5vZGUiLCJtZW51IiwiZHJvcGRvd24iLCJmbiIsImUiLCJpc0ZvY3VzIiwiZm9jdXNJdGVtQnlJbmRleCIsImltbWVkaWF0ZWx5IiwiV3JhcHBlciIsImluVnVlIiwicG9zaXRpb24iLCJrZXkiLCJyZWYiLCJlbGVtZW50IiwiRHJvcGRvd25WdWVXcmFwcGVyIiwiX2NsYXNzTmFtZSIsInV0aWxzIiwiX1dyYXBwZXIiLCJmdW5jdGlvbmFsV3JhcHBlciIsIkRyb3Bkb3duTWVudSIsIkRyb3Bkb3duSXRlbSIsImhpZGVPblNlbGVjdCIsIl9pc0ZvY3VzIiwiYW5jZXN0b3IiLCJfZmluZEFuY2VzdG9yRHJvcGRvd25NZW51IiwicGFyZW50IiwiaXRlbXMiLCJwdXNoIiwiX29uQ2xpY2siLCJ0YWciLCJfb25Nb3VzZUVudGVyIiwiZm9jdXNJdGVtIiwiX29uTW91c2VMZWF2ZSIsInNlbGVjdCIsIl9pc1N1Yk1lbnUiLCJmb2N1cyIsImVsUmVjdCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsInBFbCIsInJlZnMiLCJwRWxSZWN0IiwiYm90dG9tT3ZlcmZsb3dEaXN0YW5jZSIsImJvdHRvbSIsInRvcE92ZXJmbG93RGlzdGFuY2UiLCJ0b3AiLCJzY3JvbGxUb3AiLCJ1bkZvY3VzIiwic2hvd01lbnVBbmRGb2N1cyIsImhpZGVNZW51IiwiaXNGaXJzdCIsIl9kZXN0cm95Iiwic3BsaWNlIiwicHJvcFR5cGVzIiwiQm9vbGVhbiIsIm9iaiIsIl9WZHQiLCJibG9ja3MiLCIkY2FsbGVlIiwiaGMiLCJodSIsIndpZGdldHMiLCJfYmxvY2tzIiwiX19ibG9ja3MiLCJfX3UiLCJleHRlbmQiLCJfZSIsImVycm9yIiwiX19vIiwiT3B0aW9ucyIsIl9nZXRNb2RlbCIsImdldE1vZGVsIiwiX3NldE1vZGVsIiwic2V0TW9kZWwiLCJfc2V0Q2hlY2tib3hNb2RlbCIsInNldENoZWNrYm94TW9kZWwiLCJfZGV0ZWN0Q2hlY2tib3hDaGVja2VkIiwiZGV0ZWN0Q2hlY2tib3hDaGVja2VkIiwiX3NldFNlbGVjdE1vZGVsIiwic2V0U2VsZWN0TW9kZWwiLCJzZWxmIiwiJHRoaXMiLCJzY29wZSIsIkFuaW1hdGUiLCJfc3VwZXIiLCJjbGFzc05hbWVPYmoiLCJjYWxsIiwidHJhbnNpdGlvbiIsInN1YkRyb3Bkb3ducyIsImZvY3VzSW5kZXgiLCJsb2NrZWQiLCJfZmluZFBhcmVudERyb3Bkb3duTWVudSIsIl9hZGREb2N1bWVudEV2ZW50cyIsImNsZWFyVGltZW91dCIsInRpbWVyIiwic2V0VGltZW91dCIsInRvZ2dsZSIsIm15IiwiYXQiLCJvZiIsInVzaW5nIiwiZmVlZGJhY2siLCJfb25TaG93IiwiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiX29uRG9jdW1lbnRDbGljayIsIl9vbktleWRvd24iLCJfcmVtb3ZlRG9jdW1lbnRFdmVudHMiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwidGFyZ2V0IiwiY29udGFpbnMiLCJfaXNDbGlja1N1Yk1lbnUiLCJfZHJvcGRvd24iLCJrZXlDb2RlIiwiX2ZvY3VzTmV4dEl0ZW0iLCJfZm9jdXNQcmV2SXRlbSIsIl9zaG93U3ViTWVudSIsIl9oaWRlU3ViTWVudSIsIl9zZWxlY3RJdGVtIiwicHJldmVudERlZmF1bHQiLCJkaXJlY3Rpb24iLCJtYXgiLCJsZW5ndGgiLCJvbGRJbmRleCIsImZpeEluZGV4IiwiaSIsIml0ZW0iLCJzdWJNZW51cyIsInJldCIsInN1Yk1lbnUiLCJldmVudHMiLCJNb3ZlV3JhcHBlciIsInVuZGVmaW5lZCIsIklucHV0IiwidHlwZSIsIm5hbWUiLCJ2YWx1ZSIsImRlZmF1bHRWYWx1ZSIsInBsYWNlaG9sZGVyIiwicmVhZG9ubHkiLCJjbGVhcmFibGUiLCJzaXplIiwicm93cyIsInNwZWxsY2hlY2siLCJhdXRvV2lkdGgiLCJmbHVpZCIsIndpZHRoIiwidGFiaW5kZXgiLCJfYWRqdXN0V2lkdGgiLCJmYWtlIiwib2Zmc2V0V2lkdGgiLCJpbnB1dCIsInN0eWxlIiwiY2xlYXIiLCJfb25JbnB1dCIsIl9wcm94eUV2ZW50IiwiU3RyaW5nIiwicHJlcGVuZCIsImFwcGVuZCIsInByZWZpeCIsInN1ZmZpeCIsInJlZHVjZSIsIm1lbW8iLCJ3cmFwcGVyRXZlbnRzIiwiYXV0b0Rlc3Ryb3kiLCJjb250YWluZXIiLCJpbml0IiwiYXJncyIsImNyZWF0ZUNvbW1lbnQiLCJoeWRyYXRlIiwidXBkYXRlIiwibGFzdFZOb2RlIiwibmV4dFZOb2RlIiwiZGVzdHJveSIsIl8kZGVzdHJveSIsInJlbmRlcmVkIiwiVHlwZXMiLCJDb21wb25lbnRDbGFzc09ySW5zdGFuY2UiLCJyZW1vdmUiLCJ2ZHQiLCJkZXN0cm95ZWQiLCJvZmYiLCJxdWVyeVNlbGVjdG9yIiwiYm9keSIsImFwcGVuZENoaWxkIiwiZ2V0RG9jdW1lbnRPcldpbmRvd1JlY3QiLCJzY3JvbGxiYXJXaWR0aCIsIk1hdGgiLCJhYnMiLCJySG9yaXpvbnRhbCIsInJWZXJ0aWNhbCIsInJPZmZzZXQiLCJyUG9zaXRpb24iLCJyUGVyY2VudCIsImdldERpbWVuc2lvbnMiLCJlbGVtIiwibm9kZVR5cGUiLCJoZWlnaHQiLCJvZmZzZXQiLCJsZWZ0Iiwid2luZG93IiwicGFnZVlPZmZzZXQiLCJwYWdlWE9mZnNldCIsInBhZ2VZIiwicGFnZVgiLCJyZWN0IiwiZCIsImRvY3VtZW50RWxlbWVudCIsImNsaWVudFdpZHRoIiwiY2xpZW50SGVpZ2h0IiwiYiIsInNjcm9sbFdpZHRoIiwic2Nyb2xsSGVpZ2h0Iiwib2Zmc2V0SGVpZ2h0IiwiZ2V0T2Zmc2V0cyIsIm9mZnNldHMiLCJwYXJzZUZsb2F0IiwidGVzdCIsIl9zY3JvbGxCYXJXaWR0aCIsIm91dGVyIiwiY3JlYXRlRWxlbWVudCIsInZpc2liaWxpdHkiLCJtc092ZXJmbG93U3R5bGUiLCJ3aWR0aE5vU2Nyb2xsIiwib3ZlcmZsb3ciLCJpbm5lciIsIndpZHRoV2l0aFNjcm9sbCIsInBhcmVudE5vZGUiLCJyZW1vdmVDaGlsZCIsImdldFNjcm9sbEluZm8iLCJ3aXRoaW4iLCJvdmVyZmxvd1giLCJpc1dpbmRvdyIsImlzRG9jdW1lbnQiLCJvdmVyZmxvd1kiLCJoYXNPdmVyZmxvd1giLCJoYXNPdmVyZmxvd1kiLCJnZXRXaXRoaW5JbmZvIiwiaGFzT2Zmc2V0Iiwic2Nyb2xsTGVmdCIsInBhcnNlQ3NzIiwicHJvcGVydHkiLCJwYXJzZUludCIsIm9wdGlvbnMiLCJ0YXJnZXRXaWR0aCIsInRhcmdldEhlaWdodCIsInRhcmdldE9mZnNldCIsImJhc2VQb3NpdGlvbiIsImNvbGxpc2lvbiIsInNwbGl0Iiwic2Nyb2xsSW5mbyIsImZvckVhY2giLCJwb3MiLCJjb25jYXQiLCJob3Jpem9udGFsT2Zmc2V0IiwiZXhlYyIsInZlcnRpY2FsT2Zmc2V0IiwiYXRPZmZzZXQiLCJlbGVtV2lkdGgiLCJlbGVtSGVpZ2h0IiwibXlPZmZzZXQiLCJjb21wdXRlZFN0eWxlIiwiZ2V0Q29tcHV0ZWRTdHlsZSIsIm1hcmdpbkxlZnQiLCJtYXJnaW5Ub3AiLCJjb2xsaXNpb25XaWR0aCIsImNvbGxpc2lvbkhlaWdodCIsImNvbGxpc2lvblBvc2l0aW9uIiwiZGlyIiwiY29sbCIsInJ1bGVzIiwicmlnaHQiLCJob3Jpem9udGFsIiwidmVydGljYWwiLCJpbXBvcnRhbnQiLCJmaXQiLCJ3aXRoaW5PZmZzZXQiLCJvdXRlcldpZHRoIiwiY29sbGlzaW9uUG9zTGVmdCIsIm92ZXJMZWZ0Iiwib3ZlclJpZ2h0IiwibmV3T3ZlclJpZ2h0Iiwib3V0ZXJIZWlnaHQiLCJjb2xsaXNpb25Qb3NUb3AiLCJvdmVyVG9wIiwib3ZlckJvdHRvbSIsIm5ld092ZXJCb3R0b20iLCJmbGlwIiwib2Zmc2V0TGVmdCIsIm5ld092ZXJMZWZ0Iiwib2Zmc2V0VG9wIiwibmV3T3ZlclRvcCIsImZsaXBmaXQiLCJPcHRpb25Hcm91cCIsImxhYmVsIiwiU2VsZWN0IiwibXVsdGlwbGUiLCJmaWx0ZXJhYmxlIiwia2V5d29yZHMiLCJhbGxvd1VubWF0Y2giLCJfc2hvdyIsIl9vbkNsZWFyIiwic3RvcFByb3BhZ2F0aW9uIiwiX29uU2VsZWN0IiwiYXN5bmMiLCJ2YWx1ZXMiLCJzbGljZSIsIl9mb2N1c0lucHV0IiwiX3Jlc2V0U2VhcmNoIiwiX29uU2VhcmNoIiwidHJpbSIsIl9vbkNoYW5nZVNob3ciLCJjIiwiX29uQmx1ciIsIl9zZWxlY3RJbnB1dCIsIl9vbkZvY3VzIiwiX29uRm9jdXNvdXQiLCJfZGVsZXRlIiwiX3Bvc2l0aW9uIiwibWVudUVsZW1lbnQiLCJtZW51V2lkdGgiLCJfb25LZXlwcmVzcyIsIndyYXBwZXIiLCJjbGljayIsIk9wdGlvbiIsIkdyb3VwIiwiX3BsYWNlaG9sZGVyIiwiaGFzVmFsdWUiLCJpc0dyb3VwIiwibGFiZWxzIiwiaGFuZGxlUHJvcHMiLCJhY3RpdmUiLCJ2YWxpZCIsInRtcCIsInRvTG93ZXJDYXNlIiwidGV4dCIsIk9wdGlvbnNWTm9kZXMiLCJtYXAiLCJNZW51IiwidGhlbWUiLCJ2IiwibyIsIl9jaGFuZ2VUaGVtZSIsIiRib3JkZXIiLCJfdXBkYXRlQm9yZGVyIiwibGluayIsIm5ld1RoZW1lIiwib2xkVGhlbWUiLCJocmVmIiwicmVwbGFjZSIsIm5hdiIsInRpdGxlIiwiTGluayIsIm5hdkluZGV4IiwiX19jIiwiX19uIl0sIm1hcHBp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QXFCLFVBQVNwQyxNQUFULEVBQWlCO0FBQUMsZUFBTyxJQUFQO0FBQWEsS0FBckQsTUFBMkRxQyxTQUFTLFNBQVQsSUFBc0IsVUFBU3JDLE1BQVQsRUFBaUI7QUFDMUssWUFBSXNELE9BQU8sSUFBWDtBQUNBLGVBQU92QixPQUFPLFNBQVAsSUFBb0JBLE9BQU8sU0FBUCxFQUFrQjZCLElBQWxCLENBQXVCLElBQXZCLEVBQTZCLFlBQVc7QUFDbkUsbUJBQU94QixRQUFRLFNBQVIsRUFBbUJ3QixJQUFuQixDQUF3Qk4sSUFBeEIsRUFBOEJ0RCxNQUE5QixDQUFQO0FBQ0MsU0FGMEIsQ0FBcEIsR0FFRm9DLFFBQVEsU0FBUixFQUFtQndCLElBQW5CLENBQXdCLElBQXhCLEVBQThCNUQsTUFBOUIsQ0FGTDtBQUdDLEtBTHVFLEtBS2xFcUMsU0FBUyxTQUFULEVBQW9CdUIsSUFBcEIsQ0FBeUIsSUFBekIsQ0FMbUQsRUFLbkIsaUJBTG1CLENBVG5DLENBQWYsRUFjb0R0RSxXQUFXLFlBQVc7QUFBQyxZQUFJO0FBQUE7O0FBQUMsbUJBQU8sV0FBRSxnQkFBZ0IsSUFBbEIsU0FBeUJrRSxNQUFNdEcsU0FBL0IsSUFBMkNzRyxNQUFNdEcsU0FBakQsU0FBOEQsQ0FBOUQsQ0FBUDtBQUF3RSxTQUE3RSxDQUE4RSxPQUFNeUIsQ0FBTixFQUFTO0FBQUM2RCxlQUFHN0QsQ0FBSDtBQUFNO0FBQUMsS0FBM0csQ0FBNEdpRixJQUE1RyxDQUFpSCxJQUFqSCxDQUFYLENBZHBELENBQVA7QUFlQyxDOztBQWhERDs7OztBQUF1QyIsImZpbGUiOiJzdGF0aWMvY2h1bmsvMmFiOWZkMDRmZDI1MzI5MmE1ZTguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSW50YWN0IGZyb20gJ2ludGFjdCc7XG5pbXBvcnQge2lzVGV4dFZOb2RlLCBmaW5kUGFyZW50Q29tcG9uZW50fSBmcm9tICcuLi91dGlscyc7XG5pbXBvcnQgRHJvcGRvd25NZW51IGZyb20gJy4vbWVudSc7XG5cbmNvbnN0IGggPSBJbnRhY3QuVmR0Lm1pc3MuaDtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRHJvcGRvd24gZXh0ZW5kcyBJbnRhY3Qge1xuICAgIEBJbnRhY3QudGVtcGxhdGUoKVxuICAgIHN0YXRpYyB0ZW1wbGF0ZShkYXRhKSB7XG4gICAgICAgIHJldHVybiBkYXRhLmdldCgnY2hpbGRyZW4nKTtcbiAgICB9XG5cbiAgICBkZWZhdWx0cygpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHRyaWdnZXI6ICdob3ZlcicsXG4gICAgICAgICAgICBkaXNhYmxlZDogZmFsc2UsXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBfaW5pdCgpIHtcbiAgICAgICAgdGhpcy5fc2F2ZU9yaWdpbmFsRXZlbnRzKCk7XG4gICAgICAgIHRoaXMub24oJyRyZWNlaXZlOmNoaWxkcmVuJywgKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5fc2F2ZU9yaWdpbmFsRXZlbnRzKCk7XG4gICAgICAgIH0sIHtrZWVwOiB0cnVlfSk7XG4gICAgfVxuXG4gICAgX3NhdmVPcmlnaW5hbEV2ZW50cygpIHtcbiAgICAgICAgbGV0IHtjaGlsZHJlbiwgdHJpZ2dlciwgY2xhc3NOYW1lLCAuLi5yZXN0fSA9IHRoaXMuZ2V0KCk7XG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KGNoaWxkcmVuKSkge1xuICAgICAgICAgICAgY2hpbGRyZW4gPSBjaGlsZHJlblswXTtcbiAgICAgICAgfSBcbiAgICAgICAgaWYgKGlzVGV4dFZOb2RlKGNoaWxkcmVuKSkge1xuICAgICAgICAgICAgY2hpbGRyZW4gPSBoKCdzcGFuJywgcmVzdCwgY2hpbGRyZW4sIGNsYXNzTmFtZSk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBzYXZlIHRoZSBvcmlnaW5hbCBldmVudFxuICAgICAgICBjb25zdCBvcmlnaW5Qcm9wcyA9IGNoaWxkcmVuLnByb3BzO1xuICAgICAgICBsZXQgaGFzU2F2ZWQgPSBmYWxzZTtcbiAgICAgICAgaWYgKCFvcmlnaW5Qcm9wcy5faGFzU2F2ZWQpIHtcbiAgICAgICAgICAgIGNoaWxkcmVuLl9ldkNsaWNrID0gb3JpZ2luUHJvcHNbJ2V2LWNsaWNrJ107XG4gICAgICAgICAgICBjaGlsZHJlbi5fZXZNb3VzZUVudGVyID0gb3JpZ2luUHJvcHNbJ2V2LW1vdXNlZW50ZXInXTtcbiAgICAgICAgICAgIGNoaWxkcmVuLl9ldk1vdXNlTGVhdmUgPSBvcmlnaW5Qcm9wc1snZXYtbW91c2VsZWF2ZSddO1xuICAgICAgICAgICAgaGFzU2F2ZWQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHByb3BzID0ge307XG4gICAgICAgIC8vIGlmICh0cmlnZ2VyID09PSAnY2xpY2snKSB7XG4gICAgICAgICAgICBwcm9wc1snZXYtY2xpY2snXSA9IHRoaXMuc2hvdy5iaW5kKHRoaXMsIGNoaWxkcmVuLl9ldkNsaWNrKTtcbiAgICAgICAgLy8gfSBlbHNlIHtcbiAgICAgICAgaWYgKHRyaWdnZXIgPT09ICdob3ZlcicpIHtcbiAgICAgICAgICAgIHByb3BzWydldi1tb3VzZWVudGVyJ10gPSB0aGlzLnNob3cuYmluZCh0aGlzLCBjaGlsZHJlbi5fZXZNb3VzZUVudGVyKTtcbiAgICAgICAgICAgIHByb3BzWydldi1tb3VzZWxlYXZlJ10gPSB0aGlzLmhpZGUuYmluZCh0aGlzLCBjaGlsZHJlbi5fZXZNb3VzZUxlYXZlKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoaGFzU2F2ZWQpIHtcbiAgICAgICAgICAgIHByb3BzLl9oYXNTYXZlZCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgY2hpbGRyZW4ucHJvcHMgPSB7Li4uY2hpbGRyZW4ucHJvcHMsIC4uLnByb3BzfTtcbiAgICAgICAgdGhpcy5zZXQoJ2NoaWxkcmVuJywgY2hpbGRyZW4sIHtzaWxlbnQ6IHRydWV9KTtcbiAgICB9XG5cbiAgICBfbW91bnQoKSB7XG4gICAgICAgIC8vIHRoZSBuZXh0IHNpYmxpbmcgaXMgRHJvcGRvd25NZW51XG4gICAgICAgIC8vIHdlIGNhbiBub3QgZ2V0IHRoZSBtZW51IGJ5IGNhbGwgZ2V0KCdtZW51JykgZGlyZWN0bHksXG4gICAgICAgIC8vIGJlY2F1c2UgdGhlIHZOb2RlIG1heSBiZSBjbG9uZWRcbiAgICAgICAgY29uc3Qgc2libGluZ3MgPSB0aGlzLnBhcmVudFZOb2RlLmNoaWxkcmVuO1xuICAgICAgICBjb25zdCBpbmRleCA9IHNpYmxpbmdzLmluZGV4T2YodGhpcy52Tm9kZSk7XG4gICAgICAgIGNvbnN0IG1lbnUgPSBzaWJsaW5nc1tpbmRleCArIDFdO1xuICAgICAgICBtZW51LmNoaWxkcmVuLmRyb3Bkb3duID0gdGhpcztcbiAgICAgICAgdGhpcy5tZW51ID0gbWVudTtcbiAgICB9XG5cbiAgICBzaG93KGZuLCBlLCBpc0ZvY3VzKSB7XG4gICAgICAgIGlmICh0eXBlb2YgZm4gPT09ICdmdW5jdGlvbicpIGZuKGUpO1xuXG4gICAgICAgIGlmICh0aGlzLmdldCgnZGlzYWJsZWQnKSkgcmV0dXJuO1xuXG4gICAgICAgIGNvbnN0IG1lbnUgPSB0aGlzLm1lbnUuY2hpbGRyZW47XG4gICAgICAgIG1lbnUuc2hvdygpO1xuXG4gICAgICAgIGlmIChpc0ZvY3VzKSB7XG4gICAgICAgICAgICBtZW51LmZvY3VzSXRlbUJ5SW5kZXgoMCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBoaWRlKGZuLCBlLCBpbW1lZGlhdGVseSkge1xuICAgICAgICBpZiAodHlwZW9mIGZuID09PSAnZnVuY3Rpb24nKSBmbihlKTtcblxuICAgICAgICBpZiAodGhpcy5nZXQoJ2Rpc2FibGVkJykpIHJldHVybjtcblxuICAgICAgICBjb25zdCBtZW51ID0gdGhpcy5tZW51LmNoaWxkcmVuO1xuICAgICAgICBtZW51LmhpZGUoaW1tZWRpYXRlbHkpO1xuICAgIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvZHJvcGRvd24vZHJvcGRvd24uanMiLCJpbXBvcnQgSW50YWN0IGZyb20gJ2ludGFjdCc7XG5pbXBvcnQgRHJvcGRvd24gZnJvbSAnLi9kcm9wZG93bic7XG5pbXBvcnQgRHJvcGRvd25NZW51IGZyb20gJy4vbWVudSc7XG5pbXBvcnQgRHJvcGRvd25JdGVtIGZyb20gJy4vaXRlbSc7XG5pbXBvcnQgJy4uLy4uL3N0eWxlcy9rcGMuc3R5bCc7XG5pbXBvcnQgJy4vaW5kZXguc3R5bCc7XG5cbmNvbnN0IGggPSBJbnRhY3QuVmR0Lm1pc3MuaDtcblxuZnVuY3Rpb24gV3JhcHBlcihwcm9wcywgaW5WdWUpIHtcbiAgICBsZXQge1xuICAgICAgICBjaGlsZHJlbiwgcG9zaXRpb24sIGtleSxcbiAgICAgICAgcmVmLCAuLi5yZXN0XG4gICAgfSA9IHByb3BzO1xuXG4gICAgY29uc3QgZWxlbWVudCA9IGNoaWxkcmVuWzBdO1xuICAgIGNvbnN0IG1lbnUgPSBjaGlsZHJlblsxXTtcblxuICAgIG1lbnUucHJvcHMgPSB7XG4gICAgICAgIHBvc2l0aW9uLCBcbiAgICAgICAga2V5OiBrZXkgPT0gbnVsbCA/IGtleSA6IGAke2tleX0ubWVudWAsXG4gICAgICAgIC4uLnJlc3QsXG4gICAgICAgIC4uLm1lbnUucHJvcHMsXG4gICAgfTtcblxuICAgIHJldHVybiAhaW5WdWUgPyBcbiAgICAgICAgW1xuICAgICAgICAgICAgaChEcm9wZG93biwge1xuICAgICAgICAgICAgICAgIGtleToga2V5ID09IG51bGwgPyBrZXkgOiBgJHtrZXl9LnRyaWdnZXJgLFxuICAgICAgICAgICAgICAgIHJlZjogcmVmLFxuICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBlbGVtZW50LCBcbiAgICAgICAgICAgICAgICAuLi5yZXN0XG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIG1lbnVcbiAgICAgICAgXSA6XG4gICAgICAgIGgoRHJvcGRvd25WdWVXcmFwcGVyLCB7XG4gICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICAgIGgoRHJvcGRvd24sIHtcbiAgICAgICAgICAgICAgICAgICAga2V5OiBrZXkgPT0gbnVsbCA/IGtleSA6IGAke2tleX0udHJpZ2dlcmAsXG4gICAgICAgICAgICAgICAgICAgIHJlZjogcmVmLFxuICAgICAgICAgICAgICAgICAgICBjaGlsZHJlbjogW2VsZW1lbnRdLCBcbiAgICAgICAgICAgICAgICAgICAgLi4ucmVzdFxuICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgIG1lbnVcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAuLi5yZXN0XG4gICAgICAgIH0pO1xufVxuXG4vLyBWdWUgb25seSBzdXBwb3J0IHJldHVybiBvbmUgZWxlbWVudCBmcm9tIGZ1bmN0aW9uYWwgY29tcG9uZW50LFxuLy8gc28gd2Ugd3JhcCB0aGVtLiBUaGlzIHdpbGwgbGVhZCB0byBkYW1hZ2UgdGhlIGRvbSBzdHJ1Y3Rpb24sXG4vLyBiZWNhdXNlIHdlIG11c3Qgd3JhcCB0aGVtIHdpdGggYSBkaXZcbmNvbnN0IF9jbGFzc05hbWUgPSBJbnRhY3QuVmR0LnV0aWxzLmNsYXNzTmFtZTtcbmNsYXNzIERyb3Bkb3duVnVlV3JhcHBlciBleHRlbmRzIEludGFjdCB7XG4gICAgdGVtcGxhdGUoZGF0YSkge1xuICAgICAgICBjb25zdCB7Y2xhc3NOYW1lLCBjaGlsZHJlbiwgLi4ucmVzdH0gPSBkYXRhLmdldCgpO1xuICAgICAgICByZXR1cm4gaCgnZGl2JywgcmVzdCwgY2hpbGRyZW4sIF9jbGFzc05hbWUoe1xuICAgICAgICAgICAgJ2stZHJvcGRvd24nOiB0cnVlLFxuICAgICAgICAgICAgW2NsYXNzTmFtZV06IGNsYXNzTmFtZSxcbiAgICAgICAgfSkpO1xuICAgIH1cbn1cblxuY29uc3QgX1dyYXBwZXIgPSBJbnRhY3QuZnVuY3Rpb25hbFdyYXBwZXIgP1xuICAgIEludGFjdC5mdW5jdGlvbmFsV3JhcHBlcihXcmFwcGVyKSA6IFdyYXBwZXI7XG5cbmV4cG9ydCBkZWZhdWx0IF9XcmFwcGVyO1xuXG5leHBvcnQge19XcmFwcGVyIGFzIERyb3Bkb3duLCBEcm9wZG93bk1lbnUsIERyb3Bkb3duSXRlbX07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL2Ryb3Bkb3duL2luZGV4LmpzIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cbiAgICBpZihtb2R1bGUuaG90KSB7XG4gICAgICAvLyAxNTI3NTc2Njk5MjQ5XG4gICAgICB2YXIgY3NzUmVsb2FkID0gcmVxdWlyZShcIiEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWhvdC1sb2FkZXIvaG90TW9kdWxlUmVwbGFjZW1lbnQuanNcIikobW9kdWxlLmlkLCB7XCJmaWxlTWFwXCI6XCJ7ZmlsZU5hbWV9XCJ9KTtcbiAgICAgIG1vZHVsZS5ob3QuZGlzcG9zZShjc3NSZWxvYWQpO1xuICAgICAgbW9kdWxlLmhvdC5hY2NlcHQodW5kZWZpbmVkLCBjc3NSZWxvYWQpO1xuICAgIH1cbiAgXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9jb21wb25lbnRzL2Ryb3Bkb3duL2luZGV4LnN0eWxcbi8vIG1vZHVsZSBpZCA9IC4vY29tcG9uZW50cy9kcm9wZG93bi9pbmRleC5zdHlsXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCBJbnRhY3QgZnJvbSAnaW50YWN0JztcbmltcG9ydCB0ZW1wbGF0ZSBmcm9tICcuL2l0ZW0udmR0JztcbmltcG9ydCBEcm9wZG93biBmcm9tICcuL2Ryb3Bkb3duJztcbmltcG9ydCBEcm9wZG93bk1lbnUgZnJvbSAnLi9tZW51JztcbmltcG9ydCB7ZmluZFBhcmVudENvbXBvbmVudH0gZnJvbSAnLi4vdXRpbHMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEcm9wZG93bkl0ZW0gZXh0ZW5kcyBJbnRhY3Qge1xuICAgIEBJbnRhY3QudGVtcGxhdGUoKVxuICAgIHN0YXRpYyB0ZW1wbGF0ZSA9IHRlbXBsYXRlO1xuXG4gICAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICAgICAgZGlzYWJsZWQ6IEJvb2xlYW4sXG4gICAgICAgIGhpZGVPblNlbGVjdDogQm9vbGVhbixcbiAgICB9O1xuXG4gICAgZGVmYXVsdHMoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBkaXNhYmxlZDogZmFsc2UsXG4gICAgICAgICAgICBoaWRlT25TZWxlY3Q6IHRydWUsXG5cbiAgICAgICAgICAgIF9pc0ZvY3VzOiBmYWxzZSxcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBfaW5pdCgpIHtcbiAgICAgICAgLy8gaWYgc2VsZWN0ZWQgaGlkZSBhbGwgZHJvcGRvd24gbWVudVxuICAgICAgICB0aGlzLm9uKCdzZWxlY3QnLCAoKSA9PiB7XG4gICAgICAgICAgICBpZiAodGhpcy5nZXQoJ2hpZGVPblNlbGVjdCcpKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgYW5jZXN0b3IgPSB0aGlzLl9maW5kQW5jZXN0b3JEcm9wZG93bk1lbnUoKTtcbiAgICAgICAgICAgICAgICBhbmNlc3Rvci5oaWRlKHRydWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBfbW91bnQoKSB7XG4gICAgICAgIGNvbnN0IHBhcmVudCA9IHRoaXMucGFyZW50ID0gdGhpcy5fZmluZEFuY2VzdG9yRHJvcGRvd25NZW51KHRydWUpO1xuICAgICAgICBwYXJlbnQuaXRlbXMucHVzaCh0aGlzKTtcbiAgICB9XG5cbiAgICBfb25DbGljayhlKSB7XG4gICAgICAgIGlmICh0aGlzLmdldCgnZGlzYWJsZWQnKSkgcmV0dXJuO1xuXG4gICAgICAgIHRoaXMudHJpZ2dlcignY2xpY2snLCBlKTtcblxuICAgICAgICAvLyBpcyBub3QgYSBzdWIgZHJvcGRvd24gdHJpZ2dlclxuICAgICAgICBpZiAodGhpcy5wYXJlbnRWTm9kZS50YWcgIT09IERyb3Bkb3duKSB7XG4gICAgICAgICAgICB0aGlzLnRyaWdnZXIoJ3NlbGVjdCcsIHRoaXMsIGUpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgX29uTW91c2VFbnRlcihlKSB7XG4gICAgICAgIHRoaXMudHJpZ2dlcignbW91c2VlbnRlcicsIGUpO1xuXG4gICAgICAgIGlmICh0aGlzLmdldCgnZGlzYWJsZWQnKSkgcmV0dXJuO1xuXG4gICAgICAgIHRoaXMucGFyZW50LmZvY3VzSXRlbSh0aGlzKTtcbiAgICB9XG5cbiAgICBfb25Nb3VzZUxlYXZlKGUpIHtcbiAgICAgICAgdGhpcy50cmlnZ2VyKCdtb3VzZWxlYXZlJywgZSk7XG4gICAgICAgIC8vIGlmICh0aGlzLmdldCgnZGlzYWJsZWQnKSkgcmV0dXJuO1xuICAgIH1cblxuICAgIHNlbGVjdCgpIHtcbiAgICAgICAgLy8gaXMgbm90IGEgc3ViIGRyb3Bkb3duIHRyaWdnZXJcbiAgICAgICAgY29uc3QgZHJvcGRvd24gPSB0aGlzLl9pc1N1Yk1lbnUoKTtcbiAgICAgICAgaWYgKCFkcm9wZG93bikge1xuICAgICAgICAgICAgdGhpcy50cmlnZ2VyKCdzZWxlY3QnLCB0aGlzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGRyb3Bkb3duLnNob3coKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZvY3VzKCkge1xuICAgICAgICB0aGlzLnNldCgnX2lzRm9jdXMnLCB0cnVlKTtcblxuICAgICAgICBjb25zdCBlbFJlY3QgPSB0aGlzLmVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgIGNvbnN0IHBFbCA9IHRoaXMucGFyZW50LnJlZnMubWVudS5lbGVtZW50O1xuICAgICAgICBjb25zdCBwRWxSZWN0ID0gcEVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgICBjb25zdCBib3R0b21PdmVyZmxvd0Rpc3RhbmNlID0gZWxSZWN0LmJvdHRvbSAtIHBFbFJlY3QuYm90dG9tO1xuICAgICAgICBjb25zdCB0b3BPdmVyZmxvd0Rpc3RhbmNlID0gZWxSZWN0LnRvcCAtIHBFbFJlY3QudG9wO1xuICAgICAgICBcbiAgICAgICAgaWYgKGJvdHRvbU92ZXJmbG93RGlzdGFuY2UgPiAwKSB7XG4gICAgICAgICAgICBwRWwuc2Nyb2xsVG9wICs9IGJvdHRvbU92ZXJmbG93RGlzdGFuY2U7XG4gICAgICAgIH0gZWxzZSBpZiAodG9wT3ZlcmZsb3dEaXN0YW5jZSA8IDApIHtcbiAgICAgICAgICAgIHBFbC5zY3JvbGxUb3AgKz0gdG9wT3ZlcmZsb3dEaXN0YW5jZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHVuRm9jdXMoKSB7XG4gICAgICAgIHRoaXMuc2V0KCdfaXNGb2N1cycsIGZhbHNlKTtcblxuICAgICAgICBjb25zdCBkcm9wZG93biA9IHRoaXMuX2lzU3ViTWVudSgpO1xuICAgICAgICBpZiAoZHJvcGRvd24pIHtcbiAgICAgICAgICAgIGRyb3Bkb3duLmhpZGUobnVsbCwgbnVsbCwgdHJ1ZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzaG93TWVudUFuZEZvY3VzKCkge1xuICAgICAgICBjb25zdCBkcm9wZG93biA9IHRoaXMuX2lzU3ViTWVudSgpO1xuICAgICAgICBpZiAoZHJvcGRvd24pIHtcbiAgICAgICAgICAgIGRyb3Bkb3duLnNob3cobnVsbCwgbnVsbCwgdHJ1ZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBoaWRlTWVudSgpIHtcbiAgICAgICAgY29uc3QgZHJvcGRvd24gPSB0aGlzLl9pc1N1Yk1lbnUoKTtcbiAgICAgICAgaWYgKGRyb3Bkb3duKSB7XG4gICAgICAgICAgICBkcm9wZG93bi5oaWRlKG51bGwsIG51bGwsIHRydWUpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgX2lzU3ViTWVudSgpIHtcbiAgICAgICAgaWYgKHRoaXMucGFyZW50Vk5vZGUudGFnID09PSBEcm9wZG93bikge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMucGFyZW50Vk5vZGUuY2hpbGRyZW47XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBfZmluZEFuY2VzdG9yRHJvcGRvd25NZW51KGlzRmlyc3QpIHtcbiAgICAgICAgcmV0dXJuIGZpbmRQYXJlbnRDb21wb25lbnQoRHJvcGRvd25NZW51LCB0aGlzLCBpc0ZpcnN0KTtcbiAgICB9XG5cbiAgICBfZGVzdHJveSgpIHtcbiAgICAgICAgY29uc3QgaXRlbXMgPSB0aGlzLnBhcmVudC5pdGVtcztcbiAgICAgICAgaXRlbXMuc3BsaWNlKGl0ZW1zLmluZGV4T2YodGhpcyksIDEpO1xuICAgIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvZHJvcGRvd24vaXRlbS5qcyIsIlxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24ob2JqLCBfVmR0LCBibG9ja3MsICRjYWxsZWUpIHtcbl9WZHQgfHwgKF9WZHQgPSBWZHQpO1xub2JqIHx8IChvYmogPSB7fSk7XG5ibG9ja3MgfHwgKGJsb2NrcyA9IHt9KTtcbnZhciBoID0gX1ZkdC5taXNzLmgsIGhjID0gX1ZkdC5taXNzLmhjLCBodSA9IF9WZHQubWlzcy5odSwgd2lkZ2V0cyA9IHRoaXMgJiYgdGhpcy53aWRnZXRzIHx8IHt9LCBfYmxvY2tzID0ge30sIF9fYmxvY2tzID0ge30sXG5fX3UgPSBfVmR0LnV0aWxzLCBleHRlbmQgPSBfX3UuZXh0ZW5kLCBfZSA9IF9fdS5lcnJvciwgX2NsYXNzTmFtZSA9IF9fdS5jbGFzc05hbWUsXG5fX28gPSBfX3UuT3B0aW9ucywgX2dldE1vZGVsID0gX19vLmdldE1vZGVsLCBfc2V0TW9kZWwgPSBfX28uc2V0TW9kZWwsXG5fc2V0Q2hlY2tib3hNb2RlbCA9IF9fdS5zZXRDaGVja2JveE1vZGVsLCBfZGV0ZWN0Q2hlY2tib3hDaGVja2VkID0gX191LmRldGVjdENoZWNrYm94Q2hlY2tlZCxcbl9zZXRTZWxlY3RNb2RlbCA9IF9fdS5zZXRTZWxlY3RNb2RlbCxcbnNlbGYgPSB0aGlzLmRhdGEsICR0aGlzID0gdGhpcywgc2NvcGUgPSBvYmosIEFuaW1hdGUgPSBzZWxmICYmIHNlbGYuQW5pbWF0ZSwgcGFyZW50ID0gKCRjYWxsZWUgfHwge30pLl9zdXBlclxuLyogaW1wb3J0IHtwcm94eUV2ZW50fSBmcm9tICcuLi91dGlscyc7ICovXG5cbmNvbnN0IHtjaGlsZHJlbiwgZGlzYWJsZWQsIGNsYXNzTmFtZSwgX2lzRm9jdXN9ID0gc2VsZi5nZXQoKTtcblxuY29uc3QgY2xhc3NOYW1lT2JqID0ge1xuICAgICdrLWl0ZW0nOiB0cnVlLFxuICAgICdrLWRpc2FibGVkJzogZGlzYWJsZWQsXG4gICAgW2NsYXNzTmFtZV06IGNsYXNzTmFtZSxcbiAgICAnay1ob3Zlcic6IF9pc0ZvY3VzLFxufVxuXG5yZXR1cm4gaCgnZGl2Jywgeydldi1jbGljayc6IGZ1bmN0aW9uKCkge3RyeSB7cmV0dXJuIFtzZWxmLl9vbkNsaWNrIF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcyksICdldi1tb3VzZWVudGVyJzogZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW3NlbGYuX29uTW91c2VFbnRlciBdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpLCAnZXYtbW91c2VsZWF2ZSc6IGZ1bmN0aW9uKCkge3RyeSB7cmV0dXJuIFtzZWxmLl9vbk1vdXNlTGVhdmUgXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKX0sIGZ1bmN0aW9uKCkge3RyeSB7cmV0dXJuIFtjaGlsZHJlbiBdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpLCBfY2xhc3NOYW1lKGZ1bmN0aW9uKCkge3RyeSB7cmV0dXJuIFtjbGFzc05hbWVPYmogXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKSkpXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9kcm9wZG93bi9pdGVtLnZkdCIsImltcG9ydCBJbnRhY3QgZnJvbSAnaW50YWN0JztcbmltcG9ydCB0ZW1wbGF0ZSBmcm9tICcuL21lbnUudmR0JztcbmltcG9ydCBwb3NpdGlvbiBmcm9tICcuLi9tb3ZlV3JhcHBlci9wb3NpdGlvbic7XG5pbXBvcnQge2ZpbmRQYXJlbnRDb21wb25lbnQsIGdldFRyYW5zaXRpb259IGZyb20gJy4uL3V0aWxzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRHJvcGRvd25NZW51IGV4dGVuZHMgSW50YWN0IHtcbiAgICBASW50YWN0LnRlbXBsYXRlKClcbiAgICBzdGF0aWMgdGVtcGxhdGUgPSB0ZW1wbGF0ZTtcblxuICAgIGRlZmF1bHRzKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgc2hvdzogZmFsc2UsXG4gICAgICAgICAgICB0cmlnZ2VyOiAnaG92ZXInLFxuICAgICAgICAgICAgcG9zaXRpb246IHt9LFxuICAgICAgICAgICAgdHJhbnNpdGlvbjogJ3NsaWRlZG93bicsXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgX2luaXQoKSB7XG4gICAgICAgIHRoaXMuc3ViRHJvcGRvd25zID0gW107XG4gICAgICAgIHRoaXMuaXRlbXMgPSBbXTtcbiAgICAgICAgdGhpcy5mb2N1c0luZGV4ID0gLTE7XG4gICAgICAgIHRoaXMubG9ja2VkID0gZmFsc2U7XG4gICAgfVxuXG4gICAgX21vdW50KCkge1xuICAgICAgICBjb25zdCBwYXJlbnQgPSB0aGlzLl9maW5kUGFyZW50RHJvcGRvd25NZW51KCk7XG4gICAgICAgIGlmIChwYXJlbnQpIHBhcmVudC5zdWJEcm9wZG93bnMucHVzaCh0aGlzKTtcblxuICAgICAgICBpZiAodGhpcy5nZXQoJ3Nob3cnKSkge1xuICAgICAgICAgICAgdGhpcy5fYWRkRG9jdW1lbnRFdmVudHMoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIF9maW5kUGFyZW50RHJvcGRvd25NZW51KCkge1xuICAgICAgICByZXR1cm4gZmluZFBhcmVudENvbXBvbmVudChEcm9wZG93bk1lbnUsIHRoaXMsIHRydWUpO1xuICAgIH1cblxuICAgIHNob3coKSB7XG4gICAgICAgIGNsZWFyVGltZW91dCh0aGlzLnRpbWVyKTtcbiAgICAgICAgdGhpcy5zZXQoJ3Nob3cnLCB0cnVlKTtcbiAgICAgICAgY29uc3QgcGFyZW50ID0gdGhpcy5fZmluZFBhcmVudERyb3Bkb3duTWVudSgpO1xuICAgICAgICBpZiAocGFyZW50KSB7XG4gICAgICAgICAgICBwYXJlbnQuc2hvdygpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgaGlkZShpbW1lZGlhdGVseSkge1xuICAgICAgICBpZiAoIWltbWVkaWF0ZWx5KSB7XG4gICAgICAgICAgICB0aGlzLnRpbWVyID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXQoJ3Nob3cnLCBmYWxzZSk7XG4gICAgICAgICAgICB9LCAyMDApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5zZXQoJ3Nob3cnLCBmYWxzZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB0b2dnbGUoKSB7XG4gICAgICAgIHRoaXMuc2V0KCdzaG93JywgIXRoaXMuZ2V0KCdzaG93JykpO1xuICAgIH1cblxuICAgIHBvc2l0aW9uKCkge1xuICAgICAgICBwb3NpdGlvbih0aGlzLnJlZnMubWVudS5lbGVtZW50LCB7XG4gICAgICAgICAgICBteTogJ2NlbnRlciB0b3ArNScsIFxuICAgICAgICAgICAgYXQ6ICdjZW50ZXIgYm90dG9tJywgXG4gICAgICAgICAgICBvZjogdGhpcy5kcm9wZG93bi5lbGVtZW50LFxuICAgICAgICAgICAgdXNpbmc6IChmZWVkYmFjaykgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0KCd0cmFuc2l0aW9uJywgZ2V0VHJhbnNpdGlvbihmZWVkYmFjaykpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIC4uLnRoaXMuZ2V0KCdwb3NpdGlvbicpXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIF9vblNob3coKSB7XG4gICAgICAgIHRoaXMuZm9jdXNJbmRleCA9IC0xO1xuICAgICAgICB0aGlzLl9hZGREb2N1bWVudEV2ZW50cygpO1xuICAgICAgICB0aGlzLnBvc2l0aW9uKCk7XG4gICAgfVxuXG4gICAgX2FkZERvY3VtZW50RXZlbnRzKCkge1xuICAgICAgICBjb25zdCBwYXJlbnQgPSB0aGlzLl9maW5kUGFyZW50RHJvcGRvd25NZW51KCk7XG4gICAgICAgIGlmICghcGFyZW50KSB7XG4gICAgICAgICAgICAvLyBpZiAodGhpcy5nZXQoJ3RyaWdnZXInKSA9PT0gJ2NsaWNrJykge1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5fb25Eb2N1bWVudENsaWNrKTtcbiAgICAgICAgICAgIC8vIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHBhcmVudC5sb2NrZWQgPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIHRoaXMuX29uS2V5ZG93bik7XG4gICAgfVxuXG4gICAgX3JlbW92ZURvY3VtZW50RXZlbnRzKCkge1xuICAgICAgICBjb25zdCBwYXJlbnQgPSB0aGlzLl9maW5kUGFyZW50RHJvcGRvd25NZW51KCk7XG4gICAgICAgIGlmICghcGFyZW50KSB7XG4gICAgICAgICAgICAvLyBpZiAodGhpcy5nZXQoJ3RyaWdnZXInKSA9PT0gJ2NsaWNrJykge1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5fb25Eb2N1bWVudENsaWNrKTtcbiAgICAgICAgICAgIC8vIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHBhcmVudC5sb2NrZWQgPSBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCB0aGlzLl9vbktleWRvd24pO1xuICAgIH1cblxuICAgIF9vbkRvY3VtZW50Q2xpY2soZSkge1xuICAgICAgICBjb25zdCB0YXJnZXQgPSBlLnRhcmdldDtcbiAgICAgICAgY29uc3QgbWVudSA9IHRoaXMucmVmcy5tZW51LmVsZW1lbnQ7XG5cbiAgICAgICAgLy8gaXMgYSBkcm9wZG93biBtZW51XG4gICAgICAgIGlmIChtZW51ID09PSB0YXJnZXQgfHwgbWVudS5jb250YWlucyh0YXJnZXQpKSByZXR1cm47XG4gICAgICAgIC8vIGlzIGNsaWNrIG9uIHN1YiBtZW51XG4gICAgICAgIGlmICh0aGlzLl9pc0NsaWNrU3ViTWVudSh0YXJnZXQsIHRoaXMuc3ViRHJvcGRvd25zKSkgcmV0dXJuO1xuICAgICAgICAvLyBjdXN0b20gZmxhZyB0byBpbmRpY2F0ZSB0aGF0IHRoZSBldmVudCBkb2VzIG5vdCBsZWFkIHRvIGNsb3NlIG1lbnVcbiAgICAgICAgaWYgKGUuX2Ryb3Bkb3duKSByZXR1cm47XG5cbiAgICAgICAgdGhpcy5oaWRlKHRydWUpO1xuICAgIH1cblxuICAgIF9vbktleWRvd24oZSkge1xuICAgICAgICBpZiAodGhpcy5sb2NrZWQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBzd2l0Y2ggKGUua2V5Q29kZSkge1xuICAgICAgICAgICAgLy8gZG93blxuICAgICAgICAgICAgY2FzZSA0MDpcbiAgICAgICAgICAgICAgICB0aGlzLl9mb2N1c05leHRJdGVtKGUpOyBcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIC8vIHVwXG4gICAgICAgICAgICBjYXNlIDM4OlxuICAgICAgICAgICAgICAgIHRoaXMuX2ZvY3VzUHJldkl0ZW0oZSk7IFxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgLy8gcmlnaHRcbiAgICAgICAgICAgIGNhc2UgMzk6XG4gICAgICAgICAgICAgICAgdGhpcy5fc2hvd1N1Yk1lbnUoZSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAvLyBsZWZ0XG4gICAgICAgICAgICBjYXNlIDM3OlxuICAgICAgICAgICAgICAgIHRoaXMuX2hpZGVTdWJNZW51KGUpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgLy8gZW50ZXJcbiAgICAgICAgICAgIGNhc2UgMTM6XG4gICAgICAgICAgICAgICAgdGhpcy5fc2VsZWN0SXRlbShlKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIF9mb2N1c05leHRJdGVtKGUpIHtcbiAgICAgICAgY29uc3QgcGFyZW50ID0gdGhpcy5fZmluZFBhcmVudERyb3Bkb3duTWVudSgpO1xuICAgICAgICBpZiAocGFyZW50ICYmIHRoaXMuZm9jdXNJbmRleCA8IDApIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHRoaXMuZm9jdXNJdGVtQnlJbmRleCh0aGlzLmZvY3VzSW5kZXggKyAxLCAnZG93bicpO1xuICAgIH1cblxuICAgIF9mb2N1c1ByZXZJdGVtKGUpIHtcbiAgICAgICAgY29uc3QgcGFyZW50ID0gdGhpcy5fZmluZFBhcmVudERyb3Bkb3duTWVudSgpO1xuICAgICAgICBpZiAocGFyZW50ICYmIHRoaXMuZm9jdXNJbmRleCA8IDApIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHRoaXMuZm9jdXNJdGVtQnlJbmRleCh0aGlzLmZvY3VzSW5kZXggLSAxLCAndXAnKTtcbiAgICB9XG5cbiAgICBmb2N1c0l0ZW1CeUluZGV4KGluZGV4LCBkaXJlY3Rpb24gPSAnZG93bicpIHtcbiAgICAgICAgY29uc3QgaXRlbXMgPSB0aGlzLml0ZW1zO1xuICAgICAgICBjb25zdCBtYXggPSBpdGVtcy5sZW5ndGggLSAxO1xuICAgICAgICBjb25zdCBvbGRJbmRleCA9IHRoaXMuZm9jdXNJbmRleDtcblxuICAgICAgICBmdW5jdGlvbiBmaXhJbmRleChpbmRleCkge1xuICAgICAgICAgICAgaWYgKGluZGV4ID4gbWF4KSB7XG4gICAgICAgICAgICAgICAgaW5kZXggPSAwO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChpbmRleCA8IDApIHtcbiAgICAgICAgICAgICAgICBpbmRleCA9IG1heDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBpbmRleDtcbiAgICAgICAgfVxuXG4gICAgICAgIGluZGV4ID0gZml4SW5kZXgoaW5kZXgpO1xuXG4gICAgICAgIGxldCBpID0gMDtcbiAgICAgICAgd2hpbGUgKGkgPD0gbWF4ICYmIGl0ZW1zW2luZGV4XSAmJiBpdGVtc1tpbmRleF0uZ2V0KCdkaXNhYmxlZCcpKSB7XG4gICAgICAgICAgICBpbmRleCA9IGZpeEluZGV4KGRpcmVjdGlvbiA9PT0gJ2Rvd24nID8gaW5kZXggKyAxIDogaW5kZXggLSAxKTtcbiAgICAgICAgICAgIGkrKztcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGFsbCBpdGVtcyBhcmUgZGlzYWJsZWRcbiAgICAgICAgaWYgKGkgPiBtYXgpIHJldHVybjtcblxuICAgICAgICB0aGlzLmZvY3VzSW5kZXggPSBpbmRleDtcblxuICAgICAgICBpZiAob2xkSW5kZXggPiAtMSAmJiBpdGVtc1tvbGRJbmRleF0pIHtcbiAgICAgICAgICAgIGl0ZW1zW29sZEluZGV4XS51bkZvY3VzKCk7XG4gICAgICAgIH1cblxuICAgICAgICBpdGVtc1tpbmRleF0uZm9jdXMoKTtcbiAgICB9XG5cbiAgICBfc2VsZWN0SXRlbShlKSB7XG4gICAgICAgIHRoaXMuX3Nob3dTdWJNZW51KGUpO1xuICAgICAgICBpZiAodGhpcy5mb2N1c0luZGV4ID4gLTEpIHtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIHRoaXMuaXRlbXNbdGhpcy5mb2N1c0luZGV4XS5zZWxlY3QoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIF9zaG93U3ViTWVudShlKSB7XG4gICAgICAgIGNvbnN0IHBhcmVudCA9IHRoaXMuX2ZpbmRQYXJlbnREcm9wZG93bk1lbnUoKTtcbiAgICAgICAgaWYgKCFwYXJlbnQgJiYgdGhpcy5mb2N1c0luZGV4IDwgMCkgcmV0dXJuO1xuXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgaWYgKHBhcmVudCAmJiB0aGlzLmZvY3VzSW5kZXggPCAwKSB7XG4gICAgICAgICAgICB0aGlzLmZvY3VzSXRlbUJ5SW5kZXgoMCk7XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5mb2N1c0luZGV4ID4gLTEpIHtcbiAgICAgICAgICAgIHRoaXMuaXRlbXNbdGhpcy5mb2N1c0luZGV4XS5zaG93TWVudUFuZEZvY3VzKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBfaGlkZVN1Yk1lbnUoZSkge1xuICAgICAgICBpZiAodGhpcy5mb2N1c0luZGV4ID4gLTEpIHtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIHRoaXMuaXRlbXNbdGhpcy5mb2N1c0luZGV4XS5oaWRlTWVudSgpO1xuXG4gICAgICAgICAgICBjb25zdCBwYXJlbnQgPSBmaW5kUGFyZW50Q29tcG9uZW50KERyb3Bkb3duTWVudSwgdGhpcywgdHJ1ZSk7XG4gICAgICAgICAgICBpZiAocGFyZW50KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5kcm9wZG93bi5oaWRlKG51bGwsIG51bGwsIHRydWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZm9jdXNJdGVtKGl0ZW0pIHtcbiAgICAgICAgY29uc3QgaW5kZXggPSB0aGlzLml0ZW1zLmluZGV4T2YoaXRlbSk7XG4gICAgICAgIHRoaXMuZm9jdXNJdGVtQnlJbmRleChpbmRleCk7XG4gICAgfVxuXG4gICAgX2lzQ2xpY2tTdWJNZW51KHRhcmdldCwgc3ViTWVudXMpIHtcbiAgICAgICAgbGV0IHJldCA9IGZhbHNlO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHN1Yk1lbnVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBzdWJNZW51ID0gc3ViTWVudXNbaV0ucmVmcy5tZW51O1xuICAgICAgICAgICAgaWYgKHN1Yk1lbnUpIHtcbiAgICAgICAgICAgICAgICBpZiAodGFyZ2V0ID09PSBzdWJNZW51LmVsZW1lbnQgfHwgc3ViTWVudS5lbGVtZW50LmNvbnRhaW5zKHRhcmdldCkpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0ID0gdGhpcy5faXNDbGlja1N1Yk1lbnUodGFyZ2V0LCBzdWJNZW51c1tpXS5zdWJEcm9wZG93bnMpO1xuICAgICAgICAgICAgICAgICAgICBpZiAocmV0KSBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJldDtcbiAgICB9XG5cbiAgICBfZGVzdHJveSgpIHtcbiAgICAgICAgY29uc3QgcGFyZW50ID0gdGhpcy5fZmluZFBhcmVudERyb3Bkb3duTWVudSgpO1xuICAgICAgICBpZiAocGFyZW50KSB7XG4gICAgICAgICAgICBjb25zdCBzdWJEcm9wZG93bnMgPSBwYXJlbnQuc3ViRHJvcGRvd25zO1xuICAgICAgICAgICAgc3ViRHJvcGRvd25zLnNwbGljZShzdWJEcm9wZG93bnMuaW5kZXhPZih0aGlzKSwgMSk7XG4gICAgICAgIH0gXG4gICAgICAgIGNsZWFyVGltZW91dCh0aGlzLnRpbWVyKTtcbiAgICAgICAgdGhpcy5fcmVtb3ZlRG9jdW1lbnRFdmVudHMoKTtcbiAgICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL2Ryb3Bkb3duL21lbnUuanMiLCJpbXBvcnQgTW92ZVdyYXBwZXIgZnJvbSAnLi4vbW92ZVdyYXBwZXInO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24ob2JqLCBfVmR0LCBibG9ja3MsICRjYWxsZWUpIHtcbl9WZHQgfHwgKF9WZHQgPSBWZHQpO1xub2JqIHx8IChvYmogPSB7fSk7XG5ibG9ja3MgfHwgKGJsb2NrcyA9IHt9KTtcbnZhciBoID0gX1ZkdC5taXNzLmgsIGhjID0gX1ZkdC5taXNzLmhjLCBodSA9IF9WZHQubWlzcy5odSwgd2lkZ2V0cyA9IHRoaXMgJiYgdGhpcy53aWRnZXRzIHx8IHt9LCBfYmxvY2tzID0ge30sIF9fYmxvY2tzID0ge30sXG5fX3UgPSBfVmR0LnV0aWxzLCBleHRlbmQgPSBfX3UuZXh0ZW5kLCBfZSA9IF9fdS5lcnJvciwgX2NsYXNzTmFtZSA9IF9fdS5jbGFzc05hbWUsXG5fX28gPSBfX3UuT3B0aW9ucywgX2dldE1vZGVsID0gX19vLmdldE1vZGVsLCBfc2V0TW9kZWwgPSBfX28uc2V0TW9kZWwsXG5fc2V0Q2hlY2tib3hNb2RlbCA9IF9fdS5zZXRDaGVja2JveE1vZGVsLCBfZGV0ZWN0Q2hlY2tib3hDaGVja2VkID0gX191LmRldGVjdENoZWNrYm94Q2hlY2tlZCxcbl9zZXRTZWxlY3RNb2RlbCA9IF9fdS5zZXRTZWxlY3RNb2RlbCxcbnNlbGYgPSB0aGlzLmRhdGEsICR0aGlzID0gdGhpcywgc2NvcGUgPSBvYmosIEFuaW1hdGUgPSBzZWxmICYmIHNlbGYuQW5pbWF0ZSwgcGFyZW50ID0gKCRjYWxsZWUgfHwge30pLl9zdXBlclxuXG5cbmNvbnN0IHtjaGlsZHJlbiwgc2hvdywgdHJpZ2dlciwgY2xhc3NOYW1lLCB0cmFuc2l0aW9ufSA9IHNlbGYuZ2V0KCk7XG5cbmNvbnN0IGV2ZW50cyA9IHt9O1xuLy8gbm8gbWF0dGVyIHdoYXQgdGhlIHRyaWdnZXIgaXMsIHdlIHNob3VsZCBzaG93IG1lbnUgd2hlbiBlbnRlciBpdC5cbi8vIGZvciB0aGlzIGNhc2U6IGhvdmVyIHRyaWdnZXIgbmVzdHMgY2xpY2sgdHJpZ2dlclxuZXZlbnRzWydldi1tb3VzZWVudGVyJ10gPSBzZWxmLnNob3c7XG5pZiAodHJpZ2dlciA9PT0gJ2hvdmVyJykge1xuICAgIGV2ZW50c1snZXYtbW91c2VsZWF2ZSddID0gc2VsZi5oaWRlLmJpbmQoc2VsZiwgZmFsc2UpO1xufVxuXG5yZXR1cm4gaChNb3ZlV3JhcHBlciwgeydfcGFyZW50JzogZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW3NlbGYgXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKSwgJ2NoaWxkcmVuJzogZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW3Nob3cgXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKSA/IGgoQW5pbWF0ZSwgeydjbGFzc05hbWUnOiBfY2xhc3NOYW1lKGZ1bmN0aW9uKCkge3RyeSB7cmV0dXJuIFt7XCJrLWRyb3Bkb3duLW1lbnVcIjogdHJ1ZSwgW2NsYXNzTmFtZV06IGNsYXNzTmFtZX0gXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKSksICdhOnRyYW5zaXRpb24nOiBmdW5jdGlvbigpIHt0cnkge3JldHVybiBbdHJhbnNpdGlvbiBdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpLCAuLi5mdW5jdGlvbigpIHt0cnkge3JldHVybiBbZXZlbnRzIF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcyksICdhOmRlbGF5RGVzdHJveSc6IGZ1bmN0aW9uKCkge3RyeSB7cmV0dXJuIFtmYWxzZSBdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpLCAnZXYtJGRlc3Ryb3llZCc6IGZ1bmN0aW9uKCkge3RyeSB7cmV0dXJuIFtzZWxmLl9yZW1vdmVEb2N1bWVudEV2ZW50cyBdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpLCAnZXYtJG1vdW50ZWQnOiBmdW5jdGlvbigpIHt0cnkge3JldHVybiBbc2VsZi5fb25TaG93IF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcyksICdjaGlsZHJlbic6IGZ1bmN0aW9uKCkge3RyeSB7cmV0dXJuIFtjaGlsZHJlbiBdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpLCAnX2NvbnRleHQnOiAkdGhpc30sIG51bGwsIG51bGwsIG51bGwsIGZ1bmN0aW9uKGkpIHt3aWRnZXRzWydtZW51J10gPSBpfSkgOiB1bmRlZmluZWQsICdfY29udGV4dCc6ICR0aGlzfSwgbnVsbCwgbnVsbCwgbnVsbCwgZnVuY3Rpb24oaSkge3dpZGdldHNbJ3dyYXBwZXInXSA9IGl9KVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvZHJvcGRvd24vbWVudS52ZHQiLCJpbXBvcnQgSW50YWN0IGZyb20gJ2ludGFjdCc7XG5pbXBvcnQgdGVtcGxhdGUgZnJvbSAnLi9pbmRleC52ZHQnO1xuaW1wb3J0ICcuLi8uLi9zdHlsZXMva3BjLnN0eWwnO1xuaW1wb3J0ICcuL2luZGV4LnN0eWwnO1xuaW1wb3J0IHtzZWxlY3RJbnB1dH0gZnJvbSAnLi4vdXRpbHMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbnB1dCBleHRlbmRzIEludGFjdCB7XG4gICAgQEludGFjdC50ZW1wbGF0ZVxuICAgIHN0YXRpYyB0ZW1wbGF0ZSA9IHRlbXBsYXRlO1xuXG4gICAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICByZWFkb25seTogQm9vbGVhbixcbiAgICAgICAgY2xlYXJhYmxlOiBCb29sZWFuLFxuICAgICAgICBkaXNhYmxlZDogQm9vbGVhbixcbiAgICAgICAgZmx1aWQ6IEJvb2xlYW4sXG4gICAgfTtcblxuICAgIGRlZmF1bHRzKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdHlwZTogJ3RleHQnLCAvLyB0ZXh0IHwgdGV4dGFyZWFcbiAgICAgICAgICAgIG5hbWU6IHVuZGVmaW5lZCxcbiAgICAgICAgICAgIHZhbHVlOiB1bmRlZmluZWQsXG4gICAgICAgICAgICBkZWZhdWx0VmFsdWU6IHVuZGVmaW5lZCxcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyOiB1bmRlZmluZWQsXG4gICAgICAgICAgICByZWFkb25seTogZmFsc2UsXG4gICAgICAgICAgICBjbGVhcmFibGU6IGZhbHNlLFxuICAgICAgICAgICAgZGlzYWJsZWQ6IGZhbHNlLFxuICAgICAgICAgICAgc2l6ZTogJ2RlZmF1bHQnLFxuICAgICAgICAgICAgcm93czogMixcbiAgICAgICAgICAgIHNwZWxsY2hlY2s6IGZhbHNlLFxuICAgICAgICAgICAgYXV0b1dpZHRoOiBmYWxzZSxcbiAgICAgICAgICAgIGZsdWlkOiBmYWxzZSxcbiAgICAgICAgICAgIHdpZHRoOiB1bmRlZmluZWQsXG4gICAgICAgICAgICB0YWJpbmRleDogdW5kZWZpbmVkLFxuICAgICAgICB9XG4gICAgfVxuXG4gICAgX2luaXQoKSB7XG4gICAgICAgIHRoaXMub24oJyRjaGFuZ2VkOnZhbHVlJywgdGhpcy5fYWRqdXN0V2lkdGgpO1xuICAgICAgICB0aGlzLm9uKCckY2hhbmdlZDpwbGFjZWhvbGRlcicsIHRoaXMuX2FkanVzdFdpZHRoKTtcbiAgICB9XG5cbiAgICBfbW91bnQoKSB7XG4gICAgICAgIHRoaXMuX2FkanVzdFdpZHRoKCk7XG4gICAgfVxuXG4gICAgX2FkanVzdFdpZHRoKCkge1xuICAgICAgICBpZiAodGhpcy5nZXQoJ2F1dG9XaWR0aCcpKSB7XG4gICAgICAgICAgICBjb25zdCB3aWR0aCA9IHRoaXMucmVmcy5mYWtlLm9mZnNldFdpZHRoIHx8IDE7XG4gICAgICAgICAgICB0aGlzLnJlZnMuaW5wdXQuc3R5bGUud2lkdGggPSBgJHt3aWR0aCArIDF9cHhgO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY2xlYXIoZSkge1xuICAgICAgICB0aGlzLnNldCgndmFsdWUnLCAnJyk7XG4gICAgICAgIHRoaXMuZm9jdXMoKTtcbiAgICAgICAgdGhpcy50cmlnZ2VyKCdjbGVhcicsIGUpO1xuICAgIH1cblxuICAgIHNlbGVjdCgpIHtcbiAgICAgICAgc2VsZWN0SW5wdXQodGhpcy5yZWZzLmlucHV0KTtcbiAgICB9XG5cbiAgICBmb2N1cygpIHtcbiAgICAgICAgdGhpcy5yZWZzLmlucHV0LmZvY3VzKCk7XG4gICAgfVxuXG4gICAgX29uSW5wdXQoZSkge1xuICAgICAgICB0aGlzLnNldCgndmFsdWUnLCBlLnRhcmdldC52YWx1ZSk7XG4gICAgICAgIHRoaXMudHJpZ2dlcignaW5wdXQnLCBlKTtcbiAgICB9XG5cbiAgICBfcHJveHlFdmVudChuYW1lLCBlKSB7XG4gICAgICAgIHRoaXMudHJpZ2dlcihuYW1lLCBlKTtcbiAgICB9XG59XG5cbmV4cG9ydCB7SW5wdXR9O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9pbnB1dC9pbmRleC5qcyIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG4gICAgaWYobW9kdWxlLmhvdCkge1xuICAgICAgLy8gMTUyNzU3NjY5OTgwOVxuICAgICAgdmFyIGNzc1JlbG9hZCA9IHJlcXVpcmUoXCIhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1ob3QtbG9hZGVyL2hvdE1vZHVsZVJlcGxhY2VtZW50LmpzXCIpKG1vZHVsZS5pZCwge1wiZmlsZU1hcFwiOlwie2ZpbGVOYW1lfVwifSk7XG4gICAgICBtb2R1bGUuaG90LmRpc3Bvc2UoY3NzUmVsb2FkKTtcbiAgICAgIG1vZHVsZS5ob3QuYWNjZXB0KHVuZGVmaW5lZCwgY3NzUmVsb2FkKTtcbiAgICB9XG4gIFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vY29tcG9uZW50cy9pbnB1dC9pbmRleC5zdHlsXG4vLyBtb2R1bGUgaWQgPSAuL2NvbXBvbmVudHMvaW5wdXQvaW5kZXguc3R5bFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQge2FkZFN0eWxlfSBmcm9tICcuLi91dGlscyc7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihvYmosIF9WZHQsIGJsb2NrcywgJGNhbGxlZSkge1xuX1ZkdCB8fCAoX1ZkdCA9IFZkdCk7XG5vYmogfHwgKG9iaiA9IHt9KTtcbmJsb2NrcyB8fCAoYmxvY2tzID0ge30pO1xudmFyIGggPSBfVmR0Lm1pc3MuaCwgaGMgPSBfVmR0Lm1pc3MuaGMsIGh1ID0gX1ZkdC5taXNzLmh1LCB3aWRnZXRzID0gdGhpcyAmJiB0aGlzLndpZGdldHMgfHwge30sIF9ibG9ja3MgPSB7fSwgX19ibG9ja3MgPSB7fSxcbl9fdSA9IF9WZHQudXRpbHMsIGV4dGVuZCA9IF9fdS5leHRlbmQsIF9lID0gX191LmVycm9yLCBfY2xhc3NOYW1lID0gX191LmNsYXNzTmFtZSxcbl9fbyA9IF9fdS5PcHRpb25zLCBfZ2V0TW9kZWwgPSBfX28uZ2V0TW9kZWwsIF9zZXRNb2RlbCA9IF9fby5zZXRNb2RlbCxcbl9zZXRDaGVja2JveE1vZGVsID0gX191LnNldENoZWNrYm94TW9kZWwsIF9kZXRlY3RDaGVja2JveENoZWNrZWQgPSBfX3UuZGV0ZWN0Q2hlY2tib3hDaGVja2VkLFxuX3NldFNlbGVjdE1vZGVsID0gX191LnNldFNlbGVjdE1vZGVsLFxuc2VsZiA9IHRoaXMuZGF0YSwgJHRoaXMgPSB0aGlzLCBzY29wZSA9IG9iaiwgQW5pbWF0ZSA9IHNlbGYgJiYgc2VsZi5BbmltYXRlLCBwYXJlbnQgPSAoJGNhbGxlZSB8fCB7fSkuX3N1cGVyXG5cblxuY29uc3Qge1xuICAgIHR5cGUsIG5hbWUsIHZhbHVlLCBwbGFjZWhvbGRlciwgdGFiaW5kZXgsXG4gICAgcmVhZG9ubHksIGNsZWFyYWJsZSwgZGlzYWJsZWQsIHNpemUsIFxuICAgIHJvd3MsIHNwZWxsY2hlY2ssIGRlZmF1bHRWYWx1ZSwgc3R5bGUsXG4gICAgY2xhc3NOYW1lLCBhdXRvV2lkdGgsIGZsdWlkLCB3aWR0aCxcbn0gPSBzZWxmLmdldCgpO1xuXG5jb25zdCBjbGFzc05hbWVPYmogPSB7XG4gICAgJ2staW5wdXQnOiB0cnVlLFxuICAgIFtgay0ke3NpemV9YF06IHNpemUgIT09ICdkZWZhdWx0JyxcbiAgICAnay1ncm91cCc6IGJsb2Nrcy5wcmVwZW5kIHx8IGJsb2Nrcy5hcHBlbmQsXG4gICAgJ2stZGlzYWJsZWQnOiBkaXNhYmxlZCxcbiAgICAnay13aXRoLXByZWZpeCc6IGJsb2Nrcy5wcmVmaXgsXG4gICAgJ2std2l0aC1zdWZmaXgnOiBibG9ja3Muc3VmZml4LFxuICAgICdrLWNsZWFyYWJsZSc6IGNsZWFyYWJsZSxcbiAgICAnay1hdXRvLXdpZHRoJzogYXV0b1dpZHRoLFxuICAgICdrLWZsdWlkJzogZmx1aWQsXG4gICAgW2NsYXNzTmFtZV06IGNsYXNzTmFtZSxcbn1cblxuY29uc3QgZXZlbnRzID0gW1xuICAgICdrZXlkb3duJywgJ2tleXVwJywgJ2NoYW5nZScsXG4gICAgJ2tleXByZXNzJywgJ2ZvY3VzJywgJ2JsdXInLCAvKiAnaW5wdXQnICovXG5dLnJlZHVjZSgobWVtbywgbmFtZSkgPT4ge1xuICAgIG1lbW9bYGV2LSR7bmFtZX1gXSA9IHNlbGYuX3Byb3h5RXZlbnQuYmluZChzZWxmLCBuYW1lKTtcbiAgICByZXR1cm4gbWVtbztcbn0sIHt9KTtcblxuY29uc3Qgd3JhcHBlckV2ZW50cyA9IFtcbiAgICAnY2xpY2snLCAnbW91c2VlbnRlcicsICdtb3VzZWxlYXZlJ1xuXS5yZWR1Y2UoKG1lbW8sIG5hbWUpID0+IHtcbiAgICBtZW1vW2Bldi0ke25hbWV9YF0gPSBzZWxmLl9wcm94eUV2ZW50LmJpbmQoc2VsZiwgbmFtZSk7XG4gICAgcmV0dXJuIG1lbW87XG59LCB7fSk7XG5cbnJldHVybiBoKCdkaXYnLCB7J3N0eWxlJzogZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW3dpZHRoICE9IG51bGwgPyBhZGRTdHlsZShzdHlsZSwge3dpZHRoOiBgJHt3aWR0aH1weGB9KSA6IHN0eWxlIF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcyksIC4uLmZ1bmN0aW9uKCkge3RyeSB7cmV0dXJuIFt3cmFwcGVyRXZlbnRzIF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcyl9LCBbZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW2Jsb2Nrcy5wcmVwZW5kIF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcykgPyBoKCdkaXYnLCBudWxsLCAoX2Jsb2Nrc1tcInByZXBlbmRcIl0gPSBmdW5jdGlvbihwYXJlbnQpIHtyZXR1cm4gbnVsbDt9KSAmJiAoX19ibG9ja3NbXCJwcmVwZW5kXCJdID0gZnVuY3Rpb24ocGFyZW50KSB7XG52YXIgc2VsZiA9IHRoaXM7XG5yZXR1cm4gYmxvY2tzW1wicHJlcGVuZFwiXSA/IGJsb2Nrc1tcInByZXBlbmRcIl0uY2FsbCh0aGlzLCBmdW5jdGlvbigpIHtcbnJldHVybiBfYmxvY2tzW1wicHJlcGVuZFwiXS5jYWxsKHNlbGYsIHBhcmVudCk7XG59KSA6IF9ibG9ja3NbXCJwcmVwZW5kXCJdLmNhbGwodGhpcywgcGFyZW50KTtcbn0pICYmIF9fYmxvY2tzW1wicHJlcGVuZFwiXS5jYWxsKHRoaXMpLCAnay1wcmVwZW5kJykgOiB1bmRlZmluZWQsIGgoJ2RpdicsIG51bGwsIFtmdW5jdGlvbigpIHt0cnkge3JldHVybiBbYmxvY2tzLnByZWZpeCBdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpID8gaCgnZGl2JywgbnVsbCwgKF9ibG9ja3NbXCJwcmVmaXhcIl0gPSBmdW5jdGlvbihwYXJlbnQpIHtyZXR1cm4gbnVsbDt9KSAmJiAoX19ibG9ja3NbXCJwcmVmaXhcIl0gPSBmdW5jdGlvbihwYXJlbnQpIHtcbnZhciBzZWxmID0gdGhpcztcbnJldHVybiBibG9ja3NbXCJwcmVmaXhcIl0gPyBibG9ja3NbXCJwcmVmaXhcIl0uY2FsbCh0aGlzLCBmdW5jdGlvbigpIHtcbnJldHVybiBfYmxvY2tzW1wicHJlZml4XCJdLmNhbGwoc2VsZiwgcGFyZW50KTtcbn0pIDogX2Jsb2Nrc1tcInByZWZpeFwiXS5jYWxsKHRoaXMsIHBhcmVudCk7XG59KSAmJiBfX2Jsb2Nrc1tcInByZWZpeFwiXS5jYWxsKHRoaXMpLCAnay1wcmVmaXgnKSA6IHVuZGVmaW5lZCwgZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW3R5cGUgIT09ICd0ZXh0YXJlYScgXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKSA/IGgoJ2lucHV0Jywgeyd0eXBlJzogZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW3R5cGUgXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKSwgJ25hbWUnOiBmdW5jdGlvbigpIHt0cnkge3JldHVybiBbbmFtZSBdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpLCAndmFsdWUnOiBmdW5jdGlvbigpIHt0cnkge3JldHVybiBbdmFsdWUgXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKSwgJ2V2LWlucHV0JzogZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW3NlbGYuX29uSW5wdXQgXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKSwgJ2RlZmF1bHRWYWx1ZSc6IGZ1bmN0aW9uKCkge3RyeSB7cmV0dXJuIFtkZWZhdWx0VmFsdWUgXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKSwgJ3JlYWRPbmx5JzogZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW3JlYWRvbmx5IF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcyksICdwbGFjZWhvbGRlcic6IGZ1bmN0aW9uKCkge3RyeSB7cmV0dXJuIFtwbGFjZWhvbGRlciBdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpLCAnZGlzYWJsZWQnOiBmdW5jdGlvbigpIHt0cnkge3JldHVybiBbZGlzYWJsZWQgXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKSwgJ3RhYmluZGV4JzogZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW3RhYmluZGV4IF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcyksIC4uLmZ1bmN0aW9uKCkge3RyeSB7cmV0dXJuIFtldmVudHMgXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKX0sIG51bGwsICdrLWlubmVyJywgbnVsbCwgZnVuY3Rpb24oaSkge3dpZGdldHNbJ2lucHV0J10gPSBpfSkgOiBoKCd0ZXh0YXJlYScsIHsndmFsdWUnOiBmdW5jdGlvbigpIHt0cnkge3JldHVybiBbdmFsdWUgXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKSwgJ2V2LWlucHV0JzogZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW3NlbGYuX29uSW5wdXQgXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKSwgJ2RlZmF1bHRWYWx1ZSc6IGZ1bmN0aW9uKCkge3RyeSB7cmV0dXJuIFtkZWZhdWx0VmFsdWUgXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKSwgJ25hbWUnOiBmdW5jdGlvbigpIHt0cnkge3JldHVybiBbbmFtZSBdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpLCAncmVhZE9ubHknOiBmdW5jdGlvbigpIHt0cnkge3JldHVybiBbcmVhZG9ubHkgXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKSwgJ3BsYWNlaG9sZGVyJzogZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW3BsYWNlaG9sZGVyIF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcyksICdkaXNhYmxlZCc6IGZ1bmN0aW9uKCkge3RyeSB7cmV0dXJuIFtkaXNhYmxlZCBdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpLCAncm93cyc6IGZ1bmN0aW9uKCkge3RyeSB7cmV0dXJuIFtyb3dzIF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcyksICdzcGVsbGNoZWNrJzogZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW3NwZWxsY2hlY2sgXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKSwgJ3RhYmluZGV4JzogZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW3RhYmluZGV4IF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcyksIC4uLmZ1bmN0aW9uKCkge3RyeSB7cmV0dXJuIFtldmVudHMgXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKX0sIG51bGwsICdrLWlubmVyIGstdGV4dGFyZWEnLCBudWxsLCBmdW5jdGlvbihpKSB7d2lkZ2V0c1snaW5wdXQnXSA9IGl9KSwgZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW2Jsb2Nrcy5zdWZmaXggfHwgY2xlYXJhYmxlIF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcykgPyBoKCdkaXYnLCBudWxsLCBbZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW2NsZWFyYWJsZSBdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpID8gaCgnaScsIHsnZXYtY2xpY2snOiBmdW5jdGlvbigpIHt0cnkge3JldHVybiBbc2VsZi5jbGVhciBdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpfSwgbnVsbCwgX2NsYXNzTmFtZShmdW5jdGlvbigpIHt0cnkge3JldHVybiBbe1xuICAgICAgICAgICAgICAgICAgICBcImstY2xlYXIgay1pY29uIGlvbi1pb3MtY2xvc2VcIjogdHJ1ZSwgXG4gICAgICAgICAgICAgICAgICAgIFwiay1zaG93XCI6IHZhbHVlLFxuICAgICAgICAgICAgICAgIH0gXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKSkpIDogdW5kZWZpbmVkLCAoX2Jsb2Nrc1tcInN1ZmZpeFwiXSA9IGZ1bmN0aW9uKHBhcmVudCkge3JldHVybiBudWxsO30pICYmIChfX2Jsb2Nrc1tcInN1ZmZpeFwiXSA9IGZ1bmN0aW9uKHBhcmVudCkge1xudmFyIHNlbGYgPSB0aGlzO1xucmV0dXJuIGJsb2Nrc1tcInN1ZmZpeFwiXSA/IGJsb2Nrc1tcInN1ZmZpeFwiXS5jYWxsKHRoaXMsIGZ1bmN0aW9uKCkge1xucmV0dXJuIF9ibG9ja3NbXCJzdWZmaXhcIl0uY2FsbChzZWxmLCBwYXJlbnQpO1xufSkgOiBfYmxvY2tzW1wic3VmZml4XCJdLmNhbGwodGhpcywgcGFyZW50KTtcbn0pICYmIF9fYmxvY2tzW1wic3VmZml4XCJdLmNhbGwodGhpcyldLCAnay1zdWZmaXgnKSA6IHVuZGVmaW5lZCwgZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW2F1dG9XaWR0aCBdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpID8gaCgnZGl2JywgbnVsbCwgZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW3ZhbHVlID09IG51bGwgfHwgdmFsdWUgPT09ICcnID8gcGxhY2Vob2xkZXIgOiB2YWx1ZSBdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpLCAnay1mYWtlJywgbnVsbCwgZnVuY3Rpb24oaSkge3dpZGdldHNbJ2Zha2UnXSA9IGl9KSA6IHVuZGVmaW5lZF0sICdrLXdyYXBwZXInKSwgZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW2Jsb2Nrcy5hcHBlbmQgXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKSA/IGgoJ2RpdicsIG51bGwsIChfYmxvY2tzW1wiYXBwZW5kXCJdID0gZnVuY3Rpb24ocGFyZW50KSB7cmV0dXJuIG51bGw7fSkgJiYgKF9fYmxvY2tzW1wiYXBwZW5kXCJdID0gZnVuY3Rpb24ocGFyZW50KSB7XG52YXIgc2VsZiA9IHRoaXM7XG5yZXR1cm4gYmxvY2tzW1wiYXBwZW5kXCJdID8gYmxvY2tzW1wiYXBwZW5kXCJdLmNhbGwodGhpcywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gX2Jsb2Nrc1tcImFwcGVuZFwiXS5jYWxsKHNlbGYsIHBhcmVudCk7XG59KSA6IF9ibG9ja3NbXCJhcHBlbmRcIl0uY2FsbCh0aGlzLCBwYXJlbnQpO1xufSkgJiYgX19ibG9ja3NbXCJhcHBlbmRcIl0uY2FsbCh0aGlzKSwgJ2stYXBwZW5kJykgOiB1bmRlZmluZWRdLCBfY2xhc3NOYW1lKGZ1bmN0aW9uKCkge3RyeSB7cmV0dXJuIFtjbGFzc05hbWVPYmogXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKSkpXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9pbnB1dC9pbmRleC52ZHQiLCJpbXBvcnQgSW50YWN0IGZyb20gJ2ludGFjdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1vdmVXcmFwcGVyIGV4dGVuZHMgSW50YWN0IHtcbiAgICB0ZW1wbGF0ZShzZWxmLCBWZHQpIHtcbiAgICAgICAgY29uc3QgY2hpbGRyZW4gPSBzZWxmLmdldCgnY2hpbGRyZW4nKTtcbiAgICAgICAgcmV0dXJuIGNoaWxkcmVuIHx8IFZkdC5taXNzLmhjKCdNb3ZlV3JhcHBlcicpO1xuICAgIH1cblxuICAgIGRlZmF1bHRzKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgYXV0b0Rlc3Ryb3k6IHRydWUsIFxuICAgICAgICAgICAgY29udGFpbmVyOiB1bmRlZmluZWQsXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBpbml0KC4uLmFyZ3MpIHtcbiAgICAgICAgc3VwZXIuaW5pdCguLi5hcmdzKTtcbiAgICAgICAgcmV0dXJuIHRoaXMucGxhY2Vob2xkZXIgPSBkb2N1bWVudC5jcmVhdGVDb21tZW50KFwicGxhY2Vob2xkZXJcIik7XG4gICAgfVxuXG4gICAgaHlkcmF0ZSguLi5hcmdzKSB7XG4gICAgICAgIHN1cGVyLmh5ZHJhdGUoLi4uYXJncyk7XG4gICAgICAgIHJldHVybiB0aGlzLnBsYWNlaG9sZGVyID0gZG9jdW1lbnQuY3JlYXRlQ29tbWVudCgncGxhY2Vob2xkZXInKTtcbiAgICB9XG5cbiAgICB1cGRhdGUobGFzdFZOb2RlLCBuZXh0Vk5vZGUpIHtcbiAgICAgICAgc3VwZXIudXBkYXRlKGxhc3RWTm9kZSwgbmV4dFZOb2RlKTtcbiAgICAgICAgcmV0dXJuIHRoaXMucGxhY2Vob2xkZXI7XG4gICAgfVxuXG4gICAgZGVzdHJveSguLi5hcmdzKSB7XG4gICAgICAgIGlmICh0aGlzLmdldCgnYXV0b0Rlc3Ryb3knKSkge1xuICAgICAgICAgICAgdGhpcy5fJGRlc3Ryb3koLi4uYXJncyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBcbiAgICAvKipcbiAgICAgKiBAYnJpZWYgb3ZlcnJpZGUgc3VwZXIgZGVzdHJveSBcbiAgICAgKlxuICAgICAqIE1vdmVXcmFwZXIgY29tcG9uZW50IGhhcyBjaGFuZ2VkIHRoZSBkb20gc3RydWN0aW9uLlxuICAgICAqIEl0IGlzIGFsd2F5cyB0aGUgdG9wIGxldmVsIGRvbSwgc28gd2Ugc2hvdWxkIFxuICAgICAqIHJlbW92ZSBpdCBmcm9tIHBhcmVudCBkb20uIEJ5IHBhc3NpbmcgdGhlIGNvbnRhaW5lclxuICAgICAqIHRvIHJlbW92ZSBmdW5jdGlvbiBjYW4gZG8gdGhpcy4gV2UgY2FuJ3QgcmVtb3ZlIGl0XG4gICAgICogZGlyZWN0bHkgYnkgY2FsbGluZyByZW1vdmVDaGlsZCBtZXRob2QsIGJlYWNhdXNlIGl0XG4gICAgICogbWF5YmUgaGF2ZSBsZWF2ZSBhbmltYXRpb24uXG4gICAgICpcbiAgICAgKiBAcGFyYW0gLi4uYXJnc1xuICAgICAqL1xuICAgIF8kZGVzdHJveShsYXN0Vk5vZGUsIG5leHRWTm9kZSkge1xuICAgICAgICAvLyBpZiAodGhpcy5kZXN0cm95ZWQpIHtcbiAgICAgICAgICAgIC8vIHJldHVybiBjb25zb2xlLndhcm4oJ2Rlc3Ryb3llZCBtdWx0aXBsZSB0aW1lcycpO1xuICAgICAgICAvLyB9XG4gICAgICAgIGlmICh0aGlzLnJlbmRlcmVkICYmIFxuICAgICAgICAgICAgKFxuICAgICAgICAgICAgICAgICFuZXh0Vk5vZGUgfHxcbiAgICAgICAgICAgICAgICAhKG5leHRWTm9kZS50eXBlICYgSW50YWN0LlZkdC5taXNzLlR5cGVzLkNvbXBvbmVudENsYXNzT3JJbnN0YW5jZSkgfHxcbiAgICAgICAgICAgICAgICBuZXh0Vk5vZGUua2V5ICE9PSBsYXN0Vk5vZGUua2V5XG4gICAgICAgICAgICApXG4gICAgICAgICkge1xuICAgICAgICAgICAgSW50YWN0LlZkdC5taXNzLnJlbW92ZSh0aGlzLnZkdC52Tm9kZSwgdGhpcy5jb250YWluZXIpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX2Rlc3Ryb3kobGFzdFZOb2RlLCBuZXh0Vk5vZGUpO1xuICAgICAgICB0aGlzLmRlc3Ryb3llZCA9IHRydWU7XG4gICAgICAgIHRoaXMudHJpZ2dlcignJGRlc3Ryb3llZCcsIHRoaXMpO1xuICAgICAgICB0aGlzLm9mZigpO1xuICAgIH1cblxuICAgIF9tb3VudChsYXN0Vk5vZGUsIG5leHRWTm9kZSkge1xuICAgICAgICBjb25zdCBjb250YWluZXIgPSB0aGlzLmdldCgnY29udGFpbmVyJyk7XG4gICAgICAgIGlmIChjb250YWluZXIpIHtcbiAgICAgICAgICAgIHRoaXMuY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcihjb250YWluZXIpO1xuICAgICAgICB9XG4gICAgICAgIGlmICghdGhpcy5jb250YWluZXIpIHtcbiAgICAgICAgICAgIHRoaXMuY29udGFpbmVyID0gZG9jdW1lbnQuYm9keTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLmVsZW1lbnQpO1xuICAgIH1cbn1cblxuZXhwb3J0IHtNb3ZlV3JhcHBlcn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL21vdmVXcmFwcGVyL2luZGV4LmpzIiwiY29uc3QgbWF4ID0gTWF0aC5tYXg7XG5jb25zdCBhYnMgPSBNYXRoLmFicztcbmNvbnN0IHJIb3Jpem9udGFsID0gL2xlZnR8Y2VudGVyfHJpZ2h0LztcbmNvbnN0IHJWZXJ0aWNhbCA9IC90b3B8Y2VudGVyfGJvdHRvbS87XG5jb25zdCByT2Zmc2V0ID0gL1tcXCtcXC1dXFxkKyhcXC5bXFxkXSspPyU/LztcbmNvbnN0IHJQb3NpdGlvbiA9IC9eXFx3Ky87XG5jb25zdCByUGVyY2VudCA9IC8lJC87XG5cbmZ1bmN0aW9uIGdldERpbWVuc2lvbnMoZWxlbSkge1xuICAgIGlmIChlbGVtLm5vZGVUeXBlID09PSA5KSB7XG4gICAgICAgIC8vIGRvY3VtZW50XG4gICAgICAgIGNvbnN0IHt3aWR0aCwgaGVpZ2h0fSA9IGdldERvY3VtZW50T3JXaW5kb3dSZWN0KGVsZW0pO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgd2lkdGgsXG4gICAgICAgICAgICBoZWlnaHQsXG4gICAgICAgICAgICBvZmZzZXQ6IHtcbiAgICAgICAgICAgICAgICB0b3A6IDAsXG4gICAgICAgICAgICAgICAgbGVmdDogMFxuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgIH0gZWxzZSBpZiAoZWxlbSA9PT0gd2luZG93KSB7XG4gICAgICAgIGNvbnN0IHt3aWR0aCwgaGVpZ2h0fSA9IGdldERvY3VtZW50T3JXaW5kb3dSZWN0KGVsZW0pO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgd2lkdGgsXG4gICAgICAgICAgICBoZWlnaHQsXG4gICAgICAgICAgICBvZmZzZXQ6IHtcbiAgICAgICAgICAgICAgICB0b3A6IGVsZW0ucGFnZVlPZmZzZXQsXG4gICAgICAgICAgICAgICAgbGVmdDogZWxlbS5wYWdlWE9mZnNldCxcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICB9IGVsc2UgaWYgKGVsZW0ucHJldmVudERlZmF1bHQpIHtcbiAgICAgICAgLy8gZXZlbnRcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHdpZHRoOiAwLFxuICAgICAgICAgICAgaGVpZ2h0OiAwLFxuICAgICAgICAgICAgb2Zmc2V0OiB7XG4gICAgICAgICAgICAgICAgdG9wOiBlbGVtLnBhZ2VZLFxuICAgICAgICAgICAgICAgIGxlZnQ6IGVsZW0ucGFnZVhcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICB9XG4gICAgLy8gZG9tXG4gICAgY29uc3QgcmVjdCA9IGVsZW0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgd2lkdGg6IHJlY3Qud2lkdGgsXG4gICAgICAgIGhlaWdodDogcmVjdC5oZWlnaHQsXG4gICAgICAgIG9mZnNldDoge1xuICAgICAgICAgICAgdG9wOiByZWN0LnRvcCArIHdpbmRvdy5wYWdlWU9mZnNldCxcbiAgICAgICAgICAgIGxlZnQ6IHJlY3QubGVmdCArIHdpbmRvdy5wYWdlWE9mZnNldFxuICAgICAgICB9XG4gICAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldERvY3VtZW50T3JXaW5kb3dSZWN0KGVsZW0pIHtcbiAgICBpZiAoZWxlbSA9PT0gd2luZG93KSB7XG4gICAgICAgIGNvbnN0IGQgPSBlbGVtLmRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHdpZHRoOiBkLmNsaWVudFdpZHRoLFxuICAgICAgICAgICAgaGVpZ2h0OiBkLmNsaWVudEhlaWdodCxcbiAgICAgICAgfTtcbiAgICB9XG4gICAgY29uc3QgZCA9IGVsZW0uZG9jdW1lbnRFbGVtZW50O1xuICAgIGNvbnN0IGIgPSBlbGVtLmJvZHk7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgd2lkdGg6IG1heChcbiAgICAgICAgICAgIGIuc2Nyb2xsV2lkdGgsIGQuc2Nyb2xsV2lkdGgsXG4gICAgICAgICAgICBiLm9mZnNldFdpZHRoLCBkLm9mZnNldFdpZHRoLFxuICAgICAgICAgICAgZC5jbGllbnRXaWR0aFxuICAgICAgICApLFxuICAgICAgICBoZWlnaHQ6IG1heChcbiAgICAgICAgICAgIGIuc2Nyb2xsSGVpZ2h0LCBkLnNjcm9sbEhlaWdodCxcbiAgICAgICAgICAgIGIub2Zmc2V0SGVpZ2h0LCBkLm9mZnNldEhlaWdodCxcbiAgICAgICAgICAgIGQuY2xpZW50SGVpZ2h0XG4gICAgICAgIClcbiAgICB9O1xufVxuXG5mdW5jdGlvbiBnZXRPZmZzZXRzKG9mZnNldHMsIHdpZHRoLCBoZWlnaHQpIHtcbiAgICByZXR1cm4gW1xuICAgICAgICBwYXJzZUZsb2F0KG9mZnNldHNbMF0pICogKHJQZXJjZW50LnRlc3Qob2Zmc2V0c1swXSkgPyB3aWR0aCAvIDEwMCA6IDEpLFxuICAgICAgICBwYXJzZUZsb2F0KG9mZnNldHNbMV0pICogKHJQZXJjZW50LnRlc3Qob2Zmc2V0c1sxXSkgPyBoZWlnaHQgLyAxMDAgOiAxKSxcbiAgICBdO1xufVxuXG4vLyByZWZlcmVuY2U6IGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvMTMzODI1MTYvZ2V0dGluZy1zY3JvbGwtYmFyLXdpZHRoLXVzaW5nLWphdmFzY3JpcHRcbmxldCBfc2Nyb2xsQmFyV2lkdGg7XG5leHBvcnQgZnVuY3Rpb24gc2Nyb2xsYmFyV2lkdGgoKSB7XG4gICAgaWYgKF9zY3JvbGxCYXJXaWR0aCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHJldHVybiBfc2Nyb2xsQmFyV2lkdGg7XG4gICAgfVxuXG4gICAgdmFyIG91dGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBvdXRlci5zdHlsZS52aXNpYmlsaXR5ID0gXCJoaWRkZW5cIjtcbiAgICBvdXRlci5zdHlsZS53aWR0aCA9IFwiMTAwcHhcIjtcbiAgICBvdXRlci5zdHlsZS5tc092ZXJmbG93U3R5bGUgPSBcInNjcm9sbGJhclwiOyAvLyBuZWVkZWQgZm9yIFdpbkpTIGFwcHNcblxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQob3V0ZXIpO1xuXG4gICAgdmFyIHdpZHRoTm9TY3JvbGwgPSBvdXRlci5vZmZzZXRXaWR0aDtcbiAgICAvLyBmb3JjZSBzY3JvbGxiYXJzXG4gICAgb3V0ZXIuc3R5bGUub3ZlcmZsb3cgPSBcInNjcm9sbFwiO1xuXG4gICAgLy8gYWRkIGlubmVyZGl2XG4gICAgdmFyIGlubmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBpbm5lci5zdHlsZS53aWR0aCA9IFwiMTAwJVwiO1xuICAgIG91dGVyLmFwcGVuZENoaWxkKGlubmVyKTtcblxuICAgIHZhciB3aWR0aFdpdGhTY3JvbGwgPSBpbm5lci5vZmZzZXRXaWR0aDtcblxuICAgIC8vIHJlbW92ZSBkaXZzXG4gICAgb3V0ZXIucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChvdXRlcik7XG5cbiAgICByZXR1cm4gKF9zY3JvbGxCYXJXaWR0aCA9IHdpZHRoTm9TY3JvbGwgLSB3aWR0aFdpdGhTY3JvbGwpO1xufVxuXG5mdW5jdGlvbiBnZXRTY3JvbGxJbmZvKHdpdGhpbikge1xuICAgIGNvbnN0IG92ZXJmbG93WCA9IHdpdGhpbi5pc1dpbmRvdyB8fCB3aXRoaW4uaXNEb2N1bWVudCA/IFxuICAgICAgICAnJyA6IHdpdGhpbi5lbGVtZW50LnN0eWxlLm92ZXJmbG93WDtcbiAgICBjb25zdCBvdmVyZmxvd1kgPSB3aXRoaW4uaXNXaW5kb3cgfHwgd2l0aGluLmlzRG9jdW1lbnQgPyBcbiAgICAgICAgJycgOiB3aXRoaW4uZWxlbWVudC5zdHlsZS5vdmVyZmxvd1k7XG4gICAgY29uc3QgaGFzT3ZlcmZsb3dYID0gb3ZlcmZsb3dYID09PSAnc2Nyb2xsJyB8fCBcbiAgICAgICAgKG92ZXJmbG93WCA9PT0gJ2F1dG8nICYmIHdpdGhpbi53aWR0aCA8IHdpdGhpbi5lbGVtZW50LnNjcm9sbFdpZHRoKTtcbiAgICBjb25zdCBoYXNPdmVyZmxvd1kgPSBvdmVyZmxvd1kgPT09ICdzY3JvbGwnIHx8IFxuICAgICAgICAob3ZlcmZsb3dZID09PSAnYXV0bycgJiYgd2l0aGluLmhlaWdodCA8IHdpdGhpbi5lbGVtZW50LnNjcm9sbEhlaWdodCk7XG4gICAgXG4gICAgcmV0dXJuIHtcbiAgICAgICAgd2lkdGg6IGhhc092ZXJmbG93WSA/IHNjcm9sbGJhcldpZHRoKCkgOiAwLFxuICAgICAgICBoZWlnaHQ6IGhhc092ZXJmbG93WCA/IHNjcm9sbGJhcldpZHRoKCkgOiAwLFxuICAgIH07XG59XG5cbmZ1bmN0aW9uIGdldFdpdGhpbkluZm8oZWxlbWVudCkge1xuICAgIGVsZW1lbnQgfHwgKGVsZW1lbnQgPSB3aW5kb3cpO1xuICAgIGNvbnN0IGlzV2luZG93ID0gZWxlbWVudCA9PT0gd2luZG93O1xuICAgIGNvbnN0IGlzRG9jdW1lbnQgPSBlbGVtZW50Lm5vZGVUeXBlID09PSA5O1xuICAgIGNvbnN0IGhhc09mZnNldCA9ICFpc1dpbmRvdyAmJiAhaXNEb2N1bWVudDtcblxuICAgIGNvbnN0IHJldCA9IHtlbGVtZW50LCBpc1dpbmRvdywgaXNEb2N1bWVudH07XG4gICAgaWYgKGhhc09mZnNldCkge1xuICAgICAgICBjb25zdCByZWN0ID0gZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgICAgcmV0Lm9mZnNldCA9IHtcbiAgICAgICAgICAgIHRvcDogcmVjdC50b3AgKyB3aW5kb3cucGFnZVlPZmZzZXQsXG4gICAgICAgICAgICBsZWZ0OiByZWN0LmxlZnQgKyB3aW5kb3cucGFnZVhPZmZzZXQsXG4gICAgICAgIH07XG4gICAgICAgIHJldC53aWR0aCA9IHJlY3Qud2lkdGg7XG4gICAgICAgIHJldC5oZWlnaHQgPSByZWN0LmhlaWdodDtcbiAgICAgICAgcmV0LnNjcm9sbExlZnQgPSBlbGVtZW50LnNjcm9sbExlZnQ7XG4gICAgICAgIHJldC5zY3JvbGxUb3AgPSBlbGVtZW50LnNjcm9sbFRvcDtcbiAgICB9IGVsc2Uge1xuICAgICAgICByZXQub2Zmc2V0ID0ge3RvcDogMCwgbGVmdDogMH07XG4gICAgICAgIGNvbnN0IHJlY3QgPSBnZXREb2N1bWVudE9yV2luZG93UmVjdChlbGVtZW50KTtcbiAgICAgICAgcmV0LndpZHRoID0gcmVjdC53aWR0aDtcbiAgICAgICAgcmV0LmhlaWdodCA9IHJlY3QuaGVpZ2h0O1xuICAgICAgICByZXQuc2Nyb2xsTGVmdCA9IHdpbmRvdy5wYWdlWE9mZnNldDtcbiAgICAgICAgcmV0LnNjcm9sbFRvcCA9IHdpbmRvdy5wYWdlWU9mZnNldDtcbiAgICB9XG5cbiAgICByZXR1cm4gcmV0O1xufVxuXG5mdW5jdGlvbiBwYXJzZUNzcyhzdHlsZSwgcHJvcGVydHkpIHtcbiAgICByZXR1cm4gcGFyc2VJbnQoc3R5bGVbcHJvcGVydHldLCAxMCkgfHwgMDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcG9zaXRpb24oZWxlbSwgb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSBPYmplY3QuYXNzaWduKHt9LCBvcHRpb25zKTtcblxuICAgIGNvbnN0IHRhcmdldCA9IG9wdGlvbnMub2YgfHwgd2luZG93O1xuICAgIGlmICh0YXJnZXQucHJldmVudERlZmF1bHQpIHtcbiAgICAgICAgb3B0aW9ucy5hdCA9IFwibGVmdCB0b3BcIjtcbiAgICB9XG4gICAgY29uc3Qge1xuICAgICAgICB3aWR0aDogdGFyZ2V0V2lkdGgsXG4gICAgICAgIGhlaWdodDogdGFyZ2V0SGVpZ2h0LCBcbiAgICAgICAgb2Zmc2V0OiB0YXJnZXRPZmZzZXRcbiAgICB9ID0gZ2V0RGltZW5zaW9ucyh0YXJnZXQpO1xuICAgIGNvbnN0IGJhc2VQb3NpdGlvbiA9IE9iamVjdC5hc3NpZ24oe30sIHRhcmdldE9mZnNldCk7XG4gICAgY29uc3QgY29sbGlzaW9uID0gKG9wdGlvbnMuY29sbGlzaW9uIHx8ICdmbGlwJykuc3BsaXQoJyAnKTtcbiAgICBjb25zdCBvZmZzZXRzID0ge307XG4gICAgY29uc3Qgd2l0aGluID0gZ2V0V2l0aGluSW5mbyhvcHRpb25zLndpdGhpbik7XG4gICAgY29uc3Qgc2Nyb2xsSW5mbyA9IGdldFNjcm9sbEluZm8od2l0aGluKTtcblxuICAgIFsnbXknLCAnYXQnXS5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICBsZXQgcG9zID0gKG9wdGlvbnNbaXRlbV0gfHwgJycpLnNwbGl0KCcgJyk7XG5cbiAgICAgICAgaWYgKHBvcy5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgICAgIHBvcyA9IHJIb3Jpem9udGFsLnRlc3QocG9zWzBdKSA/XG4gICAgICAgICAgICAgICAgcG9zLmNvbmNhdChbJ2NlbnRlciddKSA6XG4gICAgICAgICAgICAgICAgclZlcnRpY2FsLnRlc3QocG9zWzBdKSA/XG4gICAgICAgICAgICAgICAgICAgIFsnY2VudGVyJ10uY29uY2F0KHBvcykgOlxuICAgICAgICAgICAgICAgICAgICBbJ2NlbnRlcicsICdjZW50ZXInXTtcbiAgICAgICAgfVxuICAgICAgICBwb3NbMF0gPSBySG9yaXpvbnRhbC50ZXN0KHBvc1swXSkgPyBwb3NbMF0gOiAnY2VudGVyJztcbiAgICAgICAgcG9zWzFdID0gclZlcnRpY2FsLnRlc3QocG9zWzFdKSA/IHBvc1sxXSA6ICdjZW50ZXInO1xuXG4gICAgICAgIGNvbnN0IGhvcml6b250YWxPZmZzZXQgPSByT2Zmc2V0LmV4ZWMocG9zWzBdKTtcbiAgICAgICAgY29uc3QgdmVydGljYWxPZmZzZXQgPSByT2Zmc2V0LmV4ZWMocG9zWzFdKTtcbiAgICAgICAgb2Zmc2V0c1tpdGVtXSA9IFtcbiAgICAgICAgICAgIGhvcml6b250YWxPZmZzZXQgPyBob3Jpem9udGFsT2Zmc2V0WzBdIDogMCxcbiAgICAgICAgICAgIHZlcnRpY2FsT2Zmc2V0ID8gdmVydGljYWxPZmZzZXRbMF0gOiAwXG4gICAgICAgIF07XG5cbiAgICAgICAgb3B0aW9uc1tpdGVtXSA9IFtcbiAgICAgICAgICAgIHJQb3NpdGlvbi5leGVjKHBvc1swXSlbMF0sXG4gICAgICAgICAgICByUG9zaXRpb24uZXhlYyhwb3NbMV0pWzBdXG4gICAgICAgIF07XG4gICAgfSk7XG5cbiAgICBpZiAoY29sbGlzaW9uLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICBjb2xsaXNpb25bMV0gPSBjb2xsaXNpb25bMF07XG4gICAgfVxuXG4gICAgY29uc3QgYXQgPSBvcHRpb25zLmF0O1xuICAgIGlmIChhdFswXSA9PT0gJ3JpZ2h0Jykge1xuICAgICAgICBiYXNlUG9zaXRpb24ubGVmdCArPSB0YXJnZXRXaWR0aDtcbiAgICB9IGVsc2UgaWYgKGF0WzBdID09PSAnY2VudGVyJykge1xuICAgICAgICBiYXNlUG9zaXRpb24ubGVmdCArPSB0YXJnZXRXaWR0aCAvIDI7XG4gICAgfVxuICAgIGlmIChhdFsxXSA9PT0gJ2JvdHRvbScpIHtcbiAgICAgICAgYmFzZVBvc2l0aW9uLnRvcCArPSB0YXJnZXRIZWlnaHQ7XG4gICAgfSBlbHNlIGlmIChhdFsxXSA9PT0gJ2NlbnRlcicpIHtcbiAgICAgICAgYmFzZVBvc2l0aW9uLnRvcCArPSB0YXJnZXRIZWlnaHQgLyAyO1xuICAgIH1cblxuICAgIGNvbnN0IGF0T2Zmc2V0ID0gZ2V0T2Zmc2V0cyhvZmZzZXRzLmF0LCB0YXJnZXRXaWR0aCwgdGFyZ2V0SGVpZ2h0KTtcbiAgICBiYXNlUG9zaXRpb24ubGVmdCArPSBhdE9mZnNldFswXTtcbiAgICBiYXNlUG9zaXRpb24udG9wICs9IGF0T2Zmc2V0WzFdO1xuXG4gICAgY29uc3QgZWxlbVdpZHRoID0gZWxlbS5vZmZzZXRXaWR0aDtcbiAgICBjb25zdCBlbGVtSGVpZ2h0ID0gZWxlbS5vZmZzZXRIZWlnaHQ7XG4gICAgY29uc3QgcG9zaXRpb24gPSBPYmplY3QuYXNzaWduKHt9LCBiYXNlUG9zaXRpb24pO1xuICAgIGNvbnN0IG15T2Zmc2V0ID0gZ2V0T2Zmc2V0cyhvZmZzZXRzLm15LCBlbGVtV2lkdGgsIGVsZW1IZWlnaHQpO1xuICAgIGNvbnN0IGNvbXB1dGVkU3R5bGUgPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShlbGVtKTtcbiAgICBjb25zdCBtYXJnaW5MZWZ0ID0gcGFyc2VDc3MoY29tcHV0ZWRTdHlsZSwgJ21hcmdpbkxlZnQnKTtcbiAgICBjb25zdCBtYXJnaW5Ub3AgPSBwYXJzZUNzcyhjb21wdXRlZFN0eWxlLCAnbWFyZ2luVG9wJyk7XG4gICAgY29uc3QgY29sbGlzaW9uV2lkdGggPSBlbGVtV2lkdGggKyBtYXJnaW5MZWZ0ICsgcGFyc2VDc3MoY29tcHV0ZWRTdHlsZSwgJ21hcmdpblJpZ2h0JykgKyBzY3JvbGxJbmZvLndpZHRoO1xuICAgIGNvbnN0IGNvbGxpc2lvbkhlaWdodCA9IGVsZW1IZWlnaHQgKyBtYXJnaW5Ub3AgKyBwYXJzZUNzcyhjb21wdXRlZFN0eWxlLCAnbWFyZ2luQm90dG9tJykgKyBzY3JvbGxJbmZvLmhlaWdodDtcbiAgICBjb25zdCBjb2xsaXNpb25Qb3NpdGlvbiA9IHttYXJnaW5MZWZ0LCBtYXJnaW5Ub3B9O1xuXG4gICAgY29uc3QgbXkgPSBvcHRpb25zLm15O1xuICAgIGlmIChteVswXSA9PT0gJ3JpZ2h0Jykge1xuICAgICAgICBwb3NpdGlvbi5sZWZ0IC09IGVsZW1XaWR0aDtcbiAgICB9IGVsc2UgaWYgKG15WzBdID09PSAnY2VudGVyJykge1xuICAgICAgICBwb3NpdGlvbi5sZWZ0IC09IGVsZW1XaWR0aCAvIDI7XG4gICAgfVxuICAgIGlmIChteVsxXSA9PT0gJ2JvdHRvbScpIHtcbiAgICAgICAgcG9zaXRpb24udG9wIC09IGVsZW1IZWlnaHQ7XG4gICAgfSBlbHNlIGlmIChteVsxXSA9PT0gJ2NlbnRlcicpIHtcbiAgICAgICAgcG9zaXRpb24udG9wIC09IGVsZW1IZWlnaHQgLyAyO1xuICAgIH1cbiAgICBwb3NpdGlvbi5sZWZ0ICs9IG15T2Zmc2V0WzBdO1xuICAgIHBvc2l0aW9uLnRvcCArPSBteU9mZnNldFsxXTtcblxuICAgIFsnbGVmdCcsICd0b3AnXS5mb3JFYWNoKChkaXIsIGkpID0+IHtcbiAgICAgICAgY29uc3QgY29sbCA9IGNvbGxpc2lvbltpXTtcbiAgICAgICAgaWYgKHJ1bGVzW2NvbGxdKSB7XG4gICAgICAgICAgICBydWxlc1tjb2xsXVtkaXJdKHBvc2l0aW9uLCB7XG4gICAgICAgICAgICAgICAgdGFyZ2V0V2lkdGgsXG4gICAgICAgICAgICAgICAgdGFyZ2V0SGVpZ2h0LFxuICAgICAgICAgICAgICAgIGVsZW1XaWR0aCxcbiAgICAgICAgICAgICAgICBlbGVtSGVpZ2h0LFxuICAgICAgICAgICAgICAgIGNvbGxpc2lvblBvc2l0aW9uLFxuICAgICAgICAgICAgICAgIGNvbGxpc2lvbldpZHRoLFxuICAgICAgICAgICAgICAgIGNvbGxpc2lvbkhlaWdodCxcbiAgICAgICAgICAgICAgICBvZmZzZXQ6IFthdE9mZnNldFswXSArIG15T2Zmc2V0WzBdLCBhdE9mZnNldFsxXSArIG15T2Zmc2V0WzFdXSxcbiAgICAgICAgICAgICAgICBteTogb3B0aW9ucy5teSxcbiAgICAgICAgICAgICAgICBhdDogb3B0aW9ucy5hdCxcbiAgICAgICAgICAgICAgICB3aXRoaW4sXG4gICAgICAgICAgICAgICAgZWxlbVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIGlmIChvcHRpb25zLnVzaW5nKSB7XG4gICAgICAgIGNvbnN0IGxlZnQgPSB0YXJnZXRPZmZzZXQubGVmdCAtIHBvc2l0aW9uLmxlZnQ7XG4gICAgICAgIGNvbnN0IHJpZ2h0ID0gbGVmdCArIHRhcmdldFdpZHRoIC0gZWxlbVdpZHRoO1xuICAgICAgICBjb25zdCB0b3AgPSB0YXJnZXRPZmZzZXQudG9wIC0gcG9zaXRpb24udG9wO1xuICAgICAgICBjb25zdCBib3R0b20gPSB0b3AgKyB0YXJnZXRIZWlnaHQgLSBlbGVtSGVpZ2h0O1xuICAgICAgICBjb25zdCBmZWVkYmFjayA9IHtcbiAgICAgICAgICAgIHRhcmdldDoge1xuICAgICAgICAgICAgICAgIGVsZW1lbnQ6IHRhcmdldCxcbiAgICAgICAgICAgICAgICBsZWZ0OiB0YXJnZXRPZmZzZXQubGVmdCxcbiAgICAgICAgICAgICAgICB0b3A6IHRhcmdldE9mZnNldC50b3AsXG4gICAgICAgICAgICAgICAgd2lkdGg6IHRhcmdldFdpZHRoLFxuICAgICAgICAgICAgICAgIGhlaWdodDogdGFyZ2V0SGVpZ2h0LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGVsZW1lbnQ6IHtcbiAgICAgICAgICAgICAgICBlbGVtZW50OiBlbGVtLFxuICAgICAgICAgICAgICAgIGxlZnQ6IHBvc2l0aW9uLmxlZnQsXG4gICAgICAgICAgICAgICAgdG9wOiBwb3NpdGlvbi50b3AsXG4gICAgICAgICAgICAgICAgd2lkdGg6IGVsZW1XaWR0aCxcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IGVsZW1IZWlnaHQsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgaG9yaXpvbnRhbDogcmlnaHQgPCAwID8gJ2xlZnQnIDogbGVmdCA+IDAgPyAncmlnaHQnIDogJ2NlbnRlcicsXG4gICAgICAgICAgICB2ZXJ0aWNhbDogYm90dG9tIDwgMCA/ICd0b3AnIDogdG9wID4gMCA/ICdib3R0b20nIDogJ21pZGRsZScsXG4gICAgICAgIH07XG4gICAgICAgIGlmICh0YXJnZXRXaWR0aCA8IGVsZW1XaWR0aCAmJiBhYnMobGVmdCArIHJpZ2h0KSA8IHRhcmdldFdpZHRoKSB7XG4gICAgICAgICAgICBmZWVkYmFjay5ob3Jpem9udGFsID0gJ2NlbnRlcic7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRhcmdldEhlaWdodCA8IGVsZW1IZWlnaHQgJiYgYWJzKHRvcCArIGJvdHRvbSkgPCB0YXJnZXRIZWlnaHQpIHtcbiAgICAgICAgICAgIGZlZWRiYWNrLnZlcnRpY2FsID0gJ21pZGRsZSc7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoXG4gICAgICAgICAgICBwb3NpdGlvbi50b3AgKyBlbGVtSGVpZ2h0IDw9IHRhcmdldE9mZnNldC50b3AgfHwgXG4gICAgICAgICAgICBwb3NpdGlvbi50b3AgPj0gdGFyZ2V0T2Zmc2V0LnRvcCArIHRhcmdldEhlaWdodFxuICAgICAgICApIHtcbiAgICAgICAgICAgIGZlZWRiYWNrLmltcG9ydGFudCA9ICd2ZXJ0aWNhbCc7XG4gICAgICAgIH0gZWxzZSBpZiAoXG4gICAgICAgICAgICBwb3NpdGlvbi5sZWZ0ICsgZWxlbVdpZHRoIDw9IHRhcmdldE9mZnNldC5sZWZ0IHx8XG4gICAgICAgICAgICBwb3NpdGlvbi5sZWZ0ID49IHRhcmdldE9mZnNldC5sZWZ0ICsgdGFyZ2V0V2lkdGhcbiAgICAgICAgKSB7XG4gICAgICAgICAgICBmZWVkYmFjay5pbXBvcnRhbnQgPSAnaG9yaXpvbnRhbCc7XG4gICAgICAgIH0gZWxzZSBpZiAobWF4KGFicyhsZWZ0KSwgYWJzKHJpZ2h0KSkgPiBtYXgoYWJzKHRvcCksIGFicyhib3R0b20pKSkge1xuICAgICAgICAgICAgZmVlZGJhY2suaW1wb3J0YW50ID0gJ2hvcml6b250YWwnO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZmVlZGJhY2suaW1wb3J0YW50ID0gJ3ZlcnRpY2FsJztcbiAgICAgICAgfVxuXG4gICAgICAgIG9wdGlvbnMudXNpbmcoZmVlZGJhY2ssIHBvc2l0aW9uKTtcbiAgICB9XG5cbiAgICBjb25zdCBzdHlsZSA9IGVsZW0uc3R5bGU7XG4gICAgaWYgKGNvbXB1dGVkU3R5bGUucG9zaXRpb24gPT09ICdzdGF0aWMnKSB7XG4gICAgICAgIHN0eWxlLnBvc2l0aW9uID0gJ3JlbGF0aXZlJztcbiAgICB9XG4gICAgc3R5bGUubGVmdCA9IHBvc2l0aW9uLmxlZnQgKyAncHgnO1xuICAgIHN0eWxlLnRvcCA9IHBvc2l0aW9uLnRvcCArICdweCc7XG59XG5cbmNvbnN0IHJ1bGVzID0ge1xuICAgIGZpdDoge1xuICAgICAgICBsZWZ0KHBvc2l0aW9uLCBkYXRhKSB7XG4gICAgICAgICAgICBjb25zdCB3aXRoaW4gPSBkYXRhLndpdGhpbjtcbiAgICAgICAgICAgIGNvbnN0IHdpdGhpbk9mZnNldCA9IHdpdGhpbi5pc1dpbmRvdyA/IHdpdGhpbi5zY3JvbGxMZWZ0IDogd2l0aGluLm9mZnNldC5sZWZ0O1xuICAgICAgICAgICAgY29uc3Qgb3V0ZXJXaWR0aCA9IHdpdGhpbi53aWR0aDtcbiAgICAgICAgICAgIGNvbnN0IGNvbGxpc2lvblBvc0xlZnQgPSAgcG9zaXRpb24ubGVmdCAtIGRhdGEuY29sbGlzaW9uUG9zaXRpb24ubWFyZ2luTGVmdDtcbiAgICAgICAgICAgIGNvbnN0IG92ZXJMZWZ0ID0gd2l0aGluT2Zmc2V0IC0gY29sbGlzaW9uUG9zTGVmdDtcbiAgICAgICAgICAgIGNvbnN0IG92ZXJSaWdodCA9IGNvbGxpc2lvblBvc0xlZnQgKyBkYXRhLmNvbGxpc2lvbldpZHRoIC0gb3V0ZXJXaWR0aCAtIHdpdGhpbk9mZnNldDtcbiAgICAgICAgICAgIGxldCBuZXdPdmVyUmlnaHQ7XG5cbiAgICAgICAgICAgIGlmIChkYXRhLmNvbGxpc2lvbldpZHRoID4gb3V0ZXJXaWR0aCkge1xuICAgICAgICAgICAgICAgIGlmIChvdmVyTGVmdCA+IDAgJiYgb3ZlclJpZ2h0IDw9MCkge1xuICAgICAgICAgICAgICAgICAgICBuZXdPdmVyUmlnaHQgPSBwb3NpdGlvbi5sZWZ0ICsgb3ZlckxlZnQgKyBkYXRhLmNvbGxpc2lvbldpZHRoIC0gb3V0ZXJXaWR0aCAtIHdpdGhpbk9mZnNldDtcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb24ubGVmdCArPSBvdmVyTGVmdCAtIG5ld092ZXJSaWdodDtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKG92ZXJSaWdodCA+IDAgJiYgb3ZlckxlZnQgPD0wKSB7XG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uLmxlZnQgPSB3aXRoaW5PZmZzZXQ7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChvdmVyTGVmdCA+IG92ZXJSaWdodCkge1xuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbi5sZWZ0ID0gd2l0aGluT2Zmc2V0ICsgb3V0ZXJXaWR0aCAtIGRhdGEuY29sbGlzaW9uV2lkdGg7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb24ubGVmdCA9IHdpdGhpbk9mZnNldDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2UgaWYgKG92ZXJMZWZ0ID4gMCkge1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uLmxlZnQgKz0gb3ZlckxlZnQ7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKG92ZXJSaWdodCA+IDApIHtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbi5sZWZ0IC09IG92ZXJSaWdodDtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcG9zaXRpb24ubGVmdCA9IG1heChwb3NpdGlvbi5sZWZ0IC0gY29sbGlzaW9uUG9zTGVmdCwgcG9zaXRpb24ubGVmdCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgdG9wKHBvc2l0aW9uLCBkYXRhKSB7XG4gICAgICAgICAgICBjb25zdCB3aXRoaW4gPSBkYXRhLndpdGhpbjtcbiAgICAgICAgICAgIGNvbnN0IHdpdGhpbk9mZnNldCA9IHdpdGhpbi5pc1dpbmRvdyA/IHdpdGhpbi5zY3JvbGxUb3AgOiB3aXRoaW4ub2Zmc2V0LnRvcDtcbiAgICAgICAgICAgIGNvbnN0IG91dGVySGVpZ2h0ID0gZGF0YS53aXRoaW4uaGVpZ2h0O1xuICAgICAgICAgICAgY29uc3QgY29sbGlzaW9uUG9zVG9wID0gcG9zaXRpb24udG9wIC0gZGF0YS5jb2xsaXNpb25Qb3NpdGlvbi5tYXJnaW5Ub3A7XG4gICAgICAgICAgICBjb25zdCBvdmVyVG9wID0gd2l0aGluT2Zmc2V0IC0gY29sbGlzaW9uUG9zVG9wO1xuICAgICAgICAgICAgY29uc3Qgb3ZlckJvdHRvbSA9IGNvbGxpc2lvblBvc1RvcCArIGRhdGEuY29sbGlzaW9uSGVpZ2h0IC0gb3V0ZXJIZWlnaHQgLSB3aXRoaW5PZmZzZXQ7XG4gICAgICAgICAgICBsZXQgbmV3T3ZlckJvdHRvbTtcblxuICAgICAgICAgICAgaWYgKGRhdGEuY29sbGlzaW9uSGVpZ2h0ID4gb3V0ZXJIZWlnaHQpIHtcbiAgICAgICAgICAgICAgICBpZiAob3ZlclRvcCA+IDAgJiYgb3ZlckJvdHRvbSA8PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIG5ld092ZXJCb3R0b20gPSBwb3NpdGlvbi50b3AgKyBvdmVyVG9wICsgZGF0YS5jb2xsaXNpb25IZWlnaHQgLSBvdXRlckhlaWdodCAtIHdpdGhpbk9mZnNldDtcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb24udG9wICs9IG92ZXJUb3AgLSBuZXdPdmVyQm90dG9tO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAob3ZlckJvdHRvbSA+IDAgJiYgb3ZlclRvcCA8PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uLnRvcCA9IHdpdGhpbk9mZnNldDtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKG92ZXJUb3AgPiBvdmVyQm90dG9tKSB7XG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uLnRvcCA9IHdpdGhpbk9mZnNldCArIG91dGVySGVpZ2h0IC0gZGF0YS5jb2xsaXNpb25IZWlnaHQ7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb24udG9wID0gd2l0aGluT2Zmc2V0O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSBpZiAob3ZlclRvcCA+IDApIHtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbi50b3AgKz0gb3ZlclRvcDtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAob3ZlckJvdHRvbSA+IDApIHtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbi50b3AgLT0gb3ZlckJvdHRvbTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcG9zaXRpb24udG9wID0gbWF4KHBvc2l0aW9uLnRvcCAtIGNvbGxpc2lvblBvc1RvcCwgcG9zaXRpb24udG9wKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICBmbGlwOiB7XG4gICAgICAgIGxlZnQocG9zaXRpb24sIGRhdGEpIHtcbiAgICAgICAgICAgIGNvbnN0IHdpdGhpbiA9IGRhdGEud2l0aGluO1xuICAgICAgICAgICAgY29uc3Qgd2l0aGluT2Zmc2V0ID0gd2l0aGluLm9mZnNldC5sZWZ0ICsgd2l0aGluLnNjcm9sbExlZnQ7XG4gICAgICAgICAgICBjb25zdCBvdXRlcldpZHRoID0gd2l0aGluLndpZHRoO1xuICAgICAgICAgICAgY29uc3Qgb2Zmc2V0TGVmdCA9IHdpdGhpbi5pc1dpbmRvdyA/IHdpdGhpbi5zY3JvbGxMZWZ0IDogd2l0aGluLm9mZnNldC5sZWZ0O1xuICAgICAgICAgICAgY29uc3QgY29sbGlzaW9uUG9zTGVmdCA9IHBvc2l0aW9uLmxlZnQgLSBkYXRhLmNvbGxpc2lvblBvc2l0aW9uLm1hcmdpbkxlZnQ7XG4gICAgICAgICAgICBjb25zdCBvdmVyTGVmdCA9IGNvbGxpc2lvblBvc0xlZnQgLSBvZmZzZXRMZWZ0O1xuICAgICAgICAgICAgY29uc3Qgb3ZlclJpZ2h0ID0gY29sbGlzaW9uUG9zTGVmdCArIGRhdGEuY29sbGlzaW9uV2lkdGggLSBvdXRlcldpZHRoIC0gb2Zmc2V0TGVmdDtcbiAgICAgICAgICAgIGNvbnN0IG15T2Zmc2V0ID0gZGF0YS5teVswXSA9PT0gJ2xlZnQnID8gXG4gICAgICAgICAgICAgICAgLWRhdGEuZWxlbVdpZHRoIDpcbiAgICAgICAgICAgICAgICBkYXRhLm15WzBdID09PSAncmlnaHQnID9cbiAgICAgICAgICAgICAgICAgICAgZGF0YS5lbGVtV2lkdGggOiAwO1xuICAgICAgICAgICAgY29uc3QgYXRPZmZzZXQgPSBkYXRhLmF0WzBdID09PSAnbGVmdCcgP1xuICAgICAgICAgICAgICAgIGRhdGEudGFyZ2V0V2lkdGggOlxuICAgICAgICAgICAgICAgIGRhdGEuYXRbMF0gPT09ICdyaWdodCcgP1xuICAgICAgICAgICAgICAgICAgICAtZGF0YS50YXJnZXRXaWR0aCA6IDA7XG4gICAgICAgICAgICBjb25zdCBvZmZzZXQgPSAtMiAqIGRhdGEub2Zmc2V0WzBdO1xuICAgICAgICAgICAgbGV0IG5ld092ZXJSaWdodDtcbiAgICAgICAgICAgIGxldCBuZXdPdmVyTGVmdDtcblxuICAgICAgICAgICAgaWYgKG92ZXJMZWZ0IDwgMCkge1xuICAgICAgICAgICAgICAgIG5ld092ZXJSaWdodCA9IHBvc2l0aW9uLmxlZnQgKyBteU9mZnNldCArIGF0T2Zmc2V0ICsgb2Zmc2V0ICsgZGF0YS5jb2xsaXNpb25XaWR0aCAtIG91dGVyV2lkdGggLSB3aXRoaW5PZmZzZXQ7XG4gICAgICAgICAgICAgICAgaWYgKG5ld092ZXJSaWdodCA8IDAgfHwgbmV3T3ZlclJpZ2h0IDwgYWJzKG92ZXJMZWZ0KSkge1xuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbi5sZWZ0ICs9IG15T2Zmc2V0ICsgYXRPZmZzZXQgKyBvZmZzZXQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIGlmIChvdmVyUmlnaHQgPiAwKSB7XG4gICAgICAgICAgICAgICAgbmV3T3ZlckxlZnQgPSBwb3NpdGlvbi5sZWZ0IC0gZGF0YS5jb2xsaXNpb25Qb3NpdGlvbi5tYXJnaW5MZWZ0ICsgbXlPZmZzZXQgKyBhdE9mZnNldCArIG9mZnNldCAtIG9mZnNldExlZnQ7XG4gICAgICAgICAgICAgICAgLy8gdGhlIHNhbWUgdG8gdG9wXG4gICAgICAgICAgICAgICAgLy8gaWYgKG5ld092ZXJMZWZ0ID4gMCB8fCBhYnMobmV3T3ZlckxlZnQpIDwgb3ZlclJpZ2h0KSB7XG4gICAgICAgICAgICAgICAgaWYgKG5ld092ZXJMZWZ0ID4gMCkge1xuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbi5sZWZ0ICs9IG15T2Zmc2V0ICsgYXRPZmZzZXQgKyBvZmZzZXQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgIHRvcChwb3NpdGlvbiwgZGF0YSkge1xuICAgICAgICAgICAgY29uc3Qgd2l0aGluID0gZGF0YS53aXRoaW47XG4gICAgICAgICAgICBjb25zdCB3aXRoaW5PZmZzZXQgPSB3aXRoaW4ub2Zmc2V0LnRvcCArIHdpdGhpbi5zY3JvbGxUb3A7XG4gICAgICAgICAgICBjb25zdCBvdXRlckhlaWdodCA9IHdpdGhpbi5oZWlnaHQ7XG4gICAgICAgICAgICBjb25zdCBvZmZzZXRUb3AgPSB3aXRoaW4uaXNXaW5kb3cgPyB3aXRoaW4uc2Nyb2xsVG9wIDogd2l0aGluLm9mZnNldC50b3A7XG4gICAgICAgICAgICBjb25zdCBjb2xsaXNpb25Qb3NUb3AgPSBwb3NpdGlvbi50b3AgLSBkYXRhLmNvbGxpc2lvblBvc2l0aW9uLm1hcmdpblRvcDtcbiAgICAgICAgICAgIGNvbnN0IG92ZXJUb3AgPSBjb2xsaXNpb25Qb3NUb3AgLSBvZmZzZXRUb3A7XG4gICAgICAgICAgICBjb25zdCBvdmVyQm90dG9tID0gY29sbGlzaW9uUG9zVG9wICsgZGF0YS5jb2xsaXNpb25IZWlnaHQgLSBvdXRlckhlaWdodCAtIG9mZnNldFRvcDsgXG4gICAgICAgICAgICBjb25zdCBteU9mZnNldCA9IGRhdGEubXlbMV0gPT09ICd0b3AnID9cbiAgICAgICAgICAgICAgICAtZGF0YS5lbGVtSGVpZ2h0IDpcbiAgICAgICAgICAgICAgICBkYXRhLm15WzFdID09PSAnYm90dG9tJyA/XG4gICAgICAgICAgICAgICAgICAgIGRhdGEuZWxlbUhlaWdodCA6IDA7XG4gICAgICAgICAgICBjb25zdCBhdE9mZnNldCA9IGRhdGEuYXRbMV0gPT09ICd0b3AnID9cbiAgICAgICAgICAgICAgICBkYXRhLnRhcmdldEhlaWdodCA6XG4gICAgICAgICAgICAgICAgZGF0YS5hdFsxXSA9PT0gJ2JvdHRvbScgP1xuICAgICAgICAgICAgICAgICAgICAtZGF0YS50YXJnZXRIZWlnaHQgOiAwO1xuICAgICAgICAgICAgY29uc3Qgb2Zmc2V0ID0gLTIgKiBkYXRhLm9mZnNldFsxXTtcbiAgICAgICAgICAgIGxldCBuZXdPdmVyVG9wO1xuICAgICAgICAgICAgbGV0IG5ld092ZXJCb3R0b207XG5cbiAgICAgICAgICAgIGlmIChvdmVyVG9wIDwgMCkge1xuICAgICAgICAgICAgICAgIG5ld092ZXJCb3R0b20gPSBwb3NpdGlvbi50b3AgKyBteU9mZnNldCArIGF0T2Zmc2V0ICsgb2Zmc2V0ICsgZGF0YS5jb2xsaXNpb25IZWlnaHQgLSBvdXRlckhlaWdodCAtIHdpdGhpbk9mZnNldDtcbiAgICAgICAgICAgICAgICBpZiAobmV3T3ZlckJvdHRvbSA8IDAgfHwgbmV3T3ZlckJvdHRvbSA8IGFicyhvdmVyVG9wKSkge1xuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbi50b3AgKz0gbXlPZmZzZXQgKyBhdE9mZnNldCArIG9mZnNldDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2UgaWYgKG92ZXJCb3R0b20gPiAwKSB7XG4gICAgICAgICAgICAgICAgbmV3T3ZlclRvcCA9IHBvc2l0aW9uLnRvcCAtIGRhdGEuY29sbGlzaW9uUG9zaXRpb24ubWFyZ2luVG9wICsgbXlPZmZzZXQgKyBhdE9mZnNldCArIG9mZnNldCAtIG9mZnNldFRvcDtcbiAgICAgICAgICAgICAgICAvLyBiZWNhdXNlIHdpbmRvdyBjYW4gc2Nyb2xsIGRvd24sIHdoZW4gaXQgYmV5b25kIHRoZSB0b3AgYm9yZGVyLFxuICAgICAgICAgICAgICAgIC8vIHdlIGNhbiBub3Qgc2Nyb2xsIGl0IHRvIHZpZXcuIERvbid0IGZsaXAgaXQgaW4gdGhpcyBjYXNlXG4gICAgICAgICAgICAgICAgLy8gaWYgKG5ld092ZXJUb3AgPiAwIHx8IGFicyhuZXdPdmVyVG9wKSA8IG92ZXJCb3R0b20pIHtcbiAgICAgICAgICAgICAgICBpZiAobmV3T3ZlclRvcCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb24udG9wICs9IG15T2Zmc2V0ICsgYXRPZmZzZXQgKyBvZmZzZXQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSxcblxuICAgIGZsaXBmaXQ6IHtcbiAgICAgICAgbGVmdCguLi5hcmdzKSB7XG4gICAgICAgICAgICBydWxlcy5mbGlwLmxlZnQoLi4uYXJncyk7XG4gICAgICAgICAgICBydWxlcy5maXQubGVmdCguLi5hcmdzKTtcbiAgICAgICAgfSxcblxuICAgICAgICB0b3AoLi4uYXJncykge1xuICAgICAgICAgICAgcnVsZXMuZmxpcC50b3AoLi4uYXJncyk7XG4gICAgICAgICAgICBydWxlcy5maXQudG9wKC4uLmFyZ3MpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5cbmV4cG9ydCB7cG9zaXRpb259O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9tb3ZlV3JhcHBlci9wb3NpdGlvbi5qcyIsImltcG9ydCBJbnRhY3QgZnJvbSAnaW50YWN0JztcbmltcG9ydCB0ZW1wbGF0ZSBmcm9tICcuL2dyb3VwLnZkdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE9wdGlvbkdyb3VwIGV4dGVuZHMgSW50YWN0IHtcbiAgICBASW50YWN0LnRlbXBsYXRlKClcbiAgICBzdGF0aWMgdGVtcGxhdGUgPSB0ZW1wbGF0ZTtcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvc2VsZWN0L2dyb3VwLmpzIiwiXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihvYmosIF9WZHQsIGJsb2NrcywgJGNhbGxlZSkge1xuX1ZkdCB8fCAoX1ZkdCA9IFZkdCk7XG5vYmogfHwgKG9iaiA9IHt9KTtcbmJsb2NrcyB8fCAoYmxvY2tzID0ge30pO1xudmFyIGggPSBfVmR0Lm1pc3MuaCwgaGMgPSBfVmR0Lm1pc3MuaGMsIGh1ID0gX1ZkdC5taXNzLmh1LCB3aWRnZXRzID0gdGhpcyAmJiB0aGlzLndpZGdldHMgfHwge30sIF9ibG9ja3MgPSB7fSwgX19ibG9ja3MgPSB7fSxcbl9fdSA9IF9WZHQudXRpbHMsIGV4dGVuZCA9IF9fdS5leHRlbmQsIF9lID0gX191LmVycm9yLCBfY2xhc3NOYW1lID0gX191LmNsYXNzTmFtZSxcbl9fbyA9IF9fdS5PcHRpb25zLCBfZ2V0TW9kZWwgPSBfX28uZ2V0TW9kZWwsIF9zZXRNb2RlbCA9IF9fby5zZXRNb2RlbCxcbl9zZXRDaGVja2JveE1vZGVsID0gX191LnNldENoZWNrYm94TW9kZWwsIF9kZXRlY3RDaGVja2JveENoZWNrZWQgPSBfX3UuZGV0ZWN0Q2hlY2tib3hDaGVja2VkLFxuX3NldFNlbGVjdE1vZGVsID0gX191LnNldFNlbGVjdE1vZGVsLFxuc2VsZiA9IHRoaXMuZGF0YSwgJHRoaXMgPSB0aGlzLCBzY29wZSA9IG9iaiwgQW5pbWF0ZSA9IHNlbGYgJiYgc2VsZi5BbmltYXRlLCBwYXJlbnQgPSAoJGNhbGxlZSB8fCB7fSkuX3N1cGVyXG5jb25zdCB7Y2hpbGRyZW4sIGxhYmVsfSA9IHNlbGYuZ2V0KCk7XG5cbnJldHVybiBoKCdkaXYnLCBudWxsLCBbaCgnZGl2JywgbnVsbCwgZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW2xhYmVsIF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcyksICdrLWxhYmVsJyksICdcXG4gICAgJywgZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW2NoaWxkcmVuIF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcyksICdcXG4nXSwgJ2stZ3JvdXAnKVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvc2VsZWN0L2dyb3VwLnZkdCIsImltcG9ydCBJbnRhY3QgZnJvbSAnaW50YWN0JztcbmltcG9ydCB0ZW1wbGF0ZSBmcm9tICcuL2luZGV4LnZkdCc7XG5pbXBvcnQgJy4uLy4uL3N0eWxlcy9rcGMuc3R5bCc7XG5pbXBvcnQgJy4vaW5kZXguc3R5bCc7XG5pbXBvcnQgT3B0aW9uIGZyb20gJy4vb3B0aW9uJztcbmltcG9ydCBHcm91cCBmcm9tICcuL2dyb3VwJztcbmltcG9ydCB7c2VsZWN0SW5wdXQsIF8kfSBmcm9tICcuLi91dGlscyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNlbGVjdCBleHRlbmRzIEludGFjdCB7XG4gICAgQEludGFjdC50ZW1wbGF0ZSgpXG4gICAgc3RhdGljIHRlbXBsYXRlID0gdGVtcGxhdGU7XG5cbiAgICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgICAgICBtdWx0aXBsZTogQm9vbGVhbixcbiAgICAgICAgZGlzYWJsZWQ6IEJvb2xlYW4sXG4gICAgICAgIGNsZWFyYWJsZTogQm9vbGVhbixcbiAgICAgICAgZmlsdGVyYWJsZTogQm9vbGVhbixcbiAgICAgICAgZmx1aWQ6IEJvb2xlYW4sXG4gICAgICAgIGFsbG93VW5tYXRjaDogQm9vbGVhbixcbiAgICB9O1xuXG4gICAgZGVmYXVsdHMoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBkYXRhOiBbXSxcbiAgICAgICAgICAgIHZhbHVlOiAnJyxcbiAgICAgICAgICAgIG11bHRpcGxlOiBmYWxzZSwgLy/mlK/mjIHlpJrpgIlsaVxuICAgICAgICAgICAgZGlzYWJsZWQ6IGZhbHNlLFxuICAgICAgICAgICAgY2xlYXJhYmxlOiBmYWxzZSwgLy8g5piv5ZCm5Y+v5riF56m6IFxuICAgICAgICAgICAgZmlsdGVyYWJsZTogZmFsc2UsIC8vIOaQnOe0ouetm+mAiVxuICAgICAgICAgICAga2V5d29yZHM6IHVuZGVmaW5lZCxcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyOiB1bmRlZmluZWQsXG4gICAgICAgICAgICBzaXplOiAnZGVmYXVsdCcsXG4gICAgICAgICAgICBmbHVpZDogZmFsc2UsXG4gICAgICAgICAgICB3aWR0aDogdW5kZWZpbmVkLFxuICAgICAgICAgICAgYWxsb3dVbm1hdGNoOiBmYWxzZSxcblxuICAgICAgICAgICAgX3Nob3c6IGZhbHNlLFxuICAgICAgICB9XG4gICAgfVxuXG4gICAgX2luaXQoKSB7XG4gICAgICAgIHRoaXMub24oJyRjaGFuZ2VkOnZhbHVlJywgKCkgPT4ge1xuICAgICAgICAgICAgaWYgKHRoaXMuZ2V0KCdtdWx0aXBsZScpICYmIHRoaXMuZ2V0KCdfc2hvdycpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5yZWZzLm1lbnUucG9zaXRpb24oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgX29uQ2xlYXIoZSkge1xuICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICB0aGlzLnNldCgndmFsdWUnLCAnJyk7XG4gICAgfVxuXG4gICAgX29uU2VsZWN0KHZhbHVlKSB7XG4gICAgICAgIGlmICghdGhpcy5nZXQoJ211bHRpcGxlJykpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0KCd2YWx1ZScsIHZhbHVlLCB7YXN5bmM6IHRydWV9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGxldCB2YWx1ZXMgPSB0aGlzLmdldCgndmFsdWUnKTtcbiAgICAgICAgICAgIGlmICghQXJyYXkuaXNBcnJheSh2YWx1ZXMpKSB7XG4gICAgICAgICAgICAgICAgdmFsdWVzID0gW107XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHZhbHVlcyA9IHZhbHVlcy5zbGljZSgwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGluZGV4ID0gdmFsdWVzLmluZGV4T2YodmFsdWUpO1xuICAgICAgICAgICAgaWYgKH5pbmRleCkge1xuICAgICAgICAgICAgICAgIC8vIGlmIGZpbmQsIGRlbGV0ZSBpdFxuICAgICAgICAgICAgICAgIHZhbHVlcy5zcGxpY2UoaW5kZXgsIDEpOyBcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdmFsdWVzLnB1c2godmFsdWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5zZXQoJ3ZhbHVlJywgdmFsdWVzLCB7YXN5bmM6IHRydWV9KTtcbiAgICAgICAgICAgIHRoaXMuX2ZvY3VzSW5wdXQoKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9yZXNldFNlYXJjaCgpO1xuICAgIH1cblxuICAgIF9vblNlYXJjaChlKSB7XG4gICAgICAgIHRoaXMuc2V0KCdrZXl3b3JkcycsIGUudGFyZ2V0LnZhbHVlLnRyaW0oKSk7XG4gICAgICAgIC8vIGFsd2F5cyBzaG93IG1lbnUgb24gc2VhcmNoaW5nXG4gICAgICAgIHRoaXMucmVmcy5tZW51LnNob3coKTtcbiAgICAgICAgdGhpcy5yZWZzLm1lbnUuZm9jdXNJdGVtQnlJbmRleCgwKTtcbiAgICAgICAgLy8gdGhlIHBvc2l0aW9uIG1heSBiZSBmbGlwLCBhbmQgdGhlIHNlbGVjdCBpbnB1dCBoZWlnaHQgbXkgY2hhbmdlIGhlaWdodCB0b28sXG4gICAgICAgIC8vIHNvIHdlIHNob3VsZCByZXNldCB0aGUgcG9zaXRpb25cbiAgICAgICAgdGhpcy5yZWZzLm1lbnUucG9zaXRpb24oKTtcbiAgICB9XG5cbiAgICBfcmVzZXRTZWFyY2goKSB7XG4gICAgICAgIHRoaXMuc2V0KCdrZXl3b3JkcycsIHVuZGVmaW5lZCwge2FzeW5jOiB0cnVlfSk7XG4gICAgfVxuXG4gICAgX29uQ2hhbmdlU2hvdyhjLCB2YWx1ZSkge1xuICAgICAgICB0aGlzLnNldCgnX3Nob3cnLCB2YWx1ZSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQGJyaWVmIGxldCB0aGUgYmx1ciBtZXRob2QgY2FsbGVkIGFmdGVyIHNlbGVjdFxuICAgICAqIGlmIHdlIHNlbGVjdGVkIHRoZSBvcHRpb24sIHRoZW4gdGhlIGtleXdvcmRzIGhhcyBiZWVuIHNldCB0byB1bmRlZmluZFxuICAgICAqIGluIHRoaXMgY2FzZSwgd2UgZG8gbm90aGluZywgb3RoZXJ3aXNlIHdlIHJlc2V0IGl0XG4gICAgICovXG4gICAgX29uQmx1cigpIHtcbiAgICAgICAgY29uc3Qge2tleXdvcmRzLCBhbGxvd1VubWF0Y2h9ID0gdGhpcy5nZXQoKTtcbiAgICAgICAgaWYgKGFsbG93VW5tYXRjaCAmJiBrZXl3b3JkcyAhPSBudWxsKSB7XG4gICAgICAgICAgICB0aGlzLnNldCh7XG4gICAgICAgICAgICAgICAgdmFsdWU6IGtleXdvcmRzLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnRpbWVyID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICBpZiAodGhpcy5nZXQoJ2tleXdvcmRzJykgIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHRoaXMuX3Jlc2V0U2VhcmNoKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIDIwMCk7XG4gICAgfVxuXG4gICAgX3NlbGVjdElucHV0KGUpIHtcbiAgICAgICAgc2VsZWN0SW5wdXQoZS50YXJnZXQpOyBcbiAgICB9XG5cbiAgICBfb25Gb2N1cyhlKSB7XG4gICAgICAgIGNsZWFyVGltZW91dCh0aGlzLnRpbWVyKTtcbiAgICB9XG5cbiAgICBfb25Gb2N1c291dCgpIHtcbiAgICAgICAgdGhpcy5yZWZzLmRyb3Bkb3duLmhpZGUoKTtcbiAgICB9XG5cbiAgICBfZGVsZXRlKHZhbHVlLCBlKSB7XG4gICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgIGNvbnN0IHZhbHVlcyA9IHRoaXMuZ2V0KCd2YWx1ZScpLnNsaWNlKDApO1xuICAgICAgICBjb25zdCBpbmRleCA9IHZhbHVlcy5pbmRleE9mKHZhbHVlKTtcbiAgICAgICAgdmFsdWVzLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgIHRoaXMuc2V0KCd2YWx1ZScsIHZhbHVlcyk7XG4gICAgICAgIHRoaXMuX2ZvY3VzSW5wdXQoKTtcbiAgICB9XG5cbiAgICBfZm9jdXNJbnB1dCgpIHtcbiAgICAgICAgaWYgKHRoaXMuZ2V0KCdmaWx0ZXJhYmxlJykpIHtcbiAgICAgICAgICAgIHRoaXMucmVmcy5pbnB1dC5mb2N1cygpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgX3Bvc2l0aW9uKCkge1xuICAgICAgICBjb25zdCBtZW51RWxlbWVudCA9IHRoaXMucmVmcy5tZW51LnZkdC52Tm9kZS5jaGlsZHJlbi5lbGVtZW50O1xuICAgICAgICBjb25zdCB3aWR0aCA9IHRoaXMuZWxlbWVudC5vZmZzZXRXaWR0aDtcbiAgICAgICAgY29uc3QgbWVudVdpZHRoID0gbWVudUVsZW1lbnQub2Zmc2V0V2lkdGg7XG4gICAgICAgIGlmICh3aWR0aCA+IG1lbnVXaWR0aCkge1xuICAgICAgICAgICAgbWVudUVsZW1lbnQuc3R5bGUud2lkdGggPSBgJHt3aWR0aH1weGA7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBfb25LZXlwcmVzcyhlKSB7XG4gICAgICAgIGlmIChlLmtleUNvZGUgPT09IDEzKSB7XG4gICAgICAgICAgICB0aGlzLnJlZnMud3JhcHBlci5jbGljaygpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgX29uS2V5ZG93bihlKSB7XG4gICAgICAgIGlmIChlLmtleUNvZGUgPT09IDkpIHsgLy8gdGFiXG4gICAgICAgICAgICB0aGlzLnJlZnMuZHJvcGRvd24uaGlkZSgpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5leHBvcnQge1NlbGVjdCwgT3B0aW9uLCBHcm91cCBhcyBPcHRpb25Hcm91cH07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL3NlbGVjdC9pbmRleC5qcyIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG4gICAgaWYobW9kdWxlLmhvdCkge1xuICAgICAgLy8gMTUyNzU3NjY5OTA3N1xuICAgICAgdmFyIGNzc1JlbG9hZCA9IHJlcXVpcmUoXCIhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1ob3QtbG9hZGVyL2hvdE1vZHVsZVJlcGxhY2VtZW50LmpzXCIpKG1vZHVsZS5pZCwge1wiZmlsZU1hcFwiOlwie2ZpbGVOYW1lfVwifSk7XG4gICAgICBtb2R1bGUuaG90LmRpc3Bvc2UoY3NzUmVsb2FkKTtcbiAgICAgIG1vZHVsZS5ob3QuYWNjZXB0KHVuZGVmaW5lZCwgY3NzUmVsb2FkKTtcbiAgICB9XG4gIFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vY29tcG9uZW50cy9zZWxlY3QvaW5kZXguc3R5bFxuLy8gbW9kdWxlIGlkID0gLi9jb21wb25lbnRzL3NlbGVjdC9pbmRleC5zdHlsXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCBJbnB1dCBmcm9tICcuLi9pbnB1dCc7aW1wb3J0IERyb3Bkb3duLCB7RHJvcGRvd25JdGVtLCBEcm9wZG93bk1lbnV9IGZyb20gJy4uL2Ryb3Bkb3duJztpbXBvcnQge2lzU3RyaW5nT3JOdW1iZXIsIGdldFRleHRCeUNoaWxkcmVuLCBhZGRTdHlsZSwgXyR9IGZyb20gJy4uL3V0aWxzJztpbXBvcnQgT3B0aW9uIGZyb20gJy4vb3B0aW9uJztpbXBvcnQgT3B0aW9uR3JvdXAgZnJvbSAnLi9ncm91cCc7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihvYmosIF9WZHQsIGJsb2NrcywgJGNhbGxlZSkge1xuX1ZkdCB8fCAoX1ZkdCA9IFZkdCk7XG5vYmogfHwgKG9iaiA9IHt9KTtcbmJsb2NrcyB8fCAoYmxvY2tzID0ge30pO1xudmFyIGggPSBfVmR0Lm1pc3MuaCwgaGMgPSBfVmR0Lm1pc3MuaGMsIGh1ID0gX1ZkdC5taXNzLmh1LCB3aWRnZXRzID0gdGhpcyAmJiB0aGlzLndpZGdldHMgfHwge30sIF9ibG9ja3MgPSB7fSwgX19ibG9ja3MgPSB7fSxcbl9fdSA9IF9WZHQudXRpbHMsIGV4dGVuZCA9IF9fdS5leHRlbmQsIF9lID0gX191LmVycm9yLCBfY2xhc3NOYW1lID0gX191LmNsYXNzTmFtZSxcbl9fbyA9IF9fdS5PcHRpb25zLCBfZ2V0TW9kZWwgPSBfX28uZ2V0TW9kZWwsIF9zZXRNb2RlbCA9IF9fby5zZXRNb2RlbCxcbl9zZXRDaGVja2JveE1vZGVsID0gX191LnNldENoZWNrYm94TW9kZWwsIF9kZXRlY3RDaGVja2JveENoZWNrZWQgPSBfX3UuZGV0ZWN0Q2hlY2tib3hDaGVja2VkLFxuX3NldFNlbGVjdE1vZGVsID0gX191LnNldFNlbGVjdE1vZGVsLFxuc2VsZiA9IHRoaXMuZGF0YSwgJHRoaXMgPSB0aGlzLCBzY29wZSA9IG9iaiwgQW5pbWF0ZSA9IHNlbGYgJiYgc2VsZi5BbmltYXRlLCBwYXJlbnQgPSAoJGNhbGxlZSB8fCB7fSkuX3N1cGVyXG5cblxuXG5cblxuXG5jb25zdCB7XG4gICAgY2xhc3NOYW1lLCBjbGVhcmFibGUsIGRhdGEsIHZhbHVlLCBtdWx0aXBsZSxcbiAgICBkaXNhYmxlZCwgZmlsdGVyYWJsZSwga2V5d29yZHMsIF9zaG93LFxuICAgIHBsYWNlaG9sZGVyLCBzaXplLCBzdHlsZSwgbmFtZSwgY2hpbGRyZW4sXG4gICAgZmx1aWQsIHdpZHRoLCBhbGxvd1VubWF0Y2gsXG59ID0gc2VsZi5nZXQoKTtcblxuY29uc3QgX3BsYWNlaG9sZGVyID0gcGxhY2Vob2xkZXIgPT0gbnVsbCA/XG4gICAgKGFsbG93VW5tYXRjaCAmJiBmaWx0ZXJhYmxlKSA/IF8kKCfor7fovpPlhaXmiJbpgInmi6knKSA6IF8kKCfor7fpgInmi6knKSA6XG4gICAgcGxhY2Vob2xkZXI7XG5cbmNvbnN0IGNsYXNzTmFtZU9iaiA9IHtcbiAgICAnay1zZWxlY3QnOiB0cnVlLFxuICAgIFtjbGFzc05hbWVdOiBjbGFzc05hbWUsXG4gICAgJ2stZGlzYWJsZWQnOiBkaXNhYmxlZCxcbiAgICAnay1zaG93JzogX3Nob3csXG4gICAgJ2stY2xlYXJhYmxlJzogY2xlYXJhYmxlLFxuICAgIFtgay0ke3NpemV9YF06IHNpemUgIT09ICdkZWZhdWx0JyxcbiAgICAnay1mbHVpZCc6IGZsdWlkLFxufTtcblxubGV0IGhhc1ZhbHVlID0gdmFsdWUgIT0gbnVsbCAmJiAoIW11bHRpcGxlICYmIHZhbHVlICE9PSAnJyB8fCBtdWx0aXBsZSAmJiB2YWx1ZS5sZW5ndGgpO1xuY29uc3QgaXNHcm91cCA9IEFycmF5LmlzQXJyYXkoc2VsZi5nZXQoJ2RhdGEuMC5kYXRhJykpO1xuXG5sZXQgbGFiZWwgPSBpc1N0cmluZ09yTnVtYmVyKHZhbHVlKSA/IHZhbHVlIDogbnVsbDtcbmxldCBsYWJlbHMgPSBbXTtcblxuY29uc3QgaGFuZGxlUHJvcHMgPSBwcm9wcyA9PiB7XG4gICAgbGV0IGFjdGl2ZSA9IGZhbHNlO1xuICAgIGxldCB2YWxpZCA9IGZhbHNlO1xuXG4gICAgaWYgKCFtdWx0aXBsZSkge1xuICAgICAgICBpZiAocHJvcHMudmFsdWUgPT09IHZhbHVlKSB7XG4gICAgICAgICAgICAvLyBzZXQgbGFiZWxcbiAgICAgICAgICAgIGxhYmVsID0gcHJvcHMubGFiZWw7XG4gICAgICAgICAgICBhY3RpdmUgPSB0cnVlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICAgIGNvbnN0IGluZGV4ID0gdmFsdWUuaW5kZXhPZihwcm9wcy52YWx1ZSk7XG4gICAgICAgIGlmICh+aW5kZXgpIHtcbiAgICAgICAgICAgIC8vIGtlZXAgb3JkZXIgY29uc2lzdGVudFxuICAgICAgICAgICAgbGFiZWxzW2luZGV4XSA9IHByb3BzLmxhYmVsO1xuICAgICAgICAgICAgYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgbGV0IHRtcDtcbiAgICBpZiAoXG4gICAgICAgICFmaWx0ZXJhYmxlICYmIFxuICAgICAgICBwcm9wcy5sYWJlbCB8fCBcbiAgICAgICAga2V5d29yZHMgPT0gbnVsbCB8fCBcbiAgICAgICAgfnByb3BzLmxhYmVsLnRvTG93ZXJDYXNlKCkuaW5kZXhPZigodG1wID0ga2V5d29yZHMudG9Mb3dlckNhc2UoKSkpIHx8IFxuICAgICAgICAoXG4gICAgICAgICAgICBpc1N0cmluZ09yTnVtYmVyKHByb3BzLnZhbHVlKSAmJiBcbiAgICAgICAgICAgIH5TdHJpbmcocHJvcHMudmFsdWUpLnRvTG93ZXJDYXNlKCkuaW5kZXhPZih0bXApXG4gICAgICAgIClcbiAgICApIHtcbiAgICAgICAgdmFsaWQgPSB0cnVlOyBcbiAgICB9XG5cbiAgICByZXR1cm4ge2FjdGl2ZSwgdmFsaWR9O1xufTtcblxuY29uc3QgT3B0aW9ucyA9IHByb3BzID0+IHtcbiAgICBjb25zdCBkYXRhID0gcHJvcHMuZGF0YTtcbiAgICBjb25zdCByZXQgPSBbXTtcbiAgICBkYXRhLmZvckVhY2goKGl0ZW0sIGluZGV4KSA9PiB7XG4gICAgICAgIC8vIGRlcHJlY2F0ZSB0ZXh0LCB1c2UgbGFiZWwgaW5zdGVhZCBvZlxuICAgICAgICBpZiAoaXRlbS50ZXh0KSBpdGVtLmxhYmVsID0gaXRlbS50ZXh0O1xuICAgICAgICBcbiAgICAgICAgY29uc3Qge3ZhbGlkLCBhY3RpdmV9ID0gaGFuZGxlUHJvcHMoaXRlbSk7XG4gICAgICAgIGlmICh2YWxpZCkge1xuICAgICAgICAgICAgcmV0LnB1c2goXG4gICAgICAgICAgICAgICAgaChEcm9wZG93bkl0ZW0sIHsnZXYtc2VsZWN0JzogZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW3NlbGYuX29uU2VsZWN0LmJpbmQoc2VsZiwgaXRlbS52YWx1ZSkgXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKSwgJ2Rpc2FibGVkJzogZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW2l0ZW0uZGlzYWJsZWQgXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKSwgJ2NsYXNzTmFtZSc6IF9jbGFzc05hbWUoZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW3snay1hY3RpdmUnOiBhY3RpdmV9IF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcykpLCAnaGlkZU9uU2VsZWN0JzogZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gWyFtdWx0aXBsZSBdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpLCAnY2hpbGRyZW4nOiBmdW5jdGlvbigpIHt0cnkge3JldHVybiBbaXRlbS50ZW1wbGF0ZSA/IGl0ZW0udGVtcGxhdGUoaXRlbSwgaW5kZXgpIDogaXRlbS5sYWJlbCBdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpLCAnX2NvbnRleHQnOiAkdGhpc30pXG4gICAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gcmV0O1xufVxuXG5jb25zdCBPcHRpb25zVk5vZGVzID0gKHtjaGlsZHJlbn0pID0+IHtcbiAgICByZXR1cm4gX191Lm1hcChjaGlsZHJlbiA/IChBcnJheS5pc0FycmF5KGNoaWxkcmVuKSA/IGNoaWxkcmVuIDogW2NoaWxkcmVuXSkgOiBjaGlsZHJlbiwgdk5vZGUgPT4ge1xuICAgICAgICBpZiAodk5vZGUudGFnID09PSBPcHRpb24pIHtcbiAgICAgICAgICAgIGxldCBwcm9wcyA9IHZOb2RlLnByb3BzO1xuICAgICAgICAgICAgcHJvcHMgPSB7XG4gICAgICAgICAgICAgICAgLi4ucHJvcHMsIFxuICAgICAgICAgICAgICAgICdldi1zZWxlY3QnOiBzZWxmLl9vblNlbGVjdC5iaW5kKHNlbGYsIHByb3BzLnZhbHVlKSxcbiAgICAgICAgICAgICAgICBoaWRlT25TZWxlY3Q6ICFtdWx0aXBsZSxcbiAgICAgICAgICAgICAgICBsYWJlbDogcHJvcHMubGFiZWwgfHwgZ2V0VGV4dEJ5Q2hpbGRyZW4ocHJvcHMuY2hpbGRyZW4pLFxuICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBwcm9wcy5jaGlsZHJlbiB8fCBwcm9wcy5sYWJlbCBcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBjb25zdCB7YWN0aXZlLCB2YWxpZH0gPSBoYW5kbGVQcm9wcyhwcm9wcyk7XG4gICAgICAgICAgICBpZiAoIXZhbGlkKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGhjKCcnKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcHJvcHMuY2xhc3NOYW1lID0gX2NsYXNzTmFtZSh7XG4gICAgICAgICAgICAgICAgICAgIFtwcm9wcy5jbGFzc05hbWVdOiBwcm9wcy5jbGFzc05hbWUsXG4gICAgICAgICAgICAgICAgICAgICdrLWFjdGl2ZSc6IGFjdGl2ZSxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gcmV0dXJuIHRoZSBjbG9uZWQgdk5vZGVcbiAgICAgICAgICAgIHJldHVybiBoKE9wdGlvbiwgcHJvcHMpO1xuICAgICAgICB9IGVsc2UgaWYgKHZOb2RlLnRhZyA9PT0gT3B0aW9uR3JvdXApIHtcbiAgICAgICAgICAgIGxldCBwcm9wcyA9IHZOb2RlLnByb3BzO1xuICAgICAgICAgICAgcHJvcHMgPSB7XG4gICAgICAgICAgICAgICAgLi4ucHJvcHMsXG4gICAgICAgICAgICAgICAgY2hpbGRyZW46IGgoT3B0aW9uc1ZOb2RlcywgeydjaGlsZHJlbic6IGZ1bmN0aW9uKCkge3RyeSB7cmV0dXJuIFtwcm9wcy5jaGlsZHJlbiBdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpLCAnX2NvbnRleHQnOiAkdGhpc30pXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgcmV0dXJuIGgoT3B0aW9uR3JvdXAsIHByb3BzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB2Tm9kZTtcbiAgICB9KTsgXG59IFxuXG5jb25zdCBNZW51ID0gKFxuICAgIGgoRHJvcGRvd25NZW51LCB7J2V2LSRjaGFuZ2VkOnNob3cnOiBmdW5jdGlvbigpIHt0cnkge3JldHVybiBbc2VsZi5fcG9zaXRpb24gXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKSwgJ2NsYXNzTmFtZSc6ICdrLXNlbGVjdC1kcm9wZG93bicsICdldi0kY2hhbmdlOnNob3cnOiBmdW5jdGlvbigpIHt0cnkge3JldHVybiBbc2VsZi5fb25DaGFuZ2VTaG93IF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcyksICdjaGlsZHJlbic6IFtmdW5jdGlvbigpIHt0cnkge3JldHVybiBbIWlzR3JvdXAgXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKSA/IGgoT3B0aW9ucywgeydkYXRhJzogZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW2RhdGEgXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKSwgJ2NoaWxkcmVuJzogbnVsbCwgJ19jb250ZXh0JzogJHRoaXN9KSA6IF9WZHQudXRpbHMubWFwKGZ1bmN0aW9uKCkge3RyeSB7cmV0dXJuIFtkYXRhIF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcyksIGZ1bmN0aW9uKHZhbHVlLCBrZXkpIHtcbnJldHVybiBoKE9wdGlvbkdyb3VwLCB7J2xhYmVsJzogZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW3ZhbHVlLmxhYmVsIF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcyksICdjaGlsZHJlbic6IGgoT3B0aW9ucywgeydkYXRhJzogZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW3ZhbHVlLmRhdGEgXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKSwgJ2NoaWxkcmVuJzogbnVsbCwgJ19jb250ZXh0JzogJHRoaXN9KSwgJ19jb250ZXh0JzogJHRoaXN9KTtcbn0sIHRoaXMpLCBoKE9wdGlvbnNWTm9kZXMsIHsnY2hpbGRyZW4nOiBmdW5jdGlvbigpIHt0cnkge3JldHVybiBbY2hpbGRyZW4gXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKSwgJ19jb250ZXh0JzogJHRoaXN9KV0sICdfY29udGV4dCc6ICR0aGlzfSwgbnVsbCwgbnVsbCwgbnVsbCwgZnVuY3Rpb24oaSkge3dpZGdldHNbJ21lbnUnXSA9IGl9KVxuKTtcblxuLy8gaWYgdGhlIHZhbHVlIGlzIG5vdCBpbiBvcHRpb25zLCB0aGVuIHNldCBoYXNWYWx1ZSB0byBmYWxzZVxuaWYgKGhhc1ZhbHVlICYmICFsYWJlbCAmJiAhbGFiZWxzLmxlbmd0aCkge1xuICAgIGhhc1ZhbHVlID0gZmFsc2U7XG59XG5cbnJldHVybiBoKCdkaXYnLCB7J3N0eWxlJzogZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW3dpZHRoICE9IG51bGwgPyBhZGRTdHlsZShzdHlsZSwge3dpZHRoOiBgJHt3aWR0aH1weGB9KSA6IHN0eWxlIF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcyksICd0YWJpbmRleCc6IGZ1bmN0aW9uKCkge3RyeSB7cmV0dXJuIFtkaXNhYmxlZCA/IFwiLTFcIiA6IFwiMFwiIF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcyksICdldi1rZXlwcmVzcyc6IGZ1bmN0aW9uKCkge3RyeSB7cmV0dXJuIFtzZWxmLl9vbktleXByZXNzIF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcyksICdldi1rZXlkb3duJzogZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW3NlbGYuX29uS2V5ZG93biBdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpfSwgaChEcm9wZG93biwgeydwb3NpdGlvbic6IGZ1bmN0aW9uKCkge3RyeSB7cmV0dXJuIFt7bXk6ICdsZWZ0IHRvcCcsIGF0OiAnbGVmdCBib3R0b20nfSBdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpLCAndHJpZ2dlcic6ICdjbGljaycsICdkaXNhYmxlZCc6IGZ1bmN0aW9uKCkge3RyeSB7cmV0dXJuIFtkaXNhYmxlZCBdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpLCAnY2hpbGRyZW4nOiBbaCgnZGl2Jywgeydldi1jbGljayc6IGZ1bmN0aW9uKCkge3RyeSB7cmV0dXJuIFtzZWxmLl9mb2N1c0lucHV0IF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcyksICd0YWJpbmRleCc6ICctMSd9LCBbaCgnaW5wdXQnLCB7J3R5cGUnOiAnaGlkZGVuJywgJ3ZhbHVlJzogZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW3ZhbHVlIF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcyksICduYW1lJzogZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW25hbWUgXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKX0pLCBmdW5jdGlvbigpIHt0cnkge3JldHVybiBbIW11bHRpcGxlICYmIGZpbHRlcmFibGUgXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKSA/IGgoSW5wdXQsIHsndmFsdWUnOiBmdW5jdGlvbigpIHt0cnkge3JldHVybiBba2V5d29yZHMgPT0gbnVsbCA/IGxhYmVsIDoga2V5d29yZHMgXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKSwgJ2V2LWlucHV0JzogZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW3NlbGYuX29uU2VhcmNoIF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcyksICdldi1ibHVyJzogZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW3NlbGYuX29uQmx1ciBdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpLCAnZXYtZm9jdXMnOiBmdW5jdGlvbigpIHt0cnkge3JldHVybiBbc2VsZi5fc2VsZWN0SW5wdXQgXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKSwgJ2Rpc2FibGVkJzogZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW2Rpc2FibGVkIF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcyksICdwbGFjZWhvbGRlcic6IGZ1bmN0aW9uKCkge3RyeSB7cmV0dXJuIFtfcGxhY2Vob2xkZXIgXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKSwgJ3NpemUnOiBmdW5jdGlvbigpIHt0cnkge3JldHVybiBbc2l6ZSBdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpLCAnZmx1aWQnOiBmdW5jdGlvbigpIHt0cnkge3JldHVybiBbdHJ1ZV1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcyksICdjaGlsZHJlbic6IG51bGwsICdfY29udGV4dCc6ICR0aGlzfSwgbnVsbCwgbnVsbCwgbnVsbCwgZnVuY3Rpb24oaSkge3dpZGdldHNbJ2lucHV0J10gPSBpfSkgOiBmdW5jdGlvbigpIHt0cnkge3JldHVybiBbIWZpbHRlcmFibGUgJiYgIWhhc1ZhbHVlIF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcykgPyBoKCdzcGFuJywgbnVsbCwgZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW19wbGFjZWhvbGRlciBdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpLCAnay1wbGFjZWhvbGRlciBjLWVsbGlwc2lzJykgOiBmdW5jdGlvbigpIHt0cnkge3JldHVybiBbIW11bHRpcGxlIF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcykgPyBoKCdzcGFuJywgbnVsbCwgZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW2xhYmVsIF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcyksICdrLXZhbHVlIGMtZWxsaXBzaXMnKSA6IGgoQW5pbWF0ZSwgeydhOnRhZyc6ICdzcGFuJywgJ2E6ZGlzYWJsZWQnOiBmdW5jdGlvbigpIHt0cnkge3JldHVybiBbdHJ1ZV1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcyksICdjbGFzc05hbWUnOiAnay12YWx1ZXMnLCAnY2hpbGRyZW4nOiBbX1ZkdC51dGlscy5tYXAoZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW2xhYmVscyBdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpLCBmdW5jdGlvbihpdGVtLCBpbmRleCkge1xucmV0dXJuIGgoQW5pbWF0ZSwgeydhOnRhZyc6ICdzcGFuJywgJ2NsYXNzTmFtZSc6ICdrLXRhZycsICdrZXknOiBmdW5jdGlvbigpIHt0cnkge3JldHVybiBbdmFsdWVbaW5kZXhdIF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcyksICdhOnRyYW5zaXRpb24nOiAnZmFkZScsICdjaGlsZHJlbic6IFtoKCdzcGFuJywgbnVsbCwgZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW2l0ZW0gXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKSwgJ2stdGV4dCcpLCBoKCdpJywgeydldi1jbGljayc6IGZ1bmN0aW9uKCkge3RyeSB7cmV0dXJuIFtzZWxmLl9kZWxldGUuYmluZChzZWxmLCB2YWx1ZVtpbmRleF0pIF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcyl9LCBudWxsLCAnay1pY29uIGlvbi1pb3MtY2xvc2UtZW1wdHknKV0sICdfY29udGV4dCc6ICR0aGlzfSk7XG59LCB0aGlzKSwgZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW2ZpbHRlcmFibGUgXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKSA/IGgoSW5wdXQsIHsndmFsdWUnOiBmdW5jdGlvbigpIHt0cnkge3JldHVybiBba2V5d29yZHMgXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKSwgJ2V2LWlucHV0JzogZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW3NlbGYuX29uU2VhcmNoIF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcyksICdldi1ibHVyJzogZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW3NlbGYuX29uQmx1ciBdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpLCAnZXYtZm9jdXMnOiBmdW5jdGlvbigpIHt0cnkge3JldHVybiBbc2VsZi5fb25Gb2N1cyBdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpLCAnZGlzYWJsZWQnOiBmdW5jdGlvbigpIHt0cnkge3JldHVybiBbZGlzYWJsZWQgXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKSwgJ3BsYWNlaG9sZGVyJzogZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gWyFoYXNWYWx1ZSA/IF9wbGFjZWhvbGRlciA6ICcnIF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcyksICdhdXRvV2lkdGgnOiBmdW5jdGlvbigpIHt0cnkge3JldHVybiBbdHJ1ZV1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcyksICdzaXplJzogZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW3NpemUgXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKSwgJ2NoaWxkcmVuJzogbnVsbCwgJ19jb250ZXh0JzogJHRoaXN9LCBudWxsLCBudWxsLCBudWxsLCBmdW5jdGlvbihpKSB7d2lkZ2V0c1snaW5wdXQnXSA9IGl9KSA6IHVuZGVmaW5lZF0sICdfY29udGV4dCc6ICR0aGlzfSksIGgoJ3NwYW4nLCBudWxsLCBbZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW2NsZWFyYWJsZSBdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpID8gaCgnaScsIHsnZXYtY2xpY2snOiBmdW5jdGlvbigpIHt0cnkge3JldHVybiBbc2VsZi5fb25DbGVhciBdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpfSwgbnVsbCwgX2NsYXNzTmFtZShmdW5jdGlvbigpIHt0cnkge3JldHVybiBbe1wiay1jbGVhciBpb24taW9zLWNsb3NlXCI6IHRydWUsIFwiay1zaG93XCI6IGhhc1ZhbHVlfSBdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpKSkgOiB1bmRlZmluZWQsIGgoJ2knLCBudWxsLCBudWxsLCAnay1hcnJvdyBpb24tYXJyb3ctZG93bi1iJyldLCAnay1zdWZmaXgnKV0sICdrLXdyYXBwZXInLCBudWxsLCBmdW5jdGlvbihpKSB7d2lkZ2V0c1snd3JhcHBlciddID0gaX0pLCBmdW5jdGlvbigpIHt0cnkge3JldHVybiBbTWVudSBcbiAgICBdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpXSwgJ19jb250ZXh0JzogJHRoaXN9LCBudWxsLCBudWxsLCBudWxsLCBmdW5jdGlvbihpKSB7d2lkZ2V0c1snZHJvcGRvd24nXSA9IGl9KSwgX2NsYXNzTmFtZShmdW5jdGlvbigpIHt0cnkge3JldHVybiBbey4uLmNsYXNzTmFtZU9iaiwgJ2stYWN0aXZlJzogaGFzVmFsdWV9IF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcykpKVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvc2VsZWN0L2luZGV4LnZkdCIsImltcG9ydCBJbnRhY3QgZnJvbSAnaW50YWN0JztcbmltcG9ydCB7RHJvcGRvd25JdGVtfSBmcm9tICcuLi9kcm9wZG93bic7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE9wdGlvbiBleHRlbmRzIERyb3Bkb3duSXRlbSB7XG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvc2VsZWN0L29wdGlvbi5qcyIsImltcG9ydCBJbnRhY3QgZnJvbSAnaW50YWN0JztcbmltcG9ydCB0ZW1wbGF0ZSBmcm9tICcuL2xheW91dC52ZHQnO1xuaW1wb3J0ICcuL2xheW91dC5zdHlsJztcblxubGV0IHRoZW1lID0gJ2twYydcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBJbnRhY3Qge1xuICAgIEBJbnRhY3QudGVtcGxhdGUoKVxuICAgIHN0YXRpYyB0ZW1wbGF0ZSA9IHRlbXBsYXRlO1xuXG4gICAgZGVmYXVsdHMoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB0aGVtZTogdGhlbWUsXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgX2luaXQoKSB7XG4gICAgICAgIHRoaXMub24oJyRjaGFuZ2U6dGhlbWUnLCAoYywgdiwgbykgPT4ge1xuICAgICAgICAgICAgdGhpcy5fY2hhbmdlVGhlbWUodiwgbyk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIF9tb3VudCgpIHtcbiAgICAgICAgdGhpcy4kYm9yZGVyID0gdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ib3JkZXInKTtcbiAgICAgICAgdGhpcy5fdXBkYXRlQm9yZGVyKCk7XG4gICAgICAgIHRoaXMubGluayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2xpbmtbcmVsPXN0eWxlc2hlZXRdJyk7XG4gICAgfVxuXG4gICAgX2NoYW5nZVRoZW1lKG5ld1RoZW1lLCBvbGRUaGVtZSkge1xuICAgICAgICB0aGlzLmxpbmsuaHJlZiA9IHRoaXMubGluay5ocmVmLnJlcGxhY2UoYHRoZW1lLSR7b2xkVGhlbWV9YCwgYHRoZW1lLSR7bmV3VGhlbWV9YCk7XG4gICAgICAgIHRoZW1lID0gbmV3VGhlbWU7XG4gICAgfVxuXG4gICAgX3VwZGF0ZUJvcmRlcigpIHtcbiAgICAgICAgLy8gY29uc3QgJG5hdiA9IHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuYWN0aXZlJyk7XG4gICAgICAgIC8vIGxldCB3aWR0aCA9IDA7XG4gICAgICAgIC8vIGxldCBsZWZ0ID0gMDtcbiAgICAgICAgLy8gaWYgKCRuYXYpIHtcbiAgICAgICAgICAgIC8vIGxlZnQgPSAkbmF2LnBvc2l0aW9uKCkubGVmdDtcbiAgICAgICAgICAgIC8vIHdpZHRoID0gJG5hdi5vdXRlcldpZHRoKCk7XG4gICAgICAgIC8vIH1cbiAgICAgICAgLy8gdGhpcy4kYm9yZGVyLmFkZENsYXNzKCd0cmFuc2l0aW9uJyk7XG4gICAgICAgIC8vIHRoaXMuJGJvcmRlci5jc3Moe3dpZHRoOiB3aWR0aCwgbGVmdDogbGVmdH0pO1xuICAgIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NpdGUvc3JjL3BhZ2VzL2xheW91dC5qcyIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG4gICAgaWYobW9kdWxlLmhvdCkge1xuICAgICAgLy8gMTUyNzU3NjY5NjM1MVxuICAgICAgdmFyIGNzc1JlbG9hZCA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1ob3QtbG9hZGVyL2hvdE1vZHVsZVJlcGxhY2VtZW50LmpzXCIpKG1vZHVsZS5pZCwge1wiZmlsZU1hcFwiOlwie2ZpbGVOYW1lfVwifSk7XG4gICAgICBtb2R1bGUuaG90LmRpc3Bvc2UoY3NzUmVsb2FkKTtcbiAgICAgIG1vZHVsZS5ob3QuYWNjZXB0KHVuZGVmaW5lZCwgY3NzUmVsb2FkKTtcbiAgICB9XG4gIFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc2l0ZS9zcmMvcGFnZXMvbGF5b3V0LnN0eWxcbi8vIG1vZHVsZSBpZCA9IC4vc2l0ZS9zcmMvcGFnZXMvbGF5b3V0LnN0eWxcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IExpbmsgZnJvbSAna3BjL2NvbXBvbmVudHMvbGluayc7aW1wb3J0IHtTZWxlY3QsIE9wdGlvbn0gZnJvbSAna3BjL2NvbXBvbmVudHMvc2VsZWN0JztcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKG9iaiwgX1ZkdCwgYmxvY2tzLCAkY2FsbGVlKSB7XG5fVmR0IHx8IChfVmR0ID0gVmR0KTtcbm9iaiB8fCAob2JqID0ge30pO1xuYmxvY2tzIHx8IChibG9ja3MgPSB7fSk7XG52YXIgaCA9IF9WZHQubWlzcy5oLCBoYyA9IF9WZHQubWlzcy5oYywgaHUgPSBfVmR0Lm1pc3MuaHUsIHdpZGdldHMgPSB0aGlzICYmIHRoaXMud2lkZ2V0cyB8fCB7fSwgX2Jsb2NrcyA9IHt9LCBfX2Jsb2NrcyA9IHt9LFxuX191ID0gX1ZkdC51dGlscywgZXh0ZW5kID0gX191LmV4dGVuZCwgX2UgPSBfX3UuZXJyb3IsIF9jbGFzc05hbWUgPSBfX3UuY2xhc3NOYW1lLFxuX19vID0gX191Lk9wdGlvbnMsIF9nZXRNb2RlbCA9IF9fby5nZXRNb2RlbCwgX3NldE1vZGVsID0gX19vLnNldE1vZGVsLFxuX3NldENoZWNrYm94TW9kZWwgPSBfX3Uuc2V0Q2hlY2tib3hNb2RlbCwgX2RldGVjdENoZWNrYm94Q2hlY2tlZCA9IF9fdS5kZXRlY3RDaGVja2JveENoZWNrZWQsXG5fc2V0U2VsZWN0TW9kZWwgPSBfX3Uuc2V0U2VsZWN0TW9kZWwsXG5zZWxmID0gdGhpcy5kYXRhLCAkdGhpcyA9IHRoaXMsIHNjb3BlID0gb2JqLCBBbmltYXRlID0gc2VsZiAmJiBzZWxmLkFuaW1hdGUsIHBhcmVudCA9ICgkY2FsbGVlIHx8IHt9KS5fc3VwZXJcblxuXG5cbmNvbnN0IG5hdiA9IFtcbiAgICB7XG4gICAgICAgIHRpdGxlOiAn5pWZ56iLJyxcbiAgICAgICAgaHJlZjogJy9kb2NzL2dldHRpbmctc3RhcnRlZC8nXG4gICAgfSxcbiAgICAvKiB7ICovXG4gICAgICAgIC8qIHRpdGxlOiAn6K6+6K6h6K+t6KiAJywgKi9cbiAgICAgICAgLyogaHJlZjogJy9kZXNpZ24nLCAqL1xuICAgIC8qIH0sICovXG4gICAgLyogeyAqL1xuICAgICAgICAvKiB0aXRsZTogJ0FQSScsICovXG4gICAgICAgIC8qIGhyZWY6ICdhcGknICovXG4gICAgLyogfSwgKi9cbiAgICAvLyB7XG4gICAgICAgIC8vIHRpdGxlOiAn56S65L6LJyxcbiAgICAgICAgLy8gaHJlZjogJ2V4YW1wbGVzJ1xuICAgIC8vIH1cbl07XG5cbnJldHVybiBoKCdkaXYnLCBudWxsLCBbaCgnZGl2JywgbnVsbCwgaCgnaGVhZGVyJywgbnVsbCwgKF9ibG9ja3NbXCJoZWFkZXJcIl0gPSBmdW5jdGlvbihwYXJlbnQpIHtyZXR1cm4gW2goTGluaywgeydjbGFzc05hbWUnOiAnbG9nbycsICdocmVmJzogJy8nLCAnY2hpbGRyZW4nOiAnS1BDJywgJ19jb250ZXh0JzogJHRoaXN9KSwgaCgnZGl2JywgbnVsbCwgW2goJ25hdicsIG51bGwsIFtfVmR0LnV0aWxzLm1hcChmdW5jdGlvbigpIHt0cnkge3JldHVybiBbbmF2IF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcyksIGZ1bmN0aW9uKHZhbHVlLCBrZXkpIHtcbnJldHVybiBoKExpbmssIHsnY2xhc3NOYW1lJzogX2NsYXNzTmFtZShmdW5jdGlvbigpIHt0cnkge3JldHVybiBbe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY3RpdmU6IHZhbHVlLmhyZWYgPT09IHNjb3BlLm5hdkluZGV4XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpKSwgJ2hyZWYnOiBmdW5jdGlvbigpIHt0cnkge3JldHVybiBbYCR7cHJvY2Vzcy5VUkxfUFJFRklYfSR7dmFsdWUuaHJlZn1gIF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcyksICdjaGlsZHJlbic6IGZ1bmN0aW9uKCkge3RyeSB7cmV0dXJuIFt2YWx1ZS50aXRsZSBdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpLCAnX2NvbnRleHQnOiAkdGhpc30pO1xufSwgdGhpcyksIGgoJ2RpdicsIG51bGwsIG51bGwsICdib3JkZXInKV0pLCBoKCdzcGFuJywgbnVsbCwgJ+WIh+aNouS4u+mimO+8micsICdsYWJlbCcpLCBoKFNlbGVjdCwgeyd2LW1vZGVsJzogJ3RoZW1lJywgJ3dpZHRoJzogJzEwMCcsICdjaGlsZHJlbic6IFtoKE9wdGlvbiwgeyd2YWx1ZSc6ICdrcGMnLCAnY2hpbGRyZW4nOiAnZGVmYXVsdCcsICdfY29udGV4dCc6ICR0aGlzfSksIGgoT3B0aW9uLCB7J3ZhbHVlJzogJ2tzeXVuJywgJ2NoaWxkcmVuJzogJ2tzeXVuJywgJ19jb250ZXh0JzogJHRoaXN9KV0sICdfY29udGV4dCc6ICR0aGlzLCB2YWx1ZTogX2dldE1vZGVsKHNlbGYsICd0aGVtZScpLCAnZXYtJGNoYW5nZTp2YWx1ZSc6IGZ1bmN0aW9uKF9fYywgX19uKSB7IF9zZXRNb2RlbChzZWxmLCAndGhlbWUnLCBfX24sICR0aGlzKSB9fSldLCAncmlnaHQnKV07fSkgJiYgKF9fYmxvY2tzW1wiaGVhZGVyXCJdID0gZnVuY3Rpb24ocGFyZW50KSB7XG52YXIgc2VsZiA9IHRoaXM7XG5yZXR1cm4gYmxvY2tzW1wiaGVhZGVyXCJdID8gYmxvY2tzW1wiaGVhZGVyXCJdLmNhbGwodGhpcywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gX2Jsb2Nrc1tcImhlYWRlclwiXS5jYWxsKHNlbGYsIHBhcmVudCk7XG59KSA6IF9ibG9ja3NbXCJoZWFkZXJcIl0uY2FsbCh0aGlzLCBwYXJlbnQpO1xufSkgJiYgX19ibG9ja3NbXCJoZWFkZXJcIl0uY2FsbCh0aGlzKSksICdoZWFkZXItd3JhcHBlcicpLCBoKCdkaXYnLCBudWxsLCAoX2Jsb2Nrc1tcImNvbnRlbnRcIl0gPSBmdW5jdGlvbihwYXJlbnQpIHtyZXR1cm4gbnVsbDt9KSAmJiAoX19ibG9ja3NbXCJjb250ZW50XCJdID0gZnVuY3Rpb24ocGFyZW50KSB7XG52YXIgc2VsZiA9IHRoaXM7XG5yZXR1cm4gYmxvY2tzW1wiY29udGVudFwiXSA/IGJsb2Nrc1tcImNvbnRlbnRcIl0uY2FsbCh0aGlzLCBmdW5jdGlvbigpIHtcbnJldHVybiBfYmxvY2tzW1wiY29udGVudFwiXS5jYWxsKHNlbGYsIHBhcmVudCk7XG59KSA6IF9ibG9ja3NbXCJjb250ZW50XCJdLmNhbGwodGhpcywgcGFyZW50KTtcbn0pICYmIF9fYmxvY2tzW1wiY29udGVudFwiXS5jYWxsKHRoaXMpLCAnY29udGVudC13cmFwcGVyJyldLCBfY2xhc3NOYW1lKGZ1bmN0aW9uKCkge3RyeSB7cmV0dXJuIFt7J21haW4td3JhcHBlcic6IHRydWUsIFtzY29wZS5jbGFzc05hbWVdOiBzY29wZS5jbGFzc05hbWV9IF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcykpKVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NpdGUvc3JjL3BhZ2VzL2xheW91dC52ZHQiXSwic291cmNlUm9vdCI6IiJ9