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
    value?: Dayjs
    format: string
    flag: PanelFlags
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
    public disabled = useDisable(this, inject(DATEPICKER) as Datepicker);

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

function useDisable(instance: DatepickerTime, datepicker: Datepicker) {
    const disableSeconds = useState(false);
    const disableMinutes = useState(false);
    const disableHours = useState(false);

    instance.on('$receive:format', format => {
        disableSeconds.set(!secondRegExp.test(format));
        disableMinutes.set(!minuteRegExp.test(format));
        disableHours.set(!hourRegExp.test(format));
    });

    function disableItem(v: number, type: keyof Value): boolean {
        let value = instance.get('value') ;
        if (!value) return false;
        value = value.set(type, v);
        if (!datepicker.isDisabled(value, 'second')) {
            // compare the start and the end datetime 
            const flag = instance.get('flag');
            const anotherDatetime = datepicker.value.getTimeValue(
                flag === PanelFlags.Start ? PanelFlags.End : PanelFlags.Start
            );
            if (!anotherDatetime) return false;
            if (flag === PanelFlags.Start) {
                return value.isAfter(anotherDatetime, 'second');
            } else {
                return value.isBefore(anotherDatetime, 'second');
            }
        }
        return true;
    }

    return {disableSeconds, disableMinutes, disableHours, disableItem};
}
