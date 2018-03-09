---
title: 基本用法
order: 0
---

`Checkbox`的基本用法，及禁用状态。由于`trueValue`的默认值为`true`，所以可以直接传入`value=true`
来指定选中状态。

> 选中状态的判定条件是`value === trueValue || value.indexOf(trueValue)`，对于值为对象的情况要注意。

```vdt
import Checkbox from 'kpc/components/checkbox';

<div>
    <Checkbox>checkbox</Checkbox>
    <Checkbox disabled>disabled checkbox</Checkbox>
    <Checkbox value={{ true }} disabled>disabled checked checkbox</Checkbox>
</div>
```

```styl
.k-checkbox
    margin-right 20px
```
