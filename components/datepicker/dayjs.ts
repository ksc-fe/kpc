import dayjs, {Dayjs} from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';

dayjs.extend(customParseFormat);

export default dayjs;
export type {Dayjs};
