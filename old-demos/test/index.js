import template from './index.vdt';
import Intact from 'intact';

export default class extends Intact {
    @Intact.template()
    static template = template;

    defaults() {
        return {a: true}
    }
}
