---
title: 禁用指定日期
order: 3
---

通过`disabledDate`属性，可以定义个方法，来指定哪些日期被禁止选择。组件会将一个日期字符串
作为方法的参数，如果方法返回“真”则禁用掉该日期，否则不禁用。

> `@since v1.1.0` 会传入当前日期对象`Dayjs`作为第2个参数

```vdt
import {Datepicker} from 'kpc';

<div>
    <Datepicker disabledDate={this.disabledDate} />
    <br /><br />
    <Datepicker disabledDate={this.disabledMonth} type='month' />
    <br /><br />
    <Datepicker disabledDate={this.disabledYear} type='year' maxDate="2025" />
</div>
```

```ts
import {Dayjs} from 'dayjs';

export default class extends Component {
    static template = template;

    disabledDate(date: Dayjs) {
        // 禁用掉每月的5号和15号
        const d = date.date();
        return d === 5 || d === 15;
    }

    disabledMonth(date: Dayjs) {
        // 禁用掉每年的5月
        const m = date.month() + 1;
        return m === 5;
    }

    disabledYear(date: Dayjs) {
        // 禁用掉2015年
        const y = date.year();
        return y === 2015;
    }
}
```
