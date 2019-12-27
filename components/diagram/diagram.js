import Intact from 'intact';
import template from './diagram.vdt';
import './index.styl';
import mx from './mxgraph';
import {createGraph} from './graph';

const {mxRubberband, mxEvent} = mx;

export default class Diagram extends Intact {
    @Intact.template()
    static template = template;

    static events = {
        selectionChanged: true,
        labelChanged: true,
    };

    // static propTypes = {
        // disabled: Boolean,
    // };

    // defaults() {
        // return {
            // disabled: false,
        // };
    // }

    _init() {
        this.shapes = new Map();
        this.lines = [];
        this.layouts = [];
    }

    _mount() {
        const graph = this.graph = createGraph(this.refs.canvas);
        // this.rubberband = new mxRubberband(graph);

        this.isCellSelectable = graph.isCellSelectable;
        this.isCellRotatable = graph.isCellRotatable;
        this.isCellMovable = graph.isCellMovable;
        this.isCellResizable = graph.isCellResizable;
        this.isCellEditable = graph.isCellEditable;
        this.isCellConnectable = graph.isCellConnectable;

        // add label changed event
        graph.addListener(mxEvent.LABEL_CHANGED, (graph, evt) => {
            const {cell, old, value} = evt.properties;
            this.trigger('labelChanged', cell, value, old);
        });
        graph.getSelectionModel().addListener(mxEvent.CHANGE, this._onSelectionChange);

        this._initGraph();

        this.cell = graph.getDefaultParent();

        this.draw();
    }

    _update() {
        // reset the state of graph
        // this._initGraph();
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
            // we must render parent firstly, because layouts may be nested
            // for (let i = this.layouts.length - 1; i >= 0; i--) {
                // this.layouts[i].draw();
            // }
            this.layouts.forEach(layout => {
                layout.draw();
            });
            // this.lines.forEach(line => line._setStyle());
        } finally {
            model.endUpdate();
        }
    }

    _initGraph() {
        const graph = this.graph;

        graph.setEnabled(true);
        ['selectable', 'movable', 'resizable', 'rotatable', 'editable', 'connectable'].forEach(item => {
            const name = `isCell${item[0].toUpperCase()}${item.substring(1)}`;
            graph[name] = cell => {
                return cell.instance && cell.instance.get(item) && this[name].call(graph, cell);
            }
        })
        // this.rubberband.setEnabled(selectable);

        graph.resizeContainer = true;
        // graph.gridSize = 0;
    }

    _onSelectionChange() {
        this.trigger('selectionChanged', this.graph.getSelectionCells());
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

    destroy(...args) {
        this.refs.canvas.style = '';
        this.graph.destroy();
        super.destroy(...args);
    }
}
