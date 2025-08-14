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
    public resetKeywords(silent: boolean = false) {
        // const {multiple} = this.get();
        // const dayjsValue = this.value.getDayjsValue();
        const value = last(this.value.value.value);
        const keywords = this.input.keywords;

        let _keywords = '';
        if (value && !this.value.allValuesUpdatedInMultipleMode()) {
            _keywords = this.value.formatSingleValue(value); 
        }

        if (!silent) {
            keywords.set(_keywords);
        } else {
            // update keywords will update value, because it is been watched in useValueBase
            // silent in this case to update keywords to show it in input
            (keywords as any).value = _keywords;
            this.forceUpdate();
        }
    }

    // @bind
    // protected clear(e: MouseEvent) {
        // e.stopPropagation();
        // this.set('value', this.get('multiple') ? [] : null);
    // }
}

