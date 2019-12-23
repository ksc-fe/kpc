import {DLayout} from './layout';
import mx from '../mxgraph';

const {mxPartitionLayout} = mx;

export class DPartitionLayout extends DLayout {
    static displayName = 'DPartitionLayout';

    static propTypes = {
        ...DLayout.propTypes,
        type: ['horizontal', 'vertical'],
        spacing: [Number, String],
        border: [Number, String],
        resizeVertices: Boolean,
    };

    defaults() {
        return {
            ...super.defaults(),
            type: 'horizontal',
            // Integer that specifies the absolute spacing in pixels between the children. 
            spacing: 0,
            // Integer that specifies the absolute inset in pixels for the parent that contains the children.
            border: 0, 
            // Boolean that specifies if vertices should be resized.
            resizeVertices: true,
        };
    }

    _getLayout(graph) {
        const {type, spacing, border, resizeVertices} = this.get();
        const layout = new mxPartitionLayout(graph, type === 'horizontal');

        layout.spacing = +spacing;
        layout.border = +border;
        layout.resizeVertices = resizeVertices;

        return layout;
    }
}
