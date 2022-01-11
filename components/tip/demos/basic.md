---
title: 基础用法
order: 0
---

标签类型：`default`, `primary`, `success`, `warning` `danger`

```vdt
import {Tip} from 'kpc';

<div>
    <Tip v-for={['default', 'primary', 'success', 'warning', 'danger']}
        type={$value}
    >{$value}</Tip>
</div>
```

```styl
.k-tip
    margin-bottom 8px
```
