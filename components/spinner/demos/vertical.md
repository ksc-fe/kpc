---
title: 竖直排列按钮
order: 3
---

添加`vertical`属性，即可实现控制按钮竖直排列的数字输入框

```vdt
import Spinner from 'kpc/components/spinner';

<div>
    <Spinner max={{ 5 }} min={{ -5 }} vertical size="large" />
    <Spinner max={{ 5 }} min={{ -5 }} vertical />
    <Spinner max={{ 5 }} min={{ -5 }} vertical size="small" />
    <Spinner max={{ 5 }} min={{ -5 }} vertical size="mini" />
</div>
```

```styl
.k-spinner
    margin-right 16px
```

