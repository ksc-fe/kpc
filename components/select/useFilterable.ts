import {
    useInstance,
    nextTick,
    createVNode as h,
    Children,
    VNode,
    VNodeComponentClass,
    directClone,
    createRef
} from 'intact';
import {useState} from '../../hooks/useState';
import type {Select, SelectProps} from './select';
import {Option} from './option';
import {isNullOrUndefined, EMPTY_OBJ, isStringOrNumber} from 'intact-shared';
import {getTextByChildren, mapChildren} from '../utils';
import type {Input} from '../input';

export function useFilterable() {
    const component = useInstance() as Select;
    const keywords = useState('');
    const inputRef = createRef<Input>();

    function onSearch(e: InputEvent) {
        const value = (e.target as HTMLInputElement).value.trim();

        keywords.set(value);

        const dropdown = component.dropdownRef.value!;
        // the position may be flip, and the select input height may change height too,
        // so we should reset the position
        nextTick(() => {
            dropdown.focusFirst();
            dropdown.position();
        });
    }

    function getCreatedVNode(children: (VNode | string | number)[]) {
        const {creatable, filterable} = component.get();
        const _keywords = keywords.value;
        if (creatable && filterable && _keywords) {
            if (!children.find(vNode => {
                if ((vNode as VNode).tag === Option) {
                    const props = (vNode as VNode).props;
                    if (isNullOrUndefined(props)) return false;
                    if (props.value === _keywords || props.label.trim() === _keywords) {
                        return true;
                    }
                }
                return false;
            })) {
                return h(Option, {value: _keywords, label: _keywords});
            }
        }
    }

    function filter(children: Children) {
        let {filterable, filter, searchable} = component.get();

        if (!filterable && !searchable) return children;

        if (isNullOrUndefined(filter)) {
            filter = defaultFilter;
        }

        const _children: (VNode | string | number)[] = [];
        mapChildren(children, vNode => {
            if ((vNode as VNode).tag === Option) {
                const props = (vNode as VNode).props;
                if (isNullOrUndefined(props)) return;

                vNode = directClone(vNode as VNode);

                if (isNullOrUndefined(props.label)) {
                    vNode.props = {...props, label: getTextByChildren(props.children)};
                }

                if (filter!(keywords.value, vNode.props)) {
                    _children.push(vNode);
                }
            } else {
                _children.push(vNode);
            }
        });

        return _children;
    }

    function resetKeywords() {
        keywords.set('');
    }

    // if menu showed and value changed on multiple mode
    // focus the input
    function focusInput() {
        if (component.get('filterable')) {
            inputRef.value!.focus();
        }
    }
    component.on('$changed:_show', show => {
        if (show) {
            focusInput();
            resetKeywords();
        } else if (component.get('multiple')) {
            resetKeywords();
        }
    });
    component.on('$changed:value', () => {
        const {multiple, filterable} = component.get();
        if (multiple && filterable) {
            focusInput();
            resetKeywords();
        }
    });

    return {onSearch, getCreatedVNode, keywords, filter, inputRef};
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
