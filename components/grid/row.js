import Intact from 'intact';
import template from './row.vdt';

export default class Row extends Intact {
    @Intact.template()
    get template() { return template; }

    defaults() {
        return {
            gutter: 0
        }
    }
}
