import {useInstance, VNodeComponentClass, Props, directClone} from 'intact';
import {eachChildren, isComponentVNode} from '../utils';
import {TableColumn, TableColumnProps} from './column';
import {useState} from '../../hooks/useState';

export function useColumns() {
    const instance = useInstance()!;
    let columns: VNodeComponentClass<TableColumn>[] = [];

    instance.on('$receive:children', handleChildren);

    function handleChildren() {
        const children = instance.get('children');

        columns = [];

        eachChildren(children, vNode => {
            if (isComponentVNode(vNode, TableColumn)) {
                const clonedVNode = directClone(vNode) as VNodeComponentClass<TableColumn>;
                columns.push(clonedVNode);
            }
        });
    }

    function onSort() {

    }

    function onDragStart() {

    }

    function getColumns() {
        return columns;
    }

    return {getColumns} 
}
