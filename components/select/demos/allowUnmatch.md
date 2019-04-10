---
title: 
    zh-CN: 输入和选择
    en-US: Input and selection
order: 8
---
## zh-CN

同时指定`filterable`和`allowUnmatch`支持筛选到不存在的条目时，可以返回输入的值，而不是清空输入

> 目前只支持单选

## en-US

Specifying both `filterable` and `allowUnmatch` to support filtering to entries that do not exist can return the value entered instead of clearing the input.

> Currently only supports single selection

```vdt
import {Select, Option} from 'kpc/components/select';

<div>
    <Select v-model="day" filterable allowUnmatch style="margin-right: 10px">
        <Option value="Monday">Monday</Option>
        <Option value="Tuesday">Tuesday</Option>
        <Option value="Wednesday">Wednesday</Option>
        <Option value="Thursday">Thursday</Option>
        <Option value="Friday">Friday</Option>
        <Option value="Saturday">Saturday</Option>
        <Option value="Sunday">Sunday</Option>
    </Select>
    Day: {{ self.get('day') }}
</div>
```
