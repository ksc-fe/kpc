import dayjs, {Dayjs, OpUnitType, QUnitType} from 'dayjs';
import weekOfYear from 'dayjs/plugin/weekOfYear'
import quarterOfYear from 'dayjs/plugin/quarterOfYear';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import advancedFormat from 'dayjs/plugin/advancedFormat';

dayjs.extend(customParseFormat);
dayjs.extend(weekOfYear);
dayjs.extend(quarterOfYear);
dayjs.extend(advancedFormat);

export default dayjs;
export type {Dayjs, OpUnitType, QUnitType};