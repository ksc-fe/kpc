import {Component, TypeDefs} from 'intact';
import template from './index.vdt';

export interface BadgeProps {
    text?: string | number
    max?: number
    disabled?: boolean
}

const typeDefs: Required<TypeDefs<BadgeProps>> = {
    text: [String, Number],
    max: Number,
    disabled: Boolean,
};

const defaults: Partial<BadgeProps> = {
    disabled: false
} 

export default class Badge<T extends BadgeProps = BadgeProps> extends Component<T> {
    static template = template;
    static typeDefs = typeDefs;
    static defaults = defaults;
}

export {Badge}

