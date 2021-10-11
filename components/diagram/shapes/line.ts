import {Component, TypeDefs, Key, createVNode as h} from 'intact';
import {DShape, DShapeProps} from './shape';
import mx from '../mxgraph';
import {DBase, DBaseProps} from './base';
import {isNullOrUndefined} from 'intact-shared';

export interface DLineProps extends DBaseProps {
    type?: 'rounded' | 'sharp' | 'curved' | 'straight'
    startArrow?: Arrow
    endArrow?: Arrow
    startPoint?: Point
    endPoint?: Point
    exit?: Point
    entry?: Point
    from?: Key
    to?: Key
}

type Arrow = 
    | 'none' 
    | 'classic'
    | 'classicThin'
    | 'block'
    | 'blockThin'
    | 'open'
    | 'openThin'
    | 'oval'
    | 'diamond'
    | 'diamondThin'

type Point = [number, number] 

type ExitAndEntryStyles = {
    exitX?: number
    exitY?: number
    perimeter?: number
    entryX?: number
    entryY?: number
}

type TypeStyles = {
    edgeStyle?: string
    rounded?: number
    curved?: number | null
    noEdgeStyle?: null 
}

const {mxCell, mxGeometry, mxPoint} = mx;
const arrows: Arrow[] = [
    'none',
    'classic', 'classicThin',
    'block', 'blockThin',
    'open', 'openThin',
    'oval',
    'diamond', 'diamondThin',
];

const typeDefs: Required<TypeDefs<DLineProps>> = {
    ...DBase.typeDefs,
    strokeStyle: ['solid', 'dashed', 'dotted'],
    type: ['rounded', 'sharp', 'curved', 'straight'],
    startArrow: arrows,
    endArrow: arrows,
    startPoint: Array,
    endPoint: Array,
    exit: Array,
    entry: Array,
    from: [String, Number],
    to: [String, Number],
};

const defaults = (): Partial<DLineProps> => ({
    ...DBase.defaults(),
    startArrow: 'none',
    endArrow: 'classic',
    startPoint: [0, 0],
    endPoint: [50, 0],
    type: 'straight',
});

export class DLine extends DBase<DLineProps> {
    static template = function(this: DLine) {
        return h('dline', null, this.get('children'));
    } 
    static typeDefs = typeDefs;
    static defaults = defaults;

    protected startDraw() {
        const graph = this.diagram.graph;
        const cell = this.cell!;
        cell.edge = true;

        this.setStyle();
        this.setTerminal();

        graph.addCell(cell); 
    }

    private setTerminal() {
        const {from, to, startPoint, endPoint} = this.get();
        const diagram = this.diagram;
        const graph = diagram.graph;
        const shapes = diagram.shapes;
        const cell = this.cell!;
        const geo = cell.getGeometry();

        let tmp;
        if (isNullOrUndefined(from) || !(tmp = shapes.get(from))) {
            cell.setTerminal(null, true);
            geo.setTerminalPoint(new mxPoint(...startPoint!), true);
        } else {
            cell.setTerminal(tmp.cell, true);
        }

        if (isNullOrUndefined(to) || !(tmp = shapes.get(to))) {
            cell.setTerminal(null, false);
            geo.setTerminalPoint(new mxPoint(...endPoint!), false);
        } else {
            cell.setTerminal(tmp.cell, false);
        }
    }

    protected addToDigram() {
        this.diagram.addLine(this);
    }

    protected deleteFromDiagram() {
        this.diagram.deleteLine(this);
    }

    protected getStylesheet() {
        const {startArrow, endArrow} = this.get();

        return `startArrow=${startArrow};endArrow=${endArrow};html=1;fontSize=12;`;
    }

    protected getGeometry() {
        const geo = new mxGeometry(0, 0, 0, 0);
        geo.relative = true;

        return geo;
    }

    protected genStyles() {
        return {
            ...this.genStylesForExitAndEntry(),
            ...this.genStylesForType(),
            ...super.genStyles(),
        };
    }

    protected updateProps(model: any, lastProps: DLineProps, nextProps: DLineProps) {
        super.updateProps(model, lastProps, nextProps);
        if ((['from', 'to', 'startPoint', 'endPoint'] as const).find(key => {
            return lastProps[key] !== nextProps[key]
        })) {
            // update from and to
            this.setTerminal();
        }
    }

    private genStylesForExitAndEntry() {
        const styles: ExitAndEntryStyles = {};
        const {from, exit, to, entry} = this.get();

        if (!isNullOrUndefined(from) && exit) {
            styles.exitX = exit[0];
            styles.exitY = exit[1];
            styles.perimeter = 0;
        }
        if (!isNullOrUndefined(to) && entry) {
            styles.entryX = entry[0];
            styles.entryY = entry[1];
            styles.perimeter = 0;
        }

        return styles;
    }

    private genStylesForType() {
        const styles: TypeStyles = {};
        const {type} = this.get();

        if (type !== 'straight') {
            styles.edgeStyle = 'orthogonalEdgeStyle';
        }
        switch (type) {
            case 'rounded':
                styles.rounded = 1;
                styles.curved = null;
                break;
            case 'curved':
                styles.rounded = 0;
                styles.curved = 1;
                break;
            case 'sharp':
                styles.rounded = 0;
                styles.curved = null;
                break;
            default:
                styles.edgeStyle = 'straight';
                styles.curved = null;
                styles.noEdgeStyle = null;
                break;
        }

        return styles;
    }
}
