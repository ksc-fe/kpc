import { useInstance, Children } from 'intact';
import type { Select } from './select';
import { Option, OptionProps } from './option';
import { OptionGroup } from './group';
import { eachChildren, isComponentVNode } from '../utils';
import { useState } from '../../hooks/useState';

export function useImmutable() {
    const instance = useInstance() as Select<any, true>;
    const immutableValues = useState<any[]>([]);

    function setImmutableValues() {
        const { children, multiple } = instance.get();
        if (!multiple) return;
        updateImmutableValues(children);
    }

    function updateImmutableValues(children: Children) {
        const _immutableValues: any[] = [];
        const loop = (children: Children) => {
            eachChildren(children, vNode => {
                if (isComponentVNode(vNode, Option)) {
                    const { disabled, value } = vNode.props as OptionProps;
                    if (disabled) {
                        _immutableValues.push(value);
                    }
                } else if (isComponentVNode(vNode, OptionGroup)) {
                    loop(vNode.props!.children);
                }
            });
        }

        loop(children);
        immutableValues.set(_immutableValues);
    }

    function isClosable(key: string) {
        return !immutableValues.value.includes(key);
    }

    instance.on('$receive:children', setImmutableValues);

    return { immutableValues, isClosable };
}
