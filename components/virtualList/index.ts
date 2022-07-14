import {
    Component,
    TypeDefs,
    VNode,
    nextTick,
    Children,
    createVNode as h,
    createElementVNode,
    className as getClassName,
    normalizeChildren
} from 'intact';

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

export type ListRange = {
    start: number
    end: number
    paddingTop: number
    paddingBottom: number
}

const CALC_TYPE = {
    INIT: Symbol('init'),
    FIXED: Symbol('fixed'),
    DYNAMIC: Symbol('dynamic')
};

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
        const vt = this;
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
            'ev-scroll': function(this: HTMLDivElement) {
                vt.handleScroll(this.scrollTop);
            }
        }
        const {start, end} = this.get();
        const {paddingTop, paddingBottom} = this.getRange();
        const innerAttrs = {style: `padding-top: ${paddingTop}px; padding-bottom: ${paddingBottom}px`};
        const croppedChildren = this.normalizedVnodes.slice(start, end + 1);
        const vnode = this.vnode = h('div', outerAttrs, h('div', innerAttrs, croppedChildren));

        return vnode;
    };

    private vnode: VNode | null = null;

    private normalizedVnodes: VNode[] = [];

    private hasComputedAll: boolean | undefined = undefined;

    private fixedSizeValue: number = 0;

    private firstRangeTotalSize: number = 0;

    private firstRangeAverageSize: number = 0;

    private offset: number = 0;

    private renderedIndex: number = 0;

    private sizes: Map<number, number> = new Map();

    private calcType: Symbol = CALC_TYPE.INIT;

    private range: ListRange = {
        start: 0,
        end: 0,
        paddingTop: 0,
        paddingBottom: 0
    };

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

        this.setItemSize();
    }

    setItemSize(): void {
        const dom = this.vnode?.dom;
        const items = (dom?.firstChild as HTMLDivElement).children;
        const start = this.get('start');

        for(let i = 0;i < items.length; i++) {
            const item = items[i];
            const size = (item as HTMLDivElement).offsetHeight;
            const index = start + i;
            
            if(this.sizes.get(index) == undefined) {
                this.saveSize(index, size);
            }
        }
    }

    isFixedType(): boolean {
        const {isFixedType} = this.get();
        return isFixedType !== undefined
            ? isFixedType
            : this.calcType === CALC_TYPE.FIXED;
    }

    getEstimateSize(): number {
        return this.isFixedType()
            ? this.fixedSizeValue
            : (this.get('estimateSize') ?? this.firstRangeAverageSize);
    }

    getRange(): ListRange {
        const range: ListRange = Object.create(null);
        range.start = this.range.start;
        range.end = this.range.end;
        range.paddingTop = this.range.paddingTop;
        range.paddingBottom = this.range.paddingBottom;

        return range;
    }

    getLastIndex(): number {
        return this.get('total') - 1;
    }

    getEndByStart(start: number): number {
        const theoreticalEnd = start + this.get('keeps')! - 1;
        return Math.min(theoreticalEnd, this.getLastIndex());
    }

    saveSize(itemIndex: number, size: number): void {
        const {keeps, total} = this.get();
        this.sizes.set(itemIndex, size);

        if(this.calcType === CALC_TYPE.INIT) {
            this.fixedSizeValue = size;
            this.calcType = CALC_TYPE.FIXED;
        } else if(this.calcType === CALC_TYPE.FIXED && this.fixedSizeValue !== size) {
            this.calcType = CALC_TYPE.DYNAMIC;
        }

        // Computed average size of item when render first group of list
        if(this.sizes.size < Math.min(keeps!, total)) {
            this.firstRangeTotalSize = [...this.sizes.values()].reduce((p, c) => p + c, 0);
            this.firstRangeAverageSize = Math.round(this.firstRangeTotalSize / this.sizes.size);
        }

        // Set initial size of item
        if(++this.renderedIndex == keeps) {
            this.initItems();
        }
    }

    initItems(): void {
        this.checkRange(0, this.getEndByStart(0));
    }

    handleScroll(offset: number): void {
        const isDown = offset > this.offset;
        this.offset = offset;

        if(isDown) {
            this.handleBehind();
        } else {
            this.handleFront();
        }
    }

    handleBehind(): void {
        const overs = this.getPassedItems();

        // Range should not change if scroll overs within buffer
        if(overs < this.range.start + this.get('buffer')!) {
            return;
        }

        this.checkRange(overs, this.getEndByStart(overs));
    }

    handleFront(): void {
        const overs = this.getPassedItems();

        if(overs > this.range.start) {
            return;
        }

        const start = Math.max(overs - this.get('buffer')!, 0);
        this.checkRange(start, this.getEndByStart(start));
    }

    getPassedItems(): number {
        if(this.isFixedType()) {
            return Math.floor(this.offset / this.fixedSizeValue);
        }

        // If item's size is dynamic, get passed items according  
        // to current scroll offset and size of item in sizes
        let low = 0;
        let middle = 0;
        let high = this.get('total');
        let middleOffset = 0;

        while(low <= high) {
            middle = low + Math.floor((high - low) / 2);
            middleOffset = this.getIndexOffset(middle);

            if(middleOffset === this.offset) {
                return middle;
            } else if(middleOffset < this.offset) {
                low = middle + 1;
            } else if(middleOffset > this.offset) {
                high = middle - 1;
            }
        }

        return low > 0 ? --low : 0;
    }

    getIndexOffset(givenIndex: number): number {
        if(!givenIndex) return 0;

        let offset = 0;
        let indexSize = 0;
        for(let index = 0; index < givenIndex; index++) {
            indexSize = this.sizes.get(index)!;
            offset = offset + (typeof indexSize === 'number' ? indexSize : this.getEstimateSize());
        }

        return offset;
    }

    checkRange(start: number, end: number): void {
        const keeps = this.get('keeps')!
        const total = this.get('total');

        // Render all if total <= keeps
        if(total <= keeps) {
            start = 0;
            end = this.getLastIndex();
        } else if(end - start < keeps - 1) {
            start = end - keeps + 1;
        }

        this.updateRange(start, end);
    }

    setRange(): void {
        const {start, end} = this.getRange();
        this.set('start', start);
        this.set('end', end);

        nextTick(this.setItemSize.bind(this));
    }

    updateRange(start: number, end: number): void {
        this.range.start = start;
        this.range.end = end;
        this.range.paddingTop = this.getPadFront();
        this.range.paddingBottom = this.getPadBehind();

        this.setRange();
    }

    getPadFront(): number {
        if(this.isFixedType()) {
            return this.fixedSizeValue * this.range.start;
        } else {
            return this.getIndexOffset(this.range.start);
        }
    }

    getPadBehind(): number {
        const end = this.range.end;
        const lastIndex = this.getLastIndex();

        if(this.isFixedType()) {
            return (lastIndex - end) * this.fixedSizeValue;
        }

        if(end === lastIndex && this.hasComputedAll === undefined) {
            this.hasComputedAll = true;
        }

        if(this.hasComputedAll) {
            // If all item has been computed, return an actual size
            return this.getIndexOffset(lastIndex) - this.getIndexOffset(end);
        } else {
            // Return a estimated value before all items has computed
            return (lastIndex - end) * this.getEstimateSize();
        }
    }
}