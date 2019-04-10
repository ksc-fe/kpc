---
title: 
    zh-CN: 基本用法
    en-US: Basic Usage
order: 0
---
## zh-CN

通过`disabled`禁用组件，`v-model`进行数据双向绑定。

## en-US

Disable the component by `disabled` and `v-model` to bind the data in both directions

```vdt
import {Switch} from 'kpc/components/switch';

<div>
    <Switch v-model="value" />
    <Switch disabled />
</div>
```

```styl
.k-switch
    margin-right 20px
```
