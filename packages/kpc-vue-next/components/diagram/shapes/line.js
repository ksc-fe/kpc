import "core-js/modules/es.object.to-string";
import "core-js/modules/es.regexp.to-string";
import _Reflect$construct from "@babel/runtime-corejs3/core-js/reflect/construct";
import _construct from "@babel/runtime-corejs3/helpers/construct";
import _indexOfInstanceProperty from "@babel/runtime-corejs3/core-js/instance/index-of";
import _findInstanceProperty from "@babel/runtime-corejs3/core-js/instance/find";
import _Object$assign from "@babel/runtime-corejs3/core-js/object/assign";
import _possibleConstructorReturn from "@babel/runtime-corejs3/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime-corejs3/helpers/getPrototypeOf";
import _inheritsLoose from "../../../inheritsLoose";
import _defineProperty from "@babel/runtime-corejs3/helpers/defineProperty";

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = _Reflect$construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !_Reflect$construct) return false; if (_Reflect$construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(_Reflect$construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import { DShape } from './shape';
import mx from '../mxgraph';
var mxCell = mx.mxCell,
    mxGeometry = mx.mxGeometry,
    mxPoint = mx.mxPoint;
var arrows = ['none', 'classic', 'classicThin', 'block', 'blockThin', 'open', 'openThin', 'oval', 'diamond', 'diamondThin'];
export var DLine = /*#__PURE__*/function (_DShape) {
  _inheritsLoose(DLine, _DShape);

  var _super = _createSuper(DLine);

  function DLine() {
    return _DShape.apply(this, arguments) || this;
  }

  var _proto = DLine.prototype;

  _proto.defaults = function defaults() {
    return _Object$assign({}, _DShape.prototype.defaults.call(this), {
      startArrow: 'none',
      endArrow: 'classic',
      startPoint: [0, 0],
      endPoint: [50, 0],
      exit: undefined,
      entry: undefined,
      type: 'straight',
      from: undefined,
      to: undefined
    });
  };

  _proto._addToDigram = function _addToDigram() {
    this.get('_diagram').addLine(this);
  };

  _proto._update = function _update() {// override super method, do nothing for line
  };

  _proto._updateProps = function _updateProps(model, keys) {
    _DShape.prototype._updateProps.call(this, model, keys);

    if (_findInstanceProperty(keys).call(keys, function (key) {
      var _context;

      return _indexOfInstanceProperty(_context = ['from', 'to', 'startPoint', 'endPoint']).call(_context, key) > -1;
    })) {
      // update from and to
      this._setTerminal();
    }
  };

  _proto.draw = function draw() {
    if (this._isRendered) return;

    var _this$get = this.get(),
        diagram = _this$get._diagram;

    var graph = diagram.graph;
    var cell = this.cell;
    cell.edge = true;

    this._setStyle();

    this._setTerminal();

    graph.addCell(cell);
    this._isRendered = true;
  };

  _proto._setTerminal = function _setTerminal() {
    var _this$get2 = this.get(),
        from = _this$get2.from,
        to = _this$get2.to,
        startPoint = _this$get2.startPoint,
        endPoint = _this$get2.endPoint,
        diagram = _this$get2._diagram;

    var graph = diagram.graph;
    var shapes = diagram.shapes;
    var cell = this.cell;
    var geo = cell.getGeometry();

    if (from == null) {
      cell.setTerminal(null, true);
      geo.setTerminalPoint(_construct(mxPoint, startPoint), true);
    } else {
      cell.setTerminal(shapes.get(from).cell, true);
    }

    if (to == null) {
      cell.setTerminal(null, false);
      geo.setTerminalPoint(_construct(mxPoint, endPoint), false);
    } else {
      cell.setTerminal(shapes.get(to).cell, false);
    }
  };

  _proto._getStylesheet = function _getStylesheet() {
    var _this$get3 = this.get(),
        startArrow = _this$get3.startArrow,
        endArrow = _this$get3.endArrow;

    return "startArrow=" + startArrow + ";endArrow=" + endArrow + ";html=1;fontSize=12;";
  };

  _proto._getGeometry = function _getGeometry() {
    var geo = new mxGeometry(0, 0, 0, 0);
    geo.relative = true;
    return geo;
  };

  _proto._genStyles = function _genStyles() {
    return _Object$assign({}, this._genStylesForExitAndEntry(), {}, this._genStylesForType(), {}, this._genStylesForStrokeStyle());
  };

  _proto._genStylesForExitAndEntry = function _genStylesForExitAndEntry() {
    var styles = {};

    var _this$get4 = this.get(),
        from = _this$get4.from,
        exit = _this$get4.exit,
        to = _this$get4.to,
        entry = _this$get4.entry;

    if (from != null && exit) {
      styles.exitX = exit[0];
      styles.exitY = exit[1];
      styles.perimeter = 0;
    }

    if (to != null && entry) {
      styles.entryX = entry[0];
      styles.entryY = entry[1];
      styles.perimeter = 0;
    }

    return styles;
  };

  _proto._genStylesForType = function _genStylesForType() {
    var styles = {};

    var _this$get5 = this.get(),
        type = _this$get5.type;

    if (type !== 'straight') {
      styles.edgeStyle = 'orthogonalEdgeStyle';
    }

    switch (type) {
      case 'rounded':
        styles.rounded = 1;
        styles.curved = null;
        break;

      case 'curved':
        styles.rounded = 0;
        styles.curved = 1;
        break;

      case 'sharp':
        styles.rounded = 0;
        styles.curved = null;
        break;

      default:
        styles.edgeStyle = 'straight';
        styles.curved = null;
        styles.noEdgeStyle = null;
        break;
    }

    return styles;
  };

  _proto._deleteFromDiagram = function _deleteFromDiagram() {
    this.get('_diagram').deleteLine(this);
  };

  return DLine;
}(DShape);

_defineProperty(DLine, "displayName", 'DLine');

_defineProperty(DLine, "propTypes", _Object$assign({}, DShape.propTypes, {
  type: ['rounded', 'sharp', 'curved', 'straight'],
  startArrow: arrows,
  endArrow: arrows,
  startPoint: Array,
  endPoint: Array,
  exit: Array,
  entry: Array
}));