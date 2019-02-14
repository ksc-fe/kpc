import Intact from 'intact';
import template from './index.vdt';

export default class Header extends Intact {
    @Intact.template()
    static template = template;

    static propTypes = {
        fixed: Boolean,
    };

    defaults() {
        return {
            fixed: false,
            _className: {'k-header': true},
        };
    }
}
