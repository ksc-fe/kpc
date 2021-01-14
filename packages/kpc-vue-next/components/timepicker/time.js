import "core-js/modules/es.object.to-string";
import "core-js/modules/es.regexp.to-string";
import _Reflect$construct from "@babel/runtime-corejs3/core-js/reflect/construct";
import _everyInstanceProperty from "@babel/runtime-corejs3/core-js/instance/every";
import _possibleConstructorReturn from "@babel/runtime-corejs3/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime-corejs3/helpers/getPrototypeOf";
import _inheritsLoose from "../../inheritsLoose";

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = _Reflect$construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !_Reflect$construct) return false; if (_Reflect$construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(_Reflect$construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import Intact from 'intact-vue';
import DatepickerTime from '../datepicker/time';

var TimepickerTime = /*#__PURE__*/function (_DatepickerTime) {
  _inheritsLoose(TimepickerTime, _DatepickerTime);

  var _super = _createSuper(TimepickerTime);

  function TimepickerTime() {
    return _DatepickerTime.apply(this, arguments) || this;
  }

  var _proto = TimepickerTime.prototype;

  _proto._isDisabled = function _isDisabled(value) {
    if (!_everyInstanceProperty(value).call(value, function (item) {
      return item;
    })) return true;

    var _this$get = this.get(),
        _parent = _this$get._parent,
        isDisabledTime = _this$get.isDisabledTime;

    value = _parent._createDate(value[0]);
    return isDisabledTime(value);
  };

  return TimepickerTime;
}(DatepickerTime);

export { TimepickerTime as default };