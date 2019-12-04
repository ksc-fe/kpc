import {DLayout} from './layout';
import mx from '../mxgraph';

const {mxCompactTreeLayout, mxRadialTreeLayout} = mx;

export class DTreeLayout extends DLayout {
    static propTypes = {
        ...DLayout.propTypes,
        type: ['horizontal', 'vertical', 'radial'],
        levelDistance: [Number, String],
        nodeDistance: [Number, String],
    };

    defaults() {
        return {
            ...super.defaults(),
            type: 'horizontal',
            levelDistance: 30,
            nodeDistance: 16,
        }
    }

    _init() {
        super._init();
        this.on('$receive', (c, keys) => {
            // adjust the default value of levelDistance by type
            if (keys.indexOf('levelDistance') < 0) {
                const type = this.get('type');
                this.set('levelDistance', type === 'radial' ? 80 : 30);
            }
        });
    }

    _getLayout(graph) {
        const {type, levelDistance, nodeDistance} = this.get();
        let layout;
        if (type === 'radial') {
            layout = new mxRadialTreeLayout(graph);    
            layout.autoRadius = true;
        } else {
            layout = new mxCompactTreeLayout(graph, type === 'horizontal');
            layout.nodeDistance = +nodeDistance;
        }

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

        tmp = graph.getModel().getParent(tmp);
        if (graph.getModel().isVertex(tmp)) {
            graph.updateGroupBounds([tmp], graph.gridSize * 2, true);
        }
    }
}
