import Intact from 'intact';
import template from './index.vdt';
import '../../styles/kpc.styl';
import './index.styl';
import {toggleArray} from '../utils';

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
        this.on('$receive:checkedKeys', this._mappingKeys);
        this.on('$receive:data', this._mappingKeys);
    }

    _mappingKeys() {
        const checkedKeys = this.get('checkedKeys') || [];
        const needRecheckNodes = [];
        const mapping = (children, parent, key) => {
            if (!children) return;

            const ret = [];
            for (let i = 0; i < children.length; i++) {
                const child = children[i];
                const _key = child.key || key + i;
                // if the node has been set to checked
                // we should set its children to checked
                // and recheck the parent to set checked or indeterminate
                let checked = false;
                let needRecheck = false;
                if (parent) {
                    checked = parent.checked;
                    if (!checked && checkedKeys.indexOf(_key) > -1) {
                        checked = true; 
                        // need look back
                        needRecheck = true;
                    }
                }
                const data = {
                    checked: checked, 
                    indeterminate: false,
                    originData: child,
                    parent: parent,
                    key: _key,
                };
                data.children = mapping(child.children, data, _key + '-');
                ret.push(data);
                if (needRecheck) {
                    needRecheckNodes.push(data);
                }
            } 

            return ret;
        }

        const mappingKeys = mapping(this.get('data'), null, ''); 
        needRecheckNodes.forEach(node => updateParentStatus(node));
        this.set('_mappingKeys', mappingKeys);
    }

    _toggleExpand(data, e) {
        if (data.originData.disabled) return;

        this.set('expandedKeys', toggleArray(this.get('expandedKeys'), data.key));
        this.trigger('click:node', data);
    }

    _toggleCheck(data, e) {
        e.preventDefault();
        e.stopPropagation();

        updateChildrenStatus(data, !data.checked);
        updateParentStatus(data);

        this.trigger('change:checked', data);
        this.update();
    }

    getCheckedData(leafOnly) {
        const data = [];
        const loop = (children) => {
            for (let i = 0; i < children.length; i++) {
                const node = children[i];
                if (node.checked && (!leafOnly || !node.children)) {
                    data.push(node.originData);
                }
                if (node.children) {
                    loop(node.children);
                }
            }
        }
        loop(this.get('_mappingKeys'));
        return data;
    }

    append(data, node) {
        data.children || (data.children = []);
        data.children.push(node);
        this._mappingKeys();
    }
}

/**
 * @brief update checked and indeterminate of children downward
 *
 * @param data
 *
 * @return 
 */
function updateChildrenStatus(data, checked) {
    data.checked = checked;
    data.indeterminate = false;
    
    const children = data.children;
    if (children) {
        for (let i = 0; i < children.length; i++) {
            const child = children[i];
            if (child.originData.disabled) continue;

            updateChildrenStatus(child, checked);
        }
    }
}


/**
 * @brief update checked and indeterminate of parent upward
 *
 * @param data
 *
 * @return 
 */
function updateParentStatus(data) {
    while (data = data.parent) {
        let checkedCount = 0;
        let count = 0; 
        let indeterminate;
        const children = data.children;
        for (let i = 0; i < children.length; i++) {
            const child = children[i];
            if (child.originData.disabled) continue;

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
        data.checked = !!(checkedCount && checkedCount === count);
        data.indeterminate = indeterminate;
    }
}
