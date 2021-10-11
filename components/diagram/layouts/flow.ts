import {TypeDefs} from 'intact';
import {DLayout, DLayoutProps} from './layout';
import mx from '../mxgraph';

const {mxHierarchicalLayout, mxConstants} = mx;

export interface DFlowLayoutProps extends DLayoutProps {
    type?: 'horizontal' | 'vertical'
    intraCellSpacing?: number | string
    interRankCellSpacing?: number | string
    interHierarchySpacing?: number | string
    resizeParent?: boolean 
    parentBorder?: number | string
}

const typeDefs: Required<TypeDefs<DFlowLayoutProps>> = {
    ...DLayout.typeDefs,
    type: ['horizontal', 'vertical'],
    intraCellSpacing: [Number, String],
    interRankCellSpacing: [Number, String],
    interHierarchySpacing: [Number, String],
    resizeParent: Boolean,
    parentBorder: [Number, String],
};

const defaults = (): Partial<DFlowLayoutProps> => ({
    ...DLayout.defaults(),
    // The spacing buffer added between cells on the same layer.
    intraCellSpacing: 30,
    // The spacing buffer between unconnected hierarchies.
    interHierarchySpacing: 30,
    // The spacing buffer added between cell on adjacent layers.
    interRankCellSpacing: 50,
    // parallelEdgeSpacing: 10,
    resizeParent: false,
    // The border to be added around the children if the parent is to be resized using resizeParent.
    parentBorder: 0,
});

export class DFlowLayout extends DLayout<DFlowLayoutProps> {
    static displayName = 'DFlowLayout';
    static typeDefs = typeDefs;
    static defaults = defaults;

    protected getLayout(graph: any) {
        const {
            type, interHierarchySpacing, interRankCellSpacing, 
            intraCellSpacing, resizeParent, parentBorder,
            // parallelEdgeSpacing,
        } = this.get();
        const direction = type === 'horizontal' ? mxConstants.DIRECTION_WEST : mxConstants.DIRECTION_NORTH;
        const layout = new mxHierarchicalLayout(graph, direction);

        layout.intraCellSpacing = +intraCellSpacing!;
        layout.interHierarchySpacing = +interHierarchySpacing!;
        layout.interRankCellSpacing = +interRankCellSpacing!;
        layout.resizeParent = resizeParent!;
        layout.parentBorder = +parentBorder!;
        layout.disableEdgeStyle = false;
        layout.edgeStyle = 'orthogonalEdgeStyle';
        layout.maintainParentLocation = true;

        return layout;
    }
}
