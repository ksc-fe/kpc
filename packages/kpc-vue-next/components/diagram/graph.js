import mx from './mxgraph';
import defaultStyle from './defaultStyle';
var mxGraph = mx.mxGraph; // set style

export function initStylesheet(graph) {
  for (var key in defaultStyle) {
    graph.getStylesheet().putCellStyle(key, defaultStyle[key]);
  }
}
export function createGraph(container) {
  var graph = new mxGraph(container);
  initStylesheet(graph);
  graph.setConnectable(true);
  graph.setConnectableEdges(true);
  graph.setDropEnabled(false);
  graph.setPanning(false);
  graph.setTooltips(false);
  graph.setAllowLoops(true); // graph.allowAutoPanning = true;

  graph.resetEdgesOnConnect = false;
  graph.constrainChildren = false;
  graph.constrainRelativeChildren = true; // Do not scroll after moving cells

  graph.graphHandler.scrollOnMove = false;
  graph.graphHandler.scaleGrid = true;
  graph.foldingEnabled = false;
  return graph;
}