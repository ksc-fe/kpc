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
    strokeWidth: Number,
}

const defaults = (): Partial<SpinProps> => ({
    size: 'default',
    strokeWidth: 6,
});

export class Spin extends Component<SpinProps, SpinEvents, SpinBlocks> {
    static template = template;
    static typeDefs = typeDefs;
    static defaults = defaults;

    private config = useConfigContext();
}
