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
        key: key == null ? key : `${key}.menu`,
        ...rest,
        ...menu.props,
    };

    return [dropdown, menu];
}

Wrapper.propTypes = Dropdown.propTypes;

const _Wrapper = Intact.functionalWrapper ?
    Intact.functionalWrapper(Wrapper) : Wrapper;

export default _Wrapper;

export {_Wrapper as Dropdown, DropdownMenu, DropdownItem};
