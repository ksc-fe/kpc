import "core-js/modules/es.number.constructor";
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

import { DLayout } from './layout';
import mx from '../mxgraph';
var mxHierarchicalLayout = mx.mxHierarchicalLayout,
    mxConstants = mx.mxConstants;
export var DFlowLayout = /*#__PURE__*/function (_DLayout) {
  _inheritsLoose(DFlowLayout, _DLayout);

  var _super = _createSuper(DFlowLayout);

  function DFlowLayout() {
    return _DLayout.apply(this, arguments) || this;
  }

  var _proto = DFlowLayout.prototype;

  _proto.defaults = function defaults() {
    return _Object$assign({}, _DLayout.prototype.defaults.call(this), {
      type: 'horizontal',
      // The spacing buffer added between cells on the same layer.
      intraCellSpacing: 30,
      // The spacing buffer between unconnected hierarchies.
      interHierarchySpacing: 30,
      // The spacing buffer added between cell on adjacent layers.
      interRankCellSpacing: 50,
      // parallelEdgeSpacing: 10,
      resizeParent: false,
      // The border to be added around the children if the parent is to be resized using resizeParent.
      parentBorder: 0
    });
  };

  _proto._getLayout = function _getLayout(graph) {
    var _this$get = this.get(),
        type = _this$get.type,
        interHierarchySpacing = _this$get.interHierarchySpacing,
        interRankCellSpacing = _this$get.interRankCellSpacing,
        intraCellSpacing = _this$get.intraCellSpacing,
        resizeParent = _this$get.resizeParent,
        parentBorder = _this$get.parentBorder;

    var direction = type === 'horizontal' ? mxConstants.DIRECTION_WEST : mxConstants.DIRECTION_NORTH;
    var layout = new mxHierarchicalLayout(graph, direction);
    layout.intraCellSpacing = +intraCellSpacing;
    layout.interHierarchySpacing = +interHierarchySpacing;
    layout.interRankCellSpacing = +interRankCellSpacing;
    layout.resizeParent = resizeParent;
    layout.parentBorder = +parentBorder;
    layout.disableEdgeStyle = false;
    layout.edgeStyle = 'orthogonalEdgeStyle';
    layout.maintainParentLocation = true;
    return layout;
  };

  return DFlowLayout;
}(DLayout);

_defineProperty(DFlowLayout, "displayName", 'DFlowLayout');

_defineProperty(DFlowLayout, "propTypes", _Object$assign({}, DLayout.propTypes, {
  type: ['horizontal', 'vertical'],
  interRankCellSpacing: [Number, String],
  interHierarchySpacing: [Number, String],
  resizeParent: Boolean
}));