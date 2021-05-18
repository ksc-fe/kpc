import {Component, TypeDefs} from 'intact';
import template from './index.vdt';
import '../../styles/kpc.styl';
import './index.styl';

export interface IconProps {
    size?: 'large' | 'default' | 'small' | 'mini' | string | number
    color?: string
}

const colors = ['default', 'primary', 'warning', 'danger', 'success'];

export default class Icon<T extends IconProps = IconProps> extends Component<T> {
    static template = template;
    static displayName = 'Icon';

    static typeDefs: TypeDefs<IconProps> = {
        size: ['large', 'default', 'small', 'mini', String, Number],
        color: String,
    };

    static defaults: Partial<IconProps> = {
        size: 'default',
    }

    private colors = colors; 
}

export {Icon};
