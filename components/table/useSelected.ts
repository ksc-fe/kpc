import {useInstance} from 'intact';
import type {Table, TableRowKey} from './table';
import {inArray} from './useChecked';
import {toggleArray} from '../utils';

export function useSelected() {
    const instance = useInstance() as Table;

    function isSelected(key: TableRowKey) {
        return inArray(instance.get('selectedKeys'), key);
    }

    instance.on('click:row', (data: any, index: number, key: TableRowKey) => {
        const {rowSelectable, selectedKeys} = instance.get();
        if (rowSelectable === 'multiple') {
            instance.set('selectedKeys', toggleArray(selectedKeys, key));
        } else if (rowSelectable) {
            instance.set('selectedKeys', [key]);
        }
    });

    return {isSelected};
}
