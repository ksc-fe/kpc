/**
 * Created by sylvia on 2017/10/31.
 */
import Intact from 'intact';
import Tooltip from './tooltip';
import TooltipContent from './content';

const h = Intact.Vdt.miss.h;

function Wrapper(props, inVue) {
    let {children, content, _blocks, _context, ref, ...rest} = props;

    if (_blocks && _blocks.content) {
        content = _blocks.content.call(_context);
    }

    const contentVNode = h(TooltipContent, {
        _context,
        children: content,
        ref,
        _useInDropdown: true,
        ...rest
    });

    return [
        h(Tooltip, {
            _context,
            children,
            ...rest,
            className: 'k-tooltip',
        }),
        contentVNode
    ]; 
}

// for vue Boolean cast
Wrapper.propTypes = TooltipContent.propTypes;

const _Wrapper = Intact.functionalWrapper ?
    Intact.functionalWrapper(Wrapper) : Wrapper;

export default _Wrapper;

export {_Wrapper as Tooltip};
