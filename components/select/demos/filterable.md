---
title: 
    zh-CN: 可筛选
    en-US: Screenable
order: 4
---
## zh-CN

指定`filterable`支持筛选，组件会同时对`label`和`value`进行筛选，你也可以通过
`filter`属性来自定义筛选函数

## en-US

Specify `filterable` to support filtering. The component will filter both `label` and `value` at the same time. You can also pass
`filter` attribute to customize the filter function

```vdt
import {Select, Option} from 'kpc/components/select';

<div>
    <Select v-model="day" filterable>
        <Option value="Monday">Monday</Option>
        <Option value="Tuesday">Tuesday</Option>
        <Option value="Wednesday">Wednesday</Option>
        <Option value="Thursday">Thursday</Option>
        <Option value="Friday">Friday</Option>
        <Option value="Saturday">Saturday</Option>
        <Option value="Sunday">Sunday</Option>
    </Select>
    <Select v-model="days" filterable multiple>
        <Option value="Monday">Monday</Option>
        <Option value="Tuesday">Tuesday</Option>
        <Option value="Wednesday">Wednesday</Option>
        <Option value="Thursday">Thursday</Option>
        <Option value="Friday">Friday</Option>
        <Option value="Saturday">Saturday</Option>
        <Option value="Sunday">Sunday</Option>
    </Select>
    <Select v-model="day1" filterable 
        filter={{ (keywords, item) => !keywords || item.label.includes(keywords) }}
    >
        <Option value="Monday">Monday</Option>
        <Option value="Tuesday">Tuesday</Option>
        <Option value="Wednesday">Wednesday</Option>
        <Option value="Thursday">Thursday</Option>
        <Option value="Friday">Friday</Option>
        <Option value="Saturday">Saturday</Option>
        <Option value="Sunday">Sunday</Option>
    </Select>
</div>
```

```styl
.k-select
    margin-right 10px
```
