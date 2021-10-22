import {useInstance, createRef} from 'intact';
import type {ColorpickerPanel} from './panel';
import {useDraggable} from '../../hooks/useDraggable';
import tinycolor, {ColorFormats} from 'tinycolor2';
import {isNumber} from 'intact-shared';
import {State} from '../../hooks/useState';

window.tinycolor = tinycolor;

export function usePointer(
    hsv: State<ColorFormats.HSVA | null>,
    format: State<string | null>,
) {
    const instance = useInstance() as ColorpickerPanel;
    const areaRef = createRef<HTMLDivElement>();

    const {start} = useDraggable({
        onStart(e) {
            handleChange(e);
        },
        onMove(e) {
            handleChange(e);
        }
    });

    // @reference: https://github.com/casesandberg/react-color/blob/master/src/helpers/saturation.js
    function handleChange(e: MouseEvent | TouchEvent) {
        const {width, height, left: _left, top: _top} = areaRef.value!.getBoundingClientRect();
        const x = isNumber((e as MouseEvent).pageX) ? (e as MouseEvent).pageX : (e as TouchEvent).touches[0].pageX;
        const y = isNumber((e as MouseEvent).pageY) ? (e as MouseEvent).pageY : (e as TouchEvent).touches[0].pageY;
        let left = x - _left - window.pageXOffset;
        let top = y - _top - window.pageYOffset;

        left = Math.max(Math.min(width, left), 0);
        top = Math.max(Math.min(height, top), 0);

        const saturation = left / width;
        const bright = -top / height + 1;

        hsv.set({...hsv.value!, s: saturation, v: bright});
        // const value = tinycolor(hsv.value!).toString(format.value as 'rgb');
        // // console.log()
        // // const tinyValue = tinycolor(value);
        // // console.log(hsv, value, tinycolor(hsv).toHsv(), getFormat(), tinyValue.toHsv());

        // instance.set({value});
    }

    return {start, areaRef};
}
