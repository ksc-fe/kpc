import "core-js/modules/es.object.to-string";
import "core-js/modules/es.regexp.to-string";
import _Reflect$construct from "@babel/runtime-corejs3/core-js/reflect/construct";
import _Object$getOwnPropertyDescriptor from "@babel/runtime-corejs3/core-js/object/get-own-property-descriptor";
import _spliceInstanceProperty from "@babel/runtime-corejs3/core-js/instance/splice";
import _findIndexInstanceProperty from "@babel/runtime-corejs3/core-js/instance/find-index";
import _sliceInstanceProperty from "@babel/runtime-corejs3/core-js/instance/slice";
import _Array$isArray from "@babel/runtime-corejs3/core-js/array/is-array";
import _possibleConstructorReturn from "@babel/runtime-corejs3/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime-corejs3/helpers/getPrototypeOf";
import _inheritsLoose from "../../inheritsLoose";
import _defineProperty from "@babel/runtime-corejs3/helpers/defineProperty";
import _applyDecoratedDescriptor from "@babel/runtime-corejs3/helpers/applyDecoratedDescriptor";

var _dec, _class, _init, _class2, _temp;

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = _Reflect$construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !_Reflect$construct) return false; if (_Reflect$construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(_Reflect$construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import Intact from 'intact-vue';
import template from './calendar.vdt';
import { strPad, range, toggleArray } from '../utils';
import { getNowDate, getDateString, getTimeString, isEqual, createDate, isGT, isLT } from './utils';
import dayjs from 'dayjs';
var Calendar = (_dec = Intact.template(), (_class = (_temp = _class2 = /*#__PURE__*/function (_Intact) {
  _inheritsLoose(Calendar, _Intact);

  var _super = _createSuper(Calendar);

  function Calendar() {
    return _Intact.apply(this, arguments) || this;
  }

  var _proto = Calendar.prototype;

  _proto.defaults = function defaults() {
    return {
      value: undefined,
      maxDate: undefined,
      minDate: undefined,
      disabledDate: undefined,
      multiple: false,
      type: 'date',
      hours: range(0, 23),
      minutes: range(0, 59),
      seconds: range(0, 59),
      disabledHours: false,
      disabledMinutes: false,
      disabledSeconds: false,
      dayClassNames: undefined,
      onMouseEnterDay: undefined,
      autoChangeToTimePicker: true,
      range: false,
      _showDate: undefined,
      _now: getNowDate(),
      _isShowYearPicker: false,
      _isSelectTime: false,
      _focusDate: undefined,
      _index: undefined
    };
  };

  _proto._init = function _init() {
    var _this = this;

    this.initIndex();
    this.on('$receive:type', this.initPickerType);
    this.on('$receive:value', this.initIndex);
    this.on('$receive:multiple', this.initIndex);
    this.on('$receive:value', function (c, v) {
      if (!v && _this.get('_showDate')) return;

      _this.initShowDate(true);
    });
    this.on('$change:_showDate', function (c, v) {
      // if is select year or month, set the _showDate to value
      if (_this._isYearOrMonth() && !_this._isDisabledDate(v)) {
        _this.set('value', v);
      }
    });
  };

  _proto.initState = function initState() {
    this.initIndex();
    this.initPickerType();
    this.initShowDate(false);
    this.set('_isSelectTime', false);
  };

  _proto.initIndex = function initIndex() {
    var _this$get = this.get(),
        value = _this$get.value,
        multiple = _this$get.multiple,
        _index = _this$get._index;

    if (_index === undefined) {
      this._index = multiple && value && value.length - 1 || 0;
    } else {
      this._index = _index;
    }
  };

  _proto.initPickerType = function initPickerType() {
    this.set('_isShowYearPicker', this._isYearOrMonth());
  };

  _proto.initShowDate = function initShowDate(silent) {
    var _this$_getRealValue = this._getRealValue(),
        value = _this$_getRealValue.value;

    var type = this.get('type');

    if (type === 'year' || type === 'month') {
      var showDate = value || dayjs();
      this.set('_showDate', showDate, {
        silent: silent
      });
    }
  };

  _proto._getRealValue = function _getRealValue() {
    var _this$get2 = this.get(),
        value = _this$get2.value,
        multiple = _this$get2.multiple;

    var values = value ? multiple ? value : [value] : [];
    return {
      values: values,
      value: values[this._index]
    };
  };

  _proto._isYearOrMonth = function _isYearOrMonth() {
    var type = this.get('type');
    return type === 'year' || type === 'month';
  };

  _proto.select = function select(value, e) {
    // const value = getDateString(v, this.get('type'));
    var type = this.get('type');
    var autoChangeToTimePicker = this.get('autoChangeToTimePicker');

    var _index = this.get('_index'); // when we set _isSelectTime to true, the dom has
    // been replaced with time selecter, so we set the
    // _dropdown to true to tell TooltipContent that
    // we click on drodown and don't hide it


    e && (e._rawEvent._dropdown = true); // the datetime must be greater than minDate, #406

    var minDate = this._getMinDate();

    if (type === 'datetime' && minDate && value.isBefore(minDate)) {
      value = minDate.clone();
    }

    if (!this.get('multiple')) {
      this.set('value', value, {
        async: true
      });

      if (type !== 'datetime') {
        this.trigger('hide');
      } else if (autoChangeToTimePicker) {
        this.set('_isSelectTime', true, {
          async: true
        });
      }
    } else {
      var values = this.get('value');

      if (!_Array$isArray(values)) {
        values = [];
      } else {
        values = _sliceInstanceProperty(values).call(values, 0);
      }

      if (type !== 'datetime') {
        if (this.get('range')) {
          // support begin date is equal to end date for range, #390
          values.push(value);
        } else {
          var index = _findIndexInstanceProperty(values).call(values, function (v) {
            return isEqual(v, value);
          });

          if (~index) {
            _spliceInstanceProperty(values).call(values, index, 1);
          } else {
            values.push(value);
          }
        }
      } else {
        values.push(value);

        if (autoChangeToTimePicker) {
          this.set('_isSelectTime', true, {
            async: true
          });
        }
      }

      if (_index === undefined) {
        this._index = values.length - 1;
      }

      this.set('value', values, {
        async: true
      });
    }

    this.set('_showDate', value, {
      async: true
    });
  };

  _proto.prevMonth = function prevMonth() {
    this.setRelativeMonth(-1);
  };

  _proto.nextMonth = function nextMonth(e) {
    e.preventDefault();
    this.setRelativeMonth(1);
  };

  _proto.prevYear = function prevYear() {
    this.setRelativeYear(-1);
  };

  _proto.nextYear = function nextYear() {
    this.setRelativeYear(1);
  };

  _proto.setRelativeMonth = function setRelativeMonth(month) {
    var date = this.getShowDate();
    this.set('_showDate', date.add(month, 'month'));
  };

  _proto.setRelativeYear = function setRelativeYear(year) {
    var date = this.getShowDate();
    this.set('_showDate', date.add(year, 'year'));
  };

  _proto.setMonth = function setMonth(month) {
    var date = this.getShowDate();
    this.set('_showDate', date.month(month));
  };

  _proto.setYear = function setYear(year) {
    var date = this.getShowDate();
    this.set('_showDate', date.year(year));
  };

  _proto.onChangeYear = function onChangeYear(c, value) {
    this.setYear(value);
  };

  _proto.onChangeMonth = function onChangeMonth(c, value) {
    this.setMonth(value);
  };

  _proto.getShowDate = function getShowDate() {
    var _this$get3 = this.get(),
        _showDate = _this$get3._showDate,
        value = _this$get3.value,
        _now = _this$get3._now,
        multiple = _this$get3.multiple;

    var values = value ? multiple ? value : [value] : [];
    var showDate = _showDate || values[this._index] || _now; // set showDate's date to 1, because the days of month is not equal
    // it will lead to change month incorrectly, #62

    return showDate.date(1);
  };

  _proto.setShowDate = function setShowDate(date) {
    this.set('_showDate', date);
  };

  _proto.showYearPicker = function showYearPicker() {
    this.set('_isShowYearPicker', !this.get('_isShowYearPicker'));
  };

  _proto.onChangeTime = function onChangeTime(c, v) {
    this.isSelectTime = true;

    var _this$get4 = this.get(),
        value = _this$get4.value,
        _now = _this$get4._now,
        multiple = _this$get4.multiple;

    var originalValue = multiple ? value && value[this._index] : value;
    var valueDate = originalValue || _now;
    valueDate = valueDate.hour(+v[0]).minute(+v[1]).second(+v[2]);

    if (!multiple) {
      this.set('value', valueDate);
    } else {
      var _value;

      if (value) {
        _value = _sliceInstanceProperty(value).call(value, 0);
        _value[this._index] = valueDate;
      } else {
        _value = [valueDate];
      }

      this.set('value', _value);
    }

    this.isSelectTime = false;
  } // _format(date) {
  // return getDateString(date, this.get('type'));
  // }
  // confirm() {
  // this.refs.calendar.hide();
  // }
  // cancel(e) {
  // e._rawEvent._dropdown = true;
  // this.set('_isSelectTime', false, {async: true});
  // this.showYearPicker();
  // }
  ;

  _proto.focusAndSelect = function focusAndSelect(e) {
    // this.element.focus();
    this._onKeydown(e);
  };

  _proto._onMouseEnter = function _onMouseEnter(date, isOut, e) {
    var onMouseEnterDay = this.get('onMouseEnterDay');
    this.set('_focusDate', date);

    if (onMouseEnterDay) {
      onMouseEnterDay.call(this, date, isOut, e);
    }
  };

  _proto._onMouseLeaveDays = function _onMouseLeaveDays() {
    this.set('_focusDate', null);
  };

  _proto._onKeydown = function _onKeydown(e) {
    // do nothing if it is time selection
    if (this.get('_isSelectTime')) return;

    switch (e.keyCode) {
      case 38:
        // up
        this._focusByOffset(e, -7);

        break;

      case 40:
        // down
        this._focusByOffset(e, 7);

        break;

      case 37:
        // left
        this._focusByOffset(e, -1);

        break;

      case 39:
        // right
        this._focusByOffset(e, 1);

        break;

      case 13:
        this._selectFocusDate();

        break;
    }
  };

  _proto._focusByOffset = function _focusByOffset(e, offset) {
    e.preventDefault();

    var _this$get5 = this.get(),
        _focusDate = _this$get5._focusDate,
        value = _this$get5.value,
        _showDate = _this$get5._showDate;

    var isSet = true;

    if (!_focusDate) {
      _focusDate = this.getShowDate();

      if (!value || _Array$isArray(value)) {
        isSet = false;
      } else if (!_Array$isArray(value)) {
        _focusDate = value;
      }
    } else {
      if (_showDate) {
        if (!_focusDate.isSame(_showDate, 'month')) {
          _focusDate = _showDate.date(1);
          isSet = false;
        }
      }
    }

    if (isSet) {
      _focusDate = _focusDate.add(offset, 'day');
    }

    this.set({
      '_focusDate': _focusDate,
      '_showDate': _focusDate
    }, {
      silent: true
    });
    this.update();
  };

  _proto._selectFocusDate = function _selectFocusDate() {
    var _this$get6 = this.get(),
        _focusDate = _this$get6._focusDate,
        _isSelectTime = _this$get6._isSelectTime;

    if (_focusDate && !_isSelectTime) {
      this.trigger('enter:select', this);
      this.select(_focusDate);
    }
  };

  _proto._onChangeTab = function _onChangeTab(c, v) {
    this.set('_isSelectTime', v === 'time', {
      async: true
    });
  };

  _proto._getMinDate = function _getMinDate() {
    var _this$get7 = this.get(),
        minDate = _this$get7.minDate,
        value = _this$get7.value,
        _id = _this$get7._id;

    if (_id === '1') {
      var date;

      if (value && value[0]) {
        date = value[0];
      }

      if (date && minDate) {
        return date.isAfter(minDate) ? date : minDate;
      } else {
        return date || minDate;
      }
    } else if (minDate) {
      return minDate;
    }
  };

  _proto._getMaxDate = function _getMaxDate() {
    var _this$get8 = this.get(),
        maxDate = _this$get8.maxDate,
        value = _this$get8.value,
        _id = _this$get8._id;

    if (_id === '0') {
      var date;

      if (value && value[1]) {
        date = value[1];
      }

      if (date && maxDate) {
        return date.isAfter(maxDate) ? maxDate : date;
      } else {
        return date || maxDate;
      }
    } else if (maxDate) {
      return maxDate;
    }
  };

  _proto._isDisabledDate = function _isDisabledDate(date) {
    var _this$get9 = this.get(),
        maxDate = _this$get9.maxDate,
        minDate = _this$get9.minDate,
        disabledDate = _this$get9.disabledDate,
        type = _this$get9.type;

    return maxDate && isGT(date, maxDate) || minDate && isLT(date, minDate) || disabledDate && disabledDate.call(this, getDateString(date.toDate(), type), // for compatibility
    date.clone());
  };

  _proto._isDisabledMonth = function _isDisabledMonth(month) {
    var date = this.getShowDate().month(month);
    return this._isDisabledDate(date);
  };

  _proto._isDisabledYear = function _isDisabledYear(year) {
    var date = this.getShowDate().year(year);
    return this._isDisabledDate(date);
  };

  _proto._isDisabledTime = function _isDisabledTime(date) {
    var min = this._getMinDate();

    var max = this._getMaxDate();

    return min && date.isBefore(min) || max && date.isAfter(max);
  };

  _proto._onWheel = function _onWheel(e) {
    this.trigger('wheel', e);
  }
  /**
   * @brief clear the state when hide
   */
  // clear() {
  // this.set({
  // '_showDate': undefined,
  // }, {silent: true});
  // }
  ;

  return Calendar;
}(Intact), _defineProperty(_class2, "template", template), _defineProperty(_class2, "propTypes", {
  multiple: Boolean,
  disabledDate: Function,
  type: String,
  hours: Array,
  minutes: Array,
  seconds: Array,
  disabledHours: Boolean,
  disabledMinutes: Boolean,
  disabledSeconds: Boolean,
  dayClassNames: Function,
  onMouseEnterDay: Function,
  autoChangeToTimePicker: Boolean,
  range: Boolean
}), _temp), (_applyDecoratedDescriptor(_class, "template", [_dec], (_init = _Object$getOwnPropertyDescriptor(_class, "template"), _init = _init ? _init.value : undefined, {
  enumerable: true,
  configurable: true,
  writable: true,
  initializer: function initializer() {
    return _init;
  }
}), _class)), _class));
export { Calendar as default };