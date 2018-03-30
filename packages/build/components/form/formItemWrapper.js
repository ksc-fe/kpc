'use strict';

exports.__esModule = true;

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _intact = require('intact');

var _intact2 = _interopRequireDefault(_intact);

var _formItem = require('./formItem');

var _formItem2 = _interopRequireDefault(_formItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var h = _intact2.default.Vdt.miss.h;

function Wrapper(props) {
    var key = props.key,
        _context = props._context,
        model = props.model,
        rest = (0, _objectWithoutProperties3.default)(props, ['key', '_context', 'model']);

    if (!key && model) {
        key = '$fi.' + model;
    }
    return h(_formItem2.default, (0, _extends3.default)({
        key: key, model: model, _context: _context,
        'ev-$change:value': function ev$changeValue(c, v) {
            _context.data.set(model, v);
        },
        value: _context.data.get(model)
    }, rest));
}

exports.default = _intact2.default.functionalWrapper ? _intact2.default.functionalWrapper(Wrapper) : Wrapper;
module.exports = exports['default'];