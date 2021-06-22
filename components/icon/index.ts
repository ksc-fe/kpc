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

export default class Icon<T extends IconProps = IconProps> extends Component<T> {
    static template = template;
    static displayName = 'Icon';

    static typeDefs: Required<TypeDefs<IconProps>> = {
        size: [...sizes, 'default', String, Number],
        color: String,
        rotate: Boolean,
        hoverable: Boolean,
    };

    static defaults = (): Partial<IconProps> => ({
        size: 'default',
        rotate: false,
        hoverable: false,
    });

    private colors = [...colors, 'default'];
}

export {Icon};
