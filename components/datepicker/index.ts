import {TypeDefs, provide} from 'intact';
import template from './index.vdt';
import {DATEPICKER} from './constants';
import dayjs, {Dayjs} from './dayjs';
import {useValue} from './useValue';
import {isNullOrUndefined} from 'intact-shared'
import {_$} from '../../i18n';
import {bind} from '../utils';
import {useDisabled} from './useDisabled';
import {useFormats} from './useFormats';
import {usePanel} from './usePanel';
import {useFocusDate} from './useFocusDate';
import {useKeyboards} from './useKeyboards';
import {Shortcut} from './shortcuts';
import {useHighlight} from './useHighlight';
// import {useMergeRange} from './useMergeRange';
import {
    BasePicker,
    BasePickerProps,
    BasePickerEvents,
    BasePickerBlocks,
} from './basepicker';
import {Value} from './useValueBase';
import { useConfirm } from './useConfirm';

export * as shortcuts from './shortcuts';
export { dayjs };

export interface DatepickerProps<
    V extends Value = Value,
    M extends boolean = boolean,
    R extends boolean = boolean,
> extends BasePickerProps<V extends string ? V : V | string, M, R> {
    type?: 'date' | 'datetime' | 'year' | 'month' | 'week' | 'quarter'
    shortcuts?: Shortcut[],
    // isMerge?: boolean
}

export interface DatepickerEvents extends BasePickerEvents { }

export interface DatepickerBlocks<
    V extends Value = Value,
    R extends boolean = boolean,
> extends BasePickerBlocks<V, R> { }

const typeDefs: Required<TypeDefs<DatepickerProps>> = {
    ...BasePicker.typeDefs,
    type: ['date', 'datetime', 'year', 'month', 'week', 'quarter'],
    shortcuts: Array,
    // isMerge: Boolean
};

const defaults = (): Partial<DatepickerProps> => ({
    ...BasePicker.defaults(),
    type: 'date',
    // isMerge: false
});

export class Datepicker<
    V extends Value = Value,
    M extends boolean = false,
    R extends boolean = false,
> extends BasePicker<DatepickerProps<V, M, R>, DatepickerEvents, DatepickerBlocks<V, R>> {
    static template = template;
    static typeDefs = typeDefs;
    static defaults = defaults;

    public formats = useFormats();
    public disabled = useDisabled(this.formats, () => this.highlight.position);
    public panel = usePanel();
    public focusDate = useFocusDate();
    public value = useValue(this.formats, this.disabled, this.panel, () => this.highlight.position);
    public highlight = useHighlight(this.value.value, this.formats.getShowString, this.input.keywords);
    // public mergeRange = useMergeRange(this.formats);
    private confirm = useConfirm(this.highlight, this.value, this.formats.getValueString);
    
    init() {
        super.init();
        provide(DATEPICKER, this);
        useKeyboards(this.panel.startRef, this.focusDate.focusDate);
    }

    protected getPlaceholder() {
        const {placeholder, type, range} = this.get();
        if (!isNullOrUndefined(placeholder)) return placeholder;

        switch (type) {
            case 'datetime':
                return range ? _$('开始时间 ~ 结束时间') : _$('请选择日期和时间');
            case 'year':
                return range ? _$('开始年份 ~ 结束年份') : _$('请选择年份');
            case 'month':
                return range ? _$('开始月份 ~ 结束月份') : _$('请选择月份');
            case 'week':
                return range ? _$('开始周 ~ 结束周') : _$('请选择周');
            case 'quarter':
                return range ? _$('开始季度 ~ 结束季度') : _$('请选择季度');
            default:
                return range ? _$('开始日期 ~ 结束日期') : _$('请选择日期');
        }
    }

    protected getLabel() {
        return this.value.format();
    }

    @bind
    private setByShortcut(shortcut: Shortcut) {
        const {setValue, convertToDayjs} = this.value;
        const {multiple} = this.get();
        setValue(convertToDayjs(shortcut.value())[0], true);
        if (!multiple) {
            this.hide();
        }
    }
}
