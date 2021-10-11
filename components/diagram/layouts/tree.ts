import {TypeDefs} from 'intact';
import {DLayout, DLayoutProps} from './layout';
import mx from '../mxgraph';
import type {Cell} from '../shapes/base';
import type {DShape} from '../shapes/shape';
import type {Diagram} from '../diagram';

const {mxCompactTreeLayout} = mx;

export interface DTreeLayoutProps extends DLayoutProps {
    type?: 'horizontal' | 'vertical'
    levelDistance?: string | number
    nodeDistance?: string | number
    resizeParent?: boolean
    groupPadding?: string | number
}

const typeDefs: Required<TypeDefs<DTreeLayoutProps>> = {
    ...DLayout.typeDefs,
    type: ['horizontal', 'vertical'],
    levelDistance: [Number, String],
    nodeDistance: [Number, String],
    resizeParent: Boolean,
    groupPadding: [Number, String],
};

const defaults = (): Partial<DTreeLayoutProps> => ({
    ...DLayout.defaults(),
    type: 'horizontal',
    levelDistance: 30,
    nodeDistance: 16,
    // If the parents should be resized to match the width/height of the children. 
    resizeParent: true,
    // Padding added to resized parents.
    groupPadding: 0,
});

export class DTreeLayout extends DLayout<DTreeLayoutProps> {
    static displayName = 'DTreeLayout';
    static typeDefs = typeDefs;
    static defaults = defaults;

    protected getLayout(graph: any) {
        const {type, levelDistance, nodeDistance, resizeParent, groupPadding} = this.get();
        const layout = new mxCompactTreeLayout(graph, type === 'horizontal');

        layout.nodeDistance = +nodeDistance!;
        layout.groupPadding = +groupPadding!;
        // layout.moveTree = true;
        layout.maintainParentLocation = true;
        layout.resizeParent = resizeParent!;
        layout.levelDistance = +levelDistance!;
        // layout.useBoundingBox = false;
        layout.edgeRouting = false;

        return layout;
    }

    protected execute(layout: any, cells: Cell[], parent: DShape | Diagram, graph: any) {
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
