import { useInstance, VNode, createRef, createFragment, Children, isText } from 'intact';
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
            const children = vNode.children as unknown as VNode;
            if (isText(children)) {
                // ignore void and text vnode
                rows.value = [];
            } else {
                rows.value = [children];
            }
        } else if (childrenType & 1 /* ChildrenTypes.HasInvalidChildren */) {
            rows.value = [];
        } else {
            rows.value = vNode.children as VNode[];

            if (process.env.NODE_ENV !== 'production') {
                rows.value.forEach(row => {
                    if (isText(row)) {
                        console.warn('VirtualList: Text node can not been used as children.');
                    }
                });
            }
        }
    });

    return rows;
}
