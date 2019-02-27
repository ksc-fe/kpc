---
title:
    zh-CN: 基础用法
    en-US: Basic usage
order: 0
---

## zh-CN

基础用法，通过`v-model`双向绑定，值为时间字符串，并非`Date`对象。添加`multiple`属性可以支持多选；
通过`min` `max`属性可以指定最小最大可选时间

## en-US

Basic usage, two-way binding by the `v-model` property, the value is time string ,not `Date` object. it can support multiple selections through adding `multiple` property.and you can specify minimum and maximum optional time by `min` and `max` property.

```vdt
import Timepicker from 'kpc/components/timepicker';

<div>
    <Timepicker v-model="time" min="01:34:56" max="15:02:59" />
    You selected: {{ self.get('time') }}
    <br /><br />
    <Timepicker v-model="timeArray" multiple />
    You selected: {{ JSON.stringify(self.get('timeArray')) }}
</div>
```