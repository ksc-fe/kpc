import {Component, TypeDefs, inject, provide, VNode, Key} from 'intact';
import {ROOT_MENU, MENU, Menu, MenuProps} from './menu'
import template from './title.vdt';
import {useExpanded} from './useExpanded';
import {useDropdown} from './useDropdown';
import {useRecordItem} from '../../hooks/useRecordComponent';
import {MENU_RECORD_KEY, useHighlightItem} from './useHighlight';
import { useConfigContext } from '../config';

export const MENU_TITLE = 'MenuTitle';

export class MenuTitle extends Component {
    static template = template;

    public rootMenu = inject<Menu>(ROOT_MENU)!;
    public parentMenu = inject<Menu>(MENU)!;
    public menuTitle = inject<MenuTitle | null>(MENU_TITLE, null);

    private expanded = useExpanded(this.rootMenu, this.parentMenu);
    private dropdown = useDropdown(this.rootMenu, this.parentMenu);
    private config =  useConfigContext();

    init() {
        provide(MENU_TITLE, this);
        useRecordItem(MENU_RECORD_KEY);
        useHighlightItem();
    }
}

