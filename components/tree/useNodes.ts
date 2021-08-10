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

let uniqueId = 0;
const prefix = '__$_';

export function useNodes() {
    const instance = useInstance() as Tree;
    let nodes: Node[] = [];

    instance.on('$receive:data', data => {
        nodes = createNodes(data, null);
    });

    return {getNodes: () => nodes}
}

export class Node {
    public checked = false;
    public indeterminate = false;
    public children: Node[] | null = null;
    public loaded: boolean;
    public filter = true;

    constructor(
        public data: DataItem,
        public parent: Node | null,
        public key: Key,
    ) {
        let loaded = data.loaded;
        if (isNullOrUndefined(loaded)) {
            const children = data.children;
            loaded = !!(children && children.length);
        }
        this.loaded = loaded;
    }
}

function createNode(data: DataItem, parent: Node | null) {
    const key = data.key == null ? `${prefix}${uniqueId++}` : data.key;
    const node = new Node(data, parent, key);

    if (data.children) {
        node.children = createNodes(data.children, node);
    }

    return node;
}

function createNodes(data: DataItem[] | undefined, parent: Node | null) {
    if (isNullOrUndefined(data)) return [];

    return data.map(data => {
        return createNode(data, parent);
    });
}
