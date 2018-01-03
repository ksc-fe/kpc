import Intact from 'intact';
import Dropdown from './dropdown';
import DropdownMenu from './menu';
import DropdownItem from './item';
import './index.styl';

const h = Intact.Vdt.miss.h;

function Wrapper(props, inVue) {
    let {
        children, position, key,
        ref, ...rest
    } = props;

    const element = children[0];
    const menu = children[1];

    menu.props = {
        position, 
        key: key == null ? key : `${key}.menu`,
        ...rest,
        ...menu.props,
    };

    return !inVue ? 
        [
            h(Dropdown, {
                key: key == null ? key : `${key}.trigger`,
                ref: ref,
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
                    children: [element], 
                    menu: menu,
                    ...rest
                }),
                menu
            ]
        });
}

// Vue only support return one element from functional component,
// so we wrap them. This will lead to damage the dom struction,
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
