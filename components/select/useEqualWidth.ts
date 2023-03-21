import {useInstance, findDomFromVNode} from 'intact';
import type {BaseSelect} from './base';

export function useEqualWidth() {
    const instance = useInstance() as BaseSelect;

    instance.watch('show', setWidth, {presented: true});

    function setWidth(v: boolean | undefined) {
        if (!v) return;

        const menuElement = findDomFromVNode(instance.dropdownRef.value!.menuVNode!, true) as HTMLElement;
        const entity = findDomFromVNode(instance.$lastInput!, true) as HTMLElement; 
        menuElement.style.minWidth = `${entity.offsetWidth}px`;
    }
}
