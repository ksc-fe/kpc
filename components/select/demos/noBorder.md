---
title: 内联模式
order: 9
---

给`Select`添加`inline`属性，可以展示内联模式，该模式下，组件没有边框，宽度和高度如同内联元素一样由内容撑开

```vdt
import {Select, Option} from 'kpc/components/select';

<Select inline>
    <Option value="default">默认主题</Option>
    <Option value="ksyun">金山云主题</Option>
</Select>
```
