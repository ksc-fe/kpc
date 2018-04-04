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
  return h('div', null, h(_table2.default, { 'children': null, '_context': this }));
};

var _table = __webpack_require__("./components/table/index.js");

var _table2 = _interopRequireDefault(_table);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = exports['default'];

/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3RhYmxlL2NvbHVtbi5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3RhYmxlL2NvbHVtbi52ZHQiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy90YWJsZS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3RhYmxlL2luZGV4LnZkdCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3RhYmxlL3Jvdy5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3RhYmxlL3Jvdy52ZHQiLCJ3ZWJwYWNrOi8vLy4vc2l0ZS9jb21wb25lbnRzL3RhYmxlL2RlbW9zL2Jhc2ljL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NpdGUvY29tcG9uZW50cy90YWJsZS9kZW1vcy9iYXNpYy9pbmRleC52ZHQiXSwibmFtZXMiOlsiVGFibGVDb2x1bW4iLCJ0aXRsZSIsInRlbXBsYXRlIiwiZGF0YSIsImluZGV4Iiwia2V5Iiwic29ydGFibGUiLCJ3aWR0aCIsInVuZGVmaW5lZCIsImdyb3VwcyIsIiRwYXJlbnQiLCJlIiwidHJpZ2dlciIsIm9iaiIsIl9WZHQiLCJibG9ja3MiLCIkY2FsbGVlIiwiVmR0IiwiaCIsIm1pc3MiLCJoYyIsImh1Iiwid2lkZ2V0cyIsIl9ibG9ja3MiLCJfX2Jsb2NrcyIsIl9fdSIsInV0aWxzIiwiZXh0ZW5kIiwiX2UiLCJlcnJvciIsIl9jbGFzc05hbWUiLCJjbGFzc05hbWUiLCJfX28iLCJPcHRpb25zIiwiX2dldE1vZGVsIiwiZ2V0TW9kZWwiLCJfc2V0TW9kZWwiLCJzZXRNb2RlbCIsIl9zZXRDaGVja2JveE1vZGVsIiwic2V0Q2hlY2tib3hNb2RlbCIsIl9kZXRlY3RDaGVja2JveENoZWNrZWQiLCJkZXRlY3RDaGVja2JveENoZWNrZWQiLCJfc2V0U2VsZWN0TW9kZWwiLCJzZXRTZWxlY3RNb2RlbCIsInNlbGYiLCJzY29wZSIsIkFuaW1hdGUiLCJwYXJlbnQiLCJfc3VwZXIiLCJnZXQiLCJzb3J0IiwicmVzaXphYmxlIiwiY2FsbCIsIm9uQ2xpY2siLCJvbkRyYWdTdGFydCIsInR5cGUiLCJzY3JvbGxCYXJXaWR0aCIsIk1JTl9XSURUSCIsInNsaWNlIiwiQXJyYXkiLCJwcm90b3R5cGUiLCJUYWJsZSIsInNjaGVtZSIsImNoZWNrVHlwZSIsInJvd0tleSIsInZhbHVlIiwicm93Q2xhc3NOYW1lIiwiY2hlY2tlZEtleXMiLCJjaGVja2VkS2V5Iiwicm93Q2hlY2thYmxlIiwicm93RXhwYW5kYWJsZSIsIm5vRGF0YVRlbXBsYXRlIiwiZGlzYWJsZVJvdyIsImV4cGFuZCIsImV4cGFuZGVkS2V5cyIsImZpeEhlYWRlciIsIl9wYWRkaW5nIiwiX2Rpc2FibGVkQW1vdW50Iiwib24iLCJjIiwibmV3VmFsdWUiLCJvbGRWYWx1ZSIsImZvckVhY2giLCJpdGVtIiwiX2NhbGNIZWFkZXJQYWRkaW5nIiwiX3VwZGF0ZURpc2FibGVkQW1vdW50IiwiX21vdmUiLCJiaW5kIiwiX2RyYWdFbmQiLCJnZXRTY3JvbGxiYXJXaWR0aCIsImRhdGFMZW5ndGgiLCJsZW5ndGgiLCJkaXNhYmxlZEFtb3VudCIsImFtb3VudCIsImluZGV4T2YiLCJwdXNoIiwic2V0IiwiX2NoZWNrVW5jaGVja1JvdyIsIl9leHBhbmRTaHJpbmtSb3ciLCJjaGVja2VkS2V5c01hcCIsImZpbHRlciIsInRhYmxlSGVpZ2h0IiwidGFibGUiLCJvZmZzZXRIZWlnaHQiLCJjb250YWluZXJIZWlnaHQiLCJzY3JvbGwiLCJoZWFkZXJIZWlnaHQiLCJoZWFkZXIiLCJjaGVja2VkIiwiY2hlY2tBbGwiLCJ1bmNoZWNrQWxsIiwidGFyZ2V0IiwidGFnTmFtZSIsInRvTG93ZXJDYXNlIiwiaXNDaGVjayIsImlzVG9nZ2xlIiwiaSIsInNwbGljZSIsImlzRXhwYW5kIiwiT2JqZWN0IiwiYXNzaWduIiwid2hpY2giLCJfcmVzaXppbmciLCJfY29udGFpbmVyV2lkdGgiLCJlbGVtZW50Iiwib2Zmc2V0V2lkdGgiLCJfeCIsImNsaWVudFgiLCJjdXJyZW50VGgiLCJwYXJlbnROb2RlIiwicHJldlRoIiwicHJldmlvdXNFbGVtZW50U2libGluZyIsIl9jdXJyZW50VGhzIiwiX3ByZXZUaHMiLCJfdGFibGVzIiwidGhzIiwiY2hpbGRyZW4iLCJnZXRFbGVtZW50c0J5VGFnTmFtZSIsImZpeFRocyIsImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsImRlbFgiLCJwcmV2V2lkdGgiLCJ0YWJsZVdpZHRoIiwic3R5bGUiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwicHJvcFR5cGVzIiwiQm9vbGVhbiIsIm91dGVyIiwiY3JlYXRlRWxlbWVudCIsInZpc2liaWxpdHkiLCJtc092ZXJmbG93U3R5bGUiLCJib2R5IiwiYXBwZW5kQ2hpbGQiLCJ3aWR0aE5vU2Nyb2xsIiwib3ZlcmZsb3ciLCJpbm5lciIsIndpZHRoV2l0aFNjcm9sbCIsInJlbW92ZUNoaWxkIiwiY29sU3BhbiIsImV4cGFuZGFibGUiLCJfc2NoZW1lIiwidGhlYWRDcmVhdG9yIiwiaXNDaGVja0FsbCIsIl90b2dnbGVDaGVja0FsbCIsIm1hcCIsImlzT2JqZWN0IiwiX3NvcnQiLCJfZHJhZ1N0YXJ0IiwiaXNBcnJheSIsInZOb2RlIiwidGFnIiwicHJvcHMiLCJ0ZXN0IiwiZGVmYXVsdCIsInRoZWFkIiwidGJvZHkiLCJkaXNhYmxlZCIsInRyIiwiX2NsaWNrUm93IiwiaXNDaGVja2VkIiwic2hyaW5rUm93IiwiX19jIiwiX19uIiwidGQiLCJrZXlzIiwic3BsaXQiLCJTdHJpbmciLCJjbGFzc05hbWVPYmoiLCJkb20iLCJwYWRkaW5nUmlnaHQiLCJtYXhIZWlnaHQiLCJUYWJsZVJvdyIsImEiLCJiIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFFcUJBLFc7Ozs7Ozs7Ozs7O21DQUdOO0FBQ1AsbUJBQU87QUFDSEMsdUJBQU8sRUFESjtBQUVIQyx3QkFGRyxvQkFFTUMsSUFGTixFQUVZQyxLQUZaLEVBRW1CLENBQUcsQ0FGdEI7O0FB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a0IwQyxRQUFRaEMsR0FMMUI7QUFBQSxNQUsrQmlDLFVBQVVGLFFBQVFBLEtBQUtFLE9BTHREO0FBQUEsTUFLK0RDLFNBQVMsQ0FBQy9CLFdBQVcsRUFBWixFQUFnQmdDLE1BTHhGOztBQU9BLE1BQUljLFNBQVMsRUFBQ21JLEdBQUcsS0FBSixFQUFXQyxHQUFHLEtBQWQsRUFBYjtBQUNBLFNBQU9oTCxFQUFFLEtBQUYsRUFBUyxJQUFULEVBQWVBLG1CQUFTLEVBQUMsWUFBWSxJQUFiLEVBQW1CLFlBQVksSUFBL0IsRUFBVCxDQUFmLENBQVA7QUFDQyxDOztBQWZEIiwiZmlsZSI6InN0YXRpYy9jaHVuay9kYTc1YWE4YmMyOWY0ZjQ2NTUzMi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBJbnRhY3QgZnJvbSAnaW50YWN0JztcbmltcG9ydCB0ZW1wbGF0ZSBmcm9tICcuL2NvbHVtbi52ZHQnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUYWJsZUNvbHVtbiBleHRlbmRzIEludGFjdCB7XG4gICAgZ2V0IHRlbXBsYXRlKCkgeyByZXR1cm4gdGVtcGxhdGU7IH1cblxuICAgIGRlZmF1bHRzKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdGl0bGU6ICcnLFxuICAgICAgICAgICAgdGVtcGxhdGUoZGF0YSwgaW5kZXgpIHsgfSxcbiAgICAgICAgICAgIGtleTogJycsXG4gICAgICAgICAgICBzb3J0YWJsZTogZmFsc2UsXG4gICAgICAgICAgICB3aWR0aDogdW5kZWZpbmVkLFxuICAgICAgICAgICAgZ3JvdXBzOiB1bmRlZmluZWQsXG5cbiAgICAgICAgICAgIC8vIHBhc3NlZCBieSBwYXJlbnRcbiAgICAgICAgICAgICRwYXJlbnQ6IHVuZGVmaW5lZCxcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9uQ2xpY2soZSkge1xuICAgICAgICB0aGlzLnRyaWdnZXIoJ2NsaWNrJywgZSk7XG4gICAgfVxuXG4gICAgb25EcmFnU3RhcnQoZSkge1xuICAgICAgICB0aGlzLnRyaWdnZXIoJ2RyYWdTdGFydCcsIGUpO1xuICAgIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvdGFibGUvY29sdW1uLmpzIiwiXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihvYmosIF9WZHQsIGJsb2NrcywgJGNhbGxlZSkge1xuXG5fVmR0IHx8IChfVmR0ID0gVmR0KTtcbm9iaiB8fCAob2JqID0ge30pO1xuYmxvY2tzIHx8IChibG9ja3MgPSB7fSk7XG52YXIgaCA9IF9WZHQubWlzcy5oLCBoYyA9IF9WZHQubWlzcy5oYywgaHUgPSBfVmR0Lm1pc3MuaHUsIHdpZGdldHMgPSB0aGlzICYmIHRoaXMud2lkZ2V0cyB8fCB7fSwgX2Jsb2NrcyA9IHt9LCBfX2Jsb2NrcyA9IHt9LFxuX191ID0gX1ZkdC51dGlscywgZXh0ZW5kID0gX191LmV4dGVuZCwgX2UgPSBfX3UuZXJyb3IsIF9jbGFzc05hbWUgPSBfX3UuY2xhc3NOYW1lLFxuX19vID0gX191Lk9wdGlvbnMsIF9nZXRNb2RlbCA9IF9fby5nZXRNb2RlbCwgX3NldE1vZGVsID0gX19vLnNldE1vZGVsLFxuX3NldENoZWNrYm94TW9kZWwgPSBfX3Uuc2V0Q2hlY2tib3hNb2RlbCwgX2RldGVjdENoZWNrYm94Q2hlY2tlZCA9IF9fdS5kZXRlY3RDaGVja2JveENoZWNrZWQsXG5fc2V0U2VsZWN0TW9kZWwgPSBfX3Uuc2V0U2VsZWN0TW9kZWwsXG5zZWxmID0gdGhpcy5kYXRhLCBzY29wZSA9IG9iaiwgQW5pbWF0ZSA9IHNlbGYgJiYgc2VsZi5BbmltYXRlLCBwYXJlbnQgPSAoJGNhbGxlZSB8fCB7fSkuX3N1cGVyXG5jb25zdCB7XG4gICAgd2lkdGgsIHRpdGxlLCBrZXksIFxuICAgIHNvcnRhYmxlLCBncm91cHMsICRwYXJlbnRcbn0gPSBzZWxmLmdldCgpO1xuY29uc3Qge3NvcnQsIHJlc2l6YWJsZX0gPSAkcGFyZW50LmdldCgpO1xuXG5yZXR1cm4gaCgndGgnLCB7J3dpZHRoJzogZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW3dpZHRoIF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcyksICd0aXRsZSc6IGZ1bmN0aW9uKCkge3RyeSB7cmV0dXJuIFt0aXRsZSBdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpLCAnZXYtY2xpY2snOiBmdW5jdGlvbigpIHt0cnkge3JldHVybiBbc2VsZi5vbkNsaWNrIF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcyl9LCBbZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW3Jlc2l6YWJsZSBdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpID8gaCgnZGl2Jywgeydldi1tb3VzZWRvd24nOiBmdW5jdGlvbigpIHt0cnkge3JldHVybiBbc2VsZi5vbkRyYWdTdGFydCBdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpfSwgbnVsbCwgJ2stcmVzaXplJykgOiB1bmRlZmluZWQsIGgoJ2RpdicsIG51bGwsIFtmdW5jdGlvbigpIHt0cnkge3JldHVybiBbIWdyb3VwcyBdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpID8gaCgnZGl2JywgbnVsbCwgZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW3RpdGxlIF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcyksICdjLWVsbGlwc2lzJykgOiB1bmRlZmluZWQsICdcXG4gICAgICAgICcsIGZ1bmN0aW9uKCkge3RyeSB7cmV0dXJuIFtkbyB7XG4gICAgICAgICAgICBpZiAoc29ydGFibGUpIHtcbiAgICAgICAgICAgICAgICBjb25zdCB0eXBlID0ga2V5ID09PSBzb3J0LmtleSA/IHNvcnQudHlwZSA6ICcnO1xuICAgICAgICAgICAgICAgIGgoJ2RpdicsIG51bGwsIGgoJ2knLCBudWxsLCBudWxsLCBfY2xhc3NOYW1lKGZ1bmN0aW9uKCkge3RyeSB7cmV0dXJuIFt7XG4gICAgICAgICAgICAgICAgICAgICAgICAnay1pY29uJzogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFtgaWNvbi0ke3R5cGV9YF06IHR5cGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAnaWNvbi1zb3J0YWJsZSc6ICF0eXBlLFxuICAgICAgICAgICAgICAgICAgICB9IF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcykpKSwgX2NsYXNzTmFtZShmdW5jdGlvbigpIHt0cnkge3JldHVybiBbeydrLXNvcnQnOiB0cnVlLCBbYGstJHt0eXBlfWBdOiB0eXBlfSBdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpKSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpLCAnXFxuICAgICddLCAnay10aCcpXSwgX2NsYXNzTmFtZShmdW5jdGlvbigpIHt0cnkge3JldHVybiBbeydrLXNvcnRhYmxlJzogc29ydGFibGV9IF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcykpKVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvdGFibGUvY29sdW1uLnZkdCIsImltcG9ydCBJbnRhY3QgZnJvbSAnaW50YWN0JztcbmltcG9ydCB0ZW1wbGF0ZSBmcm9tICcuL2luZGV4LnZkdCc7XG5pbXBvcnQgJy4vaW5kZXguc3R5bCc7XG5pbXBvcnQgQ29sdW1uIGZyb20gJy4vY29sdW1uJztcblxubGV0IHNjcm9sbEJhcldpZHRoID0gdW5kZWZpbmVkO1xuXG5jb25zdCBNSU5fV0lEVEggPSA0MDtcbmNvbnN0IHNsaWNlID0gQXJyYXkucHJvdG90eXBlLnNsaWNlO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRhYmxlIGV4dGVuZHMgSW50YWN0IHtcbiAgICBASW50YWN0LnRlbXBsYXRlKClcbiAgICBnZXQgdGVtcGxhdGUoKSB7IHJldHVybiB0ZW1wbGF0ZTsgfVxuXG4gICAgZGVmYXVsdHMoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBkYXRhOiBbXSxcbiAgICAgICAgICAgIHNjaGVtZToge30sXG4gICAgICAgICAgICBjaGVja1R5cGU6ICdjaGVja2JveCcsIC8vIHJhZGlvIHwgbm9uZSBcbiAgICAgICAgICAgIHJvd0tleSh2YWx1ZSwgaW5kZXgpIHsgcmV0dXJuIGluZGV4OyB9LFxuICAgICAgICAgICAgcm93Q2xhc3NOYW1lKHZhbHVlLCBpbmRleCkgeyAgfSwgLy8gYWRkIGNsYXNzTmFtZSBmb3IgdHJcbiAgICAgICAgICAgIGNoZWNrZWRLZXlzOiBbXSwgLy8gZm9yIGNoZWNrYm94XG4gICAgICAgICAgICBjaGVja2VkS2V5OiB1bmRlZmluZWQsIC8vIGZvciByYWRpb1xuICAgICAgICAgICAgcm93Q2hlY2thYmxlOiB0cnVlLCAvLyBjbGljayByb3cgdG8gY2hlY2tcbiAgICAgICAgICAgIHJvd0V4cGFuZGFibGU6IHRydWUsIC8vIGNsaWNrIHJvdyB0byBleHBhbmRcbiAgICAgICAgICAgIG5vRGF0YVRlbXBsYXRlOiAnLyjjhJJv44SSKS9+fiDmsqHmnInmib7liLDkurLopoHnmoTmlbDmja7lk6Z+JyxcbiAgICAgICAgICAgIGRpc2FibGVSb3coZGF0YSwgaW5kZXgpIHsgcmV0dXJuIGZhbHNlIH0sXG4gICAgICAgICAgICBzb3J0OiB7fSxcbiAgICAgICAgICAgIGdyb3Vwczoge30sXG4gICAgICAgICAgICByZXNpemFibGU6IGZhbHNlLFxuICAgICAgICAgICAgZXhwYW5kOiB1bmRlZmluZWQsIC8vIGV4cGFuZCB0ZW1wbGF0ZSBjYWxsYmFja1xuICAgICAgICAgICAgZXhwYW5kZWRLZXlzOiBbXSwgXG4gICAgICAgICAgICB0eXBlOiAnZGVmYXVsdCcsIC8vIGRlZmF1bHQgYm9yZGVyXG4gICAgICAgICAgICBmaXhIZWFkZXI6IGZhbHNlLFxuXG4gICAgICAgICAgICBfcGFkZGluZzogMCxcbiAgICAgICAgICAgIF9kaXNhYmxlZEFtb3VudDogMCxcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgICAgIHJvd0NoZWNrYWJsZTogQm9vbGVhbixcbiAgICAgICAgcm93RXhwYW5kYWJsZTogQm9vbGVhbixcbiAgICAgICAgcmVzaXphYmxlOiBCb29sZWFuLFxuICAgICAgICBmaXhIZWFkZXI6IEJvb2xlYW4sXG4gICAgfVxuXG4gICAgX2luaXQoKSB7XG4gICAgICAgIC8vIGtlZXAgdGhlIGV2ZW50IGNvbnNpc3RlbnRcbiAgICAgICAgdGhpcy5vbignJGNoYW5nZTpjaGVja2VkS2V5cycsIChjLCBuZXdWYWx1ZSwgb2xkVmFsdWUpID0+IHtcbiAgICAgICAgICAgIHRoaXMudHJpZ2dlcignJGNoYW5nZTpjaGVja2VkJywgYywgbmV3VmFsdWUsIG9sZFZhbHVlKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMub24oJyRjaGFuZ2U6Y2hlY2tlZEtleScsIChjLCBuZXdWYWx1ZSwgb2xkVmFsdWUpID0+IHtcbiAgICAgICAgICAgIHRoaXMudHJpZ2dlcignJGNoYW5nZTpjaGVja2VkJywgYywgW25ld1ZhbHVlXSwgW29sZFZhbHVlXSk7XG4gICAgICAgIH0pO1xuICAgICAgICAvLyBjYWxjdWxhdGUgcGFkZGluZyBvZiBoZWFkZXIgd2hlbiBzb21lIHByb3BzIGhhdmUgY2hhbmdlZFxuICAgICAgICBbJ2RhdGEnLCAnZml4SGVhZGVyJ10uZm9yRWFjaChpdGVtID0+IHtcbiAgICAgICAgICAgIHRoaXMub24oYCRjaGFuZ2VkOiR7aXRlbX1gLCB0aGlzLl9jYWxjSGVhZGVyUGFkZGluZyk7XG4gICAgICAgIH0pO1xuICAgICAgICAvLyB1cGRhdGUgZGlzYWJsZWQgYW1vdW50IHdoZW4gc29tZSBwcm9wcyBoYXZlIGNoYW5nZWRcbiAgICAgICAgWydkYXRhJywgJ2Rpc2FibGVSb3cnXS5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICAgICAgdGhpcy5vbihgJGNoYW5nZToke2l0ZW19YCwgdGhpcy5fdXBkYXRlRGlzYWJsZWRBbW91bnQpO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5fdXBkYXRlRGlzYWJsZWRBbW91bnQoKTtcblxuICAgICAgICB0aGlzLl9tb3ZlID0gdGhpcy5fbW92ZS5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLl9kcmFnRW5kID0gdGhpcy5fZHJhZ0VuZC5iaW5kKHRoaXMpO1xuICAgIH1cblxuICAgIF9tb3VudCgpIHtcbiAgICAgICAgaWYgKHNjcm9sbEJhcldpZHRoID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHNjcm9sbEJhcldpZHRoID0gZ2V0U2Nyb2xsYmFyV2lkdGgoKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9jYWxjSGVhZGVyUGFkZGluZygpO1xuICAgIH1cblxuICAgIGlzQ2hlY2tBbGwoKSB7XG4gICAgICAgIGNvbnN0IGNoZWNrZWRLZXlzID0gdGhpcy5nZXQoJ2NoZWNrZWRLZXlzJyk7XG4gICAgICAgIGNvbnN0IGRhdGFMZW5ndGggPSB0aGlzLmdldCgnZGF0YScpLmxlbmd0aDtcbiAgICAgICAgY29uc3QgZGlzYWJsZWRBbW91bnQgPSB0aGlzLmdldChcIl9kaXNhYmxlZEFtb3VudFwiKTtcbiAgICAgICAgY29uc3QgYW1vdW50ID0gZGF0YUxlbmd0aCAtIGRpc2FibGVkQW1vdW50O1xuICAgICAgICByZXR1cm4gYW1vdW50ICYmIGNoZWNrZWRLZXlzLmxlbmd0aCA9PT0gYW1vdW50OyBcbiAgICB9XG5cbiAgICBpc0NoZWNrZWQoa2V5KSB7XG4gICAgICAgIGNvbnN0IHtjaGVja1R5cGUsIGNoZWNrZWRLZXksIGNoZWNrZWRLZXlzfSA9IHRoaXMuZ2V0KCk7XG4gICAgICAgIGlmIChjaGVja1R5cGUgPT09ICdjaGVja2JveCcpIHtcbiAgICAgICAgICAgIHJldHVybiB+Y2hlY2tlZEtleXMuaW5kZXhPZihrZXkpO1xuICAgICAgICB9IGVsc2UgaWYgKGNoZWNrVHlwZSA9PT0gJ3JhZGlvJykge1xuICAgICAgICAgICAgcmV0dXJuIGNoZWNrZWRLZXkgPT09IGtleTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICBjaGVja0FsbCgpIHtcbiAgICAgICAgY29uc3Qgcm93S2V5ID0gdGhpcy5nZXQoJ3Jvd0tleScpO1xuICAgICAgICBjb25zdCBkaXNhYmxlUm93ID0gdGhpcy5nZXQoJ2Rpc2FibGVSb3cnKTtcbiAgICAgICAgY29uc3QgY2hlY2tlZEtleXMgPSBbXTtcbiAgICAgICAgdGhpcy5nZXQoJ2RhdGEnKS5mb3JFYWNoKCh2YWx1ZSwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgIGlmICghZGlzYWJsZVJvdy5jYWxsKHRoaXMsIHZhbHVlLCBpbmRleCkpIHtcbiAgICAgICAgICAgICAgICBjaGVja2VkS2V5cy5wdXNoKHJvd0tleS5jYWxsKHRoaXMsIHZhbHVlLCBpbmRleCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5zZXQoJ2NoZWNrZWRLZXlzJywgY2hlY2tlZEtleXMpO1xuICAgIH1cblxuICAgIHVuY2hlY2tBbGwoKSB7XG4gICAgICAgIHRoaXMuc2V0KCdjaGVja2VkS2V5cycsIFtdKTtcbiAgICB9XG5cbiAgICBjaGVja1JvdyhrZXkpIHtcbiAgICAgICAgdGhpcy5fY2hlY2tVbmNoZWNrUm93KGtleSwgdHJ1ZSwgZmFsc2UpO1xuICAgIH1cblxuICAgIHVuY2hlY2tSb3coa2V5KSB7XG4gICAgICAgIHRoaXMuX2NoZWNrVW5jaGVja1JvdyhrZXksIGZhbHNlLCBmYWxzZSk7XG4gICAgfVxuXG4gICAgc2hyaW5rUm93KGtleSkge1xuICAgICAgICB0aGlzLl9leHBhbmRTaHJpbmtSb3coa2V5LCBmYWxzZSwgZmFsc2UpO1xuICAgIH1cblxuICAgIGV4cGFuZFJvdyhrZXkpIHtcbiAgICAgICAgdGhpcy5fZXhwYW5kU2hyaW5rUm93KGtleSwgdHJ1ZSwgZmFsc2UpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBicmllZiBnZXQgdGhlIGNoZWNrZWQgZGF0YVxuICAgICAqIEByZXR1cm4ge0FycmF5fVxuICAgICAqL1xuICAgIGdldENoZWNrZWREYXRhKCkge1xuICAgICAgICBjb25zdCByb3dLZXkgPSB0aGlzLmdldCgncm93S2V5Jyk7XG4gICAgICAgIGNvbnN0IGNoZWNrVHlwZSA9IHRoaXMuZ2V0KCdjaGVja1R5cGUnKTtcbiAgICAgICAgaWYgKGNoZWNrVHlwZSA9PT0gJ2NoZWNrYm94Jykge1xuICAgICAgICAgICAgY29uc3QgY2hlY2tlZEtleXMgPSB0aGlzLmdldCgnY2hlY2tlZEtleXMnKTtcbiAgICAgICAgICAgIGNvbnN0IGNoZWNrZWRLZXlzTWFwID0ge307XG4gICAgICAgICAgICBjaGVja2VkS2V5cy5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICAgICAgICAgICAgY2hlY2tlZEtleXNNYXBbaXRlbV0gPSB0cnVlO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5nZXQoJ2RhdGEnKS5maWx0ZXIoKHZhbHVlLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGtleSA9IHJvd0tleS5jYWxsKHRoaXMsIHZhbHVlLCBpbmRleCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGNoZWNrZWRLZXlzTWFwW2tleV07XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIGlmIChjaGVja1R5cGUgPT09ICdyYWRpbycpIHtcbiAgICAgICAgICAgIGNvbnN0IGNoZWNrZWRLZXkgPSB0aGlzLmdldCgnY2hlY2tlZEtleScpO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZ2V0KCdkYXRhJykuZmlsdGVyKCh2YWx1ZSwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcm93S2V5LmNhbGwodGhpcywgdmFsdWUsIGluZGV4KSA9PT0gY2hlY2tlZEtleTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIFtdO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgX2NhbGNIZWFkZXJQYWRkaW5nKCkge1xuICAgICAgICBpZiAodGhpcy5nZXQoJ2ZpeEhlYWRlcicpKSB7XG4gICAgICAgICAgICBjb25zdCB0YWJsZUhlaWdodCA9IHRoaXMudGFibGUub2Zmc2V0SGVpZ2h0O1xuICAgICAgICAgICAgY29uc3QgY29udGFpbmVySGVpZ2h0ID0gdGhpcy5zY3JvbGwub2Zmc2V0SGVpZ2h0O1xuICAgICAgICAgICAgY29uc3QgaGVhZGVySGVpZ2h0ID0gdGhpcy5oZWFkZXIub2Zmc2V0SGVpZ2h0O1xuICAgICAgICAgICAgdGhpcy5zZXQoJ19wYWRkaW5nJywgdGFibGVIZWlnaHQgLSBoZWFkZXJIZWlnaHQgPiBjb250YWluZXJIZWlnaHQgPyBzY3JvbGxCYXJXaWR0aCA6IDApO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgX3VwZGF0ZURpc2FibGVkQW1vdW50KCkge1xuICAgICAgICBsZXQgZGlzYWJsZWRBbW91bnQgPSAwO1xuICAgICAgICBjb25zdCBkaXNhYmxlUm93ID0gdGhpcy5nZXQoJ2Rpc2FibGVSb3cnKTtcbiAgICAgICAgdGhpcy5nZXQoJ2RhdGEnKS5mb3JFYWNoKChpdGVtLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgaWYgKGRpc2FibGVSb3cuY2FsbCh0aGlzLCBpdGVtLCBpbmRleCkpIHtcbiAgICAgICAgICAgICAgICBkaXNhYmxlZEFtb3VudCsrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5zZXQoJ19kaXNhYmxlZEFtb3VudCcsIGRpc2FibGVkQW1vdW50KTtcbiAgICB9XG5cbiAgICBfdG9nZ2xlQ2hlY2tBbGwoYywgY2hlY2tlZCkge1xuICAgICAgICBpZiAoY2hlY2tlZCkge1xuICAgICAgICAgICAgdGhpcy5jaGVja0FsbCgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy51bmNoZWNrQWxsKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBfY2xpY2tSb3codmFsdWUsIGluZGV4LCBrZXksIGUpIHtcbiAgICAgICAgLy8gaWYgaXMgZnJvbSBjaGVja2JveCBvciByYWRpbyB0aGVuIGRvIG5vdGhpbmdcbiAgICAgICAgaWYgKGUudGFyZ2V0LnRhZ05hbWUudG9Mb3dlckNhc2UoKSA9PT0gJ2lucHV0JykgcmV0dXJuO1xuICAgICAgICBpZiAodGhpcy5nZXQoJ2Rpc2FibGVSb3cnKS5jYWxsKHRoaXMsIHZhbHVlLCBpbmRleCkpIHJldHVybjtcblxuICAgICAgICBpZiAodGhpcy5nZXQoJ3Jvd0NoZWNrYWJsZScpKSB7XG4gICAgICAgICAgICB0aGlzLl9jaGVja1VuY2hlY2tSb3coa2V5KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLmdldCgncm93RXhwYW5kYWJsZScpKSB7XG4gICAgICAgICAgICB0aGlzLl9leHBhbmRTaHJpbmtSb3coa2V5KTsgXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBfY2hlY2tVbmNoZWNrUm93KGtleSwgaXNDaGVjayA9IGZhbHNlLCBpc1RvZ2dsZSA9IHRydWUpIHtcbiAgICAgICAgY29uc3QgY2hlY2tUeXBlID0gdGhpcy5nZXQoJ2NoZWNrVHlwZScpO1xuICAgICAgICBpZiAoY2hlY2tUeXBlID09PSAnY2hlY2tib3gnKSB7XG4gICAgICAgICAgICBjb25zdCBjaGVja2VkS2V5cyA9IHRoaXMuZ2V0KCdjaGVja2VkS2V5cycpLnNsaWNlKDApO1xuICAgICAgICAgICAgY29uc3QgaSA9IGNoZWNrZWRLZXlzLmluZGV4T2Yoa2V5KTtcbiAgICAgICAgICAgIGlmICgoIWlzQ2hlY2sgfHwgaXNUb2dnbGUpICYmIGkgPiAtMSkge1xuICAgICAgICAgICAgICAgIGNoZWNrZWRLZXlzLnNwbGljZShpLCAxKTtcbiAgICAgICAgICAgICAgICB0aGlzLnNldCgnY2hlY2tlZEtleXMnLCBjaGVja2VkS2V5cyk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGlzQ2hlY2sgfHwgaXNUb2dnbGUpIHtcbiAgICAgICAgICAgICAgICBjaGVja2VkS2V5cy5wdXNoKGtleSk7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXQoJ2NoZWNrZWRLZXlzJywgY2hlY2tlZEtleXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKGNoZWNrVHlwZSA9PT0gJ3JhZGlvJykge1xuICAgICAgICAgICAgdGhpcy5zZXQoJ2NoZWNrZWRLZXknLCBrZXkpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgX2V4cGFuZFNocmlua1JvdyhrZXksIGlzRXhwYW5kID0gZmFsc2UsIGlzVG9nZ2xlID0gdHJ1ZSkge1xuICAgICAgICBpZiAodHlwZW9mIHRoaXMuZ2V0KCdleHBhbmQnKSAhPT0gJ2Z1bmN0aW9uJykgcmV0dXJuO1xuXG4gICAgICAgIGNvbnN0IGV4cGFuZGVkS2V5cyA9IHRoaXMuZ2V0KCdleHBhbmRlZEtleXMnKS5zbGljZSgwKTtcbiAgICAgICAgY29uc3QgaSA9IGV4cGFuZGVkS2V5cy5pbmRleE9mKGtleSk7XG4gICAgICAgIGlmICgoIWlzRXhwYW5kIHx8IGlzVG9nZ2xlKSAmJiBpID4gLTEpIHtcbiAgICAgICAgICAgIGV4cGFuZGVkS2V5cy5zcGxpY2UoaSwgMSk7XG4gICAgICAgICAgICB0aGlzLnNldCgnZXhwYW5kZWRLZXlzJywgZXhwYW5kZWRLZXlzKTtcbiAgICAgICAgfSBlbHNlIGlmIChpc0V4cGFuZCB8fCBpc1RvZ2dsZSkge1xuICAgICAgICAgICAgZXhwYW5kZWRLZXlzLnB1c2goa2V5KTtcbiAgICAgICAgICAgIHRoaXMuc2V0KCdleHBhbmRlZEtleXMnLCBleHBhbmRlZEtleXMpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgX3NvcnQoa2V5LCB2YWx1ZSkge1xuICAgICAgICBjb25zdCBzb3J0ID0gT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5nZXQoJ3NvcnQnKSk7XG4gICAgICAgIHNvcnQua2V5ID0ga2V5O1xuICAgICAgICBzb3J0LnR5cGUgPSBzb3J0LnR5cGUgPT09ICdkZXNjJyA/ICdhc2MnIDogJ2Rlc2MnO1xuICAgICAgICB0aGlzLnNldCgnc29ydCcsIHNvcnQpO1xuICAgIH1cblxuICAgIF9kcmFnU3RhcnQoZSkge1xuICAgICAgICAvLyBsZWZ0IGtleVxuICAgICAgICBpZiAoZS53aGljaCAhPT0gMSkgcmV0dXJuO1xuXG4gICAgICAgIHRoaXMuX3Jlc2l6aW5nID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5fY29udGFpbmVyV2lkdGggPSB0aGlzLmVsZW1lbnQub2Zmc2V0V2lkdGg7XG4gICAgICAgIHRoaXMuX3ggPSBlLmNsaWVudFg7XG5cbiAgICAgICAgY29uc3QgY3VycmVudFRoID0gZS50YXJnZXQucGFyZW50Tm9kZTtcbiAgICAgICAgY29uc3QgcHJldlRoID0gY3VycmVudFRoLnByZXZpb3VzRWxlbWVudFNpYmxpbmc7XG5cbiAgICAgICAgdGhpcy5fY3VycmVudFRocyA9IFtjdXJyZW50VGhdO1xuICAgICAgICB0aGlzLl9wcmV2VGhzID0gW3ByZXZUaF07XG4gICAgICAgIHRoaXMuX3RhYmxlcyA9IFt0aGlzLnRhYmxlXTtcblxuICAgICAgICBpZiAodGhpcy5nZXQoJ2ZpeEhlYWRlcicpKSB7XG4gICAgICAgICAgICBjb25zdCB0aHMgPSB0aGlzLnRhYmxlLmNoaWxkcmVuWzBdLmdldEVsZW1lbnRzQnlUYWdOYW1lKCd0aCcpO1xuICAgICAgICAgICAgY29uc3QgZml4VGhzID0gY3VycmVudFRoLnBhcmVudE5vZGUuY2hpbGRyZW47XG4gICAgICAgICAgICBjb25zdCBpbmRleCA9IHNsaWNlLmNhbGwoZml4VGhzKS5pbmRleE9mKGN1cnJlbnRUaCk7XG4gICAgICAgICAgICB0aGlzLl9jdXJyZW50VGhzLnB1c2godGhzW2luZGV4XSk7XG4gICAgICAgICAgICB0aGlzLl9wcmV2VGhzLnB1c2godGhzW2luZGV4IC0gMV0pO1xuICAgICAgICAgICAgLy8gdGhpcy5fdGFibGVzLnB1c2godGhpcy5oZWFkZXIuY2hpbGRyZW5bMF0pO1xuICAgICAgICAgICAgLy8gaWYgZml4SGVhZGVyIHdlIHNob3VsZCBjaGFuZ2UgdGhlIHdpZHRoIG9mIGhlYWRlciBhbmQgc2Nyb2xsXG4gICAgICAgICAgICB0aGlzLl90YWJsZXMgPSBbdGhpcy5oZWFkZXIsIHRoaXMuc2Nyb2xsXTtcbiAgICAgICAgfVxuXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIHRoaXMuX21vdmUpO1xuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgdGhpcy5fZHJhZ0VuZCk7XG4gICAgfVxuXG4gICAgX21vdmUoZSkge1xuICAgICAgICBpZiAodGhpcy5fcmVzaXppbmcpIHtcbiAgICAgICAgICAgIGNvbnN0IGRlbFggPSBlLmNsaWVudFggLSB0aGlzLl94O1xuICAgICAgICAgICAgY29uc3QgcHJldldpZHRoID0gdGhpcy5fcHJldlRoc1swXS5vZmZzZXRXaWR0aCArIGRlbFg7XG4gICAgICAgICAgICBjb25zdCB0YWJsZVdpZHRoID0gdGhpcy5fdGFibGVzWzBdLm9mZnNldFdpZHRoICsgZGVsWDtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgaWYgKHByZXZXaWR0aCA8IE1JTl9XSURUSCkgcmV0dXJuO1xuXG4gICAgICAgICAgICB0aGlzLl9wcmV2VGhzLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICAgICAgICAgICAgaXRlbS5zdHlsZS53aWR0aCA9IHByZXZXaWR0aCArICdweCc7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgaWYgKHRoaXMuX2NvbnRhaW5lcldpZHRoID49IHRhYmxlV2lkdGgpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl90YWJsZXMuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaXRlbS5zdHlsZS53aWR0aCA9ICcxMDAlJztcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fdGFibGVzLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGl0ZW0uc3R5bGUud2lkdGggPSB0YWJsZVdpZHRoICsgJ3B4JztcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5feCA9IGUuY2xpZW50WDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIF9kcmFnRW5kKGUpIHtcbiAgICAgICAgaWYgKHRoaXMuX3Jlc2l6aW5nKSB7XG4gICAgICAgICAgICB0aGlzLl9yZXNpemluZyA9IGZhbHNlO1xuICAgICAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgdGhpcy5fbW92ZSk7XG4gICAgICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgdGhpcy5fZHJhZ0VuZCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBfZGVzdHJveSgpIHtcbiAgICAgICAgdGhpcy5fZHJhZ0VuZCgpO1xuICAgIH1cbn1cblxuZXhwb3J0IHtUYWJsZSwgQ29sdW1uIGFzIFRhYmxlQ29sdW1ufTtcblxuLy8gcmVmZXJlbmNlOiBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzEzMzgyNTE2L2dldHRpbmctc2Nyb2xsLWJhci13aWR0aC11c2luZy1qYXZhc2NyaXB0XG5mdW5jdGlvbiBnZXRTY3JvbGxiYXJXaWR0aCgpIHtcbiAgICB2YXIgb3V0ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIG91dGVyLnN0eWxlLnZpc2liaWxpdHkgPSBcImhpZGRlblwiO1xuICAgIG91dGVyLnN0eWxlLndpZHRoID0gXCIxMDBweFwiO1xuICAgIG91dGVyLnN0eWxlLm1zT3ZlcmZsb3dTdHlsZSA9IFwic2Nyb2xsYmFyXCI7IC8vIG5lZWRlZCBmb3IgV2luSlMgYXBwc1xuXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChvdXRlcik7XG5cbiAgICB2YXIgd2lkdGhOb1Njcm9sbCA9IG91dGVyLm9mZnNldFdpZHRoO1xuICAgIC8vIGZvcmNlIHNjcm9sbGJhcnNcbiAgICBvdXRlci5zdHlsZS5vdmVyZmxvdyA9IFwic2Nyb2xsXCI7XG5cbiAgICAvLyBhZGQgaW5uZXJkaXZcbiAgICB2YXIgaW5uZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGlubmVyLnN0eWxlLndpZHRoID0gXCIxMDAlXCI7XG4gICAgb3V0ZXIuYXBwZW5kQ2hpbGQoaW5uZXIpO1xuXG4gICAgdmFyIHdpZHRoV2l0aFNjcm9sbCA9IGlubmVyLm9mZnNldFdpZHRoO1xuXG4gICAgLy8gcmVtb3ZlIGRpdnNcbiAgICBvdXRlci5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKG91dGVyKTtcblxuICAgIHJldHVybiB3aWR0aE5vU2Nyb2xsIC0gd2lkdGhXaXRoU2Nyb2xsO1xufVxuXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL3RhYmxlL2luZGV4LmpzIiwiaW1wb3J0IENoZWNrYm94IGZyb20gJy4uL2NoZWNrYm94JztpbXBvcnQgUmFkaW8gZnJvbSAnLi4vcmFkaW8nO2ltcG9ydCBSb3cgZnJvbSAnLi9yb3cnO2ltcG9ydCB7bm9ybWFsaXplfSBmcm9tICdpbnRhY3QnO2ltcG9ydCBDb2x1bW4gZnJvbSAnLi9jb2x1bW4nO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24ob2JqLCBfVmR0LCBibG9ja3MsICRjYWxsZWUpIHtcblxuX1ZkdCB8fCAoX1ZkdCA9IFZkdCk7XG5vYmogfHwgKG9iaiA9IHt9KTtcbmJsb2NrcyB8fCAoYmxvY2tzID0ge30pO1xudmFyIGggPSBfVmR0Lm1pc3MuaCwgaGMgPSBfVmR0Lm1pc3MuaGMsIGh1ID0gX1ZkdC5taXNzLmh1LCB3aWRnZXRzID0gdGhpcyAmJiB0aGlzLndpZGdldHMgfHwge30sIF9ibG9ja3MgPSB7fSwgX19ibG9ja3MgPSB7fSxcbl9fdSA9IF9WZHQudXRpbHMsIGV4dGVuZCA9IF9fdS5leHRlbmQsIF9lID0gX191LmVycm9yLCBfY2xhc3NOYW1lID0gX191LmNsYXNzTmFtZSxcbl9fbyA9IF9fdS5PcHRpb25zLCBfZ2V0TW9kZWwgPSBfX28uZ2V0TW9kZWwsIF9zZXRNb2RlbCA9IF9fby5zZXRNb2RlbCxcbl9zZXRDaGVja2JveE1vZGVsID0gX191LnNldENoZWNrYm94TW9kZWwsIF9kZXRlY3RDaGVja2JveENoZWNrZWQgPSBfX3UuZGV0ZWN0Q2hlY2tib3hDaGVja2VkLFxuX3NldFNlbGVjdE1vZGVsID0gX191LnNldFNlbGVjdE1vZGVsLFxuc2VsZiA9IHRoaXMuZGF0YSwgc2NvcGUgPSBvYmosIEFuaW1hdGUgPSBzZWxmICYmIHNlbGYuQW5pbWF0ZSwgcGFyZW50ID0gKCRjYWxsZWUgfHwge30pLl9zdXBlclxuXG5cblxuXG5cblxuY29uc3Qge1xuICAgIGNoZWNrVHlwZSwgc2NoZW1lLCBjaGVja2VkS2V5cywgZGF0YSwgcm93S2V5LCBcbiAgICBjbGFzc05hbWUsIGZpeEhlYWRlciwgbm9EYXRhVGVtcGxhdGUsIGRpc2FibGVSb3csXG4gICAgZ3JvdXBzLCByZXNpemFibGUsIGV4cGFuZCwgZXhwYW5kZWRLZXlzLCB0eXBlLFxuICAgIHN0eWxlLCByb3dDbGFzc05hbWUsIGNoaWxkcmVuLCBzb3J0XG59ID0gc2VsZi5nZXQoKTtcblxubGV0IGNvbFNwYW4gPSBjaGVja1R5cGUgPT09ICdjaGVja2JveCcgfHwgY2hlY2tUeXBlID09PSAncmFkaW8nID8gMSA6IDA7XG5jb25zdCBleHBhbmRhYmxlID0gdHlwZW9mIGV4cGFuZCA9PT0gJ2Z1bmN0aW9uJztcbmNvbnN0IF9zY2hlbWUgPSB7fTtcblxuY29uc3QgdGhlYWRDcmVhdG9yID0gKCkgPT4gaCgndGhlYWQnLCBudWxsLCBoKCd0cicsIG51bGwsIFtmdW5jdGlvbigpIHt0cnkge3JldHVybiBbY2hlY2tUeXBlID09PSAnY2hlY2tib3gnIF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcykgPyBoKCd0aCcsIG51bGwsIGgoQ2hlY2tib3gsIHsndmFsdWUnOiBmdW5jdGlvbigpIHt0cnkge3JldHVybiBbc2VsZi5pc0NoZWNrQWxsKCkgXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKSwgJ2V2LSRjaGFuZ2U6dmFsdWUnOiBmdW5jdGlvbigpIHt0cnkge3JldHVybiBbc2VsZi5fdG9nZ2xlQ2hlY2tBbGwgXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKSwgJ2NoaWxkcmVuJzogbnVsbCwgJ19jb250ZXh0JzogdGhpc30pLCAnay10aC1jaGVjaycpIDogZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW2NoZWNrVHlwZSA9PT0gJ3JhZGlvJyBdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpID8gaCgndGgnLCBudWxsLCBudWxsLCAnay10aC1jaGVjaycpIDogdW5kZWZpbmVkLCAnXFxuICAgICAgICAnLCBmdW5jdGlvbigpIHt0cnkge3JldHVybiBbX191Lm1hcChzY2hlbWUsIChpdGVtLCBrZXkpID0+IHtcbiAgICAgICAgICAgIGNvbFNwYW4rKztcblxuICAgICAgICAgICAgaWYgKCFfX3UuaXNPYmplY3QoaXRlbSkpIHtcbiAgICAgICAgICAgICAgICBpdGVtID0ge3RpdGxlOiBpdGVtfTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIGgoQ29sdW1uLCB7Li4uZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW2l0ZW0gXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKSwgJ2tleSc6IGZ1bmN0aW9uKCkge3RyeSB7cmV0dXJuIFtrZXkgXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKSwgJyRwYXJlbnQnOiBmdW5jdGlvbigpIHt0cnkge3JldHVybiBbc2VsZiBdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpLCAnZXYtY2xpY2snOiBmdW5jdGlvbigpIHt0cnkge3JldHVybiBbaXRlbS5zb3J0YWJsZSA/IHNlbGYuX3NvcnQuYmluZChzZWxmLCBrZXksIGl0ZW0pIDogdW5kZWZpbmVkIF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcyksICdldi1kcmFnU3RhcnQnOiBmdW5jdGlvbigpIHt0cnkge3JldHVybiBbc2VsZi5fZHJhZ1N0YXJ0IF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcyksICdjaGlsZHJlbic6IG51bGwsICdfY29udGV4dCc6IHRoaXN9KVxuICAgICAgICB9KSBdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpLCAnXFxuICAgICAgICAnLCBmdW5jdGlvbigpIHt0cnkge3JldHVybiBbLy8gZm9yIHVzaW5nIFRhYmxlQ29sdW1uIGFzIGNoaWxkcmVuXG4gICAgICAgICAgICBfX3UubWFwKGNoaWxkcmVuID8gKEFycmF5LmlzQXJyYXkoY2hpbGRyZW4pID8gY2hpbGRyZW4gOiBbY2hpbGRyZW5dKSA6IGNoaWxkcmVuLCB2Tm9kZSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHZOb2RlLnRhZyA9PT0gQ29sdW1uKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbFNwYW4rKztcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcHJvcHMgPSB7Li4udk5vZGUucHJvcHMsICRwYXJlbnQ6IHNlbGZ9O1xuICAgICAgICAgICAgICAgICAgICB2Tm9kZS5wcm9wcyA9IHByb3BzO1xuICAgICAgICAgICAgICAgICAgICBpZiAocHJvcHMua2V5ID09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9lKCdrZXkgZm9yIFRhYmxlQ29sdW1uIG11c3QgYmUgc3BlY2lmaWVkLicpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKC9eXFxkKyQvLnRlc3QocHJvcHMua2V5KSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gYXZvaWQgZGlnaXRhbCBrZXlcbiAgICAgICAgICAgICAgICAgICAgICAgIF9lKCdkb25cXCd0IHVzZSBkaWdpdHMgYXMga2V5LicpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIF9zY2hlbWVbcHJvcHMua2V5XSA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiBwcm9wcy50aXRsZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRlbXBsYXRlOiBwcm9wcy50ZW1wbGF0ZSB8fCBwcm9wcy5kZWZhdWx0LFxuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdk5vZGU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSkgXG4gICAgICAgIF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcyksICdcXG4gICAgJ10pKVxuXG5jb25zdCB0aGVhZCA9IHRoZWFkQ3JlYXRvcigpO1xuXG5jb25zdCB0Ym9keSA9IGgoJ3Rib2R5JywgbnVsbCwgWydcXG4gICAgJywgZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW2RhdGEgJiYgZGF0YS5sZW5ndGggPyBcbiAgICAgICAgX191Lm1hcChkYXRhLCAodmFsdWUsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBrZXkgPSByb3dLZXkuY2FsbChzZWxmLCB2YWx1ZSwgaW5kZXgpO1xuICAgICAgICAgICAgY29uc3QgZGlzYWJsZWQgPSBkaXNhYmxlUm93LmNhbGwoc2VsZiwgdmFsdWUsIGluZGV4KTtcbiAgICAgICAgICAgIGNvbnN0IGNsYXNzTmFtZSA9IHJvd0NsYXNzTmFtZS5jYWxsKHNlbGYsIHZhbHVlLCBpbmRleCk7XG4gICAgICAgICAgICBjb25zdCB0ciA9IGgoUm93LCB7J2tleSc6IGZ1bmN0aW9uKCkge3RyeSB7cmV0dXJuIFtrZXkgXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKSwgJ2V2LWNsaWNrJzogZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW3NlbGYuX2NsaWNrUm93LmJpbmQoc2VsZiwgdmFsdWUsIGluZGV4LCBrZXkpIF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcyksICdjbGFzc05hbWUnOiBfY2xhc3NOYW1lKGZ1bmN0aW9uKCkge3RyeSB7cmV0dXJuIFt7XG4gICAgICAgICAgICAgICAgICAgICdrLWRpc2FibGVkJzogZGlzYWJsZWQsXG4gICAgICAgICAgICAgICAgICAgIFtjbGFzc05hbWVdOiBjbGFzc05hbWUsXG4gICAgICAgICAgICAgICAgICAgICdrLWNoZWNrZWQnOiBzZWxmLmlzQ2hlY2tlZChrZXkpLCBcbiAgICAgICAgICAgICAgICB9IF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcykpLCAnZXYtJGRlc3Ryb3llZCc6IGZ1bmN0aW9uKCkge3RyeSB7cmV0dXJuIFtzZWxmLnNocmlua1Jvdy5iaW5kKHNlbGYsIGtleSkgXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKSwgJ2NoaWxkcmVuJzogW2Z1bmN0aW9uKCkge3RyeSB7cmV0dXJuIFtjaGVja1R5cGUgPT09ICdjaGVja2JveCcgXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKSA/IGgoJ3RkJywgbnVsbCwgaChDaGVja2JveCwgeyduYW1lJzogJ2stdGFibGUtY2hlY2tib3gnLCAndHJ1ZVZhbHVlJzogZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW2tleSBdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpLCAnZGlzYWJsZWQnOiBmdW5jdGlvbigpIHt0cnkge3JldHVybiBbZGlzYWJsZWQgXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKSwgJ2NoaWxkcmVuJzogbnVsbCwgJ19jb250ZXh0JzogdGhpcywgdmFsdWU6IF9nZXRNb2RlbChzZWxmLCAnY2hlY2tlZEtleXMnKSwgJ2V2LSRjaGFuZ2U6dmFsdWUnOiBmdW5jdGlvbihfX2MsIF9fbikgeyBfc2V0TW9kZWwoc2VsZiwgJ2NoZWNrZWRLZXlzJywgX19uKSB9fSkpIDogZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW2NoZWNrVHlwZSA9PT0gJ3JhZGlvJyBdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpID8gaCgndGQnLCBudWxsLCBoKFJhZGlvLCB7J25hbWUnOiAnay10YWJsZS1yYWRpbycsICd0cnVlVmFsdWUnOiBmdW5jdGlvbigpIHt0cnkge3JldHVybiBba2V5IF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcyksICdkaXNhYmxlZCc6IGZ1bmN0aW9uKCkge3RyeSB7cmV0dXJuIFtkaXNhYmxlZCBdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpLCAnY2hpbGRyZW4nOiBudWxsLCAnX2NvbnRleHQnOiB0aGlzLCB2YWx1ZTogX2dldE1vZGVsKHNlbGYsICdjaGVja2VkS2V5JyksICdldi0kY2hhbmdlOnZhbHVlJzogZnVuY3Rpb24oX19jLCBfX24pIHsgX3NldE1vZGVsKHNlbGYsICdjaGVja2VkS2V5JywgX19uKSB9fSkpIDogdW5kZWZpbmVkLCAnXFxuICAgICAgICAgICAgICAgICcsIGZ1bmN0aW9uKCkge3RyeSB7cmV0dXJuIFtfX3UubWFwKF9fdS5leHRlbmQoe30sIHNjaGVtZSwgX3NjaGVtZSksIChpdGVtLCBrZXkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHRkO1xuICAgICAgICAgICAgICAgICAgICBpZiAoX191LmlzT2JqZWN0KGl0ZW0pICYmIGl0ZW0udGVtcGxhdGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgaXRlbS50ZW1wbGF0ZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRkID0gaXRlbS50ZW1wbGF0ZS5jYWxsKHNlbGYsIHZhbHVlLCBpbmRleCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gZm9yIEludGFjdC1WdWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAobm9ybWFsaXplKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRkID0gbm9ybWFsaXplKHRkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRkID0gaXRlbS50ZW1wbGF0ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmICh2YWx1ZVtrZXldICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRkID0gdmFsdWVba2V5XTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBvYmogPSB2YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXlzID0ga2V5LnNwbGl0KCcuJyksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaSA9IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aGlsZSAob2JqICE9IG51bGwgJiYgaSA8IGtleXMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb2JqID0gb2JqW2tleXNbaSsrXV07XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZCA9IChpICYmIGkgPT09IGtleXMubGVuZ3RoKSA/IG9iaiA6IG51bGw7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGgoJ3RkJywgeyd0aXRsZSc6IGZ1bmN0aW9uKCkge3RyeSB7cmV0dXJuIFt0eXBlb2YgdGQgPT09ICdzdHJpbmcnIHx8IHR5cGVvZiB0ZCA9PT0gJ251bWJlcicgPyBcbiAgICAgICAgICAgICAgICAgICAgICAgIHRkIDogdW5kZWZpbmVkIFxuICAgICAgICAgICAgICAgICAgICBdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpfSwgZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW3R5cGVvZiB0ZCA9PT0gJ2Jvb2xlYW4nID8gU3RyaW5nKHRkKSA6IHRkIF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcykpXG4gICAgICAgICAgICAgICAgfSkgXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKSwgJ1xcbiAgICAgICAgICAgICddLCAnX2NvbnRleHQnOiB0aGlzfSk7XG5cbiAgICAgICAgICAgIGlmIChleHBhbmRhYmxlICYmIGV4cGFuZGVkS2V5cy5pbmRleE9mKGtleSkgPiAtMSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICAgICAgICAgIHRyLFxuICAgICAgICAgICAgICAgICAgICBoKCd0cicsIG51bGwsIGgoJ3RkJywgeydjb2xzcGFuJzogZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW2NvbFNwYW4gXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKX0sIGZ1bmN0aW9uKCkge3RyeSB7cmV0dXJuIFtleHBhbmQuY2FsbChzZWxmLCB2YWx1ZSwgaW5kZXgpIF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcykpLCAnay1leHBhbmQnLCBmdW5jdGlvbigpIHt0cnkge3JldHVybiBbYCR7a2V5fS5leHBhbmRgIF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcykpXG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pIDpcbiAgICAgICAgaCgndHInLCBudWxsLCBoKCd0ZCcsIHsnY29sc3Bhbic6IGZ1bmN0aW9uKCkge3RyeSB7cmV0dXJuIFtjb2xTcGFuIF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcyl9LCBbJ1xcbiAgICAgICAgICAgICAgICAnLCBmdW5jdGlvbigpIHt0cnkge3JldHVybiBbbm9EYXRhVGVtcGxhdGUgXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKSwgJ1xcbiAgICAgICAgICAgICddLCAnay1uby1kYXRhJyksIG51bGwsICd0YWJsZV9ub19kYXRhJylcbiAgICBdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpLCAnXFxuJ10pXG5cbmNvbnN0IGNsYXNzTmFtZU9iaiA9IHtcbiAgICAnay10YWJsZS13cmFwcGVyJzogdHJ1ZSxcbiAgICBbY2xhc3NOYW1lXTogY2xhc3NOYW1lLFxuICAgIFtgay0ke3R5cGV9YF06IHR5cGUgIT09ICdkZWZhdWx0Jyxcbn07XG5cbmNvbnN0IHRhYmxlID0gaCgndGFibGUnLCBudWxsLCBbJ1xcbiAgICAnLCBmdW5jdGlvbigpIHt0cnkge3JldHVybiBbdGhlYWQgXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKSwgJ1xcbiAgICAnLCBmdW5jdGlvbigpIHt0cnkge3JldHVybiBbdGJvZHkgXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKSwgJ1xcbiddLCAnay10YWJsZScsIG51bGwsIGZ1bmN0aW9uKCkge3RyeSB7cmV0dXJuIFtkb20gPT4gc2VsZi50YWJsZSA9IGRvbSBdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpKVxuXG5yZXR1cm4gaCgnZGl2JywgeydzdHlsZSc6IGZ1bmN0aW9uKCkge3RyeSB7cmV0dXJuIFtzdHlsZSBdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpfSwgW2Z1bmN0aW9uKCkge3RyeSB7cmV0dXJuIFtmaXhIZWFkZXIgXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKSA/IGgoJ2RpdicsIHsnc3R5bGUnOiBmdW5jdGlvbigpIHt0cnkge3JldHVybiBbe3BhZGRpbmdSaWdodDogc2VsZi5nZXQoJ19wYWRkaW5nJykgKyAncHgnfSBdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpfSwgaCgndGFibGUnLCBudWxsLCBbJ1xcbiAgICAgICAgICAgICcsIGZ1bmN0aW9uKCkge3RyeSB7cmV0dXJuIFt0aGVhZENyZWF0b3IoKSBdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpLCAnXFxuICAgICAgICAnXSwgJ2stdGFibGUnKSwgJ2stZml4ZWQnLCBudWxsLCBmdW5jdGlvbigpIHt0cnkge3JldHVybiBbZG9tID0+IHNlbGYuaGVhZGVyID0gZG9tIF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcykpIDogdW5kZWZpbmVkLCAnXFxuICAgICcsIGZ1bmN0aW9uKCkge3RyeSB7cmV0dXJuIFtmaXhIZWFkZXIgPyBcbiAgICAgICAgaCgnZGl2JywgeydzdHlsZSc6IGZ1bmN0aW9uKCkge3RyeSB7cmV0dXJuIFt0eXBlb2YgZml4SGVhZGVyID09PSAnbnVtYmVyJyB8fCB0eXBlb2YgZml4SGVhZGVyID09PSAnc3RyaW5nJyA/XG4gICAgICAgICAgICAgICAge21heEhlaWdodDogYCR7Zml4SGVhZGVyfXB4YH0gOiB1bmRlZmluZWRcbiAgICAgICAgICAgIF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcyl9LCBmdW5jdGlvbigpIHt0cnkge3JldHVybiBbdGFibGUgXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKSwgJ2stc2Nyb2xsJywgbnVsbCwgZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW2RvbSA9PiBzZWxmLnNjcm9sbCA9IGRvbSBdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpKSA6XG4gICAgICAgIHRhYmxlXG4gICAgXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKSwgJ1xcbiddLCBfY2xhc3NOYW1lKGZ1bmN0aW9uKCkge3RyeSB7cmV0dXJuIFtjbGFzc05hbWVPYmogXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKSkpXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy90YWJsZS9pbmRleC52ZHQiLCJpbXBvcnQgSW50YWN0IGZyb20gJ2ludGFjdCc7XG5pbXBvcnQgdGVtcGxhdGUgZnJvbSAnLi9yb3cudmR0JztcblxuLy8gZm9yIHRyICRkZXN0cm95ZWQgZXZlbnRcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRhYmxlUm93IGV4dGVuZHMgSW50YWN0IHtcbiAgICBnZXQgdGVtcGxhdGUoKSB7IHJldHVybiB0ZW1wbGF0ZTsgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy90YWJsZS9yb3cuanMiLCJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKG9iaiwgX1ZkdCwgYmxvY2tzLCAkY2FsbGVlKSB7XG5cbl9WZHQgfHwgKF9WZHQgPSBWZHQpO1xub2JqIHx8IChvYmogPSB7fSk7XG5ibG9ja3MgfHwgKGJsb2NrcyA9IHt9KTtcbnZhciBoID0gX1ZkdC5taXNzLmgsIGhjID0gX1ZkdC5taXNzLmhjLCBodSA9IF9WZHQubWlzcy5odSwgd2lkZ2V0cyA9IHRoaXMgJiYgdGhpcy53aWRnZXRzIHx8IHt9LCBfYmxvY2tzID0ge30sIF9fYmxvY2tzID0ge30sXG5fX3UgPSBfVmR0LnV0aWxzLCBleHRlbmQgPSBfX3UuZXh0ZW5kLCBfZSA9IF9fdS5lcnJvciwgX2NsYXNzTmFtZSA9IF9fdS5jbGFzc05hbWUsXG5fX28gPSBfX3UuT3B0aW9ucywgX2dldE1vZGVsID0gX19vLmdldE1vZGVsLCBfc2V0TW9kZWwgPSBfX28uc2V0TW9kZWwsXG5fc2V0Q2hlY2tib3hNb2RlbCA9IF9fdS5zZXRDaGVja2JveE1vZGVsLCBfZGV0ZWN0Q2hlY2tib3hDaGVja2VkID0gX191LmRldGVjdENoZWNrYm94Q2hlY2tlZCxcbl9zZXRTZWxlY3RNb2RlbCA9IF9fdS5zZXRTZWxlY3RNb2RlbCxcbnNlbGYgPSB0aGlzLmRhdGEsIHNjb3BlID0gb2JqLCBBbmltYXRlID0gc2VsZiAmJiBzZWxmLkFuaW1hdGUsIHBhcmVudCA9ICgkY2FsbGVlIHx8IHt9KS5fc3VwZXJcbnJldHVybiBoKCd0cicsIHsuLi5mdW5jdGlvbigpIHt0cnkge3JldHVybiBbc2VsZi5nZXQoKSBdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpfSwgZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW3NlbGYuZ2V0KCdjaGlsZHJlbicpIF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcykpXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy90YWJsZS9yb3cudmR0IiwiZXhwb3J0IHtkZWZhdWx0IGFzIGRhdGF9IGZyb20gJy4vaW5kZXguanNvbic7XG5pbXBvcnQgSW50YWN0IGZyb20gJ2ludGFjdCc7XG5pbXBvcnQgdGVtcGxhdGUgZnJvbSAnLi9pbmRleC52ZHQnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIEludGFjdCB7XG4gICAgQEludGFjdC50ZW1wbGF0ZSgpXG4gICAgc3RhdGljIHRlbXBsYXRlID0gdGVtcGxhdGU7XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc2l0ZS9jb21wb25lbnRzL3RhYmxlL2RlbW9zL2Jhc2ljL2luZGV4LmpzIiwiaW1wb3J0IFRhYmxlIGZyb20gJ2twYy9jb21wb25lbnRzL3RhYmxlJztcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKG9iaiwgX1ZkdCwgYmxvY2tzLCAkY2FsbGVlKSB7XG5cbl9WZHQgfHwgKF9WZHQgPSBWZHQpO1xub2JqIHx8IChvYmogPSB7fSk7XG5ibG9ja3MgfHwgKGJsb2NrcyA9IHt9KTtcbnZhciBoID0gX1ZkdC5taXNzLmgsIGhjID0gX1ZkdC5taXNzLmhjLCBodSA9IF9WZHQubWlzcy5odSwgd2lkZ2V0cyA9IHRoaXMgJiYgdGhpcy53aWRnZXRzIHx8IHt9LCBfYmxvY2tzID0ge30sIF9fYmxvY2tzID0ge30sXG5fX3UgPSBfVmR0LnV0aWxzLCBleHRlbmQgPSBfX3UuZXh0ZW5kLCBfZSA9IF9fdS5lcnJvciwgX2NsYXNzTmFtZSA9IF9fdS5jbGFzc05hbWUsXG5fX28gPSBfX3UuT3B0aW9ucywgX2dldE1vZGVsID0gX19vLmdldE1vZGVsLCBfc2V0TW9kZWwgPSBfX28uc2V0TW9kZWwsXG5fc2V0Q2hlY2tib3hNb2RlbCA9IF9fdS5zZXRDaGVja2JveE1vZGVsLCBfZGV0ZWN0Q2hlY2tib3hDaGVja2VkID0gX191LmRldGVjdENoZWNrYm94Q2hlY2tlZCxcbl9zZXRTZWxlY3RNb2RlbCA9IF9fdS5zZXRTZWxlY3RNb2RlbCxcbnNlbGYgPSB0aGlzLmRhdGEsIHNjb3BlID0gb2JqLCBBbmltYXRlID0gc2VsZiAmJiBzZWxmLkFuaW1hdGUsIHBhcmVudCA9ICgkY2FsbGVlIHx8IHt9KS5fc3VwZXJcblxudmFyIHNjaGVtZSA9IHthOiAn6KGo5aS0MScsIGI6ICfooajlpLQyJ307XG5yZXR1cm4gaCgnZGl2JywgbnVsbCwgaChUYWJsZSwgeydjaGlsZHJlbic6IG51bGwsICdfY29udGV4dCc6IHRoaXN9KSlcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zaXRlL2NvbXBvbmVudHMvdGFibGUvZGVtb3MvYmFzaWMvaW5kZXgudmR0Il0sInNvdXJjZVJvb3QiOiIifQ==