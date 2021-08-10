import {useInstance, Key} from 'intact';
import {useState} from '../../hooks/useState';
import {useReceive} from '../../hooks/useReceive';
import type {Tree} from './';
import type {Node} from './useNodes';

export function useChecked(getNodes: () => Node[]) {
    const instance = useInstance() as Tree;
    let checkedKeys: Set<Key> = new Set();

    instance.on('$receive:checkedKeys', (v) => {
        checkedKeys = new Set(v);
    });

    useReceive<Tree>(['data', 'checkedKeys'], refresh);

    function refresh() {
        const nodes = getNodes(); 
        const uncorrelated = instance.get('uncorrelated');
        const needRecheckNodes: Set<Node> = new Set();
        const loop = (nodes: Node[]) => {
            nodes.forEach(node => {
                const {key, parent} = node;

                let checked = checkedKeys.has(key);
                if (parent && !uncorrelated) {
                    if (checked && !parent.checked) {
                        // need look back
                        needRecheckNodes.add(parent);
                    } else if (!node.data.disabled) {
                        checked = parent.checked;
                    }
                }

                node.checked = checked;

                if (node.children) {
                    loop(node.children);            
                }
            });
        };

        loop(nodes);
        needRecheckNodes.forEach(node => {
            updateUpward(node);
        });
    }

    function updateCheckedKeys(node: Node) {
        if (node.checked) {
            checkedKeys.add(node.key);
        } else {
            checkedKeys.delete(node.key);
        }
    }

    function toggle(node: Node) {
        // e.preventDefault();
        // e.stopPropagation();

        const uncorrelated = instance.get('uncorrelated');
        updateDownward(node, !node.checked);
        updateUpward(node.parent);

        instance.set('checkedKeys', Array.from(checkedKeys));
    }

    function updateDownward(node: Node, checked: boolean) {
        node.checked = checked;
        node.indeterminate = false;

        updateCheckedKeys(node);

        if (instance.get('uncorrelated')) return;

        const children = node.children;
        if (children) {
            for (let i = 0; i < children.length; i++) {
                const child = children[i];
                if (child.data.disabled) continue;

                updateDownward(child, checked);
            }
        }
    }

    function updateUpward(node: Node | null) {
        if (instance.get('uncorrelated') || !node) return;

        let checkedCount = 0;
        let count = 0;
        let indeterminate;
        const children = node.children!;
        for (let i = 0; i < children.length; i++) {
            const child = children[i];
            if (child.data.disabled) continue;

            if (child.checked) {
                checkedCount++;
            } else if (child.indeterminate) {
                indeterminate = true;
            }
            count++;
        }
        if (!indeterminate) {
            indeterminate = !!(checkedCount && checkedCount < count);
        }
        node.checked = !!(checkedCount && checkedCount === count);
        node.indeterminate = indeterminate;

        updateCheckedKeys(node);

        updateUpward(node.parent);
    }

    return {toggle};
}
