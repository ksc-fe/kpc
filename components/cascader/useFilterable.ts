import {useInstance} from 'intact';
import type {Cascader, CascaderData} from './';
import {State} from '../../hooks/useState';
import type {Value} from './useValue'

export function useFilterable(
    keywords: State<string>,
    setValue: (value: Value) => void, 
) {
    const instance = useInstance() as Cascader;

    function filter() {
        const {data, filter} = instance.get();
        const ret: CascaderData[][] = [];

        const loop = (data: CascaderData[], prefix: CascaderData[] = [], valid = false, disabled = false) => {
            data.forEach(item => {
                const _valid = valid || filter!(keywords.value, item);
                const _disabled = disabled || item.disabled;
                const _prefix = prefix.slice(0);
                _prefix.push(item);
                if (item.children) {
                    loop(item.children, _prefix, _valid, _disabled);
                } else if (_valid) {
                    (_prefix as any).disabled = _disabled;
                    ret.push(_prefix);
                }
            });
        };
        loop(data!);

        return ret;
    }

    function selectByFilter(data: CascaderData[]) {
        const value = data.map(item => item.value);
        setValue(value);
    }

    return {filter, selectByFilter, keywords};
}
