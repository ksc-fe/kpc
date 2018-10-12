---
title: 选择框的类型
order: 2
---

通过`checkType`设置行选择类型，`checkbox`多选(默认) / `radio`单选 / `none`不可选

```vdt
import Table from 'kpc/components/table';

const scheme = {a: '表头'};
const data1 = [{a: '多选1'}, {a: '多选2'}];
const data2 = [{a: '单选1'}, {a: '单选2'}];
const data3 = [{a: '不可选1'}, {a: '不可选2'}];

<div>
    <Table scheme={{ scheme }} data={{ data1 }} ref="__checkbox" />
    <Table scheme={{ scheme }} data={{ data2 }} checkType="radio" ref="__radio" />
    <Table scheme={{ scheme }} data={{ data3 }} checkType="none" />
</div>
```

```styl
.k-table-wrapper
    margin-bottom 20px
```







