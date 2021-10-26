import {useInstance, VNodeComponentClass, onBeforeMount, onBeforeUpdate, inject} from 'intact';
import {Menu, MenuItem, MenuProps} from './';
import {Icon} from '../icon';
import {
    isComponentVNode,
    eachChildren,
    isTextVNode,
    isStringOrNumberNotEmpty,
    ValidVNode,
} from '../utils';
import {Options} from '../position';
import {ROOT_DROPDOWN, Dropdown} from '../dropdown';

export function useDropdown(rootMenu: Menu, parentMenu: Menu) {
    const instance = useInstance() as MenuItem;
    const isTopItem = rootMenu === parentMenu;
    const rootDropdown = inject<Dropdown | null>(ROOT_DROPDOWN, null);

    let subMenuVNode: VNodeComponentClass<Menu> | null = null; 
    let isDropdownMenu: boolean = false;
    let tooltipContents: ValidVNode[];
    let iconVNode: VNodeComponentClass<Icon> | null;
    let titleVNodes: ValidVNode[];
    let isCollapse: boolean | undefined;
    let position: Options | null = null;

    onBeforeMount(parseChildren);
    onBeforeUpdate(parseChildren);

    parsePosition(rootMenu.get('type'));
    rootMenu.watch('type', parsePosition);

    // hide dropdown menu on select
    instance.on('select', hide);

    function parseChildren() {
        isDropdownMenu = isDropdown(rootMenu);
        tooltipContents = [];
        iconVNode = null;
        titleVNodes = [];
        isCollapse = rootMenu.get('collapse');

        const children = instance.get('children');

        eachChildren(children, vNode => {
            if (isComponentVNode(vNode, Menu)) {
                subMenuVNode = vNode;
            } else if (isTopItem && isCollapse) {
                if (isStringOrNumberNotEmpty(vNode) || isTextVNode(vNode)) {
                    tooltipContents.push(vNode);
                } else if (!iconVNode && isComponentVNode(vNode, Icon)) {
                    iconVNode = vNode;
                }
            } else {
                titleVNodes.push(vNode);
            }
        });
    }

    function parsePosition(type: MenuProps['type']) {
        position = type !== 'horizontal' || !isTopItem ?
            {my: 'left top', at: 'right+5 top'} :
            {my: 'left top', at: 'left bottom+5'};
    }

    function hide() {
        if (!isTopItem && rootDropdown) {
            rootDropdown.hide(true);
        }
    }

    return () => ({
        isTopItem,
        subMenuVNode,
        isDropdownMenu,
        tooltipContents,
        iconVNode,
        titleVNodes,
        position,
        isCollapse,
    });
}

export function isDropdown(rootMenu: Menu) {
    const {collapse, type} = rootMenu.get();
    return collapse || type === 'horizontal';
}
