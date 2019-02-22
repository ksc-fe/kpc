---
title: 
    zh-CN: 基本用法
    en-US: Basic Usage
order: 0
---

## zh-CN

`Checkbox`的基本用法，及禁用状态。通过`v-model`进行数据双向绑定。由于`trueValue`的默认值为`true`，所以可以直接传入`value=true`
来指定选中状态。

> 选中状态的判定条件是`value === trueValue || value.indexOf(trueValue)`，对于值为对象的情况要注意。

## en-US

The basic and disabled usage of `Checkbox`. Since the default value of `trueValue` is `true`, you can 
pass `value=true` to specify checked state directly. 

> The judgment codition of the checked state is `value === trueValue || value.indexOf(trueValue)` 
> that attention should be paid to the case of value is an object.

```vdt
import Checkbox from 'kpc/components/checkbox';

<div>
    <Checkbox v-model="value">checkbox</Checkbox>
    <Checkbox disabled>disabled checkbox</Checkbox>
    <Checkbox value={{ true }} disabled>disabled checked checkbox</Checkbox>
</div>
```

```styl
.k-checkbox
    margin-right 20px
```
