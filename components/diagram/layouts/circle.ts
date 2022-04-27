import {TypeDefs} from 'intact';
import {DLayout, DLayoutProps} from './layout';
import mx from '../mxgraph';
import type {Cell} from '../shapes/base';
import type {DShape} from '../shapes/shape';
import type {Diagram} from '../diagram';

const {mxCircleLayout} = mx;

export interface DCircleLayoutProps extends DLayoutProps {
    x0?: number | string
    y0?: number | string
}

const typeDefs: Required<TypeDefs<DCircleLayoutProps>> = {
    ...DLayout.typeDefs,
    x0: [Number, String],
    y0: [Number, String],
};

const defaults = (): Partial<DCircleLayoutProps> => ({
    ...DLayout.defaults(),
    x0: 0,
    y0: 0,
});


export class DCircleLayout extends DLayout<DCircleLayoutProps> {
    static displayName = 'DCircleLayout';
    static typeDefs = typeDefs;
    static defaults = defaults;

    protected getLayout(graph: any) {
        const {x0, y0} = this.get();
        const layout = new mxCircleLayout(graph);

        // layout.radius = radius;
        layout.moveCircle = true;
        layout.x0 = x0;
        layout.y0 = y0;
        layout.disableEdgeStyle = false;

        return layout;
    }

    protected execute(layout: any, cells: Cell[], parent: DShape | Diagram, graph: any) {
        if (!cells.length) return;

        let tmp = parent.cell;

        layout.execute(tmp);

        // if (graph.getModel().isVertex(tmp)) {
            // graph.updateGroupBounds([tmp], graph.gridSize * 2, true);
        // }
    }
}
