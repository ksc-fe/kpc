import {useInstance} from 'intact';
import type {Table, TableRowKey, TableCheckType} from './table';
import type {useTree} from './useTree';

export function useDisableRow(
    loopData: ReturnType<typeof useTree>['loopData'],
) {
    const instance = useInstance() as Table<any, TableRowKey>;
    let enabledKeys: TableRowKey[] = [];
    let disabledKeys: TableRowKey[] = [];
    let allKeys: TableRowKey[] = [];

    function setDisabledKeys() {
        const {rowKey} = instance.get(); 

        enabledKeys = [];
        disabledKeys = [];
        allKeys = [];

        loopData((item, index) => {
            const key = rowKey!(item, index);
            if (isDisabled(item, index, key)) {
                disabledKeys.push(key);
            } else {
                enabledKeys.push(key);
            }
            allKeys.push(key);
        });
    }

    function isDisabled(data: any, index: number, key: TableRowKey) {
        const {disableRow} = instance.get(); 
        if (disableRow && disableRow(data, index, key)) return true;
        return false;
    }

    function isDisabledKey(key: TableRowKey) {
        return disabledKeys.indexOf(key) > -1;
    }

    function getEnableKeys() {
        return enabledKeys;
    }

    function getAllKeys() {
        return allKeys;
    }

    instance.on('$receive:children', setDisabledKeys);
    // for draggable
    instance.on('$change:data', setDisabledKeys);

    return {isDisabled, getEnableKeys, isDisabledKey, getAllKeys};
}
