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

export default class Split<T extends SplitProps = SplitProps> extends Component<T> {
    static template = template;
    static typeDefs = typeDefs;
    static defaults = defaults;

    public splitRef = createRef<HTMLDivElement>();
    public totalSize: number = 0;
    public min: number = 0;
    public max: number = 0;

    private drag = useDraggable();

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

    mounted() {
        const {mode} = this.get();
        this.totalSize = this.splitRef.value![
            mode === 'horizontal'
                ? 'offsetWidth'
                : 'offsetHeight'
        ];
    }
}