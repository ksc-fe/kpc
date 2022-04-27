import {Component, TypeDefs} from 'intact';
import template from './index.vdt';
import {sizes, Sizes} from '../../styles/utils';

export interface SpinProps {
    size?: Sizes
    center?: boolean
    overlay?: boolean
}

export interface SpinEvents { }

export interface SpinBlocks {
    canvas: null
}

const typeDefs: Required<TypeDefs<SpinProps>> = {
    size: sizes,
    center: Boolean,
    overlay: Boolean,
}

const defaults = (): Partial<SpinProps> => ({
    size: 'default'
});

export class Spin extends Component<SpinProps, SpinEvents, SpinBlocks> {
    static template = template;
    static typeDefs = typeDefs;
    static defaults = defaults;
}
