import {Component, inject} from 'intact';
import template from './time.vdt';
import {Dayjs} from 'dayjs';
import {useState} from '../../hooks/useState';
import {bind} from '../utils';
import {getNowDate} from './helpers';
import {DATEPICKER} from './constants';
import type {Datepicker} from './index';
import {PanelFlags} from './usePanel';

export interface DatepickerTimeProps {
    value: Dayjs | undefined 
    format: string
    flag: PanelFlags
    isDisabledTime: (v: Dayjs, flag: PanelFlags) => boolean
}

type Value = {
    h: number,
    m: number,
    s: number,
}

const defaultValue: Value = {
    h: 0,
    m: 0,
    s: 0,
};

export class DatepickerTime extends Component<DatepickerTimeProps> {
    static template = template;

    public value = useState<Value | null>(null);
    public disabled = useDisable(this);

    init() {
        this.watch('value', v => {
            this.value.set(v ?
                {
                    h: v.hour(),
                    m: v.minute(),
                    s: v.second(),
                } : 
                defaultValue
            );
        });
    }

    @bind
    changeHour(v: number) {
        this.changeValue(v, 'h');
    }

    @bind
    changeMinute(v: number) {
        this.changeValue(v, 'm');
    }

    @bind
    changeSecond(v: number) {
        this.changeValue(v, 's');
    }

    private changeValue(v: number, type: keyof Value) {
        const value = this.get('value') || getNowDate();
        this.set('value', value.set(type, v));
    }
}

const hourRegExp = /h/i
const secondRegExp = /s/
const minuteRegExp = /m/

function useDisable(instance: DatepickerTime) {
    const disableSeconds = useState(false);
    const disableMinutes = useState(false);
    const disableHours = useState(false);

    instance.on('$receive:format', format => {
        disableSeconds.set(!secondRegExp.test(format));
        disableMinutes.set(!minuteRegExp.test(format));
        disableHours.set(!hourRegExp.test(format));
    });

    function disableItem(v: number, type: keyof Value): boolean {
        let {value, isDisabledTime, flag} = instance.get() ;
        if (!value) return false;
        value = value.set(type, v);

        return isDisabledTime(value, flag); 
    }

    return {disableSeconds, disableMinutes, disableHours, disableItem};
}
