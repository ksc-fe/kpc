'use strict';

exports.__esModule = true;
exports.default = undefined;

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _intact = require('intact');

var _intact2 = _interopRequireDefault(_intact);

var _row = require('./row.vdt');

var _row2 = _interopRequireDefault(_row);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// for tr $destroyed event
var TableRow = function (_Intact) {
    (0, _inherits3.default)(TableRow, _Intact);

    function TableRow() {
        (0, _classCallCheck3.default)(this, TableRow);
        return (0, _possibleConstructorReturn3.default)(this, _Intact.apply(this, arguments));
    }

    (0, _createClass3.default)(TableRow, [{
        key: 'template',
        get: function get() {
            return _row2.default;
        }
    }]);
    return TableRow;
}(_intact2.default);

exports.default = TableRow;
module.exports = exports['default'];