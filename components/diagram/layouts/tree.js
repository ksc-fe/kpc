import {DLayout} from './layout';
import mx from '../mxgraph';

const {mxCompactTreeLayout, mxConstants} = mx;

export class DTreeLayout extends DLayout {
    defaults() {
        return {
            ...super.defaults(),
            type: 'horizontal',
            levelDistance: 30,
            nodeDistance: 16,
        }
    }

    _getLayout(graph) {
        const {type, levelDistance, nodeDistance} = this.get();
        const layout = new mxCompactTreeLayout(graph, type === 'horizontal');

        layout.levelDistance = levelDistance;
        layout.nodeDistance = nodeDistance;
        // layout.useBoundingBox = false;
        layout.edgeRouting = false;

        return layout;
    }

    _execute(layout, cells, parent, graph) {
        let tmp = cells[0];
        let roots;

        if (!tmp || !graph.getModel().getChildCount(tmp)) {
            if (!graph.getModel().getEdgeCount(tmp)) {
                roots = graph.findTreeRoots(graph.getDefaultParent());
            }
        } else {
            roots = graph.findTreeRoots(tmp);
        }

        if (roots && roots.length) {
            tmp = roots[0];
        }

        if (tmp) {
            layout.execute(graph.getDefaultParent(), tmp);
        }
    }
}
