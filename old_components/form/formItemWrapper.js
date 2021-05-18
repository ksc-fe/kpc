import Intact from 'intact';
import FormItem from './formItem';
import {hasOwn, deprecated} from '../utils';

const h = Intact.Vdt.miss.h;

function Wrapper(props) {
    /* istanbul ignore next */
    if (hasOwn.call(props, 'model')) {
        deprecated(
            `The 'model' property on FormItem has been deprected,` +
            ` use 'value' instead.`,
            `https://github.com/ksc-fe/kpc/issues/565`
        );
    }
    /* istanbul ignore next */
    if (props.rules) {
        if (props.rules.equalTo) {
            deprecated(
                `The 'equalTo' rule of FormItem has been deprected,` +
                ` use 'equal' instead.`,
                `https://github.com/ksc-fe/kpc/issues/565`
            );
        }
    }
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
Wrapper.displayName = FormItem.name;

export default Intact.functionalWrapper ?
    Intact.functionalWrapper(Wrapper) : Wrapper;

