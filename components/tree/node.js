import Intact from 'intact';
import template from './node.vdt';

export default class TreeNode extends Intact {
    @Intact.template()
    static template = template;

    static propTypes = {
        disabled: Boolean,
        checked: Boolean,
        indeterminate: Boolean,
        label: [String, Number, Intact.VNode],
    };

    defaults() {
        return {
            checked: false,
            indeterminate: false,
            checkbox: false,
            label: '',
        };
    }

    _init() {
        this.nodes = [];
    }

    _toggleExpand(e) {
        if (this.get('data.disabled')) return;

        this.get('_root')._toggleExpand(this.get('data'), this.get('key'), e);
    }

    _toggleCheck(e) {
        e.preventDefault();
        e.stopPropagation();

        this.get('_root')._updateStatus(this, !this.get('checked'));
    }

    _updateIndeterminate() {
        let checkedCount = 0;
        let count = 0; 
        let indeterminate;
        for (let i = 0; i < this.nodes.length; i++) {
            const node = this.nodes[i];
            if (!node || node.get('data.disabled')) continue;
            if (node.get('checked')) {
                checkedCount++;
            } else if (node.get('indeterminate')) {
                indeterminate = true;
            }
            count++;
        }
        if (!indeterminate) {
            indeterminate = !!(checkedCount && checkedCount < count);
        }
        this.set({
            indeterminate: indeterminate,
            checked: !!(checkedCount && checkedCount === count),
        }, {silent: true});
    }

    _checkOrUncheck(checked) {
        const data = this.get('data');
        const children = data.children;
        if (!children) return;

        for (let key in children) {
            const child = children[key];
            if (child.originData.disabled) return;

            child._checkOrUncheck(checked);
        }

        data.checked = checked;
        data.indeterminate = false;
    }
}
