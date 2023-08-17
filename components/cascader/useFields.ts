import {useInstance} from 'intact';
import type {Cascader, CascaderData, BaseCascaderData, CascaderFields} from './';

export function useFields() {
    const instance = useInstance() as Cascader;

    return function getField<
        Data extends BaseCascaderData = CascaderData<unknown>,
        Key extends keyof Data = keyof Data
    >(data: Data, key: Key): Data[Key] {
        const {fields} = instance.get();

        if (fields) {
            const field = fields[key as keyof CascaderFields<Data>] as Key;
            if (field) {
                return data[field];
            }
        }

        return data[key];
    }
}
