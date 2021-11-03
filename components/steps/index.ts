import {Component, TypeDefs} from 'intact';
import template from './index.vdt';
import {bind} from '../utils';
export * from './step';

export interface StepsProps {
    value?: number
    status?: 'normal' | 'error'
    type?: 'default' | 'line' | 'simple'
    clickable?: boolean
}

const typeDefs: Required<TypeDefs<StepsProps>> = {
    value: Number,
    status: ['normal', 'error'],
    type: ['default', 'line', 'simple'],
    clickable: Boolean
};

const defaults = (): Partial<StepsProps> => ({
    value: 0,
    status: 'normal',
    type: 'default',
});

export class Steps<T extends StepsProps = StepsProps> extends Component<T> {
    static template = template;
    static typeDefs = typeDefs;
    static defaults = defaults;

    @bind
    private changeIndex(index: number) {
        const {value, clickable} = this.get();
        if (clickable && value! > index) {
            this.set('value', index);
        }
    }
}
