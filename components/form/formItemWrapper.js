import Intact from 'intact';
import FormItem from './formItem';
import {hasOwn} from '../utils';

const h = Intact.Vdt.miss.h;

function Wrapper(props) {
    let {key, _context, model, ...rest} = props;
    if (!key && model) {
        key = `$fi.${model}`;
    }
    return h(FormItem, {
        key, model, _context,
        ...(
            model ?
                {
                    'ev-$change:value': function(c, v) {
                        _context.data.set(model, v, {async: false});
                    },
                    value: _context.data.get(model),
                } :
                hasOwn.call(rest, 'value') ?
                    // add a model to let FormItem validate this value
                    {model: '__use_value'} :
                    undefined
        ),
        ...rest
    });
}

Wrapper.blocks = FormItem.blocks;

export default Intact.functionalWrapper ?
    Intact.functionalWrapper(Wrapper) : Wrapper;

