import {useInstance, Key, createRef, nextTick} from 'intact';
import type {TreeSelect} from './';
import {useState} from '../../hooks/useState';
import {isNullOrUndefined} from 'intact-shared';
import type {Tree} from '../tree';
import type {Node} from '../tree/useNodes';
import { isEqualArray } from '../utils';

export function useValue() {
    const instance = useInstance() as TreeSelect<Key, boolean, boolean>;
    const selectedKeys = useState<Key[]>([]);
    const checkedKeys = useState<Key[]>([]);
    const treeRef = createRef<Tree>();

    instance.watch('value', setKeys);

    function setKeys(v: Key | Key[] | undefined | null) {
        if (!instance.get('multiple') && !instance.get('checkbox')) {
            v = isNullOrUndefined(v) ? [] : [v as Key];
        } else if (isNullOrUndefined(v)) {
            v = [];
        }
        selectedKeys.set(v as Key[]);
        checkedKeys.set(v as Key[]);
    }

    function onChangeCheckedKeys(allKeys: Key[]) {
        checkedKeys.set(allKeys);
        const keys = getAllCheckedKeys();
        if (!isEqualArray(keys, instance.get('value'))) {
            instance.set('value', keys);
        }
    }

    function getAllCheckedKeys() {
        // if the parent has been checked, ignore the children
        const keys: Key[] = [];
        const loop = (nodes: Node<Key>[]) => {
            for (let i = 0; i < nodes.length; i++) {
                const node = nodes[i];
                if (node.checked) {
                    keys.push(node.key);
                    continue;
                }
                if (node.children) {
                    loop(node.children);
                }
            }
        };
        loop(treeRef.value!.getNodes());

        return keys;
    }

    function onChangeSelectedKeys(keys: Key[]) {
        if (instance.get('multiple')) {
            instance.set('value', keys);
        } else {
            instance.set('value', keys[0]);
            instance.hide();
        }
        selectedKeys.set(keys);
    }

    return {
        selectedKeys,
        checkedKeys,
        treeRef,
        onChangeCheckedKeys,
        onChangeSelectedKeys
    };
}
