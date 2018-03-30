'use strict';

exports.__esModule = true;
exports.TableColumn = exports.Table = exports.default = undefined;

var _getOwnPropertyDescriptor = require('babel-runtime/core-js/object/get-own-property-descriptor');

var _getOwnPropertyDescriptor2 = _interopRequireDefault(_getOwnPropertyDescriptor);

var _assign = require('babel-runtime/core-js/object/assign');

var _assign2 = _interopRequireDefault(_assign);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _dec, _desc, _value, _class, _class2, _temp;

var _intact = require('intact');

var _intact2 = _interopRequireDefault(_intact);

var _index = require('./index.vdt');

var _index2 = _interopRequireDefault(_index);

require('./index.css');

var _column = require('./column');

var _column2 = _interopRequireDefault(_column);

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

var scrollBarWidth = undefined;

var MIN_WIDTH = 40;
var slice = Array.prototype.slice;

var Table = (_dec = _intact2.default.template(), (_class = (_temp = _class2 = function (_Intact) {
    (0, _inherits3.default)(Table, _Intact);

    function Table() {
        (0, _classCallCheck3.default)(this, Table);
        return (0, _possibleConstructorReturn3.default)(this, _Intact.apply(this, arguments));
    }

    Table.prototype.defaults = function defaults() {
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
    };

    Table.prototype._init = function _init() {
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
    };

    Table.prototype._mount = function _mount() {
        if (scrollBarWidth === undefined) {
            scrollBarWidth = getScrollbarWidth();
        }
        this._calcHeaderPadding();
    };

    Table.prototype.isCheckAll = function isCheckAll() {
        var checkedKeys = this.get('checkedKeys');
        var dataLength = this.get('data').length;
        var disabledAmount = this.get("_disabledAmount");
        var amount = dataLength - disabledAmount;
        return amount && checkedKeys.length >= amount;
    };

    Table.prototype.isChecked = function isChecked(key) {
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
    };

    Table.prototype.checkAll = function checkAll() {
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
    };

    Table.prototype.uncheckAll = function uncheckAll() {
        this.set('checkedKeys', []);
    };

    Table.prototype.checkRow = function checkRow(key) {
        this._checkUncheckRow(key, true, false);
    };

    Table.prototype.uncheckRow = function uncheckRow(key) {
        this._checkUncheckRow(key, false, false);
    };

    Table.prototype.shrinkRow = function shrinkRow(key) {
        this._expandShrinkRow(key, false, false);
    };

    Table.prototype.expandRow = function expandRow(key) {
        this._expandShrinkRow(key, true, false);
    };

    /**
     * @brief get the checked data
     * @return {Array}
     */


    Table.prototype.getCheckedData = function getCheckedData() {
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
    };

    Table.prototype._calcHeaderPadding = function _calcHeaderPadding() {
        if (this.get('fixHeader')) {
            var tableHeight = this.table.offsetHeight;
            var containerHeight = this.scroll.offsetHeight;
            var headerHeight = this.header.offsetHeight;
            this.set('_padding', tableHeight - headerHeight > containerHeight ? scrollBarWidth : 0);
        }
    };

    Table.prototype._updateDisabledAmount = function _updateDisabledAmount() {
        var _this5 = this;

        var disabledAmount = 0;

        var _get2 = this.get(),
            data = _get2.data,
            disableRow = _get2.disableRow;

        if (!Array.isArray(data)) {
            data = [];
            this.set('data', data, { silent: true });
        }

        data.forEach(function (item, index) {
            if (disableRow.call(_this5, item, index)) {
                disabledAmount++;
            }
        });
        this.set('_disabledAmount', disabledAmount);
    };

    Table.prototype._toggleCheckAll = function _toggleCheckAll(e) {
        if (e.target.checked) {
            this.checkAll();
        } else {
            this.uncheckAll();
        }
    };

    Table.prototype._clickRow = function _clickRow(value, index, key, e) {
        // if is from checkbox or radio then do nothing
        if (e.target.tagName.toLowerCase() === 'input') return;
        if (this.get('disableRow').call(this, value, index)) return;

        if (this.get('rowCheckable')) {
            this._checkUncheckRow(key);
        }

        if (this.get('rowExpandable')) {
            this._expandShrinkRow(key);
        }
    };

    Table.prototype._checkUncheckRow = function _checkUncheckRow(key) {
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
            if (!isToggle) {
                // isToggle is false means call this by checkRow & uncheckRow
                if (isCheck) {
                    this.set('checkedKey', key);
                } else {
                    this.set('checkedKey', undefined);
                }
            } else {
                this.set('checkedKey', key);
            }
        }
    };

    Table.prototype._expandShrinkRow = function _expandShrinkRow(key) {
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
    };

    Table.prototype._onRowDestroyed = function _onRowDestroyed(key) {
        this.shrinkRow(key);
        this.uncheckRow(key);
    };

    Table.prototype._sort = function _sort(key, value) {
        var sort = (0, _assign2.default)({}, this.get('sort'));
        sort.key = key;
        sort.type = sort.type === 'desc' ? 'asc' : 'desc';
        this.set('sort', sort);
    };

    Table.prototype._dragStart = function _dragStart(e) {
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
    };

    Table.prototype._move = function _move(e) {
        if (this._resizing) {
            var delX = e.clientX - this._x;
            var prevWidth = this._prevThs[0].offsetWidth + delX;
            var tableWidth = this._tables[0].offsetWidth + delX;

            if (prevWidth < MIN_WIDTH) return;

            this._prevThs.forEach(function (item) {
                item.csse.width = prevWidth + 'px';
            });

            if (this._containerWidth >= tableWidth) {
                this._tables.forEach(function (item) {
                    item.csse.width = '100%';
                });
            } else {
                this._tables.forEach(function (item) {
                    item.csse.width = tableWidth + 'px';
                });
            }

            this._x = e.clientX;
        }
    };

    Table.prototype._dragEnd = function _dragEnd(e) {
        if (this._resizing) {
            this._resizing = false;
            document.removeEventListener('mousemove', this._move);
            document.removeEventListener('mouseup', this._dragEnd);
        }
    };

    Table.prototype._destroy = function _destroy() {
        this._dragEnd();
    };

    (0, _createClass3.default)(Table, [{
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
}, _temp), (_applyDecoratedDescriptor(_class.prototype, 'template', [_dec], (0, _getOwnPropertyDescriptor2.default)(_class.prototype, 'template'), _class.prototype)), _class));
exports.default = Table;
exports.Table = Table;
exports.TableColumn = _column2.default;

// reference: http://stackoverflow.com/questions/13382516/getting-scroll-bar-width-using-javascript

function getScrollbarWidth() {
    var outer = document.createElement("div");
    outer.csse.visibility = "hidden";
    outer.csse.width = "100px";
    outer.csse.msOverflowStyle = "scrollbar"; // needed for WinJS apps

    document.body.appendChild(outer);

    var widthNoScroll = outer.offsetWidth;
    // force scrollbars
    outer.csse.overflow = "scroll";

    // add innerdiv
    var inner = document.createElement("div");
    inner.csse.width = "100%";
    outer.appendChild(inner);

    var widthWithScroll = inner.offsetWidth;

    // remove divs
    outer.parentNode.removeChild(outer);

    return widthNoScroll - widthWithScroll;
}