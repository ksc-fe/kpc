import {TypeDefs} from 'intact';
import {DLayout, DLayoutProps} from './layout';
import mx from '../mxgraph';

const {mxPartitionLayout} = mx;

export interface DPartitionLayoutProps extends DLayoutProps {
    type?: 'horizontal' | 'vertical'
    spacing?: number | string
    border?: number | string
    resizeVertices?: boolean
}

const typeDefs: Required<TypeDefs<DPartitionLayoutProps>> = {
    ...DLayout.typeDefs,
    type: ['horizontal', 'vertical'],
    spacing: [Number, String],
    border: [Number, String],
    resizeVertices: Boolean,
};

const defaults = (): Partial<DPartitionLayoutProps> => ({
    ...DLayout.defaults(),
    type: 'horizontal',
    // Integer that specifies the absolute spacing in pixels between the children. 
    spacing: 0,
    // Integer that specifies the absolute inset in pixels for the parent that contains the children.
    border: 0, 
    // Boolean that specifies if vertices should be resized.
    resizeVertices: true,
});

export class DPartitionLayout extends DLayout<DPartitionLayoutProps> {
    static displayName = 'DPartitionLayout';
    static typeDefs = typeDefs;
    static defaults = defaults;

    protected getLayout(graph: any) {
        const {type, spacing, border, resizeVertices} = this.get();
        const layout = new mxPartitionLayout(graph, type === 'horizontal');

        layout.spacing = +spacing!;
        layout.border = +border!;
        layout.resizeVertices = resizeVertices;

        return layout;
    }
}
