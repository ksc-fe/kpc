import {useInstance} from 'intact';
import type {Table, TableRowKey} from './table';
import {inArray} from './useChecked';
import {toggleArray} from '../utils';
import { State } from '../../hooks/useState';

export function useTree(data: State<any[] | undefined>) {
    const instance = useInstance() as Table;

    function isSpreaded(key: TableRowKey) {
        return inArray(instance.get('spreadKeys'), key);
    }

    async function toggleSpreadRow(key: TableRowKey, rowData?: any) {
        const {spreadKeys, load} = instance.get();
        instance.set('spreadKeys', toggleArray(spreadKeys, key));
        if (load && data.value && !rowData.loaded) {
            rowData.loaded = false;
            await load(rowData); 
            rowData.loaded = true;
            instance.forceUpdate();
        }
    }

    function loopData<T>(
        cb: (value: any, index: number, level: number, meta: T | null) => T,
        shouldBreak: boolean = false,
    ) {
        const {childrenKey} = instance.get();
        loopDataWithChildrenKey(data.value, childrenKey, cb, shouldBreak);
    }

    return {isSpreaded, toggleSpreadRow, loopData};
}

export function loopDataWithChildrenKey<T>(
    data: any[] | undefined,
    childrenKey: string | undefined,
    cb: (value: any, index: number, level: number, meta: T | null) => T,
    shouldBreak: boolean,
) {
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
