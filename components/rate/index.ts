import {Component, TypeDefs} from 'intact';
import template from './index.vdt';
import {useActiveValue} from './useActiveValue';

export interface RateProps {
    value?: number,
    count?: number,
    disabled?: boolean,
    half?: boolean,
    clearable?: boolean,
}

const typeDefs: Required<TypeDefs<RateProps>> = {
    value: Number,
    count: Number,
    disabled: Boolean,
    half: Boolean,
    clearable: Boolean,
};

const defaults = (): Partial<RateProps> => ({
    value: 0,
    count: 5,
})

export class Rate<T extends RateProps = RateProps> extends Component<T> {
    static template = template;
    static typeDefs = typeDefs;
    static defaults = defaults;

    private activeValue = useActiveValue();
}