import {
    VNode,
    useInstance,
    findDomFromVNode,
    createVNode as h,
    Key,
} from 'intact';
import type { Tags } from './tags';
import { nextFrame, debounce, swap } from '../utils';
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

        // if the tag has move transition, you cannot drag over it before transition ended.
        const dom = findDomFromVNode(children.value[index], true) as HTMLElement;
        if (dom.classList.contains('k-fade-move')) return;

        const vNodes = swap(originVNodes.value, draggingIndex, index);

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
