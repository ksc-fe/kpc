import mx from '../mx';
export default function () {
  var mxGraphHandler = mx.mxGraphHandler;
  mxGraphHandler.prototype.maxLivePreview = 16; // Enables guides

  mxGraphHandler.prototype.guidesEnabled = true; // Removes parents where all child cells are moved out

  mxGraphHandler.prototype.removeEmptyParents = true; // Select descendant if we select unselectable children

  var graphHandlerGetInitialCellForEvent = mxGraphHandler.prototype.getInitialCellForEvent;

  mxGraphHandler.prototype.getInitialCellForEvent = function (me) {
    var graph = this.graph;
    var model = graph.getModel();
    var cell = graphHandlerGetInitialCellForEvent.apply(this, arguments);

    while (!graph.isCellSelectable(cell) && model.isVertex(cell)) {
      cell = model.getParent(cell);
    }

    return cell;
  };
}