import {useInstance, Key, onBeforeUnmount} from 'intact';
import type {Menu, MenuItem} from './';
import {inArray, addOrRemove} from '../table/useChecked';
import {isDropdown} from './useDropdown';

export function useExpanded(rootMenu: Menu, parentMenu: Menu & {subExpandedKeys?: Set<Key>}) {
    const instance = useInstance() as MenuItem;

    onBeforeUnmount(removeSubExpandedKey);

    function isExpanded(): boolean {
        const isExpanded = !isDropdown(rootMenu) &&
            inArray(rootMenu.get('expandedKeys'), instance.get('key'));

        if (isExpanded) {
            addSubExpandedKey();
        } else {
            removeSubExpandedKey();
        }

        return isExpanded;
    }

    function expand() {
        expandOrShrink(true);
    }

    function shrink() {
        expandOrShrink(false);
    }

    function toggle() {
        if (isExpanded()) {
            shrink();
        } else if (!rootMenu.get('accordion')) {
            expand();
        } else {
            // accordion
            const subExpandedKeys = parentMenu.subExpandedKeys;
            if (subExpandedKeys) {
                subExpandedKeys.forEach(key => {
                    addOrRemove(rootMenu.get('expandedKeys')!, key, false);
                });
            }
            expand();
        }
    }

    function expandOrShrink(isExpand: boolean) {
        const expandedKeys = rootMenu.get('expandedKeys')!.slice();
        addOrRemove(expandedKeys, instance.get('key'), isExpand);
        rootMenu.set({expandedKeys});
    }

    function addSubExpandedKey() {
        const key = instance.get('key');
        const subExpandedKeys = parentMenu.subExpandedKeys ||
            (parentMenu.subExpandedKeys = new Set());
        subExpandedKeys.add(key);
    }

    function removeSubExpandedKey() {
        const key = instance.get('key');
        const subExpandedKeys = parentMenu.subExpandedKeys ||
            (parentMenu.subExpandedKeys = new Set());
        subExpandedKeys.delete(key);
    }

    return {isExpanded, expand, shrink, toggle};
}

