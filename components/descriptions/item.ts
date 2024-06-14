
import { Component, TypeDefs, VNode } from "intact";
import template from './item.vdt';
import { useConfigContext } from '../config';

export interface DescriptionItemProps {
    label?: string | number | VNode
    content?: string | number | VNode
    append?: string | number | VNode
}

export interface DescriptionItemBlocks {
    append: null
    label: null
}

export interface DescriptionItemEvents {}

const typeDefs: Required<TypeDefs<DescriptionItemProps>> = {
    label: [String, Number, VNode],
    content: [String, Number, VNode],
    append: [String, Number, VNode]
};


export class DescriptionItem extends Component<DescriptionItemProps, DescriptionItemEvents, DescriptionItemBlocks> {
    static template = template;
    static typeDefs = typeDefs;

    private config = useConfigContext();
}