import {Component, TypeDefs} from 'intact';
import template from './index.vdt';


export interface KingVersionProps {

}

const typeDefs: Required<TypeDefs<KingVersionProps>> = {

};


const defaults = (): Partial<KingVersionProps> => ({

});

export class KingVersion extends Component {
    static template = template;
    static typeDefs = typeDefs;
    static defaults = defaults;

    init() {

    }
}
