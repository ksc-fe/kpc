import Intact from 'intact';
import Dropdown from './dropdown';
import DropdownMenu from './menu';
import DropdownItem from './item';
import {config} from '../utils';

const {h} = Intact.Vdt.miss;

function Wrapper(props, flag) {
    let {
        children, position, key,
        ref, ...rest
    } = props;

    const [element, menu] = children;

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
