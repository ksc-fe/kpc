import {Component, TypeDefs} from 'intact';
import template from './table.vdt';
import {useColumns} from './useColumns';
import {useFixedColumns} from './useFixedColumns';
import {useStickyHeader} from './useStickyHeader';
import {bind} from '../utils';
import {useChecked} from './useChecked';
import {useDisableRow} from './useDisableRow';

export interface TableProps {
    data?: any[]
    fixHeader?: boolean | string | number 
    stickHeader?: boolean | string | number
    checkType?: 'checkbox' | 'radio' | 'none'
    checkedKeys?: (string | number)[]
    rowKey?: (value: any, index: number) => TableRowKey
    rowCheckable?: boolean
    disableRow?: (value: any, index: number, key: TableRowKey) => boolean
}

export type TableRowKey = string | number;

const typeDefs: Required<TypeDefs<TableProps>> = {
    data: Array,
    fixHeader: [Boolean, String, Number],
    stickHeader: [Boolean, String, Number],
    checkType: ['checkbox', 'radio', 'none'],
    checkedKeys: Array,
    rowKey: Function,
    rowCheckable: Boolean,
    disableRow: Function,
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

    @bind
    private clickRow(data: any, index: number, key: string | number) {
        this.trigger('click:row', data, index, key);
    }
}
