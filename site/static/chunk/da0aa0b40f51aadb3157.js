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

/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3RhYmxlL2NvbHVtbi5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3RhYmxlL2NvbHVtbi52ZHQiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy90YWJsZS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3RhYmxlL2luZGV4LnZkdCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3RhYmxlL3Jvdy5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3RhYmxlL3Jvdy52ZHQiLCJ3ZWJwYWNrOi8vLy4vc2l0ZS9jb21wb25lbnRzL3RhYmxlL2RlbW9zL2Jhc2ljL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NpdGUvY29tcG9uZW50cy90YWJsZS9kZW1vcy9iYXNpYy9pbmRleC52ZHQiXSwibmFtZXMiOlsiVGFibGVDb2x1bW4iLCJ0aXRsZSIsInRlbXBsYXRlIiwiZGF0YSIsImluZGV4Iiwia2V5Iiwic29ydGFibGUiLCJ3aWR0aCIsInVuZGVmaW5lZCIsImdyb3VwcyIsIiRwYXJlbnQiLCJlIiwidHJpZ2dlciIsIm9iaiIsIl9WZHQiLCJibG9ja3MiLCIkY2FsbGVlIiwiVmR0IiwiaCIsIm1pc3MiLCJoYyIsImh1Iiwid2lkZ2V0cyIsIl9ibG9ja3MiLCJfX2Jsb2NrcyIsIl9fdSIsInV0aWxzIiwiZXh0ZW5kIiwiX2UiLCJlcnJvciIsIl9jbGFzc05hbWUiLCJjbGFzc05hbWUiLCJfX28iLCJPcHRpb25zIiwiX2dldE1vZGVsIiwiZ2V0TW9kZWwiLCJfc2V0TW9kZWwiLCJzZXRNb2RlbCIsIl9zZXRDaGVja2JveE1vZGVsIiwic2V0Q2hlY2tib3hNb2RlbCIsIl9kZXRlY3RDaGVja2JveENoZWNrZWQiLCJkZXRlY3RDaGVja2JveENoZWNrZWQiLCJfc2V0U2VsZWN0TW9kZWwiLCJzZXRTZWxlY3RNb2RlbCIsInNlbGYiLCJzY29wZSIsIkFuaW1hdGUiLCJwYXJlbnQiLCJfc3VwZXIiLCJnZXQiLCJzb3J0IiwicmVzaXphYmxlIiwiY2FsbCIsIm9uQ2xpY2siLCJvbkRyYWdTdGFydCIsInR5cGUiLCJzY3JvbGxCYXJXaWR0aCIsIk1JTl9XSURUSCIsInNsaWNlIiwiQXJyYXkiLCJwcm90b3R5cGUiLCJUYWJsZSIsInNjaGVtZSIsImNoZWNrVHlwZSIsInJvd0tleSIsInZhbHVlIiwicm93Q2xhc3NOYW1lIiwiY2hlY2tlZEtleXMiLCJjaGVja2VkS2V5Iiwicm93Q2hlY2thYmxlIiwicm93RXhwYW5kYWJsZSIsIm5vRGF0YVRlbXBsYXRlIiwiZGlzYWJsZVJvdyIsImV4cGFuZCIsImV4cGFuZGVkS2V5cyIsImZpeEhlYWRlciIsIl9wYWRkaW5nIiwiX2Rpc2FibGVkQW1vdW50Iiwib24iLCJjIiwibmV3VmFsdWUiLCJvbGRWYWx1ZSIsImZvckVhY2giLCJpdGVtIiwiX2NhbGNIZWFkZXJQYWRkaW5nIiwiX3VwZGF0ZURpc2FibGVkQW1vdW50IiwiX21vdmUiLCJiaW5kIiwiX2RyYWdFbmQiLCJnZXRTY3JvbGxiYXJXaWR0aCIsImRhdGFMZW5ndGgiLCJsZW5ndGgiLCJkaXNhYmxlZEFtb3VudCIsImFtb3VudCIsImluZGV4T2YiLCJwdXNoIiwic2V0IiwiX2NoZWNrVW5jaGVja1JvdyIsIl9leHBhbmRTaHJpbmtSb3ciLCJjaGVja2VkS2V5c01hcCIsImZpbHRlciIsInRhYmxlSGVpZ2h0IiwidGFibGUiLCJvZmZzZXRIZWlnaHQiLCJjb250YWluZXJIZWlnaHQiLCJzY3JvbGwiLCJoZWFkZXJIZWlnaHQiLCJoZWFkZXIiLCJjaGVja2VkIiwiY2hlY2tBbGwiLCJ1bmNoZWNrQWxsIiwidGFyZ2V0IiwidGFnTmFtZSIsInRvTG93ZXJDYXNlIiwiaXNDaGVjayIsImlzVG9nZ2xlIiwiaSIsInNwbGljZSIsImlzRXhwYW5kIiwiT2JqZWN0IiwiYXNzaWduIiwid2hpY2giLCJfcmVzaXppbmciLCJfY29udGFpbmVyV2lkdGgiLCJlbGVtZW50Iiwib2Zmc2V0V2lkdGgiLCJfeCIsImNsaWVudFgiLCJjdXJyZW50VGgiLCJwYXJlbnROb2RlIiwicHJldlRoIiwicHJldmlvdXNFbGVtZW50U2libGluZyIsIl9jdXJyZW50VGhzIiwiX3ByZXZUaHMiLCJfdGFibGVzIiwidGhzIiwiY2hpbGRyZW4iLCJnZXRFbGVtZW50c0J5VGFnTmFtZSIsImZpeFRocyIsImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsImRlbFgiLCJwcmV2V2lkdGgiLCJ0YWJsZVdpZHRoIiwic3R5bGUiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwicHJvcFR5cGVzIiwiQm9vbGVhbiIsIm91dGVyIiwiY3JlYXRlRWxlbWVudCIsInZpc2liaWxpdHkiLCJtc092ZXJmbG93U3R5bGUiLCJib2R5IiwiYXBwZW5kQ2hpbGQiLCJ3aWR0aE5vU2Nyb2xsIiwib3ZlcmZsb3ciLCJpbm5lciIsIndpZHRoV2l0aFNjcm9sbCIsInJlbW92ZUNoaWxkIiwiY29sU3BhbiIsImV4cGFuZGFibGUiLCJfc2NoZW1lIiwidGhlYWRDcmVhdG9yIiwiaXNDaGVja0FsbCIsIl90b2dnbGVDaGVja0FsbCIsIm1hcCIsImlzT2JqZWN0IiwiX3NvcnQiLCJfZHJhZ1N0YXJ0IiwiaXNBcnJheSIsInZOb2RlIiwidGFnIiwicHJvcHMiLCJ0ZXN0IiwiZGVmYXVsdCIsInRoZWFkIiwidGJvZHkiLCJkaXNhYmxlZCIsInRyIiwiX2NsaWNrUm93IiwiaXNDaGVja2VkIiwic2hyaW5rUm93IiwiX19jIiwiX19uIiwidGQiLCJrZXlzIiwic3BsaXQiLCJTdHJpbmciLCJjbGFzc05hbWVPYmoiLCJkb20iLCJwYWRkaW5nUmlnaHQiLCJtYXhIZWlnaHQiLCJUYWJsZVJvdyIsImEiLCJiIiwiZGF0YTEiLCJkYXRhMiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBRXFCQSxXOzs7Ozs7Ozs7OzttQ0FHTjtBQUNQLG1CQUFPO0FBQ0hDLHVCQUFPLEVBREo7QUFFSEMsd0JBRkcsb0JBRU1DLElBRk4sRUFFWUMsS0FGWixFQUVt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O0FBQWtCLE9BQXZCLENBQXdCLE9BQU16TCxDQUFOLEVBQVM7QUFBQ2lCLFdBQUdqQixDQUFIO0FBQU07QUFBQyxLQUFyRCxDQUFzRHlDLElBQXRELENBQTJELElBQTNELENBQXRGLEVBQXdKLGFBQWEsWUFBVztBQUFDLFVBQUk7QUFBQyxlQUFPLENBQUMsSUFBRCxFQUFPLENBQVAsQ0FBUDtBQUFpQixPQUF0QixDQUF1QixPQUFNekMsQ0FBTixFQUFTO0FBQUNpQixXQUFHakIsQ0FBSDtBQUFNO0FBQUMsS0FBcEQsQ0FBcUR5QyxJQUFyRCxDQUEwRCxJQUExRCxDQUFySyxFQUFzTyxZQUFZLElBQWxQLEVBQXdQLFlBQVksSUFBcFEsRUFBVCxDQUF4TSxDQUFmLENBQVA7QUFDQyxDOztBQWpCRCIsImZpbGUiOiJzdGF0aWMvY2h1bmsvZGEwYWEwYjQwZjUxYWFkYjMxNTcuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSW50YWN0IGZyb20gJ2ludGFjdCc7XG5pbXBvcnQgdGVtcGxhdGUgZnJvbSAnLi9jb2x1bW4udmR0JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGFibGVDb2x1bW4gZXh0ZW5kcyBJbnRhY3Qge1xuICAgIGdldCB0ZW1wbGF0ZSgpIHsgcmV0dXJuIHRlbXBsYXRlOyB9XG5cbiAgICBkZWZhdWx0cygpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHRpdGxlOiAnJyxcbiAgICAgICAgICAgIHRlbXBsYXRlKGRhdGEsIGluZGV4KSB7IH0sXG4gICAgICAgICAgICBrZXk6ICcnLFxuICAgICAgICAgICAgc29ydGFibGU6IGZhbHNlLFxuICAgICAgICAgICAgd2lkdGg6IHVuZGVmaW5lZCxcbiAgICAgICAgICAgIGdyb3VwczogdW5kZWZpbmVkLFxuXG4gICAgICAgICAgICAvLyBwYXNzZWQgYnkgcGFyZW50XG4gICAgICAgICAgICAkcGFyZW50OiB1bmRlZmluZWQsXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvbkNsaWNrKGUpIHtcbiAgICAgICAgdGhpcy50cmlnZ2VyKCdjbGljaycsIGUpO1xuICAgIH1cblxuICAgIG9uRHJhZ1N0YXJ0KGUpIHtcbiAgICAgICAgdGhpcy50cmlnZ2VyKCdkcmFnU3RhcnQnLCBlKTtcbiAgICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL3RhYmxlL2NvbHVtbi5qcyIsIlxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24ob2JqLCBfVmR0LCBibG9ja3MsICRjYWxsZWUpIHtcblxuX1ZkdCB8fCAoX1ZkdCA9IFZkdCk7XG5vYmogfHwgKG9iaiA9IHt9KTtcbmJsb2NrcyB8fCAoYmxvY2tzID0ge30pO1xudmFyIGggPSBfVmR0Lm1pc3MuaCwgaGMgPSBfVmR0Lm1pc3MuaGMsIGh1ID0gX1ZkdC5taXNzLmh1LCB3aWRnZXRzID0gdGhpcyAmJiB0aGlzLndpZGdldHMgfHwge30sIF9ibG9ja3MgPSB7fSwgX19ibG9ja3MgPSB7fSxcbl9fdSA9IF9WZHQudXRpbHMsIGV4dGVuZCA9IF9fdS5leHRlbmQsIF9lID0gX191LmVycm9yLCBfY2xhc3NOYW1lID0gX191LmNsYXNzTmFtZSxcbl9fbyA9IF9fdS5PcHRpb25zLCBfZ2V0TW9kZWwgPSBfX28uZ2V0TW9kZWwsIF9zZXRNb2RlbCA9IF9fby5zZXRNb2RlbCxcbl9zZXRDaGVja2JveE1vZGVsID0gX191LnNldENoZWNrYm94TW9kZWwsIF9kZXRlY3RDaGVja2JveENoZWNrZWQgPSBfX3UuZGV0ZWN0Q2hlY2tib3hDaGVja2VkLFxuX3NldFNlbGVjdE1vZGVsID0gX191LnNldFNlbGVjdE1vZGVsLFxuc2VsZiA9IHRoaXMuZGF0YSwgc2NvcGUgPSBvYmosIEFuaW1hdGUgPSBzZWxmICYmIHNlbGYuQW5pbWF0ZSwgcGFyZW50ID0gKCRjYWxsZWUgfHwge30pLl9zdXBlclxuY29uc3Qge1xuICAgIHdpZHRoLCB0aXRsZSwga2V5LCBcbiAgICBzb3J0YWJsZSwgZ3JvdXBzLCAkcGFyZW50XG59ID0gc2VsZi5nZXQoKTtcbmNvbnN0IHtzb3J0LCByZXNpemFibGV9ID0gJHBhcmVudC5nZXQoKTtcblxucmV0dXJuIGgoJ3RoJywgeyd3aWR0aCc6IGZ1bmN0aW9uKCkge3RyeSB7cmV0dXJuIFt3aWR0aCBdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpLCAndGl0bGUnOiBmdW5jdGlvbigpIHt0cnkge3JldHVybiBbdGl0bGUgXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKSwgJ2V2LWNsaWNrJzogZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW3NlbGYub25DbGljayBdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpfSwgW2Z1bmN0aW9uKCkge3RyeSB7cmV0dXJuIFtyZXNpemFibGUgXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKSA/IGgoJ2RpdicsIHsnZXYtbW91c2Vkb3duJzogZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW3NlbGYub25EcmFnU3RhcnQgXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKX0sIG51bGwsICdrLXJlc2l6ZScpIDogdW5kZWZpbmVkLCBoKCdkaXYnLCBudWxsLCBbZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gWyFncm91cHMgXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKSA/IGgoJ2RpdicsIG51bGwsIGZ1bmN0aW9uKCkge3RyeSB7cmV0dXJuIFt0aXRsZSBdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpLCAnYy1lbGxpcHNpcycpIDogdW5kZWZpbmVkLCAnXFxuICAgICAgICAnLCBmdW5jdGlvbigpIHt0cnkge3JldHVybiBbZG8ge1xuICAgICAgICAgICAgaWYgKHNvcnRhYmxlKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgdHlwZSA9IGtleSA9PT0gc29ydC5rZXkgPyBzb3J0LnR5cGUgOiAnJztcbiAgICAgICAgICAgICAgICBoKCdkaXYnLCBudWxsLCBoKCdpJywgbnVsbCwgbnVsbCwgX2NsYXNzTmFtZShmdW5jdGlvbigpIHt0cnkge3JldHVybiBbe1xuICAgICAgICAgICAgICAgICAgICAgICAgJ2staWNvbic6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBbYGljb24tJHt0eXBlfWBdOiB0eXBlLFxuICAgICAgICAgICAgICAgICAgICAgICAgJ2ljb24tc29ydGFibGUnOiAhdHlwZSxcbiAgICAgICAgICAgICAgICAgICAgfSBdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpKSksIF9jbGFzc05hbWUoZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW3snay1zb3J0JzogdHJ1ZSwgW2BrLSR7dHlwZX1gXTogdHlwZX0gXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKSkpXG4gICAgICAgICAgICB9XG4gICAgICAgIH0gXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKSwgJ1xcbiAgICAnXSwgJ2stdGgnKV0sIF9jbGFzc05hbWUoZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW3snay1zb3J0YWJsZSc6IHNvcnRhYmxlfSBdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpKSlcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL3RhYmxlL2NvbHVtbi52ZHQiLCJpbXBvcnQgSW50YWN0IGZyb20gJ2ludGFjdCc7XG5pbXBvcnQgdGVtcGxhdGUgZnJvbSAnLi9pbmRleC52ZHQnO1xuaW1wb3J0ICcuL2luZGV4LnN0eWwnO1xuaW1wb3J0IENvbHVtbiBmcm9tICcuL2NvbHVtbic7XG5cbmxldCBzY3JvbGxCYXJXaWR0aCA9IHVuZGVmaW5lZDtcblxuY29uc3QgTUlOX1dJRFRIID0gNDA7XG5jb25zdCBzbGljZSA9IEFycmF5LnByb3RvdHlwZS5zbGljZTtcblxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUYWJsZSBleHRlbmRzIEludGFjdCB7XG4gICAgQEludGFjdC50ZW1wbGF0ZSgpXG4gICAgZ2V0IHRlbXBsYXRlKCkgeyByZXR1cm4gdGVtcGxhdGU7IH1cblxuICAgIGRlZmF1bHRzKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgZGF0YTogW10sXG4gICAgICAgICAgICBzY2hlbWU6IHt9LFxuICAgICAgICAgICAgY2hlY2tUeXBlOiAnY2hlY2tib3gnLCAvLyByYWRpbyB8IG5vbmUgXG4gICAgICAgICAgICByb3dLZXkodmFsdWUsIGluZGV4KSB7IHJldHVybiBpbmRleDsgfSxcbiAgICAgICAgICAgIHJvd0NsYXNzTmFtZSh2YWx1ZSwgaW5kZXgpIHsgIH0sIC8vIGFkZCBjbGFzc05hbWUgZm9yIHRyXG4gICAgICAgICAgICBjaGVja2VkS2V5czogW10sIC8vIGZvciBjaGVja2JveFxuICAgICAgICAgICAgY2hlY2tlZEtleTogdW5kZWZpbmVkLCAvLyBmb3IgcmFkaW9cbiAgICAgICAgICAgIHJvd0NoZWNrYWJsZTogdHJ1ZSwgLy8gY2xpY2sgcm93IHRvIGNoZWNrXG4gICAgICAgICAgICByb3dFeHBhbmRhYmxlOiB0cnVlLCAvLyBjbGljayByb3cgdG8gZXhwYW5kXG4gICAgICAgICAgICBub0RhdGFUZW1wbGF0ZTogJy8o44SSb+OEkikvfn4g5rKh5pyJ5om+5Yiw5Lqy6KaB55qE5pWw5o2u5ZOmficsXG4gICAgICAgICAgICBkaXNhYmxlUm93KGRhdGEsIGluZGV4KSB7IHJldHVybiBmYWxzZSB9LFxuICAgICAgICAgICAgc29ydDoge30sXG4gICAgICAgICAgICBncm91cHM6IHt9LFxuICAgICAgICAgICAgcmVzaXphYmxlOiBmYWxzZSxcbiAgICAgICAgICAgIGV4cGFuZDogdW5kZWZpbmVkLCAvLyBleHBhbmQgdGVtcGxhdGUgY2FsbGJhY2tcbiAgICAgICAgICAgIGV4cGFuZGVkS2V5czogW10sIFxuICAgICAgICAgICAgdHlwZTogJ2RlZmF1bHQnLCAvLyBkZWZhdWx0IGJvcmRlclxuICAgICAgICAgICAgZml4SGVhZGVyOiBmYWxzZSxcblxuICAgICAgICAgICAgX3BhZGRpbmc6IDAsXG4gICAgICAgICAgICBfZGlzYWJsZWRBbW91bnQ6IDAsXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgICAgICByb3dDaGVja2FibGU6IEJvb2xlYW4sXG4gICAgICAgIHJvd0V4cGFuZGFibGU6IEJvb2xlYW4sXG4gICAgICAgIHJlc2l6YWJsZTogQm9vbGVhbixcbiAgICAgICAgZml4SGVhZGVyOiBCb29sZWFuLFxuICAgIH1cblxuICAgIF9pbml0KCkge1xuICAgICAgICAvLyBrZWVwIHRoZSBldmVudCBjb25zaXN0ZW50XG4gICAgICAgIHRoaXMub24oJyRjaGFuZ2U6Y2hlY2tlZEtleXMnLCAoYywgbmV3VmFsdWUsIG9sZFZhbHVlKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnRyaWdnZXIoJyRjaGFuZ2U6Y2hlY2tlZCcsIGMsIG5ld1ZhbHVlLCBvbGRWYWx1ZSk7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLm9uKCckY2hhbmdlOmNoZWNrZWRLZXknLCAoYywgbmV3VmFsdWUsIG9sZFZhbHVlKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnRyaWdnZXIoJyRjaGFuZ2U6Y2hlY2tlZCcsIGMsIFtuZXdWYWx1ZV0sIFtvbGRWYWx1ZV0pO1xuICAgICAgICB9KTtcbiAgICAgICAgLy8gY2FsY3VsYXRlIHBhZGRpbmcgb2YgaGVhZGVyIHdoZW4gc29tZSBwcm9wcyBoYXZlIGNoYW5nZWRcbiAgICAgICAgWydkYXRhJywgJ2ZpeEhlYWRlciddLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICAgICAgICB0aGlzLm9uKGAkY2hhbmdlZDoke2l0ZW19YCwgdGhpcy5fY2FsY0hlYWRlclBhZGRpbmcpO1xuICAgICAgICB9KTtcbiAgICAgICAgLy8gdXBkYXRlIGRpc2FibGVkIGFtb3VudCB3aGVuIHNvbWUgcHJvcHMgaGF2ZSBjaGFuZ2VkXG4gICAgICAgIFsnZGF0YScsICdkaXNhYmxlUm93J10uZm9yRWFjaChpdGVtID0+IHtcbiAgICAgICAgICAgIHRoaXMub24oYCRjaGFuZ2U6JHtpdGVtfWAsIHRoaXMuX3VwZGF0ZURpc2FibGVkQW1vdW50KTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuX3VwZGF0ZURpc2FibGVkQW1vdW50KCk7XG5cbiAgICAgICAgdGhpcy5fbW92ZSA9IHRoaXMuX21vdmUuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5fZHJhZ0VuZCA9IHRoaXMuX2RyYWdFbmQuYmluZCh0aGlzKTtcbiAgICB9XG5cbiAgICBfbW91bnQoKSB7XG4gICAgICAgIGlmIChzY3JvbGxCYXJXaWR0aCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBzY3JvbGxCYXJXaWR0aCA9IGdldFNjcm9sbGJhcldpZHRoKCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fY2FsY0hlYWRlclBhZGRpbmcoKTtcbiAgICB9XG5cbiAgICBpc0NoZWNrQWxsKCkge1xuICAgICAgICBjb25zdCBjaGVja2VkS2V5cyA9IHRoaXMuZ2V0KCdjaGVja2VkS2V5cycpO1xuICAgICAgICBjb25zdCBkYXRhTGVuZ3RoID0gdGhpcy5nZXQoJ2RhdGEnKS5sZW5ndGg7XG4gICAgICAgIGNvbnN0IGRpc2FibGVkQW1vdW50ID0gdGhpcy5nZXQoXCJfZGlzYWJsZWRBbW91bnRcIik7XG4gICAgICAgIGNvbnN0IGFtb3VudCA9IGRhdGFMZW5ndGggLSBkaXNhYmxlZEFtb3VudDtcbiAgICAgICAgcmV0dXJuIGFtb3VudCAmJiBjaGVja2VkS2V5cy5sZW5ndGggPT09IGFtb3VudDsgXG4gICAgfVxuXG4gICAgaXNDaGVja2VkKGtleSkge1xuICAgICAgICBjb25zdCB7Y2hlY2tUeXBlLCBjaGVja2VkS2V5LCBjaGVja2VkS2V5c30gPSB0aGlzLmdldCgpO1xuICAgICAgICBpZiAoY2hlY2tUeXBlID09PSAnY2hlY2tib3gnKSB7XG4gICAgICAgICAgICByZXR1cm4gfmNoZWNrZWRLZXlzLmluZGV4T2Yoa2V5KTtcbiAgICAgICAgfSBlbHNlIGlmIChjaGVja1R5cGUgPT09ICdyYWRpbycpIHtcbiAgICAgICAgICAgIHJldHVybiBjaGVja2VkS2V5ID09PSBrZXk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gICAgY2hlY2tBbGwoKSB7XG4gICAgICAgIGNvbnN0IHJvd0tleSA9IHRoaXMuZ2V0KCdyb3dLZXknKTtcbiAgICAgICAgY29uc3QgZGlzYWJsZVJvdyA9IHRoaXMuZ2V0KCdkaXNhYmxlUm93Jyk7XG4gICAgICAgIGNvbnN0IGNoZWNrZWRLZXlzID0gW107XG4gICAgICAgIHRoaXMuZ2V0KCdkYXRhJykuZm9yRWFjaCgodmFsdWUsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICBpZiAoIWRpc2FibGVSb3cuY2FsbCh0aGlzLCB2YWx1ZSwgaW5kZXgpKSB7XG4gICAgICAgICAgICAgICAgY2hlY2tlZEtleXMucHVzaChyb3dLZXkuY2FsbCh0aGlzLCB2YWx1ZSwgaW5kZXgpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuc2V0KCdjaGVja2VkS2V5cycsIGNoZWNrZWRLZXlzKTtcbiAgICB9XG5cbiAgICB1bmNoZWNrQWxsKCkge1xuICAgICAgICB0aGlzLnNldCgnY2hlY2tlZEtleXMnLCBbXSk7XG4gICAgfVxuXG4gICAgY2hlY2tSb3coa2V5KSB7XG4gICAgICAgIHRoaXMuX2NoZWNrVW5jaGVja1JvdyhrZXksIHRydWUsIGZhbHNlKTtcbiAgICB9XG5cbiAgICB1bmNoZWNrUm93KGtleSkge1xuICAgICAgICB0aGlzLl9jaGVja1VuY2hlY2tSb3coa2V5LCBmYWxzZSwgZmFsc2UpO1xuICAgIH1cblxuICAgIHNocmlua1JvdyhrZXkpIHtcbiAgICAgICAgdGhpcy5fZXhwYW5kU2hyaW5rUm93KGtleSwgZmFsc2UsIGZhbHNlKTtcbiAgICB9XG5cbiAgICBleHBhbmRSb3coa2V5KSB7XG4gICAgICAgIHRoaXMuX2V4cGFuZFNocmlua1JvdyhrZXksIHRydWUsIGZhbHNlKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAYnJpZWYgZ2V0IHRoZSBjaGVja2VkIGRhdGFcbiAgICAgKiBAcmV0dXJuIHtBcnJheX1cbiAgICAgKi9cbiAgICBnZXRDaGVja2VkRGF0YSgpIHtcbiAgICAgICAgY29uc3Qgcm93S2V5ID0gdGhpcy5nZXQoJ3Jvd0tleScpO1xuICAgICAgICBjb25zdCBjaGVja1R5cGUgPSB0aGlzLmdldCgnY2hlY2tUeXBlJyk7XG4gICAgICAgIGlmIChjaGVja1R5cGUgPT09ICdjaGVja2JveCcpIHtcbiAgICAgICAgICAgIGNvbnN0IGNoZWNrZWRLZXlzID0gdGhpcy5nZXQoJ2NoZWNrZWRLZXlzJyk7XG4gICAgICAgICAgICBjb25zdCBjaGVja2VkS2V5c01hcCA9IHt9O1xuICAgICAgICAgICAgY2hlY2tlZEtleXMuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgICAgICAgICAgIGNoZWNrZWRLZXlzTWFwW2l0ZW1dID0gdHJ1ZTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZ2V0KCdkYXRhJykuZmlsdGVyKCh2YWx1ZSwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBrZXkgPSByb3dLZXkuY2FsbCh0aGlzLCB2YWx1ZSwgaW5kZXgpO1xuICAgICAgICAgICAgICAgIHJldHVybiBjaGVja2VkS2V5c01hcFtrZXldO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSBpZiAoY2hlY2tUeXBlID09PSAncmFkaW8nKSB7XG4gICAgICAgICAgICBjb25zdCBjaGVja2VkS2V5ID0gdGhpcy5nZXQoJ2NoZWNrZWRLZXknKTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmdldCgnZGF0YScpLmZpbHRlcigodmFsdWUsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJvd0tleS5jYWxsKHRoaXMsIHZhbHVlLCBpbmRleCkgPT09IGNoZWNrZWRLZXk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBbXTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIF9jYWxjSGVhZGVyUGFkZGluZygpIHtcbiAgICAgICAgaWYgKHRoaXMuZ2V0KCdmaXhIZWFkZXInKSkge1xuICAgICAgICAgICAgY29uc3QgdGFibGVIZWlnaHQgPSB0aGlzLnRhYmxlLm9mZnNldEhlaWdodDtcbiAgICAgICAgICAgIGNvbnN0IGNvbnRhaW5lckhlaWdodCA9IHRoaXMuc2Nyb2xsLm9mZnNldEhlaWdodDtcbiAgICAgICAgICAgIGNvbnN0IGhlYWRlckhlaWdodCA9IHRoaXMuaGVhZGVyLm9mZnNldEhlaWdodDtcbiAgICAgICAgICAgIHRoaXMuc2V0KCdfcGFkZGluZycsIHRhYmxlSGVpZ2h0IC0gaGVhZGVySGVpZ2h0ID4gY29udGFpbmVySGVpZ2h0ID8gc2Nyb2xsQmFyV2lkdGggOiAwKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIF91cGRhdGVEaXNhYmxlZEFtb3VudCgpIHtcbiAgICAgICAgbGV0IGRpc2FibGVkQW1vdW50ID0gMDtcbiAgICAgICAgY29uc3QgZGlzYWJsZVJvdyA9IHRoaXMuZ2V0KCdkaXNhYmxlUm93Jyk7XG4gICAgICAgIHRoaXMuZ2V0KCdkYXRhJykuZm9yRWFjaCgoaXRlbSwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgIGlmIChkaXNhYmxlUm93LmNhbGwodGhpcywgaXRlbSwgaW5kZXgpKSB7XG4gICAgICAgICAgICAgICAgZGlzYWJsZWRBbW91bnQrKztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuc2V0KCdfZGlzYWJsZWRBbW91bnQnLCBkaXNhYmxlZEFtb3VudCk7XG4gICAgfVxuXG4gICAgX3RvZ2dsZUNoZWNrQWxsKGMsIGNoZWNrZWQpIHtcbiAgICAgICAgaWYgKGNoZWNrZWQpIHtcbiAgICAgICAgICAgIHRoaXMuY2hlY2tBbGwoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMudW5jaGVja0FsbCgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgX2NsaWNrUm93KHZhbHVlLCBpbmRleCwga2V5LCBlKSB7XG4gICAgICAgIC8vIGlmIGlzIGZyb20gY2hlY2tib3ggb3IgcmFkaW8gdGhlbiBkbyBub3RoaW5nXG4gICAgICAgIGlmIChlLnRhcmdldC50YWdOYW1lLnRvTG93ZXJDYXNlKCkgPT09ICdpbnB1dCcpIHJldHVybjtcbiAgICAgICAgaWYgKHRoaXMuZ2V0KCdkaXNhYmxlUm93JykuY2FsbCh0aGlzLCB2YWx1ZSwgaW5kZXgpKSByZXR1cm47XG5cbiAgICAgICAgaWYgKHRoaXMuZ2V0KCdyb3dDaGVja2FibGUnKSkge1xuICAgICAgICAgICAgdGhpcy5fY2hlY2tVbmNoZWNrUm93KGtleSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5nZXQoJ3Jvd0V4cGFuZGFibGUnKSkge1xuICAgICAgICAgICAgdGhpcy5fZXhwYW5kU2hyaW5rUm93KGtleSk7IFxuICAgICAgICB9XG4gICAgfVxuXG4gICAgX2NoZWNrVW5jaGVja1JvdyhrZXksIGlzQ2hlY2sgPSBmYWxzZSwgaXNUb2dnbGUgPSB0cnVlKSB7XG4gICAgICAgIGNvbnN0IGNoZWNrVHlwZSA9IHRoaXMuZ2V0KCdjaGVja1R5cGUnKTtcbiAgICAgICAgaWYgKGNoZWNrVHlwZSA9PT0gJ2NoZWNrYm94Jykge1xuICAgICAgICAgICAgY29uc3QgY2hlY2tlZEtleXMgPSB0aGlzLmdldCgnY2hlY2tlZEtleXMnKS5zbGljZSgwKTtcbiAgICAgICAgICAgIGNvbnN0IGkgPSBjaGVja2VkS2V5cy5pbmRleE9mKGtleSk7XG4gICAgICAgICAgICBpZiAoKCFpc0NoZWNrIHx8IGlzVG9nZ2xlKSAmJiBpID4gLTEpIHtcbiAgICAgICAgICAgICAgICBjaGVja2VkS2V5cy5zcGxpY2UoaSwgMSk7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXQoJ2NoZWNrZWRLZXlzJywgY2hlY2tlZEtleXMpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChpc0NoZWNrIHx8IGlzVG9nZ2xlKSB7XG4gICAgICAgICAgICAgICAgY2hlY2tlZEtleXMucHVzaChrZXkpO1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0KCdjaGVja2VkS2V5cycsIGNoZWNrZWRLZXlzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChjaGVja1R5cGUgPT09ICdyYWRpbycpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0KCdjaGVja2VkS2V5Jywga2V5KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIF9leHBhbmRTaHJpbmtSb3coa2V5LCBpc0V4cGFuZCA9IGZhbHNlLCBpc1RvZ2dsZSA9IHRydWUpIHtcbiAgICAgICAgaWYgKHR5cGVvZiB0aGlzLmdldCgnZXhwYW5kJykgIT09ICdmdW5jdGlvbicpIHJldHVybjtcblxuICAgICAgICBjb25zdCBleHBhbmRlZEtleXMgPSB0aGlzLmdldCgnZXhwYW5kZWRLZXlzJykuc2xpY2UoMCk7XG4gICAgICAgIGNvbnN0IGkgPSBleHBhbmRlZEtleXMuaW5kZXhPZihrZXkpO1xuICAgICAgICBpZiAoKCFpc0V4cGFuZCB8fCBpc1RvZ2dsZSkgJiYgaSA+IC0xKSB7XG4gICAgICAgICAgICBleHBhbmRlZEtleXMuc3BsaWNlKGksIDEpO1xuICAgICAgICAgICAgdGhpcy5zZXQoJ2V4cGFuZGVkS2V5cycsIGV4cGFuZGVkS2V5cyk7XG4gICAgICAgIH0gZWxzZSBpZiAoaXNFeHBhbmQgfHwgaXNUb2dnbGUpIHtcbiAgICAgICAgICAgIGV4cGFuZGVkS2V5cy5wdXNoKGtleSk7XG4gICAgICAgICAgICB0aGlzLnNldCgnZXhwYW5kZWRLZXlzJywgZXhwYW5kZWRLZXlzKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIF9zb3J0KGtleSwgdmFsdWUpIHtcbiAgICAgICAgY29uc3Qgc29ydCA9IE9iamVjdC5hc3NpZ24oe30sIHRoaXMuZ2V0KCdzb3J0JykpO1xuICAgICAgICBzb3J0LmtleSA9IGtleTtcbiAgICAgICAgc29ydC50eXBlID0gc29ydC50eXBlID09PSAnZGVzYycgPyAnYXNjJyA6ICdkZXNjJztcbiAgICAgICAgdGhpcy5zZXQoJ3NvcnQnLCBzb3J0KTtcbiAgICB9XG5cbiAgICBfZHJhZ1N0YXJ0KGUpIHtcbiAgICAgICAgLy8gbGVmdCBrZXlcbiAgICAgICAgaWYgKGUud2hpY2ggIT09IDEpIHJldHVybjtcblxuICAgICAgICB0aGlzLl9yZXNpemluZyA9IHRydWU7XG4gICAgICAgIHRoaXMuX2NvbnRhaW5lcldpZHRoID0gdGhpcy5lbGVtZW50Lm9mZnNldFdpZHRoO1xuICAgICAgICB0aGlzLl94ID0gZS5jbGllbnRYO1xuXG4gICAgICAgIGNvbnN0IGN1cnJlbnRUaCA9IGUudGFyZ2V0LnBhcmVudE5vZGU7XG4gICAgICAgIGNvbnN0IHByZXZUaCA9IGN1cnJlbnRUaC5wcmV2aW91c0VsZW1lbnRTaWJsaW5nO1xuXG4gICAgICAgIHRoaXMuX2N1cnJlbnRUaHMgPSBbY3VycmVudFRoXTtcbiAgICAgICAgdGhpcy5fcHJldlRocyA9IFtwcmV2VGhdO1xuICAgICAgICB0aGlzLl90YWJsZXMgPSBbdGhpcy50YWJsZV07XG5cbiAgICAgICAgaWYgKHRoaXMuZ2V0KCdmaXhIZWFkZXInKSkge1xuICAgICAgICAgICAgY29uc3QgdGhzID0gdGhpcy50YWJsZS5jaGlsZHJlblswXS5nZXRFbGVtZW50c0J5VGFnTmFtZSgndGgnKTtcbiAgICAgICAgICAgIGNvbnN0IGZpeFRocyA9IGN1cnJlbnRUaC5wYXJlbnROb2RlLmNoaWxkcmVuO1xuICAgICAgICAgICAgY29uc3QgaW5kZXggPSBzbGljZS5jYWxsKGZpeFRocykuaW5kZXhPZihjdXJyZW50VGgpO1xuICAgICAgICAgICAgdGhpcy5fY3VycmVudFRocy5wdXNoKHRoc1tpbmRleF0pO1xuICAgICAgICAgICAgdGhpcy5fcHJldlRocy5wdXNoKHRoc1tpbmRleCAtIDFdKTtcbiAgICAgICAgICAgIC8vIHRoaXMuX3RhYmxlcy5wdXNoKHRoaXMuaGVhZGVyLmNoaWxkcmVuWzBdKTtcbiAgICAgICAgICAgIC8vIGlmIGZpeEhlYWRlciB3ZSBzaG91bGQgY2hhbmdlIHRoZSB3aWR0aCBvZiBoZWFkZXIgYW5kIHNjcm9sbFxuICAgICAgICAgICAgdGhpcy5fdGFibGVzID0gW3RoaXMuaGVhZGVyLCB0aGlzLnNjcm9sbF07XG4gICAgICAgIH1cblxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCB0aGlzLl9tb3ZlKTtcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIHRoaXMuX2RyYWdFbmQpO1xuICAgIH1cblxuICAgIF9tb3ZlKGUpIHtcbiAgICAgICAgaWYgKHRoaXMuX3Jlc2l6aW5nKSB7XG4gICAgICAgICAgICBjb25zdCBkZWxYID0gZS5jbGllbnRYIC0gdGhpcy5feDtcbiAgICAgICAgICAgIGNvbnN0IHByZXZXaWR0aCA9IHRoaXMuX3ByZXZUaHNbMF0ub2Zmc2V0V2lkdGggKyBkZWxYO1xuICAgICAgICAgICAgY29uc3QgdGFibGVXaWR0aCA9IHRoaXMuX3RhYmxlc1swXS5vZmZzZXRXaWR0aCArIGRlbFg7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGlmIChwcmV2V2lkdGggPCBNSU5fV0lEVEgpIHJldHVybjtcblxuICAgICAgICAgICAgdGhpcy5fcHJldlRocy5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICAgICAgICAgIGl0ZW0uc3R5bGUud2lkdGggPSBwcmV2V2lkdGggKyAncHgnO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGlmICh0aGlzLl9jb250YWluZXJXaWR0aCA+PSB0YWJsZVdpZHRoKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fdGFibGVzLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGl0ZW0uc3R5bGUud2lkdGggPSAnMTAwJSc7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuX3RhYmxlcy5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICAgICAgICAgICAgICBpdGVtLnN0eWxlLndpZHRoID0gdGFibGVXaWR0aCArICdweCc7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMuX3ggPSBlLmNsaWVudFg7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBfZHJhZ0VuZChlKSB7XG4gICAgICAgIGlmICh0aGlzLl9yZXNpemluZykge1xuICAgICAgICAgICAgdGhpcy5fcmVzaXppbmcgPSBmYWxzZTtcbiAgICAgICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIHRoaXMuX21vdmUpO1xuICAgICAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIHRoaXMuX2RyYWdFbmQpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgX2Rlc3Ryb3koKSB7XG4gICAgICAgIHRoaXMuX2RyYWdFbmQoKTtcbiAgICB9XG59XG5cbmV4cG9ydCB7VGFibGUsIENvbHVtbiBhcyBUYWJsZUNvbHVtbn07XG5cbi8vIHJlZmVyZW5jZTogaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy8xMzM4MjUxNi9nZXR0aW5nLXNjcm9sbC1iYXItd2lkdGgtdXNpbmctamF2YXNjcmlwdFxuZnVuY3Rpb24gZ2V0U2Nyb2xsYmFyV2lkdGgoKSB7XG4gICAgdmFyIG91dGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBvdXRlci5zdHlsZS52aXNpYmlsaXR5ID0gXCJoaWRkZW5cIjtcbiAgICBvdXRlci5zdHlsZS53aWR0aCA9IFwiMTAwcHhcIjtcbiAgICBvdXRlci5zdHlsZS5tc092ZXJmbG93U3R5bGUgPSBcInNjcm9sbGJhclwiOyAvLyBuZWVkZWQgZm9yIFdpbkpTIGFwcHNcblxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQob3V0ZXIpO1xuXG4gICAgdmFyIHdpZHRoTm9TY3JvbGwgPSBvdXRlci5vZmZzZXRXaWR0aDtcbiAgICAvLyBmb3JjZSBzY3JvbGxiYXJzXG4gICAgb3V0ZXIuc3R5bGUub3ZlcmZsb3cgPSBcInNjcm9sbFwiO1xuXG4gICAgLy8gYWRkIGlubmVyZGl2XG4gICAgdmFyIGlubmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBpbm5lci5zdHlsZS53aWR0aCA9IFwiMTAwJVwiO1xuICAgIG91dGVyLmFwcGVuZENoaWxkKGlubmVyKTtcblxuICAgIHZhciB3aWR0aFdpdGhTY3JvbGwgPSBpbm5lci5vZmZzZXRXaWR0aDtcblxuICAgIC8vIHJlbW92ZSBkaXZzXG4gICAgb3V0ZXIucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChvdXRlcik7XG5cbiAgICByZXR1cm4gd2lkdGhOb1Njcm9sbCAtIHdpZHRoV2l0aFNjcm9sbDtcbn1cblxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy90YWJsZS9pbmRleC5qcyIsImltcG9ydCBDaGVja2JveCBmcm9tICcuLi9jaGVja2JveCc7aW1wb3J0IFJhZGlvIGZyb20gJy4uL3JhZGlvJztpbXBvcnQgUm93IGZyb20gJy4vcm93JztpbXBvcnQge25vcm1hbGl6ZX0gZnJvbSAnaW50YWN0JztpbXBvcnQgQ29sdW1uIGZyb20gJy4vY29sdW1uJztcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKG9iaiwgX1ZkdCwgYmxvY2tzLCAkY2FsbGVlKSB7XG5cbl9WZHQgfHwgKF9WZHQgPSBWZHQpO1xub2JqIHx8IChvYmogPSB7fSk7XG5ibG9ja3MgfHwgKGJsb2NrcyA9IHt9KTtcbnZhciBoID0gX1ZkdC5taXNzLmgsIGhjID0gX1ZkdC5taXNzLmhjLCBodSA9IF9WZHQubWlzcy5odSwgd2lkZ2V0cyA9IHRoaXMgJiYgdGhpcy53aWRnZXRzIHx8IHt9LCBfYmxvY2tzID0ge30sIF9fYmxvY2tzID0ge30sXG5fX3UgPSBfVmR0LnV0aWxzLCBleHRlbmQgPSBfX3UuZXh0ZW5kLCBfZSA9IF9fdS5lcnJvciwgX2NsYXNzTmFtZSA9IF9fdS5jbGFzc05hbWUsXG5fX28gPSBfX3UuT3B0aW9ucywgX2dldE1vZGVsID0gX19vLmdldE1vZGVsLCBfc2V0TW9kZWwgPSBfX28uc2V0TW9kZWwsXG5fc2V0Q2hlY2tib3hNb2RlbCA9IF9fdS5zZXRDaGVja2JveE1vZGVsLCBfZGV0ZWN0Q2hlY2tib3hDaGVja2VkID0gX191LmRldGVjdENoZWNrYm94Q2hlY2tlZCxcbl9zZXRTZWxlY3RNb2RlbCA9IF9fdS5zZXRTZWxlY3RNb2RlbCxcbnNlbGYgPSB0aGlzLmRhdGEsIHNjb3BlID0gb2JqLCBBbmltYXRlID0gc2VsZiAmJiBzZWxmLkFuaW1hdGUsIHBhcmVudCA9ICgkY2FsbGVlIHx8IHt9KS5fc3VwZXJcblxuXG5cblxuXG5cbmNvbnN0IHtcbiAgICBjaGVja1R5cGUsIHNjaGVtZSwgY2hlY2tlZEtleXMsIGRhdGEsIHJvd0tleSwgXG4gICAgY2xhc3NOYW1lLCBmaXhIZWFkZXIsIG5vRGF0YVRlbXBsYXRlLCBkaXNhYmxlUm93LFxuICAgIGdyb3VwcywgcmVzaXphYmxlLCBleHBhbmQsIGV4cGFuZGVkS2V5cywgdHlwZSxcbiAgICBzdHlsZSwgcm93Q2xhc3NOYW1lLCBjaGlsZHJlbiwgc29ydFxufSA9IHNlbGYuZ2V0KCk7XG5cbmxldCBjb2xTcGFuID0gY2hlY2tUeXBlID09PSAnY2hlY2tib3gnIHx8IGNoZWNrVHlwZSA9PT0gJ3JhZGlvJyA/IDEgOiAwO1xuY29uc3QgZXhwYW5kYWJsZSA9IHR5cGVvZiBleHBhbmQgPT09ICdmdW5jdGlvbic7XG5jb25zdCBfc2NoZW1lID0ge307XG5cbmNvbnN0IHRoZWFkQ3JlYXRvciA9ICgpID0+IGgoJ3RoZWFkJywgbnVsbCwgaCgndHInLCBudWxsLCBbZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW2NoZWNrVHlwZSA9PT0gJ2NoZWNrYm94JyBdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpID8gaCgndGgnLCBudWxsLCBoKENoZWNrYm94LCB7J3ZhbHVlJzogZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW3NlbGYuaXNDaGVja0FsbCgpIF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcyksICdldi0kY2hhbmdlOnZhbHVlJzogZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW3NlbGYuX3RvZ2dsZUNoZWNrQWxsIF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcyksICdjaGlsZHJlbic6IG51bGwsICdfY29udGV4dCc6IHRoaXN9KSwgJ2stdGgtY2hlY2snKSA6IGZ1bmN0aW9uKCkge3RyeSB7cmV0dXJuIFtjaGVja1R5cGUgPT09ICdyYWRpbycgXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKSA/IGgoJ3RoJywgbnVsbCwgbnVsbCwgJ2stdGgtY2hlY2snKSA6IHVuZGVmaW5lZCwgJ1xcbiAgICAgICAgJywgZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW19fdS5tYXAoc2NoZW1lLCAoaXRlbSwga2V5KSA9PiB7XG4gICAgICAgICAgICBjb2xTcGFuKys7XG5cbiAgICAgICAgICAgIGlmICghX191LmlzT2JqZWN0KGl0ZW0pKSB7XG4gICAgICAgICAgICAgICAgaXRlbSA9IHt0aXRsZTogaXRlbX07XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBoKENvbHVtbiwgey4uLmZ1bmN0aW9uKCkge3RyeSB7cmV0dXJuIFtpdGVtIF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcyksICdrZXknOiBmdW5jdGlvbigpIHt0cnkge3JldHVybiBba2V5IF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcyksICckcGFyZW50JzogZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW3NlbGYgXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKSwgJ2V2LWNsaWNrJzogZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW2l0ZW0uc29ydGFibGUgPyBzZWxmLl9zb3J0LmJpbmQoc2VsZiwga2V5LCBpdGVtKSA6IHVuZGVmaW5lZCBdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpLCAnZXYtZHJhZ1N0YXJ0JzogZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW3NlbGYuX2RyYWdTdGFydCBdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpLCAnY2hpbGRyZW4nOiBudWxsLCAnX2NvbnRleHQnOiB0aGlzfSlcbiAgICAgICAgfSkgXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKSwgJ1xcbiAgICAgICAgJywgZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gWy8vIGZvciB1c2luZyBUYWJsZUNvbHVtbiBhcyBjaGlsZHJlblxuICAgICAgICAgICAgX191Lm1hcChjaGlsZHJlbiA/IChBcnJheS5pc0FycmF5KGNoaWxkcmVuKSA/IGNoaWxkcmVuIDogW2NoaWxkcmVuXSkgOiBjaGlsZHJlbiwgdk5vZGUgPT4ge1xuICAgICAgICAgICAgICAgIGlmICh2Tm9kZS50YWcgPT09IENvbHVtbikge1xuICAgICAgICAgICAgICAgICAgICBjb2xTcGFuKys7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHByb3BzID0gey4uLnZOb2RlLnByb3BzLCAkcGFyZW50OiBzZWxmfTtcbiAgICAgICAgICAgICAgICAgICAgdk5vZGUucHJvcHMgPSBwcm9wcztcbiAgICAgICAgICAgICAgICAgICAgaWYgKHByb3BzLmtleSA9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBfZSgna2V5IGZvciBUYWJsZUNvbHVtbiBtdXN0IGJlIHNwZWNpZmllZC4nKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmICgvXlxcZCskLy50ZXN0KHByb3BzLmtleSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGF2b2lkIGRpZ2l0YWwga2V5XG4gICAgICAgICAgICAgICAgICAgICAgICBfZSgnZG9uXFwndCB1c2UgZGlnaXRzIGFzIGtleS4nKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBfc2NoZW1lW3Byb3BzLmtleV0gPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogcHJvcHMudGl0bGUsXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZW1wbGF0ZTogcHJvcHMudGVtcGxhdGUgfHwgcHJvcHMuZGVmYXVsdCxcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHZOb2RlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pIFxuICAgICAgICBdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpLCAnXFxuICAgICddKSlcblxuY29uc3QgdGhlYWQgPSB0aGVhZENyZWF0b3IoKTtcblxuY29uc3QgdGJvZHkgPSBoKCd0Ym9keScsIG51bGwsIFsnXFxuICAgICcsIGZ1bmN0aW9uKCkge3RyeSB7cmV0dXJuIFtkYXRhICYmIGRhdGEubGVuZ3RoID8gXG4gICAgICAgIF9fdS5tYXAoZGF0YSwgKHZhbHVlLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgY29uc3Qga2V5ID0gcm93S2V5LmNhbGwoc2VsZiwgdmFsdWUsIGluZGV4KTtcbiAgICAgICAgICAgIGNvbnN0IGRpc2FibGVkID0gZGlzYWJsZVJvdy5jYWxsKHNlbGYsIHZhbHVlLCBpbmRleCk7XG4gICAgICAgICAgICBjb25zdCBjbGFzc05hbWUgPSByb3dDbGFzc05hbWUuY2FsbChzZWxmLCB2YWx1ZSwgaW5kZXgpO1xuICAgICAgICAgICAgY29uc3QgdHIgPSBoKFJvdywgeydrZXknOiBmdW5jdGlvbigpIHt0cnkge3JldHVybiBba2V5IF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcyksICdldi1jbGljayc6IGZ1bmN0aW9uKCkge3RyeSB7cmV0dXJuIFtzZWxmLl9jbGlja1Jvdy5iaW5kKHNlbGYsIHZhbHVlLCBpbmRleCwga2V5KSBdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpLCAnY2xhc3NOYW1lJzogX2NsYXNzTmFtZShmdW5jdGlvbigpIHt0cnkge3JldHVybiBbe1xuICAgICAgICAgICAgICAgICAgICAnay1kaXNhYmxlZCc6IGRpc2FibGVkLFxuICAgICAgICAgICAgICAgICAgICBbY2xhc3NOYW1lXTogY2xhc3NOYW1lLFxuICAgICAgICAgICAgICAgICAgICAnay1jaGVja2VkJzogc2VsZi5pc0NoZWNrZWQoa2V5KSwgXG4gICAgICAgICAgICAgICAgfSBdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpKSwgJ2V2LSRkZXN0cm95ZWQnOiBmdW5jdGlvbigpIHt0cnkge3JldHVybiBbc2VsZi5zaHJpbmtSb3cuYmluZChzZWxmLCBrZXkpIF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcyksICdjaGlsZHJlbic6IFtmdW5jdGlvbigpIHt0cnkge3JldHVybiBbY2hlY2tUeXBlID09PSAnY2hlY2tib3gnIF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcykgPyBoKCd0ZCcsIG51bGwsIGgoQ2hlY2tib3gsIHsnbmFtZSc6ICdrLXRhYmxlLWNoZWNrYm94JywgJ3RydWVWYWx1ZSc6IGZ1bmN0aW9uKCkge3RyeSB7cmV0dXJuIFtrZXkgXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKSwgJ2Rpc2FibGVkJzogZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW2Rpc2FibGVkIF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcyksICdjaGlsZHJlbic6IG51bGwsICdfY29udGV4dCc6IHRoaXMsIHZhbHVlOiBfZ2V0TW9kZWwoc2VsZiwgJ2NoZWNrZWRLZXlzJyksICdldi0kY2hhbmdlOnZhbHVlJzogZnVuY3Rpb24oX19jLCBfX24pIHsgX3NldE1vZGVsKHNlbGYsICdjaGVja2VkS2V5cycsIF9fbikgfX0pKSA6IGZ1bmN0aW9uKCkge3RyeSB7cmV0dXJuIFtjaGVja1R5cGUgPT09ICdyYWRpbycgXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKSA/IGgoJ3RkJywgbnVsbCwgaChSYWRpbywgeyduYW1lJzogJ2stdGFibGUtcmFkaW8nLCAndHJ1ZVZhbHVlJzogZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW2tleSBdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpLCAnZGlzYWJsZWQnOiBmdW5jdGlvbigpIHt0cnkge3JldHVybiBbZGlzYWJsZWQgXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKSwgJ2NoaWxkcmVuJzogbnVsbCwgJ19jb250ZXh0JzogdGhpcywgdmFsdWU6IF9nZXRNb2RlbChzZWxmLCAnY2hlY2tlZEtleScpLCAnZXYtJGNoYW5nZTp2YWx1ZSc6IGZ1bmN0aW9uKF9fYywgX19uKSB7IF9zZXRNb2RlbChzZWxmLCAnY2hlY2tlZEtleScsIF9fbikgfX0pKSA6IHVuZGVmaW5lZCwgJ1xcbiAgICAgICAgICAgICAgICAnLCBmdW5jdGlvbigpIHt0cnkge3JldHVybiBbX191Lm1hcChfX3UuZXh0ZW5kKHt9LCBzY2hlbWUsIF9zY2hlbWUpLCAoaXRlbSwga2V5KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGxldCB0ZDtcbiAgICAgICAgICAgICAgICAgICAgaWYgKF9fdS5pc09iamVjdChpdGVtKSAmJiBpdGVtLnRlbXBsYXRlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGl0ZW0udGVtcGxhdGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZCA9IGl0ZW0udGVtcGxhdGUuY2FsbChzZWxmLCB2YWx1ZSwgaW5kZXgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGZvciBJbnRhY3QtVnVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG5vcm1hbGl6ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZCA9IG5vcm1hbGl6ZSh0ZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZCA9IGl0ZW0udGVtcGxhdGU7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodmFsdWVba2V5XSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZCA9IHZhbHVlW2tleV07XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgb2JqID0gdmFsdWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5cyA9IGtleS5zcGxpdCgnLicpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGkgPSAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgd2hpbGUgKG9iaiAhPSBudWxsICYmIGkgPCBrZXlzLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9iaiA9IG9ialtrZXlzW2krK11dO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgdGQgPSAoaSAmJiBpID09PSBrZXlzLmxlbmd0aCkgPyBvYmogOiBudWxsO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBoKCd0ZCcsIHsndGl0bGUnOiBmdW5jdGlvbigpIHt0cnkge3JldHVybiBbdHlwZW9mIHRkID09PSAnc3RyaW5nJyB8fCB0eXBlb2YgdGQgPT09ICdudW1iZXInID8gXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZCA6IHVuZGVmaW5lZCBcbiAgICAgICAgICAgICAgICAgICAgXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKX0sIGZ1bmN0aW9uKCkge3RyeSB7cmV0dXJuIFt0eXBlb2YgdGQgPT09ICdib29sZWFuJyA/IFN0cmluZyh0ZCkgOiB0ZCBdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpKVxuICAgICAgICAgICAgICAgIH0pIF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcyksICdcXG4gICAgICAgICAgICAnXSwgJ19jb250ZXh0JzogdGhpc30pO1xuXG4gICAgICAgICAgICBpZiAoZXhwYW5kYWJsZSAmJiBleHBhbmRlZEtleXMuaW5kZXhPZihrZXkpID4gLTEpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgICAgICAgICB0cixcbiAgICAgICAgICAgICAgICAgICAgaCgndHInLCBudWxsLCBoKCd0ZCcsIHsnY29sc3Bhbic6IGZ1bmN0aW9uKCkge3RyeSB7cmV0dXJuIFtjb2xTcGFuIF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcyl9LCBmdW5jdGlvbigpIHt0cnkge3JldHVybiBbZXhwYW5kLmNhbGwoc2VsZiwgdmFsdWUsIGluZGV4KSBdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpKSwgJ2stZXhwYW5kJywgZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW2Ake2tleX0uZXhwYW5kYCBdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpKVxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRyO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KSA6XG4gICAgICAgIGgoJ3RyJywgbnVsbCwgaCgndGQnLCB7J2NvbHNwYW4nOiBmdW5jdGlvbigpIHt0cnkge3JldHVybiBbY29sU3BhbiBdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpfSwgWydcXG4gICAgICAgICAgICAgICAgJywgZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW25vRGF0YVRlbXBsYXRlIF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcyksICdcXG4gICAgICAgICAgICAnXSwgJ2stbm8tZGF0YScpLCBudWxsLCAndGFibGVfbm9fZGF0YScpXG4gICAgXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKSwgJ1xcbiddKVxuXG5jb25zdCBjbGFzc05hbWVPYmogPSB7XG4gICAgJ2stdGFibGUtd3JhcHBlcic6IHRydWUsXG4gICAgW2NsYXNzTmFtZV06IGNsYXNzTmFtZSxcbiAgICBbYGstJHt0eXBlfWBdOiB0eXBlICE9PSAnZGVmYXVsdCcsXG59O1xuXG5jb25zdCB0YWJsZSA9IGgoJ3RhYmxlJywgbnVsbCwgWydcXG4gICAgJywgZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW3RoZWFkIF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcyksICdcXG4gICAgJywgZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW3Rib2R5IF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcyksICdcXG4nXSwgJ2stdGFibGUnLCBudWxsLCBmdW5jdGlvbigpIHt0cnkge3JldHVybiBbZG9tID0+IHNlbGYudGFibGUgPSBkb20gXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKSlcblxucmV0dXJuIGgoJ2RpdicsIHsnc3R5bGUnOiBmdW5jdGlvbigpIHt0cnkge3JldHVybiBbc3R5bGUgXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKX0sIFtmdW5jdGlvbigpIHt0cnkge3JldHVybiBbZml4SGVhZGVyIF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcykgPyBoKCdkaXYnLCB7J3N0eWxlJzogZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW3twYWRkaW5nUmlnaHQ6IHNlbGYuZ2V0KCdfcGFkZGluZycpICsgJ3B4J30gXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKX0sIGgoJ3RhYmxlJywgbnVsbCwgWydcXG4gICAgICAgICAgICAnLCBmdW5jdGlvbigpIHt0cnkge3JldHVybiBbdGhlYWRDcmVhdG9yKCkgXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKSwgJ1xcbiAgICAgICAgJ10sICdrLXRhYmxlJyksICdrLWZpeGVkJywgbnVsbCwgZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW2RvbSA9PiBzZWxmLmhlYWRlciA9IGRvbSBdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpKSA6IHVuZGVmaW5lZCwgJ1xcbiAgICAnLCBmdW5jdGlvbigpIHt0cnkge3JldHVybiBbZml4SGVhZGVyID8gXG4gICAgICAgIGgoJ2RpdicsIHsnc3R5bGUnOiBmdW5jdGlvbigpIHt0cnkge3JldHVybiBbdHlwZW9mIGZpeEhlYWRlciA9PT0gJ251bWJlcicgfHwgdHlwZW9mIGZpeEhlYWRlciA9PT0gJ3N0cmluZycgP1xuICAgICAgICAgICAgICAgIHttYXhIZWlnaHQ6IGAke2ZpeEhlYWRlcn1weGB9IDogdW5kZWZpbmVkXG4gICAgICAgICAgICBdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpfSwgZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW3RhYmxlIF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcyksICdrLXNjcm9sbCcsIG51bGwsIGZ1bmN0aW9uKCkge3RyeSB7cmV0dXJuIFtkb20gPT4gc2VsZi5zY3JvbGwgPSBkb20gXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKSkgOlxuICAgICAgICB0YWJsZVxuICAgIF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcyksICdcXG4nXSwgX2NsYXNzTmFtZShmdW5jdGlvbigpIHt0cnkge3JldHVybiBbY2xhc3NOYW1lT2JqIF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcykpKVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvdGFibGUvaW5kZXgudmR0IiwiaW1wb3J0IEludGFjdCBmcm9tICdpbnRhY3QnO1xuaW1wb3J0IHRlbXBsYXRlIGZyb20gJy4vcm93LnZkdCc7XG5cbi8vIGZvciB0ciAkZGVzdHJveWVkIGV2ZW50XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUYWJsZVJvdyBleHRlbmRzIEludGFjdCB7XG4gICAgZ2V0IHRlbXBsYXRlKCkgeyByZXR1cm4gdGVtcGxhdGU7IH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvdGFibGUvcm93LmpzIiwiXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihvYmosIF9WZHQsIGJsb2NrcywgJGNhbGxlZSkge1xuXG5fVmR0IHx8IChfVmR0ID0gVmR0KTtcbm9iaiB8fCAob2JqID0ge30pO1xuYmxvY2tzIHx8IChibG9ja3MgPSB7fSk7XG52YXIgaCA9IF9WZHQubWlzcy5oLCBoYyA9IF9WZHQubWlzcy5oYywgaHUgPSBfVmR0Lm1pc3MuaHUsIHdpZGdldHMgPSB0aGlzICYmIHRoaXMud2lkZ2V0cyB8fCB7fSwgX2Jsb2NrcyA9IHt9LCBfX2Jsb2NrcyA9IHt9LFxuX191ID0gX1ZkdC51dGlscywgZXh0ZW5kID0gX191LmV4dGVuZCwgX2UgPSBfX3UuZXJyb3IsIF9jbGFzc05hbWUgPSBfX3UuY2xhc3NOYW1lLFxuX19vID0gX191Lk9wdGlvbnMsIF9nZXRNb2RlbCA9IF9fby5nZXRNb2RlbCwgX3NldE1vZGVsID0gX19vLnNldE1vZGVsLFxuX3NldENoZWNrYm94TW9kZWwgPSBfX3Uuc2V0Q2hlY2tib3hNb2RlbCwgX2RldGVjdENoZWNrYm94Q2hlY2tlZCA9IF9fdS5kZXRlY3RDaGVja2JveENoZWNrZWQsXG5fc2V0U2VsZWN0TW9kZWwgPSBfX3Uuc2V0U2VsZWN0TW9kZWwsXG5zZWxmID0gdGhpcy5kYXRhLCBzY29wZSA9IG9iaiwgQW5pbWF0ZSA9IHNlbGYgJiYgc2VsZi5BbmltYXRlLCBwYXJlbnQgPSAoJGNhbGxlZSB8fCB7fSkuX3N1cGVyXG5yZXR1cm4gaCgndHInLCB7Li4uZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW3NlbGYuZ2V0KCkgXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKX0sIGZ1bmN0aW9uKCkge3RyeSB7cmV0dXJuIFtzZWxmLmdldCgnY2hpbGRyZW4nKSBdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpKVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvdGFibGUvcm93LnZkdCIsImV4cG9ydCB7ZGVmYXVsdCBhcyBkYXRhfSBmcm9tICcuL2luZGV4Lmpzb24nO1xuaW1wb3J0IEludGFjdCBmcm9tICdpbnRhY3QnO1xuaW1wb3J0IHRlbXBsYXRlIGZyb20gJy4vaW5kZXgudmR0JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBJbnRhY3Qge1xuICAgIEBJbnRhY3QudGVtcGxhdGUoKVxuICAgIHN0YXRpYyB0ZW1wbGF0ZSA9IHRlbXBsYXRlO1xufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NpdGUvY29tcG9uZW50cy90YWJsZS9kZW1vcy9iYXNpYy9pbmRleC5qcyIsImltcG9ydCBUYWJsZSBmcm9tICdrcGMvY29tcG9uZW50cy90YWJsZSc7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihvYmosIF9WZHQsIGJsb2NrcywgJGNhbGxlZSkge1xuXG5fVmR0IHx8IChfVmR0ID0gVmR0KTtcbm9iaiB8fCAob2JqID0ge30pO1xuYmxvY2tzIHx8IChibG9ja3MgPSB7fSk7XG52YXIgaCA9IF9WZHQubWlzcy5oLCBoYyA9IF9WZHQubWlzcy5oYywgaHUgPSBfVmR0Lm1pc3MuaHUsIHdpZGdldHMgPSB0aGlzICYmIHRoaXMud2lkZ2V0cyB8fCB7fSwgX2Jsb2NrcyA9IHt9LCBfX2Jsb2NrcyA9IHt9LFxuX191ID0gX1ZkdC51dGlscywgZXh0ZW5kID0gX191LmV4dGVuZCwgX2UgPSBfX3UuZXJyb3IsIF9jbGFzc05hbWUgPSBfX3UuY2xhc3NOYW1lLFxuX19vID0gX191Lk9wdGlvbnMsIF9nZXRNb2RlbCA9IF9fby5nZXRNb2RlbCwgX3NldE1vZGVsID0gX19vLnNldE1vZGVsLFxuX3NldENoZWNrYm94TW9kZWwgPSBfX3Uuc2V0Q2hlY2tib3hNb2RlbCwgX2RldGVjdENoZWNrYm94Q2hlY2tlZCA9IF9fdS5kZXRlY3RDaGVja2JveENoZWNrZWQsXG5fc2V0U2VsZWN0TW9kZWwgPSBfX3Uuc2V0U2VsZWN0TW9kZWwsXG5zZWxmID0gdGhpcy5kYXRhLCBzY29wZSA9IG9iaiwgQW5pbWF0ZSA9IHNlbGYgJiYgc2VsZi5BbmltYXRlLCBwYXJlbnQgPSAoJGNhbGxlZSB8fCB7fSkuX3N1cGVyXG5cbnZhciBzY2hlbWUgPSB7YTogJ+ihqOWktDEnLCBiOiAn6KGo5aS0Mid9O1xudmFyIGRhdGEgPSBbe2E6ICflk4jlk4gxJywgYjogJ+WTiOWTiDInfV07XG5cbnJldHVybiBoKCdkaXYnLCBudWxsLCBbaChUYWJsZSwgeydzY2hlbWUnOiBmdW5jdGlvbigpIHt0cnkge3JldHVybiBbc2NoZW1lXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKSwgJ2RhdGEnOiBmdW5jdGlvbigpIHt0cnkge3JldHVybiBbZGF0YTFdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpLCAnY2hpbGRyZW4nOiBudWxsLCAnX2NvbnRleHQnOiB0aGlzfSksIGgoVGFibGUsIHsnc2NoZW1lJzogZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW3NjaGVtZV1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcyksICdkYXRhJzogZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW2RhdGEyXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKSwgJ2ZpeEhlYWRlcic6IGZ1bmN0aW9uKCkge3RyeSB7cmV0dXJuIFt0cnVlXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKSwgJ2NoaWxkcmVuJzogbnVsbCwgJ19jb250ZXh0JzogdGhpc30pXSlcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zaXRlL2NvbXBvbmVudHMvdGFibGUvZGVtb3MvYmFzaWMvaW5kZXgudmR0Il0sInNvdXJjZVJvb3QiOiIifQ==