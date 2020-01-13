import Intact from 'intact';
import Dropdown from './dropdown';
import DropdownMenu from './menu';
import DropdownItem from './item';
import {config, isTextVNode} from '../utils';

const {h} = Intact.Vdt.miss;
const isEmptyString = (vNode) => {
    const type = typeof vNode;
    if (type === 'string') return vNode.trim() === '';
    if (type === 'object') return isTextVNode(vNode) && vNode.children.trim() === '';
    return false;
}

function Wrapper(props, flag) {
    let {
        children, position, key,
        ref, ...rest
    } = props;

    // const [element, menu] = children;
    // ignore whitespaces
    let element;
    let menu;
    let length = children.length;
    let i = 0;
    for (; i < length; i++) {
        element = children[i];
        if (!isEmptyString(element)) {
            break;
        } 
    }
    for (i = i + 1; i < length; i++) {
        menu = children[i];
        if (!isEmptyString(menu)) {
            break;
        }
    }

    const dropdown = h(Dropdown, {
        key: key == null ? key : `${key}.trigger`,
        ref: ref,
        children: [element], 
        ...rest
    });
    menu.props = {
        position, 
        // indicate that it is use in Dropdown or alone for lookup dropdown instance in _mount
        _useInDropdown: true,
        ...rest,
        ...menu.props,
    };
    menu.key = key == null ? menu.key : `${key}.menu`;

    const useWrapper = flag === 'angular' || flag && config.useWrapper;

    if (!useWrapper) {
        return [dropdown, menu];
    }
    return h(DropdownVueWrapper, {
        children: [dropdown, menu],
        ...rest
    });
}

Wrapper.propTypes = Dropdown.propTypes;

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
