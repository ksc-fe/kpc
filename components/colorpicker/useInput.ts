import {useInstance, createRef} from 'intact';
import type {ColorpickerPanel} from './panel';
import tinycolor, {ColorFormats} from 'tinycolor2';
import {isNumber} from 'intact-shared';
import {State, useState} from '../../hooks/useState';

export enum Mode {
    RGB,
    HSL
}

export function useInput(
    hsv: State<ColorFormats.HSVA | null>,
    rgb: State<ColorFormats.RGBA | null>,
    hsl: State<ColorFormats.HSLA | null>,
) {
    const instance = useInstance() as ColorpickerPanel;
    const mode = useState<Mode>(Mode.RGB);
    const dragging = useState<boolean>(false);

    function onInputHex(e: InputEvent) {
        const hex = (e.target as HTMLInputElement).value.trim();
        const color = tinycolor(hex);

        if (color.isValid()) {
            console.log(color.toHsv());
            hsv.set(color.toHsv());
        }
    }

    function changeMode() {
        mode.set(mode.value === Mode.RGB ? Mode.HSL : Mode.RGB);
    }

    function changeColor(type: string, v: number) {
        const isRgb = mode.value === Mode.RGB;
        const color: any =  isRgb ? rgb.value! : hsl.value!;

        if (!isRgb && type !== 'h' || type === 'a') {
            v = v / 100;
        }
        if (color[type] === v) return;

        hsv.set(tinycolor({...color, [type]: v}).toHsv());
    }

    function onStart() {
        dragging.set(true);
    }

    function onEnd() {
        dragging.set(false);
    }

    return {onInputHex, mode, changeMode, changeColor, onStart, onEnd, dragging};
}

