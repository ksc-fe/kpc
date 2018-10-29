import Intact from 'intact'; 
import template from './index.vdt';
import '../../styles/kpc.styl';
import './index.styl';
import Node from './node';

export default class Tree extends Intact {
    @Intact.template()
    static template = template;

    static propTypes = {
        data: Array,
        expandedKeys: Array,
        checkedKeys: Array,
        checkbox: Boolean,
        load: Function,
    };

    defaults() {
        return {
            data: undefined,
            expandedKeys: undefined,
            checkbox: false,
            checkedKeys: undefined,
            load: undefined,
        }
    }

    _init() {
        this.checkedKeys = new Set();
        this.expandedKeys = new Set();
        this.root = Node.createNode({}, null, this);

        this.on('$receive:checkedKeys', () => {
            this.checkedKeys = new Set(this.get('checkedKeys'));
            this._mappingKeys();
        });
        this.on('$receive:data', this._mappingKeys);
        this.on('$receive:expandedKeys', () => {
            this.expandedKeys = new Set(this.get('expandedKeys'));
        });
    }

    _mappingKeys() {
        const needRecheckNodes = [];
        this.root.children = Node.createNodes(
            this.get('data'), 
            this.root,
            this,
            needRecheckNodes
        );
        needRecheckNodes.forEach(node => node.updateUpward());
    }

    async _toggleExpand(node, expanded, e) {
        if (node.data.disabled) return;
        
        const {load} = this.get();
        if (load && !expanded && !node.loaded) {
            node.loaded = false;
            this.update();
            const children = await load(node);
            node.loaded = true;
            node.append(children);
        }

        if (expanded) {
            this.shrink(node.key);
        } else {
            this.expand(node.key);
        }
    }

    _toggleCheck(node, e) {
        e.preventDefault();
        e.stopPropagation();

        node.updateDownward(!node.checked);
        node.updateUpward();

        this.set('checkedKeys', Array.from(this.checkedKeys));
    }

    _updateCheckedKeys(node) {
        let checkedKeys = this.checkedKeys;
        if (node.checked) {
            checkedKeys.add(node.key); 
        } else {
            checkedKeys.delete(node.key);
        }
    }

    expand(key, update = true) {
        if (key === this.root.key) return;

        let expandedKeys = this.expandedKeys;
        expandedKeys.add(key);
        // babel can not spread Set by `...` syntax in loose mode
        // use Array.from instead of
        this.set('expandedKeys', Array.from(expandedKeys), {update});
    }

    shrink(key, update = true) {
        if (key === this.root.key) return;

        let expandedKeys = this.expandedKeys;
        expandedKeys.delete(key);
        this.set('expandedKeys', Array.from(expandedKeys), {update});
    }

    getCheckedData(leafOnly) {
        const data = [];
        const loop = (children) => {
            for (let i = 0; i < children.length; i++) {
                const node = children[i];
                if (node.checked && (!leafOnly || !node.children)) {
                    data.push(node.data);
                }
                if (node.children) {
                    loop(node.children);
                }
            }
        }
        loop(this.root.children);
        return data;
    }

    _onClick(node, e) {
        this.trigger('click:node', node, e);
    }

    _onRightClick(node, e) {
        this.trigger('rightclick:node', node, e);
    }
}

export {Tree};
