import {useInstance} from 'intact';
import type {Slider, SliderProps} from './';
import {useReceive} from '../../hooks/useReceive';

type MarkKey = string | number
type MarkValue = MarkKey | [MarkKey] | [MarkKey, MarkKey]
export type Marks = Record<MarkKey, MarkValue>

type Mark = {
    value: number 
    raw: MarkValue,
    style: Style
    active: boolean
    text: string | number
}

type Style = {
    left: string
}

export function useMarks() {
    const instance = useInstance() as Slider<boolean>;
    let marks: Mark[] = []; 

    useReceive<Slider>(['marks', 'value'], () => {
        const {max, min, marks: _marks}  = instance.get();
        marks = [] as Mark[];
        for (let key in _marks) {
            const mark = _marks[key];
            const value = +key;
            marks.push({
                value,
                raw: mark,
                style: {
                    left: ((value - min!) / (max! - min!) * 100) + '%',
                },
                active: false,
                text: '',
            });
        }

        addText();
    });

    instance.on('$change:value', addText);

    function addText() {
        const {value, range} = instance.get();
        marks.forEach(mark => {
            const active = !range ?
                mark.value === value as number :
                (value as [number, number]).includes(mark.value);

            let text: string | number;
            const raw = mark.raw;
            if (Array.isArray(raw)) {
                text = active && raw[1] !== undefined ? raw[1] : raw[0];
            } else {
                text = raw;
            }

            mark.active = active;
            mark.text = text;
        });
    }

    return () => marks;
}
