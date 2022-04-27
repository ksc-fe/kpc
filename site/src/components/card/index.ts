import {Component, TypeDefs} from 'intact';
import template from './index.vdt';
import {Link} from '../link';

export interface CardProps {
    mainTitle: string
    subTitle: string
    href: string
}

const typeDefs: Required<TypeDefs<CardProps>> = {
    mainTitle: String,
    subTitle: String,
    href: String
};


const defaults = (): Partial<CardProps> => ({
    
});

export class Card extends Component {
    static template = template;
    static typeDefs = typeDefs;
    static defaults = defaults;

    goHref() {
        Link.to(this.get('href'));
    }
}
