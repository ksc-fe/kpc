import {Component, TypeDefs, useInstance, Children, Blocks, createRef, RefObject} from 'intact';
import {eachChildren, isComponentVNode} from '../utils';
import {EMPTY_OBJ} from 'intact-shared';
import {OptionGroup} from './group';

// TODO
export function useCard(defaultActiveIndex: RefObject<number>) {
    const children = useInstance()!.get('children');

    function process(children: Children) {
        const groupLabels: Children[] | Blocks[string][] = [];
        const _children: Children[] = [];
        let index = 0;
        eachChildren(children, vNode => {
            if (isComponentVNode(vNode, OptionGroup)) {
                const props = vNode.props || EMPTY_OBJ;
                const label = (props.$blocks || EMPTY_OBJ).label || props.label;
                groupLabels.push(label); 
                
                if (index === (defaultActiveIndex.value || 0)) {
                    _children.push(vNode);
                }
                index++;
            } else {
                _children.push(vNode);
            }
        });

        return {labels: groupLabels, group: _children};
    }

    return {process};
}
