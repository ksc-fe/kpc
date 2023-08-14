import {Component, TypeDefs} from 'intact';
import template from './table.vdt';
import {useColumns} from './useColumns';
import {useFixedColumns} from './useFixedColumns';
import {useStickyHeader} from './useStickyHeader';
import {bind} from '../utils';
import {useChecked} from './useChecked';
import {useDisableRow} from './useDisableRow';
import {useSortable} from './useSortable';
import {useMerge, TableMerge} from './useMerge';
import {useExpandable} from './useExpandable';
import {useSelected} from './useSelected';
import {useTree} from './useTree';
import {TooltipProps, Tooltip} from '../tooltip/tooltip';
import {useRestRowStatus} from './useRestRowStatus';
import {exportTable} from './exportTable';
import {useResizable} from './useResizable';
import {useDraggable} from './useDraggable';
import {useStickyScrollbar} from './useStickyScrollbar';
import {useWidth} from './useWidth';
import {useScroll} from './useScroll';
import type {Events} from '../types';
import type {PaginationProps, PaginationChangeData} from '../pagination';
import { usePagination } from './usePagination';

export interface TableProps<
    T = any,
    K extends TableRowKey = TableRowKey,
    C extends CheckType = CheckType,
    S extends string = string,
    G extends TableGroupValue = TableGroupValue
> {
    data?: T[]
    fixHeader?: boolean | string | number 
    stickHeader?: boolean | string | number
    stickScrollbar?: boolean | string | number
    checkType?: C
    checkedKeys?: K[]
    rowKey?: (value: T, index: number) => K 
    rowCheckable?: boolean
    disableRow?: (value: T, index: number, key: K) => boolean
    type?: 'default' | 'border' | 'grid'
    stripe?: boolean
    rowClassName?: (value: T, index: number, key: K) => string | undefined
    group?: G
    sort?: TableSortValue<S>
    loading?: boolean
    merge?: TableMerge<T, C>
    expandedKeys?: K[]
    rowExpandable?: boolean
    selectedKeys?: K[]
    rowSelectable?: boolean | 'single' | 'multiple'
    childrenKey?: string
    indent?: number
    spreadKeys?: K[]
    tooltipPosition?: TooltipProps['position']
    tooltipContainer?: TooltipProps['container']
    keepStatus?: boolean
    showIndeterminate?: boolean
    resizable?: boolean
    minColWidth?: number
    widthStoreKey?: string
    draggable?: boolean
    animation?: boolean | [boolean, boolean]
    hideHeader?: boolean
    pagination?: boolean | PaginationProps
}

export interface TableEvents<T = any, K extends TableRowKey = number> {
    clickRow: [T, number, K]
    dragstart: [{key: K, from: number}]
    dragend: [{key: K, from: number, to: number}]
    checkRow: [T, number, K]
    uncheckRow: [T, number, K]
    checkAll: []
    uncheckAll: []
    changePage: [PaginationChangeData]
}

export interface TableBlocks<T = unknown> {
    empty: null
    tooltip: [T, number] 
    expand: [T, number]
}

type CheckType = 'checkbox' | 'radio' | 'none'
export type TableCheckType = CheckType;

export type TableRowKey = string | number;
export type TableSortValue<T = string> = {
    key?: T 
    type?: 'desc' | 'asc'
}

export type TableGroupValue<T extends string | number | symbol = string | number | symbol> = Record<T, any | any[]> 

const typeDefs: Required<TypeDefs<TableProps<unknown>>> = {
    data: Array,
    fixHeader: [Boolean, String, Number],
    stickHeader: [Boolean, String, Number],
    stickScrollbar: [Boolean, String, Number],
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
    keepStatus: Boolean,
    showIndeterminate: Boolean,
    resizable: Boolean,
    minColWidth: Number,
    widthStoreKey: String,
    draggable: Boolean,
    animation: [Boolean, Array],
    hideHeader: Boolean,
    pagination: [Boolean, Object],
};

const defaults = (): Partial<TableProps> => ({
    checkType: 'checkbox',
    rowKey(value, index) { return index; },
    rowCheckable: true,
    rowExpandable: true,
    childrenKey: 'children',
    indent: 32,
    minColWidth: 40,
    animation: true,
});

const events: Events<TableEvents> = {
    clickRow: true,
    dragstart: true,
    dragend: true,
    checkRow: true,
    uncheckRow: true,
    checkAll: true,
    uncheckAll: true,
    changePage: true,
};

export class Table<
    T = any,
    RowKey extends TableRowKey = TableRowKey,
    Checkbox extends CheckType = 'checkbox',
    Sort extends string = string,
    Group extends TableGroupValue = TableGroupValue
> extends Component<TableProps<T, RowKey, Checkbox, Sort, Group>, TableEvents<T, RowKey>, TableBlocks<T>> {
    static template = template;
    static typeDefs = typeDefs;
    static defaults = defaults;
    static events = events;

    // use public for unit test to get paginationRef
    public pagination = usePagination();
    private tree = useTree(this.pagination.data);
    private columns = useColumns();
    private scroll = useScroll();
    private stickyHeader = useStickyHeader(this.scroll.callbacks);
    private width = useWidth(
        this.scroll.scrollRef,
        this.columns.getColumns,
    );
    private resizable = useResizable(
        this.scroll.scrollRef,
        this.width.tableRef,
        this.width.tableWidth,
        this.width.widthMap,
        this.width.storeWidth,
    );
    private fixedColumns = useFixedColumns(
        this.columns.getColumns,
        this.scroll,
        this.width.widthMap,
    );
    private disableRow = useDisableRow(
        this.tree.loopData,
        this.pagination.data,
    );
    private merge = useMerge(
        this.columns.getCols,
        this.pagination.data,
    );
    private checked = useChecked(
        this.disableRow.getEnableKeys,
        this.disableRow.getAllKeys,
        this.disableRow.isDisabledKey,
        this.merge.getGrid,
        this.tree.loopData,
        this.pagination.data,
    );
    private sortable = useSortable();
    private expandable = useExpandable();
    private selected = useSelected();
    private resetRowStatus = useRestRowStatus(this.disableRow.getAllKeys);
    private draggable = useDraggable(this.pagination.data);
    private stickyScrollbar = useStickyScrollbar(
        this.stickyHeader.elementRef,
        this.scroll,
        this.width.tableRef,
        this.fixedColumns.setScrollPosition,
    );

    public checkAll() {
        this.checked.toggleCheckedAll(true);
    }

    public uncheckAll() {
        this.checked.toggleCheckedAll(false);
    }

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
            const scrollElement = this.scroll.scrollRef.value!;
            const tr = scrollElement.querySelector(`tr[data-key="${key}"]`) as HTMLElement | null;

            if (!tr) return resolve();

            // we can not use scrollIntoView with smooth, because it can only operate one element
            // at the same time
            // elem.scrollIntoView({behavior: 'smooth'});
            const headerHeight = (scrollElement.querySelector('thead') as HTMLElement).offsetHeight;
            let scrollTop = scrollElement.scrollTop;
            const offsetTop = tr.offsetTop - headerHeight;
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

    public async exportTable(data: any[] | undefined = this.get('data'), filename = 'table') {
        return await exportTable(this.columns.getData, data, filename, this, filename); 
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
    private clickRow(data: T, index: number, key: RowKey) {
        this.trigger('clickRow', data, index, key);
    }
    
    @bind
    private onChangeGroup(key: string, value: any) {
        this.set(`group.${key}`, value);
    }
}
