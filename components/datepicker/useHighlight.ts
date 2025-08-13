import {useInstance, onMounted, nextTick} from 'intact';
import type {Datepicker} from '.';
import { useState, watchState, State } from '../../hooks/useState';
import {last} from '../utils';
import { StateValue, StateValueRange, Value } from './useValueBase';
import dayjs, {Dayjs} from 'dayjs';

type FullDatepickerType = 
    | Datepicker<Value, true, true>
    | Datepicker<Value, true, false>
    | Datepicker<Value, false, true>
    | Datepicker<Value, false, false>;

export enum Position {
    Start,
    End
}

const DELIMITER_WIDTH = 14;
const fakeDate = dayjs();

export function useHighlight(
    value: State<StateValue>,
    getShowString: (value: Dayjs) => string,
    keywords: State<string>,
) {
    const instance = useInstance() as FullDatepickerType;
    const position = useState<Position>(Position.Start);
    const highlightWidth = useState<number>(0);
    const highlightLeft = useState<number>(0);

    /**
     * calculate the real width by rendering the showString to fake div
     */
    onMounted(() => {
        const showString = getShowString(fakeDate);
        instance.input.inputRef.value!.getStringWidth(showString).then((width) => {
            highlightWidth.set(width);
        });
    });

    /**
     * change the left of style on position changed
     */
    watchState(position, (position) => {
        highlightLeft.set(position === Position.Start ? 0 : highlightWidth.value + DELIMITER_WIDTH);
    });

    // if value is cleared reset the position to start
    instance.watch('value', (v) => {
        if (!v || Array.isArray(v) && !v.length) {
            position.set(Position.Start);
        }
    });

    function handleInputClick() {
        const { range, type } = instance.get();
        if (!range) return;

        const cursorPosition = instance.input.inputRef.value!.getSelectionStart();

        const showString = getShowString(fakeDate);
        if (!cursorPosition || cursorPosition <= showString.length + 1 /* one whitespace */) {
            position.set(Position.Start);
        } else {
            position.set(Position.End);
        }
    }

    function togglePosition() {
        position.set(position.value === Position.Start ? Position.End : Position.Start);
    }

    return {
        position,
        handleInputClick,
        togglePosition,
        highlightWidth,
        highlightLeft,
    };
}
