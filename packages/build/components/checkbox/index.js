'use strict';

exports.__esModule = true;
exports.Checkbox = exports.default = undefined;

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

require('./index.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var isArray = _intact2.default.Vdt.utils.isArray;
var Checkbox = (_temp = _class = function (_Intact) {
    (0, _inherits3.default)(Checkbox, _Intact);

    function Checkbox() {
        (0, _classCallCheck3.default)(this, Checkbox);
        return (0, _possibleConstructorReturn3.default)(this, _Intact.apply(this, arguments));
    }

    Checkbox.prototype.defaults = function defaults() {
        return {
            disabled: false,
            value: false,
            trueValue: true,
            falseValue: false
        };
    };

    // set value to falseValue when destroy
    Checkbox.prototype._destroy = function _destroy() {
        // we should not change data in _destroy

        // we must use _context to get value, because it maybe has changed
        // const model = this.get('v-model');
        // if (!model) return;

        // let value = this.get('_context').data.get(model);
        // if (!value) return;
        // const trueValue = this.get('trueValue');
        // if (this.isChecked()) {
        // if (isArray(value)) {
        // value = value.slice(0);
        // const index = value.indexOf(trueValue);
        // value.splice(index, 1);
        // this.set('value', value);
        // } else {
        // this.set('value', this.get('falseValue'));
        // }
        // }
    };

    Checkbox.prototype.isChecked = function isChecked() {
        var value = this.get('value');
        var trueValue = this.get('trueValue');
        return isArray(value) ? value.indexOf(trueValue) > -1 : value === trueValue;
    };

    (0, _createClass3.default)(Checkbox, [{
        key: 'template',
        get: function get() {
            return _index2.default;
        }
    }]);
    return Checkbox;
}(_intact2.default), _class.propTypes = {
    disabled: Boolean }, _temp);
exports.default = Checkbox;
exports.Checkbox = Checkbox;