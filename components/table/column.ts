import {Component, TypeDefs, Children} from 'intact';
import template from './column.vdt';

export interface TableColumnProps {
    key: string
    title?: Children
    sortable?: boolean
    width?: string | number
    group?: any[]
    groupValue?: any
    multiple?: boolean
    ignore?: boolean
    fixed?: 'left' | 'right'
    align?: 'left' | 'center' | 'right'
    exportTitle?: string
    shadow?: boolean
    offset?: number
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
    groupValue: null,
    multiple: Boolean,
    ignore: Boolean,
    fixed: ['left', 'right'],
    align: ['left', 'center', 'right'],
    exportTitle: String,
    shadow: Boolean,
    offset: Number,
};

export class TableColumn extends Component<TableColumnProps> {
    static template = template;
    static typeDefs = typeDefs;
}
