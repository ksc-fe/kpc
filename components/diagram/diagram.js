import Intact from 'intact';
import template from './diagram.vdt';
import './index.styl';
import mx from './mxgraph';
import {createGraph} from './graph';
import {mapChildren} from '../utils';
import {DShape} from './shapes/shape';
import {DLine} from './shapes/line';

const {mxGraph, mxGraphModel} = mx;

export default class Diagram extends Intact {
    @Intact.template()
    static template = template;

    _init() {
        this.shapes = new Map();
        this.lines = [];
    }

    _mount() {
        const graph = this.graph = createGraph(this.element);
        const model = graph.model;

        model.beginUpdate();
        try {
            this.shapes.forEach(shape => {
                shape.render();
            });
            // we render lines at end
            this.lines.forEach(line => {
                line.render();
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
}
