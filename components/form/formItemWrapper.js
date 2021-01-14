import Intact from 'intact';
import FormItem from './formItem';
import {hasOwn} from '../utils';

const h = Intact.Vdt.miss.h;

function Wrapper(props) {
    return h(FormItem, {
        ...props,
        ...(
            hasOwn.call(props, 'value') ?
                // add a model to let FormItem validate this value
                {model: '__use_value'} :
                undefined
        ),
    });
}

Wrapper.blocks = FormItem.blocks;

export default Intact.functionalWrapper ?
    Intact.functionalWrapper(Wrapper) : Wrapper;

