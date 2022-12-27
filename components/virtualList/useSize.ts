import {useInstance} from 'intact';
import {Virtual} from './index';

export type Size = {
    getLastIndex: () => number
    setItemSize: () => void
    getPadFront: () => number
    getPadBehind: () => number
    getPassedItems: () => number
    getEndByStart: (start: number) => number
}

const CALC_TYPE = {
    INIT: Symbol('init'),
    FIXED: Symbol('fixed'),
    DYNAMIC: Symbol('dynamic')
};

export function useSize(): Size {
    const instance = useInstance() as Virtual;
    const sizes: Map<number, number> = new Map();

    let calcType = CALC_TYPE.INIT;
    let firstRangeTotalSize = 0;
    let firstRangeAverageSize = 0;
    let renderedIndex = 0;
    let fixedSizeValue = 0;
    let hasComputedAll: boolean | undefined = undefined;

    function isFixedType(): boolean {
        const {isFixedType} = instance.get();
        return isFixedType !== undefined
            ? isFixedType
            : calcType === CALC_TYPE.FIXED;
    }

    function getEstimateSize(): number {
        return isFixedType()
            ? fixedSizeValue
            : (instance.get('estimateSize') ?? firstRangeAverageSize);
    }

    function getLastIndex(): number {
        return instance.get('total') - 1;
    }

    function getEndByStart(start: number): number {
        const theoreticalEnd = start + instance.get('keeps')! - 1;
        return Math.min(theoreticalEnd, getLastIndex());
    }

    function saveSize(itemIndex: number, size: number): void {
        const {keeps, total} = instance.get();
        sizes.set(itemIndex, size);

        if(calcType === CALC_TYPE.INIT) {
            fixedSizeValue = size;
            calcType = CALC_TYPE.FIXED;
        } else if(calcType === CALC_TYPE.FIXED && fixedSizeValue !== size) {
            calcType = CALC_TYPE.DYNAMIC;
        }

        // Computed average size of item when render first group of list
        if(sizes.size < Math.min(keeps!, total)) {
            firstRangeTotalSize = [...sizes.values()].reduce((p, c) => p + c, 0);
            firstRangeAverageSize = Math.round(firstRangeTotalSize / sizes.size);
        }

        // Set initial size of item
        if(++renderedIndex == keeps) {
            instance.initItems();
        }
    }

    function setItemSize(): void {
        const dom = instance.vnode?.dom;
        const items = (dom?.firstChild as HTMLDivElement).children;
        const start = instance.get('start');

        for(let i = 0;i < items.length; i++) {
            const item = items[i];
            const size = (item as HTMLDivElement).offsetHeight;
            const index = start + i;
            
            if(sizes.get(index) == undefined) {
                saveSize(index, size);
            }
        }
    }

    function getIndexOffset(givenIndex: number): number {
        if(!givenIndex) return 0;

        let offset = 0;
        let indexSize = 0;
        for(let index = 0; index < givenIndex; index++) {
            indexSize = sizes.get(index)!;
            offset = offset + (typeof indexSize === 'number' ? indexSize : getEstimateSize());
        }

        return offset;
    }

    function getPadFront(): number {
        if(isFixedType()) {
            return fixedSizeValue * instance.rangeInfo.start;
        } else {
            return getIndexOffset(instance.rangeInfo.start);
        }
    }

    function getPadBehind(): number {
        const end = instance.rangeInfo.end;
        const lastIndex = getLastIndex();

        if(isFixedType()) {
            return (lastIndex - end) * fixedSizeValue;
        }

        if(end === lastIndex && hasComputedAll === undefined) {
            hasComputedAll = true;
        }

        if(hasComputedAll) {
            // If all item has been computed, return an actual size
            return getIndexOffset(lastIndex) - getIndexOffset(end);
        } else {
            // Return a estimated value before all items has computed
            return (lastIndex - end) * getEstimateSize();
        }
    }
    
    function getPassedItems(): number {
        if(isFixedType()) {
            return Math.floor(instance.offset / fixedSizeValue);
        }

        // If item's size is dynamic, get passed items according  
        // to current scroll offset and size of item in sizes
        let low = 0;
        let middle = 0;
        let high = instance.get('total');
        let middleOffset = 0;

        while(low <= high) {
            middle = low + Math.floor((high - low) / 2);
            middleOffset = getIndexOffset(middle);

            if(middleOffset === instance.offset) {
                return middle;
            } else if(middleOffset < instance.offset) {
                low = middle + 1;
            } else if(middleOffset > instance.offset) {
                high = middle - 1;
            }
        }

        return low > 0 ? --low : 0;
    }

    return {
        getLastIndex,
        setItemSize,
        getPadFront,
        getPadBehind,
        getPassedItems,
        getEndByStart
    }
}