import Intact from 'intact';
import Dropdown from './dropdown';
import DropdownMenu from './menu';
import DropdownItem from './item';

const {h} = Intact.Vdt.miss;

function Wrapper(props) {
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

    return [dropdown, menu];
}

Wrapper.propTypes = Dropdown.propTypes;

const _Wrapper = Intact.functionalWrapper ?
    Intact.functionalWrapper(Wrapper) : Wrapper;

export default _Wrapper;

export {_Wrapper as Dropdown, DropdownMenu, DropdownItem};
