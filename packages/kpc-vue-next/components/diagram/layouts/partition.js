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
var mxPartitionLayout = mx.mxPartitionLayout;
export var DPartitionLayout = /*#__PURE__*/function (_DLayout) {
  _inheritsLoose(DPartitionLayout, _DLayout);

  var _super = _createSuper(DPartitionLayout);

  function DPartitionLayout() {
    return _DLayout.apply(this, arguments) || this;
  }

  var _proto = DPartitionLayout.prototype;

  _proto.defaults = function defaults() {
    return _Object$assign({}, _DLayout.prototype.defaults.call(this), {
      type: 'horizontal',
      // Integer that specifies the absolute spacing in pixels between the children. 
      spacing: 0,
      // Integer that specifies the absolute inset in pixels for the parent that contains the children.
      border: 0,
      // Boolean that specifies if vertices should be resized.
      resizeVertices: true
    });
  };

  _proto._getLayout = function _getLayout(graph) {
    var _this$get = this.get(),
        type = _this$get.type,
        spacing = _this$get.spacing,
        border = _this$get.border,
        resizeVertices = _this$get.resizeVertices;

    var layout = new mxPartitionLayout(graph, type === 'horizontal');
    layout.spacing = +spacing;
    layout.border = +border;
    layout.resizeVertices = resizeVertices;
    return layout;
  };

  return DPartitionLayout;
}(DLayout);

_defineProperty(DPartitionLayout, "displayName", 'DPartitionLayout');

_defineProperty(DPartitionLayout, "propTypes", _Object$assign({}, DLayout.propTypes, {
  type: ['horizontal', 'vertical'],
  spacing: [Number, String],
  border: [Number, String],
  resizeVertices: Boolean
}));