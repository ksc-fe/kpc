import Intact from 'intact';
import template from './index.vdt';

export default class Link extends Intact {
    static history = undefined;

    @Intact.template()
    get template() { return template; }

    to(e) {
        e.preventDefault();
        this.trigger('click', e);
        const href = this.get('href');
        if (href != null) {
            Link.history.push(href);
        }
    }
}
