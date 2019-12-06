import {DLayout} from './layout';
import mx from '../mxgraph';

const {mxCompactTreeLayout} = mx;

export class DTreeLayout extends DLayout {
    static propTypes = {
        ...DLayout.propTypes,
        type: ['horizontal', 'vertical'],
        levelDistance: [Number, String],
        nodeDistance: [Number, String],
        resizeParent: Boolean,
        groupPadding: [Number, String],
    };

    defaults() {
        return {
            ...super.defaults(),
            type: 'horizontal',
            levelDistance: 30,
            nodeDistance: 16,
            // If the parents should be resized to match the width/height of the children. 
            resizeParent: true,
            // Padding added to resized parents.
            groupPadding: 10,
        }
    }

    _getLayout(graph) {
        const {type, levelDistance, nodeDistance, resizeParent, groupPadding} = this.get();
        const layout = new mxCompactTreeLayout(graph, type === 'horizontal');

        layout.nodeDistance = +nodeDistance;
        layout.groupPadding = +groupPadding;
        // layout.moveTree = true;
        layout.maintainParentLocation = true;
        layout.resizeParent = resizeParent;
        layout.levelDistance = +levelDistance;
        // layout.useBoundingBox = false;
        layout.edgeRouting = false;

        return layout;
    }

    _execute(layout, cells, parent, graph) {
        if (!cells.length) return;

        const roots = graph.findTreeRoots(parent.cell);
        let tmp = cells[0];

        if (roots && roots.length) {
            tmp = roots[0];
        }

        layout.execute(parent.cell, tmp);

        // tmp = graph.getModel().getParent(tmp);
        // if (graph.getModel().isVertex(tmp)) {
            // graph.updateGroupBounds([tmp], graph.gridSize * 2, true);
        // }
    }
}
