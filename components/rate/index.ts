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

export interface RateEvents {
    mouseleave: [MouseEvent]
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

export class Rate extends Component<RateProps, RateEvents> {
    static template = template;
    static typeDefs = typeDefs;
    static defaults = defaults;

    private activeValue = useActiveValue();
}
