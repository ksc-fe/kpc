import Intact from 'intact';
import template from './index.vdt';

const externalRegExp = /^(https?:)?\/\//;

export default class Link extends Intact {
    static history = undefined;

    @Intact.template()
    get template() { return template; }

    static propTypes = {
        href: String,
        name: [String, Array],
        isReplace: Boolean,
    };

    static events = {
        click: true,
    };

    static to({href, name, isReplace}) {
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
            if (externalRegExp.test(url)) {
                if (isReplace) {
                    location.href = url;
                } else {
                    window.open(url);
                }
            } else {
                // if the href is equal to the current href, then do nothing
                const {pathname, search} = history.location;
                if (pathname + search === url) return;

                if (isReplace) {
                    history.replace(url);
                } else {
                    history.push(url);
                }
            }
        }
    };

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
        Link.to(this.get());
    }
}

export {Link};
