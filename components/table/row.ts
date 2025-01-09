import {
    Component,
    TypeDefs,
    createRef,
    VNodeComponentClass,
    Props,
    Key,
    IntactDom,
    RefObject
} from 'intact';
import template from './row.vdt';
import type {TableColumnProps} from './column';
import type {TableProps, TableRowKey} from './table';
import {bind} from '../utils';
import type {TableGrid} from './useMerge';
import { isEqualObject } from '../utils';
import { useConfigContext } from '../config';
import { hasOwn } from 'intact-shared';

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
    onChangeChecked: (index: number, checked: boolean, key: TableRowKey) => void
    grid: TableGrid
    selected: boolean
    // hidden: boolean
    spreaded: boolean
    hasChildren: boolean
    indent: number
    onToggleSpreadRow: (key: TableRowKey, rowData?: any) => void
    onBeforeUnmount: (key: TableRowKey) => void
    offsetMap: Record<Key, number>
    animation: boolean
    spreadArrowIndex: number
    loaded: boolean

    draggable: boolean
    draggingKey: TableRowKey | null
    onRowDragStart: DragCallback
    onRowDragOver: DragCallback
    onRowDragEnd: DragCallback
}

type DragCallback = (e: MouseEvent, tableRow: TableRow) => void

export class TableRow extends Component<TableRowProps> {
    static template = template;

    private config = useConfigContext();

    $update(
        lastVNode: VNodeComponentClass<this>,
        nextVNode: VNodeComponentClass<this>,
        parentDom: Element,
        anchor: IntactDom | null, 
        mountedQueue: Function[],
        force: boolean
    ) {
        const lastProps = lastVNode.props as TableRowProps;
        const nextProps = nextVNode.props as TableRowProps;

        let isSame = true;
        if (hasOwn.call(this, 'vueInstance')) {
            // In Vue, we may change value by modifing the same reference,
            // and the new row may be expanded by click tree arrow
            // so we can not compare in this case, #1030
            isSame = false;
        } else {
            let key: keyof TableRowProps;
            for (key in lastProps) {
                // ignore index
                if (key === 'index') continue;
                const lastValue = lastProps[key];
                const nextValue = nextProps[key];
                // deeply compare for offsetMap
                if (key === 'offsetMap' && isEqualObject(lastValue, nextValue)) {
                    continue;
                }

                if (lastValue !== nextValue) {
                    isSame = false;
                    break;
                }
            }
        }

        if (!isSame) {
            super.$update(lastVNode, nextVNode, parentDom, anchor, mountedQueue, force);
        } else {
            // should update index
            this.set(nextProps, {silent: true});
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
        const {index, key, onChangeChecked} = this.get();
        onChangeChecked(index, v, key);
    }

    @bind
    onClickArrow(e: MouseEvent) {
        e.stopPropagation();
        const {onToggleSpreadRow, key, data} = this.get();
        onToggleSpreadRow(key, data);
    }

    @bind
    onMouseEnter(e: MouseEvent) {
        // for tooltip
        const mouseEnter = this.get<Function | undefined>('ev-mouseenter');
        mouseEnter && mouseEnter(e);
    }

    @bind
    onMouseLeave(e: MouseEvent) {
        // for tooltip
        const mouseLeave = this.get<Function | undefined>('ev-mouseleave');
        mouseLeave && mouseLeave(e);
    }

    @bind
    onRowDragStart(e: MouseEvent) {
        this.get('onRowDragStart')(e, this);
    }

    @bind
    onRowDragOver(e: MouseEvent) {
        this.get('onRowDragOver')(e, this);
    }

    @bind
    onRowDragEnd(e: MouseEvent) {
        this.get('onRowDragEnd')(e, this);
    }

    beforeUnmount() {
        this.get('onBeforeUnmount')(this.get('key'));
    }
}
