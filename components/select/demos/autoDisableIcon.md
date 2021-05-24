---
title: 自动禁用下拉箭头
order: 11
---

给`Select`添加`autoDisableIcon`属性，可以在如下情况下给下拉箭头一个`disabled`状态，来提示用户当前没有更多选择

1. 当没有`Option`时
2. 当只有一个`Option`并且用户已经选择了该`Option`时

```vdt
import {Select, Option} from 'kpc/components/select';

<div>
    <Select autoDisableIcon>
    </Select>
    <Select v-model="day" autoDisableIcon clearable>
        <Option value="Monday">星期一</Option>
    </Select>
</div>
```

```styl
.k-select
    margin-right 16px
```
