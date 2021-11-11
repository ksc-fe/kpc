import {Component, TypeDefs, Children, VNodeComponentClass} from 'intact';
import template from './column.vdt';
import {useGroup} from './useGroup';

export interface TableColumnProps {
    key: string
    title?: Children
    sortable?: boolean
    width?: string | number
    group?: TableColumnGroupItem[]
    multiple?: boolean
    ignore?: boolean
    fixed?: 'left' | 'right'
    align?: 'left' | 'center' | 'right'
    exportTitle?: string
    exportCell?: (data: any, index: number) => string
    minWidth?: number

    // passed by Table
    // offset: number
    cols?: number
    rows?: number
    prevVNode?: VNodeComponentClass<TableColumn> | null
}

export interface TableColumnEvents { }

export interface TableColumnBlocks<T> {
    title: null
    template: [T, number]
    default: [T, number]
}

export type TableColumnGroupItem = {
    label: Children
    value: any
}

const typeDefs: Required<TypeDefs<TableColumnProps>> = {
    key: {
        type: String,
        required: true,
    },
    title: String, // TODO
    sortable: Boolean,
    width: [String, Number],
    group: Array,
    multiple: Boolean,
    ignore: Boolean,
    fixed: ['left', 'right'],
    align: ['left', 'center', 'right'],
    exportTitle: String,
    exportCell: Function,
    minWidth: Number,

    // offset: null,
    cols: null,
    rows: null,
    prevVNode: null,
};

export class TableColumn<T = any> extends Component<TableColumnProps, TableColumnEvents, TableColumnBlocks<T>> {
    static template = template;
    static typeDefs = typeDefs;

    private group = useGroup();
}
