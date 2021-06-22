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

    private select: Select | null = null;

    init() {
        this.select = inject(SELECT)!;
    }

    filter(props: any) {
        let {filterable, keywords, filter, searchable} = this.select!.get();

        if (!filterable && !searchable) return true;

        if (isNullOrUndefined(props.label)) {
            props = {...props, label: getTextByChildren(props.children)};
        }
        if (isNullOrUndefined(filter)) {
            filter = defaultFilter;
        }

        return filter(keywords, props);
    }
}

function defaultFilter(keywords: string | undefined | null, props: any): boolean {
    if (isNullOrUndefined(props)) {
        props = EMPTY_OBJ;
    }
    
    if (isNullOrUndefined(keywords) || keywords === '') return true;

    keywords = keywords.toLowerCase();

    const label = props.label;
    if (!isNullOrUndefined(label) && ~label.toLowerCase().indexOf(keywords)) {
        return true;
    }

    const value = props.value;
    if (isStringOrNumber(value) && ~String(value).toLowerCase().indexOf(keywords)) {
        return true;
    }

    return false;
}
