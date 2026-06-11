import {Component, TypeDefs} from 'intact';
import template from './index.vdt';
import {sizes, Sizes} from '../../styles/utils';
import { useConfigContext } from '../config';

export type SpinSize = Sizes | number;

export interface SpinProps {
    size?: SpinSize
    center?: boolean
    overlay?: boolean
    color?: string
    gradientFrom?: string
    gradientTo?: string
    gradientX1?: string
    gradientY1?: string
    gradientX2?: string
    gradientY2?: string
    strokeWidth?: number
}

export interface SpinEvents { }

export interface SpinBlocks {
    canvas: null
}

const typeDefs: Required<TypeDefs<SpinProps>> = {
    size: [...sizes, Number],
    center: Boolean,
    overlay: Boolean,
    color: String,
    gradientFrom: String,
    gradientTo: String,
    gradientX1: String,
    gradientY1: String,
    gradientX2: String,
    gradientY2: String,
    strokeWidth: Number,
}

const defaults = (): Partial<SpinProps> => ({
    size: 'default',
    gradientX1: '0%',
    gradientY1: '0%',
    gradientX2: '100%',
    gradientY2: '100%',
    strokeWidth: 6,
});

export class Spin extends Component<SpinProps, SpinEvents, SpinBlocks> {
    static template = template;
    static typeDefs = typeDefs;
    static defaults = defaults;

    private config = useConfigContext();
    private _gradientId = Math.random().toString(36).slice(2, 9);
}
