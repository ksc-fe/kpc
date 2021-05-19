import {isObject} from 'intact-shared';
import {Theme} from './default';
import Chroma from 'chroma-js';

export function deepDefaults<T extends Theme, U extends Theme>(source: T, defaults: U): T & U;
export function deepDefaults(source: Theme, defaults: Theme): Theme {
    for (let key in defaults) {
        const sourceValue= source[key];
        const defaultValue = defaults[key];
        if (defaultValue !== undefined) {
            if (sourceValue === undefined) {
                source[key] = defaultValue; 
            } else if (isObject(sourceValue)) {
                if (!isObject(defaultValue)) {
                    source[key] = defaultValue;
                } else {
                    deepDefaults(sourceValue, defaultValue);
                }
            }
        }
    }

    return source;
}

export function palette(color: string, level: number) {
    const [h, s, b] = Chroma(color).hsv();
    const deS = s < 0.1 ? 0 : (s - 0.1) / 4;
    const inS = (1 - s) / 4;
    const deB = (1 - b) / 4;
    const inB = b <= 0.4 ? 0 : (b - 0.4) / 4;

    if (level < 0 && level >= -4)
        return Chroma.hsv(h + level, s + level * deS, b - level * deB).hex();
    else if (level > 0 && level <= 4)
        return Chroma.hsv(h + level, s + level * inS, b - level * inB).hex();
    else
        return color;
}
