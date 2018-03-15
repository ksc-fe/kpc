---
title: 自定义显示内容
order: 5
---

`Option`的子元素可以是任意dom结构，而非仅仅只是字符串。此时如果需要支持`filterable`，我们应该
指定`label`，以便组件知道筛选的内容。

```vdt
import {Select, Option} from 'kpc/components/select';

const data = [
    {label: '星期一', value: 'Monday'},
    {label: '星期二', value: 'Tuesday'},
    {label: '星期三', value: 'Wednesday'},
    {label: '星期四', value: 'Thursday'},
    {label: '星期五', value: 'Friday'},
    {label: '星期六', value: 'Saturday'},
    {label: '星期天', value: 'Sunday'},
];

<Select v-model="day" filterable>
    <Option v-for={{ data }} value={{ value.value }} label={{ value.label }}>
        <div>
            <span>{{ value.label }}</span>
            <span style="float: right; color: #ccc">{{ value.value }}</span>
        </div>
    </Option>
</Select>
```
