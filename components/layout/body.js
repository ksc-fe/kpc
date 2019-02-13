import Intact from 'intact';
import template from './index.vdt';

export default class Body extends Intact {
    @Intact.template()
    static template = template;

    defaults() {
        return {
            _className: 'k-body',
        };
    }
}
