import Intact from 'intact';
import {mapChildren} from '../../utils';
import {DShape} from '../shapes/shape';

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

        return Vdt.miss.h(data.constructor.name, null, children);
    };

    defaults() {
        return {
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

    deleteShape(shape) {
        this.shapes.splice(this.shapes.indexOf(shape), 1);
    }

    render() {
        const {_diagram: diagram, _parent: parent, marginRight, marginBottom, left, top} = this.get();
        const graph = diagram.graph;
        const layout = this._getLayout(graph);

        // Allows the layout to move cells even though cells
        // aren't movable in the graph
        layout.isVertexMovable = () => true;

        const cells = this.shapes.map(shape => shape.cell);
        this._execute(layout, cells, parent, graph);

        // move cells totally
        graph.moveCells(cells, +left, +top);
        // this._execute(layout, cells, parent, graph);
    }

    _getLayout(graph) {  }

    _execute(layout, cells, parent, graph) {
        layout.execute(parent.cell, cells);
    }

    _destroy() {
        this.get('_diagram').deleteLayout(this);
    }
}
