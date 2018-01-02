import Intact from 'intact';
import Dropdown from './dropdown';
import DropdownMenu from './menu';
import DropdownItem from './item';
import './index.styl';

const h = Intact.Vdt.miss.h;

function Wrapper(props, inVue) {
    let {
        children, position, key,
        ref, trigger, ...rest
    } = props;

    if (inVue) {
        children = Intact.normalize(children);
    }

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

    return !inVue ? 
        [
            h(Dropdown, {
                key: key == null ? key : `${key}.trigger`,
                ref: ref,
                trigger,
                children: element, 
                menu: menu,
                ...rest
            }),
            menu
        ] :
        h(VueWrapper, {
            children: [
                h(Dropdown, {
                    key: key == null ? key : `${key}.trigger`,
                    ref: ref,
                    trigger,
                    children: [element], 
                    menu: menu,
                    ...rest
                }),
                menu
            ]
        });
}

// Vue only support return one element from functional component,
// so we wrapper them. This will lead to damage the dom struction,
// because we must wrap them with a div
class VueWrapper extends Intact {
    template(data) {
        return h('div', null, data.get('children'), 'k-dropdown');
    }
}

const _Wrapper = Intact.functionalWrapper ?
    Intact.functionalWrapper(Wrapper) : Wrapper;

export default _Wrapper;

export {_Wrapper as Dropdown, DropdownMenu, DropdownItem};
