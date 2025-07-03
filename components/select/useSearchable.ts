import {useInstance, Children} from 'intact';
import type {SelectMenu} from './menu';
import {useState} from '../../hooks/useState';
import {isNullOrUndefined} from 'intact-shared';
import {createContext} from '../context';
import {eachChildren, isComponentVNode} from '../utils';
import {Option, OptionProps} from './option';
import {OptionGroup, OptionGroupProps} from './group';

export const context = createContext();

export function useSearchable() {
    const menu = useInstance() as SelectMenu;
    const select = menu.select!;
    const checkedKeys = useState<any[]>([]);

    function selectAll() {
        checkedKeys.set(addKeys(checkedKeys.value, menu.get('values')));
    }

    function unselectAll() {
        checkedKeys.set(removeKeys(checkedKeys.value, menu.get('values')));
    }

    function toggleSelect() {
        const checked: any[] = [];
        const unchecked: any[] = [];
        menu.get('values').forEach(item => {
            if (checkedKeys.value.indexOf(item) > -1) {
                checked.push(item);
            } else {
                unchecked.push(item);
            }
        });

        checkedKeys.set(removeKeys(addKeys(checkedKeys.value, unchecked), checked));
    }

    function confirm() {
        select.set('value', checkedKeys.value);
        select.hide();
    }

    function initCheckedKeys() {
        const value = select.get('value');
        checkedKeys.set(isNullOrUndefined(value) ? [] : value); 
    }

    select.watch('value', initCheckedKeys);
    select.on('hide', initCheckedKeys);
    initCheckedKeys();
    return {checkedKeys, selectAll, unselectAll, toggleSelect, confirm};
}

function addKeys(origin: any[] | null | undefined, keys: any[]) {
    return Array.from(new Set([...keys, ...(origin || [])]));
}

function removeKeys(origin: any[] | null | undefined, keys: any[]) {
    return (origin || []).filter(item => keys.indexOf(item) < 0);
}
