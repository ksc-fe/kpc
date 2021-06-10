import {Component, VNode, TypeDefs, inject, createRef} from 'intact';
import template from './index.vdt';
import CardColumn from './column';

export interface CardProps {
    title?: string | VNode
    type?: 'shadow' | 'border' | 'none',
}

const typeDefs: Required<TypeDefs<CardProps>> = {
    title: String,
    // TODO: modify
    // title: [String, VNode],
    type: ['shadow', 'border', 'none'],
};

const defaults: Partial<CardProps> = {
    type: 'shadow'
} 

export default class Card<T extends CardProps = CardProps> extends Component<T> {
    static template = template;
    static typeDefs = typeDefs;
    static defaults = defaults;
}

export {Card, CardColumn};
