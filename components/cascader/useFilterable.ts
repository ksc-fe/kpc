import {useInstance} from 'intact';
import type {Cascader, CascaderData, BaseCascaderData} from './';
import {State} from '../../hooks/useState';
import type {Value} from './useValue';
import type {useFields} from './useFields';

export function useFilterable(
    keywords: State<string>,
    setValue: (value: Value) => void, 
    getField: ReturnType<typeof useFields>
) {
    const instance = useInstance() as Cascader;

    function filter() {
        const ret: CascaderData<any>[][] = [];

        let {data, filter} = instance.get();
        if (!filter) {
            filter = (keywords: string, data: CascaderData<any>) => {
                return getField(data, 'label').includes(keywords);
            }
        }

        const loop = (
            data: CascaderData<any>[],
            prefix: CascaderData<any>[] = [],
            valid = false,
            disabled = false
        ) => {
            data.forEach(item => {
                const _valid = valid || filter!(keywords.value, item);
                const _disabled = disabled || getField(item, 'disabled');
                const _prefix = prefix.slice(0);
                _prefix.push(item);

                const children = getField(item, 'children');
                if (children) {
                    loop(children, _prefix, _valid, _disabled);
                } else if (_valid) {
                    (_prefix as any).disabled = _disabled;
                    ret.push(_prefix);
                }
            });
        };
        loop(data!);

        return ret;
    }

    function selectByFilter(data: CascaderData<any>[]) {
        const value = data.map(item => getField(item, 'value'));
        setValue(value);
    }

    return {filter, selectByFilter, keywords};
}
