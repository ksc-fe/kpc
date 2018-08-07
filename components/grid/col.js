import Intact from 'intact';
import template from './col.vdt';

export default class Col extends Intact {
    @Intact.template()
    get template() { return template; }

    static propTypes = {
        gutter: [String, Number],
        span: [String, Number],
        offset: [String, Number],
    }

    defaults() {
        return {
            span: 24,
            offset: 0,
            gutter: 0,
        };
    }
}
