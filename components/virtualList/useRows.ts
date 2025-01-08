import { useInstance, VNode, createRef, createFragment } from 'intact';
import { VirtualListRows } from './rows';

export function useRows() {
    const instance = useInstance() as VirtualListRows;
    const rows = createRef<VNode[]>([]);

    instance.on('$receive:children', (children) => {
        // use fragment vnode to normalize children
        const vNode = createFragment(children, 0 /* ChildrenTypes.UnknownChildren */);

        // convert to array if it has only one child
        const childrenType = vNode.childrenType;
        if (childrenType & 2 /* ChildrenTypes.HasVNodeChildren */) {
            rows.value = [vNode.children as unknown as VNode];
        } else if (childrenType & 1 /* ChildrenTypes.HasInvalidChildren */) {
            rows.value = [];
        } else {
            rows.value = vNode.children as VNode[];
        }
    });

    return rows;
}
