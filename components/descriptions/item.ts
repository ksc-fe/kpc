
import { Component, TypeDefs, VNode } from "intact";
import template from './item.vdt';
import { useConfigContext } from '../config';

export interface DescriptionItemProps {
    label?: string
    content?: string | number | VNode
    option?: string | number | VNode
}

export interface DescriptionBlocks {
    option: null
}


const typeDefs: Required<TypeDefs<DescriptionItemProps>> = {
    label: String,
    content: [String, Number, VNode],
    option: [String, Number, VNode]
};


export class DescriptionItem extends Component<DescriptionItemProps, DescriptionBlocks> {
    static template = template;
    static typeDefs = typeDefs;

    private config = useConfigContext();
}