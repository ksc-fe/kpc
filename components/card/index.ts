import {Component, VNode, TypeDefs, inject, createRef} from 'intact';
import template from './index.vdt';
export * from './column';

export interface CardProps {
    title?: string | VNode
    type?: 'shadow' | 'border' | 'none',
}

const typeDefs: Required<TypeDefs<CardProps>> = {
    //TODO:
    title: [String/**, VNode */],
    type: ['shadow', 'border', 'none'],
};

const defaults = (): Partial<CardProps> => ({
    type: 'shadow'
});

export class Card extends Component<CardProps> {
    static template = template;
    static typeDefs = typeDefs;
    static defaults = defaults;
}

