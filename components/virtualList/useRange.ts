import {useInstance, nextTick} from 'intact';
import {Virtual} from './index';
import {Size} from './useSize';

type RangeInfo = {
    start: number
    end: number
    paddingTop: number
    paddingBottom: number
}

export type Range = {
    checkRange: (start: number, end: number) => void
    getRange: () => RangeInfo
}

export function useRange(size: Size): Range {
    const instance = useInstance() as Virtual;

    function getRange(): RangeInfo {
        const range: RangeInfo = Object.create(null);
        const tmpRange = instance.rangeInfo;
        range.start = tmpRange.start;
        range.end = tmpRange.end;
        range.paddingTop = tmpRange.paddingTop;
        range.paddingBottom = tmpRange.paddingBottom;

        return range;
    }

    function checkRange(start: number, end: number): void {
        const keeps = instance.get('keeps')!;
        const total = instance.get('total');

        // Render all if total <= keeps
        if(total <= keeps) {
            start = 0;
            end = size.getLastIndex();
        } else if(end - start < keeps - 1) {
            start = end - keeps + 1;
        }

        updateRange(start, end);
    }

    function setRange(): void {
        const {start, end} = getRange();
        instance.set('start', start);
        instance.set('end', end);

        nextTick(size.setItemSize.bind(instance));
    }

    function updateRange(start: number, end: number): void {
        const tmp = instance.rangeInfo;
        tmp.start = start;
        tmp.end = end;
        tmp.paddingTop = size.getPadFront();
        tmp.paddingBottom = size.getPadBehind();

        setRange();
    }

    return {
        checkRange,
        getRange
    }
}