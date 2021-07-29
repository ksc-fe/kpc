import {useInstance, onBeforeUnmount, onUpdated} from 'intact';
import type {Table, TableRowKey} from './table';
import {addOrRemove} from './useChecked';

export function useRestRowStatus() {
    const instance = useInstance() as Table;
    let allUnmountedRows: TableRowKey[] = [];
    let willUnmounted = false;

    function onRowBeforeUnmount(key: TableRowKey) {
        if (willUnmounted || instance.get('keepStatus')) return;
        allUnmountedRows.push(key);
    }

    function reset() {
        if (allUnmountedRows.length) {
            omit('checkedKeys', allUnmountedRows);
            omit('selectedKeys', allUnmountedRows);
            omit('spreadKeys', allUnmountedRows);
            omit('expandedKeys', allUnmountedRows);
            allUnmountedRows = [];
        }
    }

    function omit(type: 'checkedKeys' | 'selectedKeys' | 'spreadKeys' | 'expandedKeys', keys: TableRowKey[]) {
        let originKeys = instance.get(type);
        if (!originKeys) return;

        originKeys = originKeys.slice();
        keys.forEach(key => addOrRemove(originKeys!, key, false));
        instance.set(type, originKeys);
    }

    onBeforeUnmount(() => willUnmounted = true);
    onUpdated(reset);

    return {onRowBeforeUnmount};
}
