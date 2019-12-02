import mx from './mxgraph';
import defaultStyle from './defaultStyle';

const {mxGraph, mxRubberband} = mx;

// set style
export function initStylesheet(graph) {
    for (let key in defaultStyle) {
        graph.getStylesheet().putCellStyle(key, defaultStyle[key]);
    }
}

export function createGraph(container) {
    const graph = new mxGraph(container); 

    initStylesheet(graph);

    // graph.setEnabled(false);
    // graph.setConnectable(true);
    graph.setDropEnabled(false);
    graph.setPanning(false);
    graph.setTooltips(false);
    graph.setAllowLoops(true);
    graph.allowAutoPanning = true;
    graph.resetEdgesOnConnect = false;
    graph.constrainChildren = false;
    graph.constrainRelativeChildren = true;
    
    // Do not scroll after moving cells
    graph.graphHandler.scrollOnMove = false;
    graph.graphHandler.scaleGrid = true;

    new mxRubberband(graph);

    return graph;
}
