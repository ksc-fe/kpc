import Intact from 'intact';
import {isTextVNode, findParentComponent} from '../utils';
import DropdownMenu from './menu';

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
        let hasSaved = false;
        if (!originProps._hasSaved) {
            children._evClick = originProps['ev-click'];
            children._evMouseEnter = originProps['ev-mouseenter'];
            children._evMouseLeave = originProps['ev-mouseleave'];
            hasSaved = true;
        }
        const props = {};
        // if (trigger === 'click') {
            props['ev-click'] = this.show.bind(this, children._evClick);
        // } else {
        if (trigger === 'hover') {
            props['ev-mouseenter'] = this.show.bind(this, children._evMouseEnter);
            props['ev-mouseleave'] = this.hide.bind(this, children._evMouseLeave);
        }
        if (hasSaved) {
            props._hasSaved = true;
        }
        children.props = {...children.props, ...props};
        this.set('children', children, {silent: true});
    }

    _mount() {
        this.get('menu').children.dropdown = this;
    }

    show(fn, e, isFocus) {
        if (typeof fn === 'function') fn(e);

        if (this.get('disabled')) return;

        const menu = this.get('menu').children;
        menu.show();

        if (isFocus) {
            menu.focusItemByIndex(0);
        }
    }

    hide(fn, e, immediately) {
        if (typeof fn === 'function') fn(e);

        if (this.get('disabled')) return;

        const menu = this.get('menu').children;
        menu.hide(immediately);
    }
}
