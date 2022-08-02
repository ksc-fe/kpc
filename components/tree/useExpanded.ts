import {useInstance, Key, onBeforeMount} from 'intact';
import type {Tree} from './';
import type {Node} from './useNodes';

export type Expanded = {
    get: () => Set<Key>
    toggle: (node: Node<Key>) => void
    setExpandState: () => void
    getExpandState: () => boolean
}

export function useExpanded(getNodes: () => Node<Key>[]): Expanded {
    const instance = useInstance() as Tree;
    let expandedKeys: Set<Key> = new Set();
    let expanding = false;

    instance.on('$receive:expandedKeys', (v) => {
        expandedKeys = new Set(v);
    });

    onBeforeMount(() => {
        if (instance.get('defaultExpandAll')) {
            expandAll();
        }
    });

    async function toggle(node: Node<Key>) {
        const {load} = instance.get();
        const key = node.key;
        const expanded = expandedKeys.has(key);
        expanding = true; 

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

    function setExpandState() {
        expanding = false;
    }

    return {
        get: () => expandedKeys,
        toggle, 
        setExpandState,
        getExpandState: () => expanding
    };
}
