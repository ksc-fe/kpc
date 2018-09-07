let uniqueId = 0;

export default class Node {
    static createNode = function(data, parent, tree, needRecheckNodes) {
        const key = data.key == null ? uniqueId++ : data.key;
        // if the node has been set to checked
        // we should set its children to checked
        // and recheck the parent to set checked or indeterminate
        const checkedKeys = tree.get('checkedKeys');
        let checked = !!(checkedKeys && checkedKeys.indexOf(key) > -1);
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
    }

    updateDownward(checked) {
        this.checked = checked;
        this.indeterminate = false;
        
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

        parent.updateUpward();
    }

    append(data) {
        const needRecheckNodes = [];
        const node = Node.createNode(data, this, this.tree, needRecheckNodes);
        (this.children || (this.children = [])).push(node);

        this.tree.expand(this.key, true);
        this.tree.update();
    }

    remove() {
        const siblings = this.parent.children;
        siblings.splice(siblings.indexOf(this), 1);
        this.tree.update();
    }
}


