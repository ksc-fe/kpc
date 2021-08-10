import {Component, Key, TypeDefs} from 'intact';
import template from './index.vdt';
import {DataItem, useNodes, Node} from './useNodes';
import {useChecked} from './useChecked';
import {useExpanded} from './useExpanded';

export interface TreeProps {
    data?: DataItem[]
    filter?: Filter 
    uncorrelated?: boolean
    checkedKeys?: Key[]
    expandedKeys?: Key[]
    checkbox?: boolean
    load?: (node: Node) => DataItem[] | Promise<DataItem[]>
}

type Filter = (data: DataItem, node: Node) => boolean;

const typeDefs: Required<TypeDefs<TreeProps>> = {
    data: Array,
    filter: Function,
    uncorrelated: Boolean,
    checkedKeys: Array,
    expandedKeys: Array,
    checkbox: Boolean,
    load: Function,
};

export class Tree extends Component<TreeProps> {
    static template = template;
    static typeDefs = typeDefs;

    private nodes = useNodes();
    private checked = useChecked(this.nodes.getNodes);
    private expanded = useExpanded();
}
