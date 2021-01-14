import "core-js/modules/es.object.to-string";
import "core-js/modules/es.regexp.to-string";
import _Reflect$construct from "@babel/runtime-corejs3/core-js/reflect/construct";
import _Object$getOwnPropertyDescriptor from "@babel/runtime-corejs3/core-js/object/get-own-property-descriptor";
import _indexOfInstanceProperty from "@babel/runtime-corejs3/core-js/instance/index-of";
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
import template from './index.vdt';
import CollapseItem from './item';
import '../../styles/kpc.css';
import './index.css';
import { toggleArray } from '../utils';
var Collapse = (_dec = Intact.template(), (_class = (_temp = _class2 = /*#__PURE__*/function (_Intact) {
  _inheritsLoose(Collapse, _Intact);

  var _super = _createSuper(Collapse);

  function Collapse() {
    return _Intact.apply(this, arguments) || this;
  }

  var _proto = Collapse.prototype;

  _proto.defaults = function defaults() {
    return {
      value: undefined,
      accordion: false,
      arrow: 'right',
      // 'right' | 'left'
      noBorder: false
    };
  };

  _proto._changeValue = function _changeValue(v) {
    var _this$get = this.get(),
        value = _this$get.value,
        accordion = _this$get.accordion;

    var _value;

    if (accordion) {
      _value = this._isActive(v) ? [] : [v];
    } else {
      _value = toggleArray(value, v);
    }

    this.set('value', _value);
  };

  _proto._isActive = function _isActive(v) {
    var _this$get2 = this.get(),
        value = _this$get2.value;

    if (!_Array$isArray(value)) return false;
    return ~_indexOfInstanceProperty(value).call(value, v);
  };

  return Collapse;
}(Intact), _defineProperty(_class2, "template", template), _defineProperty(_class2, "blocks", ['title']), _defineProperty(_class2, "propTypes", {
  accordion: Boolean,
  noBorder: Boolean,
  arrow: ['right', 'left']
}), _temp), (_applyDecoratedDescriptor(_class, "template", [_dec], (_init = _Object$getOwnPropertyDescriptor(_class, "template"), _init = _init ? _init.value : undefined, {
  enumerable: true,
  configurable: true,
  writable: true,
  initializer: function initializer() {
    return _init;
  }
}), _class)), _class));
export { Collapse as default };
export { Collapse, CollapseItem };