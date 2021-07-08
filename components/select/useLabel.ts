import {Children, VNodeComponentClass, VNode, useInstance, watch, createRef, Props} from 'intact';
import {isNullOrUndefined, isStringOrNumber, EMPTY_OBJ} from 'intact-shared';
import {findChildren, isEmptyString, ValidVNode, isComponentVNode} from '../utils';
import {Option, OptionProps} from './option';
import {OptionGroup, OptionGroupProps} from './group';
import type {Select, SelectProps} from './select';

export function useLabel() {
    const instance = useInstance() as Select;
    const activeIndices = createRef<number[]>([]);

    function getLabel() {
        const {value, multiple, children} = instance.get();

        if (isNullOrUndefined(value)) return;

        if (!multiple) {
            return findLabel(children, value);
        } else {
            const labels: Children[] = [];
            value.forEach((value: any) => {
                const label = findLabel(children, value);
                if (!isNullOrUndefined(label)) {
                    labels.push(label);
                }
            });

            return labels;
        }
    }

    function findLabel(children: Children, value: any) {
        let label: Children = null;
        let index = 0;
        activeIndices.value = [];
        const loop = (children: Children) => {
            return findChildren(children, (vNode) => {
                if (isComponentVNode(vNode, Option)) {
                    const props = vNode.props as Props<OptionProps>;
                    if (isNullOrUndefined(props)) return false;
                    if (props.value === value) {
                        label = props.label;
                        if (isNullOrUndefined(label)) {
                            label = props.children;
                        }
                        return true;
                    }
                } else if (isComponentVNode(vNode, OptionGroup)) {
                    if (loop((vNode.props || EMPTY_OBJ).children)) {
                        activeIndices.value.push(index);
                        return true;
                    }
                    index++;
                }
                return false;
            });
        };
        loop(children);

        const map = instance.get('labelMap')!;
        if (isNullOrUndefined(label)) {
            label = map.get(value);
        } else {
            map.set(value, label);
        }

        label = isEmptyString(label) ? (isStringOrNumber(value) ? value : null) : label;

        return label;
    }

    function cleanMap() {
        const {value, multiple, labelMap} = instance.get() as Required<SelectProps>;

        if (isNullOrUndefined(value)) {
            labelMap.clear();
            return;
        }

        if (multiple) {
            labelMap.forEach((item, key) => {
                if (!value.includes(key)) {
                    labelMap.delete(key);
                }
            });
            return;
        }
        labelMap.forEach((item, key) => {
            if (key !== value) {
                labelMap.delete(key);
            }
        });
    }
 
    instance.watch('value', cleanMap, {inited: true});

    return {getLabel, activeIndices};
}
