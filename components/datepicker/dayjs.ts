import dayjs, {Dayjs, OpUnitType as DayjsOpUnitType, QUnitType as DayjsQUnitType} from 'dayjs';
import weekOfYear from 'dayjs/plugin/weekOfYear'
import quarterOfYear from 'dayjs/plugin/quarterOfYear';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import advancedFormat from 'dayjs/plugin/advancedFormat';

dayjs.extend(customParseFormat);
dayjs.extend(weekOfYear);
dayjs.extend(quarterOfYear);
dayjs.extend(advancedFormat);

// 重新声明类型以避免私有名称错误
export type OpUnitType = DayjsOpUnitType;
export type QUnitType = DayjsQUnitType;

declare module 'dayjs' {
    interface Dayjs {
        isSame(date?: dayjs.ConfigType, unit?: DayjsOpUnitType | DayjsQUnitType): boolean;
        isBefore(date?: dayjs.ConfigType, unit?: DayjsOpUnitType | DayjsQUnitType): boolean;
        isAfter(date?: dayjs.ConfigType, unit?: DayjsOpUnitType | DayjsQUnitType): boolean;
        add(value: number, unit?: DayjsOpUnitType | DayjsQUnitType): dayjs.Dayjs;
        subtract(value: number, unit?: DayjsOpUnitType | DayjsQUnitType): dayjs.Dayjs;
    }
}

export default dayjs;
export type {Dayjs};