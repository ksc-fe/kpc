import {Component, TypeDefs, createRef, VNodeComponentClass, Props} from 'intact';
import template from './row.vdt';
import type {TableColumnProps} from './column';
import type {TableProps, TableRowKey} from './table';
import {bind} from '../utils';
import type {TableGrid} from './useMerge';

export interface TableRowProps {
    key: TableRowKey
    data: any
    cols: Props<TableColumnProps>[]
    checkType: TableProps['checkType'] 
    hasFixedLeft: boolean
    onClick: (data: any, index: number, key: TableRowKey) => void
    checked: boolean
    indeterminate: boolean
    index: number
    disabled: boolean
    allDisabled: boolean
    onChangeChecked: (index: number, checked: boolean) => void
    grid: TableGrid
    selected: boolean
    hidden: boolean
    spreaded: boolean
    hasChildren: boolean
    indent: number
    onToggleSpreadRow: (key: TableRowKey) => void
}

export class TableRow extends Component<TableRowProps> {
    static template = template;

    $update(
        lastVNode: VNodeComponentClass<TableRow>,
        nextVNode: VNodeComponentClass<TableRow>,
        ...rest: any[]
    ) {
        const lastProps = lastVNode.props as TableRowProps;
        const nextProps = nextVNode.props as TableRowProps;

        let isSame = true;
        let key: keyof TableRowProps;
        for (key in lastProps) {
            // ignore index
            if (key === 'index') continue;
            if (lastProps[key] !== nextProps[key]) {
                isSame = false;
                break;
            }
        }

        if (!isSame) {
            (super.$update as any)(lastVNode, nextVNode, ...rest);
        } 
    }

    @bind
    onClick(e: MouseEvent) {
        if ((e.target as HTMLElement).tagName === 'INPUT') return;

        const {index, key, data, onClick, disabled} = this.get();
        if (!disabled)  {
            onClick(data, index, key);
        }
    }

    @bind
    onChangeChecked(v: boolean) {
        const {index, onChangeChecked} = this.get();
        onChangeChecked(index, v);
    }

    @bind
    onClickArrow(e: MouseEvent) {
        e.stopPropagation();
        const {onToggleSpreadRow, key} = this.get();
        onToggleSpreadRow(key);
    }
}
