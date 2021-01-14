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
var mxFastOrganicLayout = mx.mxFastOrganicLayout;
export var DOrganicLayout = /*#__PURE__*/function (_DLayout) {
  _inheritsLoose(DOrganicLayout, _DLayout);

  var _super = _createSuper(DOrganicLayout);

  function DOrganicLayout() {
    return _DLayout.apply(this, arguments) || this;
  }

  var _proto = DOrganicLayout.prototype;

  _proto.defaults = function defaults() {
    return _Object$assign({}, _DLayout.prototype.defaults.call(this), {
      // The force constant by which the attractive forces are divided and the replusive forces are multiple by the square of.  The value equates to the average radius there is of free space around each node. 
      forceConstant: 50
    });
  };

  _proto._getLayout = function _getLayout(graph) {
    var _this$get = this.get(),
        forceConstant = _this$get.forceConstant;

    var layout = new mxFastOrganicLayout(graph);
    layout.forceConstant = +forceConstant;
    layout.disableEdgeStyle = false;
    return layout;
  };

  _proto._execute = function _execute(layout, cells, parent, graph) {
    if (!cells.length) return;
    var tmp = parent.cell;
    layout.execute(tmp); // if (graph.getModel().isVertex(tmp)) {
    // graph.updateGroupBounds([tmp], graph.gridSize * 2, true);
    // }
  };

  return DOrganicLayout;
}(DLayout);

_defineProperty(DOrganicLayout, "displayName", 'DOrganicLayout');

_defineProperty(DOrganicLayout, "propTypes", _Object$assign({}, DLayout.propTypes, {
  spacing: [Number, String]
}));