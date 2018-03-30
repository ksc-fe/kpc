'use strict';

exports.__esModule = true;
exports.default = undefined;

var _getOwnPropertyDescriptor = require('babel-runtime/core-js/object/get-own-property-descriptor');

var _getOwnPropertyDescriptor2 = _interopRequireDefault(_getOwnPropertyDescriptor);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _dec, _desc, _value, _class, _class2, _temp;

var _intact = require('intact');

var _intact2 = _interopRequireDefault(_intact);

var _group = require('./group.vdt');

var _group2 = _interopRequireDefault(_group);

require('./index.css');

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

var ButtonGroup = (_dec = _intact2.default.template(), (_class = (_temp = _class2 = function (_Intact) {
    (0, _inherits3.default)(ButtonGroup, _Intact);

    function ButtonGroup() {
        (0, _classCallCheck3.default)(this, ButtonGroup);
        return (0, _possibleConstructorReturn3.default)(this, _Intact.apply(this, arguments));
    }

    ButtonGroup.prototype.defaults = function defaults() {
        return {
            vertical: false,
            value: undefined,
            radio: false, // @deprecated: use checkType instead of
            checkType: 'none' // radio | checkbox | none
        };
    };

    ButtonGroup.prototype._init = function _init() {
        /* istanbul ignore if */
        if (this.get('radio')) {
            this.set('checkType', 'radio', { silent: true });
        }
    };

    (0, _createClass3.default)(ButtonGroup, [{
        key: 'template',
        get: function get() {
            return _group2.default;
        }
    }]);
    return ButtonGroup;
}(_intact2.default), _class2.propTypes = {
    vertical: Boolean,
    radio: Boolean
}, _temp), (_applyDecoratedDescriptor(_class.prototype, 'template', [_dec], (0, _getOwnPropertyDescriptor2.default)(_class.prototype, 'template'), _class.prototype)), _class));
exports.default = ButtonGroup;
module.exports = exports['default'];