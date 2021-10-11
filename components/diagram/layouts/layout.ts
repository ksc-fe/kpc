import {
    Component,
    TypeDefs,
    ComponentConstructor,
    createVNode as h,
    inject,
    provide,
    isComponentClass
} from 'intact';
import {eachChildren} from '../../utils';
import {DBase} from '../shapes/base';
import type {DShape} from '../shapes/shape';
import {DIAGRAM, SHAPE, LAYOUT} from '../constants';
import type {Diagram} from '../diagram';
import type {Cell} from '../shapes/base';
import {isStringOrNumber, error} from 'intact-shared';

export interface DLayoutProps {
    left?: number | string
    top?: number | string
}

const typeDefs: Required<TypeDefs<DLayoutProps>> = {
    left: [String, Number],
    top: [String, Number],
};

const defaults = (): Partial<DLayoutProps> => ({
    left: 0,
    top: 0,
});

export abstract class DLayout<P extends DLayoutProps = DLayoutProps> extends Component<P> {
    static template = function(this: DLayout) {
        if (process.env.NODE_ENV !== 'production') {
            eachChildren(this.get('children'), vNode => {
                if (isStringOrNumber(vNode)) return;
                if (isComponentClass(vNode) && (vNode.tag.prototype instanceof DBase)) return;

                error(`DLayout can only contain DShape or DLine, but ${vNode.tag} found.`);
            });
        }
        const constructor = this.constructor as ComponentConstructor;
        return h(constructor.displayName!, null, this.get('children'));
    };
    static typeDefs = typeDefs;
    static defaults = defaults;

    private diagram = inject<Diagram>(DIAGRAM)!;
    private shapes = new Set<DBase>();
    private shape = inject<DShape | null>(SHAPE, null);

    init() {
        provide(LAYOUT, this);
    }

    mounted() {
        this.diagram.addLayout(this);
    }

    beforeUnmount() {
        this.diagram.deleteLayout(this);
    }

    public addShape(shape: DBase) {
        this.shapes.add(shape);
    }

    public deleteShape(shape: DBase) {
        this.shapes.delete(shape);
    }

    public draw() {
        const {left, top} = this.get();
        const diagram = this.diagram;
        const graph = diagram.graph;
        const layout = this.getLayout(graph);

        // Allows the layout to move cells even though cells
        // aren't movable in the graph
        layout.isVertexMovable = () => true;

        const cells = Array.from(this.shapes).map(shape => shape.cell!);
        const parent = this.shape ? this.shape : this.diagram;
        this.execute(layout, cells, parent, graph);

        // move cells totally
        graph.moveCells(cells, +left!, +top!);
    }

    protected abstract getLayout(graph: any): any;

    protected execute(layout: any, cells: Cell[], parent: DShape | Diagram, graph: any) {
        layout.execute(parent.cell, cells);
    }
}
