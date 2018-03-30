'use strict';

exports.__esModule = true;

var _extends3 = require('babel-runtime/helpers/extends');

var _extends4 = _interopRequireDefault(_extends3);

exports.default = gutterStyle;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function gutterStyle(gutter, style) {
    var prop = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'margin';

    var margin = gutter / 2;
    var sign = prop === 'margin' ? '-' : '';
    if (!style) style = '';
    if (typeof style === 'string') {
        style = '' + style + (!style || /;\s*$/.test(style) ? '' : ';') + prop + '-left: ' + sign + margin + 'px; ' + prop + '-right: ' + sign + margin + 'px;';
    } else {
        var _extends2;

        style = (0, _extends4.default)((_extends2 = {}, _extends2[prop + 'Left'] = '' + sign + margin + 'px', _extends2[prop + 'Right'] = '' + sign + margin + 'px', _extends2), style);
    }
    return style;
}
module.exports = exports['default'];