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
var mxRadialTreeLayout = mx.mxRadialTreeLayout;
export var DRadialLayout = /*#__PURE__*/function (_DLayout) {
  _inheritsLoose(DRadialLayout, _DLayout);

  var _super = _createSuper(DRadialLayout);

  function DRadialLayout() {
    return _DLayout.apply(this, arguments) || this;
  }

  var _proto = DRadialLayout.prototype;

  _proto.defaults = function defaults() {
    return _Object$assign({}, _DLayout.prototype.defaults.call(this), {
      levelDistance: 60,
      nodeDistance: 16,
      rootx: 0,
      rooty: 0
    });
  };

  _proto._getLayout = function _getLayout(graph) {
    var _this$get = this.get(),
        levelDistance = _this$get.levelDistance,
        nodeDistance = _this$get.nodeDistance;

    var layout = new mxRadialTreeLayout(graph);
    layout.autoRadius = true;
    layout.nodeDistance = +nodeDistance;
    layout.levelDistance = +levelDistance; // layout.useBoundingBox = false;

    layout.edgeRouting = false;
    return layout;
  };

  _proto._execute = function _execute(layout, cells, parent, graph) {
    if (!cells.length) return;
    var roots = graph.findTreeRoots(parent.cell);
    var tmp = cells[0];

    if (roots && roots.length) {
      tmp = roots[0];
    }

    var _this$get2 = this.get(),
        rootx = _this$get2.rootx,
        rooty = _this$get2.rooty;

    var geo = tmp.getGeometry().clone();
    if (rootx != null) geo.x = +rootx;
    if (rooty != null) geo.y = +rooty;
    graph.model.setGeometry(tmp, geo);
    layout.execute(parent.cell, tmp);
  };

  return DRadialLayout;
}(DLayout);

_defineProperty(DRadialLayout, "displayName", 'DRadialLayout');

_defineProperty(DRadialLayout, "propTypes", _Object$assign({}, DLayout.propTypes, {
  levelDistance: [Number, String],
  nodeDistance: [Number, String],
  rootx: [Number, String],
  rooty: [Number, String]
}));