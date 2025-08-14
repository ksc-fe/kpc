import {Children} from 'intact';
import {_$} from '../../i18n';
import {Value} from './useValueBase';

export type Shortcut = {
    label: (() => Children) | Children 
    value: () => Value | [Value, Value]
}

function now() {
    return new Date();
}

function days(days: number) {
    const now = new Date();
    now.setDate(now.getDate() + days);
    return now;
}

function months(months: number) {
    const now = new Date();
    now.setMonth(now.getMonth() + months);
    return now;
}

export const today: Shortcut = {
    label() { return _$('今天'); },
    value() { return now(); },
};

export const yesterday: Shortcut = {
    label() { return _$('昨天'); },
    value() { return days(-1); },
};

export const tomorrow: Shortcut = {
    label() { return _$('明天'); },
    value() { return days(1); }
};

export const afterOneWeek: Shortcut = {
    label() { return _$('一周后'); },
    value() { return days(7); },
};

export const afterOneMonth: Shortcut = {
    label() { return _$('一月后'); },
    value() { return months(1); } 
};

export const afterThreeMonths: Shortcut = {
    label() { return _$('三月后'); },
    value() { return months(3); },
};

export const beforeOneWeek: Shortcut = {
    label() { return _$('一周前'); },
    value() { return days(-7); },
};

export const beforeOneMonth: Shortcut = {
    label() { return _$('一月前'); },
    value() { return months(-1); } 
};

export const beforeThreeMonths: Shortcut = {
    label() { return _$('三月前'); },
    value() { return months(-3); },
};

export const lastWeek: Shortcut = {
    label() { return _$('上一周'); },
    value() { return [days(-7), now()]; },
};

export const nextWeek: Shortcut = {
    label() { return _$('下一周'); },
    value() { return [now(), days(7)]; },
};

export const lastMonth: Shortcut = {
    label() { return _$('上一个月'); },
    value() { return [months(-1), now()]; }
};

export const nextMonth: Shortcut = {
    label() { return _$('下一个月'); },
    value() { return [now(), months(1)]; }
};

export const lastThreeMonths: Shortcut = {
    label() { return _$('前三个月'); },
    value() { return [months(-3), now()]; }
};

export const nextThreeMonths: Shortcut = {
    label() { return _$('后三个月'); },
    value() { return [now(), months(3)]; }
};
