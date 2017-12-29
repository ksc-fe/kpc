import Intact from 'intact';
import template from './index.vdt';
import './index.styl';
import DropdownMenu from './menu';
import DropdownItem from './item';

export class Dropdown extends Intact {
    @Intact.template()
    static template = template;

    defaults() {
        return {
            trigger: 'hover'
        }
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

const h = Intact.Vdt.miss.h;
export default function Wrapper(props) {
    const {children, position, key, ref, trigger, ...rest} = props;
    const element = children[0];
    const menu = children[1];

    menu.props = {
        position, 
        key: key == null ? key : `${key}.menu`,
        ...rest,
        ...menu.props,
    };
    if (trigger) {
        menu.props.trigger = trigger;
    }

    const elementProps = element.props;
    if (trigger === 'click' ) {
        elementProps._evClick = elementProps['ev-click'];
    } else {
        elementProps._evEnter = elementProps['ev-mouseenter'];
        elementProps._evLeave = elementProps['ev-mouseleave'];
    }

    return [
        h(Dropdown, {
            key: key == null ? key : `${key}.trigger`,
            ref: ref,
            trigger,
            children: element, 
            menu: menu,
            ...rest
        }),
        menu
    ];
}

export {DropdownMenu, DropdownItem};
