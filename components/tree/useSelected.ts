import {useInstance, Key} from 'intact';
import type {Tree} from './';
import type {Node, DataItem} from './useNodes';

export function useSelected(getNodes: () => Node[]) {
    const instance = useInstance() as Tree;
    let selectedKeys: Set<Key> = new Set();

    instance.on('$receive:selectedKeys', (v) => {
        selectedKeys = new Set(v);
    });

    async function toggle(node: Node) {
        if (node.data.disabled) return;

        const key = node.key;
        const {multiple} = instance.get();
        if (selectedKeys.has(key)) {
            selectedKeys.delete(key);
        } else {
            if (!multiple) {
                selectedKeys.clear();
            }
            selectedKeys.add(key);
        }

        instance.set('selectedKeys', Array.from(selectedKeys));
    }

    function getSelectedData() {
        const data: DataItem[] = [];
        const size = selectedKeys.size;
        if (!size) return data;

        let count = 0;
        const loop = (nodes: Node[]) => {
            for (let i = 0; i < nodes.length; i++) {
                const node = nodes[i];
                if (selectedKeys.has(node.key)) {
                    data.push(node.data);
                    if (++count === size) return;
                }
                if (node.children) {
                    loop(node.children); 
                }
            }
        };
        loop(getNodes());

        return data;
    }

    return {get: () => selectedKeys, toggle, getSelectedData};
}
