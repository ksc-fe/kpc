import Intact from 'intact';
import template from './index.vdt';

export default class Footer extends Intact {
    @Intact.template()
    static template = template;

    defaults() {
        return {
            _className: 'k-footer',
        };
    }
}
