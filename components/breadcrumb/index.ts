import {Component, TypeDefs} from 'intact';
import template from './index.vdt';
export * from './item';

export interface BreadcrumbProps {
    separator?: string
}

const typeDefs: Required<TypeDefs<BreadcrumbProps>> = {
    separator: String,
};

const defaults = (): Partial<BreadcrumbProps> => ({
    separator: '>'
});

export class Breadcrumb extends Component<BreadcrumbProps> {
    static template = template;
    static typeDefs = typeDefs;
    static defaults = defaults;
}
