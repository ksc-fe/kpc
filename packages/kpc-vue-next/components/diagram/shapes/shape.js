import "core-js/modules/es.function.name";
import "core-js/modules/es.number.constructor";
import "core-js/modules/es.object.to-string";
import "core-js/modules/es.regexp.to-string";
import _Reflect$construct from "@babel/runtime-corejs3/core-js/reflect/construct";
import _findInstanceProperty from "@babel/runtime-corejs3/core-js/instance/find";
import _Object$assign from "@babel/runtime-corejs3/core-js/object/assign";
import _possibleConstructorReturn from "@babel/runtime-corejs3/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime-corejs3/helpers/getPrototypeOf";
import _inheritsLoose from "../../../inheritsLoose";
import _defineProperty from "@babel/runtime-corejs3/helpers/defineProperty";

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = _Reflect$construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !_Reflect$construct) return false; if (_Reflect$construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(_Reflect$construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import Intact from 'intact-vue';
import { mapChildren } from '../../utils';
import mx from '../mxgraph';
import { DLayout } from '../layouts/layout';
var mxCell = mx.mxCell,
    mxGeometry = mx.mxGeometry;
export var DShape = /*#__PURE__*/function (_Intact) {
  _inheritsLoose(DShape, _Intact);

  var _super = _createSuper(DShape);

  function DShape() {
    return _Intact.apply(this, arguments) || this;
  }

  var _proto = DShape.prototype;

  _proto.defaults = function defaults() {
    return {
      label: undefined,
      left: 0,
      top: 0,
      width: 0,
      height: 0,
      strokeStyle: 'solid',
      data: undefined,
      style: undefined,
      movable: false,
      selectable: false,
      resizable: false,
      rotatable: false,
      editable: false,
      connectable: false,
      _diagram: undefined,
      _parent: undefined,
      _layout: undefined
    };
  };

  _proto._getName = function _getName() {
    var Ctor = this.constructor;
    return Ctor.displayName || Ctor.name;
  };

  _proto._init = function _init() {
    var _this = this;

    this._isRendered = false;
    this.on('$receive:children', function (c, children) {
      var hasElement = false;
      _this.children = mapChildren(children, function (vNode) {
        if (vNode.tag) {
          var proto = vNode.tag.prototype;

          if (proto instanceof DShape || proto instanceof DLayout) {
            vNode.props = _Object$assign({}, vNode.props, {
              _diagram: _this.get('_diagram'),
              _parent: _this
            });
          } else {
            hasElement = true;
          }
        }

        return vNode;
      });
      _this.hasElement = hasElement;
    });
  };

  _proto._mount = function _mount() {
    var _this$get = this.get(),
        _layout = _this$get._layout,
        data = _this$get.data;

    this.cell = this._cell(); // add data to the cell, so that we can get it when select the cell

    this.cell.data = data;
    this.cell.instance = this;

    this._addToDigram();

    if (_layout) {
      _layout.addShape(this);
    }

    this.on('$receive', this._onChangeProps);
  };

  _proto._addToDigram = function _addToDigram() {
    this.get('_diagram').addShape(this);
  };

  _proto._onChangeProps = function _onChangeProps(c, keys) {
    var graph = this.get('_diagram').graph;
    var model = graph.getModel();
    model.beginUpdate();

    this._updateProps(model, keys);

    model.endUpdate();
  };

  _proto._updateProps = function _updateProps(model, keys) {
    // if (keys.find(key => ['left', 'top', 'width', 'height'].indexOf(key) > -1))  {
    // // update geometry 
    // this.updateGeometry();
    // }
    if (_findInstanceProperty(keys).call(keys, function (key) {
      return key === 'label';
    })) {
      // update value
      var value = this._getValue();

      model.setValue(this.cell, value);
    } // update style


    var stylesheet = this._getStylesheet();

    model.setStyle(this.cell, stylesheet);

    this._setStyle(); // add data to the cell, so that we can get it when select the cell


    this.cell.data = this.get('data');
  }
  /**
   * because Layout may resize parent, we reset the geometry after update
   */
  ;

  _proto._update = function _update() {
    var model = this.get('_diagram').graph.model;

    var geo = this._getGeometry();

    model.setGeometry(this.cell, geo);
  } // updateGeomery(options) {
  // const geo = this.cell.getGeometry().clone();
  // for (let key in options) {
  // const value = options[key];
  // if (value != null) {
  // geo[key] = +value;
  // }
  // }
  // this.get('_diagram').graph.model.setGeometry(this.cell, geo);
  // }
  ;

  _proto.draw = function draw() {
    if (this._isRendered) return;
    var diagram = this.get('_diagram');
    var parent = this.get('_parent');
    var graph = diagram.graph;
    var cell = this.cell;
    cell.vertex = true;

    this._setStyle();

    graph.addCell(cell, parent.cell);
    this._isRendered = true;
  }
  /**
   * generate the cell
   */
  ;

  _proto._cell = function _cell() {
    return new mxCell(this._getValue(), this._getGeometry(), this._getStylesheet());
  };

  _proto._getValue = function _getValue() {
    var _this$get2 = this.get(),
        label = _this$get2.label;

    return label == null ? this.hasElement && this.wrapper || null : String(label);
  };

  _proto._getStylesheet = function _getStylesheet() {};

  _proto._getGeometry = function _getGeometry() {
    var _this$get3 = this.get(),
        width = _this$get3.width,
        height = _this$get3.height,
        top = _this$get3.top,
        left = _this$get3.left;

    return new mxGeometry(+left, +top, +width, +height);
  };

  _proto._setStyle = function _setStyle() {
    var diagram = this.get('_diagram');
    var parent = this.get('_parent');
    var graph = diagram.graph;
    var cell = this.cell;
    var cells = [cell];

    var styles = _Object$assign({}, this.get('style'), {}, this._genStyles()); // if hasElement, disable edit


    graph.setCellStyles('editable', this.hasElement ? 0 : 1, [cell]);

    for (var key in styles) {
      graph.setCellStyles(key, styles[key], cells);
    }
  };

  _proto._genStyles = function _genStyles() {
    return this._genStylesForStrokeStyle();
  };

  _proto._genStylesForStrokeStyle = function _genStylesForStrokeStyle() {
    var styles = {};

    switch (this.get('strokeStyle')) {
      case 'dashed':
        styles.dashed = 1;
        styles.dashPattern = null;
        break;

      case 'dotted':
        styles.dashed = 1;
        styles.dashPattern = '1 2';
        break;

      case 'solid':
        styles.dashed = null;
        styles.dashPattern = null;
        break;
    }

    return styles;
  };

  _proto._destroy = function _destroy() {
    var _this$get4 = this.get(),
        _diagram = _this$get4._diagram,
        _layout = _this$get4._layout;

    var graph = _diagram.graph;

    this._deleteFromDiagram();

    graph.removeCells([this.cell], false);

    if (_layout) {
      _layout.deleteShape(this);
    }
  };

  _proto._deleteFromDiagram = function _deleteFromDiagram() {
    this.get('_diagram').deleteShape(this);
  };

  return DShape;
}(Intact);

_defineProperty(DShape, "template", function (data, Vdt) {
  var h = Vdt.miss.h;
  var children = data.children;

  if (children && children.length) {
    children = h('div', {
      ref: function ref(i) {
        return data.wrapper = i;
      }
    }, children);
  }

  return h(data._getName(), null, children);
});

_defineProperty(DShape, "propTypes", {
  strokeStyle: ['solid', 'dashed', 'dotted'],
  label: [String, Number],
  left: [String, Number],
  top: [String, Number],
  width: [String, Number],
  height: [String, Number],
  style: Object,
  movable: Boolean,
  selectable: Boolean,
  resizable: Boolean,
  rotatable: Boolean,
  editable: Boolean,
  connectable: Boolean
});