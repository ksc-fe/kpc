import {
    Component,
    TypeDefs,
    VNode,
    Children,
    createVNode as h,
    className as getClassName,
    normalizeChildren
} from 'intact';
import {useSize} from './useSize';
import {useRange} from './useRange';
import {useScroll} from './useScroll';

export interface VirtualProps {
    keeps?: number
    buffer?: number
    estimateSize?: number
    total: number
    isFixedType?: boolean
    nativeProps?: any
    start: number
    end: number
    enableVirtualList?: boolean | string
}

export type RangeInfo = {
    start: number
    end: number
    paddingTop: number
    paddingBottom: number
}

const typeDefs: Required<TypeDefs<VirtualProps>> = {
    keeps: Number,
    buffer: Number,
    estimateSize: Number,
    total: Number,
    isFixedType: Boolean,
    nativeProps: Object,
    start: Number,
    end: Number,
    enableVirtualList: [Boolean, String]
};

const defaults = (): Partial<VirtualProps> => ({
    keeps: 30,
    buffer: 10
});

export class Virtual extends Component<VirtualProps> {
    static typeDefs = typeDefs;
    static defaults = defaults;
    static template = function(this: Virtual) {
        const children: Children = this.get('children');
        const nativeProps = this.$vNode.props?.nativeProps;
        const enableVirtualList = this.get('enableVirtualList');

        if(nativeProps.class) {
            nativeProps.class = getClassName(nativeProps.class);
        }
        
        const auto = enableVirtualList === 'auto' && this.normalizedVnodes.length < 200;
        if(!enableVirtualList || auto) {
            return h('div', nativeProps, children);
        }

        const outerAttrs = {
            ...nativeProps,
            'ev-scroll': (e: WheelEvent) => this.scroll.handleScroll((e.target as HTMLElement).scrollTop)
        }
        const {start, end} = this.get();
        const {paddingTop, paddingBottom} = this.range.getRange();
        const innerAttrs = {style: `padding-top: ${paddingTop}px; padding-bottom: ${paddingBottom}px`};
        const croppedChildren = this.normalizedVnodes.slice(start, end + 1);
        const vnode = this.vnode = h('div', outerAttrs, h('div', innerAttrs, croppedChildren));

        return vnode;
    };

    vnode: VNode | null = null;
    offset: number = 0;

    private normalizedVnodes: VNode[] = [];

    rangeInfo: RangeInfo = {
        start: 0,
        end: 0,
        paddingTop: 0,
        paddingBottom: 0
    };

    private size = useSize();
    private range = useRange(this.size);
    private scroll = useScroll(this.size, this.range);

    init() {
        if(!this.get('enableVirtualList')) return;

        const keeps = this.get('keeps')!;
        const children = this.get('children') as VNode;

        this.set('start', 0);
        this.set('end', keeps - 1);
        
        if(Array.isArray(children) && children.length == 2) {
            this.set('total', children[1].length);
        }

        this.watch('children', (newValue) => {
            const fakeVNode = {} as VNode;
            normalizeChildren(fakeVNode, newValue);
            this.normalizedVnodes = fakeVNode.children as VNode[];
        })
    }

    mounted() {
        if(!this.get('enableVirtualList')) return;
        this.size.setItemSize();
    }

    initItems(): void {
        this.range.checkRange(0, this.size.getEndByStart(0));
    }
}