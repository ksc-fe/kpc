import {Component, inject} from 'intact';
import template from './group.vdt';
import {SELECT} from './constants';
import type {Select} from './select';

export class OptionGroup extends Component {
    static template = template;

    private select: Select | null = null;
    
    init() {
        this.select = inject(SELECT)!;
    }
}
