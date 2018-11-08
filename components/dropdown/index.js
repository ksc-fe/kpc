import Intact from 'intact';
import Dropdown from './dropdown';
import DropdownMenu from './menu';
import DropdownItem from './item';

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
                ...rest
            }),
            menu
        ] :
        h(DropdownVueWrapper, {
            children: [
                h(Dropdown, {
                    key: key == null ? key : `${key}.trigger`,
                    ref: ref,
                    children: [element], 
                    ...rest
                }),
                menu
            ],
            ...rest
        });
}

// Vue only support return one element from functional component,
// so we wrap them. This will lead to damage the dom struction,
// because we must wrap them with a div
const _className = Intact.Vdt.utils.className;
class DropdownVueWrapper extends Intact {
    template(data) {
        const {className, children, ...rest} = data.get();
        return h('div', rest, children, _className({
            'k-dropdown': true,
            [className]: className,
        }));
    }
}

const _Wrapper = Intact.functionalWrapper ?
    Intact.functionalWrapper(Wrapper) : Wrapper;

export default _Wrapper;

export {_Wrapper as Dropdown, DropdownMenu, DropdownItem};
