import {Component, TypeDefs} from 'intact';
import template from './index.vdt';


export interface CollapseProps {
    
}

const typeDefs: Required<TypeDefs<CollapseProps>> = {
    
};


const defaults = (): Partial<CollapseProps> => ({
    
});

export class NewFunction extends Component {
    static template = template;
    static typeDefs = typeDefs;
    static defaults = defaults;

    init() {
        
    }
}
