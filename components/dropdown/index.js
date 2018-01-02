import Intact from 'intact';
import Dropdown from './dropdown';
import DropdownMenu from './menu';
import DropdownItem from './item';
import './index.styl';

const h = Intact.Vdt.miss.h;

export default function Wrapper(props) {
    const {
        children, position, key,
        ref, trigger, ...rest
    } = props;
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

export {Dropdown, DropdownMenu, DropdownItem};
