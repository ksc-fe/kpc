import {useInstance} from 'intact';
import tinycolor, {ColorFormats} from 'tinycolor2';
import type {ColorpickerPanel} from './panel';
import {useState, watchState} from '../../hooks/useState';

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

    function parseValue() {

        // console.log(hsv, hex);

        // if (oldHue !== null && hsl.h !== oldHue && tinycolor.equals(hsl, {...hsl, h: oldHue}))  {
        // // if (oldHue !== null) {
            // hsv.h = hsl.h = oldHue;
        // } else {
            // console.log(hsv.h, oldHue);
        // }
        // // if the r === g === b, keep the hue as the old value
        // // const {r, g, b} = rgb;
        // // if (r === g && g === b && oldHue !== null) {
            // // hsv.h = hsl.h = oldHue;
        // // }
        // console.log(hsl);
    }

    function changeHue(v: number) {
        // we alos need update the hue of hsv, #395
        // hsl!.h = hsv.h = v;
        hsv.set({...hsv.value!, h: v});
        // const value = tinycolor(hsv.value!).toString(format.value as 'rgb');
        // instance.set('value', value);
        // maybe even though we have changed the hue but the value has not changed,
        // because of r === g === b
        // if (instance.get('value') === value) {
            // // update the hue value
            // instance.forceUpdate();
        // } else {
            // instance.set('value', value);
        // }
    }

    function changeAlpha(v: number) {
        format.set('rgb');
        hsv.set({...hsv.value!, a: v});
        // rgb.set({...rgb.value!, a: v});
        // format.set('rgb');
        // instance.set('value', tinycolor(rgb.value!).toRgbString());
    }

    // function getValue() {
        // return {hsl, hsv, hex, rgb};
    // }

    // function getFormat() {
        // return format;
    // }

    function setValue(v: string) {
        hsv.set(tinycolor(v).toHsv());
    }

    return {format, hex, rgb, hsv, hsl, changeHue, changeAlpha, setValue};
}

const mathRound = Math.round;
function toHsv(tinycolor: tinycolor.Instance): ColorFormats.HSVA {
    const {h, s, v}= tinycolor.toHsv();
    return {
        h: mathRound(h),
        s: mathRound(s * 100) / 100,
        v: mathRound(v * 100) / 100,
        a: (tinycolor as any)._roundA as number,
    };
}
function toHsl(tinycolor: tinycolor.Instance): ColorFormats.HSLA {
    const {h, s, l}= tinycolor.toHsl();
    return {
        h: mathRound(h),
        s: mathRound(s * 100) / 100,
        l: mathRound(l * 100) / 100,
        a: (tinycolor as any)._roundA as number,
    };
}
