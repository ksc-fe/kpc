import {Component, TypeDefs, Children} from 'intact';
import template from './index.vdt';
import {sizes, Sizes} from '../../styles/utils';
import {Container} from '../portal';

export interface DatepickerProps {
    value: Value | Value[]
    clearable: boolean
    disabled: boolean
    size: Sizes
    type: 'date' | 'datetime' | 'year' | 'month'
    range: boolean
    // transition: string
    shortcuts: Shortcut[]
    container: Container
    disableHours: boolean
    disableMinutes: boolean
    disableSeconds: boolean
    multiple: boolean
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
    value: [String, Array, Date, Number],
    clearable: Boolean,
    disabled: Boolean,
    size: sizes,
    type: ['date', 'datetime', 'year', 'month'],
    range: Boolean,
    // transition: String,
    shortcuts: Array,
    container: [Function, String],
    disableHours: Boolean,
    disableMinutes: Boolean,
    disableSeconds: Boolean,
    multiple: Boolean,
    format: String,
    valueFormat: String,
    showFormat: String,
    minDate: [String, Date, Number],
    maxDate: [String, Date, Number],
    disabledDate: Function,
};

const defaults = (): Partial<DatepickerProps> => ({
    size: 'default',
    type: 'date'
});

export class Datepicker<T extends DatepickerProps = DatepickerProps> extends Component<T> {
    static template = template;
    static typeDefs = typeDefs;
    static defaults = defaults;
}
