import {
    VNode,
    useInstance,
    findDomFromVNode,
    createVNode as h,
    Key,
} from 'intact';
import type { Tags } from './tags';
import { nextFrame, debounce } from '../utils';
import { useState, watchState, State } from '../../hooks/useState';
import { Virtual } from '../virtual';
import { cx } from '@emotion/css';

export function useDraggable(originVNodes: State<VNode[]>) {
    const instance = useInstance() as Tags;
    const children = useState<VNode[]>([]);
    const draggingKey = useState<Key | null>(null);

    let draggingIndex: number;
    let originIndex: number;
    let lastOverIndex: number; /* let the dragover event only trigger once when tags changed order */

    watchState(originVNodes, render);
    watchState(draggingKey, render);

    function render() {
        const { draggable } = instance.get();
        children.set(!draggable ? originVNodes.value : originVNodes.value.map((vNode, index) => {
            const key = vNode.key!;
            return h(Virtual, {
                'ev-dragstart': () => onStart(key, index),
                'ev-dragover': (e: MouseEvent) => onOver(e, key, index),
                'ev-dragend': (e: MouseEvent) => onEnd(e),
                key,
                draggable, 
                className: cx({
                    'k-dragging': key === draggingKey.value, 
                    'k-draggable': draggable,
                })
            }, vNode); 
        }));

    }

    function onStart(key: Key, index: number) {
        draggingIndex = originIndex = index;
        nextFrame(() => {
            draggingKey.set(key); 
        });

        instance.trigger('dragstart', {
            key,
            from: index,
        });
    }

    function onOver(e: MouseEvent, key: Key, index: number) {
        e.preventDefault();
        e.stopPropagation();

        if (lastOverIndex === index) return;
        lastOverIndex = index;

        if (index === draggingIndex) return;

        const vNodes = originVNodes.value.slice(0);
        const vNode = vNodes.splice(draggingIndex, 1)[0];
        vNodes.splice(index, 0, vNode);

        lastOverIndex = draggingIndex;
        draggingIndex = index;

        originVNodes.set(vNodes);
    }

    function onEnd(e: MouseEvent) {
        e.preventDefault();

        instance.trigger('dragend', {
            key: draggingKey.value!,
            from: originIndex,
            to: draggingIndex,
        });

        draggingKey.set(null);
        lastOverIndex = -1;
        draggingIndex = -1;
        originIndex = -1;
    }

    return children;
}
