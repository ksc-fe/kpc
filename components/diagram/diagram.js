import Intact from 'intact';
import template from './diagram.vdt';
import './index.styl';
import mx from './mxgraph';
import {createGraph} from './graph';
import {mapChildren} from '../utils';
import {DShape} from './shapes/shape';
import {DLine} from './shapes/line';

const {mxGraph, mxGraphModel, mxHierarchicalLayout, mxConstants} = mx;

export default class Diagram extends Intact {
    @Intact.template()
    static template = template;

    static propTypes = {
        enabled: Boolean,
    };

    defaults() {
        return {
            movable: false,
            connectable: false,
            resizable: false,
            rotatable: false,
            editable: false,
            selectable: false,
        };
    }

    _init() {
        this.shapes = new Map();
        this.lines = [];
        this.layouts = [];
    }

    _mount() {
        this._initGraph();

        const graph = this.graph;

        this.cell = graph.getDefaultParent();

        this.render();
    }

    _update() {
        this.render();
    }

    render() {
        const graph = this.graph;
        const model = graph.model;

        model.beginUpdate();
        try {
            this.shapes.forEach(shape => {
                shape.render();
            });
            // we render lines after all vertexes has rendered
            this.lines.forEach(line => {
                line.render();
            });

            // render layout
            this.layouts.forEach(layout => {
                layout.render();
            });
        } finally {
            model.endUpdate();
        }
    }

    _initGraph() {
        const {movable, connectable, resizable, rotatable, editable, selectable} = this.get();
        const graph = this.graph = createGraph(this.refs.canvas);
        graph.setEnabled(movable || connectable || resizable || rotatable || editable || selectable);
        graph.setCellsMovable(movable);
        graph.setConnectable(connectable);
        graph.isCellsResizable = () => resizable;

        const isCellRotatable = graph.isCellRotatable;
        graph.isCellRotatable = (cell) => rotatable && isCellRotatable.call(graph, cell);

        graph.isCellsEditable = () => editable;
        graph.cellsSelectable = selectable;
    }

    addShape(shape) {
        const {key} = shape.get();
        const shapes = this.shapes;
        if (key != null) {
            if (shapes.get(key)) {
                Intact.utils.error(new Error(`The key: [${key}] of [${shape.constructor.name}] is duplicate.`))  
            } else {
                shapes.set(key, shape);
            }
        } else {
            shapes.set(shape.uniqueId, shape);
        }
    }

    deleteShape(shape) {
        const {key} = shape.get();
        this.shapes.delete(key == null ? shape.uniqueId : key);
    }

    addLine(line) {
        this.lines.push(line);
    }

    deleteLine(line) {
        this._deleteFromArray(this.lines, line);
    }

    addLayout(layout) {
        this.layouts.push(layout);
    }

    deleteLayout(layout) {
        this._deleteFromArray(this.layouts, layout);
    }

    _deleteFromArray(arr, item) {
        const index = arr.indexOf(item);
        arr.splice(item, 1);
    }
}
