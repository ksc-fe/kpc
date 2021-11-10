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
import {BasePicker, BasePickerProps, BasePickerEvents, Value} from './basepicker';

export * as shortcuts from './shortcuts';

export interface DatepickerProps extends BasePickerProps<Value> {
    type?: 'date' | 'datetime' | 'year' | 'month'
    shortcuts?: Shortcut[]
}

export interface DatepickerEvents extends BasePickerEvents { }

const typeDefs: Required<TypeDefs<DatepickerProps>> = {
    ...BasePicker.typeDefs,
    type: ['date', 'datetime', 'year', 'month'],
    shortcuts: Array,
};

const defaults = (): Partial<DatepickerProps> => ({
    ...BasePicker.defaults(),
    type: 'date',
});

export class Datepicker extends BasePicker<DatepickerProps, DatepickerEvents> {
    static template = template;
    static typeDefs = typeDefs;
    static defaults = defaults;

    public formats = useFormats();
    public disabled = useDisabled(this.formats);
    public panel = usePanel();
    public focusDate = useFocusDate();
    public value = useValue(this.formats, this.disabled, this.panel);

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
