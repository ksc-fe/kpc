import "core-js/modules/es.object.to-string";
import "core-js/modules/es.regexp.to-string";
import _Reflect$construct from "@babel/runtime-corejs3/core-js/reflect/construct";
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

var Radio = /*#__PURE__*/function (_Intact) {
  _inheritsLoose(Radio, _Intact);

  var _super = _createSuper(Radio);

  function Radio() {
    return _Intact.apply(this, arguments) || this;
  }

  var _proto = Radio.prototype;

  _proto.defaults = function defaults() {
    return {
      disabled: false,
      value: false,
      trueValue: true
    };
  };

  _proto.isChecked = function isChecked() {
    return this.get('value') === this.get('trueValue');
  };

  _proto._destroy = function _destroy() {// we should not change data in _destroy
    // if (this.isChecked()) {
    // this.set('value', undefined);
    // }
  };

  _proto._onKeypress = function _onKeypress(e) {
    if (e.keyCode === 13) {
      this.refs.input.click();
    }
  };

  _proto._onClick = function _onClick(e) {
    var _this$get = this.get(),
        value = _this$get.value,
        trueValue = _this$get.trueValue,
        disabled = _this$get.disabled;

    if (!disabled && value !== trueValue) {
      this.set('value', trueValue);
      this.trigger('click', e);
      this.trigger('change', trueValue, e);
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

  _createClass(Radio, [{
    key: "template",
    get: function get() {
      return template;
    }
  }]);

  return Radio;
}(Intact);

_defineProperty(Radio, "propTypes", {
  disabled: Boolean,
  // declare for camelizing in Vue dom template
  trueValue: undefined
});

export { Radio as default };
export { Radio };