import {TypeDefs} from 'intact';
import {DLayout, DLayoutProps} from './layout';
import mx from '../mxgraph';

const {mxStackLayout} = mx;

export interface DStackLayoutProps extends DLayoutProps {
    type?: 'horizontal' | 'vertical'
    spacing?: number | string
    wrap?: number | string
    fill?: boolean
    border?: number | string
    resizeParent?: boolean
}

const typeDefs: Required<TypeDefs<DStackLayoutProps>> = {
    ...DLayout.typeDefs,
    type: ['horizontal', 'vertical'],
    spacing: [Number, String],
    wrap: [Number, String],
    fill: Boolean,
    border: [Number, String],
    resizeParent: Boolean,
};

const defaults = (): Partial<DStackLayoutProps> => ({
    ...DLayout.defaults(),
    type: 'horizontal',
    // Specifies the spacing between the cells.
    spacing: 0,
    // Value at which a new column or row should be created.
    wrap: undefined,
    // Boolean indicating if dimension should be changed to fill out the parent cell.
    fill: false,
    // Border to be added if fill is true. 
    border: 0, 
    // If the parent should be resized to match the width/height of the stack.
    resizeParent: false,
});

export class DStackLayout extends DLayout<DStackLayoutProps> {
    static displayName = 'DStackLayout';
    static typeDefs = typeDefs;
    static defaults = defaults;

    protected getLayout(graph: any) {
        const {type, spacing, wrap, fill, border, resizeParent} = this.get();
        const layout = new mxStackLayout(graph, type === 'horizontal');

        layout.spacing = +spacing!;
        layout.wrap = wrap ? +wrap : null;
        layout.fill = fill;
        layout.border = +border!;
        layout.resizeParent = resizeParent!;

        return layout;
    }
}
