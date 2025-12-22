import {useInstance, Key} from 'intact';
import type {Transfer, TransferDataItem} from './';
import type {useFilter, Model} from './useFilter';

export type CheckedKeys = `leftCheckedKeys` | `rightCheckedKeys`

export function useCheck({getEnabledData, getShowedData}: ReturnType<typeof useFilter>) {
    const instance = useInstance() as Transfer;

    let startIndex: number | undefined = undefined;
    let endIndex: number | undefined = undefined;
    let checked: boolean = false;

    function selectAll(model: Model) {
        const keyName = instance.get('keyName')!;
        instance.set(
            `${model}CheckedKeys` as CheckedKeys,
            getEnabledData(model).map(item => item[keyName])
        );
    }

    function isCheckAll(model: Model) {
        const checked = instance.get(`${model}CheckedKeys` as CheckedKeys)!;
        const data = getEnabledData(model);

        return data.length && checked.length >= data.length;
    }
    function toggleCheckAll(model: Model, e: MouseEvent) {
        if ((e.target as HTMLInputElement).checked) {
            selectAll(model);
        }  else {
            instance.set(`${model}CheckedKeys` as CheckedKeys, []);
        }
    }

    function isIndeterminate(model: Model) {
        const checked = instance.get(`${model}CheckedKeys` as CheckedKeys)!;
        const data = getEnabledData(model);
      
        return checked.length > 0 && checked.length < data.length;
    }

    function onCheckboxChange(model: Model, index: number, e: MouseEvent) {
        if (startIndex === undefined || !e.shiftKey) {
            startIndex = index;
            endIndex = undefined;
            checked = (e.target as HTMLInputElement).checked;
        } else if (e.shiftKey) {
            e.preventDefault();
            const allData = getShowedData(model)!;
            const values = instance.get('pagination') ? instance.paginationState.getPagedData(model, allData) : allData;
            const checkedKeys = instance.get(`${model}CheckedKeys` as CheckedKeys)!.slice(0);
            const lastEndIndex = endIndex;
            const keyName = instance.get('keyName')!;
            endIndex = index;
            const update = (data: TransferDataItem[], isCheck: boolean) => {
                data.forEach(item => {
                    if (!item.disabled) {
                        const key = item[keyName as 'key'];
                        const index = checkedKeys.indexOf(key);
                        if (isCheck) {
                            if (!~index) {
                                checkedKeys.push(key);
                            }
                        } else {
                            if (~index) {
                                checkedKeys.splice(index, 1);
                            }
                        }
                    }
                });
            };

            if (lastEndIndex !== undefined) {
                // if exists lastEndIndex, we reset the last result
                // and set it again
                update(
                    values.slice(
                        Math.min(index, lastEndIndex),
                        Math.max(index, lastEndIndex) + 1
                    ),
                    !checked
                ); 
            }
            update(
                values.slice(
                    Math.min(index, startIndex),
                    Math.max(index, startIndex) + 1
                ), 
                checked
            );

            instance.set(`${model}CheckedKeys` as CheckedKeys, checkedKeys);
        }
    }

    return {
        isCheckAll,
        toggleCheckAll,
        onCheckboxChange,
        isIndeterminate
    };
}
