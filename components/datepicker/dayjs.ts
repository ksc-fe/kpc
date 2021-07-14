import dayjs, {Dayjs, OpUnitType} from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';

dayjs.extend(customParseFormat);

export default dayjs;
export type {Dayjs, OpUnitType};
