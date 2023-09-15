import { Component, TypeDefs } from 'intact';
import template from './index.vdt';
import { useCopy } from './useCopy';

export interface CopyProps {
    text: string;
}

const typeDefs: Required<TypeDefs<CopyProps>> = {
    text: String,
};

const defaults = (): Partial<CopyProps> => ({});

export class Copy extends Component<CopyProps> {
    static template = template;
    static typeDefs = typeDefs;
    static defaults = defaults;

    private copy = useCopy()
}
