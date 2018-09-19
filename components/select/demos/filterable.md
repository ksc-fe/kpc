---
title: 可筛选
order: 4
---

指定`filterable`支持筛选，组件会同时对`label`和`value`进行筛选，你也可以通过
`filter`属性来自定义筛选函数

```vdt
import {Select, Option} from 'kpc/components/select';

<div>
    <Select v-model="day" filterable>
        <Option value="Monday">星期一</Option>
        <Option value="Tuesday">星期二</Option>
        <Option value="Wednesday">星期三</Option>
        <Option value="Thursday">星期四</Option>
        <Option value="Friday">星期五</Option>
        <Option value="Saturday">星期六</Option>
        <Option value="Sunday">星期天</Option>
    </Select>
    <Select v-model="days" filterable>
        <Option value="Monday">星期一</Option>
        <Option value="Tuesday">星期二</Option>
        <Option value="Wednesday">星期三</Option>
        <Option value="Thursday">星期四</Option>
        <Option value="Friday">星期五</Option>
        <Option value="Saturday">星期六</Option>
        <Option value="Sunday">星期天</Option>
    </Select>
    <Select v-model="day" filterable 
        filter={{ (keywords, item) => !keywords || item.label.includes(keywords) }}
    >
        <Option value="Monday">星期一</Option>
        <Option value="Tuesday">星期二</Option>
        <Option value="Wednesday">星期三</Option>
        <Option value="Thursday">星期四</Option>
        <Option value="Friday">星期五</Option>
        <Option value="Saturday">星期六</Option>
        <Option value="Sunday">星期天</Option>
    </Select>
</div>
```

```styl
.k-select
    margin-right 10px
```
