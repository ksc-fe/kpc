import {useInstance} from 'intact';
import type {Table, TableRowKey} from './table';
import {inArray} from './useChecked';
import {toggleArray} from '../utils';

export function useSelected() {
    const instance = useInstance() as Table<any, TableRowKey>;

    function isSelected(key: TableRowKey) {
        return inArray(instance.get('selectedKeys'), key);
    }

    instance.on('clickRow', (data: any, index: number, key: TableRowKey) => {
        const {rowSelectable, selectedKeys} = instance.get();
        if (rowSelectable === 'multiple') {
            instance.set('selectedKeys', toggleArray(selectedKeys, key));
        } else if (rowSelectable) {
            if (!selectedKeys || selectedKeys[0] !== key) {
                instance.set('selectedKeys', [key]);
            } else {
                instance.set('selectedKeys', []);
            }
        }
    });

    return {isSelected};
}
