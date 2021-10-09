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
    onMounted,
} from 'intact';
import {mapChildren, ValidVNode} from '../../utils';
import mx from '../mxgraph';
import {isStringOrNumber} from 'intact-shared';
import {DIAGRAM, SHAPE} from '../constants';
import type {Diagram} from '../diagram';
import {useCell} from './useCell';

const {mxCell, mxGeometry} = mx;

export interface DShapeProps {
    strokeStyle?: 'solid' | 'dashed' | 'dotted'
    label?: string | number
    left?: string | number
    top?: string | number
    width?: string | number
    height?: string | number
    style?: Record<string, string | number>
    movable?: boolean
    selectable?: boolean
    resizable?: boolean
    rotatable?: boolean
    editable?: boolean
    connectable?: boolean
    data?: any
}

const strOrNum = [String, Number];
const typeDefs: Required<TypeDefs<DShapeProps>> = {
    strokeStyle: ['solid', 'dashed', 'dotted'],
    label: strOrNum,
    left: strOrNum,
    top: strOrNum,
    width: strOrNum,
    height: strOrNum,
    style: Object,
    movable: Boolean,
    selectable: Boolean,
    resizable: Boolean,
    rotatable: Boolean,
    editable: Boolean,
    connectable: Boolean,
    data: null,
};

const defaults = (): Partial<DShapeProps> => ({
    strokeStyle: 'solid',
    left: 0,
    top: 0,
    width: 0,
    height: 0,
});

let uniqueId = 0;

export abstract class DShape<P extends DShapeProps = DShapeProps> extends Component<P> {
    static template = function(this: DShape) {
        let children: Children = this.children;
        if (children && children.length) {
            children = h('div', {ref: this.wrapperRef}, children);
        }
        const Ctor = this.constructor as ComponentConstructor;
        return h(Ctor.displayName || Ctor.name, null, children);
    };
    static typeDefs = typeDefs;
    static defaults = defaults;

    public wrapperRef = createRef<HTMLDivElement>();
    public hasElement: boolean = false;
    public uniqueId = uniqueId++;

    private children: ValidVNode[] | null = null;
    private cell = useCell();
    private diagram = inject<Diagram>(DIAGRAM)!;
    private parent = inject<DShape | null>(SHAPE, null);

    init() {
        // shape can nest
        provide(SHAPE, this);

        this.on('$receive:children', children => {
            this.children = mapChildren(children, vNode => {
                if (isStringOrNumber(vNode)) return vNode;
                if (isComponentClass(vNode)) {
                    const proto = vNode.tag.prototype;
                    if (proto instanceof DShape) {
                        return vNode;
                    }
                }
                this.hasElement = true;
                return vNode;
            });
        });
    }

    public getCell() {
        return this.cell.getCell();
    }

    public draw() {
        const {getCell, diagram, setStyle} = this.cell;
        const cell = getCell();
        const parentCell = this.parent ? this.parent.getCell() : diagram.cell;

        cell.vertex = true;
        setStyle();
        diagram.graph.addCell(cell, parentCell); 
    }

    public addToDigram() {
        this.cell.diagram.addShape(this);
    }

    public deleteFromDiagram() {
        this.cell.diagram.deleteShape(this);
    }

    public abstract getStylesheet(): string;

    public getGeometry() {
        const {width, height, top, left} = this.get();
        return new mxGeometry(+left!, +top!, +width!, +height!);
    } 
}
