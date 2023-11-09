import {isNumber} from 'intact-shared';

export const ROOT_LAYOUT = 'RootLayout';
export const LAYOUT = 'Layout';
export const BODY = 'LayoutBody';
export const defaultHeight = `64px`;
export const defaultWidth = `200px`;

export function getStyle(height: number | string) {
    return isNumber(height) ? `${height}px` : height; 
}
