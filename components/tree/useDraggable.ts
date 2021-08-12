import {useInstance, Key} from 'intact';
import type {Tree} from './';
import type {Node, DataItem} from './useNodes';
import {containsOrEqual} from '../../hooks/useDocumentClick';
import {useState} from '../../hooks/useState';

export enum Mode {
    Before,
    After,
    Inner
}

const RANGE = 0.25;

export function useDraggable() {
    const instance = useInstance() as Tree;
    const draggingKey = useState<Key | null>(null);
    const overKey = useState<Key | null>(null);
    const mode = useState<Mode | null>(null);

    let draggingDom: HTMLElement | null = null;
    let draggingNode: Node | null = null;
    let overNode: Node | null = null;
    let clientX: number | null = null;
    let clientY: number | null = null;
    let valid: boolean = false;

    function onDragStart(node: Node, e: MouseEvent) {
        e.stopPropagation();

        const {allowDrag} = instance.get();
        if (node.data.disabled || allowDrag && !allowDrag(node)) {
            instance.trigger('denydrag', node);
            e.preventDefault();
            return;
        }

        draggingDom = e.target as HTMLElement;
        draggingNode = node;
        draggingKey.set(node.key);
    }

    function onDragOver(node: Node, e: MouseEvent) {
        e.stopPropagation();
        e.preventDefault();

        const overDom = e.target as HTMLElement;
        if (containsOrEqual(draggingDom!, overDom)) return;

        // ignore the over event, it the mouse does not move
        const {clientX: newClientX, clientY: newClientY} = e;
        if (clientX === newClientX && clientY === newClientY) return;
        clientX = newClientX;
        clientY = newClientY;

        const newMode = calcInserMode(e, overDom);
        if (node !== overNode || newMode !== mode.value) {
            overNode = node;
            mode.set(newMode);
            overKey.set(node.key);

            // if the node does not allow drop, prevent the dragging ndoe from inserting to it
            if (mode.value === Mode.Inner) {
                const {allowDrop} = instance.get();
                if (node.data.disabled || allowDrop && !allowDrop(node)) {
                    instance.trigger('denydrop', node);
                    valid = false;
                    return;
                }
            }

            valid = true;
        }
    }

    function calcInserMode(e: MouseEvent, dom: HTMLElement) {
        const clientY = e.clientY;
        const {top, bottom, height} = dom.getBoundingClientRect();
        const des = height * RANGE;

        if (clientY <= top + des) return Mode.Before;
        else if (clientY >= bottom - des) return Mode.After;
        return Mode.Inner;
    }

    function onDragEnd(e: MouseEvent) {
        e.stopPropagation();
        e.preventDefault();

        if (valid) {
            handleData();
            instance.trigger('dragend', {
                srcNode: draggingNode,
                toNode: overNode,
                mode: mode.value
            });
        }

        draggingKey.set(null);
        mode.set(null);
        draggingDom = null;
        draggingNode = null;
        overNode = null;
        clientX = null;
        clientY = null;
        valid = false;
    }

    function handleData() {
        const {data} = instance.get();
        // remove node firstly
        remove(draggingNode!, data!);

        switch (mode.value) {
            case Mode.Before:
                insert(overNode!, draggingNode!, data!, 0);
                break;
            case Mode.After:
                insert(overNode!, draggingNode!, data!, 1);
                break;
            case Mode.Inner:
                append(overNode!, draggingNode!);
                instance.expand(overNode!.key);
                break;
        }

        instance.set('data', [...data!]);
    }

    return {onDragStart, onDragOver, onDragEnd, draggingKey, overKey, mode};
}

function remove(node: Node, data: DataItem[]) {
    const siblings = getNodeSiblings(node, data);
    const index = siblings.indexOf(node.data);
    siblings!.splice(index, 1);
}

function insert(node: Node, newNode: Node, data: DataItem[], offset: number) {
    const siblings = getNodeSiblings(node, data);
    const index = siblings.indexOf(node.data);
    siblings.splice(index + offset, 0, newNode.data);
}

function append(node: Node, newNode: Node) {
    const children = node.data.children || (node.data.children = []);
    children.push(newNode.data);
}

function getNodeSiblings(node: Node, data: DataItem[]) {
    const parent = node.parent;
    return parent ? parent.data.children! : data;
}

