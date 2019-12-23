import {DLayout} from './layout';
import mx from '../mxgraph';

const {mxStackLayout} = mx;

export class DStackLayout extends DLayout {
    static displayName = 'DStackLayout';

    static propTypes = {
        ...DLayout.propTypes,
        type: ['horizontal', 'vertical'],
        spacing: [Number, String],
        wrap: [Number, String],
        fill: Boolean,
        border: [Number, String],
        resizeParent: Boolean,
    };

    defaults() {
        return {
            ...super.defaults(),
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
        };
    }

    _getLayout(graph) {
        const {type, spacing, wrap, fill, border, resizeParent} = this.get();
        const layout = new mxStackLayout(graph, type === 'horizontal');

        layout.spacing = +spacing;
        layout.wrap = wrap ? +wrap : null;
        layout.fill = fill;
        layout.border = +border;
        layout.resizeParent = resizeParent;

        return layout;
    }
}
