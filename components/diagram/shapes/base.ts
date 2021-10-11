import {
    Component,
    TypeDefs,
    createVNode as h,
    createRef,
    ComponentConstructor,
    Children,
    useInstance,
    isComponentClass,
    provide,
    inject,
    VNodeComponentClass,
} from 'intact';
import {mapChildren, ValidVNode} from '../../utils';
import mx from '../mxgraph';
import {isStringOrNumber, isNullOrUndefined, EMPTY_OBJ} from 'intact-shared';
import {DIAGRAM, SHAPE, LAYOUT} from '../constants';
import type {DLayout} from '../layouts/layout';
import type {Diagram} from '../diagram';
import {useCell} from './useCell';

const {mxCell, mxGeometry} = mx;

export type Cell = {
    data?: any
    instance?: DBase
    vertex?: boolean
    edge?: boolean
    getGeometry: () => any
    setTerminal: (...args: any[]) => void
}

export interface DBaseProps {
    strokeStyle?: 'solid' | 'dashed' | 'dotted'
    label?: string | number
    style?: Record<string, string | number>
    data?: any
}

const typeDefs: Required<TypeDefs<DBaseProps>> = {
    strokeStyle: ['solid', 'dashed', 'dotted'],
    label: [String, Number],
    style: Object,
    data: null,
};

const defaults = (): Partial<DBaseProps> => ({
    strokeStyle: 'solid',
});

let uniqueId = 0;

export abstract class DBase<P extends DBaseProps = DBaseProps> extends Component<P> {
    static typeDefs = typeDefs;
    static defaults = defaults;

    public uniqueId = uniqueId++;
    public cell: Cell | null = null;

    protected diagram = inject<Diagram>(DIAGRAM)!;

    private hasDrew = false;
    private layout = inject<DLayout | null>(LAYOUT, null);

    mounted() {
        const {data} = this.get();
        const cell = this.cell = this.createCell();
        // add data to the cell, so that we can get it when select the cell
        cell.data = data; 
        cell.instance = this;

        this.addToDigram();

        if (this.layout) {
            this.layout.addShape(this);
        }
    }

    beforeUpdate(lastVNode: VNodeComponentClass<DBase>, nextVNode: VNodeComponentClass<DBase>) {
        const lastProps = lastVNode.props || EMPTY_OBJ;
        const nextProps = nextVNode.props || EMPTY_OBJ;
        if (lastProps !== nextProps) {
            const graph = this.diagram.graph;
            const model = graph.getModel();

            model.beginUpdate();
            this.updateProps(model, lastProps, nextProps);
            model.endUpdate();
        }
    }

    beforeUnmount() {
        const graph = this.diagram.graph;
        this.deleteFromDiagram();
        graph.removeCells([this.cell], false);

        if (this.layout) {
            this.layout.deleteShape(this);
        }
    }

    public draw() {
        if (this.hasDrew) return;
        this.startDraw();
        this.hasDrew = true;
    }

    protected abstract startDraw(): void;

    protected abstract addToDigram(): void;

    protected abstract deleteFromDiagram(): void;

    protected abstract getStylesheet(): string;

    protected abstract getGeometry(): any;

    protected updateProps(model: any, lastProps: DBaseProps, nextProps: DBaseProps) {
        const cell = this.cell!;

        if (lastProps.label !== nextProps.label) {
            // update value
            model.setValue(cell, this.getValue());
        }
        // update style
        model.setStyle(cell, this.getStylesheet());
        this.setStyle();

        // update data
        cell.data = nextProps.data;
    }

    protected createCell() {
        return new mxCell(this.getValue(), this.getGeometry(), this.getStylesheet());        
    }

    protected getValue(): string | null | Element {
        const {label} = this.get();
        return isNullOrUndefined(label) ? null : String(label);
    }

    protected setStyle() {
        const graph = this.diagram.graph;
        const cells = [this.cell];
        const styles = {...this.get('style'), ...this.genStyles()};

        for (let key in styles) {
            graph.setCellStyles(key, styles[key as keyof typeof styles], cells);
        }
    }

    protected genStyles() {
        const styles: {dashed?: number | null, dashPattern?: string | null} = {};

        switch (this.get('strokeStyle')) {
            case 'dashed':
                styles.dashed = 1;
                styles.dashPattern = null;
                break;
            case 'dotted':
                styles.dashed = 1;
                styles.dashPattern = '1 2';
                break;
            case 'solid':
                styles.dashed = null;
                styles.dashPattern = null;
                break;
        }

        return styles;
    }
}
