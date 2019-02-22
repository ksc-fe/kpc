---
title: 
    zh-CN: 选择日期和时间
    en-US: Select Date and Time
order: 5
---

## zh-CN

将`type`属性指定为`datetime`，即可让日期支持选择时间。通过`disabledHours & disabledMinutes & disabledSeconds`
可以禁用时分秒的选择。

## en-US

Specify the `type` property as `datetime`, so that it supports the selection of time. You can disable 
hour, minute, second selection by adding `disabledDate`, `disabledMinutes`, `disabledSeconds` properties.

```vdt
import Datepicker from 'kpc/components/datepicker';

<div>
    <Datepicker type="datetime" v-model="datetime1" />
    <Datepicker type="datetime" v-model="datetime2" 
        placeholder="Time accurate to hour"
        disabledMinutes
        disabledSeconds
    />
</div>
```

```styl
.k-datepicker
    margin-right 20px
```
