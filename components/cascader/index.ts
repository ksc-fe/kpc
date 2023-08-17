import {Component, TypeDefs} from 'intact';
import template from './index.vdt';
import {BaseSelect, BaseSelectProps, BaseSelectEvents, BaseSelectBlocks} from '../select/base';
import {_$} from '../../i18n';
import {isNullOrUndefined} from 'intact-shared';
import {useValue} from './useValue';
import {useLabel} from './useLabel';
import {useLoad} from './useLoad';
import {useFilterable} from './useFilterable';
import { useFields } from './useFields';

export interface CascaderProps<
    V = any,
    Multipe extends boolean = boolean,
    Data extends BaseCascaderData = CascaderData<V>
> extends BaseSelectProps<V[], Multipe> {
    data?: Data[],
    trigger?: 'click' | 'hover'
    changeOnSelect?: boolean
    format?: (labels: string[]) => string
    loadData?: (data: Data) => any 
    filter?: (keywords: string, data: Data) => boolean,
    fields?: CascaderFields<Data>,
}

export type CascaderFields<Data> = {
    value?: keyof Data,
    label?: keyof Data,
    children?: keyof Data,
    disabled?: keyof Data,
}

export interface BaseCascaderData {
    loaded?: boolean
    // [key: string]: any
}

export interface CascaderData<V> extends BaseCascaderData {
    value: V 
    label: string
    children?: CascaderData<V>[]
    disabled?: boolean
}

export interface CascaderEvents extends BaseSelectEvents { }

export interface CascaderBlocks<V> extends BaseSelectBlocks<V> { }

const typeDefs: Required<TypeDefs<CascaderProps>> = {
    ...BaseSelect.typeDefs,
    data: Array,
    trigger: ['click', 'hover'],
    changeOnSelect: Boolean,
    format: Function,
    loadData: Function,
    filter: Function,
    fields: Object,
};

const defaults = (): Partial<CascaderProps> => ({
    ...BaseSelect.defaults(),
    data: [],
    trigger: 'click',
    format: (labels: string[]) => labels.join(' / '),
});

export class Cascader<
    V = any,
    Multipe extends boolean = false,
    Data extends BaseCascaderData = CascaderData<V>
> extends BaseSelect<CascaderProps<V, Multipe, Data>, CascaderEvents, CascaderBlocks<V>> {
    static template = template;
    static typeDefs = typeDefs;
    static defaults = defaults;

    private fields = useFields();
    private value = useValue();
    private label = useLabel(this.fields);
    private load = useLoad(this.fields);
    private filterable = useFilterable(
        this.input.keywords,
        this.value.setValue,
        this.fields
    );
    private positionObj = {my: 'left top', at: 'right top', collisionDirection: ['left']};

    protected getPlaceholder() {
        const {placeholder, filterable} = this.get();

        return isNullOrUndefined(placeholder) ?
            filterable ? _$('请输入或选择') : _$('请选择') :
            placeholder;
    }

    protected getLabel() {
        return this.label.getLabel();
    }

    protected hasValue() {
        const {value} = this.get();
        const has = super.hasValue();

        if (has && !(value as V[]).length) return false;
        return has;
    }
}
