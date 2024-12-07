import { Component, TypeDefs } from 'intact';
import template from './index.vdt';
import { useVirtual } from './useVirtual';
import { Events } from '../types';
import { useConfigContext } from '../config';

export interface VirtualListProps {
    estimatedItemHeight?: number;
    bufferSize?: number;
    height?: number | string;
}

export interface VirtualListEvents {}

const typeDefs: Required<TypeDefs<VirtualListProps>> = {
    estimatedItemHeight: Number,
    bufferSize: Number,
    height: [Number, String],
};

const defaults = (): Partial<VirtualListProps> => ({
    estimatedItemHeight: 30,
    bufferSize: 6,
});

const events: Events<VirtualListEvents> = {};

export class VirtualList extends Component<VirtualListProps, VirtualListEvents> {
    static template = template;
    static typeDefs = typeDefs;
    static defaults = defaults;
    static events = events;

    public virtual = useVirtual();
    private config = useConfigContext();

    scrollToIndex(index: number, behavior: ScrollBehavior = 'auto') {
        const { containerRef, getItemTop } = this.virtual;
        if (containerRef?.value) {
            const top = getItemTop(index);
            containerRef.value.scrollTo({
                top,
                behavior,
            });
        }
    }
}