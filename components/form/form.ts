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
    size: 'default',
});

export const FORM = 'Form';
export const RECORD_KEY = 'FormRecord';

export class Form extends Component<FormProps> {
    static template = template;
    static typeDefs = typeDefs;
    static defaults = defaults;
    static addMethod = addMethod;

    private items = useRecordParent<FormItem>(RECORD_KEY);

    init() {
        provide(FORM, this);
    }

    public validate() {
        return Promise.all(this.items.map(item => item.validate())).then(values => {
            return values.every(value => value);
        });
    }

    public getFirstInvalidFormItem() {
        return this.items.find(item => {
            if (!item.isValid()) {
                return item;
            }
        });
    }

    public submit(e: Event) {
        this.validate().then(valid => {
            if (valid) {
                this.trigger('submit', e);
            }
        });
    }

    public reset() {
        this.items.forEach(item => item.reset());
    }

    @bind
    private onSubmit(e: Event) {
        e.preventDefault();
        this.submit(e);
    }
}
