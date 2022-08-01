import {useInstance} from 'intact';
import {Virtual} from './index';
import {Size} from './useSize';
import {Range} from './useRange';

type ScrollObj = {
    handleScroll: (offset: number) => void
}

export function useScroll(size: Size, range: Range): ScrollObj {
    const instance = useInstance() as Virtual;

    function handleScroll(offset: number): void {
        const isDown = offset > instance.offset;
        instance.offset = offset;

        if(isDown) {
            handleBehind();
        } else {
            handleFront();
        }
    }

    function handleBehind(): void {
        const overs = size.getPassedItems();

        // Range should not change if scroll overs within buffer
        if(overs < instance.rangeInfo.start + instance.get('buffer')!) {
            return;
        }

        range.checkRange(overs, size.getEndByStart(overs));
    }

    function handleFront(): void {
        const overs = size.getPassedItems();

        if(overs > instance.rangeInfo.start) {
            return;
        }

        const start = Math.max(overs - instance.get('buffer')!, 0);
        range.checkRange(start, size.getEndByStart(start));
    }

    return {
        handleScroll
    }
}