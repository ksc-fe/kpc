import {Component, TypeDefs} from 'intact';
import template from './time.vdt';
import {Dayjs} from 'dayjs';
import {useState} from '../../hooks/useState';
import {bind} from '../utils';

export interface DatepickerTimeProps {
    value: Dayjs
    format: string
}

type Value = {
    h: number,
    m: number,
    s: number,
}

export class DatepickerTime extends Component<DatepickerTimeProps> {
    static template = template;

    public value = useState<Value | null>(null);
    public disabled = useDisable(this);

    init() {
        this.watch('value', v => {
            this.value.set({
                h: v.hour(),
                m: v.minute(),
                s: v.second(),
            });
        });

        this.on('$receive:format', v => {
            console.log(v);
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
        const value = this.get('value');
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

    return {disableSeconds, disableMinutes, disableHours};
}
