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

export class Breadcrumb<T extends BreadcrumbProps = BreadcrumbProps> extends Component<T> {
    static template = template;
    static typeDefs = typeDefs;
    static defaults = defaults;
}
