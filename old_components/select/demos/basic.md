---
title: 基础用法
order: 0
---

`Select`嵌套`Option`使用，用`v-model`进行双向数据绑定。支持键盘选择。当数据正在加载中时，可以添加
`loading`属性来标示加载状态

> 当`Select`传入的`value`在`Option`中不存在时，组件会强制将`value`置为空字符串。你也可以通过
> 添加`allowUnmatch`属性让它不置空

```vdt
import {Select, Option} from 'kpc/components/select';

<div>
    <div style="margin-bottom: 16px;">
        <Select v-model="day">
            <Option value="Monday">星期一</Option>
            <Option value="Tuesday">星期二</Option>
            <Option value="Wednesday">星期三</Option>
            <Option value="Thursday">星期四</Option>
            <Option value="Friday">星期五</Option>
            <Option value="Saturday">星期六</Option>
            <Option value="Sunday">星期天</Option>
        </Select>
        You selected: {{ self.get('day') }}
    </div>
    <Select loading></Select>
</div>
```
