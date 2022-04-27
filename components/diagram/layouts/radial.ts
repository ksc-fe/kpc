import {TypeDefs} from 'intact';
import {DLayout, DLayoutProps} from './layout';
import mx from '../mxgraph';
import type {Cell} from '../shapes/base';
import type {DShape} from '../shapes/shape';
import type {Diagram} from '../diagram';

const {mxRadialTreeLayout} = mx;

export interface DRadialLayoutProps extends DLayoutProps {
    levelDistance?: number | string
    nodeDistance?: number | string
    rootx?: number | string
    rooty?: number | string
}

const typeDefs: Required<TypeDefs<DRadialLayoutProps>> = {
    ...DLayout.typeDefs,
    levelDistance: [Number, String],
    nodeDistance: [Number, String],
    rootx: [Number, String],
    rooty: [Number, String],
};

const defaults = (): Partial<DRadialLayoutProps> => ({
    ...DLayout.defaults(),
    levelDistance: 60,
    nodeDistance: 16,
    rootx: 0,
    rooty: 0,
});

export class DRadialLayout extends DLayout<DRadialLayoutProps> {
    static displayName = 'DRadialLayout';
    static typeDefs = typeDefs;
    static defaults = defaults;

    protected getLayout(graph: any) {
        const {levelDistance, nodeDistance} = this.get();
        const layout = new mxRadialTreeLayout(graph);    

        layout.autoRadius = true;
        layout.nodeDistance = +nodeDistance!;
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

        const {rootx, rooty} = this.get();
        const geo = tmp.getGeometry().clone();
        if (rootx != null) geo.x = +rootx;
        if (rooty != null) geo.y = +rooty;
        graph.model.setGeometry(tmp, geo);

        layout.execute(parent.cell, tmp);
    }
}
