require("source-map-support").install();
exports.ids = [2];
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
      // 1527576676833
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2Ryb3Bkb3duL2Ryb3Bkb3duLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvZHJvcGRvd24vaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9kcm9wZG93bi9pbmRleC5zdHlsIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvZHJvcGRvd24vaXRlbS5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2Ryb3Bkb3duL2l0ZW0udmR0Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvZHJvcGRvd24vbWVudS5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2Ryb3Bkb3duL21lbnUudmR0Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvaW5wdXQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9pbnB1dC9pbmRleC5zdHlsIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvaW5wdXQvaW5kZXgudmR0Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvbGluay9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2xpbmsvaW5kZXgudmR0Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvbW92ZVdyYXBwZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9tb3ZlV3JhcHBlci9wb3NpdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3NlbGVjdC9ncm91cC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3NlbGVjdC9ncm91cC52ZHQiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9zZWxlY3QvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9zZWxlY3QvaW5kZXguc3R5bCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3NlbGVjdC9pbmRleC52ZHQiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9zZWxlY3Qvb3B0aW9uLmpzIiwid2VicGFjazovLy8uL3NpdGUvc3JjL3BhZ2VzL2Rlc2lnbi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zaXRlL3NyYy9wYWdlcy9kZXNpZ24vaW5kZXguc3R5bCIsIndlYnBhY2s6Ly8vLi9zaXRlL3NyYy9wYWdlcy9kZXNpZ24vaW5kZXgudmR0Iiwid2VicGFjazovLy8uL3NpdGUvc3JjL3BhZ2VzL2xheW91dC5qcyIsIndlYnBhY2s6Ly8vLi9zaXRlL3NyYy9wYWdlcy9sYXlvdXQuc3R5bCIsIndlYnBhY2s6Ly8vLi9zaXRlL3NyYy9wYWdlcy9sYXlvdXQudmR0Il0sIm5hbWVzIjpbImgiLCJJbnRhY3QiLCJWZHQiLCJtaXNzIiwiRHJvcGRvd24iLCJ0ZW1wbGF0ZSIsImRhdGEiLCJnZXQiLCJkZWZhdWx0cyIsInRyaWdnZXIiLCJkaXNhYmxlZCIsIl9pbml0IiwiX3NhdmVPcmlnaW5hbEV2ZW50cyIsIm9uIiwia2VlcCIsImNoaWxkcmVuIiwiY2xhc3NOYW1lIiwicmVzdCIsIkFycmF5IiwiaXNBcnJheSIsIm9yaWdpblByb3BzIiwicHJvcHMiLCJoYXNTYXZlZCIsIl9oYXNTYXZlZCIsIl9ldkNsaWNrIiwiX2V2TW91c2VFbnRlciIsIl9ldk1vdXNlTGVhdmUiLCJzaG93IiwiYmluZCIsImhpZGUiLCJzZXQiLCJzaWxlbnQiLCJfbW91bnQiLCJzaWJsaW5ncyIsInBhcmVudFZOb2RlIiwiaW5kZXgiLCJpbmRleE9mIiwidk5vZGUiLCJtZW51IiwiZHJvcGRvd24iLCJmbiIsImUiLCJpc0ZvY3VzIiwiZm9jdXNJdGVtQnlJbmRleCIsImltbWVkaWF0ZWx5IiwiV3JhcHBlciIsImluVnVlIiwicG9zaXRpb24iLCJrZXkiLCJyZWYiLCJlbGVtZW50IiwiRHJvcGRvd25WdWVXcmFwcGVyIiwiX2NsYXNzTmFtZSIsInV0aWxzIiwiX1dyYXBwZXIiLCJmdW5jdGlvbmFsV3JhcHBlciIsIkRyb3Bkb3duTWVudSIsIkRyb3Bkb3duSXRlbSIsImhpZGVPblNlbGVjdCIsIl9pc0ZvY3VzIiwiYW5jZXN0b3IiLCJfZmluZEFuY2VzdG9yRHJvcGRvd25NZW51IiwicGFyZW50IiwiaXRlbXMiLCJwdXNoIiwiX29uQ2xpY2siLCJ0YWciLCJfb25Nb3VzZUVudGVyIiwiZm9jdXNJdGVtIiwiX29uTW91c2VMZWF2ZSIsInNlbGVjdCIsIl9pc1N1Yk1lbnUiLCJmb2N1cyIsImVsUmVjdCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsInBFbCIsInJlZnMiLCJwRWxSZWN0IiwiYm90dG9tT3ZlcmZsb3dEaXN0YW5jZSIsImJvdHRvbSIsInRvcE92ZXJmbG93RGlzdGFuY2UiLCJ0b3AiLCJzY3JvbGxUb3AiLCJ1bkZvY3VzIiwic2hvd01lbnVBbmRGb2N1cyIsImhpZGVNZW51IiwiaXNGaXJzdCIsIl9kZXN0cm95Iiwic3BsaWNlIiwicHJvcFR5cGVzIiwiQm9vbGVhbiIsIm9iaiIsIl9WZHQiLCJibG9ja3MiLCIkY2FsbGVlIiwiaGMiLCJodSIsIndpZGdldHMiLCJfYmxvY2tzIiwiX19ibG9ja3MiLCJfX3UiLCJleHRlbmQiLCJfZSIsImVycm9yIiwiX19vIiwiT3B0aW9ucyIsIl9nZXRNb2RlbCIsImdldE1vZGVsIiwiX3NldE1vZGVsIiwic2V0TW9kZWwiLCJfc2V0Q2hlY2tib3hNb2RlbCIsInNldENoZWNrYm94TW9kZWwiLCJfZGV0ZWN0Q2hlY2tib3hDaGVja2VkIiwiZGV0ZWN0Q2hlY2tib3hDaGVja2VkIiwiX3NldFNlbGVjdE1vZGVsIiwic2V0U2VsZWN0TW9kZWwiLCJzZWxmIiwiJHRoaXMiLCJzY29wZSIsIkFuaW1hdGUiLCJfc3VwZXIiLCJjbGFzc05hbWVPYmoiLCJjYWxsIiwidHJhbnNpdGlvbiIsInN1YkRyb3Bkb3ducyIsImZvY3VzSW5kZXgiLCJsb2NrZWQiLCJfZmluZFBhcmVudERyb3Bkb3duTWVudSIsIl9hZGREb2N1bWVudEV2ZW50cyIsImNsZWFyVGltZW91dCIsInRpbWVyIiwic2V0VGltZW91dCIsInRvZ2dsZSIsIm15IiwiYXQiLCJvZiIsInVzaW5nIiwiZmVlZGJhY2siLCJfb25TaG93IiwiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiX29uRG9jdW1lbnRDbGljayIsIl9vbktleWRvd24iLCJfcmVtb3ZlRG9jdW1lbnRFdmVudHMiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwidGFyZ2V0IiwiY29udGFpbnMiLCJfaXNDbGlja1N1Yk1lbnUiLCJfZHJvcGRvd24iLCJrZXlDb2RlIiwiX2ZvY3VzTmV4dEl0ZW0iLCJfZm9jdXNQcmV2SXRlbSIsIl9zaG93U3ViTWVudSIsIl9oaWRlU3ViTWVudSIsIl9zZWxlY3RJdGVtIiwicHJldmVudERlZmF1bHQiLCJkaXJlY3Rpb24iLCJtYXgiLCJsZW5ndGgiLCJvbGRJbmRleCIsImZpeEluZGV4IiwiaSIsIml0ZW0iLCJzdWJNZW51cyIsInJldCIsInN1Yk1lbnUiLCJldmVudHMiLCJNb3ZlV3JhcHBlciIsInVuZGVmaW5lZCIsIklucHV0IiwidHlwZSIsIm5hbWUiLCJ2YWx1ZSIsImRlZmF1bHRWYWx1ZSIsInBsYWNlaG9sZGVyIiwicmVhZG9ubHkiLCJjbGVhcmFibGUiLCJzaXplIiwicm93cyIsInNwZWxsY2hlY2siLCJhdXRvV2lkdGgiLCJmbHVpZCIsIndpZHRoIiwidGFiaW5kZXgiLCJfYWRqdXN0V2lkdGgiLCJmYWtlIiwib2Zmc2V0V2lkdGgiLCJpbnB1dCIsInN0eWxlIiwiY2xlYXIiLCJfb25JbnB1dCIsIl9wcm94eUV2ZW50IiwiU3RyaW5nIiwicHJlcGVuZCIsImFwcGVuZCIsInByZWZpeCIsInN1ZmZpeCIsInJlZHVjZSIsIm1lbW8iLCJ3cmFwcGVyRXZlbnRzIiwiTGluayIsImhyZWYiLCJpc1JlcGxhY2UiLCJ0byIsImhpc3RvcnkiLCJ1cmwiLCJhcHBseSIsImxvY2F0aW9uIiwicGF0aG5hbWUiLCJzZWFyY2giLCJyZXBsYWNlIiwiYXV0b0Rlc3Ryb3kiLCJjb250YWluZXIiLCJpbml0IiwiYXJncyIsImNyZWF0ZUNvbW1lbnQiLCJoeWRyYXRlIiwidXBkYXRlIiwibGFzdFZOb2RlIiwibmV4dFZOb2RlIiwiZGVzdHJveSIsIl8kZGVzdHJveSIsInJlbmRlcmVkIiwiVHlwZXMiLCJDb21wb25lbnRDbGFzc09ySW5zdGFuY2UiLCJyZW1vdmUiLCJ2ZHQiLCJkZXN0cm95ZWQiLCJvZmYiLCJxdWVyeVNlbGVjdG9yIiwiYm9keSIsImFwcGVuZENoaWxkIiwiZ2V0RG9jdW1lbnRPcldpbmRvd1JlY3QiLCJzY3JvbGxiYXJXaWR0aCIsIk1hdGgiLCJhYnMiLCJySG9yaXpvbnRhbCIsInJWZXJ0aWNhbCIsInJPZmZzZXQiLCJyUG9zaXRpb24iLCJyUGVyY2VudCIsImdldERpbWVuc2lvbnMiLCJlbGVtIiwibm9kZVR5cGUiLCJoZWlnaHQiLCJvZmZzZXQiLCJsZWZ0Iiwid2luZG93IiwicGFnZVlPZmZzZXQiLCJwYWdlWE9mZnNldCIsInBhZ2VZIiwicGFnZVgiLCJyZWN0IiwiZCIsImRvY3VtZW50RWxlbWVudCIsImNsaWVudFdpZHRoIiwiY2xpZW50SGVpZ2h0IiwiYiIsInNjcm9sbFdpZHRoIiwic2Nyb2xsSGVpZ2h0Iiwib2Zmc2V0SGVpZ2h0IiwiZ2V0T2Zmc2V0cyIsIm9mZnNldHMiLCJwYXJzZUZsb2F0IiwidGVzdCIsIl9zY3JvbGxCYXJXaWR0aCIsIm91dGVyIiwiY3JlYXRlRWxlbWVudCIsInZpc2liaWxpdHkiLCJtc092ZXJmbG93U3R5bGUiLCJ3aWR0aE5vU2Nyb2xsIiwib3ZlcmZsb3ciLCJpbm5lciIsIndpZHRoV2l0aFNjcm9sbCIsInBhcmVudE5vZGUiLCJyZW1vdmVDaGlsZCIsImdldFNjcm9sbEluZm8iLCJ3aXRoaW4iLCJvdmVyZmxvd1giLCJpc1dpbmRvdyIsImlzRG9jdW1lbnQiLCJvdmVyZmxvd1kiLCJoYXNPdmVyZmxvd1giLCJoYXNPdmVyZmxvd1kiLCJnZXRXaXRoaW5JbmZvIiwiaGFzT2Zmc2V0Iiwic2Nyb2xsTGVmdCIsInBhcnNlQ3NzIiwicHJvcGVydHkiLCJwYXJzZUludCIsIm9wdGlvbnMiLCJ0YXJnZXRXaWR0aCIsInRhcmdldEhlaWdodCIsInRhcmdldE9mZnNldCIsImJhc2VQb3NpdGlvbiIsImNvbGxpc2lvbiIsInNwbGl0Iiwic2Nyb2xsSW5mbyIsImZvckVhY2giLCJwb3MiLCJjb25jYXQiLCJob3Jpem9udGFsT2Zmc2V0IiwiZXhlYyIsInZlcnRpY2FsT2Zmc2V0IiwiYXRPZmZzZXQiLCJlbGVtV2lkdGgiLCJlbGVtSGVpZ2h0IiwibXlPZmZzZXQiLCJjb21wdXRlZFN0eWxlIiwiZ2V0Q29tcHV0ZWRTdHlsZSIsIm1hcmdpbkxlZnQiLCJtYXJnaW5Ub3AiLCJjb2xsaXNpb25XaWR0aCIsImNvbGxpc2lvbkhlaWdodCIsImNvbGxpc2lvblBvc2l0aW9uIiwiZGlyIiwiY29sbCIsInJ1bGVzIiwicmlnaHQiLCJob3Jpem9udGFsIiwidmVydGljYWwiLCJpbXBvcnRhbnQiLCJmaXQiLCJ3aXRoaW5PZmZzZXQiLCJvdXRlcldpZHRoIiwiY29sbGlzaW9uUG9zTGVmdCIsIm92ZXJMZWZ0Iiwib3ZlclJpZ2h0IiwibmV3T3ZlclJpZ2h0Iiwib3V0ZXJIZWlnaHQiLCJjb2xsaXNpb25Qb3NUb3AiLCJvdmVyVG9wIiwib3ZlckJvdHRvbSIsIm5ld092ZXJCb3R0b20iLCJmbGlwIiwib2Zmc2V0TGVmdCIsIm5ld092ZXJMZWZ0Iiwib2Zmc2V0VG9wIiwibmV3T3ZlclRvcCIsImZsaXBmaXQiLCJPcHRpb25Hcm91cCIsImxhYmVsIiwiU2VsZWN0IiwibXVsdGlwbGUiLCJmaWx0ZXJhYmxlIiwia2V5d29yZHMiLCJhbGxvd1VubWF0Y2giLCJfc2hvdyIsIl9vbkNsZWFyIiwic3RvcFByb3BhZ2F0aW9uIiwiX29uU2VsZWN0IiwiYXN5bmMiLCJ2YWx1ZXMiLCJzbGljZSIsIl9mb2N1c0lucHV0IiwiX3Jlc2V0U2VhcmNoIiwiX29uU2VhcmNoIiwidHJpbSIsIl9vbkNoYW5nZVNob3ciLCJjIiwiX29uQmx1ciIsIl9zZWxlY3RJbnB1dCIsIl9vbkZvY3VzIiwiX29uRm9jdXNvdXQiLCJfZGVsZXRlIiwiX3Bvc2l0aW9uIiwibWVudUVsZW1lbnQiLCJtZW51V2lkdGgiLCJfb25LZXlwcmVzcyIsIndyYXBwZXIiLCJjbGljayIsIk9wdGlvbiIsIkdyb3VwIiwiX3BsYWNlaG9sZGVyIiwiaGFzVmFsdWUiLCJpc0dyb3VwIiwibGFiZWxzIiwiaGFuZGxlUHJvcHMiLCJhY3RpdmUiLCJ2YWxpZCIsInRtcCIsInRvTG93ZXJDYXNlIiwidGV4dCIsIk9wdGlvbnNWTm9kZXMiLCJtYXAiLCJNZW51IiwiTGF5b3V0IiwiX29iaiIsImhhc093blByb3BlcnR5IiwiYXJndW1lbnRzIiwidGhlbWUiLCJ2IiwibyIsIl9jaGFuZ2VUaGVtZSIsIiRib3JkZXIiLCJfdXBkYXRlQm9yZGVyIiwibGluayIsIm5ld1RoZW1lIiwib2xkVGhlbWUiLCJuYXYiLCJ0aXRsZSIsIm5hdkluZGV4IiwiX19jIiwiX19uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBLElBQU1BLElBQUlDLGlCQUFPQyxHQUFQLENBQVdDLElBQVgsQ0FBZ0JILENBQTFCOztJQUVxQkksUSxXQUNoQkgsaUJBQU9JLFFBQVAsRTs7Ozs7Ozs7YUFDTUEsUSxxQkFBU0MsSSxFQUFNO0FBQ2xCLGVBQU9BLEtBQUtDLEdBQUwsQ0FBUyxVQUFULENBQVA7QUFDSCxLOzt1QkFFREMsUSx1QkFBVztBQUNQLGVBQU87QUFDSEMscUJBQVMsT0FETjtBQUVIQyxzQkFBVTtBQUZQLFNBQVA7QUFJSCxLOzt1QkFFREMsSyxvQkFBUTtBQUFBOztBQUNKLGFBQUtDLG1CQUFMO0FBQ0EsYUFBS0MsRUFBTCxDQUFRLG1CQUFSLEVBQTZCLFlBQU07QUFDL0IsbUJBQUtELG1CQUFMO0FBQ0gsU0FGRCxFQUVHLEVBQUNFLE1BQU0sSUFBUCxFQUZIO0FBR0gsSzs7dUJBRURGLG1CLGtDQUFzQjtBQUFBLG1CQUM0QixLQUFLTCxHQUFMLEVBRDVCO0FBQUEsWUFDYlEsUUFEYSxRQUNiQSxRQURhO0FBQUEsWUFDSE4sT0FERyxRQUNI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LENBVGdDLENBQWYsRUFTZSxnQkFUZixDQUFELEVBU21DMUgsRUFBRSxLQUFGLEVBQVMsSUFBVCxFQUFlLENBQUNrRyxRQUFRLFNBQVIsSUFBcUIsVUFBU3BDLE1BQVQsRUFBaUI7QUFBQyxlQUFPLElBQVA7QUFBYSxLQUFyRCxNQUEyRHFDLFNBQVMsU0FBVCxJQUFzQixVQUFTckMsTUFBVCxFQUFpQjtBQUMxSyxZQUFJc0QsT0FBTyxJQUFYO0FBQ0EsZUFBT3ZCLE9BQU8sU0FBUCxJQUFvQkEsT0FBTyxTQUFQLEVBQWtCNkIsSUFBbEIsQ0FBdUIsSUFBdkIsRUFBNkIsWUFBVztBQUNuRSxtQkFBT3hCLFFBQVEsU0FBUixFQUFtQndCLElBQW5CLENBQXdCTixJQUF4QixFQUE4QnRELE1BQTlCLENBQVA7QUFDQyxTQUYwQixDQUFwQixHQUVGb0MsUUFBUSxTQUFSLEVBQW1Cd0IsSUFBbkIsQ0FBd0IsSUFBeEIsRUFBOEI1RCxNQUE5QixDQUZMO0FBR0MsS0FMdUUsS0FLbEVxQyxTQUFTLFNBQVQsRUFBb0J1QixJQUFwQixDQUF5QixJQUF6QixDQUxtRCxFQUtuQixpQkFMbUIsQ0FUbkMsQ0FBZixFQWNvRHRFLFdBQVcsWUFBVztBQUFDLFlBQUk7QUFBQTs7QUFBQyxtQkFBTyxXQUFFLGdCQUFnQixJQUFsQixTQUF5QmtFLE1BQU10RyxTQUEvQixJQUEyQ3NHLE1BQU10RyxTQUFqRCxTQUE4RCxDQUE5RCxDQUFQO0FBQXdFLFNBQTdFLENBQThFLE9BQU15QixDQUFOLEVBQVM7QUFBQzZELGVBQUc3RCxDQUFIO0FBQU07QUFBQyxLQUEzRyxDQUE0R2lGLElBQTVHLENBQWlILElBQWpILENBQVgsQ0FkcEQsQ0FBUDtBQWVDLEM7O0FBaEREOzs7O0FBQXVDIiwiZmlsZSI6ImNodW5rL2FiNmY1NDJmZjUzNDAwZDllNTI0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEludGFjdCBmcm9tICdpbnRhY3QnO1xuaW1wb3J0IHtpc1RleHRWTm9kZSwgZmluZFBhcmVudENvbXBvbmVudH0gZnJvbSAnLi4vdXRpbHMnO1xuaW1wb3J0IERyb3Bkb3duTWVudSBmcm9tICcuL21lbnUnO1xuXG5jb25zdCBoID0gSW50YWN0LlZkdC5taXNzLmg7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERyb3Bkb3duIGV4dGVuZHMgSW50YWN0IHtcbiAgICBASW50YWN0LnRlbXBsYXRlKClcbiAgICBzdGF0aWMgdGVtcGxhdGUoZGF0YSkge1xuICAgICAgICByZXR1cm4gZGF0YS5nZXQoJ2NoaWxkcmVuJyk7XG4gICAgfVxuXG4gICAgZGVmYXVsdHMoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB0cmlnZ2VyOiAnaG92ZXInLFxuICAgICAgICAgICAgZGlzYWJsZWQ6IGZhbHNlLFxuICAgICAgICB9XG4gICAgfVxuXG4gICAgX2luaXQoKSB7XG4gICAgICAgIHRoaXMuX3NhdmVPcmlnaW5hbEV2ZW50cygpO1xuICAgICAgICB0aGlzLm9uKCckcmVjZWl2ZTpjaGlsZHJlbicsICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuX3NhdmVPcmlnaW5hbEV2ZW50cygpO1xuICAgICAgICB9LCB7a2VlcDogdHJ1ZX0pO1xuICAgIH1cblxuICAgIF9zYXZlT3JpZ2luYWxFdmVudHMoKSB7XG4gICAgICAgIGxldCB7Y2hpbGRyZW4sIHRyaWdnZXIsIGNsYXNzTmFtZSwgLi4ucmVzdH0gPSB0aGlzLmdldCgpO1xuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShjaGlsZHJlbikpIHtcbiAgICAgICAgICAgIGNoaWxkcmVuID0gY2hpbGRyZW5bMF07XG4gICAgICAgIH0gXG4gICAgICAgIGlmIChpc1RleHRWTm9kZShjaGlsZHJlbikpIHtcbiAgICAgICAgICAgIGNoaWxkcmVuID0gaCgnc3BhbicsIHJlc3QsIGNoaWxkcmVuLCBjbGFzc05hbWUpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gc2F2ZSB0aGUgb3JpZ2luYWwgZXZlbnRcbiAgICAgICAgY29uc3Qgb3JpZ2luUHJvcHMgPSBjaGlsZHJlbi5wcm9wcztcbiAgICAgICAgbGV0IGhhc1NhdmVkID0gZmFsc2U7XG4gICAgICAgIGlmICghb3JpZ2luUHJvcHMuX2hhc1NhdmVkKSB7XG4gICAgICAgICAgICBjaGlsZHJlbi5fZXZDbGljayA9IG9yaWdpblByb3BzWydldi1jbGljayddO1xuICAgICAgICAgICAgY2hpbGRyZW4uX2V2TW91c2VFbnRlciA9IG9yaWdpblByb3BzWydldi1tb3VzZWVudGVyJ107XG4gICAgICAgICAgICBjaGlsZHJlbi5fZXZNb3VzZUxlYXZlID0gb3JpZ2luUHJvcHNbJ2V2LW1vdXNlbGVhdmUnXTtcbiAgICAgICAgICAgIGhhc1NhdmVkID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBwcm9wcyA9IHt9O1xuICAgICAgICAvLyBpZiAodHJpZ2dlciA9PT0gJ2NsaWNrJykge1xuICAgICAgICAgICAgcHJvcHNbJ2V2LWNsaWNrJ10gPSB0aGlzLnNob3cuYmluZCh0aGlzLCBjaGlsZHJlbi5fZXZDbGljayk7XG4gICAgICAgIC8vIH0gZWxzZSB7XG4gICAgICAgIGlmICh0cmlnZ2VyID09PSAnaG92ZXInKSB7XG4gICAgICAgICAgICBwcm9wc1snZXYtbW91c2VlbnRlciddID0gdGhpcy5zaG93LmJpbmQodGhpcywgY2hpbGRyZW4uX2V2TW91c2VFbnRlcik7XG4gICAgICAgICAgICBwcm9wc1snZXYtbW91c2VsZWF2ZSddID0gdGhpcy5oaWRlLmJpbmQodGhpcywgY2hpbGRyZW4uX2V2TW91c2VMZWF2ZSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGhhc1NhdmVkKSB7XG4gICAgICAgICAgICBwcm9wcy5faGFzU2F2ZWQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGNoaWxkcmVuLnByb3BzID0gey4uLmNoaWxkcmVuLnByb3BzLCAuLi5wcm9wc307XG4gICAgICAgIHRoaXMuc2V0KCdjaGlsZHJlbicsIGNoaWxkcmVuLCB7c2lsZW50OiB0cnVlfSk7XG4gICAgfVxuXG4gICAgX21vdW50KCkge1xuICAgICAgICAvLyB0aGUgbmV4dCBzaWJsaW5nIGlzIERyb3Bkb3duTWVudVxuICAgICAgICAvLyB3ZSBjYW4gbm90IGdldCB0aGUgbWVudSBieSBjYWxsIGdldCgnbWVudScpIGRpcmVjdGx5LFxuICAgICAgICAvLyBiZWNhdXNlIHRoZSB2Tm9kZSBtYXkgYmUgY2xvbmVkXG4gICAgICAgIGNvbnN0IHNpYmxpbmdzID0gdGhpcy5wYXJlbnRWTm9kZS5jaGlsZHJlbjtcbiAgICAgICAgY29uc3QgaW5kZXggPSBzaWJsaW5ncy5pbmRleE9mKHRoaXMudk5vZGUpO1xuICAgICAgICBjb25zdCBtZW51ID0gc2libGluZ3NbaW5kZXggKyAxXTtcbiAgICAgICAgbWVudS5jaGlsZHJlbi5kcm9wZG93biA9IHRoaXM7XG4gICAgICAgIHRoaXMubWVudSA9IG1lbnU7XG4gICAgfVxuXG4gICAgc2hvdyhmbiwgZSwgaXNGb2N1cykge1xuICAgICAgICBpZiAodHlwZW9mIGZuID09PSAnZnVuY3Rpb24nKSBmbihlKTtcblxuICAgICAgICBpZiAodGhpcy5nZXQoJ2Rpc2FibGVkJykpIHJldHVybjtcblxuICAgICAgICBjb25zdCBtZW51ID0gdGhpcy5tZW51LmNoaWxkcmVuO1xuICAgICAgICBtZW51LnNob3coKTtcblxuICAgICAgICBpZiAoaXNGb2N1cykge1xuICAgICAgICAgICAgbWVudS5mb2N1c0l0ZW1CeUluZGV4KDApO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgaGlkZShmbiwgZSwgaW1tZWRpYXRlbHkpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBmbiA9PT0gJ2Z1bmN0aW9uJykgZm4oZSk7XG5cbiAgICAgICAgaWYgKHRoaXMuZ2V0KCdkaXNhYmxlZCcpKSByZXR1cm47XG5cbiAgICAgICAgY29uc3QgbWVudSA9IHRoaXMubWVudS5jaGlsZHJlbjtcbiAgICAgICAgbWVudS5oaWRlKGltbWVkaWF0ZWx5KTtcbiAgICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL2Ryb3Bkb3duL2Ryb3Bkb3duLmpzIiwiaW1wb3J0IEludGFjdCBmcm9tICdpbnRhY3QnO1xuaW1wb3J0IERyb3Bkb3duIGZyb20gJy4vZHJvcGRvd24nO1xuaW1wb3J0IERyb3Bkb3duTWVudSBmcm9tICcuL21lbnUnO1xuaW1wb3J0IERyb3Bkb3duSXRlbSBmcm9tICcuL2l0ZW0nO1xuaW1wb3J0ICcuLi8uLi9zdHlsZXMva3BjLnN0eWwnO1xuaW1wb3J0ICcuL2luZGV4LnN0eWwnO1xuXG5jb25zdCBoID0gSW50YWN0LlZkdC5taXNzLmg7XG5cbmZ1bmN0aW9uIFdyYXBwZXIocHJvcHMsIGluVnVlKSB7XG4gICAgbGV0IHtcbiAgICAgICAgY2hpbGRyZW4sIHBvc2l0aW9uLCBrZXksXG4gICAgICAgIHJlZiwgLi4ucmVzdFxuICAgIH0gPSBwcm9wcztcblxuICAgIGNvbnN0IGVsZW1lbnQgPSBjaGlsZHJlblswXTtcbiAgICBjb25zdCBtZW51ID0gY2hpbGRyZW5bMV07XG5cbiAgICBtZW51LnByb3BzID0ge1xuICAgICAgICBwb3NpdGlvbiwgXG4gICAgICAgIGtleToga2V5ID09IG51bGwgPyBrZXkgOiBgJHtrZXl9Lm1lbnVgLFxuICAgICAgICAuLi5yZXN0LFxuICAgICAgICAuLi5tZW51LnByb3BzLFxuICAgIH07XG5cbiAgICByZXR1cm4gIWluVnVlID8gXG4gICAgICAgIFtcbiAgICAgICAgICAgIGgoRHJvcGRvd24sIHtcbiAgICAgICAgICAgICAgICBrZXk6IGtleSA9PSBudWxsID8ga2V5IDogYCR7a2V5fS50cmlnZ2VyYCxcbiAgICAgICAgICAgICAgICByZWY6IHJlZixcbiAgICAgICAgICAgICAgICBjaGlsZHJlbjogZWxlbWVudCwgXG4gICAgICAgICAgICAgICAgLi4ucmVzdFxuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICBtZW51XG4gICAgICAgIF0gOlxuICAgICAgICBoKERyb3Bkb3duVnVlV3JhcHBlciwge1xuICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAgICBoKERyb3Bkb3duLCB7XG4gICAgICAgICAgICAgICAgICAgIGtleToga2V5ID09IG51bGwgPyBrZXkgOiBgJHtrZXl9LnRyaWdnZXJgLFxuICAgICAgICAgICAgICAgICAgICByZWY6IHJlZixcbiAgICAgICAgICAgICAgICAgICAgY2hpbGRyZW46IFtlbGVtZW50XSwgXG4gICAgICAgICAgICAgICAgICAgIC4uLnJlc3RcbiAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICBtZW51XG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgLi4ucmVzdFxuICAgICAgICB9KTtcbn1cblxuLy8gVnVlIG9ubHkgc3VwcG9ydCByZXR1cm4gb25lIGVsZW1lbnQgZnJvbSBmdW5jdGlvbmFsIGNvbXBvbmVudCxcbi8vIHNvIHdlIHdyYXAgdGhlbS4gVGhpcyB3aWxsIGxlYWQgdG8gZGFtYWdlIHRoZSBkb20gc3RydWN0aW9uLFxuLy8gYmVjYXVzZSB3ZSBtdXN0IHdyYXAgdGhlbSB3aXRoIGEgZGl2XG5jb25zdCBfY2xhc3NOYW1lID0gSW50YWN0LlZkdC51dGlscy5jbGFzc05hbWU7XG5jbGFzcyBEcm9wZG93blZ1ZVdyYXBwZXIgZXh0ZW5kcyBJbnRhY3Qge1xuICAgIHRlbXBsYXRlKGRhdGEpIHtcbiAgICAgICAgY29uc3Qge2NsYXNzTmFtZSwgY2hpbGRyZW4sIC4uLnJlc3R9ID0gZGF0YS5nZXQoKTtcbiAgICAgICAgcmV0dXJuIGgoJ2RpdicsIHJlc3QsIGNoaWxkcmVuLCBfY2xhc3NOYW1lKHtcbiAgICAgICAgICAgICdrLWRyb3Bkb3duJzogdHJ1ZSxcbiAgICAgICAgICAgIFtjbGFzc05hbWVdOiBjbGFzc05hbWUsXG4gICAgICAgIH0pKTtcbiAgICB9XG59XG5cbmNvbnN0IF9XcmFwcGVyID0gSW50YWN0LmZ1bmN0aW9uYWxXcmFwcGVyID9cbiAgICBJbnRhY3QuZnVuY3Rpb25hbFdyYXBwZXIoV3JhcHBlcikgOiBXcmFwcGVyO1xuXG5leHBvcnQgZGVmYXVsdCBfV3JhcHBlcjtcblxuZXhwb3J0IHtfV3JhcHBlciBhcyBEcm9wZG93biwgRHJvcGRvd25NZW51LCBEcm9wZG93bkl0ZW19O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9kcm9wZG93bi9pbmRleC5qcyIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG4gICAgaWYobW9kdWxlLmhvdCkge1xuICAgICAgLy8gMTUyNzU3NjY3OTM4MFxuICAgICAgdmFyIGNzc1JlbG9hZCA9IHJlcXVpcmUoXCIhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1ob3QtbG9hZGVyL2hvdE1vZHVsZVJlcGxhY2VtZW50LmpzXCIpKG1vZHVsZS5pZCwge1wiZmlsZU1hcFwiOlwie2ZpbGVOYW1lfVwifSk7XG4gICAgICBtb2R1bGUuaG90LmRpc3Bvc2UoY3NzUmVsb2FkKTtcbiAgICAgIG1vZHVsZS5ob3QuYWNjZXB0KHVuZGVmaW5lZCwgY3NzUmVsb2FkKTtcbiAgICB9XG4gIFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vY29tcG9uZW50cy9kcm9wZG93bi9pbmRleC5zdHlsXG4vLyBtb2R1bGUgaWQgPSAuL2NvbXBvbmVudHMvZHJvcGRvd24vaW5kZXguc3R5bFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIiwiaW1wb3J0IEludGFjdCBmcm9tICdpbnRhY3QnO1xuaW1wb3J0IHRlbXBsYXRlIGZyb20gJy4vaXRlbS52ZHQnO1xuaW1wb3J0IERyb3Bkb3duIGZyb20gJy4vZHJvcGRvd24nO1xuaW1wb3J0IERyb3Bkb3duTWVudSBmcm9tICcuL21lbnUnO1xuaW1wb3J0IHtmaW5kUGFyZW50Q29tcG9uZW50fSBmcm9tICcuLi91dGlscyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERyb3Bkb3duSXRlbSBleHRlbmRzIEludGFjdCB7XG4gICAgQEludGFjdC50ZW1wbGF0ZSgpXG4gICAgc3RhdGljIHRlbXBsYXRlID0gdGVtcGxhdGU7XG5cbiAgICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgICAgICBkaXNhYmxlZDogQm9vbGVhbixcbiAgICAgICAgaGlkZU9uU2VsZWN0OiBCb29sZWFuLFxuICAgIH07XG5cbiAgICBkZWZhdWx0cygpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGRpc2FibGVkOiBmYWxzZSxcbiAgICAgICAgICAgIGhpZGVPblNlbGVjdDogdHJ1ZSxcblxuICAgICAgICAgICAgX2lzRm9jdXM6IGZhbHNlLFxuICAgICAgICB9O1xuICAgIH1cblxuICAgIF9pbml0KCkge1xuICAgICAgICAvLyBpZiBzZWxlY3RlZCBoaWRlIGFsbCBkcm9wZG93biBtZW51XG4gICAgICAgIHRoaXMub24oJ3NlbGVjdCcsICgpID0+IHtcbiAgICAgICAgICAgIGlmICh0aGlzLmdldCgnaGlkZU9uU2VsZWN0JykpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBhbmNlc3RvciA9IHRoaXMuX2ZpbmRBbmNlc3RvckRyb3Bkb3duTWVudSgpO1xuICAgICAgICAgICAgICAgIGFuY2VzdG9yLmhpZGUodHJ1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIF9tb3VudCgpIHtcbiAgICAgICAgY29uc3QgcGFyZW50ID0gdGhpcy5wYXJlbnQgPSB0aGlzLl9maW5kQW5jZXN0b3JEcm9wZG93bk1lbnUodHJ1ZSk7XG4gICAgICAgIHBhcmVudC5pdGVtcy5wdXNoKHRoaXMpO1xuICAgIH1cblxuICAgIF9vbkNsaWNrKGUpIHtcbiAgICAgICAgaWYgKHRoaXMuZ2V0KCdkaXNhYmxlZCcpKSByZXR1cm47XG5cbiAgICAgICAgdGhpcy50cmlnZ2VyKCdjbGljaycsIGUpO1xuXG4gICAgICAgIC8vIGlzIG5vdCBhIHN1YiBkcm9wZG93biB0cmlnZ2VyXG4gICAgICAgIGlmICh0aGlzLnBhcmVudFZOb2RlLnRhZyAhPT0gRHJvcGRvd24pIHtcbiAgICAgICAgICAgIHRoaXMudHJpZ2dlcignc2VsZWN0JywgdGhpcywgZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBfb25Nb3VzZUVudGVyKGUpIHtcbiAgICAgICAgdGhpcy50cmlnZ2VyKCdtb3VzZWVudGVyJywgZSk7XG5cbiAgICAgICAgaWYgKHRoaXMuZ2V0KCdkaXNhYmxlZCcpKSByZXR1cm47XG5cbiAgICAgICAgdGhpcy5wYXJlbnQuZm9jdXNJdGVtKHRoaXMpO1xuICAgIH1cblxuICAgIF9vbk1vdXNlTGVhdmUoZSkge1xuICAgICAgICB0aGlzLnRyaWdnZXIoJ21vdXNlbGVhdmUnLCBlKTtcbiAgICAgICAgLy8gaWYgKHRoaXMuZ2V0KCdkaXNhYmxlZCcpKSByZXR1cm47XG4gICAgfVxuXG4gICAgc2VsZWN0KCkge1xuICAgICAgICAvLyBpcyBub3QgYSBzdWIgZHJvcGRvd24gdHJpZ2dlclxuICAgICAgICBjb25zdCBkcm9wZG93biA9IHRoaXMuX2lzU3ViTWVudSgpO1xuICAgICAgICBpZiAoIWRyb3Bkb3duKSB7XG4gICAgICAgICAgICB0aGlzLnRyaWdnZXIoJ3NlbGVjdCcsIHRoaXMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZHJvcGRvd24uc2hvdygpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZm9jdXMoKSB7XG4gICAgICAgIHRoaXMuc2V0KCdfaXNGb2N1cycsIHRydWUpO1xuXG4gICAgICAgIGNvbnN0IGVsUmVjdCA9IHRoaXMuZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgICAgY29uc3QgcEVsID0gdGhpcy5wYXJlbnQucmVmcy5tZW51LmVsZW1lbnQ7XG4gICAgICAgIGNvbnN0IHBFbFJlY3QgPSBwRWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgIGNvbnN0IGJvdHRvbU92ZXJmbG93RGlzdGFuY2UgPSBlbFJlY3QuYm90dG9tIC0gcEVsUmVjdC5ib3R0b207XG4gICAgICAgIGNvbnN0IHRvcE92ZXJmbG93RGlzdGFuY2UgPSBlbFJlY3QudG9wIC0gcEVsUmVjdC50b3A7XG4gICAgICAgIFxuICAgICAgICBpZiAoYm90dG9tT3ZlcmZsb3dEaXN0YW5jZSA+IDApIHtcbiAgICAgICAgICAgIHBFbC5zY3JvbGxUb3AgKz0gYm90dG9tT3ZlcmZsb3dEaXN0YW5jZTtcbiAgICAgICAgfSBlbHNlIGlmICh0b3BPdmVyZmxvd0Rpc3RhbmNlIDwgMCkge1xuICAgICAgICAgICAgcEVsLnNjcm9sbFRvcCArPSB0b3BPdmVyZmxvd0Rpc3RhbmNlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgdW5Gb2N1cygpIHtcbiAgICAgICAgdGhpcy5zZXQoJ19pc0ZvY3VzJywgZmFsc2UpO1xuXG4gICAgICAgIGNvbnN0IGRyb3Bkb3duID0gdGhpcy5faXNTdWJNZW51KCk7XG4gICAgICAgIGlmIChkcm9wZG93bikge1xuICAgICAgICAgICAgZHJvcGRvd24uaGlkZShudWxsLCBudWxsLCB0cnVlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHNob3dNZW51QW5kRm9jdXMoKSB7XG4gICAgICAgIGNvbnN0IGRyb3Bkb3duID0gdGhpcy5faXNTdWJNZW51KCk7XG4gICAgICAgIGlmIChkcm9wZG93bikge1xuICAgICAgICAgICAgZHJvcGRvd24uc2hvdyhudWxsLCBudWxsLCB0cnVlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGhpZGVNZW51KCkge1xuICAgICAgICBjb25zdCBkcm9wZG93biA9IHRoaXMuX2lzU3ViTWVudSgpO1xuICAgICAgICBpZiAoZHJvcGRvd24pIHtcbiAgICAgICAgICAgIGRyb3Bkb3duLmhpZGUobnVsbCwgbnVsbCwgdHJ1ZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBfaXNTdWJNZW51KCkge1xuICAgICAgICBpZiAodGhpcy5wYXJlbnRWTm9kZS50YWcgPT09IERyb3Bkb3duKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5wYXJlbnRWTm9kZS5jaGlsZHJlbjtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIF9maW5kQW5jZXN0b3JEcm9wZG93bk1lbnUoaXNGaXJzdCkge1xuICAgICAgICByZXR1cm4gZmluZFBhcmVudENvbXBvbmVudChEcm9wZG93bk1lbnUsIHRoaXMsIGlzRmlyc3QpO1xuICAgIH1cblxuICAgIF9kZXN0cm95KCkge1xuICAgICAgICBjb25zdCBpdGVtcyA9IHRoaXMucGFyZW50Lml0ZW1zO1xuICAgICAgICBpdGVtcy5zcGxpY2UoaXRlbXMuaW5kZXhPZih0aGlzKSwgMSk7XG4gICAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9kcm9wZG93bi9pdGVtLmpzIiwiXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihvYmosIF9WZHQsIGJsb2NrcywgJGNhbGxlZSkge1xuX1ZkdCB8fCAoX1ZkdCA9IFZkdCk7XG5vYmogfHwgKG9iaiA9IHt9KTtcbmJsb2NrcyB8fCAoYmxvY2tzID0ge30pO1xudmFyIGggPSBfVmR0Lm1pc3MuaCwgaGMgPSBfVmR0Lm1pc3MuaGMsIGh1ID0gX1ZkdC5taXNzLmh1LCB3aWRnZXRzID0gdGhpcyAmJiB0aGlzLndpZGdldHMgfHwge30sIF9ibG9ja3MgPSB7fSwgX19ibG9ja3MgPSB7fSxcbl9fdSA9IF9WZHQudXRpbHMsIGV4dGVuZCA9IF9fdS5leHRlbmQsIF9lID0gX191LmVycm9yLCBfY2xhc3NOYW1lID0gX191LmNsYXNzTmFtZSxcbl9fbyA9IF9fdS5PcHRpb25zLCBfZ2V0TW9kZWwgPSBfX28uZ2V0TW9kZWwsIF9zZXRNb2RlbCA9IF9fby5zZXRNb2RlbCxcbl9zZXRDaGVja2JveE1vZGVsID0gX191LnNldENoZWNrYm94TW9kZWwsIF9kZXRlY3RDaGVja2JveENoZWNrZWQgPSBfX3UuZGV0ZWN0Q2hlY2tib3hDaGVja2VkLFxuX3NldFNlbGVjdE1vZGVsID0gX191LnNldFNlbGVjdE1vZGVsLFxuc2VsZiA9IHRoaXMuZGF0YSwgJHRoaXMgPSB0aGlzLCBzY29wZSA9IG9iaiwgQW5pbWF0ZSA9IHNlbGYgJiYgc2VsZi5BbmltYXRlLCBwYXJlbnQgPSAoJGNhbGxlZSB8fCB7fSkuX3N1cGVyXG4vKiBpbXBvcnQge3Byb3h5RXZlbnR9IGZyb20gJy4uL3V0aWxzJzsgKi9cblxuY29uc3Qge2NoaWxkcmVuLCBkaXNhYmxlZCwgY2xhc3NOYW1lLCBfaXNGb2N1c30gPSBzZWxmLmdldCgpO1xuXG5jb25zdCBjbGFzc05hbWVPYmogPSB7XG4gICAgJ2staXRlbSc6IHRydWUsXG4gICAgJ2stZGlzYWJsZWQnOiBkaXNhYmxlZCxcbiAgICBbY2xhc3NOYW1lXTogY2xhc3NOYW1lLFxuICAgICdrLWhvdmVyJzogX2lzRm9jdXMsXG59XG5cbnJldHVybiBoKCdkaXYnLCB7J2V2LWNsaWNrJzogZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW3NlbGYuX29uQ2xpY2sgXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKSwgJ2V2LW1vdXNlZW50ZXInOiBmdW5jdGlvbigpIHt0cnkge3JldHVybiBbc2VsZi5fb25Nb3VzZUVudGVyIF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcyksICdldi1tb3VzZWxlYXZlJzogZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW3NlbGYuX29uTW91c2VMZWF2ZSBdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpfSwgZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW2NoaWxkcmVuIF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcyksIF9jbGFzc05hbWUoZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW2NsYXNzTmFtZU9iaiBdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpKSlcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL2Ryb3Bkb3duL2l0ZW0udmR0IiwiaW1wb3J0IEludGFjdCBmcm9tICdpbnRhY3QnO1xuaW1wb3J0IHRlbXBsYXRlIGZyb20gJy4vbWVudS52ZHQnO1xuaW1wb3J0IHBvc2l0aW9uIGZyb20gJy4uL21vdmVXcmFwcGVyL3Bvc2l0aW9uJztcbmltcG9ydCB7ZmluZFBhcmVudENvbXBvbmVudCwgZ2V0VHJhbnNpdGlvbn0gZnJvbSAnLi4vdXRpbHMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEcm9wZG93bk1lbnUgZXh0ZW5kcyBJbnRhY3Qge1xuICAgIEBJbnRhY3QudGVtcGxhdGUoKVxuICAgIHN0YXRpYyB0ZW1wbGF0ZSA9IHRlbXBsYXRlO1xuXG4gICAgZGVmYXVsdHMoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBzaG93OiBmYWxzZSxcbiAgICAgICAgICAgIHRyaWdnZXI6ICdob3ZlcicsXG4gICAgICAgICAgICBwb3NpdGlvbjoge30sXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiAnc2xpZGVkb3duJyxcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBfaW5pdCgpIHtcbiAgICAgICAgdGhpcy5zdWJEcm9wZG93bnMgPSBbXTtcbiAgICAgICAgdGhpcy5pdGVtcyA9IFtdO1xuICAgICAgICB0aGlzLmZvY3VzSW5kZXggPSAtMTtcbiAgICAgICAgdGhpcy5sb2NrZWQgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBfbW91bnQoKSB7XG4gICAgICAgIGNvbnN0IHBhcmVudCA9IHRoaXMuX2ZpbmRQYXJlbnREcm9wZG93bk1lbnUoKTtcbiAgICAgICAgaWYgKHBhcmVudCkgcGFyZW50LnN1YkRyb3Bkb3ducy5wdXNoKHRoaXMpO1xuXG4gICAgICAgIGlmICh0aGlzLmdldCgnc2hvdycpKSB7XG4gICAgICAgICAgICB0aGlzLl9hZGREb2N1bWVudEV2ZW50cygpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgX2ZpbmRQYXJlbnREcm9wZG93bk1lbnUoKSB7XG4gICAgICAgIHJldHVybiBmaW5kUGFyZW50Q29tcG9uZW50KERyb3Bkb3duTWVudSwgdGhpcywgdHJ1ZSk7XG4gICAgfVxuXG4gICAgc2hvdygpIHtcbiAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMudGltZXIpO1xuICAgICAgICB0aGlzLnNldCgnc2hvdycsIHRydWUpO1xuICAgICAgICBjb25zdCBwYXJlbnQgPSB0aGlzLl9maW5kUGFyZW50RHJvcGRvd25NZW51KCk7XG4gICAgICAgIGlmIChwYXJlbnQpIHtcbiAgICAgICAgICAgIHBhcmVudC5zaG93KCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBoaWRlKGltbWVkaWF0ZWx5KSB7XG4gICAgICAgIGlmICghaW1tZWRpYXRlbHkpIHtcbiAgICAgICAgICAgIHRoaXMudGltZXIgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldCgnc2hvdycsIGZhbHNlKTtcbiAgICAgICAgICAgIH0sIDIwMCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnNldCgnc2hvdycsIGZhbHNlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHRvZ2dsZSgpIHtcbiAgICAgICAgdGhpcy5zZXQoJ3Nob3cnLCAhdGhpcy5nZXQoJ3Nob3cnKSk7XG4gICAgfVxuXG4gICAgcG9zaXRpb24oKSB7XG4gICAgICAgIHBvc2l0aW9uKHRoaXMucmVmcy5tZW51LmVsZW1lbnQsIHtcbiAgICAgICAgICAgIG15OiAnY2VudGVyIHRvcCs1JywgXG4gICAgICAgICAgICBhdDogJ2NlbnRlciBib3R0b20nLCBcbiAgICAgICAgICAgIG9mOiB0aGlzLmRyb3Bkb3duLmVsZW1lbnQsXG4gICAgICAgICAgICB1c2luZzogKGZlZWRiYWNrKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXQoJ3RyYW5zaXRpb24nLCBnZXRUcmFuc2l0aW9uKGZlZWRiYWNrKSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgLi4udGhpcy5nZXQoJ3Bvc2l0aW9uJylcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgX29uU2hvdygpIHtcbiAgICAgICAgdGhpcy5mb2N1c0luZGV4ID0gLTE7XG4gICAgICAgIHRoaXMuX2FkZERvY3VtZW50RXZlbnRzKCk7XG4gICAgICAgIHRoaXMucG9zaXRpb24oKTtcbiAgICB9XG5cbiAgICBfYWRkRG9jdW1lbnRFdmVudHMoKSB7XG4gICAgICAgIGNvbnN0IHBhcmVudCA9IHRoaXMuX2ZpbmRQYXJlbnREcm9wZG93bk1lbnUoKTtcbiAgICAgICAgaWYgKCFwYXJlbnQpIHtcbiAgICAgICAgICAgIC8vIGlmICh0aGlzLmdldCgndHJpZ2dlcicpID09PSAnY2xpY2snKSB7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLl9vbkRvY3VtZW50Q2xpY2spO1xuICAgICAgICAgICAgLy8gfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcGFyZW50LmxvY2tlZCA9IHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgdGhpcy5fb25LZXlkb3duKTtcbiAgICB9XG5cbiAgICBfcmVtb3ZlRG9jdW1lbnRFdmVudHMoKSB7XG4gICAgICAgIGNvbnN0IHBhcmVudCA9IHRoaXMuX2ZpbmRQYXJlbnREcm9wZG93bk1lbnUoKTtcbiAgICAgICAgaWYgKCFwYXJlbnQpIHtcbiAgICAgICAgICAgIC8vIGlmICh0aGlzLmdldCgndHJpZ2dlcicpID09PSAnY2xpY2snKSB7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLl9vbkRvY3VtZW50Q2xpY2spO1xuICAgICAgICAgICAgLy8gfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcGFyZW50LmxvY2tlZCA9IGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIHRoaXMuX29uS2V5ZG93bik7XG4gICAgfVxuXG4gICAgX29uRG9jdW1lbnRDbGljayhlKSB7XG4gICAgICAgIGNvbnN0IHRhcmdldCA9IGUudGFyZ2V0O1xuICAgICAgICBjb25zdCBtZW51ID0gdGhpcy5yZWZzLm1lbnUuZWxlbWVudDtcblxuICAgICAgICAvLyBpcyBhIGRyb3Bkb3duIG1lbnVcbiAgICAgICAgaWYgKG1lbnUgPT09IHRhcmdldCB8fCBtZW51LmNvbnRhaW5zKHRhcmdldCkpIHJldHVybjtcbiAgICAgICAgLy8gaXMgY2xpY2sgb24gc3ViIG1lbnVcbiAgICAgICAgaWYgKHRoaXMuX2lzQ2xpY2tTdWJNZW51KHRhcmdldCwgdGhpcy5zdWJEcm9wZG93bnMpKSByZXR1cm47XG4gICAgICAgIC8vIGN1c3RvbSBmbGFnIHRvIGluZGljYXRlIHRoYXQgdGhlIGV2ZW50IGRvZXMgbm90IGxlYWQgdG8gY2xvc2UgbWVudVxuICAgICAgICBpZiAoZS5fZHJvcGRvd24pIHJldHVybjtcblxuICAgICAgICB0aGlzLmhpZGUodHJ1ZSk7XG4gICAgfVxuXG4gICAgX29uS2V5ZG93bihlKSB7XG4gICAgICAgIGlmICh0aGlzLmxvY2tlZCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHN3aXRjaCAoZS5rZXlDb2RlKSB7XG4gICAgICAgICAgICAvLyBkb3duXG4gICAgICAgICAgICBjYXNlIDQwOlxuICAgICAgICAgICAgICAgIHRoaXMuX2ZvY3VzTmV4dEl0ZW0oZSk7IFxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgLy8gdXBcbiAgICAgICAgICAgIGNhc2UgMzg6XG4gICAgICAgICAgICAgICAgdGhpcy5fZm9jdXNQcmV2SXRlbShlKTsgXG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAvLyByaWdodFxuICAgICAgICAgICAgY2FzZSAzOTpcbiAgICAgICAgICAgICAgICB0aGlzLl9zaG93U3ViTWVudShlKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIC8vIGxlZnRcbiAgICAgICAgICAgIGNhc2UgMzc6XG4gICAgICAgICAgICAgICAgdGhpcy5faGlkZVN1Yk1lbnUoZSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAvLyBlbnRlclxuICAgICAgICAgICAgY2FzZSAxMzpcbiAgICAgICAgICAgICAgICB0aGlzLl9zZWxlY3RJdGVtKGUpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgX2ZvY3VzTmV4dEl0ZW0oZSkge1xuICAgICAgICBjb25zdCBwYXJlbnQgPSB0aGlzLl9maW5kUGFyZW50RHJvcGRvd25NZW51KCk7XG4gICAgICAgIGlmIChwYXJlbnQgJiYgdGhpcy5mb2N1c0luZGV4IDwgMCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgdGhpcy5mb2N1c0l0ZW1CeUluZGV4KHRoaXMuZm9jdXNJbmRleCArIDEsICdkb3duJyk7XG4gICAgfVxuXG4gICAgX2ZvY3VzUHJldkl0ZW0oZSkge1xuICAgICAgICBjb25zdCBwYXJlbnQgPSB0aGlzLl9maW5kUGFyZW50RHJvcGRvd25NZW51KCk7XG4gICAgICAgIGlmIChwYXJlbnQgJiYgdGhpcy5mb2N1c0luZGV4IDwgMCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgdGhpcy5mb2N1c0l0ZW1CeUluZGV4KHRoaXMuZm9jdXNJbmRleCAtIDEsICd1cCcpO1xuICAgIH1cblxuICAgIGZvY3VzSXRlbUJ5SW5kZXgoaW5kZXgsIGRpcmVjdGlvbiA9ICdkb3duJykge1xuICAgICAgICBjb25zdCBpdGVtcyA9IHRoaXMuaXRlbXM7XG4gICAgICAgIGNvbnN0IG1heCA9IGl0ZW1zLmxlbmd0aCAtIDE7XG4gICAgICAgIGNvbnN0IG9sZEluZGV4ID0gdGhpcy5mb2N1c0luZGV4O1xuXG4gICAgICAgIGZ1bmN0aW9uIGZpeEluZGV4KGluZGV4KSB7XG4gICAgICAgICAgICBpZiAoaW5kZXggPiBtYXgpIHtcbiAgICAgICAgICAgICAgICBpbmRleCA9IDA7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGluZGV4IDwgMCkge1xuICAgICAgICAgICAgICAgIGluZGV4ID0gbWF4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGluZGV4O1xuICAgICAgICB9XG5cbiAgICAgICAgaW5kZXggPSBmaXhJbmRleChpbmRleCk7XG5cbiAgICAgICAgbGV0IGkgPSAwO1xuICAgICAgICB3aGlsZSAoaSA8PSBtYXggJiYgaXRlbXNbaW5kZXhdICYmIGl0ZW1zW2luZGV4XS5nZXQoJ2Rpc2FibGVkJykpIHtcbiAgICAgICAgICAgIGluZGV4ID0gZml4SW5kZXgoZGlyZWN0aW9uID09PSAnZG93bicgPyBpbmRleCArIDEgOiBpbmRleCAtIDEpO1xuICAgICAgICAgICAgaSsrO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gYWxsIGl0ZW1zIGFyZSBkaXNhYmxlZFxuICAgICAgICBpZiAoaSA+IG1heCkgcmV0dXJuO1xuXG4gICAgICAgIHRoaXMuZm9jdXNJbmRleCA9IGluZGV4O1xuXG4gICAgICAgIGlmIChvbGRJbmRleCA+IC0xICYmIGl0ZW1zW29sZEluZGV4XSkge1xuICAgICAgICAgICAgaXRlbXNbb2xkSW5kZXhdLnVuRm9jdXMoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGl0ZW1zW2luZGV4XS5mb2N1cygpO1xuICAgIH1cblxuICAgIF9zZWxlY3RJdGVtKGUpIHtcbiAgICAgICAgdGhpcy5fc2hvd1N1Yk1lbnUoZSk7XG4gICAgICAgIGlmICh0aGlzLmZvY3VzSW5kZXggPiAtMSkge1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgdGhpcy5pdGVtc1t0aGlzLmZvY3VzSW5kZXhdLnNlbGVjdCgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgX3Nob3dTdWJNZW51KGUpIHtcbiAgICAgICAgY29uc3QgcGFyZW50ID0gdGhpcy5fZmluZFBhcmVudERyb3Bkb3duTWVudSgpO1xuICAgICAgICBpZiAoIXBhcmVudCAmJiB0aGlzLmZvY3VzSW5kZXggPCAwKSByZXR1cm47XG5cbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBpZiAocGFyZW50ICYmIHRoaXMuZm9jdXNJbmRleCA8IDApIHtcbiAgICAgICAgICAgIHRoaXMuZm9jdXNJdGVtQnlJbmRleCgwKTtcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLmZvY3VzSW5kZXggPiAtMSkge1xuICAgICAgICAgICAgdGhpcy5pdGVtc1t0aGlzLmZvY3VzSW5kZXhdLnNob3dNZW51QW5kRm9jdXMoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIF9oaWRlU3ViTWVudShlKSB7XG4gICAgICAgIGlmICh0aGlzLmZvY3VzSW5kZXggPiAtMSkge1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgdGhpcy5pdGVtc1t0aGlzLmZvY3VzSW5kZXhdLmhpZGVNZW51KCk7XG5cbiAgICAgICAgICAgIGNvbnN0IHBhcmVudCA9IGZpbmRQYXJlbnRDb21wb25lbnQoRHJvcGRvd25NZW51LCB0aGlzLCB0cnVlKTtcbiAgICAgICAgICAgIGlmIChwYXJlbnQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmRyb3Bkb3duLmhpZGUobnVsbCwgbnVsbCwgdHJ1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmb2N1c0l0ZW0oaXRlbSkge1xuICAgICAgICBjb25zdCBpbmRleCA9IHRoaXMuaXRlbXMuaW5kZXhPZihpdGVtKTtcbiAgICAgICAgdGhpcy5mb2N1c0l0ZW1CeUluZGV4KGluZGV4KTtcbiAgICB9XG5cbiAgICBfaXNDbGlja1N1Yk1lbnUodGFyZ2V0LCBzdWJNZW51cykge1xuICAgICAgICBsZXQgcmV0ID0gZmFsc2U7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc3ViTWVudXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IHN1Yk1lbnUgPSBzdWJNZW51c1tpXS5yZWZzLm1lbnU7XG4gICAgICAgICAgICBpZiAoc3ViTWVudSkge1xuICAgICAgICAgICAgICAgIGlmICh0YXJnZXQgPT09IHN1Yk1lbnUuZWxlbWVudCB8fCBzdWJNZW51LmVsZW1lbnQuY29udGFpbnModGFyZ2V0KSkge1xuICAgICAgICAgICAgICAgICAgICByZXQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByZXQgPSB0aGlzLl9pc0NsaWNrU3ViTWVudSh0YXJnZXQsIHN1Yk1lbnVzW2ldLnN1YkRyb3Bkb3ducyk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChyZXQpIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmV0O1xuICAgIH1cblxuICAgIF9kZXN0cm95KCkge1xuICAgICAgICBjb25zdCBwYXJlbnQgPSB0aGlzLl9maW5kUGFyZW50RHJvcGRvd25NZW51KCk7XG4gICAgICAgIGlmIChwYXJlbnQpIHtcbiAgICAgICAgICAgIGNvbnN0IHN1YkRyb3Bkb3ducyA9IHBhcmVudC5zdWJEcm9wZG93bnM7XG4gICAgICAgICAgICBzdWJEcm9wZG93bnMuc3BsaWNlKHN1YkRyb3Bkb3ducy5pbmRleE9mKHRoaXMpLCAxKTtcbiAgICAgICAgfSBcbiAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMudGltZXIpO1xuICAgICAgICB0aGlzLl9yZW1vdmVEb2N1bWVudEV2ZW50cygpO1xuICAgIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvZHJvcGRvd24vbWVudS5qcyIsImltcG9ydCBNb3ZlV3JhcHBlciBmcm9tICcuLi9tb3ZlV3JhcHBlcic7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihvYmosIF9WZHQsIGJsb2NrcywgJGNhbGxlZSkge1xuX1ZkdCB8fCAoX1ZkdCA9IFZkdCk7XG5vYmogfHwgKG9iaiA9IHt9KTtcbmJsb2NrcyB8fCAoYmxvY2tzID0ge30pO1xudmFyIGggPSBfVmR0Lm1pc3MuaCwgaGMgPSBfVmR0Lm1pc3MuaGMsIGh1ID0gX1ZkdC5taXNzLmh1LCB3aWRnZXRzID0gdGhpcyAmJiB0aGlzLndpZGdldHMgfHwge30sIF9ibG9ja3MgPSB7fSwgX19ibG9ja3MgPSB7fSxcbl9fdSA9IF9WZHQudXRpbHMsIGV4dGVuZCA9IF9fdS5leHRlbmQsIF9lID0gX191LmVycm9yLCBfY2xhc3NOYW1lID0gX191LmNsYXNzTmFtZSxcbl9fbyA9IF9fdS5PcHRpb25zLCBfZ2V0TW9kZWwgPSBfX28uZ2V0TW9kZWwsIF9zZXRNb2RlbCA9IF9fby5zZXRNb2RlbCxcbl9zZXRDaGVja2JveE1vZGVsID0gX191LnNldENoZWNrYm94TW9kZWwsIF9kZXRlY3RDaGVja2JveENoZWNrZWQgPSBfX3UuZGV0ZWN0Q2hlY2tib3hDaGVja2VkLFxuX3NldFNlbGVjdE1vZGVsID0gX191LnNldFNlbGVjdE1vZGVsLFxuc2VsZiA9IHRoaXMuZGF0YSwgJHRoaXMgPSB0aGlzLCBzY29wZSA9IG9iaiwgQW5pbWF0ZSA9IHNlbGYgJiYgc2VsZi5BbmltYXRlLCBwYXJlbnQgPSAoJGNhbGxlZSB8fCB7fSkuX3N1cGVyXG5cblxuY29uc3Qge2NoaWxkcmVuLCBzaG93LCB0cmlnZ2VyLCBjbGFzc05hbWUsIHRyYW5zaXRpb259ID0gc2VsZi5nZXQoKTtcblxuY29uc3QgZXZlbnRzID0ge307XG4vLyBubyBtYXR0ZXIgd2hhdCB0aGUgdHJpZ2dlciBpcywgd2Ugc2hvdWxkIHNob3cgbWVudSB3aGVuIGVudGVyIGl0LlxuLy8gZm9yIHRoaXMgY2FzZTogaG92ZXIgdHJpZ2dlciBuZXN0cyBjbGljayB0cmlnZ2VyXG5ldmVudHNbJ2V2LW1vdXNlZW50ZXInXSA9IHNlbGYuc2hvdztcbmlmICh0cmlnZ2VyID09PSAnaG92ZXInKSB7XG4gICAgZXZlbnRzWydldi1tb3VzZWxlYXZlJ10gPSBzZWxmLmhpZGUuYmluZChzZWxmLCBmYWxzZSk7XG59XG5cbnJldHVybiBoKE1vdmVXcmFwcGVyLCB7J19wYXJlbnQnOiBmdW5jdGlvbigpIHt0cnkge3JldHVybiBbc2VsZiBdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpLCAnY2hpbGRyZW4nOiBmdW5jdGlvbigpIHt0cnkge3JldHVybiBbc2hvdyBdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpID8gaChBbmltYXRlLCB7J2NsYXNzTmFtZSc6IF9jbGFzc05hbWUoZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW3tcImstZHJvcGRvd24tbWVudVwiOiB0cnVlLCBbY2xhc3NOYW1lXTogY2xhc3NOYW1lfSBdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpKSwgJ2E6dHJhbnNpdGlvbic6IGZ1bmN0aW9uKCkge3RyeSB7cmV0dXJuIFt0cmFuc2l0aW9uIF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcyksIC4uLmZ1bmN0aW9uKCkge3RyeSB7cmV0dXJuIFtldmVudHMgXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKSwgJ2E6ZGVsYXlEZXN0cm95JzogZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW2ZhbHNlIF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcyksICdldi0kZGVzdHJveWVkJzogZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW3NlbGYuX3JlbW92ZURvY3VtZW50RXZlbnRzIF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcyksICdldi0kbW91bnRlZCc6IGZ1bmN0aW9uKCkge3RyeSB7cmV0dXJuIFtzZWxmLl9vblNob3cgXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKSwgJ2NoaWxkcmVuJzogZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW2NoaWxkcmVuIF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcyksICdfY29udGV4dCc6ICR0aGlzfSwgbnVsbCwgbnVsbCwgbnVsbCwgZnVuY3Rpb24oaSkge3dpZGdldHNbJ21lbnUnXSA9IGl9KSA6IHVuZGVmaW5lZCwgJ19jb250ZXh0JzogJHRoaXN9LCBudWxsLCBudWxsLCBudWxsLCBmdW5jdGlvbihpKSB7d2lkZ2V0c1snd3JhcHBlciddID0gaX0pXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9kcm9wZG93bi9tZW51LnZkdCIsImltcG9ydCBJbnRhY3QgZnJvbSAnaW50YWN0JztcbmltcG9ydCB0ZW1wbGF0ZSBmcm9tICcuL2luZGV4LnZkdCc7XG5pbXBvcnQgJy4uLy4uL3N0eWxlcy9rcGMuc3R5bCc7XG5pbXBvcnQgJy4vaW5kZXguc3R5bCc7XG5pbXBvcnQge3NlbGVjdElucHV0fSBmcm9tICcuLi91dGlscyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIElucHV0IGV4dGVuZHMgSW50YWN0IHtcbiAgICBASW50YWN0LnRlbXBsYXRlXG4gICAgc3RhdGljIHRlbXBsYXRlID0gdGVtcGxhdGU7XG5cbiAgICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgIHJlYWRvbmx5OiBCb29sZWFuLFxuICAgICAgICBjbGVhcmFibGU6IEJvb2xlYW4sXG4gICAgICAgIGRpc2FibGVkOiBCb29sZWFuLFxuICAgICAgICBmbHVpZDogQm9vbGVhbixcbiAgICB9O1xuXG4gICAgZGVmYXVsdHMoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB0eXBlOiAndGV4dCcsIC8vIHRleHQgfCB0ZXh0YXJlYVxuICAgICAgICAgICAgbmFtZTogdW5kZWZpbmVkLFxuICAgICAgICAgICAgdmFsdWU6IHVuZGVmaW5lZCxcbiAgICAgICAgICAgIGRlZmF1bHRWYWx1ZTogdW5kZWZpbmVkLFxuICAgICAgICAgICAgcGxhY2Vob2xkZXI6IHVuZGVmaW5lZCxcbiAgICAgICAgICAgIHJlYWRvbmx5OiBmYWxzZSxcbiAgICAgICAgICAgIGNsZWFyYWJsZTogZmFsc2UsXG4gICAgICAgICAgICBkaXNhYmxlZDogZmFsc2UsXG4gICAgICAgICAgICBzaXplOiAnZGVmYXVsdCcsXG4gICAgICAgICAgICByb3dzOiAyLFxuICAgICAgICAgICAgc3BlbGxjaGVjazogZmFsc2UsXG4gICAgICAgICAgICBhdXRvV2lkdGg6IGZhbHNlLFxuICAgICAgICAgICAgZmx1aWQ6IGZhbHNlLFxuICAgICAgICAgICAgd2lkdGg6IHVuZGVmaW5lZCxcbiAgICAgICAgICAgIHRhYmluZGV4OiB1bmRlZmluZWQsXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBfaW5pdCgpIHtcbiAgICAgICAgdGhpcy5vbignJGNoYW5nZWQ6dmFsdWUnLCB0aGlzLl9hZGp1c3RXaWR0aCk7XG4gICAgICAgIHRoaXMub24oJyRjaGFuZ2VkOnBsYWNlaG9sZGVyJywgdGhpcy5fYWRqdXN0V2lkdGgpO1xuICAgIH1cblxuICAgIF9tb3VudCgpIHtcbiAgICAgICAgdGhpcy5fYWRqdXN0V2lkdGgoKTtcbiAgICB9XG5cbiAgICBfYWRqdXN0V2lkdGgoKSB7XG4gICAgICAgIGlmICh0aGlzLmdldCgnYXV0b1dpZHRoJykpIHtcbiAgICAgICAgICAgIGNvbnN0IHdpZHRoID0gdGhpcy5yZWZzLmZha2Uub2Zmc2V0V2lkdGggfHwgMTtcbiAgICAgICAgICAgIHRoaXMucmVmcy5pbnB1dC5zdHlsZS53aWR0aCA9IGAke3dpZHRoICsgMX1weGA7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjbGVhcihlKSB7XG4gICAgICAgIHRoaXMuc2V0KCd2YWx1ZScsICcnKTtcbiAgICAgICAgdGhpcy5mb2N1cygpO1xuICAgICAgICB0aGlzLnRyaWdnZXIoJ2NsZWFyJywgZSk7XG4gICAgfVxuXG4gICAgc2VsZWN0KCkge1xuICAgICAgICBzZWxlY3RJbnB1dCh0aGlzLnJlZnMuaW5wdXQpO1xuICAgIH1cblxuICAgIGZvY3VzKCkge1xuICAgICAgICB0aGlzLnJlZnMuaW5wdXQuZm9jdXMoKTtcbiAgICB9XG5cbiAgICBfb25JbnB1dChlKSB7XG4gICAgICAgIHRoaXMuc2V0KCd2YWx1ZScsIGUudGFyZ2V0LnZhbHVlKTtcbiAgICAgICAgdGhpcy50cmlnZ2VyKCdpbnB1dCcsIGUpO1xuICAgIH1cblxuICAgIF9wcm94eUV2ZW50KG5hbWUsIGUpIHtcbiAgICAgICAgdGhpcy50cmlnZ2VyKG5hbWUsIGUpO1xuICAgIH1cbn1cblxuZXhwb3J0IHtJbnB1dH07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL2lucHV0L2luZGV4LmpzIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cbiAgICBpZihtb2R1bGUuaG90KSB7XG4gICAgICAvLyAxNTI3NTc2Njc5NDAwXG4gICAgICB2YXIgY3NzUmVsb2FkID0gcmVxdWlyZShcIiEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWhvdC1sb2FkZXIvaG90TW9kdWxlUmVwbGFjZW1lbnQuanNcIikobW9kdWxlLmlkLCB7XCJmaWxlTWFwXCI6XCJ7ZmlsZU5hbWV9XCJ9KTtcbiAgICAgIG1vZHVsZS5ob3QuZGlzcG9zZShjc3NSZWxvYWQpO1xuICAgICAgbW9kdWxlLmhvdC5hY2NlcHQodW5kZWZpbmVkLCBjc3NSZWxvYWQpO1xuICAgIH1cbiAgXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9jb21wb25lbnRzL2lucHV0L2luZGV4LnN0eWxcbi8vIG1vZHVsZSBpZCA9IC4vY29tcG9uZW50cy9pbnB1dC9pbmRleC5zdHlsXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIiLCJpbXBvcnQge2FkZFN0eWxlfSBmcm9tICcuLi91dGlscyc7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihvYmosIF9WZHQsIGJsb2NrcywgJGNhbGxlZSkge1xuX1ZkdCB8fCAoX1ZkdCA9IFZkdCk7XG5vYmogfHwgKG9iaiA9IHt9KTtcbmJsb2NrcyB8fCAoYmxvY2tzID0ge30pO1xudmFyIGggPSBfVmR0Lm1pc3MuaCwgaGMgPSBfVmR0Lm1pc3MuaGMsIGh1ID0gX1ZkdC5taXNzLmh1LCB3aWRnZXRzID0gdGhpcyAmJiB0aGlzLndpZGdldHMgfHwge30sIF9ibG9ja3MgPSB7fSwgX19ibG9ja3MgPSB7fSxcbl9fdSA9IF9WZHQudXRpbHMsIGV4dGVuZCA9IF9fdS5leHRlbmQsIF9lID0gX191LmVycm9yLCBfY2xhc3NOYW1lID0gX191LmNsYXNzTmFtZSxcbl9fbyA9IF9fdS5PcHRpb25zLCBfZ2V0TW9kZWwgPSBfX28uZ2V0TW9kZWwsIF9zZXRNb2RlbCA9IF9fby5zZXRNb2RlbCxcbl9zZXRDaGVja2JveE1vZGVsID0gX191LnNldENoZWNrYm94TW9kZWwsIF9kZXRlY3RDaGVja2JveENoZWNrZWQgPSBfX3UuZGV0ZWN0Q2hlY2tib3hDaGVja2VkLFxuX3NldFNlbGVjdE1vZGVsID0gX191LnNldFNlbGVjdE1vZGVsLFxuc2VsZiA9IHRoaXMuZGF0YSwgJHRoaXMgPSB0aGlzLCBzY29wZSA9IG9iaiwgQW5pbWF0ZSA9IHNlbGYgJiYgc2VsZi5BbmltYXRlLCBwYXJlbnQgPSAoJGNhbGxlZSB8fCB7fSkuX3N1cGVyXG5cblxuY29uc3Qge1xuICAgIHR5cGUsIG5hbWUsIHZhbHVlLCBwbGFjZWhvbGRlciwgdGFiaW5kZXgsXG4gICAgcmVhZG9ubHksIGNsZWFyYWJsZSwgZGlzYWJsZWQsIHNpemUsIFxuICAgIHJvd3MsIHNwZWxsY2hlY2ssIGRlZmF1bHRWYWx1ZSwgc3R5bGUsXG4gICAgY2xhc3NOYW1lLCBhdXRvV2lkdGgsIGZsdWlkLCB3aWR0aCxcbn0gPSBzZWxmLmdldCgpO1xuXG5jb25zdCBjbGFzc05hbWVPYmogPSB7XG4gICAgJ2staW5wdXQnOiB0cnVlLFxuICAgIFtgay0ke3NpemV9YF06IHNpemUgIT09ICdkZWZhdWx0JyxcbiAgICAnay1ncm91cCc6IGJsb2Nrcy5wcmVwZW5kIHx8IGJsb2Nrcy5hcHBlbmQsXG4gICAgJ2stZGlzYWJsZWQnOiBkaXNhYmxlZCxcbiAgICAnay13aXRoLXByZWZpeCc6IGJsb2Nrcy5wcmVmaXgsXG4gICAgJ2std2l0aC1zdWZmaXgnOiBibG9ja3Muc3VmZml4LFxuICAgICdrLWNsZWFyYWJsZSc6IGNsZWFyYWJsZSxcbiAgICAnay1hdXRvLXdpZHRoJzogYXV0b1dpZHRoLFxuICAgICdrLWZsdWlkJzogZmx1aWQsXG4gICAgW2NsYXNzTmFtZV06IGNsYXNzTmFtZSxcbn1cblxuY29uc3QgZXZlbnRzID0gW1xuICAgICdrZXlkb3duJywgJ2tleXVwJywgJ2NoYW5nZScsXG4gICAgJ2tleXByZXNzJywgJ2ZvY3VzJywgJ2JsdXInLCAvKiAnaW5wdXQnICovXG5dLnJlZHVjZSgobWVtbywgbmFtZSkgPT4ge1xuICAgIG1lbW9bYGV2LSR7bmFtZX1gXSA9IHNlbGYuX3Byb3h5RXZlbnQuYmluZChzZWxmLCBuYW1lKTtcbiAgICByZXR1cm4gbWVtbztcbn0sIHt9KTtcblxuY29uc3Qgd3JhcHBlckV2ZW50cyA9IFtcbiAgICAnY2xpY2snLCAnbW91c2VlbnRlcicsICdtb3VzZWxlYXZlJ1xuXS5yZWR1Y2UoKG1lbW8sIG5hbWUpID0+IHtcbiAgICBtZW1vW2Bldi0ke25hbWV9YF0gPSBzZWxmLl9wcm94eUV2ZW50LmJpbmQoc2VsZiwgbmFtZSk7XG4gICAgcmV0dXJuIG1lbW87XG59LCB7fSk7XG5cbnJldHVybiBoKCdkaXYnLCB7J3N0eWxlJzogZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW3dpZHRoICE9IG51bGwgPyBhZGRTdHlsZShzdHlsZSwge3dpZHRoOiBgJHt3aWR0aH1weGB9KSA6IHN0eWxlIF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcyksIC4uLmZ1bmN0aW9uKCkge3RyeSB7cmV0dXJuIFt3cmFwcGVyRXZlbnRzIF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcyl9LCBbZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW2Jsb2Nrcy5wcmVwZW5kIF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcykgPyBoKCdkaXYnLCBudWxsLCAoX2Jsb2Nrc1tcInByZXBlbmRcIl0gPSBmdW5jdGlvbihwYXJlbnQpIHtyZXR1cm4gbnVsbDt9KSAmJiAoX19ibG9ja3NbXCJwcmVwZW5kXCJdID0gZnVuY3Rpb24ocGFyZW50KSB7XG52YXIgc2VsZiA9IHRoaXM7XG5yZXR1cm4gYmxvY2tzW1wicHJlcGVuZFwiXSA/IGJsb2Nrc1tcInByZXBlbmRcIl0uY2FsbCh0aGlzLCBmdW5jdGlvbigpIHtcbnJldHVybiBfYmxvY2tzW1wicHJlcGVuZFwiXS5jYWxsKHNlbGYsIHBhcmVudCk7XG59KSA6IF9ibG9ja3NbXCJwcmVwZW5kXCJdLmNhbGwodGhpcywgcGFyZW50KTtcbn0pICYmIF9fYmxvY2tzW1wicHJlcGVuZFwiXS5jYWxsKHRoaXMpLCAnay1wcmVwZW5kJykgOiB1bmRlZmluZWQsIGgoJ2RpdicsIG51bGwsIFtmdW5jdGlvbigpIHt0cnkge3JldHVybiBbYmxvY2tzLnByZWZpeCBdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpID8gaCgnZGl2JywgbnVsbCwgKF9ibG9ja3NbXCJwcmVmaXhcIl0gPSBmdW5jdGlvbihwYXJlbnQpIHtyZXR1cm4gbnVsbDt9KSAmJiAoX19ibG9ja3NbXCJwcmVmaXhcIl0gPSBmdW5jdGlvbihwYXJlbnQpIHtcbnZhciBzZWxmID0gdGhpcztcbnJldHVybiBibG9ja3NbXCJwcmVmaXhcIl0gPyBibG9ja3NbXCJwcmVmaXhcIl0uY2FsbCh0aGlzLCBmdW5jdGlvbigpIHtcbnJldHVybiBfYmxvY2tzW1wicHJlZml4XCJdLmNhbGwoc2VsZiwgcGFyZW50KTtcbn0pIDogX2Jsb2Nrc1tcInByZWZpeFwiXS5jYWxsKHRoaXMsIHBhcmVudCk7XG59KSAmJiBfX2Jsb2Nrc1tcInByZWZpeFwiXS5jYWxsKHRoaXMpLCAnay1wcmVmaXgnKSA6IHVuZGVmaW5lZCwgZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW3R5cGUgIT09ICd0ZXh0YXJlYScgXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKSA/IGgoJ2lucHV0Jywgeyd0eXBlJzogZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW3R5cGUgXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKSwgJ25hbWUnOiBmdW5jdGlvbigpIHt0cnkge3JldHVybiBbbmFtZSBdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpLCAndmFsdWUnOiBmdW5jdGlvbigpIHt0cnkge3JldHVybiBbdmFsdWUgXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKSwgJ2V2LWlucHV0JzogZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW3NlbGYuX29uSW5wdXQgXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKSwgJ2RlZmF1bHRWYWx1ZSc6IGZ1bmN0aW9uKCkge3RyeSB7cmV0dXJuIFtkZWZhdWx0VmFsdWUgXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKSwgJ3JlYWRPbmx5JzogZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW3JlYWRvbmx5IF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcyksICdwbGFjZWhvbGRlcic6IGZ1bmN0aW9uKCkge3RyeSB7cmV0dXJuIFtwbGFjZWhvbGRlciBdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpLCAnZGlzYWJsZWQnOiBmdW5jdGlvbigpIHt0cnkge3JldHVybiBbZGlzYWJsZWQgXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKSwgJ3RhYmluZGV4JzogZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW3RhYmluZGV4IF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcyksIC4uLmZ1bmN0aW9uKCkge3RyeSB7cmV0dXJuIFtldmVudHMgXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKX0sIG51bGwsICdrLWlubmVyJywgbnVsbCwgZnVuY3Rpb24oaSkge3dpZGdldHNbJ2lucHV0J10gPSBpfSkgOiBoKCd0ZXh0YXJlYScsIHsndmFsdWUnOiBmdW5jdGlvbigpIHt0cnkge3JldHVybiBbdmFsdWUgXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKSwgJ2V2LWlucHV0JzogZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW3NlbGYuX29uSW5wdXQgXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKSwgJ2RlZmF1bHRWYWx1ZSc6IGZ1bmN0aW9uKCkge3RyeSB7cmV0dXJuIFtkZWZhdWx0VmFsdWUgXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKSwgJ25hbWUnOiBmdW5jdGlvbigpIHt0cnkge3JldHVybiBbbmFtZSBdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpLCAncmVhZE9ubHknOiBmdW5jdGlvbigpIHt0cnkge3JldHVybiBbcmVhZG9ubHkgXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKSwgJ3BsYWNlaG9sZGVyJzogZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW3BsYWNlaG9sZGVyIF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcyksICdkaXNhYmxlZCc6IGZ1bmN0aW9uKCkge3RyeSB7cmV0dXJuIFtkaXNhYmxlZCBdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpLCAncm93cyc6IGZ1bmN0aW9uKCkge3RyeSB7cmV0dXJuIFtyb3dzIF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcyksICdzcGVsbGNoZWNrJzogZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW3NwZWxsY2hlY2sgXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKSwgJ3RhYmluZGV4JzogZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW3RhYmluZGV4IF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcyksIC4uLmZ1bmN0aW9uKCkge3RyeSB7cmV0dXJuIFtldmVudHMgXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKX0sIG51bGwsICdrLWlubmVyIGstdGV4dGFyZWEnLCBudWxsLCBmdW5jdGlvbihpKSB7d2lkZ2V0c1snaW5wdXQnXSA9IGl9KSwgZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW2Jsb2Nrcy5zdWZmaXggfHwgY2xlYXJhYmxlIF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcykgPyBoKCdkaXYnLCBudWxsLCBbZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW2NsZWFyYWJsZSBdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpID8gaCgnaScsIHsnZXYtY2xpY2snOiBmdW5jdGlvbigpIHt0cnkge3JldHVybiBbc2VsZi5jbGVhciBdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpfSwgbnVsbCwgX2NsYXNzTmFtZShmdW5jdGlvbigpIHt0cnkge3JldHVybiBbe1xuICAgICAgICAgICAgICAgICAgICBcImstY2xlYXIgay1pY29uIGlvbi1pb3MtY2xvc2VcIjogdHJ1ZSwgXG4gICAgICAgICAgICAgICAgICAgIFwiay1zaG93XCI6IHZhbHVlLFxuICAgICAgICAgICAgICAgIH0gXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKSkpIDogdW5kZWZpbmVkLCAoX2Jsb2Nrc1tcInN1ZmZpeFwiXSA9IGZ1bmN0aW9uKHBhcmVudCkge3JldHVybiBudWxsO30pICYmIChfX2Jsb2Nrc1tcInN1ZmZpeFwiXSA9IGZ1bmN0aW9uKHBhcmVudCkge1xudmFyIHNlbGYgPSB0aGlzO1xucmV0dXJuIGJsb2Nrc1tcInN1ZmZpeFwiXSA/IGJsb2Nrc1tcInN1ZmZpeFwiXS5jYWxsKHRoaXMsIGZ1bmN0aW9uKCkge1xucmV0dXJuIF9ibG9ja3NbXCJzdWZmaXhcIl0uY2FsbChzZWxmLCBwYXJlbnQpO1xufSkgOiBfYmxvY2tzW1wic3VmZml4XCJdLmNhbGwodGhpcywgcGFyZW50KTtcbn0pICYmIF9fYmxvY2tzW1wic3VmZml4XCJdLmNhbGwodGhpcyldLCAnay1zdWZmaXgnKSA6IHVuZGVmaW5lZCwgZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW2F1dG9XaWR0aCBdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpID8gaCgnZGl2JywgbnVsbCwgZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW3ZhbHVlID09IG51bGwgfHwgdmFsdWUgPT09ICcnID8gcGxhY2Vob2xkZXIgOiB2YWx1ZSBdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpLCAnay1mYWtlJywgbnVsbCwgZnVuY3Rpb24oaSkge3dpZGdldHNbJ2Zha2UnXSA9IGl9KSA6IHVuZGVmaW5lZF0sICdrLXdyYXBwZXInKSwgZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW2Jsb2Nrcy5hcHBlbmQgXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKSA/IGgoJ2RpdicsIG51bGwsIChfYmxvY2tzW1wiYXBwZW5kXCJdID0gZnVuY3Rpb24ocGFyZW50KSB7cmV0dXJuIG51bGw7fSkgJiYgKF9fYmxvY2tzW1wiYXBwZW5kXCJdID0gZnVuY3Rpb24ocGFyZW50KSB7XG52YXIgc2VsZiA9IHRoaXM7XG5yZXR1cm4gYmxvY2tzW1wiYXBwZW5kXCJdID8gYmxvY2tzW1wiYXBwZW5kXCJdLmNhbGwodGhpcywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gX2Jsb2Nrc1tcImFwcGVuZFwiXS5jYWxsKHNlbGYsIHBhcmVudCk7XG59KSA6IF9ibG9ja3NbXCJhcHBlbmRcIl0uY2FsbCh0aGlzLCBwYXJlbnQpO1xufSkgJiYgX19ibG9ja3NbXCJhcHBlbmRcIl0uY2FsbCh0aGlzKSwgJ2stYXBwZW5kJykgOiB1bmRlZmluZWRdLCBfY2xhc3NOYW1lKGZ1bmN0aW9uKCkge3RyeSB7cmV0dXJuIFtjbGFzc05hbWVPYmogXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKSkpXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9pbnB1dC9pbmRleC52ZHQiLCJpbXBvcnQgSW50YWN0IGZyb20gJ2ludGFjdCc7XG5pbXBvcnQgdGVtcGxhdGUgZnJvbSAnLi9pbmRleC52ZHQnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMaW5rIGV4dGVuZHMgSW50YWN0IHtcbiAgICBzdGF0aWMgaGlzdG9yeSA9IHVuZGVmaW5lZDtcblxuICAgIEBJbnRhY3QudGVtcGxhdGUoKVxuICAgIGdldCB0ZW1wbGF0ZSgpIHsgcmV0dXJuIHRlbXBsYXRlOyB9XG5cbiAgICBkZWZhdWx0cygpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGhyZWY6IHVuZGVmaW5lZCxcbiAgICAgICAgICAgIG5hbWU6IHVuZGVmaW5lZCxcbiAgICAgICAgICAgIGlzUmVwbGFjZTogZmFsc2UsXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB0byhlKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgdGhpcy50cmlnZ2VyKCdjbGljaycsIGUpO1xuICAgICAgICBjb25zdCBocmVmID0gdGhpcy5nZXQoJ2hyZWYnKTtcbiAgICAgICAgY29uc3QgbmFtZSA9IHRoaXMuZ2V0KCduYW1lJyk7XG4gICAgICAgIGNvbnN0IGhpc3RvcnkgPSBMaW5rLmhpc3Rvcnk7XG4gICAgICAgIGxldCB1cmw7XG4gICAgICAgIGlmIChocmVmICE9IG51bGwpIHtcbiAgICAgICAgICAgIHVybCA9IGhyZWY7XG4gICAgICAgIH0gZWxzZSBpZiAobmFtZSAhPSBudWxsKSB7XG4gICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShuYW1lKSkge1xuICAgICAgICAgICAgICAgIHVybCA9IExpbmsudXJsLmFwcGx5KExpbmsudXJsLCBuYW1lKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdXJsID0gTGluay51cmwobmFtZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHVybCkge1xuICAgICAgICAgICAgLy8gaWYgdGhlIGhyZWYgaXMgZXF1YWwgdG8gdGhlIGN1cnJlbnQgaHJlZiwgdGhlbiBkbyBub3RoaW5nXG4gICAgICAgICAgICBjb25zdCB7cGF0aG5hbWUsIHNlYXJjaH0gPSBoaXN0b3J5LmxvY2F0aW9uO1xuICAgICAgICAgICAgaWYgKHBhdGhuYW1lICsgc2VhcmNoID09PSB1cmwpIHJldHVybjtcblxuICAgICAgICAgICAgaWYgKHRoaXMuZ2V0KCdpc1JlcGxhY2UnKSkge1xuICAgICAgICAgICAgICAgIGhpc3RvcnkucmVwbGFjZSh1cmwpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBoaXN0b3J5LnB1c2godXJsKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuZXhwb3J0IHtMaW5rfTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvbGluay9pbmRleC5qcyIsIlxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24ob2JqLCBfVmR0LCBibG9ja3MsICRjYWxsZWUpIHtcbl9WZHQgfHwgKF9WZHQgPSBWZHQpO1xub2JqIHx8IChvYmogPSB7fSk7XG5ibG9ja3MgfHwgKGJsb2NrcyA9IHt9KTtcbnZhciBoID0gX1ZkdC5taXNzLmgsIGhjID0gX1ZkdC5taXNzLmhjLCBodSA9IF9WZHQubWlzcy5odSwgd2lkZ2V0cyA9IHRoaXMgJiYgdGhpcy53aWRnZXRzIHx8IHt9LCBfYmxvY2tzID0ge30sIF9fYmxvY2tzID0ge30sXG5fX3UgPSBfVmR0LnV0aWxzLCBleHRlbmQgPSBfX3UuZXh0ZW5kLCBfZSA9IF9fdS5lcnJvciwgX2NsYXNzTmFtZSA9IF9fdS5jbGFzc05hbWUsXG5fX28gPSBfX3UuT3B0aW9ucywgX2dldE1vZGVsID0gX19vLmdldE1vZGVsLCBfc2V0TW9kZWwgPSBfX28uc2V0TW9kZWwsXG5fc2V0Q2hlY2tib3hNb2RlbCA9IF9fdS5zZXRDaGVja2JveE1vZGVsLCBfZGV0ZWN0Q2hlY2tib3hDaGVja2VkID0gX191LmRldGVjdENoZWNrYm94Q2hlY2tlZCxcbl9zZXRTZWxlY3RNb2RlbCA9IF9fdS5zZXRTZWxlY3RNb2RlbCxcbnNlbGYgPSB0aGlzLmRhdGEsICR0aGlzID0gdGhpcywgc2NvcGUgPSBvYmosIEFuaW1hdGUgPSBzZWxmICYmIHNlbGYuQW5pbWF0ZSwgcGFyZW50ID0gKCRjYWxsZWUgfHwge30pLl9zdXBlclxuY29uc3Qge25hbWUsIGlzUmVwbGFjZSwgLi4ucmVzdH0gPSBzZWxmLmdldCgpO1xucmV0dXJuIGgoJ2EnLCB7Li4uZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW3Jlc3QgXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKSwgJ2V2LWNsaWNrJzogZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW3NlbGYudG8gXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKX0sIGZ1bmN0aW9uKCkge3RyeSB7cmV0dXJuIFtzZWxmLmdldCgnY2hpbGRyZW4nKSBdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpKVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvbGluay9pbmRleC52ZHQiLCJpbXBvcnQgSW50YWN0IGZyb20gJ2ludGFjdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1vdmVXcmFwcGVyIGV4dGVuZHMgSW50YWN0IHtcbiAgICB0ZW1wbGF0ZShzZWxmLCBWZHQpIHtcbiAgICAgICAgY29uc3QgY2hpbGRyZW4gPSBzZWxmLmdldCgnY2hpbGRyZW4nKTtcbiAgICAgICAgcmV0dXJuIGNoaWxkcmVuIHx8IFZkdC5taXNzLmhjKCdNb3ZlV3JhcHBlcicpO1xuICAgIH1cblxuICAgIGRlZmF1bHRzKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgYXV0b0Rlc3Ryb3k6IHRydWUsIFxuICAgICAgICAgICAgY29udGFpbmVyOiB1bmRlZmluZWQsXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBpbml0KC4uLmFyZ3MpIHtcbiAgICAgICAgc3VwZXIuaW5pdCguLi5hcmdzKTtcbiAgICAgICAgcmV0dXJuIHRoaXMucGxhY2Vob2xkZXIgPSBkb2N1bWVudC5jcmVhdGVDb21tZW50KFwicGxhY2Vob2xkZXJcIik7XG4gICAgfVxuXG4gICAgaHlkcmF0ZSguLi5hcmdzKSB7XG4gICAgICAgIHN1cGVyLmh5ZHJhdGUoLi4uYXJncyk7XG4gICAgICAgIHJldHVybiB0aGlzLnBsYWNlaG9sZGVyID0gZG9jdW1lbnQuY3JlYXRlQ29tbWVudCgncGxhY2Vob2xkZXInKTtcbiAgICB9XG5cbiAgICB1cGRhdGUobGFzdFZOb2RlLCBuZXh0Vk5vZGUpIHtcbiAgICAgICAgc3VwZXIudXBkYXRlKGxhc3RWTm9kZSwgbmV4dFZOb2RlKTtcbiAgICAgICAgcmV0dXJuIHRoaXMucGxhY2Vob2xkZXI7XG4gICAgfVxuXG4gICAgZGVzdHJveSguLi5hcmdzKSB7XG4gICAgICAgIGlmICh0aGlzLmdldCgnYXV0b0Rlc3Ryb3knKSkge1xuICAgICAgICAgICAgdGhpcy5fJGRlc3Ryb3koLi4uYXJncyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBcbiAgICAvKipcbiAgICAgKiBAYnJpZWYgb3ZlcnJpZGUgc3VwZXIgZGVzdHJveSBcbiAgICAgKlxuICAgICAqIE1vdmVXcmFwZXIgY29tcG9uZW50IGhhcyBjaGFuZ2VkIHRoZSBkb20gc3RydWN0aW9uLlxuICAgICAqIEl0IGlzIGFsd2F5cyB0aGUgdG9wIGxldmVsIGRvbSwgc28gd2Ugc2hvdWxkIFxuICAgICAqIHJlbW92ZSBpdCBmcm9tIHBhcmVudCBkb20uIEJ5IHBhc3NpbmcgdGhlIGNvbnRhaW5lclxuICAgICAqIHRvIHJlbW92ZSBmdW5jdGlvbiBjYW4gZG8gdGhpcy4gV2UgY2FuJ3QgcmVtb3ZlIGl0XG4gICAgICogZGlyZWN0bHkgYnkgY2FsbGluZyByZW1vdmVDaGlsZCBtZXRob2QsIGJlYWNhdXNlIGl0XG4gICAgICogbWF5YmUgaGF2ZSBsZWF2ZSBhbmltYXRpb24uXG4gICAgICpcbiAgICAgKiBAcGFyYW0gLi4uYXJnc1xuICAgICAqL1xuICAgIF8kZGVzdHJveShsYXN0Vk5vZGUsIG5leHRWTm9kZSkge1xuICAgICAgICAvLyBpZiAodGhpcy5kZXN0cm95ZWQpIHtcbiAgICAgICAgICAgIC8vIHJldHVybiBjb25zb2xlLndhcm4oJ2Rlc3Ryb3llZCBtdWx0aXBsZSB0aW1lcycpO1xuICAgICAgICAvLyB9XG4gICAgICAgIGlmICh0aGlzLnJlbmRlcmVkICYmIFxuICAgICAgICAgICAgKFxuICAgICAgICAgICAgICAgICFuZXh0Vk5vZGUgfHxcbiAgICAgICAgICAgICAgICAhKG5leHRWTm9kZS50eXBlICYgSW50YWN0LlZkdC5taXNzLlR5cGVzLkNvbXBvbmVudENsYXNzT3JJbnN0YW5jZSkgfHxcbiAgICAgICAgICAgICAgICBuZXh0Vk5vZGUua2V5ICE9PSBsYXN0Vk5vZGUua2V5XG4gICAgICAgICAgICApXG4gICAgICAgICkge1xuICAgICAgICAgICAgSW50YWN0LlZkdC5taXNzLnJlbW92ZSh0aGlzLnZkdC52Tm9kZSwgdGhpcy5jb250YWluZXIpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX2Rlc3Ryb3kobGFzdFZOb2RlLCBuZXh0Vk5vZGUpO1xuICAgICAgICB0aGlzLmRlc3Ryb3llZCA9IHRydWU7XG4gICAgICAgIHRoaXMudHJpZ2dlcignJGRlc3Ryb3llZCcsIHRoaXMpO1xuICAgICAgICB0aGlzLm9mZigpO1xuICAgIH1cblxuICAgIF9tb3VudChsYXN0Vk5vZGUsIG5leHRWTm9kZSkge1xuICAgICAgICBjb25zdCBjb250YWluZXIgPSB0aGlzLmdldCgnY29udGFpbmVyJyk7XG4gICAgICAgIGlmIChjb250YWluZXIpIHtcbiAgICAgICAgICAgIHRoaXMuY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcihjb250YWluZXIpO1xuICAgICAgICB9XG4gICAgICAgIGlmICghdGhpcy5jb250YWluZXIpIHtcbiAgICAgICAgICAgIHRoaXMuY29udGFpbmVyID0gZG9jdW1lbnQuYm9keTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLmVsZW1lbnQpO1xuICAgIH1cbn1cblxuZXhwb3J0IHtNb3ZlV3JhcHBlcn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL21vdmVXcmFwcGVyL2luZGV4LmpzIiwiY29uc3QgbWF4ID0gTWF0aC5tYXg7XG5jb25zdCBhYnMgPSBNYXRoLmFicztcbmNvbnN0IHJIb3Jpem9udGFsID0gL2xlZnR8Y2VudGVyfHJpZ2h0LztcbmNvbnN0IHJWZXJ0aWNhbCA9IC90b3B8Y2VudGVyfGJvdHRvbS87XG5jb25zdCByT2Zmc2V0ID0gL1tcXCtcXC1dXFxkKyhcXC5bXFxkXSspPyU/LztcbmNvbnN0IHJQb3NpdGlvbiA9IC9eXFx3Ky87XG5jb25zdCByUGVyY2VudCA9IC8lJC87XG5cbmZ1bmN0aW9uIGdldERpbWVuc2lvbnMoZWxlbSkge1xuICAgIGlmIChlbGVtLm5vZGVUeXBlID09PSA5KSB7XG4gICAgICAgIC8vIGRvY3VtZW50XG4gICAgICAgIGNvbnN0IHt3aWR0aCwgaGVpZ2h0fSA9IGdldERvY3VtZW50T3JXaW5kb3dSZWN0KGVsZW0pO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgd2lkdGgsXG4gICAgICAgICAgICBoZWlnaHQsXG4gICAgICAgICAgICBvZmZzZXQ6IHtcbiAgICAgICAgICAgICAgICB0b3A6IDAsXG4gICAgICAgICAgICAgICAgbGVmdDogMFxuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgIH0gZWxzZSBpZiAoZWxlbSA9PT0gd2luZG93KSB7XG4gICAgICAgIGNvbnN0IHt3aWR0aCwgaGVpZ2h0fSA9IGdldERvY3VtZW50T3JXaW5kb3dSZWN0KGVsZW0pO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgd2lkdGgsXG4gICAgICAgICAgICBoZWlnaHQsXG4gICAgICAgICAgICBvZmZzZXQ6IHtcbiAgICAgICAgICAgICAgICB0b3A6IGVsZW0ucGFnZVlPZmZzZXQsXG4gICAgICAgICAgICAgICAgbGVmdDogZWxlbS5wYWdlWE9mZnNldCxcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICB9IGVsc2UgaWYgKGVsZW0ucHJldmVudERlZmF1bHQpIHtcbiAgICAgICAgLy8gZXZlbnRcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHdpZHRoOiAwLFxuICAgICAgICAgICAgaGVpZ2h0OiAwLFxuICAgICAgICAgICAgb2Zmc2V0OiB7XG4gICAgICAgICAgICAgICAgdG9wOiBlbGVtLnBhZ2VZLFxuICAgICAgICAgICAgICAgIGxlZnQ6IGVsZW0ucGFnZVhcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICB9XG4gICAgLy8gZG9tXG4gICAgY29uc3QgcmVjdCA9IGVsZW0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgd2lkdGg6IHJlY3Qud2lkdGgsXG4gICAgICAgIGhlaWdodDogcmVjdC5oZWlnaHQsXG4gICAgICAgIG9mZnNldDoge1xuICAgICAgICAgICAgdG9wOiByZWN0LnRvcCArIHdpbmRvdy5wYWdlWU9mZnNldCxcbiAgICAgICAgICAgIGxlZnQ6IHJlY3QubGVmdCArIHdpbmRvdy5wYWdlWE9mZnNldFxuICAgICAgICB9XG4gICAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldERvY3VtZW50T3JXaW5kb3dSZWN0KGVsZW0pIHtcbiAgICBpZiAoZWxlbSA9PT0gd2luZG93KSB7XG4gICAgICAgIGNvbnN0IGQgPSBlbGVtLmRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHdpZHRoOiBkLmNsaWVudFdpZHRoLFxuICAgICAgICAgICAgaGVpZ2h0OiBkLmNsaWVudEhlaWdodCxcbiAgICAgICAgfTtcbiAgICB9XG4gICAgY29uc3QgZCA9IGVsZW0uZG9jdW1lbnRFbGVtZW50O1xuICAgIGNvbnN0IGIgPSBlbGVtLmJvZHk7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgd2lkdGg6IG1heChcbiAgICAgICAgICAgIGIuc2Nyb2xsV2lkdGgsIGQuc2Nyb2xsV2lkdGgsXG4gICAgICAgICAgICBiLm9mZnNldFdpZHRoLCBkLm9mZnNldFdpZHRoLFxuICAgICAgICAgICAgZC5jbGllbnRXaWR0aFxuICAgICAgICApLFxuICAgICAgICBoZWlnaHQ6IG1heChcbiAgICAgICAgICAgIGIuc2Nyb2xsSGVpZ2h0LCBkLnNjcm9sbEhlaWdodCxcbiAgICAgICAgICAgIGIub2Zmc2V0SGVpZ2h0LCBkLm9mZnNldEhlaWdodCxcbiAgICAgICAgICAgIGQuY2xpZW50SGVpZ2h0XG4gICAgICAgIClcbiAgICB9O1xufVxuXG5mdW5jdGlvbiBnZXRPZmZzZXRzKG9mZnNldHMsIHdpZHRoLCBoZWlnaHQpIHtcbiAgICByZXR1cm4gW1xuICAgICAgICBwYXJzZUZsb2F0KG9mZnNldHNbMF0pICogKHJQZXJjZW50LnRlc3Qob2Zmc2V0c1swXSkgPyB3aWR0aCAvIDEwMCA6IDEpLFxuICAgICAgICBwYXJzZUZsb2F0KG9mZnNldHNbMV0pICogKHJQZXJjZW50LnRlc3Qob2Zmc2V0c1sxXSkgPyBoZWlnaHQgLyAxMDAgOiAxKSxcbiAgICBdO1xufVxuXG4vLyByZWZlcmVuY2U6IGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvMTMzODI1MTYvZ2V0dGluZy1zY3JvbGwtYmFyLXdpZHRoLXVzaW5nLWphdmFzY3JpcHRcbmxldCBfc2Nyb2xsQmFyV2lkdGg7XG5leHBvcnQgZnVuY3Rpb24gc2Nyb2xsYmFyV2lkdGgoKSB7XG4gICAgaWYgKF9zY3JvbGxCYXJXaWR0aCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHJldHVybiBfc2Nyb2xsQmFyV2lkdGg7XG4gICAgfVxuXG4gICAgdmFyIG91dGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBvdXRlci5zdHlsZS52aXNpYmlsaXR5ID0gXCJoaWRkZW5cIjtcbiAgICBvdXRlci5zdHlsZS53aWR0aCA9IFwiMTAwcHhcIjtcbiAgICBvdXRlci5zdHlsZS5tc092ZXJmbG93U3R5bGUgPSBcInNjcm9sbGJhclwiOyAvLyBuZWVkZWQgZm9yIFdpbkpTIGFwcHNcblxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQob3V0ZXIpO1xuXG4gICAgdmFyIHdpZHRoTm9TY3JvbGwgPSBvdXRlci5vZmZzZXRXaWR0aDtcbiAgICAvLyBmb3JjZSBzY3JvbGxiYXJzXG4gICAgb3V0ZXIuc3R5bGUub3ZlcmZsb3cgPSBcInNjcm9sbFwiO1xuXG4gICAgLy8gYWRkIGlubmVyZGl2XG4gICAgdmFyIGlubmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBpbm5lci5zdHlsZS53aWR0aCA9IFwiMTAwJVwiO1xuICAgIG91dGVyLmFwcGVuZENoaWxkKGlubmVyKTtcblxuICAgIHZhciB3aWR0aFdpdGhTY3JvbGwgPSBpbm5lci5vZmZzZXRXaWR0aDtcblxuICAgIC8vIHJlbW92ZSBkaXZzXG4gICAgb3V0ZXIucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChvdXRlcik7XG5cbiAgICByZXR1cm4gKF9zY3JvbGxCYXJXaWR0aCA9IHdpZHRoTm9TY3JvbGwgLSB3aWR0aFdpdGhTY3JvbGwpO1xufVxuXG5mdW5jdGlvbiBnZXRTY3JvbGxJbmZvKHdpdGhpbikge1xuICAgIGNvbnN0IG92ZXJmbG93WCA9IHdpdGhpbi5pc1dpbmRvdyB8fCB3aXRoaW4uaXNEb2N1bWVudCA/IFxuICAgICAgICAnJyA6IHdpdGhpbi5lbGVtZW50LnN0eWxlLm92ZXJmbG93WDtcbiAgICBjb25zdCBvdmVyZmxvd1kgPSB3aXRoaW4uaXNXaW5kb3cgfHwgd2l0aGluLmlzRG9jdW1lbnQgPyBcbiAgICAgICAgJycgOiB3aXRoaW4uZWxlbWVudC5zdHlsZS5vdmVyZmxvd1k7XG4gICAgY29uc3QgaGFzT3ZlcmZsb3dYID0gb3ZlcmZsb3dYID09PSAnc2Nyb2xsJyB8fCBcbiAgICAgICAgKG92ZXJmbG93WCA9PT0gJ2F1dG8nICYmIHdpdGhpbi53aWR0aCA8IHdpdGhpbi5lbGVtZW50LnNjcm9sbFdpZHRoKTtcbiAgICBjb25zdCBoYXNPdmVyZmxvd1kgPSBvdmVyZmxvd1kgPT09ICdzY3JvbGwnIHx8IFxuICAgICAgICAob3ZlcmZsb3dZID09PSAnYXV0bycgJiYgd2l0aGluLmhlaWdodCA8IHdpdGhpbi5lbGVtZW50LnNjcm9sbEhlaWdodCk7XG4gICAgXG4gICAgcmV0dXJuIHtcbiAgICAgICAgd2lkdGg6IGhhc092ZXJmbG93WSA/IHNjcm9sbGJhcldpZHRoKCkgOiAwLFxuICAgICAgICBoZWlnaHQ6IGhhc092ZXJmbG93WCA/IHNjcm9sbGJhcldpZHRoKCkgOiAwLFxuICAgIH07XG59XG5cbmZ1bmN0aW9uIGdldFdpdGhpbkluZm8oZWxlbWVudCkge1xuICAgIGVsZW1lbnQgfHwgKGVsZW1lbnQgPSB3aW5kb3cpO1xuICAgIGNvbnN0IGlzV2luZG93ID0gZWxlbWVudCA9PT0gd2luZG93O1xuICAgIGNvbnN0IGlzRG9jdW1lbnQgPSBlbGVtZW50Lm5vZGVUeXBlID09PSA5O1xuICAgIGNvbnN0IGhhc09mZnNldCA9ICFpc1dpbmRvdyAmJiAhaXNEb2N1bWVudDtcblxuICAgIGNvbnN0IHJldCA9IHtlbGVtZW50LCBpc1dpbmRvdywgaXNEb2N1bWVudH07XG4gICAgaWYgKGhhc09mZnNldCkge1xuICAgICAgICBjb25zdCByZWN0ID0gZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgICAgcmV0Lm9mZnNldCA9IHtcbiAgICAgICAgICAgIHRvcDogcmVjdC50b3AgKyB3aW5kb3cucGFnZVlPZmZzZXQsXG4gICAgICAgICAgICBsZWZ0OiByZWN0LmxlZnQgKyB3aW5kb3cucGFnZVhPZmZzZXQsXG4gICAgICAgIH07XG4gICAgICAgIHJldC53aWR0aCA9IHJlY3Qud2lkdGg7XG4gICAgICAgIHJldC5oZWlnaHQgPSByZWN0LmhlaWdodDtcbiAgICAgICAgcmV0LnNjcm9sbExlZnQgPSBlbGVtZW50LnNjcm9sbExlZnQ7XG4gICAgICAgIHJldC5zY3JvbGxUb3AgPSBlbGVtZW50LnNjcm9sbFRvcDtcbiAgICB9IGVsc2Uge1xuICAgICAgICByZXQub2Zmc2V0ID0ge3RvcDogMCwgbGVmdDogMH07XG4gICAgICAgIGNvbnN0IHJlY3QgPSBnZXREb2N1bWVudE9yV2luZG93UmVjdChlbGVtZW50KTtcbiAgICAgICAgcmV0LndpZHRoID0gcmVjdC53aWR0aDtcbiAgICAgICAgcmV0LmhlaWdodCA9IHJlY3QuaGVpZ2h0O1xuICAgICAgICByZXQuc2Nyb2xsTGVmdCA9IHdpbmRvdy5wYWdlWE9mZnNldDtcbiAgICAgICAgcmV0LnNjcm9sbFRvcCA9IHdpbmRvdy5wYWdlWU9mZnNldDtcbiAgICB9XG5cbiAgICByZXR1cm4gcmV0O1xufVxuXG5mdW5jdGlvbiBwYXJzZUNzcyhzdHlsZSwgcHJvcGVydHkpIHtcbiAgICByZXR1cm4gcGFyc2VJbnQoc3R5bGVbcHJvcGVydHldLCAxMCkgfHwgMDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcG9zaXRpb24oZWxlbSwgb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSBPYmplY3QuYXNzaWduKHt9LCBvcHRpb25zKTtcblxuICAgIGNvbnN0IHRhcmdldCA9IG9wdGlvbnMub2YgfHwgd2luZG93O1xuICAgIGlmICh0YXJnZXQucHJldmVudERlZmF1bHQpIHtcbiAgICAgICAgb3B0aW9ucy5hdCA9IFwibGVmdCB0b3BcIjtcbiAgICB9XG4gICAgY29uc3Qge1xuICAgICAgICB3aWR0aDogdGFyZ2V0V2lkdGgsXG4gICAgICAgIGhlaWdodDogdGFyZ2V0SGVpZ2h0LCBcbiAgICAgICAgb2Zmc2V0OiB0YXJnZXRPZmZzZXRcbiAgICB9ID0gZ2V0RGltZW5zaW9ucyh0YXJnZXQpO1xuICAgIGNvbnN0IGJhc2VQb3NpdGlvbiA9IE9iamVjdC5hc3NpZ24oe30sIHRhcmdldE9mZnNldCk7XG4gICAgY29uc3QgY29sbGlzaW9uID0gKG9wdGlvbnMuY29sbGlzaW9uIHx8ICdmbGlwJykuc3BsaXQoJyAnKTtcbiAgICBjb25zdCBvZmZzZXRzID0ge307XG4gICAgY29uc3Qgd2l0aGluID0gZ2V0V2l0aGluSW5mbyhvcHRpb25zLndpdGhpbik7XG4gICAgY29uc3Qgc2Nyb2xsSW5mbyA9IGdldFNjcm9sbEluZm8od2l0aGluKTtcblxuICAgIFsnbXknLCAnYXQnXS5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICBsZXQgcG9zID0gKG9wdGlvbnNbaXRlbV0gfHwgJycpLnNwbGl0KCcgJyk7XG5cbiAgICAgICAgaWYgKHBvcy5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgICAgIHBvcyA9IHJIb3Jpem9udGFsLnRlc3QocG9zWzBdKSA/XG4gICAgICAgICAgICAgICAgcG9zLmNvbmNhdChbJ2NlbnRlciddKSA6XG4gICAgICAgICAgICAgICAgclZlcnRpY2FsLnRlc3QocG9zWzBdKSA/XG4gICAgICAgICAgICAgICAgICAgIFsnY2VudGVyJ10uY29uY2F0KHBvcykgOlxuICAgICAgICAgICAgICAgICAgICBbJ2NlbnRlcicsICdjZW50ZXInXTtcbiAgICAgICAgfVxuICAgICAgICBwb3NbMF0gPSBySG9yaXpvbnRhbC50ZXN0KHBvc1swXSkgPyBwb3NbMF0gOiAnY2VudGVyJztcbiAgICAgICAgcG9zWzFdID0gclZlcnRpY2FsLnRlc3QocG9zWzFdKSA/IHBvc1sxXSA6ICdjZW50ZXInO1xuXG4gICAgICAgIGNvbnN0IGhvcml6b250YWxPZmZzZXQgPSByT2Zmc2V0LmV4ZWMocG9zWzBdKTtcbiAgICAgICAgY29uc3QgdmVydGljYWxPZmZzZXQgPSByT2Zmc2V0LmV4ZWMocG9zWzFdKTtcbiAgICAgICAgb2Zmc2V0c1tpdGVtXSA9IFtcbiAgICAgICAgICAgIGhvcml6b250YWxPZmZzZXQgPyBob3Jpem9udGFsT2Zmc2V0WzBdIDogMCxcbiAgICAgICAgICAgIHZlcnRpY2FsT2Zmc2V0ID8gdmVydGljYWxPZmZzZXRbMF0gOiAwXG4gICAgICAgIF07XG5cbiAgICAgICAgb3B0aW9uc1tpdGVtXSA9IFtcbiAgICAgICAgICAgIHJQb3NpdGlvbi5leGVjKHBvc1swXSlbMF0sXG4gICAgICAgICAgICByUG9zaXRpb24uZXhlYyhwb3NbMV0pWzBdXG4gICAgICAgIF07XG4gICAgfSk7XG5cbiAgICBpZiAoY29sbGlzaW9uLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICBjb2xsaXNpb25bMV0gPSBjb2xsaXNpb25bMF07XG4gICAgfVxuXG4gICAgY29uc3QgYXQgPSBvcHRpb25zLmF0O1xuICAgIGlmIChhdFswXSA9PT0gJ3JpZ2h0Jykge1xuICAgICAgICBiYXNlUG9zaXRpb24ubGVmdCArPSB0YXJnZXRXaWR0aDtcbiAgICB9IGVsc2UgaWYgKGF0WzBdID09PSAnY2VudGVyJykge1xuICAgICAgICBiYXNlUG9zaXRpb24ubGVmdCArPSB0YXJnZXRXaWR0aCAvIDI7XG4gICAgfVxuICAgIGlmIChhdFsxXSA9PT0gJ2JvdHRvbScpIHtcbiAgICAgICAgYmFzZVBvc2l0aW9uLnRvcCArPSB0YXJnZXRIZWlnaHQ7XG4gICAgfSBlbHNlIGlmIChhdFsxXSA9PT0gJ2NlbnRlcicpIHtcbiAgICAgICAgYmFzZVBvc2l0aW9uLnRvcCArPSB0YXJnZXRIZWlnaHQgLyAyO1xuICAgIH1cblxuICAgIGNvbnN0IGF0T2Zmc2V0ID0gZ2V0T2Zmc2V0cyhvZmZzZXRzLmF0LCB0YXJnZXRXaWR0aCwgdGFyZ2V0SGVpZ2h0KTtcbiAgICBiYXNlUG9zaXRpb24ubGVmdCArPSBhdE9mZnNldFswXTtcbiAgICBiYXNlUG9zaXRpb24udG9wICs9IGF0T2Zmc2V0WzFdO1xuXG4gICAgY29uc3QgZWxlbVdpZHRoID0gZWxlbS5vZmZzZXRXaWR0aDtcbiAgICBjb25zdCBlbGVtSGVpZ2h0ID0gZWxlbS5vZmZzZXRIZWlnaHQ7XG4gICAgY29uc3QgcG9zaXRpb24gPSBPYmplY3QuYXNzaWduKHt9LCBiYXNlUG9zaXRpb24pO1xuICAgIGNvbnN0IG15T2Zmc2V0ID0gZ2V0T2Zmc2V0cyhvZmZzZXRzLm15LCBlbGVtV2lkdGgsIGVsZW1IZWlnaHQpO1xuICAgIGNvbnN0IGNvbXB1dGVkU3R5bGUgPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShlbGVtKTtcbiAgICBjb25zdCBtYXJnaW5MZWZ0ID0gcGFyc2VDc3MoY29tcHV0ZWRTdHlsZSwgJ21hcmdpbkxlZnQnKTtcbiAgICBjb25zdCBtYXJnaW5Ub3AgPSBwYXJzZUNzcyhjb21wdXRlZFN0eWxlLCAnbWFyZ2luVG9wJyk7XG4gICAgY29uc3QgY29sbGlzaW9uV2lkdGggPSBlbGVtV2lkdGggKyBtYXJnaW5MZWZ0ICsgcGFyc2VDc3MoY29tcHV0ZWRTdHlsZSwgJ21hcmdpblJpZ2h0JykgKyBzY3JvbGxJbmZvLndpZHRoO1xuICAgIGNvbnN0IGNvbGxpc2lvbkhlaWdodCA9IGVsZW1IZWlnaHQgKyBtYXJnaW5Ub3AgKyBwYXJzZUNzcyhjb21wdXRlZFN0eWxlLCAnbWFyZ2luQm90dG9tJykgKyBzY3JvbGxJbmZvLmhlaWdodDtcbiAgICBjb25zdCBjb2xsaXNpb25Qb3NpdGlvbiA9IHttYXJnaW5MZWZ0LCBtYXJnaW5Ub3B9O1xuXG4gICAgY29uc3QgbXkgPSBvcHRpb25zLm15O1xuICAgIGlmIChteVswXSA9PT0gJ3JpZ2h0Jykge1xuICAgICAgICBwb3NpdGlvbi5sZWZ0IC09IGVsZW1XaWR0aDtcbiAgICB9IGVsc2UgaWYgKG15WzBdID09PSAnY2VudGVyJykge1xuICAgICAgICBwb3NpdGlvbi5sZWZ0IC09IGVsZW1XaWR0aCAvIDI7XG4gICAgfVxuICAgIGlmIChteVsxXSA9PT0gJ2JvdHRvbScpIHtcbiAgICAgICAgcG9zaXRpb24udG9wIC09IGVsZW1IZWlnaHQ7XG4gICAgfSBlbHNlIGlmIChteVsxXSA9PT0gJ2NlbnRlcicpIHtcbiAgICAgICAgcG9zaXRpb24udG9wIC09IGVsZW1IZWlnaHQgLyAyO1xuICAgIH1cbiAgICBwb3NpdGlvbi5sZWZ0ICs9IG15T2Zmc2V0WzBdO1xuICAgIHBvc2l0aW9uLnRvcCArPSBteU9mZnNldFsxXTtcblxuICAgIFsnbGVmdCcsICd0b3AnXS5mb3JFYWNoKChkaXIsIGkpID0+IHtcbiAgICAgICAgY29uc3QgY29sbCA9IGNvbGxpc2lvbltpXTtcbiAgICAgICAgaWYgKHJ1bGVzW2NvbGxdKSB7XG4gICAgICAgICAgICBydWxlc1tjb2xsXVtkaXJdKHBvc2l0aW9uLCB7XG4gICAgICAgICAgICAgICAgdGFyZ2V0V2lkdGgsXG4gICAgICAgICAgICAgICAgdGFyZ2V0SGVpZ2h0LFxuICAgICAgICAgICAgICAgIGVsZW1XaWR0aCxcbiAgICAgICAgICAgICAgICBlbGVtSGVpZ2h0LFxuICAgICAgICAgICAgICAgIGNvbGxpc2lvblBvc2l0aW9uLFxuICAgICAgICAgICAgICAgIGNvbGxpc2lvbldpZHRoLFxuICAgICAgICAgICAgICAgIGNvbGxpc2lvbkhlaWdodCxcbiAgICAgICAgICAgICAgICBvZmZzZXQ6IFthdE9mZnNldFswXSArIG15T2Zmc2V0WzBdLCBhdE9mZnNldFsxXSArIG15T2Zmc2V0WzFdXSxcbiAgICAgICAgICAgICAgICBteTogb3B0aW9ucy5teSxcbiAgICAgICAgICAgICAgICBhdDogb3B0aW9ucy5hdCxcbiAgICAgICAgICAgICAgICB3aXRoaW4sXG4gICAgICAgICAgICAgICAgZWxlbVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIGlmIChvcHRpb25zLnVzaW5nKSB7XG4gICAgICAgIGNvbnN0IGxlZnQgPSB0YXJnZXRPZmZzZXQubGVmdCAtIHBvc2l0aW9uLmxlZnQ7XG4gICAgICAgIGNvbnN0IHJpZ2h0ID0gbGVmdCArIHRhcmdldFdpZHRoIC0gZWxlbVdpZHRoO1xuICAgICAgICBjb25zdCB0b3AgPSB0YXJnZXRPZmZzZXQudG9wIC0gcG9zaXRpb24udG9wO1xuICAgICAgICBjb25zdCBib3R0b20gPSB0b3AgKyB0YXJnZXRIZWlnaHQgLSBlbGVtSGVpZ2h0O1xuICAgICAgICBjb25zdCBmZWVkYmFjayA9IHtcbiAgICAgICAgICAgIHRhcmdldDoge1xuICAgICAgICAgICAgICAgIGVsZW1lbnQ6IHRhcmdldCxcbiAgICAgICAgICAgICAgICBsZWZ0OiB0YXJnZXRPZmZzZXQubGVmdCxcbiAgICAgICAgICAgICAgICB0b3A6IHRhcmdldE9mZnNldC50b3AsXG4gICAgICAgICAgICAgICAgd2lkdGg6IHRhcmdldFdpZHRoLFxuICAgICAgICAgICAgICAgIGhlaWdodDogdGFyZ2V0SGVpZ2h0LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGVsZW1lbnQ6IHtcbiAgICAgICAgICAgICAgICBlbGVtZW50OiBlbGVtLFxuICAgICAgICAgICAgICAgIGxlZnQ6IHBvc2l0aW9uLmxlZnQsXG4gICAgICAgICAgICAgICAgdG9wOiBwb3NpdGlvbi50b3AsXG4gICAgICAgICAgICAgICAgd2lkdGg6IGVsZW1XaWR0aCxcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IGVsZW1IZWlnaHQsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgaG9yaXpvbnRhbDogcmlnaHQgPCAwID8gJ2xlZnQnIDogbGVmdCA+IDAgPyAncmlnaHQnIDogJ2NlbnRlcicsXG4gICAgICAgICAgICB2ZXJ0aWNhbDogYm90dG9tIDwgMCA/ICd0b3AnIDogdG9wID4gMCA/ICdib3R0b20nIDogJ21pZGRsZScsXG4gICAgICAgIH07XG4gICAgICAgIGlmICh0YXJnZXRXaWR0aCA8IGVsZW1XaWR0aCAmJiBhYnMobGVmdCArIHJpZ2h0KSA8IHRhcmdldFdpZHRoKSB7XG4gICAgICAgICAgICBmZWVkYmFjay5ob3Jpem9udGFsID0gJ2NlbnRlcic7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRhcmdldEhlaWdodCA8IGVsZW1IZWlnaHQgJiYgYWJzKHRvcCArIGJvdHRvbSkgPCB0YXJnZXRIZWlnaHQpIHtcbiAgICAgICAgICAgIGZlZWRiYWNrLnZlcnRpY2FsID0gJ21pZGRsZSc7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoXG4gICAgICAgICAgICBwb3NpdGlvbi50b3AgKyBlbGVtSGVpZ2h0IDw9IHRhcmdldE9mZnNldC50b3AgfHwgXG4gICAgICAgICAgICBwb3NpdGlvbi50b3AgPj0gdGFyZ2V0T2Zmc2V0LnRvcCArIHRhcmdldEhlaWdodFxuICAgICAgICApIHtcbiAgICAgICAgICAgIGZlZWRiYWNrLmltcG9ydGFudCA9ICd2ZXJ0aWNhbCc7XG4gICAgICAgIH0gZWxzZSBpZiAoXG4gICAgICAgICAgICBwb3NpdGlvbi5sZWZ0ICsgZWxlbVdpZHRoIDw9IHRhcmdldE9mZnNldC5sZWZ0IHx8XG4gICAgICAgICAgICBwb3NpdGlvbi5sZWZ0ID49IHRhcmdldE9mZnNldC5sZWZ0ICsgdGFyZ2V0V2lkdGhcbiAgICAgICAgKSB7XG4gICAgICAgICAgICBmZWVkYmFjay5pbXBvcnRhbnQgPSAnaG9yaXpvbnRhbCc7XG4gICAgICAgIH0gZWxzZSBpZiAobWF4KGFicyhsZWZ0KSwgYWJzKHJpZ2h0KSkgPiBtYXgoYWJzKHRvcCksIGFicyhib3R0b20pKSkge1xuICAgICAgICAgICAgZmVlZGJhY2suaW1wb3J0YW50ID0gJ2hvcml6b250YWwnO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZmVlZGJhY2suaW1wb3J0YW50ID0gJ3ZlcnRpY2FsJztcbiAgICAgICAgfVxuXG4gICAgICAgIG9wdGlvbnMudXNpbmcoZmVlZGJhY2ssIHBvc2l0aW9uKTtcbiAgICB9XG5cbiAgICBjb25zdCBzdHlsZSA9IGVsZW0uc3R5bGU7XG4gICAgaWYgKGNvbXB1dGVkU3R5bGUucG9zaXRpb24gPT09ICdzdGF0aWMnKSB7XG4gICAgICAgIHN0eWxlLnBvc2l0aW9uID0gJ3JlbGF0aXZlJztcbiAgICB9XG4gICAgc3R5bGUubGVmdCA9IHBvc2l0aW9uLmxlZnQgKyAncHgnO1xuICAgIHN0eWxlLnRvcCA9IHBvc2l0aW9uLnRvcCArICdweCc7XG59XG5cbmNvbnN0IHJ1bGVzID0ge1xuICAgIGZpdDoge1xuICAgICAgICBsZWZ0KHBvc2l0aW9uLCBkYXRhKSB7XG4gICAgICAgICAgICBjb25zdCB3aXRoaW4gPSBkYXRhLndpdGhpbjtcbiAgICAgICAgICAgIGNvbnN0IHdpdGhpbk9mZnNldCA9IHdpdGhpbi5pc1dpbmRvdyA/IHdpdGhpbi5zY3JvbGxMZWZ0IDogd2l0aGluLm9mZnNldC5sZWZ0O1xuICAgICAgICAgICAgY29uc3Qgb3V0ZXJXaWR0aCA9IHdpdGhpbi53aWR0aDtcbiAgICAgICAgICAgIGNvbnN0IGNvbGxpc2lvblBvc0xlZnQgPSAgcG9zaXRpb24ubGVmdCAtIGRhdGEuY29sbGlzaW9uUG9zaXRpb24ubWFyZ2luTGVmdDtcbiAgICAgICAgICAgIGNvbnN0IG92ZXJMZWZ0ID0gd2l0aGluT2Zmc2V0IC0gY29sbGlzaW9uUG9zTGVmdDtcbiAgICAgICAgICAgIGNvbnN0IG92ZXJSaWdodCA9IGNvbGxpc2lvblBvc0xlZnQgKyBkYXRhLmNvbGxpc2lvbldpZHRoIC0gb3V0ZXJXaWR0aCAtIHdpdGhpbk9mZnNldDtcbiAgICAgICAgICAgIGxldCBuZXdPdmVyUmlnaHQ7XG5cbiAgICAgICAgICAgIGlmIChkYXRhLmNvbGxpc2lvbldpZHRoID4gb3V0ZXJXaWR0aCkge1xuICAgICAgICAgICAgICAgIGlmIChvdmVyTGVmdCA+IDAgJiYgb3ZlclJpZ2h0IDw9MCkge1xuICAgICAgICAgICAgICAgICAgICBuZXdPdmVyUmlnaHQgPSBwb3NpdGlvbi5sZWZ0ICsgb3ZlckxlZnQgKyBkYXRhLmNvbGxpc2lvbldpZHRoIC0gb3V0ZXJXaWR0aCAtIHdpdGhpbk9mZnNldDtcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb24ubGVmdCArPSBvdmVyTGVmdCAtIG5ld092ZXJSaWdodDtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKG92ZXJSaWdodCA+IDAgJiYgb3ZlckxlZnQgPD0wKSB7XG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uLmxlZnQgPSB3aXRoaW5PZmZzZXQ7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChvdmVyTGVmdCA+IG92ZXJSaWdodCkge1xuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbi5sZWZ0ID0gd2l0aGluT2Zmc2V0ICsgb3V0ZXJXaWR0aCAtIGRhdGEuY29sbGlzaW9uV2lkdGg7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb24ubGVmdCA9IHdpdGhpbk9mZnNldDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2UgaWYgKG92ZXJMZWZ0ID4gMCkge1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uLmxlZnQgKz0gb3ZlckxlZnQ7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKG92ZXJSaWdodCA+IDApIHtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbi5sZWZ0IC09IG92ZXJSaWdodDtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcG9zaXRpb24ubGVmdCA9IG1heChwb3NpdGlvbi5sZWZ0IC0gY29sbGlzaW9uUG9zTGVmdCwgcG9zaXRpb24ubGVmdCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgdG9wKHBvc2l0aW9uLCBkYXRhKSB7XG4gICAgICAgICAgICBjb25zdCB3aXRoaW4gPSBkYXRhLndpdGhpbjtcbiAgICAgICAgICAgIGNvbnN0IHdpdGhpbk9mZnNldCA9IHdpdGhpbi5pc1dpbmRvdyA/IHdpdGhpbi5zY3JvbGxUb3AgOiB3aXRoaW4ub2Zmc2V0LnRvcDtcbiAgICAgICAgICAgIGNvbnN0IG91dGVySGVpZ2h0ID0gZGF0YS53aXRoaW4uaGVpZ2h0O1xuICAgICAgICAgICAgY29uc3QgY29sbGlzaW9uUG9zVG9wID0gcG9zaXRpb24udG9wIC0gZGF0YS5jb2xsaXNpb25Qb3NpdGlvbi5tYXJnaW5Ub3A7XG4gICAgICAgICAgICBjb25zdCBvdmVyVG9wID0gd2l0aGluT2Zmc2V0IC0gY29sbGlzaW9uUG9zVG9wO1xuICAgICAgICAgICAgY29uc3Qgb3ZlckJvdHRvbSA9IGNvbGxpc2lvblBvc1RvcCArIGRhdGEuY29sbGlzaW9uSGVpZ2h0IC0gb3V0ZXJIZWlnaHQgLSB3aXRoaW5PZmZzZXQ7XG4gICAgICAgICAgICBsZXQgbmV3T3ZlckJvdHRvbTtcblxuICAgICAgICAgICAgaWYgKGRhdGEuY29sbGlzaW9uSGVpZ2h0ID4gb3V0ZXJIZWlnaHQpIHtcbiAgICAgICAgICAgICAgICBpZiAob3ZlclRvcCA+IDAgJiYgb3ZlckJvdHRvbSA8PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIG5ld092ZXJCb3R0b20gPSBwb3NpdGlvbi50b3AgKyBvdmVyVG9wICsgZGF0YS5jb2xsaXNpb25IZWlnaHQgLSBvdXRlckhlaWdodCAtIHdpdGhpbk9mZnNldDtcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb24udG9wICs9IG92ZXJUb3AgLSBuZXdPdmVyQm90dG9tO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAob3ZlckJvdHRvbSA+IDAgJiYgb3ZlclRvcCA8PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uLnRvcCA9IHdpdGhpbk9mZnNldDtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKG92ZXJUb3AgPiBvdmVyQm90dG9tKSB7XG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uLnRvcCA9IHdpdGhpbk9mZnNldCArIG91dGVySGVpZ2h0IC0gZGF0YS5jb2xsaXNpb25IZWlnaHQ7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb24udG9wID0gd2l0aGluT2Zmc2V0O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSBpZiAob3ZlclRvcCA+IDApIHtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbi50b3AgKz0gb3ZlclRvcDtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAob3ZlckJvdHRvbSA+IDApIHtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbi50b3AgLT0gb3ZlckJvdHRvbTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcG9zaXRpb24udG9wID0gbWF4KHBvc2l0aW9uLnRvcCAtIGNvbGxpc2lvblBvc1RvcCwgcG9zaXRpb24udG9wKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICBmbGlwOiB7XG4gICAgICAgIGxlZnQocG9zaXRpb24sIGRhdGEpIHtcbiAgICAgICAgICAgIGNvbnN0IHdpdGhpbiA9IGRhdGEud2l0aGluO1xuICAgICAgICAgICAgY29uc3Qgd2l0aGluT2Zmc2V0ID0gd2l0aGluLm9mZnNldC5sZWZ0ICsgd2l0aGluLnNjcm9sbExlZnQ7XG4gICAgICAgICAgICBjb25zdCBvdXRlcldpZHRoID0gd2l0aGluLndpZHRoO1xuICAgICAgICAgICAgY29uc3Qgb2Zmc2V0TGVmdCA9IHdpdGhpbi5pc1dpbmRvdyA/IHdpdGhpbi5zY3JvbGxMZWZ0IDogd2l0aGluLm9mZnNldC5sZWZ0O1xuICAgICAgICAgICAgY29uc3QgY29sbGlzaW9uUG9zTGVmdCA9IHBvc2l0aW9uLmxlZnQgLSBkYXRhLmNvbGxpc2lvblBvc2l0aW9uLm1hcmdpbkxlZnQ7XG4gICAgICAgICAgICBjb25zdCBvdmVyTGVmdCA9IGNvbGxpc2lvblBvc0xlZnQgLSBvZmZzZXRMZWZ0O1xuICAgICAgICAgICAgY29uc3Qgb3ZlclJpZ2h0ID0gY29sbGlzaW9uUG9zTGVmdCArIGRhdGEuY29sbGlzaW9uV2lkdGggLSBvdXRlcldpZHRoIC0gb2Zmc2V0TGVmdDtcbiAgICAgICAgICAgIGNvbnN0IG15T2Zmc2V0ID0gZGF0YS5teVswXSA9PT0gJ2xlZnQnID8gXG4gICAgICAgICAgICAgICAgLWRhdGEuZWxlbVdpZHRoIDpcbiAgICAgICAgICAgICAgICBkYXRhLm15WzBdID09PSAncmlnaHQnID9cbiAgICAgICAgICAgICAgICAgICAgZGF0YS5lbGVtV2lkdGggOiAwO1xuICAgICAgICAgICAgY29uc3QgYXRPZmZzZXQgPSBkYXRhLmF0WzBdID09PSAnbGVmdCcgP1xuICAgICAgICAgICAgICAgIGRhdGEudGFyZ2V0V2lkdGggOlxuICAgICAgICAgICAgICAgIGRhdGEuYXRbMF0gPT09ICdyaWdodCcgP1xuICAgICAgICAgICAgICAgICAgICAtZGF0YS50YXJnZXRXaWR0aCA6IDA7XG4gICAgICAgICAgICBjb25zdCBvZmZzZXQgPSAtMiAqIGRhdGEub2Zmc2V0WzBdO1xuICAgICAgICAgICAgbGV0IG5ld092ZXJSaWdodDtcbiAgICAgICAgICAgIGxldCBuZXdPdmVyTGVmdDtcblxuICAgICAgICAgICAgaWYgKG92ZXJMZWZ0IDwgMCkge1xuICAgICAgICAgICAgICAgIG5ld092ZXJSaWdodCA9IHBvc2l0aW9uLmxlZnQgKyBteU9mZnNldCArIGF0T2Zmc2V0ICsgb2Zmc2V0ICsgZGF0YS5jb2xsaXNpb25XaWR0aCAtIG91dGVyV2lkdGggLSB3aXRoaW5PZmZzZXQ7XG4gICAgICAgICAgICAgICAgaWYgKG5ld092ZXJSaWdodCA8IDAgfHwgbmV3T3ZlclJpZ2h0IDwgYWJzKG92ZXJMZWZ0KSkge1xuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbi5sZWZ0ICs9IG15T2Zmc2V0ICsgYXRPZmZzZXQgKyBvZmZzZXQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIGlmIChvdmVyUmlnaHQgPiAwKSB7XG4gICAgICAgICAgICAgICAgbmV3T3ZlckxlZnQgPSBwb3NpdGlvbi5sZWZ0IC0gZGF0YS5jb2xsaXNpb25Qb3NpdGlvbi5tYXJnaW5MZWZ0ICsgbXlPZmZzZXQgKyBhdE9mZnNldCArIG9mZnNldCAtIG9mZnNldExlZnQ7XG4gICAgICAgICAgICAgICAgLy8gdGhlIHNhbWUgdG8gdG9wXG4gICAgICAgICAgICAgICAgLy8gaWYgKG5ld092ZXJMZWZ0ID4gMCB8fCBhYnMobmV3T3ZlckxlZnQpIDwgb3ZlclJpZ2h0KSB7XG4gICAgICAgICAgICAgICAgaWYgKG5ld092ZXJMZWZ0ID4gMCkge1xuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbi5sZWZ0ICs9IG15T2Zmc2V0ICsgYXRPZmZzZXQgKyBvZmZzZXQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgIHRvcChwb3NpdGlvbiwgZGF0YSkge1xuICAgICAgICAgICAgY29uc3Qgd2l0aGluID0gZGF0YS53aXRoaW47XG4gICAgICAgICAgICBjb25zdCB3aXRoaW5PZmZzZXQgPSB3aXRoaW4ub2Zmc2V0LnRvcCArIHdpdGhpbi5zY3JvbGxUb3A7XG4gICAgICAgICAgICBjb25zdCBvdXRlckhlaWdodCA9IHdpdGhpbi5oZWlnaHQ7XG4gICAgICAgICAgICBjb25zdCBvZmZzZXRUb3AgPSB3aXRoaW4uaXNXaW5kb3cgPyB3aXRoaW4uc2Nyb2xsVG9wIDogd2l0aGluLm9mZnNldC50b3A7XG4gICAgICAgICAgICBjb25zdCBjb2xsaXNpb25Qb3NUb3AgPSBwb3NpdGlvbi50b3AgLSBkYXRhLmNvbGxpc2lvblBvc2l0aW9uLm1hcmdpblRvcDtcbiAgICAgICAgICAgIGNvbnN0IG92ZXJUb3AgPSBjb2xsaXNpb25Qb3NUb3AgLSBvZmZzZXRUb3A7XG4gICAgICAgICAgICBjb25zdCBvdmVyQm90dG9tID0gY29sbGlzaW9uUG9zVG9wICsgZGF0YS5jb2xsaXNpb25IZWlnaHQgLSBvdXRlckhlaWdodCAtIG9mZnNldFRvcDsgXG4gICAgICAgICAgICBjb25zdCBteU9mZnNldCA9IGRhdGEubXlbMV0gPT09ICd0b3AnID9cbiAgICAgICAgICAgICAgICAtZGF0YS5lbGVtSGVpZ2h0IDpcbiAgICAgICAgICAgICAgICBkYXRhLm15WzFdID09PSAnYm90dG9tJyA/XG4gICAgICAgICAgICAgICAgICAgIGRhdGEuZWxlbUhlaWdodCA6IDA7XG4gICAgICAgICAgICBjb25zdCBhdE9mZnNldCA9IGRhdGEuYXRbMV0gPT09ICd0b3AnID9cbiAgICAgICAgICAgICAgICBkYXRhLnRhcmdldEhlaWdodCA6XG4gICAgICAgICAgICAgICAgZGF0YS5hdFsxXSA9PT0gJ2JvdHRvbScgP1xuICAgICAgICAgICAgICAgICAgICAtZGF0YS50YXJnZXRIZWlnaHQgOiAwO1xuICAgICAgICAgICAgY29uc3Qgb2Zmc2V0ID0gLTIgKiBkYXRhLm9mZnNldFsxXTtcbiAgICAgICAgICAgIGxldCBuZXdPdmVyVG9wO1xuICAgICAgICAgICAgbGV0IG5ld092ZXJCb3R0b207XG5cbiAgICAgICAgICAgIGlmIChvdmVyVG9wIDwgMCkge1xuICAgICAgICAgICAgICAgIG5ld092ZXJCb3R0b20gPSBwb3NpdGlvbi50b3AgKyBteU9mZnNldCArIGF0T2Zmc2V0ICsgb2Zmc2V0ICsgZGF0YS5jb2xsaXNpb25IZWlnaHQgLSBvdXRlckhlaWdodCAtIHdpdGhpbk9mZnNldDtcbiAgICAgICAgICAgICAgICBpZiAobmV3T3ZlckJvdHRvbSA8IDAgfHwgbmV3T3ZlckJvdHRvbSA8IGFicyhvdmVyVG9wKSkge1xuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbi50b3AgKz0gbXlPZmZzZXQgKyBhdE9mZnNldCArIG9mZnNldDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2UgaWYgKG92ZXJCb3R0b20gPiAwKSB7XG4gICAgICAgICAgICAgICAgbmV3T3ZlclRvcCA9IHBvc2l0aW9uLnRvcCAtIGRhdGEuY29sbGlzaW9uUG9zaXRpb24ubWFyZ2luVG9wICsgbXlPZmZzZXQgKyBhdE9mZnNldCArIG9mZnNldCAtIG9mZnNldFRvcDtcbiAgICAgICAgICAgICAgICAvLyBiZWNhdXNlIHdpbmRvdyBjYW4gc2Nyb2xsIGRvd24sIHdoZW4gaXQgYmV5b25kIHRoZSB0b3AgYm9yZGVyLFxuICAgICAgICAgICAgICAgIC8vIHdlIGNhbiBub3Qgc2Nyb2xsIGl0IHRvIHZpZXcuIERvbid0IGZsaXAgaXQgaW4gdGhpcyBjYXNlXG4gICAgICAgICAgICAgICAgLy8gaWYgKG5ld092ZXJUb3AgPiAwIHx8IGFicyhuZXdPdmVyVG9wKSA8IG92ZXJCb3R0b20pIHtcbiAgICAgICAgICAgICAgICBpZiAobmV3T3ZlclRvcCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb24udG9wICs9IG15T2Zmc2V0ICsgYXRPZmZzZXQgKyBvZmZzZXQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSxcblxuICAgIGZsaXBmaXQ6IHtcbiAgICAgICAgbGVmdCguLi5hcmdzKSB7XG4gICAgICAgICAgICBydWxlcy5mbGlwLmxlZnQoLi4uYXJncyk7XG4gICAgICAgICAgICBydWxlcy5maXQubGVmdCguLi5hcmdzKTtcbiAgICAgICAgfSxcblxuICAgICAgICB0b3AoLi4uYXJncykge1xuICAgICAgICAgICAgcnVsZXMuZmxpcC50b3AoLi4uYXJncyk7XG4gICAgICAgICAgICBydWxlcy5maXQudG9wKC4uLmFyZ3MpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5cbmV4cG9ydCB7cG9zaXRpb259O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9tb3ZlV3JhcHBlci9wb3NpdGlvbi5qcyIsImltcG9ydCBJbnRhY3QgZnJvbSAnaW50YWN0JztcbmltcG9ydCB0ZW1wbGF0ZSBmcm9tICcuL2dyb3VwLnZkdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE9wdGlvbkdyb3VwIGV4dGVuZHMgSW50YWN0IHtcbiAgICBASW50YWN0LnRlbXBsYXRlKClcbiAgICBzdGF0aWMgdGVtcGxhdGUgPSB0ZW1wbGF0ZTtcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvc2VsZWN0L2dyb3VwLmpzIiwiXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihvYmosIF9WZHQsIGJsb2NrcywgJGNhbGxlZSkge1xuX1ZkdCB8fCAoX1ZkdCA9IFZkdCk7XG5vYmogfHwgKG9iaiA9IHt9KTtcbmJsb2NrcyB8fCAoYmxvY2tzID0ge30pO1xudmFyIGggPSBfVmR0Lm1pc3MuaCwgaGMgPSBfVmR0Lm1pc3MuaGMsIGh1ID0gX1ZkdC5taXNzLmh1LCB3aWRnZXRzID0gdGhpcyAmJiB0aGlzLndpZGdldHMgfHwge30sIF9ibG9ja3MgPSB7fSwgX19ibG9ja3MgPSB7fSxcbl9fdSA9IF9WZHQudXRpbHMsIGV4dGVuZCA9IF9fdS5leHRlbmQsIF9lID0gX191LmVycm9yLCBfY2xhc3NOYW1lID0gX191LmNsYXNzTmFtZSxcbl9fbyA9IF9fdS5PcHRpb25zLCBfZ2V0TW9kZWwgPSBfX28uZ2V0TW9kZWwsIF9zZXRNb2RlbCA9IF9fby5zZXRNb2RlbCxcbl9zZXRDaGVja2JveE1vZGVsID0gX191LnNldENoZWNrYm94TW9kZWwsIF9kZXRlY3RDaGVja2JveENoZWNrZWQgPSBfX3UuZGV0ZWN0Q2hlY2tib3hDaGVja2VkLFxuX3NldFNlbGVjdE1vZGVsID0gX191LnNldFNlbGVjdE1vZGVsLFxuc2VsZiA9IHRoaXMuZGF0YSwgJHRoaXMgPSB0aGlzLCBzY29wZSA9IG9iaiwgQW5pbWF0ZSA9IHNlbGYgJiYgc2VsZi5BbmltYXRlLCBwYXJlbnQgPSAoJGNhbGxlZSB8fCB7fSkuX3N1cGVyXG5jb25zdCB7Y2hpbGRyZW4sIGxhYmVsfSA9IHNlbGYuZ2V0KCk7XG5cbnJldHVybiBoKCdkaXYnLCBudWxsLCBbaCgnZGl2JywgbnVsbCwgZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW2xhYmVsIF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcyksICdrLWxhYmVsJyksICdcXG4gICAgJywgZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW2NoaWxkcmVuIF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcyksICdcXG4nXSwgJ2stZ3JvdXAnKVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvc2VsZWN0L2dyb3VwLnZkdCIsImltcG9ydCBJbnRhY3QgZnJvbSAnaW50YWN0JztcbmltcG9ydCB0ZW1wbGF0ZSBmcm9tICcuL2luZGV4LnZkdCc7XG5pbXBvcnQgJy4uLy4uL3N0eWxlcy9rcGMuc3R5bCc7XG5pbXBvcnQgJy4vaW5kZXguc3R5bCc7XG5pbXBvcnQgT3B0aW9uIGZyb20gJy4vb3B0aW9uJztcbmltcG9ydCBHcm91cCBmcm9tICcuL2dyb3VwJztcbmltcG9ydCB7c2VsZWN0SW5wdXQsIF8kfSBmcm9tICcuLi91dGlscyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNlbGVjdCBleHRlbmRzIEludGFjdCB7XG4gICAgQEludGFjdC50ZW1wbGF0ZSgpXG4gICAgc3RhdGljIHRlbXBsYXRlID0gdGVtcGxhdGU7XG5cbiAgICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgICAgICBtdWx0aXBsZTogQm9vbGVhbixcbiAgICAgICAgZGlzYWJsZWQ6IEJvb2xlYW4sXG4gICAgICAgIGNsZWFyYWJsZTogQm9vbGVhbixcbiAgICAgICAgZmlsdGVyYWJsZTogQm9vbGVhbixcbiAgICAgICAgZmx1aWQ6IEJvb2xlYW4sXG4gICAgICAgIGFsbG93VW5tYXRjaDogQm9vbGVhbixcbiAgICB9O1xuXG4gICAgZGVmYXVsdHMoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBkYXRhOiBbXSxcbiAgICAgICAgICAgIHZhbHVlOiAnJyxcbiAgICAgICAgICAgIG11bHRpcGxlOiBmYWxzZSwgLy/mlK/mjIHlpJrpgIlsaVxuICAgICAgICAgICAgZGlzYWJsZWQ6IGZhbHNlLFxuICAgICAgICAgICAgY2xlYXJhYmxlOiBmYWxzZSwgLy8g5piv5ZCm5Y+v5riF56m6IFxuICAgICAgICAgICAgZmlsdGVyYWJsZTogZmFsc2UsIC8vIOaQnOe0ouetm+mAiVxuICAgICAgICAgICAga2V5d29yZHM6IHVuZGVmaW5lZCxcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyOiB1bmRlZmluZWQsXG4gICAgICAgICAgICBzaXplOiAnZGVmYXVsdCcsXG4gICAgICAgICAgICBmbHVpZDogZmFsc2UsXG4gICAgICAgICAgICB3aWR0aDogdW5kZWZpbmVkLFxuICAgICAgICAgICAgYWxsb3dVbm1hdGNoOiBmYWxzZSxcblxuICAgICAgICAgICAgX3Nob3c6IGZhbHNlLFxuICAgICAgICB9XG4gICAgfVxuXG4gICAgX2luaXQoKSB7XG4gICAgICAgIHRoaXMub24oJyRjaGFuZ2VkOnZhbHVlJywgKCkgPT4ge1xuICAgICAgICAgICAgaWYgKHRoaXMuZ2V0KCdtdWx0aXBsZScpICYmIHRoaXMuZ2V0KCdfc2hvdycpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5yZWZzLm1lbnUucG9zaXRpb24oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgX29uQ2xlYXIoZSkge1xuICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICB0aGlzLnNldCgndmFsdWUnLCAnJyk7XG4gICAgfVxuXG4gICAgX29uU2VsZWN0KHZhbHVlKSB7XG4gICAgICAgIGlmICghdGhpcy5nZXQoJ211bHRpcGxlJykpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0KCd2YWx1ZScsIHZhbHVlLCB7YXN5bmM6IHRydWV9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGxldCB2YWx1ZXMgPSB0aGlzLmdldCgndmFsdWUnKTtcbiAgICAgICAgICAgIGlmICghQXJyYXkuaXNBcnJheSh2YWx1ZXMpKSB7XG4gICAgICAgICAgICAgICAgdmFsdWVzID0gW107XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHZhbHVlcyA9IHZhbHVlcy5zbGljZSgwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGluZGV4ID0gdmFsdWVzLmluZGV4T2YodmFsdWUpO1xuICAgICAgICAgICAgaWYgKH5pbmRleCkge1xuICAgICAgICAgICAgICAgIC8vIGlmIGZpbmQsIGRlbGV0ZSBpdFxuICAgICAgICAgICAgICAgIHZhbHVlcy5zcGxpY2UoaW5kZXgsIDEpOyBcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdmFsdWVzLnB1c2godmFsdWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5zZXQoJ3ZhbHVlJywgdmFsdWVzLCB7YXN5bmM6IHRydWV9KTtcbiAgICAgICAgICAgIHRoaXMuX2ZvY3VzSW5wdXQoKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9yZXNldFNlYXJjaCgpO1xuICAgIH1cblxuICAgIF9vblNlYXJjaChlKSB7XG4gICAgICAgIHRoaXMuc2V0KCdrZXl3b3JkcycsIGUudGFyZ2V0LnZhbHVlLnRyaW0oKSk7XG4gICAgICAgIC8vIGFsd2F5cyBzaG93IG1lbnUgb24gc2VhcmNoaW5nXG4gICAgICAgIHRoaXMucmVmcy5tZW51LnNob3coKTtcbiAgICAgICAgdGhpcy5yZWZzLm1lbnUuZm9jdXNJdGVtQnlJbmRleCgwKTtcbiAgICAgICAgLy8gdGhlIHBvc2l0aW9uIG1heSBiZSBmbGlwLCBhbmQgdGhlIHNlbGVjdCBpbnB1dCBoZWlnaHQgbXkgY2hhbmdlIGhlaWdodCB0b28sXG4gICAgICAgIC8vIHNvIHdlIHNob3VsZCByZXNldCB0aGUgcG9zaXRpb25cbiAgICAgICAgdGhpcy5yZWZzLm1lbnUucG9zaXRpb24oKTtcbiAgICB9XG5cbiAgICBfcmVzZXRTZWFyY2goKSB7XG4gICAgICAgIHRoaXMuc2V0KCdrZXl3b3JkcycsIHVuZGVmaW5lZCwge2FzeW5jOiB0cnVlfSk7XG4gICAgfVxuXG4gICAgX29uQ2hhbmdlU2hvdyhjLCB2YWx1ZSkge1xuICAgICAgICB0aGlzLnNldCgnX3Nob3cnLCB2YWx1ZSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQGJyaWVmIGxldCB0aGUgYmx1ciBtZXRob2QgY2FsbGVkIGFmdGVyIHNlbGVjdFxuICAgICAqIGlmIHdlIHNlbGVjdGVkIHRoZSBvcHRpb24sIHRoZW4gdGhlIGtleXdvcmRzIGhhcyBiZWVuIHNldCB0byB1bmRlZmluZFxuICAgICAqIGluIHRoaXMgY2FzZSwgd2UgZG8gbm90aGluZywgb3RoZXJ3aXNlIHdlIHJlc2V0IGl0XG4gICAgICovXG4gICAgX29uQmx1cigpIHtcbiAgICAgICAgY29uc3Qge2tleXdvcmRzLCBhbGxvd1VubWF0Y2h9ID0gdGhpcy5nZXQoKTtcbiAgICAgICAgaWYgKGFsbG93VW5tYXRjaCAmJiBrZXl3b3JkcyAhPSBudWxsKSB7XG4gICAgICAgICAgICB0aGlzLnNldCh7XG4gICAgICAgICAgICAgICAgdmFsdWU6IGtleXdvcmRzLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnRpbWVyID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICBpZiAodGhpcy5nZXQoJ2tleXdvcmRzJykgIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHRoaXMuX3Jlc2V0U2VhcmNoKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIDIwMCk7XG4gICAgfVxuXG4gICAgX3NlbGVjdElucHV0KGUpIHtcbiAgICAgICAgc2VsZWN0SW5wdXQoZS50YXJnZXQpOyBcbiAgICB9XG5cbiAgICBfb25Gb2N1cyhlKSB7XG4gICAgICAgIGNsZWFyVGltZW91dCh0aGlzLnRpbWVyKTtcbiAgICB9XG5cbiAgICBfb25Gb2N1c291dCgpIHtcbiAgICAgICAgdGhpcy5yZWZzLmRyb3Bkb3duLmhpZGUoKTtcbiAgICB9XG5cbiAgICBfZGVsZXRlKHZhbHVlLCBlKSB7XG4gICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgIGNvbnN0IHZhbHVlcyA9IHRoaXMuZ2V0KCd2YWx1ZScpLnNsaWNlKDApO1xuICAgICAgICBjb25zdCBpbmRleCA9IHZhbHVlcy5pbmRleE9mKHZhbHVlKTtcbiAgICAgICAgdmFsdWVzLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgIHRoaXMuc2V0KCd2YWx1ZScsIHZhbHVlcyk7XG4gICAgICAgIHRoaXMuX2ZvY3VzSW5wdXQoKTtcbiAgICB9XG5cbiAgICBfZm9jdXNJbnB1dCgpIHtcbiAgICAgICAgaWYgKHRoaXMuZ2V0KCdmaWx0ZXJhYmxlJykpIHtcbiAgICAgICAgICAgIHRoaXMucmVmcy5pbnB1dC5mb2N1cygpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgX3Bvc2l0aW9uKCkge1xuICAgICAgICBjb25zdCBtZW51RWxlbWVudCA9IHRoaXMucmVmcy5tZW51LnZkdC52Tm9kZS5jaGlsZHJlbi5lbGVtZW50O1xuICAgICAgICBjb25zdCB3aWR0aCA9IHRoaXMuZWxlbWVudC5vZmZzZXRXaWR0aDtcbiAgICAgICAgY29uc3QgbWVudVdpZHRoID0gbWVudUVsZW1lbnQub2Zmc2V0V2lkdGg7XG4gICAgICAgIGlmICh3aWR0aCA+IG1lbnVXaWR0aCkge1xuICAgICAgICAgICAgbWVudUVsZW1lbnQuc3R5bGUud2lkdGggPSBgJHt3aWR0aH1weGA7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBfb25LZXlwcmVzcyhlKSB7XG4gICAgICAgIGlmIChlLmtleUNvZGUgPT09IDEzKSB7XG4gICAgICAgICAgICB0aGlzLnJlZnMud3JhcHBlci5jbGljaygpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgX29uS2V5ZG93bihlKSB7XG4gICAgICAgIGlmIChlLmtleUNvZGUgPT09IDkpIHsgLy8gdGFiXG4gICAgICAgICAgICB0aGlzLnJlZnMuZHJvcGRvd24uaGlkZSgpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5leHBvcnQge1NlbGVjdCwgT3B0aW9uLCBHcm91cCBhcyBPcHRpb25Hcm91cH07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL3NlbGVjdC9pbmRleC5qcyIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG4gICAgaWYobW9kdWxlLmhvdCkge1xuICAgICAgLy8gMTUyNzU3NjY3OTE3OFxuICAgICAgdmFyIGNzc1JlbG9hZCA9IHJlcXVpcmUoXCIhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1ob3QtbG9hZGVyL2hvdE1vZHVsZVJlcGxhY2VtZW50LmpzXCIpKG1vZHVsZS5pZCwge1wiZmlsZU1hcFwiOlwie2ZpbGVOYW1lfVwifSk7XG4gICAgICBtb2R1bGUuaG90LmRpc3Bvc2UoY3NzUmVsb2FkKTtcbiAgICAgIG1vZHVsZS5ob3QuYWNjZXB0KHVuZGVmaW5lZCwgY3NzUmVsb2FkKTtcbiAgICB9XG4gIFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vY29tcG9uZW50cy9zZWxlY3QvaW5kZXguc3R5bFxuLy8gbW9kdWxlIGlkID0gLi9jb21wb25lbnRzL3NlbGVjdC9pbmRleC5zdHlsXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIiLCJpbXBvcnQgSW5wdXQgZnJvbSAnLi4vaW5wdXQnO2ltcG9ydCBEcm9wZG93biwge0Ryb3Bkb3duSXRlbSwgRHJvcGRvd25NZW51fSBmcm9tICcuLi9kcm9wZG93bic7aW1wb3J0IHtpc1N0cmluZ09yTnVtYmVyLCBnZXRUZXh0QnlDaGlsZHJlbiwgYWRkU3R5bGUsIF8kfSBmcm9tICcuLi91dGlscyc7aW1wb3J0IE9wdGlvbiBmcm9tICcuL29wdGlvbic7aW1wb3J0IE9wdGlvbkdyb3VwIGZyb20gJy4vZ3JvdXAnO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24ob2JqLCBfVmR0LCBibG9ja3MsICRjYWxsZWUpIHtcbl9WZHQgfHwgKF9WZHQgPSBWZHQpO1xub2JqIHx8IChvYmogPSB7fSk7XG5ibG9ja3MgfHwgKGJsb2NrcyA9IHt9KTtcbnZhciBoID0gX1ZkdC5taXNzLmgsIGhjID0gX1ZkdC5taXNzLmhjLCBodSA9IF9WZHQubWlzcy5odSwgd2lkZ2V0cyA9IHRoaXMgJiYgdGhpcy53aWRnZXRzIHx8IHt9LCBfYmxvY2tzID0ge30sIF9fYmxvY2tzID0ge30sXG5fX3UgPSBfVmR0LnV0aWxzLCBleHRlbmQgPSBfX3UuZXh0ZW5kLCBfZSA9IF9fdS5lcnJvciwgX2NsYXNzTmFtZSA9IF9fdS5jbGFzc05hbWUsXG5fX28gPSBfX3UuT3B0aW9ucywgX2dldE1vZGVsID0gX19vLmdldE1vZGVsLCBfc2V0TW9kZWwgPSBfX28uc2V0TW9kZWwsXG5fc2V0Q2hlY2tib3hNb2RlbCA9IF9fdS5zZXRDaGVja2JveE1vZGVsLCBfZGV0ZWN0Q2hlY2tib3hDaGVja2VkID0gX191LmRldGVjdENoZWNrYm94Q2hlY2tlZCxcbl9zZXRTZWxlY3RNb2RlbCA9IF9fdS5zZXRTZWxlY3RNb2RlbCxcbnNlbGYgPSB0aGlzLmRhdGEsICR0aGlzID0gdGhpcywgc2NvcGUgPSBvYmosIEFuaW1hdGUgPSBzZWxmICYmIHNlbGYuQW5pbWF0ZSwgcGFyZW50ID0gKCRjYWxsZWUgfHwge30pLl9zdXBlclxuXG5cblxuXG5cblxuY29uc3Qge1xuICAgIGNsYXNzTmFtZSwgY2xlYXJhYmxlLCBkYXRhLCB2YWx1ZSwgbXVsdGlwbGUsXG4gICAgZGlzYWJsZWQsIGZpbHRlcmFibGUsIGtleXdvcmRzLCBfc2hvdyxcbiAgICBwbGFjZWhvbGRlciwgc2l6ZSwgc3R5bGUsIG5hbWUsIGNoaWxkcmVuLFxuICAgIGZsdWlkLCB3aWR0aCwgYWxsb3dVbm1hdGNoLFxufSA9IHNlbGYuZ2V0KCk7XG5cbmNvbnN0IF9wbGFjZWhvbGRlciA9IHBsYWNlaG9sZGVyID09IG51bGwgP1xuICAgIChhbGxvd1VubWF0Y2ggJiYgZmlsdGVyYWJsZSkgPyBfJCgn6K+36L6T5YWl5oiW6YCJ5oupJykgOiBfJCgn6K+36YCJ5oupJykgOlxuICAgIHBsYWNlaG9sZGVyO1xuXG5jb25zdCBjbGFzc05hbWVPYmogPSB7XG4gICAgJ2stc2VsZWN0JzogdHJ1ZSxcbiAgICBbY2xhc3NOYW1lXTogY2xhc3NOYW1lLFxuICAgICdrLWRpc2FibGVkJzogZGlzYWJsZWQsXG4gICAgJ2stc2hvdyc6IF9zaG93LFxuICAgICdrLWNsZWFyYWJsZSc6IGNsZWFyYWJsZSxcbiAgICBbYGstJHtzaXplfWBdOiBzaXplICE9PSAnZGVmYXVsdCcsXG4gICAgJ2stZmx1aWQnOiBmbHVpZCxcbn07XG5cbmxldCBoYXNWYWx1ZSA9IHZhbHVlICE9IG51bGwgJiYgKCFtdWx0aXBsZSAmJiB2YWx1ZSAhPT0gJycgfHwgbXVsdGlwbGUgJiYgdmFsdWUubGVuZ3RoKTtcbmNvbnN0IGlzR3JvdXAgPSBBcnJheS5pc0FycmF5KHNlbGYuZ2V0KCdkYXRhLjAuZGF0YScpKTtcblxubGV0IGxhYmVsID0gaXNTdHJpbmdPck51bWJlcih2YWx1ZSkgPyB2YWx1ZSA6IG51bGw7XG5sZXQgbGFiZWxzID0gW107XG5cbmNvbnN0IGhhbmRsZVByb3BzID0gcHJvcHMgPT4ge1xuICAgIGxldCBhY3RpdmUgPSBmYWxzZTtcbiAgICBsZXQgdmFsaWQgPSBmYWxzZTtcblxuICAgIGlmICghbXVsdGlwbGUpIHtcbiAgICAgICAgaWYgKHByb3BzLnZhbHVlID09PSB2YWx1ZSkge1xuICAgICAgICAgICAgLy8gc2V0IGxhYmVsXG4gICAgICAgICAgICBsYWJlbCA9IHByb3BzLmxhYmVsO1xuICAgICAgICAgICAgYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgfSBlbHNlIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgICBjb25zdCBpbmRleCA9IHZhbHVlLmluZGV4T2YocHJvcHMudmFsdWUpO1xuICAgICAgICBpZiAofmluZGV4KSB7XG4gICAgICAgICAgICAvLyBrZWVwIG9yZGVyIGNvbnNpc3RlbnRcbiAgICAgICAgICAgIGxhYmVsc1tpbmRleF0gPSBwcm9wcy5sYWJlbDtcbiAgICAgICAgICAgIGFjdGl2ZSA9IHRydWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBhY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGxldCB0bXA7XG4gICAgaWYgKFxuICAgICAgICAhZmlsdGVyYWJsZSAmJiBcbiAgICAgICAgcHJvcHMubGFiZWwgfHwgXG4gICAgICAgIGtleXdvcmRzID09IG51bGwgfHwgXG4gICAgICAgIH5wcm9wcy5sYWJlbC50b0xvd2VyQ2FzZSgpLmluZGV4T2YoKHRtcCA9IGtleXdvcmRzLnRvTG93ZXJDYXNlKCkpKSB8fCBcbiAgICAgICAgKFxuICAgICAgICAgICAgaXNTdHJpbmdPck51bWJlcihwcm9wcy52YWx1ZSkgJiYgXG4gICAgICAgICAgICB+U3RyaW5nKHByb3BzLnZhbHVlKS50b0xvd2VyQ2FzZSgpLmluZGV4T2YodG1wKVxuICAgICAgICApXG4gICAgKSB7XG4gICAgICAgIHZhbGlkID0gdHJ1ZTsgXG4gICAgfVxuXG4gICAgcmV0dXJuIHthY3RpdmUsIHZhbGlkfTtcbn07XG5cbmNvbnN0IE9wdGlvbnMgPSBwcm9wcyA9PiB7XG4gICAgY29uc3QgZGF0YSA9IHByb3BzLmRhdGE7XG4gICAgY29uc3QgcmV0ID0gW107XG4gICAgZGF0YS5mb3JFYWNoKChpdGVtLCBpbmRleCkgPT4ge1xuICAgICAgICAvLyBkZXByZWNhdGUgdGV4dCwgdXNlIGxhYmVsIGluc3RlYWQgb2ZcbiAgICAgICAgaWYgKGl0ZW0udGV4dCkgaXRlbS5sYWJlbCA9IGl0ZW0udGV4dDtcbiAgICAgICAgXG4gICAgICAgIGNvbnN0IHt2YWxpZCwgYWN0aXZlfSA9IGhhbmRsZVByb3BzKGl0ZW0pO1xuICAgICAgICBpZiAodmFsaWQpIHtcbiAgICAgICAgICAgIHJldC5wdXNoKFxuICAgICAgICAgICAgICAgIGgoRHJvcGRvd25JdGVtLCB7J2V2LXNlbGVjdCc6IGZ1bmN0aW9uKCkge3RyeSB7cmV0dXJuIFtzZWxmLl9vblNlbGVjdC5iaW5kKHNlbGYsIGl0ZW0udmFsdWUpIF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcyksICdkaXNhYmxlZCc6IGZ1bmN0aW9uKCkge3RyeSB7cmV0dXJuIFtpdGVtLmRpc2FibGVkIF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcyksICdjbGFzc05hbWUnOiBfY2xhc3NOYW1lKGZ1bmN0aW9uKCkge3RyeSB7cmV0dXJuIFt7J2stYWN0aXZlJzogYWN0aXZlfSBdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpKSwgJ2hpZGVPblNlbGVjdCc6IGZ1bmN0aW9uKCkge3RyeSB7cmV0dXJuIFshbXVsdGlwbGUgXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKSwgJ2NoaWxkcmVuJzogZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW2l0ZW0udGVtcGxhdGUgPyBpdGVtLnRlbXBsYXRlKGl0ZW0sIGluZGV4KSA6IGl0ZW0ubGFiZWwgXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKSwgJ19jb250ZXh0JzogJHRoaXN9KVxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHJldDtcbn1cblxuY29uc3QgT3B0aW9uc1ZOb2RlcyA9ICh7Y2hpbGRyZW59KSA9PiB7XG4gICAgcmV0dXJuIF9fdS5tYXAoY2hpbGRyZW4gPyAoQXJyYXkuaXNBcnJheShjaGlsZHJlbikgPyBjaGlsZHJlbiA6IFtjaGlsZHJlbl0pIDogY2hpbGRyZW4sIHZOb2RlID0+IHtcbiAgICAgICAgaWYgKHZOb2RlLnRhZyA9PT0gT3B0aW9uKSB7XG4gICAgICAgICAgICBsZXQgcHJvcHMgPSB2Tm9kZS5wcm9wcztcbiAgICAgICAgICAgIHByb3BzID0ge1xuICAgICAgICAgICAgICAgIC4uLnByb3BzLCBcbiAgICAgICAgICAgICAgICAnZXYtc2VsZWN0Jzogc2VsZi5fb25TZWxlY3QuYmluZChzZWxmLCBwcm9wcy52YWx1ZSksXG4gICAgICAgICAgICAgICAgaGlkZU9uU2VsZWN0OiAhbXVsdGlwbGUsXG4gICAgICAgICAgICAgICAgbGFiZWw6IHByb3BzLmxhYmVsIHx8IGdldFRleHRCeUNoaWxkcmVuKHByb3BzLmNoaWxkcmVuKSxcbiAgICAgICAgICAgICAgICBjaGlsZHJlbjogcHJvcHMuY2hpbGRyZW4gfHwgcHJvcHMubGFiZWwgXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgY29uc3Qge2FjdGl2ZSwgdmFsaWR9ID0gaGFuZGxlUHJvcHMocHJvcHMpO1xuICAgICAgICAgICAgaWYgKCF2YWxpZCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBoYygnJyk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHByb3BzLmNsYXNzTmFtZSA9IF9jbGFzc05hbWUoe1xuICAgICAgICAgICAgICAgICAgICBbcHJvcHMuY2xhc3NOYW1lXTogcHJvcHMuY2xhc3NOYW1lLFxuICAgICAgICAgICAgICAgICAgICAnay1hY3RpdmUnOiBhY3RpdmUsXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIHJldHVybiB0aGUgY2xvbmVkIHZOb2RlXG4gICAgICAgICAgICByZXR1cm4gaChPcHRpb24sIHByb3BzKTtcbiAgICAgICAgfSBlbHNlIGlmICh2Tm9kZS50YWcgPT09IE9wdGlvbkdyb3VwKSB7XG4gICAgICAgICAgICBsZXQgcHJvcHMgPSB2Tm9kZS5wcm9wcztcbiAgICAgICAgICAgIHByb3BzID0ge1xuICAgICAgICAgICAgICAgIC4uLnByb3BzLFxuICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBoKE9wdGlvbnNWTm9kZXMsIHsnY2hpbGRyZW4nOiBmdW5jdGlvbigpIHt0cnkge3JldHVybiBbcHJvcHMuY2hpbGRyZW4gXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKSwgJ19jb250ZXh0JzogJHRoaXN9KVxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHJldHVybiBoKE9wdGlvbkdyb3VwLCBwcm9wcyk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdk5vZGU7XG4gICAgfSk7IFxufSBcblxuY29uc3QgTWVudSA9IChcbiAgICBoKERyb3Bkb3duTWVudSwgeydldi0kY2hhbmdlZDpzaG93JzogZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW3NlbGYuX3Bvc2l0aW9uIF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcyksICdjbGFzc05hbWUnOiAnay1zZWxlY3QtZHJvcGRvd24nLCAnZXYtJGNoYW5nZTpzaG93JzogZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW3NlbGYuX29uQ2hhbmdlU2hvdyBdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpLCAnY2hpbGRyZW4nOiBbZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gWyFpc0dyb3VwIF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcykgPyBoKE9wdGlvbnMsIHsnZGF0YSc6IGZ1bmN0aW9uKCkge3RyeSB7cmV0dXJuIFtkYXRhIF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcyksICdjaGlsZHJlbic6IG51bGwsICdfY29udGV4dCc6ICR0aGlzfSkgOiBfVmR0LnV0aWxzLm1hcChmdW5jdGlvbigpIHt0cnkge3JldHVybiBbZGF0YSBdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpLCBmdW5jdGlvbih2YWx1ZSwga2V5KSB7XG5yZXR1cm4gaChPcHRpb25Hcm91cCwgeydsYWJlbCc6IGZ1bmN0aW9uKCkge3RyeSB7cmV0dXJuIFt2YWx1ZS5sYWJlbCBdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpLCAnY2hpbGRyZW4nOiBoKE9wdGlvbnMsIHsnZGF0YSc6IGZ1bmN0aW9uKCkge3RyeSB7cmV0dXJuIFt2YWx1ZS5kYXRhIF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcyksICdjaGlsZHJlbic6IG51bGwsICdfY29udGV4dCc6ICR0aGlzfSksICdfY29udGV4dCc6ICR0aGlzfSk7XG59LCB0aGlzKSwgaChPcHRpb25zVk5vZGVzLCB7J2NoaWxkcmVuJzogZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW2NoaWxkcmVuIF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcyksICdfY29udGV4dCc6ICR0aGlzfSldLCAnX2NvbnRleHQnOiAkdGhpc30sIG51bGwsIG51bGwsIG51bGwsIGZ1bmN0aW9uKGkpIHt3aWRnZXRzWydtZW51J10gPSBpfSlcbik7XG5cbi8vIGlmIHRoZSB2YWx1ZSBpcyBub3QgaW4gb3B0aW9ucywgdGhlbiBzZXQgaGFzVmFsdWUgdG8gZmFsc2VcbmlmIChoYXNWYWx1ZSAmJiAhbGFiZWwgJiYgIWxhYmVscy5sZW5ndGgpIHtcbiAgICBoYXNWYWx1ZSA9IGZhbHNlO1xufVxuXG5yZXR1cm4gaCgnZGl2JywgeydzdHlsZSc6IGZ1bmN0aW9uKCkge3RyeSB7cmV0dXJuIFt3aWR0aCAhPSBudWxsID8gYWRkU3R5bGUoc3R5bGUsIHt3aWR0aDogYCR7d2lkdGh9cHhgfSkgOiBzdHlsZSBdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpLCAndGFiaW5kZXgnOiBmdW5jdGlvbigpIHt0cnkge3JldHVybiBbZGlzYWJsZWQgPyBcIi0xXCIgOiBcIjBcIiBdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpLCAnZXYta2V5cHJlc3MnOiBmdW5jdGlvbigpIHt0cnkge3JldHVybiBbc2VsZi5fb25LZXlwcmVzcyBdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpLCAnZXYta2V5ZG93bic6IGZ1bmN0aW9uKCkge3RyeSB7cmV0dXJuIFtzZWxmLl9vbktleWRvd24gXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKX0sIGgoRHJvcGRvd24sIHsncG9zaXRpb24nOiBmdW5jdGlvbigpIHt0cnkge3JldHVybiBbe215OiAnbGVmdCB0b3AnLCBhdDogJ2xlZnQgYm90dG9tJ30gXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKSwgJ3RyaWdnZXInOiAnY2xpY2snLCAnZGlzYWJsZWQnOiBmdW5jdGlvbigpIHt0cnkge3JldHVybiBbZGlzYWJsZWQgXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKSwgJ2NoaWxkcmVuJzogW2goJ2RpdicsIHsnZXYtY2xpY2snOiBmdW5jdGlvbigpIHt0cnkge3JldHVybiBbc2VsZi5fZm9jdXNJbnB1dCBdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpLCAndGFiaW5kZXgnOiAnLTEnfSwgW2goJ2lucHV0Jywgeyd0eXBlJzogJ2hpZGRlbicsICd2YWx1ZSc6IGZ1bmN0aW9uKCkge3RyeSB7cmV0dXJuIFt2YWx1ZSBdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpLCAnbmFtZSc6IGZ1bmN0aW9uKCkge3RyeSB7cmV0dXJuIFtuYW1lIF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcyl9KSwgZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gWyFtdWx0aXBsZSAmJiBmaWx0ZXJhYmxlIF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcykgPyBoKElucHV0LCB7J3ZhbHVlJzogZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW2tleXdvcmRzID09IG51bGwgPyBsYWJlbCA6IGtleXdvcmRzIF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcyksICdldi1pbnB1dCc6IGZ1bmN0aW9uKCkge3RyeSB7cmV0dXJuIFtzZWxmLl9vblNlYXJjaCBdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpLCAnZXYtYmx1cic6IGZ1bmN0aW9uKCkge3RyeSB7cmV0dXJuIFtzZWxmLl9vbkJsdXIgXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKSwgJ2V2LWZvY3VzJzogZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW3NlbGYuX3NlbGVjdElucHV0IF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcyksICdkaXNhYmxlZCc6IGZ1bmN0aW9uKCkge3RyeSB7cmV0dXJuIFtkaXNhYmxlZCBdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpLCAncGxhY2Vob2xkZXInOiBmdW5jdGlvbigpIHt0cnkge3JldHVybiBbX3BsYWNlaG9sZGVyIF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcyksICdzaXplJzogZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW3NpemUgXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKSwgJ2ZsdWlkJzogZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW3RydWVdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpLCAnY2hpbGRyZW4nOiBudWxsLCAnX2NvbnRleHQnOiAkdGhpc30sIG51bGwsIG51bGwsIG51bGwsIGZ1bmN0aW9uKGkpIHt3aWRnZXRzWydpbnB1dCddID0gaX0pIDogZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gWyFmaWx0ZXJhYmxlICYmICFoYXNWYWx1ZSBdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpID8gaCgnc3BhbicsIG51bGwsIGZ1bmN0aW9uKCkge3RyeSB7cmV0dXJuIFtfcGxhY2Vob2xkZXIgXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKSwgJ2stcGxhY2Vob2xkZXIgYy1lbGxpcHNpcycpIDogZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gWyFtdWx0aXBsZSBdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpID8gaCgnc3BhbicsIG51bGwsIGZ1bmN0aW9uKCkge3RyeSB7cmV0dXJuIFtsYWJlbCBdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpLCAnay12YWx1ZSBjLWVsbGlwc2lzJykgOiBoKEFuaW1hdGUsIHsnYTp0YWcnOiAnc3BhbicsICdhOmRpc2FibGVkJzogZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW3RydWVdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpLCAnY2xhc3NOYW1lJzogJ2stdmFsdWVzJywgJ2NoaWxkcmVuJzogW19WZHQudXRpbHMubWFwKGZ1bmN0aW9uKCkge3RyeSB7cmV0dXJuIFtsYWJlbHMgXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKSwgZnVuY3Rpb24oaXRlbSwgaW5kZXgpIHtcbnJldHVybiBoKEFuaW1hdGUsIHsnYTp0YWcnOiAnc3BhbicsICdjbGFzc05hbWUnOiAnay10YWcnLCAna2V5JzogZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW3ZhbHVlW2luZGV4XSBdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpLCAnYTp0cmFuc2l0aW9uJzogJ2ZhZGUnLCAnY2hpbGRyZW4nOiBbaCgnc3BhbicsIG51bGwsIGZ1bmN0aW9uKCkge3RyeSB7cmV0dXJuIFtpdGVtIF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcyksICdrLXRleHQnKSwgaCgnaScsIHsnZXYtY2xpY2snOiBmdW5jdGlvbigpIHt0cnkge3JldHVybiBbc2VsZi5fZGVsZXRlLmJpbmQoc2VsZiwgdmFsdWVbaW5kZXhdKSBdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpfSwgbnVsbCwgJ2staWNvbiBpb24taW9zLWNsb3NlLWVtcHR5JyldLCAnX2NvbnRleHQnOiAkdGhpc30pO1xufSwgdGhpcyksIGZ1bmN0aW9uKCkge3RyeSB7cmV0dXJuIFtmaWx0ZXJhYmxlIF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcykgPyBoKElucHV0LCB7J3ZhbHVlJzogZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW2tleXdvcmRzIF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcyksICdldi1pbnB1dCc6IGZ1bmN0aW9uKCkge3RyeSB7cmV0dXJuIFtzZWxmLl9vblNlYXJjaCBdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpLCAnZXYtYmx1cic6IGZ1bmN0aW9uKCkge3RyeSB7cmV0dXJuIFtzZWxmLl9vbkJsdXIgXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKSwgJ2V2LWZvY3VzJzogZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW3NlbGYuX29uRm9jdXMgXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKSwgJ2Rpc2FibGVkJzogZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW2Rpc2FibGVkIF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcyksICdwbGFjZWhvbGRlcic6IGZ1bmN0aW9uKCkge3RyeSB7cmV0dXJuIFshaGFzVmFsdWUgPyBfcGxhY2Vob2xkZXIgOiAnJyBdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpLCAnYXV0b1dpZHRoJzogZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW3RydWVdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpLCAnc2l6ZSc6IGZ1bmN0aW9uKCkge3RyeSB7cmV0dXJuIFtzaXplIF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcyksICdjaGlsZHJlbic6IG51bGwsICdfY29udGV4dCc6ICR0aGlzfSwgbnVsbCwgbnVsbCwgbnVsbCwgZnVuY3Rpb24oaSkge3dpZGdldHNbJ2lucHV0J10gPSBpfSkgOiB1bmRlZmluZWRdLCAnX2NvbnRleHQnOiAkdGhpc30pLCBoKCdzcGFuJywgbnVsbCwgW2Z1bmN0aW9uKCkge3RyeSB7cmV0dXJuIFtjbGVhcmFibGUgXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKSA/IGgoJ2knLCB7J2V2LWNsaWNrJzogZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW3NlbGYuX29uQ2xlYXIgXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKX0sIG51bGwsIF9jbGFzc05hbWUoZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW3tcImstY2xlYXIgaW9uLWlvcy1jbG9zZVwiOiB0cnVlLCBcImstc2hvd1wiOiBoYXNWYWx1ZX0gXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKSkpIDogdW5kZWZpbmVkLCBoKCdpJywgbnVsbCwgbnVsbCwgJ2stYXJyb3cgaW9uLWFycm93LWRvd24tYicpXSwgJ2stc3VmZml4JyldLCAnay13cmFwcGVyJywgbnVsbCwgZnVuY3Rpb24oaSkge3dpZGdldHNbJ3dyYXBwZXInXSA9IGl9KSwgZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW01lbnUgXG4gICAgXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKV0sICdfY29udGV4dCc6ICR0aGlzfSwgbnVsbCwgbnVsbCwgbnVsbCwgZnVuY3Rpb24oaSkge3dpZGdldHNbJ2Ryb3Bkb3duJ10gPSBpfSksIF9jbGFzc05hbWUoZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW3suLi5jbGFzc05hbWVPYmosICdrLWFjdGl2ZSc6IGhhc1ZhbHVlfSBdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpKSlcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL3NlbGVjdC9pbmRleC52ZHQiLCJpbXBvcnQgSW50YWN0IGZyb20gJ2ludGFjdCc7XG5pbXBvcnQge0Ryb3Bkb3duSXRlbX0gZnJvbSAnLi4vZHJvcGRvd24nO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBPcHRpb24gZXh0ZW5kcyBEcm9wZG93bkl0ZW0ge1xuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL3NlbGVjdC9vcHRpb24uanMiLCJpbXBvcnQgSW50YWN0IGZyb20gJ2ludGFjdCc7XG5pbXBvcnQgdGVtcGxhdGUgZnJvbSAnLi9pbmRleC52ZHQnO1xuaW1wb3J0IExheW91dCBmcm9tICcuLi9sYXlvdXQnO1xuaW1wb3J0ICcuL2luZGV4LnN0eWwnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIExheW91dCB7XG4gICAgQEludGFjdC50ZW1wbGF0ZSgpXG4gICAgc3RhdGljIHRlbXBsYXRlID0gdGVtcGxhdGU7XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zaXRlL3NyYy9wYWdlcy9kZXNpZ24vaW5kZXguanMiLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuICAgIGlmKG1vZHVsZS5ob3QpIHtcbiAgICAgIC8vIDE1Mjc1NzY2NzY4MzNcbiAgICAgIHZhciBjc3NSZWxvYWQgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtaG90LWxvYWRlci9ob3RNb2R1bGVSZXBsYWNlbWVudC5qc1wiKShtb2R1bGUuaWQsIHtcImZpbGVNYXBcIjpcIntmaWxlTmFtZX1cIn0pO1xuICAgICAgbW9kdWxlLmhvdC5kaXNwb3NlKGNzc1JlbG9hZCk7XG4gICAgICBtb2R1bGUuaG90LmFjY2VwdCh1bmRlZmluZWQsIGNzc1JlbG9hZCk7XG4gICAgfVxuICBcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NpdGUvc3JjL3BhZ2VzL2Rlc2lnbi9pbmRleC5zdHlsXG4vLyBtb2R1bGUgaWQgPSAuL3NpdGUvc3JjL3BhZ2VzL2Rlc2lnbi9pbmRleC5zdHlsXG4vLyBtb2R1bGUgY2h1bmtzID0gMiIsIlxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24ob2JqLCBfVmR0LCBibG9ja3MsICRjYWxsZWUpIHtcbl9WZHQgfHwgKF9WZHQgPSBWZHQpO1xub2JqIHx8IChvYmogPSB7fSk7XG5ibG9ja3MgfHwgKGJsb2NrcyA9IHt9KTtcbnZhciBoID0gX1ZkdC5taXNzLmgsIGhjID0gX1ZkdC5taXNzLmhjLCBodSA9IF9WZHQubWlzcy5odSwgd2lkZ2V0cyA9IHRoaXMgJiYgdGhpcy53aWRnZXRzIHx8IHt9LCBfYmxvY2tzID0ge30sIF9fYmxvY2tzID0ge30sXG5fX3UgPSBfVmR0LnV0aWxzLCBleHRlbmQgPSBfX3UuZXh0ZW5kLCBfZSA9IF9fdS5lcnJvciwgX2NsYXNzTmFtZSA9IF9fdS5jbGFzc05hbWUsXG5fX28gPSBfX3UuT3B0aW9ucywgX2dldE1vZGVsID0gX19vLmdldE1vZGVsLCBfc2V0TW9kZWwgPSBfX28uc2V0TW9kZWwsXG5fc2V0Q2hlY2tib3hNb2RlbCA9IF9fdS5zZXRDaGVja2JveE1vZGVsLCBfZGV0ZWN0Q2hlY2tib3hDaGVja2VkID0gX191LmRldGVjdENoZWNrYm94Q2hlY2tlZCxcbl9zZXRTZWxlY3RNb2RlbCA9IF9fdS5zZXRTZWxlY3RNb2RlbCxcbnNlbGYgPSB0aGlzLmRhdGEsICR0aGlzID0gdGhpcywgc2NvcGUgPSBvYmosIEFuaW1hdGUgPSBzZWxmICYmIHNlbGYuQW5pbWF0ZSwgcGFyZW50ID0gKCRjYWxsZWUgfHwge30pLl9zdXBlclxucmV0dXJuIChmdW5jdGlvbigpIHtcbiAgICB2YXIgX29iaiA9IHsnY2xhc3NOYW1lJzogJ2Rlc2lnbi1wYWdlJywgJ2NoaWxkcmVuJzogbnVsbH07XG4gICAgaWYgKF9vYmouaGFzT3duUHJvcGVydHkoXCJhcmd1bWVudHNcIikpIHtcbiAgICAgICAgZXh0ZW5kKF9vYmosIF9vYmouYXJndW1lbnRzID09PSB0cnVlID8gb2JqIDogX29iai5hcmd1bWVudHMpO1xuICAgICAgICBkZWxldGUgX29iai5hcmd1bWVudHM7XG4gICAgfVxuICAgIHJldHVybiBwYXJlbnQuY2FsbCh0aGlzLCBfb2JqLCBfVmR0LCBmdW5jdGlvbihibG9ja3MpIHtcbiAgICB2YXIgX2Jsb2NrcyA9IHt9LCBfX2Jsb2NrcyA9IGV4dGVuZCh7fSwgYmxvY2tzKTtcbiAgICByZXR1cm4gKChfYmxvY2tzW1wiY29udGVudFwiXSA9IGZ1bmN0aW9uKHBhcmVudCkge3JldHVybiBoKCd1bCcsIG51bGwsIF9WZHQudXRpbHMubWFwKGZ1bmN0aW9uKCkge3RyeSB7cmV0dXJuIFtBcnJheS5hcHBseShudWxsLCB7bGVuZ3RoOiA5fSkgXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKSwgZnVuY3Rpb24odmFsdWUsIGtleSkge1xucmV0dXJuIGgoJ2xpJywgbnVsbCwgbnVsbCwgX2NsYXNzTmFtZShmdW5jdGlvbigpIHt0cnkge3JldHVybiBbXCJjb2xvciBjb2xvclwiICsga2V5IF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcykpKTtcbn0sIHRoaXMpKTt9KSAmJiAoX19ibG9ja3NbXCJjb250ZW50XCJdID0gZnVuY3Rpb24ocGFyZW50KSB7XG52YXIgc2VsZiA9IHRoaXM7XG5yZXR1cm4gYmxvY2tzW1wiY29udGVudFwiXSA/IGJsb2Nrc1tcImNvbnRlbnRcIl0uY2FsbCh0aGlzLCBmdW5jdGlvbigpIHtcbnJldHVybiBfYmxvY2tzW1wiY29udGVudFwiXS5jYWxsKHNlbGYsIHBhcmVudCk7XG59KSA6IF9ibG9ja3NbXCJjb250ZW50XCJdLmNhbGwodGhpcywgcGFyZW50KTtcbn0pLCBfX2Jsb2Nrcyk7XG59LmNhbGwodGhpcywgYmxvY2tzKSwgcGFyZW50KVxufSkuY2FsbCh0aGlzKVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NpdGUvc3JjL3BhZ2VzL2Rlc2lnbi9pbmRleC52ZHQiLCJpbXBvcnQgSW50YWN0IGZyb20gJ2ludGFjdCc7XG5pbXBvcnQgdGVtcGxhdGUgZnJvbSAnLi9sYXlvdXQudmR0JztcbmltcG9ydCAnLi9sYXlvdXQuc3R5bCc7XG5cbmxldCB0aGVtZSA9ICdrcGMnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgSW50YWN0IHtcbiAgICBASW50YWN0LnRlbXBsYXRlKClcbiAgICBzdGF0aWMgdGVtcGxhdGUgPSB0ZW1wbGF0ZTtcblxuICAgIGRlZmF1bHRzKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdGhlbWU6IHRoZW1lLFxuICAgICAgICB9O1xuICAgIH1cblxuICAgIF9pbml0KCkge1xuICAgICAgICB0aGlzLm9uKCckY2hhbmdlOnRoZW1lJywgKGMsIHYsIG8pID0+IHtcbiAgICAgICAgICAgIHRoaXMuX2NoYW5nZVRoZW1lKHYsIG8pO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBfbW91bnQoKSB7XG4gICAgICAgIHRoaXMuJGJvcmRlciA9IHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuYm9yZGVyJyk7XG4gICAgICAgIHRoaXMuX3VwZGF0ZUJvcmRlcigpO1xuICAgICAgICB0aGlzLmxpbmsgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdsaW5rW3JlbD1zdHlsZXNoZWV0XScpO1xuICAgIH1cblxuICAgIF9jaGFuZ2VUaGVtZShuZXdUaGVtZSwgb2xkVGhlbWUpIHtcbiAgICAgICAgdGhpcy5saW5rLmhyZWYgPSB0aGlzLmxpbmsuaHJlZi5yZXBsYWNlKGB0aGVtZS0ke29sZFRoZW1lfWAsIGB0aGVtZS0ke25ld1RoZW1lfWApO1xuICAgICAgICB0aGVtZSA9IG5ld1RoZW1lO1xuICAgIH1cblxuICAgIF91cGRhdGVCb3JkZXIoKSB7XG4gICAgICAgIC8vIGNvbnN0ICRuYXYgPSB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvcignLmFjdGl2ZScpO1xuICAgICAgICAvLyBsZXQgd2lkdGggPSAwO1xuICAgICAgICAvLyBsZXQgbGVmdCA9IDA7XG4gICAgICAgIC8vIGlmICgkbmF2KSB7XG4gICAgICAgICAgICAvLyBsZWZ0ID0gJG5hdi5wb3NpdGlvbigpLmxlZnQ7XG4gICAgICAgICAgICAvLyB3aWR0aCA9ICRuYXYub3V0ZXJXaWR0aCgpO1xuICAgICAgICAvLyB9XG4gICAgICAgIC8vIHRoaXMuJGJvcmRlci5hZGRDbGFzcygndHJhbnNpdGlvbicpO1xuICAgICAgICAvLyB0aGlzLiRib3JkZXIuY3NzKHt3aWR0aDogd2lkdGgsIGxlZnQ6IGxlZnR9KTtcbiAgICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zaXRlL3NyYy9wYWdlcy9sYXlvdXQuanMiLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuICAgIGlmKG1vZHVsZS5ob3QpIHtcbiAgICAgIC8vIDE1Mjc1NzY2NzcyOTVcbiAgICAgIHZhciBjc3NSZWxvYWQgPSByZXF1aXJlKFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtaG90LWxvYWRlci9ob3RNb2R1bGVSZXBsYWNlbWVudC5qc1wiKShtb2R1bGUuaWQsIHtcImZpbGVNYXBcIjpcIntmaWxlTmFtZX1cIn0pO1xuICAgICAgbW9kdWxlLmhvdC5kaXNwb3NlKGNzc1JlbG9hZCk7XG4gICAgICBtb2R1bGUuaG90LmFjY2VwdCh1bmRlZmluZWQsIGNzc1JlbG9hZCk7XG4gICAgfVxuICBcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NpdGUvc3JjL3BhZ2VzL2xheW91dC5zdHlsXG4vLyBtb2R1bGUgaWQgPSAuL3NpdGUvc3JjL3BhZ2VzL2xheW91dC5zdHlsXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIiLCJpbXBvcnQgTGluayBmcm9tICdrcGMvY29tcG9uZW50cy9saW5rJztpbXBvcnQge1NlbGVjdCwgT3B0aW9ufSBmcm9tICdrcGMvY29tcG9uZW50cy9zZWxlY3QnO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24ob2JqLCBfVmR0LCBibG9ja3MsICRjYWxsZWUpIHtcbl9WZHQgfHwgKF9WZHQgPSBWZHQpO1xub2JqIHx8IChvYmogPSB7fSk7XG5ibG9ja3MgfHwgKGJsb2NrcyA9IHt9KTtcbnZhciBoID0gX1ZkdC5taXNzLmgsIGhjID0gX1ZkdC5taXNzLmhjLCBodSA9IF9WZHQubWlzcy5odSwgd2lkZ2V0cyA9IHRoaXMgJiYgdGhpcy53aWRnZXRzIHx8IHt9LCBfYmxvY2tzID0ge30sIF9fYmxvY2tzID0ge30sXG5fX3UgPSBfVmR0LnV0aWxzLCBleHRlbmQgPSBfX3UuZXh0ZW5kLCBfZSA9IF9fdS5lcnJvciwgX2NsYXNzTmFtZSA9IF9fdS5jbGFzc05hbWUsXG5fX28gPSBfX3UuT3B0aW9ucywgX2dldE1vZGVsID0gX19vLmdldE1vZGVsLCBfc2V0TW9kZWwgPSBfX28uc2V0TW9kZWwsXG5fc2V0Q2hlY2tib3hNb2RlbCA9IF9fdS5zZXRDaGVja2JveE1vZGVsLCBfZGV0ZWN0Q2hlY2tib3hDaGVja2VkID0gX191LmRldGVjdENoZWNrYm94Q2hlY2tlZCxcbl9zZXRTZWxlY3RNb2RlbCA9IF9fdS5zZXRTZWxlY3RNb2RlbCxcbnNlbGYgPSB0aGlzLmRhdGEsICR0aGlzID0gdGhpcywgc2NvcGUgPSBvYmosIEFuaW1hdGUgPSBzZWxmICYmIHNlbGYuQW5pbWF0ZSwgcGFyZW50ID0gKCRjYWxsZWUgfHwge30pLl9zdXBlclxuXG5cblxuY29uc3QgbmF2ID0gW1xuICAgIHtcbiAgICAgICAgdGl0bGU6ICfmlZnnqIsnLFxuICAgICAgICBocmVmOiAnL2RvY3MvZ2V0dGluZy1zdGFydGVkLydcbiAgICB9LFxuICAgIC8qIHsgKi9cbiAgICAgICAgLyogdGl0bGU6ICforr7orqHor63oqIAnLCAqL1xuICAgICAgICAvKiBocmVmOiAnL2Rlc2lnbicsICovXG4gICAgLyogfSwgKi9cbiAgICAvKiB7ICovXG4gICAgICAgIC8qIHRpdGxlOiAnQVBJJywgKi9cbiAgICAgICAgLyogaHJlZjogJ2FwaScgKi9cbiAgICAvKiB9LCAqL1xuICAgIC8vIHtcbiAgICAgICAgLy8gdGl0bGU6ICfnpLrkvosnLFxuICAgICAgICAvLyBocmVmOiAnZXhhbXBsZXMnXG4gICAgLy8gfVxuXTtcblxucmV0dXJuIGgoJ2RpdicsIG51bGwsIFtoKCdkaXYnLCBudWxsLCBoKCdoZWFkZXInLCBudWxsLCAoX2Jsb2Nrc1tcImhlYWRlclwiXSA9IGZ1bmN0aW9uKHBhcmVudCkge3JldHVybiBbaChMaW5rLCB7J2NsYXNzTmFtZSc6ICdsb2dvJywgJ2hyZWYnOiAnLycsICdjaGlsZHJlbic6ICdLUEMnLCAnX2NvbnRleHQnOiAkdGhpc30pLCBoKCdkaXYnLCBudWxsLCBbaCgnbmF2JywgbnVsbCwgW19WZHQudXRpbHMubWFwKGZ1bmN0aW9uKCkge3RyeSB7cmV0dXJuIFtuYXYgXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKSwgZnVuY3Rpb24odmFsdWUsIGtleSkge1xucmV0dXJuIGgoTGluaywgeydjbGFzc05hbWUnOiBfY2xhc3NOYW1lKGZ1bmN0aW9uKCkge3RyeSB7cmV0dXJuIFt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjdGl2ZTogdmFsdWUuaHJlZiA9PT0gc2NvcGUubmF2SW5kZXhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcykpLCAnaHJlZic6IGZ1bmN0aW9uKCkge3RyeSB7cmV0dXJuIFtgJHtwcm9jZXNzLlVSTF9QUkVGSVh9JHt2YWx1ZS5ocmVmfWAgXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKSwgJ2NoaWxkcmVuJzogZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW3ZhbHVlLnRpdGxlIF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcyksICdfY29udGV4dCc6ICR0aGlzfSk7XG59LCB0aGlzKSwgaCgnZGl2JywgbnVsbCwgbnVsbCwgJ2JvcmRlcicpXSksIGgoJ3NwYW4nLCBudWxsLCAn5YiH5o2i5Li76aKY77yaJywgJ2xhYmVsJyksIGgoU2VsZWN0LCB7J3YtbW9kZWwnOiAndGhlbWUnLCAnd2lkdGgnOiAnMTAwJywgJ2NoaWxkcmVuJzogW2goT3B0aW9uLCB7J3ZhbHVlJzogJ2twYycsICdjaGlsZHJlbic6ICdkZWZhdWx0JywgJ19jb250ZXh0JzogJHRoaXN9KSwgaChPcHRpb24sIHsndmFsdWUnOiAna3N5dW4nLCAnY2hpbGRyZW4nOiAna3N5dW4nLCAnX2NvbnRleHQnOiAkdGhpc30pXSwgJ19jb250ZXh0JzogJHRoaXMsIHZhbHVlOiBfZ2V0TW9kZWwoc2VsZiwgJ3RoZW1lJyksICdldi0kY2hhbmdlOnZhbHVlJzogZnVuY3Rpb24oX19jLCBfX24pIHsgX3NldE1vZGVsKHNlbGYsICd0aGVtZScsIF9fbiwgJHRoaXMpIH19KV0sICdyaWdodCcpXTt9KSAmJiAoX19ibG9ja3NbXCJoZWFkZXJcIl0gPSBmdW5jdGlvbihwYXJlbnQpIHtcbnZhciBzZWxmID0gdGhpcztcbnJldHVybiBibG9ja3NbXCJoZWFkZXJcIl0gPyBibG9ja3NbXCJoZWFkZXJcIl0uY2FsbCh0aGlzLCBmdW5jdGlvbigpIHtcbnJldHVybiBfYmxvY2tzW1wiaGVhZGVyXCJdLmNhbGwoc2VsZiwgcGFyZW50KTtcbn0pIDogX2Jsb2Nrc1tcImhlYWRlclwiXS5jYWxsKHRoaXMsIHBhcmVudCk7XG59KSAmJiBfX2Jsb2Nrc1tcImhlYWRlclwiXS5jYWxsKHRoaXMpKSwgJ2hlYWRlci13cmFwcGVyJyksIGgoJ2RpdicsIG51bGwsIChfYmxvY2tzW1wiY29udGVudFwiXSA9IGZ1bmN0aW9uKHBhcmVudCkge3JldHVybiBudWxsO30pICYmIChfX2Jsb2Nrc1tcImNvbnRlbnRcIl0gPSBmdW5jdGlvbihwYXJlbnQpIHtcbnZhciBzZWxmID0gdGhpcztcbnJldHVybiBibG9ja3NbXCJjb250ZW50XCJdID8gYmxvY2tzW1wiY29udGVudFwiXS5jYWxsKHRoaXMsIGZ1bmN0aW9uKCkge1xucmV0dXJuIF9ibG9ja3NbXCJjb250ZW50XCJdLmNhbGwoc2VsZiwgcGFyZW50KTtcbn0pIDogX2Jsb2Nrc1tcImNvbnRlbnRcIl0uY2FsbCh0aGlzLCBwYXJlbnQpO1xufSkgJiYgX19ibG9ja3NbXCJjb250ZW50XCJdLmNhbGwodGhpcyksICdjb250ZW50LXdyYXBwZXInKV0sIF9jbGFzc05hbWUoZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW3snbWFpbi13cmFwcGVyJzogdHJ1ZSwgW3Njb3BlLmNsYXNzTmFtZV06IHNjb3BlLmNsYXNzTmFtZX0gXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKSkpXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc2l0ZS9zcmMvcGFnZXMvbGF5b3V0LnZkdCJdLCJzb3VyY2VSb290IjoiIn0=