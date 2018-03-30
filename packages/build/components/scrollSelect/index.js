'use strict';

exports.__esModule = true;
exports.ScrollSelect = exports.default = undefined;

var _getOwnPropertyDescriptor = require('babel-runtime/core-js/object/get-own-property-descriptor');

var _getOwnPropertyDescriptor2 = _interopRequireDefault(_getOwnPropertyDescriptor);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _dec, _desc, _value, _class, _init, _class2, _temp;

var _intact = require('intact');

var _intact2 = _interopRequireDefault(_intact);

var _index = require('./index.vdt');

var _index2 = _interopRequireDefault(_index);

require('./index.css');

var _utils = require('../utils');

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

var ScrollSelect = (_dec = _intact2.default.template(), (_class = (_temp = _class2 = function (_Intact) {
    (0, _inherits3.default)(ScrollSelect, _Intact);

    function ScrollSelect() {
        (0, _classCallCheck3.default)(this, ScrollSelect);
        return (0, _possibleConstructorReturn3.default)(this, _Intact.apply(this, arguments));
    }

    ScrollSelect.prototype.defaults = function defaults() {
        return {
            value: '',
            count: 19,
            data: [],
            disabled: false,

            _list: [],
            _translate: 0,
            _marginTop: 0,
            _dragging: false
        };
    };

    ScrollSelect.prototype._init = function _init() {
        var _this2 = this;

        this._setList();

        ['data', 'value', 'count'].forEach(function (item) {
            _this2.on('$change:' + item, _this2._setList);
        });

        this._move = this._move.bind(this);
        this._dragEnd = this._dragEnd.bind(this);

        // throttle onWheel
        var lock = false;
        var onWheel = this._onWheel;
        this._onWheel = function (e) {
            for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
                args[_key - 1] = arguments[_key];
            }

            e.preventDefault();
            if (lock) return;
            lock = true;
            _this2.timer = setTimeout(function () {
                onWheel.apply(undefined, [e].concat(args));
                lock = false;
            }, 50);
        };
    };

    ScrollSelect.prototype._mount = function _mount() {
        var height = this.element.offsetHeight;
        var totalHeight = this.refs.wrapper.offsetHeight;
        this._deltaY = -Math.floor((totalHeight - height) / 2);
        this.set({
            _translate: this._deltaY
        });
    };

    ScrollSelect.prototype._select = function _select(item, index) {
        var _get = this.get(),
            count = _get.count,
            _translate = _get._translate,
            _marginTop = _get._marginTop;

        var half = Math.floor(count / 2);
        var itemHeight = this.refs.item.offsetHeight;

        this.set({
            _translate: _translate - itemHeight * (index - half),
            _marginTop: _marginTop + itemHeight * (index - half),
            value: item.value
        });
    };

    ScrollSelect.prototype._setList = function _setList() {
        var _get2 = this.get(),
            data = _get2.data,
            value = _get2.value,
            count = _get2.count;

        if (typeof data === 'function') {
            data = data(value);
        }

        var index = -1;
        data = data.map(function (item, i) {
            if ((0, _utils.isStringOrNumber)(item)) {
                item = { value: item, label: item };
            }
            if (item.value === value) {
                index = i;
            }
            return item;
        });

        if (!~index) {
            index = 0;
            this.set('value', data[0].value, { silent: true });
        }

        var length = data.length;
        var half = Math.floor(count / 2);
        var _list = [];
        for (var i = 0; i < count; i++) {
            _list.push(data[((index - half + i) % length + length) % length]);
        }
        this.set('_list', _list, { silent: true });
    };

    ScrollSelect.prototype._dragStart = function _dragStart(e) {
        if (e.which !== 1) return;

        this.set('_dragging', true);
        this._y = e.clientY;
        this._initY = e.clientY;
        this._itemHeight = this.refs.item.offsetHeight;

        document.addEventListener('mousemove', this._move);
        document.addEventListener('mouseup', this._dragEnd);
    };

    ScrollSelect.prototype._move = function _move(e) {
        if (this.get('_dragging')) {
            var deltaY = e.clientY - this._y;
            this._y = e.clientY;

            var _get3 = this.get(),
                _translate = _get3._translate;

            var _deltaY = this._y - this._initY;
            var offsetIndex = Math.floor(Math.abs(_deltaY) / this._itemHeight);
            if (offsetIndex) {
                if (_deltaY < 0) {
                    offsetIndex = -offsetIndex;
                }
                this._setByRelativeIndex(-offsetIndex, -_deltaY);
                this._initY = this._y;
            }
            this.set('_translate', _translate + deltaY);
        }
    };

    ScrollSelect.prototype._setByRelativeIndex = function _setByRelativeIndex(index, deltaY, isSetTranslate) {
        var _get4 = this.get(),
            _list = _get4._list,
            value = _get4.value,
            _marginTop = _get4._marginTop;

        var i = _list.findIndex(function (v) {
            return v.value === value;
        });
        var l = _list.length;
        var itemHeight = this._itemHeight;
        var props = {
            'value': _list[(l + i + index) % l].value,
            _marginTop: _marginTop + (deltaY || index * itemHeight)
        };
        if (isSetTranslate) {
            props._translate = this.get('_translate') - itemHeight * index;
        }
        this.set(props);
    };

    ScrollSelect.prototype._dragEnd = function _dragEnd(e) {
        if (this.get('_dragging')) {
            this.set('_dragging', false);
            this.set({
                _translate: -this.get('_marginTop') + this._deltaY
            });
            document.removeEventListener('mousemove', this._move);
            document.removeEventListener('mouseup', this._dragEnd);
        }
    };

    ScrollSelect.prototype._onWheel = function _onWheel(e) {
        e.preventDefault();
        this._itemHeight = this.refs.item.offsetHeight;
        if (e._rawEvent.deltaY > 0) {
            // down
            this._setByRelativeIndex(1, null, true);
        } else {
            this._setByRelativeIndex(-1, null, true);
        }
    };

    ScrollSelect.prototype._destroy = function _destroy() {
        document.removeEventListener('mousemove', this._move);
        document.removeEventListener('mouseup', this._dragEnd);
        clearTimeout(this.timer);
    };

    return ScrollSelect;
}(_intact2.default), _class2.template = _index2.default, _temp), (_applyDecoratedDescriptor(_class, 'template', [_dec], (_init = (0, _getOwnPropertyDescriptor2.default)(_class, 'template'), _init = _init ? _init.value : undefined, {
    enumerable: true,
    configurable: true,
    writable: true,
    initializer: function initializer() {
        return _init;
    }
}), _class)), _class));
exports.default = ScrollSelect;
exports.ScrollSelect = ScrollSelect;