import {Component, TypeDefs, createRef} from 'intact';
import template from './index.vdt';
import {useSize} from './useSize';
import {useDraggable} from './useDraggable';
import {Mode} from './styles';
import type {Events} from '../types';
import { useConfigContext } from '../config';

export interface SplitProps {
    mode?: Mode
    firstSize?: string
    lastSize?: string
    min?: number | string
    max?: number | string
}

export interface SplitEvents {
    moveStart: [MouseEvent]
    moving: [MouseEvent]
    moveEnd: [MouseEvent | undefined]
}

export interface SplitBlocks {
    first: null
    last: null
    drag: null
}

const typeDefs: Required<TypeDefs<SplitProps>> = {
    mode: String,
    firstSize: String,
    lastSize: String,
    min: [String ,Number],
    max: [String ,Number]
};

const defaults = (): Partial<SplitProps> => ({
    mode: 'horizontal',
    firstSize: 'auto',
    lastSize: 'auto',
    min: 0,
    max: '100%-6'
});

const events: Events<SplitEvents> = {
    moveStart: true,
    moving: true,
    moveEnd: true,
};

export class Split extends Component<SplitProps, SplitEvents, SplitBlocks> {
    static template = template;
    static typeDefs = typeDefs;
    static defaults = defaults;
    static events = events;

    private size = useSize();
    private drag = useDraggable(
        this.size.firstSize,
        this.size.lastSize,
    );
    private config = useConfigContext();
}
