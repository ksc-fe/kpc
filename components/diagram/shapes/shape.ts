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
import {DIAGRAM, SHAPE} from '../constants';
import type {Diagram} from '../diagram';
import {DBase, DBaseProps} from './base';

const {mxCell, mxGeometry} = mx;

export interface DShapeProps extends DBaseProps {
    left?: string | number
    top?: string | number
    width?: string | number
    height?: string | number
    movable?: boolean
    selectable?: boolean
    resizable?: boolean
    rotatable?: boolean
    editable?: boolean
    connectable?: boolean
}

const strOrNum = [String, Number];
const typeDefs: Required<TypeDefs<DShapeProps>> = {
    ...DBase.typeDefs,
    left: strOrNum,
    top: strOrNum,
    width: strOrNum,
    height: strOrNum,
    movable: Boolean,
    selectable: Boolean,
    resizable: Boolean,
    rotatable: Boolean,
    editable: Boolean,
    connectable: Boolean,
};

const defaults = (): Partial<DShapeProps> => ({
    ...DBase.defaults(),
    left: 0,
    top: 0,
    width: 0,
    height: 0,
});

export abstract class DShape<P extends DShapeProps = DShapeProps> extends DBase<P> {
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

    private wrapperRef = createRef<HTMLDivElement>();
    private hasElement: boolean = false;
    private children: ValidVNode[] | null = null;
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

    updated() {
        const model = this.diagram.graph.model;
        const geo = this.getGeometry();
        model.setGeometry(this.cell, geo);
    }

    beforeUnmount() {
        const graph = this.diagram.graph;
        this.deleteFromDiagram();
        graph.removeCells([this.cell], false);
    }

    protected startDraw() {
        const diagram = this.diagram;
        const cell = this.cell!;
        const parentCell = this.parent ? this.parent.cell : diagram.cell;

        cell.vertex = true;
        this.setStyle();
        diagram.graph.addCell(cell, parentCell); 
    }

    protected addToDigram() {
        this.diagram.addShape(this);
    }

    protected deleteFromDiagram() {
        this.diagram.addShape(this);
    }

    protected getGeometry() {
        const {width, height, top, left} = this.get();
        return new mxGeometry(+left!, +top!, +width!, +height!);
    } 

    protected getValue() {
        const {label} = this.get();
        return isNullOrUndefined(label) ?
            this.hasElement && this.wrapperRef.value || null :
            String(label);
    }

    protected setStyle() {
        // if hasElement, disable edit
        this.diagram.graph.setCellStyles('editable', this.hasElement ? 0 : 1, [this.cell]);

        super.setStyle();
    }
}
