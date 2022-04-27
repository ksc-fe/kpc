import {Component, TypeDefs} from 'intact';
import template from './index.vdt';

export interface FooterProps {
    bgColor: string
}

export interface FooterEvents {}

const typeDefs: Required<TypeDefs<FooterProps>> = {
    bgColor: String
};


const defaults = (): Partial<FooterProps> => ({
    bgColor: '#ffffff'
});

export class Footer extends Component<FooterProps> {
    static template = template;
    static typeDefs = typeDefs;
    static defaults = defaults;
}
