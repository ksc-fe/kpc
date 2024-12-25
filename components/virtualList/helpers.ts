import { Children } from 'intact';

export interface HeightManagerOptions {
    defaultHeight: number;
    onTotalHeightChange: (height: number) => void;
    getItems: () => Children[] | any[];
    getKey?: (item: any, index: number) => string | number; 
}

export interface HeightManager {
    batchUpdate: (elements: { key: string | number; element: HTMLElement }[]) => void;
    getItemHeight: (key: string | number) => number;
    clear: () => void;
    getAllHeights: () => number[];
    calculateTotalHeight: () => number;
    calculateVisibleRange: (scrollTop: number, clientHeight: number, bufferSize: number) => VisibleRange;
}

export interface VisibleRange {
    start: number;
    end: number;
    translateY: number;
}

// create height manager
export const createHeightManager = (options: HeightManagerOptions): HeightManager => {
    const { defaultHeight, onTotalHeightChange, getItems, getKey } = options;
    const cache = new Map<string | number, number>();
    
    const calculateTotalHeight = () => {
        const items = getItems();
        const itemCount = Array.isArray(items) ? items.length : items;
        let height = 0;
        
        for (let i = 0; i < itemCount; i++) {
            height += cache.get(getKey ? getKey(items[i], i) : i) || defaultHeight;
        }
        onTotalHeightChange(height);
        return height;
    };

    const batchUpdate = (
        elements: { key: string | number; element: HTMLElement }[]
    ) => {
        let hasUpdates = false;
        
        elements.forEach(({ key, element }) => {
            const height = element.offsetHeight;
            if (height > 0 && cache.get(key) !== height) {
                cache.set(key, height);
                hasUpdates = true;
            }
        });

        if (hasUpdates) {
            calculateTotalHeight();
        }
    };

    const getItemHeight = (key: string | number) => cache.get(key) || defaultHeight;

    const clear = () => {
        cache.clear();
        calculateTotalHeight();
    };
    
    const getAllHeights = () => Array.from(cache.values());

    const calculateVisibleRange = (
        scrollTop: number,
        clientHeight: number,
        bufferSize: number
    ): VisibleRange => {
        const items = getItems();
        const itemCount = Array.isArray(items) ? items.length : items;
        let accumulatedHeight = 0;
        let start = 0;
        let end = 0;

        // find start index
        while (start < itemCount) {
            const height = cache.get(start) || defaultHeight;
            if (accumulatedHeight + height > scrollTop - (bufferSize * defaultHeight)) {
                break;
            }
            accumulatedHeight += height;
            start++;
        }

        // find end index
        start = Math.max(0, start);
        const startOffset = accumulatedHeight;

        // 查找结束索引
        end = start;
        while (
            end < itemCount && 
            accumulatedHeight < scrollTop + clientHeight + (bufferSize * defaultHeight)
        ) {
            accumulatedHeight += cache.get(end) || defaultHeight;
            end++;
        }

        end = Math.min(itemCount, end);

        return {
            start,
            end,
            translateY: startOffset
        };
    };

    return {
        batchUpdate,
        getItemHeight,
        clear,
        getAllHeights,
        calculateTotalHeight,
        calculateVisibleRange,
    };
};

