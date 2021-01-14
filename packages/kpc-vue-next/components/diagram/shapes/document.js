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
    mxConnectionConstraint = mx.mxConnectionConstraint,
    mxPoint = mx.mxPoint;
export var DDocument = /*#__PURE__*/function (_DShape) {
  _inheritsLoose(DDocument, _DShape);

  var _super = _createSuper(DDocument);

  function DDocument() {
    return _DShape.apply(this, arguments) || this;
  }

  var _proto = DDocument.prototype;

  _proto.defaults = function defaults() {
    return _Object$assign({}, _DShape.prototype.defaults.call(this), {
      width: 120,
      height: 80
    });
  };

  _proto._getStylesheet = function _getStylesheet() {
    return 'shape=document;whiteSpace=wrap;html=1;boundedLbl=1;';
  };

  return DDocument;
}(DShape);

_defineProperty(DDocument, "displayName", 'DDocument');

if (hasWindow) {
  // Document shape
  var DocumentShape = function DocumentShape() {
    mxActor.call(this);
  };

  ;
  mxUtils.extend(DocumentShape, mxActor);
  DocumentShape.prototype.size = 0.3;
  /* istanbul ignore next */

  DocumentShape.prototype.getLabelMargins = function (rect) {
    if (mxUtils.getValue(this.style, 'boundedLbl', false)) {
      return new mxRectangle(0, 0, 0, _parseFloat(mxUtils.getValue(this.style, 'size', this.size)) * rect.height);
    }

    return null;
  };

  DocumentShape.prototype.redrawPath = function (c, x, y, w, h) {
    var dy = h * Math.max(0, Math.min(1, _parseFloat(mxUtils.getValue(this.style, 'size', this.size))));
    var fy = 1.4;
    c.moveTo(0, 0);
    c.lineTo(w, 0);
    c.lineTo(w, h - dy / 2);
    c.quadTo(w * 3 / 4, h - dy * fy, w / 2, h - dy / 2);
    c.quadTo(w / 4, h - dy * (1 - fy), 0, h - dy / 2);
    c.lineTo(0, dy / 2);
    c.close();
    c.end();
  };

  mxCellRenderer.registerShape('document', DocumentShape);
  DocumentShape.prototype.constraints = [new mxConnectionConstraint(new mxPoint(0.25, 0), true), new mxConnectionConstraint(new mxPoint(0.5, 0), true), new mxConnectionConstraint(new mxPoint(0.75, 0), true), new mxConnectionConstraint(new mxPoint(0, 0.25), true), new mxConnectionConstraint(new mxPoint(0, 0.5), true), new mxConnectionConstraint(new mxPoint(0, 0.75), true), new mxConnectionConstraint(new mxPoint(1, 0.25), true), new mxConnectionConstraint(new mxPoint(1, 0.5), true), new mxConnectionConstraint(new mxPoint(1, 0.75), true)];
}