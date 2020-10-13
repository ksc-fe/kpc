---
title: 禁用指定日期
order: 3
---

通过`disabledDate`属性，可以定义个方法，来指定哪些日期被禁止选择。组件会将一个日期字符串
作为方法的参数，如果方法返回“真”则禁用掉该日期，否则不禁用。

> `@since v1.1.0` 会传入当前日期对象`Dayjs`作为第2个参数

```vdt
import Datepicker from 'kpc/components/datepicker';

<div>
    <Datepicker disabledDate={{ self.disabledDate }} />
    <br /><br />
    <Datepicker disabledDate={{ self.disabledMonth }} type='month' />
    <br /><br />
    <Datepicker disabledDate={{ self.disabledYear }} type='year' />
</div>
```

```js
export default class extends Intact {
    @Intact.template()
    static template = template;

    disabledDate(date, dateObject) {
        // 禁用掉每月的5号和15号
        const d = dateObject.date();
        return d === 5 || d === 15;
    }

    disabledMonth(date, dateObject) {
        // 禁用掉每年的5月
        const m = dateObject.month() + 1;
        return m === 5;
    }

    disabledYear(date, dateObject) {
        // 禁用掉2015年
        const y = dateObject.year();
        return y === 2015;
    }
}
```
