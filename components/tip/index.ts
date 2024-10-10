import {TypeDefs} from 'intact';
import template from './index.vdt';
import {Tag, TagProps, TagEvents, TagBlocks} from '../tag/base';

export interface TipProps extends TagProps { 
    showIcon?: boolean
}

export interface TipEvents extends TagEvents { }

export interface TipBlocks extends TagBlocks {
    title: null
    close: null
    icon: null
}

const typeDefs: Required<TypeDefs<TipProps>> = {
    ...Tag.typeDefs,
    showIcon: Boolean,
};

const defaults = (): Partial<TipProps> => ({
    ...Tag.defaults(),
    showIcon: false,
});

export class Tip extends Tag<TipProps, TipEvents, TipBlocks> {
    static template = template;
    static typeDefs = typeDefs;
    static defaults = defaults;
}
