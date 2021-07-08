import {TypeDefs, Children, provide} from 'intact';
import template from './index.vdt';
import {sizes, Sizes} from '../../styles/utils';
import {Container} from '../portal';
import {BaseSelect, BaseSelectProps} from '../select/base';
import {DATEPICKER} from './constants';
import dayjs, {Dayjs} from 'dayjs';
import {useValue} from './useValue';
import {isNullOrUndefined} from 'intact-shared'
import {_$} from '../../i18n';
import {bind} from '../utils';
import {State, useState} from '../../hooks/useState';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import {useDisabled} from './useDisabled';
import {useFormats} from './useFormats';
import {usePanel, PanelTypes} from './usePanel';
import {useFocusDate} from './useFocusDate';
import {useKeyboards} from './useKeyboards';

export interface DatepickerProps extends BaseSelectProps {
    value?: Value | Value[] | [Value, Value] | [Value, Value][] | null
    type?: 'date' | 'datetime' | 'year' | 'month'
    range?: boolean
    shortcuts?: Shortcut[]
    container?: Container
    disableHours?: boolean
    disableMinutes?: boolean
    disableSeconds?: boolean
    format?: string
    valueFormat?: string
    showFormat?: string
    minDate?: Value
    maxDate?: Value
    disabledDate?: (v: Value) => boolean
}

export type Value = string | Date | number | Dayjs;

// TODO
type Shortcut = Function

const typeDefs: Required<TypeDefs<DatepickerProps>> = {
    ...BaseSelect.typeDefs,
    value: [String, Array, Date, Number, dayjs.Dayjs],
    type: ['date', 'datetime', 'year', 'month'],
    range: Boolean,
    shortcuts: Array,
    container: [Function, String],
    disableHours: Boolean,
    disableMinutes: Boolean,
    disableSeconds: Boolean,
    format: String,
    valueFormat: String,
    showFormat: String,
    minDate: [String, Date, Number, dayjs.Dayjs],
    maxDate: [String, Date, Number, dayjs.Dayjs],
    disabledDate: Function,
};

const defaults = (): Partial<DatepickerProps> => ({
    ...BaseSelect.defaults(),
    type: 'date',
    filterable: true,
});

dayjs.extend(customParseFormat);

export class Datepicker<T extends DatepickerProps = DatepickerProps> extends BaseSelect<T> {
    static template = template;
    static typeDefs = typeDefs;
    static defaults = defaults;

    public formats = useFormats();
    public isDisabled = useDisabled(this.formats);
    public panel = usePanel();
    public focusDate = useFocusDate();
    private value = useValue(this.formats, this.isDisabled, this.panel);

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
                return _$('请选择年份');
            case 'month':
                return _$('请选择月份');
            default:
                return range ? _$('开始日期 ~ 结束日期') : _$('请选择日期');
        }
    }

    protected getLabel() {
        return this.value.format();
    }

    @bind
    public resetKeywords(keywords: State<string>) {
        const {multiple, range, value} = this.get();
        keywords.set(
            multiple ?  '' : !range ?
                value as string || '' :
                (value as [string, string] || []).join(' ~ ')
        );
    }

    @bind
    protected clear(e: MouseEvent) {
        super.clear(e);
        if (this.get('type') === 'datetime') {
            // reset the state to let user re-select
            this.panel.reset();
        }
    }
}
