import {useInstance} from 'intact';
import type {ScrollSelect, DataItem} from './index';
import {useState} from '../../hooks/useState';
import {isFunction} from 'intact-shared';

export function useList() {
    const instance = useInstance() as ScrollSelect;
    const value = useState(instance.get('value'));
    const list = useState<DataItem[]>([]);

    function generateList() {
        let {data, count} = instance.get();

        if (isFunction(data)) {
            data = data(value.value);
        }

        let index = data!.findIndex(item => item.value === value.value);
        if (index < 0) {
            index = 0;
            setValue(data![0].value, false);
        }

        const length = data!.length;
        const half = Math.floor(count! / 2);
        const _list = [];
        for (let i = 0; i < count!; i++) {
            _list.push(data![(((index - half + i) % length) + length) % length]);
        }

        list.set(_list); 
    }

    function setValue(v: any, generate: boolean) {
        const oldValue = value.value;
        value.set(v);
        if (oldValue !== v) {
            updateValue(v, generate);
        }
    }

    function updateValue(v: any, generate: boolean) {
        const {disable} = instance.get();
        if (!disable || !disable(v)) {
            instance.set('value', v);
        }
        if (generate) {
            generateList();
        }
    }

    instance.on('$receive:value', v => setValue(v, true));
    ['data', 'count'].forEach(item => {
        instance.on(`$receive:${item}`, generateList);
    });
    instance.on('$receive:disable', () => {
        const oldValue = instance.get('value');
        const _value = value.value;
        if (_value !== oldValue) {
            updateValue(_value, true);
        }
    });

    return {value, data: list, setValue};
}
