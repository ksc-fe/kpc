import {useInstance} from 'intact';
import type {Cascader} from './';
import {useState, watchState} from '../../hooks/useState';
import {isNullOrUndefined} from 'intact-shared';
import {isEqualArray} from '../utils';

// treat as string
type Value = string[];
type Values = Value[];

export function useValue() {
    const instance = useInstance() as Cascader;
    // Normalize the value to multipe values, no matter it's multipe or not
    const values = useState<Values>([]);
    const tmpValue = useState<Value>([]);

    instance.watch('value', (value: Value | Values | undefined, oldValue: Value | Values | undefined) => {
        const {multiple} = instance.get();

        if (isNullOrUndefined(value)) return values.set([]);

        if (multiple) {
            values.set(value as Values);
        } else {
            values.set([value as Value]);
        }
    });

    watchState(values, (values, oldValue) => {
        if (isEqualArray(values, oldValue)) return;

        if (!instance.get('multiple')) {
            instance.set({value: values[0]});
        } else {
            instance.set({value: values});
        }
    });

    function isActive(value: string, level: number): boolean {
        return tmpValue.value[level] === value;
    }

    function isSelected(value: string, level: number): boolean {
        return values.value.findIndex(_value => {
            return _value[level] === value;
        }) > -1;
    }

    function onClickItem(value: string, level: number, isLeaf: boolean) {
        const _value = tmpValue.value.slice(0, level + 1);
        if (!isLeaf && _value[level] === value) {
            _value.splice(level, 1);
        } else {
            _value[level] = value;
        }
        tmpValue.set(_value);

        if (instance.get('changeOnSelect')) {
            onSelect();
        }
    }

    function onSelect() {
        if (instance.get('multiple')) {
            values.set([...values.value, tmpValue.value]);
        } else {
            values.set([tmpValue.value]);
        }
    }

    return {values, isActive, isSelected, onClickItem, onSelect};
}
