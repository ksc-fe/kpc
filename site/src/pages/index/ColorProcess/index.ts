import {Component, TypeDefs} from 'intact';
import template from './index.vdt';


export interface ColorProcessProps {

}

const typeDefs: Required<TypeDefs<ColorProcessProps>> = {

};


const defaults = (): Partial<ColorProcessProps> => ({

});

export class ColorProcess extends Component<ColorProcessProps> {
    static template = template;
    static typeDefs = typeDefs;
    static defaults = defaults;

    init() {

    }
}
