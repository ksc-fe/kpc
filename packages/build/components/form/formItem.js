'use strict';

exports.__esModule = true;
exports.default = undefined;

var _getOwnPropertyDescriptor = require('babel-runtime/core-js/object/get-own-property-descriptor');

var _getOwnPropertyDescriptor2 = _interopRequireDefault(_getOwnPropertyDescriptor);

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

var _assign = require('babel-runtime/core-js/object/assign');

var _assign2 = _interopRequireDefault(_assign);

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

var _formItem = require('./formItem.vdt');

var _formItem2 = _interopRequireDefault(_formItem);

var _form = require('./form');

var _form2 = _interopRequireDefault(_form);

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

var FormItem = (_dec = _intact2.default.template(), (_class = (_temp = _class2 = function (_Intact) {
    (0, _inherits3.default)(FormItem, _Intact);

    function FormItem() {
        (0, _classCallCheck3.default)(this, FormItem);
        return (0, _possibleConstructorReturn3.default)(this, _Intact.apply(this, arguments));
    }

    FormItem.prototype.defaults = function defaults() {
        return {
            value: undefined,
            model: undefined,
            rules: {},
            isValid: undefined,
            isDirty: false,
            message: '',
            messages: {},
            classNames: {},
            errorClassName: '',
            label: undefined,
            htmlFor: undefined,
            hideLabel: false
        };
    };

    FormItem.prototype._init = function _init() {
        this.initValue = this.get('value');
        this.on('$change:value', this.validateIfDirty);
        this.on('$change:rules', this.validateIfDirty);
    };

    FormItem.prototype._mount = function _mount() {
        if (!this.get('model')) return;

        var form = this.parentVNode;
        while (form && form.tag !== _form2.default) {
            form = form.parentVNode;
        }
        if (!form) {
            throw new Error('FormItem must be used as the descendant of Form');
        }
        this.form = form = form.children;
        var items = form.get('items');
        items.push(this);
    };

    FormItem.prototype.getRules = function getRules() {
        var formRules = this.form.get('rules.' + this.get('model'));
        var selfRules = this.get('rules');

        return (0, _assign2.default)({}, formRules, selfRules);
    };

    FormItem.prototype.getMessage = function getMessage(name) {
        var defaultMessages = _form2.default.messages;
        var customMessages = this.get('messages');
        var message = customMessages[name] || defaultMessages[name];

        if (typeof message === 'function') {
            var rules = this.getRules();
            return message.call(this.form, this.get('value'), this, rules[name]);
        }

        return message;
    };

    FormItem.prototype.getClassName = function getClassName(name) {
        var defaultClassNames = _form2.default.classNames;
        var customClassNames = this.get('classNames');
        var className = customClassNames[name] || defaultClassNames[name];

        if (typeof className === 'function') {
            var rules = this.getRules();
            return className.call(this.form, this.get('value'), this, rules[name]);
        }

        return className;
    };

    FormItem.prototype.validate = function validate() {
        var _this2 = this;

        if (!this.get('model')) return;

        this._cancel();

        var rules = this.getRules();
        var promises = [];
        var keys = [];

        // check required firstly
        var required = _form2.default.methods.required.call(this.form, this.get('value'), this);
        if (rules.required) {
            promises.push(required);
            keys.push('required');
        }

        // if the field is not empty, then check other rules
        if (required) {
            for (var key in rules) {
                var rule = rules[key];
                if (key === 'required' || rule === false) continue;
                var fn = void 0;
                if (typeof rule === 'function') {
                    fn = rule;
                } else {
                    fn = _form2.default.methods[key];
                    if (!fn) {
                        console.warn('Can not find validate method: ' + key);
                        continue;
                    }
                }
                promises.push(fn.call(this.form, this.get('value'), this, rules[key]));
                keys.push(key);
            }
        }

        var p = this.promise = _promise2.default.all(promises).then(function (values) {
            for (var index = 0; index < values.length; index++) {
                if (values[index] !== true) {
                    return [false, values[index] || _this2.getMessage(keys[index]), _this2.getClassName(keys[index])];
                }
            }
            return [true, '', null];
        }, function (err) {
            var message = void 0;
            var className = void 0;
            if (typeof err === 'string') {
                message = err;
            } else if (err) {
                message = err.message || _this2.getMessage(err.name);
                className = err.className || _this2.getClassName(err.name);
            }
            return [false, message, className];
        }).then(function (_ref) {
            var isValid = _ref[0],
                message = _ref[1],
                className = _ref[2];

            if (p.cancelled) return;
            _this2.set({
                isDirty: true,
                isValid: isValid,
                message: message,
                errorClassName: className
            });
            return isValid;
        });

        return p;
    };

    FormItem.prototype.validateIfDirty = function validateIfDirty() {
        if (this.get('isDirty')) {
            this.validate();
        }
    };

    FormItem.prototype.reset = function reset() {
        this._cancel();

        this.set({
            isDirty: false,
            isValid: undefined,
            value: Array.isArray(this.get('value')) ? [].concat(this.initValue) : this.initValue
        });
    };

    FormItem.prototype._dirty = function _dirty() {
        if (!this.get('model')) return;
        if (this.get('isDirty')) return;

        // for vue value will changed after event
        if (this.$nextTick) {
            this.$nextTick(this.validate);
        } else {
            this.validate();
        }
    };

    FormItem.prototype._cancel = function _cancel() {
        // cancel the last promise
        if (this.promise) {
            this.promise.cancelled = true;
        }
    };

    FormItem.prototype._destroy = function _destroy() {
        if (!this.get('model')) return;
        var items = this.form.get('items');
        items.splice(items.indexOf(this), 1);
        // this.reset();
    };

    (0, _createClass3.default)(FormItem, [{
        key: 'template',
        get: function get() {
            return _formItem2.default;
        }
    }]);
    return FormItem;
}(_intact2.default), _class2.propTypes = {
    hideLabel: Boolean
}, _temp), (_applyDecoratedDescriptor(_class.prototype, 'template', [_dec], (0, _getOwnPropertyDescriptor2.default)(_class.prototype, 'template'), _class.prototype)), _class));
exports.default = FormItem;
module.exports = exports['default'];