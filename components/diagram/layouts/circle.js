import {DLayout} from './layout';
import mx from '../mxgraph';

const {mxCircleLayout} = mx;

export class DCircleLayout extends DLayout {
    _getLayout(graph) {
        const layout = new mxCircleLayout(graph);

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
