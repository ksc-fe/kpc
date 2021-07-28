import {useInstance} from 'intact';
import type {Table, TableRowKey} from './table';
import {inArray} from './useChecked';

export function useExpandable() {
    const instance = useInstance() as Table;

    function isExpanded(key: TableRowKey) {
        return inArray(instance.get('expandedKeys'), key);
    }

    return {isExpanded};
}
