import {Component, TypeDefs, createRef} from 'intact';
import template from './index.vdt';
import {useSize} from './useSize';
import {useDraggable} from './useDraggable';
import {Mode} from './style';

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

export class Split extends Component<SplitProps, SplitEvents> {
    static template = template;
    static typeDefs = typeDefs;
    static defaults = defaults;

    private size = useSize();
    private drag = useDraggable(
        this.size.firstSize,
        this.size.lastSize,
    );
}
