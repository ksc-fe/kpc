import "core-js/modules/es.object.to-string";
import "core-js/modules/es.regexp.to-string";
import _Reflect$construct from "@babel/runtime-corejs3/core-js/reflect/construct";
import _Object$assign from "@babel/runtime-corejs3/core-js/object/assign";
import _possibleConstructorReturn from "@babel/runtime-corejs3/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime-corejs3/helpers/getPrototypeOf";
import _inheritsLoose from "../../../inheritsLoose";
import _defineProperty from "@babel/runtime-corejs3/helpers/defineProperty";

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = _Reflect$construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !_Reflect$construct) return false; if (_Reflect$construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(_Reflect$construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import { DRectangle } from './rectangle';
import mx from '../mxgraph';
var mxGeometry = mx.mxGeometry;
export var DSquare = /*#__PURE__*/function (_DRectangle) {
  _inheritsLoose(DSquare, _DRectangle);

  var _super = _createSuper(DSquare);

  function DSquare() {
    return _DRectangle.apply(this, arguments) || this;
  }

  var _proto = DSquare.prototype;

  _proto.defaults = function defaults() {
    return _Object$assign({}, _DRectangle.prototype.defaults.call(this), {
      width: 80
    });
  };

  _proto._getStylesheet = function _getStylesheet() {
    var stylesheet = _DRectangle.prototype._getStylesheet.call(this);

    return stylesheet + "aspect=fixed;";
  };

  _proto._getGeometry = function _getGeometry() {
    var _this$get = this.get(),
        width = _this$get.width,
        left = _this$get.left,
        top = _this$get.top;

    return new mxGeometry(+left, +top, +width, +width);
  };

  return DSquare;
}(DRectangle);

_defineProperty(DSquare, "displayName", 'DSquare');