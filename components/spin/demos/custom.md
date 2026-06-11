---
title: 自定义样式
order: 2
---

通过`color`、`strokeWidth`、`size`和渐变属性自定义加载动画的外观。

```vdt
import {Spin} from 'kpc';

<div>
    <Spin color="#f0b" />
    <Spin color="#0fb" strokeWidth={16} />
    <Spin size={64} />
    <Spin
      gradientFrom="#3C7EFF"
      gradientTo="#8B5CF6"
      gradientX1="0%"
      gradientY1="0%"
      gradientX2="100%"
      gradientY2="0%"
    />
</div>
```

```styl
.k-spin
    margin-right 16px
```
