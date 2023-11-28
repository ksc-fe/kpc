import { Component, TypeDefs } from 'intact';
import template from './index.vdt';
import { useCopy } from './useCopy';
import { Events } from '../types';
import { useConfigContext } from '../config';

export interface CopyProps {
    text: string;
    showMessage?: boolean;
}

export interface CopyEvents {
    success: [string]
    error: []
    click: [MouseEvent]
}

const typeDefs: Required<TypeDefs<CopyProps>> = {
    text: String,
    showMessage: Boolean,
};

const defaults = (): Partial<CopyProps> => ({
    showMessage: true,
});

const events: Events<CopyEvents> = {
    success: true,
    error: true,
    click: true,
};

export class Copy extends Component<CopyProps, CopyEvents> {
    static template = template;
    static typeDefs = typeDefs;
    static defaults = defaults;
    static events = events;

    private copy = useCopy();
    private config = useConfigContext();
}
