import {Component, TypeDefs, Props} from 'intact';
import template from './table.vdt';
import {useColumns} from './useColumns';
import {useFixedColumns} from './useFixedColumns';
import {useStickyHeader} from './useStickyHeader';
import {bind} from '../utils';
import {useChecked} from './useChecked';
import {useDisableRow} from './useDisableRow';
import {useSortable} from './useSortable';
import type {TableColumnProps} from './column';
import {useMerge, TableMerge} from './useMerge';
import {useExpandable} from './useExpandable';

export interface TableProps {
    data?: any[]
    fixHeader?: boolean | string | number 
    stickHeader?: boolean | string | number
    checkType?: 'checkbox' | 'radio' | 'none'
    checkedKeys?: TableRowKey[]
    rowKey?: (value: any, index: number) => TableRowKey
    rowCheckable?: boolean
    disableRow?: (value: any, index: number, key: TableRowKey) => boolean
    type?: 'default' | 'border' | 'grid'
    stripe?: boolean
    rowClassName?: (value: any, index: number, key: TableRowKey) => string | undefined
    group?: Record<string, any> 
    sort?: TableSortValue 
    loading?: boolean
    merge?: TableMerge
    expandedKeys?: TableRowKey[]
    rowExpandable?: boolean
}

export type TableRowKey = string | number;
export type TableSortValue = {
    key?: string
    type?: 'desc' | 'asc'
}

const typeDefs: Required<TypeDefs<TableProps>> = {
    data: Array,
    fixHeader: [Boolean, String, Number],
    stickHeader: [Boolean, String, Number],
    checkType: ['checkbox', 'radio', 'none'],
    checkedKeys: Array,
    rowKey: Function,
    rowCheckable: Boolean,
    disableRow: Function,
    type: ['default', 'border', 'grid'],
    stripe: Boolean,
    rowClassName: Function,
    group: Object,
    sort: Object,
    loading: Boolean,
    merge: Function,
    expandedKeys: Array,
    rowExpandable: Boolean,
};

const defaults = (): Partial<TableProps> => ({
    checkType: 'checkbox',
    rowKey(value, index) { return index; },
    rowCheckable: true,
    rowExpandable: true,
});

export class Table extends Component<TableProps> {
    static template = template;
    static typeDefs = typeDefs;
    static defaults = defaults;

    private columns = useColumns();
    private stickyHeader = useStickyHeader();
    private fixedColumns = useFixedColumns(
        this.columns.getColumns,
        this.stickyHeader.scrollRef
    );
    private disableRow = useDisableRow();
    private merge = useMerge(this.columns.getCols);
    private checked = useChecked(
        this.disableRow.getEnableKeys,
        this.disableRow.getAllKeys,
        this.disableRow.isDisabledKey,
        this.merge.getGrid,
    );
    private sortable = useSortable();
    private expandable = useExpandable();

    @bind
    private clickRow(data: any, index: number, key: string | number) {
        this.trigger('click:row', data, index, key);
    }
    
    @bind
    private onChangeGroup(key: string, value: any) {
        this.set(`group.${key}`, value);
    }
}
