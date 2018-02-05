---
title: 禁用指定日期
order: 3
---

通过`disabledDate`属性，可以定义个方法，来指定哪些日期被禁止选择。组件会将一个日期字符串
作为方法的参数，如果方法返回“真”则禁用掉该日期，否则不禁用。

```vdt
import Datepicker from 'kpc/components/datepicker';

<Datepicker disabledDate={{ (date) => {
    // 禁用掉2018-02-05和2018-03-05
    return ~['2018-02-05', '2018-03-05'].indexOf(date);
} }} />
```
