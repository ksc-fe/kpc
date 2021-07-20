import {useInstance, VNodeComponentClass, Props, directClone, createVNode as h} from 'intact';
import {eachChildren, isComponentVNode} from '../utils';
import {TableColumn, TableColumnProps} from './column';
import {useState} from '../../hooks/useState';
import type {Table} from './table';

export function useColumns() {
    const instance = useInstance() as Table;
    let columns: VNodeComponentClass<TableColumn>[] = [];

    instance.on('$receive:children', handleChildren);

    function handleChildren() {
        const {children, checkType} = instance.get();

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
