import {useInstance, Children, Key} from 'intact';
import {useState} from '../../hooks/useState';
import type {Tree} from './';
import {isNullOrUndefined} from 'intact-shared';

export type DataItem = {
    label?: Children 
    key?: Key
    disabled?: boolean
    loaded?: boolean
    children?: DataItem[]
}

const prefix = '__$_';

export function useNodes() {
    const instance = useInstance() as Tree;
    let nodes: Node[] = [];

    instance.watch('data', data => {
        nodes = createNodes(data, null, prefix);
    });

    return {getNodes: () => nodes}
}

export class Node {
    public checked = false;
    public indeterminate = false;
    public children: Node[] | null = null;
    public loaded: boolean | null | undefined;
    public filter = true;

    constructor(
        public data: DataItem,
        public parent: Node | null,
        public key: Key,
    ) {
        this.loaded = isNullOrUndefined(data.loaded) && 
            data.children && 
            data.children.length ?
                true : 
                data.loaded;
    }
}

function createNode(data: DataItem, parent: Node | null, prefix: string, reference: {index: number}) {
    const key = isNullOrUndefined(data.key) ? `${prefix}${reference.index++}` : data.key;
    const node = new Node(data, parent, key);

    if (data.children) {
        const subPrefix = isNullOrUndefined(data.key) ? `${key}.` : `${prefix}${reference.index}.`;
        node.children = createNodes(data.children, node, subPrefix);
    }

    return node;
}

function createNodes(data: DataItem[] | undefined, parent: Node | null, prefix: string) {
    if (isNullOrUndefined(data)) return [];

    const reference = {index: 0};
    return data.map(data => {
        return createNode(data, parent, prefix, reference);
    });
}
