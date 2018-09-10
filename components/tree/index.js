import Intact from 'intact'; import template from './index.vdt';
import '../../styles/kpc.styl';
import './index.styl';
import {toggleArray} from '../utils';
import Node from './node';

export default class Tree extends Intact {
    @Intact.template()
    static template = template;

    static propTypes = {
        data: Array,
        expandedKeys: Array,
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

            _mappingKeys: [],
        }
    }

    _init() {
        this.root = Node.createNode({}, null, this);
        this.on('$receive:checkedKeys', this._mappingKeys);
        this.on('$receive:data', this._mappingKeys);
    }

    _mappingKeys() {
        const needRecheckNodes = [];
        this.root.children = Node.createNodes(this.get('data'), this.root, this, needRecheckNodes);
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

        // this.set('expandedKeys', toggleArray(this.get('expandedKeys'), node.key));
        // this.trigger('click:node', node);
    }

    _toggleCheck(node, e) {
        e.preventDefault();
        e.stopPropagation();

        node.updateDownward(!node.checked);
        node.updateUpward();

        this.trigger('change:checked', node);
        this.update();
    }

    expand(key, silent) {
        if (key === this.root.key) return;

        let expandedKeys = this.get('expandedKeys');
        if (!expandedKeys) {
            expandedKeys = [key]; 
        } else {
            expandedKeys = expandedKeys.slice(0);
            const index = expandedKeys.indexOf(key);
            if (!~index) {
                expandedKeys.push(key);
            }
        }
        this.set('expandedKeys', expandedKeys, {silent});
    }

    shrink(key, silent) {
        if (key === this.root.key) return;

        let expandedKeys = this.get('expandedKeys');
        if (!expandedKeys) {
            return;
        } else {
            expandedKeys = expandedKeys.slice(0);
            const index = expandedKeys.indexOf(key);
            if (~index) {
                expandedKeys.splice(index, 1);
            }
        }
        this.set('expandedKeys', expandedKeys, {silent});
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
}
