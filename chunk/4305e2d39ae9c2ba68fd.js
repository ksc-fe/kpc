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
      // 1527579454397
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
      // 1527579454418
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
      // 1527579454284
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
      // 1527579451539
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
      // 1527579452429
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2Ryb3Bkb3duL2Ryb3Bkb3duLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvZHJvcGRvd24vaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9kcm9wZG93bi9pbmRleC5zdHlsIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvZHJvcGRvd24vaXRlbS5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2Ryb3Bkb3duL2l0ZW0udmR0Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvZHJvcGRvd24vbWVudS5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2Ryb3Bkb3duL21lbnUudmR0Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvaW5wdXQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9pbnB1dC9pbmRleC5zdHlsIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvaW5wdXQvaW5kZXgudmR0Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvbGluay9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2xpbmsvaW5kZXgudmR0Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvbW92ZVdyYXBwZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9tb3ZlV3JhcHBlci9wb3NpdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3NlbGVjdC9ncm91cC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3NlbGVjdC9ncm91cC52ZHQiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9zZWxlY3QvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9zZWxlY3QvaW5kZXguc3R5bCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3NlbGVjdC9pbmRleC52ZHQiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9zZWxlY3Qvb3B0aW9uLmpzIiwid2VicGFjazovLy8uL3NpdGUvc3JjL3BhZ2VzL2Rlc2lnbi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zaXRlL3NyYy9wYWdlcy9kZXNpZ24vaW5kZXguc3R5bCIsIndlYnBhY2s6Ly8vLi9zaXRlL3NyYy9wYWdlcy9kZXNpZ24vaW5kZXgudmR0Iiwid2VicGFjazovLy8uL3NpdGUvc3JjL3BhZ2VzL2xheW91dC5qcyIsIndlYnBhY2s6Ly8vLi9zaXRlL3NyYy9wYWdlcy9sYXlvdXQuc3R5bCIsIndlYnBhY2s6Ly8vLi9zaXRlL3NyYy9wYWdlcy9sYXlvdXQudmR0Il0sIm5hbWVzIjpbImgiLCJJbnRhY3QiLCJWZHQiLCJtaXNzIiwiRHJvcGRvd24iLCJ0ZW1wbGF0ZSIsImRhdGEiLCJnZXQiLCJkZWZhdWx0cyIsInRyaWdnZXIiLCJkaXNhYmxlZCIsIl9pbml0IiwiX3NhdmVPcmlnaW5hbEV2ZW50cyIsIm9uIiwia2VlcCIsImNoaWxkcmVuIiwiY2xhc3NOYW1lIiwicmVzdCIsIkFycmF5IiwiaXNBcnJheSIsIm9yaWdpblByb3BzIiwicHJvcHMiLCJoYXNTYXZlZCIsIl9oYXNTYXZlZCIsIl9ldkNsaWNrIiwiX2V2TW91c2VFbnRlciIsIl9ldk1vdXNlTGVhdmUiLCJzaG93IiwiYmluZCIsImhpZGUiLCJzZXQiLCJzaWxlbnQiLCJfbW91bnQiLCJzaWJsaW5ncyIsInBhcmVudFZOb2RlIiwiaW5kZXgiLCJpbmRleE9mIiwidk5vZGUiLCJtZW51IiwiZHJvcGRvd24iLCJmbiIsImUiLCJpc0ZvY3VzIiwiZm9jdXNJdGVtQnlJbmRleCIsImltbWVkaWF0ZWx5IiwiV3JhcHBlciIsImluVnVlIiwicG9zaXRpb24iLCJrZXkiLCJyZWYiLCJlbGVtZW50IiwiRHJvcGRvd25WdWVXcmFwcGVyIiwiX2NsYXNzTmFtZSIsInV0aWxzIiwiX1dyYXBwZXIiLCJmdW5jdGlvbmFsV3JhcHBlciIsIkRyb3Bkb3duTWVudSIsIkRyb3Bkb3duSXRlbSIsImhpZGVPblNlbGVjdCIsIl9pc0ZvY3VzIiwiYW5jZXN0b3IiLCJfZmluZEFuY2VzdG9yRHJvcGRvd25NZW51IiwicGFyZW50IiwiaXRlbXMiLCJwdXNoIiwiX29uQ2xpY2siLCJ0YWciLCJfb25Nb3VzZUVudGVyIiwiZm9jdXNJdGVtIiwiX29uTW91c2VMZWF2ZSIsInNlbGVjdCIsIl9pc1N1Yk1lbnUiLCJmb2N1cyIsImVsUmVjdCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsInBFbCIsInJlZnMiLCJwRWxSZWN0IiwiYm90dG9tT3ZlcmZsb3dEaXN0YW5jZSIsImJvdHRvbSIsInRvcE92ZXJmbG93RGlzdGFuY2UiLCJ0b3AiLCJzY3JvbGxUb3AiLCJ1bkZvY3VzIiwic2hvd01lbnVBbmRGb2N1cyIsImhpZGVNZW51IiwiaXNGaXJzdCIsIl9kZXN0cm95Iiwic3BsaWNlIiwicHJvcFR5cGVzIiwiQm9vbGVhbiIsIm9iaiIsIl9WZHQiLCJibG9ja3MiLCIkY2FsbGVlIiwiaGMiLCJodSIsIndpZGdldHMiLCJfYmxvY2tzIiwiX19ibG9ja3MiLCJfX3UiLCJleHRlbmQiLCJfZSIsImVycm9yIiwiX19vIiwiT3B0aW9ucyIsIl9nZXRNb2RlbCIsImdldE1vZGVsIiwiX3NldE1vZGVsIiwic2V0TW9kZWwiLCJfc2V0Q2hlY2tib3hNb2RlbCIsInNldENoZWNrYm94TW9kZWwiLCJfZGV0ZWN0Q2hlY2tib3hDaGVja2VkIiwiZGV0ZWN0Q2hlY2tib3hDaGVja2VkIiwiX3NldFNlbGVjdE1vZGVsIiwic2V0U2VsZWN0TW9kZWwiLCJzZWxmIiwiJHRoaXMiLCJzY29wZSIsIkFuaW1hdGUiLCJfc3VwZXIiLCJjbGFzc05hbWVPYmoiLCJjYWxsIiwidHJhbnNpdGlvbiIsInN1YkRyb3Bkb3ducyIsImZvY3VzSW5kZXgiLCJsb2NrZWQiLCJfZmluZFBhcmVudERyb3Bkb3duTWVudSIsIl9hZGREb2N1bWVudEV2ZW50cyIsImNsZWFyVGltZW91dCIsInRpbWVyIiwic2V0VGltZW91dCIsInRvZ2dsZSIsIm15IiwiYXQiLCJvZiIsInVzaW5nIiwiZmVlZGJhY2siLCJfb25TaG93IiwiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiX29uRG9jdW1lbnRDbGljayIsIl9vbktleWRvd24iLCJfcmVtb3ZlRG9jdW1lbnRFdmVudHMiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwidGFyZ2V0IiwiY29udGFpbnMiLCJfaXNDbGlja1N1Yk1lbnUiLCJfZHJvcGRvd24iLCJrZXlDb2RlIiwiX2ZvY3VzTmV4dEl0ZW0iLCJfZm9jdXNQcmV2SXRlbSIsIl9zaG93U3ViTWVudSIsIl9oaWRlU3ViTWVudSIsIl9zZWxlY3RJdGVtIiwicHJldmVudERlZmF1bHQiLCJkaXJlY3Rpb24iLCJtYXgiLCJsZW5ndGgiLCJvbGRJbmRleCIsImZpeEluZGV4IiwiaSIsIml0ZW0iLCJzdWJNZW51cyIsInJldCIsInN1Yk1lbnUiLCJldmVudHMiLCJNb3ZlV3JhcHBlciIsInVuZGVmaW5lZCIsIklucHV0IiwidHlwZSIsIm5hbWUiLCJ2YWx1ZSIsImRlZmF1bHRWYWx1ZSIsInBsYWNlaG9sZGVyIiwicmVhZG9ubHkiLCJjbGVhcmFibGUiLCJzaXplIiwicm93cyIsInNwZWxsY2hlY2siLCJhdXRvV2lkdGgiLCJmbHVpZCIsIndpZHRoIiwidGFiaW5kZXgiLCJfYWRqdXN0V2lkdGgiLCJmYWtlIiwib2Zmc2V0V2lkdGgiLCJpbnB1dCIsInN0eWxlIiwiY2xlYXIiLCJfb25JbnB1dCIsIl9wcm94eUV2ZW50IiwiU3RyaW5nIiwicHJlcGVuZCIsImFwcGVuZCIsInByZWZpeCIsInN1ZmZpeCIsInJlZHVjZSIsIm1lbW8iLCJ3cmFwcGVyRXZlbnRzIiwiTGluayIsImhyZWYiLCJpc1JlcGxhY2UiLCJ0byIsImhpc3RvcnkiLCJ1cmwiLCJhcHBseSIsImxvY2F0aW9uIiwicGF0aG5hbWUiLCJzZWFyY2giLCJyZXBsYWNlIiwiYXV0b0Rlc3Ryb3kiLCJjb250YWluZXIiLCJpbml0IiwiYXJncyIsImNyZWF0ZUNvbW1lbnQiLCJoeWRyYXRlIiwidXBkYXRlIiwibGFzdFZOb2RlIiwibmV4dFZOb2RlIiwiZGVzdHJveSIsIl8kZGVzdHJveSIsInJlbmRlcmVkIiwiVHlwZXMiLCJDb21wb25lbnRDbGFzc09ySW5zdGFuY2UiLCJyZW1vdmUiLCJ2ZHQiLCJkZXN0cm95ZWQiLCJvZmYiLCJxdWVyeVNlbGVjdG9yIiwiYm9keSIsImFwcGVuZENoaWxkIiwiZ2V0RG9jdW1lbnRPcldpbmRvd1JlY3QiLCJzY3JvbGxiYXJXaWR0aCIsIk1hdGgiLCJhYnMiLCJySG9yaXpvbnRhbCIsInJWZXJ0aWNhbCIsInJPZmZzZXQiLCJyUG9zaXRpb24iLCJyUGVyY2VudCIsImdldERpbWVuc2lvbnMiLCJlbGVtIiwibm9kZVR5cGUiLCJoZWlnaHQiLCJvZmZzZXQiLCJsZWZ0Iiwid2luZG93IiwicGFnZVlPZmZzZXQiLCJwYWdlWE9mZnNldCIsInBhZ2VZIiwicGFnZVgiLCJyZWN0IiwiZCIsImRvY3VtZW50RWxlbWVudCIsImNsaWVudFdpZHRoIiwiY2xpZW50SGVpZ2h0IiwiYiIsInNjcm9sbFdpZHRoIiwic2Nyb2xsSGVpZ2h0Iiwib2Zmc2V0SGVpZ2h0IiwiZ2V0T2Zmc2V0cyIsIm9mZnNldHMiLCJwYXJzZUZsb2F0IiwidGVzdCIsIl9zY3JvbGxCYXJXaWR0aCIsIm91dGVyIiwiY3JlYXRlRWxlbWVudCIsInZpc2liaWxpdHkiLCJtc092ZXJmbG93U3R5bGUiLCJ3aWR0aE5vU2Nyb2xsIiwib3ZlcmZsb3ciLCJpbm5lciIsIndpZHRoV2l0aFNjcm9sbCIsInBhcmVudE5vZGUiLCJyZW1vdmVDaGlsZCIsImdldFNjcm9sbEluZm8iLCJ3aXRoaW4iLCJvdmVyZmxvd1giLCJpc1dpbmRvdyIsImlzRG9jdW1lbnQiLCJvdmVyZmxvd1kiLCJoYXNPdmVyZmxvd1giLCJoYXNPdmVyZmxvd1kiLCJnZXRXaXRoaW5JbmZvIiwiaGFzT2Zmc2V0Iiwic2Nyb2xsTGVmdCIsInBhcnNlQ3NzIiwicHJvcGVydHkiLCJwYXJzZUludCIsIm9wdGlvbnMiLCJ0YXJnZXRXaWR0aCIsInRhcmdldEhlaWdodCIsInRhcmdldE9mZnNldCIsImJhc2VQb3NpdGlvbiIsImNvbGxpc2lvbiIsInNwbGl0Iiwic2Nyb2xsSW5mbyIsImZvckVhY2giLCJwb3MiLCJjb25jYXQiLCJob3Jpem9udGFsT2Zmc2V0IiwiZXhlYyIsInZlcnRpY2FsT2Zmc2V0IiwiYXRPZmZzZXQiLCJlbGVtV2lkdGgiLCJlbGVtSGVpZ2h0IiwibXlPZmZzZXQiLCJjb21wdXRlZFN0eWxlIiwiZ2V0Q29tcHV0ZWRTdHlsZSIsIm1hcmdpbkxlZnQiLCJtYXJnaW5Ub3AiLCJjb2xsaXNpb25XaWR0aCIsImNvbGxpc2lvbkhlaWdodCIsImNvbGxpc2lvblBvc2l0aW9uIiwiZGlyIiwiY29sbCIsInJ1bGVzIiwicmlnaHQiLCJob3Jpem9udGFsIiwidmVydGljYWwiLCJpbXBvcnRhbnQiLCJmaXQiLCJ3aXRoaW5PZmZzZXQiLCJvdXRlcldpZHRoIiwiY29sbGlzaW9uUG9zTGVmdCIsIm92ZXJMZWZ0Iiwib3ZlclJpZ2h0IiwibmV3T3ZlclJpZ2h0Iiwib3V0ZXJIZWlnaHQiLCJjb2xsaXNpb25Qb3NUb3AiLCJvdmVyVG9wIiwib3ZlckJvdHRvbSIsIm5ld092ZXJCb3R0b20iLCJmbGlwIiwib2Zmc2V0TGVmdCIsIm5ld092ZXJMZWZ0Iiwib2Zmc2V0VG9wIiwibmV3T3ZlclRvcCIsImZsaXBmaXQiLCJPcHRpb25Hcm91cCIsImxhYmVsIiwiU2VsZWN0IiwibXVsdGlwbGUiLCJmaWx0ZXJhYmxlIiwia2V5d29yZHMiLCJhbGxvd1VubWF0Y2giLCJfc2hvdyIsIl9vbkNsZWFyIiwic3RvcFByb3BhZ2F0aW9uIiwiX29uU2VsZWN0IiwiYXN5bmMiLCJ2YWx1ZXMiLCJzbGljZSIsIl9mb2N1c0lucHV0IiwiX3Jlc2V0U2VhcmNoIiwiX29uU2VhcmNoIiwidHJpbSIsIl9vbkNoYW5nZVNob3ciLCJjIiwiX29uQmx1ciIsIl9zZWxlY3RJbnB1dCIsIl9vbkZvY3VzIiwiX29uRm9jdXNvdXQiLCJfZGVsZXRlIiwiX3Bvc2l0aW9uIiwibWVudUVsZW1lbnQiLCJtZW51V2lkdGgiLCJfb25LZXlwcmVzcyIsIndyYXBwZXIiLCJjbGljayIsIk9wdGlvbiIsIkdyb3VwIiwiX3BsYWNlaG9sZGVyIiwiaGFzVmFsdWUiLCJpc0dyb3VwIiwibGFiZWxzIiwiaGFuZGxlUHJvcHMiLCJhY3RpdmUiLCJ2YWxpZCIsInRtcCIsInRvTG93ZXJDYXNlIiwidGV4dCIsIk9wdGlvbnNWTm9kZXMiLCJtYXAiLCJNZW51IiwiTGF5b3V0IiwiX29iaiIsImhhc093blByb3BlcnR5IiwiYXJndW1lbnRzIiwidGhlbWUiLCJ2IiwibyIsIl9jaGFuZ2VUaGVtZSIsIiRib3JkZXIiLCJfdXBkYXRlQm9yZGVyIiwibGluayIsIm5ld1RoZW1lIiwib2xkVGhlbWUiLCJuYXYiLCJ0aXRsZSIsIm5hdkluZGV4IiwiX19jIiwiX19uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBLElBQU1BLElBQUlDLGlCQUFPQyxHQUFQLENBQVdDLElBQVgsQ0FBZ0JILENBQTFCOztJQUVxQkksUSxXQUNoQkgsaUJBQU9JLFFBQVAsRTs7Ozs7Ozs7YUFDTUEsUSxxQkFBU0MsSSxFQUFNO0FBQ2xCLGVBQU9BLEtBQUtDLEdBQUwsQ0FBUyxVQUFULENBQVA7QUFDSCxLOzt1QkFFREMsUSx1QkFBVztBQUNQLGVBQU87QUFDSEMscUJBQVMsT0FETjtBQUVIQyxzQkFBVTtBQUZQLFNBQVA7QUFJSCxLOzt1QkFFREMsSyxvQkFBUTtBQUFBOztBQUNKLGFBQUtDLG1CQUFMO0FBQ0EsYUFBS0MsRUFBTCxDQUFRLG1CQUFSLEVBQTZCLFlBQU07QUFDL0IsbUJBQUtELG1CQUFMO0FBQ0gsU0FGRCxFQUVHLEVBQUNFLE1BQU0sSUFBUCxFQUZIO0FBR0gsSzs7dUJBRURGLG1CLGtDQUFzQjtBQUFBLG1CQUM0QixLQUFLTCxHQUFMLEVBRDVCO0FBQUEsWUFDYlEsUUFEYSxRQUNiQSxRQURhO0FBQUEsWUFDSE4sT0FERyxRQUNI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dCBJbnRhY3QgZnJvbSAnaW50YWN0JztcbmltcG9ydCB7aXNUZXh0Vk5vZGUsIGZpbmRQYXJlbnRDb21wb25lbnR9IGZyb20gJy4uL3V0aWxzJztcbmltcG9ydCBEcm9wZG93bk1lbnUgZnJvbSAnLi9tZW51JztcblxuY29uc3QgaCA9IEludGFjdC5WZHQubWlzcy5oO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEcm9wZG93biBleHRlbmRzIEludGFjdCB7XG4gICAgQEludGFjdC50ZW1wbGF0ZSgpXG4gICAgc3RhdGljIHRlbXBsYXRlKGRhdGEpIHtcbiAgICAgICAgcmV0dXJuIGRhdGEuZ2V0KCdjaGlsZHJlbicpO1xuICAgIH1cblxuICAgIGRlZmF1bHRzKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdHJpZ2dlcjogJ2hvdmVyJyxcbiAgICAgICAgICAgIGRpc2FibGVkOiBmYWxzZSxcbiAgICAgICAgfVxuICAgIH1cblxuICAgIF9pbml0KCkge1xuICAgICAgICB0aGlzLl9zYXZlT3JpZ2luYWxFdmVudHMoKTtcbiAgICAgICAgdGhpcy5vbignJHJlY2VpdmU6Y2hpbGRyZW4nLCAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLl9zYXZlT3JpZ2luYWxFdmVudHMoKTtcbiAgICAgICAgfSwge2tlZXA6IHRydWV9KTtcbiAgICB9XG5cbiAgICBfc2F2ZU9yaWdpbmFsRXZlbnRzKCkge1xuICAgICAgICBsZXQge2NoaWxkcmVuLCB0cmlnZ2VyLCBjbGFzc05hbWUsIC4uLnJlc3R9ID0gdGhpcy5nZXQoKTtcbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoY2hpbGRyZW4pKSB7XG4gICAgICAgICAgICBjaGlsZHJlbiA9IGNoaWxkcmVuWzBdO1xuICAgICAgICB9IFxuICAgICAgICBpZiAoaXNUZXh0Vk5vZGUoY2hpbGRyZW4pKSB7XG4gICAgICAgICAgICBjaGlsZHJlbiA9IGgoJ3NwYW4nLCByZXN0LCBjaGlsZHJlbiwgY2xhc3NOYW1lKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIHNhdmUgdGhlIG9yaWdpbmFsIGV2ZW50XG4gICAgICAgIGNvbnN0IG9yaWdpblByb3BzID0gY2hpbGRyZW4ucHJvcHM7XG4gICAgICAgIGxldCBoYXNTYXZlZCA9IGZhbHNlO1xuICAgICAgICBpZiAoIW9yaWdpblByb3BzLl9oYXNTYXZlZCkge1xuICAgICAgICAgICAgY2hpbGRyZW4uX2V2Q2xpY2sgPSBvcmlnaW5Qcm9wc1snZXYtY2xpY2snXTtcbiAgICAgICAgICAgIGNoaWxkcmVuLl9ldk1vdXNlRW50ZXIgPSBvcmlnaW5Qcm9wc1snZXYtbW91c2VlbnRlciddO1xuICAgICAgICAgICAgY2hpbGRyZW4uX2V2TW91c2VMZWF2ZSA9IG9yaWdpblByb3BzWydldi1tb3VzZWxlYXZlJ107XG4gICAgICAgICAgICBoYXNTYXZlZCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgcHJvcHMgPSB7fTtcbiAgICAgICAgLy8gaWYgKHRyaWdnZXIgPT09ICdjbGljaycpIHtcbiAgICAgICAgICAgIHByb3BzWydldi1jbGljayddID0gdGhpcy5zaG93LmJpbmQodGhpcywgY2hpbGRyZW4uX2V2Q2xpY2spO1xuICAgICAgICAvLyB9IGVsc2Uge1xuICAgICAgICBpZiAodHJpZ2dlciA9PT0gJ2hvdmVyJykge1xuICAgICAgICAgICAgcHJvcHNbJ2V2LW1vdXNlZW50ZXInXSA9IHRoaXMuc2hvdy5iaW5kKHRoaXMsIGNoaWxkcmVuLl9ldk1vdXNlRW50ZXIpO1xuICAgICAgICAgICAgcHJvcHNbJ2V2LW1vdXNlbGVhdmUnXSA9IHRoaXMuaGlkZS5iaW5kKHRoaXMsIGNoaWxkcmVuLl9ldk1vdXNlTGVhdmUpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChoYXNTYXZlZCkge1xuICAgICAgICAgICAgcHJvcHMuX2hhc1NhdmVkID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBjaGlsZHJlbi5wcm9wcyA9IHsuLi5jaGlsZHJlbi5wcm9wcywgLi4ucHJvcHN9O1xuICAgICAgICB0aGlzLnNldCgnY2hpbGRyZW4nLCBjaGlsZHJlbiwge3NpbGVudDogdHJ1ZX0pO1xuICAgIH1cblxuICAgIF9tb3VudCgpIHtcbiAgICAgICAgLy8gdGhlIG5leHQgc2libGluZyBpcyBEcm9wZG93bk1lbnVcbiAgICAgICAgLy8gd2UgY2FuIG5vdCBnZXQgdGhlIG1lbnUgYnkgY2FsbCBnZXQoJ21lbnUnKSBkaXJlY3RseSxcbiAgICAgICAgLy8gYmVjYXVzZSB0aGUgdk5vZGUgbWF5IGJlIGNsb25lZFxuICAgICAgICBjb25zdCBzaWJsaW5ncyA9IHRoaXMucGFyZW50Vk5vZGUuY2hpbGRyZW47XG4gICAgICAgIGNvbnN0IGluZGV4ID0gc2libGluZ3MuaW5kZXhPZih0aGlzLnZOb2RlKTtcbiAgICAgICAgY29uc3QgbWVudSA9IHNpYmxpbmdzW2luZGV4ICsgMV07XG4gICAgICAgIG1lbnUuY2hpbGRyZW4uZHJvcGRvd24gPSB0aGlzO1xuICAgICAgICB0aGlzLm1lbnUgPSBtZW51O1xuICAgIH1cblxuICAgIHNob3coZm4sIGUsIGlzRm9jdXMpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBmbiA9PT0gJ2Z1bmN0aW9uJykgZm4oZSk7XG5cbiAgICAgICAgaWYgKHRoaXMuZ2V0KCdkaXNhYmxlZCcpKSByZXR1cm47XG5cbiAgICAgICAgY29uc3QgbWVudSA9IHRoaXMubWVudS5jaGlsZHJlbjtcbiAgICAgICAgbWVudS5zaG93KCk7XG5cbiAgICAgICAgaWYgKGlzRm9jdXMpIHtcbiAgICAgICAgICAgIG1lbnUuZm9jdXNJdGVtQnlJbmRleCgwKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGhpZGUoZm4sIGUsIGltbWVkaWF0ZWx5KSB7XG4gICAgICAgIGlmICh0eXBlb2YgZm4gPT09ICdmdW5jdGlvbicpIGZuKGUpO1xuXG4gICAgICAgIGlmICh0aGlzLmdldCgnZGlzYWJsZWQnKSkgcmV0dXJuO1xuXG4gICAgICAgIGNvbnN0IG1lbnUgPSB0aGlzLm1lbnUuY2hpbGRyZW47XG4gICAgICAgIG1lbnUuaGlkZShpbW1lZGlhdGVseSk7XG4gICAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9kcm9wZG93bi9kcm9wZG93bi5qcyIsImltcG9ydCBJbnRhY3QgZnJvbSAnaW50YWN0JztcbmltcG9ydCBEcm9wZG93biBmcm9tICcuL2Ryb3Bkb3duJztcbmltcG9ydCBEcm9wZG93bk1lbnUgZnJvbSAnLi9tZW51JztcbmltcG9ydCBEcm9wZG93bkl0ZW0gZnJvbSAnLi9pdGVtJztcbmltcG9ydCAnLi4vLi4vc3R5bGVzL2twYy5zdHlsJztcbmltcG9ydCAnLi9pbmRleC5zdHlsJztcblxuY29uc3QgaCA9IEludGFjdC5WZHQubWlzcy5oO1xuXG5mdW5jdGlvbiBXcmFwcGVyKHByb3BzLCBpblZ1ZSkge1xuICAgIGxldCB7XG4gICAgICAgIGNoaWxkcmVuLCBwb3NpdGlvbiwga2V5LFxuICAgICAgICByZWYsIC4uLnJlc3RcbiAgICB9ID0gcHJvcHM7XG5cbiAgICBjb25zdCBlbGVtZW50ID0gY2hpbGRyZW5bMF07XG4gICAgY29uc3QgbWVudSA9IGNoaWxkcmVuWzFdO1xuXG4gICAgbWVudS5wcm9wcyA9IHtcbiAgICAgICAgcG9zaXRpb24sIFxuICAgICAgICBrZXk6IGtleSA9PSBudWxsID8ga2V5IDogYCR7a2V5fS5tZW51YCxcbiAgICAgICAgLi4ucmVzdCxcbiAgICAgICAgLi4ubWVudS5wcm9wcyxcbiAgICB9O1xuXG4gICAgcmV0dXJuICFpblZ1ZSA/IFxuICAgICAgICBbXG4gICAgICAgICAgICBoKERyb3Bkb3duLCB7XG4gICAgICAgICAgICAgICAga2V5OiBrZXkgPT0gbnVsbCA/IGtleSA6IGAke2tleX0udHJpZ2dlcmAsXG4gICAgICAgICAgICAgICAgcmVmOiByZWYsXG4gICAgICAgICAgICAgICAgY2hpbGRyZW46IGVsZW1lbnQsIFxuICAgICAgICAgICAgICAgIC4uLnJlc3RcbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgbWVudVxuICAgICAgICBdIDpcbiAgICAgICAgaChEcm9wZG93blZ1ZVdyYXBwZXIsIHtcbiAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgICAgaChEcm9wZG93biwge1xuICAgICAgICAgICAgICAgICAgICBrZXk6IGtleSA9PSBudWxsID8ga2V5IDogYCR7a2V5fS50cmlnZ2VyYCxcbiAgICAgICAgICAgICAgICAgICAgcmVmOiByZWYsXG4gICAgICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBbZWxlbWVudF0sIFxuICAgICAgICAgICAgICAgICAgICAuLi5yZXN0XG4gICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgbWVudVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIC4uLnJlc3RcbiAgICAgICAgfSk7XG59XG5cbi8vIFZ1ZSBvbmx5IHN1cHBvcnQgcmV0dXJuIG9uZSBlbGVtZW50IGZyb20gZnVuY3Rpb25hbCBjb21wb25lbnQsXG4vLyBzbyB3ZSB3cmFwIHRoZW0uIFRoaXMgd2lsbCBsZWFkIHRvIGRhbWFnZSB0aGUgZG9tIHN0cnVjdGlvbixcbi8vIGJlY2F1c2Ugd2UgbXVzdCB3cmFwIHRoZW0gd2l0aCBhIGRpdlxuY29uc3QgX2NsYXNzTmFtZSA9IEludGFjdC5WZHQudXRpbHMuY2xhc3NOYW1lO1xuY2xhc3MgRHJvcGRvd25WdWVXcmFwcGVyIGV4dGVuZHMgSW50YWN0IHtcbiAgICB0ZW1wbGF0ZShkYXRhKSB7XG4gICAgICAgIGNvbnN0IHtjbGFzc05hbWUsIGNoaWxkcmVuLCAuLi5yZXN0fSA9IGRhdGEuZ2V0KCk7XG4gICAgICAgIHJldHVybiBoKCdkaXYnLCByZXN0LCBjaGlsZHJlbiwgX2NsYXNzTmFtZSh7XG4gICAgICAgICAgICAnay1kcm9wZG93bic6IHRydWUsXG4gICAgICAgICAgICBbY2xhc3NOYW1lXTogY2xhc3NOYW1lLFxuICAgICAgICB9KSk7XG4gICAgfVxufVxuXG5jb25zdCBfV3JhcHBlciA9IEludGFjdC5mdW5jdGlvbmFsV3JhcHBlciA/XG4gICAgSW50YWN0LmZ1bmN0aW9uYWxXcmFwcGVyKFdyYXBwZXIpIDogV3JhcHBlcjtcblxuZXhwb3J0IGRlZmF1bHQgX1dyYXBwZXI7XG5cbmV4cG9ydCB7X1dyYXBwZXIgYXMgRHJvcGRvd24sIERyb3Bkb3duTWVudSwgRHJvcGRvd25JdGVtfTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvZHJvcGRvd24vaW5kZXguanMiLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuICAgIGlmKG1vZHVsZS5ob3QpIHtcbiAgICAgIC8vIDE1Mjc1Nzk0NTQzOTdcbiAgICAgIHZhciBjc3NSZWxvYWQgPSByZXF1aXJlKFwiIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtaG90LWxvYWRlci9ob3RNb2R1bGVSZXBsYWNlbWVudC5qc1wiKShtb2R1bGUuaWQsIHtcImZpbGVNYXBcIjpcIntmaWxlTmFtZX1cIn0pO1xuICAgICAgbW9kdWxlLmhvdC5kaXNwb3NlKGNzc1JlbG9hZCk7XG4gICAgICBtb2R1bGUuaG90LmFjY2VwdCh1bmRlZmluZWQsIGNzc1JlbG9hZCk7XG4gICAgfVxuICBcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2NvbXBvbmVudHMvZHJvcGRvd24vaW5kZXguc3R5bFxuLy8gbW9kdWxlIGlkID0gLi9jb21wb25lbnRzL2Ryb3Bkb3duL2luZGV4LnN0eWxcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiIsImltcG9ydCBJbnRhY3QgZnJvbSAnaW50YWN0JztcbmltcG9ydCB0ZW1wbGF0ZSBmcm9tICcuL2l0ZW0udmR0JztcbmltcG9ydCBEcm9wZG93biBmcm9tICcuL2Ryb3Bkb3duJztcbmltcG9ydCBEcm9wZG93bk1lbnUgZnJvbSAnLi9tZW51JztcbmltcG9ydCB7ZmluZFBhcmVudENvbXBvbmVudH0gZnJvbSAnLi4vdXRpbHMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEcm9wZG93bkl0ZW0gZXh0ZW5kcyBJbnRhY3Qge1xuICAgIEBJbnRhY3QudGVtcGxhdGUoKVxuICAgIHN0YXRpYyB0ZW1wbGF0ZSA9IHRlbXBsYXRlO1xuXG4gICAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICAgICAgZGlzYWJsZWQ6IEJvb2xlYW4sXG4gICAgICAgIGhpZGVPblNlbGVjdDogQm9vbGVhbixcbiAgICB9O1xuXG4gICAgZGVmYXVsdHMoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBkaXNhYmxlZDogZmFsc2UsXG4gICAgICAgICAgICBoaWRlT25TZWxlY3Q6IHRydWUsXG5cbiAgICAgICAgICAgIF9pc0ZvY3VzOiBmYWxzZSxcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBfaW5pdCgpIHtcbiAgICAgICAgLy8gaWYgc2VsZWN0ZWQgaGlkZSBhbGwgZHJvcGRvd24gbWVudVxuICAgICAgICB0aGlzLm9uKCdzZWxlY3QnLCAoKSA9PiB7XG4gICAgICAgICAgICBpZiAodGhpcy5nZXQoJ2hpZGVPblNlbGVjdCcpKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgYW5jZXN0b3IgPSB0aGlzLl9maW5kQW5jZXN0b3JEcm9wZG93bk1lbnUoKTtcbiAgICAgICAgICAgICAgICBhbmNlc3Rvci5oaWRlKHRydWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBfbW91bnQoKSB7XG4gICAgICAgIGNvbnN0IHBhcmVudCA9IHRoaXMucGFyZW50ID0gdGhpcy5fZmluZEFuY2VzdG9yRHJvcGRvd25NZW51KHRydWUpO1xuICAgICAgICBwYXJlbnQuaXRlbXMucHVzaCh0aGlzKTtcbiAgICB9XG5cbiAgICBfb25DbGljayhlKSB7XG4gICAgICAgIGlmICh0aGlzLmdldCgnZGlzYWJsZWQnKSkgcmV0dXJuO1xuXG4gICAgICAgIHRoaXMudHJpZ2dlcignY2xpY2snLCBlKTtcblxuICAgICAgICAvLyBpcyBub3QgYSBzdWIgZHJvcGRvd24gdHJpZ2dlclxuICAgICAgICBpZiAodGhpcy5wYXJlbnRWTm9kZS50YWcgIT09IERyb3Bkb3duKSB7XG4gICAgICAgICAgICB0aGlzLnRyaWdnZXIoJ3NlbGVjdCcsIHRoaXMsIGUpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgX29uTW91c2VFbnRlcihlKSB7XG4gICAgICAgIHRoaXMudHJpZ2dlcignbW91c2VlbnRlcicsIGUpO1xuXG4gICAgICAgIGlmICh0aGlzLmdldCgnZGlzYWJsZWQnKSkgcmV0dXJuO1xuXG4gICAgICAgIHRoaXMucGFyZW50LmZvY3VzSXRlbSh0aGlzKTtcbiAgICB9XG5cbiAgICBfb25Nb3VzZUxlYXZlKGUpIHtcbiAgICAgICAgdGhpcy50cmlnZ2VyKCdtb3VzZWxlYXZlJywgZSk7XG4gICAgICAgIC8vIGlmICh0aGlzLmdldCgnZGlzYWJsZWQnKSkgcmV0dXJuO1xuICAgIH1cblxuICAgIHNlbGVjdCgpIHtcbiAgICAgICAgLy8gaXMgbm90IGEgc3ViIGRyb3Bkb3duIHRyaWdnZXJcbiAgICAgICAgY29uc3QgZHJvcGRvd24gPSB0aGlzLl9pc1N1Yk1lbnUoKTtcbiAgICAgICAgaWYgKCFkcm9wZG93bikge1xuICAgICAgICAgICAgdGhpcy50cmlnZ2VyKCdzZWxlY3QnLCB0aGlzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGRyb3Bkb3duLnNob3coKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZvY3VzKCkge1xuICAgICAgICB0aGlzLnNldCgnX2lzRm9jdXMnLCB0cnVlKTtcblxuICAgICAgICBjb25zdCBlbFJlY3QgPSB0aGlzLmVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgIGNvbnN0IHBFbCA9IHRoaXMucGFyZW50LnJlZnMubWVudS5lbGVtZW50O1xuICAgICAgICBjb25zdCBwRWxSZWN0ID0gcEVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgICBjb25zdCBib3R0b21PdmVyZmxvd0Rpc3RhbmNlID0gZWxSZWN0LmJvdHRvbSAtIHBFbFJlY3QuYm90dG9tO1xuICAgICAgICBjb25zdCB0b3BPdmVyZmxvd0Rpc3RhbmNlID0gZWxSZWN0LnRvcCAtIHBFbFJlY3QudG9wO1xuICAgICAgICBcbiAgICAgICAgaWYgKGJvdHRvbU92ZXJmbG93RGlzdGFuY2UgPiAwKSB7XG4gICAgICAgICAgICBwRWwuc2Nyb2xsVG9wICs9IGJvdHRvbU92ZXJmbG93RGlzdGFuY2U7XG4gICAgICAgIH0gZWxzZSBpZiAodG9wT3ZlcmZsb3dEaXN0YW5jZSA8IDApIHtcbiAgICAgICAgICAgIHBFbC5zY3JvbGxUb3AgKz0gdG9wT3ZlcmZsb3dEaXN0YW5jZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHVuRm9jdXMoKSB7XG4gICAgICAgIHRoaXMuc2V0KCdfaXNGb2N1cycsIGZhbHNlKTtcblxuICAgICAgICBjb25zdCBkcm9wZG93biA9IHRoaXMuX2lzU3ViTWVudSgpO1xuICAgICAgICBpZiAoZHJvcGRvd24pIHtcbiAgICAgICAgICAgIGRyb3Bkb3duLmhpZGUobnVsbCwgbnVsbCwgdHJ1ZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzaG93TWVudUFuZEZvY3VzKCkge1xuICAgICAgICBjb25zdCBkcm9wZG93biA9IHRoaXMuX2lzU3ViTWVudSgpO1xuICAgICAgICBpZiAoZHJvcGRvd24pIHtcbiAgICAgICAgICAgIGRyb3Bkb3duLnNob3cobnVsbCwgbnVsbCwgdHJ1ZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBoaWRlTWVudSgpIHtcbiAgICAgICAgY29uc3QgZHJvcGRvd24gPSB0aGlzLl9pc1N1Yk1lbnUoKTtcbiAgICAgICAgaWYgKGRyb3Bkb3duKSB7XG4gICAgICAgICAgICBkcm9wZG93bi5oaWRlKG51bGwsIG51bGwsIHRydWUpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgX2lzU3ViTWVudSgpIHtcbiAgICAgICAgaWYgKHRoaXMucGFyZW50Vk5vZGUudGFnID09PSBEcm9wZG93bikge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMucGFyZW50Vk5vZGUuY2hpbGRyZW47XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBfZmluZEFuY2VzdG9yRHJvcGRvd25NZW51KGlzRmlyc3QpIHtcbiAgICAgICAgcmV0dXJuIGZpbmRQYXJlbnRDb21wb25lbnQoRHJvcGRvd25NZW51LCB0aGlzLCBpc0ZpcnN0KTtcbiAgICB9XG5cbiAgICBfZGVzdHJveSgpIHtcbiAgICAgICAgY29uc3QgaXRlbXMgPSB0aGlzLnBhcmVudC5pdGVtcztcbiAgICAgICAgaXRlbXMuc3BsaWNlKGl0ZW1zLmluZGV4T2YodGhpcyksIDEpO1xuICAgIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvZHJvcGRvd24vaXRlbS5qcyIsIlxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24ob2JqLCBfVmR0LCBibG9ja3MsICRjYWxsZWUpIHtcbl9WZHQgfHwgKF9WZHQgPSBWZHQpO1xub2JqIHx8IChvYmogPSB7fSk7XG5ibG9ja3MgfHwgKGJsb2NrcyA9IHt9KTtcbnZhciBoID0gX1ZkdC5taXNzLmgsIGhjID0gX1ZkdC5taXNzLmhjLCBodSA9IF9WZHQubWlzcy5odSwgd2lkZ2V0cyA9IHRoaXMgJiYgdGhpcy53aWRnZXRzIHx8IHt9LCBfYmxvY2tzID0ge30sIF9fYmxvY2tzID0ge30sXG5fX3UgPSBfVmR0LnV0aWxzLCBleHRlbmQgPSBfX3UuZXh0ZW5kLCBfZSA9IF9fdS5lcnJvciwgX2NsYXNzTmFtZSA9IF9fdS5jbGFzc05hbWUsXG5fX28gPSBfX3UuT3B0aW9ucywgX2dldE1vZGVsID0gX19vLmdldE1vZGVsLCBfc2V0TW9kZWwgPSBfX28uc2V0TW9kZWwsXG5fc2V0Q2hlY2tib3hNb2RlbCA9IF9fdS5zZXRDaGVja2JveE1vZGVsLCBfZGV0ZWN0Q2hlY2tib3hDaGVja2VkID0gX191LmRldGVjdENoZWNrYm94Q2hlY2tlZCxcbl9zZXRTZWxlY3RNb2RlbCA9IF9fdS5zZXRTZWxlY3RNb2RlbCxcbnNlbGYgPSB0aGlzLmRhdGEsICR0aGlzID0gdGhpcywgc2NvcGUgPSBvYmosIEFuaW1hdGUgPSBzZWxmICYmIHNlbGYuQW5pbWF0ZSwgcGFyZW50ID0gKCRjYWxsZWUgfHwge30pLl9zdXBlclxuLyogaW1wb3J0IHtwcm94eUV2ZW50fSBmcm9tICcuLi91dGlscyc7ICovXG5cbmNvbnN0IHtjaGlsZHJlbiwgZGlzYWJsZWQsIGNsYXNzTmFtZSwgX2lzRm9jdXN9ID0gc2VsZi5nZXQoKTtcblxuY29uc3QgY2xhc3NOYW1lT2JqID0ge1xuICAgICdrLWl0ZW0nOiB0cnVlLFxuICAgICdrLWRpc2FibGVkJzogZGlzYWJsZWQsXG4gICAgW2NsYXNzTmFtZV06IGNsYXNzTmFtZSxcbiAgICAnay1ob3Zlcic6IF9pc0ZvY3VzLFxufVxuXG5yZXR1cm4gaCgnZGl2Jywgeydldi1jbGljayc6IGZ1bmN0aW9uKCkge3RyeSB7cmV0dXJuIFtzZWxmLl9vbkNsaWNrIF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcyksICdldi1tb3VzZWVudGVyJzogZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW3NlbGYuX29uTW91c2VFbnRlciBdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpLCAnZXYtbW91c2VsZWF2ZSc6IGZ1bmN0aW9uKCkge3RyeSB7cmV0dXJuIFtzZWxmLl9vbk1vdXNlTGVhdmUgXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKX0sIGZ1bmN0aW9uKCkge3RyeSB7cmV0dXJuIFtjaGlsZHJlbiBdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpLCBfY2xhc3NOYW1lKGZ1bmN0aW9uKCkge3RyeSB7cmV0dXJuIFtjbGFzc05hbWVPYmogXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKSkpXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9kcm9wZG93bi9pdGVtLnZkdCIsImltcG9ydCBJbnRhY3QgZnJvbSAnaW50YWN0JztcbmltcG9ydCB0ZW1wbGF0ZSBmcm9tICcuL21lbnUudmR0JztcbmltcG9ydCBwb3NpdGlvbiBmcm9tICcuLi9tb3ZlV3JhcHBlci9wb3NpdGlvbic7XG5pbXBvcnQge2ZpbmRQYXJlbnRDb21wb25lbnQsIGdldFRyYW5zaXRpb259IGZyb20gJy4uL3V0aWxzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRHJvcGRvd25NZW51IGV4dGVuZHMgSW50YWN0IHtcbiAgICBASW50YWN0LnRlbXBsYXRlKClcbiAgICBzdGF0aWMgdGVtcGxhdGUgPSB0ZW1wbGF0ZTtcblxuICAgIGRlZmF1bHRzKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgc2hvdzogZmFsc2UsXG4gICAgICAgICAgICB0cmlnZ2VyOiAnaG92ZXInLFxuICAgICAgICAgICAgcG9zaXRpb246IHt9LFxuICAgICAgICAgICAgdHJhbnNpdGlvbjogJ3NsaWRlZG93bicsXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgX2luaXQoKSB7XG4gICAgICAgIHRoaXMuc3ViRHJvcGRvd25zID0gW107XG4gICAgICAgIHRoaXMuaXRlbXMgPSBbXTtcbiAgICAgICAgdGhpcy5mb2N1c0luZGV4ID0gLTE7XG4gICAgICAgIHRoaXMubG9ja2VkID0gZmFsc2U7XG4gICAgfVxuXG4gICAgX21vdW50KCkge1xuICAgICAgICBjb25zdCBwYXJlbnQgPSB0aGlzLl9maW5kUGFyZW50RHJvcGRvd25NZW51KCk7XG4gICAgICAgIGlmIChwYXJlbnQpIHBhcmVudC5zdWJEcm9wZG93bnMucHVzaCh0aGlzKTtcblxuICAgICAgICBpZiAodGhpcy5nZXQoJ3Nob3cnKSkge1xuICAgICAgICAgICAgdGhpcy5fYWRkRG9jdW1lbnRFdmVudHMoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIF9maW5kUGFyZW50RHJvcGRvd25NZW51KCkge1xuICAgICAgICByZXR1cm4gZmluZFBhcmVudENvbXBvbmVudChEcm9wZG93bk1lbnUsIHRoaXMsIHRydWUpO1xuICAgIH1cblxuICAgIHNob3coKSB7XG4gICAgICAgIGNsZWFyVGltZW91dCh0aGlzLnRpbWVyKTtcbiAgICAgICAgdGhpcy5zZXQoJ3Nob3cnLCB0cnVlKTtcbiAgICAgICAgY29uc3QgcGFyZW50ID0gdGhpcy5fZmluZFBhcmVudERyb3Bkb3duTWVudSgpO1xuICAgICAgICBpZiAocGFyZW50KSB7XG4gICAgICAgICAgICBwYXJlbnQuc2hvdygpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgaGlkZShpbW1lZGlhdGVseSkge1xuICAgICAgICBpZiAoIWltbWVkaWF0ZWx5KSB7XG4gICAgICAgICAgICB0aGlzLnRpbWVyID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXQoJ3Nob3cnLCBmYWxzZSk7XG4gICAgICAgICAgICB9LCAyMDApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5zZXQoJ3Nob3cnLCBmYWxzZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB0b2dnbGUoKSB7XG4gICAgICAgIHRoaXMuc2V0KCdzaG93JywgIXRoaXMuZ2V0KCdzaG93JykpO1xuICAgIH1cblxuICAgIHBvc2l0aW9uKCkge1xuICAgICAgICBwb3NpdGlvbih0aGlzLnJlZnMubWVudS5lbGVtZW50LCB7XG4gICAgICAgICAgICBteTogJ2NlbnRlciB0b3ArNScsIFxuICAgICAgICAgICAgYXQ6ICdjZW50ZXIgYm90dG9tJywgXG4gICAgICAgICAgICBvZjogdGhpcy5kcm9wZG93bi5lbGVtZW50LFxuICAgICAgICAgICAgdXNpbmc6IChmZWVkYmFjaykgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0KCd0cmFuc2l0aW9uJywgZ2V0VHJhbnNpdGlvbihmZWVkYmFjaykpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIC4uLnRoaXMuZ2V0KCdwb3NpdGlvbicpXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIF9vblNob3coKSB7XG4gICAgICAgIHRoaXMuZm9jdXNJbmRleCA9IC0xO1xuICAgICAgICB0aGlzLl9hZGREb2N1bWVudEV2ZW50cygpO1xuICAgICAgICB0aGlzLnBvc2l0aW9uKCk7XG4gICAgfVxuXG4gICAgX2FkZERvY3VtZW50RXZlbnRzKCkge1xuICAgICAgICBjb25zdCBwYXJlbnQgPSB0aGlzLl9maW5kUGFyZW50RHJvcGRvd25NZW51KCk7XG4gICAgICAgIGlmICghcGFyZW50KSB7XG4gICAgICAgICAgICAvLyBpZiAodGhpcy5nZXQoJ3RyaWdnZXInKSA9PT0gJ2NsaWNrJykge1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5fb25Eb2N1bWVudENsaWNrKTtcbiAgICAgICAgICAgIC8vIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHBhcmVudC5sb2NrZWQgPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIHRoaXMuX29uS2V5ZG93bik7XG4gICAgfVxuXG4gICAgX3JlbW92ZURvY3VtZW50RXZlbnRzKCkge1xuICAgICAgICBjb25zdCBwYXJlbnQgPSB0aGlzLl9maW5kUGFyZW50RHJvcGRvd25NZW51KCk7XG4gICAgICAgIGlmICghcGFyZW50KSB7XG4gICAgICAgICAgICAvLyBpZiAodGhpcy5nZXQoJ3RyaWdnZXInKSA9PT0gJ2NsaWNrJykge1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5fb25Eb2N1bWVudENsaWNrKTtcbiAgICAgICAgICAgIC8vIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHBhcmVudC5sb2NrZWQgPSBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCB0aGlzLl9vbktleWRvd24pO1xuICAgIH1cblxuICAgIF9vbkRvY3VtZW50Q2xpY2soZSkge1xuICAgICAgICBjb25zdCB0YXJnZXQgPSBlLnRhcmdldDtcbiAgICAgICAgY29uc3QgbWVudSA9IHRoaXMucmVmcy5tZW51LmVsZW1lbnQ7XG5cbiAgICAgICAgLy8gaXMgYSBkcm9wZG93biBtZW51XG4gICAgICAgIGlmIChtZW51ID09PSB0YXJnZXQgfHwgbWVudS5jb250YWlucyh0YXJnZXQpKSByZXR1cm47XG4gICAgICAgIC8vIGlzIGNsaWNrIG9uIHN1YiBtZW51XG4gICAgICAgIGlmICh0aGlzLl9pc0NsaWNrU3ViTWVudSh0YXJnZXQsIHRoaXMuc3ViRHJvcGRvd25zKSkgcmV0dXJuO1xuICAgICAgICAvLyBjdXN0b20gZmxhZyB0byBpbmRpY2F0ZSB0aGF0IHRoZSBldmVudCBkb2VzIG5vdCBsZWFkIHRvIGNsb3NlIG1lbnVcbiAgICAgICAgaWYgKGUuX2Ryb3Bkb3duKSByZXR1cm47XG5cbiAgICAgICAgdGhpcy5oaWRlKHRydWUpO1xuICAgIH1cblxuICAgIF9vbktleWRvd24oZSkge1xuICAgICAgICBpZiAodGhpcy5sb2NrZWQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBzd2l0Y2ggKGUua2V5Q29kZSkge1xuICAgICAgICAgICAgLy8gZG93blxuICAgICAgICAgICAgY2FzZSA0MDpcbiAgICAgICAgICAgICAgICB0aGlzLl9mb2N1c05leHRJdGVtKGUpOyBcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIC8vIHVwXG4gICAgICAgICAgICBjYXNlIDM4OlxuICAgICAgICAgICAgICAgIHRoaXMuX2ZvY3VzUHJldkl0ZW0oZSk7IFxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgLy8gcmlnaHRcbiAgICAgICAgICAgIGNhc2UgMzk6XG4gICAgICAgICAgICAgICAgdGhpcy5fc2hvd1N1Yk1lbnUoZSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAvLyBsZWZ0XG4gICAgICAgICAgICBjYXNlIDM3OlxuICAgICAgICAgICAgICAgIHRoaXMuX2hpZGVTdWJNZW51KGUpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgLy8gZW50ZXJcbiAgICAgICAgICAgIGNhc2UgMTM6XG4gICAgICAgICAgICAgICAgdGhpcy5fc2VsZWN0SXRlbShlKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIF9mb2N1c05leHRJdGVtKGUpIHtcbiAgICAgICAgY29uc3QgcGFyZW50ID0gdGhpcy5fZmluZFBhcmVudERyb3Bkb3duTWVudSgpO1xuICAgICAgICBpZiAocGFyZW50ICYmIHRoaXMuZm9jdXNJbmRleCA8IDApIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHRoaXMuZm9jdXNJdGVtQnlJbmRleCh0aGlzLmZvY3VzSW5kZXggKyAxLCAnZG93bicpO1xuICAgIH1cblxuICAgIF9mb2N1c1ByZXZJdGVtKGUpIHtcbiAgICAgICAgY29uc3QgcGFyZW50ID0gdGhpcy5fZmluZFBhcmVudERyb3Bkb3duTWVudSgpO1xuICAgICAgICBpZiAocGFyZW50ICYmIHRoaXMuZm9jdXNJbmRleCA8IDApIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHRoaXMuZm9jdXNJdGVtQnlJbmRleCh0aGlzLmZvY3VzSW5kZXggLSAxLCAndXAnKTtcbiAgICB9XG5cbiAgICBmb2N1c0l0ZW1CeUluZGV4KGluZGV4LCBkaXJlY3Rpb24gPSAnZG93bicpIHtcbiAgICAgICAgY29uc3QgaXRlbXMgPSB0aGlzLml0ZW1zO1xuICAgICAgICBjb25zdCBtYXggPSBpdGVtcy5sZW5ndGggLSAxO1xuICAgICAgICBjb25zdCBvbGRJbmRleCA9IHRoaXMuZm9jdXNJbmRleDtcblxuICAgICAgICBmdW5jdGlvbiBmaXhJbmRleChpbmRleCkge1xuICAgICAgICAgICAgaWYgKGluZGV4ID4gbWF4KSB7XG4gICAgICAgICAgICAgICAgaW5kZXggPSAwO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChpbmRleCA8IDApIHtcbiAgICAgICAgICAgICAgICBpbmRleCA9IG1heDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBpbmRleDtcbiAgICAgICAgfVxuXG4gICAgICAgIGluZGV4ID0gZml4SW5kZXgoaW5kZXgpO1xuXG4gICAgICAgIGxldCBpID0gMDtcbiAgICAgICAgd2hpbGUgKGkgPD0gbWF4ICYmIGl0ZW1zW2luZGV4XSAmJiBpdGVtc1tpbmRleF0uZ2V0KCdkaXNhYmxlZCcpKSB7XG4gICAgICAgICAgICBpbmRleCA9IGZpeEluZGV4KGRpcmVjdGlvbiA9PT0gJ2Rvd24nID8gaW5kZXggKyAxIDogaW5kZXggLSAxKTtcbiAgICAgICAgICAgIGkrKztcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGFsbCBpdGVtcyBhcmUgZGlzYWJsZWRcbiAgICAgICAgaWYgKGkgPiBtYXgpIHJldHVybjtcblxuICAgICAgICB0aGlzLmZvY3VzSW5kZXggPSBpbmRleDtcblxuICAgICAgICBpZiAob2xkSW5kZXggPiAtMSAmJiBpdGVtc1tvbGRJbmRleF0pIHtcbiAgICAgICAgICAgIGl0ZW1zW29sZEluZGV4XS51bkZvY3VzKCk7XG4gICAgICAgIH1cblxuICAgICAgICBpdGVtc1tpbmRleF0uZm9jdXMoKTtcbiAgICB9XG5cbiAgICBfc2VsZWN0SXRlbShlKSB7XG4gICAgICAgIHRoaXMuX3Nob3dTdWJNZW51KGUpO1xuICAgICAgICBpZiAodGhpcy5mb2N1c0luZGV4ID4gLTEpIHtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIHRoaXMuaXRlbXNbdGhpcy5mb2N1c0luZGV4XS5zZWxlY3QoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIF9zaG93U3ViTWVudShlKSB7XG4gICAgICAgIGNvbnN0IHBhcmVudCA9IHRoaXMuX2ZpbmRQYXJlbnREcm9wZG93bk1lbnUoKTtcbiAgICAgICAgaWYgKCFwYXJlbnQgJiYgdGhpcy5mb2N1c0luZGV4IDwgMCkgcmV0dXJuO1xuXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgaWYgKHBhcmVudCAmJiB0aGlzLmZvY3VzSW5kZXggPCAwKSB7XG4gICAgICAgICAgICB0aGlzLmZvY3VzSXRlbUJ5SW5kZXgoMCk7XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5mb2N1c0luZGV4ID4gLTEpIHtcbiAgICAgICAgICAgIHRoaXMuaXRlbXNbdGhpcy5mb2N1c0luZGV4XS5zaG93TWVudUFuZEZvY3VzKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBfaGlkZVN1Yk1lbnUoZSkge1xuICAgICAgICBpZiAodGhpcy5mb2N1c0luZGV4ID4gLTEpIHtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIHRoaXMuaXRlbXNbdGhpcy5mb2N1c0luZGV4XS5oaWRlTWVudSgpO1xuXG4gICAgICAgICAgICBjb25zdCBwYXJlbnQgPSBmaW5kUGFyZW50Q29tcG9uZW50KERyb3Bkb3duTWVudSwgdGhpcywgdHJ1ZSk7XG4gICAgICAgICAgICBpZiAocGFyZW50KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5kcm9wZG93bi5oaWRlKG51bGwsIG51bGwsIHRydWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZm9jdXNJdGVtKGl0ZW0pIHtcbiAgICAgICAgY29uc3QgaW5kZXggPSB0aGlzLml0ZW1zLmluZGV4T2YoaXRlbSk7XG4gICAgICAgIHRoaXMuZm9jdXNJdGVtQnlJbmRleChpbmRleCk7XG4gICAgfVxuXG4gICAgX2lzQ2xpY2tTdWJNZW51KHRhcmdldCwgc3ViTWVudXMpIHtcbiAgICAgICAgbGV0IHJldCA9IGZhbHNlO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHN1Yk1lbnVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBzdWJNZW51ID0gc3ViTWVudXNbaV0ucmVmcy5tZW51O1xuICAgICAgICAgICAgaWYgKHN1Yk1lbnUpIHtcbiAgICAgICAgICAgICAgICBpZiAodGFyZ2V0ID09PSBzdWJNZW51LmVsZW1lbnQgfHwgc3ViTWVudS5lbGVtZW50LmNvbnRhaW5zKHRhcmdldCkpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0ID0gdGhpcy5faXNDbGlja1N1Yk1lbnUodGFyZ2V0LCBzdWJNZW51c1tpXS5zdWJEcm9wZG93bnMpO1xuICAgICAgICAgICAgICAgICAgICBpZiAocmV0KSBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJldDtcbiAgICB9XG5cbiAgICBfZGVzdHJveSgpIHtcbiAgICAgICAgY29uc3QgcGFyZW50ID0gdGhpcy5fZmluZFBhcmVudERyb3Bkb3duTWVudSgpO1xuICAgICAgICBpZiAocGFyZW50KSB7XG4gICAgICAgICAgICBjb25zdCBzdWJEcm9wZG93bnMgPSBwYXJlbnQuc3ViRHJvcGRvd25zO1xuICAgICAgICAgICAgc3ViRHJvcGRvd25zLnNwbGljZShzdWJEcm9wZG93bnMuaW5kZXhPZih0aGlzKSwgMSk7XG4gICAgICAgIH0gXG4gICAgICAgIGNsZWFyVGltZW91dCh0aGlzLnRpbWVyKTtcbiAgICAgICAgdGhpcy5fcmVtb3ZlRG9jdW1lbnRFdmVudHMoKTtcbiAgICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL2Ryb3Bkb3duL21lbnUuanMiLCJpbXBvcnQgTW92ZVdyYXBwZXIgZnJvbSAnLi4vbW92ZVdyYXBwZXInO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24ob2JqLCBfVmR0LCBibG9ja3MsICRjYWxsZWUpIHtcbl9WZHQgfHwgKF9WZHQgPSBWZHQpO1xub2JqIHx8IChvYmogPSB7fSk7XG5ibG9ja3MgfHwgKGJsb2NrcyA9IHt9KTtcbnZhciBoID0gX1ZkdC5taXNzLmgsIGhjID0gX1ZkdC5taXNzLmhjLCBodSA9IF9WZHQubWlzcy5odSwgd2lkZ2V0cyA9IHRoaXMgJiYgdGhpcy53aWRnZXRzIHx8IHt9LCBfYmxvY2tzID0ge30sIF9fYmxvY2tzID0ge30sXG5fX3UgPSBfVmR0LnV0aWxzLCBleHRlbmQgPSBfX3UuZXh0ZW5kLCBfZSA9IF9fdS5lcnJvciwgX2NsYXNzTmFtZSA9IF9fdS5jbGFzc05hbWUsXG5fX28gPSBfX3UuT3B0aW9ucywgX2dldE1vZGVsID0gX19vLmdldE1vZGVsLCBfc2V0TW9kZWwgPSBfX28uc2V0TW9kZWwsXG5fc2V0Q2hlY2tib3hNb2RlbCA9IF9fdS5zZXRDaGVja2JveE1vZGVsLCBfZGV0ZWN0Q2hlY2tib3hDaGVja2VkID0gX191LmRldGVjdENoZWNrYm94Q2hlY2tlZCxcbl9zZXRTZWxlY3RNb2RlbCA9IF9fdS5zZXRTZWxlY3RNb2RlbCxcbnNlbGYgPSB0aGlzLmRhdGEsICR0aGlzID0gdGhpcywgc2NvcGUgPSBvYmosIEFuaW1hdGUgPSBzZWxmICYmIHNlbGYuQW5pbWF0ZSwgcGFyZW50ID0gKCRjYWxsZWUgfHwge30pLl9zdXBlclxuXG5cbmNvbnN0IHtjaGlsZHJlbiwgc2hvdywgdHJpZ2dlciwgY2xhc3NOYW1lLCB0cmFuc2l0aW9ufSA9IHNlbGYuZ2V0KCk7XG5cbmNvbnN0IGV2ZW50cyA9IHt9O1xuLy8gbm8gbWF0dGVyIHdoYXQgdGhlIHRyaWdnZXIgaXMsIHdlIHNob3VsZCBzaG93IG1lbnUgd2hlbiBlbnRlciBpdC5cbi8vIGZvciB0aGlzIGNhc2U6IGhvdmVyIHRyaWdnZXIgbmVzdHMgY2xpY2sgdHJpZ2dlclxuZXZlbnRzWydldi1tb3VzZWVudGVyJ10gPSBzZWxmLnNob3c7XG5pZiAodHJpZ2dlciA9PT0gJ2hvdmVyJykge1xuICAgIGV2ZW50c1snZXYtbW91c2VsZWF2ZSddID0gc2VsZi5oaWRlLmJpbmQoc2VsZiwgZmFsc2UpO1xufVxuXG5yZXR1cm4gaChNb3ZlV3JhcHBlciwgeydfcGFyZW50JzogZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW3NlbGYgXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKSwgJ2NoaWxkcmVuJzogZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW3Nob3cgXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKSA/IGgoQW5pbWF0ZSwgeydjbGFzc05hbWUnOiBfY2xhc3NOYW1lKGZ1bmN0aW9uKCkge3RyeSB7cmV0dXJuIFt7XCJrLWRyb3Bkb3duLW1lbnVcIjogdHJ1ZSwgW2NsYXNzTmFtZV06IGNsYXNzTmFtZX0gXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKSksICdhOnRyYW5zaXRpb24nOiBmdW5jdGlvbigpIHt0cnkge3JldHVybiBbdHJhbnNpdGlvbiBdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpLCAuLi5mdW5jdGlvbigpIHt0cnkge3JldHVybiBbZXZlbnRzIF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcyksICdhOmRlbGF5RGVzdHJveSc6IGZ1bmN0aW9uKCkge3RyeSB7cmV0dXJuIFtmYWxzZSBdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpLCAnZXYtJGRlc3Ryb3llZCc6IGZ1bmN0aW9uKCkge3RyeSB7cmV0dXJuIFtzZWxmLl9yZW1vdmVEb2N1bWVudEV2ZW50cyBdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpLCAnZXYtJG1vdW50ZWQnOiBmdW5jdGlvbigpIHt0cnkge3JldHVybiBbc2VsZi5fb25TaG93IF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcyksICdjaGlsZHJlbic6IGZ1bmN0aW9uKCkge3RyeSB7cmV0dXJuIFtjaGlsZHJlbiBdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpLCAnX2NvbnRleHQnOiAkdGhpc30sIG51bGwsIG51bGwsIG51bGwsIGZ1bmN0aW9uKGkpIHt3aWRnZXRzWydtZW51J10gPSBpfSkgOiB1bmRlZmluZWQsICdfY29udGV4dCc6ICR0aGlzfSwgbnVsbCwgbnVsbCwgbnVsbCwgZnVuY3Rpb24oaSkge3dpZGdldHNbJ3dyYXBwZXInXSA9IGl9KVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvZHJvcGRvd24vbWVudS52ZHQiLCJpbXBvcnQgSW50YWN0IGZyb20gJ2ludGFjdCc7XG5pbXBvcnQgdGVtcGxhdGUgZnJvbSAnLi9pbmRleC52ZHQnO1xuaW1wb3J0ICcuLi8uLi9zdHlsZXMva3BjLnN0eWwnO1xuaW1wb3J0ICcuL2luZGV4LnN0eWwnO1xuaW1wb3J0IHtzZWxlY3RJbnB1dH0gZnJvbSAnLi4vdXRpbHMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbnB1dCBleHRlbmRzIEludGFjdCB7XG4gICAgQEludGFjdC50ZW1wbGF0ZVxuICAgIHN0YXRpYyB0ZW1wbGF0ZSA9IHRlbXBsYXRlO1xuXG4gICAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICByZWFkb25seTogQm9vbGVhbixcbiAgICAgICAgY2xlYXJhYmxlOiBCb29sZWFuLFxuICAgICAgICBkaXNhYmxlZDogQm9vbGVhbixcbiAgICAgICAgZmx1aWQ6IEJvb2xlYW4sXG4gICAgfTtcblxuICAgIGRlZmF1bHRzKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdHlwZTogJ3RleHQnLCAvLyB0ZXh0IHwgdGV4dGFyZWFcbiAgICAgICAgICAgIG5hbWU6IHVuZGVmaW5lZCxcbiAgICAgICAgICAgIHZhbHVlOiB1bmRlZmluZWQsXG4gICAgICAgICAgICBkZWZhdWx0VmFsdWU6IHVuZGVmaW5lZCxcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyOiB1bmRlZmluZWQsXG4gICAgICAgICAgICByZWFkb25seTogZmFsc2UsXG4gICAgICAgICAgICBjbGVhcmFibGU6IGZhbHNlLFxuICAgICAgICAgICAgZGlzYWJsZWQ6IGZhbHNlLFxuICAgICAgICAgICAgc2l6ZTogJ2RlZmF1bHQnLFxuICAgICAgICAgICAgcm93czogMixcbiAgICAgICAgICAgIHNwZWxsY2hlY2s6IGZhbHNlLFxuICAgICAgICAgICAgYXV0b1dpZHRoOiBmYWxzZSxcbiAgICAgICAgICAgIGZsdWlkOiBmYWxzZSxcbiAgICAgICAgICAgIHdpZHRoOiB1bmRlZmluZWQsXG4gICAgICAgICAgICB0YWJpbmRleDogdW5kZWZpbmVkLFxuICAgICAgICB9XG4gICAgfVxuXG4gICAgX2luaXQoKSB7XG4gICAgICAgIHRoaXMub24oJyRjaGFuZ2VkOnZhbHVlJywgdGhpcy5fYWRqdXN0V2lkdGgpO1xuICAgICAgICB0aGlzLm9uKCckY2hhbmdlZDpwbGFjZWhvbGRlcicsIHRoaXMuX2FkanVzdFdpZHRoKTtcbiAgICB9XG5cbiAgICBfbW91bnQoKSB7XG4gICAgICAgIHRoaXMuX2FkanVzdFdpZHRoKCk7XG4gICAgfVxuXG4gICAgX2FkanVzdFdpZHRoKCkge1xuICAgICAgICBpZiAodGhpcy5nZXQoJ2F1dG9XaWR0aCcpKSB7XG4gICAgICAgICAgICBjb25zdCB3aWR0aCA9IHRoaXMucmVmcy5mYWtlLm9mZnNldFdpZHRoIHx8IDE7XG4gICAgICAgICAgICB0aGlzLnJlZnMuaW5wdXQuc3R5bGUud2lkdGggPSBgJHt3aWR0aCArIDF9cHhgO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY2xlYXIoZSkge1xuICAgICAgICB0aGlzLnNldCgndmFsdWUnLCAnJyk7XG4gICAgICAgIHRoaXMuZm9jdXMoKTtcbiAgICAgICAgdGhpcy50cmlnZ2VyKCdjbGVhcicsIGUpO1xuICAgIH1cblxuICAgIHNlbGVjdCgpIHtcbiAgICAgICAgc2VsZWN0SW5wdXQodGhpcy5yZWZzLmlucHV0KTtcbiAgICB9XG5cbiAgICBmb2N1cygpIHtcbiAgICAgICAgdGhpcy5yZWZzLmlucHV0LmZvY3VzKCk7XG4gICAgfVxuXG4gICAgX29uSW5wdXQoZSkge1xuICAgICAgICB0aGlzLnNldCgndmFsdWUnLCBlLnRhcmdldC52YWx1ZSk7XG4gICAgICAgIHRoaXMudHJpZ2dlcignaW5wdXQnLCBlKTtcbiAgICB9XG5cbiAgICBfcHJveHlFdmVudChuYW1lLCBlKSB7XG4gICAgICAgIHRoaXMudHJpZ2dlcihuYW1lLCBlKTtcbiAgICB9XG59XG5cbmV4cG9ydCB7SW5wdXR9O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9pbnB1dC9pbmRleC5qcyIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG4gICAgaWYobW9kdWxlLmhvdCkge1xuICAgICAgLy8gMTUyNzU3OTQ1NDQxOFxuICAgICAgdmFyIGNzc1JlbG9hZCA9IHJlcXVpcmUoXCIhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1ob3QtbG9hZGVyL2hvdE1vZHVsZVJlcGxhY2VtZW50LmpzXCIpKG1vZHVsZS5pZCwge1wiZmlsZU1hcFwiOlwie2ZpbGVOYW1lfVwifSk7XG4gICAgICBtb2R1bGUuaG90LmRpc3Bvc2UoY3NzUmVsb2FkKTtcbiAgICAgIG1vZHVsZS5ob3QuYWNjZXB0KHVuZGVmaW5lZCwgY3NzUmVsb2FkKTtcbiAgICB9XG4gIFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vY29tcG9uZW50cy9pbnB1dC9pbmRleC5zdHlsXG4vLyBtb2R1bGUgaWQgPSAuL2NvbXBvbmVudHMvaW5wdXQvaW5kZXguc3R5bFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIiwiaW1wb3J0IHthZGRTdHlsZX0gZnJvbSAnLi4vdXRpbHMnO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24ob2JqLCBfVmR0LCBibG9ja3MsICRjYWxsZWUpIHtcbl9WZHQgfHwgKF9WZHQgPSBWZHQpO1xub2JqIHx8IChvYmogPSB7fSk7XG5ibG9ja3MgfHwgKGJsb2NrcyA9IHt9KTtcbnZhciBoID0gX1ZkdC5taXNzLmgsIGhjID0gX1ZkdC5taXNzLmhjLCBodSA9IF9WZHQubWlzcy5odSwgd2lkZ2V0cyA9IHRoaXMgJiYgdGhpcy53aWRnZXRzIHx8IHt9LCBfYmxvY2tzID0ge30sIF9fYmxvY2tzID0ge30sXG5fX3UgPSBfVmR0LnV0aWxzLCBleHRlbmQgPSBfX3UuZXh0ZW5kLCBfZSA9IF9fdS5lcnJvciwgX2NsYXNzTmFtZSA9IF9fdS5jbGFzc05hbWUsXG5fX28gPSBfX3UuT3B0aW9ucywgX2dldE1vZGVsID0gX19vLmdldE1vZGVsLCBfc2V0TW9kZWwgPSBfX28uc2V0TW9kZWwsXG5fc2V0Q2hlY2tib3hNb2RlbCA9IF9fdS5zZXRDaGVja2JveE1vZGVsLCBfZGV0ZWN0Q2hlY2tib3hDaGVja2VkID0gX191LmRldGVjdENoZWNrYm94Q2hlY2tlZCxcbl9zZXRTZWxlY3RNb2RlbCA9IF9fdS5zZXRTZWxlY3RNb2RlbCxcbnNlbGYgPSB0aGlzLmRhdGEsICR0aGlzID0gdGhpcywgc2NvcGUgPSBvYmosIEFuaW1hdGUgPSBzZWxmICYmIHNlbGYuQW5pbWF0ZSwgcGFyZW50ID0gKCRjYWxsZWUgfHwge30pLl9zdXBlclxuXG5cbmNvbnN0IHtcbiAgICB0eXBlLCBuYW1lLCB2YWx1ZSwgcGxhY2Vob2xkZXIsIHRhYmluZGV4LFxuICAgIHJlYWRvbmx5LCBjbGVhcmFibGUsIGRpc2FibGVkLCBzaXplLCBcbiAgICByb3dzLCBzcGVsbGNoZWNrLCBkZWZhdWx0VmFsdWUsIHN0eWxlLFxuICAgIGNsYXNzTmFtZSwgYXV0b1dpZHRoLCBmbHVpZCwgd2lkdGgsXG59ID0gc2VsZi5nZXQoKTtcblxuY29uc3QgY2xhc3NOYW1lT2JqID0ge1xuICAgICdrLWlucHV0JzogdHJ1ZSxcbiAgICBbYGstJHtzaXplfWBdOiBzaXplICE9PSAnZGVmYXVsdCcsXG4gICAgJ2stZ3JvdXAnOiBibG9ja3MucHJlcGVuZCB8fCBibG9ja3MuYXBwZW5kLFxuICAgICdrLWRpc2FibGVkJzogZGlzYWJsZWQsXG4gICAgJ2std2l0aC1wcmVmaXgnOiBibG9ja3MucHJlZml4LFxuICAgICdrLXdpdGgtc3VmZml4JzogYmxvY2tzLnN1ZmZpeCxcbiAgICAnay1jbGVhcmFibGUnOiBjbGVhcmFibGUsXG4gICAgJ2stYXV0by13aWR0aCc6IGF1dG9XaWR0aCxcbiAgICAnay1mbHVpZCc6IGZsdWlkLFxuICAgIFtjbGFzc05hbWVdOiBjbGFzc05hbWUsXG59XG5cbmNvbnN0IGV2ZW50cyA9IFtcbiAgICAna2V5ZG93bicsICdrZXl1cCcsICdjaGFuZ2UnLFxuICAgICdrZXlwcmVzcycsICdmb2N1cycsICdibHVyJywgLyogJ2lucHV0JyAqL1xuXS5yZWR1Y2UoKG1lbW8sIG5hbWUpID0+IHtcbiAgICBtZW1vW2Bldi0ke25hbWV9YF0gPSBzZWxmLl9wcm94eUV2ZW50LmJpbmQoc2VsZiwgbmFtZSk7XG4gICAgcmV0dXJuIG1lbW87XG59LCB7fSk7XG5cbmNvbnN0IHdyYXBwZXJFdmVudHMgPSBbXG4gICAgJ2NsaWNrJywgJ21vdXNlZW50ZXInLCAnbW91c2VsZWF2ZSdcbl0ucmVkdWNlKChtZW1vLCBuYW1lKSA9PiB7XG4gICAgbWVtb1tgZXYtJHtuYW1lfWBdID0gc2VsZi5fcHJveHlFdmVudC5iaW5kKHNlbGYsIG5hbWUpO1xuICAgIHJldHVybiBtZW1vO1xufSwge30pO1xuXG5yZXR1cm4gaCgnZGl2JywgeydzdHlsZSc6IGZ1bmN0aW9uKCkge3RyeSB7cmV0dXJuIFt3aWR0aCAhPSBudWxsID8gYWRkU3R5bGUoc3R5bGUsIHt3aWR0aDogYCR7d2lkdGh9cHhgfSkgOiBzdHlsZSBdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpLCAuLi5mdW5jdGlvbigpIHt0cnkge3JldHVybiBbd3JhcHBlckV2ZW50cyBdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpfSwgW2Z1bmN0aW9uKCkge3RyeSB7cmV0dXJuIFtibG9ja3MucHJlcGVuZCBdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpID8gaCgnZGl2JywgbnVsbCwgKF9ibG9ja3NbXCJwcmVwZW5kXCJdID0gZnVuY3Rpb24ocGFyZW50KSB7cmV0dXJuIG51bGw7fSkgJiYgKF9fYmxvY2tzW1wicHJlcGVuZFwiXSA9IGZ1bmN0aW9uKHBhcmVudCkge1xudmFyIHNlbGYgPSB0aGlzO1xucmV0dXJuIGJsb2Nrc1tcInByZXBlbmRcIl0gPyBibG9ja3NbXCJwcmVwZW5kXCJdLmNhbGwodGhpcywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gX2Jsb2Nrc1tcInByZXBlbmRcIl0uY2FsbChzZWxmLCBwYXJlbnQpO1xufSkgOiBfYmxvY2tzW1wicHJlcGVuZFwiXS5jYWxsKHRoaXMsIHBhcmVudCk7XG59KSAmJiBfX2Jsb2Nrc1tcInByZXBlbmRcIl0uY2FsbCh0aGlzKSwgJ2stcHJlcGVuZCcpIDogdW5kZWZpbmVkLCBoKCdkaXYnLCBudWxsLCBbZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW2Jsb2Nrcy5wcmVmaXggXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKSA/IGgoJ2RpdicsIG51bGwsIChfYmxvY2tzW1wicHJlZml4XCJdID0gZnVuY3Rpb24ocGFyZW50KSB7cmV0dXJuIG51bGw7fSkgJiYgKF9fYmxvY2tzW1wicHJlZml4XCJdID0gZnVuY3Rpb24ocGFyZW50KSB7XG52YXIgc2VsZiA9IHRoaXM7XG5yZXR1cm4gYmxvY2tzW1wicHJlZml4XCJdID8gYmxvY2tzW1wicHJlZml4XCJdLmNhbGwodGhpcywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gX2Jsb2Nrc1tcInByZWZpeFwiXS5jYWxsKHNlbGYsIHBhcmVudCk7XG59KSA6IF9ibG9ja3NbXCJwcmVmaXhcIl0uY2FsbCh0aGlzLCBwYXJlbnQpO1xufSkgJiYgX19ibG9ja3NbXCJwcmVmaXhcIl0uY2FsbCh0aGlzKSwgJ2stcHJlZml4JykgOiB1bmRlZmluZWQsIGZ1bmN0aW9uKCkge3RyeSB7cmV0dXJuIFt0eXBlICE9PSAndGV4dGFyZWEnIF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcykgPyBoKCdpbnB1dCcsIHsndHlwZSc6IGZ1bmN0aW9uKCkge3RyeSB7cmV0dXJuIFt0eXBlIF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcyksICduYW1lJzogZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW25hbWUgXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKSwgJ3ZhbHVlJzogZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW3ZhbHVlIF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcyksICdldi1pbnB1dCc6IGZ1bmN0aW9uKCkge3RyeSB7cmV0dXJuIFtzZWxmLl9vbklucHV0IF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcyksICdkZWZhdWx0VmFsdWUnOiBmdW5jdGlvbigpIHt0cnkge3JldHVybiBbZGVmYXVsdFZhbHVlIF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcyksICdyZWFkT25seSc6IGZ1bmN0aW9uKCkge3RyeSB7cmV0dXJuIFtyZWFkb25seSBdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpLCAncGxhY2Vob2xkZXInOiBmdW5jdGlvbigpIHt0cnkge3JldHVybiBbcGxhY2Vob2xkZXIgXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKSwgJ2Rpc2FibGVkJzogZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW2Rpc2FibGVkIF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcyksICd0YWJpbmRleCc6IGZ1bmN0aW9uKCkge3RyeSB7cmV0dXJuIFt0YWJpbmRleCBdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpLCAuLi5mdW5jdGlvbigpIHt0cnkge3JldHVybiBbZXZlbnRzIF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcyl9LCBudWxsLCAnay1pbm5lcicsIG51bGwsIGZ1bmN0aW9uKGkpIHt3aWRnZXRzWydpbnB1dCddID0gaX0pIDogaCgndGV4dGFyZWEnLCB7J3ZhbHVlJzogZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW3ZhbHVlIF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcyksICdldi1pbnB1dCc6IGZ1bmN0aW9uKCkge3RyeSB7cmV0dXJuIFtzZWxmLl9vbklucHV0IF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcyksICdkZWZhdWx0VmFsdWUnOiBmdW5jdGlvbigpIHt0cnkge3JldHVybiBbZGVmYXVsdFZhbHVlIF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcyksICduYW1lJzogZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW25hbWUgXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKSwgJ3JlYWRPbmx5JzogZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW3JlYWRvbmx5IF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcyksICdwbGFjZWhvbGRlcic6IGZ1bmN0aW9uKCkge3RyeSB7cmV0dXJuIFtwbGFjZWhvbGRlciBdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpLCAnZGlzYWJsZWQnOiBmdW5jdGlvbigpIHt0cnkge3JldHVybiBbZGlzYWJsZWQgXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKSwgJ3Jvd3MnOiBmdW5jdGlvbigpIHt0cnkge3JldHVybiBbcm93cyBdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpLCAnc3BlbGxjaGVjayc6IGZ1bmN0aW9uKCkge3RyeSB7cmV0dXJuIFtzcGVsbGNoZWNrIF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcyksICd0YWJpbmRleCc6IGZ1bmN0aW9uKCkge3RyeSB7cmV0dXJuIFt0YWJpbmRleCBdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpLCAuLi5mdW5jdGlvbigpIHt0cnkge3JldHVybiBbZXZlbnRzIF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcyl9LCBudWxsLCAnay1pbm5lciBrLXRleHRhcmVhJywgbnVsbCwgZnVuY3Rpb24oaSkge3dpZGdldHNbJ2lucHV0J10gPSBpfSksIGZ1bmN0aW9uKCkge3RyeSB7cmV0dXJuIFtibG9ja3Muc3VmZml4IHx8IGNsZWFyYWJsZSBdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpID8gaCgnZGl2JywgbnVsbCwgW2Z1bmN0aW9uKCkge3RyeSB7cmV0dXJuIFtjbGVhcmFibGUgXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKSA/IGgoJ2knLCB7J2V2LWNsaWNrJzogZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW3NlbGYuY2xlYXIgXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKX0sIG51bGwsIF9jbGFzc05hbWUoZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW3tcbiAgICAgICAgICAgICAgICAgICAgXCJrLWNsZWFyIGstaWNvbiBpb24taW9zLWNsb3NlXCI6IHRydWUsIFxuICAgICAgICAgICAgICAgICAgICBcImstc2hvd1wiOiB2YWx1ZSxcbiAgICAgICAgICAgICAgICB9IF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcykpKSA6IHVuZGVmaW5lZCwgKF9ibG9ja3NbXCJzdWZmaXhcIl0gPSBmdW5jdGlvbihwYXJlbnQpIHtyZXR1cm4gbnVsbDt9KSAmJiAoX19ibG9ja3NbXCJzdWZmaXhcIl0gPSBmdW5jdGlvbihwYXJlbnQpIHtcbnZhciBzZWxmID0gdGhpcztcbnJldHVybiBibG9ja3NbXCJzdWZmaXhcIl0gPyBibG9ja3NbXCJzdWZmaXhcIl0uY2FsbCh0aGlzLCBmdW5jdGlvbigpIHtcbnJldHVybiBfYmxvY2tzW1wic3VmZml4XCJdLmNhbGwoc2VsZiwgcGFyZW50KTtcbn0pIDogX2Jsb2Nrc1tcInN1ZmZpeFwiXS5jYWxsKHRoaXMsIHBhcmVudCk7XG59KSAmJiBfX2Jsb2Nrc1tcInN1ZmZpeFwiXS5jYWxsKHRoaXMpXSwgJ2stc3VmZml4JykgOiB1bmRlZmluZWQsIGZ1bmN0aW9uKCkge3RyeSB7cmV0dXJuIFthdXRvV2lkdGggXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKSA/IGgoJ2RpdicsIG51bGwsIGZ1bmN0aW9uKCkge3RyeSB7cmV0dXJuIFt2YWx1ZSA9PSBudWxsIHx8IHZhbHVlID09PSAnJyA/IHBsYWNlaG9sZGVyIDogdmFsdWUgXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKSwgJ2stZmFrZScsIG51bGwsIGZ1bmN0aW9uKGkpIHt3aWRnZXRzWydmYWtlJ10gPSBpfSkgOiB1bmRlZmluZWRdLCAnay13cmFwcGVyJyksIGZ1bmN0aW9uKCkge3RyeSB7cmV0dXJuIFtibG9ja3MuYXBwZW5kIF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcykgPyBoKCdkaXYnLCBudWxsLCAoX2Jsb2Nrc1tcImFwcGVuZFwiXSA9IGZ1bmN0aW9uKHBhcmVudCkge3JldHVybiBudWxsO30pICYmIChfX2Jsb2Nrc1tcImFwcGVuZFwiXSA9IGZ1bmN0aW9uKHBhcmVudCkge1xudmFyIHNlbGYgPSB0aGlzO1xucmV0dXJuIGJsb2Nrc1tcImFwcGVuZFwiXSA/IGJsb2Nrc1tcImFwcGVuZFwiXS5jYWxsKHRoaXMsIGZ1bmN0aW9uKCkge1xucmV0dXJuIF9ibG9ja3NbXCJhcHBlbmRcIl0uY2FsbChzZWxmLCBwYXJlbnQpO1xufSkgOiBfYmxvY2tzW1wiYXBwZW5kXCJdLmNhbGwodGhpcywgcGFyZW50KTtcbn0pICYmIF9fYmxvY2tzW1wiYXBwZW5kXCJdLmNhbGwodGhpcyksICdrLWFwcGVuZCcpIDogdW5kZWZpbmVkXSwgX2NsYXNzTmFtZShmdW5jdGlvbigpIHt0cnkge3JldHVybiBbY2xhc3NOYW1lT2JqIF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcykpKVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvaW5wdXQvaW5kZXgudmR0IiwiaW1wb3J0IEludGFjdCBmcm9tICdpbnRhY3QnO1xuaW1wb3J0IHRlbXBsYXRlIGZyb20gJy4vaW5kZXgudmR0JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGluayBleHRlbmRzIEludGFjdCB7XG4gICAgc3RhdGljIGhpc3RvcnkgPSB1bmRlZmluZWQ7XG5cbiAgICBASW50YWN0LnRlbXBsYXRlKClcbiAgICBnZXQgdGVtcGxhdGUoKSB7IHJldHVybiB0ZW1wbGF0ZTsgfVxuXG4gICAgZGVmYXVsdHMoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBocmVmOiB1bmRlZmluZWQsXG4gICAgICAgICAgICBuYW1lOiB1bmRlZmluZWQsXG4gICAgICAgICAgICBpc1JlcGxhY2U6IGZhbHNlLFxuICAgICAgICB9XG4gICAgfVxuXG4gICAgdG8oZSkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHRoaXMudHJpZ2dlcignY2xpY2snLCBlKTtcbiAgICAgICAgY29uc3QgaHJlZiA9IHRoaXMuZ2V0KCdocmVmJyk7XG4gICAgICAgIGNvbnN0IG5hbWUgPSB0aGlzLmdldCgnbmFtZScpO1xuICAgICAgICBjb25zdCBoaXN0b3J5ID0gTGluay5oaXN0b3J5O1xuICAgICAgICBsZXQgdXJsO1xuICAgICAgICBpZiAoaHJlZiAhPSBudWxsKSB7XG4gICAgICAgICAgICB1cmwgPSBocmVmO1xuICAgICAgICB9IGVsc2UgaWYgKG5hbWUgIT0gbnVsbCkge1xuICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkobmFtZSkpIHtcbiAgICAgICAgICAgICAgICB1cmwgPSBMaW5rLnVybC5hcHBseShMaW5rLnVybCwgbmFtZSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHVybCA9IExpbmsudXJsKG5hbWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmICh1cmwpIHtcbiAgICAgICAgICAgIC8vIGlmIHRoZSBocmVmIGlzIGVxdWFsIHRvIHRoZSBjdXJyZW50IGhyZWYsIHRoZW4gZG8gbm90aGluZ1xuICAgICAgICAgICAgY29uc3Qge3BhdGhuYW1lLCBzZWFyY2h9ID0gaGlzdG9yeS5sb2NhdGlvbjtcbiAgICAgICAgICAgIGlmIChwYXRobmFtZSArIHNlYXJjaCA9PT0gdXJsKSByZXR1cm47XG5cbiAgICAgICAgICAgIGlmICh0aGlzLmdldCgnaXNSZXBsYWNlJykpIHtcbiAgICAgICAgICAgICAgICBoaXN0b3J5LnJlcGxhY2UodXJsKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgaGlzdG9yeS5wdXNoKHVybCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmV4cG9ydCB7TGlua307XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL2xpbmsvaW5kZXguanMiLCJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKG9iaiwgX1ZkdCwgYmxvY2tzLCAkY2FsbGVlKSB7XG5fVmR0IHx8IChfVmR0ID0gVmR0KTtcbm9iaiB8fCAob2JqID0ge30pO1xuYmxvY2tzIHx8IChibG9ja3MgPSB7fSk7XG52YXIgaCA9IF9WZHQubWlzcy5oLCBoYyA9IF9WZHQubWlzcy5oYywgaHUgPSBfVmR0Lm1pc3MuaHUsIHdpZGdldHMgPSB0aGlzICYmIHRoaXMud2lkZ2V0cyB8fCB7fSwgX2Jsb2NrcyA9IHt9LCBfX2Jsb2NrcyA9IHt9LFxuX191ID0gX1ZkdC51dGlscywgZXh0ZW5kID0gX191LmV4dGVuZCwgX2UgPSBfX3UuZXJyb3IsIF9jbGFzc05hbWUgPSBfX3UuY2xhc3NOYW1lLFxuX19vID0gX191Lk9wdGlvbnMsIF9nZXRNb2RlbCA9IF9fby5nZXRNb2RlbCwgX3NldE1vZGVsID0gX19vLnNldE1vZGVsLFxuX3NldENoZWNrYm94TW9kZWwgPSBfX3Uuc2V0Q2hlY2tib3hNb2RlbCwgX2RldGVjdENoZWNrYm94Q2hlY2tlZCA9IF9fdS5kZXRlY3RDaGVja2JveENoZWNrZWQsXG5fc2V0U2VsZWN0TW9kZWwgPSBfX3Uuc2V0U2VsZWN0TW9kZWwsXG5zZWxmID0gdGhpcy5kYXRhLCAkdGhpcyA9IHRoaXMsIHNjb3BlID0gb2JqLCBBbmltYXRlID0gc2VsZiAmJiBzZWxmLkFuaW1hdGUsIHBhcmVudCA9ICgkY2FsbGVlIHx8IHt9KS5fc3VwZXJcbmNvbnN0IHtuYW1lLCBpc1JlcGxhY2UsIC4uLnJlc3R9ID0gc2VsZi5nZXQoKTtcbnJldHVybiBoKCdhJywgey4uLmZ1bmN0aW9uKCkge3RyeSB7cmV0dXJuIFtyZXN0IF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcyksICdldi1jbGljayc6IGZ1bmN0aW9uKCkge3RyeSB7cmV0dXJuIFtzZWxmLnRvIF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcyl9LCBmdW5jdGlvbigpIHt0cnkge3JldHVybiBbc2VsZi5nZXQoJ2NoaWxkcmVuJykgXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKSlcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL2xpbmsvaW5kZXgudmR0IiwiaW1wb3J0IEludGFjdCBmcm9tICdpbnRhY3QnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNb3ZlV3JhcHBlciBleHRlbmRzIEludGFjdCB7XG4gICAgdGVtcGxhdGUoc2VsZiwgVmR0KSB7XG4gICAgICAgIGNvbnN0IGNoaWxkcmVuID0gc2VsZi5nZXQoJ2NoaWxkcmVuJyk7XG4gICAgICAgIHJldHVybiBjaGlsZHJlbiB8fCBWZHQubWlzcy5oYygnTW92ZVdyYXBwZXInKTtcbiAgICB9XG5cbiAgICBkZWZhdWx0cygpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGF1dG9EZXN0cm95OiB0cnVlLCBcbiAgICAgICAgICAgIGNvbnRhaW5lcjogdW5kZWZpbmVkLFxuICAgICAgICB9XG4gICAgfVxuXG4gICAgaW5pdCguLi5hcmdzKSB7XG4gICAgICAgIHN1cGVyLmluaXQoLi4uYXJncyk7XG4gICAgICAgIHJldHVybiB0aGlzLnBsYWNlaG9sZGVyID0gZG9jdW1lbnQuY3JlYXRlQ29tbWVudChcInBsYWNlaG9sZGVyXCIpO1xuICAgIH1cblxuICAgIGh5ZHJhdGUoLi4uYXJncykge1xuICAgICAgICBzdXBlci5oeWRyYXRlKC4uLmFyZ3MpO1xuICAgICAgICByZXR1cm4gdGhpcy5wbGFjZWhvbGRlciA9IGRvY3VtZW50LmNyZWF0ZUNvbW1lbnQoJ3BsYWNlaG9sZGVyJyk7XG4gICAgfVxuXG4gICAgdXBkYXRlKGxhc3RWTm9kZSwgbmV4dFZOb2RlKSB7XG4gICAgICAgIHN1cGVyLnVwZGF0ZShsYXN0Vk5vZGUsIG5leHRWTm9kZSk7XG4gICAgICAgIHJldHVybiB0aGlzLnBsYWNlaG9sZGVyO1xuICAgIH1cblxuICAgIGRlc3Ryb3koLi4uYXJncykge1xuICAgICAgICBpZiAodGhpcy5nZXQoJ2F1dG9EZXN0cm95JykpIHtcbiAgICAgICAgICAgIHRoaXMuXyRkZXN0cm95KC4uLmFyZ3MpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgXG4gICAgLyoqXG4gICAgICogQGJyaWVmIG92ZXJyaWRlIHN1cGVyIGRlc3Ryb3kgXG4gICAgICpcbiAgICAgKiBNb3ZlV3JhcGVyIGNvbXBvbmVudCBoYXMgY2hhbmdlZCB0aGUgZG9tIHN0cnVjdGlvbi5cbiAgICAgKiBJdCBpcyBhbHdheXMgdGhlIHRvcCBsZXZlbCBkb20sIHNvIHdlIHNob3VsZCBcbiAgICAgKiByZW1vdmUgaXQgZnJvbSBwYXJlbnQgZG9tLiBCeSBwYXNzaW5nIHRoZSBjb250YWluZXJcbiAgICAgKiB0byByZW1vdmUgZnVuY3Rpb24gY2FuIGRvIHRoaXMuIFdlIGNhbid0IHJlbW92ZSBpdFxuICAgICAqIGRpcmVjdGx5IGJ5IGNhbGxpbmcgcmVtb3ZlQ2hpbGQgbWV0aG9kLCBiZWFjYXVzZSBpdFxuICAgICAqIG1heWJlIGhhdmUgbGVhdmUgYW5pbWF0aW9uLlxuICAgICAqXG4gICAgICogQHBhcmFtIC4uLmFyZ3NcbiAgICAgKi9cbiAgICBfJGRlc3Ryb3kobGFzdFZOb2RlLCBuZXh0Vk5vZGUpIHtcbiAgICAgICAgLy8gaWYgKHRoaXMuZGVzdHJveWVkKSB7XG4gICAgICAgICAgICAvLyByZXR1cm4gY29uc29sZS53YXJuKCdkZXN0cm95ZWQgbXVsdGlwbGUgdGltZXMnKTtcbiAgICAgICAgLy8gfVxuICAgICAgICBpZiAodGhpcy5yZW5kZXJlZCAmJiBcbiAgICAgICAgICAgIChcbiAgICAgICAgICAgICAgICAhbmV4dFZOb2RlIHx8XG4gICAgICAgICAgICAgICAgIShuZXh0Vk5vZGUudHlwZSAmIEludGFjdC5WZHQubWlzcy5UeXBlcy5Db21wb25lbnRDbGFzc09ySW5zdGFuY2UpIHx8XG4gICAgICAgICAgICAgICAgbmV4dFZOb2RlLmtleSAhPT0gbGFzdFZOb2RlLmtleVxuICAgICAgICAgICAgKVxuICAgICAgICApIHtcbiAgICAgICAgICAgIEludGFjdC5WZHQubWlzcy5yZW1vdmUodGhpcy52ZHQudk5vZGUsIHRoaXMuY29udGFpbmVyKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9kZXN0cm95KGxhc3RWTm9kZSwgbmV4dFZOb2RlKTtcbiAgICAgICAgdGhpcy5kZXN0cm95ZWQgPSB0cnVlO1xuICAgICAgICB0aGlzLnRyaWdnZXIoJyRkZXN0cm95ZWQnLCB0aGlzKTtcbiAgICAgICAgdGhpcy5vZmYoKTtcbiAgICB9XG5cbiAgICBfbW91bnQobGFzdFZOb2RlLCBuZXh0Vk5vZGUpIHtcbiAgICAgICAgY29uc3QgY29udGFpbmVyID0gdGhpcy5nZXQoJ2NvbnRhaW5lcicpO1xuICAgICAgICBpZiAoY29udGFpbmVyKSB7XG4gICAgICAgICAgICB0aGlzLmNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoY29udGFpbmVyKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIXRoaXMuY29udGFpbmVyKSB7XG4gICAgICAgICAgICB0aGlzLmNvbnRhaW5lciA9IGRvY3VtZW50LmJvZHk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5lbGVtZW50KTtcbiAgICB9XG59XG5cbmV4cG9ydCB7TW92ZVdyYXBwZXJ9O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9tb3ZlV3JhcHBlci9pbmRleC5qcyIsImNvbnN0IG1heCA9IE1hdGgubWF4O1xuY29uc3QgYWJzID0gTWF0aC5hYnM7XG5jb25zdCBySG9yaXpvbnRhbCA9IC9sZWZ0fGNlbnRlcnxyaWdodC87XG5jb25zdCByVmVydGljYWwgPSAvdG9wfGNlbnRlcnxib3R0b20vO1xuY29uc3Qgck9mZnNldCA9IC9bXFwrXFwtXVxcZCsoXFwuW1xcZF0rKT8lPy87XG5jb25zdCByUG9zaXRpb24gPSAvXlxcdysvO1xuY29uc3QgclBlcmNlbnQgPSAvJSQvO1xuXG5mdW5jdGlvbiBnZXREaW1lbnNpb25zKGVsZW0pIHtcbiAgICBpZiAoZWxlbS5ub2RlVHlwZSA9PT0gOSkge1xuICAgICAgICAvLyBkb2N1bWVudFxuICAgICAgICBjb25zdCB7d2lkdGgsIGhlaWdodH0gPSBnZXREb2N1bWVudE9yV2luZG93UmVjdChlbGVtKTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHdpZHRoLFxuICAgICAgICAgICAgaGVpZ2h0LFxuICAgICAgICAgICAgb2Zmc2V0OiB7XG4gICAgICAgICAgICAgICAgdG9wOiAwLFxuICAgICAgICAgICAgICAgIGxlZnQ6IDBcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICB9IGVsc2UgaWYgKGVsZW0gPT09IHdpbmRvdykge1xuICAgICAgICBjb25zdCB7d2lkdGgsIGhlaWdodH0gPSBnZXREb2N1bWVudE9yV2luZG93UmVjdChlbGVtKTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHdpZHRoLFxuICAgICAgICAgICAgaGVpZ2h0LFxuICAgICAgICAgICAgb2Zmc2V0OiB7XG4gICAgICAgICAgICAgICAgdG9wOiBlbGVtLnBhZ2VZT2Zmc2V0LFxuICAgICAgICAgICAgICAgIGxlZnQ6IGVsZW0ucGFnZVhPZmZzZXQsXG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgfSBlbHNlIGlmIChlbGVtLnByZXZlbnREZWZhdWx0KSB7XG4gICAgICAgIC8vIGV2ZW50XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB3aWR0aDogMCxcbiAgICAgICAgICAgIGhlaWdodDogMCxcbiAgICAgICAgICAgIG9mZnNldDoge1xuICAgICAgICAgICAgICAgIHRvcDogZWxlbS5wYWdlWSxcbiAgICAgICAgICAgICAgICBsZWZ0OiBlbGVtLnBhZ2VYXG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgfVxuICAgIC8vIGRvbVxuICAgIGNvbnN0IHJlY3QgPSBlbGVtLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIHJldHVybiB7XG4gICAgICAgIHdpZHRoOiByZWN0LndpZHRoLFxuICAgICAgICBoZWlnaHQ6IHJlY3QuaGVpZ2h0LFxuICAgICAgICBvZmZzZXQ6IHtcbiAgICAgICAgICAgIHRvcDogcmVjdC50b3AgKyB3aW5kb3cucGFnZVlPZmZzZXQsXG4gICAgICAgICAgICBsZWZ0OiByZWN0LmxlZnQgKyB3aW5kb3cucGFnZVhPZmZzZXRcbiAgICAgICAgfVxuICAgIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXREb2N1bWVudE9yV2luZG93UmVjdChlbGVtKSB7XG4gICAgaWYgKGVsZW0gPT09IHdpbmRvdykge1xuICAgICAgICBjb25zdCBkID0gZWxlbS5kb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB3aWR0aDogZC5jbGllbnRXaWR0aCxcbiAgICAgICAgICAgIGhlaWdodDogZC5jbGllbnRIZWlnaHQsXG4gICAgICAgIH07XG4gICAgfVxuICAgIGNvbnN0IGQgPSBlbGVtLmRvY3VtZW50RWxlbWVudDtcbiAgICBjb25zdCBiID0gZWxlbS5ib2R5O1xuICAgIHJldHVybiB7XG4gICAgICAgIHdpZHRoOiBtYXgoXG4gICAgICAgICAgICBiLnNjcm9sbFdpZHRoLCBkLnNjcm9sbFdpZHRoLFxuICAgICAgICAgICAgYi5vZmZzZXRXaWR0aCwgZC5vZmZzZXRXaWR0aCxcbiAgICAgICAgICAgIGQuY2xpZW50V2lkdGhcbiAgICAgICAgKSxcbiAgICAgICAgaGVpZ2h0OiBtYXgoXG4gICAgICAgICAgICBiLnNjcm9sbEhlaWdodCwgZC5zY3JvbGxIZWlnaHQsXG4gICAgICAgICAgICBiLm9mZnNldEhlaWdodCwgZC5vZmZzZXRIZWlnaHQsXG4gICAgICAgICAgICBkLmNsaWVudEhlaWdodFxuICAgICAgICApXG4gICAgfTtcbn1cblxuZnVuY3Rpb24gZ2V0T2Zmc2V0cyhvZmZzZXRzLCB3aWR0aCwgaGVpZ2h0KSB7XG4gICAgcmV0dXJuIFtcbiAgICAgICAgcGFyc2VGbG9hdChvZmZzZXRzWzBdKSAqIChyUGVyY2VudC50ZXN0KG9mZnNldHNbMF0pID8gd2lkdGggLyAxMDAgOiAxKSxcbiAgICAgICAgcGFyc2VGbG9hdChvZmZzZXRzWzFdKSAqIChyUGVyY2VudC50ZXN0KG9mZnNldHNbMV0pID8gaGVpZ2h0IC8gMTAwIDogMSksXG4gICAgXTtcbn1cblxuLy8gcmVmZXJlbmNlOiBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzEzMzgyNTE2L2dldHRpbmctc2Nyb2xsLWJhci13aWR0aC11c2luZy1qYXZhc2NyaXB0XG5sZXQgX3Njcm9sbEJhcldpZHRoO1xuZXhwb3J0IGZ1bmN0aW9uIHNjcm9sbGJhcldpZHRoKCkge1xuICAgIGlmIChfc2Nyb2xsQmFyV2lkdGggIT09IHVuZGVmaW5lZCkge1xuICAgICAgICByZXR1cm4gX3Njcm9sbEJhcldpZHRoO1xuICAgIH1cblxuICAgIHZhciBvdXRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgb3V0ZXIuc3R5bGUudmlzaWJpbGl0eSA9IFwiaGlkZGVuXCI7XG4gICAgb3V0ZXIuc3R5bGUud2lkdGggPSBcIjEwMHB4XCI7XG4gICAgb3V0ZXIuc3R5bGUubXNPdmVyZmxvd1N0eWxlID0gXCJzY3JvbGxiYXJcIjsgLy8gbmVlZGVkIGZvciBXaW5KUyBhcHBzXG5cbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKG91dGVyKTtcblxuICAgIHZhciB3aWR0aE5vU2Nyb2xsID0gb3V0ZXIub2Zmc2V0V2lkdGg7XG4gICAgLy8gZm9yY2Ugc2Nyb2xsYmFyc1xuICAgIG91dGVyLnN0eWxlLm92ZXJmbG93ID0gXCJzY3JvbGxcIjtcblxuICAgIC8vIGFkZCBpbm5lcmRpdlxuICAgIHZhciBpbm5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgaW5uZXIuc3R5bGUud2lkdGggPSBcIjEwMCVcIjtcbiAgICBvdXRlci5hcHBlbmRDaGlsZChpbm5lcik7XG5cbiAgICB2YXIgd2lkdGhXaXRoU2Nyb2xsID0gaW5uZXIub2Zmc2V0V2lkdGg7XG5cbiAgICAvLyByZW1vdmUgZGl2c1xuICAgIG91dGVyLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQob3V0ZXIpO1xuXG4gICAgcmV0dXJuIChfc2Nyb2xsQmFyV2lkdGggPSB3aWR0aE5vU2Nyb2xsIC0gd2lkdGhXaXRoU2Nyb2xsKTtcbn1cblxuZnVuY3Rpb24gZ2V0U2Nyb2xsSW5mbyh3aXRoaW4pIHtcbiAgICBjb25zdCBvdmVyZmxvd1ggPSB3aXRoaW4uaXNXaW5kb3cgfHwgd2l0aGluLmlzRG9jdW1lbnQgPyBcbiAgICAgICAgJycgOiB3aXRoaW4uZWxlbWVudC5zdHlsZS5vdmVyZmxvd1g7XG4gICAgY29uc3Qgb3ZlcmZsb3dZID0gd2l0aGluLmlzV2luZG93IHx8IHdpdGhpbi5pc0RvY3VtZW50ID8gXG4gICAgICAgICcnIDogd2l0aGluLmVsZW1lbnQuc3R5bGUub3ZlcmZsb3dZO1xuICAgIGNvbnN0IGhhc092ZXJmbG93WCA9IG92ZXJmbG93WCA9PT0gJ3Njcm9sbCcgfHwgXG4gICAgICAgIChvdmVyZmxvd1ggPT09ICdhdXRvJyAmJiB3aXRoaW4ud2lkdGggPCB3aXRoaW4uZWxlbWVudC5zY3JvbGxXaWR0aCk7XG4gICAgY29uc3QgaGFzT3ZlcmZsb3dZID0gb3ZlcmZsb3dZID09PSAnc2Nyb2xsJyB8fCBcbiAgICAgICAgKG92ZXJmbG93WSA9PT0gJ2F1dG8nICYmIHdpdGhpbi5oZWlnaHQgPCB3aXRoaW4uZWxlbWVudC5zY3JvbGxIZWlnaHQpO1xuICAgIFxuICAgIHJldHVybiB7XG4gICAgICAgIHdpZHRoOiBoYXNPdmVyZmxvd1kgPyBzY3JvbGxiYXJXaWR0aCgpIDogMCxcbiAgICAgICAgaGVpZ2h0OiBoYXNPdmVyZmxvd1ggPyBzY3JvbGxiYXJXaWR0aCgpIDogMCxcbiAgICB9O1xufVxuXG5mdW5jdGlvbiBnZXRXaXRoaW5JbmZvKGVsZW1lbnQpIHtcbiAgICBlbGVtZW50IHx8IChlbGVtZW50ID0gd2luZG93KTtcbiAgICBjb25zdCBpc1dpbmRvdyA9IGVsZW1lbnQgPT09IHdpbmRvdztcbiAgICBjb25zdCBpc0RvY3VtZW50ID0gZWxlbWVudC5ub2RlVHlwZSA9PT0gOTtcbiAgICBjb25zdCBoYXNPZmZzZXQgPSAhaXNXaW5kb3cgJiYgIWlzRG9jdW1lbnQ7XG5cbiAgICBjb25zdCByZXQgPSB7ZWxlbWVudCwgaXNXaW5kb3csIGlzRG9jdW1lbnR9O1xuICAgIGlmIChoYXNPZmZzZXQpIHtcbiAgICAgICAgY29uc3QgcmVjdCA9IGVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgIHJldC5vZmZzZXQgPSB7XG4gICAgICAgICAgICB0b3A6IHJlY3QudG9wICsgd2luZG93LnBhZ2VZT2Zmc2V0LFxuICAgICAgICAgICAgbGVmdDogcmVjdC5sZWZ0ICsgd2luZG93LnBhZ2VYT2Zmc2V0LFxuICAgICAgICB9O1xuICAgICAgICByZXQud2lkdGggPSByZWN0LndpZHRoO1xuICAgICAgICByZXQuaGVpZ2h0ID0gcmVjdC5oZWlnaHQ7XG4gICAgICAgIHJldC5zY3JvbGxMZWZ0ID0gZWxlbWVudC5zY3JvbGxMZWZ0O1xuICAgICAgICByZXQuc2Nyb2xsVG9wID0gZWxlbWVudC5zY3JvbGxUb3A7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0Lm9mZnNldCA9IHt0b3A6IDAsIGxlZnQ6IDB9O1xuICAgICAgICBjb25zdCByZWN0ID0gZ2V0RG9jdW1lbnRPcldpbmRvd1JlY3QoZWxlbWVudCk7XG4gICAgICAgIHJldC53aWR0aCA9IHJlY3Qud2lkdGg7XG4gICAgICAgIHJldC5oZWlnaHQgPSByZWN0LmhlaWdodDtcbiAgICAgICAgcmV0LnNjcm9sbExlZnQgPSB3aW5kb3cucGFnZVhPZmZzZXQ7XG4gICAgICAgIHJldC5zY3JvbGxUb3AgPSB3aW5kb3cucGFnZVlPZmZzZXQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJldDtcbn1cblxuZnVuY3Rpb24gcGFyc2VDc3Moc3R5bGUsIHByb3BlcnR5KSB7XG4gICAgcmV0dXJuIHBhcnNlSW50KHN0eWxlW3Byb3BlcnR5XSwgMTApIHx8IDA7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHBvc2l0aW9uKGVsZW0sIG9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0gT2JqZWN0LmFzc2lnbih7fSwgb3B0aW9ucyk7XG5cbiAgICBjb25zdCB0YXJnZXQgPSBvcHRpb25zLm9mIHx8IHdpbmRvdztcbiAgICBpZiAodGFyZ2V0LnByZXZlbnREZWZhdWx0KSB7XG4gICAgICAgIG9wdGlvbnMuYXQgPSBcImxlZnQgdG9wXCI7XG4gICAgfVxuICAgIGNvbnN0IHtcbiAgICAgICAgd2lkdGg6IHRhcmdldFdpZHRoLFxuICAgICAgICBoZWlnaHQ6IHRhcmdldEhlaWdodCwgXG4gICAgICAgIG9mZnNldDogdGFyZ2V0T2Zmc2V0XG4gICAgfSA9IGdldERpbWVuc2lvbnModGFyZ2V0KTtcbiAgICBjb25zdCBiYXNlUG9zaXRpb24gPSBPYmplY3QuYXNzaWduKHt9LCB0YXJnZXRPZmZzZXQpO1xuICAgIGNvbnN0IGNvbGxpc2lvbiA9IChvcHRpb25zLmNvbGxpc2lvbiB8fCAnZmxpcCcpLnNwbGl0KCcgJyk7XG4gICAgY29uc3Qgb2Zmc2V0cyA9IHt9O1xuICAgIGNvbnN0IHdpdGhpbiA9IGdldFdpdGhpbkluZm8ob3B0aW9ucy53aXRoaW4pO1xuICAgIGNvbnN0IHNjcm9sbEluZm8gPSBnZXRTY3JvbGxJbmZvKHdpdGhpbik7XG5cbiAgICBbJ215JywgJ2F0J10uZm9yRWFjaChpdGVtID0+IHtcbiAgICAgICAgbGV0IHBvcyA9IChvcHRpb25zW2l0ZW1dIHx8ICcnKS5zcGxpdCgnICcpO1xuXG4gICAgICAgIGlmIChwb3MubGVuZ3RoID09PSAxKSB7XG4gICAgICAgICAgICBwb3MgPSBySG9yaXpvbnRhbC50ZXN0KHBvc1swXSkgP1xuICAgICAgICAgICAgICAgIHBvcy5jb25jYXQoWydjZW50ZXInXSkgOlxuICAgICAgICAgICAgICAgIHJWZXJ0aWNhbC50ZXN0KHBvc1swXSkgP1xuICAgICAgICAgICAgICAgICAgICBbJ2NlbnRlciddLmNvbmNhdChwb3MpIDpcbiAgICAgICAgICAgICAgICAgICAgWydjZW50ZXInLCAnY2VudGVyJ107XG4gICAgICAgIH1cbiAgICAgICAgcG9zWzBdID0gckhvcml6b250YWwudGVzdChwb3NbMF0pID8gcG9zWzBdIDogJ2NlbnRlcic7XG4gICAgICAgIHBvc1sxXSA9IHJWZXJ0aWNhbC50ZXN0KHBvc1sxXSkgPyBwb3NbMV0gOiAnY2VudGVyJztcblxuICAgICAgICBjb25zdCBob3Jpem9udGFsT2Zmc2V0ID0gck9mZnNldC5leGVjKHBvc1swXSk7XG4gICAgICAgIGNvbnN0IHZlcnRpY2FsT2Zmc2V0ID0gck9mZnNldC5leGVjKHBvc1sxXSk7XG4gICAgICAgIG9mZnNldHNbaXRlbV0gPSBbXG4gICAgICAgICAgICBob3Jpem9udGFsT2Zmc2V0ID8gaG9yaXpvbnRhbE9mZnNldFswXSA6IDAsXG4gICAgICAgICAgICB2ZXJ0aWNhbE9mZnNldCA/IHZlcnRpY2FsT2Zmc2V0WzBdIDogMFxuICAgICAgICBdO1xuXG4gICAgICAgIG9wdGlvbnNbaXRlbV0gPSBbXG4gICAgICAgICAgICByUG9zaXRpb24uZXhlYyhwb3NbMF0pWzBdLFxuICAgICAgICAgICAgclBvc2l0aW9uLmV4ZWMocG9zWzFdKVswXVxuICAgICAgICBdO1xuICAgIH0pO1xuXG4gICAgaWYgKGNvbGxpc2lvbi5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgY29sbGlzaW9uWzFdID0gY29sbGlzaW9uWzBdO1xuICAgIH1cblxuICAgIGNvbnN0IGF0ID0gb3B0aW9ucy5hdDtcbiAgICBpZiAoYXRbMF0gPT09ICdyaWdodCcpIHtcbiAgICAgICAgYmFzZVBvc2l0aW9uLmxlZnQgKz0gdGFyZ2V0V2lkdGg7XG4gICAgfSBlbHNlIGlmIChhdFswXSA9PT0gJ2NlbnRlcicpIHtcbiAgICAgICAgYmFzZVBvc2l0aW9uLmxlZnQgKz0gdGFyZ2V0V2lkdGggLyAyO1xuICAgIH1cbiAgICBpZiAoYXRbMV0gPT09ICdib3R0b20nKSB7XG4gICAgICAgIGJhc2VQb3NpdGlvbi50b3AgKz0gdGFyZ2V0SGVpZ2h0O1xuICAgIH0gZWxzZSBpZiAoYXRbMV0gPT09ICdjZW50ZXInKSB7XG4gICAgICAgIGJhc2VQb3NpdGlvbi50b3AgKz0gdGFyZ2V0SGVpZ2h0IC8gMjtcbiAgICB9XG5cbiAgICBjb25zdCBhdE9mZnNldCA9IGdldE9mZnNldHMob2Zmc2V0cy5hdCwgdGFyZ2V0V2lkdGgsIHRhcmdldEhlaWdodCk7XG4gICAgYmFzZVBvc2l0aW9uLmxlZnQgKz0gYXRPZmZzZXRbMF07XG4gICAgYmFzZVBvc2l0aW9uLnRvcCArPSBhdE9mZnNldFsxXTtcblxuICAgIGNvbnN0IGVsZW1XaWR0aCA9IGVsZW0ub2Zmc2V0V2lkdGg7XG4gICAgY29uc3QgZWxlbUhlaWdodCA9IGVsZW0ub2Zmc2V0SGVpZ2h0O1xuICAgIGNvbnN0IHBvc2l0aW9uID0gT2JqZWN0LmFzc2lnbih7fSwgYmFzZVBvc2l0aW9uKTtcbiAgICBjb25zdCBteU9mZnNldCA9IGdldE9mZnNldHMob2Zmc2V0cy5teSwgZWxlbVdpZHRoLCBlbGVtSGVpZ2h0KTtcbiAgICBjb25zdCBjb21wdXRlZFN0eWxlID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUoZWxlbSk7XG4gICAgY29uc3QgbWFyZ2luTGVmdCA9IHBhcnNlQ3NzKGNvbXB1dGVkU3R5bGUsICdtYXJnaW5MZWZ0Jyk7XG4gICAgY29uc3QgbWFyZ2luVG9wID0gcGFyc2VDc3MoY29tcHV0ZWRTdHlsZSwgJ21hcmdpblRvcCcpO1xuICAgIGNvbnN0IGNvbGxpc2lvbldpZHRoID0gZWxlbVdpZHRoICsgbWFyZ2luTGVmdCArIHBhcnNlQ3NzKGNvbXB1dGVkU3R5bGUsICdtYXJnaW5SaWdodCcpICsgc2Nyb2xsSW5mby53aWR0aDtcbiAgICBjb25zdCBjb2xsaXNpb25IZWlnaHQgPSBlbGVtSGVpZ2h0ICsgbWFyZ2luVG9wICsgcGFyc2VDc3MoY29tcHV0ZWRTdHlsZSwgJ21hcmdpbkJvdHRvbScpICsgc2Nyb2xsSW5mby5oZWlnaHQ7XG4gICAgY29uc3QgY29sbGlzaW9uUG9zaXRpb24gPSB7bWFyZ2luTGVmdCwgbWFyZ2luVG9wfTtcblxuICAgIGNvbnN0IG15ID0gb3B0aW9ucy5teTtcbiAgICBpZiAobXlbMF0gPT09ICdyaWdodCcpIHtcbiAgICAgICAgcG9zaXRpb24ubGVmdCAtPSBlbGVtV2lkdGg7XG4gICAgfSBlbHNlIGlmIChteVswXSA9PT0gJ2NlbnRlcicpIHtcbiAgICAgICAgcG9zaXRpb24ubGVmdCAtPSBlbGVtV2lkdGggLyAyO1xuICAgIH1cbiAgICBpZiAobXlbMV0gPT09ICdib3R0b20nKSB7XG4gICAgICAgIHBvc2l0aW9uLnRvcCAtPSBlbGVtSGVpZ2h0O1xuICAgIH0gZWxzZSBpZiAobXlbMV0gPT09ICdjZW50ZXInKSB7XG4gICAgICAgIHBvc2l0aW9uLnRvcCAtPSBlbGVtSGVpZ2h0IC8gMjtcbiAgICB9XG4gICAgcG9zaXRpb24ubGVmdCArPSBteU9mZnNldFswXTtcbiAgICBwb3NpdGlvbi50b3AgKz0gbXlPZmZzZXRbMV07XG5cbiAgICBbJ2xlZnQnLCAndG9wJ10uZm9yRWFjaCgoZGlyLCBpKSA9PiB7XG4gICAgICAgIGNvbnN0IGNvbGwgPSBjb2xsaXNpb25baV07XG4gICAgICAgIGlmIChydWxlc1tjb2xsXSkge1xuICAgICAgICAgICAgcnVsZXNbY29sbF1bZGlyXShwb3NpdGlvbiwge1xuICAgICAgICAgICAgICAgIHRhcmdldFdpZHRoLFxuICAgICAgICAgICAgICAgIHRhcmdldEhlaWdodCxcbiAgICAgICAgICAgICAgICBlbGVtV2lkdGgsXG4gICAgICAgICAgICAgICAgZWxlbUhlaWdodCxcbiAgICAgICAgICAgICAgICBjb2xsaXNpb25Qb3NpdGlvbixcbiAgICAgICAgICAgICAgICBjb2xsaXNpb25XaWR0aCxcbiAgICAgICAgICAgICAgICBjb2xsaXNpb25IZWlnaHQsXG4gICAgICAgICAgICAgICAgb2Zmc2V0OiBbYXRPZmZzZXRbMF0gKyBteU9mZnNldFswXSwgYXRPZmZzZXRbMV0gKyBteU9mZnNldFsxXV0sXG4gICAgICAgICAgICAgICAgbXk6IG9wdGlvbnMubXksXG4gICAgICAgICAgICAgICAgYXQ6IG9wdGlvbnMuYXQsXG4gICAgICAgICAgICAgICAgd2l0aGluLFxuICAgICAgICAgICAgICAgIGVsZW1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICBpZiAob3B0aW9ucy51c2luZykge1xuICAgICAgICBjb25zdCBsZWZ0ID0gdGFyZ2V0T2Zmc2V0LmxlZnQgLSBwb3NpdGlvbi5sZWZ0O1xuICAgICAgICBjb25zdCByaWdodCA9IGxlZnQgKyB0YXJnZXRXaWR0aCAtIGVsZW1XaWR0aDtcbiAgICAgICAgY29uc3QgdG9wID0gdGFyZ2V0T2Zmc2V0LnRvcCAtIHBvc2l0aW9uLnRvcDtcbiAgICAgICAgY29uc3QgYm90dG9tID0gdG9wICsgdGFyZ2V0SGVpZ2h0IC0gZWxlbUhlaWdodDtcbiAgICAgICAgY29uc3QgZmVlZGJhY2sgPSB7XG4gICAgICAgICAgICB0YXJnZXQ6IHtcbiAgICAgICAgICAgICAgICBlbGVtZW50OiB0YXJnZXQsXG4gICAgICAgICAgICAgICAgbGVmdDogdGFyZ2V0T2Zmc2V0LmxlZnQsXG4gICAgICAgICAgICAgICAgdG9wOiB0YXJnZXRPZmZzZXQudG9wLFxuICAgICAgICAgICAgICAgIHdpZHRoOiB0YXJnZXRXaWR0aCxcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IHRhcmdldEhlaWdodCxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBlbGVtZW50OiB7XG4gICAgICAgICAgICAgICAgZWxlbWVudDogZWxlbSxcbiAgICAgICAgICAgICAgICBsZWZ0OiBwb3NpdGlvbi5sZWZ0LFxuICAgICAgICAgICAgICAgIHRvcDogcG9zaXRpb24udG9wLFxuICAgICAgICAgICAgICAgIHdpZHRoOiBlbGVtV2lkdGgsXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiBlbGVtSGVpZ2h0LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGhvcml6b250YWw6IHJpZ2h0IDwgMCA/ICdsZWZ0JyA6IGxlZnQgPiAwID8gJ3JpZ2h0JyA6ICdjZW50ZXInLFxuICAgICAgICAgICAgdmVydGljYWw6IGJvdHRvbSA8IDAgPyAndG9wJyA6IHRvcCA+IDAgPyAnYm90dG9tJyA6ICdtaWRkbGUnLFxuICAgICAgICB9O1xuICAgICAgICBpZiAodGFyZ2V0V2lkdGggPCBlbGVtV2lkdGggJiYgYWJzKGxlZnQgKyByaWdodCkgPCB0YXJnZXRXaWR0aCkge1xuICAgICAgICAgICAgZmVlZGJhY2suaG9yaXpvbnRhbCA9ICdjZW50ZXInO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0YXJnZXRIZWlnaHQgPCBlbGVtSGVpZ2h0ICYmIGFicyh0b3AgKyBib3R0b20pIDwgdGFyZ2V0SGVpZ2h0KSB7XG4gICAgICAgICAgICBmZWVkYmFjay52ZXJ0aWNhbCA9ICdtaWRkbGUnO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKFxuICAgICAgICAgICAgcG9zaXRpb24udG9wICsgZWxlbUhlaWdodCA8PSB0YXJnZXRPZmZzZXQudG9wIHx8IFxuICAgICAgICAgICAgcG9zaXRpb24udG9wID49IHRhcmdldE9mZnNldC50b3AgKyB0YXJnZXRIZWlnaHRcbiAgICAgICAgKSB7XG4gICAgICAgICAgICBmZWVkYmFjay5pbXBvcnRhbnQgPSAndmVydGljYWwnO1xuICAgICAgICB9IGVsc2UgaWYgKFxuICAgICAgICAgICAgcG9zaXRpb24ubGVmdCArIGVsZW1XaWR0aCA8PSB0YXJnZXRPZmZzZXQubGVmdCB8fFxuICAgICAgICAgICAgcG9zaXRpb24ubGVmdCA+PSB0YXJnZXRPZmZzZXQubGVmdCArIHRhcmdldFdpZHRoXG4gICAgICAgICkge1xuICAgICAgICAgICAgZmVlZGJhY2suaW1wb3J0YW50ID0gJ2hvcml6b250YWwnO1xuICAgICAgICB9IGVsc2UgaWYgKG1heChhYnMobGVmdCksIGFicyhyaWdodCkpID4gbWF4KGFicyh0b3ApLCBhYnMoYm90dG9tKSkpIHtcbiAgICAgICAgICAgIGZlZWRiYWNrLmltcG9ydGFudCA9ICdob3Jpem9udGFsJztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGZlZWRiYWNrLmltcG9ydGFudCA9ICd2ZXJ0aWNhbCc7XG4gICAgICAgIH1cblxuICAgICAgICBvcHRpb25zLnVzaW5nKGZlZWRiYWNrLCBwb3NpdGlvbik7XG4gICAgfVxuXG4gICAgY29uc3Qgc3R5bGUgPSBlbGVtLnN0eWxlO1xuICAgIGlmIChjb21wdXRlZFN0eWxlLnBvc2l0aW9uID09PSAnc3RhdGljJykge1xuICAgICAgICBzdHlsZS5wb3NpdGlvbiA9ICdyZWxhdGl2ZSc7XG4gICAgfVxuICAgIHN0eWxlLmxlZnQgPSBwb3NpdGlvbi5sZWZ0ICsgJ3B4JztcbiAgICBzdHlsZS50b3AgPSBwb3NpdGlvbi50b3AgKyAncHgnO1xufVxuXG5jb25zdCBydWxlcyA9IHtcbiAgICBmaXQ6IHtcbiAgICAgICAgbGVmdChwb3NpdGlvbiwgZGF0YSkge1xuICAgICAgICAgICAgY29uc3Qgd2l0aGluID0gZGF0YS53aXRoaW47XG4gICAgICAgICAgICBjb25zdCB3aXRoaW5PZmZzZXQgPSB3aXRoaW4uaXNXaW5kb3cgPyB3aXRoaW4uc2Nyb2xsTGVmdCA6IHdpdGhpbi5vZmZzZXQubGVmdDtcbiAgICAgICAgICAgIGNvbnN0IG91dGVyV2lkdGggPSB3aXRoaW4ud2lkdGg7XG4gICAgICAgICAgICBjb25zdCBjb2xsaXNpb25Qb3NMZWZ0ID0gIHBvc2l0aW9uLmxlZnQgLSBkYXRhLmNvbGxpc2lvblBvc2l0aW9uLm1hcmdpbkxlZnQ7XG4gICAgICAgICAgICBjb25zdCBvdmVyTGVmdCA9IHdpdGhpbk9mZnNldCAtIGNvbGxpc2lvblBvc0xlZnQ7XG4gICAgICAgICAgICBjb25zdCBvdmVyUmlnaHQgPSBjb2xsaXNpb25Qb3NMZWZ0ICsgZGF0YS5jb2xsaXNpb25XaWR0aCAtIG91dGVyV2lkdGggLSB3aXRoaW5PZmZzZXQ7XG4gICAgICAgICAgICBsZXQgbmV3T3ZlclJpZ2h0O1xuXG4gICAgICAgICAgICBpZiAoZGF0YS5jb2xsaXNpb25XaWR0aCA+IG91dGVyV2lkdGgpIHtcbiAgICAgICAgICAgICAgICBpZiAob3ZlckxlZnQgPiAwICYmIG92ZXJSaWdodCA8PTApIHtcbiAgICAgICAgICAgICAgICAgICAgbmV3T3ZlclJpZ2h0ID0gcG9zaXRpb24ubGVmdCArIG92ZXJMZWZ0ICsgZGF0YS5jb2xsaXNpb25XaWR0aCAtIG91dGVyV2lkdGggLSB3aXRoaW5PZmZzZXQ7XG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uLmxlZnQgKz0gb3ZlckxlZnQgLSBuZXdPdmVyUmlnaHQ7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChvdmVyUmlnaHQgPiAwICYmIG92ZXJMZWZ0IDw9MCkge1xuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbi5sZWZ0ID0gd2l0aGluT2Zmc2V0O1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAob3ZlckxlZnQgPiBvdmVyUmlnaHQpIHtcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb24ubGVmdCA9IHdpdGhpbk9mZnNldCArIG91dGVyV2lkdGggLSBkYXRhLmNvbGxpc2lvbldpZHRoO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uLmxlZnQgPSB3aXRoaW5PZmZzZXQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIGlmIChvdmVyTGVmdCA+IDApIHtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbi5sZWZ0ICs9IG92ZXJMZWZ0O1xuICAgICAgICAgICAgfSBlbHNlIGlmIChvdmVyUmlnaHQgPiAwKSB7XG4gICAgICAgICAgICAgICAgcG9zaXRpb24ubGVmdCAtPSBvdmVyUmlnaHQ7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uLmxlZnQgPSBtYXgocG9zaXRpb24ubGVmdCAtIGNvbGxpc2lvblBvc0xlZnQsIHBvc2l0aW9uLmxlZnQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgIHRvcChwb3NpdGlvbiwgZGF0YSkge1xuICAgICAgICAgICAgY29uc3Qgd2l0aGluID0gZGF0YS53aXRoaW47XG4gICAgICAgICAgICBjb25zdCB3aXRoaW5PZmZzZXQgPSB3aXRoaW4uaXNXaW5kb3cgPyB3aXRoaW4uc2Nyb2xsVG9wIDogd2l0aGluLm9mZnNldC50b3A7XG4gICAgICAgICAgICBjb25zdCBvdXRlckhlaWdodCA9IGRhdGEud2l0aGluLmhlaWdodDtcbiAgICAgICAgICAgIGNvbnN0IGNvbGxpc2lvblBvc1RvcCA9IHBvc2l0aW9uLnRvcCAtIGRhdGEuY29sbGlzaW9uUG9zaXRpb24ubWFyZ2luVG9wO1xuICAgICAgICAgICAgY29uc3Qgb3ZlclRvcCA9IHdpdGhpbk9mZnNldCAtIGNvbGxpc2lvblBvc1RvcDtcbiAgICAgICAgICAgIGNvbnN0IG92ZXJCb3R0b20gPSBjb2xsaXNpb25Qb3NUb3AgKyBkYXRhLmNvbGxpc2lvbkhlaWdodCAtIG91dGVySGVpZ2h0IC0gd2l0aGluT2Zmc2V0O1xuICAgICAgICAgICAgbGV0IG5ld092ZXJCb3R0b207XG5cbiAgICAgICAgICAgIGlmIChkYXRhLmNvbGxpc2lvbkhlaWdodCA+IG91dGVySGVpZ2h0KSB7XG4gICAgICAgICAgICAgICAgaWYgKG92ZXJUb3AgPiAwICYmIG92ZXJCb3R0b20gPD0gMCkge1xuICAgICAgICAgICAgICAgICAgICBuZXdPdmVyQm90dG9tID0gcG9zaXRpb24udG9wICsgb3ZlclRvcCArIGRhdGEuY29sbGlzaW9uSGVpZ2h0IC0gb3V0ZXJIZWlnaHQgLSB3aXRoaW5PZmZzZXQ7XG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uLnRvcCArPSBvdmVyVG9wIC0gbmV3T3ZlckJvdHRvbTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKG92ZXJCb3R0b20gPiAwICYmIG92ZXJUb3AgPD0gMCkge1xuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbi50b3AgPSB3aXRoaW5PZmZzZXQ7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChvdmVyVG9wID4gb3ZlckJvdHRvbSkge1xuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbi50b3AgPSB3aXRoaW5PZmZzZXQgKyBvdXRlckhlaWdodCAtIGRhdGEuY29sbGlzaW9uSGVpZ2h0O1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uLnRvcCA9IHdpdGhpbk9mZnNldDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2UgaWYgKG92ZXJUb3AgPiAwKSB7XG4gICAgICAgICAgICAgICAgcG9zaXRpb24udG9wICs9IG92ZXJUb3A7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKG92ZXJCb3R0b20gPiAwKSB7XG4gICAgICAgICAgICAgICAgcG9zaXRpb24udG9wIC09IG92ZXJCb3R0b207XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uLnRvcCA9IG1heChwb3NpdGlvbi50b3AgLSBjb2xsaXNpb25Qb3NUb3AsIHBvc2l0aW9uLnRvcCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgZmxpcDoge1xuICAgICAgICBsZWZ0KHBvc2l0aW9uLCBkYXRhKSB7XG4gICAgICAgICAgICBjb25zdCB3aXRoaW4gPSBkYXRhLndpdGhpbjtcbiAgICAgICAgICAgIGNvbnN0IHdpdGhpbk9mZnNldCA9IHdpdGhpbi5vZmZzZXQubGVmdCArIHdpdGhpbi5zY3JvbGxMZWZ0O1xuICAgICAgICAgICAgY29uc3Qgb3V0ZXJXaWR0aCA9IHdpdGhpbi53aWR0aDtcbiAgICAgICAgICAgIGNvbnN0IG9mZnNldExlZnQgPSB3aXRoaW4uaXNXaW5kb3cgPyB3aXRoaW4uc2Nyb2xsTGVmdCA6IHdpdGhpbi5vZmZzZXQubGVmdDtcbiAgICAgICAgICAgIGNvbnN0IGNvbGxpc2lvblBvc0xlZnQgPSBwb3NpdGlvbi5sZWZ0IC0gZGF0YS5jb2xsaXNpb25Qb3NpdGlvbi5tYXJnaW5MZWZ0O1xuICAgICAgICAgICAgY29uc3Qgb3ZlckxlZnQgPSBjb2xsaXNpb25Qb3NMZWZ0IC0gb2Zmc2V0TGVmdDtcbiAgICAgICAgICAgIGNvbnN0IG92ZXJSaWdodCA9IGNvbGxpc2lvblBvc0xlZnQgKyBkYXRhLmNvbGxpc2lvbldpZHRoIC0gb3V0ZXJXaWR0aCAtIG9mZnNldExlZnQ7XG4gICAgICAgICAgICBjb25zdCBteU9mZnNldCA9IGRhdGEubXlbMF0gPT09ICdsZWZ0JyA/IFxuICAgICAgICAgICAgICAgIC1kYXRhLmVsZW1XaWR0aCA6XG4gICAgICAgICAgICAgICAgZGF0YS5teVswXSA9PT0gJ3JpZ2h0JyA/XG4gICAgICAgICAgICAgICAgICAgIGRhdGEuZWxlbVdpZHRoIDogMDtcbiAgICAgICAgICAgIGNvbnN0IGF0T2Zmc2V0ID0gZGF0YS5hdFswXSA9PT0gJ2xlZnQnID9cbiAgICAgICAgICAgICAgICBkYXRhLnRhcmdldFdpZHRoIDpcbiAgICAgICAgICAgICAgICBkYXRhLmF0WzBdID09PSAncmlnaHQnID9cbiAgICAgICAgICAgICAgICAgICAgLWRhdGEudGFyZ2V0V2lkdGggOiAwO1xuICAgICAgICAgICAgY29uc3Qgb2Zmc2V0ID0gLTIgKiBkYXRhLm9mZnNldFswXTtcbiAgICAgICAgICAgIGxldCBuZXdPdmVyUmlnaHQ7XG4gICAgICAgICAgICBsZXQgbmV3T3ZlckxlZnQ7XG5cbiAgICAgICAgICAgIGlmIChvdmVyTGVmdCA8IDApIHtcbiAgICAgICAgICAgICAgICBuZXdPdmVyUmlnaHQgPSBwb3NpdGlvbi5sZWZ0ICsgbXlPZmZzZXQgKyBhdE9mZnNldCArIG9mZnNldCArIGRhdGEuY29sbGlzaW9uV2lkdGggLSBvdXRlcldpZHRoIC0gd2l0aGluT2Zmc2V0O1xuICAgICAgICAgICAgICAgIGlmIChuZXdPdmVyUmlnaHQgPCAwIHx8IG5ld092ZXJSaWdodCA8IGFicyhvdmVyTGVmdCkpIHtcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb24ubGVmdCArPSBteU9mZnNldCArIGF0T2Zmc2V0ICsgb2Zmc2V0O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSBpZiAob3ZlclJpZ2h0ID4gMCkge1xuICAgICAgICAgICAgICAgIG5ld092ZXJMZWZ0ID0gcG9zaXRpb24ubGVmdCAtIGRhdGEuY29sbGlzaW9uUG9zaXRpb24ubWFyZ2luTGVmdCArIG15T2Zmc2V0ICsgYXRPZmZzZXQgKyBvZmZzZXQgLSBvZmZzZXRMZWZ0O1xuICAgICAgICAgICAgICAgIC8vIHRoZSBzYW1lIHRvIHRvcFxuICAgICAgICAgICAgICAgIC8vIGlmIChuZXdPdmVyTGVmdCA+IDAgfHwgYWJzKG5ld092ZXJMZWZ0KSA8IG92ZXJSaWdodCkge1xuICAgICAgICAgICAgICAgIGlmIChuZXdPdmVyTGVmdCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb24ubGVmdCArPSBteU9mZnNldCArIGF0T2Zmc2V0ICsgb2Zmc2V0O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcblxuICAgICAgICB0b3AocG9zaXRpb24sIGRhdGEpIHtcbiAgICAgICAgICAgIGNvbnN0IHdpdGhpbiA9IGRhdGEud2l0aGluO1xuICAgICAgICAgICAgY29uc3Qgd2l0aGluT2Zmc2V0ID0gd2l0aGluLm9mZnNldC50b3AgKyB3aXRoaW4uc2Nyb2xsVG9wO1xuICAgICAgICAgICAgY29uc3Qgb3V0ZXJIZWlnaHQgPSB3aXRoaW4uaGVpZ2h0O1xuICAgICAgICAgICAgY29uc3Qgb2Zmc2V0VG9wID0gd2l0aGluLmlzV2luZG93ID8gd2l0aGluLnNjcm9sbFRvcCA6IHdpdGhpbi5vZmZzZXQudG9wO1xuICAgICAgICAgICAgY29uc3QgY29sbGlzaW9uUG9zVG9wID0gcG9zaXRpb24udG9wIC0gZGF0YS5jb2xsaXNpb25Qb3NpdGlvbi5tYXJnaW5Ub3A7XG4gICAgICAgICAgICBjb25zdCBvdmVyVG9wID0gY29sbGlzaW9uUG9zVG9wIC0gb2Zmc2V0VG9wO1xuICAgICAgICAgICAgY29uc3Qgb3ZlckJvdHRvbSA9IGNvbGxpc2lvblBvc1RvcCArIGRhdGEuY29sbGlzaW9uSGVpZ2h0IC0gb3V0ZXJIZWlnaHQgLSBvZmZzZXRUb3A7IFxuICAgICAgICAgICAgY29uc3QgbXlPZmZzZXQgPSBkYXRhLm15WzFdID09PSAndG9wJyA/XG4gICAgICAgICAgICAgICAgLWRhdGEuZWxlbUhlaWdodCA6XG4gICAgICAgICAgICAgICAgZGF0YS5teVsxXSA9PT0gJ2JvdHRvbScgP1xuICAgICAgICAgICAgICAgICAgICBkYXRhLmVsZW1IZWlnaHQgOiAwO1xuICAgICAgICAgICAgY29uc3QgYXRPZmZzZXQgPSBkYXRhLmF0WzFdID09PSAndG9wJyA/XG4gICAgICAgICAgICAgICAgZGF0YS50YXJnZXRIZWlnaHQgOlxuICAgICAgICAgICAgICAgIGRhdGEuYXRbMV0gPT09ICdib3R0b20nID9cbiAgICAgICAgICAgICAgICAgICAgLWRhdGEudGFyZ2V0SGVpZ2h0IDogMDtcbiAgICAgICAgICAgIGNvbnN0IG9mZnNldCA9IC0yICogZGF0YS5vZmZzZXRbMV07XG4gICAgICAgICAgICBsZXQgbmV3T3ZlclRvcDtcbiAgICAgICAgICAgIGxldCBuZXdPdmVyQm90dG9tO1xuXG4gICAgICAgICAgICBpZiAob3ZlclRvcCA8IDApIHtcbiAgICAgICAgICAgICAgICBuZXdPdmVyQm90dG9tID0gcG9zaXRpb24udG9wICsgbXlPZmZzZXQgKyBhdE9mZnNldCArIG9mZnNldCArIGRhdGEuY29sbGlzaW9uSGVpZ2h0IC0gb3V0ZXJIZWlnaHQgLSB3aXRoaW5PZmZzZXQ7XG4gICAgICAgICAgICAgICAgaWYgKG5ld092ZXJCb3R0b20gPCAwIHx8IG5ld092ZXJCb3R0b20gPCBhYnMob3ZlclRvcCkpIHtcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb24udG9wICs9IG15T2Zmc2V0ICsgYXRPZmZzZXQgKyBvZmZzZXQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIGlmIChvdmVyQm90dG9tID4gMCkge1xuICAgICAgICAgICAgICAgIG5ld092ZXJUb3AgPSBwb3NpdGlvbi50b3AgLSBkYXRhLmNvbGxpc2lvblBvc2l0aW9uLm1hcmdpblRvcCArIG15T2Zmc2V0ICsgYXRPZmZzZXQgKyBvZmZzZXQgLSBvZmZzZXRUb3A7XG4gICAgICAgICAgICAgICAgLy8gYmVjYXVzZSB3aW5kb3cgY2FuIHNjcm9sbCBkb3duLCB3aGVuIGl0IGJleW9uZCB0aGUgdG9wIGJvcmRlcixcbiAgICAgICAgICAgICAgICAvLyB3ZSBjYW4gbm90IHNjcm9sbCBpdCB0byB2aWV3LiBEb24ndCBmbGlwIGl0IGluIHRoaXMgY2FzZVxuICAgICAgICAgICAgICAgIC8vIGlmIChuZXdPdmVyVG9wID4gMCB8fCBhYnMobmV3T3ZlclRvcCkgPCBvdmVyQm90dG9tKSB7XG4gICAgICAgICAgICAgICAgaWYgKG5ld092ZXJUb3AgPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uLnRvcCArPSBteU9mZnNldCArIGF0T2Zmc2V0ICsgb2Zmc2V0O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICBmbGlwZml0OiB7XG4gICAgICAgIGxlZnQoLi4uYXJncykge1xuICAgICAgICAgICAgcnVsZXMuZmxpcC5sZWZ0KC4uLmFyZ3MpO1xuICAgICAgICAgICAgcnVsZXMuZml0LmxlZnQoLi4uYXJncyk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgdG9wKC4uLmFyZ3MpIHtcbiAgICAgICAgICAgIHJ1bGVzLmZsaXAudG9wKC4uLmFyZ3MpO1xuICAgICAgICAgICAgcnVsZXMuZml0LnRvcCguLi5hcmdzKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuXG5leHBvcnQge3Bvc2l0aW9ufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvbW92ZVdyYXBwZXIvcG9zaXRpb24uanMiLCJpbXBvcnQgSW50YWN0IGZyb20gJ2ludGFjdCc7XG5pbXBvcnQgdGVtcGxhdGUgZnJvbSAnLi9ncm91cC52ZHQnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBPcHRpb25Hcm91cCBleHRlbmRzIEludGFjdCB7XG4gICAgQEludGFjdC50ZW1wbGF0ZSgpXG4gICAgc3RhdGljIHRlbXBsYXRlID0gdGVtcGxhdGU7XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL3NlbGVjdC9ncm91cC5qcyIsIlxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24ob2JqLCBfVmR0LCBibG9ja3MsICRjYWxsZWUpIHtcbl9WZHQgfHwgKF9WZHQgPSBWZHQpO1xub2JqIHx8IChvYmogPSB7fSk7XG5ibG9ja3MgfHwgKGJsb2NrcyA9IHt9KTtcbnZhciBoID0gX1ZkdC5taXNzLmgsIGhjID0gX1ZkdC5taXNzLmhjLCBodSA9IF9WZHQubWlzcy5odSwgd2lkZ2V0cyA9IHRoaXMgJiYgdGhpcy53aWRnZXRzIHx8IHt9LCBfYmxvY2tzID0ge30sIF9fYmxvY2tzID0ge30sXG5fX3UgPSBfVmR0LnV0aWxzLCBleHRlbmQgPSBfX3UuZXh0ZW5kLCBfZSA9IF9fdS5lcnJvciwgX2NsYXNzTmFtZSA9IF9fdS5jbGFzc05hbWUsXG5fX28gPSBfX3UuT3B0aW9ucywgX2dldE1vZGVsID0gX19vLmdldE1vZGVsLCBfc2V0TW9kZWwgPSBfX28uc2V0TW9kZWwsXG5fc2V0Q2hlY2tib3hNb2RlbCA9IF9fdS5zZXRDaGVja2JveE1vZGVsLCBfZGV0ZWN0Q2hlY2tib3hDaGVja2VkID0gX191LmRldGVjdENoZWNrYm94Q2hlY2tlZCxcbl9zZXRTZWxlY3RNb2RlbCA9IF9fdS5zZXRTZWxlY3RNb2RlbCxcbnNlbGYgPSB0aGlzLmRhdGEsICR0aGlzID0gdGhpcywgc2NvcGUgPSBvYmosIEFuaW1hdGUgPSBzZWxmICYmIHNlbGYuQW5pbWF0ZSwgcGFyZW50ID0gKCRjYWxsZWUgfHwge30pLl9zdXBlclxuY29uc3Qge2NoaWxkcmVuLCBsYWJlbH0gPSBzZWxmLmdldCgpO1xuXG5yZXR1cm4gaCgnZGl2JywgbnVsbCwgW2goJ2RpdicsIG51bGwsIGZ1bmN0aW9uKCkge3RyeSB7cmV0dXJuIFtsYWJlbCBdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpLCAnay1sYWJlbCcpLCAnXFxuICAgICcsIGZ1bmN0aW9uKCkge3RyeSB7cmV0dXJuIFtjaGlsZHJlbiBdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpLCAnXFxuJ10sICdrLWdyb3VwJylcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL3NlbGVjdC9ncm91cC52ZHQiLCJpbXBvcnQgSW50YWN0IGZyb20gJ2ludGFjdCc7XG5pbXBvcnQgdGVtcGxhdGUgZnJvbSAnLi9pbmRleC52ZHQnO1xuaW1wb3J0ICcuLi8uLi9zdHlsZXMva3BjLnN0eWwnO1xuaW1wb3J0ICcuL2luZGV4LnN0eWwnO1xuaW1wb3J0IE9wdGlvbiBmcm9tICcuL29wdGlvbic7XG5pbXBvcnQgR3JvdXAgZnJvbSAnLi9ncm91cCc7XG5pbXBvcnQge3NlbGVjdElucHV0LCBfJH0gZnJvbSAnLi4vdXRpbHMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTZWxlY3QgZXh0ZW5kcyBJbnRhY3Qge1xuICAgIEBJbnRhY3QudGVtcGxhdGUoKVxuICAgIHN0YXRpYyB0ZW1wbGF0ZSA9IHRlbXBsYXRlO1xuXG4gICAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICAgICAgbXVsdGlwbGU6IEJvb2xlYW4sXG4gICAgICAgIGRpc2FibGVkOiBCb29sZWFuLFxuICAgICAgICBjbGVhcmFibGU6IEJvb2xlYW4sXG4gICAgICAgIGZpbHRlcmFibGU6IEJvb2xlYW4sXG4gICAgICAgIGZsdWlkOiBCb29sZWFuLFxuICAgICAgICBhbGxvd1VubWF0Y2g6IEJvb2xlYW4sXG4gICAgfTtcblxuICAgIGRlZmF1bHRzKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgZGF0YTogW10sXG4gICAgICAgICAgICB2YWx1ZTogJycsXG4gICAgICAgICAgICBtdWx0aXBsZTogZmFsc2UsIC8v5pSv5oyB5aSa6YCJbGlcbiAgICAgICAgICAgIGRpc2FibGVkOiBmYWxzZSxcbiAgICAgICAgICAgIGNsZWFyYWJsZTogZmFsc2UsIC8vIOaYr+WQpuWPr+a4heepuiBcbiAgICAgICAgICAgIGZpbHRlcmFibGU6IGZhbHNlLCAvLyDmkJzntKLnrZvpgIlcbiAgICAgICAgICAgIGtleXdvcmRzOiB1bmRlZmluZWQsXG4gICAgICAgICAgICBwbGFjZWhvbGRlcjogdW5kZWZpbmVkLFxuICAgICAgICAgICAgc2l6ZTogJ2RlZmF1bHQnLFxuICAgICAgICAgICAgZmx1aWQ6IGZhbHNlLFxuICAgICAgICAgICAgd2lkdGg6IHVuZGVmaW5lZCxcbiAgICAgICAgICAgIGFsbG93VW5tYXRjaDogZmFsc2UsXG5cbiAgICAgICAgICAgIF9zaG93OiBmYWxzZSxcbiAgICAgICAgfVxuICAgIH1cblxuICAgIF9pbml0KCkge1xuICAgICAgICB0aGlzLm9uKCckY2hhbmdlZDp2YWx1ZScsICgpID0+IHtcbiAgICAgICAgICAgIGlmICh0aGlzLmdldCgnbXVsdGlwbGUnKSAmJiB0aGlzLmdldCgnX3Nob3cnKSkge1xuICAgICAgICAgICAgICAgIHRoaXMucmVmcy5tZW51LnBvc2l0aW9uKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIF9vbkNsZWFyKGUpIHtcbiAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgdGhpcy5zZXQoJ3ZhbHVlJywgJycpO1xuICAgIH1cblxuICAgIF9vblNlbGVjdCh2YWx1ZSkge1xuICAgICAgICBpZiAoIXRoaXMuZ2V0KCdtdWx0aXBsZScpKSB7XG4gICAgICAgICAgICB0aGlzLnNldCgndmFsdWUnLCB2YWx1ZSwge2FzeW5jOiB0cnVlfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBsZXQgdmFsdWVzID0gdGhpcy5nZXQoJ3ZhbHVlJyk7XG4gICAgICAgICAgICBpZiAoIUFycmF5LmlzQXJyYXkodmFsdWVzKSkge1xuICAgICAgICAgICAgICAgIHZhbHVlcyA9IFtdO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB2YWx1ZXMgPSB2YWx1ZXMuc2xpY2UoMCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBpbmRleCA9IHZhbHVlcy5pbmRleE9mKHZhbHVlKTtcbiAgICAgICAgICAgIGlmICh+aW5kZXgpIHtcbiAgICAgICAgICAgICAgICAvLyBpZiBmaW5kLCBkZWxldGUgaXRcbiAgICAgICAgICAgICAgICB2YWx1ZXMuc3BsaWNlKGluZGV4LCAxKTsgXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHZhbHVlcy5wdXNoKHZhbHVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuc2V0KCd2YWx1ZScsIHZhbHVlcywge2FzeW5jOiB0cnVlfSk7XG4gICAgICAgICAgICB0aGlzLl9mb2N1c0lucHV0KCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fcmVzZXRTZWFyY2goKTtcbiAgICB9XG5cbiAgICBfb25TZWFyY2goZSkge1xuICAgICAgICB0aGlzLnNldCgna2V5d29yZHMnLCBlLnRhcmdldC52YWx1ZS50cmltKCkpO1xuICAgICAgICAvLyBhbHdheXMgc2hvdyBtZW51IG9uIHNlYXJjaGluZ1xuICAgICAgICB0aGlzLnJlZnMubWVudS5zaG93KCk7XG4gICAgICAgIHRoaXMucmVmcy5tZW51LmZvY3VzSXRlbUJ5SW5kZXgoMCk7XG4gICAgICAgIC8vIHRoZSBwb3NpdGlvbiBtYXkgYmUgZmxpcCwgYW5kIHRoZSBzZWxlY3QgaW5wdXQgaGVpZ2h0IG15IGNoYW5nZSBoZWlnaHQgdG9vLFxuICAgICAgICAvLyBzbyB3ZSBzaG91bGQgcmVzZXQgdGhlIHBvc2l0aW9uXG4gICAgICAgIHRoaXMucmVmcy5tZW51LnBvc2l0aW9uKCk7XG4gICAgfVxuXG4gICAgX3Jlc2V0U2VhcmNoKCkge1xuICAgICAgICB0aGlzLnNldCgna2V5d29yZHMnLCB1bmRlZmluZWQsIHthc3luYzogdHJ1ZX0pO1xuICAgIH1cblxuICAgIF9vbkNoYW5nZVNob3coYywgdmFsdWUpIHtcbiAgICAgICAgdGhpcy5zZXQoJ19zaG93JywgdmFsdWUpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBicmllZiBsZXQgdGhlIGJsdXIgbWV0aG9kIGNhbGxlZCBhZnRlciBzZWxlY3RcbiAgICAgKiBpZiB3ZSBzZWxlY3RlZCB0aGUgb3B0aW9uLCB0aGVuIHRoZSBrZXl3b3JkcyBoYXMgYmVlbiBzZXQgdG8gdW5kZWZpbmRcbiAgICAgKiBpbiB0aGlzIGNhc2UsIHdlIGRvIG5vdGhpbmcsIG90aGVyd2lzZSB3ZSByZXNldCBpdFxuICAgICAqL1xuICAgIF9vbkJsdXIoKSB7XG4gICAgICAgIGNvbnN0IHtrZXl3b3JkcywgYWxsb3dVbm1hdGNofSA9IHRoaXMuZ2V0KCk7XG4gICAgICAgIGlmIChhbGxvd1VubWF0Y2ggJiYga2V5d29yZHMgIT0gbnVsbCkge1xuICAgICAgICAgICAgdGhpcy5zZXQoe1xuICAgICAgICAgICAgICAgIHZhbHVlOiBrZXl3b3JkcyxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy50aW1lciA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgaWYgKHRoaXMuZ2V0KCdrZXl3b3JkcycpICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9yZXNldFNlYXJjaCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LCAyMDApO1xuICAgIH1cblxuICAgIF9zZWxlY3RJbnB1dChlKSB7XG4gICAgICAgIHNlbGVjdElucHV0KGUudGFyZ2V0KTsgXG4gICAgfVxuXG4gICAgX29uRm9jdXMoZSkge1xuICAgICAgICBjbGVhclRpbWVvdXQodGhpcy50aW1lcik7XG4gICAgfVxuXG4gICAgX29uRm9jdXNvdXQoKSB7XG4gICAgICAgIHRoaXMucmVmcy5kcm9wZG93bi5oaWRlKCk7XG4gICAgfVxuXG4gICAgX2RlbGV0ZSh2YWx1ZSwgZSkge1xuICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICBjb25zdCB2YWx1ZXMgPSB0aGlzLmdldCgndmFsdWUnKS5zbGljZSgwKTtcbiAgICAgICAgY29uc3QgaW5kZXggPSB2YWx1ZXMuaW5kZXhPZih2YWx1ZSk7XG4gICAgICAgIHZhbHVlcy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICB0aGlzLnNldCgndmFsdWUnLCB2YWx1ZXMpO1xuICAgICAgICB0aGlzLl9mb2N1c0lucHV0KCk7XG4gICAgfVxuXG4gICAgX2ZvY3VzSW5wdXQoKSB7XG4gICAgICAgIGlmICh0aGlzLmdldCgnZmlsdGVyYWJsZScpKSB7XG4gICAgICAgICAgICB0aGlzLnJlZnMuaW5wdXQuZm9jdXMoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIF9wb3NpdGlvbigpIHtcbiAgICAgICAgY29uc3QgbWVudUVsZW1lbnQgPSB0aGlzLnJlZnMubWVudS52ZHQudk5vZGUuY2hpbGRyZW4uZWxlbWVudDtcbiAgICAgICAgY29uc3Qgd2lkdGggPSB0aGlzLmVsZW1lbnQub2Zmc2V0V2lkdGg7XG4gICAgICAgIGNvbnN0IG1lbnVXaWR0aCA9IG1lbnVFbGVtZW50Lm9mZnNldFdpZHRoO1xuICAgICAgICBpZiAod2lkdGggPiBtZW51V2lkdGgpIHtcbiAgICAgICAgICAgIG1lbnVFbGVtZW50LnN0eWxlLndpZHRoID0gYCR7d2lkdGh9cHhgO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgX29uS2V5cHJlc3MoZSkge1xuICAgICAgICBpZiAoZS5rZXlDb2RlID09PSAxMykge1xuICAgICAgICAgICAgdGhpcy5yZWZzLndyYXBwZXIuY2xpY2soKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIF9vbktleWRvd24oZSkge1xuICAgICAgICBpZiAoZS5rZXlDb2RlID09PSA5KSB7IC8vIHRhYlxuICAgICAgICAgICAgdGhpcy5yZWZzLmRyb3Bkb3duLmhpZGUoKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuZXhwb3J0IHtTZWxlY3QsIE9wdGlvbiwgR3JvdXAgYXMgT3B0aW9uR3JvdXB9O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9zZWxlY3QvaW5kZXguanMiLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuICAgIGlmKG1vZHVsZS5ob3QpIHtcbiAgICAgIC8vIDE1Mjc1Nzk0NTQyODRcbiAgICAgIHZhciBjc3NSZWxvYWQgPSByZXF1aXJlKFwiIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtaG90LWxvYWRlci9ob3RNb2R1bGVSZXBsYWNlbWVudC5qc1wiKShtb2R1bGUuaWQsIHtcImZpbGVNYXBcIjpcIntmaWxlTmFtZX1cIn0pO1xuICAgICAgbW9kdWxlLmhvdC5kaXNwb3NlKGNzc1JlbG9hZCk7XG4gICAgICBtb2R1bGUuaG90LmFjY2VwdCh1bmRlZmluZWQsIGNzc1JlbG9hZCk7XG4gICAgfVxuICBcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2NvbXBvbmVudHMvc2VsZWN0L2luZGV4LnN0eWxcbi8vIG1vZHVsZSBpZCA9IC4vY29tcG9uZW50cy9zZWxlY3QvaW5kZXguc3R5bFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIiwiaW1wb3J0IElucHV0IGZyb20gJy4uL2lucHV0JztpbXBvcnQgRHJvcGRvd24sIHtEcm9wZG93bkl0ZW0sIERyb3Bkb3duTWVudX0gZnJvbSAnLi4vZHJvcGRvd24nO2ltcG9ydCB7aXNTdHJpbmdPck51bWJlciwgZ2V0VGV4dEJ5Q2hpbGRyZW4sIGFkZFN0eWxlLCBfJH0gZnJvbSAnLi4vdXRpbHMnO2ltcG9ydCBPcHRpb24gZnJvbSAnLi9vcHRpb24nO2ltcG9ydCBPcHRpb25Hcm91cCBmcm9tICcuL2dyb3VwJztcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKG9iaiwgX1ZkdCwgYmxvY2tzLCAkY2FsbGVlKSB7XG5fVmR0IHx8IChfVmR0ID0gVmR0KTtcbm9iaiB8fCAob2JqID0ge30pO1xuYmxvY2tzIHx8IChibG9ja3MgPSB7fSk7XG52YXIgaCA9IF9WZHQubWlzcy5oLCBoYyA9IF9WZHQubWlzcy5oYywgaHUgPSBfVmR0Lm1pc3MuaHUsIHdpZGdldHMgPSB0aGlzICYmIHRoaXMud2lkZ2V0cyB8fCB7fSwgX2Jsb2NrcyA9IHt9LCBfX2Jsb2NrcyA9IHt9LFxuX191ID0gX1ZkdC51dGlscywgZXh0ZW5kID0gX191LmV4dGVuZCwgX2UgPSBfX3UuZXJyb3IsIF9jbGFzc05hbWUgPSBfX3UuY2xhc3NOYW1lLFxuX19vID0gX191Lk9wdGlvbnMsIF9nZXRNb2RlbCA9IF9fby5nZXRNb2RlbCwgX3NldE1vZGVsID0gX19vLnNldE1vZGVsLFxuX3NldENoZWNrYm94TW9kZWwgPSBfX3Uuc2V0Q2hlY2tib3hNb2RlbCwgX2RldGVjdENoZWNrYm94Q2hlY2tlZCA9IF9fdS5kZXRlY3RDaGVja2JveENoZWNrZWQsXG5fc2V0U2VsZWN0TW9kZWwgPSBfX3Uuc2V0U2VsZWN0TW9kZWwsXG5zZWxmID0gdGhpcy5kYXRhLCAkdGhpcyA9IHRoaXMsIHNjb3BlID0gb2JqLCBBbmltYXRlID0gc2VsZiAmJiBzZWxmLkFuaW1hdGUsIHBhcmVudCA9ICgkY2FsbGVlIHx8IHt9KS5fc3VwZXJcblxuXG5cblxuXG5cbmNvbnN0IHtcbiAgICBjbGFzc05hbWUsIGNsZWFyYWJsZSwgZGF0YSwgdmFsdWUsIG11bHRpcGxlLFxuICAgIGRpc2FibGVkLCBmaWx0ZXJhYmxlLCBrZXl3b3JkcywgX3Nob3csXG4gICAgcGxhY2Vob2xkZXIsIHNpemUsIHN0eWxlLCBuYW1lLCBjaGlsZHJlbixcbiAgICBmbHVpZCwgd2lkdGgsIGFsbG93VW5tYXRjaCxcbn0gPSBzZWxmLmdldCgpO1xuXG5jb25zdCBfcGxhY2Vob2xkZXIgPSBwbGFjZWhvbGRlciA9PSBudWxsID9cbiAgICAoYWxsb3dVbm1hdGNoICYmIGZpbHRlcmFibGUpID8gXyQoJ+ivt+i+k+WFpeaIlumAieaLqScpIDogXyQoJ+ivt+mAieaLqScpIDpcbiAgICBwbGFjZWhvbGRlcjtcblxuY29uc3QgY2xhc3NOYW1lT2JqID0ge1xuICAgICdrLXNlbGVjdCc6IHRydWUsXG4gICAgW2NsYXNzTmFtZV06IGNsYXNzTmFtZSxcbiAgICAnay1kaXNhYmxlZCc6IGRpc2FibGVkLFxuICAgICdrLXNob3cnOiBfc2hvdyxcbiAgICAnay1jbGVhcmFibGUnOiBjbGVhcmFibGUsXG4gICAgW2BrLSR7c2l6ZX1gXTogc2l6ZSAhPT0gJ2RlZmF1bHQnLFxuICAgICdrLWZsdWlkJzogZmx1aWQsXG59O1xuXG5sZXQgaGFzVmFsdWUgPSB2YWx1ZSAhPSBudWxsICYmICghbXVsdGlwbGUgJiYgdmFsdWUgIT09ICcnIHx8IG11bHRpcGxlICYmIHZhbHVlLmxlbmd0aCk7XG5jb25zdCBpc0dyb3VwID0gQXJyYXkuaXNBcnJheShzZWxmLmdldCgnZGF0YS4wLmRhdGEnKSk7XG5cbmxldCBsYWJlbCA9IGlzU3RyaW5nT3JOdW1iZXIodmFsdWUpID8gdmFsdWUgOiBudWxsO1xubGV0IGxhYmVscyA9IFtdO1xuXG5jb25zdCBoYW5kbGVQcm9wcyA9IHByb3BzID0+IHtcbiAgICBsZXQgYWN0aXZlID0gZmFsc2U7XG4gICAgbGV0IHZhbGlkID0gZmFsc2U7XG5cbiAgICBpZiAoIW11bHRpcGxlKSB7XG4gICAgICAgIGlmIChwcm9wcy52YWx1ZSA9PT0gdmFsdWUpIHtcbiAgICAgICAgICAgIC8vIHNldCBsYWJlbFxuICAgICAgICAgICAgbGFiZWwgPSBwcm9wcy5sYWJlbDtcbiAgICAgICAgICAgIGFjdGl2ZSA9IHRydWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBhY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgIH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgICAgY29uc3QgaW5kZXggPSB2YWx1ZS5pbmRleE9mKHByb3BzLnZhbHVlKTtcbiAgICAgICAgaWYgKH5pbmRleCkge1xuICAgICAgICAgICAgLy8ga2VlcCBvcmRlciBjb25zaXN0ZW50XG4gICAgICAgICAgICBsYWJlbHNbaW5kZXhdID0gcHJvcHMubGFiZWw7XG4gICAgICAgICAgICBhY3RpdmUgPSB0cnVlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBsZXQgdG1wO1xuICAgIGlmIChcbiAgICAgICAgIWZpbHRlcmFibGUgJiYgXG4gICAgICAgIHByb3BzLmxhYmVsIHx8IFxuICAgICAgICBrZXl3b3JkcyA9PSBudWxsIHx8IFxuICAgICAgICB+cHJvcHMubGFiZWwudG9Mb3dlckNhc2UoKS5pbmRleE9mKCh0bXAgPSBrZXl3b3Jkcy50b0xvd2VyQ2FzZSgpKSkgfHwgXG4gICAgICAgIChcbiAgICAgICAgICAgIGlzU3RyaW5nT3JOdW1iZXIocHJvcHMudmFsdWUpICYmIFxuICAgICAgICAgICAgflN0cmluZyhwcm9wcy52YWx1ZSkudG9Mb3dlckNhc2UoKS5pbmRleE9mKHRtcClcbiAgICAgICAgKVxuICAgICkge1xuICAgICAgICB2YWxpZCA9IHRydWU7IFxuICAgIH1cblxuICAgIHJldHVybiB7YWN0aXZlLCB2YWxpZH07XG59O1xuXG5jb25zdCBPcHRpb25zID0gcHJvcHMgPT4ge1xuICAgIGNvbnN0IGRhdGEgPSBwcm9wcy5kYXRhO1xuICAgIGNvbnN0IHJldCA9IFtdO1xuICAgIGRhdGEuZm9yRWFjaCgoaXRlbSwgaW5kZXgpID0+IHtcbiAgICAgICAgLy8gZGVwcmVjYXRlIHRleHQsIHVzZSBsYWJlbCBpbnN0ZWFkIG9mXG4gICAgICAgIGlmIChpdGVtLnRleHQpIGl0ZW0ubGFiZWwgPSBpdGVtLnRleHQ7XG4gICAgICAgIFxuICAgICAgICBjb25zdCB7dmFsaWQsIGFjdGl2ZX0gPSBoYW5kbGVQcm9wcyhpdGVtKTtcbiAgICAgICAgaWYgKHZhbGlkKSB7XG4gICAgICAgICAgICByZXQucHVzaChcbiAgICAgICAgICAgICAgICBoKERyb3Bkb3duSXRlbSwgeydldi1zZWxlY3QnOiBmdW5jdGlvbigpIHt0cnkge3JldHVybiBbc2VsZi5fb25TZWxlY3QuYmluZChzZWxmLCBpdGVtLnZhbHVlKSBdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpLCAnZGlzYWJsZWQnOiBmdW5jdGlvbigpIHt0cnkge3JldHVybiBbaXRlbS5kaXNhYmxlZCBdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpLCAnY2xhc3NOYW1lJzogX2NsYXNzTmFtZShmdW5jdGlvbigpIHt0cnkge3JldHVybiBbeydrLWFjdGl2ZSc6IGFjdGl2ZX0gXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKSksICdoaWRlT25TZWxlY3QnOiBmdW5jdGlvbigpIHt0cnkge3JldHVybiBbIW11bHRpcGxlIF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcyksICdjaGlsZHJlbic6IGZ1bmN0aW9uKCkge3RyeSB7cmV0dXJuIFtpdGVtLnRlbXBsYXRlID8gaXRlbS50ZW1wbGF0ZShpdGVtLCBpbmRleCkgOiBpdGVtLmxhYmVsIF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcyksICdfY29udGV4dCc6ICR0aGlzfSlcbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiByZXQ7XG59XG5cbmNvbnN0IE9wdGlvbnNWTm9kZXMgPSAoe2NoaWxkcmVufSkgPT4ge1xuICAgIHJldHVybiBfX3UubWFwKGNoaWxkcmVuID8gKEFycmF5LmlzQXJyYXkoY2hpbGRyZW4pID8gY2hpbGRyZW4gOiBbY2hpbGRyZW5dKSA6IGNoaWxkcmVuLCB2Tm9kZSA9PiB7XG4gICAgICAgIGlmICh2Tm9kZS50YWcgPT09IE9wdGlvbikge1xuICAgICAgICAgICAgbGV0IHByb3BzID0gdk5vZGUucHJvcHM7XG4gICAgICAgICAgICBwcm9wcyA9IHtcbiAgICAgICAgICAgICAgICAuLi5wcm9wcywgXG4gICAgICAgICAgICAgICAgJ2V2LXNlbGVjdCc6IHNlbGYuX29uU2VsZWN0LmJpbmQoc2VsZiwgcHJvcHMudmFsdWUpLFxuICAgICAgICAgICAgICAgIGhpZGVPblNlbGVjdDogIW11bHRpcGxlLFxuICAgICAgICAgICAgICAgIGxhYmVsOiBwcm9wcy5sYWJlbCB8fCBnZXRUZXh0QnlDaGlsZHJlbihwcm9wcy5jaGlsZHJlbiksXG4gICAgICAgICAgICAgICAgY2hpbGRyZW46IHByb3BzLmNoaWxkcmVuIHx8IHByb3BzLmxhYmVsIFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGNvbnN0IHthY3RpdmUsIHZhbGlkfSA9IGhhbmRsZVByb3BzKHByb3BzKTtcbiAgICAgICAgICAgIGlmICghdmFsaWQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gaGMoJycpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBwcm9wcy5jbGFzc05hbWUgPSBfY2xhc3NOYW1lKHtcbiAgICAgICAgICAgICAgICAgICAgW3Byb3BzLmNsYXNzTmFtZV06IHByb3BzLmNsYXNzTmFtZSxcbiAgICAgICAgICAgICAgICAgICAgJ2stYWN0aXZlJzogYWN0aXZlLFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyByZXR1cm4gdGhlIGNsb25lZCB2Tm9kZVxuICAgICAgICAgICAgcmV0dXJuIGgoT3B0aW9uLCBwcm9wcyk7XG4gICAgICAgIH0gZWxzZSBpZiAodk5vZGUudGFnID09PSBPcHRpb25Hcm91cCkge1xuICAgICAgICAgICAgbGV0IHByb3BzID0gdk5vZGUucHJvcHM7XG4gICAgICAgICAgICBwcm9wcyA9IHtcbiAgICAgICAgICAgICAgICAuLi5wcm9wcyxcbiAgICAgICAgICAgICAgICBjaGlsZHJlbjogaChPcHRpb25zVk5vZGVzLCB7J2NoaWxkcmVuJzogZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW3Byb3BzLmNoaWxkcmVuIF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcyksICdfY29udGV4dCc6ICR0aGlzfSlcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICByZXR1cm4gaChPcHRpb25Hcm91cCwgcHJvcHMpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHZOb2RlO1xuICAgIH0pOyBcbn0gXG5cbmNvbnN0IE1lbnUgPSAoXG4gICAgaChEcm9wZG93bk1lbnUsIHsnZXYtJGNoYW5nZWQ6c2hvdyc6IGZ1bmN0aW9uKCkge3RyeSB7cmV0dXJuIFtzZWxmLl9wb3NpdGlvbiBdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpLCAnY2xhc3NOYW1lJzogJ2stc2VsZWN0LWRyb3Bkb3duJywgJ2V2LSRjaGFuZ2U6c2hvdyc6IGZ1bmN0aW9uKCkge3RyeSB7cmV0dXJuIFtzZWxmLl9vbkNoYW5nZVNob3cgXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKSwgJ2NoaWxkcmVuJzogW2Z1bmN0aW9uKCkge3RyeSB7cmV0dXJuIFshaXNHcm91cCBdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpID8gaChPcHRpb25zLCB7J2RhdGEnOiBmdW5jdGlvbigpIHt0cnkge3JldHVybiBbZGF0YSBdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpLCAnY2hpbGRyZW4nOiBudWxsLCAnX2NvbnRleHQnOiAkdGhpc30pIDogX1ZkdC51dGlscy5tYXAoZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW2RhdGEgXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKSwgZnVuY3Rpb24odmFsdWUsIGtleSkge1xucmV0dXJuIGgoT3B0aW9uR3JvdXAsIHsnbGFiZWwnOiBmdW5jdGlvbigpIHt0cnkge3JldHVybiBbdmFsdWUubGFiZWwgXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKSwgJ2NoaWxkcmVuJzogaChPcHRpb25zLCB7J2RhdGEnOiBmdW5jdGlvbigpIHt0cnkge3JldHVybiBbdmFsdWUuZGF0YSBdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpLCAnY2hpbGRyZW4nOiBudWxsLCAnX2NvbnRleHQnOiAkdGhpc30pLCAnX2NvbnRleHQnOiAkdGhpc30pO1xufSwgdGhpcyksIGgoT3B0aW9uc1ZOb2RlcywgeydjaGlsZHJlbic6IGZ1bmN0aW9uKCkge3RyeSB7cmV0dXJuIFtjaGlsZHJlbiBdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpLCAnX2NvbnRleHQnOiAkdGhpc30pXSwgJ19jb250ZXh0JzogJHRoaXN9LCBudWxsLCBudWxsLCBudWxsLCBmdW5jdGlvbihpKSB7d2lkZ2V0c1snbWVudSddID0gaX0pXG4pO1xuXG4vLyBpZiB0aGUgdmFsdWUgaXMgbm90IGluIG9wdGlvbnMsIHRoZW4gc2V0IGhhc1ZhbHVlIHRvIGZhbHNlXG5pZiAoaGFzVmFsdWUgJiYgIWxhYmVsICYmICFsYWJlbHMubGVuZ3RoKSB7XG4gICAgaGFzVmFsdWUgPSBmYWxzZTtcbn1cblxucmV0dXJuIGgoJ2RpdicsIHsnc3R5bGUnOiBmdW5jdGlvbigpIHt0cnkge3JldHVybiBbd2lkdGggIT0gbnVsbCA/IGFkZFN0eWxlKHN0eWxlLCB7d2lkdGg6IGAke3dpZHRofXB4YH0pIDogc3R5bGUgXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKSwgJ3RhYmluZGV4JzogZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW2Rpc2FibGVkID8gXCItMVwiIDogXCIwXCIgXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKSwgJ2V2LWtleXByZXNzJzogZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW3NlbGYuX29uS2V5cHJlc3MgXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKSwgJ2V2LWtleWRvd24nOiBmdW5jdGlvbigpIHt0cnkge3JldHVybiBbc2VsZi5fb25LZXlkb3duIF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcyl9LCBoKERyb3Bkb3duLCB7J3Bvc2l0aW9uJzogZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW3tteTogJ2xlZnQgdG9wJywgYXQ6ICdsZWZ0IGJvdHRvbSd9IF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcyksICd0cmlnZ2VyJzogJ2NsaWNrJywgJ2Rpc2FibGVkJzogZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW2Rpc2FibGVkIF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcyksICdjaGlsZHJlbic6IFtoKCdkaXYnLCB7J2V2LWNsaWNrJzogZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW3NlbGYuX2ZvY3VzSW5wdXQgXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKSwgJ3RhYmluZGV4JzogJy0xJ30sIFtoKCdpbnB1dCcsIHsndHlwZSc6ICdoaWRkZW4nLCAndmFsdWUnOiBmdW5jdGlvbigpIHt0cnkge3JldHVybiBbdmFsdWUgXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKSwgJ25hbWUnOiBmdW5jdGlvbigpIHt0cnkge3JldHVybiBbbmFtZSBdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpfSksIGZ1bmN0aW9uKCkge3RyeSB7cmV0dXJuIFshbXVsdGlwbGUgJiYgZmlsdGVyYWJsZSBdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpID8gaChJbnB1dCwgeyd2YWx1ZSc6IGZ1bmN0aW9uKCkge3RyeSB7cmV0dXJuIFtrZXl3b3JkcyA9PSBudWxsID8gbGFiZWwgOiBrZXl3b3JkcyBdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpLCAnZXYtaW5wdXQnOiBmdW5jdGlvbigpIHt0cnkge3JldHVybiBbc2VsZi5fb25TZWFyY2ggXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKSwgJ2V2LWJsdXInOiBmdW5jdGlvbigpIHt0cnkge3JldHVybiBbc2VsZi5fb25CbHVyIF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcyksICdldi1mb2N1cyc6IGZ1bmN0aW9uKCkge3RyeSB7cmV0dXJuIFtzZWxmLl9zZWxlY3RJbnB1dCBdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpLCAnZGlzYWJsZWQnOiBmdW5jdGlvbigpIHt0cnkge3JldHVybiBbZGlzYWJsZWQgXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKSwgJ3BsYWNlaG9sZGVyJzogZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW19wbGFjZWhvbGRlciBdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpLCAnc2l6ZSc6IGZ1bmN0aW9uKCkge3RyeSB7cmV0dXJuIFtzaXplIF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcyksICdmbHVpZCc6IGZ1bmN0aW9uKCkge3RyeSB7cmV0dXJuIFt0cnVlXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKSwgJ2NoaWxkcmVuJzogbnVsbCwgJ19jb250ZXh0JzogJHRoaXN9LCBudWxsLCBudWxsLCBudWxsLCBmdW5jdGlvbihpKSB7d2lkZ2V0c1snaW5wdXQnXSA9IGl9KSA6IGZ1bmN0aW9uKCkge3RyeSB7cmV0dXJuIFshZmlsdGVyYWJsZSAmJiAhaGFzVmFsdWUgXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKSA/IGgoJ3NwYW4nLCBudWxsLCBmdW5jdGlvbigpIHt0cnkge3JldHVybiBbX3BsYWNlaG9sZGVyIF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcyksICdrLXBsYWNlaG9sZGVyIGMtZWxsaXBzaXMnKSA6IGZ1bmN0aW9uKCkge3RyeSB7cmV0dXJuIFshbXVsdGlwbGUgXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKSA/IGgoJ3NwYW4nLCBudWxsLCBmdW5jdGlvbigpIHt0cnkge3JldHVybiBbbGFiZWwgXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKSwgJ2stdmFsdWUgYy1lbGxpcHNpcycpIDogaChBbmltYXRlLCB7J2E6dGFnJzogJ3NwYW4nLCAnYTpkaXNhYmxlZCc6IGZ1bmN0aW9uKCkge3RyeSB7cmV0dXJuIFt0cnVlXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKSwgJ2NsYXNzTmFtZSc6ICdrLXZhbHVlcycsICdjaGlsZHJlbic6IFtfVmR0LnV0aWxzLm1hcChmdW5jdGlvbigpIHt0cnkge3JldHVybiBbbGFiZWxzIF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcyksIGZ1bmN0aW9uKGl0ZW0sIGluZGV4KSB7XG5yZXR1cm4gaChBbmltYXRlLCB7J2E6dGFnJzogJ3NwYW4nLCAnY2xhc3NOYW1lJzogJ2stdGFnJywgJ2tleSc6IGZ1bmN0aW9uKCkge3RyeSB7cmV0dXJuIFt2YWx1ZVtpbmRleF0gXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKSwgJ2E6dHJhbnNpdGlvbic6ICdmYWRlJywgJ2NoaWxkcmVuJzogW2goJ3NwYW4nLCBudWxsLCBmdW5jdGlvbigpIHt0cnkge3JldHVybiBbaXRlbSBdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpLCAnay10ZXh0JyksIGgoJ2knLCB7J2V2LWNsaWNrJzogZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW3NlbGYuX2RlbGV0ZS5iaW5kKHNlbGYsIHZhbHVlW2luZGV4XSkgXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKX0sIG51bGwsICdrLWljb24gaW9uLWlvcy1jbG9zZS1lbXB0eScpXSwgJ19jb250ZXh0JzogJHRoaXN9KTtcbn0sIHRoaXMpLCBmdW5jdGlvbigpIHt0cnkge3JldHVybiBbZmlsdGVyYWJsZSBdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpID8gaChJbnB1dCwgeyd2YWx1ZSc6IGZ1bmN0aW9uKCkge3RyeSB7cmV0dXJuIFtrZXl3b3JkcyBdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpLCAnZXYtaW5wdXQnOiBmdW5jdGlvbigpIHt0cnkge3JldHVybiBbc2VsZi5fb25TZWFyY2ggXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKSwgJ2V2LWJsdXInOiBmdW5jdGlvbigpIHt0cnkge3JldHVybiBbc2VsZi5fb25CbHVyIF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcyksICdldi1mb2N1cyc6IGZ1bmN0aW9uKCkge3RyeSB7cmV0dXJuIFtzZWxmLl9vbkZvY3VzIF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcyksICdkaXNhYmxlZCc6IGZ1bmN0aW9uKCkge3RyeSB7cmV0dXJuIFtkaXNhYmxlZCBdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpLCAncGxhY2Vob2xkZXInOiBmdW5jdGlvbigpIHt0cnkge3JldHVybiBbIWhhc1ZhbHVlID8gX3BsYWNlaG9sZGVyIDogJycgXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKSwgJ2F1dG9XaWR0aCc6IGZ1bmN0aW9uKCkge3RyeSB7cmV0dXJuIFt0cnVlXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKSwgJ3NpemUnOiBmdW5jdGlvbigpIHt0cnkge3JldHVybiBbc2l6ZSBdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpLCAnY2hpbGRyZW4nOiBudWxsLCAnX2NvbnRleHQnOiAkdGhpc30sIG51bGwsIG51bGwsIG51bGwsIGZ1bmN0aW9uKGkpIHt3aWRnZXRzWydpbnB1dCddID0gaX0pIDogdW5kZWZpbmVkXSwgJ19jb250ZXh0JzogJHRoaXN9KSwgaCgnc3BhbicsIG51bGwsIFtmdW5jdGlvbigpIHt0cnkge3JldHVybiBbY2xlYXJhYmxlIF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcykgPyBoKCdpJywgeydldi1jbGljayc6IGZ1bmN0aW9uKCkge3RyeSB7cmV0dXJuIFtzZWxmLl9vbkNsZWFyIF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcyl9LCBudWxsLCBfY2xhc3NOYW1lKGZ1bmN0aW9uKCkge3RyeSB7cmV0dXJuIFt7XCJrLWNsZWFyIGlvbi1pb3MtY2xvc2VcIjogdHJ1ZSwgXCJrLXNob3dcIjogaGFzVmFsdWV9IF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcykpKSA6IHVuZGVmaW5lZCwgaCgnaScsIG51bGwsIG51bGwsICdrLWFycm93IGlvbi1hcnJvdy1kb3duLWInKV0sICdrLXN1ZmZpeCcpXSwgJ2std3JhcHBlcicsIG51bGwsIGZ1bmN0aW9uKGkpIHt3aWRnZXRzWyd3cmFwcGVyJ10gPSBpfSksIGZ1bmN0aW9uKCkge3RyeSB7cmV0dXJuIFtNZW51IFxuICAgIF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcyldLCAnX2NvbnRleHQnOiAkdGhpc30sIG51bGwsIG51bGwsIG51bGwsIGZ1bmN0aW9uKGkpIHt3aWRnZXRzWydkcm9wZG93biddID0gaX0pLCBfY2xhc3NOYW1lKGZ1bmN0aW9uKCkge3RyeSB7cmV0dXJuIFt7Li4uY2xhc3NOYW1lT2JqLCAnay1hY3RpdmUnOiBoYXNWYWx1ZX0gXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKSkpXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9zZWxlY3QvaW5kZXgudmR0IiwiaW1wb3J0IEludGFjdCBmcm9tICdpbnRhY3QnO1xuaW1wb3J0IHtEcm9wZG93bkl0ZW19IGZyb20gJy4uL2Ryb3Bkb3duJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgT3B0aW9uIGV4dGVuZHMgRHJvcGRvd25JdGVtIHtcblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9zZWxlY3Qvb3B0aW9uLmpzIiwiaW1wb3J0IEludGFjdCBmcm9tICdpbnRhY3QnO1xuaW1wb3J0IHRlbXBsYXRlIGZyb20gJy4vaW5kZXgudmR0JztcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vbGF5b3V0JztcbmltcG9ydCAnLi9pbmRleC5zdHlsJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBMYXlvdXQge1xuICAgIEBJbnRhY3QudGVtcGxhdGUoKVxuICAgIHN0YXRpYyB0ZW1wbGF0ZSA9IHRlbXBsYXRlO1xufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc2l0ZS9zcmMvcGFnZXMvZGVzaWduL2luZGV4LmpzIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cbiAgICBpZihtb2R1bGUuaG90KSB7XG4gICAgICAvLyAxNTI3NTc5NDUxNTM5XG4gICAgICB2YXIgY3NzUmVsb2FkID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWhvdC1sb2FkZXIvaG90TW9kdWxlUmVwbGFjZW1lbnQuanNcIikobW9kdWxlLmlkLCB7XCJmaWxlTWFwXCI6XCJ7ZmlsZU5hbWV9XCJ9KTtcbiAgICAgIG1vZHVsZS5ob3QuZGlzcG9zZShjc3NSZWxvYWQpO1xuICAgICAgbW9kdWxlLmhvdC5hY2NlcHQodW5kZWZpbmVkLCBjc3NSZWxvYWQpO1xuICAgIH1cbiAgXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zaXRlL3NyYy9wYWdlcy9kZXNpZ24vaW5kZXguc3R5bFxuLy8gbW9kdWxlIGlkID0gLi9zaXRlL3NyYy9wYWdlcy9kZXNpZ24vaW5kZXguc3R5bFxuLy8gbW9kdWxlIGNodW5rcyA9IDIiLCJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKG9iaiwgX1ZkdCwgYmxvY2tzLCAkY2FsbGVlKSB7XG5fVmR0IHx8IChfVmR0ID0gVmR0KTtcbm9iaiB8fCAob2JqID0ge30pO1xuYmxvY2tzIHx8IChibG9ja3MgPSB7fSk7XG52YXIgaCA9IF9WZHQubWlzcy5oLCBoYyA9IF9WZHQubWlzcy5oYywgaHUgPSBfVmR0Lm1pc3MuaHUsIHdpZGdldHMgPSB0aGlzICYmIHRoaXMud2lkZ2V0cyB8fCB7fSwgX2Jsb2NrcyA9IHt9LCBfX2Jsb2NrcyA9IHt9LFxuX191ID0gX1ZkdC51dGlscywgZXh0ZW5kID0gX191LmV4dGVuZCwgX2UgPSBfX3UuZXJyb3IsIF9jbGFzc05hbWUgPSBfX3UuY2xhc3NOYW1lLFxuX19vID0gX191Lk9wdGlvbnMsIF9nZXRNb2RlbCA9IF9fby5nZXRNb2RlbCwgX3NldE1vZGVsID0gX19vLnNldE1vZGVsLFxuX3NldENoZWNrYm94TW9kZWwgPSBfX3Uuc2V0Q2hlY2tib3hNb2RlbCwgX2RldGVjdENoZWNrYm94Q2hlY2tlZCA9IF9fdS5kZXRlY3RDaGVja2JveENoZWNrZWQsXG5fc2V0U2VsZWN0TW9kZWwgPSBfX3Uuc2V0U2VsZWN0TW9kZWwsXG5zZWxmID0gdGhpcy5kYXRhLCAkdGhpcyA9IHRoaXMsIHNjb3BlID0gb2JqLCBBbmltYXRlID0gc2VsZiAmJiBzZWxmLkFuaW1hdGUsIHBhcmVudCA9ICgkY2FsbGVlIHx8IHt9KS5fc3VwZXJcbnJldHVybiAoZnVuY3Rpb24oKSB7XG4gICAgdmFyIF9vYmogPSB7J2NsYXNzTmFtZSc6ICdkZXNpZ24tcGFnZScsICdjaGlsZHJlbic6IG51bGx9O1xuICAgIGlmIChfb2JqLmhhc093blByb3BlcnR5KFwiYXJndW1lbnRzXCIpKSB7XG4gICAgICAgIGV4dGVuZChfb2JqLCBfb2JqLmFyZ3VtZW50cyA9PT0gdHJ1ZSA/IG9iaiA6IF9vYmouYXJndW1lbnRzKTtcbiAgICAgICAgZGVsZXRlIF9vYmouYXJndW1lbnRzO1xuICAgIH1cbiAgICByZXR1cm4gcGFyZW50LmNhbGwodGhpcywgX29iaiwgX1ZkdCwgZnVuY3Rpb24oYmxvY2tzKSB7XG4gICAgdmFyIF9ibG9ja3MgPSB7fSwgX19ibG9ja3MgPSBleHRlbmQoe30sIGJsb2Nrcyk7XG4gICAgcmV0dXJuICgoX2Jsb2Nrc1tcImNvbnRlbnRcIl0gPSBmdW5jdGlvbihwYXJlbnQpIHtyZXR1cm4gaCgndWwnLCBudWxsLCBfVmR0LnV0aWxzLm1hcChmdW5jdGlvbigpIHt0cnkge3JldHVybiBbQXJyYXkuYXBwbHkobnVsbCwge2xlbmd0aDogOX0pIF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcyksIGZ1bmN0aW9uKHZhbHVlLCBrZXkpIHtcbnJldHVybiBoKCdsaScsIG51bGwsIG51bGwsIF9jbGFzc05hbWUoZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW1wiY29sb3IgY29sb3JcIiArIGtleSBdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpKSk7XG59LCB0aGlzKSk7fSkgJiYgKF9fYmxvY2tzW1wiY29udGVudFwiXSA9IGZ1bmN0aW9uKHBhcmVudCkge1xudmFyIHNlbGYgPSB0aGlzO1xucmV0dXJuIGJsb2Nrc1tcImNvbnRlbnRcIl0gPyBibG9ja3NbXCJjb250ZW50XCJdLmNhbGwodGhpcywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gX2Jsb2Nrc1tcImNvbnRlbnRcIl0uY2FsbChzZWxmLCBwYXJlbnQpO1xufSkgOiBfYmxvY2tzW1wiY29udGVudFwiXS5jYWxsKHRoaXMsIHBhcmVudCk7XG59KSwgX19ibG9ja3MpO1xufS5jYWxsKHRoaXMsIGJsb2NrcyksIHBhcmVudClcbn0pLmNhbGwodGhpcylcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zaXRlL3NyYy9wYWdlcy9kZXNpZ24vaW5kZXgudmR0IiwiaW1wb3J0IEludGFjdCBmcm9tICdpbnRhY3QnO1xuaW1wb3J0IHRlbXBsYXRlIGZyb20gJy4vbGF5b3V0LnZkdCc7XG5pbXBvcnQgJy4vbGF5b3V0LnN0eWwnO1xuXG5sZXQgdGhlbWUgPSAna3BjJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIEludGFjdCB7XG4gICAgQEludGFjdC50ZW1wbGF0ZSgpXG4gICAgc3RhdGljIHRlbXBsYXRlID0gdGVtcGxhdGU7XG5cbiAgICBkZWZhdWx0cygpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHRoZW1lOiB0aGVtZSxcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBfaW5pdCgpIHtcbiAgICAgICAgdGhpcy5vbignJGNoYW5nZTp0aGVtZScsIChjLCB2LCBvKSA9PiB7XG4gICAgICAgICAgICB0aGlzLl9jaGFuZ2VUaGVtZSh2LCBvKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgX21vdW50KCkge1xuICAgICAgICB0aGlzLiRib3JkZXIgPSB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvcignLmJvcmRlcicpO1xuICAgICAgICB0aGlzLl91cGRhdGVCb3JkZXIoKTtcbiAgICAgICAgdGhpcy5saW5rID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbGlua1tyZWw9c3R5bGVzaGVldF0nKTtcbiAgICB9XG5cbiAgICBfY2hhbmdlVGhlbWUobmV3VGhlbWUsIG9sZFRoZW1lKSB7XG4gICAgICAgIHRoaXMubGluay5ocmVmID0gdGhpcy5saW5rLmhyZWYucmVwbGFjZShgdGhlbWUtJHtvbGRUaGVtZX1gLCBgdGhlbWUtJHtuZXdUaGVtZX1gKTtcbiAgICAgICAgdGhlbWUgPSBuZXdUaGVtZTtcbiAgICB9XG5cbiAgICBfdXBkYXRlQm9yZGVyKCkge1xuICAgICAgICAvLyBjb25zdCAkbmF2ID0gdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hY3RpdmUnKTtcbiAgICAgICAgLy8gbGV0IHdpZHRoID0gMDtcbiAgICAgICAgLy8gbGV0IGxlZnQgPSAwO1xuICAgICAgICAvLyBpZiAoJG5hdikge1xuICAgICAgICAgICAgLy8gbGVmdCA9ICRuYXYucG9zaXRpb24oKS5sZWZ0O1xuICAgICAgICAgICAgLy8gd2lkdGggPSAkbmF2Lm91dGVyV2lkdGgoKTtcbiAgICAgICAgLy8gfVxuICAgICAgICAvLyB0aGlzLiRib3JkZXIuYWRkQ2xhc3MoJ3RyYW5zaXRpb24nKTtcbiAgICAgICAgLy8gdGhpcy4kYm9yZGVyLmNzcyh7d2lkdGg6IHdpZHRoLCBsZWZ0OiBsZWZ0fSk7XG4gICAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc2l0ZS9zcmMvcGFnZXMvbGF5b3V0LmpzIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cbiAgICBpZihtb2R1bGUuaG90KSB7XG4gICAgICAvLyAxNTI3NTc5NDUyNDI5XG4gICAgICB2YXIgY3NzUmVsb2FkID0gcmVxdWlyZShcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWhvdC1sb2FkZXIvaG90TW9kdWxlUmVwbGFjZW1lbnQuanNcIikobW9kdWxlLmlkLCB7XCJmaWxlTWFwXCI6XCJ7ZmlsZU5hbWV9XCJ9KTtcbiAgICAgIG1vZHVsZS5ob3QuZGlzcG9zZShjc3NSZWxvYWQpO1xuICAgICAgbW9kdWxlLmhvdC5hY2NlcHQodW5kZWZpbmVkLCBjc3NSZWxvYWQpO1xuICAgIH1cbiAgXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zaXRlL3NyYy9wYWdlcy9sYXlvdXQuc3R5bFxuLy8gbW9kdWxlIGlkID0gLi9zaXRlL3NyYy9wYWdlcy9sYXlvdXQuc3R5bFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIiwiaW1wb3J0IExpbmsgZnJvbSAna3BjL2NvbXBvbmVudHMvbGluayc7aW1wb3J0IHtTZWxlY3QsIE9wdGlvbn0gZnJvbSAna3BjL2NvbXBvbmVudHMvc2VsZWN0JztcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKG9iaiwgX1ZkdCwgYmxvY2tzLCAkY2FsbGVlKSB7XG5fVmR0IHx8IChfVmR0ID0gVmR0KTtcbm9iaiB8fCAob2JqID0ge30pO1xuYmxvY2tzIHx8IChibG9ja3MgPSB7fSk7XG52YXIgaCA9IF9WZHQubWlzcy5oLCBoYyA9IF9WZHQubWlzcy5oYywgaHUgPSBfVmR0Lm1pc3MuaHUsIHdpZGdldHMgPSB0aGlzICYmIHRoaXMud2lkZ2V0cyB8fCB7fSwgX2Jsb2NrcyA9IHt9LCBfX2Jsb2NrcyA9IHt9LFxuX191ID0gX1ZkdC51dGlscywgZXh0ZW5kID0gX191LmV4dGVuZCwgX2UgPSBfX3UuZXJyb3IsIF9jbGFzc05hbWUgPSBfX3UuY2xhc3NOYW1lLFxuX19vID0gX191Lk9wdGlvbnMsIF9nZXRNb2RlbCA9IF9fby5nZXRNb2RlbCwgX3NldE1vZGVsID0gX19vLnNldE1vZGVsLFxuX3NldENoZWNrYm94TW9kZWwgPSBfX3Uuc2V0Q2hlY2tib3hNb2RlbCwgX2RldGVjdENoZWNrYm94Q2hlY2tlZCA9IF9fdS5kZXRlY3RDaGVja2JveENoZWNrZWQsXG5fc2V0U2VsZWN0TW9kZWwgPSBfX3Uuc2V0U2VsZWN0TW9kZWwsXG5zZWxmID0gdGhpcy5kYXRhLCAkdGhpcyA9IHRoaXMsIHNjb3BlID0gb2JqLCBBbmltYXRlID0gc2VsZiAmJiBzZWxmLkFuaW1hdGUsIHBhcmVudCA9ICgkY2FsbGVlIHx8IHt9KS5fc3VwZXJcblxuXG5cbmNvbnN0IG5hdiA9IFtcbiAgICB7XG4gICAgICAgIHRpdGxlOiAn5pWZ56iLJyxcbiAgICAgICAgaHJlZjogJy9kb2NzL2dldHRpbmctc3RhcnRlZC8nXG4gICAgfSxcbiAgICAvKiB7ICovXG4gICAgICAgIC8qIHRpdGxlOiAn6K6+6K6h6K+t6KiAJywgKi9cbiAgICAgICAgLyogaHJlZjogJy9kZXNpZ24nLCAqL1xuICAgIC8qIH0sICovXG4gICAgLyogeyAqL1xuICAgICAgICAvKiB0aXRsZTogJ0FQSScsICovXG4gICAgICAgIC8qIGhyZWY6ICdhcGknICovXG4gICAgLyogfSwgKi9cbiAgICAvLyB7XG4gICAgICAgIC8vIHRpdGxlOiAn56S65L6LJyxcbiAgICAgICAgLy8gaHJlZjogJ2V4YW1wbGVzJ1xuICAgIC8vIH1cbl07XG5cbnJldHVybiBoKCdkaXYnLCBudWxsLCBbaCgnZGl2JywgbnVsbCwgaCgnaGVhZGVyJywgbnVsbCwgKF9ibG9ja3NbXCJoZWFkZXJcIl0gPSBmdW5jdGlvbihwYXJlbnQpIHtyZXR1cm4gW2goTGluaywgeydjbGFzc05hbWUnOiAnbG9nbycsICdocmVmJzogJy8nLCAnY2hpbGRyZW4nOiAnS1BDJywgJ19jb250ZXh0JzogJHRoaXN9KSwgaCgnZGl2JywgbnVsbCwgW2goJ25hdicsIG51bGwsIFtfVmR0LnV0aWxzLm1hcChmdW5jdGlvbigpIHt0cnkge3JldHVybiBbbmF2IF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcyksIGZ1bmN0aW9uKHZhbHVlLCBrZXkpIHtcbnJldHVybiBoKExpbmssIHsnY2xhc3NOYW1lJzogX2NsYXNzTmFtZShmdW5jdGlvbigpIHt0cnkge3JldHVybiBbe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY3RpdmU6IHZhbHVlLmhyZWYgPT09IHNjb3BlLm5hdkluZGV4XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpKSwgJ2hyZWYnOiBmdW5jdGlvbigpIHt0cnkge3JldHVybiBbYCR7cHJvY2Vzcy5VUkxfUFJFRklYfSR7dmFsdWUuaHJlZn1gIF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcyksICdjaGlsZHJlbic6IGZ1bmN0aW9uKCkge3RyeSB7cmV0dXJuIFt2YWx1ZS50aXRsZSBdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpLCAnX2NvbnRleHQnOiAkdGhpc30pO1xufSwgdGhpcyksIGgoJ2RpdicsIG51bGwsIG51bGwsICdib3JkZXInKV0pLCBoKCdzcGFuJywgbnVsbCwgJ+WIh+aNouS4u+mimO+8micsICdsYWJlbCcpLCBoKFNlbGVjdCwgeyd2LW1vZGVsJzogJ3RoZW1lJywgJ3dpZHRoJzogJzEwMCcsICdjaGlsZHJlbic6IFtoKE9wdGlvbiwgeyd2YWx1ZSc6ICdrcGMnLCAnY2hpbGRyZW4nOiAnZGVmYXVsdCcsICdfY29udGV4dCc6ICR0aGlzfSksIGgoT3B0aW9uLCB7J3ZhbHVlJzogJ2tzeXVuJywgJ2NoaWxkcmVuJzogJ2tzeXVuJywgJ19jb250ZXh0JzogJHRoaXN9KV0sICdfY29udGV4dCc6ICR0aGlzLCB2YWx1ZTogX2dldE1vZGVsKHNlbGYsICd0aGVtZScpLCAnZXYtJGNoYW5nZTp2YWx1ZSc6IGZ1bmN0aW9uKF9fYywgX19uKSB7IF9zZXRNb2RlbChzZWxmLCAndGhlbWUnLCBfX24sICR0aGlzKSB9fSldLCAncmlnaHQnKV07fSkgJiYgKF9fYmxvY2tzW1wiaGVhZGVyXCJdID0gZnVuY3Rpb24ocGFyZW50KSB7XG52YXIgc2VsZiA9IHRoaXM7XG5yZXR1cm4gYmxvY2tzW1wiaGVhZGVyXCJdID8gYmxvY2tzW1wiaGVhZGVyXCJdLmNhbGwodGhpcywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gX2Jsb2Nrc1tcImhlYWRlclwiXS5jYWxsKHNlbGYsIHBhcmVudCk7XG59KSA6IF9ibG9ja3NbXCJoZWFkZXJcIl0uY2FsbCh0aGlzLCBwYXJlbnQpO1xufSkgJiYgX19ibG9ja3NbXCJoZWFkZXJcIl0uY2FsbCh0aGlzKSksICdoZWFkZXItd3JhcHBlcicpLCBoKCdkaXYnLCBudWxsLCAoX2Jsb2Nrc1tcImNvbnRlbnRcIl0gPSBmdW5jdGlvbihwYXJlbnQpIHtyZXR1cm4gbnVsbDt9KSAmJiAoX19ibG9ja3NbXCJjb250ZW50XCJdID0gZnVuY3Rpb24ocGFyZW50KSB7XG52YXIgc2VsZiA9IHRoaXM7XG5yZXR1cm4gYmxvY2tzW1wiY29udGVudFwiXSA/IGJsb2Nrc1tcImNvbnRlbnRcIl0uY2FsbCh0aGlzLCBmdW5jdGlvbigpIHtcbnJldHVybiBfYmxvY2tzW1wiY29udGVudFwiXS5jYWxsKHNlbGYsIHBhcmVudCk7XG59KSA6IF9ibG9ja3NbXCJjb250ZW50XCJdLmNhbGwodGhpcywgcGFyZW50KTtcbn0pICYmIF9fYmxvY2tzW1wiY29udGVudFwiXS5jYWxsKHRoaXMpLCAnY29udGVudC13cmFwcGVyJywgbnVsbCwgZnVuY3Rpb24oaSkge3dpZGdldHNbJ3dyYXBwZXInXSA9IGl9KV0sIF9jbGFzc05hbWUoZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW3snbWFpbi13cmFwcGVyJzogdHJ1ZSwgW3Njb3BlLmNsYXNzTmFtZV06IHNjb3BlLmNsYXNzTmFtZX0gXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKSkpXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc2l0ZS9zcmMvcGFnZXMvbGF5b3V0LnZkdCJdLCJzb3VyY2VSb290IjoiIn0=