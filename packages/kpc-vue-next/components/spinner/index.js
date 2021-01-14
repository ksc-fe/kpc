import "core-js/modules/es.number.constructor";
import "core-js/modules/es.number.to-fixed";
import "core-js/modules/es.object.to-string";
import "core-js/modules/es.regexp.constructor";
import "core-js/modules/es.regexp.exec";
import "core-js/modules/es.regexp.to-string";
import "core-js/modules/es.string.replace";
import _Array$isArray from "@babel/runtime-corejs3/core-js/array/is-array";
import _Object$keys from "@babel/runtime-corejs3/core-js/object/keys";
import _mapInstanceProperty from "@babel/runtime-corejs3/core-js/instance/map";
import _sortInstanceProperty from "@babel/runtime-corejs3/core-js/instance/sort";
import _Reflect$construct from "@babel/runtime-corejs3/core-js/reflect/construct";
import _trimInstanceProperty from "@babel/runtime-corejs3/core-js/instance/trim";
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

import Intact from 'intact-vue';
import template from './index.vdt';
import '../../styles/kpc.css';
import './index.css';
import { minMaxStep } from '../utils';
var numberReg = /^(-|\+)?\d+(\.(\d+)?)?$/;

var Spinner = /*#__PURE__*/function (_Intact) {
  _inheritsLoose(Spinner, _Intact);

  var _super = _createSuper(Spinner);

  function Spinner() {
    return _Intact.apply(this, arguments) || this;
  }

  var _proto = Spinner.prototype;

  _proto.defaults = function defaults() {
    return {
      disabled: false,
      value: 0,
      max: Number.POSITIVE_INFINITY,
      min: Number.NEGATIVE_INFINITY,
      step: 1,
      size: 'default',
      vertical: false,
      precision: undefined,
      formatter: undefined,
      parser: undefined,
      prefix: undefined,
      suffix: undefined,
      width: undefined,
      forceStep: false,
      _value: 0
    };
  };

  _proto._init = function _init() {
    var _this = this,
        _context;

    // make sure the min/max/step is valid
    var defaults = this.defaults();
    this.on('$receive:step', function (c, v) {
      _this._getStep = parseStep(v, defaults.step);
    });

    _forEachInstanceProperty(_context = ['min', 'max'
    /* , 'step' */
    ]).call(_context, function (item) {
      _this.on("$receive:" + item, function (c, v) {
        if (typeof v !== 'number') {
          _this.set(item, defaults[item], {
            async: true
          });
        }
      });
    });

    this.on('$receive', function (c, keys) {
      var _context2;

      if (_findInstanceProperty(_context2 = ['max', 'min', 'precision', 'value', 'formatter', 'parser', 'prefix', 'suffix']).call(_context2, function (key) {
        return ~_indexOfInstanceProperty(keys).call(keys, key);
      })) {
        _this._fixValue();
      }
    });
  } // default function to get step
  ;

  _proto._getStep = function _getStep() {
    return [this.get('step'), this.get('min')];
  };

  _proto._fixValue = function _fixValue(value, fallbackValue, shouldTriggerChange) {
    if (value === void 0) {
      value = this.get('value');
    }

    if (fallbackValue === void 0) {
      fallbackValue = 0;
    }

    var ret = this._getFixedValue(value, fallbackValue);

    this.set(ret);

    if (shouldTriggerChange && ret.value !== this.oldValue) {
      this.trigger('change', ret.value);
    }
  };

  _proto._getFixedValue = function _getFixedValue(value, fallbackValue) {
    if (value === void 0) {
      value = this.get('value');
    }

    if (fallbackValue === void 0) {
      fallbackValue = 0;
    }

    var _this$get = this.get(),
        precision = _this$get.precision,
        max = _this$get.max,
        forceStep = _this$get.forceStep;

    var _this$_getStep = this._getStep(value),
        step = _this$_getStep[0],
        min = _this$_getStep[1];

    if (min > max) {
      Intact.utils.error(new Error("[Spinner] min must less than or equal to max, but got min: " + min + " max: " + max));
      return {
        _value: this._format(0),
        value: 0
      };
    }

    value = this._parse(value);
    var originValue = this.get('value');

    if (value == null || !numberReg.test(value)) {
      value = fallbackValue;
    }

    value = minMaxStep(Number(value), min, max, forceStep && step);
    var _value = value;

    if (precision != null) {
      _value = value.toFixed(precision);
      value = +_value;
    }

    _value = this._format(_value);
    return {
      _value: _value,
      value: value
    };
  };

  _proto._parse = function _parse(value) {
    var _this$get2 = this.get(),
        parser = _this$get2.parser,
        prefix = _this$get2.prefix,
        suffix = _this$get2.suffix;

    value = String(value);

    if (!parser) {
      if (prefix) {
        value = value.replace(new RegExp("^" + prefix), '');
      }

      if (suffix) {
        value = value.replace(new RegExp(suffix + "$"), '');
      }

      return value;
    }

    return parser(value);
  };

  _proto._format = function _format(value) {
    var _this$get3 = this.get(),
        formatter = _this$get3.formatter,
        prefix = _this$get3.prefix,
        suffix = _this$get3.suffix;

    if (!formatter) {
      return "" + (prefix || '') + value + (suffix || '');
    }

    return formatter(value);
  };

  _proto._increase = function _increase(e) {
    var _this$get4 = this.get(),
        value = _this$get4.value;

    var _this$_getStep2 = this._getStep(value, 'increase'),
        step = _this$_getStep2[0];

    this.oldValue = value;

    this._fixValue(Number((+value + step).toFixed(10)), 0, true);
  };

  _proto._decrease = function _decrease(e) {
    var _this$get5 = this.get(),
        value = _this$get5.value;

    var _this$_getStep3 = this._getStep(value, 'decrease'),
        step = _this$_getStep3[0];

    this.oldValue = value;

    this._fixValue(Number((+value - step).toFixed(10)), 0, true);
  };

  _proto._disableDecrease = function _disableDecrease() {
    var _this$get6 = this.get(),
        value = _this$get6.value,
        min = _this$get6.min,
        disabled = _this$get6.disabled; // enable btn as long as the value is greater than min
    // otherwise we can't set the boundary value, #484


    return disabled || +value <= min; // || Number((min + step).toFixed(10)) > value;
  };

  _proto._disableIncrease = function _disableIncrease() {
    var _this$get7 = this.get(),
        value = _this$get7.value,
        max = _this$get7.max,
        disabled = _this$get7.disabled;

    return disabled || +value >= max; // || Number((max - step).toFixed(10)) < value;
  };

  _proto._changeValue = function _changeValue(e) {
    var _context3;

    this._fixValue(_trimInstanceProperty(_context3 = e.target.value).call(_context3), this.get('value'), true);
  } // we need change value as long as the input is valid, #213
  ;

  _proto._onInput = function _onInput(e) {
    var val = e.target.value;

    var _this$_getFixedValue = this._getFixedValue(_trimInstanceProperty(val).call(val), this.get('value')),
        value = _this$_getFixedValue.value;

    var data = {
      _value: val,
      value: value
    }; // if (_value === val) {
    // data.value = value;
    // }

    this.set(data);
  } // preserve old value on focus to detect we should trigger change event or not
  ;

  _proto._onFocus = function _onFocus() {
    this.oldValue = this.get('value');
  };

  _createClass(Spinner, [{
    key: "template",
    get: function get() {
      return template;
    }
  }]);

  return Spinner;
}(Intact);

_defineProperty(Spinner, "propTypes", {
  disabled: Boolean,
  value: [Number, String],
  max: Number,
  min: Number,
  step: [Number, Object, Function],
  size: ['large', 'default', 'small', 'mini'],
  vertical: Boolean,
  precision: Number,
  formatter: Function,
  parser: Function,
  prefix: String,
  suffix: String,
  width: [String, Number],
  forceStep: Boolean
});

_defineProperty(Spinner, "events", {
  change: true
});

export { Spinner as default };

function _parseStep(step, defaultValue) {
  var _context4, _context5;

  var type = typeof step;

  switch (type) {
    case 'number':
      return function () {
        return step;
      };

    case 'object':
      var breakpoints = _sortInstanceProperty(_context4 = _mapInstanceProperty(_context5 = _Object$keys(step)).call(_context5, function (i) {
        if (i === '$') {
          return {
            key: i,
            value: Number.POSITIVE_INFINITY
          };
        }

        return {
          key: i,
          value: Number(i)
        };
      })).call(_context4, function (a, b) {
        return a.value - b.value;
      });

      return function (value, direction) {
        for (var i = 0; i < breakpoints.length; i++) {
          var breakpoint = breakpoints[i];
          var prevBreakpoint = breakpoints[i - 1];

          if (value < breakpoint.value) {
            return [step[breakpoint.key], prevBreakpoint && prevBreakpoint.value];
          }

          if (value === breakpoint.value) {
            // we must detect the direction when it is a breakpoint
            if (direction === 'increase') {
              var nextBreakpoint = breakpoints[i + 1];

              if (nextBreakpoint !== undefined) {
                return [step[nextBreakpoint.key], breakpoint.value];
              }
            }

            return [step[breakpoint.key], prevBreakpoint && prevBreakpoint.value];
          }
        }

        return [defaultValue, undefined];
      };

    case 'function':
      return step;

    default:
      return function () {
        return defaultValue;
      };
  }
}

export function parseStep(step, defaultValue) {
  var getStep = _parseStep(step, defaultValue);

  return function (value, direction) {
    var step = getStep(value, direction);
    var min = this.get('min');

    if (_Array$isArray(step)) {
      return [step[0], step[1] === undefined ? min : Math.max(min, step[1])];
    } else {
      return [step, min];
    }
  };
}
export { Spinner };