import {useInstance, nextTick} from 'intact';
import type {Table, TableRowKey} from './table';
import {useState} from '../../hooks/useState';
import type {TableRow} from './row';

export function useDraggable() {
    const instance = useInstance() as Table<any, any, TableRowKey>;
    const draggingKey = useState<TableRowKey | null>(null);

    let originIndex: number;
    let originData: any[];
    let draggingIndex: number;

    function onRowDragStart(e: MouseEvent, tableRow: TableRow) {
        draggingIndex = originIndex = tableRow.get('index');

        const key = tableRow.get('key');
        draggingKey.set(key);

        originData = instance.get('data')!;

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
        const data = instance.get('data')!.slice();
        const item = data.splice(draggingIndex, 1)[0];
        data.splice(newIndex, 0, item);

        draggingIndex = newIndex;

        instance.set('data', data);
    }
    
    function onRowDragEnd(e: MouseEvent, tableRow: TableRow) {
        e.preventDefault();
        instance.set('data', originData);

        nextTick(() => {
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
