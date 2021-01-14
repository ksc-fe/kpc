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
    mxCellRenderer = mx.mxCellRenderer,
    mxConstants = mx.mxConstants,
    mxPoint = mx.mxPoint,
    mxRectangleShape = mx.mxRectangleShape,
    mxPerimeter = mx.mxPerimeter,
    mxStyleRegistry = mx.mxStyleRegistry;
export var DParallelogram = /*#__PURE__*/function (_DShape) {
  _inheritsLoose(DParallelogram, _DShape);

  var _super = _createSuper(DParallelogram);

  function DParallelogram() {
    return _DShape.apply(this, arguments) || this;
  }

  var _proto = DParallelogram.prototype;

  _proto.defaults = function defaults() {
    return _Object$assign({}, _DShape.prototype.defaults.call(this), {
      width: 120,
      height: 60
    });
  };

  _proto._getStylesheet = function _getStylesheet() {
    return 'shape=parallelogram;perimeter=parallelogramPerimeter;whiteSpace=wrap;html=1;';
  };

  return DParallelogram;
}(DShape);

_defineProperty(DParallelogram, "displayName", 'DParallelogram');

if (hasWindow) {
  // Parallelogram shape
  var ParallelogramShape = function ParallelogramShape() {
    mxActor.call(this);
  };

  ;
  mxUtils.extend(ParallelogramShape, mxActor);
  ParallelogramShape.prototype.size = 0.2;
  /* istanbul ignore next */

  ParallelogramShape.prototype.isRoundable = function () {
    return true;
  };

  ParallelogramShape.prototype.redrawPath = function (c, x, y, w, h) {
    var dx = w * Math.max(0, Math.min(1, _parseFloat(mxUtils.getValue(this.style, 'size', this.size))));
    var arcSize = mxUtils.getValue(this.style, mxConstants.STYLE_ARCSIZE, mxConstants.LINE_ARCSIZE) / 2;
    this.addPoints(c, [new mxPoint(0, h), new mxPoint(dx, 0), new mxPoint(w, 0), new mxPoint(w - dx, h)], this.isRounded, arcSize, true);
    c.end();
  };

  mxCellRenderer.registerShape('parallelogram', ParallelogramShape);
  ParallelogramShape.prototype.constraints = mxRectangleShape.prototype.constraints; // Parallelogram Perimeter

  mxPerimeter.ParallelogramPerimeter = function (bounds, vertex, next, orthogonal) {
    var size = ParallelogramShape.prototype.size;

    if (vertex != null) {
      size = mxUtils.getValue(vertex.style, 'size', size);
    }

    var x = bounds.x;
    var y = bounds.y;
    var w = bounds.width;
    var h = bounds.height;
    var direction = vertex != null ? mxUtils.getValue(vertex.style, mxConstants.STYLE_DIRECTION, mxConstants.DIRECTION_EAST) : mxConstants.DIRECTION_EAST;
    var vertical = direction == mxConstants.DIRECTION_NORTH || direction == mxConstants.DIRECTION_SOUTH;
    var points;

    if (vertical) {
      var dy = h * Math.max(0, Math.min(1, size));
      points = [new mxPoint(x, y), new mxPoint(x + w, y + dy), new mxPoint(x + w, y + h), new mxPoint(x, y + h - dy), new mxPoint(x, y)];
    } else {
      var dx = w * Math.max(0, Math.min(1, size));
      points = [new mxPoint(x + dx, y), new mxPoint(x + w, y), new mxPoint(x + w - dx, y + h), new mxPoint(x, y + h), new mxPoint(x + dx, y)];
    }

    var cx = bounds.getCenterX();
    var cy = bounds.getCenterY();
    var p1 = new mxPoint(cx, cy);

    if (orthogonal) {
      if (next.x < x || next.x > x + w) {
        p1.y = next.y;
      } else {
        p1.x = next.x;
      }
    }

    return mxUtils.getPerimeterPoint(points, p1, next);
  };

  mxStyleRegistry.putValue('parallelogramPerimeter', mxPerimeter.ParallelogramPerimeter);
}