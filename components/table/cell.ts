import {Component, Props, VNodeComponentClass} from 'intact';
import template from './cell.vdt';
import type {TableColumnProps} from './column';
import type {TableProps} from './table';
import type {TableGrid} from './useMerge';

export interface TableCellProps {
    props: Props<TableColumnProps>
    columnIndex: number
    rowIndex: number
    data: any
    offset: number
    checkType: TableProps['checkType'] 
    indent: number
    grid: TableGrid
    colspan: number
    rowspan: number
    onClickArrow: (e: MouseEvent) => void 
    hasChildren: boolean
}

export class TableCell extends Component<TableCellProps> {
    static template = template;

    $update(
        lastVNode: VNodeComponentClass<TableCell>,
        nextVNode: VNodeComponentClass<TableCell>,
        ...rest: any[]
    ) {
        const lastProps = lastVNode.props as TableCellProps;
        const nextProps = nextVNode.props as TableCellProps;

        let isSame = true;
        let key: keyof TableCellProps;
        for (key in lastProps) {
            if (lastProps[key] !== nextProps[key]) {
                isSame = false;
                break;
            }
        }

        if (!isSame) {
            (super.$update as any)(lastVNode, nextVNode, ...rest);
        } 
    }
}
