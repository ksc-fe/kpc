/**
 * Created by sylvia on 2017/10/31.
 */
import Intact from 'intact';
import Tooltip from './tooltip';
import TooltipContent from './content';
import {config} from '../utils';

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

    if (!inVue || !config.useWrapper) {
        return [h(Tooltip, {
            _context,
            children,
            ...rest,
            className: 'k-tooltip',
        }), contentVNode]; 
    }
    return h(TooltipVueWrapper, {
        children: [h(Tooltip, {
            _context,
            children,
            ...(props.trigger ? {trigger: props.trigger} : {}),
        }), contentVNode],
        ...rest
    });
}

// for vue Boolean cast
Wrapper.propTypes = TooltipContent.propTypes;

const _className = Intact.Vdt.utils.className;
class TooltipVueWrapper extends Intact {
    template(data) {
        const {className, children, ...rest} = data.get();
        return h('div', rest, children, _className({
            'k-tooltip': true,
            [className]: className,
        }));
    }
}

const _Wrapper = Intact.functionalWrapper ?
    Intact.functionalWrapper(Wrapper) : Wrapper;

export default _Wrapper;

export {_Wrapper as Tooltip};
