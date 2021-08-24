---
title: 基础用法
order: 0
---

使用`v-model`进行双向数据绑定，`disabled`禁用组件

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
