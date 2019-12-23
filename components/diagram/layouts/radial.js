import {DLayout} from './layout';
import mx from '../mxgraph';

const {mxRadialTreeLayout} = mx;

export class DRadialLayout extends DLayout {
    static displayName = 'DRadialLayout';

    static propTypes = {
        ...DLayout.propTypes,
        levelDistance: [Number, String],
        nodeDistance: [Number, String],
        rootx: [Number, String],
        rooty: [Number, String],
    };

    defaults() {
        return {
            ...super.defaults(),
            levelDistance: 60,
            nodeDistance: 16,
            rootx: 0,
            rooty: 0,
        }
    }

    _getLayout(graph) {
        const {type, levelDistance, nodeDistance} = this.get();
        const layout = new mxRadialTreeLayout(graph);    

        layout.autoRadius = true;
        layout.nodeDistance = +nodeDistance;
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

        const {rootx, rooty} = this.get();
        const geo = tmp.getGeometry().clone();
        if (rootx != null) geo.x = +rootx;
        if (rooty != null) geo.y = +rooty;
        graph.model.setGeometry(tmp, geo);

        layout.execute(parent.cell, tmp);
    }
}
