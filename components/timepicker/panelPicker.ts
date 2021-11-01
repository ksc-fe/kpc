import {Component, TypeDefs} from 'intact';
import template from './panelPicker.vdt';
import {BasePicker, BasePickerProps} from '../datepicker/basepicker';
import {isNullOrUndefined} from 'intact-shared'
import {_$} from '../../i18n';
import {bind} from '../utils';
import dayjs, {Dayjs} from '../datepicker/dayjs';
import {useFormats} from './useFormats';
import {useValue} from './useValue';
import {useDisabled} from './useDisabled';
import {usePanel} from '../datepicker/usePanel';
import {State} from '../../hooks/useState';
import {PanelTypes} from '../datepicker/usePanel';
import {useStep} from './useStep';
import {TimepickerProps, typeDefs} from './constants';

export class PanelPicker extends BasePicker<TimepickerProps> {
    static template = template; 
    static typeDefs = typeDefs;

    public formats = useFormats();
    public disabled = useDisabled(this.formats);
    public panel = usePanel(PanelTypes.Time);
    public value = useValue(this.formats, this.disabled, this.panel);
    public step = useStep(this.disabled, this.formats);

    protected getPlaceholder() {
        const {placeholder, range} = this.get();

        if (!isNullOrUndefined(placeholder)) return placeholder;

        return range ? _$('开始时间 ~ 结束时间') : _$('请选择时间');
    }

    protected getLabel() {
        return this.value.format();
    }
}
