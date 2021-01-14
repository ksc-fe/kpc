import _Object$assign from "@babel/runtime-corejs3/core-js/object/assign";
import mx from '../mx';
export default function () {
  var mxConnectionHandler = mx.mxConnectionHandler,
      mxConstants = mx.mxConstants,
      mxCellState = mx.mxCellState; // mxConnectionHandler.prototype.outlineConnect = true;
  // Overrides edge preview to use current edge shape and default style

  mxConnectionHandler.prototype.livePreview = true;
  mxConnectionHandler.prototype.cursor = 'crosshair'; // Overrides dashed state with current edge style

  var connectionHandlerCreateShape = mxConnectionHandler.prototype.createShape;

  mxConnectionHandler.prototype.createShape = function () {
    var shape = connectionHandlerCreateShape.apply(this, arguments); // shape.isDashed = this.graph.currentEdgeStyle[mxConstants.STYLE_DASHED] == '1';

    shape.isDashed = false;
    return shape;
  };

  var defaultEdgeStyle = {
    'edgeStyle': 'orthogonalEdgeStyle',
    'rounded': '0',
    'jettySize': 'auto',
    'orthogonalLoop': '1'
  }; // Uses current edge style for connect preview

  mxConnectionHandler.prototype.createEdgeState = function () {
    var style = 'html=1;';

    for (var key in defaultEdgeStyle) {
      style += key + "=" + defaultEdgeStyle[key] + ";";
    }

    var edge = this.graph.createEdge(null, null, null, null, null, style);
    var state = new mxCellState(this.graph.view, edge, this.graph.getCellStyle(edge));

    _Object$assign(state.style, defaultEdgeStyle);

    return state;
  }; // Overrides live preview to keep current style


  mxConnectionHandler.prototype.updatePreview = function () {// do not change color of preview
  }; // Disables built-in connection starts


  mxConnectionHandler.prototype.isValidSource = function () {
    return false;
  };
}