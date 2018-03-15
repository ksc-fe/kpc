---
title: 分组
order: 6
---

用`OptionGroup`嵌套`Option`可以实现分组功能

```vdt
import {Select, Option, OptionGroup} from 'kpc/components/select';

<Select v-model="day">
    <OptionGroup label="工作日">
        <Option value="Monday">星期一</Option>
        <Option value="Tuesday">星期二</Option>
        <Option value="Wednesday">星期三</Option>
        <Option value="Thursday">星期四</Option>
        <Option value="Friday">星期五</Option>
    </OptionGroup>
    <OptionGroup label="休息日">
        <Option value="Saturday">星期六</Option>
        <Option value="Sunday">星期天</Option>
    </OptionGroup>
</Select>
```
