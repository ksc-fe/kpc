import {Component, TypeDefs, VNode, createRef, Key, Children} from 'intact';
import template from './index.vdt';
import {_$} from '../../i18n';
import {useTransfer} from './useTransfer';
import {useFilter, Model} from './useFilter';
import {useCheck, CheckedKeys} from './useCheck';
import {usePagination} from './usePagination';
import type {Events} from '../types';
import type {PaginationProps, PaginationChangeData} from '../pagination';
import { useConfigContext } from '../config';

// type KeysOfType<T, U> = {
    // [P in keyof T as T[P] extends U ? P : never]: T[P]
// };

export interface TransferProps<
    K extends string = 'key',
    L extends string = 'label',
    T extends TransferDataItem<K, L> = TransferDataItem<K, L>,
    V extends T[K] = T[K],
> {
    data?: T[],
    keyName?: K,
    labelName?: L,
    value?: V[],
    leftCheckedKeys?: V[],
    rightCheckedKeys?: V[],
    filterable?: boolean,
    filter?: (data: T, keywords: string) => boolean
    placeholder?: string,
    leftKeywords?: string,
    rightKeywords?: string,
    leftTitle?: string | VNode,
    rightTitle?: string | VNode,
    enableAdd?: () => boolean,
    enableRemove?: () => boolean,
    pagination?: boolean | PaginationProps,
}

export type TransferDataItem<
    A extends string = 'key',
    B extends string = 'label',
> = {
    [K in A]: Key
} & {
    [K in B]?: Children
} & {
    disabled?: boolean
}

export interface TransferEvents {
    add: []
    remove: []
    page: [Model, PaginationChangeData]
}

export interface TransferBlocks<T, V> {
    header: Model
    filter: Model
    list: Model
    label: [T, V, Model]
}

const typeDefs: Required<TypeDefs<TransferProps>> = {
    data: Array,
    keyName: String,
    labelName: String,
    value: Array,
    leftCheckedKeys: Array,
    rightCheckedKeys: Array,
    filterable: Boolean,
    filter: Function,
    placeholder: String,
    leftKeywords: String,
    rightKeywords: String,
    leftTitle: [String, VNode],
    rightTitle: [String, VNode],
    enableAdd: Function,
    enableRemove: Function,
    pagination: [Boolean, Object],
};

const defaults = (): Partial<TransferProps> => ({
    data: [],
    keyName: 'key',
    labelName: 'label',
    value: [],
    leftCheckedKeys: [],
    rightCheckedKeys: [],
    placeholder: _$('请输入'),
    leftTitle: _$('请选择'),
    rightTitle: _$('已选择'),
});

const events: Events<TransferEvents> = {
    add: true,
    remove: true,
    page: true,
};

export class Transfer<
    K extends string = 'key',
    L extends string = 'label',
    T extends TransferDataItem<K, L> = TransferDataItem<K, L>,
    V extends T[K] = T[K],
> extends Component<TransferProps<K, L, T, V>, TransferEvents, TransferBlocks<T, V>> {
    static template = template;
    static typeDefs = typeDefs;
    static defaults = defaults;
    static events = events;

    private transfer = useTransfer();
    private filter = useFilter(this.transfer.rightData);
    public paginationState = usePagination();
    private check = useCheck(this.filter);
    private config = useConfigContext();

    public getData() {
        return this.transfer.rightData.value;
    }

    public getCheckedData(model: Model) {
        const data = this.filter.getFilterData(model);
        const {keyName} = this.get();
        const checkedKeys = this.get(`${model}CheckedKeys` as CheckedKeys)!;

        return data.filter(item => {
            return ~checkedKeys.indexOf(item[keyName!]);
        });
    }
}
