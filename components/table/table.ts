import {Component, TypeDefs} from 'intact';
import template from './table.vdt';
import {useColumns} from './useColumns';
import {useFixedColumns} from './useFixedColumns';
import {useStickyHeader} from './useStickyHeader';
import {bind} from '../utils';
import {useChecked} from './useChecked';
import {useDisableRow} from './useDisableRow';
import {useSortable} from './useSortable';

export interface TableProps {
    data?: any[]
    fixHeader?: boolean | string | number 
    stickHeader?: boolean | string | number
    checkType?: 'checkbox' | 'radio' | 'none'
    checkedKeys?: (string | number)[]
    rowKey?: (value: any, index: number) => TableRowKey
    rowCheckable?: boolean
    disableRow?: (value: any, index: number, key: TableRowKey) => boolean
    type?: 'default' | 'border' | 'grid'
    stripe?: boolean
    rowClassName?: (value: any, index: number, key: TableRowKey) => string | undefined
    group?: Record<string, any> 
    sort?: TableSortValue 
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
};

const defaults = (): Partial<TableProps> => ({
    checkType: 'checkbox',
    rowKey(value, index) { return index; },
    rowCheckable: true,
});

export class Table extends Component<TableProps> {
    static template = template;
    static typeDefs = typeDefs;
    static defaults = defaults;

    private columns = useColumns();
    private fixedColumns = useFixedColumns(this.columns.getColumns);
    private stickyHeader = useStickyHeader();
    private disableRow = useDisableRow();
    private checked = useChecked(this.disableRow.getEnableKeys);
    private sortable = useSortable();

    @bind
    private clickRow(data: any, index: number, key: string | number) {
        this.trigger('click:row', data, index, key);
    }
    
    @bind
    private onChangeGroup(key: string, value: any) {
        this.set(`group.${key}`, value);
    }
}
