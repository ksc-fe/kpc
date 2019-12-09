import {DLayout} from './layout';
import mx from '../mxgraph';

const {mxHierarchicalLayout, mxConstants} = mx;

export class DFlowLayout extends DLayout {
    static propTypes = {
        ...DLayout.propTypes,
        type: ['horizontal', 'vertical'],
        interRankCellSpacing: [Number, String],
        interHierarchySpacing: [Number, String],
        resizeParent: Boolean,
    };

    defaults() {
        return {
            ...super.defaults(),
            type: 'horizontal',
            // The spacing buffer added between cells on the same layer.
            intraCellSpacing: 30,
            // The spacing buffer between unconnected hierarchies.
            interHierarchySpacing: 30,
            // The spacing buffer added between cell on adjacent layers.
            interRankCellSpacing: 50,
            // parallelEdgeSpacing: 10,
            resizeParent: false,
            // The border to be added around the children if the parent is to be resized using resizeParent.
            parentBorder: 0,
        }
    }

    _getLayout(graph) {
        const {
            type, interHierarchySpacing, interRankCellSpacing, 
            intraCellSpacing, resizeParent, parentBorder,
            // parallelEdgeSpacing,
        } = this.get();
        const direction = type === 'horizontal' ? mxConstants.DIRECTION_WEST : mxConstants.DIRECTION_NORTH;
        const layout = new mxHierarchicalLayout(graph, direction);

        layout.intraCellSpacing = +intraCellSpacing;
        layout.interHierarchySpacing = +interHierarchySpacing;
        layout.interRankCellSpacing = +interRankCellSpacing;
        layout.resizeParent = resizeParent;
        layout.parentBorder = +parentBorder;
        layout.disableEdgeStyle = false;
        layout.edgeStyle = 'orthogonalEdgeStyle';
        layout.maintainParentLocation = true;

        return layout;
    }
}
