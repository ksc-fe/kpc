import {
    useInstance,
    nextTick,
    createVNode as h,
    Children,
    VNode,
    VNodeComponentClass,
    directClone,
    createRef,
    Props,
} from 'intact';
import {useState, State} from '../../hooks/useState';
import type {Select, SelectProps} from './select';
import {Option, OptionProps} from './option';
import {OptionGroup, OptionGroupProps} from './group';
import {isNullOrUndefined, EMPTY_OBJ, isStringOrNumber} from 'intact-shared';
import {getTextByChildren, mapChildren, isComponentVNode} from '../utils';
import type {Input} from '../input';

export function useFilterable(keywords: State<string>) {
    const component = useInstance() as Select;

    function getCreatedVNode(children: (VNode | string | number)[]) {
        const {creatable, filterable} = component.get();
        const _keywords = keywords.value.trim();
        if (creatable && filterable && _keywords) {
            if (!children.find(vNode => {
                // TODO: create Option for OptionGroup
                if ((vNode as VNode).tag === Option) {
                    const props = (vNode as VNode).props;
                    if (isNullOrUndefined(props)) return false;
                    if (props.value === _keywords || props.label.trim() === _keywords) {
                        return true;
                    }
                }
                return false;
            })) {
                return h(Option, {value: _keywords, label: _keywords, isCreated: true});
            }
        }
    }

    function filter(children: Children) {
        let {filterable, filter, searchable} = component.get();

        if (!filterable && !searchable) return children;

        if (isNullOrUndefined(filter)) {
            filter = defaultFilter;
        }

        const loop = (children: Children) => {
            const _children: (VNode | string | number)[] = [];
            mapChildren(children, vNode => {
                if (isComponentVNode(vNode, Option)) {
                    const props = vNode.props as Props<OptionProps>;
                    if (isNullOrUndefined(props)) return;

                    vNode = directClone(vNode as VNode);

                    if (isNullOrUndefined(props.label)) {
                        vNode.props = {...props, label: getTextByChildren(props.children)};
                    }
                    const value = props.value;
                    if (isStringOrNumber(value)) {
                        vNode.key = value;
                    }

                    if (filter!(keywords.value.trim(), vNode.props)) {
                        _children.push(vNode);
                    }
                } else if (isComponentVNode(vNode, OptionGroup)) {
                    const props = vNode.props;
                    if (isNullOrUndefined(props)) return;

                    const children = loop(props.children);
                    if (!children.length) return;

                    vNode = directClone(vNode);
                    vNode.props = {...props, children};

                    _children.push(vNode);
                } else {
                    _children.push(vNode);
                }
            });

            return _children;
        }

        return loop(children);
    }

    return {getCreatedVNode, filter};
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
