---
title: 分组
order: 6
---

用`OptionGroup`嵌套`Option`可以实现分组功能。我们还可以通过添加`card`属性来支持卡片式分组功能。
`OptionGroup`支持`label`扩展点，用来定义复杂的分组标签展示

```vdt
import {Select, Option, OptionGroup} from 'kpc/components/select';

<div>
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
    <Select v-model="day" card>
        <OptionGroup label="工作日">
            <Option value="Monday">星期一</Option>
            <Option value="Tuesday">星期二</Option>
            <Option value="Wednesday">星期三</Option>
            <Option value="Thursday">星期四</Option>
            <Option value="Friday">星期五</Option>
        </OptionGroup>
        <OptionGroup>
            <b:label><i class="ion-wineglass"></i>休息日</b:label>
            <Option value="Saturday">星期六</Option>
            <Option value="Sunday">星期天</Option>
        </OptionGroup>
    </Select>
</div>
```

```styl
.k-select
    margin-right 10px
/.k-select-dropdown
    .ion-wineglass
        margin-right 8px
    .k-tab
        text-align right
```
