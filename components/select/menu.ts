import {Component, TypeDefs} from 'intact';
import template from './menu.vdt';

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
