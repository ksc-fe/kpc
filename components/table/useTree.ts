import {useInstance} from 'intact';
import type {Table, TableRowKey} from './table';
import {inArray} from './useChecked';
import {toggleArray} from '../utils';

export function useTree() {
    const instance = useInstance() as Table;

    function isSpreaded(key: TableRowKey) {
        return inArray(instance.get('spreadKeys'), key);
    }

    function toggleSpreadRow(key: TableRowKey) {
        instance.set('spreadKeys', toggleArray(instance.get('spreadKeys'), key));
    }

    function loopData<T>(
        cb: (value: any, index: number, level: number, meta: T | null) => T,
        shouldBreak: boolean = false,
    ) {
        const {childrenKey, data} = instance.get();
        if (!data) return;

        let index = -1;
        const loop = (data: any[], level: number, meta: T | null): boolean => {
            for (let i = 0; i < data.length; i++) {
                index++;

                const value = data[i];
                const ret = cb(value, index, level, meta); 
                if (shouldBreak && ret) return true;

                if (childrenKey) {
                    const children = value[childrenKey];
                    if (Array.isArray(children)) {
                        if (loop(children, level + 1, ret)) {
                            return true;
                        }
                    }
                }
            }

            return false;
        }

        loop(data, 0, null);
    }

    return {isSpreaded, toggleSpreadRow, loopData};
}
