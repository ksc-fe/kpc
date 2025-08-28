import {Component, TypeDefs, useInstance, Children, Blocks, createRef, NonNullableRefObject} from 'intact';
import {eachChildren, isComponentVNode, last} from '../utils';
import {EMPTY_OBJ} from 'intact-shared';
import {OptionGroup} from './group';
import {useState, State, watchState} from '../../hooks/useState';
import type { SelectMenu } from './menu';

export function useCard(
    defaultActiveIndex: NonNullableRefObject<number[]>,
    keywords: State<string>
) {
    const instance = useInstance() as SelectMenu;
    const activeIndex = useState<number>(last(defaultActiveIndex.value) || 0);

    watchState(keywords, (keywords) => {
        if (keywords) {
            activeIndex.set(0);
        } else {
            setDefaultActiveIndex();
        }
    });

    instance.select.on('show', setDefaultActiveIndex);

    function setDefaultActiveIndex() {
        activeIndex.set(last(defaultActiveIndex.value) || 0);
    }

    function process(children: Children, isSearching: boolean) {
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
