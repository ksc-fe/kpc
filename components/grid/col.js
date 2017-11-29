import Intact from 'intact';
import template from './col.vdt';

export default class extends Intact {
    @Intact.template()
    get template() { return template; }

    defaults() {
        return {
            span: 24,
            offset: 0,
            gutter: 0,
        };
    }
}
