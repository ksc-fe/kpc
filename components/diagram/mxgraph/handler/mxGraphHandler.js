import mx from '../mx';

export default function() {
    const {mxGraphHandler} = mx;

    mxGraphHandler.prototype.maxLivePreview = 16;

    // Enables guides
    mxGraphHandler.prototype.guidesEnabled = true;

    // Removes parents where all child cells are moved out
    mxGraphHandler.prototype.removeEmptyParents = true;

    // Select descendant if we select unselectable children
    const graphHandlerGetInitialCellForEvent = mxGraphHandler.prototype.getInitialCellForEvent;
    mxGraphHandler.prototype.getInitialCellForEvent = function(me) {
        const graph = this.graph;
        const model = graph.getModel();
        let cell = graphHandlerGetInitialCellForEvent.apply(this, arguments);

        while (!graph.isCellSelectable(cell) && model.isVertex(cell)) {
            cell = model.getParent(cell);
        }
        
        return cell;
    };
}
