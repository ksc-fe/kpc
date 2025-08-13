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
import {useStep} from './useStep';
import {
    TimepickerProps,
    TimepickerEvents,
    TimepickerBlocks,
    typeDefs,
    NOW_START,
    NOW_END,
} from './constants';
import { useConfirm } from './useConfirm';
import { StateValueItem } from '../datepicker/useValueBase';
import { useDefaultValue } from './useDefaultValue';

export class PanelPicker<
    Multipe extends boolean = false,
    Range extends boolean = false,
> extends BasePicker<
    TimepickerProps<Multipe, Range>,
    TimepickerEvents,
    TimepickerBlocks
> {
    static template = template; 
    static typeDefs = typeDefs;

    public formats = useFormats();
    public defaultValue = useDefaultValue();
    public disabled = useDisabled(this.formats, this.defaultValue);
    public panel = usePanel();
    public value = useValue(this.formats, this.disabled, this.panel, this.defaultValue);
    public step = useStep(this.disabled, this.formats);
    public confirm = useConfirm(this.value, this.formats.getValueString, this.defaultValue);

    protected getPlaceholder() {
        const {placeholder, range} = this.get();

        if (!isNullOrUndefined(placeholder)) return placeholder;

        return range ? _$('开始时间 ~ 结束时间') : _$('请选择时间');
    }

    protected getLabel() {
        return this.value.format();
    }
}
