---
title: 
    zh-CN: 固定时间点
    en-US: Fixed time
order: 2
---

## zh-CN

当指定了`step`属性时，组件将展示成`Select`样式，只能选择固定的几个时间点。通过`min`和`max`限定
选择时间范围（默认：00:00:00 ~ 23:59:59），`step`指定步长，它们值类型都为时间字符串，指定时
可以省略秒，但是组件会添加秒（00）

## en-US

Component will be displayed as a `Select` style when you specify the `step` property,and it only can select several fixed number of time points. you can limit the selection time range by `min` and `max` property (default: 00:00:00 ~ 23:59:59), specifing the step size by `step` property,its value type is a time string, the seconds can be omitted when specified, but the component will automatically add seconds (00).

```vdt
import Timepicker from 'kpc/components/timepicker';

<div>
    <Timepicker class="time" v-model="time" step="00:30:00"/>
    You selected: {{ JSON.stringify(self.get('time')) }}
    <br /><br />
    <Timepicker v-model="timeArray" multiple clearable
        step="00:30:00" 
        min="09:00:00"
        max="18:00"
    />
    You selected: {{ JSON.stringify(self.get('timeArray')) }}
</div>
```
