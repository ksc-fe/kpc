import {Component, TypeDefs, Props, createRef} from 'intact';
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
import {useSelected} from './useSelected';
import {useTree} from './useTree';
import {TooltipProps, Tooltip} from '../tooltip/tooltip';

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
    selectedKeys?: TableRowKey[]
    rowSelectable?: boolean | 'single' | 'multiple'
    childrenKey?: string
    indent?: number
    spreadKeys?: TableRowKey[]
    tooltipPosition?: TooltipProps['position']
    tooltipContainer?: TooltipProps['container']
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
    selectedKeys: Array,
    rowSelectable: [Boolean, 'single', 'multiple'],
    childrenKey: String,
    indent: Number,
    spreadKeys: Array,
    tooltipPosition: Tooltip.typeDefs.position,
    tooltipContainer: Tooltip.typeDefs.container,
};

const defaults = (): Partial<TableProps> => ({
    checkType: 'checkbox',
    rowKey(value, index) { return index; },
    rowCheckable: true,
    rowExpandable: true,
    childrenKey: 'children',
    indent: 32,
});

export class Table extends Component<TableProps> {
    static template = template;
    static typeDefs = typeDefs;
    static defaults = defaults;

    private tree = useTree();
    private columns = useColumns();
    private stickyHeader = useStickyHeader();
    private fixedColumns = useFixedColumns(
        this.columns.getColumns,
        this.stickyHeader.scrollRef
    );
    private disableRow = useDisableRow(this.tree.loopData);
    private merge = useMerge(this.columns.getCols);
    private checked = useChecked(
        this.disableRow.getEnableKeys,
        this.disableRow.getAllKeys,
        this.disableRow.isDisabledKey,
        this.merge.getGrid,
        this.tree.loopData,
    );
    private sortable = useSortable();
    private expandable = useExpandable();
    private selected = useSelected();

    public getCheckedData() {
        return this.getData('checkedKeys');
    }

    public getSelectedData() {
        return this.getData('selectedKeys');
    }

    public scrollToRowByIndex(index: number) {
        return this.scrollToRowByKey(this.disableRow.getEnableKeys()[index]);
    }

    public scrollToRowByKey(key: TableRowKey) {
        return new Promise<void>(resolve => {
            const scrollElement = this.stickyHeader.scrollRef.value!;
            const tr = scrollElement.querySelector(`tr[data-key="${key}"]`) as HTMLElement | null;

            if (!tr) return resolve();

            // we can not use scrollIntoView with smooth, because it can only operate one element
            // at the same time
            // elem.scrollIntoView({behavior: 'smooth'});
            const headerHeight = (scrollElement.querySelector('thead') as HTMLElement).offsetHeight;
            let scrollTop = scrollElement.scrollTop;
            const offsetTop = tr.offsetTop + 1 - headerHeight;
            const top = offsetTop - scrollTop;
            const topOneFrame = top / 60 / (100 / 1000);
            const step = () => {
                scrollTop = Math[topOneFrame < 0 ? 'max' : 'min'](scrollTop + topOneFrame, offsetTop);
                scrollElement.scrollTop = scrollTop;
                if (!this.$unmounted && scrollTop !== offsetTop) {
                    requestAnimationFrame(step);
                } else {
                    resolve();
                }
            };

            requestAnimationFrame(step);
        });
    }

    private getData(type: 'selectedKeys' | 'checkedKeys') {
        const keys = this.get(type);
        const ret: any[] = [];

        if (!keys) return ret;

        const allKeys = this.disableRow.getAllKeys();
        const checkedKeysMap: Record<TableRowKey, true> = {};
        keys.forEach(item => {
            checkedKeysMap[item] = true;
        });
        this.tree.loopData((value, index) => {
            const key = allKeys[index];
            if (checkedKeysMap[key]) {
                ret.push(value);
            }
        });

        return ret;
    }

    @bind
    private clickRow(data: any, index: number, key: string | number) {
        this.trigger('click:row', data, index, key);
    }
    
    @bind
    private onChangeGroup(key: string, value: any) {
        this.set(`group.${key}`, value);
    }
}
