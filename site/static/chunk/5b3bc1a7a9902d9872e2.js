webpackJsonp([17,23,102],{

/***/ "./components/table/column.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _intact = __webpack_require__("./node_modules/intact-vue/src/index.js");

var _intact2 = _interopRequireDefault(_intact);

var _column = __webpack_require__("./components/table/column.vdt");

var _column2 = _interopRequireDefault(_column);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TableColumn = function (_Intact) {
    _inherits(TableColumn, _Intact);

    function TableColumn() {
        _classCallCheck(this, TableColumn);

        return _possibleConstructorReturn(this, (TableColumn.__proto__ || Object.getPrototypeOf(TableColumn)).apply(this, arguments));
    }

    _createClass(TableColumn, [{
        key: 'defaults',
        value: function defaults() {
            return {
                title: '',
                template: function template(data, index) {},

                key: '',
                sortable: false,
                width: undefined,
                groups: undefined,

                // passed by parent
                $parent: undefined
            };
        }
    }, {
        key: 'onClick',
        value: function onClick(e) {
            this.trigger('click', e);
        }
    }, {
        key: 'onDragStart',
        value: function onDragStart(e) {
            this.trigger('dragStart', e);
        }
    }, {
        key: 'template',
        get: function get() {
            return _column2.default;
        }
    }]);

    return TableColumn;
}(_intact2.default);

exports.default = TableColumn;
module.exports = exports['default'];

/***/ }),

/***/ "./components/table/column.vdt":
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

    var _self$get = self.get(),
        width = _self$get.width,
        title = _self$get.title,
        key = _self$get.key,
        sortable = _self$get.sortable,
        groups = _self$get.groups,
        $parent = _self$get.$parent;

    var _$parent$get = $parent.get(),
        sort = _$parent$get.sort,
        resizable = _$parent$get.resizable;

    return h('th', { 'width': function () {
            try {
                return [width][0];
            } catch (e) {
                _e(e);
            }
        }.call(this), 'title': function () {
            try {
                return [title][0];
            } catch (e) {
                _e(e);
            }
        }.call(this), 'ev-click': function () {
            try {
                return [self.onClick][0];
            } catch (e) {
                _e(e);
            }
        }.call(this) }, [function () {
        try {
            return [resizable][0];
        } catch (e) {
            _e(e);
        }
    }.call(this) ? h('div', { 'ev-mousedown': function () {
            try {
                return [self.onDragStart][0];
            } catch (e) {
                _e(e);
            }
        }.call(this) }, null, 'k-resize') : undefined, h('div', null, [function () {
        try {
            return [!groups][0];
        } catch (e) {
            _e(e);
        }
    }.call(this) ? h('div', null, function () {
        try {
            return [title][0];
        } catch (e) {
            _e(e);
        }
    }.call(this), 'c-ellipsis') : undefined, '\n        ', function () {
        var _this = this;

        try {
            return [function () {
                if (sortable) {
                    var type = key === sort.key ? sort.type : '';
                    return h('div', null, h('i', null, null, _className(function () {
                        try {
                            var _ref;

                            return [(_ref = {
                                'k-icon': true
                            }, _defineProperty(_ref, 'icon-' + type, type), _defineProperty(_ref, 'icon-sortable', !type), _ref)][0];
                        } catch (e) {
                            _e(e);
                        }
                    }.call(_this))), _className(function () {
                        try {
                            return [_defineProperty({ 'k-sort': true }, 'k-' + type, type)][0];
                        } catch (e) {
                            _e(e);
                        }
                    }.call(_this)));
                }
            }()][0];
        } catch (e) {
            _e(e);
        }
    }.call(this), '\n    '], 'k-th')], _className(function () {
        try {
            return [{ 'k-sortable': sortable }][0];
        } catch (e) {
            _e(e);
        }
    }.call(this)));
};

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

module.exports = exports['default'];

/***/ }),

/***/ "./components/table/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.TableColumn = exports.Table = exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _desc, _value, _class, _class2, _temp;

var _intact = __webpack_require__("./node_modules/intact-vue/src/index.js");

var _intact2 = _interopRequireDefault(_intact);

var _index = __webpack_require__("./components/table/index.vdt");

var _index2 = _interopRequireDefault(_index);

__webpack_require__("./components/table/index.styl");

var _column = __webpack_require__("./components/table/column.js");

var _column2 = _interopRequireDefault(_column);

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

var scrollBarWidth = undefined;

var MIN_WIDTH = 40;
var slice = Array.prototype.slice;

var Table = (_dec = _intact2.default.template(), (_class = (_temp = _class2 = function (_Intact) {
    _inherits(Table, _Intact);

    function Table() {
        _classCallCheck(this, Table);

        return _possibleConstructorReturn(this, (Table.__proto__ || Object.getPrototypeOf(Table)).apply(this, arguments));
    }

    _createClass(Table, [{
        key: 'defaults',
        value: function defaults() {
            return {
                data: [],
                scheme: {},
                checkType: 'checkbox', // radio | none 
                rowKey: function rowKey(value, index) {
                    return index;
                },
                rowClassName: function rowClassName(value, index) {},
                // add className for tr
                checkedKeys: [], // for checkbox
                checkedKey: undefined, // for radio
                rowCheckable: true, // click row to check
                rowExpandable: true, // click row to expand
                noDataTemplate: '/(ㄒoㄒ)/~~ 没有找到亲要的数据哦~',
                disableRow: function disableRow(data, index) {
                    return false;
                },

                sort: {},
                groups: {},
                resizable: false,
                expand: undefined, // expand template callback
                expandedKeys: [],
                type: 'default', // default border
                fixHeader: false,

                _padding: 0,
                _disabledAmount: 0
            };
        }
    }, {
        key: '_init',
        value: function _init() {
            var _this2 = this;

            // keep the event consistent
            this.on('$change:checkedKeys', function (c, newValue, oldValue) {
                _this2.trigger('$change:checked', c, newValue, oldValue);
            });
            this.on('$change:checkedKey', function (c, newValue, oldValue) {
                _this2.trigger('$change:checked', c, [newValue], [oldValue]);
            });
            // calculate padding of header when some props have changed
            ['data', 'fixHeader'].forEach(function (item) {
                _this2.on('$changed:' + item, _this2._calcHeaderPadding);
            });
            // update disabled amount when some props have changed
            ['data', 'disableRow'].forEach(function (item) {
                _this2.on('$change:' + item, _this2._updateDisabledAmount);
            });
            this._updateDisabledAmount();

            this._move = this._move.bind(this);
            this._dragEnd = this._dragEnd.bind(this);
        }
    }, {
        key: '_mount',
        value: function _mount() {
            if (scrollBarWidth === undefined) {
                scrollBarWidth = getScrollbarWidth();
            }
            this._calcHeaderPadding();
        }
    }, {
        key: 'isCheckAll',
        value: function isCheckAll() {
            var checkedKeys = this.get('checkedKeys');
            var dataLength = this.get('data').length;
            var disabledAmount = this.get("_disabledAmount");
            var amount = dataLength - disabledAmount;
            return amount && checkedKeys.length === amount;
        }
    }, {
        key: 'isChecked',
        value: function isChecked(key) {
            var _get = this.get(),
                checkType = _get.checkType,
                checkedKey = _get.checkedKey,
                checkedKeys = _get.checkedKeys;

            if (checkType === 'checkbox') {
                return ~checkedKeys.indexOf(key);
            } else if (checkType === 'radio') {
                return checkedKey === key;
            }
            return false;
        }
    }, {
        key: 'checkAll',
        value: function checkAll() {
            var _this3 = this;

            var rowKey = this.get('rowKey');
            var disableRow = this.get('disableRow');
            var checkedKeys = [];
            this.get('data').forEach(function (value, index) {
                if (!disableRow.call(_this3, value, index)) {
                    checkedKeys.push(rowKey.call(_this3, value, index));
                }
            });
            this.set('checkedKeys', checkedKeys);
        }
    }, {
        key: 'uncheckAll',
        value: function uncheckAll() {
            this.set('checkedKeys', []);
        }
    }, {
        key: 'checkRow',
        value: function checkRow(key) {
            this._checkUncheckRow(key, true, false);
        }
    }, {
        key: 'uncheckRow',
        value: function uncheckRow(key) {
            this._checkUncheckRow(key, false, false);
        }
    }, {
        key: 'shrinkRow',
        value: function shrinkRow(key) {
            this._expandShrinkRow(key, false, false);
        }
    }, {
        key: 'expandRow',
        value: function expandRow(key) {
            this._expandShrinkRow(key, true, false);
        }

        /**
         * @brief get the checked data
         * @return {Array}
         */

    }, {
        key: 'getCheckedData',
        value: function getCheckedData() {
            var _this4 = this;

            var rowKey = this.get('rowKey');
            var checkType = this.get('checkType');
            if (checkType === 'checkbox') {
                var checkedKeys = this.get('checkedKeys');
                var checkedKeysMap = {};
                checkedKeys.forEach(function (item) {
                    checkedKeysMap[item] = true;
                });
                return this.get('data').filter(function (value, index) {
                    var key = rowKey.call(_this4, value, index);
                    return checkedKeysMap[key];
                });
            } else if (checkType === 'radio') {
                var checkedKey = this.get('checkedKey');
                return this.get('data').filter(function (value, index) {
                    return rowKey.call(_this4, value, index) === checkedKey;
                });
            } else {
                return [];
            }
        }
    }, {
        key: '_calcHeaderPadding',
        value: function _calcHeaderPadding() {
            if (this.get('fixHeader')) {
                var tableHeight = this.table.offsetHeight;
                var containerHeight = this.scroll.offsetHeight;
                var headerHeight = this.header.offsetHeight;
                this.set('_padding', tableHeight - headerHeight > containerHeight ? scrollBarWidth : 0);
            }
        }
    }, {
        key: '_updateDisabledAmount',
        value: function _updateDisabledAmount() {
            var _this5 = this;

            var disabledAmount = 0;
            var disableRow = this.get('disableRow');
            this.get('data').forEach(function (item, index) {
                if (disableRow.call(_this5, item, index)) {
                    disabledAmount++;
                }
            });
            this.set('_disabledAmount', disabledAmount);
        }
    }, {
        key: '_toggleCheckAll',
        value: function _toggleCheckAll(c, checked) {
            if (checked) {
                this.checkAll();
            } else {
                this.uncheckAll();
            }
        }
    }, {
        key: '_clickRow',
        value: function _clickRow(value, index, key, e) {
            // if is from checkbox or radio then do nothing
            if (e.target.tagName.toLowerCase() === 'input') return;
            if (this.get('disableRow').call(this, value, index)) return;

            if (this.get('rowCheckable')) {
                this._checkUncheckRow(key);
            }

            if (this.get('rowExpandable')) {
                this._expandShrinkRow(key);
            }
        }
    }, {
        key: '_checkUncheckRow',
        value: function _checkUncheckRow(key) {
            var isCheck = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
            var isToggle = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

            var checkType = this.get('checkType');
            if (checkType === 'checkbox') {
                var checkedKeys = this.get('checkedKeys').slice(0);
                var i = checkedKeys.indexOf(key);
                if ((!isCheck || isToggle) && i > -1) {
                    checkedKeys.splice(i, 1);
                    this.set('checkedKeys', checkedKeys);
                } else if (isCheck || isToggle) {
                    checkedKeys.push(key);
                    this.set('checkedKeys', checkedKeys);
                }
            } else if (checkType === 'radio') {
                this.set('checkedKey', key);
            }
        }
    }, {
        key: '_expandShrinkRow',
        value: function _expandShrinkRow(key) {
            var isExpand = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
            var isToggle = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

            if (typeof this.get('expand') !== 'function') return;

            var expandedKeys = this.get('expandedKeys').slice(0);
            var i = expandedKeys.indexOf(key);
            if ((!isExpand || isToggle) && i > -1) {
                expandedKeys.splice(i, 1);
                this.set('expandedKeys', expandedKeys);
            } else if (isExpand || isToggle) {
                expandedKeys.push(key);
                this.set('expandedKeys', expandedKeys);
            }
        }
    }, {
        key: '_sort',
        value: function _sort(key, value) {
            var sort = Object.assign({}, this.get('sort'));
            sort.key = key;
            sort.type = sort.type === 'desc' ? 'asc' : 'desc';
            this.set('sort', sort);
        }
    }, {
        key: '_dragStart',
        value: function _dragStart(e) {
            // left key
            if (e.which !== 1) return;

            this._resizing = true;
            this._containerWidth = this.element.offsetWidth;
            this._x = e.clientX;

            var currentTh = e.target.parentNode;
            var prevTh = currentTh.previousElementSibling;

            this._currentThs = [currentTh];
            this._prevThs = [prevTh];
            this._tables = [this.table];

            if (this.get('fixHeader')) {
                var ths = this.table.children[0].getElementsByTagName('th');
                var fixThs = currentTh.parentNode.children;
                var index = slice.call(fixThs).indexOf(currentTh);
                this._currentThs.push(ths[index]);
                this._prevThs.push(ths[index - 1]);
                // this._tables.push(this.header.children[0]);
                // if fixHeader we should change the width of header and scroll
                this._tables = [this.header, this.scroll];
            }

            document.addEventListener('mousemove', this._move);
            document.addEventListener('mouseup', this._dragEnd);
        }
    }, {
        key: '_move',
        value: function _move(e) {
            if (this._resizing) {
                var delX = e.clientX - this._x;
                var prevWidth = this._prevThs[0].offsetWidth + delX;
                var tableWidth = this._tables[0].offsetWidth + delX;

                if (prevWidth < MIN_WIDTH) return;

                this._prevThs.forEach(function (item) {
                    item.style.width = prevWidth + 'px';
                });

                if (this._containerWidth >= tableWidth) {
                    this._tables.forEach(function (item) {
                        item.style.width = '100%';
                    });
                } else {
                    this._tables.forEach(function (item) {
                        item.style.width = tableWidth + 'px';
                    });
                }

                this._x = e.clientX;
            }
        }
    }, {
        key: '_dragEnd',
        value: function _dragEnd(e) {
            if (this._resizing) {
                this._resizing = false;
                document.removeEventListener('mousemove', this._move);
                document.removeEventListener('mouseup', this._dragEnd);
            }
        }
    }, {
        key: '_destroy',
        value: function _destroy() {
            this._dragEnd();
        }
    }, {
        key: 'template',
        get: function get() {
            return _index2.default;
        }
    }]);

    return Table;
}(_intact2.default), _class2.propTypes = {
    rowCheckable: Boolean,
    rowExpandable: Boolean,
    resizable: Boolean,
    fixHeader: Boolean
}, _temp), (_applyDecoratedDescriptor(_class.prototype, 'template', [_dec], Object.getOwnPropertyDescriptor(_class.prototype, 'template'), _class.prototype)), _class));
exports.default = Table;
exports.Table = Table;
exports.TableColumn = _column2.default;

// reference: http://stackoverflow.com/questions/13382516/getting-scroll-bar-width-using-javascript

function getScrollbarWidth() {
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

    return widthNoScroll - widthWithScroll;
}

/***/ }),

/***/ "./components/table/index.vdt":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = function (obj, _Vdt, blocks, $callee) {
    var _this = this,
        _classNameObj;

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
        checkType = _self$get.checkType,
        scheme = _self$get.scheme,
        checkedKeys = _self$get.checkedKeys,
        data = _self$get.data,
        rowKey = _self$get.rowKey,
        className = _self$get.className,
        fixHeader = _self$get.fixHeader,
        noDataTemplate = _self$get.noDataTemplate,
        disableRow = _self$get.disableRow,
        groups = _self$get.groups,
        resizable = _self$get.resizable,
        expand = _self$get.expand,
        expandedKeys = _self$get.expandedKeys,
        type = _self$get.type,
        style = _self$get.style,
        rowClassName = _self$get.rowClassName,
        children = _self$get.children,
        sort = _self$get.sort;

    var colSpan = checkType === 'checkbox' || checkType === 'radio' ? 1 : 0;
    var expandable = typeof expand === 'function';
    var _scheme = {};

    var theadCreator = function theadCreator() {
        return h('thead', null, h('tr', null, [function () {
            try {
                return [checkType === 'checkbox'][0];
            } catch (e) {
                _e(e);
            }
        }.call(_this) ? h('th', null, h(_checkbox2.default, { 'value': function () {
                try {
                    return [self.isCheckAll()][0];
                } catch (e) {
                    _e(e);
                }
            }.call(_this), 'ev-$change:value': function () {
                try {
                    return [self._toggleCheckAll][0];
                } catch (e) {
                    _e(e);
                }
            }.call(_this), 'children': null, '_context': _this }), 'k-th-check') : function () {
            try {
                return [checkType === 'radio'][0];
            } catch (e) {
                _e(e);
            }
        }.call(_this) ? h('th', null, null, 'k-th-check') : undefined, '\n        ', function () {
            var _this2 = this;

            try {
                return [__u.map(scheme, function (item, key) {
                    colSpan++;

                    if (!__u.isObject(item)) {
                        item = { title: item };
                    }

                    return h(_column2.default, _extends({}, function () {
                        try {
                            return [item][0];
                        } catch (e) {
                            _e(e);
                        }
                    }.call(_this2), { 'key': function () {
                            try {
                                return [key][0];
                            } catch (e) {
                                _e(e);
                            }
                        }.call(_this2), '$parent': function () {
                            try {
                                return [self][0];
                            } catch (e) {
                                _e(e);
                            }
                        }.call(_this2), 'ev-click': function () {
                            try {
                                return [item.sortable ? self._sort.bind(self, key, item) : undefined][0];
                            } catch (e) {
                                _e(e);
                            }
                        }.call(_this2), 'ev-dragStart': function () {
                            try {
                                return [self._dragStart][0];
                            } catch (e) {
                                _e(e);
                            }
                        }.call(_this2), 'children': null, '_context': _this2 }));
                })][0];
            } catch (e) {
                _e(e);
            }
        }.call(_this), '\n        ', function () {
            try {
                return [// for using TableColumn as children
                __u.map(children ? Array.isArray(children) ? children : [children] : children, function (vNode) {
                    if (vNode.tag === _column2.default) {
                        colSpan++;
                        var props = _extends({}, vNode.props, { $parent: self });
                        vNode.props = props;
                        if (props.key == null) {
                            _e('key for TableColumn must be specified.');
                        } else if (/^\d+$/.test(props.key)) {
                            // avoid digital key
                            _e('don\'t use digits as key.');
                        }
                        _scheme[props.key] = {
                            title: props.title,
                            template: props.template || props.default
                        };
                        return vNode;
                    }
                })][0];
            } catch (e) {
                _e(e);
            }
        }.call(_this), '\n    ']));
    };

    var thead = theadCreator();

    var tbody = h('tbody', null, ['\n    ', function () {
        var _this3 = this;

        try {
            return [data && data.length ? __u.map(data, function (value, index) {
                var key = rowKey.call(self, value, index);
                var disabled = disableRow.call(self, value, index);
                var className = rowClassName.call(self, value, index);
                var tr = h(_row2.default, { 'key': function () {
                        try {
                            return [key][0];
                        } catch (e) {
                            _e(e);
                        }
                    }.call(_this3), 'ev-click': function () {
                        try {
                            return [self._clickRow.bind(self, value, index, key)][0];
                        } catch (e) {
                            _e(e);
                        }
                    }.call(_this3), 'className': _className(function () {
                        try {
                            var _ref;

                            return [(_ref = {
                                'k-disabled': disabled
                            }, _defineProperty(_ref, className, className), _defineProperty(_ref, 'k-checked', self.isChecked(key)), _ref)][0];
                        } catch (e) {
                            _e(e);
                        }
                    }.call(_this3)), 'ev-$destroyed': function () {
                        try {
                            return [self.shrinkRow.bind(self, key)][0];
                        } catch (e) {
                            _e(e);
                        }
                    }.call(_this3), 'children': [function () {
                        try {
                            return [checkType === 'checkbox'][0];
                        } catch (e) {
                            _e(e);
                        }
                    }.call(_this3) ? h('td', null, h(_checkbox2.default, { 'name': 'k-table-checkbox', 'trueValue': function () {
                            try {
                                return [key][0];
                            } catch (e) {
                                _e(e);
                            }
                        }.call(_this3), 'disabled': function () {
                            try {
                                return [disabled][0];
                            } catch (e) {
                                _e(e);
                            }
                        }.call(_this3), 'children': null, '_context': _this3, value: _getModel(self, 'checkedKeys'), 'ev-$change:value': function ev$changeValue(__c, __n) {
                            _setModel(self, 'checkedKeys', __n);
                        } })) : function () {
                        try {
                            return [checkType === 'radio'][0];
                        } catch (e) {
                            _e(e);
                        }
                    }.call(_this3) ? h('td', null, h(_radio2.default, { 'name': 'k-table-radio', 'trueValue': function () {
                            try {
                                return [key][0];
                            } catch (e) {
                                _e(e);
                            }
                        }.call(_this3), 'disabled': function () {
                            try {
                                return [disabled][0];
                            } catch (e) {
                                _e(e);
                            }
                        }.call(_this3), 'children': null, '_context': _this3, value: _getModel(self, 'checkedKey'), 'ev-$change:value': function ev$changeValue(__c, __n) {
                            _setModel(self, 'checkedKey', __n);
                        } })) : undefined, '\n                ', function () {
                        var _this4 = this;

                        try {
                            return [__u.map(__u.extend({}, scheme, _scheme), function (item, key) {
                                var td = void 0;
                                if (__u.isObject(item) && item.template) {
                                    if (typeof item.template === 'function') {
                                        td = item.template.call(self, value, index);
                                        // for Intact-Vue
                                        if (_intact.normalize) {
                                            td = (0, _intact.normalize)(td);
                                        }
                                    } else {
                                        td = item.template;
                                    }
                                } else if (value[key] !== undefined) {
                                    td = value[key];
                                } else {
                                    var _obj = value,
                                        keys = key.split('.'),
                                        i = 0;
                                    while (_obj != null && i < keys.length) {
                                        _obj = _obj[keys[i++]];
                                    }
                                    td = i && i === keys.length ? _obj : null;
                                }
                                return h('td', { 'title': function () {
                                        try {
                                            return [typeof td === 'string' || typeof td === 'number' ? td : undefined][0];
                                        } catch (e) {
                                            _e(e);
                                        }
                                    }.call(_this4) }, function () {
                                    try {
                                        return [typeof td === 'boolean' ? String(td) : td][0];
                                    } catch (e) {
                                        _e(e);
                                    }
                                }.call(_this4));
                            })][0];
                        } catch (e) {
                            _e(e);
                        }
                    }.call(_this3), '\n            '], '_context': _this3 });

                if (expandable && expandedKeys.indexOf(key) > -1) {
                    return [tr, h('tr', null, h('td', { 'colspan': function () {
                            try {
                                return [colSpan][0];
                            } catch (e) {
                                _e(e);
                            }
                        }.call(_this3) }, function () {
                        try {
                            return [expand.call(self, value, index)][0];
                        } catch (e) {
                            _e(e);
                        }
                    }.call(_this3)), 'k-expand', function () {
                        try {
                            return [key + '.expand'][0];
                        } catch (e) {
                            _e(e);
                        }
                    }.call(_this3))];
                } else {
                    return tr;
                }
            }) : h('tr', null, h('td', { 'colspan': function () {
                    try {
                        return [colSpan][0];
                    } catch (e) {
                        _e(e);
                    }
                }.call(this) }, ['\n                ', function () {
                try {
                    return [noDataTemplate][0];
                } catch (e) {
                    _e(e);
                }
            }.call(this), '\n            '], 'k-no-data'), null, 'table_no_data')][0];
        } catch (e) {
            _e(e);
        }
    }.call(this), '\n']);

    var classNameObj = (_classNameObj = {
        'k-table-wrapper': true
    }, _defineProperty(_classNameObj, className, className), _defineProperty(_classNameObj, 'k-' + type, type !== 'default'), _classNameObj);

    var table = h('table', null, ['\n    ', function () {
        try {
            return [thead][0];
        } catch (e) {
            _e(e);
        }
    }.call(this), '\n    ', function () {
        try {
            return [tbody][0];
        } catch (e) {
            _e(e);
        }
    }.call(this), '\n'], 'k-table', null, function () {
        try {
            return [function (dom) {
                return self.table = dom;
            }][0];
        } catch (e) {
            _e(e);
        }
    }.call(this));

    return h('div', { 'style': function () {
            try {
                return [style][0];
            } catch (e) {
                _e(e);
            }
        }.call(this) }, [function () {
        try {
            return [fixHeader][0];
        } catch (e) {
            _e(e);
        }
    }.call(this) ? h('div', { 'style': function () {
            try {
                return [{ paddingRight: self.get('_padding') + 'px' }][0];
            } catch (e) {
                _e(e);
            }
        }.call(this) }, h('table', null, ['\n            ', function () {
        try {
            return [theadCreator()][0];
        } catch (e) {
            _e(e);
        }
    }.call(this), '\n        '], 'k-table'), 'k-fixed', null, function () {
        try {
            return [function (dom) {
                return self.header = dom;
            }][0];
        } catch (e) {
            _e(e);
        }
    }.call(this)) : undefined, '\n    ', function () {
        try {
            return [fixHeader ? h('div', { 'style': function () {
                    try {
                        return [typeof fixHeader === 'number' || typeof fixHeader === 'string' ? { maxHeight: fixHeader + 'px' } : undefined][0];
                    } catch (e) {
                        _e(e);
                    }
                }.call(this) }, function () {
                try {
                    return [table][0];
                } catch (e) {
                    _e(e);
                }
            }.call(this), 'k-scroll', null, function () {
                try {
                    return [function (dom) {
                        return self.scroll = dom;
                    }][0];
                } catch (e) {
                    _e(e);
                }
            }.call(this)) : table][0];
        } catch (e) {
            _e(e);
        }
    }.call(this), '\n'], _className(function () {
        try {
            return [classNameObj][0];
        } catch (e) {
            _e(e);
        }
    }.call(this)));
};

var _checkbox = __webpack_require__("./components/checkbox/index.js");

var _checkbox2 = _interopRequireDefault(_checkbox);

var _radio = __webpack_require__("./components/radio/index.js");

var _radio2 = _interopRequireDefault(_radio);

var _row = __webpack_require__("./components/table/row.js");

var _row2 = _interopRequireDefault(_row);

var _intact = __webpack_require__("./node_modules/intact-vue/src/index.js");

var _column = __webpack_require__("./components/table/column.js");

var _column2 = _interopRequireDefault(_column);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

module.exports = exports['default'];

/***/ }),

/***/ "./components/table/row.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _intact = __webpack_require__("./node_modules/intact-vue/src/index.js");

var _intact2 = _interopRequireDefault(_intact);

var _row = __webpack_require__("./components/table/row.vdt");

var _row2 = _interopRequireDefault(_row);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// for tr $destroyed event
var TableRow = function (_Intact) {
    _inherits(TableRow, _Intact);

    function TableRow() {
        _classCallCheck(this, TableRow);

        return _possibleConstructorReturn(this, (TableRow.__proto__ || Object.getPrototypeOf(TableRow)).apply(this, arguments));
    }

    _createClass(TableRow, [{
        key: 'template',
        get: function get() {
            return _row2.default;
        }
    }]);

    return TableRow;
}(_intact2.default);

exports.default = TableRow;
module.exports = exports['default'];

/***/ }),

/***/ "./components/table/row.vdt":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

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
  return h('tr', _extends({}, function () {
    try {
      return [self.get()][0];
    } catch (e) {
      _e(e);
    }
  }.call(this)), function () {
    try {
      return [self.get('children')][0];
    } catch (e) {
      _e(e);
    }
  }.call(this));
};

module.exports = exports['default'];

/***/ }),

/***/ "./site/components/table recursive demos.*index.js$":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./demos/basic/index.js": "./site/components/table/demos/basic/index.js"
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./site/components/table recursive demos.*index.js$";

/***/ }),

/***/ "./site/components/table/demos/basic/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = exports.data = undefined;

var _dec, _desc, _value, _class, _init, _class2, _temp;

var _index = __webpack_require__("./site/components/table/demos/basic/index.json");

Object.defineProperty(exports, 'data', {
    enumerable: true,
    get: function get() {
        return _interopRequireDefault(_index).default;
    }
});

var _intact = __webpack_require__("./node_modules/intact-vue/src/index.js");

var _intact2 = _interopRequireDefault(_intact);

var _index2 = __webpack_require__("./site/components/table/demos/basic/index.vdt");

var _index3 = _interopRequireDefault(_index2);

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

    return _default;
}(_intact2.default), _class2.template = _index3.default, _temp), (_applyDecoratedDescriptor(_class, 'template', [_dec], (_init = Object.getOwnPropertyDescriptor(_class, 'template'), _init = _init ? _init.value : undefined, {
    enumerable: true,
    configurable: true,
    writable: true,
    initializer: function initializer() {
        return _init;
    }
}), _class)), _class));

exports.default = _default;

/***/ }),

/***/ "./site/components/table/demos/basic/index.vdt":
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

  var scheme = { a: '表头1', b: '表头2' };
  var data = [{ a: '哈哈1', b: '哈哈2' }];

  return h('div', null, [h(_table2.default, { 'scheme': function () {
      try {
        return [scheme][0];
      } catch (e) {
        _e(e);
      }
    }.call(this), 'data': function () {
      try {
        return [data1][0];
      } catch (e) {
        _e(e);
      }
    }.call(this), 'children': null, '_context': this }), h(_table2.default, { 'scheme': function () {
      try {
        return [scheme][0];
      } catch (e) {
        _e(e);
      }
    }.call(this), 'data': function () {
      try {
        return [data2][0];
      } catch (e) {
        _e(e);
      }
    }.call(this), 'fixHeader': function () {
      try {
        return [true][0];
      } catch (e) {
        _e(e);
      }
    }.call(this), 'children': null, '_context': this })]);
};

var _table = __webpack_require__("./components/table/index.js");

var _table2 = _interopRequireDefault(_table);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = exports['default'];

/***/ }),

/***/ "./site/components/table/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _article = __webpack_require__("./site/src/components/article/index.js");

var _article2 = _interopRequireDefault(_article);

var _index = __webpack_require__("./site/components/table/index.json");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var r = __webpack_require__("./site/components/table recursive demos.*index.js$");
var demos = r.keys().map(r);

var _default = function (_Article) {
    _inherits(_default, _Article);

    function _default() {
        _classCallCheck(this, _default);

        return _possibleConstructorReturn(this, (_default.__proto__ || Object.getPrototypeOf(_default)).apply(this, arguments));
    }

    _createClass(_default, [{
        key: 'defaults',
        value: function defaults() {
            return _extends({}, _get(_default.prototype.__proto__ || Object.getPrototypeOf(_default.prototype), 'defaults', this).call(this), _index2.default, { demos: demos });
        }
    }]);

    return _default;
}(_article2.default);

exports.default = _default;
module.exports = exports['default'];

/***/ }),

/***/ "./site/components/table/index.json":
/***/ (function(module, exports) {

module.exports = {"setting":{"title":"表格","category":"组件","order":1},"catalogs":[],"contents":"<h1 id='header-%E8%A1%A8%E6%A0%BC%E5%B1%9E%E6%80%A7%20Table'>表格属性 Table</h1><div class=\"k-table-wrapper k-border\">\n                    <table class=\"k-table\">\n                        <thead><tr>\n<th>属性</th>\n<th>说明</th>\n<th>类型</th>\n<th>默认值</th>\n</tr>\n</thead>\n                        <tbody><tr>\n<td>data</td>\n<td>表格数据</td>\n<td><code>Array</code></td>\n<td><code>[]</code></td>\n</tr>\n<tr>\n<td>scheme</td>\n<td>表头信息</td>\n<td><code>Object</code></td>\n<td><code>{}</code></td>\n</tr>\n<tr>\n<td>checkType</td>\n<td>框的类型: 单选 radio , 复选 checkbox ,  没有 none</td>\n<td><code>String</code></td>\n<td><code>&quot;checkbox&quot;</code></td>\n</tr>\n<tr>\n<td>noDataTemplate</td>\n<td>当没有数据的时候展示信息</td>\n<td><code>String</code></td>\n<td><code>&quot;/(ㄒoㄒ)/~~ 没有找到亲要的数据哦~&quot;</code></td>\n</tr>\n<tr>\n<td>fixHeader</td>\n<td>表头固定</td>\n<td><code>Boolean</code></td>\n<td><code>false</code></td>\n</tr>\n</tbody>\n                    </table>\n                </div><p>| rowKey | 设置行的key | <code>Function</code> | <code>function(value, index) {  return index; }</code> || rowClassName | 设置行的class | <code>Function</code> | <code>function(value, index) {  }</code> || checkedKeys | 哪行被选中（针对多选） | <code>Array</code> | <code>[]</code> || checkedKey | 哪行被选中（针对单选） | <code>任何</code> | <code>undefined</code> || rowCheckable | 是否整行选中 | <code>Boolean</code> | <code>true</code> || rowExpandable | 是否点击整行展开 | <code>Boolean</code> | <code>true</code> || disableRow | 禁用某一行 | <code>Function</code> | <code>function(data, index) { return false }</code> || sort | 排序 | <code>Object</code> | <code>{}</code> || groups | 分组 | <code>Object</code> | <code>{}</code> || resizable | 是否可以表头拖动 | <code>Boolean</code> | <code>false</code> || expand | 展开条件 | <code>Function</code> | <code>undefined</code> || expandedKeys | 哪行展开 | <code>Array</code> | <code>[]</code> || type | 类型 | <code>String</code> | <code>&quot;default&quot;</code> || _padding | padding | <code>Number</code> | <code>0</code> || _disabledAmount | disabledAmount | <code>Number</code> | <code>0</code> |</p>\n","codes":[{"language":"js","content":"import Intact from 'intact';\nimport template from './index.vdt';\n\nexport default class extends Intact {\n    @Intact.template()\n    static template = template;\n}"}],"index":93,"sideBars":{"组件":[{"title":"面包屑","path":"components/breadcrumb/index.md","children":[{"title":"属性","path":"#header-%E5%B1%9E%E6%80%A7","level":1,"content":"<h1 id='header-%E5%B1%9E%E6%80%A7'>属性</h1>","text":"属性","children":[{"title":"Breadcrumb","path":"#header-Breadcrumb","level":2,"content":"<h2 id='header-Breadcrumb'>Breadcrumb</h2>","text":"Breadcrumb","children":[]},{"title":"BreadcrumbItem","path":"#header-BreadcrumbItem","level":2,"content":"<h2 id='header-BreadcrumbItem'>BreadcrumbItem</h2>","text":"BreadcrumbItem","children":[]}]}]},{"title":"按钮","path":"components/button/index.md","children":[{"title":"属性","path":"#header-%E5%B1%9E%E6%80%A7","level":1,"content":"<h1 id='header-%E5%B1%9E%E6%80%A7'>属性</h1>","text":"属性","children":[{"title":"Button","path":"#header-Button","level":2,"content":"<h2 id='header-Button'>Button</h2>","text":"Button","children":[]},{"title":"ButtonGroup","path":"#header-ButtonGroup","level":2,"content":"<h2 id='header-ButtonGroup'>ButtonGroup</h2>","text":"ButtonGroup","children":[]}]},{"title":"方法","path":"#header-%E6%96%B9%E6%B3%95","level":1,"content":"<h1 id='header-%E6%96%B9%E6%B3%95'>方法</h1>","text":"方法","children":[{"title":"Button","path":"#header-Button","level":2,"content":"<h2 id='header-Button'>Button</h2>","text":"Button","children":[]}]}]},{"title":"复选框","path":"components/checkbox/index.md","children":[{"title":"属性","path":"#header-%E5%B1%9E%E6%80%A7","level":1,"content":"<h1 id='header-%E5%B1%9E%E6%80%A7'>属性</h1>","text":"属性","children":[]}]},{"title":"日期选择","path":"components/datepicker/index.md","children":[{"title":"属性","path":"#header-%E5%B1%9E%E6%80%A7","level":1,"content":"<h1 id='header-%E5%B1%9E%E6%80%A7'>属性</h1>","text":"属性","children":[]}]},{"title":"弹窗","path":"components/dialog/index.md","children":[{"title":"属性","path":"#header-%E5%B1%9E%E6%80%A7","level":1,"content":"<h1 id='header-%E5%B1%9E%E6%80%A7'>属性</h1>","text":"属性","children":[]},{"title":"扩展点","path":"#header-%E6%89%A9%E5%B1%95%E7%82%B9","level":1,"content":"<h1 id='header-%E6%89%A9%E5%B1%95%E7%82%B9'>扩展点</h1>","text":"扩展点","children":[]},{"title":"方法","path":"#header-%E6%96%B9%E6%B3%95","level":1,"content":"<h1 id='header-%E6%96%B9%E6%B3%95'>方法</h1>","text":"方法","children":[]},{"title":"事件","path":"#header-%E4%BA%8B%E4%BB%B6","level":1,"content":"<h1 id='header-%E4%BA%8B%E4%BB%B6'>事件</h1>","text":"事件","children":[]}]},{"title":"下拉菜单","path":"components/dropdown/index.md","children":[{"title":"属性","path":"#header-%E5%B1%9E%E6%80%A7","level":1,"content":"<h1 id='header-%E5%B1%9E%E6%80%A7'>属性</h1>","text":"属性","children":[{"title":"Dropdown","path":"#header-Dropdown","level":2,"content":"<h2 id='header-Dropdown'>Dropdown</h2>","text":"Dropdown","children":[]},{"title":"DropdownItem","path":"#header-DropdownItem","level":2,"content":"<h2 id='header-DropdownItem'>DropdownItem</h2>","text":"DropdownItem","children":[]},{"title":"事件","path":"#header-%E4%BA%8B%E4%BB%B6","level":2,"content":"<h2 id='header-%E4%BA%8B%E4%BB%B6'>事件</h2>","text":"事件","children":[]},{"title":"DropdownItem","path":"#header-DropdownItem","level":2,"content":"<h2 id='header-DropdownItem'>DropdownItem</h2>","text":"DropdownItem","children":[]}]}]},{"title":"可编辑文本","path":"components/editable/index.md","children":[{"title":"属性","path":"#header-%E5%B1%9E%E6%80%A7","level":1,"content":"<h1 id='header-%E5%B1%9E%E6%80%A7'>属性</h1>","text":"属性","children":[]},{"title":"事件","path":"#header-%E4%BA%8B%E4%BB%B6","level":1,"content":"<h1 id='header-%E4%BA%8B%E4%BB%B6'>事件</h1>","text":"事件","children":[]}]},{"title":"表单","path":"components/form/index.md","children":[{"title":"属性","path":"#header-%E5%B1%9E%E6%80%A7","level":1,"content":"<h1 id='header-%E5%B1%9E%E6%80%A7'>属性</h1>","text":"属性","children":[{"title":"FormItem","path":"#header-FormItem","level":2,"content":"<h2 id='header-FormItem'>FormItem</h2>","text":"FormItem","children":[]}]},{"title":"扩展点","path":"#header-%E6%89%A9%E5%B1%95%E7%82%B9","level":1,"content":"<h1 id='header-%E6%89%A9%E5%B1%95%E7%82%B9'>扩展点</h1>","text":"扩展点","children":[{"title":"FormItem","path":"#header-FormItem","level":2,"content":"<h2 id='header-FormItem'>FormItem</h2>","text":"FormItem","children":[]}]},{"title":"事件","path":"#header-%E4%BA%8B%E4%BB%B6","level":1,"content":"<h1 id='header-%E4%BA%8B%E4%BB%B6'>事件</h1>","text":"事件","children":[{"title":"Form","path":"#header-Form","level":2,"content":"<h2 id='header-Form'>Form</h2>","text":"Form","children":[]}]},{"title":"方法","path":"#header-%E6%96%B9%E6%B3%95","level":1,"content":"<h1 id='header-%E6%96%B9%E6%B3%95'>方法</h1>","text":"方法","children":[{"title":"Form","path":"#header-Form","level":2,"content":"<h2 id='header-Form'>Form</h2>","text":"Form","children":[]}]},{"title":"静态方法","path":"#header-%E9%9D%99%E6%80%81%E6%96%B9%E6%B3%95","level":1,"content":"<h1 id='header-%E9%9D%99%E6%80%81%E6%96%B9%E6%B3%95'>静态方法</h1>","text":"静态方法","children":[{"title":"Form","path":"#header-Form","level":2,"content":"<h2 id='header-Form'>Form</h2>","text":"Form","children":[]}]}]},{"title":"栅格","path":"components/grid/index.md","children":[{"title":"属性","path":"#header-%E5%B1%9E%E6%80%A7","level":1,"content":"<h1 id='header-%E5%B1%9E%E6%80%A7'>属性</h1>","text":"属性","children":[{"title":"Row","path":"#header-Row","level":2,"content":"<h2 id='header-Row'>Row</h2>","text":"Row","children":[]},{"title":"Col","path":"#header-Col","level":2,"content":"<h2 id='header-Col'>Col</h2>","text":"Col","children":[]}]}]},{"title":"输入框","path":"components/input/index.md","children":[{"title":"属性","path":"#header-%E5%B1%9E%E6%80%A7","level":1,"content":"<h1 id='header-%E5%B1%9E%E6%80%A7'>属性</h1>","text":"属性","children":[]},{"title":"扩展点","path":"#header-%E6%89%A9%E5%B1%95%E7%82%B9","level":1,"content":"<h1 id='header-%E6%89%A9%E5%B1%95%E7%82%B9'>扩展点</h1>","text":"扩展点","children":[]},{"title":"事件","path":"#header-%E4%BA%8B%E4%BB%B6","level":1,"content":"<h1 id='header-%E4%BA%8B%E4%BB%B6'>事件</h1>","text":"事件","children":[]}]},{"title":"全局提示","path":"components/message/index.md","children":[{"title":"属性","path":"#header-%E5%B1%9E%E6%80%A7","level":1,"content":"<h1 id='header-%E5%B1%9E%E6%80%A7'>属性</h1>","text":"属性","children":[]},{"title":"静态方法","path":"#header-%E9%9D%99%E6%80%81%E6%96%B9%E6%B3%95","level":1,"content":"<h1 id='header-%E9%9D%99%E6%80%81%E6%96%B9%E6%B3%95'>静态方法</h1>","text":"静态方法","children":[]}]},{"title":"分页","path":"components/pagination/index.md","children":[{"title":"属性","path":"#header-%E5%B1%9E%E6%80%A7","level":1,"content":"<h1 id='header-%E5%B1%9E%E6%80%A7'>属性</h1>","text":"属性","children":[]},{"title":"方法","path":"#header-%E6%96%B9%E6%B3%95","level":1,"content":"<h1 id='header-%E6%96%B9%E6%B3%95'>方法</h1>","text":"方法","children":[{"title":"Pagination","path":"#header-Pagination","level":2,"content":"<h2 id='header-Pagination'>Pagination</h2>","text":"Pagination","children":[]}]}]},{"title":"进度条","path":"components/progress/index.md","children":[{"title":"属性","path":"#header-%E5%B1%9E%E6%80%A7","level":1,"content":"<h1 id='header-%E5%B1%9E%E6%80%A7'>属性</h1>","text":"属性","children":[]}]},{"title":"单选框","path":"components/radio/index.md","children":[{"title":"属性","path":"#header-%E5%B1%9E%E6%80%A7","level":1,"content":"<h1 id='header-%E5%B1%9E%E6%80%A7'>属性</h1>","text":"属性","children":[]}]},{"title":"选择框","path":"components/select/index.md","children":[{"title":"属性","path":"#header-%E5%B1%9E%E6%80%A7","level":1,"content":"<h1 id='header-%E5%B1%9E%E6%80%A7'>属性</h1>","text":"属性","children":[{"title":"Select","path":"#header-Select","level":2,"content":"<h2 id='header-Select'>Select</h2>","text":"Select","children":[]},{"title":"Option","path":"#header-Option","level":2,"content":"<h2 id='header-Option'>Option</h2>","text":"Option","children":[]}]}]},{"title":"滑块","path":"components/slider/index.md","children":[{"title":"属性","path":"#header-%E5%B1%9E%E6%80%A7","level":1,"content":"<h1 id='header-%E5%B1%9E%E6%80%A7'>属性</h1>","text":"属性","children":[]}]},{"title":"数字输入框","path":"components/spinner/index.md","children":[{"title":"属性","path":"#header-%E5%B1%9E%E6%80%A7","level":1,"content":"<h1 id='header-%E5%B1%9E%E6%80%A7'>属性</h1>","text":"属性","children":[]}]},{"title":"步骤条","path":"components/steps/index.md","children":[{"title":"属性","path":"#header-%E5%B1%9E%E6%80%A7","level":1,"content":"<h1 id='header-%E5%B1%9E%E6%80%A7'>属性</h1>","text":"属性","children":[{"title":"Steps","path":"#header-Steps","level":2,"content":"<h2 id='header-Steps'>Steps</h2>","text":"Steps","children":[]},{"title":"Step","path":"#header-Step","level":2,"content":"<h2 id='header-Step'>Step</h2>","text":"Step","children":[]}]}]},{"title":"表格","path":"components/table/index.md","children":[{"title":"表格属性 Table","path":"#header-%E8%A1%A8%E6%A0%BC%E5%B1%9E%E6%80%A7%20Table","level":1,"content":"<h1 id='header-%E8%A1%A8%E6%A0%BC%E5%B1%9E%E6%80%A7%20Table'>表格属性 Table</h1>","text":"表格属性 Table","children":[]}]},{"title":"穿梭框","path":"components/transfer/index.md","children":[{"title":"属性","path":"#header-%E5%B1%9E%E6%80%A7","level":1,"content":"<h1 id='header-%E5%B1%9E%E6%80%A7'>属性</h1>","text":"属性","children":[]}]}]},"highlighted":[{"language":"js","content":"<pre><code class=\"hljs js\"><span class=\"hljs-keyword\">import</span> Intact <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'intact'</span>;\n<span class=\"hljs-keyword\">import</span> template <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'./index.vdt'</span>;\n\n<span class=\"hljs-keyword\">export</span> <span class=\"hljs-keyword\">default</span> <span class=\"hljs-class\"><span class=\"hljs-keyword\">class</span> <span class=\"hljs-keyword\">extends</span> <span class=\"hljs-title\">Intact</span> </span>{\n    @Intact.template()\n    <span class=\"hljs-keyword\">static</span> template = template;\n}</code></pre>"}]}

/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3RhYmxlL2NvbHVtbi5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3RhYmxlL2NvbHVtbi52ZHQiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy90YWJsZS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3RhYmxlL2luZGV4LnZkdCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3RhYmxlL3Jvdy5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3RhYmxlL3Jvdy52ZHQiLCJ3ZWJwYWNrOi8vLy4vc2l0ZS9jb21wb25lbnRzL3RhYmxlIGRlbW9zLippbmRleC5qcyQiLCJ3ZWJwYWNrOi8vLy4vc2l0ZS9jb21wb25lbnRzL3RhYmxlL2RlbW9zL2Jhc2ljL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NpdGUvY29tcG9uZW50cy90YWJsZS9kZW1vcy9iYXNpYy9pbmRleC52ZHQiLCJ3ZWJwYWNrOi8vLy4vc2l0ZS9jb21wb25lbnRzL3RhYmxlL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NpdGUvY29tcG9uZW50cy90YWJsZS9pbmRleC5qc29uIl0sIm5hbWVzIjpbIlRhYmxlQ29sdW1uIiwidGl0bGUiLCJ0ZW1wbGF0ZSIsImRhdGEiLCJpbmRleCIsImtleSIsInNvcnRhYmxlIiwid2lkdGgiLCJ1bmRlZmluZWQiLCJncm91cHMiLCIkcGFyZW50IiwiZSIsInRyaWdnZXIiLCJvYmoiLCJfVmR0IiwiYmxvY2tzIiwiJGNhbGxlZSIsIlZkdCIsImgiLCJtaXNzIiwiaGMiLCJodSIsIndpZGdldHMiLCJfYmxvY2tzIiwiX19ibG9ja3MiLCJfX3UiLCJ1dGlscyIsImV4dGVuZCIsIl9lIiwiZXJyb3IiLCJfY2xhc3NOYW1lIiwiY2xhc3NOYW1lIiwiX19vIiwiT3B0aW9ucyIsIl9nZXRNb2RlbCIsImdldE1vZGVsIiwiX3NldE1vZGVsIiwic2V0TW9kZWwiLCJfc2V0Q2hlY2tib3hNb2RlbCIsInNldENoZWNrYm94TW9kZWwiLCJfZGV0ZWN0Q2hlY2tib3hDaGVja2VkIiwiZGV0ZWN0Q2hlY2tib3hDaGVja2VkIiwiX3NldFNlbGVjdE1vZGVsIiwic2V0U2VsZWN0TW9kZWwiLCJzZWxmIiwic2NvcGUiLCJBbmltYXRlIiwicGFyZW50IiwiX3N1cGVyIiwiZ2V0Iiwic29ydCIsInJlc2l6YWJsZSIsImNhbGwiLCJvbkNsaWNrIiwib25EcmFnU3RhcnQiLCJ0eXBlIiwic2Nyb2xsQmFyV2lkdGgiLCJNSU5fV0lEVEgiLCJzbGljZSIsIkFycmF5IiwicHJvdG90eXBlIiwiVGFibGUiLCJzY2hlbWUiLCJjaGVja1R5cGUiLCJyb3dLZXkiLCJ2YWx1ZSIsInJvd0NsYXNzTmFtZSIsImNoZWNrZWRLZXlzIiwiY2hlY2tlZEtleSIsInJvd0NoZWNrYWJsZSIsInJvd0V4cGFuZGFibGUiLCJub0RhdGFUZW1wbGF0ZSIsImRpc2FibGVSb3ciLCJleHBhbmQiLCJleHBhbmRlZEtleXMiLCJmaXhIZWFkZXIiLCJfcGFkZGluZyIsIl9kaXNhYmxlZEFtb3VudCIsIm9uIiwiYyIsIm5ld1ZhbHVlIiwib2xkVmFsdWUiLCJmb3JFYWNoIiwiaXRlbSIsIl9jYWxjSGVhZGVyUGFkZGluZyIsIl91cGRhdGVEaXNhYmxlZEFtb3VudCIsIl9tb3ZlIiwiYmluZCIsIl9kcmFnRW5kIiwiZ2V0U2Nyb2xsYmFyV2lkdGgiLCJkYXRhTGVuZ3RoIiwibGVuZ3RoIiwiZGlzYWJsZWRBbW91bnQiLCJhbW91bnQiLCJpbmRleE9mIiwicHVzaCIsInNldCIsIl9jaGVja1VuY2hlY2tSb3ciLCJfZXhwYW5kU2hyaW5rUm93IiwiY2hlY2tlZEtleXNNYXAiLCJmaWx0ZXIiLCJ0YWJsZUhlaWdodCIsInRhYmxlIiwib2Zmc2V0SGVpZ2h0IiwiY29udGFpbmVySGVpZ2h0Iiwic2Nyb2xsIiwiaGVhZGVySGVpZ2h0IiwiaGVhZGVyIiwiY2hlY2tlZCIsImNoZWNrQWxsIiwidW5jaGVja0FsbCIsInRhcmdldCIsInRhZ05hbWUiLCJ0b0xvd2VyQ2FzZSIsImlzQ2hlY2siLCJpc1RvZ2dsZSIsImkiLCJzcGxpY2UiLCJpc0V4cGFuZCIsIk9iamVjdCIsImFzc2lnbiIsIndoaWNoIiwiX3Jlc2l6aW5nIiwiX2NvbnRhaW5lcldpZHRoIiwiZWxlbWVudCIsIm9mZnNldFdpZHRoIiwiX3giLCJjbGllbnRYIiwiY3VycmVudFRoIiwicGFyZW50Tm9kZSIsInByZXZUaCIsInByZXZpb3VzRWxlbWVudFNpYmxpbmciLCJfY3VycmVudFRocyIsIl9wcmV2VGhzIiwiX3RhYmxlcyIsInRocyIsImNoaWxkcmVuIiwiZ2V0RWxlbWVudHNCeVRhZ05hbWUiLCJmaXhUaHMiLCJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJkZWxYIiwicHJldldpZHRoIiwidGFibGVXaWR0aCIsInN0eWxlIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsInByb3BUeXBlcyIsIkJvb2xlYW4iLCJvdXRlciIsImNyZWF0ZUVsZW1lbnQiLCJ2aXNpYmlsaXR5IiwibXNPdmVyZmxvd1N0eWxlIiwiYm9keSIsImFwcGVuZENoaWxkIiwid2lkdGhOb1Njcm9sbCIsIm92ZXJmbG93IiwiaW5uZXIiLCJ3aWR0aFdpdGhTY3JvbGwiLCJyZW1vdmVDaGlsZCIsImNvbFNwYW4iLCJleHBhbmRhYmxlIiwiX3NjaGVtZSIsInRoZWFkQ3JlYXRvciIsImlzQ2hlY2tBbGwiLCJfdG9nZ2xlQ2hlY2tBbGwiLCJtYXAiLCJpc09iamVjdCIsIl9zb3J0IiwiX2RyYWdTdGFydCIsImlzQXJyYXkiLCJ2Tm9kZSIsInRhZyIsInByb3BzIiwidGVzdCIsImRlZmF1bHQiLCJ0aGVhZCIsInRib2R5IiwiZGlzYWJsZWQiLCJ0ciIsIl9jbGlja1JvdyIsImlzQ2hlY2tlZCIsInNocmlua1JvdyIsIl9fYyIsIl9fbiIsInRkIiwia2V5cyIsInNwbGl0IiwiU3RyaW5nIiwiY2xhc3NOYW1lT2JqIiwiZG9tIiwicGFkZGluZ1JpZ2h0IiwibWF4SGVpZ2h0IiwiVGFibGVSb3ciLCJhIiwiYiIsImRhdGExIiwiZGF0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LDZEQUE2RCx3TkFBd04sRUFBRSxFQUFFLGlFQUFpRSw0SUFBNEksRUFBRSxFQUFFLGlCQUFpQiwrTEFBK0wsZ0pBQWdKLDZQQUE2UCw2RkFBNkYsR0FBRyxlQUFlLEUiLCJmaWxlIjoic3RhdGljL2NodW5rLzViM2JjMWE3YTk5MDJkOTg3MmUyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEludGFjdCBmcm9tICdpbnRhY3QnO1xuaW1wb3J0IHRlbXBsYXRlIGZyb20gJy4vY29sdW1uLnZkdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRhYmxlQ29sdW1uIGV4dGVuZHMgSW50YWN0IHtcbiAgICBnZXQgdGVtcGxhdGUoKSB7IHJldHVybiB0ZW1wbGF0ZTsgfVxuXG4gICAgZGVmYXVsdHMoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB0aXRsZTogJycsXG4gICAgICAgICAgICB0ZW1wbGF0ZShkYXRhLCBpbmRleCkgeyB9LFxuICAgICAgICAgICAga2V5OiAnJyxcbiAgICAgICAgICAgIHNvcnRhYmxlOiBmYWxzZSxcbiAgICAgICAgICAgIHdpZHRoOiB1bmRlZmluZWQsXG4gICAgICAgICAgICBncm91cHM6IHVuZGVmaW5lZCxcblxuICAgICAgICAgICAgLy8gcGFzc2VkIGJ5IHBhcmVudFxuICAgICAgICAgICAgJHBhcmVudDogdW5kZWZpbmVkLFxuICAgICAgICB9XG4gICAgfVxuXG4gICAgb25DbGljayhlKSB7XG4gICAgICAgIHRoaXMudHJpZ2dlcignY2xpY2snLCBlKTtcbiAgICB9XG5cbiAgICBvbkRyYWdTdGFydChlKSB7XG4gICAgICAgIHRoaXMudHJpZ2dlcignZHJhZ1N0YXJ0JywgZSk7XG4gICAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy90YWJsZS9jb2x1bW4uanMiLCJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKG9iaiwgX1ZkdCwgYmxvY2tzLCAkY2FsbGVlKSB7XG5cbl9WZHQgfHwgKF9WZHQgPSBWZHQpO1xub2JqIHx8IChvYmogPSB7fSk7XG5ibG9ja3MgfHwgKGJsb2NrcyA9IHt9KTtcbnZhciBoID0gX1ZkdC5taXNzLmgsIGhjID0gX1ZkdC5taXNzLmhjLCBodSA9IF9WZHQubWlzcy5odSwgd2lkZ2V0cyA9IHRoaXMgJiYgdGhpcy53aWRnZXRzIHx8IHt9LCBfYmxvY2tzID0ge30sIF9fYmxvY2tzID0ge30sXG5fX3UgPSBfVmR0LnV0aWxzLCBleHRlbmQgPSBfX3UuZXh0ZW5kLCBfZSA9IF9fdS5lcnJvciwgX2NsYXNzTmFtZSA9IF9fdS5jbGFzc05hbWUsXG5fX28gPSBfX3UuT3B0aW9ucywgX2dldE1vZGVsID0gX19vLmdldE1vZGVsLCBfc2V0TW9kZWwgPSBfX28uc2V0TW9kZWwsXG5fc2V0Q2hlY2tib3hNb2RlbCA9IF9fdS5zZXRDaGVja2JveE1vZGVsLCBfZGV0ZWN0Q2hlY2tib3hDaGVja2VkID0gX191LmRldGVjdENoZWNrYm94Q2hlY2tlZCxcbl9zZXRTZWxlY3RNb2RlbCA9IF9fdS5zZXRTZWxlY3RNb2RlbCxcbnNlbGYgPSB0aGlzLmRhdGEsIHNjb3BlID0gb2JqLCBBbmltYXRlID0gc2VsZiAmJiBzZWxmLkFuaW1hdGUsIHBhcmVudCA9ICgkY2FsbGVlIHx8IHt9KS5fc3VwZXJcbmNvbnN0IHtcbiAgICB3aWR0aCwgdGl0bGUsIGtleSwgXG4gICAgc29ydGFibGUsIGdyb3VwcywgJHBhcmVudFxufSA9IHNlbGYuZ2V0KCk7XG5jb25zdCB7c29ydCwgcmVzaXphYmxlfSA9ICRwYXJlbnQuZ2V0KCk7XG5cbnJldHVybiBoKCd0aCcsIHsnd2lkdGgnOiBmdW5jdGlvbigpIHt0cnkge3JldHVybiBbd2lkdGggXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKSwgJ3RpdGxlJzogZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW3RpdGxlIF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcyksICdldi1jbGljayc6IGZ1bmN0aW9uKCkge3RyeSB7cmV0dXJuIFtzZWxmLm9uQ2xpY2sgXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKX0sIFtmdW5jdGlvbigpIHt0cnkge3JldHVybiBbcmVzaXphYmxlIF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcykgPyBoKCdkaXYnLCB7J2V2LW1vdXNlZG93bic6IGZ1bmN0aW9uKCkge3RyeSB7cmV0dXJuIFtzZWxmLm9uRHJhZ1N0YXJ0IF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcyl9LCBudWxsLCAnay1yZXNpemUnKSA6IHVuZGVmaW5lZCwgaCgnZGl2JywgbnVsbCwgW2Z1bmN0aW9uKCkge3RyeSB7cmV0dXJuIFshZ3JvdXBzIF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcykgPyBoKCdkaXYnLCBudWxsLCBmdW5jdGlvbigpIHt0cnkge3JldHVybiBbdGl0bGUgXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKSwgJ2MtZWxsaXBzaXMnKSA6IHVuZGVmaW5lZCwgJ1xcbiAgICAgICAgJywgZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW2RvIHtcbiAgICAgICAgICAgIGlmIChzb3J0YWJsZSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHR5cGUgPSBrZXkgPT09IHNvcnQua2V5ID8gc29ydC50eXBlIDogJyc7XG4gICAgICAgICAgICAgICAgaCgnZGl2JywgbnVsbCwgaCgnaScsIG51bGwsIG51bGwsIF9jbGFzc05hbWUoZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW3tcbiAgICAgICAgICAgICAgICAgICAgICAgICdrLWljb24nOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgW2BpY29uLSR7dHlwZX1gXTogdHlwZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICdpY29uLXNvcnRhYmxlJzogIXR5cGUsXG4gICAgICAgICAgICAgICAgICAgIH0gXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKSkpLCBfY2xhc3NOYW1lKGZ1bmN0aW9uKCkge3RyeSB7cmV0dXJuIFt7J2stc29ydCc6IHRydWUsIFtgay0ke3R5cGV9YF06IHR5cGV9IF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcykpKVxuICAgICAgICAgICAgfVxuICAgICAgICB9IF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcyksICdcXG4gICAgJ10sICdrLXRoJyldLCBfY2xhc3NOYW1lKGZ1bmN0aW9uKCkge3RyeSB7cmV0dXJuIFt7J2stc29ydGFibGUnOiBzb3J0YWJsZX0gXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKSkpXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy90YWJsZS9jb2x1bW4udmR0IiwiaW1wb3J0IEludGFjdCBmcm9tICdpbnRhY3QnO1xuaW1wb3J0IHRlbXBsYXRlIGZyb20gJy4vaW5kZXgudmR0JztcbmltcG9ydCAnLi9pbmRleC5zdHlsJztcbmltcG9ydCBDb2x1bW4gZnJvbSAnLi9jb2x1bW4nO1xuXG5sZXQgc2Nyb2xsQmFyV2lkdGggPSB1bmRlZmluZWQ7XG5cbmNvbnN0IE1JTl9XSURUSCA9IDQwO1xuY29uc3Qgc2xpY2UgPSBBcnJheS5wcm90b3R5cGUuc2xpY2U7XG5cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGFibGUgZXh0ZW5kcyBJbnRhY3Qge1xuICAgIEBJbnRhY3QudGVtcGxhdGUoKVxuICAgIGdldCB0ZW1wbGF0ZSgpIHsgcmV0dXJuIHRlbXBsYXRlOyB9XG5cbiAgICBkZWZhdWx0cygpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGRhdGE6IFtdLFxuICAgICAgICAgICAgc2NoZW1lOiB7fSxcbiAgICAgICAgICAgIGNoZWNrVHlwZTogJ2NoZWNrYm94JywgLy8gcmFkaW8gfCBub25lIFxuICAgICAgICAgICAgcm93S2V5KHZhbHVlLCBpbmRleCkgeyByZXR1cm4gaW5kZXg7IH0sXG4gICAgICAgICAgICByb3dDbGFzc05hbWUodmFsdWUsIGluZGV4KSB7ICB9LCAvLyBhZGQgY2xhc3NOYW1lIGZvciB0clxuICAgICAgICAgICAgY2hlY2tlZEtleXM6IFtdLCAvLyBmb3IgY2hlY2tib3hcbiAgICAgICAgICAgIGNoZWNrZWRLZXk6IHVuZGVmaW5lZCwgLy8gZm9yIHJhZGlvXG4gICAgICAgICAgICByb3dDaGVja2FibGU6IHRydWUsIC8vIGNsaWNrIHJvdyB0byBjaGVja1xuICAgICAgICAgICAgcm93RXhwYW5kYWJsZTogdHJ1ZSwgLy8gY2xpY2sgcm93IHRvIGV4cGFuZFxuICAgICAgICAgICAgbm9EYXRhVGVtcGxhdGU6ICcvKOOEkm/jhJIpL35+IOayoeacieaJvuWIsOS6suimgeeahOaVsOaNruWTpn4nLFxuICAgICAgICAgICAgZGlzYWJsZVJvdyhkYXRhLCBpbmRleCkgeyByZXR1cm4gZmFsc2UgfSxcbiAgICAgICAgICAgIHNvcnQ6IHt9LFxuICAgICAgICAgICAgZ3JvdXBzOiB7fSxcbiAgICAgICAgICAgIHJlc2l6YWJsZTogZmFsc2UsXG4gICAgICAgICAgICBleHBhbmQ6IHVuZGVmaW5lZCwgLy8gZXhwYW5kIHRlbXBsYXRlIGNhbGxiYWNrXG4gICAgICAgICAgICBleHBhbmRlZEtleXM6IFtdLCBcbiAgICAgICAgICAgIHR5cGU6ICdkZWZhdWx0JywgLy8gZGVmYXVsdCBib3JkZXJcbiAgICAgICAgICAgIGZpeEhlYWRlcjogZmFsc2UsXG5cbiAgICAgICAgICAgIF9wYWRkaW5nOiAwLFxuICAgICAgICAgICAgX2Rpc2FibGVkQW1vdW50OiAwLFxuICAgICAgICB9XG4gICAgfVxuXG4gICAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICAgICAgcm93Q2hlY2thYmxlOiBCb29sZWFuLFxuICAgICAgICByb3dFeHBhbmRhYmxlOiBCb29sZWFuLFxuICAgICAgICByZXNpemFibGU6IEJvb2xlYW4sXG4gICAgICAgIGZpeEhlYWRlcjogQm9vbGVhbixcbiAgICB9XG5cbiAgICBfaW5pdCgpIHtcbiAgICAgICAgLy8ga2VlcCB0aGUgZXZlbnQgY29uc2lzdGVudFxuICAgICAgICB0aGlzLm9uKCckY2hhbmdlOmNoZWNrZWRLZXlzJywgKGMsIG5ld1ZhbHVlLCBvbGRWYWx1ZSkgPT4ge1xuICAgICAgICAgICAgdGhpcy50cmlnZ2VyKCckY2hhbmdlOmNoZWNrZWQnLCBjLCBuZXdWYWx1ZSwgb2xkVmFsdWUpO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5vbignJGNoYW5nZTpjaGVja2VkS2V5JywgKGMsIG5ld1ZhbHVlLCBvbGRWYWx1ZSkgPT4ge1xuICAgICAgICAgICAgdGhpcy50cmlnZ2VyKCckY2hhbmdlOmNoZWNrZWQnLCBjLCBbbmV3VmFsdWVdLCBbb2xkVmFsdWVdKTtcbiAgICAgICAgfSk7XG4gICAgICAgIC8vIGNhbGN1bGF0ZSBwYWRkaW5nIG9mIGhlYWRlciB3aGVuIHNvbWUgcHJvcHMgaGF2ZSBjaGFuZ2VkXG4gICAgICAgIFsnZGF0YScsICdmaXhIZWFkZXInXS5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICAgICAgdGhpcy5vbihgJGNoYW5nZWQ6JHtpdGVtfWAsIHRoaXMuX2NhbGNIZWFkZXJQYWRkaW5nKTtcbiAgICAgICAgfSk7XG4gICAgICAgIC8vIHVwZGF0ZSBkaXNhYmxlZCBhbW91bnQgd2hlbiBzb21lIHByb3BzIGhhdmUgY2hhbmdlZFxuICAgICAgICBbJ2RhdGEnLCAnZGlzYWJsZVJvdyddLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICAgICAgICB0aGlzLm9uKGAkY2hhbmdlOiR7aXRlbX1gLCB0aGlzLl91cGRhdGVEaXNhYmxlZEFtb3VudCk7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLl91cGRhdGVEaXNhYmxlZEFtb3VudCgpO1xuXG4gICAgICAgIHRoaXMuX21vdmUgPSB0aGlzLl9tb3ZlLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuX2RyYWdFbmQgPSB0aGlzLl9kcmFnRW5kLmJpbmQodGhpcyk7XG4gICAgfVxuXG4gICAgX21vdW50KCkge1xuICAgICAgICBpZiAoc2Nyb2xsQmFyV2lkdGggPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgc2Nyb2xsQmFyV2lkdGggPSBnZXRTY3JvbGxiYXJXaWR0aCgpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX2NhbGNIZWFkZXJQYWRkaW5nKCk7XG4gICAgfVxuXG4gICAgaXNDaGVja0FsbCgpIHtcbiAgICAgICAgY29uc3QgY2hlY2tlZEtleXMgPSB0aGlzLmdldCgnY2hlY2tlZEtleXMnKTtcbiAgICAgICAgY29uc3QgZGF0YUxlbmd0aCA9IHRoaXMuZ2V0KCdkYXRhJykubGVuZ3RoO1xuICAgICAgICBjb25zdCBkaXNhYmxlZEFtb3VudCA9IHRoaXMuZ2V0KFwiX2Rpc2FibGVkQW1vdW50XCIpO1xuICAgICAgICBjb25zdCBhbW91bnQgPSBkYXRhTGVuZ3RoIC0gZGlzYWJsZWRBbW91bnQ7XG4gICAgICAgIHJldHVybiBhbW91bnQgJiYgY2hlY2tlZEtleXMubGVuZ3RoID09PSBhbW91bnQ7IFxuICAgIH1cblxuICAgIGlzQ2hlY2tlZChrZXkpIHtcbiAgICAgICAgY29uc3Qge2NoZWNrVHlwZSwgY2hlY2tlZEtleSwgY2hlY2tlZEtleXN9ID0gdGhpcy5nZXQoKTtcbiAgICAgICAgaWYgKGNoZWNrVHlwZSA9PT0gJ2NoZWNrYm94Jykge1xuICAgICAgICAgICAgcmV0dXJuIH5jaGVja2VkS2V5cy5pbmRleE9mKGtleSk7XG4gICAgICAgIH0gZWxzZSBpZiAoY2hlY2tUeXBlID09PSAncmFkaW8nKSB7XG4gICAgICAgICAgICByZXR1cm4gY2hlY2tlZEtleSA9PT0ga2V5O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cblxuICAgIGNoZWNrQWxsKCkge1xuICAgICAgICBjb25zdCByb3dLZXkgPSB0aGlzLmdldCgncm93S2V5Jyk7XG4gICAgICAgIGNvbnN0IGRpc2FibGVSb3cgPSB0aGlzLmdldCgnZGlzYWJsZVJvdycpO1xuICAgICAgICBjb25zdCBjaGVja2VkS2V5cyA9IFtdO1xuICAgICAgICB0aGlzLmdldCgnZGF0YScpLmZvckVhY2goKHZhbHVlLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgaWYgKCFkaXNhYmxlUm93LmNhbGwodGhpcywgdmFsdWUsIGluZGV4KSkge1xuICAgICAgICAgICAgICAgIGNoZWNrZWRLZXlzLnB1c2gocm93S2V5LmNhbGwodGhpcywgdmFsdWUsIGluZGV4KSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLnNldCgnY2hlY2tlZEtleXMnLCBjaGVja2VkS2V5cyk7XG4gICAgfVxuXG4gICAgdW5jaGVja0FsbCgpIHtcbiAgICAgICAgdGhpcy5zZXQoJ2NoZWNrZWRLZXlzJywgW10pO1xuICAgIH1cblxuICAgIGNoZWNrUm93KGtleSkge1xuICAgICAgICB0aGlzLl9jaGVja1VuY2hlY2tSb3coa2V5LCB0cnVlLCBmYWxzZSk7XG4gICAgfVxuXG4gICAgdW5jaGVja1JvdyhrZXkpIHtcbiAgICAgICAgdGhpcy5fY2hlY2tVbmNoZWNrUm93KGtleSwgZmFsc2UsIGZhbHNlKTtcbiAgICB9XG5cbiAgICBzaHJpbmtSb3coa2V5KSB7XG4gICAgICAgIHRoaXMuX2V4cGFuZFNocmlua1JvdyhrZXksIGZhbHNlLCBmYWxzZSk7XG4gICAgfVxuXG4gICAgZXhwYW5kUm93KGtleSkge1xuICAgICAgICB0aGlzLl9leHBhbmRTaHJpbmtSb3coa2V5LCB0cnVlLCBmYWxzZSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQGJyaWVmIGdldCB0aGUgY2hlY2tlZCBkYXRhXG4gICAgICogQHJldHVybiB7QXJyYXl9XG4gICAgICovXG4gICAgZ2V0Q2hlY2tlZERhdGEoKSB7XG4gICAgICAgIGNvbnN0IHJvd0tleSA9IHRoaXMuZ2V0KCdyb3dLZXknKTtcbiAgICAgICAgY29uc3QgY2hlY2tUeXBlID0gdGhpcy5nZXQoJ2NoZWNrVHlwZScpO1xuICAgICAgICBpZiAoY2hlY2tUeXBlID09PSAnY2hlY2tib3gnKSB7XG4gICAgICAgICAgICBjb25zdCBjaGVja2VkS2V5cyA9IHRoaXMuZ2V0KCdjaGVja2VkS2V5cycpO1xuICAgICAgICAgICAgY29uc3QgY2hlY2tlZEtleXNNYXAgPSB7fTtcbiAgICAgICAgICAgIGNoZWNrZWRLZXlzLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgICAgICAgICAgICBjaGVja2VkS2V5c01hcFtpdGVtXSA9IHRydWU7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmdldCgnZGF0YScpLmZpbHRlcigodmFsdWUsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3Qga2V5ID0gcm93S2V5LmNhbGwodGhpcywgdmFsdWUsIGluZGV4KTtcbiAgICAgICAgICAgICAgICByZXR1cm4gY2hlY2tlZEtleXNNYXBba2V5XTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2UgaWYgKGNoZWNrVHlwZSA9PT0gJ3JhZGlvJykge1xuICAgICAgICAgICAgY29uc3QgY2hlY2tlZEtleSA9IHRoaXMuZ2V0KCdjaGVja2VkS2V5Jyk7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5nZXQoJ2RhdGEnKS5maWx0ZXIoKHZhbHVlLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiByb3dLZXkuY2FsbCh0aGlzLCB2YWx1ZSwgaW5kZXgpID09PSBjaGVja2VkS2V5O1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gW107XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBfY2FsY0hlYWRlclBhZGRpbmcoKSB7XG4gICAgICAgIGlmICh0aGlzLmdldCgnZml4SGVhZGVyJykpIHtcbiAgICAgICAgICAgIGNvbnN0IHRhYmxlSGVpZ2h0ID0gdGhpcy50YWJsZS5vZmZzZXRIZWlnaHQ7XG4gICAgICAgICAgICBjb25zdCBjb250YWluZXJIZWlnaHQgPSB0aGlzLnNjcm9sbC5vZmZzZXRIZWlnaHQ7XG4gICAgICAgICAgICBjb25zdCBoZWFkZXJIZWlnaHQgPSB0aGlzLmhlYWRlci5vZmZzZXRIZWlnaHQ7XG4gICAgICAgICAgICB0aGlzLnNldCgnX3BhZGRpbmcnLCB0YWJsZUhlaWdodCAtIGhlYWRlckhlaWdodCA+IGNvbnRhaW5lckhlaWdodCA/IHNjcm9sbEJhcldpZHRoIDogMCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBfdXBkYXRlRGlzYWJsZWRBbW91bnQoKSB7XG4gICAgICAgIGxldCBkaXNhYmxlZEFtb3VudCA9IDA7XG4gICAgICAgIGNvbnN0IGRpc2FibGVSb3cgPSB0aGlzLmdldCgnZGlzYWJsZVJvdycpO1xuICAgICAgICB0aGlzLmdldCgnZGF0YScpLmZvckVhY2goKGl0ZW0sIGluZGV4KSA9PiB7XG4gICAgICAgICAgICBpZiAoZGlzYWJsZVJvdy5jYWxsKHRoaXMsIGl0ZW0sIGluZGV4KSkge1xuICAgICAgICAgICAgICAgIGRpc2FibGVkQW1vdW50Kys7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLnNldCgnX2Rpc2FibGVkQW1vdW50JywgZGlzYWJsZWRBbW91bnQpO1xuICAgIH1cblxuICAgIF90b2dnbGVDaGVja0FsbChjLCBjaGVja2VkKSB7XG4gICAgICAgIGlmIChjaGVja2VkKSB7XG4gICAgICAgICAgICB0aGlzLmNoZWNrQWxsKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnVuY2hlY2tBbGwoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIF9jbGlja1Jvdyh2YWx1ZSwgaW5kZXgsIGtleSwgZSkge1xuICAgICAgICAvLyBpZiBpcyBmcm9tIGNoZWNrYm94IG9yIHJhZGlvIHRoZW4gZG8gbm90aGluZ1xuICAgICAgICBpZiAoZS50YXJnZXQudGFnTmFtZS50b0xvd2VyQ2FzZSgpID09PSAnaW5wdXQnKSByZXR1cm47XG4gICAgICAgIGlmICh0aGlzLmdldCgnZGlzYWJsZVJvdycpLmNhbGwodGhpcywgdmFsdWUsIGluZGV4KSkgcmV0dXJuO1xuXG4gICAgICAgIGlmICh0aGlzLmdldCgncm93Q2hlY2thYmxlJykpIHtcbiAgICAgICAgICAgIHRoaXMuX2NoZWNrVW5jaGVja1JvdyhrZXkpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuZ2V0KCdyb3dFeHBhbmRhYmxlJykpIHtcbiAgICAgICAgICAgIHRoaXMuX2V4cGFuZFNocmlua1JvdyhrZXkpOyBcbiAgICAgICAgfVxuICAgIH1cblxuICAgIF9jaGVja1VuY2hlY2tSb3coa2V5LCBpc0NoZWNrID0gZmFsc2UsIGlzVG9nZ2xlID0gdHJ1ZSkge1xuICAgICAgICBjb25zdCBjaGVja1R5cGUgPSB0aGlzLmdldCgnY2hlY2tUeXBlJyk7XG4gICAgICAgIGlmIChjaGVja1R5cGUgPT09ICdjaGVja2JveCcpIHtcbiAgICAgICAgICAgIGNvbnN0IGNoZWNrZWRLZXlzID0gdGhpcy5nZXQoJ2NoZWNrZWRLZXlzJykuc2xpY2UoMCk7XG4gICAgICAgICAgICBjb25zdCBpID0gY2hlY2tlZEtleXMuaW5kZXhPZihrZXkpO1xuICAgICAgICAgICAgaWYgKCghaXNDaGVjayB8fCBpc1RvZ2dsZSkgJiYgaSA+IC0xKSB7XG4gICAgICAgICAgICAgICAgY2hlY2tlZEtleXMuc3BsaWNlKGksIDEpO1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0KCdjaGVja2VkS2V5cycsIGNoZWNrZWRLZXlzKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoaXNDaGVjayB8fCBpc1RvZ2dsZSkge1xuICAgICAgICAgICAgICAgIGNoZWNrZWRLZXlzLnB1c2goa2V5KTtcbiAgICAgICAgICAgICAgICB0aGlzLnNldCgnY2hlY2tlZEtleXMnLCBjaGVja2VkS2V5cyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAoY2hlY2tUeXBlID09PSAncmFkaW8nKSB7XG4gICAgICAgICAgICB0aGlzLnNldCgnY2hlY2tlZEtleScsIGtleSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBfZXhwYW5kU2hyaW5rUm93KGtleSwgaXNFeHBhbmQgPSBmYWxzZSwgaXNUb2dnbGUgPSB0cnVlKSB7XG4gICAgICAgIGlmICh0eXBlb2YgdGhpcy5nZXQoJ2V4cGFuZCcpICE9PSAnZnVuY3Rpb24nKSByZXR1cm47XG5cbiAgICAgICAgY29uc3QgZXhwYW5kZWRLZXlzID0gdGhpcy5nZXQoJ2V4cGFuZGVkS2V5cycpLnNsaWNlKDApO1xuICAgICAgICBjb25zdCBpID0gZXhwYW5kZWRLZXlzLmluZGV4T2Yoa2V5KTtcbiAgICAgICAgaWYgKCghaXNFeHBhbmQgfHwgaXNUb2dnbGUpICYmIGkgPiAtMSkge1xuICAgICAgICAgICAgZXhwYW5kZWRLZXlzLnNwbGljZShpLCAxKTtcbiAgICAgICAgICAgIHRoaXMuc2V0KCdleHBhbmRlZEtleXMnLCBleHBhbmRlZEtleXMpO1xuICAgICAgICB9IGVsc2UgaWYgKGlzRXhwYW5kIHx8IGlzVG9nZ2xlKSB7XG4gICAgICAgICAgICBleHBhbmRlZEtleXMucHVzaChrZXkpO1xuICAgICAgICAgICAgdGhpcy5zZXQoJ2V4cGFuZGVkS2V5cycsIGV4cGFuZGVkS2V5cyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBfc29ydChrZXksIHZhbHVlKSB7XG4gICAgICAgIGNvbnN0IHNvcnQgPSBPYmplY3QuYXNzaWduKHt9LCB0aGlzLmdldCgnc29ydCcpKTtcbiAgICAgICAgc29ydC5rZXkgPSBrZXk7XG4gICAgICAgIHNvcnQudHlwZSA9IHNvcnQudHlwZSA9PT0gJ2Rlc2MnID8gJ2FzYycgOiAnZGVzYyc7XG4gICAgICAgIHRoaXMuc2V0KCdzb3J0Jywgc29ydCk7XG4gICAgfVxuXG4gICAgX2RyYWdTdGFydChlKSB7XG4gICAgICAgIC8vIGxlZnQga2V5XG4gICAgICAgIGlmIChlLndoaWNoICE9PSAxKSByZXR1cm47XG5cbiAgICAgICAgdGhpcy5fcmVzaXppbmcgPSB0cnVlO1xuICAgICAgICB0aGlzLl9jb250YWluZXJXaWR0aCA9IHRoaXMuZWxlbWVudC5vZmZzZXRXaWR0aDtcbiAgICAgICAgdGhpcy5feCA9IGUuY2xpZW50WDtcblxuICAgICAgICBjb25zdCBjdXJyZW50VGggPSBlLnRhcmdldC5wYXJlbnROb2RlO1xuICAgICAgICBjb25zdCBwcmV2VGggPSBjdXJyZW50VGgucHJldmlvdXNFbGVtZW50U2libGluZztcblxuICAgICAgICB0aGlzLl9jdXJyZW50VGhzID0gW2N1cnJlbnRUaF07XG4gICAgICAgIHRoaXMuX3ByZXZUaHMgPSBbcHJldlRoXTtcbiAgICAgICAgdGhpcy5fdGFibGVzID0gW3RoaXMudGFibGVdO1xuXG4gICAgICAgIGlmICh0aGlzLmdldCgnZml4SGVhZGVyJykpIHtcbiAgICAgICAgICAgIGNvbnN0IHRocyA9IHRoaXMudGFibGUuY2hpbGRyZW5bMF0uZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ3RoJyk7XG4gICAgICAgICAgICBjb25zdCBmaXhUaHMgPSBjdXJyZW50VGgucGFyZW50Tm9kZS5jaGlsZHJlbjtcbiAgICAgICAgICAgIGNvbnN0IGluZGV4ID0gc2xpY2UuY2FsbChmaXhUaHMpLmluZGV4T2YoY3VycmVudFRoKTtcbiAgICAgICAgICAgIHRoaXMuX2N1cnJlbnRUaHMucHVzaCh0aHNbaW5kZXhdKTtcbiAgICAgICAgICAgIHRoaXMuX3ByZXZUaHMucHVzaCh0aHNbaW5kZXggLSAxXSk7XG4gICAgICAgICAgICAvLyB0aGlzLl90YWJsZXMucHVzaCh0aGlzLmhlYWRlci5jaGlsZHJlblswXSk7XG4gICAgICAgICAgICAvLyBpZiBmaXhIZWFkZXIgd2Ugc2hvdWxkIGNoYW5nZSB0aGUgd2lkdGggb2YgaGVhZGVyIGFuZCBzY3JvbGxcbiAgICAgICAgICAgIHRoaXMuX3RhYmxlcyA9IFt0aGlzLmhlYWRlciwgdGhpcy5zY3JvbGxdO1xuICAgICAgICB9XG5cbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgdGhpcy5fbW92ZSk7XG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCB0aGlzLl9kcmFnRW5kKTtcbiAgICB9XG5cbiAgICBfbW92ZShlKSB7XG4gICAgICAgIGlmICh0aGlzLl9yZXNpemluZykge1xuICAgICAgICAgICAgY29uc3QgZGVsWCA9IGUuY2xpZW50WCAtIHRoaXMuX3g7XG4gICAgICAgICAgICBjb25zdCBwcmV2V2lkdGggPSB0aGlzLl9wcmV2VGhzWzBdLm9mZnNldFdpZHRoICsgZGVsWDtcbiAgICAgICAgICAgIGNvbnN0IHRhYmxlV2lkdGggPSB0aGlzLl90YWJsZXNbMF0ub2Zmc2V0V2lkdGggKyBkZWxYO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBpZiAocHJldldpZHRoIDwgTUlOX1dJRFRIKSByZXR1cm47XG5cbiAgICAgICAgICAgIHRoaXMuX3ByZXZUaHMuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgICAgICAgICAgICBpdGVtLnN0eWxlLndpZHRoID0gcHJldldpZHRoICsgJ3B4JztcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBpZiAodGhpcy5fY29udGFpbmVyV2lkdGggPj0gdGFibGVXaWR0aCkge1xuICAgICAgICAgICAgICAgIHRoaXMuX3RhYmxlcy5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICAgICAgICAgICAgICBpdGVtLnN0eWxlLndpZHRoID0gJzEwMCUnO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLl90YWJsZXMuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaXRlbS5zdHlsZS53aWR0aCA9IHRhYmxlV2lkdGggKyAncHgnO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLl94ID0gZS5jbGllbnRYO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgX2RyYWdFbmQoZSkge1xuICAgICAgICBpZiAodGhpcy5fcmVzaXppbmcpIHtcbiAgICAgICAgICAgIHRoaXMuX3Jlc2l6aW5nID0gZmFsc2U7XG4gICAgICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCB0aGlzLl9tb3ZlKTtcbiAgICAgICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCB0aGlzLl9kcmFnRW5kKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIF9kZXN0cm95KCkge1xuICAgICAgICB0aGlzLl9kcmFnRW5kKCk7XG4gICAgfVxufVxuXG5leHBvcnQge1RhYmxlLCBDb2x1bW4gYXMgVGFibGVDb2x1bW59O1xuXG4vLyByZWZlcmVuY2U6IGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvMTMzODI1MTYvZ2V0dGluZy1zY3JvbGwtYmFyLXdpZHRoLXVzaW5nLWphdmFzY3JpcHRcbmZ1bmN0aW9uIGdldFNjcm9sbGJhcldpZHRoKCkge1xuICAgIHZhciBvdXRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgb3V0ZXIuc3R5bGUudmlzaWJpbGl0eSA9IFwiaGlkZGVuXCI7XG4gICAgb3V0ZXIuc3R5bGUud2lkdGggPSBcIjEwMHB4XCI7XG4gICAgb3V0ZXIuc3R5bGUubXNPdmVyZmxvd1N0eWxlID0gXCJzY3JvbGxiYXJcIjsgLy8gbmVlZGVkIGZvciBXaW5KUyBhcHBzXG5cbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKG91dGVyKTtcblxuICAgIHZhciB3aWR0aE5vU2Nyb2xsID0gb3V0ZXIub2Zmc2V0V2lkdGg7XG4gICAgLy8gZm9yY2Ugc2Nyb2xsYmFyc1xuICAgIG91dGVyLnN0eWxlLm92ZXJmbG93ID0gXCJzY3JvbGxcIjtcblxuICAgIC8vIGFkZCBpbm5lcmRpdlxuICAgIHZhciBpbm5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgaW5uZXIuc3R5bGUud2lkdGggPSBcIjEwMCVcIjtcbiAgICBvdXRlci5hcHBlbmRDaGlsZChpbm5lcik7XG5cbiAgICB2YXIgd2lkdGhXaXRoU2Nyb2xsID0gaW5uZXIub2Zmc2V0V2lkdGg7XG5cbiAgICAvLyByZW1vdmUgZGl2c1xuICAgIG91dGVyLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQob3V0ZXIpO1xuXG4gICAgcmV0dXJuIHdpZHRoTm9TY3JvbGwgLSB3aWR0aFdpdGhTY3JvbGw7XG59XG5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvdGFibGUvaW5kZXguanMiLCJpbXBvcnQgQ2hlY2tib3ggZnJvbSAnLi4vY2hlY2tib3gnO2ltcG9ydCBSYWRpbyBmcm9tICcuLi9yYWRpbyc7aW1wb3J0IFJvdyBmcm9tICcuL3Jvdyc7aW1wb3J0IHtub3JtYWxpemV9IGZyb20gJ2ludGFjdCc7aW1wb3J0IENvbHVtbiBmcm9tICcuL2NvbHVtbic7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihvYmosIF9WZHQsIGJsb2NrcywgJGNhbGxlZSkge1xuXG5fVmR0IHx8IChfVmR0ID0gVmR0KTtcbm9iaiB8fCAob2JqID0ge30pO1xuYmxvY2tzIHx8IChibG9ja3MgPSB7fSk7XG52YXIgaCA9IF9WZHQubWlzcy5oLCBoYyA9IF9WZHQubWlzcy5oYywgaHUgPSBfVmR0Lm1pc3MuaHUsIHdpZGdldHMgPSB0aGlzICYmIHRoaXMud2lkZ2V0cyB8fCB7fSwgX2Jsb2NrcyA9IHt9LCBfX2Jsb2NrcyA9IHt9LFxuX191ID0gX1ZkdC51dGlscywgZXh0ZW5kID0gX191LmV4dGVuZCwgX2UgPSBfX3UuZXJyb3IsIF9jbGFzc05hbWUgPSBfX3UuY2xhc3NOYW1lLFxuX19vID0gX191Lk9wdGlvbnMsIF9nZXRNb2RlbCA9IF9fby5nZXRNb2RlbCwgX3NldE1vZGVsID0gX19vLnNldE1vZGVsLFxuX3NldENoZWNrYm94TW9kZWwgPSBfX3Uuc2V0Q2hlY2tib3hNb2RlbCwgX2RldGVjdENoZWNrYm94Q2hlY2tlZCA9IF9fdS5kZXRlY3RDaGVja2JveENoZWNrZWQsXG5fc2V0U2VsZWN0TW9kZWwgPSBfX3Uuc2V0U2VsZWN0TW9kZWwsXG5zZWxmID0gdGhpcy5kYXRhLCBzY29wZSA9IG9iaiwgQW5pbWF0ZSA9IHNlbGYgJiYgc2VsZi5BbmltYXRlLCBwYXJlbnQgPSAoJGNhbGxlZSB8fCB7fSkuX3N1cGVyXG5cblxuXG5cblxuXG5jb25zdCB7XG4gICAgY2hlY2tUeXBlLCBzY2hlbWUsIGNoZWNrZWRLZXlzLCBkYXRhLCByb3dLZXksIFxuICAgIGNsYXNzTmFtZSwgZml4SGVhZGVyLCBub0RhdGFUZW1wbGF0ZSwgZGlzYWJsZVJvdyxcbiAgICBncm91cHMsIHJlc2l6YWJsZSwgZXhwYW5kLCBleHBhbmRlZEtleXMsIHR5cGUsXG4gICAgc3R5bGUsIHJvd0NsYXNzTmFtZSwgY2hpbGRyZW4sIHNvcnRcbn0gPSBzZWxmLmdldCgpO1xuXG5sZXQgY29sU3BhbiA9IGNoZWNrVHlwZSA9PT0gJ2NoZWNrYm94JyB8fCBjaGVja1R5cGUgPT09ICdyYWRpbycgPyAxIDogMDtcbmNvbnN0IGV4cGFuZGFibGUgPSB0eXBlb2YgZXhwYW5kID09PSAnZnVuY3Rpb24nO1xuY29uc3QgX3NjaGVtZSA9IHt9O1xuXG5jb25zdCB0aGVhZENyZWF0b3IgPSAoKSA9PiBoKCd0aGVhZCcsIG51bGwsIGgoJ3RyJywgbnVsbCwgW2Z1bmN0aW9uKCkge3RyeSB7cmV0dXJuIFtjaGVja1R5cGUgPT09ICdjaGVja2JveCcgXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKSA/IGgoJ3RoJywgbnVsbCwgaChDaGVja2JveCwgeyd2YWx1ZSc6IGZ1bmN0aW9uKCkge3RyeSB7cmV0dXJuIFtzZWxmLmlzQ2hlY2tBbGwoKSBdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpLCAnZXYtJGNoYW5nZTp2YWx1ZSc6IGZ1bmN0aW9uKCkge3RyeSB7cmV0dXJuIFtzZWxmLl90b2dnbGVDaGVja0FsbCBdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpLCAnY2hpbGRyZW4nOiBudWxsLCAnX2NvbnRleHQnOiB0aGlzfSksICdrLXRoLWNoZWNrJykgOiBmdW5jdGlvbigpIHt0cnkge3JldHVybiBbY2hlY2tUeXBlID09PSAncmFkaW8nIF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcykgPyBoKCd0aCcsIG51bGwsIG51bGwsICdrLXRoLWNoZWNrJykgOiB1bmRlZmluZWQsICdcXG4gICAgICAgICcsIGZ1bmN0aW9uKCkge3RyeSB7cmV0dXJuIFtfX3UubWFwKHNjaGVtZSwgKGl0ZW0sIGtleSkgPT4ge1xuICAgICAgICAgICAgY29sU3BhbisrO1xuXG4gICAgICAgICAgICBpZiAoIV9fdS5pc09iamVjdChpdGVtKSkge1xuICAgICAgICAgICAgICAgIGl0ZW0gPSB7dGl0bGU6IGl0ZW19O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gaChDb2x1bW4sIHsuLi5mdW5jdGlvbigpIHt0cnkge3JldHVybiBbaXRlbSBdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpLCAna2V5JzogZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW2tleSBdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpLCAnJHBhcmVudCc6IGZ1bmN0aW9uKCkge3RyeSB7cmV0dXJuIFtzZWxmIF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcyksICdldi1jbGljayc6IGZ1bmN0aW9uKCkge3RyeSB7cmV0dXJuIFtpdGVtLnNvcnRhYmxlID8gc2VsZi5fc29ydC5iaW5kKHNlbGYsIGtleSwgaXRlbSkgOiB1bmRlZmluZWQgXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKSwgJ2V2LWRyYWdTdGFydCc6IGZ1bmN0aW9uKCkge3RyeSB7cmV0dXJuIFtzZWxmLl9kcmFnU3RhcnQgXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKSwgJ2NoaWxkcmVuJzogbnVsbCwgJ19jb250ZXh0JzogdGhpc30pXG4gICAgICAgIH0pIF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcyksICdcXG4gICAgICAgICcsIGZ1bmN0aW9uKCkge3RyeSB7cmV0dXJuIFsvLyBmb3IgdXNpbmcgVGFibGVDb2x1bW4gYXMgY2hpbGRyZW5cbiAgICAgICAgICAgIF9fdS5tYXAoY2hpbGRyZW4gPyAoQXJyYXkuaXNBcnJheShjaGlsZHJlbikgPyBjaGlsZHJlbiA6IFtjaGlsZHJlbl0pIDogY2hpbGRyZW4sIHZOb2RlID0+IHtcbiAgICAgICAgICAgICAgICBpZiAodk5vZGUudGFnID09PSBDb2x1bW4pIHtcbiAgICAgICAgICAgICAgICAgICAgY29sU3BhbisrO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBwcm9wcyA9IHsuLi52Tm9kZS5wcm9wcywgJHBhcmVudDogc2VsZn07XG4gICAgICAgICAgICAgICAgICAgIHZOb2RlLnByb3BzID0gcHJvcHM7XG4gICAgICAgICAgICAgICAgICAgIGlmIChwcm9wcy5rZXkgPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgX2UoJ2tleSBmb3IgVGFibGVDb2x1bW4gbXVzdCBiZSBzcGVjaWZpZWQuJyk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoL15cXGQrJC8udGVzdChwcm9wcy5rZXkpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBhdm9pZCBkaWdpdGFsIGtleVxuICAgICAgICAgICAgICAgICAgICAgICAgX2UoJ2RvblxcJ3QgdXNlIGRpZ2l0cyBhcyBrZXkuJyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgX3NjaGVtZVtwcm9wcy5rZXldID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6IHByb3BzLnRpdGxlLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGVtcGxhdGU6IHByb3BzLnRlbXBsYXRlIHx8IHByb3BzLmRlZmF1bHQsXG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB2Tm9kZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KSBcbiAgICAgICAgXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKSwgJ1xcbiAgICAnXSkpXG5cbmNvbnN0IHRoZWFkID0gdGhlYWRDcmVhdG9yKCk7XG5cbmNvbnN0IHRib2R5ID0gaCgndGJvZHknLCBudWxsLCBbJ1xcbiAgICAnLCBmdW5jdGlvbigpIHt0cnkge3JldHVybiBbZGF0YSAmJiBkYXRhLmxlbmd0aCA/IFxuICAgICAgICBfX3UubWFwKGRhdGEsICh2YWx1ZSwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGtleSA9IHJvd0tleS5jYWxsKHNlbGYsIHZhbHVlLCBpbmRleCk7XG4gICAgICAgICAgICBjb25zdCBkaXNhYmxlZCA9IGRpc2FibGVSb3cuY2FsbChzZWxmLCB2YWx1ZSwgaW5kZXgpO1xuICAgICAgICAgICAgY29uc3QgY2xhc3NOYW1lID0gcm93Q2xhc3NOYW1lLmNhbGwoc2VsZiwgdmFsdWUsIGluZGV4KTtcbiAgICAgICAgICAgIGNvbnN0IHRyID0gaChSb3csIHsna2V5JzogZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW2tleSBdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpLCAnZXYtY2xpY2snOiBmdW5jdGlvbigpIHt0cnkge3JldHVybiBbc2VsZi5fY2xpY2tSb3cuYmluZChzZWxmLCB2YWx1ZSwgaW5kZXgsIGtleSkgXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKSwgJ2NsYXNzTmFtZSc6IF9jbGFzc05hbWUoZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW3tcbiAgICAgICAgICAgICAgICAgICAgJ2stZGlzYWJsZWQnOiBkaXNhYmxlZCxcbiAgICAgICAgICAgICAgICAgICAgW2NsYXNzTmFtZV06IGNsYXNzTmFtZSxcbiAgICAgICAgICAgICAgICAgICAgJ2stY2hlY2tlZCc6IHNlbGYuaXNDaGVja2VkKGtleSksIFxuICAgICAgICAgICAgICAgIH0gXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKSksICdldi0kZGVzdHJveWVkJzogZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW3NlbGYuc2hyaW5rUm93LmJpbmQoc2VsZiwga2V5KSBdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpLCAnY2hpbGRyZW4nOiBbZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW2NoZWNrVHlwZSA9PT0gJ2NoZWNrYm94JyBdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpID8gaCgndGQnLCBudWxsLCBoKENoZWNrYm94LCB7J25hbWUnOiAnay10YWJsZS1jaGVja2JveCcsICd0cnVlVmFsdWUnOiBmdW5jdGlvbigpIHt0cnkge3JldHVybiBba2V5IF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcyksICdkaXNhYmxlZCc6IGZ1bmN0aW9uKCkge3RyeSB7cmV0dXJuIFtkaXNhYmxlZCBdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpLCAnY2hpbGRyZW4nOiBudWxsLCAnX2NvbnRleHQnOiB0aGlzLCB2YWx1ZTogX2dldE1vZGVsKHNlbGYsICdjaGVja2VkS2V5cycpLCAnZXYtJGNoYW5nZTp2YWx1ZSc6IGZ1bmN0aW9uKF9fYywgX19uKSB7IF9zZXRNb2RlbChzZWxmLCAnY2hlY2tlZEtleXMnLCBfX24pIH19KSkgOiBmdW5jdGlvbigpIHt0cnkge3JldHVybiBbY2hlY2tUeXBlID09PSAncmFkaW8nIF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcykgPyBoKCd0ZCcsIG51bGwsIGgoUmFkaW8sIHsnbmFtZSc6ICdrLXRhYmxlLXJhZGlvJywgJ3RydWVWYWx1ZSc6IGZ1bmN0aW9uKCkge3RyeSB7cmV0dXJuIFtrZXkgXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKSwgJ2Rpc2FibGVkJzogZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW2Rpc2FibGVkIF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcyksICdjaGlsZHJlbic6IG51bGwsICdfY29udGV4dCc6IHRoaXMsIHZhbHVlOiBfZ2V0TW9kZWwoc2VsZiwgJ2NoZWNrZWRLZXknKSwgJ2V2LSRjaGFuZ2U6dmFsdWUnOiBmdW5jdGlvbihfX2MsIF9fbikgeyBfc2V0TW9kZWwoc2VsZiwgJ2NoZWNrZWRLZXknLCBfX24pIH19KSkgOiB1bmRlZmluZWQsICdcXG4gICAgICAgICAgICAgICAgJywgZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW19fdS5tYXAoX191LmV4dGVuZCh7fSwgc2NoZW1lLCBfc2NoZW1lKSwgKGl0ZW0sIGtleSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBsZXQgdGQ7XG4gICAgICAgICAgICAgICAgICAgIGlmIChfX3UuaXNPYmplY3QoaXRlbSkgJiYgaXRlbS50ZW1wbGF0ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBpdGVtLnRlbXBsYXRlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGQgPSBpdGVtLnRlbXBsYXRlLmNhbGwoc2VsZiwgdmFsdWUsIGluZGV4KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBmb3IgSW50YWN0LVZ1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChub3JtYWxpemUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGQgPSBub3JtYWxpemUodGQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGQgPSBpdGVtLnRlbXBsYXRlO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHZhbHVlW2tleV0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGQgPSB2YWx1ZVtrZXldO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IG9iaiA9IHZhbHVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleXMgPSBrZXkuc3BsaXQoJy4nKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpID0gMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdoaWxlIChvYmogIT0gbnVsbCAmJiBpIDwga2V5cy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvYmogPSBvYmpba2V5c1tpKytdXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHRkID0gKGkgJiYgaSA9PT0ga2V5cy5sZW5ndGgpID8gb2JqIDogbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gaCgndGQnLCB7J3RpdGxlJzogZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW3R5cGVvZiB0ZCA9PT0gJ3N0cmluZycgfHwgdHlwZW9mIHRkID09PSAnbnVtYmVyJyA/IFxuICAgICAgICAgICAgICAgICAgICAgICAgdGQgOiB1bmRlZmluZWQgXG4gICAgICAgICAgICAgICAgICAgIF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcyl9LCBmdW5jdGlvbigpIHt0cnkge3JldHVybiBbdHlwZW9mIHRkID09PSAnYm9vbGVhbicgPyBTdHJpbmcodGQpIDogdGQgXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKSlcbiAgICAgICAgICAgICAgICB9KSBdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpLCAnXFxuICAgICAgICAgICAgJ10sICdfY29udGV4dCc6IHRoaXN9KTtcblxuICAgICAgICAgICAgaWYgKGV4cGFuZGFibGUgJiYgZXhwYW5kZWRLZXlzLmluZGV4T2Yoa2V5KSA+IC0xKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgICAgICAgICAgdHIsXG4gICAgICAgICAgICAgICAgICAgIGgoJ3RyJywgbnVsbCwgaCgndGQnLCB7J2NvbHNwYW4nOiBmdW5jdGlvbigpIHt0cnkge3JldHVybiBbY29sU3BhbiBdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpfSwgZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW2V4cGFuZC5jYWxsKHNlbGYsIHZhbHVlLCBpbmRleCkgXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKSksICdrLWV4cGFuZCcsIGZ1bmN0aW9uKCkge3RyeSB7cmV0dXJuIFtgJHtrZXl9LmV4cGFuZGAgXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKSlcbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiB0cjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSkgOlxuICAgICAgICBoKCd0cicsIG51bGwsIGgoJ3RkJywgeydjb2xzcGFuJzogZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW2NvbFNwYW4gXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKX0sIFsnXFxuICAgICAgICAgICAgICAgICcsIGZ1bmN0aW9uKCkge3RyeSB7cmV0dXJuIFtub0RhdGFUZW1wbGF0ZSBdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpLCAnXFxuICAgICAgICAgICAgJ10sICdrLW5vLWRhdGEnKSwgbnVsbCwgJ3RhYmxlX25vX2RhdGEnKVxuICAgIF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcyksICdcXG4nXSlcblxuY29uc3QgY2xhc3NOYW1lT2JqID0ge1xuICAgICdrLXRhYmxlLXdyYXBwZXInOiB0cnVlLFxuICAgIFtjbGFzc05hbWVdOiBjbGFzc05hbWUsXG4gICAgW2BrLSR7dHlwZX1gXTogdHlwZSAhPT0gJ2RlZmF1bHQnLFxufTtcblxuY29uc3QgdGFibGUgPSBoKCd0YWJsZScsIG51bGwsIFsnXFxuICAgICcsIGZ1bmN0aW9uKCkge3RyeSB7cmV0dXJuIFt0aGVhZCBdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpLCAnXFxuICAgICcsIGZ1bmN0aW9uKCkge3RyeSB7cmV0dXJuIFt0Ym9keSBdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpLCAnXFxuJ10sICdrLXRhYmxlJywgbnVsbCwgZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW2RvbSA9PiBzZWxmLnRhYmxlID0gZG9tIF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcykpXG5cbnJldHVybiBoKCdkaXYnLCB7J3N0eWxlJzogZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW3N0eWxlIF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcyl9LCBbZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW2ZpeEhlYWRlciBdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpID8gaCgnZGl2JywgeydzdHlsZSc6IGZ1bmN0aW9uKCkge3RyeSB7cmV0dXJuIFt7cGFkZGluZ1JpZ2h0OiBzZWxmLmdldCgnX3BhZGRpbmcnKSArICdweCd9IF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcyl9LCBoKCd0YWJsZScsIG51bGwsIFsnXFxuICAgICAgICAgICAgJywgZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW3RoZWFkQ3JlYXRvcigpIF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcyksICdcXG4gICAgICAgICddLCAnay10YWJsZScpLCAnay1maXhlZCcsIG51bGwsIGZ1bmN0aW9uKCkge3RyeSB7cmV0dXJuIFtkb20gPT4gc2VsZi5oZWFkZXIgPSBkb20gXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKSkgOiB1bmRlZmluZWQsICdcXG4gICAgJywgZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW2ZpeEhlYWRlciA/IFxuICAgICAgICBoKCdkaXYnLCB7J3N0eWxlJzogZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW3R5cGVvZiBmaXhIZWFkZXIgPT09ICdudW1iZXInIHx8IHR5cGVvZiBmaXhIZWFkZXIgPT09ICdzdHJpbmcnID9cbiAgICAgICAgICAgICAgICB7bWF4SGVpZ2h0OiBgJHtmaXhIZWFkZXJ9cHhgfSA6IHVuZGVmaW5lZFxuICAgICAgICAgICAgXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKX0sIGZ1bmN0aW9uKCkge3RyeSB7cmV0dXJuIFt0YWJsZSBdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpLCAnay1zY3JvbGwnLCBudWxsLCBmdW5jdGlvbigpIHt0cnkge3JldHVybiBbZG9tID0+IHNlbGYuc2Nyb2xsID0gZG9tIF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcykpIDpcbiAgICAgICAgdGFibGVcbiAgICBdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpLCAnXFxuJ10sIF9jbGFzc05hbWUoZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW2NsYXNzTmFtZU9iaiBdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpKSlcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL3RhYmxlL2luZGV4LnZkdCIsImltcG9ydCBJbnRhY3QgZnJvbSAnaW50YWN0JztcbmltcG9ydCB0ZW1wbGF0ZSBmcm9tICcuL3Jvdy52ZHQnO1xuXG4vLyBmb3IgdHIgJGRlc3Ryb3llZCBldmVudFxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGFibGVSb3cgZXh0ZW5kcyBJbnRhY3Qge1xuICAgIGdldCB0ZW1wbGF0ZSgpIHsgcmV0dXJuIHRlbXBsYXRlOyB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL3RhYmxlL3Jvdy5qcyIsIlxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24ob2JqLCBfVmR0LCBibG9ja3MsICRjYWxsZWUpIHtcblxuX1ZkdCB8fCAoX1ZkdCA9IFZkdCk7XG5vYmogfHwgKG9iaiA9IHt9KTtcbmJsb2NrcyB8fCAoYmxvY2tzID0ge30pO1xudmFyIGggPSBfVmR0Lm1pc3MuaCwgaGMgPSBfVmR0Lm1pc3MuaGMsIGh1ID0gX1ZkdC5taXNzLmh1LCB3aWRnZXRzID0gdGhpcyAmJiB0aGlzLndpZGdldHMgfHwge30sIF9ibG9ja3MgPSB7fSwgX19ibG9ja3MgPSB7fSxcbl9fdSA9IF9WZHQudXRpbHMsIGV4dGVuZCA9IF9fdS5leHRlbmQsIF9lID0gX191LmVycm9yLCBfY2xhc3NOYW1lID0gX191LmNsYXNzTmFtZSxcbl9fbyA9IF9fdS5PcHRpb25zLCBfZ2V0TW9kZWwgPSBfX28uZ2V0TW9kZWwsIF9zZXRNb2RlbCA9IF9fby5zZXRNb2RlbCxcbl9zZXRDaGVja2JveE1vZGVsID0gX191LnNldENoZWNrYm94TW9kZWwsIF9kZXRlY3RDaGVja2JveENoZWNrZWQgPSBfX3UuZGV0ZWN0Q2hlY2tib3hDaGVja2VkLFxuX3NldFNlbGVjdE1vZGVsID0gX191LnNldFNlbGVjdE1vZGVsLFxuc2VsZiA9IHRoaXMuZGF0YSwgc2NvcGUgPSBvYmosIEFuaW1hdGUgPSBzZWxmICYmIHNlbGYuQW5pbWF0ZSwgcGFyZW50ID0gKCRjYWxsZWUgfHwge30pLl9zdXBlclxucmV0dXJuIGgoJ3RyJywgey4uLmZ1bmN0aW9uKCkge3RyeSB7cmV0dXJuIFtzZWxmLmdldCgpIF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcyl9LCBmdW5jdGlvbigpIHt0cnkge3JldHVybiBbc2VsZi5nZXQoJ2NoaWxkcmVuJykgXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKSlcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL3RhYmxlL3Jvdy52ZHQiLCJ2YXIgbWFwID0ge1xuXHRcIi4vZGVtb3MvYmFzaWMvaW5kZXguanNcIjogXCIuL3NpdGUvY29tcG9uZW50cy90YWJsZS9kZW1vcy9iYXNpYy9pbmRleC5qc1wiXG59O1xuZnVuY3Rpb24gd2VicGFja0NvbnRleHQocmVxKSB7XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpKTtcbn07XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSB7XG5cdHZhciBpZCA9IG1hcFtyZXFdO1xuXHRpZighKGlkICsgMSkpIC8vIGNoZWNrIGZvciBudW1iZXIgb3Igc3RyaW5nXG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJy5cIik7XG5cdHJldHVybiBpZDtcbn07XG53ZWJwYWNrQ29udGV4dC5rZXlzID0gZnVuY3Rpb24gd2VicGFja0NvbnRleHRLZXlzKCkge1xuXHRyZXR1cm4gT2JqZWN0LmtleXMobWFwKTtcbn07XG53ZWJwYWNrQ29udGV4dC5yZXNvbHZlID0gd2VicGFja0NvbnRleHRSZXNvbHZlO1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrQ29udGV4dDtcbndlYnBhY2tDb250ZXh0LmlkID0gXCIuL3NpdGUvY29tcG9uZW50cy90YWJsZSByZWN1cnNpdmUgZGVtb3MuKmluZGV4LmpzJFwiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc2l0ZS9jb21wb25lbnRzL3RhYmxlIGRlbW9zLippbmRleC5qcyRcbi8vIG1vZHVsZSBpZCA9IC4vc2l0ZS9jb21wb25lbnRzL3RhYmxlIHJlY3Vyc2l2ZSBkZW1vcy4qaW5kZXguanMkXG4vLyBtb2R1bGUgY2h1bmtzID0gMTciLCJleHBvcnQge2RlZmF1bHQgYXMgZGF0YX0gZnJvbSAnLi9pbmRleC5qc29uJztcbmltcG9ydCBJbnRhY3QgZnJvbSAnaW50YWN0JztcbmltcG9ydCB0ZW1wbGF0ZSBmcm9tICcuL2luZGV4LnZkdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgSW50YWN0IHtcbiAgICBASW50YWN0LnRlbXBsYXRlKClcbiAgICBzdGF0aWMgdGVtcGxhdGUgPSB0ZW1wbGF0ZTtcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zaXRlL2NvbXBvbmVudHMvdGFibGUvZGVtb3MvYmFzaWMvaW5kZXguanMiLCJpbXBvcnQgVGFibGUgZnJvbSAna3BjL2NvbXBvbmVudHMvdGFibGUnO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24ob2JqLCBfVmR0LCBibG9ja3MsICRjYWxsZWUpIHtcblxuX1ZkdCB8fCAoX1ZkdCA9IFZkdCk7XG5vYmogfHwgKG9iaiA9IHt9KTtcbmJsb2NrcyB8fCAoYmxvY2tzID0ge30pO1xudmFyIGggPSBfVmR0Lm1pc3MuaCwgaGMgPSBfVmR0Lm1pc3MuaGMsIGh1ID0gX1ZkdC5taXNzLmh1LCB3aWRnZXRzID0gdGhpcyAmJiB0aGlzLndpZGdldHMgfHwge30sIF9ibG9ja3MgPSB7fSwgX19ibG9ja3MgPSB7fSxcbl9fdSA9IF9WZHQudXRpbHMsIGV4dGVuZCA9IF9fdS5leHRlbmQsIF9lID0gX191LmVycm9yLCBfY2xhc3NOYW1lID0gX191LmNsYXNzTmFtZSxcbl9fbyA9IF9fdS5PcHRpb25zLCBfZ2V0TW9kZWwgPSBfX28uZ2V0TW9kZWwsIF9zZXRNb2RlbCA9IF9fby5zZXRNb2RlbCxcbl9zZXRDaGVja2JveE1vZGVsID0gX191LnNldENoZWNrYm94TW9kZWwsIF9kZXRlY3RDaGVja2JveENoZWNrZWQgPSBfX3UuZGV0ZWN0Q2hlY2tib3hDaGVja2VkLFxuX3NldFNlbGVjdE1vZGVsID0gX191LnNldFNlbGVjdE1vZGVsLFxuc2VsZiA9IHRoaXMuZGF0YSwgc2NvcGUgPSBvYmosIEFuaW1hdGUgPSBzZWxmICYmIHNlbGYuQW5pbWF0ZSwgcGFyZW50ID0gKCRjYWxsZWUgfHwge30pLl9zdXBlclxuXG52YXIgc2NoZW1lID0ge2E6ICfooajlpLQxJywgYjogJ+ihqOWktDInfTtcbnZhciBkYXRhID0gW3thOiAn5ZOI5ZOIMScsIGI6ICflk4jlk4gyJ31dO1xuXG5yZXR1cm4gaCgnZGl2JywgbnVsbCwgW2goVGFibGUsIHsnc2NoZW1lJzogZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW3NjaGVtZV1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcyksICdkYXRhJzogZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW2RhdGExXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKSwgJ2NoaWxkcmVuJzogbnVsbCwgJ19jb250ZXh0JzogdGhpc30pLCBoKFRhYmxlLCB7J3NjaGVtZSc6IGZ1bmN0aW9uKCkge3RyeSB7cmV0dXJuIFtzY2hlbWVdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpLCAnZGF0YSc6IGZ1bmN0aW9uKCkge3RyeSB7cmV0dXJuIFtkYXRhMl1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcyksICdmaXhIZWFkZXInOiBmdW5jdGlvbigpIHt0cnkge3JldHVybiBbdHJ1ZV1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcyksICdjaGlsZHJlbic6IG51bGwsICdfY29udGV4dCc6IHRoaXN9KV0pXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc2l0ZS9jb21wb25lbnRzL3RhYmxlL2RlbW9zL2Jhc2ljL2luZGV4LnZkdCIsImltcG9ydCBBcnRpY2xlIGZyb20gJ34vc3JjL2NvbXBvbmVudHMvYXJ0aWNsZSc7XG5pbXBvcnQgZGF0YSBmcm9tICcuL2luZGV4Lmpzb24nO1xuXG5jb25zdCByID0gcmVxdWlyZS5jb250ZXh0KCcuLycsIHRydWUsIC9kZW1vcy4qaW5kZXguanMkLyk7XG5jb25zdCBkZW1vcyA9IHIua2V5cygpLm1hcChyKTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBBcnRpY2xlIHtcbiAgICBkZWZhdWx0cygpIHtcbiAgICAgICAgcmV0dXJuIHsuLi5zdXBlci5kZWZhdWx0cygpLCAuLi5kYXRhLCBkZW1vc307XG4gICAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NpdGUvY29tcG9uZW50cy90YWJsZS9pbmRleC5qcyIsIm1vZHVsZS5leHBvcnRzID0ge1wic2V0dGluZ1wiOntcInRpdGxlXCI6XCLooajmoLxcIixcImNhdGVnb3J5XCI6XCLnu4Tku7ZcIixcIm9yZGVyXCI6MX0sXCJjYXRhbG9nc1wiOltdLFwiY29udGVudHNcIjpcIjxoMSBpZD0naGVhZGVyLSVFOCVBMSVBOCVFNiVBMCVCQyVFNSVCMSU5RSVFNiU4MCVBNyUyMFRhYmxlJz7ooajmoLzlsZ7mgKcgVGFibGU8L2gxPjxkaXYgY2xhc3M9XFxcImstdGFibGUtd3JhcHBlciBrLWJvcmRlclxcXCI+XFxuICAgICAgICAgICAgICAgICAgICA8dGFibGUgY2xhc3M9XFxcImstdGFibGVcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aGVhZD48dHI+XFxuPHRoPuWxnuaApzwvdGg+XFxuPHRoPuivtOaYjjwvdGg+XFxuPHRoPuexu+WeizwvdGg+XFxuPHRoPum7mOiupOWAvDwvdGg+XFxuPC90cj5cXG48L3RoZWFkPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0Ym9keT48dHI+XFxuPHRkPmRhdGE8L3RkPlxcbjx0ZD7ooajmoLzmlbDmja48L3RkPlxcbjx0ZD48Y29kZT5BcnJheTwvY29kZT48L3RkPlxcbjx0ZD48Y29kZT5bXTwvY29kZT48L3RkPlxcbjwvdHI+XFxuPHRyPlxcbjx0ZD5zY2hlbWU8L3RkPlxcbjx0ZD7ooajlpLTkv6Hmga88L3RkPlxcbjx0ZD48Y29kZT5PYmplY3Q8L2NvZGU+PC90ZD5cXG48dGQ+PGNvZGU+e308L2NvZGU+PC90ZD5cXG48L3RyPlxcbjx0cj5cXG48dGQ+Y2hlY2tUeXBlPC90ZD5cXG48dGQ+5qGG55qE57G75Z6LOiDljZXpgIkgcmFkaW8gLCDlpI3pgIkgY2hlY2tib3ggLCAg5rKh5pyJIG5vbmU8L3RkPlxcbjx0ZD48Y29kZT5TdHJpbmc8L2NvZGU+PC90ZD5cXG48dGQ+PGNvZGU+JnF1b3Q7Y2hlY2tib3gmcXVvdDs8L2NvZGU+PC90ZD5cXG48L3RyPlxcbjx0cj5cXG48dGQ+bm9EYXRhVGVtcGxhdGU8L3RkPlxcbjx0ZD7lvZPmsqHmnInmlbDmja7nmoTml7blgJnlsZXnpLrkv6Hmga88L3RkPlxcbjx0ZD48Y29kZT5TdHJpbmc8L2NvZGU+PC90ZD5cXG48dGQ+PGNvZGU+JnF1b3Q7LyjjhJJv44SSKS9+fiDmsqHmnInmib7liLDkurLopoHnmoTmlbDmja7lk6Z+JnF1b3Q7PC9jb2RlPjwvdGQ+XFxuPC90cj5cXG48dHI+XFxuPHRkPmZpeEhlYWRlcjwvdGQ+XFxuPHRkPuihqOWktOWbuuWumjwvdGQ+XFxuPHRkPjxjb2RlPkJvb2xlYW48L2NvZGU+PC90ZD5cXG48dGQ+PGNvZGU+ZmFsc2U8L2NvZGU+PC90ZD5cXG48L3RyPlxcbjwvdGJvZHk+XFxuICAgICAgICAgICAgICAgICAgICA8L3RhYmxlPlxcbiAgICAgICAgICAgICAgICA8L2Rpdj48cD58IHJvd0tleSB8IOiuvue9ruihjOeahGtleSB8IDxjb2RlPkZ1bmN0aW9uPC9jb2RlPiB8IDxjb2RlPmZ1bmN0aW9uKHZhbHVlLCBpbmRleCkgeyAgcmV0dXJuIGluZGV4OyB9PC9jb2RlPiB8fCByb3dDbGFzc05hbWUgfCDorr7nva7ooYznmoRjbGFzcyB8IDxjb2RlPkZ1bmN0aW9uPC9jb2RlPiB8IDxjb2RlPmZ1bmN0aW9uKHZhbHVlLCBpbmRleCkgeyAgfTwvY29kZT4gfHwgY2hlY2tlZEtleXMgfCDlk6rooYzooqvpgInkuK3vvIjpkojlr7nlpJrpgInvvIkgfCA8Y29kZT5BcnJheTwvY29kZT4gfCA8Y29kZT5bXTwvY29kZT4gfHwgY2hlY2tlZEtleSB8IOWTquihjOiiq+mAieS4re+8iOmSiOWvueWNlemAie+8iSB8IDxjb2RlPuS7u+S9lTwvY29kZT4gfCA8Y29kZT51bmRlZmluZWQ8L2NvZGU+IHx8IHJvd0NoZWNrYWJsZSB8IOaYr+WQpuaVtOihjOmAieS4rSB8IDxjb2RlPkJvb2xlYW48L2NvZGU+IHwgPGNvZGU+dHJ1ZTwvY29kZT4gfHwgcm93RXhwYW5kYWJsZSB8IOaYr+WQpueCueWHu+aVtOihjOWxleW8gCB8IDxjb2RlPkJvb2xlYW48L2NvZGU+IHwgPGNvZGU+dHJ1ZTwvY29kZT4gfHwgZGlzYWJsZVJvdyB8IOemgeeUqOafkOS4gOihjCB8IDxjb2RlPkZ1bmN0aW9uPC9jb2RlPiB8IDxjb2RlPmZ1bmN0aW9uKGRhdGEsIGluZGV4KSB7IHJldHVybiBmYWxzZSB9PC9jb2RlPiB8fCBzb3J0IHwg5o6S5bqPIHwgPGNvZGU+T2JqZWN0PC9jb2RlPiB8IDxjb2RlPnt9PC9jb2RlPiB8fCBncm91cHMgfCDliIbnu4QgfCA8Y29kZT5PYmplY3Q8L2NvZGU+IHwgPGNvZGU+e308L2NvZGU+IHx8IHJlc2l6YWJsZSB8IOaYr+WQpuWPr+S7peihqOWktOaLluWKqCB8IDxjb2RlPkJvb2xlYW48L2NvZGU+IHwgPGNvZGU+ZmFsc2U8L2NvZGU+IHx8IGV4cGFuZCB8IOWxleW8gOadoeS7tiB8IDxjb2RlPkZ1bmN0aW9uPC9jb2RlPiB8IDxjb2RlPnVuZGVmaW5lZDwvY29kZT4gfHwgZXhwYW5kZWRLZXlzIHwg5ZOq6KGM5bGV5byAIHwgPGNvZGU+QXJyYXk8L2NvZGU+IHwgPGNvZGU+W108L2NvZGU+IHx8IHR5cGUgfCDnsbvlnosgfCA8Y29kZT5TdHJpbmc8L2NvZGU+IHwgPGNvZGU+JnF1b3Q7ZGVmYXVsdCZxdW90OzwvY29kZT4gfHwgX3BhZGRpbmcgfCBwYWRkaW5nIHwgPGNvZGU+TnVtYmVyPC9jb2RlPiB8IDxjb2RlPjA8L2NvZGU+IHx8IF9kaXNhYmxlZEFtb3VudCB8IGRpc2FibGVkQW1vdW50IHwgPGNvZGU+TnVtYmVyPC9jb2RlPiB8IDxjb2RlPjA8L2NvZGU+IHw8L3A+XFxuXCIsXCJjb2Rlc1wiOlt7XCJsYW5ndWFnZVwiOlwianNcIixcImNvbnRlbnRcIjpcImltcG9ydCBJbnRhY3QgZnJvbSAnaW50YWN0JztcXG5pbXBvcnQgdGVtcGxhdGUgZnJvbSAnLi9pbmRleC52ZHQnO1xcblxcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgSW50YWN0IHtcXG4gICAgQEludGFjdC50ZW1wbGF0ZSgpXFxuICAgIHN0YXRpYyB0ZW1wbGF0ZSA9IHRlbXBsYXRlO1xcbn1cIn1dLFwiaW5kZXhcIjo5MyxcInNpZGVCYXJzXCI6e1wi57uE5Lu2XCI6W3tcInRpdGxlXCI6XCLpnaLljIXlsZFcIixcInBhdGhcIjpcImNvbXBvbmVudHMvYnJlYWRjcnVtYi9pbmRleC5tZFwiLFwiY2hpbGRyZW5cIjpbe1widGl0bGVcIjpcIuWxnuaAp1wiLFwicGF0aFwiOlwiI2hlYWRlci0lRTUlQjElOUUlRTYlODAlQTdcIixcImxldmVsXCI6MSxcImNvbnRlbnRcIjpcIjxoMSBpZD0naGVhZGVyLSVFNSVCMSU5RSVFNiU4MCVBNyc+5bGe5oCnPC9oMT5cIixcInRleHRcIjpcIuWxnuaAp1wiLFwiY2hpbGRyZW5cIjpbe1widGl0bGVcIjpcIkJyZWFkY3J1bWJcIixcInBhdGhcIjpcIiNoZWFkZXItQnJlYWRjcnVtYlwiLFwibGV2ZWxcIjoyLFwiY29udGVudFwiOlwiPGgyIGlkPSdoZWFkZXItQnJlYWRjcnVtYic+QnJlYWRjcnVtYjwvaDI+XCIsXCJ0ZXh0XCI6XCJCcmVhZGNydW1iXCIsXCJjaGlsZHJlblwiOltdfSx7XCJ0aXRsZVwiOlwiQnJlYWRjcnVtYkl0ZW1cIixcInBhdGhcIjpcIiNoZWFkZXItQnJlYWRjcnVtYkl0ZW1cIixcImxldmVsXCI6MixcImNvbnRlbnRcIjpcIjxoMiBpZD0naGVhZGVyLUJyZWFkY3J1bWJJdGVtJz5CcmVhZGNydW1iSXRlbTwvaDI+XCIsXCJ0ZXh0XCI6XCJCcmVhZGNydW1iSXRlbVwiLFwiY2hpbGRyZW5cIjpbXX1dfV19LHtcInRpdGxlXCI6XCLmjInpkq5cIixcInBhdGhcIjpcImNvbXBvbmVudHMvYnV0dG9uL2luZGV4Lm1kXCIsXCJjaGlsZHJlblwiOlt7XCJ0aXRsZVwiOlwi5bGe5oCnXCIsXCJwYXRoXCI6XCIjaGVhZGVyLSVFNSVCMSU5RSVFNiU4MCVBN1wiLFwibGV2ZWxcIjoxLFwiY29udGVudFwiOlwiPGgxIGlkPSdoZWFkZXItJUU1JUIxJTlFJUU2JTgwJUE3Jz7lsZ7mgKc8L2gxPlwiLFwidGV4dFwiOlwi5bGe5oCnXCIsXCJjaGlsZHJlblwiOlt7XCJ0aXRsZVwiOlwiQnV0dG9uXCIsXCJwYXRoXCI6XCIjaGVhZGVyLUJ1dHRvblwiLFwibGV2ZWxcIjoyLFwiY29udGVudFwiOlwiPGgyIGlkPSdoZWFkZXItQnV0dG9uJz5CdXR0b248L2gyPlwiLFwidGV4dFwiOlwiQnV0dG9uXCIsXCJjaGlsZHJlblwiOltdfSx7XCJ0aXRsZVwiOlwiQnV0dG9uR3JvdXBcIixcInBhdGhcIjpcIiNoZWFkZXItQnV0dG9uR3JvdXBcIixcImxldmVsXCI6MixcImNvbnRlbnRcIjpcIjxoMiBpZD0naGVhZGVyLUJ1dHRvbkdyb3VwJz5CdXR0b25Hcm91cDwvaDI+XCIsXCJ0ZXh0XCI6XCJCdXR0b25Hcm91cFwiLFwiY2hpbGRyZW5cIjpbXX1dfSx7XCJ0aXRsZVwiOlwi5pa55rOVXCIsXCJwYXRoXCI6XCIjaGVhZGVyLSVFNiU5NiVCOSVFNiVCMyU5NVwiLFwibGV2ZWxcIjoxLFwiY29udGVudFwiOlwiPGgxIGlkPSdoZWFkZXItJUU2JTk2JUI5JUU2JUIzJTk1Jz7mlrnms5U8L2gxPlwiLFwidGV4dFwiOlwi5pa55rOVXCIsXCJjaGlsZHJlblwiOlt7XCJ0aXRsZVwiOlwiQnV0dG9uXCIsXCJwYXRoXCI6XCIjaGVhZGVyLUJ1dHRvblwiLFwibGV2ZWxcIjoyLFwiY29udGVudFwiOlwiPGgyIGlkPSdoZWFkZXItQnV0dG9uJz5CdXR0b248L2gyPlwiLFwidGV4dFwiOlwiQnV0dG9uXCIsXCJjaGlsZHJlblwiOltdfV19XX0se1widGl0bGVcIjpcIuWkjemAieahhlwiLFwicGF0aFwiOlwiY29tcG9uZW50cy9jaGVja2JveC9pbmRleC5tZFwiLFwiY2hpbGRyZW5cIjpbe1widGl0bGVcIjpcIuWxnuaAp1wiLFwicGF0aFwiOlwiI2hlYWRlci0lRTUlQjElOUUlRTYlODAlQTdcIixcImxldmVsXCI6MSxcImNvbnRlbnRcIjpcIjxoMSBpZD0naGVhZGVyLSVFNSVCMSU5RSVFNiU4MCVBNyc+5bGe5oCnPC9oMT5cIixcInRleHRcIjpcIuWxnuaAp1wiLFwiY2hpbGRyZW5cIjpbXX1dfSx7XCJ0aXRsZVwiOlwi5pel5pyf6YCJ5oupXCIsXCJwYXRoXCI6XCJjb21wb25lbnRzL2RhdGVwaWNrZXIvaW5kZXgubWRcIixcImNoaWxkcmVuXCI6W3tcInRpdGxlXCI6XCLlsZ7mgKdcIixcInBhdGhcIjpcIiNoZWFkZXItJUU1JUIxJTlFJUU2JTgwJUE3XCIsXCJsZXZlbFwiOjEsXCJjb250ZW50XCI6XCI8aDEgaWQ9J2hlYWRlci0lRTUlQjElOUUlRTYlODAlQTcnPuWxnuaApzwvaDE+XCIsXCJ0ZXh0XCI6XCLlsZ7mgKdcIixcImNoaWxkcmVuXCI6W119XX0se1widGl0bGVcIjpcIuW8ueeql1wiLFwicGF0aFwiOlwiY29tcG9uZW50cy9kaWFsb2cvaW5kZXgubWRcIixcImNoaWxkcmVuXCI6W3tcInRpdGxlXCI6XCLlsZ7mgKdcIixcInBhdGhcIjpcIiNoZWFkZXItJUU1JUIxJTlFJUU2JTgwJUE3XCIsXCJsZXZlbFwiOjEsXCJjb250ZW50XCI6XCI8aDEgaWQ9J2hlYWRlci0lRTUlQjElOUUlRTYlODAlQTcnPuWxnuaApzwvaDE+XCIsXCJ0ZXh0XCI6XCLlsZ7mgKdcIixcImNoaWxkcmVuXCI6W119LHtcInRpdGxlXCI6XCLmianlsZXngrlcIixcInBhdGhcIjpcIiNoZWFkZXItJUU2JTg5JUE5JUU1JUIxJTk1JUU3JTgyJUI5XCIsXCJsZXZlbFwiOjEsXCJjb250ZW50XCI6XCI8aDEgaWQ9J2hlYWRlci0lRTYlODklQTklRTUlQjElOTUlRTclODIlQjknPuaJqeWxleeCuTwvaDE+XCIsXCJ0ZXh0XCI6XCLmianlsZXngrlcIixcImNoaWxkcmVuXCI6W119LHtcInRpdGxlXCI6XCLmlrnms5VcIixcInBhdGhcIjpcIiNoZWFkZXItJUU2JTk2JUI5JUU2JUIzJTk1XCIsXCJsZXZlbFwiOjEsXCJjb250ZW50XCI6XCI8aDEgaWQ9J2hlYWRlci0lRTYlOTYlQjklRTYlQjMlOTUnPuaWueazlTwvaDE+XCIsXCJ0ZXh0XCI6XCLmlrnms5VcIixcImNoaWxkcmVuXCI6W119LHtcInRpdGxlXCI6XCLkuovku7ZcIixcInBhdGhcIjpcIiNoZWFkZXItJUU0JUJBJThCJUU0JUJCJUI2XCIsXCJsZXZlbFwiOjEsXCJjb250ZW50XCI6XCI8aDEgaWQ9J2hlYWRlci0lRTQlQkElOEIlRTQlQkIlQjYnPuS6i+S7tjwvaDE+XCIsXCJ0ZXh0XCI6XCLkuovku7ZcIixcImNoaWxkcmVuXCI6W119XX0se1widGl0bGVcIjpcIuS4i+aLieiPnOWNlVwiLFwicGF0aFwiOlwiY29tcG9uZW50cy9kcm9wZG93bi9pbmRleC5tZFwiLFwiY2hpbGRyZW5cIjpbe1widGl0bGVcIjpcIuWxnuaAp1wiLFwicGF0aFwiOlwiI2hlYWRlci0lRTUlQjElOUUlRTYlODAlQTdcIixcImxldmVsXCI6MSxcImNvbnRlbnRcIjpcIjxoMSBpZD0naGVhZGVyLSVFNSVCMSU5RSVFNiU4MCVBNyc+5bGe5oCnPC9oMT5cIixcInRleHRcIjpcIuWxnuaAp1wiLFwiY2hpbGRyZW5cIjpbe1widGl0bGVcIjpcIkRyb3Bkb3duXCIsXCJwYXRoXCI6XCIjaGVhZGVyLURyb3Bkb3duXCIsXCJsZXZlbFwiOjIsXCJjb250ZW50XCI6XCI8aDIgaWQ9J2hlYWRlci1Ecm9wZG93bic+RHJvcGRvd248L2gyPlwiLFwidGV4dFwiOlwiRHJvcGRvd25cIixcImNoaWxkcmVuXCI6W119LHtcInRpdGxlXCI6XCJEcm9wZG93bkl0ZW1cIixcInBhdGhcIjpcIiNoZWFkZXItRHJvcGRvd25JdGVtXCIsXCJsZXZlbFwiOjIsXCJjb250ZW50XCI6XCI8aDIgaWQ9J2hlYWRlci1Ecm9wZG93bkl0ZW0nPkRyb3Bkb3duSXRlbTwvaDI+XCIsXCJ0ZXh0XCI6XCJEcm9wZG93bkl0ZW1cIixcImNoaWxkcmVuXCI6W119LHtcInRpdGxlXCI6XCLkuovku7ZcIixcInBhdGhcIjpcIiNoZWFkZXItJUU0JUJBJThCJUU0JUJCJUI2XCIsXCJsZXZlbFwiOjIsXCJjb250ZW50XCI6XCI8aDIgaWQ9J2hlYWRlci0lRTQlQkElOEIlRTQlQkIlQjYnPuS6i+S7tjwvaDI+XCIsXCJ0ZXh0XCI6XCLkuovku7ZcIixcImNoaWxkcmVuXCI6W119LHtcInRpdGxlXCI6XCJEcm9wZG93bkl0ZW1cIixcInBhdGhcIjpcIiNoZWFkZXItRHJvcGRvd25JdGVtXCIsXCJsZXZlbFwiOjIsXCJjb250ZW50XCI6XCI8aDIgaWQ9J2hlYWRlci1Ecm9wZG93bkl0ZW0nPkRyb3Bkb3duSXRlbTwvaDI+XCIsXCJ0ZXh0XCI6XCJEcm9wZG93bkl0ZW1cIixcImNoaWxkcmVuXCI6W119XX1dfSx7XCJ0aXRsZVwiOlwi5Y+v57yW6L6R5paH5pysXCIsXCJwYXRoXCI6XCJjb21wb25lbnRzL2VkaXRhYmxlL2luZGV4Lm1kXCIsXCJjaGlsZHJlblwiOlt7XCJ0aXRsZVwiOlwi5bGe5oCnXCIsXCJwYXRoXCI6XCIjaGVhZGVyLSVFNSVCMSU5RSVFNiU4MCVBN1wiLFwibGV2ZWxcIjoxLFwiY29udGVudFwiOlwiPGgxIGlkPSdoZWFkZXItJUU1JUIxJTlFJUU2JTgwJUE3Jz7lsZ7mgKc8L2gxPlwiLFwidGV4dFwiOlwi5bGe5oCnXCIsXCJjaGlsZHJlblwiOltdfSx7XCJ0aXRsZVwiOlwi5LqL5Lu2XCIsXCJwYXRoXCI6XCIjaGVhZGVyLSVFNCVCQSU4QiVFNCVCQiVCNlwiLFwibGV2ZWxcIjoxLFwiY29udGVudFwiOlwiPGgxIGlkPSdoZWFkZXItJUU0JUJBJThCJUU0JUJCJUI2Jz7kuovku7Y8L2gxPlwiLFwidGV4dFwiOlwi5LqL5Lu2XCIsXCJjaGlsZHJlblwiOltdfV19LHtcInRpdGxlXCI6XCLooajljZVcIixcInBhdGhcIjpcImNvbXBvbmVudHMvZm9ybS9pbmRleC5tZFwiLFwiY2hpbGRyZW5cIjpbe1widGl0bGVcIjpcIuWxnuaAp1wiLFwicGF0aFwiOlwiI2hlYWRlci0lRTUlQjElOUUlRTYlODAlQTdcIixcImxldmVsXCI6MSxcImNvbnRlbnRcIjpcIjxoMSBpZD0naGVhZGVyLSVFNSVCMSU5RSVFNiU4MCVBNyc+5bGe5oCnPC9oMT5cIixcInRleHRcIjpcIuWxnuaAp1wiLFwiY2hpbGRyZW5cIjpbe1widGl0bGVcIjpcIkZvcm1JdGVtXCIsXCJwYXRoXCI6XCIjaGVhZGVyLUZvcm1JdGVtXCIsXCJsZXZlbFwiOjIsXCJjb250ZW50XCI6XCI8aDIgaWQ9J2hlYWRlci1Gb3JtSXRlbSc+Rm9ybUl0ZW08L2gyPlwiLFwidGV4dFwiOlwiRm9ybUl0ZW1cIixcImNoaWxkcmVuXCI6W119XX0se1widGl0bGVcIjpcIuaJqeWxleeCuVwiLFwicGF0aFwiOlwiI2hlYWRlci0lRTYlODklQTklRTUlQjElOTUlRTclODIlQjlcIixcImxldmVsXCI6MSxcImNvbnRlbnRcIjpcIjxoMSBpZD0naGVhZGVyLSVFNiU4OSVBOSVFNSVCMSU5NSVFNyU4MiVCOSc+5omp5bGV54K5PC9oMT5cIixcInRleHRcIjpcIuaJqeWxleeCuVwiLFwiY2hpbGRyZW5cIjpbe1widGl0bGVcIjpcIkZvcm1JdGVtXCIsXCJwYXRoXCI6XCIjaGVhZGVyLUZvcm1JdGVtXCIsXCJsZXZlbFwiOjIsXCJjb250ZW50XCI6XCI8aDIgaWQ9J2hlYWRlci1Gb3JtSXRlbSc+Rm9ybUl0ZW08L2gyPlwiLFwidGV4dFwiOlwiRm9ybUl0ZW1cIixcImNoaWxkcmVuXCI6W119XX0se1widGl0bGVcIjpcIuS6i+S7tlwiLFwicGF0aFwiOlwiI2hlYWRlci0lRTQlQkElOEIlRTQlQkIlQjZcIixcImxldmVsXCI6MSxcImNvbnRlbnRcIjpcIjxoMSBpZD0naGVhZGVyLSVFNCVCQSU4QiVFNCVCQiVCNic+5LqL5Lu2PC9oMT5cIixcInRleHRcIjpcIuS6i+S7tlwiLFwiY2hpbGRyZW5cIjpbe1widGl0bGVcIjpcIkZvcm1cIixcInBhdGhcIjpcIiNoZWFkZXItRm9ybVwiLFwibGV2ZWxcIjoyLFwiY29udGVudFwiOlwiPGgyIGlkPSdoZWFkZXItRm9ybSc+Rm9ybTwvaDI+XCIsXCJ0ZXh0XCI6XCJGb3JtXCIsXCJjaGlsZHJlblwiOltdfV19LHtcInRpdGxlXCI6XCLmlrnms5VcIixcInBhdGhcIjpcIiNoZWFkZXItJUU2JTk2JUI5JUU2JUIzJTk1XCIsXCJsZXZlbFwiOjEsXCJjb250ZW50XCI6XCI8aDEgaWQ9J2hlYWRlci0lRTYlOTYlQjklRTYlQjMlOTUnPuaWueazlTwvaDE+XCIsXCJ0ZXh0XCI6XCLmlrnms5VcIixcImNoaWxkcmVuXCI6W3tcInRpdGxlXCI6XCJGb3JtXCIsXCJwYXRoXCI6XCIjaGVhZGVyLUZvcm1cIixcImxldmVsXCI6MixcImNvbnRlbnRcIjpcIjxoMiBpZD0naGVhZGVyLUZvcm0nPkZvcm08L2gyPlwiLFwidGV4dFwiOlwiRm9ybVwiLFwiY2hpbGRyZW5cIjpbXX1dfSx7XCJ0aXRsZVwiOlwi6Z2Z5oCB5pa55rOVXCIsXCJwYXRoXCI6XCIjaGVhZGVyLSVFOSU5RCU5OSVFNiU4MCU4MSVFNiU5NiVCOSVFNiVCMyU5NVwiLFwibGV2ZWxcIjoxLFwiY29udGVudFwiOlwiPGgxIGlkPSdoZWFkZXItJUU5JTlEJTk5JUU2JTgwJTgxJUU2JTk2JUI5JUU2JUIzJTk1Jz7pnZnmgIHmlrnms5U8L2gxPlwiLFwidGV4dFwiOlwi6Z2Z5oCB5pa55rOVXCIsXCJjaGlsZHJlblwiOlt7XCJ0aXRsZVwiOlwiRm9ybVwiLFwicGF0aFwiOlwiI2hlYWRlci1Gb3JtXCIsXCJsZXZlbFwiOjIsXCJjb250ZW50XCI6XCI8aDIgaWQ9J2hlYWRlci1Gb3JtJz5Gb3JtPC9oMj5cIixcInRleHRcIjpcIkZvcm1cIixcImNoaWxkcmVuXCI6W119XX1dfSx7XCJ0aXRsZVwiOlwi5qCF5qC8XCIsXCJwYXRoXCI6XCJjb21wb25lbnRzL2dyaWQvaW5kZXgubWRcIixcImNoaWxkcmVuXCI6W3tcInRpdGxlXCI6XCLlsZ7mgKdcIixcInBhdGhcIjpcIiNoZWFkZXItJUU1JUIxJTlFJUU2JTgwJUE3XCIsXCJsZXZlbFwiOjEsXCJjb250ZW50XCI6XCI8aDEgaWQ9J2hlYWRlci0lRTUlQjElOUUlRTYlODAlQTcnPuWxnuaApzwvaDE+XCIsXCJ0ZXh0XCI6XCLlsZ7mgKdcIixcImNoaWxkcmVuXCI6W3tcInRpdGxlXCI6XCJSb3dcIixcInBhdGhcIjpcIiNoZWFkZXItUm93XCIsXCJsZXZlbFwiOjIsXCJjb250ZW50XCI6XCI8aDIgaWQ9J2hlYWRlci1Sb3cnPlJvdzwvaDI+XCIsXCJ0ZXh0XCI6XCJSb3dcIixcImNoaWxkcmVuXCI6W119LHtcInRpdGxlXCI6XCJDb2xcIixcInBhdGhcIjpcIiNoZWFkZXItQ29sXCIsXCJsZXZlbFwiOjIsXCJjb250ZW50XCI6XCI8aDIgaWQ9J2hlYWRlci1Db2wnPkNvbDwvaDI+XCIsXCJ0ZXh0XCI6XCJDb2xcIixcImNoaWxkcmVuXCI6W119XX1dfSx7XCJ0aXRsZVwiOlwi6L6T5YWl5qGGXCIsXCJwYXRoXCI6XCJjb21wb25lbnRzL2lucHV0L2luZGV4Lm1kXCIsXCJjaGlsZHJlblwiOlt7XCJ0aXRsZVwiOlwi5bGe5oCnXCIsXCJwYXRoXCI6XCIjaGVhZGVyLSVFNSVCMSU5RSVFNiU4MCVBN1wiLFwibGV2ZWxcIjoxLFwiY29udGVudFwiOlwiPGgxIGlkPSdoZWFkZXItJUU1JUIxJTlFJUU2JTgwJUE3Jz7lsZ7mgKc8L2gxPlwiLFwidGV4dFwiOlwi5bGe5oCnXCIsXCJjaGlsZHJlblwiOltdfSx7XCJ0aXRsZVwiOlwi5omp5bGV54K5XCIsXCJwYXRoXCI6XCIjaGVhZGVyLSVFNiU4OSVBOSVFNSVCMSU5NSVFNyU4MiVCOVwiLFwibGV2ZWxcIjoxLFwiY29udGVudFwiOlwiPGgxIGlkPSdoZWFkZXItJUU2JTg5JUE5JUU1JUIxJTk1JUU3JTgyJUI5Jz7mianlsZXngrk8L2gxPlwiLFwidGV4dFwiOlwi5omp5bGV54K5XCIsXCJjaGlsZHJlblwiOltdfSx7XCJ0aXRsZVwiOlwi5LqL5Lu2XCIsXCJwYXRoXCI6XCIjaGVhZGVyLSVFNCVCQSU4QiVFNCVCQiVCNlwiLFwibGV2ZWxcIjoxLFwiY29udGVudFwiOlwiPGgxIGlkPSdoZWFkZXItJUU0JUJBJThCJUU0JUJCJUI2Jz7kuovku7Y8L2gxPlwiLFwidGV4dFwiOlwi5LqL5Lu2XCIsXCJjaGlsZHJlblwiOltdfV19LHtcInRpdGxlXCI6XCLlhajlsYDmj5DnpLpcIixcInBhdGhcIjpcImNvbXBvbmVudHMvbWVzc2FnZS9pbmRleC5tZFwiLFwiY2hpbGRyZW5cIjpbe1widGl0bGVcIjpcIuWxnuaAp1wiLFwicGF0aFwiOlwiI2hlYWRlci0lRTUlQjElOUUlRTYlODAlQTdcIixcImxldmVsXCI6MSxcImNvbnRlbnRcIjpcIjxoMSBpZD0naGVhZGVyLSVFNSVCMSU5RSVFNiU4MCVBNyc+5bGe5oCnPC9oMT5cIixcInRleHRcIjpcIuWxnuaAp1wiLFwiY2hpbGRyZW5cIjpbXX0se1widGl0bGVcIjpcIumdmeaAgeaWueazlVwiLFwicGF0aFwiOlwiI2hlYWRlci0lRTklOUQlOTklRTYlODAlODElRTYlOTYlQjklRTYlQjMlOTVcIixcImxldmVsXCI6MSxcImNvbnRlbnRcIjpcIjxoMSBpZD0naGVhZGVyLSVFOSU5RCU5OSVFNiU4MCU4MSVFNiU5NiVCOSVFNiVCMyU5NSc+6Z2Z5oCB5pa55rOVPC9oMT5cIixcInRleHRcIjpcIumdmeaAgeaWueazlVwiLFwiY2hpbGRyZW5cIjpbXX1dfSx7XCJ0aXRsZVwiOlwi5YiG6aG1XCIsXCJwYXRoXCI6XCJjb21wb25lbnRzL3BhZ2luYXRpb24vaW5kZXgubWRcIixcImNoaWxkcmVuXCI6W3tcInRpdGxlXCI6XCLlsZ7mgKdcIixcInBhdGhcIjpcIiNoZWFkZXItJUU1JUIxJTlFJUU2JTgwJUE3XCIsXCJsZXZlbFwiOjEsXCJjb250ZW50XCI6XCI8aDEgaWQ9J2hlYWRlci0lRTUlQjElOUUlRTYlODAlQTcnPuWxnuaApzwvaDE+XCIsXCJ0ZXh0XCI6XCLlsZ7mgKdcIixcImNoaWxkcmVuXCI6W119LHtcInRpdGxlXCI6XCLmlrnms5VcIixcInBhdGhcIjpcIiNoZWFkZXItJUU2JTk2JUI5JUU2JUIzJTk1XCIsXCJsZXZlbFwiOjEsXCJjb250ZW50XCI6XCI8aDEgaWQ9J2hlYWRlci0lRTYlOTYlQjklRTYlQjMlOTUnPuaWueazlTwvaDE+XCIsXCJ0ZXh0XCI6XCLmlrnms5VcIixcImNoaWxkcmVuXCI6W3tcInRpdGxlXCI6XCJQYWdpbmF0aW9uXCIsXCJwYXRoXCI6XCIjaGVhZGVyLVBhZ2luYXRpb25cIixcImxldmVsXCI6MixcImNvbnRlbnRcIjpcIjxoMiBpZD0naGVhZGVyLVBhZ2luYXRpb24nPlBhZ2luYXRpb248L2gyPlwiLFwidGV4dFwiOlwiUGFnaW5hdGlvblwiLFwiY2hpbGRyZW5cIjpbXX1dfV19LHtcInRpdGxlXCI6XCLov5vluqbmnaFcIixcInBhdGhcIjpcImNvbXBvbmVudHMvcHJvZ3Jlc3MvaW5kZXgubWRcIixcImNoaWxkcmVuXCI6W3tcInRpdGxlXCI6XCLlsZ7mgKdcIixcInBhdGhcIjpcIiNoZWFkZXItJUU1JUIxJTlFJUU2JTgwJUE3XCIsXCJsZXZlbFwiOjEsXCJjb250ZW50XCI6XCI8aDEgaWQ9J2hlYWRlci0lRTUlQjElOUUlRTYlODAlQTcnPuWxnuaApzwvaDE+XCIsXCJ0ZXh0XCI6XCLlsZ7mgKdcIixcImNoaWxkcmVuXCI6W119XX0se1widGl0bGVcIjpcIuWNlemAieahhlwiLFwicGF0aFwiOlwiY29tcG9uZW50cy9yYWRpby9pbmRleC5tZFwiLFwiY2hpbGRyZW5cIjpbe1widGl0bGVcIjpcIuWxnuaAp1wiLFwicGF0aFwiOlwiI2hlYWRlci0lRTUlQjElOUUlRTYlODAlQTdcIixcImxldmVsXCI6MSxcImNvbnRlbnRcIjpcIjxoMSBpZD0naGVhZGVyLSVFNSVCMSU5RSVFNiU4MCVBNyc+5bGe5oCnPC9oMT5cIixcInRleHRcIjpcIuWxnuaAp1wiLFwiY2hpbGRyZW5cIjpbXX1dfSx7XCJ0aXRsZVwiOlwi6YCJ5oup5qGGXCIsXCJwYXRoXCI6XCJjb21wb25lbnRzL3NlbGVjdC9pbmRleC5tZFwiLFwiY2hpbGRyZW5cIjpbe1widGl0bGVcIjpcIuWxnuaAp1wiLFwicGF0aFwiOlwiI2hlYWRlci0lRTUlQjElOUUlRTYlODAlQTdcIixcImxldmVsXCI6MSxcImNvbnRlbnRcIjpcIjxoMSBpZD0naGVhZGVyLSVFNSVCMSU5RSVFNiU4MCVBNyc+5bGe5oCnPC9oMT5cIixcInRleHRcIjpcIuWxnuaAp1wiLFwiY2hpbGRyZW5cIjpbe1widGl0bGVcIjpcIlNlbGVjdFwiLFwicGF0aFwiOlwiI2hlYWRlci1TZWxlY3RcIixcImxldmVsXCI6MixcImNvbnRlbnRcIjpcIjxoMiBpZD0naGVhZGVyLVNlbGVjdCc+U2VsZWN0PC9oMj5cIixcInRleHRcIjpcIlNlbGVjdFwiLFwiY2hpbGRyZW5cIjpbXX0se1widGl0bGVcIjpcIk9wdGlvblwiLFwicGF0aFwiOlwiI2hlYWRlci1PcHRpb25cIixcImxldmVsXCI6MixcImNvbnRlbnRcIjpcIjxoMiBpZD0naGVhZGVyLU9wdGlvbic+T3B0aW9uPC9oMj5cIixcInRleHRcIjpcIk9wdGlvblwiLFwiY2hpbGRyZW5cIjpbXX1dfV19LHtcInRpdGxlXCI6XCLmu5HlnZdcIixcInBhdGhcIjpcImNvbXBvbmVudHMvc2xpZGVyL2luZGV4Lm1kXCIsXCJjaGlsZHJlblwiOlt7XCJ0aXRsZVwiOlwi5bGe5oCnXCIsXCJwYXRoXCI6XCIjaGVhZGVyLSVFNSVCMSU5RSVFNiU4MCVBN1wiLFwibGV2ZWxcIjoxLFwiY29udGVudFwiOlwiPGgxIGlkPSdoZWFkZXItJUU1JUIxJTlFJUU2JTgwJUE3Jz7lsZ7mgKc8L2gxPlwiLFwidGV4dFwiOlwi5bGe5oCnXCIsXCJjaGlsZHJlblwiOltdfV19LHtcInRpdGxlXCI6XCLmlbDlrZfovpPlhaXmoYZcIixcInBhdGhcIjpcImNvbXBvbmVudHMvc3Bpbm5lci9pbmRleC5tZFwiLFwiY2hpbGRyZW5cIjpbe1widGl0bGVcIjpcIuWxnuaAp1wiLFwicGF0aFwiOlwiI2hlYWRlci0lRTUlQjElOUUlRTYlODAlQTdcIixcImxldmVsXCI6MSxcImNvbnRlbnRcIjpcIjxoMSBpZD0naGVhZGVyLSVFNSVCMSU5RSVFNiU4MCVBNyc+5bGe5oCnPC9oMT5cIixcInRleHRcIjpcIuWxnuaAp1wiLFwiY2hpbGRyZW5cIjpbXX1dfSx7XCJ0aXRsZVwiOlwi5q2l6aqk5p2hXCIsXCJwYXRoXCI6XCJjb21wb25lbnRzL3N0ZXBzL2luZGV4Lm1kXCIsXCJjaGlsZHJlblwiOlt7XCJ0aXRsZVwiOlwi5bGe5oCnXCIsXCJwYXRoXCI6XCIjaGVhZGVyLSVFNSVCMSU5RSVFNiU4MCVBN1wiLFwibGV2ZWxcIjoxLFwiY29udGVudFwiOlwiPGgxIGlkPSdoZWFkZXItJUU1JUIxJTlFJUU2JTgwJUE3Jz7lsZ7mgKc8L2gxPlwiLFwidGV4dFwiOlwi5bGe5oCnXCIsXCJjaGlsZHJlblwiOlt7XCJ0aXRsZVwiOlwiU3RlcHNcIixcInBhdGhcIjpcIiNoZWFkZXItU3RlcHNcIixcImxldmVsXCI6MixcImNvbnRlbnRcIjpcIjxoMiBpZD0naGVhZGVyLVN0ZXBzJz5TdGVwczwvaDI+XCIsXCJ0ZXh0XCI6XCJTdGVwc1wiLFwiY2hpbGRyZW5cIjpbXX0se1widGl0bGVcIjpcIlN0ZXBcIixcInBhdGhcIjpcIiNoZWFkZXItU3RlcFwiLFwibGV2ZWxcIjoyLFwiY29udGVudFwiOlwiPGgyIGlkPSdoZWFkZXItU3RlcCc+U3RlcDwvaDI+XCIsXCJ0ZXh0XCI6XCJTdGVwXCIsXCJjaGlsZHJlblwiOltdfV19XX0se1widGl0bGVcIjpcIuihqOagvFwiLFwicGF0aFwiOlwiY29tcG9uZW50cy90YWJsZS9pbmRleC5tZFwiLFwiY2hpbGRyZW5cIjpbe1widGl0bGVcIjpcIuihqOagvOWxnuaApyBUYWJsZVwiLFwicGF0aFwiOlwiI2hlYWRlci0lRTglQTElQTglRTYlQTAlQkMlRTUlQjElOUUlRTYlODAlQTclMjBUYWJsZVwiLFwibGV2ZWxcIjoxLFwiY29udGVudFwiOlwiPGgxIGlkPSdoZWFkZXItJUU4JUExJUE4JUU2JUEwJUJDJUU1JUIxJTlFJUU2JTgwJUE3JTIwVGFibGUnPuihqOagvOWxnuaApyBUYWJsZTwvaDE+XCIsXCJ0ZXh0XCI6XCLooajmoLzlsZ7mgKcgVGFibGVcIixcImNoaWxkcmVuXCI6W119XX0se1widGl0bGVcIjpcIuepv+aireahhlwiLFwicGF0aFwiOlwiY29tcG9uZW50cy90cmFuc2Zlci9pbmRleC5tZFwiLFwiY2hpbGRyZW5cIjpbe1widGl0bGVcIjpcIuWxnuaAp1wiLFwicGF0aFwiOlwiI2hlYWRlci0lRTUlQjElOUUlRTYlODAlQTdcIixcImxldmVsXCI6MSxcImNvbnRlbnRcIjpcIjxoMSBpZD0naGVhZGVyLSVFNSVCMSU5RSVFNiU4MCVBNyc+5bGe5oCnPC9oMT5cIixcInRleHRcIjpcIuWxnuaAp1wiLFwiY2hpbGRyZW5cIjpbXX1dfV19LFwiaGlnaGxpZ2h0ZWRcIjpbe1wibGFuZ3VhZ2VcIjpcImpzXCIsXCJjb250ZW50XCI6XCI8cHJlPjxjb2RlIGNsYXNzPVxcXCJobGpzIGpzXFxcIj48c3BhbiBjbGFzcz1cXFwiaGxqcy1rZXl3b3JkXFxcIj5pbXBvcnQ8L3NwYW4+IEludGFjdCA8c3BhbiBjbGFzcz1cXFwiaGxqcy1rZXl3b3JkXFxcIj5mcm9tPC9zcGFuPiA8c3BhbiBjbGFzcz1cXFwiaGxqcy1zdHJpbmdcXFwiPidpbnRhY3QnPC9zcGFuPjtcXG48c3BhbiBjbGFzcz1cXFwiaGxqcy1rZXl3b3JkXFxcIj5pbXBvcnQ8L3NwYW4+IHRlbXBsYXRlIDxzcGFuIGNsYXNzPVxcXCJobGpzLWtleXdvcmRcXFwiPmZyb208L3NwYW4+IDxzcGFuIGNsYXNzPVxcXCJobGpzLXN0cmluZ1xcXCI+Jy4vaW5kZXgudmR0Jzwvc3Bhbj47XFxuXFxuPHNwYW4gY2xhc3M9XFxcImhsanMta2V5d29yZFxcXCI+ZXhwb3J0PC9zcGFuPiA8c3BhbiBjbGFzcz1cXFwiaGxqcy1rZXl3b3JkXFxcIj5kZWZhdWx0PC9zcGFuPiA8c3BhbiBjbGFzcz1cXFwiaGxqcy1jbGFzc1xcXCI+PHNwYW4gY2xhc3M9XFxcImhsanMta2V5d29yZFxcXCI+Y2xhc3M8L3NwYW4+IDxzcGFuIGNsYXNzPVxcXCJobGpzLWtleXdvcmRcXFwiPmV4dGVuZHM8L3NwYW4+IDxzcGFuIGNsYXNzPVxcXCJobGpzLXRpdGxlXFxcIj5JbnRhY3Q8L3NwYW4+IDwvc3Bhbj57XFxuICAgIEBJbnRhY3QudGVtcGxhdGUoKVxcbiAgICA8c3BhbiBjbGFzcz1cXFwiaGxqcy1rZXl3b3JkXFxcIj5zdGF0aWM8L3NwYW4+IHRlbXBsYXRlID0gdGVtcGxhdGU7XFxufTwvY29kZT48L3ByZT5cIn1dfVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc2l0ZS9jb21wb25lbnRzL3RhYmxlL2luZGV4Lmpzb25cbi8vIG1vZHVsZSBpZCA9IC4vc2l0ZS9jb21wb25lbnRzL3RhYmxlL2luZGV4Lmpzb25cbi8vIG1vZHVsZSBjaHVua3MgPSAxNyAxMDIiXSwic291cmNlUm9vdCI6IiJ9