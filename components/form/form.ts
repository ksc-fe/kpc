import {Component, TypeDefs, provide} from 'intact';
import template from './form.vdt';
import {useRecordParent} from '../../hooks/useRecordComponent';
import {addMethod} from './methods';
import {bind} from '../utils';
import type {FormItem} from './item';

export interface FormProps {
    labelWidth?: string | number
    layout?: 'horizontal' | 'vertical' | 'inline'
    starOnRequired?: boolean
    size?: 'default' | 'small' | 'mini'
}

const typeDefs: Required<TypeDefs<FormProps>> = {
    labelWidth: [String, Number],
    layout: ['horizontal', 'vertical', 'inline'],
    starOnRequired: Boolean,
    size: ['default', 'small', 'mini'],
}

const defaults = (): Partial<FormProps> => ({
    layout: 'horizontal',
    starOnRequired: false,
    size: 'default',
});

export const FORM = 'Form';
export const RECORD_KEY = 'FormRecord';

export class Form extends Component {
    static template = template;
    static typeDefs = typeDefs;
    static defaults = defaults;
    static addMethod = addMethod;

    private items = useRecordParent<FormItem>(RECORD_KEY);

    init() {
        provide(FORM, this);
    }

    validate() {
        return Promise.all(this.items.map(item => item.validate())).then(values => {
            return values.every(value => value);
        });
    }

    getFirstInvalidFormItem() {
        return this.items.find(item => {
            if (item.get('_isValid') === false) {
                return item;
            }
        });
    }

    @bind
    onSubmit(e: Event) {
        e.preventDefault();
        this.submit(e);
    }

    submit(e: Event) {
        this.validate().then(valid => {
            if (valid) {
                this.trigger('submit', e);
            }
        });
    }
}
