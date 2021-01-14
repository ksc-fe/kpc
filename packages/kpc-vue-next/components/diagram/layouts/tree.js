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
var mxCompactTreeLayout = mx.mxCompactTreeLayout;
export var DTreeLayout = /*#__PURE__*/function (_DLayout) {
  _inheritsLoose(DTreeLayout, _DLayout);

  var _super = _createSuper(DTreeLayout);

  function DTreeLayout() {
    return _DLayout.apply(this, arguments) || this;
  }

  var _proto = DTreeLayout.prototype;

  _proto.defaults = function defaults() {
    return _Object$assign({}, _DLayout.prototype.defaults.call(this), {
      type: 'horizontal',
      levelDistance: 30,
      nodeDistance: 16,
      // If the parents should be resized to match the width/height of the children. 
      resizeParent: true,
      // Padding added to resized parents.
      groupPadding: 0
    });
  };

  _proto._getLayout = function _getLayout(graph) {
    var _this$get = this.get(),
        type = _this$get.type,
        levelDistance = _this$get.levelDistance,
        nodeDistance = _this$get.nodeDistance,
        resizeParent = _this$get.resizeParent,
        groupPadding = _this$get.groupPadding;

    var layout = new mxCompactTreeLayout(graph, type === 'horizontal');
    layout.nodeDistance = +nodeDistance;
    layout.groupPadding = +groupPadding; // layout.moveTree = true;

    layout.maintainParentLocation = true;
    layout.resizeParent = resizeParent;
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

    layout.execute(parent.cell, tmp); // tmp = graph.getModel().getParent(tmp);
    // if (graph.getModel().isVertex(tmp)) {
    // graph.updateGroupBounds([tmp], graph.gridSize * 2, true);
    // }
  };

  return DTreeLayout;
}(DLayout);

_defineProperty(DTreeLayout, "displayName", 'DTreeLayout');

_defineProperty(DTreeLayout, "propTypes", _Object$assign({}, DLayout.propTypes, {
  type: ['horizontal', 'vertical'],
  levelDistance: [Number, String],
  nodeDistance: [Number, String],
  resizeParent: Boolean,
  groupPadding: [Number, String]
}));