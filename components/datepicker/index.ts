import {TypeDefs, Children, provide} from 'intact';
import template from './index.vdt';
import {sizes, Sizes} from '../../styles/utils';
import {Container} from '../portal';
import {BaseSelect, BaseSelectProps} from '../select/base';
import {DATEPICKER} from './constants';

export interface DatepickerProps extends BaseSelectProps {
    value: Value | Value[]
    type: 'date' | 'datetime' | 'year' | 'month'
    range: boolean
    // transition: string
    shortcuts: Shortcut[]
    container: Container
    disableHours: boolean
    disableMinutes: boolean
    disableSeconds: boolean
    format: string
    valueFormat: string
    showFormat: string
    minDate: Value,
    maxDate: Value,
    disabledDate: (v: Value) => boolean
}

type Value = string | Date | number;

// TODO
type Shortcut = Function

const typeDefs: Required<TypeDefs<DatepickerProps>> = {
    ...BaseSelect.typeDefs,
    value: [String, Array, Date, Number],
    type: ['date', 'datetime', 'year', 'month'],
    range: Boolean,
    // transition: String,
    shortcuts: Array,
    container: [Function, String],
    disableHours: Boolean,
    disableMinutes: Boolean,
    disableSeconds: Boolean,
    format: String,
    valueFormat: String,
    showFormat: String,
    minDate: [String, Date, Number],
    maxDate: [String, Date, Number],
    disabledDate: Function,
};

const defaults = (): Partial<DatepickerProps> => ({
    ...BaseSelect.defaults(),
    type: 'date'
});

export class Datepicker<T extends DatepickerProps = DatepickerProps> extends BaseSelect<T> {
    static template = template;
    static typeDefs = typeDefs;
    static defaults = defaults;

    init() {
        super.init();
        provide(DATEPICKER, this);
    }

    protected getPlaceholder() {
        return 'test';
    }

    protected getLabel() {
        return 'label';
    }
}
