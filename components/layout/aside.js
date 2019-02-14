import Intact from 'intact';
import template from './aside.vdt';

export default class Aside extends Intact {
    @Intact.template()
    static template = template;

    static propTypes = {
        collapse: Boolean,
        fixed: Boolean,
    };

    defaults() {
        return {
            collapse: false,
            fixed: false,
        };
    }
}
