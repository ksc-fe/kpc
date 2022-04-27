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

export class Badge extends Component<BadgeProps> {
    static template = template;
    static typeDefs = typeDefs;
}

