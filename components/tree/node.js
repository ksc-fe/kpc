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
        };
    }
}
