import {isObject} from 'intact-shared';
import {Theme} from './theme';
import Chroma from 'chroma-js';

export function deepDefaults<T extends Theme, U extends Theme>(source: T, defaults: U): T & U;
export function deepDefaults(source: Theme, defaults: Theme): Theme {
    for (let key in defaults) {
        const sourceDescriptor = Object.getOwnPropertyDescriptor(source, key);
        const defaultDescriptor = Object.getOwnPropertyDescriptor(defaults, key);
        if (defaultDescriptor !== undefined) {
            if (sourceDescriptor === undefined) {
                Object.defineProperty(source, key, defaultDescriptor);
            } else if (isObject(defaultDescriptor.value)) {
                if (!isObject(defaultDescriptor.value)) {
                    Object.defineProperty(source, key, defaultDescriptor);
                } else {
                    deepDefaults(sourceDescriptor.value as Theme, defaultDescriptor.value as Theme);
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
