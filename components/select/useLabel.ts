import {Children, VNodeComponentClass, VNode, useInstance, watch, createRef, Props} from 'intact';
import {isNullOrUndefined, isStringOrNumber, EMPTY_OBJ} from 'intact-shared';
import {findChildren, isEmptyString, ValidVNode, isComponentVNode} from '../utils';
import {Option, OptionProps} from './option';
import {OptionGroup, OptionGroupProps} from './group';
import type {Select, SelectProps} from './select';
import {useBaseLabel} from './useBaseLabel';

export function useLabel() {
    const instance = useInstance() as Select;
    const activeIndices = createRef<number[]>([]);

    const {getLabel} = useBaseLabel(
        () => instance.get('children'),
        findLabel
    );

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

        return label;
    }

    return {getLabel, activeIndices};
}
