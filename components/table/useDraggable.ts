import {useInstance, nextTick} from 'intact';
import type {Table, TableRowKey} from './table';
import {useState, State} from '../../hooks/useState';
import type {TableRow} from './row';
import {swap} from '../utils';

export function useDraggable(data: State<unknown[] | undefined>) {
    const instance = useInstance() as Table<any, TableRowKey>;
    const draggingKey = useState<TableRowKey | null>(null);

    let originIndex: number;
    let originData: any[];
    let draggingIndex: number;

    function onRowDragStart(e: MouseEvent, tableRow: TableRow) {
        draggingIndex = originIndex = tableRow.get('index');

        const key = tableRow.get('key');
        draggingKey.set(key);

        originData = data.value!;

        instance.trigger('dragstart', {
            key,
            from: draggingIndex,
        });
    }

    function onRowDragOver(e: MouseEvent, tableRow: TableRow) {
        e.preventDefault();
        e.stopPropagation();

        const newIndex = tableRow.get('index');
        if (newIndex === draggingIndex) return;

        // swap data
        const newData = swap(data.value!, draggingIndex, newIndex);

        draggingIndex = newIndex;

        data.set(newData);
    }
    
    function onRowDragEnd(e: MouseEvent, tableRow: TableRow) {
        e.preventDefault();
        // revert to origin data, then set to new data to trigger animation
        const newData = data.value;
        data.set(originData);

        nextTick(() => {
            data.set(newData);
            draggingKey.set(null);
            instance.trigger('dragend', {
                key: tableRow.get('key'),
                from: originIndex,
                to: draggingIndex,
            });
        });
    }

    return {onRowDragStart, onRowDragOver, onRowDragEnd, draggingKey};
}
