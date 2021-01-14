import "core-js/modules/es.object.to-string";
import "core-js/modules/es.regexp.to-string";
import _Reflect$construct from "@babel/runtime-corejs3/core-js/reflect/construct";
import _Object$assign from "@babel/runtime-corejs3/core-js/object/assign";
import _possibleConstructorReturn from "@babel/runtime-corejs3/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime-corejs3/helpers/getPrototypeOf";
import _inheritsLoose from "../../inheritsLoose";

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = _Reflect$construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !_Reflect$construct) return false; if (_Reflect$construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(_Reflect$construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import Intact from 'intact-vue';
import { DropdownItem } from '../dropdown';

var Option = /*#__PURE__*/function (_DropdownItem) {
  _inheritsLoose(Option, _DropdownItem);

  var _super = _createSuper(Option);

  function Option() {
    return _DropdownItem.apply(this, arguments) || this;
  }

  var _proto = Option.prototype;

  _proto.defaults = function defaults() {
    return _Object$assign({}, _DropdownItem.prototype.defaults.call(this), {
      value: undefined,
      label: undefined
    });
  };

  return Option;
}(DropdownItem);

export { Option as default };