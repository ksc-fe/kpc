import {Component, Key, TypeDefs} from 'intact';
import template from './index.vdt';
import {DataItem, useNodes, Node} from './useNodes';
import {bind} from '../utils';
import {useChecked} from './useChecked';
import {useExpanded} from './useExpanded';
import {useSelected} from './useSelected';
import {useFilter} from './useFilter';
import {useDraggable, Mode} from './useDraggable';
import {useTransitionEvent} from './useTransitionEvent';
import type {Events} from '../types';

export type {
    Node as TreeNode,
    DataItem as TreeDataItem,
};

export interface TreeProps<K extends Key = Key> {
    data?: DataItem<K>[]
    filter?: Filter<K>
    uncorrelated?: boolean
    checkedKeys?: K[]
    expandedKeys?: K[]
    defaultExpandAll?: boolean
    selectable?: boolean
    selectedKeys?: K[]
    multiple?: boolean
    checkbox?: boolean
    load?: (node: Node<K>) => Promise<void> | void 
    showLine?: boolean
    draggable?: boolean
    allowDrag?: (node: Node<K>) => boolean 
    allowDrop?: (node: Node<K>) => boolean 
}

export interface TreeEvents<K extends Key> {
    denydrag: [Node<K>]
    denydrop: [Node<K>]
    dragend: [DragEndData<K>]
    transitionEnd: []
}

export interface TreeBlocks<K extends Key> {
    label: [DataItem<K>, Node<K>, number]
}

type DragEndData<K extends Key> = {
    srcNode: Node<K>
    toNode: Node<K>
    mode: Mode
}

type Filter<K extends Key> = (data: DataItem<K>, node: Node<K>) => boolean;

const typeDefs: Required<TypeDefs<TreeProps<Key>>> = {
    data: Array,
    filter: Function,
    uncorrelated: Boolean,
    checkedKeys: Array,
    expandedKeys: Array,
    defaultExpandAll: Boolean,
    selectable: Boolean,
    selectedKeys: Array,
    multiple: Boolean,
    checkbox: Boolean,
    load: Function,
    showLine: Boolean,
    draggable: Boolean,
    allowDrag: Function,
    allowDrop: Function,
};

const defaults = (): Partial<TreeProps<Key>> => ({
    selectable: true,
    showLine: true,
});

const events: Events<TreeEvents<Key>> = {
    denydrag: true,
    denydrop: true,
    dragend: true,
    transitionEnd: true, 
};

export class Tree<K extends Key = Key> extends Component<TreeProps<K>, TreeEvents<K>, TreeBlocks<K>> {
    static template = template;
    static typeDefs = typeDefs;
    static defaults = defaults;
    static events = events;

    private nodes = useNodes();
    private checked = useChecked(this.nodes.getNodes);
    private expanded = useExpanded(this.nodes.getNodes);
    private selected = useSelected(this.nodes.getNodes);
    private filter = useFilter(this.nodes.getNodes, this.expanded.get);
    private draggable = useDraggable();
    private transition = useTransitionEvent();

    public getCheckedData(leafOnly: boolean = false) {
        return this.checked.getCheckedData(leafOnly);
    }

    public getSelectedData() {
        return this.selected.getSelectedData();
    }

    public expand(key: K) {
        const expandedKeys = this.expanded.get();
        expandedKeys.add(key);
        this.set('expandedKeys', Array.from(expandedKeys) as K[]);
    }

    public shrink(key: K) {
        const expandedKeys = this.expanded.get();
        expandedKeys.delete(key);
        this.set('expandedKeys', Array.from(expandedKeys) as K[]);
    }

    public getNodes() {
        return this.nodes.getNodes() as Node<K>[];
    }

    @bind
    private onClick(node: Node<K>) {
        if (node.data.disabled) return;

        const {selectable, checkbox} = this.get();
        if (selectable) {
            this.selected.toggle(node);
        } else if (checkbox) {
            this.checked.toggle(node);
        } else {
            this.expanded.toggle(node);
        }
    }
}
