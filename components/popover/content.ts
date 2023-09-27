import { Component, TypeDefs } from "intact";
import template from "./content.vdt";

export interface PopoverContentProps {
    type?: 'info' | 'success' | 'warning' | 'error'
    title?: string;
    content?: string;
}

export interface PopoverContentBlocks {
    title: null;
    content: null;
}

export interface PopoverContentEvents {}

const typeDefs: Required<TypeDefs<PopoverContentProps>> = {
    content: String,
    type: ['info', 'error', 'success', 'warning'],
    title: String,
};

export class PopoverContent extends Component<PopoverContentProps, PopoverContentEvents, PopoverContentBlocks> {
    static template = template;
    static typeDefs = typeDefs;
}
