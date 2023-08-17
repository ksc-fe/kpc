import {useInstance} from 'intact';
import type {Cascader, CascaderData} from './';
import type {useFields} from './useFields';

export function useLoad(getField: ReturnType<typeof useFields>) {
    const instance = useInstance() as Cascader;

    async function loadData(item: CascaderData<any>) {
        const {loadData} = instance.get();
        if (!loadData) return;

        const children = getField(item, 'children');
        if (children && !children.length && !item.loaded) {
            await loadData(item);
            item.loaded = true;
            instance.forceUpdate();
        } 
    }

    return loadData;
}

