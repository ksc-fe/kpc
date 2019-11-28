import Intact from 'intact';
import template from './diagram.vdt';
import './index.styl';
import mx from './mxgraph';
import {createGraph} from './graph';
import {mapChildren} from '../utils';
import Shape from './shapes/shape';
import Line from './shapes/line';

const {mxGraph, mxGraphModel} = mx;

export default class Diagram extends Intact {
    @Intact.template()
    static template = template;

    _init() {
        this.vertexes = new Map(); 
    }

    _mount() {
        const graph = createGraph(this.element);
        const model = graph.model;
        const vertexes = this.vertexes;

        model.beginUpdate();
        try {
            // we render lines at end
            const lines = [];
            const render = (children, parent) => {
                mapChildren(children, vNode => {
                    const props = vNode.props;
                    const Ctor = vNode.tag;
                    const instance = new Ctor(props); 
                    if (Ctor.prototype instanceof Shape) {
                        if (Ctor !== Line) {
                            const key = props.key;
                            if (vertexes.get(key)) {
                                Intact.utils.error(new Error(`The key: [${key}] of [D${Ctor.name}] is duplicate.`))  
                            } else {
                                vertexes.set(key, instance);
                            }
                            instance.render(graph, this, parent);
                            // if there are children, group them
                            render(instance.get('children'), instance.cell);
                        } else {
                            lines.push(instance);
                        }
                    }
                });
            };
            render(this.get('children'), null);
            lines.forEach(instance => instance.render(graph, this));
        } finally {
            model.endUpdate();
        }
    }
}
