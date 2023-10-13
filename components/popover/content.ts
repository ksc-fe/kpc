import {
    TooltipContent,
    TooltipContentProps,
    TooltipContentEvents,
    TooltipContentBlocks,
} from "../tooltip/content";
import { Component, TypeDefs, Children, VNode } from "intact";
import template from "./content.vdt";

export interface PopoverContentProps extends TooltipContentProps {
    type?: 'info' | 'success' | 'warning' | 'error'
    title?: Children;
    content?: Children;
}

export interface PopoverContentEvents extends TooltipContentEvents { }

export interface PopoverContentBlocks extends TooltipContentBlocks {
    title: null;
    content: null;
    buttons: null;
}

const typeDefs: Required<TypeDefs<PopoverContentProps>> = {
    type: ['info', 'error', 'success', 'warning'],
    title: [String, Number, VNode, Array],
    content: [String, Number, VNode, Array],
};

export class PopoverContent extends TooltipContent<
    PopoverContentProps,
    PopoverContentEvents,
    PopoverContentBlocks
> {
    static template = template;
    static typeDefs = typeDefs;

    // don't check children
    protected isEmptyChildren: boolean = false;
}
