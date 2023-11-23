import {Component, TypeDefs} from 'intact';
import template from './column.vdt';
import { useConfigContext } from '../config';

export interface CardColumnProps {
    width?: string
    center?: boolean
}

const typeDefs: Required<TypeDefs<CardColumnProps>> = {
    width: String,
    center: Boolean
};

export class CardColumn extends Component<CardColumnProps> {
    static template = template;
    static typeDefs = typeDefs;

    private config = useConfigContext();
}

