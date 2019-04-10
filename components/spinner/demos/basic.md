---
title: 
    zh-CN: 基础用法
    en-US: Basic usage
order: 0
---
## zh-CN

使用`v-model`进行双向数据绑定，`disabled`禁用组件

## en-US

Two-way data binding with `v-model`, `disabled` disables components

```vdt
import Spinner from 'kpc/components/spinner';

<div>
    <Spinner v-model="value" />
    <Spinner disabled />
</div>
```

```styl
.k-spinner
    margin-right 20px
```
