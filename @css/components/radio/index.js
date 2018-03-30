'use strict';

exports.__esModule = true;
exports.Radio = exports.default = undefined;

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

require('../../styles/kpc.css');

require('./index.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Radio = (_temp = _class = function (_Intact) {
    (0, _inherits3.default)(Radio, _Intact);

    function Radio() {
        (0, _classCallCheck3.default)(this, Radio);
        return (0, _possibleConstructorReturn3.default)(this, _Intact.apply(this, arguments));
    }

    Radio.prototype.defaults = function defaults() {
        return {
            disabled: false,
            value: false,
            trueValue: true
        };
    };

    Radio.prototype.isChecked = function isChecked() {
        return this.get('value') === this.get('trueValue');
    };

    Radio.prototype._destroy = function _destroy() {
        // we should not change data in _destroy
        // if (this.isChecked()) {
        // this.set('value', undefined);
        // }
    };

    (0, _createClass3.default)(Radio, [{
        key: 'template',
        get: function get() {
            return _index2.default;
        }
    }]);
    return Radio;
}(_intact2.default), _class.propTypes = {
    disabled: Boolean
}, _temp);
exports.default = Radio;
exports.Radio = Radio;