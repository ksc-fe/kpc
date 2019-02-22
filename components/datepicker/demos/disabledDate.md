---
title: 
    zh-CN: 禁用指定日期
    en-US: Disable Specified Dates
order: 3
---

## zh-CN

通过`disabledDate`属性，可以定义个方法，来指定哪些日期被禁止选择。组件会将一个日期字符串
作为方法的参数，如果方法返回“真”则禁用掉该日期，否则不禁用。

## en-US

With the `disableDate` property, you can define a method to sepecify which dates are disabled selection. 
The component will take a date string as parameter to the method, and will disable the date if 
the method returns `true`, otherwise it isn't disabled.

```vdt
import Datepicker from 'kpc/components/datepicker';

<Datepicker disabledDate={{ (date) => {
    // disable 2018-02-05 and 2018-03-05
    return ~['2018-02-05', '2018-03-05'].indexOf(date);
} }} />
```
