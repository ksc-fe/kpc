import {Component, TypeDefs} from 'intact';
import template from './column.vdt';

export interface CardColumnProps {
    width?: string
    center?: boolean
}

const typeDefs: Required<TypeDefs<CardColumnProps>> = {
    width: String,
    center: Boolean
};

export class CardColumn<T extends CardColumnProps = CardColumnProps> extends Component<T> {
    static template = template;
    static typeDefs = typeDefs;
}

