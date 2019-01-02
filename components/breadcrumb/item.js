import Intact from 'intact';
import template from './item.vdt';

export default class BreadcrumbItem extends Intact {
    @Intact.template()
    static template = template;

    static propTypes = {
        to: String,
        separator: [String, Intact.VNode, Array]
    };

    defaults() {
        return {
            to: undefined,
            separator: '>',
        }
    }

    onClick() {
        const to = this.get('to');
        if (to) {
            window.location.href = to;
        }
    }
}
