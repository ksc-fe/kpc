import {Component, TypeDefs, createRef, VNodeComponentClass} from 'intact';
import template from './row.vdt';
import type {TableColumn} from './column';
import type {TableProps} from './table';
import {bind} from '../utils';

export interface TableRowProps {
    key: string | number
    data: any
    columns: VNodeComponentClass<TableColumn>[]
    checkType: TableProps['checkType'] 
    hasFixedLeft: boolean
    onClick: (data: any, key: string | number) => void
    checked: boolean
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
        const {key, data, onClick} = this.get();
        onClick(data, key);
    }
}
