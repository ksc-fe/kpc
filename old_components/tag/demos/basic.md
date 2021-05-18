---
title: 基础使用
order: 0
---

标签类型：`default`, `primary`, `success`, `warning` `danger`；添加`disabled`属性，可以禁用标签

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
