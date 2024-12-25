import { Component, TypeDefs } from 'intact';
import template from './container.vdt';
import { Events } from '../types';
import { useConfigContext } from '../config';
import { useVirtual } from './useVirtual';
import { useVirtualRows } from './useVirtualRows';

export interface VirtualListContainerProps {
    estimatedItemHeight?: number;
    bufferSize?: number;
    height?: number | string;
}

export interface VirtualListContainerEvents {}

const typeDefs: Required<TypeDefs<VirtualListContainerProps>> = {
    height: [Number, String],
    estimatedItemHeight: Number,
    bufferSize: Number,
};

const defaults = (): Partial<VirtualListContainerProps> => ({
    estimatedItemHeight: 30,
    bufferSize: 6,
});

const events: Events<VirtualListContainerEvents> = {};

export class VirtualListContainer extends Component<VirtualListContainerProps, VirtualListContainerEvents> {
    static template = template;
    static typeDefs = typeDefs;
    static defaults = defaults;
    static events = events;

    private config = useConfigContext();
    private virtualState = useVirtual();
    private virtualRows = useVirtualRows();


    // public scrollToIndex(index: number, behavior: ScrollBehavior = 'auto') {
        // const { containerRef, getItemTop } = this.virtualState;
        // if (containerRef?.value) {
            // const top = getItemTop(index);
            // containerRef.value.scrollTo({
                // top,
                // behavior,
            // });
        // }
    // }
}
