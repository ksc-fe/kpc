import {Component, TypeDefs, Props, createRef, mount, findDomFromVNode} from 'intact';
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
import {useRestRowStatus} from './useRestRowStatus';
import {exportTable} from './exportTable';
import {useResizable} from './useResizable';
import {useDraggable} from './useDraggable';
import {useStickyScrollbar} from './useStickyScrollbar';
import {useWidth} from './useWidth';
import {useScroll} from './useScroll';

export interface TableProps<T = any> {
    data?: T[]
    fixHeader?: boolean | string | number 
    stickHeader?: boolean | string | number
    stickScrollbar?: boolean | string | number
    checkType?: 'checkbox' | 'radio' | 'none'
    checkedKeys?: TableRowKey[]
    rowKey?: (value: T, index: number) => TableRowKey
    rowCheckable?: boolean
    disableRow?: (value: T, index: number, key: TableRowKey) => boolean
    type?: 'default' | 'border' | 'grid'
    stripe?: boolean
    rowClassName?: (value: T, index: number, key: TableRowKey) => string | undefined
    group?: TableGroupValue
    sort?: TableSortValue 
    loading?: boolean
    merge?: TableMerge<T>
    expandedKeys?: TableRowKey[]
    rowExpandable?: boolean
    selectedKeys?: TableRowKey[]
    rowSelectable?: boolean | 'single' | 'multiple'
    childrenKey?: string
    indent?: number
    spreadKeys?: TableRowKey[]
    tooltipPosition?: TooltipProps['position']
    tooltipContainer?: TooltipProps['container']
    keepStatus?: boolean
    showIndeterminate?: boolean
    resizable?: boolean
    minColWidth?: number
    widthStoreKey?: string
}

export interface TableEvents<T = any> {
    clickRow: [T, number, TableRowKey]
    dragstart: [{key: TableRowKey, from: number}]
    dragend: [{key: TableRowKey, from: number, to: number}]
}

export interface TableBlocks<T = unknown> {
    empty: null
    tooltip: [T, number] 
    expand: [T, number]
}

export type TableRowKey = string | number;
export type TableSortValue<T = string> = {
    key?: T 
    type?: 'desc' | 'asc'
}

export type TableGroupValue<T extends string | number | symbol = string> = Record<T, any | any[]> 

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
};

const defaults = (): Partial<TableProps> => ({
    checkType: 'checkbox',
    rowKey(value, index) { return index; },
    rowCheckable: true,
    rowExpandable: true,
    childrenKey: 'children',
    indent: 32,
    minColWidth: 40,
});

export class Table<T = any> extends Component<TableProps<T>, TableEvents<T>> {
    static template = template;
    static typeDefs = typeDefs;
    static defaults = defaults;

    private tree = useTree();
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
    private resetRowStatus = useRestRowStatus();
    private draggable = useDraggable();
    private stickyScrollbar = useStickyScrollbar(
        this.stickyHeader.elementRef,
        this.scroll,
        this.width.tableRef,
        this.fixedColumns.setScrollPosition,
        this.width.tableWidth,
    );

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

    public async exportTable(data: any[] | undefined = this.get('data'), filename = 'table') {
        await exportTable(this.columns.getData, data, filename, this, filename); 
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
        this.trigger('clickRow', data, index, key);
    }
    
    @bind
    private onChangeGroup(key: string, value: any) {
        this.set(`group.${key}`, value);
    }
}
