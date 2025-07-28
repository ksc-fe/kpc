/**
 * The base hook for handling value of Datepicker and Timepicker
 */
import {TypeDefs} from 'intact';
import {State} from '../../hooks/useState';
import dayjs, {Dayjs} from './dayjs';
import type {useFormats} from './useFormats';
import {last, bind} from '../utils';
import {usePanel} from './usePanel';
import {BaseSelect, BaseSelectProps, BaseSelectEvents, BaseSelectBlocks} from '../select/base';
import type {Events} from '../types';
import type {useValueBase, StateValueRange, DayjsValueRange, Value} from './useValueBase';

export interface BasePickerProps<
    V extends Value = Value,
    Multipe extends boolean = boolean,
    Range extends boolean = boolean,
> extends BaseSelectProps<V | [V, V], Multipe> {
    value?: 
        Multipe extends true ?
            Range extends true ? 
                [V, V][] :
                V[] :
            Range extends true ?
                [V, V] | null :
                V | null
    range?: Range 
    format?: string
    valueFormat?: string
    showFormat?: string
    min?: Value | null
    max?: Value | null
    disabledDate?: (v: Dayjs) => boolean
}

export interface BasePickerEvents extends BaseSelectEvents {
    selecting: [StateValueRange, boolean],
}

export interface BasePickerBlocks<
    V extends Value = Value,
    R extends boolean = boolean,
> extends BaseSelectBlocks<R extends true ? [Value, Value] : Value> { }

const typeDefs: Required<TypeDefs<BasePickerProps<Value>>> = {
    ...BaseSelect.typeDefs,
    value: [String, Array, Date, Number, dayjs],
    range: Boolean,
    format: String,
    valueFormat: String,
    showFormat: String,
    min: [String, Date, Number, dayjs],
    max: [String, Date, Number, dayjs],
    disabledDate: Function,
};

const defaults = (): Partial<BasePickerProps<any>> => ({
    ...BaseSelect.defaults(),
    filterable: true,
});

const events: Events<BasePickerEvents> = {
    ...BaseSelect.events,
    selecting: true,
};

export abstract class BasePicker<
    T extends BasePickerProps = BasePickerProps,
    E extends BasePickerEvents = BasePickerEvents,
    B extends BasePickerBlocks<any> = BasePickerBlocks<any>,
> extends BaseSelect<T, E, B> {
    static typeDefs = typeDefs;
    static defaults = defaults;
    static events = events;

    public abstract value: ReturnType<typeof useValueBase>
    public abstract formats: ReturnType<typeof useFormats>
    public abstract panel: ReturnType<typeof usePanel>

    @bind
    public resetKeywords(keywords: State<string>) {
        const {multiple, range} = this.get();
        const dayjsValue = this.value.getDayjsValue();
        const {getShowString} = this.formats;
        const value = last(dayjsValue);

        keywords.set(
            multiple ?  '' : !range ?
                value ? getShowString(value as Dayjs) : '' :
                value ? [
                    (value as DayjsValueRange)[0] ? getShowString((value as DayjsValueRange)[0]) : '',
                    (value as DayjsValueRange)[1] ? getShowString((value as DayjsValueRange)[1]) : '',
                ].join(' ~ ') : ''
        );
    }

    // @bind
    // protected clear(e: MouseEvent) {
        // e.stopPropagation();
        // this.set('value', this.get('multiple') ? [] : null);
    // }
}

