import {useInstance, Key} from 'intact';
import type {Tree} from './';
import type {Node} from './useNodes';

export function useExpanded() {
    const instance = useInstance() as Tree;
    let expandedKeys: Set<Key> = new Set();

    instance.on('$receive:expandedKeys', (v) => {
        expandedKeys = new Set(v);
    });

    async function toggle(node: Node, expanded: boolean) {
        const {load} = instance.get();
        if (load && !expanded && !node.loaded) {
            node.loaded = false;
            instance.forceUpdate();
            const children = await load(node); 
            node.loaded = true;
        }

        if (expanded) {
            expandedKeys.delete(node.key);
        } else {
            expandedKeys.add(node.key);
        }

        instance.set('expandedKeys', Array.from(expandedKeys));
    }

    return {get: () => expandedKeys, toggle};
}
