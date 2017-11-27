import Intact from 'intact';
import FormItem from './formItem';

const h = Intact.Vdt.miss.h;

export default function(props) {
    let {key, _context, model, ...rest} = props;
    if (!key && model) {
        key = `$fi.${model}`;
    }
    return h(FormItem, {
        key, model, _context, 
        'ev-$change:value': function(c, v) {
            _context.data.set(model, v);
        },
        value: _context.data.get(model),
        ...rest
    });
}

