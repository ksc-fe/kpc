import Intact from 'intact';
import template from './aside.vdt';

export default class Aside extends Intact {
    @Intact.template()
    static template = template;

    static propTypes = {
        collapse: Boolean,
        fixed: Boolean,
        size: ['large', 'default', 'small']
    };

    defaults() {
        return {
            collapse: false,
            fixed: false,
            size: 'default',
        };
    }
}
