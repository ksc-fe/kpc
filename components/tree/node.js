let uniqueId = 0;

export default class Node {
    static createNode = function(data, parent, tree, needRecheckNodes) {
        const key = data.key == null ? uniqueId++ : data.key;
        // if the node has been set to checked
        // we should set its children to checked
        // and recheck the parent to set to checked or indeterminate
        const checkedKeys = tree.checkedKeys;
        let checked = checkedKeys.has(key);
        let needRecheck = false;
        if (parent) {
            if (checked && !parent.checked) {
                // need look back
                needRecheck = true;
            } else {
                checked = parent.checked;
            }
        }

        const node = new Node(data, checked, parent, key, tree);

        const {filter} = tree.get();
        if (parent && filter) {
            if (filter.call(tree, data, node)) {
                node.filter = true;
                node.updateFilterUpward();
            } else {
                node.filter = false;
            }
        }

        if (data.children) {
            node.children = Node.createNodes(data.children, node, tree, needRecheckNodes);
        }

        if (needRecheck) {
            needRecheckNodes.push(node);
        }

        return node;
    };

    static createNodes = function(data, parent, tree, needRecheckNodes) {
        return data.map(data => {
            return Node.createNode(data, parent, tree, needRecheckNodes);
        });
    };

    constructor(data, checked, parent, key, tree) {
        this.checked = checked;
        this.indeterminate = false;
        this.data = data;
        this.parent = parent;
        this.key = key;
        this.children = undefined;
        this.tree = tree;
        this.loaded = undefined;
        this.filter = true;
    }

    updateDownward(checked) {
        this.checked = checked;
        this.indeterminate = false;

        this.tree._updateCheckedKeys(this);
        
        const children = this.children;
        if (children) {
            for (let i = 0; i < children.length; i++) {
                const child = children[i];
                if (child.data.disabled) continue;

                child.updateDownward(checked);
            }
        }
    }

    updateUpward() {
        const parent = this.parent;
        if (!parent || parent === this.tree.root) return;

        let checkedCount = 0;
        let count = 0; 
        let indeterminate;
        const children = parent.children;
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

        if (parent === this) debugger;
        this.tree._updateCheckedKeys(parent);

        parent.updateUpward();
    }

    updateFilterUpward() {
        const parent = this.parent;
        if (!parent || parent === this.tree.root || parent.filter) return;

        parent.filter = true;
        // auto expand parent
        this.tree.expandedKeys.add(parent.key);
        parent.updateFilterUpward();
    }

    append(data) {
        if (!Array.isArray(data)) {
            data = [data];
        }
        const children = this.children || (this.children = []);
        const needRecheckNodes = [];
        data.forEach(item => {
            const node = Node.createNode(item, this, this.tree, needRecheckNodes);
            children.push(node);
        });

        this.tree.expand(this.key, false);
        this.tree.update();
    }

    remove(noUpdate) {
        const siblings = this.parent.children;
        const index = siblings.indexOf(this);

        if (!~index) {
            debugger;
            return;
        }
        siblings.splice(index, 1);

        if (noUpdate) return;
        this.updateUpward();
        this.tree.update();
    }

    _insert(node, index) {
        const siblings = node.parent.children;
        siblings.splice(siblings.indexOf(node) + index, 0, this);
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
        children.push(this);
        this.tree.expand(node.key, false);
        this.tree.update();
    }
}
