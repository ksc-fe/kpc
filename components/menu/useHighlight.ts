import {useInstance, Key} from 'intact';
import type {Menu, MenuItem} from './';
import {useRecordParent} from '../../hooks/useRecordComponent';
import {inArray} from '../table/useChecked';
import {useState} from '../../hooks/useState';

export const MENU_RECORD_KEY = 'MenuKeys';

export function useHighlight() {
    const instance = useInstance() as Menu;
    const menuItems = useRecordParent<MenuItem>(MENU_RECORD_KEY);
    const highlightedKeys = useState<Key[]>([]);

    instance.watch('selectedKey', updateStatus, {presented: true});

    function updateStatus(newValue: Key | undefined) {
        for (let i = 0; i < menuItems.length; i++) {
            const menuItem = menuItems[i];
            const key = menuItem.get('key');

            if (newValue !== key) continue;

            const items = [];
            let parentItem = menuItem.parentMenuItem;
            while (parentItem) {
                items.push(parentItem);
                parentItem = parentItem.parentMenuItem;
            }
            
            const expandedKeys = new Set(instance.get('expandedKeys'));
            highlightedKeys.set(items.map(item => {
                const key = item.get('key');
                expandedKeys.add(key);
                return key;
            }));
            instance.set('expandedKeys', Array.from(expandedKeys))

            return;
        }

        highlightedKeys.set([]);
    }

    function isHighlighted(key: Key) {
        return inArray(highlightedKeys.value, key);
    }

    function select(key: Key) {
        instance.set('selectedKey', key);
    }

    function isSelected(key: Key) {
        return instance.get('selectedKey') === key;
    }

    return {isHighlighted, select, isSelected};
}
