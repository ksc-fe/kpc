---
title: 无边框模式
order: 9
---

给`Select`添加`noBorder`属性，可以展示无边框模式，该模式下组件的宽度由当前选择的文案长度撑开

```vdt
import {Select, Option} from 'kpc/components/select';

<Select noBorder>
    <Option value="default">默认主题</Option>
    <Option value="ksyun">金山云主题</Option>
</Select>
```
