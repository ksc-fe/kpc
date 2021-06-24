import {Component, TypeDefs, inject, Children} from 'intact';
import template from './group.vdt';
import {SELECT} from './constants';
import type {Select} from './select';

export interface OptionGroupProps {
    label?: Children 
}

const typeDefs: Required<TypeDefs<OptionGroupProps>> = {
    label: [String, Number, /* VNode */]
}

export class OptionGroup extends Component {
    static template = template;
    static typeDefs = typeDefs;

    private select: Select | null = null;
    
    init() {
        this.select = inject(SELECT)!;
    }
}
