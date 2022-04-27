import {Component, createRef, provide, Key, ComponentConstructor} from 'intact';
import template from './diagram.vdt';
import {createGraph} from './graph';
import mx from './mxgraph';
import {bind} from '../utils';
import {DIAGRAM} from './constants';
import type {DShape} from './shapes/shape';
import type {DLine} from './shapes/line';
import type {DLayout} from './layouts/layout';
import {error, isNullOrUndefined} from 'intact-shared';
import type {Events} from '../types';

const {mxRubberband, mxEvent} = mx;

export interface DiagramProps { }
export interface DiagramEvents {
    labelChanged: [any, string, string]
    selectionChanged: [any[]]
}

type StateCallback = (this: any, cell: any) => boolean;

const events: Events<DiagramEvents> = {
    labelChanged: true,
    selectionChanged: true,
};

export class Diagram extends Component<DiagramProps, DiagramEvents> {
    static template = template;
    static events = events;

    public graph: any;
    public cell: any;
    public shapes: Map<Key, DShape> = new Map();

    private lines: Set<DLine> = new Set(); 
    private layouts: Set<DLayout> = new Set();
    private canvasRef = createRef<HTMLDivElement>();

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

    updated() {
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

    public addLine(line: DLine) {
        this.lines.add(line);
    }

    public deleteLine(line: DLine) {
        this.lines.delete(line);
    }

    public addLayout(layout: DLayout) {
        this.layouts.add(layout);
    }

    public deleteLayout(layout: DLayout) {
        this.layouts.delete(layout);
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
            this.lines.forEach(line => {
                line.draw();
            });

            // render layout
            this.layouts.forEach(layout => {
                layout.draw();
            });
        } finally {
            model.endUpdate();
        }
    }
}
