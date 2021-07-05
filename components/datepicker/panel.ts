import {Component, inject} from 'intact';
import template from './panel.vdt';
import {State, useState} from '../../hooks/useState';
import {StateValue} from './useValue';
import {Dayjs} from 'dayjs';
import {DATEPICKER} from './constants';
import type {Datepicker} from './index';
import {isEqual} from './helpers';

export enum PanelTypes {
    Date,
    Time
} 

export interface DatepickerPanelProps {
    value?: StateValue | null
    format: string
}

export class DatepickerPanel extends Component<DatepickerPanelProps> {
    static template = template;

    private panelType = useState<PanelTypes>(PanelTypes.Date);
    private datepicker = inject<Datepicker>(DATEPICKER)!;
    public value = useValue(this, this.datepicker);

    changePanel(type: PanelTypes) {
        this.panelType.set(type);
    }
}

function useValue(instance: DatepickerPanel, datepicker: Datepicker) {
    function onChangeDate(v: Dayjs) {
        const {multiple, type} = datepicker.get();

        if (type === 'datetime') {
            instance.changePanel(PanelTypes.Time);
        }
        setValue(v);
    }

    function setValue(v: Dayjs) {
        const {multiple} = datepicker.get();
        let _value: StateValue = v;
        if (multiple) {
            _value = instance.get('value') as Dayjs[];
            _value = !_value ? [] : _value.slice();

            const index = _value.findIndex(item => isEqual(v, item));
            if (index > -1) {
                _value.splice(index, 1);
            } else {
                _value.push(v);
            }
        }

        instance.set('value', _value);
    }

    function onChangeTime(date: Dayjs) {
        const {multiple} = datepicker.get();
        let _value: StateValue = date;
        if (multiple) {
            _value = (instance.get('value') as Dayjs[]).slice();
            _value.splice(_value.length - 1, 1, date);
        }
        instance.set('value', _value);
    }

    return {onChangeDate, onChangeTime, setValue};
}
