---
title: 
    zh-CN: 内联模式
    en-US: Inline mode
order: 9
---
## zh-CN

给`Select`添加`inline`属性，可以展示内联模式，该模式下，组件没有边框，宽度和高度如同内联元素一样由内容撑开

## en-US

Add `inline` property to `Select` to display inline mode. In this mode, the component has no border, and the width and height are expanded by content like inline elements

```vdt
import {Select, Option} from 'kpc/components/select';

<Select inline>
    <Option value="default">default</Option>
    <Option value="ksyun">ksyun</Option>
</Select>
```
