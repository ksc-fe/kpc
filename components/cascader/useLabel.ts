import {useInstance} from 'intact';
import type {Cascader, CascaderData} from './';
import {useState, watchState} from '../../hooks/useState';
import {isNullOrUndefined} from 'intact-shared';
import {useBaseLabel} from '../select/useBaseLabel';

// treat value as string
type CascaderStringData = CascaderData<string>

export function useLabel() {
    const instance = useInstance() as Cascader;

    function findLabel(data: CascaderStringData[], value: string[]) {
        const {format} = instance.get();
        const labels: string[] = [];
        const length = value.length;
        const loop = (data: CascaderStringData[], level: number) => {
            if (level === length) return;

            for (let i = 0; i < data.length; i++) {
                const item = data[i];
                if (item.value === value[level]) {
                    labels.push(item.label); 

                    const children = item.children;
                    if (children) {
                        loop(children, level + 1);
                    }
                }
            }
        };

        loop(data, 0);

        return labels.length ? format!(labels) : null;
    }

    return useBaseLabel(
        () => instance.get('data')!,
        findLabel
    )
}
