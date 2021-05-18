import {DLayout} from './layout';
import mx from '../mxgraph';

const {mxFastOrganicLayout} = mx;

export class DOrganicLayout extends DLayout {
    static displayName = 'DOrganicLayout';

    static propTypes = {
        ...DLayout.propTypes,
        spacing: [Number, String],
    };

    defaults() {
        return {
            ...super.defaults(),
            // The force constant by which the attractive forces are divided and the replusive forces are multiple by the square of.  The value equates to the average radius there is of free space around each node. 
            forceConstant: 50,
        }
    }

    _getLayout(graph) {
        const {forceConstant} = this.get();
        const layout = new mxFastOrganicLayout(graph);

        layout.forceConstant = +forceConstant;
        layout.disableEdgeStyle = false;
        
        return layout;
    }

    _execute(layout, cells, parent, graph) {
        if (!cells.length) return;

        let tmp = parent.cell;

        layout.execute(tmp);

        // if (graph.getModel().isVertex(tmp)) {
            // graph.updateGroupBounds([tmp], graph.gridSize * 2, true);
        // }
    }
}
