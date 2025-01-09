import { Component, TypeDefs, findDomFromVNode } from 'intact';
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

    // TODO
    // public scrollToIndex(index: number, behavior: ScrollBehavior = 'auto') {
    //     const { disabled } = this.get();
    //     if (disabled) return;

    //     let height = 0;
    //     for (let i = 0; i < index; i++) {
    //         height += this.virtualRows.getRowHeightByIndex(i);
    //     }
    //     const containerDom = findDomFromVNode(this.$lastInput!, true) as HTMLElement;
    //     containerDom.scrollTo({
    //         top: height,
    //         behavior,
    //     });
    // }
}
