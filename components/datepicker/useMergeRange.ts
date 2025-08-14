import {useInstance} from 'intact';
import {Dayjs} from './dayjs';
import type {Datepicker} from './index';
import {DayjsValueRange, DayjsValue} from './useValueBase';
import type {useFormats} from './useFormats';

// TODO isMerge
export function useMergeRange(formats: ReturnType<typeof useFormats>) {
    const instance = useInstance() as Datepicker;

    function _mergeRanges(dayjsValue: DayjsValue, getShowString: (value: Dayjs) => string) {
        const ranges = dayjsValue
            .filter(Array.isArray)
            .map(range => ({
                start: (range as DayjsValueRange)[0],
                end: (range as DayjsValueRange)[1]
            }))
            .sort((a, b) => a.start.valueOf() - b.start.valueOf());
        
        if (ranges.length === 0) return [];
        
        // 合并有交集的时间范围
        const mergedRange = ranges.reduce((acc, curr) => {
            if (!acc) return curr;
            
            return {
                start: acc.start,
                end: curr.end.valueOf() > acc.end.valueOf() ? curr.end : acc.end
            };
        });
        
        return [`${getShowString(mergedRange.start)} ~ ${getShowString(mergedRange.end)}`];
    }

    function formatMultipleValues(dayjsValue: DayjsValue, results: string[]): string[] {
        // const {isMerge, nowrap} = instance.get();
        
        // if (isMerge && nowrap) {
        //     const mergedResults = _mergeRanges(dayjsValue, (v: Dayjs) => v.format(formats.getShowFormat()));
        //     if (mergedResults.length > 0) {
        //         return [
        //             ...mergedResults,
        //             ...results.slice(1).map((result, index) => `${result}-${index}`)
        //         ];
        //     }
        // }
        
        return results;
    }

    return {
        formatMultipleValues
    };
}
