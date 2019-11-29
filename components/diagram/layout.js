import Intact from 'intact';
import {mapChildren} from '../utils';
import {DShape} from './shapes/shape';
import mx from './mxgraph';

const {mxHierarchicalLayout, mxConstants} = mx;

export class DLayout extends Intact {
    static template = function(data, Vdt) {
        const children = mapChildren(data.get('children'), vNode => {
            if (vNode.tag.prototype instanceof DShape) {
                vNode.props = {
                    ...vNode.props,
                    _diagram: data.get('_diagram'),
                    _parent: data.get('_parent'),
                    _layout: data,
                };
            } else {
                Intact.utils.error(new Error(`DLayout can only contains DShape, but ${vNode.tag} found.`));
            }
            return vNode;
        });

        return Vdt.miss.h('dlayout', {type: data.get('type')}, children);
    };

    defaults() {
        return {
            type: 'vertical',
            marginRight: 50,
            marginBottom: 30,
            left: 0,
            top: 0,

            _diagram: undefined,
            _parent: undefined,
        };
    }

    _init() {
        this.shapes = [];
    }

    _mount() {
        this.get('_diagram').addLayout(this);
    }

    addShape(shape) {
        this.shapes.push(shape);
    }

    render() {
        const {_diagram: diagram, _parent: parent, marginRight, marginBottom, left, top} = this.get();
        const graph = diagram.graph;
        const layout = new mxHierarchicalLayout(graph, mxConstants.DIRECTION_WEST);

        layout.interHierarchySpacing = +marginBottom;
        layout.interRankCellSpacing = +marginRight;
        layout.setVertexLocation(this.shapes[0].cell, 10, 10);

        const cells = this.shapes.map(shape => shape.cell);

        layout.execute(parent.cell, cells);

        // move cells totally
        graph.moveCells(cells, +left, +top);
    }
}
