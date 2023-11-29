import {useInstance, Key, onBeforeMount} from 'intact';
import type {Tree} from './';
import type {Node} from './useNodes';

export function useExpanded(getNodes: () => Node<Key>[]) {
    const instance = useInstance() as Tree;
    let expandedKeys: Set<Key> = new Set();

    instance.on('$receive:expandedKeys', (v) => {
        expandedKeys = new Set(v);
    });

    onBeforeMount(() => {
        /**
         * change the behavior
         * if the data is undefined, we expand all keys after we received data
         */
        const { defaultExpandAll, data } = instance.get();
        if (defaultExpandAll) {
            if (data && data.length) {
                expandAll();
            } else {
                instance.on(`$receive:data`, function cb() {
                    expandAll();
                    instance.off(`$receive:data`, cb);
                });
            }
        }
    });

    async function toggle(node: Node<Key>) {
        const {load} = instance.get();
        const key = node.key;
        const expanded = expandedKeys.has(key); 

        if (load && !expanded && !node.loaded) {
            node.loaded = false;
            instance.forceUpdate();
            await load(node); 
            node.loaded = true;
        }

        if (expanded) {
            expandedKeys.delete(node.key);
        } else {
            expandedKeys.add(node.key);
        }

        instance.set('expandedKeys', Array.from(expandedKeys));
    }

    function expandAll() {
        const {load} = instance.get();
        const loop = (nodes: Node<Key>[]) => {
            for (let i = 0; i < nodes.length; i++) {
                const node = nodes[i];
                if (!load || node.loaded) {
                    expandedKeys.add(node.key);
                }
                if (node.children) {
                    loop(node.children);
                }
            }
        };
        loop(getNodes());

        instance.set('expandedKeys', Array.from(expandedKeys));
    }

    return {get: () => expandedKeys, toggle, expandAll};
}
