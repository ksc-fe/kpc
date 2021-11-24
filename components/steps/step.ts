import {Component, TypeDefs} from 'intact';
import template from './step.vdt';

export interface StepProps {
    title?: string
    // properties created by parent Steps 
    index?: number
}

const typeDefs: Required<TypeDefs<StepProps>> = {
    title: String,
    index: Number
};

export class Step extends Component<StepProps> {
    static template = template;
    static typeDefs = typeDefs;
}
