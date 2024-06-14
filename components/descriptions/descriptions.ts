import {Component, TypeDefs} from 'intact';
import {DescriptionItemProps} from './item';
import template from './descriptions.vdt';
import { useConfigContext } from '../config';
import { VNode } from "intact";

export interface DescriptionsProps {
    vertical?: boolean
    columns?: number
    items?: DescriptionItemProps[]
    title?: string | number | VNode
}

export interface DescriptionsBlocks {
    title: null
}


export interface DescriptionsEvents {}


const typeDefs: Required<TypeDefs<DescriptionsProps>> = {
    vertical: Boolean,
    columns: Number,
    items: Array,
    title: [String, Number, VNode],
};




const defaults = (): Partial<DescriptionsProps> => ({
    columns: 3,
});

export class Descriptions extends Component<DescriptionsProps, DescriptionsEvents, DescriptionsBlocks> {
    static template = template;
    static typeDefs = typeDefs;
    static defaults = defaults;
    
    private config = useConfigContext();
}