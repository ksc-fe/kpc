import {Component, VNode, TypeDefs, inject, createRef} from 'intact';
import template from './index.vdt';
export * from './column';

export interface CardProps {
    title?: string | VNode
    type?: 'shadow' | 'border' | 'none',
}

export interface CardEvents { }

export interface CardBlocks {
    header: null
    title: null
    extra: null
}

const typeDefs: Required<TypeDefs<CardProps>> = {
    //TODO:
    title: [String/**, VNode */],
    type: ['shadow', 'border', 'none'],
};

const defaults = (): Partial<CardProps> => ({
    type: 'shadow'
});

export class Card extends Component<CardProps, CardEvents, CardBlocks> {
    static template = template;
    static typeDefs = typeDefs;
    static defaults = defaults;
}

