import {Component, TypeDefs} from 'intact';
import template from './index.vdt';
import {BaseSelect, BaseSelectProps} from '../select/base';
import {isNullOrUndefined} from 'intact-shared'
import {_$} from '../../i18n';
import {bind} from '../utils';
import dayjs, {Dayjs} from '../datepicker/dayjs';
import {useFormats} from './useFormats';
import {useValue} from '../datepicker/useValue';
import {useDisabled} from '../datepicker/useDisabled';
import {usePanel} from '../datepicker/usePanel';
import {State} from '../../hooks/useState';
import {Datepicker, DatepickerProps} from '../datepicker';

export interface TimepickerProps extends DatepickerProps {
}

export class Timepicker extends Datepicker {
    static template = template; 

    public formats = useFormats();
    // public isDisabled = useDisabled(this.formats);
    // public panel = usePanel();
    // public value = useValue(this.formats, this.isDisabled, this.panel);

    protected getPlaceholder() {
        const {placeholder, range} = this.get();

        if (!isNullOrUndefined(placeholder)) return placeholder;

        return range ? _$('开始时间 ~ 结束时间') : _$('请选择时间');
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

}
