import {useInstance} from 'intact';
import type {Cascader} from './';
import {useState} from '../../hooks/useState';
import {isNullOrUndefined} from 'intact-shared';

// treat as string
type Value = string[];
type Values = Value[];

export function useValue() {
    const instance = useInstance() as Cascader;
    // Normalize the value to multipe values, no matter it's multipe or not
    const values = useState<Values>([]);
    const tmpValue = useState<Value>([]);

    instance.on('$receive:value', (value: Value | Values) => {
        const {multiple} = instance.get();
        if (isNullOrUndefined(value)) values.set([]);
        if (multiple) {
            values.set(value as Values);
        } else {
            values.set([value as Value]);
        }
    });

    function isSelected(value: string, level: number): boolean {
        return tmpValue.value[level] === value;
    }

    function isActive(value: string, level: number): boolean {
        return values.value.findIndex(_value => {
            return _value[level] === value;
        }) > -1;
    }

    function onClickItem(value: string, level: number) {
        const _value = tmpValue.value.slice(0, level);
        _value.push(value);
        tmpValue.set(_value);
    }

    return {values, isActive, isSelected};
}
