---
title: 
    zh-CN: 基础用法
    en-US: Basic usage
order: 0
---

## zh-CN

标签类型：`default`, `primary`, `success`, `warning` `danger`；添加`disabled`属性，可以禁用标签

## en-US

tag type: `default`, `primary`, `success`, `warning` `danger`；you can disable tag by adding `disabled` property.

```vdt
import Tag from 'kpc/components/tag';

<div>
    <Tag v-for={{ ['default', 'primary', 'success', 'warning', 'danger'] }}
        type={{ value }}
    >{{ value }}</Tag>
    <Tag disabled>disabled</Tag>
</div>
```

```styl
.k-tag
    margin-right 16px
```
