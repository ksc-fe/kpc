import Intact from 'intact';
import template from './diagram.vdt';
import './index.styl';
import mx from './mxgraph';
import {createGraph} from './graph';
import {mapChildren} from '../utils';
import {DShape} from './shapes/shape';
import {DLine} from './shapes/line';

const {mxGraph, mxGraphModel, mxHierarchicalLayout, mxConstants, mxRubberband, mxEvent} = mx;

export default class Diagram extends Intact {
    @Intact.template()
    static template = template;

    static events = {
        selectionChange: true,
        labelChange: true,
    };

    static propTypes = {
        movable: Boolean,
        connectable: Boolean,
        resizable: Boolean,
        rotatable: Boolean,
        editable: Boolean,
        selectable: Boolean,
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
        const graph = this.graph = createGraph(this.refs.canvas);
        this.rubberband = new mxRubberband(graph);
        this.isCellRotatable = graph.isCellRotatable;

        // add label changed event
        graph.addListener(mxEvent.LABEL_CHANGED, (graph, evt) => {
            const {cell, old, value} = evt.properties;
            this.trigger('labelChange', cell, value, old);
        });

        this._initGraph();

        this.cell = graph.getDefaultParent();

        this.draw();

        this.on('$receive:selectable', this._toggleSelectionEvent);
    }

    _update() {
        // reset the state of graph
        this._initGraph();
        this.draw();
        // this.graph.validateGraph();
    }

    draw() {
        const graph = this.graph;
        const model = graph.model;

        model.beginUpdate();
        try {
            this.shapes.forEach(shape => {
                shape.draw();
            });
            // we render lines after all vertexes has rendered
            this.lines.forEach(line => {
                line.draw();
            });

            // render layout
            this.layouts.forEach(layout => {
                layout.draw();
            });
            this.lines.forEach(line => line._setStyle());
        } finally {
            model.endUpdate();
        }
    }

    _initGraph() {
        const {movable, connectable, resizable, rotatable, editable, selectable} = this.get();
        const graph = this.graph;

        graph.setEnabled(movable || connectable || resizable || rotatable || editable || selectable);
        graph.setCellsMovable(movable);
        graph.setConnectable(connectable);
        graph.isCellsResizable = () => resizable;

        graph.isCellRotatable = (cell) => rotatable && this.isCellRotatable.call(graph, cell);

        graph.isCellsEditable = () => editable;
        graph.cellsSelectable = selectable;
        this.rubberband.setEnabled(selectable);

        graph.resizeContainer = true;
        // graph.gridSize = 0;
    }

    _toggleSelectionEvent() {
        const selectionModel = this.graph.getSelectionModel();
        if (this.get('selectable')) {
            selectionModel.addListener(mxEvent.CHANGE, this._onSelectionChange);
        } else {
            selectionModel.removeListener(mxEvent.CHANGE, this._onSelectionChange);
        }
    }

    _onSelectionChange() {
        this.trigger('selectionChange', this.graph.getSelectionCells());
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
