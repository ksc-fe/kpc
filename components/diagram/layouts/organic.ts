import {TypeDefs} from 'intact';
import {DLayout, DLayoutProps} from './layout';
import mx from '../mxgraph';
import type {Cell} from '../shapes/base';
import type {DShape} from '../shapes/shape';
import type {Diagram} from '../diagram';

const {mxFastOrganicLayout} = mx;

export interface DOrganicLayoutProps extends DLayoutProps {
    forceConstant?: number | string
}

const typeDefs: Required<TypeDefs<DOrganicLayoutProps>> = {
    ...DLayout.typeDefs,
    forceConstant: [Number, String],
};

const defaults = (): Partial<DOrganicLayoutProps> => ({
    ...DLayout.defaults(),
    // The force constant by which the attractive forces are divided and the replusive forces are multiple by the square of.  The value equates to the average radius there is of free space around each node. 
    forceConstant: 50,
});

export class DOrganicLayout extends DLayout<DOrganicLayoutProps> {
    static displayName = 'DOrganicLayout';
    static typeDefs = typeDefs;
    static defaults = defaults;

    protected getLayout(graph: any) {
        const {forceConstant} = this.get();
        const layout = new mxFastOrganicLayout(graph);

        layout.forceConstant = +forceConstant!;
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
