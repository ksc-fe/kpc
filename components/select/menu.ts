import {Component, TypeDefs, inject} from 'intact';
import template from './menu.vdt';
import {SELECT} from './constants';
import type {Select} from './select';
import {isNullOrUndefined, isStringOrNumber, EMPTY_OBJ} from 'intact-shared';
import {getTextByChildren} from '../utils';

export interface SelectMenuProps {
    card?: boolean
    searchable?: boolean
}

const typeDefs: Required<TypeDefs<SelectMenuProps>> = {
    card: Boolean,
    searchable: Boolean,
};

export class SelectMenu<T extends SelectMenuProps = SelectMenuProps> extends Component<T> {
    static template = template;
    static typeDefs = typeDefs;
}
