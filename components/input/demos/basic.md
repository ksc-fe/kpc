---
title: 基础用法
order: 0
---

使用`v-model`绑定输入的值，`disabled`来禁用组件

```vdt
import Input from 'kpc/components/input';

<div>
    <Input v-model="value" placeholder="please enter" /> {{ self.get('value') }}
    <br />
    <Input disabled placeholder="disabled" />
</div>
```

```styl
.k-input
    margin 5px
```
