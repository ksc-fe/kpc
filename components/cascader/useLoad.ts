import {useInstance} from 'intact';
import type {Cascader, CascaderData} from './';

export function useLoad() {
    const instance = useInstance() as Cascader;

    async function loadData(item: CascaderData) {
        const {loadData} = instance.get();
        if (!loadData) return;

        if (item.children && !item.children.length && !item.loaded) {
            await loadData(item);
            item.loaded = true;
            instance.forceUpdate();
        } 
    }

    return loadData;
}

