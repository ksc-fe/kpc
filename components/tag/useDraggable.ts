import {
    NonNullableRefObject,
    VNodeComponentClass,
    VNode,
    useInstance,
    createRef,
    findDomFromVNode,
    onBeforeMount,
    createVNode as h,
    Key,
    onBeforeUpdate,
} from 'intact';
import type { Tags } from './tags';
import { eachChildren } from '../utils';
import { isStringOrNumber } from 'intact-shared';
import { useState, watchState, State } from '../../hooks/useState';
import { tag as tagStyles } from './styles';
import { getLeft, getRight } from '../../styles/utils';
import { useReceive } from '../../hooks/useReceive';
import { useResizeObserver } from '../../hooks/useResizeObserver';
import { Virtual } from '../virtual';
import { cx } from '@emotion/css';

export function useDraggable(originVNodes: State<VNode[]>) {
    const instance = useInstance() as Tags;
    const children = useState<VNode[]>([]);
    const draggingKey = useState<Key | null>(null);

    let draggingIndex: number;

    watchState(originVNodes, render);
    watchState(draggingKey, render);

    function render() {
        children.set(originVNodes.value.map((vNode, index) => {
            const key = vNode.key!;
            return h(Virtual, {
                'ev-dragstart': () => onStart(key, index),
                'ev-dragover': () => onOver(key, index),
                'ev-dragend': onEnd,
                key,
                draggable: true,
                className: cx({
                    'k-dragging': key === draggingKey.value, 
                })
            }, vNode); 
        }));
    }

    function onStart(key: Key, index: number) {
        draggingIndex = index;
        draggingKey.set(key); 
    }

    function onOver(key: Key, index: number) {
        if (index === draggingIndex) return;

        const vNodes = originVNodes.value.slice(0);
        const vNode = vNodes.splice(draggingIndex, 1)[0];
        vNodes.splice(index, 0, vNode);

        draggingIndex = index;

        originVNodes.set(vNodes);
    }

    function onEnd() {
        draggingKey.set(null);
    }

    return children;
}
