---
title: 被step整除
order: 1
---

当指定`step`并且同时指定`devideByStep`，则输入值除了边界值之外，必须为满足条件`min + step * n`(`n`为整数)的等差数列

```vdt
import Spinner from 'kpc/components/spinner';

<div>
    <Spinner v-model="value1" max={{ 10 }} min={{ 0 }} step={{ 1.2 }} devideByStep />
    <Spinner v-model="value2" max={{ 10 }} min={{ -10 }} step={{ 2 }} devideByStep />
</div>
```

```styl
.k-spinner
    margin-right 20px
```
