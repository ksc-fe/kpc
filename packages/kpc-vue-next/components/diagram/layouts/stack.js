import "core-js/modules/es.array.fill";
import "core-js/modules/es.number.constructor";
import "core-js/modules/es.object.to-string";
import "core-js/modules/es.regexp.to-string";
import _Reflect$construct from "@babel/runtime-corejs3/core-js/reflect/construct";
import _fillInstanceProperty from "@babel/runtime-corejs3/core-js/instance/fill";
import _Object$assign from "@babel/runtime-corejs3/core-js/object/assign";
import _possibleConstructorReturn from "@babel/runtime-corejs3/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime-corejs3/helpers/getPrototypeOf";
import _inheritsLoose from "../../../inheritsLoose";
import _defineProperty from "@babel/runtime-corejs3/helpers/defineProperty";

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = _Reflect$construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !_Reflect$construct) return false; if (_Reflect$construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(_Reflect$construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import { DLayout } from './layout';
import mx from '../mxgraph';
var mxStackLayout = mx.mxStackLayout;
export var DStackLayout = /*#__PURE__*/function (_DLayout) {
  _inheritsLoose(DStackLayout, _DLayout);

  var _super = _createSuper(DStackLayout);

  function DStackLayout() {
    return _DLayout.apply(this, arguments) || this;
  }

  var _proto = DStackLayout.prototype;

  _proto.defaults = function defaults() {
    return _Object$assign({}, _DLayout.prototype.defaults.call(this), {
      type: 'horizontal',
      // Specifies the spacing between the cells.
      spacing: 0,
      // Value at which a new column or row should be created.
      wrap: undefined,
      // Boolean indicating if dimension should be changed to fill out the parent cell.
      fill: false,
      // Border to be added if fill is true. 
      border: 0,
      // If the parent should be resized to match the width/height of the stack.
      resizeParent: false
    });
  };

  _proto._getLayout = function _getLayout(graph) {
    var _this$get = this.get(),
        type = _this$get.type,
        spacing = _this$get.spacing,
        wrap = _this$get.wrap,
        fill = _fillInstanceProperty(_this$get),
        border = _this$get.border,
        resizeParent = _this$get.resizeParent;

    var layout = new mxStackLayout(graph, type === 'horizontal');
    layout.spacing = +spacing;
    layout.wrap = wrap ? +wrap : null;
    layout.fill = fill;
    layout.border = +border;
    layout.resizeParent = resizeParent;
    return layout;
  };

  return DStackLayout;
}(DLayout);

_defineProperty(DStackLayout, "displayName", 'DStackLayout');

_defineProperty(DStackLayout, "propTypes", _Object$assign({}, DLayout.propTypes, {
  type: ['horizontal', 'vertical'],
  spacing: [Number, String],
  wrap: [Number, String],
  fill: Boolean,
  border: [Number, String],
  resizeParent: Boolean
}));