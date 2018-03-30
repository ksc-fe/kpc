'use strict';

exports.__esModule = true;
exports.Spinner = exports.default = undefined;

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _class, _temp;

var _intact = require('intact');

var _intact2 = _interopRequireDefault(_intact);

var _index = require('./index.vdt');

var _index2 = _interopRequireDefault(_index);

require('../../styles/kpc.styl');

require('./index.styl');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var numberReg = /^(-|\+)?\d+(\.(\d+)?)?$/;

var Spinner = (_temp = _class = function (_Intact) {
    (0, _inherits3.default)(Spinner, _Intact);

    function Spinner() {
        (0, _classCallCheck3.default)(this, Spinner);
        return (0, _possibleConstructorReturn3.default)(this, _Intact.apply(this, arguments));
    }

    Spinner.prototype.defaults = function defaults() {
        return {
            disabled: false,
            value: 0,
            max: Number.POSITIVE_INFINITY,
            min: Number.NEGATIVE_INFINITY,
            step: 1,
            size: 'default'
        };
    };

    Spinner.prototype._init = function _init() {
        var value = this.get('value');
        if (value == null) {
            var min = this.get('min');
            if (min === Number.NEGATIVE_INFINITY) {
                value = 0;
            } else {
                value = min;
            }
            this.set('value', value);
        }
        this.initValue = value;
    };

    Spinner.prototype._increase = function _increase(e) {
        if (this._disableIncrease()) return;

        var _get = this.get(),
            value = _get.value,
            step = _get.step;

        this.set('value', Number((value + step).toFixed(10)));
    };

    Spinner.prototype._decrease = function _decrease(e) {
        if (this._disableDecrease()) return;

        var _get2 = this.get(),
            value = _get2.value,
            step = _get2.step;

        this.set('value', Number((value - step).toFixed(10)));
    };

    Spinner.prototype._disableDecrease = function _disableDecrease() {
        var _get3 = this.get(),
            value = _get3.value,
            min = _get3.min,
            step = _get3.step,
            disabled = _get3.disabled;

        return disabled || value <= min || value - min < step;
    };

    Spinner.prototype._disableIncrease = function _disableIncrease() {
        var _get4 = this.get(),
            value = _get4.value,
            max = _get4.max,
            step = _get4.step,
            disabled = _get4.disabled;

        return disabled || value >= max || max - value < step;
    };

    Spinner.prototype._changeValue = function _changeValue(e) {
        var _get5 = this.get(),
            disabled = _get5.disabled,
            max = _get5.max,
            min = _get5.min;

        var val = e.target.value.trim();

        if (!numberReg.test(val) || disabled) {
            this.set('value', this.initValue);
        } else {
            val = Number(val);
            if (val >= max) {
                val = max;
            } else if (val < min) {
                val = min;
            }
            this.set('value', val);
        }
    };

    (0, _createClass3.default)(Spinner, [{
        key: 'template',
        get: function get() {
            return _index2.default;
        }
    }]);
    return Spinner;
}(_intact2.default), _class.propTypes = {
    disabled: Boolean,
    max: Number,
    min: Number,
    step: Number
}, _temp);
exports.default = Spinner;
exports.Spinner = Spinner;