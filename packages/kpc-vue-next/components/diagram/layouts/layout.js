import "core-js/modules/es.number.constructor";
import "core-js/modules/es.object.to-string";
import "core-js/modules/es.regexp.to-string";
import _Reflect$construct from "@babel/runtime-corejs3/core-js/reflect/construct";
import _Object$assign from "@babel/runtime-corejs3/core-js/object/assign";
import _mapInstanceProperty from "@babel/runtime-corejs3/core-js/instance/map";
import _indexOfInstanceProperty from "@babel/runtime-corejs3/core-js/instance/index-of";
import _spliceInstanceProperty from "@babel/runtime-corejs3/core-js/instance/splice";
import _possibleConstructorReturn from "@babel/runtime-corejs3/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime-corejs3/helpers/getPrototypeOf";
import _inheritsLoose from "../../../inheritsLoose";
import _defineProperty from "@babel/runtime-corejs3/helpers/defineProperty";

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = _Reflect$construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !_Reflect$construct) return false; if (_Reflect$construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(_Reflect$construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import Intact from 'intact-vue';
import { mapChildren } from '../../utils';
import { DShape } from '../shapes/shape';
export var DLayout = /*#__PURE__*/function (_Intact) {
  _inheritsLoose(DLayout, _Intact);

  var _super = _createSuper(DLayout);

  function DLayout() {
    return _Intact.apply(this, arguments) || this;
  }

  var _proto = DLayout.prototype;

  _proto.defaults = function defaults() {
    return {
      left: 0,
      top: 0,
      _diagram: undefined,
      _parent: undefined
    };
  };

  _proto._init = function _init() {
    this.shapes = [];
  };

  _proto._mount = function _mount() {
    this.get('_diagram').addLayout(this);
  };

  _proto.addShape = function addShape(shape) {
    this.shapes.push(shape);
  };

  _proto.deleteShape = function deleteShape(shape) {
    var _context, _context2;

    _spliceInstanceProperty(_context = this.shapes).call(_context, _indexOfInstanceProperty(_context2 = this.shapes).call(_context2, shape), 1);
  };

  _proto.draw = function draw() {
    var _context3;

    var _this$get = this.get(),
        diagram = _this$get._diagram,
        parent = _this$get._parent,
        left = _this$get.left,
        top = _this$get.top;

    var graph = diagram.graph;

    var layout = this._getLayout(graph); // Allows the layout to move cells even though cells
    // aren't movable in the graph


    layout.isVertexMovable = function () {
      return true;
    };

    var cells = _mapInstanceProperty(_context3 = this.shapes).call(_context3, function (shape) {
      return shape.cell;
    });

    this._execute(layout, cells, parent, graph); // move cells totally


    graph.moveCells(cells, +left, +top);
  };

  _proto._getLayout = function _getLayout(graph) {};

  _proto._execute = function _execute(layout, cells, parent, graph) {
    layout.execute(parent.cell, cells);
  };

  _proto._destroy = function _destroy() {
    this.get('_diagram').deleteLayout(this);
  };

  return DLayout;
}(Intact);

_defineProperty(DLayout, "template", function (data, Vdt) {
  var children = mapChildren(data.get('children'), function (vNode) {
    if (vNode.tag && vNode.tag.prototype instanceof DShape) {
      vNode.props = _Object$assign({}, vNode.props, {
        _diagram: data.get('_diagram'),
        _parent: data.get('_parent'),
        _layout: data
      });
    } else {
      /* istanbul ignore next */
      Intact.utils.error(new Error("DLayout can only contain DShape, but " + vNode.tag + " found."));
    }

    return vNode;
  });
  return Vdt.miss.h(data.constructor.displayName, null, children);
});

_defineProperty(DLayout, "propTypes", {
  left: [Number, String],
  top: [Number, String]
});