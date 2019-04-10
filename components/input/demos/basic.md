---
title:
    zh-CN: 基本用法
    en-US: Basic usage
order: 0
---

## zh-CN

使用`v-model`绑定输入的值，`disabled`来禁用组件

## en-US

Use the ` v - model ` binding input values, ` disabled ` to disable the component

```vdt
import Input from 'kpc/components/input';

<div>
    <Input v-model="value" placeholder="please enter" ref="__test" /> {{ self.get('value') }}
    <br />
    <Input disabled placeholder="disabled" />
</div>
```

```styl
.k-input
    margin 5px
```
