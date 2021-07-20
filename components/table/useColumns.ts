import {useInstance, VNodeComponentClass, Props, directClone} from 'intact';
import {eachChildren, isComponentVNode} from '../utils';
import {TableColumn, TableColumnProps} from './column';
import {cx} from '@emotion/css';

export function useColumns() {
    const instance = useInstance()!;
    let schemes: Props<TableColumnProps>[] = [];
    let columns: VNodeComponentClass<TableColumn>[] = [];

    instance.on('$receive:children', handleChildren);

    function handleChildren() {
        const children = instance.get('children');

        schemes = [];
        columns = [];

        let offset = 0;
        let index = -1;
        let lastLeftFixedIndex = -1;
        let firstRightFixedIndex = -1;
        eachChildren(children, vNode => {
            if (isComponentVNode(vNode, TableColumn)) {
                index++;
                const clonedVNode = directClone(vNode) as VNodeComponentClass<TableColumn>;
                const props = vNode.props!;
                const scheme = {
                    ...props,
                    shadow: false,
                    offset: 0,
                };
                clonedVNode.props = scheme;
                columns.push(clonedVNode);
                schemes.push(scheme);

                const fixed = props.fixed;
                if (fixed === 'left') {
                    scheme.offset = offset;
                    offset += props.width as number; 
                    lastLeftFixedIndex = index;
                } else if (fixed === 'right') {
                    scheme.shadow = true;
                    firstRightFixedIndex = index;
                }
            }
        });

        // mark the last fixed left column as shadow
        if (lastLeftFixedIndex > -1) {
            schemes[lastLeftFixedIndex].shadow = true;
        }

        // calculate the offset of fixed right columns
        if (firstRightFixedIndex > -1) {
            let offset = 0;
            for (let i = schemes.length - 1; i >= firstRightFixedIndex; i--) {
                const scheme = schemes[i];
                if (scheme.fixed === 'right') {
                    scheme.offset = offset;
                    offset += scheme.width as number;
                }
            }
        }
    }

    function onSort() {

    }

    function onDragStart() {

    }

    return () => {
        return {
            schemes,
            columns,
        }
    }
}

export function getClassAndStyleForFixed({className, fixed, shadow, offset}: Props<TableColumnProps>) {
    return {
        className: cx({
            [className as string]: !!className,
            [`k-fixed-${fixed}`]: !!fixed,
            'k-shadow': shadow,
        }),
        style: fixed ? {[fixed]: `${offset}px`} : null,
    };
}
