import {useInstance, VNodeComponentClass, Props, directClone, createVNode as h, Children} from 'intact';
import {eachChildren, isComponentVNode} from '../utils';
import {TableColumn, TableColumnProps} from './column';
import {useState} from '../../hooks/useState';
import type {Table, TableProps} from './table';
import {createContext} from '../context';

export const context = createContext<TableProps['checkType']>();

export function useColumns() {
    const instance = useInstance() as Table;
    let columns: VNodeComponentClass<TableColumn>[][] = [];
    let maxRows: number = 0;
    let maxCols: number = 0;
    let cols: Props<TableColumnProps>[] = [];
    let currentVNode: VNodeComponentClass<TableColumn> | null = null;

    instance.on('$receive:children', handleChildren);

    function handleChildren() {
        const {children} = instance.get();

        columns = [];
        maxRows = 0;
        maxCols = 0;
        cols = [];

        loopColumn(children, null, 0);
    }

    function loopColumn(
        children: Children,
        parentProps: Props<TableColumnProps> | null,
        row: number,
    ) {
        // add a flag, when we enter to the map callback set it to true,
        // because it may have children but it has not TableColumn
        let ret = false; 
        let isFirstColumn = true;
        eachChildren(children, vNode => {
            if (isComponentVNode(vNode, TableColumn)) {
                if (isFirstColumn) {
                    const nextRow = row + 1;
                    if (nextRow > maxRows) maxRows = nextRow;
                    if (!columns[row]) columns[row] = [];

                    isFirstColumn = false;
                }

                ret = true;

                const clonedVNode = directClone(vNode) as VNodeComponentClass<TableColumn>;
                const props = {
                    ...clonedVNode.props!,
                    cols: 0,
                    rows: 0,
                    prevVNode: currentVNode,
                };
                clonedVNode.props = props;
                columns[row].push(clonedVNode);

                handleProps(props, parentProps, row, clonedVNode);
            }
        });

        return ret;
    }

    function handleProps(
        props: Props<TableColumnProps>,
        parentProps: Props<TableColumnProps> | null,
        row: number,
        vNode: VNodeComponentClass<TableColumn>
    ) {
        const children = props.children;
        if (children && loopColumn(children, props, row + 1)) {
            // if the column has children columns, then set the row to 1
            props.rows = 1;
        } else {
            // if the column has not children columns, then we must calculate
            // the rows after loop all columns.
            props.children = null;
            props.cols = 1;
            cols.push(props);
            maxCols++;
            Object.defineProperty(props, 'rows', {
                get() {
                    return maxRows - row;
                },
                enumerable: true,
            });

            currentVNode = vNode;
        }

        // update the parent's cols after hanlding all children columns
        if (parentProps) {
            parentProps.cols! += props.cols!;
        }
    }

    function getColumns() {
        return columns;
    }

    function getCols() {
        return cols;
    }

    function getData() {
        return {
            columns,
            cols,
            maxRows,
            maxCols,
        }
    }

    return {getColumns, getCols, getData} 
}
