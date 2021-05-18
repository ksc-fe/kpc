import {_$} from '../utils';

function now() {
    return new Date();
}

function days(days) {
    const now = new Date();
    now.setDate(now.getDate() + days);
    return now;
}

function months(months) {
    const now = new Date();
    now.setMonth(now.getMonth() + months);
    return now;
}

export const today = {
    label() { return _$('今天'); },
    value() { return now(); },
};

export const yesterday = {
    label() { return _$('昨天'); },
    value() { return days(-1); },
};

export const tomorrow = {
    label() { return _$('明天'); },
    value() { return days(1); }
};

export const afterOneWeek = {
    label() { return _$('一周后'); },
    value() { return days(7); },
};

export const afterOneMonth = {
    label() { return _$('一月后'); },
    value() { return months(1); } 
};

export const afterThreeMonths = {
    label() { return _$('三月后'); },
    value() { return months(3); },
};

export const beforeOneWeek = {
    label() { return _$('一周前'); },
    value() { return days(-7); },
};

export const beforeOneMonth = {
    label() { return _$('一月前'); },
    value() { return months(-1); } 
};

export const beforeThreeMonths = {
    label() { return _$('三月前'); },
    value() { return months(-3); },
};

export const lastWeek = {
    label() { return _$('上一周'); },
    value() { return [days(-7), now()]; },
};

export const nextWeek = {
    label() { return _$('下一周'); },
    value() { return [now(), days(7)]; },
};

export const lastMonth = {
    label() { return _$('上一个月'); },
    value() { return [months(-1), now()]; }
};

export const nextMonth = {
    label() { return _$('下一个月'); },
    value() { return [now(), months(1)]; }
};

export const lastThreeMonths = {
    label() { return _$('前三个月'); },
    value() { return [months(-3), now()]; }
};

export const nextThreeMonths = {
    label() { return _$('后三个月'); },
    value() { return [now(), months(3)]; }
};
