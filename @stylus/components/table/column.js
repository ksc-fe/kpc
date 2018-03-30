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

var _column = require('./column.vdt');

var _column2 = _interopRequireDefault(_column);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TableColumn = function (_Intact) {
    (0, _inherits3.default)(TableColumn, _Intact);

    function TableColumn() {
        (0, _classCallCheck3.default)(this, TableColumn);
        return (0, _possibleConstructorReturn3.default)(this, _Intact.apply(this, arguments));
    }

    TableColumn.prototype.defaults = function defaults() {
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
    };

    TableColumn.prototype.onClick = function onClick(e) {
        this.trigger('click', e);
    };

    TableColumn.prototype.onDragStart = function onDragStart(e) {
        this.trigger('dragStart', e);
    };

    (0, _createClass3.default)(TableColumn, [{
        key: 'template',
        get: function get() {
            return _column2.default;
        }
    }]);
    return TableColumn;
}(_intact2.default);

exports.default = TableColumn;
module.exports = exports['default'];