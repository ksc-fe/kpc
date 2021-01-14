import "core-js/modules/es.number.constructor";
import "core-js/modules/es.object.to-string";
import "core-js/modules/es.regexp.to-string";
import _Reflect$construct from "@babel/runtime-corejs3/core-js/reflect/construct";
import _bindInstanceProperty from "@babel/runtime-corejs3/core-js/instance/bind";
import _Number$isNaN from "@babel/runtime-corejs3/core-js/number/is-nan";
import _Array$isArray from "@babel/runtime-corejs3/core-js/array/is-array";
import _indexOfInstanceProperty from "@babel/runtime-corejs3/core-js/instance/index-of";
import _findInstanceProperty from "@babel/runtime-corejs3/core-js/instance/find";
import _forEachInstanceProperty from "@babel/runtime-corejs3/core-js/instance/for-each";
import _createClass from "@babel/runtime-corejs3/helpers/createClass";
import _possibleConstructorReturn from "@babel/runtime-corejs3/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime-corejs3/helpers/getPrototypeOf";
import _inheritsLoose from "../../inheritsLoose";
import _defineProperty from "@babel/runtime-corejs3/helpers/defineProperty";

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = _Reflect$construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !_Reflect$construct) return false; if (_Reflect$construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(_Reflect$construct(Date, [], function () {})); return true; } catch (e) { return false; } }

/**
 * Created by sylvia on 2017/10/18.
 */
import Intact from 'intact-vue';
import template from './index.vdt';
import '../../styles/kpc.css';
import './index.css';
import { minMaxStep, isNullOrUndefined } from '../utils';
import { parseStep } from '../spinner';
var isEqual = Intact.utils.isEqual;

var Slider = /*#__PURE__*/function (_Intact) {
  _inheritsLoose(Slider, _Intact);

  var _super = _createSuper(Slider);

  function Slider() {
    return _Intact.apply(this, arguments) || this;
  }

  var _proto = Slider.prototype;

  _proto.defaults = function defaults() {
    return {
      max: 100,
      min: 0,
      value: undefined,
      isRange: false,
      unit: '',
      isShowEnd: true,
      isShowInput: true,
      step: 1,
      isShowStop: false,
      marks: undefined,
      disabled: false,
      showTooltip: false,
      always: false,
      animate: true,
      tooltipProps: undefined,
      _sliderValue: 0,
      _inputValue: 0,
      _isDragging: false,
      _isFirst: false,
      _isSecond: false
    };
  };

  _proto._init = function _init() {
    var _this = this,
        _context;

    this.on("$change:_inputValue", function (c, val) {
      if (!_this.get('_isDragging')) {
        _this._setFixedValue(val, true);
      }
    }); // make sure the min/max/step is valid

    var defaults = this.defaults();
    this.on('$receive:step', function (c, v) {
      _this._getStep = parseStep(v, defaults.step);
    });

    _forEachInstanceProperty(_context = ['min', 'max']).call(_context, function (item) {
      _this.on("$receive:" + item, function (c, v) {
        if (typeof v !== 'number') {
          _this.set(item, defaults[item], {
            async: true
          });
        }
      });
    });

    var needFixedKeys = ['min', 'max', 'step', 'value'];
    this.on('$receive', function (c, keys) {
      if (!_this.get('_isDragging') && _findInstanceProperty(needFixedKeys).call(needFixedKeys, function (key) {
        return _indexOfInstanceProperty(keys).call(keys, key) > -1;
      })) {
        _this._setFixedValue(_this.get('value'));
      }
    }); // trigger change event expect dragging
    // we will also trigger the event on keyup and dragend

    this.on('$change:value', function (c, v) {
      if (!_this.get('_isDragging')) {
        _this.trigger('change', v);
      }
    }); // position the tooltip after value changed

    this.on('$changed:value', function () {
      if (_this.get('always')) {
        _this._showTooltip();
      }
    });
  } // default function to get step
  ;

  _proto._getStep = function _getStep() {
    return [this.get('step'), this.get('min')];
  };

  _proto._setFixedValue = function _setFixedValue(value, isFromSpinner) {
    var fixedValue = this._getFixedValue(value);

    this.set({
      value: fixedValue,
      _inputValue: isFromSpinner ? value : fixedValue,
      _sliderValue: fixedValue
    });
  };

  _proto._getFixedValue = function _getFixedValue(value) {
    var _this$get = this.get(),
        min = _this$get.min,
        isRange = _this$get.isRange;

    var fixedValue;

    if (isRange) {
      if (!_Array$isArray(value)) {
        fixedValue = [min, min];
      } else {
        fixedValue = [this._fix(value[0]), this._fix(value[1])];
      }
    } else {
      fixedValue = this._fix(value);
    }

    return fixedValue;
  };

  _proto._fix = function _fix(v) {
    var _this$get2 = this.get(),
        max = _this$get2.max;

    var _this$_getStep = this._getStep(v),
        step = _this$_getStep[0],
        min = _this$_getStep[1];

    if (min > max) {
      Intact.utils.error(new Error("[Slider] min must less than or equal to max, but got min: " + min + " max: " + max));
      return 0;
    }

    if (_Number$isNaN(Number(v))) return min;
    return minMaxStep(v, min, max, step);
  };

  _proto._clickWrapper = function _clickWrapper(e) {
    if (this.get('disabled') || this.get('_isDragging')) return;
    var currentPosition = e.clientX;

    var newValue = this._getSlidingValue(currentPosition);

    if (this.get('isRange')) {
      newValue = this._generateRangeValue(newValue);
    }

    this._setFixedValue(newValue);
  };

  _proto._generateRangeValue = function _generateRangeValue(v) {
    var _this$get3 = this.get('value'),
        min = _this$get3[0],
        max = _this$get3[1];

    if (Math.abs(min - v) <= Math.abs(max - v)) {
      return [v, max];
    } else {
      return [min, v];
    }
  };

  _proto._getSlidingValue = function _getSlidingValue(pos) {
    var rect = this.$slider.getBoundingClientRect();
    var percent = (pos - rect.left) / rect.width;

    var _this$get4 = this.get(),
        max = _this$get4.max,
        min = _this$get4.min;

    var sliderWidth = max - min;

    if (percent <= 0) {
      return min;
    } else if (percent >= 1) {
      return max;
    } else {
      return min + sliderWidth * percent;
    }
  };

  _proto._onDrag = function _onDrag(indexFlag, e) {
    var _context2, _context3;

    if (this.get('disabled')) return;
    this._isDragging = true; // when start drag, the element has been focusin
    // so we need not handle it here

    this.__onRangeSliding = _bindInstanceProperty(_context2 = this._onRangeSliding).call(_context2, this, indexFlag);
    this.__onRangeSlideEnd = _bindInstanceProperty(_context3 = this._onRangeSlideEnd).call(_context3, this, indexFlag);
    window.addEventListener('mousemove', this.__onRangeSliding);
    window.addEventListener('mouseup', this.__onRangeSlideEnd);
  };

  _proto._onRangeSliding = function _onRangeSliding(indexFlag, e) {
    var tempValue = this._getSlidingValue(e.clientX, this.get('_isDragging'));

    var fixedValue;
    tempValue = this._getTempValue(tempValue, indexFlag, this._min, this._max, indexFlag === '_isFirst');
    fixedValue = this._getFixedValue(tempValue);
    this.set({
      value: fixedValue,
      _inputValue: fixedValue,
      _sliderValue: tempValue
    });

    this._showTooltip();
  };

  _proto._showTooltip = function _showTooltip() {
    if (!this.get('showTooltip')) return;
    var _this$refs = this.refs,
        tooltip1 = _this$refs.tooltip1,
        tooltip2 = _this$refs.tooltip2;
    tooltip1.show();
    tooltip1.position();

    if (tooltip2) {
      tooltip2.show();
      tooltip2.position();
    }
  };

  _proto._hideTooltip = function _hideTooltip() {
    var _this$refs2 = this.refs,
        tooltip1 = _this$refs2.tooltip1,
        tooltip2 = _this$refs2.tooltip2;
    tooltip1.hide();

    if (tooltip2) {
      tooltip2.hide();
    }
  };

  _proto._getTempValue = function _getTempValue(value, isRange, min, max, isFirst) {
    if (isRange) {
      if (isFirst) {
        return [Math.min(value, max), Math.max(value, max)];
      } else {
        return [Math.min(value, min), Math.max(value, min)];
      }
    }

    return value;
  };

  _proto._onRangeSlideEnd = function _onRangeSlideEnd(indexFlag, e) {
    if (this.get('_isDragging')) {
      this.set('_isDragging', false, {
        async: true
      });

      var newValue = this._getSlidingValue(e.clientX);

      if (indexFlag) {
        if (indexFlag === '_isFirst') {
          this.$sliderFirstBtn.blur();
          this.set('_isFirst', false, {
            async: true
          });
          newValue = [Math.min(newValue, this._max), Math.max(newValue, this._max)];
        } else {
          this.$sliderSecondBtn.blur();
          this.set('_isSecond', false, {
            async: true
          });
          newValue = [Math.min(newValue, this._min), Math.max(newValue, this._min)];
        }
      } else {
        this.$sliderFirstBtn.blur();
      }

      this._setFixedValue(newValue); // this.trigger('stop', this.get('value'));


      this._triggerChangeEvent();

      window.removeEventListener('mousemove', this.__onRangeSliding);
      window.removeEventListener('mouseup', this.__onRangeSlideEnd);
      this._isDragging = false;
    }
  };

  _proto._onFocusin = function _onFocusin(indexFlag, e) {
    if (this.get('disabled')) return; // when mouse down the handle will focus too
    // if the focusin is invoked by mousedown for dragging
    // let the handle element blur to ignore keyboard operations
    // but we also need to set the states

    if (this._isDragging) {
      e.target.blur();
    } // remain the old value to detect change to trigger change event


    this._oldValue = this.get('value');

    if (this.get('isRange')) {
      var value = this.get('value');
      this._min = value[0];
      this._max = value[1];

      if (indexFlag === '_isFirst') {
        this._initValue = this._min;
        this.set({
          _isDragging: true,
          _isFirst: true,
          _isSecond: false
        });
      } else {
        this._initValue = this._max;
        this.set({
          _isDragging: true,
          _isFirst: false,
          _isSecond: true
        });
      }
    } else {
      this.set('_isDragging', true);
    }

    this._showTooltip();
  };

  _proto._onFocusout = function _onFocusout(indexFlag) {
    if (this.get('disabled') || this._isDragging) return;

    if (this.get('isRange')) {
      if (indexFlag === '_isFirst') {
        this.set('_isFirst', false, {
          async: true
        });
      } else {
        this.set('_isSecond', false, {
          async: true
        });
      }
    }

    this.set('_isDragging', false, {
      async: true
    });

    this._hideTooltip();
  };

  _proto._onKeydown = function _onKeydown(indexFlag, e) {
    if (this.get('disabled')) return;
    var value = this.get('value');

    if (e.keyCode === 37) {
      // left
      var _this$_getStep2 = this._getStep(value, 'decrease'),
          step = _this$_getStep2[0];

      this._setValue(indexFlag, -step);
    } else if (e.keyCode === 39) {
      // right
      var _this$_getStep3 = this._getStep(value, 'increase'),
          _step = _this$_getStep3[0];

      this._setValue(indexFlag, _step);
    }
  } // trigger change event when keyup
  ;

  _proto._onKeyUp = function _onKeyUp(_ref) {
    var keyCode = _ref.keyCode;

    if (keyCode === 37 || keyCode === 39) {
      this._triggerChangeEvent();
    }
  };

  _proto._triggerChangeEvent = function _triggerChangeEvent() {
    var _this$get5 = this.get(),
        value = _this$get5.value;

    if (!isEqual(this._oldValue, value)) {
      this._oldValue = value;
      this.trigger('change', value);
    }
  };

  _proto._setValue = function _setValue(indexFlag, step) {
    var value = this.get('value');

    if (!this.get('isRange')) {
      this._setFixedValue(value + step);
    } else {
      this._initValue += step;
      this._initValue = this._fix(this._initValue);

      var _value = this._getTempValue(this._initValue, indexFlag, this._min, this._max, indexFlag === '_isFirst');

      this._setFixedValue(_value); // if overstep the boundary, reverse it


      if (indexFlag === '_isFirst') {
        if (this._initValue > this._max) {
          this.$sliderFirstBtn.blur();
          this.$sliderSecondBtn.focus();
        }
      } else if (indexFlag === '_isSecond') {
        if (this._initValue < this._min) {
          this.$sliderSecondBtn.blur();
          this.$sliderFirstBtn.focus();
        }
      }
    }

    this._showTooltip();
  } // only change the input value after change event tiggered, #294
  ;

  _proto._onChange = function _onChange() {
    this.set('_inputValue', this.get('value'));
  };

  _proto._setOneValue = function _setOneValue(v) {
    if (!this.get('isRange')) {
      this._setFixedValue(v);
    } else {
      this._setFixedValue(this._generateRangeValue(v));
    }
  };

  _proto._stopPropagation = function _stopPropagation(e) {
    /* istanbul ignore next */
    e.stopPropagation();
  };

  _proto._destroy = function _destroy() {
    this._onRangeSlideEnd();
  };

  _createClass(Slider, [{
    key: "template",
    get: function get() {
      return template;
    }
  }]);

  return Slider;
}(Intact);

_defineProperty(Slider, "propTypes", {
  max: Number,
  min: Number,
  value: [Number, Array],
  isRange: Boolean,
  unit: String,
  isShowEnd: Boolean,
  isShowInput: Boolean,
  step: [Number, Object, Function],
  isShowStop: Boolean,
  marks: Object,
  disabled: Boolean,
  showTooltip: Boolean,
  always: Boolean,
  animate: Boolean,
  tooltipProps: Object
});

_defineProperty(Slider, "events", {
  change: true
});

_defineProperty(Slider, "blocks", ['tooltip']);

export { Slider as default };
export { Slider };