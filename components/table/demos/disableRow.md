---
title: 禁用行可选
order: 7
---

`disableRow`：禁用某一行可选状态，类型：`Function`，默认：`function(data, index) { return false }`，该函数
如果返回`true`，则表示禁用该行可选

> 禁用的数据默认会在每一行的元素上有`k-disabled`样式

```vdt
import Table from 'kpc/components/table';

const scheme = {a: '奇数行不可点击'};
const data = [{a: '1'}, {a: '2'}, {a: '3'}, {a: '4'}, {a: '5'}]


<Table scheme={{ scheme }} data={{ data }}
    disableRow={{ (data, index) => index % 2 !== 0 }}
/>
```

```styl
.k-disabled
   background-color: #d9d9d9
```







