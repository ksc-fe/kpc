import {Component, TypeDefs} from 'intact';
import template from './index.vdt';
import {BaseSelect, BaseSelectProps} from '../select/base';
import {_$} from '../../i18n';
import {isNullOrUndefined} from 'intact-shared';
import {useValue} from './useValue';

export interface CascaderProps extends BaseSelectProps {
    data?: Data[]
    trigger?: 'click' | 'hover'
}

type Data = {
    value: any
    label: string
    disabled?: boolean
    loaded?: boolean
    children?: Data[]
}

const typeDefs: Required<TypeDefs<CascaderProps>> = {
    ...BaseSelect.typeDefs,
    data: Array,
    trigger: ['click', 'hover'],
}

const defaults = (): Partial<CascaderProps> => ({
    ...BaseSelect.defaults(),
    data: [],
    trigger: 'click',
});

export class Cascader extends BaseSelect<CascaderProps> {
    static template = template;
    static typeDefs = typeDefs;
    static defaults = defaults;

    private value = useValue();

    protected getPlaceholder() {
        const {placeholder, filterable} = this.get();

        return isNullOrUndefined(placeholder) ?
            filterable ? _$('请输入或选择') : _$('请选择') :
            placeholder;
    }

    protected getLabel() {
        return '';
    }
}
