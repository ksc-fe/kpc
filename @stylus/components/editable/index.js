'use strict';

exports.__esModule = true;
exports.Editable = exports.default = undefined;

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

var _index = require('./index.vdt');

var _index2 = _interopRequireDefault(_index);

require('../../styles/kpc.styl');

require('./index.styl');

var _utils = require('../utils');

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

var Editable = (_dec = _intact2.default.template(), (_class = (_temp = _class2 = function (_Intact) {
    (0, _inherits3.default)(Editable, _Intact);

    function Editable() {
        (0, _classCallCheck3.default)(this, Editable);
        return (0, _possibleConstructorReturn3.default)(this, _Intact.apply(this, arguments));
    }

    Editable.prototype.defaults = function defaults() {
        return {
            editing: false,
            value: undefined,
            required: true,
            validate: undefined,
            disabled: false,
            tip: '编辑',
            trim: true,
            invalid: false
        };
    };

    Editable.prototype._init = function _init() {
        this.initValue = this.get('value');
    };

    Editable.prototype._edit = function _edit() {
        this.set('editing', true);
        var input = this.refs.input;
        (0, _utils.selectInput)(input);
    };

    Editable.prototype._onBlur = function _onBlur(e) {
        this._setValue(e.target.value);
    };

    Editable.prototype._onKeydown = function _onKeydown(e) {
        switch (e.keyCode) {
            case 27:
                // esc 
                this.set('editing', false);
                break;
            case 13:
                // enter
                this._onBlur(e);
                break;
        }
    };

    Editable.prototype._setValue = function _setValue(value) {
        var _get = this.get(),
            validate = _get.validate,
            required = _get.required,
            trim = _get.trim;

        if (trim) value = value.trim();

        var valid = true;

        if (required && !value) {
            valid = false;
        } else if (validate && value) {
            if (typeof validate === 'function') {
                valid = validate.call(this, value);
            } else if (validate instanceof RegExp) {
                valid = validate.test(value);
            } else if (typeof validate === 'string') {
                valid = new RegExp(validate).test(value);
            }
        }

        if (!valid) {
            this.set('value', value, { silent: true });
            this.set('invalid', true);
            return this.trigger('error', this, value);
        }

        this.set({
            invalid: false,
            editing: false,
            value: value
        });
    };

    Editable.prototype.reset = function reset() {
        this.set({
            'value': this.initValue,
            'editing': false,
            'invalid': false
        });
    };

    (0, _createClass3.default)(Editable, [{
        key: 'template',
        get: function get() {
            return _index2.default;
        }
    }]);
    return Editable;
}(_intact2.default), _class2.propTypes = {
    editing: Boolean,
    required: Boolean,
    disabled: Boolean,
    tip: [String, Number],
    trim: Boolean,
    invalid: Boolean
}, _temp), (_applyDecoratedDescriptor(_class.prototype, 'template', [_dec], (0, _getOwnPropertyDescriptor2.default)(_class.prototype, 'template'), _class.prototype)), _class));
exports.default = Editable;
exports.Editable = Editable;