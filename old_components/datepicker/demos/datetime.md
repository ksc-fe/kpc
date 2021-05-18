---
title: 选择日期和时间
order: 5
---

将`type`属性指定为`datetime`，即可让日期支持选择时间。通过`disabledHours & disabledMinutes & disabledSeconds`
可以禁用时分秒的选择。

```vdt
import Datepicker from 'kpc/components/datepicker';

<div>
    <Datepicker type="datetime" v-model="datetime1" clearable />
    <Datepicker type="datetime" v-model="datetime2" 
        placeholder="时间精确到小时"
        disabledMinutes
        disabledSeconds
    />
</div>
```

```styl
.k-datepicker
    margin-right 20px
```
