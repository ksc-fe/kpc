---
title: 
    zh-CN: 最大和最小日期
    en-US: Maximum and Minimum Date
order: 2
---

## zh-CN

通过`maxDate`和`minDate`可以给组件指定最大和最小选择日期。

## en-US

Through `maxDate` and `minDate`, you can specify the maximum and minimum selection date for the component respectively.

```vdt
import Datepicker from 'kpc/components/datepicker';

<div>
    <Datepicker v-model="from" placeholder="Begin date"
        maxDate={{ self.get('to') }}
        minDate={{ new Date() }}
    /> ~
    <Datepicker v-model="to" placeholder="End date"
        minDate={{ self.get('from') }}
    />
    <br />
    <br />
    <Datepicker v-model="fromTime" placeholder="Begin time"
        type="datetime"
        maxDate={{ self.get('toTime') || new Date() }}
    /> ~
    <Datepicker v-model="toTime" placeholder="End time"
        type="datetime"
        minDate={{ self.get('fromTime') }}
        maxDate={{ new Date() }}
    />
</div>
```
