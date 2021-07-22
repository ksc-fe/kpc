import {useInstance, createRef, onMounted, onUpdated, onUnmounted} from 'intact';
import type {Menu, MenuItem} from '.';

export function useHighlight(rootMenu: Menu, parentMenuItem: MenuItem | null) {
    const instance = useInstance() as MenuItem;

    rootMenu.watch('selectedKey', updateStatus, {inited: true, presented: true});

    function updateStatus(v: string | undefined) {
        const {key} = instance.get();
        if (v !== key) return;

        const items = [];
        let parentItem = parentMenuItem;
        while (parentItem) {
            items.push(parentItem);
            parentItem = parentItem.parentMenuItem;
        }
        
        const expandedKeys = new Set(rootMenu.get('expandedKeys'));
        const _highlightedKeys = items.map(item => {
            const key = item.get('key');
            expandedKeys.add(key!);
            return key;
        });
        rootMenu.highlightedKeys.set(_highlightedKeys as string[]);
        rootMenu.set('expandedKeys', Array.from(expandedKeys))
    }

    function isHighlighted(key: string) {
        return rootMenu.highlightedKeys.value.indexOf(key) > -1;
    }

    return {isHighlighted, updateStatus};
}