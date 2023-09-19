import {useInstance} from 'intact';
import {createContext} from '../context';
import {hasDocumentAvailable, isObject, isNullOrUndefined} from 'intact-shared';
// import type * as EnquireJs from 'enquire.js';
import enquire from 'enquire.js';
import type {Row} from './row';
import {useState} from '../../hooks/useState';
import {Breakpoint, responsiveMap} from './constants';

// let enquire: typeof EnquireJs;
// if (hasDocumentAvailable) {
    // enquire = require('enquire.js');
// }

export const context = createContext<number>(0);

export function useGutter() {
    const instance = useInstance() as Row;
    const matches = useState<Record<Breakpoint, boolean>>({
        xxl: false,
        xl: false,
        lg: false,
        md: false,
        sm: false,
        xs: false,
    });

    if (hasDocumentAvailable) {
        for (const key in responsiveMap) {
            enquire.register(responsiveMap[key as Breakpoint], {
                match() {
                    const {gutter} = instance.get();
                    if (isObject(gutter)) {
                        matches.set({...matches.value, [key]: true});                    
                    }
                },
                unmatch() {
                    const {gutter} = instance.get();
                    if (isObject(gutter)) {
                        matches.set({...matches.value, [key]: false});                    
                    }
                }
            });
        }
    } 

    function getGutter() {
        const {gutter}  = instance.get();
        if (isObject(gutter)) {
            let key: Breakpoint;
            let lastFound: string | number | null = null;
            for (key in responsiveMap) {
                const value = gutter[key]; 
                if (!isNullOrUndefined(value)) {
                    lastFound = value;
                    if (matches.value[key]) {
                        return value;
                    }
                }
            }
            // if the breakpoint has not value, use the closest breakpoint value instead of
            return lastFound
        }
        return gutter;
    }

    return {getGutter};
}

export function gutterStyle(
    gutter: number,
    style: string | Record<string, string> | undefined,
    prop: 'margin' | 'padding'
) {
    const margin = gutter / 2;
    const sign = prop === 'margin' ? '-' : '';
    if (!style) style = '';
    if (typeof style === 'string') {
        style = `${style}${!style || /;\s*$/.test(style) ? '' : ';'}${prop}-left: ${sign}${margin}px; ${prop}-right: ${sign}${margin}px;`
    } else {
        style = {
            [`${prop}Left`]: `${sign}${margin}px`,
            [`${prop}Right`]: `${sign}${margin}px`,
            ...style
        };
    }
    return style;
}
