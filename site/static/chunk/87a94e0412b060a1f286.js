webpackJsonp([23],{

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

  return h('div', null, h(_table2.default, { 'scheme': function () {
      try {
        return [scheme][0];
      } catch (e) {
        _e(e);
      }
    }.call(this), 'children': null, '_context': this }));
};

var _table = __webpack_require__("./components/table/index.js");

var _table2 = _interopRequireDefault(_table);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = exports['default'];

/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3RhYmxlL2NvbHVtbi5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3RhYmxlL2NvbHVtbi52ZHQiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy90YWJsZS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3RhYmxlL2luZGV4LnZkdCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3RhYmxlL3Jvdy5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3RhYmxlL3Jvdy52ZHQiLCJ3ZWJwYWNrOi8vLy4vc2l0ZS9jb21wb25lbnRzL3RhYmxlL2RlbW9zL2Jhc2ljL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NpdGUvY29tcG9uZW50cy90YWJsZS9kZW1vcy9iYXNpYy9pbmRleC52ZHQiXSwibmFtZXMiOlsiVGFibGVDb2x1bW4iLCJ0aXRsZSIsInRlbXBsYXRlIiwiZGF0YSIsImluZGV4Iiwia2V5Iiwic29ydGFibGUiLCJ3aWR0aCIsInVuZGVmaW5lZCIsImdyb3VwcyIsIiRwYXJlbnQiLCJlIiwidHJpZ2dlciIsIm9iaiIsIl9WZHQiLCJibG9ja3MiLCIkY2FsbGVlIiwiVmR0IiwiaCIsIm1pc3MiLCJoYyIsImh1Iiwid2lkZ2V0cyIsIl9ibG9ja3MiLCJfX2Jsb2NrcyIsIl9fdSIsInV0aWxzIiwiZXh0ZW5kIiwiX2UiLCJlcnJvciIsIl9jbGFzc05hbWUiLCJjbGFzc05hbWUiLCJfX28iLCJPcHRpb25zIiwiX2dldE1vZGVsIiwiZ2V0TW9kZWwiLCJfc2V0TW9kZWwiLCJzZXRNb2RlbCIsIl9zZXRDaGVja2JveE1vZGVsIiwic2V0Q2hlY2tib3hNb2RlbCIsIl9kZXRlY3RDaGVja2JveENoZWNrZWQiLCJkZXRlY3RDaGVja2JveENoZWNrZWQiLCJfc2V0U2VsZWN0TW9kZWwiLCJzZXRTZWxlY3RNb2RlbCIsInNlbGYiLCJzY29wZSIsIkFuaW1hdGUiLCJwYXJlbnQiLCJfc3VwZXIiLCJnZXQiLCJzb3J0IiwicmVzaXphYmxlIiwiY2FsbCIsIm9uQ2xpY2siLCJvbkRyYWdTdGFydCIsInR5cGUiLCJzY3JvbGxCYXJXaWR0aCIsIk1JTl9XSURUSCIsInNsaWNlIiwiQXJyYXkiLCJwcm90b3R5cGUiLCJUYWJsZSIsInNjaGVtZSIsImNoZWNrVHlwZSIsInJvd0tleSIsInZhbHVlIiwicm93Q2xhc3NOYW1lIiwiY2hlY2tlZEtleXMiLCJjaGVja2VkS2V5Iiwicm93Q2hlY2thYmxlIiwicm93RXhwYW5kYWJsZSIsIm5vRGF0YVRlbXBsYXRlIiwiZGlzYWJsZVJvdyIsImV4cGFuZCIsImV4cGFuZGVkS2V5cyIsImZpeEhlYWRlciIsIl9wYWRkaW5nIiwiX2Rpc2FibGVkQW1vdW50Iiwib24iLCJjIiwibmV3VmFsdWUiLCJvbGRWYWx1ZSIsImZvckVhY2giLCJpdGVtIiwiX2NhbGNIZWFkZXJQYWRkaW5nIiwiX3VwZGF0ZURpc2FibGVkQW1vdW50IiwiX21vdmUiLCJiaW5kIiwiX2RyYWdFbmQiLCJnZXRTY3JvbGxiYXJXaWR0aCIsImRhdGFMZW5ndGgiLCJsZW5ndGgiLCJkaXNhYmxlZEFtb3VudCIsImFtb3VudCIsImluZGV4T2YiLCJwdXNoIiwic2V0IiwiX2NoZWNrVW5jaGVja1JvdyIsIl9leHBhbmRTaHJpbmtSb3ciLCJjaGVja2VkS2V5c01hcCIsImZpbHRlciIsInRhYmxlSGVpZ2h0IiwidGFibGUiLCJvZmZzZXRIZWlnaHQiLCJjb250YWluZXJIZWlnaHQiLCJzY3JvbGwiLCJoZWFkZXJIZWlnaHQiLCJoZWFkZXIiLCJjaGVja2VkIiwiY2hlY2tBbGwiLCJ1bmNoZWNrQWxsIiwidGFyZ2V0IiwidGFnTmFtZSIsInRvTG93ZXJDYXNlIiwiaXNDaGVjayIsImlzVG9nZ2xlIiwiaSIsInNwbGljZSIsImlzRXhwYW5kIiwiT2JqZWN0IiwiYXNzaWduIiwid2hpY2giLCJfcmVzaXppbmciLCJfY29udGFpbmVyV2lkdGgiLCJlbGVtZW50Iiwib2Zmc2V0V2lkdGgiLCJfeCIsImNsaWVudFgiLCJjdXJyZW50VGgiLCJwYXJlbnROb2RlIiwicHJldlRoIiwicHJldmlvdXNFbGVtZW50U2libGluZyIsIl9jdXJyZW50VGhzIiwiX3ByZXZUaHMiLCJfdGFibGVzIiwidGhzIiwiY2hpbGRyZW4iLCJnZXRFbGVtZW50c0J5VGFnTmFtZSIsImZpeFRocyIsImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsImRlbFgiLCJwcmV2V2lkdGgiLCJ0YWJsZVdpZHRoIiwic3R5bGUiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwicHJvcFR5cGVzIiwiQm9vbGVhbiIsIm91dGVyIiwiY3JlYXRlRWxlbWVudCIsInZpc2liaWxpdHkiLCJtc092ZXJmbG93U3R5bGUiLCJib2R5IiwiYXBwZW5kQ2hpbGQiLCJ3aWR0aE5vU2Nyb2xsIiwib3ZlcmZsb3ciLCJpbm5lciIsIndpZHRoV2l0aFNjcm9sbCIsInJlbW92ZUNoaWxkIiwiY29sU3BhbiIsImV4cGFuZGFibGUiLCJfc2NoZW1lIiwidGhlYWRDcmVhdG9yIiwiaXNDaGVja0FsbCIsIl90b2dnbGVDaGVja0FsbCIsIm1hcCIsImlzT2JqZWN0IiwiX3NvcnQiLCJfZHJhZ1N0YXJ0IiwiaXNBcnJheSIsInZOb2RlIiwidGFnIiwicHJvcHMiLCJ0ZXN0IiwiZGVmYXVsdCIsInRoZWFkIiwidGJvZHkiLCJkaXNhYmxlZCIsInRyIiwiX2NsaWNrUm93IiwiaXNDaGVja2VkIiwic2hyaW5rUm93IiwiX19jIiwiX19uIiwidGQiLCJrZXlzIiwic3BsaXQiLCJTdHJpbmciLCJjbGFzc05hbWVPYmoiLCJkb20iLCJwYWRkaW5nUmlnaHQiLCJtYXhIZWlnaHQiLCJUYWJsZVJvdyIsImEiLCJiIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFFcUJBLFc7Ozs7Ozs7Ozs7O21DQUdOO0FBQ1AsbUJBQU87QUFDSEMsdUJBQU8sRUFESjtBQUVIQyx3QkFGRyxvQkFFTUMsSUFGTixFQUVZQyxLQUZaLEVBRW1CLENBQUcsQ0FGdEI7O0FB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a0IwQyxRQUFRaEMsR0FMMUI7QUFBQSxNQUsrQmlDLFVBQVVGLFFBQVFBLEtBQUtFLE9BTHREO0FBQUEsTUFLK0RDLFNBQVMsQ0FBQy9CLFdBQVcsRUFBWixFQUFnQmdDLE1BTHhGOztBQU9BLE1BQUljLFNBQVMsRUFBQ21JLEdBQUcsS0FBSixFQUFXQyxHQUFHLEtBQWQsRUFBYjs7QUFFQSxTQUFPaEwsRUFBRSxLQUFGLEVBQVMsSUFBVCxFQUFlQSxtQkFBUyxFQUFDLFVBQVUsWUFBVztBQUFDLFVBQUk7QUFBQyxlQUFPLENBQUM0QyxNQUFELEVBQVMsQ0FBVCxDQUFQO0FBQW1CLE9BQXhCLENBQXlCLE9BQU1uRCxDQUFOLEVBQVM7QUFBQ2lCLFdBQUdqQixDQUFIO0FBQU07QUFBQyxLQUF0RCxDQUF1RHlDLElBQXZELENBQTRELElBQTVELENBQVgsRUFBOEUsWUFBWSxJQUExRixFQUFnRyxZQUFZLElBQTVHLEVBQVQsQ0FBZixDQUFQO0FBQ0MsQzs7QUFoQkQiLCJmaWxlIjoic3RhdGljL2NodW5rLzg3YTk0ZTA0MTJiMDYwYTFmMjg2LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEludGFjdCBmcm9tICdpbnRhY3QnO1xuaW1wb3J0IHRlbXBsYXRlIGZyb20gJy4vY29sdW1uLnZkdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRhYmxlQ29sdW1uIGV4dGVuZHMgSW50YWN0IHtcbiAgICBnZXQgdGVtcGxhdGUoKSB7IHJldHVybiB0ZW1wbGF0ZTsgfVxuXG4gICAgZGVmYXVsdHMoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB0aXRsZTogJycsXG4gICAgICAgICAgICB0ZW1wbGF0ZShkYXRhLCBpbmRleCkgeyB9LFxuICAgICAgICAgICAga2V5OiAnJyxcbiAgICAgICAgICAgIHNvcnRhYmxlOiBmYWxzZSxcbiAgICAgICAgICAgIHdpZHRoOiB1bmRlZmluZWQsXG4gICAgICAgICAgICBncm91cHM6IHVuZGVmaW5lZCxcblxuICAgICAgICAgICAgLy8gcGFzc2VkIGJ5IHBhcmVudFxuICAgICAgICAgICAgJHBhcmVudDogdW5kZWZpbmVkLFxuICAgICAgICB9XG4gICAgfVxuXG4gICAgb25DbGljayhlKSB7XG4gICAgICAgIHRoaXMudHJpZ2dlcignY2xpY2snLCBlKTtcbiAgICB9XG5cbiAgICBvbkRyYWdTdGFydChlKSB7XG4gICAgICAgIHRoaXMudHJpZ2dlcignZHJhZ1N0YXJ0JywgZSk7XG4gICAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy90YWJsZS9jb2x1bW4uanMiLCJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKG9iaiwgX1ZkdCwgYmxvY2tzLCAkY2FsbGVlKSB7XG5cbl9WZHQgfHwgKF9WZHQgPSBWZHQpO1xub2JqIHx8IChvYmogPSB7fSk7XG5ibG9ja3MgfHwgKGJsb2NrcyA9IHt9KTtcbnZhciBoID0gX1ZkdC5taXNzLmgsIGhjID0gX1ZkdC5taXNzLmhjLCBodSA9IF9WZHQubWlzcy5odSwgd2lkZ2V0cyA9IHRoaXMgJiYgdGhpcy53aWRnZXRzIHx8IHt9LCBfYmxvY2tzID0ge30sIF9fYmxvY2tzID0ge30sXG5fX3UgPSBfVmR0LnV0aWxzLCBleHRlbmQgPSBfX3UuZXh0ZW5kLCBfZSA9IF9fdS5lcnJvciwgX2NsYXNzTmFtZSA9IF9fdS5jbGFzc05hbWUsXG5fX28gPSBfX3UuT3B0aW9ucywgX2dldE1vZGVsID0gX19vLmdldE1vZGVsLCBfc2V0TW9kZWwgPSBfX28uc2V0TW9kZWwsXG5fc2V0Q2hlY2tib3hNb2RlbCA9IF9fdS5zZXRDaGVja2JveE1vZGVsLCBfZGV0ZWN0Q2hlY2tib3hDaGVja2VkID0gX191LmRldGVjdENoZWNrYm94Q2hlY2tlZCxcbl9zZXRTZWxlY3RNb2RlbCA9IF9fdS5zZXRTZWxlY3RNb2RlbCxcbnNlbGYgPSB0aGlzLmRhdGEsIHNjb3BlID0gb2JqLCBBbmltYXRlID0gc2VsZiAmJiBzZWxmLkFuaW1hdGUsIHBhcmVudCA9ICgkY2FsbGVlIHx8IHt9KS5fc3VwZXJcbmNvbnN0IHtcbiAgICB3aWR0aCwgdGl0bGUsIGtleSwgXG4gICAgc29ydGFibGUsIGdyb3VwcywgJHBhcmVudFxufSA9IHNlbGYuZ2V0KCk7XG5jb25zdCB7c29ydCwgcmVzaXphYmxlfSA9ICRwYXJlbnQuZ2V0KCk7XG5cbnJldHVybiBoKCd0aCcsIHsnd2lkdGgnOiBmdW5jdGlvbigpIHt0cnkge3JldHVybiBbd2lkdGggXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKSwgJ3RpdGxlJzogZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW3RpdGxlIF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcyksICdldi1jbGljayc6IGZ1bmN0aW9uKCkge3RyeSB7cmV0dXJuIFtzZWxmLm9uQ2xpY2sgXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKX0sIFtmdW5jdGlvbigpIHt0cnkge3JldHVybiBbcmVzaXphYmxlIF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcykgPyBoKCdkaXYnLCB7J2V2LW1vdXNlZG93bic6IGZ1bmN0aW9uKCkge3RyeSB7cmV0dXJuIFtzZWxmLm9uRHJhZ1N0YXJ0IF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcyl9LCBudWxsLCAnay1yZXNpemUnKSA6IHVuZGVmaW5lZCwgaCgnZGl2JywgbnVsbCwgW2Z1bmN0aW9uKCkge3RyeSB7cmV0dXJuIFshZ3JvdXBzIF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcykgPyBoKCdkaXYnLCBudWxsLCBmdW5jdGlvbigpIHt0cnkge3JldHVybiBbdGl0bGUgXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKSwgJ2MtZWxsaXBzaXMnKSA6IHVuZGVmaW5lZCwgJ1xcbiAgICAgICAgJywgZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW2RvIHtcbiAgICAgICAgICAgIGlmIChzb3J0YWJsZSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHR5cGUgPSBrZXkgPT09IHNvcnQua2V5ID8gc29ydC50eXBlIDogJyc7XG4gICAgICAgICAgICAgICAgaCgnZGl2JywgbnVsbCwgaCgnaScsIG51bGwsIG51bGwsIF9jbGFzc05hbWUoZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW3tcbiAgICAgICAgICAgICAgICAgICAgICAgICdrLWljb24nOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgW2BpY29uLSR7dHlwZX1gXTogdHlwZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICdpY29uLXNvcnRhYmxlJzogIXR5cGUsXG4gICAgICAgICAgICAgICAgICAgIH0gXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKSkpLCBfY2xhc3NOYW1lKGZ1bmN0aW9uKCkge3RyeSB7cmV0dXJuIFt7J2stc29ydCc6IHRydWUsIFtgay0ke3R5cGV9YF06IHR5cGV9IF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcykpKVxuICAgICAgICAgICAgfVxuICAgICAgICB9IF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcyksICdcXG4gICAgJ10sICdrLXRoJyldLCBfY2xhc3NOYW1lKGZ1bmN0aW9uKCkge3RyeSB7cmV0dXJuIFt7J2stc29ydGFibGUnOiBzb3J0YWJsZX0gXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKSkpXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy90YWJsZS9jb2x1bW4udmR0IiwiaW1wb3J0IEludGFjdCBmcm9tICdpbnRhY3QnO1xuaW1wb3J0IHRlbXBsYXRlIGZyb20gJy4vaW5kZXgudmR0JztcbmltcG9ydCAnLi9pbmRleC5zdHlsJztcbmltcG9ydCBDb2x1bW4gZnJvbSAnLi9jb2x1bW4nO1xuXG5sZXQgc2Nyb2xsQmFyV2lkdGggPSB1bmRlZmluZWQ7XG5cbmNvbnN0IE1JTl9XSURUSCA9IDQwO1xuY29uc3Qgc2xpY2UgPSBBcnJheS5wcm90b3R5cGUuc2xpY2U7XG5cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGFibGUgZXh0ZW5kcyBJbnRhY3Qge1xuICAgIEBJbnRhY3QudGVtcGxhdGUoKVxuICAgIGdldCB0ZW1wbGF0ZSgpIHsgcmV0dXJuIHRlbXBsYXRlOyB9XG5cbiAgICBkZWZhdWx0cygpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGRhdGE6IFtdLFxuICAgICAgICAgICAgc2NoZW1lOiB7fSxcbiAgICAgICAgICAgIGNoZWNrVHlwZTogJ2NoZWNrYm94JywgLy8gcmFkaW8gfCBub25lIFxuICAgICAgICAgICAgcm93S2V5KHZhbHVlLCBpbmRleCkgeyByZXR1cm4gaW5kZXg7IH0sXG4gICAgICAgICAgICByb3dDbGFzc05hbWUodmFsdWUsIGluZGV4KSB7ICB9LCAvLyBhZGQgY2xhc3NOYW1lIGZvciB0clxuICAgICAgICAgICAgY2hlY2tlZEtleXM6IFtdLCAvLyBmb3IgY2hlY2tib3hcbiAgICAgICAgICAgIGNoZWNrZWRLZXk6IHVuZGVmaW5lZCwgLy8gZm9yIHJhZGlvXG4gICAgICAgICAgICByb3dDaGVja2FibGU6IHRydWUsIC8vIGNsaWNrIHJvdyB0byBjaGVja1xuICAgICAgICAgICAgcm93RXhwYW5kYWJsZTogdHJ1ZSwgLy8gY2xpY2sgcm93IHRvIGV4cGFuZFxuICAgICAgICAgICAgbm9EYXRhVGVtcGxhdGU6ICcvKOOEkm/jhJIpL35+IOayoeacieaJvuWIsOS6suimgeeahOaVsOaNruWTpn4nLFxuICAgICAgICAgICAgZGlzYWJsZVJvdyhkYXRhLCBpbmRleCkgeyByZXR1cm4gZmFsc2UgfSxcbiAgICAgICAgICAgIHNvcnQ6IHt9LFxuICAgICAgICAgICAgZ3JvdXBzOiB7fSxcbiAgICAgICAgICAgIHJlc2l6YWJsZTogZmFsc2UsXG4gICAgICAgICAgICBleHBhbmQ6IHVuZGVmaW5lZCwgLy8gZXhwYW5kIHRlbXBsYXRlIGNhbGxiYWNrXG4gICAgICAgICAgICBleHBhbmRlZEtleXM6IFtdLCBcbiAgICAgICAgICAgIHR5cGU6ICdkZWZhdWx0JywgLy8gZGVmYXVsdCBib3JkZXJcbiAgICAgICAgICAgIGZpeEhlYWRlcjogZmFsc2UsXG5cbiAgICAgICAgICAgIF9wYWRkaW5nOiAwLFxuICAgICAgICAgICAgX2Rpc2FibGVkQW1vdW50OiAwLFxuICAgICAgICB9XG4gICAgfVxuXG4gICAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICAgICAgcm93Q2hlY2thYmxlOiBCb29sZWFuLFxuICAgICAgICByb3dFeHBhbmRhYmxlOiBCb29sZWFuLFxuICAgICAgICByZXNpemFibGU6IEJvb2xlYW4sXG4gICAgICAgIGZpeEhlYWRlcjogQm9vbGVhbixcbiAgICB9XG5cbiAgICBfaW5pdCgpIHtcbiAgICAgICAgLy8ga2VlcCB0aGUgZXZlbnQgY29uc2lzdGVudFxuICAgICAgICB0aGlzLm9uKCckY2hhbmdlOmNoZWNrZWRLZXlzJywgKGMsIG5ld1ZhbHVlLCBvbGRWYWx1ZSkgPT4ge1xuICAgICAgICAgICAgdGhpcy50cmlnZ2VyKCckY2hhbmdlOmNoZWNrZWQnLCBjLCBuZXdWYWx1ZSwgb2xkVmFsdWUpO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5vbignJGNoYW5nZTpjaGVja2VkS2V5JywgKGMsIG5ld1ZhbHVlLCBvbGRWYWx1ZSkgPT4ge1xuICAgICAgICAgICAgdGhpcy50cmlnZ2VyKCckY2hhbmdlOmNoZWNrZWQnLCBjLCBbbmV3VmFsdWVdLCBbb2xkVmFsdWVdKTtcbiAgICAgICAgfSk7XG4gICAgICAgIC8vIGNhbGN1bGF0ZSBwYWRkaW5nIG9mIGhlYWRlciB3aGVuIHNvbWUgcHJvcHMgaGF2ZSBjaGFuZ2VkXG4gICAgICAgIFsnZGF0YScsICdmaXhIZWFkZXInXS5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICAgICAgdGhpcy5vbihgJGNoYW5nZWQ6JHtpdGVtfWAsIHRoaXMuX2NhbGNIZWFkZXJQYWRkaW5nKTtcbiAgICAgICAgfSk7XG4gICAgICAgIC8vIHVwZGF0ZSBkaXNhYmxlZCBhbW91bnQgd2hlbiBzb21lIHByb3BzIGhhdmUgY2hhbmdlZFxuICAgICAgICBbJ2RhdGEnLCAnZGlzYWJsZVJvdyddLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICAgICAgICB0aGlzLm9uKGAkY2hhbmdlOiR7aXRlbX1gLCB0aGlzLl91cGRhdGVEaXNhYmxlZEFtb3VudCk7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLl91cGRhdGVEaXNhYmxlZEFtb3VudCgpO1xuXG4gICAgICAgIHRoaXMuX21vdmUgPSB0aGlzLl9tb3ZlLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuX2RyYWdFbmQgPSB0aGlzLl9kcmFnRW5kLmJpbmQodGhpcyk7XG4gICAgfVxuXG4gICAgX21vdW50KCkge1xuICAgICAgICBpZiAoc2Nyb2xsQmFyV2lkdGggPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgc2Nyb2xsQmFyV2lkdGggPSBnZXRTY3JvbGxiYXJXaWR0aCgpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX2NhbGNIZWFkZXJQYWRkaW5nKCk7XG4gICAgfVxuXG4gICAgaXNDaGVja0FsbCgpIHtcbiAgICAgICAgY29uc3QgY2hlY2tlZEtleXMgPSB0aGlzLmdldCgnY2hlY2tlZEtleXMnKTtcbiAgICAgICAgY29uc3QgZGF0YUxlbmd0aCA9IHRoaXMuZ2V0KCdkYXRhJykubGVuZ3RoO1xuICAgICAgICBjb25zdCBkaXNhYmxlZEFtb3VudCA9IHRoaXMuZ2V0KFwiX2Rpc2FibGVkQW1vdW50XCIpO1xuICAgICAgICBjb25zdCBhbW91bnQgPSBkYXRhTGVuZ3RoIC0gZGlzYWJsZWRBbW91bnQ7XG4gICAgICAgIHJldHVybiBhbW91bnQgJiYgY2hlY2tlZEtleXMubGVuZ3RoID09PSBhbW91bnQ7IFxuICAgIH1cblxuICAgIGlzQ2hlY2tlZChrZXkpIHtcbiAgICAgICAgY29uc3Qge2NoZWNrVHlwZSwgY2hlY2tlZEtleSwgY2hlY2tlZEtleXN9ID0gdGhpcy5nZXQoKTtcbiAgICAgICAgaWYgKGNoZWNrVHlwZSA9PT0gJ2NoZWNrYm94Jykge1xuICAgICAgICAgICAgcmV0dXJuIH5jaGVja2VkS2V5cy5pbmRleE9mKGtleSk7XG4gICAgICAgIH0gZWxzZSBpZiAoY2hlY2tUeXBlID09PSAncmFkaW8nKSB7XG4gICAgICAgICAgICByZXR1cm4gY2hlY2tlZEtleSA9PT0ga2V5O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cblxuICAgIGNoZWNrQWxsKCkge1xuICAgICAgICBjb25zdCByb3dLZXkgPSB0aGlzLmdldCgncm93S2V5Jyk7XG4gICAgICAgIGNvbnN0IGRpc2FibGVSb3cgPSB0aGlzLmdldCgnZGlzYWJsZVJvdycpO1xuICAgICAgICBjb25zdCBjaGVja2VkS2V5cyA9IFtdO1xuICAgICAgICB0aGlzLmdldCgnZGF0YScpLmZvckVhY2goKHZhbHVlLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgaWYgKCFkaXNhYmxlUm93LmNhbGwodGhpcywgdmFsdWUsIGluZGV4KSkge1xuICAgICAgICAgICAgICAgIGNoZWNrZWRLZXlzLnB1c2gocm93S2V5LmNhbGwodGhpcywgdmFsdWUsIGluZGV4KSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLnNldCgnY2hlY2tlZEtleXMnLCBjaGVja2VkS2V5cyk7XG4gICAgfVxuXG4gICAgdW5jaGVja0FsbCgpIHtcbiAgICAgICAgdGhpcy5zZXQoJ2NoZWNrZWRLZXlzJywgW10pO1xuICAgIH1cblxuICAgIGNoZWNrUm93KGtleSkge1xuICAgICAgICB0aGlzLl9jaGVja1VuY2hlY2tSb3coa2V5LCB0cnVlLCBmYWxzZSk7XG4gICAgfVxuXG4gICAgdW5jaGVja1JvdyhrZXkpIHtcbiAgICAgICAgdGhpcy5fY2hlY2tVbmNoZWNrUm93KGtleSwgZmFsc2UsIGZhbHNlKTtcbiAgICB9XG5cbiAgICBzaHJpbmtSb3coa2V5KSB7XG4gICAgICAgIHRoaXMuX2V4cGFuZFNocmlua1JvdyhrZXksIGZhbHNlLCBmYWxzZSk7XG4gICAgfVxuXG4gICAgZXhwYW5kUm93KGtleSkge1xuICAgICAgICB0aGlzLl9leHBhbmRTaHJpbmtSb3coa2V5LCB0cnVlLCBmYWxzZSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQGJyaWVmIGdldCB0aGUgY2hlY2tlZCBkYXRhXG4gICAgICogQHJldHVybiB7QXJyYXl9XG4gICAgICovXG4gICAgZ2V0Q2hlY2tlZERhdGEoKSB7XG4gICAgICAgIGNvbnN0IHJvd0tleSA9IHRoaXMuZ2V0KCdyb3dLZXknKTtcbiAgICAgICAgY29uc3QgY2hlY2tUeXBlID0gdGhpcy5nZXQoJ2NoZWNrVHlwZScpO1xuICAgICAgICBpZiAoY2hlY2tUeXBlID09PSAnY2hlY2tib3gnKSB7XG4gICAgICAgICAgICBjb25zdCBjaGVja2VkS2V5cyA9IHRoaXMuZ2V0KCdjaGVja2VkS2V5cycpO1xuICAgICAgICAgICAgY29uc3QgY2hlY2tlZEtleXNNYXAgPSB7fTtcbiAgICAgICAgICAgIGNoZWNrZWRLZXlzLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgICAgICAgICAgICBjaGVja2VkS2V5c01hcFtpdGVtXSA9IHRydWU7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmdldCgnZGF0YScpLmZpbHRlcigodmFsdWUsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3Qga2V5ID0gcm93S2V5LmNhbGwodGhpcywgdmFsdWUsIGluZGV4KTtcbiAgICAgICAgICAgICAgICByZXR1cm4gY2hlY2tlZEtleXNNYXBba2V5XTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2UgaWYgKGNoZWNrVHlwZSA9PT0gJ3JhZGlvJykge1xuICAgICAgICAgICAgY29uc3QgY2hlY2tlZEtleSA9IHRoaXMuZ2V0KCdjaGVja2VkS2V5Jyk7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5nZXQoJ2RhdGEnKS5maWx0ZXIoKHZhbHVlLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiByb3dLZXkuY2FsbCh0aGlzLCB2YWx1ZSwgaW5kZXgpID09PSBjaGVja2VkS2V5O1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gW107XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBfY2FsY0hlYWRlclBhZGRpbmcoKSB7XG4gICAgICAgIGlmICh0aGlzLmdldCgnZml4SGVhZGVyJykpIHtcbiAgICAgICAgICAgIGNvbnN0IHRhYmxlSGVpZ2h0ID0gdGhpcy50YWJsZS5vZmZzZXRIZWlnaHQ7XG4gICAgICAgICAgICBjb25zdCBjb250YWluZXJIZWlnaHQgPSB0aGlzLnNjcm9sbC5vZmZzZXRIZWlnaHQ7XG4gICAgICAgICAgICBjb25zdCBoZWFkZXJIZWlnaHQgPSB0aGlzLmhlYWRlci5vZmZzZXRIZWlnaHQ7XG4gICAgICAgICAgICB0aGlzLnNldCgnX3BhZGRpbmcnLCB0YWJsZUhlaWdodCAtIGhlYWRlckhlaWdodCA+IGNvbnRhaW5lckhlaWdodCA/IHNjcm9sbEJhcldpZHRoIDogMCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBfdXBkYXRlRGlzYWJsZWRBbW91bnQoKSB7XG4gICAgICAgIGxldCBkaXNhYmxlZEFtb3VudCA9IDA7XG4gICAgICAgIGNvbnN0IGRpc2FibGVSb3cgPSB0aGlzLmdldCgnZGlzYWJsZVJvdycpO1xuICAgICAgICB0aGlzLmdldCgnZGF0YScpLmZvckVhY2goKGl0ZW0sIGluZGV4KSA9PiB7XG4gICAgICAgICAgICBpZiAoZGlzYWJsZVJvdy5jYWxsKHRoaXMsIGl0ZW0sIGluZGV4KSkge1xuICAgICAgICAgICAgICAgIGRpc2FibGVkQW1vdW50Kys7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLnNldCgnX2Rpc2FibGVkQW1vdW50JywgZGlzYWJsZWRBbW91bnQpO1xuICAgIH1cblxuICAgIF90b2dnbGVDaGVja0FsbChjLCBjaGVja2VkKSB7XG4gICAgICAgIGlmIChjaGVja2VkKSB7XG4gICAgICAgICAgICB0aGlzLmNoZWNrQWxsKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnVuY2hlY2tBbGwoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIF9jbGlja1Jvdyh2YWx1ZSwgaW5kZXgsIGtleSwgZSkge1xuICAgICAgICAvLyBpZiBpcyBmcm9tIGNoZWNrYm94IG9yIHJhZGlvIHRoZW4gZG8gbm90aGluZ1xuICAgICAgICBpZiAoZS50YXJnZXQudGFnTmFtZS50b0xvd2VyQ2FzZSgpID09PSAnaW5wdXQnKSByZXR1cm47XG4gICAgICAgIGlmICh0aGlzLmdldCgnZGlzYWJsZVJvdycpLmNhbGwodGhpcywgdmFsdWUsIGluZGV4KSkgcmV0dXJuO1xuXG4gICAgICAgIGlmICh0aGlzLmdldCgncm93Q2hlY2thYmxlJykpIHtcbiAgICAgICAgICAgIHRoaXMuX2NoZWNrVW5jaGVja1JvdyhrZXkpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuZ2V0KCdyb3dFeHBhbmRhYmxlJykpIHtcbiAgICAgICAgICAgIHRoaXMuX2V4cGFuZFNocmlua1JvdyhrZXkpOyBcbiAgICAgICAgfVxuICAgIH1cblxuICAgIF9jaGVja1VuY2hlY2tSb3coa2V5LCBpc0NoZWNrID0gZmFsc2UsIGlzVG9nZ2xlID0gdHJ1ZSkge1xuICAgICAgICBjb25zdCBjaGVja1R5cGUgPSB0aGlzLmdldCgnY2hlY2tUeXBlJyk7XG4gICAgICAgIGlmIChjaGVja1R5cGUgPT09ICdjaGVja2JveCcpIHtcbiAgICAgICAgICAgIGNvbnN0IGNoZWNrZWRLZXlzID0gdGhpcy5nZXQoJ2NoZWNrZWRLZXlzJykuc2xpY2UoMCk7XG4gICAgICAgICAgICBjb25zdCBpID0gY2hlY2tlZEtleXMuaW5kZXhPZihrZXkpO1xuICAgICAgICAgICAgaWYgKCghaXNDaGVjayB8fCBpc1RvZ2dsZSkgJiYgaSA+IC0xKSB7XG4gICAgICAgICAgICAgICAgY2hlY2tlZEtleXMuc3BsaWNlKGksIDEpO1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0KCdjaGVja2VkS2V5cycsIGNoZWNrZWRLZXlzKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoaXNDaGVjayB8fCBpc1RvZ2dsZSkge1xuICAgICAgICAgICAgICAgIGNoZWNrZWRLZXlzLnB1c2goa2V5KTtcbiAgICAgICAgICAgICAgICB0aGlzLnNldCgnY2hlY2tlZEtleXMnLCBjaGVja2VkS2V5cyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAoY2hlY2tUeXBlID09PSAncmFkaW8nKSB7XG4gICAgICAgICAgICB0aGlzLnNldCgnY2hlY2tlZEtleScsIGtleSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBfZXhwYW5kU2hyaW5rUm93KGtleSwgaXNFeHBhbmQgPSBmYWxzZSwgaXNUb2dnbGUgPSB0cnVlKSB7XG4gICAgICAgIGlmICh0eXBlb2YgdGhpcy5nZXQoJ2V4cGFuZCcpICE9PSAnZnVuY3Rpb24nKSByZXR1cm47XG5cbiAgICAgICAgY29uc3QgZXhwYW5kZWRLZXlzID0gdGhpcy5nZXQoJ2V4cGFuZGVkS2V5cycpLnNsaWNlKDApO1xuICAgICAgICBjb25zdCBpID0gZXhwYW5kZWRLZXlzLmluZGV4T2Yoa2V5KTtcbiAgICAgICAgaWYgKCghaXNFeHBhbmQgfHwgaXNUb2dnbGUpICYmIGkgPiAtMSkge1xuICAgICAgICAgICAgZXhwYW5kZWRLZXlzLnNwbGljZShpLCAxKTtcbiAgICAgICAgICAgIHRoaXMuc2V0KCdleHBhbmRlZEtleXMnLCBleHBhbmRlZEtleXMpO1xuICAgICAgICB9IGVsc2UgaWYgKGlzRXhwYW5kIHx8IGlzVG9nZ2xlKSB7XG4gICAgICAgICAgICBleHBhbmRlZEtleXMucHVzaChrZXkpO1xuICAgICAgICAgICAgdGhpcy5zZXQoJ2V4cGFuZGVkS2V5cycsIGV4cGFuZGVkS2V5cyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBfc29ydChrZXksIHZhbHVlKSB7XG4gICAgICAgIGNvbnN0IHNvcnQgPSBPYmplY3QuYXNzaWduKHt9LCB0aGlzLmdldCgnc29ydCcpKTtcbiAgICAgICAgc29ydC5rZXkgPSBrZXk7XG4gICAgICAgIHNvcnQudHlwZSA9IHNvcnQudHlwZSA9PT0gJ2Rlc2MnID8gJ2FzYycgOiAnZGVzYyc7XG4gICAgICAgIHRoaXMuc2V0KCdzb3J0Jywgc29ydCk7XG4gICAgfVxuXG4gICAgX2RyYWdTdGFydChlKSB7XG4gICAgICAgIC8vIGxlZnQga2V5XG4gICAgICAgIGlmIChlLndoaWNoICE9PSAxKSByZXR1cm47XG5cbiAgICAgICAgdGhpcy5fcmVzaXppbmcgPSB0cnVlO1xuICAgICAgICB0aGlzLl9jb250YWluZXJXaWR0aCA9IHRoaXMuZWxlbWVudC5vZmZzZXRXaWR0aDtcbiAgICAgICAgdGhpcy5feCA9IGUuY2xpZW50WDtcblxuICAgICAgICBjb25zdCBjdXJyZW50VGggPSBlLnRhcmdldC5wYXJlbnROb2RlO1xuICAgICAgICBjb25zdCBwcmV2VGggPSBjdXJyZW50VGgucHJldmlvdXNFbGVtZW50U2libGluZztcblxuICAgICAgICB0aGlzLl9jdXJyZW50VGhzID0gW2N1cnJlbnRUaF07XG4gICAgICAgIHRoaXMuX3ByZXZUaHMgPSBbcHJldlRoXTtcbiAgICAgICAgdGhpcy5fdGFibGVzID0gW3RoaXMudGFibGVdO1xuXG4gICAgICAgIGlmICh0aGlzLmdldCgnZml4SGVhZGVyJykpIHtcbiAgICAgICAgICAgIGNvbnN0IHRocyA9IHRoaXMudGFibGUuY2hpbGRyZW5bMF0uZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ3RoJyk7XG4gICAgICAgICAgICBjb25zdCBmaXhUaHMgPSBjdXJyZW50VGgucGFyZW50Tm9kZS5jaGlsZHJlbjtcbiAgICAgICAgICAgIGNvbnN0IGluZGV4ID0gc2xpY2UuY2FsbChmaXhUaHMpLmluZGV4T2YoY3VycmVudFRoKTtcbiAgICAgICAgICAgIHRoaXMuX2N1cnJlbnRUaHMucHVzaCh0aHNbaW5kZXhdKTtcbiAgICAgICAgICAgIHRoaXMuX3ByZXZUaHMucHVzaCh0aHNbaW5kZXggLSAxXSk7XG4gICAgICAgICAgICAvLyB0aGlzLl90YWJsZXMucHVzaCh0aGlzLmhlYWRlci5jaGlsZHJlblswXSk7XG4gICAgICAgICAgICAvLyBpZiBmaXhIZWFkZXIgd2Ugc2hvdWxkIGNoYW5nZSB0aGUgd2lkdGggb2YgaGVhZGVyIGFuZCBzY3JvbGxcbiAgICAgICAgICAgIHRoaXMuX3RhYmxlcyA9IFt0aGlzLmhlYWRlciwgdGhpcy5zY3JvbGxdO1xuICAgICAgICB9XG5cbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgdGhpcy5fbW92ZSk7XG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCB0aGlzLl9kcmFnRW5kKTtcbiAgICB9XG5cbiAgICBfbW92ZShlKSB7XG4gICAgICAgIGlmICh0aGlzLl9yZXNpemluZykge1xuICAgICAgICAgICAgY29uc3QgZGVsWCA9IGUuY2xpZW50WCAtIHRoaXMuX3g7XG4gICAgICAgICAgICBjb25zdCBwcmV2V2lkdGggPSB0aGlzLl9wcmV2VGhzWzBdLm9mZnNldFdpZHRoICsgZGVsWDtcbiAgICAgICAgICAgIGNvbnN0IHRhYmxlV2lkdGggPSB0aGlzLl90YWJsZXNbMF0ub2Zmc2V0V2lkdGggKyBkZWxYO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBpZiAocHJldldpZHRoIDwgTUlOX1dJRFRIKSByZXR1cm47XG5cbiAgICAgICAgICAgIHRoaXMuX3ByZXZUaHMuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgICAgICAgICAgICBpdGVtLnN0eWxlLndpZHRoID0gcHJldldpZHRoICsgJ3B4JztcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBpZiAodGhpcy5fY29udGFpbmVyV2lkdGggPj0gdGFibGVXaWR0aCkge1xuICAgICAgICAgICAgICAgIHRoaXMuX3RhYmxlcy5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICAgICAgICAgICAgICBpdGVtLnN0eWxlLndpZHRoID0gJzEwMCUnO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLl90YWJsZXMuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaXRlbS5zdHlsZS53aWR0aCA9IHRhYmxlV2lkdGggKyAncHgnO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLl94ID0gZS5jbGllbnRYO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgX2RyYWdFbmQoZSkge1xuICAgICAgICBpZiAodGhpcy5fcmVzaXppbmcpIHtcbiAgICAgICAgICAgIHRoaXMuX3Jlc2l6aW5nID0gZmFsc2U7XG4gICAgICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCB0aGlzLl9tb3ZlKTtcbiAgICAgICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCB0aGlzLl9kcmFnRW5kKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIF9kZXN0cm95KCkge1xuICAgICAgICB0aGlzLl9kcmFnRW5kKCk7XG4gICAgfVxufVxuXG5leHBvcnQge1RhYmxlLCBDb2x1bW4gYXMgVGFibGVDb2x1bW59O1xuXG4vLyByZWZlcmVuY2U6IGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvMTMzODI1MTYvZ2V0dGluZy1zY3JvbGwtYmFyLXdpZHRoLXVzaW5nLWphdmFzY3JpcHRcbmZ1bmN0aW9uIGdldFNjcm9sbGJhcldpZHRoKCkge1xuICAgIHZhciBvdXRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgb3V0ZXIuc3R5bGUudmlzaWJpbGl0eSA9IFwiaGlkZGVuXCI7XG4gICAgb3V0ZXIuc3R5bGUud2lkdGggPSBcIjEwMHB4XCI7XG4gICAgb3V0ZXIuc3R5bGUubXNPdmVyZmxvd1N0eWxlID0gXCJzY3JvbGxiYXJcIjsgLy8gbmVlZGVkIGZvciBXaW5KUyBhcHBzXG5cbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKG91dGVyKTtcblxuICAgIHZhciB3aWR0aE5vU2Nyb2xsID0gb3V0ZXIub2Zmc2V0V2lkdGg7XG4gICAgLy8gZm9yY2Ugc2Nyb2xsYmFyc1xuICAgIG91dGVyLnN0eWxlLm92ZXJmbG93ID0gXCJzY3JvbGxcIjtcblxuICAgIC8vIGFkZCBpbm5lcmRpdlxuICAgIHZhciBpbm5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgaW5uZXIuc3R5bGUud2lkdGggPSBcIjEwMCVcIjtcbiAgICBvdXRlci5hcHBlbmRDaGlsZChpbm5lcik7XG5cbiAgICB2YXIgd2lkdGhXaXRoU2Nyb2xsID0gaW5uZXIub2Zmc2V0V2lkdGg7XG5cbiAgICAvLyByZW1vdmUgZGl2c1xuICAgIG91dGVyLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQob3V0ZXIpO1xuXG4gICAgcmV0dXJuIHdpZHRoTm9TY3JvbGwgLSB3aWR0aFdpdGhTY3JvbGw7XG59XG5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvdGFibGUvaW5kZXguanMiLCJpbXBvcnQgQ2hlY2tib3ggZnJvbSAnLi4vY2hlY2tib3gnO2ltcG9ydCBSYWRpbyBmcm9tICcuLi9yYWRpbyc7aW1wb3J0IFJvdyBmcm9tICcuL3Jvdyc7aW1wb3J0IHtub3JtYWxpemV9IGZyb20gJ2ludGFjdCc7aW1wb3J0IENvbHVtbiBmcm9tICcuL2NvbHVtbic7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihvYmosIF9WZHQsIGJsb2NrcywgJGNhbGxlZSkge1xuXG5fVmR0IHx8IChfVmR0ID0gVmR0KTtcbm9iaiB8fCAob2JqID0ge30pO1xuYmxvY2tzIHx8IChibG9ja3MgPSB7fSk7XG52YXIgaCA9IF9WZHQubWlzcy5oLCBoYyA9IF9WZHQubWlzcy5oYywgaHUgPSBfVmR0Lm1pc3MuaHUsIHdpZGdldHMgPSB0aGlzICYmIHRoaXMud2lkZ2V0cyB8fCB7fSwgX2Jsb2NrcyA9IHt9LCBfX2Jsb2NrcyA9IHt9LFxuX191ID0gX1ZkdC51dGlscywgZXh0ZW5kID0gX191LmV4dGVuZCwgX2UgPSBfX3UuZXJyb3IsIF9jbGFzc05hbWUgPSBfX3UuY2xhc3NOYW1lLFxuX19vID0gX191Lk9wdGlvbnMsIF9nZXRNb2RlbCA9IF9fby5nZXRNb2RlbCwgX3NldE1vZGVsID0gX19vLnNldE1vZGVsLFxuX3NldENoZWNrYm94TW9kZWwgPSBfX3Uuc2V0Q2hlY2tib3hNb2RlbCwgX2RldGVjdENoZWNrYm94Q2hlY2tlZCA9IF9fdS5kZXRlY3RDaGVja2JveENoZWNrZWQsXG5fc2V0U2VsZWN0TW9kZWwgPSBfX3Uuc2V0U2VsZWN0TW9kZWwsXG5zZWxmID0gdGhpcy5kYXRhLCBzY29wZSA9IG9iaiwgQW5pbWF0ZSA9IHNlbGYgJiYgc2VsZi5BbmltYXRlLCBwYXJlbnQgPSAoJGNhbGxlZSB8fCB7fSkuX3N1cGVyXG5cblxuXG5cblxuXG5jb25zdCB7XG4gICAgY2hlY2tUeXBlLCBzY2hlbWUsIGNoZWNrZWRLZXlzLCBkYXRhLCByb3dLZXksIFxuICAgIGNsYXNzTmFtZSwgZml4SGVhZGVyLCBub0RhdGFUZW1wbGF0ZSwgZGlzYWJsZVJvdyxcbiAgICBncm91cHMsIHJlc2l6YWJsZSwgZXhwYW5kLCBleHBhbmRlZEtleXMsIHR5cGUsXG4gICAgc3R5bGUsIHJvd0NsYXNzTmFtZSwgY2hpbGRyZW4sIHNvcnRcbn0gPSBzZWxmLmdldCgpO1xuXG5sZXQgY29sU3BhbiA9IGNoZWNrVHlwZSA9PT0gJ2NoZWNrYm94JyB8fCBjaGVja1R5cGUgPT09ICdyYWRpbycgPyAxIDogMDtcbmNvbnN0IGV4cGFuZGFibGUgPSB0eXBlb2YgZXhwYW5kID09PSAnZnVuY3Rpb24nO1xuY29uc3QgX3NjaGVtZSA9IHt9O1xuXG5jb25zdCB0aGVhZENyZWF0b3IgPSAoKSA9PiBoKCd0aGVhZCcsIG51bGwsIGgoJ3RyJywgbnVsbCwgW2Z1bmN0aW9uKCkge3RyeSB7cmV0dXJuIFtjaGVja1R5cGUgPT09ICdjaGVja2JveCcgXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKSA/IGgoJ3RoJywgbnVsbCwgaChDaGVja2JveCwgeyd2YWx1ZSc6IGZ1bmN0aW9uKCkge3RyeSB7cmV0dXJuIFtzZWxmLmlzQ2hlY2tBbGwoKSBdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpLCAnZXYtJGNoYW5nZTp2YWx1ZSc6IGZ1bmN0aW9uKCkge3RyeSB7cmV0dXJuIFtzZWxmLl90b2dnbGVDaGVja0FsbCBdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpLCAnY2hpbGRyZW4nOiBudWxsLCAnX2NvbnRleHQnOiB0aGlzfSksICdrLXRoLWNoZWNrJykgOiBmdW5jdGlvbigpIHt0cnkge3JldHVybiBbY2hlY2tUeXBlID09PSAncmFkaW8nIF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcykgPyBoKCd0aCcsIG51bGwsIG51bGwsICdrLXRoLWNoZWNrJykgOiB1bmRlZmluZWQsICdcXG4gICAgICAgICcsIGZ1bmN0aW9uKCkge3RyeSB7cmV0dXJuIFtfX3UubWFwKHNjaGVtZSwgKGl0ZW0sIGtleSkgPT4ge1xuICAgICAgICAgICAgY29sU3BhbisrO1xuXG4gICAgICAgICAgICBpZiAoIV9fdS5pc09iamVjdChpdGVtKSkge1xuICAgICAgICAgICAgICAgIGl0ZW0gPSB7dGl0bGU6IGl0ZW19O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gaChDb2x1bW4sIHsuLi5mdW5jdGlvbigpIHt0cnkge3JldHVybiBbaXRlbSBdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpLCAna2V5JzogZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW2tleSBdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpLCAnJHBhcmVudCc6IGZ1bmN0aW9uKCkge3RyeSB7cmV0dXJuIFtzZWxmIF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcyksICdldi1jbGljayc6IGZ1bmN0aW9uKCkge3RyeSB7cmV0dXJuIFtpdGVtLnNvcnRhYmxlID8gc2VsZi5fc29ydC5iaW5kKHNlbGYsIGtleSwgaXRlbSkgOiB1bmRlZmluZWQgXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKSwgJ2V2LWRyYWdTdGFydCc6IGZ1bmN0aW9uKCkge3RyeSB7cmV0dXJuIFtzZWxmLl9kcmFnU3RhcnQgXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKSwgJ2NoaWxkcmVuJzogbnVsbCwgJ19jb250ZXh0JzogdGhpc30pXG4gICAgICAgIH0pIF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcyksICdcXG4gICAgICAgICcsIGZ1bmN0aW9uKCkge3RyeSB7cmV0dXJuIFsvLyBmb3IgdXNpbmcgVGFibGVDb2x1bW4gYXMgY2hpbGRyZW5cbiAgICAgICAgICAgIF9fdS5tYXAoY2hpbGRyZW4gPyAoQXJyYXkuaXNBcnJheShjaGlsZHJlbikgPyBjaGlsZHJlbiA6IFtjaGlsZHJlbl0pIDogY2hpbGRyZW4sIHZOb2RlID0+IHtcbiAgICAgICAgICAgICAgICBpZiAodk5vZGUudGFnID09PSBDb2x1bW4pIHtcbiAgICAgICAgICAgICAgICAgICAgY29sU3BhbisrO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBwcm9wcyA9IHsuLi52Tm9kZS5wcm9wcywgJHBhcmVudDogc2VsZn07XG4gICAgICAgICAgICAgICAgICAgIHZOb2RlLnByb3BzID0gcHJvcHM7XG4gICAgICAgICAgICAgICAgICAgIGlmIChwcm9wcy5rZXkgPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgX2UoJ2tleSBmb3IgVGFibGVDb2x1bW4gbXVzdCBiZSBzcGVjaWZpZWQuJyk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoL15cXGQrJC8udGVzdChwcm9wcy5rZXkpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBhdm9pZCBkaWdpdGFsIGtleVxuICAgICAgICAgICAgICAgICAgICAgICAgX2UoJ2RvblxcJ3QgdXNlIGRpZ2l0cyBhcyBrZXkuJyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgX3NjaGVtZVtwcm9wcy5rZXldID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6IHByb3BzLnRpdGxlLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGVtcGxhdGU6IHByb3BzLnRlbXBsYXRlIHx8IHByb3BzLmRlZmF1bHQsXG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB2Tm9kZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KSBcbiAgICAgICAgXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKSwgJ1xcbiAgICAnXSkpXG5cbmNvbnN0IHRoZWFkID0gdGhlYWRDcmVhdG9yKCk7XG5cbmNvbnN0IHRib2R5ID0gaCgndGJvZHknLCBudWxsLCBbJ1xcbiAgICAnLCBmdW5jdGlvbigpIHt0cnkge3JldHVybiBbZGF0YSAmJiBkYXRhLmxlbmd0aCA/IFxuICAgICAgICBfX3UubWFwKGRhdGEsICh2YWx1ZSwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGtleSA9IHJvd0tleS5jYWxsKHNlbGYsIHZhbHVlLCBpbmRleCk7XG4gICAgICAgICAgICBjb25zdCBkaXNhYmxlZCA9IGRpc2FibGVSb3cuY2FsbChzZWxmLCB2YWx1ZSwgaW5kZXgpO1xuICAgICAgICAgICAgY29uc3QgY2xhc3NOYW1lID0gcm93Q2xhc3NOYW1lLmNhbGwoc2VsZiwgdmFsdWUsIGluZGV4KTtcbiAgICAgICAgICAgIGNvbnN0IHRyID0gaChSb3csIHsna2V5JzogZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW2tleSBdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpLCAnZXYtY2xpY2snOiBmdW5jdGlvbigpIHt0cnkge3JldHVybiBbc2VsZi5fY2xpY2tSb3cuYmluZChzZWxmLCB2YWx1ZSwgaW5kZXgsIGtleSkgXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKSwgJ2NsYXNzTmFtZSc6IF9jbGFzc05hbWUoZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW3tcbiAgICAgICAgICAgICAgICAgICAgJ2stZGlzYWJsZWQnOiBkaXNhYmxlZCxcbiAgICAgICAgICAgICAgICAgICAgW2NsYXNzTmFtZV06IGNsYXNzTmFtZSxcbiAgICAgICAgICAgICAgICAgICAgJ2stY2hlY2tlZCc6IHNlbGYuaXNDaGVja2VkKGtleSksIFxuICAgICAgICAgICAgICAgIH0gXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKSksICdldi0kZGVzdHJveWVkJzogZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW3NlbGYuc2hyaW5rUm93LmJpbmQoc2VsZiwga2V5KSBdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpLCAnY2hpbGRyZW4nOiBbZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW2NoZWNrVHlwZSA9PT0gJ2NoZWNrYm94JyBdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpID8gaCgndGQnLCBudWxsLCBoKENoZWNrYm94LCB7J25hbWUnOiAnay10YWJsZS1jaGVja2JveCcsICd0cnVlVmFsdWUnOiBmdW5jdGlvbigpIHt0cnkge3JldHVybiBba2V5IF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcyksICdkaXNhYmxlZCc6IGZ1bmN0aW9uKCkge3RyeSB7cmV0dXJuIFtkaXNhYmxlZCBdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpLCAnY2hpbGRyZW4nOiBudWxsLCAnX2NvbnRleHQnOiB0aGlzLCB2YWx1ZTogX2dldE1vZGVsKHNlbGYsICdjaGVja2VkS2V5cycpLCAnZXYtJGNoYW5nZTp2YWx1ZSc6IGZ1bmN0aW9uKF9fYywgX19uKSB7IF9zZXRNb2RlbChzZWxmLCAnY2hlY2tlZEtleXMnLCBfX24pIH19KSkgOiBmdW5jdGlvbigpIHt0cnkge3JldHVybiBbY2hlY2tUeXBlID09PSAncmFkaW8nIF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcykgPyBoKCd0ZCcsIG51bGwsIGgoUmFkaW8sIHsnbmFtZSc6ICdrLXRhYmxlLXJhZGlvJywgJ3RydWVWYWx1ZSc6IGZ1bmN0aW9uKCkge3RyeSB7cmV0dXJuIFtrZXkgXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKSwgJ2Rpc2FibGVkJzogZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW2Rpc2FibGVkIF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcyksICdjaGlsZHJlbic6IG51bGwsICdfY29udGV4dCc6IHRoaXMsIHZhbHVlOiBfZ2V0TW9kZWwoc2VsZiwgJ2NoZWNrZWRLZXknKSwgJ2V2LSRjaGFuZ2U6dmFsdWUnOiBmdW5jdGlvbihfX2MsIF9fbikgeyBfc2V0TW9kZWwoc2VsZiwgJ2NoZWNrZWRLZXknLCBfX24pIH19KSkgOiB1bmRlZmluZWQsICdcXG4gICAgICAgICAgICAgICAgJywgZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW19fdS5tYXAoX191LmV4dGVuZCh7fSwgc2NoZW1lLCBfc2NoZW1lKSwgKGl0ZW0sIGtleSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBsZXQgdGQ7XG4gICAgICAgICAgICAgICAgICAgIGlmIChfX3UuaXNPYmplY3QoaXRlbSkgJiYgaXRlbS50ZW1wbGF0ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBpdGVtLnRlbXBsYXRlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGQgPSBpdGVtLnRlbXBsYXRlLmNhbGwoc2VsZiwgdmFsdWUsIGluZGV4KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBmb3IgSW50YWN0LVZ1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChub3JtYWxpemUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGQgPSBub3JtYWxpemUodGQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGQgPSBpdGVtLnRlbXBsYXRlO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHZhbHVlW2tleV0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGQgPSB2YWx1ZVtrZXldO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IG9iaiA9IHZhbHVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleXMgPSBrZXkuc3BsaXQoJy4nKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpID0gMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdoaWxlIChvYmogIT0gbnVsbCAmJiBpIDwga2V5cy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvYmogPSBvYmpba2V5c1tpKytdXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHRkID0gKGkgJiYgaSA9PT0ga2V5cy5sZW5ndGgpID8gb2JqIDogbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gaCgndGQnLCB7J3RpdGxlJzogZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW3R5cGVvZiB0ZCA9PT0gJ3N0cmluZycgfHwgdHlwZW9mIHRkID09PSAnbnVtYmVyJyA/IFxuICAgICAgICAgICAgICAgICAgICAgICAgdGQgOiB1bmRlZmluZWQgXG4gICAgICAgICAgICAgICAgICAgIF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcyl9LCBmdW5jdGlvbigpIHt0cnkge3JldHVybiBbdHlwZW9mIHRkID09PSAnYm9vbGVhbicgPyBTdHJpbmcodGQpIDogdGQgXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKSlcbiAgICAgICAgICAgICAgICB9KSBdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpLCAnXFxuICAgICAgICAgICAgJ10sICdfY29udGV4dCc6IHRoaXN9KTtcblxuICAgICAgICAgICAgaWYgKGV4cGFuZGFibGUgJiYgZXhwYW5kZWRLZXlzLmluZGV4T2Yoa2V5KSA+IC0xKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgICAgICAgICAgdHIsXG4gICAgICAgICAgICAgICAgICAgIGgoJ3RyJywgbnVsbCwgaCgndGQnLCB7J2NvbHNwYW4nOiBmdW5jdGlvbigpIHt0cnkge3JldHVybiBbY29sU3BhbiBdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpfSwgZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW2V4cGFuZC5jYWxsKHNlbGYsIHZhbHVlLCBpbmRleCkgXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKSksICdrLWV4cGFuZCcsIGZ1bmN0aW9uKCkge3RyeSB7cmV0dXJuIFtgJHtrZXl9LmV4cGFuZGAgXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKSlcbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiB0cjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSkgOlxuICAgICAgICBoKCd0cicsIG51bGwsIGgoJ3RkJywgeydjb2xzcGFuJzogZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW2NvbFNwYW4gXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKX0sIFsnXFxuICAgICAgICAgICAgICAgICcsIGZ1bmN0aW9uKCkge3RyeSB7cmV0dXJuIFtub0RhdGFUZW1wbGF0ZSBdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpLCAnXFxuICAgICAgICAgICAgJ10sICdrLW5vLWRhdGEnKSwgbnVsbCwgJ3RhYmxlX25vX2RhdGEnKVxuICAgIF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcyksICdcXG4nXSlcblxuY29uc3QgY2xhc3NOYW1lT2JqID0ge1xuICAgICdrLXRhYmxlLXdyYXBwZXInOiB0cnVlLFxuICAgIFtjbGFzc05hbWVdOiBjbGFzc05hbWUsXG4gICAgW2BrLSR7dHlwZX1gXTogdHlwZSAhPT0gJ2RlZmF1bHQnLFxufTtcblxuY29uc3QgdGFibGUgPSBoKCd0YWJsZScsIG51bGwsIFsnXFxuICAgICcsIGZ1bmN0aW9uKCkge3RyeSB7cmV0dXJuIFt0aGVhZCBdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpLCAnXFxuICAgICcsIGZ1bmN0aW9uKCkge3RyeSB7cmV0dXJuIFt0Ym9keSBdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpLCAnXFxuJ10sICdrLXRhYmxlJywgbnVsbCwgZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW2RvbSA9PiBzZWxmLnRhYmxlID0gZG9tIF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcykpXG5cbnJldHVybiBoKCdkaXYnLCB7J3N0eWxlJzogZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW3N0eWxlIF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcyl9LCBbZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW2ZpeEhlYWRlciBdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpID8gaCgnZGl2JywgeydzdHlsZSc6IGZ1bmN0aW9uKCkge3RyeSB7cmV0dXJuIFt7cGFkZGluZ1JpZ2h0OiBzZWxmLmdldCgnX3BhZGRpbmcnKSArICdweCd9IF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcyl9LCBoKCd0YWJsZScsIG51bGwsIFsnXFxuICAgICAgICAgICAgJywgZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW3RoZWFkQ3JlYXRvcigpIF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcyksICdcXG4gICAgICAgICddLCAnay10YWJsZScpLCAnay1maXhlZCcsIG51bGwsIGZ1bmN0aW9uKCkge3RyeSB7cmV0dXJuIFtkb20gPT4gc2VsZi5oZWFkZXIgPSBkb20gXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKSkgOiB1bmRlZmluZWQsICdcXG4gICAgJywgZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW2ZpeEhlYWRlciA/IFxuICAgICAgICBoKCdkaXYnLCB7J3N0eWxlJzogZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW3R5cGVvZiBmaXhIZWFkZXIgPT09ICdudW1iZXInIHx8IHR5cGVvZiBmaXhIZWFkZXIgPT09ICdzdHJpbmcnID9cbiAgICAgICAgICAgICAgICB7bWF4SGVpZ2h0OiBgJHtmaXhIZWFkZXJ9cHhgfSA6IHVuZGVmaW5lZFxuICAgICAgICAgICAgXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKX0sIGZ1bmN0aW9uKCkge3RyeSB7cmV0dXJuIFt0YWJsZSBdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpLCAnay1zY3JvbGwnLCBudWxsLCBmdW5jdGlvbigpIHt0cnkge3JldHVybiBbZG9tID0+IHNlbGYuc2Nyb2xsID0gZG9tIF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcykpIDpcbiAgICAgICAgdGFibGVcbiAgICBdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpLCAnXFxuJ10sIF9jbGFzc05hbWUoZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW2NsYXNzTmFtZU9iaiBdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpKSlcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL3RhYmxlL2luZGV4LnZkdCIsImltcG9ydCBJbnRhY3QgZnJvbSAnaW50YWN0JztcbmltcG9ydCB0ZW1wbGF0ZSBmcm9tICcuL3Jvdy52ZHQnO1xuXG4vLyBmb3IgdHIgJGRlc3Ryb3llZCBldmVudFxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGFibGVSb3cgZXh0ZW5kcyBJbnRhY3Qge1xuICAgIGdldCB0ZW1wbGF0ZSgpIHsgcmV0dXJuIHRlbXBsYXRlOyB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL3RhYmxlL3Jvdy5qcyIsIlxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24ob2JqLCBfVmR0LCBibG9ja3MsICRjYWxsZWUpIHtcblxuX1ZkdCB8fCAoX1ZkdCA9IFZkdCk7XG5vYmogfHwgKG9iaiA9IHt9KTtcbmJsb2NrcyB8fCAoYmxvY2tzID0ge30pO1xudmFyIGggPSBfVmR0Lm1pc3MuaCwgaGMgPSBfVmR0Lm1pc3MuaGMsIGh1ID0gX1ZkdC5taXNzLmh1LCB3aWRnZXRzID0gdGhpcyAmJiB0aGlzLndpZGdldHMgfHwge30sIF9ibG9ja3MgPSB7fSwgX19ibG9ja3MgPSB7fSxcbl9fdSA9IF9WZHQudXRpbHMsIGV4dGVuZCA9IF9fdS5leHRlbmQsIF9lID0gX191LmVycm9yLCBfY2xhc3NOYW1lID0gX191LmNsYXNzTmFtZSxcbl9fbyA9IF9fdS5PcHRpb25zLCBfZ2V0TW9kZWwgPSBfX28uZ2V0TW9kZWwsIF9zZXRNb2RlbCA9IF9fby5zZXRNb2RlbCxcbl9zZXRDaGVja2JveE1vZGVsID0gX191LnNldENoZWNrYm94TW9kZWwsIF9kZXRlY3RDaGVja2JveENoZWNrZWQgPSBfX3UuZGV0ZWN0Q2hlY2tib3hDaGVja2VkLFxuX3NldFNlbGVjdE1vZGVsID0gX191LnNldFNlbGVjdE1vZGVsLFxuc2VsZiA9IHRoaXMuZGF0YSwgc2NvcGUgPSBvYmosIEFuaW1hdGUgPSBzZWxmICYmIHNlbGYuQW5pbWF0ZSwgcGFyZW50ID0gKCRjYWxsZWUgfHwge30pLl9zdXBlclxucmV0dXJuIGgoJ3RyJywgey4uLmZ1bmN0aW9uKCkge3RyeSB7cmV0dXJuIFtzZWxmLmdldCgpIF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcyl9LCBmdW5jdGlvbigpIHt0cnkge3JldHVybiBbc2VsZi5nZXQoJ2NoaWxkcmVuJykgXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKSlcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL3RhYmxlL3Jvdy52ZHQiLCJleHBvcnQge2RlZmF1bHQgYXMgZGF0YX0gZnJvbSAnLi9pbmRleC5qc29uJztcbmltcG9ydCBJbnRhY3QgZnJvbSAnaW50YWN0JztcbmltcG9ydCB0ZW1wbGF0ZSBmcm9tICcuL2luZGV4LnZkdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgSW50YWN0IHtcbiAgICBASW50YWN0LnRlbXBsYXRlKClcbiAgICBzdGF0aWMgdGVtcGxhdGUgPSB0ZW1wbGF0ZTtcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zaXRlL2NvbXBvbmVudHMvdGFibGUvZGVtb3MvYmFzaWMvaW5kZXguanMiLCJpbXBvcnQgVGFibGUgZnJvbSAna3BjL2NvbXBvbmVudHMvdGFibGUnO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24ob2JqLCBfVmR0LCBibG9ja3MsICRjYWxsZWUpIHtcblxuX1ZkdCB8fCAoX1ZkdCA9IFZkdCk7XG5vYmogfHwgKG9iaiA9IHt9KTtcbmJsb2NrcyB8fCAoYmxvY2tzID0ge30pO1xudmFyIGggPSBfVmR0Lm1pc3MuaCwgaGMgPSBfVmR0Lm1pc3MuaGMsIGh1ID0gX1ZkdC5taXNzLmh1LCB3aWRnZXRzID0gdGhpcyAmJiB0aGlzLndpZGdldHMgfHwge30sIF9ibG9ja3MgPSB7fSwgX19ibG9ja3MgPSB7fSxcbl9fdSA9IF9WZHQudXRpbHMsIGV4dGVuZCA9IF9fdS5leHRlbmQsIF9lID0gX191LmVycm9yLCBfY2xhc3NOYW1lID0gX191LmNsYXNzTmFtZSxcbl9fbyA9IF9fdS5PcHRpb25zLCBfZ2V0TW9kZWwgPSBfX28uZ2V0TW9kZWwsIF9zZXRNb2RlbCA9IF9fby5zZXRNb2RlbCxcbl9zZXRDaGVja2JveE1vZGVsID0gX191LnNldENoZWNrYm94TW9kZWwsIF9kZXRlY3RDaGVja2JveENoZWNrZWQgPSBfX3UuZGV0ZWN0Q2hlY2tib3hDaGVja2VkLFxuX3NldFNlbGVjdE1vZGVsID0gX191LnNldFNlbGVjdE1vZGVsLFxuc2VsZiA9IHRoaXMuZGF0YSwgc2NvcGUgPSBvYmosIEFuaW1hdGUgPSBzZWxmICYmIHNlbGYuQW5pbWF0ZSwgcGFyZW50ID0gKCRjYWxsZWUgfHwge30pLl9zdXBlclxuXG52YXIgc2NoZW1lID0ge2E6ICfooajlpLQxJywgYjogJ+ihqOWktDInfTtcblxucmV0dXJuIGgoJ2RpdicsIG51bGwsIGgoVGFibGUsIHsnc2NoZW1lJzogZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW3NjaGVtZV1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcyksICdjaGlsZHJlbic6IG51bGwsICdfY29udGV4dCc6IHRoaXN9KSlcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zaXRlL2NvbXBvbmVudHMvdGFibGUvZGVtb3MvYmFzaWMvaW5kZXgudmR0Il0sInNvdXJjZVJvb3QiOiIifQ==