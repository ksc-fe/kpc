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
    };

    defaults() {
        return {
            data: undefined,
            expandedKeys: undefined,
            checkbox: false,
            checkedKeys: undefined,

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

    _toggleExpand(data, e) {
        if (data.data.disabled) return;

        this.set('expandedKeys', toggleArray(this.get('expandedKeys'), data.key));
        this.trigger('click:node', data);
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
            const index = expandedKeys.indexOf(key);
            if (!~index) {
                expandedKeys.push(key);
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
