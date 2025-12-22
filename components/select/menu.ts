import {Component, TypeDefs, inject, Children, Blocks} from 'intact';
import template from './menu.vdt';
import {SELECT} from './constants';
import type {Select} from './select';
import {isNullOrUndefined, isStringOrNumber, EMPTY_OBJ} from 'intact-shared';
import {getTextByChildren, eachChildren} from '../utils';
import {useCard} from './useCard';
import {useSearchable} from './useSearchable';
import { useConfigContext } from '../config';

export class SelectMenu extends Component<{values: any[]}> {
    static template = template;

    public select: Select<any, boolean> = inject(SELECT)!;
    private card = useCard(this.select.label.activeIndices, this.select.input.keywords);
    private searchable = useSearchable();
    private config = useConfigContext();
}
