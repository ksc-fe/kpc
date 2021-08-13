import {Component, TypeDefs} from 'intact';
import template from './step.vdt';

export interface StepProps {
    title?: string
    // properties created by yourself
    index?: number
}

const typeDefs: Required<TypeDefs<StepProps>> = {
    title: String,
    index: Number
};

const defaults = (): Partial<StepProps> => ({
})

export class Step<T extends StepProps = StepProps> extends Component<T> {
    static template = template;
    static typeDefs = typeDefs;
    static defaults = defaults;
}