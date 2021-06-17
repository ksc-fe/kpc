import {Component, TypeDefs} from 'intact';
import template from './index.vdt';
import BreadcrumbItem from './item';

export interface breadProps {
    separator?: String
}

const typeDefs: Required<TypeDefs<breadProps>> = {
    separator: String,
};

const defaults: Partial<breadProps> = {
    separator: undefined,
} 

export default class Breadcrumb<T extends breadProps = breadProps> extends Component<T> {
    static template = template;
    static typeDefs = typeDefs;
    static defaults = defaults;
}

export {Breadcrumb, BreadcrumbItem};
