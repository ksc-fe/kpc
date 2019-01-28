import Intact from 'intact';
import template from './item.vdt';
import {findRouter} from '../utils';

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

    _mount() {
        this.$router = findRouter(this);
    }

    onClick() {
        const to = this.get('to');
        if (to) {
            const $router = this.$router;
            if ($router) {
                $router.push(to);
            } else {
                window.location.href = to;
            }
        }
    }
}
