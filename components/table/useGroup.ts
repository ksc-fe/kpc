import {useInstance, createRef} from 'intact';
import type {TableColumn, TableColumnGroupItem} from './column';
import {isArray} from 'intact-shared';
import {toggleArray} from  '../utils';
import {createContext} from '../context';
import {useState, watchState} from '../../hooks/useState';
import type { Dropdown } from '../dropdown';

type ContextValue = {
    groupValue: any
    onChange: (key: string, groupValue: any) => void;
}

export const context = createContext<ContextValue>();

export function useGroup() {
    const instance = useInstance() as TableColumn;
    const keywords = useState<string>('');
    const filteredGroup = useState<TableColumnGroupItem[] | undefined>(instance.get('group'));
    const localGroupValue = useState<any>(null); 
    const dropdownRef = createRef<Dropdown>();

    instance.on('$receive:group', (group) => filteredGroup.set(group));

    function onShow(groupValue: any) {
        keywords.set('');
        localGroupValue.set(groupValue);
    }

    function onSelect(value: any, onChange: ContextValue['onChange']) {
        const {multiple, key} = instance.get();

        if (multiple) {
            // should click confirm button when it is multiple selection
            localGroupValue.set(toggleArray(localGroupValue.value, value));
        } else {
            // change immediately when it is single selection
            onChange(key, value);
        }
    }

    function isChecked(value: any) {
        const {multiple} = instance.get();
        const groupValue = localGroupValue.value;
        if (multiple) {
            return groupValue && groupValue.includes(value);
        }
        return groupValue === value;
    }

    function confirm(onChange: ContextValue['onChange']) {
        const {key} = instance.get();
        onChange(key, localGroupValue.value);
        dropdownRef.value!.hide(true);
    }

    function reset(onChange: ContextValue['onChange']) {
        localGroupValue.set([]);
        confirm(onChange);
    }

    function isEmptyValue(groupValue: any) {
        const {multiple} = instance.get();
        return !groupValue || multiple && (!isArray(groupValue) || groupValue.every(value => !value));
    }

    watchState(keywords, (v) => {
        const {group = []} = instance.get();
        v = v.trim();
        
        if (!v) {
            filteredGroup.set(group);
        } else {
            filteredGroup.set(group.filter(item => {
                return String(item.label).includes(v) || String(item.value).includes(v);
            }));
        }
    });

    return {
        onSelect,
        isChecked,
        keywords,
        filteredGroup,
        onShow,
        reset,
        confirm,
        dropdownRef,
        localGroupValue,
        isEmptyValue,
    };
}
