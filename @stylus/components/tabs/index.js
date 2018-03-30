'use strict';

exports.__esModule = true;
exports.Tab = exports.Tabs = exports.default = undefined;

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

var _dec, _desc, _value, _class;

var _intact = require('intact');

var _intact2 = _interopRequireDefault(_intact);

var _tab = require('./tab');

var _tab2 = _interopRequireDefault(_tab);

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

var Tabs = (_dec = _intact2.default.template(), (_class = function (_Intact) {
    (0, _inherits3.default)(Tabs, _Intact);

    function Tabs() {
        (0, _classCallCheck3.default)(this, Tabs);
        return (0, _possibleConstructorReturn3.default)(this, _Intact.apply(this, arguments));
    }

    Tabs.prototype.defaults = function defaults() {
        return {
            data: undefined,
            value: undefined
        };
    };

    Tabs.prototype._changeTab = function _changeTab(item) {
        if (this.get('v-model')) {
            this.set('value', item.value);
        }
        if (item.to) {
            window.location.href = item.to;
        }
    };

    (0, _createClass3.default)(Tabs, [{
        key: 'template',
        get: function get() {
            return _index2.default;
        }
    }]);
    return Tabs;
}(_intact2.default), (_applyDecoratedDescriptor(_class.prototype, 'template', [_dec], (0, _getOwnPropertyDescriptor2.default)(_class.prototype, 'template'), _class.prototype)), _class));
exports.default = Tabs;
exports.Tabs = Tabs;
exports.Tab = _tab2.default;