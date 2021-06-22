import {isObject} from 'intact-shared';
import {Theme} from './theme';
import tinycolor from 'tinycolor2';

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

const cache: Record<string, string> = {};
export function palette(color: string, level: number) {
    const key = color + '@' + level;
    if (cache[key]) return cache[key];

    const {h, s, v} = tinycolor(color).toHsv();
    const deS = s < 0.1 ? 0 : (s - 0.1) / 4;
    const inS = (1 - s) / 4;
    const deV = (1 - v) / 4;
    const inV = v <= 0.4 ? 0 : (v - 0.4) / 4;

    let ret;
    if (level < 0 && level >= -4)
        ret = tinycolor({h: h + level, s: s + level * deS, v: v - level * deV}).toHexString();
    else if (level > 0 && level <= 4)
        ret = tinycolor({h: h + level, s: s + level * inS, v: v - level * inV}).toHexString();
    else
        ret =color;

    return (cache[key] = ret);
}

export function getLeft(padding: string) {
    const paddings = padding.split(/\s+/);
    const length = paddings.length;
    if (length === 4) {
        return paddings[3];
    } else if (length > 1) {
        return paddings[1];
    } else {
        return padding;
    }
}

export function getRight(padding: string) {
    const paddings = padding.split(/\s+/);
    const length = paddings.length;
    if (length > 1) {
        return paddings[1];
    } else {
        return padding;
    }
}

export function darken(color: string, number: number) {
    return tinycolor(color).darken(number).toHexString()
}

export type Sizes = 'large' | 'default' | 'small' | 'mini';
export const sizes: Sizes[] = ['large', 'default', 'small', 'mini'];
