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
            trigger: 'hover'
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
        const props = {};
        const originProps = children.props;
        if (trigger === 'click') {
            props['ev-click'] = this.show.bind(this, originProps['ev-click']);
        } else {
            props['ev-mouseenter'] = this.show.bind(this, originProps['ev-mouseenter']);
            props['ev-mouseleave'] = this.hide.bind(this, originProps['ev-mouseleave']);
        }
        children.props = {...children.props, ...props};
        this.set('children', children, {silent: true});
    }

    _mount() {
        this.get('menu').children.dropdown = this;
    }

    show(fn, e) {
        if (typeof fn === 'function') fn(e);

        const menu = this.get('menu').children;
        menu.show();
    }

    hide(fn, e) {
        if (typeof fn === 'function') fn(e);

        const menu = this.get('menu').children;
        menu.hide();
    }
}
