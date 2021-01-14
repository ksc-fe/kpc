import "core-js/modules/es.object.to-string";
import "core-js/modules/es.regexp.to-string";
import _Reflect$construct from "@babel/runtime-corejs3/core-js/reflect/construct";
import _parseFloat from "@babel/runtime-corejs3/core-js/parse-float";
import _Object$assign from "@babel/runtime-corejs3/core-js/object/assign";
import _possibleConstructorReturn from "@babel/runtime-corejs3/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime-corejs3/helpers/getPrototypeOf";
import _inheritsLoose from "../../../inheritsLoose";
import _defineProperty from "@babel/runtime-corejs3/helpers/defineProperty";

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = _Reflect$construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !_Reflect$construct) return false; if (_Reflect$construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(_Reflect$construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import { DShape } from './shape';
import mx from '../mxgraph';
import { hasWindow } from '../../utils';
var mxActor = mx.mxActor,
    mxUtils = mx.mxUtils,
    mxRectangle = mx.mxRectangle,
    mxCellRenderer = mx.mxCellRenderer,
    mxHexagon = mx.mxHexagon,
    mxConstants = mx.mxConstants,
    mxPoint = mx.mxPoint,
    mxPerimeter = mx.mxPerimeter,
    mxStyleRegistry = mx.mxStyleRegistry;
export var DCallout = /*#__PURE__*/function (_DShape) {
  _inheritsLoose(DCallout, _DShape);

  var _super = _createSuper(DCallout);

  function DCallout() {
    return _DShape.apply(this, arguments) || this;
  }

  var _proto = DCallout.prototype;

  _proto.defaults = function defaults() {
    return _Object$assign({}, _DShape.prototype.defaults.call(this), {
      width: 120,
      height: 80
    });
  };

  _proto._getStylesheet = function _getStylesheet() {
    return 'shape=callout;whiteSpace=wrap;html=1;perimeter=calloutPerimeter;';
  };

  return DCallout;
}(DShape);

_defineProperty(DCallout, "displayName", 'DCallout');

if (hasWindow) {
  // Callout shape
  var CalloutShape = function CalloutShape() {
    mxActor.call(this);
  };

  ;
  mxUtils.extend(CalloutShape, mxHexagon);
  CalloutShape.prototype.size = 30;
  CalloutShape.prototype.position = 0.5;
  CalloutShape.prototype.position2 = 0.5;
  CalloutShape.prototype.base = 20;
  /* istanbul ignore next */

  CalloutShape.prototype.getLabelMargins = function () {
    return new mxRectangle(0, 0, 0, _parseFloat(mxUtils.getValue(this.style, 'size', this.size)) * this.scale);
  };
  /* istanbul ignore next */


  CalloutShape.prototype.isRoundable = function () {
    return true;
  };

  CalloutShape.prototype.redrawPath = function (c, x, y, w, h) {
    var arcSize = mxUtils.getValue(this.style, mxConstants.STYLE_ARCSIZE, mxConstants.LINE_ARCSIZE) / 2;
    var s = Math.max(0, Math.min(h, _parseFloat(mxUtils.getValue(this.style, 'size', this.size))));
    var dx = w * Math.max(0, Math.min(1, _parseFloat(mxUtils.getValue(this.style, 'position', this.position))));
    var dx2 = w * Math.max(0, Math.min(1, _parseFloat(mxUtils.getValue(this.style, 'position2', this.position2))));
    var base = Math.max(0, Math.min(w, _parseFloat(mxUtils.getValue(this.style, 'base', this.base))));
    this.addPoints(c, [new mxPoint(0, 0), new mxPoint(w, 0), new mxPoint(w, h - s), new mxPoint(Math.min(w, dx + base), h - s), new mxPoint(dx2, h), new mxPoint(Math.max(0, dx), h - s), new mxPoint(0, h - s)], this.isRounded, arcSize, true, [4]);
  };

  mxCellRenderer.registerShape('callout', CalloutShape); // Callout Perimeter

  mxPerimeter.CalloutPerimeter = function (bounds, vertex, next, orthogonal) {
    return mxPerimeter.RectanglePerimeter(mxUtils.getDirectedBounds(bounds, new mxRectangle(0, 0, 0, Math.max(0, Math.min(bounds.height, _parseFloat(mxUtils.getValue(vertex.style, 'size', CalloutShape.prototype.size)) * vertex.view.scale))), vertex.style), vertex, next, orthogonal);
  };

  mxStyleRegistry.putValue('calloutPerimeter', mxPerimeter.CalloutPerimeter);
}