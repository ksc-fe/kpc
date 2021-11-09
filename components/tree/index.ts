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

export interface TreeProps {
    data?: DataItem[]
    filter?: Filter 
    uncorrelated?: boolean
    checkedKeys?: Key[]
    expandedKeys?: Key[]
    defaultExpandAll?: boolean
    selectable?: boolean
    selectedKeys?: Key[]
    multiple?: boolean
    checkbox?: boolean
    load?: (node: Node) => DataItem[] | Promise<DataItem[]>
    showLine?: boolean
    draggable?: boolean
    allowDrag?: (node: Node) => boolean 
    allowDrop?: (node: Node) => boolean 
}

export interface TreeEvents {
    denydrag: [Node]
    denydrop: [Node]
    dragend: [DragEndData]
    transitionEnd: []
}

type DragEndData = {
    srcNode: Node
    toNode: Node
    mode: Mode
}

type Filter = (data: DataItem, node: Node) => boolean;

const typeDefs: Required<TypeDefs<TreeProps>> = {
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

const defaults = (): Partial<TreeProps> => ({
    selectable: true,
    showLine: true,
});

export class Tree extends Component<TreeProps, TreeEvents> {
    static template = template;
    static typeDefs = typeDefs;
    static defaults = defaults;

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

    public expand(key: Key) {
        const expandedKeys = this.expanded.get();
        expandedKeys.add(key);
        this.set('expandedKeys', Array.from(expandedKeys));
    }

    public shrink(key: Key) {
        const expandedKeys = this.expanded.get();
        expandedKeys.delete(key);
        this.set('expandedKeys', Array.from(expandedKeys));
    }

    public getNodes() {
        return this.nodes.getNodes();
    }

    @bind
    private onClick(node: Node) {
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
