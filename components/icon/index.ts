import {Component, TypeDefs} from 'intact';
import template from './index.vdt';
import {colors, sizes} from './styles';
import {Sizes} from '../types';

export interface IconProps {
    size?:  Sizes | string | number
    color?: string
    rotate?: boolean
    hoverable?: boolean,
}

const typeDefs: Required<TypeDefs<IconProps>> = {
    size: [...sizes, 'default', String, Number],
    color: String,
    rotate: Boolean,
    hoverable: Boolean,
};

const defaults = (): Partial<IconProps> => ({
    size: 'default',
});

const defaultColors = [...colors, 'default'];

export class Icon extends Component<IconProps> {
    static displayName = 'Icon';
    static template = template;
    static typeDefs = typeDefs;
    static defaults = defaults;

    private colors = defaultColors;
}
