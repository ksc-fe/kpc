import {Component, TypeDefs, inject, Children, VNode} from 'intact';
import template from './group.vdt';
import {SELECT} from './constants';
import type {Select} from './select';

export interface OptionGroupProps {
    label?: Children 
}

export interface OptionGroupEvents { }

export interface OptionGroupBlocks {
    label: null
}

const typeDefs: Required<TypeDefs<OptionGroupProps>> = {
    label: [String, Number, VNode]
}

export class OptionGroup extends Component<OptionGroupProps, OptionGroupEvents, OptionGroupBlocks> {
    static template = template;
    static typeDefs = typeDefs;

    private select: Select = inject(SELECT)!;
}
