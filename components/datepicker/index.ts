import {TypeDefs, provide} from 'intact';
import template from './index.vdt';
import {BaseSelect, BaseSelectProps} from '../select/base';
import {DATEPICKER} from './constants';
import dayjs, {Dayjs} from './dayjs';
import {useValue} from './useValue';
import {isNullOrUndefined} from 'intact-shared'
import {_$} from '../../i18n';
import {bind} from '../utils';
import {State} from '../../hooks/useState';
import {useDisabled} from './useDisabled';
import {useFormats} from './useFormats';
import {usePanel} from './usePanel';
import {useFocusDate} from './useFocusDate';
import {useKeyboards} from './useKeyboards';
import {Shortcut} from './shortcuts';
import {usePosition} from './usePosition';
import {useMergeRange} from './useMergeRange';

import {
    BasePicker,
    BasePickerProps,
    BasePickerEvents,
    BasePickerBlocks,
    Value
} from './basepicker';

export * as shortcuts from './shortcuts';
export { dayjs };

export interface DatepickerProps<
    V extends Value = Value,
    M extends boolean = boolean,
    R extends boolean = boolean,
> extends BasePickerProps<V extends string ? V : V | string, M, R> {
    type?: 'date' | 'datetime' | 'year' | 'month' | 'week' | 'quarter'
    shortcuts?: Shortcut[],
    isMerge?: boolean
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
    isMerge: Boolean
};

const defaults = (): Partial<DatepickerProps> => ({
    ...BasePicker.defaults(),
    type: 'date',
    isMerge: false
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
    public disabled = useDisabled(this.formats);
    public panel = usePanel();
    public focusDate = useFocusDate();
    public value = useValue(this.formats, this.disabled, this.panel);
    public activePosition = usePosition();
    public mergeRange = useMergeRange(this.formats);
    
    init() {
        super.init();
        provide(DATEPICKER, this);
        useKeyboards(this.panel.startRef, this.focusDate.focusDate);
        this.activePosition.setupEventListeners();
    }

    protected getPlaceholder() {
        const {placeholder, type, range} = this.get();
        if (!isNullOrUndefined(placeholder)) return placeholder;

        switch (type) {
            case 'datetime':
                return range ? _$('开始时间 ~ 结束时间') : _$('请选择日期和时间');
            case 'year':
                return _$('请选择年份');
            case 'month':
                return _$('请选择月份');
            case 'week':
                return _$('请选择周');
            case 'quarter':
                return _$('请选择季度');
            default:
                return range ? _$('开始日期 ~ 结束日期') : _$('请选择日期');
        }
    }

    protected getLabel() {
        const {multiple} = this.get();
        if(multiple) {
            const results = this.value.format();
            const dayjsValue = this.value.getDayjsValue();
            return this.mergeRange.formatMultipleValues(dayjsValue, results as string[]);
        }
        return this.value.format();
    }

    @bind
    protected clear(e: MouseEvent) {
        super.clear(e);
        if (this.get('type') === 'datetime') {
            // reset the state to let user re-select
            this.panel.reset();
        }
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
