import {Component, TypeDefs, Children, VNodeComponentClass, VNode, createRef} from 'intact';
import template from './column.vdt';
import {useGroup} from './useGroup';
import { useConfigContext } from '../config';

export interface TableColumnProps {
    key: string
    title?: Children
    sortable?: boolean
    width?: string | number
    group?: TableColumnGroupItem[]
    hideGroupHeader?: boolean
    multiple?: boolean
    ignore?: boolean
    fixed?: 'left' | 'right'
    align?: 'left' | 'center' | 'right'
    exportTitle?: string
    exportCell?: (data: any, index: number) => string
    minWidth?: number
    hidden?: boolean

    // passed by Table
    // offset: number
    cols?: number
    rows?: number
    prevVNode?: VNodeComponentClass<TableColumn> | null
    nextVNode?: VNodeComponentClass<TableColumn> | null
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
    title: [String, Number, VNode],
    sortable: Boolean,
    width: [String, Number],
    group: Array,
    hideGroupHeader: Boolean,
    multiple: Boolean,
    ignore: Boolean,
    fixed: ['left', 'right'],
    align: ['left', 'center', 'right'],
    exportTitle: String,
    exportCell: Function,
    minWidth: Number,
    hidden: Boolean,

    // offset: null,
    cols: null,
    rows: null,
    prevVNode: null,
    nextVNode: null,
};

export class TableColumn<T = any> extends Component<TableColumnProps, TableColumnEvents, TableColumnBlocks<T>> {
    static template = template;
    static typeDefs = typeDefs;

    public elementRef = createRef<HTMLElement>();

    private group = useGroup();
    private config = useConfigContext();
}
