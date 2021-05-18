---
title: 基础使用
order: 0
---

基础用法，通过`v-model`双向绑定，值为时间字符串，并非`Date`对象。添加`multiple`属性可以支持多选；
通过`min` `max`属性可以指定最小最大可选时间

```vdt
import Timepicker from 'kpc/components/timepicker';

<div>
    <Timepicker v-model="time" min="01:34:56" max="15:02:59" />
    You selected: {{ self.get('time') }}
    <br /><br />
    <Timepicker v-model="timeArray" multiple clearable />
    You selected: {{ JSON.stringify(self.get('timeArray')) }}
</div>
```
