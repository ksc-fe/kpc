import {Component, inject} from 'intact';
import {ROOT_MENU, Menu} from './menu'
import template from './title.vdt';
import { useConfigContext } from '../config';

export class MenuTitle extends Component {
    static template = template;

    public rootMenu = inject<Menu>(ROOT_MENU)!;
    private config =  useConfigContext();
}

