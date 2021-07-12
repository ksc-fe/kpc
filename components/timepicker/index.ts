import {Component, TypeDefs} from 'intact';
import template from './index.vdt';
import {BaseSelect, BaseSelectProps} from '../select/base';
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

export interface TimepickerProps extends BaseSelectProps {
    value: string | [string, string] | string[] | [string, string][]
    range: boolean
    format?: string
    valueFormat?: string
    showFormat?: string
    min?: string 
    max?: string 
    disabledDate?: (v: string) => boolean
}

const typeDefs: Required<TypeDefs<TimepickerProps>> = {
    ...BaseSelect.typeDefs,
    value: [String, Array],
    range: Boolean,
    format: String,
    valueFormat: String,
    showFormat: String,
    min: String,
    max: String,
    disabledDate: Function,
}

const defaults = (): Partial<TimepickerProps> => ({
    ...BaseSelect.defaults(),
    type: 'datetime',
    filterable: true,
});

export class Timepicker extends BaseSelect<TimepickerProps> {
    static template = template; 
    static typeDefs = typeDefs;
    static defaults = defaults;

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
