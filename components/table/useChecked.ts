import {createRef, useInstance, onMounted, onBeforeUnmount} from 'intact';
import {useState} from '../../hooks/useState';
import type {Table, TableRowKey} from './';
import {toggleArray} from '../utils';
import {useReceive} from '../../hooks/useReceive';
import type {TableGrid} from './useMerge';

type RowStatus = {
    checked: boolean
    indeterminate: boolean
    disabled: boolean
    allDisabled: boolean
}

export function useChecked(
    getEnableKeys: () => TableRowKey[],
    getAllKeys: () => TableRowKey[],
    isDisabledKey: (key: TableRowKey) => boolean,
    getGrid: () => TableGrid
) {
    const instance = useInstance() as Table;
    let allStatus: RowStatus[] = [];

    function isChecked(key: TableRowKey) {
        const {checkedKeys} = instance.get(); 

        if (!checkedKeys) return false;
        return !!~checkedKeys.indexOf(key);
    }

    function toggleChecked(key: TableRowKey, rowIndex: number) {
        if (instance.get('checkType') === 'checkbox') {
            instance.set('checkedKeys', toggleArray(instance.get('checkedKeys'), key));
        } else {
            if (isChecked(key)) return;
            const grid = getGrid();
            const gridRow = grid[rowIndex];
            if (gridRow) {
                // find the row index that has grouped radio
                while (!grid[rowIndex][0].render) {
                    rowIndex--;
                }
            }
            onChangeChecked(rowIndex, true);
        }
    }

    function isAllChecked() {
        const {checkedKeys} = instance.get();
        const enabledKeys = getEnableKeys();

        return enabledKeys.length &&
            checkedKeys &&
            enabledKeys.every(key => checkedKeys.includes(key));
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
        const enabledKeys = getEnableKeys();
        if (!checkedKeys) {
            if (isChecked) {
                return enabledKeys.slice();
            } else {
                return [];
            }
        }

        const results = checkedKeys.slice();
        enabledKeys.forEach(key => {
            addOrRemove(results, key, isChecked);
        });
        return results;
    }

    function updateAllCheckedStatus() {
        allStatus = [];

        const {data, rowKey, checkType, merge} = instance.get();

        if (!data || !data.length) return;

        const allKeys = getAllKeys();
        allKeys.forEach((key) => {
            const disabled = isDisabledKey(key);
            allStatus.push({
                checked: isChecked(key),
                indeterminate: false,
                disabled, 
                allDisabled: disabled, 
            });
        });

        const grid = getGrid();
        if (merge && checkType !== 'none') {
            data.forEach((data, rowIndex) => {
                const {spans, render} = grid[rowIndex][0];
                let rowspan;
                if (render && spans && (rowspan = spans.rowspan!) > 1) {
                    let enabledCheckedCount = 0;
                    let disabledCheckedCount = 0;
                    let disabledCount = 0;
                    for (let i = rowIndex; i < rowspan + rowIndex; i++) {
                        const status = allStatus[i];
                        if (isDisabledKey(allKeys[i])) {
                            disabledCount++;
                            if (status.checked) {
                                disabledCheckedCount++;
                            }
                        } else if (status.checked) {
                            enabledCheckedCount++;
                        }
                    }

                    const status = allStatus[rowIndex];
                    if (disabledCount === rowspan) {
                        // all rows are disabled
                        status.allDisabled = true;
                        if (disabledCheckedCount === rowspan) {
                            status.checked = true;
                        } else if (disabledCheckedCount > 0) {
                            status.indeterminate = true;
                        }
                    } else {
                        status.allDisabled = false;
                        if (enabledCheckedCount + disabledCount === rowspan) {
                            status.checked = true;
                        } else if (enabledCheckedCount > 0) {
                            status.indeterminate = true;
                        }
                    }
                }
            });
            // console.log(allStatus);
        }
    }

    function onChangeChecked(rowIndex: number, v: boolean) {
        // should check or uncheck all grouped rows
        const checkType = instance.get('checkType');
        const checkedKeys = (instance.get('checkedKeys') || []).slice();

        // if is radio check, remove all enabled keys
        if (checkType === 'radio') {
            for (let i = 0; i < checkedKeys.length; i++) {
                const key = checkedKeys[i];
                if (isDisabledKey(key)) continue;
                checkedKeys.splice(i, 1);
                i--;
            }
        }

        const grid = getGrid();
        const allKeys = getAllKeys();
        let rowspan;
        if (
            (rowspan = grid[rowIndex]) &&
            (rowspan = rowspan[0]) &&
            (rowspan = rowspan.spans) &&
            (rowspan = rowspan.rowspan!) &&
            rowspan > 1
        ) {
            for (let i = rowIndex; i < rowspan + rowIndex; i++) {
                const status = allStatus[i];
                const key = allKeys[i];
                if (!status.disabled) {
                    addOrRemove(checkedKeys, key, v);
                }
            } 
        } else {
            addOrRemove(checkedKeys, allKeys[rowIndex], v);
        }

        instance.set('checkedKeys', checkedKeys);
    }

    function addOrRemove(keys: TableRowKey[], key: TableRowKey, isAdd: boolean) {
        const index = keys.indexOf(key);
        if (isAdd) {
            if (index === -1) {
                keys.push(key);
            }
        } else if (index > -1) {
            keys.splice(index, 1);
        }
    }

    function getAllStatus() {
        return allStatus;
    }

    instance.on('$receive:children', updateAllCheckedStatus);
    instance.on('$change:checkedKeys', updateAllCheckedStatus);

    instance.on('click:row', (data: any, index: number, key: TableRowKey) => {
        if (instance.get('rowCheckable')) {
            toggleChecked(key, index);
        }
    });

    return {isChecked, isAllChecked, toggleCheckedAll, getAllStatus, onChangeChecked};
}
