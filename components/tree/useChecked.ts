import {useInstance, Key} from 'intact';
import {useState} from '../../hooks/useState';
import {useReceive} from '../../hooks/useReceive';
import type {Tree} from './';
import type {Node, DataItem} from './useNodes';
import { isEqualArray } from '../utils';

export function useChecked(getNodes: () => Node<Key>[]) {
    const instance = useInstance() as Tree;
    let checkedKeys: Set<Key> = new Set();

    instance.on('$receive:checkedKeys', (v) => {
        checkedKeys = new Set(v);
    });

    useReceive<Tree>(['data', 'checkedKeys'], refresh);

    function refresh() {
        const nodes = getNodes(); 
        const uncorrelated = instance.get('uncorrelated');
        const needRecheckNodes: Set<Node<Key>> = new Set();
        const loop = (nodes: Node<Key>[]) => {
            nodes.forEach(node => {
                const {key, parent} = node;

                let checked = checkedKeys.has(key);
                let shouldUpdateCheckedKeys = false;
                if (parent && !uncorrelated) {
                    if (checked && !parent.checked) {
                        // need look back
                        needRecheckNodes.add(parent);
                    } else if (!node.data.disabled) {
                        if (checked !== parent.checked) {
                            checked = parent.checked;
                            // if we use the parent checked status, we should update checkedKeys
                            shouldUpdateCheckedKeys = true;
                        }
                    }
                }

                node.checked = checked;
                if (checked) {
                    node.indeterminate = false;
                }

                if (shouldUpdateCheckedKeys) {
                    updateCheckedKeys(node);
                }

                if (node.children) {
                    loop(node.children);            
                }
            });
        };

        loop(nodes);
        needRecheckNodes.forEach(node => {
            updateUpward(node);
        });
        
        const oldCheckedKeys = instance.get('checkedKeys');
        const newCheckedKeys = Array.from(checkedKeys);
        if (!isEqualArray(oldCheckedKeys, newCheckedKeys)) {
            instance.set('checkedKeys', newCheckedKeys);
        }
    }

    function updateCheckedKeys(node: Node<Key>) {
        if (node.checked) {
            checkedKeys.add(node.key);
        } else {
            checkedKeys.delete(node.key);
        }
    }

    function toggle(node: Node<Key>) {
        // const uncorrelated = instance.get('uncorrelated');
        updateDownward(node, !node.checked);
        updateUpward(node.parent);

        instance.set('checkedKeys', Array.from(checkedKeys));
    }

    function updateDownward(node: Node<Key>, checked: boolean) {
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

    function updateUpward(node: Node<Key> | null) {
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

    function getCheckedData(leafOnly: boolean) {
        const data: DataItem<Key>[] = [];
        const loop = (nodes: Node<Key>[]) => {
            for (let i = 0; i < nodes.length; i++) {
                const node = nodes[i];
                if (node.checked && (!leafOnly || !node.children)) {
                    data.push(node.data);
                }
                if (node.children) {
                    loop(node.children);
                }
            }
        };
        loop(getNodes());

        return data;
    }

    return {toggle, getCheckedData};
}
