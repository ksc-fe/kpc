import {Component, TypeDefs} from 'intact';
import template from './index.vdt';
import {useActiveValue} from './useActiveValue';
import type {Events} from '../types';
import { useConfigContext } from '../config';

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

export interface RateBlocks {
    icon: null
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
});

const events: Events<RateEvents> = {
    mouseleave: true,
};

export class Rate extends Component<RateProps, RateEvents, RateBlocks> {
    static template = template;
    static typeDefs = typeDefs;
    static defaults = defaults;
    static events = events;

    private activeValue = useActiveValue();
    private config = useConfigContext();
}
