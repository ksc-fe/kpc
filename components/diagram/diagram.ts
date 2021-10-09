import {Component, createRef, provide, Key, ComponentConstructor} from 'intact';
import template from './diagram.vdt';
import {createGraph} from './graph';
import mx from './mxgraph';
import {bind} from '../utils';
import {DIAGRAM} from './constants';
import type {DShape} from './shapes/shape';
import {error, isNullOrUndefined} from 'intact-shared';

const {mxRubberband, mxEvent} = mx;

type StateCallback = (this: any, cell: any) => boolean;

export class Diagram extends Component {
    static template = template;

    private shapes: Map<Key, DShape> = new Map();
    private lines = [];
    private layouts = [];
    private canvasRef = createRef<HTMLDivElement>();

    public graph: any;
    public cell: any;

    // save the orignal function, because we will change them
    private isCellSelectable!: StateCallback;
    private isCellRotatable!: StateCallback;
    private isCellMovable!: StateCallback;
    private isCellResizable!: StateCallback;
    private isCellEditable!: StateCallback;
    private isCellConnectable!: StateCallback;

    init() {
        provide(DIAGRAM, this);
    }

    mounted() {
        const graph = this.graph = createGraph(this.canvasRef.value!);

        this.isCellSelectable = graph.isCellSelectable;
        this.isCellRotatable = graph.isCellRotatable;
        this.isCellMovable = graph.isCellMovable;
        this.isCellResizable = graph.isCellResizable;
        this.isCellEditable = graph.isCellEditable;
        this.isCellConnectable = graph.isCellConnectable;

        // add label changed event
        graph.addListener(mxEvent.LABEL_CHANGED, (graph: any, evt: any) => {
            const {cell, old, value} = evt.properties;
            this.trigger('labelChanged', cell, value, old);
        });
        graph.getSelectionModel().addListener(mxEvent.CHANGE, this.onSelectionChange);

        this.initGraph();
        this.cell = graph.getDefaultParent();

        this.draw();
    }

    beforeUnmount() {
        this.canvasRef.value!.removeAttribute('style');
        this.graph.destroy();
    }

    public addShape(shape: DShape) {
        const {key} = shape.get();
        const shapes = this.shapes;
        if (!isNullOrUndefined(key)) {
            if (shapes.get(key)) {
                error(`The key: [${key}] of [${(shape.constructor as ComponentConstructor).displayName}] is duplicate.`);
            } else {
                shapes.set(key, shape);
            }
        } else {
            shapes.set(shape.uniqueId, shape);
        }
    }

    public deleteShape(shape: DShape) {
        const {key} = shape.get();
        this.shapes.delete(isNullOrUndefined(key) ? shape.uniqueId : key);
    }

    @bind
    private onSelectionChange() {
        this.trigger('selectionChanged', this.graph.getSelectionCells());
    }

    private initGraph() {
        const graph = this.graph;

        graph.setEnabled(true);
        ['selectable', 'movable', 'resizable', 'rotatable', 'editable', 'connectable'].forEach(item => {
            const name = `isCell${item[0].toUpperCase()}${item.substring(1)}`;
            graph[name] = (cell: any) => {
                return cell.instance && cell.instance.get(item) && this[name as 'isCellEditable'].call(graph, cell);
            }
        })
        // this.rubberband.setEnabled(selectable);

        graph.resizeContainer = true;
        // graph.gridSize = 0;
    }

    private draw() {
        const graph = this.graph;
        const model = graph.model;

        model.beginUpdate();
        try {
            this.shapes.forEach(shape => {
                shape.draw();
            });
            // we render lines after all vertexes has rendered
            // this.lines.forEach(line => {
                // line.draw();
            // });

            // render layout
            // we must render parent firstly, because layouts may be nested
            // for (let i = this.layouts.length - 1; i >= 0; i--) {
                // this.layouts[i].draw();
            // }
            // this.layouts.forEach(layout => {
                // layout.draw();
            // });
            // this.lines.forEach(line => line._setStyle());
        } finally {
            model.endUpdate();
        }
    }
}
