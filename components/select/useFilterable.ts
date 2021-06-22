import {useInstance, nextTick, createVNode as h, Children} from 'intact';
import {useState} from '../../hooks/useState';
import type {Select} from './select';
import {Option} from './option';

export function useFilterable() {
    const keywords = useState('');
    const children = useState<Children>(null);
    const component = useInstance() as Select;

    let oldChildren: Children = null;
    component.on('$receive:children', (children) => {
        oldChildren = children;
    });

    function onSearch(e: InputEvent) {
        const value = (e.target as HTMLInputElement).value.trim();

        if (component.get('creatable')) {
            // children.set([h(Option, {value, label: value}), component.get('children')]);
            const vNode = h(Option, {value, label: value});
            component.set<{children: Children}>('children', [vNode, oldChildren]);
        }

        keywords.set(value);

        const dropdown = component.dropdownRef.value!;
        // always show menu on searching
        dropdown.show(true);
        // the position may be flip, and the select input height may change height too,
        // so we should reset the position
        nextTick(() => {
            dropdown.position();
        });
    }

    function resetSearch() {
        keywords.set('');
    }
}
