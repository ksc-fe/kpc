import Intact from 'intact';
import template from './node.vdt';

export default class TreeNode extends Intact {
    @Intact.template()
    static template = template;

    static propTypes = {
        disabled: Boolean,
        checked: Boolean,
        indeterminate: Boolean,
    };

    defaults() {
        return {
            disabled: false,
            checked: false,
            indeterminate: false,
            checkbox: false,
            expanded: false,
            label: '',
        };
    }

    _init() {
        this.nodes = [];
        const parent = this.get('_parent');
        if (parent) {
            this.on('$change:checked', (c, v) => {
                this.get('_root')._toggleCheck(this.get('data'), this.get('key'));
                if (v && !parent.get('checked')) {
                    parent.updateStatus();
                    // parent.set({
                        // 'indeterminate': true,
                    // });
                } else if (!v) {
                    parent.updateStatus();
                    // parent.updateIndeterminate();
                    // parent.set({
                        // indeterminate: false,
                    // });
                }
            });
            this.on('$change:indeterminate', (c, v) => {
                if (v) {
                    parent.set({indeterminate: true});
                } else {
                    parent.set({indeterminate: false});
                }
            });
        }
    }

    _toggleExpand(e) {
        if (this.get('data.disabled')) return;

        this.get('_root')._toggleExpand(this.get('data'), this.get('key'), e);
    }

    _toggleCheck(e) {
        e.preventDefault();
        e.stopPropagation();

        const checked = !this.get('checked');
        // this.get('_root')._toggleCheck(this.get('data'), this.get('key'), e);
        // const parent = this.get('_parent');
        // if (parent) {
            // if (checked) {
                // parent.set({
                    // indeterminate: true,
                    // checked: false,
                // });
            // } else {
                // parent.set({
                    // indeterminate: false,
                    // checked: false,
                // });
            // }
        // }
        this.set('checked', checked);
    }

    updateStatus() {
        let checkedCount = 0;
        let count = 0; 
        for (let i = 0; i < this.nodes.length; i++) {
            const node = this.nodes[i];
            if (!node) continue;
            if (node.get('checked')) {
                checkedCount++;
            }
            count++;
        }
        this.set({
            indeterminate: !!(checkedCount && checkedCount < count),
            checked: !!(checkedCount && checkedCount === count),
        });
    }
}
