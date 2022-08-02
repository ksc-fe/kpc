import {useInstance, Key, onBeforeUpdate} from 'intact';
import type {Tree} from './';
import type {Node, DataItem} from './useNodes';
import {EMPTY_OBJ, isNullOrUndefined} from 'intact-shared';
import {Expanded} from './useExpanded';

export function useFilter(getNodes: () => Node<Key>[], expanded: Expanded) {
    const instance = useInstance() as Tree;

    instance.on('$receive:filter', refresh);

    onBeforeUpdate<Tree>((lastVNode, nextVNode) => {
        const lastProps = lastVNode.props || EMPTY_OBJ;
        const nextProps = nextVNode.props || EMPTY_OBJ;
        if (
            lastProps === nextProps || 
            isNullOrUndefined(lastProps.filter) &&
            isNullOrUndefined(nextProps.filter)
        ) return;

        if (lastProps.filter === nextProps.filter) {
            refresh();
        }
    });

    function refresh() {
        if(expanded.getExpandState()) {
            expanded.setExpandState();
            return;
        }

        const nodes = getNodes();
        const {filter} = instance.get();
        const loop = (nodes: Node<Key>[]) => {
            nodes.forEach(node => {
                if (filter) {
                    if (filter(node.data, node)) {
                        node.filter = true;
                        updateFilterUpward(node.parent);
                    } else {
                        node.filter = false;
                    }
                } else {
                    node.filter = true;
                }

                if (node.children) {
                    loop(node.children);
                }
            });
        };
        loop(getNodes());
    }

    function updateFilterUpward(node: Node<Key> | null) {
        if (!node) return;

        // should expand the node 
        expanded.get().add(node.key);
        // getExpandedKeys().add(node.key);
        if (node.filter) return;

        node.filter = true;
        updateFilterUpward(node.parent);
    }
}
