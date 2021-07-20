import {range, strPad} from '../utils';

export const DATEPICKER = 'Datepicker';

export const hours = range(0, 23).map(value => ({label: strPad(value, 2), value}));
export const minutes = range(0, 59).map(value => ({label: strPad(value, 2), value}));
export const seconds = minutes;
