import {useInstance} from 'intact';
import {createContext} from '../context';
import {hasDocumentAvailable, isObject} from 'intact-shared';
import type * as EnquireJs from 'enquire.js';
import type {Row} from './row';
import {useState} from '../../hooks/useState';

export type Breakpoint = 'xxl' | 'xl' | 'lg' | 'md' | 'sm' | 'xs';

let enquire: typeof EnquireJs;
if (hasDocumentAvailable) {
    enquire = require('enquire.js');
}

export const context = createContext<number>(0);

const responsiveMap: Record<Breakpoint, string> = {
    xxl: `(min-width: 0)`,
    xl: `(min-width: 1200px)`,
    lg: `(min-width: 992px)`,
    md: `(min-width: 768px)`,
    sm: `(min-width: 576px)`,
    xs: `(max-width: 575px)`,
};

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

    if (enquire) {
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
