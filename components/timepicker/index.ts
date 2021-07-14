import {Component, TypeDefs} from 'intact';
import template from './index.vdt';
import {BasePicker, BasePickerProps} from '../datepicker/basepicker';
import {isNullOrUndefined} from 'intact-shared'
import {_$} from '../../i18n';
import {bind} from '../utils';
import dayjs, {Dayjs} from '../datepicker/dayjs';
import {useFormats} from './useFormats';
import {useValue} from './useValue';
import {useDisabled} from '../datepicker/useDisabled';
import {usePanel} from '../datepicker/usePanel';
import {State} from '../../hooks/useState';
import {PanelTypes} from '../datepicker/usePanel';

export interface TimepickerProps extends BasePickerProps<string> {
    step: string
}

const typeDefs: Required<TypeDefs<TimepickerProps>> = {
    ...BasePicker.typeDefs,
    value: [String, Array],
    min: String,
    max: String,
    step: String,
}

export class Timepicker extends BasePicker<TimepickerProps> {
    static template = template; 
    static typeDefs = typeDefs;

    public formats = useFormats();
    public disabled = useDisabled(this.formats);
    public panel = usePanel(PanelTypes.Time);
    public value = useValue(this.formats, this.disabled, this.panel);

    protected getPlaceholder() {
        const {placeholder, range} = this.get();

        if (!isNullOrUndefined(placeholder)) return placeholder;

        return range ? _$('开始时间 ~ 结束时间') : _$('请选择时间');
    }

    protected getLabel() {
        return this.value.format();
    }
}
