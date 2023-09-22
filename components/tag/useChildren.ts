import { VNode, useInstance } from 'intact';
import type { Tags } from './tags';
import { eachChildren, findChildren, isComponentVNode, ValidVNode } from '../utils';
import { isStringOrNumber } from 'intact-shared';
import { useState } from '../../hooks/useState';
import { Tag } from './';
import { Dropdown } from '../dropdown';
import { Tooltip } from '../tooltip';

export function useChildren() {
    const instance = useInstance() as Tags;
    const children = useState<VNode[]>([]);

    instance.watch('children', (v) => {
        const vNodes: VNode[] = [];
        eachChildren(v, (vNode) => {
            if (isTagOrContainsTag(vNode)) {
                vNodes.push(vNode);
            }
        })
        children.set(vNodes);
    });

    return children;
}

function isTagOrContainsTag(vNode: ValidVNode): vNode is VNode {
    if (isStringOrNumber(vNode)) return false;

    if (isComponentVNode(vNode, Tag)) {
        return true;
    }

    if (isComponentVNode(vNode, Dropdown) || isComponentVNode(vNode, Tooltip)) {
        return !!findChildren(vNode.props?.children, (vNode) => {
            return isTagOrContainsTag(vNode);
        });
    }

    return false;
}

