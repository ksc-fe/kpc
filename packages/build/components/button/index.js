'use strict';

exports.__esModule = true;
exports.ButtonGroup = exports.Button = exports.default = undefined;

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

var _dec, _desc, _value2, _class, _class2, _temp;

var _intact = require('intact');

var _intact2 = _interopRequireDefault(_intact);

var _index = require('./index.vdt');

var _index2 = _interopRequireDefault(_index);

var _group = require('./group');

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

var Button = (_dec = _intact2.default.template(), (_class = (_temp = _class2 = function (_Intact) {
    (0, _inherits3.default)(Button, _Intact);

    function Button() {
        (0, _classCallCheck3.default)(this, Button);
        return (0, _possibleConstructorReturn3.default)(this, _Intact.apply(this, arguments));
    }

    Button.prototype.defaults = function defaults() {
        return {
            type: 'default', // primary | warning | danger
            size: 'default', // small | mini
            icon: false,
            circle: false,
            loading: false,
            disabled: false,
            fluid: false,
            htmlType: 'button',
            tagName: 'button',
            tagProps: undefined,
            value: undefined,
            name: undefined,

            _value: undefined,
            _checkType: 'none'
        };
    };

    Button.prototype._mount = function _mount() {
        var parentVNode = this.parentVNode;

        while (parentVNode && parentVNode.tag !== _group2.default) {
            parentVNode = parentVNode.parentVNode;
        }

        if (parentVNode) {
            this.group = parentVNode.children;

            this.set({
                _checkType: this.group.get('checkType'),
                _value: this.group.get('value')
            });
        }
    };

    Button.prototype._beforeUpdate = function _beforeUpdate() {
        if (this.group) {
            this.set({
                _checkType: this.group.get('checkType'),
                _value: this.group.get('value')
            }, { silent: true });
        }
    };

    Button.prototype.showLoading = function showLoading() {
        this.set('loading', true);
    };

    Button.prototype.hideLoading = function hideLoading() {
        this.set('loading', false);
    };

    Button.prototype.disable = function disable() {
        this.set('disabled', true);
    };

    Button.prototype.enable = function enable() {
        this.set('disabled', false);
    };

    Button.prototype._onClick = function _onClick(e) {
        if (this.group) {
            var _get = this.get(),
                _checkType = _get._checkType,
                value = _get.value,
                _value = _get._value;

            if (_checkType === 'radio') {
                this.group.set('value', value);
            } else if (_checkType === 'checkbox') {
                if (!Array.isArray(_value)) {
                    _value = [];
                }
                _value = _value.slice(0);
                var index = _value.indexOf(value);
                if (!~index) {
                    _value.push(value);
                } else {
                    _value.splice(index, 1);
                }
                this.group.set('value', _value);
            }
        }
        e.component = this;
        this.trigger('click', e);
    };

    (0, _createClass3.default)(Button, [{
        key: 'template',
        get: function get() {
            return _index2.default;
        }
    }]);
    return Button;
}(_intact2.default), _class2.propTypes = {
    type: String,
    size: String,
    icon: Boolean,
    circle: Boolean,
    loading: Boolean,
    disabled: Boolean,
    fluid: Boolean,
    htmlType: String,
    tagName: [String, Function],
    name: String
}, _temp), (_applyDecoratedDescriptor(_class.prototype, 'template', [_dec], (0, _getOwnPropertyDescriptor2.default)(_class.prototype, 'template'), _class.prototype)), _class));
exports.default = Button;
exports.Button = Button;
exports.ButtonGroup = _group2.default;