import "core-js/modules/es.function.name";
import "core-js/modules/es.object.to-string";
import "core-js/modules/es.regexp.to-string";
import _Reflect$construct from "@babel/runtime-corejs3/core-js/reflect/construct";
import _Object$getOwnPropertyDescriptor from "@babel/runtime-corejs3/core-js/object/get-own-property-descriptor";
import _concatInstanceProperty from "@babel/runtime-corejs3/core-js/instance/concat";
import _spliceInstanceProperty from "@babel/runtime-corejs3/core-js/instance/splice";
import _indexOfInstanceProperty from "@babel/runtime-corejs3/core-js/instance/index-of";
import _forEachInstanceProperty from "@babel/runtime-corejs3/core-js/instance/for-each";
import _Map from "@babel/runtime-corejs3/core-js/map";
import _possibleConstructorReturn from "@babel/runtime-corejs3/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime-corejs3/helpers/getPrototypeOf";
import _inheritsLoose from "../../inheritsLoose";
import _defineProperty from "@babel/runtime-corejs3/helpers/defineProperty";
import _applyDecoratedDescriptor from "@babel/runtime-corejs3/helpers/applyDecoratedDescriptor";

var _dec, _class, _init, _class2, _temp;

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = _Reflect$construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !_Reflect$construct) return false; if (_Reflect$construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(_Reflect$construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import Intact from 'intact-vue';
import template from './diagram.vdt';
import './index.css';
import mx from './mxgraph';
import { createGraph } from './graph';
var mxRubberband = mx.mxRubberband,
    mxEvent = mx.mxEvent;
var Diagram = (_dec = Intact.template(), (_class = (_temp = _class2 = /*#__PURE__*/function (_Intact) {
  _inheritsLoose(Diagram, _Intact);

  var _super = _createSuper(Diagram);

  function Diagram() {
    return _Intact.apply(this, arguments) || this;
  }

  var _proto = Diagram.prototype;

  // static propTypes = {
  // disabled: Boolean,
  // };
  // defaults() {
  // return {
  // disabled: false,
  // };
  // }
  _proto._init = function _init() {
    this.shapes = new _Map();
    this.lines = [];
    this.layouts = [];
  };

  _proto._mount = function _mount() {
    var _this = this;

    var graph = this.graph = createGraph(this.refs.canvas); // this.rubberband = new mxRubberband(graph);

    this.isCellSelectable = graph.isCellSelectable;
    this.isCellRotatable = graph.isCellRotatable;
    this.isCellMovable = graph.isCellMovable;
    this.isCellResizable = graph.isCellResizable;
    this.isCellEditable = graph.isCellEditable;
    this.isCellConnectable = graph.isCellConnectable; // add label changed event

    graph.addListener(mxEvent.LABEL_CHANGED, function (graph, evt) {
      var _evt$properties = evt.properties,
          cell = _evt$properties.cell,
          old = _evt$properties.old,
          value = _evt$properties.value;

      _this.trigger('labelChanged', cell, value, old);
    });
    graph.getSelectionModel().addListener(mxEvent.CHANGE, this._onSelectionChange);

    this._initGraph();

    this.cell = graph.getDefaultParent();
    this.draw();
  };

  _proto._update = function _update() {
    // reset the state of graph
    // this._initGraph();
    this.draw(); // this.graph.validateGraph();
  };

  _proto.draw = function draw() {
    var graph = this.graph;
    var model = graph.model;
    model.beginUpdate();

    try {
      var _context, _context2, _context3;

      _forEachInstanceProperty(_context = this.shapes).call(_context, function (shape) {
        shape.draw();
      }); // we render lines after all vertexes has rendered


      _forEachInstanceProperty(_context2 = this.lines).call(_context2, function (line) {
        line.draw();
      }); // render layout
      // we must render parent firstly, because layouts may be nested
      // for (let i = this.layouts.length - 1; i >= 0; i--) {
      // this.layouts[i].draw();
      // }


      _forEachInstanceProperty(_context3 = this.layouts).call(_context3, function (layout) {
        layout.draw();
      }); // this.lines.forEach(line => line._setStyle());

    } finally {
      model.endUpdate();
    }
  };

  _proto._initGraph = function _initGraph() {
    var _context4,
        _this2 = this;

    var graph = this.graph;
    graph.setEnabled(true);

    _forEachInstanceProperty(_context4 = ['selectable', 'movable', 'resizable', 'rotatable', 'editable', 'connectable']).call(_context4, function (item) {
      var name = "isCell" + item[0].toUpperCase() + item.substring(1);

      graph[name] = function (cell) {
        return cell.instance && cell.instance.get(item) && _this2[name].call(graph, cell);
      };
    }); // this.rubberband.setEnabled(selectable);


    graph.resizeContainer = true; // graph.gridSize = 0;
  };

  _proto._onSelectionChange = function _onSelectionChange() {
    this.trigger('selectionChanged', this.graph.getSelectionCells());
  };

  _proto.addShape = function addShape(shape) {
    var _shape$get = shape.get(),
        key = _shape$get.key;

    var shapes = this.shapes;

    if (key != null) {
      if (shapes.get(key)) {
        Intact.utils.error(new Error("The key: [" + key + "] of [" + shape.constructor.name + "] is duplicate."));
      } else {
        shapes.set(key, shape);
      }
    } else {
      shapes.set(shape.uniqueId, shape);
    }
  };

  _proto.deleteShape = function deleteShape(shape) {
    var _shape$get2 = shape.get(),
        key = _shape$get2.key;

    this.shapes.delete(key == null ? shape.uniqueId : key);
  };

  _proto.addLine = function addLine(line) {
    this.lines.push(line);
  };

  _proto.deleteLine = function deleteLine(line) {
    this._deleteFromArray(this.lines, line);
  };

  _proto.addLayout = function addLayout(layout) {
    this.layouts.push(layout);
  };

  _proto.deleteLayout = function deleteLayout(layout) {
    this._deleteFromArray(this.layouts, layout);
  };

  _proto._deleteFromArray = function _deleteFromArray(arr, item) {
    var index = _indexOfInstanceProperty(arr).call(arr, item);

    _spliceInstanceProperty(arr).call(arr, item, 1);
  };

  _proto.destroy = function destroy() {
    var _Intact$prototype$des, _context5;

    this.refs.canvas.style = '';
    this.graph.destroy();

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    (_Intact$prototype$des = _Intact.prototype.destroy).call.apply(_Intact$prototype$des, _concatInstanceProperty(_context5 = [this]).call(_context5, args));
  };

  return Diagram;
}(Intact), _defineProperty(_class2, "template", template), _defineProperty(_class2, "events", {
  selectionChanged: true,
  labelChanged: true
}), _temp), (_applyDecoratedDescriptor(_class, "template", [_dec], (_init = _Object$getOwnPropertyDescriptor(_class, "template"), _init = _init ? _init.value : undefined, {
  enumerable: true,
  configurable: true,
  writable: true,
  initializer: function initializer() {
    return _init;
  }
}), _class)), _class));
export { Diagram as default };