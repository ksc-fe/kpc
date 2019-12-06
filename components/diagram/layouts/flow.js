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
            interHierarchySpacing: 30,
            interRankCellSpacing: 50,
            resizeParent: false,
        }
    }

    _getLayout(graph) {
        const {type, interHierarchySpacing, interRankCellSpacing, resizeParent} = this.get();
        const direction = type === 'horizontal' ? mxConstants.DIRECTION_WEST : mxConstants.DIRECTION_NORTH;
        const layout = new mxHierarchicalLayout(graph, direction);

        layout.interHierarchySpacing = +interHierarchySpacing;
        layout.interRankCellSpacing = +interRankCellSpacing;
        layout.resizeParent = resizeParent;

        return layout;
    }
}
