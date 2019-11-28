import mx from './mxgraph';
import defaultStyle from './defaultStyle';

const {mxGraph, mxRubberband} = mx;

// temp graph for create thumbnails
export function createTempGraph(container = document.createElement('div')) {
    const graph = new mxGraph(container);
    graph.resetViewOnRootChange = false;
    graph.foldingEnabled = false;
    graph.gridEnabled = false;
    graph.autoScroll = false;
    graph.setTooltips(false);
    graph.setConnectable(false);
    graph.setEnabled(false);

    initStylesheet(graph);

    return graph;
}

// set style
export function initStylesheet(graph) {
    for (let key in defaultStyle) {
        graph.getStylesheet().putCellStyle(key, defaultStyle[key]);
    }
}

export function createGraph(container) {
    const graph = new mxGraph(container); 

    initStylesheet(graph);

    graph.setConnectable(true);
    graph.setDropEnabled(true);
    graph.setPanning(true);
    graph.setTooltips(true);
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
