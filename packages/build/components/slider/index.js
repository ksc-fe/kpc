'use strict';

exports.__esModule = true;
exports.Slider = exports.default = undefined;

var _isNan = require('babel-runtime/core-js/number/is-nan');

var _isNan2 = _interopRequireDefault(_isNan);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _class, _temp; /**
                    * Created by sylvia on 2017/10/18.
                    */


var _intact = require('intact');

var _intact2 = _interopRequireDefault(_intact);

var _index = require('./index.vdt');

var _index2 = _interopRequireDefault(_index);

require('./index.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Slider = (_temp = _class = function (_Intact) {
    (0, _inherits3.default)(Slider, _Intact);

    function Slider() {
        (0, _classCallCheck3.default)(this, Slider);
        return (0, _possibleConstructorReturn3.default)(this, _Intact.apply(this, arguments));
    }

    Slider.prototype.defaults = function defaults() {
        return {
            max: 100,
            min: 0,
            value: 0,
            isRange: false,
            unit: '',
            isShowEnd: true,
            isShowInput: true,
            step: 1,

            _sliderValue: 0,
            _inputValue: 0,
            _isDragging: false,
            _isFirst: false,
            _isSecond: false
        };
    };

    Slider.prototype._init = function _init() {
        var _this2 = this;

        this._setFixedValue(this.get('value'));

        this.on("$change:_inputValue", function (c, val) {
            if (!_this2.get('_isDragging')) {
                _this2._setFixedValue(val);
            }
        });
    };

    Slider.prototype._beforeUpdate = function _beforeUpdate(lastVNode, nextVNode) {
        if (lastVNode && nextVNode) {
            this._setFixedValue(this.get('value'));
        }
    };

    Slider.prototype._setFixedValue = function _setFixedValue(value) {
        var fixedValue = this._getFixedValue(value);
        this.set({
            value: fixedValue,
            _inputValue: fixedValue,
            _sliderValue: fixedValue
        });
    };

    Slider.prototype._getFixedValue = function _getFixedValue(value) {
        var _get = this.get(),
            step = _get.step,
            max = _get.max,
            min = _get.min,
            isRange = _get.isRange;

        function fix(v) {
            if ((0, _isNan2.default)(Number(v))) {
                return min;
            } else if (v < min) {
                return min;
            } else if (v > max) {
                return max;
            } else {
                // for the accuracy
                return Number((Math.round(v / step) * step).toFixed(10));
            }
        }

        var fixedValue = void 0;
        if (isRange) {
            if (!Array.isArray(value)) {
                fixedValue = [min, min];
            } else {
                fixedValue = [fix(value[0]), fix(value[1])];
            }
        } else {
            fixedValue = fix(value);
        }

        return fixedValue;
    };

    Slider.prototype._clickWrapper = function _clickWrapper(e) {
        if (this.get('disabled') || this.get('_isDragging')) return;

        var currentPosition = e.clientX;
        var newValue = this._getSlidingValue(currentPosition);
        if (this.get('isRange')) {
            var leftBtnPosition = this.$sliderFirstBtn.getBoundingClientRect().left,
                rightBtnPosition = this.$sliderSecondBtn.getBoundingClientRect().left,
                valueArr = this.get('value').slice();
            if (Math.abs(leftBtnPosition - currentPosition) <= Math.abs(rightBtnPosition - currentPosition)) {
                valueArr[0] = newValue;
            } else {
                valueArr[1] = newValue;
            }
            newValue = valueArr;
        }

        this._setFixedValue(newValue);
    };

    Slider.prototype._getSlidingValue = function _getSlidingValue(pos) {
        var rect = this.$slider.getBoundingClientRect();
        var percent = (pos - rect.left) / rect.width;

        var _get2 = this.get(),
            max = _get2.max,
            min = _get2.min;

        var sliderWidth = max - min;

        if (percent <= 0) {
            return min;
        } else if (percent >= 1) {
            return max;
        } else {
            return min + sliderWidth * percent;
        }
    };

    Slider.prototype._onDrag = function _onDrag(indexFlag, e) {
        if (this.get('disabled')) return;

        if (indexFlag) {
            var value = this.get('value');
            this._min = value[0];
            this._max = value[1];
            if (indexFlag === '_isFirst') {
                this.set({
                    _isDragging: true,
                    _isFirst: true,
                    _isSecond: false
                });
            } else {
                this.set({
                    _isDragging: true,
                    _isFirst: false,
                    _isSecond: true
                });
            }
        } else {
            this.set('_isDragging', true);
        }

        this.__onRangeSliding = this._onRangeSliding.bind(this, indexFlag);
        this.__onRangeSlideEnd = this._onRangeSlideEnd.bind(this, indexFlag);
        window.addEventListener('mousemove', this.__onRangeSliding);
        window.addEventListener('mouseup', this.__onRangeSlideEnd);
    };

    Slider.prototype._onRangeSliding = function _onRangeSliding(indexFlag, e) {
        if (this.get('disabled')) return;

        var tempValue = this._getSlidingValue(e.clientX, this.get('_isDragging'));
        var fixedValue = void 0;
        if (indexFlag) {
            if (indexFlag === '_isFirst') {
                if (this.get('_isSecond')) return;
                tempValue = [Math.min(tempValue, this._max), Math.max(tempValue, this._max)];
            } else {
                if (this.get('_isFirst')) return;
                tempValue = [Math.min(tempValue, this._min), Math.max(tempValue, this._min)];
            }
        }

        fixedValue = this._getFixedValue(tempValue);

        this.set({
            value: fixedValue,
            _inputValue: fixedValue,
            _sliderValue: tempValue
        });
    };

    Slider.prototype._onRangeSlideEnd = function _onRangeSlideEnd(indexFlag, e) {
        if (this.get('disabled')) return;

        if (this.get('_isDragging')) {
            this.set('_isDragging', false, { silent: true });
            var newValue = this._getSlidingValue(e.clientX);
            if (indexFlag) {
                if (indexFlag === '_isFirst') {
                    if (this.get('_isSecond')) return;
                    this.set('_isFirst', false, { async: true });
                    newValue = [Math.min(newValue, this._max), Math.max(newValue, this._max)];
                } else {
                    if (this.get('_isFirst')) return;
                    this.set('_isSecond', false, { async: true });
                    newValue = [Math.min(newValue, this._min), Math.max(newValue, this._min)];
                }
            }

            this._setFixedValue(newValue);

            this.trigger('stop', this.get('value'));

            window.removeEventListener('mousemove', this.__onRangeSliding);
            window.removeEventListener('mouseup', this.__onRangeSlideEnd);
        }
    };

    Slider.prototype._stopPropagation = function _stopPropagation(e) {
        e.stopPropagation();
    };

    Slider.prototype._destory = function _destory() {
        this._onRangeSlideEnd();
    };

    (0, _createClass3.default)(Slider, [{
        key: 'template',
        get: function get() {
            return _index2.default;
        }
    }]);
    return Slider;
}(_intact2.default), _class.propTypes = {
    max: Number,
    min: Number,
    value: Number,
    isRange: Boolean,
    unit: String,
    isShowEnd: Boolean,
    isShowInput: Boolean,
    step: Number
}, _temp);
exports.default = Slider;
exports.Slider = Slider;