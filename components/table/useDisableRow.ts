import {useInstance, onBeforeMount, onBeforeUpdate} from 'intact';
import type {Table, TableRowKey} from './table';

export function useDisableRow() {
    const instance = useInstance() as Table;
    let enabledKeys: TableRowKey[] = [];
    let disabledKeys: TableRowKey[] = [];

    function setDisabledKeys() {
        const {rowKey, data} = instance.get(); 

        enabledKeys = [];
        disabledKeys = [];
        if (data) {
            data.forEach((item, index) => {
                const key = rowKey!(item, index);
                if (isDisabled(item, index, key)) {
                    disabledKeys.push(key);
                } else {
                    enabledKeys.push(key);
                }
            });
        }
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

    onBeforeMount(setDisabledKeys);
    onBeforeUpdate(setDisabledKeys);

    return {isDisabled, getEnableKeys, isDisabledKey};
}
