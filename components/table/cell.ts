import {Component, Props, VNodeComponentClass, IntactDom} from 'intact';
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
        lastVNode: VNodeComponentClass<this>,
        nextVNode: VNodeComponentClass<this>,
        parentDom: Element,
        anchor: IntactDom | null,
        mountedQueue: Function[],
        force: boolean
    ) {
        const lastProps = lastVNode.props!;
        const nextProps = nextVNode.props!;

        let isSame = true;
        for (const key in lastProps) {
            if (lastProps[key] !== nextProps[key]) {
                isSame = false;
                break;
            }
        }

        if (!isSame) {
            super.$update(lastVNode, nextVNode, parentDom, anchor, mountedQueue, force);
        } 
    }
}
