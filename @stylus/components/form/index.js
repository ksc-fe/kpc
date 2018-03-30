'use strict';

exports.__esModule = true;
exports.FormItem = exports.Form = undefined;

var _form = require('./form');

var _form2 = _interopRequireDefault(_form);

var _formItemWrapper = require('./formItemWrapper');

var _formItemWrapper2 = _interopRequireDefault(_formItemWrapper);

require('../../styles/kpc.styl');

require('./index.styl');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _form2.default;
exports.Form = _form2.default;
exports.FormItem = _formItemWrapper2.default;