import {useInstance, Key} from 'intact';
import {Transfer} from './index';
import type {useFilter, Model} from './useFilter';

export function useCheck(filter: ReturnType<typeof useFilter>) {
    const instance = useInstance() as Transfer;
    const {getEnabledData, getShowedData} = filter;

    let startIndex: number | undefined = undefined;
    let endIndex: number | undefined = undefined;
    let checked: boolean = false;

    function selectAll(model: Model) {
        const keyName = instance.get('keyName')!;
        instance.set(`${model}CheckedKeys`, getEnabledData(model).map(item => item[keyName]));
    }

    function isCheckAll(model: Model) {
        const checked = instance.get(`${model}CheckedKeys`);
        const data = getEnabledData(model);

        return data.length && checked!.length >= data.length;
    }

    function toggleCheckAll(model: Model, e: MouseEvent) {
        if ((e.target as any).checked) {
            selectAll(model);
        }  else {
            instance.set(`${model}CheckedKeys`, []);
        }
    }

    function onCheckboxChange(model: Model, index: number, e: MouseEvent) {
        if (startIndex === undefined || !e.shiftKey) {
            startIndex = index;
            endIndex = undefined;
            checked = (e.target as any).checked;
        } else if (e.shiftKey) {
            e.preventDefault();

            const values = getShowedData(model)!;
            const checkedKeys = instance.get(`${model}CheckedKeys`).slice(0);
            const lastEndIndex = endIndex;
            const keyName = instance.get('keyName')!;
            endIndex = index;
            const update = (data: any[], isCheck: boolean) => {
                data.forEach(item => {
                    if (!item.disabled) {
                        const key = item[keyName];
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

            instance.set(`${model}CheckedKeys`, checkedKeys);
        }
    }

    return {
        isCheckAll,
        toggleCheckAll,
        onCheckboxChange
    };
}
