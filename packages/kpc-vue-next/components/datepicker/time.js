import "core-js/modules/es.object.to-string";
import "core-js/modules/es.regexp.to-string";
import _Reflect$construct from "@babel/runtime-corejs3/core-js/reflect/construct";
import _Object$getOwnPropertyDescriptor from "@babel/runtime-corejs3/core-js/object/get-own-property-descriptor";
import _everyInstanceProperty from "@babel/runtime-corejs3/core-js/instance/every";
import _sliceInstanceProperty from "@babel/runtime-corejs3/core-js/instance/slice";
import _possibleConstructorReturn from "@babel/runtime-corejs3/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime-corejs3/helpers/getPrototypeOf";
import _inheritsLoose from "../../inheritsLoose";
import _defineProperty from "@babel/runtime-corejs3/helpers/defineProperty";
import _applyDecoratedDescriptor from "@babel/runtime-corejs3/helpers/applyDecoratedDescriptor";

var _dec, _class, _init, _class2, _temp;

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = _Reflect$construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !_Reflect$construct) return false; if (_Reflect$construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(_Reflect$construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import Intact from 'intact-vue';
import template from './time.vdt';
import dayjs from 'dayjs';
var DatepickerTime = (_dec = Intact.template(), (_class = (_temp = _class2 = /*#__PURE__*/function (_Intact) {
  _inheritsLoose(DatepickerTime, _Intact);

  var _super = _createSuper(DatepickerTime);

  function DatepickerTime() {
    return _Intact.apply(this, arguments) || this;
  }

  var _proto = DatepickerTime.prototype;

  _proto.defaults = function defaults() {
    return {
      data: undefined,
      value: undefined,
      min: undefined,
      max: undefined,
      date: undefined,
      disabledItems: [],
      isDisabledTime: undefined,
      _value: undefined
    };
  };

  _proto._init = function _init() {
    var _this = this;

    this.on('$receive:value', function (c, v) {
      _this.set('_value', v, {
        silent: true
      });
    });
    this.on('$change:_value', function (c, v) {
      if (!_this._isDisabled(v)) {
        _this._shouldTriggerChange = true;

        _this.set('value', v, {
          async: true
        });

        _this._shouldTriggerChange = false;
      }
    });
    this.on('$change:value', function (c, v) {
      if (_this._shouldTriggerChange) {
        _this.trigger('change', _this, v);
      }
    });
  };

  _proto._onChangeValue = function _onChangeValue(index, c, v) {
    var _context;

    var _value = _sliceInstanceProperty(_context = this.get('_value') || []).call(_context, 0);

    _value[index] = v;
    this.set('_value', _value);
  };

  _proto._disable = function _disable(index, v) {
    var _context2;

    var value = _sliceInstanceProperty(_context2 = this.get('_value')).call(_context2, 0);

    value[index] = v;
    return this._isDisabled(value);
  };

  _proto._isDisabled = function _isDisabled(value) {
    if (!_everyInstanceProperty(value).call(value, function (item) {
      return item;
    })) return true;

    var _this$get = this.get(),
        date = _this$get.date,
        isDisabledTime = _this$get.isDisabledTime;

    value = date.clone().hour(+value[0]).minute(+value[1]).second(+value[2]);
    return isDisabledTime(value);
  };

  _proto._beforeUpdate = function _beforeUpdate(vNode) {
    // if component shows value on a disabled item,
    // after that the disabled item becomes enabled item,
    // we should set the value to the showed value.
    if (vNode) {
      var _this$get2 = this.get(),
          _value = _this$get2._value;

      if (!this._isDisabled(_value)) {
        this._shouldTriggerChange = true;
        this.set('value', _value, {
          async: true
        });
        this._shouldTriggerChange = false;
      }
    }
  };

  return DatepickerTime;
}(Intact), _defineProperty(_class2, "template", template), _defineProperty(_class2, "propTypes", {
  data: Array,
  value: Array,
  min: dayjs,
  max: dayjs,
  date: {
    required: true,
    type: dayjs
  },
  disabledItems: Array,
  isDisabledTime: {
    required: true,
    type: Function
  }
}), _temp), (_applyDecoratedDescriptor(_class, "template", [_dec], (_init = _Object$getOwnPropertyDescriptor(_class, "template"), _init = _init ? _init.value : undefined, {
  enumerable: true,
  configurable: true,
  writable: true,
  initializer: function initializer() {
    return _init;
  }
}), _class)), _class));
export { DatepickerTime as default };