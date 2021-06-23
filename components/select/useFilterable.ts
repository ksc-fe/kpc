import {useInstance, nextTick, createVNode as h, Children, VNode, VNodeComponentClass} from 'intact';
import {useState} from '../../hooks/useState';
import type {Select, SelectProps} from './select';
import {Option} from './option';
import {isNullOrUndefined, EMPTY_OBJ, isStringOrNumber} from 'intact-shared';
import {getTextByChildren, mapChildren} from '../utils';

export function useFilterable() {
    const keywords = useState('');
    const children = useState<Children>(null);
    const component = useInstance() as Select;
    const createdVNode = useState<VNode | null>(null);

    let oldChildren: Children = null;
    component.on('$receive:children', (children) => {
        oldChildren = children;
    });

    function onSearch(e: InputEvent) {
        const value = (e.target as HTMLInputElement).value.trim();

        // if (component.get('creatable')) {
            // // children.set([h(Option, {value, label: value}), component.get('children')]);
            // const vNode = h(Option, {value, label: value});
            // component.set<{children: Children}>('children', [vNode, oldChildren]);
        // }

        keywords.set(value);

        const dropdown = component.dropdownRef.value!;
        // always show menu on searching
        // dropdown.show(true);
        // the position may be flip, and the select input height may change height too,
        // so we should reset the position
        nextTick(() => {
            dropdown.position();
        });
    }

    function resetSearch() {
        keywords.set('');
    }

    function getCreatedVNode() {
        const {creatable, filterable, keywords} = component.get();
        if (creatable && filterable && keywords) {
            return h(Option, {value: keywords, label: keywords});
        }
    }

    function filter(children: Children) {
        let {filterable, filter, searchable} = component.get();

        if (!filterable && !searchable) return children;

        const _children: (VNode | string | number)[] = [];
        mapChildren(children, vNode => {
            if ((vNode as VNode).tag === Option) {
                if (filterOption(vNode as VNodeComponentClass<Option>, filter, keywords.value)) {
                    _children.push(vNode);
                }
            } else {
                _children.push(vNode);
            }
        });

        return _children;
    }

    return {onSearch, resetSearch, getCreatedVNode, keywords, filter};
}

function filterOption(vNode: VNodeComponentClass<Option>, filter: SelectProps['filter'], keywords: string) {
    let props = vNode.props;
    if (isNullOrUndefined(props)) return false;

    if (isNullOrUndefined(props.label)) {
        props = {...props, label: getTextByChildren(props.children)};
    }
    if (isNullOrUndefined(filter)) {
        filter = defaultFilter;
    }

    return filter(keywords, props);
}

function defaultFilter(keywords: string, props: any): boolean {
    if (keywords === '') return true;

    keywords = keywords.toLowerCase();

    const label = props.label;
    if (!isNullOrUndefined(label) && ~label.toLowerCase().indexOf(keywords)) {
        return true;
    }

    const value = props.value;
    if (isStringOrNumber(value) && ~String(value).toLowerCase().indexOf(keywords)) {
        return true;
    }

    return false;
}
