import "core-js/modules/es.object.to-string";
import "core-js/modules/es.regexp.to-string";
import _Reflect$construct from "@babel/runtime-corejs3/core-js/reflect/construct";
import _indexOfInstanceProperty from "@babel/runtime-corejs3/core-js/instance/index-of";
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
var _Intact$Vdt$utils = Intact.Vdt.utils,
    isArray = _Intact$Vdt$utils.isArray,
    setCheckboxModel = _Intact$Vdt$utils.setCheckboxModel;

var Checkbox = /*#__PURE__*/function (_Intact) {
  _inheritsLoose(Checkbox, _Intact);

  var _super = _createSuper(Checkbox);

  function Checkbox() {
    return _Intact.apply(this, arguments) || this;
  }

  var _proto = Checkbox.prototype;

  _proto.defaults = function defaults() {
    return {
      disabled: false,
      value: false,
      trueValue: true,
      falseValue: false,
      indeterminate: false
    };
  };

  // set value to falseValue when destroy
  _proto._destroy = function _destroy() {// we should not change data in _destroy
    // we must use _context to get value, because it maybe has changed
    // const model = this.get('v-model');
    // if (!model) return;
    // let value = this.get('_context').data.get(model);
    // if (!value) return;
    // const trueValue = this.get('trueValue');
    // if (this.isChecked()) {
    // if (isArray(value)) {
    // value = value.slice(0);
    // const index = value.indexOf(trueValue);
    // value.splice(index, 1);
    // this.set('value', value);
    // } else {
    // this.set('value', this.get('falseValue'));
    // }
    // }
  };

  _proto.isChecked = function isChecked() {
    var value = this.get('value');
    var trueValue = this.get('trueValue');
    return isArray(value) ? _indexOfInstanceProperty(value).call(value, trueValue) > -1 : value === trueValue;
  };

  _proto._onKeypress = function _onKeypress(e) {
    if (e.keyCode === 13) {
      this.refs.input.click();
    }
  };

  _proto._onClick = function _onClick(e) {
    var _this$get = this.get(),
        trueValue = _this$get.trueValue,
        falseValue = _this$get.falseValue,
        disabled = _this$get.disabled;

    if (!disabled) {
      setCheckboxModel(this, 'value', trueValue, falseValue, e, this.vdt);
      this.trigger('click', e);
      this.trigger('change', this.get('value'), e);
    } else {
      this.trigger('click', e);
    }
  };

  _proto._fixClick = function _fixClick(e) {
    // ignore the click event from label, otherwise it will trigger click event twice
    if (e.target !== this.refs.input) {
      e.stopPropagation();
    }
  };

  _createClass(Checkbox, [{
    key: "template",
    get: function get() {
      return template;
    }
  }]);

  return Checkbox;
}(Intact);

_defineProperty(Checkbox, "propTypes", {
  disabled: Boolean,
  indeterminate: Boolean,
  // declare for camelizing in Vue dom template
  trueValue: undefined,
  falseValue: undefined
});

export { Checkbox as default };
export { Checkbox };