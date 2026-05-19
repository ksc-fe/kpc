import {Component, TypeDefs} from 'intact';
import template from './index.vdt';
import type {Events} from '../types';
import {useConfigContext} from '../config';
import {useThinkExpand} from './useThinkExpand';

export interface ThinkProps {
    title?: string
    content?: string | number
    loading?: boolean
    blink?: boolean
    defaultExpanded?: boolean
    expanded?: boolean
    maxWidthString?: string
}

export interface ThinkEvents {
    expand: [boolean]
}

export interface ThinkBlocks {
    icon: null
    title: null
    extra: null
    content: null
}

const typeDefs: Required<TypeDefs<ThinkProps>> = {
    title: String,
    content: [String, Number],
    loading: Boolean,
    blink: Boolean,
    defaultExpanded: Boolean,
    expanded: Boolean,
    maxWidthString: String,
};

const defaults = (): Partial<ThinkProps> => ({
    title: undefined,
    content: undefined,
    loading: false,
    blink: false,
    defaultExpanded: true,
    expanded: undefined,
    maxWidthString: '640px',
});

const events: Events<ThinkEvents> = {
    expand: true,
};

export class Think extends Component<ThinkProps, ThinkEvents, ThinkBlocks> {
    static template = template;
    static typeDefs = typeDefs;
    static defaults = defaults;
    static events = events;

    private config = useConfigContext();
    private think = useThinkExpand();
}
