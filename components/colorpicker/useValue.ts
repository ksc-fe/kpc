import {useInstance} from 'intact';
import tinycolor, {ColorFormats} from 'tinycolor2';
import type {ColorpickerPanel} from './panel';
import {useState, watchState} from '../../hooks/useState';
import {throttle} from '../utils';

export function useValue() {
    const instance = useInstance() as ColorpickerPanel; 
    const hsv = useState<ColorFormats.HSVA | null>(null);
    const hsl = useState<ColorFormats.HSLA | null>(null);
    const format = useState<string | null>(null);
    const rgb = useState<ColorFormats.RGBA | null>(null);
    const hex = useState<string | null>(null);

    instance.on('$receive:value', v => {
        const color = tinycolor(instance.get('value'));
        format.set(color.getFormat());
        hsv.set(color.toHsv());
    });

    watchState(hsv, hsv => {
        const color = tinycolor(hsv!);

        rgb.set(color.toRgb());
        hex.set(color.toHex());
        hsl.set(color.toHsl());

        // if alpha less than 1, use rgba format
        const _format = hsv!.a < 1 ? 'rgb' : format.value as 'rgb';
        instance.set('value', color.toString(_format));
    });

    function changeHue(v: number) {
        hsv.set({...hsv.value!, h: v});
    }

    function changeAlpha(v: number) {
        format.set('rgb');
        hsv.set({...hsv.value!, a: v});
    }

    function setValue(v: string) {
        hsv.set(tinycolor(v).toHsv());
    }

    return {
        format, hex, rgb, hsv, hsl,
        changeHue: throttle(changeHue, 50),
        changeAlpha: throttle(changeAlpha, 50),
        setValue,
    };
}
