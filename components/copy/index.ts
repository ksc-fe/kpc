import { Component, TypeDefs } from 'intact';
import template from './index.vdt';
import { useCopy } from './useCopy';
import { Events } from '../types';

export interface CopyProps {
    text: string;
}

export interface CopyEvents {
    success: [string]
    error: []
}

const typeDefs: Required<TypeDefs<CopyProps>> = {
    text: String,
};

const defaults = (): Partial<CopyProps> => ({});

const events: Events<CopyEvents> = {
    success: true,
    error: true,
};

export class Copy extends Component<CopyProps, CopyEvents> {
    static template = template;
    static typeDefs = typeDefs;
    static defaults = defaults;
    static events = events;

    private copy = useCopy()
}
