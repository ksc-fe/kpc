import {Component, TypeDefs, inject} from 'intact';
import template from './step.vdt';
import {STEPS, Steps} from './index'
import {bind} from '../utils';

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

    public steps = inject<Steps>(STEPS)!;

    @bind
    onChangeIndex(){
        const {value, clickable} = this.steps.get();
        const {index} = this.get();
        if(value! > index! && clickable) {
            this.steps.set('value', index);
        }
    }
}