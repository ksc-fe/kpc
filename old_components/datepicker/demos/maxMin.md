---
title: 最大和最小日期
order: 2
---

通过`maxDate`和`minDate`可以给组件指定最大和最小选择日期。

```vdt
import Datepicker from 'kpc/components/datepicker';

<div>
    <Datepicker v-model="from" placeholder="开始日期"
        maxDate={{ self.get('to') }}
        minDate={{ new Date() }}
    /> ~
    <Datepicker v-model="to" placeholder="结束日期"
        minDate={{ self.get('from') }}
    />
    <br />
    <br />
    <Datepicker v-model="fromTime" placeholder="开始时间"
        type="datetime"
        maxDate={{ self.get('toTime') || new Date() }}
    /> ~
    <Datepicker v-model="toTime" placeholder="结束时间"
        type="datetime"
        minDate={{ self.get('fromTime') }}
        maxDate={{ new Date() }}
    />
</div>
```
