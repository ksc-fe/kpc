import {useInstance} from 'intact';
import type {Cascader, CascaderData} from './';
import {useState, watchState} from '../../hooks/useState';
import {isNullOrUndefined} from 'intact-shared';
import {useBaseLabel} from '../select/useBaseLabel';

// treat value as string
type CascaderStringData = Omit<CascaderData, 'value'> & {
    value: string
}

export function useLabel() {
    const instance = useInstance() as Cascader;

    function findLabel(data: CascaderStringData[], value: string[]) {
        const {format} = instance.get();
        const labels: string[] = [];
        const length = value.length;
        const loop = (data: CascaderStringData[]) => {
            for (let i = 0; i < data.length; i++) {
                const item = data[i];
                if (value.includes(item.value)) {
                    labels.push(item.label); 
                    if (labels.length === length) {
                        return;
                    }
                }
                const children = item.children;
                if (children) {
                    loop(children);
                }
            }
        };

        loop(data);

        return labels.length ? format!(labels) : null;
    }

    return useBaseLabel(
        () => instance.get('data')!,
        findLabel
    )
}
