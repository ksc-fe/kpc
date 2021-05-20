import {isObject} from 'intact-shared';
import {Theme} from './theme';
import Chroma from 'chroma-js';

export function deepDefaults<T, U>(source: T, defaults: U): T & U;
export function deepDefaults<T, U, V>(source: T, defaults1: U, defaults2: V): T & U & V;
export function deepDefaults<T, U, V, W>(source: T, defaults1: U, defaults2: V, defaults3: W): T & U & V & W;
export function deepDefaults(source: any, ...defaults: any[]): any;
export function deepDefaults(source: Theme, ...args: Theme[]): Theme {
    for (const defaults of args) {
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
