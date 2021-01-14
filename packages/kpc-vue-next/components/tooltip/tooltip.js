import "core-js/modules/es.object.to-string";
import "core-js/modules/es.regexp.to-string";
import _Reflect$construct from "@babel/runtime-corejs3/core-js/reflect/construct";
import _possibleConstructorReturn from "@babel/runtime-corejs3/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime-corejs3/helpers/getPrototypeOf";
import _inheritsLoose from "../../inheritsLoose";

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = _Reflect$construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !_Reflect$construct) return false; if (_Reflect$construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(_Reflect$construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import Dropdown from '../dropdown/dropdown';

var Tooltip = /*#__PURE__*/function (_Dropdown) {
  _inheritsLoose(Tooltip, _Dropdown);

  var _super = _createSuper(Tooltip);

  function Tooltip() {
    return _Dropdown.apply(this, arguments) || this;
  }

  var _proto = Tooltip.prototype;

  _proto.hide = function hide(fn, e, immediately) {
    if (e && this.get('always')) return;

    _Dropdown.prototype.hide.call(this, fn, e, immediately);
  };

  return Tooltip;
}(Dropdown);

export { Tooltip as default };