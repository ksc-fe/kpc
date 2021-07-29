import {useInstance} from 'intact';
import type {Table, TableRowKey} from './table';
import {inArray} from './useChecked';
import {toggleArray} from '../utils';

export function useExpandable() {
    const instance = useInstance() as Table;

    function isExpanded(key: TableRowKey) {
        return inArray(instance.get('expandedKeys'), key);
    }

    instance.on('click:row', (data: any, index: number, key: TableRowKey) => {
        if (instance.get('rowExpandable')) {
            const {expandedKeys, $blocks} = instance.get();
            if (!$blocks || !$blocks.expand) return;

            instance.set('expandedKeys', toggleArray(expandedKeys, key));
        }
    });

    return {isExpanded};
}
