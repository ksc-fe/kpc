---
title: 自定义样式
order: 2
---

通过`color`、`strokeWidth`和`size`自定义加载动画的外观。

```vdt
import {Spin} from 'kpc';

<div>
    <Spin color="#f0b" />
    <Spin color="#0fb" strokeWidth={16} />
    <Spin size={64} />
</div>
```

```styl
.k-spin
    margin-right 16px
```
