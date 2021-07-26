import {Component, TypeDefs, createRef, VNodeComponentClass, Props} from 'intact';
import template from './row.vdt';
import type {TableColumnProps} from './column';
import type {TableProps} from './table';
import {bind} from '../utils';
import type {TableGrid} from './useMerge';

export interface TableRowProps {
    key: string | number
    data: any
    cols: Props<TableColumnProps>[]
    checkType: TableProps['checkType'] 
    hasFixedLeft: boolean
    onClick: (data: any, index: number, key: string | number) => void
    checked: boolean
    index: number
    disabled: boolean
    grid: TableGrid
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
            if (key === 'index' || key === 'grid') continue;
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
    onClick() {
        const {index, key, data, onClick, disabled} = this.get();
        if (!disabled)  {
            onClick(data, index, key);
        }
    }
}
