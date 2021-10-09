import {Component, TypeDefs, Key} from 'intact';
import {DShape, DShapeProps} from './shape';
import mx from '../mxgraph';

export interface DLineProps {
    strokeStyle?: 'solid' | 'dashed' | 'dotted'
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
    strokeStyle: 'solid',
    startArrow: 'none',
    endArrow: 'classic',
    startPoint: [0, 0],
    endPoint: [50, 0],
    type: 'straight',
});

export class DLine extends Component<DLineProps> {
    static typeDefs = typeDefs;
    static defaults = defaults;
}
