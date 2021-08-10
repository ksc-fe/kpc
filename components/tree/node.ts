import {Children, Key} from 'intact';
import {isNullOrUndefined} from 'intact-shared';

export type DataItem = {
    label?: Children 
    key?: Key
    disabled?: boolean
    loaded?: boolean
    children?: DataItem[]
}

export type Filter = (data: DataItem, node: Node) => boolean;

let uniqueId = 0;
const prefix = '__$_';

export class Node {
    static createRoot = function(
        data: DataItem[],
        checkedKeys: Set<Key>,
        uncorrelated: boolean | undefined,
        filter: Filter | undefined
    ) {
        const root = new Node(
            {children: data},
            false,
            null,
            null,
            `${prefix}root`,
            checkedKeys,
            uncorrelated,
            filter
        );

        root.root = root;

        return root;
    }

    static createNode = function(
        data: DataItem,
        parent: Node,
        root: Node,
        needRecheckNodes: Node[],
    ) {
        const key = data.key == null ? `${prefix}${uniqueId++}` : data.key;
        // if the node has been set to checked
        // we should set its children to checked
        // and recheck the parent to set to checked or indeterminate
        const checkedKeys = root.checkedKeys!;
        let checked = checkedKeys.has(key);
        let needRecheck = false;
        if (parent && !root.uncorrelated) {
            if (checked && !parent.checked) {
                // need look back
                needRecheck = true;
            } else if (!data.disabled) {
                checked = parent.checked;
            }
        }

        const node = new Node(data, checked, parent, root, key);

        const filter = root.filter;
        if (parent && filter) {
            if (filter(data, node)) {
                node.filtered = true;
                node.updateFilterUpward();
            } else {
                node.filtered = false;
            }
        }

        if (data.children) {
            node.children = Node.createNodes(
                data.children,
                node,
                root,
                needRecheckNodes,
            );
        }

        if (needRecheck) {
            needRecheckNodes.push(node);
        }

        return node;
    };

    static createNodes = function(
        data: DataItem[],
        parent: Node,
        root: Node,
        needRecheckNodes: Node[],
    ) {
        return data.map(data => {
            return Node.createNode(
                data,
                parent,
                root,
                needRecheckNodes,
            );
        });
    };

    public indeterminate = false;
    public children: Node[] | null = null;
    public loaded: boolean;
    public filtered = true;

    constructor(
        public data: DataItem,
        public checked: boolean,
        public parent: Node | null,
        public root: Node | null,
        public key: Key,
        public checkedKeys?: Set<Key>,
        public uncorrelated?: boolean | undefined,
        public filter?: Filter | undefined,
    ) {
        let loaded = data.loaded;
        if (isNullOrUndefined(loaded)) {
            const children = data.children;
            loaded = !!(children && children.length);
        }
        this.loaded = loaded;
    }

    updateDownward(
        checked: boolean,
        updateCheckedKeys: (node: Node) => void,
    ) {
        this.checked = checked;
        this.indeterminate = false;

        updateCheckedKeys(this);

        if (this.root!.uncorrelated) return;

        const children = this.children;
        if (children) {
            for (let i = 0; i < children.length; i++) {
                const child = children[i];
                if (child.data.disabled) continue;

                child.updateDownward(
                    checked,
                    updateCheckedKeys,
                );
            }
        }
    }

    updateUpward(
        root: Node,
        updateCheckedKeys: (node: Node) => void,
    ) {
        if (root.uncorrelated) return;

        const parent = this.parent;
        if (!parent || parent === root) return;

        let checkedCount = 0;
        let count = 0;
        let indeterminate;
        const children = parent.children!;
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
        parent.checked = !!(checkedCount && checkedCount === count);
        parent.indeterminate = indeterminate;

        updateCheckedKeys(parent);

        parent.updateUpward(root, updateCheckedKeys);
    }

    updateFilterUpward(root: Node, expandedKeys: Set<Key>) {
        const parent = this.parent;
        if (!parent || parent === root || parent.filtered) return;

        parent.filtered = true;
        // auto expand parent
        expandedKeys.add(parent.key);
        parent.updateFilterUpward(root, expandedKeys);
    }

    append(data: DataItem[] | DataItem) {
        if (!Array.isArray(data)) {
            data = [data];
        }
        const children = this.children || (this.children = []);
        const originChildren = this.data.children || (this.data.children = []);
        const needRecheckNodes: Node[] = [];
        data.forEach(item => {
            const node = Node.createNode(
                item,
                this,
                this.root!,
                needRecheckNodes
            );
            children.push(node);
            originChildren.push(item);
        });

        this.tree.expand(this.key, false);
        this.tree.update();
    }

    remove(noUpdate: boolean) {
        const parent = this.parent!;
        const siblings = parent!.children!;
        const originSiblings = parent!.data.children!;
        const index = siblings.indexOf(this);

        if (!~index)  return;

        siblings.splice(index, 1);
        originSiblings.splice(index, 1);

        if (noUpdate) return;

        this.updateUpward();
        this.tree.update();
    }

    _insert(node, index) {
        const siblings = node.parent.children;
        const originSiblings = node.parent.data.children;
        index = siblings.indexOf(node) + index;
        siblings.splice(index, 0, this);
        originSiblings.splice(index, 0, this.data);
        this.parent = node.parent;
        this.updateUpward();
        this.tree.update();
    }

    insertBefore(node) {
        this._insert(node, 0);
    }

    insertAfter(node) {
        this._insert(node, 1);
    }

    appendTo(node) {
        this.parent = node;
        const children = node.children || (node.children = []);
        const originChildren = node.data.children || (node.data.children = []);
        children.push(this);
        originChildren.push(this.data);
        this.tree.expand(node.key, false);
        this.tree.update();
    }
}

function updateCheckedKeys(node: Node) {
    let checkedKeys = node.root!.checkedKeys!;
    if (node.checked) {
        checkedKeys.add(node.key);
    } else {
        checkedKeys.delete(node.key);
    }
}
