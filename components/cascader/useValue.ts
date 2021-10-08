import {useInstance} from 'intact';
import type {Cascader} from './';
import {useState, watchState} from '../../hooks/useState';
import {isNullOrUndefined} from 'intact-shared';
import {isEqualArray, last} from '../utils';

// treat as string
type Value = string[];
type Values = Value[];

export function useValue() {
    const instance = useInstance() as Cascader;
    // Normalize the value to multipe values, no matter it's multipe or not
    const values = useState<Values>([]);
    const showedValue = useState<Value>([]);

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

    instance.watch('_show', value => {
        if (value) {
            showedValue.set(last(values.value) || []);
        }
    });

    function isShowed(value: string, level: number): boolean {
        return showedValue.value[level] === value;
    }

    function isSelected(value: string, level: number): boolean {
        return values.value.findIndex(_value => {
            return _value[level] === value;
        }) > -1;
    }

    function onSubDropdownShow(value: string, level: number) {
        const _value = showedValue.value.slice(0, level);
        _value[level] = value;
        showedValue.set(_value);

        if (instance.get('changeOnSelect')) {
            onSelect(value, level);
        }
    }

    function onSubDropdownHide(value: string, level: number) {
        if (showedValue.value[level] !== value) return;
        const _value = showedValue.value.slice(0, level);
        showedValue.set(_value);
    }

    function toggleShowedValue(value: string, level: number, showed: boolean) {
        if (showed) {
            onSubDropdownShow(value, level);
        } else {
            onSubDropdownHide(value, level);
        }
    }

    function onSelect(value: string, level: number) {
        // maybe the showedValue has the leaf value when we set it on show menu,
        // if we select by clicking, the showedValue has not the leaf value,
        // no matter which case, we set the last value by level
        const newValue = showedValue.value.slice(0);
        newValue[level] = value;
        setValue(newValue);
    }

    function setValue(newValue: Value) {
        if (instance.get('multiple')) {
            const oldValue = values.value;
            // ignore the same value
            if (oldValue.find(value => isEqualArray(value, newValue))) return;
            values.set([...oldValue, newValue]);
        } else {
            values.set([newValue]);
        }
    }

    return {values, isShowed, isSelected, onSelect, toggleShowedValue, setValue};
}
