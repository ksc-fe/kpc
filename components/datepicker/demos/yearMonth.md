---
title: 
    zh-CN: 选择年或月
    en-US: Select Year or Month
order: 5.1
---

## zh-CN

将`type`属性指定为`year`或`month`可以只选择“年”或“月”

## en-US

Setting the `type` property as `year` or `month` can only select year or month.

```vdt
import Datepicker from 'kpc/components/datepicker';

<div>
    <Datepicker type="year" v-model="year" />
    <Datepicker type="month" v-model="month" clearable />
</div>
```

```styl
.k-datepicker
    margin-right 20px
```
