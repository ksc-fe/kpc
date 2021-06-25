import {Component, TypeDefs, inject, Children, Blocks} from 'intact';
import template from './menu.vdt';
import {SELECT} from './constants';
import type {Select} from './select';
import {isNullOrUndefined, isStringOrNumber, EMPTY_OBJ} from 'intact-shared';
import {getTextByChildren, eachChildren} from '../utils';
import {useCard} from './useCard';
import {useSearchable} from './useSearchable';

export class SelectMenu extends Component {
    static template = template;

    public select: Select | null = null;
    private card: ReturnType<typeof useCard> | null = null;
    private searchable: ReturnType<typeof useSearchable> | null = null;
    
    init() {
        const select = this.select = inject(SELECT)!;

        this.card = useCard(select.label!.activeIndex);
        this.searchable = useSearchable();
    }
}
