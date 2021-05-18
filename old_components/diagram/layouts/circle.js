import {DLayout} from './layout';
import mx from '../mxgraph';

const {mxCircleLayout} = mx;

export class DCircleLayout extends DLayout {
    static displayName = 'DCircleLayout';

    defaults() {
        return {
            ...super.defaults(),
            x0: 0,
            y0: 0,
        }
    }
    _getLayout(graph) {
        const {x0, y0} = this.get();
        const layout = new mxCircleLayout(graph);

        // layout.radius = radius;
        layout.moveCircle = true;
        layout.x0 = x0;
        layout.y0 = y0;
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
