---
title: 单行展示多选的值
order: 12 
---

`Select`添加`nowrap`属性，多选时，所有值仅展示单行

```vdt
import {Select, Option} from 'kpc';

<div>
    <Select multiple nowrap value={['Monday', 'Tuesday', 'Wednesday', 'Thursday']}>
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
