---
title: 基本用法
order: 0
---

`Radio`的基本用法，及禁用状态。通过`v-model`进行数据双向绑定。由于`trueValue`的默认值为`true`，所以可以直接传入`value=true`
来指定选中状态。

> 选中状态的判定条件是`value === trueValue`，对于值为对象的情况要注意。

```vdt
import Radio from 'kpc/components/radio';

<div>
    <Radio v-model="value">radio</Radio>
    <Radio disabled>disabled radio</Radio>
    <Radio value={{ true }} disabled>disabled checked radio</Radio>
</div>
```

```styl
.k-radio
    margin-right 20px
```
