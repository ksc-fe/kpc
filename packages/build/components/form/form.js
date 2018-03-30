'use strict';

exports.__esModule = true;
exports.default = undefined;

var _getOwnPropertyDescriptor = require('babel-runtime/core-js/object/get-own-property-descriptor');

var _getOwnPropertyDescriptor2 = _interopRequireDefault(_getOwnPropertyDescriptor);

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

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

var _form = require('./form.vdt');

var _form2 = _interopRequireDefault(_form);

var _methods = require('./methods');

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

var Form = (_dec = _intact2.default.template(), (_class = (_temp = _class2 = function (_Intact) {
    (0, _inherits3.default)(Form, _Intact);

    function Form() {
        (0, _classCallCheck3.default)(this, Form);
        return (0, _possibleConstructorReturn3.default)(this, _Intact.apply(this, arguments));
    }

    Form.prototype.defaults = function defaults() {
        return {
            items: [],
            rules: {}
        };
    };

    Form.prototype.getRules = function getRules() {
        var rules = this.get('rules');
        var items = this.get('items');

        items.forEach(function (item) {
            rules[item.get('model')] = item.get('rules');
        });

        return rules;
    };

    Form.prototype.validate = function validate() {
        var items = this.get('items');

        return _promise2.default.all(items.map(function (item) {
            return item.validate();
        })).then(function (values) {
            return values.every(function (value) {
                return value;
            });
        });
    };

    Form.prototype.reset = function reset() {
        var items = this.get('items');
        items.forEach(function (item) {
            return item.reset();
        });
    };

    Form.prototype.getItem = function getItem(model) {
        var items = this.get('items');
        if (model === undefined) return items;
        return items.find(function (item) {
            return item.get('model') === model;
        });
    };

    Form.prototype.optional = function optional(item) {
        var value = item.get('value');
        return !Form.methods.required.call(this, value, item);
    };

    Form.prototype.submit = function submit(e) {
        var _this2 = this;

        e.preventDefault();
        this.validate().then(function (isValid) {
            if (isValid) {
                _this2.trigger('submit', e, _this2);
            }
        });
    };

    (0, _createClass3.default)(Form, [{
        key: 'template',
        get: function get() {
            return _form2.default;
        }
    }]);
    return Form;
}(_intact2.default), _class2.methods = _methods.methods, _class2.messages = _methods.messages, _class2.classNames = _methods.classNames, _class2.addMethod = _methods.addMethod, _temp), (_applyDecoratedDescriptor(_class.prototype, 'template', [_dec], (0, _getOwnPropertyDescriptor2.default)(_class.prototype, 'template'), _class.prototype)), _class));
exports.default = Form;
module.exports = exports['default'];