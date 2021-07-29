import {useInstance} from 'intact';
import type {TableColumn} from './column';
import {isNullOrUndefined} from 'intact-shared';
import {toggleArray} from  '../utils';
import {createContext} from '../context';

type ContextValue = {
    groupValue: any
    onChange: (key: string, groupValue: any) => void;
}

export const context = createContext<ContextValue>();

export function useGroup() {
    const instance = useInstance() as TableColumn;

    function onSelect(value: any, groupValue: any, onChange: ContextValue['onChange']) {
        const {multiple, key} = instance.get();

        if (multiple) {
            value = toggleArray(groupValue, value);
        }
        onChange(key, value);
    }

    function isChecked(value: any, groupValue: any) {
        const {multiple} = instance.get();
        if (multiple) {
            return groupValue && groupValue.includes(value);
        }
        return groupValue === value;
    }

    function getGroupText(groupValue: any) {
        let {multiple, group} = instance.get();

        if (isNullOrUndefined(groupValue)) return null;
        if (!multiple) {
            groupValue = [groupValue];
        }

        if (group) {
            const ret = group.filter(item => groupValue.includes(item.value))
                .map(item => item.label)
                .join(', ');
            if (ret) {
                return `(${ret})`;
            }
        }

        return null;
    }

    return {onSelect, isChecked, getGroupText};
}