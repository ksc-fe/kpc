import { Component, TypeDefs, createRef } from 'intact';
import template from './virtual.vdt';
import { useConfigContext } from '../config';
import type { VirtualListContainer } from './container';

export interface VirtualListProps {
    estimatedItemHeight?: number;
    bufferSize?: number;
    height?: number | string;
}

const typeDefs: Required<TypeDefs<VirtualListProps>> = {
    estimatedItemHeight: Number,
    bufferSize: Number,
    height: [Number, String],
};

const defaults = (): Partial<VirtualListProps> => ({
    estimatedItemHeight: 30,
    bufferSize: 6,
});

export class VirtualList extends Component<VirtualListProps> {
    static template = template;
    static typeDefs = typeDefs;
    static defaults = defaults;

    private config = useConfigContext();
    private containerRef = createRef<VirtualListContainer>();

    public scrollToIndex(index: number, behavior: ScrollBehavior = 'auto') {
        this.containerRef.value?.scrollToIndex(index, behavior);
    }
}
