import Intact from 'intact';
import FormItem from './formItem';

const h = Intact.Vdt.miss.h;

function Wrapper(props) {
    let {key, _context, model, ...rest} = props;
    if (!key && model) {
        key = `$fi.${model}`;
    }
    return h(FormItem, {
        key, model, _context, 
        ...(
            model ? {
                'ev-$change:value': function(c, v) {
                    _context.data.set(model, v);
                },
                value: _context.data.get(model),
            } : {}
        ),
        ...rest
    });
}

export default Intact.functionalWrapper ?
    Intact.functionalWrapper(Wrapper) : Wrapper;

