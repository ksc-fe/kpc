require("source-map-support").install();
exports.ids = [3];
exports.modules = {

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

/***/ "./site/src/pages/design/index.js":
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

var _index = __webpack_require__("./site/src/pages/design/index.vdt");

var _index2 = _interopRequireDefault(_index);

var _layout = __webpack_require__("./site/src/pages/layout.js");

var _layout2 = _interopRequireDefault(_layout);

__webpack_require__("./site/src/pages/design/index.styl");

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

/***/ "./site/src/pages/design/index.styl":
/***/ (function(module, exports, __webpack_require__) {

// removed by extract-text-webpack-plugin
    if(false) {
      // 1527754393449
      var cssReload = require("!../../../../node_modules/css-hot-loader/hotModuleReplacement.js")(module.id, {"fileMap":"{fileName}"});
      module.hot.dispose(cssReload);
      module.hot.accept(undefined, cssReload);
    }
  

/***/ }),

/***/ "./site/src/pages/design/index.vdt":
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
        var _obj = { 'className': 'design-page', 'children': null };
        if (_obj.hasOwnProperty("arguments")) {
            extend(_obj, _obj.arguments === true ? obj : _obj.arguments);
            delete _obj.arguments;
        }
        return parent.call(this, _obj, _Vdt, function (blocks) {
            var _blocks = {},
                __blocks = extend({}, blocks);
            return (_blocks["content"] = function (parent) {
                return h('ul', null, _Vdt.utils.map(function () {
                    try {
                        return [Array.apply(null, { length: 9 })][0];
                    } catch (e) {
                        _e(e);
                    }
                }.call(this), function (value, key) {
                    return h('li', null, null, _className(function () {
                        try {
                            return ["color color" + key][0];
                        } catch (e) {
                            _e(e);
                        }
                    }.call(this)));
                }, this));
            }) && (__blocks["content"] = function (parent) {
                var self = this;
                return blocks["content"] ? blocks["content"].call(this, function () {
                    return _blocks["content"].call(self, parent);
                }) : _blocks["content"].call(this, parent);
            }), __blocks;
        }.call(this, blocks), parent);
    }.call(this);
};

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2Ryb3Bkb3duL2Ryb3Bkb3duLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvZHJvcGRvd24vaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9kcm9wZG93bi9pbmRleC5zdHlsIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvZHJvcGRvd24vaXRlbS5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2Ryb3Bkb3duL2l0ZW0udmR0Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvZHJvcGRvd24vbWVudS5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2Ryb3Bkb3duL21lbnUudmR0Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvaW5wdXQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9pbnB1dC9pbmRleC5zdHlsIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvaW5wdXQvaW5kZXgudmR0Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvbGluay9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2xpbmsvaW5kZXgudmR0Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvbW92ZVdyYXBwZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9tb3ZlV3JhcHBlci9wb3NpdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3NlbGVjdC9ncm91cC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3NlbGVjdC9ncm91cC52ZHQiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9zZWxlY3QvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9zZWxlY3QvaW5kZXguc3R5bCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3NlbGVjdC9pbmRleC52ZHQiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9zZWxlY3Qvb3B0aW9uLmpzIiwid2VicGFjazovLy8uL3NpdGUvc3JjL3BhZ2VzL2Rlc2lnbi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zaXRlL3NyYy9wYWdlcy9kZXNpZ24vaW5kZXguc3R5bCIsIndlYnBhY2s6Ly8vLi9zaXRlL3NyYy9wYWdlcy9kZXNpZ24vaW5kZXgudmR0Iiwid2VicGFjazovLy8uL3NpdGUvc3JjL3BhZ2VzL2xheW91dC5qcyIsIndlYnBhY2s6Ly8vLi9zaXRlL3NyYy9wYWdlcy9sYXlvdXQuc3R5bCIsIndlYnBhY2s6Ly8vLi9zaXRlL3NyYy9wYWdlcy9sYXlvdXQudmR0Il0sIm5hbWVzIjpbImgiLCJJbnRhY3QiLCJWZHQiLCJtaXNzIiwiRHJvcGRvd24iLCJ0ZW1wbGF0ZSIsImRhdGEiLCJnZXQiLCJkZWZhdWx0cyIsInRyaWdnZXIiLCJkaXNhYmxlZCIsIl9pbml0IiwiX3NhdmVPcmlnaW5hbEV2ZW50cyIsIm9uIiwia2VlcCIsImNoaWxkcmVuIiwiY2xhc3NOYW1lIiwicmVzdCIsIkFycmF5IiwiaXNBcnJheSIsIm9yaWdpblByb3BzIiwicHJvcHMiLCJoYXNTYXZlZCIsIl9oYXNTYXZlZCIsIl9ldkNsaWNrIiwiX2V2TW91c2VFbnRlciIsIl9ldk1vdXNlTGVhdmUiLCJzaG93IiwiYmluZCIsImhpZGUiLCJzZXQiLCJzaWxlbnQiLCJfbW91bnQiLCJzaWJsaW5ncyIsInBhcmVudFZOb2RlIiwiaW5kZXgiLCJpbmRleE9mIiwidk5vZGUiLCJtZW51IiwiZHJvcGRvd24iLCJmbiIsImUiLCJpc0ZvY3VzIiwiZm9jdXNJdGVtQnlJbmRleCIsImltbWVkaWF0ZWx5IiwiV3JhcHBlciIsImluVnVlIiwicG9zaXRpb24iLCJrZXkiLCJyZWYiLCJlbGVtZW50IiwiRHJvcGRvd25WdWVXcmFwcGVyIiwiX2NsYXNzTmFtZSIsInV0aWxzIiwiX1dyYXBwZXIiLCJmdW5jdGlvbmFsV3JhcHBlciIsIkRyb3Bkb3duTWVudSIsIkRyb3Bkb3duSXRlbSIsImhpZGVPblNlbGVjdCIsIl9pc0ZvY3VzIiwiYW5jZXN0b3IiLCJfZmluZEFuY2VzdG9yRHJvcGRvd25NZW51IiwicGFyZW50IiwiaXRlbXMiLCJwdXNoIiwiX29uQ2xpY2siLCJ0YWciLCJfb25Nb3VzZUVudGVyIiwiZm9jdXNJdGVtIiwiX29uTW91c2VMZWF2ZSIsInNlbGVjdCIsIl9pc1N1Yk1lbnUiLCJmb2N1cyIsImVsUmVjdCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsInBFbCIsInJlZnMiLCJwRWxSZWN0IiwiYm90dG9tT3ZlcmZsb3dEaXN0YW5jZSIsImJvdHRvbSIsInRvcE92ZXJmbG93RGlzdGFuY2UiLCJ0b3AiLCJzY3JvbGxUb3AiLCJ1bkZvY3VzIiwic2hvd01lbnVBbmRGb2N1cyIsImhpZGVNZW51IiwiaXNGaXJzdCIsIl9kZXN0cm95Iiwic3BsaWNlIiwicHJvcFR5cGVzIiwiQm9vbGVhbiIsIm9iaiIsIl9WZHQiLCJibG9ja3MiLCIkY2FsbGVlIiwiaGMiLCJodSIsIndpZGdldHMiLCJfYmxvY2tzIiwiX19ibG9ja3MiLCJfX3UiLCJleHRlbmQiLCJfZSIsImVycm9yIiwiX19vIiwiT3B0aW9ucyIsIl9nZXRNb2RlbCIsImdldE1vZGVsIiwiX3NldE1vZGVsIiwic2V0TW9kZWwiLCJfc2V0Q2hlY2tib3hNb2RlbCIsInNldENoZWNrYm94TW9kZWwiLCJfZGV0ZWN0Q2hlY2tib3hDaGVja2VkIiwiZGV0ZWN0Q2hlY2tib3hDaGVja2VkIiwiX3NldFNlbGVjdE1vZGVsIiwic2V0U2VsZWN0TW9kZWwiLCJzZWxmIiwiJHRoaXMiLCJzY29wZSIsIkFuaW1hdGUiLCJfc3VwZXIiLCJjbGFzc05hbWVPYmoiLCJjYWxsIiwidHJhbnNpdGlvbiIsInN1YkRyb3Bkb3ducyIsImZvY3VzSW5kZXgiLCJsb2NrZWQiLCJfZmluZFBhcmVudERyb3Bkb3duTWVudSIsIl9hZGREb2N1bWVudEV2ZW50cyIsImNsZWFyVGltZW91dCIsInRpbWVyIiwic2V0VGltZW91dCIsInRvZ2dsZSIsIm15IiwiYXQiLCJvZiIsInVzaW5nIiwiZmVlZGJhY2siLCJfb25TaG93IiwiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiX29uRG9jdW1lbnRDbGljayIsIl9vbktleWRvd24iLCJfcmVtb3ZlRG9jdW1lbnRFdmVudHMiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwidGFyZ2V0IiwiY29udGFpbnMiLCJfaXNDbGlja1N1Yk1lbnUiLCJfZHJvcGRvd24iLCJrZXlDb2RlIiwiX2ZvY3VzTmV4dEl0ZW0iLCJfZm9jdXNQcmV2SXRlbSIsIl9zaG93U3ViTWVudSIsIl9oaWRlU3ViTWVudSIsIl9zZWxlY3RJdGVtIiwicHJldmVudERlZmF1bHQiLCJkaXJlY3Rpb24iLCJtYXgiLCJsZW5ndGgiLCJvbGRJbmRleCIsImZpeEluZGV4IiwiaSIsIml0ZW0iLCJzdWJNZW51cyIsInJldCIsInN1Yk1lbnUiLCJldmVudHMiLCJNb3ZlV3JhcHBlciIsInVuZGVmaW5lZCIsIklucHV0IiwidHlwZSIsIm5hbWUiLCJ2YWx1ZSIsImRlZmF1bHRWYWx1ZSIsInBsYWNlaG9sZGVyIiwicmVhZG9ubHkiLCJjbGVhcmFibGUiLCJzaXplIiwicm93cyIsInNwZWxsY2hlY2siLCJhdXRvV2lkdGgiLCJmbHVpZCIsIndpZHRoIiwidGFiaW5kZXgiLCJhdXRvY29tcGxldGUiLCJfYWRqdXN0V2lkdGgiLCJmYWtlIiwib2Zmc2V0V2lkdGgiLCJpbnB1dCIsInN0eWxlIiwiY2xlYXIiLCJfb25JbnB1dCIsIl9wcm94eUV2ZW50IiwiU3RyaW5nIiwicHJlcGVuZCIsImFwcGVuZCIsInByZWZpeCIsInN1ZmZpeCIsInJlZHVjZSIsIm1lbW8iLCJ3cmFwcGVyRXZlbnRzIiwiTGluayIsImhyZWYiLCJpc1JlcGxhY2UiLCJ0byIsImhpc3RvcnkiLCJ1cmwiLCJhcHBseSIsImxvY2F0aW9uIiwicGF0aG5hbWUiLCJzZWFyY2giLCJyZXBsYWNlIiwiYXV0b0Rlc3Ryb3kiLCJjb250YWluZXIiLCJpbml0IiwiYXJncyIsImNyZWF0ZUNvbW1lbnQiLCJoeWRyYXRlIiwidXBkYXRlIiwibGFzdFZOb2RlIiwibmV4dFZOb2RlIiwiZGVzdHJveSIsIl8kZGVzdHJveSIsInJlbmRlcmVkIiwiVHlwZXMiLCJDb21wb25lbnRDbGFzc09ySW5zdGFuY2UiLCJyZW1vdmUiLCJ2ZHQiLCJkZXN0cm95ZWQiLCJvZmYiLCJxdWVyeVNlbGVjdG9yIiwiYm9keSIsImFwcGVuZENoaWxkIiwiZ2V0RG9jdW1lbnRPcldpbmRvd1JlY3QiLCJzY3JvbGxiYXJXaWR0aCIsIk1hdGgiLCJhYnMiLCJySG9yaXpvbnRhbCIsInJWZXJ0aWNhbCIsInJPZmZzZXQiLCJyUG9zaXRpb24iLCJyUGVyY2VudCIsImdldERpbWVuc2lvbnMiLCJlbGVtIiwibm9kZVR5cGUiLCJoZWlnaHQiLCJvZmZzZXQiLCJsZWZ0Iiwid2luZG93IiwicGFnZVlPZmZzZXQiLCJwYWdlWE9mZnNldCIsInBhZ2VZIiwicGFnZVgiLCJyZWN0IiwiZCIsImRvY3VtZW50RWxlbWVudCIsImNsaWVudFdpZHRoIiwiY2xpZW50SGVpZ2h0IiwiYiIsInNjcm9sbFdpZHRoIiwic2Nyb2xsSGVpZ2h0Iiwib2Zmc2V0SGVpZ2h0IiwiZ2V0T2Zmc2V0cyIsIm9mZnNldHMiLCJwYXJzZUZsb2F0IiwidGVzdCIsIl9zY3JvbGxCYXJXaWR0aCIsIm91dGVyIiwiY3JlYXRlRWxlbWVudCIsInZpc2liaWxpdHkiLCJtc092ZXJmbG93U3R5bGUiLCJ3aWR0aE5vU2Nyb2xsIiwib3ZlcmZsb3ciLCJpbm5lciIsIndpZHRoV2l0aFNjcm9sbCIsInBhcmVudE5vZGUiLCJyZW1vdmVDaGlsZCIsImdldFNjcm9sbEluZm8iLCJ3aXRoaW4iLCJvdmVyZmxvd1giLCJpc1dpbmRvdyIsImlzRG9jdW1lbnQiLCJvdmVyZmxvd1kiLCJoYXNPdmVyZmxvd1giLCJoYXNPdmVyZmxvd1kiLCJnZXRXaXRoaW5JbmZvIiwiaGFzT2Zmc2V0Iiwic2Nyb2xsTGVmdCIsInBhcnNlQ3NzIiwicHJvcGVydHkiLCJwYXJzZUludCIsIm9wdGlvbnMiLCJ0YXJnZXRXaWR0aCIsInRhcmdldEhlaWdodCIsInRhcmdldE9mZnNldCIsImJhc2VQb3NpdGlvbiIsImNvbGxpc2lvbiIsInNwbGl0Iiwic2Nyb2xsSW5mbyIsImZvckVhY2giLCJwb3MiLCJjb25jYXQiLCJob3Jpem9udGFsT2Zmc2V0IiwiZXhlYyIsInZlcnRpY2FsT2Zmc2V0IiwiYXRPZmZzZXQiLCJlbGVtV2lkdGgiLCJlbGVtSGVpZ2h0IiwibXlPZmZzZXQiLCJjb21wdXRlZFN0eWxlIiwiZ2V0Q29tcHV0ZWRTdHlsZSIsIm1hcmdpbkxlZnQiLCJtYXJnaW5Ub3AiLCJjb2xsaXNpb25XaWR0aCIsImNvbGxpc2lvbkhlaWdodCIsImNvbGxpc2lvblBvc2l0aW9uIiwiZGlyIiwiY29sbCIsInJ1bGVzIiwicmlnaHQiLCJob3Jpem9udGFsIiwidmVydGljYWwiLCJpbXBvcnRhbnQiLCJmaXQiLCJ3aXRoaW5PZmZzZXQiLCJvdXRlcldpZHRoIiwiY29sbGlzaW9uUG9zTGVmdCIsIm92ZXJMZWZ0Iiwib3ZlclJpZ2h0IiwibmV3T3ZlclJpZ2h0Iiwib3V0ZXJIZWlnaHQiLCJjb2xsaXNpb25Qb3NUb3AiLCJvdmVyVG9wIiwib3ZlckJvdHRvbSIsIm5ld092ZXJCb3R0b20iLCJmbGlwIiwib2Zmc2V0TGVmdCIsIm5ld092ZXJMZWZ0Iiwib2Zmc2V0VG9wIiwibmV3T3ZlclRvcCIsImZsaXBmaXQiLCJPcHRpb25Hcm91cCIsImxhYmVsIiwiU2VsZWN0IiwibXVsdGlwbGUiLCJmaWx0ZXJhYmxlIiwia2V5d29yZHMiLCJhbGxvd1VubWF0Y2giLCJfc2hvdyIsIl9vbkNsZWFyIiwic3RvcFByb3BhZ2F0aW9uIiwiX29uU2VsZWN0IiwiYXN5bmMiLCJ2YWx1ZXMiLCJzbGljZSIsIl9mb2N1c0lucHV0IiwiX3Jlc2V0U2VhcmNoIiwiX29uU2VhcmNoIiwidHJpbSIsIl9vbkNoYW5nZVNob3ciLCJjIiwiX29uQmx1ciIsIl9zZWxlY3RJbnB1dCIsIl9vbkZvY3VzIiwiX29uRm9jdXNvdXQiLCJfZGVsZXRlIiwiX3Bvc2l0aW9uIiwibWVudUVsZW1lbnQiLCJtZW51V2lkdGgiLCJfb25LZXlwcmVzcyIsIndyYXBwZXIiLCJjbGljayIsIk9wdGlvbiIsIkdyb3VwIiwiX3BsYWNlaG9sZGVyIiwiaGFzVmFsdWUiLCJpc0dyb3VwIiwibGFiZWxzIiwiaGFuZGxlUHJvcHMiLCJhY3RpdmUiLCJ2YWxpZCIsInRtcCIsInRvTG93ZXJDYXNlIiwidGV4dCIsIk9wdGlvbnNWTm9kZXMiLCJtYXAiLCJNZW51IiwiTGF5b3V0IiwiX29iaiIsImhhc093blByb3BlcnR5IiwiYXJndW1lbnRzIiwidGhlbWUiLCJwcm9jZXNzIiwiYnJvd3NlciIsImNoYW5nZVRoZW1lIiwibmV3VGhlbWUiLCJvbGRUaGVtZSIsImxpbmsiLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwiZ2V0SXRlbSIsInYiLCJvIiwiYm9yZGVyIiwiX3VwZGF0ZUJvcmRlciIsIm5hdiIsImNsYXNzTGlzdCIsImFkZCIsInRpdGxlIiwibmF2SW5kZXgiLCJfX2MiLCJfX24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUEsSUFBSUMsaUJBQU9DLEdBQVAsQ0FBV0MsSUFBWCxDQUFnQkgsQ0FBMUI7O0lBRXFCSSxRLFdBQ2hCSCxpQkFBT0ksUUFBUCxFOzs7Ozs7OzthQUNNQSxRLHFCQUFTQyxJLEVBQU07QUFDbEIsZUFBT0EsS0FBS0MsR0FBTCxDQUFTLFVBQVQsQ0FBUDtBQUNILEs7O3VCQUVEQyxRLHVCQUFXO0FBQ1AsZUFBTztBQUNIQyxxQkFBUyxPQUROO0FBRUhDLHNCQUFVO0FBRlAsU0FBUDtBQUlILEs7O3VCQUVEQyxLLG9CQUFRO0FBQUE7O0FBQ0osYUFBS0MsbUJBQUw7QUFDQSxhQUFLQyxFQUFMLENBQVEsbUJBQVIsRUFBNkIsWUFBTTtBQUMvQixtQkFBS0QsbUJBQUw7QUFDSCxTQUZELEVBRUcsRUFBQ0UsTUFBTSxJQUFQLEVBRkg7QUFHSCxLOzt1QkFFREYs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LENBQUNrRyxRQUFRLFNBQVIsSUFBcUIsVUFBU3BDLE1BQVQsRUFBaUI7QUFBQyxlQUFPLElBQVA7QUFBYSxLQUFyRCxNQUEyRHFDLFNBQVMsU0FBVCxJQUFzQixVQUFTckMsTUFBVCxFQUFpQjtBQUMxSyxZQUFJc0QsT0FBTyxJQUFYO0FBQ0EsZUFBT3ZCLE9BQU8sU0FBUCxJQUFvQkEsT0FBTyxTQUFQLEVBQWtCNkIsSUFBbEIsQ0FBdUIsSUFBdkIsRUFBNkIsWUFBVztBQUNuRSxtQkFBT3hCLFFBQVEsU0FBUixFQUFtQndCLElBQW5CLENBQXdCTixJQUF4QixFQUE4QnRELE1BQTlCLENBQVA7QUFDQyxTQUYwQixDQUFwQixHQUVGb0MsUUFBUSxTQUFSLEVBQW1Cd0IsSUFBbkIsQ0FBd0IsSUFBeEIsRUFBOEI1RCxNQUE5QixDQUZMO0FBR0MsS0FMdUUsS0FLbEVxQyxTQUFTLFNBQVQsRUFBb0J1QixJQUFwQixDQUF5QixJQUF6QixDQUxtRCxFQUtuQixpQkFMbUIsRUFLQSxJQUxBLEVBS00sVUFBU3VDLENBQVQsRUFBWTtBQUFDaEUsZ0JBQVEsU0FBUixJQUFxQmdFLENBQXJCO0FBQXVCLEtBTDFDLENBVG5DLENBQWYsRUFjZ0c3RyxXQUFXLFlBQVc7QUFBQyxZQUFJO0FBQUE7O0FBQUMsbUJBQU8sV0FBRSxnQkFBZ0IsSUFBbEIsU0FBeUJrRSxNQUFNdEcsU0FBL0IsSUFBMkNzRyxNQUFNdEcsU0FBakQsU0FBOEQsQ0FBOUQsQ0FBUDtBQUF3RSxTQUE3RSxDQUE4RSxPQUFNeUIsQ0FBTixFQUFTO0FBQUM2RCxlQUFHN0QsQ0FBSDtBQUFNO0FBQUMsS0FBM0csQ0FBNEdpRixJQUE1RyxDQUFpSCxJQUFqSCxDQUFYLENBZGhHLENBQVA7QUFlQyxDOztBQXRERDs7OztBQUF1QyIsImZpbGUiOiJjaHVuay9lYmVhZjNhMDQ0OTI1ODg1YWJlOS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBJbnRhY3QgZnJvbSAnaW50YWN0JztcbmltcG9ydCB7aXNUZXh0Vk5vZGUsIGZpbmRQYXJlbnRDb21wb25lbnR9IGZyb20gJy4uL3V0aWxzJztcbmltcG9ydCBEcm9wZG93bk1lbnUgZnJvbSAnLi9tZW51JztcblxuY29uc3QgaCA9IEludGFjdC5WZHQubWlzcy5oO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEcm9wZG93biBleHRlbmRzIEludGFjdCB7XG4gICAgQEludGFjdC50ZW1wbGF0ZSgpXG4gICAgc3RhdGljIHRlbXBsYXRlKGRhdGEpIHtcbiAgICAgICAgcmV0dXJuIGRhdGEuZ2V0KCdjaGlsZHJlbicpO1xuICAgIH1cblxuICAgIGRlZmF1bHRzKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdHJpZ2dlcjogJ2hvdmVyJyxcbiAgICAgICAgICAgIGRpc2FibGVkOiBmYWxzZSxcbiAgICAgICAgfVxuICAgIH1cblxuICAgIF9pbml0KCkge1xuICAgICAgICB0aGlzLl9zYXZlT3JpZ2luYWxFdmVudHMoKTtcbiAgICAgICAgdGhpcy5vbignJHJlY2VpdmU6Y2hpbGRyZW4nLCAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLl9zYXZlT3JpZ2luYWxFdmVudHMoKTtcbiAgICAgICAgfSwge2tlZXA6IHRydWV9KTtcbiAgICB9XG5cbiAgICBfc2F2ZU9yaWdpbmFsRXZlbnRzKCkge1xuICAgICAgICBsZXQge2NoaWxkcmVuLCB0cmlnZ2VyLCBjbGFzc05hbWUsIC4uLnJlc3R9ID0gdGhpcy5nZXQoKTtcbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoY2hpbGRyZW4pKSB7XG4gICAgICAgICAgICBjaGlsZHJlbiA9IGNoaWxkcmVuWzBdO1xuICAgICAgICB9IFxuICAgICAgICBpZiAoaXNUZXh0Vk5vZGUoY2hpbGRyZW4pKSB7XG4gICAgICAgICAgICBjaGlsZHJlbiA9IGgoJ3NwYW4nLCByZXN0LCBjaGlsZHJlbiwgY2xhc3NOYW1lKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIHNhdmUgdGhlIG9yaWdpbmFsIGV2ZW50XG4gICAgICAgIGNvbnN0IG9yaWdpblByb3BzID0gY2hpbGRyZW4ucHJvcHM7XG4gICAgICAgIGxldCBoYXNTYXZlZCA9IGZhbHNlO1xuICAgICAgICBpZiAoIW9yaWdpblByb3BzLl9oYXNTYXZlZCkge1xuICAgICAgICAgICAgY2hpbGRyZW4uX2V2Q2xpY2sgPSBvcmlnaW5Qcm9wc1snZXYtY2xpY2snXTtcbiAgICAgICAgICAgIGNoaWxkcmVuLl9ldk1vdXNlRW50ZXIgPSBvcmlnaW5Qcm9wc1snZXYtbW91c2VlbnRlciddO1xuICAgICAgICAgICAgY2hpbGRyZW4uX2V2TW91c2VMZWF2ZSA9IG9yaWdpblByb3BzWydldi1tb3VzZWxlYXZlJ107XG4gICAgICAgICAgICBoYXNTYXZlZCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgcHJvcHMgPSB7fTtcbiAgICAgICAgLy8gaWYgKHRyaWdnZXIgPT09ICdjbGljaycpIHtcbiAgICAgICAgICAgIHByb3BzWydldi1jbGljayddID0gdGhpcy5zaG93LmJpbmQodGhpcywgY2hpbGRyZW4uX2V2Q2xpY2spO1xuICAgICAgICAvLyB9IGVsc2Uge1xuICAgICAgICBpZiAodHJpZ2dlciA9PT0gJ2hvdmVyJykge1xuICAgICAgICAgICAgcHJvcHNbJ2V2LW1vdXNlZW50ZXInXSA9IHRoaXMuc2hvdy5iaW5kKHRoaXMsIGNoaWxkcmVuLl9ldk1vdXNlRW50ZXIpO1xuICAgICAgICAgICAgcHJvcHNbJ2V2LW1vdXNlbGVhdmUnXSA9IHRoaXMuaGlkZS5iaW5kKHRoaXMsIGNoaWxkcmVuLl9ldk1vdXNlTGVhdmUpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChoYXNTYXZlZCkge1xuICAgICAgICAgICAgcHJvcHMuX2hhc1NhdmVkID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBjaGlsZHJlbi5wcm9wcyA9IHsuLi5jaGlsZHJlbi5wcm9wcywgLi4ucHJvcHN9O1xuICAgICAgICB0aGlzLnNldCgnY2hpbGRyZW4nLCBjaGlsZHJlbiwge3NpbGVudDogdHJ1ZX0pO1xuICAgIH1cblxuICAgIF9tb3VudCgpIHtcbiAgICAgICAgLy8gdGhlIG5leHQgc2libGluZyBpcyBEcm9wZG93bk1lbnVcbiAgICAgICAgLy8gd2UgY2FuIG5vdCBnZXQgdGhlIG1lbnUgYnkgY2FsbCBnZXQoJ21lbnUnKSBkaXJlY3RseSxcbiAgICAgICAgLy8gYmVjYXVzZSB0aGUgdk5vZGUgbWF5IGJlIGNsb25lZFxuICAgICAgICBjb25zdCBzaWJsaW5ncyA9IHRoaXMucGFyZW50Vk5vZGUuY2hpbGRyZW47XG4gICAgICAgIGNvbnN0IGluZGV4ID0gc2libGluZ3MuaW5kZXhPZih0aGlzLnZOb2RlKTtcbiAgICAgICAgY29uc3QgbWVudSA9IHNpYmxpbmdzW2luZGV4ICsgMV07XG4gICAgICAgIG1lbnUuY2hpbGRyZW4uZHJvcGRvd24gPSB0aGlzO1xuICAgICAgICB0aGlzLm1lbnUgPSBtZW51O1xuICAgIH1cblxuICAgIHNob3coZm4sIGUsIGlzRm9jdXMpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBmbiA9PT0gJ2Z1bmN0aW9uJykgZm4oZSk7XG5cbiAgICAgICAgaWYgKHRoaXMuZ2V0KCdkaXNhYmxlZCcpKSByZXR1cm47XG5cbiAgICAgICAgY29uc3QgbWVudSA9IHRoaXMubWVudS5jaGlsZHJlbjtcbiAgICAgICAgbWVudS5zaG93KCk7XG5cbiAgICAgICAgaWYgKGlzRm9jdXMpIHtcbiAgICAgICAgICAgIG1lbnUuZm9jdXNJdGVtQnlJbmRleCgwKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGhpZGUoZm4sIGUsIGltbWVkaWF0ZWx5KSB7XG4gICAgICAgIGlmICh0eXBlb2YgZm4gPT09ICdmdW5jdGlvbicpIGZuKGUpO1xuXG4gICAgICAgIGlmICh0aGlzLmdldCgnZGlzYWJsZWQnKSkgcmV0dXJuO1xuXG4gICAgICAgIGNvbnN0IG1lbnUgPSB0aGlzLm1lbnUuY2hpbGRyZW47XG4gICAgICAgIG1lbnUuaGlkZShpbW1lZGlhdGVseSk7XG4gICAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9kcm9wZG93bi9kcm9wZG93bi5qcyIsImltcG9ydCBJbnRhY3QgZnJvbSAnaW50YWN0JztcbmltcG9ydCBEcm9wZG93biBmcm9tICcuL2Ryb3Bkb3duJztcbmltcG9ydCBEcm9wZG93bk1lbnUgZnJvbSAnLi9tZW51JztcbmltcG9ydCBEcm9wZG93bkl0ZW0gZnJvbSAnLi9pdGVtJztcbmltcG9ydCAnLi4vLi4vc3R5bGVzL2twYy5zdHlsJztcbmltcG9ydCAnLi9pbmRleC5zdHlsJztcblxuY29uc3QgaCA9IEludGFjdC5WZHQubWlzcy5oO1xuXG5mdW5jdGlvbiBXcmFwcGVyKHByb3BzLCBpblZ1ZSkge1xuICAgIGxldCB7XG4gICAgICAgIGNoaWxkcmVuLCBwb3NpdGlvbiwga2V5LFxuICAgICAgICByZWYsIC4uLnJlc3RcbiAgICB9ID0gcHJvcHM7XG5cbiAgICBjb25zdCBlbGVtZW50ID0gY2hpbGRyZW5bMF07XG4gICAgY29uc3QgbWVudSA9IGNoaWxkcmVuWzFdO1xuXG4gICAgbWVudS5wcm9wcyA9IHtcbiAgICAgICAgcG9zaXRpb24sIFxuICAgICAgICBrZXk6IGtleSA9PSBudWxsID8ga2V5IDogYCR7a2V5fS5tZW51YCxcbiAgICAgICAgLi4ucmVzdCxcbiAgICAgICAgLi4ubWVudS5wcm9wcyxcbiAgICB9O1xuXG4gICAgcmV0dXJuICFpblZ1ZSA/IFxuICAgICAgICBbXG4gICAgICAgICAgICBoKERyb3Bkb3duLCB7XG4gICAgICAgICAgICAgICAga2V5OiBrZXkgPT0gbnVsbCA/IGtleSA6IGAke2tleX0udHJpZ2dlcmAsXG4gICAgICAgICAgICAgICAgcmVmOiByZWYsXG4gICAgICAgICAgICAgICAgY2hpbGRyZW46IGVsZW1lbnQsIFxuICAgICAgICAgICAgICAgIC4uLnJlc3RcbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgbWVudVxuICAgICAgICBdIDpcbiAgICAgICAgaChEcm9wZG93blZ1ZVdyYXBwZXIsIHtcbiAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgICAgaChEcm9wZG93biwge1xuICAgICAgICAgICAgICAgICAgICBrZXk6IGtleSA9PSBudWxsID8ga2V5IDogYCR7a2V5fS50cmlnZ2VyYCxcbiAgICAgICAgICAgICAgICAgICAgcmVmOiByZWYsXG4gICAgICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBbZWxlbWVudF0sIFxuICAgICAgICAgICAgICAgICAgICAuLi5yZXN0XG4gICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgbWVudVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIC4uLnJlc3RcbiAgICAgICAgfSk7XG59XG5cbi8vIFZ1ZSBvbmx5IHN1cHBvcnQgcmV0dXJuIG9uZSBlbGVtZW50IGZyb20gZnVuY3Rpb25hbCBjb21wb25lbnQsXG4vLyBzbyB3ZSB3cmFwIHRoZW0uIFRoaXMgd2lsbCBsZWFkIHRvIGRhbWFnZSB0aGUgZG9tIHN0cnVjdGlvbixcbi8vIGJlY2F1c2Ugd2UgbXVzdCB3cmFwIHRoZW0gd2l0aCBhIGRpdlxuY29uc3QgX2NsYXNzTmFtZSA9IEludGFjdC5WZHQudXRpbHMuY2xhc3NOYW1lO1xuY2xhc3MgRHJvcGRvd25WdWVXcmFwcGVyIGV4dGVuZHMgSW50YWN0IHtcbiAgICB0ZW1wbGF0ZShkYXRhKSB7XG4gICAgICAgIGNvbnN0IHtjbGFzc05hbWUsIGNoaWxkcmVuLCAuLi5yZXN0fSA9IGRhdGEuZ2V0KCk7XG4gICAgICAgIHJldHVybiBoKCdkaXYnLCByZXN0LCBjaGlsZHJlbiwgX2NsYXNzTmFtZSh7XG4gICAgICAgICAgICAnay1kcm9wZG93bic6IHRydWUsXG4gICAgICAgICAgICBbY2xhc3NOYW1lXTogY2xhc3NOYW1lLFxuICAgICAgICB9KSk7XG4gICAgfVxufVxuXG5jb25zdCBfV3JhcHBlciA9IEludGFjdC5mdW5jdGlvbmFsV3JhcHBlciA/XG4gICAgSW50YWN0LmZ1bmN0aW9uYWxXcmFwcGVyKFdyYXBwZXIpIDogV3JhcHBlcjtcblxuZXhwb3J0IGRlZmF1bHQgX1dyYXBwZXI7XG5cbmV4cG9ydCB7X1dyYXBwZXIgYXMgRHJvcGRvd24sIERyb3Bkb3duTWVudSwgRHJvcGRvd25JdGVtfTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvZHJvcGRvd24vaW5kZXguanMiLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuICAgIGlmKG1vZHVsZS5ob3QpIHtcbiAgICAgIC8vIDE1Mjc3NTQzOTYzMjJcbiAgICAgIHZhciBjc3NSZWxvYWQgPSByZXF1aXJlKFwiIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtaG90LWxvYWRlci9ob3RNb2R1bGVSZXBsYWNlbWVudC5qc1wiKShtb2R1bGUuaWQsIHtcImZpbGVNYXBcIjpcIntmaWxlTmFtZX1cIn0pO1xuICAgICAgbW9kdWxlLmhvdC5kaXNwb3NlKGNzc1JlbG9hZCk7XG4gICAgICBtb2R1bGUuaG90LmFjY2VwdCh1bmRlZmluZWQsIGNzc1JlbG9hZCk7XG4gICAgfVxuICBcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2NvbXBvbmVudHMvZHJvcGRvd24vaW5kZXguc3R5bFxuLy8gbW9kdWxlIGlkID0gLi9jb21wb25lbnRzL2Ryb3Bkb3duL2luZGV4LnN0eWxcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIiwiaW1wb3J0IEludGFjdCBmcm9tICdpbnRhY3QnO1xuaW1wb3J0IHRlbXBsYXRlIGZyb20gJy4vaXRlbS52ZHQnO1xuaW1wb3J0IERyb3Bkb3duIGZyb20gJy4vZHJvcGRvd24nO1xuaW1wb3J0IERyb3Bkb3duTWVudSBmcm9tICcuL21lbnUnO1xuaW1wb3J0IHtmaW5kUGFyZW50Q29tcG9uZW50fSBmcm9tICcuLi91dGlscyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERyb3Bkb3duSXRlbSBleHRlbmRzIEludGFjdCB7XG4gICAgQEludGFjdC50ZW1wbGF0ZSgpXG4gICAgc3RhdGljIHRlbXBsYXRlID0gdGVtcGxhdGU7XG5cbiAgICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgICAgICBkaXNhYmxlZDogQm9vbGVhbixcbiAgICAgICAgaGlkZU9uU2VsZWN0OiBCb29sZWFuLFxuICAgIH07XG5cbiAgICBkZWZhdWx0cygpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGRpc2FibGVkOiBmYWxzZSxcbiAgICAgICAgICAgIGhpZGVPblNlbGVjdDogdHJ1ZSxcblxuICAgICAgICAgICAgX2lzRm9jdXM6IGZhbHNlLFxuICAgICAgICB9O1xuICAgIH1cblxuICAgIF9pbml0KCkge1xuICAgICAgICAvLyBpZiBzZWxlY3RlZCBoaWRlIGFsbCBkcm9wZG93biBtZW51XG4gICAgICAgIHRoaXMub24oJ3NlbGVjdCcsICgpID0+IHtcbiAgICAgICAgICAgIGlmICh0aGlzLmdldCgnaGlkZU9uU2VsZWN0JykpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBhbmNlc3RvciA9IHRoaXMuX2ZpbmRBbmNlc3RvckRyb3Bkb3duTWVudSgpO1xuICAgICAgICAgICAgICAgIGFuY2VzdG9yLmhpZGUodHJ1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIF9tb3VudCgpIHtcbiAgICAgICAgY29uc3QgcGFyZW50ID0gdGhpcy5wYXJlbnQgPSB0aGlzLl9maW5kQW5jZXN0b3JEcm9wZG93bk1lbnUodHJ1ZSk7XG4gICAgICAgIHBhcmVudC5pdGVtcy5wdXNoKHRoaXMpO1xuICAgIH1cblxuICAgIF9vbkNsaWNrKGUpIHtcbiAgICAgICAgaWYgKHRoaXMuZ2V0KCdkaXNhYmxlZCcpKSByZXR1cm47XG5cbiAgICAgICAgdGhpcy50cmlnZ2VyKCdjbGljaycsIGUpO1xuXG4gICAgICAgIC8vIGlzIG5vdCBhIHN1YiBkcm9wZG93biB0cmlnZ2VyXG4gICAgICAgIGlmICh0aGlzLnBhcmVudFZOb2RlLnRhZyAhPT0gRHJvcGRvd24pIHtcbiAgICAgICAgICAgIHRoaXMudHJpZ2dlcignc2VsZWN0JywgdGhpcywgZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBfb25Nb3VzZUVudGVyKGUpIHtcbiAgICAgICAgdGhpcy50cmlnZ2VyKCdtb3VzZWVudGVyJywgZSk7XG5cbiAgICAgICAgaWYgKHRoaXMuZ2V0KCdkaXNhYmxlZCcpKSByZXR1cm47XG5cbiAgICAgICAgdGhpcy5wYXJlbnQuZm9jdXNJdGVtKHRoaXMpO1xuICAgIH1cblxuICAgIF9vbk1vdXNlTGVhdmUoZSkge1xuICAgICAgICB0aGlzLnRyaWdnZXIoJ21vdXNlbGVhdmUnLCBlKTtcbiAgICAgICAgLy8gaWYgKHRoaXMuZ2V0KCdkaXNhYmxlZCcpKSByZXR1cm47XG4gICAgfVxuXG4gICAgc2VsZWN0KCkge1xuICAgICAgICAvLyBpcyBub3QgYSBzdWIgZHJvcGRvd24gdHJpZ2dlclxuICAgICAgICBjb25zdCBkcm9wZG93biA9IHRoaXMuX2lzU3ViTWVudSgpO1xuICAgICAgICBpZiAoIWRyb3Bkb3duKSB7XG4gICAgICAgICAgICB0aGlzLnRyaWdnZXIoJ3NlbGVjdCcsIHRoaXMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZHJvcGRvd24uc2hvdygpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZm9jdXMoKSB7XG4gICAgICAgIHRoaXMuc2V0KCdfaXNGb2N1cycsIHRydWUpO1xuXG4gICAgICAgIGNvbnN0IGVsUmVjdCA9IHRoaXMuZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgICAgY29uc3QgcEVsID0gdGhpcy5wYXJlbnQucmVmcy5tZW51LmVsZW1lbnQ7XG4gICAgICAgIGNvbnN0IHBFbFJlY3QgPSBwRWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgIGNvbnN0IGJvdHRvbU92ZXJmbG93RGlzdGFuY2UgPSBlbFJlY3QuYm90dG9tIC0gcEVsUmVjdC5ib3R0b207XG4gICAgICAgIGNvbnN0IHRvcE92ZXJmbG93RGlzdGFuY2UgPSBlbFJlY3QudG9wIC0gcEVsUmVjdC50b3A7XG4gICAgICAgIFxuICAgICAgICBpZiAoYm90dG9tT3ZlcmZsb3dEaXN0YW5jZSA+IDApIHtcbiAgICAgICAgICAgIHBFbC5zY3JvbGxUb3AgKz0gYm90dG9tT3ZlcmZsb3dEaXN0YW5jZTtcbiAgICAgICAgfSBlbHNlIGlmICh0b3BPdmVyZmxvd0Rpc3RhbmNlIDwgMCkge1xuICAgICAgICAgICAgcEVsLnNjcm9sbFRvcCArPSB0b3BPdmVyZmxvd0Rpc3RhbmNlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgdW5Gb2N1cygpIHtcbiAgICAgICAgdGhpcy5zZXQoJ19pc0ZvY3VzJywgZmFsc2UpO1xuXG4gICAgICAgIGNvbnN0IGRyb3Bkb3duID0gdGhpcy5faXNTdWJNZW51KCk7XG4gICAgICAgIGlmIChkcm9wZG93bikge1xuICAgICAgICAgICAgZHJvcGRvd24uaGlkZShudWxsLCBudWxsLCB0cnVlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHNob3dNZW51QW5kRm9jdXMoKSB7XG4gICAgICAgIGNvbnN0IGRyb3Bkb3duID0gdGhpcy5faXNTdWJNZW51KCk7XG4gICAgICAgIGlmIChkcm9wZG93bikge1xuICAgICAgICAgICAgZHJvcGRvd24uc2hvdyhudWxsLCBudWxsLCB0cnVlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGhpZGVNZW51KCkge1xuICAgICAgICBjb25zdCBkcm9wZG93biA9IHRoaXMuX2lzU3ViTWVudSgpO1xuICAgICAgICBpZiAoZHJvcGRvd24pIHtcbiAgICAgICAgICAgIGRyb3Bkb3duLmhpZGUobnVsbCwgbnVsbCwgdHJ1ZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBfaXNTdWJNZW51KCkge1xuICAgICAgICBpZiAodGhpcy5wYXJlbnRWTm9kZS50YWcgPT09IERyb3Bkb3duKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5wYXJlbnRWTm9kZS5jaGlsZHJlbjtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIF9maW5kQW5jZXN0b3JEcm9wZG93bk1lbnUoaXNGaXJzdCkge1xuICAgICAgICByZXR1cm4gZmluZFBhcmVudENvbXBvbmVudChEcm9wZG93bk1lbnUsIHRoaXMsIGlzRmlyc3QpO1xuICAgIH1cblxuICAgIF9kZXN0cm95KCkge1xuICAgICAgICBjb25zdCBpdGVtcyA9IHRoaXMucGFyZW50Lml0ZW1zO1xuICAgICAgICBpdGVtcy5zcGxpY2UoaXRlbXMuaW5kZXhPZih0aGlzKSwgMSk7XG4gICAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9kcm9wZG93bi9pdGVtLmpzIiwiXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihvYmosIF9WZHQsIGJsb2NrcywgJGNhbGxlZSkge1xuX1ZkdCB8fCAoX1ZkdCA9IFZkdCk7XG5vYmogfHwgKG9iaiA9IHt9KTtcbmJsb2NrcyB8fCAoYmxvY2tzID0ge30pO1xudmFyIGggPSBfVmR0Lm1pc3MuaCwgaGMgPSBfVmR0Lm1pc3MuaGMsIGh1ID0gX1ZkdC5taXNzLmh1LCB3aWRnZXRzID0gdGhpcyAmJiB0aGlzLndpZGdldHMgfHwge30sIF9ibG9ja3MgPSB7fSwgX19ibG9ja3MgPSB7fSxcbl9fdSA9IF9WZHQudXRpbHMsIGV4dGVuZCA9IF9fdS5leHRlbmQsIF9lID0gX191LmVycm9yLCBfY2xhc3NOYW1lID0gX191LmNsYXNzTmFtZSxcbl9fbyA9IF9fdS5PcHRpb25zLCBfZ2V0TW9kZWwgPSBfX28uZ2V0TW9kZWwsIF9zZXRNb2RlbCA9IF9fby5zZXRNb2RlbCxcbl9zZXRDaGVja2JveE1vZGVsID0gX191LnNldENoZWNrYm94TW9kZWwsIF9kZXRlY3RDaGVja2JveENoZWNrZWQgPSBfX3UuZGV0ZWN0Q2hlY2tib3hDaGVja2VkLFxuX3NldFNlbGVjdE1vZGVsID0gX191LnNldFNlbGVjdE1vZGVsLFxuc2VsZiA9IHRoaXMuZGF0YSwgJHRoaXMgPSB0aGlzLCBzY29wZSA9IG9iaiwgQW5pbWF0ZSA9IHNlbGYgJiYgc2VsZi5BbmltYXRlLCBwYXJlbnQgPSAoJGNhbGxlZSB8fCB7fSkuX3N1cGVyXG4vKiBpbXBvcnQge3Byb3h5RXZlbnR9IGZyb20gJy4uL3V0aWxzJzsgKi9cblxuY29uc3Qge2NoaWxkcmVuLCBkaXNhYmxlZCwgY2xhc3NOYW1lLCBfaXNGb2N1c30gPSBzZWxmLmdldCgpO1xuXG5jb25zdCBjbGFzc05hbWVPYmogPSB7XG4gICAgJ2staXRlbSc6IHRydWUsXG4gICAgJ2stZGlzYWJsZWQnOiBkaXNhYmxlZCxcbiAgICBbY2xhc3NOYW1lXTogY2xhc3NOYW1lLFxuICAgICdrLWhvdmVyJzogX2lzRm9jdXMsXG59XG5cbnJldHVybiBoKCdkaXYnLCB7J2V2LWNsaWNrJzogZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW3NlbGYuX29uQ2xpY2sgXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKSwgJ2V2LW1vdXNlZW50ZXInOiBmdW5jdGlvbigpIHt0cnkge3JldHVybiBbc2VsZi5fb25Nb3VzZUVudGVyIF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcyksICdldi1tb3VzZWxlYXZlJzogZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW3NlbGYuX29uTW91c2VMZWF2ZSBdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpfSwgZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW2NoaWxkcmVuIF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcyksIF9jbGFzc05hbWUoZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW2NsYXNzTmFtZU9iaiBdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpKSlcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL2Ryb3Bkb3duL2l0ZW0udmR0IiwiaW1wb3J0IEludGFjdCBmcm9tICdpbnRhY3QnO1xuaW1wb3J0IHRlbXBsYXRlIGZyb20gJy4vbWVudS52ZHQnO1xuaW1wb3J0IHBvc2l0aW9uIGZyb20gJy4uL21vdmVXcmFwcGVyL3Bvc2l0aW9uJztcbmltcG9ydCB7ZmluZFBhcmVudENvbXBvbmVudCwgZ2V0VHJhbnNpdGlvbn0gZnJvbSAnLi4vdXRpbHMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEcm9wZG93bk1lbnUgZXh0ZW5kcyBJbnRhY3Qge1xuICAgIEBJbnRhY3QudGVtcGxhdGUoKVxuICAgIHN0YXRpYyB0ZW1wbGF0ZSA9IHRlbXBsYXRlO1xuXG4gICAgZGVmYXVsdHMoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBzaG93OiBmYWxzZSxcbiAgICAgICAgICAgIHRyaWdnZXI6ICdob3ZlcicsXG4gICAgICAgICAgICBwb3NpdGlvbjoge30sXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiAnc2xpZGVkb3duJyxcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBfaW5pdCgpIHtcbiAgICAgICAgdGhpcy5zdWJEcm9wZG93bnMgPSBbXTtcbiAgICAgICAgdGhpcy5pdGVtcyA9IFtdO1xuICAgICAgICB0aGlzLmZvY3VzSW5kZXggPSAtMTtcbiAgICAgICAgdGhpcy5sb2NrZWQgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBfbW91bnQoKSB7XG4gICAgICAgIGNvbnN0IHBhcmVudCA9IHRoaXMuX2ZpbmRQYXJlbnREcm9wZG93bk1lbnUoKTtcbiAgICAgICAgaWYgKHBhcmVudCkgcGFyZW50LnN1YkRyb3Bkb3ducy5wdXNoKHRoaXMpO1xuXG4gICAgICAgIGlmICh0aGlzLmdldCgnc2hvdycpKSB7XG4gICAgICAgICAgICB0aGlzLl9hZGREb2N1bWVudEV2ZW50cygpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgX2ZpbmRQYXJlbnREcm9wZG93bk1lbnUoKSB7XG4gICAgICAgIHJldHVybiBmaW5kUGFyZW50Q29tcG9uZW50KERyb3Bkb3duTWVudSwgdGhpcywgdHJ1ZSk7XG4gICAgfVxuXG4gICAgc2hvdygpIHtcbiAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMudGltZXIpO1xuICAgICAgICB0aGlzLnNldCgnc2hvdycsIHRydWUpO1xuICAgICAgICBjb25zdCBwYXJlbnQgPSB0aGlzLl9maW5kUGFyZW50RHJvcGRvd25NZW51KCk7XG4gICAgICAgIGlmIChwYXJlbnQpIHtcbiAgICAgICAgICAgIHBhcmVudC5zaG93KCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBoaWRlKGltbWVkaWF0ZWx5KSB7XG4gICAgICAgIGlmICghaW1tZWRpYXRlbHkpIHtcbiAgICAgICAgICAgIHRoaXMudGltZXIgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldCgnc2hvdycsIGZhbHNlKTtcbiAgICAgICAgICAgIH0sIDIwMCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnNldCgnc2hvdycsIGZhbHNlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHRvZ2dsZSgpIHtcbiAgICAgICAgdGhpcy5zZXQoJ3Nob3cnLCAhdGhpcy5nZXQoJ3Nob3cnKSk7XG4gICAgfVxuXG4gICAgcG9zaXRpb24oKSB7XG4gICAgICAgIHBvc2l0aW9uKHRoaXMucmVmcy5tZW51LmVsZW1lbnQsIHtcbiAgICAgICAgICAgIG15OiAnY2VudGVyIHRvcCs1JywgXG4gICAgICAgICAgICBhdDogJ2NlbnRlciBib3R0b20nLCBcbiAgICAgICAgICAgIG9mOiB0aGlzLmRyb3Bkb3duLmVsZW1lbnQsXG4gICAgICAgICAgICB1c2luZzogKGZlZWRiYWNrKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXQoJ3RyYW5zaXRpb24nLCBnZXRUcmFuc2l0aW9uKGZlZWRiYWNrKSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgLi4udGhpcy5nZXQoJ3Bvc2l0aW9uJylcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgX29uU2hvdygpIHtcbiAgICAgICAgdGhpcy5mb2N1c0luZGV4ID0gLTE7XG4gICAgICAgIHRoaXMuX2FkZERvY3VtZW50RXZlbnRzKCk7XG4gICAgICAgIHRoaXMucG9zaXRpb24oKTtcbiAgICB9XG5cbiAgICBfYWRkRG9jdW1lbnRFdmVudHMoKSB7XG4gICAgICAgIGNvbnN0IHBhcmVudCA9IHRoaXMuX2ZpbmRQYXJlbnREcm9wZG93bk1lbnUoKTtcbiAgICAgICAgaWYgKCFwYXJlbnQpIHtcbiAgICAgICAgICAgIC8vIGlmICh0aGlzLmdldCgndHJpZ2dlcicpID09PSAnY2xpY2snKSB7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLl9vbkRvY3VtZW50Q2xpY2spO1xuICAgICAgICAgICAgLy8gfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcGFyZW50LmxvY2tlZCA9IHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgdGhpcy5fb25LZXlkb3duKTtcbiAgICB9XG5cbiAgICBfcmVtb3ZlRG9jdW1lbnRFdmVudHMoKSB7XG4gICAgICAgIGNvbnN0IHBhcmVudCA9IHRoaXMuX2ZpbmRQYXJlbnREcm9wZG93bk1lbnUoKTtcbiAgICAgICAgaWYgKCFwYXJlbnQpIHtcbiAgICAgICAgICAgIC8vIGlmICh0aGlzLmdldCgndHJpZ2dlcicpID09PSAnY2xpY2snKSB7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLl9vbkRvY3VtZW50Q2xpY2spO1xuICAgICAgICAgICAgLy8gfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcGFyZW50LmxvY2tlZCA9IGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIHRoaXMuX29uS2V5ZG93bik7XG4gICAgfVxuXG4gICAgX29uRG9jdW1lbnRDbGljayhlKSB7XG4gICAgICAgIGNvbnN0IHRhcmdldCA9IGUudGFyZ2V0O1xuICAgICAgICBjb25zdCBtZW51ID0gdGhpcy5yZWZzLm1lbnUuZWxlbWVudDtcblxuICAgICAgICAvLyBpcyBhIGRyb3Bkb3duIG1lbnVcbiAgICAgICAgaWYgKG1lbnUgPT09IHRhcmdldCB8fCBtZW51LmNvbnRhaW5zKHRhcmdldCkpIHJldHVybjtcbiAgICAgICAgLy8gaXMgY2xpY2sgb24gc3ViIG1lbnVcbiAgICAgICAgaWYgKHRoaXMuX2lzQ2xpY2tTdWJNZW51KHRhcmdldCwgdGhpcy5zdWJEcm9wZG93bnMpKSByZXR1cm47XG4gICAgICAgIC8vIGN1c3RvbSBmbGFnIHRvIGluZGljYXRlIHRoYXQgdGhlIGV2ZW50IGRvZXMgbm90IGxlYWQgdG8gY2xvc2UgbWVudVxuICAgICAgICBpZiAoZS5fZHJvcGRvd24pIHJldHVybjtcblxuICAgICAgICB0aGlzLmhpZGUodHJ1ZSk7XG4gICAgfVxuXG4gICAgX29uS2V5ZG93bihlKSB7XG4gICAgICAgIGlmICh0aGlzLmxvY2tlZCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHN3aXRjaCAoZS5rZXlDb2RlKSB7XG4gICAgICAgICAgICAvLyBkb3duXG4gICAgICAgICAgICBjYXNlIDQwOlxuICAgICAgICAgICAgICAgIHRoaXMuX2ZvY3VzTmV4dEl0ZW0oZSk7IFxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgLy8gdXBcbiAgICAgICAgICAgIGNhc2UgMzg6XG4gICAgICAgICAgICAgICAgdGhpcy5fZm9jdXNQcmV2SXRlbShlKTsgXG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAvLyByaWdodFxuICAgICAgICAgICAgY2FzZSAzOTpcbiAgICAgICAgICAgICAgICB0aGlzLl9zaG93U3ViTWVudShlKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIC8vIGxlZnRcbiAgICAgICAgICAgIGNhc2UgMzc6XG4gICAgICAgICAgICAgICAgdGhpcy5faGlkZVN1Yk1lbnUoZSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAvLyBlbnRlclxuICAgICAgICAgICAgY2FzZSAxMzpcbiAgICAgICAgICAgICAgICB0aGlzLl9zZWxlY3RJdGVtKGUpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgX2ZvY3VzTmV4dEl0ZW0oZSkge1xuICAgICAgICBjb25zdCBwYXJlbnQgPSB0aGlzLl9maW5kUGFyZW50RHJvcGRvd25NZW51KCk7XG4gICAgICAgIGlmIChwYXJlbnQgJiYgdGhpcy5mb2N1c0luZGV4IDwgMCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgdGhpcy5mb2N1c0l0ZW1CeUluZGV4KHRoaXMuZm9jdXNJbmRleCArIDEsICdkb3duJyk7XG4gICAgfVxuXG4gICAgX2ZvY3VzUHJldkl0ZW0oZSkge1xuICAgICAgICBjb25zdCBwYXJlbnQgPSB0aGlzLl9maW5kUGFyZW50RHJvcGRvd25NZW51KCk7XG4gICAgICAgIGlmIChwYXJlbnQgJiYgdGhpcy5mb2N1c0luZGV4IDwgMCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgdGhpcy5mb2N1c0l0ZW1CeUluZGV4KHRoaXMuZm9jdXNJbmRleCAtIDEsICd1cCcpO1xuICAgIH1cblxuICAgIGZvY3VzSXRlbUJ5SW5kZXgoaW5kZXgsIGRpcmVjdGlvbiA9ICdkb3duJykge1xuICAgICAgICBjb25zdCBpdGVtcyA9IHRoaXMuaXRlbXM7XG4gICAgICAgIGNvbnN0IG1heCA9IGl0ZW1zLmxlbmd0aCAtIDE7XG4gICAgICAgIGNvbnN0IG9sZEluZGV4ID0gdGhpcy5mb2N1c0luZGV4O1xuXG4gICAgICAgIGZ1bmN0aW9uIGZpeEluZGV4KGluZGV4KSB7XG4gICAgICAgICAgICBpZiAoaW5kZXggPiBtYXgpIHtcbiAgICAgICAgICAgICAgICBpbmRleCA9IDA7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGluZGV4IDwgMCkge1xuICAgICAgICAgICAgICAgIGluZGV4ID0gbWF4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGluZGV4O1xuICAgICAgICB9XG5cbiAgICAgICAgaW5kZXggPSBmaXhJbmRleChpbmRleCk7XG5cbiAgICAgICAgbGV0IGkgPSAwO1xuICAgICAgICB3aGlsZSAoaSA8PSBtYXggJiYgaXRlbXNbaW5kZXhdICYmIGl0ZW1zW2luZGV4XS5nZXQoJ2Rpc2FibGVkJykpIHtcbiAgICAgICAgICAgIGluZGV4ID0gZml4SW5kZXgoZGlyZWN0aW9uID09PSAnZG93bicgPyBpbmRleCArIDEgOiBpbmRleCAtIDEpO1xuICAgICAgICAgICAgaSsrO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gYWxsIGl0ZW1zIGFyZSBkaXNhYmxlZFxuICAgICAgICBpZiAoaSA+IG1heCkgcmV0dXJuO1xuXG4gICAgICAgIHRoaXMuZm9jdXNJbmRleCA9IGluZGV4O1xuXG4gICAgICAgIGlmIChvbGRJbmRleCA+IC0xICYmIGl0ZW1zW29sZEluZGV4XSkge1xuICAgICAgICAgICAgaXRlbXNbb2xkSW5kZXhdLnVuRm9jdXMoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGl0ZW1zW2luZGV4XS5mb2N1cygpO1xuICAgIH1cblxuICAgIF9zZWxlY3RJdGVtKGUpIHtcbiAgICAgICAgdGhpcy5fc2hvd1N1Yk1lbnUoZSk7XG4gICAgICAgIGlmICh0aGlzLmZvY3VzSW5kZXggPiAtMSkge1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgdGhpcy5pdGVtc1t0aGlzLmZvY3VzSW5kZXhdLnNlbGVjdCgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgX3Nob3dTdWJNZW51KGUpIHtcbiAgICAgICAgY29uc3QgcGFyZW50ID0gdGhpcy5fZmluZFBhcmVudERyb3Bkb3duTWVudSgpO1xuICAgICAgICBpZiAoIXBhcmVudCAmJiB0aGlzLmZvY3VzSW5kZXggPCAwKSByZXR1cm47XG5cbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBpZiAocGFyZW50ICYmIHRoaXMuZm9jdXNJbmRleCA8IDApIHtcbiAgICAgICAgICAgIHRoaXMuZm9jdXNJdGVtQnlJbmRleCgwKTtcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLmZvY3VzSW5kZXggPiAtMSkge1xuICAgICAgICAgICAgdGhpcy5pdGVtc1t0aGlzLmZvY3VzSW5kZXhdLnNob3dNZW51QW5kRm9jdXMoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIF9oaWRlU3ViTWVudShlKSB7XG4gICAgICAgIGlmICh0aGlzLmZvY3VzSW5kZXggPiAtMSkge1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgdGhpcy5pdGVtc1t0aGlzLmZvY3VzSW5kZXhdLmhpZGVNZW51KCk7XG5cbiAgICAgICAgICAgIGNvbnN0IHBhcmVudCA9IGZpbmRQYXJlbnRDb21wb25lbnQoRHJvcGRvd25NZW51LCB0aGlzLCB0cnVlKTtcbiAgICAgICAgICAgIGlmIChwYXJlbnQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmRyb3Bkb3duLmhpZGUobnVsbCwgbnVsbCwgdHJ1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmb2N1c0l0ZW0oaXRlbSkge1xuICAgICAgICBjb25zdCBpbmRleCA9IHRoaXMuaXRlbXMuaW5kZXhPZihpdGVtKTtcbiAgICAgICAgdGhpcy5mb2N1c0l0ZW1CeUluZGV4KGluZGV4KTtcbiAgICB9XG5cbiAgICBfaXNDbGlja1N1Yk1lbnUodGFyZ2V0LCBzdWJNZW51cykge1xuICAgICAgICBsZXQgcmV0ID0gZmFsc2U7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc3ViTWVudXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IHN1Yk1lbnUgPSBzdWJNZW51c1tpXS5yZWZzLm1lbnU7XG4gICAgICAgICAgICBpZiAoc3ViTWVudSkge1xuICAgICAgICAgICAgICAgIGlmICh0YXJnZXQgPT09IHN1Yk1lbnUuZWxlbWVudCB8fCBzdWJNZW51LmVsZW1lbnQuY29udGFpbnModGFyZ2V0KSkge1xuICAgICAgICAgICAgICAgICAgICByZXQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByZXQgPSB0aGlzLl9pc0NsaWNrU3ViTWVudSh0YXJnZXQsIHN1Yk1lbnVzW2ldLnN1YkRyb3Bkb3ducyk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChyZXQpIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmV0O1xuICAgIH1cblxuICAgIF9kZXN0cm95KCkge1xuICAgICAgICBjb25zdCBwYXJlbnQgPSB0aGlzLl9maW5kUGFyZW50RHJvcGRvd25NZW51KCk7XG4gICAgICAgIGlmIChwYXJlbnQpIHtcbiAgICAgICAgICAgIGNvbnN0IHN1YkRyb3Bkb3ducyA9IHBhcmVudC5zdWJEcm9wZG93bnM7XG4gICAgICAgICAgICBzdWJEcm9wZG93bnMuc3BsaWNlKHN1YkRyb3Bkb3ducy5pbmRleE9mKHRoaXMpLCAxKTtcbiAgICAgICAgfSBcbiAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMudGltZXIpO1xuICAgICAgICB0aGlzLl9yZW1vdmVEb2N1bWVudEV2ZW50cygpO1xuICAgIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvZHJvcGRvd24vbWVudS5qcyIsImltcG9ydCBNb3ZlV3JhcHBlciBmcm9tICcuLi9tb3ZlV3JhcHBlcic7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihvYmosIF9WZHQsIGJsb2NrcywgJGNhbGxlZSkge1xuX1ZkdCB8fCAoX1ZkdCA9IFZkdCk7XG5vYmogfHwgKG9iaiA9IHt9KTtcbmJsb2NrcyB8fCAoYmxvY2tzID0ge30pO1xudmFyIGggPSBfVmR0Lm1pc3MuaCwgaGMgPSBfVmR0Lm1pc3MuaGMsIGh1ID0gX1ZkdC5taXNzLmh1LCB3aWRnZXRzID0gdGhpcyAmJiB0aGlzLndpZGdldHMgfHwge30sIF9ibG9ja3MgPSB7fSwgX19ibG9ja3MgPSB7fSxcbl9fdSA9IF9WZHQudXRpbHMsIGV4dGVuZCA9IF9fdS5leHRlbmQsIF9lID0gX191LmVycm9yLCBfY2xhc3NOYW1lID0gX191LmNsYXNzTmFtZSxcbl9fbyA9IF9fdS5PcHRpb25zLCBfZ2V0TW9kZWwgPSBfX28uZ2V0TW9kZWwsIF9zZXRNb2RlbCA9IF9fby5zZXRNb2RlbCxcbl9zZXRDaGVja2JveE1vZGVsID0gX191LnNldENoZWNrYm94TW9kZWwsIF9kZXRlY3RDaGVja2JveENoZWNrZWQgPSBfX3UuZGV0ZWN0Q2hlY2tib3hDaGVja2VkLFxuX3NldFNlbGVjdE1vZGVsID0gX191LnNldFNlbGVjdE1vZGVsLFxuc2VsZiA9IHRoaXMuZGF0YSwgJHRoaXMgPSB0aGlzLCBzY29wZSA9IG9iaiwgQW5pbWF0ZSA9IHNlbGYgJiYgc2VsZi5BbmltYXRlLCBwYXJlbnQgPSAoJGNhbGxlZSB8fCB7fSkuX3N1cGVyXG5cblxuY29uc3Qge2NoaWxkcmVuLCBzaG93LCB0cmlnZ2VyLCBjbGFzc05hbWUsIHRyYW5zaXRpb259ID0gc2VsZi5nZXQoKTtcblxuY29uc3QgZXZlbnRzID0ge307XG4vLyBubyBtYXR0ZXIgd2hhdCB0aGUgdHJpZ2dlciBpcywgd2Ugc2hvdWxkIHNob3cgbWVudSB3aGVuIGVudGVyIGl0LlxuLy8gZm9yIHRoaXMgY2FzZTogaG92ZXIgdHJpZ2dlciBuZXN0cyBjbGljayB0cmlnZ2VyXG5ldmVudHNbJ2V2LW1vdXNlZW50ZXInXSA9IHNlbGYuc2hvdztcbmlmICh0cmlnZ2VyID09PSAnaG92ZXInKSB7XG4gICAgZXZlbnRzWydldi1tb3VzZWxlYXZlJ10gPSBzZWxmLmhpZGUuYmluZChzZWxmLCBmYWxzZSk7XG59XG5cbnJldHVybiBoKE1vdmVXcmFwcGVyLCB7J19wYXJlbnQnOiBmdW5jdGlvbigpIHt0cnkge3JldHVybiBbc2VsZiBdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpLCAnY2hpbGRyZW4nOiBmdW5jdGlvbigpIHt0cnkge3JldHVybiBbc2hvdyBdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpID8gaChBbmltYXRlLCB7J2NsYXNzTmFtZSc6IF9jbGFzc05hbWUoZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW3tcImstZHJvcGRvd24tbWVudVwiOiB0cnVlLCBbY2xhc3NOYW1lXTogY2xhc3NOYW1lfSBdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpKSwgJ2E6dHJhbnNpdGlvbic6IGZ1bmN0aW9uKCkge3RyeSB7cmV0dXJuIFt0cmFuc2l0aW9uIF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcyksIC4uLmZ1bmN0aW9uKCkge3RyeSB7cmV0dXJuIFtldmVudHMgXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKSwgJ2E6ZGVsYXlEZXN0cm95JzogZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW2ZhbHNlIF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcyksICdldi0kZGVzdHJveWVkJzogZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW3NlbGYuX3JlbW92ZURvY3VtZW50RXZlbnRzIF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcyksICdldi0kbW91bnRlZCc6IGZ1bmN0aW9uKCkge3RyeSB7cmV0dXJuIFtzZWxmLl9vblNob3cgXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKSwgJ2NoaWxkcmVuJzogZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW2NoaWxkcmVuIF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcyksICdfY29udGV4dCc6ICR0aGlzfSwgbnVsbCwgbnVsbCwgbnVsbCwgZnVuY3Rpb24oaSkge3dpZGdldHNbJ21lbnUnXSA9IGl9KSA6IHVuZGVmaW5lZCwgJ19jb250ZXh0JzogJHRoaXN9LCBudWxsLCBudWxsLCBudWxsLCBmdW5jdGlvbihpKSB7d2lkZ2V0c1snd3JhcHBlciddID0gaX0pXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9kcm9wZG93bi9tZW51LnZkdCIsImltcG9ydCBJbnRhY3QgZnJvbSAnaW50YWN0JztcbmltcG9ydCB0ZW1wbGF0ZSBmcm9tICcuL2luZGV4LnZkdCc7XG5pbXBvcnQgJy4uLy4uL3N0eWxlcy9rcGMuc3R5bCc7XG5pbXBvcnQgJy4vaW5kZXguc3R5bCc7XG5pbXBvcnQge3NlbGVjdElucHV0fSBmcm9tICcuLi91dGlscyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIElucHV0IGV4dGVuZHMgSW50YWN0IHtcbiAgICBASW50YWN0LnRlbXBsYXRlXG4gICAgc3RhdGljIHRlbXBsYXRlID0gdGVtcGxhdGU7XG5cbiAgICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgIHJlYWRvbmx5OiBCb29sZWFuLFxuICAgICAgICBjbGVhcmFibGU6IEJvb2xlYW4sXG4gICAgICAgIGRpc2FibGVkOiBCb29sZWFuLFxuICAgICAgICBmbHVpZDogQm9vbGVhbixcbiAgICB9O1xuXG4gICAgZGVmYXVsdHMoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB0eXBlOiAndGV4dCcsIC8vIHRleHQgfCB0ZXh0YXJlYVxuICAgICAgICAgICAgbmFtZTogdW5kZWZpbmVkLFxuICAgICAgICAgICAgdmFsdWU6IHVuZGVmaW5lZCxcbiAgICAgICAgICAgIGRlZmF1bHRWYWx1ZTogdW5kZWZpbmVkLFxuICAgICAgICAgICAgcGxhY2Vob2xkZXI6IHVuZGVmaW5lZCxcbiAgICAgICAgICAgIHJlYWRvbmx5OiBmYWxzZSxcbiAgICAgICAgICAgIGNsZWFyYWJsZTogZmFsc2UsXG4gICAgICAgICAgICBkaXNhYmxlZDogZmFsc2UsXG4gICAgICAgICAgICBzaXplOiAnZGVmYXVsdCcsXG4gICAgICAgICAgICByb3dzOiAyLFxuICAgICAgICAgICAgc3BlbGxjaGVjazogZmFsc2UsXG4gICAgICAgICAgICBhdXRvV2lkdGg6IGZhbHNlLFxuICAgICAgICAgICAgZmx1aWQ6IGZhbHNlLFxuICAgICAgICAgICAgd2lkdGg6IHVuZGVmaW5lZCxcbiAgICAgICAgICAgIHRhYmluZGV4OiB1bmRlZmluZWQsXG4gICAgICAgICAgICBhdXRvY29tcGxldGU6IHVuZGVmaW5lZCxcbiAgICAgICAgfVxuICAgIH1cblxuICAgIF9pbml0KCkge1xuICAgICAgICB0aGlzLm9uKCckY2hhbmdlZDp2YWx1ZScsIHRoaXMuX2FkanVzdFdpZHRoKTtcbiAgICAgICAgdGhpcy5vbignJGNoYW5nZWQ6cGxhY2Vob2xkZXInLCB0aGlzLl9hZGp1c3RXaWR0aCk7XG4gICAgfVxuXG4gICAgX21vdW50KCkge1xuICAgICAgICB0aGlzLl9hZGp1c3RXaWR0aCgpO1xuICAgIH1cblxuICAgIF9hZGp1c3RXaWR0aCgpIHtcbiAgICAgICAgaWYgKHRoaXMuZ2V0KCdhdXRvV2lkdGgnKSkge1xuICAgICAgICAgICAgY29uc3Qgd2lkdGggPSB0aGlzLnJlZnMuZmFrZS5vZmZzZXRXaWR0aCB8fCAxO1xuICAgICAgICAgICAgdGhpcy5yZWZzLmlucHV0LnN0eWxlLndpZHRoID0gYCR7d2lkdGggKyAxfXB4YDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNsZWFyKGUpIHtcbiAgICAgICAgdGhpcy5zZXQoJ3ZhbHVlJywgJycpO1xuICAgICAgICB0aGlzLmZvY3VzKCk7XG4gICAgICAgIHRoaXMudHJpZ2dlcignY2xlYXInLCBlKTtcbiAgICB9XG5cbiAgICBzZWxlY3QoKSB7XG4gICAgICAgIHNlbGVjdElucHV0KHRoaXMucmVmcy5pbnB1dCk7XG4gICAgfVxuXG4gICAgZm9jdXMoKSB7XG4gICAgICAgIHRoaXMucmVmcy5pbnB1dC5mb2N1cygpO1xuICAgIH1cblxuICAgIF9vbklucHV0KGUpIHtcbiAgICAgICAgdGhpcy5zZXQoJ3ZhbHVlJywgZS50YXJnZXQudmFsdWUpO1xuICAgICAgICB0aGlzLnRyaWdnZXIoJ2lucHV0JywgZSk7XG4gICAgfVxuXG4gICAgX3Byb3h5RXZlbnQobmFtZSwgZSkge1xuICAgICAgICB0aGlzLnRyaWdnZXIobmFtZSwgZSk7XG4gICAgfVxufVxuXG5leHBvcnQge0lucHV0fTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvaW5wdXQvaW5kZXguanMiLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuICAgIGlmKG1vZHVsZS5ob3QpIHtcbiAgICAgIC8vIDE1Mjc3NTQzOTYzMTNcbiAgICAgIHZhciBjc3NSZWxvYWQgPSByZXF1aXJlKFwiIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtaG90LWxvYWRlci9ob3RNb2R1bGVSZXBsYWNlbWVudC5qc1wiKShtb2R1bGUuaWQsIHtcImZpbGVNYXBcIjpcIntmaWxlTmFtZX1cIn0pO1xuICAgICAgbW9kdWxlLmhvdC5kaXNwb3NlKGNzc1JlbG9hZCk7XG4gICAgICBtb2R1bGUuaG90LmFjY2VwdCh1bmRlZmluZWQsIGNzc1JlbG9hZCk7XG4gICAgfVxuICBcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2NvbXBvbmVudHMvaW5wdXQvaW5kZXguc3R5bFxuLy8gbW9kdWxlIGlkID0gLi9jb21wb25lbnRzL2lucHV0L2luZGV4LnN0eWxcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIiwiaW1wb3J0IHthZGRTdHlsZX0gZnJvbSAnLi4vdXRpbHMnO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24ob2JqLCBfVmR0LCBibG9ja3MsICRjYWxsZWUpIHtcbl9WZHQgfHwgKF9WZHQgPSBWZHQpO1xub2JqIHx8IChvYmogPSB7fSk7XG5ibG9ja3MgfHwgKGJsb2NrcyA9IHt9KTtcbnZhciBoID0gX1ZkdC5taXNzLmgsIGhjID0gX1ZkdC5taXNzLmhjLCBodSA9IF9WZHQubWlzcy5odSwgd2lkZ2V0cyA9IHRoaXMgJiYgdGhpcy53aWRnZXRzIHx8IHt9LCBfYmxvY2tzID0ge30sIF9fYmxvY2tzID0ge30sXG5fX3UgPSBfVmR0LnV0aWxzLCBleHRlbmQgPSBfX3UuZXh0ZW5kLCBfZSA9IF9fdS5lcnJvciwgX2NsYXNzTmFtZSA9IF9fdS5jbGFzc05hbWUsXG5fX28gPSBfX3UuT3B0aW9ucywgX2dldE1vZGVsID0gX19vLmdldE1vZGVsLCBfc2V0TW9kZWwgPSBfX28uc2V0TW9kZWwsXG5fc2V0Q2hlY2tib3hNb2RlbCA9IF9fdS5zZXRDaGVja2JveE1vZGVsLCBfZGV0ZWN0Q2hlY2tib3hDaGVja2VkID0gX191LmRldGVjdENoZWNrYm94Q2hlY2tlZCxcbl9zZXRTZWxlY3RNb2RlbCA9IF9fdS5zZXRTZWxlY3RNb2RlbCxcbnNlbGYgPSB0aGlzLmRhdGEsICR0aGlzID0gdGhpcywgc2NvcGUgPSBvYmosIEFuaW1hdGUgPSBzZWxmICYmIHNlbGYuQW5pbWF0ZSwgcGFyZW50ID0gKCRjYWxsZWUgfHwge30pLl9zdXBlclxuXG5cbmNvbnN0IHtcbiAgICB0eXBlLCBuYW1lLCB2YWx1ZSwgcGxhY2Vob2xkZXIsIHRhYmluZGV4LFxuICAgIHJlYWRvbmx5LCBjbGVhcmFibGUsIGRpc2FibGVkLCBzaXplLCBcbiAgICByb3dzLCBzcGVsbGNoZWNrLCBkZWZhdWx0VmFsdWUsIHN0eWxlLFxuICAgIGNsYXNzTmFtZSwgYXV0b1dpZHRoLCBmbHVpZCwgd2lkdGgsIGF1dG9jb21wbGV0ZSxcbn0gPSBzZWxmLmdldCgpO1xuXG5jb25zdCBjbGFzc05hbWVPYmogPSB7XG4gICAgJ2staW5wdXQnOiB0cnVlLFxuICAgIFtgay0ke3NpemV9YF06IHNpemUgIT09ICdkZWZhdWx0JyxcbiAgICAnay1ncm91cCc6IGJsb2Nrcy5wcmVwZW5kIHx8IGJsb2Nrcy5hcHBlbmQsXG4gICAgJ2stZGlzYWJsZWQnOiBkaXNhYmxlZCxcbiAgICAnay13aXRoLXByZWZpeCc6IGJsb2Nrcy5wcmVmaXgsXG4gICAgJ2std2l0aC1zdWZmaXgnOiBibG9ja3Muc3VmZml4LFxuICAgICdrLWNsZWFyYWJsZSc6IGNsZWFyYWJsZSxcbiAgICAnay1hdXRvLXdpZHRoJzogYXV0b1dpZHRoLFxuICAgICdrLWZsdWlkJzogZmx1aWQsXG4gICAgW2NsYXNzTmFtZV06IGNsYXNzTmFtZSxcbn1cblxuY29uc3QgZXZlbnRzID0gW1xuICAgICdrZXlkb3duJywgJ2tleXVwJywgJ2NoYW5nZScsXG4gICAgJ2tleXByZXNzJywgJ2ZvY3VzJywgJ2JsdXInLCAvKiAnaW5wdXQnICovXG5dLnJlZHVjZSgobWVtbywgbmFtZSkgPT4ge1xuICAgIG1lbW9bYGV2LSR7bmFtZX1gXSA9IHNlbGYuX3Byb3h5RXZlbnQuYmluZChzZWxmLCBuYW1lKTtcbiAgICByZXR1cm4gbWVtbztcbn0sIHt9KTtcblxuY29uc3Qgd3JhcHBlckV2ZW50cyA9IFtcbiAgICAnY2xpY2snLCAnbW91c2VlbnRlcicsICdtb3VzZWxlYXZlJ1xuXS5yZWR1Y2UoKG1lbW8sIG5hbWUpID0+IHtcbiAgICBtZW1vW2Bldi0ke25hbWV9YF0gPSBzZWxmLl9wcm94eUV2ZW50LmJpbmQoc2VsZiwgbmFtZSk7XG4gICAgcmV0dXJuIG1lbW87XG59LCB7fSk7XG5cbnJldHVybiBoKCdkaXYnLCB7J3N0eWxlJzogZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW3dpZHRoICE9IG51bGwgPyBhZGRTdHlsZShzdHlsZSwge3dpZHRoOiBgJHt3aWR0aH1weGB9KSA6IHN0eWxlIF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcyksIC4uLmZ1bmN0aW9uKCkge3RyeSB7cmV0dXJuIFt3cmFwcGVyRXZlbnRzIF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcyl9LCBbZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW2Jsb2Nrcy5wcmVwZW5kIF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcykgPyBoKCdkaXYnLCBudWxsLCAoX2Jsb2Nrc1tcInByZXBlbmRcIl0gPSBmdW5jdGlvbihwYXJlbnQpIHtyZXR1cm4gbnVsbDt9KSAmJiAoX19ibG9ja3NbXCJwcmVwZW5kXCJdID0gZnVuY3Rpb24ocGFyZW50KSB7XG52YXIgc2VsZiA9IHRoaXM7XG5yZXR1cm4gYmxvY2tzW1wicHJlcGVuZFwiXSA/IGJsb2Nrc1tcInByZXBlbmRcIl0uY2FsbCh0aGlzLCBmdW5jdGlvbigpIHtcbnJldHVybiBfYmxvY2tzW1wicHJlcGVuZFwiXS5jYWxsKHNlbGYsIHBhcmVudCk7XG59KSA6IF9ibG9ja3NbXCJwcmVwZW5kXCJdLmNhbGwodGhpcywgcGFyZW50KTtcbn0pICYmIF9fYmxvY2tzW1wicHJlcGVuZFwiXS5jYWxsKHRoaXMpLCAnay1wcmVwZW5kJykgOiB1bmRlZmluZWQsIGgoJ2RpdicsIG51bGwsIFtmdW5jdGlvbigpIHt0cnkge3JldHVybiBbYmxvY2tzLnByZWZpeCBdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpID8gaCgnZGl2JywgbnVsbCwgKF9ibG9ja3NbXCJwcmVmaXhcIl0gPSBmdW5jdGlvbihwYXJlbnQpIHtyZXR1cm4gbnVsbDt9KSAmJiAoX19ibG9ja3NbXCJwcmVmaXhcIl0gPSBmdW5jdGlvbihwYXJlbnQpIHtcbnZhciBzZWxmID0gdGhpcztcbnJldHVybiBibG9ja3NbXCJwcmVmaXhcIl0gPyBibG9ja3NbXCJwcmVmaXhcIl0uY2FsbCh0aGlzLCBmdW5jdGlvbigpIHtcbnJldHVybiBfYmxvY2tzW1wicHJlZml4XCJdLmNhbGwoc2VsZiwgcGFyZW50KTtcbn0pIDogX2Jsb2Nrc1tcInByZWZpeFwiXS5jYWxsKHRoaXMsIHBhcmVudCk7XG59KSAmJiBfX2Jsb2Nrc1tcInByZWZpeFwiXS5jYWxsKHRoaXMpLCAnay1wcmVmaXgnKSA6IHVuZGVmaW5lZCwgZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW3R5cGUgIT09ICd0ZXh0YXJlYScgXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKSA/IGgoJ2lucHV0Jywgeyd0eXBlJzogZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW3R5cGUgXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKSwgJ25hbWUnOiBmdW5jdGlvbigpIHt0cnkge3JldHVybiBbbmFtZSBdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpLCAndmFsdWUnOiBmdW5jdGlvbigpIHt0cnkge3JldHVybiBbdmFsdWUgXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKSwgJ2V2LWlucHV0JzogZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW3NlbGYuX29uSW5wdXQgXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKSwgJ2RlZmF1bHRWYWx1ZSc6IGZ1bmN0aW9uKCkge3RyeSB7cmV0dXJuIFtkZWZhdWx0VmFsdWUgXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKSwgJ3JlYWRPbmx5JzogZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW3JlYWRvbmx5IF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcyksICdwbGFjZWhvbGRlcic6IGZ1bmN0aW9uKCkge3RyeSB7cmV0dXJuIFtwbGFjZWhvbGRlciBdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpLCAnZGlzYWJsZWQnOiBmdW5jdGlvbigpIHt0cnkge3JldHVybiBbZGlzYWJsZWQgXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKSwgJ3RhYmluZGV4JzogZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW3RhYmluZGV4IF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcyksICdhdXRvY29tcGxldGUnOiBmdW5jdGlvbigpIHt0cnkge3JldHVybiBbYXV0b2NvbXBsZXRlIF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcyksIC4uLmZ1bmN0aW9uKCkge3RyeSB7cmV0dXJuIFtldmVudHMgXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKX0sIG51bGwsICdrLWlubmVyJywgbnVsbCwgZnVuY3Rpb24oaSkge3dpZGdldHNbJ2lucHV0J10gPSBpfSkgOiBoKCd0ZXh0YXJlYScsIHsndmFsdWUnOiBmdW5jdGlvbigpIHt0cnkge3JldHVybiBbdmFsdWUgXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKSwgJ2V2LWlucHV0JzogZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW3NlbGYuX29uSW5wdXQgXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKSwgJ2RlZmF1bHRWYWx1ZSc6IGZ1bmN0aW9uKCkge3RyeSB7cmV0dXJuIFtkZWZhdWx0VmFsdWUgXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKSwgJ25hbWUnOiBmdW5jdGlvbigpIHt0cnkge3JldHVybiBbbmFtZSBdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpLCAncmVhZE9ubHknOiBmdW5jdGlvbigpIHt0cnkge3JldHVybiBbcmVhZG9ubHkgXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKSwgJ3BsYWNlaG9sZGVyJzogZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW3BsYWNlaG9sZGVyIF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcyksICdkaXNhYmxlZCc6IGZ1bmN0aW9uKCkge3RyeSB7cmV0dXJuIFtkaXNhYmxlZCBdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpLCAncm93cyc6IGZ1bmN0aW9uKCkge3RyeSB7cmV0dXJuIFtyb3dzIF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcyksICdzcGVsbGNoZWNrJzogZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW3NwZWxsY2hlY2sgXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKSwgJ3RhYmluZGV4JzogZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW3RhYmluZGV4IF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcyksIC4uLmZ1bmN0aW9uKCkge3RyeSB7cmV0dXJuIFtldmVudHMgXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKX0sIG51bGwsICdrLWlubmVyIGstdGV4dGFyZWEnLCBudWxsLCBmdW5jdGlvbihpKSB7d2lkZ2V0c1snaW5wdXQnXSA9IGl9KSwgZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW2Jsb2Nrcy5zdWZmaXggfHwgY2xlYXJhYmxlIF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcykgPyBoKCdkaXYnLCBudWxsLCBbZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW2NsZWFyYWJsZSBdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpID8gaCgnaScsIHsnZXYtY2xpY2snOiBmdW5jdGlvbigpIHt0cnkge3JldHVybiBbc2VsZi5jbGVhciBdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpfSwgbnVsbCwgX2NsYXNzTmFtZShmdW5jdGlvbigpIHt0cnkge3JldHVybiBbe1xuICAgICAgICAgICAgICAgICAgICBcImstY2xlYXIgay1pY29uIGlvbi1pb3MtY2xvc2VcIjogdHJ1ZSwgXG4gICAgICAgICAgICAgICAgICAgIFwiay1zaG93XCI6IHZhbHVlLFxuICAgICAgICAgICAgICAgIH0gXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKSkpIDogdW5kZWZpbmVkLCAoX2Jsb2Nrc1tcInN1ZmZpeFwiXSA9IGZ1bmN0aW9uKHBhcmVudCkge3JldHVybiBudWxsO30pICYmIChfX2Jsb2Nrc1tcInN1ZmZpeFwiXSA9IGZ1bmN0aW9uKHBhcmVudCkge1xudmFyIHNlbGYgPSB0aGlzO1xucmV0dXJuIGJsb2Nrc1tcInN1ZmZpeFwiXSA/IGJsb2Nrc1tcInN1ZmZpeFwiXS5jYWxsKHRoaXMsIGZ1bmN0aW9uKCkge1xucmV0dXJuIF9ibG9ja3NbXCJzdWZmaXhcIl0uY2FsbChzZWxmLCBwYXJlbnQpO1xufSkgOiBfYmxvY2tzW1wic3VmZml4XCJdLmNhbGwodGhpcywgcGFyZW50KTtcbn0pICYmIF9fYmxvY2tzW1wic3VmZml4XCJdLmNhbGwodGhpcyldLCAnay1zdWZmaXgnKSA6IHVuZGVmaW5lZCwgZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW2F1dG9XaWR0aCBdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpID8gaCgnZGl2JywgbnVsbCwgZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW3ZhbHVlID09IG51bGwgfHwgdmFsdWUgPT09ICcnID8gcGxhY2Vob2xkZXIgOiB2YWx1ZSBdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpLCAnay1mYWtlJywgbnVsbCwgZnVuY3Rpb24oaSkge3dpZGdldHNbJ2Zha2UnXSA9IGl9KSA6IHVuZGVmaW5lZF0sICdrLXdyYXBwZXInKSwgZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW2Jsb2Nrcy5hcHBlbmQgXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKSA/IGgoJ2RpdicsIG51bGwsIChfYmxvY2tzW1wiYXBwZW5kXCJdID0gZnVuY3Rpb24ocGFyZW50KSB7cmV0dXJuIG51bGw7fSkgJiYgKF9fYmxvY2tzW1wiYXBwZW5kXCJdID0gZnVuY3Rpb24ocGFyZW50KSB7XG52YXIgc2VsZiA9IHRoaXM7XG5yZXR1cm4gYmxvY2tzW1wiYXBwZW5kXCJdID8gYmxvY2tzW1wiYXBwZW5kXCJdLmNhbGwodGhpcywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gX2Jsb2Nrc1tcImFwcGVuZFwiXS5jYWxsKHNlbGYsIHBhcmVudCk7XG59KSA6IF9ibG9ja3NbXCJhcHBlbmRcIl0uY2FsbCh0aGlzLCBwYXJlbnQpO1xufSkgJiYgX19ibG9ja3NbXCJhcHBlbmRcIl0uY2FsbCh0aGlzKSwgJ2stYXBwZW5kJykgOiB1bmRlZmluZWRdLCBfY2xhc3NOYW1lKGZ1bmN0aW9uKCkge3RyeSB7cmV0dXJuIFtjbGFzc05hbWVPYmogXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKSkpXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9pbnB1dC9pbmRleC52ZHQiLCJpbXBvcnQgSW50YWN0IGZyb20gJ2ludGFjdCc7XG5pbXBvcnQgdGVtcGxhdGUgZnJvbSAnLi9pbmRleC52ZHQnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMaW5rIGV4dGVuZHMgSW50YWN0IHtcbiAgICBzdGF0aWMgaGlzdG9yeSA9IHVuZGVmaW5lZDtcblxuICAgIEBJbnRhY3QudGVtcGxhdGUoKVxuICAgIGdldCB0ZW1wbGF0ZSgpIHsgcmV0dXJuIHRlbXBsYXRlOyB9XG5cbiAgICBkZWZhdWx0cygpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGhyZWY6IHVuZGVmaW5lZCxcbiAgICAgICAgICAgIG5hbWU6IHVuZGVmaW5lZCxcbiAgICAgICAgICAgIGlzUmVwbGFjZTogZmFsc2UsXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB0byhlKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgdGhpcy50cmlnZ2VyKCdjbGljaycsIGUpO1xuICAgICAgICBjb25zdCBocmVmID0gdGhpcy5nZXQoJ2hyZWYnKTtcbiAgICAgICAgY29uc3QgbmFtZSA9IHRoaXMuZ2V0KCduYW1lJyk7XG4gICAgICAgIGNvbnN0IGhpc3RvcnkgPSBMaW5rLmhpc3Rvcnk7XG4gICAgICAgIGxldCB1cmw7XG4gICAgICAgIGlmIChocmVmICE9IG51bGwpIHtcbiAgICAgICAgICAgIHVybCA9IGhyZWY7XG4gICAgICAgIH0gZWxzZSBpZiAobmFtZSAhPSBudWxsKSB7XG4gICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShuYW1lKSkge1xuICAgICAgICAgICAgICAgIHVybCA9IExpbmsudXJsLmFwcGx5KExpbmsudXJsLCBuYW1lKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdXJsID0gTGluay51cmwobmFtZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHVybCkge1xuICAgICAgICAgICAgLy8gaWYgdGhlIGhyZWYgaXMgZXF1YWwgdG8gdGhlIGN1cnJlbnQgaHJlZiwgdGhlbiBkbyBub3RoaW5nXG4gICAgICAgICAgICBjb25zdCB7cGF0aG5hbWUsIHNlYXJjaH0gPSBoaXN0b3J5LmxvY2F0aW9uO1xuICAgICAgICAgICAgaWYgKHBhdGhuYW1lICsgc2VhcmNoID09PSB1cmwpIHJldHVybjtcblxuICAgICAgICAgICAgaWYgKHRoaXMuZ2V0KCdpc1JlcGxhY2UnKSkge1xuICAgICAgICAgICAgICAgIGhpc3RvcnkucmVwbGFjZSh1cmwpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBoaXN0b3J5LnB1c2godXJsKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuZXhwb3J0IHtMaW5rfTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvbGluay9pbmRleC5qcyIsIlxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24ob2JqLCBfVmR0LCBibG9ja3MsICRjYWxsZWUpIHtcbl9WZHQgfHwgKF9WZHQgPSBWZHQpO1xub2JqIHx8IChvYmogPSB7fSk7XG5ibG9ja3MgfHwgKGJsb2NrcyA9IHt9KTtcbnZhciBoID0gX1ZkdC5taXNzLmgsIGhjID0gX1ZkdC5taXNzLmhjLCBodSA9IF9WZHQubWlzcy5odSwgd2lkZ2V0cyA9IHRoaXMgJiYgdGhpcy53aWRnZXRzIHx8IHt9LCBfYmxvY2tzID0ge30sIF9fYmxvY2tzID0ge30sXG5fX3UgPSBfVmR0LnV0aWxzLCBleHRlbmQgPSBfX3UuZXh0ZW5kLCBfZSA9IF9fdS5lcnJvciwgX2NsYXNzTmFtZSA9IF9fdS5jbGFzc05hbWUsXG5fX28gPSBfX3UuT3B0aW9ucywgX2dldE1vZGVsID0gX19vLmdldE1vZGVsLCBfc2V0TW9kZWwgPSBfX28uc2V0TW9kZWwsXG5fc2V0Q2hlY2tib3hNb2RlbCA9IF9fdS5zZXRDaGVja2JveE1vZGVsLCBfZGV0ZWN0Q2hlY2tib3hDaGVja2VkID0gX191LmRldGVjdENoZWNrYm94Q2hlY2tlZCxcbl9zZXRTZWxlY3RNb2RlbCA9IF9fdS5zZXRTZWxlY3RNb2RlbCxcbnNlbGYgPSB0aGlzLmRhdGEsICR0aGlzID0gdGhpcywgc2NvcGUgPSBvYmosIEFuaW1hdGUgPSBzZWxmICYmIHNlbGYuQW5pbWF0ZSwgcGFyZW50ID0gKCRjYWxsZWUgfHwge30pLl9zdXBlclxuY29uc3Qge25hbWUsIGlzUmVwbGFjZSwgLi4ucmVzdH0gPSBzZWxmLmdldCgpO1xucmV0dXJuIGgoJ2EnLCB7Li4uZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW3Jlc3QgXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKSwgJ2V2LWNsaWNrJzogZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW3NlbGYudG8gXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKX0sIGZ1bmN0aW9uKCkge3RyeSB7cmV0dXJuIFtzZWxmLmdldCgnY2hpbGRyZW4nKSBdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpKVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvbGluay9pbmRleC52ZHQiLCJpbXBvcnQgSW50YWN0IGZyb20gJ2ludGFjdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1vdmVXcmFwcGVyIGV4dGVuZHMgSW50YWN0IHtcbiAgICB0ZW1wbGF0ZShzZWxmLCBWZHQpIHtcbiAgICAgICAgY29uc3QgY2hpbGRyZW4gPSBzZWxmLmdldCgnY2hpbGRyZW4nKTtcbiAgICAgICAgcmV0dXJuIGNoaWxkcmVuIHx8IFZkdC5taXNzLmhjKCdNb3ZlV3JhcHBlcicpO1xuICAgIH1cblxuICAgIGRlZmF1bHRzKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgYXV0b0Rlc3Ryb3k6IHRydWUsIFxuICAgICAgICAgICAgY29udGFpbmVyOiB1bmRlZmluZWQsXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBpbml0KC4uLmFyZ3MpIHtcbiAgICAgICAgc3VwZXIuaW5pdCguLi5hcmdzKTtcbiAgICAgICAgcmV0dXJuIHRoaXMucGxhY2Vob2xkZXIgPSBkb2N1bWVudC5jcmVhdGVDb21tZW50KFwicGxhY2Vob2xkZXJcIik7XG4gICAgfVxuXG4gICAgaHlkcmF0ZSguLi5hcmdzKSB7XG4gICAgICAgIHN1cGVyLmh5ZHJhdGUoLi4uYXJncyk7XG4gICAgICAgIHJldHVybiB0aGlzLnBsYWNlaG9sZGVyID0gZG9jdW1lbnQuY3JlYXRlQ29tbWVudCgncGxhY2Vob2xkZXInKTtcbiAgICB9XG5cbiAgICB1cGRhdGUobGFzdFZOb2RlLCBuZXh0Vk5vZGUpIHtcbiAgICAgICAgc3VwZXIudXBkYXRlKGxhc3RWTm9kZSwgbmV4dFZOb2RlKTtcbiAgICAgICAgcmV0dXJuIHRoaXMucGxhY2Vob2xkZXI7XG4gICAgfVxuXG4gICAgZGVzdHJveSguLi5hcmdzKSB7XG4gICAgICAgIGlmICh0aGlzLmdldCgnYXV0b0Rlc3Ryb3knKSkge1xuICAgICAgICAgICAgdGhpcy5fJGRlc3Ryb3koLi4uYXJncyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBcbiAgICAvKipcbiAgICAgKiBAYnJpZWYgb3ZlcnJpZGUgc3VwZXIgZGVzdHJveSBcbiAgICAgKlxuICAgICAqIE1vdmVXcmFwZXIgY29tcG9uZW50IGhhcyBjaGFuZ2VkIHRoZSBkb20gc3RydWN0aW9uLlxuICAgICAqIEl0IGlzIGFsd2F5cyB0aGUgdG9wIGxldmVsIGRvbSwgc28gd2Ugc2hvdWxkIFxuICAgICAqIHJlbW92ZSBpdCBmcm9tIHBhcmVudCBkb20uIEJ5IHBhc3NpbmcgdGhlIGNvbnRhaW5lclxuICAgICAqIHRvIHJlbW92ZSBmdW5jdGlvbiBjYW4gZG8gdGhpcy4gV2UgY2FuJ3QgcmVtb3ZlIGl0XG4gICAgICogZGlyZWN0bHkgYnkgY2FsbGluZyByZW1vdmVDaGlsZCBtZXRob2QsIGJlYWNhdXNlIGl0XG4gICAgICogbWF5YmUgaGF2ZSBsZWF2ZSBhbmltYXRpb24uXG4gICAgICpcbiAgICAgKiBAcGFyYW0gLi4uYXJnc1xuICAgICAqL1xuICAgIF8kZGVzdHJveShsYXN0Vk5vZGUsIG5leHRWTm9kZSkge1xuICAgICAgICAvLyBpZiAodGhpcy5kZXN0cm95ZWQpIHtcbiAgICAgICAgICAgIC8vIHJldHVybiBjb25zb2xlLndhcm4oJ2Rlc3Ryb3llZCBtdWx0aXBsZSB0aW1lcycpO1xuICAgICAgICAvLyB9XG4gICAgICAgIGlmICh0aGlzLnJlbmRlcmVkICYmIFxuICAgICAgICAgICAgKFxuICAgICAgICAgICAgICAgICFuZXh0Vk5vZGUgfHxcbiAgICAgICAgICAgICAgICAhKG5leHRWTm9kZS50eXBlICYgSW50YWN0LlZkdC5taXNzLlR5cGVzLkNvbXBvbmVudENsYXNzT3JJbnN0YW5jZSkgfHxcbiAgICAgICAgICAgICAgICBuZXh0Vk5vZGUua2V5ICE9PSBsYXN0Vk5vZGUua2V5XG4gICAgICAgICAgICApXG4gICAgICAgICkge1xuICAgICAgICAgICAgSW50YWN0LlZkdC5taXNzLnJlbW92ZSh0aGlzLnZkdC52Tm9kZSwgdGhpcy5jb250YWluZXIpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX2Rlc3Ryb3kobGFzdFZOb2RlLCBuZXh0Vk5vZGUpO1xuICAgICAgICB0aGlzLmRlc3Ryb3llZCA9IHRydWU7XG4gICAgICAgIHRoaXMudHJpZ2dlcignJGRlc3Ryb3llZCcsIHRoaXMpO1xuICAgICAgICB0aGlzLm9mZigpO1xuICAgIH1cblxuICAgIF9tb3VudChsYXN0Vk5vZGUsIG5leHRWTm9kZSkge1xuICAgICAgICBjb25zdCBjb250YWluZXIgPSB0aGlzLmdldCgnY29udGFpbmVyJyk7XG4gICAgICAgIGlmIChjb250YWluZXIpIHtcbiAgICAgICAgICAgIHRoaXMuY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcihjb250YWluZXIpO1xuICAgICAgICB9XG4gICAgICAgIGlmICghdGhpcy5jb250YWluZXIpIHtcbiAgICAgICAgICAgIHRoaXMuY29udGFpbmVyID0gZG9jdW1lbnQuYm9keTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLmVsZW1lbnQpO1xuICAgIH1cbn1cblxuZXhwb3J0IHtNb3ZlV3JhcHBlcn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL21vdmVXcmFwcGVyL2luZGV4LmpzIiwiY29uc3QgbWF4ID0gTWF0aC5tYXg7XG5jb25zdCBhYnMgPSBNYXRoLmFicztcbmNvbnN0IHJIb3Jpem9udGFsID0gL2xlZnR8Y2VudGVyfHJpZ2h0LztcbmNvbnN0IHJWZXJ0aWNhbCA9IC90b3B8Y2VudGVyfGJvdHRvbS87XG5jb25zdCByT2Zmc2V0ID0gL1tcXCtcXC1dXFxkKyhcXC5bXFxkXSspPyU/LztcbmNvbnN0IHJQb3NpdGlvbiA9IC9eXFx3Ky87XG5jb25zdCByUGVyY2VudCA9IC8lJC87XG5cbmZ1bmN0aW9uIGdldERpbWVuc2lvbnMoZWxlbSkge1xuICAgIGlmIChlbGVtLm5vZGVUeXBlID09PSA5KSB7XG4gICAgICAgIC8vIGRvY3VtZW50XG4gICAgICAgIGNvbnN0IHt3aWR0aCwgaGVpZ2h0fSA9IGdldERvY3VtZW50T3JXaW5kb3dSZWN0KGVsZW0pO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgd2lkdGgsXG4gICAgICAgICAgICBoZWlnaHQsXG4gICAgICAgICAgICBvZmZzZXQ6IHtcbiAgICAgICAgICAgICAgICB0b3A6IDAsXG4gICAgICAgICAgICAgICAgbGVmdDogMFxuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgIH0gZWxzZSBpZiAoZWxlbSA9PT0gd2luZG93KSB7XG4gICAgICAgIGNvbnN0IHt3aWR0aCwgaGVpZ2h0fSA9IGdldERvY3VtZW50T3JXaW5kb3dSZWN0KGVsZW0pO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgd2lkdGgsXG4gICAgICAgICAgICBoZWlnaHQsXG4gICAgICAgICAgICBvZmZzZXQ6IHtcbiAgICAgICAgICAgICAgICB0b3A6IGVsZW0ucGFnZVlPZmZzZXQsXG4gICAgICAgICAgICAgICAgbGVmdDogZWxlbS5wYWdlWE9mZnNldCxcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICB9IGVsc2UgaWYgKGVsZW0ucHJldmVudERlZmF1bHQpIHtcbiAgICAgICAgLy8gZXZlbnRcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHdpZHRoOiAwLFxuICAgICAgICAgICAgaGVpZ2h0OiAwLFxuICAgICAgICAgICAgb2Zmc2V0OiB7XG4gICAgICAgICAgICAgICAgdG9wOiBlbGVtLnBhZ2VZLFxuICAgICAgICAgICAgICAgIGxlZnQ6IGVsZW0ucGFnZVhcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICB9XG4gICAgLy8gZG9tXG4gICAgY29uc3QgcmVjdCA9IGVsZW0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgd2lkdGg6IHJlY3Qud2lkdGgsXG4gICAgICAgIGhlaWdodDogcmVjdC5oZWlnaHQsXG4gICAgICAgIG9mZnNldDoge1xuICAgICAgICAgICAgdG9wOiByZWN0LnRvcCArIHdpbmRvdy5wYWdlWU9mZnNldCxcbiAgICAgICAgICAgIGxlZnQ6IHJlY3QubGVmdCArIHdpbmRvdy5wYWdlWE9mZnNldFxuICAgICAgICB9XG4gICAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldERvY3VtZW50T3JXaW5kb3dSZWN0KGVsZW0pIHtcbiAgICBpZiAoZWxlbSA9PT0gd2luZG93KSB7XG4gICAgICAgIGNvbnN0IGQgPSBlbGVtLmRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHdpZHRoOiBkLmNsaWVudFdpZHRoLFxuICAgICAgICAgICAgaGVpZ2h0OiBkLmNsaWVudEhlaWdodCxcbiAgICAgICAgfTtcbiAgICB9XG4gICAgY29uc3QgZCA9IGVsZW0uZG9jdW1lbnRFbGVtZW50O1xuICAgIGNvbnN0IGIgPSBlbGVtLmJvZHk7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgd2lkdGg6IG1heChcbiAgICAgICAgICAgIGIuc2Nyb2xsV2lkdGgsIGQuc2Nyb2xsV2lkdGgsXG4gICAgICAgICAgICBiLm9mZnNldFdpZHRoLCBkLm9mZnNldFdpZHRoLFxuICAgICAgICAgICAgZC5jbGllbnRXaWR0aFxuICAgICAgICApLFxuICAgICAgICBoZWlnaHQ6IG1heChcbiAgICAgICAgICAgIGIuc2Nyb2xsSGVpZ2h0LCBkLnNjcm9sbEhlaWdodCxcbiAgICAgICAgICAgIGIub2Zmc2V0SGVpZ2h0LCBkLm9mZnNldEhlaWdodCxcbiAgICAgICAgICAgIGQuY2xpZW50SGVpZ2h0XG4gICAgICAgIClcbiAgICB9O1xufVxuXG5mdW5jdGlvbiBnZXRPZmZzZXRzKG9mZnNldHMsIHdpZHRoLCBoZWlnaHQpIHtcbiAgICByZXR1cm4gW1xuICAgICAgICBwYXJzZUZsb2F0KG9mZnNldHNbMF0pICogKHJQZXJjZW50LnRlc3Qob2Zmc2V0c1swXSkgPyB3aWR0aCAvIDEwMCA6IDEpLFxuICAgICAgICBwYXJzZUZsb2F0KG9mZnNldHNbMV0pICogKHJQZXJjZW50LnRlc3Qob2Zmc2V0c1sxXSkgPyBoZWlnaHQgLyAxMDAgOiAxKSxcbiAgICBdO1xufVxuXG4vLyByZWZlcmVuY2U6IGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvMTMzODI1MTYvZ2V0dGluZy1zY3JvbGwtYmFyLXdpZHRoLXVzaW5nLWphdmFzY3JpcHRcbmxldCBfc2Nyb2xsQmFyV2lkdGg7XG5leHBvcnQgZnVuY3Rpb24gc2Nyb2xsYmFyV2lkdGgoKSB7XG4gICAgaWYgKF9zY3JvbGxCYXJXaWR0aCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHJldHVybiBfc2Nyb2xsQmFyV2lkdGg7XG4gICAgfVxuXG4gICAgdmFyIG91dGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBvdXRlci5zdHlsZS52aXNpYmlsaXR5ID0gXCJoaWRkZW5cIjtcbiAgICBvdXRlci5zdHlsZS53aWR0aCA9IFwiMTAwcHhcIjtcbiAgICBvdXRlci5zdHlsZS5tc092ZXJmbG93U3R5bGUgPSBcInNjcm9sbGJhclwiOyAvLyBuZWVkZWQgZm9yIFdpbkpTIGFwcHNcblxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQob3V0ZXIpO1xuXG4gICAgdmFyIHdpZHRoTm9TY3JvbGwgPSBvdXRlci5vZmZzZXRXaWR0aDtcbiAgICAvLyBmb3JjZSBzY3JvbGxiYXJzXG4gICAgb3V0ZXIuc3R5bGUub3ZlcmZsb3cgPSBcInNjcm9sbFwiO1xuXG4gICAgLy8gYWRkIGlubmVyZGl2XG4gICAgdmFyIGlubmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBpbm5lci5zdHlsZS53aWR0aCA9IFwiMTAwJVwiO1xuICAgIG91dGVyLmFwcGVuZENoaWxkKGlubmVyKTtcblxuICAgIHZhciB3aWR0aFdpdGhTY3JvbGwgPSBpbm5lci5vZmZzZXRXaWR0aDtcblxuICAgIC8vIHJlbW92ZSBkaXZzXG4gICAgb3V0ZXIucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChvdXRlcik7XG5cbiAgICByZXR1cm4gKF9zY3JvbGxCYXJXaWR0aCA9IHdpZHRoTm9TY3JvbGwgLSB3aWR0aFdpdGhTY3JvbGwpO1xufVxuXG5mdW5jdGlvbiBnZXRTY3JvbGxJbmZvKHdpdGhpbikge1xuICAgIGNvbnN0IG92ZXJmbG93WCA9IHdpdGhpbi5pc1dpbmRvdyB8fCB3aXRoaW4uaXNEb2N1bWVudCA/IFxuICAgICAgICAnJyA6IHdpdGhpbi5lbGVtZW50LnN0eWxlLm92ZXJmbG93WDtcbiAgICBjb25zdCBvdmVyZmxvd1kgPSB3aXRoaW4uaXNXaW5kb3cgfHwgd2l0aGluLmlzRG9jdW1lbnQgPyBcbiAgICAgICAgJycgOiB3aXRoaW4uZWxlbWVudC5zdHlsZS5vdmVyZmxvd1k7XG4gICAgY29uc3QgaGFzT3ZlcmZsb3dYID0gb3ZlcmZsb3dYID09PSAnc2Nyb2xsJyB8fCBcbiAgICAgICAgKG92ZXJmbG93WCA9PT0gJ2F1dG8nICYmIHdpdGhpbi53aWR0aCA8IHdpdGhpbi5lbGVtZW50LnNjcm9sbFdpZHRoKTtcbiAgICBjb25zdCBoYXNPdmVyZmxvd1kgPSBvdmVyZmxvd1kgPT09ICdzY3JvbGwnIHx8IFxuICAgICAgICAob3ZlcmZsb3dZID09PSAnYXV0bycgJiYgd2l0aGluLmhlaWdodCA8IHdpdGhpbi5lbGVtZW50LnNjcm9sbEhlaWdodCk7XG4gICAgXG4gICAgcmV0dXJuIHtcbiAgICAgICAgd2lkdGg6IGhhc092ZXJmbG93WSA/IHNjcm9sbGJhcldpZHRoKCkgOiAwLFxuICAgICAgICBoZWlnaHQ6IGhhc092ZXJmbG93WCA/IHNjcm9sbGJhcldpZHRoKCkgOiAwLFxuICAgIH07XG59XG5cbmZ1bmN0aW9uIGdldFdpdGhpbkluZm8oZWxlbWVudCkge1xuICAgIGVsZW1lbnQgfHwgKGVsZW1lbnQgPSB3aW5kb3cpO1xuICAgIGNvbnN0IGlzV2luZG93ID0gZWxlbWVudCA9PT0gd2luZG93O1xuICAgIGNvbnN0IGlzRG9jdW1lbnQgPSBlbGVtZW50Lm5vZGVUeXBlID09PSA5O1xuICAgIGNvbnN0IGhhc09mZnNldCA9ICFpc1dpbmRvdyAmJiAhaXNEb2N1bWVudDtcblxuICAgIGNvbnN0IHJldCA9IHtlbGVtZW50LCBpc1dpbmRvdywgaXNEb2N1bWVudH07XG4gICAgaWYgKGhhc09mZnNldCkge1xuICAgICAgICBjb25zdCByZWN0ID0gZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgICAgcmV0Lm9mZnNldCA9IHtcbiAgICAgICAgICAgIHRvcDogcmVjdC50b3AgKyB3aW5kb3cucGFnZVlPZmZzZXQsXG4gICAgICAgICAgICBsZWZ0OiByZWN0LmxlZnQgKyB3aW5kb3cucGFnZVhPZmZzZXQsXG4gICAgICAgIH07XG4gICAgICAgIHJldC53aWR0aCA9IHJlY3Qud2lkdGg7XG4gICAgICAgIHJldC5oZWlnaHQgPSByZWN0LmhlaWdodDtcbiAgICAgICAgcmV0LnNjcm9sbExlZnQgPSBlbGVtZW50LnNjcm9sbExlZnQ7XG4gICAgICAgIHJldC5zY3JvbGxUb3AgPSBlbGVtZW50LnNjcm9sbFRvcDtcbiAgICB9IGVsc2Uge1xuICAgICAgICByZXQub2Zmc2V0ID0ge3RvcDogMCwgbGVmdDogMH07XG4gICAgICAgIGNvbnN0IHJlY3QgPSBnZXREb2N1bWVudE9yV2luZG93UmVjdChlbGVtZW50KTtcbiAgICAgICAgcmV0LndpZHRoID0gcmVjdC53aWR0aDtcbiAgICAgICAgcmV0LmhlaWdodCA9IHJlY3QuaGVpZ2h0O1xuICAgICAgICByZXQuc2Nyb2xsTGVmdCA9IHdpbmRvdy5wYWdlWE9mZnNldDtcbiAgICAgICAgcmV0LnNjcm9sbFRvcCA9IHdpbmRvdy5wYWdlWU9mZnNldDtcbiAgICB9XG5cbiAgICByZXR1cm4gcmV0O1xufVxuXG5mdW5jdGlvbiBwYXJzZUNzcyhzdHlsZSwgcHJvcGVydHkpIHtcbiAgICByZXR1cm4gcGFyc2VJbnQoc3R5bGVbcHJvcGVydHldLCAxMCkgfHwgMDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcG9zaXRpb24oZWxlbSwgb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSBPYmplY3QuYXNzaWduKHt9LCBvcHRpb25zKTtcblxuICAgIGNvbnN0IHRhcmdldCA9IG9wdGlvbnMub2YgfHwgd2luZG93O1xuICAgIGlmICh0YXJnZXQucHJldmVudERlZmF1bHQpIHtcbiAgICAgICAgb3B0aW9ucy5hdCA9IFwibGVmdCB0b3BcIjtcbiAgICB9XG4gICAgY29uc3Qge1xuICAgICAgICB3aWR0aDogdGFyZ2V0V2lkdGgsXG4gICAgICAgIGhlaWdodDogdGFyZ2V0SGVpZ2h0LCBcbiAgICAgICAgb2Zmc2V0OiB0YXJnZXRPZmZzZXRcbiAgICB9ID0gZ2V0RGltZW5zaW9ucyh0YXJnZXQpO1xuICAgIGNvbnN0IGJhc2VQb3NpdGlvbiA9IE9iamVjdC5hc3NpZ24oe30sIHRhcmdldE9mZnNldCk7XG4gICAgY29uc3QgY29sbGlzaW9uID0gKG9wdGlvbnMuY29sbGlzaW9uIHx8ICdmbGlwJykuc3BsaXQoJyAnKTtcbiAgICBjb25zdCBvZmZzZXRzID0ge307XG4gICAgY29uc3Qgd2l0aGluID0gZ2V0V2l0aGluSW5mbyhvcHRpb25zLndpdGhpbik7XG4gICAgY29uc3Qgc2Nyb2xsSW5mbyA9IGdldFNjcm9sbEluZm8od2l0aGluKTtcblxuICAgIFsnbXknLCAnYXQnXS5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICBsZXQgcG9zID0gKG9wdGlvbnNbaXRlbV0gfHwgJycpLnNwbGl0KCcgJyk7XG5cbiAgICAgICAgaWYgKHBvcy5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgICAgIHBvcyA9IHJIb3Jpem9udGFsLnRlc3QocG9zWzBdKSA/XG4gICAgICAgICAgICAgICAgcG9zLmNvbmNhdChbJ2NlbnRlciddKSA6XG4gICAgICAgICAgICAgICAgclZlcnRpY2FsLnRlc3QocG9zWzBdKSA/XG4gICAgICAgICAgICAgICAgICAgIFsnY2VudGVyJ10uY29uY2F0KHBvcykgOlxuICAgICAgICAgICAgICAgICAgICBbJ2NlbnRlcicsICdjZW50ZXInXTtcbiAgICAgICAgfVxuICAgICAgICBwb3NbMF0gPSBySG9yaXpvbnRhbC50ZXN0KHBvc1swXSkgPyBwb3NbMF0gOiAnY2VudGVyJztcbiAgICAgICAgcG9zWzFdID0gclZlcnRpY2FsLnRlc3QocG9zWzFdKSA/IHBvc1sxXSA6ICdjZW50ZXInO1xuXG4gICAgICAgIGNvbnN0IGhvcml6b250YWxPZmZzZXQgPSByT2Zmc2V0LmV4ZWMocG9zWzBdKTtcbiAgICAgICAgY29uc3QgdmVydGljYWxPZmZzZXQgPSByT2Zmc2V0LmV4ZWMocG9zWzFdKTtcbiAgICAgICAgb2Zmc2V0c1tpdGVtXSA9IFtcbiAgICAgICAgICAgIGhvcml6b250YWxPZmZzZXQgPyBob3Jpem9udGFsT2Zmc2V0WzBdIDogMCxcbiAgICAgICAgICAgIHZlcnRpY2FsT2Zmc2V0ID8gdmVydGljYWxPZmZzZXRbMF0gOiAwXG4gICAgICAgIF07XG5cbiAgICAgICAgb3B0aW9uc1tpdGVtXSA9IFtcbiAgICAgICAgICAgIHJQb3NpdGlvbi5leGVjKHBvc1swXSlbMF0sXG4gICAgICAgICAgICByUG9zaXRpb24uZXhlYyhwb3NbMV0pWzBdXG4gICAgICAgIF07XG4gICAgfSk7XG5cbiAgICBpZiAoY29sbGlzaW9uLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICBjb2xsaXNpb25bMV0gPSBjb2xsaXNpb25bMF07XG4gICAgfVxuXG4gICAgY29uc3QgYXQgPSBvcHRpb25zLmF0O1xuICAgIGlmIChhdFswXSA9PT0gJ3JpZ2h0Jykge1xuICAgICAgICBiYXNlUG9zaXRpb24ubGVmdCArPSB0YXJnZXRXaWR0aDtcbiAgICB9IGVsc2UgaWYgKGF0WzBdID09PSAnY2VudGVyJykge1xuICAgICAgICBiYXNlUG9zaXRpb24ubGVmdCArPSB0YXJnZXRXaWR0aCAvIDI7XG4gICAgfVxuICAgIGlmIChhdFsxXSA9PT0gJ2JvdHRvbScpIHtcbiAgICAgICAgYmFzZVBvc2l0aW9uLnRvcCArPSB0YXJnZXRIZWlnaHQ7XG4gICAgfSBlbHNlIGlmIChhdFsxXSA9PT0gJ2NlbnRlcicpIHtcbiAgICAgICAgYmFzZVBvc2l0aW9uLnRvcCArPSB0YXJnZXRIZWlnaHQgLyAyO1xuICAgIH1cblxuICAgIGNvbnN0IGF0T2Zmc2V0ID0gZ2V0T2Zmc2V0cyhvZmZzZXRzLmF0LCB0YXJnZXRXaWR0aCwgdGFyZ2V0SGVpZ2h0KTtcbiAgICBiYXNlUG9zaXRpb24ubGVmdCArPSBhdE9mZnNldFswXTtcbiAgICBiYXNlUG9zaXRpb24udG9wICs9IGF0T2Zmc2V0WzFdO1xuXG4gICAgY29uc3QgZWxlbVdpZHRoID0gZWxlbS5vZmZzZXRXaWR0aDtcbiAgICBjb25zdCBlbGVtSGVpZ2h0ID0gZWxlbS5vZmZzZXRIZWlnaHQ7XG4gICAgY29uc3QgcG9zaXRpb24gPSBPYmplY3QuYXNzaWduKHt9LCBiYXNlUG9zaXRpb24pO1xuICAgIGNvbnN0IG15T2Zmc2V0ID0gZ2V0T2Zmc2V0cyhvZmZzZXRzLm15LCBlbGVtV2lkdGgsIGVsZW1IZWlnaHQpO1xuICAgIGNvbnN0IGNvbXB1dGVkU3R5bGUgPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShlbGVtKTtcbiAgICBjb25zdCBtYXJnaW5MZWZ0ID0gcGFyc2VDc3MoY29tcHV0ZWRTdHlsZSwgJ21hcmdpbkxlZnQnKTtcbiAgICBjb25zdCBtYXJnaW5Ub3AgPSBwYXJzZUNzcyhjb21wdXRlZFN0eWxlLCAnbWFyZ2luVG9wJyk7XG4gICAgY29uc3QgY29sbGlzaW9uV2lkdGggPSBlbGVtV2lkdGggKyBtYXJnaW5MZWZ0ICsgcGFyc2VDc3MoY29tcHV0ZWRTdHlsZSwgJ21hcmdpblJpZ2h0JykgKyBzY3JvbGxJbmZvLndpZHRoO1xuICAgIGNvbnN0IGNvbGxpc2lvbkhlaWdodCA9IGVsZW1IZWlnaHQgKyBtYXJnaW5Ub3AgKyBwYXJzZUNzcyhjb21wdXRlZFN0eWxlLCAnbWFyZ2luQm90dG9tJykgKyBzY3JvbGxJbmZvLmhlaWdodDtcbiAgICBjb25zdCBjb2xsaXNpb25Qb3NpdGlvbiA9IHttYXJnaW5MZWZ0LCBtYXJnaW5Ub3B9O1xuXG4gICAgY29uc3QgbXkgPSBvcHRpb25zLm15O1xuICAgIGlmIChteVswXSA9PT0gJ3JpZ2h0Jykge1xuICAgICAgICBwb3NpdGlvbi5sZWZ0IC09IGVsZW1XaWR0aDtcbiAgICB9IGVsc2UgaWYgKG15WzBdID09PSAnY2VudGVyJykge1xuICAgICAgICBwb3NpdGlvbi5sZWZ0IC09IGVsZW1XaWR0aCAvIDI7XG4gICAgfVxuICAgIGlmIChteVsxXSA9PT0gJ2JvdHRvbScpIHtcbiAgICAgICAgcG9zaXRpb24udG9wIC09IGVsZW1IZWlnaHQ7XG4gICAgfSBlbHNlIGlmIChteVsxXSA9PT0gJ2NlbnRlcicpIHtcbiAgICAgICAgcG9zaXRpb24udG9wIC09IGVsZW1IZWlnaHQgLyAyO1xuICAgIH1cbiAgICBwb3NpdGlvbi5sZWZ0ICs9IG15T2Zmc2V0WzBdO1xuICAgIHBvc2l0aW9uLnRvcCArPSBteU9mZnNldFsxXTtcblxuICAgIFsnbGVmdCcsICd0b3AnXS5mb3JFYWNoKChkaXIsIGkpID0+IHtcbiAgICAgICAgY29uc3QgY29sbCA9IGNvbGxpc2lvbltpXTtcbiAgICAgICAgaWYgKHJ1bGVzW2NvbGxdKSB7XG4gICAgICAgICAgICBydWxlc1tjb2xsXVtkaXJdKHBvc2l0aW9uLCB7XG4gICAgICAgICAgICAgICAgdGFyZ2V0V2lkdGgsXG4gICAgICAgICAgICAgICAgdGFyZ2V0SGVpZ2h0LFxuICAgICAgICAgICAgICAgIGVsZW1XaWR0aCxcbiAgICAgICAgICAgICAgICBlbGVtSGVpZ2h0LFxuICAgICAgICAgICAgICAgIGNvbGxpc2lvblBvc2l0aW9uLFxuICAgICAgICAgICAgICAgIGNvbGxpc2lvbldpZHRoLFxuICAgICAgICAgICAgICAgIGNvbGxpc2lvbkhlaWdodCxcbiAgICAgICAgICAgICAgICBvZmZzZXQ6IFthdE9mZnNldFswXSArIG15T2Zmc2V0WzBdLCBhdE9mZnNldFsxXSArIG15T2Zmc2V0WzFdXSxcbiAgICAgICAgICAgICAgICBteTogb3B0aW9ucy5teSxcbiAgICAgICAgICAgICAgICBhdDogb3B0aW9ucy5hdCxcbiAgICAgICAgICAgICAgICB3aXRoaW4sXG4gICAgICAgICAgICAgICAgZWxlbVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIGlmIChvcHRpb25zLnVzaW5nKSB7XG4gICAgICAgIGNvbnN0IGxlZnQgPSB0YXJnZXRPZmZzZXQubGVmdCAtIHBvc2l0aW9uLmxlZnQ7XG4gICAgICAgIGNvbnN0IHJpZ2h0ID0gbGVmdCArIHRhcmdldFdpZHRoIC0gZWxlbVdpZHRoO1xuICAgICAgICBjb25zdCB0b3AgPSB0YXJnZXRPZmZzZXQudG9wIC0gcG9zaXRpb24udG9wO1xuICAgICAgICBjb25zdCBib3R0b20gPSB0b3AgKyB0YXJnZXRIZWlnaHQgLSBlbGVtSGVpZ2h0O1xuICAgICAgICBjb25zdCBmZWVkYmFjayA9IHtcbiAgICAgICAgICAgIHRhcmdldDoge1xuICAgICAgICAgICAgICAgIGVsZW1lbnQ6IHRhcmdldCxcbiAgICAgICAgICAgICAgICBsZWZ0OiB0YXJnZXRPZmZzZXQubGVmdCxcbiAgICAgICAgICAgICAgICB0b3A6IHRhcmdldE9mZnNldC50b3AsXG4gICAgICAgICAgICAgICAgd2lkdGg6IHRhcmdldFdpZHRoLFxuICAgICAgICAgICAgICAgIGhlaWdodDogdGFyZ2V0SGVpZ2h0LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGVsZW1lbnQ6IHtcbiAgICAgICAgICAgICAgICBlbGVtZW50OiBlbGVtLFxuICAgICAgICAgICAgICAgIGxlZnQ6IHBvc2l0aW9uLmxlZnQsXG4gICAgICAgICAgICAgICAgdG9wOiBwb3NpdGlvbi50b3AsXG4gICAgICAgICAgICAgICAgd2lkdGg6IGVsZW1XaWR0aCxcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IGVsZW1IZWlnaHQsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgaG9yaXpvbnRhbDogcmlnaHQgPCAwID8gJ2xlZnQnIDogbGVmdCA+IDAgPyAncmlnaHQnIDogJ2NlbnRlcicsXG4gICAgICAgICAgICB2ZXJ0aWNhbDogYm90dG9tIDwgMCA/ICd0b3AnIDogdG9wID4gMCA/ICdib3R0b20nIDogJ21pZGRsZScsXG4gICAgICAgIH07XG4gICAgICAgIGlmICh0YXJnZXRXaWR0aCA8IGVsZW1XaWR0aCAmJiBhYnMobGVmdCArIHJpZ2h0KSA8IHRhcmdldFdpZHRoKSB7XG4gICAgICAgICAgICBmZWVkYmFjay5ob3Jpem9udGFsID0gJ2NlbnRlcic7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRhcmdldEhlaWdodCA8IGVsZW1IZWlnaHQgJiYgYWJzKHRvcCArIGJvdHRvbSkgPCB0YXJnZXRIZWlnaHQpIHtcbiAgICAgICAgICAgIGZlZWRiYWNrLnZlcnRpY2FsID0gJ21pZGRsZSc7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoXG4gICAgICAgICAgICBwb3NpdGlvbi50b3AgKyBlbGVtSGVpZ2h0IDw9IHRhcmdldE9mZnNldC50b3AgfHwgXG4gICAgICAgICAgICBwb3NpdGlvbi50b3AgPj0gdGFyZ2V0T2Zmc2V0LnRvcCArIHRhcmdldEhlaWdodFxuICAgICAgICApIHtcbiAgICAgICAgICAgIGZlZWRiYWNrLmltcG9ydGFudCA9ICd2ZXJ0aWNhbCc7XG4gICAgICAgIH0gZWxzZSBpZiAoXG4gICAgICAgICAgICBwb3NpdGlvbi5sZWZ0ICsgZWxlbVdpZHRoIDw9IHRhcmdldE9mZnNldC5sZWZ0IHx8XG4gICAgICAgICAgICBwb3NpdGlvbi5sZWZ0ID49IHRhcmdldE9mZnNldC5sZWZ0ICsgdGFyZ2V0V2lkdGhcbiAgICAgICAgKSB7XG4gICAgICAgICAgICBmZWVkYmFjay5pbXBvcnRhbnQgPSAnaG9yaXpvbnRhbCc7XG4gICAgICAgIH0gZWxzZSBpZiAobWF4KGFicyhsZWZ0KSwgYWJzKHJpZ2h0KSkgPiBtYXgoYWJzKHRvcCksIGFicyhib3R0b20pKSkge1xuICAgICAgICAgICAgZmVlZGJhY2suaW1wb3J0YW50ID0gJ2hvcml6b250YWwnO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZmVlZGJhY2suaW1wb3J0YW50ID0gJ3ZlcnRpY2FsJztcbiAgICAgICAgfVxuXG4gICAgICAgIG9wdGlvbnMudXNpbmcoZmVlZGJhY2ssIHBvc2l0aW9uKTtcbiAgICB9XG5cbiAgICBjb25zdCBzdHlsZSA9IGVsZW0uc3R5bGU7XG4gICAgaWYgKGNvbXB1dGVkU3R5bGUucG9zaXRpb24gPT09ICdzdGF0aWMnKSB7XG4gICAgICAgIHN0eWxlLnBvc2l0aW9uID0gJ3JlbGF0aXZlJztcbiAgICB9XG4gICAgc3R5bGUubGVmdCA9IHBvc2l0aW9uLmxlZnQgKyAncHgnO1xuICAgIHN0eWxlLnRvcCA9IHBvc2l0aW9uLnRvcCArICdweCc7XG59XG5cbmNvbnN0IHJ1bGVzID0ge1xuICAgIGZpdDoge1xuICAgICAgICBsZWZ0KHBvc2l0aW9uLCBkYXRhKSB7XG4gICAgICAgICAgICBjb25zdCB3aXRoaW4gPSBkYXRhLndpdGhpbjtcbiAgICAgICAgICAgIGNvbnN0IHdpdGhpbk9mZnNldCA9IHdpdGhpbi5pc1dpbmRvdyA/IHdpdGhpbi5zY3JvbGxMZWZ0IDogd2l0aGluLm9mZnNldC5sZWZ0O1xuICAgICAgICAgICAgY29uc3Qgb3V0ZXJXaWR0aCA9IHdpdGhpbi53aWR0aDtcbiAgICAgICAgICAgIGNvbnN0IGNvbGxpc2lvblBvc0xlZnQgPSAgcG9zaXRpb24ubGVmdCAtIGRhdGEuY29sbGlzaW9uUG9zaXRpb24ubWFyZ2luTGVmdDtcbiAgICAgICAgICAgIGNvbnN0IG92ZXJMZWZ0ID0gd2l0aGluT2Zmc2V0IC0gY29sbGlzaW9uUG9zTGVmdDtcbiAgICAgICAgICAgIGNvbnN0IG92ZXJSaWdodCA9IGNvbGxpc2lvblBvc0xlZnQgKyBkYXRhLmNvbGxpc2lvbldpZHRoIC0gb3V0ZXJXaWR0aCAtIHdpdGhpbk9mZnNldDtcbiAgICAgICAgICAgIGxldCBuZXdPdmVyUmlnaHQ7XG5cbiAgICAgICAgICAgIGlmIChkYXRhLmNvbGxpc2lvbldpZHRoID4gb3V0ZXJXaWR0aCkge1xuICAgICAgICAgICAgICAgIGlmIChvdmVyTGVmdCA+IDAgJiYgb3ZlclJpZ2h0IDw9MCkge1xuICAgICAgICAgICAgICAgICAgICBuZXdPdmVyUmlnaHQgPSBwb3NpdGlvbi5sZWZ0ICsgb3ZlckxlZnQgKyBkYXRhLmNvbGxpc2lvbldpZHRoIC0gb3V0ZXJXaWR0aCAtIHdpdGhpbk9mZnNldDtcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb24ubGVmdCArPSBvdmVyTGVmdCAtIG5ld092ZXJSaWdodDtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKG92ZXJSaWdodCA+IDAgJiYgb3ZlckxlZnQgPD0wKSB7XG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uLmxlZnQgPSB3aXRoaW5PZmZzZXQ7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChvdmVyTGVmdCA+IG92ZXJSaWdodCkge1xuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbi5sZWZ0ID0gd2l0aGluT2Zmc2V0ICsgb3V0ZXJXaWR0aCAtIGRhdGEuY29sbGlzaW9uV2lkdGg7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb24ubGVmdCA9IHdpdGhpbk9mZnNldDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2UgaWYgKG92ZXJMZWZ0ID4gMCkge1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uLmxlZnQgKz0gb3ZlckxlZnQ7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKG92ZXJSaWdodCA+IDApIHtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbi5sZWZ0IC09IG92ZXJSaWdodDtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcG9zaXRpb24ubGVmdCA9IG1heChwb3NpdGlvbi5sZWZ0IC0gY29sbGlzaW9uUG9zTGVmdCwgcG9zaXRpb24ubGVmdCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgdG9wKHBvc2l0aW9uLCBkYXRhKSB7XG4gICAgICAgICAgICBjb25zdCB3aXRoaW4gPSBkYXRhLndpdGhpbjtcbiAgICAgICAgICAgIGNvbnN0IHdpdGhpbk9mZnNldCA9IHdpdGhpbi5pc1dpbmRvdyA/IHdpdGhpbi5zY3JvbGxUb3AgOiB3aXRoaW4ub2Zmc2V0LnRvcDtcbiAgICAgICAgICAgIGNvbnN0IG91dGVySGVpZ2h0ID0gZGF0YS53aXRoaW4uaGVpZ2h0O1xuICAgICAgICAgICAgY29uc3QgY29sbGlzaW9uUG9zVG9wID0gcG9zaXRpb24udG9wIC0gZGF0YS5jb2xsaXNpb25Qb3NpdGlvbi5tYXJnaW5Ub3A7XG4gICAgICAgICAgICBjb25zdCBvdmVyVG9wID0gd2l0aGluT2Zmc2V0IC0gY29sbGlzaW9uUG9zVG9wO1xuICAgICAgICAgICAgY29uc3Qgb3ZlckJvdHRvbSA9IGNvbGxpc2lvblBvc1RvcCArIGRhdGEuY29sbGlzaW9uSGVpZ2h0IC0gb3V0ZXJIZWlnaHQgLSB3aXRoaW5PZmZzZXQ7XG4gICAgICAgICAgICBsZXQgbmV3T3ZlckJvdHRvbTtcblxuICAgICAgICAgICAgaWYgKGRhdGEuY29sbGlzaW9uSGVpZ2h0ID4gb3V0ZXJIZWlnaHQpIHtcbiAgICAgICAgICAgICAgICBpZiAob3ZlclRvcCA+IDAgJiYgb3ZlckJvdHRvbSA8PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIG5ld092ZXJCb3R0b20gPSBwb3NpdGlvbi50b3AgKyBvdmVyVG9wICsgZGF0YS5jb2xsaXNpb25IZWlnaHQgLSBvdXRlckhlaWdodCAtIHdpdGhpbk9mZnNldDtcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb24udG9wICs9IG92ZXJUb3AgLSBuZXdPdmVyQm90dG9tO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAob3ZlckJvdHRvbSA+IDAgJiYgb3ZlclRvcCA8PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uLnRvcCA9IHdpdGhpbk9mZnNldDtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKG92ZXJUb3AgPiBvdmVyQm90dG9tKSB7XG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uLnRvcCA9IHdpdGhpbk9mZnNldCArIG91dGVySGVpZ2h0IC0gZGF0YS5jb2xsaXNpb25IZWlnaHQ7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb24udG9wID0gd2l0aGluT2Zmc2V0O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSBpZiAob3ZlclRvcCA+IDApIHtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbi50b3AgKz0gb3ZlclRvcDtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAob3ZlckJvdHRvbSA+IDApIHtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbi50b3AgLT0gb3ZlckJvdHRvbTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcG9zaXRpb24udG9wID0gbWF4KHBvc2l0aW9uLnRvcCAtIGNvbGxpc2lvblBvc1RvcCwgcG9zaXRpb24udG9wKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICBmbGlwOiB7XG4gICAgICAgIGxlZnQocG9zaXRpb24sIGRhdGEpIHtcbiAgICAgICAgICAgIGNvbnN0IHdpdGhpbiA9IGRhdGEud2l0aGluO1xuICAgICAgICAgICAgY29uc3Qgd2l0aGluT2Zmc2V0ID0gd2l0aGluLm9mZnNldC5sZWZ0ICsgd2l0aGluLnNjcm9sbExlZnQ7XG4gICAgICAgICAgICBjb25zdCBvdXRlcldpZHRoID0gd2l0aGluLndpZHRoO1xuICAgICAgICAgICAgY29uc3Qgb2Zmc2V0TGVmdCA9IHdpdGhpbi5pc1dpbmRvdyA/IHdpdGhpbi5zY3JvbGxMZWZ0IDogd2l0aGluLm9mZnNldC5sZWZ0O1xuICAgICAgICAgICAgY29uc3QgY29sbGlzaW9uUG9zTGVmdCA9IHBvc2l0aW9uLmxlZnQgLSBkYXRhLmNvbGxpc2lvblBvc2l0aW9uLm1hcmdpbkxlZnQ7XG4gICAgICAgICAgICBjb25zdCBvdmVyTGVmdCA9IGNvbGxpc2lvblBvc0xlZnQgLSBvZmZzZXRMZWZ0O1xuICAgICAgICAgICAgY29uc3Qgb3ZlclJpZ2h0ID0gY29sbGlzaW9uUG9zTGVmdCArIGRhdGEuY29sbGlzaW9uV2lkdGggLSBvdXRlcldpZHRoIC0gb2Zmc2V0TGVmdDtcbiAgICAgICAgICAgIGNvbnN0IG15T2Zmc2V0ID0gZGF0YS5teVswXSA9PT0gJ2xlZnQnID8gXG4gICAgICAgICAgICAgICAgLWRhdGEuZWxlbVdpZHRoIDpcbiAgICAgICAgICAgICAgICBkYXRhLm15WzBdID09PSAncmlnaHQnID9cbiAgICAgICAgICAgICAgICAgICAgZGF0YS5lbGVtV2lkdGggOiAwO1xuICAgICAgICAgICAgY29uc3QgYXRPZmZzZXQgPSBkYXRhLmF0WzBdID09PSAnbGVmdCcgP1xuICAgICAgICAgICAgICAgIGRhdGEudGFyZ2V0V2lkdGggOlxuICAgICAgICAgICAgICAgIGRhdGEuYXRbMF0gPT09ICdyaWdodCcgP1xuICAgICAgICAgICAgICAgICAgICAtZGF0YS50YXJnZXRXaWR0aCA6IDA7XG4gICAgICAgICAgICBjb25zdCBvZmZzZXQgPSAtMiAqIGRhdGEub2Zmc2V0WzBdO1xuICAgICAgICAgICAgbGV0IG5ld092ZXJSaWdodDtcbiAgICAgICAgICAgIGxldCBuZXdPdmVyTGVmdDtcblxuICAgICAgICAgICAgaWYgKG92ZXJMZWZ0IDwgMCkge1xuICAgICAgICAgICAgICAgIG5ld092ZXJSaWdodCA9IHBvc2l0aW9uLmxlZnQgKyBteU9mZnNldCArIGF0T2Zmc2V0ICsgb2Zmc2V0ICsgZGF0YS5jb2xsaXNpb25XaWR0aCAtIG91dGVyV2lkdGggLSB3aXRoaW5PZmZzZXQ7XG4gICAgICAgICAgICAgICAgaWYgKG5ld092ZXJSaWdodCA8IDAgfHwgbmV3T3ZlclJpZ2h0IDwgYWJzKG92ZXJMZWZ0KSkge1xuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbi5sZWZ0ICs9IG15T2Zmc2V0ICsgYXRPZmZzZXQgKyBvZmZzZXQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIGlmIChvdmVyUmlnaHQgPiAwKSB7XG4gICAgICAgICAgICAgICAgbmV3T3ZlckxlZnQgPSBwb3NpdGlvbi5sZWZ0IC0gZGF0YS5jb2xsaXNpb25Qb3NpdGlvbi5tYXJnaW5MZWZ0ICsgbXlPZmZzZXQgKyBhdE9mZnNldCArIG9mZnNldCAtIG9mZnNldExlZnQ7XG4gICAgICAgICAgICAgICAgLy8gdGhlIHNhbWUgdG8gdG9wXG4gICAgICAgICAgICAgICAgLy8gaWYgKG5ld092ZXJMZWZ0ID4gMCB8fCBhYnMobmV3T3ZlckxlZnQpIDwgb3ZlclJpZ2h0KSB7XG4gICAgICAgICAgICAgICAgaWYgKG5ld092ZXJMZWZ0ID4gMCkge1xuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbi5sZWZ0ICs9IG15T2Zmc2V0ICsgYXRPZmZzZXQgKyBvZmZzZXQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgIHRvcChwb3NpdGlvbiwgZGF0YSkge1xuICAgICAgICAgICAgY29uc3Qgd2l0aGluID0gZGF0YS53aXRoaW47XG4gICAgICAgICAgICBjb25zdCB3aXRoaW5PZmZzZXQgPSB3aXRoaW4ub2Zmc2V0LnRvcCArIHdpdGhpbi5zY3JvbGxUb3A7XG4gICAgICAgICAgICBjb25zdCBvdXRlckhlaWdodCA9IHdpdGhpbi5oZWlnaHQ7XG4gICAgICAgICAgICBjb25zdCBvZmZzZXRUb3AgPSB3aXRoaW4uaXNXaW5kb3cgPyB3aXRoaW4uc2Nyb2xsVG9wIDogd2l0aGluLm9mZnNldC50b3A7XG4gICAgICAgICAgICBjb25zdCBjb2xsaXNpb25Qb3NUb3AgPSBwb3NpdGlvbi50b3AgLSBkYXRhLmNvbGxpc2lvblBvc2l0aW9uLm1hcmdpblRvcDtcbiAgICAgICAgICAgIGNvbnN0IG92ZXJUb3AgPSBjb2xsaXNpb25Qb3NUb3AgLSBvZmZzZXRUb3A7XG4gICAgICAgICAgICBjb25zdCBvdmVyQm90dG9tID0gY29sbGlzaW9uUG9zVG9wICsgZGF0YS5jb2xsaXNpb25IZWlnaHQgLSBvdXRlckhlaWdodCAtIG9mZnNldFRvcDsgXG4gICAgICAgICAgICBjb25zdCBteU9mZnNldCA9IGRhdGEubXlbMV0gPT09ICd0b3AnID9cbiAgICAgICAgICAgICAgICAtZGF0YS5lbGVtSGVpZ2h0IDpcbiAgICAgICAgICAgICAgICBkYXRhLm15WzFdID09PSAnYm90dG9tJyA/XG4gICAgICAgICAgICAgICAgICAgIGRhdGEuZWxlbUhlaWdodCA6IDA7XG4gICAgICAgICAgICBjb25zdCBhdE9mZnNldCA9IGRhdGEuYXRbMV0gPT09ICd0b3AnID9cbiAgICAgICAgICAgICAgICBkYXRhLnRhcmdldEhlaWdodCA6XG4gICAgICAgICAgICAgICAgZGF0YS5hdFsxXSA9PT0gJ2JvdHRvbScgP1xuICAgICAgICAgICAgICAgICAgICAtZGF0YS50YXJnZXRIZWlnaHQgOiAwO1xuICAgICAgICAgICAgY29uc3Qgb2Zmc2V0ID0gLTIgKiBkYXRhLm9mZnNldFsxXTtcbiAgICAgICAgICAgIGxldCBuZXdPdmVyVG9wO1xuICAgICAgICAgICAgbGV0IG5ld092ZXJCb3R0b207XG5cbiAgICAgICAgICAgIGlmIChvdmVyVG9wIDwgMCkge1xuICAgICAgICAgICAgICAgIG5ld092ZXJCb3R0b20gPSBwb3NpdGlvbi50b3AgKyBteU9mZnNldCArIGF0T2Zmc2V0ICsgb2Zmc2V0ICsgZGF0YS5jb2xsaXNpb25IZWlnaHQgLSBvdXRlckhlaWdodCAtIHdpdGhpbk9mZnNldDtcbiAgICAgICAgICAgICAgICBpZiAobmV3T3ZlckJvdHRvbSA8IDAgfHwgbmV3T3ZlckJvdHRvbSA8IGFicyhvdmVyVG9wKSkge1xuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbi50b3AgKz0gbXlPZmZzZXQgKyBhdE9mZnNldCArIG9mZnNldDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2UgaWYgKG92ZXJCb3R0b20gPiAwKSB7XG4gICAgICAgICAgICAgICAgbmV3T3ZlclRvcCA9IHBvc2l0aW9uLnRvcCAtIGRhdGEuY29sbGlzaW9uUG9zaXRpb24ubWFyZ2luVG9wICsgbXlPZmZzZXQgKyBhdE9mZnNldCArIG9mZnNldCAtIG9mZnNldFRvcDtcbiAgICAgICAgICAgICAgICAvLyBiZWNhdXNlIHdpbmRvdyBjYW4gc2Nyb2xsIGRvd24sIHdoZW4gaXQgYmV5b25kIHRoZSB0b3AgYm9yZGVyLFxuICAgICAgICAgICAgICAgIC8vIHdlIGNhbiBub3Qgc2Nyb2xsIGl0IHRvIHZpZXcuIERvbid0IGZsaXAgaXQgaW4gdGhpcyBjYXNlXG4gICAgICAgICAgICAgICAgLy8gaWYgKG5ld092ZXJUb3AgPiAwIHx8IGFicyhuZXdPdmVyVG9wKSA8IG92ZXJCb3R0b20pIHtcbiAgICAgICAgICAgICAgICBpZiAobmV3T3ZlclRvcCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb24udG9wICs9IG15T2Zmc2V0ICsgYXRPZmZzZXQgKyBvZmZzZXQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSxcblxuICAgIGZsaXBmaXQ6IHtcbiAgICAgICAgbGVmdCguLi5hcmdzKSB7XG4gICAgICAgICAgICBydWxlcy5mbGlwLmxlZnQoLi4uYXJncyk7XG4gICAgICAgICAgICBydWxlcy5maXQubGVmdCguLi5hcmdzKTtcbiAgICAgICAgfSxcblxuICAgICAgICB0b3AoLi4uYXJncykge1xuICAgICAgICAgICAgcnVsZXMuZmxpcC50b3AoLi4uYXJncyk7XG4gICAgICAgICAgICBydWxlcy5maXQudG9wKC4uLmFyZ3MpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5cbmV4cG9ydCB7cG9zaXRpb259O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9tb3ZlV3JhcHBlci9wb3NpdGlvbi5qcyIsImltcG9ydCBJbnRhY3QgZnJvbSAnaW50YWN0JztcbmltcG9ydCB0ZW1wbGF0ZSBmcm9tICcuL2dyb3VwLnZkdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE9wdGlvbkdyb3VwIGV4dGVuZHMgSW50YWN0IHtcbiAgICBASW50YWN0LnRlbXBsYXRlKClcbiAgICBzdGF0aWMgdGVtcGxhdGUgPSB0ZW1wbGF0ZTtcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvc2VsZWN0L2dyb3VwLmpzIiwiXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihvYmosIF9WZHQsIGJsb2NrcywgJGNhbGxlZSkge1xuX1ZkdCB8fCAoX1ZkdCA9IFZkdCk7XG5vYmogfHwgKG9iaiA9IHt9KTtcbmJsb2NrcyB8fCAoYmxvY2tzID0ge30pO1xudmFyIGggPSBfVmR0Lm1pc3MuaCwgaGMgPSBfVmR0Lm1pc3MuaGMsIGh1ID0gX1ZkdC5taXNzLmh1LCB3aWRnZXRzID0gdGhpcyAmJiB0aGlzLndpZGdldHMgfHwge30sIF9ibG9ja3MgPSB7fSwgX19ibG9ja3MgPSB7fSxcbl9fdSA9IF9WZHQudXRpbHMsIGV4dGVuZCA9IF9fdS5leHRlbmQsIF9lID0gX191LmVycm9yLCBfY2xhc3NOYW1lID0gX191LmNsYXNzTmFtZSxcbl9fbyA9IF9fdS5PcHRpb25zLCBfZ2V0TW9kZWwgPSBfX28uZ2V0TW9kZWwsIF9zZXRNb2RlbCA9IF9fby5zZXRNb2RlbCxcbl9zZXRDaGVja2JveE1vZGVsID0gX191LnNldENoZWNrYm94TW9kZWwsIF9kZXRlY3RDaGVja2JveENoZWNrZWQgPSBfX3UuZGV0ZWN0Q2hlY2tib3hDaGVja2VkLFxuX3NldFNlbGVjdE1vZGVsID0gX191LnNldFNlbGVjdE1vZGVsLFxuc2VsZiA9IHRoaXMuZGF0YSwgJHRoaXMgPSB0aGlzLCBzY29wZSA9IG9iaiwgQW5pbWF0ZSA9IHNlbGYgJiYgc2VsZi5BbmltYXRlLCBwYXJlbnQgPSAoJGNhbGxlZSB8fCB7fSkuX3N1cGVyXG5jb25zdCB7Y2hpbGRyZW4sIGxhYmVsfSA9IHNlbGYuZ2V0KCk7XG5cbnJldHVybiBoKCdkaXYnLCBudWxsLCBbaCgnZGl2JywgbnVsbCwgZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW2xhYmVsIF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcyksICdrLWxhYmVsJyksICdcXG4gICAgJywgZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW2NoaWxkcmVuIF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcyksICdcXG4nXSwgJ2stZ3JvdXAnKVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvc2VsZWN0L2dyb3VwLnZkdCIsImltcG9ydCBJbnRhY3QgZnJvbSAnaW50YWN0JztcbmltcG9ydCB0ZW1wbGF0ZSBmcm9tICcuL2luZGV4LnZkdCc7XG5pbXBvcnQgJy4uLy4uL3N0eWxlcy9rcGMuc3R5bCc7XG5pbXBvcnQgJy4vaW5kZXguc3R5bCc7XG5pbXBvcnQgT3B0aW9uIGZyb20gJy4vb3B0aW9uJztcbmltcG9ydCBHcm91cCBmcm9tICcuL2dyb3VwJztcbmltcG9ydCB7c2VsZWN0SW5wdXQsIF8kfSBmcm9tICcuLi91dGlscyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNlbGVjdCBleHRlbmRzIEludGFjdCB7XG4gICAgQEludGFjdC50ZW1wbGF0ZSgpXG4gICAgc3RhdGljIHRlbXBsYXRlID0gdGVtcGxhdGU7XG5cbiAgICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgICAgICBtdWx0aXBsZTogQm9vbGVhbixcbiAgICAgICAgZGlzYWJsZWQ6IEJvb2xlYW4sXG4gICAgICAgIGNsZWFyYWJsZTogQm9vbGVhbixcbiAgICAgICAgZmlsdGVyYWJsZTogQm9vbGVhbixcbiAgICAgICAgZmx1aWQ6IEJvb2xlYW4sXG4gICAgICAgIGFsbG93VW5tYXRjaDogQm9vbGVhbixcbiAgICB9O1xuXG4gICAgZGVmYXVsdHMoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBkYXRhOiBbXSxcbiAgICAgICAgICAgIHZhbHVlOiAnJyxcbiAgICAgICAgICAgIG11bHRpcGxlOiBmYWxzZSwgLy/mlK/mjIHlpJrpgIlsaVxuICAgICAgICAgICAgZGlzYWJsZWQ6IGZhbHNlLFxuICAgICAgICAgICAgY2xlYXJhYmxlOiBmYWxzZSwgLy8g5piv5ZCm5Y+v5riF56m6IFxuICAgICAgICAgICAgZmlsdGVyYWJsZTogZmFsc2UsIC8vIOaQnOe0ouetm+mAiVxuICAgICAgICAgICAga2V5d29yZHM6IHVuZGVmaW5lZCxcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyOiB1bmRlZmluZWQsXG4gICAgICAgICAgICBzaXplOiAnZGVmYXVsdCcsXG4gICAgICAgICAgICBmbHVpZDogZmFsc2UsXG4gICAgICAgICAgICB3aWR0aDogdW5kZWZpbmVkLFxuICAgICAgICAgICAgYWxsb3dVbm1hdGNoOiBmYWxzZSxcblxuICAgICAgICAgICAgX3Nob3c6IGZhbHNlLFxuICAgICAgICB9XG4gICAgfVxuXG4gICAgX2luaXQoKSB7XG4gICAgICAgIHRoaXMub24oJyRjaGFuZ2VkOnZhbHVlJywgKCkgPT4ge1xuICAgICAgICAgICAgaWYgKHRoaXMuZ2V0KCdtdWx0aXBsZScpICYmIHRoaXMuZ2V0KCdfc2hvdycpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5yZWZzLm1lbnUucG9zaXRpb24oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgX29uQ2xlYXIoZSkge1xuICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICB0aGlzLnNldCgndmFsdWUnLCAnJyk7XG4gICAgfVxuXG4gICAgX29uU2VsZWN0KHZhbHVlKSB7XG4gICAgICAgIGlmICghdGhpcy5nZXQoJ211bHRpcGxlJykpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0KCd2YWx1ZScsIHZhbHVlLCB7YXN5bmM6IHRydWV9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGxldCB2YWx1ZXMgPSB0aGlzLmdldCgndmFsdWUnKTtcbiAgICAgICAgICAgIGlmICghQXJyYXkuaXNBcnJheSh2YWx1ZXMpKSB7XG4gICAgICAgICAgICAgICAgdmFsdWVzID0gW107XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHZhbHVlcyA9IHZhbHVlcy5zbGljZSgwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGluZGV4ID0gdmFsdWVzLmluZGV4T2YodmFsdWUpO1xuICAgICAgICAgICAgaWYgKH5pbmRleCkge1xuICAgICAgICAgICAgICAgIC8vIGlmIGZpbmQsIGRlbGV0ZSBpdFxuICAgICAgICAgICAgICAgIHZhbHVlcy5zcGxpY2UoaW5kZXgsIDEpOyBcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdmFsdWVzLnB1c2godmFsdWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5zZXQoJ3ZhbHVlJywgdmFsdWVzLCB7YXN5bmM6IHRydWV9KTtcbiAgICAgICAgICAgIHRoaXMuX2ZvY3VzSW5wdXQoKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9yZXNldFNlYXJjaCgpO1xuICAgIH1cblxuICAgIF9vblNlYXJjaChlKSB7XG4gICAgICAgIHRoaXMuc2V0KCdrZXl3b3JkcycsIGUudGFyZ2V0LnZhbHVlLnRyaW0oKSk7XG4gICAgICAgIC8vIGFsd2F5cyBzaG93IG1lbnUgb24gc2VhcmNoaW5nXG4gICAgICAgIHRoaXMucmVmcy5tZW51LnNob3coKTtcbiAgICAgICAgdGhpcy5yZWZzLm1lbnUuZm9jdXNJdGVtQnlJbmRleCgwKTtcbiAgICAgICAgLy8gdGhlIHBvc2l0aW9uIG1heSBiZSBmbGlwLCBhbmQgdGhlIHNlbGVjdCBpbnB1dCBoZWlnaHQgbXkgY2hhbmdlIGhlaWdodCB0b28sXG4gICAgICAgIC8vIHNvIHdlIHNob3VsZCByZXNldCB0aGUgcG9zaXRpb25cbiAgICAgICAgdGhpcy5yZWZzLm1lbnUucG9zaXRpb24oKTtcbiAgICB9XG5cbiAgICBfcmVzZXRTZWFyY2goKSB7XG4gICAgICAgIHRoaXMuc2V0KCdrZXl3b3JkcycsIHVuZGVmaW5lZCwge2FzeW5jOiB0cnVlfSk7XG4gICAgfVxuXG4gICAgX29uQ2hhbmdlU2hvdyhjLCB2YWx1ZSkge1xuICAgICAgICB0aGlzLnNldCgnX3Nob3cnLCB2YWx1ZSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQGJyaWVmIGxldCB0aGUgYmx1ciBtZXRob2QgY2FsbGVkIGFmdGVyIHNlbGVjdFxuICAgICAqIGlmIHdlIHNlbGVjdGVkIHRoZSBvcHRpb24sIHRoZW4gdGhlIGtleXdvcmRzIGhhcyBiZWVuIHNldCB0byB1bmRlZmluZFxuICAgICAqIGluIHRoaXMgY2FzZSwgd2UgZG8gbm90aGluZywgb3RoZXJ3aXNlIHdlIHJlc2V0IGl0XG4gICAgICovXG4gICAgX29uQmx1cigpIHtcbiAgICAgICAgY29uc3Qge2tleXdvcmRzLCBhbGxvd1VubWF0Y2h9ID0gdGhpcy5nZXQoKTtcbiAgICAgICAgaWYgKGFsbG93VW5tYXRjaCAmJiBrZXl3b3JkcyAhPSBudWxsKSB7XG4gICAgICAgICAgICB0aGlzLnNldCh7XG4gICAgICAgICAgICAgICAgdmFsdWU6IGtleXdvcmRzLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnRpbWVyID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICBpZiAodGhpcy5nZXQoJ2tleXdvcmRzJykgIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHRoaXMuX3Jlc2V0U2VhcmNoKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIDIwMCk7XG4gICAgfVxuXG4gICAgX3NlbGVjdElucHV0KGUpIHtcbiAgICAgICAgc2VsZWN0SW5wdXQoZS50YXJnZXQpOyBcbiAgICB9XG5cbiAgICBfb25Gb2N1cyhlKSB7XG4gICAgICAgIGNsZWFyVGltZW91dCh0aGlzLnRpbWVyKTtcbiAgICB9XG5cbiAgICBfb25Gb2N1c291dCgpIHtcbiAgICAgICAgdGhpcy5yZWZzLmRyb3Bkb3duLmhpZGUoKTtcbiAgICB9XG5cbiAgICBfZGVsZXRlKHZhbHVlLCBlKSB7XG4gICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgIGNvbnN0IHZhbHVlcyA9IHRoaXMuZ2V0KCd2YWx1ZScpLnNsaWNlKDApO1xuICAgICAgICBjb25zdCBpbmRleCA9IHZhbHVlcy5pbmRleE9mKHZhbHVlKTtcbiAgICAgICAgdmFsdWVzLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgIHRoaXMuc2V0KCd2YWx1ZScsIHZhbHVlcyk7XG4gICAgICAgIHRoaXMuX2ZvY3VzSW5wdXQoKTtcbiAgICB9XG5cbiAgICBfZm9jdXNJbnB1dCgpIHtcbiAgICAgICAgaWYgKHRoaXMuZ2V0KCdmaWx0ZXJhYmxlJykpIHtcbiAgICAgICAgICAgIHRoaXMucmVmcy5pbnB1dC5mb2N1cygpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgX3Bvc2l0aW9uKCkge1xuICAgICAgICBjb25zdCBtZW51RWxlbWVudCA9IHRoaXMucmVmcy5tZW51LnZkdC52Tm9kZS5jaGlsZHJlbi5lbGVtZW50O1xuICAgICAgICBjb25zdCB3aWR0aCA9IHRoaXMuZWxlbWVudC5vZmZzZXRXaWR0aDtcbiAgICAgICAgY29uc3QgbWVudVdpZHRoID0gbWVudUVsZW1lbnQub2Zmc2V0V2lkdGg7XG4gICAgICAgIGlmICh3aWR0aCA+IG1lbnVXaWR0aCkge1xuICAgICAgICAgICAgbWVudUVsZW1lbnQuc3R5bGUud2lkdGggPSBgJHt3aWR0aH1weGA7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBfb25LZXlwcmVzcyhlKSB7XG4gICAgICAgIGlmIChlLmtleUNvZGUgPT09IDEzKSB7XG4gICAgICAgICAgICB0aGlzLnJlZnMud3JhcHBlci5jbGljaygpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgX29uS2V5ZG93bihlKSB7XG4gICAgICAgIGlmIChlLmtleUNvZGUgPT09IDkpIHsgLy8gdGFiXG4gICAgICAgICAgICB0aGlzLnJlZnMuZHJvcGRvd24uaGlkZSgpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5leHBvcnQge1NlbGVjdCwgT3B0aW9uLCBHcm91cCBhcyBPcHRpb25Hcm91cH07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL3NlbGVjdC9pbmRleC5qcyIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG4gICAgaWYobW9kdWxlLmhvdCkge1xuICAgICAgLy8gMTUyNzc1NDM5NjExNFxuICAgICAgdmFyIGNzc1JlbG9hZCA9IHJlcXVpcmUoXCIhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1ob3QtbG9hZGVyL2hvdE1vZHVsZVJlcGxhY2VtZW50LmpzXCIpKG1vZHVsZS5pZCwge1wiZmlsZU1hcFwiOlwie2ZpbGVOYW1lfVwifSk7XG4gICAgICBtb2R1bGUuaG90LmRpc3Bvc2UoY3NzUmVsb2FkKTtcbiAgICAgIG1vZHVsZS5ob3QuYWNjZXB0KHVuZGVmaW5lZCwgY3NzUmVsb2FkKTtcbiAgICB9XG4gIFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vY29tcG9uZW50cy9zZWxlY3QvaW5kZXguc3R5bFxuLy8gbW9kdWxlIGlkID0gLi9jb21wb25lbnRzL3NlbGVjdC9pbmRleC5zdHlsXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyIsImltcG9ydCBJbnB1dCBmcm9tICcuLi9pbnB1dCc7aW1wb3J0IERyb3Bkb3duLCB7RHJvcGRvd25JdGVtLCBEcm9wZG93bk1lbnV9IGZyb20gJy4uL2Ryb3Bkb3duJztpbXBvcnQge2lzU3RyaW5nT3JOdW1iZXIsIGdldFRleHRCeUNoaWxkcmVuLCBhZGRTdHlsZSwgXyR9IGZyb20gJy4uL3V0aWxzJztpbXBvcnQgT3B0aW9uIGZyb20gJy4vb3B0aW9uJztpbXBvcnQgT3B0aW9uR3JvdXAgZnJvbSAnLi9ncm91cCc7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihvYmosIF9WZHQsIGJsb2NrcywgJGNhbGxlZSkge1xuX1ZkdCB8fCAoX1ZkdCA9IFZkdCk7XG5vYmogfHwgKG9iaiA9IHt9KTtcbmJsb2NrcyB8fCAoYmxvY2tzID0ge30pO1xudmFyIGggPSBfVmR0Lm1pc3MuaCwgaGMgPSBfVmR0Lm1pc3MuaGMsIGh1ID0gX1ZkdC5taXNzLmh1LCB3aWRnZXRzID0gdGhpcyAmJiB0aGlzLndpZGdldHMgfHwge30sIF9ibG9ja3MgPSB7fSwgX19ibG9ja3MgPSB7fSxcbl9fdSA9IF9WZHQudXRpbHMsIGV4dGVuZCA9IF9fdS5leHRlbmQsIF9lID0gX191LmVycm9yLCBfY2xhc3NOYW1lID0gX191LmNsYXNzTmFtZSxcbl9fbyA9IF9fdS5PcHRpb25zLCBfZ2V0TW9kZWwgPSBfX28uZ2V0TW9kZWwsIF9zZXRNb2RlbCA9IF9fby5zZXRNb2RlbCxcbl9zZXRDaGVja2JveE1vZGVsID0gX191LnNldENoZWNrYm94TW9kZWwsIF9kZXRlY3RDaGVja2JveENoZWNrZWQgPSBfX3UuZGV0ZWN0Q2hlY2tib3hDaGVja2VkLFxuX3NldFNlbGVjdE1vZGVsID0gX191LnNldFNlbGVjdE1vZGVsLFxuc2VsZiA9IHRoaXMuZGF0YSwgJHRoaXMgPSB0aGlzLCBzY29wZSA9IG9iaiwgQW5pbWF0ZSA9IHNlbGYgJiYgc2VsZi5BbmltYXRlLCBwYXJlbnQgPSAoJGNhbGxlZSB8fCB7fSkuX3N1cGVyXG5cblxuXG5cblxuXG5jb25zdCB7XG4gICAgY2xhc3NOYW1lLCBjbGVhcmFibGUsIGRhdGEsIHZhbHVlLCBtdWx0aXBsZSxcbiAgICBkaXNhYmxlZCwgZmlsdGVyYWJsZSwga2V5d29yZHMsIF9zaG93LFxuICAgIHBsYWNlaG9sZGVyLCBzaXplLCBzdHlsZSwgbmFtZSwgY2hpbGRyZW4sXG4gICAgZmx1aWQsIHdpZHRoLCBhbGxvd1VubWF0Y2gsXG59ID0gc2VsZi5nZXQoKTtcblxuY29uc3QgX3BsYWNlaG9sZGVyID0gcGxhY2Vob2xkZXIgPT0gbnVsbCA/XG4gICAgKGFsbG93VW5tYXRjaCAmJiBmaWx0ZXJhYmxlKSA/IF8kKCfor7fovpPlhaXmiJbpgInmi6knKSA6IF8kKCfor7fpgInmi6knKSA6XG4gICAgcGxhY2Vob2xkZXI7XG5cbmNvbnN0IGNsYXNzTmFtZU9iaiA9IHtcbiAgICAnay1zZWxlY3QnOiB0cnVlLFxuICAgIFtjbGFzc05hbWVdOiBjbGFzc05hbWUsXG4gICAgJ2stZGlzYWJsZWQnOiBkaXNhYmxlZCxcbiAgICAnay1zaG93JzogX3Nob3csXG4gICAgJ2stY2xlYXJhYmxlJzogY2xlYXJhYmxlLFxuICAgIFtgay0ke3NpemV9YF06IHNpemUgIT09ICdkZWZhdWx0JyxcbiAgICAnay1mbHVpZCc6IGZsdWlkLFxufTtcblxubGV0IGhhc1ZhbHVlID0gdmFsdWUgIT0gbnVsbCAmJiAoIW11bHRpcGxlICYmIHZhbHVlICE9PSAnJyB8fCBtdWx0aXBsZSAmJiB2YWx1ZS5sZW5ndGgpO1xuY29uc3QgaXNHcm91cCA9IEFycmF5LmlzQXJyYXkoc2VsZi5nZXQoJ2RhdGEuMC5kYXRhJykpO1xuXG5sZXQgbGFiZWwgPSBpc1N0cmluZ09yTnVtYmVyKHZhbHVlKSA/IHZhbHVlIDogbnVsbDtcbmxldCBsYWJlbHMgPSBbXTtcblxuY29uc3QgaGFuZGxlUHJvcHMgPSBwcm9wcyA9PiB7XG4gICAgbGV0IGFjdGl2ZSA9IGZhbHNlO1xuICAgIGxldCB2YWxpZCA9IGZhbHNlO1xuXG4gICAgaWYgKCFtdWx0aXBsZSkge1xuICAgICAgICBpZiAocHJvcHMudmFsdWUgPT09IHZhbHVlKSB7XG4gICAgICAgICAgICAvLyBzZXQgbGFiZWxcbiAgICAgICAgICAgIGxhYmVsID0gcHJvcHMubGFiZWw7XG4gICAgICAgICAgICBhY3RpdmUgPSB0cnVlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICAgIGNvbnN0IGluZGV4ID0gdmFsdWUuaW5kZXhPZihwcm9wcy52YWx1ZSk7XG4gICAgICAgIGlmICh+aW5kZXgpIHtcbiAgICAgICAgICAgIC8vIGtlZXAgb3JkZXIgY29uc2lzdGVudFxuICAgICAgICAgICAgbGFiZWxzW2luZGV4XSA9IHByb3BzLmxhYmVsO1xuICAgICAgICAgICAgYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgbGV0IHRtcDtcbiAgICBpZiAoXG4gICAgICAgICFmaWx0ZXJhYmxlICYmIFxuICAgICAgICBwcm9wcy5sYWJlbCB8fCBcbiAgICAgICAga2V5d29yZHMgPT0gbnVsbCB8fCBcbiAgICAgICAgfnByb3BzLmxhYmVsLnRvTG93ZXJDYXNlKCkuaW5kZXhPZigodG1wID0ga2V5d29yZHMudG9Mb3dlckNhc2UoKSkpIHx8IFxuICAgICAgICAoXG4gICAgICAgICAgICBpc1N0cmluZ09yTnVtYmVyKHByb3BzLnZhbHVlKSAmJiBcbiAgICAgICAgICAgIH5TdHJpbmcocHJvcHMudmFsdWUpLnRvTG93ZXJDYXNlKCkuaW5kZXhPZih0bXApXG4gICAgICAgIClcbiAgICApIHtcbiAgICAgICAgdmFsaWQgPSB0cnVlOyBcbiAgICB9XG5cbiAgICByZXR1cm4ge2FjdGl2ZSwgdmFsaWR9O1xufTtcblxuY29uc3QgT3B0aW9ucyA9IHByb3BzID0+IHtcbiAgICBjb25zdCBkYXRhID0gcHJvcHMuZGF0YTtcbiAgICBjb25zdCByZXQgPSBbXTtcbiAgICBkYXRhLmZvckVhY2goKGl0ZW0sIGluZGV4KSA9PiB7XG4gICAgICAgIC8vIGRlcHJlY2F0ZSB0ZXh0LCB1c2UgbGFiZWwgaW5zdGVhZCBvZlxuICAgICAgICBpZiAoaXRlbS50ZXh0KSBpdGVtLmxhYmVsID0gaXRlbS50ZXh0O1xuICAgICAgICBcbiAgICAgICAgY29uc3Qge3ZhbGlkLCBhY3RpdmV9ID0gaGFuZGxlUHJvcHMoaXRlbSk7XG4gICAgICAgIGlmICh2YWxpZCkge1xuICAgICAgICAgICAgcmV0LnB1c2goXG4gICAgICAgICAgICAgICAgaChEcm9wZG93bkl0ZW0sIHsnZXYtc2VsZWN0JzogZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW3NlbGYuX29uU2VsZWN0LmJpbmQoc2VsZiwgaXRlbS52YWx1ZSkgXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKSwgJ2Rpc2FibGVkJzogZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW2l0ZW0uZGlzYWJsZWQgXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKSwgJ2NsYXNzTmFtZSc6IF9jbGFzc05hbWUoZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW3snay1hY3RpdmUnOiBhY3RpdmV9IF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcykpLCAnaGlkZU9uU2VsZWN0JzogZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gWyFtdWx0aXBsZSBdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpLCAnY2hpbGRyZW4nOiBmdW5jdGlvbigpIHt0cnkge3JldHVybiBbaXRlbS50ZW1wbGF0ZSA/IGl0ZW0udGVtcGxhdGUoaXRlbSwgaW5kZXgpIDogaXRlbS5sYWJlbCBdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpLCAnX2NvbnRleHQnOiAkdGhpc30pXG4gICAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gcmV0O1xufVxuXG5jb25zdCBPcHRpb25zVk5vZGVzID0gKHtjaGlsZHJlbn0pID0+IHtcbiAgICByZXR1cm4gX191Lm1hcChjaGlsZHJlbiA/IChBcnJheS5pc0FycmF5KGNoaWxkcmVuKSA/IGNoaWxkcmVuIDogW2NoaWxkcmVuXSkgOiBjaGlsZHJlbiwgdk5vZGUgPT4ge1xuICAgICAgICBpZiAodk5vZGUudGFnID09PSBPcHRpb24pIHtcbiAgICAgICAgICAgIGxldCBwcm9wcyA9IHZOb2RlLnByb3BzO1xuICAgICAgICAgICAgcHJvcHMgPSB7XG4gICAgICAgICAgICAgICAgLi4ucHJvcHMsIFxuICAgICAgICAgICAgICAgICdldi1zZWxlY3QnOiBzZWxmLl9vblNlbGVjdC5iaW5kKHNlbGYsIHByb3BzLnZhbHVlKSxcbiAgICAgICAgICAgICAgICBoaWRlT25TZWxlY3Q6ICFtdWx0aXBsZSxcbiAgICAgICAgICAgICAgICBsYWJlbDogcHJvcHMubGFiZWwgfHwgZ2V0VGV4dEJ5Q2hpbGRyZW4ocHJvcHMuY2hpbGRyZW4pLFxuICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBwcm9wcy5jaGlsZHJlbiB8fCBwcm9wcy5sYWJlbCBcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBjb25zdCB7YWN0aXZlLCB2YWxpZH0gPSBoYW5kbGVQcm9wcyhwcm9wcyk7XG4gICAgICAgICAgICBpZiAoIXZhbGlkKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGhjKCcnKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcHJvcHMuY2xhc3NOYW1lID0gX2NsYXNzTmFtZSh7XG4gICAgICAgICAgICAgICAgICAgIFtwcm9wcy5jbGFzc05hbWVdOiBwcm9wcy5jbGFzc05hbWUsXG4gICAgICAgICAgICAgICAgICAgICdrLWFjdGl2ZSc6IGFjdGl2ZSxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gcmV0dXJuIHRoZSBjbG9uZWQgdk5vZGVcbiAgICAgICAgICAgIHJldHVybiBoKE9wdGlvbiwgcHJvcHMpO1xuICAgICAgICB9IGVsc2UgaWYgKHZOb2RlLnRhZyA9PT0gT3B0aW9uR3JvdXApIHtcbiAgICAgICAgICAgIGxldCBwcm9wcyA9IHZOb2RlLnByb3BzO1xuICAgICAgICAgICAgcHJvcHMgPSB7XG4gICAgICAgICAgICAgICAgLi4ucHJvcHMsXG4gICAgICAgICAgICAgICAgY2hpbGRyZW46IGgoT3B0aW9uc1ZOb2RlcywgeydjaGlsZHJlbic6IGZ1bmN0aW9uKCkge3RyeSB7cmV0dXJuIFtwcm9wcy5jaGlsZHJlbiBdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpLCAnX2NvbnRleHQnOiAkdGhpc30pXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgcmV0dXJuIGgoT3B0aW9uR3JvdXAsIHByb3BzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB2Tm9kZTtcbiAgICB9KTsgXG59IFxuXG5jb25zdCBNZW51ID0gKFxuICAgIGgoRHJvcGRvd25NZW51LCB7J2V2LSRjaGFuZ2VkOnNob3cnOiBmdW5jdGlvbigpIHt0cnkge3JldHVybiBbc2VsZi5fcG9zaXRpb24gXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKSwgJ2NsYXNzTmFtZSc6ICdrLXNlbGVjdC1kcm9wZG93bicsICdldi0kY2hhbmdlOnNob3cnOiBmdW5jdGlvbigpIHt0cnkge3JldHVybiBbc2VsZi5fb25DaGFuZ2VTaG93IF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcyksICdjaGlsZHJlbic6IFtmdW5jdGlvbigpIHt0cnkge3JldHVybiBbIWlzR3JvdXAgXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKSA/IGgoT3B0aW9ucywgeydkYXRhJzogZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW2RhdGEgXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKSwgJ2NoaWxkcmVuJzogbnVsbCwgJ19jb250ZXh0JzogJHRoaXN9KSA6IF9WZHQudXRpbHMubWFwKGZ1bmN0aW9uKCkge3RyeSB7cmV0dXJuIFtkYXRhIF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcyksIGZ1bmN0aW9uKHZhbHVlLCBrZXkpIHtcbnJldHVybiBoKE9wdGlvbkdyb3VwLCB7J2xhYmVsJzogZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW3ZhbHVlLmxhYmVsIF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcyksICdjaGlsZHJlbic6IGgoT3B0aW9ucywgeydkYXRhJzogZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW3ZhbHVlLmRhdGEgXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKSwgJ2NoaWxkcmVuJzogbnVsbCwgJ19jb250ZXh0JzogJHRoaXN9KSwgJ19jb250ZXh0JzogJHRoaXN9KTtcbn0sIHRoaXMpLCBoKE9wdGlvbnNWTm9kZXMsIHsnY2hpbGRyZW4nOiBmdW5jdGlvbigpIHt0cnkge3JldHVybiBbY2hpbGRyZW4gXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKSwgJ19jb250ZXh0JzogJHRoaXN9KV0sICdfY29udGV4dCc6ICR0aGlzfSwgbnVsbCwgbnVsbCwgbnVsbCwgZnVuY3Rpb24oaSkge3dpZGdldHNbJ21lbnUnXSA9IGl9KVxuKTtcblxuLy8gaWYgdGhlIHZhbHVlIGlzIG5vdCBpbiBvcHRpb25zLCB0aGVuIHNldCBoYXNWYWx1ZSB0byBmYWxzZVxuaWYgKGhhc1ZhbHVlICYmICFsYWJlbCAmJiAhbGFiZWxzLmxlbmd0aCkge1xuICAgIGhhc1ZhbHVlID0gZmFsc2U7XG59XG5cbnJldHVybiBoKCdkaXYnLCB7J3N0eWxlJzogZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW3dpZHRoICE9IG51bGwgPyBhZGRTdHlsZShzdHlsZSwge3dpZHRoOiBgJHt3aWR0aH1weGB9KSA6IHN0eWxlIF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcyksICd0YWJpbmRleCc6IGZ1bmN0aW9uKCkge3RyeSB7cmV0dXJuIFtkaXNhYmxlZCA/IFwiLTFcIiA6IFwiMFwiIF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcyksICdldi1rZXlwcmVzcyc6IGZ1bmN0aW9uKCkge3RyeSB7cmV0dXJuIFtzZWxmLl9vbktleXByZXNzIF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcyksICdldi1rZXlkb3duJzogZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW3NlbGYuX29uS2V5ZG93biBdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpfSwgaChEcm9wZG93biwgeydwb3NpdGlvbic6IGZ1bmN0aW9uKCkge3RyeSB7cmV0dXJuIFt7bXk6ICdsZWZ0IHRvcCcsIGF0OiAnbGVmdCBib3R0b20nfSBdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpLCAndHJpZ2dlcic6ICdjbGljaycsICdkaXNhYmxlZCc6IGZ1bmN0aW9uKCkge3RyeSB7cmV0dXJuIFtkaXNhYmxlZCBdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpLCAnY2hpbGRyZW4nOiBbaCgnZGl2Jywgeydldi1jbGljayc6IGZ1bmN0aW9uKCkge3RyeSB7cmV0dXJuIFtzZWxmLl9mb2N1c0lucHV0IF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcyksICd0YWJpbmRleCc6ICctMSd9LCBbaCgnaW5wdXQnLCB7J3R5cGUnOiAnaGlkZGVuJywgJ3ZhbHVlJzogZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW3ZhbHVlIF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcyksICduYW1lJzogZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW25hbWUgXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKX0pLCBmdW5jdGlvbigpIHt0cnkge3JldHVybiBbIW11bHRpcGxlICYmIGZpbHRlcmFibGUgXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKSA/IGgoSW5wdXQsIHsndmFsdWUnOiBmdW5jdGlvbigpIHt0cnkge3JldHVybiBba2V5d29yZHMgPT0gbnVsbCA/IGxhYmVsIDoga2V5d29yZHMgXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKSwgJ2V2LWlucHV0JzogZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW3NlbGYuX29uU2VhcmNoIF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcyksICdldi1ibHVyJzogZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW3NlbGYuX29uQmx1ciBdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpLCAnZXYtZm9jdXMnOiBmdW5jdGlvbigpIHt0cnkge3JldHVybiBbc2VsZi5fc2VsZWN0SW5wdXQgXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKSwgJ2Rpc2FibGVkJzogZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW2Rpc2FibGVkIF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcyksICdwbGFjZWhvbGRlcic6IGZ1bmN0aW9uKCkge3RyeSB7cmV0dXJuIFtfcGxhY2Vob2xkZXIgXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKSwgJ3NpemUnOiBmdW5jdGlvbigpIHt0cnkge3JldHVybiBbc2l6ZSBdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpLCAnZmx1aWQnOiBmdW5jdGlvbigpIHt0cnkge3JldHVybiBbdHJ1ZV1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcyksICdjaGlsZHJlbic6IG51bGwsICdfY29udGV4dCc6ICR0aGlzfSwgbnVsbCwgbnVsbCwgbnVsbCwgZnVuY3Rpb24oaSkge3dpZGdldHNbJ2lucHV0J10gPSBpfSkgOiBmdW5jdGlvbigpIHt0cnkge3JldHVybiBbIWZpbHRlcmFibGUgJiYgIWhhc1ZhbHVlIF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcykgPyBoKCdzcGFuJywgbnVsbCwgZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW19wbGFjZWhvbGRlciBdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpLCAnay1wbGFjZWhvbGRlciBjLWVsbGlwc2lzJykgOiBmdW5jdGlvbigpIHt0cnkge3JldHVybiBbIW11bHRpcGxlIF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcykgPyBoKCdzcGFuJywgbnVsbCwgZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW2xhYmVsIF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcyksICdrLXZhbHVlIGMtZWxsaXBzaXMnKSA6IGgoQW5pbWF0ZSwgeydhOnRhZyc6ICdzcGFuJywgJ2E6ZGlzYWJsZWQnOiBmdW5jdGlvbigpIHt0cnkge3JldHVybiBbdHJ1ZV1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcyksICdjbGFzc05hbWUnOiAnay12YWx1ZXMnLCAnY2hpbGRyZW4nOiBbX1ZkdC51dGlscy5tYXAoZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW2xhYmVscyBdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpLCBmdW5jdGlvbihpdGVtLCBpbmRleCkge1xucmV0dXJuIGgoQW5pbWF0ZSwgeydhOnRhZyc6ICdzcGFuJywgJ2NsYXNzTmFtZSc6ICdrLXRhZycsICdrZXknOiBmdW5jdGlvbigpIHt0cnkge3JldHVybiBbdmFsdWVbaW5kZXhdIF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcyksICdhOnRyYW5zaXRpb24nOiAnZmFkZScsICdjaGlsZHJlbic6IFtoKCdzcGFuJywgbnVsbCwgZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW2l0ZW0gXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKSwgJ2stdGV4dCcpLCBoKCdpJywgeydldi1jbGljayc6IGZ1bmN0aW9uKCkge3RyeSB7cmV0dXJuIFtzZWxmLl9kZWxldGUuYmluZChzZWxmLCB2YWx1ZVtpbmRleF0pIF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcyl9LCBudWxsLCAnay1pY29uIGlvbi1pb3MtY2xvc2UtZW1wdHknKV0sICdfY29udGV4dCc6ICR0aGlzfSk7XG59LCB0aGlzKSwgZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW2ZpbHRlcmFibGUgXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKSA/IGgoSW5wdXQsIHsndmFsdWUnOiBmdW5jdGlvbigpIHt0cnkge3JldHVybiBba2V5d29yZHMgXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKSwgJ2V2LWlucHV0JzogZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW3NlbGYuX29uU2VhcmNoIF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcyksICdldi1ibHVyJzogZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW3NlbGYuX29uQmx1ciBdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpLCAnZXYtZm9jdXMnOiBmdW5jdGlvbigpIHt0cnkge3JldHVybiBbc2VsZi5fb25Gb2N1cyBdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpLCAnZGlzYWJsZWQnOiBmdW5jdGlvbigpIHt0cnkge3JldHVybiBbZGlzYWJsZWQgXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKSwgJ3BsYWNlaG9sZGVyJzogZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gWyFoYXNWYWx1ZSA/IF9wbGFjZWhvbGRlciA6ICcnIF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcyksICdhdXRvV2lkdGgnOiBmdW5jdGlvbigpIHt0cnkge3JldHVybiBbdHJ1ZV1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcyksICdzaXplJzogZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW3NpemUgXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKSwgJ2NoaWxkcmVuJzogbnVsbCwgJ19jb250ZXh0JzogJHRoaXN9LCBudWxsLCBudWxsLCBudWxsLCBmdW5jdGlvbihpKSB7d2lkZ2V0c1snaW5wdXQnXSA9IGl9KSA6IHVuZGVmaW5lZF0sICdfY29udGV4dCc6ICR0aGlzfSksIGgoJ3NwYW4nLCBudWxsLCBbZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW2NsZWFyYWJsZSBdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpID8gaCgnaScsIHsnZXYtY2xpY2snOiBmdW5jdGlvbigpIHt0cnkge3JldHVybiBbc2VsZi5fb25DbGVhciBdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpfSwgbnVsbCwgX2NsYXNzTmFtZShmdW5jdGlvbigpIHt0cnkge3JldHVybiBbe1wiay1jbGVhciBpb24taW9zLWNsb3NlXCI6IHRydWUsIFwiay1zaG93XCI6IGhhc1ZhbHVlfSBdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpKSkgOiB1bmRlZmluZWQsIGgoJ2knLCBudWxsLCBudWxsLCAnay1hcnJvdyBpb24tYXJyb3ctZG93bi1iJyldLCAnay1zdWZmaXgnKV0sICdrLXdyYXBwZXInLCBudWxsLCBmdW5jdGlvbihpKSB7d2lkZ2V0c1snd3JhcHBlciddID0gaX0pLCBmdW5jdGlvbigpIHt0cnkge3JldHVybiBbTWVudSBcbiAgICBdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpXSwgJ19jb250ZXh0JzogJHRoaXN9LCBudWxsLCBudWxsLCBudWxsLCBmdW5jdGlvbihpKSB7d2lkZ2V0c1snZHJvcGRvd24nXSA9IGl9KSwgX2NsYXNzTmFtZShmdW5jdGlvbigpIHt0cnkge3JldHVybiBbey4uLmNsYXNzTmFtZU9iaiwgJ2stYWN0aXZlJzogaGFzVmFsdWV9IF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcykpKVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvc2VsZWN0L2luZGV4LnZkdCIsImltcG9ydCBJbnRhY3QgZnJvbSAnaW50YWN0JztcbmltcG9ydCB7RHJvcGRvd25JdGVtfSBmcm9tICcuLi9kcm9wZG93bic7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE9wdGlvbiBleHRlbmRzIERyb3Bkb3duSXRlbSB7XG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvc2VsZWN0L29wdGlvbi5qcyIsImltcG9ydCBJbnRhY3QgZnJvbSAnaW50YWN0JztcbmltcG9ydCB0ZW1wbGF0ZSBmcm9tICcuL2luZGV4LnZkdCc7XG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uL2xheW91dCc7XG5pbXBvcnQgJy4vaW5kZXguc3R5bCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgTGF5b3V0IHtcbiAgICBASW50YWN0LnRlbXBsYXRlKClcbiAgICBzdGF0aWMgdGVtcGxhdGUgPSB0ZW1wbGF0ZTtcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NpdGUvc3JjL3BhZ2VzL2Rlc2lnbi9pbmRleC5qcyIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG4gICAgaWYobW9kdWxlLmhvdCkge1xuICAgICAgLy8gMTUyNzc1NDM5MzQ0OVxuICAgICAgdmFyIGNzc1JlbG9hZCA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1ob3QtbG9hZGVyL2hvdE1vZHVsZVJlcGxhY2VtZW50LmpzXCIpKG1vZHVsZS5pZCwge1wiZmlsZU1hcFwiOlwie2ZpbGVOYW1lfVwifSk7XG4gICAgICBtb2R1bGUuaG90LmRpc3Bvc2UoY3NzUmVsb2FkKTtcbiAgICAgIG1vZHVsZS5ob3QuYWNjZXB0KHVuZGVmaW5lZCwgY3NzUmVsb2FkKTtcbiAgICB9XG4gIFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc2l0ZS9zcmMvcGFnZXMvZGVzaWduL2luZGV4LnN0eWxcbi8vIG1vZHVsZSBpZCA9IC4vc2l0ZS9zcmMvcGFnZXMvZGVzaWduL2luZGV4LnN0eWxcbi8vIG1vZHVsZSBjaHVua3MgPSAzIiwiXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihvYmosIF9WZHQsIGJsb2NrcywgJGNhbGxlZSkge1xuX1ZkdCB8fCAoX1ZkdCA9IFZkdCk7XG5vYmogfHwgKG9iaiA9IHt9KTtcbmJsb2NrcyB8fCAoYmxvY2tzID0ge30pO1xudmFyIGggPSBfVmR0Lm1pc3MuaCwgaGMgPSBfVmR0Lm1pc3MuaGMsIGh1ID0gX1ZkdC5taXNzLmh1LCB3aWRnZXRzID0gdGhpcyAmJiB0aGlzLndpZGdldHMgfHwge30sIF9ibG9ja3MgPSB7fSwgX19ibG9ja3MgPSB7fSxcbl9fdSA9IF9WZHQudXRpbHMsIGV4dGVuZCA9IF9fdS5leHRlbmQsIF9lID0gX191LmVycm9yLCBfY2xhc3NOYW1lID0gX191LmNsYXNzTmFtZSxcbl9fbyA9IF9fdS5PcHRpb25zLCBfZ2V0TW9kZWwgPSBfX28uZ2V0TW9kZWwsIF9zZXRNb2RlbCA9IF9fby5zZXRNb2RlbCxcbl9zZXRDaGVja2JveE1vZGVsID0gX191LnNldENoZWNrYm94TW9kZWwsIF9kZXRlY3RDaGVja2JveENoZWNrZWQgPSBfX3UuZGV0ZWN0Q2hlY2tib3hDaGVja2VkLFxuX3NldFNlbGVjdE1vZGVsID0gX191LnNldFNlbGVjdE1vZGVsLFxuc2VsZiA9IHRoaXMuZGF0YSwgJHRoaXMgPSB0aGlzLCBzY29wZSA9IG9iaiwgQW5pbWF0ZSA9IHNlbGYgJiYgc2VsZi5BbmltYXRlLCBwYXJlbnQgPSAoJGNhbGxlZSB8fCB7fSkuX3N1cGVyXG5yZXR1cm4gKGZ1bmN0aW9uKCkge1xuICAgIHZhciBfb2JqID0geydjbGFzc05hbWUnOiAnZGVzaWduLXBhZ2UnLCAnY2hpbGRyZW4nOiBudWxsfTtcbiAgICBpZiAoX29iai5oYXNPd25Qcm9wZXJ0eShcImFyZ3VtZW50c1wiKSkge1xuICAgICAgICBleHRlbmQoX29iaiwgX29iai5hcmd1bWVudHMgPT09IHRydWUgPyBvYmogOiBfb2JqLmFyZ3VtZW50cyk7XG4gICAgICAgIGRlbGV0ZSBfb2JqLmFyZ3VtZW50cztcbiAgICB9XG4gICAgcmV0dXJuIHBhcmVudC5jYWxsKHRoaXMsIF9vYmosIF9WZHQsIGZ1bmN0aW9uKGJsb2Nrcykge1xuICAgIHZhciBfYmxvY2tzID0ge30sIF9fYmxvY2tzID0gZXh0ZW5kKHt9LCBibG9ja3MpO1xuICAgIHJldHVybiAoKF9ibG9ja3NbXCJjb250ZW50XCJdID0gZnVuY3Rpb24ocGFyZW50KSB7cmV0dXJuIGgoJ3VsJywgbnVsbCwgX1ZkdC51dGlscy5tYXAoZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW0FycmF5LmFwcGx5KG51bGwsIHtsZW5ndGg6IDl9KSBdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpLCBmdW5jdGlvbih2YWx1ZSwga2V5KSB7XG5yZXR1cm4gaCgnbGknLCBudWxsLCBudWxsLCBfY2xhc3NOYW1lKGZ1bmN0aW9uKCkge3RyeSB7cmV0dXJuIFtcImNvbG9yIGNvbG9yXCIgKyBrZXkgXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKSkpO1xufSwgdGhpcykpO30pICYmIChfX2Jsb2Nrc1tcImNvbnRlbnRcIl0gPSBmdW5jdGlvbihwYXJlbnQpIHtcbnZhciBzZWxmID0gdGhpcztcbnJldHVybiBibG9ja3NbXCJjb250ZW50XCJdID8gYmxvY2tzW1wiY29udGVudFwiXS5jYWxsKHRoaXMsIGZ1bmN0aW9uKCkge1xucmV0dXJuIF9ibG9ja3NbXCJjb250ZW50XCJdLmNhbGwoc2VsZiwgcGFyZW50KTtcbn0pIDogX2Jsb2Nrc1tcImNvbnRlbnRcIl0uY2FsbCh0aGlzLCBwYXJlbnQpO1xufSksIF9fYmxvY2tzKTtcbn0uY2FsbCh0aGlzLCBibG9ja3MpLCBwYXJlbnQpXG59KS5jYWxsKHRoaXMpXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc2l0ZS9zcmMvcGFnZXMvZGVzaWduL2luZGV4LnZkdCIsImltcG9ydCBJbnRhY3QgZnJvbSAnaW50YWN0JztcbmltcG9ydCB0ZW1wbGF0ZSBmcm9tICcuL2xheW91dC52ZHQnO1xuaW1wb3J0ICcuL2xheW91dC5zdHlsJztcblxubGV0IHRoZW1lO1xuaWYgKHByb2Nlc3MuYnJvd3Nlcikge1xuICAgIHRoZW1lID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3RoZW1lJykgfHwgJ2twYyc7XG5cbiAgICBmdW5jdGlvbiBjaGFuZ2VUaGVtZShuZXdUaGVtZSwgb2xkVGhlbWUpIHtcbiAgICAgICAgY29uc3QgbGluayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2xpbmtbcmVsPXN0eWxlc2hlZXRdJyk7XG4gICAgICAgIGxpbmsuaHJlZiA9IGxpbmsuaHJlZi5yZXBsYWNlKGB0aGVtZS0ke29sZFRoZW1lfWAsIGB0aGVtZS0ke25ld1RoZW1lfWApO1xuICAgICAgICB0aGVtZSA9IG5ld1RoZW1lO1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndGhlbWUnLCBuZXdUaGVtZSk7XG4gICAgfVxuICAgIGlmICh0aGVtZSAhPT0gJ2twYycpIHtcbiAgICAgICAgY2hhbmdlVGhlbWUodGhlbWUsICdrcGMnKTtcbiAgICB9XG59IGVsc2Uge1xuICAgIHRoZW1lID0gJ2twYyc7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgSW50YWN0IHtcbiAgICBASW50YWN0LnRlbXBsYXRlKClcbiAgICBzdGF0aWMgdGVtcGxhdGUgPSB0ZW1wbGF0ZTtcblxuICAgIGRlZmF1bHRzKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdGhlbWU6IHRoZW1lLFxuICAgICAgICB9O1xuICAgIH1cblxuICAgIF9pbml0KCkge1xuICAgICAgICB0aGlzLm9uKCckY2hhbmdlOnRoZW1lJywgKGMsIHYsIG8pID0+IHtcbiAgICAgICAgICAgIGNoYW5nZVRoZW1lKHYsIG8pO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBfbW91bnQoKSB7XG4gICAgICAgIHRoaXMuYm9yZGVyID0gdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ib3JkZXInKTtcbiAgICAgICAgdGhpcy5fdXBkYXRlQm9yZGVyKCk7XG4gICAgfVxuXG4gICAgX3VwZGF0ZUJvcmRlcigpIHtcbiAgICAgICAgY29uc3QgbmF2ID0gdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hY3RpdmUnKTtcbiAgICAgICAgbGV0IHdpZHRoID0gMDtcbiAgICAgICAgbGV0IGxlZnQgPSAwO1xuICAgICAgICBpZiAobmF2KSB7XG4gICAgICAgICAgICBsZWZ0ID0gbmF2Lm9mZnNldExlZnQ7XG4gICAgICAgICAgICB3aWR0aCA9IG5hdi5vZmZzZXRXaWR0aDtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmJvcmRlci5jbGFzc0xpc3QuYWRkKCd0cmFuc2l0aW9uJyk7XG4gICAgICAgIHRoaXMuYm9yZGVyLnN0eWxlLndpZHRoID0gYCR7d2lkdGh9cHhgO1xuICAgICAgICB0aGlzLmJvcmRlci5zdHlsZS5sZWZ0ID0gYCR7bGVmdH1weGA7XG4gICAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc2l0ZS9zcmMvcGFnZXMvbGF5b3V0LmpzIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cbiAgICBpZihtb2R1bGUuaG90KSB7XG4gICAgICAvLyAxNTI3NzU0Mzk0MjI1XG4gICAgICB2YXIgY3NzUmVsb2FkID0gcmVxdWlyZShcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWhvdC1sb2FkZXIvaG90TW9kdWxlUmVwbGFjZW1lbnQuanNcIikobW9kdWxlLmlkLCB7XCJmaWxlTWFwXCI6XCJ7ZmlsZU5hbWV9XCJ9KTtcbiAgICAgIG1vZHVsZS5ob3QuZGlzcG9zZShjc3NSZWxvYWQpO1xuICAgICAgbW9kdWxlLmhvdC5hY2NlcHQodW5kZWZpbmVkLCBjc3NSZWxvYWQpO1xuICAgIH1cbiAgXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zaXRlL3NyYy9wYWdlcy9sYXlvdXQuc3R5bFxuLy8gbW9kdWxlIGlkID0gLi9zaXRlL3NyYy9wYWdlcy9sYXlvdXQuc3R5bFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMiLCJpbXBvcnQgTGluayBmcm9tICdrcGMvY29tcG9uZW50cy9saW5rJztpbXBvcnQge1NlbGVjdCwgT3B0aW9ufSBmcm9tICdrcGMvY29tcG9uZW50cy9zZWxlY3QnO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24ob2JqLCBfVmR0LCBibG9ja3MsICRjYWxsZWUpIHtcbl9WZHQgfHwgKF9WZHQgPSBWZHQpO1xub2JqIHx8IChvYmogPSB7fSk7XG5ibG9ja3MgfHwgKGJsb2NrcyA9IHt9KTtcbnZhciBoID0gX1ZkdC5taXNzLmgsIGhjID0gX1ZkdC5taXNzLmhjLCBodSA9IF9WZHQubWlzcy5odSwgd2lkZ2V0cyA9IHRoaXMgJiYgdGhpcy53aWRnZXRzIHx8IHt9LCBfYmxvY2tzID0ge30sIF9fYmxvY2tzID0ge30sXG5fX3UgPSBfVmR0LnV0aWxzLCBleHRlbmQgPSBfX3UuZXh0ZW5kLCBfZSA9IF9fdS5lcnJvciwgX2NsYXNzTmFtZSA9IF9fdS5jbGFzc05hbWUsXG5fX28gPSBfX3UuT3B0aW9ucywgX2dldE1vZGVsID0gX19vLmdldE1vZGVsLCBfc2V0TW9kZWwgPSBfX28uc2V0TW9kZWwsXG5fc2V0Q2hlY2tib3hNb2RlbCA9IF9fdS5zZXRDaGVja2JveE1vZGVsLCBfZGV0ZWN0Q2hlY2tib3hDaGVja2VkID0gX191LmRldGVjdENoZWNrYm94Q2hlY2tlZCxcbl9zZXRTZWxlY3RNb2RlbCA9IF9fdS5zZXRTZWxlY3RNb2RlbCxcbnNlbGYgPSB0aGlzLmRhdGEsICR0aGlzID0gdGhpcywgc2NvcGUgPSBvYmosIEFuaW1hdGUgPSBzZWxmICYmIHNlbGYuQW5pbWF0ZSwgcGFyZW50ID0gKCRjYWxsZWUgfHwge30pLl9zdXBlclxuXG5cblxuY29uc3QgbmF2ID0gW1xuICAgIHtcbiAgICAgICAgdGl0bGU6ICfmlZnnqIsnLFxuICAgICAgICBocmVmOiAnL2RvY3MvZ2V0dGluZy1zdGFydGVkLycsXG4gICAgICAgIGluZGV4OiAnZG9jdW1lbnQnLFxuICAgIH0sXG4gICAgLyogeyAqL1xuICAgICAgICAvKiB0aXRsZTogJ+iuvuiuoeivreiogCcsICovXG4gICAgICAgIC8qIGhyZWY6ICcvZGVzaWduJywgKi9cbiAgICAvKiB9LCAqL1xuICAgIC8qIHsgKi9cbiAgICAgICAgLyogdGl0bGU6ICdCbG9nJywgKi9cbiAgICAgICAgLyogaHJlZjogJy9kb2NzL2Jsb2cvdGVzdC8nLCAqL1xuICAgICAgICAvKiBpbmRleDogJ2Jsb2cnLCAqL1xuICAgIC8qIH0sICovXG4gICAgLyogeyAqL1xuICAgICAgICAvKiB0aXRsZTogJ0FQSScsICovXG4gICAgICAgIC8qIGhyZWY6ICdhcGknICovXG4gICAgLyogfSwgKi9cbiAgICAvLyB7XG4gICAgICAgIC8vIHRpdGxlOiAn56S65L6LJyxcbiAgICAgICAgLy8gaHJlZjogJ2V4YW1wbGVzJ1xuICAgIC8vIH1cbl07XG5cbnJldHVybiBoKCdkaXYnLCBudWxsLCBbaCgnZGl2JywgbnVsbCwgaCgnaGVhZGVyJywgbnVsbCwgKF9ibG9ja3NbXCJoZWFkZXJcIl0gPSBmdW5jdGlvbihwYXJlbnQpIHtyZXR1cm4gW2goTGluaywgeydjbGFzc05hbWUnOiAnbG9nbycsICdocmVmJzogJy8nLCAnY2hpbGRyZW4nOiAnS1BDJywgJ19jb250ZXh0JzogJHRoaXN9KSwgaCgnZGl2JywgbnVsbCwgW2goJ25hdicsIG51bGwsIFtfVmR0LnV0aWxzLm1hcChmdW5jdGlvbigpIHt0cnkge3JldHVybiBbbmF2IF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcyksIGZ1bmN0aW9uKHZhbHVlLCBrZXkpIHtcbnJldHVybiBoKExpbmssIHsnY2xhc3NOYW1lJzogX2NsYXNzTmFtZShmdW5jdGlvbigpIHt0cnkge3JldHVybiBbe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY3RpdmU6IHZhbHVlLmluZGV4ID09PSBzY29wZS5uYXZJbmRleFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKSksICdocmVmJzogZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW2Ake3Byb2Nlc3MuVVJMX1BSRUZJWH0ke3ZhbHVlLmhyZWZ9YCBdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpLCAnY2hpbGRyZW4nOiBmdW5jdGlvbigpIHt0cnkge3JldHVybiBbdmFsdWUudGl0bGUgXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKSwgJ19jb250ZXh0JzogJHRoaXN9KTtcbn0sIHRoaXMpLCBoKCdkaXYnLCBudWxsLCBudWxsLCAnYm9yZGVyJyldKSwgaCgnc3BhbicsIG51bGwsICfliIfmjaLkuLvpopjvvJonLCAnbGFiZWwnKSwgaChTZWxlY3QsIHsndi1tb2RlbCc6ICd0aGVtZScsICd3aWR0aCc6ICcxMDAnLCAnY2hpbGRyZW4nOiBbaChPcHRpb24sIHsndmFsdWUnOiAna3BjJywgJ2NoaWxkcmVuJzogJ2RlZmF1bHQnLCAnX2NvbnRleHQnOiAkdGhpc30pLCBoKE9wdGlvbiwgeyd2YWx1ZSc6ICdrc3l1bicsICdjaGlsZHJlbic6ICdrc3l1bicsICdfY29udGV4dCc6ICR0aGlzfSldLCAnX2NvbnRleHQnOiAkdGhpcywgdmFsdWU6IF9nZXRNb2RlbChzZWxmLCAndGhlbWUnKSwgJ2V2LSRjaGFuZ2U6dmFsdWUnOiBmdW5jdGlvbihfX2MsIF9fbikgeyBfc2V0TW9kZWwoc2VsZiwgJ3RoZW1lJywgX19uLCAkdGhpcykgfX0pXSwgJ3JpZ2h0JyldO30pICYmIChfX2Jsb2Nrc1tcImhlYWRlclwiXSA9IGZ1bmN0aW9uKHBhcmVudCkge1xudmFyIHNlbGYgPSB0aGlzO1xucmV0dXJuIGJsb2Nrc1tcImhlYWRlclwiXSA/IGJsb2Nrc1tcImhlYWRlclwiXS5jYWxsKHRoaXMsIGZ1bmN0aW9uKCkge1xucmV0dXJuIF9ibG9ja3NbXCJoZWFkZXJcIl0uY2FsbChzZWxmLCBwYXJlbnQpO1xufSkgOiBfYmxvY2tzW1wiaGVhZGVyXCJdLmNhbGwodGhpcywgcGFyZW50KTtcbn0pICYmIF9fYmxvY2tzW1wiaGVhZGVyXCJdLmNhbGwodGhpcykpLCAnaGVhZGVyLXdyYXBwZXInKSwgaCgnZGl2JywgbnVsbCwgKF9ibG9ja3NbXCJjb250ZW50XCJdID0gZnVuY3Rpb24ocGFyZW50KSB7cmV0dXJuIG51bGw7fSkgJiYgKF9fYmxvY2tzW1wiY29udGVudFwiXSA9IGZ1bmN0aW9uKHBhcmVudCkge1xudmFyIHNlbGYgPSB0aGlzO1xucmV0dXJuIGJsb2Nrc1tcImNvbnRlbnRcIl0gPyBibG9ja3NbXCJjb250ZW50XCJdLmNhbGwodGhpcywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gX2Jsb2Nrc1tcImNvbnRlbnRcIl0uY2FsbChzZWxmLCBwYXJlbnQpO1xufSkgOiBfYmxvY2tzW1wiY29udGVudFwiXS5jYWxsKHRoaXMsIHBhcmVudCk7XG59KSAmJiBfX2Jsb2Nrc1tcImNvbnRlbnRcIl0uY2FsbCh0aGlzKSwgJ2NvbnRlbnQtd3JhcHBlcicsIG51bGwsIGZ1bmN0aW9uKGkpIHt3aWRnZXRzWyd3cmFwcGVyJ10gPSBpfSldLCBfY2xhc3NOYW1lKGZ1bmN0aW9uKCkge3RyeSB7cmV0dXJuIFt7J21haW4td3JhcHBlcic6IHRydWUsIFtzY29wZS5jbGFzc05hbWVdOiBzY29wZS5jbGFzc05hbWV9IF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcykpKVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NpdGUvc3JjL3BhZ2VzL2xheW91dC52ZHQiXSwic291cmNlUm9vdCI6IiJ9