'use strict';

exports.__esModule = true;
exports.Switch = exports.default = undefined;

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

var Switch = (_dec = _intact2.default.template(), (_class = (_temp = _class2 = function (_Intact) {
    (0, _inherits3.default)(Switch, _Intact);

    function Switch() {
        (0, _classCallCheck3.default)(this, Switch);
        return (0, _possibleConstructorReturn3.default)(this, _Intact.apply(this, arguments));
    }

    Switch.prototype.defaults = function defaults() {
        return {
            name: undefined,
            on: undefined,
            off: undefined,
            value: false,
            trueValue: true,
            falseValue: false,
            width: undefined,
            height: undefined,
            size: 'default',
            disabled: false,

            _dragging: false
        };
    };

    Switch.prototype._init = function _init() {
        this._move = this._move.bind(this);
        this._dragEnd = this._dragEnd.bind(this);
    };

    Switch.prototype._dragStart = function _dragStart(e) {
        if (e.which !== 1) return;

        this._x = e.clientX;
        this._height = this.refs.bar.clientHeight;
        this._width = this.refs.bar.clientWidth;
        this._maxWidth = this.element.clientWidth;

        document.addEventListener('mousemove', this._move);
        document.addEventListener('mouseup', this._dragEnd);
    };

    Switch.prototype._move = function _move(e) {
        this.set('_dragging', true);

        var left = e.clientX - this._x;
        var width = Math.min(Math.max(this._height, this._width + left), this._maxWidth);
        this.refs.bar.style.width = width + 'px';
    };

    Switch.prototype._dragEnd = function _dragEnd(e) {
        this.set('_dragging', false);

        var bar = this.refs.bar;

        // treat mousedown -> mouseup as click
        if (this._x === e.clientX) {
            this._toggle();
        } else {
            var percent = (bar.clientWidth - this._height / 2) / this._maxWidth;

            if (!this.isChecked()) {
                if (percent >= 0.5) {
                    this.check();
                }
            } else if (percent < 0.5) {
                this.uncheck();
            }
            if (!this.isChecked() && this.get('width') && this.get('height')) {
                // if is set width and height
                bar.style.width = this.get('height') + 'px';
            } else {
                bar.style.width = '';
            }
        }

        document.removeEventListener('mousemove', this._move);
        document.removeEventListener('mouseup', this._dragEnd);
    };

    Switch.prototype._toggle = function _toggle() {
        if (this.get('disabled')) return;

        if (this.isChecked()) {
            this.uncheck();
        } else {
            this.check();
        }
    };

    Switch.prototype.isChecked = function isChecked() {
        return this.get('value') === this.get('trueValue');
    };

    Switch.prototype.check = function check() {
        this.set('value', this.get('trueValue'));
    };

    Switch.prototype.uncheck = function uncheck() {
        this.set('value', this.get('falseValue'));
    };

    Switch.prototype._handleClick = function _handleClick(e) {
        e.stopPropagation();
    };

    (0, _createClass3.default)(Switch, [{
        key: 'template',
        get: function get() {
            return _index2.default;
        }
    }]);
    return Switch;
}(_intact2.default), _class2.propTypes = {
    disabled: Boolean
}, _temp), (_applyDecoratedDescriptor(_class.prototype, 'template', [_dec], (0, _getOwnPropertyDescriptor2.default)(_class.prototype, 'template'), _class.prototype)), _class));
exports.default = Switch;
exports.Switch = Switch;