import {Component, TypeDefs, useInstance, Children, Blocks, createRef, NonNullableRefObject} from 'intact';
import {eachChildren, isComponentVNode, last} from '../utils';
import {EMPTY_OBJ} from 'intact-shared';
import {OptionGroup} from './group';
import {useState} from '../../hooks/useState';

// TODO
export function useCard(defaultActiveIndex: NonNullableRefObject<number[]>) {
    const children = useInstance()!.get('children');
    const activeIndex = useState<number>(last(defaultActiveIndex.value) || 0);

    function process(children: Children) {
        const groupLabels: Children[] | Blocks[string][] = [];
        const _children: Children[] = [];
        let index = 0;
        eachChildren(children, vNode => {
            if (isComponentVNode(vNode, OptionGroup)) {
                const props = vNode.props || EMPTY_OBJ;
                const label = (props.$blocks || EMPTY_OBJ).label || props.label;
                groupLabels.push(label); 
                
                if (index === activeIndex.value) {
                    _children.push(vNode);
                }
                index++;
            } else {
                _children.push(vNode);
            }
        });

        return {labels: groupLabels, group: _children};
    }

    return {process, activeIndex};
}
