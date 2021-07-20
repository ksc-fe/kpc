import {createRef, useInstance, onMounted, onBeforeUnmount} from 'intact';
import {useState} from '../../hooks/useState';
import type {Table, TableRowKey} from './';
import {toggleArray} from '../utils';
import {useReceive} from '../../hooks/useReceive';

export function useChecked() {
    const instance = useInstance() as Table;
    let enabledKeys: TableRowKey[] = [];
    let disabledKeys: TableRowKey[] = [];

    function isChecked(key: string | number) {
        const {checkedKeys} = instance.get(); 

        if (!checkedKeys) return false;
        return !!~checkedKeys.indexOf(key);
    }

    function toggleChecked(key: string | number) {
        instance.set('checkedKeys', instance.get('checkType') === 'checkbox' ?
            toggleArray(instance.get('checkedKeys'), key) :
            [key]
        );
    }

    function isAllChecked() {
        const {checkedKeys} = instance.get();

        return enabledKeys.length &&
            checkedKeys &&
            enabledKeys.every(key => checkedKeys.includes(key));
    }

    function setDisabledKeys() {
        const {disableRow, rowKey, data} = instance.get(); 

        enabledKeys = [];
        disabledKeys = [];
        if (data) {
            data.forEach((item, index) => {
                const key = rowKey!(item, index);
                if (disableRow && disableRow(item, index)) {
                    disabledKeys.push(key);
                } else {
                    enabledKeys.push(key);
                }
            });
        }
    }

    function toggleCheckedAll(v: boolean) {
        instance.set('checkedKeys', getCheckedAllOrUncheckedAllKeys(v));
    }

    /**
     * keep the original keys which don't exist in the enableKeys,
     * and add or remove the enableKeys
     */
    function getCheckedAllOrUncheckedAllKeys(isChecked: boolean) {
        const checkedKeys = instance.get('checkedKeys');
        if (!checkedKeys) {
            if (isChecked) {
                return enabledKeys.slice();
            } else {
                return [];
            }
        }

        const results = checkedKeys.slice();
        enabledKeys.forEach(key => {
            const index = results.indexOf(key);
            if (isChecked) {
                if (index < 0) {
                    results.push(key);
                }
            } else {
                if (index > -1) {
                    results.splice(index, 1);
                }
            }
        });
        return results;
    }

    useReceive<Table>(['data', 'disableRow'], setDisabledKeys);

    instance.on('click:row', (data: any, key: string | number) => {
        if (instance.get('rowCheckable')) {
            toggleChecked(key);
        }
    });

    return {isChecked, isAllChecked, toggleCheckedAll};
}
