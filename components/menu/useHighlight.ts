import {useInstance, createRef, onMounted, onUpdated, onUnmounted, Key} from 'intact';
import type {Menu, MenuItem} from './';
import {inArray} from '../table/useChecked';
// import {isEqualArray} from '../utils';

export function useHighlight(
    rootMenu: Menu & {highlightedKeys?: Key[]},
    parentMenuItem: MenuItem | null
) {
    const instance = useInstance() as MenuItem;

    // we can not watch selectedKey on before initializing rootMenu
    // because rootMenu has initialized
    // so call updateStatus here
    updateStatus(rootMenu.get('selectedKey'));
    rootMenu.watch('selectedKey', updateStatus);

    function updateStatus(v: Key | undefined) {
        const {key} = instance.get();
        if (v !== key) return;

        const items = [];
        let parentItem = parentMenuItem;
        while (parentItem) {
            items.push(parentItem);
            parentItem = parentItem.parentMenuItem;
        }
        
        const expandedKeys = new Set(rootMenu.get('expandedKeys'));
        const highlightedKeys = items.map(item => {
            const key = item.get('key');
            expandedKeys.add(key);
            return key;
        });
        rootMenu.highlightedKeys = highlightedKeys;
        rootMenu.set('expandedKeys', Array.from(expandedKeys))
    }

    function isHighlighted() {
        return inArray(rootMenu.highlightedKeys, instance.get('key'));
    }

    function select() {
        rootMenu.set('selectedKey', instance.get('key'));
    }

    function isSelected() {
        return rootMenu.get('selectedKey') === instance.get('key');
    }

    return {isHighlighted, updateStatus, select, isSelected};
}
