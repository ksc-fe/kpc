import Intact from 'intact';
import template from './index.vdt';

export default class Link extends Intact {
    static history = undefined;

    @Intact.template()
    get template() { return template; }

    defaults() {
        return {
            href: undefined,
            isReplace: false,
        }
    }

    to(e) {
        e.preventDefault();
        this.trigger('click', e);
        const href = this.get('href');
        const history = Link.history;
        if (href != null) {
            // if the href is equal to the current href, then do nothing
            const {pathname, search} = history.location;
            if (pathname + search === href) return;

            if (this.get('isReplace')) {
                history.replace(href);
            } else {
                history.push(href);
            }
        }
    }
}

export {Link};
