import dayjs, {Dayjs} from '../datepicker/dayjs';
import {getNowDate} from '../datepicker/helpers';

export const YEAR_FORMAT = 'YYYY-MM-DD ';
export const TIME_FORMAT = 'HH:mm:ss';
export const NOW = getNowDate();
export const PREFIX = NOW.format(YEAR_FORMAT);
