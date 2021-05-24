import {Component, TypeDefs} from 'intact';
import template from './index.vdt';
import {colors} from './styles';
import {Sizes} from '../types';
// import '../../styles/kpc.styl';
// import './index.styl';

export interface IconProps {
    size?:  Sizes | string | number
    color?: string
    rotate?: boolean
}

export default class Icon<T extends IconProps = IconProps> extends Component<T> {
    static template = template;
    static displayName = 'Icon';

    static typeDefs: TypeDefs<IconProps> = {
        size: ['large', 'default', 'small', 'mini', String, Number],
        color: String,
        rotate: Boolean,
    };

    static defaults: Partial<IconProps> = {
        size: 'default',
        rotate: false,
    }

    private colors = colors; 
}

export {Icon};
