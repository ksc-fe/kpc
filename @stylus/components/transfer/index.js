'use strict';

exports.__esModule = true;
exports.Transfer = exports.default = undefined;

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

require('../../styles/kpc.styl');

require('./index.styl');

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

var Transfer = (_dec = _intact2.default.template(), (_class = (_temp = _class2 = function (_Intact) {
    (0, _inherits3.default)(Transfer, _Intact);

    function Transfer() {
        (0, _classCallCheck3.default)(this, Transfer);
        return (0, _possibleConstructorReturn3.default)(this, _Intact.apply(this, arguments));
    }

    Transfer.prototype.defaults = function defaults() {
        return {
            data: [],
            value: [],
            leftChecked: [],
            rightChecked: [],
            filterable: false,
            filter: function filter(data, keywords) {
                return data.label.includes(keywords);
            },
            label: function label(data, index) {
                return data.label;
            },

            placeholder: '请输入',
            leftTitle: '请选择',
            rightTitle: '已选择'
        };
    };

    Transfer.prototype._mount = function _mount() {
        document.addEventListener('keydown', this._onKeydown);
        document.addEventListener('keyup', this._onKeyup);
    };

    Transfer.prototype._onKeydown = function _onKeydown(e) {
        if (e.keyCode === 16) {
            this.shiftKey = true;
        }
    };

    Transfer.prototype._onKeyup = function _onKeyup(e) {
        if (e.keyCode === 16) {
            this.shiftKey = false;
        }
    };

    Transfer.prototype._add = function _add() {
        var value = this.get('value').concat(this.get('leftChecked'));
        this.set({
            leftChecked: [],
            value: value
        });
    };

    Transfer.prototype._remove = function _remove() {
        var value = this.get('value').slice(0);
        this.get('rightChecked').forEach(function (item) {
            var index = value.indexOf(item);
            value.splice(index, 1);
        });
        this.set({
            rightChecked: [],
            value: value
        });
    };

    Transfer.prototype._onCheckboxChange = function _onCheckboxChange(type, index, e) {
        var keywords = this.get(type + 'Keywords');
        var data = type === 'left' ? this.get('data') : this.get('value');
        var filter = this.get('filter');

        if (this.startIndex === undefined || !this.shiftKey) {
            this.startIndex = index;
            this.checked = e.target.checked;
        } else if (this.shiftKey) {
            var values = data;
            if (this.get('filterable') && keywords) {
                values = data.filter(function (item) {
                    return filter(item, keywords);
                });
            }
            if (index > this.startIndex) {
                values = values.slice(this.startIndex, index + 1);
            } else if (index < this.startIndex) {
                values = values.slice(index, this.startIndex + 1);
            }
            values = values.filter(function (item) {
                return !item.disabled;
            });
            var checkedValues = this.get(type + 'Checked');
            var _values = [];

            if (this.checked) {
                checkedValues.forEach(function (item) {
                    if (!~values.indexOf(item)) {
                        _values.push(item);
                    }
                });
                this.set(type + 'Checked', values.concat(_values));
            } else {
                checkedValues.forEach(function (item) {
                    if (!~values.indexOf(item)) {
                        _values.push(item);
                    }
                });
                this.set(type + 'Checked', _values);
            }
        }
    };

    Transfer.prototype._onClickLabel = function _onClickLabel(e) {
        if (e.shiftKey && e.target.tagName !== 'INPUT') {
            e.preventDefault();
            e.target.click();
        }
    };

    Transfer.prototype._destroy = function _destroy() {
        document.removeEventListener('keydown', this._onKeydown);
        document.removeEventListener('keyup', this._onKeyup);
    };

    return Transfer;
}(_intact2.default), _class2.template = _index2.default, _temp), (_applyDecoratedDescriptor(_class, 'template', [_dec], (_init = (0, _getOwnPropertyDescriptor2.default)(_class, 'template'), _init = _init ? _init.value : undefined, {
    enumerable: true,
    configurable: true,
    writable: true,
    initializer: function initializer() {
        return _init;
    }
}), _class)), _class));
exports.default = Transfer;
exports.Transfer = Transfer;