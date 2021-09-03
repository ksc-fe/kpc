import {Component, TypeDefs, createRef} from 'intact';
import template from './index.vdt';
import {useReceive} from '../../hooks/useReceive';
import {useDraggable} from './useDraggable';

export type Mode = 'horizontal' | 'vertical'

interface SplitProps {
    mode?: Mode
    firstSize?: string
    lastSize?: string
    min?: number | string
    max?: number | string
}

type ParsedValue = {
    percent?: string
    op?: string
    px?: string | number
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

const VALUE_REG = /(?:(\d+(?:\.\d+)?)%)?([\+\-])?(\d+(?:\.\d+)?)?/;
const cache: {[key: string]: ParsedValue} = {};
function parseValue(v: number | string | undefined): ParsedValue {
    if(typeof v === 'undefined') return cache;
    if(typeof v === 'number') return {px: v};
    
    if(!cache[v]) {
        const matches = v.match(VALUE_REG) || [];
        cache[v] = {percent: matches[1], op: matches[2], px: matches[3]};
    }

    return cache[v];
}

export default class Split<T extends SplitProps = SplitProps> extends Component<T> {
    static template = template;
    static typeDefs = typeDefs;
    static defaults = defaults;

    public splitRef = createRef<HTMLDivElement>();
    public min: number = 0;
    public max: number = 0;

    private drag = useDraggable();
    private totalSize: number = 0;

    init() {
        const fixSize = (): void => {
            const {firstSize, lastSize} = this.get();
            if(firstSize === 'auto' && lastSize === 'auto') {
                this.set('firstSize', '50%');
            } else if (firstSize !== 'auto' && lastSize !== 'auto') {
                this.set('lastSize', 'auto');
            }
        };

        useReceive<Split>(['firstSize', 'lastSize'], fixSize);

        fixSize();
    }

    setMouseStyle(set = false): void {
        document.body.style.cursor = set ? 'row-resize' : '';
    }

    mounted() {
        const {mode} = this.get();
        this.totalSize = this.splitRef.value![
            mode === 'horizontal'
                ? 'offsetWidth'
                : 'offsetHeight'
        ];
    }
    
    calcMinMaxValue(): void {
        let {min, max} = this.get();
        this.min = this.generateValue(parseValue(min));
        this.max = this.generateValue(parseValue(max));
    }

    generateValue(val: ParsedValue): number {
        let {percent, op, px} = val;
        if(percent) {
            let value = this.totalSize * Number(percent) / 100;
            if(px) {
                px = Number(px);
                value = op === '-' ? value - px : value + px;
            }
            return value;
        }
        return Number(px);
    }
}