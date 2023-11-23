import {Component, TypeDefs} from 'intact';
import template from './index.vdt';
import { useConfigContext } from '../config';

export * from './item';

export interface BreadcrumbProps {
    separator?: string
}

export interface BreadcrumbEvents { }

export interface BreadcrumbBlocks {
    separator: null
}

const typeDefs: Required<TypeDefs<BreadcrumbProps>> = {
    separator: String,
};

const defaults = (): Partial<BreadcrumbProps> => ({
    separator: '>'
});

export class Breadcrumb extends Component<BreadcrumbProps, BreadcrumbEvents, BreadcrumbBlocks> {
    static template = template;
    static typeDefs = typeDefs;
    static defaults = defaults;

    private config = useConfigContext();
}
