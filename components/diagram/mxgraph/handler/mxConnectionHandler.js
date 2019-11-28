import mx from '../mx';

const {mxConnectionHandler, mxConstants, mxCellState} = mx;

// mxConnectionHandler.prototype.outlineConnect = true;
// Overrides edge preview to use current edge shape and default style
mxConnectionHandler.prototype.livePreview = true;
mxConnectionHandler.prototype.cursor = 'crosshair';

// Overrides dashed state with current edge style
const connectionHandlerCreateShape = mxConnectionHandler.prototype.createShape;
mxConnectionHandler.prototype.createShape = function() {
    const shape = connectionHandlerCreateShape.apply(this, arguments);
    
    // shape.isDashed = this.graph.currentEdgeStyle[mxConstants.STYLE_DASHED] == '1';
    shape.isDashed = false;
    
    return shape;
}

const defaultEdgeStyle = {
    'edgeStyle': 'orthogonalEdgeStyle', 
    'rounded': '0',
    'jettySize': 'auto', 
    'orthogonalLoop': '1'
};

// Uses current edge style for connect preview
mxConnectionHandler.prototype.createEdgeState = function() {
    let style = 'html=1;';
    for (let key in defaultEdgeStyle) {
        style += `${key}=${defaultEdgeStyle[key]};`
    }
    var edge = this.graph.createEdge(null, null, null, null, null, style);
    var state = new mxCellState(this.graph.view, edge, this.graph.getCellStyle(edge));
    
    Object.assign(state.style, defaultEdgeStyle);
    
    return state;
};

// Overrides live preview to keep current style
mxConnectionHandler.prototype.updatePreview = function() {
    // do not change color of preview
};

// Disables built-in connection starts
mxConnectionHandler.prototype.isValidSource = function() {
    return false;
}
