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
        disabled: Boolean,
    };

    defaults() {
        return {
            disabled: true,
        };
    }

    _init() {
        this.shapes = new Map();
        this.lines = [];
        this.layouts = [];
    }

    _mount() {
        const graph = this.graph = createGraph(this.refs.canvas);
        if (this.get('disabled')) {
            graph.setEnabled(false);
        }

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

    addLine(line) {
        this.lines.push(line);
    }

    addLayout(layout) {
        this.layouts.push(layout);
    }
}
