import "core-js/modules/es.array.join";
import "core-js/modules/es.number.constructor";
import "core-js/modules/es.object.to-string";
import "core-js/modules/es.regexp.exec";
import "core-js/modules/es.regexp.to-string";
import "core-js/modules/es.string.split";
import _Reflect$construct from "@babel/runtime-corejs3/core-js/reflect/construct";
import _Object$getOwnPropertyDescriptor from "@babel/runtime-corejs3/core-js/object/get-own-property-descriptor";
import _findInstanceProperty from "@babel/runtime-corejs3/core-js/instance/find";
import _trimInstanceProperty from "@babel/runtime-corejs3/core-js/instance/trim";
import _sortInstanceProperty from "@babel/runtime-corejs3/core-js/instance/sort";
import _sliceInstanceProperty from "@babel/runtime-corejs3/core-js/instance/slice";
import _everyInstanceProperty from "@babel/runtime-corejs3/core-js/instance/every";
import _mapInstanceProperty from "@babel/runtime-corejs3/core-js/instance/map";
import _Array$isArray from "@babel/runtime-corejs3/core-js/array/is-array";
import _possibleConstructorReturn from "@babel/runtime-corejs3/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime-corejs3/helpers/getPrototypeOf";
import _inheritsLoose from "../../inheritsLoose";
import _defineProperty from "@babel/runtime-corejs3/helpers/defineProperty";
import _applyDecoratedDescriptor from "@babel/runtime-corejs3/helpers/applyDecoratedDescriptor";
import _Object$assign from "@babel/runtime-corejs3/core-js/object/assign";

var _dec, _class, _init, _class2, _temp;

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = _Reflect$construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !_Reflect$construct) return false; if (_Reflect$construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(_Reflect$construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import Intact from 'intact-vue';
import template from './index.vdt';
import '../../styles/kpc.css';
import './index.css';
import Calendar from './calendar';
import { getNowDate, isLT, isGT, getDateString, dispatchEvent, createDate, FORMATS } from './utils';
import { getTransition } from '../utils';
import * as shortcuts from './shortcuts';
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
dayjs.extend(customParseFormat);
var typeMap = {
  0: 'begin',
  1: 'end'
};
var isEqual = Intact.utils.isEqual;
var Datepicker = (_dec = Intact.template(), (_class = (_temp = _class2 = /*#__PURE__*/function (_Intact) {
  _inheritsLoose(Datepicker, _Intact);

  var _super = _createSuper(Datepicker);

  function Datepicker() {
    return _Intact.apply(this, arguments) || this;
  }

  var _proto = Datepicker.prototype;

  _proto.defaults = function defaults() {
    return {
      value: undefined,
      clearable: false,
      placeholder: undefined,
      disabled: false,
      size: 'default',
      type: 'date',
      // date | datetime
      range: false,
      transition: 'c-slidedown',
      shortcuts: undefined,
      container: undefined,
      disabledHours: false,
      disabledMinutes: false,
      disabledSeconds: false,
      multiple: false,
      format: undefined,
      valueFormat: undefined,
      showFormat: undefined,
      disabledDate: undefined,
      _value: undefined,
      // for range
      _rangeEndDate: undefined,
      _isShow: false
    };
  };

  _proto._init = function _init() {
    var _this = this;

    // proxy _value to value
    this.on('$change:_value', function (c, v) {
      if (_Array$isArray(v)) {
        // if only select one date for range, do not change value, #259
        if (v.length === 1 && _this.get('range')) {
          // trigger select start event for use to custom min/max date, #371
          _this.trigger('selectStart', _this._dateToString(v[0]));

          return;
        }

        v = _mapInstanceProperty(v).call(v, function (v) {
          return _this._dateToString(v);
        });
      } else if (v) {
        v = _this._dateToString(v);
      }

      _this.set('value', v);
    });
    this.on('$receive:value', function (c, v) {
      // conver to dayjs instance
      var hasValue = true;

      if (_Array$isArray(v)) {
        if (!v.length) hasValue = false;
        v = _mapInstanceProperty(v).call(v, function (v) {
          if (!v) hasValue = false;
          return _this._createDate(v);
        });
      } else if (v) {
        v = _this._createDate(v);
      } else {
        hasValue = false;
      } // we should set to the date panel, otherwise it will change the value
      // and set datetime to now, #436


      if (!hasValue) {
        var _this$refs = _this.refs,
            begin = _this$refs.begin,
            end = _this$refs.end;
        begin && begin.set('_isSelectTime', false);
        end && end.set('_isSelectTime', false);
      }

      _this.set('_value', v);
    });
  };

  _proto._createDate = function _createDate(value) {
    return dayjs(value, typeof value === 'string' ? this._getValueFormat() : undefined);
  };

  _proto._createDateByShowFormat = function _createDateByShowFormat(value) {
    return dayjs(value, this._getShowFormat());
  };

  _proto._dateToString = function _dateToString(value) {
    return value.format(this._getValueFormat());
  };

  _proto._getValueFormat = function _getValueFormat() {
    var _this$get = this.get(),
        format = _this$get.format,
        valueFormat = _this$get.valueFormat,
        type = _this$get.type;

    return valueFormat || format || FORMATS[type];
  };

  _proto._getShowFormat = function _getShowFormat() {
    var _this$get2 = this.get(),
        format = _this$get2.format,
        showFormat = _this$get2.showFormat,
        type = _this$get2.type;

    return showFormat || format || FORMATS[type];
  };

  _proto.onClear = function onClear(e) {
    e.stopPropagation(); // we should reset the flag to let user re-select date
    // and it also destroys Time panel and avoids it triggering change event, #419

    var _this$refs2 = this.refs,
        begin = _this$refs2.begin,
        end = _this$refs2.end;
    begin.set('_isSelectTime', false);
    end && end.set('_isSelectTime', false);
    this.set('_value', undefined);
    this._oldValue = undefined;
    this.trigger('change', undefined);
  };

  _proto._hide = function _hide() {
    if (this.get('range')) return;
    this.refs.calendar.hide();
  };

  _proto._onShow = function _onShow(c) {
    var feedback = c.get('_feedback');
    this.set('transition', getTransition(feedback));
  };

  _proto._onChangeShow = function _onChangeShow(c, v) {
    if (v) {
      var _this$refs3 = this.refs,
          begin = _this$refs3.begin,
          end = _this$refs3.end;
      begin && begin.initState();
      end && end.initState();
    }

    this.set('_isShow', v);
    this._hasSelectByArrowKey = false;
  };

  _proto._onChangeShowDate = function _onChangeShowDate(c, v) {
    var type = typeMap[c.get('_id')];
    var begin = this.refs.begin;
    var end = this.refs.end;

    if (type === 'begin') {
      if (!end) return;
      var endShowDate = end.getShowDate().date(1);

      if (v >= endShowDate) {
        var _endShowDate = v.add(1, 'month');

        end.setShowDate(_endShowDate);
      }
    } else {
      if (!begin) return;
      var beginShowDate = begin.getShowDate().date(1);

      if (v <= beginShowDate) {
        var _beginShowDate = v.subtract(1, 'momth');

        begin.setShowDate(_beginShowDate);
      }
    }
  };

  _proto._setBeginShowDate = function _setBeginShowDate(c) {
    var _ref = this.get('_value') || [],
        start = _ref[0];

    var date = start || getNowDate();
    c.set('_showDate', date);
  };

  _proto._setEndShowDate = function _setEndShowDate(c) {
    var _ref2 = this.get('_value') || [],
        start = _ref2[0],
        end = _ref2[1];

    var date; // if in the same month, show next month

    if (start && end) {
      if (start.isSame(end, 'month')) {
        end = end.add(1, 'month');
      }

      date = end;
    } else {
      date = getNowDate().add(1, 'month');
    }

    c.set('_showDate', date);
  };

  _proto._checkDateInRange = function _checkDateInRange(date, isOut) {
    var _ref3 = this.get('_value') || [],
        start = _ref3[0],
        end = _ref3[1];

    var _rangeEndDate = this.get('_rangeEndDate');

    if (start) {
      if (end) {
        return {
          'k-in-range': !isOut && isGT(date, start) && isLT(date, end)
        };
      } else if (_rangeEndDate) {
        return {
          'k-in-range': !isOut && isGT(date, start >= _rangeEndDate ? _rangeEndDate : start) && isLT(date, start <= _rangeEndDate ? _rangeEndDate : start)
        };
      }
    }
  };

  _proto._onChangeValueForRange = function _onChangeValueForRange(c, v) {
    var type = typeMap[c.get('_id')];
    var value = this.get('_value');
    if (v && value && v.length === value.length && _everyInstanceProperty(v).call(v, function (v, index) {
      return v.isSame([value.index]);
    }) || v === value) return;
    var _this$refs4 = this.refs,
        begin = _this$refs4.begin,
        end = _this$refs4.end; // if cancel all selected value of range, the length of v is 0

    if (v && v.length) {
      var length = v.length;

      if (length === 2) {
        // select the first begin/end date
        value = _sliceInstanceProperty(v).call(v, 0);
      } else {
        // select or re-select
        var last = v[length - 1]; // if we select the end time firstly
        // we should set the begin time automatically

        if (c.isSelectTime && type === 'end') {
          value = [begin.getShowDate(), last];
        } else {
          value = [last];
        }
      }
    } else {
      this.set('value', undefined);
    }

    if (!c.isSelectTime) {
      _sortInstanceProperty(value).call(value, function (a, b) {
        return a > b ? 1 : -1;
      });
    }

    this.set('_value', value); // when the ScrollSelect changed, the refs may not exist

    if (begin && end) {
      // if we have selected two dates, change to time picker
      if (value.length === 2) {
        if (this.get('type') === 'datetime') {
          begin.set('_isSelectTime', true, {
            async: true
          });
          end.set('_isSelectTime', true, {
            async: true
          });
        } else if (!c.isSelectTime) {
          this.refs.calendar.hide();
        }
      } else if (!c.isSelectTime) {
        begin.set('_isSelectTime', false, {
          async: true
        });
        end.set('_isSelectTime', false, {
          async: true
        });
      }
    }
  };

  _proto._highlightRangeDays = function _highlightRangeDays(date, isOut) {
    var _ref4 = this.get('_value') || [],
        start = _ref4[0],
        end = _ref4[1];

    if (start && !end) {
      this.set('_rangeEndDate', date);
    } else {
      this.set('_rangeEndDate', undefined);
    }
  };

  _proto._clearRangeEndDate = function _clearRangeEndDate() {
    this.set('_rangeEndDate', undefined);
  };

  _proto._onKeydown = function _onKeydown(e) {
    switch (e.keyCode) {
      case 13:
        e.preventDefault();

        if (!this._hasSelectByArrowKey) {
          this.refs.input.element.click();
        } else {
          this.refs.begin._selectFocusDate();
        }

        break;

      case 9:
        this.refs.calendar.hide();
        break;

      case 38:
      case 40:
      case 37:
      case 39:
        if (this.get('_isShow')) {
          this._hasSelectByArrowKey = true;

          this.refs.begin._onKeydown(e);
        }

        break;
    }
  };

  _proto._focus = function _focus() {
    this.refs.input.focus();
  }
  /**
   * don't trigger focusout event when datepicker layer is showing
   * trigger focusout when it hidden to make FormItem to validate it
   * #46
   */
  ;

  _proto.onInputFocusOut = function onInputFocusOut(e) {
    if (this.get('_isShow')) {
      e.stopPropagation();
    }
  };

  _proto._onHide = function _onHide() {
    // add _dispatch true to let Input knowns ignore this event
    // and don't endInput, #523
    dispatchEvent(this.refs.input.refs.input, 'focusout', {
      _dispatch: true
    });

    this._triggerChange();
  };

  _proto._setValue = function _setValue(value) {
    var type = this.get('type');

    if (this.get('range')) {
      this.set('_value', _mapInstanceProperty(value).call(value, function (value) {
        return dayjs(value);
      }));
    } else {
      this.set('_value', dayjs(value));
    }

    this.refs.calendar.hide();
  };

  _proto._format = function _format() {
    var _this2 = this;

    var _this$get3 = this.get(),
        _value = _this$get3._value,
        range = _this$get3.range;

    if (_Array$isArray(_value)) {
      // do not show if has not selected
      if (range && _value.length !== 2) return;
      _value = _mapInstanceProperty(_value).call(_value, function (v) {
        return v.format(_this2._getShowFormat());
      });
    } else if (_value) {
      _value = _value.format(this._getShowFormat());
    }

    return _Array$isArray(_value) ? range ? _value.join(' ~ ') : _value.join(', ') : _value;
  };

  _proto._confirm = function _confirm() {
    this.refs.calendar.hide();
  };

  _proto._onInput = function _onInput(e) {
    var _context;

    var value = _trimInstanceProperty(_context = e.target.value).call(_context);

    var _this$get4 = this.get(),
        multiple = _this$get4.multiple,
        range = _this$get4.range;

    if (multiple) {
      this._setValueOnInputForArray(value.split(','));
    } else if (range) {
      if (this._setValueOnInputForArray(value.split('~'))) {
        this._setBeginShowDate(this.refs.begin);

        this._setEndShowDate(this.refs.end);
      }
    } else {
      if (!value) {
        this.set('_value', '');
        return;
      }

      var date = this._createDateByShowFormat(value);

      if (!this._isInvalidDate(date, 'begin')) {
        this.set('_value', date);
      }
    }
  };

  _proto._setValueOnInputForArray = function _setValueOnInputForArray(values) {
    var _this3 = this;

    var _this$get5 = this.get(),
        range = _this$get5.range;

    var ret = [];
    var hasInvalid = false;
    var ref = 'begin';

    _findInstanceProperty(values).call(values, function (value, index) {
      value = _trimInstanceProperty(value).call(value);
      if (!value) return;

      var date = _this3._createDateByShowFormat(value);

      if (range && index === 1) ref = 'end';

      if (_this3._isInvalidDate(date, ref)) {
        return hasInvalid = true;
      }

      ret.push(date);
    });

    if (!hasInvalid) {
      this.set('_value', ret);
      return true;
    }

    return false;
  };

  _proto._isInvalidDate = function _isInvalidDate(date, ref) {
    var calendar = this.refs[ref];
    return !date.isValid() || calendar._isDisabledDate(date) || calendar._isDisabledTime(date);
  };

  _proto._onChange = function _onChange() {
    if (!this.get('_isShow')) {
      this._triggerChange();
    }

    this.update();
  };

  _proto._triggerChange = function _triggerChange() {
    var _this$get6 = this.get(),
        value = _this$get6.value;

    if (!isEqual(this._oldValue, value)) {
      this._oldValue = value;
      this.trigger('change', value);
    }
  };

  _proto._onWheel = function _onWheel() {
    this.refs.input.blur();
  };

  _proto._onFocus = function _onFocus() {
    this._oldValue = this.get('value');
  };

  return Datepicker;
}(Intact), _defineProperty(_class2, "template", template), _defineProperty(_class2, "getDateString", getDateString), _defineProperty(_class2, "createDate", createDate), _defineProperty(_class2, "events", {
  change: true
}), _defineProperty(_class2, "propTypes", {
  value: [String, Array, Date, Number],
  clearable: Boolean,
  disabled: Boolean,
  size: ['large', 'default', 'small', 'mini'],
  type: ['date', 'datetime', 'year', 'month'],
  range: Boolean,
  transition: String,
  shortcuts: Array,
  container: [Function, String],
  disabledHours: Boolean,
  disabledMinutes: Boolean,
  disabledSeconds: Boolean,
  multiple: Boolean,
  format: String,
  valueFormat: String,
  showFormat: String,
  minDate: [String, Date],
  maxDate: [String, Date],
  disabledDate: Function
}), _temp), (_applyDecoratedDescriptor(_class, "template", [_dec], (_init = _Object$getOwnPropertyDescriptor(_class, "template"), _init = _init ? _init.value : undefined, {
  enumerable: true,
  configurable: true,
  writable: true,
  initializer: function initializer() {
    return _init;
  }
}), _class)), _class));
export { Datepicker as default };

_Object$assign(Datepicker, shortcuts);

export { Datepicker };