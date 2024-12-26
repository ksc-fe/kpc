import { Component, TypeDefs, createRef } from 'intact';
import template from './virtual.vdt';

export interface VirtualListProps {
    disabled?: boolean
}

const typeDefs: Required<TypeDefs<VirtualListProps>> = {
    disabled: Boolean,
};

export class VirtualList extends Component<VirtualListProps>  {
    static template = template;
    static typeDefs = typeDefs;

    // public scrollToIndex(index: number, behavior: ScrollBehavior = 'auto') {
        // this.containerRef.value?.scrollToIndex(index, behavior);
    // }
}
