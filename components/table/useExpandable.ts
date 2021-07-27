import {useInstance} from 'intact';
import type {Table, TableRowKey} from './table';

export function useExpandable() {
    const instance = useInstance() as Table;

    function isExpanded(key: TableRowKey) {
        const expandedKeys = instance.get('expandedKeys');

        if (!expandedKeys) return false; 
        return !!~expandedKeys.indexOf(key);
    }

    return {isExpanded};
}
