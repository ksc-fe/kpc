import "core-js/modules/es.number.constructor";
import "core-js/modules/es.object.to-string";
import "core-js/modules/es.regexp.to-string";
import _Reflect$construct from "@babel/runtime-corejs3/core-js/reflect/construct";
import _Object$getOwnPropertyDescriptor from "@babel/runtime-corejs3/core-js/object/get-own-property-descriptor";
import _possibleConstructorReturn from "@babel/runtime-corejs3/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime-corejs3/helpers/getPrototypeOf";
import _inheritsLoose from "../../inheritsLoose";
import _defineProperty from "@babel/runtime-corejs3/helpers/defineProperty";
import _applyDecoratedDescriptor from "@babel/runtime-corejs3/helpers/applyDecoratedDescriptor";

var _dec, _class, _init, _class2, _temp;

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = _Reflect$construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !_Reflect$construct) return false; if (_Reflect$construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(_Reflect$construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import Intact from 'intact-vue';
import template from './index.vdt';
import '../../styles/kpc.css';
import './index.css';
var Rate = (_dec = Intact.template(), (_class = (_temp = _class2 = /*#__PURE__*/function (_Intact) {
  _inheritsLoose(Rate, _Intact);

  var _super = _createSuper(Rate);

  function Rate() {
    return _Intact.apply(this, arguments) || this;
  }

  var _proto = Rate.prototype;

  _proto.defaults = function defaults() {
    return {
      value: 0,
      count: 5,
      disabled: false,
      half: false,
      clearable: false,
      _value: 0
    };
  };

  _proto._init = function _init() {
    var _this = this;

    this.on('$receive:value', function (c, v) {
      if (!_this.get('half')) v = Math.round(v);

      _this.set({
        '_value': v,
        'value': v
      });
    });
  };

  _proto.onClick = function onClick(value) {
    if (this.get('disabled')) return; // clear the value when click again on the clearable component

    if (this.get('clearable') && this.get('value') === value) {
      value = 0;
    }

    this.set({
      'value': value,
      '_value': value
    });
  };

  _proto.onMouseEnter = function onMouseEnter(value) {
    if (this.get('disabled')) return;
    this.set('_value', value);
  };

  _proto.onMouseLeaveComponent = function onMouseLeaveComponent(e) {
    this.trigger('mouseleave', e);
    if (this.get('disabled')) return;
    this.set('_value', this.get('value'));
  };

  return Rate;
}(Intact), _defineProperty(_class2, "template", template), _defineProperty(_class2, "blocks", ['icon']), _defineProperty(_class2, "propTypes", {
  value: Number,
  count: Number,
  disabled: Boolean,
  half: false,
  clearable: false
}), _defineProperty(_class2, "events", {
  mouseleave: true
}), _temp), (_applyDecoratedDescriptor(_class, "template", [_dec], (_init = _Object$getOwnPropertyDescriptor(_class, "template"), _init = _init ? _init.value : undefined, {
  enumerable: true,
  configurable: true,
  writable: true,
  initializer: function initializer() {
    return _init;
  }
}), _class)), _class));
export { Rate as default };
export { Rate };