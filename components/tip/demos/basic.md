---
title: 
    zh-CN: 基础用法
    en-US: Basic usage
order: 0
---

## zh-CN

标签类型：`default`, `primary`, `success`, `warning` `danger`

## en-US

The tag type: `default`, `primary`, `success`, `warning` `danger`

```vdt
import Tip from 'kpc/components/tip';

<div>
    <Tip v-for={{ ['default', 'primary', 'success', 'warning', 'danger'] }}
        type={{ value }}
    >{{ value }}</Tip>
</div>
```

```styl
.k-tag
    margin-bottom 8px
```
