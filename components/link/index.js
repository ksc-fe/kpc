import Intact from 'intact';
import template from './index.vdt';

export default class Link extends Intact {
    static history = undefined;

    @Intact.template()
    get template() { return template; }

    static propTypes = {
        href: String,
        name: String,
        isReplace: Boolean,
    }

    defaults() {
        return {
            href: undefined,
            name: undefined,
            isReplace: false,
        }
    }

    to(e) {
        e.preventDefault();
        this.trigger('click', e);
        const href = this.get('href');
        const name = this.get('name');
        const history = Link.history;
        let url;
        if (href != null) {
            url = href;
        } else if (name != null) {
            if (Array.isArray(name)) {
                url = Link.url.apply(Link.url, name);
            } else {
                url = Link.url(name);
            }
        }
        if (url) {
            // if the href is equal to the current href, then do nothing
            const {pathname, search} = history.location;
            if (pathname + search === url) return;

            if (this.get('isReplace')) {
                history.replace(url);
            } else {
                history.push(url);
            }
        }
    }
}

export {Link};
