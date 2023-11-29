import {useInstance, Children, Key} from 'intact';
import type {Tree} from './';
import {isNullOrUndefined} from 'intact-shared';

export type DataItem<K extends Key> = {
    label?: Children 
    key?: K
    disabled?: boolean
    loaded?: boolean
    children?: DataItem<K>[]
    [key: string]: any
}

const prefix = '__$_';

export function useNodes() {
    const instance = useInstance() as Tree;
    let nodes: Node<Key>[] = [];

    instance.watch('data', data => {
        nodes = createNodes(data, null, prefix);
    });

    return {getNodes: () => nodes}
}

export class Node<K extends Key> {
    public checked = false;
    public indeterminate = false;
    public children: Node<K>[] | null = null;
    public loaded: boolean | null | undefined;
    public filter = true;

    constructor(
        public data: DataItem<K>,
        public parent: Node<K> | null,
        public key: K,
    ) {
        this.loaded = isNullOrUndefined(data.loaded) && 
            data.children && 
            data.children.length ?
                true : 
                data.loaded;
    }
}

function createNode(data: DataItem<Key>, parent: Node<Key> | null, prefix: string, reference: {index: number}) {
    const key = isNullOrUndefined(data.key) ? `${prefix}${reference.index++}` : data.key;
    const node = new Node(data, parent, key);

    if (data.children) {
        const subPrefix = isNullOrUndefined(data.key) ? `${key}.` : `${prefix}${reference.index}.`;
        node.children = createNodes(data.children, node, subPrefix);
    }

    return node;
}

function createNodes(data: DataItem<Key>[] | undefined, parent: Node<Key> | null, prefix: string) {
    if (isNullOrUndefined(data)) return [];

    const reference = {index: 0};
    return data.map(data => {
        return createNode(data, parent, prefix, reference);
    });
}
