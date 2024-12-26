import { Component, TypeDefs } from 'intact';
import template from './container.vdt';
import { useConfigContext } from '../config';
import { useVirtualRows } from './useVirtualRows';

export interface VirtualListContainerProps {
    disabled?: boolean
}

const typeDefs: Required<TypeDefs<VirtualListContainerProps>> = {
    disabled: Boolean,
};

export class VirtualListContainer extends Component<VirtualListContainerProps> {
    static template = template;
    static typeDefs = typeDefs;

    private config = useConfigContext();
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
