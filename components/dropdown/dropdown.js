import Intact from 'intact';
import {isTextVNode} from '../utils';

const h = Intact.Vdt.miss.h;

export default class Dropdown extends Intact {
    @Intact.template()
    static template(data) {
        return data.get('children');
    }

    defaults() {
        return {
            trigger: 'hover',
            disabled: false,
        }
    }

    _init() {
        this._saveOriginalEvents();
        this.on('$change:children', () => {
            this._saveOriginalEvents();
        });
    }

    _saveOriginalEvents() {
        let {children, trigger, className, ...rest} = this.get();
        if (Array.isArray(children)) {
            children = children[0];
        } 
        if (isTextVNode(children)) {
            children = h('span', rest, children, className);
        }

        // save the original event
        const originProps = children.props;
        if (!children._hasSaved) {
            children._evClick = originProps['ev-click'];
            children._evMouseEnter = originProps['ev-mouseenter'];
            children._evMouseLeave = originProps['ev-mouseleave'];
            children._hasSaved = true;
        }
        const props = {};
        if (trigger === 'click') {
            props['ev-click'] = this.show.bind(this, children._evClick);
        } else {
            props['ev-mouseenter'] = this.show.bind(this, children._evMouseEnter);
            props['ev-mouseleave'] = this.hide.bind(this, children._evMouseLeave);
        }
        children.props = {...children.props, ...props};
        this.set('children', children, {silent: true});
    }

    _mount() {
        this.get('menu').children.dropdown = this;
    }

    show(fn, e) {
        if (typeof fn === 'function') fn(e);

        if (this.get('disabled')) return;

        const menu = this.get('menu').children;
        menu.show();
    }

    hide(fn, e) {
        if (typeof fn === 'function') fn(e);

        if (this.get('disabled')) return;

        const menu = this.get('menu').children;
        menu.hide();
    }
}
