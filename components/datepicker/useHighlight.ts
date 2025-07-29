import {useInstance, onMounted} from 'intact';
import type {Datepicker} from '.';
import { useState, watchState, State } from '../../hooks/useState';
import {last} from '../utils';
import { StateValue, StateValueRange } from './useValueBase';
import dayjs, {Dayjs} from 'dayjs';

export enum Position {
    Start,
    End
}

const NUMBER_WIDTH_PX = 6.69;
const TILDE_WIDTH_PX = 7.01;
const WHITESPACE_WIDTH_PX = 3.34;
const DATETIME_WIDTH_PX = 112;
const DATE_WIDTH_PX = 62;
const DELIMITER_WIDTH = 14;

const fakeDate = dayjs();

export function useHighlight(value: State<StateValue>, getShowString: (value: Dayjs) => string) {
    const instance = useInstance() as Datepicker;
    const position = useState<Position>(Position.Start);
    const highlightWidth = useState<number>(0);
    const highlightLeft = useState<number>(0);
    const charLength = useState<number>(getDefaultCharLength(instance.get('type'))); // 当前活动部分的字符长度

    onMounted(() => {
        const showString = getShowString(fakeDate);
        instance.input.inputRef.value!.getStringWidth(showString).then((width) => {
            highlightWidth.set(width);
        });
    });

    watchState(position, (position) => {
        highlightLeft.set(position === Position.Start ? 0 : highlightWidth.value + DELIMITER_WIDTH);
    });

    // watchState(value, (value) => {
        // console.log(value);
        // const lastValue = last(value);
        // if (!lastValue || !instance.get('range')) return resetHighlight();

        // const [startValue, endValue] = lastValue as StateValueRange;
        
        // console.log(getShowString(startValue));
    // });

    // function resetHighlight() {
        // highlightWidth.set(0);
        // highlightLeft.set(0);
    // }

    // instance.on('$receive:type', (type) => {
        // if (type === 'datetime') {
            // highlightWidth.set(DATETIME_WIDTH_PX);
        // } else {
            // highlightWidth.set(DATE_WIDTH_PX);
        // }
    // });

    instance.on('selecting', (_value, isConfirm) => {
        // if (!isConfirm) return;
        // togglePosition();
        const oldValue = last(value.value as StateValueRange[]);
        console.log(oldValue);
        if (!oldValue) {
            // selected the first value
            const { type } = instance.get();
            // the datetime type requires clicking the confirm button to switch to the End position
            if (type !== 'datetime') {
                position.set(Position.End);
            }
        } else if (isConfirm) {
            position.set(Position.End);
        } else if (oldValue.length === 2 && _value.length === 1) {
            // has whole value, we should fix the v parameter by the highlight position
            if (position.value === Position.End) {
                const v = _value[0];
                _value[0] = oldValue[0];
                _value.push(v);
            } else {
                _value.push(oldValue[1])
            } 
        }
    });
    
    function handleInputClick(e: MouseEvent) {
        const { range, type } = instance.get();
        if (!range) return;

        const cursorPosition = (e.target as HTMLInputElement).selectionStart;
        console.log(cursorPosition)

        const showString = getShowString(fakeDate);
        if (!cursorPosition || cursorPosition <= showString.length + 1) {
            position.set(Position.Start);
        } else {
            position.set(Position.End);
        }
    }

    // 切换位置
    function togglePosition() {
        position.set(position.value === Position.Start ? Position.End : Position.Start);
    }

    return {
        position,
        charLength,
        handleInputClick,
        togglePosition,
        highlightWidth,
        highlightLeft,
    };
}

function getDefaultCharLength(type?: string) {
    switch (type) {
        case 'datetime':
            return 16; // "2025-07-10 00:00:00" 
        default:
            return 10; // "2025-07-09" 
    }
}

function getStringPx(str: string) {

}
