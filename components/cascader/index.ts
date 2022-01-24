import {Component, TypeDefs} from 'intact';
import template from './index.vdt';
import {BaseSelect, BaseSelectProps, BaseSelectEvents, BaseSelectBlocks} from '../select/base';
import {_$} from '../../i18n';
import {isNullOrUndefined} from 'intact-shared';
import {useValue} from './useValue';
import {useLabel} from './useLabel';
import {useLoad} from './useLoad';
import {useFilterable} from './useFilterable';

export interface CascaderProps<V = any, Multipe extends boolean = boolean> extends BaseSelectProps<V[], Multipe> {
    data?: CascaderData<V>[]
    trigger?: 'click' | 'hover'
    changeOnSelect?: boolean
    format?: (labels: string[]) => string
    loadData?: (data: CascaderData<V>) => any 
    filter?: (keywords: string, data: CascaderData<V>) => boolean,
}

export type CascaderData<V> = {
    value: V 
    label: string
    disabled?: boolean
    loaded?: boolean
    children?: CascaderData<V>[]
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
};

const defaults = (): Partial<CascaderProps> => ({
    ...BaseSelect.defaults(),
    data: [],
    trigger: 'click',
    format: (labels: string[]) => labels.join(' / '),
    filter: (keywords: string, data: CascaderData<any>) => data.label.includes(keywords),
});

export class Cascader<
    V = any,
    Multipe extends boolean = false,
> extends BaseSelect<CascaderProps<V, Multipe>, CascaderEvents, CascaderBlocks<V>> {
    static template = template;
    static typeDefs = typeDefs;
    static defaults = defaults;

    private value = useValue();
    private label = useLabel();
    private load = useLoad();
    private filterable = useFilterable(this.input.keywords, this.value.setValue);
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
