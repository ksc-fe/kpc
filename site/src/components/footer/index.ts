import {Component, TypeDefs} from 'intact';
import template from './index.vdt';

export interface FooterProps {
    
}

export interface FooterEvents { }

const typeDefs: Required<TypeDefs<FooterProps>> = {
    
};


const defaults = (): Partial<FooterProps> => ({

});

export class Footer extends Component<FooterProps> {
    static template = template;
    static typeDefs = typeDefs;
    static defaults = defaults;

    init() {

    }
}
