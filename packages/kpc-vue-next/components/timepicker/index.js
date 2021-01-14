import "core-js/modules/es.object.to-string";
import "core-js/modules/es.regexp.exec";
import "core-js/modules/es.regexp.to-string";
import "core-js/modules/es.string.split";
import _Reflect$construct from "@babel/runtime-corejs3/core-js/reflect/construct";
import _Object$getOwnPropertyDescriptor from "@babel/runtime-corejs3/core-js/object/get-own-property-descriptor";
import _sliceInstanceProperty from "@babel/runtime-corejs3/core-js/instance/slice";
import _parseInt from "@babel/runtime-corejs3/core-js/parse-int";
import _mapInstanceProperty from "@babel/runtime-corejs3/core-js/instance/map";
import _indexOfInstanceProperty from "@babel/runtime-corejs3/core-js/instance/index-of";
import _findInstanceProperty from "@babel/runtime-corejs3/core-js/instance/find";
import _forEachInstanceProperty from "@babel/runtime-corejs3/core-js/instance/for-each";
import _Object$assign from "@babel/runtime-corejs3/core-js/object/assign";
import _possibleConstructorReturn from "@babel/runtime-corejs3/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime-corejs3/helpers/getPrototypeOf";
import _inheritsLoose from "../../inheritsLoose";
import _defineProperty from "@babel/runtime-corejs3/helpers/defineProperty";
import _applyDecoratedDescriptor from "@babel/runtime-corejs3/helpers/applyDecoratedDescriptor";

var _dec, _class, _init, _class2, _temp;

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = _Reflect$construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !_Reflect$construct) return false; if (_Reflect$construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(_Reflect$construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import Intact from 'intact-vue';
import Datepicker from '../datepicker';
import template from './index.vdt';
import '../../styles/kpc.css';
import './index.css';
import { range, strPad } from '../utils';
import { getDateString } from '../datepicker/utils';
import dayjs from 'dayjs';
var PREFIX = getDateString(new Date()) + ' ';
var YEAR_FORMAT = 'YYYY-MM-DD ';
var TIME_FORMAT = 'HH:mm:ss';
var Timepicker = (_dec = Intact.template(), (_class = (_temp = _class2 = /*#__PURE__*/function (_Datepicker) {
  _inheritsLoose(Timepicker, _Datepicker);

  var _super = _createSuper(Timepicker);

  function Timepicker() {
    return _Datepicker.apply(this, arguments) || this;
  }

  var _proto = Timepicker.prototype;

  _proto.defaults = function defaults() {
    return _Object$assign({}, _Datepicker.prototype.defaults.call(this), {
      min: undefined,
      max: undefined,
      step: undefined,
      _options: undefined
    });
  };

  _proto._init = function _init() {
    var _context,
        _this = this;

    _Datepicker.prototype._init.call(this);

    _forEachInstanceProperty(_context = ['min', 'max']).call(_context, function (item) {
      _this.on("$receive:" + item, function (c, v) {
        if (v) {
          v = _this._createDate(v);
        }

        _this.set(item + "Date", v, {
          silent: true
        });
      });
    });

    var keys = ['step', 'min', 'max'];
    this.on('$receive', function (c, receivedKeys) {
      if (_findInstanceProperty(keys).call(keys, function (key) {
        return _indexOfInstanceProperty(receivedKeys).call(receivedKeys, key) > -1;
      })) {
        _this._options();
      }
    });
  };

  _proto._createDate = function _createDate(value, useDefaultFormat) {
    if (typeof value !== 'string') return value;
    return dayjs(PREFIX + value, YEAR_FORMAT + (useDefaultFormat ? TIME_FORMAT : this._getValueFormat()));
  };

  _proto._createDateByShowFormat = function _createDateByShowFormat(value) {
    return dayjs(PREFIX + value, YEAR_FORMAT + this._getShowFormat());
  };

  _proto._getValueFormat = function _getValueFormat() {
    var _this$get = this.get(),
        format = _this$get.format,
        valueFormat = _this$get.valueFormat;

    return valueFormat || format || TIME_FORMAT;
  };

  _proto._getShowFormat = function _getShowFormat() {
    var _this$get2 = this.get(),
        format = _this$get2.format,
        showFormat = _this$get2.showFormat;

    return showFormat || format || TIME_FORMAT;
  };

  _proto._options = function _options() {
    var _this$get3 = this.get(),
        step = _this$get3.step,
        minDate = _this$get3.minDate,
        maxDate = _this$get3.maxDate;

    var ret = [];

    if (step) {
      var maxValue = maxDate || this._createDate('23:59:59', true);

      var stepValue = this._parseTime(step);

      var value = minDate || this._createDate('00:00:00', true);

      for (;; value = value.add(stepValue, 'second')) {
        if (value <= maxValue) {
          ret.push({
            value: value.format(this._getValueFormat()),
            label: value.format(this._getShowFormat())
          });
          if (+value === +maxValue) break;
        } else if (ret.length) {
          // if the last value is less than maxValue
          // add the maxValue as the last one
          ret.push({
            value: maxValue.format(this._getValueFormat()),
            label: maxValue.format(this._getShowFormat())
          });
          break;
        } else {
          break;
        }
      }

      this.set('_options', ret);
    }
  };

  _proto._parseTime = function _parseTime(time) {
    var _context2;

    var _time$split$map = _mapInstanceProperty(_context2 = time.split(':')).call(_context2, function (item) {
      return _parseInt(item, 10);
    }),
        hours = _time$split$map[0],
        minutes = _time$split$map[1],
        seconds = _time$split$map[2];

    return (hours * 60 + (minutes || 0)) * 60 + (seconds || 0);
  };

  _proto._onChangeValue = function _onChangeValue(c, v) {
    if (!this.get('_isShow')) return;
    this.set('_value', v);
  };

  _proto.onClear = function onClear(e) {
    e.stopPropagation();
    this.set('_value', undefined);
    this._oldValue = undefined;
    this.trigger('change', undefined);
  };

  _proto._confirm = function _confirm() {
    if (this.get('multiple')) {
      var _context3;

      this.refs.begin.initState();

      var _value = _sliceInstanceProperty(_context3 = this.get('_value')).call(_context3, 0);

      _value.push(dayjs(this._createDate('00:00:00', true)));

      this.set('_value', _value);
    } else {
      _Datepicker.prototype._confirm.call(this);
    }
  };

  return Timepicker;
}(Datepicker), _defineProperty(_class2, "template", template), _defineProperty(_class2, "propTypes", _Object$assign({}, Datepicker.propTypes, {
  step: String
})), _temp), (_applyDecoratedDescriptor(_class, "template", [_dec], (_init = _Object$getOwnPropertyDescriptor(_class, "template"), _init = _init ? _init.value : undefined, {
  enumerable: true,
  configurable: true,
  writable: true,
  initializer: function initializer() {
    return _init;
  }
}), _class)), _class));
export { Timepicker as default };
export { Timepicker };